<template>
  <view>
    <view class="panel__content">
      <AtTabs
        :swipeable="false"
        :current="current1"
        :tabList="tabList1"
        @click="handleClick"
      >
        <AtTabsPane :current="current1" :index="0">
          <Tabsr
            :tabList1="[
              { title: '全部区域' },
              { title: '价格' },
              { title: '距离' },
              { title: '更多' },
            ]"
          >
          </Tabsr>
        </AtTabsPane>
        <AtTabsPane :current="current1" :index="1">
          <view class="tab-content">标签页二的内容</view>
        </AtTabsPane>
        <AtTabsPane :current="current1" :index="2">
          <view class="tab-content">标签页三的内容</view>
        </AtTabsPane>
      </AtTabs>
    </view>
    <map
      id="map"
      style="width: 100%; height: 420px"
      :longitude="longituder"
      :latitude="latitudes"
      scale="14"
      :markers="markers"
      :show-location="true"
      @regionchange="regionchange"
      @markertap="markertap"
      :enableTraffic="true"
      :show-compass="true"
      v-if="flage"
      @bindupdated="bindupdateds"
    />
    <AtActivityIndicator mode="center"></AtActivityIndicator>
    <view class="dits" v-show="isShow">
      <view class="dits_left">
        <image class="left_img" :src="obj.img"></image
      ></view>
      <view class="dits_right">
        <text style="font-size: 15px">{{ obj.title }}</text>
        <text>{{ obj.name }}</text>
        <view
          >均价:
          <text style="font-size: 14px; color: red">{{ obj.price }}</text>
          <text>{{ obj.price_unit }}</text>
        </view>
        <view
          style="display: flex; justify-content: space-between; color: #ccc"
        >
          <text>{{ obj.address }}</text>
          <text>{{ obj.distance }}km</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
/**
 *  style="
            position: relative;
            left: 0;
            top: 0;
            height: 300px;
            background: red;
          "
 */
import { AtActivityIndicator } from "taro-ui-vue3";
import { AtTabs, AtTabsPane } from "taro-ui-vue3";
import Taro from "@tarojs/taro";
import { onMounted, reactive, toRefs, ref } from "vue";
import Tabsr from "../../components/Tabsr.vue";
export default {
  name: "Vue3Index",

  methods: {
    handleClick(value) {
      this.current1 = value;
    },
  },
  setup() {
    let mapKey = `CJABZ-KTGRJ-DUUFO-FUGPF-OCEU5-RBFGG`;
    let flage = ref(false);
    let latitudes = ref(33.961999);
    let longituder = ref(118.275001);
    let isShow = ref(false);

    let data = reactive({
      markers: [],
      setting: {
        enable3D: true,
        enableTraffic: true,
      },
      tabList1: [{ title: "新房" }, { title: "二手房" }, { title: "出租房" }],
      obj: {},
      list: [],
    });
    let markertap = (e) => {
      console.log("markertap:", e);
      console.log(data.list);
      isShow.value = true;
      e.markerId
        ? (data.obj = data.list.filter((item) => {
            return item.id == e.markerId;
          })[0])
        : "";
      console.log(data.obj);
    };

    let regionchange = (e) => {
      if (e.type == "end") {
        longituder.value = e.detail.centerLocation.longitude;
        latitudes.value = e.detail.centerLocation.latitude;
        init();
        flage.value = false;
      }
    };

    let bindupdateds = () => {
      flage.value = false;
      console.log(20);
    };

    let init = async () => {
      let res = await Taro.request({
        url: "http://127.0.0.1:7001/getDizhitu",
        method: "GET",
        dataType: "json",
        data: {
          lat: latitudes.value,
          lng: longituder.value,
          distance: 3,
          type: 1,
        },
      });
      data.list = res.data.data.list;
      res.data.data.list.forEach((item, index) => {

        data.markers.push({
          id: item.id * 1,
          latitude: item.lat * 1, //维度
          longitude: item.lng * 1, //经度
          iconPath: item.img,
          callout: {
            content: `${item.name}\n均价:${item.price}元/m²`,
            bgColor: "rgb(112, 210, 152)",
            color: "#fff",
            fontSize: 14,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "rgb(112, 210, 152)",
            padding: 5,
            display: "ALWAYS",
            textAlign: "center",
          },
        });
      });
      flage.value = true;
    };
    onMounted(async () => {
      init();
    });

    return {
      mapKey,
      ...toRefs(data),
      flage,
      latitudes,
      longituder,
      regionchange,
      bindupdateds,
      markertap,
      isShow,
    };
  },
  components: { AtTabs, AtTabsPane, Tabsr, AtActivityIndicator },
  data() {
    return {
      current1: 0,
    };
  },
};
</script>

<style lang="scss">
page,
view,
text,
swiper,
swiper-item,
image,
navigator {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

page {
  /* 定义主题颜色 */
  --themeColor: #eb4450;
  /* 定义统一字体大小 */
  font-size: 28rpx;
}
.dits {
  width: 100%;
  background: #fff;
  padding: 40px 25px;
  display: flex;

  position: fixed;
  left: 0;
  bottom: 0;
  .dits_left {
    height: 100%;
    margin-right: 20px;
    .left_img {
      width: 250px;
      height: 150px;
    }
  }
  .dits_right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
