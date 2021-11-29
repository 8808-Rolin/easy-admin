<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <div class="club_mes">
      <div class="intro box_shadow">
        <div class="left">
          <div class="logo">
            <img src="../../assets/index_images/logo-round-600px.png">
          </div>
        </div>
        <div class="right">
          <div class="name">
            <strong>Easy社团</strong>
          </div>
          <div class="intro_content">
            社团简介
          </div>
          <div class="other_mes">
            <small>社团负责人：黄梓圭</small>
            <small>社团单位：信息技术学院</small>
          </div>
        </div>
      </div>
      <div class="email_box box_shadow">
        <div class="title"><strong>社团邮箱</strong></div>
        <div class="emails scroll_height">
          <div v-for="item in 12" class="email">
            <div class="tag">
              <el-tag v-show="item%2 == 0" size="mini" type="danger">未读</el-tag>
              <el-tag v-show="item%2 != 0" size="mini" type="success">已读</el-tag>
            </div>
            <div class="email_title">
              <small>邮件标题</small>
            </div>
            <div class="time">
              <small>2021-11-23</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 社团数据 -->
    <div class="data">
      <div class="member_num box_shadow">
        <div class="show_data">
          <!-- <i class="iconfont el-icon-masses"></i> -->
          <svg t="1637734546660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="10823" width="48" height="48">
            <path
              d="M505.9264 630.0224c69.8816-40.3776 116.928-115.0848 116.928-200.448 0-128.096-105.8624-232.3072-235.9808-232.3072-130.1248 0-235.9808 104.2112-235.9808 232.3072 0 85.3632 47.0464 160.0768 116.928 200.448C112.5824 679.5264 0 823.04 0 992a32 32 0 1 0 64 0c0-174.5152 144.8384-316.4928 322.8736-316.4928 178.0288 0 322.8736 141.984 322.8736 316.4928 0 17.6768 14.3232 32 32 32s32-14.3232 32-32c0-168.96-112.5824-312.4736-267.8208-361.9776zM214.8928 429.568c0-92.8 77.152-168.3072 171.9808-168.3072S558.8544 336.768 558.8544 429.568c0 92.8064-77.152 168.3072-171.9808 168.3072S214.8928 522.3744 214.8928 429.568z"
              p-id="10824" fill="#707070"></path>
            <path
              d="M805.0112 409.4208c47.8208-39.6032 74.144-100.8704 74.144-177.1136C879.1552 104.2112 773.2928 0 643.1744 0 563.8656 0 493.0816 36.7616 448.9856 100.8576a32 32 0 1 0 52.7232 36.2752C533.6896 90.656 585.248 64 643.1744 64c94.8288 0 171.9808 75.5008 171.9808 168.3072 0 46.4576-13.3312 128.32-102.5984 154.6176a32 32 0 0 0-21.6512 39.7376c3.8912 13.2224 15.5904 21.9328 28.5824 22.7968C861.184 476.8768 960 606.9568 960 766.5344c0 17.6768 14.3232 32 32 32s32-14.3232 32-32c0-162.2848-86.9568-299.3152-218.9888-357.1136z"
              p-id="10825" fill="#707070"></path>
          </svg>
          <div class="show">
            <div class="num">
              <strong>45位</strong>
            </div>
            <div class="title">
              社团成员数量
            </div>
          </div>
        </div>
        <div class="time">
          <small>最后一位成员加入时间：2021-11-23</small>
        </div>
      </div>
      <div class="notice_num box_shadow">
        <div class="show_data">
          <svg t="1637741906529" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="24167" width="48" height="48">
            <path
              d="M860.013714 503.954286a35.986286 35.986286 0 0 0-35.986285 36.059428l0.146285 3.949715h-0.146285v344.064H135.972571V199.972571H512a35.986286 35.986286 0 1 0 0-71.972571H136.045714a71.972571 71.972571 0 0 0-72.045714 71.972571v688.054858c0 39.789714 32.182857 71.972571 71.972571 71.972571h688.054858c39.789714 0 71.972571-32.182857 71.972571-71.972571V543.963429h-0.219429a35.986286 35.986286 0 0 0-35.84-40.009143z"
              p-id="24168" fill="#707070"></path>
            <path
              d="M1002.715429 100.278857L923.428571 20.992A72.265143 72.265143 0 0 0 821.394286 21.211429L424.228571 418.377143a31.963429 31.963429 0 0 0-6.802285 10.24L317.586286 663.990857a31.670857 31.670857 0 0 0 6.802285 35.108572c8.484571 8.630857 21.942857 12.434286 35.181715 6.875428l235.52-99.693714a33.133714 33.133714 0 0 0 10.24-6.802286l397.165714-397.165714a72.265143 72.265143 0 0 0 0.219429-102.034286zM559.835429 543.012571l-137.435429 58.221715 58.221714-137.435429 278.747429-278.820571 79.213714 79.213714-278.747428 278.820571z m391.68-391.68l-62.025143 61.952-79.213715-79.213714 62.025143-61.952 0.219429-0.219428 79.213714 79.213714-0.219428 0.219428z"
              p-id="24169" fill="#707070"></path>
          </svg>
          <div class="show">
            <div class="num">
              <strong>1024</strong>
            </div>
            <div class="title">
              论坛发帖总数
            </div>
          </div>
        </div>
        <div class="time">
          <small>最后一次发帖时间：2021-11-23</small>
        </div>
      </div>
      <div class="activity_num box_shadow">
        <div class="show_data">
          <svg t="1638169321449" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4620" width="48" height="48"><path d="M413.217 941.535c-9.091 0-18.131-3.635-24.682-10.82-85.925-94.41-224.906-95.323-227.775-95.323h-0.204c-18.131 0-32.933-14.353-33.063-32.15-0.142-17.887 14.467-32.467 32.666-32.666 6.868-0.357 171.028-0.193 277.666 116.971 12.165 13.345 10.974 33.828-2.637 45.761-6.277 5.507-14.144 8.229-21.97 8.229v0zM634.755 941.472c-8.025 0-16.090-2.852-22.459-8.655-13.39-12.153-14.212-32.673-1.792-45.795 110.436-116.997 271.262-116.867 277.602-116.607 18.273 0.193 32.906 14.842 32.706 32.735-0.198 17.791-14.932 32.082-33.035 32.082h-0.261c-2.746 0-138.917 0.879-228.546 95.838-6.477 6.931-15.364 10.401-24.217 10.401v0zM576.516 776.636h-104.691c-3.334 0-6.573-0.487-9.652-1.429-111.758-14.064-206.735-77.685-267.95-179.7-71.060-118.49-87.349-272.017-40.47-382.045 5.053-11.83 16.748-19.639 29.837-19.901l9.941-0.096c62.929 0 121.706 11.666 175.191 34.742 38.65-69.319 82.784-121.921 131.449-156.663 2.575-2.206 5.513-4.055 8.785-5.417v0c10.208-4.339 22.073-3.403 31.413 2.563 1.622 1.038 3.141 2.206 4.531 3.5 48.79 35.127 91.705 86.953 130.559 157.735 54.541-24.176 114.667-36.427 179.251-36.427l10.107 0.096c13.089 0.261 24.783 8.064 29.831 19.901 46.884 110.057 30.625 263.584-40.499 382.068-61.216 101.958-156.158 165.618-267.888 179.706-3.136 0.85-6.374 1.366-9.743 1.366v0zM477.7 711.819h92.934c0.692-0.137 1.412-0.227 2.144-0.323 119.46-13.033 187.974-88.188 224.418-148.887 55.794-93.054 72.711-214.652 43.901-304.167-60.127 1.917-115.229 16.373-163.956 43.079-7.963 4.339-17.382 5.251-25.997 2.655-8.66-2.655-15.834-8.717-19.826-16.719-33.494-67.216-69.41-116.675-109.251-150.38-39.869 33.636-76.574 83.453-109.348 148.463-3.993 7.906-11.065 13.872-19.651 16.526-8.592 2.688-17.842 1.787-25.77-2.428-47.701-25.441-101.516-39.28-160.027-41.163-28.804 89.52-11.892 211.114 43.901 304.133 36.444 60.7 104.918 135.827 224.35 148.887 0.723 0.096 1.45 0.187 2.176 0.323v0zM523.921 969.766c-18.238 0-33.035-14.49-33.035-32.412v-193.13c0-17.922 14.797-32.405 33.035-32.405 18.233 0 33.035 14.484 33.035 32.405v193.13c-0.029 17.922-14.802 32.412-33.035 32.412v0zM523.921 969.766z" p-id="4621" fill="#707070"></path></svg>
          <div class="show">
            <div class="num">
              <strong>1个</strong>
            </div>
            <div class="title">
              待举办活动数量
            </div>
          </div>
        </div>
        <div class="time">
          <small>下一个举办活动：暴揍甲方</small>
        </div>
      </div>
    </div>
    <!-- 社团图标 -->
    <div class="chart box_shadow">
      <div class="top">
        <div class="title">
          <i class="el-icon-s-data"></i>
          数据展示
        </div>
        <div class="btn">
          <el-switch v-model="value" active-color="#ffffff" inactive-color="#ffffff" active-text="社团活跃度"
            inactive-text="个人活跃度">
          </el-switch>
        </div>
      </div>
      <!-- 图表展示 -->
      <div class="chart_show">
        <div :class="{transform_x : value}" id="personal" style="width: 100%;height:100%"></div>
        <div :class="{transform_x : value}" id="club" style="width: 100%;height: 100%;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'


  export default {
    name: 'Dashboard',
    data() {
      return {
        value: false
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    mounted() {
      // 1. 基于准备好的dom，初始化echarts实例
      var personal = this.$echarts.init(document.getElementById('personal'))
      var club = this.$echarts.init(document.getElementById('club'))
      // 2. 发起请求，获取数据
      // const { data: res } = this.$http.get('reports/type/1')
      // if (res.meta.status !== 200) {
      //    return this.$message.error('获取折线图数据失败！')
      // }
      // 3. 使用刚指定的配置项和数据，显示图表

      var option = {
        title: {
          text: "ECharts 入门示例",
        },
        color: '#73b7ff',
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "Easy"],
        },
        yAxis: {
          // type: 'category',

        },
        series: [{
          name: "销量",
          type: "line",
          barWidth: 20,
          data: [5, 20, 36, 10, 10, 20, 100],
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'right', //在上方显示
                textStyle: { //数值样式
                  color: 'black',
                  fontSize: 16
                }
              }
            }
          }
        }, ],
      };

      personal.setOption(option)
      club.setOption(option)
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }

    // &-text {
    //   font-size: 30px;
    //   line-height: 46px;
    // }

  }
</style>

<style type="text/css" scoped="scoped">
  /* 社团信息 */
  .club_mes {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  /* 社团简介 */
  .club_mes .intro {
    flex: 1;
    margin-right: 2rem;
    padding: 1rem;
    display: flex;
  }

  .club_mes .intro .left {
    text-align: center;
  }

  .club_mes .intro .left .logo {
    width: 6rem;
    height: 6rem;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
  }

  .club_mes .intro .left .logo img {
    width: 100%;
    height: 100%;
  }

  .club_mes .intro .right {
    flex: 1;
    margin-left: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .club_mes .intro .right .name {
    padding: 0.5rem 0;
    font-size: 1.5rem;
  }

  .club_mes .intro .right .intro_content {
    flex: 1;
    overflow: hidden;
  }

  .club_mes .intro .right .other_mes {
    display: flex;
    justify-content: space-around;
  }

  /* 社团邮件 */
  .club_mes .email_box {
    width: 40%;
    height: 100%;
    height: 18rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .club_mes .email_box .title {
    width: 100%;
    padding: 1rem;
    font-size: 1.125rem;
    color: #000000dd;
    background-color: #b2d8f5;
  }

  .club_mes .email_box .emails {
    flex: 1;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
  }

  .club_mes .email_box .emails .email {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }

  .club_mes .email_box .emails .email>div {
    padding: 0 0.5rem;
    line-height: 2;
    cursor: default;
  }

  .club_mes .email_box .emails .email .email_title {
    flex: 1;
    padding: 0 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    transition: all 300ms;
    will-change: all;
  }

  .club_mes .email_box .emails .email .email_title:hover {
    transform: scale(1.048);
  }

  /* 社团数据 */
  .data {
    width: 100%;
    height: 10rem;
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
  }

  .data>div {
    width: 30%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .data .show_data {
    flex: 1;
    padding-left: 2rem;
    color: #666;
    display: flex;
    align-items: center;
  }

  .data .show_data .show {
    flex: 1;
    margin-left: 2rem;
  }

  .data .show_data .show .num {
    padding: 0.5rem;
    align-items: center;
    font-size: 2rem;
    color: #13487e;
  }

  .data .show_data .show .title {
    color: #666;
  }

  .data .time {
    padding-left: 2rem;
    color: #999;
  }

  /* 社团图标 */
  .chart {
    width: 100%;
    height: 30rem;
    margin-top: 1.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .chart .top {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b2d8f5;
  }

  .chart .top .title {
    color: #2b2b2b;
  }

  .chart .top .btn {
    margin-right: 2rem;
    display: flex;
  }

  >>>.el-switch__label {
    position: absolute;
    color: #000000;
  }

  /*打开时文字位置设置*/
  >>>.el-switch__label--right {
    z-index: 1;
    line-height: 1.6;
    right: 0.75rem;
  }

  /*关闭时文字位置设置*/
  >>>.el-switch__label--left {
    z-index: 1;
    line-height: 1.6;
    left: 0.75rem;
  }

  /*显示文字*/
  >>>.el-switch__label.is-active {
    display: block;
    color: #FFFFFF;
  }

  >>>.el-switch .el-switch__core,
  .el-switch .el-switch__label {
    width: 12rem !important;
    height: 1.5rem;
    border-radius: 0.1875rem;
  }

  >>>.el-switch__core:after {
    width: 6rem;
    height: calc(100% - 1px);
    border-radius: 0.1875rem;
    background-color: #36b3f2;
  }

  >>>.el-switch.is-checked .el-switch__core::after {
    left: 6rem;
    margin-left: -0.125rem;
  }

  .chart .chart_show {
    flex: 1;
    width: 200%;
    overflow: hidden;
    display: flex;
  }

  .chart .chart_show>div {
    width: 100%;
    padding: 1rem;
    transition: all .3s;
  }

  .chart .chart_show .transform_x {
    transform: translateX(-100%);
    transition: all .3s;
  }
</style>
