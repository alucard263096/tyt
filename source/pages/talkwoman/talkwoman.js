// pages/content/content.js
import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  PeopleApi
} from "../../apis/people.api.js";
import { InterViewApi } from '../../apis/interview.api.js';


class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    options.id = 1;
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
    });
    show: (options.show == "true" ? true : false);
  }
  onMyShow() {
      var that = this;
      var interviewapi = new InterViewApi();
     interviewapi.info("id=1", (info) => {
        that.Base.setMyData(info);
      });
    
    var peopleapi = new PeopleApi();
    peopleapi.list({}, (people) => {
      var people = people[0];
      this.Base.setMyData({
        people
      });
    });
  }

  Agree(){
     var that=this;
     var interviewapi = new InterViewApi();
     interviewapi.fieldupdate({id:1, "fname": "showView1", "fkey":"sv1"}, (fieldupdate) => {
       this.Base.setMyData({ fieldupdate });
       });
   }
}
  var content = new Content();
  var body = content.generateBodyJson();
  body.Agree = content.Agree;
  body.yes = content.yes;
  
  body.RF = content.RF;
  body.pageScrollToBottom = content.pageScrollToBottom;
  body.onLoad = content.onLoad;
  body.onMyShow = content.onMyShow;
  Page(body)