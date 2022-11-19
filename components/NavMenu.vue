<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect">
    <el-menu-item
      index="/">
      <div class="flex justify-center items-center h-$el-menu-item-height">
        <div text="xl" i-ri-wallet-2-line />
      </div>
    </el-menu-item>
    <!-- <el-menu-item index="/">About</el-menu-item> -->
    <el-menu-item
      v-for="menuItem in menuItems"
      :key="menuItem.index"
      :index="menuItem.path">{{ menuItem.name }}</el-menu-item>
    <template v-if="!user.username">
      <el-menu-item
        v-for="loginItem in loginItems"
        :key="loginItem.index"
        :index="loginItem.path"
        class="right-menu">{{ loginItem.name }}</el-menu-item>
    </template>
    <template v-else>
      <el-sub-menu
        class="right-menu"
        index="user">
        <template slot="title">{{ user.username }}</template>
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
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { useUserStore } from '~~/store/auth';

const user = useUserStore()

const menuItems = [
  {
    index: 'search',
    path: '/users/bill/search',
    name: 'Search'
  },
  {
    index: 'about',
    path: '/about',
    name: 'About'
  }
]

const loginItems = [
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

const optionItems = [
  {
    index: 'bill',
    path: '/users/bill',
    name: 'Your bill'
  },
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

const route = useRoute()
const router = useRouter()
const activeIndex = computed(() => route.path)

function handleSelect(index: string) {
  if (index === 'logout') {
    logout()
  } else {
    router.push(index)
  }
}

function logout() {
  user.logout()
  router.push('/')
}
</script>

<style lang="scss" scoped>
.right-menu {
  float: right;
}
</style>
