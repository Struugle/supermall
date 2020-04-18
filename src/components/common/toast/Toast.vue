<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message,time = 2000) {
        let isTrue = false
        if (!isTrue) {
          isTrue = true
          this.isShow = true
          this.message = message
          setTimeout(() => {
            this.isShow = false
            isTrue = false
          },time)
        }
      }
    }
  }
</script>

<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: rgba(0,0,0,0.6);
        padding: 5px 10px;
        color: #fff;
        border-radius: 5px;
        z-index: 999;
    }
</style>