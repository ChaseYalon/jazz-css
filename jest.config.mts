export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts", ".mts", ".mjs"],
  transform: {
    "^.+\\.mts$": ["ts-jest", { useESM: true }],
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
    "^.+\\.mjs$": "babel-jest"
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  moduleFileExtensions: ["ts", "mts", "js", "mjs", "json", "node"],
  testMatch: ["/tests/*.test.mts"]
};
