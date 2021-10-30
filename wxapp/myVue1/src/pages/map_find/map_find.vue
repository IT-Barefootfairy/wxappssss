<template>
  <view class="index">
    <map
    class="map"
    longitude="118.275001"
    latitude="33.961999"
    scale="14"
    :show-location="true"
    @regionchange="viewChange"
  />
  </view>
</template>

<script>
import { onMounted, ref, reactive, toRefs, onUpdated } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import { getMaps } from "../../utils/api";

export default {
  setup () {
    const data=reactive({
        latitude:0,
        longitude:0,

      viewChange:(e)=>{
        data.latitude=e.mpEvent.detail.centerLocation.latitude;
        data.longitude=e.mpEvent.detail.centerLocation.longitude;
        getMaps(data.latitude,data.longitude).then((res)=>{
          console.log(res,'第二');
        })
      }
    });

    onMounted(()=>{
      getMaps().then((res)=>{
        console.log(res,'第一');
      })
    });

    const refData = toRefs(data);
    return {...refData}
  },
}
</script>
