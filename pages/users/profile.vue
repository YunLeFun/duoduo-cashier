<template>
  <el-tabs 
    :tab-position="tabPosition">
    <el-tab-pane 
      v-for="tabItem in tabItems" 
      :key="tabItem.index" 
      :label="tabItem.label">
      <el-row>
        <el-col 
          :xs="24" 
          :sm="{span: 12,offset: 6}">
          <component 
            :is="tabItem.component"/>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from 'axios'
import UserInfo from '~/components/User/UserInfo.vue'
import UpdatePassword from '~/components/User/UpdatePassword.vue'

export default {
  middleware: 'auth',
  components: {
    UserInfo,
    UpdatePassword
  },
  data() {
    return {
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
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
