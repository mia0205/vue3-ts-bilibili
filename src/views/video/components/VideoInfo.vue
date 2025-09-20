<template>
  <div class="videoInfo">
    <div class="header">
      <div class="title">
        <p>{{ videoinfolist.videoTitle }}</p>
        <p>【{{videoinfolist.videoTitle}}】</p>
      </div>
      <div class="shape">
        <div class="left">
          <img :src="videoinfolist.authorIconSrc" alt="" class="img">
          <span>{{ videoinfolist.author }}</span>
        </div>
        <div class="right">
          <span>{{videoinfolist.playCount}}万观看</span>
          <span>
            <i>{{videoinfolist.likeCount}}万</i>
          </span>
          <span>
            <i>{{videoinfolist.favCount}}万</i>
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'

// 定义接口
interface VideoInfoDetail {
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
defineProps({
  videoinfolist: {
    type: Object as PropType<VideoInfoDetail>,
    required: true
  }
})

</script>

<style lang="less" scoped>
.videoInfo{
  width: 100%;
  height: 100px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #9c9b9b;
  .header{
    width: 100%;
    height: 100px;
    position: relative;
    .title{
      width: 100%;
      margin-top:10px;

      p{
        margin-top:0px;
        margin-bottom: 0px;
        font-size:15px;
        margin-left:5px;
      }
    }
    .shape{
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 10px;
      .left{
        .img{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-left:5px;
          margin-right:3px;
        }
        span{
          font-size: 13px;
        }

      }
      .right{
        span{
          margin-right:15px;
          color:#818181;
          font-size: 13px;
        }
      }
    }
  }

}

</style>
