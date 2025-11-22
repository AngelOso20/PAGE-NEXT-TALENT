# Dockerfile optimizado para Next.js estático - Sin dependencias nativas
# Multi-stage build para minimizar tamaño

# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia archivos de dependencias primero (mejor caché de Docker)
COPY package.json package-lock.json ./

# Instala dependencias (Next.js SWC viene precompilado, no necesita compilación)
RUN npm ci --include=dev

# Copia el resto de los archivos
COPY . .

# Variables de entorno para optimizar el build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Construye la aplicación estática (genera carpeta out/)
RUN npm run build

# Verifica que la carpeta out/ existe
RUN test -d /app/out || (echo "Error: carpeta out/ no generada" && exit 1)

# Etapa 2: Production - Solo nginx (imagen mínima)
FROM nginx:alpine

# Copia archivos estáticos generados
COPY --from=builder /app/out /usr/share/nginx/html

# Configuración optimizada de nginx para SPA
RUN cat > /etc/nginx/conf.d/default.conf << 'NGINX_CONFIG'
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Compresión gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/json application/javascript;

    # Cache para assets estáticos
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Rutas de Next.js (SPA routing)
    location / {
        try_files $uri $uri/ /index.html;
    }
}
NGINX_CONFIG

# Expone puerto 80
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
