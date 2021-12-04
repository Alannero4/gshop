/*直接更新state的多个方法的对象 */

import Vue from 'vue'
import  {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_USERINFO,
    RESET_USERINFO,
    RESET_SHOPGOODS,
    RESET_SHOPRATINGS,
    RESET_SHOPINFO,
    INCREMENR_FOODS_COUNT,
    DECREMENT_FOODS_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from   './mutation-types'      
export default{
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
    [RECEIVE_USERINFO](state,{userInfo}){
        state.userInfo = userInfo
    },
    [RESET_USERINFO](state){
        state.userInfo = {}
    },
    [RESET_SHOPGOODS](state,{goods}){
        state.goods = goods
    },
    [RESET_SHOPRATINGS](state,{ratings}){
        state.ratings = ratings
    },
    [RESET_SHOPINFO](state,{info}){
        state.info = info
    },
    [INCREMENR_FOODS_COUNT](state,{food}){
        if(!food.count){
            //foods.count = 1//新增属性（但未绑定，页面不会更新显示）
            /*
            对象
            属性名(要用字符串，否则会认为是变量)
            属性值
            */
           Vue.set(food,'count',1)
           //在组件中可以用this.$set(food,'count',1)
           //将food添加到cartFood中
           state.cartFoods.push(food)
        }else{
            food.count++
            //将food从cartFood中删除
            if(food.count === 0){
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [DECREMENT_FOODS_COUNT](state,{food}){
        if(food.count){//有值才去减
            food.count--
        }
    },
    [CLEAR_CART](state){
        state.searchShops = []
    },
    [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
        state.searchShops = searchShops
    }

}