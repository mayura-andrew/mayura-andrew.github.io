const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  staticImage: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '', 
  // Silence Next.js 16 Turbopack error by providing an empty config
  experimental: {
    turbopack: {}
  }
};

module.exports = withNextra(nextConfig);