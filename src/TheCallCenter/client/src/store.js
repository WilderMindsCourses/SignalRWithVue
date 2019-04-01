import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    calls: [],
    error: ""
  },
  mutations: {
    setError(state, msg) {
      state.error = msg;
      if (msg) console.log(`Error: ${msg}`);
    },
    setCalls(state, calls) {
      state.calls = calls;
    },
    removeCall(state, call) {
      state.calls = state.calls.filter(function (c) { return c !== call; });
    }
  },
  actions: {
    load({ commit }) {
      axios.get("/api/calls")
        .then(res => {
          let calls = res.data;
          commit("setCalls", calls);
        })
        .catch(() => commit("setError", "Failed to load the calls..."));
    },
    answer({ commit }, call) {
      axios.patch(`/api/calls/${call.id}/answer`)
        .then(() => {
          commit("removeCall", call);
          router.push("/");
        })
        .catch(() => commit("setError", "Failed to mark it as answered"));
    }
  }
});
