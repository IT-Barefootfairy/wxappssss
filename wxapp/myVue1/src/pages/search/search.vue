<template>
  <view class="search_index">
    <view class="search">
      <picker
        class="selector"
        mode="selector"
        :range="selector"
        :value="selectorValue"
        @change="handleChange"
        @cancel="handleCancel"
      >
        <view class="demo-list-item">
          <view class="demo-list-item__value">
            {{ selector[selectorValue] }}
          </view>
          <view class="demo-list-item__label">∨</view>
        </view>
      </picker>
      <input
        class="searchArea"
        placeholder="您想住哪里?"
        @input="searchRes"
      />
      <button @tap="searchCancel" class="searchhCancel">取消</button>
    </view>

    <view class="container" v-if="!keywordss">
      <view class="phb">
        <view class="text">排行榜</view>
        <view class="p_nav wrapper">
          <view
            class="p_item"
            v-for="item in tops"
            :key="item.id"
            :style="
              item.bg_color == '#FF7402'
                ? 'background:#FF7402;'
                : item.bg_color == '#D157FF'
                ? 'background:#D157FF;'
                : 'background:#1079F6;'
            "
          >
            <view class="p_title">{{ item.title }}</view>
            <view class="p_text" v-for="it in item.builds" :key="it.id">{{
              it.title
            }}</view>
          </view>
        </view>
      </view>

      <view class="sou">
        <view class="top">
          <view class="aaa">
            <image
              style="width: 1.5rem; height: 1.5rem"
              src="https://images.sqfcw.com/images/new_icon/hot.png?x-oss-process=style/w_320"
              class="a_img"
            />
            <view class="a_text">大家都在搜</view>
          </view>
        </view>
        <view class="mid">
          <view class="l">———————</view>
          <view class="c">{{ siteName }}</view>
          <view class="r">———————</view>
        </view>

        <view class="down" v-for="(item, index) in list" :key="item.id">
          <view class="d_item">
            <view class="d_left">
              <view
                class="d_num"
                :style="
                  index == 0
                    ? 'background:#FB656A;'
                    : index == 1
                    ? 'background:#FB8968;'
                    : index == 2
                    ? 'background:#FBC365;'
                    : 'background:#D8D8D8;'
                "
                >{{ index + 1 }}</view
              >
              <view class="d_title">{{ item.title }}</view>
            </view>
            <view class="d_right">
              <view class="dd_l">
                <view class="jj">{{ item.price_type }}</view>
                <view class="price2">{{ item.price2 }}</view>
                <view class="price_unit">{{ item.price_unit }}</view>
              </view>
              <view class="dd_r">></view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="showResult" v-if="keywordss">
      <view class="sousuo">
        <view class="ms">
          <view class="m_type">{{ selector[selectorValue] }}</view>
          <view class="m_text">搜索 "{{ value }}"</view>
        </view>
        <view class="go">></view>
      </view>

      <view class="result">
        <view class="newHouse" v-for="item in newHouseList" :key="item.id">
          <view class="n_type"><view class="n_t_type">新房</view></view>
          <view class="n_text">
            <view class="n_title">{{ item.title }}</view>
            <view class="n_address">{{ item.areaname }}{{ item.address }}</view>
          </view>

          <view
            v-if="
              selector[selectorValue] == '新房' ||
              selector[selectorValue] == '小区'
            "
            class="n_right_type1"
            >均价{{ item.build_price }}元/m²</view
          >
          <view
            v-if="
              selector[selectorValue] == '二手房' ||
              selector[selectorValue] == '出租房'
            "
            class="n_right_type2"
            >{{ item.count }}套在售</view
          >
        </view>

        <view class="xiaoqu" v-for="it in xiaoQuList" :key="it.id">
          <view class="x_type"><view class="x_t_type">小区</view></view>
          <view class="x_text">
            <view class="x_title">{{ it.title }}</view>
            <view class="x_address">{{ it.areaname }}{{ it.address }}</view>
          </view>
          <view
            v-if="
              selector[selectorValue] == '新房' ||
              selector[selectorValue] == '小区'
            "
            class="x_right_type1"
            >均价{{ it.avg_price }}元/m²</view
          >
          <view
            v-if="
              selector[selectorValue] == '二手房' ||
              selector[selectorValue] == '出租房'
            "
            class="x_right_type2"
            >{{ it.count }}套在售</view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { nextTick, onMounted, reactive, ref, toRefs, watchEffect } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import { searchList, searchResult } from "../../utils/api";

export default {
  setup() {
    const data = reactive({
      selector: ["新房", "二手房", "出租房", "小区"],
      selectorValue: 0,
      siteName: "",
      tops: [],
      list: [],
      bscroll: 0,
      newHouseList: [],
      xiaoQuList: [],
      keywordss: "",
      value: "",

      handleChange: (e) => {
        data.selectorValue = e.detail.value;
      },
      handleCancel: (e) => {
        console.log("handleCancel", e);
      },
      searchCancel: () => {
        Taro.switchTab({
          url: `/pages/index/index`,
        });
      },
      searchRes: (e) => {
        let keywords = encodeURI(e.target.value);
        let type = Number(data.selectorValue) + 1;

        data.keywordss = keywords;
        data.value = e.target.value;

        searchResult({ keywords, type }).then((res) => {
          data.newHouseList = res.builds;
          data.xiaoQuList = res.list;
        });
      },
    });

    const datas = toRefs(data);

    onMounted(() => {
      searchList().then((res) => {
        data.siteName = res.siteName;
        data.list = res.list;
        data.tops = res.tops;
      });
    });

    return {
      ...datas,
    };
  },
};
</script>
