window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  GoldMiner_777: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f0dbB4YPRMOZHlQwKqfcMH", "GoldMiner_777");
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    cc.Class({
      extends: require("LMSlots_Subgame777"),
      properties: {},
      showTranse: function showTranse() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var coin, totalWin;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _context.next = 2;
              return cc.vv.gameData.getQiePing().showJinKua(function() {
                _this.node.active = false;
                cc.vv.gameData.GetBottomScript().showTotalBet(true);
              });

             case 2:
              coin = _this._subGameData.wincoin;
              cc.vv.gameData.AddCoin(coin);
              totalWin = cc.vv.gameData.GetBottomScript().getCurrentWin() || 0;
              totalWin += coin;
              cc.vv.gameData.GetSlotsScript().ShowBottomWin(coin, totalWin, true, function() {
                cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              });

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Subgame777: void 0
  } ],
  GoldMiner_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ccf3S8lvFBN4IgsfzlsVdg", "GoldMiner_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      showTotalBet: function showTotalBet(isShow) {
        cc.find("totalBetBg", this.node).active = isShow;
      },
      ShowBtnsByState: function ShowBtnsByState(strState) {
        this._super(strState);
        cc.vv.gameData.GetSlotsScript()._stopNode.active = "moveing_2" == strState;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  GoldMiner_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a88efQ+vZ5B3q995/qKaIMv", "GoldMiner_Cfg");
    "use strict";
    var _symbol, _cardmap, _cardmapfree, _cardmaprandomwild, _randomArray;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var Cfg = {
      symbol: (_symbol = {}, _defineProperty(_symbol, 1, {
        node: "s1",
        win_node: "w1",
        win_ani: {
          name: "animation",
          zIndex: 800
        },
        idle_ani: {
          name: "animation9",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s11",
        win_node: "w11",
        trigger_ani: {
          name: "animation3",
          zIndex: 800
        },
        stop_ani: {
          name: "animation",
          zIndex: 100
        },
        idle_ani: {
          name: "animation2",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s12",
        win_node: "w12",
        open_ani: {
          name: "animation1",
          zIndex: 800
        },
        close_ani: {
          name: "animation2",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 4, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 5, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 6, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 7, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 8, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 9, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 10, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 11, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 12, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 101, {
        node: "s15",
        win_node: "w1",
        win_ani: {
          name: "animation6",
          zIndex: 800
        },
        idle_ani: {
          name: "animation7",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 102, {
        node: "s14",
        win_node: "w1",
        win_ani: {
          name: "animation2",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 103, {
        node: "s13",
        win_node: "w13",
        open_ani: {
          name: "animation1",
          zIndex: 800
        },
        close_ani: {
          name: "animation2",
          zIndex: 800
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "GoldMiner_Bottom",
        Slots: "GoldMiner_Slots",
        Reels: "GoldMiner_reel",
        Symbols: "GoldMiner_symbol",
        Sound: "GoldMiner_sound"
      },
      col: 5,
      row: 4,
      col_free: 5,
      row_free: 8,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 126,
        height: 90
      },
      help_prefab: "games/GoldMiner/prefab/LMSlots_Help_prefab",
      helpItems: [ "games/GoldMiner/prefab/LMSlots_Help_item1", "games/GoldMiner/prefab/LMSlots_Help_item2", "games/GoldMiner/prefab/LMSlots_Help_item3", "games/GoldMiner/prefab/LMSlots_Help_item4", "games/GoldMiner/prefab/LMSlots_Help_item5", "games/GoldMiner/prefab/LMSlots_Help_item6", "games/GoldMiner/prefab/LMSlots_Help_item7" ],
      scatterId: 2,
      autoModelDelay: 1,
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 12, 12, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 11, 3, 3, 3, 3, 12, 12, 8, 8, 8, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 3, 3, 3, 3, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 3, 3, 3, 3, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmap, 2, [ 7, 7, 7, 7, 8, 8, 7, 11, 11, 11, 3, 3, 3, 3, 1, 1, 7, 7, 3, 3, 3, 3, 1, 2, 9, 8, 6, 6, 6, 6, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 8, 6, 6, 2, 4, 4, 4, 9, 9, 3, 3, 3, 3, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 2, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 5, 3, 3, 3, 3, 10, 10, 10, 12, 12, 12, 12, 10, 10, 10, 8, 8, 8, 7, 2, 1, 1, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 3, 3, 3, 3, 4, 4, 2, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmap, 3, [ 3, 3, 3, 3, 10, 9, 11, 11, 11, 11, 8, 8, 12, 12, 12, 12, 7, 7, 7, 3, 3, 3, 3, 4, 4, 4, 2, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 2, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 2, 1, 8, 12, 12, 12, 12, 6, 6, 6, 6, 4, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 2, 3, 3, 3, 3, 4, 4, 10, 10, 10, 10, 8, 8, 4, 4, 3, 3, 3, 3, 1, 1, 12, 9, 9, 9, 2, 5, 5, 8, 8, 8, 1, 3, 3, 3, 3, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 1, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 4, [ 8, 9, 9, 9, 1, 6, 6, 5, 6, 6, 11, 11, 7, 7, 7, 7, 4, 4, 4, 2, 3, 3, 3, 3, 7, 7, 7, 4, 3, 3, 3, 3, 7, 7, 4, 4, 12, 3, 3, 3, 3, 5, 5, 5, 2, 10, 10, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 10, 10, 10, 10, 3, 3, 3, 3, 8, 8, 8, 8, 7, 7, 1, 1, 2, 12, 12, 7, 7, 7, 7, 12, 12, 12, 12, 8, 9, 9, 11, 11, 4, 4, 8, 8, 8, 3, 3, 3, 3, 2, 9, 7, 7, 7, 1, 8, 8, 8, 8, 9, 6, 6, 6, 5, 5, 5, 5, 6, 6, 4, 4, 2, 9, 9, 9, 9, 5, 5, 8, 12, 12, 12, 5, 5, 1, 1, 4, 8, 8, 8, 6, 6, 6, 6, 1, 1, 10, 10, 10, 6, 12, 12, 1, 4, 4, 11, 11, 11, 11, 10, 10, 10, 1, 7, 7, 4, 6, 8, 4, 8, 8, 6, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 5, [ 5, 5, 5, 5, 11, 11, 11, 7, 7, 7, 1, 4, 7, 7, 7, 8, 10, 10, 11, 11, 11, 1, 1, 6, 3, 3, 3, 3, 11, 11, 11, 4, 4, 4, 6, 6, 6, 6, 9, 9, 9, 9, 1, 1, 9, 9, 9, 9, 12, 12, 12, 12, 6, 6, 6, 6, 9, 9, 9, 9, 10, 10, 6, 6, 6, 3, 3, 3, 3, 7, 7, 7, 7, 1, 1, 3, 3, 3, 3, 8, 8, 8, 8, 6, 6, 6, 5, 3, 3, 3, 3, 5, 5, 5, 5, 12, 12, 12, 12, 8, 12, 12, 12, 8, 8, 8, 8, 9, 7, 8, 8, 10, 10, 10, 10, 4, 4, 3, 3, 3, 3, 10, 10, 10, 1, 4, 4, 6, 6, 6, 7, 12, 12, 12, 12, 5, 5, 5, 1, 7, 7, 4, 7, 7, 4, 4, 4, 7, 11, 11, 11, 4, 4, 4, 7, 10, 7, 7, 9, 9, 1, 6, 6 ]), 
      _cardmap),
      cardmapfree: (_cardmapfree = {}, _defineProperty(_cardmapfree, 1, [ 12, 12, 1, 1, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 11, 12, 12, 8, 8, 8, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmapfree, 2, [ 7, 7, 7, 7, 8, 8, 7, 11, 11, 11, 1, 1, 7, 7, 1, 1, 9, 8, 6, 6, 6, 6, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 8, 6, 6, 6, 4, 4, 4, 9, 9, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 10, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 5, 10, 10, 10, 12, 12, 12, 12, 10, 10, 10, 8, 8, 8, 7, 7, 1, 1, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 4, 4, 4, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmapfree, 3, [ 10, 9, 11, 11, 11, 11, 8, 8, 12, 12, 12, 12, 7, 7, 7, 4, 4, 4, 4, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 1, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 4, 1, 8, 12, 12, 12, 12, 6, 6, 6, 6, 4, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 7, 4, 4, 10, 10, 10, 10, 8, 8, 4, 4, 1, 1, 12, 9, 9, 9, 5, 5, 5, 8, 8, 8, 1, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 1, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmapfree, 4, [ 8, 9, 9, 9, 1, 6, 6, 5, 6, 6, 11, 11, 7, 7, 7, 7, 4, 4, 4, 4, 7, 7, 7, 4, 7, 7, 4, 4, 12, 5, 5, 5, 5, 10, 10, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 10, 10, 10, 10, 8, 8, 8, 8, 7, 7, 1, 1, 1, 12, 12, 7, 7, 7, 7, 12, 12, 12, 12, 8, 9, 9, 11, 11, 4, 4, 8, 8, 8, 9, 9, 7, 7, 7, 1, 8, 8, 8, 8, 9, 6, 6, 6, 5, 5, 5, 5, 6, 6, 4, 4, 4, 9, 9, 9, 9, 5, 5, 8, 12, 12, 12, 5, 5, 1, 1, 4, 8, 8, 8, 6, 6, 6, 6, 1, 1, 10, 10, 10, 6, 12, 12, 1, 4, 4, 11, 11, 11, 11, 10, 10, 10, 1, 7, 7, 4, 6, 8, 4, 8, 8, 6, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmapfree, 5, [ 5, 5, 5, 5, 11, 11, 11, 7, 7, 7, 1, 4, 7, 7, 7, 8, 10, 10, 11, 11, 11, 1, 1, 6, 11, 11, 11, 4, 4, 4, 6, 6, 6, 6, 9, 9, 9, 9, 1, 1, 9, 9, 9, 9, 12, 12, 12, 12, 6, 6, 6, 6, 9, 9, 9, 9, 10, 10, 6, 6, 6, 7, 7, 7, 7, 1, 1, 8, 8, 8, 8, 6, 6, 6, 5, 5, 5, 5, 5, 12, 12, 12, 12, 8, 12, 12, 12, 8, 8, 8, 8, 9, 7, 8, 8, 10, 10, 10, 10, 4, 4, 10, 10, 10, 1, 4, 4, 6, 6, 6, 7, 12, 12, 12, 12, 5, 5, 5, 1, 7, 7, 4, 7, 7, 4, 4, 4, 7, 11, 11, 11, 4, 4, 4, 7, 10, 7, 7, 9, 9, 1, 6, 6 ]), 
      _cardmapfree),
      cardmaprandomwild: (_cardmaprandomwild = {}, _defineProperty(_cardmaprandomwild, 1, [ 12, 12, 6, 6, 6, 6, 5, 4, 4, 9, 9, 9, 6, 5, 5, 11, 12, 12, 8, 8, 8, 4, 4, 10, 10, 10, 10, 7, 8, 8, 8, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 11, 5, 8, 9, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 7, 7, 7, 7, 4, 4, 4, 5, 5, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmaprandomwild, 2, [ 7, 7, 7, 7, 8, 8, 7, 11, 11, 11, 7, 7, 9, 8, 6, 6, 6, 6, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 8, 6, 6, 6, 4, 4, 4, 9, 9, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 10, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 5, 10, 10, 10, 12, 12, 12, 12, 10, 10, 10, 8, 8, 8, 7, 7, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 4, 4, 4, 8, 8, 8, 8, 4, 12, 12, 6, 8, 8, 8, 10, 10, 10, 7, 7, 7, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmaprandomwild, 3, [ 10, 9, 11, 11, 11, 11, 8, 8, 12, 12, 12, 12, 7, 7, 7, 4, 4, 4, 4, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 4, 8, 12, 12, 12, 12, 6, 6, 6, 6, 4, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 7, 4, 4, 10, 10, 10, 10, 8, 8, 4, 4, 12, 9, 9, 9, 5, 5, 5, 8, 8, 8, 5, 5, 5, 12, 12, 6, 10, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 11, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 8, 6, 6, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmaprandomwild, 4, [ 8, 9, 9, 9, 6, 6, 5, 6, 6, 11, 11, 7, 7, 7, 7, 4, 4, 4, 4, 7, 7, 7, 4, 7, 7, 4, 4, 12, 5, 5, 5, 5, 10, 10, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 10, 10, 10, 10, 8, 8, 8, 8, 7, 7, 12, 12, 7, 7, 7, 7, 12, 12, 12, 12, 8, 9, 9, 11, 11, 4, 4, 8, 8, 8, 9, 9, 7, 7, 7, 8, 8, 8, 8, 9, 6, 6, 6, 5, 5, 5, 5, 6, 6, 4, 4, 4, 9, 9, 9, 9, 5, 5, 8, 12, 12, 12, 5, 5, 4, 8, 8, 8, 6, 6, 6, 6, 10, 10, 10, 6, 12, 12, 4, 4, 11, 11, 11, 11, 10, 10, 10, 7, 7, 4, 6, 8, 4, 8, 8, 6, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmaprandomwild, 5, [ 5, 5, 5, 5, 11, 11, 11, 7, 7, 7, 4, 7, 7, 7, 8, 10, 10, 11, 11, 11, 6, 11, 11, 11, 4, 4, 4, 6, 6, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 12, 12, 12, 12, 6, 6, 6, 6, 9, 9, 9, 9, 10, 10, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 6, 6, 6, 5, 5, 5, 5, 5, 12, 12, 12, 12, 8, 12, 12, 12, 8, 8, 8, 8, 9, 7, 8, 8, 10, 10, 10, 10, 4, 4, 10, 10, 10, 4, 4, 6, 6, 6, 7, 12, 12, 12, 12, 5, 5, 5, 7, 7, 4, 7, 7, 4, 4, 4, 7, 11, 11, 11, 4, 4, 4, 7, 10, 7, 7, 9, 9, 6, 6 ]), 
      _cardmaprandomwild),
      randomArray: (_randomArray = {}, _defineProperty(_randomArray, 1, 1), _defineProperty(_randomArray, 2, 1), 
      _defineProperty(_randomArray, 3, 4), _defineProperty(_randomArray, 4, 4), _defineProperty(_randomArray, 5, 4), 
      _defineProperty(_randomArray, 6, 4), _defineProperty(_randomArray, 7, 4), _defineProperty(_randomArray, 8, 4), 
      _defineProperty(_randomArray, 9, 4), _defineProperty(_randomArray, 10, 4), _defineProperty(_randomArray, 11, 4), 
      _defineProperty(_randomArray, 12, 4), _randomArray),
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      commEffect: {
        path: "games/GoldMiner/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/GoldMiner/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ],
      grayColor: cc.color(60, 60, 60),
      normalColor: cc.color(255, 255, 255),
      normalBgm: "base_bgm",
      AddAntiTime: 2,
      MapConfig: [ {
        id: 0,
        type: 0,
        needCnt: 60
      }, {
        id: 1,
        type: 1,
        needCnt: 60
      }, {
        id: 2,
        type: 1,
        needCnt: 60
      }, {
        id: 3,
        type: 2,
        needCnt: 60
      }, {
        id: 4,
        type: 1,
        needCnt: 60
      }, {
        id: 5,
        type: 1,
        needCnt: 60
      }, {
        id: 6,
        type: 1,
        needCnt: 60
      }, {
        id: 7,
        type: 3,
        needCnt: 60,
        min: 2,
        max: 10
      }, {
        id: 8,
        type: 1,
        needCnt: 60
      }, {
        id: 9,
        type: 1,
        needCnt: 60
      }, {
        id: 10,
        type: 1,
        needCnt: 60
      }, {
        id: 11,
        type: 1,
        needCnt: 60
      }, {
        id: 12,
        type: 5,
        needCnt: 60
      }, {
        id: 13,
        type: 1,
        needCnt: 60
      }, {
        id: 14,
        type: 1,
        needCnt: 60
      }, {
        id: 15,
        type: 1,
        needCnt: 60
      }, {
        id: 16,
        type: 1,
        needCnt: 60
      }, {
        id: 17,
        type: 1,
        needCnt: 60
      }, {
        id: 18,
        type: 3,
        needCnt: 60,
        min: 3,
        max: 50
      }, {
        id: 19,
        type: 1,
        needCnt: 60
      }, {
        id: 20,
        type: 1,
        needCnt: 60
      }, {
        id: 21,
        type: 1,
        needCnt: 60
      }, {
        id: 22,
        type: 1,
        needCnt: 60
      }, {
        id: 23,
        type: 1,
        needCnt: 60
      }, {
        id: 24,
        type: 1,
        needCnt: 60
      }, {
        id: 25,
        type: 4,
        needCnt: 60
      }, {
        id: 26,
        type: 1,
        needCnt: 60
      }, {
        id: 27,
        type: 1,
        needCnt: 60
      }, {
        id: 28,
        type: 1,
        needCnt: 60
      }, {
        id: 29,
        type: 1,
        needCnt: 60
      }, {
        id: 30,
        type: 1,
        needCnt: 60
      }, {
        id: 31,
        type: 1,
        needCnt: 60
      }, {
        id: 32,
        type: 1,
        needCnt: 60
      }, {
        id: 33,
        type: 3,
        needCnt: 60,
        min: 5,
        max: 100
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  GoldMiner_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16bf8VreVNII6rkrqd3DNGk", "GoldMiner_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _gameManage: null,
        _popWinManage: null,
        _qiePing: null,
        _wheelControl: null,
        _freeWheel: null,
        _mapControl: null,
        _yayaControl: null
      },
      getMapInfo: function getMapInfo() {
        return this._deskInfo.mapInfo;
      },
      setMapInfo: function setMapInfo(mapInfo) {
        this._deskInfo.mapInfo = mapInfo;
      },
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needBet;
      },
      getBalloonGame: function getBalloonGame() {
        return this._deskInfo.balloonGame;
      },
      setPopWinMange: function setPopWinMange(script) {
        this._popWinManage = script;
      },
      getPopWinManage: function getPopWinManage() {
        return this._popWinManage;
      },
      getManage: function getManage() {
        return this._gameManage;
      },
      setManage: function setManage(script) {
        this._gameManage = script;
      },
      getQiePing: function getQiePing() {
        return this._qiePing;
      },
      setQiePing: function setQiePing(script) {
        this._qiePing = script;
      },
      getFreeWheel: function getFreeWheel() {
        return this._freeWheel;
      },
      setFreeWheel: function setFreeWheel(script) {
        this._freeWheel = script;
      },
      getMapControl: function getMapControl() {
        return this._mapControl;
      },
      setMapControl: function setMapControl(script) {
        this._mapControl = script;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  GoldMiner_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "303759HXuhBBJdmHus/3i/A", "GoldMiner_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script = this.node.addComponent("GoldMiner_Manage");
        cc.vv.gameData.setManage(script);
        var safeNode = cc.find("Canvas/safe_node");
        var popWinManage = safeNode.getComponentInChildren("GoldMiner_Pop");
        popWinManage && cc.vv.gameData.setPopWinMange(popWinManage);
        var qieping = cc.find("Canvas").getComponentInChildren("GoldMiner_qiePing");
        qieping && cc.vv.gameData.setQiePing(qieping);
        var freeWheel = safeNode.getComponentInChildren("GoldMiner_freeWheel");
        freeWheel && cc.vv.gameData.setFreeWheel(freeWheel);
        var mapControl = safeNode.getComponentInChildren("GoldMiner_mapControl");
        mapControl && cc.vv.gameData.setMapControl(mapControl);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  GoldMiner_Manage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d18e3/U0iJLToKF91NSNPC/", "GoldMiner_Manage");
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var collectEffectInteval = -212.5;
    cc.Class({
      extends: cc.Component,
      properties: {
        _turntableTriggerBar: null,
        _PrizePoolRoot: null,
        _turntableTriggerBarLock: false,
        _collectNode: null,
        _initTurntableTriggerBar: true,
        _PrizePoolRootInitY: 0,
        _kuanggong: null,
        _jili: null
      },
      onLoad: function onLoad() {
        this._turntableTriggerBar = cc.find("safe_node/slots/turntableTriggerBar", this.node);
        this._kuanggong = cc.find("safe_node/kuanggong", this.node);
        this._jili = cc.find("safe_node/jili", this.node);
        this._jili.active = false;
        this._PrizePoolRoot = cc.find("safe_node/LMSlots_PrizePool_1", this.node);
        this._collectNode = cc.find("safe_node/collectNode", this.node);
        var collectButton = cc.find("iconRight/button", this._turntableTriggerBar);
        Global.btnClickEvent(collectButton, this.showMap, this);
        var turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
        Global.btnClickEvent(turntableBarButton, this.unlockTurntable, this);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
        this.initTurntableTriggerBar();
      },
      start: function start() {
        this._PrizePoolRootInitY = this._PrizePoolRoot.y;
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, false, this);
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      ShowGameview: function ShowGameview(bFree) {
        this._kuanggong.active = !bFree;
      },
      showTurntableTriggerBar: function showTurntableTriggerBar(bFree) {
        this._turntableTriggerBar.active = !bFree;
      },
      initTurntableTriggerBar: function initTurntableTriggerBar() {
        var mapInfo = cc.vv.gameData.getMapInfo();
        if (mapInfo) {
          var curmult = cc.vv.gameData.GetBetIdx();
          var lockNode = cc.find("lock", this._turntableTriggerBar);
          if (curmult >= cc.vv.gameData.getNeedBet()) {
            lockNode.active = false;
            this._turntableTriggerBarLock = false;
          } else {
            lockNode.active = true;
            this._turntableTriggerBarLock = true;
          }
          var bar = cc.find("Bar", this._turntableTriggerBar);
          var barMask = cc.find("barMask", bar);
          var barPrograss = cc.find("barMask/bar", bar);
          var progress = mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt;
          progress >= 1 && (progress = 0);
          var sjt_tou = cc.find("sjt_tou", barPrograss);
          sjt_tou.active = progress > 0;
          var dstWidth = barMask.width * progress;
          barPrograss.x = dstWidth - barMask.width;
        }
      },
      changeTurntableTriggerBar: function changeTurntableTriggerBar() {
        var curmult = cc.vv.gameData.GetBetIdx();
        var lockNode = cc.find("lock", this._turntableTriggerBar);
        if (curmult >= cc.vv.gameData.getNeedBet()) {
          if (this._turntableTriggerBarLock) {
            this._turntableTriggerBarLock = false;
            var spine = cc.find("spine", lockNode);
            var spineSp = spine.getComponent(sp.Skeleton);
            spineSp.setAnimation(0, "animation3", false);
            this._initTurntableTriggerBar || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_unlock);
            var turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
            turntableBarButton.getComponent(cc.Button).interactable = false;
          }
        } else if (!this._turntableTriggerBarLock) {
          this._turntableTriggerBarLock = true;
          lockNode.active = true;
          var _spine = cc.find("spine", lockNode);
          var _spineSp = _spine.getComponent(sp.Skeleton);
          _spineSp.setAnimation(0, "animation1", false);
          _spineSp.addAnimation(0, "animation2", true);
          this._initTurntableTriggerBar || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_lock);
          var _turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
          _turntableBarButton.getComponent(cc.Button).interactable = true;
        }
        this._initTurntableTriggerBar = false;
      },
      TrunTableTriggerBarVal: function TrunTableTriggerBarVal(mapInfo) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var curmult, bar, barMask, barPrograss, sjt_tou, progress, jinHeZi, lihe, lihePos, endPos, i, symbol, position, finalPosition, tempSymbolNode, q1x, q1y, dir, verticalDir, q1, q2x, q2y, q2, spine, liheSpine, liheEffect, dstWidth, jiman, jimanSp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                curmult = cc.vv.gameData.GetBetIdx();
                if (!(curmult < cc.vv.gameData.getNeedBet())) {
                  _context.next = 4;
                  break;
                }
                sucess();
                return _context.abrupt("return");

               case 4:
                bar = cc.find("Bar", _this2._turntableTriggerBar);
                barMask = cc.find("barMask", bar);
                barPrograss = cc.find("barMask/bar", bar);
                sjt_tou = cc.find("sjt_tou", barPrograss);
                progress = mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt;
                progress > 0 && (sjt_tou.active = true);
                jinHeZi = cc.vv.gameData.GetSlotsScript().findAllShouJiSymbol();
                if (!(jinHeZi.length > 0)) {
                  _context.next = 44;
                  break;
                }
                lihe = cc.find("giftBoxes", _this2._turntableTriggerBar);
                lihePos = lihe.convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = _this2._collectNode.convertToNodeSpaceAR(lihePos);
                for (i = 0; i < jinHeZi.length; i++) {
                  symbol = jinHeZi[i];
                  position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  finalPosition = _this2._collectNode.convertToNodeSpaceAR(position);
                  tempSymbolNode = cc.instantiate(cc.vv.gameData.GetPrefabByName("LMSlots_Symbol"));
                  cc.find("s1", tempSymbolNode).active = true;
                  tempSymbolNode.parent = _this2._collectNode;
                  tempSymbolNode.position = finalPosition;
                  tempSymbolNode.scale = 1;
                  q1x = finalPosition.x + (endPos.x - finalPosition.x) / 4;
                  q1y = finalPosition.y + (endPos.y - finalPosition.y) / 4;
                  dir = cc.v2(endPos.x - finalPosition.x, endPos.y - finalPosition.y);
                  dir.normalizeSelf();
                  verticalDir = cc.v2(dir.y, -dir.x);
                  q1 = cc.v2(q1x + 200 * verticalDir.x, q1y + 200 * verticalDir.y);
                  q2x = finalPosition.x + (endPos.x - finalPosition.x) / 2;
                  q2y = finalPosition.y + (endPos.y - finalPosition.y) / 2;
                  q2 = cc.v2(q2x + 200 * verticalDir.x, q2y + 200 * verticalDir.y);
                  cc.tween(tempSymbolNode).parallel(cc.tween().bezierTo(.5, q1, q2, endPos, {
                    easing: "quadIn"
                  }), cc.tween().to(.5, {
                    scale: .5
                  }, {
                    easing: "quadIn"
                  })).start();
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_fly);
                _context.next = 19;
                return _this2.awaitTime(.5);

               case 19:
                _this2._collectNode.removeAllChildren();
                spine = cc.find("spine", lihe);
                liheSpine = spine.getComponent(sp.Skeleton);
                liheSpine.setAnimation(0, "animation", false);
                liheSpine.addAnimation(0, "animation9", true);
                liheEffect = cc.find("sjt_js", lihe);
                liheEffect.active = true;
                liheEffect.getComponent(sp.Skeleton).setCompleteListener(function() {
                  liheEffect.active = false;
                  liheEffect.getComponent(sp.Skeleton).setCompleteListener(null);
                });
                progress > 1 && (progress = 1);
                dstWidth = barMask.width * progress;
                cc.tween(barPrograss).to(.2, {
                  x: dstWidth - barMask.width
                }).start();
                _context.next = 32;
                return _this2.awaitTime(.2);

               case 32:
                if (!(progress >= 1)) {
                  _context.next = 44;
                  break;
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_full);
                jiman = cc.find("jiman", bar);
                jiman.active = true;
                jimanSp = jiman.getComponent(sp.Skeleton);
                jimanSp.setAnimation(0, "animation2", false);
                jimanSp.setCompleteListener(function() {
                  jiman.active = false;
                  jimanSp.setCompleteListener(null);
                });
                liheSpine.setAnimation(0, "animation3", false);
                liheSpine.addAnimation(0, "animation1", true);
                _context.next = 43;
                return _this2.awaitTime(1.6);

               case 43:
                _this2.scheduleOnce(function() {
                  barPrograss.x = -barMask.width;
                  sjt_tou.active = false;
                }, 2);

               case 44:
                sucess();

               case 45:
               case "end":
                return _context.stop();
              }
            }, _callee);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      setNodeColor: function setNodeColor(node, color) {
        if (node) {
          node.color = color;
          for (var i = 0; i < node.children.length; i++) {
            var element = node.children[i];
            element.color = color;
          }
        }
      },
      onRecvClickQiQiu: function onRecvClickQiQiu(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              200 == msg.code && (1 === msg.data.rtype || 2 === msg.data.rtype && cc.vv.gameData.getFreeWheel().onSpinWheel(msg.data.result));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(data) {
        this.changeTurntableTriggerBar();
      },
      showMap: function showMap() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var collectButton;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!cc.vv.gameData.GetSlotsScript()._isInFree) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");

             case 2:
              if (!("idle" != cc.vv.gameData.GetSlotState())) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return");

             case 4:
              if (!(cc.vv.gameData.GetAutoModelTime() > 0)) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");

             case 6:
              collectButton = cc.find("iconRight/button", _this3._turntableTriggerBar);
              collectButton.getComponent(cc.Button).interactable = false;
              _context3.next = 10;
              return cc.vv.gameData.getMapControl().show(cc.vv.gameData.getMapInfo());

             case 10:
              _context3.next = 12;
              return _this3.awaitTime(2);

             case 12:
              collectButton.getComponent(cc.Button).interactable = true;

             case 13:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      unlockTurntable: function unlockTurntable() {
        if (cc.vv.gameData.GetSlotsScript()._isInFree) return;
        if ("idle" != cc.vv.gameData.GetSlotState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        var turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
        if (cc.vv.gameData.getNeedBet() <= cc.vv.gameData._deskInfo.mults.length) {
          turntableBarButton.getComponent(cc.Button).interactable = false;
          var bottom = cc.vv.gameData.GetBottomScript();
          bottom.SetBetIdx(cc.vv.gameData.getNeedBet());
        }
      },
      showkuanggongAnimation: function showkuanggongAnimation(type) {
        var kuanggongSp = this._kuanggong.getComponent(sp.Skeleton);
        switch (type) {
         case "normal":
          kuanggongSp.setAnimation(0, "idle", true);
        }
      },
      enter77: function enter77(avgBet) {
        cc.find("Canvas/safe_node/LMSlots_Subgame777").getComponent("LMSlots_Subgame777").showEnter(avgBet);
      },
      showJiLi: function showJiLi() {
        var _this4 = this;
        return new Promise(function(success, failed) {
          _this4._jili.active = true;
          _this4._jili.getComponent(sp.Skeleton).setCompleteListener(function() {
            _this4._jili.active = false;
            success();
            _this4._jili.getComponent(sp.Skeleton).setCompleteListener(null);
          });
          _this4.showkuanggongAnimation("normal");
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.notify);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  GoldMiner_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86185QFoVJDWpDFB3c/VrSv", "GoldMiner_Pop");
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      onDestroy: function onDestroy() {},
      start: function start() {},
      showWin: function showWin() {
        this.node.active = true;
        var popBg = cc.find("popup", this.node);
        popBg.opacity = 0;
        cc.tween(popBg).to(.3, {
          opacity: 255
        }).start();
      },
      hideWin: function hideWin(callBack) {
        var _this = this;
        var popBg = cc.find("popup", this.node);
        cc.tween(popBg).to(.3, {
          opacity: 0
        }).call(function() {
          callBack && callBack();
          _this.node.active = false;
        }).start();
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showFreeGameWinCoin: function showFreeGameWinCoin(num) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var show_popup, coinRoot, coin, collectBtn, show_popupSp, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
                _this3.showWin();
                show_popup = cc.find("showFreeGameWinCoin", _this3.node);
                show_popup.active = true;
                coinRoot = cc.find("coinRoot", show_popup);
                coin = cc.find("coin", coinRoot);
                collectBtn = cc.find("collectBtn", show_popup);
                coinRoot.active = false;
                collectBtn.active = false;
                show_popupSp = cc.find("freetanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation3_1", false);
                show_popupSp.addAnimation(0, "animation3_2", true);
                _context3.next = 14;
                return _this3.awaitTime(.2);

               case 14:
                coinRoot.active = true;
                coinRoot.scale = 0;
                cc.tween(coinRoot).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                collectBtn.active = true;
                collectBtn.scale = 0;
                cc.tween(collectBtn).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this3._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 2.5, function() {
                  _this3._startAddCoin = false;
                }, null, 0, true);
                _context3.next = 24;
                return _this3.awaitTime(.2);

               case 24:
                self = _this3;
                clickFunc = function() {
                  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var winCoinLabel;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        collectBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        if (!self._startAddCoin) {
                          _context.next = 9;
                          break;
                        }
                        self._startAddCoin = false;
                        coin.stopAllActions();
                        winCoinLabel = coin.getComponent(cc.Label);
                        winCoinLabel.string = Global.FormatNumToComma(num);
                        _context.next = 9;
                        return self.awaitTime(.2);

                       case 9:
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.dialog_close);
                        show_popupSp.setAnimation(0, "animation3_3", false);
                        show_popupSp.setCompleteListener(function() {
                          show_popup.active = false;
                          self.hideWin(function() {
                            sucess();
                          });
                          show_popupSp.setCompleteListener(null);
                        });
                        _context.next = 14;
                        return self.awaitTime(.3);

                       case 14:
                        cc.tween(collectBtn).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(coinRoot).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();

                       case 16:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function clickFunc() {
                    return _ref2.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(collectBtn, clickFunc);
                collectBtn.getComponent(cc.Button).interactable = true;
                collectBtn.off("click");
                collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      collectBtn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));

               case 30:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      showRandomStickyFreeGame: function showRandomStickyFreeGame(num) {
        var _this4 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
            var show_popup, timeRoot, i, element, startBtn, show_popupSp, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                _this4.showWin();
                show_popup = cc.find("showRandomStickyFreeGame", _this4.node);
                show_popup.active = true;
                timeRoot = cc.find("timeRoot", show_popup);
                for (i = 0; i < timeRoot.children.length; i++) {
                  element = timeRoot.children[i];
                  element.active = false;
                }
                cc.find("num" + num, timeRoot).active = true;
                startBtn = cc.find("startBtn", show_popup);
                timeRoot.active = false;
                startBtn.active = false;
                show_popupSp = cc.find("freetanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1_1", false);
                show_popupSp.addAnimation(0, "animation1_2", true);
                _context6.next = 15;
                return _this4.awaitTime(.2);

               case 15:
                timeRoot.active = true;
                timeRoot.scale = 0;
                cc.tween(timeRoot).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                startBtn.active = true;
                startBtn.scale = 0;
                cc.tween(startBtn).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context6.next = 23;
                return _this4.awaitTime(.2);

               case 23:
                self = _this4;
                clickFunc = function() {
                  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                       case 0:
                        startBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.dialog_close);
                        show_popupSp.setAnimation(0, "animation1_3", false);
                        show_popupSp.setCompleteListener(function() {
                          show_popup.active = false;
                          self.hideWin(function() {
                            sucess();
                          });
                          show_popupSp.setCompleteListener(null);
                        });
                        _context4.next = 7;
                        return self.awaitTime(.3);

                       case 7:
                        cc.tween(startBtn).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(timeRoot).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();

                       case 9:
                       case "end":
                        return _context4.stop();
                      }
                    }, _callee4);
                  }));
                  return function clickFunc() {
                    return _ref5.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                startBtn.getComponent(cc.Button).interactable = true;
                startBtn.off("click");
                startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      startBtn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                })));

               case 29:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x3, _x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      showStickyFreeGame: function showStickyFreeGame(num) {
        var _this5 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
            var show_popup, timeRoot, i, element, startBtn, show_popupSp, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                _this5.showWin();
                show_popup = cc.find("showStickyFreeGame", _this5.node);
                show_popup.active = true;
                timeRoot = cc.find("timeRoot", show_popup);
                for (i = 0; i < timeRoot.children.length; i++) {
                  element = timeRoot.children[i];
                  element.active = false;
                }
                cc.find("num" + num, timeRoot).active = true;
                startBtn = cc.find("startBtn", show_popup);
                timeRoot.active = false;
                startBtn.active = false;
                show_popupSp = cc.find("freetanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation2_1", false);
                show_popupSp.addAnimation(0, "animation2_2", true);
                _context9.next = 15;
                return _this5.awaitTime(.2);

               case 15:
                timeRoot.active = true;
                timeRoot.scale = 0;
                cc.tween(timeRoot).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                startBtn.active = true;
                startBtn.scale = 0;
                cc.tween(startBtn).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context9.next = 23;
                return _this5.awaitTime(.2);

               case 23:
                self = _this5;
                clickFunc = function() {
                  var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                       case 0:
                        startBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        show_popupSp.setAnimation(0, "animation2_3", false);
                        show_popupSp.setCompleteListener(function() {
                          show_popup.active = false;
                          self.hideWin(function() {
                            sucess();
                          });
                          show_popupSp.setCompleteListener(null);
                        });
                        _context7.next = 6;
                        return self.awaitTime(.3);

                       case 6:
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.dialog_close);
                        cc.tween(startBtn).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(timeRoot).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();

                       case 9:
                       case "end":
                        return _context7.stop();
                      }
                    }, _callee7);
                  }));
                  return function clickFunc() {
                    return _ref8.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                startBtn.getComponent(cc.Button).interactable = true;
                startBtn.off("click");
                startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      startBtn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                })));

               case 29:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x5, _x6) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      showJackpotWinCoin: function showJackpotWinCoin(num, mult, jpid) {
        var _this6 = this;
        return new Promise(function() {
          var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(sucess, failed) {
            var show_popup, coinRoot, coin, collectBtn, multNode, multEffect, tanchuang, cheSp, show_popupSp, firstNum, btnDelay, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                _context13.t0 = jpid;
                _context13.next = 1 === _context13.t0 ? 3 : 2 === _context13.t0 ? 5 : 3 === _context13.t0 ? 7 : 4 === _context13.t0 ? 9 : 11;
                break;

               case 3:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_dialog_collect_show);
                return _context13.abrupt("break", 11);

               case 5:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.minor_dialog_collect_show);
                return _context13.abrupt("break", 11);

               case 7:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.major_dialog_collect_show);
                return _context13.abrupt("break", 11);

               case 9:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.grand_dialog_collect_show);
                return _context13.abrupt("break", 11);

               case 11:
                mult || (mult = 1);
                _this6.showWin();
                show_popup = cc.find("showJackpotWinCoin", _this6.node);
                show_popup.active = true;
                coinRoot = cc.find("coinRoot", show_popup);
                coin = cc.find("coin", coinRoot);
                collectBtn = cc.find("collectBtn", show_popup);
                multNode = cc.find("multNode", show_popup);
                cc.find("mult", multNode).getComponent(cc.Label).string = mult + "X";
                multEffect = cc.find("multEffect", show_popup);
                multEffect.active = false;
                coinRoot.active = false;
                collectBtn.active = false;
                multNode.active = false;
                tanchuang = cc.find("wheeltanchuang", show_popup);
                tanchuang.active = false;
                cheSp = cc.find("wheelche", show_popup).getComponent(sp.Skeleton);
                cheSp.setAnimation(0, "animation1", false);
                cheSp.addAnimation(0, "animation2", true);
                _context13.next = 32;
                return _this6.awaitTime(.5);

               case 32:
                tanchuang.active = true;
                show_popupSp = tanchuang.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation" + (5 - jpid) + "_1", false);
                show_popupSp.addAnimation(0, "animation" + (5 - jpid) + "_2", true);
                _context13.next = 38;
                return _this6.awaitTime(.5);

               case 38:
                coinRoot.active = true;
                coinRoot.scale = 0;
                cc.tween(coinRoot).to(.3, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                if (mult > 1) {
                  multNode.active = true;
                  multNode.scale = 0;
                  cc.tween(multNode).to(.2, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).start();
                }
                firstNum = num / mult;
                _this6._startAddCoin = true;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.win_rollup);
                Global.doRoallNumEff(coin, Math.floor(.1 * firstNum), firstNum, 2, _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                  var finalPosition, endPos, tempMult, radian, q1x, q1, q2x, q2;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      _this6._startAddCoin = false;
                      if (!(mult > 1)) {
                        _context10.next = 20;
                        break;
                      }
                      finalPosition = multNode.position;
                      endPos = coinRoot.position;
                      tempMult = cc.instantiate(multNode);
                      tempMult.position = finalPosition;
                      tempMult.parent = multNode.parent;
                      multNode.active = false;
                      radian = 188.4954 / 180;
                      q1x = finalPosition.x + (endPos.x - finalPosition.x) / 4;
                      q1 = cc.v2(q1x, 50 + finalPosition.y + Math.cos(radian) * q1x);
                      q2x = finalPosition.x + (endPos.x - finalPosition.x) / 2;
                      q2 = cc.v2(q2x, 50 + finalPosition.y + Math.cos(radian) * q2x);
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.multiply);
                      cc.tween(tempMult).bezierTo(.5, q1, q2, endPos, {
                        easing: "quadIn"
                      }).call(function() {
                        tempMult.parent = null;
                        multEffect.active = true;
                        var multEffectSp = multEffect.getComponent(sp.Skeleton);
                        multEffectSp.setCompleteListener(function() {
                          multEffect.active = false;
                          multEffectSp.setCompleteListener(null);
                        });
                      }).start();
                      _context10.next = 17;
                      return _this6.awaitTime(.5);

                     case 17:
                      _this6._startAddCoin = true;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.win_rollup);
                      Global.doRoallNumEff(coin, firstNum, num, 2, function() {
                        _this6._startAddCoin = false;
                      }, null, 0, true);

                     case 20:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                })), null, 0, true);
                btnDelay = 0;
                mult > 1 && (btnDelay = 3);
                _context13.next = 50;
                return _this6.awaitTime(btnDelay);

               case 50:
                collectBtn.active = true;
                collectBtn.scale = 0;
                cc.tween(collectBtn).to(.3, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context13.next = 55;
                return _this6.awaitTime(.3);

               case 55:
                self = _this6;
                clickFunc = function() {
                  var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                    var winCoinLabel;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) switch (_context11.prev = _context11.next) {
                       case 0:
                        collectBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        if (!self._startAddCoin) {
                          _context11.next = 10;
                          break;
                        }
                        self._startAddCoin = false;
                        coin.stopAllActions();
                        winCoinLabel = coin.getComponent(cc.Label);
                        winCoinLabel.string = Global.FormatNumToComma(num);
                        Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.win_rollup);
                        _context11.next = 10;
                        return self.awaitTime(.2);

                       case 10:
                        show_popupSp.setAnimation(0, "animation" + (5 - jpid) + "_3", false);
                        cc.tween(collectBtn).to(.3, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(coinRoot).to(.3, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context11.next = 15;
                        return self.awaitTime(.5);

                       case 15:
                        cheSp.setAnimation(0, "animation3", false);
                        cheSp.setCompleteListener(function() {
                          show_popup.active = false;
                          self.hideWin(function() {
                            sucess();
                          });
                          cheSp.setCompleteListener(null);
                        });

                       case 17:
                       case "end":
                        return _context11.stop();
                      }
                    }, _callee11);
                  }));
                  return function clickFunc() {
                    return _ref12.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(collectBtn, clickFunc);
                collectBtn.getComponent(cc.Button).interactable = true;
                collectBtn.off("click");
                collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      collectBtn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                })));

               case 61:
               case "end":
                return _context13.stop();
              }
            }, _callee13);
          }));
          return function(_x7, _x8) {
            return _ref10.apply(this, arguments);
          };
        }());
      },
      showMapRandomFreeGame: function showMapRandomFreeGame() {
        var _this7 = this;
        return new Promise(function() {
          var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(sucess, failed) {
            var show_popup, tips, startBtn, show_popupSp, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_collect_show);
                _this7.showWin();
                show_popup = cc.find("showMapRandomFreeGame", _this7.node);
                show_popup.active = true;
                tips = cc.find("tips", show_popup);
                startBtn = cc.find("startBtn", show_popup);
                tips.active = false;
                startBtn.active = false;
                show_popupSp = cc.find("dajiediantanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1_1", false);
                show_popupSp.addAnimation(0, "animation1_2", true);
                _context16.next = 13;
                return _this7.awaitTime(.2);

               case 13:
                tips.active = true;
                tips.scale = 0;
                cc.tween(tips).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                startBtn.active = true;
                startBtn.scale = 0;
                cc.tween(startBtn).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context16.next = 21;
                return _this7.awaitTime(.5);

               case 21:
                self = _this7;
                clickFunc = function() {
                  var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                      while (1) switch (_context14.prev = _context14.next) {
                       case 0:
                        startBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.dialog_close);
                        show_popupSp.setAnimation(0, "animation1_3", false);
                        show_popupSp.setCompleteListener(function() {
                          show_popup.active = false;
                          self.hideWin(function() {
                            sucess();
                          });
                          show_popupSp.setCompleteListener(null);
                        });
                        _context14.next = 7;
                        return self.awaitTime(.3);

                       case 7:
                        cc.tween(startBtn).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(tips).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();

                       case 9:
                       case "end":
                        return _context14.stop();
                      }
                    }, _callee14);
                  }));
                  return function clickFunc() {
                    return _ref15.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                startBtn.getComponent(cc.Button).interactable = true;
                startBtn.off("click");
                startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      startBtn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee15);
                })));

               case 27:
               case "end":
                return _context16.stop();
              }
            }, _callee16);
          }));
          return function(_x9, _x10) {
            return _ref14.apply(this, arguments);
          };
        }());
      },
      showMapStickyFreeGame: function showMapStickyFreeGame() {
        var _this8 = this;
        return new Promise(function() {
          var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(sucess, failed) {
            var show_popup, tips, startBtn, show_popupSp, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_collect_show);
                _this8.showWin();
                show_popup = cc.find("showMapStickyFreeGame", _this8.node);
                show_popup.active = true;
                tips = cc.find("tips", show_popup);
                startBtn = cc.find("startBtn", show_popup);
                tips.active = false;
                startBtn.active = false;
                show_popupSp = cc.find("dajiediantanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1_1", false);
                show_popupSp.addAnimation(0, "animation1_2", true);
                _context19.next = 13;
                return _this8.awaitTime(.2);

               case 13:
                tips.active = true;
                tips.scale = 0;
                cc.tween(tips).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                startBtn.active = true;
                startBtn.scale = 0;
                cc.tween(startBtn).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context19.next = 21;
                return _this8.awaitTime(.5);

               case 21:
                self = _this8;
                clickFunc = function() {
                  var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                      while (1) switch (_context17.prev = _context17.next) {
                       case 0:
                        startBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.dialog_close);
                        show_popupSp.setAnimation(0, "animation1_3", false);
                        show_popupSp.setCompleteListener(function() {
                          show_popup.active = false;
                          self.hideWin(function() {
                            sucess();
                          });
                          show_popupSp.setCompleteListener(null);
                        });
                        _context17.next = 7;
                        return self.awaitTime(.3);

                       case 7:
                        cc.tween(startBtn).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(tips).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();

                       case 9:
                       case "end":
                        return _context17.stop();
                      }
                    }, _callee17);
                  }));
                  return function clickFunc() {
                    return _ref18.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                startBtn.getComponent(cc.Button).interactable = true;
                startBtn.off("click");
                startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      startBtn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                })));

               case 27:
               case "end":
                return _context19.stop();
              }
            }, _callee19);
          }));
          return function(_x11, _x12) {
            return _ref17.apply(this, arguments);
          };
        }());
      },
      showMapMovingFreeGame: function showMapMovingFreeGame() {
        var _this9 = this;
        return new Promise(function() {
          var _ref20 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(sucess, failed) {
            var show_popup, tips, startBtn, show_popupSp, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) switch (_context22.prev = _context22.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_collect_show);
                _this9.showWin();
                show_popup = cc.find("showMapMovingFreeGame", _this9.node);
                show_popup.active = true;
                tips = cc.find("tips", show_popup);
                startBtn = cc.find("startBtn", show_popup);
                tips.active = false;
                startBtn.active = false;
                show_popupSp = cc.find("dajiediantanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1_1", false);
                show_popupSp.addAnimation(0, "animation1_2", true);
                _context22.next = 13;
                return _this9.awaitTime(.2);

               case 13:
                tips.active = true;
                tips.scale = 0;
                cc.tween(tips).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                startBtn.active = true;
                startBtn.scale = 0;
                cc.tween(startBtn).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context22.next = 21;
                return _this9.awaitTime(.5);

               case 21:
                self = _this9;
                clickFunc = function() {
                  var _ref21 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
                    return regeneratorRuntime.wrap(function _callee20$(_context20) {
                      while (1) switch (_context20.prev = _context20.next) {
                       case 0:
                        startBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.dialog_close);
                        show_popupSp.setAnimation(0, "animation1_3", false);
                        show_popupSp.setCompleteListener(function() {
                          show_popup.active = false;
                          self.hideWin(function() {
                            sucess();
                          });
                          show_popupSp.setCompleteListener(null);
                        });
                        _context20.next = 7;
                        return self.awaitTime(.3);

                       case 7:
                        cc.tween(startBtn).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(tips).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();

                       case 9:
                       case "end":
                        return _context20.stop();
                      }
                    }, _callee20);
                  }));
                  return function clickFunc() {
                    return _ref21.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                startBtn.getComponent(cc.Button).interactable = true;
                startBtn.off("click");
                startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
                  return regeneratorRuntime.wrap(function _callee21$(_context21) {
                    while (1) switch (_context21.prev = _context21.next) {
                     case 0:
                      startBtn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context21.stop();
                    }
                  }, _callee21);
                })));

               case 27:
               case "end":
                return _context22.stop();
              }
            }, _callee22);
          }));
          return function(_x13, _x14) {
            return _ref20.apply(this, arguments);
          };
        }());
      },
      showMapMultFreeGame: function showMapMultFreeGame(mult1, mult2) {
        var _this10 = this;
        return new Promise(function() {
          var _ref23 = _asyncToGenerator(regeneratorRuntime.mark(function _callee25(sucess, failed) {
            var show_popup, tips, startBtn, show_popupSp, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) switch (_context25.prev = _context25.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_collect_show);
                _this10.showWin();
                show_popup = cc.find("showMapMultFreeGame", _this10.node);
                show_popup.active = true;
                tips = cc.find("tips", show_popup);
                startBtn = cc.find("startBtn", show_popup);
                cc.find("wild1/num", tips).getComponent(cc.Label).string = mult1 + "X";
                cc.find("wild2/num", tips).getComponent(cc.Label).string = mult2 + "X";
                tips.active = false;
                startBtn.active = false;
                show_popupSp = cc.find("dajiediantanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1_1", false);
                show_popupSp.addAnimation(0, "animation1_2", true);
                _context25.next = 15;
                return _this10.awaitTime(.2);

               case 15:
                tips.active = true;
                tips.scale = 0;
                cc.tween(tips).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                startBtn.active = true;
                startBtn.scale = 0;
                cc.tween(startBtn).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context25.next = 23;
                return _this10.awaitTime(.5);

               case 23:
                self = _this10;
                clickFunc = function() {
                  var _ref24 = _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
                    return regeneratorRuntime.wrap(function _callee23$(_context23) {
                      while (1) switch (_context23.prev = _context23.next) {
                       case 0:
                        startBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.dialog_close);
                        show_popupSp.setAnimation(0, "animation1_3", false);
                        show_popupSp.setCompleteListener(function() {
                          show_popup.active = false;
                          self.hideWin(function() {
                            sucess();
                          });
                          show_popupSp.setCompleteListener(null);
                        });
                        _context23.next = 7;
                        return self.awaitTime(.3);

                       case 7:
                        cc.tween(startBtn).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(tips).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();

                       case 9:
                       case "end":
                        return _context23.stop();
                      }
                    }, _callee23);
                  }));
                  return function clickFunc() {
                    return _ref24.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                startBtn.getComponent(cc.Button).interactable = true;
                startBtn.off("click");
                startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee24() {
                  return regeneratorRuntime.wrap(function _callee24$(_context24) {
                    while (1) switch (_context24.prev = _context24.next) {
                     case 0:
                      startBtn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context24.stop();
                    }
                  }, _callee24);
                })));

               case 29:
               case "end":
                return _context25.stop();
              }
            }, _callee25);
          }));
          return function(_x15, _x16) {
            return _ref23.apply(this, arguments);
          };
        }());
      },
      showMapFreeGameWinCoin: function showMapFreeGameWinCoin(num) {
        var _this11 = this;
        return new Promise(function() {
          var _ref26 = _asyncToGenerator(regeneratorRuntime.mark(function _callee28(sucess, failed) {
            var show_popup, coinRoot, coin, collectBtn, show_popupSp, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) switch (_context28.prev = _context28.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mapfree_dialog_start_show);
                _this11.showWin();
                show_popup = cc.find("showMapFreeGameWinCoin", _this11.node);
                show_popup.active = true;
                coinRoot = cc.find("coinRoot", show_popup);
                coin = cc.find("coin", coinRoot);
                collectBtn = cc.find("collectBtn", show_popup);
                coinRoot.active = false;
                collectBtn.active = false;
                show_popupSp = cc.find("dajiediantanchuang", show_popup).getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation2_1", false);
                show_popupSp.addAnimation(0, "animation2_2", true);
                _context28.next = 14;
                return _this11.awaitTime(.2);

               case 14:
                coinRoot.active = true;
                coinRoot.scale = 0;
                cc.tween(coinRoot).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                collectBtn.active = true;
                collectBtn.scale = 0;
                cc.tween(collectBtn).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this11._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * num), num, 2.5, function() {
                  _this11._startAddCoin = false;
                }, null, 0, true);
                _context28.next = 24;
                return _this11.awaitTime(.2);

               case 24:
                self = _this11;
                clickFunc = function() {
                  var _ref27 = _asyncToGenerator(regeneratorRuntime.mark(function _callee26() {
                    var winCoinLabel;
                    return regeneratorRuntime.wrap(function _callee26$(_context26) {
                      while (1) switch (_context26.prev = _context26.next) {
                       case 0:
                        collectBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.click);
                        if (self._startAddCoin) {
                          self._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(num);
                        }
                        _context26.next = 5;
                        return self.awaitTime(.2);

                       case 5:
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.dialog_close);
                        show_popupSp.setAnimation(0, "animation2_3", false);
                        show_popupSp.setCompleteListener(function() {
                          show_popup.active = false;
                          self.hideWin(function() {
                            sucess();
                          });
                          show_popupSp.setCompleteListener(null);
                        });
                        _context26.next = 10;
                        return self.awaitTime(.3);

                       case 10:
                        cc.tween(collectBtn).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(coinRoot).to(.2, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();

                       case 12:
                       case "end":
                        return _context26.stop();
                      }
                    }, _callee26);
                  }));
                  return function clickFunc() {
                    return _ref27.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(collectBtn, clickFunc);
                collectBtn.getComponent(cc.Button).interactable = true;
                collectBtn.off("click");
                collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee27() {
                  return regeneratorRuntime.wrap(function _callee27$(_context27) {
                    while (1) switch (_context27.prev = _context27.next) {
                     case 0:
                      collectBtn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context27.stop();
                    }
                  }, _callee27);
                })));

               case 30:
               case "end":
                return _context28.stop();
              }
            }, _callee28);
          }));
          return function(_x17, _x18) {
            return _ref26.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  GoldMiner_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0c47SLzXtH6oa42B1br44S", "GoldMiner_PrizePool");
    "use strict";
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        if (poolType > 0 && poolType < 4) {
          var jpNodeName = jackpotNames[poolType];
          this.updataJackPoolLock(poolType, bLock);
          if (jpNodeName) {
            var safeNode = cc.find("Canvas/safe_node");
            var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
            if (jpNode) {
              var targetJpNode = cc.find("prizePool_" + jpNodeName, jpNode.node.parent);
              if (targetJpNode) {
                var lbl_num = cc.find("lbl_num", targetJpNode);
                var winEffect = cc.find("winEffect", targetJpNode);
                if (bLock) {
                  if (!bInit) {
                    Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_lock);
                    winEffect.active = true;
                    var winEffectSp = winEffect.getComponent(sp.Skeleton);
                    winEffectSp.setAnimation(0, "animation" + (4 - poolType) + "_2", false);
                    winEffectSp.setCompleteListener(function() {
                      winEffectSp.setCompleteListener(null);
                      winEffect.active = false;
                    });
                  }
                  cc.SpriteAtlas;
                  lbl_num.getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme230_jp_2");
                  targetJpNode.getComponent("ImgSwitchCmp").setIndex(1);
                } else {
                  if (!bInit) {
                    Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_unlock);
                    winEffect.active = true;
                    var _winEffectSp = winEffect.getComponent(sp.Skeleton);
                    _winEffectSp.setAnimation(0, "animation" + (4 - poolType) + "_1", false);
                    _winEffectSp.setCompleteListener(function() {
                      _winEffectSp.setCompleteListener(null);
                      winEffect.active = false;
                    });
                  }
                  lbl_num.getComponent(cc.Label).font = cc.vv.gameData.GetFontByName("theme230_jp_1");
                  targetJpNode.getComponent("ImgSwitchCmp").setIndex(0);
                }
              }
            }
          }
        }
      },
      updataJackPoolLock: function updataJackPoolLock(index, isLock) {
        var tempIndex = index;
        if (isLock) {
          if (this._nowUpdatePool < tempIndex) return;
          this._nowUpdatePool = tempIndex;
        } else {
          if (this._nowUpdatePool > tempIndex) return;
          this._nowUpdatePool = tempIndex;
        }
        var safeNode = cc.find("Canvas/safe_node");
        var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
        if (jpNode) for (var i = 0; i < jackpotNames.length; i++) {
          var jpNodeName = jackpotNames[i];
          var tips = cc.find("tips_" + jpNodeName, jpNode.node.parent);
          if (tips) if (index === i) if (isLock) {
            cc.find("lock", tips).active = true;
            cc.find("unlock", tips).active = false;
            tips.scale = 0;
            cc.tween(tips).to(.5, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(.5).to(.5, {
              scale: 0
            }, {
              easing: "backIn"
            }).start();
          } else {
            cc.find("lock", tips).active = false;
            cc.find("unlock", tips).active = true;
            tips.scale = 0;
            cc.tween(tips).to(.5, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(.5).to(.5, {
              scale: 0
            }, {
              easing: "backIn"
            }).start();
          } else {
            tips.stopAllActions();
            tips.scale = 0;
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  GoldMiner_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55b64ZinpVK4Ll9xQn6rW3g", "GoldMiner_Slots");
    "use strict";
    function _createForOfIteratorHelper(o) {
      if ("undefined" === typeof Symbol || null == o[Symbol.iterator]) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
          var i = 0;
          var F = function F() {};
          return {
            s: F,
            n: function n() {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function e(_e) {
              throw _e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var it, normalCompletion = true, didErr = false, err;
      return {
        s: function s() {
          it = o[Symbol.iterator]();
        },
        n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function e(_e2) {
          didErr = true;
          err = _e2;
        },
        f: function f() {
          try {
            normalCompletion || null == it["return"] || it["return"]();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(n);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand" ];
    var multWildIdx = [ 3, 8, 13, 18, 23, 28, 33, 38 ];
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _node_freeGame: null,
        _freeGameFinalWays: [],
        _isInFree: false,
        _colFree: 0,
        _rowFree: 0,
        _reelsFree: [],
        _freeSlotsNode: null,
        _prizePool: null,
        _normalMask: null,
        _freeMask: null,
        _canStop: false,
        _normalSpine: null,
        _freeTopAniNode: null,
        _wildTopNode: null,
        _currWildList: [],
        _currWildNodeList: [],
        _mapFree: false,
        _stopNode: null,
        _freeStickeyMask: null,
        _randomWild: false,
        _lansemumenList: [],
        _isMoveGroup: false,
        _chufaFreeGame: false
      },
      Init: function Init() {
        var _this = this;
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this._colFree = this._cfg.col_free;
        this._rowFree = this._cfg.row_free;
        this.createReels(this._col, this._row);
        this.createFreeReels(this._colFree, this._rowFree);
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        this.scheduleOnce(function() {
          _this.ReconnectShow();
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.welcome);
        }, 0);
      },
      onLoad: function onLoad() {
        this._topAniNode = cc.find("reels/top_ani", this.node);
        this._freeSlotsNode = cc.find("slotsfree", this.node.parent);
        this._freeTopAniNode = cc.find("reels/top_ani", this._freeSlotsNode);
        this._prizePool = cc.find("LMSlots_PrizePool_1", this.node.parent).getComponent("GoldMiner_PrizePool");
        this._normalMask = cc.find("reels/mask", this.node);
        this._normalMask.opacity = 0;
        this._freeMask = cc.find("reels/mask", this._freeSlotsNode);
        this._freeMask.opacity = 0;
        this._normalSpine = cc.find("reels/spine", this.node);
        this._normalSpine.on("click", this.slotsSpine, this);
        this._wildTopNode = cc.find("wildTopNode", this.node.parent);
        this._stopNode = cc.find("reels/stop", this.node);
        this._stopNode.active = false;
        this._stopNode.on("click", this.onStop, this);
        this._freeStickeyMask = cc.find("freemask", this.node.parent);
        this._freeStickeyMask.y = 922 - cc.winSize.height / 2;
        this._freeStickeyMask.active = false;
      },
      slotsSpine: function slotsSpine() {
        this._bottomScript.OnClickSpin();
      },
      onStop: function onStop() {
        this._stopNode.active = false;
        this._bottomScript.OnClickStop();
      },
      CanDoNextRound: function CanDoNextRound() {
        this._super();
        this._normalSpine.getComponent(cc.Button).interactable = this._bottomScript.GetSpinBtnState();
      },
      RegisterEvent: function RegisterEvent() {},
      createReels: function createReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent(reelCmp);
          this._reels.push(scp);
          scp.Init(i, row, this._topAniNode);
        }
      },
      createFreeReels: function createFreeReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this._freeSlotsNode);
          var scp = node.addComponent(reelCmp);
          this._reelsFree.push(scp);
          scp.Init(i, row, this._freeTopAniNode);
        }
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var cards, showRandom, destHeight;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3._gameInfo = msg;
              cards = msg.resultCards;
              _this3.SetSlotsResult(cards);
              _this3.SetReelStateInfo(cards);
              if (!_this3._gameInfo.wheelGame) {
                _context.next = 10;
                break;
              }
              showRandom = Global.random(0, 100);
              if (!(showRandom > 50)) {
                _context.next = 10;
                break;
              }
              _this3._chufaFreeGame = true;
              _context.next = 10;
              return cc.vv.gameData.getManage().showJiLi();

             case 10:
              if (!_this3._mapFree) {
                _context.next = 26;
                break;
              }
              if (!(2 === _this3._cfg.MapConfig[msg.mapInfo.currId].type)) {
                _context.next = 16;
                break;
              }
              _context.next = 14;
              return _this3.showRandomWild(msg.mapInfo);

             case 14:
              _context.next = 24;
              break;

             case 16:
              if (!(4 === _this3._cfg.MapConfig[msg.mapInfo.currId].type)) {
                _context.next = 21;
                break;
              }
              _context.next = 19;
              return _this3.showMoveWild(msg.mapInfo);

             case 19:
              _context.next = 24;
              break;

             case 21:
              if (!(3 === _this3._cfg.MapConfig[msg.mapInfo.currId].type)) {
                _context.next = 24;
                break;
              }
              _context.next = 24;
              return _this3.awaitTime(2);

             case 24:
              _context.next = 43;
              break;

             case 26:
              if (!_this3._gameInfo.extraFreeInfo) {
                _context.next = 43;
                break;
              }
              if (!(2 === _this3._gameInfo.extraFreeInfo.type)) {
                _context.next = 37;
                break;
              }
              _this3._freeStickeyMask.active = true;
              destHeight = 90 * _this3._gameInfo.extraFreeInfo.lockRow;
              if (!(_this3._freeStickeyMask.height > destHeight)) {
                _context.next = 35;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.move);
              cc.tween(_this3._freeStickeyMask).to(.5, {
                height: 90 * _this3._gameInfo.extraFreeInfo.lockRow
              }).start();
              _context.next = 35;
              return _this3.awaitTime(.5);

             case 35:
              _context.next = 43;
              break;

             case 37:
              if (!(1 === _this3._gameInfo.extraFreeInfo.type)) {
                _context.next = 43;
                break;
              }
              _context.next = 40;
              return _this3.showRandomStickyWild(_this3._gameInfo.extraFreeInfo.currRandWilds);

             case 40:
              if (!_this3._gameInfo.extraFreeInfo.moveGroup) {
                _context.next = 43;
                break;
              }
              _context.next = 43;
              return _this3.randomStickeyMoveGroup(_this3._gameInfo.extraFreeInfo.moveGroup);

             case 43:
              _this3._canStop = true;

             case 44:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      GetSymbolWorldPosByIdx: function GetSymbolWorldPosByIdx(idx) {
        var reels = this._reels;
        var _col = this._col;
        var _row = this._row;
        if (this._isInFree) {
          reels = this._reelsFree;
          _col = this._colFree;
          _row = this._rowFree;
        }
        var col = (idx - 1) % _col;
        var row = _row - Math.floor((idx - 1) / _col) - 1;
        var position = reels[col].GetSymbolPosByRow(row);
        var retPos = reels[col]._holderNode.convertToWorldSpaceAR(position);
        retPos.y += reels[col]._curY;
        return retPos;
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        this._bottomScript.ShowBtnsByState("moveing_1");
        this._stopTime = -1;
        var reels = this._reels;
        this._isInFree && (reels = this._reelsFree);
        for (var i = 0; i < reels.length; i++) {
          var item = reels[i];
          var reelStopInterv = 0;
          item.StopMove(reelStopInterv);
          item.StopMoveRightNow();
        }
      },
      findJackPotBack: function findJackPotBack(arr) {
        var jinSeBeiJinNum = 0;
        for (var i = 0; i < arr.length; i++) {
          var element = arr[i];
          0 == jinSeBeiJinNum ? 1 === element && jinSeBeiJinNum++ : 1 === element && element === arr[i - 1] ? jinSeBeiJinNum++ : jinSeBeiJinNum = 0;
        }
        return jinSeBeiJinNum >= 4;
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        if (this._isInFree) {
          var acRow = cards.length / this._colFree;
          var reelResults = [];
          for (var i = 0; i < cards.length; i++) {
            var row = Math.floor(i / acRow);
            var col = i % this._colFree;
            if (this._cfg.symbol[cards[i]]) {
              var res = {};
              res.sid = cards[i];
              reelResults[col] || (reelResults[col] = []);
              reelResults[col].unshift(res);
            }
          }
          for (var _i = 0; _i < this._reelsFree.length; _i++) {
            var item = this._reelsFree[_i];
            var reelRes = reelResults[_i];
            item.SetResult(reelRes);
          }
        } else {
          var _acRow = cards.length / this._col;
          var _reelResults = [];
          for (var _i2 = 0; _i2 < cards.length; _i2++) {
            var _row2 = Math.floor(_i2 / _acRow);
            var _col2 = _i2 % this._col;
            if (this._cfg.symbol[cards[_i2]]) {
              var _res = {};
              _res.sid = cards[_i2];
              _reelResults[_col2] || (_reelResults[_col2] = []);
              _reelResults[_col2].unshift(_res);
            }
          }
          for (var _i3 = 0; _i3 < this._reels.length; _i3++) {
            var _item = this._reels[_i3];
            var _reelRes = _reelResults[_i3];
            _item.SetResult(_reelRes);
          }
        }
      },
      ShowWinCoin: function ShowWinCoin(nAddWin, nTotalWin, bUpdateBalance) {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this4.ShowBottomWin(nAddWin, nTotalWin, bUpdateBalance, sucess);

               case 1:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      showShake: function showShake(time, x, y) {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                cc.find("Canvas/safe_node/slots").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/slotsfree").runAction(cc.shake(time, x, y));
                _context3.next = 5;
                return _this5.awaitTime(time);

               case 5:
                Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.bell);
                sucess();

               case 7:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var i, idx, symbol, mapInfo, _mapInfo, _i4, _idx, _symbol, currWilds, _i5, _idx2, _mapInfo2, progress, nAddWin, nTotalBet, nMul, nWin, nTotal, _mapInfo3, _i6, key, _symbol2, _i7, reel, j, _symbol3, data, _i8, element;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              if (!_this6._gameInfo.extraFreeInfo) {
                _context4.next = 11;
                break;
              }
              if (!(2 === _this6._gameInfo.extraFreeInfo.type)) {
                _context4.next = 8;
                break;
              }
              for (i = 0; i < _this6._currWildList.length; i++) {
                idx = _this6._currWildList[i];
                symbol = _this6.GetSymbolByIdx(idx);
                symbol && symbol.changeGoldWild();
              }
              _context4.next = 6;
              return _this6.showFreeGameStickyWild(_this6._gameInfo.extraFreeInfo.currRandWilds);

             case 6:
              _context4.next = 9;
              break;

             case 8:
              1 === _this6._gameInfo.extraFreeInfo.type;

             case 9:
              _context4.next = 11;
              break;

             case 11:
              if (_this6._isInFree) {
                _context4.next = 18;
                break;
              }
              _context4.next = 14;
              return _this6.changeBonus(_this6._gameInfo.convertCard);

             case 14:
              mapInfo = _this6._gameInfo.mapInfo;
              if (mapInfo) {
                cc.vv.gameData.setMapInfo(mapInfo);
                cc.vv.gameData.getManage().TrunTableTriggerBarVal(mapInfo);
              }
              _context4.next = 33;
              break;

             case 18:
              _mapInfo = _this6._gameInfo.mapInfo;
              if (!_mapInfo) {
                _context4.next = 33;
                break;
              }
              cc.vv.gameData.setMapInfo(_mapInfo);
              if (!(3 === _this6._cfg.MapConfig[_mapInfo.currId].type && _mapInfo.state > 0)) {
                _context4.next = 27;
                break;
              }
              _this6.showWildMultEnd(_mapInfo.freeInfo.wildMult);
              _context4.next = 25;
              return _this6.awaitTime(1);

             case 25:
              _context4.next = 33;
              break;

             case 27:
              if (!(5 === _this6._cfg.MapConfig[_mapInfo.currId].type && _mapInfo.state > 0)) {
                _context4.next = 33;
                break;
              }
              for (_i4 = 0; _i4 < _this6._currWildList.length; _i4++) {
                _idx = _this6._currWildList[_i4];
                _symbol = _this6.GetSymbolByIdx(_idx);
                _symbol && _symbol.changeGoldWild();
              }
              currWilds = [];
              for (_i5 = 0; _i5 < _mapInfo.freeInfo.stickyWilds.existIdxs.length; _i5++) {
                _idx2 = _mapInfo.freeInfo.stickyWilds.existIdxs[_i5];
                _this6._currWildList.includes(_idx2) || currWilds.push(_idx2);
              }
              _context4.next = 33;
              return _this6.showFreeGameStickyWild(currWilds);

             case 33:
              _this6._wildTopNode.active = false;
              if (_this6._isInFree) {
                _context4.next = 43;
                break;
              }
              _mapInfo2 = _this6._gameInfo.mapInfo;
              if (!(_mapInfo2 && _mapInfo2.progressData.currCnt > 0)) {
                _context4.next = 43;
                break;
              }
              progress = _mapInfo2.progressData.totalCnt / _mapInfo2.progressData.needCnt;
              if (!(progress >= 1)) {
                _context4.next = 43;
                break;
              }
              _context4.next = 41;
              return _this6.awaitTime(2.3);

             case 41:
              _context4.next = 43;
              break;

             case 43:
              nAddWin = cc.vv.gameData.GetGameWin();
              nTotalBet = cc.vv.gameData.GetTotalBet();
              nMul = nAddWin / nTotalBet;
              if (!(nMul >= 10)) {
                _context4.next = 49;
                break;
              }
              _context4.next = 49;
              return _this6.showShake(1, 5, 5);

             case 49:
              _this6.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) nTotal = cc.vv.gameData.GetGameTotalFreeWin(); else if (_this6._gameInfo.freeGameBonus && !_this6._gameInfo.freeGameBonus.isEnd) {
                nWin = _this6._gameInfo.freeGameBonus.winCoin;
                nTotal = nWin;
              }
              _context4.next = 55;
              return _this6.ShowWinCoin(nWin, nTotal, true);

             case 55:
              if (_this6._isInFree) {
                _context4.next = 87;
                break;
              }
              _mapInfo3 = _this6._gameInfo.mapInfo;
              if (!_mapInfo3) {
                _context4.next = 87;
                break;
              }
              if (!(_mapInfo3.state > 0)) {
                _context4.next = 87;
                break;
              }
              _context4.next = 61;
              return cc.vv.gameData.getMapControl().showTip();

             case 61:
              _context4.t0 = _this6._cfg.MapConfig[_mapInfo3.currId].type;
              _context4.next = 1 === _context4.t0 ? 64 : 2 === _context4.t0 ? 67 : 3 === _context4.t0 ? 72 : 4 === _context4.t0 ? 77 : 5 === _context4.t0 ? 82 : 87;
              break;

             case 64:
              _context4.next = 66;
              return cc.vv.gameData.getQiePing().showJinKua(function() {
                cc.vv.gameData.getManage().enter77(_mapInfo3.startPrice);
                _this6._bottomScript.showTotalBet(false);
              });

             case 66:
              return _context4.abrupt("return");

             case 67:
              _context4.next = 69;
              return cc.vv.gameData.getPopWinManage().showMapRandomFreeGame();

             case 69:
              _context4.next = 71;
              return cc.vv.gameData.getQiePing().showJinKua(function() {
                _this6.showFreeGameSlots();
                _this6._currWildList = [];
                _this6._currWildNodeList = [];
                _this6._wildTopNode.removeAllChildren();
                _this6._mapFree = true;
                _this6._randomWild = true;
                _this6.changeFreeSlotSymbol();
                _this6._bottomScript.showTotalBet(false);
                _this6.ShowFreeGame(true);
              });

             case 71:
              return _context4.abrupt("break", 87);

             case 72:
              _context4.next = 74;
              return cc.vv.gameData.getPopWinManage().showMapMultFreeGame(_this6._cfg.MapConfig[_mapInfo3.currId].min, _this6._cfg.MapConfig[_mapInfo3.currId].max);

             case 74:
              _context4.next = 76;
              return cc.vv.gameData.getQiePing().showJinKua(function() {
                _this6.showFreeGameSlots();
                _this6.showWildMultInit();
                _this6._mapFree = true;
                _this6.changeFreeSlotSymbol();
                _this6._bottomScript.showTotalBet(false);
                _this6.ShowFreeGame(true);
              });

             case 76:
              return _context4.abrupt("break", 87);

             case 77:
              _context4.next = 79;
              return cc.vv.gameData.getPopWinManage().showMapMovingFreeGame();

             case 79:
              _context4.next = 81;
              return cc.vv.gameData.getQiePing().showJinKua(function() {
                _this6.showFreeGameSlots();
                _this6._currWildList = [];
                _this6._currWildNodeList = [];
                _this6._wildTopNode.removeAllChildren();
                _this6._mapFree = true;
                _this6._randomWild = true;
                _this6.changeFreeSlotSymbol();
                _this6._bottomScript.showTotalBet(false);
                _this6.ShowFreeGame(true);
              });

             case 81:
              return _context4.abrupt("break", 87);

             case 82:
              _context4.next = 84;
              return cc.vv.gameData.getPopWinManage().showMapStickyFreeGame();

             case 84:
              _context4.next = 86;
              return cc.vv.gameData.getQiePing().showJinKua(function() {
                _this6.showFreeGameSlots();
                _this6._currWildList = [];
                _this6._currWildNodeList = [];
                _this6._wildTopNode.removeAllChildren();
                _this6._mapFree = true;
                _this6.changeFreeSlotSymbol();
                _this6._bottomScript.showTotalBet(false);
                _this6.ShowFreeGame(true);
              });

             case 86:
              return _context4.abrupt("break", 87);

             case 87:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context4.next = 90;
                break;
              }
              _context4.next = 106;
              break;

             case 90:
              if (!_this6._gameInfo.wheelGame) {
                _context4.next = 106;
                break;
              }
              if (!_this6._gameInfo.wheelGame.scatterIdxs) {
                _context4.next = 106;
                break;
              }
              for (_i6 = 0; _i6 < _this6._gameInfo.wheelGame.scatterIdxs.length; _i6++) {
                key = _this6._gameInfo.wheelGame.scatterIdxs[_i6];
                _symbol2 = _this6.GetSymbolByIdx(key);
                _symbol2.playTriggerAnimation();
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bomb);
              _context4.next = 96;
              return _this6.awaitTime(2);

             case 96:
              _this6.Backup();
              for (_i7 = 0; _i7 < _this6._reels.length; _i7++) {
                reel = _this6._reels[_i7];
                for (j = 0; j < reel._symbols.length; j++) {
                  _symbol3 = reel._symbols[j];
                  _symbol3.ShowNormal();
                  _symbol3.ShowKuang(false);
                }
              }
              _context4.next = 100;
              return cc.vv.gameData.getQiePing().showZhaDan1();

             case 100:
              data = [];
              for (_i8 = 0; _i8 < _this6._gameInfo.wheelGame.jackpotValues.length; _i8++) {
                element = _this6._gameInfo.wheelGame.jackpotValues[_i8];
                data.push({
                  prizeType: _i8,
                  pauseNum: element
                });
              }
              _this6._prizePool.PausePool(data);
              _context4.next = 105;
              return cc.vv.gameData.getFreeWheel().showWheel();

             case 105:
              _this6._prizePool.ResumePausePool();

             case 106:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context4.next = 109;
                break;
              }
              _context4.next = 109;
              return _this6.CheckExitFreeGame();

             case 109:
              _this6.CanDoNextRound();

             case 110:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var rest, nTotal, mapInfo, extraFreeInfo, wheelGame, data, i, element;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this7.showFreeGameSlots();
                _this7.ShowFreeGame(true);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                _this7._bottomScript.SetWin(nTotal);
              } else {
                _this7.hideFreeGameSlots(true);
                _this7.ShowFreeGame(false);
              }
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              mapInfo = cc.vv.gameData.getMapInfo();
              if (!mapInfo) {
                _context5.next = 30;
                break;
              }
              cc.vv.gameData.getMapControl().init(mapInfo);
              if (!(mapInfo.state > 0)) {
                _context5.next = 30;
                break;
              }
              _context5.t0 = _this7._cfg.MapConfig[mapInfo.currId].type;
              _context5.next = 1 === _context5.t0 ? 10 : 2 === _context5.t0 ? 13 : 3 === _context5.t0 ? 17 : 4 === _context5.t0 ? 21 : 5 === _context5.t0 ? 26 : 30;
              break;

             case 10:
              cc.vv.gameData.getManage().enter77(mapInfo.startPrice);
              _this7._bottomScript.showTotalBet(false);
              return _context5.abrupt("return");

             case 13:
              _this7._mapFree = true;
              _this7._randomWild = true;
              _this7._bottomScript.showTotalBet(false);
              return _context5.abrupt("break", 30);

             case 17:
              _this7.showWildMultInit();
              _this7._mapFree = true;
              _this7._bottomScript.showTotalBet(false);
              return _context5.abrupt("break", 30);

             case 21:
              _this7.showWildInit_moveing(mapInfo);
              _this7._mapFree = true;
              _this7._randomWild = true;
              _this7._bottomScript.showTotalBet(false);
              return _context5.abrupt("break", 30);

             case 26:
              _this7.showWildInit_sticky(mapInfo);
              _this7._mapFree = true;
              _this7._bottomScript.showTotalBet(false);
              return _context5.abrupt("break", 30);

             case 30:
              extraFreeInfo = cc.vv.gameData._deskInfo.extraFreeInfo;
              if (extraFreeInfo) if (2 === extraFreeInfo.type) {
                _this7._freeStickeyMask.active = true;
                _this7._freeStickeyMask.height = 90 * extraFreeInfo.lockRow;
                _this7.showFreeGameWildInit_sticky(extraFreeInfo.stickyWilds, extraFreeInfo.currRandWilds);
              } else if (1 === extraFreeInfo.type) {
                _this7.showFreeGameWildInit_randomsticky(extraFreeInfo.stickyWilds, extraFreeInfo.currRandWilds);
                _this7._randomWild = true;
              }
              wheelGame = cc.vv.gameData._deskInfo.wheelGame;
              if (!wheelGame) {
                _context5.next = 40;
                break;
              }
              data = [];
              for (i = 0; i < wheelGame.jackpotValues.length; i++) {
                element = wheelGame.jackpotValues[i];
                data.push({
                  prizeType: i,
                  pauseNum: element
                });
              }
              _this7._prizePool.PausePool(data);
              _context5.next = 39;
              return cc.vv.gameData.getFreeWheel().showWheel();

             case 39:
              _this7._prizePool.ResumePausePool();

             case 40:
              _this7.changeFreeSlotSymbol();
              _this7._bottomScript.ShowBtnsByState("idle");
              _this7.CanDoNextRound();

             case 43:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  var nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _context6.next = 2;
                      return _this8.awaitTime(1);

                     case 2:
                      _this8._randomWild = false;
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      if (!_this8._mapFree) {
                        _context6.next = 13;
                        break;
                      }
                      _context6.next = 8;
                      return cc.vv.gameData.getPopWinManage().showMapFreeGameWinCoin(nWin);

                     case 8:
                      _context6.next = 10;
                      return cc.vv.gameData.getQiePing().showJinKua(function() {
                        _this8.hideFreeGameSlots();
                        _this8.Resume();
                        _this8._bottomScript.showTotalBet(true);
                        _this8.ShowFreeGame(false);
                      });

                     case 10:
                      _this8._mapFree = false;
                      _context6.next = 17;
                      break;

                     case 13:
                      _context6.next = 15;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(nWin);

                     case 15:
                      _context6.next = 17;
                      return cc.vv.gameData.getQiePing().showKuangChe2(function() {
                        _this8.hideFreeGameSlots();
                        _this8.Resume();
                        _this8._bottomScript.showTotalBet(true);
                        _this8.ShowFreeGame(false);
                      });

                     case 17:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.leaf_close);
                      _context6.next = 20;
                      return _this8.ShowWinCoin(nWin, nTotal, true);

                     case 20:
                      sucess();

                     case 21:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      ShowGameview: function ShowGameview(bFree, init) {
        this._isInFree = bFree;
        cc.vv.gameData.getManage().ShowGameview(bFree);
        var mapInfo = cc.vv.gameData.getMapInfo();
        if (bFree) {
          this._freeSlotsNode.active = true;
          cc.find("reels", this.node).active = false;
          mapInfo && this._cfg.MapConfig[mapInfo.currId].type > 1 && mapInfo.state > 0 ? Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.mapfree_bgm) : Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
        } else {
          this._freeSlotsNode.active = false;
          cc.find("reels", this.node).active = true;
          init || Global.SlotsSoundMgr.playNormalBgm(true);
        }
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        var mapFree = cc.find("Canvas/safe_node/spr_bg_mapfree");
        if (mapInfo) if (this._cfg.MapConfig[mapInfo.currId].type > 1 && mapInfo.state > 0) {
          mapFree.active = bFree;
          normalFree.active = false;
        } else {
          normalFree.active = bFree;
          mapFree.active = false;
        } else {
          normalFree.active = bFree;
          mapFree.active = false;
        }
        normalBg.active = !bFree;
      },
      ShowFreeGame: function ShowFreeGame(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
        } else this._bottomScript.ShowFreeModel(false);
      },
      StartMove: function StartMove() {
        this._isInFree || Global.SlotsSoundMgr.playNormalBgm();
        this._normalSpine.getComponent(cc.Button).interactable = false;
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this._isInFree ? this.MoveReels(this._reelsFree) : this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._canStop = false;
        var mapInfo = cc.vv.gameData.getMapInfo();
        if (this._mapFree) {
          this.showMask(this._cfg.MapConfig[mapInfo.currId].type > 1);
          if (this._cfg.MapConfig[mapInfo.currId].type > 1) {
            this._wildTopNode.active = true;
            if (2 === this._cfg.MapConfig[mapInfo.currId].type) {
              this._currWildList = [];
              this._currWildNodeList = [];
              this._wildTopNode.removeAllChildren();
            } else 3 === this._cfg.MapConfig[mapInfo.currId].type && this.showWildMultStart();
          }
        } else this._wildTopNode.active = true;
        if (this._isMoveGroup) {
          this._isMoveGroup = false;
          for (var i = 0; i < this._currWildNodeList.length; i++) {
            var item = this._currWildNodeList[i];
            var idx = this._currWildList[i];
            var Position = this.GetSymbolWorldPosByIdx(idx);
            var FinalPos = this._wildTopNode.convertToNodeSpaceAR(Position);
            item.position = FinalPos;
          }
        }
        this._chufaFreeGame = false;
      },
      showSlot: function showSlot(isShow) {
        for (var i = 0; i < this.node.children.length; i++) {
          var element = this.node.children[i];
          element.active = isShow;
        }
      },
      changeFreeSlotSymbol: function changeFreeSlotSymbol() {
        for (var i = 0; i < this._reelsFree.length; i++) {
          var reel = this._reelsFree[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.ShowInitSymbol();
          }
        }
      },
      showFreeGameSlots: function showFreeGameSlots() {
        var _this9 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                _this9.ShowGameview(true);
                _this9._freeSlotsNode.active = true;
                _this9.showSlot(false);
                cc.vv.gameData.getManage().showTurntableTriggerBar(true);
                sucess();

               case 5:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      hideFreeGameSlots: function hideFreeGameSlots(init) {
        var _this10 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
            var i, reel, j, symbol;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                _this10._freeStickeyMask.active = false;
                if (_this10._freeSlotsNode) {
                  cc.vv.gameData.getManage().showTurntableTriggerBar(false);
                  _this10._freeSlotsNode.active = false;
                  _this10._currWildList = [];
                  _this10._currWildNodeList = [];
                  _this10._wildTopNode.removeAllChildren();
                  for (i = 0; i < _this10._reelsFree.length; i++) {
                    reel = _this10._reelsFree[i];
                    for (j = 0; j < reel._symbols.length; j++) {
                      symbol = reel._symbols[j];
                      symbol.ShowNormal();
                      symbol.ShowKuang(false);
                    }
                  }
                  _this10.showSlot(true);
                  _this10.ShowGameview(false, init);
                }
                sucess();

               case 3:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        var reels = this._reels;
        this._isInFree && (reels = this._reelsFree);
        if (!this._bStopRightnow && !this._chufaFreeGame) {
          var isPlayAnit = false;
          for (var i = 0; i < reels.length; i++) {
            var idx = reels[i].GetReelIdx();
            idx == colIdx + 1 && (isPlayAnit = reels[i].playAntiAnimation());
            if (idx > colIdx && isPlayAnit) {
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              reels[i].AddDelayTime(nAddSpeedTime);
            }
          }
        }
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            this._gameInfo && !this._gameInfo.bonusGame && this._bottomScript.ShowBtnsByState("moveing_2");
            this.showMask(false);
            var reels = this._reels;
            this._isInFree && (reels = this._reelsFree);
            for (var i = 0; i < reels.length; i++) {
              var item = reels[i];
              var reelStopInterv = this.GetReelStopInter(i);
              item.StopMove(reelStopInterv);
            }
          } else this._stopTime = dt;
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        if (!this._cfg.reelStateInfo) return;
        var reels = this._reels;
        var tempcol = this._col;
        if (this._isInFree) {
          reels = this._reelsFree;
          tempcol = this._colFree;
        }
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % tempcol;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
        try {
          var _loop = function _loop() {
            var info = _step.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            for (var _i9 = 0; _i9 < reelResults.length; _i9++) {
              var item = reels[_i9];
              var reelRes = reelResults[_i9];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i9] > 0 && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              reelCountOfID > 0 && remainingCount >= triggerCount && (stateInfo.isStop = true);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop();
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        if (this._isInFree) {
          var col = (idx - 1) % this._colFree;
          var row = this._rowFree - Math.floor((idx - 1) / this._colFree) - 1;
          return this._reelsFree[col].GetSymbolByRow(row);
        }
        var _col3 = (idx - 1) % this._col;
        var _row3 = this._row - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[_col3].GetSymbolByRow(_row3);
      },
      findAllShouJiSymbol: function findAllShouJiSymbol() {
        var ret = [];
        if (this._isInFree) for (var i = 0; i < this._reelsFree.length; i++) {
          var reel = this._reelsFree[i];
          for (var j = 0; j < reel._symbols.length - 1; j++) {
            var symbol = reel._symbols[j];
            1 === symbol._id && ret.push(symbol);
          }
        } else for (var _i10 = 0; _i10 < this._reels.length; _i10++) {
          var _reel = this._reels[_i10];
          for (var _j = 0; _j < _reel._symbols.length - 1; _j++) {
            var _symbol4 = _reel._symbols[_j];
            1 === _symbol4._id && ret.push(_symbol4);
          }
        }
        return ret;
      },
      showMask: function showMask(isShow) {
        isShow ? this._isInFree ? cc.tween(this._freeMask).to(.3, {
          opacity: 160
        }).start() : cc.tween(this._normalMask).to(.3, {
          opacity: 160
        }).start() : this._isInFree ? cc.tween(this._freeMask).to(.3, {
          opacity: 0
        }).start() : cc.tween(this._normalMask).to(.3, {
          opacity: 0
        }).start();
      },
      CanStopSlot: function CanStopSlot() {
        return this._canStop;
      },
      showRandomWild: function showRandomWild(mapInfo) {
        var _this11 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
            var _loop2, i;
            return regeneratorRuntime.wrap(function _callee10$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                _loop2 = regeneratorRuntime.mark(function _loop2(i) {
                  var idx, tempNode, position, finalPosition, animationNode;
                  return regeneratorRuntime.wrap(function _loop2$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      idx = mapInfo.freeInfo.randomWilds.currIdxs[i];
                      tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this11._cfg.symbolPrefab));
                      position = _this11.GetSymbolWorldPosByIdx(idx);
                      finalPosition = _this11._wildTopNode.convertToNodeSpaceAR(position);
                      tempNode.parent = _this11._wildTopNode;
                      tempNode.position = finalPosition;
                      animationNode = cc.find("w1", tempNode);
                      animationNode.active = true;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.randomwild);
                      animationNode.getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
                      animationNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                        animationNode.active = false;
                        cc.find("s1", tempNode).active = true;
                        animationNode.getComponent(sp.Skeleton).setCompleteListener(null);
                      });
                      _context10.next = 13;
                      return _this11.awaitTime(1);

                     case 13:
                     case "end":
                      return _context10.stop();
                    }
                  }, _loop2);
                });
                i = 0;

               case 2:
                if (!(i < mapInfo.freeInfo.randomWilds.currIdxs.length)) {
                  _context11.next = 7;
                  break;
                }
                return _context11.delegateYield(_loop2(i), "t0", 4);

               case 4:
                i++;
                _context11.next = 2;
                break;

               case 7:
                success();

               case 8:
               case "end":
                return _context11.stop();
              }
            }, _callee10);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      showRandomStickyWild: function showRandomStickyWild(currandomWilds) {
        var _this12 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success, failed) {
            var _loop3, i;
            return regeneratorRuntime.wrap(function _callee11$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                _loop3 = regeneratorRuntime.mark(function _loop3(i) {
                  var idx, tempNode, position, finalPosition, animationNode;
                  return regeneratorRuntime.wrap(function _loop3$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      idx = currandomWilds[i];
                      tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this12._cfg.symbolPrefab));
                      position = _this12.GetSymbolWorldPosByIdx(idx);
                      finalPosition = _this12._wildTopNode.convertToNodeSpaceAR(position);
                      tempNode.parent = _this12._wildTopNode;
                      tempNode.position = finalPosition;
                      animationNode = cc.find("w1", tempNode);
                      animationNode.active = true;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.randomwild);
                      animationNode.getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
                      animationNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                        animationNode.active = false;
                        cc.find("s1", tempNode).active = true;
                        animationNode.getComponent(sp.Skeleton).setCompleteListener(null);
                      });
                      _this12._currWildList.push(idx);
                      _this12._currWildNodeList.push(tempNode);
                      _context12.next = 15;
                      return _this12.awaitTime(1);

                     case 15:
                     case "end":
                      return _context12.stop();
                    }
                  }, _loop3);
                });
                i = 0;

               case 2:
                if (!(i < currandomWilds.length)) {
                  _context13.next = 7;
                  break;
                }
                return _context13.delegateYield(_loop3(i), "t0", 4);

               case 4:
                i++;
                _context13.next = 2;
                break;

               case 7:
                success();

               case 8:
               case "end":
                return _context13.stop();
              }
            }, _callee11);
          }));
          return function(_x13, _x14) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      showFreeGameStickyWild: function showFreeGameStickyWild(stickyWilds) {
        var _this13 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
            var i, idx, symbol, tempNode, position, finalPosition, tempSymbol;
            return regeneratorRuntime.wrap(function _callee12$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                i = 0;

               case 1:
                if (!(i < stickyWilds.length)) {
                  _context14.next = 20;
                  break;
                }
                idx = stickyWilds[i];
                symbol = _this13.GetSymbolByIdx(idx);
                if (!(1 === symbol._id)) {
                  _context14.next = 17;
                  break;
                }
                tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(_this13._cfg.symbolPrefab));
                position = _this13.GetSymbolWorldPosByIdx(idx);
                finalPosition = _this13._wildTopNode.convertToNodeSpaceAR(position);
                tempNode.parent = _this13._wildTopNode;
                tempNode.position = finalPosition;
                tempSymbol = tempNode.addComponent(_this13._cfg.scripts.Symbols);
                tempSymbol.ShowById(1);
                tempSymbol.changeGoldWildAnimation();
                symbol.changeGoldWild();
                _this13._currWildList.push(idx);
                _context14.next = 17;
                return _this13.awaitTime(1);

               case 17:
                i++;
                _context14.next = 1;
                break;

               case 20:
                if (!(stickyWilds.length > 0)) {
                  _context14.next = 23;
                  break;
                }
                _context14.next = 23;
                return _this13.awaitTime(.5);

               case 23:
                success();

               case 24:
               case "end":
                return _context14.stop();
              }
            }, _callee12);
          }));
          return function(_x15, _x16) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      showWildMultInit: function showWildMultInit() {
        this._wildTopNode.active = true;
        var mapInfo = cc.vv.gameData.getMapInfo();
        var mult = Global.random(this._cfg.MapConfig[mapInfo.currId].min, this._cfg.MapConfig[mapInfo.currId].max);
        for (var i = 0; i < multWildIdx.length; i++) {
          var idx = multWildIdx[i];
          var lansemumen = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var lansemumenScript = lansemumen.addComponent(this._cfg.scripts.Symbols);
          lansemumenScript.showLanSeMuMen(mult);
          lansemumen.parent = this._wildTopNode;
          var position = this.GetSymbolWorldPosByIdx(idx);
          var finalPosition = this._wildTopNode.convertToNodeSpaceAR(position);
          lansemumen.position = finalPosition;
          this._lansemumenList.push(lansemumenScript);
        }
      },
      showWildMultStart: function showWildMultStart() {
        for (var i = 0; i < this._lansemumenList.length; i++) {
          var lansemumen = this._lansemumenList[i];
          lansemumen.playCloseAnimation();
        }
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.doorclose);
      },
      showWildMultEnd: function showWildMultEnd(mult) {
        for (var i = 0; i < this._lansemumenList.length; i++) {
          var lansemumen = this._lansemumenList[i];
          lansemumen.playOpenAnimation(mult);
        }
        for (var _i11 = 0; _i11 < multWildIdx.length; _i11++) {
          var idx = multWildIdx[_i11];
          var symbol = this.GetSymbolByIdx(idx);
          symbol.changeMultWild(mult);
        }
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.dooropen);
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i12 = 0; _i12 < this._gameInfo.scatterZJLuXian.indexs.length; _i12++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i12];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      showWildInit_moveing: function showWildInit_moveing(mapInfo) {
        for (var i = 0; i < mapInfo.freeInfo.moveWilds.currIdxs.length; i++) {
          var idx = mapInfo.freeInfo.moveWilds.currIdxs[i];
          var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var position = this.GetSymbolWorldPosByIdx(idx);
          var finalPosition = this._wildTopNode.convertToNodeSpaceAR(position);
          tempNode.parent = this._wildTopNode;
          tempNode.position = finalPosition;
          cc.find("s1", tempNode).active = true;
          this._currWildNodeList.push(tempNode);
        }
        this._currWildList = mapInfo.freeInfo.moveWilds.currIdxs || [];
      },
      showWildInit_sticky: function showWildInit_sticky(mapInfo) {
        for (var i = 0; i < mapInfo.freeInfo.stickyWilds.existIdxs.length; i++) {
          var idx = mapInfo.freeInfo.stickyWilds.existIdxs[i];
          var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var position = this.GetSymbolWorldPosByIdx(idx);
          var finalPosition = this._wildTopNode.convertToNodeSpaceAR(position);
          tempNode.parent = this._wildTopNode;
          tempNode.position = finalPosition;
          cc.find("w1", tempNode).active = true;
          cc.find("w1", tempNode).getComponent(sp.Skeleton).setAnimation(0, "animation7", true);
          this._currWildNodeList[idx] = tempNode;
        }
        this._currWildList = mapInfo.freeInfo.stickyWilds.existIdxs || [];
      },
      showFreeGameWildInit_sticky: function showFreeGameWildInit_sticky(stickyWilds, currRandWilds) {
        for (var i = 0; i < stickyWilds.length; i++) {
          var idx = stickyWilds[i];
          var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var position = this.GetSymbolWorldPosByIdx(idx);
          var finalPosition = this._wildTopNode.convertToNodeSpaceAR(position);
          tempNode.parent = this._wildTopNode;
          tempNode.position = finalPosition;
          cc.find("w1", tempNode).active = true;
          cc.find("w1", tempNode).getComponent(sp.Skeleton).setAnimation(0, "animation7", true);
          this._currWildNodeList[idx] = tempNode;
          var symbol = this.GetSymbolByIdx(idx);
          symbol.changeGoldWild();
        }
        this._currWildList = stickyWilds || [];
        for (var _i13 = 0; _i13 < currRandWilds.length; _i13++) {
          var _idx3 = currRandWilds[_i13];
          var _tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var _position = this.GetSymbolWorldPosByIdx(_idx3);
          var _finalPosition = this._wildTopNode.convertToNodeSpaceAR(_position);
          _tempNode.parent = this._wildTopNode;
          _tempNode.position = _finalPosition;
          cc.find("w1", _tempNode).active = true;
          cc.find("w1", _tempNode).getComponent(sp.Skeleton).setAnimation(0, "animation7", true);
          this._currWildNodeList[_idx3] = _tempNode;
          var _symbol5 = this.GetSymbolByIdx(_idx3);
          _symbol5.changeGoldWild();
          this._currWildList.push(_idx3);
        }
      },
      showFreeGameWildInit_randomsticky: function showFreeGameWildInit_randomsticky(stickyWilds, currRandWilds) {
        for (var i = 0; i < stickyWilds.length; i++) {
          var idx = stickyWilds[i];
          var tempNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var position = this.GetSymbolWorldPosByIdx(idx);
          var finalPosition = this._wildTopNode.convertToNodeSpaceAR(position);
          tempNode.parent = this._wildTopNode;
          tempNode.position = finalPosition;
          cc.find("w1", tempNode).active = true;
          cc.find("w1", tempNode).getComponent(sp.Skeleton).setAnimation(0, "animation9", true);
          this._currWildNodeList.push(tempNode);
          var symbol = this.GetSymbolByIdx(idx);
          symbol.changeGoldWild();
        }
        this._currWildList = stickyWilds || [];
        for (var _i14 = 0; _i14 < currRandWilds.length; _i14++) {
          var _idx4 = currRandWilds[_i14];
          var _tempNode2 = cc.instantiate(cc.vv.gameData.GetPrefabByName(this._cfg.symbolPrefab));
          var _position2 = this.GetSymbolWorldPosByIdx(_idx4);
          var _finalPosition2 = this._wildTopNode.convertToNodeSpaceAR(_position2);
          _tempNode2.parent = this._wildTopNode;
          _tempNode2.position = _finalPosition2;
          cc.find("w1", _tempNode2).active = true;
          cc.find("w1", _tempNode2).getComponent(sp.Skeleton).setAnimation(0, "animation9", true);
          this._currWildNodeList.push(_tempNode2);
          var _symbol6 = this.GetSymbolByIdx(_idx4);
          _symbol6.changeGoldWild();
          this._currWildList.push(_idx4);
        }
      },
      showMoveWild: function showMoveWild(mapInfo) {
        var _this14 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success, failed) {
            var effectPosition, effectFinalPos, wildxishou, i, item, idx, Position, FinalPos;
            return regeneratorRuntime.wrap(function _callee13$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
               case 0:
                _context15.next = 2;
                return _this14.showRandomStickyWild(mapInfo.freeInfo.moveWilds.randIdxs);

               case 2:
                if (mapInfo.freeInfo.moveWilds.centerIdx && mapInfo.freeInfo.moveWilds.currIdxs.length > 1) {
                  effectPosition = _this14.GetSymbolWorldPosByIdx(mapInfo.freeInfo.moveWilds.centerIdx);
                  effectFinalPos = _this14._wildTopNode.convertToNodeSpaceAR(effectPosition);
                  wildxishou = cc.instantiate(cc.vv.gameData.GetPrefabByName("wildxishou"));
                  wildxishou.parent = _this14._wildTopNode;
                  wildxishou.position = effectFinalPos;
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.groupwild);
                  wildxishou.getComponent(sp.Skeleton).setCompleteListener(function() {
                    wildxishou.parent = null;
                    wildxishou.getComponent(sp.Skeleton).setCompleteListener(null);
                    success();
                  });
                  for (i = 0; i < _this14._currWildNodeList.length; i++) {
                    item = _this14._currWildNodeList[i];
                    idx = mapInfo.freeInfo.moveWilds.currIdxs[i];
                    Position = _this14.GetSymbolWorldPosByIdx(idx);
                    FinalPos = _this14._wildTopNode.convertToNodeSpaceAR(Position);
                    cc.tween(item).to(.5, {
                      position: FinalPos
                    }).start();
                  }
                } else success();
                _this14._currWildList = mapInfo.freeInfo.moveWilds.currIdxs || [];

               case 4:
               case "end":
                return _context15.stop();
              }
            }, _callee13);
          }));
          return function(_x17, _x18) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      getPoolIsLocked: function getPoolIsLocked(id) {
        var target = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_" + jackpotNames[id - 1]).getComponent("LMSlotMachine_PrizePool");
        return target.isLocked();
      },
      showWinJackPoolAnimation: function showWinJackPoolAnimation(index) {
        var target = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_" + jackpotNames[index - 1]);
        if (target) {
          var winEffect = cc.find("winEffect", target);
          winEffect.active = true;
          var winEffectSp = winEffect.getComponent(sp.Skeleton);
          winEffectSp.setAnimation(0, "animation" + (5 - index) + "_1", true);
        }
      },
      hideWinJackPoolAnimation: function hideWinJackPoolAnimation(index) {
        var target = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_" + jackpotNames[index - 1]);
        if (target) {
          var winEffect = cc.find("winEffect", target);
          winEffect.active = false;
        }
      },
      changeBonus: function changeBonus(id) {
        var _this15 = this;
        return new Promise(function() {
          var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success, failed) {
            var changeSuccess, i, reel, j, symbol;
            return regeneratorRuntime.wrap(function _callee14$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                changeSuccess = false;
                for (i = 0; i < _this15._reels.length; i++) {
                  reel = _this15._reels[i];
                  for (j = 0; j < reel._symbols.length - 1; j++) {
                    symbol = reel._symbols[j];
                    symbol && (changeSuccess = symbol.changeBonus(id) || changeSuccess);
                  }
                }
                if (!changeSuccess) {
                  _context16.next = 6;
                  break;
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.symbol_bonus);
                _context16.next = 6;
                return _this15.awaitTime(.7);

               case 6:
                success();

               case 7:
               case "end":
                return _context16.stop();
              }
            }, _callee14);
          }));
          return function(_x19, _x20) {
            return _ref10.apply(this, arguments);
          };
        }());
      },
      randomStickeyMoveGroup: function randomStickeyMoveGroup(moveGroup) {
        var _this16 = this;
        return new Promise(function() {
          var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success, failed) {
            var effectPosition, effectFinalPos, wildxishou, i, item, idx, Position, FinalPos;
            return regeneratorRuntime.wrap(function _callee15$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
               case 0:
                effectPosition = _this16.GetSymbolWorldPosByIdx(moveGroup.centerIdx);
                effectFinalPos = _this16._wildTopNode.convertToNodeSpaceAR(effectPosition);
                wildxishou = cc.instantiate(cc.vv.gameData.GetPrefabByName("wildxishou"));
                wildxishou.parent = _this16._wildTopNode;
                wildxishou.position = effectFinalPos;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.groupwild);
                wildxishou.getComponent(sp.Skeleton).setCompleteListener(function() {
                  wildxishou.parent = null;
                  wildxishou.getComponent(sp.Skeleton).setCompleteListener(null);
                  success();
                });
                for (i = 0; i < _this16._currWildNodeList.length; i++) {
                  item = _this16._currWildNodeList[i];
                  idx = moveGroup.idxs[i];
                  Position = _this16.GetSymbolWorldPosByIdx(idx);
                  FinalPos = _this16._wildTopNode.convertToNodeSpaceAR(Position);
                  cc.tween(item).to(.5, {
                    position: FinalPos
                  }).start();
                }
                _this16._isMoveGroup = true;

               case 9:
               case "end":
                return _context17.stop();
              }
            }, _callee15);
          }));
          return function(_x21, _x22) {
            return _ref11.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  GoldMiner_freeWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa0f9uxQFJL+qfaQ/IOTlRP", "GoldMiner_freeWheel");
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var betCoinMult = [ 4, 1, .5, 2, 3, 5 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _bg: null,
        _anniuEffect: null,
        _spinNode: null,
        _multNode: null,
        _multNumList: [],
        _randomMultList: [],
        _xuanzhong: null,
        _huohua1: null,
        _huohua2: null,
        _showMultNode: null,
        _multEffect: null,
        _jili: null,
        _numList: []
      },
      onLoad: function onLoad() {
        this._bg = cc.find("bg", this.node);
        this._bg.y = -cc.winSize.height / 2 - 400;
        this._anniuEffect = cc.find("spinBtn/wheel_anniu_01", this._bg);
        this._spinBtn = cc.find("spinBtn", this._bg);
        this._spinBtn.on("click", this.onSpin, this);
        this._spinNode = cc.find("spinNode", this._bg);
        this._multNode = cc.find("multNode", this._bg);
        for (var i = 1; i < 13; i++) {
          var mult = cc.find("mult" + i, this._multNode);
          this._multNumList.push(mult);
        }
        this._xuanzhong = cc.find("theme230_wheel_win/xuanzhong", this._bg);
        this._huohua1 = cc.find("huohua1", this._bg);
        this._huohua2 = cc.find("huohua2", this._bg);
        this._showMultNode = cc.find("showMultNode", this._bg);
        this._multEffect = cc.find("multEffect", this._bg);
        this._jili = cc.find("jili", this._bg);
        this._jili.active = false;
        for (var _i = 1; _i < 7; _i++) {
          var num = cc.find("num" + _i, this._spinNode);
          this._numList.push(num);
        }
      },
      onDestroy: function onDestroy() {},
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(success, failed) {
          _this.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      showWheel: function showWheel() {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.wheel_bgm);
          cc.vv.gameData.GetSlotsScript().showSlot(false);
          _this2._sucess = sucess;
          _this2._bg.active = true;
          _this2._xuanzhong.active = false;
          var anniuSp = _this2._anniuEffect.getComponent(sp.Skeleton);
          anniuSp.setAnimation(0, "animation1", true);
          _this2._spinBtn.getComponent(cc.Button).interactable = true;
          cc.vv.gameData.checkAutoPlay(_this2._spinBtn, _this2.onSpin.bind(_this2));
          cc.tween(_this2._bg).to(.5, {
            y: 0
          }, {
            easing: "backOut"
          }).start();
          var multList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
          _this2._randomMultList = [];
          for (var i = 0; i < 12; i++) {
            var randomIdx = Global.random(0, multList.length - 1);
            _this2._randomMultList.push(multList[randomIdx]);
            _this2._multNumList[i].getComponent(cc.Label).string = multList[randomIdx] + "\nX";
            multList.splice(randomIdx, 1);
          }
          var betCoin = cc.vv.gameData.GetTotalBet();
          for (var _i2 = 0; _i2 < _this2._numList.length; _i2++) {
            var num = _this2._numList[_i2];
            num.getComponent(cc.Label).string = Global.convertNumToShort(betCoin * betCoinMult[_i2], 1e3, 1, null, 1e3);
          }
        });
      },
      onSpin: function onSpin() {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_click);
        this._spinBtn.stopAllActions();
        this._spinBtn.getComponent(cc.Button).interactable = false;
        var anniuSp = this._anniuEffect.getComponent(sp.Skeleton);
        anniuSp.setAnimation(0, "animation2", true);
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 2;
        cc.vv.NetManager.send(req);
      },
      onSpinWheel: function onSpinWheel(data) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var index, mult, rusltAngle, randomIndex, i, multAngle;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              index = data.wheelId;
              mult = data.mult;
              rusltAngle = -30 * (index - 1);
              rusltAngle -= 1800;
              _this3._huohua1.active = true;
              _this3._huohua2.active = true;
              _this3._xuanzhong.active = false;
              cc.tween(_this3._spinNode).to(7, {
                angle: rusltAngle - 10
              }, {
                easing: "quadInOut"
              }).to(.7, {
                angle: rusltAngle
              }, {
                easing: "quadIn"
              }).call(function() {
                _this3._spinNode.angle %= 360;
                _this3._huohua1.active = false;
                _this3._huohua2.active = false;
                _this3._xuanzhong.active = true;
                if (1 == index || 5 == index || 9 == index) {
                  _this3._xuanzhong.getComponent(sp.Skeleton).setAnimation(0, "animation1_1", false);
                  _this3._xuanzhong.getComponent(sp.Skeleton).addAnimation(0, "animation1_2", true);
                } else {
                  _this3._xuanzhong.getComponent(sp.Skeleton).setAnimation(0, "animation2_1", false);
                  _this3._xuanzhong.getComponent(sp.Skeleton).addAnimation(0, "animation2_2", true);
                }
                mult || _this3.showResult(data);
              }).start();
              if (!mult) {
                _context2.next = 23;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_roll);
              randomIndex = 0;
              i = 0;

             case 12:
              if (!(i < _this3._randomMultList.length)) {
                _context2.next = 19;
                break;
              }
              if (!(_this3._randomMultList[i] == mult)) {
                _context2.next = 16;
                break;
              }
              randomIndex = i;
              return _context2.abrupt("break", 19);

             case 16:
              i++;
              _context2.next = 12;
              break;

             case 19:
              multAngle = -30 * randomIndex - 2520;
              cc.tween(_this3._multNode).to(10, {
                angle: multAngle - 10
              }, {
                easing: "quadInOut"
              }).to(.7, {
                angle: multAngle
              }, {
                easing: "quadIn"
              }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                   case 0:
                    _this3._multNode.angle %= 360;
                    _this3._multNumList[randomIndex].active = false;
                    _context.next = 4;
                    return _this3.showMultAnimation(mult);

                   case 4:
                    _this3._multNumList[randomIndex].active = true;
                    _this3.showResult(data);

                   case 6:
                   case "end":
                    return _context.stop();
                  }
                }, _callee);
              }))).start();
              _context2.next = 25;
              break;

             case 23:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_roll2);
              cc.tween(_this3._multNode).to(7, {
                angle: -1835
              }, {
                easing: "quadInOut"
              }).call(function() {
                _this3._multNode.angle %= 360;
              }).start();

             case 25:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showResult: function showResult(data) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var mult;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              mult = data.mult || 1;
              if (!data.jackpot) {
                _context3.next = 16;
                break;
              }
              _context3.next = 4;
              return _this4.awaitTime(1);

             case 4:
              _context3.next = 6;
              return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(data.winCoin, mult, data.jackpot.id);

             case 6:
              _context3.next = 8;
              return cc.vv.gameData.getQiePing().showZhaDan2();

             case 8:
              cc.vv.gameData.GetSlotsScript().showSlot(true);
              cc.vv.gameData.GetSlotsScript().Resume();
              _this4.hideAnimation();
              cc.vv.gameData.AddCoin(data.winCoin + cc.vv.gameData.GetBottomScript().getCurrentWin());
              _context3.next = 14;
              return cc.vv.gameData.GetSlotsScript().ShowWinCoin(data.winCoin, data.winCoin + cc.vv.gameData.GetBottomScript().getCurrentWin(), true);

             case 14:
              _context3.next = 49;
              break;

             case 16:
              if (!data.freeInfo) {
                _context3.next = 37;
                break;
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_notify);
              _context3.next = 20;
              return _this4.showJiLi();

             case 20:
              if (!(1 === data.freeInfo.type)) {
                _context3.next = 26;
                break;
              }
              _context3.next = 23;
              return cc.vv.gameData.getPopWinManage().showRandomStickyFreeGame(data.freeInfo.freeCnt);

             case 23:
              cc.vv.gameData.GetSlotsScript()._randomWild = true;
              _context3.next = 31;
              break;

             case 26:
              if (!(2 === data.freeInfo.type)) {
                _context3.next = 31;
                break;
              }
              _context3.next = 29;
              return cc.vv.gameData.getPopWinManage().showStickyFreeGame(data.freeInfo.freeCnt);

             case 29:
              cc.vv.gameData.GetSlotsScript()._freeStickeyMask.active = true;
              cc.vv.gameData.GetSlotsScript()._freeStickeyMask.height = 360;

             case 31:
              cc.vv.gameData.AddTotalFreeTime(data.freeInfo.freeCnt);
              _context3.next = 34;
              return cc.vv.gameData.getQiePing().showKuangChe1(function() {
                _this4.hide();
                cc.vv.gameData.GetSlotsScript().showFreeGameSlots();
                cc.vv.gameData.GetSlotsScript().changeFreeSlotSymbol();
              });

             case 34:
              cc.vv.gameData.GetSlotsScript().ShowFreeGame(true);
              _context3.next = 49;
              break;

             case 37:
              _context3.next = 39;
              return _this4.awaitTime(1);

             case 39:
              _context3.next = 41;
              return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(data.winCoin, mult, 1);

             case 41:
              _context3.next = 43;
              return cc.vv.gameData.getQiePing().showZhaDan2();

             case 43:
              cc.vv.gameData.GetSlotsScript().showSlot(true);
              cc.vv.gameData.GetSlotsScript().Resume();
              _this4.hideAnimation();
              cc.vv.gameData.AddCoin(data.winCoin + cc.vv.gameData.GetBottomScript().getCurrentWin());
              _context3.next = 49;
              return cc.vv.gameData.GetSlotsScript().ShowWinCoin(data.winCoin, data.winCoin + cc.vv.gameData.GetBottomScript().getCurrentWin(), true);

             case 49:
              _this4.exitWheel();

             case 50:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      hide: function hide() {
        Global.SlotsSoundMgr.stopBgm();
        this._bg.y = -cc.winSize.height / 2 - 400;
        this._bg.active = false;
      },
      hideAnimation: function hideAnimation() {
        var _this5 = this;
        Global.SlotsSoundMgr.stopBgm();
        cc.tween(this._bg).to(.2, {
          y: -cc.winSize.height / 2 - 400
        }, {
          easing: "backIn"
        }).call(function() {
          _this5._bg.active = false;
        }).start();
      },
      exitWheel: function exitWheel() {
        if (this._sucess) {
          this._sucess();
          this._sucess = null;
        }
      },
      showMultAnimation: function showMultAnimation(mult) {
        var _this6 = this;
        return new Promise(function(success, failed) {
          _this6._showMultNode.active = true;
          _this6._multEffect.active = true;
          _this6._multEffect.getComponent(sp.Skeleton).setCompleteListener(function() {
            _this6._multEffect.active = false;
            _this6._multEffect.getComponent(sp.Skeleton).setCompleteListener(null);
          });
          _this6._showMultNode.getComponent(cc.Label).string = mult + "\nX";
          _this6._showMultNode.scale = .6;
          cc.tween(_this6._showMultNode).to(.3, {
            scale: .8
          }).delay(.8).to(.3, {
            scale: .6
          }).call(function() {
            _this6._showMultNode.active = false;
            success();
          }).start();
        });
      },
      showJiLi: function showJiLi() {
        var _this7 = this;
        return new Promise(function(success, failed) {
          _this7._jili.active = true;
          _this7._jili.getComponent(sp.Skeleton).setCompleteListener(function() {
            _this7._jili.active = false;
            _this7._jili.getComponent(sp.Skeleton).setCompleteListener(null);
            success();
          });
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  GoldMiner_mapControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4799aWT9HBLuLHgy+hDnYXb", "GoldMiner_mapControl");
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    var scrollPos = [ 0, 0, 0, 0, 0, 0, 0, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .8, .8, .8, .8, .8, .8, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
    var scalePos = [ 1, 1, 1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        mapNode: {
          default: null,
          type: cc.Node
        },
        backButton: {
          default: null,
          type: cc.Node
        },
        jueSe: {
          default: null,
          type: cc.Node
        },
        content: {
          default: null,
          type: cc.Node
        },
        _pointList: [],
        _pointNum: 0
      },
      onLoad: function onLoad() {
        this.backButton.on("click", this.onBackGame, this);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode1", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode2", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao1", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode3", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode4", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode5", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao2", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode6", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode7", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode8", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode9", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao3", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode10", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode11", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode12", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode13", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode14", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao4", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode15", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode16", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode17", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode18", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode19", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode20", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao5", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode21", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode22", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode23", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode24", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode25", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode26", this.content);
        this._pointList[this._pointList.length] = cc.find("roadRoot/inportNode27", this.content);
        this._pointList[this._pointList.length] = cc.find("daoRoot/dao6", this.content);
      },
      onDestroy: function onDestroy() {},
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      init: function init(mapInfo) {
        this._pointNum = mapInfo.currId;
      },
      initNode: function initNode() {
        var cfg = cc.vv.gameData.getGameCfg();
        for (var i = 0; i < this._pointNum - 1; i++) {
          var element = this._pointList[i];
          if (-1 !== element.name.indexOf("dao1")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation1_3", true);
            cc.find("biaoqian/normal", element).color = cfg.grayColor;
          } else if (-1 !== element.name.indexOf("dao2")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation2_3", true);
            cc.find("biaoqian/normal", element).color = cfg.grayColor;
          } else if (-1 !== element.name.indexOf("dao3")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation3_3", true);
            cc.find("biaoqian/normal", element).color = cfg.grayColor;
          } else if (-1 !== element.name.indexOf("dao4")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation4_3", true);
            cc.find("biaoqian/normal", element).color = cfg.grayColor;
          } else if (-1 !== element.name.indexOf("dao5")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation5_3", true);
            cc.find("biaoqian/normal", element).color = cfg.grayColor;
          } else if (-1 !== element.name.indexOf("dao6")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation6_3", true);
            cc.find("biaoqian/normal", element).color = cfg.grayColor;
          } else cc.find("small1", element).active = false;
        }
        if (this._pointNum > 0) {
          var pointNode = this._pointList[this._pointNum - 1];
          var pos = cc.find("pos", pointNode);
          pos || (pos = pointNode);
          var position = pos.convertToWorldSpaceAR(cc.v2(0, 0));
          var finalPosition = this.content.convertToNodeSpaceAR(position);
          this.jueSe.position = finalPosition;
          this.jueSe.scaleX = scalePos[this._pointNum - 1];
        }
      },
      resetMap: function resetMap() {
        var cfg = cc.vv.gameData.getGameCfg();
        for (var i = 0; i < this._pointList.length; i++) {
          var element = this._pointList[i];
          if (-1 !== element.name.indexOf("dao1")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation1_2", true);
            cc.find("biaoqian/normal", element).color = cfg.normalColor;
          } else if (-1 !== element.name.indexOf("dao2")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation2_2", true);
            cc.find("biaoqian/normal", element).color = cfg.normalColor;
          } else if (-1 !== element.name.indexOf("dao3")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation3_2", true);
            cc.find("biaoqian/normal", element).color = cfg.normalColor;
          } else if (-1 !== element.name.indexOf("dao4")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation4_2", true);
            cc.find("biaoqian/normal", element).color = cfg.normalColor;
          } else if (-1 !== element.name.indexOf("dao5")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation5_2", true);
            cc.find("biaoqian/normal", element).color = cfg.normalColor;
          } else if (-1 !== element.name.indexOf("dao6")) {
            element.getComponent(sp.Skeleton).setAnimation(0, "animation6_2", true);
            cc.find("biaoqian/normal", element).color = cfg.normalColor;
          } else cc.find("small1", element).active = true;
        }
        this.jueSe.position = cc.v2(-281.609, -839.102);
        this.jueSe.scaleX = scalePos[0];
        this._pointNum = 0;
      },
      show: function show() {
        var _this2 = this;
        this.mapNode.active = true;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_open);
        this.scheduleOnce(function() {
          33 === _this2._pointNum ? _this2.resetMap() : _this2.initNode();
          _this2.mapNode.y = cc.winSize.height;
          _this2.backButton.active = true;
          _this2.backButton.scale = 0;
          _this2.backButton.getComponent(cc.Button).interactable = true;
          cc.tween(_this2.mapNode).to(.2, {
            y: 0
          }).call(function() {
            cc.tween(_this2.backButton).to(.2, {
              scale: 1
            }, {
              easing: "backOut"
            }).start();
          }).start();
          _this2.jueSe.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          _this2.mapNode.getComponent(cc.ScrollView).scrollToPercentVertical(scrollPos[_this2._pointNum - 1], 0);
        }, 0);
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
      },
      showTip: function showTip() {
        var _this3 = this;
        return new Promise(function(sucess, failed) {
          _this3.mapNode.active = true;
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_open);
          _this3.scheduleOnce(function() {
            33 === _this3._pointNum ? _this3.resetMap() : _this3.initNode();
            _this3.mapNode.y = cc.winSize.height;
            cc.tween(_this3.mapNode).to(.2, {
              y: 0
            }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                 case 0:
                  _this3.jumpToNext();
                  _context.next = 3;
                  return _this3.awaitTime(3);

                 case 3:
                  _this3.hide();
                  _context.next = 6;
                  return _this3.awaitTime(.2);

                 case 6:
                  sucess();

                 case 7:
                 case "end":
                  return _context.stop();
                }
              }, _callee);
            }))).start();
            _this3.jueSe.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
            _this3.mapNode.getComponent(cc.ScrollView).scrollToPercentVertical(scrollPos[_this3._pointNum - 1], 0);
          }, 0);
        });
      },
      onBackGame: function onBackGame() {
        this.backButton.getComponent(cc.Button).interactable = false;
        this.backButton.active = false;
        this.hide();
        this.scheduleOnce(function() {
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
        }, .2);
      },
      hide: function hide() {
        var _this4 = this;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_close);
        cc.tween(this.mapNode).to(.2, {
          y: cc.winSize.height
        }).call(function() {
          _this4.mapNode.active = false;
        }).start();
      },
      jumpToNext: function jumpToNext() {
        var _this5 = this;
        var cfg = cc.vv.gameData.getGameCfg();
        this._pointNum++;
        this._pointNum > 33 && (this._pointNum = 33);
        var pointNode = this._pointList[this._pointNum - 1];
        var pos = cc.find("pos", pointNode);
        pos || (pos = pointNode);
        var position = pos.convertToWorldSpaceAR(cc.v2(0, 0));
        var finalPosition = this.content.convertToNodeSpaceAR(position);
        cc.tween(this.jueSe).to(1, {
          position: finalPosition
        }).call(function() {
          _this5.jueSe.scaleX = scalePos[_this5._pointNum - 1];
          _this5.jueSe.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
          _this5.jueSe.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
        }).start();
        this.jueSe.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pass1);
        this.scheduleOnce(function() {
          for (var i = 0; i < _this5._pointNum - 1; i++) {
            var element = _this5._pointList[i];
            if (-1 !== element.name.indexOf("dao1")) {
              element.getComponent(sp.Skeleton).setAnimation(0, "animation1_3", true);
              cc.find("biaoqian/normal", element).color = cfg.grayColor;
            } else if (-1 !== element.name.indexOf("dao2")) {
              element.getComponent(sp.Skeleton).setAnimation(0, "animation2_3", true);
              cc.find("biaoqian/normal", element).color = cfg.grayColor;
            } else if (-1 !== element.name.indexOf("dao3")) {
              element.getComponent(sp.Skeleton).setAnimation(0, "animation3_3", true);
              cc.find("biaoqian/normal", element).color = cfg.grayColor;
            } else if (-1 !== element.name.indexOf("dao4")) {
              element.getComponent(sp.Skeleton).setAnimation(0, "animation4_3", true);
              cc.find("biaoqian/normal", element).color = cfg.grayColor;
            } else if (-1 !== element.name.indexOf("dao5")) {
              element.getComponent(sp.Skeleton).setAnimation(0, "animation5_3", true);
              cc.find("biaoqian/normal", element).color = cfg.grayColor;
            } else if (-1 !== element.name.indexOf("dao6")) {
              element.getComponent(sp.Skeleton).setAnimation(0, "animation6_3", true);
              cc.find("biaoqian/normal", element).color = cfg.grayColor;
            } else cc.find("small1", element).active = false;
          }
          if (-1 !== pointNode.name.indexOf("dao1")) {
            pointNode.getComponent(sp.Skeleton).setAnimation(0, "animation1_1", false);
            pointNode.getComponent(sp.Skeleton).addAnimation(0, "animation1_2", true);
          } else if (-1 !== pointNode.name.indexOf("dao2")) {
            pointNode.getComponent(sp.Skeleton).setAnimation(0, "animation2_1", false);
            pointNode.getComponent(sp.Skeleton).addAnimation(0, "animation2_2", true);
          } else if (-1 !== pointNode.name.indexOf("dao3")) {
            pointNode.getComponent(sp.Skeleton).setAnimation(0, "animation3_1", false);
            pointNode.getComponent(sp.Skeleton).addAnimation(0, "animation3_2", true);
          } else if (-1 !== pointNode.name.indexOf("dao4")) {
            pointNode.getComponent(sp.Skeleton).setAnimation(0, "animation4_1", false);
            pointNode.getComponent(sp.Skeleton).addAnimation(0, "animation4_2", true);
          } else if (-1 !== pointNode.name.indexOf("dao5")) {
            pointNode.getComponent(sp.Skeleton).setAnimation(0, "animation5_1", false);
            pointNode.getComponent(sp.Skeleton).addAnimation(0, "animation5_2", true);
          } else if (-1 !== pointNode.name.indexOf("dao6")) {
            pointNode.getComponent(sp.Skeleton).setAnimation(0, "animation6_1", false);
            pointNode.getComponent(sp.Skeleton).addAnimation(0, "animation6_2", true);
          } else {
            var chufa = cc.find("chufa", pointNode);
            chufa.active = true;
            chufa.getComponent(sp.Skeleton).setCompleteListener(function() {
              chufa.getComponent(sp.Skeleton).setCompleteListener(null);
              chufa.active = false;
            });
          }
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pass2);
          _this5.mapNode.getComponent(cc.ScrollView).scrollToPercentVertical(scrollPos[_this5._pointNum - 1], 1);
        }, 1);
      }
    });
    cc._RF.pop();
  }, {} ],
  GoldMiner_qiePing: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64e7aSmqetPBJaIiBDckMly", "GoldMiner_qiePing");
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        kuangche: {
          default: null,
          type: cc.Node
        },
        zhadan: {
          default: null,
          type: cc.Node
        },
        jinkuai: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      onDestroy: function onDestroy() {},
      start: function start() {},
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showKuangChe1: function showKuangChe1(callBack) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var show_popupSp;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_freein);
              _this2.kuangche.active = true;
              show_popupSp = _this2.kuangche.getComponent(sp.Skeleton);
              show_popupSp.setAnimation(0, "skill", false);
              show_popupSp.setCompleteListener(function() {
                _this2.kuangche.active = false;
                show_popupSp.setCompleteListener(null);
              });
              _context.next = 7;
              return _this2.awaitTime(1.8);

             case 7:
              callBack && callBack();

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showKuangChe2: function showKuangChe2(callBack) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var show_popupSp;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_freeout);
              _this3.kuangche.active = true;
              show_popupSp = _this3.kuangche.getComponent(sp.Skeleton);
              show_popupSp.setAnimation(0, "skill", false);
              show_popupSp.setCompleteListener(function() {
                _this3.kuangche.active = false;
                show_popupSp.setCompleteListener(null);
              });
              _context2.next = 7;
              return _this3.awaitTime(1.8);

             case 7:
              callBack && callBack();

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showZhaDan1: function showZhaDan1() {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_wheelin);
                _this4.zhadan.active = true;
                cc.vv.gameData.GetSlotsScript().showMask(true);
                show_popupSp = _this4.zhadan.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation1", false);
                show_popupSp.setCompleteListener(function() {
                  _this4.zhadan.active = false;
                  show_popupSp.setCompleteListener(null);
                });
                _context3.next = 8;
                return _this4.awaitTime(4);

               case 8:
                cc.vv.gameData.GetSlotsScript().showMask(false);
                sucess();

               case 10:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      showZhaDan2: function showZhaDan2(callBack) {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_wheelout);
                _this5.zhadan.active = true;
                show_popupSp = _this5.zhadan.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation2", false);
                show_popupSp.setCompleteListener(function() {
                  _this5.zhadan.active = false;
                  sucess();
                  show_popupSp.setCompleteListener(null);
                });
                _context4.next = 7;
                return _this5.awaitTime(.5);

               case 7:
                callBack && callBack();

               case 8:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      showJinKua: function showJinKua(callBack) {
        var _this6 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var show_popupSp;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_map);
                _this6.jinkuai.active = true;
                show_popupSp = _this6.jinkuai.getComponent(sp.Skeleton);
                show_popupSp.setAnimation(0, "animation", false);
                show_popupSp.setCompleteListener(function() {
                  _this6.jinkuai.active = false;
                  sucess();
                  show_popupSp.setCompleteListener(null);
                });
                _context5.next = 7;
                return _this6.awaitTime(.8);

               case 7:
                callBack && callBack();

               case 8:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  GoldMiner_reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58d9ae9uv9NabMW+YNVxyX4", "GoldMiner_reel");
    "use strict";
    function _createForOfIteratorHelper(o) {
      if ("undefined" === typeof Symbol || null == o[Symbol.iterator]) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
          var i = 0;
          var F = function F() {};
          return {
            s: F,
            n: function n() {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function e(_e) {
              throw _e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var it, normalCompletion = true, didErr = false, err;
      return {
        s: function s() {
          it = o[Symbol.iterator]();
        },
        n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function e(_e2) {
          didErr = true;
          err = _e2;
        },
        f: function f() {
          try {
            normalCompletion || null == it["return"] || it["return"]();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(n);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {
        _isShowScatter: false,
        _randomVal: 0,
        _randomNum: 0
      },
      onLoad: function onLoad() {
        this._super();
      },
      start: function start() {},
      StartMove: function StartMove() {
        this._super();
        this._isShowScatter = false;
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                var node = cc.find(info.antiNode, this.node);
                if (node && node.active) {
                  node.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        } else {
          var _node = cc.find(name, this.node);
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      StartRecycleSymbol: function StartRecycleSymbol() {},
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelBounsActionBefore(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelBounsActionDeep(this._reelIdx);
        this.playReelStop();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      playReelStop: function playReelStop() {
        var reelStateInfo = this._cfg.reelStateInfo;
        cc.vv.gameData.getManage()._isInFree && (reelStateInfo = this._cfg.reelStateInfoFree);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator2 = _createForOfIteratorHelper(this._reelState), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var info = _step2.value;
              info.isStop && info.id.includes(item.GetShowId()) ? item.playStopAnimation() : item.playidleAnimation(true);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (reelStateInfo && reelStateInfo[0]) {
          var reelStopEffect = "";
          var symbolEffect = "";
          var hasSymbol = false;
          var _iterator3 = _createForOfIteratorHelper(this._reelState), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var _info = _step3.value;
              if (_info.isStop) {
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound : "";
                hasSymbol = true;
              } else reelStopEffect = _info.reelStopSound ? _info.reelStopSound : "";
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          hasSymbol && (reelStopEffect = symbolEffect);
          var soundPath = reelStateInfo[0].path;
          soundPath || (soundPath = cc.vv.gameData.getGameDir());
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      },
      updataSymbol: function updataSymbol() {
        var symbol = this._symbols.shift();
        var symbolData = null;
        if (this._stopTime <= 0 && this._bStoping && this._result && !this._bResizing) if (this._result instanceof Array) {
          this.ReadyToStop();
          symbolData = this._result.shift();
          symbolData || (this._bMoving = false);
        } else cc.error("LMSlots_Reel_Base.updataSymbol\u8bbe\u7f6e\u7684\u7ed3\u679c\u4e0d\u662f\u6570\u7ec4!");
        if (symbolData) symbol.ShowById(symbolData.sid, symbolData.data); else if (this._randomVal) if (this._randomNum > 0) {
          symbol.ShowById(this._randomVal);
          this._randomNum--;
        } else {
          this._randomVal = symbol.ShowRandomSymbol();
          this._randomNum = this._cfg.randomArray[this._randomVal];
          this._randomNum--;
        } else {
          this._randomVal = symbol.ShowRandomSymbol();
          this._randomNum = this._cfg.randomArray[this._randomVal];
          this._randomNum--;
        }
        this._symbols.push(symbol);
        this.ReLayOut();
        this._curY = 0;
        this._holderNode.y = this._holderOrigPosY;
        this._bMoving || this.OnReelBounsAction();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  GoldMiner_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50db88V1QxBBb9YwbX+opAF", "GoldMiner_sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: {
          default: "games/GoldMiner/",
          override: true
        },
        bonus_stop: {
          default: "",
          override: true
        },
        scatter_ant: {
          default: "",
          override: true
        },
        bonus_ant: {
          default: "",
          override: true
        },
        base_bgm: {
          default: "base_bgm",
          override: true
        },
        reel_stop: {
          default: "reel_stop",
          override: true
        },
        scatter_stop: {
          default: "",
          override: true
        },
        bell: "bell",
        bomb: "bomb",
        click: "click",
        coin: "coin",
        collect_fly: "collect_fly",
        collect_full: "collect_full",
        collect_lock: "collect_lock",
        collect_unlock: "collect_unlock",
        dialog_close: "dialog_close",
        grand_dialog_collect_show: "grand_dialog_collect_show",
        jp_lock: "jp_lock",
        jp_unlock: "jp_unlock",
        major_dialog_collect_show: "major_dialog_collect_show",
        map_close: "map_close",
        map_open: "map_open",
        minor_dialog_collect_show: "minor_dialog_collect_show",
        notify: "notify",
        popup_out: "popup_out",
        reel_notify: "reel_notify",
        symbol_bonus: "symbol_bonus",
        symbol_scatter: "symbol_scatter",
        transition_freein: "transition_freein",
        transition_freeout: "transition_freeout",
        transition_map: "transition_map",
        transition_wheelin: "transition_wheelin",
        transition_wheelout: "transition_wheelout",
        welcome: "welcome",
        win_rollup: "win_rollup",
        win1: "win1",
        win1end: "win1end",
        win2: "win2",
        win2end: "win2end",
        free_bgm: "free_bgm",
        free_dialog_collect_show: "free_dialog_collect_show",
        free_dialog_start_show: "free_dialog_start_show",
        groupwild: "groupwild",
        move: "move",
        randomwild: "randomwild",
        stickywild: "stickywild",
        doorclose: "doorclose",
        dooropen: "dooropen",
        mapfree_bgm: "mapfree_bgm",
        mapfree_dialog_collect_show: "mapfree_dialog_collect_show",
        mapfree_dialog_start_show: "mapfree_dialog_start_show",
        pass1: "pass1",
        pass2: "pass2",
        multiply: "multiply",
        wheel_bgm: "wheel_bgm",
        wheel_click: "wheel_click",
        wheel_dialog_collect_show: "wheel_dialog_collect_show",
        wheel_notify: "wheel_notify",
        wheel_roll: "wheel_roll",
        wheel_roll2: "wheel_roll2"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  GoldMiner_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09fdeGACvRBYJb4nCt+UCUr", "GoldMiner_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._symbolIdx = idx;
        2 === this._id ? this.node.zIndex = 150 - idx : this.node.zIndex = 100 - idx;
      },
      playWinAnimation: function playWinAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          if (102 === id) {
            this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
            this._showNode.active = true;
            if (cfg.symbol[id].win_ani && "" != cfg.symbol[id].win_ani.name) {
              this.node.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
              var nodeSp = this._showNode.getComponent(sp.Skeleton);
              nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
            }
          } else {
            var aniNode = this.setAnimationToTop(true);
            aniNode.active = true;
            var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
            topShowNode.active = true;
            if (cfg.symbol[id].win_ani && "" != cfg.symbol[id].win_ani.name) {
              aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
              var _nodeSp = topShowNode.getComponent(sp.Skeleton);
              _nodeSp && _nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
            }
          }
        } else {
          this._showNode.active = true;
          this.playWinTweenAction();
        }
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          this.OnReelBounsAction(aniNode);
          if ("" != cfg.symbol[id].stop_ani.name) {
            aniNode.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              cfg.symbol[id].idle_ani && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
            }
          }
        }
      },
      playTriggerAnimation: function playTriggerAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].trigger_ani) {
          this._state = "idle";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if ("" != cfg.symbol[id].trigger_ani.name) {
            aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, false);
              cfg.symbol[id].idle_ani && nodeSp.addAnimation(0, cfg.symbol[id].idle_ani.name, true);
            }
          }
        }
        return isPlay;
      },
      playidleAnimation: function playidleAnimation(isStop) {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._state = "idle";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          isStop && this.OnReelBounsAction(aniNode);
          if ("" != cfg.symbol[id].idle_ani.name) {
            aniNode.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        }
        return isPlay;
      },
      OnReelBounsAction: function OnReelBounsAction(node) {
        var cfg = cc.vv.gameData.getGameCfg();
        var distance = cfg.bounceInfo ? cfg.bounceInfo.distance : 30;
        var time = cfg.bounceInfo ? cfg.bounceInfo.time : .3;
        time /= cc.vv.gameData.GetSlotsScript().GetTimeScale();
        cc.tween(node).to(time, {
          position: cc.v2(node.x, node.y + distance)
        }).start();
      },
      changeBonus: function changeBonus(id) {
        if (3 !== this._id) return false;
        var cfg = cc.vv.gameData.getGameCfg();
        var cloneNode = cc.instantiate(this.node);
        var wordPos = this.node.convertToWorldSpaceAR(cc.v2(0));
        cloneNode.parent = this._topAniNode;
        cloneNode.position = this._topAniNode.convertToNodeSpaceAR(wordPos);
        for (var i = 0; i < cloneNode.children.length; i++) {
          var element = cloneNode.children[i];
          element.active = false;
        }
        var topShowNode = cc.find(cfg.symbol[this._id].win_node, cloneNode);
        topShowNode.active = true;
        var topShowNodeSp = topShowNode.getComponent(sp.Skeleton);
        topShowNodeSp.setAnimation(0, cfg.symbol[this._id].open_ani, false);
        topShowNodeSp.setCompleteListener(function() {
          cloneNode.parent = null;
          topShowNodeSp.setCompleteListener(null);
        });
        this.ShowById(id);
        return true;
      },
      changeGoldWild: function changeGoldWild() {
        if (1 !== this._id) return false;
        this.setAnimationToTop(false);
        this.ShowById(101);
      },
      changeGoldWildAnimation: function changeGoldWildAnimation() {
        var _this = this;
        if (1 !== this._id) return false;
        var cfg = cc.vv.gameData.getGameCfg();
        this._id = 101;
        this._showNode && (this._showNode.active = false);
        this._showNode = cc.find(cfg.symbol[this._id].win_node, this.node);
        this._showNode.active = true;
        this._showNode.getComponent(sp.Skeleton).setAnimation(0, "animation9", true);
        var wildguding = cc.find("wildguding", this.node);
        var gudingEffect = cc.instantiate(wildguding);
        gudingEffect.active = true;
        gudingEffect.parent = cc.vv.gameData.getManage()._collectNode;
        var position = wildguding.convertToWorldSpaceAR(cc.v2(0, 0));
        var finalPos = cc.vv.gameData.getManage()._collectNode.convertToNodeSpaceAR(position);
        gudingEffect.position = finalPos;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.stickywild);
        gudingEffect.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        gudingEffect.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this._showNode.getComponent(sp.Skeleton).setAnimation(0, "animation5", false);
          _this._showNode.getComponent(sp.Skeleton).addAnimation(0, "animation7", true);
          gudingEffect.getComponent(sp.Skeleton).setCompleteListener(null);
          gudingEffect.parent = null;
        });
      },
      GetRandomCfg: function GetRandomCfg() {
        var cfg = cc.vv.gameData.getGameCfg();
        var isFree = cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime();
        if (isFree && cfg.cardmapfree) {
          if (cc.vv.gameData.GetSlotsScript()._randomWild) return cfg.cardmaprandomwild;
          return cfg.cardmapfree;
        }
        return cfg.cardmap;
      },
      ShowInitSymbol: function ShowInitSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randVal;
        var randomcfg = cfg.cardmaprandomwild;
        if (randomcfg) {
          var reelrandomCfg = randomcfg[this._reelIdx + 1];
          if (reelrandomCfg) {
            var randIdx = cc.vv.gameData.GetReelRandomIdx(this._reelIdx);
            randIdx && (randIdx = Global.random(1, reelrandomCfg.length) - 1);
            randVal = reelrandomCfg[randIdx];
            if (!randVal) {
              randIdx = 0;
              randVal = reelrandomCfg[randIdx];
            }
            cc.vv.gameData.SetReelRandomIdx(this._reelIdx, ++randIdx);
          }
        } else {
          var _cfg = cc.vv.gameData.getGameCfg();
          var _randIdx = Global.random(1, _cfg.randomSymbols.length);
          randVal = _cfg.randomSymbols[_randIdx - 1];
        }
        this.ShowById(randVal);
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var randVal;
        var randomcfg = this.GetRandomCfg();
        if (randomcfg) {
          var reelrandomCfg = randomcfg[this._reelIdx + 1];
          if (reelrandomCfg) {
            var randIdx = cc.vv.gameData.GetReelRandomIdx(this._reelIdx);
            randIdx && (randIdx = Global.random(1, reelrandomCfg.length) - 1);
            randVal = reelrandomCfg[randIdx];
            if (!randVal) {
              randIdx = 0;
              randVal = reelrandomCfg[randIdx];
            }
            cc.vv.gameData.SetReelRandomIdx(this._reelIdx, ++randIdx);
          }
        } else {
          var cfg = cc.vv.gameData.getGameCfg();
          var _randIdx2 = Global.random(1, cfg.randomSymbols.length);
          randVal = cfg.randomSymbols[_randIdx2 - 1];
        }
        this.ShowById(randVal);
        return randVal;
      },
      playCloseAnimation: function playCloseAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        this.node.active = true;
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].close_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].close_ani.name) {
            this.node.zIndex = cfg.symbol[id].close_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].close_ani.name, false);
          }
        }
      },
      playOpenAnimation: function playOpenAnimation(mult) {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].open_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          cc.find("wildNum", this.node).getComponent(cc.Label).string = mult + "X";
          if ("" != cfg.symbol[id].open_ani.name) {
            this.node.zIndex = cfg.symbol[id].open_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].open_ani.name, false);
          }
        }
      },
      changeMultWild: function changeMultWild(mult) {
        this.ShowById(102);
        cc.find("wildNum", this.node).active = true;
        cc.find("wildNum", this.node).getComponent(cc.Label).string = mult + "X";
      },
      showLanSeMuMen: function showLanSeMuMen(mult) {
        this.ShowById(103);
        this._showNode && (this._showNode.active = false);
        cc.find("s14", this.node).active = true;
        cc.find("wildNum", this.node).active = true;
        cc.find("wildNum", this.node).getComponent(cc.Label).string = mult + "X";
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        cc.find("wildNum", this.node).active = false;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "GoldMiner_777", "GoldMiner_Bottom", "GoldMiner_Cfg", "GoldMiner_GameData", "GoldMiner_Logic", "GoldMiner_Manage", "GoldMiner_Pop", "GoldMiner_PrizePool", "GoldMiner_Slots", "GoldMiner_freeWheel", "GoldMiner_mapControl", "GoldMiner_qiePing", "GoldMiner_reel", "GoldMiner_sound", "GoldMiner_symbol" ]);