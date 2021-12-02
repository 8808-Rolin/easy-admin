import Cookies from 'js-cookie'

const TokenKey = 'easy_admin_token'
const AidKey = 'easy_admin_aid'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getAid() {
  return Cookies.get(AidKey)
}

export function setAid(aid) {
  return Cookies.set(AidKey, aid)
}