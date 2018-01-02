import request from '@/utils/request'

export function getAll() {
  return request({
    url: '/electiveRecord/getAll',
    method: 'get'
  })
}

export function getAutoGroupList(actId) {
  return request({
    url: '/electiveRecord/getAutoGroupList',
    method: 'get',
    params: { actId }
  })
}

export function getElectiveStatList(actId) {
  return request({
    url: '/electiveRecord/getElectiveStatList',
    method: 'get',
    params: { actId }
  })
}

