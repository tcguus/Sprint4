// next.config.js
module.exports = {
    experimental: {
        serverComponentsExternalPackages: ["oracledb"],
    },
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "@azure/app-configuration": false,
        "@azure/identity": false,
        "@azure/keyvault-secrets": false,
        "oci-common": false,
        "oci-objectstorage": false,
        "oci-secrets": false,
      };
      return config;
    },
  };
  
  