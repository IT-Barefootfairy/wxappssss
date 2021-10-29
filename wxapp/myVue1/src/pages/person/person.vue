<template>
  <view class="person">
    <view class="header">
      <view class="black"></view>
      <view class="card" v-for="(item, index) in personList" :key="index">
        <view class="card_top">
          <image src="../../static/lin.jpeg" class="girls" />
          <view class="text_left">
            <view class="text_top">
              <text>{{ item.cname }}</text>
              <image src="../../static/hg.png" class="huangg" />
              <text>{{ item.adviser_level_name }}</text>
            </view>
            <view class="text_bottom"> 主营楼盘: {{ item.build_title }} </view>
          </view>
        </view>
        <view class="card_bottom_list">
          <view class="text_first">
            <view class="phone">
              <text>浏览量</text>
            </view>
            <view class="weixin">
              <text>咨询量</text>
            </view>
            <view class="more">
              <text>点赞数</text>
            </view>
          </view>
          <view class="text_first2">
            <view class="look_num">
              <text>{{ personListnums.browse }}</text>
            </view>
            <view class="zx_num">
              <text>{{ personListnums.traffic_volume }}</text>
            </view>
            <view class="like_num">
              <text>{{ personListnums.star }}</text>
            </view>
          </view>
          <view class="text_last">
            <view class="photos">
              <view class="many_photos">
                <image src="../../static/lin.jpeg" class="first_photos" />
                <image src="../../static/lin.jpeg" class="two_photos" />
                <image src="../../static/lin.jpeg" class="three_photos" />
                <image src="../../static/lin.jpeg" class="fouth_photos" />
                <image src="../../static/lin.jpeg" class="five_photos" />
              </view>
            </view>
            <text>个性签名: 暂无</text>
            <text>浏览量: {{ personListnums.browse }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
import { getPersons, getPersonsnums } from "../../utils/api";
import Taro from "@tarojs/taro";
import "./person.scss";
export default {
  setup() {
    let dataIndex = reactive({
      adviser: 0,
      id: 0,
      personList: [],
      personListnums: [],
    });
    const refsData = toRefs(dataIndex);

    onMounted(() => {
      //获取id
      let { adviser, id } = Taro.getCurrentInstance().router.params;
      dataIndex.adviser = Number(adviser);
      dataIndex.id = Number(id);
      // console.log(dataIndex.adviser);
      // console.log(dataIndex.id);
      getPersons(id).then((res) => {
        // console.log(res.lists, "555555555555555555555555");
        dataIndex.personList = res.lists;
      });
      getPersonsnums(adviser).then((res) => {
        console.log(res.data, "zzzzzzzzzzzzzzzzzzzzzzzzzzz");
        dataIndex.personListnums = res.data;
      });
    });
    return {
      ...refsData,
    };
  },
};
</script>

<style>
</style>