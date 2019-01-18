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

export default {
  middleware: 'auth',
  components: {
    UserInfo
  },
  data() {
    return {
      tabPosition: 'left',
      tabItems: [
        {
          index: 'Info',
          label: '用户信息',
          component: 'UserInfo'
        },
        {
          index: 'modifyPassword',
          label: '修改密码'
        }
      ],
      userInfo: {}
    }
  }
}
</script>

<style scoped>
</style>
