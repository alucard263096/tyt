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

    var minagelist = ["20岁", "25岁",
      "30岁", "35岁", "40岁", "45岁", "50岁", "55岁","不限"
    ];
    this.Base.setMyData({
      minagelist
    });
    var maxagelist = ["20岁", "25岁",
      "30岁", "35岁", "40岁", "45岁", "50岁", "55岁", "不限"
    ];
    this.Base.setMyData({
      maxagelist
    });
    var minheightlist = ["140cm", "150cm",
      "160cm", "170cm", "180cm", "190cm", "不限"
    ];
    this.Base.setMyData({
      minheightlist
    });
    var maxheightlist = ["150cm", "160cm",
      "170cm", "180cm", "190cm", "200cm", "不限"
    ];
    this.Base.setMyData({
      maxheightlist
    });
    var incomelist = ["<2000元/月", "<3000元/月", "<4000元/月", "<5000元/月", "<7000元/月", "<10000元/月",
      "<15000元/月", "<20000元/月", "<25000元/月", "<30000元/月","不限"
    ];
    this.Base.setMyData({
       incomelist
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
  bindmaxage(e) {
    console.log(maxagelist);
    this.Base.setMyData({ maxage: e.detail.value })
    var maxagelist = this.Base.getMyData().maxagelist;
  }
  bindminage(e) {
    console.log(minagelist);
    this.Base.setMyData({ minage: e.detail.value })
    var minagelist = this.Base.getMyData().minagelist;
  }
  bindminheight(e) {
    console.log(minheightlist);
    this.Base.setMyData({ minheight: e.detail.value })
    var minheightlist = this.Base.getMyData().minheightlist;
  }
  bindmaxheight(e) {
    console.log(maxheightlist);
    this.Base.setMyData({ maxheight: e.detail.value })
    var maxheightlist = this.Base.getMyData().maxheightlist;
  }
  bindincome(e) {
    console.log(incomelist);
    this.Base.setMyData({ income: e.detail.value })
    var incomelist = this.Base.getMyData().incomelist;
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
body.bindincome=content.bindincome;
Page(body)