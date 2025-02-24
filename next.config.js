const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  staticImage: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: '.',
  basePath: process.env.NODE_ENV === 'production' ? '/mayura-andrew.github.io' : '',
  trailingSlash: true,
};

module.exports = withNextra(nextConfig);
