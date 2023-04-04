module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json', '.ts', '.tsx'],
        alias: {
          '@assets': ['./src/assets'],
          '@components': ['./src/components'],
          '@constants': ['./src/constants'],
          '@routes': ['./src/routes'],
          '@screens': ['./src/screens'],
          '@helpers': ['./src/helpers'],
          '@i18n': ['./src/i18n'],
          '@redux-app': ['./src/redux'],
          '@services': ['./src/services'],
          '@utils': ['./src/utils']
        }
      }
    ]
  ]
};
