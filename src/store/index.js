import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user_info: {},
    }
  },
  mutations: {
    edit_user_info(state, param) {
      state.user_info = param
    }
  },
})

export default store