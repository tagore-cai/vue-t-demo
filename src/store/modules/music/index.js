import * as actionTp from "../../actiontypes";
import Vue from 'vue';
export const music = {
  namespaced:true,
  state: {
    mapList: [],
    isShowAlbum: false,
    isShowPlayer: false,
    album: [],
    index: 0,
    player: {
      // 既是专辑列表 又有热歌列表
      album: [],
      index: null,
      albumIndex: null
    }
  },
  actions: {
     [actionTp.GETALL]({ commit }) {
      Vue.axios.get("/static/data/music.json").then(res => {
        commit('GETALL', res.data);
      });
    },
    ALBUM({commit}){
      Vue.axios.get("/static/data/music.json").then(res => {
        commit('ALBUM', res.data.mapList.album);
      });
    }
  },
  mutations: {
    [actionTp.GETALL](state, mapList) {
      state.mapList = mapList;
    },
    ALBUM(state, mapList) {
      state.player.album = mapList;
    }
  },
  getters:{

  }
}
