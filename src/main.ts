import { createApp, h } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import apolloClient from '@utl/apollo-client'

import './assets/main.scss'

const app = createApp({
  setup() {
    apolloClient()
  },
  render: () => h(App)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
