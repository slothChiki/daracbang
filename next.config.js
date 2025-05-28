// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
// };
//
// module.exports = nextConfig;
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.css$/,
//       exclude: /node_modules/,
//       loader: ['style-loader', 'css-loader'],
//     });
//     return config;
//   },
// };
const _ = require('lodash');
const { i18n } = require('./next-i18next.config');
// const { Config } = require('./src/config/next/config');
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  poweredByHeader: false,
  i18n,
  env: {},
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // 중요: 서버 전용 output 구조
  experimental: {
    appDir: false, // ✅ pages 디렉토리 기반 SSR만 사용
  },
};

// const newConfig = _.merge(nextConfig, Config);
const newConfig = nextConfig;
module.exports = {
  ...newConfig,
};
