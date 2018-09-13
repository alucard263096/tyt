import {
  ApiConfig
} from 'apiconfig';

export class InterViewApi {
  //获取相亲信息
  info(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();

    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'interview/info',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function(res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function(res) {
        console.log(res);
        callback(false);
      },
      complete: function(res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }
  updateview1(json, callback, showLoading = true) {
    if (showLoading)
      ApiConfig.ShowLoading();

    var header = ApiConfig.GetHeader();
    console.log(header);
    wx.request({
      url: ApiConfig.GetApiUrl() + 'interview/updateview1',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: header,
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading)
          ApiConfig.CloseLoading();
      }
    })
  }


}