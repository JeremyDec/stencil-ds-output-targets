export default {
  input: 'src/index.js',
  external: ['path', 'node-sass', 'fs', 'util'],
  output: [
    {
      format: 'cjs',
      file: './dist/index.cjs.js'
    },
    {
      format: 'es',
      file: './dist/index.es.js'
    },
  ],
};
