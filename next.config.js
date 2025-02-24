const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  staticImage: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_BASE_PATH 
    : '',
  assetPrefix: process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : '',
}

module.exports = nextConfig