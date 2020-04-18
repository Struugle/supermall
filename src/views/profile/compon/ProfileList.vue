<template>
    <div class="list-div">
        <div class="list-item">
            <img src="~assets/img/profile/message.svg"/>
            <span>我的消息</span>
        </div>
        <div class="list-item">
            <img src="~assets/img/profile/pointer.svg"/>
            <span>积分商城</span>
        </div>
        <div class="border">
            <div class="list-item">
                <img src="~assets/img/profile/vip.svg"/>
                <span>会员卡</span>
            </div>
        </div>
        <div class="list-item" @click="itemClick">
            <img src="~assets/img/profile/shopping.svg"/>
            <span>我的收藏夹</span>
        </div>
        <div class="list-item">
            <img src="~assets/img/profile/cart.svg"/>
            <span>我的购物车</span>
        </div>

    </div>
</template>

<script>
  export default {
    name: "ProfileList",
    methods: {
      itemClick() {
        this.$toast2.show()
      }
    }
  }
</script>

<style scoped>
    .list-div {

    }
    .list-item {
        height: 40px;
        line-height: 40px;
        margin: 0 10px;
        border-bottom: 1px solid #eee;
        box-sizing: content-box;
    }
    .border {
        border-bottom: 10px solid #eee;
    }
    .list-item img {
        width: 23px;
        height: 23px;
        vertical-align: middle;
        display: inline-block;
        margin-right: 10px;
    }



</style>