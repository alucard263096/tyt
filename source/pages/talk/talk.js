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
    this.Base.Page = this;
    super.onLoad(options);
    this.Base.setMyData({});
    showView: (options.showView == "true" ? true : false);
  }
  onMyShow() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.info({
      id: this.Base.options.id
      // id: this.Base.options.id
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
  QX() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
      this.Base.setMyData({ showView11: "sv11"});
    });
    
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close7", "fkey": "cl7" }, (fieldupdate) => {
      this.Base.setMyData({ close7: "cl7" });
    });
  }
  QX2() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
      this.Base.setMyData({ showView11: "sv11" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close", "fkey": "cl" }, (fieldupdate) => {
      this.Base.setMyData({ close: "cl" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close3", "fkey": "cl3" }, (fieldupdate) => {
      this.Base.setMyData({ close3: "cl3" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close5", "fkey": "cl5" }, (fieldupdate) => {
      this.Base.setMyData({ close5: "cl5" });
    });
  }
  QX3() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
      this.Base.setMyData({ showView11: "sv11" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close2", "fkey": "cl2" }, (fieldupdate) => {
      this.Base.setMyData({ close2: "cl2" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close3", "fkey": "cl3" }, (fieldupdate) => {
      this.Base.setMyData({ close3: "cl3" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close10", "fkey": "cl10" }, (fieldupdate) => {
      this.Base.setMyData({ close10: "cl10" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close6", "fkey": "cl6" }, (fieldupdate) => {
      this.Base.setMyData({ close6: "cl6" });
    });
  }
  QX4() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
      this.Base.setMyData({ showView11: "sv11" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView", "fkey": "sv" }, (fieldupdate) => {
      this.Base.setMyData({ showView: "sv" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close3", "fkey": "cl3" }, (fieldupdate) => {
      this.Base.setMyData({ close3: "cl3" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close4", "fkey": "cl4" }, (fieldupdate) => {
      this.Base.setMyData({ close4: "cl4" });
    });
  }
  QX5(){
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close8", "fkey": "cl8" }, (fieldupdate) => {
      this.Base.setMyData({ close8: "cl8" });
    });
  }
  QX6() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close9", "fkey": "cl9" }, (fieldupdate) => {
      this.Base.setMyData({ close9: "cl9" });
    });
  }
  Agrpay(){
  var that = this;
  var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView2", "fkey": "sv2" }, (fieldupdate) => {
    this.Base.setMyData({ showView2: "sv2" });
  });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView1", "fkey": "sv2" }, (fieldupdate) => {
      this.Base.setMyData({ showView1: "sv2" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close7", "fkey": "cl7" }, (fieldupdate) => {
      this.Base.setMyData({ close7: "cl7" });
    });
    wx: wx.navigateTo({
      url: '/pages/payment/payment'
    });
    
}
  Agrpay2() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView3", "fkey": "sv3" }, (fieldupdate) => {
      this.Base.setMyData({ showView3: "sv3" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView6", "fkey": "sv6" }, (fieldupdate) => {
      this.Base.setMyData({ showView6: "sv6" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close", "fkey": "cl" }, (fieldupdate) => {
      this.Base.setMyData({ close: "cl" });
    });
    // interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close3", "fkey": "cl3" }, (fieldupdate) => {
    //   this.Base.setMyData({ close3: "cl3" });
    // });
  }
  Agrpay3() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView8", "fkey": "sv8" }, (fieldupdate) => {
      this.Base.setMyData({ showView8: "sv8" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView5", "fkey": "sv5" }, (fieldupdate) => {
      this.Base.setMyData({ showView5: "sv5" });
    });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close2", "fkey": "cl2" }, (fieldupdate) => {
      this.Base.setMyData({ close2: "cl2" });
    });
    // interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close3", "fkey": "cl3" }, (fieldupdate) => {
    //   this.Base.setMyData({ close3: "cl3" });
    // });
    // interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close10", "fkey": "cl10" }, (fieldupdate) => {
    //   this.Base.setMyData({ close10: "cl10" });
    // });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.Agrpay = content.Agrpay;
body.Agrpay2 = content.Agrpay2;
body.Agrpay3 = content.Agrpay3;
body.QX = content.QX;
body.QX2 = content.QX2;
body.QX3 = content.QX3;
body.QX4 = content.QX4;
body.QX5 = content.QX5;
body.QX6 = content.QX6;
body.onMyShow = content.onMyShow;
Page(body)
