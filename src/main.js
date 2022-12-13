import { createApp } from 'vue'
import store from '@/Store'
import router from '@/Router'
import App from '@/App.vue'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
