<template>
  <van-tabs v-model:active="active">
  <van-tab title="推荐">
    <VideoRecommented></VideoRecommented>
  </van-tab>
  <van-tab title="评论">内容 2</van-tab>

</van-tabs>
</template>

<script setup lang="ts">
import VideoRecommented from './VideoRecommented.vue'
import { ref } from 'vue'

const active = ref(0)
</script>

<style lang="less" scoped></style>
