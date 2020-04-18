<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "TabBar",
  }
</script>

<style scoped lang="less">
    .tab-bar {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #f6f6f6;
        height: 49px;
        box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
        display: flex;
        align-items: center;
        z-index: 9;
    }
</style>