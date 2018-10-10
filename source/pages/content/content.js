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

    var peopleapi = new PeopleApi();
    peopleapi.countrylist({}, (countrylist) => {
      countrylist.push({id:0,name:"不限"});
      this.Base.setMyData({ countrylist });
    });
    // peopleapi.list({}, (marriage) => {
    //   this.Base.setMyData({ marriage });
    // });
    var heightlist = ["<140cm","140-150cm","151-160cm",
      "161-170cm", "171-180cm", "181-190cm", "191-200cm",">200cm", "不限"
    ];
    this.Base.setMyData({
       heightlist
    });
    var agelist = ["<20岁","20-25岁", "25-30岁",
      "30-35岁", "35-40岁", "40-45岁", "45-50岁", "50-55岁", ">55岁","不限"
    ];
    this.Base.setMyData({
      agelist
    });
    var marriagelist = ["未婚", "离异",
      "丧偶", "不限"
    ];
    this.Base.setMyData({
      marriagelist
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

    this.loaddata();
  }
  loaddata(){
    var peopleapi = new PeopleApi();
    var order = this.Base.getMyData().order;
    var country_id = this.Base.getMyData().country_id;
    var height = this.Base.getMyData().height;
    var age=this.Base.getMyData().age;
    var mrg = this.Base.getMyData().mrg;
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
    var data = { "orderby": orderby };

    if(country_id>0){
      data.country_id=country_id;
    }
    if (height == 0) {
      data.height_to = 140;
      data.height_from = 0;
    }
    if (height==1){
    data.height_to = 150;
    data.height_from = 140;
    }
    if (height == 2) {
      data.height_to = 160;
      data.height_from = 151;
    }
    if (height == 3) {
      data.height_to = 170;
      data.height_from = 161;
    }
    if (height == 4) {
      data.height_to = 180;
      data.height_from = 171;
    }
    if (height == 5) {
      data.height_to = 190;
      data.height_from = 181;
    }
    if (height == 6) {
      data.height_to = 200;
      data.height_from = 191;
    }
    if (height == 7) {
      data.height_to = 300;
      data.height_from = 201;
    }
    if (height == 8) {
      data.height_to = 300;
      data.height_from = 0;
    }
    if (age == 0) {
      data.age_to = 20;
      data.age_from = 0;
    }
    if (age == 1) {
      data.age_to = 25;
      data.age_from = 20;
    }
    if (age == 2) {
      data.age_to = 30;
      data.age_from = 25;
    }
    if (age == 3) {
      data.age_to = 35;
      data.age_from = 30;
    }
    if (age == 4) {
      data.age_to = 40;
      data.age_from = 35;
    }
    if (age == 5) {
      data.age_to = 45;
      data.age_from = 40;
    }
    if (age == 6) {
      data.age_to = 50;
      data.age_from = 45;
    }
    if (age == 7) {
      data.age_to = 55;
      data.age_from = 50;
    }
    if (age == 8) {
      data.age_to = 200;
      data.age_from = 55;
    }
    if (age == 9) {
      data.age_to = 200;
      data.age_from = 0;
    }
    if(mrg==0)
    {
      data.marriage = 'A';
    }
    if (mrg == 1) {
      data.marriage = 'B';
    }
    if (mrg == 2) {
      data.marriage = 'C';
    }
    if(mrg==0&mrg==1&&mrg==2){
      data.marriage=marriage;
    }
    console.log(data);
    peopleapi.list(data, (peoplelist) => {
      var nowtime = ((new Date()).getTime()) / 1000;
      console.log(nowtime);
      for(var i=0;i<peoplelist.length;i++){
        peoplelist[i].age =parseInt( (nowtime -peoplelist[i].birth_timespan)/60/60/24/365.2);
      }
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
  bindheight(e) {
    console.log(heigtlist);
    this.Base.setMyData({ height: e.detail.value})
    var heigtlist = this.Base.getMyData().heightlist;
    this.loaddata();
  }
  bindage(e) {
    console.log(agelist);
    this.Base.setMyData({ age: e.detail.value })
    var agelist = this.Base.getMyData().agelist;
    this.loaddata();
  }
  bindmarriage(e) {
    console.log(marriagelist);
    this.Base.setMyData({ mrg: e.detail.value })
    var marriagelist = this.Base.getMyData().marriagelist;
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
body.bindage = content.bindage;
body.bindheight = content.bindheight;
body.bindmarriage = content.bindmarriage;
Page(body)


