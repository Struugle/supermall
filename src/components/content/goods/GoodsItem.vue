<template>
    <div class="goods-item">
        <img :src="showImg" @load="goodsImgLoad" @click="goodsClick"/>
        <p>{{item.title}}</p>
        <div><span>{{item.orgPrice || item.price}}</span><span>{{item.cfav}}</span></div>
    </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },

    },
    methods: {
      goodsImgLoad() {
        this.$bus.$emit('goodsImgLoad')
      },
      goodsClick() {
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.item.iid
          }
        })
      }
    },
    computed: {
        showImg() {
          return this.item.image || this.item.show.img
        }
    }
  }
</script>

<style scoped>
    .goods-item {
        width: 46%;
        font-size: 14px;
        padding-bottom: 5px;
    }
    .goods-item img {
        width: 100%;
        border-radius: 5px;
    }
    p {
        overflow: hidden;

        text-overflow: ellipsis;

        white-space: nowrap;

        margin: 5px 0 2px 0;
    }
    .goods-item div {
        text-align: center;
    }
    .goods-item div span:nth-child(1) {
        margin-right: 20px;
        color: #ff5777;
    }
    .goods-item div span:nth-child(2) {
       position: relative;
    }
    .goods-item div span:nth-child(2)::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 0px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>