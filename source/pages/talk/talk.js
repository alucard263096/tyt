// pages/content/content.js
import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  InterViewApi
} from '../../apis/interview.api.js';
import {
  PeopleApi
} from "../../apis/people.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    options.class_id = 1;

    this.Base.Page = this;
    super.onLoad(options);
    this.Base.setMyData({});
    showView: (options.showView == "true" ? true : false);
  }
  onMyShow() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.info({
      id: 1
    }, (info) => {
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
  Agrpay() {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
  Agrpay2() {
    var that = this;
    that.setData({
      showView2: (!that.data.showView2)
    })
  }
  Agrpay3() {
    var that = this;
    that.setData({
      showView3: (!that.data.showView3)
    })
  }
  QX() {
    var that = this;
    that.setData({
      showView4: (!that.data.showView4)
    })
  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.Agrpay = content.Agrpay;
body.Agrpay2 = content.Agrpay2;
body.Agrpay3 = content.Agrpay3;
body.QX = content.QX;
body.onMyShow = content.onMyShow;
Page(body)