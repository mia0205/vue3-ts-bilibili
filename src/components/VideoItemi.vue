<template>
  <router-link :to="`/video/${videoValue?.id}`" class="card">
    <div class="main">
      <div class="card-img">
        <img :src="videoValue?.imgSrc" alt="" class="pic">
      </div>
      <div class="count">
        <span>
          <van-icon name="video-o" />
          {{ videoValue?.playCount }}
        </span>
        <span>
          <van-icon name="coupon-o" />
          {{ videoValue?.commentCount }}
        </span>
      </div>

    </div>
    <p class="title">{{ videoValue?.desc }}</p>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'

// 定义接口
interface videoType {
  id:string
  imgSrc:string
  link:string
  desc:string
  playCount:string
  videoSrc:string
  commentCount:string
}

// 父传子
defineProps({
  videoValue: {
    type: Object as PropType<videoType>,
    require: true
  }

})
</script>

<style lang="less" scoped>
.card {
  width: 50%;
  padding: 2vw 1vw;
  box-sizing: border-box;
  .main {
    position: relative;
    background: #f3f3f3 url(~@/assets/images/default.png) center no-repeat;
    background-size: 36%;
    border-radius: 0.53333vw;
    overflow: hidden;
    .card-img {
      .pic {
        height: 100px;
        width: 100%;
        object-fit: cover;
      }
    }
    .count {
      background-image: linear-gradient(0deg, #000000d9, #0000);
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 3vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2vw 1.5vw;
      span {
        .iconfont {
          font-size: 3vw;
        }
      }
    }
  }
  .title {
    margin-top: 1.5vw;
    font-size: 3.2vw;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}

</style>
