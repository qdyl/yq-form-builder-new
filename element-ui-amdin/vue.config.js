module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    ["@babel/preset-env", { modules: false }] // "es2015"在babel中，已经不再支持，需要修改为"@babel/preset-env"
  ],
  devServer: {
    port: 3333,
    open: true
  }
};
