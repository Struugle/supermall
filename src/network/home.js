import {request} from "./index"

export function getBannerData() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsData(type,page) {
  return request({
    url: '/home/data',
    params: {
      type: type,
      page: page
    }
  })
}