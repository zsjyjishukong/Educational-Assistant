import axios from 'axios'
axios.defaults.withCredentials = true

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
    if (type === 'GET') {
      promise = axios.get(url)
    } else if (type === 'POST') {
      promise = axios.post(url)
    }
    promise.then((response) => resolve(response.data), (error) => reject(error))
  })
}
