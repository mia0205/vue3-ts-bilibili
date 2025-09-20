<template>
  <div class="list">
    <VideoItemi
      v-for="item in videoList" :key="item.imgSrc"
      :videoValue="item"
      v-lazy="item"

    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import VideoItemi from '@/components/VideoItemi.vue'

// 定义接口
interface VideoItem{
  id:string
  imgSrc:string
  link:string
  desc:string
  playCount:string
  videoSrc:string
  commentCount:string
}

// 定义video数据
const videoList = ref<VideoItem[]>([])

// 获取video数据
axios({
  url: '/videosList',
  method: 'GET'
}).then(res => {
  console.log('video数据', res)
  videoList.value = res.data.result
})

</script>

<style lang="less" scoped>
.list{

  display: flex;
  flex-wrap:  wrap;
  padding: 0 1vw;

}

</style>
