/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Создаем статический сайт для GitHub Pages
  images: {
    unoptimized: true, // Отключаем оптимизацию картинок
  },
  basePath: '/connecthub',
}

module.exports = nextConfig