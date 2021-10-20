<template>
  <view class="home_container">
    <view class="home_header_container">
      <view class="input_container">
        <image src="../../static/search.png" class="search" />
        <view class="searchtext">请输入内容</view>
      </view>
      <view class="input_map">
        <image src="../../static/map.png" class="map" />
        <view class="maptext">地图</view>
      </view>
    </view>

    <view class="home_link_container">
      <swiper
        class="swiper"
        :indicator-dots="true"
        indicatorColor="red"
        :modules="[Navigation, Pagination, Scrollbar, A11y]"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-item class="swiper-slide1">
          <view
            class="slid_item1"
            v-for="(item, index) in dataIndex.nav.slice(0, 10)"
            :key="index"
          >
            <image :src="item.ico" alt="" class="ico" />
            <text class="title">{{ item.title }}</text>
          </view>
        </swiper-item>
        <swiper-item class="swiper-slide2"
          ><view
            class="slid_item2"
            v-for="(item, index) in dataIndex.nav.slice(10)"
            :key="index"
          >
            <image :src="item.ico" alt="" class="ico" />
            <text class="title">{{ item.title }}</text>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="list_container"></view>
  </view>
</template>
<script setup>
import { onMounted, ref, reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import { getIndex } from "../../utils/api";

defineProps({
  msg: String,
  username: {
    type: String,
    default: "wangwu",
  },
});

let dataIndex = reactive({
  nav: [],
});

const onSwiper=(swiper)=>{
  console.log(swiper);
}

const onSlideChange = () => {
  console.log("slide change");
};

onMounted(() => {
  getIndex().then((res) => {
    console.log(res.navs.nav, "------");
    dataIndex.nav = res.navs.nav;
  });
});

</script>

<style scoped>
</style>
