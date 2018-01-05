/**
 * 分班接口
 */
import request from '@/utils/request'

export function distTeachClass(param) {
  return request({
    url: '/distClass/distTeachClass',
    method: 'get',
    params: param
  })
}
