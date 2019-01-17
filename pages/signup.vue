<template>
  <div>
    <el-row>
      <el-col :span="24">
        <logo/>
      </el-col>
    </el-row>
    <el-row>
      <el-col 
        :xs="24" 
        :sm="{span: 8,offset: 8}">
        <hr>
        <signup-form/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SignupForm from '~/components/User/SignupForm.vue'

export default {
  components: {
    Logo,
    SignupForm
  }
}
</script>

<style scoped>
</style>
