<template>
  <button>111</button>
</template>
<script>
import { onMounted, ref, reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import { getIndex } from "../../utils/api";

export default {
  setup() {
    const dataIndex = reactive({
      nav: [],

      onSwiper: (swiper) => {
        console.log(swiper);
      },

      onSlideChange: () => {
        console.log("slide change");
      },

      btn: () => {
        console.log("-----");
      },
    });

    const refData = toRefs(dataIndex);

    const btns = () => {
      console.log(1111);
    };

    return {
      ...refData,
      btns,
    };
  },
  onPullDownRefresh () {
    console.log(111);
  },
};

onMounted(() => {
  console.log(1);
  getIndex().then((res) => {
    console.log(res.navs.nav, "------");

    // dataIndex.nav = res.navs.nav;
  });
});
</script>

