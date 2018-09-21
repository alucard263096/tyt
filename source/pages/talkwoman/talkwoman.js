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
    options.id = 1;
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
    });
    showView: (options.showView == "true" ? true : false);
  }
  onMyShow() {
      var that = this;
      var interviewapi = new InterViewApi();
     interviewapi.info("id=1", (info) => {
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

     var interviewapi=new InterViewApi();

     interviewapi.updateview1({show:"true"},(updateview1)=>{

       that.Base.setMyData(updateview1);
     })
   }
  // Agree() {
  //   var that = this;
  //   that.setData({
  //     showView: (!that.data.showView)
  //   })
  // }

  //  yes() {
  //    var that = this;
  //    that.setData({
  //      showView_5: (!that.data.showView_5)
  //    })
  //  }

  //  Agree2() {
  //    var that = this;
  //    that.setData({
  //      showView_8: (!that.data.showView_8)
  //    })
  //  }
  // RF() {
  //   var that = this;
  //   that.setData({
  //     showView4: (!that.data.showView4)
  //   })

    // }
    // touchStart(e) {
    //   this.touchStartTime = e.timeStamp;
    // }
    // touchEnd(e) {
    //   this.touchEndTime = e.timeStamp;
    // }
    // doubleTap(item, e) {
    //   var vm = this;

    //   if (vm.touchEndTime - vm.touchStartTime < 350) {
    //     var currentTime = e.timeStamp;
    //     var lastTapTime = vm.lastTapTime;
    //     vm.lastTapTime = currentTime;
    //     if (currentTime - lastTapTime > 300) {}
    //   }
    // }
    //   pageScrollToBottom() {
    //   wx.createSelectorQuery().select('#pg').boundingClientRect(function (rect) {
    //     wx.pageScrollTo({
    //       scrollTop: rect.bottom
    //     })
    //   }).exec()
    // }
  }

  var content = new Content();
  var body = content.generateBodyJson();
  body.Agree = content.Agree;
  body.yes = content.yes;
  body.Agree2 = content.Agree2;
  body.RF = content.RF;
  body.touchStart = content.touchStart;
  body.touchEnd = content.touchEnd;
  body.doubleTap = content.touchEnd;
  body.pageScrollToBottom = content.pageScrollToBottom;
  body.onLoad = content.onLoad;
  body.onMyShow = content.onMyShow;
  Page(body)