//index.js
//获取应用实例
import { ApiConfig } from '../../apis/apiconfig';
import { InstApi } from '../../apis/inst.api';
const app = getApp()

Page({
  //事件处理函数
  bindViewTap: function () {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  getUserInfo: function (e) {
    wx.switchTab({
      url: '/pages/home/home',
    })
  }
})
