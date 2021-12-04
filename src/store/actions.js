/*通过mutataions间接更新state的多个方法的对象 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_USERINFO,
    RESET_USERINFO,
    RESET_SHOPGOODS,
    RESET_SHOPINFO,
    RESET_SHOPRATINGS,
    INCREMENR_FOODS_COUNT,
    DECREMENT_FOODS_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
    reqAddress,
    reqFoodTypes,
    reqShopCategorys,
    reqGetUserInfo,
    reqExit,
    reqGetShopGoods,
    reqGetShopInfo,
    reqGetShopRatings,
    reqSearchShopList
} from '../api'
export default{
    //异步获取地址
    async getAddress({commit,state}){
        //发送ajax请求
        const jwd = state.latitude+','+state.longitude
        const result = await reqAddress(jwd)
        //提交一个mutation
        if(result.code === 0){
            const address = result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //异步获取商品分类列表
    async getFoodList({commit}){
        //发送ajax请求
        const result = await reqFoodTypes()
        //提交一个mutation
        if(result.code === 0){
            const foodList = result.data
            commit(RECEIVE_CATEGORYS,{categorys:foodList})
        }
    },
    //异步获取商家列表
    async getShopList({commit,state}){
        //发送ajax请求
        const {longitude,lattude} = state
        const result = await reqShopCategorys(longitude,lattude)
        //提交一个mutation
        if(result.code === 0){
            const shopList = result.data
            commit(RECEIVE_SHOPS,{shops:shopList})
        }
    },
    //记录用户信息
    recordUserInfo({commit},userInfo){
        commit(RECEIVE_USERINFO,{userInfo})  
    },
    //异步获取用户信息
    async getUserInfo({commit}){
        const result = await reqGetUserInfo()
        if(result.code === 0){
            commit(RECEIVE_USERINFO,{userInfo:result.data})
        }
    },
    //异步登出
    async logOut({commit}){
        const result = await reqExit() 
        if(result.code === 0){
             commit(RESET_USERINFO)
        } 
    },
    //获取商家信息
    async getShopInfo({commit}){
        const result = await reqGetShopInfo();
        if(result.code === 0){
            commit(RESET_SHOPINFO,{info:result.data})
        }
    },
    //获取商家评价
    async getShopRatings({commit},callBack){
        const result = await reqGetShopRatings();
        if(result.code === 0){
            commit(RESET_SHOPRATINGS,{ratings:result.data})
            callBack && callBack();
        }
    },
    //获取商家商品
    async getShopGoods({commit},callBack){
        const result = await reqGetShopGoods();
        if(result.code === 0){
            commit(RESET_SHOPGOODS,{goods:result.data})
            callBack && callBack();
        }
    },
    //同步更新foods中的count
    updataFoodsCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENR_FOODS_COUNT,{food})
        }else{
            commit(DECREMENT_FOODS_COUNT,{food})
        }
    },
    //搜索商家商品列表
    async searchShops({commit,state},keyWord){
        const geohash = state.latitude +','+state.longitude
        const result = await reqSearchShopList(geohash,keyWord);
        if(result.code === 0){
            console.log(result.data)
            commit(RECEIVE_SEARCH_SHOPS,{searchShops:result.data})
        }
    },
    //同步清空搜索
    clearShopCrat({commit}){
        commit(CLEAR_CART)
    }
}