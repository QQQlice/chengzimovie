// 利用ajax的axios实现反向代理
// 提供对外接口
module.exports = {
  devServer: {
    // 开发环境配置
    proxy: {
      // 反向代理字段
      "/ajax": {
        target: "https://m.maoyan.com", //反向代理目标
        // 反向代理时是否改变地址
        changeOrigin: true
      }
    }
  }
};
