const withTM = require('next-transpile-modules')(['ui']);

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['en', 'uk', 'nl', 'ru'],
    defaultLocale: 'en',
  },
});
