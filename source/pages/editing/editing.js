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
    super.onLoad(options);

    var array = ["男", "女"];
    this.Base.setMyData({
      array
    });

    var date = [""];
    this.Base.setMyData({
      date
    });

    var height = ["145CM以下",
      "145CM", "146CM", "147CM", "148CM",
      "149CM", "150CM", "151CM", "152CM",
      "153CM", "154CM"
    ];
    this.Base.setMyData({
      height
    });

    var quality = ["初中",
      "中专/职高/技校", "高中", "大专", "本科",
      "硕士", "博士"
    ];
    this.Base.setMyData({
      quality
    });

    var income = ["2000元以下", "2000-3000元", "3000-4000元", "4000-5000元", "5000-7000元", "7000-10000元",
      "10000-15000元", "15000-20000元", "20000-25000元", "25000-30000元", ">50000元"
    ]
    this.Base.setMyData({
      income
    });

    var marriage = ["未婚", "离异", "丧偶"]
    this.Base.setMyData({
      marriage
    })
  }
  bindPickerChange(e) {
    this.Base.setMyData({
      index: e.detail.value
    })
  }
  bindRegionChangedate(e) {
    this.Base.setMyData({
      region_date: e.detail.value
    })
  }
  bindPickerChangehig(e) {
    this.Base.setMyData({
      hig: e.detail.value
    })
  }
  bindPickerChangequa(e) {
    this.Base.setMyData({
      qua: e.detail.value
    })
  }
  bindPickerChangeincome(e) {
    this.Base.setMyData({
      inc: e.detail.value
    })
  }
  bindPickerChangemarriage(e) {
    this.Base.setMyData({
      mrg: e.detail.value
    })
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
    peopleapi.list({}, (people) => {
      var people = people[0];
      var birth = people.birth_timespan;
      var age = parseInt((new Date().getTime() - birth * 1000) / 365 / 24 / 3600 / 1000);
      people.age = age;
      this.Base.setMyData({
        people
      });
    });
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.bindPickerChange = content.bindPickerChange;
body.bindRegionChangedate = content.bindRegionChangedate;
body.bindPickerChangehig = content.bindPickerChangehig;
body.bindPickerChangequa = content.bindPickerChangequa;
body.bindPickerChangeincome = content.bindPickerChangeincome;
body.bindPickerChangemarriage = content.bindPickerChangemarriage;
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)