const PATH = require('path');

module.exports = {
  mode: 'development',
  entry: './src/taf-widgets.module.js',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'taf-widgets.js',
    library: 'taf-widgets',
    libraryTarget: 'amd'
  },
  externals: {
    'angular': 'angular',
    'angular-translate': 'angularTranslate',
    'angular-translate-loader-partial': 'angularTranslatePartial',
    'angular-ui-bootstrap': 'uiBootstrap',
    'angular-ui-router': 'uiRouter',
    'lodash': 'lodash',
    'moment': 'moment',
    'highcharts': 'highcharts'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ng-annotate-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-modules-amd']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|svg|gif)(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
