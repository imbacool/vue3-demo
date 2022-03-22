import { createApp } from 'vue'
import App from './App.vue'
import router from "@router";
import store from "@store";
// element-plus
import 'element-plus/dist/index.css'
// 自定义样式
import '@style/index.scss'
// icon
import * as EleIcons from '@element-plus/icons-vue'

const app = createApp(App)

for (const name in EleIcons) {
  app.component(name, EleIcons[name])
}

app.use(router).use(store).mount('#app')
