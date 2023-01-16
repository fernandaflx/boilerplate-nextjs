/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = nextConfig

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

module.exports = withPWA({})
