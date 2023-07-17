const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs')

const sentryWebpackPluginOptions = {
  org: 'sidewalk-entertainment',
  project: 'sidewalkplay-nextjs',
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: true,

  widenClientFileUpload: true,

  transpileClientSDK: true,

  tunnelRoute: '/monitoring',

  hideSourceMaps: true,

  disableLogger: true,
}

module.exports = nextConfig
// module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
