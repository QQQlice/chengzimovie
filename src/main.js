import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
Vue.prototype.axios = axios;
axios.defaults.baseURL = '/api';

// 全局的 图片处理过滤器
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
