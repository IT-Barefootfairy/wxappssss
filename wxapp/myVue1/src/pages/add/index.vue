<template>
  <view class="add">
    <view>
      <AtList>
        <AtListItem
          title="小区"
          note="请选择小区或留空"
          arrow="right"
          @tap="goSearch()"
        />
      </AtList>
    </view>

    <view>
      <view class="example-item">
        <picker
          mode="selector"
          :range="selector"
          :value="selectorValue"
          @change="handleChange"
          @cancel="handleCancel"
        >
          <view class="demo-list-item">
            <AtList>
              <AtListItem
                title="房产类型"
                :note="selector[selectorValue]"
                arrow="right"
              />
            </AtList>
          </view>
        </picker>
      </view>
    </view>

    <view>
      <view class="example-item">
        <picker
          mode="selector"
          :range="selectorer"
          :value="selectorerValue"
          @change="handleChangeA"
          @cancel="handleCancel"
        >
          <view class="demo-list-item">
            <AtList>
              <AtListItem
                title="区域"
                :note="selectorer[selectorerValue]"
                arrow="right"
              />
            </AtList>
          </view>
        </picker>
      </view>
    </view>

    
    <view class="Image" @tap="goAddImage()" v-if="code==1||code==2">
      <view class="Image-btn"> + </view>

      <AtList>
        <AtListItem
          title="上传图片"
          note="只能上传房屋图片，不能含有文字、数字、名片、水印等，所有类别图片总计20张"
          arrow="right"
        />
      </AtList>
    </view>

    <view class="floor" v-if="code==1||code==2">
      <view class="panel__content">
        <view class="example-item">
          <picker
            mode="multiSelector"
            :range="multiSelector"
            :value="mulitSelectorValues"
            @change="handleMulitChange"
            @columnchange="handleColumnChange"
          >
            <view class="demo-list-item">
              <AtList>
                <AtListItem
                  title="户型 | 朝向 | 装修"
                  :note="`${multiSelector[0][mulitSelectorValues[0]]} | ${
                    multiSelector[1][mulitSelectorValues[1]]
                  } | ${multiSelector[2][mulitSelectorValues[0]]}`"
                  arrow="right"
                />
              </AtList>
            </view>
          </picker>
        </view>
      </view>

      <view class="type_bottom">
        <view class="type_bot_left"
          ><view>所在楼层 </view
          ><view><input disabled placeholder="请填写" /></view> 层
        </view>
        <view class="type_bot_right">
          <view>共 </view> <view><input disabled placeholder="请填写" /></view>
          <view>层</view></view
        >
      </view>
    </view>

    <view class="Pifang">
      <AtList>
        <AtListItem title="面积" note="请输入" extraText="m²" />
        <AtListItem title="售价" note="请输入" extraText="万元" />
      </AtList>
    </view>

    <view v-if="code==1||code==2">
      <AtCard title="标签" isFull="true">
        <AtTag
          size="small"
          :class="index === inde ? 'active' : 'tab'"
          @tap="chang(index)"
          v-for="(item, index) in labels"
          :key="index"
          >{{ item.name }}</AtTag
        >
      </AtCard>
    </view>

    <view class="zhineng">
      <AtList>
        <AtListItem title="标题" note="请输入" arrow="right" />
        <AtListItem title="描述" note="请输入" arrow="right" @tap="goCore()" />
      </AtList>
    </view>

    <view class="phone">
      <AtList>
        <AtListItem title="联系人" note="请输入" arrow="right" />
      </AtList>
    </view>

    <view class="wanshan" v-if="code==1||code==2">
      <AtAccordion
        @click="onvalue1"
        title="完善更多信息"
        :open="value1"
        class="with"
      >
        <AtList :hasBorder="false">
          <AtCard title="配套设施" isFull="true">
            <AtTag
              type="primary"
              size="small"
              :class="index === inde ? 'active' : 'tab'"
              @tap="chang(index)"
              v-for="(item, index) in chepeng.rules"
              :key="index"
              >{{ item.name }}</AtTag
            >
          </AtCard>
          <AtCard title="屋内设施" isFull="true">
            <AtTag
              type="primary"
              size="small"
              :class="index === inde ? 'active' : 'tab'"
              @tap="chang(index)"
              v-for="(item, index) in wnsb.rules"
              :key="index"
              >{{ item.name }}</AtTag
            >
          </AtCard>
        </AtList>
      </AtAccordion>
    </view>

    <view class="time">
      <AtCard title="有效期" isFull="true">
        <view class="big"> 30天</view>
      </AtCard>
    </view>

    <view class="days">
      <AtAccordion
        @click="onvalue2"
        title="推广方式"
        :open="value2"
        class="with"
      >
        <AtList :hasBorder="false">
          <view class="stick" v-if="isStick">
            <view class="stick_days">
              <view
                v-for="(item, index) in data"
                :key="index"
                :class="index === ind ? 'addColor' : ''"
                @tap="changeIndex(index)"
                >{{ item }}</view
              >
            </view>
            <view class="stick_mid">
              <view v-if="isDing" class="stick_ding">
                <view
                  class="stick_mid_box"
                  v-for="(item, index) in tops"
                  :key="index"
                  ref="tab"
                >
                  <view class="stick_mid_top">置顶天数</view>
                  <view class="stick_mid_mid">{{ item.name }}</view>
                  <view 
                  
                   :key="index"
                :class="index === indee ? 'aColor' : 'stick_mid_bot'"
                  @tap="changeIndex1(index)">{{ item.money }}</view>
                </view>
              </view>

              <view v-if="isJing" class="stick_ding">
                <view
                  class="stick_mid_box"
                  v-for="(item, index) in jingxuan"
                  :key="index"
                  ref="tabJing"
                >
                  <view class="stick_mid_top">精选刷新次数</view>
                  <view class="stick_mid_mid">{{ item.name }}</view>
                  <view   :class="index === indee ? 'aColor' : 'stick_mid_bot'"
                  @tap="changeIndex1(index)">￥{{ item.money }}</view>
                </view>
              </view>
            </view>
            <view class="stick_bot">再次点击可取消</view>
          </view>
        </AtList>
      </AtAccordion>
    </view>

   <view class='back'></view>
    <view class="vip">
       
      <view class="vip_box">
        <view class="vip_box_top"
          ><view>升级个人vip</view><image src="../../static/add_icon@3x.png"
        /></view>
        <view class="vip_box_mid">支付10元(快)</view>
        <view class="vip_box_bot">本条发布免费</view>
        <image src="../../static/vip_bg@3x.png" class="back_bg" />
      </view>
      <view class="vip_box">
        <view class="vip_box_top"
          ><view>普通会员</view><image src="../../static/add_icon@3x.png"
        /></view>
        <view class="vip_box_mid">支付10.00元(快)</view>
        <view class="vip_box_bot">本条需要付费</view>
        <image src="../../static/cus_bg@3x.png" class="back_bg" />
      </view>
      <view class="vip_box">
        <view class="vip_box_top"
          ><view>委托发布</view><image src="../../static/add_icon@3x.png"
        /></view>
        <view class="vip_box_mid">人工审核上架慢</view>
        <view class="vip_box_bot">委托给经纪人</view>
        <image src="../../static/weituo_bg@3x.png" class="back_bg" />
      </view>
    </view>

    <view class="accept">
      <view class="accept_view">
        <checkbox checked="true" class="checkbox" style=""></checkbox
        ><view>已阅读并接受</view>
        <view class="accept_des">宿迁房产网房源信息发布规则》</view></view
      >
    </view>
    <view class="btn">
      <view class="btn_box">立即发布</view>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import { AtAccordion, AtList, AtListItem } from "taro-ui-vue3";
export default {
  name: "Add",
  data() {
    return {
      code: "",
      indee:-1,
      inde: -1,
      isDing: true,
      isJing: false,
      top: [],
      jingxuan: [],
      ind: 0,
      data: ["置顶", "精选"],
      isStick: true,
      wnsb: [],
      chepeng: [],
      labels: [],
      selector: [],
      selectorer: [],
      selectorValue: 0,
      selectorerValue: 0,
      multiSelector: [
        ["室", "屋", "房"],
        ["朝向", "向南"],
        ["户型", "3室一厅", "四室一厅"],
      ],
      mulitSelectorValues: [0, 1, 2],
      value1: false,
      value2: false,
    };
  },
  methods: {
    handleChange(e) {
      this.selectorValue = e.detail.value;
    },
    handleMulitChange(e) {
      this.mulitSelectorValues = e.detail.value;
    },
    handleChangeA(e) {
      this.selectorerValue = e.detail.value;
    },
    goSearch() {
      Taro.navigateTo({ url: "../add/search/index" });
    },
    goAddImage() {
      Taro.navigateTo({ url: "../add/addimage/index" });
    },
    goCore() {
      Taro.navigateTo({ url: "../add/core/index" });
    },
    onvalue1(val) {
      this.value1 = val;
    },
    onvalue2(val) {
      this.value2 = val;
    },
    changeStick() {
      this.isStick = !isStick;
    },
    changeIndex(index) {
      console.log(index);
      this.ind = index;
      if (index == 0) {
        this.isDing = true;
        this.isJing = false;
      } else if (index == 1) {
        this.isDing = false;
        this.isJing = true;
      }
    },
    chang(index) {
      this.inde = index;
    },
    changeIndex1(index){
      this.indee=index
    }
  },
  onLoad: function () {
    wx.request({
      url: "https://www.sqfcw.com/wapi/release/getReleaseFieldValue.html?parentid=1",
      header: {
        "content-type": "application/json",
        authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcGVuaWQiOjY3OTYzLCJ1aWQiOjY3OTYzLCJ0aW1lIjoxNjM1OTE3Njc2fQ.snPFuh53JT_eFAN9_j2ryXOJvACQsPD_R8jJOyrNyYo",
        cookie:
          "Hm_lvt_b62b1005764f95fe323dcaab3ae37284=1634879076,1634947353,1635072112,1635118067; Hm_lpvt_b62b1005764f95fe323dcaab3ae37284=1635118067",
        from: 3,
        referer: "https://www.sqfcw.com/m/pages/add/detail?catid=1",
      },
      success: (res) => {
        console.log(res);
        //房产类型
        this.selector = res.data.catelist.map((item) => {
          return item.name;
        });
        //小区
        this.selectorer = res.data.area.map((item) => {
          return item.areaname;
        });
        //标签
        this.labels = res.data.labels;
        //配套
        this.chepeng = res.data.otherlist[0];
        this.wnsb = res.data.otherlist[1];
        //更多
        this.tops = res.data.tops;
        this.jingxuan = res.data.jingxuan;
      },
    });
  },
   created () {
    // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
    // 而不是频繁地调用此 API
    this.$instance = Taro.getCurrentInstance()
  },
  mounted () {
    this.code=this.$instance.router.params.code
  },

  components: {
    AtAccordion,
    AtList,
    AtListItem,
  },
};
</script>

<style lang="scss">
.add {
  width: 100%;
  height: 100%;
  background: #ececec;
}
.Image {
  width: 100%;
  height: 120PX;
  background: #fff;
  margin-top: 10PX;
  margin-bottom: 10PX;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.days {
  margin-top: 10PX;
  margin-bottom: 10PX;
}
.Image-btn {
  width: 130PX;
  height: 70PX;
  background: #f3f3f3;
  margin-left: 10PX;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50PX;
  font-weight: bold;
  color: #ccc;
}
.floor {
  margin-bottom: 10PX;
}
.type_bottom {
  width: 100%;
  display: flex;
  background: #fff;
  input {
    width: 70PX;
    margin-left: 30PX;
  }
  .type_bot_left {
    flex: 7;
    display: flex;
    margin-left: 10PX;
  }
  .type_bot_right {
    flex: 3;
    display: flex;
    margin-right: 10PX;
  }
}
.Pifang {
  margin-bottom: 10PX;
}
.tab {
  margin-top: 5PX;
  margin-left: 5PX;
}
.active {
  margin-top: 5PX;
  margin-left: 5PX;
  background: #e4393c;
  color: #fff;
}
.zhineng {
  margin-top: 10PX;
  margin-bottom: 10PX;
}
.phone {
  margin-top: 10PX;
  margin-bottom: 10PX;
}
.wanshan {
  margin-top: 10PX;
  margin-bottom: 10PX;
}
.with {
  background-color: #fff;
}
.time {
  margin-top: 10PX;
  margin-bottom: 10PX;
}
.big {
  width: 80PX;
  height: 40PX【;
  border: solid 1PX #ccc;
  line-height: 40PX;
  border-radius: 10PX;
  text-align: center;
}
.gt {
  width: 32px;
  height: 32px;
}
.promote {
  background-color: #fff;
  width: 100%;
  height: 80px;
  padding: 0 5%;
  line-height: 80px;

  .promote_box {
    display: flex;
    justify-content: space-between;
    .promote_left {
      .ding {
        display: inline-block;
        margin-left: 20px;
        height: 36px;
        width: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 22px;
        border-radius: 4px;
        background-color: #ff656b;
        color: #fff;
      }
      .jing {
        display: inline-block;
        margin-left: 20px;
        height: 36px;
        width: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 22px;
        border-radius: 4px;
        background-color: #00caa7;
        color: #fff;
      }
    }
  }
}
.stick {
  background-color: #fff;
  width: 100%;
  height: 620px;
  .stick_days {
    width: 50%;
    height: 60px;
    display: flex;
    line-height: 60px;
    margin: 0 25%;
    justify-content: space-around;
  }
  .stick_mid {
    height: 500px;
    .stick_ding {
      display: flex;
      flex-wrap: wrap;
      .stick_mid_box {
        width: 28%;
        height: 200px;
        border: 1px solid #d8d8d8;
        border-radius: 8px;
        color: #666;
        margin-left: 13px;
        margin-right: 20px;
        text-align: center;
        margin-top: 20px;
        .stick_mid_top {
          height: 60px;
          text-align: center;
          line-height: 60px;
          color: gray;
          font-size: 30px;
        }
        .stick_mid_mid {
          height: 80px;
          font-size: 50px;
          line-height: 80px;
        }
        .stick_mid_bot {
          height: 60px;
          font-size: 22px;
          width: 100%;
          background-color: #d8d8d8;
          color: #fff;
          line-height: 60px;
        }
         .aColor {
          height: 60px;
          font-size: 22px;
          width: 100%;
          background-color: #e4393c;
          color: #fff;
          line-height: 60px;
        }
      }
    }
  }
  .stick_bot {
    background-color: #fff;
    width: 100%;
    height: 60px;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
    color: #999;
  }
}
.vip {
  background-color: #fff;
  padding: 0 5%;
  width: 100%;
  height: 450px;
  display: flex;
  flex-wrap: wrap;
  .vip_box {
    margin-top: 5%;
    width: 42%;
    height: 180px;
    margin-bottom: 24px;
    margin-right: 5%;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    position: relative;
    .back_bg {
      width: 88px;
      height: 88px;
      position: absolute;
      right: 14px;
      bottom: 20px;
    }
    .vip_box_top {
      font-size: 28px;
      font-weight: 600;
      margin-right: 12px;
      color: #333;
      padding: 20px 0 0 20px;
      display: flex;
      image {
        width: 20px;
        height: 20px;
        padding: 10px 0 0 10px;
      }
    }
    .vip_box_mid {
      font-size: 22px;
      margin: 12px 0;
      color: #333;
      padding: 0 0 0 20px;
    }
    .vip_box_bot {
      font-size: 22px;
      color: #999;
      padding: 0 0 0 20px;
    }
  }
}
.accept {
  width: 100%;
  background: #f5f5f5;
  font-size: 24px;
  height: 50px;
  line-height: 50px;
  .accept_view {
    width: 90%;
    margin: 0 5%;
    display: flex;
    .checkbox {
      width: 58px;
      height: 22px;
      scale: 0.6;
      padding-top: 10px;
    }
    .accept_des {
      color: #666;
      margin-left: 6px;
    }
  }
}
.btn {
  width: 100%;
  height: 150px;
  background: #f5f5f5;
  .btn_box {
    height: 88px;
    line-height: 88px;
    background: #fb656a;
    box-shadow: 0 8px 32px 0 rgb(251 101 106 / 40%);
    border-radius: 44px;
    border-radius: 44px;
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-top: 75px;
  }
}
.addColor {
  color: red;
}
</style>
