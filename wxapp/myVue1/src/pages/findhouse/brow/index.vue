<template>
  <view class="index">
    <view class="tab">
      <view
        class="tab_list"
        v-for="(item, index) in tabList"
        :key="index"
        @tap="onchengtab(index)"
        :style="{ border: index === this.current1 ? '1PX solid red' : '' }"
      >
        <view class="tab_lists">
          <view class="tab_list_top">
            <view
              class="shu"
              :style="{
                background: item.name === '二手房' ? '#fe6c17' : '#2671ff',
              }"
            >
            </view>
            <view class="name">{{ item.name }}</view>
          </view>
          <view class="tab_bottom">
            <view class="title">{{ item.title }}</view>
            <image :src="item.img" alt="" class="tab_img" />
          </view>
        </view>
      </view>
    </view>
    <view class="index_text" v-if="flag">
      <view class="lei_lsd">
        <AtList>
          <AtListItem
            :hasBorder="true"
            title="类型"
            extraText="出售、出租"
            arrow="right"
            thumb="https://images.sqfcw.com/zhaofang/leixingicon.png"
          >
            <AtActionSheet
              cancelText="取消"
              :isOpened="state.isOpened3"
              @cancel="handleCancel"
              @close="handleClose"
              title="清除位置信息后， 别人将不能查看到你"
            >
              <AtActionSheetItem @click="clickBtn1"> 按钮一 </AtActionSheetItem>
              <AtActionSheetItem @click="clickBtn2"> 按钮二 </AtActionSheetItem>
              <AtActionSheetItem @click="clickBtn3">
                <text class="danger">清除位置信息并退出</text>
              </AtActionSheetItem>
            </AtActionSheet>
          </AtListItem>

          <AtListItem
            :hasBorder="true"
            title="区域/商圈"
            arrow="right"
            thumb="https://images.sqfcw.com/zhaofang/shangquanicon.png"
          />
          <AtListItem
            :hasBorder="true"
            title="小区"
            arrow="right"
            thumb="https://images.sqfcw.com/zhaofang/xiaoquicon.png"
          />
        </AtList>
      </view>
      <view class="lei_sdl">
        <AtList :hasBorder="true">
          <AtListItem
            :hasBorder="true"
            title="出售总价"
            extraText="您一选择区间:不限"
            arrow="right"
            thumb="https://images.sqfcw.com/zhaofang/zongjiaicon.png"
          />
          <AtListItem
            :hasBorder="true"
            title="出售单价"
            extraText="您一选择区间:不限"
            arrow="right"
            thumb="https://images.sqfcw.com/zhaofang/priceicon.png"
          />
          <AtListItem
            :hasBorder="true"
            title="面积"
            extraText="您一选择区间:不限"
            arrow="right"
            thumb="https://images.sqfcw.com/zhaofang/mianjiicon.png"
          />
          <AtListItem
            :hasBorder="true"
            title="户型"
            extraText="5个户型"
            arrow="right"
            thumb="https://images.sqfcw.com/zhaofang/huxingicon.png"
          />
        </AtList>
      </view>
      <view class="index_bottom">
        <AtList :hasBorder="true">
          <AtListItem
            isSwitch
            title="经纪人房源"
            :hasBorder="true"
            thumb="https://images.sqfcw.com/zhaofang/zujinicon.png"
            @switch-change="handleChange"
          />
          <AtListItem
            isSwitch
            title="个人房源"
            :hasBorder="true"
            thumb="https://images.sqfcw.com/zhaofang/mianjiicon.png"
            @switch-change="handleChange"
          />
        </AtList>
      </view>
      <view class="bottom_btn">
        <AtButton type="primary" class="bo_btn">确认</AtButton>
      </view>
    </view>

    <view class="index_text2"  v-if="!flag">
      <view class="text2_top">
        <AtList :hasBorder="true">
          <AtListItem
            :hasBorder="true"
            title="区域/商圈"
            arrow="right"
            thumb="https://images.sqfcw.com/zhaofang/shangquanicon.png"
          />
        </AtList>
      </view>
      <view class="text2_two">
        <AtList :hasBorder="true">
          <AtListItem
            :hasBorder="true"
            title="新房单价"
            extraText="您已选择区间:不限"
            arrow="right"
            thumb="https://images.sqfcw.com/zhaofang/zongjiaicon.png"
          />
        </AtList>
      </view>
    </view>
  </view>
</template>
<script>
import { ref, onMounted, toRefs, reactive } from "vue";
import {
  AtList,
  AtListItem,
  AtActionSheet,
  AtActionSheetItem,
} from "taro-ui-vue3";
import "./index.scss";
export default {
  components: {
    AtList,
    AtListItem,
    AtActionSheet,
    AtActionSheetItem,
  },
  setup() {
    let indexData = reactive({
      name: "AtActionSheetDemo",
      tabList: [
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
      flag: false,
      isOpened1: true,
    });
    const refData = toRefs(indexData);

    return {
      ...refData,
    };
  },

  methods: {
    onchengtab(index) {
      console.log(index);
      this.current1 = index;
      if (this.current1 === 0) {
        this.flag = true;
        // this.flag2=false;
        // console.log(this.flag);
      }
      if (this.current1 === 1) {
        this.flag = false;
        // this.flag2=true;
        // console.log(this.flag);
      }
    },
    handleClose() {
      this.isOpened1 = false
      console.log(123456879);
    },
    showToast (name) {
      Taro.showToast({
        icon: 'none',
        title: name
      })
    },
    clickBtn1() {
      this.showToast('点击了按钮一')
    },
    clickBtn2() {
      this.showToast('点击了按钮二')
    },
  },
};
</script>
