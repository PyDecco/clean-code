module.exports = {
  roots: [''],
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
