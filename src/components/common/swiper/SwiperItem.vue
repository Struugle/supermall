<template>
    <div class="swiper-item">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "SwiperItem"
  }
</script>

<style scoped>
    .swiper-item {
        float: left;
    }
    .swiper-item img {
        width: 100%;
    }
</style>