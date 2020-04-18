<template>
    <div style="position: relative; width: 100%;">
        <div class="swiper clear-fix"
             @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>
        <!--如果有1张以上图片-->
        <div class="indicator" v-if="itemCount > 1">
            <ul>
                <li v-for="(item,index) in itemCount - 2"
                    :class="index + 1 === currentIndex ? 'active' : 'item'"></li>
            </ul>
        </div>
        <!--如果只有一张图片-->
        <div class="indicator" v-else>
            <ul>
                <li v-for="(item,index) in itemCount"
                    class="active"></li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      //每隔多久执行一张动画
      interval: {
      type: Number,
      default() {
        return 2000
      }
      },
      //动画持续时间
      animateTime: {
        type: Number,
        default() {
          return 300
        }
      }
    },
    data() {
      return {
        totalWidth: 0,  //swiper宽度
        itemCount: 0,   //swiper-item的总个数
        isTure: true,
        currentIndex: 1, //当前轮播图播放到的index
        swiperEl: null,
        swiperStyle: null,   //指向轮播图的样式
        scrolling: false
      }
    },
    mounted() {
      //使用异步解决DOM没渲染完
      setInterval(() => {
        if (this.isTure) {
          this.handleDOM()
          this.startTimer()
          this.isTure = false
        }
      },300)

    },
    methods: {
      //创建定时器
      startTimer() {
          this.timer = window.setInterval(() => {
            this.currentIndex++;
            this.scrollContent(-this.currentIndex * this.totalWidth);
          }, this.interval)
      },
      //删除定时器
      stopTimer() {
        clearInterval(this.timer)
      },

      //位置操作
      scrollContent(position) {
        // 0.设置正在滚动
        this.scrolling = true;

        // 1.开始滚动动画
        if (this.swiperStyle) {
          this.swiperStyle.transition ='transform '+ this.animateTime + 'ms'
        }

        this.setTransForm(position);

        // 2.判断滚动到的位置
        this.checkPosition();

        // 4.滚动完成
        this.scrolling = false
      },

      //轮播位置判断并采取一定操作
      checkPosition() {
        window.setTimeout(() => {
          if (this.swiperStyle) {
            this.swiperStyle.transition = '0ms'
          }
          if (this.currentIndex >= this.itemCount - 1) {
            this.currentIndex = 1
            this.setTransForm(-this.currentIndex * this.totalWidth)
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.itemCount - 2;
            this.setTransForm(-this.currentIndex * this.totalWidth);
          }
        },this.animateTime)
      },

      //添加位置动画
      setTransForm(position) {
        if (this.swiperStyle) {
          this.swiperStyle.transform = `translateX(${position}px)`
        }
      },
      //操作DOM
      handleDOM() {
        //swiper宽度
        this.swiperEl = document.querySelector('.swiper')
        let itemEls = document.getElementsByClassName('swiper-item')
        //swiper-item的个数
        if(itemEls) this.itemCount = itemEls.length
        if (this.swiperEl) {
          //由于动态渲染图片，这里只获取到swiperEl的一张图片宽度，等数据渲染完swiperEl的宽度就不止这么多了
          //这里偷懒就不改了
          this.totalWidth = this.swiperEl.offsetWidth
        }
        //如果swiper-item的个数大于1，在前后各加一个swiper-item
        if (this.itemCount > 1) {
          //拷贝最后一张轮播图
          let firstSwiper = itemEls[this.itemCount - 1].cloneNode(true)
          //拷贝最后一张轮播图
          let lastSwiper = itemEls[0].cloneNode(true)
          //插入DOM
          this.swiperEl.insertBefore(firstSwiper,itemEls[0])
          this.swiperEl.appendChild(lastSwiper)
          //重新获取轮播图数
          if(itemEls) this.itemCount = itemEls.length
          this.swiperStyle = this.swiperEl.style
          this.swiperStyle.width = this.itemCount * 100 + '%'
          if (itemEls) {
            for (let i =0;i<itemEls.length;i++) {
              itemEls[i].style.width = 100 / this.itemCount + '%'
            }
          }
          //开始就让swiper移动到-totalWith的宽度上
          this.swiperStyle.transform = `translateX(${-this.totalWidth}px)`
        //如果图片只有一张
        }else {
          if (itemEls[0]) {
              itemEls[0].style.width = 100 / this.itemCount + '%';
          }

        }
      },

      /**
       * 拖拽开启
       */
      touchStart(event) {
        //如果动画运行中return
        if (this.scrolling) return;
        //关闭定时器
        this.stopTimer()
        this.startX = event.touches[0].clientX
      },
      touchMove(event) {
        this.moveX = event.touches[0].clientX
        this.moveDistance = this.moveX - this.startX
        this.currentPosition = -this.currentIndex * this.totalWidth
        this.move = this.moveDistance + this.currentPosition

        this.setTransForm(this.move)
      },
      touchEnd() {
        let distance = Math.abs(this.moveDistance)
        if (distance === 0) {
          return
        } else if(this.moveDistance > 0 && distance > this.totalWidth / 3) {
          this.currentIndex --
        } else if(this.moveDistance < 0 && distance > this.totalWidth / 3) {
          this.currentIndex ++
        }
        this.scrollContent(-this.currentIndex * this.totalWidth)


        this.startTimer()
      }
    }
  }
</script>

<style scoped>
    .swiper {

        overflow: hidden;
        position: relative;
    }
    .indicator {
        width: 100%;
        position: absolute;
        bottom: 5px;
    }

    .indicator ul {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .indicator .item {
        margin-left: 10px;
        list-style: none;
        display: block;
        width: 8px;
        height: 8px;
        background: #fff;
        border-radius: 50%;
    }


    .active {
        margin-left: 10px;
        list-style: none;
        display: block;
        width: 8px;
        height: 8px;
        background: #d43e2e;
        border-radius: 50%;
    }
</style>