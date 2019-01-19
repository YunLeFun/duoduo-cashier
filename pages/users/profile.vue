<template>
  <el-tabs 
    :tab-position="tabPosition"
    :value="tab">
    <el-tab-pane 
      v-for="tabItem in tabItems" 
      :key="tabItem.index" 
      :label="tabItem.label"
      :name="tabItem.index">
      <el-row>
        <el-col 
          :xs="24" 
          :sm="{span: 12,offset: 6}">
          <component 
            :is="tabItem.component"
            :user-info="userInfo"/>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from 'axios'
import UserInfo from '~/components/User/UserInfo.vue'
import UpdatePassword from '~/components/User/UpdatePassword.vue'
import ThirdOAuth from '~/components/User/ThirdOAuth.vue'

export default {
  middleware: 'auth',
  components: {
    UserInfo,
    UpdatePassword,
    ThirdOAuth
  },
  data() {
    return {
      tab: 'userInfo',
      tabPosition: 'left',
      tabItems: [
        {
          index: 'userInfo',
          label: '用户信息',
          component: 'UserInfo'
        },
        {
          index: 'updatePassword',
          label: '修改密码',
          component: 'UpdatePassword'
        },
        {
          index: 'thirdOAuth',
          label: '第三方账户',
          component: 'ThirdOAuth'
        }
      ],
      userInfo: {
        authData: {}
      }
    }
  },
  beforeCreate() {
    this.$axios.get('users/me').then(
      res => {
        if (res.status === 200) {
          this.userInfo = res.data
          if (typeof this.userInfo.authData === 'undefined') {
            this.userInfo.authData = {}
          }
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
  created() {
    if (this.$route.query.tab) {
      this.tab = this.$route.query.tab
    }
  }
}
</script>

<style scoped>
</style>
