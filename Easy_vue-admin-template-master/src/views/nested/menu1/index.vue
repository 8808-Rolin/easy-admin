<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="社团名称"></el-alert>
    <div class="table">
      <el-table :data="tableData" height="550" fit style="width: 100%">
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
        <el-table-column prop="intro" label="简介" width="200">
        </el-table-column>
        <el-table-column prop="permission" label="身份">
        </el-table-column>
        <el-table-column prop="birth" label="生日">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button class="delete" type="text" icon="el-icon-circle-close"></el-button>
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
          intro: 'Linux是一个真正的多用户多任务的系统',
          permission: '会员',
          birth: '01-01'
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
