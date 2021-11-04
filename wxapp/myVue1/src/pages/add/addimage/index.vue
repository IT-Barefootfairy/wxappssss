<template>
  <view class="addimage">
    <view class="nav">
      <view class="nav-font">
        <view><text>上传图片/视频</text><text class="Red">小区图库</text></view>
        <view class="Num">最多上传10张0/10</view>
      </view>
       <view class="nav-Image">
     <AtImagePicker
        multiple
      length="5"
      :files="files"
      @change="onChange"
      @fail="onFail"
      @image-click="onImageClick"
      class="up"
    />
  </view>
    </view>
    <button>完成</button>
  </view>
</template>

<script >
import { AtImagePicker } from 'taro-ui-vue3'
export default {
    name: 'AtImagePickerDemo',
  components: { AtImagePicker },
methods:{
     onChange (files) {
      this.files = files
    },
    onFail (mes) {
      console.log(mes)
    },
    onImageClick (index, file) {
      console.log(index, file)
    }
  
}
};
</script>

<style scope>

.nav {
  width: 100%;
  height: 200PX;
  background: #fff;
}
.nav-font {
  width: 100%;
  height: 40PX;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.Red {
  font-size: 12PX;
  color: #e4393c;
  margin-left: 5PX;
}
.Num {
  font-size: 10PX;
  color: #ccc;
}
.nav-Image {
 
  margin-left: 35PX;
  margin-top: 15PX;
}
.up{
  width: 500PX;
  height: 500PX;
}
button {
  width: 80%;
  background: #e4393c;
  font: size 20PX;
  color: #fff;
  font-weight: 800;
  border-radius: 26PX;
}
</style>
