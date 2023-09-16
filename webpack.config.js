const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/javascript/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/javascript"),
  },
};
