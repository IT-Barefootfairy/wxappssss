<template>
  <view class="house_list">

    <view class="top">
      <view class="t_title">户型对比</view>
    </view>

    <view class="container"></view>

    <view class="btns">
      <view class="b_add">添加户型</view>
      <view class="b_go">开始对比</view>
    </view>

  </view>
</template>

<script>
import {onMounted,reactive,toRefs} from 'vue'
import './index.scss'

export default {
  setup(){
    const data=reactive({

    });

    const datas=toRefs(data);

    return {
      ...datas
    }
  }
}
</script>
