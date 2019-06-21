import httpService from './httpService'
import { base } from './api'

export const baseModule = {
  test (data) {
    return httpService({
      method: 'get',
      url: base.test,
      data
    })
  }
}
