<template>
    <div class="recommend">
        <div v-for="item in recommend">
            <a :href="item.link"><img :src="item.image"/></a>
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .recommend {
        width: 100vw;
        display: flex;
        text-align: center;
        align-items: center;
        padding: 10px 0;
        border-bottom: 10px solid #eee;
        font-size: 12px;
        justify-content: space-around;
    }
    .recommend div {
        width: 20%;
    }
    .recommend img {
        width: 100%;
        margin-bottom: 5px;
    }

</style>