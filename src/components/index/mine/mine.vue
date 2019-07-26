<template>
  <div id="mine-body">
    <div id="user-detail">
      <div class="user-detail-content">
        <div class="header-pic-father">
          <img class="header-pic" src="./static/head.jpg">
        </div>
        <div class="user-info">
          <div>姓名：齐昊宇</div>
          <div>学院：信息管理系</div>
          <div>专业：信息资源管理</div>
        </div>
      </div>
    </div>
    <div class="user-selects">
      <div class="user-select" @click="privatyShow = true">隐私设置 <span class="right-arrow"></span></div>
      <div class="user-select" @click="rewardShow = true">打赏我们 <span class="right-arrow"></span></div>
      <div class="user-select" @click="aboutShow = true">关于我们 <span class="right-arrow"></span></div>
      <yd-popup v-model="privatyShow" position="center" width="90%">
        <div style="background-color:#fff; padding: 2% 5%;">
          <p>
            隐私设置
            <yd-button @click.native="privatyShow = false">Close Center Popup</yd-button>
          </p>
        </div>
      </yd-popup>
      <yd-popup v-model="rewardShow" position="center" width="50%">
        <div style="background-color:#fff; padding: 2% 5%; text-align: center;" class="reward">
          <p>
            微信扫描下方二维码，支持我们
          </p>
          <p>
            <img src="./static/shoukuanma.png" alt="" height="200">
          </p>
          <p>
            <yd-button @click.native="rewardShow = false">Close Center Popup</yd-button>
          </p>
        </div>
      </yd-popup>
      <yd-popup v-model="aboutShow" position="center" width="50%">
        <div style="background-color:#fff; padding: 2% 5%;">
          <p>
            我们是来自于河北建筑工程学院的在校同学和校友，为各位在校同学服务。我们的资金来源于广告收入以及用户捐款，您的支持是我们向前的动力。
          </p>
          <p>
            <yd-button @click.native="privatyShow = false">Close Center Popup</yd-button>
          </p>
        </div>
      </yd-popup>
    </div>
    <div class="unbind">
      <yd-button size="large" type="danger">解除绑定</yd-button>
    </div>
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a @click="openPage('http://www.ydcss.com')"  >
          <img src="./static/slider1.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a @click="uploadNotify">
          <img src="./static/slider2.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a @click="openPage('http://pz.wendu.com/')">
          <img src="./static/slider3.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      privatyShow: false,
      rewardShow: false,
      aboutShow: false
    }
  },
  methods: {
    popout: function (title, msg) {
      this.$dialog.confirm({
        title: title,
        mes: msg,
        opts: [
          {
            txt: '确定',
            color: true
          }
        ]
      })
    },
    uploadNotify: function () {
      this.popout('v0.0.1更新公告', '<p>【新增】成绩查询、课表查询</p><p>【解决】密码含有特殊字符无法登陆的bug</p>')
    },
    openPage: function (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
#user-detail{
  height: 1.9rem;
}
.notify{
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url("/static/images/notify.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
  .user-detail-content{
    width: 70%;
    padding-top: 0.3rem;
    margin: 0 auto;
  }
  .user-detail-content .header-pic {
    border: 1px solid #07B3F9;
    border-radius: 30px;
    width: 60px;
    float: left;
    display: inline;
  }
  .header-pic-father{
    float: left;
    display: inline-block;
    width: 30%;
  }
  .user-info{
    float: left;
    display: inline;
    width: 60%;
    padding-left: 15%;
    font-size: 12px;
    line-height: 20px;
    color: #44C125;
  }
  .user-select{
    padding: 18px 30px;
    border-top: 0.5px solid #ccc;
    background: #fff;
    font-size: 14px;
  }
  .user-select:last-child{
    border-bottom: 0.5px solid #ccc;
  }
  .user-selects{
    margin-bottom: 20px;
  }
  .right-arrow{
    float: right;
    height: 0.45rem;
    width: 0.45rem;
    background-image: url("./static/right-arrow.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .unbind{
    margin: 0 auto 0.5rem auto;
    width: 70%;

  }
  .reward>p{
    margin-bottom: 10px;
  }
</style>
