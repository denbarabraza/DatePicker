import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import path from '@babel/core/lib/vendor/import-meta-resolve.js';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
                edge: '17',
                firefox: '60',
                chrome: '67',
                safari: '11.1',
              },
            },
          ],
          '@babel/preset-react',
        ],
      }),
      alias({
        '@/*': path.resolve(__dirname, 'src'),
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
