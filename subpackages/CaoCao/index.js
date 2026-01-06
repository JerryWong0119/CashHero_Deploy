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
  CaoCao_777: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ff4flT345IpK6j5QiaBocp", "CaoCao_777");
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
              _this.node.active = false;
              coin = _this._subGameData.wincoin;
              cc.vv.gameData.AddCoin(coin);
              totalWin = cc.vv.gameData.GetBottomScript().getCurrentWin() || 0;
              totalWin += coin;
              cc.vv.gameData.GetSlotsScript().ShowBottomWin(coin, totalWin, true, function() {
                cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              });

             case 6:
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
  CaoCao_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae195Cx3utO3oH9De3tfjHL", "CaoCao_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      showTotalBet: function showTotalBet(isShow) {
        cc.find("totalBetBg", this.node).active = isShow;
      },
      OnClickSpin: function OnClickSpin() {
        cc.vv.gameData.getManage()._isInBonus ? cc.vv.gameData.GetBonusSlotsScript().StartMove() : this._super();
      },
      OnClickStop: function OnClickStop() {
        cc.vv.gameData.getManage()._isInBonus ? cc.vv.gameData.GetBonusSlotsScript().StopMove() : this._super();
      },
      ShowBtnsByState: function ShowBtnsByState(strState) {
        this._super(strState);
        if ("bounsGame" == strState) {
          this._btn_spin.active = true;
          this._SetBtnEnable(this._btn_spin, true);
          this._btn_stop.active = false;
          this._SetBtnEnable(this._btn_add_bet, false);
          this._SetBtnEnable(this._btn_minus_bet, false);
          this._SetBtnEnable(this._btn_max_bet, false);
        }
      },
      SendSpinReq: function SendSpinReq() {
        this.ShowBtnsByState("moveing_1");
        var betIdx = cc.vv.gameData.GetBetIdx();
        cc.vv.gameData.ReqSpin(betIdx);
        if (this._needRefushFreeTime) {
          this._needRefushFreeTime = null;
          var restFree = cc.vv.gameData.GetFreeTime();
          cc.vv.gameData.SetFreeTime(restFree - 1);
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this.ShowFreeModel(true, total - rest, total);
        }
        if (cc.vv.gameData.getManage()._isInFree && !cc.vv.gameData.getMapControl().getIsMapFree()) {
          var slots = cc.vv.gameData.GetFreeSlotsScript();
          slots.StartMove();
        } else {
          var _slots = cc.vv.gameData.GetSlotsScript();
          _slots.StartMove();
        }
        this._ShowBetProTip(false);
        this.ShowAutoSelect(false);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  CaoCao_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19d33SZRflIl4ZLBFy6tTZq", "CaoCao_Cfg");
    "use strict";
    var _symbol, _cardmap, _cardmapfree, _cardmapfree2, _MapConfig;
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
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 2, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        },
        stop_ani: {
          name: "buling",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation3",
          zIndex: 200
        },
        stop_ani: {
          name: "animation2",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation1",
          zIndex: 200
        },
        idle_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 4, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 5, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 6, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 7, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 8, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 9, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "actionframe",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 10, {
        node: "s3"
      }), _defineProperty(_symbol, 11, {
        node: "s2"
      }), _defineProperty(_symbol, 12, {
        node: "s1"
      }), _defineProperty(_symbol, 13, {
        node: "s10"
      }), _defineProperty(_symbol, 101, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "actionframe2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 102, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "actionframe3",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 103, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "actionframe4",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 104, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "actionframe5",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 105, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "actionframe6",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 106, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "actionframe7",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 107, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "actionframe8",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 1001, {
        node: "s14"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "CaoCao_Bottom",
        Slots: "CaoCao_Slots",
        Reels: "CaoCao_reel",
        Symbols: "CaoCao_symbol",
        Sound: "CaoCao_sound"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 130,
        height: 104
      },
      help_prefab: "games/CaoCao/prefab/LMSlots_Help_prefab",
      helpItems: [ "games/CaoCao/prefab/LMSlots_Help_item1", "games/CaoCao/prefab/LMSlots_Help_item2", "games/CaoCao/prefab/LMSlots_Help_item3", "games/CaoCao/prefab/LMSlots_Help_item4", "games/CaoCao/prefab/LMSlots_Help_item5", "games/CaoCao/prefab/LMSlots_Help_item6" ],
      scatterId: 2,
      autoModelDelay: 1,
      randomSymbols: [ 3, 3, 3, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001 ],
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 12, 12, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 6, 6, 6, 6, 13, 13, 13, 13, 13, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 11, 3, 3, 3, 3, 12, 12, 8, 8, 8, 13, 13, 13, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 13, 13, 13, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 3, 3, 3, 3, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 3, 3, 3, 3, 1, 7, 7, 7, 9, 9, 9, 13, 13, 13, 13, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 13, 13, 13, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 13, 13, 13, 12 ]), 
      _defineProperty(_cardmap, 2, [ 7, 7, 7, 7, 13, 13, 13, 13, 8, 8, 7, 11, 11, 11, 3, 3, 3, 3, 1, 1, 7, 7, 3, 3, 3, 3, 13, 13, 13, 13, 13, 1, 2, 9, 8, 6, 6, 6, 6, 5, 5, 5, 5, 8, 8, 13, 13, 13, 13, 13, 11, 11, 11, 11, 12, 12, 12, 12, 8, 6, 6, 2, 4, 4, 4, 9, 9, 3, 3, 3, 3, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 2, 5, 5, 5, 9, 9, 9, 9, 5, 5, 5, 5, 3, 3, 3, 3, 10, 10, 10, 12, 12, 12, 12, 10, 10, 10, 8, 8, 8, 7, 2, 1, 1, 12, 12, 12, 12, 8, 7, 5, 5, 13, 13, 13, 13, 11, 7, 3, 3, 3, 3, 4, 4, 2, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmap, 3, [ 3, 3, 3, 3, 10, 9, 13, 13, 13, 13, 11, 11, 11, 11, 8, 8, 12, 12, 12, 12, 7, 7, 7, 3, 3, 3, 3, 4, 4, 4, 2, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 2, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 2, 1, 8, 12, 12, 12, 12, 13, 13, 13, 13, 6, 6, 6, 6, 4, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 2, 3, 3, 3, 3, 4, 4, 13, 13, 13, 13, 13, 10, 10, 10, 10, 8, 8, 4, 4, 3, 3, 3, 3, 1, 1, 13, 13, 13, 13, 13, 12, 9, 9, 9, 2, 5, 5, 8, 8, 8, 1, 3, 3, 3, 3, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 1, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 13, 13, 13, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 4, [ 8, 9, 9, 9, 1, 6, 6, 5, 6, 6, 13, 13, 13, 13, 11, 11, 7, 7, 7, 7, 4, 4, 4, 2, 3, 3, 3, 3, 7, 7, 7, 4, 3, 3, 3, 3, 7, 7, 4, 4, 12, 3, 3, 3, 3, 5, 5, 5, 2, 10, 10, 9, 9, 9, 9, 11, 11, 11, 11, 12, 12, 12, 10, 10, 10, 10, 3, 3, 3, 3, 8, 8, 8, 8, 7, 7, 1, 1, 2, 12, 12, 7, 7, 7, 7, 12, 12, 12, 12, 13, 13, 13, 13, 13, 8, 9, 9, 11, 11, 4, 4, 8, 8, 8, 3, 3, 3, 3, 2, 9, 7, 7, 7, 13, 13, 13, 13, 13, 1, 8, 8, 8, 8, 9, 6, 6, 6, 5, 5, 5, 5, 6, 6, 4, 4, 13, 13, 13, 13, 13, 2, 9, 9, 9, 9, 5, 5, 8, 12, 12, 12, 5, 5, 1, 1, 4, 8, 8, 8, 6, 6, 6, 6, 1, 1, 10, 10, 10, 6, 12, 12, 1, 4, 4, 11, 11, 11, 11, 10, 10, 10, 1, 7, 7, 4, 13, 13, 13, 13, 6, 8, 4, 8, 8, 6, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmap, 5, [ 5, 5, 5, 5, 11, 11, 11, 13, 13, 13, 13, 7, 7, 7, 1, 4, 7, 7, 7, 8, 10, 10, 11, 11, 11, 1, 1, 6, 3, 3, 3, 3, 11, 11, 11, 4, 4, 4, 6, 6, 6, 6, 9, 9, 9, 9, 1, 1, 9, 9, 9, 9, 12, 12, 12, 12, 6, 6, 6, 6, 9, 9, 9, 9, 10, 10, 6, 6, 6, 3, 3, 3, 3, 7, 7, 7, 7, 1, 1, 3, 3, 3, 3, 8, 8, 8, 8, 6, 6, 6, 5, 13, 13, 13, 13, 13, 13, 3, 3, 3, 3, 5, 5, 5, 5, 12, 12, 12, 12, 8, 12, 12, 12, 8, 8, 8, 8, 9, 13, 13, 13, 13, 13, 7, 8, 8, 10, 10, 10, 10, 4, 4, 13, 13, 13, 13, 13, 3, 3, 3, 3, 10, 10, 10, 1, 4, 4, 6, 6, 6, 7, 12, 12, 12, 12, 5, 5, 5, 1, 7, 7, 4, 7, 7, 4, 4, 4, 7, 11, 11, 11, 4, 4, 4, 7, 13, 13, 13, 13, 13, 10, 7, 7, 9, 9, 1, 6, 6 ]), 
      _cardmap),
      cardmapfree: (_cardmapfree = {}, _defineProperty(_cardmapfree, 1, [ 12, 12, 1, 1, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 11, 12, 12, 8, 8, 8, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmapfree, 2, [ 7, 7, 7, 7, 13, 8, 8, 7, 11, 11, 11, 1, 1, 7, 7, 1, 1, 9, 8, 6, 6, 6, 6, 13, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 13, 8, 6, 6, 6, 4, 4, 4, 9, 9, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 10, 5, 5, 5, 9, 9, 9, 9, 13, 5, 5, 5, 5, 10, 10, 10, 12, 12, 12, 12, 13, 10, 10, 10, 8, 8, 8, 7, 7, 1, 1, 13, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 4, 4, 4, 13, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 13, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 13, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 13, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmapfree, 3, [ 10, 9, 11, 11, 11, 11, 8, 8, 12, 12, 12, 12, 7, 7, 7, 4, 4, 4, 4, 10, 10, 5, 5, 6, 6, 8, 8, 8, 8, 10, 10, 10, 11, 7, 9, 9, 9, 9, 1, 1, 1, 5, 8, 8, 8, 8, 12, 12, 12, 12, 5, 5, 6, 6, 11, 11, 5, 5, 11, 11, 4, 4, 4, 1, 8, 12, 12, 12, 12, 6, 6, 6, 6, 4, 6, 6, 6, 6, 5, 5, 8, 7, 7, 7, 7, 4, 4, 10, 10, 10, 10, 8, 8, 4, 4, 1, 1, 12, 9, 9, 9, 5, 5, 5, 8, 8, 8, 1, 5, 5, 5, 12, 12, 6, 10, 1, 9, 9, 5, 5, 4, 7, 7, 8, 8, 4, 4, 4, 7, 5, 5, 5, 5, 9, 1, 1, 11, 11, 11, 9, 9, 9, 7, 7, 9, 4, 6, 8, 6, 6, 1, 10, 6, 6, 6, 6 ]), 
      _defineProperty(_cardmapfree, 4, [ 12, 12, 1, 1, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 11, 12, 12, 8, 8, 8, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmapfree, 5, [ 7, 7, 7, 7, 13, 8, 8, 7, 11, 11, 11, 1, 1, 7, 7, 1, 1, 9, 8, 6, 6, 6, 6, 13, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 13, 8, 6, 6, 6, 4, 4, 4, 9, 9, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 10, 5, 5, 5, 9, 9, 9, 9, 13, 5, 5, 5, 5, 10, 10, 10, 12, 12, 12, 12, 13, 10, 10, 10, 8, 8, 8, 7, 7, 1, 1, 13, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 4, 4, 4, 13, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 13, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 13, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 13, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _cardmapfree),
      cardmapfree2: (_cardmapfree2 = {}, _defineProperty(_cardmapfree2, 1, [ 12, 12, 1, 1, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 11, 12, 12, 8, 8, 8, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmapfree2, 2, [ 7, 7, 7, 7, 13, 8, 8, 7, 11, 11, 11, 1, 1, 7, 7, 1, 1, 9, 8, 6, 6, 6, 6, 13, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 13, 8, 6, 6, 6, 4, 4, 4, 9, 9, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 10, 5, 5, 5, 9, 9, 9, 9, 13, 5, 5, 5, 5, 10, 10, 10, 12, 12, 12, 12, 13, 10, 10, 10, 8, 8, 8, 7, 7, 1, 1, 13, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 4, 4, 4, 13, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 13, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 13, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 13, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _defineProperty(_cardmapfree2, 3, [ 1, 1, 1, 1, 1, 1, 1 ]), _defineProperty(_cardmapfree2, 4, [ 12, 12, 1, 1, 6, 6, 6, 6, 5, 1, 4, 4, 9, 9, 9, 6, 5, 5, 11, 12, 12, 8, 8, 8, 4, 4, 10, 10, 10, 10, 1, 1, 7, 8, 8, 8, 12, 12, 12, 12, 4, 6, 6, 6, 6, 9, 9, 9, 9, 4, 4, 10, 10, 11, 10, 10, 10, 7, 7, 7, 7, 12, 12, 12, 12, 5, 1, 11, 5, 8, 9, 1, 7, 7, 7, 9, 9, 9, 7, 7, 5, 5, 4, 5, 5, 5, 5, 8, 8, 4, 8, 9, 9, 11, 11, 11, 11, 8, 8, 7, 7, 7, 6, 5, 5, 4, 9, 9, 1, 7, 7, 7, 7, 4, 4, 4, 5, 5, 1, 6, 11, 11, 5, 5, 5, 5, 7, 4, 4, 10, 1, 12, 12, 11, 11, 11, 10, 10, 7, 5, 6, 7, 12 ]), 
      _defineProperty(_cardmapfree2, 5, [ 7, 7, 7, 7, 13, 8, 8, 7, 11, 11, 11, 1, 1, 7, 7, 1, 1, 9, 8, 6, 6, 6, 6, 13, 5, 5, 5, 5, 8, 8, 11, 11, 11, 11, 12, 12, 12, 12, 13, 8, 6, 6, 6, 4, 4, 4, 9, 9, 8, 6, 6, 9, 9, 9, 9, 7, 7, 5, 10, 10, 10, 5, 5, 5, 9, 9, 9, 9, 13, 5, 5, 5, 5, 10, 10, 10, 12, 12, 12, 12, 13, 10, 10, 10, 8, 8, 8, 7, 7, 1, 1, 13, 12, 12, 12, 12, 8, 7, 5, 5, 11, 7, 4, 4, 4, 13, 8, 8, 8, 8, 4, 12, 12, 1, 1, 6, 1, 13, 8, 8, 8, 10, 10, 10, 7, 7, 7, 1, 1, 13, 10, 4, 4, 12, 4, 7, 11, 4, 4, 4, 6, 6, 6, 7, 7, 7, 4, 4, 4, 13, 5, 5, 9, 9, 9, 5, 11, 5, 5, 5, 8, 11, 11, 8, 9, 7 ]), 
      _cardmapfree2),
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      commEffect: {
        path: "games/CaoCao/",
        win1: [ "sound_classic_lastwin_1", "" ],
        win2: [ "sound_classic_lastwin_2", "" ]
      },
      reelStateInfo: [ {
        id: [ 3 ],
        mini: 100,
        counts: [ 3, 3, 3, 3, 3, 100 ],
        antiNode: "",
        path: "games/CaoCao/",
        reelStopSound: "Puss_Reels_Stop",
        symbolStopSound: "music_Puss_Bonus_Down",
        antSound: "",
        antSpeed: 2e3
      }, {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/CaoCao/",
        reelStopSound: "Puss_Reels_Stop",
        symbolStopSound: "Puss_scatter_down",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ],
      AddAntiTime: 2,
      normalBgm: "Puss_norbg",
      grayColor: cc.color(60, 60, 60),
      normalColor: cc.color(255, 255, 255),
      MapConfig: (_MapConfig = {}, _defineProperty(_MapConfig, 1, {
        id: 1,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 2, {
        id: 2,
        type: 2,
        needCnt: 200,
        min: 2,
        max: 5,
        multType: 1
      }), _defineProperty(_MapConfig, 3, {
        id: 3,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 4, {
        id: 4,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 5, {
        id: 5,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 6, {
        id: 6,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 7, {
        id: 7,
        type: 2,
        needCnt: 200,
        min: 2,
        max: 10,
        multType: 2
      }), _defineProperty(_MapConfig, 8, {
        id: 8,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 9, {
        id: 9,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 10, {
        id: 10,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 11, {
        id: 11,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 12, {
        id: 12,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 13, {
        id: 13,
        type: 2,
        needCnt: 200,
        min: 3,
        max: 15,
        multType: 3
      }), _defineProperty(_MapConfig, 14, {
        id: 14,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 15, {
        id: 15,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 16, {
        id: 16,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 17, {
        id: 17,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 18, {
        id: 18,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 19, {
        id: 19,
        type: 1,
        needCnt: 200
      }), _defineProperty(_MapConfig, 20, {
        id: 20,
        type: 2,
        needCnt: 200,
        min: 5,
        max: 100,
        multType: 4
      }), _MapConfig)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  CaoCao_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8a02rWnDhLo5VuO+ULpGk8", "CaoCao_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _mapControl: null,
        _popWinManage: null,
        _manage: null,
        _freeSlotsScript: null,
        _bonusSlotsScript: null,
        _collectNode: null
      },
      setPopWinManage: function setPopWinManage(script) {
        this._popWinManage = script;
      },
      getPopWinManage: function getPopWinManage() {
        return this._popWinManage;
      },
      setMapControl: function setMapControl(script) {
        this._mapControl = script;
        this._mapControl.init(this._deskInfo.mapInfo);
      },
      getMapControl: function getMapControl() {
        return this._mapControl;
      },
      setManage: function setManage(script) {
        this._manage = script;
      },
      getManage: function getManage() {
        return this._manage;
      },
      SetFreeSlotsScript: function SetFreeSlotsScript(script) {
        this._freeSlotsScript = script;
      },
      GetFreeSlotsScript: function GetFreeSlotsScript() {
        return this._freeSlotsScript;
      },
      SetBonusSlotsScript: function SetBonusSlotsScript(script) {
        this._bonusSlotsScript = script;
      },
      GetBonusSlotsScript: function GetBonusSlotsScript() {
        return this._bonusSlotsScript;
      },
      SetCollectNode: function SetCollectNode(script) {
        this._collectNode = script;
      },
      getCollectNode: function getCollectNode() {
        return this._collectNode;
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._deskInfo.user.coin = msg.coin;
          this._gameInfo = msg;
          this._deskInfo.restFreeCount = msg.freeCnt;
          this._deskInfo.allFreeCount = msg.allFreeCnt;
          this._puzzleData = msg.chipGame;
          msg.gameTask && cc.vv.UserManager.updateQuestInfoData(msg.gameTask);
          this._manage.onMsgSpine(msg);
          this._puzzleData && this._cfg.puzzleCfg && this._puzzleData.currChipInfo && cc.find("Canvas").getComponent("LMSlots_Puzzle").puzzleFly();
        }
      },
      getMapInfo: function getMapInfo() {
        if (this._gameInfo && this._gameInfo.mapInfo) return this._gameInfo.mapInfo;
        return this._deskInfo.mapInfo;
      },
      _doPauseAction: function _doPauseAction(bPause) {
        this._super(bPause);
        var pauseActionNode = [];
        var FreeSlotCmp = this.GetFreeSlotsScript();
        if (FreeSlotCmp) {
          FreeSlotCmp.enabled = bPause;
          var reels = FreeSlotCmp._reels;
          for (var i = 0; i < reels.length; i++) {
            var item = reels[i];
            item.enabled = bPause;
            var symbols = item._symbols;
            for (var j = 0; j < symbols.length; j++) {
              var sysItem = symbols[j];
              sysItem.enabled = bPause;
              pauseActionNode.push(sysItem.node);
            }
          }
        }
        var BonusSlotCmp = this.GetBonusSlotsScript();
        if (BonusSlotCmp) {
          BonusSlotCmp.enabled = bPause;
          var _reels = BonusSlotCmp._reels;
          for (var _i = 0; _i < _reels.length; _i++) {
            var _item = _reels[_i];
            if (_item) {
              _item.enabled = bPause;
              var _symbols = _item._symbols;
              for (var _j = 0; _j < _symbols.length; _j++) {
                var _sysItem = _symbols[_j];
                _sysItem.enabled = bPause;
                pauseActionNode.push(_sysItem.node);
              }
            }
          }
        }
        for (var it = 0; it < pauseActionNode.length; it++) {
          pauseActionNode[it].active && (bPause ? pauseActionNode[it].resumeAllActions() : pauseActionNode[it].pauseAllActions());
          var symChild = pauseActionNode[it].children;
          for (var k = 0; k < symChild.length; k++) symChild[k].active && (bPause ? symChild[k].resumeAllActions() : symChild[k].pauseAllActions());
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  CaoCao_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bfc5324vnRBFro5XUDY7MT+", "CaoCao_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var safeNode = cc.find("Canvas/safe_node");
        var popWinManage = safeNode.getComponentInChildren("CaoCao_Pop");
        popWinManage && cc.vv.gameData.setPopWinManage(popWinManage);
        var mapControl = safeNode.getComponentInChildren("CaoCao_mapControl");
        mapControl && cc.vv.gameData.setMapControl(mapControl);
        var manage = safeNode.addComponent("CaoCao_manage");
        manage && cc.vv.gameData.setManage(manage);
        var free_slots = cc.find("slotsfree", safeNode);
        cc.vv.gameData.SetFreeSlotsScript(free_slots.addComponent("CaoCao_Slotsfree"));
        var bonus_slots = cc.find("slotsbonus", safeNode);
        cc.vv.gameData.SetBonusSlotsScript(bonus_slots.addComponent("CaoCao_Slotsbonus"));
        cc.vv.gameData.SetCollectNode(cc.find("slots/collectNode", safeNode).getComponent("CaoCao_collectNode"));
      },
      StartSlot: function StartSlot() {
        this._super();
        var script_slotsfree = cc.vv.gameData.GetFreeSlotsScript();
        script_slotsfree.Init();
        var script_slotsbonus = cc.vv.gameData.GetBonusSlotsScript();
        script_slotsbonus.Init();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  CaoCao_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "007d52UTMlIaqyG+C121yYm", "CaoCao_Pop");
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
        _showFreeGameSuccess: null
      },
      onLoad: function onLoad() {},
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
      showSuperFreeGame: function showSuperFreeGame(times, type) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
            var showNode, timesNum, typeSprite;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_fsView);
                _this3.showWin();
                showNode = cc.find("show_superFreeGame", _this3.node);
                showNode.active = true;
                showNode.scale = 0;
                timesNum = cc.find("timesBg/num", showNode);
                timesNum.getComponent(cc.Label).string = times;
                typeSprite = cc.find("wenzi/type", showNode).getComponent(cc.Sprite);
                _context2.t0 = type;
                _context2.next = 1 === _context2.t0 ? 11 : 2 === _context2.t0 ? 13 : 3 === _context2.t0 ? 15 : 4 === _context2.t0 ? 17 : 19;
                break;

               case 11:
                typeSprite.spriteFrame = cc.vv.gameData.GetSpriteFrameByName("Common-Puss_MiniGame_5");
                return _context2.abrupt("break", 19);

               case 13:
                typeSprite.spriteFrame = cc.vv.gameData.GetSpriteFrameByName("Common-Puss_MiniGame_6");
                return _context2.abrupt("break", 19);

               case 15:
                typeSprite.spriteFrame = cc.vv.gameData.GetSpriteFrameByName("Common-Puss_MiniGame_4");
                return _context2.abrupt("break", 19);

               case 17:
                typeSprite.spriteFrame = cc.vv.gameData.GetSpriteFrameByName("Common-Puss_MiniGame_3");
                return _context2.abrupt("break", 19);

               case 19:
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  var startBtn = cc.find("startBtn", showNode);
                  startBtn.getComponent(cc.Button).interactable = true;
                  startBtn.off("click");
                  startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        startBtn.getComponent(cc.Button).interactable = false;
                        _context.next = 3;
                        return _this3.awaitTime(.2);

                       case 3:
                        cc.tween(showNode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          showNode.active = false;
                          _this3.hideWin(function() {
                            success();
                          });
                        }).start();

                       case 4:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  })));
                }).start();

               case 20:
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
      showFreeGameWinCoin: function showFreeGameWinCoin(coinNum, times) {
        var _this4 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var showNode, timesNum, coin;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                _this4.showWin();
                showNode = cc.find("show_freeGame_winCoin", _this4.node);
                showNode.active = true;
                showNode.scale = 0;
                timesNum = cc.find("freeTime", showNode);
                timesNum.getComponent(cc.Label).string = times;
                coin = cc.find("coinBg/num", showNode);
                _this4._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * coinNum), coinNum, 1, function() {
                  _this4._startAddCoin = false;
                }, null, 0, true);
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  var collectBtn = cc.find("collectBtn", showNode);
                  collectBtn.getComponent(cc.Button).interactable = true;
                  collectBtn.off("click");
                  collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                    var winCoinLabel;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                       case 0:
                        collectBtn.getComponent(cc.Button).interactable = false;
                        if (_this4._startAddCoin) {
                          _this4._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(coinNum);
                        }
                        _context3.next = 4;
                        return _this4.awaitTime(.2);

                       case 4:
                        cc.tween(showNode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          showNode.active = false;
                          _this4.hideWin(function() {
                            success();
                          });
                        }).start();

                       case 5:
                       case "end":
                        return _context3.stop();
                      }
                    }, _callee3);
                  })));
                }).start();

               case 10:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x3, _x4) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      showFreeGameTimes: function showFreeGameTimes() {
        var _this5 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
            var showNode, cfg, bg1Btn, bg2Btn, grayMask1, grayMask2;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_ChooseView);
                _this5._showFreeGameSuccess = success;
                _this5.showWin();
                showNode = cc.find("show_freeGameTimes", _this5.node);
                showNode.active = true;
                showNode.scale = 0;
                cfg = cc.vv.gameData.getGameCfg();
                bg1Btn = cc.find("bg1", showNode);
                bg2Btn = cc.find("bg2", showNode);
                grayMask1 = cc.find("grayMask1", showNode);
                grayMask1.active = false;
                grayMask2 = cc.find("grayMask2", showNode);
                grayMask2.active = false;
                cc.find("bg1/select", showNode).active = false;
                cc.find("bg2/select", showNode).active = false;
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  bg1Btn.getComponent(cc.Button).interactable = true;
                  bg1Btn.off("click");
                  bg1Btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    var req;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        bg1Btn.getComponent(cc.Button).interactable = false;
                        cc.find("bg1/select", showNode).active = true;
                        grayMask2.active = true;
                        req = {
                          c: MsgId.SLOT_SUBGAME_DATA
                        };
                        req.uid = Global.playerData.uid;
                        req.gameid = cc.vv.gameData._gameId;
                        req.data = {};
                        req.data.rtype = 2;
                        req.data.choiceId = 2;
                        cc.vv.NetManager.send(req);
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_ChooseView_Click);

                       case 11:
                       case "end":
                        return _context5.stop();
                      }
                    }, _callee5);
                  })));
                  bg2Btn.getComponent(cc.Button).interactable = true;
                  bg2Btn.off("click");
                  bg2Btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                    var req;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                       case 0:
                        bg2Btn.getComponent(cc.Button).interactable = false;
                        cc.find("bg2/select", showNode).active = true;
                        grayMask1.active = true;
                        req = {
                          c: MsgId.SLOT_SUBGAME_DATA
                        };
                        req.uid = Global.playerData.uid;
                        req.gameid = cc.vv.gameData._gameId;
                        req.data = {};
                        req.data.rtype = 2;
                        req.data.choiceId = 1;
                        cc.vv.NetManager.send(req);
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_ChooseView_Click);

                       case 11:
                       case "end":
                        return _context6.stop();
                      }
                    }, _callee6);
                  })));
                }).start();

               case 16:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x5, _x6) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      hideFreeGameTimes: function hideFreeGameTimes() {
        var _this6 = this;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_ChooseView_Over);
        var showNode = cc.find("show_freeGameTimes", this.node);
        cc.tween(showNode).to(.5, {
          scale: 0
        }, {
          easing: "backIn"
        }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              showNode.active = false;
              _this6.hideWin(function() {
                if (_this6._showFreeGameSuccess) {
                  _this6._showFreeGameSuccess();
                  _this6._showFreeGameSuccess = null;
                }
              });

             case 2:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))).start();
      },
      showLockSpinFeature: function showLockSpinFeature() {
        var _this7 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
            var showNode;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_fsView);
                _this7.showWin();
                showNode = cc.find("show_LockSpinFeature", _this7.node);
                showNode.active = true;
                showNode.scale = 0;
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  var startBtn = cc.find("startBtn", showNode);
                  startBtn.getComponent(cc.Button).interactable = true;
                  startBtn.off("click");
                  startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                       case 0:
                        startBtn.getComponent(cc.Button).interactable = false;
                        _context9.next = 3;
                        return _this7.awaitTime(.2);

                       case 3:
                        cc.tween(showNode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          showNode.active = false;
                          _this7.hideWin(function() {
                            success();
                          });
                        }).start();

                       case 4:
                       case "end":
                        return _context9.stop();
                      }
                    }, _callee9);
                  })));
                }).start();

               case 6:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x7, _x8) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      showJackpotWinCoin: function showJackpotWinCoin(coinNum, type) {
        var _this8 = this;
        return new Promise(function() {
          var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
            var showNode, coin;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_ShowJackPot);
                _this8.showWin();
                showNode = cc.find("show_win_jackpot", _this8.node);
                showNode.active = true;
                showNode.scale = 0;
                coin = cc.find("coinBg/num", showNode);
                _this8._startAddCoin = true;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_ShowJackPot_Coins_jump);
                Global.doRoallNumEff(coin, Math.floor(.1 * coinNum), coinNum, 2, function() {
                  _this8._startAddCoin = false;
                }, null, 0, true);
                _context12.t0 = type;
                _context12.next = 2 === _context12.t0 ? 12 : 3 === _context12.t0 ? 16 : 4 === _context12.t0 ? 20 : 24;
                break;

               case 12:
                cc.find("major", showNode).active = false;
                cc.find("minor", showNode).active = true;
                cc.find("grand", showNode).active = false;
                return _context12.abrupt("break", 24);

               case 16:
                cc.find("major", showNode).active = true;
                cc.find("minor", showNode).active = false;
                cc.find("grand", showNode).active = false;
                return _context12.abrupt("break", 24);

               case 20:
                cc.find("major", showNode).active = false;
                cc.find("minor", showNode).active = false;
                cc.find("grand", showNode).active = true;
                return _context12.abrupt("break", 24);

               case 24:
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  var collectBtn = cc.find("collectBtn", showNode);
                  collectBtn.getComponent(cc.Button).interactable = true;
                  collectBtn.off("click");
                  collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                    var winCoinLabel;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) switch (_context11.prev = _context11.next) {
                       case 0:
                        collectBtn.getComponent(cc.Button).interactable = false;
                        if (_this8._startAddCoin) {
                          _this8._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(coinNum);
                        }
                        _context11.next = 4;
                        return _this8.awaitTime(.2);

                       case 4:
                        cc.tween(showNode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          showNode.active = false;
                          _this8.hideWin(function() {
                            success();
                          });
                        }).start();

                       case 5:
                       case "end":
                        return _context11.stop();
                      }
                    }, _callee11);
                  })));
                }).start();

               case 25:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x9, _x10) {
            return _ref11.apply(this, arguments);
          };
        }());
      },
      showBonusGameWinCoin: function showBonusGameWinCoin(coinNum) {
        var _this9 = this;
        return new Promise(function() {
          var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success, failed) {
            var showNode, coin;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Respin_OverView);
                _this9.showWin();
                showNode = cc.find("show_bonusGame_winCoin", _this9.node);
                showNode.active = true;
                showNode.scale = 0;
                coin = cc.find("coinBg/num", showNode);
                _this9._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * coinNum), coinNum, 1, function() {
                  _this9._startAddCoin = false;
                }, null, 0, true);
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  var collectBtn = cc.find("collectBtn", showNode);
                  collectBtn.getComponent(cc.Button).interactable = true;
                  collectBtn.off("click");
                  collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                    var winCoinLabel;
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                      while (1) switch (_context13.prev = _context13.next) {
                       case 0:
                        collectBtn.getComponent(cc.Button).interactable = false;
                        if (_this9._startAddCoin) {
                          _this9._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(coinNum);
                        }
                        _context13.next = 4;
                        return _this9.awaitTime(.2);

                       case 4:
                        cc.tween(showNode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          showNode.active = false;
                          _this9.hideWin(function() {
                            success();
                          });
                        }).start();

                       case 5:
                       case "end":
                        return _context13.stop();
                      }
                    }, _callee13);
                  })));
                }).start();

               case 9:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x11, _x12) {
            return _ref13.apply(this, arguments);
          };
        }());
      },
      show777Start: function show777Start() {
        var _this10 = this;
        return new Promise(function() {
          var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success, failed) {
            var showNode;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                _this10.showWin();
                showNode = cc.find("show_777start", _this10.node);
                showNode.active = true;
                showNode.scale = 0;
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  var startBtn = cc.find("startBtn", showNode);
                  startBtn.getComponent(cc.Button).interactable = true;
                  startBtn.off("click");
                  startBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                    return regeneratorRuntime.wrap(function _callee15$(_context15) {
                      while (1) switch (_context15.prev = _context15.next) {
                       case 0:
                        startBtn.getComponent(cc.Button).interactable = false;
                        _context15.next = 3;
                        return _this10.awaitTime(.2);

                       case 3:
                        cc.tween(showNode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          showNode.active = false;
                          _this10.hideWin(function() {
                            success();
                          });
                        }).start();

                       case 4:
                       case "end":
                        return _context15.stop();
                      }
                    }, _callee15);
                  })));
                }).start();

               case 5:
               case "end":
                return _context16.stop();
              }
            }, _callee16);
          }));
          return function(_x13, _x14) {
            return _ref15.apply(this, arguments);
          };
        }());
      },
      show777WinCoin: function show777WinCoin(coinNum) {
        var _this11 = this;
        return new Promise(function() {
          var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success, failed) {
            var showNode, coin;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
               case 0:
                _this11.showWin();
                showNode = cc.find("show_777_winCoin", _this11.node);
                showNode.active = true;
                showNode.scale = 0;
                coin = cc.find("coinBg/num", showNode);
                _this11._startAddCoin = true;
                Global.doRoallNumEff(coin, Math.floor(.1 * coinNum), coinNum, 1, function() {
                  _this11._startAddCoin = false;
                }, null, 0, true);
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  var collectBtn = cc.find("collectBtn", showNode);
                  collectBtn.getComponent(cc.Button).interactable = true;
                  collectBtn.off("click");
                  collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                    var winCoinLabel;
                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                      while (1) switch (_context17.prev = _context17.next) {
                       case 0:
                        collectBtn.getComponent(cc.Button).interactable = false;
                        if (_this11._startAddCoin) {
                          _this11._startAddCoin = false;
                          coin.stopAllActions();
                          winCoinLabel = coin.getComponent(cc.Label);
                          winCoinLabel.string = Global.FormatNumToComma(coinNum);
                        }
                        _context17.next = 4;
                        return _this11.awaitTime(.2);

                       case 4:
                        cc.tween(showNode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          showNode.active = false;
                          _this11.hideWin(function() {
                            success();
                          });
                        }).start();

                       case 5:
                       case "end":
                        return _context17.stop();
                      }
                    }, _callee17);
                  })));
                }).start();

               case 8:
               case "end":
                return _context18.stop();
              }
            }, _callee18);
          }));
          return function(_x15, _x16) {
            return _ref17.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  CaoCao_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "deb24DuKdxHgpHawWtDttlW", "CaoCao_PrizePool");
    "use strict";
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand", "MAXI" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {
        _lastLockJackpot: 0
      },
      start: function start() {
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  CaoCao_Slotsbonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d6aex4PrJJIa3GUZjlV37h", "CaoCao_Slotsbonus");
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
    var minorIdx = [ 13, 18, 23, 28, 33 ];
    var majorIdx = [ 9, 14, 19, 24, 29, 34 ];
    var grandIdx = [ 5, 10, 15, 20, 25, 30, 35 ];
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _canShowStop: false,
        _reelNodes: [],
        _moveIdxList: [],
        _spinTimes: [],
        _bonusGameSuccess: null,
        _spinTimesNum: 3,
        _jackpotTitleWin: [],
        _jackpotKuangWin: [],
        _prizePool: null,
        _initMoveIdxList: []
      },
      onLoad: function onLoad() {
        this._super();
        this._prizePool = cc.find("LMSlots_PrizePool_1", this.node.parent).getComponent("LMSlots_PrizePool_Base");
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 5;
        this._row = 7;
        for (var i = 0; i < this._col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          this._reelNodes.push(node);
        }
        this.createReels(this._col, this._row);
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        this.ReconnectShow();
        for (var _i = 0; _i < 3; _i++) {
          this._spinTimes.push(cc.find("spinTimesBg/text" + (_i + 1), this.node));
          2 !== _i && (this._spinTimes[_i].color = this._cfg.grayColor);
        }
        for (var _i2 = 2; _i2 < this._reelNodes.length; _i2++) {
          var title = cc.find("roof/win", this._reelNodes[_i2]);
          this._jackpotTitleWin.push(title);
          var kuang = cc.find("jackpotKuang", this._reelNodes[_i2]);
          this._jackpotKuangWin.push(kuang);
        }
      },
      createReels: function createReels(col, row) {
        var reelCmp = "CaoCao_reelbonus";
        this._moveIdxList = [];
        for (var i = 0; i < 3; i++) {
          var reel = cc.find("mask/holder/reel" + (i + 1), this._reelNodes[0]);
          var scp = reel.addComponent(reelCmp);
          scp.Init(20 + (2 - i) * col, 1, this._topAniNode);
          this._reels[20 + (2 - i) * col] = scp;
          this._moveIdxList.push(21 + (2 - i) * col);
        }
        for (var _i3 = 0; _i3 < 4; _i3++) {
          var _reel = cc.find("mask/holder/reel" + (_i3 + 1), this._reelNodes[1]);
          var _scp = _reel.addComponent(reelCmp);
          _scp.Init(16 + (3 - _i3) * col, 1, this._topAniNode);
          this._reels[16 + (3 - _i3) * col] = _scp;
          this._moveIdxList.push(17 + (3 - _i3) * col);
        }
        for (var _i4 = 0; _i4 < 5; _i4++) {
          var _reel2 = cc.find("mask/holder/reel" + (_i4 + 1), this._reelNodes[2]);
          var _scp2 = _reel2.addComponent(reelCmp);
          _scp2.Init(12 + (4 - _i4) * col, 1, this._topAniNode);
          this._reels[12 + (4 - _i4) * col] = _scp2;
          this._moveIdxList.push(13 + (4 - _i4) * col);
        }
        for (var _i5 = 0; _i5 < 6; _i5++) {
          var _reel3 = cc.find("mask/holder/reel" + (_i5 + 1), this._reelNodes[3]);
          var _scp3 = _reel3.addComponent(reelCmp);
          _scp3.Init(8 + (5 - _i5) * col, 1, this._topAniNode);
          this._reels[8 + (5 - _i5) * col] = _scp3;
          this._moveIdxList.push(9 + (5 - _i5) * col);
        }
        for (var _i6 = 0; _i6 < 7; _i6++) {
          var _reel4 = cc.find("mask/holder/reel" + (_i6 + 1), this._reelNodes[4]);
          var _scp4 = _reel4.addComponent(reelCmp);
          _scp4.Init(4 + (6 - _i6) * col, 1, this._topAniNode);
          this._reels[4 + (6 - _i6) * col] = _scp4;
          this._moveIdxList.push(5 + (6 - _i6) * col);
        }
        this._initMoveIdxList = Global.copy(this._moveIdxList);
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      StartMove: function StartMove() {
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        this.unschedule(this.StartMove);
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        this.setSpinTime(this._spinTimesNum - 1);
        this._stopTime = this.GetStopTime();
        this._canShowStop = false;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 3;
        cc.vv.NetManager.send(req);
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        this.unschedule(this.StartMove);
        this._stopTime = -1;
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          if (item) {
            var reelStopInterv = 0;
            item.StopMove(reelStopInterv);
            item.StopMoveRightNow();
          }
        }
      },
      MoveReels: function MoveReels(arry) {
        var _this2 = this;
        this.moveReelLastIdx = 0;
        var sortArray = function sortArray(a, b) {
          var acol = (a - 1) % _this2._col;
          var bcol = (b - 1) % _this2._col;
          return acol == bcol ? a - b : acol - bcol;
        };
        this._moveIdxList.sort(sortArray);
        for (var i = 0; i < this._moveIdxList.length; i++) {
          var idx = this._moveIdxList[i] - 1;
          var reel = arry[idx];
          if (reel) {
            reel.StartMove();
            this.moveReelLastIdx = idx;
          }
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3._gameInfo = msg;
              _this3.SetSlotsResult(msg.result.idxs, msg.result.items);
              _this3._canShowStop = true;

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
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
      OnSpinEnd: function OnSpinEnd() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var jackpotId;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              _this5.setSpinTime(_this5._gameInfo.bonusGame.spinCnt);
              jackpotId = _this5.getJackPotId();
              jackpotId && _this5.setJackpotWinEffect(jackpotId);
              if (!_this5._gameInfo.bonusGame.isEnd) {
                _context3.next = 13;
                break;
              }
              _context3.next = 7;
              return _this5.ShowResult(_this5._gameInfo.bonusGame.bonusIdxs, _this5._gameInfo.bonusGame.bonusItems);

             case 7:
              cc.vv.gameData.getManage().changeNormalSlots();
              _context3.next = 10;
              return _this5.ShowWinCoin(_this5._gameInfo.bonusGame.winCoin, _this5._gameInfo.bonusGame.winCoin, true);

             case 10:
              _this5.exitBonusGame();
              _context3.next = 15;
              break;

             case 13:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("bounsGame");
              _this5.autoSpin();

             case 15:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      Backup: function Backup() {
        this._super();
      },
      Resume: function Resume() {
        this.clearSlots();
        this._super();
      },
      clearSlots: function clearSlots() {
        for (var i in this._reels) {
          var reel = this._reels[i];
          if (reel) for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.setAnimationToTop(false);
            symbol.ShowKuang(false);
          }
        }
      },
      CanStopSlot: function CanStopSlot() {
        return this._canShowStop;
      },
      showAnimation: function showAnimation() {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Reel_up);
        for (var i = 0; i < this._reelNodes.length; i++) {
          var reel = this._reelNodes[i];
          reel.height = 312;
          cc.tween(reel).to(.2, {
            height: 312 + 104 * i
          }).start();
        }
      },
      initStartSymbol: function initStartSymbol(dataList) {
        this._moveIdxList = Global.copy(this._initMoveIdxList);
        for (var i = 0; i < dataList.length; i++) {
          var data = dataList[i];
          var symbol = this.GetSymbolByIdx(21 + i);
          symbol && symbol.ShowById(data.id, data.data);
          var symbol1 = this.GetSymbolByIdx(21 + i, 1);
          symbol1 && symbol1.ShowById(1001);
        }
        for (var reelsKey in this._reels) if (Number(reelsKey) < 20) {
          var _symbol = this.GetSymbolByIdx(Number(reelsKey) + 1);
          _symbol && _symbol.ShowById(1001);
          var _symbol2 = this.GetSymbolByIdx(Number(reelsKey) + 1, 1);
          _symbol2 && _symbol2.ShowById(1001);
        }
        for (var _i7 = 0; _i7 < this._spinTimes.length; _i7++) {
          this._spinTimes[_i7].color = this._cfg.grayColor;
          2 === _i7 && (this._spinTimes[_i7].color = this._cfg.normalColor);
        }
        this._spinTimesNum = 3;
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var row = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        var reel = this._reels[idx - 1];
        if (reel) return reel.GetSymbolByRow(row);
        return null;
      },
      setSpinTime: function setSpinTime(times) {
        if (this._spinTimesNum === times) return;
        this._spinTimesNum = times;
        if (3 === this._spinTimesNum) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Respin_rest);
          var respinLizi = cc.find("spinTimesBg/respinLizi", this.node);
          respinLizi.active = true;
          var respinLiziAni = respinLizi.getComponent(cc.Animation);
          respinLiziAni.play("respinLizi");
          respinLiziAni.on("finished", function() {
            respinLiziAni.off("finished");
            respinLizi.active = false;
          });
        }
        for (var i = 0; i < this._spinTimes.length; i++) {
          this._spinTimes[i].color = this._cfg.grayColor;
          i === times - 1 && (this._spinTimes[i].color = this._cfg.normalColor);
        }
      },
      removeMoveIdxByVal: function removeMoveIdxByVal(idx) {
        for (var i = 0; i < this._moveIdxList.length; i++) if (this._moveIdxList[i] === idx) {
          this._moveIdxList.splice(i, 1);
          break;
        }
      },
      enterBonusGame: function enterBonusGame(bonusGame, isReConnect) {
        var _this6 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var i, idx, symbol, symbol1, _i8, _idx, _symbol3, _symbol4, data, _i9, element, jackpotId;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.Puss_respinbg);
                cc.vv.gameData.getManage()._isInBonus = true;
                _this6._bonusGameSuccess = success;
                for (i = 0; i < bonusGame.bonusIdxs.length; i++) {
                  idx = bonusGame.bonusIdxs[i];
                  _this6.removeMoveIdxByVal(idx);
                  symbol = _this6.GetSymbolByIdx(idx);
                  symbol && symbol.ShowById(3, bonusGame.bonusItems[i]);
                  symbol1 = _this6.GetSymbolByIdx(idx, 1);
                  symbol1 && symbol1.ShowById(1001);
                }
                if (isReConnect) for (_i8 = 0; _i8 < _this6._moveIdxList.length; _i8++) {
                  _idx = _this6._moveIdxList[_i8];
                  _symbol3 = _this6.GetSymbolByIdx(_idx);
                  _symbol3 && _symbol3.ShowById(1001);
                  _symbol4 = _this6.GetSymbolByIdx(_idx, 1);
                  _symbol4 && _symbol4.ShowById(1001);
                }
                _this6.setSpinTime(bonusGame.spinCnt);
                data = [];
                for (_i9 = 0; _i9 < bonusGame.jackpotValues.length; _i9++) {
                  element = bonusGame.jackpotValues[_i9];
                  data.push({
                    prizeType: _i9,
                    pauseNum: element
                  });
                }
                _this6._prizePool.PausePool(data);
                jackpotId = _this6.getJackPotId();
                jackpotId && _this6.setJackpotWinEffect(jackpotId);
                _this6.autoSpin();
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("bounsGame");

               case 13:
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
      autoSpin: function autoSpin() {
        this.unschedule(this.StartMove);
        this.scheduleOnce(this.StartMove, this._cfg.autoModelDelay);
      },
      exitBonusGame: function exitBonusGame() {
        cc.vv.gameData.getManage()._isInBonus = false;
        this.hideJackpotWinEffect();
        this.clearSlots();
        this._prizePool.ResumePausePool();
        if (this._bonusGameSuccess) {
          this._bonusGameSuccess();
          this._bonusGameSuccess = null;
        }
        Global.SlotsSoundMgr.playNormalBgm(true);
      },
      SetSlotsResult: function SetSlotsResult(bonusIdxs, bonusItems) {
        for (var i = 0; i < this._moveIdxList.length; i++) {
          var idx = this._moveIdxList[i];
          this._reels[idx - 1].SetResult([ {
            sid: 1001
          } ]);
        }
        for (var _i10 = 0; _i10 < bonusIdxs.length; _i10++) {
          var _idx2 = bonusIdxs[_i10];
          this._reels[_idx2 - 1].SetResult([ {
            sid: 3,
            data: bonusItems[_i10]
          } ]);
          this.removeMoveIdxByVal(_idx2);
        }
      },
      ShowResult: function ShowResult(bonusIdxs, bonusItems) {
        var _this7 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var result, i, sortArray, _i11, ret, reel;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                result = [];
                for (i = 0; i < bonusIdxs.length; i++) result.push({
                  idx: bonusIdxs[i],
                  data: bonusItems[i]
                });
                sortArray = function sortArray(a, b) {
                  var acol = (a.idx - 1) % _this7._col;
                  var bcol = (b.idx - 1) % _this7._col;
                  return acol == bcol ? a.idx - b.idx : acol - bcol;
                };
                result.sort(sortArray);
                _this7._coin = 0;
                _context5.next = 7;
                return _this7.awaitTime(1);

               case 7:
                _i11 = 0;

               case 8:
                if (!(_i11 < result.length)) {
                  _context5.next = 22;
                  break;
                }
                ret = result[_i11];
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Bonus_EndWin);
                reel = _this7._reels[ret.idx - 1];
                reel && reel._symbols[0].playTriggerAnimation();
                _context5.next = 15;
                return _this7.awaitTime(.3);

               case 15:
                _this7._coin += ret.data.coin;
                _this7._bottomScript.SetWin(_this7._coin);
                _context5.next = 19;
                return _this7.awaitTime(.2);

               case 19:
                _i11++;
                _context5.next = 8;
                break;

               case 22:
                if (!_this7._gameInfo.bonusGame.jackpot) {
                  _context5.next = 27;
                  break;
                }
                _context5.next = 25;
                return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(_this7._gameInfo.bonusGame.jackpot.value, _this7._gameInfo.bonusGame.jackpot.id);

               case 25:
                _this7._coin += _this7._gameInfo.bonusGame.jackpot.value;
                _this7._bottomScript.SetWin(_this7._coin);

               case 27:
                _context5.next = 29;
                return cc.vv.gameData.getPopWinManage().showBonusGameWinCoin(_this7._gameInfo.bonusGame.winCoin);

               case 29:
                cc.vv.gameData.AddCoin(_this7._gameInfo.bonusGame.winCoin);
                success();

               case 31:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            this._bottomScript.ShowBtnsByState("moveing_2");
            for (var i in this._reels) {
              var item = this._reels[i];
              var col = i % this._col;
              var reelStopInterv = this.GetReelStopInter(col);
              item.StopMove(reelStopInterv);
            }
          } else {
            this._stopTime = dt;
            this._roundSpineTime = this._roundSpineTime || 0;
            this._roundSpineTime += dt;
            this._roundSpineTime > 30 && this._topScript.SetBackLobby(true);
          }
        }
      },
      setJackpotWinEffect: function setJackpotWinEffect(type) {
        if (type < 2 || type > 4) return;
        this.hideJackpotWinEffect();
        this._jackpotKuangWin[type - 2].active = true;
        this._jackpotTitleWin[type - 2].active = true;
      },
      hideJackpotWinEffect: function hideJackpotWinEffect() {
        for (var i = 0; i < this._jackpotKuangWin.length; i++) this._jackpotKuangWin[i].active = false;
        for (var _i12 = 0; _i12 < this._jackpotTitleWin.length; _i12++) this._jackpotTitleWin[_i12].active = false;
      },
      getJackPotId: function getJackPotId() {
        var minor = true;
        var major = true;
        var grand = true;
        for (var i = 0; i < this._moveIdxList.length; i++) if (minorIdx.includes(this._moveIdxList[i])) {
          minor = false;
          break;
        }
        for (var _i13 = 0; _i13 < this._moveIdxList.length; _i13++) if (majorIdx.includes(this._moveIdxList[_i13])) {
          major = false;
          break;
        }
        for (var _i14 = 0; _i14 < this._moveIdxList.length; _i14++) if (grandIdx.includes(this._moveIdxList[_i14])) {
          grand = false;
          break;
        }
        if (grand) return 4;
        if (major) return 3;
        if (minor) return 2;
        return 0;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  CaoCao_Slotsfree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff0f32KimRCzaXBw7T9SEY4", "CaoCao_Slotsfree");
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
    var paichuidx = [ 1, 2, 3, 4, 6, 7, 8, 11, 12, 16 ];
    cc.Class({
      extends: require("CaoCao_Slots"),
      properties: {
        _canShowStop: false
      },
      onLoad: function onLoad() {
        this._super();
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 5;
        this._row = 7;
        this.createReels(this._col, this._row);
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        this.ReconnectShow();
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._canShowStop = false;
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var cards, idx, i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._gameInfo = msg;
              cards = msg.resultCards;
              _this2.SetSlotsResult(cards);
              _this2.SetReelStateInfo(cards);
              idx = [];
              for (i = 0; i < cards.length; i++) 1 === cards[i] && (paichuidx.includes(i + 1) || idx.push(i + 1));
              if (!(idx.length > 0)) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return cc.vv.gameData.getManage().playWildFly(idx);

             case 9:
              _this2._canShowStop = true;

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ShowWinCoin: function ShowWinCoin(nAddWin, nTotalWin, bUpdateBalance) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this3.ShowBottomWin(nAddWin, nTotalWin, bUpdateBalance, sucess);

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
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var nWin, nTotal, isNormalGame;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              cc.vv.gameData.getManage()._collectNode.removeAllChildren();
              _this4.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              isNormalGame = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                isNormalGame = false;
              }
              _context3.next = 9;
              return _this4.ShowWinCoin(nWin, nTotal, isNormalGame);

             case 9:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context3.next = 12;
                break;
              }
              _context3.next = 12;
              return cc.vv.gameData.getManage().CheckExitFreeGame();

             case 12:
              _this4.CanDoNextRound();

             case 13:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      Backup: function Backup() {
        this._super();
      },
      Resume: function Resume() {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.setAnimationToTop(false);
            symbol.ShowKuang(false);
          }
        }
        this._super();
      },
      CanStopSlot: function CanStopSlot() {
        return this._canShowStop;
      },
      showAnimation: function showAnimation() {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Reel_up);
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          reel.node.height = 312;
          cc.tween(reel.node).to(.2, {
            height: 312 + 104 * i
          }).start();
        }
      },
      initStartSymbol: function initStartSymbol(dataList) {
        for (var i = 0; i < dataList.length; i++) {
          var data = dataList[i];
          var symbol = this.GetSymbolByIdx(21 + i);
          symbol && symbol.ShowById(data.id, data.data);
        }
        for (var _i = 1; _i < 21; _i++) {
          var _symbol = this.GetSymbolByIdx(_i);
          _symbol && _symbol.ShowInitFreeSymbol();
        }
      },
      recaveryFreeGame: function recaveryFreeGame() {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          reel.node.height = 312 + 104 * i;
        }
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (20 === cards[i]) {
            var cardmap = this._cfg.cardmapfree;
            cards[i] = cardmap[col + 1][Global.random(0, cardmap[col + 1].length - 1)];
          }
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) {
          var item = this._reels[_i2];
          var reelRes = reelResults[_i2];
          item.SetResult(reelRes);
        }
      }
    });
    cc._RF.pop();
  }, {
    CaoCao_Slots: "CaoCao_Slots"
  } ],
  CaoCao_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95cb1yJEl5IJZLRiVWM9tpb", "CaoCao_Slots");
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
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _canShowStop: false
      },
      onLoad: function onLoad() {
        this._super();
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      StartMove: function StartMove() {
        Global.SlotsSoundMgr.playNormalBgm();
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._canShowStop = false;
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var cards, idx, i, isShow;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._gameInfo = msg;
              cards = msg.resultCards;
              _this2.SetSlotsResult(cards, msg.bonusIdxs, msg.bonusItems);
              _this2.SetReelStateInfo(cards);
              if (cc.vv.gameData.getManage()._isInFree) {
                _context.next = 12;
                break;
              }
              idx = [];
              for (i = 0; i < cards.length; i++) 1 === cards[i] && idx.push(i + 1);
              if (!(idx.length > 2)) {
                _context.next = 12;
                break;
              }
              isShow = Global.random(0, 1e3);
              if (!(isShow > 800)) {
                _context.next = 12;
                break;
              }
              _context.next = 12;
              return cc.vv.gameData.getManage().playNormalWildFly(idx);

             case 12:
              _this2._canShowStop = true;

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ShowWinCoin: function ShowWinCoin(nAddWin, nTotalWin, bUpdateBalance) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this3.ShowBottomWin(nAddWin, nTotalWin, bUpdateBalance, sucess);

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
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var idx, i, nWin, nTotal, isNormalGame, _i, key, symbol, _i2, _key, _symbol;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              cc.vv.gameData.getManage()._collectNode.removeAllChildren();
              if (!_this4._gameInfo.mapInfo) {
                _context3.next = 8;
                break;
              }
              if (!(_this4._gameInfo.mapInfo.progressData.currCnt > 0)) {
                _context3.next = 8;
                break;
              }
              idx = [];
              for (i = 0; i < _this4._gameInfo.resultCards.length; i++) 3 === _this4._gameInfo.resultCards[i] && idx.push(i + 1);
              _context3.next = 8;
              return cc.vv.gameData.getManage().collectJinBi(idx, _this4._gameInfo.mapInfo.progressData.totalCnt / _this4._gameInfo.mapInfo.progressData.needCnt);

             case 8:
              _this4.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              isNormalGame = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                isNormalGame = false;
              }
              _context3.next = 15;
              return _this4.ShowWinCoin(nWin, nTotal, isNormalGame);

             case 15:
              if (!_this4._gameInfo.mapInfo) {
                _context3.next = 34;
                break;
              }
              if (!(_this4._gameInfo.mapInfo.progressData.totalCnt >= _this4._gameInfo.mapInfo.progressData.needCnt)) {
                _context3.next = 34;
                break;
              }
              _context3.t0 = _this4._gameInfo.mapInfo.state;
              _context3.next = 1 === _context3.t0 ? 20 : 2 === _context3.t0 ? 25 : 34;
              break;

             case 20:
              _context3.next = 22;
              return cc.vv.gameData.getMapControl().showTip();

             case 22:
              cc.vv.gameData.getManage().enter77(_this4._gameInfo.mapInfo.startPrice);
              cc.vv.gameData.getCollectNode().setProgress(0);
              return _context3.abrupt("return");

             case 25:
              _context3.next = 27;
              return cc.vv.gameData.getMapControl().showTip();

             case 27:
              _context3.next = 29;
              return cc.vv.gameData.getPopWinManage().showSuperFreeGame(10, _this4._cfg.MapConfig[_this4._gameInfo.mapInfo.currId].multType);

             case 29:
              cc.vv.gameData.getCollectNode().setProgress(0);
              _this4.Backup();
              _context3.next = 33;
              return cc.vv.gameData.getManage().CheckFreeEnterMapFreeGame();

             case 33:
              return _context3.abrupt("break", 34);

             case 34:
              if (!_this4._gameInfo.bonusGame) {
                _context3.next = 41;
                break;
              }
              for (_i = 0; _i < _this4._gameInfo.bonusGame.bonusIdxs.length; _i++) {
                key = _this4._gameInfo.bonusGame.bonusIdxs[_i];
                symbol = _this4.GetSymbolByIdx(Number(key) - 20);
                symbol && symbol.playWinAnimation();
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_TriggerRespin);
              _context3.next = 39;
              return _this4.awaitTime(2);

             case 39:
              _context3.next = 41;
              return cc.vv.gameData.getManage().enterBonusGame(_this4._gameInfo.bonusGame);

             case 41:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context3.next = 44;
                break;
              }
              _context3.next = 62;
              break;

             case 44:
              if (!_this4._gameInfo.extraFreeInfo) {
                _context3.next = 62;
                break;
              }
              if (!(0 === _this4._gameInfo.extraFreeInfo.state)) {
                _context3.next = 62;
                break;
              }
              for (_i2 = 0; _i2 < _this4._gameInfo.extraFreeInfo.scatterIdx.length; _i2++) {
                _key = _this4._gameInfo.extraFreeInfo.scatterIdx[_i2];
                _symbol = _this4.GetSymbolByIdx(Number(_key));
                _symbol && _symbol.playWinAnimation();
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.Puss_TriggerFreespin);
              _context3.next = 50;
              return _this4.awaitTime(2);

             case 50:
              _context3.next = 52;
              return cc.vv.gameData.getPopWinManage().showFreeGameTimes();

             case 52:
              if (!cc.vv.gameData.getManage()._showChangeFree) {
                _context3.next = 58;
                break;
              }
              cc.vv.gameData.getManage()._showChangeFree = false;
              _context3.next = 56;
              return cc.vv.gameData.getManage().changeFreeSlots();

             case 56:
              _context3.next = 62;
              break;

             case 58:
              _context3.next = 60;
              return cc.vv.gameData.getPopWinManage().showLockSpinFeature();

             case 60:
              _this4._bottomScript.OnClickSpin();
              return _context3.abrupt("return");

             case 62:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context3.next = 65;
                break;
              }
              _context3.next = 65;
              return cc.vv.gameData.getManage().CheckExitFreeGame();

             case 65:
              _this4.CanDoNextRound();

             case 66:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      Backup: function Backup() {
        this._super();
      },
      Resume: function Resume() {
        this.clearSlots();
        this._super();
      },
      clearSlots: function clearSlots() {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) {
            var symbol = reel._symbols[j];
            symbol.setAnimationToTop(false);
            symbol.stopWinTweenAction();
            symbol.ShowKuang(false);
          }
        }
      },
      CanStopSlot: function CanStopSlot() {
        return this._canShowStop;
      },
      getSymbolData: function getSymbolData() {
        var ret = [];
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length - 1; j++) {
            var symbol = reel._symbols[j];
            ret[i + (reel._symbols.length - 2 - j) * this._col] = {
              id: symbol._id,
              data: symbol._data
            };
          }
        }
        return ret;
      },
      SetSlotsResult: function SetSlotsResult(cards, bonusIdxs, bonusItems) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            if (cc.vv.gameData.getMapControl().getIsMapFree() && 2 === col) switch (this._gameInfo.mapInfo.freeInfo.wildMult) {
             case 2:
              res.sid = 101;
              break;

             case 3:
              res.sid = 102;
              break;

             case 5:
              res.sid = 103;
              break;

             case 8:
              res.sid = 104;
              break;

             case 10:
              res.sid = 105;
              break;

             case 25:
              res.sid = 106;
              break;

             case 100:
              res.sid = 107;
            }
            if (bonusIdxs) for (var j = 0; j < bonusIdxs.length; j++) if (i + 1 === bonusIdxs[j]) {
              res.data = bonusItems[j];
              break;
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i3 = 0; _i3 < this._reels.length; _i3++) {
          var item = this._reels[_i3];
          var reelRes = reelResults[_i3];
          item.SetResult(reelRes);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  CaoCao_collectNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55b7dPzeMhL5LY5p8v9gLNB", "CaoCao_collectNode");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _rightBtn: null,
        _jindu: null,
        _jinbi: null,
        _lockbet: null,
        _lockbetNum: 0
      },
      onLoad: function onLoad() {
        this._rightBtn = cc.find("right", this.node);
        this._rightBtn.on("click", this.openMap, this);
        this._jindu = cc.find("pro/jindu", this.node);
        this._jinbi = cc.find("jibi", this.node);
        this._lockbet = cc.find("lockbet", this.node);
        this._lockbet.on("click", this.clickLock, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      start: function start() {},
      init: function init(lockbetNum, progress) {
        this._lockbetNum = lockbetNum;
        var curmult = cc.vv.gameData.GetBetIdx();
        if (curmult < lockbetNum) {
          this._lockbet.active = true;
          this._lockbet.opacity = 255;
          this._lockbet.getComponent(cc.Button).interactable = true;
        } else this._lockbet.active = false;
        this.setProgress(progress);
      },
      openMap: function openMap() {
        if (cc.vv.gameData.getManage()._isInFree) return;
        if ("idle" != cc.vv.gameData.GetSlotState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        this._rightBtn.getComponent(cc.Button).interactable = false;
        cc.vv.gameData.getMapControl().show();
        this._rightBtn.getComponent(cc.Button).interactable = true;
      },
      clickLock: function clickLock() {
        if (cc.vv.gameData.getManage()._isInFree) return;
        if ("idle" != cc.vv.gameData.GetSlotState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Click_Collect);
        if (this._lockbetNum <= cc.vv.gameData._deskInfo.mults.length) {
          this._lockbet.getComponent(cc.Button).interactable = false;
          var bottom = cc.vv.gameData.GetBottomScript();
          bottom.SetBetIdx(this._lockbetNum);
        }
      },
      updateLockState: function updateLockState() {
        var _this = this;
        var curmult = cc.vv.gameData.GetBetIdx();
        if (curmult < this._lockbetNum) {
          this._lockbet.active = true;
          this._lockbet.opacity = 0;
          cc.tween(this._lockbet).to(.5, {
            opacity: 255
          }).call(function() {
            _this._lockbet.getComponent(cc.Button).interactable = true;
          }).start();
        } else {
          this._lockbet.active = false;
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_unLock_Bet);
        }
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(data) {
        this.updateLockState();
      },
      setProgress: function setProgress(progress) {
        progress < 0 && (progress = 0);
        progress > 1 && (progress = 1);
        this._jindu.x = progress * this._jindu.width;
      },
      updateProgress: function updateProgress(progress) {
        progress < 0 && (progress = 0);
        progress > 1 && (progress = 1);
        var destX = progress * this._jindu.width;
        var jindutiaoSG = cc.find("jindutiaoSG", this._jindu);
        jindutiaoSG.active = true;
        var jindutiaoSGAni = jindutiaoSG.getComponent(cc.Animation);
        jindutiaoSGAni.play("jindutiaoSG");
        jindutiaoSGAni.on("finished", function() {
          jindutiaoSGAni.off("finished");
          jindutiaoSG.active = false;
        });
        cc.tween(this._jindu).to(.88, {
          x: destX
        }).start();
      },
      getJinBiWorldPos: function getJinBiWorldPos() {
        return this._jinbi.convertToWorldSpaceAR(cc.v2(0, 0));
      },
      showJinBiCollectEffect: function showJinBiCollectEffect() {
        var bonusShouJi = cc.find("bonusShouJi", this._jinbi);
        bonusShouJi.active = true;
        var bonusShouJiAni = bonusShouJi.getComponent(cc.Animation);
        bonusShouJiAni.play("bonusShouJi");
        bonusShouJiAni.on("finished", function() {
          bonusShouJiAni.off("finished");
          bonusShouJi.active = false;
        });
        cc.tween(this._jinbi).to(.45, {
          scale: 1.2
        }, {
          easing: "quadOut"
        }).to(.45, {
          scale: 1
        }, {
          easing: "quadIn"
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ],
  CaoCao_manage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25b53nCm/ZNUZim+yNUTMsc", "CaoCao_manage");
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
    var normalPoolPos = [ cc.v2(192, 50), cc.v2(-192, 50), cc.v2(0, 150) ];
    var freePoolPos = [ cc.v2(-192, -34), cc.v2(-192, 50), cc.v2(-104, 150) ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _isInFree: false,
        _isInBonus: false,
        _isMapFree: false,
        _logo: null,
        _freeLogo: null,
        _collectNode: null,
        _liziStartPos: null,
        _bezierEndPos: null,
        _showChangeFree: false,
        _cfg: null,
        _poolList: []
      },
      onLoad: function onLoad() {
        this._logo = cc.find("caocao", this.node);
        this._collectNode = cc.find("collectNode", this.node);
        this._liziStartPos = cc.find("liziStartPos", this.node);
        this._bezierEndPos = cc.find("bezierEndPos", this.node);
        this._cfg = cc.vv.gameData.getGameCfg();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, this);
        var minor = cc.find("LMSlots_PrizePool_1/prizePool_Minor", this.node);
        this._poolList.push(minor);
        var major = cc.find("LMSlots_PrizePool_1/prizePool_Major", this.node);
        this._poolList.push(major);
        var grand = cc.find("LMSlots_PrizePool_1/prizePool_Grand", this.node);
        this._poolList.push(grand);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, false, this);
      },
      start: function start() {
        this.ReconnectShow();
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onRecvClickQiQiu: function onRecvClickQiQiu(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(200 === msg.code)) {
                _context.next = 9;
                break;
              }
              if (!(2 === msg.data.rtype)) {
                _context.next = 8;
                break;
              }
              if (msg.data.result.freeCnt) {
                _this2._showChangeFree = true;
                cc.vv.gameData.AddTotalFreeTime(msg.data.result.freeCnt);
              }
              _context.next = 5;
              return _this2.awaitTime(2);

             case 5:
              cc.vv.gameData.getPopWinManage().hideFreeGameTimes();
              _context.next = 9;
              break;

             case 8:
              3 === msg.data.rtype && cc.vv.gameData.GetBonusSlotsScript().onMsgSpine(msg.data);

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._isInFree && !cc.vv.gameData.getMapControl().getIsMapFree() ? cc.vv.gameData.GetFreeSlotsScript().onMsgSpine(msg) : this._isInBonus ? cc.vv.gameData.GetBonusSlotsScript().onMsgSpine(msg) : cc.vv.gameData.GetSlotsScript().onMsgSpine(msg);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._isInFree && !cc.vv.gameData.getMapControl().getIsMapFree() ? cc.vv.gameData.GetFreeSlotsScript().OnSpinEnd() : _this3._isInBonus ? cc.vv.gameData.GetBonusSlotsScript().OnSpinEnd() : cc.vv.gameData.GetSlotsScript().OnSpinEnd();

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
                  var nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      _context3.next = 4;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(nWin, cc.vv.gameData.GetTotalFree());

                     case 4:
                      _this4.changeNormalSlots();
                      cc.vv.gameData.SetTotalFree(0);
                      _context3.next = 8;
                      return cc.vv.gameData.GetSlotsScript().ShowWinCoin(nWin, nTotal, true);

                     case 8:
                      Global.SlotsSoundMgr.playNormalBgm(true);
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
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      CheckFreeEnterFreeGame: function CheckFreeEnterFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      _context5.next = 2;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinFree();

                     case 2:
                      _context5.next = 4;
                      return _this5.awaitTime(1);

                     case 4:
                      sucess();

                     case 5:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      _context7.next = 2;
                      return _this6.changeSlotsFree();

                     case 2:
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.Puss_freespinbg);
                      sucess();

                     case 4:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      CheckFreeEnterMapFreeGame: function CheckFreeEnterMapFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.Puss_freespinbg);
                      _this7.ShowGameview(true);
                      _this7.ShowFreeTimes(true);
                      cc.vv.gameData.GetBottomScript().showTotalBet(false);
                      _context9.next = 6;
                      return _this7.awaitTime(1);

                     case 6:
                      sucess();

                     case 7:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var rest;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this8.ShowGameview(true);
                _this8.ShowFreeTimes(true);
                if (cc.vv.gameData.getMapControl().getIsMapFree()) cc.vv.gameData.GetBottomScript().showTotalBet(false); else {
                  cc.vv.gameData.GetFreeSlotsScript().recaveryFreeGame();
                  _this8._logo.active = false;
                  _this8.changePoolFree();
                }
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.Puss_freespinbg);
              } else {
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_enter);
                _this8.ShowGameview(false);
                _this8.ShowFreeTimes(false);
                _this8.changePoolNormal();
              }
              cc.vv.gameData.getCollectNode().init(cc.vv.gameData._deskInfo.needBet, cc.vv.gameData._deskInfo.mapInfo.progressData.totalCnt / cc.vv.gameData._deskInfo.mapInfo.progressData.needCnt);
              if (!cc.vv.gameData._deskInfo.mapInfo) {
                _context11.next = 14;
                break;
              }
              if (!(cc.vv.gameData._deskInfo.mapInfo.state > 0)) {
                _context11.next = 14;
                break;
              }
              _context11.t0 = cc.vv.gameData._deskInfo.mapInfo.state;
              _context11.next = 1 === _context11.t0 ? 9 : 2 === _context11.t0 ? 12 : 14;
              break;

             case 9:
              _this8.enter77(cc.vv.gameData._deskInfo.mapInfo.startPrice);
              cc.vv.gameData.getCollectNode().setProgress(0);
              return _context11.abrupt("return");

             case 12:
              cc.vv.gameData.getCollectNode().setProgress(0);
              return _context11.abrupt("break", 14);

             case 14:
              if (!cc.vv.gameData._deskInfo.bonusGame) {
                _context11.next = 19;
                break;
              }
              _this8._logo.active = false;
              _this8.changePoolFree();
              _context11.next = 19;
              return _this8.recoveryBonusGame(cc.vv.gameData._deskInfo.bonusGame);

             case 19:
              if (!cc.vv.gameData._deskInfo.extraFreeInfo) {
                _context11.next = 27;
                break;
              }
              if (!(0 === cc.vv.gameData._deskInfo.extraFreeInfo.state)) {
                _context11.next = 27;
                break;
              }
              _context11.next = 23;
              return cc.vv.gameData.getPopWinManage().showFreeGameTimes();

             case 23:
              if (!_this8._showChangeFree) {
                _context11.next = 27;
                break;
              }
              _this8._showChangeFree = false;
              _context11.next = 27;
              return _this8.changeFreeSlots();

             case 27:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 28:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._isInFree = bFree;
        if (bFree) {
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          cc.vv.gameData.GetBottomScript().SetWin(nTotal);
          if (cc.vv.gameData.getMapControl().getIsMapFree()) {
            cc.vv.gameData.GetFreeSlotsScript().node.active = false;
            cc.vv.gameData.GetSlotsScript().node.active = true;
            cc.vv.gameData.GetBonusSlotsScript().node.active = false;
          } else {
            cc.vv.gameData.GetFreeSlotsScript().node.active = true;
            cc.vv.gameData.GetSlotsScript().node.active = false;
            cc.vv.gameData.GetBonusSlotsScript().node.active = false;
          }
        } else {
          cc.vv.gameData.GetFreeSlotsScript().node.active = false;
          cc.vv.gameData.GetSlotsScript().node.active = true;
          cc.vv.gameData.GetBonusSlotsScript().node.active = false;
        }
      },
      ShowFreeTimes: function ShowFreeTimes(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          cc.vv.gameData.GetBottomScript().ShowFreeModel(true, total - rest, total);
        } else cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
      },
      enterBonusGame: function enterBonusGame(data) {
        var _this9 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                _context12.next = 2;
                return _this9.changeBonusSlots();

               case 2:
                _context12.next = 4;
                return _this9.awaitTime(.5);

               case 4:
                _context12.next = 6;
                return cc.vv.gameData.GetBonusSlotsScript().enterBonusGame(data);

               case 6:
                success();

               case 7:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      recoveryBonusGame: function recoveryBonusGame(data) {
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success, failed) {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                cc.vv.gameData.GetFreeSlotsScript().node.active = false;
                cc.vv.gameData.GetSlotsScript().node.active = false;
                cc.vv.gameData.GetBonusSlotsScript().node.active = true;
                _context13.next = 5;
                return cc.vv.gameData.GetBonusSlotsScript().enterBonusGame(data, true);

               case 5:
                success();

               case 6:
               case "end":
                return _context13.stop();
              }
            }, _callee13);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      changeFreeSlots: function changeFreeSlots() {
        var _this10 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success, failed) {
            var tempNodeSp, symboldata;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                _this10._logo.active = false;
                if (!_this10._freeLogo) {
                  _this10._freeLogo = cc.instantiate(_this10._logo);
                  _this10._freeLogo.parent = _this10._logo.parent;
                }
                _this10._freeLogo.position = _this10._logo.position;
                _this10._freeLogo.active = true;
                tempNodeSp = _this10._freeLogo.getComponent(sp.Skeleton);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Cat_Down_And_HuiJina);
                tempNodeSp.setAnimation(0, "skill", false);
                tempNodeSp.setCompleteListener(function() {
                  _this10._freeLogo.active = false;
                  tempNodeSp.setCompleteListener(null);
                  success();
                });
                symboldata = cc.vv.gameData.GetSlotsScript().getSymbolData();
                cc.vv.gameData.GetFreeSlotsScript().initStartSymbol(symboldata);
                _context14.next = 12;
                return _this10.awaitTime(.8);

               case 12:
                _this10.ShowGameview(true);
                _this10.ShowFreeTimes(true);
                cc.vv.gameData.GetFreeSlotsScript().showAnimation();
                _this10.changePoolFree();

               case 16:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x13, _x14) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      changeNormalSlots: function changeNormalSlots() {
        this._logo.active = true;
        if (cc.vv.gameData.getMapControl().getIsMapFree()) {
          cc.vv.gameData.GetSlotsScript().Resume();
          cc.vv.gameData.GetBottomScript().showTotalBet(true);
        } else {
          var tempNodeSp = this._logo.getComponent(sp.Skeleton);
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Cat_Back);
          tempNodeSp.setAnimation(0, "idle", true);
        }
        cc.vv.gameData.GetFreeSlotsScript().clearSlots();
        this.ShowGameview(false);
        this.ShowFreeTimes(false);
        this.changePoolNormal();
      },
      changeBonusSlots: function changeBonusSlots() {
        var _this11 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success, failed) {
            var tempNodeSp, symboldata;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
               case 0:
                _this11._logo.active = false;
                if (!_this11._freeLogo) {
                  _this11._freeLogo = cc.instantiate(_this11._logo);
                  _this11._freeLogo.parent = _this11._logo.parent;
                }
                _this11._freeLogo.position = _this11._logo.position;
                _this11._freeLogo.active = true;
                tempNodeSp = _this11._freeLogo.getComponent(sp.Skeleton);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Cat_Down_And_HuiJina);
                tempNodeSp.setAnimation(0, "skill", false);
                tempNodeSp.setCompleteListener(function() {
                  _this11._freeLogo.active = false;
                  tempNodeSp.setCompleteListener(null);
                  success();
                });
                symboldata = cc.vv.gameData.GetSlotsScript().getSymbolData();
                cc.vv.gameData.GetBonusSlotsScript().initStartSymbol(symboldata);
                _context15.next = 12;
                return _this11.awaitTime(.8);

               case 12:
                cc.vv.gameData.GetFreeSlotsScript().node.active = false;
                cc.vv.gameData.GetSlotsScript().node.active = false;
                cc.vv.gameData.GetBonusSlotsScript().node.active = true;
                cc.vv.gameData.GetBonusSlotsScript().showAnimation();
                _this11.changePoolFree();

               case 17:
               case "end":
                return _context15.stop();
              }
            }, _callee15);
          }));
          return function(_x15, _x16) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      playWildFly: function playWildFly(idxList) {
        var _this12 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success, failed) {
            var randomX, _loop, i;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Cat_Fly_to_WIld);
                randomX = [ 0, 10, -10, 20, -20 ];
                _loop = function _loop(i) {
                  var idx = idxList[i];
                  var symbol = cc.vv.gameData.GetFreeSlotsScript().GetSymbolByIdx(idx);
                  if (symbol) {
                    var reelMask = cc.vv.gameData.GetFreeSlotsScript()._reels[symbol._reelIdx].node.getChildByName("mask");
                    var position = reelMask.convertToWorldSpaceAR(cc.v2(0, 0));
                    var row = symbol._symbolIdx;
                    position.y = position.y + row * _this12._cfg.symbolSize.height + _this12._cfg.symbolSize.height / 2;
                    var endPos = _this12._collectNode.convertToNodeSpaceAR(position);
                    var lizi = cc.instantiate(cc.vv.gameData.GetPrefabByName("wildFly"));
                    lizi.parent = _this12._collectNode;
                    var liziPos = _this12._liziStartPos.convertToWorldSpaceAR(cc.v2(0, 0));
                    var startPos = _this12._collectNode.convertToNodeSpaceAR(liziPos);
                    lizi.position = startPos;
                    var bsPos = _this12._bezierEndPos.convertToWorldSpaceAR(cc.v2(randomX[Global.random(0, 4)], 0));
                    var bsEndPos = _this12._collectNode.convertToNodeSpaceAR(bsPos);
                    var q1x = startPos.x + .8 * (bsEndPos.x - startPos.x);
                    var q1y = startPos.y + .8 * (bsEndPos.y - startPos.y);
                    var dir = cc.v2(bsEndPos.x - startPos.x, bsEndPos.y - startPos.y);
                    dir.normalizeSelf();
                    var verticalDir = cc.v2(dir.y, -dir.x);
                    var q1 = cc.v2(q1x + 600 * verticalDir.x, q1y + 600 * verticalDir.y);
                    var q2x = startPos.x + 2 * (bsEndPos.x - startPos.x);
                    var q2y = startPos.y + 2 * (bsEndPos.y - startPos.y);
                    var q2 = cc.v2(q2x + 100 * verticalDir.x, q2y + 100 * verticalDir.y);
                    cc.tween(lizi).bezierTo(.5, q1, q2, bsEndPos, {
                      easing: "quadIn"
                    }).to(.5, {
                      position: endPos
                    }, {
                      easing: "quadIn"
                    }).call(function() {
                      lizi.parent = null;
                      var tempNode = cc.instantiate(symbol.node);
                      tempNode.getComponent(_this12._cfg.scripts.Symbols).ShowById(1);
                      tempNode.parent = _this12._collectNode;
                      tempNode.position = endPos;
                      var wild_baozha = cc.instantiate(cc.vv.gameData.GetPrefabByName("wild_baozha"));
                      wild_baozha.parent = _this12._collectNode;
                      wild_baozha.position = endPos;
                      var wild_baozhaAni = wild_baozha.getComponent(cc.Animation);
                      wild_baozhaAni.play("wild_baozha");
                      wild_baozhaAni.on("finished", function() {
                        wild_baozhaAni.off("finished");
                        wild_baozha.parent = null;
                      });
                    }).start();
                  }
                };
                for (i = 0; i < idxList.length; i++) _loop(i);
                _context16.next = 6;
                return _this12.awaitTime(1.3);

               case 6:
                success();

               case 7:
               case "end":
                return _context16.stop();
              }
            }, _callee16);
          }));
          return function(_x17, _x18) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      playNormalWildFly: function playNormalWildFly(idxList) {
        var _this13 = this;
        return new Promise(function() {
          var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(success, failed) {
            var randomX, _loop2, i;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Cat_Fly_to_WIld);
                randomX = [ 0, 10, -10, 20, -20 ];
                _loop2 = function _loop2(i) {
                  var idx = idxList[i];
                  var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                  if (symbol) {
                    var reelMask = cc.vv.gameData.GetSlotsScript()._reels[symbol._reelIdx].node.getChildByName("mask");
                    var position = reelMask.convertToWorldSpaceAR(cc.v2(0, 0));
                    var row = symbol._symbolIdx;
                    position.y = position.y + row * _this13._cfg.symbolSize.height + _this13._cfg.symbolSize.height / 2;
                    var endPos = _this13._collectNode.convertToNodeSpaceAR(position);
                    var lizi = cc.instantiate(cc.vv.gameData.GetPrefabByName("wildFly"));
                    lizi.parent = _this13._collectNode;
                    var liziPos = _this13._liziStartPos.convertToWorldSpaceAR(cc.v2(0, 0));
                    var startPos = _this13._collectNode.convertToNodeSpaceAR(liziPos);
                    lizi.position = startPos;
                    var bsPos = _this13._bezierEndPos.convertToWorldSpaceAR(cc.v2(randomX[Global.random(0, 4)], 0));
                    var bsEndPos = _this13._collectNode.convertToNodeSpaceAR(bsPos);
                    var q1x = startPos.x + .8 * (bsEndPos.x - startPos.x);
                    var q1y = startPos.y + .8 * (bsEndPos.y - startPos.y);
                    var dir = cc.v2(bsEndPos.x - startPos.x, bsEndPos.y - startPos.y);
                    dir.normalizeSelf();
                    var verticalDir = cc.v2(dir.y, -dir.x);
                    var q1 = cc.v2(q1x + 600 * verticalDir.x, q1y + 600 * verticalDir.y);
                    var q2x = startPos.x + 2 * (bsEndPos.x - startPos.x);
                    var q2y = startPos.y + 2 * (bsEndPos.y - startPos.y);
                    var q2 = cc.v2(q2x + 100 * verticalDir.x, q2y + 100 * verticalDir.y);
                    cc.tween(lizi).bezierTo(.5, q1, q2, bsEndPos, {
                      easing: "quadIn"
                    }).to(.5, {
                      position: endPos
                    }, {
                      easing: "quadIn"
                    }).call(function() {
                      lizi.parent = null;
                      var tempNode = cc.instantiate(symbol.node);
                      tempNode.getComponent(_this13._cfg.scripts.Symbols).ShowById(1);
                      tempNode.parent = _this13._collectNode;
                      tempNode.position = endPos;
                      var wild_baozha = cc.instantiate(cc.vv.gameData.GetPrefabByName("wild_baozha"));
                      wild_baozha.parent = _this13._collectNode;
                      wild_baozha.position = endPos;
                      var wild_baozhaAni = wild_baozha.getComponent(cc.Animation);
                      wild_baozhaAni.play("wild_baozha");
                      wild_baozhaAni.on("finished", function() {
                        wild_baozhaAni.off("finished");
                        wild_baozha.parent = null;
                      });
                    }).start();
                  }
                };
                for (i = 0; i < idxList.length; i++) _loop2(i);
                _context17.next = 6;
                return _this13.awaitTime(2.3);

               case 6:
                success();

               case 7:
               case "end":
                return _context17.stop();
              }
            }, _callee17);
          }));
          return function(_x19, _x20) {
            return _ref10.apply(this, arguments);
          };
        }());
      },
      collectJinBi: function collectJinBi(idxList, progress) {
        var _this14 = this;
        return new Promise(function() {
          var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success, failed) {
            var i, idx, symbol;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
               case 0:
                if (idxList) {
                  _context18.next = 3;
                  break;
                }
                success();
                return _context18.abrupt("return");

               case 3:
                if (!(0 === idxList.length)) {
                  _context18.next = 6;
                  break;
                }
                success();
                return _context18.abrupt("return");

               case 6:
                for (i = 0; i < idxList.length; i++) {
                  idx = idxList[i];
                  symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                  symbol && function() {
                    var moveNode = cc.instantiate(cc.vv.gameData.GetPrefabByName("LMSlots_Symbol"));
                    moveNode.parent = _this14._collectNode;
                    cc.find("s13", moveNode).active = true;
                    cc.find("coinNum", moveNode).active = false;
                    var symbolPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    var startPos = _this14._collectNode.convertToNodeSpaceAR(symbolPos);
                    moveNode.position = startPos;
                    var jinbiPos = cc.vv.gameData.getCollectNode().getJinBiWorldPos();
                    var endPos = _this14._collectNode.convertToNodeSpaceAR(jinbiPos);
                    var q1x = startPos.x + .25 * (endPos.x - startPos.x);
                    var q1y = startPos.y + .25 * (endPos.y - startPos.y);
                    var dir = cc.v2(endPos.x - startPos.x, endPos.y - startPos.y);
                    dir.normalizeSelf();
                    var verticalDir = cc.v2(-dir.y, dir.x);
                    var q1 = cc.v2(q1x + 100 * verticalDir.x, q1y + 100 * verticalDir.y);
                    var q2x = startPos.x + .5 * (endPos.x - startPos.x);
                    var q2y = startPos.y + .5 * (endPos.y - startPos.y);
                    var q2 = cc.v2(q2x + 100 * verticalDir.x, q2y + 100 * verticalDir.y);
                    cc.tween(moveNode).parallel(cc.tween().bezierTo(.8, q1, q2, endPos, {
                      easing: "quadIn"
                    }), cc.tween().to(.8, {
                      scale: .25
                    }, {
                      easing: "quadIn"
                    })).call(function() {
                      moveNode.parent = null;
                    }).start();
                    var lizi = cc.instantiate(cc.vv.gameData.GetPrefabByName("tuowei_dian"));
                    lizi.parent = _this14._collectNode;
                    lizi.position = startPos;
                    var liziSystem = lizi.getComponent(cc.ParticleSystem);
                    liziSystem.resetSystem();
                    cc.tween(lizi).bezierTo(.8, q1, q2, endPos, {
                      easing: "quadIn"
                    }).call(function() {
                      liziSystem.stopSystem();
                      cc.tween(lizi).delay(1).removeSelf().start();
                    }).start();
                  }();
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Coins_fly);
                _context18.next = 10;
                return _this14.awaitTime(.8);

               case 10:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Coins_Jump_FanKui);
                cc.vv.gameData.getCollectNode().showJinBiCollectEffect();
                cc.vv.gameData.getCollectNode().updateProgress(progress);
                _context18.next = 15;
                return _this14.awaitTime(1);

               case 15:
                success();

               case 16:
               case "end":
                return _context18.stop();
              }
            }, _callee18);
          }));
          return function(_x21, _x22) {
            return _ref11.apply(this, arguments);
          };
        }());
      },
      enter77: function enter77(avgBet) {
        Global.SlotsSoundMgr.stopBgm();
        cc.find("Canvas/safe_node/LMSlots_Subgame777").getComponent("LMSlots_Subgame777").showEnter(avgBet);
      },
      changePoolNormal: function changePoolNormal() {},
      changePoolFree: function changePoolFree() {}
    });
    cc._RF.pop();
  }, {} ],
  CaoCao_mapControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7989a0cmxM0K5eYhlrCVZh", "CaoCao_mapControl");
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
        _pointList: [],
        _pointNum: 0,
        _juese: null,
        _cfg: null,
        _bg: null,
        _popup: null,
        _pop_bg: null
      },
      onLoad: function onLoad() {
        for (var i = 1; i < 21; i++) {
          var point = cc.find("popup/bg/pointRoot/point" + i, this.node);
          this._pointList.push(point);
        }
        this._juese = cc.find("popup/bg/zhizhen", this.node);
        this._juese.opacity = 0;
        this._cfg = cc.vv.gameData.getGameCfg();
        this._bg = cc.find("popup/bg", this.node);
        this._popup = cc.find("popup", this.node);
        this._bg.y = cc.winSize.height / 2 + this._bg.height / 2;
        this._pop_bg = cc.find("popup/pop_bg", this.node);
        this._pop_bg.on("click", this.onBackGame, this);
        this._pop_bg.getComponent(cc.Button).interactable = false;
        this.resetMap(true);
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
      getIsMapFree: function getIsMapFree() {
        var cfg = cc.vv.gameData.getGameCfg();
        if (!cfg.MapConfig[this._pointNum]) return;
        var mapInfo = cc.vv.gameData.getMapInfo();
        return 2 === cfg.MapConfig[this._pointNum].type && 2 === mapInfo.state;
      },
      initNode: function initNode() {
        for (var i = 0; i < this._pointNum; i++) {
          var element = this._pointList[i];
          if (element.getChildByName("title")) {
            for (var j = 0; j < element.children.length; j++) {
              var child = element.children[j];
              child.color = this._cfg.normalColor;
            }
            element.color = this._cfg.normalColor;
          } else cc.find("select", element).active = true;
        }
        if (this._pointNum > 0) {
          var pointNode = this._pointList[this._pointNum - 1];
          var position = pointNode.convertToWorldSpaceAR(cc.v2(0, 0));
          var finalPosition = this._bg.convertToNodeSpaceAR(position);
          this._juese.position = finalPosition;
        }
      },
      resetMap: function resetMap() {
        var isInit = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (var i = 0; i < this._pointList.length; i++) {
          var element = this._pointList[i];
          if (element.getChildByName("title")) {
            for (var j = 0; j < element.children.length; j++) {
              var child = element.children[j];
              child.color = this._cfg.grayColor;
            }
            element.color = this._cfg.grayColor;
          } else cc.find("select", element).active = false;
        }
        this._juese.position = cc.v2(-134.385, -98.021);
        isInit || (this._pointNum = 0);
      },
      show: function show() {
        var _this2 = this;
        this._popup.active = true;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Click_Show_Map);
        20 === this._pointNum ? this.resetMap() : this.initNode();
        var destY = cc.winSize.height / 2 - 481;
        cc.tween(this._bg).to(.2, {
          y: destY
        }, {
          easing: "backOut"
        }).call(function() {
          _this2._pop_bg.getComponent(cc.Button).interactable = true;
        }).start();
        this._juese.opacity = 0;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
      },
      showTip: function showTip() {
        var _this3 = this;
        return new Promise(function(sucess, failed) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Click_Show_Map);
          _this3._popup.active = true;
          _this3._pop_bg.getComponent(cc.Button).interactable = false;
          20 === _this3._pointNum ? _this3.resetMap() : _this3.initNode();
          var destY = cc.winSize.height / 2 - 481;
          cc.tween(_this3._bg).to(.2, {
            y: destY
          }, {
            easing: "backOut"
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
        });
      },
      onBackGame: function onBackGame() {
        this._pop_bg.getComponent(cc.Button).interactable = false;
        this.hide();
        this.scheduleOnce(function() {
          cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
        }, .2);
      },
      hide: function hide() {
        var _this4 = this;
        cc.tween(this._bg).to(.2, {
          y: cc.winSize.height + this._bg.height / 2
        }, {
          easing: "backIn"
        }).call(function() {
          _this4._popup.active = false;
        }).start();
      },
      jumpToNext: function jumpToNext() {
        var _this5 = this;
        this._pointNum++;
        this._pointNum > 20 && (this._pointNum = 20);
        var pointNode = this._pointList[this._pointNum - 1];
        var position = pointNode.convertToWorldSpaceAR(cc.v2(0, 0));
        var finalPosition = this._bg.convertToNodeSpaceAR(position);
        this._juese.opacity = 0;
        cc.tween(this._juese).to(.2, {
          opacity: 255
        }).to(.25, {
          position: finalPosition
        }).start();
        this.scheduleOnce(function() {
          var jueseAni = _this5._juese.getComponent(cc.Animation);
          jueseAni.play("jump");
        }, .2);
        this.scheduleOnce(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var j, child, yanhua, yanhuaAni;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!pointNode.getChildByName("title")) {
                _context2.next = 14;
                break;
              }
              for (j = 0; j < pointNode.children.length; j++) {
                child = pointNode.children[j];
                child.color = _this5._cfg.normalColor;
              }
              pointNode.color = _this5._cfg.normalColor;
              _context2.next = 5;
              return _this5.awaitTime(.5);

             case 5:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Map_YanHua);
              _this5._juese.opacity = 0;
              yanhua = pointNode.getChildByName("yanhua");
              yanhua.active = true;
              yanhuaAni = yanhua.getComponent(cc.Animation);
              yanhuaAni.play("yanhua");
              yanhuaAni.on("finished", function() {
                yanhua.active = false;
                yanhuaAni.off("finished");
              });
              _context2.next = 16;
              break;

             case 14:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Map_dian);
              cc.find("select", pointNode).active = true;

             case 16:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        })), .65);
      }
    });
    cc._RF.pop();
  }, {} ],
  CaoCao_reelbonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4baaey5sCxEubFRfRB7X4wc", "CaoCao_reelbonus");
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
      properties: {},
      start: function start() {},
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
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1a", name);
        }
        var runDi = cc.find("runDi", this.node);
        runDi && (runDi.active = bShow);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetBonusSlotsScript();
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && cc.vv.gameData.GetBonusSlotsScript().OnSpinEnd();
      },
      CreateOneSymbol: function CreateOneSymbol() {
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = this._holderNode;
        var scp = node.addComponent("CaoCao_symbolbonus");
        var idx = this._symbols.length;
        scp.SetSymbolReelIdx(this._reelIdx);
        scp.Init(idx, this._topAniNode);
        this._symbols.push(scp);
      },
      updataSymbol: function updataSymbol() {
        var symbol = this._symbols.shift();
        var symbolData = null;
        if (this._stopTime <= 0 && this._bStoping && this._result && !this._bResizing) if (this._result instanceof Array) {
          this.ReadyToStop();
          symbolData = this._result.shift();
          symbolData || (this._bMoving = false);
        } else cc.error("LMSlots_Reel_Base.updataSymbol\u8bbe\u7f6e\u7684\u7ed3\u679c\u4e0d\u662f\u6570\u7ec4!");
        symbolData ? symbol.ShowById(symbolData.sid, symbolData.data) : this._bMoving ? symbol.ShowRandomSymbol() : symbol.ShowById(1001);
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
  CaoCao_reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6812PV1XhPYJiQYGzRQ5Wb", "CaoCao_reel");
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
      properties: {},
      start: function start() {},
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
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1a", name);
        }
        var runDi = cc.find("runDi", this.node);
        runDi && (runDi.active = bShow);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetSlotsScript();
        cc.vv.gameData.getManage()._isInFree && !cc.vv.gameData.getMapControl().getIsMapFree() && (slots = cc.vv.gameData.GetFreeSlotsScript());
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && cc.vv.gameData.getManage().OnSpinEnd();
      },
      ReadyToStop: function ReadyToStop() {
        if (!this._bNotifyReadyStop) {
          this._bNotifyReadyStop = true;
          var slots = cc.vv.gameData.GetSlotsScript();
          cc.vv.gameData.getManage()._isInFree && !cc.vv.gameData.getMapControl().getIsMapFree() && (slots = cc.vv.gameData.GetFreeSlotsScript());
          slots.OnReelReadyToStop(this._reelIdx);
        }
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        var slots = cc.vv.gameData.GetSlotsScript();
        cc.vv.gameData.getManage()._isInFree && !cc.vv.gameData.getMapControl().getIsMapFree() && (slots = cc.vv.gameData.GetFreeSlotsScript());
        slots.OnReelBounsActionBefore(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        this.playReelStop();
        var slots = cc.vv.gameData.GetSlotsScript();
        cc.vv.gameData.getManage()._isInFree && !cc.vv.gameData.getMapControl().getIsMapFree() && (slots = cc.vv.gameData.GetFreeSlotsScript());
        slots.OnReelBounsActionDeep(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.GetSlotsScript();
        cc.vv.gameData.getManage()._isInFree && !cc.vv.gameData.getMapControl().getIsMapFree() && (slots = cc.vv.gameData.GetFreeSlotsScript());
        slots.OnReelBounsActionEnd(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      },
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator2 = _createForOfIteratorHelper(this._reelState), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var info = _step2.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation(true);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
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
          var soundPath = this._cfg.reelStateInfo[0].path;
          soundPath || (soundPath = cc.vv.gameData.getGameDir());
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  CaoCao_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c777nWItNLoIczK2O9eBbI", "CaoCao_sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: {
          default: "games/CaoCao/",
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
          default: "",
          override: true
        },
        reel_stop: {
          default: "",
          override: true
        },
        scatter_stop: {
          default: "",
          override: true
        },
        music_Puss_Bonus_Down: "music_Puss_Bonus_Down",
        music_Puss_Bonus_EndWin: "music_Puss_Bonus_EndWin",
        music_Puss_Cat_Back: "music_Puss_Cat_Back",
        music_Puss_Cat_Down_And_HuiJina: "music_Puss_Cat_Down_And_HuiJina",
        music_Puss_Cat_Fly_to_WIld: "music_Puss_Cat_Fly_to_WIld",
        music_Puss_Cat_Left_And_HuiJina: "music_Puss_Cat_Left_And_HuiJina",
        music_Puss_ChooseView: "music_Puss_ChooseView",
        music_Puss_ChooseView_Click: "music_Puss_ChooseView_Click",
        music_Puss_ChooseView_Over: "music_Puss_ChooseView_Over",
        music_Puss_Click_Collect: "music_Puss_Click_Collect",
        music_Puss_Click_Show_Map: "music_Puss_Click_Show_Map",
        music_Puss_Coins_fly: "music_Puss_Coins_fly",
        music_Puss_Coins_Jump_FanKui: "music_Puss_Coins_Jump_FanKui",
        music_Puss_enter: "music_Puss_enter",
        music_Puss_fsView: "music_Puss_fsView",
        music_Puss_last_win_1: "music_Puss_last_win_1",
        music_Puss_last_win_2: "music_Puss_last_win_2",
        music_Puss_last_win_3: "music_Puss_last_win_3",
        music_Puss_last_win_4: "music_Puss_last_win_4",
        music_Puss_Map_dian: "music_Puss_Map_dian",
        music_Puss_Map_YanHua: "music_Puss_Map_YanHua",
        music_Puss_Reel_up: "music_Puss_Reel_up",
        music_Puss_Respin_OverView: "music_Puss_Respin_OverView",
        music_Puss_Respin_rest: "music_Puss_Respin_rest",
        music_Puss_ShowJackPot: "music_Puss_ShowJackPot",
        music_Puss_ShowJackPot_Coins_jump: "music_Puss_ShowJackPot_Coins_jump",
        music_Puss_TriggerRespin: "music_Puss_TriggerRespin",
        music_Puss_unLock_Bet: "music_Puss_unLock_Bet",
        Puss_freespinbg: "Puss_freespinbg",
        Puss_norbg: "Puss_norbg",
        Puss_Reels_Stop: "Puss_Reels_Stop",
        Puss_respinbg: "Puss_respinbg",
        Puss_scatter_down: "Puss_scatter_down",
        Puss_TriggerFreespin: "Puss_TriggerFreespin",
        sound_classic_lastwin_1: "sound_classic_lastwin_1",
        sound_classic_lastwin_2: "sound_classic_lastwin_2",
        sound_classic_lastwin_3: "sound_classic_lastwin_3",
        sound_classic_lastwin_4: "sound_classic_lastwin_4",
        sound_classic_reelStop: "sound_classic_reelStop",
        sound_classic_spin_1: "sound_classic_spin_1",
        sound_classic_spin_2: "sound_classic_spin_2",
        sound_classic_spin_3: "sound_classic_spin_3"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  CaoCao_symbolbonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45b538MIRhGXrfTx4wHjmX3", "CaoCao_symbolbonus");
    "use strict";
    cc.Class({
      extends: require("CaoCao_symbol"),
      properties: {},
      start: function start() {},
      ShowRandomSymbol: function ShowRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        var randVal = cfg.randomSymbols[randIdx - 1];
        this.ShowById(randVal);
      },
      StopMoveDeep: function StopMoveDeep() {
        if (3 === this._id) {
          this.playStopAnimation(true);
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.music_Puss_Bonus_Down);
        }
      }
    });
    cc._RF.pop();
  }, {
    CaoCao_symbol: "CaoCao_symbol"
  } ],
  CaoCao_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1400czIGXdEmI4VkhVP6uSH", "CaoCao_symbol");
    "use strict";
    var coinMult = [ 1, 1, 1, 1, 1, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2.5, 2.5, 2.5, 3, 3, 3, 3.5, 3.5, 3.5, 4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 5.5, 5.5, 5.5, 6, 6, 6, 7, 8, 9, 10 ];
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._symbolIdx = idx;
        2 === this._id ? this.node.zIndex = 150 - idx : this.node.zIndex = 100 - idx;
      },
      playWinTweenAction: function playWinTweenAction() {
        var nodeAnimation = this.node.getComponent(cc.Animation);
        nodeAnimation.play("smallSymbolWin");
      },
      stopWinTweenAction: function stopWinTweenAction() {
        var nodeAnimation = this.node.getComponent(cc.Animation);
        nodeAnimation.play("smallSymbolIdel");
      },
      OnSymbolAction: function OnSymbolAction(symbol) {
        var cfg = cc.vv.gameData.getGameCfg();
        var distance = cfg.bounceInfo ? cfg.bounceInfo.distance : 30;
        var time = cfg.bounceInfo ? cfg.bounceInfo.time : .3;
        cc.tween(symbol).to(time, {
          position: cc.v2(symbol.x, symbol.y + distance)
        }).start();
      },
      playWinAnimation: function playWinAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if (cfg.symbol[id].win_ani && "" !== cfg.symbol[id].win_ani.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
              nodeSp.setCompleteListener(null);
            }
          }
        } else {
          this._state = "win";
          this._showNode.active = true;
          this.playWinTweenAction();
        }
      },
      playStopAnimation: function playStopAnimation(isStop) {
        var _this = this;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if ("" !== cfg.symbol[id].stop_ani.name) {
            aniNode.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              cfg.symbol[id].idle_ani ? nodeSp.addAnimation(0, cfg.symbol[id].idle_ani.name, true) : nodeSp.setCompleteListener(function() {
                _this.ShowNormal();
                nodeSp.setCompleteListener(null);
              });
            }
            isStop && this.OnSymbolAction(aniNode);
          }
        }
      },
      playidleAnimation: function playidleAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._state = "idle";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" !== cfg.symbol[id].idle_ani.name) {
            this.node.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
              nodeSp.setCompleteListener(null);
            }
          }
        }
        return isPlay;
      },
      playTriggerAnimation: function playTriggerAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].trigger_ani) {
          this._state = "trigger";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if ("" != cfg.symbol[id].trigger_ani.name) {
            aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, false);
          }
        }
        return isPlay;
      },
      setSymbolCoin: function setSymbolCoin(coin) {
        var coinNum = cc.find("coinNum", this.node);
        if (coin) {
          coinNum.active = true;
          coinNum.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 1);
        } else coinNum.active = false;
      },
      ShowById: function ShowById(id, data) {
        this._id = id;
        this._data = data;
        this._state = "normal";
        this._showNode && (this._showNode.active = false);
        this._data ? this.setSymbolCoin(this._data.coin) : this.setSymbolCoin();
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].node) {
          this._showNode = cc.find(cfg.symbol[id].node, this.node);
          this._showNode.active = true;
        } else console.log("\u672a\u627e\u5230\u914d\u7f6eid:" + id);
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
          var _randIdx = Global.random(1, cfg.randomSymbols.length);
          randVal = cfg.randomSymbols[_randIdx - 1];
        }
        var data = null;
        if (3 === randVal) {
          var betCoin = cc.vv.gameData.GetTotalBet();
          var coin = coinMult[Global.random(0, coinMult.length - 1)];
          data = {
            coin: coin * betCoin
          };
        }
        this.ShowById(randVal, data);
        return randVal;
      },
      GetRandomCfg: function GetRandomCfg() {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cc.vv.gameData.getMapControl().getIsMapFree()) return cfg.cardmapfree2;
        var isFree = cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime();
        if (isFree > 0 && cfg.cardmapfree) return cfg.cardmapfree;
        return cfg.cardmap;
      },
      ShowInitFreeSymbol: function ShowInitFreeSymbol() {
        var randVal;
        var cfg = cc.vv.gameData.getGameCfg();
        var randomcfg = cfg.cardmapfree || cfg.cardmap;
        if (randomcfg) {
          var reelrandomCfg = randomcfg[this._reelIdx + 1];
          if (reelrandomCfg) {
            var randIdx = cc.vv.gameData.GetReelRandomIdx(this._reelIdx);
            cc.js.isNumber(randIdx) || (randIdx = Global.random(1, reelrandomCfg.length) - 1);
            randVal = reelrandomCfg[randIdx];
            if (!randVal) {
              randIdx = 0;
              randVal = reelrandomCfg[randIdx];
            }
            cc.vv.gameData.SetReelRandomIdx(this._reelIdx, ++randIdx);
          }
        } else {
          var _cfg = cc.vv.gameData.getGameCfg();
          var _randIdx2 = Global.random(1, _cfg.randomSymbols.length);
          randVal = _cfg.randomSymbols[_randIdx2 - 1];
        }
        this.ShowById(randVal);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "CaoCao_777", "CaoCao_Bottom", "CaoCao_Cfg", "CaoCao_GameData", "CaoCao_Logic", "CaoCao_Pop", "CaoCao_PrizePool", "CaoCao_Slots", "CaoCao_Slotsbonus", "CaoCao_Slotsfree", "CaoCao_collectNode", "CaoCao_manage", "CaoCao_mapControl", "CaoCao_reel", "CaoCao_reelbonus", "CaoCao_sound", "CaoCao_symbol", "CaoCao_symbolbonus" ]);