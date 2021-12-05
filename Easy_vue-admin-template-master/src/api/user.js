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

/*  社团每天活跃度 */
export function getDailyAct(aid) {
  return request({
    url: `${base.sq}/api/info/get-daily-act`,
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
export function setJoinApplyStatus(uaid, type) {
  return request({
    url: `${base.sq}/api/apply/set-join-apply-status`,
    method: 'post',
    data: qs.stringify({
      uaid,
      type,
    })
  })
}

/* 获取帖子列表数据接口 */
export function getPostList(aid, type, page, limit) {
  return request({
    url: `${base.sq}/api/bbs/get-post-list`,
    method: 'get',
    params: {
      aid,
      type,
      page,
      limit
    }
  })
}
/* 删除帖子以及回复 */
export function deletePostDiscuss(requestType, typeid) {
  return request({
    url: `${base.sq}/api/bbs/delete-post-discuss`,
    method: 'post',
    data: qs.stringify({
      requestType,
      typeid
    })
  })
}
/*  论坛信息修改接口 */
export function updateAssInfo(mes) {
  return request({
    url: `${base.sq}/api/info/update-ass-info`,
    method: 'post',
    data: qs.stringify({
      ...mes
    })
  })
}

/* 图片上传接口 */
export function uploadImage(imageBASE64) {
  return request({
    url: `${base.sq}/api/tool/upload-image`,
    method: 'post',
    data: qs.stringify({
      imageBASE64
    })
  })
}

/* 搜索社团所有管理者 */
export function findAssAdmin(aid) {
  return request({
    url: `${base.sq}/api/tool/findAssAdmin`,
    method: 'get',
    params: {
      aid,
    }
  })
}

/*  活动发布 */
export function releaseAction(mes) {
  return request({
    url: `${base.sq}/api/action/release-action`,
    method: 'post',
    data: qs.stringify({
      ...mes
    })
  })
}

/* 活动一览  */
export function getActionList(aid) {
  return request({
    url: `${base.sq}/api/action/get-action-list`,
    method: 'post',
    data: qs.stringify({
      aid
    })
  })
}

/*  活动参加人员 */
export function getActionMember(actid) {
  return request({
    url: `${base.sq}/api/action/get-action-member`,
    method: 'get',
    params: {
      actid
    }
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

/* 审批清单 */
export function getAssociationApplyList(aid) {
  return request({
    url: `${base.sq}/api/apply/get-association-apply-list`,
    method: 'post',
    data: qs.stringify({
      aid
    })
  })
}

/* 发送审批 */
export function submitAssociationApply(aid, title, content) {
  return request({
    url: `${base.sq}/api/apply/submit-association-apply`,
    method: 'post',
    data: qs.stringify({
      aid,
      title,
      content
    })
  })
}

/* 通过内容ID取得审批内容 */
export function getContent(cid) {
  return request({
    url: `${base.sq}/api/tool/getContent`,
    method: 'get',
    params: {
      cid
    }
  })
}

/* 上传文件 */
export function uploadFile(data) {
  return request({
    url: `${base.sq}/api/tool/upload-file`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}
