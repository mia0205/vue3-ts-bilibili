<template>
  <div class="login">
    <div class="head">
      <p>登录billibilli</p>
    </div>
    <div class="form">
    <van-form>
      <van-field
      name="username"
      label="账号"
      placeholder="账号"
      :rules="[{ required: true, message: '请填写账号' }]"
      v-model="account"
    />
    <van-field
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      v-model="password"
    />

    </van-form>

  </div>
  <div class="btn">
    <van-button plain hairline type="primary" class="register">注册</van-button>
    <van-button type="primary" color="pink" class="sub">
      提交
    </van-button>

  </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义用户账号和密码
const account = ref('')
const password = ref('')

</script>

<style lang="less" scoped>
.login{
  width: 100%;
  height: 100vh;
  background-color: #eeecec;
  box-sizing: border-box;
  .head{
    width: 100%;
    height: 60px;
    background-color: #fff;
    p{
    margin-top:0px;
    text-align:center;
    margin-top:20px;
    font-size: 20px;
  }

  }
  .form{
    width: 100%;
    height: 150px;
    margin-top:30px;
    .van-form{
      width: 100%;
      height: 150px;
    }

  }
  .btn{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    .register{
      width: 150px;
      height: 40px;
      margin-left:20px;
    }
    .sub{
      width: 150px;
      height: 40px;
      margin-left:20px;
    }
  }

}

</style>
