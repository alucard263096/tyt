import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { PeopleApi } from "../../apis/people.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    options.class_id = 1;

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
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
  }
  Jubao(e){
    console.log(e.detail.value);
    this.Base.setMyData({
      reason: e.detail.value
    });

  }
  confirm(e){
    console.log(e);
    var that = this;

    var peopleapi = new PeopleApi();
    peopleapi.report({ people_id: this.Base.options.people_id, reason: e.detail.value.reason, type: e.detail.value.alert_id }, (report) => {
      this.Base.setMyData({ report });
    });
    wx.navigateBack({
      delta: 1,
    })
  }
 
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow; confirm
body.Jubao = content.Jubao;
body.confirm = content.confirm;
Page(body)