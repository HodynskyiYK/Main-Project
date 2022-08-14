require('dotenv').config()

module.exports = {eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    APP_API: process.env.APP_API
  }
}