<template>
  <div class="dashboard-container">
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
          <svg t="1638169446888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="8831" width="48" height="48">
            <path
              d="M472.192 145.92v406.976l289.024 287.552a407.616 407.616 0 0 1-270.336 119.104L472.192 960C246.784 960 64 777.664 64 552.896c0-219.968 174.912-399.04 393.6-406.72l14.592-0.256zM408.128 215.872l-3.648 0.64C246.784 247.872 128 386.56 128 552.96 128 742.336 282.112 896 472.192 896a343.616 343.616 0 0 0 191.616-57.984l2.432-1.792-258.048-256.768-0.064-363.584z m551.68 335.488c0 105.088-40 200.96-105.664 273.152l-12.608 13.248-290.176-286.4h408.448z m-70.08 64h-182.4l129.472 127.808 1.728-2.24a339.712 339.712 0 0 0 50.624-122.176l0.576-3.392zM528.448 64c233.216 0 423.296 184.448 431.296 415.104l0.256 15.104H528.448V64z m64 69.568v296.64h297.856l-0.768-4.736A367.36 367.36 0 0 0 597.504 134.4l-5.056-0.896z"
              p-id="8832" fill="#707070"></path>
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
          <svg t="1638169321449" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4620" width="48" height="48">
            <path
              d="M413.217 941.535c-9.091 0-18.131-3.635-24.682-10.82-85.925-94.41-224.906-95.323-227.775-95.323h-0.204c-18.131 0-32.933-14.353-33.063-32.15-0.142-17.887 14.467-32.467 32.666-32.666 6.868-0.357 171.028-0.193 277.666 116.971 12.165 13.345 10.974 33.828-2.637 45.761-6.277 5.507-14.144 8.229-21.97 8.229v0zM634.755 941.472c-8.025 0-16.090-2.852-22.459-8.655-13.39-12.153-14.212-32.673-1.792-45.795 110.436-116.997 271.262-116.867 277.602-116.607 18.273 0.193 32.906 14.842 32.706 32.735-0.198 17.791-14.932 32.082-33.035 32.082h-0.261c-2.746 0-138.917 0.879-228.546 95.838-6.477 6.931-15.364 10.401-24.217 10.401v0zM576.516 776.636h-104.691c-3.334 0-6.573-0.487-9.652-1.429-111.758-14.064-206.735-77.685-267.95-179.7-71.060-118.49-87.349-272.017-40.47-382.045 5.053-11.83 16.748-19.639 29.837-19.901l9.941-0.096c62.929 0 121.706 11.666 175.191 34.742 38.65-69.319 82.784-121.921 131.449-156.663 2.575-2.206 5.513-4.055 8.785-5.417v0c10.208-4.339 22.073-3.403 31.413 2.563 1.622 1.038 3.141 2.206 4.531 3.5 48.79 35.127 91.705 86.953 130.559 157.735 54.541-24.176 114.667-36.427 179.251-36.427l10.107 0.096c13.089 0.261 24.783 8.064 29.831 19.901 46.884 110.057 30.625 263.584-40.499 382.068-61.216 101.958-156.158 165.618-267.888 179.706-3.136 0.85-6.374 1.366-9.743 1.366v0zM477.7 711.819h92.934c0.692-0.137 1.412-0.227 2.144-0.323 119.46-13.033 187.974-88.188 224.418-148.887 55.794-93.054 72.711-214.652 43.901-304.167-60.127 1.917-115.229 16.373-163.956 43.079-7.963 4.339-17.382 5.251-25.997 2.655-8.66-2.655-15.834-8.717-19.826-16.719-33.494-67.216-69.41-116.675-109.251-150.38-39.869 33.636-76.574 83.453-109.348 148.463-3.993 7.906-11.065 13.872-19.651 16.526-8.592 2.688-17.842 1.787-25.77-2.428-47.701-25.441-101.516-39.28-160.027-41.163-28.804 89.52-11.892 211.114 43.901 304.133 36.444 60.7 104.918 135.827 224.35 148.887 0.723 0.096 1.45 0.187 2.176 0.323v0zM523.921 969.766c-18.238 0-33.035-14.49-33.035-32.412v-193.13c0-17.922 14.797-32.405 33.035-32.405 18.233 0 33.035 14.484 33.035 32.405v193.13c-0.029 17.922-14.802 32.412-33.035 32.412v0zM523.921 969.766z"
              p-id="4621" fill="#707070"></path>
          </svg>
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
        'name',
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

      var personal_option = {
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
          type: "bar",
          barWidth: 20,
          data: [5, 20, 36, 10, 10, 20, 100],
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: 'black',
                  fontSize: 16
                }
              }
            }
          }
        }, ],
      };

      personal.setOption(personal_option)

      var club_option = {
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
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: 'black',
                  fontSize: 16
                }
              }
            }
          }
        }, ],
      };
      club.setOption(club_option)
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
  }
</style>

<style type="text/css" scoped="scoped">
  /* 社团信息 */
  .club_mes {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
