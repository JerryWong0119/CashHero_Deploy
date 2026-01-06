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
  Frey_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9042DmbdxKVqxBxKB5VKUS", "Frey_Cfg");
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
        win_node: "w1",
        win_ani: {
          tri_name: "wild1",
          name: "wild2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        trigger_ani: {
          name: "scatter2",
          zIndex: 400
        },
        stop_ani: {
          name: "scatter1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        collect_node: "s301",
        win_node: ""
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "H1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "H2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "H3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "H4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "H5",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "H6",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "Lsmybol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "Lsmybol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "Lsmybol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "Lsmybol",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Frey_Slots",
        Reels: "Frey_Reels",
        Symbols: "Frey_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 114
      },
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      autoModelDelay: 1,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      helpItems: [ "games/Frey/prefab/LMSlots_Help_item1", "games/Frey/prefab/LMSlots_Help_item2" ],
      commEffect: {
        path: "games/Frey/",
        win1: [ "win_a", "win_end" ],
        win2: [ "win_b", "win_end" ],
        win3: [ "win_c", "win_end" ],
        win4: [ "win_d", "win_end" ]
      },
      AddAntiTime: 2.5,
      normalBgm: "ngbgm",
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Frey/",
        reelStopSound: "reelstop",
        symbolStopSound: [ "reelSctr_1", "reelSctr_2", "reelSctr_3", "reelSctr_4", "reelSctr_5" ],
        antSound: "reelfast",
        antSpeed: 2e3
      } ]
    };
    Cfg.mapCfg = {
      1: {
        id: 1,
        type: 1,
        dockerDir: 1
      },
      2: {
        id: 2,
        type: 2,
        dockerDir: 1
      },
      3: {
        id: 3,
        type: 1,
        dockerDir: -1
      },
      4: {
        id: 4,
        type: 3,
        slot: {
          cnt: 2,
          wilds: [ 1 ],
          wildIdx: 1
        },
        dockerDir: -1
      },
      5: {
        id: 5,
        type: 1,
        dockerDir: -1
      },
      6: {
        id: 6,
        type: 1,
        dockerDir: -1
      },
      7: {
        id: 7,
        type: 2,
        dockerDir: -1
      },
      8: {
        id: 8,
        type: 1,
        dockerDir: 1
      },
      9: {
        id: 9,
        type: 3,
        slot: {
          cnt: 2,
          wilds: [ 3, 5 ],
          wildIdx: 2
        },
        dockerDir: 1
      },
      10: {
        id: 10,
        type: 1,
        dockerDir: 1
      },
      11: {
        id: 11,
        type: 1,
        dockerDir: 1
      },
      12: {
        id: 12,
        type: 3,
        slot: {
          cnt: 3,
          wilds: [ 3, 4 ],
          wildIdx: 3
        },
        dockerDir: -1
      },
      13: {
        id: 13,
        type: 1,
        dockerDir: -1
      },
      14: {
        id: 14,
        type: 1,
        dockerDir: -1
      },
      15: {
        id: 15,
        type: 2,
        dockerDir: 1
      },
      16: {
        id: 16,
        type: 1,
        dockerDir: 1
      },
      17: {
        id: 17,
        type: 1,
        dockerDir: 1
      },
      18: {
        id: 18,
        type: 3,
        slot: {
          cnt: 4,
          wilds: [ 2, 5 ],
          wildIdx: 4
        },
        dockerDir: -1
      },
      19: {
        id: 19,
        type: 1,
        dockerDir: -1
      },
      20: {
        id: 20,
        type: 2,
        dockerDir: -1
      },
      21: {
        id: 21,
        type: 1,
        dockerDir: 1
      },
      22: {
        id: 22,
        type: 3,
        slot: {
          cnt: 2,
          wilds: [ 1, 3, 5 ],
          wildIdx: 5
        },
        dockerDir: 1
      },
      23: {
        id: 23,
        type: 1,
        dockerDir: 1
      },
      24: {
        id: 24,
        type: 1,
        dockerDir: 1
      },
      25: {
        id: 25,
        type: 3,
        slot: {
          cnt: 2,
          wilds: [ 1, 5 ],
          wildIdx: 6
        },
        dockerDir: -1
      },
      26: {
        id: 26,
        type: 1,
        dockerDir: -1
      },
      27: {
        id: 27,
        type: 1,
        dockerDir: -1
      },
      28: {
        id: 28,
        type: 2,
        dockerDir: 1
      },
      29: {
        id: 29,
        type: 1,
        dockerDir: 1
      },
      30: {
        id: 30,
        type: 1,
        dockerDir: 1
      },
      31: {
        id: 31,
        type: 3,
        slot: {
          cnt: 4,
          wilds: [ 2, 5 ],
          wildIdx: 4
        },
        dockerDir: -1
      },
      32: {
        id: 32,
        type: 1,
        dockerDir: -1
      },
      33: {
        id: 33,
        type: 2,
        dockerDir: -1
      },
      34: {
        id: 34,
        type: 1,
        dockerDir: 1
      },
      35: {
        id: 35,
        type: 3,
        slot: {
          cnt: 3,
          wilds: [ 1, 3, 5 ],
          wildIdx: 5
        },
        dockerDir: 1
      },
      36: {
        id: 36,
        type: 1,
        dockerDir: 1
      },
      37: {
        id: 37,
        type: 1,
        dockerDir: 1
      },
      38: {
        id: 38,
        type: 2,
        dockerDir: 1
      },
      39: {
        id: 39,
        type: 1,
        dockerDir: -1
      },
      40: {
        id: 40,
        type: 3,
        slot: {
          cnt: 3,
          wilds: [ 3, 4 ],
          wildIdx: 3
        },
        dockerDir: -1
      },
      41: {
        id: 41,
        type: 1,
        dockerDir: -1
      },
      42: {
        id: 42,
        type: 2,
        dockerDir: -1
      },
      43: {
        id: 43,
        type: 1,
        dockerDir: 1
      },
      44: {
        id: 44,
        type: 3,
        slot: {
          cnt: 3,
          wilds: [ 2, 4 ],
          wildIdx: 7
        },
        dockerDir: 1
      },
      45: {
        id: 45,
        type: 1,
        dockerDir: 1
      },
      46: {
        id: 46,
        type: 2,
        dockerDir: 1
      },
      47: {
        id: 47,
        type: 1,
        dockerDir: -1
      },
      48: {
        id: 48,
        type: 3,
        slot: {
          cnt: 4,
          wilds: [ 1 ],
          wildIdx: 1
        },
        dockerDir: -1
      },
      49: {
        id: 49,
        type: 1,
        dockerDir: -1
      },
      50: {
        id: 50,
        type: 1,
        dockerDir: -1
      },
      51: {
        id: 51,
        type: 2,
        dockerDir: 1
      },
      52: {
        id: 52,
        type: 1,
        dockerDir: 1
      },
      53: {
        id: 53,
        type: 3,
        slot: {
          cnt: 4,
          wilds: [ 2, 4 ],
          wildIdx: 7
        },
        dockerDir: 1
      },
      54: {
        id: 54,
        type: 1,
        dockerDir: 1
      },
      55: {
        id: 55,
        type: 1,
        dockerDir: -1
      },
      56: {
        id: 56,
        type: 3,
        slot: {
          cnt: 2,
          wilds: [ 1, 2, 3 ],
          wildIdx: 8
        },
        dockerDir: -1
      },
      57: {
        id: 57,
        type: 1,
        dockerDir: -1
      },
      58: {
        id: 58,
        type: 1,
        dockerDir: -1
      },
      59: {
        id: 59,
        type: 1,
        dockerDir: 1
      },
      60: {
        id: 60,
        type: 2,
        dockerDir: 1
      },
      61: {
        id: 61,
        type: 1,
        dockerDir: 1
      },
      62: {
        id: 62,
        type: 3,
        slot: {
          cnt: 3,
          wilds: [ 2, 5 ],
          wildIdx: 4
        },
        dockerDir: -1
      },
      63: {
        id: 63,
        type: 1,
        dockerDir: -1
      },
      64: {
        id: 64,
        type: 2,
        dockerDir: -1
      },
      65: {
        id: 65,
        type: 1,
        dockerDir: 1
      },
      66: {
        id: 66,
        type: 3,
        slot: {
          cnt: 3,
          wilds: [ 1, 2, 3 ],
          wildIdx: 8
        },
        dockerDir: 1
      },
      67: {
        id: 67,
        type: 1,
        dockerDir: 1
      },
      68: {
        id: 68,
        type: 1,
        dockerDir: 1
      },
      69: {
        id: 69,
        type: 3,
        slot: {
          cnt: 2,
          wilds: [ 2, 5 ],
          wildIdx: 4
        },
        dockerDir: -1
      },
      70: {
        id: 70,
        type: 1,
        dockerDir: -1
      },
      71: {
        id: 71,
        type: 1,
        dockerDir: -1
      },
      72: {
        id: 72,
        type: 2,
        dockerDir: 1
      },
      73: {
        id: 73,
        type: 1,
        dockerDir: 1
      },
      74: {
        id: 74,
        type: 1,
        dockerDir: 1
      },
      75: {
        id: 75,
        type: 3,
        slot: {
          cnt: 3,
          wilds: [ 3, 5 ],
          wildIdx: 2
        },
        dockerDir: -1
      },
      76: {
        id: 76,
        type: 1,
        dockerDir: -1
      },
      77: {
        id: 77,
        type: 2,
        dockerDir: -1
      },
      78: {
        id: 78,
        type: 1,
        dockerDir: 1
      },
      79: {
        id: 79,
        type: 3,
        slot: {
          cnt: 3,
          wilds: [ 2, 4 ],
          wildIdx: 7
        },
        dockerDir: 1
      },
      80: {
        id: 80,
        type: 1,
        dockerDir: 1
      },
      81: {
        id: 81,
        type: 1,
        dockerDir: 1
      },
      82: {
        id: 82,
        type: 2,
        dockerDir: 1
      },
      83: {
        id: 83,
        type: 1,
        dockerDir: -1
      },
      84: {
        id: 84,
        type: 3,
        slot: {
          cnt: 4,
          wilds: [ 1, 5 ],
          wildIdx: 6
        },
        dockerDir: -1
      },
      85: {
        id: 85,
        type: 1,
        dockerDir: -1
      },
      86: {
        id: 86,
        type: 2,
        dockerDir: -1
      },
      87: {
        id: 87,
        type: 1,
        dockerDir: 1
      },
      88: {
        id: 88,
        type: 3,
        slot: {
          cnt: 3,
          wilds: [ 1, 2, 3 ],
          wildIdx: 8
        },
        dockerDir: 1
      },
      89: {
        id: 89,
        type: 1,
        dockerDir: 1
      },
      90: {
        id: 90,
        type: 2,
        dockerDir: 1
      },
      91: {
        id: 91,
        type: 1,
        dockerDir: -1
      },
      92: {
        id: 92,
        type: 3,
        slot: {
          cnt: 4,
          wilds: [ 3, 4 ],
          wildIdx: 3
        },
        dockerDir: -1
      },
      93: {
        id: 93,
        type: 1,
        dockerDir: -1
      },
      94: {
        id: 94,
        type: 1,
        dockerDir: -1
      },
      95: {
        id: 95,
        type: 1,
        dockerDir: 1
      },
      96: {
        id: 96,
        type: 2,
        dockerDir: 1
      },
      97: {
        id: 97,
        type: 1,
        dockerDir: 1
      },
      98: {
        id: 98,
        type: 1,
        dockerDir: 1
      },
      99: {
        id: 99,
        type: 1,
        dockerDir: -1
      },
      100: {
        id: 100,
        type: 3,
        slot: {
          cnt: 4,
          wilds: [ 2, 3, 4, 5 ],
          wildIdx: 9
        },
        dockerDir: -1
      }
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Frey_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6473b7J79lKb7wAnDNuyZSF", "Frey_Collect");
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
        _isLock: false
      },
      start: function start() {},
      Init: function Init() {
        this._node_collect = cc.find("safe_node/slots/node_collect", this.node);
        this._mask = cc.find("mask", this._node_collect);
        this._bar = cc.find("bar", this._mask);
        this._spine_tou = cc.find("JDT_Tou", this._node_collect);
        this._spine_bidepan = cc.find("JDT_BiDePan", this._node_collect);
        this._spine_jiesuo = cc.find("JDT_JieSuo", this._node_collect);
        this._spine_shangsuo = cc.find("BetUp_ShangSuo", this._node_collect);
        this._spine_jiman = cc.find("JDT_JiMan", this._node_collect);
        this._spine_jiman.active = false;
        this._spine_qidian = cc.find("JDT_QiDian", this._node_collect);
        this._spine_zhongdian = cc.find("JDT_ZhongDian", this._node_collect);
        this._spine_qidian.getComponent(sp.Skeleton).setAnimation(0, "JDT_QiDian_Loop", true);
        this._btn_click = cc.find("btn_click", this._node_collect);
        Global.btnClickEvent(this._btn_click, this.onClickSjt, this);
        this._btn_entrance = cc.find("btn_entrance", this._node_collect);
        Global.btnClickEvent(this._btn_entrance, this.onClickEntrance, this);
        this._flyNode = cc.find("flyNode", this._node_collect);
        this._fly_xing = cc.find("fly_xing", this._flyNode);
        this._tip_xing = cc.find("tip_xing", this._flyNode);
        this._fly_xing.active = false;
        this._tip_xing.active = false;
        var progressData = cc.vv.gameData.getProgressData();
        this.initBar(true, progressData.totalCnt / progressData.needCnt);
        this.initSjtState();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      initBar: function initBar(init, percent) {
        var pro = Math.min(percent, 1);
        var width = 530 * pro;
        if (init) {
          this._mask.width = width;
          this._spine_tou.active = 0 != percent;
          this._spine_bidepan.active = 0 != percent;
          this._spine_tou.position = cc.v2(this._mask.x + width, 0);
          this._spine_bidepan.position = cc.v2(this._mask.x + width - 10, -3);
        } else {
          this._spine_tou.active || (this._spine_tou.active = true);
          this._spine_bidepan.active || (this._spine_bidepan.active = true);
          cc.tween(this._spine_tou).to(.5, {
            position: cc.v2(this._mask.x + width, 0)
          }).start();
          cc.tween(this._spine_bidepan).to(.5, {
            position: cc.v2(this._mask.x + width - 10, -3)
          }).start();
          cc.tween(this._mask).to(.5, {
            width: width
          }).start();
        }
      },
      playCollectAnim: function playCollectAnim(idxs) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var progressData, _loop, i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(!_this._isLock && idxs.length > 0)) {
                _context.next = 13;
                break;
              }
              Global.SlotsSoundMgr.playEffect("collectStart");
              progressData = cc.vv.gameData.getProgressData();
              _loop = function _loop(i) {
                var idx = idxs[i];
                var fly_xing = cc.instantiate(_this._fly_xing);
                var tip_xing = cc.instantiate(_this._tip_xing);
                fly_xing.parent = _this._flyNode;
                tip_xing.parent = _this._flyNode;
                var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                var startPos = _this._flyNode.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                var endPos = _this._flyNode.convertToNodeSpaceAR(_this._spine_qidian.convertToWorldSpaceAR(cc.v2(0, 0)));
                tip_xing.active = true;
                tip_xing.position = startPos;
                tip_xing.getComponent(sp.Skeleton).setAnimation(0, "ShouJiXingTiShi", false);
                tip_xing.getComponent(sp.Skeleton).setCompleteListener(function() {
                  tip_xing.destroy();
                  fly_xing.active = true;
                  fly_xing.position = startPos;
                  fly_xing.getComponent(sp.Skeleton).setAnimation(0, "NG_Xing", false);
                  cc.tween(fly_xing).to(.5, {
                    position: endPos
                  }).call(function() {
                    fly_xing.destroy();
                  }).start();
                });
                symbol.playCollectResult();
              };
              for (i = 0; i < idxs.length; i++) _loop(i);
              _context.next = 7;
              return cc.vv.gameData.awaitTime(.7);

             case 7:
              Global.SlotsSoundMgr.playEffect("collectOver");
              _context.next = 10;
              return cc.vv.gameData.awaitTime(.3);

             case 10:
              _this._spine_qidian.getComponent(sp.Skeleton).setAnimation(0, "JDT_QiDian_Intro", false);
              _this._spine_qidian.getComponent(sp.Skeleton).addAnimation(0, "JDT_QiDian_Loop", true);
              _this.initBar(false, progressData.totalCnt / progressData.needCnt);

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      fullSjt: function fullSjt() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      _this2._spine_jiman.active = true;
                      _this2._spine_jiman.getComponent(sp.Skeleton).setAnimation(0, "JDT_JiMan", false);
                      _context2.next = 4;
                      return cc.vv.gameData.awaitTime(.5);

                     case 4:
                      _this2._spine_zhongdian.getComponent(sp.Skeleton).setAnimation(0, "JDT_ZhongDian_End", false);
                      _this2._spine_zhongdian.getComponent(sp.Skeleton).addAnimation(0, "JDT_ZhongDian_Loop", true);
                      _context2.next = 8;
                      return cc.vv.gameData.awaitTime(.8);

                     case 8:
                      success();

                     case 9:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      initSjtState: function initSjtState() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        this._isLock = curBet < needBet;
        if (this._isLock) {
          this._spine_shangsuo.active = true;
          this._spine_shangsuo.getComponent(sp.Skeleton).setAnimation(0, "BetUp_ShangSuo_Loop_EN", true);
        } else this._spine_shangsuo.active = false;
        this._spine_jiesuo.active = false;
      },
      onClickSjt: function onClickSjt() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        this._isLock && needBet >= curBet && cc.vv.gameData.GetBottomScript().SetBetIdx(needBet);
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var _this3 = this;
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        var self = this;
        if (this._isLock && curBet >= needBet) {
          Global.SlotsSoundMgr.playEffect("unlock");
          this._isLock = false;
          this._spine_shangsuo.active = false;
          this._spine_jiesuo.active = true;
          this._spine_jiesuo.getComponent(sp.Skeleton).setAnimation(0, "JDT_JieSuo", false);
          this._spine_jiesuo.getComponent(sp.Skeleton).setCompleteListener(function() {
            _this3._spine_jiesuo.active = false;
          });
        } else if (!this._isLock && curBet < needBet) {
          Global.SlotsSoundMgr.playEffect("lock");
          this._isLock = true;
          this._spine_jiesuo.active = false;
          this._spine_shangsuo.active = true;
          this._spine_shangsuo.getComponent(sp.Skeleton).setAnimation(0, "BetUp_ShangSuo_Intro_EN", false);
          this._spine_shangsuo.getComponent(sp.Skeleton).addAnimation(0, "BetUp_ShangSuo_Loop_EN", true);
        }
      },
      onClickEntrance: function onClickEntrance() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        cc.vv.gameData.getMapScript().enterMap(true);
      }
    });
    cc._RF.pop();
  }, {} ],
  Frey_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb5f2Gw4m1AWb520C1ikeaB", "Frey_FreeGame");
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
        _slotsNodeList: [],
        _slotsScpList: []
      },
      start: function start() {},
      Init: function Init() {
        this._node_free = cc.find("safe_node/node_free", this.node);
        this._node_free.active = false;
        this._node_slots = cc.find("slots", this._node_free);
        for (var i = 1; i <= 4; i++) {
          var slot = cc.find("slots" + i, this._node_slots);
          var scp = slot.addComponent("Frey_FreeSlots");
          scp.Init(i);
          this._slotsNodeList.push(slot);
          this._slotsScpList.push(scp);
        }
      },
      initShowSlotsData: function initShowSlotsData(isTri) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm("fgbgm");
                cc.vv.gameData.setIsFreeGame(true);
                _this._node_free.active = true;
                _this._slotsCnt = cc.vv.gameData.getFreeSlotsCnt();
                _this._wildCols = cc.vv.gameData.getFreeWildCols();
                _this.setSlotsScale();
                _this.showWildSpine();
                for (i = 0; i < _this._slotsNodeList.length; i++) if (i < _this._slotsCnt) {
                  _this._slotsNodeList[i].active = true;
                  _this._slotsScpList[i].initSlotsData();
                } else _this._slotsNodeList[i].active = false;
                if (!isTri) {
                  _context.next = 11;
                  break;
                }
                _context.next = 11;
                return cc.vv.gameData.awaitTime(.5);

               case 11:
                cc.vv.gameData.GetSlotsScript().CanDoNextRound();
                _this._freeSuccess = success;

               case 13:
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
      endFreeGame: function endFreeGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nTotal;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return cc.vv.gameData.awaitTime(1);

             case 2:
              nTotal = cc.vv.gameData.getFreeWinCoin();
              _context2.next = 5;
              return cc.vv.gameData.getPopupScript().showWinFree(nTotal);

             case 5:
              cc.vv.gameData.getMapInfo() && 2 === cc.vv.gameData.getMapInfo.state ? cc.vv.gameData.getPopupScript().playXingQpAnim() : cc.vv.gameData.getPopupScript().playYunQpAnim(false);
              _context2.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              _this2._node_free.active = false;
              cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
              _this2.hideWildSpine();
              _context2.next = 13;
              return cc.vv.gameData.awaitTime(1);

             case 13:
              _context2.next = 15;
              return new Promise(function(success) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nTotal, nTotal, true, function() {
                  success();
                });
              });

             case 15:
              cc.vv.gameData.setIsFreeGame(false);
              Global.SlotsSoundMgr.stopBgm();
              if (_this2._freeSuccess) {
                _this2._freeSuccess();
                _this2._freeSuccess = null;
              }

             case 18:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      setSlotsScale: function setSlotsScale() {
        var scaleList = [ 1, .9, .7, .53 ];
        this._node_slots.setScale(scaleList[this._slotsCnt - 1]);
        this._node_slots.height = this._slotsNodeList[0].height * this._slotsCnt;
        this._node_slots.getComponent(cc.Widget).updateAlignment();
      },
      showWildSpine: function showWildSpine() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].showWildSpine();
      },
      hideWildSpine: function hideWildSpine() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].hideWildSpine();
      },
      StartMove: function StartMove() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].StartMove();
      },
      StopMove: function StopMove() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].StopMove();
      },
      onMsgSpine: function onMsgSpine(msg) {
        cc.log(msg);
        this._gameInfo = msg;
        var freeGameSlots = msg.freeGameSlots;
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].onMsgSpine(freeGameSlots[i]);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var i, win, nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              for (i = 0; i < _this3._slotsNodeList.length; i++) i < _this3._slotsCnt && _this3._slotsScpList[i].OnSpinEnd();
              win = _this3._gameInfo.wincoin;
              nTotal = cc.vv.gameData.getFreeWinCoin();
              _context3.next = 5;
              return new Promise(function(success, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(win, nTotal, false, function() {
                  success();
                });
              });

             case 5:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context3.next = 8;
                break;
              }
              _this3.endFreeGame();
              return _context3.abrupt("return");

             case 8:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 9:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      GetLastStopReelIdx: function GetLastStopReelIdx() {
        return this._slotsScpList[this._slotsCnt - 1].GetLastStopReelIdx();
      }
    });
    cc._RF.pop();
  }, {} ],
  Frey_FreeReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3525UAlqVIE7c+8LsOQY6Z", "Frey_FreeReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      start: function start() {},
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
      },
      setSlotType: function setSlotType(type) {
        this._slotsType = type;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var lastReelStopIdx = cc.vv.gameData.getFreeScript().GetLastStopReelIdx();
        var type = cc.vv.gameData.getFreeSlotsCnt();
        this._slotsType == type && this._reelIdx == lastReelStopIdx && cc.vv.gameData.getFreeScript().OnSpinEnd();
      },
      ReadyToStop: function ReadyToStop() {
        this._bNotifyReadyStop || (this._bNotifyReadyStop = true);
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.playReelStop();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      playReelStop: function playReelStop() {
        if (1 === this._slotsType) {
          var soundPath = this._cfg.reelStateInfo[0].path;
          var reelStopEffect = this._cfg.reelStateInfo[0].reelStopSound;
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Frey_FreeSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25509rki9RNsbXxNVAD2p2E", "Frey_FreeSlots");
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
        _wildList: []
      },
      start: function start() {},
      Init: function Init(type) {
        this._slotsType = type;
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 5;
        this._row = 4;
        this._topAniNode = cc.find("top_ani", this.node);
        this.createReels(this._col, this._row, type);
        this.initWildSpine();
      },
      createReels: function createReels(col, row, type) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent("Frey_FreeReel");
          scp.Init(i, row, this._topAniNode);
          scp.setSlotType(type);
          this._reels.push(scp);
        }
      },
      initSlotsData: function initSlotsData() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._wildCols = cc.vv.gameData.getFreeWildCols();
              _this.initAllSymbol();
              _this.hideWildSpine();
              _this.showWildSpine();

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      initAllSymbol: function initAllSymbol() {
        for (var col = 0; col < this._reels.length; col++) for (var row = 0; row < this._row + 1; row++) if (this._reels[col].GetSymbolByRow(row)) {
          this._reels[col].GetSymbolByRow(row).ClearState();
          this._reels[col].GetSymbolByRow(row).ShowRandomSymbol();
        }
      },
      initWildSpine: function initWildSpine() {
        for (var i = 1; i <= 5; i++) {
          var wild = cc.find(cc.js.formatStr("reels/reel%s/wild", i), this.node);
          wild.active = false;
          this._wildList.push(wild);
        }
      },
      showWildSpine: function showWildSpine() {
        var wildCols = cc.vv.gameData.getFreeWildCols();
        for (var i = 0; i < wildCols.length; i++) {
          var idx = wildCols[i];
          this._wildList[idx - 1].active = true;
          this._wildList[idx - 1].getComponent(sp.Skeleton).setAnimation(0, "L_wild_jingzhen", true);
        }
      },
      hideWildSpine: function hideWildSpine() {
        for (var i = 0; i < this._wildList.length; i++) this._wildList[i].active = false;
      },
      StartMove: function StartMove() {
        var _this2 = this;
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        var reels = [];
        var wildCols = cc.vv.gameData.getFreeWildCols();
        this._reels.forEach(function(reel) {
          if (wildCols.includes(reel.GetReelIdx() + 1)) for (var row = 0; row < _this2._row; row++) reel.GetSymbolByRow(row).ClearState(); else reels.push(reel);
        });
        this.MoveReels(reels);
        this._stopTime = this.GetStopTime();
        this.showWildSpine();
      },
      onMsgSpine: function onMsgSpine(data) {
        this._gameInfo = data;
        var cards = data.cards;
        this.SetSlotsResult(cards);
      },
      OnSpinEnd: function OnSpinEnd() {
        this.ShowWinTrace();
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i = 0; _i < this._gameInfo.scatterZJLuXian.indexs.length; _i++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i];
          allWinIdx[val] = 1;
        }
        var wildCols = cc.vv.gameData.getFreeWildCols();
        var playWild = [];
        for (var key in allWinIdx) {
          var _idx = Number(key);
          var symbol = this.GetSymbolByIdx(Number(key));
          symbol && symbol.ShowKuang();
          wildCols.includes((_idx - 1) % 5 + 1) ? playWild.push((_idx - 1) % 5) : symbol && symbol.playWinAnimation();
        }
        for (var _i2 = 0; _i2 < playWild.length; _i2++) this._wildList[playWild[_i2]].getComponent(sp.Skeleton).setAnimation(0, "L_wild", true);
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx * nIter;
      },
      CanStopSlot: function CanStopSlot() {
        return null != this._gameInfo;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Frey_FreeWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58278sjVhJLeLV4Cf+NFJsL", "Frey_FreeWheel");
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
        _canSpin: false
      },
      start: function start() {},
      Init: function Init() {
        this._free_wheel = cc.find("safe_node/free_wheel", this.node);
        this._free_wheel.active = false;
        this._spr_mask = cc.find("spr_mask", this._free_wheel);
        this._node_count = cc.find("count", this._free_wheel);
        this._node_wheel = cc.find("wheel", this._free_wheel);
        this._lbl_cnt = cc.find("count/lbl_cnt", this._free_wheel);
        this._spine_cnt = cc.find("count/spine", this._free_wheel);
        this._wheel_out = cc.find("wheel/wheel_out", this._free_wheel);
        this._wheel_in = cc.find("wheel/wheel_in", this._free_wheel);
        this._item5 = cc.find("item5", this._wheel_in);
        this._spine_win = cc.find("wheel/spine_win", this._free_wheel);
        this._btn_spin = cc.find("wheel/spin", this._free_wheel);
        Global.btnClickEvent(this._btn_spin, this.clickSpinBtn, this);
        this._spine_btn = cc.find("spine", this._btn_spin);
        this._win_extra = cc.find("win_extra", this._free_wheel);
      },
      enterFreeWheel: function enterFreeWheel() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                cc.vv.gameData.getPopupScript().playYunQpAnim(true, true);
                _context.next = 3;
                return cc.vv.gameData.awaitTime(1);

               case 3:
                Global.SlotsSoundMgr.playBgm("wheelbgm");
                _this._wheelGame = cc.vv.gameData.getWheelGame();
                _this.initWheelNode();
                _context.next = 8;
                return _this.playShowWheel();

               case 8:
                _this._canSpin = true;
                cc.vv.gameData.checkAutoPlay(_this._btn_spin, _this.clickSpinBtn.bind(_this));
                _this._freeSucc = success;

               case 11:
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
      initWheelNode: function initWheelNode() {
        if (1 == this._wheelGame.state) {
          this._wheel_out.angle = 45 * (this._wheelGame.wildResultId - 1) + 180;
          this._item5.getComponent("ImgSwitchCmp").setIndex(this._wheelGame.slotItems[4].slotCnt - 2);
        } else {
          this._wheel_out.angle = 0;
          this._item5.getComponent("ImgSwitchCmp").setIndex(3);
        }
        this._lbl_cnt.getComponent(cc.Label).string = this._wheelGame.totalFreeCnt;
        this._wheel_in.angle = 0;
        this._spine_btn.getComponent(sp.Skeleton).setAnimation(0, "Spin_Loop_S", true);
        this._spine_cnt.active = false;
        this._spine_win.active = false;
        this._win_extra.active = false;
      },
      playShowWheel: function playShowWheel() {
        var _this2 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("wheelShow");
                _this2._free_wheel.active = true;
                _this2._spr_mask.opacity = 0;
                _this2._node_count.setScale(0);
                _this2._node_wheel.setScale(0);
                cc.tween(_this2._spr_mask).to(.5, {
                  opacity: 150
                }).start();
                cc.tween(_this2._node_count).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(_this2._node_wheel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context2.next = 10;
                return cc.vv.gameData.awaitTime(.5);

               case 10:
                success();

               case 11:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      playHideWheel: function playHideWheel() {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                cc.tween(_this3._node_count).to(.5, {
                  opacity: 0
                }).start();
                cc.tween(_this3._node_wheel).to(.5, {
                  opacity: 0
                }).start();
                _context3.next = 4;
                return cc.vv.gameData.awaitTime(.5);

               case 4:
                _this3._free_wheel.active = false;
                _this3._node_count.opacity = 255;
                _this3._node_wheel.opacity = 255;
                success();

               case 8:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      clickSpinBtn: function clickSpinBtn() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var state, msg;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (_this4._canSpin) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");

             case 2:
              _this4._canSpin = false;
              _this4._btn_spin.stopAllActions();
              _this4._spine_btn.getComponent(sp.Skeleton).setAnimation(0, "Spin_Intro", false);
              state = _this4._wheelGame.state;
              _context4.next = 8;
              return cc.vv.gameData.reqSubGame({
                rtype: 2
              });

             case 8:
              msg = _context4.sent;
              if (!(200 == msg.code)) {
                _context4.next = 36;
                break;
              }
              _this4._wheelGame = msg.data.wheelGame;
              _context4.next = 13;
              return _this4.startWheel(state);

             case 13:
              Global.SlotsSoundMgr.playEffect("wheelWin");
              _this4._spine_win.active = true;
              _this4._spine_win.getComponent(sp.Skeleton).setAnimation(0, "FGSuoDing", false);
              _this4._spine_win.getComponent(sp.Skeleton).setCompleteListener(function() {
                _this4._spine_win.active = false;
              });
              _this4._spine_btn.getComponent(sp.Skeleton).setAnimation(0, "Spin_End", false);
              _context4.next = 20;
              return cc.vv.gameData.awaitTime(1);

             case 20:
              if (!(1 === _this4._wheelGame.state)) {
                _context4.next = 28;
                break;
              }
              _context4.next = 23;
              return _this4.winExtraSpins();

             case 23:
              _this4._spine_btn.getComponent(sp.Skeleton).addAnimation(0, "Spin_Loop_S", true);
              _this4._canSpin = true;
              cc.vv.gameData.checkAutoPlay(_this4._btn_spin, _this4.clickSpinBtn.bind(_this4));
              _context4.next = 36;
              break;

             case 28:
              cc.vv.gameData.setFreeWildCnt(_this4._wheelGame.wildCols);
              cc.vv.gameData.setFreeSlotsCnt(_this4._wheelGame.slotCnt);
              cc.vv.gameData.SetTotalFree(_this4._wheelGame.totalFreeCnt);
              cc.vv.gameData.SetFreeTime(_this4._wheelGame.totalFreeCnt);
              _context4.next = 34;
              return _this4.playHideWheel();

             case 34:
              Global.SlotsSoundMgr.stopBgm();
              if (_this4._freeSucc) {
                _this4._freeSucc();
                _this4._freeSucc = null;
              }

             case 36:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      startWheel: function startWheel(state) {
        var _this5 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var slotResultId, wildResultId, nCir, angle_in, angle_out;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("WheelSpin");
                slotResultId = _this5._wheelGame.slotResultId[state];
                wildResultId = _this5._wheelGame.wildResultId;
                nCir = 4;
                angle_in = 45 * (8 - (slotResultId - 1)) - _this5._wheel_in.angle + 360 * nCir + 180;
                angle_out = 45 * (wildResultId - 1) - _this5._wheel_out.angle + 360 * nCir + 180;
                cc.tween(_this5._wheel_in).to(6, {
                  angle: angle_in
                }, {
                  easing: "quartInOut"
                }).start();
                0 == state && cc.tween(_this5._wheel_out).to(6, {
                  angle: -angle_out
                }, {
                  easing: "quartInOut"
                }).start();
                _context5.next = 10;
                return cc.vv.gameData.awaitTime(6);

               case 10:
                success();

               case 11:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      winExtraSpins: function winExtraSpins() {
        var _this6 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var spr, par, sPos, ePos;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                _this6._win_extra.active = true;
                spr = cc.find("spr", _this6._win_extra);
                par = cc.find("par", _this6._win_extra);
                sPos = _this6._win_extra.convertToNodeSpaceAR(_this6._item5.convertToWorldSpaceAR(cc.v2(0, 0)));
                ePos = _this6._win_extra.convertToNodeSpaceAR(_this6._lbl_cnt.convertToWorldSpaceAR(cc.v2(0, 0)));
                spr.position = sPos;
                par.position = sPos;
                par.getComponent(cc.ParticleSystem).resetSystem();
                cc.tween(spr).to(.5, {
                  position: ePos
                }).start();
                cc.tween(par).to(.5, {
                  position: ePos
                }).start();
                Global.SlotsSoundMgr.playEffect("spinFly");
                _this6._item5.getComponent("ImgSwitchCmp").setIndex(_this6._wheelGame.slotItems[4].slotCnt - 2);
                _context6.next = 14;
                return cc.vv.gameData.awaitTime(.5);

               case 14:
                _this6._win_extra.active = false;
                Global.SlotsSoundMgr.playEffect("fgSpinAdd");
                _this6._spine_cnt.active = true;
                _this6._spine_cnt.getComponent(sp.Skeleton).setAnimation(0, "FG_ShouJiLian", false);
                _this6._spine_cnt.getComponent(sp.Skeleton).setCompleteListener(function() {
                  _this6._spine_cnt.getComponent(sp.Skeleton).setCompleteListener();
                  _this6._spine_cnt.active = false;
                });
                _this6._lbl_cnt.getComponent(cc.Label).string = _this6._wheelGame.totalFreeCnt;
                success();

               case 21:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  Frey_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a184eQsO9hBDZYmYH0//+4Q", "Frey_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      UnregisterMsg: function UnregisterMsg() {
        this._super();
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._mapInfo = deskInfo.mapInfo;
        this._wheelGame = deskInfo.wheelGame;
        this._progressData = deskInfo.mapInfo.progressData;
        this._freeWinCoin = deskInfo.freeWinCoin;
        if (this._mapInfo && 2 === this._mapInfo.state) {
          this._gameId = gameId;
          var mapCfg = this.getGameCfg().mapCfg;
          var vo = mapCfg[this._mapInfo.currId];
          this._slotsCnt = vo.slot.cnt;
          this._wildCols = vo.slot.wilds;
        }
        if (this._wheelGame) {
          this._slotsCnt = this._wheelGame.slotCnt;
          this._wildCols = this._wheelGame.wildCols;
        }
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._mapInfo = msg.mapInfo;
          this._wheelGame = msg.wheelGame;
          this._progressData = msg.mapInfo.progressData;
          this._freeWinCoin = msg.freeWinCoin;
          if (this._wheelGame) {
            this._slotsCnt = this._wheelGame.slotCnt;
            this._wildCols = this._wheelGame.wildCols;
          }
        }
        this._super(msg);
      },
      setPopupScript: function setPopupScript(val) {
        this._popouScp = val;
      },
      getPopupScript: function getPopupScript() {
        return this._popouScp;
      },
      setFreeWheelScript: function setFreeWheelScript(val) {
        this._freeWheelScp = val;
      },
      getFreeWheelScript: function getFreeWheelScript() {
        return this._freeWheelScp;
      },
      setCollectScript: function setCollectScript(val) {
        this._collectScp = val;
      },
      getCollectScript: function getCollectScript() {
        return this._collectScp;
      },
      setMapScript: function setMapScript(val) {
        this._mapScp = val;
      },
      getMapScript: function getMapScript() {
        return this._mapScp;
      },
      setMapWheelScript: function setMapWheelScript(val) {
        this._mapWheelScp = val;
      },
      getMapWheelScript: function getMapWheelScript() {
        return this._mapWheelScp;
      },
      setFreeScript: function setFreeScript(val) {
        this._freeScp = val;
      },
      getFreeScript: function getFreeScript() {
        return this._freeScp;
      },
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needBet;
      },
      getMapInfo: function getMapInfo() {
        return this._mapInfo;
      },
      getProgressData: function getProgressData() {
        return this._progressData;
      },
      getWheelGame: function getWheelGame() {
        return this._wheelGame;
      },
      setFreeSlotsCnt: function setFreeSlotsCnt(val) {
        this._slotsCnt = val;
      },
      getFreeSlotsCnt: function getFreeSlotsCnt() {
        return this._slotsCnt;
      },
      setFreeWildCnt: function setFreeWildCnt(val) {
        this._wildCols = val;
      },
      getFreeWildCols: function getFreeWildCols() {
        return this._wildCols;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      setIsFreeGame: function setIsFreeGame(val) {
        this._isFreeGame = val;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      },
      setFreeWinCoin: function setFreeWinCoin(wincoin) {
        this._freeWinCoin = wincoin;
      },
      reqSubGame: function reqSubGame(dt) {
        var _this = this;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: dt
          };
          cc.vv.NetManager.send(req, true);
          _this._subCallBack = res;
        });
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (this._subCallBack) {
          this._subCallBack(msg);
          this._subCallBack = null;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Frey_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3541a22hkJKmakZcdv/1Yas", "Frey_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("Frey_Popup");
        script_popup.Init();
        cc.vv.gameData.setPopupScript(script_popup);
        var script_freeWheel = this.node.addComponent("Frey_FreeWheel");
        script_freeWheel.Init();
        cc.vv.gameData.setFreeWheelScript(script_freeWheel);
        var script_collect = this.node.addComponent("Frey_Collect");
        script_collect.Init();
        cc.vv.gameData.setCollectScript(script_collect);
        var script_map = this.node.addComponent("Frey_Map");
        script_map.Init();
        cc.vv.gameData.setMapScript(script_map);
        var script_freeGame = this.node.addComponent("Frey_FreeGame");
        script_freeGame.Init();
        cc.vv.gameData.setFreeScript(script_freeGame);
        var script_mapWheel = this.node.addComponent("Frey_MapWheel");
        script_mapWheel.Init();
        cc.vv.gameData.setMapWheelScript(script_mapWheel);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Frey_MapWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7635eJipohHK4s+CCv3GVbU", "Frey_MapWheel");
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
        roundCount: 10,
        _canSpin: false,
        _data: null,
        _callBack: null,
        switchUis: []
      },
      _getRotation: function _getRotation(index) {
        var ret = 360 * -this.roundCount;
        var unitAngle = 45;
        var indexsAngle = [ 0, 1 * unitAngle - 360, 2 * unitAngle - 360, 3 * unitAngle - 360, 4 * unitAngle - 360, 5 * unitAngle - 360, 6 * unitAngle - 360, 7 * unitAngle - 360 ];
        ret += indexsAngle[index];
        return ret;
      },
      onLoad: function onLoad() {},
      Init: function Init() {
        this._map_wheel_node = cc.find("safe_node/map_game_node/map_wheel_node", this.node);
        this._map_wheel_node.active = false;
        this._bg = cc.find("bg", this._map_wheel_node);
        this._wheel = cc.find("wheel", this._map_wheel_node);
        this._spine_down = cc.find("spine_down", this._wheel);
        this._spine_bg = cc.find("spine_bg", this._wheel);
        this._lbl_base_prize = cc.find("base_prize/lbl", this._wheel);
        this._base_result = cc.find("base_prize/spine_result", this._wheel);
        this._board = cc.find("board", this._wheel);
        this._spine_win = cc.find("spine_win", this._wheel);
        this._btn_spin = cc.find("btn_spin", this._wheel);
        Global.btnClickEvent(this._btn_spin, this._onStartWheelHandler, this);
        this._spine_btn = cc.find("btn_spin/spine", this._wheel);
        this._spine_kuang = cc.find("spine_kuang", this._wheel);
        this.switchUis.push(cc.find("base_prize", this._wheel));
        this.switchUis.push(cc.find("board_bg", this._wheel));
        this.switchUis.push(this._board);
        this.switchUis.push(this._btn_spin);
        this.switchUis.push(cc.find("icon_arrow", this._wheel));
      },
      _onStartWheelHandler: function _onStartWheelHandler() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var msg;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (_this._canSpin) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              _this._btn_spin.stopAllActions();
              _this._canSpin = false;
              _context.next = 6;
              return cc.vv.gameData.reqSubGame({
                rtype: 1
              });

             case 6:
              msg = _context.sent;
              if (msg.data) {
                _this._data.freeCnt = msg.data.freeCnt;
                _this._data.winCoin = msg.data.winCoin;
                _this._data.idx = msg.data.idx;
                _this._data.jackpot = msg.data.jackpot;
              }
              _this._startWheel();

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _reset: function _reset() {
        this._board.angle = 0;
        this._bg.active = false;
        this._wheel.active = false;
        this._wheel.y = this._wheel.height / 2;
        this._spine_btn.active = false;
        this._spine_win.active = false;
        this._lbl_base_prize.getComponent(cc.Label).string = "";
        this._spine_down.active = false;
        this._spine_bg.active = false;
        this._base_result.active = false;
        this._data = {
          wheel_type: 0,
          freeCnt: 0,
          winCoin: 0,
          jackpot: null,
          idx: 0
        };
      },
      _startWheel: function _startWheel() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("WheelSpin");
              _this2._spine_btn.active = false;
              _this2._spine_kuang.active = false;
              cc.tween(_this2._board).to(6, {
                angle: _this2._getRotation(_this2._data.idx - 1)
              }, {
                easing: "quartInOut"
              }).start();
              _context2.next = 6;
              return cc.vv.gameData.awaitTime(6);

             case 6:
              _this2._spine_win.active = true;
              _this2._spine_win.getComponent(sp.Skeleton).setAnimation(0, "MapSuoDing_" + (2 === _this2._data.wheel_type ? "J" : "Y"), true);
              _this2._spine_bg.active = true;
              _this2._spine_bg.getComponent(sp.Skeleton).setAnimation(0, "MapBeiJing", true);
              _context2.next = 12;
              return cc.vv.gameData.awaitTime(1);

             case 12:
              if (!_this2._data.winCoin) {
                _context2.next = 30;
                break;
              }
              if (!_this2._data.jackpot) {
                _context2.next = 18;
                break;
              }
              _context2.next = 16;
              return cc.vv.gameData.getPopupScript().showJpWin(_this2._data.winCoin, _this2._data.jackpot.id);

             case 16:
              _context2.next = 26;
              break;

             case 18:
              Global.SlotsSoundMgr.playEffect("trophyNumbr");
              _this2._base_result.active = true;
              _this2._base_result.getComponent(sp.Skeleton).setAnimation(0, "Map_JieSuanLiZi", false);
              Global.doRoallNumEff(_this2._lbl_base_prize, 0, _this2._data.winCoin, 5, null, null, 0, true);
              _context2.next = 24;
              return cc.vv.gameData.awaitTime(5);

             case 24:
              _context2.next = 26;
              return cc.vv.gameData.getPopupScript().showWinMapWheel(_this2._data.winCoin);

             case 26:
              cc.vv.gameData.AddCoin(_this2._data.winCoin);
              cc.vv.gameData.GetTopScript().ShowCoin();
              _context2.next = 30;
              break;

             case 30:
              _context2.next = 32;
              return _this2.close();

             case 32:
              _this2._callBack && _this2._callBack({
                freeCnt: _this2._data.freeCnt,
                winCoin: _this2._data.winCoin
              });

             case 33:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _fresh: function _fresh() {
        var _this3 = this;
        var vo = cc.vv.gameData.getGameCfg().mapCfg[cc.vv.gameData.getMapInfo().currId.toString()];
        this._data.wheel_type = vo.type;
        this.switchUis.forEach(function(element) {
          element.getComponent("ImgSwitchCmp").setIndex(_this3._data.wheel_type - 1);
        });
        this._lbl_base_prize.getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.getMapInfo().startPrice);
      },
      open: function open(cb) {
        var _this4 = this;
        this._callBack = cb;
        this._map_wheel_node.active = true;
        this._reset();
        this._canSpin = true;
        this._fresh();
        this._bg.active = true;
        this._bg.opacity = 1;
        this._bg.runAction(cc.fadeTo(1, 200));
        this._wheel.active = true;
        Global.SlotsSoundMgr.playEffect("smallWheelShow");
        this._spine_down.active = true;
        this._spine_down.getComponent(sp.Skeleton).setAnimation(0, "Map_XiaLuo", true);
        cc.tween(this._wheel).to(.5, {
          y: 0
        }).call(function() {
          _this4._spine_down.active = false;
        }).start();
        this._spine_btn.active = true;
        this._spine_btn.getComponent(sp.Skeleton).setAnimation(0, "Spin_Loop_S_" + (2 === this._data.wheel_type ? "J" : "Y"), true);
        this._spine_kuang.active = true;
        this._spine_kuang.getComponent(sp.Skeleton).setAnimation(0, "Spin_Loop_G_" + (2 === this._data.wheel_type ? "J" : "Y"), true);
        cc.vv.gameData.checkAutoPlay(this._btn_spin, this._onStartWheelHandler.bind(this));
      },
      close: function close() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(res) {
                cc.tween(_this5._bg).to(.5, {
                  opacity: 0
                }).call(function() {
                  _this5._bg.active = false;
                }).start();
                cc.tween(_this5._wheel).to(.5, {
                  y: _this5._wheel.height / 2
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this5._wheel.active = false;
                  _this5._map_wheel_node.active = false;
                  Global.SlotsSoundMgr.playUnLoopBgm("bg_bgm");
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
  Frey_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b03d0qm1ztEo5tdWOZZPVpk", "Frey_Map");
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
        callBack: null,
        map_game_node: null,
        bg: null,
        btn_close: null,
        scrollView: null,
        map_flag: null,
        mapItems: []
      },
      Init: function Init() {
        this._initView();
        this._initListener();
      },
      _initView: function _initView() {
        this.map_game_node = cc.find("safe_node/map_game_node", this.node);
        this.bg = this.map_game_node.getChildByName("bg");
        this.btn_close = this.map_game_node.getChildByName("btn_close").getComponent(cc.Button);
        this.scrollView = this.map_game_node.getChildByName("scrollview").getComponent(cc.ScrollView);
        this.map_flag = this.scrollView.content.getChildByName("map_flag");
        this.pos_flag = this.scrollView.content.getChildByName("pos_flag");
        this.mapItems = [];
        var mapCfg = cc.vv.gameData.getGameCfg().mapCfg;
        for (var i = 1; i <= 100; i++) {
          var item = this.scrollView.content.getChildByName("item_" + i);
          item["id"] = i;
          cc.find("Map_kuang", item) && (cc.find("Map_kuang", item).active = false);
          cc.find("Map_Xing", item) && (cc.find("Map_Xing", item).active = false);
          cc.find("label_step", item).getComponent(cc.Label).string = i;
          if (cc.find("addfg", item)) {
            cc.find("addfg", item).active = false;
            cc.find("addfg/spine", item).active = false;
          }
          this.mapItems.push(item);
        }
        this._reset();
      },
      _initListener: function _initListener() {
        this.btn_close.node.on("click", this._onBtnCloseHandler.bind(this), this);
      },
      _showCloseBtn: function _showCloseBtn() {
        var _this = this;
        return new Promise(function(res) {
          _this.btn_close.node.active = true;
          _this.btn_close.node.scale = 0;
          _this.btn_close.interactable = true;
          cc.tween(_this.btn_close.node).to(.3, {
            scale: 1
          }, {
            easing: "backOut"
          }).call(function() {
            res();
          }).start();
        });
      },
      _onBtnCloseHandler: function _onBtnCloseHandler() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2.btn_close.interactable = false;
              cc.tween(_this2.btn_close.node).to(.3, {
                scale: 0
              }, {
                easing: "backIn"
              }).call(function() {
                _this2.exitMap(true);
              }).start();

             case 2:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitMap: function exitMap(isView) {
        var _this3 = this;
        Global.SlotsSoundMgr.playEffect("mapClose");
        isView || cc.vv.gameData.getCollectScript().initBar(true, 0);
        var svNode = this.scrollView.node;
        cc.tween(svNode).to(.3, {
          y: svNode.height
        }, {
          easing: "cubicOut"
        }).call(function() {
          _this3._reset();
          isView && cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
          if (_this3.callBack) {
            _this3.callBack();
            _this3.callBack = null;
          }
        }).start();
      },
      enterMap: function enterMap(isView, cb) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var data, currIndex, item, mapCfg, vo, respData;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("mapOpen");
              _this4.callBack = cb;
              _this4.map_game_node.active = true;
              _this4.bg.active = true;
              data = cc.vv.gameData.getMapInfo();
              currIndex = data.currId;
              !isView && data.state > 0 && (currIndex -= 1);
              isView && 100 == currIndex && (currIndex = 0);
              _this4._freshMap(currIndex);
              if (currIndex > 0) {
                item = _this4.mapItems[currIndex - 1];
                _this4.scrollView.scrollToOffset(cc.v2(0, Math.abs(item.y) - _this4.scrollView.node.height / 2));
              } else _this4.scrollView.scrollToBottom();
              _context2.next = 12;
              return _this4._scrollViewShow();

             case 12:
              if (!isView) {
                _context2.next = 16;
                break;
              }
              _this4._showCloseBtn();
              _context2.next = 33;
              break;

             case 16:
              _context2.next = 18;
              return _this4._moveMapFlag(data.currId);

             case 18:
              mapCfg = cc.vv.gameData.getGameCfg().mapCfg;
              vo = mapCfg[data.currId];
              if (!(vo.type < 3)) {
                _context2.next = 30;
                break;
              }
              _context2.next = 23;
              return new Promise(function(res) {
                cc.vv.gameData.getMapWheelScript().open(function(resp) {
                  res(resp);
                });
              });

             case 23:
              respData = _context2.sent;
              if (!respData.freeCnt) {
                _context2.next = 27;
                break;
              }
              _context2.next = 27;
              return _this4._addHouseFreeCnt(data.currId);

             case 27:
              _this4.exitMap(false);
              _context2.next = 33;
              break;

             case 30:
              cc.vv.gameData.setFreeSlotsCnt(vo.slot.cnt);
              cc.vv.gameData.setFreeWildCnt(vo.slot.wilds);
              _this4.exitMap(false);

             case 33:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _addHouseFreeCnt: function _addHouseFreeCnt(currIndex) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(res) {
                  var item, addfg;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      item = _this5._findNextHouse(currIndex);
                      if (!item) {
                        _context3.next = 18;
                        break;
                      }
                      _this5.scrollView.scrollToOffset(cc.v2(0, Math.abs(item.y) - _this5.scrollView.node.height / 2), .5);
                      _context3.next = 5;
                      return cc.vv.gameData.awaitTime(.5);

                     case 5:
                      Global.SlotsSoundMgr.playEffect("addSFG");
                      addfg = cc.find("addfg", item);
                      addfg.active = true;
                      addfg.setScale(0);
                      cc.tween(addfg).to(.5, {
                        scale: 1
                      }).start();
                      cc.find("spine", addfg).active = true;
                      cc.find("spine", addfg).getComponent(sp.Skeleton).setAnimation(0, "Map_ShuZi", false);
                      cc.find("spr", addfg).getComponent("ImgSwitchCmp").setIndex(cc.vv.gameData.getMapInfo().nextSpinCount - 5);
                      _context3.next = 15;
                      return cc.vv.gameData.awaitTime(1);

                     case 15:
                      res();
                      _context3.next = 19;
                      break;

                     case 18:
                      res();

                     case 19:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x) {
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
      _findNextHouse: function _findNextHouse(currIndex) {
        var mapCfg = cc.vv.gameData.getGameCfg().mapCfg;
        for (var i = currIndex + 1; i <= 100; i++) {
          var vo = mapCfg[i];
          if (3 == vo.type) return this.mapItems[i - 1];
        }
        return null;
      },
      _moveMapFlag: function _moveMapFlag(toIdx) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var vo, item;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              vo = cc.vv.gameData.getGameCfg().mapCfg[toIdx.toString()];
              item = _this6.mapItems[toIdx - 1];
              _context5.next = 4;
              return new Promise(function(res) {
                var pos = item.getChildByName("pos");
                cc.tween(_this6.map_flag).to(1, {
                  x: item.x + pos.x,
                  y: item.y + pos.y
                }).call(function() {
                  _this6.map_flag.scaleX = vo.dockerDir || -1;
                  res();
                }).start();
              });

             case 4:
              _context5.next = 6;
              return new Promise(function(res) {
                var animationName = "";
                var spineNode, spineAnim;
                if (1 == vo.type || 2 == vo.type) {
                  spineNode = cc.find("Map_Xing", item);
                  spineAnim = "Map_Xing";
                  Global.SlotsSoundMgr.playEffect("starWin");
                } else if (3 == vo.type) {
                  spineNode = cc.find("Map_Kuang", item);
                  spineAnim = "Map_Kuang_" + vo.slot.cnt;
                  Global.SlotsSoundMgr.playEffect("mapSFWin");
                }
                spineNode.active = true;
                spineNode.getComponent(sp.Skeleton).setAnimation(0, spineAnim, false);
                spineNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                  spineNode.getComponent(sp.Skeleton).setCompleteListener(null);
                  spineNode.active = false;
                  res();
                });
              });

             case 6:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _freshMap: function _freshMap(currIndex) {
        for (var i = 1; i <= 100; i++) this._markItemCmp(i, i <= currIndex);
        if (currIndex > 0) {
          var item = this.mapItems[currIndex - 1];
          var pos = item.getChildByName("pos");
          this.map_flag.x = item.x + pos.x;
          this.map_flag.y = item.y + pos.y;
          var vo = cc.vv.gameData.getGameCfg().mapCfg[currIndex.toString()];
          this.map_flag.scaleX = vo.dockerDir || -1;
          item = this._findNextHouse(currIndex);
          if (cc.vv.gameData.getMapInfo().nextSpinCount > 5) {
            cc.find("addfg", item).active = true;
            cc.find("addfg/spr", item).getComponent("ImgSwitchCmp").setIndex(cc.vv.gameData.getMapInfo().nextSpinCount - 5 - 1);
          }
        } else {
          this.map_flag.position = this.pos_flag.position;
          this.map_flag.scaleX = 1;
        }
      },
      _markItemCmp: function _markItemCmp(index, bGrey) {
        var vo = cc.vv.gameData.getGameCfg().mapCfg[index.toString()];
        var item = this.mapItems[index - 1];
        var color = new cc.Color().fromHEX(bGrey ? "#898989" : "#FFFFFF");
        item.color = color;
        item.children.forEach(function(children) {
          children.color = color;
        });
      },
      _scrollViewShow: function _scrollViewShow() {
        var _this7 = this;
        return new Promise(function(res) {
          var svNode = _this7.scrollView.node;
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
      _reset: function _reset() {
        this.bg.active = false;
        this.scrollView.node.active = false;
        this.scrollView.node.y = this.scrollView.node.height / 2;
        this.btn_close.node.active = false;
        this.map_game_node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  Frey_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0855dGWxHtPXapqJC4vxXDZ", "Frey_Popup");
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
      start: function start() {},
      Init: function Init() {
        this._node_popup = cc.find("safe_node/node_popup", this.node);
        this._node_popup.active = false;
        this._node_tri_free = cc.find("node_tri_free", this._node_popup);
        this._node_end_free = cc.find("node_end_free", this._node_popup);
        this._node_end_mapWheel = cc.find("node_end_mapWheel", this._node_popup);
        this._node_win_jp = cc.find("node_win_jp", this._node_popup);
        this._node_tri_free.active = false;
        this._node_end_free.active = false;
        this._node_end_mapWheel.active = false;
        this._node_win_jp.active = false;
        this._qp_yun = cc.find("safe_node/qp_yun", this.node);
        this._qp_character = cc.find("safe_node/qp_character", this.node);
        this._qp_yun.active = false;
        this._qp_character.active = false;
      },
      showTriFree: function showTriFree(isSuper, wildIdx) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var eff, bg, tit, spr1, spr2, lbl, spr_with, wild_normal, wild_super, btn, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                eff = isSuper ? "superfgbegin" : "fgbegin";
                Global.SlotsSoundMgr.playEffect(eff);
                _this._node_popup.active = true;
                _this._node_tri_free.active = true;
                bg = cc.find("bg", _this._node_tri_free);
                tit = cc.find("tit", _this._node_tri_free);
                spr1 = cc.find("spr1", _this._node_tri_free);
                spr2 = cc.find("spr2", _this._node_tri_free);
                lbl = cc.find("lbl", _this._node_tri_free);
                spr_with = cc.find("spr_with", _this._node_tri_free);
                wild_normal = cc.find("wild_normal", spr_with);
                wild_super = cc.find("wild_super", spr_with);
                btn = cc.find("btn", _this._node_tri_free);
                btn.getComponent(cc.Button).interactable = false;
                lbl.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                spr2.getComponent("ImgSwitchCmp").setIndex(isSuper ? 1 : 0);
                cc.find("spr_with/cnt", _this._node_tri_free).getComponent("ImgSwitchCmp").setIndex(cc.vv.gameData.getFreeSlotsCnt() - 1);
                wild_normal.active = !isSuper;
                wild_super.active = isSuper;
                isSuper ? wild_super.getComponent("ImgSwitchCmp").setIndex(wildIdx) : wild_normal.getComponent("ImgSwitchCmp").setIndex(wildIdx);
                bg.setScale(0);
                tit.setScale(0);
                spr1.setScale(0);
                spr2.setScale(0);
                lbl.setScale(0);
                spr_with.setScale(0);
                btn.setScale(0);
                scaleTime = .5;
                delayTime = .2;
                cc.tween(bg).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(tit).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr1).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr2).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(lbl).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr_with).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn).delay(2 * delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context3.next = 38;
                return cc.vv.gameData.awaitTime(2 * delayTime + scaleTime);

               case 38:
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this;
                clickFunc = function() {
                  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        btn.getComponent(cc.Button).interactable = false;
                        cc.tween(tit).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr1).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr2).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(lbl).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr_with).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(bg).delay(delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context.next = 10;
                        return cc.vv.gameData.awaitTime(delayTime + scaleTime);

                       case 10:
                        self._node_popup.active = false;
                        self._node_tri_free.active = false;
                        success();

                       case 13:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function clickFunc() {
                    return _ref2.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));

               case 44:
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
      getWildSpr: function getWildSpr() {
        var wildCol = cc.vv.gameData.getFreeWildCols();
        var sprList = [ "3,4,5", "4,5", "2,5", "1,2,3", "1", "2,3,4,5", "2,4", "1,2", "3,5", "3,4", "2,4", "1,5" ];
        wildCol.sort(function(a, b) {
          return a - b;
        });
        return sprList.indexOf(wildCol.toString());
      },
      showWinFree: function showWinFree(winCoin) {
        var _this2 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var bg, tit, spr1, kuang, freeCnt, btn_collect, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                Global.SlotsSoundMgr.playEffect("fgend");
                _this2._node_popup.active = true;
                _this2._node_end_free.active = true;
                bg = cc.find("bg", _this2._node_end_free);
                tit = cc.find("tit", _this2._node_end_free);
                spr1 = cc.find("spr1", _this2._node_end_free);
                kuang = cc.find("kuang", _this2._node_end_free);
                freeCnt = cc.find("freeCnt", _this2._node_end_free);
                btn_collect = cc.find("btn", _this2._node_end_free);
                btn_collect.getComponent(cc.Button).interactable = false;
                cc.find("kuang/lbl", _this2._node_end_free).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                cc.find("freeCnt/lbl", _this2._node_end_free).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                bg.setScale(0);
                tit.setScale(0);
                spr1.setScale(0);
                kuang.setScale(0);
                freeCnt.setScale(0);
                btn_collect.setScale(0);
                scaleTime = .5;
                delayTime = .2;
                cc.tween(bg).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(tit).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr1).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(kuang).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(freeCnt).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn_collect).delay(2 * delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context6.next = 29;
                return cc.vv.gameData.awaitTime(2 * delayTime + scaleTime);

               case 29:
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
                self = _this2;
                clickFunc = function() {
                  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                       case 0:
                        btn_collect.getComponent(cc.Button).interactable = false;
                        cc.tween(tit).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr1).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(kuang).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(freeCnt).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn_collect).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(bg).delay(delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context4.next = 9;
                        return cc.vv.gameData.awaitTime(delayTime + scaleTime);

                       case 9:
                        self._node_popup.active = false;
                        self._node_end_free.active = false;
                        success();

                       case 12:
                       case "end":
                        return _context4.stop();
                      }
                    }, _callee4);
                  }));
                  return function clickFunc() {
                    return _ref5.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                })));

               case 35:
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
      showWinMapWheel: function showWinMapWheel(winCoin) {
        var _this3 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success, failed) {
            var bg, tit, spr1, kuang, btn_collect, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                _this3._node_popup.active = true;
                _this3._node_end_mapWheel.active = true;
                bg = cc.find("bg", _this3._node_end_mapWheel);
                tit = cc.find("tit", _this3._node_end_mapWheel);
                spr1 = cc.find("spr1", _this3._node_end_mapWheel);
                kuang = cc.find("kuang", _this3._node_end_mapWheel);
                btn_collect = cc.find("btn", _this3._node_end_mapWheel);
                btn_collect.getComponent(cc.Button).interactable = false;
                cc.find("kuang/lbl", _this3._node_end_mapWheel).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                bg.setScale(0);
                tit.setScale(0);
                spr1.setScale(0);
                kuang.setScale(0);
                btn_collect.setScale(0);
                scaleTime = .5;
                delayTime = .2;
                cc.tween(bg).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(tit).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr1).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(kuang).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn_collect).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context9.next = 24;
                return cc.vv.gameData.awaitTime(delayTime + scaleTime);

               case 24:
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
                self = _this3;
                clickFunc = function() {
                  var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                       case 0:
                        btn_collect.getComponent(cc.Button).interactable = false;
                        cc.tween(tit).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr1).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(kuang).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn_collect).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(bg).delay(delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context7.next = 8;
                        return cc.vv.gameData.awaitTime(delayTime + scaleTime);

                       case 8:
                        self._node_popup.active = false;
                        self._node_end_mapWheel.active = false;
                        success();

                       case 11:
                       case "end":
                        return _context7.stop();
                      }
                    }, _callee7);
                  }));
                  return function clickFunc() {
                    return _ref8.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                })));

               case 30:
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
      showJpWin: function showJpWin(winCoin, jpIdx) {
        var _this4 = this;
        return new Promise(function() {
          var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
            var effList, bg, tit, spr1, jp, kuang, btn_collect, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                effList = [ "mini", "minor", "major", "grand" ];
                Global.SlotsSoundMgr.playEffect(effList[jpIdx - 1]);
                _this4._node_popup.active = true;
                _this4._node_win_jp.active = true;
                bg = cc.find("bg", _this4._node_win_jp);
                tit = cc.find("tit", _this4._node_win_jp);
                spr1 = cc.find("spr1", _this4._node_win_jp);
                jp = cc.find("jp", _this4._node_win_jp);
                kuang = cc.find("kuang", _this4._node_win_jp);
                btn_collect = cc.find("btn", _this4._node_win_jp);
                btn_collect.getComponent(cc.Button).interactable = false;
                cc.find("kuang/lbl", _this4._node_win_jp).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                jp.getComponent("ImgSwitchCmp").setIndex(jpIdx - 1);
                bg.setScale(0);
                tit.setScale(0);
                spr1.setScale(0);
                jp.setScale(0);
                kuang.setScale(0);
                btn_collect.setScale(0);
                scaleTime = .5;
                delayTime = .2;
                cc.tween(bg).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(tit).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr1).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(jp).delay(delayTime).to(scaleTime, {
                  scale: 2
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(kuang).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn_collect).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context12.next = 30;
                return cc.vv.gameData.awaitTime(delayTime + scaleTime);

               case 30:
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
                self = _this4;
                clickFunc = function() {
                  var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                      while (1) switch (_context10.prev = _context10.next) {
                       case 0:
                        btn_collect.getComponent(cc.Button).interactable = false;
                        cc.tween(tit).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr1).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(jp).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(kuang).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn_collect).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(bg).delay(delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context10.next = 9;
                        return cc.vv.gameData.awaitTime(delayTime + scaleTime);

                       case 9:
                        self._node_popup.active = false;
                        self._node_win_jp.active = false;
                        success();

                       case 12:
                       case "end":
                        return _context10.stop();
                      }
                    }, _callee10);
                  }));
                  return function clickFunc() {
                    return _ref11.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                })));

               case 36:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x7, _x8) {
            return _ref10.apply(this, arguments);
          };
        }());
      },
      playYunQpAnim: function playYunQpAnim(bRemain, bShow) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          var self, entry, _entry;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              _this5._qp_yun.active = true;
              self = _this5;
              if (!bRemain) {
                _context13.next = 6;
                break;
              }
              if (bShow) {
                Global.SlotsSoundMgr.playEffect("fgTransition");
                _this5._qp_yun.getComponent(sp.Skeleton).setAnimation(0, "FG_GuoChang_Intro", false);
                _this5._qp_yun.getComponent(sp.Skeleton).addAnimation(0, "FG_GuoChang_Loop", true);
              } else {
                Global.SlotsSoundMgr.playEffect("opencloud");
                entry = _this5._qp_yun.getComponent(sp.Skeleton).setAnimation(0, "FG_GuoChang_End", false);
                _this5._qp_yun.getComponent(sp.Skeleton).setTrackCompleteListener(entry, function() {
                  self._qp_yun.active = false;
                });
              }
              _context13.next = 14;
              break;

             case 6:
              _this5._qp_yun.getComponent(sp.Skeleton).setAnimation(0, "FG_GuoChang_Intro", false);
              _this5._qp_yun.getComponent(sp.Skeleton).addAnimation(0, "FG_GuoChang_Loop", false);
              _entry = _this5._qp_yun.getComponent(sp.Skeleton).addAnimation(0, "FG_GuoChang_End", false);
              _this5._qp_yun.getComponent(sp.Skeleton).setTrackCompleteListener(_entry, function() {
                self._qp_yun.active = false;
              });
              Global.SlotsSoundMgr.playEffect("fgTransition");
              _context13.next = 13;
              return cc.vv.gameData.awaitTime(.8);

             case 13:
              Global.SlotsSoundMgr.playEffect("opencloud");

             case 14:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      playXingQpAnim: function playXingQpAnim() {
        Global.SlotsSoundMgr.playEffect("superFgTransition");
        var self = this;
        this._qp_character.active = true;
        this._qp_character.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
        this._qp_character.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._qp_character.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Frey_Reels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "721f5OL2kFL5Y/wuoXsGvQa", "Frey_Reels");
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
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
          var reelStopEffect = "";
          var symbolEffect = "";
          var hasSymbol = false;
          var _iterator2 = _createForOfIteratorHelper(this._reelState), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _info = _step2.value;
              if (_info.isStop) {
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound[_info.stopIdx] : "";
                hasSymbol = true;
              } else reelStopEffect = _info.reelStopSound ? _info.reelStopSound : "";
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
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
  Frey_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7854Z4oj9CXYES0A2s9Wzv", "Frey_Slots");
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
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {},
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var mapInfo, wheelGame;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._topScript.SetBackLobby(false);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              mapInfo = cc.vv.gameData.getMapInfo();
              if (!(mapInfo && 1 === mapInfo.state)) {
                _context.next = 8;
                break;
              }
              _context.next = 6;
              return _this.enterCollectGame(true);

             case 6:
              _context.next = 14;
              break;

             case 8:
              if (!(mapInfo && 2 === mapInfo.state && cc.vv.gameData.GetTotalFree() > 0)) {
                _context.next = 14;
                break;
              }
              if (!(cc.vv.gameData.GetTotalFree() == cc.vv.gameData.GetFreeTime())) {
                _context.next = 12;
                break;
              }
              _context.next = 12;
              return _this.enterCollectGame(false);

             case 12:
              _context.next = 14;
              return cc.vv.gameData.getFreeScript().initShowSlotsData(false);

             case 14:
              wheelGame = cc.vv.gameData.getWheelGame();
              if (!wheelGame) {
                _context.next = 26;
                break;
              }
              if (!(0 === wheelGame.state || 1 === wheelGame.state)) {
                _context.next = 23;
                break;
              }
              _context.next = 19;
              return cc.vv.gameData.getFreeWheelScript().enterFreeWheel(wheelGame.state);

             case 19:
              _context.next = 21;
              return _this.triFreeGame();

             case 21:
              _context.next = 26;
              break;

             case 23:
              if (!(2 === wheelGame.state)) {
                _context.next = 26;
                break;
              }
              _context.next = 26;
              return cc.vv.gameData.getFreeScript().initShowSlotsData(false);

             case 26:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 28:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      StartMove: function StartMove() {
        if (cc.vv.gameData.isFreeGame()) cc.vv.gameData.getFreeScript().StartMove(); else {
          this._super();
          Global.SlotsSoundMgr.playNormalBgm();
        }
      },
      StopMove: function StopMove() {
        cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().StopMove() : this._super();
      },
      onMsgSpine: function onMsgSpine(msg) {
        cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().onMsgSpine(msg) : this._super(msg);
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this2 = this;
        if (!this._cfg.reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._col;
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
            stateInfo.stopIdx = 0;
            var stopCnt = 0;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i = 0; _i < reelResults.length; _i++) {
              var item = _this2._reels[_i];
              var reelRes = reelResults[_i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i] > 0 && isContinuous && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              if (reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous) {
                stateInfo.isStop = true;
                stateInfo.stopIdx = stopCnt;
                stopCnt += 1;
              }
              stateInfo.continuous && stateInfo.counts[_i] > 0 && 0 == reelCountOfID && (isContinuous = false);
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
      OnSpinEnd: function OnSpinEnd() {
        cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().OnSpinEnd() : this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3.playCollectAnim();
              _this3.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.getFreeWinCoin());
              _context2.next = 7;
              return new Promise(function(sucess, failed) {
                _this3.ShowBottomWin(nWin, nTotal, true, sucess);
              });

             case 7:
              if (!(1 == _this3._gameInfo.mapInfo.state || 2 == _this3._gameInfo.mapInfo.state && _this3._gameInfo.freeCnt == _this3._gameInfo.allFreeCnt)) {
                _context2.next = 16;
                break;
              }
              if (nWin) {
                _context2.next = 11;
                break;
              }
              _context2.next = 11;
              return cc.vv.gameData.awaitTime(1.5);

             case 11:
              _context2.next = 13;
              return _this3.enterCollectGame(false);

             case 13:
              if (!(2 == _this3._gameInfo.mapInfo.state)) {
                _context2.next = 16;
                break;
              }
              _context2.next = 16;
              return _this3.triFreeGame();

             case 16:
              if (!(_this3._gameInfo.wheelGame && 0 == _this3._gameInfo.wheelGame.state)) {
                _context2.next = 21;
                break;
              }
              _context2.next = 19;
              return _this3.triFreeWheel();

             case 19:
              _context2.next = 21;
              return _this3.triFreeGame();

             case 21:
              _this3.CanDoNextRound();

             case 22:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      enterCollectGame: function enterCollectGame(bBack) {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _this4._bottomScript.ShowBtnsByState("moveing_1");
                if (bBack) {
                  _context3.next = 4;
                  break;
                }
                _context3.next = 4;
                return cc.vv.gameData.getCollectScript().fullSjt();

               case 4:
                cc.vv.gameData.getMapScript().enterMap(false, success);

               case 5:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      triFreeWheel: function triFreeWheel() {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
            var cards, i;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                cards = _this5._gameInfo.resultCards;
                for (i = 0; i < cards.length; i++) 2 === cards[i] && _this5.GetSymbolByIdx(i + 1).playTriggerAnimation();
                Global.SlotsSoundMgr.playEffect("triggering");
                _context4.next = 5;
                return cc.vv.gameData.awaitTime(2);

               case 5:
                _context4.next = 7;
                return cc.vv.gameData.getFreeWheelScript().enterFreeWheel();

               case 7:
                success();

               case 8:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      triFreeGame: function triFreeGame() {
        var _this6 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
            var mapCfg, data, vo;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                if (!(2 == cc.vv.gameData.getMapInfo().state)) {
                  _context5.next = 11;
                  break;
                }
                mapCfg = cc.vv.gameData.getGameCfg().mapCfg;
                data = cc.vv.gameData.getMapInfo();
                vo = mapCfg[data.currId];
                _context5.next = 6;
                return cc.vv.gameData.getPopupScript().showTriFree(true, vo.slot.wildIdx - 1);

               case 6:
                cc.vv.gameData.getPopupScript().playXingQpAnim();
                _context5.next = 9;
                return cc.vv.gameData.awaitTime(2);

               case 9:
                _context5.next = 14;
                break;

               case 11:
                _context5.next = 13;
                return cc.vv.gameData.getPopupScript().showTriFree(false, cc.vv.gameData.getWheelGame().wildResultId - 1);

               case 13:
                cc.vv.gameData.getPopupScript().playYunQpAnim(true, false);

               case 14:
                _this6.ShowGameview(true);
                _context5.next = 17;
                return cc.vv.gameData.getFreeScript().initShowSlotsData(true);

               case 17:
                success();

               case 18:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x3) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      playCollectAnim: function playCollectAnim() {
        var cards = this._gameInfo.resultCards;
        var list = [];
        for (var i = 0; i < cards.length; i++) 3 === cards[i] && list.push(i + 1);
        list.length > 0 && cc.vv.gameData.getCollectScript().playCollectAnim(list);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Frey_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e2eaDRt6tHQ7eGCgRkmlpX", "Frey_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      ClearState: function ClearState() {
        this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.stopWinTweenAction();
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
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
          if (cfg.symbol[id].win_ani && "" != cfg.symbol[id].win_ani.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) if (cfg.symbol[id].win_ani.tri_name) {
              nodeSp.setAnimation(0, cfg.symbol[id].win_ani.tri_name, false);
              nodeSp.addAnimation(0, cfg.symbol[id].win_ani.name, true);
            } else nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
          }
        } else {
          this._showNode.active = true;
          this.playWinTweenAction();
        }
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
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, true);
          }
        }
        return isPlay;
      },
      playCollectResult: function playCollectResult() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].collect_node) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].collect_node, this.node);
          this._showNode.active = true;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Frey_Cfg", "Frey_Collect", "Frey_FreeGame", "Frey_FreeReel", "Frey_FreeSlots", "Frey_FreeWheel", "Frey_GameData", "Frey_Logic", "Frey_Map", "Frey_MapWheel", "Frey_Popup", "Frey_Reels", "Frey_Slots", "Frey_Symbol" ]);