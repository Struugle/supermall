<template>
    <div class="wrapper" ref="scroll">
        <div class="content clear-fix">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default() {
          return 3
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return true
        }
      }
    },
    mounted() {
      this.Scroll = new BScroll(this.$refs.scroll,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //实时监听滚动
      if (this.probeType === 3 || this.probeType === 2) {
        this.Scroll.on('scroll',position => {
          this.$emit('scroll',position)
        })
      }

      //下拉到底触发事件
      if (this.pullUpLoad) {
        this.Scroll.on('pullingUp',() => {
          this.$emit('pullingUp')
        })
      }

    },
    methods: {
      //刷新页面高度
      refresh() {
        this.Scroll.refresh()
      },
      //告诉scroll已加载完需要再次加载
      finishPullUp() {
        this.Scroll.finishPullUp()
      },
      scrollTo(x,y,time) {
        this.Scroll && this.Scroll.scrollTo(x,y,time)
      },
      getPosition() {
        return this.Scroll ? this.Scroll.y :this.Scroll
      }
    }
  }
</script>

<style scoped>

</style>