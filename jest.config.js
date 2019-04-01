module.exports = {
  // setupFiles : ['<rootDir>/test/setup.js'],
  // verbose : true,
  // transformIgnorePatterns :['<rootDir>/node_modules/'],
  // moduleDirectories: ['node_modules', 'src']
  // "verbose": true,
  setupFiles : ['<rootDir>/test/setup.js'],
  "moduleNameMapper": {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  }
  // "moduleFileExtensions": [
  //   "js",
  //   "jsx"
  // ],
  // "moduleDirectories": [
  //   "node_modules",
  //   "src/frontend",
  //   "src/shared"
  // ]
}