// Goal of the loader is to process some differnt files as we start to import them  into our project.
// that ends with an extension of either mjs or just js, we want it to be processed by bable

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,

        use: {
          loader: "babel-loader",

          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],

            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
