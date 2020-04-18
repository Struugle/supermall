<template>
        <img-browse @colseClick="colseClick"
                    :imgArr="imgArr"
                    :currentIndex="currentIndex" ref="browse"></img-browse>
</template>

<script>
  import ImgBrowse from '../../../components/common/imgBrowse/ImgBrowse'
  import ImgBrowseItem from '../../../components/common/imgBrowse/ImgBrowseItem'
  export default {
    name: "DetailImgBrowse",
    components: {
      ImgBrowse,
      ImgBrowseItem,
    },
    data() {
      return {
        isShow: false,
        //面板style记录
        browse: null,
        browseStyle: null,
        imgArr: [],
        currentIndex: 0
      }
    },
    watch: {
      //监听isShow发生改变
      isShow() {
        this.planeAnimation()
      }
    },
    mounted() {
      this.browse = document.getElementsByClassName('img-browse')[0]
      this.browseStyle = this.browse.style
    },
    methods: {
      //关闭按钮方法
      colseClick() {
        this.isShow = false
      },
      //面板的出现与消失
      planeAnimation() {
        if(this.isShow === true) {
          this.browseStyle.display = 'block';
          let time = 0;
          let timer = setInterval(() => {
            time +=2;
            this.browseStyle.opacity = time/100;
            if (time === 100) {
              clearInterval(timer)
            }
          },1)
        } else {
          let time = 100;
          let timer = setInterval(() => {
            time -=2;
            this.browseStyle.opacity = time/100;
            if (time === 0) {
              this.browseStyle.display = 'none';
              clearInterval(timer)
            }
          },1)
        }
      },
      containerInitPosition(index) {
        this.$refs.browse.currentIndex = index + 1
      }
    }
  }
</script>

<style scoped lang="less">

</style>