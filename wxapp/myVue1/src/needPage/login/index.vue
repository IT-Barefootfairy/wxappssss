<template>
  <view class="index">
    <view class="log_tab">
      <view
        class="tabs"
        v-for="(item, index) in TabList"
        :key="index"
        @tap="onchengtab(index)"
        >{{ item.title }}</view
      >
    </view>

    <view class="log_deng" v-if="flag1">
      <view class="inp_log1">
        <AtInput
          name="value1"
          :border="false"
          type="phone"
          placeholder="请输入手机号手机号码"
          :value="value1"
          @change="handleChange"
          :style="{
            borderBottom: '1px solid #ccc',
            width: '86%',
            margin: 'auto',
            color: 'block',
          }"
          placeholderStyle="color:#aaa;padding-left:10PX;"
        />
      </view>

      <view class="inp_log2">
        <AtInput
          name="value2"
          type="password"
          placeholder="密码不能少于10位数"
          :value="value2"
          @change="handleChange"
          :style="{
            borderBottom: '1px solid #ccc',
            width: '86%',
            margin: 'auto',
          }"
          placeholderStyle="color:#aaa;padding-left:10PX;"
        />
      </view>
      <!-- 第三方按钮 -->
      <view class="radio2">
        <at-checkbox
          :options="checkboxOption"
          :selectedList="checkedList"
          @change="handleChange"
        />
      </view>

      <view class="btn">
        <view class="btn1">
          <AtButton
            type="primary"
            @click="handleClick1({ name: value1, pwd: value2 })"
            >登录</AtButton
          >
        </view>
        <view class="btn2">
          <AtButton type="secondary" @click="(e) => handleClick('secondary')"
            >第三方登录</AtButton
          >
        </view>
      </view>

       <view class="bottom_log">
        <view class="zhao">找回密码</view>
        <view class="zhu">注册账号</view>
      </view>

     
    </view>

    <!-- 手验证登录 -->
    <view class="log_zhu" v-if="!flag1">
      <view class="inp_log1">
        <AtInput
          name="value1"
          :border="false"
          type="phone"
          placeholder="请输入手机号手机号码"
          :value="value6"
          @change="handleChange1"
          :style="{
            borderBottom: '1px solid #ccc',
            width: '86%',
            margin: 'auto',
            color: 'block',
          }"
          placeholderStyle="color:#aaa;padding-left:10PX;"
        />
      </view>

      <!-- 验证码 -->
      <view class="inp_log3">
        <AtInput
          type="text"
          maxLength="4"
          placeholder="验证码"
          :value="value"
          @change="handleChange"
           :style="{
            borderBottom: '1px solid #ccc',
            width: '86%',
            margin: 'auto',
          }"
          placeholderStyle="color:#aaa;padding-left:10PX;"
        >
          <Image src="" />
        </AtInput>
      </view>

      <view class="inp_log2">
         <AtInput
          type="text"
          maxLength="4"
          placeholder="验证码"
          :value="value"
          @change="handleChange"
           :style="{
            borderBottom: '1px solid #ccc',
            width: '86%',
            margin: 'auto',
          }"
          placeholderStyle="color:#aaa;padding-left:10PX;"
        >
          <text>发送验证码</text>
        </AtInput>
      </view>
      <view class="radio2">
        <at-checkbox
          :options="checkboxOption"
          :selectedList="checkedList"
          @change="handleChange3"
        />
      </view>

      <view class="btn">
        <view class="btn1">
          <AtButton type="primary" @click="handleClick1({ name: 1, key: 3 })"
            >登录</AtButton
          >
        </view>
        <view class="btn2">
          <AtButton type="secondary" @click="(e) => handleClick('secondary')"
            >第三方登录</AtButton
          >
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { AtForm, AtInput, AtButton, AtCheckbox,AtMessage } from "taro-ui-vue3";
import Taro from "@tarojs/taro"
import "./index.scss";
export default {
  name: "AtFormDemo",
  components: {
    AtForm,
    AtInput,
    AtButton,
    AtCheckbox,
    AtMessage
  },
  data() {
    return {
      current: 0,
      flag1: true,
      TabList: [{ title: "登录登录" }, { title: "验证码登录" }],
      checkedList: ["list1"],
      checkboxOption: [
        {
          value: "list1",
          label:
            "我已阅读并同意《宿迁房产网隐私政策》及《宿迁房产网用户服务协议》",
        },
      ],
    };
  },
  methods: {
    onchengtab(index) {
      console.log(index);
      if (index === 0) {
        this.flag1 = true;
        console.log(this.flag1);
      } else if (index === 1) {
        this.flag1 = false;
        console.log(this.flag1);
      }
    },
    handleChange(value = "value") {
      this.value = value;
    },
    onSubmit(event) {
      console.log(this.value);
    },
    onReset(event) {
      this.value = "";
    },
    handleChange(value) {
      this.checkedList = value;
    },
    handleClick1(val, pwd) {
      console.log(val, pwd);
    if(val===undefined&&pwd===undefined){
        return
    }else{
       setTimeout(()=>{
         Taro.navigateTo({
          url: `/pages/findhouse/brow/index`,
        });
       },1000)
    }
        
    },
    handleClick(val) {
      console.log(val);
    },
  },
};
</script>
