<template>
  <AppHeader />
  <TabIndex>
  </TabIndex>
  <SwipeIndex></SwipeIndex>
  <VideoIndex></VideoIndex>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import TabIndex from './components/TabIndex.vue'
import SwipeIndex from './components/SwipeIndex.vue'
import VideoIndex from './components/VideoIndex.vue'

</script>

<script>
export default {
  name: 'home-index'
}
</script>

<style lang="less" scoped></style>
