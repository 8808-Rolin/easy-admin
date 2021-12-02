import {
  login,
  getInfo
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  resetRouter
} from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    uid: 0,
    name: '',
    avatar: '',
    aid:0,
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_UID: (state, uid) => {
    state.uid = uid
  },
  SET_AID: (state, aid) => {
    state.aid = aid
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        account: username.trim(),
        password: password,
        loginType: 0
      }).then(response => {
        if (response.data.data.code === 0) {
          const {
            data
          } = response.data
          console.log(data)
          commit('SET_TOKEN', data.token)
          commit('SET_UID', data.uid)
          setToken(data.token)
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getInfo(state.uid).then(response => {
        const {
          data
        } = response
        console.log(data)

        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        commit('SET_NAME', data.data.user.userName)
        commit('SET_AVATAR', data.data.user.headImage)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({commit}) {
    removeToken() // must remove  token  first
    resetRouter()
    commit('RESET_STATE')
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}