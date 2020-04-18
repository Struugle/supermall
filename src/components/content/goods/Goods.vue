<template>
    <div class="goods">
        <goods-item v-for="item in goods" :item="item"/>
    </div>
</template>

<script>
    import GoodsItem from './GoodsItem'
  export default {
    name: "Goods",
    components: {
      GoodsItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    // mounted() {
    //   console.log(this.goods);
    // }
  }
</script>

<style scoped>
    .goods {
        width: 100vw;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 5px;
    }
</style>