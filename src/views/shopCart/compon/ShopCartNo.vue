<template>
    <div class="no-tips">
        <div class="tips">
            <img src="~assets/img/tabbar/shopcart2.svg"/>
            <p class="tips-text">购物车为空，请添加商品</p>
            <p class="go-shopping" @click="goShopping">皮皮虾,我们走!</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ShopCartNo",
    methods: {
      goShopping() {
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped>
    .no-tips {
        margin: 0 auto;
        text-align: center;
        position: relative;
        height: calc(100% - 89px - 40px);
    }
    .no-tips .tips {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-80%);
    }
    .no-tips img {
        width: 150px;
        height: 150px;
    }
    .no-tips .tips-text{
        font-size: 12px;
        font-style: italic;
        color: #ecec;
    }
    .no-tips .go-shopping {
        font-size: 16px;
        font-style: italic;
        border-bottom: 1px solid #6ed86c;
        display: inline;
        color:#6ed86c;
    }
</style>