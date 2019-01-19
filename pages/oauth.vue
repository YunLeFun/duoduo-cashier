<template>
  <div class="center">
    <h1 class="title">
      {{ title }}
    </h1>
    <h2 class="subtitle">
      {{ connectInfo }}
    </h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: 'GitHub OAuth',
      connectInfo: 'Connecting...',
      authData: {
        github: {
          access_token: '',
          scope: '',
          token_type: ''
        }
      }
    }
  },
  beforeCreate() {
    let url =
      process.env.github.access_token_api +
      '?client_id=' +
      process.env.github.client_id +
      '&client_secret=' +
      process.env.github.client_secret +
      '&code=' +
      this.$route.query.code
    axios
      .request(url)
      .then(res => {
        const args = res.data.split('&')
        let arg = args[0].split('=')
        let github = {}
        for (let i = 0; i < args.length; i++) {
          let num = args[i].indexOf('=')
          if (num > 0) {
            let name = args[i].substring(0, num)
            let value = args[i].slice(num + 1)
            this.authData.github[name] = value
          }
        }
        if (this.authData.github.access_token) {
          this.connectInfo = 'Connection Succeeded'
          this.connectAccount()
        } else {
          this.connectInfo = 'Connection Failed. Please try it again.'
        }
      })
      .catch(err => {
        this.$message({
          type: 'error',
          message: err.response.data.error
        })
      })
  },
  methods: {
    connectAccount() {
      this.$axios
        .put('users/' + this.$store.state.objectId, { authData: this.authData })
        .then(res => {
          this.$message({
            type: 'success',
            message: 'Connect Account Successfully ！'
          })
          this.$router.push('/users/profile?tab=thirdOAuth')
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err.response.data.error
          })
        })
    }
  }
}
</script>

<style>
</style>
