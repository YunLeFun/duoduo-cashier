export default function({ $axios, store }) {
  $axios.setHeader('X-LC-Id', 'SqGXqvMqLFSGgxYpcXFbmBgR-gzGzoHsz')
  $axios.setHeader('X-LC-Key', 'kUXrbjyUdvJV4i1FhsVayqa4')
  if (store.state.sessionToken) {
    $axios.setHeader('X-LC-Session', sessionToken)
  }
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}
