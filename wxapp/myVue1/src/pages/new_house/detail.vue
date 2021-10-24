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
    });

    const datas = toRefs(data);

    onMounted(() => {
      let { id } = Taro.getCurrentInstance().router.params;
      data.id = Number(id);
      gethotDetail(data.id).then((res) => {
        console.log(res, "3----------");
        data.headImage = res.focus;
        data.buildImgCount = res.buildImgCount;
        data.build = res.build;
        data.build_type = res.build.build_type;
      });
    });

    return {
      ...datas,
    };
  },
};
</script>
