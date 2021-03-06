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
    peopleapi.blackpeoplelist({}, (blackpeoplelist) => {
      this.Base.setMyData({ blackpeoplelist });
    });
  }
  remove(e){
    console.log(e);
    var id=e.currentTarget.id;
    var peopleapi = new PeopleApi();
    peopleapi.removeblack({ people_id: id }, (removeblack) => {
      this.Base.setMyData({ removeblack });
      this.onMyShow();
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.remove = content.remove;
Page(body)