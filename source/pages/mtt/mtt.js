import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  PeopleApi
} from "../../apis/people.api.js";
import { InterViewApi } from '../../apis/interview.api.js';


class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    // options.id=30;
    super.onLoad(options);
    this.Base.setMyData({
    });
    show: (options.show == "true" ? true : false);
  }
  onMyShow() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.info({ id: this.Base.options.id }, (info) => {
      that.Base.setMyData(info);
    });
    var peopleapi = new PeopleApi();
    peopleapi.list({}, (people) => {
      var people = people[0];
      this.Base.setMyData({
        people
      });
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onMyShow = content.onMyShow;
Page(body)