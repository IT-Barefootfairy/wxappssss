<template>
  <view class="index">
    <map
      class="map"
      longitude="118.275001"
      latitude="33.961999"
      scale="14"
      :markers="marker"
      :show-location="true"
      @regionchange="viewChange"
      :enableZoom="false"
    />
  </view>
</template>

<script>
import { onMounted, ref, reactive, toRefs, onUpdated } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import { getMaps } from "../../utils/api";

export default {
  setup() {
    const data = reactive({
      latitude: 0,
      longitude: 0,
      marker: [],

      viewChange: (e) => {
        data.latitude = e.mpEvent.detail.centerLocation.latitude
          ? e.mpEvent.detail.centerLocation.latitude
          : 0;
        data.longitude = e.mpEvent.detail.centerLocation.longitude
          ? e.mpEvent.detail.centerLocation.longitude
          : 0;
        getMaps(data.latitude, data.longitude).then((res) => {
          data.marker=[];
          res.list.forEach((item, index) => {
            data.marker.push({
              id: item.id,
              latitude: Number(item.lat),
              longitude: Number(item.lng),
              iconPath:'',
              width:0,
              height:0,
              callout: {
                content:
                  item.name + item.price_type + item.price + item.price_unit,
                color: "#fff",
                fontSize: 14,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: "#70D298",
                bgColor: "#70D298",
                padding: 5,
                display: "ALWAYS",
                textAlign: "center",
              },
            });
          });
                      console.log(data.marker, "5555");
          console.log(res.list, "第二");
        });
      },
    });

    onMounted(() => {
      getMaps().then((res) => {
        console.log(res, "第一");
      });
    });

    const refData = toRefs(data);
    return { ...refData };
  },
};
</script>
