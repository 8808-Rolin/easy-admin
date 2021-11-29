<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="广轻社团集合"></el-alert>
    <div class="table">
      <el-table :data="tableData" height="520" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="userName" label="用户名">
        </el-table-column>
        <el-table-column prop="realName" label="真实姓名">
        </el-table-column>
        <el-table-column prop="studentID" label="学号">
        </el-table-column>
        <el-table-column prop="college" label="学院">
        </el-table-column>
        <el-table-column prop="intro" label="简介">
        </el-table-column>
        <el-table-column prop="permission" label="身份">
        </el-table-column>
        <el-table-column prop="birth" label="生日">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-view" size="mini" @click="centerDialogVisible = true">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>

    <!-- 对话框，用户信息 -->
    <el-dialog title="活动详情" :visible.sync="centerDialogVisible" width="38.2%" center>
      <div class="show">
        <p><label>活动标题：</label></p>
        <p><label>举办社团：</label></p>
        <p><label>举办地点：</label></p>
        <p><label>活动内容：</label></p>
        <p><label>开始时间：</label></p>
        <p><label>结束时间：</label></p>
        <p><label>活动状态：</label></p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="centerDialogVisible = false">拒绝</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">通过</el-button>
        <!-- <el-button type="infor" @click="centerDialogVisible = false">关闭</el-button> -->
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          userName: '福布斯富豪团',
          realName: '黄梓圭',
          studentID: '2019060703300',
          college: '信息技术学院',
          intro: 'Linux是一个真正的多用户多任务的系统',
          permission: '普通会员',
          birth: '11-27',
        }],
        centerDialogVisible: false
      }
    },
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
