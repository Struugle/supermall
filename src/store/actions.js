export default {
  addCart({state,commit},payload) {
    return new Promise((resolve,reject) => {
      let product = this.state.cartList.find(item => item.id === payload.id)
      //如果仓库中已经有了商品那么count++
      if (product) {
        // product.count ++
        this.commit('addCount',product)
        resolve('商品数量+1')
      } else {
        //初始化商品个数并加入仓库
        payload.count = 1
        this.commit('addProCart',payload)

        // this.state.cartList.push(payload)
        reject('添加新商品')
      }
    })
  }
}