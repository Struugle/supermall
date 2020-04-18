<template>
    <div class="browse-item">
        <img :src="item"/>
    </div>
</template>

<script>
  export default {
    name: "ImgBroeseItem",
    props: {
      item: {
        type: String,
        default() {
          return ''
        }
      }
    }
  }
</script>

<style scoped lang="less">
    .browse-item {
        width: 20%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }

</style>