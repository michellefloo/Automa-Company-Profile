module.exports = {
  devtool: "source-map", // Enable source maps
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true, 
            },
          },
          {
            loader: "sass-loader", 
            options: {
              implementation: require("sass"), 
            },
          },
        ],
      },
    ],
  },
};
