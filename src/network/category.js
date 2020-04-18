import {request} from './index'

export function getCategorySideBar() {
  return request({
    url: '/category'
  })
}

export function getCategoryList(maitKey) {
  return request({
    url:'subcategory',
    params: {
      maitKey
    }
  })
}

export function getRecommendList(miniWallkey,type) {
  return request({
    url:'subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}