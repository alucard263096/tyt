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
    peopleapi.list({ }, (people) => {
      var people = people[0];
      var birth = people.birth_timespan;
      var age = parseInt((new Date().getTime() - birth * 1000) / 365 / 24 / 3600 / 1000);
      people.age = age;
      this.Base.setMyData({ people });
    });
    
  }
  bindRegionChange(e){
    this.Base.setMyData({
      region: e.detail.value
    })
  }

}


var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow;
body.bindRegionChange = content.bindRegionChange;
Page(body)