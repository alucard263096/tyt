// pages/content/content.js
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

    var countrylist = [];
    this.Base.setMyData({ countrylist});

    var peopleapi = new PeopleApi();
    peopleapi.countrylist({}, (country) => {
      this.Base.setMyData({ country });
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
    peopleapi.countrylist({}, (countrylist)=>{
      that.Base.setMyData({ countrylist});
    });
  }
  bindRegionChange(e) {
    this.Base.setMyData({
      countrylist: e.detail.value
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindRegionChange = content.bindRegionChange;
Page(body)