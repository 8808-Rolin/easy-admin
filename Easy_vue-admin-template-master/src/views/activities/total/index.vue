<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="活动一览" />

    <div class="table">
      <el-table :data="tableData" height="550" fit style="width: 100%">
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
        <el-table-column prop="content" label="活动内容">
        </el-table-column>
        <el-table-column prop="position" label="举办地点">
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
            <el-button type="primary" size="mini" @click="centerDialogVisible = true">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>

    <!-- 对话框，活动详情 -->
    <el-dialog title="活动详情" :visible.sync="centerDialogVisible" width="61.8%" center>
      <div class="show">
        <el-tabs type="border-card">
          <el-tab-pane label="活动内容">
            <p><label>活动标题：</label></p>
            <p><label>举办社团：</label></p>
            <p><label>举办地点：</label></p>
            <p><label>活动内容：</label></p>
            <p><label>开始时间：</label></p>
            <p><label>结束时间：</label></p>
            <p><label>活动状态：</label></p>
          </el-tab-pane>
          <el-tab-pane label="参加人员">
            <el-table :data="tableData2" height="350" fit style="width: 100%">
              <el-table-column type="index">
              </el-table-column>
              <el-table-column prop="userName" label="用户名">
              </el-table-column>
              <el-table-column prop="studentID" label="学号">
              </el-table-column>
              <el-table-column prop="college" label="学院">
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
  export default {
    data() {
      return {
        tableData: [{
          assname: '福布斯富豪团',
          title: '暴揍甲方',
          content: '暴揍甲方，可以发动任何形式的攻击',
          position: '30栋202',
          startTime: '2021-11-26 00:00:00',
          endTime: '2021-11-30 23:59:59',
          status: 0,
        },{
          assname: '福布斯富豪团',
          title: '暴揍甲方',
          content: '暴揍甲方，可以发动任何形式的攻击',
          position: '30栋202',
          startTime: '2021-11-26 00:00:00',
          endTime: '2021-11-30 23:59:59',
          status: 1,
        },{
          assname: '福布斯富豪团',
          title: '暴揍甲方',
          content: '暴揍甲方，可以发动任何形式的攻击',
          position: '30栋202',
          startTime: '2021-11-26 00:00:00',
          endTime: '2021-11-30 23:59:59',
          status: 2,
        }],
        tableData2: [{
          userName: '王小虎',
          studentID: '2019060703300',
          college: '信息技术学院',
        }],
        centerDialogVisible: false
      }
    },
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
