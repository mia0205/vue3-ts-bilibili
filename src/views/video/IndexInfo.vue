<template>
  <AppHeader></AppHeader>
  <videoplay
  :videoValue="videoDetail"
  ></videoplay>
  <VideoInfo></VideoInfo>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import videoplay from './components/VideoPlay.vue'
import VideoInfo from './components/VideoInfo.vue'
import { useRoute } from 'vue-router'

import { ref } from 'vue'
import axios from 'axios'

// 定义接口
export interface videoPlayItem {
  author?:string
  authorIconSrc?:string
  commentCount?:number
  date?:string
  favCount?:string
  id?:string
  likeCount?:string
  playCount?:string
  poster?:string
  videoSrc?:string
  videoTitle?:string

}
// 创建路由对象
const route = useRoute()
// 定义数据

const videoDetail = ref<videoPlayItem>({})
// 获取数据
axios({
  url: '/videoDetail',
  method: 'GET',
  params: {
    id: route.params.id
  }
}).then(res => {
  console.log('视频表', res)
  videoDetail.value = res.data.result
})
</script>

<style lang="less" scoped></style>
