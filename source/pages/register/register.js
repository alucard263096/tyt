// pages/register/register.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { ContentApi } from "../../apis/content.api";
import { MemberApi } from "../../apis/member.api.js";
import { InstApi } from "../../apis/inst.api.js";
import {PeopleApi} from "../../apis/people.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    //options.class_id = 1;

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    
    var array=["男","女"];
    this.Base.setMyData({array});
    
    var dom = ["请输入您的地址"];
    this.Base.setMyData({ dom });
   

    this.Base.setMyData({ name: "", mobile: "", sex: "", address: "", noticesuccess: false, photo: "", country_idx:-1,birth:"" });

    var peopleapi = new PeopleApi();
    peopleapi.countrylist({}, (countrylist) => {
      this.Base.setMyData({ countrylist });
    });

  }
  bindRegionChange(e) {
    this.Base.setMyData({
      region: e.detail.value
    })
  }
  bindPickerChange(e) {
    this.Base.setMyData({
      index: e.detail.value
    })
  }

  confirm(e) {
    console.log(e);
    var data=e.detail.value;
    data.matcher_id=this.Base.options.matcher_id;
    var country_idx = this.Base.getMyData().country_idx;
    var birth = this.Base.getMyData().birth;
    var countrylist = this.Base.getMyData().countrylist;
    if(data.photo==""){
      this.Base.info("请选择头像");
      return;
    }
    if (data.name == "") {
      this.Base.info("请输入姓名");
      return;
    }
    if (data.mobile == "") {
      this.Base.info("请输入手机号码");
      return;
    }
    if (data.gender == "") {
      this.Base.info("请选择性别");
      return;
    }else{
      data.gender = data.gender=="男"?"M":"F";
    }
    if (birth == "") {
      this.Base.info("请输入出生日期");
      return;
    }else{
      data.birth=birth;
    }
    if (country_idx==-1){
      this.Base.info("请选择村庄");
      return;
    }else{
      data.country_id=countrylist[country_idx].id;
    }
    if (data.address == "") {
      this.Base.info("请输入详细门牌地址");
      return;
    }
    console.log(data);
    var api=new PeopleApi();
    api.register(data,(ret)=>{
      if(ret.code==0){
        wx.reLaunch({
          url: '/pages/home/home',
        })
      }else{
        this.Base.info(ret.result);
      }
    });
  }

  
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    instapi.indexbanner({ position: "home" }, (indexbanner) => {
      that.Base.setMyData({ indexbanner: indexbanner });
    });
    instapi.info({}, (info) => {
      that.Base.setMyData(info);
    });
    var peopleapi=new PeopleApi();
    peopleapi.register({},(register)=>{
      this.Base.setMyData({
       register
      });
    });
    
  }
  phonenoCallback(mobile) {
    this.Base.setMyData({ mobile: mobile });
  }
  bind(e) {
    console.log(e);
    var data = e.detail.value;
    if (data.mobile == "") {
      this.Base.info("点击绑定手机");
      return;
    }
    var userapi = new UserApi();
    userapi.bind(data, (ret) => {
      if (ret.code == 0) {
        wx.reLaunch({
          url: '/pages/home/home?class_id=' + ret.return,
        })
      } else {
        this.Base.info(ret.return);
      }
    });
  }
  checkPermission(){

  }
  choosePhoto(){
    this.Base.uploadImage("people",(ret)=>{
      this.Base.setMyData({ photo: ret});
    },1);
  }
  bindcountry(e){
    var country_idx=parseInt(e.detail.value);
    this.Base.setMyData({ country_idx: country_idx });
  }
  birthChange(e){

    this.Base.setMyData({ birth: e.detail.value });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.confirm=content.confirm;
body.bindRegionChange = content.bindRegionChange;
body.bindPickerChange = content.bindPickerChange; 
body.bind = content.bind; 
body.choosePhoto = content.choosePhoto; 
body.bindcountry = content.bindcountry;
body.birthChange = content.birthChange;
Page(body)


