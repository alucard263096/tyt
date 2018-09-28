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
    this.Base.setMyData({ order: 0, country_idx: -1, country_id: 0 });
    var region = ["广东省", "深圳市","南山区"];
    this.Base.setMyData({ region });


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
    
    var peopleapi = new PeopleApi();
    peopleapi.info({}, (info) => {
      this.Base.setMyData({
        info
      });
    });
    peopleapi.countrylist({}, (countrylist) => {
      this.Base.setMyData({ countrylist });
    });
  }
  bindcountry(e) {
    var countrylist = this.Base.getMyData().countrylist;
    this.Base.setMyData({ country_idx: e.detail.value, country_id: countrylist[e.detail.value].id });
    var id = countrylist[e.detail.value].id;
    var peopleapi = new PeopleApi();
    peopleapi.fieldupdate({ "fname": "country_id", fkey: id }, (fieldupdate) => {
      this.Base.setMyData({ fieldupdate });
    });
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow;
body.bindcountry = content.bindcountry;
Page(body)