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
    options.class_id = 1;

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({ order: 0, country_idx: -1,country_id:0 });
    this.loaddata();

    var peopleapi = new PeopleApi();
    peopleapi.countrylist({}, (countrylist) => {
      countrylist.push({id:0,name:"不限"});
      this.Base.setMyData({ countrylist });
    });
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
  loaddata(){
    var peopleapi = new PeopleApi();
    var order = this.Base.getMyData().order;
    var country_id = this.Base.getMyData().country_id;
    var orderby="";

    if(order==0){
      orderby="birth desc";
    }
    if (order == 1) {
      orderby = "register_date desc";
    }
    if (order == 2) {
      orderby = "lastlogin_time desc";
    }

    var data = { orderby: orderby };
    if(country_id>0){
      data.country_id=country_id;
    }
    console.log(data);
    peopleapi.list(data, (peoplelist) => {
      this.Base.setMyData({ peoplelist });
    });
  }
  showorderselect(){
    this.Base.setMyData({ orderselect: true, filterselect: false});
  }
  showfilterselect() {
    this.Base.setMyData({ orderselect: false, filterselect: true  });
  }
  closeoption(){
    this.Base.setMyData({ orderselect: false,filterselect:false });
  }
  orderselect(e){
    this.Base.setMyData({order:e.currentTarget.id, orderselect: false, filterselect: false });
    this.loaddata();
  }
  bindcountry(e){
    var countrylist=this.Base.getMyData().countrylist;

    this.Base.setMyData({ country_idx: e.detail.value, country_id: countrylist[e.detail.value].id});
    this.loaddata();
  }
}
var i = 0;
var array = [];
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow; 
body.showorderselect = content.showorderselect;
body.closeoption = content.closeoption;
body.orderselect = content.orderselect; 
body.loaddata = content.loaddata; 
body.showfilterselect = content.showfilterselect;
body.bindcountry = content.bindcountry;
Page(body)


