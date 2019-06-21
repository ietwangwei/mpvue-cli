const errorMap = {
  400: {
    msg: '请求参数错误'
  },
  404: {
    msg: '找不到服务地址'
  },
  401: {
    msg: '当前用户没有权限,请重新登录'
  },
  403: {
    msg: '访问被拒绝'
  },
  405: {
    msg: '请求方法错误'
  },
  500: {
    msg: '服务器出现问题'
  }
}

export default class HttpInspectors {
  static responseHandler (res, resolve) {
    if (res.data || res.status === 200) {
      resolve(res.data)
    }
  }
  static errorHander (error, reject) {
    const status = error.response.status
    let msg = errorMap[status] ? errorMap[status].msg : '未知错误'
    wx.showModal({
      title: '接口请求失败',
      content: msg
    })
  }
}
