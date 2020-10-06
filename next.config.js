const path = require('path');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CURRENT_DIRECTORY = process.cwd();

const nextConfig = {
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
};

module.exports = withPlugins([
  [withImages],
  [withSass, {
    test: /\.scss$/,
    use: [
      'cache-loader',
      'css-loader',
      'sass-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'postcss-loader',
        options: {
          plugins() {
            return [
              autoprefixer({ grid: true }),
              precss,
            ];
          },
        },
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.join(CURRENT_DIRECTORY, 'src/customizations/resources.scss'),
        },
      },
    ],
  }],
  [withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  }), {}],
], nextConfig);
