export default function({ $axios, store }) {
  if (!store.state.sessionToken) {
    if (localStorage.getItem('sessionToken') !== null) {
      let sessionToken = localStorage.getItem('sessionToken')
      store.commit('SET_SESSION_TOKEN', sessionToken)
      store.commit('SET_USER', localStorage.getItem('username'))
      store.commit('SET_OBJECT_ID', localStorage.getItem('objectId'))
    }
  }
  if (store.state.sessionToken) {
    $axios.setHeader('X-LC-Session', store.state.sessionToken)
  }
}
