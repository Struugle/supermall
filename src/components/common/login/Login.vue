<template>
    <div class="login" v-show="isShow" @click.self="isShow = false">
        <div class="box">
            <div class="header">
                <span @click="login()" :class="{active:isActive === true}">登录</span>
                <span @click="register()" :class="{active:isActive === false}">注册</span>
            </div>
                <form action="#" method="get" class="form">
                <input type="text" placeholder="请输入用户名"/>
                <input type="password" placeholder="请输入密码"/>
                <button type="submit">{{buttonText}}</button>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        isActive: true,
        nameText: '请输入用户名',
        passwordText: '请输入密码',
        buttonText: '登录',
        isShow: false
      }
    },
    methods: {
      login() {
        this.buttonText = '登录'
        this.isActive = true
      },
      register() {
        this.buttonText = '注册'
        this.isActive = false
      },
    }
  }
</script>

<style scoped>
    .login {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.4);
        z-index: 999;
    }
    .box {
        width: 190px;
        height: 150px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 15px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #00f;
        padding-bottom: 5px;
    }
    form input:first-child {
        margin-top: 6px;
    }
    form input {
        width: 100%;
        margin-bottom: 6px;
    }
    form button {
        width: 100%;
        background: #00f;
        border: none;
        padding: 3px 0;
        color: #fff;
    }
    .active {
        color: #00f;
    }
</style>