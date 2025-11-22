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

# Copia configuración de Nginx optimizada para Next.js estático
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone puerto 80
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
