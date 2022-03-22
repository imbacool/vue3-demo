import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@store'
import user_api from '@api/user'

const Layout = () => import('@/layout/index.vue')
const UserList = () => import('@views/user/list.vue')
const UserAdd = () => import('@views/user/add.vue')
const UserEdit = () => import('@views/user/edit.vue')
const Login = () => import('@views/login/login.vue')
const Home = () => import('@views/home/home.vue')

const routes = [
  // 首页
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        meta: { name: '首页' },
        component: Home
      },
    ]
  },
  // 用户管理
  {
    path: '/user',
    redirect: '/user/list',
    meta: { name: '用户管理' },
    component: Layout,
    children: [
      {
        path: 'list',
        meta: { name: '列表' },
        component: UserList
      },
      {
        path: 'add',
        meta: { name: '添加' },
        component: UserAdd
      },
      {
        path: 'edit/:id',
        meta: { name: '编辑' },
        component: UserEdit
      },
    ]
  },
  // 角色权限
  {
    path: '/role',
    redirect: '/role/list',
    meta: { name: '角色权限' },
    component: Layout,
    children: [
      {
        path: 'list',
        meta: { name: '列表' },
        component: Home
      },
    ]
  },
  // 工单管理
  {
    path: '/order',
    redirect: '/order/list',
    meta: { name: '工单管理' },
    component: Layout,
    children: [
      {
        path: 'list',
        meta: { name: '列表' },
        component: Home
      },
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth', }
    }
  },
})

const white_list = ['/login']

router.beforeEach(async (to, from, next) => {
  if (white_list.includes(to.fullPath)) {
    // 白名单
    next()
  } else if (!sessionStorage.getItem('token')) {
    // 没有token
    next('/login')
  } else if (!store.state.user_info.name) {
    // 没有用户信息
    const { code, msg, data } = await user_api.get_user_info({
      token: sessionStorage.getItem('token'),
    });
    if (code === 200) {
      store.commit("edit_user_info", data);
      next()
    } else {
      message.error(msg);
      next('/login')
    }
  } else {
    next()
  }
})

export default router