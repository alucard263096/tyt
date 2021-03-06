// pages/content/content.js
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
import {
  InterViewApi
} from "../../apis/interview.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    // options.id=1;
    super.onLoad(options);
    showView: (options.showView == "true" ? true : false);
    this.Base.setMyData({})
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

    var interviewapi = new InterViewApi();
    interviewapi.create({}, (create) => {
      this.Base.setMyData({
        create
      })
    })
    var peopleapi = new PeopleApi();
    peopleapi.info(({
      id:this.Base.options.id
    }), (info) => {
      this.Base.setMyData({ 
        info
      });
    });
    peopleapi.photolist({
      people_id: this.Base.options.id
    }, (photolist) => {
      this.Base.setMyData({
        photolist
      });
    });
  }
  viewphotos(e) {
    var current = e.currentTarget.id;
    var photolist = this.Base.getMyData().photolist;
    var photos = [];
    for (var i = 0; i < photolist.length; i++) {
      photos.push(photolist[i].photo);
    }
    this.Base.viewGallary("people", photos, current);
  }
  show() {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
  launch() {
    var that = this;
    var interviewapi = new InterViewApi();
    interviewapi.create({"viewpeople_id": this.Base.options.id}, (ret) => {
      console.log(ret);
       wx: wx.navigateTo({
         url: '/pages/talk/talk?id=' + ret.return
       })
    });
  }

  addtoblack(){
    var peopleapi = new PeopleApi();
    peopleapi.addtoblack({ people_id: this.Base.options.id}, (addtoblack) => {
      this.Base.setMyData({ addtoblack });
    });
    
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.viewphotos = content.viewphotos;
body.showfilterselect = content.showfilterselect;
body.orderselect = content.orderselect;
body.show = content.show;
body.launch = content.launch;
body.report = content.report;
body.addtoblack = content.addtoblack;
Page(body)