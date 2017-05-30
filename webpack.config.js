const config = {
  entry: {
    app: './src/Client.tsx',
  },
  output: {
    path: __dirname + '/public/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2016'],
            }
          },
          'awesome-typescript-loader',
        ]
      }
    ]
  },
}

module.exports = (env) => {
  return config;
}
