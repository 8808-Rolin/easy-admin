import router from './router'
import store from './store'
import {
  Message
} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {
  getToken,
  setAid,
  getAid,
  setUid,
  getUid
} from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = ['/login', '/404', '/500'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  let uid = to.query.studentID
  let aid = to.query.aid
  if (aid !== undefined && aid !== getAid()) {
    setAid(aid)
    await store.commit('user/SET_AID', to.query.aid)
  }
  let checkUid = getUid() === uid ? false : true
  let bool = uid === undefined ? false : checkUid
  if (bool) store.dispatch('user/logout')
  const hasToken = getToken() && getAid()


  if (hasToken) {
    if (to.path.toLowerCase() === '/login') {
      // if is logged in, redirect to the home page
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')

          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path.toLowerCase()) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      console.log(to.query.aid)
      if (to.query.aid !== null || to.query.aid !== undefined) {
        setAid(to.query.aid)
        setUid(to.query.studentID)
        await store.commit('user/SET_AID', to.query.aid)
        await store.commit('user/SET_STUDENTID', to.query.studentID)
      }
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
