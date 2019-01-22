<template>
  <div class="center">
    <el-row>
      <el-col 
        :xs="24" 
        :sm="{span: 12,offset: 6}">
        <bill-form/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BillForm from '~/components/Bill/BillForm.vue'

export default {
  components: {
    BillForm
  }
}
</script>

<style>
</style>
