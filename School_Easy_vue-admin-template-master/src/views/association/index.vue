<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="活动一览" />

    <div class="btn_box">
      <el-select v-model="value" filterable placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="table">
      <el-table :data="tableData" height="550" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="userName" label="用户昵称">
        </el-table-column>
        <el-table-column prop="realName" label="用户姓名" width="150">
        </el-table-column>
        <el-table-column prop="studentID" label="学号">
        </el-table-column>
        <el-table-column prop="college" label="所属学院">
        </el-table-column>
        <el-table-column label="身份">
          <template slot-scope="scope">
            <el-tag type="success" size="mini" v-show="scope.row.level == 1">社团管理员</el-tag>
            <el-tag type="warning" size="mini" v-show="scope.row.level == 0">普通社员</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="centerDialogVisible = true" v-show="scope.row.level == 0">设为管理员</el-button>
            <el-button type="danger" size="mini" v-show="scope.row.level == 1">罢免管理员</el-button>
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
  import TEditor from './tinymce.vue'

  export default {
    data() {
      return {
        tableData: [{
          userName: 'aa',
          realName: 'ss',
          studentID: '202002',
          college: 'eee',
          level: 1
        }],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }],
        value: ''
      }
    },
    components: {
      TEditor
    },
    methods: {
      // 标签添加
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
    }
  }
</script>

<style scoped="scoped">
  .btn_box {
    padding: 0.5rem 0;
  }

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

  /* 富文本 */
  .meal_wrap>div:first-child {
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .meal_wrap .title {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
  }

  .meal_wrap .title .el-select {
    width: 12.5rem;
    margin-right: 0.625rem;
  }

  .title_makes_notice {
    margin-left: 0.75rem;
    font-size: 1.5rem;
    color: #333;
  }

  .tinymce-btn {
    height: 3rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .tinymce-btn button {
    border-radius: 0.375rem;
    padding: 0.5rem 2rem;
    font-weight: bold;
    background-color: #1DA0FB;
    color: #fff;
    border: #1DA0FB solid 0.0625rem;
    outline: none;
    box-shadow: var(--box-shadow1);
  }

  textarea {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  /* 标签 */
  .el-tag+.el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
