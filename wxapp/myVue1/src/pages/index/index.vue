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
            @tap="goTo(item.url)"
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
            @tap="goTo(item.url)"
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
          <text class="title">{{ benyuefangjia.title }}</text>

          <view class="zaobao"
            ><image
              src="../../static/calendar.png"
              style="width: 1.2rem; height: 1.2rem"
              class="cal"
            />楼市早报</view
          >
        </view>
        <view class="box">
          <view class="topleft">
            <text class="price"
              ><text class="num">{{ byfjleft.value }}</text
              >元/m²</text
            >
            <text class="text">{{ byfjleft.desc }}</text>
          </view>
          <view class="topright">
            <text class="price"
              ><text class="num">{{ byfjright.value }}</text
              >元/m²</text
            >
            <text class="text"
              >{{ byfjright.desc
              }}<text class="gre">▼{{ statusValue }}</text></text
            >
          </view>
          <view class="gundong">
            <swiper
              class="swi"
              :autoplay="true"
              :circular="true"
              :interval="2000"
              :vertical="true"
              :displayMultipleItems="2"
            >
              <swiper-item
                class="swiItem"
                v-for="(item, index) in news"
                :key="index"
              >
                <view class="itemChild">
                  <text
                    :class="
                      item.level == 3
                        ? 'img3'
                        : item.level == 2
                        ? 'img2'
                        : 'img1'
                    "
                    >{{
                      item.level == 3
                        ? "头条"
                        : item.level == 2
                        ? "关注"
                        : "动态"
                    }}</text>
                  <text class="text">{{ item.title }}</text>
                </view>
              </swiper-item>
            </swiper>
          </view>
        </view>
      </view>
    </view>

    <view class="hotBuild">
      <view class="hotBuildTitle">
        <text class="title">{{ hotBuild.title }}</text>
        <text class="more">更多</text>
      </view>
      <view class="hotBuildList">
        <view @tap="goHotBuild(item.id)" class="item" v-for="(item, index) in hotBuildList" :key="index">
          <view class="leftside">
            <image
              class="img"
              :src="item.img"
              alt=""
              style="width: 7rem; height: 5.8rem"
            />
            <text class="area">{{ item.areaname }}</text>
          </view>
          <view class="rightside">
            <view class="head">
              <text class="title">{{ item.group_title }}</text>
              <text class="status">{{ item.status_name }}</text>
            </view>
            <view class="price"><text class="num">{{ item.price }}</text>元/m²</view>
            <view class="build_type">
              <text class="build_type_item"  v-for="(v, i) in item.build_type" :key="i">{{ v }}</text>
            </view>
            <view class="discount" v-if="item.discount != ''">
              <text class="hui">惠</text>
              <text class="discount_text">{{ item.discount }}</text>
            </view>
          </view>
        </view>
      </view>
      <view class="adv">
        <view
          v-for="(item, index) in advB"
          :key="index"
          @tap="toAdv(item.link)"
        >
          <image :src="item.image" alt="" />
          <text>广告</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { onMounted, ref, reactive, toRefs, onUpdated } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import { getIndex, getXinfang, getershou } from "../../utils/api";

export default {
  setup() {
    let dataIndex = reactive({
      nav: [],
      benyuefangjia: {},
      byfjleft: {},
      byfjright: {},
      statusValue: "",
      news: [],
      hotBuild: {},
      hotBuildList: [],
      adv: {},
      advB: [],
      a: 0,

      onSwiper: (swiper) => {
        console.log(swiper);
        // console.log(dataIndex.a);
      },

      onSlideChange: () => {
        console.log(dataIndex.benyuefangjia);
      },

      toAdv: (link) => {
        Taro.navigateTo({
          url: `/pages/yushou/index`,
        });
      },

      goTo: (url) => {
        Taro.navigateTo({
          url: url,
        });
      },

      goHotBuild:(id)=>{
        Taro.navigateTo({
          url: `/pages/new_house/detail?id=${id}`,
        });
        console.log(id);
      }
    });

    const refData = toRefs(dataIndex);

    onMounted(() => {
      getIndex().then((res) => {
        console.log(res);
        dataIndex.nav = res.navs.nav;
        dataIndex.benyuefangjia = res.benyuefangjia;
        dataIndex.byfjleft = res.benyuefangjia.left;
        dataIndex.byfjright = res.benyuefangjia.right;
        dataIndex.statusValue = res.benyuefangjia.right.status.value;
        dataIndex.news = res.news.news;
        dataIndex.hotBuild = res.hotBuild;
        dataIndex.hotBuildList = res.hotBuild.hotBuild;
        dataIndex.adv = res.adv;
        dataIndex.advB = res.adv.advB;
      }),
        getershou().then((res) => {
          console.log(res, "000000000000000");
        });
    });

    return {
      ...refData,
    };
  },

  onPullDownRefresh() {
    getIndex();
  },

  onReachBottom() {
    getXinfang().then((res) => {
      this.adv = res;
    });
  },
};
</script>
