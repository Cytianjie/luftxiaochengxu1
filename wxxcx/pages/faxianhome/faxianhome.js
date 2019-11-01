// pages/faxianhome/faxianhome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray: [],
    onVideo_id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pullRefreshData();
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.pullRefreshData();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //刷新关注推荐等
  pullRefreshData: function () {
    let self = this;
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('faxianlist').limit(20).where({
    
    }).get({
      success: function (res) {
        console.log(res.data)
        self.setData({
          dataArray: res.data,
        })
      }
    })

  },
  itemTap: function(event){

    console.log(event.currentTarget.dataset.index);
    let index = parseInt(event.currentTarget.dataset.index);
    var itemObj = this.data.dataArray[index];
    console.log(itemObj);
    if (itemObj.itemtype == 1 || itemObj.itemtype == 2){
      wx.navigateTo({
        url: '../textimagelayout/textimagelayout?id=' + itemObj._id,
      })
    }else{
        
    }
    
  },
  videobindplay:function(event){
    console.log(event);
    this.video = wx.createVideoContext(this.data.onVideo_id, this);
    this.video.stop();
    this.data.onVideo_id = event.currentTarget.id;
  }
})