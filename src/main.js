import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './style.css'
import 'flowbite'

import RequiredError from './directives/v-required-error.js'

import vue3ToPdf from 'vue3-to-pdf'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3ToPdf)

app.directive('required-error', RequiredError)
app.mount('#app')

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  document.body.classList.add('is-safari')
}
