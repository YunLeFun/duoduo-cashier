<template>
  <el-container class="container">
    <el-header>
      <nav-menu/>
    </el-header>
    <el-main>
      <logo/>
      <h1 class="title">
        DuoDuo Cashier
      </h1>
      <h2 class="subtitle">
        Record your income
      </h2>
      <div class="links">
        <nuxt-link 
          to="/login" 
          class="button--green">登录</nuxt-link>
        <nuxt-link 
          to="/signup" 
          class="button--grey">注册</nuxt-link>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavMenu from '~/components/NavMenu.vue'

export default {
  components: {
    Logo,
    NavMenu
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
