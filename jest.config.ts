module.exports = {
  preset: "@chainsafe/dappeteer",
  testMatch: ["**/?(*.)+(spec|test).js"],
  testPathIgnorePatterns: ["/node_modules/", "dist"],
  globalSetup: "./setup.js",
  detectOpenHandles: true,
  silent: false,
};
