// pages/card-analysis/card-analysis.js
const {
  get
} = require("../../apis/api");
const {  setUrlValue,
    getUrlValue} = require("../../utils/util")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "https://api-takumi.mihoyo.com/common/gacha_record/api/getGachaLog?authkey_ver=1&sign_type=2&auth_appid=webview_gacha&win_mode=fullscreen&gacha_id=dbebc8d9fbb0d4ffa067423482ce505bc5ea&timestamp=1681910012&region=prod_gf_cn&default_gacha_type=11&lang=zh-cn&authkey=Ah3LJ0EQHajab8CvjkOyiKZTCE1Ld9Su3raF39xfERDSoJx%2F3Ocl7MO0e71w4NYy3li9lZ5cUmvdM3FGYCAoG6DkwePf5aB1Y4bGLsCUrkKE425rYCIyoFcCs4WbhPuieaxFpGEjB9IM%2FzLU364Ueccl21YK8ShfedoXgoQ6XUElkbLiHhbBcSeiF%2FAqG0jNjcTOA9D7m%2B%2FeCgbYTgjaA6zKQ03Ze6jbpSNpxW2RhHHrxn21fLw7iyiRS4yniBWV9%2BybkJCvJEBni8xKD%2Fhzf107h6ATKV3x25ZFgmDb81V36VvQLkzf%2F19%2BsR87MtvEbmyjOTmLf%2BBYk3fhRY6AWzo0lqNAHI7ZZsuZ%2BaUXuDmwx64K5jQlXpkO8pUK79Yuzgi%2FClxTDWLRDpaAOEs7r5zNwfhmQOFtTPINO3CgIyHnBlmJoVU571iCfWxLU4mkPXx5J1mrEqCAg5Jpe%2FaTvy9cbmtyCy49NUdEoBtWQLyEsZfFQIzRrJuUmpBNZRP7gzaB0P5gz8OnTcqIQXKvnx5fqvWbxk1BKZW4U8dY0RuAZlPjQRl7n4SIypFmYfN%2FFSupBzo0filz69%2Bg1v5e48cYZbttyrj7KoA%2Fd0AzdGPPIRI1a%2Fiq4HKCd%2BkByKj%2F5R4QlPPnhLUenCbjc4fvTEqXcbJfNZbSycL4aVELE5w%3D&game_biz=hkrpg_cn&os_system=Windows%2011%20%20%2810.0.22000%29%2064bit&device_model=MS-7C82%20%28Micro-Star%20International%20Co.%2C%20Ltd.%29&plat_type=pc&page=2&size=5&gacha_type=11&end_id=0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  changeUrlValue(e) {
    this.setData({
      url: e.detail.value
    })
  },

  startAnalysis() {
    get(this.data.url).then(res=>{
      const { retcode,data} = res;
      if(retcode===0){
          const list=data.list;
          console.log(list[0].id);

      }
    })
  }
})