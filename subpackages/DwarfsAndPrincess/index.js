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
  DwarfsAndPrincess_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5dec8MpOqxFup3K27ENusTm", "DwarfsAndPrincess_Cfg");
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
          name: "animation1_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 101, {
        node: "s101",
        win_node: "w1",
        win_ani: {
          name: "animation2_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation2_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 102, {
        node: "s102",
        win_node: "w1",
        win_ani: {
          name: "animation3_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation3_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 103, {
        node: "s103",
        win_node: "w1",
        win_ani: {
          name: "animation4_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation4_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 104, {
        node: "s104",
        win_node: "w1",
        win_ani: {
          name: "animation5_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation5_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 105, {
        node: "s105",
        win_node: "w1",
        win_ani: {
          name: "animation7_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation7_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 106, {
        node: "s106",
        win_node: "w1",
        win_ani: {
          name: "animation10_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation10_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        trigger_ani: {
          name: "animation_3",
          zIndex: 300,
          loop: true
        },
        stop_ani: {
          name: "animation_1",
          zIndex: 400
        },
        idle_ani: {
          name: "animation_2",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 201, {
        node: "s201",
        win_node: "w201",
        idle_ani: {
          name: "animation5_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation5_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation5_3",
          zIndex: 300,
          loop: true
        }
      }), _defineProperty(_symbol, 202, {
        node: "s202",
        win_node: "w201",
        idle_ani: {
          name: "animation4_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation4_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation4_3",
          zIndex: 300,
          loop: true
        }
      }), _defineProperty(_symbol, 203, {
        node: "s203",
        win_node: "w201",
        idle_ani: {
          name: "animation3_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation3_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation3_3",
          zIndex: 300,
          loop: true
        }
      }), _defineProperty(_symbol, 204, {
        node: "s204",
        win_node: "w201",
        idle_ani: {
          name: "animation2_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation2_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation2_3",
          zIndex: 300,
          loop: true
        }
      }), _defineProperty(_symbol, 205, {
        node: "s205",
        win_node: "w201",
        idle_ani: {
          name: "animation1_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 300,
          loop: true
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        idle_ani: {
          name: "animation_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation_3",
          zIndex: 300,
          loop: true
        }
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w301",
        idle_ani: {
          name: "animation5_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation5_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation5_3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 302, {
        node: "s302",
        win_node: "w301",
        idle_ani: {
          name: "animation4_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation4_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation4_3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 303, {
        node: "s303",
        win_node: "w301",
        idle_ani: {
          name: "animation3_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation3_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation3_3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 304, {
        node: "s304",
        win_node: "w301",
        idle_ani: {
          name: "animation2_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation2_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation2_3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 305, {
        node: "s305",
        win_node: "w301",
        idle_ani: {
          name: "animation1_2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 401, {
        node: "s401",
        win_node: "w401",
        idle_ani: {
          name: "animation_2",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 402, {
        node: "s402",
        win_node: "w402",
        idle_ani: {
          name: "animation_2",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 403, {
        node: "s403",
        win_node: "w403",
        idle_ani: {
          name: "animation_2",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 501, {
        node: "s501",
        win_node: "w501",
        trigger_ani: {
          name: "animation1",
          zIndex: 400,
          loop: true
        }
      }), _defineProperty(_symbol, 502, {
        node: "s502",
        win_node: "w501",
        trigger_ani: {
          name: "animation2",
          zIndex: 400,
          loop: true
        }
      }), _defineProperty(_symbol, 503, {
        node: "s503",
        win_node: "w501",
        trigger_ani: {
          name: "animation3",
          zIndex: 400,
          loop: true
        }
      }), _defineProperty(_symbol, 504, {
        node: "s504",
        win_node: "w501",
        trigger_ani: {
          name: "animation4",
          zIndex: 400,
          loop: true
        }
      }), _defineProperty(_symbol, 505, {
        node: "s505",
        win_node: "w501",
        trigger_ani: {
          name: "animation5",
          zIndex: 400,
          loop: true
        }
      }), _symbol),
      wildIds: [ 1, 101, 102, 103, 104, 105, 106 ],
      scatterId: 2,
      bonusId: 3,
      flowerIds: [ 401, 402, 403 ],
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "DwarfsAndPrincess_Slots",
        Reels: "DwarfsAndPrincess_Reel",
        Symbols: "DwarfsAndPrincess_Symbol"
      },
      col: 5,
      row: 5,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 89
      },
      helpItems: [ "games/DwarfsAndPrincess/prefab/LMSlots_Help_item1", "games/DwarfsAndPrincess/prefab/LMSlots_Help_item2", "games/DwarfsAndPrincess/prefab/LMSlots_Help_item3", "games/DwarfsAndPrincess/prefab/LMSlots_Help_item4", "games/DwarfsAndPrincess/prefab/LMSlots_Help_item5", "games/DwarfsAndPrincess/prefab/LMSlots_Help_item6", "games/DwarfsAndPrincess/prefab/LMSlots_Help_item7" ],
      autoModelDelay: 1,
      randomSymbols: [ 401, 402, 403, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      commEffect: {
        path: "games/DwarfsAndPrincess/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      normalBgm: "base_bgm",
      AddAntiTime: 2.4,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/DwarfsAndPrincess/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_bonus",
        antSound: "reel_notify1_1",
        antSpeed: 2e3
      } ],
      sysFloatOffsetPos: cc.v2(0, 80)
    };
    Cfg.NeedIdleIds = [ 201, 202, 203, 204, 205, 3, 301, 302, 303, 304, 305, 401, 402, 403 ];
    Cfg.StoreItemType = {
      freeCnt: 1,
      stickyWild: 2,
      multWild: 3,
      randWild: 4,
      removeSymbol: 5,
      extraBlastZone: 6,
      extraBonus: 7
    };
    Cfg.WaterValues = [ 5, 10, 15, 20, 25, 35, 50 ];
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f0f62S/e2dFBoNaFudg02RT", "DwarfsAndPrincess_Character");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spine: sp.Skeleton
      },
      onLoad: function onLoad() {},
      start: function start() {},
      toNormalState: function toNormalState() {},
      toFreeState: function toFreeState() {},
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "adb4eui6S1E2o2beKXDHNYT", "DwarfsAndPrincess_Collect");
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
        spineBg: sp.Skeleton,
        label: cc.Label,
        icon: cc.Node,
        spineArrive: sp.Skeleton,
        spineLock: sp.Skeleton,
        spineWaterDropTemplate: sp.Skeleton,
        _isOpen: false,
        _waterDropArr: []
      },
      onLoad: function onLoad() {
        this._initListener();
      },
      start: function start() {
        var _this = this;
        this.scheduleOnce(function() {
          _this._init();
        });
      },
      _initListener: function _initListener() {
        var _this2 = this;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this2.showCollect(false);
        }, this);
        this.node.on("click", function() {
          if (SlotsFacade.dm.hasFree()) return;
          if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
          if (SlotsFacade.dm.GetAutoModelTime() > 0) return;
          _this2._isOpen ? _this2._openStore() : _this2._openCollect();
        }, this);
      },
      _init: function _init() {
        this.setWaterDropCnt(SlotsFacade.dm.energyData.waterCnt);
        this.showCollect(true);
      },
      _openStore: function _openStore() {
        SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
        SlotsFacade.storeGame.open(function() {
          SlotsFacade.bottomCmp.ShowBtnsByState("idle");
        });
      },
      _openCollect: function _openCollect() {
        var betList = SlotsFacade.dm.GetBetMults();
        var needBet = SlotsFacade.dm.getDeskInfo().needBet;
        if (needBet > betList.length) return;
        SlotsFacade.dm.SetBetIdx(needBet);
        SlotsFacade.bottomCmp.ShowBetCoin();
        var nTotal = cc.vv.gameData.GetTotalBet();
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, nTotal);
      },
      collectEnergy: function collectEnergy() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var endPos, promiseArr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(!_this3._waterDropArr || _this3._waterDropArr.length < 1)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              SlotsFacade.soundMgr.playEffect("store_fly");
              endPos = _this3.icon.getPosition();
              promiseArr = [];
              _this3._waterDropArr.forEach(function(drop) {
                drop.setAnimation(0, drop.node.endAniName, false);
                promiseArr.push(new Promise(function(res) {
                  cc.tween(drop.node).to(.5, {
                    x: endPos.x,
                    y: endPos.y,
                    scale: 1.2
                  }, {
                    easing: "cubicIn"
                  }).call(function() {
                    drop.node.removeFromParent();
                    res();
                  }).start();
                }));
              });
              _this3._waterDropArr = [];
              _context.next = 9;
              return SlotsFacade.delayTime(.5);

             case 9:
              _this3.setWaterDropCnt(SlotsFacade.dm.energyData.waterCnt, true);

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showCollect: function showCollect(isInit) {
        var _this4 = this;
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          if (isInit) this.spineBg.setAnimation(0, "animation1_3", true); else if (!this._isOpen) {
            SlotsFacade.soundMgr.playEffect("store_unlock");
            this.spineLock.node.active = true;
            this.spineLock.setAnimation(0, "animation1", false);
            this.spineLock.setCompleteListener(function() {
              _this4.spineLock.setCompleteListener(null);
              _this4.spineLock.node.active = false;
            });
            this.spineBg.setAnimation(0, "animation1_3", true);
          }
          this.icon.color = cc.Color.WHITE;
          this.label.node.color = cc.Color.WHITE;
        } else {
          if (isInit) this.spineBg.setAnimation(0, "animation1_2", true); else if (this._isOpen) {
            SlotsFacade.soundMgr.playEffect("store_lock");
            this.spineLock.node.active = true;
            this.spineLock.setAnimation(0, "animation1_1", false);
            this.spineLock.setCompleteListener(function() {
              _this4.spineLock.setCompleteListener(null);
              _this4.spineLock.node.active = false;
            });
            this.spineBg.setAnimation(0, "animation1_2", true);
          }
          this.icon.color = cc.Color.GRAY;
          this.label.node.color = cc.Color.GRAY;
        }
        this._isOpen = boo;
      },
      setWaterDropCnt: function setWaterDropCnt(cnt, playAni) {
        var _this5 = this;
        this.label.string = Global.FormatNumToComma(cnt);
        if (playAni) {
          this.spineArrive.node.active = true;
          this.spineArrive.setAnimation(0, "animation", false);
          this.spineArrive.setCompleteListener(function() {
            _this5.spineArrive.setCompleteListener(null);
            _this5.spineArrive.node.active = false;
          });
        }
      },
      addAppearanceDrop: function addAppearanceDrop(val, globalPos) {
        var drop = cc.instantiate(this.spineWaterDropTemplate.node).getComponent(sp.Skeleton);
        drop.node.active = true;
        drop.node.parent = this.node;
        drop.node.setPosition(this.node.convertToNodeSpaceAR(globalPos));
        var WaterValues = SlotsFacade.dm.getGameCfg().WaterValues;
        var index = WaterValues.indexOf(val);
        -1 == index && (index = 0);
        drop.node.startAniName = "animation".concat(WaterValues[index], "_1");
        drop.node.endAniName = "animation".concat(WaterValues[index]);
        drop.setAnimation(0, drop.node.startAniName, false);
        this._waterDropArr.push(drop);
      },
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a492bQtxpVF8rckx3qpBFq3", "DwarfsAndPrincess_FlowCtrl");
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
      extends: cc.Component,
      enterRoom: function enterRoom() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rest, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              rest = cc.vv.gameData.GetFreeTime();
              if (!(rest > 0)) {
                _context.next = 8;
                break;
              }
              nTotal = cc.vv.gameData.GetTotalFreeWin();
              SlotsFacade.bottomCmp.SetWin(nTotal);
              _context.next = 6;
              return _this.enterFreeGame(true);

             case 6:
              _context.next = 9;
              break;

             case 8:
              SlotsFacade.slots.showBlastZone(1, true);

             case 9:
              SlotsFacade.slots.CanDoNextRound();

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      startMove: function startMove() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.wildGame.startMove();

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onSpinMsg: function onSpinMsg(msg) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var cards;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _context3.next = 2;
              return SlotsFacade.wildGame.onSpinMsg();

             case 2:
              SlotsFacade.slots._gameInfo = msg;
              cards = msg.resultCards;
              SlotsFacade.slots.SetSlotsResult(cards);
              SlotsFacade.slots.SetReelStateInfo(cards);

             case 6:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return SlotsFacade.wildGame.spinEnd();

             case 2:
              _this2.collectEnergy();
              _context4.next = 5;
              return SlotsFacade.flowerGame.collectFlower();

             case 5:
              SlotsFacade.slots.ShowWinTrace();
              _context4.next = 8;
              return _this2.settleReward();

             case 8:
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context4.next = 13;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 13:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context4.next = 33;
                break;
              }
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context4.next = 29;
                break;
              }
              _context4.next = 17;
              return SlotsFacade.slots.playTriggerAni(SlotsFacade.dm.getSpinData().scatterZJLuXian.indexs);

             case 17:
              if (!SlotsFacade.dm.currExtraFreeInfo) {
                _context4.next = 24;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.stopBgm();
              _context4.next = 22;
              return SlotsFacade.popup.showStartWheel();

             case 22:
              _context4.next = 24;
              return new Promise(function(res) {
                SlotsFacade.freeWheelGame.open(SlotsFacade.dm.currExtraFreeInfo.blastZone.length, res);
              });

             case 24:
              SlotsFacade.slots.Backup();
              _context4.next = 27;
              return _this2.enterFreeGame();

             case 27:
              _context4.next = 31;
              break;

             case 29:
              _context4.next = 31;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), false);

             case 31:
              _context4.next = 53;
              break;

             case 33:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context4.next = 53;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.stopBgm();
              if (!(1 == SlotsFacade.dm.energyData.state)) {
                _context4.next = 46;
                break;
              }
              if (!(SlotsFacade.dm.getFreeWinCoin() > 0)) {
                _context4.next = 42;
                break;
              }
              _context4.next = 40;
              return SlotsFacade.popup.showWinStoreGold(SlotsFacade.dm.getFreeWinCoin());

             case 40:
              _context4.next = 44;
              break;

             case 42:
              _context4.next = 44;
              return SlotsFacade.popup.showWinStoreZero();

             case 44:
              _context4.next = 48;
              break;

             case 46:
              _context4.next = 48;
              return SlotsFacade.popup.showWinFreeGold(SlotsFacade.dm.getFreeWinCoin());

             case 48:
              _context4.next = 50;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 50:
              SlotsFacade.slots.Resume();
              _context4.next = 53;
              return _this2.enterNormalGame();

             case 53:
              SlotsFacade.slots.CanDoNextRound();

             case 54:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterFreeGame: function enterFreeGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var freeType, storeInfo, total, rest, blastZoneRow;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              freeType = 1;
              storeInfo = SlotsFacade.dm.energyData;
              1 == storeInfo.state && (freeType = 2);
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.character.toFreeState();
              SlotsFacade.soundMgr.playFreeBgm();
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = 1 == freeType;
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
              if (!(2 == freeType)) {
                _context5.next = 18;
                break;
              }
              SlotsFacade.collect.hide();
              _context5.next = 16;
              return SlotsFacade.wildGame.enterWildGame();

             case 16:
              _context5.next = 19;
              break;

             case 18:
              SlotsFacade.collect.show();

             case 19:
              SlotsFacade.flowerGame.hide();
              blastZoneRow = 1;
              SlotsFacade.dm.energyData.freeInfo && SlotsFacade.dm.energyData.freeInfo.hasOwnProperty("extraBlastZone") ? blastZoneRow = SlotsFacade.dm.energyData.freeInfo.extraBlastZone.length : SlotsFacade.dm.currExtraFreeInfo && SlotsFacade.dm.currExtraFreeInfo.blastZone && (blastZoneRow = SlotsFacade.dm.currExtraFreeInfo.blastZone.length);
              _context5.next = 24;
              return SlotsFacade.slots.showBlastZone(blastZoneRow, false);

             case 24:
              _context5.next = 26;
              return SlotsFacade.delayTime(.5);

             case 26:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      enterNormalGame: function enterNormalGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var nTotal;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              SlotsFacade.collect.show();
              SlotsFacade.bottomCmp.ShowFreeModel(false);
              SlotsFacade.mainPanel.showBg(0);
              SlotsFacade.character.toNormalState();
              Global.SlotsSoundMgr.playNormalBgm(true);
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = true;
              SlotsFacade.wildGame.exitWildGame();
              SlotsFacade.flowerGame.show();
              SlotsFacade.slots.showBlastZone(1, true);
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context6.next = 13;
                break;
              }
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              _context6.next = 13;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nTotal, nTotal, true, res);
              });

             case 13:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      collectEnergy: function collectEnergy() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _context7.next = 2;
              return SlotsFacade.collect.collectEnergy();

             case 2:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      settleReward: function settleReward() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var rewardData, sum, _iterator, _step, _loop, _iterator2, _step2, data, symbol, goldDataCoin, _iterator3, _step3, goldDatum, _symbol;
          return regeneratorRuntime.wrap(function _callee8$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              rewardData = SlotsFacade.dm.getRewardData();
              if (rewardData) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return");

             case 3:
              sum = 0;
              _iterator = _createForOfIteratorHelper(rewardData.honeycombData);
              _context9.prev = 5;
              _loop = regeneratorRuntime.mark(function _loop() {
                var data, symbol, wheelData, wheelItemData, symbolData;
                return regeneratorRuntime.wrap(function _loop$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                   case 0:
                    data = _step.value;
                    symbol = SlotsFacade.slots.GetSymbolByIdx(data.idx);
                    symbol.playTriggerAnimation();
                    _context8.next = 5;
                    return new Promise(function(res) {
                      SlotsFacade.miniWheelGame.open(data, res);
                    });

                   case 5:
                    wheelData = data.item.wheel;
                    wheelItemData = wheelData.items[wheelData.resultId - 1];
                    symbolData = {};
                    if (wheelItemData.coin) {
                      sum += wheelItemData.coin;
                      symbolData.coin = wheelItemData.coin;
                    } else sum += wheelItemData.jackpot.value;
                    symbol.ShowById(wheelItemData.card, symbolData);
                    symbol.playTriggerAnimation();
                    _context8.next = 13;
                    return new Promise(function(res) {
                      SlotsFacade.bottomCmp.ShowWin(sum, 1, 0, res);
                    });

                   case 13:
                   case "end":
                    return _context8.stop();
                  }
                }, _loop);
              });
              _iterator.s();

             case 8:
              if ((_step = _iterator.n()).done) {
                _context9.next = 12;
                break;
              }
              return _context9.delegateYield(_loop(), "t0", 10);

             case 10:
              _context9.next = 8;
              break;

             case 12:
              _context9.next = 17;
              break;

             case 14:
              _context9.prev = 14;
              _context9.t1 = _context9["catch"](5);
              _iterator.e(_context9.t1);

             case 17:
              _context9.prev = 17;
              _iterator.f();
              return _context9.finish(17);

             case 20:
              _iterator2 = _createForOfIteratorHelper(rewardData.jackpotData);
              _context9.prev = 21;
              _iterator2.s();

             case 23:
              if ((_step2 = _iterator2.n()).done) {
                _context9.next = 36;
                break;
              }
              data = _step2.value;
              symbol = SlotsFacade.slots.GetSymbolByIdx(data.idx);
              symbol.playTriggerAnimation();
              _context9.next = 29;
              return SlotsFacade.delayTime(1);

             case 29:
              _context9.next = 31;
              return SlotsFacade.popup.showWinJPGold(data.item.jackpot.id, data.item.jackpot.value);

             case 31:
              sum += data.item.jackpot.value;
              _context9.next = 34;
              return new Promise(function(res) {
                SlotsFacade.bottomCmp.ShowWin(sum, 1, 0, res);
              });

             case 34:
              _context9.next = 23;
              break;

             case 36:
              _context9.next = 41;
              break;

             case 38:
              _context9.prev = 38;
              _context9.t2 = _context9["catch"](21);
              _iterator2.e(_context9.t2);

             case 41:
              _context9.prev = 41;
              _iterator2.f();
              return _context9.finish(41);

             case 44:
              goldDataCoin = 0;
              _iterator3 = _createForOfIteratorHelper(rewardData.goldData);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  goldDatum = _step3.value;
                  goldDataCoin += goldDatum.item.coin;
                  sum += goldDatum.item.coin;
                  _symbol = SlotsFacade.slots.GetSymbolByIdx(goldDatum.idx);
                  _symbol.playTriggerAnimation();
                  SlotsFacade.soundMgr.playEffect("bonus_end_show");
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              if (!(goldDataCoin > 0)) {
                _context9.next = 50;
                break;
              }
              _context9.next = 50;
              return SlotsFacade.delayTime(1);

             case 50:
             case "end":
              return _context9.stop();
            }
          }, _callee8, null, [ [ 5, 14, 17, 20 ], [ 21, 38, 41, 44 ] ]);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_Flower: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a09e5C/fFHRZ5f38vUDA4+", "DwarfsAndPrincess_Flower");
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
        red: cc.Node,
        purple: cc.Node,
        blue: cc.Node,
        fly_ui_template: cc.Node,
        _data: null
      },
      onLoad: function onLoad() {
        this._data = {
          blue: 0,
          purple: 0,
          red: 0
        };
      },
      start: function start() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.updateFlower();
          _this._initListener();
        });
      },
      _initListener: function _initListener() {
        var _this2 = this;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this2.updateFlower();
        }, this);
      },
      updateFlower: function updateFlower() {
        var idx = SlotsFacade.dm.GetBetIdx();
        var freeExtraInfos = SlotsFacade.dm.getDeskInfo().freeExtraInfos;
        var flowerInfo = freeExtraInfos[idx - 1];
        flowerInfo || (flowerInfo = freeExtraInfos[freeExtraInfos.length - 1]);
        this._data.blue = flowerInfo.blue.freeCnt;
        this._data.purple = flowerInfo.purple.freeCnt;
        this._data.red = flowerInfo.red.freeCnt;
        this.red.getChildByName("label").getComponent(cc.Label).string = this._data.red.toString();
        this.purple.getChildByName("label").getComponent(cc.Label).string = this._data.purple.toString();
        this.blue.getChildByName("label").getComponent(cc.Label).string = this._data.blue.toString();
      },
      collectFlower: function collectFlower() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var petalInfo, flowerCfg, i, petal, cfgItem, _loop, j;
          return regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (_this3.node.active) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              petalInfo = SlotsFacade.dm.getSpinData().petalInfo;
              if (!(!petalInfo || petalInfo.length < 1)) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");

             case 5:
              flowerCfg = {
                401: {
                  iconIdx: 0,
                  flowName: "blue"
                },
                402: {
                  iconIdx: 1,
                  flowName: "purple"
                },
                403: {
                  iconIdx: 2,
                  flowName: "red"
                }
              };
              i = 0;

             case 7:
              if (!(i < petalInfo.length)) {
                _context2.next = 23;
                break;
              }
              petal = petalInfo[i];
              cfgItem = flowerCfg[petal.card];
              if (cfgItem) {
                _context2.next = 13;
                break;
              }
              console.log("\u82b1\u6735\u6570\u636e\u51fa\u9519", petal);
              return _context2.abrupt("continue", 20);

             case 13:
              _loop = regeneratorRuntime.mark(function _loop(j) {
                var ui, distNode, pos, spine;
                return regeneratorRuntime.wrap(function _loop$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                   case 0:
                    SlotsFacade.soundMgr.playEffect("bonus_fly");
                    ui = cc.instantiate(_this3.fly_ui_template);
                    ui.active = true;
                    ui.parent = _this3.node;
                    ui.getComponent("ImgSwitchCmp").setIndex(cfgItem.iconIdx);
                    distNode = _this3[cfgItem.flowName];
                    pos = SlotsFacade.slots.getIdxGlobalPos(petal.idx);
                    pos = _this3.node.convertToNodeSpaceAR(pos);
                    ui.setPosition(pos);
                    cc.tween(ui).to(.5, {
                      x: distNode.x,
                      y: distNode.y
                    }).call(function() {
                      ui.removeFromParent();
                    }).start();
                    _context.next = 12;
                    return SlotsFacade.delayTime(.5);

                   case 12:
                    _this3._data[cfgItem.flowName] += 1;
                    distNode.getChildByName("label").getComponent(cc.Label).string = _this3._data[cfgItem.flowName].toString();
                    spine = distNode.getChildByName("spine").getComponent(sp.Skeleton);
                    spine.setAnimation(0, "animation_3", false);
                    spine.addAnimation(0, "animation_2", true);
                    _context.next = 19;
                    return new Promise(function(res) {
                      spine.setCompleteListener(function() {
                        spine.setCompleteListener(null);
                        res();
                      });
                    });

                   case 19:
                   case "end":
                    return _context.stop();
                  }
                }, _loop);
              });
              j = 0;

             case 15:
              if (!(j < petal.cnt)) {
                _context2.next = 20;
                break;
              }
              return _context2.delegateYield(_loop(j), "t0", 17);

             case 17:
              j++;
              _context2.next = 15;
              break;

             case 20:
              i++;
              _context2.next = 7;
              break;

             case 23:
             case "end":
              return _context2.stop();
            }
          }, _callee);
        }))();
      },
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.node.active = true;
        this.updateFlower();
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_FreeWheelGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e27bepHsRlPFoMfEETyef24", "DwarfsAndPrincess_FreeWheelGame");
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
    var FlowerCfg = {
      blue: {
        type: 1,
        blastZoneCnt: 1,
        idleAni: "animation1_1",
        triggerAni: "animation1_2"
      },
      purple: {
        type: 2,
        blastZoneCnt: 2,
        idleAni: "animation2_1",
        triggerAni: "animation2_2"
      },
      red: {
        type: 3,
        blastZoneCnt: 3,
        idleAni: "animation3_1",
        triggerAni: "animation3_2"
      }
    };
    var WheelListCfg = [ "blue", "purple", "red", "purple", "blue" ];
    cc.Class({
      extends: cc.Component,
      properties: {
        panel: cc.Node,
        bg: cc.Node,
        wheel: cc.Node,
        items: [ cc.Node ],
        proxy: cc.Node,
        spine_result: sp.Skeleton,
        btn_ok: cc.Button,
        _cbHandler: null,
        _canMove: false,
        _wheelCfg: null,
        _data: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this._wheelCfg = {
          baseRound: 5,
          itemsLen: this.items.length,
          itemHeight: this.items[0].height,
          totalHeight: 0
        };
        this._wheelCfg.totalHeight = this._wheelCfg.itemsLen * this._wheelCfg.itemHeight;
        this.btn_ok.node.on("click", function() {
          _this.btn_ok.node.stopAllActions();
          _this.clickOkBtnEvent();
        }, this);
      },
      clickOkBtnEvent: function clickOkBtnEvent() {
        var _this2 = this;
        if (this._canMove) return;
        SlotsFacade.soundMgr.playEffect("wheel_click");
        this._startWheel();
        var spine = this.btn_ok.node.getChildByName("spine").getComponent(sp.Skeleton);
        spine.setAnimation(0, "animation1", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          _this2.btn_ok.node.active = false;
        });
      },
      _getRotation: function _getRotation(index) {
        var baseRound = this._wheelCfg.baseRound;
        var itemLen = this.items.length;
        var unitAngle = 360 / itemLen;
        return 360 * baseRound + index * unitAngle;
      },
      _startWheel: function _startWheel() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var resultIdx, rotation, item;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wheel_roll2");
              resultIdx = _this3._getResult();
              rotation = _this3._getRotation(resultIdx);
              _this3.proxy.rotation = 0;
              item = _this3.items[resultIdx + 2];
              _context.next = 7;
              return new Promise(function(res) {
                cc.tween(_this3.proxy).call(function() {
                  _this3._canMove = true;
                }).to(7.5, {
                  rotation: rotation
                }, {
                  easing: "quartInOut"
                }).delay(.1).call(function() {
                  SlotsFacade.soundMgr.playEffect("option");
                  _this3._canMove = false;
                  _this3.spine_result.setAnimation(0, "animation", true);
                  item.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, FlowerCfg[item.data.flowerName].triggerAni, true);
                  res();
                }).start();
              });

             case 7:
              _context.next = 9;
              return SlotsFacade.delayTime(1.5);

             case 9:
              _context.next = 11;
              return SlotsFacade.popup.showWinFreeCnt(item.data.freeCnt, true, FlowerCfg[item.data.flowerName].blastZoneCnt);

             case 11:
              _this3.close();

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      update: function update(dt) {
        if (!this._canMove) return;
        var dist = this.proxy.angle % 360 / 360 * this._wheelCfg.totalHeight;
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          var originY = this._wheelCfg.itemHeight / 2 + i * this._wheelCfg.itemHeight;
          originY += dist;
          originY < -this._wheelCfg.itemHeight / 2 && (originY += this._wheelCfg.totalHeight);
          item.y = originY;
        }
      },
      _getResult: function _getResult() {
        if (1 == this._resultType) return 2;
        if (2 == this._resultType) return 1;
        if (3 == this._resultType) return 0;
      },
      _initView: function _initView() {
        this.btn_ok.node.active = true;
        var spine = this.btn_ok.node.getChildByName("spine").getComponent(sp.Skeleton);
        spine.setAnimation(0, "animation", true);
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          item.y = this._wheelCfg.itemHeight / 2 + i * this._wheelCfg.itemHeight;
          item.getChildByName("label").getComponent(cc.Label).string = item.data.freeCnt.toString();
          var flowerInfo = FlowerCfg[item.data.flowerName];
          item.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, flowerInfo.idleAni, false);
        }
        this.spine_result.setAnimation(0, "animation2", false);
      },
      _bindData: function _bindData() {
        this._canMove = false;
        var freeExtraInfos = SlotsFacade.dm.getDeskInfo().freeExtraInfos;
        var curr = freeExtraInfos[SlotsFacade.dm.GetBetIdx() - 1];
        for (var i = 0; i < WheelListCfg.length; i++) {
          var item = this.items[i];
          var flowerName = WheelListCfg[i];
          item.data = {
            flowerName: flowerName,
            freeCnt: curr[flowerName].freeCnt
          };
        }
      },
      open: function open(resultType, cb) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return SlotsFacade.mainPanel.showSceneTransition(2);

             case 2:
              SlotsFacade.soundMgr.playBgm("wheel_bgm");
              _this4.panel.active = true;
              _this4._resultType = resultType;
              _this4._cbHandler = cb;
              _this4._bindData();
              _this4._initView();
              cc.vv.gameData.checkAutoPlay(_this4.btn_ok.node, _this4.clickOkBtnEvent.bind(_this4));

             case 9:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      close: function close() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this5.panel.active = false;
              _this5._cbHandler && _this5._cbHandler();

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e64eb4yaMdNAoGn+qH7428U", "DwarfsAndPrincess_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        energyData: null,
        currExtraFreeInfo: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.energyData = this._deskInfo.storeInfo;
        this.currExtraFreeInfo = this._deskInfo.currExtraFreeInfo;
      },
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onResp, this);
      },
      UnregisterMsg: function UnregisterMsg() {
        this._super();
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onResp, false, this);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this.energyData = msg.storeInfo;
          this.currExtraFreeInfo = msg.currExtraFreeInfo;
          msg.freeExtraInfo && (this.getDeskInfo().freeExtraInfos[this.GetBetIdx() - 1] = msg.freeExtraInfo);
        }
        this._super(msg);
      },
      SetSubGameData: function SetSubGameData(data) {
        this._subGame = data;
      },
      GetSubGameData: function GetSubGameData() {
        return this._subGame;
      },
      getSpinData: function getSpinData() {
        return this._gameInfo;
      },
      hasFree: function hasFree() {
        return this.GetFreeTime() > 0;
      },
      isTriggerFree: function isTriggerFree() {
        return this.triggerFreeCnt() > 0;
      },
      triggerFreeCnt: function triggerFreeCnt() {
        var freeResult = this._gameInfo.freeResult;
        if (freeResult && freeResult.triFreeCnt && freeResult.freeInfo && freeResult.freeInfo.freeCnt) return freeResult.freeInfo.freeCnt;
        return 0;
      },
      isFistTriggerFree: function isFistTriggerFree() {
        return this.hasFree() && this.GetFreeTime() == this.GetTotalFree();
      },
      isLastEndFree: function isLastEndFree() {
        return 0 == this.GetFreeTime() && this.GetTotalFree() > 0;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._gameInfo.freeWinCoin;
      },
      getScatterIndexs: function getScatterIndexs() {
        if (this.triggerFreeCnt() > 0) return this._gameInfo.freeResult.freeInfo.scatterIdx.concat();
        return [];
      },
      getCollectSymbolIndexs: function getCollectSymbolIndexs() {
        var _this = this;
        var cards = this._gameInfo.resultCards;
        if (!cards || cards.length < 1) return [];
        var ret = [];
        cards.forEach(function(v, i) {
          _this.getGameCfg().isEnergyId(v) && ret.push(i + 1);
        });
        return ret;
      },
      canCollect: function canCollect() {
        return this.GetBetIdx() >= this.getDeskInfo().needBet;
      },
      reqSubGame: function reqSubGame(param) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA,
          gameid: this._gameId,
          data: param
        };
        cc.vv.NetManager.send(req, true);
      },
      onResp: function onResp(msg) {
        console.log("reqSubGame-resp:", msg);
        1 == msg.data.rtype ? SlotsFacade.storeGame.onMsg(msg) : 3 == msg.data.rtype;
      },
      isInBlastZone: function isInBlastZone(idx) {
        var blastZoneIdxs = [ 11, 12, 13, 14, 15 ];
        if (this.GetTotalFree() > 0) {
          var blastZoneColCnt = 1;
          this.currExtraFreeInfo ? blastZoneColCnt = this.currExtraFreeInfo.blastZone.length : this.energyData.freeInfo && this.energyData.freeInfo.includes("extraBlastZone") && (blastZoneColCnt = this.energyData.freeInfo.extraBlastZone.length);
          if (2 == blastZoneColCnt) blastZoneIdxs = blastZoneIdx.concat([ 16, 17, 18, 19, 20 ]); else if (3 == blastZoneColCnt) {
            blastZoneIdxs = [ 6, 7, 8, 9, 10 ].concat(blastZoneIdx);
            blastZoneIdxs = blastZoneIdx.concat([ 16, 17, 18, 19, 20 ]);
          }
        }
        return blastZoneIdxs.includes(idx);
      },
      getRewardData: function getRewardData() {
        var rewardIdxs = this.getSpinData().rewardIdxs;
        if (!rewardIdxs || rewardIdxs.length < 1) return null;
        var bonusIdxs = this.getSpinData().bonusIdxs;
        var bonusItems = this.getSpinData().bonusItems;
        var honeycombData = [];
        var jackpotData = [];
        var goldData = [];
        for (var i = 0; i < rewardIdxs.length; i++) {
          var idx = rewardIdxs[i];
          var index = bonusIdxs.indexOf(idx);
          if (-1 != index) {
            var item = bonusItems[index];
            item.coin ? goldData.push({
              idx: idx,
              item: item
            }) : item.jackpot ? jackpotData.push({
              idx: idx,
              item: item
            }) : item.wheel && honeycombData.push({
              idx: idx,
              item: item
            });
          } else console.log("#err\u6570\u636e\u51fa\u9519rewardIdxs", rewardIdxs, bonusIdxs, bonusItems);
        }
        honeycombData.sort(function(a, b) {
          var idxInfoA = SlotsFacade.slots.transferIdx(a.idx);
          var idxInfoB = SlotsFacade.slots.transferIdx(b.idx);
          if (idxInfoA.col != idxInfoB.col) return idxInfoA.col - idxInfoB.col;
          return idxInfoA.row - idxInfoB.row;
        });
        jackpotData.sort(function(a, b) {
          var idxInfoA = SlotsFacade.slots.transferIdx(a.idx);
          var idxInfoB = SlotsFacade.slots.transferIdx(b.idx);
          if (idxInfoA.col != idxInfoB.col) return idxInfoA.col - idxInfoB.col;
          return idxInfoA.row - idxInfoB.row;
        });
        return {
          rewardIdxs: rewardIdxs,
          honeycombData: honeycombData,
          jackpotData: jackpotData,
          goldData: goldData
        };
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  DwarfsAndPrincess_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21beb1ehX1HFK9LMzfHzuf7", "DwarfsAndPrincess_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("DwarfsAndPrincess_MainPanel");
        this.soundMgr = this.addComponent("DwarfsAndPrincess_Sound");
        this.InitCommComponent();
        this.flowCtrl = this.addComponent("DwarfsAndPrincess_FlowCtrl");
        this.popup = this.mainPanel.popup_node.getComponent("DwarfsAndPrincess_Popup");
        this.wildGame = this.mainPanel.wild_game.getComponent("DwarfsAndPrincess_WildGame");
        this.character = this.mainPanel.character_node.getComponent("DwarfsAndPrincess_Character");
        this.collect = this.mainPanel.collect.getComponent("DwarfsAndPrincess_Collect");
        this.storeGame = this.mainPanel.store_node.getComponent("DwarfsAndPrincess_StoreGame");
        this.flowerGame = this.mainPanel.flower_node.getComponent("DwarfsAndPrincess_Flower");
        this.freeWheelGame = this.mainPanel.free_wheel_node.getComponent("DwarfsAndPrincess_FreeWheelGame");
        this.miniWheelGame = this.mainPanel.mini_wheel_game.getComponent("DwarfsAndPrincess_MiniWheelGame");
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
      },
      start: function start() {
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  DwarfsAndPrincess_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b35cYrpYJKlZireQvxxaZe", "DwarfsAndPrincess_MainPanel");
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
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.slots = this.node.getChildByName("slots");
        this.character_node = this.slots.getChildByName("character_node");
        this.popup_node = this.node.getChildByName("popup_node");
        this.wild_game = this.slots.getChildByName("wild_game");
        this.free_wheel_node = this.node.getChildByName("free_wheel_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.top_node = this.node.getChildByName("top_node");
        this.collect = this.slots.getChildByName("collect");
        this.flower_node = this.slots.getChildByName("flower_node");
        this.mini_wheel_game = this.slots.getChildByName("mini_wheel_game");
        this.store_node = this.node.getChildByName("store_node");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type || (type = 0);
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
      },
      showSceneTransition: function showSceneTransition(type) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var spine, soundName, animationName;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.character.hide();
              spine = _this.transition_node.getChildByName("spine").getComponent(sp.Skeleton);
              soundName = "";
              animationName = "skill";
              soundName = "transition_store";
              SlotsFacade.soundMgr.playEffect(soundName);
              spine.node.active = true;
              spine.setAnimation(0, animationName, false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context.next = 11;
              return SlotsFacade.delayTime(1.2);

             case 11:
              SlotsFacade.character.show();

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_MiniWheelGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d022HyLFFBVL9YJ5HMruuj", "DwarfsAndPrincess_MiniWheelGame");
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
        panel: cc.Node,
        bg: cc.Node,
        wheel: cc.Node,
        items: [ cc.Node ],
        proxy: cc.Node,
        top_ani: cc.Node,
        _cbHandler: null,
        _canMove: false,
        _data: null,
        _itemsCmp: []
      },
      onLoad: function onLoad() {
        this._symbolTemplete = cc.vv.gameData.GetPrefabByName(SlotsFacade.dm.getGameCfg().symbolPrefab);
        this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE;
        this._wheelCfg = {
          baseRound: 9,
          itemsLen: this.items.length,
          itemHeight: this.items[0].height,
          totalHeight: 0
        };
        this._wheelCfg.totalHeight = this._wheelCfg.itemsLen * this._wheelCfg.itemHeight;
        for (var i = 0; i < this.items.length; i++) {
          var cmp = this.items[i].addComponent("DwarfsAndPrincess_Symbol");
          cmp.SetSymbolReelIdx(0);
          cmp.Init(0, this.top_ani);
          this._itemsCmp.push(cmp);
        }
      },
      _getRotation: function _getRotation(index) {
        var baseRound = this._wheelCfg.baseRound;
        this.test && (baseRound = this.test.round);
        var itemLen = this.items.length;
        var unitAngle = 360 / itemLen;
        return 360 * baseRound + index * unitAngle;
      },
      _startWheel: function _startWheel() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var resultIdx, rotation, easing;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wheel_roll");
              _this._canMove = true;
              resultIdx = _this._getResult();
              rotation = _this._getRotation(resultIdx);
              _this.proxy.rotation = 0;
              easing = "sineOut";
              _this.test && (easing = _this.test.easing);
              _context.next = 9;
              return new Promise(function(res) {
                cc.tween(_this.proxy).call(function() {
                  _this._canMove = true;
                }).to(6.1, {
                  rotation: rotation
                }, {
                  easing: easing
                }).delay(.1).call(function() {
                  _this._canMove = false;
                  res();
                }).delay(.6).call(function() {
                  _this._itemsCmp[2].playTriggerAnimation();
                }).start();
              });

             case 9:
              _this.close();

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      update: function update(dt) {
        if (!this._canMove) return;
        var dist = this.proxy.angle % 360 / 360 * this._wheelCfg.totalHeight;
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          var originY = this._wheelCfg.itemHeight / 2 + i * this._wheelCfg.itemHeight;
          originY += dist;
          originY < -this._wheelCfg.itemHeight / 2 && (originY += this._wheelCfg.totalHeight);
          item.y = originY;
        }
      },
      _getResult: function _getResult() {
        return 0;
      },
      _bindData: function _bindData() {
        this._canMove = false;
      },
      _initView: function _initView() {
        var _this2 = this;
        this.panel.active = true;
        this.panel.scale = 0;
        this.bg.active = true;
        this.bg.getComponent("ImgSwitchCmp").setIndex((this._data.idx - 1) % 5);
        var pos = SlotsFacade.slots.getIdxGlobalPos(this._data.idx);
        pos = this.node.convertToNodeSpaceAR(pos);
        this.panel.setPosition(pos);
        this._itemsCmp[2].StartMove();
        this.top_ani.active = true;
        var wheelData = this._data.item.wheel;
        for (var i = 0; i < this._itemsCmp.length; i++) {
          this._itemsCmp[i].StartMove();
          var wheelItemData = wheelData.items[i % wheelData.items.length];
          wheelItemData.coin ? this._itemsCmp[i].ShowById(wheelItemData.card, {
            coin: wheelItemData.coin
          }) : this._itemsCmp[i].ShowById(wheelItemData.card);
        }
        this.scheduleOnce(function() {
          var wheelItemData = wheelData.items[wheelData.resultId - 1];
          wheelItemData.coin ? _this2._itemsCmp[2].ShowById(wheelItemData.card, {
            coin: wheelItemData.coin
          }) : _this2._itemsCmp[2].ShowById(wheelItemData.card);
        }, 1);
      },
      open: function open(data, callBack, test) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3.test = test;
              SlotsFacade.soundMgr.playEffect("symbol_open");
              _this3._callBack = callBack;
              _this3._data = data;
              _this3._bindData();
              _this3._initView();
              SlotsFacade.slots.showMask();
              cc.tween(_this3.panel).to(.6, {
                scale: 1.5
              }, {
                easing: "backOut"
              }).start();
              _this3._startWheel();

             case 9:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      close: function close() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.slots.hideMask();
              cc.tween(_this4.panel).to(.6, {
                scale: 1
              }, {
                easing: "backIn"
              }).call(function() {
                _this4.panel.active = false;
                _this4.top_ani.active = false;
                cc.tween(_this4.mask).to(.5, {
                  opacity: 0
                }).start();
                if (_this4._callBack) {
                  _this4._callBack();
                  _this4._callBack = null;
                }
              }).start();

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d9e7pcCetIHaxeA7REAFdI", "DwarfsAndPrincess_Popup");
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
        bg: cc.Node,
        bg_dark: cc.Node
      },
      onLoad: function onLoad() {},
      showBg: function showBg(boo) {
        this.bg.active = boo;
      },
      showBgDark: function showBgDark(boo) {
        this.bg_dark.active = boo;
      },
      showWinFreeCnt: function showWinFreeCnt(cnt, isFirstTrigger, blastZoneCnt) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, label, okBtn, aniCfg, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              isFirstTrigger ? SlotsFacade.soundMgr.playEffect("popup_out") : SlotsFacade.soundMgr.playEffect("free_dialog_more_show");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.getComponent(cc.Label).string = cnt.toString();
              label.active = true;
              label.scale = 0;
              cc.tween(label).to(.5, {
                scale: 1
              }).start();
              okBtn = panel.getChildByName("btn_ok");
              if (isFirstTrigger) {
                okBtn.scale = 0;
                okBtn.active = true;
                cc.tween(okBtn).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
              } else okBtn.active = false;
              aniCfg = [ {
                enter: "animation5",
                idle: "animation5_1",
                exit: "animation5_2"
              }, {
                enter: "animation2",
                idle: "animation2_1",
                exit: "animation2_2"
              }, {
                enter: "animation1",
                idle: "animation1_1",
                exit: "animation1_2"
              } ][blastZoneCnt - 1];
              isFirstTrigger || (aniCfg = {
                enter: "animation4",
                idle: "animation4_1",
                exit: "animation4_2"
              });
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg.enter, false);
              aniCfg.idle && spine.addAnimation(0, aniCfg.idle, true);
              _context.next = 19;
              return SlotsFacade.delayTime(.5);

             case 19:
              if (!isFirstTrigger) {
                _context.next = 24;
                break;
              }
              _context.next = 22;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  okBtn.stopAllActions();
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  spine.setAnimation(0, aniCfg.exit, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 22:
              _context.next = 29;
              break;

             case 24:
              _context.next = 26;
              return SlotsFacade.delayTime(1);

             case 26:
              cc.tween(label).to(.8, {
                scale: 0
              }).start();
              _context.next = 29;
              return new Promise(function(res) {
                spine.setAnimation(0, aniCfg.exit, false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  _this.showBg(false);
                  panel.active = false;
                  res();
                });
              });

             case 29:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinFreeGold: function showWinFreeGold(goldNumb) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("free_dialog_collect_show");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_free_coin");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              label.active = true;
              label.scale = 0;
              cc.tween(label).to(.5, {
                scale: 1
              }).start();
              okBtn = panel.getChildByName("btn_ok");
              okBtn.scale = 0;
              okBtn.active = true;
              cc.tween(okBtn).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation3", false);
              spine.addAnimation(0, "animation3_1", true);
              _context2.next = 19;
              return SlotsFacade.delayTime(.9);

             case 19:
              _context2.next = 21;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  spine.setAnimation(0, "animation3_2", false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this2.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 21:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinStoreGold: function showWinStoreGold(goldNumb) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("mapfree_dialog_collect_show");
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_map_free_coin");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              label.active = true;
              label.scale = 0;
              cc.tween(label).to(.5, {
                scale: 1
              }).start();
              okBtn = panel.getChildByName("btn_ok");
              okBtn.scale = 0;
              okBtn.active = true;
              cc.tween(okBtn).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation", false);
              spine.addAnimation(0, "animation_1", true);
              _context3.next = 19;
              return SlotsFacade.delayTime(.9);

             case 19:
              _context3.next = 21;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  spine.setAnimation(0, "animation_2", false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this3.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 21:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showWinStoreZero: function showWinStoreZero() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var panel, spine;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("mapfree_dialog_betterluck_show");
              _this4.showBg(true);
              panel = _this4.node.getChildByName("panel_win_zero_coin");
              panel.active = true;
              panel.scale = 1;
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation", false);
              _context4.next = 9;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  _this4.showBg(false);
                  panel.active = false;
                  res();
                });
              });

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showStartWheel: function showStartWheel() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var panel, spine;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wheel_start_show");
              _this5.showBg(true);
              panel = _this5.node.getChildByName("panel_start_wheel");
              panel.active = true;
              panel.scale = 1;
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "animation2", false);
              _context5.next = 9;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  _this5.showBg(false);
                  panel.active = false;
                  res();
                });
              });

             case 9:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showWinJPGold: function showWinJPGold(jpType, goldNumb) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              aniCfg = {
                1: {
                  preAni: "animation5",
                  idle: "animation5_1",
                  close: "animation5_2",
                  sound: "win_jp_show5"
                },
                2: {
                  preAni: "animation4",
                  idle: "animation4_1",
                  close: "animation4_2",
                  sound: "win_jp_show4"
                },
                3: {
                  preAni: "animation3",
                  idle: "animation3_1",
                  close: "animation3_2",
                  sound: "win_jp_show3"
                },
                4: {
                  preAni: "animation2",
                  idle: "animation2_1",
                  close: "animation2_2",
                  sound: "win_jp_show2"
                },
                5: {
                  preAni: "animation1",
                  idle: "animation1_1",
                  close: "animation1_2",
                  sound: "win_jp_show1"
                }
              };
              SlotsFacade.soundMgr.playEffect(aniCfg[jpType].sound);
              _this6.showBg(true);
              panel = _this6.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              label.active = true;
              label.scale = 0;
              cc.tween(label).to(.5, {
                scale: 1
              }).start();
              okBtn = panel.getChildByName("btn_ok");
              okBtn.scale = 0;
              okBtn.active = true;
              cc.tween(okBtn).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg[jpType].preAni, false);
              spine.addAnimation(0, aniCfg[jpType].idle, true);
              _context6.next = 20;
              return SlotsFacade.delayTime(.9);

             case 20:
              _context6.next = 22;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  okBtn.stopAllActions();
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  spine.setAnimation(0, aniCfg[jpType].close, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this6.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 22:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b55a18OoH5ApbsdBow1rJdy", "DwarfsAndPrincess_PrizePool");
    "use strict";
    var JpCfg = {
      0: {
        nodeName: "prizePool_Mini",
        lockAni: "animation5_1",
        unlockAni: "animation5",
        idleAni: "saoguang5",
        iconIndex: 0,
        weight: 0
      },
      1: {
        nodeName: "prizePool_Minor",
        lockAni: "animation4_1",
        unlockAni: "animation4",
        idleAni: "saoguang4",
        iconIndex: 1,
        weight: 1
      },
      2: {
        nodeName: "prizePool_Major",
        lockAni: "animation3_1",
        unlockAni: "animation3",
        idleAni: "saoguang3",
        iconIndex: 2,
        weight: 2
      },
      3: {
        nodeName: "prizePool_Maxi",
        lockAni: "animation2_1",
        unlockAni: "animation2",
        idleAni: "saoguang2",
        iconIndex: 3,
        weight: 3
      },
      4: {
        nodeName: "prizePool_Grand",
        lockAni: "animation1_1",
        unlockAni: "animation1",
        idleAni: "saoguang1",
        iconIndex: 4,
        weight: 4
      }
    };
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          _this.node.y > cc.winSize.height / 2 && (_this.node.y = cc.winSize.height / 2);
        }, 0);
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        if (!JpCfg[poolType + ""]) return;
        var param = {
          poolIdx: poolType,
          val: bLock
        };
        this.processTips(param);
      },
      processTips: function processTips(data) {
        this.showJackPotTips(data.poolIdx, data.val);
        var aniCfg = JpCfg[data.poolIdx + ""];
        var jpNodeName = aniCfg.nodeName;
        if (jpNodeName) {
          var safeNode = cc.find("Canvas/safe_node");
          var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
          if (jpNode) {
            var targetJpNode = cc.find(jpNodeName, jpNode.node.parent);
            if (targetJpNode) {
              var lockSp = targetJpNode.getChildByName("spine_lock").getComponent(sp.Skeleton);
              if (data.val) {
                targetJpNode.isLock = true;
                SlotsFacade.soundMgr.stopEffectByName("jp_lock");
                SlotsFacade.soundMgr.playEffect("jp_lock");
                lockSp.node.active = true;
                lockSp.setAnimation(0, aniCfg.lockAni, false);
                lockSp.setCompleteListener(function() {
                  lockSp.setCompleteListener(null);
                  lockSp.node.active = false;
                });
                this.scheduleOnce(function() {
                  targetJpNode.getChildByName("bg").color = cc.Color.GRAY;
                  targetJpNode.getChildByName("title").color = cc.Color.GRAY;
                  targetJpNode.getChildByName("lbl_num").color = cc.Color.GRAY;
                }, .4);
              } else {
                targetJpNode.isLock = false;
                SlotsFacade.soundMgr.stopEffectByName("jp_unlock");
                SlotsFacade.soundMgr.playEffect("jp_unlock");
                lockSp.node.active = true;
                lockSp.setAnimation(0, aniCfg.unlockAni, false);
                lockSp.setCompleteListener(function() {
                  lockSp.setCompleteListener(null);
                  lockSp.node.active = false;
                });
                this.scheduleOnce(function() {
                  targetJpNode.getChildByName("bg").color = cc.Color.WHITE;
                  targetJpNode.getChildByName("title").color = cc.Color.WHITE;
                  targetJpNode.getChildByName("lbl_num").color = cc.Color.WHITE;
                }, .4);
              }
            }
          }
        }
      },
      showJackPotTips: function showJackPotTips(jpId, isLock) {
        var weight = JpCfg[jpId + ""].weight;
        if (isLock) {
          if (this._nowJpLockWeight < weight) return;
          this._nowJpLockWeight = weight;
        } else {
          if (this._nowJpUnlockWeight > weight) return;
          this._nowJpUnlockWeight = weight;
        }
        var aniCfg = JpCfg[jpId + ""];
        var jpNodeName = aniCfg.nodeName;
        var safeNode = cc.find("Canvas/safe_node");
        var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
        var targetJpNode = cc.find(jpNodeName, jpNode.node.parent);
        if (targetJpNode) {
          var tips_to_unclok = targetJpNode.parent.getChildByName("tips_to_unclok");
          tips_to_unclok.stopAllActions();
          tips_to_unclok.active = false;
          tips_to_unclok.getChildByName("icon").getComponent("ImgSwitchCmp").setIndex(aniCfg.iconIndex);
          tips_to_unclok.x = targetJpNode.x;
          tips_to_unclok.y = targetJpNode.y;
          var tips_uncloked = targetJpNode.parent.getChildByName("tips_uncloked");
          tips_uncloked.stopAllActions();
          tips_uncloked.active = false;
          tips_uncloked.getChildByName("icon").getComponent("ImgSwitchCmp").setIndex(aniCfg.iconIndex);
          tips_uncloked.x = targetJpNode.x;
          tips_uncloked.y = targetJpNode.y;
          if (isLock) {
            this._nowJpUnlockWeight = this._nowJpLockWeight - 1;
            tips_to_unclok.scale = 0;
            tips_to_unclok.active = true;
            cc.tween(tips_to_unclok).to(.4, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(2).to(.2, {
              scale: 0
            }).call(function() {
              tips_to_unclok.active = false;
            }).start();
          } else {
            this._nowJpLockWeight = this._nowJpUnlockWeight + 1;
            tips_uncloked.scale = 0;
            tips_uncloked.active = true;
            cc.tween(tips_uncloked).to(.4, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(2).to(.2, {
              scale: 0
            }).call(function() {
              tips_uncloked.active = false;
            }).start();
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  DwarfsAndPrincess_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4cbfaEJoy9Poo23wuWG1EYU", "DwarfsAndPrincess_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  DwarfsAndPrincess_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0fc7qX/ZZP27B+D/I2vmer", "DwarfsAndPrincess_Slots");
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
        blast_zone_node: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
        this.blast_zone_node = this.node.getChildByName("blast_zone_node");
        this.mask = this.node.getChildByName("mask");
      },
      StartMove: function StartMove() {
        this._super();
        SlotsFacade.flowCtrl.startMove();
        0 == SlotsFacade.dm.GetTotalFree() && Global.SlotsSoundMgr.playNormalBgm();
      },
      onMsgSpine: function onMsgSpine(msg) {
        SlotsFacade.flowCtrl.onSpinMsg(msg);
      },
      OnSpinEnd: function OnSpinEnd() {
        SlotsFacade.flowCtrl.spinEnd();
      },
      ReconnectShow: function ReconnectShow() {
        this.scheduleOnce(function() {
          SlotsFacade.flowCtrl.enterRoom();
        });
      },
      transferIdx: function transferIdx(idx) {
        idx -= 1;
        var col = idx % this._col;
        var row = this._row - Math.floor(idx / this._col) - 1;
        return {
          col: col,
          row: row
        };
      },
      getIdxGlobalPos: function getIdxGlobalPos(idx) {
        var idxInfo = this.transferIdx(idx);
        var reel = this._reels[idxInfo.col];
        var pos = reel.GetSymbolPosByRow(idxInfo.row);
        return reel.node.getChildByName("mask").convertToWorldSpaceAR(pos);
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = {
              idx: i + 1
            };
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        var spinData = SlotsFacade.dm.getSpinData();
        var waterInfo = spinData.waterInfo;
        if (waterInfo) for (var _i = 0; _i < waterInfo.idxs.length; _i++) {
          var idxInfo = this.transferIdx(waterInfo.idxs[_i]);
          reelResults[idxInfo.col][idxInfo.row].data.waterCnt = waterInfo.cnts[_i];
        }
        if (spinData.bonusIdxs && spinData.bonusIdxs.length > 0) for (var _i2 = 0; _i2 < spinData.bonusIdxs.length; _i2++) {
          var bonusItem = spinData.bonusItems[_i2];
          if (bonusItem && bonusItem.coin) {
            var _idxInfo = this.transferIdx(spinData.bonusIdxs[_i2]);
            reelResults[_idxInfo.col][_idxInfo.row].data.coin = bonusItem.coin;
          }
        }
        for (var _i3 = 0; _i3 < this._reels.length; _i3++) {
          var item = this._reels[_i3];
          var reelRes = reelResults[_i3];
          item.SetResult(reelRes);
        }
      },
      showBlastZone: function showBlastZone(cnt, dark) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var spineCfg, spine, spineBg;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              spineCfg = [ {
                idle: "animation1",
                idle_dark: "animation1_1",
                change: "",
                bg_idle: "animation1_1",
                bg_change: "animation2_1"
              }, {
                idle: "animation2",
                idle_dark: "animation1_2",
                change: "animation2_1",
                bg_idle: "animation1_2",
                bg_change: "animation2_1"
              }, {
                idle: "animation3",
                idle_dark: "animation1_3",
                change: "animation3_1",
                bg_idle: "animation1_3",
                bg_change: "animation3_1"
              } ][cnt - 1];
              spine = _this.blast_zone_node.getChildByName("blast").getComponent(sp.Skeleton);
              spineBg = _this.blast_zone_node.getChildByName("blast_bg").getComponent(sp.Skeleton);
              cnt > 1 && (dark = false);
              if (!dark) {
                _context.next = 9;
                break;
              }
              spine.setAnimation(0, spineCfg.idle_dark, true);
              spineBg.setAnimation(0, spineCfg.bg_idle, false);
              _context.next = 21;
              break;

             case 9:
              if (!(cnt > 1)) {
                _context.next = 19;
                break;
              }
              SlotsFacade.soundMgr.playEffect("blastzone_increase");
              spine.setAnimation(0, spineCfg.change, false);
              spine.addAnimation(0, spineCfg.idle, true);
              spineBg.setAnimation(0, spineCfg.bg_change, false);
              spineBg.addAnimation(0, spineCfg.bg_idle, false);
              _context.next = 17;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  res();
                });
              });

             case 17:
              _context.next = 21;
              break;

             case 19:
              spine.setAnimation(0, spineCfg.idle, true);
              spineBg.addAnimation(0, spineCfg.bg_idle, false);

             case 21:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showMask: function showMask() {
        this.mask.active = true;
        this.mask.opacity = 0;
        cc.tween(this.mask).to(.2, {
          opacity: 140
        }).start();
      },
      hideMask: function hideMask() {
        var _this2 = this;
        if (!this.mask.active) return;
        cc.tween(this.mask).to(.8, {
          opacity: 0
        }).call(function(res) {
          _this2.mask.active = false;
        }).start();
      },
      playTriggerAni: function playTriggerAni(indexs) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              indexs.forEach(function(element) {
                var item = _this3.GetSymbolByIdx(element);
                item.playTriggerAnimation();
              });
              _context2.next = 4;
              return SlotsFacade.delayTime(1.5);

             case 4:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  DwarfsAndPrincess_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d57a9yyF1dMoKMFGdUuKmGE", "DwarfsAndPrincess_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/DwarfsAndPrincess/",
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
      playBgm: function playBgm(bgmName) {
        if (bgmName) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm(bgmName);
        } else Global.SlotsSoundMgr.playNormalBgm();
      },
      stopBgm: function stopBgm() {
        Global.SlotsSoundMgr.stopBgm();
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("free_bgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_StoreGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12ae7YkVYBJTJMcG2vTFJM8", "DwarfsAndPrincess_StoreGame");
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
      extends: cc.Component,
      properties: {
        bg: cc.Node,
        panel: cc.Node,
        scrollView: cc.ScrollView,
        item_template: cc.Node,
        free_cnt_node: cc.Node,
        free_cnt_btn_minus: cc.Button,
        free_cnt_btn_plus: cc.Button,
        free_cnt_label_freeCnt: cc.Label,
        free_cnt_label_cost: cc.Label,
        resetBtn: cc.Button,
        startBtn: cc.Button,
        startToCostWaterDropLabel: cc.Label,
        closeBtn: cc.Button,
        totalWaterDropLabel: cc.Label,
        _storeListCfg: [],
        _storeItemList: [],
        _currSelectItem: null,
        _cbHandler: null,
        _data: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.closeBtn.node.on("click", function() {
          _this.close();
        }, this);
        this.resetBtn.node.on("click", function() {
          _this._reset();
        }, this);
        this.startBtn.node.on("click", function() {
          _this._startGame();
        }, this);
        this.item_template.active = false;
        this.free_cnt_btn_minus.node.on("click", function() {
          _this._onFreeCntChange(-1);
        }, this);
        this.free_cnt_btn_plus.node.on("click", function() {
          _this._onFreeCntChange(1);
        }, this);
      },
      start: function start() {
        this._initList();
      },
      _initList: function _initList() {
        var storeItemType = SlotsFacade.dm.getGameCfg().StoreItemType;
        this._storeListCfg = [ {
          titleIndex: 0,
          types: [ {
            type: storeItemType.stickyWild,
            selectorType: 1,
            mults: [],
            info: []
          } ]
        }, {
          titleIndex: 1,
          types: [ {
            type: storeItemType.multWild,
            selectorType: 4,
            mults: [],
            info: []
          } ]
        }, {
          titleIndex: 2,
          types: [ {
            type: storeItemType.randWild,
            selectorType: 1,
            mults: [],
            info: []
          } ]
        }, {
          titleIndex: 3,
          types: [ {
            type: storeItemType.removeSymbol,
            selectorType: 2,
            mults: [],
            info: []
          } ]
        }, {
          titleIndex: 4,
          types: [ {
            type: storeItemType.extraBlastZone,
            selectorType: 3,
            mults: [],
            info: []
          } ]
        }, {
          titleIndex: 5,
          types: [ {
            type: storeItemType.extraBonus,
            selectorType: 1,
            mults: [],
            info: []
          } ]
        }, {
          titleIndex: 6,
          types: [ {
            type: storeItemType.multWild,
            selectorType: 4,
            mults: [],
            info: []
          }, {
            type: storeItemType.randWild,
            selectorType: 1,
            mults: [],
            info: []
          } ]
        }, {
          titleIndex: 7,
          types: [ {
            type: storeItemType.stickyWild,
            selectorType: 1,
            mults: [ 1 ],
            info: []
          }, {
            type: storeItemType.extraBlastZone,
            selectorType: 3,
            mults: [ 3 ],
            info: []
          } ]
        }, {
          titleIndex: 8,
          types: [ {
            type: storeItemType.multWild,
            selectorType: 4,
            mults: [],
            info: []
          }, {
            type: storeItemType.removeSymbol,
            selectorType: 2,
            mults: [],
            info: []
          } ]
        }, {
          titleIndex: 9,
          types: [ {
            type: storeItemType.removeSymbol,
            selectorType: 2,
            mults: [],
            info: []
          }, {
            type: storeItemType.extraBlastZone,
            selectorType: 3,
            mults: [],
            info: []
          } ]
        } ];
        for (var i = 0; i < this._storeListCfg.length; i++) for (var j = 0; j < this._storeListCfg[i].types.length; j++) {
          var item = this._storeListCfg[i].types[j];
          var itemCfg = this._getStoreCfgItem(item.type);
          item.mults = itemCfg.mults;
          item.info = itemCfg.info;
        }
        for (var _i = 0; _i < this._storeListCfg.length; _i++) {
          var _item = cc.instantiate(this.item_template);
          _item.active = true;
          _item.parent = this.scrollView.content;
          var itemCmp = _item.addComponent("DwarfsAndPrincess_StoreItem");
          itemCmp.id = _i;
          itemCmp.init(this._storeListCfg[_i], this._onStoreItemChange.bind(this));
          this._storeItemList.push(itemCmp);
        }
      },
      _getStoreCfgItem: function _getStoreCfgItem(storeType) {
        var storeConfig = SlotsFacade.dm.getDeskInfo().storeConfig;
        for (var i = 0; i < storeConfig.items.length; i++) {
          var item = storeConfig.items[i];
          if (item.type == storeType) return item;
        }
        return null;
      },
      _resetData: function _resetData() {
        this._data = {
          freeCnt: 3,
          freeCost: 0,
          storeItemCost: 0
        };
      },
      _onFreeCntChange: function _onFreeCntChange(val) {
        SlotsFacade.soundMgr.playEffect("click");
        this._data.freeCnt += val;
        this._data.freeCnt < 3 && (this._data.freeCnt = 3);
        this.free_cnt_btn_minus.interactable = this._data.freeCnt > 3;
        this._data.freeCost = this._data.freeCnt * SlotsFacade.dm.getDeskInfo().storeConfig.freeBasePrice;
        if (this._currSelectItem) {
          this._data.storeItemCost = this._data.freeCost * this._currSelectItem.getMultiple();
          this._currSelectItem.setCost(this._data.storeItemCost);
        }
        this._updateTotalCost();
        this._updateFreeCnt();
      },
      _onStoreItemChange: function _onStoreItemChange(data) {
        if ("open" == data.evt) {
          SlotsFacade.soundMgr.playEffect("click");
          this._currSelectItem && this._currSelectItem.close();
          this._currSelectItem = data.target;
        } else "change" == data.evt;
        var storeItem = data.target;
        this._data.storeItemCost = this._data.freeCost * storeItem.getMultiple();
        storeItem.setCost(this._data.storeItemCost);
        this._updateTotalCost();
      },
      _updateFreeCnt: function _updateFreeCnt() {
        this.free_cnt_label_freeCnt.string = this._data.freeCnt.toString();
        this.free_cnt_label_cost.string = Global.FormatNumToComma(this._data.freeCost);
      },
      _updateTotalCost: function _updateTotalCost() {
        var total = this._data.freeCost + this._data.storeItemCost;
        this.startToCostWaterDropLabel.string = Global.FormatNumToComma(total.toString());
        var btnSpine = this.startBtn.node.getChildByName("spine");
        if (SlotsFacade.dm.energyData.waterCnt >= total) {
          this.startBtn.interactable = true;
          btnSpine.active = true;
        } else {
          this.startBtn.interactable = false;
          btnSpine.active = false;
        }
      },
      _reset: function _reset() {
        this.startBtn.interactable = true;
        this.resetBtn.interactable = true;
        this.closeBtn.interactable = true;
        var storeInfo = SlotsFacade.dm.energyData;
        this._currSelectItem && this._currSelectItem.close();
        this._currSelectItem = null;
        this.totalWaterDropLabel.string = Global.FormatNumToComma(storeInfo.waterCnt);
        this._resetData();
        this._onFreeCntChange(0);
        var _iterator = _createForOfIteratorHelper(this._storeItemList), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            item.close();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.scrollView.scrollToTop();
      },
      _startGame: function _startGame() {
        var param = {
          rtype: 1,
          choiceInfo: {
            freeCnt: this._data.freeCnt,
            others: []
          }
        };
        this._currSelectItem && (param.choiceInfo.others = this._currSelectItem.getReqParam());
        this.startBtn.interactable = false;
        this.resetBtn.interactable = false;
        this.closeBtn.interactable = false;
        SlotsFacade.dm.reqSubGame(param);
      },
      onMsg: function onMsg(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var storeInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(1 != msg.data.rtype)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              storeInfo = msg.data.storeInfo;
              storeInfo.hasOwnProperty("stickyWild") && (storeInfo.freeInfo.stickyWild = []);
              SlotsFacade.dm.energyData = storeInfo;
              SlotsFacade.dm.SetFreeTime(storeInfo.freeInfo.freeCnt);
              SlotsFacade.dm.SetTotalFree(storeInfo.freeInfo.freeCnt);
              _context.next = 9;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 9:
              SlotsFacade.bottomCmp.DoHideWinAction();
              _this2.totalWaterDropLabel.string = Global.FormatNumToComma(storeInfo.waterCnt);
              SlotsFacade.collect.setWaterDropCnt(SlotsFacade.dm.energyData.waterCnt);
              _this2.close();
              _context.next = 15;
              return SlotsFacade.flowCtrl.enterFreeGame();

             case 15:
              SlotsFacade.slots.CanDoNextRound();

             case 16:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      open: function open(cb) {
        var _this3 = this;
        SlotsFacade.soundMgr.playEffect("store_open");
        this.bg.active = true;
        this._cbHandler = cb;
        this.scheduleOnce(function() {
          _this3.panel.active = true;
          _this3._reset();
          _this3.panel.scale = 0;
          cc.tween(_this3.panel).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          for (var i = 0; i < _this3._storeItemList.length; i++) {
            var item = _this3._storeItemList[i];
            item.node.scale = 0;
            cc.tween(item.node).delay(.1 * i).to(.3, {
              scale: 1
            }, {
              easing: "backOut"
            }).start();
          }
        });
      },
      close: function close() {
        SlotsFacade.soundMgr.playEffect("store_close");
        this.bg.active = false;
        this.panel.active = false;
        this._cbHandler && this._cbHandler();
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_StoreItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fca71zKC1xKCZbEyNLn6gaj", "DwarfsAndPrincess_StoreItem");
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
    var SelectorType = {
      count: 1,
      remove: 2,
      blast_zone: 3,
      mul_wild: 4
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        state_close: cc.Node,
        state_open: cc.Node,
        costLabel: cc.Label,
        id: 0,
        _storeItemCfg: null,
        _handler: null,
        _activeSelector: []
      },
      onLoad: function onLoad() {
        this.state_close = this.node.getChildByName("state_close");
        this.state_close.active = true;
        this.state_close.on("click", this.open, this);
        this.state_open = this.node.getChildByName("state_open");
        this.state_open.active = false;
        this.costLabel = cc.find("cost/label", this.state_open).getComponent(cc.Label);
      },
      onDestroy: function onDestroy() {
        this._storeItemCfg = null;
        this._handler = null;
      },
      start: function start() {
        var _this = this;
        this.state_close.getChildByName("title").getComponent("ImgSwitchCmp").setIndex(this._storeItemCfg.titleIndex);
        this.state_open.getChildByName("title").getComponent("ImgSwitchCmp").setIndex(this._storeItemCfg.titleIndex);
        var _loop = function _loop(i) {
          var selector = cc.find("selector_node/selector".concat(i + 1), _this.state_open);
          var selectorType = i + 1;
          var typeCfg = null;
          for (var j = 0; j < _this._storeItemCfg.types.length; j++) if (_this._storeItemCfg.types[j].selectorType == selectorType) {
            typeCfg = _this._storeItemCfg.types[j];
            break;
          }
          selector.active = !!typeCfg;
          if (!selector.active) return "continue";
          selector.data = {
            storeType: typeCfg.type,
            selectorType: i + 1,
            mults: typeCfg.mults.concat(),
            info: typeCfg.info.concat(),
            currSelectIndex: 0
          };
          var minusBtn = selector.getChildByName("btn_minus").getComponent(cc.Button);
          minusBtn.node.on("click", function() {
            _this._changeParam(selector, -1);
          }, _this);
          var plusBtn = selector.getChildByName("btn_plus").getComponent(cc.Button);
          plusBtn.node.on("click", function() {
            _this._changeParam(selector, 1);
          }, _this);
          _this._activeSelector.push(selector);
        };
        for (var i = 0; i < 4; i++) {
          var _ret = _loop(i);
          if ("continue" === _ret) continue;
        }
        this._reset();
      },
      _changeParam: function _changeParam(selector, val) {
        var data = selector.data;
        data.currSelectIndex += val;
        data.currSelectIndex < 0 ? data.currSelectIndex = 0 : data.currSelectIndex >= data.info.length && (data.currSelectIndex = data.info.length - 1);
        this._updateOpenState();
        this._handler({
          evt: "change",
          target: this
        });
      },
      init: function init(storeItemCfg, handler) {
        this._storeItemCfg = storeItemCfg;
        this._handler = handler;
      },
      open: function open() {
        this.state_close.active = false;
        this.state_open.active = true;
        this._handler({
          evt: "open",
          target: this
        });
      },
      close: function close() {
        this.state_close.active = true;
        this.state_open.active = false;
        this._reset();
      },
      _updateOpenState: function _updateOpenState() {
        SlotsFacade.soundMgr.playEffect("click");
        for (var i = 0; i < this._activeSelector.length; i++) {
          var selector = this._activeSelector[i];
          var data = selector.data;
          switch (data.selectorType) {
           case SelectorType.count:
            selector.getChildByName("label").getComponent(cc.Label).string = data.info[data.currSelectIndex];
            break;

           case SelectorType.remove:
            var children = selector.getChildByName("label").children;
            var _iterator = _createForOfIteratorHelper(children), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var c = _step.value;
                c.active = data.info[data.currSelectIndex].includes(parseInt(c.name));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            break;

           case SelectorType.blast_zone:
           case SelectorType.mul_wild:
            selector.getChildByName("label").getComponent("ImgSwitchCmp").setIndex(data.currSelectIndex);
          }
          selector.getChildByName("btn_minus").getComponent(cc.Button).interactable = 0 != data.currSelectIndex;
          selector.getChildByName("btn_plus").getComponent(cc.Button).interactable = data.currSelectIndex < data.info.length - 1;
        }
      },
      _reset: function _reset() {
        for (var i = 0; i < this._activeSelector.length; i++) this._activeSelector[i].data.currSelectIndex = 0;
        this._updateOpenState();
      },
      getMultiple: function getMultiple() {
        var mul = 1;
        for (var i = 0; i < this._activeSelector.length; i++) {
          var data = this._activeSelector[i].data;
          mul *= data.mults[data.currSelectIndex];
        }
        return mul;
      },
      getReqParam: function getReqParam() {
        var ret = [];
        for (var i = 0; i < this._activeSelector.length; i++) {
          var data = this._activeSelector[i].data;
          ret.push({
            type: data.storeType,
            mult: data.mults[data.currSelectIndex]
          });
        }
        return ret;
      },
      setCost: function setCost(val) {
        this.costLabel.string = val.toString();
      }
    });
    cc._RF.pop();
  }, {} ],
  DwarfsAndPrincess_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7430ObachL5oh5uJa+Mgzj", "DwarfsAndPrincess_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        waterDrop: cc.Node,
        label: cc.Label
      },
      onLoad: function onLoad() {
        this.waterDrop = this.node.getChildByName("water_drop");
        this.label = this.node.getChildByName("label").getComponent(cc.Label);
      },
      StartMove: function StartMove() {
        this._super();
        this.showWaterDrop(false);
        this.showLabel();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        if (data) {
          this.showWaterDrop(true);
          this.showLabel(true);
        }
      },
      showWaterDrop: function showWaterDrop(boo) {
        if (boo && this._data && this._data.waterCnt) {
          var WaterValues = SlotsFacade.dm.getGameCfg().WaterValues;
          var index = WaterValues.indexOf(this._data.waterCnt);
          -1 == index && (index = 0);
          this.waterDrop.active = true;
          this.waterDrop.getComponent("ImgSwitchCmp").setIndex(index);
        } else this.waterDrop.active = false;
      },
      showLabel: function showLabel(boo) {
        if (boo && this._data && this._data.coin) {
          this.label.node.active = true;
          this.label.string = Global.convertNumToShort(this._data.coin);
        } else this.label.node.active = false;
      },
      StopMoveDeep: function StopMoveDeep() {
        if (!SlotsFacade.dm.getSpinData()) return;
        var rewardIdxs = SlotsFacade.dm.getSpinData().rewardIdxs;
        if (rewardIdxs && this._data && rewardIdxs.includes(this._data.idx)) {
          SlotsFacade.soundMgr.playEffect("bell2");
          this.playStopAnimation();
        }
      },
      StopMoveEnd: function StopMoveEnd() {
        this.showWaterDrop(false);
        this._data && this._data.waterCnt && SlotsFacade.collect.addAppearanceDrop(this._data.waterCnt, this.waterDrop.convertToWorldSpaceAR(cc.v2(0, 0)));
        var NeedIdleIds = SlotsFacade.dm.getGameCfg().NeedIdleIds;
        if (NeedIdleIds.includes(this._id)) {
          var rewardIdxs = SlotsFacade.dm.getSpinData().rewardIdxs;
          rewardIdxs.includes(this._data.idx) || this.playidleAnimation();
        }
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              var stopAni = cfg.symbol[id].stop_ani;
              var idleAni = cfg.symbol[id].idle_ani;
              nodeSp.setAnimation(0, stopAni.name, false);
              idleAni && nodeSp.addAnimation(0, idleAni.name, true);
            }
          }
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
            if (nodeSp) {
              var triggerAni = cfg.symbol[id].trigger_ani.name;
              nodeSp.setAnimation(0, triggerAni, cfg.symbol[id].trigger_ani.loop);
            }
          }
          var label = aniNode.getChildByName("label");
          if (!label.active && this._data.coin) {
            label.active = true;
            label.getComponent(cc.Label).string = Global.convertNumToShort(this._data.coin);
          }
        }
        return isPlay;
      },
      ShowKuang: function ShowKuang(boo) {
        this._id == SlotsFacade.dm.getGameCfg().scatterId && (boo = false);
        this._super(boo);
      },
      Backup: function Backup() {
        this._data && this._data.waterCnt && (this._data.waterCnt = 0);
        return this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  DwarfsAndPrincess_WildGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56cd3yBfIVAk7H3/KziHsA+", "DwarfsAndPrincess_WildGame");
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
        wild_game_title_node: cc.Node,
        wild_node: cc.Node,
        spine_extra_bonus: sp.Skeleton,
        _symbols: [],
        _stickyIdxs: [],
        _isEnterWild: false
      },
      onLoad: function onLoad() {
        this._symbolTemplate = SlotsFacade.dm.GetPrefabByName(SlotsFacade.dm.getGameCfg().symbolPrefab);
        this._symbolTemplate.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE;
        this.wild_node.active = false;
      },
      showRandomWild: function showRandomWild() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var cards, allWildIdxs, gameCfg, i, storeInfo, wildIdxs, _i, randomIdx, _i2, symbol;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.slots.showMask();
              _context.next = 3;
              return SlotsFacade.delayTime(.2);

             case 3:
              _this.wild_node.active = true;
              cards = SlotsFacade.dm.getSpinData().resultCards;
              allWildIdxs = [];
              gameCfg = SlotsFacade.dm.getGameCfg();
              for (i = 0; i < cards.length; i++) gameCfg.wildIds.includes(cards[i]) && allWildIdxs.push(i + 1);
              storeInfo = SlotsFacade.dm.energyData;
              wildIdxs = [];
              for (_i = 0; _i < storeInfo.freeInfo.randWild; _i++) {
                randomIdx = Math.floor(Math.random() * allWildIdxs.length);
                wildIdxs.push(allWildIdxs[randomIdx]);
                allWildIdxs.splice(randomIdx, 1);
              }
              _i2 = 0;

             case 12:
              if (!(_i2 < wildIdxs.length)) {
                _context.next = 22;
                break;
              }
              symbol = _this.genAWildSymbol(wildIdxs[_i2], cards[wildIdxs[_i2] - 1]);
              symbol.playStopAnimation();
              _this._symbols.push(symbol);
              SlotsFacade.soundMgr.playEffect("symbol_wild");
              _context.next = 19;
              return SlotsFacade.delayTime(.5);

             case 19:
              _i2++;
              _context.next = 12;
              break;

             case 22:
              SlotsFacade.slots.hideMask();

             case 23:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _addStickyWild: function _addStickyWild() {
        if (!SlotsFacade.dm.getSpinData()) return;
        var idxs = SlotsFacade.dm.energyData.freeInfo.stickyWild;
        this.wild_node.active = true;
        for (var i = 0; i < idxs.length; i++) {
          if (this._stickyIdxs.includes(idxs[i])) continue;
          var symbolId = SlotsFacade.dm.getSpinData().resultCards[idxs[i] - 1];
          if (SlotsFacade.dm.getGameCfg().wildIds.includes(symbolId)) {
            var symbol = this.genAWildSymbol(idxs[i], symbolId);
            this._symbols.push(symbol);
            this._stickyIdxs.push(idxs[i]);
          } else console.log("\u751f\u6210sticky wild \u5931\u8d25id\u5f02\u5e38", SlotsFacade.getSpinData().resultCards, idxs[i]);
        }
      },
      showExtraBonus: function showExtraBonus() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _loop, i;
          return regeneratorRuntime.wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bonus2_increase");
              _this2.wild_node.active = true;
              _loop = regeneratorRuntime.mark(function _loop(i) {
                var idx, spine, pos;
                return regeneratorRuntime.wrap(function _loop$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    idx = 1 + Math.floor(30 * Math.random());
                    spine = cc.instantiate(_this2.spine_extra_bonus.node).getComponent(sp.Skeleton);
                    spine.node.parent = _this2.wild_node;
                    spine.node.active = true;
                    pos = SlotsFacade.slots.getIdxGlobalPos(idx);
                    pos = _this2.wild_node.convertToNodeSpaceAR(pos);
                    spine.node.setPosition(pos);
                    spine.setAnimation(0, "animation", false);
                    spine.setCompleteListener(function() {
                      spine.setCompleteListener(null);
                      spine.node.removeFromParent();
                    });
                    _context2.next = 11;
                    return SlotsFacade.delayTime(.1);

                   case 11:
                   case "end":
                    return _context2.stop();
                  }
                }, _loop);
              });
              i = 0;

             case 4:
              if (!(i < 20)) {
                _context3.next = 9;
                break;
              }
              return _context3.delegateYield(_loop(i), "t0", 6);

             case 6:
              i++;
              _context3.next = 4;
              break;

             case 9:
             case "end":
              return _context3.stop();
            }
          }, _callee2);
        }))();
      },
      _showTitle: function _showTitle() {
        var storeFreeInfo = SlotsFacade.dm.energyData.freeInfo;
        if (!storeFreeInfo) return;
        var typeCfg = {
          2: "stickyWild",
          3: "multWild",
          4: "randWild",
          5: "removeSymbol",
          6: "extraBlastZone",
          7: "extraBonus"
        };
        var needShowTitle = false;
        for (var i = 2; i <= 7; i++) {
          var contain = storeFreeInfo.hasOwnProperty(typeCfg[i.toString()]);
          if (6 == i) {
            var blast2 = cc.find("store_types/type6_2", this.wild_game_title_node);
            var blast3 = cc.find("store_types/type6_3", this.wild_game_title_node);
            if (contain) {
              blast2.active = 2 == storeFreeInfo.extraBlastZone.length;
              blast3.active = 3 == storeFreeInfo.extraBlastZone.length;
              needShowTitle = true;
            } else {
              blast2.active = false;
              blast3.active = false;
            }
          } else {
            var node = cc.find("store_types/type".concat(i), this.wild_game_title_node);
            if (contain) {
              node.active = true;
              needShowTitle = true;
            } else node.active = false;
          }
        }
        this.wild_game_title_node.active = needShowTitle;
      },
      _hideTile: function _hideTile() {
        this.wild_game_title_node.active = false;
      },
      genAWildSymbol: function genAWildSymbol(idx, symbolId) {
        var cfg = SlotsFacade.dm.getGameCfg();
        var node = cc.instantiate(this._symbolTemplate);
        node.parent = this.wild_node;
        var scp = node.addComponent(cfg.scripts.Symbols);
        scp.SetSymbolReelIdx(0);
        scp.Init(0, this.node);
        scp.ShowById(symbolId);
        var pos = SlotsFacade.slots.getIdxGlobalPos(idx);
        pos = this.wild_node.convertToNodeSpaceAR(pos);
        node.setPosition(pos);
        return scp;
      },
      enterWildGame: function enterWildGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this3._isEnterWild = true;
              _this3._showTitle();

             case 2:
             case "end":
              return _context4.stop();
            }
          }, _callee3);
        }))();
      },
      exitWildGame: function exitWildGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this4.removeWild();
              _this4._hideTile();
              _this4._isEnterWild = false;

             case 3:
             case "end":
              return _context5.stop();
            }
          }, _callee4);
        }))();
      },
      removeWild: function removeWild() {
        this._symbols = [];
        this._stickyIdxs = [];
        this.wild_node.active = false;
        this.wild_node.removeAllChildren();
      },
      hideWild: function hideWild() {
        this.wild_node.active = false;
      },
      hasStoreType: function hasStoreType(storeType) {
        var storeFreeInfo = SlotsFacade.dm.energyData.freeInfo;
        if (!storeFreeInfo) return false;
        var typeCfg = {
          2: "stickyWild",
          3: "multWild",
          4: "randWild",
          5: "removeSymbol",
          6: "extraBlastZone",
          7: "extraBonus"
        };
        return storeFreeInfo.hasOwnProperty(typeCfg[storeType.toString()]);
      },
      startMove: function startMove() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var storeInfo, StoreItemType;
          return regeneratorRuntime.wrap(function _callee5$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              storeInfo = SlotsFacade.dm.energyData;
              if (!(1 != storeInfo.state)) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return", false);

             case 3:
              if (_this5._isEnterWild) {
                _context6.next = 6;
                break;
              }
              console.log("\u672a\u5728wild game \u4e2d\u76f4\u63a5\u8fd4\u56de");
              return _context6.abrupt("return");

             case 6:
              StoreItemType = SlotsFacade.dm.getGameCfg().StoreItemType;
              _this5.hasStoreType(StoreItemType.randWild) || (_this5.hasStoreType(StoreItemType.stickyWild) ? _this5._addStickyWild() : _this5.hasStoreType(StoreItemType.extraBonus) && SlotsFacade.dm.GetFreeTime() == SlotsFacade.dm.GetTotalFree() - 1 && _this5.showExtraBonus());

             case 8:
             case "end":
              return _context6.stop();
            }
          }, _callee5);
        }))();
      },
      onSpinMsg: function onSpinMsg() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var mapInfo, StoreItemType;
          return regeneratorRuntime.wrap(function _callee6$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              mapInfo = SlotsFacade.dm.energyData;
              if (!(1 != mapInfo.state)) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return");

             case 3:
              if (_this6._isEnterWild) {
                _context7.next = 6;
                break;
              }
              console.log("\u672a\u5728wild game \u4e2d\u76f4\u63a5\u8fd4\u56de");
              return _context7.abrupt("return");

             case 6:
              StoreItemType = SlotsFacade.dm.getGameCfg().StoreItemType;
              if (!_this6.hasStoreType(StoreItemType.randWild)) {
                _context7.next = 12;
                break;
              }
              _context7.next = 10;
              return _this6.showRandomWild();

             case 10:
              _context7.next = 19;
              break;

             case 12:
              if (!_this6.hasStoreType(StoreItemType.stickyWild)) {
                _context7.next = 15;
                break;
              }
              _context7.next = 19;
              break;

             case 15:
              if (!_this6.hasStoreType(StoreItemType.extraBonus)) {
                _context7.next = 19;
                break;
              }
              if (!(SlotsFacade.dm.GetFreeTime() == SlotsFacade.dm.GetTotalFree() - 1)) {
                _context7.next = 19;
                break;
              }
              _context7.next = 19;
              return SlotsFacade.delayTime(2);

             case 19:
             case "end":
              return _context7.stop();
            }
          }, _callee6);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var storeInfo, StoreItemType;
          return regeneratorRuntime.wrap(function _callee7$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              storeInfo = SlotsFacade.dm.energyData;
              if (!(1 != storeInfo.state)) {
                _context8.next = 3;
                break;
              }
              return _context8.abrupt("return");

             case 3:
              if (_this7._isEnterWild) {
                _context8.next = 6;
                break;
              }
              console.log("\u672a\u5728wild game \u4e2d\u76f4\u63a5\u8fd4\u56de");
              return _context8.abrupt("return");

             case 6:
              StoreItemType = SlotsFacade.dm.getGameCfg().StoreItemType;
              if (!_this7.hasStoreType(StoreItemType.randWild)) {
                _context8.next = 12;
                break;
              }
              _context8.next = 10;
              return _this7.removeWild();

             case 10:
              _context8.next = 20;
              break;

             case 12:
              if (!_this7.hasStoreType(StoreItemType.stickyWild)) {
                _context8.next = 17;
                break;
              }
              _context8.next = 15;
              return _this7.hideWild();

             case 15:
              _context8.next = 20;
              break;

             case 17:
              if (!_this7.hasStoreType(StoreItemType.extraBonus)) {
                _context8.next = 20;
                break;
              }
              _context8.next = 20;
              return _this7.hideWild();

             case 20:
             case "end":
              return _context8.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "DwarfsAndPrincess_Cfg", "DwarfsAndPrincess_Character", "DwarfsAndPrincess_Collect", "DwarfsAndPrincess_FlowCtrl", "DwarfsAndPrincess_Flower", "DwarfsAndPrincess_FreeWheelGame", "DwarfsAndPrincess_GameData", "DwarfsAndPrincess_Logic", "DwarfsAndPrincess_MainPanel", "DwarfsAndPrincess_MiniWheelGame", "DwarfsAndPrincess_Popup", "DwarfsAndPrincess_PrizePool", "DwarfsAndPrincess_Reel", "DwarfsAndPrincess_Slots", "DwarfsAndPrincess_Sound", "DwarfsAndPrincess_StoreGame", "DwarfsAndPrincess_StoreItem", "DwarfsAndPrincess_Symbol", "DwarfsAndPrincess_WildGame" ]);