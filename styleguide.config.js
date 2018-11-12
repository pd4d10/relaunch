module.exports = {
  components: 'src/components/**/*.tsx',
  propsParser: require('react-docgen-typescript').parse,
  require: ['bootstrap/dist/css/bootstrap.min.css'], // https://github.com/styleguidist/react-styleguidist/blob/master/docs/Cookbook.md#how-to-add-custom-javascript-and-css-or-polyfills
  webpackConfig: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: { errorsAsWarnings: true },
        },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      ],
    },
  },
}