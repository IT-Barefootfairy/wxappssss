<template>
  <view class="core">
      <AtCard

  title='房源详情'
  isFull="true"
 
>
   <view class='example-item'>
    <AtTextarea
      :value="value1"
      @change="handleChange"
      :maxLength="200"
      placeholder='从房屋本身实际情况出发描述， 如 ：户型结构、采光通风、产权情况、税费明细、附送优惠等。'
    />

  </view>
</AtCard>
<view class="bar">
    <text> 请勿包含手机号、网址、微信等风险隐私信息，违规信息将被下架，严重将封号处理</text>
</view>
<button>确定</button>
  </view>
</template>

<script>
export default {
      data() {
    return {
      value1: '',
    }
  },
  methods: {
    handleChange(value) {
      this.value1 = value
    }
  }

}
</script>

<style>
.core{
    width: 100%;
    height: 1000PX;
  
}
.bar {
    width: 100%;
      padding-right: 35PX;
    padding-left: 15PX;
    font-size:12PX;
    color: #666;
    margin-top: 20PX;
   
}
button {
    width: 80%;
  background: #e4393c;
  font: size 20PX;
  color: #fff;
  font-weight: 800;
  border-radius: 26PX;
  margin-top:50PX;
}

</style>