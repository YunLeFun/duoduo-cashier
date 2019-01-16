<template>
  <div>
    <el-row>
      <el-col :span="24">
        <logo class="logo"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col 
        :xs="24" 
        :sm="{span: 8,offset: 8}">
        <login-form/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LoginForm from '~/components/User/LoginForm.vue'

export default {
  components: {
    Logo,
    LoginForm
  }
}
</script>

<style>
</style>
