<template>
  <view class="mores">
    <view class="mores_header">
      <text>{{ title }}</text>
    </view>
    <view class="mores_main">
      <view class="main_top_title">
        <image :src="detailsDatatext.prelogo" class="girls" />
        <view class="text_left">
          <view class="text_top">
            <text>{{ detailsDatatext.nickname }}</text>
            <image src="../../static/hg.png" class="huangg" />
            <text>{{ detailsDatatext.level_name }}</text>
          </view>
          <view class="text_bottom">
            咨询量:{{ detailsDatatext.traffic_volume }}
          </view>
        </view>
      </view>
      <view class="add_black">
        <view class="black" @tap="shou_tan"> 加入黑名单</view>
        <AtModal>
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent> 确定要将此好友加入黑名单吗？ </AtModalContent>
          <AtModalAction>
            <Button>取消</Button> <Button>确定</Button>
          </AtModalAction>
        </AtModal>
        <AtModal
          :isOpened="isOpened"
          title="提示"
          cancelText="取消"
          confirmText="确认"
          @close="handleClose"
          @cancel="handleCancel"
          @confirm="handleConfirm"
          content="确定要将此好友加入黑名单吗？"
        />
      </view>
      <view class="panel__content">
        <AtTabs
          :swipeable="false"
          :current="current1"
          :tabList="tabList1"
          @click="handleClick"
        >
          <AtTabsPane :current="current1" :index="0">
            <view class="tab-content">还没有此用户的访问轨迹~~</view>
          </AtTabsPane>
          <AtTabsPane :current="current1" :index="1">
            <view class="tab-content">
              <view>
                <AtLoadMore
                  @click="handleClick2"
                  :status="status"
                  noMoreText="没有更多数据了"
                  moreBtnStyle="border:none"
                />
              </view>
              还没有此用户的访问轨迹~~
            </view>
          </AtTabsPane>
        </AtTabs>
      </view>
    </view>
  </view>
</template>

<script>
import { reactive, toRefs, onMounted, ref, watch } from "vue";
import "taro-ui-vue3/dist/style/components/tabs.scss";
import "./mores.scss";
import { AtTabs, AtTabsPane, AtLoadMore } from "taro-ui-vue3";
import "taro-ui-vue3/dist/style/components/load-more.scss";
import {
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
} from "taro-ui-vue3";
import "taro-ui-vue3/dist/style/components/modal.scss";
import { getMessagetext } from "../../utils/api";
import Taro from "@tarojs/taro";
export default {
  setup() {
    let dataIndex = reactive({
      id: 0,
      user_id:0,
      detailsData: [],
      detailsDatatext: [],
      isFlag: false,
      isOpened: false,
      current1: 0,
      status: "more",
      tabList1: [{ title: "客访轨迹" }, { title: "通话记录" }],
      handleClick2() {
        dataIndex.status = "loading";
        setTimeout(() => {
          dataIndex.status = "noMore";
        }, 2000);
      },
      handleClick(value) {
        dataIndex.current1 = value;
      },
      handleCancel: () => {
        console.log(1111);
        dataIndex.isOpened = !dataIndex.isOpened;
      },
      handleConfirm: () => {
        console.log(22222);
        dataIndex.isOpened = !dataIndex.isOpened;
      },
      shou_tan: () => {
        dataIndex.isOpened = !dataIndex.isOpened;
      },
    });
    const title = " 访客记录 ";
    const refsData = toRefs(dataIndex);

    onMounted(() => {
      let { id,user_id } = Taro.getCurrentInstance().router.params;
      // console.log(dataIndex.user_id);
     dataIndex.id = id;
      dataIndex.user_id = user_id;
      getMessagetext(id).then((res) => {
        console.log(res.data.member, "66666666666666666666666666666666");
        dataIndex.detailsDatatext = res.data.member;
      });
    });
    // watch([dataIndex.isOpened], (newl, oldl) => {
    //   console.log(newl, oldl, 11111111111111111111111111111111);
    // });
    return {
      title,
      ...refsData,
    };
  },
  components: {
    AtModal,
    AtModalHeader,
    AtModalContent,
    AtModalAction,
    AtTabs,
    AtTabsPane,
    AtLoadMore,
  },
};
</script>

<style>
</style>