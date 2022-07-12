import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import axios from "axios"

export interface State {
  url : string,
  err: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
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
    getCat(state, catUrl: string) {
      state.url = catUrl;
    },
    error(state, error: string) {
      state.err = error;
    },
  },
  actions: {
    getCat({ commit }) {
      axios.get("https://api.thecatapi.com/v1/images/search")
        .then((res) => {
          commit("getCat", res.data[0].url);
        })
        .catch((error) => {
          commit("error", error);
        });
    },
  },
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}
