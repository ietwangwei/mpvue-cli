import Flyio from 'flyio/dist/npm/wx'
import httpInspector from './httpInspectors'

var FlyioInstance = new Flyio()

FlyioInstance.config.baseURL = 'http://www.test.com:8085'

const httpService = ({method, url, data}) => {
  return new Promise((resolve, reject) => {
    try {
      FlyioInstance[method || 'get'](url, data).then(res => {
        httpInspector.responseHandler(res, resolve)
      }, err => {
        httpInspector.errorHander(err, reject)
      })
    } catch (err) {
      throw err
    }
  })
}

export default httpService
