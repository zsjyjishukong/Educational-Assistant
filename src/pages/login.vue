<template>
  <div id="login-page" style="height: 100%;">
    <yd-layout>
      <div style="height: 15%;">
        <span id="title">
          <span id="welcome"></span>
          欢迎使用JY教务助手
          <span id="beta">beta</span>
        </span>
      </div>
      <yd-cell-group style="width: 95%; margin: auto">
        <yd-cell-item>
          <span slot="left">学号：</span>
          <yd-input slot="right" ref="studentID" v-model="studentID" regex="20\d{9}" placeholder="请输入您的学号"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">密码：</span>
          <yd-input slot="right" type="password" v-model="password" placeholder="请输入教务系统密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">手机号码：</span>
          <span slot="left" class="phone">{{phone === '' ? '微信授权手机号码' : phone}}</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left"><yd-switch v-model="isAgree" disabled></yd-switch></span>
          <span slot="left" class="agree-father">同意<span @click="showAgree" class="agree">服务协议</span></span>
        </yd-cell-item>
      </yd-cell-group>
      <yd-button size="large" type="primary" shape="circle" id="submit" @click.native="bind">开始绑定</yd-button>
      <yd-popup v-model="agreeShow" position="center" width="90%" id="agree-pop">
        <div style="background-color:#fff; height: 5rem">
          <div style="background: #fff; padding: 20px;">
          一、特别提示
          萌小助所提供的各项服务的所有权和运作权，均归北京口皿口科技有限公司（以下简称“口皿口”）所有。口皿口在此特别提醒您（以下简称“用户”或“您”）在使用口皿口功能之前，请认真阅读本《用户使用协议》（以下简称“协议”），确保您充分理解本协议中各条款。除非您接受本协议所有条款，否则您无权使用本协议所涉服务及功能。您的绑定、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。如果您对本协议的条款有疑问，请通过口皿口客服渠道进行咨询，口皿口客服将向您解释条款内容。
          二、服务内容
          口皿口仅为用户提供信息分享、传送及获取的平台，用户理解并同意遵守口皿口使用协议，需确保提供的账号或资料的真实性。如果用户提供的资料不合法、不真实、未经授权使用他人账户的行为，用户需承担因此引起的相应责任及后果。如用户发现任何人违反本协议约定或以其他不当的方式使用本服务，请立即向口皿口举报或投诉，口皿口将依本协议约定进行处理。遵循以上准则并在此授权口皿口，将您的信息与所属学校进行绑定，口皿口将会为您提供课程信息、成绩信息、图书馆信息等网络服务功能。
          如您开通账户绑定功能后，不愿继续使用的，可随时通过相关途径关闭此功能，口皿口将不再将您的信息做任何展示。您理解并确认，因口皿口业务发展或与单位的合作关系中止或终止等原因，可能导致口皿口无法继续向您提供账户绑定服务，对此口皿口不承担违约责任。
          三、用户个人隐私信息保护
          1、用户在使用本服务的过程中，可能需要填写或提交一些必要的信息，如学号密码。
          2、尊重用户个人隐私信息的私有性是口皿口的一贯制度，口皿口将采取技术措施和其他必要措施，确保用户个人隐私信息安全，防止在本服务中收集的用户个人隐私信息泄露、毁损或丢失。在发生前述情形或者口皿口发现存在发生前述情形的可能时，将及时采取补救措施。
          3、口皿口未经用户同意不向任何第三方公开、透露用户个人隐私信息。但以下特定情形除外：
          (1)口皿口根据法律法规规定或有权机关的指示提供用户的个人隐私信息；
          (2)由于用户将其用户密码告知他人或与他人共享注册帐户与密码，由此导致的任何个人信息的泄漏，或其他非因口皿口原因导致的个人隐私信息的泄露；
          (3)用户自行向第三方公开其个人隐私信息；
          (4)用户与口皿口及合作单位之间就用户个人隐私信息的使用公开达成约定，口皿口因此向合作单位公开用户个人隐私信息；
          (5)任何由于黑客攻击、电脑病毒侵入及其他不可抗力事件导致用户个人隐私信息的泄露。
          5、用户同意口皿口可在以下事项中使用用户的个人隐私信息：
          (1)口皿口内部专业人员进行审计、数据分析等，以改进口皿口的产品、服务和与用户之间的沟通；
          (2)依本协议约定，口皿口管理、审查用户信息及进行处理措施；
          (3)适用法律法规规定的其他事项。
          除上述事项外，如未取得用户事先同意，口皿口不会将学生用户个人隐私信息使用于任何其他用途。
          四、使用规则
          1、用户在本服务中或通过本服务所传送、发布的任何内容并不反映或代表，也不得被视为反映或代表口皿口的观点、立场或政策，口皿口对此不承担任何责任。
          2、用户不得利用口皿口服务进行如下行为：
          (1)提交、发布虚假信息，或盗用他人头像或资料，冒充、利用他人名义的；
          (2)强制、诱导其他用户关注、点击链接页面或分享信息的；
          (3)虚构事实、隐瞒真相以误导、欺骗他人的；
          (4)利用技术手段批量建立虚假账号的；
          (5)利用口皿口账号或本服务从事任何违法犯罪活动的；
          (6)制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；
          (7)其他违反法律法规规定、侵犯其他用户合法权益、干扰口皿口正常运营或口皿口未明示授权的行为。
          3、用户须对利用口皿口服务传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播的信息相关的任何法律责任由用户自行承担，与口皿口无关。如因此给口皿口或第三方造成损害的，用户应当依法予以赔偿。
          4、口皿口提供的服务中可能包括广告，用户同意在使用过程中显示口皿口和第三方供应商、合作伙伴提供的广告。除法律法规明确规定外，用户应自行对依该广告信息进行的交易负责，对用户因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，口皿口不承担任何责任。
          五、知识产权声明
          1、口皿口在本服务中提供的内容（包括功能、接口、官网等）的知识产权均归口皿口所有，但用户在使用本服务前对自己发布的内容已合法取得知识产权的除外。
          2、除另有特别声明外，口皿口提供本服务时所依托软件的著作权、专利权及其他知识产权均归口皿口所有。
          3、口皿口在本服务中所涉及的图形、文字或其组成，以及其他口皿口、
          标志及产品、服务名称（以下统称“口皿口标识”），其著作权或商标权归口皿口所有。
          六、法律责任
          1、如果口皿口发现或收到他人举报或投诉用户违反本协议约定的，口皿口有权不经通知随时对相关内容，并视情节轻重对违规账号处以包括但不限于警告、账号封禁、设备封禁、功能封禁的处罚，且通知用户处理结果。
          2、合作者理解并同意，口皿口有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应承担由此而产生的一切法律责任。
          3、合作者理解并同意，因用户违反本协议约定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户应当赔偿口皿口与合作公司、关联公司，并使之免受损害。
          七、不可抗力及其他免责事由
          1、用户理解并确认，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，口皿口将努力在第一时间与相关单位配合，及时进行修复，但是由此给用户或第三方造成的损失，口皿口及合作单位在法律允许的范围内免责。
          2、本服务同大多数互联网服务一样，受包括但不限于用户原因、网络服务质量、社会环境等因素的差异影响，可能受到各种安全问题的侵扰，如他人利用用户的资料，造成现实生活中的骚扰；用户下载安装的其它软件或访问的其他网站中含有“特洛伊木马”等病毒，威胁到用户的计算机信息和数据的安全，继而影响本服务的正常使用等等。用户应加强信息安全及使用者资料的保护意识，要注意加强密码保护，以免遭致损失和骚扰。
          3、用户理解并确认，本服务存在因不可抗力、计算机病毒或黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何技术、互联网络、通信线路原因等造成的服务中断或不能满足用户要求的风险，因此导致的用户或第三方任何损失，口皿口不承担任何责任。4、因合作商泄露散播学生信息，责任归合作方所有。
          5、口皿口依据法律法规、本协议约定获得处理违法违规或违约内容的权利，该权利不构成口皿口的义务或承诺，口皿口不能保证及时发现违法违规或违约行为或进行相应处理。
          八、其他
          口皿口郑重提醒用户注意本协议中免除口皿口责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险。未成年人应在法定监护人的陪同下阅读本协议。
            <div style="text-align: center; background: #fff">
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
import {login} from '../api/login'

export default {
  name: 'login',
  data () {
    return {
      studentID: '',
      password: '',
      isAgree: false,
      agreeShow: false,
      studentIDVerify: '',
      phone: ''
    }
  },
  methods: {
    async login (studentID, password) {
      let res = await login(studentID, password)
      return res
    },
    showAgree: function () {
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
        if (this.$refs.studentID.valid) {
          this.$dialog.toast({
            mes: '开始绑定',
            timeout: 1500,
            icon: 'success'
          })
        } else {
          this.$dialog.toast({
            mes: '学号格式错误',
            timeout: 1500,
            icon: 'error'
          })
        }
      } else {
        this.$dialog.toast({
          mes: '您需要同意服务协议才可继续',
          timeout: 1500,
          icon: 'error'
        })
      }
    }
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
    background-image: url("/static/images/welcome.png");
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
    color: #aaa;
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
