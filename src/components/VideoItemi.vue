<template>
  <router-link to="`/video/${video.id}`" class="card">
    <div class="main">
      <div class="card-img">
        <img src="" alt="" class="pic">
      </div>
      <div class="count">
        <span>
          <van-icon name="video-o" />
          24.9万
        </span>
        <span>
          <van-icon name="coupon-o" />
          1345
        </span>
      </div>

    </div>
    <p class="title">123</p>
  </router-link>
</template>

<script setup lang="ts">
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
