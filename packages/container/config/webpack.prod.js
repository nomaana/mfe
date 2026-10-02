const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

// This is an ENV variable that is set .It define that we build out application via CI/CD pipeline.
const domain = process.env.PRODUCTION_DOMAIN;
// Out container appliction has remotes of "Markiting","Dashboard" and "Auth" all this sub-project
// All we can have the remote entry file of this and it is hosted at the same domain.
// It  should not be overrid on each other so we give the path "marketing@${domain}/marketing/remoteEntry.js`,".

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
