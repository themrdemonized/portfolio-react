// jest.config.mjs

import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
	// Add more setup options before each test is run
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', "jest-expect-message"],
	testEnvironment: 'jest-environment-jsdom',
	preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)

// module.exports = {
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//     testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//     moduleNameMapper: {
//         '\\.(scss|sass|css)$': 'identity-obj-proxy',
//       },
//     transform: {
//         "^.+\\.(t|j)sx?$": "@swc/jest",
//     },
//   };
	