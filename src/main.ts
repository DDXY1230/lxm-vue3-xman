import { createApp,toRaw } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia, PiniaPluginContext } from 'pinia'
import Loading from './components/Loading'
import { MyUse } from './myUse'
const store = createPinia()
export const app = createApp(App)
// 做一个下类型声明
type Lod = {
  show: () => void,
  hide: () => void
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $loading: Lod
  }
}
//-------------注册全局函数和变量-----------------
app.config.globalProperties.$env = 'dev'    // 定义全局函数和全局变量
app.config.globalProperties.$filters = {
  format<T>(str: T) {
    return `小田螺-${str}`
  }
}   
type Filter = {
  format<T>(str: T): string,

}
declare module 'vue' {
  export interface ComponentCustomProperties {
    $filters: Filter,
    $env: string
  }
}
//-------------注册全局函数和变量-----------------

const setStore = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
type Options = {
  key?:string
}
const __piniaKey__ = 'lxmm'
const getStore = (key:string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
const piniaPlugin = (option:Options) => {
  return (context: PiniaPluginContext) => {
    console.log(context, 'context')
    const { store } = context
    const data = getStore(`${option?.key ?? __piniaKey__}-${store.$id}`)
    store.$subscribe(() => {
      console.log('change')
      setStore(`${option?.key ?? __piniaKey__}-${store.$id}`,toRaw(store.$state))
    })
    return {
      ...data
    }
  }
}
store.use(piniaPlugin({
  key:"pinia"
}))
app.use(ElementPlus)
app.use(store)
// app.use(Loading)
MyUse(Loading) // 试一试自己手写实现的
app.mount('#app')
