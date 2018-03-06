import Vue from "vue";
import Vuex from "vuex";
import event from "./modules/event";
import { music } from "./modules/music";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    imglists: []
  },
  actions: {
    GETIMGLIST({ commit }) {
      Vue.axios.get("/static/data/imglists.json").then(res => {
        commit("GETIMGLIST", res.data);
      });
    }
  },
  mutations: {
    GETIMGLIST(state, imglists) {
      state.imglists = imglists;
    }
  },
  getters: {},
  modules: {
    event,
    music
  }
});
