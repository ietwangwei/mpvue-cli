module.exports = [
  {
    path: 'pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '测试首页',
      usingComponents: {
        'van-search': '/vant-weapp/dist/search/index',
        'van-card': '/vant-weapp/dist/card/index'
      }
    }
  },
  {
    path: 'pages/order', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '订单'
    }
  }
]
