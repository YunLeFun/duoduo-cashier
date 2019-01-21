<template>
  <div class="center">
    <el-row>
      <el-col>
        <bill-chart/>
      </el-col>
      <el-col 
        :xs="24" 
        :sm="{span: 12,offset: 6}">
        <bill-form/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BillChart from '~/components/Bill/BillChart.vue'
import BillForm from '~/components/Bill/BillForm.vue'

export default {
  components: {
    BillChart,
    BillForm
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>
