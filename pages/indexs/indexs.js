Page({
  /**
   * 页面的初始数据
   */
  data: {
    enable: false,
    controls: false,
    animationData: {},
    block: 'block',
    video: 'https://hf-web.oss-cn-shanghai.aliyuncs.com/xcx/shebeishangcheng/video/jn.mp4',
    image_body: 'https://hf-web.oss-cn-shanghai.aliyuncs.com/xcx/shebeishangcheng/image/jnz.svg',
    image_foot: ['https://hf-web.oss-cn-shanghai.aliyuncs.com/xcx/shebeishangcheng/image/jnza.jpg','https://hf-web.oss-cn-shanghai.aliyuncs.com/xcx/shebeishangcheng/image/jnzb.jpg'],
  },
  clickMe: function (e) {
    wx.previewImage({
      current: e.target.dataset.image[e.target.dataset.index],
      urls: e.target.dataset.image,
    })
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
    this.setData({
      block: 'block',
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
    var that = this;
    function animat() {
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      animation.translateY('10px').step();
      that.setData({
        animationData: animation.export()
      })
      setTimeout(function () {
        animation.translateY('0px').step();
        that.setData({
          animationData: animation.export()
        })
        setTimeout(function () {
          animat();
        }, 1000)
      }, 1000)
    }
    animat();
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      block: 'none'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})