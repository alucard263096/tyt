// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { PeopleApi } from "../../apis/people.api.js";
import { InterViewApi } from '../../apis/interview.api.js';

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({ show: true });
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    var interviewApi = new InterViewApi();
    //var UserInfo=this.Base.getMyData().id;
    //showView11:"sv11",startpe_id:UserInfo.people.id
    //interviewApi.list({ showView11: "sv11", orderby: " r_main.updated_date desc" }, (list) => {
    //  var m = list[0];
    //  this.Base.setMyData({ list });
    //})
    var show=this.Base.getMyData().show;
    if(show==true){
      this.tap1();
    }else{
      this.tap2();
    }
  }
  tap1(){
    var that = this;
    var interviewApi = new InterViewApi();
    var UserInfo = this.Base.getMyData().UserInfo;
    interviewApi.list({ showView11: "sv11", orderby: " r_main.updated_date desc", startpeople_id: UserInfo.people.id }, (list) => {
      var m = list[0];
      this.Base.setMyData({ list });
    })
    this.Base.setMyData({ show: true, hide: false });
  }
  tap2() {
    var that = this;
    var interviewApi = new InterViewApi();
    var UserInfo = this.Base.getMyData().UserInfo;
    interviewApi.list({ showView11: "sv11", orderby: " r_main.updated_date desc" ,viewpeople_id: UserInfo.people.id }, (list) => {
      var m = list[0];
      this.Base.setMyData({ list });
    })
    this.Base.setMyData({ show: false, hide: true });
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.tap1 = content.tap1;
body.tap2 = content.tap2;
Page(body)