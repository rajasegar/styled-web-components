import { terser } from 'rollup-plugin-terser'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/styled-web-components.min.js',
        },
        {
            file: 'dist/styled-web-components.js',
            format: 'cjs',
        },
        {
            name: 'styled-web-components',
            file: 'dist/styled-web-components.umd.min.js',
            format: 'umd',
        },
    ],
    plugins: [
        process.env.NODE_ENV === 'prod' && terser(),
        serve({
            contentBase: ['dist'],
            open: true,
        }),
        livereload(),
    ],
}
