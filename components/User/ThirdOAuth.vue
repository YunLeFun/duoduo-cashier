<template>
  <el-table
    :data="accountData"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="第三方账号关联">
      <template slot-scope="scope">
        <svg 
          class="icon" 
          aria-hidden="true"
          style="width:1.2em;height:1.2em;">
          <use :xlink:href="scope.row.icon"/>
        </svg>
        {{ scope.row.name }}
      </template>
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
      <template slot-scope="scope">
        <el-tag 
          :type="typeof userInfo.authData[scope.row.account] === 'undefined'?'danger':'success'" 
          size="small">{{ typeof userInfo.authData[scope.row.account] === 'undefined'?'Not':'' }}  Connected</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <template v-if="typeof userInfo.authData[scope.row.account] === 'undefined'">
          <el-button 
            type="primary" 
            size="small"
            @click="connectAccount(scope.$index, scope.row)">Connect</el-button>
        </template>
        <template v-else>
          <el-button 
            type="primary" 
            size="small"
            @click="disconnectAccount(scope.$index, scope.row)">Disconnect</el-button>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default() {
        return {
          authData: {
            github: {}
          }
        }
      }
    }
  },
  data() {
    return {
      accountData: [
        {
          account: 'github',
          icon: '#icon-github',
          name: 'GitHub',
          oauth_path: process.env.github.authorize_api
        }
      ]
    }
  },
  methods: {
    connectAccount(index, row) {
      window.open(
        this.accountData[index].oauth_path +
          '?client_id=' +
          process.env.github.client_id +
          '&scope=' +
          process.env.github.scope,
        '_self'
      )
    },
    disconnectAccount(index, row) {
      let disconnectInfo = {}
      disconnectInfo['authData.' + row.account] = { __op: 'Delete' }
      this.$axios
        .put('users/' + this.$store.state.objectId, disconnectInfo)
        .then(res => {
          this.$message({
            type: 'success',
            message: 'Disconnected successfully.'
          })
          this.$set(this.userInfo.authData, row.account, undefined)
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
</style>
