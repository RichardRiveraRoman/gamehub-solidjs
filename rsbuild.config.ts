import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginSolid } from '@rsbuild/plugin-solid';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
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
    postcss: (opts, { addPlugins }) => {
      console.log('PostCSS Options:', JSON.stringify(opts, null, 2));
      addPlugins([
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ]);
    },
  },
});
