<template>
  <view class="person">
    <view class="box">
      <view class="header">
        <view class="black"></view>
        <view class="card" v-for="(item, index) in personList" :key="index">
          <view class="card_top">
            <image :src="item.prelogo" class="girls" />
            <view class="text_left">
              <view class="text_top">
                <text>{{ item.cname }}</text>
                <image src="../../static/hg.png" class="huangg" />
                <text>{{ item.adviser_level_name }}</text>
              </view>
              <view class="text_bottom">
                主营楼盘: {{ item.build_title }}
              </view>
            </view>
          </view>
          <view class="card_bottom_list">
            <view class="text_first">
              <view class="phone">
                <text>浏览量</text>
              </view>
              <view class="weixin">
                <text>咨询量</text>
              </view>
              <view class="more">
                <text>点赞数</text>
              </view>
            </view>
            <view class="text_first2">
              <view class="look_num">
                <text>{{ personListnums.browse }}</text>
              </view>
              <view class="zx_num">
                <text>{{ personListnums.traffic_volume }}</text>
              </view>
              <view class="like_num">
                <text>{{ NowStar }}</text>
              </view>
            </view>
            <view class="text_last">
              <view class="photos">
                <view
                  class="many_photos"
                  v-for="(item, index) in personSeelist"
                  :key="index"
                  @tap="goPhotos"
                >
                  <image :src="item.prelogo" class="first_photos" />
                </view>
              </view>
              <text>个性签名: 暂无</text>
              <text>浏览量: {{ personListnums.browse }}</text>
            </view>
          </view>
        </view>
      </view>
      <view class="main">
        <view class="main-top">
          <view class="promptly" @tap="getPromtly">
            <view class="greens">
              <image src="../../static/zf.png" class="zf" />
            </view>
            立即转发
          </view>
          <view class="btnLike" @tap="btnLike(personListnums.id)">
            <view class="reds">
              <image src="../../static/dz.png" class="dz" />
            </view>
            帮我点赞
          </view>
          <view class="poster">
            <view class="blues">
              <image src="../../static/ewm2.png" class="ewmm" />
            </view>
            生成海报
          </view>
        </view>
        <view class="main_houses">
          <text>入驻楼盘</text>
          <view class="houses">
            <image src="../../static/fff.png" class="img_houses" />
          </view>
          <text>绿城·梨园湾小镇</text>
        </view>
        <view class="share">
          <text>TA的分享</text>
          <view class="share_text">
            <view
              class="share_text_content"
              v-for="(item, index) in personList"
              :key="index"
            >
              <view class="share_left">
                <view class="share_left_text1">
                  {{ item.ctime.slice(6, 7) }}月
                </view>
                <view class="share_left_text2">
                  {{ item.ctime.slice(5, 10) }}
                </view>
              </view>
              <view class="share_right">
                <view class="share_right_text">
                  <view class="share_right_text1">
                    <view class="share_right_text1_matter">
                      <view class="share_right_text1_zhen">
                        {{ item.build_title }}
                      </view>
                      <view class="share_right_text1_zan">
                        <image src="../../static/zana.png" class="img_zana" />
                        <text>3</text>
                      </view>
                    </view>
                  </view>
                  <view class="share_right_text2">
                    {{ item.content }}
                  </view>
                </view>
                <view class="share_right_img">
                  <view
                    :class="
                      item.attached.length == 1
                        ? 'share_right_img_item_active'
                        : 'share_right_img_item'
                    "
                    v-for="(it, ind) in item.attached"
                    :key="ind"
                  >
                    <image
                      :src="it.path"
                      :class="
                        item.attached.length == 1
                          ? 'img_share_active'
                          : 'img_share'
                      "
                    />
                  </view>
                </view>
                <view class="videos">
                  <video
                    id="video"
                    src="https://images.sqfcw.com/attachment/builds/20210426/cd3d1a902cd9af5645e24ed806d775ef95767d7d.mp4"
                    poster="/m/static/js/index.b0b74cf5.js"
                    :showCenterPlayBtn="true"
                    initial-time="0"
                    :controls="true"
                    :autoplay="false"
                    :loop="false"
                    :muted="false"
                  />
                </view>
              </view>
            </view>
          </view>
        </view>
        <!-- 立即转发 -->
        <view
          @tap="closeDialog"
          :class="dialogFlag ? 'active zfDialog' : 'zfDialog'"
        >
          <view class="Dialog_shares" @tap="getShares">
            <view class="share_of">
              <view class="circle_of_friends" @tap="btnShare">
                <view class="backs">
                  <image src="../../static/xq.png" class="xq" />
                </view>
                <view class="xqtext">分享到朋友圈</view>
                <AtToast
                  :isOpened="isOpened"
                  text="复制成功，去发送给好友吧"
                  @close="getCloses"
                  :icon="icon"
                ></AtToast>
              </view>
              <view class="share_of_friends" @tap="btnFirends">
                <view class="backs">
                  <image src="../../static/wxdd.png" class="xq" />
                </view>
                <AtToast
                  :isOpened="isOpened"
                  text="复制成功，去发送给好友吧"
                  :icon="icon"
                ></AtToast>
                <view class="xqtext">分享给好友</view>
              </view>
              <view class="text_of_friends" @tap="getText">
                <view class="backs">
                  <image src="../../static/fz.png" class="xq" />
                </view>
                <view class="xqtext">复制文本</view>
              </view>
              <view class="porst_of_friends">
                <view class="backs">
                  <image src="../../static/ewm2.png" class="xq" />
                </view>
                <view class="xqtext">生成海报</view>
              </view>
            </view>
            <view class="cancels" @tap="cloaseTan"> 取消 </view>
          </view>
        </view>
      </view>
      <!-- 轻提示 -->
      <view>
        <AtToast
          :isOpened="isOpened"
          :text="stars ? '取消点赞成功' : '点赞成功'"
          @close="getCloses"
          :icon="icon"
        ></AtToast>
      </view>
    </view>
    <view class="footer">
      <view class="footer_content">
        <view class="pending" @tap="goDetail"> 在线咨询 </view>
        <view class="phoneing"> 电话咨询 </view>
      </view>
    </view>
  </view>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
import { getPersons, getPersonsnums, getLike } from "../../utils/api";
import Taro from "@tarojs/taro";
import { AtToast } from "taro-ui-vue3";
import copy from "copy-to-clipboard";
import "./person.scss";
import "taro-ui-vue3/dist/style/components/toast.scss";
export default {
  setup() {
    let dataIndex = reactive({
      adviser: 0,
      id: 0,
      personList: [],
      personListnums: [],
      personSeelist: [],
      NowStar: 0,
      dialogFlag: false,
      isOpened: false,
      status: "",
      stars: false,
      a: "",
      b: "",
      //立即转发
      getPromtly: () => {
        dataIndex.dialogFlag = true;
      },
      //分享朋友圈
      btnShare: () => {
        dataIndex.isOpened = true;
      },
      //复制文本
      getText: () => {
        console.log(11111);
        // 显示消息提示框
        Taro.showToast({
          title: "复制成功",
        });
        //设置系统剪贴板的内容
        Taro.setClipboardData({
          data: "顾问名称：梨园湾-韩丹，入驻楼盘：绿城·梨园湾小镇",
          success: function (res) {
            Taro.getClipboardData({
              success: function (res) {
                console.log(res.data); // data
              },
            });
          },
        });
      },
      getCloses: () => {
        dataIndex.isOpened = false;
        // console.log("刚回家看了");
      },
      //分享给好友
      btnFirends: () => {
        dataIndex.isOpened = true;
      },
      getShares: (e) => {
        //取消冒泡
        e.stopPropagation();
      },
      //关闭弹框
      closeDialog: () => {
        dataIndex.dialogFlag = false;
      },
      cloaseTan: () => {
        dataIndex.dialogFlag = false;
      },
      goPhotos: () => {
        Taro.navigateTo({
          url: `/pages/photos/photos`,
        });
      },
      //在线咨询
      goDetail: () => {
        Taro.navigateBack({
          delta: 1, //返回上一级页面
        });
      },
      //点赞
      btnLike: (id) => {
        dataIndex.stars = !dataIndex.stars;
        // console.log(dataIndex.stars,'bbbbbbbbbbbbb');
        getLike(id).then((res) => {
          // console.log(id, "456");
          // console.log(res, "pppppppppppppp");
          dataIndex.isOpened = !dataIndex.isOpened;
          dataIndex.NowStar = res.NowStar;
        });
      },
    });
    const refsData = toRefs(dataIndex);

    onMounted(() => {
      //获取id
      let { adviser, id, ids } = Taro.getCurrentInstance().router.params;
      dataIndex.adviser = Number(adviser);
      dataIndex.id = Number(id);
      // console.log(dataIndex.adviser);
      // console.log(dataIndex.id);
      getPersons(id).then((res) => {
        // console.log(res, "555555555555555555555555");
        dataIndex.personList = res.lists;
      });
      getPersonsnums(adviser).then((res) => {
        // console.log(res.data[0].id, "zzzzzzzzzzzzzzzzzzzzzzzzzzz");
        getLike(res.data[0].id).then((res) => {
          console.log(res, 23233);
          dataIndex.NowStar = res.NowStar;
        });
        dataIndex.personListnums = res.data[0];
        console.log(dataIndex.personListnums, "eeeeeee");
        dataIndex.personSeelist = res.seelist;
      });
    });
    return {
      ...refsData,
    };
  },
  components: {
    AtToast,
  },
};
</script>

<style>
</style>