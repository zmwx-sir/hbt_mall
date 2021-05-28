<<<<<<< HEAD
export const request =(params)=>{
=======
//先记录发送异步请求的次数
let ajaxTimes=0;
export const request =(params)=>{
  ajaxTimes++;
  wx.showLoading({
    title: '加载中，请稍后',
    mask:true
  })
>>>>>>> 1bf605e (非push)
  const baseURL="https://api-hmugo-web.itheima.net/api/public/v1";
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + params.url,
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err);
<<<<<<< HEAD
      }
=======
      },
      complete:()=>{
        ajaxTimes--;
        if(ajaxTimes===0){
          //  关闭正在等待的图标
          wx.hideLoading();
        }
       }
>>>>>>> 1bf605e (非push)

    })
  })
}