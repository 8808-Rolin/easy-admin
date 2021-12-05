<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="活动一览" />

    <div class="table">
      <el-table :data="action" height="550" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="assname" label="社团名字">
        </el-table-column>
        <el-table-column label="活动名称" width="150">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.title" placement="top" :open-delay="500">
              <span>{{scope.row.title}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间">
        </el-table-column>
        <el-table-column prop="endTime" label="结束时间">
        </el-table-column>
        <el-table-column prop="status" label="活动状态">
          <template slot-scope="scope">
            <el-tag v-show="scope.row.status === 1" type="success" size="mini">已发布</el-tag>
            <el-tag v-show="scope.row.status === 2" type="danger" size="mini">审核不过</el-tag>
            <el-tag v-show="scope.row.status === 0" type="warning" size="mini">待审核</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="90">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="getActionInfo(scope.row.actid);getActionMember(scope.row.actid)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div> -->

    <!-- 对话框，活动详情 -->
    <el-dialog title="活动详情" :visible.sync="centerDialogVisible" width="61.8%" center>
      <div class="show">
        <el-tabs type="border-card">
          <el-tab-pane label="活动内容">
            <p><label>活动标题：{{activeMes.title}}</label></p>
            <p><label>举办地点：{{activeMes.position}}</label></p>
            <p>活动内容：<label v-html="activeMes.content"></label></p>
            <p><label>发布时间：{{activeMes.releaseDate}}</label></p>
            <p><label>开始时间：{{activeMes.startDate}}</label></p>
            <p><label>结束时间：{{activeMes.overDate}}</label></p>
          </el-tab-pane>
          <el-tab-pane label="参加人员">
            <el-table :data="action_member" height="350" fit style="width: 100%">
              <el-table-column type="index">
              </el-table-column>
              <el-table-column prop="username" label="用户名">
              </el-table-column>
              <el-table-column prop="student_number" label="学号">
              </el-table-column>
              <el-table-column prop="phone" label="电话">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {
    getActionList,
    getActionMember,
    getActionInfo
  } from '@/api/user'
  import {
    mapGetters
  } from 'vuex'
  import base from '@/api/base.js';

  export default {
    data() {
      return {
        action:[],
        action_member:[],
        activeMes:{},
        centerDialogVisible: false
      }
    },
    computed: {
      ...mapGetters([
        'aid'
      ]),
    },
    methods: {
      /* 获取活动 */
      getActionList() {
        getActionList(this.aid).then(
          res => {
            this.action = res.data.data.action
            console.log(res.data)
          }
        )
      },
      /* 获取参加人员 */
      getActionMember(actid) {
        getActionMember(actid).then(
          res => {
            if (res.data.data.code !== -1) {
              this.action_member = res.data.data.action_member
              /* let user = {
                userName:'李四',
                studentID:'1231231',
                college:'hhhh',
              }
              this.action_member = [user,user,user,user,user] */
              console.log(res.data)
            } else {
              this.$message.error(res.data.data.msg)
            }

          }
        )
      },
      /* 获取活动具体内容 */
      getActionInfo(actid) {
        console.log(actid)
        getActionInfo(actid).then(
          res => {
            if (res.data.data.code === 0) {
              this.activeMes = res.data.data
              this.centerDialogVisible = true
              console.log(res.data)
            } else {
              this.$message.error(res.data.data.msg)
            }

          }
        )
      },
    },
    mounted() {
      this.getActionList()
    }
  }
</script>

<style scoped="scoped">
  .table {
    margin-top: 1rem;
  }

  .pagination {
    text-align: center;
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

  >>>.el-dialog {
    border-radius: 0.375rem;
  }
</style>
