import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './style.css'
import 'flowbite'

import RequiredError from './directives/v-required-error.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('required-error', RequiredError)
app.mount('#app')
