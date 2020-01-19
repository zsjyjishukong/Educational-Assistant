import axios from 'axios'
import qs from 'qs'
import router from '../router/index'
import { Toast } from 'vue-ydui/dist/lib.rem/dialog'
axios.defaults.withCredentials = true
export default function http (url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    const option = {
      url,
      method: type
    }
    if (type === 'GET' || type === 'get') {
      option.params = data
      option.headers = {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'}
    } else if (type === 'POST' || type === 'post') {
      option.data = qs.stringify(data)
      option.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    axios(option)
      .then((res) => {
        if (res.status === 200) {
          const { code } = res.data
          if (code === 0) {
            resolve(res.data)
          } else if (code === 1) { // 发生错误
            sessionStorage.clear()
            setTimeout(() => {
              router.push('/')
            }, 100)
          } else if (code === 2) { // 未登录
            Toast({
              mes: '尚未登录',
              timeout: 2000,
              icon: 'error',
              callback: () => {
                router.push('/')
              }
            })
          } else {
            resolve(res.data)
          }
        } else if (res.code === undefined) {
          resolve(res.data)
        } else {
          reject(res)
        }
      })
      .catch((error) => {
        if (error.response) {
          Toast({
            message: `http错误, ${error.response.status},${error.response.statusText}`,
            timeout: 2000,
            icon: 'error'
          })
          console.log('http错误', error)
          console.log('url', option.url)
        } else {
          Toast({
            message: `未知http错误, ${error.message}`,
            timeout: 2000,
            icon: 'error'
          })
          console.log('http错误', error)
          console.log('url', error.config.url)
        }
      })
  })
}
