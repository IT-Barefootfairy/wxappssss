<template>
  <view class="release">
    <view class="header">
      <text class="nav">提示： 请正确选择分类， 分类错误会导致信息下架。</text>
    </view>
    <view class="main">  
      <view class="main-item" @tap="goADD(1)">
        <view class="main-item-left">
          <text class="main-item-l-t">住宅出售</text>
          <text class="main-item-l-b">发布二手房出售信息</text>
        </view>
        <view class="main-item-right">
          <image src="../../image/find1.png" />
        </view>
      </view>
      <view class="main-item"  @tap="goADD(2)">
        <view class="main-item-left">
          <text class="main-item-l-t">住宅出租</text>
          <text class="main-item-l-b">发布房源出租信息</text>
        </view>
        <view class="main-item-right">
          <image src="../../image/find2.png" />
        </view>
      </view>
      <view class="main-item"  @tap="goADD(3)">
        <view class="main-item-left" >
          <text class="main-item-l-t">委托找房</text>
          <text class="main-item-l-b">心仪房源未找到？ 委托意</text>
        </view>
        <view class="main-item-right">
          <image src="../../image/find3.png" />
        </view>
      </view>
      <view class="main-item" @tap="goAdd()">
        <view class="main-item-left">
          <text class="main-item-l-t">买新房 置业顾问帮您忙</text>
          <text class="main-item-l-b">提交购房意向买方顾问全程带看</text>
        </view>
        <view class="main-item-right">
          <image src="../../image/find4.png" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
export default {
  name: "Index",
  methods:{
    goADD(id){
      Taro.navigateTo({url:`../add/index?code=${id}`})
    },
     goAdd(){
      Taro.navigateTo({url:"../counselor/index"})
    }
  },
  components: {},
};
</script>

<style lang="scss" scope>
.header {
  width: 100%;
  height: 40PX;
  line-height: 40PX;
  background: #ffeeef;
  font-size: 15PX;
  text-align: center;
}
.nav {
  color: #ff656b;
}
.main {
  width: 100%;
  margin-top: 15PX;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.main-item {
  width: 90%;
  height: 85PX;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  margin-top: 10PX;
  border-radius: 5PX;
}
.main-item-left {
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 20PX;
  .main-item-l-t {
    font-size: 20PX;
    margin-bottom: 5PX;
    font-weight: 600;
  }
  .main-item-l-b {
    font-size: 15PX;
    color: #ccc;
  }
}
.main-item-right {
  flex: 2;
  image {
    width: 50PX;
    height: 50PX;
    padding-left: 60PX;
  }
}
</style>
