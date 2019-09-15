const path = require("path");
const withCSS = require("@zeit/next-css");

const withMDX = require("@next/mdx")({
  // parse mdx files
  extension: /\.mdx?$/
});

const baseConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack(config) {
    config.resolve.modules = [path.resolve("./src"), ...config.resolve.modules];
    return config;
  }
};

module.exports = [withCSS, withMDX].reduce((a, b) => b(a), baseConfig);
