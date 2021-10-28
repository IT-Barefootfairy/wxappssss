<template>
  <view class="index">
    <view class="head">
      <swiper class="swiper" :autoplay="true" :interval="3000" :circular="true">
        <swiper-item class="item" v-for="item in headImage" :key="item">
          <image :src="item" alt="" class="img" />
        </swiper-item>
      </swiper>
      <view class="img_num">共{{ buildImgCount }}张</view>
    </view>

    <view class="names">
      <view class="top">
        <view class="name">{{ build.title }}</view>
        <view class="status">{{ build.status_name }}</view>
      </view>
      <view class="down">
        <view class="item" v-for="(item, index) in build_type" :key="index">{{
          item
        }}</view>
      </view>
      <view class="xq">详情 ></view>
    </view>

    <view class="message">
      <view class="jun">
        <view class="num">
          <view class="num_n">{{ build_price_jun }}</view>
          <view class="yuan">元/m²</view>
        </view>
        <view class="text"
          >参考均价
          <image
            class="img"
            style="width: 12px; height: 12px"
            src="../../static/prompt.png"
            alt=""
          />
        </view>
      </view>
      <view class="zong">
        <view class="num">
          <view class="num_n">{{ build_price_zong }}</view>
          <view class="yuan">起</view>
        </view>
        <view class="text">
          <view class="text"
            >参考总价
            <image
              class="img"
              style="width: 12px; height: 12px"
              src="../../static/prompt.png"
              alt=""
            />
          </view>
        </view>
      </view>
      <view class="mj">
        <view class="num">
          <view class="num_n">{{ build_square }}</view>
          <view class="yuan">m²</view>
        </view>
        <view class="text">
          <view class="text">建面范围</view>
        </view>
      </view>
    </view>

    <view class="address">
      <image src="../../static/map.png" alt="" class="map" />
      <view class="position">{{ address }}</view>
      <view class="text">导航 ></view>
    </view>

    <view class="call">
      <view class="left">{{ call_text }}</view>
      <view class="right">
        <view class="btn">获取优惠</view>
        <view class="end_time">结束时间{{ end_time }}</view>
      </view>
    </view>

    <view class="calll">
      <view class="left">
        <view class="click">点击查看售楼处电话</view>
        <view class="text">平台将使用隐私加密 保护您的真实号码</view>
      </view>
      <view class="right">
        <image class="img" src="../../static/209电话-圆框.png" alt="" />
      </view>
    </view>

    <view class="choise">
      <view class="ca">
        <image class="img" src="../../static/browse.png" />
        <view class="texts">认筹开盘通知</view>
      </view>
      <view class="cb">
        <image class="img" src="../../static/data-view.png" />
        <view class="texts">调价通知我</view>
      </view>
    </view>

    <view class="buildmove">
      <view class="top">
        <view class="text">楼盘动态</view>
        <view class="more">更多</view>
      </view>
      <view class="down">
        <view class="new">
          <view class="headr">
            <view class="point"></view>
            <view class="card">咨询</view>
            <view class="time">{{ news.ctime }}</view>
          </view>
          <view class="body">{{ news.title }}</view>
        </view>

        <view class="gf">
          <view class="headr">
            <view class="point"></view>
            <view class="card">官方</view>
            <view class="time">{{ gf.ctime }}</view>
          </view>
          <view class="body">
            <view class="gf_head">
              <!-- <image class="headimg" :src="gf.prelogo" /> -->
              <AtAvatar circle :image="gf.prelogo" class="headimg"></AtAvatar>
              <view class="him_name">{{ gf.cname }}</view>
              <view class="counselor">置业顾问</view>
              <view class="consult">咨询</view>
            </view>
            <view class="gf_body">
              <view class="gf_text">{{ gf.content }}</view>
              <view
                class="gf_imgs"
                v-for="(item, index) in gf_imgs"
                :key="index"
              >
                <image class="img_item" :src="item" />
              </view>
            </view>
          </view>
        </view>

        <view class="open">
          <view class="headr">
            <view class="point"></view>
            <view class="card">开盘</view>
          </view>
          <view class="body">
            <view class="open_head">{{ open.title }}</view>
            <view class="open_body">{{ open.descp }}</view>
          </view>
        </view>

        <view class="demo">
          <view class="headr"
            ><view class="point"></view>
            <view class="card">项目</view>
            <view class="time">{{ build.add_time }}</view>
          </view>
          <view class="body">{{ build.content }}</view>
        </view>

        <view class="pp">
          <view class="headr"
            ><view class="point"></view>
            <view class="card">证件</view>
            <view class="time">{{ zj.tjrq }}</view>
          </view>
          <view class="body">
            <view class="pp_title">{{ zj.xkzh }}</view>
            <view class="pp_text">{{ zj.xmmc }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";
import "./detail.scss";
import { gethotDetail } from "../../utils/api";
import { AtTimeline, AtAvatar } from "taro-ui-vue3";
import "taro-ui-vue3/dist/style/components/avatar.scss";

export default {
  setup() {
    const data = reactive({
      id: 0,
      headImage: [],
      buildImgCount: 0,
      build: {},
      build_type: [],
      build_price_jun: 0,
      build_price_zong: "",
      build_square: "",
      address: "",
      call_text: "",
      end_time: "",
      news: {},
      gf: {},
      open: {},
      zj: {},
      gf_imgs: [],
    });

    const datas = toRefs(data);

    onMounted(() => {
      let { id } = Taro.getCurrentInstance().router.params;
      data.id = Number(id);
      gethotDetail(data.id).then((res) => {
        // console.log(res, "3----------");
        data.headImage = res.focus;
        data.buildImgCount = res.buildImgCount;
        data.build = res.build;
        data.build_type = res.build.build_type;
        data.build_price_jun = res.build.build_price;
        data.build_price_zong = res.build.reference_price;
        data.build_square = res.build.main_huxing;
        data.address = res.build.address;
        data.call_text = res.build.build_discount.content;
        data.end_time = res.build.build_discount.endtime;
        data.news = res.news;
        data.gf = res.adviser_share[0];
        data.open = res.open;
        data.zj = res.build_ysxk;
        data.gf_imgs = res.adviser_share[0].img;
      });
    });

    return {
      ...datas,
    };
  },
  components: {
    AtTimeline,
    AtAvatar,
  },
};
</script>
