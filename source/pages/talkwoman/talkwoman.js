// pages/content/content.js
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
    interviewapi.info({ id:this.Base.options.id}, (info) => {
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

  Agree(){
     var that=this;
     var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView1", "fkey":"sv1"}, (fieldupdate) => {
       this.Base.setMyData({ showView1:"sv1"});
       });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close4", "fkey": "cl4" }, (fieldupdate) => {
      this.Base.setMyData({ close4: "cl4" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView", "fkey": "sv" }, (fieldupdate) => {
      this.Base.setMyData({ showView: "sv" });
    });
     interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close13", "fkey": "cl13" }, (fieldupdate) => {
       this.Base.setMyData({ close13: "cl13" });
     });
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "close14", "fkey": "cl14" }, (fieldupdate) => {
      this.Base.setMyData({ close14: "cl14" });
    });
   }
  Agree6() {
    var that = this;
    var interviewapi = new InterViewApi();
    // interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView2", "fkey": "sv2" }, (fieldupdate) => {
    //   this.Base.setMyData({ showView2: "sv2" });
    // });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView1", "fkey": "sv2" }, (fieldupdate) => {
      this.Base.setMyData({ showView1: "sv2" });
    });
    // interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close12", "fkey": "cl12" }, (fieldupdate) => {
    //   this.Base.setMyData({ close12: "cl12" });
    // });
    // interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close13", "fkey": "cl12" }, (fieldupdate) => {
    //   this.Base.setMyData({ close13: "cl12" });
    // });
    
  }
   QX(){
     var that = this;
     var interviewapi = new InterViewApi();
     interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
       this.Base.setMyData({ showView11: "sv11" });
     });
     interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close4", "fkey": "cl4" }, (fieldupdate) => {
       this.Base.setMyData({ close4: "cl4" });
     });
     interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView", "fkey": "sv" }, (fieldupdate) => {
       this.Base.setMyData({ showView: "sv" });
     });
   }
   QX2(){
     var that = this;
     var interviewapi = new InterViewApi();
     interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
       this.Base.setMyData({ showView11: "sv11" });
     });
     interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close5", "fkey": "cl5" }, (fieldupdate) => {
       this.Base.setMyData({ close5: "cl5" });
     });
     interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView", "fkey": "sv" }, (fieldupdate) => {
       this.Base.setMyData({ showView: "sv" });
     });
     interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close8", "fkey": "cl8" }, (fieldupdate) => {
       this.Base.setMyData({ close8: "cl8" });
     });
     interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close", "fkey": "cl" }, (fieldupdate) => {
       this.Base.setMyData({ close: "cl" });
     });
   }
  QX3() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
      this.Base.setMyData({ showView11: "sv11" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close6", "fkey": "cl6" }, (fieldupdate) => {
      this.Base.setMyData({ close6: "cl6" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView", "fkey": "sv" }, (fieldupdate) => {
      this.Base.setMyData({ showView: "sv" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close9", "fkey": "cl9" }, (fieldupdate) => {
      this.Base.setMyData({ close9: "cl9" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close2", "fkey": "cl2" }, (fieldupdate) => {
      this.Base.setMyData({ close2: "cl2" });
    });
  }
  QX4() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
      this.Base.setMyData({ showView11: "sv11" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close3", "fkey": "cl3" }, (fieldupdate) => {
      this.Base.setMyData({ close3: "cl3" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView", "fkey": "sv" }, (fieldupdate) => {
      this.Base.setMyData({ showView: "sv" });
    });
  }
  QX5() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close10", "fkey": "cl10" }, (fieldupdate) => {
      this.Base.setMyData({ close10: "cl10" });
    });
  }
  QX6() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
      this.Base.setMyData({ showView11: "sv11" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close12", "fkey": "cl12" }, (fieldupdate) => {
      this.Base.setMyData({ close12: "cl12" });
    });
  }
  yes(){
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView9", "fkey": "sv9" }, (fieldupdate) => {
      this.Base.setMyData({ showView9: "sv9" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView7", "fkey": "sv7" }, (fieldupdate) => {
      this.Base.setMyData({ showView7: "sv7" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close5", "fkey": "cl5" }, (fieldupdate) => {
      this.Base.setMyData({ close5: "cl5" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView", "fkey": "sv" }, (fieldupdate) => {
      this.Base.setMyData({ showView: "sv" });
    });
    // interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close8", "fkey": "cl8" }, (fieldupdate) => {
    //   this.Base.setMyData({ close8: "cl8" });
    // });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close11", "fkey": "cl11" }, (fieldupdate) => {
      this.Base.setMyData({ close11: "cl11" });
    });
  }
  Agree2() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView4", "fkey": "sv4" }, (fieldupdate) => {
      this.Base.setMyData({ showView4: "sv4" });
    });
      interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "showView11", "fkey": "sv11" }, (fieldupdate) => {
        this.Base.setMyData({ showView11: "sv11" });
      });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView10", "fkey": "sv10" }, (fieldupdate) => {
      this.Base.setMyData({ showView10: "sv10" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close6", "fkey": "cl6" }, (fieldupdate) => {
      this.Base.setMyData({ close6: "cl6" });
    });
    interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "showView", "fkey": "sv" }, (fieldupdate) => {
      this.Base.setMyData({ showView: "sv" });
    });
    // interviewapi.fieldupdate({ id:this.Base.options.id, "fname": "close9", "fkey": "cl9" }, (fieldupdate) => {
    //   this.Base.setMyData({ close9: "cl9" });
    // });
  }
  // pageScrollToBottom() {
  //   wx.createSelectorQuery().select('#Z').boundingClientRect(function (rect) {
  //     wx.pageScrollTo({
  //       scrollTop: rect.bottom
  //     })
  //   }).exec()
  // }
}
  var content = new Content();
  var body = content.generateBodyJson();
  body.Agree = content.Agree;
  body.Agree2 = content.Agree2;
  body.Agree6 = content.Agree6; 
  body.pageScrollToBottom = content.pageScrollToBottom;
  body.onLoad = content.onLoad;
  body.yes=content.yes;
  body.QX = content.QX;
  body.QX2 = content.QX2;
  body.QX3 = content.QX3;
  body.QX4 = content.QX4;
  body.QX5 = content.QX5;
  body.QX6 = content.QX6;
  // body.pageScrollToBottom = content.pageScrollToBottom;
  body.onMyShow = content.onMyShow;
  Page(body)