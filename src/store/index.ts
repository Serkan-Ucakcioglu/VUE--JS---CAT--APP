import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    url: "",
    err: "",
  },
  getters: {
    getError(state) {
      return state.err;
    },
    catUrl(state) {
      return state.url;
    },
  },
  mutations: {
    getCat(state, catUrl) {
      state.url = catUrl;
    },
    error(state, error) {
      state.err = error;
    },
  },
  actions: {
    getCat({ commit }) {
      axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then((res) => {
          commit("getCat", res.data[0].url);
        })
        .catch((error) => {
          commit("error", error);
        });
    },
  },
});
export default store;
