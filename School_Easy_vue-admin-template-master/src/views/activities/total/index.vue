<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="活动一览" />

    <div class="table">
      <el-table :data="tableData" height="520" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="assname" label="社团名字">
        </el-table-column>
        <el-table-column label="活动名称" width="150">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.title" placement="top" :open-delay="500">
              <span style="cursor: pointer;">{{scope.row.title}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="content" label="活动内容">
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间">
        </el-table-column>
        <el-table-column prop="endTime" label="结束时间">
        </el-table-column>
        <el-table-column prop="status" label="活动状态">
          <template slot-scope="scope">
            <el-tag v-show="scope.row.status === 1" type="success" size="mini">通过</el-tag>
            <el-tag v-show="scope.row.status !== 1&&scope.row.status !== 0" type="danger" size="mini">未审核</el-tag>
            <el-tag v-show="scope.row.status === 0" type="warning" size="mini">不通过</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="90">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="checkRow(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>

    <!-- 对话框，活动详情 -->
    <el-dialog title="活动详情" :visible.sync="centerDialogVisible" width="38.2%" center>
      <div class="show">
        <p><label>活动标题：</label><span>{{dialogShow.title}}</span></p>
        <p><label>举办社团：</label><span>{{dialogShow.assname}}</span></p>
        <p><label>举办地点：</label>{{dialogShow.position}}</p>
        <p><label>活动内容：</label>{{dialogShow.content}}</p>
        <p><label>开始时间：</label>{{dialogShow.startTime}}</p>
        <p><label>结束时间：</label>{{dialogShow.endTime}}</p>
        <p>
          <label>活动状态：</label>
          <el-tag v-show="dialogShow.status === 1" type="success" size="mini">通过</el-tag>
          <el-tag v-show="dialogShow.status !== 1 && dialogShow.status !== 0" type="danger" size="mini">未审核</el-tag>
          <el-tag v-show="dialogShow.status === 0" type="warning" size="mini">不通过</el-tag>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button v-show="dialogShow.status !== 1 && dialogShow.status !== 0" type="danger" @click="centerDialogVisible = false">拒绝</el-button>
        <el-button v-show="dialogShow.status !== 1 && dialogShow.status !== 0" type="primary" @click="centerDialogVisible = false">通过</el-button>
        <el-button v-show="dialogShow.status === 1 || dialogShow.status === 0" type="infor" @click="centerDialogVisible = false">关闭</el-button>
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
        }, {
          assname: '福布斯富豪团',
          title: '暴揍甲方',
          content: '暴揍甲方，可以发动任何形式的攻击',
          position: '30栋202',
          startTime: '2021-11-26 00:00:00',
          endTime: '2021-11-30 23:59:59',
          status: 1,
        }, {
          assname: '福布斯富豪团',
          title: '暴揍甲方',
          content: '暴揍甲方，可以发动任何形式的攻击',
          position: '30栋202',
          startTime: '2021-11-26 00:00:00',
          endTime: '2021-11-30 23:59:59',
          status: 2,
        }],
        centerDialogVisible: false,
        dialogShow: {
          assname: '',
          title: '',
          content: '',
          position: '',
          startTime: '',
          endTime: '',
          status: '',
        }
      }
    },
    methods: {
      checkRow(val) {
        this.dialogShow = val
        this.centerDialogVisible = true
      }
    },
  }
</script>

<style scoped="scoped">
  .table {
    margin-top: 1rem;
  }

  .pagination {
    margin-top: 0.5rem;
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
