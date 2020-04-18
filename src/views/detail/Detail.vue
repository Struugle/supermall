<template>
    <div class="detail">
        <detail-header-bar @currentIndex="goItemInfo" ref="header"/>
        <detail-tab-bar @addCart="addCart"/>
        <go-top @topClick="goTop" v-show="topIsShow"/>
        <scroll class="content" ref="scroll" @scroll="scrollContent">
            <detail-swiper :topImage="topImages" ref="swiperInfo" @imgClick="imageClick"/>
            <detail-base-info :goods="goods" ref="baseInfo"/>
            <detail-shop-info :shop="shop" ref="shopInfo"/>
            <detail-goods-info
                    :detail-info="detailInfo"
                    @imageLoad="imageLoad"
                    ref="DetailGoodsInfo" @itemClick="itemClick"/>
            <detail-param-info :param-info="paramInfo" ref="paramInfo"/>
            <detail-comment :commentData="commentData" ref="comment"/>
            <goods :goods="recommendData" ref="goods"/>
        </scroll>
        <detail-img-browse ref="browse"/>
    </div>
</template>

<script>
    //导入组件
    import DetailHeaderBar from './compon/DetailHeaderBar'
    import DetailSwiper from './compon/DetailSwiper'
    import DetailBaseInfo from './compon/DetailBaseInfo'
    import DetailShopInfo from './compon/DetailShopInfo'
    import Scroll from 'components/common/scroll/Scroll'
    import DetailGoodsInfo from './compon/DetailGoodsInfo'
    import DetailParamInfo from './compon/DetailParamInfo'
    import DetailTabBar from './compon/DetailTabBar'
    import DetailComment from './compon/DetailComment'
    import Goods from 'components/content/goods/Goods'
    import DetailImgBrowse from './compon/DetailImgBrowse'


    //mixin
    import {listenGoTop} from '../../common/mixin'



    //导入数据接口文件
    import {getDetailData,GetGoods,Shop,GoodsParams,getRecommendData} from "network/detail"

    export default {
    name: "Detail",
    data() {
      return {
        iid: 0,
        goods: {},
        shop: {},
        goodsParams: {},
        detailInfo: {},
        topImages: [],
        paramInfo: {},
        header: null,
        detailGoodsInfoTop: 0,  //商品数据
        commentData: {},
        recommendData: [],
        itemPositionArr:[]  //存放item位置
      }
    },
    mixins: [listenGoTop],
    components: {
      DetailHeaderBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailTabBar,
      DetailComment,
      Goods,
      DetailImgBrowse
    },
    created() {
      this.iid = this.$route.query.iid
      getDetailData(this.iid).then(res => {
        let data = res.data.result
        //轮播图数据
        this.topImages = data.itemInfo.topImages

        //获取评论数据
        if (data.rate.list) {
          this.commentData = data.rate.list[0]
        }

        //获取头部数据
        this.goods = new GetGoods(data.itemInfo, data.columns, data.shopInfo.services)
        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
      })
      //发起推荐数据请求
      getRecommendData().then(res => {
        this.recommendData = res.data.data.list
      })
    },
    methods: {
      //当轮播图加载完，获取一些数据和刷新页面高度
      imageLoad() {
        this.$refs.scroll.refresh()
        this.detailGoodsInfoTop = this.$refs.DetailGoodsInfo.$el.offsetTop
        this.itemPositionArr.push(-this.$refs.shopInfo.$el.offsetTop)
        this.itemPositionArr.push(-this.$refs.paramInfo.$el.offsetTop)
        this.itemPositionArr.push(-this.$refs.comment.$el.offsetTop)
        this.itemPositionArr.push(-this.$refs.goods.$el.offsetTop)
        this.itemPositionArr.push(-Number.MAX_VALUE)
        this.header = this.$refs.header
      },
      //页面scrolly发生改变进行位置判断
      scrollContent(position) {
        this.topIsShow = -position.y >= this.detailGoodsInfoTop ? true : false
        for(let i=0;i<this.itemPositionArr.length - 1;i++) {
            if (((-position.y) >= -this.itemPositionArr[i] && (-position.y) <= -this.itemPositionArr[i+1])) {
                this.header.currentIndex = i
            }
        }
      },
      //跳转当前位置
      goItemInfo(index) {
        switch (index) {
          case 0:
            this.$refs.scroll.scrollTo(0,0,300)
            break
          case 1:
            this.$refs.scroll.scrollTo(0,this.itemPositionArr[index],300)
            break
          case 2:
            this.$refs.scroll.scrollTo(0,this.itemPositionArr[index],300)
            break
          case 3:
            this.$refs.scroll.scrollTo(0,this.itemPositionArr[index],300)
            break
        }
      },
      //当单击加入购物车后执行添加商品操作
      addCart() {
        let product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.newPrice
        product.id = this.iid

        //放入Vuex
        this.$store.dispatch('addCart',product).then(res => {
          this.$Toast.show(res)
        },error => {
          this.$Toast.show(error)
        })
      },
      //轮播图单击方法
      imageClick(index) {
        this.$refs.browse.isShow = true
        this.$refs.browse.imgArr = this.topImages
        this.$refs.browse.containerInitPosition(index)
      },
      //详情信息img单击事件
      itemClick(index) {
        this.$refs.browse.isShow = true
        this.$refs.browse.imgArr = this.detailInfo.detailImage[0].list
        this.$refs.browse.containerInitPosition(index)
      }
    }
  }
</script>

<style scoped>
    .detail {
        height: 100vh;
        position: relative;
        z-index: 10;
        background: #fff;
    }
    .content {
        position: absolute;
        top: 44px;
        bottom: 49px;
    }
</style>