const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  staticImage: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static exports
  images: {
    unoptimized: true,
  },
  basePath: '', // Add this if deploying to a subfolder
  assetPrefix: '', // Add this if assets are served from a different domain
 
};

module.exports = withNextra(nextConfig);