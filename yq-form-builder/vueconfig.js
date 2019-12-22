const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: true, //设置自动打开
    port: 8082 //设置端口
  },
  chainWebpack: config => {
    //修改文件引入自定义路径
    config.resolve.alias.set("@", resolve("./src"));
  }
};
