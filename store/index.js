export const state = () => ({
  objectId: null,
  username: null,
  sessionToken: null
})

export const mutations = {
  SET_OBJECT_ID: function(state, objectId) {
    state.objectId = objectId
    if (objectId) {
      sessionStorage.setItem('objectId', objectId)
    } else {
      sessionStorage.removeItem('objectId')
    }
  },
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
    commit('SET_OBJECT_ID', null)
  }
}
