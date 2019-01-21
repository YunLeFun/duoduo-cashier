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
          uid: '',
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
      .get(url, {
        headers: { Accept: 'application/json' }
      })
      .then(res => {
        this.authData.github = res.data
        if (this.authData.github.access_token) {
          // getUserInfo
          axios
            .get(
              process.env.github.get_userinfo_api +
                '?access_token=' +
                this.authData.github.access_token
            )
            .then(res => {
              this.authData.github.uid = res.data.login
              if (this.$store.state.username) {
                this.connectAccount()
              } else {
                this.loginGitHub()
              }
            })
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
    loginGitHub() {
      this.$axios
        .post('users', { authData: this.authData })
        .then(res => {
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: 'Login successfully by GitHub.'
            })
            this.$store.commit('SET_OBJECT_ID', res.data.objectId)
            this.$store.commit('SET_USER', res.data.username)
            this.$store.commit('SET_SESSION_TOKEN', res.data.sessionToken)
            this.$router.push('/users')
          } else if (res.status === 201) {
            this.$message({
              type: 'success',
              message: 'GitHub Connected. Sign up successfully.'
            })
          } else {
            this.$message.error(res.data.info)
          }
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err.response.data.error
          })
        })
    },
    connectAccount() {
      this.connectInfo = 'Connection Succeeded'
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
