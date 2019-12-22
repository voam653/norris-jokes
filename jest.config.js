// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/coverage/**",
    "!**/config/**",
    "!**/src/index.js",
    "!**/service-worker/**",
    "!**/style.js",
    "!**/*.config.js",
    "!**/actionsTypes.js"
  ]
};
