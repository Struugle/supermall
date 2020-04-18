<template>
    <shop-tab-bar>
        <div class="detail-item" slot="left">
            <div class="img"></div>
            <div>客服</div>
        </div>
        <div class="detail-item" slot="left">
            <div class="img"></div>
            <div>店铺</div>
        </div>
        <div class="detail-item" slot="left">
            <div class="img"></div>
            <div>收藏</div>
        </div>
        <div slot="right" class="add" @click="addCart">加入购物车</div>
        <div slot="right" class="shop" @click="shopClick">购买</div>
    </shop-tab-bar>
</template>

<script>
  import ShopTabBar from 'components/content/shopTabBar/ShopTabBar'
  export default {
    name: "DetailTabBar",
    components: {
      ShopTabBar
    },
    methods: {
      addCart() {
        this.$emit('addCart')
      },
      shopClick() {
        this.$Toast.show('尚未完成')
      }
    }
  }
</script>

<style scoped>
    .detail-item .img {
        width: 25px;
        height: 25px;
        margin-left: 3px;
    }
    .detail-item:nth-child(1) .img {
        background: url("~assets/img/detail/detail_bottom.png") 0 -60px /25px;
    }
    .detail-item:nth-child(2) .img {
        background: url("~assets/img/detail/detail_bottom.png") 0 -112px /25px;
    }
    .detail-item:nth-child(3) .img {
        background: url("~assets/img/detail/detail_bottom.png") 0 -30px /25px;
    }
    .shop {
        background: var(--color-high-text);
    }
</style>