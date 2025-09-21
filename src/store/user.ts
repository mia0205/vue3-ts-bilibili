import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('useUserStore', () => {
  // 定义接口
  interface userInfoList {
    account?:string
    password?:string
  }
  // 声明用户信息
  const userInfo = ref<userInfoList>({})

  return {
    userInfo
  }
},
{ persist: true }
)
