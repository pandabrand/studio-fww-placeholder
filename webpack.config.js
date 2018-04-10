// webpack.config.js
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    site: './source/javascripts/site.js',
    styles: './source/stylesheets/styles.scss',
  },

  resolve: {
    modules: [
        __dirname + '/source',
        __dirname + '/node_modules',
    ],
    extensions: ['.js', '.css', '.scss']
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/javascripts/[name].bundle.js',
  },
  module:{
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules|\.tmp|vendor/,
          loader: 'babel-loader'
        },
        {
            test: /.*\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }
                ]
            })
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            })
        }
      ]
  },
  plugins: [
     new webpack.DefinePlugin({
         'process.env': {
             NODE_ENV: JSON.stringify(process.env.NODE_ENV)
         },
     }),
     new clean(['.tmp']),
     new ExtractTextPlugin("assets/stylesheets/[name].bundle.css")
  ]
};