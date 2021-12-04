//包含n个接口的请求模块

import ajax from "./ajax";
//const BASE_URL =   '/api'
const BASE_URL =   'http://localhost:4000'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (jwd)=> ajax(`${BASE_URL}/position/${jwd}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodTypes = ()=> ajax(`${BASE_URL}/index_category`)
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShopCategorys = (lat,lon)=> ajax(`${BASE_URL}/shops?latitude=${lat}&longitude=${lon}`)
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShopList = (geohash,keyword)=> ajax(`${BASE_URL}/search_shops`,{geohash,keyword})
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({name,pwd,captcha})=>ajax(`${BASE_URL}/login_pwd`,{name,pwd,captcha},'POST')
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone)=>ajax(`${BASE_URL}/sendcode`,{phone})
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin = ({phone,code})=>ajax(`${BASE_URL}/login_sms`,{phone,code},'POST')
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqGetUserInfo = ()=>ajax(`${BASE_URL}/userInfo`)
// [10、用户登出](#10用户登出)<br/>
export const reqExit = ()=>ajax(`${BASE_URL}/logout`)
//获取商家信息    一下三个不需要代理
export const reqGetShopInfo = () =>ajax(`/info`)
//获取商家评价
export const reqGetShopRatings = () =>ajax(`/ratings`)
//获取商家商品
export const reqGetShopGoods = () =>ajax('/goods')

