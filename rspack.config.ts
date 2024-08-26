import type { SwcLoaderOptions } from '@rspack/core';

export default {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              experimental: {
                plugins: [['typewind/swc', {}]],
              },
            },
          } satisfies SwcLoaderOptions,
        },
      },
    ],
  },
};
