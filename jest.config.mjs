export default {
  testEnvironment: 'node',
  verbose: true,
  transform: {
    // 'node_modules/.pnpm/usearch@2.11.1/node_modules/usearch/javascript/dist/esm/usearch.js': '<rootDir>/usearch-transform.js',
  },
  transformIgnorePatterns: [
    '\\.pnp\\.[^\\/]+$',
  ],
};
