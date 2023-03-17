import {defineStore} from 'pinia'
import {Names} from './store-name'
export const useTestStore = defineStore(Names.TEST, {
  state: ()=>{
    return {
      current: 1,
      name: 'lxm'
    }
  },
  getters: {

  },
  actions: {
    // 同步异步都可以做
    setCurrent(val:number) {
      this.current = val
    }
  }
})