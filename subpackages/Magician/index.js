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
  Magician_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9eb0a0Gw1hOmpltbVs/qkUV", "Magician_Cfg");
    "use strict";
    var _symbol;
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
        zIndex: 300,
        win_node: "w1",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        zIndex: 300,
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        zIndex: 100,
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        zIndex: 100
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        zIndex: 100
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        zIndex: 100
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        zIndex: 100
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        zIndex: 100,
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        zIndex: 100,
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _symbol),
      wildId: 1,
      scatterId: 2,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Magician_Slots",
        Reels: "Magician_Reel",
        Symbols: "Magician_symbol"
      },
      col: 20,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 124
      },
      helpItems: [ "games/Magician/prefab/LMSlots_Help_item1", "games/Magician/prefab/LMSlots_Help_item2", "games/Magician/prefab/LMSlots_Help_item3", "games/Magician/prefab/LMSlots_Help_item4" ],
      randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      autoModelDelay: 1,
      AddAntiTime: 2,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Magician/",
        symbolStopSound: "scatter_notify",
        antSound: "anticipation",
        antSpeed: 2400
      } ],
      normalBgm: "base_bgm",
      commEffect: {
        path: "games/Magician/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      }
    };
    Cfg.mapCfg = {
      1: {
        id: 1,
        type: 1,
        iconSpineName: "animation1"
      },
      2: {
        id: 2,
        type: 2,
        iconSpineName: "animation2"
      },
      3: {
        id: 3,
        type: 1,
        iconSpineName: "animation1"
      },
      4: {
        id: 4,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 1 ]
        }
      },
      5: {
        id: 5,
        type: 1,
        iconSpineName: "animation1"
      },
      6: {
        id: 6,
        type: 1,
        iconSpineName: "animation1"
      },
      7: {
        id: 7,
        type: 2,
        iconSpineName: "animation2"
      },
      8: {
        id: 8,
        type: 1,
        iconSpineName: "animation1"
      },
      9: {
        id: 9,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 3, 5 ]
        }
      },
      10: {
        id: 10,
        type: 1,
        iconSpineName: "animation1"
      },
      11: {
        id: 11,
        type: 1,
        iconSpineName: "animation1"
      },
      12: {
        id: 12,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 3, 4 ]
        }
      },
      13: {
        id: 13,
        type: 1,
        iconSpineName: "animation1"
      },
      14: {
        id: 14,
        type: 1,
        iconSpineName: "animation1"
      },
      15: {
        id: 15,
        type: 2,
        iconSpineName: "animation2"
      },
      16: {
        id: 16,
        type: 1,
        iconSpineName: "animation1"
      },
      17: {
        id: 17,
        type: 1,
        iconSpineName: "animation1"
      },
      18: {
        id: 18,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 2, 5 ]
        }
      },
      19: {
        id: 19,
        type: 1,
        iconSpineName: "animation1"
      },
      20: {
        id: 20,
        type: 2,
        iconSpineName: "animation2"
      },
      21: {
        id: 21,
        type: 1,
        iconSpineName: "animation1"
      },
      22: {
        id: 22,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 1, 3, 5 ]
        }
      },
      23: {
        id: 23,
        type: 1,
        iconSpineName: "animation1"
      },
      24: {
        id: 24,
        type: 1,
        iconSpineName: "animation1"
      },
      25: {
        id: 25,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 1, 5 ]
        }
      },
      26: {
        id: 26,
        type: 1,
        iconSpineName: "animation1"
      },
      27: {
        id: 27,
        type: 1,
        iconSpineName: "animation1"
      },
      28: {
        id: 28,
        type: 2,
        iconSpineName: "animation2"
      },
      29: {
        id: 29,
        type: 1,
        iconSpineName: "animation1"
      },
      30: {
        id: 30,
        type: 1,
        iconSpineName: "animation1"
      },
      31: {
        id: 31,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 2, 5 ]
        }
      },
      32: {
        id: 32,
        type: 1,
        iconSpineName: "animation1"
      },
      33: {
        id: 33,
        type: 2,
        iconSpineName: "animation2"
      },
      34: {
        id: 34,
        type: 1,
        iconSpineName: "animation1"
      },
      35: {
        id: 35,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 1, 3, 5 ]
        }
      },
      36: {
        id: 36,
        type: 1,
        iconSpineName: "animation1"
      },
      37: {
        id: 37,
        type: 1,
        iconSpineName: "animation1"
      },
      38: {
        id: 38,
        type: 2,
        iconSpineName: "animation2"
      },
      39: {
        id: 39,
        type: 1,
        iconSpineName: "animation1"
      },
      40: {
        id: 40,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 3, 4 ]
        }
      },
      41: {
        id: 41,
        type: 1,
        iconSpineName: "animation1"
      },
      42: {
        id: 42,
        type: 2,
        iconSpineName: "animation2"
      },
      43: {
        id: 43,
        type: 1,
        iconSpineName: "animation1"
      },
      44: {
        id: 44,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 2, 4 ]
        }
      },
      45: {
        id: 45,
        type: 1,
        iconSpineName: "animation1"
      },
      46: {
        id: 46,
        type: 2,
        iconSpineName: "animation2"
      },
      47: {
        id: 47,
        type: 1,
        iconSpineName: "animation1"
      },
      48: {
        id: 48,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 1 ]
        }
      },
      49: {
        id: 49,
        type: 1,
        iconSpineName: "animation1"
      },
      50: {
        id: 50,
        type: 1,
        iconSpineName: "animation1"
      },
      51: {
        id: 51,
        type: 2,
        iconSpineName: "animation2"
      },
      52: {
        id: 52,
        type: 1,
        iconSpineName: "animation1"
      },
      53: {
        id: 53,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 2, 4 ]
        }
      },
      54: {
        id: 54,
        type: 1,
        iconSpineName: "animation1"
      },
      55: {
        id: 55,
        type: 1,
        iconSpineName: "animation1"
      },
      56: {
        id: 56,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 1, 2, 3 ]
        }
      },
      57: {
        id: 57,
        type: 1,
        iconSpineName: "animation1"
      },
      58: {
        id: 58,
        type: 1,
        iconSpineName: "animation1"
      },
      59: {
        id: 59,
        type: 1,
        iconSpineName: "animation1"
      },
      60: {
        id: 60,
        type: 2,
        iconSpineName: "animation2"
      },
      61: {
        id: 61,
        type: 1,
        iconSpineName: "animation1"
      },
      62: {
        id: 62,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 3, 4 ]
        }
      },
      63: {
        id: 63,
        type: 1,
        iconSpineName: "animation1"
      },
      64: {
        id: 64,
        type: 2,
        iconSpineName: "animation2"
      },
      65: {
        id: 65,
        type: 1,
        iconSpineName: "animation1"
      },
      66: {
        id: 66,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 1, 2, 3 ]
        }
      },
      67: {
        id: 67,
        type: 1,
        iconSpineName: "animation1"
      },
      68: {
        id: 68,
        type: 1,
        iconSpineName: "animation1"
      },
      69: {
        id: 69,
        type: 3,
        iconSpineName: "animation3",
        slot: {
          cnt: 2,
          wilds: [ 2, 5 ]
        }
      },
      70: {
        id: 70,
        type: 1,
        iconSpineName: "animation1"
      },
      71: {
        id: 71,
        type: 1,
        iconSpineName: "animation1"
      },
      72: {
        id: 72,
        type: 2,
        iconSpineName: "animation2"
      },
      73: {
        id: 73,
        type: 1,
        iconSpineName: "animation1"
      },
      74: {
        id: 74,
        type: 1,
        iconSpineName: "animation1"
      },
      75: {
        id: 75,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 3, 5 ]
        }
      },
      76: {
        id: 76,
        type: 1,
        iconSpineName: "animation1"
      },
      77: {
        id: 77,
        type: 2,
        iconSpineName: "animation2"
      },
      78: {
        id: 78,
        type: 1,
        iconSpineName: "animation1"
      },
      79: {
        id: 79,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 2, 4 ]
        }
      },
      80: {
        id: 80,
        type: 1,
        iconSpineName: "animation1"
      },
      81: {
        id: 81,
        type: 1,
        iconSpineName: "animation1"
      },
      82: {
        id: 82,
        type: 2,
        iconSpineName: "animation2"
      },
      83: {
        id: 83,
        type: 1,
        iconSpineName: "animation1"
      },
      84: {
        id: 84,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 1, 5 ]
        }
      },
      85: {
        id: 85,
        type: 1,
        iconSpineName: "animation1"
      },
      86: {
        id: 86,
        type: 2,
        iconSpineName: "animation2"
      },
      87: {
        id: 87,
        type: 1,
        iconSpineName: "animation1"
      },
      88: {
        id: 88,
        type: 3,
        iconSpineName: "animation4",
        slot: {
          cnt: 3,
          wilds: [ 1, 2, 3 ]
        }
      },
      89: {
        id: 89,
        type: 1,
        iconSpineName: "animation1"
      },
      90: {
        id: 90,
        type: 2,
        iconSpineName: "animation2"
      },
      91: {
        id: 91,
        type: 1,
        iconSpineName: "animation1"
      },
      92: {
        id: 92,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 3, 4 ]
        }
      },
      93: {
        id: 93,
        type: 1,
        iconSpineName: "animation1"
      },
      94: {
        id: 94,
        type: 1,
        iconSpineName: "animation1"
      },
      95: {
        id: 95,
        type: 1,
        iconSpineName: "animation1"
      },
      96: {
        id: 96,
        type: 2,
        iconSpineName: "animation2"
      },
      97: {
        id: 97,
        type: 1,
        iconSpineName: "animation1"
      },
      98: {
        id: 98,
        type: 1,
        iconSpineName: "animation1"
      },
      99: {
        id: 99,
        type: 1,
        iconSpineName: "animation1"
      },
      100: {
        id: 100,
        type: 3,
        iconSpineName: "animation5",
        slot: {
          cnt: 4,
          wilds: [ 2, 3, 4, 5 ]
        }
      }
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Magician_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3bbfbSvERAQpbFvJuFFhAA", "Magician_Character");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _spineMale: sp.Skeleton,
        _isInFree: false,
        normal: cc.Node
      },
      onLoad: function onLoad() {
        this.initSpine();
      },
      initSpine: function initSpine(isFree) {
        this._spineMale = this.normal.getComponent(sp.Skeleton);
        this._spineMale.setAnimation(0, "idle", true);
      },
      hideCharacter: function hideCharacter() {
        this._spineMale.node.active = false;
      },
      toFree: function toFree(needTransform) {},
      toNormal: function toNormal() {},
      playPreAppear: function playPreAppear() {
        var _this = this;
        this.spineCharacterAppear.node.active = true;
        this.spineCharacterAppear.setAnimation(0, "animation", false);
        this.spineCharacterAppear.setCompleteListener(function() {
          _this.spineCharacterAppear.setCompleteListener(null);
          _this.spineCharacterAppear.node.active = false;
        });
      },
      play: function play(wildCount) {
        var _this2 = this;
        var aniName = "skill";
        var role = "pos1";
        var len = wildCount;
        var aniTime = 0;
        var random = Global.random(1, 100);
        if (random > 50) {
          role = "pos2";
          aniName = "skill_1";
          aniTime = 1.5;
        } else aniTime = 1;
        cc.log(aniName);
        this._spineMale.node.active = true;
        this._spineMale.setAnimation(0, aniName, false);
        var time = new Date().getTime();
        this._spineMale.setCompleteListener(function() {
          _this2._spineMale.setCompleteListener(null);
          _this2._spineMale.setAnimation(0, "idle", true);
          cc.log(new Date().getTime() - time);
        });
        return {
          roleName: role,
          triggerTime: aniTime
        };
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_Events: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2719ccMZVlOEJY+5ESi9ebQ", "Magician_Events");
    "use strict";
    var OperateEvent = {
      bet_coin_change: "OperateEvent.bet_coin_change",
      start_spin: "OperateEvent.start_spin"
    };
    var DataEvent = {};
    module.exports = {
      OperateEvent: OperateEvent,
      DataEvent: DataEvent
    };
    cc._RF.pop();
  }, {} ],
  Magician_ExtraWildGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a107eahlgpIF5hnhCbdMxEJ", "Magician_ExtraWildGame");
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
        effect_pos1: cc.Node,
        effect_pos2: cc.Node,
        apear_full: sp.Skeleton,
        apear1: cc.Node,
        apear2: cc.Node,
        apear_col: [ sp.Skeleton ],
        liuguanlizi: cc.Node,
        itemsMaskNode: cc.Node,
        extra_wild_pre_ani: cc.Node,
        extra_wild_area_ani: cc.Node,
        wilds_node: cc.Node,
        float_wild_item: cc.Node,
        _wildsArr: null
      },
      onLoad: function onLoad() {},
      start: function start() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.initFloatWilds();
        });
      },
      initFloatWilds: function initFloatWilds() {
        this._wildsArr = [];
        for (var i = 0; i < 15; i++) {
          var item = cc.instantiate(this.float_wild_item);
          item.parent = this.wilds_node;
          var pos = SlotsFacade.slots.getIdxGlobalPos(i + 1);
          pos = this.wilds_node.convertToNodeSpaceAR(pos);
          item.x = pos.x;
          item.y = pos.y;
          this._wildsArr.push(item);
        }
      },
      startExtraWildFlow: function startExtraWildFlow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _context.next = 2;
              return _this2._showPreAni();

             case 2:
              _context.next = 4;
              return _this2._showGenWild();

             case 4:
              _context.next = 6;
              return _this2._exitExtraWild();

             case 6:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _exitExtraWild: function _exitExtraWild() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3.itemsMaskNode.runAction(cc.fadeOut(1));
              _context2.next = 3;
              return SlotsFacade.delayTime(.6);

             case 3:
              _this3.extra_wild_area_ani.runAction(cc.fadeOut(.2));
              _context2.next = 6;
              return SlotsFacade.delayTime(.3);

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _getRoundsArr: function _getRoundsArr() {
        var wildIndexs = SlotsFacade.dm.getExtraWildIndexs().concat();
        var maxCount = 3;
        if (wildIndexs.length > 5 && Math.random() > .6) return [ {
          type: 1,
          indexs: wildIndexs
        } ];
        var roundsArr = [];
        var cols = [ [], [], [], [], [] ];
        for (var i = 0; i < wildIndexs.length; i++) cols[(wildIndexs[i] - 1) % 5].push(wildIndexs[i]);
        for (var _i = 0; _i < cols.length; _i++) if (3 == cols[_i].length) {
          roundsArr.push({
            type: 2,
            indexs: cols[_i]
          });
          for (var j = 0; j < cols[_i].length; j++) {
            var index = wildIndexs.indexOf(cols[_i][j]);
            -1 != index && wildIndexs.splice(index, 1);
          }
        }
        while (maxCount > 0 && wildIndexs.length > 0) {
          if (1 == maxCount) {
            roundsArr.push({
              type: 3,
              indexs: wildIndexs.concat()
            });
            wildIndexs = [];
          } else {
            var count = Math.ceil(wildIndexs.length * Math.random());
            var indexs = [];
            for (var _i2 = 0; _i2 < count; _i2++) indexs.push(wildIndexs.pop());
            roundsArr.push({
              type: 3,
              indexs: indexs
            });
          }
          if (wildIndexs.length < 1) break;
          maxCount--;
        }
        return roundsArr;
      },
      _showGenWild: function _showGenWild() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var roundsArr, i, round;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              roundsArr = _this4._getRoundsArr();
              i = 0;

             case 2:
              if (!(i < roundsArr.length)) {
                _context3.next = 19;
                break;
              }
              round = roundsArr[i];
              _context3.t0 = round.type;
              _context3.next = 1 === _context3.t0 ? 7 : 2 === _context3.t0 ? 10 : 3 === _context3.t0 ? 13 : 16;
              break;

             case 7:
              _context3.next = 9;
              return _this4._playAppearFullRound(round.indexs);

             case 9:
              return _context3.abrupt("break", 16);

             case 10:
              _context3.next = 12;
              return _this4._playColRound(round.indexs);

             case 12:
              return _context3.abrupt("break", 16);

             case 13:
              _context3.next = 15;
              return _this4._playARound(round.indexs);

             case 15:
              return _context3.abrupt("break", 16);

             case 16:
              i++;
              _context3.next = 2;
              break;

             case 19:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _playAppearFullRound: function _playAppearFullRound(indexs) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var t1, t2, _loop, i;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("act1");
              _this5.apear_full.node.active = true;
              _this5.apear_full.setAnimation(0, "animation", false);
              _this5.apear_full.setCompleteListener(function() {
                _this5.apear_full.setCompleteListener(null);
                _this5.apear_full.node.active = false;
              });
              t1 = 2.5;
              t2 = 5;
              _context4.next = 8;
              return SlotsFacade.delayTime(t1);

             case 8:
              _loop = function _loop(i) {
                var item = _this5._wildsArr[indexs[i] - 1];
                var apearAni = cc.instantiate(_this5.apear2);
                apearAni.x = item.x;
                apearAni.y = item.y;
                apearAni.parent = _this5.wilds_node;
                apearAni.active = true;
                var apearSpin = apearAni.getComponent(sp.Skeleton);
                apearSpin.setAnimation(0, "animation", false);
                apearSpin.setCompleteListener(function() {
                  apearSpin.setCompleteListener(null);
                  apearAni.removeFromParent();
                  item.active = true;
                });
              };
              for (i = 0; i < indexs.length; i++) _loop(i);
              _context4.next = 12;
              return SlotsFacade.delayTime(t2);

             case 12:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _playColRound: function _playColRound(indexs) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var colIndex, colSpine, t1, t2, _loop2, i;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("act3");
              colIndex = (indexs[0] - 1) % 5;
              colSpine = _this6.apear_col[colIndex];
              colSpine.node.active = true;
              colSpine.setAnimation(0, "animation", false);
              colSpine.setCompleteListener(function() {
                colSpine.setCompleteListener(null);
                colSpine.node.active = false;
              });
              t1 = 1.7;
              t2 = .15;
              _loop2 = function _loop2(i) {
                _this6.scheduleOnce(function() {
                  var item = _this6._wildsArr[indexs[i] - 1];
                  var apearAni = cc.instantiate(_this6.apear2);
                  apearAni.x = item.x;
                  apearAni.y = item.y;
                  apearAni.parent = _this6.wilds_node;
                  apearAni.active = true;
                  var apearSpin = apearAni.getComponent(sp.Skeleton);
                  apearSpin.setAnimation(0, "animation", false);
                  apearSpin.setCompleteListener(function() {
                    apearSpin.setCompleteListener(null);
                    apearAni.removeFromParent();
                    item.active = true;
                  });
                }, t1 + i * t2);
              };
              for (i = 0; i < indexs.length; i++) _loop2(i);
              _context5.next = 12;
              return SlotsFacade.delayTime(2.8);

             case 12:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _playARound: function _playARound(indexs) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var data, startPos;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              console.log("#\u64ad\u653e\u4e00\u8f6ewild\u52a8\u753b", indexs);
              data = SlotsFacade.character.play(indexs.length);
              _context6.next = 4;
              return SlotsFacade.delayTime(data.triggerTime);

             case 4:
              startPos = null;
              if ("pos1" == data.roleName) {
                startPos = _this7.effect_pos1.getPosition();
                SlotsFacade.soundMgr.playEffect("act6");
              } else {
                startPos = _this7.effect_pos2.getPosition();
                SlotsFacade.soundMgr.playEffect("act7");
              }
              _context6.next = 8;
              return _this7._playTrackAni(indexs, startPos);

             case 8:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      _playTrackAni: function _playTrackAni(indexs, startPos) {
        var promissArr = [];
        for (var i = 0; i < indexs.length; i++) {
          var lz = cc.instantiate(this.liuguanlizi);
          lz.parent = this.node;
          lz.x = startPos.x;
          lz.y = startPos.y;
          var p = lz.getComponent(cc.ParticleSystem);
          p.resetSystem();
          lz.active = true;
          var item = this._wildsArr[indexs[i] - 1];
          var iPos = item.convertToWorldSpaceAR(cc.v2(0, 0));
          iPos = this.node.convertToNodeSpaceAR(iPos);
          promissArr.push(this._moveAParticle(lz, iPos, item));
        }
        return Promise.all(promissArr);
      },
      _moveAParticle: function _moveAParticle(par, endPos, item) {
        var _this8 = this;
        return new Promise(function(res) {
          cc.tween(par).to(.5, {
            x: endPos.x,
            y: endPos.y
          }).call(function() {
            par.removeFromParent();
            res();
          }).start();
        }).then(function() {
          return new Promise(function(res) {
            var apearAni = cc.instantiate(_this8.apear1);
            apearAni.x = endPos.x;
            apearAni.y = endPos.y;
            apearAni.parent = _this8.node;
            apearAni.active = true;
            var apearSpin = apearAni.getComponent(sp.Skeleton);
            apearSpin.setAnimation(0, "animation", false);
            apearSpin.setCompleteListener(function() {
              apearSpin.setCompleteListener(null);
              apearAni.removeFromParent();
              item.active = true;
              res();
            });
          });
        });
      },
      _showPreAni: function _showPreAni() {
        var _this9 = this;
        return new Promise(function(res, rej) {
          console.log("#\u64ad\u653eextra wild\u5165\u573a\u52a8\u753b");
          _this9.extra_wild_pre_ani.active = true;
          var preAni = _this9.extra_wild_pre_ani.getComponent(sp.Skeleton);
          preAni.setCompleteListener(function() {
            preAni.setCompleteListener(null);
            res();
          });
          preAni.setAnimation(0, "animation", false);
          _this9.itemsMaskNode.active = true;
          _this9.itemsMaskNode.opacity = 0;
          cc.tween(_this9.itemsMaskNode).to(1, {
            opacity: 150
          }).start();
          _this9.scheduleOnce(function() {
            _this9.extra_wild_area_ani.active = true;
            _this9.extra_wild_area_ani.opacity = 0;
            _this9.extra_wild_area_ani.runAction(cc.fadeIn(.2));
          }, .7);
          SlotsFacade.soundMgr.playEffect("act2");
        });
      },
      hideWild: function hideWild() {
        this._wildsArr.forEach(function(element) {
          element.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2ec9DIizZAgo52Sg/mEvIx", "Magician_FlowCtrl");
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
      enterRoom: function enterRoom() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var total, rest, nTotal, deskInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              if (!(rest > 0)) {
                _context.next = 8;
                break;
              }
              SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
              nTotal = cc.vv.gameData.GetTotalFreeWin();
              SlotsFacade.bottomCmp.SetWin(nTotal);
              _context.next = 8;
              return _this.enterFreeGame(true);

             case 8:
              deskInfo = SlotsFacade.dm.getDeskInfo();
              if (!(deskInfo.select && deskInfo.select.state)) {
                _context.next = 27;
                break;
              }
              if (!(1 == deskInfo.select.rtype)) {
                _context.next = 15;
                break;
              }
              _context.next = 13;
              return _this.enterCollectMap(true);

             case 13:
              _context.next = 27;
              break;

             case 15:
              if (!(2 == deskInfo.select.rtype)) {
                _context.next = 27;
                break;
              }
              _context.next = 18;
              return _this.enterScatterGame(true);

             case 18:
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context.next = 27;
                break;
              }
              if (!(2 == SlotsFacade.dm.energyData.openGame)) {
                _context.next = 25;
                break;
              }
              _context.next = 22;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.GetFreeTime());

             case 22:
              SlotsFacade.mainPanel.showSceneTransition();
              _context.next = 25;
              return SlotsFacade.delayTime(3);

             case 25:
              _context.next = 27;
              return _this.enterFreeGame();

             case 27:
              SlotsFacade.slots.CanDoNextRound();

             case 28:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(1 == SlotsFacade.slots._slotsCnt)) {
                _context2.next = 9;
                break;
              }
              if (!SlotsFacade.dm.hasExtraWild()) {
                _context2.next = 4;
                break;
              }
              _context2.next = 4;
              return SlotsFacade.extraWildCmp.startExtraWildFlow();

             case 4:
              SlotsFacade.slots._gameInfo = msg;
              SlotsFacade.slots.SetSlotsResult(msg);
              SlotsFacade.slots.SetReelStateInfo(msg.resultCards);
              _context2.next = 11;
              break;

             case 9:
              SlotsFacade.slots._gameInfo = msg;
              SlotsFacade.slots.SetSlotsResult(msg);

             case 11:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this2.collectEnergy();
              SlotsFacade.extraWildCmp.hideWild();
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context3.next = 8;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 8:
              _context3.next = 10;
              return _this2.enterCollectMap();

             case 10:
              _context3.next = 12;
              return _this2.enterScatterGame();

             case 12:
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context3.next = 23;
                break;
              }
              if (!(2 == SlotsFacade.dm.energyData.openGame)) {
                _context3.next = 19;
                break;
              }
              _context3.next = 16;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.GetFreeTime());

             case 16:
              SlotsFacade.mainPanel.showSceneTransition();
              _context3.next = 19;
              return SlotsFacade.delayTime(2);

             case 19:
              _context3.next = 21;
              return _this2.enterFreeGame();

             case 21:
              _context3.next = 36;
              break;

             case 23:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context3.next = 36;
                break;
              }
              Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.soundMgr.playEffect("fg_collect_popup");
              _context3.next = 28;
              return SlotsFacade.popup.showWinGold(SlotsFacade.dm.getFreeWinCoin());

             case 28:
              SlotsFacade.mainPanel.showSceneTransition();
              _context3.next = 31;
              return SlotsFacade.delayTime(2);

             case 31:
              _this2.enterNormalGame();
              _context3.next = 34;
              return SlotsFacade.delayTime(1);

             case 34:
              _context3.next = 36;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nTotal, nTotal, true, res);
              });

             case 36:
              SlotsFacade.slots.CanDoNextRound();

             case 37:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      collectEnergy: function collectEnergy() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var energyData, items, posArr;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (SlotsFacade.dm.canCollect()) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");

             case 2:
              energyData = SlotsFacade.dm.energyData;
              if (!(energyData && energyData.currRoundValue)) {
                _context4.next = 9;
                break;
              }
              items = SlotsFacade.slots.getSymbolsByServerIds(SlotsFacade.dm.getResultWildsIndex());
              posArr = [];
              items.forEach(function(v) {
                posArr.push(v.node.convertToWorldSpaceAR(cc.v2(0, 0)));
              });
              _context4.next = 9;
              return SlotsFacade.mapCollectProgress.collectEnergy(posArr, SlotsFacade.dm.getCollectPercent());

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterCollectMap: function enterCollectMap(isReconnect) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var energyData;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              energyData = SlotsFacade.dm.energyData;
              if (!(1 == energyData.openGame || 2 == energyData.openGame && SlotsFacade.dm.isFistTriggerFree())) {
                _context5.next = 9;
                break;
              }
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              if (isReconnect) {
                _context5.next = 7;
                break;
              }
              _context5.next = 7;
              return SlotsFacade.mapCollectProgress.playCollectEnd();

             case 7:
              _this3.scheduleOnce(function() {
                SlotsFacade.mapCollectProgress.setProgress(0);
                SlotsFacade.mapCollectProgress.updateEnterBtn();
              }, .5);
              return _context5.abrupt("return", new Promise(function(res) {
                SlotsFacade.map.enterMap(false, function(data) {
                  res(data);
                });
              }));

             case 9:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      enterScatterGame: function enterScatterGame(isEnterRoom) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var freeTurnTable;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              freeTurnTable = SlotsFacade.dm.freeTurnTable;
              if (!freeTurnTable) {
                _context6.next = 10;
                break;
              }
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              if (isEnterRoom) {
                _context6.next = 7;
                break;
              }
              _context6.next = 7;
              return SlotsFacade.slots.playScatter(SlotsFacade.dm.getScatterIndexs());

             case 7:
              _context6.next = 9;
              return new Promise(function(res) {
                SlotsFacade.wheelGameCmp.enterWheelGame(freeTurnTable, function(data) {
                  !data || !data.freeCnt;
                  res(data);
                });
              });

             case 9:
              return _context6.abrupt("return", _context6.sent);

             case 10:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      enterFreeGame: function enterFreeGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              SlotsFacade.mapCollectProgress.show(false);
              SlotsFacade.soundMgr.playFreeBgm();
              SlotsFacade.slots.changeSlots();
              if (!(2 == SlotsFacade.dm.energyData.openGame)) {
                _context7.next = 9;
                break;
              }
              SlotsFacade.mainPanel.showBg(2);
              _context7.next = 14;
              break;

             case 9:
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.character.toFree(!isReconnect);
              if (isReconnect) {
                _context7.next = 14;
                break;
              }
              _context7.next = 14;
              return SlotsFacade.delayTime(2);

             case 14:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      enterNormalGame: function enterNormalGame() {
        Global.SlotsSoundMgr.stopBgm();
        SlotsFacade.bottomCmp.ShowFreeModel(false);
        SlotsFacade.mainPanel.showBg(0);
        SlotsFacade.character.toNormal(false);
        SlotsFacade.mapCollectProgress.show(true);
        SlotsFacade.soundMgr.playBgm();
        SlotsFacade.slots.clearFreeSymbols();
        SlotsFacade.slots.changeSlots();
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86cfelLygxC/5BgfFskF6nt", "Magician_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        resultCards: [],
        extraWildIndexs: [],
        energyData: null,
        mapFreeGameData: null
      },
      init: function init(data, gameId) {
        this._super(data, gameId);
        this.energyData = this._deskInfo.colection;
        this.freeTurnTable = this._deskInfo.freeTurnTable;
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this.energyData = msg.mapInfo;
          this.bonusData = msg.epicInfo;
          msg.randomData && msg.randomData.wild_idxs ? this.extraWildIndexs = msg.randomData.wild_idxs : this.extraWildIndexs = null;
          msg.energyData && (this.energyData = msg.energyData);
          this.freeTurnTable = msg.freeTurnTable;
          this.mapFreeGameData = msg.mapFreeGameData;
        }
        this._super(msg);
      },
      getSpinData: function getSpinData() {
        return this._gameInfo;
      },
      hasExtraWild: function hasExtraWild() {
        return this.extraWildIndexs && this.extraWildIndexs.length > 0;
      },
      getResultWildsIndex: function getResultWildsIndex() {
        var cards = this.getSpinData().resultCards;
        if (!cards || cards.length < 1) return [];
        var ret = [];
        cards.forEach(function(v, i) {
          1 == v && ret.push(i + 1);
        });
        return ret;
      },
      getScatterIndexs: function getScatterIndexs() {
        var ret = [];
        var cards = this.getSpinData().resultCards;
        if (!cards || cards.length < 1) return ret;
        for (var i = 0; i < cards.length; i++) 2 == cards[i] && ret.push(i + 1);
        return ret;
      },
      reqSubGame: function reqSubGame(gameType) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA,
          gameid: this._gameId,
          data: {
            rtype: gameType
          }
        };
        cc.vv.NetManager.send(req, true);
      },
      canCollect: function canCollect() {
        return this.GetBetIdx() >= this.energyData.needBet;
      },
      getCollectPercent: function getCollectPercent() {
        var percent = 0;
        var data = this.energyData;
        if (data) {
          percent = data.currValue / data.fullValue;
          percent = Math.max(0, percent);
          percent = Math.min(1, percent);
        }
        return percent;
      },
      hasFree: function hasFree() {
        return this.GetFreeTime() > 0;
      },
      isLastEndFree: function isLastEndFree() {
        return 0 == this.GetFreeTime() && this.GetTotalFree() > 0;
      },
      isFistTriggerFree: function isFistTriggerFree() {
        return this.hasFree() && this.GetFreeTime() == this.GetTotalFree();
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._gameInfo.freeWinCoin;
      },
      addFreeCnt: function addFreeCnt(cnt) {
        this._deskInfo.restFreeCount += cnt;
        this._deskInfo.allFreeCount += cnt;
      },
      hasMultipleSlot: function hasMultipleSlot() {
        return this.mapFreeGameData && this.mapFreeGameData.length > 0;
      },
      isFirstTriggerMultipleSlot: function isFirstTriggerMultipleSlot() {
        return this.hasMultipleSlot() && this.isFistTriggerFree();
      },
      isEndMultipleSlot: function isEndMultipleSlot() {
        return this.hasMultipleSlot() && !this.hasFree();
      },
      getExtraWildIndexs: function getExtraWildIndexs() {
        if (this.hasExtraWild()) return this.extraWildIndexs;
        return [];
      },
      getSlotsCnt: function getSlotsCnt() {
        return 2 == this.energyData.openGame ? this.getGameCfg().mapCfg[this.energyData.map_idx.toString()].slot.cnt : 1;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Magician_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84405ysxHxEuJrbJKIZ6+5Y", "Magician_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this.InitCommComponent();
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("Magician_MainPanel");
        this.flowCtrl = this.addComponent("Magician_FlowCtrl");
        this.soundMgr = this.mainPanel.addComponent("Magician_Sound");
        this.extraWildCmp = this.mainPanel.extra_wild_game_node.getComponent("Magician_ExtraWildGame");
        this.wheelGameCmp = this.mainPanel.wheel_game_node.addComponent("Magician_WheelGame");
        this.map = this.mainPanel.map_game_node.addComponent("Magician_Map");
        this.mapCollectProgress = this.mainPanel.collect_progress.getComponent("Magician_MapCollectProgress");
        this.popup = this.mainPanel.popup.getComponent("Magician_Popup");
        this.character = this.mainPanel.character_node.getComponent("Magician_Character");
        this.prizePool = cc.find("safe_node/LMSlots_PrizePool_1", this.node);
        this.topCmp = cc.vv.gameData.GetTopScript();
        this.bottomCmp = cc.vv.gameData.GetBottomScript();
        this.slots = cc.vv.gameData.GetSlotsScript();
      },
      onDestroy: function onDestroy() {
        window.SlotsFacade = null;
        this.dm = null;
      },
      delayTime: function delayTime(time) {
        var _this = this;
        return new Promise(function(res, rej) {
          _this.scheduleOnce(function() {
            res();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Magician_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2f30bQIdtJ37yJt2jp5K1X", "Magician_MainPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Node,
        character_node: cc.Node,
        slots: cc.Node,
        collect_progress: cc.Node,
        extra_wild_game_node: cc.Node,
        map_game_node: cc.Node,
        wheel_game_node: cc.Node,
        popup: cc.Node,
        operate_node: cc.Node,
        transition_node: cc.Node
      },
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.logo_spine = cc.find("logo_spine", this.node);
        this.slots = this.node.getChildByName("slots");
        this.character_node = this.slots.getChildByName("character_node");
        this.collect_progress = this.slots.getChildByName("collect_progress");
        this.extra_wild_game_node = this.slots.getChildByName("extra_wild_game_node");
        this.map_game_node = this.node.getChildByName("map_game_node");
        this.wheel_game_node = this.node.getChildByName("wheel_game_node");
        this.popup = this.node.getChildByName("popup");
        this.operate_node = this.node.getChildByName("operate_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.wheel_transition_ani = this.node.getChildByName("wheel_transition_ani");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.spineSceneTransition = this.transition_node.getChildByName("screen_transition").getComponent(sp.Skeleton);
      },
      showBg: function showBg(type) {
        type = type || 0;
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
        this.character_node.active = 2 != type;
        this.jpNode.active = 2 != type;
        this.collect_progress.active = 0 == type;
      },
      showSceneTransition: function showSceneTransition(cmpHandler) {
        var _this = this;
        Global.SlotsSoundMgr.stopBgm();
        SlotsFacade.soundMgr.playEffect("fg_trigger_popup");
        this.spineSceneTransition.node.active = true;
        this.spineSceneTransition.setAnimation(0, "animation5", false);
        this.spineSceneTransition.setCompleteListener(function() {
          _this.spineSceneTransition.setCompleteListener(null);
          _this.spineSceneTransition.node.active = false;
          cmpHandler && cmpHandler();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_MapCollectProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96d8b2+dJlNkpG6aH0OYQiE", "Magician_MapCollectProgress");
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
        percent: 0,
        _isCollectState: false,
        btn_enter: cc.Node,
        progressBar: cc.Node,
        spine_rabbit: sp.Skeleton,
        spine_tips: sp.Skeleton,
        spine_collect_end: sp.Skeleton,
        collect_track_particle: cc.Node,
        rule_tips: cc.Node,
        isOpen: false,
        canTouch: true
      },
      onLoad: function onLoad() {
        this._initListener();
        this.updateEnterBtn();
      },
      start: function start() {
        this.setProgress(SlotsFacade.dm.getCollectPercent());
        this.showCollect(true);
      },
      _initListener: function _initListener() {
        var _this = this;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this.showCollect(false);
        }, this);
        this.btn_enter.on(cc.Node.EventType.TOUCH_END, this._onEnterHandler.bind(this), this);
        this.progressBar.on(cc.Node.EventType.TOUCH_END, function() {
          _this.isOpen ? _this._showCollectTips() : _this._openCollect();
        }, this);
      },
      _showCollectTips: function _showCollectTips() {
        var tips = this.rule_tips;
        if (tips.active) return;
        tips.active = true;
        tips.opacity = 0;
        cc.tween(tips).to(1, {
          opacity: 255
        }).delay(3).to(1, {
          opacity: 0
        }).call(function() {
          tips.active = false;
        }).start();
      },
      _onEnterHandler: function _onEnterHandler() {
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
        SlotsFacade.map.enterMap(true, function() {
          SlotsFacade.bottomCmp.ShowBtnsByState("idle");
        });
      },
      _openCollect: function _openCollect() {
        if (this.isOpen) return;
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        var betList = SlotsFacade.dm.GetBetMults();
        var needBet = SlotsFacade.dm.energyData.needBet;
        if (needBet > betList.length) return;
        SlotsFacade.dm.SetBetIdx(needBet);
        cc.vv.gameData._serverRawMult = needBet;
        cc.vv.UserManager.setEnterSelectBet(null);
        SlotsFacade.bottomCmp.ShowBetCoin();
        var nTotal = cc.vv.gameData.GetTotalBet();
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, nTotal);
      },
      collectEnergy: function collectEnergy(globalPosArr, percent) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var parentNode, tempPos, endPos, promiseArr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              parentNode = cc.find("safe_node", SlotsFacade.node);
              tempPos = _this2.spine_rabbit.node.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = parentNode.convertToNodeSpaceAR(tempPos);
              promiseArr = [];
              globalPosArr.forEach(function(v) {
                var pos = parentNode.convertToNodeSpaceAR(v);
                var lz = cc.instantiate(_this2.collect_track_particle);
                lz.parent = parentNode;
                lz.x = pos.x;
                lz.y = pos.y;
                lz.active = true;
                var p = lz.getComponent(cc.ParticleSystem);
                p.resetSystem();
                promiseArr.push(new Promise(function(res) {
                  cc.tween(lz).to(.5, {
                    x: endPos.x,
                    y: endPos.y
                  }).call(function() {
                    lz.removeFromParent();
                    res();
                  }).start();
                }));
                SlotsFacade.soundMgr.playEffect("collect");
              });
              _context.next = 7;
              return Promise.all(promiseArr);

             case 7:
              _this2.setProgress(percent, true);
              _this2.spine_rabbit.setAnimation(0, "animation2", false);

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showCollect: function showCollect(isInit) {
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          if (!this.isOpen) if (isInit) this.spine_tips.node.active = false; else {
            this.spine_tips.node.active = true;
            this.spine_tips.setAnimation(0, "animation2", false);
            SlotsFacade.soundMgr.playEffect("unlock");
          }
        } else {
          this.spine_tips.node.active = true;
          if (isInit) this.spine_tips.setAnimation(0, "animation1", false); else if (this.isOpen) {
            this.spine_tips.setAnimation(0, "animation1", false);
            SlotsFacade.soundMgr.playEffect("lock");
          }
        }
        this.isOpen = boo;
      },
      playCollectEnd: function playCollectEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var barEffect, vo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("full");
              barEffect = _this3.progressBar.getChildByName("bar").getChildByName("spine").getComponent(sp.Skeleton);
              barEffect.node.active = true;
              barEffect.setAnimation(0, "animation2", false);
              barEffect.setCompleteListener(function() {
                barEffect.setCompleteListener(null);
                barEffect.node.active = false;
              });
              vo = SlotsFacade.dm.getGameCfg().mapCfg[SlotsFacade.dm.energyData.map_idx];
              if (!vo) {
                _context2.next = 9;
                break;
              }
              _context2.next = 9;
              return new Promise(function(res) {
                _this3.spine_collect_end.node.active = true;
                _this3.spine_collect_end.setAnimation(0, "animation" + vo.type, false);
                _this3.spine_collect_end.setCompleteListener(function() {
                  _this3.spine_collect_end.setCompleteListener(null);
                  _this3.spine_collect_end.node.active = false;
                  res();
                });
              });

             case 9:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      setProgress: function setProgress(percent, needTransform) {
        var w = this.progressBar.width;
        var bar = this.progressBar.getChildByName("bar");
        var toX = percent * w - w;
        needTransform ? cc.tween(bar).to(.5, {
          x: toX
        }).call(function() {
          var effect = bar.getChildByName("spine").getComponent(sp.Skeleton);
          effect.node.active = true;
          effect.setAnimation(0, "animation1", false);
          effect.setCompleteListener(function() {
            effect.setCompleteListener(null);
            effect.node.active = false;
          });
        }).start() : bar.x = toX;
      },
      show: function show(boo) {
        this.node.active = boo;
      },
      updateEnterBtn: function updateEnterBtn() {
        var energyData = SlotsFacade.dm.energyData;
        var nextId = energyData.map_idx + 1;
        var vo = SlotsFacade.dm.getGameCfg().mapCfg[nextId];
        if (vo) {
          var imgCmp = this.btn_enter.getComponent("ImgSwitchCmp");
          3 == vo.type ? imgCmp.setIndex(vo.slot.cnt) : imgCmp.setIndex(vo.type - 1);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_MapWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c7c7KE5DFBibKF/G4FcS4S", "Magician_MapWheel");
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
        machine: {
          default: null,
          visible: false
        },
        roundCount: 10,
        _canSpin: false,
        _wheel_type: 0,
        _callBack: null,
        _data: null,
        wheel: cc.Node,
        bg: cc.Node,
        board: cc.Node,
        btn_spin: cc.Node,
        spine_btn_spin: sp.Skeleton,
        spine_fire: sp.Skeleton,
        spine_win: sp.Skeleton,
        spine_wheel_bg: sp.Skeleton,
        label_start_prize: cc.Label
      },
      _getRotation: function _getRotation(index) {
        var ret = 360 * -this.roundCount;
        var unitAngle = 60;
        var indexsAngle = [ 0, 1 * unitAngle - 360, 2 * unitAngle - 360, 3 * unitAngle - 360, 4 * unitAngle - 360, 5 * unitAngle - 360 ];
        ret += indexsAngle[index];
        return ret;
      },
      onLoad: function onLoad() {
        this._initListener();
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this._onSubGameData, false, this);
      },
      _initListener: function _initListener() {
        this.btn_spin.on(cc.Node.EventType.TOUCH_END, this._onStartWheelHandler, this);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this._onSubGameData, this);
      },
      _onSubGameData: function _onSubGameData(msg) {
        if (msg && msg.data && 1 == msg.data.rtype) {
          this._data = msg.data;
          this._startWheel();
        }
      },
      _onStartWheelHandler: function _onStartWheelHandler() {
        if (!this._canSpin) return;
        this.btn_spin.stopAllActions();
        this._canSpin = false;
        SlotsFacade.soundMgr.playEffect("spin");
        SlotsFacade.dm.reqSubGame(1);
      },
      _reset: function _reset() {
        this.board.angle = 0;
        this.bg.active = false;
        this.wheel.active = false;
        this.wheel.y = this.wheel.height / 2;
        this.spine_btn_spin.node.active = false;
        this.spine_wheel_bg.node.active = false;
        this.spine_win.node.active = false;
        this.spine_fire.active = false;
        this.label_start_prize.string = "";
      },
      _startWheel: function _startWheel() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.spine_btn_spin.node.active = false;
              _this.btn_spin.getComponent("ImgSwitchCmp").setIndex(_this._wheel_type + 2);
              _this.spine_fire.node.active = true;
              _this.spine_wheel_bg.node.active = true;
              SlotsFacade.soundMgr.playEffect("wheel_roll");
              _context.next = 7;
              return new Promise(function(res) {
                cc.tween(_this.board).to(4, {
                  angle: _this._getRotation(_this._data.idx - 1)
                }, {
                  easing: "quartInOut"
                }).call(function() {
                  _this._data.coin ? SlotsFacade.soundMgr.playEffect("map_button") : SlotsFacade.soundMgr.playEffect("pass1");
                  res();
                }).start();
              });

             case 7:
              _this.spine_fire.node.active = false;
              _this.spine_wheel_bg.node.active = false;
              _this.spine_win.node.active = true;
              _this.spine_win.setAnimation(0, "animation" + (_this._wheel_type + 1), true);
              _context.next = 13;
              return SlotsFacade.delayTime(2);

             case 13:
              _this._completeWheel();

             case 14:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _completeWheel: function _completeWheel() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!_this2._data.coin) {
                _context2.next = 4;
                break;
              }
              SlotsFacade.soundMgr.playEffect("jp_collect_popup");
              _context2.next = 4;
              return SlotsFacade.popup.showWinGold(_this2._data.coin, 1);

             case 4:
              _context2.next = 6;
              return _this2.close();

             case 6:
              _this2._callBack && _this2._callBack(_this2._data);

             case 7:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _freshView: function _freshView() {
        this.btn_spin.getComponent("ImgSwitchCmp").setIndex(this._wheel_type);
        this.wheel.getChildByName("bar_left").getComponent("ImgSwitchCmp").setIndex(this._wheel_type);
        this.wheel.getChildByName("bar_right").getComponent("ImgSwitchCmp").setIndex(this._wheel_type);
        this.board.getComponent("ImgSwitchCmp").setIndex(this._wheel_type);
        this.wheel.getChildByName("arrow").getComponent("ImgSwitchCmp").setIndex(this._wheel_type);
      },
      open: function open(cb, data) {
        this._callBack = cb;
        this.node.active = true;
        this._reset();
        this._wheel_type = data.wheel_type;
        this._canSpin = true;
        this._freshView();
        var startPrice = data.startPrice;
        if (!data.startPrice) {
          startPrice = 0;
          console.log("#error#startPrice is illegal");
        }
        this.label_start_prize.string = Global.FormatNumToComma(Math.floor(startPrice));
        this.bg.active = true;
        this.bg.opacity = 1;
        this.bg.runAction(cc.fadeTo(1, 200));
        this.wheel.active = true;
        cc.tween(this.wheel).to(.5, {
          y: 0
        }, {
          easing: "backOut"
        }).start();
        this.spine_btn_spin.node.active = true;
        this.spine_btn_spin.setAnimation(0, "animation", true);
        this.btn_spin.getComponent("ImgSwitchCmp").setIndex(this._wheel_type);
        cc.vv.gameData.checkAutoPlay(this.btn_spin, this._onStartWheelHandler.bind(this));
      },
      close: function close() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(res) {
                cc.tween(_this3.bg).to(.5, {
                  opacity: 0
                }).call(function() {
                  _this3.bg.active = false;
                }).start();
                cc.tween(_this3.wheel).to(.5, {
                  y: _this3.wheel.height / 2
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this3.wheel.active = false;
                  _this3.node.active = false;
                  res();
                }).start();
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a7fanWkfFA7b/4FnRa8t5P", "Magician_Map");
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
    var CollectGameMap = cc.Class({
      extends: cc.Component,
      properties: {
        machine: {
          default: null,
          visible: false
        },
        callBack: null,
        _mapWheel: null,
        map_game_node: null,
        bg: null,
        btn_close: null,
        scrollView: null,
        map_flag: null
      },
      onLoad: function onLoad() {
        this._bindView();
        this._initListener();
        this._reset();
      },
      _bindView: function _bindView() {
        this.map_game_node = this.node;
        this._mapWheel = this.map_game_node.getChildByName("map_wheel_node").getComponent("Magician_MapWheel");
        this.bg = this.map_game_node.getChildByName("bg");
        this.btn_close = this.map_game_node.getChildByName("btn_close").getComponent(cc.Button);
        this.scrollView = this.map_game_node.getChildByName("scrollview").getComponent(cc.ScrollView);
        this.map_flag = this.scrollView.content.getChildByName("map_flag");
        var mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
        for (var i = 1; i <= 100; i++) {
          var item = this.scrollView.content.getChildByName(i.toString());
          item["id"] = i;
          var icon = item.getChildByName("icon");
          var vo = mapCfg[i.toString()];
          3 != vo.type && icon.getComponent("ImgSwitchCmp").setIndex(vo.type - 1);
          item.getChildByName("label_step").getComponent(cc.Label).string = i.toString();
        }
      },
      _initListener: function _initListener() {
        this.btn_close.node.on("click", this._onBtnCloseHandler.bind(this), this);
      },
      _onBtnCloseHandler: function _onBtnCloseHandler() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("map_button");
              _this.btn_close.interactable = false;
              cc.tween(_this.btn_close.node).to(.3, {
                scale: 0
              }, {
                easing: "backIn"
              }).call(function() {
                _this.exitMap();
              }).start();

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitMap: function exitMap(data) {
        var _this2 = this;
        var svNode = this.scrollView.node;
        cc.tween(svNode).to(.3, {
          y: svNode.height
        }, {
          easing: "cubicOut"
        }).call(function() {
          _this2._reset();
          if (_this2.callBack) {
            _this2.callBack(data);
            _this2.callBack = null;
          }
        }).start();
      },
      enterMap: function enterMap(isView, cb) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var data, currIndex, item, mapCfg, vo, respData;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3.callBack = cb;
              _this3.map_game_node.active = true;
              _context2.next = 4;
              return new Promise(function(res) {
                _this3.bg.active = true;
                _this3.bg.opacity = 0;
                cc.tween(_this3.bg).to(.5, {
                  opacity: 100
                }).call(function() {
                  res();
                }).start();
              });

             case 4:
              data = SlotsFacade.dm.energyData;
              currIndex = data.map_idx;
              !isView && data.openGame > 0 && (currIndex -= 1);
              _this3._freshMap(currIndex);
              if (currIndex > 0) {
                item = _this3.scrollView.content.getChildByName(currIndex.toString());
                _this3.scrollView.scrollToOffset(cc.v2(0, Math.abs(item.y) - 2 * _this3.scrollView.node.height / 3));
              } else _this3.scrollView.scrollToBottom();
              _context2.next = 11;
              return _this3._scrollViewShow();

             case 11:
              if (!isView) {
                _context2.next = 15;
                break;
              }
              _this3._showCloseBtn();
              _context2.next = 30;
              break;

             case 15:
              _context2.next = 17;
              return _this3._moveMapFlag(data.map_idx);

             case 17:
              mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
              vo = mapCfg[data.map_idx.toString()];
              if (!(3 != vo.type)) {
                _context2.next = 29;
                break;
              }
              _context2.next = 22;
              return new Promise(function(res) {
                _this3._mapWheel.open(function(ret) {
                  res(ret);
                }, {
                  wheel_type: vo.type - 1,
                  startPrice: SlotsFacade.dm.energyData.startPrize
                });
              });

             case 22:
              respData = _context2.sent;
              if (!respData.extraFreeCnt) {
                _context2.next = 26;
                break;
              }
              _context2.next = 26;
              return _this3._addHouseFreeCnt(data.map_idx);

             case 26:
              _this3.exitMap();
              _context2.next = 30;
              break;

             case 29:
              _this3.exitMap({
                freeCnt: 5 + (data.extraFreeCnt || 0)
              });

             case 30:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _addHouseFreeCnt: function _addHouseFreeCnt(currIndex) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(res) {
                var item = _this4._findNextHouse(currIndex);
                if (item) {
                  var data = SlotsFacade.dm.energyData;
                  var extraFreeCnt = data.extraFreeCnt + 1 || 0;
                  SlotsFacade.dm.energyData.extraFreeCnt = extraFreeCnt;
                  item.getChildByName("label_free_count").getComponent("ImgSwitchCmp").setIndex(extraFreeCnt);
                  var spine = item.getChildByName("spine_free_count_change").getComponent(sp.Skeleton);
                  spine.setAnimation(0, "animation", false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    res();
                  });
                } else res();
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _findNextHouse: function _findNextHouse(currIndex) {
        var mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
        for (var i = currIndex; i <= 100; i++) {
          var vo = mapCfg[i.toString()];
          if (3 == vo.type) return this.scrollView.content.getChildByName(i.toString());
        }
        return null;
      },
      _moveMapFlag: function _moveMapFlag(toIdx) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var mapCfg, vo, item;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
              vo = mapCfg[toIdx.toString()];
              item = _this5.scrollView.content.getChildByName(toIdx.toString());
              _context4.next = 5;
              return new Promise(function(res) {
                var pos = item.getChildByName("pos");
                cc.tween(_this5.map_flag).to(1, {
                  x: item.x + pos.x,
                  y: item.y + pos.y
                }).call(function() {
                  res();
                }).start();
              });

             case 5:
              _context4.next = 7;
              return new Promise(function(res) {
                var animationName = "";
                animationName = 3 == vo.type ? "animation" + (vo.slot.cnt - 1) : "animation" + vo.type;
                var icon = null;
                if (3 != vo.type) {
                  icon = item.getChildByName("icon");
                  icon.active = false;
                  SlotsFacade.soundMgr.playEffect("pass3");
                } else SlotsFacade.soundMgr.playEffect("pass2");
                var spine = item.getChildByName("spine").getComponent(sp.Skeleton);
                spine.setAnimation(0, animationName, false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  icon && (icon.active = true);
                  res();
                });
              });

             case 7:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _freshMap: function _freshMap(currIndex) {
        for (var i = 1; i <= currIndex; i++) this._markItemCmp(i);
        if (currIndex > 0) {
          var item = this.scrollView.content.getChildByName(currIndex.toString());
          var pos = item.getChildByName("pos");
          this.map_flag.x = item.x + pos.x;
          this.map_flag.y = item.y + pos.y;
          var houseItem = this._findNextHouse(currIndex);
          var index = SlotsFacade.dm.energyData.extraFreeCnt || 0;
          houseItem.getChildByName("label_free_count").getComponent("ImgSwitchCmp").setIndex(index);
        }
      },
      _markItemCmp: function _markItemCmp(index) {
        var mapCfg = SlotsFacade.dm.getGameCfg().mapCfg;
        var vo = mapCfg[index.toString()];
        var item = this.scrollView.content.getChildByName(index.toString());
        var color = new cc.Color().fromHEX("#898989");
        item.getChildByName("icon").color = color;
        item.getChildByName("label_step").color = color;
        if (3 != vo.type) {
          var spine = item.getChildByName("spine").getComponent(sp.Skeleton);
          spine.node.color = color;
          spine.node.active = true;
          1 == vo.type ? spine.setAnimation(0, "animation1_2", true) : spine.setAnimation(0, "animation2_2", true);
        } else item.getChildByName("label_free_count").active = false;
      },
      _scrollViewShow: function _scrollViewShow() {
        var _this6 = this;
        return new Promise(function(res) {
          var svNode = _this6.scrollView.node;
          svNode.active = true;
          cc.tween(svNode).to(.5, {
            y: 0
          }, {
            easing: "backOut"
          }).call(function() {
            res();
          }).start();
        });
      },
      _showCloseBtn: function _showCloseBtn() {
        var _this7 = this;
        return new Promise(function(res) {
          _this7.btn_close.node.active = true;
          _this7.btn_close.node.scale = 0;
          _this7.btn_close.interactable = true;
          cc.tween(_this7.btn_close.node).to(.3, {
            scale: 1
          }, {
            easing: "backOut"
          }).call(function() {
            res();
          }).start();
        });
      },
      _reset: function _reset() {
        this.bg.active = false;
        this.scrollView.node.active = false;
        this.scrollView.node.y = this.scrollView.node.height / 2;
        this.btn_close.node.active = false;
        this.map_game_node.active = false;
      },
      _delayTime: function _delayTime(time) {
        var _this8 = this;
        return new Promise(function(res, rej) {
          _this8.scheduleOnce(function() {
            res();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd50aOi37FJ/7PmmPPe+wZS", "Magician_Popup");
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
        bg: cc.Node
      },
      onLoad: function onLoad() {},
      _showPopup: function _showPopup(param, cb) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, spine, rollLabel, btn_ok, handler;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.bg.active = true;
              panel = _this.node.getChildByName(param.popupName);
              panel.active = true;
              spine = null;
              if (param.startAniName) {
                spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, param.startAniName, false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  spine.setAnimation(0, param.idelAniName, true);
                });
              }
              rollLabel = panel.getChildByName("label_win").getComponent("LabelRollCmp");
              rollLabel.node.active = true;
              rollLabel.node.scale = 0;
              cc.tween(rollLabel.node).delay(.1).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              param.labelNeedRoll ? rollLabel.startRoll(0, param.labelValue) : rollLabel.value = param.labelValue;
              btn_ok = panel.getChildByName("btn_ok");
              btn_ok.scale = 0;
              btn_ok.active = true;
              btn_ok.getComponent(cc.Button).interactable = true;
              cc.tween(btn_ok).delay(.1).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context.next = 17;
              return cc.vv.gameData.awaitTime(.6);

             case 17:
              handler = function handler() {
                Global.SlotsSoundMgr.playEffect("common_click");
                btn_ok.stopAllActions();
                btn_ok.getComponent(cc.Button).interactable = false;
                btn_ok.off(cc.Node.EventType.TOUCH_END, handler);
                _this.bg.active = false;
                var promisesArr = [];
                promisesArr.push(new Promise(function(res) {
                  spine.setAnimation(0, param.endAniName, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    res();
                  });
                }));
                promisesArr.push(new Promise(function(res) {
                  cc.tween(btn_ok).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    btn_ok.active = false;
                    res();
                  }).start();
                }));
                promisesArr.push(new Promise(function(res) {
                  cc.tween(rollLabel.node).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    rollLabel.node.active = false;
                    res();
                  }).start();
                }));
                Promise.all(promisesArr).then(function(results) {
                  panel.active = false;
                  cb && cb();
                });
              };
              cc.vv.gameData.checkAutoPlay(btn_ok, handler);
              btn_ok.on(cc.Node.EventType.TOUCH_END, handler);

             case 20:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinGold: function showWinGold(goldNumb, goldType) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var param;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              param = {
                popupName: "win_gold_dialog",
                startAniName: "animation1",
                idelAniName: "animation1_1",
                endAniName: "animation1_2",
                labelValue: goldNumb,
                labelNeedRoll: true
              };
              _context2.t0 = goldType;
              _context2.next = 1 === _context2.t0 ? 4 : 2 === _context2.t0 ? 6 : 8;
              break;

             case 4:
              param = {
                popupName: "win_gold_dialog_type1",
                startAniName: "animation1",
                idelAniName: "animation2",
                endAniName: "animation3",
                labelValue: goldNumb,
                labelNeedRoll: true
              };
              return _context2.abrupt("break", 10);

             case 6:
              param = {
                popupName: "win_gold_dialog_type2",
                startAniName: "animation1",
                idelAniName: "animation1_1",
                endAniName: "animation1_2",
                labelValue: goldNumb,
                labelNeedRoll: true
              };
              return _context2.abrupt("break", 10);

             case 8:
              param = {
                popupName: "win_gold_dialog_type3",
                startAniName: "animation1",
                idelAniName: "animation1_1",
                endAniName: "animation1_2",
                labelValue: goldNumb,
                labelNeedRoll: true
              };
              return _context2.abrupt("break", 10);

             case 10:
              _context2.next = 12;
              return new Promise(function(res, rej) {
                _this2._showPopup(param, res);
              });

             case 12:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinJackportGold: function showWinJackportGold(goldNumb) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var param;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              param = {
                popupName: "win_gold_dialog_type3",
                startAniName: "animation1_1",
                idelAniName: "animation1_3",
                endAniName: "animation1_4",
                labelValue: goldNumb,
                labelNeedRoll: true
              };
              _context3.next = 3;
              return new Promise(function(res, rej) {
                _this3._showPopup(param, res);
              });

             case 3:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showWinFreeCnt: function showWinFreeCnt(cnt) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var param;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              param = {
                popupName: "win_free_cnt_dialog",
                startAniName: "animation2",
                idelAniName: "animation2_1",
                endAniName: "animation2_2",
                labelValue: cnt,
                labelNeedRoll: false
              };
              _context4.next = 3;
              return new Promise(function(res, rej) {
                _this4._showPopup(param, res);
              });

             case 3:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06cc8KY6i5PspQSFJO1wF4y", "Magician_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {
        wildMask: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
        this.wildMask = this.node.getChildByName("wild_mask");
      },
      showWildMask: function showWildMask(boo) {
        this.wildMask && (this.wildMask.active = boo);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Magician_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8d904XJNJH2LtZcDrdDYkV", "Magician_Slots");
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
      extends: require("LMSlots_Slots_Base"),
      properties: {
        MaxSlotsCnt: 4,
        _slotsCnt: 1,
        _unitSlotColCnt: 5,
        _nowJpLockWeight: 0,
        _nowJpUnlockWeight: 0
      },
      Init: function Init() {
        this._super();
        this.changeSlots();
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this.getCurReels());
        this._stopTime = this.GetStopTime();
        0 == SlotsFacade.dm.GetTotalFree() && Global.SlotsSoundMgr.playNormalBgm();
        SlotsFacade.extraWildCmp.hideWild();
      },
      onMsgSpine: function onMsgSpine(msg) {
        SlotsFacade.flowCtrl.onMsgSpine(msg);
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var selfCol = this._unitSlotColCnt * this._slotsCnt;
        var col = (idx - 1) % selfCol;
        var row = this._row - Math.floor((idx - 1) / selfCol) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      SetSlotsResult: function SetSlotsResult(msg) {
        var cardsList = msg.resultCards;
        if (msg.mapFreeGameData && msg.mapFreeGameData.length > 0) {
          cardsList = [];
          for (var i = 0; i < this._row; i++) {
            var _iterator = _createForOfIteratorHelper(msg.mapFreeGameData), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var slotResult = _step.value;
                for (var j = 0; j < this._unitSlotColCnt; j++) cardsList.push(slotResult.cards[i * this._unitSlotColCnt + j]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
        var reelResults = [];
        var aCol = this.getCurrReelCnt();
        var bonusCoinIdxs = SlotsFacade.dm.getSpinData().bonusCoinIdxs || [];
        bonusCoinIdxs = bonusCoinIdxs.concat();
        var bonusCoins = SlotsFacade.dm.getSpinData().bonusCoins || [];
        bonusCoins = bonusCoins.concat();
        for (var _i = 0; _i < cardsList.length; _i++) {
          var row = Math.floor(_i / aCol);
          var col = _i % aCol;
          if (this._cfg.symbol[cardsList[_i]]) {
            var res = {};
            res.sid = cardsList[_i];
            if (bonusCoinIdxs.length && bonusCoinIdxs[0] == _i + 1) {
              res.data = bonusCoins[0];
              bonusCoinIdxs.shift();
              bonusCoins.shift();
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _j = 0; _j < 5 * this._slotsCnt; _j++) {
          var item = this._reels[_j];
          var reelRes = reelResults[_j];
          item.SetResult(reelRes);
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this = this;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._unitSlotColCnt;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator2 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step2;
        try {
          var _loop = function _loop() {
            var info = _step2.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            for (var _i2 = 0; _i2 < reelResults.length; _i2++) {
              var item = _this._reels[_i2];
              var reelRes = reelResults[_i2];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i2] > 0 && (stateInfo.isAnt = true);
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
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) _loop();
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      hasScatter: function hasScatter(colIdx) {
        var scatterId = cc.vv.gameData.getGameCfg().scatterId;
        var sysResult = this._reels[colIdx]._symbols;
        for (var j = 0; j < 3; j++) if (sysResult[j].GetShowId() == scatterId) return true;
        return false;
      },
      OnSpinEnd: function OnSpinEnd() {
        SlotsFacade.flowCtrl.spinEnd();
      },
      ReconnectShow: function ReconnectShow() {
        this.scheduleOnce(function() {
          SlotsFacade.flowCtrl.enterRoom();
        });
      },
      playScatter: function playScatter(indexs) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              indexs.forEach(function(element) {
                var item = _this2.GetSymbolByIdx(element);
                item.setAnimationToTop(false);
                item.playTriggerAnimation();
              });
              _context.next = 4;
              return SlotsFacade.delayTime(1.5);

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      getSymbolsByServerIds: function getSymbolsByServerIds(ids) {
        var _this3 = this;
        var ret = [];
        ids.forEach(function(element) {
          ret.push(_this3.GetSymbolByIdx(element));
        });
        return ret;
      },
      getCurReels: function getCurReels() {
        return this._reels.slice(0, this.getCurrReelCnt());
      },
      getCurrReelCnt: function getCurrReelCnt() {
        return this._slotsCnt * this._unitSlotColCnt;
      },
      showSlots: function showSlots() {
        for (var i = 1; i <= this.MaxSlotsCnt; i++) cc.find("reels_bg" + i, this.node).active = i <= this._slotsCnt;
        var cnt = this.getCurrReelCnt();
        for (var _i3 = 0; _i3 < this._col; _i3++) this._reels[_i3].node.active = _i3 < cnt;
        this._slotsCnt <= 2 ? this.node.scale = 1 : 3 == this._slotsCnt ? this.node.scale = .8 : 4 == this._slotsCnt && (this.node.scale = .65);
      },
      showSlotsWildMask: function showSlotsWildMask() {
        if (this._slotsCnt > 1) {
          var wildCols = SlotsFacade.dm.getGameCfg().mapCfg[SlotsFacade.dm.energyData.map_idx + ""].slot.wilds;
          for (var i = 0; i < this._reels.length; i++) {
            var col = i % 5 + 1;
            this._reels[i].showWildMask(wildCols.includes(col));
          }
        } else for (var _i4 = 0; _i4 < this._unitSlotColCnt; _i4++) this._reels[_i4].showWildMask(false);
      },
      changeSlots: function changeSlots() {
        this._slotsCnt = SlotsFacade.dm.getSlotsCnt();
        SlotsFacade.mainPanel.logo_spine.active = 4 != this._slotsCnt && 1 != this._slotsCnt;
        this.showSlotsWildMask();
        this.showSlots();
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        var freeGameSlots = SlotsFacade.dm.getSpinData().mapFreeGameData;
        if (freeGameSlots && freeGameSlots.length > 0) for (var n in freeGameSlots) {
          var zjLuxian = freeGameSlots[n].traceResult;
          for (var i = 0; i < zjLuxian.length; i++) {
            var item = zjLuxian[i];
            for (var idx = 0; idx < item.indexs.length; idx++) {
              var posIdx = item.indexs[idx];
              var row = Math.floor((posIdx - 1) / 5);
              var col = (posIdx - 1) % 5;
              allWinIdx[5 * row * this._slotsCnt + 5 * n + col + 1] = 1;
            }
          }
        } else {
          var spinData = SlotsFacade.dm.getSpinData();
          for (var _i5 = 0; _i5 < spinData.zjLuXian.length; _i5++) {
            var _item = spinData.zjLuXian[_i5];
            for (var _idx = 0; _idx < _item.indexs.length; _idx++) allWinIdx[_item.indexs[_idx]] = 1;
          }
        }
        var reels = this.getCurReels();
        var reelsLen = reels.length;
        for (var _i6 = 0; _i6 < reelsLen; _i6++) {
          var r = reels[_i6];
          var flags = [ false, false, false ];
          for (var j = 0; j < 3; j++) {
            var s = r._symbols[j];
            var _idx2 = (2 - j) * reelsLen + (_i6 + 1);
            1 == s.GetShowId() && allWinIdx[_idx2] && (flags[j] = true);
          }
          if (flags[0] && flags[1] && flags[2]) {
            r._symbols[0].wildAniCount = 3;
            r._symbols[1].wildAniCount = 0;
            r._symbols[2].wildAniCount = 0;
          } else if (flags[0] && flags[1]) {
            r._symbols[0].wildAniCount = 2;
            r._symbols[1].wildAniCount = 0;
          } else if (flags[1] && flags[2]) {
            r._symbols[1].wildAniCount = 2;
            r._symbols[2].wildAniCount = 0;
          }
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      clearFreeSymbols: function clearFreeSymbols() {
        for (var i = 5; i < this._reels.length; i++) {
          var symbols = this._reels[i]._symbols;
          for (var j = 0; j < symbols.length; j++) symbols[j].StartMove();
        }
      },
      getIdxGlobalPos: function getIdxGlobalPos(idx) {
        var col = (idx - 1) % 5;
        var row = this._row - Math.floor((idx - 1) / 5) - 1;
        var reel = this._reels[col];
        var pos = reel.GetSymbolPosByRow(row);
        return reel.node.getChildByName("mask").convertToWorldSpaceAR(pos);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Magician_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "111d0Mm/cdKdo9797vCatVo", "Magician_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/Magician/",
        _isPlayBgm: false
      },
      playEffect: function playEffect(audioName, isLoop) {
        return cc.vv.AudioManager.playEff(this._soundPath, audioName, true, isLoop);
      },
      stopEffectByName: function stopEffectByName(audioName) {
        cc.vv.AudioManager.stopEffectByName(audioName);
      },
      stopEffect: function stopEffect() {
        cc.vv.AudioManager.stopAudio();
      },
      playBgm: function playBgm(filename) {
        if (filename) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm(filename);
        } else Global.SlotsSoundMgr.playNormalBgm();
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("fgbgm");
      },
      playWheelBgm: function playWheelBgm() {
        this.playBgm("mapBG_Wheelbgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_WheelGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "040eeApYKlHSpfahLNgCQJV", "Magician_WheelGame");
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
        machine: null,
        roundCount: 20,
        canSpin: false,
        wheel_game_node: null,
        bg: null,
        wheel: null,
        transition_ani: sp.Skeleton,
        btn_start_wheel: null,
        btn_start_spine: null,
        light_ani: null,
        fire_ani: null,
        flash_ani: null,
        board: null,
        callBack: null,
        resultData: null
      },
      _getRotation: function _getRotation(index) {
        var ret = 360 * -this.roundCount;
        var unitAngle = 360 / 21;
        var indexsAngle = [ 0, 5 * unitAngle - 360, 6 * unitAngle - 360, 7 * unitAngle - 360, 8 * unitAngle - 360, 9 * unitAngle - 360, 10 * unitAngle - 360 + unitAngle / 2, 12 * unitAngle - 360, 13 * unitAngle - 360, 14 * unitAngle - 360, 15 * unitAngle - 360, 16 * unitAngle - 360 ];
        ret += indexsAngle[index];
        return ret;
      },
      onLoad: function onLoad() {
        this._bindView();
        this._initListener();
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this._onSubGameData, false, this);
      },
      _bindView: function _bindView() {
        this.wheel_game_node = this.node;
        this.bg = this.wheel_game_node.getChildByName("bg");
        this.transition_ani = SlotsFacade.mainPanel.wheel_transition_ani.getComponent(sp.Skeleton);
        this.wheel = this.wheel_game_node.getChildByName("wheel");
        this.btn_start_wheel = this.wheel.getChildByName("btn_start_wheel");
        this.btn_start_spine = this.btn_start_wheel.getChildByName("btn_start_spine");
        this.light_ani = this.wheel.getChildByName("light_ani");
        this.fire_ani = this.wheel.getChildByName("fire_ani");
        this.flash_ani = this.wheel.getChildByName("flash_ani");
        this.board = this.wheel.getChildByName("board");
      },
      _initListener: function _initListener() {
        this.btn_start_wheel.on("click", this._onStartWheelHandler.bind(this), this);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this._onSubGameData, this);
      },
      _onSubGameData: function _onSubGameData(msg) {
        if (msg && msg.data && 2 == msg.data.rtype) {
          this.resultData = msg;
          msg.data.freeCnt > 0 && SlotsFacade.dm.addFreeCnt(msg.data.freeCnt);
          this._startWheel(msg.data);
        }
      },
      _onStartWheelHandler: function _onStartWheelHandler() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (_this.canSpin) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              _this.btn_start_wheel.stopAllActions();
              SlotsFacade.soundMgr.playEffect("spin");
              SlotsFacade.dm.reqSubGame(2);

             case 5:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _startWheel: function _startWheel(data) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var flashAniSpin, fireAniSpin, max_box_mask;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.btn_start_spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
              _this2.canSpin = false;
              _this2.transition_ani.setAnimation(0, "animation4", false);
              _this2.flash_ani.active = true;
              flashAniSpin = _this2.flash_ani.getComponent(sp.Skeleton);
              flashAniSpin.setAnimation(0, "animation", true);
              SlotsFacade.soundMgr.playEffect("wheel_act");
              cc.tween(_this2.board).to(8, {
                angle: _this2._getRotation(data.idx - 1)
              }, {
                easing: "quartInOut"
              }).call(function() {
                _this2._completeWheel(data);
              }).start();
              _context2.next = 10;
              return SlotsFacade.delayTime(2);

             case 10:
              _this2.fire_ani.active = true;
              fireAniSpin = _this2.fire_ani.getComponent(sp.Skeleton);
              fireAniSpin.setAnimation(0, "animation", false);
              max_box_mask = _this2.board.getChildByName("max_box_mask");
              max_box_mask.opacity = 255;
              cc.tween(max_box_mask).delay(.5).to(.5, {
                opacity: 0
              }).start();

             case 16:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _completeWheel: function _completeWheel(data) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3.flash_ani.active = false;
              1 == data.idx ? _this3.wheel.getChildByName("win3").active = true : 7 == data.idx ? _this3.wheel.getChildByName("win1").active = true : _this3.wheel.getChildByName("win2").active = true;
              _context3.next = 4;
              return SlotsFacade.delayTime(2);

             case 4:
              if (!data.winCoin) {
                _context3.next = 8;
                break;
              }
              SlotsFacade.soundMgr.playEffect("wheel_popup");
              _context3.next = 8;
              return SlotsFacade.popup.showWinGold(data.winCoin, 3);

             case 8:
              _this3.exitWheelGame(data);

             case 9:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _reset: function _reset() {
        this.resultData = {};
        this.btn_start_spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
        this.board.angle = 0;
        var max_box_mask = this.board.getChildByName("max_box_mask");
        max_box_mask.active = true;
        max_box_mask.opacity = 255;
        this.wheel.getChildByName("win1").active = false;
        this.wheel.getChildByName("win2").active = false;
        this.wheel.getChildByName("win3").active = false;
        this.fire_ani.active = false;
        this.flash_ani.active = false;
      },
      _bindData: function _bindData(data) {
        for (var i = 0; i < 12; i++) {
          var index = i + 1;
          var vo = data[i.toString()];
          if (1 == index) {
            var freeNode = this.board.getChildByName("item1_fg");
            freeNode.active = 1 == vo.type;
            var coinNode = this.board.getChildByName("item1_coin");
            coinNode.active = 1 != vo.type;
            1 == vo.type ? freeNode.getChildByName("label").getComponent(cc.Label).string = vo.el : coinNode.getChildByName("label").getComponent(cc.Label).string = Global.convertNumToShort(vo.el);
          } else if (7 == index) {
            var label = this.board.getChildByName("label_7").getComponent(cc.Label);
            label.string = Global.convertNumToShort(vo.el);
          } else {
            var _label = this.board.getChildByName("label_" + index).getComponent(cc.Label);
            _label.string = vo.el;
          }
        }
      },
      exitWheelGame: function exitWheelGame() {
        var _this4 = this;
        var data = this.resultData.data;
        SlotsFacade.mainPanel.showSceneTransition();
        cc.tween(this.wheel_game_node).delay(2).call(function() {
          _this4.wheel.active = false;
          _this4.bg.active = false;
          _this4.transition_ani.node.active = false;
          _this4.callBack && _this4.callBack(data);
        }).start();
      },
      enterWheelGame: function enterWheelGame(data, cb) {
        var _this5 = this;
        this.callBack = cb;
        this._reset();
        this._bindData(data);
        this.transition_ani.node.active = true;
        var ske = this.transition_ani;
        Global.SlotsSoundMgr.stopBgm();
        SlotsFacade.soundMgr.playEffect("fg_trigger_popup");
        new Promise(function(res) {
          ske.setAnimation(0, "animation1", false);
          ske.setCompleteListener(function() {
            ske.setCompleteListener(null);
            res();
          });
        }).then(function(data) {
          _this5.bg.active = true;
          _this5.wheel.active = true;
          return new Promise(function(res) {
            SlotsFacade.soundMgr.playWheelBgm();
            ske.setAnimation(0, "animation2", false);
            ske.setCompleteListener(function() {
              ske.setCompleteListener(null);
              res();
            });
          });
        }).then(function(data) {
          _this5.canSpin = true;
          cc.vv.gameData.checkAutoPlay(_this5.btn_start_wheel, _this5._onStartWheelHandler.bind(_this5));
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Magician_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "caf16y51SBIZoUSYrwUnnNg", "Magician_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        wildAniCount: 1
      },
      StartMove: function StartMove() {
        this._super();
        this.wildAniCount = 1;
      },
      playWinAnimation: function playWinAnimation() {
        1 == this.GetShowId() && 1 != this.wildAniCount ? this.playWildAni() : this._super();
      },
      playWildAni: function playWildAni() {
        if (this.wildAniCount < 1) return;
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        var spine = cc.find("w1", aniNode).getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.setAnimation(0, "animation1_" + this.wildAniCount, false);
        spine.addAnimation(0, "animation" + this.wildAniCount, true);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Magician_Cfg", "Magician_Character", "Magician_Events", "Magician_ExtraWildGame", "Magician_FlowCtrl", "Magician_GameData", "Magician_Logic", "Magician_MainPanel", "Magician_Map", "Magician_MapCollectProgress", "Magician_MapWheel", "Magician_Popup", "Magician_Reel", "Magician_Slots", "Magician_Sound", "Magician_WheelGame", "Magician_symbol" ]);