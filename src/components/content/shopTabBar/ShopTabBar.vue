<template>
    <div class="shop-tab-bar">
        <div class="tab-bar-left">
            <slot name="left">

            </slot>
        </div>
        <div class="tab-bar-right">
            <slot name="right">

            </slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ShopTabBar"
  }
</script>

<style scoped>
    .shop-tab-bar {
        position: absolute;
        z-index: 10;
        background: #f6f6f6;
        height: 49px;
        width: 100%;
        bottom: 0;
        display: flex;
        font-size: 14px;
    }
    .tab-bar-left {
        flex: 1.3;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .tab-bar-right {
        background: yellow;
        flex: 1;
        display: flex;
        line-height: 49px;
        text-align: center;
    }
    .tab-bar-right div:nth-child(1){
        flex: 1.2;
        color: #000;
    }
    .tab-bar-right div:nth-child(2){
        flex: 1;
        color: #fff;
    }
</style>