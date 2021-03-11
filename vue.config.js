// 利用ajax的axios实现反向代理
// 提供对外接口
module.exports = {
  devServer: {
    // 开发环境配置
    proxy: {
      "/api": {
        // https://m.maoyan.com/dianying/cities.json   城市数据
        target: "https://m.maoyan.com", //反向代理目标
        changeOrigin: true,  // 反向代理时是否改变地址
        secure: true,
        pathRewrite: {
          "^/api":""
        }
      }
    }
  }
};
