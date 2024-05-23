export default {
  testEnvironment: "node",
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!usearch-jest-app)'
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
}
