<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="入社审核" />
    <div class="table">
      <el-table :data="tableData" height="520" fit style="width: 100%">
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
        <el-table-column prop="note" label="备注" width="300">
        </el-table-column>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">同意</el-button>
            <el-button type="danger" size="mini">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          userName: '王小虎',
          studentID: '2019060703300',
          college: '信息技术学院',
          realName: '黄梓圭',
          note: 'Linux是一个真正的多用户多任务的系统',
        }],
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
