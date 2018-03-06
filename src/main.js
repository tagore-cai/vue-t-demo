// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import swiper from "vue-awesome-swiper";
import axios from "axios";
import VueAxios from "vue-axios";
import VueTouch from "vue-touch";
import store from './store';

Vue.use(swiper);
Vue.use(VueTouch, { name: "v-touch" });
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
