import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: '',
    detail: '',
    city: '',
    hot: ''
  },
  mutations: {
    increment (state, val) {
      // mutate state
      state.page = val
    },
    getdata (state, val) {
      state.detail = val
    },
    getcity (state, val) {
      state.city = val
    },
    gethot (state, val) {
      state.hot = val
    }
  },
  actions: {
    get () {
      function getpage () {
        return axios.get('http://www.shouzi.ltd/quner/page.php')
      }

      function getdetail () {
        return axios.get('http://www.shouzi.ltd/quner/detail.php')
      }
      function getcity () {
        return axios.get('http://www.shouzi.ltd/quner/city.php')
      }
      function gethot () {
        return axios.get('/hotaction.json')
      }
      axios.all([getpage(), getdetail(), getcity(), gethot()])
        .then(axios.spread((page, detail, city, hot) => {
          this.commit('increment', page.data.data)
          this.commit('getdata', detail.data.data)
          this.commit('getcity', city.data.data)
          this.commit('gethot', hot.data.data)
        // console.log( hot)
        // this.hot = hot.data.data
        // this.page = page.data.data
        // this.detail = detail.data.data
        // this.city = city.data.data
        }))
    }
  }
})
