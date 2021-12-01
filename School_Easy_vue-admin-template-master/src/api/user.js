import request from '@/utils/request'
import qs from 'qs'; // 根据需求是否导入qs模块
import base from './base.js'


export function login(data) {
  return request({
    url: `${base.sq}/api/user/login`,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data:qs.stringify(data)
  })
}

export function getInfo(uid) {
  return request({
    url: `${base.sq}/api/info/get-common-person-information`,
    method: 'post',
    data:qs.stringify({uid})
  })
}

export function logout() {
  return request({
    url: `${base.local}/vue-admin-template/user/logout`,
    method: 'post'
  })
}
