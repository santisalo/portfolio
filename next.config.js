const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin(  
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: 'export',
  reactStrictMode: false,
};

module.exports = withNextIntl(nextConfig);
