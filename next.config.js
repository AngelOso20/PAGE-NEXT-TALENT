/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración para export estático
  output: 'export',
  // Forzar trailing slash para mejor compatibilidad con Nginx
  trailingSlash: true,
  images: {
    unoptimized: true, // Necesario para export estático
    remotePatterns: [],
  },
  // Configuración para evitar problemas de conexión
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig
