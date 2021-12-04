"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*包含多个基于state的getter计算属性的对象 */
var _default = {
  totalCount: function totalCount(state) {
    return state.cartFoods.reduce(function (preTotal, food) {
      return preTotal + food.count;
    }, 0);
  },
  totalPrice: function totalPrice(state) {
    return state.cartFoods.reduce(function (preTotal, food) {
      return preTotal + food.count * food.price;
    }, 0);
  },
  positiveSize: function positiveSize(state) {
    var num = 0;
    state.ratings.forEach(function (item, index) {
      if (item.rateType === 0) {
        num++;
      }
    });
    return num;
  }
};
exports["default"] = _default;