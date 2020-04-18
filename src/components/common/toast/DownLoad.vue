<template>
    <div class="down-load" @click="itemClick">
        暂无收藏
    </div>
</template>

<script>
  export default {
    name: "DownLoad",
    data() {
      return {

      }
    },
    methods: {
      show() {
        let div = document.querySelector('.down-load')
        div.style.transition = 'all 0.5s'
        div.style.transform = 'translateY(-100%)'

      },
      itemClick() {
        let div = document.querySelector('.down-load')
        div.style.transition = 'all 0.5s'
        div.style.transform = 'translateY(100%)'
      }
    }
  }
</script>

<style scoped>
    .down-load {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 100%;
        left: 0;
        background: rgba(0,0,0,.4);
        z-index: 999;
        text-align: center;
        line-height: 100vh;
        color: #fff;
    }
</style>