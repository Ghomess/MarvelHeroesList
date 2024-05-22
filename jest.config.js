module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-redux|react-native-gesture-handler|@react-navigation|@react-navigation/stack|@react-navigation/native|react-native-vector-icons)/)',
  ],
};
