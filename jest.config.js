module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    resources: 'usable',
  },
  setupFiles: ['jest-webgl-canvas-mock'],
  moduleNameMapper: {
    '^src(.*)': '<rootDir>/src$1',
    '^test(.*)': '<rootDir>/test$1',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.[m|t]?js$': 'babel-jest',
  },
  transformIgnorePatterns: [],
};