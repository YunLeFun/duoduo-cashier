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
        @click="submitForm('loginForm')">登录</el-button>
      <br>
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm('loginForm')">重置</el-button>
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
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
            this.$router.push('/users/' + res.data.username)
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
    }
  }
}
</script>

<style scoped>
.el-button {
  width: 100%;
}
</style>
