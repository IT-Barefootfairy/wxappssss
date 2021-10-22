<template>
 <view class="my_vip">
<view class="myvip_msg_box">
 <view class="myvip_user_card">
<view class="myvip_card_top">
<image class="myvip_card_user" src="https://images.tengfangyun.com/images/icon/def_head.jpg?x-oss-process=style/w_120"/>
<view class="commenvip">
    <image class="card_littlevip" src="https://images.sqfcw.com/images/new_icon/ic_huiyuanhui@3x.png?x-oss-process=style/w_80"/>
    <text decode="true">&nbsp;普通会员</text>
</view>
</view>
<view class="myvip_bottom">
    <view>长期有效</view>
    <view class="card_open">立即开通</view>
</view>
 </view>
 <view class="card_rights">权益<text class="VIP" decode="true">&nbsp;VIP</text></view>
</view>
<view class="card_release">
 <view class="release_btn">
     每天可发布一条
 </view>
 <view class="release_btn">
     每天可发布一条
 </view>
</view> <view class="po">总共可发布一条</view>
</view>  
</template>

<script setup>
import './index.scss';
import Taro from '@tarojs/taro';
 const goMy=()=>{
     Taro.navigateTo({ url:'/pages/my/index'})
 }

</script>

<style>

</style>