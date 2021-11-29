<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="广轻社团集合"></el-alert>
    <div class="table">
      <el-table :data="tableData" height="520" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column prop="content" label="审核内容">
        </el-table-column>
        <el-table-column prop="assname" label="社团名称">
        </el-table-column>
        <el-table-column prop="date" label="发布日期">
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

    <!-- 对话框，审核内容展示 -->
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span v-html="text"></span>
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
          title: '福布斯富豪团',
          content: 'Linux是一个真正的多用户多任务的系统',
          assname: '文学社',
          date: '2021-11-27',
        }],
        centerDialogVisible: false,
        text: "<strong>你好</strong>"
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
