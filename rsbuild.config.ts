import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginSolid } from '@rsbuild/plugin-solid';
import { pluginSass } from '@rsbuild/plugin-sass';

const { publicVars } = loadEnv({ prefixes: ['SOLID_'] });
// console.log('Using public vars:', publicVars);
if (process.env.NODE_ENV === 'development') {
  console.log('this is a development log');
}

export default defineConfig({
  source: {
    define: publicVars,
  },
  plugins: [
    pluginBabel({
      include: /\.tsx$/,
    }),
    pluginSolid(),
    pluginSass({
      sassLoaderOptions: {
        implementation: require.resolve('sass'),
        sourceMap: true,
        sassOptions: {
          loadPaths: ['./src'],
        },
      },
    }),
  ],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [
          require('postcss-import'),
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  },
});
