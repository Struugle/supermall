<template>
    <div class="shop-cart">
        <shop-header  @click.native="item()"/>
        <shop-control  :cart-list="getCartList"/>
        <scroll class="content">
            <shop-cart-list :cart-list="getCartList" @checked="isAllActive"/>
        </scroll>
        <shop-cart-no v-if="!Boolean(getLength)"/>
    </div>
</template>

<script>
    import ShopHeader from './compon/ShopHeader'
    import ShopCartList from './compon/ShopCartList'
    import Scroll from '../../components/common/scroll/Scroll'
    import ShopControl from './compon/ShopControl'
    import ShopCartNo from './compon/ShopCartNo'

    import { mapGetters } from 'vuex'
  export default {
    name: "ShopCart",
    data() {
      return {
        isAllChecked: false
      }
    },
    components: {
      ShopHeader,
      ShopCartList,
      Scroll,
      ShopControl,
      ShopCartNo
    },
    computed: {
        ...mapGetters(['getCartList','getLength']),

    },
    methods: {
      isAllActive(isAllChecked) {
        this.isAllChecked = isAllChecked
      }
    },

  }
</script>

<style scoped>
    .shop-cart {
        position: relative;
        height: 100vh;
    }
    .content {
        position: absolute;
        overflow: hidden;
        top: 44px;
        bottom: 49px;
    }
</style>