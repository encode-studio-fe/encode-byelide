import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setup } from './setup'

const app = createApp(App)

app.use(createPinia())
app.use(router)

setup(app)

app.mount('#app')
