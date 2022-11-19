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

<script lang="ts" setup>
const tab = ref('userInfo')
const tabPosition = ref('left')
const tabItems = [
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
]

const userInfo = ref({
  authData: {}
})

// todo fetch
// const res = await useFetch('/users/me')

// if (res.status === 200) {
//   userInfo.value = res.data
//   if (
//     typeof userInfo.value.authData === 'undefined' ||
//     userInfo.value.authData === null
//   ) {
//     userInfo.value.authData = {}
//   }
// } else {
//   this.$message.error(res.data.info)
// }

// err => {
//   this.$message({
//     type: 'error',
//     message: err.response.data.error
//   })
// }

const route = useRoute()

if (route.query.tab) {
  tab.value = route.query.tab as string
}
</script>
