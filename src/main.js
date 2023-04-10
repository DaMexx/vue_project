import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import App from './App.vue'

import './plugins/axios'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.mount('#app')
