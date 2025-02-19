const esModules = ['@agm', 'ngx-bootstrap', 'lodash-es'].join('|');

const config = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePaths: ['core'],
  setupFilesAfterEnv: ['./scripts/setupTest.ts', 'jest-canvas-mock'],
  globalSetup: './scripts/setupGlobalJest.ts',
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jest-environment-jsdom-fifteen',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'html'],
  verbose: true,
  collectCoverageFrom: [
    'core/**/*.{ts,tsx}',
    '!core/components/css-utilities/**',
    '!core/utils/**',
    '!**/dist/**/*',
    '!**/__stories__/**/*',
    '!**/*.story.tsx',
    '!core/*.type.tsx',
    '!core/*.d.ts',
  ],
  globals: {
    window: true,
    timers: 'fake',
    'ts-jest': {
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/core/$1',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
  },
};

module.exports = config;
