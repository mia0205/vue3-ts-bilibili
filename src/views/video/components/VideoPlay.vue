<template>
  <div class="videoplay">
    <video
    controls
    :src="videoValue?.videoSrc"

    ></video>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'

interface videoItem{
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
  videoValue: {
    type: Object as PropType<videoItem>,
    required: true
  }

})

</script>

<style lang="less" scoped>
.videoplay{
  width: 100%;
  height: 200px;
  background-color: #000;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-bottom: 0px;

  .video{
    box-sizing: border-box;
    width: 100%;
    height: 200px;

  }

}

</style>
