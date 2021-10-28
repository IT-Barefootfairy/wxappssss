<template>
 <view class="member">
 <view class="member_img">
<image class="member_img_vip" src="https://images.sqfcw.com/images/new_icon/vip_bg.png?x-oss-process=style/w_320"/>
<view class="member_name">
<view class="memebr_netfriend">
    宿迁房产网网友
</view>
<view class="commenvip">
    <image class="card_littlevip" src="https://images.sqfcw.com/images/new_icon/ic_huiyuanhui@3x.png?x-oss-process=style/w_80"/>
    <text decode="true">&nbsp;普通会员</text>
</view>
</view>
 </view>
<<<<<<< HEAD
 <view class="member_person">
  <view class="member_person_header">
      个人VIP会员
      </view>   
 <view class="member_person_con">
    <view><text class="jxiaohei">个人VIP会员权益:</text>每天发布一条信息;每天可刷新1条信息；总共可发布一条系信息</view>
     <view class="dier">
     升级后可免费查看房源电话
 </view>
 <view class="xufei">请选择续费时长</view>
 <view class="yuan">
     <view>永久</view>
     <view>原价68元</view>
     <view class="qian">￥10</view>
 </view>
 <view class="use">使用金币或余额</view>
 <view class="usemoney">
     <view>使用余额(剩余0.00)</view>
      <view class="member-checkbox" @tap="changeChecked">{{checked?'√':''}}</view>
 </view>
 <view class="kaoyou">还需支付10.00元</view>
 <AtButton type="primary" class="bybtn">去支付</AtButton>
 </view>

 </view>
     </view>  
</template>

<script setup>
import { ref } from 'vue';
import './index.scss';
const checked=ref(false);
const changeChecked=()=>{
    checked.value=!checked.value
=======
     </view>  
</template>

<script>
import './index.scss';
export default {

>>>>>>> bfbdb101e59e66f43bf73666301621c796fbd854
}
</script>

<style>

</style>