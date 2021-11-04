<template>
  <view class="new_house">
    <view class="top"></view>
    <view class="down"></view>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </view>
</template>
<script>
import { reactive,toRefs,onMounted } from 'vue';
import Taro from '@tarojs/taro'
import './index.scss';
import {newHouse} from '../../utils/api'

export default {
  setup () {
    const data=reactive({

    })

    const datas=toRefs(data)

    onMounted(()=>{
      newHouse().then((res)=>{
        console.log(res,'----');
      })
    })

    return {
      ...datas
    }
  },
  onReachBottom() {
    console.log('触底了');
  }
}
</script>
