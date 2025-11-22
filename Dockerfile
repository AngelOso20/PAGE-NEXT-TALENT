# Dockerfile optimizado para Next.js estático - Sin dependencias nativas
# Multi-stage build para minimizar tamaño

# Etapa 1: Build
FROM node:18-bullseye AS builder

WORKDIR /app

# Copia archivos de dependencias primero (mejor caché de Docker)
COPY package.json ./
COPY package-lock.json* ./

# Instala dependencias usando npm install (más tolerante que npm ci)
# --legacy-peer-deps ayuda con conflictos de dependencias
# --include=dev instala devDependencies necesarias para el build
RUN npm install --include=dev --legacy-peer-deps || \
    npm install --include=dev

# Verifica que next esté instalado
RUN npm list next || (echo "Next.js no encontrado, reinstalando..." && npm install next@14.2.5 --save)

# Copia el resto de los archivos
COPY . .

# Variables de entorno para optimizar el build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Construye la aplicación estática (genera carpeta out/)
RUN npm run build

# Verifica que la carpeta out/ existe
RUN test -d /app/out || (echo "Error: carpeta out/ no generada" && ls -la /app && exit 1)

# Etapa 2: Production - Solo nginx (imagen mínima)
FROM nginx:alpine

# Copia archivos estáticos generados
COPY --from=builder /app/out /usr/share/nginx/html

# Configuración optimizada de nginx para SPA
# Usamos printf para crear el archivo de configuración
RUN printf 'server {\n\
    listen 80;\n\
    server_name _;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    \n\
    # Compresión gzip\n\
    gzip on;\n\
    gzip_vary on;\n\
    gzip_min_length 1024;\n\
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;\n\
    \n\
    # Cache para assets estáticos\n\
    location ~* \\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp)$ {\n\
        expires 1y;\n\
        add_header Cache-Control "public, immutable";\n\
    }\n\
    \n\
    # Rutas de Next.js (SPA routing)\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

# Expone puerto 80
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
