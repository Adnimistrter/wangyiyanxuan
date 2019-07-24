/* 封装用于发送ajax请求的函数模块
 * 返回值为一promise对象
 * 包装axios
 * 自己封装ajax的目的：
 *    1.能够得到异步执行的response的data
 *    2.统一管理请求失败的状态 */

//  1.
import axios from 'axios'
// 2.暴露--默认
export default function ajax(url, data={}, type='GET') {

  return new Promise((resolve, reject) => {
    let promise
    // 1. 执行异步ajax请求
    if(type==='GET') { // 发GET请求
      promise = axios.get(url, { // 配置对象
        params: data // 指定请求参数
      })
    } else { // 发POST请求
      promise = axios.post(url, data)
    }
    // 2. 如果成功了, 调用resolve(value)
    promise.then(response => {
      resolve(response.data)
    // 3. 如果失败了, 不调用reject(reason), 而是提示异常信息
    }).catch(error => {
      // reject(error)
      message.error('请求出错了: ' + error.message)
    })
  })


}
