import { createApp, h } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import apolloClient from '@utl/apollo-client'

import '@quasar/extras/roboto-font/roboto-font.css'
import 'quasar/src/css/index.sass'

import './assets/main.scss'

const app = createApp({
  setup() {
    apolloClient()
  },
  render: () => h(App)
})

app.use(Quasar, { plugins: {} })
app.use(router)
app.use(createPinia())

app.mount('#app')
