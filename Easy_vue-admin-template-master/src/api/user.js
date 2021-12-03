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
    data: qs.stringify(data)
  })
}

export function getInfo(uid) {
  return request({
    url: `${base.sq}/api/info/get-common-person-information`,
    method: 'post',
    data: qs.stringify({
      uid
    })
  })
}

export function getFixedShowInfo(aid) {
  return request({
    url: `${base.sq}/api/info/get-fixed-show-info`,
    method: 'get',
    params: {
      aid
    }
  })
}

export function getAssMails(aid) {
  return request({
    url: `${base.sq}/api/info/get-ass-mails`,
    method: 'get',
    params: {
      aid
    }
  })
}

export function getPersonAct(aid) {
  return request({
    url: `${base.sq}/api/info/get-person-act`,
    method: 'get',
    params: {
      aid
    }
  })
}

/* 通过社团ID获取社团信息 */
export function getAssociationInfo(aid) {
  return request({
    url: `${base.sq}/api/info/get-association-info`,
    method: 'get',
    params: {
      aid
    }
  })
}

/* 获取社团成员 */
export function getMemberInformationList(aid) {
  return request({
    url: `${base.sq}/api/info/get-member-information-list`,
    method: 'post',
    data: qs.stringify({
      aid
    })
  })
}

/* 踢出成员 */
export function removeUser(aid, uid) {
  return request({
    url: `${base.sq}/api/info/remove-user`,
    method: 'post',
    data: qs.stringify({
      aid,
      uid,
    })
  })
}

/* 获取审批列表 */
export function getJoinApplyList(aid) {
  return request({
    url: `${base.sq}/api/apply/get-join-apply-list`,
    method: 'post',
    data: qs.stringify({
      aid,
    })
  })
}

/* 审批操作 */
export function setJoinApplyStatus(uaid,type) {
  return request({
    url: `${base.sq}/api/apply/set-join-apply-status`,
    method: 'post',
    data: qs.stringify({
      uaid,
      type,
    })
  })
}
