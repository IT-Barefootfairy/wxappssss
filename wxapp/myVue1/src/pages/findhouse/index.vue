<template>
  <view class="index">
    <view class="find_top">
      <image
        src="https://images.sqfcw.com/zhaofang/banner.png?x-oss-process=style/w_400"
        alt=""
        class="find_top_img"
      />
      <view class="find_top_hp">
        <text class="h1">{{ dataL.top_title_first }}</text>
        <text class="p">{{ dataL.top_title_second }}</text>
      </view>
    </view>

    <view class="find_cared">
      <AtList class="find_atlone" @tap="goto()">
        <AtListItem
          title="智能找房"
          note="户型优质·最近降价·必看好房"
          arrow="right"
          thumb="https://images.sqfcw.com/zhaofang/zhinengzhaofangicon.png"
          class="find_atlone"
        />
        <view class="ding">订阅</view>
      </AtList>

      <AtList class="find_atlone">
        <AtListItem
          title="委托找房"
          note="价格不限·区域不限·必看好房"
          arrow="right"
          thumb="https://images.sqfcw.com/zhaofang/weituozhaofangicon.png"
          class="find_atlone"
        />
      </AtList>
    </view>

    <view class="find_br">
      <AtDivider content="猜你喜欢" fontColor="#cccc" lineColor="#ccccc" />
    </view>

    <view class="find_content">
      <view
        v-for="(item, index) in List"
        :key="index"
        class="te"
        @tap="todetail(item.id)"
      >
        <view class="find_img">
          <image :src="item.img" alt="" class="img_find" />
        </view>

        <view class="find_content_text">
          <view class="find_ding_top">
            <view :class="item.areaid === 1 ? 'ding' : ''">
              {{ item.areaid === 1 ? "顶" : "" }}
            </view>
            <view class="title"> {{ item.title }}</view>
          </view>

          <view class="xiao">
            <view class="left">
              <view class="shi"
                >{{ item.shi }}手{{ item.ting }}厅{{ item.wei }}卫|{{
                  item.mianji
                }}㎡</view
              >
            </view>
            <view class="right">{{ item.community_name }}</view>
          </view>

          <view class="biaoqian">
            <view v-for="(item2, index2) in item.label" :key="index2">
              <view
                :calss="[
                  item2.name == '精装'
                    ? 'jing'
                    : item2.name == '满五唯一'
                    ? 'man'
                    : item2.name == '有电梯'
                    ? 'you'
                    : 'xiao',
                ]"
                >{{ item2.name }}</view
              >
            </view>
          </view>
          <view class="foot">
            <view class="wan">
              <view class="ve">
                <view class="danjia">
                  <view class="fangjia">{{ item.fangjia }}</view>
                  <view>万</view>
                  <view class="tiem">{{ item.danjia }}元/㎡</view>
                </view>
              </view>
            </view>
            <view class="time">{{ item.begintime }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { ref, onMounted, toRefs, reactive } from "vue";
import { AtList, AtListItem, AtDivider } from "taro-ui-vue3";
import { getHouseTop, getHouseList, gethomg } from "../../utils/api";
import Taro from "@tarojs/taro";
import "./index.scss";
export default {
  components: {
    AtList,
    AtListItem,
    AtDivider,
  },
  setup() {
    let dataIndex = reactive({
      List: [],
      dataL: {},
      middle_first: "",

      todetail: (id) => {
        Taro.navigateTo({
          url: `/pages/new_house/detail?id=${id}`,
        });
      },

      goto: () => {
        Taro.navigateTo({
          url: `/pages/findhouse/brow/index`,
        });
      },
    });

    const refData = toRefs(dataIndex);
    onMounted(() => {
      getHouseTop().then((res) => {
        // console.log(res, "1111111111111");
        if (res.code === 1 && res.msg === "获取数据成功") {
          dataIndex.dataL = res.data;
          console.log(dataIndex.dataL);
        }
      }),
        gethomg().then((res) => {
          console.log(res);
          if (res.code === 1 && res.msg === "获取数据成功") {
            dataIndex.List = res.list;
            //  console.log(dataIndex.List);
          }
        });
    });
    return {
      ...refData,
    };
  },
};
</script>

