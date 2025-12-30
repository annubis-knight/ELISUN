const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const posthtml = require('posthtml');
const posthtmlInclude = require('posthtml-include');

const isProduction = process.env.NODE_ENV === 'production';

// Fonction pour traiter les includes PostHTML dans un fichier HTML
const processHtmlWithIncludes = (templatePath) => {
  const content = fs.readFileSync(templatePath, 'utf-8');
  const result = posthtml([
    posthtmlInclude({
      root: path.resolve(__dirname, 'src'),
      encoding: 'utf-8'
    })
  ]).process(content, { sync: true });

  return result.html;
};

// Factory pour créer les plugins HtmlWebpackPlugin avec preprocessing
const createHtmlPlugin = (template, filename, extraOptions = {}) => {
  const templatePath = path.resolve(__dirname, 'src/pages', template);

  return new HtmlWebpackPlugin({
    templateContent: () => processHtmlWithIncludes(templatePath),
    filename: filename,
    inject: 'body',
    minify: isProduction ? {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    } : false,
    ...extraOptions
  });
};

module.exports = {
  mode: isProduction ? 'production' : 'development',

  entry: {
    main: './src/js/main.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
    clean: true,
  },

  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
      {
        directory: path.join(__dirname, 'src'),
        publicPath: '/',
      },
    ],
    compress: true,
    port: 8080,
    hot: true,
    open: true,
    watchFiles: ['src/**/*'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        },
      },
    ],
  },

  plugins: [
    // Pages HTML avec injection PostHTML-Include via templateContent
    createHtmlPlugin('index.html', 'index.html'),
    createHtmlPlugin('materiel.html', 'materiel.html'),
    createHtmlPlugin('installation.html', 'installation.html'),
    createHtmlPlugin('faq.html', 'faq.html'),

    // Copier les assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
        },
      ],
    }),

    ...(isProduction ? [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
      }),
    ] : []),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  devtool: isProduction ? 'source-map' : 'eval-source-map',
};
