<template>
  <div class="small">
    <line-chart 
      :chart-data="datacollection" 
      :options="options"/>
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
      datacollection: null,
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Your Bill'
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Date'
              }
            }
          ],
          yAxes: [
            {
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'left',
              id: 'y-axis-income'
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
              }
            }
          ]
        }
      }
    }
  },
  beforeCreate() {
    let search = {
      userId: this.$store.state.objectId
    }
    console.log(search)
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
        console.log(res.data)
        this.fillData()
      })
      .catch(err => {
        this.$message({
          type: 'error',
          message: err.response.data.error
        })
      })
  },
  methods: {
    fillData() {
      this.datacollection = {
        datasets: [
          {
            label: 'Income',
            backgroundColor: this.colors.blue,
            borderColor: this.colors.blue,
            fill: false,
            yAxisID: 'y-axis-income',
            data: []
          },
          {
            label: 'Score',
            backgroundColor: this.colors.red,
            borderColor: this.colors.red,
            fill: false,
            yAxisID: 'y-axis-score',
            data: []
          }
        ]
      }
      for (let i = 0; i < this.billInfo.count; i++) {
        const result = this.billInfo.results[i]
        this.datacollection.datasets[0].data[i] = {}
        this.datacollection.datasets[0].data[i].x = result.date
        this.datacollection.datasets[0].data[i].y = result.amount
        this.datacollection.datasets[1].data[i] = {}
        this.datacollection.datasets[1].data[i].x = result.date
        this.datacollection.datasets[1].data[i].y = result.score
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    newDate(days) {
      return moment()
        .add(days, 'd')
        .toDate()
    },
    newDateString(days) {
      return moment()
        .add(days, 'd')
        .format()
    }
  }
}
</script>

<style>
.small {
  margin: 10px auto;
}
</style>
