"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationTypes = require("./mutation-types");

var _api = require("../api");

/*通过mutataions间接更新state的多个方法的对象 */
var _default = {
  //异步获取地址
  getAddress: function getAddress(_ref) {
    var commit, state, jwd, result, address;
    return regeneratorRuntime.async(function getAddress$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;
            //发送ajax请求
            jwd = state.latitude + ',' + state.longitude;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqAddress)(jwd));

          case 4:
            result = _context.sent;

            //提交一个mutation
            if (result.code === 0) {
              address = result.data;
              commit(_mutationTypes.RECEIVE_ADDRESS, {
                address: address
              });
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  //异步获取商品分类列表
  getFoodList: function getFoodList(_ref2) {
    var commit, result, foodList;
    return regeneratorRuntime.async(function getFoodList$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqFoodTypes)());

          case 3:
            result = _context2.sent;

            //提交一个mutation
            if (result.code === 0) {
              foodList = result.data;
              commit(_mutationTypes.RECEIVE_CATEGORYS, {
                categorys: foodList
              });
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  //异步获取商家列表
  getShopList: function getShopList(_ref3) {
    var commit, state, longitude, lattude, result, shopList;
    return regeneratorRuntime.async(function getShopList$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref3.commit, state = _ref3.state;
            //发送ajax请求
            longitude = state.longitude, lattude = state.lattude;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqShopCategorys)(longitude, lattude));

          case 4:
            result = _context3.sent;

            //提交一个mutation
            if (result.code === 0) {
              shopList = result.data;
              commit(_mutationTypes.RECEIVE_SHOPS, {
                shops: shopList
              });
            }

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  //记录用户信息
  recordUserInfo: function recordUserInfo(_ref4, userInfo) {
    var commit = _ref4.commit;
    commit(_mutationTypes.RECEIVE_USERINFO, {
      userInfo: userInfo
    });
  },
  //异步获取用户信息
  getUserInfo: function getUserInfo(_ref5) {
    var commit, result;
    return regeneratorRuntime.async(function getUserInfo$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            commit = _ref5.commit;
            _context4.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqGetUserInfo)());

          case 3:
            result = _context4.sent;

            if (result.code === 0) {
              commit(_mutationTypes.RECEIVE_USERINFO, {
                userInfo: result.data
              });
            }

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  //异步登出
  logOut: function logOut(_ref6) {
    var commit, result;
    return regeneratorRuntime.async(function logOut$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit = _ref6.commit;
            _context5.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqExit)());

          case 3:
            result = _context5.sent;

            if (result.code === 0) {
              commit(_mutationTypes.RESET_USERINFO);
            }

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  //获取商家信息
  getShopInfo: function getShopInfo(_ref7) {
    var commit, result;
    return regeneratorRuntime.async(function getShopInfo$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            commit = _ref7.commit;
            _context6.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqGetShopInfo)());

          case 3:
            result = _context6.sent;

            if (result.code === 0) {
              commit(_mutationTypes.RESET_SHOPINFO, {
                info: result.data
              });
            }

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  //获取商家评价
  getShopRatings: function getShopRatings(_ref8, callBack) {
    var commit, result;
    return regeneratorRuntime.async(function getShopRatings$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            commit = _ref8.commit;
            _context7.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqGetShopRatings)());

          case 3:
            result = _context7.sent;

            if (result.code === 0) {
              commit(_mutationTypes.RESET_SHOPRATINGS, {
                ratings: result.data
              });
              callBack && callBack();
            }

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  //获取商家商品
  getShopGoods: function getShopGoods(_ref9, callBack) {
    var commit, result;
    return regeneratorRuntime.async(function getShopGoods$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            commit = _ref9.commit;
            _context8.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqGetShopGoods)());

          case 3:
            result = _context8.sent;

            if (result.code === 0) {
              commit(_mutationTypes.RESET_SHOPGOODS, {
                goods: result.data
              });
              callBack && callBack();
            }

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    });
  },
  //同步更新foods中的count
  updataFoodsCount: function updataFoodsCount(_ref10, _ref11) {
    var commit = _ref10.commit;
    var isAdd = _ref11.isAdd,
        food = _ref11.food;

    if (isAdd) {
      commit(_mutationTypes.INCREMENR_FOODS_COUNT, {
        food: food
      });
    } else {
      commit(_mutationTypes.DECREMENT_FOODS_COUNT, {
        food: food
      });
    }
  },
  //搜索商家商品列表
  reqSearchShopList: function reqSearchShopList(_ref12, _ref13) {
    var commit = _ref12.commit;
    var searchShops = _ref13.searchShops;
  }
};
exports["default"] = _default;