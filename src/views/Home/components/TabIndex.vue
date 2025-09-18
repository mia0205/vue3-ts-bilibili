<template>
  <div class="main">
    <van-tabs v-model:active="active">
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
        内容
      </van-tab>
   </van-tabs>
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>
