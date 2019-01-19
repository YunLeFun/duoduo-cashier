export default function({ $axios, store }) {
  if (!store.state.localStorage) {
    if (localStorage.getItem('sessionToken') !== null) {
      let sessionToken = localStorage.getItem('sessionToken')
      store.commit('SET_SESSION_TOKEN', sessionToken)
      $axios.setHeader('X-LC-Session', sessionToken)
    }
  }
  if (!store.state.username) {
    if (localStorage.getItem('username') !== null) {
      let username = localStorage.getItem('username')
      store.commit('SET_USER', username)
    }
  }
  if (!store.state.objectId) {
    if (localStorage.getItem('objectId') !== null) {
      let objectId = localStorage.getItem('objectId')
      store.commit('SET_OBJECT_ID', objectId)
    }
  }
}
