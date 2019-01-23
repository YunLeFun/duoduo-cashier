<template>
  <el-main class="center">
    <logo/>
    <h1 class="title">
      DuoDuo Cashier
    </h1>
    <h2 class="subtitle">
      Record your income
    </h2>
    <div 
      v-if="!$store.state.username" 
      class="links">
      <nuxt-link 
        to="/login" 
        class="button--green">登录</nuxt-link>
      <nuxt-link 
        to="/signup" 
        class="button--grey">注册</nuxt-link>
    </div>
    <div v-else>
      <nuxt-link to="/users/bill">
        <el-button 
          type="primary" 
          icon="el-icon-search">
          See your bill?
        </el-button>
      </nuxt-link>
    </div>
  </el-main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>
