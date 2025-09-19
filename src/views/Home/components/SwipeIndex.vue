<template>
  <div class="main">

          <van-swipe class="my-swipe" :autoplay="3000" v-if="swipeArr.length > 0">
               <van-swipe-item v-for="item in swipeArr" :key="item.imgSrc">
                <img :src="item.imgSrc" alt="轮播图片" class="img">
               </van-swipe-item>

          </van-swipe>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
interface SwipeItem {
  imgSrc:string
  link:string
}

// 定义轮播图数据
// 轮播图数据
const swipeArr = ref<SwipeItem[]>([])

// 轮播图菜单
axios({
  url: '/swiperList',
  method: 'GET'
}).then(res => {
  console.log('轮播图', res)
  swipeArr.value = res.data.result
})

</script>

<style lang="less" scoped>
.main{
  width: 100%;
  height: 120px;
  .my-swipe{
    width: 100%;
    height: 120px;
    .van-swipe-item{
      width: 100%;
      .img{
        width: 100%;

      }
    }

  }

}

</style>
