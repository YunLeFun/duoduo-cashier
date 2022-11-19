<script lang="ts" setup>
import { useUserStore } from '~~/store/auth';

definePageMeta({
  middleware: ['status']
})

const user = useUserStore()
</script>

<template>
  <el-main class="center">
    <logo/>
    <h1 my-8 class="title" text="8xl">
      DuoDuo Cashier
    </h1>
    <h2 my-4 class="subtitle" text="4xl">
      Record your income
    </h2>
    <div
      v-if="!user.username"
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
