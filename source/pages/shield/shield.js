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

    var minagelist = ["20", "25",
      "30", "35", "40", "45", "50", "55","不限"
    ];
    this.Base.setMyData({
      minagelist
    });
    var maxagelist = ["20", "25",
      "30", "35", "40", "45", "50", "55", "不限"
    ];
    this.Base.setMyData({
      maxagelist
    });
    var minheightlist = ["140", "150",
      "160", "170", "180", "190", "200","不限"
    ];
    this.Base.setMyData({
      minheightlist
    });
    var maxheightlist = ["140","150", "160",
      "170", "180", "190", "200", "不限"
    ];
    this.Base.setMyData({
      maxheightlist
    });
    var minincomelist = ["2000","3000", "4000", "5000", "7000", "10000",
      "15000", "20000", "25000", "30000","不限"
    ];
    this.Base.setMyData({
       minincomelist
    });
    var maxincomelist = ["2000", "3000", "4000", "5000", "7000", "10000",
      "15000", "20000", "25000", "30000", "不限"
    ];
    this.Base.setMyData({
      maxincomelist
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
    var peopleapi = new PeopleApi();
    peopleapi.info({}, (info) => {
      this.Base.setMyData({ info });
    });
  }

  bindminage(e) {
    var that = this;
    this.Base.setMyData({ minage: e.detail.value })
    var minagelist = this.Base.getMyData().minagelist;
    var peopleapi = new PeopleApi();

    var minage = parseInt( minagelist[e.detail.value]);
    var maxage = parseInt(this.Base.getMyData().info.maxage);
     if(minage>maxage){
       minage=maxage;
     }
    
     
    peopleapi.fieldupdate({ "fname": "minage", "fkey": minage }, (fieldupdate) => {
      var info = this.Base.getMyData().info;
      info.minage=minage;
      this.Base.setMyData({ info: info });
    });
  }
  bindmaxage(e) {
    var that = this;
    this.Base.setMyData({ maxage: e.detail.value })
    var maxagelist = this.Base.getMyData().maxagelist;
    var peopleapi = new PeopleApi();

    var maxage = parseInt(maxagelist[e.detail.value]);
    var minage = parseInt(this.Base.getMyData().info.minage);
    if (minage > maxage) {
      maxage = minage;
    }
    
    
    peopleapi.fieldupdate({ "fname": "maxage", "fkey": maxage}, (fieldupdate) => {
      var info = this.Base.getMyData().info;
      info.maxage = maxage;
      this.Base.setMyData({ info: info});
    });
  }
  
  bindminheight(e) {
    var that = this;
    this.Base.setMyData({ minheight: e.detail.value })
    var minheightlist = this.Base.getMyData().minheightlist;
    var peopleapi = new PeopleApi();

    var minheight = parseInt(minheightlist[e.detail.value]);
    var maxheight = parseInt(this.Base.getMyData().info.maxheight);
    if (minheight > maxheight) {
      minheight = maxheight;
    }

    peopleapi.fieldupdate({ "fname": "minheight", "fkey": minheight }, (fieldupdate) => {
      var info = this.Base.getMyData().info;
      info.minheight = minheight;
      this.Base.setMyData({ info: info });
    });
  }
  bindmaxheight(e) {
    var that = this;
    this.Base.setMyData({ maxheight: e.detail.value })
    var maxheightlist = this.Base.getMyData().maxheightlist;
    var peopleapi = new PeopleApi();

    var maxheight = parseInt(maxheightlist[e.detail.value]);
    var minheight = parseInt(this.Base.getMyData().info.minheight);
    if (minheight > maxheight) {
      maxheight = minheight;
    }

    peopleapi.fieldupdate({ "fname": "maxheight", "fkey": maxheight }, (fieldupdate) => {
      var info = this.Base.getMyData().info;
      info.maxheight = maxheight;
      this.Base.setMyData({ info: info });
    });
  
  }
  bindminincome(e) {
    var that = this;
    this.Base.setMyData({ minincome: e.detail.value })
    var minincomelist = this.Base.getMyData().minincomelist;
    var peopleapi = new PeopleApi();

    var minincome = parseInt(minincomelist[e.detail.value]);
    var maxincome = parseInt(this.Base.getMyData().info.maxincome);
    if (minincome > maxincome) {
      minincome = maxincome;
    }

    peopleapi.fieldupdate({ "fname": "minincome", "fkey": minincome }, (fieldupdate) => {
      var info = this.Base.getMyData().info;
      info.minincome = minincome;
      this.Base.setMyData({ info: info });
    });
  }
  bindmaxincome(e) {
    var that = this;
    this.Base.setMyData({ maxincome: e.detail.value })
    var maxincomelist = this.Base.getMyData().maxincomelist;
    var peopleapi = new PeopleApi();

    var maxincome = parseInt(maxincomelist[e.detail.value]);
    var minincome = parseInt(this.Base.getMyData().info.minincome);
    if (minincome > maxincome) {
      maxincome = minincome;
    }

    peopleapi.fieldupdate({ "fname": "maxincome", "fkey": maxincome }, (fieldupdate) => {
      var info = this.Base.getMyData().info;
      info.maxincome = maxincome;
      this.Base.setMyData({ info: info });
    });
  }
  Check(e){
    var info=this.Base.getMyData().info;
    var shield_wh=info.shield_wh;
    if(shield_wh=="Y"){
      shield_wh="N";
    }else{
      shield_wh="Y";
    }
    var peopleapi = new PeopleApi();
    console.log(shield_wh);
    peopleapi.fieldupdate({ "fname": "shield_wh", "fkey": shield_wh }, (fieldupdate) => {
      console.log(fieldupdate);
    });
  }
  Check2(e) {
    var info = this.Base.getMyData().info;
    var shieldly = info.shieldly;
    if (shieldly == "Y") {
      shieldly = "N";
    } else {
      shieldly = "Y";
    }
    var peopleapi = new PeopleApi();
    console.log(shieldly);
    peopleapi.fieldupdate({ "fname": "shieldly", "fkey": shieldly }, (fieldupdate) => {
      console.log(fieldupdate);
    });
  }
  Check3(e) {
    var info = this.Base.getMyData().info;
    var shieldso = info.shieldso;
    if (shieldso == "Y") {
      shieldso = "N";
    } else {
      shieldso = "Y";
    }
    var peopleapi = new PeopleApi();
    console.log(shieldso);
    peopleapi.fieldupdate({ "fname": "shieldso", "fkey": shieldso }, (fieldupdate) => {
      console.log(fieldupdate);
    });
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.bindminage = content.bindminage;
body.bindmaxage = content.bindmaxage;
body.bindminheight = content.bindminheight;
body.bindmaxheight = content.bindmaxheight;
body.bindminincome = content.bindminincome; 
body.bindmaxincome = content.bindmaxincome;
body.Check = content.Check;
body.Check2 = content.Check2;
body.Check3 = content.Check3;
Page(body)