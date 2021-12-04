"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RECEIVE_SEARCH_SHOPS = exports.CLEAR_CART = exports.DECREMENT_FOODS_COUNT = exports.INCREMENR_FOODS_COUNT = exports.RESET_SHOPRATINGS = exports.RESET_SHOPGOODS = exports.RESET_SHOPINFO = exports.RESET_USERINFO = exports.RECEIVE_USERINFO = exports.RECEIVE_SHOPS = exports.RECEIVE_CATEGORYS = exports.RECEIVE_ADDRESS = void 0;

/*包含n个mutation的type名称常量*/
var RECEIVE_ADDRESS = 'receive_address'; //接收地址

exports.RECEIVE_ADDRESS = RECEIVE_ADDRESS;
var RECEIVE_CATEGORYS = 'receive_categorys'; //接收食品分类数组

exports.RECEIVE_CATEGORYS = RECEIVE_CATEGORYS;
var RECEIVE_SHOPS = 'receive_shops'; //接收商家数组

exports.RECEIVE_SHOPS = RECEIVE_SHOPS;
var RECEIVE_USERINFO = 'receive_userinfo'; //接收用户信息

exports.RECEIVE_USERINFO = RECEIVE_USERINFO;
var RESET_USERINFO = 'reset_userinfo'; //重置用户信息

exports.RESET_USERINFO = RESET_USERINFO;
var RESET_SHOPINFO = 'reset_shopinfo'; //获取商家信息

exports.RESET_SHOPINFO = RESET_SHOPINFO;
var RESET_SHOPGOODS = 'reset_shopgoods'; //获取商家食品列表

exports.RESET_SHOPGOODS = RESET_SHOPGOODS;
var RESET_SHOPRATINGS = 'reset_shopratings'; //获取商家评价

exports.RESET_SHOPRATINGS = RESET_SHOPRATINGS;
var INCREMENR_FOODS_COUNT = 'increment_foods_count'; //增加食物count

exports.INCREMENR_FOODS_COUNT = INCREMENR_FOODS_COUNT;
var DECREMENT_FOODS_COUNT = 'decrement_foods_count'; //减少食物count

exports.DECREMENT_FOODS_COUNT = DECREMENT_FOODS_COUNT;
var CLEAR_CART = 'clear_info'; //清空购物车

exports.CLEAR_CART = CLEAR_CART;
var RECEIVE_SEARCH_SHOPS = 'receive_search_shops'; //

exports.RECEIVE_SEARCH_SHOPS = RECEIVE_SEARCH_SHOPS;