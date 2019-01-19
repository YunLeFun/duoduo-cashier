export const state = () => ({
  objectId: null,
  username: null,
  sessionToken: null
})

export const mutations = {
  SET_OBJECT_ID: function(state, objectId) {
    state.objectId = objectId
    if (objectId) {
      localStorage.setItem('objectId', objectId)
    } else {
      localStorage.removeItem('objectId')
    }
  },
  SET_SESSION_TOKEN: function(state, sessionToken) {
    state.sessionToken = sessionToken
    if (sessionToken) {
      localStorage.setItem('sessionToken', sessionToken)
    } else {
      localStorage.removeItem('sessionToken')
    }
  },
  SET_USER: function(state, username) {
    state.username = username
    if (username) {
      localStorage.setItem('username', username)
    } else {
      localStorage.removeItem('username')
    }
  }
}

export const actions = {
  logout({ commit }) {
    commit('SET_USER', null)
    commit('SET_SESSION_TOKEN', null)
    commit('SET_OBJECT_ID', null)
  }
}
