module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["./tests/jest.setup.js"],
  testMatch: ["**/tests/**/*.test.js"],
  verbose: true,
  testTimeout: 30000,
};
