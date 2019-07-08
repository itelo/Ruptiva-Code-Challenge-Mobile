module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "@babel/transform-runtime",
    [
      "module-resolver",
      {
        alias: {
          "@components": "./src/components",
          "@utils": "./src/utils"
        }
      }
    ]
  ]
};
