<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="广轻社团集合"></el-alert>
    <div class="table">
      <el-table :data="tableData" height="520" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="name" label="社团名称">
        </el-table-column>
        <el-table-column prop="intro" label="社团简介">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>
        <el-table-column prop="headname" label="社团负责人">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-view" size="mini">查看</el-button>
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
  export default {
    data() {
      return {
        tableData: [{
          name: '福布斯富豪团',
          intro: 'Linux是一个真正的多用户多任务的系统',
          createTime: '2021-11-27',
          headname: '黄梓圭',
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
