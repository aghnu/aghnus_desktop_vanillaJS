const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/main.js',

  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(mp3|ogg)$/,
        loader: 'file-loader'
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};