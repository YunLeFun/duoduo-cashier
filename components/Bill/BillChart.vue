<template>
  <div>
    <el-row>
      <el-col
        :xs="24" 
        :sm="{span: 18,offset: 3}">
        <div class="small">
          <line-chart
            :chart-data="chartData"
            :options="options"
            class="wrapper"/>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="judgeUserId()">
      <el-col
        :xs="24" 
        :sm="{span: 12,offset: 6}">
        <el-button
          v-if="!showEditBtn"
          type="primary"
          icon="el-icon-plus"
          class="block"
          @click="goToAddBillInfo">
          添加新信息？
        </el-button>
        <el-button-group 
          v-else
          class="block">
          <el-button 
            type="warning" 
            icon="el-icon-edit"
            style="width:50%"
            @click="goToUpdateBillInfo">修改</el-button>
          <el-button 
            type="danger" 
            icon="el-icon-delete"
            style="width:50%"
            @click="goToDeleteBillInfo">删除</el-button>
        </el-button-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from './LineChart.js'
import moment from 'moment'

export default {
  components: {
    LineChart
  },
  data() {
    return {
      billInfo: {},
      colors: {
        blue: 'rgb(54, 162, 235)',
        green: 'rgb(75, 192, 192)',
        grey: 'rgb(201, 203, 207)',
        orange: 'rgb(255, 159, 64)',
        purple: 'rgb(153, 102, 255)',
        red: 'rgb(255, 99, 132)',
        yellow: 'rgb(255, 205, 86)'
      },
      chartData: {},
      showEditBtn: false,
      selectBillInfoIndex: '', // 被选中的数据的 Index
      options: {
        legend: {
          labels: {
            usePointStyle: true
          },
          position: 'bottom'
        },
        elements: {
          point: {
            pointStyle: 'circle',
            radius: 3,
            borderWidth: 3,
            hoverRadius: 6,
            hoverBorderWidth: 6,
            hitRadius: 3
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          lineHeight: 2,
          text: 'Your Bill'
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              let label = data.datasets[tooltipItem.datasetIndex].label || ''
              let symbol = ''
              if (label) {
                if (label === 'Income') {
                  let currency = this.billInfo.results[tooltipItem.index]
                    .currency
                  if (currency === 'USD') {
                    symbol = '$'
                  } else if (currency === 'CNY') {
                    symbol = '￥'
                  }
                }
                label += ': '
              }
              label += tooltipItem.yLabel
              return label
            },
            footer: (tooltipItem, data) => {
              let note = this.billInfo.results[tooltipItem[0].index].note
              return note
            }
          }
        },
        onClick: (evt, item) => {
          this.handleClick(evt, item)
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              display: true,
              distribution: 'linear',
              scaleLabel: {
                display: true,
                labelString: 'Date'
              },
              gridLines: {
                drawOnChartArea: true
              },
              time: {
                unit: 'day'
              }
            }
          ],
          yAxes: [
            {
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'left',
              id: 'y-axis-income',
              scaleLabel: {
                display: true,
                labelString: 'Income'
              }
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-score',
              // grid line settings
              gridLines: {
                drawOnChartArea: false // only want the grid lines for one axis to show up
              },
              ticks: {
                min: 0,
                max: 100,
                // forces step size to be 5 units
                stepSize: 10
              },
              scaleLabel: {
                display: true,
                labelString: 'Score'
              }
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-hour',
              // grid line settings
              gridLines: {
                drawOnChartArea: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Hour'
              },
              ticks: {
                callback: value => ` ${value} h `
              }
            }
          ]
        }
      }
    }
  },
  created() {
    this.getAllBillInfo()
  },
  methods: {
    getAllBillInfo() {
      let search = {
        userId: this.$store.state.objectId
      }
      if (this.$route.query.userId) {
        search.userId = this.$route.query.userId
      }
      this.$axios
        .get(
          'classes/bill' +
            '?where=' +
            JSON.stringify(search) +
            '&count=1' +
            '&order=date'
        )
        .then(res => {
          this.billInfo = res.data
          this.fillData()
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err.response.data.error
          })
        })
    },
    fillData() {
      this.chartData = {
        datasets: [
          {
            label: 'Income',
            borderColor: this.colors.blue,
            yAxisID: 'y-axis-income',
            data: []
          },
          {
            label: 'Score',
            borderColor: this.colors.red,
            yAxisID: 'y-axis-score',
            data: []
          },
          {
            label: 'Hour',
            borderColor: this.colors.yellow,
            yAxisID: 'y-axis-hour',
            data: []
          }
        ]
      }
      for (let i = 0; i < this.billInfo.count; i++) {
        const result = this.billInfo.results[i]
        // income
        this.chartData.datasets[0].data[i] = {}
        this.chartData.datasets[0].data[i].x = result.date
        this.chartData.datasets[0].data[i].y = result.amount
        // score
        this.chartData.datasets[1].data[i] = {}
        this.chartData.datasets[1].data[i].x = result.date
        this.chartData.datasets[1].data[i].y = result.score
        // hour
        this.chartData.datasets[2].data[i] = {}
        this.chartData.datasets[2].data[i].x = result.date
        this.chartData.datasets[2].data[i].y = result.hour
      }
    },
    handleClick(evt, item) {
      if (item.length) {
        this.selectBillInfoIndex = item[0]._index
        this.showEditBtn = true
        for (let i = 0; i < item.length; i++) {
          this.chartData.datasets[i].pointRadius = []
          this.chartData.datasets[i].pointRadius[this.selectBillInfoIndex] = 6
          this.chartData = Object.assign({}, this.chartData) // update trigger vue watch
        }
      } else {
        this.showEditBtn = false
        for (let i = 0; i < this.chartData.datasets.length; i++) {
          this.chartData.datasets[i].pointRadius = []
          this.chartData = Object.assign({}, this.chartData)
        }
      }
    },
    goToAddBillInfo() {
      this.$router.push('/users/bill/add')
    },
    goToUpdateBillInfo() {
      this.$router.push({
        path: '/users/bill/update',
        query: {
          objectId: this.billInfo.results[this.selectBillInfoIndex].objectId
        }
      })
    },
    goToDeleteBillInfo() {
      this.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.deleteBillInfo()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消删除'
          })
        })
    },
    deleteBillInfo() {
      this.$axios
        .delete(
          'classes/bill/' +
            this.billInfo.results[this.selectBillInfoIndex].objectId
        )
        .then(res => {
          this.billInfo.results.splice(this.selectBillInfoIndex, 1)
          this.billInfo.count--
          this.fillData()
          this.$message({
            type: 'success',
            message: 'Delete bill info successfully.'
          })
        })
        .catch(err => {
          console.log(err)
          this.$message({
            type: 'error',
            message: err.response.data.error
          })
        })
    },
    judgeUserId() {
      if (this.$route.query.userId) {
        if (this.$route.query.userId !== this.$store.state.objectId) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    }
  }
}
</script>

<style>
.small {
  margin: 10px auto;
}
.wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
