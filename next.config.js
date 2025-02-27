const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  staticImage: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  assetPrefix: ".",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

module.exports = withNextra(nextConfig);
