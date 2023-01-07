/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoia2luc2xleTAwNyIsImEiOiJjbGNqaXhqYnowamFjM3BtdHM1dTFxenE5In0.oRyMZd5HAyhx53OA1uOw-g',
  },
}

module.exports = nextConfig