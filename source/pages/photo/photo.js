// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { PeopleApi } from "../../apis/people.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    super.onLoad(options);
    this.Base.setMyData({ images: [] });
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    instapi.indexbanner({ position: "home" }, (indexbanner) => {
      that.Base.setMyData({ indexbanner: indexbanner });
    });
    instapi.info({}, (info) => {
      that.Base.setMyData(info);
    });
  }
  minusImg(e) {
    var that = this;
    var seq = e.currentTarget.id;
    var images = that.Base.getMyData().images;
    var imgs = [];
    for (var i = 0; i < images.length; i++) {
      if (seq != i) {
        imgs.push(images[i]);
      }
    }
    that.Base.setMyData({ images: imgs });
  }
  uploadimg() {
    var that = this;
    this.Base.uploadImage("people", (ret) => {
      var images = that.Base.getMyData().images;
      images.push(ret);
      that.Base.setMyData({ images });
    },9);
  }
  uploadsave() {
    var that = this;
    var images = that.Base.getMyData().images;

    images=images.join(",");
    var api=new PeopleApi();
    api.uploadphoto({images:images},(ret)=>{
      if(ret.code=="0"){
        this.Base.toast("更新成功");
        wx.navigateBack({
          
        })
      }else{
        this.Base.info(ret.return);
      }
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.uploadimg = content.uploadimg; 
body.minusImg = content.minusImg;
body.uploadsave = content.uploadsave;
Page(body)