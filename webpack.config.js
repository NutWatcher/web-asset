module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          "presets": ["latest","react"]
        }
      },
      {
        test: /\.(mp4|ogg|svg|mp3)$/,
        loader: 'url'
      }
    ]
  }
}
