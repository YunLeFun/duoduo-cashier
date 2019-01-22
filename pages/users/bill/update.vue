<template>
  <div class="center">
    <el-row>
      <el-col 
        :xs="24" 
        :sm="{span: 12,offset: 6}">
        <bill-form :bill-info="billInfo"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BillForm from '~/components/Bill/BillForm.vue'

export default {
  components: {
    BillForm
  },
  data() {
    return {
      billInfo: {}
    }
  },
  beforeCreate() {
    this.$axios
      .get('classes/bill/' + this.$route.query.objectId)
      .then(res => {
        this.billInfo = res.data
      })
      .catch(err => {
        this.$message.error(err.response.data.error)
      })
  }
}
</script>

<style>
</style>
