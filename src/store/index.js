import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user_detail: {},
    }
  },
  mutations: {
    login(state, param) {
      let { token, user_detail } = param;
      if (token) {
        sessionStorage.setItem("token", token);
      }
      state.user_detail = user_detail
    },
    logout(state, param) {
      sessionStorage.removeItem("path");
      sessionStorage.removeItem("token");
      state.user_detail = {}
    },
  },
})

export default store