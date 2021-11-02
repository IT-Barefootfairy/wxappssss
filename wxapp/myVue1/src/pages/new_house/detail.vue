<template>
  <view class="index">
    <view class="head">
      <swiper class="swiper" :autoplay="true" :interval="3000" :circular="true">
        <swiper-item class="item" v-for="item in headImage" :key="item">
          <image :src="item" alt="" class="img" />
        </swiper-item>
      </swiper>
      <view class="img_num">共{{ buildImgCount }}张</view>
    </view>

    <view class="names">
      <view class="top">
        <view class="name">{{ build.title }}</view>
        <view class="status">{{ build.status_name }}</view>
      </view>
      <view class="down">
        <view class="item" v-for="(item, index) in build_type" :key="index">{{
          item
        }}</view>
      </view>
      <view class="xq">详情 ></view>
    </view>

    <view class="message">
      <view class="jun">
        <view class="num">
          <view class="num_n">{{ build_price_jun }}</view>
          <view class="yuan">元/m²</view>
        </view>
        <view class="text"
          >参考均价
          <image
            class="img"
            style="width: 12px; height: 12px"
            src="../../static/prompt.png"
            alt=""
          />
        </view>
      </view>
      <view class="zong">
        <view class="num">
          <view class="num_n">{{ build_price_zong }}</view>
          <view class="yuan">起</view>
        </view>
        <view class="text">
          <view class="text"
            >参考总价
            <image
              class="img"
              style="width: 12px; height: 12px"
              src="../../static/prompt.png"
              alt=""
            />
          </view>
        </view>
      </view>
      <view class="mj">
        <view class="num">
          <view class="num_n">{{ build_square }}</view>
          <view class="yuan">m²</view>
        </view>
        <view class="text">
          <view class="text">建面范围</view>
        </view>
      </view>
    </view>

    <view class="address">
      <image src="../../static/map.png" alt="" class="map" />
      <view class="position">{{ address }}</view>
      <view class="text">导航 ></view>
    </view>

    <view class="call">
      <view class="left">{{ call_text }}</view>
      <view class="right">
        <view class="btn">获取优惠</view>
        <view class="end_time">结束时间{{ end_time }}</view>
      </view>
    </view>

    <view class="calll">
      <view class="left">
        <view class="click">点击查看售楼处电话</view>
        <view class="text">平台将使用隐私加密 保护您的真实号码</view>
      </view>
      <view class="right">
        <image class="img" src="../../static/209电话-圆框.png" alt="" />
      </view>
    </view>

    <view class="choise">
      <view class="ca">
        <image class="img" src="../../static/browse.png" />
        <view class="texts">认筹开盘通知</view>
      </view>
      <view class="cb">
        <image class="img" src="../../static/data-view.png" />
        <view class="texts">调价通知我</view>
      </view>
    </view>

    <view class="buildmove">
      <view class="top">
        <view class="text">楼盘动态</view>
        <view class="more">更多</view>
      </view>
      <view class="down">
        <view class="new">
          <view class="headr">
            <view class="point"></view>
            <view class="card">咨询</view>
            <view class="time">{{ news.ctime }}</view>
          </view>
          <view class="body">{{ news.title }}</view>
        </view>

        <view class="gf">
          <view class="headr">
            <view class="point"></view>
            <view class="card">官方</view>
            <view class="time">{{ gf.ctime }}</view>
          </view>
          <view class="body">
            <view class="gf_head">
              <!-- <image class="headimg" :src="gf.prelogo" /> -->
              <AtAvatar circle :image="gf.prelogo" class="headimg"></AtAvatar>
              <view class="him_name">{{ gf.cname }}</view>
              <view class="counselor">置业顾问</view>
              <view class="consult">咨询</view>
            </view>
            <view class="gf_body">
              <view class="gf_text">{{ gf.content }}</view>
              <view
                class="gf_imgs"
                v-for="(item, index) in gf_imgs"
                :key="index"
              >
                <image class="img_item" :src="item" />
              </view>
            </view>
          </view>
        </view>

        <view class="open">
          <view class="headr">
            <view class="point"></view>
            <view class="card">开盘</view>
          </view>
          <view class="body">
            <view class="open_head">{{ open.title }}</view>
            <view class="open_body">{{ open.descp }}</view>
          </view>
        </view>

        <view class="demo">
          <view class="headr"
            ><view class="point"></view>
            <view class="card">项目</view>
            <view class="time">{{ build.add_time }}</view>
          </view>
          <view class="body">{{ build.content }}</view>
        </view>

        <view class="pp">
          <view class="headr"
            ><view class="point"></view>
            <view class="card">证件</view>
            <view class="time">{{ zj.tjrq }}</view>
          </view>
          <view class="body">
            <view class="pp_title">{{ zj.xkzh }}</view>
            <view class="pp_text">{{ zj.xmmc }}</view>
          </view>
        </view>

        <view class="sub">
          <view class="text">订阅最新动态</view>
        </view>

        <view class="qun">
          <view class="qun_left">
            <view class="q_l_t">买房，那些楼盘值得购买?</view>
            <view class="q_l_d">
              <view
                class="q_headimg"
                v-for="(item, index) in headimg"
                :key="index"
              >
                <image :src="item" class="q_item" />
              </view>
              <view class="q_text">{{ qun }}人已加入群聊</view>
            </view>
          </view>
          <view class="qun_right">
            <view class="q_r_btn">立即进群</view>
          </view>
        </view>

        <view class="houseType">
          <view class="t_top">
            <view class="t_left">户型图</view>
            <view class="t_right">更多</view>
          </view>
          <view class="t_down">
            <view class="t_s">
              <view
                class="t_item"
                v-for="(item, index) in houseType"
                :key="index"
              >
                <image class="i_img" :src="item.img" />
                <view class="i_desc">{{ item.desc }}</view>
                <view class="i_room">
                  <view class="shi">{{ item.shi }}</view
                  >室 <view class="ting">{{ item.ting }}</view
                  >厅 <view class="wei">{{ item.wei }}</view
                  >卫
                </view>
                <view class="i_price">
                  <view class="yue">约</view>
                  <view class="p_num">{{ item.mianji }}</view>
                  <view class="mm">m²</view>
                  <view class="db">+对比</view>
                </view>
                <view class="i_btn">获取户型报价</view>
              </view>
            </view>
          </view>
        </view>

        <view class="report">
          <view class="r_item">
            <view class="r_top">
              <image
                src="https://images.sqfcw.com/images/newhouse_detail/xiangmuyoushi@3x.png"
                class="icon"
              />
            </view>
            <view class="r_down">
              <view class="r_title">项目优势</view>
              <view class="r_text">优劣势点评</view>
            </view>
          </view>

          <view class="r_item">
            <view class="r_top">
              <image
                src="https://images.sqfcw.com/images/newhouse_detail/huxingfenxi@3x.png"
                class="icon"
              />
            </view>
            <view class="r_down">
              <view class="r_title">户型分析</view>
              <view class="r_text">哪个值得买</view>
            </view>
          </view>

          <view class="r_item">
            <view class="r_top">
              <image
                src="https://images.sqfcw.com/images/newhouse_detail/gongneng@3x.png"
                class="icon"
              />
            </view>
            <view class="r_down">
              <view class="r_title">功能配套</view>
              <view class="r_text">社区内外配套</view>
            </view>
          </view>

          <view class="r_item">
            <view class="r_top">
              <image
                src="https://images.sqfcw.com/images/newhouse_detail/quyufenxi@3x.png"
                class="icon"
              />
            </view>
            <view class="r_down">
              <view class="r_title">区域分析</view>
              <view class="r_text">区位交通教育</view>
            </view>
          </view>
        </view>

        <view class="freeget">免费领取</view>

        <view class="map">
          <view class="m_text">
            <view class="m_left">周边</view>
            <view class="m_right">地图</view>
          </view>
          <map
            class="maps"
            :longitude="build.xzhou"
            :latitude="build.yzhou"
            scale="16"
            :showCompass="true"
            :showScale="true"
            :markers="markers"
            :show-location="true"
            @regionchange="regionchange"
            @markertap="markertap"
          />
        </view>

        <view class="zygw">
          <view class="z_top">
            <view class="z_t_left">置业顾问</view>
            <view class="z_t_right">更多</view>
          </view>
          <view class="z_down" v-for="item in adviserMember" :key="item.id">
            <view class="z_d_item">
              <view class="zd_left">
                <view class="zd_himg"><image :src="item.prelogo" class="zd_himg_s"/></view>
                <view class="zd_text">
                  <view class="zd_text_top">{{item.cname}}</view>
                  <view class="zd_text_down">{{item.traffic_volume}}人咨询过他</view>
                </view>
              </view>
              <view class="zd_right">
                <image src="../../static/message2.png" class="msg"/>
                <image src="../../static/phone2.png" class="phone"/>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";
import "./detail.scss";
import { gethotDetail } from "../../utils/api";
import { AtTimeline, AtAvatar } from "taro-ui-vue3";
import "taro-ui-vue3/dist/style/components/avatar.scss";

export default {
  setup() {
    const data = reactive({
      id: 0,
      headImage: [],
      buildImgCount: 0,
      build: {},
      build_type: [],
      build_price_jun: 0,
      build_price_zong: "",
      build_square: "",
      address: "",
      call_text: "",
      end_time: "",
      news: {},
      gf: {},
      open: {},
      zj: {},
      gf_imgs: [],
      headimg: [],
      qun: 0,
      houseType: [],
      markers: [{
        iconPath: "https://www.sqfcw.com/m/static/icon/center.png",
        id: 0,
        latitude: 33.912608,
        longitude: 118.268841,
        width: 30,
        height: 30
      }],
      adviserMember:[],

      regionchange(e) {
        console.log(e.type);
      },
      markertap(e) {
        console.log("markertap:", e.detail.markerId);
      },
    });

    const datas = toRefs(data);

    onMounted(async () => {
      let { id } = Taro.getCurrentInstance().router.params;
      data.id = Number(id);
      await gethotDetail(data.id).then((res) => {
        console.log(res.headImage, "3----------");
        data.headImage = res.focus;
        data.buildImgCount = res.buildImgCount;
        data.build = res.build;
        data.build_type = res.build.build_type;
        data.build_price_jun = res.build.build_price;
        data.build_price_zong = res.build.reference_price;
        data.build_square = res.build.main_huxing;
        data.address = res.build.address;
        data.call_text = res.build.build_discount.content;
        data.end_time = res.build.build_discount.endtime;
        data.news = res.news;
        data.gf = res.adviser_share[0];
        data.open = res.open;
        data.zj = res.build_ysxk;
        data.gf_imgs = res.adviser_share[0].img;
        data.headimg = res.headImage;
        data.qun = res.build.groupCount;
        data.houseType = res.houseTypePic;
        data.adviserMember=res.mountMembers;
        data.markers[0].latitude=res.build.yzhou;
        data.markers[0].longitude=res.build.xzhou;
      });
    });

    return {
      ...datas,
    };
  },
  components: {
    // AtTimeline,
    AtAvatar,
  },
};
</script>
