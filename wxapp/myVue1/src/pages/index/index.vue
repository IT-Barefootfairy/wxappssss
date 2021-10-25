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
        @change="onSwiper(1)"
      >
        <swiper-item class="swiper-slide1">
          <view
            class="slid_item1"
            v-for="(item, index) in nav.slice(0, 10)"
            :key="index"
          >
            <image :src="item.ico" alt="" class="ico" />
            <text class="title">{{ item.title }}</text>
          </view>
        </swiper-item>
        <swiper-item class="swiper-slide2"
          ><view
            class="slid_item2"
            v-for="(item, index) in nav.slice(10)"
            :key="index"
          >
            <image :src="item.ico" alt="" class="ico" />
            <text class="title">{{ item.title }}</text>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="list_container">
      <!-- <button @tap="onSlideChange">{{benyuefangjia.title}}</button> -->
      <view class="benyuefangjia">
        <view class="top">
          <text>{{ benyuefangjia.title }}</text>
        </view>
        <view class="box">
          <view class="topleft">
            <text class="price">{{ byfjleft.value }}元/m²</text>
            <text>{{ byfjleft.desc }}</text>
          </view>
          <view class="topright">
            <text class="price">{{ byfjright.value }}元/m²</text>
            <text
              >{{ byfjright.desc
              }}<text>▼{{ statusValue }}下降</text></text
            >
          </view>
        </view>
        <view class="gundong">
          <view v-for="(item, index) in news" :key="index">
            <text>{{
              item.level == 3 ? "头条" : item.level == 2 ? "关注" : "动态"
            }}</text>
            <text>{{ item.title }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { onMounted, ref, reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import { getIndex } from "../../utils/api";

export default {
  setup() {
    let dataIndex = reactive({
      nav: [],
      benyuefangjia: {},
      byfjleft: {},
      byfjright: {},
      statusValue: "",
      news: [],
      onSwiper: (swiper) => {
        console.log(swiper);
      },

      onSlideChange: () => {
        console.log(dataIndex.benyuefangjia);
      },
    });

    const refsData = toRefs(dataIndex);

    onMounted(() => {
      getIndex().then((res) => {
        console.log(res.benyuefangjia.right);
        dataIndex.nav = res.navs.nav;
        dataIndex.benyuefangjia = res.benyuefangjia;
        dataIndex.byfjleft = res.benyuefangjia.left;
        dataIndex.byfjright = res.benyuefangjia.right;
        dataIndex.statusValue = res.benyuefangjia.right.status.value;
        dataIndex.news = res.news.news;
      });
    });
    return {
      ...refsData,
    };
  },

  onLoad(){
    console.log('123');
  },
  onPullDownRefresh ()
  {
    console.log('刷新');
  },
  onReachBottom (){
    console.log('触底');
  }
};
</script>

<style scoped>
</style>
