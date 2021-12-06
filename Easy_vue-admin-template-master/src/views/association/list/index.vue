<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="论坛管理" />

    <div class="btn_box">
      <!-- <el-button type="primary" size="medium" @click="toCommunty">发表帖子</el-button> -->
    </div>

    <div class="table">
      <el-table :data="posts" fit style="width: 100%">
        <el-table-column type="index">
        </el-table-column>
        <el-table-column prop="postType" label="帖子类型">
        </el-table-column>
        <el-table-column label="帖子标题" width="150">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.postTitle" placement="top" :open-delay="500">
              <span>{{scope.row.postTitle}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="postAuthor" label="作者">
        </el-table-column>
        <el-table-column prop="replies" label="回复数量">
        </el-table-column>
        <el-table-column prop="replyTime" label="最后回复时间">
        </el-table-column>
        <el-table-column prop="releaseTime" label="发布时间">
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <!-- <el-button type="primary" size="mini" @click="centerDialogVisible = true">查看</el-button> -->
            <el-button type="danger" size="mini" @click="deletePostDiscuss(scope.row.pid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination background layout="total, prev, pager, next, jumper" hide-on-single-page
        @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" :total="total">
      </el-pagination>
    </div>

    <!-- 对话框，活动详情 -->
    <el-dialog title="活动详情" :visible.sync="centerDialogVisible" width="61.8%" center>
      <div class="show">
        <p><label>活动标题：</label></p>
        <p><label>举办社团：</label></p>
        <p><label>举办地点：</label></p>
        <p><label>活动内容：</label></p>
        <p><label>开始时间：</label></p>
        <p><label>结束时间：</label></p>
        <p><label>活动状态：</label></p>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 发表帖子 -->
    <el-dialog title="发表帖子" :visible.sync="centerDialogVisible2" width="80%" :append-to-body="true">
      <div class="show">
        <div class="meal_wrap">
          <!-- <div>
            <div class="title_makes_notice"><i class="el-icon-s-promotion"></i>&ensp;发表新帖</div>
            <div class="tinymce-btn">
              <button type="primary" @click="">发&emsp;表</button>
            </div>
          </div> -->
          <div class="title">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="(item, index) in options" :key="index" :label="item" :value="item">
              </el-option>
            </el-select>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div id="tinymce_box" class="tinymce-box">
            <TEditor ref="tinymceRef" :updateContent.sync="content"></TEditor>
          </div>
          <!-- <div>富文本框内容：{{tinymceObj}}</div> -->
          <div style="margin-top: 1rem;display: flex;line-height: 2;">
            <span><strong>帖子标签：</strong></span>
            <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>


            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
              @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">添加标签</el-button>
          </div>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible2 = false">发 表</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import TEditor from '../tinymce.vue'
  import {
    getPostList,
    deletePostDiscuss,
  } from '@/api/user'
  import {
    mapGetters
  } from 'vuex'
  import base from '@/api/base.js';

  export default {
    data() {
      return {
        centerDialogVisible: false,
        centerDialogVisible2: false,
        // 富文本
        options: [],
        value: '',
        input: '',
        dynamicTags: [],
        inputVisible: false,
        inputValue: '',
        content: '',

        currentPage: 1,
        total: 0,
        pageSize: 10,
        systemPost: [],
        commonPost: [],
        posts: [],
      }
    },
    components: {
      TEditor
    },
    computed: {
      ...mapGetters([
        'aid'
      ]),
    },
    methods: {
      /* 获取帖子 */
      getPostList(type, page, limit) {
        return new Promise((resolve, reject) => {
          getPostList(this.aid, type, page, limit).then(
            res => {
              if (res.data.data.code > 0) {
                if (type === 1) this.systemPost = res.data.data.posts
                else {
                  this.commonPost = res.data.data.posts
                  this.total = res.data.data.code
                }
              }
              console.log(res.data)
              resolve()
            }
          )
        })
      },
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
      /* 页面切换 */
      async handleCurrentChange(val) {
        this.currentPage = val
        await this.getPostList(2, val, this.pageSize)
        this.posts = []
        this.posts.push(...this.commonPost)
        this.posts.unshift(...this.systemPost)
      },
      /* 重写帖子列表 */
      async getPosts() {
        let currentPage = this.currentPage
        if (this.currentPage > 1 && (this.currentPage-1) * 10 <= this.total) {
          console.log("=========")
          currentPage = this.currentPage -1
        }

        await this.getPostList(1, 1, this.pageSize)
        await this.getPostList(2, currentPage, this.pageSize)
        this.posts = []
        this.posts.push(...this.commonPost)
        this.posts.unshift(...this.systemPost)
        console.log(this.posts, "===")
      },
      /* 删除贴子 */
      deletePostDiscuss(typeid) {
        let requestType = 0
        deletePostDiscuss(requestType, typeid).then(
          res => {
            if (res.data.data.code === 0) {
              this.commonPost = []
              this.systemPost = []
              this.getPosts()
              this.$message.success(res.data.data.msg)
            } else {
              this.$message.error(res.data.data.msg)
            }
          }
        )
      }
    },
    mounted() {
      this.getPosts()
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

  >>>.el-dialog__wrapper {
    background-color: #000000;
    z-index: 1299!important;
  }
</style>
