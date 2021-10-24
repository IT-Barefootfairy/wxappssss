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
        <view class="item" v-for="(item, index) in build_type" :key="index">{{ item }}</view>
      </view>
      <view class="xq">详情 ></view>
    </view>

    <view class="message">
      <view class="jun">
        <view class="num">
          <view class="num_n">{{build_price_jun}}</view>
          <view class="yuan">元/m²</view>
        </view>
        <view class="text">参考均价
          <image class="img" style="width:12px;height:12px;" src="../../static/prompt.png" alt=""/>
        </view>
      </view>
      <view class="zong">
        <view class="num">
          <view class="num_n">{{build_price_zong}}</view>
          <view class="yuan">起</view>
        </view>
        <view class="text">
          <view class="text">参考总价
          <image class="img" style="width:12px;height:12px;" src="../../static/prompt.png" alt=""/>
        </view>
        </view>
      </view>
      <view class="mj">
        <view class="num">
          <view class="num_n">{{build_square}}</view>
          <view class="yuan">m²</view>
        </view>
        <view class="text">
          <view class="text">建面范围</view>
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

export default {
  setup() {
    const data = reactive({
      id: 0,
      headImage: [],
      buildImgCount: 0,
      build: {},
      build_type: [],
      build_price_jun:0,
      build_price_zong:"",
      build_square:""
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
        data.build_price_jun=res.build.build_price;
        data.build_price_zong=res.build.reference_price;
        data.build_square=res.build.main_huxing;
      });
    });

    return {
      ...datas,
    };
  },
};
</script>
