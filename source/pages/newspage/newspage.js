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
      this.Base.setMyData({
        people
      });
    });
  }
  
  tapMainMenu(e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var newSubMenuDisplay = initSubMenuDisplay();
    if (this.data.subMenuDisplay[index] == 'hidden') {
      newSubMenuDisplay[index] = 'show';
    } else {
      newSubMenuDisplay[index] = 'hidden';
    }
    this.setData({
      subMenuDisplay: newSubMenuDisplay
    });
  }
  tapSubMenu(e) {
    this.setData({
      subMenuDisplay: initSubMenuDisplay()
    });
    var indexArray = e.currentTarget.dataset.index.split('-');
    for (var i = 0; i < initSubMenuHighLight.length; i++) {
      if (indexArray[0] == i) {
        for (var j = 0; j < initSubMenuHighLight[i].length; j++) {
          initSubMenuHighLight[i][j] = '';
        }
      }
    }
    initSubMenuHighLight[indexArray[0]][indexArray[1]] = 'highlight';
    this.setData({
      subMenuHighLight: initSubMenuHighLight
    });
  }

}

var i = 0;
var array = [];
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.tapMainMenu = content.tapMainMenu;
body.tapSubMenu = content.tapSubMenu;
Page(body)