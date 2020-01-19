<template>
  <page-template title="我的" :actived="2">
    <div id="mine-body" slot="body">
      <div class="mine-index-page">
        <div id="user-detail">
          <div class="user-detail-content">
            <div class="header-pic-father">
              <img class="header-pic" :src=student.img>
            </div>
            <div class="user-info">
              <div>姓名：{{student.name}}</div>
              <div>学院：{{student.collage}}</div>
              <div>专业：{{student.major}}</div>
            </div>
          </div>
        </div>
        <div class="user-selects">
          <div class="user-select" @click="$router.push('./privacy')">隐私设置 <span class="right-arrow"></span></div>
          <div class="user-select" @click="$router.push('./reward')">打赏我们 <span class="right-arrow"></span></div>
          <div class="user-select" @click="$router.push('./about')">关于我们 <span class="right-arrow"></span></div>
          <div class="user-select" @click="$router.push('./calendar')">查看日历 <span class="right-arrow"></span></div>
        </div>
        <div class="unbind">
          <yd-button size="large" type="danger" @click.native="confirmUnbind">解除绑定</yd-button>
        </div>
        <yd-slider autoplay="3000">
          <yd-slider-item>
            <a @click="uploadNotify">
              <img src="./static/slider1.jpg">
            </a>
          </yd-slider-item>
          <yd-slider-item>
            <!--<a @click="#">-->
            <img src="./static/slider2.jpg">
            <!--</a>-->
          </yd-slider-item>
          <yd-slider-item>
            <!--<a @click="#">-->
            <img src="./static/slider3.jpg">
            <!--</a>-->
          </yd-slider-item>
        </yd-slider>
      </div>
    </div>
  </page-template>
</template>

<script>
import request from '../../../api/index'
import pageTemplate from '../../common/page-temlate'

export default {
  name: 'mine',
  props: {
    student: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  components: {
    pageTemplate
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
      this.popout('v0.0.1.0更新公告', '<p>【新增】2019-2020学年日历，让你掌握自己的假期</p>')
    },
    openPage: function (url) {
      window.open(url, '_blank')
    },
    confirmUnbind: function () {
      this.$dialog.confirm({
        title: '危险动作确认',
        mes: '确定要解除绑定吗？解绑后您将无法使用我们的服务！',
        opts: () => {
          this.unbind()
        }
      })
    },
    async unbind () {
      let res = await request.unbind()
      if (res.code === 0) {
        this.$dialog.toast({
          mes: '解绑成功，期待您的下次使用！',
          timeout: 1500,
          icon: 'success',
          callback: () => {
            this.$router.push('/')
          }
        })
      }
    }
  },
  mounted () {
    this.$emit('changeNavAndTab', {tabShow: true, showId: 2, title: '我的', leftShow: false, rightShow: false, leftLink: ''})
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
    border: 1px solid #44c125;
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
    padding-left: 10%;
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
