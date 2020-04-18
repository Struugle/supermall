<template>
    <div class="tab-bar-item" @click="itemClick">
        <!--选中图标-->
        <div v-if="isActive"><slot name="icon-active"></slot></div>
        <!--默认图标-->
        <div v-else><slot name="icon"></slot></div>
        <!--标题-->
        <div :class="{active:isActive}"><slot name="text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String
    },
    methods: {
      //item单击事件
      itemClick() {
        if (this.$route.path === this.path) return
        this.$router.push(this.path)
      }
    },
    computed: {
      //计算谁该高亮
      isActive() {
        return this.$route.path === this.path
      }
    }
  }
</script>

<style scoped lang="less">
    .tab-bar-item {
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
    }
    .tab-bar-item img {
        width: 24px;
        width: 24px;
    }
    .active {
        color: var(--color-high-text);
    }
</style>