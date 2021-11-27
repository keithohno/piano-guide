import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      playing: false,
    };
  },
  mutations: {
    setplay(state, playstate) {
      state.playing = playstate;
    },
  },
});
