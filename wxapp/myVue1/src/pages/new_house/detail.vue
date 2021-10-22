<template>
  <view class="index">
    <text>{{ id }}</text>
  </view>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import {gethotDetail} from '../../utils/api'

export default {
  setup() {
    const data = reactive({
      id: 0,
    });

    const datas = toRefs(data);

    onMounted(() => {
      let { id } = Taro.getCurrentInstance().router.params;
      data.id = Number(id);
      gethotDetail(data.id).then((res)=>{
        console.log(res,'3----------');
      })
    });

    return {
      ...datas,
    };
  },
};
</script>
