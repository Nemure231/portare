import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

const intervalMS = 60 * 60 * 1000
const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
    onRegistered(r) {
        r && setInterval(() => {
            r.update()
        }, intervalMS)
    }
})


const app = createApp(App);
app.config.globalProperties.$redirect = (page) => { router.push(page) }
app.use(router);
app.mount('#app');
