import store from '@store';

export default {
  login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: 200,
          msg: '登录成功',
          data: {
            token: 'token',
            user_detail: { name: 'ImbaCOOL' },
          },
        })
      }, 1000);
    })
  },
  get_user_detail() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: 200,
          msg: '查询成功',
          data: { name: 'ImbaCOOL' },
        })
      }, 0);
    })
  },
  get_user_list() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: 200,
          msg: '查询成功',
          data: store.state.user_list,
        })
      }, 1000);
    })
  },
  add_user(data) {
    return new Promise((resolve, reject) => {
      store.commit(
        "add_user",
        Object.assign(data, { status: true })
      );
      setTimeout(() => {
        resolve({
          code: 200,
          msg: '新增成功',
          data: null,
        })
      }, 1000);
    })
  },
}