import {request} from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    cateList:[],
    floorList:[]
  },
  onLoad(){
    this.getSwiperList();
    this.getcateList();
    this.getFloorList();
  },
  // 获取轮播图数据
  getSwiperList() {
    request({
      url: "/home/swiperdata"
    }).then(result => {
      
      this.setData({
        swiperList: result.data.message
      })
    })
  },
  //获取分类导航数据
  getcateList(){
    request({
      url: "/home/catitems"
    }).then(result=> {
      
      this.setData({cateList:result.data.message})
    })
  },
  //获取楼层数据
  getFloorList(){
    request({
      url: "/home/floordata"
    }).then((result)=> {
      
      this.setData({floorList:result.data.message})
    })
  }

})