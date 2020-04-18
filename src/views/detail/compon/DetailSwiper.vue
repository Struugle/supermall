<template>
    <swiper id="swiper">
        <swiper-item v-for="(item,index) in topImage" @click.native="imgClick(index)">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from '../../../components/common/swiper/allSwiper'
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImage: {
        type:Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgClick(index) {
        this.$emit('imgClick',index)
      }
    }
  }
</script>

<style scoped>
    #swiper {
        height: 200px;
        overflow: hidden;
    }
</style>