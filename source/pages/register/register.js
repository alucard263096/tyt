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
    options.class_id = 1;

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    
    var array=["男","女"];
    this.Base.setMyData({array});
    
    var dom = ["请输入您的地址"];
    this.Base.setMyData({ dom });
   

    this.Base.setMyData({ name: "", mobile: "", sex: "", address: "", noticesuccess: false });
    var api = new PeopleApi();
    api.register({}, (register) => {
      this.Base.setMyData({ register});
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
    var name = e.detail.value.name;
    var mobile = e.detail.value.mobile;
    var sex = e.detail.value.sex;
    var address = e.detail.value.address;
    if (name.trim() == "") {
      this.Base.info("请输入姓名");
      return;
    } if (mobile.trim() == "") {
      this.Base.info("请输入电话号码");
      return;
    }
    if (sex.trim() == "") {
      this.Base.info("请选择性别");
      return;
    }
    if (address.trim() == "") {
      this.Base.info("请选择地址");
      return;
    }
    
    
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
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.confirm=content.confirm;
body.bindRegionChange = content.bindRegionChange;
body.bindPickerChange = content.bindPickerChange;
body.bind = content.bind;
Page(body)


