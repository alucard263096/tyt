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
    options.class_id = 1;
    
    this.Base.Page = this;
    //options.id=5;
    this.Base.setMyData({ order: 0, country_idx: -1, country_id: 0 });
    super.onLoad(options);
    
    var peopleapi = new PeopleApi();
    peopleapi.countrylist({}, (countrylist) => {
      this.Base.setMyData({ countrylist });
    });

    var quality = ["初中",
      "中专/职高/技校", "高中", "大专", "本科",
      "硕士", "博士"
    ];
    var quality_val=["1","2","3","4","5","6","7"];
    this.Base.setMyData({
      quality_val,quality
    });
    
    var income = ["<2000元/月", "2000-3000元/月", "3000-4000元/月", "4000-5000元/月", "5000-7000元/月", "7000-10000元/月",
      "10000-15000元/月", "15000-20000元/月", "20000-25000元/月", "25000-30000元/月", ">30000元/月"
    ];
    var income_val = ["a", "b", "c", "d", "e", "f",
      "g", "h", "i", "j", "k"
    ]
    this.Base.setMyData({
      income_val,income
    });

    var marriage = ["未婚", "离异", "丧偶"];
    var marriage_val=["A","B","C"]
    this.Base.setMyData({
      marriage_val,marriage
    })
  }
 
  bindPickerChangequa(e) {
    console.log(e.detail.value);
    this.Base.setMyData({
      qua: e.detail.value
    });
    var quality = this.Base.getMyData().quality;
    quality[e.detail.value];
  }

  bindPickerChangeincome(e) {
    console.log(e.detail.value);
     this.Base.setMyData({
       inc: e.detail.value
     });
    var income = this.Base.getMyData().income;
    income[e.detail.value];
  }

  bindPickerChangemarriage(e) {
    console.log(e.detail.value);
    this.Base.setMyData({
      mrg: e.detail.value
    })
    var marriage = this.Base.getMyData().marriage;
    marriage[e.detail.value]
  }
  headimg(){
    this.Base.uploadImage("people",(ret)=>{
      this.Base.setMyData({photo:ret});
    },1);
  }
  bindcountry(e) {
    var countrylist = this.Base.getMyData().countrylist;
    this.Base.setMyData({ country_idx: e.detail.value, country_id: countrylist[e.detail.value].id });
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
    peopleapi.info({id:1}, (info) => {
      this.Base.setMyData({
        info
      });
    });
    peopleapi.photolist({ id:1 }, (photolist) => {
      this.Base.setMyData({
        photolist
      });
    });
    peopleapi.fieldupdate({}, (fieldupdate)=>{
      this.Base.setMyData({ fieldupdate});
    });
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.bindPickerChangequa = content.bindPickerChangequa;
body.bindPickerChangeincome = content.bindPickerChangeincome;
body.bindPickerChangemarriage = content.bindPickerChangemarriage;
body.bindcountry = content.bindcountry;
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow;
body.headimg = content.headimg;
Page(body)