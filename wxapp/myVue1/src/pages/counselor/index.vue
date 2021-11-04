<template>
  <view>
    <view class="nav-input">
      <AtSearchBar
        :value="value1"
        @change="onChange.bind(this, 'value1')"
        @action-click="onActionClick"
        class="nav-input-a"
      />
    </view>
    <view>
      <image src="../../TabBarIcon/bg1.png" class="bg" />
    </view>
    <view>
      <view class="panel__content">
        <AtTabs
          :swipeable="false"
          :current="current1"
          :tabList="tabList1"
          @click="handleClick"
        >
          <AtTabsPane :current="current1" :index="0">
            <view class="tab-content">
              <view v-for="(item, index) in list" :key="index" class="item-nav">
                <view>
                  <image :src="item.prelogo" class="tou" />
                </view>
                <view>
                  <view>{{ item.cname }}</view>
                  <view class="small">浏览量 {{ item.browse }}</view>
                  <view class="small">{{ item.build_names }}</view>
                </view>
              </view>
            </view>
          </AtTabsPane>
          <AtTabsPane :current="current1" :index="1">
            <view class="tab-content">
              <view v-for="(item, index) in list" :key="index" class="item-nav">
                <view>
                  <image :src="item.prelogo" class="tou" />
                </view>
                <view>
                  <view>{{ item.cname }}</view>
                  <view class="small">浏览量 {{ item.browse }}</view>
                  <view class="small">{{ item.build_names }}</view>
                </view>
              </view>
            </view>
          </AtTabsPane>
          <AtTabsPane :current="current1" :index="2">
            <view class="tab-content">
              <view v-for="(item, index) in list" :key="index" class="item-nav">
                <view>
                  <image :src="item.prelogo" class="tou" />
                </view>
                <view>
                  <view>{{ item.cname }}</view>
                  <view class="small">浏览量 {{ item.browse }}</view>
                  <view class="small">{{ item.build_names }}</view>
                </view>
              </view>
            </view>
          </AtTabsPane>
        </AtTabs>
      </view>
    </view>

    <button class="btn-go" @tap="goAuthor()">立即入驻</button>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
export default {
  data() {
    return {
      list: [],
      current1: 0,
      tabList1: [
        { title: "优质企业顾问" },
        { title: "资讯榜" },
        { title: "新人榜" },
      ],
    };
  },
  methods: {
    goAuthor() {
      Taro.navigateTo({ url: "../counselor/author/index" });
    },
    handleClick(value) {
      this.current1 = value;
    },
  },
  onLoad: function () {
    wx.request({
      url: "https://www.sqfcw.com/wapi/adviser/index.html?page=0&rows=10&type=1&searchtxt=",
      header: {
        "content-type": "application/json",
        authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcGVuaWQiOjY3OTYzLCJ1aWQiOjY3OTYzLCJ0aW1lIjoxNjM1OTE3Njc2fQ.snPFuh53JT_eFAN9_j2ryXOJvACQsPD_R8jJOyrNyYo",
        from: 3,
        referer: "https://www.sqfcw.com/m/pages/consultant/consultant",
      },
      success: (res) => {
        this.list = res.data.data;
        console.log(this.list);
      },
    });
  },
};
</script>

<style>
.btn-go {
  position: fixed;
  bottom: 20PX;
  width: 180PX;
  height: 44PX;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  line-height: 44PX;
  font-size: 16PX;
  border-radius: 22PX;
  border-radius: 22PX;
  font-weight: 700;
  color: #fff;
  background: #fb656a;
}
.bg {
  width: 100%;
  background: #fb656a;
}
.nav-input {
  background: #fb656a;
}
.nav-input-a {
  background: #fb656a;
}
.tou {
  width: 50PX;
  height: 50PX;
  border-radius: 50%;
  margin-right: 15PX;
}
.item-nav {
  width: 100%;
  height: 100PX;
  display: flex;
  align-items: center;
  margin-left: 30PX;
}
.small {
  font-size: 12PX;
  color: #666;
}
</style>
