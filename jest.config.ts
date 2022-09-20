export default {
  clearMocks: true,
  modulePathIgnorePatterns: ["<rootDir>/out/"],
  preset: "ts-jest",
  moduleNameMapper: {
    "@code/(.*)": ["<rootDir>/src/code/$1"],
  },
};
