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

/* 获取个人信息 */
export function getInfo(uid) {
  return request({
    url: `${base.sq}/api/info/get-common-person-information`,
    method: 'post',
    data: qs.stringify({
      uid
    })
  })
}

export function getFixedShowInfo(data) {
  return request({
    url: `${base.local}/api/info/get-fixed-show-info`,
    method: 'get',
    params: {
      data
    }
  })
}

/*  拉取审批信息 */
export function getCreateApplyList() {
  return request({
    url: `${base.sq}/api/apply/get-create-apply-list`,
    method: 'get',
  })
}

/* 审批批复 */
export function createAssReply(caid, status) {
  return request({
    url: `${base.sq}/api/apply/create-ass-reply`,
    method: 'post',
    data: qs.stringify({
      caid,
      status
    })
  })
}
/*  拉取活动审批列表 */
export function getActionList(aid) {
  return request({
    url: `${base.sq}/api/action/get-action-list`,
    method: 'post',
    data: qs.stringify({
      aid
    })
  })
}

/* 活动审批 */
export function sendActReply(actid, status) {
  return request({
    url: `${base.sq}/api/apply/send-act-reply`,
    method: 'post',
    data: qs.stringify({
      actid,
      status
    })
  })
}
/* 获取活动详细信息接口 */
export function getActionInfo(actid) {
  return request({
    url: `${base.sq}/api/info/get-action-info`,
    method: 'post',
    data: qs.stringify({
      actid
    })
  })
}
/* 获取所有社团 */
export function getAllAss() {
  return request({
    url: `${base.sq}/api/info/get-all-ass`,
    method: 'get',
  })
}
/* 设置社员的管理员状态 */
export function setAssAdmin(aid, uid, status) {
  return request({
    url: `${base.sq}/api/info/set-ass-admin`,
    method: 'post',
    data: qs.stringify({
      aid,
      uid,
      status
    })
  })
}
/* 获取社团成员列表 */
export function getMemberList(aid) {
  return request({
    url: `${base.sq}/api/info/get-member-list`,
    method: 'get',
    params: {
      aid
    }
  })
}
