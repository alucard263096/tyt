// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { PeopleApi } from "../../apis/people.api.js";
import {InterViewApi} from '../../apis/interview.api.js';

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    var interviewApi = new InterViewApi();
    //var UserInfo=this.Base.getMyData().id;
    //showView11:"sv11",startpe_id:UserInfo.people.id
    interviewApi.list({ showing: "Y", orderby:" r_main.updated_date desc"},(list)=>{
      var m=list[0];
      this.Base.setMyData({list});
    })
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)