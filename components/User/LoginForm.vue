<template>
  <el-form 
    ref="loginForm" 
    :model="loginForm"
    @keyup.enter.native="submitForm('loginForm')">
    <el-form-item 
      prop="username" 
      required>
      <el-input 
        v-model="loginForm.username"
        placeholder="Username"/>
    </el-form-item>
    <el-form-item 
      prop="password" 
      required>
      <el-input 
        v-model="loginForm.password"
        placeholder="Password" 
        type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button 
        type="primary" 
        style="width: 100%;"
        @click="submitForm('loginForm')">登录</el-button>
      <br>
    </el-form-item>
    <el-form-item>
      <el-button 
        circle
        @click="loginGitHub()">
        <svg 
          class="icon" 
          aria-hidden="true">
          <use :xlink:href="thirdOAuth.github.icon"/>
        </svg>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      thirdOAuth: {
        github: {
          icon: '#icon-github'
        }
      }
    }
  },
  methods: {
    submitForm(formName) {
      let _this = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    login() {
      this.$axios.post('login', this.loginForm).then(
        res => {
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: '登录成功！'
            })
            this.$store.commit('SET_OBJECT_ID', res.data.objectId)
            this.$store.commit('SET_USER', res.data.username)
            this.$store.commit('SET_SESSION_TOKEN', res.data.sessionToken)
            this.$router.push('/users')
          } else {
            this.$message.error(res.data.info)
          }
        },
        err => {
          this.$message({
            type: 'error',
            message: err.response.data.error
          })
        }
      )
    },
    loginGitHub() {
      window.open(
        process.env.github.authorize_api +
          '?client_id=' +
          process.env.github.client_id +
          '&scope=' +
          process.env.github.scope,
        '_self'
      )
    }
  }
}
</script>

<style scoped>
</style>
