module.exports = {
  "verbose": true,
  "testURL": "https://localhost",
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.js",
    "!src/**/*.test.js"
  ],
  "unmockedModulePathPatterns": [
    "./node_modules/jasmine-reporters"
  ]
}
