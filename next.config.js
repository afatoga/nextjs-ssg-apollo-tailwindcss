const { i18n } = require("./next-i18next.config");

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // other stuff
  i18n,
  async rewrites() {
    return [
      {
        source: "/en/sluzby",
        destination: "/en/services",
        locale: false, // Use `locale: false` so that the prefix matches the desired locale correctly
      },
      {
        source: "/ru/uslugi",
        destination: "/ru/sluzby",
        locale: false,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;
