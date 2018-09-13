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

    var date = [""];
    this.Base.setMyData({ date });

    var time=[""]
    this.Base.setMyData({time});
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
  bindRegionChangedate(e) {
    this.Base.setMyData({
      region_date: e.detail.value
    })
  }
  bindRegionChangetime(e) {
    this.Base.setMyData({
      region_time: e.detail.value
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.bindRegionChangedate = content.bindRegionChangedate;
body.bindRegionChangetime = content.bindRegionChangetime;
body.onMyShow = content.onMyShow;
Page(body)