import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Routes from './router/routes.js'
import {createRouter, createWebHashHistory} from 'vue-router'

const app = createApp(App)

const router = createRouter({
    history: createWebHashHistory(),
    routes: Routes,
})

app.use(ElementPlus)
app.use(router)
app.mount('#app')