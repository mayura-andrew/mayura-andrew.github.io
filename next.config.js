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
  basePath: process.env.NODE_ENV === 'production' ? '/mayura-andrew.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mayura-andrew.github.io/' : '',
};

module.exports = withNextra(nextConfig);
