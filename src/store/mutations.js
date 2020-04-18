export default  {
  addCount(state,payload) {
    payload.count ++
  },
  addProCart(state,payload) {
    payload.checked = false
    this.state.cartList.push(payload)
  }
}