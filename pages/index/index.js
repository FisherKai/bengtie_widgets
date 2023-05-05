// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: 'home',
  },
  // 事件处理函数
  bindViewTap() {
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onTabChange(event) {
    this.setData({ active: event.detail });
  },
})
