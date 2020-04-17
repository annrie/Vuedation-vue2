// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
/* eslint-disable */

import Vue from 'vue'
import './foundation'
import '@/assets/scss/app.scss'
import VueScrollTo from 'vue-scrollto'
// import './styles/app'
// import './styles/global'
import App from './App'
import router from './router'
import store from './store'

// import {fas} from '@fortawesome/free-solid-svg-icons'
// import {fab} from '@fortawesome/free-brands-svg-icons'
// import {far} from '@fortawesome/free-regular-svg-icons'
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
// import {
//   FontAwesomeIcon,
//   FontAwesomeLayers,
//   FontAwesomeLayersText,
// } from '@fortawesome/vue-fontawesome'

// library.add(fas, fab, far, library, faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('font-awesome-layers', FontAwesomeLayers)
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: '#main',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})
