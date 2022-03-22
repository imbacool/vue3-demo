import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user_info: {},
    }
  },
  mutations: {
    login(state, param) {
      let { token, user_info } = param;
      if (token) {
        sessionStorage.setItem("token", token);
      }
      state.user_info = user_info
    },
    logout(state, param) {
      sessionStorage.removeItem("path");
      sessionStorage.removeItem("token");
      state.user_info = {}
    },
  },
})

export default store