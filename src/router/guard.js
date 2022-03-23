import store from '@store'
import user_api from '@api/user'

const white_list = ['/login']

export default {
  async beforeEach(to, from, next) {
    if (white_list.includes(to.fullPath)) {
      // 白名单
      next()
    } else if (!sessionStorage.getItem('token')) {
      // 没有token
      store.commit('logout')
      next('/login')
    } else if (!store.state.user_detail.name) {
      // 没有用户信息
      const { code, msg, data } = await user_api.get_user_detail({
        token: sessionStorage.getItem('token'),
      });
      if (code === 200) {
        store.commit("login", { user_detail: data });
        next()
      } else {
        store.commit('logout')
        next('/login')
      }
    } else {
      next()
    }
  }
}