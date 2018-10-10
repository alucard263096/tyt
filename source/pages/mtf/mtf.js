// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { PeopleApi } from "../../apis/people.api.js";
import { InterViewApi } from '../../apis/interview.api.js';
import { MatcherApi } from '../../apis/matcher.api.js';

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
    interviewApi.list({}, (list) => {
      this.Base.setMyData({ list });
    })
    
    var matcherApi = new MatcherApi();
    matcherApi.peoplelist({ mobile: 13113111121}, (peoplelist) => {
      this.Base.setMyData({ peoplelist });
    })
    
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)