module.exports = {
  presets: ["@babel/preset-react"],
  env: {
    "test": {
      "plugins": ["transform-es2015-modules-commonjs"]
    }
  }
}
