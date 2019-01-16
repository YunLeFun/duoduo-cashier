<template>
  <div class="container">
    <el-row>
      <el-col 
        :xs="24" 
        :sm="{span: 8,offset: 8}">
        Hello {{ id }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const id = params.id
    return { id }
  },
  data() {
    return {
      id: ''
    }
  }
}
</script>

<style>
</style>
