export const state = () => ({
  username: null,
  sessionToken: null
})

export const mutations = {
  SET_SESSION_TOKEN: function(state, sessionToken) {
    state.sessionToken = sessionToken
    if (sessionToken) {
      sessionStorage.setItem('sessionToken', sessionToken)
    } else {
      sessionStorage.removeItem('sessionToken')
    }
  },
  SET_USER: function(state, username) {
    state.username = username
    if (username) {
      sessionStorage.setItem('username', username)
    } else {
      sessionStorage.removeItem('username')
    }
  }
}

export const actions = {
  logout({ commit }) {
    commit('SET_USER', null)
    commit('SET_SESSION_TOKEN', null)
  }
}
