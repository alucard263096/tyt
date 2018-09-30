import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { PeopleApi } from "../../apis/people.api.js";
import { WechatApi } from "../../apis/wechat.api.js";
import {
  InterViewApi
} from '../../apis/interview.api.js';

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    options.class_id = 1;
    this.Base.Page = this;
    super.onLoad(options);

    var date = [""];
    this.Base.setMyData({ date });

    var time=[""]
    this.Base.setMyData({time});
  }
  onMyShow() {
    var that = this;

    var interviewapi = new InterViewApi();
    interviewapi.info({id:this.Base.options.id},(info)=>{
      this.Base.setMyData(info);
    });
  }
  // bindRegionChangedate(e) {
  //   this.Base.setMyData({
  //     region_date: e.detail.value
  //   })
  // }
  bindRegionChangedate(e) {
    var that = this;
    this.Base.setMyData({
      region_date: e.detail.value
    });
    this.Base.setMyData({ region_date: e.detail.value })
    var date = this.Base.getMyData().date;
    console.log(date)

    var interviewapi = new InterViewApi();
    var region_date=e.detail.value;
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "mdate", "fkey": region_date }, (fieldupdate) => {
      this.Base.setMyData({ mdate: region_date });
    });
  }
  bindRegionChangetime(e) {
    var that = this;
    this.Base.setMyData({
      region_time: e.detail.value
    });
    this.Base.setMyData({ region_time: e.detail.value })
    var time = this.Base.getMyData().time;
    console.log(time)

    var interviewapi = new InterViewApi();
    var region_time = e.detail.value;
    interviewapi.fieldupdate({ id: this.Base.options.id, "fname": "mtime", "fkey": region_time }, (fieldupdate) => {
      this.Base.setMyData({ mdate: region_time });
    });
  }
  PAY(){
   var that=this;
    console.log(this.Base.options.id);
   var wechatapi=new WechatApi();
    wechatapi.prepay({ id: this.Base.options.id},(prepay)=>{
      console.log(prepay);
      prepay.success=function(){
        wx.navigateBack({
        })
      };
      wx.requestPayment(prepay);
    })
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.bindRegionChangedate = content.bindRegionChangedate;
body.bindRegionChangetime = content.bindRegionChangetime;
body.onMyShow = content.onMyShow;
body.PAY = content.PAY;
Page(body)