module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      loader: 'babel'
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  resolve: {
   extensions: ['', '.js', '.jsx', '.styl']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
