import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App);
app.config.globalProperties.$redirect = (page) => {router.push(page)}
app.use(router);
app.mount('#app');
