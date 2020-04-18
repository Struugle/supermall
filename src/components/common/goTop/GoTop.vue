<template>
    <div class="go-top" @click="topClick">
        <img src="../../../assets/img/common/top.png"/>
    </div>
</template>

<script>
  export default {
    name: "GoTop",
    methods: {
      topClick() {
        this.$emit('topClick')
      }
    }
  }
</script>

<style scoped>
    .go-top {
        position: absolute;
        z-index: 10;
        bottom: 50px;
        right: 10px;
    }
    .go-top img {
        width: 50px;
        height: 50px;
    }
</style>