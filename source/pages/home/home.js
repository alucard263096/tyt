import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  InstApi
} from "../../apis/inst.api.js";
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
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({id:1});
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    instapi.indexbanner({
      position: "home"
    }, (indexbanner) => {
      that.Base.setMyData({
        indexbanner: indexbanner
      });
    });
    instapi.info({}, (info) => {
      that.Base.setMyData(info);
    });

    var peopleapi = new PeopleApi();
    peopleapi.list({
      random: "Y"
    }, (people) => {
      var people = people[0];
      var birth = people.birth_timespan;
      var age = parseInt((new Date().getTime() - birth * 1000) / 365 / 24 / 3600 / 1000);
      people.age = age;
      this.Base.setMyData({
        people
      });
    });
    peopleapi.list({
      random: "Y"
    }, (people) => {
      var people2 = people[0];
      var birth = people2.birth_timespan;
      var age = parseInt((new Date().getTime() - birth * 1000) / 365 / 24 / 3600 / 1000);
      people2.age = age;
      this.Base.setMyData({
        people2
      });
    });
    
  }
  handletouchmove(event) {
    var that = this;
    var currentX = event.touches[0].pageX
    var currentY = event.touches[0].pageY
    var tx = currentX - this.data.lastX
    var ty = currentY - this.data.lastY
    var text = ""
    //左右方向滑动
    if (Math.abs(tx) > Math.abs(ty)) {
      if (tx < 0)
        text = "向左滑动"
      else if (tx > 0)
        text = "向右滑动"
    }

    //上下方向滑动
    // else {
    //   if (ty < 0)
    //     text = "向上滑动"
    //   else if (ty > 0)
    //     text = "向下滑动"
    // }

    console.log(text);

    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX;
    this.data.lastY = currentY;
    if (text == "向左滑动") {
      this.Base.setMyData({
        "inleftswipe": true
      })

      var peopleapi = new PeopleApi();
      peopleapi.list({
        random: "Y"
      }, (people) => {
        var people2 = people[0];
        var birth = people2.birth_timespan;
        var age = parseInt((new Date().getTime() - birth * 1000) / 365 / 24 / 3600 / 1000);
        people2.age = age;
        this.Base.setMyData({
          people2
        });
      });
      
      setTimeout(function() {

        that.Base.setMyData({
          "inleftswipe": false
        })
      }, 1500);
    }
    if (text == "向右滑动") {
      this.Base.setMyData({
        "inrightswipe": true
      });

      var peopleapi = new PeopleApi();
      peopleapi.list({
        random: "Y"
      }, (people) => {
        var people2 = people[0];
        var birth = people2.birth_timespan;
        var age = parseInt((new Date().getTime() - birth * 1000) / 365 / 24 / 3600 / 1000);
        people2.age = age;
        this.Base.setMyData({
          people2
        });
      });
      setTimeout(function() {

        that.Base.setMyData({
          "inrightswipe": false
        })
      }, 1500);

    }

  }
  //滑动开始事件
  handletouchtart(event) {
    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY

  }
  //滑动结束事件
  handletouchend(event) {
    this.data.currentGesture = 0;
    this.setData({
      text: "没有滑动"
    });
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.handletouchmove = content.handletouchmove;
body.handletouchtart = content.handletouchtart;
body.handletouchend = content.handletouchend;
Page(body)