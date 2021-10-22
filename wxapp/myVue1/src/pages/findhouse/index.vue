<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref,onMounted } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('找房')
    return {
      msg
    }
  },
  onPullDownRefresh(){
    console.log(111);
  },
}
</script>
