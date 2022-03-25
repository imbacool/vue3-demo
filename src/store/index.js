import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user_detail: {},
      user_list: [
        {
          name: "张三",
          gender: {
            id: 1,
            name: "男",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: true,
        },
        {
          name: "李四",
          gender: {
            id: 0,
            name: "女",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: false,
        },
        {
          name: "王五",
          gender: {
            id: 1,
            name: "男",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: true,
        },
        {
          name: "老六",
          gender: {
            id: 1,
            name: "男",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: true,
        },
        {
          name: "张三",
          gender: {
            id: 1,
            name: "男",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: true,
        },
        {
          name: "李四",
          gender: {
            id: 0,
            name: "女",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: false,
        },
        {
          name: "王五",
          gender: {
            id: 1,
            name: "男",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: true,
        },
        {
          name: "老六",
          gender: {
            id: 1,
            name: "男",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: true,
        },
        {
          name: "张三",
          gender: {
            id: 1,
            name: "男",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: true,
        },
        {
          name: "李四",
          gender: {
            id: 0,
            name: "女",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: false,
        },
        {
          name: "王五",
          gender: {
            id: 1,
            name: "男",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: true,
        },
        {
          name: "老六",
          gender: {
            id: 1,
            name: "男",
          },
          date: "2022-03-23",
          address: "No. 189, Grove St, Los Angeles",
          status: true,
        },
      ],
    }
  },
  mutations: {
    add_user(state, param) {
      if (param.gender == 1) {
        param.gender = {
          id: '1',
          name: '女',
        }
      } else {
        param.gender = {
          id: '2',
          name: '男',
        }
      }
      state.user_list.unshift(param)
    },
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