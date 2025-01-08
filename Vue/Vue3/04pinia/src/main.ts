import {createApp} from 'vue'
import App from './App.vue'
/* 引入createPinia，用于创建pinia */
import {createPinia} from 'pinia'

const app = createApp(App);
/* 创建pinia 最好在app创建之后 再创建 */
const pinia = createPinia()

/* 使用插件 */
app.use(pinia)
app.mount('#app')
