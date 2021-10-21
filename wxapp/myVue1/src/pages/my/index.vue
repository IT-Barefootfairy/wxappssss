<template>
  <view class="my">
   <view class="header_bg"></view>
   <view class="my_card">
     <view class="card_author">
       <image class="card_img" 
       @tap="goUserInfo"
       src="https://images.tengfangyun.com/images/icon/def_head.jpg?x-oss-process=style/w_80"/>
       <view class="card_msg">
         <view class="card_net">宿迁房产网网友</view>
         <view class="card_people">
           <image class="card_member" src="https://images.sqfcw.com/images/new_icon/ic_huiyuanhui@3x.png?x-oss-process=style/w_80"/>
           普通会员
         </view>
       </view>
        <view class="agent">成为经纪人</view>
     </view>
     <view class="card_foot"> 
       <view class="card_foot_item">
         <view class="shu">10</view>我的积分
       </view>
       <view class="card_foot_item">
         <view class="shu">0</view>金币
       </view>
       <view class="card_foot_item">
         <view class="shu">10</view>信息
       </view>
       <view class="card_foot_item">
         <view class="shu">10</view>浏览历史
       </view>
     </view>
   </view>
   <view class="card_option">

     <view class="option_item">
       <image class="item_img" src="https://images.sqfcw.com/images/new_icon/ic_qiandao2@3x.png?x-oss-process=style/w_8601"/>
       <view class="item_con">签到</view>
     </view>
     <view class="option_item">
       <image class="item_img" src="https://images.sqfcw.com/images/new_icon/ic_qiandao2@3x.png?x-oss-process=style/w_8601"/>
       <view class="item_con">签到</view>
     </view>
     <view class="option_item">
       <image class="item_img" src="https://images.sqfcw.com/images/new_icon/ic_qiandao2@3x.png?x-oss-process=style/w_8601"/>
       <view class="item_con">签到</view>
     </view>
     <view class="option_item">
       <image class="item_img" src="https://images.sqfcw.com/images/new_icon/ic_qiandao2@3x.png?x-oss-process=style/w_8601"/>
       <view class="item_con">签到</view>
     </view>
   </view>
   <view class="my_send">
     <view>
     <view class="send_header">我发布的</view>
     <view class="send_type">
       <view class="send_item">
         <image class="send_item_img" src="https://images.sqfcw.com/images/new_icon/ic_wodechushou@3x.png?x-oss-process=style/w_8601"/>
         <view class="send_item_con">出售</view>
       </view>
       <view class="send_item">
         <image class="send_item_img" src="https://images.sqfcw.com/images/new_icon/ic_wodechushou@3x.png?x-oss-process=style/w_8601"/>
         <view class="send_item_con">出售</view>
       </view>
       <view class="send_item">
         <image class="send_item_img" src="https://images.sqfcw.com/images/new_icon/ic_wodechushou@3x.png?x-oss-process=style/w_8601"/>
         <view class="send_item_con">出售</view>
       </view>
       <view class="send_item">
         <image class="send_item_img" src="https://images.sqfcw.com/images/new_icon/ic_wodechushou@3x.png?x-oss-process=style/w_8601"/>
         <view class="send_item_con">出售</view>
       </view>
     </view></view>
   </view>
   <view class="my_order">
     <view class="order_item">
      <view>订单卡卷</view> 
<text class='dialog-close' decode='true'>&gt;</text>
     </view>
     <view class="order_item">
      <view>订单卡卷</view> 
<text class='dialog-close' decode='true'>&gt;</text>
     </view>
     <view class="order_item">
      <view>订单卡卷</view> 
<text class='dialog-close' decode='true'>&gt;</text>
     </view>
     <view class="order_item">
      <view>订单卡卷</view> 
<text class='dialog-close' decode='true'>&gt;</text>
     </view>
     <view class="order_item">
      <view>订单卡卷</view> 
<text class='dialog-close' decode='true'>&gt;</text>
     </view>
   </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import Taro from '@tarojs/taro'
import './index.scss'
  const goUserInfo=()=>{
    Taro.navigateTo({
      url:'/pages/my/user/userInfo/index'})
  }
  

</script>
