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
    this.Base.setMyData({
      id: 1,
      dx: 0,
      x: 125
    });
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

    }, (peoplelist) => {

      for (var i = 0; i < peoplelist.length; i++) {
        var people2 = peoplelist[i];
        var birth = people2.birth_timespan;
        var age = parseInt((new Date().getTime() - birth * 1000) / 365 / 24 / 3600 / 1000);
        people2.age = age;
        peoplelist[i] = people2;
      }

      this.Base.setMyData({

        x: winWidth,
        y: winHeight,
        distance: "",
        animationData: {},
        peoplelist
      });
    });

  }


  tap(e) {
    var that = this;
    var data = this.Base.getMyData();
    var distance = data.distance;
    var linming=5;
    console.log("cons~" + distance + "~" + (winWidth + winWidth / linming).toString());
    if ((distance > (winWidth + winWidth / linming)) || (distance < (winWidth - winWidth / linming))) {
      console.log("con1~");
      var peoplelist = data.peoplelist;
      var temp = (new Date()).getTime() % peoplelist.length;
      var a = peoplelist[e.currentTarget.dataset.index];
      peoplelist[e.currentTarget.dataset.index] = peoplelist[temp];
      peoplelist[temp] = a;
      console.log(temp);
      //peoplelist.splice(e.currentTarget.dataset.index, 1);
      that.Base.setMyData({
        x: winWidth,
        y: winHeight,
        peoplelist: peoplelist
      });
    } else {
      console.log("cons2");
      that.Base.setMyData({
        x: winWidth,
        y: winHeight
      })
    }
  }

  onChange(e) {
    var that = this;
    that.setData({
      distance: e.detail.x
    })
  }

  onScale(e) {

  }


}

var winWidth = 414;
var winHeight = 736;

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.tap = content.tap;
body.onChange = content.onChange;
body.onScale = content.onScale;
Page(body)