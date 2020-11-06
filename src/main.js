import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import library from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueStarRating from 'vue-star-rating'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.component('star-rating', VueStarRating.default)
// library.add(faCoffee)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Vue.component('star-rating', VueStarRating.default)
