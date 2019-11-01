// pages/duobaohome/duobaohome.js

 var cententItemIndex = 1;

 
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    contentItemArray: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    newWinArray:[],
    dataArray:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.refresXmlhData();
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
    this.refresXmlhData();
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

  //
  centerCategoryTap: function(event){
    for(let i=0;i<this.data.contentItemArray.length;i++){
      this.data.contentItemArray[i] = 0;
    }
    console.log(event);
    if (event.target.id == "cctap0"){
      cententItemIndex = 0;
    }else if (event.target.id == "cctap1"){
      cententItemIndex = 1;
    } else if (event.target.id == "cctap2") {
      cententItemIndex = 2;
    } else if (event.target.id == "cctap3") {
      cententItemIndex = 3;
    } else if (event.target.id == "cctap4") {
      cententItemIndex = 4;
    } else if (event.target.id == "cctap5") {
      cententItemIndex = 5;
    } else if (event.target.id == "cctap6") {
      cententItemIndex = 6;
    } else if (event.target.id == "cctap7") {
      cententItemIndex = 7;
    } else if (event.target.id == "cctap8") {
      cententItemIndex = 8;
    } else if (event.target.id == "cctap9") {
      cententItemIndex = 9;
    } else if (event.target.id == "cctap10") {
      cententItemIndex = 10;
    } else if (event.target.id == "cctap11") {
      cententItemIndex = 11;
    } else if (event.target.id == "cctap12") {
      cententItemIndex = 12;
    } else if (event.target.id == "cctap13") {
      cententItemIndex = 13;
    } else if (event.target.id == "cctap14") {
      cententItemIndex = 14;
    } else if (event.target.id == "cctap15") {
      cententItemIndex = 15;
    } else if (event.target.id == "cctap16") {
      cententItemIndex = 16;
    } else if (event.target.id == "cctap17") {
      cententItemIndex = 17;
    } else if (event.target.id == "cctap18") {
      cententItemIndex = 18;
    } else if (event.target.id == "cctap19") {
      cententItemIndex = 19;
    } else if (event.target.id == "cctap20") {
      cententItemIndex = 20;
    } else if (event.target.id == "cctap21") {
      cententItemIndex = 21;
    } else {
      cententItemIndex = 22;
    }
    console.log(cententItemIndex);
    this.data.contentItemArray[cententItemIndex] = 1;
    this.setData({
      contentItemArray: this.data.contentItemArray,
    })


    this.pullRefreshData();
    
  },

//刷新最新揭晓
  refresXmlhData: function (){
    let self = this;
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('zuixinjiexiao').limit(3).get({
      success: function (res) {
        console.log(res.data)
        self.setData({
          newWinArray: res.data,
        })
      }
    })
  },
  //刷新关注推荐等
  pullRefreshData: function(){
    let self = this;
    wx.cloud.init()
    const db = wx.cloud.database()
    if (cententItemIndex == 0) {
      db.collection('shoplist').limit(20).where({
        isheat: "1",

      }).get({
        success: function (res) {
          console.log(res.data)
          self.setData({
            dataArray: res.data,
          })
        }
      })
    } else if (cententItemIndex == 1) {
      db.collection('shoplist').limit(20).where({
        ishot: "1",

      }).get({
        success: function (res) {
          console.log(res.data)
          self.setData({
            dataArray: res.data,
          })
        }
      })
    } else {

      db.collection('shoplist').limit(20).where({
        itemtype: (cententItemIndex - 1).toString(),

      }).get({
        success: function (res) {
          console.log(res.data)
          self.setData({
            dataArray: res.data,
          })
        }
      })
    }
  }
  
  
})