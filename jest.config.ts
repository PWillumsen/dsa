export default {
  clearMocks: true,
  modulePathIgnorePatterns: ["<rootDir>/out/", "<rootDir>/src/__tests__/tree.*","<rootDir>/src/__tests__/graph.*"],
  preset: "ts-jest",
  moduleNameMapper: {
    "@code/(.*)": ["<rootDir>/src/code/$1"],
  },
};
