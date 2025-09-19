<template>
  <div class="main">
    <van-tabs v-model:active="active">
      <van-tab :title="item.text" v-for="item in navArr" :key="item.id">

      </van-tab>

    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

// 定义类型
interface NavItem{
  id:string
  text:string
}

// 频道数据
const navArr = ref<NavItem[]>([])

// 频道菜单
axios({
  url: '/navList',
  method: 'GET'

}).then(res => {
  console.log('频道', res)
  navArr.value = res.data.result
})

const active = ref(0)

</script>

<style lang="less" scoped>

</style>
