<template>
  <div style="padding: 30px;">
    <el-alert :closable="false" title="社团信息修改" />
    <div class="set_form">
      <div><label>logo：</label>
        <el-upload class="avatar-uploader" action="#" :show-file-list="false" :before-upload="beforeAvatarUpload">
          <img v-if="imageBASE64" :src="imageBASE64" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div><label>论坛名称：</label>
        <el-input placeholder="请输入论坛名称" maxlength="120" show-word-limit v-model="assmes.name"></el-input>
      </div>
      <div><label>论坛简介：</label>
        <el-input class="intro" maxlength="255" show-word-limit v-model="assmes.intro" type="textarea" :rows="7"
          placeholder="请输入内容">
        </el-input>
      </div>
      <div><label>社团负责人：</label>
        <el-tag v-for="tag in headerTag" closable @close="handleClose(tag)">{{tag.name}}</el-tag>
      </div>
      <div class="tag_pool">
        <label>候选人：</label>
        <el-tag :key="tag.uid" v-for="tag in assAdmin" :disable-transitions="false" @click="handleClick(tag)">
          {{tag.name}}
        </el-tag>
      </div>
      <div class="btn_box">
        <el-button type="primary" @click="submitMes">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    updateAssInfo,
    uploadImage,
    findAssAdmin
  } from '@/api/user'
  import {
    mapGetters
  } from 'vuex'
  import base from '@/api/base.js';

  export default {
    data() {
      return {
        assAdmin: [],
        assAdmin: [],
        inputVisible: false,
        headerTag: [],
        imageBASE64: '',
        assmes: {
          aid: 0,
          name: null,
          intro: null,
          logo: null,
          headeruid: null,
        },
        message: null,
      };
    },
    computed: {
      ...mapGetters([
        'aid'
      ]),
    },
    methods: {
      /* 上传头像 **/

      // 上传文件之前的钩子，参数为上传的文件，若返回 false，则停止上传。
      beforeAvatarUpload(file) {
        const isJPGandPNG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt500k = file.size / 1024 / 1024 < 2;
        if (isJPGandPNG && isLt500k) {
          let filereader = new FileReader();
          filereader.readAsDataURL(file)
          filereader.onload = () => {
            this.imageBASE64 = filereader.result
          }
        } else {
          if (!isJPGandPNG) {
            this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
          }
          if (!isLt500k) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
        }
        return false
      },
      handleClose(tag) {
        this.headerTag.splice(this.headerTag.indexOf(tag), 1);
        this.assAdmin.push(tag)
      },
      handleClick(tag) {
        this.assAdmin.splice(this.assAdmin.indexOf(tag), 1);
        if (this.headerTag.length > 0)
          this.handleClose(this.headerTag[0])
        this.headerTag.push(tag)
      },

      /* 获取社团管理者 */
      findAssAdmin() {
        findAssAdmin(this.aid).then(
          res => {
            console.log(res.data)
            this.assAdmin = res.data.data.msg
          }
        )
      },

      /* 修改论坛信息 */
      updateAssInfo(logo) {
        this.assmes.aid = this.aid
        this.assmes.logo = logo
        const result = {}
        let arr = ['']
        Object.keys(this.assmes).filter((key,val,c) => {
          if (this.assmes[key] != null) result[key] = this.assmes[key]
          //console.log(this.assmes[key])
        })
        console.log(result)
        updateAssInfo({
          ...result
        }).then(
          res => {
            this.message = this.$message.success(res.data.data.msg)
            this.imageBASE64 = ''
            this.assmes = {
              aid: null,
              name: null,
              intro: null,
              logo: null,
              headeruid: null,
            }
            this.message = null
          }
        )
      },

      uploadImg() {
        uploadImage(this.imageBASE64).then(
          res => {
            if (res.data.data.code === 0) {
              //this.assmes.logo = res.data.data.msg
              this.updateAssInfo(res.data.data.msg)
              console.log(this.assmes)
            } else {
              this.message = this.$message.error(res.data.data.msg)
            }
          }
        )
      },
      /* 提交请求 */
      submitMes() {
        if (this.message !== null) this.message.close()
        if (this.headerTag.length > 0) this.assmes.headeruid = this.headerTag[0].uid
        if (this.imageBASE64 == '') {
          this.updateAssInfo(null)
        } else {
          this.uploadImg()
        }
      }
    },
    mounted() {
      this.findAssAdmin()
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

  .intro>>>textarea {
    resize: none;
  }
</style>
