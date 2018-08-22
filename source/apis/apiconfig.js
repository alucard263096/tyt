export class ApiConfig {

  static GetApiUrl() {
    return "https://cmsdev.app-link.org/alucard263096/tyt/api/";
  }
  static GetUploadPath() {
    return "https://alioss.app-link.org/alucard263096/tyt/";
  }
  static GetFileUploadAPI() {
    return "https://cmsdev.app-link.org/alucard263096/tyt/fileupload";
  }

  static GetHeader() {
    var headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'UNICODE': ApiConfig.UNICODE,
      'TOKEN': ApiConfig.TOKEN,
      'CLASSID': ApiConfig.ClassId
    };
    return headers;
  }
  static UNICODE = "";
  static SetUnicode(unicode) {
    ApiConfig.UNICODE = unicode;
  }
  static TOKEN = "";
  static SetToken(token) {
    ApiConfig.TOKEN = token;
  }

  static ClassId = "";
  static SetClassId(classid) {
    ApiConfig.ClassId = classid;
  }


  static showLoadingCounter = 0;
  static ShowLoading = function () {
    if (ApiConfig.showLoadingCounter == 0) {
      wx.showLoading({
        title: '加载中',
      });
    }
    ApiConfig.showLoadingCounter = ApiConfig.showLoadingCounter + 1;
  }

  static CloseLoading = function () {
    ApiConfig.showLoadingCounter = ApiConfig.showLoadingCounter - 1;
    if (ApiConfig.showLoadingCounter == 0) {
      console.log(ApiConfig.showLoadingCounter);
      wx.hideLoading();
    }
  }




}