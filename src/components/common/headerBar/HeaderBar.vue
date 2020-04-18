<template>
    <div class="header-bar">
        <div class="content-left"><slot name="left"></slot></div>
        <div class="content-center"><slot name="center"></slot></div>
        <div class="content-right"><slot name="right"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "HeaderBar"
  }
</script>

<style scoped>
    .header-bar {
        height: 44px;
        background: var(--color-high-text);
        position: relative;
        line-height: 44px;
        top: 0;
        left: 0;
        right: 0;
        color: #fff;
        z-index: 2;
        font-size: 18px;
    }
    .content-left {
         width: 60px;
         position: absolute;
         left: 0;
         top: 0;
     }
    .content-center {
        padding-left: 60px;
        padding-right: 60px;
        text-align: center;
    }

    .content-right {
        width: 60px;
        position: absolute;
        right: 0;
        top: 0;
    }
</style>