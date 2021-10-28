<template>
  <view class="panel__content">
    <AtTabs
      :swipeable="false"
      :current="current1"
      :tabList="tabList1"
      
      @click="handleClick"
    >
      <AtTabsPane :current="current1" :index="0">
        <view class="tab-content">标签页一的内容</view>
      </AtTabsPane>
      <AtTabsPane :current="current1" :index="1">
        <view class="tab-content">标签页二的内容</view>
      </AtTabsPane>
    </AtTabs>
  </view>
</template>
<script>
import { ref, onMounted, toRefs, reactive } from "vue";
import { AtList, AtListItem } from "taro-ui-vue3";
import "./index2.scss";
export default {
  components: {
    AtList,
    AtListItem,
  },
  setup() {
    let indexData = reactive({
      tabList1: [
       {
          name: "二手房",
          title: "海量真房源",
          img: "https://images.sqfcw.com/zhaofang/ic_ershou@2x.png",
        },
        {
          name: "新房",
          title: "发现好楼盘",
          img: "https://images.sqfcw.com/zhaofang/ic_xinfang@2x.png",
        },
      ],
      current1: 0,
    });
    const refData = toRefs(indexData);

    return {
      ...refData,
    };
  },
  methods: {
    handleClick(value) {
      this.current1 = value;
    },
  },
};
</script>
