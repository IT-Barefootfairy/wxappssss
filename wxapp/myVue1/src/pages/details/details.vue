<template>
  <view class="details">
    <view class="header">
      <text>{{ detailsDatatext.nickname }}</text>
    </view>
    <view class="main">
      <view class="main_top">
        <view :class="isFlag ? 'main_top_title' : 'active main_top_title'">
          <image :src="detailsDatatext.prelogo" class="girls" @tap="goPerson(detailsDatatext.adviser,detailsDatatext.id)"/>
          <view class="text_left">
            <view class="text_top">
              <text>{{ detailsDatatext.nickname }}</text>
              <image src="../../static/hg.png" class="huangg"/>
              <text>{{ detailsDatatext.level_name }}</text>
            </view>
            <view class="text_bottom">
              咨询量:{{ detailsDatatext.traffic_volume }}
            </view>
          </view>
        </view>

        <view class="text_bottom_list">
          <view class="text_first">
            <view class="phone">
              <image src="../../static/phone.png" class="phone_img" />
              <text>电话咨询</text>
            </view>
            <view class="weixin">
              <image src="../../static/weixin1.png" class="weixin_img" />
              <text>微信号</text>
            </view>
            <view class="more" @tap="goMores(detailsDatatext.id)">
              <image src="../../static/jia.png" class="more_img" />
              <text>更多</text>
            </view>
          </view>
          <view class="text_last">
            <text @tap="getShow">{{ isFlag ? "展开" : "收起" }}</text>
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
      isFlag: false,
      //展开收起
      getShow: () => {
        dataIndex.isFlag = !dataIndex.isFlag;
      },
      //跳转更多页面
      goMores: (id) => {
        Taro.navigateTo({
          url: `/pages/mores/mores?id=${id}`,
        });
      },
      //跳转个人信息页面
      goPerson:(adviser,id)=>{
        console.log(adviser,id,5555555555555555555);
        Taro.navigateTo({
          url:`/pages/person/person?adviser=${adviser}&id=${id}`
        })
      }
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