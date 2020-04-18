<template>
    <div class="header" @click="itemClick">
        <div class="info-left">
            <img src="~assets/img/profile/avatar.svg"/>
        </div>
        <div class="info-center">
            <div class="login">登录/注册</div>
            <div class="phone">
                <img src="~assets/img/profile/phone.svg" alt="">
                <span>暂无绑定手机号</span>
            </div>
        </div>
        <div class="info-right">
            >
        </div>
    </div>
</template>

<script>
  export default {
    name: "ProfileInfo",
    methods: {
      itemClick() {

      }
    }
  }
</script>

<style scoped>
    .header {
        background: var(--color-high-text);
        height: 100px;
        display: flex;
        align-items: center;
        padding: 15px 10px;
        color: #fff;
    }
    .info-left {
        flex: 2;
    }
    .info-left img {
        width: 80px;
        height: 80px;
    }
    .info-center {
        flex: 4;
    }
    .info-center img {
        width: 22px;
        height: 22px;
        display: inline-block;
    }
    .info-center .phone {
        display: flex;
        align-items: center;
        margin-top: 5px;
    }
    .info-center .login {
        font-size: 18px;
    }
    .info-right {
        flex: 1;
        font-size: 50px;
    }
</style>