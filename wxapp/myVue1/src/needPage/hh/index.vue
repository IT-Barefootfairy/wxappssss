<template>
<div class="app" >
  <van-nav-bar
  class="nav"
  title="俊强代客申请贷款"
  fixed
  />
  
  <div class="con">
    <van-overlay v-if="load" :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <van-loading type="spinner"  color="#1989fa" size="48" />
      </div>
    </van-overlay>
    
    <div>
    <span class="tit">贷款信息</span>
    <van-cell-group>
      <van-field required input-align='right' style="padding-right:60px"   v-model="postData.applyAmt" label="申请金额" placeholder="请输入申请金额  " />
      <van-text  type="text" style="position: relative;top:-2rem; margin-left:86vw;color:#ccc;font-size:14px ">万元</van-text>
      <van-field readonly="true" required input-align='right' is-link @click="showhk" placeholder="请选择还款方式" label="还款方式" :value="hkhk"></van-field>
      <van-popup v-model="hk" position="bottom" :style="{ height: '50%' }">
        <van-picker show-toolbar title="" :columns="huankuan" @cancel="hk = false" @confirm="onhk" @change="onChhk"  :default-index="0" />
      </van-popup>
      <van-field readonly="true" required input-align='right' v-if="postData.repayType>0"  is-link @click="showqx" placeholder="请选择贷款期限" label="贷款期限" :value="qxqx"></van-field>
      <van-popup v-model="qx" position="bottom" :style="{ height: '50%' }">
        <van-picker show-toolbar title="" :columns="qixian" @cancel="qx = false" @confirm="onqx" @change="onChqx"  :default-index="0" />
      </van-popup>
      <van-field readonly="true" required input-align='right' is-link @click="showjy" placeholder="请选择贷款用途" label="贷款用途" :value="jyjy"></van-field>
      <van-popup v-model="jy" position="bottom" :style="{ height: '50%' }">
        <van-picker show-toolbar title="" :columns="jingying" @cancel="jy = false" @confirm="onjy" @change="onChjy"  :default-index="0" />
      </van-popup>
    </van-cell-group>
    <div class="for" v-for="(item,i) in arr" :key="i">
      <span class="tit">抵押物（房产）信息<span v-if="item.id!=0">{{i+1}}</span></span>
      <span class="add" @click="adddd" v-if="item.id==0"><van-icon name="add" class="iconadd" />增加抵押物</span>
      <span class="add red" @click="del(item.id)" v-if="item.id!=0"><van-icon name="clear" class="iconadd " />删除抵押物</span>
      <van-cell-group>
        <van-field readonly="true" required input-align='right' is-link @click="showciti(item.id)"  placeholder="请选择抵押物地址" label="抵押物地址" :value="item.citiciti"></van-field>
        <van-popup v-model="item.citi" position="bottom" :style="{ height: '50%' }">
          <van-area title="选择地区" :area-list="areaList" value="110101" :columns-placeholder="['请选择', '请选择', '请选择']"   :columns-num="3"  @cancel="item.citi = false" @confirm="onciti($event,item.id)" @change="onChciti"/>
        </van-popup>
        <van-field required input-align='right' v-model="item.houseAdress" label="详细地址" placeholder="填写房产证的详细地址、具体至门牌号" />
        <van-field readonly="true" required input-align='right' is-link @click="showdy(item.id)" placeholder="请选择抵押类型" label="抵押类型" :value="item.dydy"></van-field>
        <van-popup v-model="item.dy" position="bottom" :style="{ height: '50%' }">
          <van-picker show-toolbar title="" :columns="diya" @cancel="item.dy = false" @confirm="ondy($event,$event,item.id)" @change="onChdy"  :default-index="0" />
        </van-popup>
        <van-field required input-align='right' style="padding-right:60px"  v-if="item.dydyindex=='二抵'||item.dydyindex=='三抵'"  v-model="item.mortgageOne" label="一抵贷款余额" placeholder="请输入一抵贷款余额" />
        <van-text v-if="item.dydyindex=='二抵'||item.dydyindex=='三抵'" type="text" style="position: relative;top:-2rem; margin-left:88vw;color:#ccc;font-size:14px ">元</van-text>
        <van-field required input-align='right' style="padding-right:60px"  v-if="item.dydyindex=='三抵'"  v-model="item.mortgageTwo" label="二抵贷款余额" placeholder="请输入二抵贷款余额" />
        <van-text v-if="item.dydyindex=='三抵'" type="text" style="position: relative;top:-2rem; margin-left:88vw;color:#ccc;font-size:14px ">元</van-text>
        <van-field required input-align='right' style="padding-right:60px"   v-model="item.houseBuildArea" label="抵押物面积" placeholder="请输入抵押物面积" />
        <van-text  type="text" style="position: relative;top:-2rem; margin-left:88vw;color:#ccc;font-size:14px ">㎡</van-text>
      </van-cell-group>
    </div>
    
    <span class="tit">申请人信息</span>
    <van-cell-group>
      <van-field required input-align='right' v-model="postData.custName" label="姓名" placeholder="请输入贷款客户姓名" />
      <van-field required input-align='right' v-model="postData.idNo" label="证件号码" placeholder="请输入贷款客户证件号码" />
      <van-field required input-align='right' v-model="postData.custPhone" label="手机号码" placeholder="请输入贷款客户手机号码" />
    </van-cell-group>
    <span class="tit">上传贷款材料<span class="red">*</span>（房产证信息页与房产证附记页必传）</span>
        <van-uploader class="img"  max-count="1"
                     upload-text="上传身份证正面"
                     :upload-icon="require('../../assets/img/身份证正面.png')"
                     v-model="postData.idNoUrl1"
                     :after-read="uploadIDcardFront(1111)"
      ></van-uploader>
        <van-uploader class="img" max-count="1"
                     upload-text="上传户口簿申请人页"
                     :upload-icon="require('../../assets/img/户口簿.png')"
                     v-model="postData.passportUrl1"
                     :after-read="uploadIDcardFront(2222)"
      ></van-uploader>
      <van-uploader class="img" v-for="(item,i) in arr"
                     :key="i" max-count="1"
                     upload-text="上传房产证照片"
                     :upload-icon="require('../../assets/img/房产信息.png')"
                     v-model="item.frontFileList"
                     :after-read="uploadIDcardFront(item.id)"
                     
      ></van-uploader>
    </div>
  </div>
  <div class="foot1"></div>
<div class="foot"><van-button @click="submit" class="btn"  type="primary" block >确认提交</van-button></div>

</div>
</template>
<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
.img{
  margin-left: 5%;
}
.add{
  display: inline-block;
  color: #286afe;
  margin-left: 36%;
  font-size: 12px;
  line-height: 50px;
}
.red{
  color: red;
}
.tit{
  display: inline-block;
  padding:14px 5%;
  font-size: 10px;
}
.app{
  background: #f4f5f7;
}
.con{
  margin-top:46px ;
  margin-bottom: 50px;
}
.nav{
  background-color: rgb(40, 106, 254);
}
.van-nav-bar__title {
  color: rgb(255, 255, 255) !important;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.foot1{
  margin-top: 30px;
  height: 60px;
}
.foot{
  height: 60px;
  background-color: white;
  width: 100%;
  position: fixed;
  bottom: 0;
  margin-top: 50px;
  border: none;
}
.btn{
  margin: 10px 3%;
  border-radius: 10px;
  width: 94%;
  height: 40px;
  background: #286afe;
  border: none;
}
</style>

<style lang="scss" scoped>
.van-uploader__upload,
 .van-image,
 .van-uploader__preview-image{
  width: 40vw;
  height: 90px;
  border: rgb(121, 120, 120) 1px solid;
}
.van-uploader__upload-text {
  margin-top: 8px;
  color: #969799;
  font-size: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: black;
  text-align: center;
}
 .van-uploader__upload,
 .van-image{
  border-radius: 10px;
  overflow: hidden;
}
 .van-icon__image {
  width: 4em;
  height: 3em;
  -o-object-fit: contain;
  object-fit: contain;
  margin-bottom: 23px;
}
</style>

<script>
import Vue from 'vue'
import { NavBar,Overlay,Loading,Text,Button ,Field ,Toast,Picker,Popup,Cell,CellGroup,Icon,Area,Uploader,Col,Row  } from 'vant';
Vue.use(Area);
Vue.use(NavBar );
Vue.use(Button );
Vue.use(Field );
Vue.use(Picker );
Vue.use(Popup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Uploader);
Vue.use(Col);
Vue.use(Row);
Vue.use(Loading);
Vue.use(Overlay);
// Vue.use(Text);
import request from '@/utils/request'
import { compile } from 'path-to-regexp';
const Base64 = require('js-base64').Base64
const areaList=require('../../assets/c.json')
import { getToken } from '@/utils/auth'
import requestPy from '@/utils/requestPy'
export default {
  components: { },
  data() {
    return {
      arr111:[],
      idNoUrl1:[],
      passportUrl1: [],
      show: false,
      load:false,
      uploadUrl:'https://hmimage.hmdata.com.cn/upload',
      imgurl:process.env.VUE_APP_IMAGE_HOST+ '/images/',
      Rsize:process.env.VUE_APP_IMAGE_SIZE,
      id:0,
      applyAmt:'',
      pawnList:[],
      arr:[{
        id:0,
        citi:false,
        citiciti:'',
        dy:false,
        dydy:'',
        dydyindex:null,
        houseProvince:'',//抵押物所在省
        houseCity:'',//抵押物所在市
        houseDistrict:'',//抵押物所在区
        houseAdress:'',//抵押物地址（不包含省市区）
        houseFullAdress:'',//抵押物详细地址（包含省市区）
        mortgageCon:'',//抵押顺位（1：一抵；2：二抵；3：三抵）
        mortgageOne:'',//mortgageCon为2或3，必传
        mortgageTwo:'',//mortgageCon为2，必传
        houseBuildArea:'',//抵押物面积
        houseCardUrl:'',//房产证照片
        frontFileList:[],
      },],
      houseBuildArea:'',
      huankuan: ['先息后本', '等额本息', '气球贷'],
      qixian: ['12个月', '24个月', '30个月', '31个月', '32个月','33个月','36个月','60个月',],
      jingying:['经营'],
      diya: ['一抵', '二抵', '三抵'],
      houseAdress:'',
      hk:false,
      qx:false,
      jy:false,
      citi:false,
      hkhk:'',
      qxqx:'',
      jyjy:'经营',
      postData: {
        applyAmt: '',
        repayType: '',
        termMon: '',
        idNoUrl1:[],
        passportUrl1: [],
        idNoUrl:'',
        passportUrl: '',
        pawnList: [],
        custPhone: '',
        custName: '',
        idNo: '',
        source:'',
      },
    }
  },
  created() {
    this.areaList=areaList
    if(this.$route.query.data){
      var dataInfo = this.$route.query.data
      console.log(1111,Base64.decode(dataInfo))
      this.postData.source = JSON.parse(Base64.decode(dataInfo)).source
      console.log(this.postData.source)
    }

  },
  methods: {
    submit(){
      if(!this.postData.applyAmt){
        Toast('请输入申请金额');
        return
      }
      if(!this.hkhk){
        Toast('请选择还款方式');
        return
      }
      if(!this.postData.custName){
        Toast('请输入贷款人姓名');
        return
      }
      if(!this.postData.idNo){
        Toast('请输入贷款人身份证号');
        return
      }
      if(!this.postData.custPhone){
        Toast('请输入贷款人手机号');
        return
      }
      if(!(/^1[3456789]\d{9}$/.test(this.postData.custPhone))){
        Toast('请输入正确的手机号');
        return
      }
      if(!this.qxqx){
        Toast('请选择贷款期限');
        return
      }
      if(!this.postData.idNoUrl){
        Toast('请上传身份证照片');
        return
      }
      if(!this.postData.passportUrl){
        Toast('请上传户口簿申请人照片');
        return
      }
      this.arr111=JSON.parse(JSON.stringify(this.arr))
      for(let j=0;j<this.arr.length;j++){
          if(!this.arr[j].citiciti){
              Toast('请选择抵押物地址');
              return
            }
            if(!this.arr[j].houseAdress){
              Toast('请填写抵押物详细地址');
              return
            }
            if(!this.arr[j].dydy){
              Toast('请选择抵押类型');
              return
            }
            if(!this.arr[j].houseBuildArea){
              Toast('请填写抵押物面积');
              return
            }
            if(!this.arr[j].houseCardUrl){
              Toast('请上传房产证照片');
              return 
            }
            this.arr[j].houseFullAdress=this.arr[j].citiciti+this.arr[j].houseAdress
      }
      for(let j=0;j<this.arr.length;j++){
            delete this.arr[j].frontFileList;
      }
      this.postData.pawnList=this.arr
      this.idNoUrl1=this.postData.idNoUrl1
      this.passportUrl1=this.postData.passportUrl1
      delete this.postData.idNoUrl1;
      delete this.postData.passportUrl1;
      this.load=true
      this.show=true
      request({
        url: '/fanHua/pdd/save',
        method: 'post',
        data: this.postData
      }).then(res => {
        if(res.errorCode==0){
          this.arr=JSON.parse(JSON.stringify(this.arr111))
          this.postData.idNoUrl1=this.idNoUrl1
          this.postData.passportUrl1=this.passportUrl1
          this.load=false
          this.show=false
          Toast.success('提交成功')
          setTimeout(function(){
            window.location.reload();
          },2000)
        }
      }).finally(()=>{
        this.arr=JSON.parse(JSON.stringify(this.arr111))
        this.postData.idNoUrl1=this.idNoUrl1
        this.postData.passportUrl1=this.passportUrl1
        this.load=false
        this.show=false
      })
    },
    adddd(){
      this.id=++this.id
      this.arr.push({
        id:this.id,
        citi:false,
        citiciti:'',
        dy:false,
        dydy:'',
        dydyindex:null,
        houseProvince:'',//抵押物所在省
        houseCity:'',//抵押物所在市
        houseDistrict:'',//抵押物所在区
        houseAdress:'',//抵押物地址（不包含省市区）
        houseFullAdress:'',//抵押物详细地址（包含省市区）
        mortgageCon:'',//抵押顺位（1：一抵；2：二抵；3：三抵）
        mortgageOne:'',//mortgageCon为2或3，必传
        mortgageTwo:'',//mortgageCon为2，必传
        houseBuildArea:'',//抵押物面积
        houseCardUrl:'',//房产证照片
      })
    },
    del(id){
      for(let j=0;j<this.arr.length;j++){
        if(this.arr[j].id==id){
          this.arr.splice(j, 1);
        }
      }
    },
    showhk() {
      this.hk = true;
    },
    showjy() {
      this.jy = true;
    },
    showqx() {
      this.qx = true;
    },
    showdy(id) {
      for(let j=0;j<this.arr.length;j++){
        if(this.arr[j].id==id){
          this.arr[j].dy=true
        }
      }
    },
    showciti(id) {
      for(let j=0;j<this.arr.length;j++){
        if(this.arr[j].id==id){
          this.arr[j].citi=true
        }
      }
    },
    onhk(value, index) {
      this.qxqx=this.postData.termMon=''
      this.hkhk=value
      if(index==0){
        this.postData.repayType=10
      }else if(index==1){
        this.postData.repayType=1
      }else if(index==2){
        this.postData.repayType=3
      }
      if(this.postData.repayType==10){
        this.qixian= ['1个月', '3个月', '4个月', '5个月', '6个月','7个月','8个月','9个月', '10个月','11个月','12个月',]
      }else{
        this.qixian= ['12个月', '24个月', '30个月', '31个月', '32个月','33个月','36个月','60个月',]
      }
      this.hk=false;
    },
    onjy(value, index) {
      this.jy=false;
    },
    onqx(value, index) {
      this.qxqx=value
      this.postData.termMon= parseFloat(value)
      this.qx=false;
    },
    ondy(value,index,id) {
      for(let j=0;j<this.arr.length;j++){
        if(this.arr[j].id==id){
          this.arr[j].dydy=value
          this.arr[j].dy=false
          this.arr[j].dydyindex=index
          if(index=='一抵'){
            this.arr[j].mortgageCon=1
          }else if(index=='二抵'){
            this.arr[j].mortgageCon=2
          }else if(index=='三抵'){
            this.arr[j].mortgageCon=3
          }
          
        }
      }
    },
    onciti(value,id) {
      for(let j=0;j<this.arr.length;j++){
        if(this.arr[j].id==id){
          this.arr[j].citiciti=value[0].name+value[1].name+value[2].name
          this.arr[j].houseProvince=value[0].code
          this.arr[j].houseCity=value[1].code
          this.arr[j].houseDistrict=value[2].code
          this.arr[j].citi=false
        }
      }
    },
    onChhk(){
      
    },
    onChjy(){},
    onChqx(){},
    onChdy(){},
    onChciti(){},
    uploadIDcardFront(id){
      return file => {
        console.log(id)
        var timestamp = Date.parse(new Date());
        var sign=this.$md5(timestamp.toString())
        let formData = new FormData();
        formData.append('file', file.file)
        formData.append('is_public', 1)
        file.status = 'uploading';
        file.message = '上传中...';
        requestPy({
          url: this.uploadUrl,
          method: 'post',
          headers: {
          'timestamp':timestamp,
          'sign':sign
          },
          data:formData
        }).then((res) => {
          if(res.code_no=='0'){
            file.status = 'done';
            if(id==1111){
              this.postData.idNoUrl=res.data.url
              // this.postData.idNoUrl1.push(res.data.file_name)
            }else if(id==2222){
              this.postData.passportUrl=res.data.url
              // this.postData.passportUrl.push(res.data.file_name)
            }
            for(let j=0;j<this.arr.length;j++){
              if(this.arr[j].id==id){
                this.arr[j].houseCardUrl=res.data.url
                // this.postData.houseCardUrl.push(res.data.file_name)
              }
            }
            // this.postData.enclosure.push(res.data.file_name)
          }else{
            file.status = 'failed';
            file.message = '上传失败';
          }
      })
      }
      
    },
  }
  
}
</script>

