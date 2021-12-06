<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="入社审核" />
    <div class="table">
      <el-table :data="create" height="520" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="name" label="社团名字">
        </el-table-column>
        <el-table-column prop="intro" label="社团简介">
        </el-table-column>
        <el-table-column prop="note" label="申请备注">
        </el-table-column>
        <el-table-column prop="realname" label="申请人姓名">
        </el-table-column>
        <el-table-column prop="studentID" label="学号">
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag v-show="scope.row.status == 1" type="success" size="mini">已通过</el-tag>
            <el-tag v-show="scope.row.status == 2" type="danger" size="mini">未通过</el-tag>
            <el-tag v-show="scope.row.status == 0" type="warning" size="mini">待审核</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" v-show="scope.row.status == 0" @click="createAssReply(scope.row.caid, 1)">同意</el-button>
            <el-button type="danger" size="mini" v-show="scope.row.status == 0" @click="createAssReply(scope.row.caid, 0)">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
  import {
    getCreateApplyList,
    createAssReply
  } from '@/api/user'

  export default {
    data() {
      return {
        create:[],
        message:null,
      }
    },
    methods: {
      getCreateApplyList() {
        getCreateApplyList().then(
          res => {
            if (res.data.data.code > -1) {
              this.create = res.data.data.create
            } else {
              this.$message.error(res.data.data.msg)
            }
            console.log(res.data)
          }
        )
      },
      createAssReply(caid,status) {
        if (this.message !== null) this.message.close()
        createAssReply(caid,status).then(
          res => {
            if (res.data.data.code >= 0) {
              this.message = this.$message.success(res.data.data.msg)
              this.getCreateApplyList()
            }
            else {
              this.message = this.$message.error(res.data.data.msg)
            }
          }
        )
      }
    },
    mounted() {
      this.getCreateApplyList()
    }
  }
</script>

<style type="text/css" scoped="scoped">
  .table {
    margin-top: 1rem;
  }

  .pagination {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .delete {
    color: #ff0000;
  }

  >>>.el-table td {
    padding: 0.5rem 0;
  }

  >>>.el-table .cell {
    width: 100%;
    line-height: 1.2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
</style>
