const PreactRefreshPlugin = require('@prefresh/webpack');

module.exports = {
  webpack: {
    alias: { react: 'preact/compat', 'react-dom': 'preact/compat' },
    plugins: {
      add: [new PreactRefreshPlugin()],
    },
  },
  devServer: {
    hot: true,
  },
};
