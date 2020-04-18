<template>
    <header-bar>
        <div slot="left" @click="backClick" style="width: 30px;">
            <img src="~assets/img/common/back.svg" class="back"/>
        </div>
        <div slot="center" class="center">
            <span class="item" v-for="(item,index) in titles"
                  @click="itemClick(index)"
                  :class="{active:currentIndex === index}">
                {{item}}
            </span>
        </div>
    </header-bar>
</template>

<script>
    import HeaderBar from 'components/common/headerBar/HeaderBar'

  export default {
    name: "DetailHeaderBar",
    components: {
      HeaderBar
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      //返回按钮
      backClick() {
        this.$router.push('/home')
      },
      itemClick(index) {
        this.currentIndex = index
        //传递出当前点击的选项index
        this.$emit('currentIndex',index)
      }
    }
  }
</script>

<style scoped>
    .center {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
    img {
        margin-left: 8px;
        margin-top: 10px;
    }
    .active {
        color: yellow;
    }

    .back {
        width: 30px;
        height: 20px;
        margin-top: 13px;
    }
</style>