<template>
  <el-form 
    ref="billForm" 
    :model="billForm">
    <el-form-item 
      label="收入数额" 
      prop="amount">
      <el-input 
        v-model="billForm.amount" 
        type="number"
        min="0"
        max="999999"
        required
        class="input-with-select"
        @change="formatCurrency">
        <el-select 
          slot="prepend" 
          v-model="billForm.currency" 
          placeholder="货币单位">
          <el-option
            v-for="currency in currencies"
            :key="currency.code"
            :label="currency.code + ' ' + currency.symbol" 
            :value="currency.code">
            <svg 
              class="icon" 
              aria-hidden="true">
              <use :xlink:href="currency.icon"/>
            </svg>
            {{ currency.code + ' ' + currency.symbol }}
          </el-option>
        </el-select>
      </el-input>
    </el-form-item>
    <el-form-item 
      label="体验分数"
      prop="score">
      <el-rate
        v-model="score"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
        :allow-half="true"/>
      <el-input-number 
        v-model="billForm.score"
        :min="0"
        :max="100"
        class="block"/>
    </el-form-item>
    <el-form-item 
      label="工作日期"
      prop="date"
      required="">
      <el-date-picker
        v-model="billForm.date"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
        class="block"/>
    </el-form-item>
    <el-form-item 
      label="工作时长(h)"
      prop="hour">
      <el-input-number 
        v-model="billForm.hour"
        :min="0"
        :max="24"
        class="block"/>
    </el-form-item>
    <el-form-item 
      label="今日备注" 
      prop="note">
      <el-input 
        v-model="billForm.note" 
        :rows="3"
        type="textarea"
        placeholder="有什么需要记下来的呢？"/>
    </el-form-item>
    <el-form-item>
      <el-button 
        type="primary" 
        class="block"
        @click="submitForm('billForm')">
        {{ billInfo.objectId?'更新':'添加' }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import currency from 'currency.js'

export default {
  props: {
    billInfo: {
      type: Object,
      default: function() {
        return {
          amount: 0,
          currency: 'USD',
          score: 0,
          date: '',
          hour: 0,
          note: '',
          userId: this.$store.state.objectId
        }
      }
    }
  },
  data() {
    return {
      billForm: {
        amount: 0,
        currency: 'USD',
        score: 0,
        date: '',
        hour: 0,
        note: '',
        userId: this.$store.state.objectId
      },
      currencies: [
        {
          code: 'CNY',
          name: '人民币',
          symbol: '￥',
          icon: '#icon-zhongguo'
        },
        {
          code: 'USD',
          name: '美元',
          symbol: '$',
          icon: '#icon-meiguo'
        }
      ]
    }
  },
  computed: {
    score: {
      get() {
        return this.billForm.score / 20
      },
      set(newValue) {
        this.billForm.score = newValue * 20
      }
    }
  },
  watch: {
    billInfo() {
      this.billForm = this.billInfo
      delete this.billForm['createdAt']
      delete this.billForm['updatedAt']
    }
  },
  methods: {
    formatCurrency() {
      let amount = currency(this.billForm.amount).value
      if (amount.toString().length > 9) {
        amount = 999999
      } else if (amount > 999999) {
        amount = 999999
      }
      this.billForm.amount = amount
    },
    submitForm(formName) {
      if (this.billInfo.objectId) {
        this.updateBillInfo()
      } else {
        this.addBillInfo()
      }
    },
    addBillInfo() {
      this.$axios
        .post('classes/bill', this.billForm)
        .then(res => {
          if (res.status === 201) {
            // 201 Created 请求已被实现
            this.$message({
              type: 'success',
              message: 'Add bill info successfully.'
            })
            // this.$router.push('')
            // 更新表格视图
          } else {
            this.$message.error(res.data.info)
          }
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err.response.data.error
          })
        })
    },
    updateBillInfo() {
      this.$axios
        .put('classes/bill/' + this.billInfo.objectId, this.billForm)
        .then(res => {
          console.log(res)
          this.$message({
            type: 'success',
            message: 'Update bill info successfully.'
          })
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err.response.data.error
          })
        })
    }
  }
}
</script>

<style>
.el-select .el-input {
  width: 120px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
