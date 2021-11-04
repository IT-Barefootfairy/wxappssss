<template>
  <view class="details">
    <view class="header">
      <text>{{ detailsDatatext.nickname }}</text>
    </view>
    <view class="main">
      <view class="main_top">
        <view :class="isFlag ? 'main_top_title' : 'active main_top_title'">
          <image
            :src="detailsDatatext.prelogo"
            class="girls"
            @tap="goPerson(detailsDatatext.adviser, detailsDatatext.id)"
          />
          <view class="text_left">
            <view class="text_top">
              <text>{{ detailsDatatext.nickname }}</text>
              <image src="../../static/hg.png" class="huangg" />
              <text>{{ detailsDatatext.level_name }}</text>
            </view>
            <view class="text_bottom">
              咨询量:{{ detailsDatatext.traffic_volume }}
            </view>
          </view>
        </view>

        <view class="text_bottom_list">
          <view class="text_first">
            <view class="phone">
              <image src="../../static/phone.png" class="phone_img" />
              <text>电话咨询</text>
            </view>
            <view class="weixin">
              <image src="../../static/weixin1.png" class="weixin_img" />
              <text>微信号</text>
            </view>
            <view class="more" @tap="goMores(detailsDatatext.id)">
              <image src="../../static/jia.png" class="more_img" />
              <text>更多</text>
            </view>
          </view>
          <view class="text_last">
            <text @tap="getShow">{{ isFlag ? "展开" : "收起" }}</text>
          </view>
        </view>
      </view>
      <view class="main_bottom">
        <view class="manys">
          <AtLoadMore
            @click="handleClick2"
            :status="status"
            noMoreText="没有更多数据了"
            moreBtnStyle="border:none"
          />
        </view>
        <view
          class="list_person"
          v-for="(item, index) in detailsData"
          :key="index"
        >
          <view class="days">
            <text>{{ item.time }}</text>
          </view>
          <view class="tasks">
            <view class="tasks_left">
              <image :src="newdata.image" class="pictures" />
              <text>{{ newdata.title }}</text>
            </view>
            <view class="tasks_right">
              <image src="../../static/def_head.jpg" class="pictures2" />
            </view>
          </view>
          <view class="tasks2">
            <view class="tasks_left">
              <image :src="detailsDatatext.prelogo" class="pictures" />
            </view>
            <view class="tasks_right">
              <text>{{
                item.type === "text" ? item.content : newdata.title
              }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="footess">
      <view class="footer">
        <view class="footer_top">
          <text @tap="handleUseful">常用语</text>
          <text>电话咨询</text>
          <text>查看微信号</text>
          <text>发送位置</text>
        </view>
        <view class="footer_bottom">
          <view class="footer_bottom_left">
            <image src="../../static/yuyin.png" class="yuyin" />
          </view>
          <view class="footer_bottom_content">
            <input type="text" class="inputs" />
          </view>
          <view class="footer_bottom_right">
            <image src="../../static/smile.png" class="smile" />
          </view>
          <view class="footer_bottom_right2">
            <image src="../../static/jjj.png" class="adds" />
          </view>
        </view>
      </view>
        <view :class="uselfFlag?'active useulf':'useulf'">
          <view class="text_one" v-for="(item,index) in Languages"
          :key="index"
          >
            <text>{{item.content}}</text>
          </view>
          <view class="text_two">
            <view class="addUself">
              <text>+添加常用语</text>
            </view>
            <view class="addAdmin">
              <text>管理</text>
            </view>
            
          </view>
        </view>
    </view>
  </view>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from "vue";
import "./details.scss";
import { getMessage, getMessagetext,getLanguage } from "../../utils/api";
import { AtLoadMore } from "taro-ui-vue3";
import Taro from "@tarojs/taro";

export default {
  setup() {
    let dataIndex = reactive({
      user_id: 0,
      chat_id: "",
      detailsData: [],
      detailsDatatext: [],
      isFlag: false,
      uselfFlag:false,
      newdata: [],
      status: "more",
      Languages:[],
      handleClick2() {
        dataIndex.status = "loading";
        setTimeout(() => {
          dataIndex.status = "noMore";
        }, 2000);
      },
      //展开收起
      getShow: () => {
        dataIndex.isFlag = !dataIndex.isFlag;
      },
      //跳转更多页面
      goMores: (id) => {
        Taro.navigateTo({
          url: `/pages/mores/mores?id=${id}`,
        });
      },
      //跳转个人信息页面
      goPerson: (adviser, id) => {
        console.log(adviser, id, 5555555555555555555);
        Taro.navigateTo({
          url: `/pages/person/person?adviser=${adviser}&id=${id}`,
        });
      },
      
      //点击常用语
      handleUseful:()=>{
        dataIndex.uselfFlag=!dataIndex.uselfFlag;
        console.log('用语');
      }
    });
    const title = " 建发·文瀚府杨洁 ";
    const refsData = toRefs(dataIndex);

    onMounted(() => {
      let { chat_id, user_id } = Taro.getCurrentInstance().router.params;
      dataIndex.user_id = user_id;
      dataIndex.chat_id = chat_id;
      getMessage(chat_id).then((res) => {
        // console.log(res.data.list, "9999999999999999999999999999");
        dataIndex.detailsData = res.data.list;
        dataIndex.newdata = JSON.parse(res.data.list[0].content);
        // console.log(JSON.parse(dataIndex.newdata).title);
      });
      getMessagetext(user_id).then((res) => {
        // console.log(res.data.member, "66666666666666666666666666666666");
        dataIndex.detailsDatatext = res.data.member;
      });
      //常用语
      getLanguage().then((res) => {
        // console.log(res.express_language, "777777777777777777");
        dataIndex.Languages = res.express_language;
      });
      
    });
    return {
      title,
      ...refsData,
    };
  },
  components: {
    AtLoadMore,
  },
};
</script>

<style>
</style>