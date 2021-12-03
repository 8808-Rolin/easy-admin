<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="待审核" />
    <div class="table">
      <el-table :data="apply" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="userName" label="用户名">
        </el-table-column>
        <el-table-column prop="studentID" label="学号" width="150">
        </el-table-column>
        <el-table-column prop="college" label="学院">
        </el-table-column>
        <el-table-column prop="realName" label="姓名">
        </el-table-column>
        <el-table-column label="备注" width="300">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.note" placement="bottom">
              <span style="cursor: pointer;">{{scope.row.note}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="setJoinApplyStatus(scope.row.uaid, 1)">同意</el-button>
            <el-button type="danger" size="mini" @click="setJoinApplyStatus(scope.row.uaid, 0)">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination background layout="total, prev, pager, next, jumper" hide-on-single-page
        @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {
    getJoinApplyList,
    setJoinApplyStatus
  } from '@/api/user'
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        applys: [],
        apply: [],
        currentPage: 1,
        total: 0,
        pageSize: 15,
        message: null,
      }
    },
    methods: {
      /* 页面切换 */
      handleCurrentChange(val) {
        this.currentPage = val
        let count = 0
        this.apply = this.applys.reduce((item, next) => {
          count++;
          count <= 15 * val && count > 15 * (val - 1) && item.push(next);
          return item;
        }, []);
      },
      getJoinApplyList() {
        getJoinApplyList(this.aid).then(
          res => {
            let apply = res.data.data.apply.reduce((item, next) => {
              next.status === 0 && item.push(next)
              return item
            }, [])
            this.applys = apply
            this.total = this.applys.length
            let count = 0
            if (this.total > 15) {
              this.apply = this.applys.reduce((item, next) => {
                count++;
                count <= 15 && item.push(next);
                return item;
              }, []);
            } else {
              this.apply = this.applys
            }
            //console.log(res.data)
          }
        )
      },
      /* 审批操作 */
      setJoinApplyStatus(uaid, type) {
        if (this.message !== null)
          this.message.close()
        setJoinApplyStatus(uaid, type).then(
          res => {
            if (res.data.data.code === 0) {
              this.getJoinApplyList()
              this.message = this.$message.success(res.data.data.msg)
            } else
              this.message = this.$message.error(res.data.data.msg)
          }
        )
      }
    },
    computed: {
      ...mapGetters([
        'aid'
      ])
    },
    mounted() {
      this.getJoinApplyList()
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
