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
    <view class="list_container">
      <!-- <button @tap="onSlideChange">{{dataIndex.benyuefangjia.title}}</button> -->
      <view class="benyuefangjia">
        <view class="top">
          <text>{{dataIndex.benyuefangjia.title}}</text>
        </view>
        <view class="box">
          <view class="topleft">
            <text class="price">{{dataIndex.byfjleft.value}}元/m²</text>
            <text>{{dataIndex.byfjleft.desc}}</text>
          </view>
          <view class="topright">
            <text class="price">{{dataIndex.byfjright.value}}元/m²</text>
            <text>{{dataIndex.byfjright.desc}}<text>▼{{dataIndex.statusValue}}下降</text></text>
          </view>
        </view>
        <view class="gundong">
          <view  v-for="(item,index) in dataIndex.news" :key="index">
            <text>{{item.level==3?"头条":item.level==2?"关注":"动态"}}</text>
            <text>{{item.title}}</text>
          </view>
        </view>
      </view>
    </view>
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
  benyuefangjia:{},
  byfjleft:{},
  byfjright:{},
  statusValue:"",
  news:[]
});

const onSwiper=(swiper)=>{
  console.log(swiper);
}

const onSlideChange = () => {
  console.log(dataIndex.benyuefangjia);
};

onMounted(() => {
  getIndex().then((res) => {
    console.log(res);
    console.log(res.benyuefangjia.right);
    dataIndex.nav = res.navs.nav;
    dataIndex.benyuefangjia=res.benyuefangjia;
    dataIndex.byfjleft=res.benyuefangjia.left;
    dataIndex.byfjright=res.benyuefangjia.right;
    dataIndex.statusValue=res.benyuefangjia.right.status.value;
    dataIndex.news=res.news.news
  });
});

</script>

<style scoped>
</style>
