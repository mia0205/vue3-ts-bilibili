<template>
  <div class="main">
    <div class="imge">
      <img src="../assets/images/OIP-C.png" alt="">

    </div>
    <div class="right">
      <div class="icon">
      <van-icon name="search" />
    </div>
    <div class="log">
      <span>登录</span>

    </div>
    <van-button color="pink">下载App</van-button>

  </div>
    </div>
</template>

<script setup></script>

<style lang="less" scoped>
.main{
  width: 100%;
  height: 60px;

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;

}
.imge{
  width: 60px;
  height: 60px;
  img{
    width: 60px;
    height:58px;
  }
}
.right{
  display: flex;
  align-items: center;
  width: 200px;
  .icon{
    width: 40px;
    height: 40px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    .van-icon{
      text-align: center;
    }
  }
  .log{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #d1d0d0;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      font-size: 13px;
      color:#f882a0;
    }
  }
  .van-button{
    height: 25px;
    color:#fff;
    margin-left: 10px;

    position: absolute;
    right:5px;
  }

}

</style>
