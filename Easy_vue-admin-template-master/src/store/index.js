import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate' // 解决页面刷新数据失效

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()], // 解决页面刷新数据失效
  modules: {
    app,
    settings,
    user
  },
  getters
})

export default store
