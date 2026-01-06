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
  RomanticPrincess_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b9807c1TxBxbEABklBwC5v", "RomanticPrincess_BonusGame");
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
      properties: {
        labelTemplate: cc.Label,
        jpParticleArr: [ cc.Node ],
        spineCenter: sp.Skeleton,
        spineBottom: sp.Skeleton,
        spineMultiple: sp.Skeleton,
        _cbHandler: null
      },
      onLoad: function onLoad() {
        this.labelTemplate.node.active = false;
        this.spineCenter.node.active = false;
        this.spineMultiple.node.active = false;
      },
      enterBonus: function enterBonus(cbHandler) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._cbHandler = cbHandler;
              _context.next = 3;
              return _this.assignmentJp();

             case 3:
              _context.next = 5;
              return _this.settlementCoin();

             case 5:
              SlotsFacade.slots.resetReelBonusAni();
              cbHandler && cbHandler(SlotsFacade.dm.getSpinData().bonusInfo.winCoin);

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      assignmentJp: function assignmentJp() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var bonusInfo, jpItems, _iterator, _step, i, _i, _jpItems, item, _loop, _i2, _jpItems2;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              bonusInfo = SlotsFacade.dm.getSpinData().bonusInfo;
              jpItems = [];
              _iterator = _createForOfIteratorHelper(bonusInfo.items);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  i = _step.value;
                  i.jackpot && jpItems.push(i);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              if (!(jpItems.length < 1)) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return");

             case 6:
              for (_i = 0, _jpItems = jpItems; _i < _jpItems.length; _i++) {
                item = _jpItems[_i];
                SlotsFacade.prizePool.playWinAni(item.jackpot.id - 1);
              }
              SlotsFacade.soundMgr.playEffect("green_dia_hit");
              _context2.next = 10;
              return SlotsFacade.delayTime(1);

             case 10:
              _loop = function _loop() {
                var item = _jpItems2[_i2];
                var pNode = cc.instantiate(_this2.jpParticleArr[item.jackpot.id - 1]);
                pNode.active = true;
                pNode.parent = _this2.node;
                var startPos = SlotsFacade.prizePool.getJpGlobalPos(item.jackpot.id - 1);
                startPos = _this2.node.convertToNodeSpaceAR(startPos);
                var symbol = SlotsFacade.slots.GetSymbolByIdx(item.idx);
                var endPos = SlotsFacade.slots.getIdxGlobalPos(item.idx);
                endPos = _this2.node.convertToNodeSpaceAR(endPos);
                pNode.position = startPos;
                cc.tween(pNode).to(.4, {
                  x: endPos.x,
                  y: endPos.y
                }).call(function() {
                  pNode.removeFromParent(true);
                  SlotsFacade.soundMgr.playEffect("diamond_text_rotate");
                  symbol.showJpSymbolCoin(item.jackpot.value);
                }).start();
              };
              for (_i2 = 0, _jpItems2 = jpItems; _i2 < _jpItems2.length; _i2++) _loop();
              _context2.next = 14;
              return SlotsFacade.delayTime(2.2);

             case 14:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      settlementCoin: function settlementCoin() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var centerPos, centerLabel, bonusInfo, items, sum, _loop2, i, freeInfo, multBonus, bottomLabel, bottomPos, nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              centerPos = SlotsFacade.mainPanel.slots.convertToWorldSpaceAR(cc.v2(0, 0));
              centerPos = _this3.node.convertToNodeSpaceAR(centerPos);
              centerLabel = cc.instantiate(_this3.labelTemplate.node).getComponent(cc.Label);
              centerLabel.node.parent = _this3.node;
              centerLabel.node.active = true;
              centerLabel.string = "";
              centerLabel.node.position = centerPos;
              _this3.spineCenter.node.position = centerPos;
              _this3.spineCenter.node.active = true;
              bonusInfo = SlotsFacade.dm.getSpinData().bonusInfo;
              items = bonusInfo.items.concat();
              items.sort(function(a, b) {
                var aIdxInfo = SlotsFacade.slots.transferIdx(a.idx);
                var bIdxInfo = SlotsFacade.slots.transferIdx(b.idx);
                return aIdxInfo.col > bIdxInfo.col ? 1 : aIdxInfo.col < bIdxInfo.col ? -1 : aIdxInfo.row - bIdxInfo.row;
              });
              sum = 0;
              _loop2 = regeneratorRuntime.mark(function _loop2(i) {
                var val, label;
                return regeneratorRuntime.wrap(function _loop2$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    val = items[i].coin || items[i].jackpot.value;
                    label = cc.instantiate(_this3.labelTemplate.node).getComponent(cc.Label);
                    label.node.active = true;
                    label.node.parent = _this3.node;
                    label.node.position = _this3.node.convertToNodeSpaceAR(SlotsFacade.slots.getIdxGlobalPos(items[i].idx));
                    label.string = Global.convertNumToShort(val);
                    SlotsFacade.soundMgr.playEffect([ "diamond_collect1", "diamond_collect2", "diamond_collect3" ][Math.floor(3 * Math.random())]);
                    cc.tween(label.node).to(.6, {
                      x: centerPos.x,
                      y: centerPos.y
                    }, {
                      easing: "cubicIn"
                    }).call(function() {
                      label.node.removeFromParent(true);
                      _this3.spineCenter.setAnimation(0, "animation1", false);
                    }).start();
                    _context3.next = 10;
                    return SlotsFacade.delayTime(.6);

                   case 10:
                    cc.tween(centerLabel.node).to(.3, {
                      scale: 1.2 * centerLabel.node.scale
                    }, {
                      easing: "backOut"
                    }).start();
                    _context3.next = 13;
                    return new Promise(function(res) {
                      Global.doRoallNumEff(centerLabel, sum, sum + val, 1, res, null, 0, true);
                    });

                   case 13:
                    sum += val;

                   case 14:
                   case "end":
                    return _context3.stop();
                  }
                }, _loop2);
              });
              i = 0;

             case 15:
              if (!(i < items.length)) {
                _context4.next = 20;
                break;
              }
              return _context4.delegateYield(_loop2(i), "t0", 17);

             case 17:
              i++;
              _context4.next = 15;
              break;

             case 20:
              _context4.next = 22;
              return SlotsFacade.delayTime(.5);

             case 22:
              freeInfo = SlotsFacade.dm.getSpinData().storeInfo.freeInfo;
              if (!freeInfo) {
                _context4.next = 41;
                break;
              }
              multBonus = freeInfo.multBonus;
              if (!multBonus) {
                _context4.next = 41;
                break;
              }
              _this3.spineMultiple.node.active = true;
              _this3.spineMultiple.node.position = cc.v2(0, 0);
              _this3.spineMultiple.setAnimation(0, "animation".concat(multBonus, "_1"), false);
              _this3.spineMultiple.addAnimation(0, "animation".concat(multBonus), false, .35);
              _this3.spineMultiple.setCompleteListener(function() {
                _this3.spineMultiple.setCompleteListener(null);
              });
              SlotsFacade.soundMgr.playEffect("multi_collect4");
              cc.tween(_this3.spineMultiple.node).to(.9, {
                x: centerPos.x,
                y: centerPos.y
              }).call(function() {
                _this3.spineMultiple.node.active = false;
              }).start();
              _context4.next = 35;
              return SlotsFacade.delayTime(.8);

             case 35:
              _this3.spineCenter.setAnimation(0, "animation2", false);
              _this3.spineCenter.setCompleteListener(function() {
                _this3.spineCenter.setCompleteListener(null);
                _this3.spineCenter.node.active = false;
              });
              cc.tween(centerLabel.node).to(.3, {
                scale: centerLabel.node.scale * (1 + multBonus / 10)
              }, {
                easing: "backOut"
              }).start();
              _context4.next = 40;
              return new Promise(function(res) {
                Global.doRoallNumEff(centerLabel, sum, sum * multBonus, 1, res, null, 0, true);
              });

             case 40:
              sum *= multBonus;

             case 41:
              bottomLabel = cc.find("winBg/lbl_winNum_nor", SlotsFacade.bottomCmp.node);
              bottomPos = bottomLabel.convertToWorldSpaceAR(cc.v2(0, 0));
              bottomPos = _this3.node.convertToNodeSpaceAR(bottomPos);
              SlotsFacade.soundMgr.playEffect("diamond_collectall");
              cc.tween(centerLabel.node).to(1, {
                x: bottomPos.x,
                y: bottomPos.y
              }, {
                easing: "cubicIn"
              }).call(function() {
                centerLabel.node.removeFromParent(true);
                _this3.spineBottom.node.active = true;
                _this3.spineBottom.node.position = bottomPos;
                _this3.spineBottom.setAnimation(0, "animation", false);
                _this3.spineBottom.setCompleteListener(function() {
                  _this3.spineBottom.setCompleteListener(null);
                  _this3.spineBottom.node.active = false;
                });
              }).start();
              _context4.next = 48;
              return SlotsFacade.delayTime(1);

             case 48:
              nWin = bonusInfo.winCoin;
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin() - cc.vv.gameData.GetGameWin() + nWin);
              bottomLabel.active = true;
              _context4.next = 54;
              return new Promise(function(res) {
                Global.doRoallNumEff(bottomLabel, nTotal - nWin, nTotal, 1, res, null, 0, true);
              });

             case 54:
              _context4.next = 56;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 56:
             case "end":
              return _context4.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RomanticPrincess_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97d1fKejbVDobayY4aou/a5", "RomanticPrincess_Cfg");
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
          name: "animation1",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 300,
          loop: true
        },
        stop_ani: {
          name: "animation",
          zIndex: 400
        },
        idle_ani: {
          name: "animation1",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 300
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
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w301",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 302, {
        node: "s302",
        win_node: "w302",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _symbol),
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "RomanticPrincess_Slots",
        Reels: "RomanticPrincess_Reel",
        Symbols: "RomanticPrincess_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 110
      },
      helpItems: [ "games/RomanticPrincess/prefab/LMSlots_Help_item1", "games/RomanticPrincess/prefab/LMSlots_Help_item2", "games/RomanticPrincess/prefab/LMSlots_Help_item3", "games/RomanticPrincess/prefab/LMSlots_Help_item4", "games/RomanticPrincess/prefab/LMSlots_Help_item5", "games/RomanticPrincess/prefab/LMSlots_Help_item6" ],
      autoModelDelay: 1,
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 301, 302 ],
      randomSymbolsBySkip: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 301, 302 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      normalBgm: "base_bgm",
      AddAntiTime: 2.4,
      reelStateInfo: [ {
        isScatter: true,
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/RomanticPrincess/",
        reelStopSound: "reel_stop",
        symbolStopSound: "sc_land1",
        antSound: "reel_anti",
        antSpeed: 2e3
      }, {
        inNormal: true,
        id: [ 3, 301, 302 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/RomanticPrincess/",
        reelStopSound: "reel_stop",
        symbolStopSound: "diamond_land",
        antSound: "reel_anti",
        antSpeed: 2e3
      } ]
    };
    Cfg.isEnergyId = function(id) {
      return 3 == id;
    };
    Cfg.NeedIdleIds = [];
    Cfg.StoreItemType = {
      freeCnt: 1,
      stickyWild: 2,
      randWild: 3,
      roamingWilds: 4,
      removeSymbol: 5,
      extraBonus: 6,
      multWild: 7,
      stickyWildAndRemoveSymbol: 8,
      randomWildAndRemoveSymbol: 9,
      roamingWildAndRemoveSymbol: 10,
      extraBonusAndMultBonus: 11
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  RomanticPrincess_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "335f8E4hbBMM6lEDaZyHdGe", "RomanticPrincess_Character");
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
        spineRole: sp.Skeleton,
        spineDiamondBonus: sp.Skeleton
      },
      onLoad: function onLoad() {
        this.spineDiamondBonus.node.active = false;
      },
      playDiamondAni: function playDiamondAni() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  RomanticPrincess_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8de60OOMllN2pnwWRN8Rd+8", "RomanticPrincess_Collect");
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
        label: cc.Label,
        icon: cc.Node,
        spineArrive: sp.Skeleton,
        spineLock: sp.Skeleton,
        traceParticle: cc.ParticleSystem,
        tips: cc.Node,
        isOpen: false
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
          _this2.isOpen ? _this2._openStore() : _this2._openCollect();
        }, this);
      },
      _init: function _init() {
        this.setCnt(SlotsFacade.dm.energyData.gemCnt);
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
      showCollect: function showCollect(isInit) {
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          if (isInit) this.spineLock.setAnimation(0, "animation1", true); else if (!this.isOpen) {
            SlotsFacade.soundMgr.playEffect("map_unlock");
            this.spineLock.setAnimation(0, "animation4", false);
            this.spineLock.addAnimation(0, "animation1", true);
          }
        } else if (isInit) this.spineLock.setAnimation(0, "animation3", false); else if (this.isOpen) {
          SlotsFacade.soundMgr.playEffect("map_lock");
          this.spineLock.setAnimation(0, "animation2", false);
          this.spineLock.addAnimation(0, "animation3", false);
        }
        this.isOpen = boo;
      },
      setCnt: function setCnt(cnt, playAni) {
        var _this3 = this;
        this.label.string = Global.FormatNumToComma(cnt);
        if (playAni) {
          this.spineArrive.node.active = true;
          this.spineArrive.setAnimation(0, "animation", false);
          this.spineArrive.setCompleteListener(function() {
            _this3.spineArrive.setCompleteListener(null);
            _this3.spineArrive.node.active = false;
          });
        }
      },
      collectEnergy: function collectEnergy(globalPosArr) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var endPos, promiseArr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bonus_fly");
              endPos = _this4.icon.getPosition();
              promiseArr = [];
              globalPosArr.forEach(function(v) {
                var pos = _this4.node.convertToNodeSpaceAR(v);
                var lz = cc.instantiate(_this4.traceParticle.node);
                lz.parent = _this4.node;
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
              });
              _context.next = 6;
              return Promise.all(promiseArr);

             case 6:
              _this4.setCnt(SlotsFacade.dm.energyData.gemCnt, true);

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
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
  RomanticPrincess_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b51fd2bksVEFJaThHBT18Bo", "RomanticPrincess_FlowCtrl");
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
          var rest, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              rest = cc.vv.gameData.GetFreeTime();
              if (!(rest > 0)) {
                _context.next = 6;
                break;
              }
              nTotal = cc.vv.gameData.GetTotalFreeWin();
              SlotsFacade.bottomCmp.SetWin(nTotal);
              _context.next = 6;
              return _this.enterFreeGame(true);

             case 6:
              SlotsFacade.slots.CanDoNextRound();

             case 7:
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
          var nWin, nTotal, bonusWin, jpWin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return SlotsFacade.wildGame.spinEnd();

             case 2:
              _context4.next = 4;
              return _this2.collectEnergy();

             case 4:
              _context4.next = 6;
              return _this2.enterBonusGame();

             case 6:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              bonusWin = 0;
              jpWin = 0;
              SlotsFacade.dm.getSpinData().bonusInfo.isWin && (bonusWin = SlotsFacade.dm.getSpinData().bonusInfo.winCoin);
              SlotsFacade.dm.getSpinData().jackpotInfo && (jpWin = SlotsFacade.dm.getSpinData().jackpotInfo.winCoin);
              nWin = nWin - bonusWin - jpWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              nTotal -= jpWin;
              _context4.next = 18;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 18:
              _context4.next = 20;
              return _this2.settlementJp();

             case 20:
              _context4.next = 22;
              return SlotsFacade.delayTime(.5);

             case 22:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context4.next = 41;
                break;
              }
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context4.next = 37;
                break;
              }
              SlotsFacade.soundMgr.playEffect("vo_free");
              _context4.next = 27;
              return SlotsFacade.slots.playTriggerAni(SlotsFacade.dm.getSpinData().scatterZJLuXian.indexs);

             case 27:
              SlotsFacade.slots.Backup();
              _context4.next = 30;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), true);

             case 30:
              SlotsFacade.mainPanel.showSceneTransition(1);
              _context4.next = 33;
              return SlotsFacade.delayTime(3);

             case 33:
              _context4.next = 35;
              return _this2.enterFreeGame();

             case 35:
              _context4.next = 39;
              break;

             case 37:
              _context4.next = 39;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), false);

             case 39:
              _context4.next = 56;
              break;

             case 41:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context4.next = 56;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              if (!(1 == SlotsFacade.dm.energyData.state)) {
                _context4.next = 48;
                break;
              }
              _context4.next = 46;
              return SlotsFacade.popup.showWinStoreGold(SlotsFacade.dm.getFreeWinCoin());

             case 46:
              _context4.next = 50;
              break;

             case 48:
              _context4.next = 50;
              return SlotsFacade.popup.showWinFreeGold(SlotsFacade.dm.getFreeWinCoin());

             case 50:
              SlotsFacade.mainPanel.showSceneTransition(1);
              _context4.next = 53;
              return SlotsFacade.delayTime(3);

             case 53:
              SlotsFacade.slots.Resume();
              _context4.next = 56;
              return _this2.enterNormalGame();

             case 56:
              SlotsFacade.slots.CanDoNextRound();

             case 57:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterFreeGame: function enterFreeGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var freeType, storeInfo, total, rest;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              freeType = 1;
              storeInfo = SlotsFacade.dm.energyData;
              1 == storeInfo.state && (freeType = 2);
              SlotsFacade.mainPanel.showBg(1);
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
              SlotsFacade.slots.updateAllSymbol();
              _context5.next = 16;
              return SlotsFacade.wildGame.enterWildGame();

             case 16:
              _context5.next = 20;
              break;

             case 18:
              SlotsFacade.dm.updateRandomSymbols();
              SlotsFacade.collect.show();

             case 20:
              _context5.next = 22;
              return SlotsFacade.delayTime(.5);

             case 22:
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
              SlotsFacade.dm.updateRandomSymbols();
              SlotsFacade.collect.show();
              SlotsFacade.bottomCmp.ShowFreeModel(false);
              SlotsFacade.mainPanel.showBg(0);
              Global.SlotsSoundMgr.playNormalBgm();
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = true;
              SlotsFacade.wildGame.exitWildGame();
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context6.next = 11;
                break;
              }
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              _context6.next = 11;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nTotal, nTotal, true, res);
              });

             case 11:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      collectEnergy: function collectEnergy() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var items, posArr;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (!(0 != SlotsFacade.dm.energyData.state)) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              if (SlotsFacade.collect.isOpen) {
                _context7.next = 4;
                break;
              }
              return _context7.abrupt("return");

             case 4:
              items = SlotsFacade.slots.getSymbolsByServerIds(SlotsFacade.dm.getCollectSymbolIndexs());
              posArr = [];
              items.forEach(function(v) {
                posArr.push(v.node.convertToWorldSpaceAR(cc.v2(0, 0)));
              });
              if (!(posArr.length > 0)) {
                _context7.next = 10;
                break;
              }
              _context7.next = 10;
              return SlotsFacade.collect.collectEnergy(posArr);

             case 10:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      enterBonusGame: function enterBonusGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var bonusInfo;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              bonusInfo = SlotsFacade.dm.getSpinData().bonusInfo;
              if (!(bonusInfo.isWin && bonusInfo.winCoin > 0)) {
                _context8.next = 11;
                break;
              }
              if (!(SlotsFacade.dm.GetTotalFree() < 1)) {
                _context8.next = 7;
                break;
              }
              SlotsFacade.soundMgr.playEffect("bell");
              SlotsFacade.soundMgr.playEffect([ "vo_beautiful", "vo_nice" ][Math.floor(2 * Math.random())]);
              _context8.next = 7;
              return SlotsFacade.slots.shakeReels();

             case 7:
              _context8.next = 9;
              return new Promise(function(res) {
                SlotsFacade.bonusGame.enterBonus(res);
              });

             case 9:
              _context8.next = 12;
              break;

             case 11:
              SlotsFacade.slots.resetReelBonusAni();

             case 12:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      settlementJp: function settlementJp() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var jackpotInfo, nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              jackpotInfo = SlotsFacade.dm.getSpinData().jackpotInfo;
              if (jackpotInfo) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return");

             case 3:
              SlotsFacade.soundMgr.playEffect("bell");
              SlotsFacade.soundMgr.playEffect("vo_great");
              SlotsFacade.mainPanel.spine_border_effect.active = true;
              SlotsFacade.slots.shakeReels(2, 2);
              _context9.next = 9;
              return SlotsFacade.delayTime(1);

             case 9:
              SlotsFacade.mainPanel.spine_border_effect.active = false;
              SlotsFacade.prizePool.playWinAni(jackpotInfo.jackpot.id - 1);
              _context9.next = 13;
              return SlotsFacade.delayTime(1.5);

             case 13:
              _context9.next = 15;
              return SlotsFacade.popup.showWinJPGold(jackpotInfo.jackpot.id, jackpotInfo.jackpot.value);

             case 15:
              nWin = jackpotInfo.winCoin;
              nTotal = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context9.next = 20;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 20:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RomanticPrincess_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f8b8wzSOlJepCLxlnnzFgT", "RomanticPrincess_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        energyData: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.energyData = this._deskInfo.storeInfo;
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
        200 == msg.code && (this.energyData = msg.storeInfo);
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
      },
      getReelCards: function getReelCards(reelIdx) {
        var ret = [];
        var cards = this.getSpinData().resultCards;
        for (var i = 0; i < cards.length; i++) i % 5 == reelIdx && ret.push(cards[i]);
        return ret;
      },
      updateRandomSymbols: function updateRandomSymbols() {
        var skipSymbols = [];
        SlotsFacade.dm.energyData.freeInfo && SlotsFacade.dm.energyData.freeInfo.removeSymbol && (skipSymbols = SlotsFacade.dm.energyData.freeInfo.removeSymbol.concat());
        var cfg = cc.vv.gameData.getGameCfg();
        var rs = cfg.randomSymbols.concat();
        for (var i = 0; i < rs.length; i++) if (skipSymbols.includes(rs[i])) {
          rs.splice(i, 1);
          i--;
        }
        this.getGameCfg().randomSymbolsBySkip = rs;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  RomanticPrincess_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c6dc5Wi/FG2qrXIo4AfSSk", "RomanticPrincess_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("RomanticPrincess_MainPanel");
        this.soundMgr = this.addComponent("RomanticPrincess_Sound");
        this.InitCommComponent();
        this.flowCtrl = this.addComponent("RomanticPrincess_FlowCtrl");
        this.popup = this.mainPanel.popup_node.getComponent("RomanticPrincess_Popup");
        this.wildGame = this.mainPanel.wild_game.getComponent("RomanticPrincess_WildGame");
        this.collect = this.mainPanel.collect.getComponent("RomanticPrincess_Collect");
        this.storeGame = this.mainPanel.store_node.getComponent("RomanticPrincess_StoreGame");
        this.bonusGame = this.mainPanel.bonus_game.getComponent("RomanticPrincess_BonusGame");
        this.prizePool = this.mainPanel.jpNode.getComponent("RomanticPrincess_PrizePool");
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
        SlotsFacade.soundMgr.playEffect("vo_welcome");
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  RomanticPrincess_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11c94U5lNFLso+kHjxjG/7b", "RomanticPrincess_MainPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.slots = this.node.getChildByName("slots");
        this.popup_node = this.node.getChildByName("popup_node");
        this.wild_game = this.slots.getChildByName("wild_game");
        this.transition_node = this.node.getChildByName("transition_node");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.top_node = this.node.getChildByName("top_node");
        this.collect = this.slots.getChildByName("collect");
        this.spine_border_effect = this.slots.getChildByName("spine_border_effect");
        this.store_node = this.node.getChildByName("store_node");
        this.bonus_game = this.node.getChildByName("bonus_game");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type || (type = 0);
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
      },
      showSceneTransition: function showSceneTransition(type, cmpHandler) {
        type = type || 1;
        var spine = this.transition_node.getChildByName("spine").getComponent(sp.Skeleton);
        var soundName = "";
        var animationName = "idle2";
        1 == type ? soundName = "tobase_transition" : 2 == type && (soundName = "tofree_transition");
        SlotsFacade.soundMgr.playEffect(soundName);
        spine.node.active = true;
        spine.setAnimation(0, animationName, false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          spine.node.active = false;
          cmpHandler && cmpHandler();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  RomanticPrincess_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8603aVJLK1E8LlPL3Gt/hbe", "RomanticPrincess_Popup");
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
      showWinFreeCnt: function showWinFreeCnt(cnt, isFirstTrigger) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              aniCfg = {
                enter: "animation1_1",
                idle: "animation1_2",
                exit: "animation1_3"
              };
              if (isFirstTrigger) SlotsFacade.soundMgr.playEffect("free_dialog_start_show"); else {
                SlotsFacade.soundMgr.playEffect("free_dialog_start_show");
                aniCfg = {
                  enter: "animation2_1",
                  idle: "animation2_2",
                  exit: "animation2_3"
                };
              }
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 1;
              label = panel.getChildByName("label");
              label.getComponent(cc.Label).string = cnt.toString();
              label.active = true;
              label.scale = 0;
              label.y = isFirstTrigger ? 75 : 36;
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
              spine = panel.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, aniCfg.enter, false);
              aniCfg.idle && spine.addAnimation(0, aniCfg.idle, true);
              if (!isFirstTrigger) {
                _context.next = 22;
                break;
              }
              _context.next = 20;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  SlotsFacade.soundMgr.playEffect("dialog_close");
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
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 20:
              _context.next = 28;
              break;

             case 22:
              _context.next = 24;
              return SlotsFacade.delayTime(1.5);

             case 24:
              SlotsFacade.soundMgr.playEffect("dialog_close");
              cc.tween(label).to(.8, {
                scale: 0
              }).start();
              _context.next = 28;
              return new Promise(function(res) {
                spine.setAnimation(0, aniCfg.exit, false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  _this.showBg(false);
                  panel.active = false;
                  res();
                });
              });

             case 28:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinFreeGold: function showWinFreeGold(goldNumb) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              aniCfg = {
                enter: "animation3_1",
                idle: "animation3_2",
                exit: "animation3_3"
              };
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
              spine.setAnimation(0, aniCfg.enter, false);
              spine.addAnimation(0, aniCfg.idle, true);
              _context2.next = 20;
              return SlotsFacade.delayTime(.9);

             case 20:
              _context2.next = 22;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  SlotsFacade.soundMgr.playEffect("dialog_close");
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  spine.setAnimation(0, aniCfg.exit, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this2.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 22:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinStoreGold: function showWinStoreGold(goldNumb) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              aniCfg = {
                enter: "animation4_1",
                idle: "animation4_2",
                exit: "animation4_3"
              };
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
              spine.setAnimation(0, aniCfg.enter, false);
              spine.addAnimation(0, aniCfg.idle, true);
              _context3.next = 20;
              return SlotsFacade.delayTime(.9);

             case 20:
              _context3.next = 22;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  SlotsFacade.soundMgr.playEffect("dialog_close");
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  spine.setAnimation(0, aniCfg.exit, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this3.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 22:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showWinJPGold: function showWinJPGold(jpType, goldNumb) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var aniCfg, panel, label, okBtn, spine;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              aniCfg = {
                1: {
                  enter: "animation5_1",
                  idle: "animation5_2",
                  exit: "animation5_3",
                  sound: "win_jp_show5"
                },
                2: {
                  enter: "animation4_1",
                  idle: "animation4_2",
                  exit: "animation4_3",
                  sound: "win_jp_show4"
                },
                3: {
                  enter: "animation3_1",
                  idle: "animation3_2",
                  exit: "animation3_3",
                  sound: "maxi_dialog_start_show"
                },
                4: {
                  enter: "animation2_1",
                  idle: "animation2_2",
                  exit: "animation2_3",
                  sound: "major_dialog_start_show"
                },
                5: {
                  enter: "animation1_1",
                  idle: "animation1_2",
                  exit: "animation1_3",
                  sound: "grand_dialog_start_show"
                }
              };
              SlotsFacade.soundMgr.playEffect(aniCfg[jpType].sound);
              _this4.showBg(true);
              panel = _this4.node.getChildByName("panel_win_jp_coin");
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
              spine.setAnimation(0, aniCfg[jpType].enter, false);
              spine.addAnimation(0, aniCfg[jpType].idle, true);
              _context4.next = 20;
              return SlotsFacade.delayTime(.9);

             case 20:
              _context4.next = 22;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("click");
                  SlotsFacade.soundMgr.playEffect("dialog_close");
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(label).to(.8, {
                    scale: 0
                  }).start();
                  cc.tween(okBtn).to(.8, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                  spine.setAnimation(0, aniCfg[jpType].exit, false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    _this4.showBg(false);
                    panel.active = false;
                    res();
                  });
                };
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 22:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RomanticPrincess_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "383c4M3iUtLWpcNbVF2FzL0", "RomanticPrincess_PrizePool");
    "use strict";
    var JpCfg = {
      0: {
        nodeName: "prizePool_Mini",
        lockAni: "animation5_1",
        unlockAni: "animation5_2",
        idleAni: "animation5",
        winAni: "animation5",
        iconIndex: 0,
        weight: 0
      },
      1: {
        nodeName: "prizePool_Minor",
        lockAni: "animation4_1",
        unlockAni: "animation4",
        idleAni: "animation4",
        winAni: "animation4",
        iconIndex: 1,
        weight: 1
      },
      2: {
        nodeName: "prizePool_Major",
        lockAni: "animation3_1",
        unlockAni: "animation3",
        idleAni: "animation3",
        winAni: "animation3",
        iconIndex: 2,
        weight: 2
      },
      3: {
        nodeName: "prizePool_Maxi",
        lockAni: "animation2_1",
        unlockAni: "animation2",
        idleAni: "animation2",
        winAni: "animation2",
        iconIndex: 3,
        weight: 3
      },
      4: {
        nodeName: "prizePool_Grand",
        lockAni: "animation1_1",
        unlockAni: "animation1",
        idleAni: "animation1",
        winAni: "animation1",
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
              var bgImg = targetJpNode.getChildByName("bg").getComponent("ImgSwitchCmp");
              var titleImg = targetJpNode.getChildByName("title").getComponent("ImgSwitchCmp");
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
                  bgImg.setIndex(1);
                  titleImg.setIndex(1);
                  targetJpNode.getChildByName("lbl_num").color = cc.Color.GRAY;
                  targetJpNode.getChildByName("spine_idle").active = false;
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
                  bgImg.setIndex(0);
                  titleImg.setIndex(0);
                  targetJpNode.getChildByName("lbl_num").color = cc.Color.WHITE;
                  var spineIdle = targetJpNode.getChildByName("spine_idle").getComponent(sp.Skeleton);
                  spineIdle.node.active = true;
                  spineIdle.setAnimation(0, aniCfg.idleAni, true);
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
      },
      playWinAni: function playWinAni(jpType) {
        var aniCfg = JpCfg[jpType.toString()];
        var spine = cc.find("".concat(aniCfg.nodeName, "/spine_win"), this.node).getComponent(sp.Skeleton);
        spine.node.active = true;
        spine.setAnimation(0, aniCfg.winAni, false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          spine.node.active = false;
        });
      },
      getJpGlobalPos: function getJpGlobalPos(jpType) {
        var aniCfg = JpCfg[jpType.toString()];
        var jpNode = cc.find("".concat(aniCfg.nodeName, "/spine_win"), this.node);
        return jpNode.convertToWorldSpaceAR(cc.v2(0, 0));
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  RomanticPrincess_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "092baloYgJGvKYp+FsJN3wG", "RomanticPrincess_Reel");
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
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        var _this = this;
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                if (this._stopRightNow) {
                  cc.find("node_anti", this.node).active = false;
                  cc.find("dark_bg", this.node).active = false;
                  cc.vv.AudioManager.stopEffectByName(info.antSound);
                  this.node.scale = 1;
                  this.processReelBonusAni();
                } else cc.tween(this.node).to(.3, {
                  scale: 1
                }).call(function() {
                  _this.node.zIndex = _this.GetReelIdx();
                  cc.find("node_anti", _this.node).active = false;
                  cc.find("dark_bg", _this.node).active = false;
                  _this.processReelBonusAni();
                }).start();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        } else {
          cc.find("node_anti", this.node).active = true;
          cc.find("node_bonus", this.node).active = true;
          cc.find("dark_bg", this.node).active = true;
          this.node.zIndex = 1e3;
          cc.tween(this.node).to(.3, {
            scale: 1.2
          }).start();
        }
      },
      showBonusAni: function showBonusAni(boo) {
        var bonusAni = cc.find("node_bonus", this.node);
        bonusAni.active = boo;
      },
      processReelBonusAni: function processReelBonusAni() {
        if (!SlotsFacade.dm.getSpinData() || !SlotsFacade.dm.getSpinData().storeInfo) return;
        if (SlotsFacade.dm.getSpinData().storeInfo.state > 0) return;
        if (SlotsFacade.dm.GetTotalFree() > 0) return;
        var reelCards = SlotsFacade.dm.getReelCards(this.GetReelIdx());
        var canBonusCards = [ 3, 301, 302 ];
        var hasBonusSymbol = false;
        var _iterator2 = _createForOfIteratorHelper(reelCards), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var c = _step2.value;
            if (canBonusCards.includes(c)) {
              hasBonusSymbol = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        hasBonusSymbol ? this.showBonusAni(true) : this.showBonusAni(false);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  RomanticPrincess_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5855f3ekNpDkbffHoLse+uT", "RomanticPrincess_Slots");
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
        mask: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
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
      getSymbolsByServerIds: function getSymbolsByServerIds(ids) {
        var _this = this;
        var ret = [];
        ids.forEach(function(element) {
          ret.push(_this.GetSymbolByIdx(element));
        });
        return ret;
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
        if (spinData.bonusInfo && spinData.bonusInfo.items.length > 0) for (var _i = 0; _i < spinData.bonusInfo.items.length; _i++) {
          var bonusItem = spinData.bonusInfo.items[_i];
          if (bonusItem.coin) {
            var idxInfo = this.transferIdx(bonusItem.idx);
            reelResults[idxInfo.col][idxInfo.row].data.coin = bonusItem.coin;
          }
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) {
          var item = this._reels[_i2];
          var reelRes = reelResults[_i2];
          item.SetResult(reelRes);
        }
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
            if (info.inNormal) {
              if (SlotsFacade.dm.getSpinData().storeInfo.state > 0) return "continue";
              if (SlotsFacade.dm.GetTotalFree() > 0) return "continue";
            }
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i3 = 0; _i3 < reelResults.length; _i3++) {
              var item = _this2._reels[_i3];
              var reelRes = reelResults[_i3];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i3] > 0 && isContinuous && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              reelCountOfID > 0 && (haveCount += 1);
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              if (reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous) {
                stateInfo.isStop = true;
                stateInfo.isScatter && (stateInfo.symbolStopSound = "sc_land".concat(reelCountOfID));
              }
              stateInfo.continuous && stateInfo.counts[_i3] > 0 && 0 == reelCountOfID && (isContinuous = false);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _ret = _loop();
            if ("continue" === _ret) continue;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i4 = 0; _i4 < this._gameInfo.scatterZJLuXian.indexs.length; _i4++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i4];
          allWinIdx[val] = 1;
        }
        var reels = this._reels;
        var reelsLen = reels.length;
        for (var _i5 = 0; _i5 < reelsLen; _i5++) {
          var r = reels[_i5];
          var flags = [ false, false, false, false ];
          for (var j = 0; j < 4; j++) {
            var s = r._symbols[j];
            var _idx = (3 - j) * reelsLen + (_i5 + 1);
            1 == s.GetShowId() && allWinIdx[_idx] && (flags[j] = true);
          }
          if (flags[0] && flags[1] && flags[2] && flags[3]) {
            r._symbols[0].wildAniCount = 4;
            r._symbols[1].wildAniCount = 0;
            r._symbols[2].wildAniCount = 0;
            r._symbols[3].wildAniCount = 0;
          } else if (flags[0] && flags[1] && flags[2]) {
            r._symbols[0].wildAniCount = 3;
            r._symbols[1].wildAniCount = 0;
            r._symbols[2].wildAniCount = 0;
          } else if (flags[0] && flags[1]) {
            r._symbols[0].wildAniCount = 2;
            r._symbols[1].wildAniCount = 0;
          } else if (flags[1] && flags[2] && flags[3]) {
            r._symbols[1].wildAniCount = 3;
            r._symbols[2].wildAniCount = 0;
            r._symbols[3].wildAniCount = 0;
          } else if (flags[1] && flags[2]) {
            r._symbols[1].wildAniCount = 2;
            r._symbols[2].wildAniCount = 0;
          } else if (flags[2] && flags[3]) {
            r._symbols[2].wildAniCount = 2;
            r._symbols[3].wildAniCount = 0;
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
      showMask: function showMask() {
        this.mask.active = true;
        this.mask.opacity = 0;
        cc.tween(this.mask).to(.2, {
          opacity: 140
        }).start();
      },
      hideMask: function hideMask() {
        var _this3 = this;
        if (!this.mask.active) return;
        cc.tween(this.mask).to(.8, {
          opacity: 0
        }).call(function(res) {
          _this3.mask.active = false;
        }).start();
      },
      playTriggerAni: function playTriggerAni(indexs) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              indexs.forEach(function(element) {
                var item = _this4.GetSymbolByIdx(element);
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
      shakeReels: function shakeReels(time, offset) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _iterator2, _step2, reel;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sym_shake");
              time = time || 1;
              offset = offset || 2;
              _iterator2 = _createForOfIteratorHelper(_this5._reels);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  reel = _step2.value;
                  Global.shakeNode(reel.node, offset, time);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              _context2.next = 7;
              return SlotsFacade.delayTime(time);

             case 7:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      resetReelBonusAni: function resetReelBonusAni() {
        var _iterator3 = _createForOfIteratorHelper(this._reels), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var reel = _step3.value;
            reel.showBonusAni(false);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      },
      updateAllSymbol: function updateAllSymbol() {
        SlotsFacade.dm.updateRandomSymbols();
        var _iterator4 = _createForOfIteratorHelper(this._reels), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var reel = _step4.value;
            var symbols = reel._symbols;
            var _iterator5 = _createForOfIteratorHelper(symbols), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                var s = _step5.value;
                s.StartMove();
                s.ShowRandomSymbol();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  RomanticPrincess_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58592CO/QFAjaYsvG2/G8So", "RomanticPrincess_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/RomanticPrincess/",
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
  RomanticPrincess_StoreGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d91f3vk9llAtKLQisV2b3Y8", "RomanticPrincess_StoreGame");
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
        this.panel.active = false;
        this.item_template.active = false;
        this.closeBtn.node.on("click", function() {
          _this.close(true);
        }, this);
        this.resetBtn.node.on("click", function() {
          _this._reset();
        }, this);
        this.startBtn.node.on("click", function() {
          _this._startGame();
        }, this);
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
          mergeType: storeItemType.stickyWild,
          titleIndex: [ 0 ],
          types: [ {
            type: storeItemType.stickyWild,
            selectorType: 1,
            info: [ 1, 2, 3, 4, 5 ]
          } ],
          data: {}
        }, {
          mergeType: storeItemType.randWild,
          titleIndex: [ 1 ],
          types: [ {
            type: storeItemType.randWild,
            selectorType: 1,
            info: [ 1, 2, 3, 4, 5 ]
          } ],
          data: {}
        }, {
          mergeType: storeItemType.roamingWilds,
          titleIndex: [ 2 ],
          types: [ {
            type: storeItemType.roamingWilds,
            selectorType: 5,
            info: [ [ 3, 4, 5 ], [ 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ]
          } ],
          data: {}
        }, {
          mergeType: storeItemType.removeSymbol,
          titleIndex: [ 3 ],
          types: [ {
            type: storeItemType.removeSymbol,
            selectorType: 2,
            info: [ [ 13 ], [ 12, 13 ], [ 11, 12, 13 ], [ 10, 11, 12, 13 ], [ 9, 10, 11, 12, 13 ] ]
          } ],
          data: {}
        }, {
          mergeType: storeItemType.extraBonus,
          titleIndex: [ 4 ],
          types: [ {
            type: storeItemType.extraBonus,
            selectorType: 3,
            info: [ [ 3 ], [ 3, 301 ], [ 3, 301, 302 ] ]
          } ],
          data: {}
        }, {
          mergeType: storeItemType.multWild,
          titleIndex: [ 5 ],
          types: [ {
            type: storeItemType.multWild,
            selectorType: 4,
            info: [ 2, 3, 4 ]
          } ],
          data: {}
        }, {
          mergeType: storeItemType.stickyWildAndRemoveSymbol,
          titleIndex: [ 6, 7 ],
          types: [ {
            type: storeItemType.stickyWild,
            selectorType: 1,
            info: [ 1, 2, 3, 4, 5 ]
          }, {
            type: storeItemType.removeSymbol,
            selectorType: 2,
            info: [ [ 13 ], [ 12, 13 ], [ 11, 12, 13 ], [ 10, 11, 12, 13 ], [ 9, 10, 11, 12, 13 ] ]
          } ],
          data: {}
        }, {
          mergeType: storeItemType.randomWildAndRemoveSymbol,
          titleIndex: [ 8, 7 ],
          types: [ {
            type: storeItemType.randWild,
            selectorType: 1,
            info: [ 1, 2, 3, 4, 5 ]
          }, {
            type: storeItemType.removeSymbol,
            selectorType: 2,
            info: [ [ 13 ], [ 12, 13 ], [ 11, 12, 13 ], [ 10, 11, 12, 13 ], [ 9, 10, 11, 12, 13 ] ]
          } ],
          data: {}
        }, {
          mergeType: storeItemType.roamingWildAndRemoveSymbol,
          titleIndex: [ 9, 7 ],
          types: [ {
            type: storeItemType.roamingWilds,
            selectorType: 5,
            info: [ [ 3, 4, 5 ], [ 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ]
          }, {
            type: storeItemType.removeSymbol,
            selectorType: 2,
            info: [ [ 13 ], [ 12, 13 ], [ 11, 12, 13 ], [ 10, 11, 12, 13 ], [ 9, 10, 11, 12, 13 ] ]
          } ],
          data: {}
        }, {
          mergeType: storeItemType.extraBonusAndMultBonus,
          titleIndex: [ 10, 11 ],
          types: [ {
            type: storeItemType.extraBonus,
            selectorType: 3,
            info: [ [ 3 ], [ 3, 301 ], [ 3, 301, 302 ] ]
          }, {
            type: storeItemType.multWild,
            selectorType: 4,
            info: [ 2, 3, 4 ]
          } ],
          data: {}
        } ];
        for (var i = 0; i < this._storeListCfg.length; i++) {
          var item = this._storeListCfg[i];
          var itemCfg = this._getStoreCfgItem(item.mergeType);
          for (var j = 0; j < itemCfg.info.length; j++) itemCfg.info[j] instanceof Array ? itemCfg.type >= 8 ? item.data[itemCfg.info[j].join("-")] = itemCfg.mults[j] : item.data[itemCfg.info[j].join(",")] = itemCfg.mults[j] : item.data[itemCfg.info[j].toString()] = itemCfg.mults[j];
        }
        for (var _i = 0; _i < this._storeListCfg.length; _i++) {
          var _item = cc.instantiate(this.item_template);
          _item.active = true;
          _item.parent = this.scrollView.content;
          var itemCmp = _item.addComponent("RomanticPrincess_StoreItem");
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
        this._data.freeCost = this._data.freeCnt * SlotsFacade.dm.getDeskInfo().storeConfig.freeBaseCoin;
        if (this._currSelectItem) {
          this._data.storeItemCost = this._data.freeCnt * this._currSelectItem.getMultiple();
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
        this._data.storeItemCost = this._data.freeCnt * storeItem.getMultiple();
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
        SlotsFacade.dm.energyData.gemCnt >= total ? this.startBtn.interactable = true : this.startBtn.interactable = false;
      },
      _reset: function _reset() {
        this.startBtn.interactable = true;
        this.resetBtn.interactable = true;
        this.closeBtn.interactable = true;
        var storeInfo = SlotsFacade.dm.energyData;
        this._currSelectItem && this._currSelectItem.close();
        this._currSelectItem = null;
        this.totalWaterDropLabel.string = Global.FormatNumToComma(storeInfo.gemCnt);
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
            freeCnt: this._data.freeCnt
          }
        };
        if (this._currSelectItem) {
          var mergeType = this._currSelectItem.storeItemCfg.mergeType;
          var itemCfg = this._getStoreCfgItem(mergeType);
          var idx = itemCfg.mults.indexOf(this._currSelectItem.getMultiple()) + 1;
          param.choiceInfo.type = mergeType;
          param.choiceInfo.idx = idx;
        }
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
              SlotsFacade.dm.energyData = storeInfo;
              SlotsFacade.dm.SetFreeTime(storeInfo.freeInfo.freeCnt);
              SlotsFacade.dm.SetTotalFree(storeInfo.freeInfo.freeCnt);
              SlotsFacade.mainPanel.showSceneTransition(1);
              SlotsFacade.bottomCmp.DoHideWinAction();
              _this2.totalWaterDropLabel.string = Global.FormatNumToComma(storeInfo.gemCnt);
              SlotsFacade.collect.setCnt(SlotsFacade.dm.energyData.gemCnt);
              _context.next = 12;
              return SlotsFacade.delayTime(3);

             case 12:
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
      close: function close(isAni) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("store_close");
              if (!isAni) {
                _context2.next = 5;
                break;
              }
              cc.tween(_this4.panel).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();
              _context2.next = 5;
              return SlotsFacade.delayTime(.5);

             case 5:
              _this4.bg.active = false;
              _this4.panel.active = false;
              _this4._cbHandler && _this4._cbHandler();

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  RomanticPrincess_StoreItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "580c5JK3LdBl4EEeGACdhzE", "RomanticPrincess_StoreItem");
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
      extra: 3,
      mul_wild: 4,
      roaming: 5
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        state_close: cc.Node,
        state_open: cc.Node,
        costLabel: cc.Label,
        id: 0,
        storeItemCfg: null,
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
        this.storeItemCfg = null;
        this._handler = null;
      },
      start: function start() {
        var _this = this;
        for (var i = 0; i < 2; i++) {
          var stateCloseTitle = cc.find("title/label_".concat(i), this.state_close);
          var stateOpenTitle = cc.find("title/label_".concat(i), this.state_open);
          if (this.storeItemCfg.titleIndex.length > i) {
            stateCloseTitle.active = true;
            stateOpenTitle.active = true;
            stateCloseTitle.getComponent("ImgSwitchCmp").setIndex(this.storeItemCfg.titleIndex[i]);
            stateOpenTitle.getComponent("ImgSwitchCmp").setIndex(this.storeItemCfg.titleIndex[i]);
          } else {
            stateCloseTitle.active = false;
            stateOpenTitle.active = false;
          }
        }
        var selectorsNode = this.state_open.getChildByName("selector_node").children;
        var _iterator = _createForOfIteratorHelper(selectorsNode), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var s = _step.value;
            s.active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var _loop = function _loop(_i) {
          var typeCfg = _this.storeItemCfg.types[_i];
          var selector = cc.find("selector_node/selector".concat(typeCfg.selectorType), _this.state_open);
          selector.active = true;
          selector.data = {
            storeType: typeCfg.type,
            selectorType: typeCfg.selectorType,
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
        for (var _i = 0; _i < this.storeItemCfg.types.length; _i++) _loop(_i);
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
        this.storeItemCfg = storeItemCfg;
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
            var _iterator2 = _createForOfIteratorHelper(children), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var c = _step2.value;
                c.active = data.info[data.currSelectIndex].includes(parseInt(c.name));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            break;

           case SelectorType.extra:
            var diamonds = selector.getChildByName("label").children;
            var _iterator3 = _createForOfIteratorHelper(diamonds), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var d = _step3.value;
                d.active = data.info[data.currSelectIndex].includes(parseInt(d.name));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            break;

           case SelectorType.mul_wild:
           case SelectorType.roaming:
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
        var keyArr = [];
        for (var i = 0; i < this._activeSelector.length; i++) {
          var data = this._activeSelector[i].data;
          keyArr.push(data.info[data.currSelectIndex]);
        }
        return this.storeItemCfg.data[keyArr.join("-")];
      },
      setCost: function setCost(val) {
        this.costLabel.string = val.toString();
      }
    });
    cc._RF.pop();
  }, {} ],
  RomanticPrincess_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ce99pWZFpAn4QbJH6SCT0/", "RomanticPrincess_Symbol");
    "use strict";
    var RandomSymbols = [];
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        waterDrop: cc.Node,
        label: cc.Label,
        wildAniCount: 1
      },
      onLoad: function onLoad() {
        this.waterDrop = this.node.getChildByName("water_drop");
        this.label = this.node.getChildByName("label").getComponent(cc.Label);
      },
      StartMove: function StartMove() {
        this._super();
        this.wildAniCount = 1;
        this.showLabel();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        data ? this.showLabel(true) : this.showLabel(false);
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbolsBySkip.length);
        var randVal = cfg.randomSymbolsBySkip[randIdx - 1];
        var data = null;
        if (randVal == cfg.bonusId) {
          data = {};
          data.coin = Global.random(1, 10) * SlotsFacade.dm.GetTotalBet();
        }
        this.ShowById(randVal, data);
      },
      showLabel: function showLabel(boo) {
        if (boo && this._data && this._data.coin) {
          this.label.node.active = true;
          this.label.node.scaleX = 1;
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
        this._data && this._data.gemCnt && SlotsFacade.collect.addAppearanceDrop(this._data.gemCnt, this.waterDrop.convertToWorldSpaceAR(cc.v2(0, 0)));
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
      showJpSymbolCoin: function showJpSymbolCoin(coin, delayTime) {
        var id = this.GetShowId();
        if (301 != id && 302 != id) return;
        if (!this._showNode) return;
        this._showNode && (this._showNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
        this._showNode.active = true;
        var nodeSp = this._showNode.getComponent(sp.Skeleton);
        nodeSp.setAnimation(0, "animation2", false);
        var label = this.node.getChildByName("label").getComponent(cc.Label);
        label.node.active = true;
        label.string = Global.convertNumToShort(coin);
        label.node.scaleX = 0;
        delayTime = delayTime || 1.6;
        cc.tween(label.node).delay(delayTime).to(.5, {
          scaleX: 1
        }).start();
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
        spine.setAnimation(0, "animation" + this.wildAniCount, true);
        spine.node.y = SlotsFacade.dm.getGameCfg().symbolSize.height / 2 * (this.wildAniCount - 1);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  RomanticPrincess_WildGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab4f5UlS31H4YODkNoOpaWT", "RomanticPrincess_WildGame");
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
    var StoreTypeCfg = {
      2: "stickyWild",
      3: "randomWild",
      4: "roamingWild",
      5: "removeSymbol",
      6: "extraBonus",
      7: "multBonus"
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        wild_game_title_node: cc.Node,
        wild_node: cc.Node,
        spine_appear: sp.Skeleton,
        spine_symbol: sp.Skeleton,
        _symbols: [],
        _stickyIdxs: [],
        _isEnterWild: false
      },
      onLoad: function onLoad() {
        this.wild_node.active = false;
        this.spine_appear.node.active = false;
        this.spine_symbol.node.active = false;
      },
      showRandomWild: function showRandomWild() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var storeInfo, wildIdxs, _loop, i;
          return regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.slots.showMask();
              _context2.next = 3;
              return SlotsFacade.delayTime(.2);

             case 3:
              _this.wild_node.active = true;
              storeInfo = SlotsFacade.dm.energyData;
              wildIdxs = storeInfo.freeInfo.randomWild.idxs.concat();
              _loop = regeneratorRuntime.mark(function _loop(i) {
                var symbol, appearNode, appearSpine;
                return regeneratorRuntime.wrap(function _loop$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                   case 0:
                    symbol = _this.genAWildSymbol(wildIdxs[i]);
                    symbol.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
                    appearNode = cc.instantiate(_this.spine_appear.node);
                    appearNode.active = true;
                    appearNode.parent = _this.wild_node;
                    appearNode.position = symbol.position;
                    appearSpine = appearNode.getComponent(sp.Skeleton);
                    appearSpine.setAnimation(0, "animation", false);
                    appearSpine.setCompleteListener(function() {
                      appearSpine.setCompleteListener(null);
                      appearNode.removeFromParent(true);
                    });
                    _this._symbols.push(symbol);
                    SlotsFacade.soundMgr.playEffect("symbol_wild");
                    _context.next = 13;
                    return SlotsFacade.delayTime(.5);

                   case 13:
                   case "end":
                    return _context.stop();
                  }
                }, _loop);
              });
              i = 0;

             case 8:
              if (!(i < wildIdxs.length)) {
                _context2.next = 13;
                break;
              }
              return _context2.delegateYield(_loop(i), "t0", 10);

             case 10:
              i++;
              _context2.next = 8;
              break;

             case 13:
              SlotsFacade.slots.hideMask();

             case 14:
             case "end":
              return _context2.stop();
            }
          }, _callee);
        }))();
      },
      _initStickyWild: function _initStickyWild() {
        var energyData = SlotsFacade.dm.energyData;
        if (!energyData.freeInfo || !energyData.freeInfo.stickyWild) return;
        var idxs = energyData.freeInfo.stickyWild;
        this.wild_node.active = true;
        for (var i = 0; i < idxs.length; i++) {
          if (this._stickyIdxs.includes(idxs[i])) continue;
          var symbol = this.genAWildSymbol(idxs[i]);
          symbol.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
          this._symbols.push(symbol);
          this._stickyIdxs.push(idxs[i]);
        }
      },
      _showStickyWild: function _showStickyWild() {
        this.wild_node.active = true;
      },
      _addRoamingWild: function _addRoamingWild() {
        var energyData = SlotsFacade.dm.energyData;
        if (!energyData.freeInfo || !energyData.freeInfo.roamingWild) return;
        var spinData = SlotsFacade.dm.getSpinData();
        if (!spinData) return;
        var cards = SlotsFacade.dm.getSpinData().resultCards;
        var idxs = [];
        for (var i = 0; i < cards.length; i++) SlotsFacade.dm.getGameCfg().wildId == cards[i] && idxs.push(i + 1);
        if (idxs.length < 1) return;
        this.wild_node.active = true;
        for (var _i = 0; _i < idxs.length; _i++) {
          var symbol = this.genAWildSymbol(idxs[_i]);
          symbol.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
          symbol.preIdx = idxs[_i];
          this._symbols.push(symbol);
        }
      },
      _moveRoamingWild: function _moveRoamingWild() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var energyData, roamingWild, _iterator, _step, _loop2, _ret;
          return regeneratorRuntime.wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!(_this2._symbols.length < 1)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");

             case 2:
              energyData = SlotsFacade.dm.energyData;
              if (!(!energyData.freeInfo || !energyData.freeInfo.roamingWild)) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");

             case 5:
              roamingWild = energyData.freeInfo.roamingWild;
              _iterator = _createForOfIteratorHelper(_this2._symbols);
              _context3.prev = 7;
              _loop2 = function _loop2() {
                var s = _step.value;
                var index = roamingWild.preWilds.indexOf(s.preIdx);
                if (-1 == index) {
                  s.removeFromParent(true);
                  return "continue";
                }
                var idx = roamingWild.currWilds[index];
                var spine = s.getComponent(sp.Skeleton);
                var pos = null;
                if (idx > 0) {
                  pos = SlotsFacade.slots.getIdxGlobalPos(idx);
                  pos = _this2.wild_node.convertToNodeSpaceAR(pos);
                } else pos = cc.v2(s.x - 120, s.y);
                var needRemove = false;
                idx < 1 ? needRemove = true : roamingWild.cols.includes(SlotsFacade.slots.transferIdx(idx).col + 1) || (needRemove = true);
                if (needRemove) {
                  spine.setAnimation(0, "animation2", false);
                  spine.setCompleteListener(function() {
                    spine.setCompleteListener(null);
                    spine.node.removeFromParent(true);
                  });
                } else spine.setAnimation(0, "animation", false);
                cc.tween(s).to(1.5, {
                  x: pos.x,
                  y: pos.y
                }).start();
              };
              _iterator.s();

             case 10:
              if ((_step = _iterator.n()).done) {
                _context3.next = 16;
                break;
              }
              _ret = _loop2();
              if (!("continue" === _ret)) {
                _context3.next = 14;
                break;
              }
              return _context3.abrupt("continue", 14);

             case 14:
              _context3.next = 10;
              break;

             case 16:
              _context3.next = 21;
              break;

             case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](7);
              _iterator.e(_context3.t0);

             case 21:
              _context3.prev = 21;
              _iterator.f();
              return _context3.finish(21);

             case 24:
              _context3.next = 26;
              return SlotsFacade.delayTime(3);

             case 26:
             case "end":
              return _context3.stop();
            }
          }, _callee2, null, [ [ 7, 18, 21, 24 ] ]);
        }))();
      },
      _showTitle: function _showTitle() {
        var storeFreeInfo = SlotsFacade.dm.energyData.freeInfo;
        if (!storeFreeInfo) return;
        var storeTypes = [];
        for (var i = 2; i <= 7; i++) {
          var contain = storeFreeInfo.hasOwnProperty(StoreTypeCfg[i.toString()]);
          contain && storeTypes.push(i);
        }
        var StoreItemType = SlotsFacade.dm.getGameCfg().StoreItemType;
        if (storeTypes.length > 0) {
          this.wild_game_title_node.active = true;
          cc.find("store_types1", this.wild_game_title_node).active = 1 == storeTypes.length;
          cc.find("store_types2", this.wild_game_title_node).active = 2 == storeTypes.length;
          cc.find("bg", this.wild_game_title_node).getComponent("ImgSwitchCmp").setIndex(storeTypes.length - 1);
          cc.find("bg/spine", this.wild_game_title_node).getComponent(sp.Skeleton).setAnimation(0, "animation".concat(storeTypes.length), true);
          for (var _i2 = 2; _i2 <= 7; _i2++) {
            var node = cc.find("store_types".concat(storeTypes.length, "/type").concat(_i2), this.wild_game_title_node);
            if (storeTypes.includes(_i2)) {
              node.active = true;
              if (_i2 == StoreItemType.removeSymbol) {
                var childArr = node.children;
                var _iterator2 = _createForOfIteratorHelper(childArr), _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    var n = _step2.value;
                    if ("title" == n.name) continue;
                    n.active = storeFreeInfo.removeSymbol.includes(parseInt(n.name));
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              } else _i2 == StoreItemType.extraBonus && node.getChildByName("title").getComponent("ImgSwitchCmp").setIndex(storeFreeInfo.extraBonus.length - 1);
            } else node.active = false;
          }
        } else this.wild_game_title_node.active = false;
      },
      _hideTile: function _hideTile() {
        this.wild_game_title_node.active = false;
      },
      genAWildSymbol: function genAWildSymbol(idx) {
        var node = cc.instantiate(this.spine_symbol.node);
        node.parent = this.wild_node;
        node.active = true;
        var pos = SlotsFacade.slots.getIdxGlobalPos(idx);
        pos = this.wild_node.convertToNodeSpaceAR(pos);
        node.setPosition(pos);
        return node;
      },
      enterWildGame: function enterWildGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this3._isEnterWild = true;
              _this3._showTitle();
              _this3._initStickyWild();

             case 3:
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
        return storeFreeInfo.hasOwnProperty(StoreTypeCfg[storeType.toString()]);
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
              _this5.hasStoreType(StoreItemType.randWild) || (_this5.hasStoreType(StoreItemType.stickyWild) ? _this5._showStickyWild() : _this5.hasStoreType(StoreItemType.extraBonus) || _this5.hasStoreType(StoreItemType.roamingWilds) && _this5._addRoamingWild());

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
              _context7.next = 21;
              break;

             case 12:
              if (!_this6.hasStoreType(StoreItemType.stickyWild)) {
                _context7.next = 15;
                break;
              }
              _context7.next = 21;
              break;

             case 15:
              if (!_this6.hasStoreType(StoreItemType.extraBonus)) {
                _context7.next = 18;
                break;
              }
              _context7.next = 21;
              break;

             case 18:
              if (!_this6.hasStoreType(StoreItemType.roamingWilds)) {
                _context7.next = 21;
                break;
              }
              _context7.next = 21;
              return _this6._moveRoamingWild();

             case 21:
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
              _context8.next = 25;
              break;

             case 12:
              if (!_this7.hasStoreType(StoreItemType.stickyWild)) {
                _context8.next = 17;
                break;
              }
              _context8.next = 15;
              return _this7.hideWild();

             case 15:
              _context8.next = 25;
              break;

             case 17:
              if (!_this7.hasStoreType(StoreItemType.extraBonus)) {
                _context8.next = 22;
                break;
              }
              _context8.next = 20;
              return _this7.hideWild();

             case 20:
              _context8.next = 25;
              break;

             case 22:
              if (!_this7.hasStoreType(StoreItemType.roamingWilds)) {
                _context8.next = 25;
                break;
              }
              _context8.next = 25;
              return _this7.removeWild();

             case 25:
             case "end":
              return _context8.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "RomanticPrincess_BonusGame", "RomanticPrincess_Cfg", "RomanticPrincess_Character", "RomanticPrincess_Collect", "RomanticPrincess_FlowCtrl", "RomanticPrincess_GameData", "RomanticPrincess_Logic", "RomanticPrincess_MainPanel", "RomanticPrincess_Popup", "RomanticPrincess_PrizePool", "RomanticPrincess_Reel", "RomanticPrincess_Slots", "RomanticPrincess_Sound", "RomanticPrincess_StoreGame", "RomanticPrincess_StoreItem", "RomanticPrincess_Symbol", "RomanticPrincess_WildGame" ]);