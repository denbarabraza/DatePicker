import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import dotenv from 'rollup-plugin-dotenv';

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
        babelHelpers: 'bundled',
      }),
      alias({
        resolve: ['.js', '.jsx', '.ts', '.tsx'],
        entries: [{ find: 'src', replacement: './src' }],
      }),
      postcss({
        modules: true,
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      external(),
      terser(),
      dotenv(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: ['styled-components'],
    plugins: [dts(), dotenv()],
  },
];
