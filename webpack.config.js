/* eslint-ignore */

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDevelopment = process.env.NODE_ENV === 'development' || process.argv.includes('--development'),
  srcDir = path.resolve(process.cwd(), "src"),
  outDir = path.resolve(process.cwd(), "dist"),
  publicPath = '/dist/'

const entry = {
  index: './src/index'
}
if (isDevelopment) {
  entry['example'] = './src/example/index'
}

/** @type {import('webpack').Configuration} */
const config = {
  mode: isDevelopment ? 'development' : 'production',
  entry: entry,
  output: {
    publicPath,
    path: outDir,
    filename: '[name].js',
    library: 'jsonSchemaDesigner',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~': srcDir,
    },
  },

  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'node_modules'),
    ],
  },

  devtool: 'source-map',

  module: {
    rules: [
      { // TS
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      // { // FILE
      //   test: /\.(png|jpg|gif|ttf|woff2?|otf)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {},
      //     },
      //   ],
      // },
      { // SASS
        test: /\.s[ac]ss$/i,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
      { // CSS
        test: /\.css$/i,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      { // VUE
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDevelopment ? '"development"' : '"production"',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}

module.exports = config
