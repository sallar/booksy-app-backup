module.exports = {
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  collectCoverage: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
};
