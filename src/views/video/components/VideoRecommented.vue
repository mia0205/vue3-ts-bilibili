<template>
  <div class="list">
    <VideoItemi
    v-for="item in recommentList"
    :key="item.id"
    :videoValue="item"

    ></VideoItemi>

  </div>
</template>

<script setup lang="ts">
import VideoItemi from '@/components/VideoItemi.vue'
import { ref } from 'vue'
import axios from 'axios'

// 定义接口
interface VideoRecommtntList{
  id:string
  link:string
  imgSrc:string
  commentCount:string
  desc:string
  playCount:string
  videoSrc:string
}

// 定义数据
const recommentList = ref<VideoRecommtntList[]>([])
// 请求数据
axios({
  url: '/recommendList',
  method: 'get'

}).then(res => {
  console.log('推荐列表', res)
  recommentList.value = res.data.result
})

</script>

<style lang="less" scoped>
.list{
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-flow: row wrap;
}

</style>
