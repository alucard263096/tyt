import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  InstApi
} from "../../apis/inst.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.needauth = false;
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    instapi.info({}, (info) => {
      that.Base.setMyData(info);
    });
  }
  checkPermission() {
  }
  getUserInfo(e) {
    wx.switchTab({
      url: '/pages/home/home',
    });
    //
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow;
body.getUserInfo = content.getUserInfo;
Page(body)