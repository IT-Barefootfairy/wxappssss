<template>
 <view class="userinfo">
     <view class="userInfo_item">
         <view>头像</view>
         <view class="item_right">
             <image class="item_right_img" src="https://images.tengfangyun.com/images/icon/def_head.jpg?x-oss-process=style/w_120"/>
             <text decode="true">></text>
         </view>
     </view>
     <view class="userInfo_item">
         <view>联系人</view>
         <view class="item_right">
             <view class="item_right_box">
                 <AtInput class="item_right_inp"  placeholder="请输入"/>
             </view>
             <text decode="true">></text>
         </view>
     </view>
     <view class="userInfo_item">
         <view>社区昵称</view>
         <view class="item_right">
             <view class="item_right_box">
                 <AtInput class="item_right_inp"  placeholder="请输入"/>
             </view>
             <text decode="true">></text>
         </view>
     </view>
     <view class="userInfo_item">
         <view>登录密码</view>
         <view class="item_right">
             <view class="item_right_box">
                 <AtInput class="item_right_inp" type="password"  placeholder="请输入"/>
             </view>
             <text decode="true">></text>
         </view>
     </view>
     <view class="userInfo_item">
         <view>手机号码</view>
         <view class="item_right">
             <view class="item_right_box">
                 <AtInput class="item_right_inp"  placeholder="请输入"/>
             </view>
             <view class="tel_change">修改手机号</view>
           
         </view>
     </view> 
      <view> <AtButton type='primary' class="user_sendbtn">立即提交</AtButton></view>
 </view>
</template>

<script>
import './index.scss';
export default {

}
</script>

<style>

</style>