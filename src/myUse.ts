// 自己实现app.use()方法
import type {App} from 'vue'
import {app} from './main'
interface Use{
  install: (app:App,...options:any) => void
}
const installList = new Set()
export function MyUse<T extends Use>(plugin:T,...options:any[]) {
  if(installList.has(plugin)) {
    // 已经注册过了,直接报错吧
    console.log('不好意思,注册过了')
  }else {
    plugin.install(app, ...options)
    installList.add(plugin)

  }
}