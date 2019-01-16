<template>
  <el-form 
    ref="signupForm" 
    :model="signupForm"
    :rules="rule"
    @keyup.enter.native="submitForm('signupForm')">
    <el-form-item 
      prop="username" 
      required>
      <el-input 
        v-model="signupForm.username"
        placeholder="Username"/>
    </el-form-item>
    <el-form-item 
      prop="email" 
      required>
      <el-input 
        v-model="signupForm.email"
        placeholder="Email"/>
    </el-form-item>
    <el-form-item 
      prop="password" 
      required>
      <el-input 
        v-model="signupForm.password"
        placeholder="Password" 
        type="password"
        autocomplete="off"/>
    </el-form-item>
    <el-form-item 
      prop="checkPassword"
      required>
      <el-input 
        v-model="signupForm.checkPassword" 
        placeholder="Input Password Again" 
        type="password" 
        autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button 
        type="primary" 
        @click="submitForm('signupForm')">注册</el-button>
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm('signupForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input password'))
      } else {
        if (this.signupForm.checkPassword !== '') {
          this.$refs.signupForm.validateField('checkPassword')
        }
        callback()
      }
    }
    let validatePassword2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input password again'))
      } else if (value !== this.signupForm.password) {
        callback(new Error('The two passwords do not match!'))
      } else {
        callback()
      }
    }
    let validateEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (value === '') {
        return callback(new Error('email is required'))
      } else {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error('Please input correct email'))
        }
      }
    }
    return {
      signupForm: {
        username: '',
        email: '',
        password: '',
        checkPassword: ''
      },
      rule: {
        password: [{ validator: validatePassword, trigger: 'blur' }],
        checkPassword: [{ validator: validatePassword2, trigger: 'blur' }],
        email: [{ validator: validateEmail, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.signup()
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    signup() {
      let signupInfo = {
        username: this.signupForm.username,
        email: this.signupForm.email,
        password: this.signupForm.password
      }
      this.$axios.post('api/users', signupInfo).then(
        res => {
          console.log(res)
          if (res.status === 201) {
            // 201 Created 请求已被实现
            this.$message({
              type: 'success',
              message: '注册成功！请验证您的邮箱！'
            })
            this.$router.push('/login')
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
