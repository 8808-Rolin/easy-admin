import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'
import router from '../router'
import { resetRouter } from '@/router'
/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

const toError = status => {
  if (status === 500) {
    console.log(status)
    console.log(router)
    router.push({
      path: '/500',
      query: {
        redirect: router.currentRoute.fullPath
      }
    });
  } else if (status === 404) {
    router.push({
      path: '/404',
      query: {
        redirect: router.currentRoute.fullPath
      }
    });
  }
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
      // 809 token过期
      // 清除token并跳转登录页
    case 809:
      store.dispatch('user/resetToken');
      store.commit('user/RESET_STATE');
      resetRouter()
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
      // 404请求不存在
    case 404:
      setTimeout(() => {
        toError(status);
      }, 1000);
      break;
    case 500:
      setTimeout(() => {
        toError(status);
      }, 1000);
      break;
    default:
      console.log(other);
  }
}



// create an axios instance
const service = axios.create({
  //baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const {
      response
    } = error;
    if (response) {
      console.log(response.status)
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    }
  }
 );

export default service
