<template>
  <el-form 
    ref="userInfoForm" 
    :model="userInfo" 
    label-width="80px"
    label-position="left">
    <el-form-item label="Email">
      <el-input 
        v-model="userInfo.email" 
        disabled=""/>
    </el-form-item>
    <el-form-item label="Username">
      <el-input 
        v-model="userInfo.username"/>
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
      userInfo: {}
    }
  },
  async beforeCreate() {
    this.userInfo = await this.$axios.$get('users/me')
    console.log(this.userInfo)
  },
  methods: {
    updateProfile() {
      let { bio, username } = this.userInfo
      this.$axios
        .put('users/' + this.userInfo.objectId, { bio, username })
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
      // $message
    }
  }
}
</script>
