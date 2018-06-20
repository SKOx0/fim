module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!chrome-launcher)"
  ],

  "lint-staged": {
    "*.ts": [
      "npm run prettier",
      "git add"
    ]
  }
};
