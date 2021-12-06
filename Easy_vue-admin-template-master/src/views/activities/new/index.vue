<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="发布新活动" />

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" maxlength="240" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="活动地点" prop="region">
        <el-input v-model="ruleForm.region" maxlength="240" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="开始时间:" prop="date1">
        <el-date-picker style="width: 180px;" v-model="ruleForm.date1" type="datetime"
          format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" placeholder="开始时间">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="结束时间:" prop="date2">
        <el-date-picker style="width: 180px;" v-model="ruleForm.date2" type="datetime"
          format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" placeholder="结束时间">
        </el-date-picker>
      </el-form-item>


      <el-form-item label="活动内容" prop="desc">
        <el-input type="textarea" :rows="7" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    releaseAction,
    getActionList,
    getActionMember,
  } from '@/api/user'
  import {
    mapGetters
  } from 'vuex'
  import base from '@/api/base.js';

  export default {
    data() {
      const validateDate2 = (rule, value, callback) => {
        if (value <= this.ruleForm.date1) {
          callback(new Error('日期不能小于开始时间'))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          desc: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          }, ],
          region: [{
            required: true,
            message: '请输入活动区域',
            trigger: 'blur'
          }],
          date1: [{
            required: true,
            message: '请选择开始时间',
            trigger: 'change',
            //validator: validateDate2
          }],
          date2: [{
            required: true,
            message: '请选择正确的结束时间',
            trigger: 'change',
            validator: validateDate2
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        }
      };
    },
    computed: {
      ...mapGetters([
        'aid'
      ]),
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid)
          if (valid) {
            this.releaseAction()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      /* 活动发布 */
      releaseAction() {
        let title = this.ruleForm.name
        let content = this.ruleForm.desc
        let aid = this.aid
        let position = this.ruleForm.region
        let startTime = this.ruleForm.date1
        let endTime = this.ruleForm.date2
        releaseAction({
          title,
          content,
          aid,
          position,
          startTime,
          endTime
        }).then(
          res => {
            if (res.data.data.code !== -1) {
              this.$message.success(res.data.data.msg)
              this.ruleForm = {
                name: '',
                region: '',
                date1: '',
                date2: '',
                desc: ''
              }
            } else {
              this.$message.error(res.data.data.msg)
            }
            console.log(res.data)
          }
        )
      },
    }
  }
</script>

<style scoped="scoped">
  >>>form {
    width: 61.8%;
    margin-top: 1rem;
  }

  >>>.el-textarea__inner {
    resize: none;
  }

  .line {
    text-align: center;
  }
</style>
