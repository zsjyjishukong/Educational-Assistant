<template>
  <div id="login-page" style="height: 100%;">
    <yd-layout>
      <div style="height: 100px;">
        <span id="title">
          <span id="welcome"></span>
          欢迎使用JY教务助手
          <span id="beta">beta</span>
        </span>
      </div>
      <yd-cell-group style="width: 95%; margin: auto">
        <yd-cell-item>
          <span slot="left">学号：</span>
          <yd-input slot="right" ref="studentID" v-model="studentID" regex="^20\d{9}$" placeholder="请输入您的学号"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">密码：</span>
          <yd-input slot="right" type="password" v-model="password" placeholder="请输入教务系统密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left"><yd-switch v-model="isAgree"></yd-switch></span>
          <span slot="left" class="agree-father">阅读并同意<span @click="showAgree" class="agree">服务协议（点击并仔细阅读）</span></span>
        </yd-cell-item>
      </yd-cell-group>
      <yd-button size="large" type="primary" shape="circle" id="submit" @click.native="bind">开始绑定</yd-button>
      <yd-popup v-model="agreeShow" position="center" width="90%" id="agree-pop">
        <div style="background-color:#fff; height: 8rem">
          <div style="background: #fff; padding: 20px;">
            <p>一、特别提示</p>
            <p>JY教务助手所提供的各项服务的所有权和运作权，均归JY教务助手开发组（以下简称“开发组”或“我们”）所有。开发组在此特别提醒您（以下简称“用户”或“您”）在使用系统功能之前，请认真阅读本《用户使用协议》（以下简称“协议”），确保您充分理解本协议中各条款。除非您接受本协议所有条款，否则您无权使用本协议所涉服务及功能。您的绑定、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。如果您对本协议的条款有疑问，请通过我们设置的反馈渠道进行咨询。</p>
            <p>二、服务内容</p>
            <p>我们仅为用户提供信息分享、传送及获取的平台，用户理解并同意遵守使用协议，需确保提供的账号或资料的真实性。如果用户提供的资料不合法、不真实、未经授权使用他人账户的行为，用户需承担因此引起的相应责任及后果。如用户发现任何人违反本协议约定或以其他不当的方式使用本服务，请立即向我们联系，我们将依本协议约定进行处理。遵循以上准则并在此授权沃恩，将您的信息与所属学校进行绑定，我们将会为您提供课程信息、成绩信息、学院班级信息等网络服务功能。
              如您开通账户绑定功能后，不愿继续使用的，可随时通过相关途径关闭此功能，我们将不再将您的信息做任何展示。您理解并确认，因我们业务发展或与单位的合作关系中止或终止等原因，可能导致我们无法继续向您提供账户绑定服务，对此我们不承担违约责任。
            </p>
            <p>三、用户个人隐私信息保护</p>
            <p>1、用户在使用本服务的过程中，可能需要填写或提交一些必要的信息，如学号密码。</p>
            <p>2、尊重用户个人隐私信息的私有性是我们的一贯制度，我们将采取技术措施和其他必要措施，确保用户个人隐私信息安全，防止在本服务中收集的用户个人隐私信息泄露、毁损或丢失。在发生前述情形或者我们发现存在发生前述情形的可能时，将及时采取补救措施。</p>
            <p>3、我们未经用户同意不向任何第三方公开、透露用户个人隐私信息。但以下特定情形除外：</p>
            <p>(1)根据法律法规规定或有权机关的指示提供用户的个人隐私信息；</p>
            <p>(2)由于用户将其用户密码告知他人或与他人共享注册帐户与密码，由此导致的任何个人信息的泄漏，或其他非因开发组原因导致的个人隐私信息的泄露；</p>
            <p>(3)用户自行向第三方公开其个人隐私信息；</p>
            <p>(4)任何由于黑客攻击、电脑病毒侵入及其他不可抗力事件导致用户个人隐私信息的泄露。</p>
            <p>5、用户同意开发组可在以下事项中使用用户的个人隐私信息：</p>
            <p>(1)开发组内部专业人员进行审计、数据分析等，以改进我们的产品、服务和与用户之间的沟通；</p>
            <p>(2)依本协议约定，开发组管理、审查用户信息及进行处理措施；</p>
            <p>(3)适用法律法规规定的其他事项。</p>
            <p>除上述事项外，如未取得用户事先同意，我们不会将学生用户个人隐私信息使用于任何其他用途。</p>
            <p>四、使用规则</p>
            <p>1、用户在本服务中或通过本服务所传送、发布的任何内容并不反映或代表，也不得被视为反映或代表开发组的观点、立场或政策，我们对此不承担任何责任。</p>
            <p>2、用户不得利用我们的服务进行如下行为：</p>
            <p>(1)提交、发布虚假信息，或盗用他人头像或资料，冒充、利用他人名义的；</p>
            <p>(2)强制、诱导其他用户关注、点击链接页面或分享信息的；</p>
            <p>(3)虚构事实、隐瞒真相以误导、欺骗他人的；</p>
            <p>(4)利用技术手段批量建立虚假账号的；</p>
            <p>(5)利用账号或服务从事任何违法犯罪活动的；</p>
            <p>(6)制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；</p>
            <p>(7)其他违反法律法规规定、侵犯其他用户合法权益、干扰我们的正常运营或我们未明示授权的行为。</p>
            <p>3、用户须对利用我们的服务传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播的信息相关的任何法律责任由用户自行承担，与我们无关。如因此给我们或第三方造成损害的，用户应当依法予以赔偿。</p>
            <p>4、我们提供的服务中可能包括广告，用户同意在使用过程中显示我们和第三方供应商、合作伙伴提供的广告。除法律法规明确规定外，用户应自行对依该广告信息进行的交易负责，对用户因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，我们不承担任何责任。</p>
            <p>五、知识产权声明</p>
            <p>1、我们在本服务中提供的内容（包括功能、接口、官网等）的知识产权均归我们所有，但用户在使用本服务前对自己发布的内容已合法取得知识产权的除外。</p>
            <p>2、除另有特别声明外，我们提供本服务时所依托软件的著作权、专利权及其他知识产权均归我们所有。</p>
            <p>3、我们在本服务中所涉及的图形、文字或其组成，以及其他我们的标志及产品、服务名称，其著作权或商标权归我们所有。</p>
            <p>六、法律责任</p>
            <p>1、如果我们发现或收到他人举报或投诉用户违反本协议约定的，我们有权不经通知随时对相关内容，并视情节轻重对违规账号处以包括但不限于警告、账号封禁、设备封禁、功能封禁的处罚，且通知用户处理结果。</p>
            <p>2、合作者理解并同意，我们有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应承担由此而产生的一切法律责任。</p>
            <p>3、合作者理解并同意，因用户违反本协议约定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户应当赔偿我们与合作公司、关联公司，并使之免受损害。</p>
            <p>七、不可抗力及其他免责事由</p>
            <p>1、用户理解并确认，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，我们将努力在第一时间与相关单位配合，及时进行修复，但是由此给用户或第三方造成的损失，我们及合作单位在法律允许的范围内免责。</p>
            <p>2、本服务同大多数互联网服务一样，受包括但不限于用户原因、网络服务质量、社会环境等因素的差异影响，可能受到各种安全问题的侵扰，如他人利用用户的资料，造成现实生活中的骚扰；用户下载安装的其它软件或访问的其他网站中含有“特洛伊木马”等病毒，威胁到用户的计算机信息和数据的安全，继而影响本服务的正常使用等等。用户应加强信息安全及使用者资料的保护意识，要注意加强密码保护，以免遭致损失和骚扰。</p>
            <p>3、用户理解并确认，本服务存在因不可抗力、计算机病毒或黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何技术、互联网络、通信线路原因等造成的服务中断或不能满足用户要求的风险，因此导致的用户或第三方任何损失，我们不承担任何责任。</p>
            <p>4、因合作商泄露散播学生信息，责任归合作方所有。</p>
            <p>5、我们依据法律法规、本协议约定获得处理违法违规或违约内容的权利，该权利不构成我们的义务或承诺，我们不能保证及时发现违法违规或违约行为或进行相应处理。</p>
            <p>八、其他</p>
            <p>我们郑重提醒用户注意本协议中免除我们责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险。未成年人应在法定监护人的陪同下阅读本协议。</p>
            <div style="text-align: center; background: #fff; margin-top: 20px;">
              <yd-button @click.native="agreeOrNot('true')">同意协议</yd-button>
              <yd-button @click.native="agreeOrNot('false')" style="background: #EF4F4F">不同意协议</yd-button>
            </div>
          </div>
        </div>
      </yd-popup>
    </yd-layout>
  </div>
</template>

<script>
import {isBind, bind} from '../api/login'

export default {
  name: 'login',
  data () {
    return {
      studentID: '',
      password: '',
      isAgree: false,
      agreeShow: false,
      studentIDVerify: ''
    }
  },
  methods: {
    async toBind () {
      let res = await bind(this.studentID, this.password)
      if (res.code === 0) {
        this.$router.push('/index')
      } else {
        this.$dialog.toast({
          mes: res.msg,
          timeout: 1500,
          icon: 'error'
        })
      }
    },
    async isBinding () {
      let res = await isBind()
      if (res.code === 2) {
        // window.open('http://jws.qihaoyu.tech/api/set_code', '_self')
      } else {
        let isBinding = res.data.isBind
        if (isBinding) {
          this.$router.push('/index')
        } else {
          console.log(false)
        }
      }
    },
    showAgree: function () {
      this.$dialog.toast({
        mes: '请仔细阅读至底部',
        timeout: 2000
      })
      this.agreeShow = true
    },
    agreeOrNot: function (choose) {
      this.agreeShow = false
      if (choose === 'true') {
        this.isAgree = true
      } else {
        this.isAgree = false
      }
    },
    bind: function () {
      if (this.isAgree === true) {
        if (!this.studentID) {
          this.$dialog.toast({
            mes: '请输入学号',
            timeout: 1500,
            icon: 'error'
          })
          return false
        }
        if (!this.password) {
          this.$dialog.toast({
            mes: '请输入密码',
            timeout: 1500,
            icon: 'error'
          })
          return false
        }
        if (this.$refs.studentID.valid) {
          sessionStorage.setItem('token', '1')
          this.toBind()
        } else {
          this.$dialog.toast({
            mes: '学号格式错误',
            timeout: 1500,
            icon: 'error'
          })
          return false
        }
      } else {
        this.$dialog.toast({
          mes: '您需要同意服务协议才可继续',
          timeout: 1500,
          icon: 'error'
        })
        return false
      }
    },
    wechatLogin: function () {
      if (this.getCookie('token')) {
        this.isBinding()
      } else {
        // window.open('http://jws.qihaoyu.tech/api/set_code', '_self')
      }
      console.log(this.getCookie('token'))
    },
    getCookie: function (cname) {
      let name = cname + '='
      let ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim()
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    }
  },
  mounted () {
    sessionStorage.setItem('token', '1')
    this.wechatLogin()
  }
}
</script>

<style scoped>
  #title{
    display: inline-block;
    margin-top: 0.5rem;
    font-family: "Adobe 黑体 Std R";
    font-size: 0.5rem;
    padding-left: 0.2rem;
  }
  #welcome{
    height: 0.6rem;
    width: 0.6rem;
    position: relative;
    top: 0.1rem;
    display: inline-block;
    background-image: url("static/images/welcome.png");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  #submit{
    width: 70%;
    margin: 1rem auto;
  }
  #beta{
    font-family: "Adobe 黑体 Std R";
    font-size: 0.1rem;
    background: #999;
    padding: 2px 3px;
    color: #fff;
    border-radius: 3px;
  }
  .agree{
    color: #4395FF;
    text-decoration: #4395FF;
  }
  .agree-father{
    margin-left: 0.2rem;
  }
  #agree-pop{
    padding: 10px 10px;
  }
  .phone{
    color: #4395FF;
  }
</style>
