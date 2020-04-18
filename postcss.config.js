module.exports = {
  plugins: {
    autoprefixer:{},
    "postcss-px-to-viewport": {
      viewportWidth:375,  //视图的宽度，对应的是设计稿的宽度  1物理点可放2像素点
      viewportHeight:667, //视图的高度
      unitPrecision:5,    //指定的转化后的小数点位数
      viewportUnit: 'vw', //转化为什么单位
      selectorBlackList:['ignore'], //忽略掉那些类，不转化
      minPixelValue:1,    //最小单位，就不用转化了
      mediaQuery:false,   //是否允许在媒体查询中查找‘px’
      exclude:[/ProFile/]          //必须是正则
    }
  }
}