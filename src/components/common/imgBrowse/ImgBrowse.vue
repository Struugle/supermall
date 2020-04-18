<template>
    <div class="img-browse">
        <div class="header">
            <div class="box-left">{{getCurrentIndex}}/{{imgArr.length}}</div>
            <div class="box-right">
                <a class="fa fa-search-plus"></a>
                <a class="fa fa-arrows" @click="fullScreen"></a>
                <a class="fa fa-times" @click="colseBtn"></a>
            </div>
        </div>
        <div class="container" v-if="imgArr"
             @touchstart="touchStart"
             @touchmove="touchMove" @touchend="touchEnd">
            <img-broese-item v-for="(item,index) in imgArr" :item="item"/>
        </div>
    </div>
</template>

<script>
  import ImgBroeseItem from "./ImgBrowseItem";
  export default {
    name: "ImgBrowse",
    components: {ImgBroeseItem},
    data() {
      return {
        //图片容器
        container: null,
        //容器style
        containerStyle: null,
        //图片总数
        itemTtoal: null,
        //屏幕宽度
        screenWidth: null,
        startX: null,
        endX: null,
        currentIndex: 1,
        distanceX: 0,
        isFullScreen: false,
        //记录第一次单击时间
        oneTime: 0,
        //图片放大标记
        isScale:false,
        //图片是否正在放大动画
        isAnimation: false,
        //当前浏览的图片
        currentImg: null,
        //当前正在移动图片
        isMoveImg: false
      }
    },
    props: {
      imgArr: {
        type: Array,
        default() {
          return []
        }
      },
    },
    watch: {
      imgArr() {
        setTimeout(() => {
          this.handleDOM()
        },100)
      },
      //监听index改变更改初始位置
      currentIndex(newVal) {
        if (this.containerStyle) {
          this.addTransform(this.screenWidth,newVal)
        }
        if(this.currentImg) {
          this.currentImg.style.transform = 'scale(1)'
        }
      },
      //监听全屏控制变量的改变
      isFullScreen(newVal) {
        if(newVal === true) {
          document.body.webkitRequestFullScreen()
        } else {
            document.webkitCancelFullScreen()
        }
      }
    },
    methods: {
      //关闭按钮方法
      colseBtn() {
        this.$emit('colseClick')
      },
      //操作DOM
      handleDOM() {
        this.container = document.querySelector('.container')
        this.containerStyle = this.container.style
        let itemEls = document.getElementsByClassName('browse-item')
        this.itemTotal = itemEls.length
        let firstNode = itemEls[0].cloneNode(true)
        let lastNode = itemEls[this.itemTotal - 1].cloneNode(true)
        this.container.appendChild(firstNode)
        this.container.insertBefore(lastNode,itemEls[0])

        //获取屏幕宽度
        this.screenWidth = itemEls[0].offsetWidth

        //从新获取长度和元素集
        itemEls = document.getElementsByClassName('browse-item')
        this.itemTotal = itemEls.length


        this.containerStyle.width = 100 * this.itemTotal + '%'
        for (let i =0;i<itemEls.length;i++) {
          itemEls[i].style.width = 100 / this.itemTotal + '%'
        }
        this.addTransform(this.screenWidth,this.currentIndex)

      },
      // //拖拽开启
      touchStart(event) {
        this.startX = event.touches[0].clientX
        this.currentImg = event.touches[0].target

        //双击方法调用
        this.imgDouble(event)
      },
      touchMove(event) {
        this.isMoveImg = true
        let moveX = event.touches[0].clientX
        this.distanceX = moveX - this.startX
        let positionX = this.screenWidth * this.currentIndex
        this.containerStyle.transform = `translateX(${-positionX+this.distanceX}px)`
      },
      touchEnd(e) {
        if (Math.abs(this.distanceX) > 0) {
            if(this.distanceX > 0 && Math.abs(this.distanceX) > this.screenWidth/4) {
              this.addTransition('0.3s')
              this.clearTransition(300)
              this.currentIndex --
              if (this.currentIndex <= 0) {
                setTimeout(() => {
                  this.containerStyle.transition ='none'
                  this.currentIndex = this.itemTotal - 2
                },300)
              }
              //初始化滑动距离值
              this.distanceX = 0
            } else if(this.distanceX < 0 && Math.abs(this.distanceX) > this.screenWidth/4) {
              this.addTransition('0.3s')
              this.clearTransition(300)
              this.currentIndex ++
              if (this.currentIndex >= this.itemTotal - 1) {
                setTimeout(() => {
                  this.containerStyle.transition ='none'
                  this.currentIndex = 1
                },300)
              }
              //初始化滑动距离值
              this.distanceX = 0
            } else {
              this.addTransform(this.screenWidth,this.currentIndex)
            }
            this.isMoveImg = false
            this.oneTime = 0
        }
      },
      //添加动画过度
      addTransition(time) {
        this.containerStyle.transition =`all ${time}`
      },
      //删除动画过度
      clearTransition(time=0) {
        setTimeout(() => {
          this.containerStyle.transition ='none'
        },time)
      },
      //添加动画
      addTransform(screenWidth,currentIndex) {
        this.containerStyle.transform = `translateX(${-screenWidth * currentIndex}px)`
      },
      //图片放大动画
      imgScaleAnimation(target,scale,interval) {
        target.transition = `all ${interval}`
        target.transform = `scale(${scale})`
      },
      //全屏方法
      fullScreen() {
        this.isFullScreen = !this.isFullScreen
      },
      //图片双击方法
      imgDouble(e) {
        let interval = Date.parse(new Date) - this.oneTime
        if(interval < 50 && this.isMoveImg === false) {
          if(this.isScale === true) {
            if(this.isAnimation) return;
            this.isAnimation = true
            this.imgScaleAnimation(e.touches[0].target.style,1,'0.5s')
            this.isScale = false
            setTimeout(() => {
              this.isAnimation = false
            },500)
          } else {
            if(this.isAnimation) return;
            this.isScale = true
            this.imgScaleAnimation(e.touches[0].target.style,1.8,'0.5s')
            setTimeout(() => {
              this.isAnimation = false
            },500)
          }
        }
        this.oneTime = Date.parse(new Date)
      }
    },
    computed: {
      //计算当前所在页
      getCurrentIndex() {
        if(this.currentIndex === 0) {
          return this.imgArr.length
        } else if(this.currentIndex === this.imgArr.length + 1){
          return 1
        } else {
          return this.currentIndex
        }
      }
    }
  }
</script>

<style scoped lang="less">
    .img-browse {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 999;
        top: 0;
        display: none;
        opacity: 0;
        .header {
            height: 44px;
            width: 100%;
            background: rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            position: relative;
            z-index: 999;
            .box-left {
                margin-left: 10px;
            }
            .box-right {
                position: absolute;
                right: 0;
                a {
                    color: #ccc;
                    margin-right: 20px;
                }
            }
        }
    }
    .container {
        height: calc(100% - 88px);
        width: 500%;
        background: red;
        &>div {
            float: left;
        }
    }
</style>