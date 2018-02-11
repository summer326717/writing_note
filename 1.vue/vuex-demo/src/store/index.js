import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  current_page: 1,
  total_pages: 1
}

const mutations = {
  jia (state) {
    state.count += 1
  },
  jian (state) {
    state.count -= 1
  },
  reduce_pages (state) {
    state.current_page--
  },
  add_pages (state) {
    state.current_page++
  }
}

export default new Vuex.Store({
  state,
  mutations
})
