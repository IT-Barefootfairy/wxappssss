<template>
  <view class="author">
    <view class="header">
      <AtList>
        <AtListItem title="头像" arrow="right"  class="HH"/>
      </AtList>
    </view>
    <view  class="name">
        <AtList>
        <AtListItem title="姓名" arrow="right" extraText='请输入' class="HH"/>
      </AtList>
    </view>
     <view  class="weixin">
        <AtList>
        <AtListItem title="微信号" arrow="right" extraText='请输入' class="HH"/>
      </AtList>
    </view>
    <view  class="weixin">
        <AtList>
        <AtListItem title="楼盘信息" arrow="right" extraText='请选择楼盘信息' class="HH"/>
      </AtList>
    </view>
    <view  class="weixin">
        <AtList>
        <AtListItem title="手机号" arrow="right" extraText='12345678910' class="HH"/>
      </AtList>
    </view>
    <view  class="weixin">
        <AtList>
        <AtListItem title="验证码" arrow="right" extraText='请输入验证码' class="HH"/>
      </AtList>
    </view>
    <view  class="weixin">
        <AtList>
        <AtListItem title="服务时间" arrow="right" extraText='全天接听' class="HH"/>
      </AtList>
    </view>
    <view  class="weixin">
        <AtList>
        <AtListItem title="邀请码" arrow="right" extraText='请输入' class="HH"/>
      </AtList>
    </view>
     <view  class="weixin">
        <AtList>
        <AtListItem title="转发标题" arrow="right" extraText='请输入转发标题'  class="HH"/>
      </AtList>
    </view>
    <view  class="weixin">
        <AtList>
  <AtListItem title='个性签名' note='请输入'  class="HI"/>
 
</AtList>
    </view>

    <view class="erweima">
        <text class="ma">微信二维码</text>
        <AtImagePicker
      :files="files"
      @change="onChange"
       class="ma"
    />

    </view>
     <view class="erweima">
        <text  class="ma">自拍照或者工牌照</text>
        <AtImagePicker
      :files="files"
      @change="onChange"
       class="ma"
    />

    </view>
    <button class="btn "> 立即提交 </button>

    <view class="foot">
        <text>注：为了避免他人冒充置业顾问/经纪人我们需要验证您的名片或者工牌，谢谢您的配合</text>
       
    </view>
    <view class="foot">
       
        <text>如果遇到图片无法上传或者其他的问题请联系客服，我们将及时为您解决</text>
    </view>
    
    <view>
        <text class="lan">加客服微信号：sqfcw115</text>
    </view>

  </view>
</template>

<script>
export default {};
</script>

<style class="lang" scope>
.author {
  width: 100%;
  height: 100%;
  background-color: #ececec;
}
.header {
    margin-bottom: 6PX;
}
.name {
    margin-bottom: 6PX;
    
}
.weixin {
     margin-bottom: 6PX;
}
.HH{
    height: 60PX;
}
.HI{
    height: 150PX;
}
.erweima{
    width: 100%;
    height: 150PX;
    margin-bottom: 6PX;
    background-color: #fff;
}
.ma{
    margin-left: 10PX;
}
.btn{
    width: 90%;
    height: 40PX;
   
     font-weight: 700;
    color: #fff;
    background:#FB656A;
    border-radius: 22PX;
    margin-top: 20PX;
    line-height:40PX;
}
.lan{
    color:blue;
    margin-left: 10PX;
    font-size:12PX;
}
.foot{
    width: 100%;
    height: 30PX;
    margin-top: 10PX;
    color:#666;
    margin-left: 10PX;
    margin-right: 10PX;
    font-size:12PX;
}
</style>
