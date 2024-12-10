module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'your-image-host.com',
            port: '', // Leave blank if no specific port
            pathname: '/images/**', // Adjust the pathname to match the image URL path
          },
        ],
      },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
    webpack(config) {
      config.optimization.splitChunks = {
        chunks: 'all', // Ensures better code splitting
      };
      return config;
    },
  };
  