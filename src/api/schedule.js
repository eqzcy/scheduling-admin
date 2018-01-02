import request from '@/utils/request'

export function getScheduleSettingList(query) {
  return request({
    url: '/schedule/getScheduleSettingList',
    method: 'get',
    params: query
  })
}

