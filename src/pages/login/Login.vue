<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a
            href="javascript:;"
            :class="{ on: loginWay }"
            @click="loginWay = true"
            >短信登录</a
          >
          <a
            href="javascript:;"
            :class="{ on: !loginWay }"
            @click="loginWay = false"
            >密码登录</a
          >
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{ on: loginWay }">
            <section class="login_message">
              <input
                type="tel"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
              />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{ right_phone: rightPhone }"
                @click.prevent="getCode"
              >
                {{ computTime > 0 ? `已发送(${computTime})` : "获取验证码" }}
              </button>
            </section>
            <section class="login_verification">
              <input
                type="tel"
                maxlength="8"
                placeholder="验证码"
                v-model="code"
              />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{ on: !loginWay }">
            <section>
              <section class="login_message">
                <input
                  type="tel"
                  maxlength="11"
                  placeholder="手机/邮箱/用户名"
                  v-model="name"
                />
              </section>
              <section class="login_verification">
                <input
                  type="text"
                  maxlength="8"
                  placeholder="密码"
                  v-if="showPwd"
                  v-model="pwd"
                />
                <input
                  type="password"
                  placeholder="密码"
                  v-else
                  v-model="pwd"
                />
                <div
                  class="switch_button off"
                  :class="showPwd ? 'on' : 'off'"
                  @click="showPwd = !showPwd"
                >
                  <div class="switch_circle" :class="{ right: showPwd }"></div>
                  <span class="switch_text">{{ showPwd ? "abc" : "..." }}</span>
                </div>
              </section>
              <section class="login_message">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="验证码"
                  v-model="captcha"
                />
                <img
                  class="get_verification"
                  src="http://localhost:4000/captcha"
                  alt="captcha"
                  @click="getCaptcha"
                  ref="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2">></i>
      </span>
    </div>
    <AlterTip
      :alertText="alterText"
      v-show="showAlter"
      @closeTip="closeTip"
    ></AlterTip>
  </div>
</template>
<script>
import AlterTip from "../../components/AlterTip/AlterTip.vue";
import {
  reqPwdLogin,
  reqSendCode,
  reqSmsLogin
} from "../../api/index";
export default {
  components: {
    AlterTip,
  },
  data() {
    return {
      loginWay: true, //true短信登录。false密码登录
      phone: "", //手机号
      computTime: 0, //倒计时时间
      showPwd: false,
      pwd: "",
      code: "", //手机验证码
      captcha: "", //图形验证码
      name: "", //登录名
      alterText: "", //提示文本
      showAlter: false, //是否显示弹窗
    };
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone)
    },
  },
  methods: {
    //异步
    async getCode() {
      //如果没有启动倒计时
      if (!this.computTime) {
        //启动倒计时
        this.computTime = 60;
        this.intervalId = setInterval(() => {
          this.computTime--;
          if (this.computTime <= 0) {
            clearInterval(this.intervalId);
          }
        }, 1000);
        //发送ajax请求
        const result = await reqSendCode(this.phone);
        if (result.code === 1) {
          //显示提示
          this.showText(result.msg);
          //停止倒计时
          if (this.computTime) {
            this.computTime = 0;
            clearInterval(thisi.ntervalId);
          }
        }
      }
    },
    //获取新的验证码
    getCaptcha() {
      //每次指定的src都不一样
      this.$refs.captcha.src = "http://localhost:4000/captcha?time=" + Date.now();
    },
    showText(text) {
      this.alterText = text;
    },
    closeTip() {
      this.showAlter = false;
      this.showText("");
    },
    //异步登录注册
    async login() {
      let result = '';
      //前台表单验证
      if (this.loginWay) {
        const { rightPhone, phone, code } = this;
        if (!rightPhone) {
          this.showAlter = true;
          this.showText("手机号不能为空");
          return;
        } else if (!/^\d{6}$/.test(code)) {
          //验证必须是6位数字
          this.showAlter = true;
          this.showText("验证码不能为空！");
          return;
        }
        //发送ajax请求
        result = await reqSmsLogin({phone, code});
        console.log(result,'result')
      } else {
        //密码登录
        const { name, pwd, captcha } = this;
        if (!this.name) {
          //用户必须指定
          this.showAlter = true;
          this.showText("用户信息不能为空!");
        } else if (!this.pwd) {
          //验证密码必输
          this.showAlter = true;
          this.showText("密码输入不能为空!");
        } else if (!this.captcha) {
          //验证验证码必输
          this.showAlter = true;
          this.showText("验证码输入不能为空 !");
        }
        //发送ajax请求进行密码登录
        result = await reqPwdLogin({ name, pwd, captcha });
        console.log(result,'result')
      }
      if(this.computTime){
        this.computTime = 0
        clearInterval(this.intervalId)
        this.intervalId = undefined
      }
      //根据结果数据
      if (result.code === 0) {
        const user = result.data;
        //将user存到state中
        this.$store.dispatch('recordUserInfo',user)
        //跳转到个人页面
        this.$router.replace('/profile')
      } else {
        const msg = result.msg;
        //显示错误提示
        this.showText(msg);
        //显示新的验证码
        this.getCaptcha();
      }
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        >a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: #02a774;
            font-weight: 700;
            border-bottom: 2px solid #02a774;
          }
        }
      }
    }

    .login_content {
      >form {
        >div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #02a774;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

              &.right_phone {
                color: black;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: #fff;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: #02a774;
              }

              >.switch_circle {
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;

                &.right {
                  transform: translateX(30px);
                }
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            >a {
              color: #02a774;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: #4cd96f;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      >.iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>