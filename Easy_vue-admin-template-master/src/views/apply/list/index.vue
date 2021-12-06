<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="广轻社团集合"></el-alert>
    <div class="table">
      <el-table :data="apply" height="520" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column prop="date" label="发送时间">
        </el-table-column>
       <!-- <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag type="danger" size="mini" v-show="scope.row.status === ">不通过</el-tag>
            <el-tag type="success" size="mini" v-show="">通过</el-tag>
            <el-tag type="warning" size="mini" v-show="">不通过</el-tag>
          </template>
        </el-table-column> -->
        <!-- <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-view" size="mini" @click="getContent(scope.row.content_id)">查看</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>
   <!-- <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div> -->

    <!-- 对话框，审核内容展示 -->
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span v-html="msg.content"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {
    getAssociationApplyList,
    getContent
  } from '@/api/user'
  import {
    mapGetters
  } from 'vuex'
  import base from '@/api/base.js';

  export default {
    data() {
      return {
        centerDialogVisible: false,
        apply:[],
        text: "<strong>你好</strong>",
        msg:{},
      }
    },
    computed: {
      ...mapGetters([
        'aid'
      ]),
    },
    methods: {
      getAssociationApplyList() {
        getAssociationApplyList(this.aid).then(
          res => {
            if (res.data.data.code >= 0) {
              this.apply = res.data.data.apply
            } else {
              this.$message.success(res.data.data.msg)
            }
            console.log(res.data)
          }
        )
      },
      getContent(cid) {
        getContent(cid).then(
          res => {
            if (res.data.data.code === 0) {
              this.msg = res.data.data.msg
              this.centerDialogVisible = true
            } else {
              this.$message.error(res.data.data.msg)
            }
          }
        )
      }
    },
    mounted() {
      this.getAssociationApplyList()
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
