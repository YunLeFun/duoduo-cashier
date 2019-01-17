<template>
  <el-menu 
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect">
    <el-menu-item 
      index="/">
      <img 
        width="25px" 
        src="~/assets/img/money.png" 
        alt="Cashier">
    </el-menu-item>
    <!-- <el-menu-item index="/">About</el-menu-item> -->
    <template v-if="!$store.state.username">
      <el-menu-item 
        v-for="item in loginItems"
        :key="item.index"
        :index="item.path" 
        class="right-menu">{{ item.name }}</el-menu-item>
    </template>
    <template v-else>
      <el-submenu 
        class="right-menu" 
        index="user">
        <template slot="title">{{ $store.state.username }}</template>
        <el-menu-item 
          index="logout" 
        >登出</el-menu-item>
      </el-submenu>
    </template>
    
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      loginItems: [
        {
          index: 'signup',
          path: '/signup',
          name: '注册'
        },
        {
          index: 'login',
          path: '/login',
          name: '登录'
        }
      ]
    }
  },
  computed: {
    activeIndex() {
      return this.$route.path
    }
  },
  methods: {
    handleSelect(index) {
      if (index === 'logout') {
        this.logout()
      } else {
        this.$router.push(index)
      }
    },
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.right-menu {
  float: right;
}
</style>
