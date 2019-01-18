<template>
  <el-form 
    ref="userInfoForm" 
    :model="userInfo" 
    label-position="left">
    <el-form-item label="Username">
      <el-input 
        v-model="userInfo.username"
        disabled=""/>
    </el-form-item>
    <el-form-item label="Email">
      <el-input 
        v-model="userInfo.email" 
        disabled=""/>
    </el-form-item>
    <el-form-item label="Phone">
      <el-input 
        v-model="userInfo.mobilePhoneNumber"/>
    </el-form-item>
    <el-form-item label="Bio">
      <el-input 
        v-model="userInfo.bio"
        type="textarea" 
        placeholder="Tell us a little bit about yourself."/>
    </el-form-item>
    <el-form-item>
      <el-button 
        type="primary" 
        @click="updateProfile">Update profile</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
export default {
  data() {
    return {
      userInfo: {
        username: '',
        email: '',
        mobilePhoneNumber: '',
        bio: ''
      }
    }
  },
  beforeCreate() {
    this.$axios.get('users/me').then(
      res => {
        if (res.status === 200) {
          this.userInfo = res.data
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
  methods: {
    updateProfile() {
      let { bio, mobilePhoneNumber } = this.userInfo
      this.$axios
        .put('users/' + this.userInfo.objectId, {
          bio,
          mobilePhoneNumber
        })
        .then(
          res => {
            if (res.status === 200) {
              this.$message({
                type: 'success',
                message: 'Profile updated successfully.'
              })
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
