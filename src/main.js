import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// add specific icons to use
import {
  faFire, faCircleExclamation, faThumbsUp
} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faCopy } from '@fortawesome/free-regular-svg-icons'

library.add(
  faCircleXmark,
  faCopy,
  faFire,
  faCircleExclamation,
  faThumbsUp
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
