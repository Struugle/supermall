<template>
    <div class="control">
        <div class="checked">
            <img :class="{active:isActive}"
                 src="~assets/img/cart/tick.svg"
                 alt=""
                 @click="allClick">
            <span>全选</span>
        </div>
        <div class="center">结算:￥{{totalPrice}}</div>
        <div class="calc">去结算({{totleLength}})</div>
    </div>
</template>

<script>
  export default {
    name: "ShopControl",
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      isActive() {
        let isAllChecked = false
        return isAllChecked = !this.cartList.find(item => {
          return item.checked === false
        })
      },
      //计算总价
      totalPrice() {
        return this.cartList.filter(item => item.checked === true).map(item => (item.price).substr(1,5)  * item.count).reduce((prent,item)=>{
          return prent + item
        },0)
      },
      totleLength() {
        return this.cartList.filter(item => item.checked).length
      }
    },
    methods: {
      allClick() {
        let isAllActive = !(this.cartList.filter(item => !item.checked).length)
        if (isAllActive) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
    .control {
        width: 100vw;
        height: 40px;
        position: absolute;
        bottom: 49px;
        z-index: 10;
        display: flex;
        background: #eee;
    }
    .checked {
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
    .checked img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border:2px solid #ccc;
        margin-right: 5px;
    }
    .calc {
        flex: 1.5;
        background: var(--color-high-text);
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .center {
        flex: 2;
        height: 40px;
        padding-left: 15px;
        line-height: 40px;
    }
    .active {
        background: var(--color-high-text);
    }
</style>