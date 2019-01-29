<template>
  <div class="center">
    <el-col 
      :xs="24" 
      :sm="{span: 12,offset: 6}">
      <el-input 
        v-model="username" 
        placeholder="请输入查询用户名"
        @keyup.native.enter="search">
        <el-button 
          slot="append" 
          icon="el-icon-search"
          @click="search"/>
      </el-input>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    search() {
      if (this.username) {
        let where = {
          username: this.username
        }
        this.getUserId(where)
      }
    },
    getUserId(where) {
      this.$axios
        .get('users' + '?where=' + JSON.stringify(where))
        .then(res => {
          console.log(res)
          if (res.data.results.length > 0) {
            this.userInfo = res.data.results[0]
            this.goToUserBill(this.userInfo)
          } else {
            this.$message.error('The user does not exist.')
          }
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err.response.data.error
          })
        })
    },
    goToUserBill(userInfo) {
      this.$router.push({
        path: '/users/bill',
        query: {
          userId: userInfo.objectId
        }
      })
    }
  }
}
</script>

<style>
</style>
