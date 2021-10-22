<template>
  <view class="details">
    <view class="header">
      <text>{{ title }}</text>
    </view>
    <view class="main">
      <view class="main_top">
        <view class="main_top_title">
          <image src="../../static/boy.jpeg" class="girls" />
          <view class="text_left">
            <view class="text_top">
              <text>梨园湾-韩丹</text>
              <image src="../../static/hg.png" class="huangg" />
              <text>铜牌置业顾问</text>
            </view>
            <view class="text_bottom">咨询量:65</view>
          </view>
          <view class="text_bottom_list">
            <view class="phone">
              <text>电话咨询</text>
            </view>
            <view class="weaxin">
              <text>微信号</text>
            </view>
            <view class="more">
              <text>更多</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from "vue";
import "./details.scss";
// import {getMessage } from "../utils/api";
import Taro from "@tarojs/taro";
export default {
  setup() {
    let dataIndex = reactive({});
    const title = " 建发·文瀚府杨洁 ";
    const refsData = toRefs(dataIndex);
    onMounted(()=>{
        console.log(Taro.getCurrentInstance().router);
    })
    return {
      title,
      ...refsData,
    };

  },
};
</script>

<style>
</style>