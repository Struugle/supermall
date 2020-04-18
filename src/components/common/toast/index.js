import Toast from './Toast'
import DownLoad from './DownLoad'
const obj ={}

obj.install = function(Vue) {
  //创建一个toast构造器
  let toastConstructor = Vue.extend(Toast)
  //toast实例
  let toast = new toastConstructor()
  //实例挂载到div
  toast.$mount(document.createElement('div'))
  //div添加在document
  document.body.appendChild(toast.$el)

  Vue.prototype.$Toast = toast

  let toastConstructor2 = Vue.extend(DownLoad)

  let toast2 = new toastConstructor2()

  toast2.$mount(document.createElement('div'))

  document.body.appendChild(toast2.$el)

  Vue.prototype.$toast2 = toast2

}

export default obj