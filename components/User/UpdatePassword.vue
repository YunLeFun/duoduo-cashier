<template>
  <el-form 
    ref="updatePasswordForm" 
    :model="updatePasswordForm" 
    :rules="rule"
    label-position="top"
    @keyup.enter.native="submitForm('updatePasswordForm')">
    <el-form-item 
      prop="old_password"
      label="Old password">
      <el-input 
        v-model="updatePasswordForm.old_password"
        type="password"/>
    </el-form-item>
    <el-form-item 
      prop="new_password"
      label="New password">
      <el-input 
        v-model="updatePasswordForm.new_password"
        type="password"/>
    </el-form-item>
    <el-form-item 
      prop="check_new_password"
      label="Input new password again">
      <el-input 
        v-model="updatePasswordForm.check_new_password"
        type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button 
        type="primary" 
        @click="submitForm('updatePasswordForm')">Update password</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
export default {
  data() {
    let validateOldPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input old password'))
      } else {
        if (this.updatePasswordForm.new_password !== '') {
          this.$refs.updatePasswordForm.validateField('new_password')
        }
        callback()
      }
    }
    let validateNewPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input new password'))
      } else if (value === this.updatePasswordForm.old_password) {
        callback(new Error('The two passwords can not be same!'))
      } else {
        callback()
      }
    }
    let validateCheckNewPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input new password again'))
      } else if (value !== this.updatePasswordForm.new_password) {
        callback(new Error('The two passwords do not match!'))
      } else {
        callback()
      }
    }
    return {
      updatePasswordForm: {
        old_password: '',
        new_password: '',
        check_new_password: ''
      },
      rule: {
        old_password: [{ validator: validateOldPassword, trigger: 'blur' }],
        new_password: [{ validator: validateNewPassword, trigger: 'blur' }],
        check_new_password: [
          { validator: validateCheckNewPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.updatePassword()
        } else {
          return false
        }
      })
    },
    updatePassword() {
      let { old_password, new_password } = this.updatePasswordForm
      this.$axios
        .put('users/' + this.$store.state.objectId + '/updatePassword', {
          old_password,
          new_password
        })
        .then(
          res => {
            if (res.status === 200) {
              this.$message({
                type: 'success',
                message:
                  'Password updated successfully.' +
                  '<br><br>' +
                  'Please login again.',
                dangerouslyUseHTMLString: true
              })
              this.$store.dispatch('logout')
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
