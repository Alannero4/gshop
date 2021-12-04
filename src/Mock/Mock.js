/*
    使用mock.js提供mock接口数据
*/
import Mock from 'mockjs'
import data from './data.json'
//返回goods接口
Mock.mock('/goods',{code:0,data:data.goods})
//返回info接口
Mock.mock('/info',{code:0,data:data.info})
//返回rating接口
Mock.mock('/ratings',{code:0,data:data.ratings})
//不需要暴露任何东西
