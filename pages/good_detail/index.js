<<<<<<< HEAD
// pages/good_detail/index.js
=======


// 1发送请求获取数据
// 2点击轮播图 预览大图
  // 1给轮播图绑定事件
  // 2调用小程序的api previewImage
  // 3点击加入购物车
    // 1先绑定点击事件
    // 2获取缓存中的购物车数据 数组格式
    // 3先判断当前的商品是否已经存在于 购物车
    // 4已存在 修改商品数据 执行购物车数量++ 重新把购物车数组 填充会缓存中
    // 5不存在于购物车的数组中 直接给购物车数组添加一个新元素 新元素带上 购买数量属性 num 重新把购物车数组 填充会缓存中
    // 6弹出提示
// 4商品收藏
  // 1页面onShow的时候 加载缓存中的商品收藏的数据
  // 2判断当前商品是不是被收藏
    // 1是 改变页面图标
    // 2不是 不用做事情
// 3点击商品收藏按钮
  // 1判断商品是否存在于缓存数组中
  // 2已经存在 把该商品删除
  // 3没用存在 把商品添加到收藏数组中 存到缓存中即可

  

// 0引入 用来发送请求的方法 一定要把路径补全
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
// pages/goods_detail/index.js
>>>>>>> 1bf605e (非push)
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD

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
=======
    goodsObj: {},
    // 商品是否被收藏
    isCollect:false
  },
  // 商品对象
  GoodsInfo: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    var options = currentPage.options;
    const { goods_id } = options;
    this.getGoodsDetail(goods_id);


  },
  // 获取商品详情数据
  async getGoodsDetail(goods_id) {
    const goodsObj = await request({ url: '/goods/detail', data: { goods_id } });
    this.GoodsInfo = goodsObj;
    // 1获取缓存中的商品收藏的数组
    let collect = wx.getStorageSync("collect") || [];
    // 2判断当前商品是否被收藏
    let isCollect = collect.some(v => v.goods_id === this.GoodsInfo.goods_id);
    this.setData({
      goodsObj: {
        goods_name: goodsObj.data.message.goods_name,
        goods_price: goodsObj.data.message.goods_price,
        // iphone部分手机 不识别webp图片格式
        // 找后端工程师修改
        // 临时自己修改 确保后台存在 1.webp => 1.jpg
        goods_introduce: goodsObj.data.message.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: goodsObj.data.message.pics
      },
      isCollect
    })
  },
  // 点击轮播图 放大预览
  handlePreviewImage(e) {
    // 1构造要预览的图片数组
    const urls = this.GoodsInfo.pics.map(v => v.pics_mid);
    // 2接受传递过来的图片url
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls,
    })
  },
  // 点击 加入购物车
  handleCartAdd() {
    // 1.获取缓存中的购物车数组
    let cart = wx.getStorageSync('cart') || [];
    // 2判断商品对象是否存在于购物车数组中
    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
    if (index === -1) {
      // 3不存在 第一次添加
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo);
    } else {
      // 4已存在 执行 num++
      cart[index].num++;
    }
    // 5把购物车重新添加回缓存中
    wx.setStorageSync('cart', cart);
    // 6弹框提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      // 防止用户手抖 疯狂点击
      mask: true,
    })
  },

  // 点击商品 收藏图标
  handleCollect(){
    let isCollect=false;
    // 1获取缓存中的商品收藏数组
    let collect=wx.getStorageSync("collect")||[];
    // 2判断该商品是否被收藏过
    let index=collect.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id);
    // 3当index!=-1 表示 已经收藏过
    if(index!=-1){
      // 能找到 已经收藏过来 删除该商品
      collect.splice(index,1);
      isCollect=false;
      wx.showToast({
        title: '取消成功',
        icon:'success',
        mask:true
      });
    }else{
      // 没有收藏 添加对象
      collect.push(this.GoodsInfo);
      isCollect=true;
      wx.showToast({
        title: '收藏成功',
        icon:'success',
        mask:true
      });
    }
    // 4把数组存入到缓存中
    wx.setStorageSync("collect",collect);
    // 5修改data当中的属性 isCollect
    this.setData({
      isCollect
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
>>>>>>> 1bf605e (非push)

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})