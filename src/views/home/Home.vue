<template>
    <div id="home" class="wrapper">
        <home-head-bar/>
        <control-tab :titles="['流行','新款','精选']"
                     @currentIndex="currentItem"
                     ref="control1" class="control1" v-show="isControlShow"/>
        <go-top v-show="topIsShow" @topClick="goTop"/>
        <scroll class="content"
                ref="scroll"
                @scroll="scrollCheck" @pullingUp="pullingUp">
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
            <home-recommend :recommend="recommend"/>
            <home-popular/>
            <control-tab :titles="['流行','新款','精选']"
                         @currentIndex="currentItem"
                         ref="control"/>
            <goods :goods="showGoods"/>
        </scroll>
    </div>
</template>

<script>
  //组件导入
  import HomeHeadBar from './compon/HomeHeadBar'
  import HomeSwiper from './compon/HomeSwiper'
  import HomeRecommend from './compon/HomeRecommend'
  import HomePopular from './compon/HomePopolar'
  import Scroll from 'components/common/scroll/Scroll'
  import ControlTab from 'components/common/controlTab/ControlTab'
  import Goods from 'components/content/goods/Goods'


  //mixin
  import {listenGoTop} from '../../common/mixin'
  //公用方法
  import {debounce} from "../../common/utils"

  //请求导入
  import {getBannerData,getGoodsData} from "network/home"

  export default {
    name: "Home",
    data() {
      return {
        banners: null,
        recommend: null,
        goods: {
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType: 'pop',
        isControlShow: false,
        count: 0,
        positionY: 0,   //记录位置
        controlItemPsoition: {      //记录每一个选项当前停留的位置
          'pop': -568,
          'new': -568,
          'sell': -568
        },
        topIsShow: false
      }
    },
    mixins: [listenGoTop],
    components: {
      HomeHeadBar,
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      Scroll,
      ControlTab,
      Goods,
    },
    created() {
      //获取轮播图素材和推荐素材
      getBannerData().then(res => {
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
      this.getGoodsData('sell')
      this.getGoodsData('new')
      this.getGoodsData('pop')
    },
    methods: {
      //监听页面移动
      scrollCheck(position) {
        //记录每个分类按钮对应的页面位置
        this.controlItemPsoition[this.currentType] = position.y
        //control是否悬挂到顶部
        this.isControlShow = -position.y >= this.$refs.control.$el.offsetTop
        //判断top按钮是否显示
        this.topIsShow = (-position.y) > this.$refs.control.$el.offsetTop ? true :false
      },
      //轮播图加载完成
      swiperImageLoad() {
        // console.log(this.$refs.scroll);
        this.$refs.scroll.refresh()
      },
      //获取商品数据
      getGoodsData(type) {
        let page = this.goods[type].page + 1
        getGoodsData(type,page).then(res => {
          // this.goods[type].list.push(...res.)
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      },
      //判断当前该渲染那个分类
      currentItem(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        //重新获取页面高度
        this.$refs.scroll.refresh()
        //定位上一次的位置
        this.$refs.scroll.scrollTo(0,this.controlItemPsoition[this.currentType],20)

        this.$refs.control.currentIndex = index
        this.$refs.control1.currentIndex = index
      },
      //当下拉到最底部开始渲染下一页数据
      pullingUp() {
        this.getGoodsData(this.currentType)
      }
    },
    computed: {
      //计算当前需要渲染的数据
      showGoods() {
        return this.goods[this.currentType].list
      },
    },
    mounted() {
      //防抖操作
      let refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('goodsImgLoad',() => {
        refresh()
      })
    },
    deactivated() {
      this.positionY = this.$refs.scroll.getPosition()
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.positionY,0)
    }
  }
</script>

<style scoped>
    #home {
        height: 100vh;
        position: relative;
    }
    .content {
        position: absolute;
        overflow: hidden;
        top: 44px;
        bottom: 50px;
    }
    .control1 {
        position: fixed;
        z-index: 10;
        width: 100%;
        margin: 0;
    }
</style>