import { createApp,toRaw } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia, PiniaPluginContext } from 'pinia'
const store = createPinia()
const app = createApp(App)

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
app.mount('#app')
