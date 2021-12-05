<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="广轻社团集合"></el-alert>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="name">
        <el-input v-model="ruleForm.name" maxlength="240" show-word-limit></el-input>
      </el-form-item>

      <el-form-item label="内容描述" prop="desc">
        <el-input :rows="7" type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>

      <el-form-item label="附件">
        <el-upload class="upload-demo" action="#" :before-upload="beforeAvatarUpload" :on-change="handleChange"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">上传不超过5个文件，且不超过2M</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :loading="load" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    submitAssociationApply,
    uploadFile
  } from '@/api/user'
  import {
    mapGetters
  } from 'vuex'
  import base from '@/api/base.js';


  export default {
    data() {
      return {
        load: false,
        ruleForm: {
          name: '',
          desc: '',
        },
        rules: {
          name: [{
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        },

        fileList: [],
        fileUrlList: '',
      };
    },
    computed: {
      ...mapGetters([
        'aid'
      ]),
    },
    methods: {
      submitForm(formName) {
        //console.log(this.load)
        //this.load = true
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.load = true
            this.fileList.forEach(item => {
              let data = new FormData(); //重点在这里 如果使用 var data = {}; data.inputfile=... 这样的方式不能正常上传
              data.append("file", item.raw)
              this.getFileUrl(data)
            })
            this.submitAssociationApply()
            this.load = false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleChange(file, fileList) {
        console.log(file, fileList, "=========")
        const isLt2M = file.raw.size / 1024 / 1024 < 2;
        if (isLt2M) this.fileList = fileList.slice(-5);
        else this.$message.error("文件不能大于2M")
      },
      beforeAvatarUpload(file) {
        //console.log(file)
        return false
      },
      async getFileUrl(file) {
        await this.uploadFile(file)
      },
      uploadFile(file) {
        return new Promise((resolve, reject) => {
          uploadFile(file).then(
            res => {
              if (res.data.data.code === 0) this.fileUrlList += `<a href="[#]/${res.data.data.msg}"></a>`
              else this.$message.error(res.data.data.msg)
              resolve()
            }
          )
        })
      },
      submitAssociationApply() {
        let aid = this.aid
        let title = this.ruleForm.name
        let content = this.ruleForm.desc + this.fileUrlList
        submitAssociationApply(aid, title, content).then(
          res => {
            if (res.data.data.code > -1) {
              this.ruleForm.name = '',
              this.ruleForm.desc = '',
              this.fileList = [],
              this.$message.success(res.data.data.msg)
            } else {
              this.$message.error(res.data.data.msg)
            }
            console.log(res.data)
          }
        )
      }
    }
  }
</script>

<style scoped="scoped">
  >>>.el-form {
    width: 61.8%;
    margin-top: 0.5rem;
  }

  >>>textarea {
    resize: none;
  }
</style>
