// pages/good_list/index.js
<<<<<<< HEAD
=======


import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
>>>>>>> 1bf605e (非push)
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD

  },

=======
    tabs: [
      {
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
    ],
    goodsList:[]
  },
  // 接口要的参数
  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },
>>>>>>> 1bf605e (非push)
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD

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

=======
    this.getGoodList();
>>>>>>> 1bf605e (非push)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
<<<<<<< HEAD

=======
    this.setData({goodsList:[]})
    // 2 重置页码
    this.QueryParams.pagenum=1;
    // 3 发送请求
    this.getGoodList();
>>>>>>> 1bf605e (非push)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
<<<<<<< HEAD

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
=======
    //  1 判断还有没有下一页数据
    if(this.QueryParams.pagenum>=this.totalPages){
      // 没有下一页数据
      //  console.log('%c'+"没有下一页数据","color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)");
      wx.showToast({ title: '没有下一页数据' });
        
    }else{
      //还有下一页数据
      //  console.log('%c'+"有下一页数据","color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)");
      this.QueryParams.pagenum++;
      this.getGoodList();
    }
  },
 // 标题点击事件 从子组件传递过来
 handleTabsItemChange(e){
  // 1 获取被点击的标题索引
  
  const {index}=e.detail;
  // 2 修改源数组
  let {tabs}=this.data;
  tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
  // 3 赋值到data中
  this.setData({
    tabs
  })
},
//获取商品列表数据
async getGoodList(){
  const res=await request({url:"/goods/search",data:this.QueryParams});
  console.log(res);
  //获取总条数
  const total=res.data.message.total;
  // 计算总页数
  this.totalPages=Math.ceil(total/this.QueryParams.pagesize);
  // console.log(this.totalPages);
  
  this.setData({
    // 拼接了数组
    goodsList:[...this.data.goodsList,...res.data.message.goods]
  })

}
>>>>>>> 1bf605e (非push)
})