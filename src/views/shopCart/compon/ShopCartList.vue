<template>
    <div class="cart-list">
        <div class="cart-item" v-for="(item,index) in cartList" @click="itemClick(index)">
            <div class="proImage">
                <img :class="{active:item.checked === true}" src="~assets/img/cart/tick.svg" alt="">
                <img :src="item.image" alt="">
            </div>
            <div class="proText">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="shop-info">
                    <span class="price">{{item.price}}</span>
                    <span class="count">x{{item.count}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ShopCartList",
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      console.log(this.cartList);
    },
    methods: {
      itemClick(index) {
        this.cartList[index].checked = !this.cartList[index].checked
      }
    }
  }
</script>

<style scoped>
    .cart-list {
        width: 100vw;
        padding: 10px 10px 10px 5px;
    }
    .cart-item {
        display: flex;
        padding: 5px 0;
        border-bottom: 1px solid #ccc;
    }
    .proImage {
        flex: 2;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-right: 10px;
    }
    .proImage img:nth-child(1) {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border:2px solid #ccc;
    }
    .proImage img:nth-child(2) {
        width: 70%;
        border-radius: 5px;
    }

    .proText {
        flex: 3.5;
        overflow: hidden;
    }
    .proText .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #000;
    }
    .proText .desc {
        margin: 15px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #c8c8c8;
    }
    .shop-info {
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
    }
    .price {
        color: red;
    }
    .active {
        background: var(--color-high-text);
    }
</style>