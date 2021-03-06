/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const PUBLIC_PATH = './public';

module.exports = () => {
  const config = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
      open: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        containers: path.resolve(__dirname, 'src/containers/'),
        config: path.resolve(__dirname, 'src/config/'),
        routes: path.resolve(__dirname, 'src/routes/'),
        utils: path.resolve(__dirname, 'src/utils/'),
        types: path.resolve(__dirname, 'src/types/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            compiler: 'ttypescript',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new ProgressBarPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, PUBLIC_PATH, 'index.html'),
        filename: './index.html',
      }),
    ],
  };

  return config;
};
