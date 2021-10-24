<template>
  <view class="details">
 
    <view class="header">
      <text>{{ detailsDatatext.nickname }}</text>
    </view>
    <view class="main">
      <view class="main_top">
        <view class="main_top_title">
          <image :src="detailsDatatext.prelogo" class="girls" />
          <view class="text_left">
            <view class="text_top">
              <text>{{ detailsDatatext.nickname }}</text>
              <image src="../../static/hg.png" class="huangg" />
              <text>{{detailsDatatext.level_name}}</text>
            </view>
            <view class="text_bottom">咨询量:{{detailsDatatext.traffic_volume}}</view>
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
import { getMessage, getMessagetext } from "../../utils/api";
import Taro from "@tarojs/taro";
export default {
  setup() {
    let dataIndex = reactive({
      user_id: 0,
      chat_id: "",
      detailsData: [],
      detailsDatatext: [],
    });
    const title = " 建发·文瀚府杨洁 ";
    const refsData = toRefs(dataIndex);

    onMounted(() => {
      let { chat_id, user_id } = Taro.getCurrentInstance().router.params;
      dataIndex.user_id = user_id;
      dataIndex.chat_id = chat_id;
      getMessage(chat_id).then((res) => {
        console.log(res.data.list, "9999999999999999999999999999");
        // dataIndex.detailsData=res.data.list;
      });
      getMessagetext(user_id).then((res) => {
        console.log(res.data.member, "66666666666666666666666666666666");
        dataIndex.detailsDatatext = res.data.member;
      });
    });
    return {
      title,
      ...refsData,
    };
  },
};
</script>

<style>
</style>