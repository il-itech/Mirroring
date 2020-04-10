const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const nextConfig = {
  typescript: {
    ignoreDevErrors: true,
  },
};

module.exports = withPlugins([
  withImages,
  [withSass, {
    test: /\.s?css$/,
    use: [
      'cache-loader',
      'css-loader',
      'sass-loader',
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
    ],
  }],
  [withBundleAnalyzer, {
    enabled: process.env.ANALYZE === 'true',
  }],
], nextConfig);
