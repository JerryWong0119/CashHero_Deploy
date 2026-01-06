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
  TheCentaur_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bbf69zm8xJFvbOI4exwwOBR", "TheCentaur_Cfg");
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
          name: "Wild_Loop",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        trigger_ani: {
          name: "Scatter_Loop",
          zIndex: 400,
          loop: true
        },
        stop_ani: {
          name: "Scatter_Intro",
          zIndex: 400
        }
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
        win_node: ""
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: ""
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: ""
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: ""
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: ""
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: ""
      }), _defineProperty(_symbol, 302, {
        node: "s302",
        win_node: ""
      }), _defineProperty(_symbol, 303, {
        node: "s303",
        win_node: ""
      }), _defineProperty(_symbol, 401, {
        node: "s401",
        win_node: "w4",
        win_ani: {
          name: "H1",
          zIndex: 300
        }
      }), _symbol),
      wildId: 1,
      scatterId: 2,
      bonusId: 401,
      flowerIds: [ 301, 302, 303 ],
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TheCentaur_Slots",
        Reels: "TheCentaur_Reel",
        Symbols: "TheCentaur_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 100
      },
      help_prefab: "games/TheCentaur/prefab/LMSlots_Help_prefab",
      helpItems: [ "games/TheCentaur/prefab/LMSlots_Help_item1", "games/TheCentaur/prefab/LMSlots_Help_item2" ],
      autoModelDelay: 1,
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
      kuang: "kuang",
      speed: 1800,
      reelStopInter: .3,
      auto_stop_time: 1.2,
      bounce: true,
      normalBgm: "ngbgm",
      AddAntiTime: 2.4,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/TheCentaur/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelscatr-1",
        antSound: "reelfast",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheCentaur_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "660629bleRKSJloNxCMnelR", "TheCentaur_Character");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        role: sp.Skeleton
      },
      onLoad: function onLoad() {},
      start: function start() {},
      toNormalState: function toNormalState() {
        this.role.node.active = true;
      },
      toFreeState: function toFreeState() {
        this.role.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  TheCentaur_DiamondCollect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a4aatFTZhB+KSk2qcbV5vA", "TheCentaur_DiamondCollect");
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
        spine_red: sp.Skeleton,
        spine_purple: sp.Skeleton,
        spine_blue: sp.Skeleton,
        spine_path: sp.Skeleton,
        tips_node: cc.Node,
        tip_lock: cc.Node,
        tip_unlock: cc.Node,
        btn_unlock: cc.Node,
        spine_unlock_eff: sp.Skeleton,
        _isOpen: false,
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
        this.updateDiamond();
        this._initListener();
        this.showCollect(true);
      },
      _initListener: function _initListener() {
        var _this = this;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this.updateDiamond();
          _this.showCollect(false);
        }, this);
        this.btn_unlock.on(cc.Node.EventType.TOUCH_END, function() {
          _this._isOpen || _this._openCollect();
        });
      },
      _openCollect: function _openCollect() {
        if (this._isOpen) return;
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        var betList = SlotsFacade.dm.GetBetMults();
        var needBet = SlotsFacade.dm.getDeskInfo().needBet;
        if (needBet > betList.length) return;
        SlotsFacade.dm.SetBetIdx(needBet);
        SlotsFacade.bottomCmp.ShowBetCoin();
        var nTotal = cc.vv.gameData.GetTotalBet();
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, nTotal);
      },
      showCollect: function showCollect(isInit) {
        var _this2 = this;
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          this.tip_unlock.active = true;
          this.tip_lock.active = false;
        } else {
          this.tip_unlock.active = false;
          this.tip_lock.active = true;
        }
        if (!isInit && this._isOpen != boo) {
          SlotsFacade.soundMgr.playEffect("JPunlock");
          this.spine_unlock_eff.node.active = true;
          this.spine_unlock_eff.setAnimation(0, "BetUp1_Intro", false);
          this.spine_unlock_eff.setCompleteListener(function() {
            _this2.spine_unlock_eff.setCompleteListener(null);
            _this2.spine_unlock_eff.node.active = false;
          });
        }
        this._isOpen = boo;
      },
      updateDiamond: function updateDiamond() {
        var info = SlotsFacade.dm.getCurrDiamondInfo();
        this._data.blue = info.blue.freeCnt;
        this._data.purple = info.purple.freeCnt;
        this._data.red = info.red.freeCnt;
        this.red.getChildByName("label").getComponent(cc.Label).string = this._data.red.toString();
        this.purple.getChildByName("label").getComponent(cc.Label).string = this._data.purple.toString();
        this.blue.getChildByName("label").getComponent(cc.Label).string = this._data.blue.toString();
      },
      collectDiamond: function collectDiamond() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var spinData, diamondId, cfgItem, startPos, endPos, diamondSpine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (_this3.node.active) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              spinData = SlotsFacade.dm.getSpinData();
              if (spinData.currDiamondIdx) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");

             case 5:
              diamondId = spinData.resultCards[spinData.currDiamondIdx - 1];
              cfgItem = {
                301: {
                  diamondName: "blue",
                  collect_node: _this3.blue,
                  spine: _this3.spine_blue,
                  animation: "D_blue",
                  count_animation: "D_blue_ad",
                  path_animation: "path_blue"
                },
                302: {
                  diamondName: "purple",
                  collect_node: _this3.purple,
                  spine: _this3.spine_purple,
                  animation: "D_purple",
                  count_animation: "D_purple_ad",
                  path_animation: "path_green"
                },
                303: {
                  diamondName: "red",
                  collect_node: _this3.red,
                  spine: _this3.spine_red,
                  animation: "D_red",
                  count_animation: "D_red_ad",
                  path_animation: "path_red"
                }
              }[diamondId];
              cfgItem || console.log("\u94bb\u77f3\u6570\u636e\u51fa\u9519", spinData.currDiamondIdx);
              _this3._data[cfgItem.diamondName] += 1;
              SlotsFacade.soundMgr.playEffect("diamond");
              startPos = SlotsFacade.slots.getIdxGlobalPos(spinData.currDiamondIdx);
              startPos = _this3.node.convertToNodeSpaceAR(startPos);
              endPos = cfgItem.collect_node.getChildByName("icon_diamond").convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this3.node.convertToNodeSpaceAR(endPos);
              diamondSpine = cfgItem.spine;
              diamondSpine.node.active = true;
              diamondSpine.node.position = startPos;
              diamondSpine.setAnimation(0, cfgItem.animation, false);
              cc.tween(diamondSpine.node).delay(1.8).call(function() {
                cc.tween(_this3.node).delay(.15).call(function() {
                  _this3.spine_path.node.active = true;
                  _this3.spine_path.node.position = startPos;
                  _this3.spine_path.setAnimation(0, cfgItem.path_animation, false);
                }).start();
              }).to(.5, {
                position: endPos
              }, {
                easing: "backIn"
              }).call(function() {
                var numberEff = cfgItem.collect_node.getChildByName("spine_numb_effect").getComponent(sp.Skeleton);
                numberEff.node.active = true;
                numberEff.setAnimation(0, cfgItem.count_animation, false);
                numberEff.setCompleteListener(function() {
                  numberEff.setCompleteListener(null);
                  numberEff.node.active = false;
                  var label = cfgItem.collect_node.getChildByName("label");
                  cc.tween(label).to(.3, {
                    scale: 1.5
                  }).call(function() {
                    label.getComponent(cc.Label).string = _this3._data[cfgItem.diamondName] + "";
                  }).to(.2, {
                    scale: 1
                  }).start();
                });
              }).delay(.5).call(function() {
                diamondSpine.node.active = false;
                _this3.spine_path.node.active = false;
              }).start();
              _context.next = 21;
              return SlotsFacade.delayTime(2.6);

             case 21:
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
        this.updateDiamond();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheCentaur_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fae1s0Y+lM1YzX92IBGVNj", "TheCentaur_FlowCtrl");
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
              _context.next = 2;
              return _this.enterWheel(true);

             case 2:
              rest = cc.vv.gameData.GetFreeTime();
              if (!(rest > 0)) {
                _context.next = 10;
                break;
              }
              nTotal = cc.vv.gameData.GetTotalFreeWin();
              SlotsFacade.bottomCmp.SetWin(nTotal);
              _context.next = 8;
              return _this.enterFreeGame(true);

             case 8:
              _context.next = 12;
              break;

             case 10:
              _context.next = 12;
              return _this.enterNormalGame(true);

             case 12:
              SlotsFacade.slots.CanDoNextRound();

             case 13:
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
              SlotsFacade.freeGame.startMove();

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
              SlotsFacade.slots._gameInfo = msg;
              cards = msg.resultCards;
              SlotsFacade.dm.freeSlotsInfo && (cards = SlotsFacade.dm.freeSlotsInfo.cards);
              SlotsFacade.slots.SetSlotsResult(cards);
              SlotsFacade.slots.SetReelStateInfo(cards);

             case 5:
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
              if (!SlotsFacade.dm.freeSlotsInfo) {
                _context4.next = 5;
                break;
              }
              _context4.next = 3;
              return SlotsFacade.freeGame.spinEnd();

             case 3:
              _context4.next = 15;
              break;

             case 5:
              _context4.next = 7;
              return SlotsFacade.diamondCollect.collectDiamond();

             case 7:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context4.next = 13;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 13:
              _context4.next = 15;
              return _this2.enterWheel();

             case 15:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context4.next = 20;
                break;
              }
              _context4.next = 18;
              return _this2.enterFreeGame();

             case 18:
              _context4.next = 30;
              break;

             case 20:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context4.next = 30;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context4.next = 24;
              return SlotsFacade.popup.showWinFreeGold(SlotsFacade.dm.GetGameTotalFreeWin());

             case 24:
              SlotsFacade.slots.resetAllSymbol();
              _context4.next = 27;
              return SlotsFacade.mainPanel.showSceneTransition(3, SlotsFacade.dm.freeInfo.type);

             case 27:
              SlotsFacade.slots.Resume();
              _context4.next = 30;
              return _this2.enterNormalGame();

             case 30:
              SlotsFacade.slots.CanDoNextRound();

             case 31:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      enterFreeGame: function enterFreeGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var total, rest;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              isReconnect = isReconnect || false;
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.soundMgr.playFreeBgm();
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
              _context5.next = 10;
              return SlotsFacade.freeGame.enter(isReconnect);

             case 10:
              _context5.next = 12;
              return SlotsFacade.delayTime(.5);

             case 12:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      enterNormalGame: function enterNormalGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var nTotal;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              SlotsFacade.bottomCmp.ShowFreeModel(false);
              SlotsFacade.mainPanel.showBg(0);
              Global.SlotsSoundMgr.playNormalBgm(true);
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = true;
              SlotsFacade.slots.toNormalState();
              if (isReconnect) {
                _context6.next = 14;
                break;
              }
              _context6.next = 8;
              return SlotsFacade.freeGame.exit();

             case 8:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context6.next = 12;
                break;
              }
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              _context6.next = 12;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nTotal, nTotal, true, res);
              });

             case 12:
              _context6.next = 16;
              break;

             case 14:
              SlotsFacade.slots.setReels(false);
              SlotsFacade.freeGame.hide();

             case 16:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      enterWheel: function enterWheel(reconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var freeInfo, coin;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              reconnect = reconnect || false;
              freeInfo = SlotsFacade.dm.freeInfo;
              if (!(!freeInfo || 1 != freeInfo.state)) {
                _context7.next = 4;
                break;
              }
              return _context7.abrupt("return");

             case 4:
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              if (reconnect) {
                _context7.next = 9;
                break;
              }
              SlotsFacade.soundMgr.playEffect("triggering");
              _context7.next = 9;
              return SlotsFacade.slots.playTriggerAni(freeInfo.scatterIdxs);

             case 9:
              SlotsFacade.slots.resetAllSymbol();
              _context7.next = 12;
              return new Promise(function(res) {
                SlotsFacade.wheel.open(res);
              });

             case 12:
              coin = _context7.sent;
              if (!coin) {
                _context7.next = 17;
                break;
              }
              SlotsFacade.dm.AddCoin(coin);
              _context7.next = 17;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(coin, coin, true, res);
              });

             case 17:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheCentaur_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9ceaSjlhtDnI8pgEbmYP/o", "TheCentaur_FreeGame");
    "use strict";
    var _SlotsPosCfg;
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
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var SlotsPosCfg = (_SlotsPosCfg = {}, _defineProperty(_SlotsPosCfg, 1, {
      posArr: [ cc.v2(0, 0) ],
      scale: 1
    }), _defineProperty(_SlotsPosCfg, 2, {
      posArr: [ cc.v2(0, 0), cc.v2(0, 330) ],
      scale: .7
    }), _defineProperty(_SlotsPosCfg, 3, {
      posArr: [ cc.v2(-176, 0), cc.v2(176, 0), cc.v2(0, 230) ],
      scale: .5
    }), _defineProperty(_SlotsPosCfg, 4, {
      posArr: [ cc.v2(-176, 0), cc.v2(176, 0), cc.v2(-176, 230), cc.v2(176, 230) ],
      scale: .5
    }), _defineProperty(_SlotsPosCfg, 5, {
      posArr: [ cc.v2(-176, 0), cc.v2(176, 0), cc.v2(-176, 230), cc.v2(176, 230), cc.v2(0, 460) ],
      scale: .5
    }), _defineProperty(_SlotsPosCfg, 6, {
      posArr: [ cc.v2(-176, 0), cc.v2(176, 0), cc.v2(-176, 230), cc.v2(176, 230), cc.v2(-176, 460), cc.v2(176, 460) ],
      scale: .5
    }), _defineProperty(_SlotsPosCfg, 7, {
      posArr: [ cc.v2(-176, 0), cc.v2(176, 0), cc.v2(-176, 230), cc.v2(176, 230), cc.v2(-176, 460), cc.v2(176, 460), cc.v2(0, 690) ],
      scale: .5
    }), _defineProperty(_SlotsPosCfg, 8, {
      posArr: [ cc.v2(-176, 0), cc.v2(176, 0), cc.v2(-176, 230), cc.v2(176, 230), cc.v2(-176, 460), cc.v2(176, 460), cc.v2(-176, 690), cc.v2(176, 690) ],
      scale: .5
    }), _SlotsPosCfg);
    cc.Class({
      extends: cc.Component,
      properties: {
        slot_list: cc.Node,
        free_count: cc.Node,
        collect_node: cc.Node,
        spine_add_slot_effect: sp.Skeleton,
        spine_collect_effect: sp.Skeleton,
        goldLionCnt: cc.Label,
        tips: cc.Node,
        particle: cc.Node,
        _isEnter: false,
        _slotCnt: 2
      },
      onLoad: function onLoad() {},
      show: function show() {
        this.slot_list.opacity = 255;
        this.slot_list.active = true;
        this.free_count.active = true;
        this.collect_node.active = true;
      },
      hide: function hide() {
        this.slot_list.active = false;
        this.free_count.active = false;
        this.collect_node.active = false;
        for (var i = 0; i < 8; i++) {
          var slot = cc.find("slots".concat(i + 1), this.slot_list);
          slot.active = false;
          slot.getChildByName("reels_bg").active = false;
        }
      },
      enter: function enter(isReconnect) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var freeInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!_this._isEnter) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              SlotsFacade.freeGame.hide();
              SlotsFacade.soundMgr.playBgm("fgbgm");
              freeInfo = SlotsFacade.dm.freeInfo;
              _this._isEnter = true;
              _this._slotCnt = freeInfo.slotCnt;
              _this.show();
              _this.showSlot(freeInfo.slotCnt);
              _this.updateCollect(true);
              _this.updateFreeCnt(true);
              SlotsFacade.slots.toFreeState(SlotsPosCfg[freeInfo.slotCnt].scale);
              if (isReconnect) {
                _context.next = 15;
                break;
              }
              _context.next = 15;
              return SlotsFacade.popup.showWinFreeCnt(freeInfo.slotCnt, freeInfo.freeCnt);

             case 15:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exit: function exit() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (_this2._isEnter) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              _this2.hide();
              SlotsFacade.slots.setReels(false);
              _this2._isEnter = false;

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      updateCollect: function updateCollect(updateTips) {
        var _this3 = this;
        updateTips = updateTips || false;
        var freeInfo = SlotsFacade.dm.freeInfo;
        this.goldLionCnt.string = freeInfo.goldLionCnt + "";
        if (updateTips) {
          var slotCntArr = [ 2, 3, 4, 6, 8 ];
          slotCntArr.forEach(function(v) {
            var tip = _this3.tips.getChildByName("tip".concat(v));
            tip && (tip.active = v > _this3._slotCnt);
          });
        }
      },
      updateFreeCnt: function updateFreeCnt(updateUi) {
        updateUi = updateUi || false;
        if (updateUi) {
          var index = SlotsFacade.dm.freeInfo.type - 2;
          var bg = this.free_count.getChildByName("bg").getComponent("ImgSwitchCmp");
          bg.setIndex(index);
          var title = this.free_count.getChildByName("title").getComponent("ImgSwitchCmp");
          title.setIndex(index);
          var labelFont = this.free_count.getChildByName("label").getComponent("LabelSwitchCmp");
          if (5 == SlotsFacade.dm.freeInfo.type) {
            title.node.x = -55;
            bg.node.y = -3;
          } else {
            title.node.x = 0;
            bg.node.y = 0;
          }
        }
        var total = cc.vv.gameData.GetTotalFree();
        var rest = cc.vv.gameData.GetFreeTime();
        var label = this.free_count.getChildByName("label").getComponent(cc.Label);
        label.string = "".concat(total - rest, "/").concat(total);
      },
      showSlot: function showSlot(slotCnt) {
        SlotsFacade.slots.setReels(true, slotCnt);
        for (var i = 0; i < slotCnt; i++) {
          var slot = cc.find("slots".concat(i + 1), this.slot_list);
          slot.active = true;
          slot.getChildByName("reels_bg").active = true;
        }
        var tip = cc.find("tips/add_free_tip", this.collect_node);
        tip.active = slotCnt <= 4;
        var posCfg = SlotsPosCfg[slotCnt];
        if (posCfg) {
          for (var _i = 0; _i < posCfg.posArr.length; _i++) {
            var _slot = cc.find("slots".concat(_i + 1), this.slot_list);
            _slot.position = posCfg.posArr[_i];
            _slot.scale = posCfg.scale;
          }
          SlotsFacade.slots.setTopAniNodeScale(posCfg.scale);
        } else console.log("slot \u6570\u91cf\u5f02\u5e38", slotCnt);
      },
      collect: function collect() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var cfg, freeInfo, freeSlotsInfo, topNode, endPos, _loop, i, _ret;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cfg = SlotsFacade.dm.getGameCfg();
              freeInfo = SlotsFacade.dm.freeInfo;
              freeSlotsInfo = SlotsFacade.dm.freeSlotsInfo;
              topNode = SlotsFacade.mainPanel.top_node;
              if (!(freeSlotsInfo.cards.length < 1)) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");

             case 6:
              SlotsFacade.soundMgr.playEffect("collectgold");
              endPos = _this4.collect_node.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = topNode.convertToNodeSpaceAR(endPos);
              _loop = function _loop(i) {
                var c = freeSlotsInfo.cards[i];
                if (c != cfg.bonusId) return "continue";
                var idx = i + 1;
                var startPos = SlotsFacade.slots.getIdxGlobalPos(idx);
                startPos = topNode.convertToNodeSpaceAR(startPos);
                var p = cc.instantiate(_this4.particle);
                p.active = true;
                p.parent = topNode;
                p.position = startPos;
                p.getComponent(cc.ParticleSystem).resetSystem();
                cc.tween(p).to(.3, {
                  position: endPos
                }).call(function() {
                  p.removeFromParent();
                }).start();
                var symbol = SlotsFacade.slots.GetSymbolByIdx(idx);
                symbol.StartMove();
                symbol.ShowById(4);
              };
              i = 0;

             case 11:
              if (!(i < freeSlotsInfo.cards.length)) {
                _context3.next = 18;
                break;
              }
              _ret = _loop(i);
              if (!("continue" === _ret)) {
                _context3.next = 15;
                break;
              }
              return _context3.abrupt("continue", 15);

             case 15:
              i++;
              _context3.next = 11;
              break;

             case 18:
              _context3.next = 20;
              return SlotsFacade.delayTime(.3);

             case 20:
              _this4.spine_collect_effect.node.active = true;
              _this4.spine_collect_effect.setAnimation(0, "FanKui", false);
              _this4.goldLionCnt.string = freeInfo.goldLionCnt + "";
              _context3.next = 25;
              return SlotsFacade.delayTime(.3);

             case 25:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      addFreeCnt: function addFreeCnt() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var freeSlotsInfo, freeResults, topNode, endPos, total, rest;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              freeSlotsInfo = SlotsFacade.dm.freeSlotsInfo;
              freeResults = freeSlotsInfo.freeResults;
              if (!(freeResults.length < 1)) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return");

             case 4:
              SlotsFacade.soundMgr.playEffect("fgretrigger");
              freeResults.forEach(function(itemVo) {
                var spine = cc.find("slots".concat(itemVo.slotId + 1, "/spine_extra_free_cnt"), _this5.slot_list).getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, "ExtraFG_".concat(itemVo.freeCnt), false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  spine.node.active = false;
                });
              });
              _context4.next = 8;
              return SlotsFacade.delayTime(3);

             case 8:
              SlotsFacade.soundMgr.playEffect("triggering");
              freeResults.forEach(function(itemVo) {
                SlotsFacade.slots.playTriggerAni(itemVo.scatterIdx);
              });
              _context4.next = 12;
              return SlotsFacade.delayTime(1.5);

             case 12:
              topNode = SlotsFacade.mainPanel.top_node;
              endPos = _this5.free_count.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = topNode.convertToNodeSpaceAR(endPos);
              freeResults.forEach(function(itemVo) {
                var startPos = _this5.slot_list.getChildByName("slots".concat(itemVo.slotId + 1)).convertToWorldSpaceAR(cc.v2(0, 0));
                startPos = topNode.convertToNodeSpaceAR(startPos);
                var p = cc.instantiate(_this5.particle);
                p.active = true;
                p.parent = topNode;
                p.position = startPos;
                p.getComponent(cc.ParticleSystem).resetSystem();
                cc.tween(p).to(.3, {
                  position: endPos
                }).call(function() {
                  p.removeFromParent();
                }).start();
              });
              _context4.next = 18;
              return SlotsFacade.delayTime(.3);

             case 18:
              _this5.updateFreeCnt();
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);

             case 22:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      settlementCoin: function settlementCoin() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var freeInfo, freeSlotsInfo, nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              SlotsFacade.slots.ShowWinTrace();
              freeInfo = SlotsFacade.dm.freeInfo;
              freeSlotsInfo = SlotsFacade.dm.freeSlotsInfo;
              nWin = freeSlotsInfo.winCoin;
              nTotal = freeInfo.winCoin;
              _context5.next = 7;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, false, res);
              });

             case 7:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      addSlots: function addSlots() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var freeInfo;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              freeInfo = SlotsFacade.dm.freeInfo;
              if (!(freeInfo.slotCnt == _this6._slotCnt)) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");

             case 3:
              _context6.next = 5;
              return SlotsFacade.mainPanel.showSceneTransition(2);

             case 5:
              SlotsFacade.soundMgr.playEffect("otherfg");
              _this6._slotCnt = freeInfo.slotCnt;
              _this6.showSlot(freeInfo.slotCnt);
              _this6.updateCollect(true);

             case 9:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      startMove: function startMove() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _this7.updateFreeCnt();

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (_this8._isEnter) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");

             case 2:
              _context8.next = 4;
              return _this8.collect();

             case 4:
              _context8.next = 6;
              return _this8.addFreeCnt();

             case 6:
              _context8.next = 8;
              return _this8.settlementCoin();

             case 8:
              _context8.next = 10;
              return _this8.addSlots();

             case 10:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheCentaur_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07682iES3tPYotfzLC1tyVw", "TheCentaur_GameData");
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
      extends: require("LMSlots_GameData_Base"),
      properties: {
        freeInfo: null,
        freeSlotsInfo: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.freeInfo = this._deskInfo.freeGameInfo;
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
          msg.collectInfo && (this.getDeskInfo().collectInfos[this.GetBetIdx() - 1] = msg.collectInfo);
          this.freeInfo = msg.freeGameInfo;
          this.freeSlotsInfo = this._processMapFreeData(msg.freeGameSlots);
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
        return this.isFistTriggerFree();
      },
      isFistTriggerFree: function isFistTriggerFree() {
        return this.hasFree() && this.GetFreeTime() == this.GetTotalFree();
      },
      isLastEndFree: function isLastEndFree() {
        return 0 == this.GetFreeTime() && this.GetTotalFree() > 0;
      },
      getScatterIndexs: function getScatterIndexs() {
        if (this.triggerFreeCnt() > 0) return this._gameInfo.freeResult.freeInfo.scatterIdx.concat();
        return [];
      },
      canCollect: function canCollect() {
        return this.GetBetIdx() >= this.getDeskInfo().needBet;
      },
      getCurrDiamondInfo: function getCurrDiamondInfo() {
        var idx = this.GetBetIdx();
        var collectInfos = this.getDeskInfo().collectInfos;
        var info = collectInfos[idx - 1];
        info || (info = collectInfos[collectInfos.length - 1]);
        return info;
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
        1 == msg.data.rtype && SlotsFacade.wheel.onMsg(msg);
      },
      _processMapFreeData: function _processMapFreeData(freeGameSlots) {
        if (!freeGameSlots) return null;
        var ret = {
          cards: [],
          zjLuXian: [],
          freeResults: [],
          winCoin: 0
        };
        for (var i = 0; i < freeGameSlots.length; i++) {
          var item = freeGameSlots[i];
          ret.winCoin += item.winCoin;
          ret.cards = ret.cards.concat(item.cards);
          var zjLuXian = item.zjLuXian;
          var _iterator = _createForOfIteratorHelper(zjLuXian), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var lx = _step.value;
              this.convertIdx(i, lx.indexs);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          ret.zjLuXian = ret.zjLuXian.concat(zjLuXian);
          var freeResult = item.freeResult;
          if (freeResult && freeResult.freeCnt) {
            this.convertIdx(i, freeResult.scatterIdx);
            ret.freeResults.push({
              slotId: i,
              freeCnt: freeResult.freeCnt,
              scatterIdx: freeResult.scatterIdx
            });
          }
        }
        return ret;
      },
      convertIdx: function convertIdx(slotsIdx, cards) {
        for (var i = 0; i < cards.length; i++) cards[i] = 20 * slotsIdx + cards[i];
      },
      getZjLuXian: function getZjLuXian() {
        return this.freeSlotsInfo ? this.freeSlotsInfo.zjLuXian : this._gameInfo.zjLuXian;
      },
      getCards: function getCards() {
        return this.freeSlotsInfo ? this.freeSlotsInfo.cards : this._gameInfo.resultCards;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  TheCentaur_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0d6ea0zEGxPRJqyl2KBQVDz", "TheCentaur_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("TheCentaur_MainPanel");
        this.soundMgr = this.addComponent("TheCentaur_Sound");
        this.InitCommComponent();
        this.flowCtrl = this.addComponent("TheCentaur_FlowCtrl");
        this.popup = this.mainPanel.popup_node.getComponent("TheCentaur_Popup");
        this.character = this.mainPanel.character_node.getComponent("TheCentaur_Character");
        this.diamondCollect = this.mainPanel.diamond_collect.getComponent("TheCentaur_DiamondCollect");
        this.wheel = this.mainPanel.wheel_node.getComponent("TheCentaur_Wheel");
        this.freeGame = this.mainPanel.slots_free.getComponent("TheCentaur_FreeGame");
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
        SlotsFacade.soundMgr.playEffect("lucky_bee");
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheCentaur_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b680S6HkxMqLKymduKjsSu", "TheCentaur_MainPanel");
    "use strict";
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
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
      properties: {},
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.popup_node = this.node.getChildByName("popup_node");
        this.wheel_node = this.node.getChildByName("wheel_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.top_node = this.node.getChildByName("top_node");
        this.slots = this.node.getChildByName("slots");
        this.slots_free = this.slots.getChildByName("slots_free");
        this.character_node = this.slots.getChildByName("character_node");
        this.diamond_collect = this.slots.getChildByName("diamond_collect");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type || (type = 0);
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
      },
      showSceneTransition: function showSceneTransition(type, diamondType) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var _$2$3$type;
          var aniCfg, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              type = type || 1;
              aniCfg = (_$2$3$type = {}, _defineProperty(_$2$3$type, 1, {
                time: 1.5,
                aniName: "skill",
                soundName: "ngtowheel"
              }), _defineProperty(_$2$3$type, 2, {
                time: .7,
                aniName: "TY_guochang",
                soundName: "wheeltofg"
              }), _defineProperty(_$2$3$type, 3, {
                time: .7,
                aniName: "",
                soundName: "wheeltofg"
              }), _$2$3$type)[type];
              if (aniCfg) {
                _context.next = 5;
                break;
              }
              console.log("#showSceneTransition#\u52a8\u753b\u7c7b\u578b\u9519\u8bef");
              return _context.abrupt("return");

             case 5:
              3 == type && (aniCfg.aniName = "FG_D_".concat([ "blue", "green", "red" ][diamondType - 2]));
              SlotsFacade.soundMgr.playEffect(aniCfg.soundName);
              spine = _this.transition_node.getChildByName("spine".concat(type)).getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, aniCfg.aniName, false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context.next = 13;
              return SlotsFacade.delayTime(aniCfg.time);

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheCentaur_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d33bTNN2ZKxo/tsjhILreu", "TheCentaur_Popup");
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
      showWinFreeCnt: function showWinFreeCnt(slotCnt, freeCnt) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, bg, title, label;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 2;
              bg = panel.getChildByName("bg").getComponent("ImgSwitchCmp");
              bg.setIndex(slotCnt - 1);
              title = panel.getChildByName("title").getComponent("ImgSwitchCmp");
              title.setIndex(slotCnt - 1);
              label = panel.getChildByName("label");
              label.getComponent(cc.Label).string = freeCnt.toString();
              _context.next = 12;
              return new Promise(function(res) {
                cc.tween(panel).to(.6, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).delay(1.5).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this.showBg(false);
                  panel.active = false;
                  res();
                }).start();
              });

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinFreeGold: function showWinFreeGold(goldNumb) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, label, okBtn;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("fgend");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_free_coin");
              panel.active = true;
              panel.scale = 2;
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
              cc.tween(panel).to(.6, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context2.next = 17;
              return SlotsFacade.delayTime(.6);

             case 17:
              _context2.next = 19;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("button");
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this2.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 19:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheCentaur_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb797Kqv05JLKOh0yAept+h", "TheCentaur_PrizePool");
    "use strict";
    var JpCfg = {
      3: {
        nodeName: "prizePool_Grand"
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
        var aniCfg = JpCfg[data.poolIdx + ""];
        var jpNodeName = aniCfg.nodeName;
        if (jpNodeName) {
          var safeNode = cc.find("Canvas/safe_node");
          var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
          if (jpNode) {
            var targetJpNode = cc.find(jpNodeName, jpNode.node.parent);
            if (targetJpNode) {
              var spineEff = targetJpNode.getChildByName("spine_effect").getComponent(sp.Skeleton);
              spineEff.setAnimation(0, "JP_unlock", false);
              spineEff.setCompleteListener(function() {
                spineEff.setCompleteListener(null);
                spineEff.node.active = false;
              });
              if (data.val) {
                targetJpNode.isLock = true;
                SlotsFacade.soundMgr.stopEffectByName("jp_lock");
                SlotsFacade.soundMgr.playEffect("jp_lock");
                targetJpNode.getChildByName("lock_tip").active = true;
              } else {
                targetJpNode.isLock = false;
                SlotsFacade.soundMgr.stopEffectByName("jp_unlock");
                SlotsFacade.soundMgr.playEffect("jp_unlock");
                targetJpNode.getChildByName("lock_tip").active = false;
              }
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  TheCentaur_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5380OhH6pE14eAVzK2+tTM", "TheCentaur_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      playReelStop: function playReelStop() {
        this._super();
        if (!this._reelState || this._reelState.length < 1) {
          var reelIdx = this.GetReelIdx();
          if (reelIdx < 10) {
            var goldId = SlotsFacade.dm.getGameCfg().bonusId;
            var hasGoldLion = false;
            var cards = SlotsFacade.dm.freeSlotsInfo.cards;
            for (var i = 0; i < cards.length; i++) if (i % 5 == reelIdx % 5 && cards[i] == goldId) {
              hasGoldLion = true;
              break;
            }
            hasGoldLion ? SlotsFacade.soundMgr.playEffect("reelgold") : SlotsFacade.soundMgr.playEffect("reelstop");
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheCentaur_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "593a3S1Uj5FgZWBfWIX3j0G", "TheCentaur_Slots");
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
    var MulSlotCfg = {
      maxSlotCnt: 8,
      currSlotCnt: 1,
      unitSlotRowCnt: 4,
      unitSlotColCnt: 5,
      aSlotSymbolCnt: 20
    };
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        allReels: []
      },
      onLoad: function onLoad() {
        this._super();
      },
      createReels: function createReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        var reelIndex = 0;
        for (var i = 0; i < 5; i++) {
          var node = cc.find("reels/reel".concat(i + 1), this.node);
          var scp = node.addComponent(reelCmp);
          scp.Init(reelIndex++, row, this._topAniNode);
          this.allReels.push(scp);
        }
        for (var _i = 0; _i < 8; _i++) for (var j = 0; j < 5; j++) {
          var _node = cc.find("slot_list/slots".concat(_i + 1, "/reel").concat(j + 1), SlotsFacade.mainPanel.slots_free);
          var _scp = _node.addComponent(reelCmp);
          _scp.Init(reelIndex++, row, this._topAniNode);
          this.allReels.push(_scp);
        }
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        SlotsFacade.flowCtrl.startMove();
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this.getCurReels());
        this._stopTime = this.GetStopTime();
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
      getCurReels: function getCurReels() {
        return this._reels;
      },
      setReels: function setReels(isFree, slotCnt) {
        this._topAniNode.removeAllChildren(true);
        SlotsFacade.slots.resetAllSymbol();
        if (isFree) {
          this._reels = this.allReels.slice(5, 5 * (slotCnt + 1));
          MulSlotCfg.currSlotCnt = slotCnt;
        } else {
          this._reels = this.allReels.slice(0, 5);
          MulSlotCfg.currSlotCnt = 1;
        }
      },
      transferIdx: function transferIdx(idx) {
        idx -= 1;
        var col = Math.floor(idx / MulSlotCfg.aSlotSymbolCnt) * MulSlotCfg.unitSlotColCnt + idx % MulSlotCfg.unitSlotColCnt;
        var row = MulSlotCfg.unitSlotRowCnt - 1 - Math.floor(idx % MulSlotCfg.aSlotSymbolCnt / MulSlotCfg.unitSlotColCnt);
        return {
          col: col,
          row: row
        };
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var idxInfo = this.transferIdx(idx);
        return this._reels[idxInfo.col].GetSymbolByRow(idxInfo.row);
      },
      getIdxGlobalPos: function getIdxGlobalPos(idx) {
        var idxInfo = this.transferIdx(idx);
        var reel = this._reels[idxInfo.col];
        var pos = reel.GetSymbolPosByRow(idxInfo.row);
        return reel.node.getChildByName("mask").convertToWorldSpaceAR(pos);
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var reelResults = [];
        for (var i = 0; i < MulSlotCfg.currSlotCnt; i++) {
          var startIndex = i * MulSlotCfg.unitSlotColCnt * MulSlotCfg.unitSlotRowCnt;
          var endIndex = startIndex + MulSlotCfg.unitSlotColCnt * MulSlotCfg.unitSlotRowCnt;
          for (var j = startIndex; j < endIndex; j++) {
            var col = i * MulSlotCfg.unitSlotColCnt + j % MulSlotCfg.unitSlotColCnt;
            var res = {};
            res.sid = cards[j];
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) {
          var item = this._reels[_i2];
          var reelRes = reelResults[_i2];
          item.SetResult(reelRes);
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        if (1 != MulSlotCfg.currSlotCnt) return;
        this._super(cards);
      },
      playTriggerAni: function playTriggerAni(indexs) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              indexs.forEach(function(element) {
                var item = _this.GetSymbolByIdx(element);
                item.playTriggerAnimation();
              });
              _context.next = 3;
              return SlotsFacade.delayTime(1.5);

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      resetAllSymbol: function resetAllSymbol() {
        if (!this._reels) return;
        var _iterator = _createForOfIteratorHelper(this._reels), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var reel = _step.value;
            var _iterator2 = _createForOfIteratorHelper(reel._symbols), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var s = _step2.value;
                s.StartMove();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx % MulSlotCfg.unitSlotColCnt * nIter;
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        var needPlayGoldLionSound = false;
        var zjLuXian = SlotsFacade.dm.getZjLuXian();
        var cards = SlotsFacade.dm.getCards();
        for (var i = 0; i < zjLuXian.length; i++) {
          var item = zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) {
            allWinIdx[item.indexs[idx]] = 1;
            !needPlayGoldLionSound && cards[item.indexs[idx] - 1] && (needPlayGoldLionSound = true);
          }
        }
        var skipBorderAniIdxs = [];
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) {
          for (var _i3 = 0; _i3 < this._gameInfo.scatterZJLuXian.indexs.length; _i3++) {
            var val = this._gameInfo.scatterZJLuXian.indexs[_i3];
            allWinIdx[val] = 1;
          }
          skipBorderAniIdxs = this._gameInfo.scatterZJLuXian.indexs.concat();
        }
        needPlayGoldLionSound && SlotsFacade.dm.freeSlotsInfo && SlotsFacade.soundMgr.playEffect("H1");
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            skipBorderAniIdxs.includes(Number(key)) || symbol.ShowKuang();
          }
        }
      },
      toNormalState: function toNormalState() {
        SlotsFacade.character.toNormalState();
        SlotsFacade.diamondCollect.show();
        SlotsFacade.mainPanel.jpNode.active = true;
        cc.find("reels", this.node).active = true;
        this._topAniNode.scale = 1;
        this.setTopAniNodeScale(1);
      },
      toFreeState: function toFreeState(scale) {
        scale = scale || .5;
        SlotsFacade.character.toFreeState();
        SlotsFacade.diamondCollect.hide();
        SlotsFacade.mainPanel.jpNode.active = false;
        cc.find("reels", this.node).active = false;
        this.setTopAniNodeScale(scale);
      },
      setTopAniNodeScale: function setTopAniNodeScale(scale) {
        this._topAniNode.scale = scale;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheCentaur_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41092MLfS9HkquQbTx1ZlQq", "TheCentaur_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/TheCentaur/",
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
  TheCentaur_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b43fXqjU5DEbFxBkH8i/Gl", "TheCentaur_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      onLoad: function onLoad() {},
      ShowKuang: function ShowKuang(boo) {
        this._id == SlotsFacade.dm.getGameCfg().scatterId && (boo = false);
        this._super(boo);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  TheCentaur_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85b5c58i5dHYbLxNubwiTr1", "TheCentaur_Wheel");
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
        result: cc.Node,
        btn_ok: cc.Node,
        _cbHandler: null,
        _canMove: false,
        _wheelCfg: null,
        _respData: null
      },
      onLoad: function onLoad() {
        this._wheelCfg = {
          baseRound: 10,
          itemsLen: this.items.length,
          itemHeight: this.items[0].height,
          totalHeight: 0
        };
        this._wheelCfg.totalHeight = this._wheelCfg.itemsLen * this._wheelCfg.itemHeight;
      },
      _getRotation: function _getRotation(itemData) {
        var baseRound = this._wheelCfg.baseRound;
        var angle = 360 * baseRound;
        if (5 == itemData.type) {
          var diff = 360 / this._wheelCfg.itemsLen / 4;
          15 == itemData.freeCnt ? angle += diff : angle -= diff;
        }
        return angle;
      },
      _startWheel: function _startWheel() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var resultItemData, rotation, coin;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("wheel");
              resultItemData = _this._respData.freeGameInfo.items[_this._respData.result.id - 1];
              rotation = _this._getRotation(resultItemData);
              _this.proxy.rotation = 0;
              cc.tween(_this.node).delay(3).call(function() {
                _this._setWheelItem(_this.items[3], resultItemData);
              }).start();
              _context2.next = 7;
              return new Promise(function(res) {
                cc.tween(_this.proxy).call(function() {
                  _this._canMove = true;
                }).to(7.5, {
                  rotation: rotation
                }, {
                  easing: "quartInOut"
                }).delay(.1).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      1 == _this._respData.result ? SlotsFacade.soundMgr.playEffect("wheelfgx") : SlotsFacade.soundMgr.playEffect("wheelfg");
                      _this._canMove = false;
                      _context.next = 4;
                      return _this._showResultEffect();

                     case 4:
                      res();

                     case 5:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }))).start();
              });

             case 7:
              _context2.next = 9;
              return SlotsFacade.delayTime(.5);

             case 9:
              _context2.next = 11;
              return _this._processWheelResult();

             case 11:
              coin = _context2.sent;
              _this.close(coin);

             case 13:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _showResultEffect: function _showResultEffect() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var item, oldPos, currPos, spineEffect, itemLabelCnt, itemTip;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              item = _this2.items[3];
              oldPos = item.position;
              currPos = _this2.result.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.v2(0, 0)));
              item.parent = _this2.result;
              item.position = currPos;
              spineEffect = _this2.result.getChildByName("spine_effect_fire").getComponent(sp.Skeleton);
              spineEffect.node.active = true;
              spineEffect.node.position = currPos;
              spineEffect.setAnimation(0, "D_fire", false);
              spineEffect.setCompleteListener(function() {
                spineEffect.setCompleteListener(null);
                spineEffect.node.active = false;
              });
              itemLabelCnt = item.getChildByName("label_cnt");
              itemLabelCnt.active && cc.tween(itemLabelCnt).to(.3, {
                scale: 1.2
              }).delay(1.4).to(.3, {
                scale: 1
              }).start();
              itemTip = null;
              itemTip = 5 == _this2._respData.freeGameInfo.type ? 15 == _this2._respData.freeGameInfo.freeCnt ? cc.find("free/cnt_15", item) : cc.find("free/cnt_8", item) : item.getChildByName("tip");
              _context3.next = 16;
              return new Promise(function(res) {
                cc.tween(itemTip).to(.3, {
                  scale: 1.2
                }).delay(1.4).to(.3, {
                  scale: 1
                }).call(function() {
                  item.parent = _this2.wheel;
                  item.position = oldPos;
                  res();
                }).start();
              });

             case 16:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _processWheelResult: function _processWheelResult() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var result, freeInfo, coin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              result = _this3._respData.result;
              freeInfo = _this3._respData.freeGameInfo;
              if (!(1 == result.type)) {
                _context4.next = 9;
                break;
              }
              coin = freeInfo.items[result.id - 1].coin;
              _context4.next = 6;
              return SlotsFacade.popup.showWinFreeGold(coin);

             case 6:
              return _context4.abrupt("return", freeInfo.winCoin);

             case 9:
              SlotsFacade.dm.SetFreeTime(freeInfo.freeCnt);
              SlotsFacade.dm.SetTotalFree(freeInfo.freeCnt);
              return _context4.abrupt("return", 0);

             case 12:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
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
      _initWheel: function _initWheel() {
        this._canMove = false;
        var itemsCfg = [];
        var hasFree = false;
        SlotsFacade.dm.freeInfo.items.forEach(function(v) {
          5 == v.type ? hasFree = true : itemsCfg.push(v);
        });
        hasFree && itemsCfg.push({
          type: 5
        });
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          this._setWheelItem(item, itemsCfg[i % itemsCfg.length]);
        }
      },
      _setWheelItem: function _setWheelItem(item, itemData) {
        var bg = item.getChildByName("bg").getComponent("ImgSwitchCmp");
        var tip = item.getChildByName("tip").getComponent("ImgSwitchCmp");
        tip.node.active = true;
        var label_cnt = item.getChildByName("label_cnt").getComponent("LabelSwitchCmp");
        label_cnt.node.active = false;
        var label_coin = item.getChildByName("label_coin").getComponent(cc.Label);
        label_coin.node.active = false;
        var free = item.getChildByName("free");
        free.active = false;
        var type = itemData.type;
        bg.setIndex(type - 1);
        tip.setIndex(type - 1);
        if (1 == type) {
          label_coin.node.active = true;
          label_coin.string = "$" + Global.FormatNumToComma(itemData.coin);
        } else if (5 == type) free.active = true; else {
          label_cnt.node.active = true;
          label_cnt.setIndex(type - 2);
          var diamondInfo = SlotsFacade.dm.getCurrDiamondInfo();
          var cnt = [ diamondInfo.blue.freeCnt, diamondInfo.purple.freeCnt, diamondInfo.red.freeCnt ][type - 2];
          label_cnt.setContent(cnt);
        }
      },
      onMsg: function onMsg(msg) {
        this._respData = msg.data;
        SlotsFacade.dm.freeInfo = this._respData.freeGameInfo;
        this._startWheel();
      },
      _showStart: function _showStart() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this4.btn_ok.active = true;
              cc.tween(_this4.btn_ok).to(.8, {
                scale: 1,
                opacity: 255
              }, {
                easing: "backOut"
              }).call(function() {}).start();
              _context5.next = 4;
              return SlotsFacade.delayTime(.8);

             case 4:
              _this4.btn_ok.on(cc.Node.EventType.TOUCH_END, function() {
                SlotsFacade.soundMgr.playEffect("presspin");
                _this4.btn_ok.off(cc.Node.EventType.TOUCH_END);
                SlotsFacade.dm.reqSubGame({
                  rtype: 1
                });
                cc.tween(_this4.btn_ok).to(.5, {
                  scale: .5,
                  opacity: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this4.btn_ok.active = false;
                }).start();
              }, _this4);

             case 5:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      open: function open(cb) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _context6.next = 2;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 2:
              SlotsFacade.soundMgr.playBgm("wheelbgm");
              _this5.panel.active = true;
              _this5._cbHandler = cb;
              _this5._initWheel();
              _this5._showStart();

             case 7:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      close: function close(coin) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (!(coin > 0 || 5 == _this6._respData.freeGameInfo.type)) {
                _context7.next = 5;
                break;
              }
              _context7.next = 3;
              return SlotsFacade.mainPanel.showSceneTransition(2);

             case 3:
              _context7.next = 7;
              break;

             case 5:
              _context7.next = 7;
              return SlotsFacade.mainPanel.showSceneTransition(3, SlotsFacade.dm.freeInfo.type);

             case 7:
              SlotsFacade.soundMgr.stopBgm();
              _this6.panel.active = false;
              _this6._cbHandler && _this6._cbHandler(coin);

             case 10:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "TheCentaur_Cfg", "TheCentaur_Character", "TheCentaur_DiamondCollect", "TheCentaur_FlowCtrl", "TheCentaur_FreeGame", "TheCentaur_GameData", "TheCentaur_Logic", "TheCentaur_MainPanel", "TheCentaur_Popup", "TheCentaur_PrizePool", "TheCentaur_Reel", "TheCentaur_Slots", "TheCentaur_Sound", "TheCentaur_Symbol", "TheCentaur_Wheel" ]);