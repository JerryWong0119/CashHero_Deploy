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
  PrincessPea_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a3b8IaP/VEJIIkPhsa352g", "PrincessPea_Cfg");
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
          name: "Wild",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        stop_ani: {
          name: "LoveForever_Intro1",
          zIndex: 400
        },
        idle_ani: {
          name: "LoveForever_Loop2",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "",
          zIndex: 300
        },
        stop_ani: {
          name: "XiaoTaoXin_F_Intro",
          zIndex: 400
        },
        idle_ani: {
          name: "XiaoTaoXin_F_Loop2",
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
        win_node: "w9",
        win_ani: {
          name: "L1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "L2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "L3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "L4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w3",
        win_ani: {
          name: "",
          zIndex: 300
        },
        stop_ani: {
          name: "XiaoTaoXin_J_Intro",
          zIndex: 400
        },
        idle_ani: {
          name: "XiaoTaoXin_J_Loop2",
          zIndex: 400
        }
      }), _symbol),
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      freeId: 301,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "PrincessPea_Slots",
        Reels: "PrincessPea_Reel",
        Symbols: "PrincessPea_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 104
      },
      help_prefab: "games/PrincessPea/prefab/LMSlots_Help_prefab",
      helpItems: [ "games/PrincessPea/prefab/LMSlots_Help_item1", "games/PrincessPea/prefab/LMSlots_Help_item2", "games/PrincessPea/prefab/LMSlots_Help_item3" ],
      autoModelDelay: 1,
      randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      randomSymbolsBySkip: [ 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      kuang: "kuang",
      speed: 1800,
      reelStopInter: .3,
      auto_stop_time: 1.2,
      bounce: true,
      normalBgm: "ngbgm",
      AddAntiTime: 2.4,
      reelStateInfo: [ {
        inNormal: true,
        id: [ 3, 301 ],
        mini: 2,
        counts: [ 0, 0, 0, 0, 1 ],
        antiNode: "node_anti",
        path: "games/PrincessPea/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelchip",
        antSound: "reelfast",
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
  PrincessPea_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68c2cjRNdZBEYygA4eEPWB1", "PrincessPea_Character");
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
        spine_role: sp.Skeleton
      },
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.node.active = true;
      },
      onLoad: function onLoad() {},
      start: function start() {},
      collectLove: function collectLove(globalPos) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var p, endPos;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return");

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  PrincessPea_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93c22AAcbpEAYHh2Qn5HOcL", "PrincessPea_Collect");
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
        head: cc.Node,
        tail: cc.Node,
        progressBar: cc.Node,
        bar: cc.Node,
        collect_lock: cc.Node,
        spine_collect_unlock: sp.Skeleton,
        tips: cc.Node,
        stuff_template: cc.Node,
        stuff_particle: cc.Node,
        _isOpen: false,
        _stuffArr: []
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
        this.tail.on(cc.Node.EventType.TOUCH_END, this._onEnterHandler.bind(this), this);
        this.progressBar.on(cc.Node.EventType.TOUCH_END, function() {
          _this2._showTips();
          _this2._isOpen || _this2._openCollect();
        }, this);
      },
      _showTips: function _showTips() {
        var _this3 = this;
        if (this.tips.active) return;
        this.tips.active = true;
        this.tips.opacity = 0;
        cc.tween(this.tips).to(.5, {
          opacity: 255
        }).delay(2).to(.5, {
          opacity: 0
        }).call(function() {
          _this3.tips.active = false;
        }).start();
      },
      _init: function _init() {
        this.setProgress(SlotsFacade.dm.getCollectPercent());
        this.showCollect(true);
        this._updateEnterBtnIcon();
      },
      _onEnterHandler: function _onEnterHandler() {
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        if (SlotsFacade.dm.GetAutoModelTime() > 0) return;
        SlotsFacade.soundMgr.playEffect("click");
        SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
        SlotsFacade.map.enter(function() {
          SlotsFacade.bottomCmp.ShowBtnsByState("idle");
        }, true);
      },
      _openCollect: function _openCollect() {
        if (this._isOpen) return;
        if (SlotsFacade.dm.hasFree()) return;
        if (!SlotsFacade.bottomCmp.GetSpinBtnState()) return;
        var betList = SlotsFacade.dm.GetBetMults();
        var needBet = SlotsFacade.dm.getDeskInfo().needBet;
        if (needBet > betList.length) return;
        SlotsFacade.dm.SetBetIdx(needBet);
        SlotsFacade.bottomCmp.ShowBetCoin();
        var nTotal = cc.vv.gameData.GetTotalBet();
        Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, nTotal);
      },
      collectEnergy: function collectEnergy() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var endPos;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(!_this4._stuffArr || _this4._stuffArr.length < 1)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              SlotsFacade.soundMgr.playEffect("collectFly");
              endPos = _this4.head.position;
              _this4._stuffArr.forEach(function(drop) {
                var bezierPos = cc.v2(endPos.x - 50, drop.y - 300);
                cc.tween(drop).then(cc.bezierTo(.5, [ bezierPos, endPos, endPos ])).call(function() {
                  drop.removeFromParent();
                }).start();
                var stuff = cc.instantiate(_this4.stuff_particle);
                stuff.active = true;
                stuff.parent = _this4.node;
                stuff.position = drop.position;
                cc.tween(stuff).then(cc.bezierTo(.5, [ bezierPos, endPos, endPos ])).call(function() {
                  stuff.removeFromParent();
                }).start();
              });
              _this4._stuffArr = [];
              _context.next = 8;
              return SlotsFacade.delayTime(.5);

             case 8:
              _this4._playHeadSpine();
              _this4.setProgress(SlotsFacade.dm.getCollectPercent());

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _playHeadSpine: function _playHeadSpine() {
        SlotsFacade.soundMgr.playEffect("collectIn");
        var headSpine = this.head.getChildByName("spine").getComponent(sp.Skeleton);
        headSpine.setAnimation(0, "ShouJiSuo_Intro", false);
        headSpine.addAnimation(0, "ShouJiSuo_Loop", true);
      },
      showCollect: function showCollect(isInit) {
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          this.bar.active = true;
          this.collect_lock.active = false;
          if (!isInit && !this._isOpen) {
            SlotsFacade.soundMgr.playEffect("unlock");
            this.spine_collect_unlock.node.active = true;
            this.spine_collect_unlock.setAnimation(0, "JinDuTiaoJieSuo", false);
          }
        } else {
          this.bar.active = false;
          this.collect_lock.active = true;
          if (!isInit && this._isOpen) {
            this.spine_collect_unlock.node.active = true;
            this.spine_collect_unlock.setAnimation(0, "JinDuTiaoJieSuo", false);
          }
        }
        this._isOpen = boo;
      },
      playCollectComplete: function playCollectComplete() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var spine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("collectComplete");
              spine = _this5.tail.getChildByName("spine").getComponent(sp.Skeleton);
              spine.setAnimation(0, "ShouJiPai_2_Intro", false);
              spine.addAnimation(0, "ShouJiPai_2_Loop", true);
              _context2.next = 6;
              return new Promise(function(res) {
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  res();
                });
              });

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      setProgress: function setProgress(percent, needTransform) {
        var w = this.progressBar.width;
        var toX = percent * w - w;
        if (needTransform) {
          var colectEffect = this.bar.getChildByName("spine_bg").getComponent(sp.Skeleton);
          colectEffect.setAnimation(0, "JDT_Intro", false);
          colectEffect.addAnimation(0, "JDT_Loop", true);
          cc.tween(this.bar).to(.5, {
            x: toX
          }).start();
        } else {
          this.bar.x = toX;
          0 == percent && this._updateEnterBtnIcon();
        }
      },
      setEnterEnable: function setEnterEnable(boo) {},
      _updateEnterBtnIcon: function _updateEnterBtnIcon() {},
      addAppearanceDrop: function addAppearanceDrop(globalPos) {
        var drop = cc.instantiate(this.stuff_template);
        drop.active = true;
        drop.parent = this.node;
        drop.position = this.node.convertToNodeSpaceAR(globalPos);
        this._stuffArr.push(drop);
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
  PrincessPea_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc5dfbr6uRPsJly9iOVlYHR", "PrincessPea_FlowCtrl");
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
              _context.next = 8;
              return _this.enterMap(true);

             case 8:
              _context.next = 10;
              return _this.enterPickGame(true);

             case 10:
              SlotsFacade.slots.CanDoNextRound();

             case 11:
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
              _context3.next = 2;
              return SlotsFacade.freeGame.onSpinMsg();

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
          var nWin, nTotal, bonusBaseCoin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this2.collectEnergy();

             case 2:
              _context4.next = 4;
              return SlotsFacade.freeGame.spinEnd();

             case 4:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context4.next = 10;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 10:
              _context4.next = 12;
              return _this2.enterPickGame();

             case 12:
              _context4.next = 14;
              return _this2.enterMap();

             case 14:
              _context4.next = 16;
              return SlotsFacade.delayTime(.5);

             case 16:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context4.next = 33;
                break;
              }
              bonusBaseCoin = SlotsFacade.dm.getSpinData().bonusBaseCoin;
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context4.next = 29;
                break;
              }
              SlotsFacade.soundMgr.playEffect("vo_free");
              SlotsFacade.slots.Backup();
              _context4.next = 23;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), true, bonusBaseCoin);

             case 23:
              _context4.next = 25;
              return SlotsFacade.mainPanel.showSceneTransition(2);

             case 25:
              _context4.next = 27;
              return _this2.enterFreeGame();

             case 27:
              _context4.next = 31;
              break;

             case 29:
              _context4.next = 31;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), false, bonusBaseCoin);

             case 31:
              _context4.next = 44;
              break;

             case 33:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context4.next = 44;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              SlotsFacade.soundMgr.playEffect("fgend");
              _context4.next = 38;
              return SlotsFacade.popup.showWinCoin(SlotsFacade.dm.getFreeWinCoin());

             case 38:
              _context4.next = 40;
              return SlotsFacade.mainPanel.showSceneTransition(2);

             case 40:
              SlotsFacade.freeGame.exit();
              SlotsFacade.slots.Resume();
              _context4.next = 44;
              return _this2.enterNormalGame();

             case 44:
              SlotsFacade.slots.CanDoNextRound();

             case 45:
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
              isReconnect && SlotsFacade.freeGame.reconnect();
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.soundMgr.playFreeBgm();
              total = cc.vv.gameData.GetTotalFree();
              rest = cc.vv.gameData.GetFreeTime();
              SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
              SlotsFacade.dm.updateRandomSymbols();
              SlotsFacade.collect.hide();
              _context5.next = 12;
              return SlotsFacade.delayTime(.5);

             case 12:
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
              SlotsFacade.soundMgr.playBgm("", true);
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = true;
              SlotsFacade.freeGame.exit();
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
      enterMap: function enterMap(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var bonusInfo, winCoin, totalCoin;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (!(SlotsFacade.dm.energyData.state > 0)) {
                _context8.next = 15;
                break;
              }
              if (isReconnect) {
                _context8.next = 4;
                break;
              }
              _context8.next = 4;
              return SlotsFacade.collect.playCollectComplete();

             case 4:
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context8.next = 7;
              return new Promise(function(res) {
                SlotsFacade.map.enter(res);
              });

             case 7:
              bonusInfo = SlotsFacade.dm.energyData.game;
              if (!(bonusInfo && bonusInfo.winCoin)) {
                _context8.next = 15;
                break;
              }
              winCoin = bonusInfo.winCoin;
              SlotsFacade.dm.AddCoin(winCoin);
              totalCoin = winCoin;
              SlotsFacade.dm.getSpinData() && (totalCoin += SlotsFacade.dm.GetGameWin());
              _context8.next = 15;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(winCoin, totalCoin, true, res);
              });

             case 15:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      enterPickGame: function enterPickGame(isReconnect) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var winCoin, totalCoin;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              if (!SlotsFacade.dm.pickBonus) {
                _context9.next = 11;
                break;
              }
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context9.next = 5;
              return new Promise(function(res) {
                SlotsFacade.pickGame.enter(res, isReconnect);
              });

             case 5:
              winCoin = _context9.sent;
              SlotsFacade.dm.AddCoin(winCoin);
              totalCoin = winCoin;
              SlotsFacade.dm.getSpinData() && (totalCoin += SlotsFacade.dm.GetGameWin());
              _context9.next = 11;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(winCoin, totalCoin, true, res);
              });

             case 11:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  PrincessPea_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "effb8B0GHxAJpnX+u/O62Pf", "PrincessPea_FreeGame");
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
    var PickItemCfg = {
      coin: {
        aniIn: "XiaoTaoXin_F_Intro",
        aniShake: "XiaoTaoXin_F_Normal1"
      },
      jackpot4: {
        aniIn: "XiaoTaoXin_F_Grand",
        aniShake: "XiaoTaoXin_H_Normal1"
      }
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        panel: cc.Node,
        mask: cc.Node,
        spine_border: sp.Skeleton,
        symbols_node: cc.Node,
        bonus_reel: cc.Node,
        spine_reel_bg: sp.Skeleton,
        spine_love_forever: sp.Skeleton,
        label_free_coin: cc.Label,
        taoxin_node: cc.Node,
        spine_taoxin: sp.Skeleton,
        spine_collect_effect: sp.Skeleton,
        label_coin: cc.Label,
        label_free_cnt: cc.Label,
        collect_coin_particle: cc.Node,
        collect_love_particle: cc.Node,
        symbol_template: cc.Node,
        _symbolArr: null,
        _data: null
      },
      onLoad: function onLoad() {
        this._resetData();
      },
      _resetData: function _resetData() {
        this._data = {
          isEnter: false,
          bonusCoin: 0,
          freeBaseCoin: 0,
          restFreeCnt: 0
        };
      },
      start: function start() {},
      enter: function enter() {},
      exit: function exit() {
        SlotsFacade.soundMgr.playEffect("reelLightOff");
        this._resetData();
        SlotsFacade.character.show();
        SlotsFacade.collect.show();
        this.panel.active = false;
        this.mask.active = false;
        this.spine_border.node.active = false;
        this.taoxin_node.active = false;
        this.label_coin.node.active = false;
        this.label_coin.string = "";
        this.label_free_cnt.node.active = false;
        this.label_free_cnt.string = "";
        this.spine_reel_bg.node.active = false;
        this.spine_love_forever.node.active = false;
        this.spine_love_forever.node.getChildByName("tip").active = false;
        this.label_free_coin.node.active = false;
      },
      startMove: function startMove() {
        if (!this._data.isEnter) return;
        this.mask.active = true;
        this._updateFreeCnt();
      },
      _updateFreeCnt: function _updateFreeCnt() {
        var total = cc.vv.gameData.GetTotalFree();
        var rest = cc.vv.gameData.GetFreeTime();
        SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
        this._data.restFreeCnt = rest;
        this.label_free_cnt.string = rest.toString();
      },
      onSpinMsg: function onSpinMsg() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!_this._data.isEnter) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              if (!SlotsFacade.dm.GetTotalFree()) {
                _context.next = 5;
                break;
              }
              _this._data.isEnter = true;
              return _context.abrupt("return");

             case 5:
              if (!SlotsFacade.dm.getSpinData().bonusTotalCoin) {
                _context.next = 8;
                break;
              }
              _this._data.isEnter = true;
              return _context.abrupt("return");

             case 8:
              if (!SlotsFacade.dm.getSpinData().bonusGame) {
                _context.next = 11;
                break;
              }
              _this._data.isEnter = true;
              return _context.abrupt("return");

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      genASymbol: function genASymbol(data) {
        var node = cc.instantiate(this.symbol_template);
        node.active = true;
        node.spine = node.getChildByName("spine").getComponent(sp.Skeleton);
        node.label = node.getChildByName("label").getComponent(cc.Label);
        node.label_free = node.getChildByName("label_free").getComponent(cc.Label);
        node.parent = this.symbols_node;
        if (data.coin) {
          node.label.node.active = true;
          node.label.string = Global.convertNumToShort(data.coin);
          node.spine.setAnimation(0, "XiaoTaoXin_F_Loop2", true);
        } else if (data.freeCnt) {
          node.label_free.node.active = true;
          node.label_free.string = data.freeCnt;
          node.spine.setAnimation(0, "XiaoTaoXin_J_Loop2", true);
        }
        var pos = SlotsFacade.slots.getIdxGlobalPos(data.idx);
        pos = this.symbols_node.convertToNodeSpaceAR(pos);
        node.setPosition(pos);
        return node;
      },
      genBonusSymbols: function genBonusSymbols() {
        var spinData = SlotsFacade.dm.getSpinData();
        var bonusInfo = spinData.bonusInfo;
        if (!bonusInfo || bonusInfo.length < 1) return;
        this._symbolArr = [];
        bonusInfo.sort(function(a, b) {
          var colA = (a.idx - 1) % 5;
          var colB = (b.idx - 1) % 5;
          return colA - colB == 0 ? a.idx - b.idx : colA - colB;
        });
        for (var i = 0; i < bonusInfo.length; i++) {
          var symbol = this.genASymbol(bonusInfo[i]);
          this._symbolArr.push(symbol);
        }
      },
      _processBonusCoin: function _processBonusCoin() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var spinData, bonusInfo, endPos, _loop, i;
          return regeneratorRuntime.wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              spinData = SlotsFacade.dm.getSpinData();
              bonusInfo = spinData.bonusInfo;
              if (!(bonusInfo && bonusInfo.length < 1)) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return");

             case 4:
              _this2._enterBonusState();
              _this2.genBonusSymbols();
              _context4.next = 8;
              return SlotsFacade.delayTime(.3);

             case 8:
              _this2.spine_taoxin.setAnimation(0, "DaoTaoXin_N_Loop2", true);
              endPos = _this2.node.convertToNodeSpaceAR(_this2.taoxin_node.convertToWorldSpaceAR(cc.v2(0, 0)));
              _loop = regeneratorRuntime.mark(function _loop(i) {
                var symbol, aniName, startPos, particle;
                return regeneratorRuntime.wrap(function _loop$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    symbol = _this2._symbolArr[i];
                    aniName = "";
                    symbol.label.node.active ? aniName = "XiaoTaoXin_F_Intro" : symbol.label_free.node.active && (aniName = "XiaoTaoXin_J_Intro");
                    symbol.spine.setAnimation(0, aniName, false);
                    SlotsFacade.soundMgr.playEffect("fgChipCollect");
                    startPos = _this2.node.convertToNodeSpaceAR(symbol.convertToWorldSpaceAR(cc.v2(0, 0)));
                    particle = cc.instantiate(_this2.collect_coin_particle);
                    particle.active = true;
                    particle.parent = _this2.node;
                    particle.position = startPos;
                    _context3.next = 12;
                    return new Promise(function(res) {
                      cc.tween(particle).to(.5, {
                        position: endPos
                      }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                           case 0:
                            particle.removeFromParent(true);
                            _context2.next = 3;
                            return _this2.taoxinCollectSymbol(bonusInfo[i]);

                           case 3:
                            res();

                           case 4:
                           case "end":
                            return _context2.stop();
                          }
                        }, _callee2);
                      }))).start();
                    });

                   case 12:
                   case "end":
                    return _context3.stop();
                  }
                }, _loop);
              });
              i = 0;

             case 12:
              if (!(i < _this2._symbolArr.length)) {
                _context4.next = 17;
                break;
              }
              return _context4.delegateYield(_loop(i), "t0", 14);

             case 14:
              i++;
              _context4.next = 12;
              break;

             case 17:
              _context4.next = 19;
              return SlotsFacade.delayTime(1);

             case 19:
              _this2.spine_taoxin.setAnimation(0, "DaoTaoXin_N_Loop", true);

             case 20:
             case "end":
              return _context4.stop();
            }
          }, _callee3);
        }))();
      },
      _processFreeCoin: function _processFreeCoin() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var spinData, bonusInfo, endPos, _loop2, i, _ret;
          return regeneratorRuntime.wrap(function _callee5$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (SlotsFacade.dm.isTriggerFree()) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context7.next = 5;
                break;
              }
              _context7.next = 5;
              return _this3._showBonusReel();

             case 5:
              if ("LoveForever_Loop3" != _this3.spine_love_forever.animation) {
                _this3.spine_love_forever.setAnimation(0, "LoveForever_Intro3", false);
                _this3.spine_love_forever.addAnimation(0, "LoveForever_Loop3", false);
                _this3.spine_love_forever.setCompleteListener(function() {
                  _this3.spine_love_forever.setCompleteListener(null);
                  _this3.spine_love_forever.node.getChildByName("tip").active = true;
                });
              }
              spinData = SlotsFacade.dm.getSpinData();
              bonusInfo = spinData.bonusInfo;
              endPos = _this3.node.convertToNodeSpaceAR(_this3.bonus_reel.convertToWorldSpaceAR(cc.v2(0, 0)));
              _loop2 = regeneratorRuntime.mark(function _loop2(i) {
                var vo, symbol, startPos, cloneSymbol;
                return regeneratorRuntime.wrap(function _loop2$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                   case 0:
                    vo = bonusInfo[i];
                    symbol = _this3._symbolArr[i];
                    if (vo.coin) {
                      _context6.next = 4;
                      break;
                    }
                    return _context6.abrupt("return", "continue");

                   case 4:
                    SlotsFacade.soundMgr.playEffect("fgChipCollect");
                    startPos = _this3.node.convertToNodeSpaceAR(symbol.convertToWorldSpaceAR(cc.v2(0, 0)));
                    cloneSymbol = cc.instantiate(symbol);
                    cloneSymbol.parent = _this3.node;
                    cloneSymbol.position = startPos;
                    _this3._data.freeBaseCoin += vo.coin;
                    _context6.next = 12;
                    return new Promise(function(res) {
                      cc.tween(cloneSymbol).to(.2, {
                        scale: 1.3
                      }).to(.5, {
                        position: endPos,
                        scale: 1
                      }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context5) {
                          while (1) switch (_context5.prev = _context5.next) {
                           case 0:
                            cloneSymbol.removeFromParent(true);
                            _this3.label_free_coin.node.active = true;
                            _this3.label_free_coin.string = Global.convertNumToShort(_this3._data.freeBaseCoin);
                            res();

                           case 4:
                           case "end":
                            return _context5.stop();
                          }
                        }, _callee4);
                      }))).start();
                    });

                   case 12:
                   case "end":
                    return _context6.stop();
                  }
                }, _loop2);
              });
              i = 0;

             case 11:
              if (!(i < _this3._symbolArr.length)) {
                _context7.next = 19;
                break;
              }
              return _context7.delegateYield(_loop2(i), "t0", 13);

             case 13:
              _ret = _context7.t0;
              if (!("continue" === _ret)) {
                _context7.next = 16;
                break;
              }
              return _context7.abrupt("continue", 16);

             case 16:
              i++;
              _context7.next = 11;
              break;

             case 19:
              _this3._updateFreeCnt();

             case 20:
             case "end":
              return _context7.stop();
            }
          }, _callee5);
        }))();
      },
      taoxinCollectSymbol: function taoxinCollectSymbol(data) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var tip;
          return regeneratorRuntime.wrap(function _callee6$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _this4.spine_collect_effect.node.active = true;
              _this4.spine_collect_effect.setAnimation(0, "DaoTaoXin_Intro", false);
              _this4.spine_collect_effect.setCompleteListener(function() {
                _this4.spine_collect_effect.setCompleteListener(null);
                _this4.spine_collect_effect.node.active = false;
              });
              _this4._data.bonusCoin += data.coin || 0;
              _this4._data.restFreeCnt += data.freeCnt || 0;
              if (data.coin) {
                _this4.label_coin.node.active = true;
                _this4.label_coin.string = Global.convertNumToShort(_this4._data.bonusCoin);
              } else if (data.freeCnt) {
                _this4.label_free_cnt.node.active = true;
                _this4.label_free_cnt.string = _this4._data.restFreeCnt.toString();
                tip = _this4.label_free_cnt.node.getChildByName("tip").getComponent("ImgSwitchCmp");
                tip.setIndex(_this4._data.restFreeCnt > 1 ? 0 : 1);
              }
              _context8.next = 8;
              return SlotsFacade.delayTime(.2);

             case 8:
             case "end":
              return _context8.stop();
            }
          }, _callee6);
        }))();
      },
      _enterBonusState: function _enterBonusState() {
        SlotsFacade.soundMgr.playEffect("reelLightOn");
        this.panel.active = true;
        SlotsFacade.character.hide();
        SlotsFacade.collect.hide();
        this.spine_border.node.active = true;
        this.taoxin_node.active = true;
        this.mask.active = true;
      },
      _showBonusReel: function _showBonusReel(isReconnect) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var scatterIdx, endPos;
          return regeneratorRuntime.wrap(function _callee7$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              isReconnect = isReconnect || false;
              if (!(!SlotsFacade.dm.isFistTriggerFree() && !isReconnect)) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return");

             case 3:
              SlotsFacade.soundMgr.playEffect("LfExpand");
              _this5.spine_reel_bg.node.active = true;
              _this5.spine_love_forever.node.active = true;
              _this5.spine_love_forever.setAnimation(0, "LoveForever_Loop2", true);
              scatterIdx = SlotsFacade.dm.getScatterIdx();
              if (!scatterIdx) {
                _context9.next = 17;
                break;
              }
              _this5.spine_love_forever.node.opacity = 128;
              endPos = _this5.bonus_reel.convertToNodeSpaceAR(SlotsFacade.slots.getIdxGlobalPos(scatterIdx));
              _this5.spine_love_forever.node.y = endPos.y;
              cc.tween(_this5.spine_love_forever.node).to(.5, {
                opacity: 255,
                y: 0
              }).start();
              _context9.next = 15;
              return SlotsFacade.delayTime(.6);

             case 15:
              _context9.next = 19;
              break;

             case 17:
              _this5.spine_love_forever.node.opacity = 255;
              _this5.spine_love_forever.node.y = 0;

             case 19:
             case "end":
              return _context9.stop();
            }
          }, _callee7);
        }))();
      },
      _showLoveSymbol: function _showLoveSymbol() {
        var scatterIdx = SlotsFacade.dm.getScatterIdx();
        if (!scatterIdx) return;
        if (SlotsFacade.dm.isFistTriggerFree() || SlotsFacade.dm.GetTotalFree() < 1 && SlotsFacade.dm.getSpinData().bonusInfo && SlotsFacade.dm.getSpinData().bonusInfo.length > 0) {
          this.spine_love_forever.node.active = true;
          this.spine_love_forever.node.y = this.bonus_reel.convertToNodeSpaceAR(SlotsFacade.slots.getIdxGlobalPos(scatterIdx)).y;
          this.spine_love_forever.setAnimation(0, "LoveForever_Loop2", true);
        }
      },
      _collectLoveToCharacter: function _collectLoveToCharacter() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var scatterIdx;
          return regeneratorRuntime.wrap(function _callee8$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              scatterIdx = SlotsFacade.dm.getScatterIdx();
              if (scatterIdx) {
                _context10.next = 3;
                break;
              }
              return _context10.abrupt("return");

             case 3:
              if (!(SlotsFacade.dm.isFistTriggerFree() || SlotsFacade.dm.GetTotalFree() < 1 && SlotsFacade.dm.getSpinData().bonusInfo && SlotsFacade.dm.getSpinData().bonusInfo.length > 0)) {
                _context10.next = 9;
                break;
              }
              _context10.next = 6;
              return SlotsFacade.character.collectLove(SlotsFacade.slots.getIdxGlobalPos(scatterIdx));

             case 6:
              SlotsFacade.soundMgr.playEffect("triggering");
              _context10.next = 9;
              return SlotsFacade.delayTime(2.5);

             case 9:
             case "end":
              return _context10.stop();
            }
          }, _callee8);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              if (_this6._data.isEnter) {
                _context11.next = 2;
                break;
              }
              return _context11.abrupt("return");

             case 2:
              _context11.next = 4;
              return _this6._collectLoveToCharacter();

             case 4:
              _this6._showLoveSymbol();
              _context11.next = 7;
              return _this6._processBonusCoin();

             case 7:
              _context11.next = 9;
              return _this6._processFreeCoin();

             case 9:
              _this6._clearBonusSymbol();
              _this6.mask.active = false;
              SlotsFacade.dm.GetTotalFree() < 1 && _this6.exit();

             case 12:
             case "end":
              return _context11.stop();
            }
          }, _callee9);
        }))();
      },
      _clearBonusSymbol: function _clearBonusSymbol() {
        this._symbolArr = [];
        this.symbols_node.removeAllChildren(true);
      },
      reconnect: function reconnect() {
        this._enterBonusState();
        var deskData = SlotsFacade.dm.getDeskInfo();
        this.label_coin.node.active = true;
        this.label_coin.string = Global.convertNumToShort(deskData.bonusTotalCoin);
        this.label_free_cnt.node.active = true;
        this.label_free_cnt.string = SlotsFacade.dm.GetFreeTime();
        this._showBonusReel(true);
      }
    });
    cc._RF.pop();
  }, {} ],
  PrincessPea_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "085eaSljFNPGqcNn1NYiiP3", "PrincessPea_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        energyData: null,
        pickBonus: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.energyData = this._deskInfo.loveCardInfo;
        this.pickBonus = this._deskInfo.pickBonus;
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
          this.energyData = msg.loveCardInfo;
          this.pickBonus = msg.pickBonus;
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
      getCollectPercent: function getCollectPercent() {
        if (!this.energyData || !this.energyData.progressData) return 0;
        var percent = this.energyData.progressData.totalCnt / this.energyData.progressData.needCnt;
        percent = Math.min(1, percent);
        percent = Math.max(0, percent);
        return percent;
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
        1 == msg.data.rtype ? SlotsFacade.map.onMsg(msg) : 2 == msg.data.rtype ? SlotsFacade.map.onMsg(msg) : 3 == msg.data.rtype && SlotsFacade.pickGame.onMsg(msg);
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
      },
      getScatterIdx: function getScatterIdx() {
        if (!this._gameInfo || !this._gameInfo.resultCards) return 0;
        var index = this._gameInfo.resultCards.indexOf(this.getGameCfg().scatterId);
        if (-1 != index) return index + 1;
        return 0;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  PrincessPea_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "98731wYm3pDgI3eB6G/CgAo", "PrincessPea_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("PrincessPea_MainPanel");
        this.soundMgr = this.addComponent("PrincessPea_Sound");
        this.InitCommComponent();
        this.flowCtrl = this.addComponent("PrincessPea_FlowCtrl");
        this.popup = this.mainPanel.popup_node.getComponent("PrincessPea_Popup");
        this.character = this.mainPanel.character_node.getComponent("PrincessPea_Character");
        this.collect = this.mainPanel.collect_progress.getComponent("PrincessPea_Collect");
        this.freeGame = this.mainPanel.free_game.getComponent("PrincessPea_FreeGame");
        this.pickGame = this.mainPanel.pick_game.getComponent("PrincessPea_PickGame");
        this.map = this.mainPanel.map_game.getComponent("PrincessPea_Map");
        this.prizePool = this.mainPanel.jpNode.getComponent("PrincessPea_PrizePool");
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
  PrincessPea_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce02fQfO51NCr7pvk6qckig", "PrincessPea_MainPanel");
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
        this.jpNode = this.node.getChildByName("LMSlots_PrizePool_1");
        this.top_node = this.node.getChildByName("top_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.popup_node = this.node.getChildByName("popup_node");
        this.bg = this.node.getChildByName("bg");
        this.map_game = this.node.getChildByName("map_game");
        this.slots = this.node.getChildByName("slots");
        this.character_node = this.slots.getChildByName("character");
        this.collect_progress = this.slots.getChildByName("collect_progress");
        this.free_game = this.slots.getChildByName("free_game");
        this.pick_game = this.slots.getChildByName("pick_game");
        this.showBg(0);
      },
      showBg: function showBg(type) {
        type || (type = 0);
        this.bg.getComponent("ImgSwitchCmp").setIndex(type);
      },
      showSceneTransition: function showSceneTransition(type) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var _$2$3$type;
          var aniCfg, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              type = type || 1;
              aniCfg = (_$2$3$type = {}, _defineProperty(_$2$3$type, 1, {
                time: 2.5,
                spineNode: "spine1",
                aniName: "BGGuoChang",
                soundName: "bgTransition"
              }), _defineProperty(_$2$3$type, 2, {
                time: 2.2,
                spineNode: "spine2",
                aniName: "FG_Intro",
                soundName: "fgTransition"
              }), _defineProperty(_$2$3$type, 3, {
                time: 2,
                spineNode: "spine3",
                aniName: "DaJiangYuGao",
                soundName: "transition3"
              }), _$2$3$type)[type];
              SlotsFacade.soundMgr.playEffect(aniCfg.soundName);
              spine = _this.transition_node.getChildByName(aniCfg.spineNode).getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, aniCfg.aniName, false);
              2 == type ? spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.addAnimation(0, "FG_End", false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  spine.node.active = false;
                });
              }) : spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context.next = 9;
              return SlotsFacade.delayTime(aniCfg.time);

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  PrincessPea_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30b09vjk/dFE5cs+lzJAYuq", "PrincessPea_Map");
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
        bgMask: cc.Node,
        panel: cc.Node,
        btnClose: cc.Node,
        label_page: cc.Label,
        label_pick: cc.Label,
        label_jackpot: cc.Label,
        label_multiplier: cc.Label,
        label_total_win: cc.Label,
        label_base_price: cc.Label,
        collect_items_node: cc.Node,
        collect_items: [ cc.Node ],
        pick_result_node: cc.Node,
        pick_results: [ cc.Node ],
        lottery_cards_node: cc.Node,
        lottery_cards: [ cc.Node ],
        _callBack: null,
        _respData: null,
        _canTouchCollectItem: false
      },
      onLoad: function onLoad() {
        var _this = this;
        var _loop = function _loop(i) {
          var item = _this.collect_items[i];
          item.id = i + 1;
          item.bg = item.getChildByName("bg");
          item.back = item.getChildByName("back");
          item.front = item.getChildByName("front");
          item.icon = item.front.getChildByName("icon").getComponent("ImgSwitchCmp");
          item.mask = item.front.getChildByName("mask");
          item.effect = item.getChildByName("effect").getComponent(sp.Skeleton);
          item.on(cc.Node.EventType.TOUCH_END, function() {
            _this._onClickCollectItem(item.id);
          }, _this);
        };
        for (var i = 0; i < this.collect_items.length; i++) _loop(i);
        for (var _i = 0; _i < this.lottery_cards.length; _i++) {
          var item = this.lottery_cards[_i];
          item.id = _i + 1;
          item.back = item.getChildByName("back");
          item.front = item.getChildByName("front").getComponent("ImgSwitchCmp");
          item.little_card_back = item.getChildByName("little_card_back");
          item.spine_effect = item.getChildByName("spine_effect").getComponent(sp.Skeleton);
        }
        for (var _i2 = 0; _i2 < this.pick_results.length; _i2++) {
          var _item = this.pick_results[_i2];
          _item.id = _i2 + 1;
          _item.bg = _item.getChildByName("bg").getComponent("ImgSwitchCmp");
          _item.label = _item.getChildByName("label").getComponent("LabelSwitchCmp");
          _item.effect = _item.getChildByName("effect").getComponent(sp.Skeleton);
        }
        this.btnClose.on("click", function() {
          SlotsFacade.soundMgr.playEffect("button");
          _this.btnClose.active = false;
          _this.exit();
        }, this);
      },
      _onClickCollectItem: function _onClickCollectItem(id) {
        if (!this._canTouchCollectItem) return;
        SlotsFacade.soundMgr.playEffect("pairsPick");
        var bonusData = SlotsFacade.dm.energyData.game;
        if (bonusData.items[id - 1].isOpen) return;
        SlotsFacade.dm.reqSubGame({
          rtype: 2,
          choiceId: id
        });
      },
      _pickCollectItem: function _pickCollectItem() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bonusData, prevIdx, choiceIdx, preItem, currItem, mateType, i, vo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._canTouchCollectItem = false;
              bonusData = _this2._respData.loveCardInfo.game;
              _this2.label_pick.string = bonusData.restStep;
              prevIdx = _this2._respData.result.prevIdx;
              choiceIdx = _this2._respData.result.choiceIdx;
              preItem = prevIdx && _this2.collect_items[prevIdx - 1];
              currItem = _this2.collect_items[choiceIdx - 1];
              mateType = 0;
              prevIdx && bonusData.items[prevIdx - 1].type == bonusData.items[choiceIdx - 1].type && (mateType = bonusData.items[choiceIdx - 1].type);
              SlotsFacade.soundMgr.playEffect("cardTurn");
              cc.tween(currItem).to(.4, {
                scaleX: 0
              }).call(function() {
                currItem.back.active = false;
                currItem.front.active = true;
              }).to(.4, {
                scaleX: 1
              }).start();
              _context.next = 13;
              return SlotsFacade.delayTime(.8);

             case 13:
              if (!mateType) {
                _context.next = 26;
                break;
              }
              SlotsFacade.soundMgr.playEffect("pairsRight");
              _context.next = 17;
              return SlotsFacade.delayTime(.4);

             case 17:
              cc.tween(preItem).to(.2, {
                scale: 1.2
              }).to(.2, {
                scale: 1
              }).start();
              cc.tween(currItem).to(.2, {
                scale: 1.2
              }).to(.2, {
                scale: 1
              }).start();
              _context.next = 21;
              return SlotsFacade.delayTime(.5);

             case 21:
              _this2._setPickResultItem(mateType, true, true);
              _this2.label_total_win.string = Global.FormatNumToComma(bonusData.winCoin);
              _this2.label_multiplier.string = "X" + 5 * bonusData.pairItems.length;
              _context.next = 35;
              break;

             case 26:
              if (!preItem) {
                _context.next = 35;
                break;
              }
              SlotsFacade.soundMgr.playEffect("pairsWrong");
              _context.next = 30;
              return SlotsFacade.delayTime(.4);

             case 30:
              SlotsFacade.soundMgr.playEffect("cardClose");
              cc.tween(preItem).to(.4, {
                scaleX: 0
              }).call(function() {
                preItem.back.active = true;
                preItem.front.active = false;
              }).to(.4, {
                scaleX: 1
              }).start();
              cc.tween(currItem).to(.4, {
                scaleX: 0
              }).call(function() {
                currItem.back.active = true;
                currItem.front.active = false;
              }).to(.4, {
                scaleX: 1
              }).start();
              _context.next = 35;
              return SlotsFacade.delayTime(.8);

             case 35:
              if (!bonusData.isEnd) {
                _context.next = 45;
                break;
              }
              SlotsFacade.soundMgr.playEffect("cardAllturn");
              for (i = 0; i < bonusData.items.length; i++) {
                vo = bonusData.items[i];
                vo.isOpen || function() {
                  var item = _this2.collect_items[i];
                  cc.tween(item).to(.4, {
                    scaleX: 0
                  }).call(function() {
                    item.back.active = false;
                    item.front.active = true;
                    item.mask.active = true;
                  }).to(.4, {
                    scaleX: 1
                  }).start();
                }();
              }
              _context.next = 40;
              return SlotsFacade.delayTime(1.5);

             case 40:
              _context.next = 42;
              return SlotsFacade.popup.showMapGameCoin(bonusData.winCoin, _this2._respData.loveCardInfo.page);

             case 42:
              _this2.exit();
              _context.next = 46;
              break;

             case 45:
              _this2._canTouchCollectItem = true;

             case 46:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _setPickResultItem: function _setPickResultItem(type, boo, ani) {
        var item = this.pick_results[type - 1];
        if (boo) {
          item.bg.setIndex(1);
          item.label.setIndex(1);
          if (ani) {
            SlotsFacade.soundMgr.playEffect("mapMult");
            item.effect.node.active = true;
            item.effect.setAnimation(0, "PuKe_LuoXiaXiao", false);
            item.effect.setCompleteListener(function() {
              item.effect.setCompleteListener(null);
              item.effect.node.active = false;
            });
          }
        } else {
          item.bg.setIndex(0);
          item.label.setIndex(0);
        }
      },
      _showLotteryCards: function _showLotteryCards() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _loop2, i;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("cardOpen");
              _this3.lottery_cards_node.active = true;
              _loop2 = function _loop2(i) {
                var item = _this3.lottery_cards[i];
                item.active = true;
                item.back.active = true;
                item.front.node.active = false;
                item.little_card_back.active = false;
                item.spine_effect.node.active = false;
                cc.tween(item).to(1, {
                  x: (item.width / 2 + 10) * (0 == i ? -1 : 1)
                }).call(function() {
                  item.spine_effect.node.active = true;
                  item.spine_effect.setAnimation(0, "PuKe_Da_Intro", false);
                  item.spine_effect.addAnimation(0, "PuKe_Da_Loop", true);
                }).delay(.2).call(function() {
                  item.on(cc.Node.EventType.TOUCH_END, function() {
                    SlotsFacade.soundMgr.playEffect("cardPick");
                    _this3.lottery_cards.forEach(function(v) {
                      v.off(cc.Node.EventType.TOUCH_END);
                      v != item && (v.spine_effect.node.active = false);
                      console.log(">>", item.id);
                    });
                    SlotsFacade.dm.reqSubGame({
                      rtype: 1,
                      choiceId: item.id
                    });
                  });
                }).start();
              };
              for (i = 0; i < _this3.lottery_cards.length; i++) _loop2(i);

             case 4:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _pickLotteryCards: function _pickLotteryCards() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var id, cnt, cntArr, index, invalidCnt;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              id = _this4._respData.choiceId;
              cnt = _this4._respData.count;
              _context3.next = 4;
              return new Promise(function(res) {
                var item = _this4.lottery_cards[id - 1];
                item.spine_effect.setAnimation(0, "PuKe_LuoXiaDa", false);
                item.spine_effect.setCompleteListener(function() {
                  item.spine_effect.setCompleteListener(null);
                  item.spine_effect.node.active = false;
                  res();
                });
              });

             case 4:
              cntArr = _this4._respData.counts.concat();
              index = cntArr.indexOf(cnt);
              -1 != index && cntArr.splice(index, 1);
              invalidCnt = cntArr[Math.floor(Math.random() * cntArr.length)];
              SlotsFacade.soundMgr.playEffect("cardTurn");
              _context3.next = 11;
              return new Promise(function(res) {
                var _loop3 = function _loop3(i) {
                  var item = _this4.lottery_cards[i];
                  if (item.id == id) {
                    item.zIndex = 10;
                    item.front.setIndex(cnt - 1);
                    item.front.node.color = new cc.Color().fromHEX("#ffffff");
                  } else {
                    item.zIndex = 5;
                    item.front.setIndex(invalidCnt - 1);
                    item.front.node.color = new cc.Color().fromHEX("#8B8B8B");
                  }
                  var tw = cc.tween(item).to(.5, {
                    scaleX: 0
                  }).call(function() {
                    item.front.node.active = true;
                    item.back.active = false;
                  }).to(.5, {
                    scaleX: 1
                  }).delay(1).to(.5, {
                    x: 0
                  });
                  item.id == id && (tw = tw.to(.5, {
                    scaleX: 0
                  }).call(function() {
                    item.front.node.active = false;
                    item.little_card_back.active = true;
                  }).to(.5, {
                    scaleX: 1
                  }).call(function() {
                    res();
                  }));
                  tw = tw.call(function() {
                    item.active = false;
                  });
                  tw.start();
                };
                for (var i = 0; i < _this4.lottery_cards.length; i++) _loop3(i);
              });

             case 11:
              _context3.next = 13;
              return new Promise(function(res) {
                var _loop4 = function _loop4(i) {
                  var collectItem = _this4.collect_items[_this4._respData.loveCardInfo.currCnt - cnt + i];
                  var endPos = _this4.panel.convertToNodeSpaceAR(collectItem.convertToWorldSpaceAR(cc.v2(0, 0)));
                  var c = cc.instantiate(_this4.lottery_cards[0].little_card_back);
                  c.active = true;
                  c.parent = _this4.panel;
                  c.position = _this4.lottery_cards_node.position;
                  cc.tween(c).delay(.2 * i).call(function() {
                    SlotsFacade.soundMgr.playEffect("cardFly");
                  }).to(.5, {
                    position: endPos,
                    scale: 1
                  }).call(function() {
                    c.removeFromParent(true);
                    collectItem.back.active = true;
                    collectItem.effect.node.active = true;
                    collectItem.effect.setAnimation(0, "PuKe_Xiao", false);
                    collectItem.effect.setCompleteListener(function() {
                      collectItem.effect.setCompleteListener(null);
                      collectItem.effect.node.active = false;
                    });
                    i == cnt - 1 && res();
                  }).start();
                };
                for (var i = 0; i < cnt; i++) _loop4(i);
              });

             case 13:
              _context3.next = 15;
              return SlotsFacade.delayTime(.5);

             case 15:
              if (!(2 == SlotsFacade.dm.energyData.state)) {
                _context3.next = 20;
                break;
              }
              _context3.next = 18;
              return _this4._processCollectFull();

             case 18:
              _context3.next = 21;
              break;

             case 20:
              _this4.exit();

             case 21:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _processCollectFull: function _processCollectFull() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var bonusData, _loop5, i;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return SlotsFacade.popup.showMapGameStart(_this5._respData.loveCardInfo.page);

             case 2:
              _this5.label_page.node.parent.active = false;
              _this5.label_pick.node.parent.active = true;
              bonusData = _this5._respData.loveCardInfo.game;
              _this5.label_pick.string = bonusData.restStep;
              _loop5 = function _loop5(i) {
                var item = _this5.collect_items[i];
                item.icon.setIndex(bonusData.items[i].type - 1);
                item.effect.node.active = true;
                item.effect.setAnimation(0, "PuKe_Xiao", false);
                item.effect.setCompleteListener(function() {
                  item.effect.setCompleteListener(null);
                  item.effect.node.active = false;
                });
              };
              for (i = 0; i < _this5.collect_items.length; i++) _loop5(i);
              _context4.next = 10;
              return SlotsFacade.delayTime(.4);

             case 10:
              _this5._canTouchCollectItem = true;

             case 11:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onMsg: function onMsg(msg) {
        this._respData = msg.data;
        SlotsFacade.dm.energyData = this._respData.loveCardInfo;
        1 == this._respData.rtype ? this._pickLotteryCards() : 2 == this._respData.rtype && this._pickCollectItem();
      },
      _initView: function _initView() {
        var energyData = SlotsFacade.dm.energyData;
        this.label_base_price.string = Global.FormatNumToComma(energyData.startPrice);
        this.label_jackpot.string = Global.FormatNumToComma(energyData.loveJackpot);
        this.label_multiplier.string = "";
        this.label_total_win.string = "";
        if (2 == energyData.state) {
          var _bonusData = energyData.game;
          this.label_page.node.parent.active = false;
          this.label_pick.node.parent.active = true;
          this.label_pick.string = _bonusData.restStep;
          if (_bonusData.winCoin > 0) {
            this.label_total_win.string = Global.FormatNumToComma(_bonusData.winCoin);
            this.label_multiplier.string = "X" + 5 * _bonusData.pairItems.length;
          }
          for (var i = 0; i < this.collect_items.length; i++) {
            var vo = _bonusData.items[i];
            var item = this.collect_items[i];
            item.back.active = !vo.isOpen;
            item.front.active = vo.isOpen;
            item.icon.setIndex(_bonusData.items[i].type - 1);
          }
          for (var _i3 = 0; _i3 < this.pick_results.length; _i3++) this._setPickResultItem(_i3 + 1, _bonusData.pairItems.includes(_i3 + 1));
          this._canTouchCollectItem = true;
        } else {
          for (var _i4 = 0; _i4 < energyData.currCnt; _i4++) {
            var _item2 = this.collect_items[_i4];
            _item2.back.active = true;
          }
          this.label_page.node.parent.active = true;
          this.label_page.string = energyData.page;
          this.label_pick.node.parent.active = false;
        }
      },
      enter: function enter(callBack, isView) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this6._callBack = callBack;
              _this6.bgMask.active = true;
              _this6.panel.scale = 0;
              _this6.panel.active = true;
              cc.tween(_this6.panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context5.next = 7;
              return SlotsFacade.delayTime(.5);

             case 7:
              _this6._initView();
              if (isView) _this6.btnClose.active = true; else {
                SlotsFacade.soundMgr.playBgm("mapbgm");
                SlotsFacade.collect.setProgress(0);
                1 == SlotsFacade.dm.energyData.state && _this6._showLotteryCards();
              }

             case 9:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _reset: function _reset() {
        var energyData = SlotsFacade.dm.energyData;
        energyData.state = 0;
        energyData.currCnt = 0;
        energyData.game = null;
        this._respData = null;
        this.label_page.node.parent.active = true;
        this.label_page.string = energyData.page >= 5 ? 1 : energyData.page + 1;
        this.label_pick.node.parent.active = false;
        this.label_multiplier.string = "";
        this.label_total_win.string = "";
        for (var i = 0; i < this.collect_items.length; i++) {
          var item = this.collect_items[i];
          item.back.active = false;
          item.front.active = false;
          item.mask.active = false;
        }
        for (var _i5 = 0; _i5 < this.pick_results.length; _i5++) this._setPickResultItem(_i5 + 1, false);
      },
      exit: function exit() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("mapOpenClose");
              _context6.next = 3;
              return new Promise(function(res) {
                cc.tween(_this7.panel).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this7.panel.active = false;
                  _this7.bgMask.active = false;
                  res();
                }).start();
              });

             case 3:
              2 == SlotsFacade.dm.energyData.state && _this7._reset();
              SlotsFacade.soundMgr.playBgm("", true);
              _this7._callBack && _this7._callBack();

             case 6:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  PrincessPea_PickGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95ad1ePXQBPMKWiJTpSJJ5n", "PrincessPea_PickGame");
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
    var PickItemCfg = {
      coin: {
        aniIn: "XiaoTaoXin_F_Intro",
        aniShake: "XiaoTaoXin_F_Normal1"
      },
      jackpot1: {
        aniIn: "XiaoTaoXin_F_Mini",
        aniShake: "XiaoTaoXin_V_Normal1"
      },
      jackpot2: {
        aniIn: "XiaoTaoXin_F_Minor",
        aniShake: "XiaoTaoXin_L_Normal1"
      },
      jackpot3: {
        aniIn: "XiaoTaoXin_F_Major",
        aniShake: "XiaoTaoXin_Z_Normal1"
      },
      jackpot4: {
        aniIn: "XiaoTaoXin_F_Grand",
        aniShake: "XiaoTaoXin_H_Normal1"
      }
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        panel: cc.Node,
        mask: cc.Node,
        bonus_reel: cc.Node,
        symbols_node: cc.Node,
        symbol_template: cc.Node,
        taoxin_node: cc.Node,
        spine_taoxin: sp.Skeleton,
        spine_collect_effect: sp.Skeleton,
        label_coin: cc.Label,
        label_pick_cnt: cc.Label,
        collect_coin_particle: cc.Node,
        _symbolArr: null,
        _data: null,
        _respData: null,
        _callBack: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this._resetData();
        this._symbolArr = [];
        this.scheduleOnce(function() {
          var _loop = function _loop(i) {
            var item = cc.instantiate(_this.symbol_template);
            item.parent = _this.symbols_node;
            item.id = i + 1;
            item.active = true;
            item.spine = item.getChildByName("spine").getComponent(sp.Skeleton);
            item.label = item.getChildByName("label").getComponent(cc.Label);
            item.tips_add_pick = item.getChildByName("tips_add_pick");
            item.mask = item.getChildByName("mask");
            item.position = _this.symbols_node.convertToNodeSpaceAR(SlotsFacade.slots.getIdxGlobalPos(i + 1 + Math.floor(i / 4)));
            item.on(cc.Node.EventType.TOUCH_END, function() {
              _this._onPickItem(item);
            });
            _this._symbolArr.push(item);
          };
          for (var i = 0; i < 16; i++) _loop(i);
        });
      },
      _resetData: function _resetData() {
        this._data = {
          canPick: false,
          bonusCoin: 0
        };
      },
      _onPickItem: function _onPickItem(item) {
        if (!this._data.canPick) return;
        var pickBonus = SlotsFacade.dm.pickBonus;
        var itemData = pickBonus.items[item.id - 1];
        if (itemData.isOpen) return;
        this._data.canPick = false;
        SlotsFacade.dm.reqSubGame({
          rtype: 3,
          choiceId: item.id
        });
      },
      _pickItem: function _pickItem() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var choiceId, itemData, item, aniCfg, coinVal, tw, particle, endPos;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              choiceId = _this2._respData.choiceId;
              itemData = _this2._respData.pickBonus.items[choiceId - 1];
              item = _this2._symbolArr[choiceId - 1];
              aniCfg = null;
              coinVal = 0;
              if (itemData.coin) {
                coinVal = itemData.coin;
                aniCfg = PickItemCfg.coin;
                item.label.node.active = true;
                item.label.node.opacity = 0;
                item.label.node.scale = 0;
                item.label.string = Global.convertNumToShort(itemData.coin);
                tw = cc.tween(item.label.node).to(.2, {
                  scale: 1,
                  opacity: 255
                }, {
                  easing: "backOut"
                });
                itemData.repick && (tw = tw.delay(.3).call(function() {
                  SlotsFacade.soundMgr.playEffect("bgPickTrans");
                }).to(.2, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  item.tips_add_pick.active = true;
                  item.tips_add_pick.scale = 0;
                  cc.tween(item.tips_add_pick).to(.2, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).delay(.5).to(.2, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).start();
                }).delay(.9).to(.2, {
                  scale: 1
                }, {
                  easing: "backOut"
                }));
                tw.start();
              } else if (itemData.jackpot) {
                aniCfg = PickItemCfg["jackpot".concat(itemData.jackpot.id)];
                coinVal = itemData.jackpot.value;
              } else console.log("pick game \u6570\u636e\u51fa\u9519");
              item.spine.setAnimation(0, aniCfg.aniIn, false);
              item.spine.addAnimation(0, aniCfg.aniShake, false);
              particle = cc.instantiate(_this2.collect_coin_particle);
              particle.active = true;
              particle.parent = _this2.node;
              particle.position = _this2.node.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.v2(0, 0)));
              endPos = _this2.node.convertToNodeSpaceAR(_this2.taoxin_node.convertToWorldSpaceAR(cc.v2(0, 0)));
              cc.tween(particle).to(.6, {
                position: endPos
              }).call(function() {
                particle.removeFromParent(true);
                _this2.taoxinCollectSymbol({
                  coin: coinVal,
                  pickCnt: itemData.repick ? 1 : 0
                });
              }).start();
              _context.next = 16;
              return SlotsFacade.delayTime(1);

             case 16:
              if (!itemData.jackpot) {
                _context.next = 19;
                break;
              }
              _context.next = 19;
              return SlotsFacade.popup.showWinJpCoin(itemData.jackpot.id, itemData.jackpot.value);

             case 19:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _settlement: function _settlement() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var pickBonus, i, vo, item, aniCfg;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!_this3._respData.pickBonus.isEnd) {
                _context2.next = 14;
                break;
              }
              _context2.next = 3;
              return SlotsFacade.delayTime(1);

             case 3:
              SlotsFacade.soundMgr.playEffect("bgbgmend");
              pickBonus = _this3._respData.pickBonus;
              for (i = 0; i < pickBonus.items.length; i++) {
                vo = pickBonus.items[i];
                item = _this3._symbolArr[i];
                if (vo.isOpen) item.scale = 1.2; else {
                  item.mask.active = true;
                  item.mask.opacity = 0;
                  cc.tween(item.mask).to(.5, {
                    opacity: 512
                  }).start();
                  item.zIndex = 100 + 10 * i;
                  aniCfg = null;
                  if (vo.coin) {
                    aniCfg = PickItemCfg.coin;
                    item.label.string = Global.convertNumToShort(vo.coin);
                    item.label.node.active = true;
                  } else aniCfg = PickItemCfg["jackpot".concat(vo.jackpot.id)];
                  item.spine.setAnimation(0, aniCfg.aniShake, false);
                }
              }
              _context2.next = 8;
              return SlotsFacade.delayTime(1.5);

             case 8:
              SlotsFacade.soundMgr.playEffect("bgend");
              _context2.next = 11;
              return SlotsFacade.popup.showWinCoin(_this3._respData.pickBonus.winCoin);

             case 11:
              _this3.exit();
              _context2.next = 15;
              break;

             case 14:
              _this3._data.canPick = true;

             case 15:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onMsg: function onMsg(msg) {
        this._respData = msg.data;
        SlotsFacade.dm.pickBonus = this._respData.pickBonus;
        this._updateRestCnt();
        this._pickItem();
        this._settlement();
      },
      taoxinCollectSymbol: function taoxinCollectSymbol(data) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var tip;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("chipCollect");
              _this4.spine_collect_effect.node.active = true;
              _this4.spine_collect_effect.setAnimation(0, "DaoTaoXin_Intro", false);
              _this4.spine_collect_effect.setCompleteListener(function() {
                _this4.spine_collect_effect.setCompleteListener(null);
                _this4.spine_collect_effect.node.active = false;
              });
              _this4._data.bonusCoin += data.coin || 0;
              _this4._data.restPickCnt += data.pickCnt || 0;
              if (data.coin) {
                _this4.label_coin.node.active = true;
                _this4.label_coin.string = Global.convertNumToShort(_this4._data.bonusCoin);
              } else if (data.pickCnt) {
                _this4.label_pick_cnt.node.active = true;
                _this4.label_pick_cnt.string = _this4._data.restPickCnt.toString();
                tip = _this4.label_pick_cnt.node.getChildByName("tip").getComponent("ImgSwitchCmp");
                tip.setIndex(_this4._data.restPickCnt > 1 ? 0 : 1);
              }
              _context3.next = 9;
              return SlotsFacade.delayTime(.2);

             case 9:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      _showBonusReel: function _showBonusReel(isReconnect) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var scatterIdx, spineLove, endPos;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              scatterIdx = SlotsFacade.dm.getScatterIdx();
              if (isReconnect) {
                _context4.next = 8;
                break;
              }
              if (!scatterIdx) {
                _context4.next = 5;
                break;
              }
              _context4.next = 5;
              return SlotsFacade.character.collectLove(SlotsFacade.slots.getIdxGlobalPos(scatterIdx));

             case 5:
              SlotsFacade.soundMgr.playEffect("triggering");
              _context4.next = 8;
              return SlotsFacade.delayTime(2.5);

             case 8:
              _this5.bonus_reel.active = true;
              SlotsFacade.soundMgr.playEffect("LfExpand");
              spineLove = _this5.bonus_reel.getChildByName("spine_love_forever");
              spineLove.active = true;
              if (!scatterIdx) {
                _context4.next = 21;
                break;
              }
              spineLove.opacity = 128;
              endPos = _this5.bonus_reel.convertToNodeSpaceAR(SlotsFacade.slots.getIdxGlobalPos(scatterIdx));
              spineLove.y = endPos.y;
              cc.tween(spineLove).to(.5, {
                opacity: 255,
                y: 0
              }).start();
              _context4.next = 19;
              return SlotsFacade.delayTime(.6);

             case 19:
              _context4.next = 23;
              break;

             case 21:
              spineLove.opacity = 255;
              spineLove.y = 0;

             case 23:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _initView: function _initView() {
        var pickBonus = SlotsFacade.dm.pickBonus;
        this.panel.active = true;
        this.taoxin_node.active = true;
        this.mask.active = true;
        var items = pickBonus.items;
        for (var i = 0; i < this._symbolArr.length; i++) {
          var vo = items[i];
          var item = this._symbolArr[i];
          item.zIndex = i;
          item.scale = 1;
          item.label.node.active = false;
          item.tips_add_pick.active = false;
          item.mask.active = false;
          if (vo.isOpen) {
            var aniCfg = null;
            if (vo.coin) {
              item.label.node.active = true;
              item.label.string = Global.convertNumToShort(vo.coin);
              aniCfg = PickItemCfg.coin;
            } else aniCfg = PickItemCfg["jackpot".concat(vo.jackpot.id)];
            item.spine.setAnimation(0, aniCfg.aniShake, false);
          } else item.spine.setAnimation(0, "XiaoTaoXin_F_Loop2", true);
        }
        this.label_coin.node.active = false;
        if (pickBonus.winCoin) {
          this.label_coin.node.active = true;
          this.label_coin.string = Global.convertNumToShort(pickBonus.winCoin);
          this._data.bonusCoin = pickBonus.winCoin;
        }
        this._updateRestCnt();
      },
      _updateRestCnt: function _updateRestCnt() {
        var restCnt = SlotsFacade.dm.pickBonus.spinCnt;
        this.label_pick_cnt.node.active = true;
        this.label_pick_cnt.string = restCnt.toString();
        var tip = this.label_pick_cnt.node.getChildByName("tip").getComponent("ImgSwitchCmp");
        tip.setIndex(restCnt > 1 ? 0 : 1);
      },
      enter: function enter(callBack, isReconnect) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this6._callBack = callBack;
              SlotsFacade.slots.resetAllSymbol();
              _context5.next = 4;
              return _this6._showBonusReel(isReconnect);

             case 4:
              if (isReconnect) {
                _context5.next = 9;
                break;
              }
              _context5.next = 7;
              return SlotsFacade.popup.showPickGameStart();

             case 7:
              _context5.next = 9;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 9:
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.soundMgr.playBgm("bgbgm");
              SlotsFacade.slots.reels_node.active = false;
              _this6._initView();
              SlotsFacade.character.hide();
              SlotsFacade.collect.hide();
              _this6._data.canPick = true;

             case 16:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      exit: function exit() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _context6.next = 2;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 2:
              SlotsFacade.mainPanel.showBg(0);
              SlotsFacade.soundMgr.playBgm("", true);
              _this7._resetData();
              SlotsFacade.character.show();
              SlotsFacade.collect.show();
              _this7.panel.active = false;
              _this7.taoxin_node.active = false;
              _this7.mask.active = false;
              _this7.bonus_reel.active = false;
              SlotsFacade.slots.reels_node.active = true;
              if (_this7._callBack) {
                _this7._callBack(SlotsFacade.dm.pickBonus.winCoin);
                _this7._callBack = null;
              }

             case 13:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  PrincessPea_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4251d+0fjxEAZ4JVd5HjRnr", "PrincessPea_Popup");
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
      showWinFreeCnt: function showWinFreeCnt(cnt, isFirstTrigger, coin) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, labelCnt, labelCoin, okBtn;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("fgbegin");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              labelCnt = panel.getChildByName("label_cnt");
              labelCnt.getComponent(cc.Label).string = cnt.toString();
              labelCoin = panel.getChildByName("label_coin");
              labelCoin.getComponent(cc.Label).string = Global.convertNumToShort(coin);
              okBtn = panel.getChildByName("btn_ok");
              okBtn.active = isFirstTrigger;
              panel.getChildByName("first_tip").active = isFirstTrigger;
              panel.getChildByName("extra_tip").active = !isFirstTrigger;
              _context.next = 16;
              return SlotsFacade.delayTime(.5);

             case 16:
              if (!isFirstTrigger) {
                _context.next = 21;
                break;
              }
              _context.next = 19;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("button");
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 19:
              _context.next = 26;
              break;

             case 21:
              _context.next = 23;
              return SlotsFacade.delayTime(1.5);

             case 23:
              SlotsFacade.soundMgr.playEffect("button");
              _context.next = 26;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this.showBg(false);
                  panel.active = false;
                  res();
                }).start();
              });

             case 26:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinCoin: function showWinCoin(goldNumb) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, label, okBtn;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_coin");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              _context2.next = 10;
              return SlotsFacade.delayTime(.5);

             case 10:
              _context2.next = 12;
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

             case 12:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinJpCoin: function showWinJpCoin(jpType, goldNumb) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, title, label, okBtn;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("JPwin");
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              title = panel.getChildByName("label_jp_type").getComponent("ImgSwitchCmp");
              title.setIndex(jpType - 1);
              label = panel.getChildByName("label");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              _context3.next = 13;
              return SlotsFacade.delayTime(.5);

             case 13:
              _context3.next = 15;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("button");
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this3.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 15:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showPickGameStart: function showPickGameStart() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var panel, okBtn;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bgbegin");
              _this4.showBg(true);
              panel = _this4.node.getChildByName("panel_pick_game_start");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context4.next = 8;
              return SlotsFacade.delayTime(.5);

             case 8:
              okBtn = panel.getChildByName("btn_ok");
              _context4.next = 11;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("button");
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    panel.active = false;
                    _this4.showBg(false);
                    res();
                  }).start();
                };
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 11:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showMapGameStart: function showMapGameStart(page) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var panel, labelPage, okBtn;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              page = page || 1;
              SlotsFacade.soundMgr.playEffect("mapbegin");
              _this5.showBg(true);
              panel = _this5.node.getChildByName("panel_map_start");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              labelPage = panel.getChildByName("label").getComponent(cc.Label);
              labelPage.string = page.toString();
              _context5.next = 11;
              return SlotsFacade.delayTime(.5);

             case 11:
              okBtn = panel.getChildByName("btn_ok");
              _context5.next = 14;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("button");
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    panel.active = false;
                    _this5.showBg(false);
                    res();
                  }).start();
                };
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 14:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showMapGameCoin: function showMapGameCoin(goldNumb, page) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var panel, labelPage, label, okBtn;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              page = page || 1;
              SlotsFacade.soundMgr.playEffect("mapend");
              _this6.showBg(true);
              panel = _this6.node.getChildByName("panel_map_win_coin");
              panel.active = true;
              panel.scale = 0;
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              labelPage = panel.getChildByName("label_page_cnt").getComponent(cc.Label);
              labelPage.string = page.toString();
              label = panel.getChildByName("label_coin");
              label.getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              _context6.next = 14;
              return SlotsFacade.delayTime(.5);

             case 14:
              _context6.next = 16;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("button");
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  cc.tween(panel).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this6.showBg(false);
                    panel.active = false;
                    res();
                  }).start();
                };
                okBtn.on(cc.Node.EventType.TOUCH_END, handler);
              });

             case 16:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  PrincessPea_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08c59+tV8NIpJ9h0hfilejI", "PrincessPea_PrizePool");
    "use strict";
    var JpCfg = {};
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          _this.node.y > cc.winSize.height / 2 && (_this.node.y = cc.winSize.height / 2);
        }, 0);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  PrincessPea_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8288V6yJZIf69NZhXeZ9jo", "PrincessPea_Reel");
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
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                var node = cc.find("node_anti", this.node);
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
          var _node = cc.find("node_anti", this.node);
          if (_node) {
            _node.active = true;
            var spine = _node.getComponent(sp.Skeleton);
            spine.setAnimation(0, "TingPai_Intro", false);
            spine.addAnimation(0, "TingPai_Loop", true);
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      showBonusAni: function showBonusAni(boo) {
        var bonusAni = cc.find("node_bonus", this.node);
        bonusAni.active = boo;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  PrincessPea_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c175xK0IdJT6HiDVU9tDqk", "PrincessPea_Slots");
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
      properties: {
        mask: cc.Node
      },
      onLoad: function onLoad() {
        this._super();
        this.mask = this.node.getChildByName("mask");
        this.reels_node = this.node.getChildByName("reels");
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
        var _this2 = this;
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
        var progressData = SlotsFacade.dm.energyData.progressData;
        progressData && progressData.currIdxs && progressData.currIdxs.forEach(function(idx) {
          var idxInfo = _this2.transferIdx(idx);
          reelResults[idxInfo.col][idxInfo.row].data.hasStuff = true;
        });
        var spinData = SlotsFacade.dm.getSpinData();
        spinData.bonusInfo && spinData.bonusInfo.length > 0 && spinData.bonusInfo.forEach(function(item) {
          var idxInfo = _this2.transferIdx(item.idx);
          item.coin ? reelResults[idxInfo.col][idxInfo.row].data.coin = item.coin : item.freeCnt && (reelResults[idxInfo.col][idxInfo.row].data.freeCnt = item.freeCnt);
        });
        for (var _i = 0; _i < this._reels.length; _i++) {
          var item = this._reels[_i];
          var reelRes = reelResults[_i];
          item.SetResult(reelRes);
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        this._super(cards);
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i2 = 0; _i2 < this._gameInfo.scatterZJLuXian.indexs.length; _i2++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i2];
          allWinIdx[val] = 1;
        }
        var reels = this._reels;
        var reelsLen = reels.length;
        for (var _i3 = 0; _i3 < reelsLen; _i3++) {
          var r = reels[_i3];
          var flags = [ false, false, false, false ];
          for (var j = 0; j < 4; j++) {
            var s = r._symbols[j];
            var _idx = (3 - j) * reelsLen + (_i3 + 1);
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
      updateAllSymbol: function updateAllSymbol() {
        SlotsFacade.dm.updateRandomSymbols();
        var _iterator = _createForOfIteratorHelper(this._reels), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var reel = _step.value;
            var symbols = reel._symbols;
            var _iterator2 = _createForOfIteratorHelper(symbols), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var s = _step2.value;
                s.StartMove();
                s.ShowRandomSymbol();
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
      resetAllSymbol: function resetAllSymbol() {
        var _iterator3 = _createForOfIteratorHelper(this._reels), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var reel = _step3.value;
            var _iterator4 = _createForOfIteratorHelper(reel._symbols), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                var s = _step4.value;
                s.StartMove();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  PrincessPea_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9ac845OkJOZINX12E+oWjv", "PrincessPea_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/PrincessPea/",
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
      playBgm: function playBgm(bgmName, isReplay) {
        if (bgmName) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm(bgmName);
        } else {
          isReplay = isReplay || false;
          Global.SlotsSoundMgr.playNormalBgm(isReplay);
        }
      },
      stopBgm: function stopBgm() {
        Global.SlotsSoundMgr.stopBgm();
      },
      playFreeBgm: function playFreeBgm() {
        this.playBgm("fgbgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  PrincessPea_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0f04w9qhhP3bkb3cjuTZw8", "PrincessPea_Symbol");
    "use strict";
    var RandomSymbols = [];
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        stuff: cc.Node,
        label: cc.Label,
        labelFree: cc.Label
      },
      onLoad: function onLoad() {
        this.stuff = this.node.getChildByName("stuff");
        this.label = this.node.getChildByName("label").getComponent(cc.Label);
        this.labelFree = this.node.getChildByName("label_free").getComponent(cc.Label);
      },
      StartMove: function StartMove() {
        this._super();
        this.showStuff(false);
        this.showLabel();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        if (data) {
          this.showStuff(true);
          this.showLabel(true);
        } else this.showLabel(false);
      },
      showStuff: function showStuff(boo) {
        boo && this._data && this._data.hasStuff ? this.stuff.active = true : this.stuff.active = false;
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
        this.label.node.active = false;
        this.labelFree.node.active = false;
        if (boo && this._data) if (this._data.coin) {
          this.label.node.active = true;
          this.label.node.scaleX = 1;
          this.label.string = Global.convertNumToShort(this._data.coin);
        } else if (this._data.freeCnt) {
          this.labelFree.node.active = true;
          this.labelFree.node.scaleX = 1;
          this.labelFree.string = Global.convertNumToShort(this._data.freeCnt);
        }
      },
      StopMoveDeep: function StopMoveDeep() {
        if (!SlotsFacade.dm.getSpinData()) return;
        var idx = this.GetShowId();
        idx == SlotsFacade.dm.getGameCfg().scatterId && this.playStopAnimation();
      },
      StopMoveEnd: function StopMoveEnd() {
        this.showStuff(false);
        this._data && this._data.hasStuff && SlotsFacade.collect.addAppearanceDrop(this.stuff.convertToWorldSpaceAR(cc.v2(0, 0)));
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "PrincessPea_Cfg", "PrincessPea_Character", "PrincessPea_Collect", "PrincessPea_FlowCtrl", "PrincessPea_FreeGame", "PrincessPea_GameData", "PrincessPea_Logic", "PrincessPea_MainPanel", "PrincessPea_Map", "PrincessPea_PickGame", "PrincessPea_Popup", "PrincessPea_PrizePool", "PrincessPea_Reel", "PrincessPea_Slots", "PrincessPea_Sound", "PrincessPea_Symbol" ]);