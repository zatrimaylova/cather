const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "react-scripts": path.resolve(__dirname, "node_modules/react-scripts"),
  })
);
