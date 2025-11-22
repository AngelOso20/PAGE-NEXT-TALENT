# Dockerfile para Next.js estático con nginx
# Multi-stage build para optimizar el tamaño

# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia archivos de dependencias
COPY package*.json ./

# Instala dependencias (Next.js instalará automáticamente las dependencias SWC correctas para Linux)
RUN npm install

# Copia el resto de los archivos
COPY . .

# Construye la aplicación (genera la carpeta out/)
RUN npm run build

# Etapa 2: Production con nginx
FROM nginx:alpine

# Copia los archivos estáticos generados
COPY --from=builder /app/out /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# nginx se inicia automáticamente
CMD ["nginx", "-g", "daemon off;"]
