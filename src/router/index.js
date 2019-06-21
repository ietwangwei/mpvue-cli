const pages = require('./pages')

module.exports = {
  pages: pages,
  usingComponents: {
    'van-tag': 'vant-weapp/dist/tag/index',
    'van-button': 'vant-weapp/dist/tag/index'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '测试',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    borderStyle: 'white',
    backgroundColor: '#FFF',
    selectedColor: '#06c1ae',
    color: '#666',
    list: [
      {
        pagePath: 'pages/index',
        iconPath: 'static/images/tab1.png',
        selectedIconPath: 'static/images/tab1-s.png',
        text: '首页'
      },
      {
        pagePath: 'pages/order',
        iconPath: 'static/images/tab2.png',
        selectedIconPath: 'static/images/tab2-s.png',
        text: '订单'
      }
    ]
  }
}
