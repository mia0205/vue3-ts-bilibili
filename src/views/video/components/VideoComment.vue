<template>
  <div class="recomment" v-for="item in commentArr" :key="item.id">
    <div class="left">
      <img :src="item.avatar" alt="" class="img">
    </div>
    <div class="right">
      <div class="title">
        <p>{{ item.username }}</p>
        <p>{{ item.date }}</p>
      </div>
      <div class="content">
        {{ item.content }}
      </div>
    </div>
    <p></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

// 定义接口
interface commentItem{
  count?:number
  items?:object

}
interface commentArrItem{
  avatar:string
  content:string
  date:string
  id:string
  username:string
}
// 定义数据
const commentList = ref<commentItem>({})
const commentArr = ref<commentArrItem[]>([])

// 获取数据
axios({
  url: '/commentsList',
  method: 'get'
}).then(res => {
  console.log('评论', res)
  commentList.value = res.data.result
  commentArr.value = res.data.result.items
})

</script>

<style lang="less" scoped>
.recomment{
  width: 100%;
  height: 100px;
  display: flex;
  .left{
    width: 20%;
    .img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-left:15px;
    }
  }
  .right{
    width: 80%;
    display: flex;
    flex-direction: column;
    .title{
      margin-top:6px;
      p{
        margin-top:0px;
        margin-bottom: 0px;
        padding: 0 0;
        font-size: 13px;
      }
    }
    .content{
      margin-top:10px;
      font-size:13px;
    }

  }

}

</style>
