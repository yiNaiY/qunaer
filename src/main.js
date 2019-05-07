import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import '../reset.css'
Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

refresh()
window.onresize = function () {
  setTimeout(function () {
    refresh()
  }, 10)
}

function refresh () {
  let deviceWidth = document.documentElement.clientWidth
  if (deviceWidth > 1200) {
    document.documentElement.style.fontSize = 1200 / 12 + `px`
  } else {
    document.documentElement.style.fontSize = deviceWidth / 7.5 + `px`
  }
}

// axios.get('http://www.shouzi.ltd/quner/page.php')
//   .then(function (response) {
//     console.log(response)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
