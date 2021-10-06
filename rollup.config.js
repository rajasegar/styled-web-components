import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: [
  {
    file: 'dist/styled-web-components.min.js',
  },
  {
    file: 'dist/styled-web-components.js',
    format: 'cjs'
  },
  {
    name: 'styled-web-components',
    file: 'dist/styled-web-components.umd.min.js',
    format: 'umd'
  },

  ],
  plugins: [
    terser()
  ]
};

