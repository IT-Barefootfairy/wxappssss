<template>
  <view class="index">
    <view class="panel__content">
      <AtTabs
        :animated="false"
        :current="current"
        :tabList="[{ title: '登录' }, { title: '注册' }]"
        @click="handleClick"
      >
        <AtTabsPane :current="current" :index="0">
          <view style="padding: 50px 50px; background-color: #fafbfc; margin-top:15PX" class="de">
            <view class="deng">
              <AtForm >
                <AtInput
                  name="value1"
                  type="text"
                  placeholder="请输入昵称或手机号"
                  :value="value1"
                  @change="handleChange"
                  maxLength="100"
                />
                <AtInput
                  name="value3"
                  type="password"
                  placeholder="请输入密码,密码不能少于10位数"
                  :value="value3"
                  @change="handleChange"
                />
              </AtForm>
            </view>

            <view class="page-section">
            <view class="radio">
               <view class="yu">
                    <view class="yuan" @click="handleChange2"></view>
               </view>
                <view class="ytext">我已同意《宿迁房产隐私政策》及《宿迁房产网用户服务协议》</view>
            </view>
            </view>
          </view>
        </AtTabsPane>
        <AtTabsPane :current="current" :index="1">
          <view
          class="de"
            style="
              padding: 100px 50px;
              background-color: #fafbfc;
              text-align: center;margin-top:15PX;
            "
            >标签页二的内容</view
          >
        </AtTabsPane>
      </AtTabs>
    </view>
  </view>
</template>
<script>
import { AtTabs, AtTabsPane, AtInput, AtForm, AtCheckbox } from "taro-ui-vue3";
import "./index.scss";
export default {
  components: {
    AtTabs,
    AtTabsPane,
    AtInput,
    AtForm,
    AtCheckbox,
  },
  data() {
    return {
      current: 0,
      checkedList: ["list1"],
      flag1:false,
      list: [
        {
          value: "yuche",
          text: "yuche",
          checked: false,
        }
      ],
    };
  },
  methods: {
    handleClick(value) {
      this.current = value;
    },
    handleChange(value) {
      this.checkedList = value;
    },
      handleChange2() {
        this.flag1=!this.flag1
        console.log(this.flag1);
    }
  },
};
</script>
