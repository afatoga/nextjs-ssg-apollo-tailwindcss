module.exports = {
  i18n: {
    locales: ["en", "cs", "ru"],
    defaultLocale: "cs",
  },
  target: "serverless",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
