// jest.config.js
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts', '.mts'],
  transform: {
    '^.+\\.m?tsx?$': ['ts-jest', {
      useESM: true,
      tsconfig: './tsconfig.json'
    }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.m?js$': '$1',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'mts', 'js', 'jsx', 'mjs', 'json'],
  rootDir: '.',
  // Update this line to match your test directory structure
  testMatch: ['**/tests/**/*.test.mts', '**/test/**/*.test.mts', '**/*.test.mts'],
}