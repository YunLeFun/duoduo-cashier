<template>
  <el-tabs 
    v-model="activeName" 
    @tab-click="handleClick">
    <el-tab-pane 
      label="用户管理" 
      name="user">用户管理</el-tab-pane>
    <el-tab-pane 
      label="配置管理" 
      name="config">配置管理</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'user'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
