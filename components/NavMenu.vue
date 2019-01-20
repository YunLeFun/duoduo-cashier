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
    <el-menu-item 
      v-for="menuItem in menuItems" 
      :key="menuItem.index" 
      :index="menuItem.path">{{ menuItem.name }}</el-menu-item>
    <template v-if="!$store.state.username">
      <el-menu-item 
        v-for="loginItem in loginItems"
        :key="loginItem.index"
        :index="loginItem.path" 
        class="right-menu">{{ loginItem.name }}</el-menu-item>
    </template>
    <template v-else>
      <el-submenu 
        class="right-menu" 
        index="user">
        <template slot="title">{{ $store.state.username }}</template>
        <template v-for="optionItem in optionItems">
          <el-menu-item 
            v-if="optionItem.index!=='hr'"
            :key="optionItem.index"
            :index="optionItem.path" 
          >{{ optionItem.name }}</el-menu-item>
          <hr 
            v-else 
            :key="optionItem.index"
            style="margin:10px auto;">
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      menuItems: [
        {
          index: 'about',
          path: 'https://github.com/YunYouJun/duoduo-cashier',
          name: 'About'
        }
      ],
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
      ],
      optionItems: [
        {
          index: 'profile',
          path: '/users/profile',
          name: 'Your profile'
        },
        {
          index: 'hr'
        },
        {
          index: 'help',
          path: '/help',
          name: 'Help'
        },
        {
          index: 'setting',
          path: '/setting',
          name: 'Setting'
        },
        {
          index: 'logout',
          path: 'logout',
          name: 'Sign out'
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
