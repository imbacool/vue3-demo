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
          msg: 'get_user_detail',
          data: { name: 'ImbaCOOL' },
        })
      }, 0);
    })
  },
  get_user_list() {
    return new Promise((resolve, reject) => {
      let data = [
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
      ]
      setTimeout(() => {
        resolve({
          code: 200,
          msg: 'get_user_list',
          data,
        })
      }, 1000);
    })
  }
}