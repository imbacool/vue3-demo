export default {
  login() {
    return new Promise((resolve, reject) => {
      resolve({
        code: 200,
        msg: '登录成功',
        data: {
          token: 'token',
          user_info: { name: 'ImbaCOOL' },
        },
      })
    })
  },
  get_user_info() {
    return new Promise((resolve, reject) => {
      resolve({
        code: 200,
        msg: 'get_user_info',
        data: { name: 'ImbaCOOL' },
      })
    })
  },
}