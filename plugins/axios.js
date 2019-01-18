export default function({ $axios }) {
  $axios.setHeader('X-LC-Id', 'SqGXqvMqLFSGgxYpcXFbmBgR-gzGzoHsz')
  $axios.setHeader('X-LC-Key', 'kUXrbjyUdvJV4i1FhsVayqa4')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}
