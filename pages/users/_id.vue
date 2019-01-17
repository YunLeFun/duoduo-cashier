<template>
  <div>
    <el-row>
      <el-col 
        :xs="24" 
        :sm="{span: 8,offset: 8}">
        <bill-chart/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BillChart from '~/components/Bill/BillChart.vue'

export default {
  middleware: 'auth',
  async asyncData({ params }) {
    const id = params.id
    return { id }
  },
  components: {
    BillChart
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
