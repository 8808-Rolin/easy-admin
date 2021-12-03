<template>
  <div style="padding: 30px;">
    <el-alert :closable="false" title="社团信息修改" />
    <div class="set_form">
      <div><label>logo：</label>
        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
          :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div><label>论坛名称：</label>
        <el-input placeholder="请输入论坛名称"></el-input>
      </div>
      <div><label>论坛简介：</label>
        <el-input class="intro" type="textarea" :rows="7" placeholder="请输入内容">
        </el-input>
      </div>
      <div><label>社团负责人：</label>
        <el-tag closable @close="handleClose(headerTag)">{{headerTag}}</el-tag>
      </div>
      <div class="tag_pool">
        <label>候选人：</label>
        <el-tag :key="tag" v-for="tag in dynamicTags" :disable-transitions="false">
          {{tag}}
        </el-tag>
      </div>
      <div class="btn_box">
        <el-button type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        headerTag: '社团负责人'
      };
    },
    methods: {
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
      }
    }
  }
</script>

<style scoped="scoped">
  .set_form {
    width: 50%;
    height: 70vh;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .set_form label {
    width: 7rem;
    margin-top: 0.75rem;
    white-space: nowrap;
  }

  .set_form>div {
    display: flex;
    align-items: flex-start;
  }

  >>>.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  >>>.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  >>>.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  >>>.avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .tag_pool .el-tag {
    margin-top: 0.25rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .intro>>> textarea {
    resize: none;
  }
</style>
