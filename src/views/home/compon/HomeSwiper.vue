<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link"><img :src="item.image" @load="imgLoad"/></a>
        </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/allSwiper'
  export default {
    name: "HomeSwiper",
    data() {
      return {
        count: 0,
        isLoad: true
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoad() {
        if (this.isLoad) {
          this.$emit('swiperImageLoad')
          this.isLoad = false
        }

      }
    }
  }
</script>

<style scoped>

</style>