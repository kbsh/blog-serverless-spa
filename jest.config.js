module.exports = {
  verbose: true,
//  setupFiles: [
//      "<rootDir>/config/setupEnzyme.js"
//  ],
  transform: {
    "\\.tsx?$": "ts-jest"
  },
  testRegex: "/__tests__/.*(\\.|/)test\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "ts",
    "tsx"
  ],
  collectCoverageFrom: ["src/**.ts", "src/**.tsx"]
};
