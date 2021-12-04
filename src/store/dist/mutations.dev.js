"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _mutationTypes = require("./mutation-types");

var _RECEIVE_ADDRESS$RECE;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_RECEIVE_ADDRESS$RECE = {}, _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_ADDRESS, function (state, _ref) {
  var address = _ref.address;
  state.address = address;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_CATEGORYS, function (state, _ref2) {
  var categorys = _ref2.categorys;
  state.categorys = categorys;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_SHOPS, function (state, _ref3) {
  var shops = _ref3.shops;
  state.shops = shops;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_USERINFO, function (state, _ref4) {
  var userInfo = _ref4.userInfo;
  state.userInfo = userInfo;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RESET_USERINFO, function (state) {
  state.userInfo = {};
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RESET_SHOPGOODS, function (state, _ref5) {
  var goods = _ref5.goods;
  state.goods = goods;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RESET_SHOPRATINGS, function (state, _ref6) {
  var ratings = _ref6.ratings;
  state.ratings = ratings;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RESET_SHOPINFO, function (state, _ref7) {
  var info = _ref7.info;
  state.info = info;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.INCREMENR_FOODS_COUNT, function (state, _ref8) {
  var food = _ref8.food;

  if (!food.count) {
    //foods.count = 1//新增属性（但未绑定，页面不会更新显示）

    /*
    对象
    属性名(要用字符串，否则会认为是变量)
    属性值
    */
    _vue["default"].set(food, 'count', 1); //在组件中可以用this.$set(food,'count',1)
    //将food添加到cartFood中


    state.cartFoods.push(food);
  } else {
    food.count++; //将food从cartFood中删除

    if (food.count === 0) {
      state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
    }
  }
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.DECREMENT_FOODS_COUNT, function (state, _ref9) {
  var food = _ref9.food;

  if (food.count) {
    //有值才去减
    food.count--;
  }
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.CLEAR_CART, function (state) {
  state.searchShops = [];
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationTypes.RECEIVE_SEARCH_SHOPS, function (state, _ref10) {
  var searchShops = _ref10.searchShops;
  state.searchShops = searchShops;
}), _RECEIVE_ADDRESS$RECE);

exports["default"] = _default;