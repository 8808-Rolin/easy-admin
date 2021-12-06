<template>
  <div style="padding:30px;">
    <el-alert :closable="false" :title="assName"></el-alert>
    <div class="table">
      <el-table :data="user" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="username" label="用户名">
        </el-table-column>
        <el-table-column prop="studentID" label="学号" width="150">
        </el-table-column>
        <el-table-column prop="college" label="学院">
        </el-table-column>
        <el-table-column prop="realname" label="姓名">
        </el-table-column>
        <el-table-column prop="intro" label="简介" width="200">
        </el-table-column>
        <el-table-column prop="permisson" label="身份">
        </el-table-column>
        <el-table-column prop="birth" label="生日">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-popconfirm title="确定要将该社员移出社团吗？" @onConfirm="removeUser(scope.row.uid)">
              <el-button slot="reference" class="delete" :disabled="scope.row.permisson === '干部'" type="danger">移出社团</el-button>
            </el-popconfirm>
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
    getMemberInformationList,
    removeUser,
    getAssociationInfo,
  } from '@/api/user'
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        users: [],
        user: [],
        currentPage: 1,
        total: 0,
        pageSize: 12,
        assName:'',
      }
    },
    methods: {
      /* 通过社团ID获取社团信息 */
      getAssociationInfo() {
        getAssociationInfo(this.aid).then(
          res => {
            //console.log(res.data)
            this.assName = res.data.data.name
          }
        )
      },
      /* 获取社团成员 */
      getMemberInformationList() {
        getMemberInformationList(this.aid).then(
          res => {
            let user = res.data.data.user.reduce((item, next) => {
              next.permisson = next.permisson === 0 ? '会员':'干部'
              item.push(next);
              return item;
            }, []);
            //console.log(user)
            this.users = user
            this.total = this.users.length
            let count = 0
            if (this.total > 12) {
              this.user = this.users.reduce((item, next) => {
                count++;
                count <= 12 && item.push(next);
                return item;
              }, []);
            } else {
              this.user = this.users
            }
          }
        )
      },
      /* 页面切换 */
      handleCurrentChange(val) {
        this.currentPage = val
        let count = 0
        this.user = this.users.reduce((item, next) => {
          count++;
          count <= 12 * val && count > 12 * (val - 1) && item.push(next);
          return item;
        }, []);
      },
      /* 踢出成员 */
      removeUser(uid) {
        removeUser(this.aid,uid).then(
          res => {
            if (res.data.data.code === 0) {
              this.$message.success(res.data.data.msg)
              this.getMemberInformationList()
            } else {
              this.$message.error(res.data.data.msg)
            }
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
      this.getMemberInformationList()
      this.getAssociationInfo()
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
    color: #fff;
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
