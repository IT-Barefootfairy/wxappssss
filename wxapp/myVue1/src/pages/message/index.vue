<template>
  <view class="index">
    <view class="main">
      <view class="main_top">
        <view class="header">
          <image src="../../static/24gf-trash2.png" class="trash" />
          <text>
            {{ del }}
          </text>
          <text>{{ msg }}</text>
        </view>
        <view class="save">
          <text>关注宿迁房产网公众号可随时接收聊天消息</text>
          <text @tap="getSave">关注</text>
        </view>
        <view class="inputs">
          <image src="../../static/sou.png" class="searchs" />
          <input type="text" placeholder="请输入昵称或手机号" @input="getInput"/>
        </view>
      </view>

      <!-- 切换 -->
      <view class="panel__content">
        <AtTabs
          :swipeable="false"
          :current="current1"
          :tabList="tabList1"
          @click="handleClick"
        >
          <AtTabsPane :current="current1" :index="0">
            <view
              class="tab-content"
              v-for="(item, index) in firends"
              :key="index"
              @tap="goDetails(item.chat_id, item.user_id)"
            >
              <view class="tab_text">
                <view class="img_girls">
                  <image :src="item.headimage" class="girls" />
                </view>

                <view class="text_left">
                  <view class="text_top">
                    <view class="text_top_first">
                      <view class="text_top_name">
                        {{ item.nickname }}
                      </view>
                      <text
                        :class="
                          item.role == 2
                            ? 'oranges'
                            : item.role == 3
                            ? 'active'
                            : ''
                        "
                      >
                        {{ item.alias_name }}
                      </text>
                    </view>
                    <view class="text_top_second">
                      <text>{{ item.chat.time }}</text>
                    </view>
                  </view>
                  <view class="text_bottom">{{ item.unread }}</view>
                </view>
              </view>
            </view>
          </AtTabsPane>
          <AtTabsPane :current="current1" :index="1">
            <view
              class="tab-content2"
              v-for="(item, index) in Fangfirends"
              :key="index"
            >
              <view class="tab_text">
                <view class="img_girls">
                  <image :src="item.prelogo" class="girls" />
                </view>

                <view class="text_left">
                  <view class="text_top">
                    <text>{{ item.cname }}</text>
                    <text>{{ item.time }}</text>
                  </view>
                  <view class="text_bottom">{{ item.last_desc }}</view>
                </view>
              </view>
            </view>
          </AtTabsPane>
          <AtTabsPane :current="current1" :index="2">
            <view class="tab-content">
              <view class="black"> 黑名单是空空如也~~ </view>
            </view>
          </AtTabsPane>
        </AtTabs>
      </view>
      <!-- 弹框 -->
      <view :class="isVisiable ? 'active dialog' : 'dialog'">
        <view class="tan">
          <canvas
            style="width: 250px; height: 250px; top: 8%; left: 11%"
            canvas-id="myQrcode"
          >
          </canvas>
          <image src="../../static/homesss.png" class="ewm" />
          <text>长按保存图片</text>
          <text>相册选取，识别关注</text>
        </view>
        <view class="close" @tap="getClose"> × </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getPerson, getFangPerson } from "../../utils/api";
import drawQrcode from "weapp-qrcode";
import { AtTabs, AtTabsPane } from "taro-ui-vue3";
import { onMounted, reactive, ref, toRefs } from "vue";
import "taro-ui-vue3/dist/style/components/tabs.scss";
import Taro from "@tarojs/taro";
import "./index.scss";

export default {
  setup() {
    let dataIndex = reactive({
      current1: 0,
      firends: [],
      Fangfirends: [],
      isVisiable: false,
      tabList1: [{ title: "聊天" }, { title: "访客" }, { title: "黑名单" }],
      keywords:'',
      
      handleClick: (value) => {
        dataIndex.current1 = value;
      },
      getSave: () => {
        dataIndex.isVisiable = true;
      },
      getClose: () => {
        dataIndex.isVisiable = false;
      },
      goDetails: (chat_id, user_id) => {
        // console.log(chat_id,, 1111111111111111);
        Taro.navigateTo({
          url: `/pages/details/details?chat_id=${chat_id}&user_id=${user_id}`,
        });
      },
      getInput:(e)=>{
         getPerson(e.target.value).then((res)=>{
              dataIndex.firends=[];
              dataIndex.firends=res.data.friends;
         })
          console.log(e.target.value);
      }
    });
    const msg = ref("消息");
    const del = ref("清除未读");
    const refData = toRefs(dataIndex);
    onMounted(() => {
      getPerson(dataIndex.keywords).then((res) => {
        console.log(res.data.friends, "1111111111111");
        dataIndex.firends = res.data.friends;
      });
      getFangPerson().then((res) => {
        // console.log(res.data.list, "222222222222222");
        dataIndex.Fangfirends = res.data.list;
      });
      
      drawQrcode({
        width: 250,
        height: 250,
        canvasId: "myQrcode",
        text: "https://music.163.com/",
      });
    });
    return {
      msg,
      del,
      ...refData,
    };
  },
  components: {
    AtTabs,
    AtTabsPane,
  },
};
</script>
