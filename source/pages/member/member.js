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
    options.class_id = 1;
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    var peopleapi = new PeopleApi();
    var interviewApi = new InterViewApi();

    peopleapi.list({ }, (people) => {
      this.Base.setMyData({ people });
    });
    interviewApi.list({},(list)=>{
      this.Base.setMyData({list});
    })
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)