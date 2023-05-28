import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './style.css'

const app = createApp(App)

app.use(BootstrapVue3)

app.mount('#app')
