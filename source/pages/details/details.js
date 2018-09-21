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

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
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

    var peopleapi = new PeopleApi();
    peopleapi.info(({ id: this.Base.options.id }), (info) => {
      this.Base.setMyData({
        info
      });
    });
    peopleapi.photolist({ id: this.Base.options.id},(photolist)=>{
      this.Base.setMyData({
        photolist
      });
    });
  }
  viewphotos(e){
    var current=e.currentTarget.id;
    var photolist = this.Base.getMyData().photolist;
    var photos=[];
    for(var i=0;i<photolist.length;i++){
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
  
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow;
body.viewphotos = content.viewphotos;
body.showfilterselect = content.showfilterselect;
body.orderselect = content.orderselect; 
body.show = content.show;
Page(body)