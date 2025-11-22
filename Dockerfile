# Dockerfile optimizado para Next.js estático en Linux ARM64
# Multi-stage build para minimizar el tamaño final

# Etapa 1: Build
FROM node:18-alpine AS builder

# Instala dependencias del sistema necesarias para compilación nativa
RUN apk add --no-cache libc6-compat python3 make g++

WORKDIR /app

# Copia archivos de dependencias primero (para mejor caché de Docker)
COPY package.json package-lock.json ./

# Instala dependencias usando npm ci (más rápido y confiable que npm install)
# --include=dev es necesario porque TypeScript está en devDependencies
RUN npm ci --include=dev

# Verifica que next esté instalado
RUN npm list next || (echo "Error: Next.js no instalado" && exit 1)

# Copia el resto de los archivos del proyecto
COPY . .

# Configura variables de entorno para el build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Construye la aplicación (genera la carpeta out/)
RUN npm run build

# Verifica que la carpeta out/ se haya generado
RUN test -d /app/out || (echo "Error: carpeta out/ no generada" && exit 1)

# Etapa 2: Production con nginx (imagen mínima)
FROM nginx:alpine

# Copia los archivos estáticos generados
COPY --from=builder /app/out /usr/share/nginx/html

# Configuración de nginx optimizada para SPA
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # Compresión gzip \
    gzip on; \
    gzip_vary on; \
    gzip_min_length 1024; \
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript; \
    \
    # Cache para assets estáticos \
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    \
    # Rutas de Next.js (SPA routing) \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
