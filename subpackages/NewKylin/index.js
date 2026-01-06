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
  NewKylin_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23afbfU/ppEJob5PF2dhky6", "NewKylin_Cfg");
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
          name: "Wild_02",
          zIndex: 500
        },
        stop_ani: {
          name: "Wild_01",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "Scatter_02",
          zIndex: 500
        },
        stop_ani: {
          name: "Scatter_01",
          zIndex: 400
        },
        trigger_ani: {
          name: "Scatter_02",
          zIndex: 500
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
        win_node: "w14",
        win_ani: {
          name: "Repeat_down",
          zIndex: 500
        },
        stop_ani: {
          name: "Repeat_down",
          zIndex: 400
        },
        trigger_ani: {
          name: "Repeat_open",
          zIndex: 500
        }
      }), _defineProperty(_symbol, 401, {
        node: "s401",
        win_node: "w401",
        win_ani: {
          name: "H1",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 402, {
        node: "s402",
        win_node: "w402",
        win_ani: {
          name: "H1",
          zIndex: 400
        }
      }), _symbol),
      wildId: 1,
      scatterId: 2,
      bonusId: 14,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "NewKylin_Slots",
        Reels: "NewKylin_Reel",
        Symbols: "NewKylin_symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 90
      },
      helpItems: [ "games/NewKylin/prefab/LMSlots_Help_item1", "games/NewKylin/prefab/LMSlots_Help_item2" ],
      randomSymbols: [ 1, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      speed: 2100,
      reelStopInter: .25,
      auto_stop_time: 1,
      autoModelDelay: 1,
      AddAntiTime: 2,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 0, 1, 0, 1 ],
        antiNode: "node_anti",
        path: "games/NewKylin/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelsctr",
        antSound: "reelfast",
        antSpeed: 2400
      } ],
      normalBgm: "ngbgm"
    };
    Cfg.isScatter = function(id) {
      return 2 == id;
    };
    Cfg.isWild = function(id) {
      return 1 == id;
    };
    Cfg.FreeGameType = {
      Win: 1,
      Spin: 2,
      Prize: 3,
      Wild: 4
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  NewKylin_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a290WFZ3hAVriI7Uqzhzic", "NewKylin_Character");
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
        role: sp.Skeleton
      },
      hide: function hide() {
        this.node.active = false;
      },
      show: function show() {
        this.node.active = true;
      },
      collectWild: function collectWild() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var wildIdxs, endPos, _loop, i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return");

             case 4:
              endPos = SlotsFacade.mainPanel.top_node.convertToNodeSpaceAR(_this.getBallGlobalPos());
              SlotsFacade.soundMgr.playEffect("nmbrfly");
              _loop = function _loop(i) {
                var pos = SlotsFacade.slots.getIdxGlobalPos(wildIdxs[i]);
                var p = cc.instantiate(_this.fly_particle).getComponent(cc.ParticleSystem);
                p.node.active = true;
                p.node.parent = SlotsFacade.mainPanel.top_node;
                p.node.position = p.node.parent.convertToNodeSpaceAR(pos);
                p.resetSystem();
                cc.tween(p.node).to(.5, {
                  position: endPos
                }).call(function() {
                  p.node.removeFromParent();
                }).start();
              };
              for (i = 0; i < wildIdxs.length; i++) _loop(i);
              _context.next = 10;
              return SlotsFacade.delayTime(.5);

             case 10:
              _this.zhuzi_effect.node.active = true;
              _this.zhuzi_effect.setAnimation(0, "zhuzi_collect", false);
              _this.zhuzi_effect.setCompleteListener(function() {
                _this.zhuzi_effect.setCompleteListener(null);
                _this.zhuzi_effect.node.active = false;
              });

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      getBallGlobalPos: function getBallGlobalPos() {
        return this.ball.node.convertToWorldSpaceAR(cc.v2(0, 0));
      }
    });
    cc._RF.pop();
  }, {} ],
  NewKylin_CollectProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be46cD2mNZHEpk6qUxu3lou", "NewKylin_CollectProgress");
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
        lock_btn: cc.Node,
        spine_collect_lock: sp.Skeleton,
        collect_track_particle: [ cc.ParticleSystem ],
        _stepItems: null,
        _isOpen: false
      },
      onLoad: function onLoad() {
        var _this = this;
        this._stepItems = [ [], [], [], [] ];
        for (var i = 0; i < this._stepItems.length; i++) {
          var item = cc.find("type".concat(i + 1), this.node);
          for (var j = 0; j < 4; j++) this._stepItems[i].push(item.getChildByName("item".concat(j + 1)));
        }
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, function() {
          _this.showCollect(false);
        }, this);
        this.lock_btn.on(cc.Node.EventType.TOUCH_END, function() {
          _this._isOpen && _this.node.parent != SlotsFacade.mainPanel.collect_progress_container || _this._openCollect();
        }, this);
        this.updateProgress();
        this.showCollect(true);
      },
      updateProgress: function updateProgress() {
        var collectInfo = SlotsFacade.dm.collectInfo;
        for (var i = 0; i < this._stepItems.length; i++) {
          var count = collectInfo.counts[i];
          for (var j = 0; j < 4; j++) {
            var item = this._stepItems[i][j];
            var isCmp = count > j;
            item.getChildByName("icon").active = isCmp || 3 == j;
            item.getChildByName("effect").active = false;
          }
        }
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
        var boo = SlotsFacade.dm.canCollect();
        if (boo) {
          if (!this._isOpen) if (isInit) this.spine_collect_lock.node.active = false; else {
            SlotsFacade.soundMgr.playEffect("repeatopen");
            this.spine_collect_lock.node.active = true;
            this.spine_collect_lock.setAnimation(0, "Betup_unlock", false);
          }
        } else {
          this.spine_collect_lock.node.active = true;
          if (isInit) this.spine_collect_lock.setAnimation(0, "Betup_lock", false); else if (this._isOpen) {
            SlotsFacade.soundMgr.playEffect("lock");
            this.spine_collect_lock.setAnimation(0, "Betup_lock_idle", false);
            this.spine_collect_lock.addAnimation(0, "Betup_lock", false);
          }
        }
        this._isOpen = boo;
      },
      collectEnergy: function collectEnergy(posStartGlobal) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var collectInfo, freeInfo, count, item, p, endPos, icon, effect;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (SlotsFacade.dm.canCollect()) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              collectInfo = SlotsFacade.dm.collectInfo;
              freeInfo = collectInfo.freeGameInfo;
              count = collectInfo.counts[freeInfo.type - 1];
              item = _this2._stepItems[freeInfo.type - 1][count - 1];
              SlotsFacade.soundMgr.playEffect("wheelfly");
              p = _this2.collect_track_particle[freeInfo.type - 1];
              p.node.position = _this2.node.convertToNodeSpaceAR(posStartGlobal);
              p.node.active = true;
              p.resetSystem();
              endPos = _this2.node.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.v2(0, 0)));
              cc.tween(p.node).to(.5, {
                x: endPos.x,
                y: endPos.y
              }).call(function() {
                p.node.active = false;
              }).start();
              _context.next = 15;
              return SlotsFacade.delayTime(.5);

             case 15:
              icon = item.getChildByName("icon");
              icon.active = true;
              effect = item.getChildByName("effect").getComponent(sp.Skeleton);
              effect.node.active = true;
              if (4 == count) {
                effect.setAnimation(0, "super_fire", false);
                icon.getComponent(sp.Skeleton).setAnimation(0, "super_".concat([ "wins", "spins", "awards", "wilds" ][freeInfo.type - 1], "_1"), false);
              } else effect.setAnimation(0, "S_".concat([ "wins", "spins", "prizes", "wilds" ][freeInfo.type - 1]), false);
              effect.setCompleteListener(function() {
                effect.setCompleteListener(null);
                effect.node.active = false;
              });
              _context.next = 23;
              return SlotsFacade.delayTime(1);

             case 23:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      changeParent: function changeParent(parent) {
        parent = parent || SlotsFacade.mainPanel.collect_progress_container;
        this.node.parent = parent;
      }
    });
    cc._RF.pop();
  }, {} ],
  NewKylin_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fce830Ku79FqpX1MYl9O9d3", "NewKylin_FlowCtrl");
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
              return _this.enterWheelGame();

             case 2:
              rest = cc.vv.gameData.GetFreeTime();
              if (!(rest > 0)) {
                _context.next = 8;
                break;
              }
              nTotal = cc.vv.gameData.GetTotalFreeWin();
              SlotsFacade.bottomCmp.SetWin(nTotal);
              _context.next = 8;
              return _this.enterFreeGame(true);

             case 8:
              _context.next = 10;
              return _this.enterPickGame();

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
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return SlotsFacade.freeGame.spinEnd();

             case 2:
              SlotsFacade.slots.ShowWinTrace();
              _context4.next = 5;
              return _this2.collectEnergy();

             case 5:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context4.next = 10;
                break;
              }
              _context4.next = 8;
              return SlotsFacade.freeGame.settlementRound();

             case 8:
              _context4.next = 14;
              break;

             case 10:
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              _context4.next = 14;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, true, res);
              });

             case 14:
              _context4.next = 16;
              return _this2.enterPickGame();

             case 16:
              _context4.next = 18;
              return _this2.enterWheelGame();

             case 18:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context4.next = 25;
                break;
              }
              SlotsFacade.soundMgr.playEffect("vo_free");
              SlotsFacade.slots.Backup();
              _context4.next = 23;
              return _this2.enterFreeGame();

             case 23:
              _context4.next = 38;
              break;

             case 25:
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context4.next = 38;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context4.next = 29;
              return SlotsFacade.freeGame.settlementTotal();

             case 29:
              _context4.next = 31;
              return SlotsFacade.popup.showWinGold(SlotsFacade.dm.GetGameTotalFreeWin());

             case 31:
              _context4.next = 33;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 33:
              SlotsFacade.slots.Resume();
              _context4.next = 36;
              return SlotsFacade.freeGame.exit();

             case 36:
              _context4.next = 38;
              return _this2.enterNormalGame();

             case 38:
              SlotsFacade.slots.CanDoNextRound();

             case 39:
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
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              SlotsFacade.mainPanel.showBg(1);
              SlotsFacade.soundMgr.playFreeBgm();
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = true;
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
      enterNormalGame: function enterNormalGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var nTotal;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              SlotsFacade.bottomCmp.ShowFreeModel(false);
              SlotsFacade.mainPanel.showBg(0);
              SlotsFacade.soundMgr.playBgm(null, true);
              SlotsFacade.bottomCmp.node.getChildByName("totalBetBg").active = true;
              if (!SlotsFacade.dm.isLastEndFree()) {
                _context6.next = 8;
                break;
              }
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              _context6.next = 8;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nTotal, nTotal, true, res);
              });

             case 8:
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
              if (!(cc.vv.gameData.GetTotalFree() > 0)) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              _context7.next = 4;
              return SlotsFacade.character.collectWild();

             case 4:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      enterPickGame: function enterPickGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var pickData, winCoin, totalWin;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              pickData = SlotsFacade.dm.pickData;
              if (pickData) {
                _context8.next = 3;
                break;
              }
              return _context8.abrupt("return");

             case 3:
              _context8.next = 5;
              return new Promise(function(res) {
                SlotsFacade.pickGame.open(res);
              });

             case 5:
              winCoin = SlotsFacade.dm.pickData.winCoin;
              totalWin = winCoin;
              SlotsFacade.dm.getSpinData() && (totalWin += SlotsFacade.dm.GetGameWin());
              SlotsFacade.dm.AddCoin(winCoin);
              _context8.next = 11;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(winCoin, winCoin, true, res);
              });

             case 11:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      enterWheelGame: function enterWheelGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var collectInfo, scatterIdxs;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              collectInfo = SlotsFacade.dm.collectInfo;
              if (!(1 != collectInfo.state)) {
                _context9.next = 5;
                break;
              }
              return _context9.abrupt("return");

             case 5:
              scatterIdxs = SlotsFacade.dm.getCardsIndexs(SlotsFacade.dm.getGameCfg().scatterId);
              if (!(scatterIdxs.length > 0)) {
                _context9.next = 9;
                break;
              }
              _context9.next = 9;
              return SlotsFacade.slots.playTriggerAni(scatterIdxs);

             case 9:
              _context9.next = 11;
              return new Promise(function(res) {
                SlotsFacade.wheelGame.open(res);
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
  NewKylin_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a412aVH0cBOTLUw8y3RaUEi", "NewKylin_FreeGame");
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
        title: cc.Node,
        dialog_node: cc.Node,
        wild_node: cc.Node,
        spine_glow: sp.Skeleton,
        collect_coin_particle: cc.ParticleSystem,
        spineBottom: sp.Skeleton,
        _isEnter: false,
        _roundItems: null,
        _currFreeType: 1
      },
      onLoad: function onLoad() {
        this._bottomLabel = cc.find("winBg/lbl_winNum_nor", SlotsFacade.bottomCmp.node);
        var bottomPos = this._bottomLabel.convertToWorldSpaceAR(cc.v2(0, 0));
        bottomPos = SlotsFacade.mainPanel.top_node.convertToNodeSpaceAR(bottomPos);
        this.spineBottom.node.position = bottomPos;
        this._symbolTemplate = SlotsFacade.dm.GetPrefabByName(SlotsFacade.dm.getGameCfg().symbolPrefab);
        this._symbolTemplate.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE;
        this.title.active = false;
        this.dialog_node.active = false;
        this._roundItems = [ [], [], [], [] ];
        for (var i = 0; i < 4; i++) for (var j = 0; j < 10; j++) this._roundItems[i].push(cc.find("items".concat(i + 1, "/round").concat(j + 1), this.node));
      },
      _showTitle: function _showTitle(visible, type, isSuper) {
        visible = visible || false;
        this.title.active = visible;
        if (visible) {
          type = type || 1;
          var imgCmp = this.title.getChildByName("label").getComponent("ImgSwitchCmp");
          isSuper ? imgCmp.setIndex(4 + type - 1) : imgCmp.setIndex(type - 1);
        }
      },
      _showRoundInfo: function _showRoundInfo() {
        var cfg = SlotsFacade.dm.getGameCfg();
        var collectInfo = SlotsFacade.dm.collectInfo;
        var freeType = collectInfo.freeGameInfo.type;
        this._currFreeType = freeType;
        this._showTitle(true, freeType, 3 == collectInfo.state);
        var roundNode = this.node.getChildByName("items".concat(freeType));
        roundNode.active = true;
        var items = this._roundItems[freeType - 1];
        var coins = collectInfo.freeGameInfo.coins;
        var useCnt = collectInfo.freeGameInfo.useCnt;
        var mults = collectInfo.freeGameInfo.mults;
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (i >= coins.length) item.active = false; else {
            item.active = true;
            var label = item.getChildByName("label").getComponent(cc.Label);
            coins[i] > 0 ? label.string = Global.FormatNumToComma(coins[i]) : label.string = "";
            if (freeType == cfg.FreeGameType.Win || freeType == cfg.FreeGameType.Spin) {
              var titleLabel = item.getChildByName("title").getComponent("ImgSwitchCmp");
              titleLabel.setIndex(i);
              var roundSpine = item.getChildByName("spine_numb").getComponent(sp.Skeleton);
              useCnt < 1 ? freeType == cfg.FreeGameType.Win ? roundSpine.node.active = i < mults.length - 1 : roundSpine.node.active = i < 4 : roundSpine.node.active = true;
              roundSpine.setSkin("".concat(mults[i], "x"));
              useCnt > i ? roundSpine.setAnimation(0, "Num_grey_jingzhen", false) : roundSpine.setAnimation(0, "Num_jingzhen", false);
            } else {
              var roundLabel = item.getChildByName("round_label").getComponent("ImgSwitchCmp");
              roundLabel.setIndex(i);
              useCnt > i ? roundLabel.showSpriteByName("".concat(i + 1, "spin2")) : roundLabel.showSpriteByName("".concat(i + 1, "spin1"));
              if (freeType == cfg.FreeGameType.Prize) {
                var label_prize = item.getChildByName("label_prize").getComponent(cc.Label);
                label_prize.string = Global.convertNumToShort(collectInfo.freeGameInfo.prizes[i]);
              }
            }
          }
        }
      },
      _showFreeDialog: function _showFreeDialog() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var cfg, collectInfo, freeType, isSuper, panel, title, contentNode, multiple, i, box, label, spine;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cfg = SlotsFacade.dm.getGameCfg();
              collectInfo = SlotsFacade.dm.collectInfo;
              freeType = collectInfo.freeGameInfo.type;
              isSuper = 10 == collectInfo.freeGameInfo.coins.length;
              panel = _this.dialog_node;
              panel.scale = 1;
              panel.active = true;
              title = panel.getChildByName("title").getComponent("ImgSwitchCmp");
              title.setIndex(freeType - 1 + (isSuper ? 4 : 0));
              contentNode = null;
              if (!(1 == freeType || 2 == freeType)) {
                _context3.next = 19;
                break;
              }
              multiple = collectInfo.freeGameInfo.mults[collectInfo.freeGameInfo.mults.length - 1];
              contentNode = panel.getChildByName("content1");
              contentNode.active = true;
              for (i = 0; i < 3; i++) {
                box = contentNode.getChildByName("box".concat(i + 1));
                label = box.getChildByName("multiple").getComponent("ImgSwitchCmp");
                label.node.opacity = 0;
                label.node.active = false;
                spine = box.getChildByName("spine").getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.node.opacity = 255;
                spine.setAnimation(0, "FG_box_intro", false);
                spine.addAnimation(0, "FG_box_idle", true);
              }
              _context3.next = 17;
              return new Promise(function(res) {
                var _loop = function _loop(_i) {
                  var box = contentNode.getChildByName("box".concat(_i + 1));
                  box.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                    var j, item, _label, _spine, flyLabel, spineNum, endPos, _spineNum, _endPos;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                       case 0:
                        SlotsFacade.soundMgr.playEffect("fgpick");
                        box.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "FG_box_click", false);
                        _context2.next = 4;
                        return SlotsFacade.delayTime(.6);

                       case 4:
                        for (j = 0; j < 3; j++) {
                          item = contentNode.getChildByName("box".concat(j + 1));
                          item.off(cc.Node.EventType.TOUCH_END);
                          _label = item.getChildByName("multiple").getComponent("ImgSwitchCmp");
                          _label.node.active = true;
                          _i == j ? _label.showSpriteByName("".concat(multiple, "x1")) : _label.showSpriteByName("".concat([ 6, 8, 10 ][Math.floor(3 * Math.random())], "x2"));
                          cc.tween(_label.node).to(.5, {
                            opacity: 255
                          }).start();
                          _spine = item.getChildByName("spine").getComponent(sp.Skeleton);
                          cc.tween(_spine.node).to(.5, {
                            opacity: 0
                          }).start();
                        }
                        _context2.next = 7;
                        return SlotsFacade.delayTime(.6);

                       case 7:
                        SlotsFacade.soundMgr.playEffect("fgmult");
                        flyLabel = cc.instantiate(box.getChildByName("multiple"));
                        flyLabel.position = panel.convertToNodeSpaceAR(box.convertToWorldSpaceAR(cc.v2(0, 0)));
                        flyLabel.parent = panel;
                        if (freeType == cfg.FreeGameType.Win) {
                          spineNum = _this._roundItems[freeType - 1][collectInfo.freeGameInfo.mults.length - 1].getChildByName("spine_numb").getComponent(sp.Skeleton);
                          endPos = spineNum.node.convertToWorldSpaceAR(cc.v2(0, 0));
                          endPos = panel.convertToNodeSpaceAR(endPos);
                          cc.tween(flyLabel).to(.5, {
                            x: endPos.x,
                            y: endPos.y
                          }).call(function() {
                            flyLabel.removeFromParent();
                            spineNum.node.active = true;
                            spineNum.setSkin("".concat(multiple, "x"));
                            spineNum.setAnimation(0, "Num_intro", false);
                          }).start();
                        } else {
                          _spineNum = _this._roundItems[freeType - 1][4].getChildByName("spine_numb").getComponent(sp.Skeleton);
                          _endPos = _spineNum.node.convertToWorldSpaceAR(cc.v2(0, 0));
                          _endPos = panel.convertToNodeSpaceAR(_endPos);
                          cc.tween(flyLabel).to(.5, {
                            x: _endPos.x,
                            y: _endPos.y
                          }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                            var _j, sn;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) switch (_context.prev = _context.next) {
                               case 0:
                                flyLabel.removeFromParent();
                                _j = 4;

                               case 2:
                                if (!(_j < collectInfo.freeGameInfo.mults.length)) {
                                  _context.next = 12;
                                  break;
                                }
                                sn = _this._roundItems[freeType - 1][_j].getChildByName("spine_numb").getComponent(sp.Skeleton);
                                sn.node.active = true;
                                sn.setSkin("".concat(multiple, "x"));
                                sn.setAnimation(0, "Num_intro", false);
                                _context.next = 9;
                                return SlotsFacade.delayTime(.1);

                               case 9:
                                _j++;
                                _context.next = 2;
                                break;

                               case 12:
                               case "end":
                                return _context.stop();
                              }
                            }, _callee);
                          }))).start();
                        }
                        _context2.next = 14;
                        return SlotsFacade.delayTime(1);

                       case 14:
                        res();

                       case 15:
                       case "end":
                        return _context2.stop();
                      }
                    }, _callee2);
                  })), _this);
                };
                for (var _i = 0; _i < 3; _i++) _loop(_i);
              });

             case 17:
              _context3.next = 21;
              break;

             case 19:
              contentNode = panel.getChildByName("content".concat(freeType));
              contentNode.active = true;

             case 21:
              _context3.next = 23;
              return new Promise(function(res) {
                cc.tween(panel).delay(1.5).to(.4, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  contentNode.active = false;
                  panel.active = false;
                  res();
                }).start();
              });

             case 23:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      startMove: function startMove() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var cfg, freeInfo, spineNumb;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (_this2._isEnter) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");

             case 2:
              cfg = SlotsFacade.dm.getGameCfg();
              freeInfo = SlotsFacade.dm.collectInfo.freeGameInfo;
              if (freeInfo.type == cfg.FreeGameType.Win || freeInfo.type == cfg.FreeGameType.Spin) {
                spineNumb = _this2._roundItems[freeInfo.type - 1][freeInfo.useCnt].getChildByName("spine_numb").getComponent(sp.Skeleton);
                spineNumb.setAnimation(0, "Num_idle", true);
              }

             case 5:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onSpinMsg: function onSpinMsg() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var cfg, collectInfo, freeType;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              if (_this3._isEnter) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");

             case 2:
              cfg = SlotsFacade.dm.getGameCfg();
              collectInfo = SlotsFacade.dm.collectInfo;
              freeType = collectInfo.freeGameInfo.type;
              if (!(freeType != cfg.FreeGameType.Wild)) {
                _context5.next = 7;
                break;
              }
              return _context5.abrupt("return");

             case 7:
              _context5.next = 9;
              return _this3.showRandomWild(collectInfo.freeGameInfo.currWilds);

             case 9:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              if (_this4._isEnter) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");

             case 2:
              _this4.removeWild();

             case 3:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      enter: function enter(isReconnect) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              SlotsFacade.mainPanel.jackpot_node.active = false;
              SlotsFacade.character.hide();
              _this5._isEnter = true;
              _this5._showRoundInfo();
              if (!(SlotsFacade.dm.collectInfo.freeGameInfo.useCnt < 1)) {
                _context7.next = 7;
                break;
              }
              _context7.next = 7;
              return _this5._showFreeDialog();

             case 7:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      exit: function exit() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var roundNode;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              SlotsFacade.mainPanel.jackpot_node.active = true;
              SlotsFacade.character.show();
              _this6._isEnter = false;
              _this6._showTitle(false);
              roundNode = _this6.node.getChildByName("items".concat(_this6._currFreeType));
              roundNode.active = false;

             case 6:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showRandomWild: function showRandomWild(idxs) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var _iterator, _step, idx, symbol;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this7.wild_node.active = true;
              _iterator = _createForOfIteratorHelper(idxs);
              _context9.prev = 2;
              _iterator.s();

             case 4:
              if ((_step = _iterator.n()).done) {
                _context9.next = 13;
                break;
              }
              idx = _step.value;
              SlotsFacade.soundMgr.playEffect("wildin");
              symbol = _this7.genAWildSymbol(idx);
              symbol.playWildAppear();
              _context9.next = 11;
              return SlotsFacade.delayTime(.7);

             case 11:
              _context9.next = 4;
              break;

             case 13:
              _context9.next = 18;
              break;

             case 15:
              _context9.prev = 15;
              _context9.t0 = _context9["catch"](2);
              _iterator.e(_context9.t0);

             case 18:
              _context9.prev = 18;
              _iterator.f();
              return _context9.finish(18);

             case 21:
              SlotsFacade.soundMgr.playEffect("wild_appear");
              _context9.next = 24;
              return SlotsFacade.delayTime(.5);

             case 24:
             case "end":
              return _context9.stop();
            }
          }, _callee9, null, [ [ 2, 15, 18, 21 ] ]);
        }))();
      },
      genAWildSymbol: function genAWildSymbol(idx) {
        var cfg = SlotsFacade.dm.getGameCfg();
        var node = cc.instantiate(this._symbolTemplate);
        node.parent = this.wild_node;
        var scp = node.addComponent(cfg.scripts.Symbols);
        scp.SetSymbolReelIdx(0);
        scp.Init(0, this.node);
        scp.ShowById(cfg.wildId);
        var pos = SlotsFacade.slots.getIdxGlobalPos(idx);
        pos = this.wild_node.convertToNodeSpaceAR(pos);
        node.setPosition(pos);
        return scp;
      },
      removeWild: function removeWild() {
        this.wild_node.active = false;
        this.wild_node.removeAllChildren();
      },
      settlementRound: function settlementRound() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var cfg, collectInfo, freeInfo, freeType, isSuper, useCnt, currRoundItem, nWin, hasBox, labelRollCmp, spineNumb, spineNumbTrans, roundLabel, currBoxs, boxWin, i, boxVo, symbol, _spineNumb, _roundLabel;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              cfg = SlotsFacade.dm.getGameCfg();
              collectInfo = SlotsFacade.dm.collectInfo;
              freeInfo = collectInfo.freeGameInfo;
              freeType = freeInfo.type;
              isSuper = 10 == freeInfo.coins.length;
              useCnt = freeInfo.useCnt;
              if (!(useCnt < 1)) {
                _context10.next = 8;
                break;
              }
              return _context10.abrupt("return");

             case 8:
              currRoundItem = _this8._roundItems[freeInfo.type - 1][useCnt - 1];
              nWin = SlotsFacade.dm.GetGameWin();
              hasBox = freeType == cfg.FreeGameType.Prize && freeInfo.currBoxs && freeInfo.currBoxs.length > 0;
              if (!(nWin > 0 || hasBox)) {
                _context10.next = 49;
                break;
              }
              labelRollCmp = currRoundItem.getChildByName("label").getComponent("LabelRollCmp");
              if (!nWin) {
                _context10.next = 19;
                break;
              }
              SlotsFacade.soundMgr.playEffect("win_a");
              _context10.next = 17;
              return new Promise(function(res) {
                labelRollCmp.startRoll(0, nWin, 1.5, res);
              });

             case 17:
              SlotsFacade.soundMgr.stopEffectByName("win_a");
              SlotsFacade.soundMgr.playEffect("win_end");

             case 19:
              if (!(freeType == cfg.FreeGameType.Win || freeType == cfg.FreeGameType.Spin)) {
                _context10.next = 32;
                break;
              }
              SlotsFacade.soundMgr.playEffect("popupend");
              spineNumb = currRoundItem.getChildByName("spine_numb").getComponent(sp.Skeleton);
              spineNumb.setAnimation(0, "Num_Mul", false);
              spineNumbTrans = currRoundItem.getChildByName("spine_numb_trans").getComponent(sp.Skeleton);
              spineNumbTrans.node.active = true;
              spineNumbTrans.setAnimation(0, "Num_Mul_trans", false);
              spineNumbTrans.setCompleteListener(function() {
                spineNumbTrans.setCompleteListener(null);
                spineNumbTrans.node.active = false;
              });
              _context10.next = 29;
              return SlotsFacade.delayTime(1);

             case 29:
              labelRollCmp.label.string = Global.FormatNumToComma(freeInfo.coins[useCnt - 1]);
              _context10.next = 34;
              break;

             case 32:
              roundLabel = currRoundItem.getChildByName("round_label").getComponent("ImgSwitchCmp");
              roundLabel.showSpriteByName("".concat(freeInfo.useCnt, "spin2"));

             case 34:
              if (!hasBox) {
                _context10.next = 47;
                break;
              }
              currBoxs = freeInfo.currBoxs;
              boxWin = 0;
              for (i = 0; i < currBoxs.length; i++) {
                boxVo = currBoxs[i];
                symbol = SlotsFacade.slots.GetSymbolByIdx(boxVo.idx);
                symbol.openBox(boxVo.coin);
                boxWin += boxVo.coin;
              }
              SlotsFacade.soundMgr.playEffect("repeatopen");
              if (!currBoxs.length) {
                _context10.next = 47;
                break;
              }
              _context10.next = 42;
              return SlotsFacade.delayTime(2);

             case 42:
              SlotsFacade.soundMgr.playEffect("win_a");
              _context10.next = 45;
              return new Promise(function(res) {
                labelRollCmp.startRoll(nWin, nWin + boxWin, 1.5, res);
              });

             case 45:
              SlotsFacade.soundMgr.stopEffectByName("win_a");
              SlotsFacade.soundMgr.playEffect("win_end");

             case 47:
              _context10.next = 50;
              break;

             case 49:
              if (freeType == cfg.FreeGameType.Win || freeType == cfg.FreeGameType.Spin) {
                _spineNumb = currRoundItem.getChildByName("spine_numb").getComponent(sp.Skeleton);
                _spineNumb.setAnimation(0, "Num_grey_jingzhen", false);
              } else {
                _roundLabel = currRoundItem.getChildByName("round_label").getComponent("ImgSwitchCmp");
                _roundLabel.showSpriteByName("".concat(useCnt, "spin2"));
              }

             case 50:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      settlementTotal: function settlementTotal() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var collectInfo, freeInfo, sum, _loop2, i, _ret;
          return regeneratorRuntime.wrap(function _callee11$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              collectInfo = SlotsFacade.dm.collectInfo;
              freeInfo = collectInfo.freeGameInfo;
              sum = freeInfo.winCoin - freeInfo.coins.reduce(function(a, b) {
                return a + b;
              }, 0);
              _loop2 = regeneratorRuntime.mark(function _loop2(i) {
                var coin, roundItem, pos, p;
                return regeneratorRuntime.wrap(function _loop2$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                   case 0:
                    coin = freeInfo.coins[i];
                    if (!(coin < 1)) {
                      _context11.next = 3;
                      break;
                    }
                    return _context11.abrupt("return", "continue");

                   case 3:
                    roundItem = _this9._roundItems[freeInfo.type - 1][i];
                    pos = roundItem.convertToWorldSpaceAR(cc.v2(0, 0));
                    _this9.spine_glow.node.position = _this9.node.convertToNodeSpaceAR(pos);
                    _this9.spine_glow.node.active = true;
                    _this9.spine_glow.setAnimation(0, "jiesuan_glow", false);
                    SlotsFacade.soundMgr.playEffect("wheelfly");
                    p = cc.instantiate(_this9.collect_coin_particle.node).getComponent(cc.ParticleSystem);
                    p.node.active = true;
                    p.node.parent = SlotsFacade.mainPanel.top_node;
                    p.node.position = SlotsFacade.mainPanel.top_node.convertToNodeSpaceAR(pos);
                    p.resetSystem();
                    cc.tween(p.node).to(.5, {
                      x: _this9.spineBottom.node.x,
                      y: _this9.spineBottom.node.y
                    }).call(function() {
                      p.node.removeFromParent();
                    }).start();
                    _context11.next = 17;
                    return SlotsFacade.delayTime(.5);

                   case 17:
                    _this9.spineBottom.node.active = true;
                    _this9.spineBottom.setAnimation(0, "animation", false);
                    _this9._bottomLabel.active = true;
                    _context11.next = 22;
                    return new Promise(function(res) {
                      Global.doRoallNumEff(_this9._bottomLabel, sum, sum + coin, .3, res, null, 0, true);
                    });

                   case 22:
                    sum += coin;

                   case 23:
                   case "end":
                    return _context11.stop();
                  }
                }, _loop2);
              });
              i = 0;

             case 5:
              if (!(i < freeInfo.coins.length)) {
                _context12.next = 13;
                break;
              }
              return _context12.delegateYield(_loop2(i), "t0", 7);

             case 7:
              _ret = _context12.t0;
              if (!("continue" === _ret)) {
                _context12.next = 10;
                break;
              }
              return _context12.abrupt("continue", 10);

             case 10:
              i++;
              _context12.next = 5;
              break;

             case 13:
              _context12.next = 15;
              return SlotsFacade.delayTime(.5);

             case 15:
              _this9.spineBottom.node.active = true;

             case 16:
             case "end":
              return _context12.stop();
            }
          }, _callee11);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  NewKylin_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd176OfFENMBrPCSRd4g/7I", "NewKylin_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        pickData: null,
        collectInfo: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this.pickData = deskInfo.jackpotGame;
        this.collectInfo = deskInfo.collectInfo;
        this._super(deskInfo, gameId, gameJackpot);
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
          this.pickData = msg.jackpotGame;
          this.collectInfo = msg.collectInfo;
        }
        this._super(msg);
      },
      getSpinData: function getSpinData() {
        return this._gameInfo;
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
        1 == msg.data.rtype ? SlotsFacade.pickGame.onPickMsg(msg) : 2 == msg.data.rtype && SlotsFacade.wheelGame.onWheelMsg(msg);
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
      getCardsIndexs: function getCardsIndexs(id) {
        if (!this._gameInfo) return [];
        var ret = [];
        var cards = this._gameInfo.resultCards;
        for (var i = 0; i < cards.length; i++) id == cards[i] && ret.push(i + 1);
        return ret;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  NewKylin_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6efd3FLq2BMXq+1iKaZJzaQ", "NewKylin_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this.InitCommComponent();
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("NewKylin_MainPanel");
        this.flowCtrl = this.addComponent("NewKylin_FlowCtrl");
        this.soundMgr = this.addComponent("NewKylin_Sound");
        this.collectProgress = this.mainPanel.collect_progress.getComponent("NewKylin_CollectProgress");
        this.pickGame = this.mainPanel.pick_game.getComponent("NewKylin_PickGame");
        this.popup = this.mainPanel.popup.getComponent("NewKylin_Popup");
        this.character = this.mainPanel.character_node.getComponent("NewKylin_Character");
        this.wheelGame = this.mainPanel.wheel_game.getComponent("NewKylin_Wheel");
        this.freeGame = this.mainPanel.free_game.getComponent("NewKylin_FreeGame");
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
  NewKylin_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3edcbqukP5Kao5xtoQ74mnP", "NewKylin_MainPanel");
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
        this.slots = this.node.getChildByName("slots");
        this.character_node = this.slots.getChildByName("character_node");
        this.collect_progress_container = this.slots.getChildByName("collect_container");
        this.collect_progress = this.collect_progress_container.getChildByName("collect");
        this.free_game = this.slots.getChildByName("free_info");
        this.pick_game = this.node.getChildByName("pick_game");
        this.wheel_game = this.node.getChildByName("wheel_game");
        this.popup = this.node.getChildByName("popup");
        this.jackpot_node = this.node.getChildByName("LMSlots_PrizePool_1");
        this.transition_node = this.node.getChildByName("transition_node");
        this.top_node = this.node.getChildByName("top_node");
      },
      showBg: function showBg(isFree) {
        var index = 0;
        isFree && (index = 1);
        this.bg.getComponent("ImgSwitchCmp").setIndex(index);
      },
      showSceneTransition: function showSceneTransition(type) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var _$2$type;
          var cfg, spine;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              type = type || 1;
              cfg = (_$2$type = {}, _defineProperty(_$2$type, 1, {
                spineNode: "spine1",
                aniName: "FG_guochang",
                delayTime: 1.5,
                sound: "fgtranstion"
              }), _defineProperty(_$2$type, 2, {
                spineNode: "spine2",
                aniName: "skill",
                delayTime: 2,
                sound: "bgtransition"
              }), _$2$type)[type];
              SlotsFacade.soundMgr.playEffect(cfg.sound);
              spine = _this.transition_node.getChildByName(cfg.spineNode).getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, cfg.aniName, false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context.next = 9;
              return SlotsFacade.delayTime(cfg.delayTime);

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
  NewKylin_PickGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b254egSnopFlqXbi4fROlu3", "NewKylin_PickGame");
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
        pickItems: [ cc.Node ],
        _canTouch: false,
        _callBack: null
      },
      onLoad: function onLoad() {
        for (var i = 0; i < this.pickItems.length; i++) {
          var item = this.pickItems[i];
          var cmp = item.addComponent("NewKylin_PickItem");
          cmp.init(i + 1, this._pickItemHandler.bind(this));
        }
        this._reset();
      },
      _reset: function _reset() {
        for (var i = 0; i < this.pickItems.length; i++) {
          var item = this.pickItems[i];
          var cmp = item.getComponent("NewKylin_PickItem");
          cmp.reset();
        }
      },
      _pickItemHandler: function _pickItemHandler(id) {
        if (!this._canTouch) return;
        var pickData = SlotsFacade.dm.pickData;
        if (pickData.items[id - 1].isOpen) {
          console.log("Error:".concat(id, " \u5df2\u7ecf\u6253\u5f00"));
          return;
        }
        SlotsFacade.soundMgr.playEffect("bgpick");
        this._canTouch = false;
        SlotsFacade.dm.reqSubGame({
          rtype: 1,
          choiceId: id
        });
      },
      onPickMsg: function onPickMsg(msg) {
        var pickData = msg.data.jackpotGame;
        SlotsFacade.dm.pickData = pickData;
        var choiceId = msg.data.choiceId;
        var pickItemCmp = this.pickItems[choiceId - 1].getComponent("NewKylin_PickItem");
        var jackpotId = pickData.items[choiceId - 1].jackpotId;
        pickItemCmp.setState(3, jackpotId);
        if (pickData.isEnd) {
          this._canTouch = false;
          this._settlement(jackpotId);
        } else this._canTouch = true;
      },
      _settlement: function _settlement(jackpotId) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var itemsRet, i, item, cmp, _i, _item, _cmp;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("coinsure");
              itemsRet = SlotsFacade.dm.pickData.items;
              for (i = 0; i < itemsRet.length; i++) {
                item = itemsRet[i];
                if (item.jackpotId == jackpotId) {
                  cmp = _this.pickItems[i].getComponent("NewKylin_PickItem");
                  cmp.playWin();
                }
              }
              _context.next = 5;
              return SlotsFacade.delayTime(1);

             case 5:
              for (_i = 0; _i < itemsRet.length; _i++) {
                _item = itemsRet[_i];
                if (!_item.isOpen) {
                  _cmp = _this.pickItems[_i].getComponent("NewKylin_PickItem");
                  _cmp.setState(2, _item.jackpotId);
                }
              }
              _context.next = 8;
              return SlotsFacade.delayTime(1.5);

             case 8:
              _context.next = 10;
              return SlotsFacade.popup.showWinJpGold(SlotsFacade.dm.pickData.winCoin, jackpotId);

             case 10:
              _this.close();

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _initBag: function _initBag() {
        var jpData = SlotsFacade.dm.jackpotGame;
        for (var i = 0; i < jpData.choiceIdxs.length; i++) {
          var idx = jpData.choiceIdxs[i];
          var itemType = jpData.choiceItems[i];
          var bag = this._bagList[idx - 1];
          bag.setItemType(itemType);
        }
      },
      _initItems: function _initItems() {
        var _this2 = this;
        var pickData = SlotsFacade.dm.pickData;
        pickData && this.scheduleOnce(function() {
          for (var i = 0; i < pickData.items.length; i++) {
            var itemVo = pickData.items[i];
            if (itemVo.isOpen) {
              var item = _this2.pickItems[i].getComponent("NewKylin_PickItem");
              item.setState(3, pickData.items[i].jackpotId);
            }
          }
        });
      },
      open: function open(cb) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._callBack = cb;
              SlotsFacade.soundMgr.playEffect("triggering");
              _context2.next = 4;
              return SlotsFacade.mainPanel.showSceneTransition(2);

             case 4:
              SlotsFacade.soundMgr.playBgm("bgbgm");
              _this3.panel.active = true;
              _this3._reset();
              _this3._canTouch = true;
              _this3._initItems();

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
              _context3.next = 2;
              return SlotsFacade.mainPanel.showSceneTransition(2);

             case 2:
              SlotsFacade.soundMgr.playBgm(null, true);
              _this4.panel.active = false;
              if (SlotsFacade.dm.hasFree()) SlotsFacade.soundMgr.playFreeBgm(); else {
                Global.SlotsSoundMgr.stopBgm();
                SlotsFacade.soundMgr.playBgm();
              }
              _this4._callBack && _this4._callBack();

             case 6:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  NewKylin_PickItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed3a4wjkkdMyqKJ6KgrGdxy", "NewKylin_PickItem");
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
    cc.Class({
      extends: cc.Component,
      properties: {
        canTouch: false,
        spine: sp.Skeleton,
        spineWin: sp.Skeleton,
        _id: 0,
        _handler: null,
        _jpType: 0,
        _isLoaded: false
      },
      onLoad: function onLoad() {
        var _this = this;
        this.canTouch = false;
        this.spine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        this.spineWin = this.node.getChildByName("spine_win").getComponent(sp.Skeleton);
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.canTouch && _this._handler(_this.id);
        });
        this._isLoaded = true;
        this.reset();
      },
      reset: function reset() {
        if (this._isLoaded) {
          this.canTouch = true;
          this.spineWin.node.active = false;
          this.setState(1);
        }
      },
      init: function init(id, handler) {
        this.id = id;
        this._handler = handler;
      },
      setState: function setState(state, jpType) {
        var _$2$3$state, _$2$3$4$jpType;
        state = state || 1;
        jpType = jpType || 1;
        this._jpType = jpType;
        var cfg = (_$2$3$state = {}, _defineProperty(_$2$3$state, 1, {
          aniName: "zhuzi_idle",
          loop: true,
          canTouch: true
        }), _defineProperty(_$2$3$state, 2, {
          aniName: "zhuzi_hui",
          loop: false,
          canTouch: false
        }), _defineProperty(_$2$3$state, 3, {
          aniName: "zhuzi_click",
          loop: false,
          canTouch: false
        }), _$2$3$state)[state];
        var skinName = (_$2$3$4$jpType = {}, _defineProperty(_$2$3$4$jpType, 1, "Mini"), 
        _defineProperty(_$2$3$4$jpType, 2, "Minor"), _defineProperty(_$2$3$4$jpType, 3, "Major"), 
        _defineProperty(_$2$3$4$jpType, 4, "Grand"), _$2$3$4$jpType)[jpType];
        this.spine.setSkin(skinName);
        this.spine.setAnimation(0, cfg.aniName, cfg.loop);
        this.canTouch = cfg.canTouch;
      },
      playWin: function playWin() {
        this.spineWin.node.active = true;
        this.spineWin.setAnimation(0, "glow".concat(this._jpType, "b"), true);
      }
    });
    cc._RF.pop();
  }, {} ],
  NewKylin_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2adbaT0+j1DG7x1XuCtsBzm", "NewKylin_Popup");
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
      showBg: function showBg(boo) {
        this.bg.active = boo;
      },
      showWinGold: function showWinGold(goldNumb) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var panel, okBtn;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("bell");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context.next = 9;
              return SlotsFacade.delayTime(.5);

             case 9:
              okBtn = panel.getChildByName("btn_ok");
              _context.next = 12;
              return new Promise(function(res) {
                var handler = function handler() {
                  SlotsFacade.soundMgr.playEffect("popup_out");
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

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showWinJpGold: function showWinJpGold(goldNumb, jpType) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, jp_icon, okBtn;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              jpType || (jpType = 1);
              SlotsFacade.soundMgr.playEffect("jpwin");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              jp_icon = panel.getChildByName("jp_icon").getComponent("ImgSwitchCmp");
              jp_icon.setIndex(jpType - 1);
              cc.tween(panel).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context2.next = 12;
              return SlotsFacade.delayTime(.5);

             case 12:
              okBtn = panel.getChildByName("btn_ok");
              _context2.next = 15;
              return new Promise(function(res) {
                var handler = function handler() {
                  okBtn.off(cc.Node.EventType.TOUCH_END, handler);
                  SlotsFacade.soundMgr.playEffect("popup_out");
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

             case 15:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  NewKylin_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7303atQ6OFJOa0IXlOysA6+", "NewKylin_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  NewKylin_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7feafcC4gtA5okt7rACSDNJ", "NewKylin_Slots");
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
        for (var _i = 0; _i < this._reels.length; _i++) {
          var item = this._reels[_i];
          var reelRes = reelResults[_i];
          item.SetResult(reelRes);
        }
      },
      playTriggerAni: function playTriggerAni(indexs) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("triggering");
              indexs.forEach(function(element) {
                var item = _this2.GetSymbolByIdx(element);
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
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _iterator, _step, reel;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("sym_shake");
              time = time || 1;
              offset = offset || 2;
              _iterator = _createForOfIteratorHelper(_this3._reels);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  reel = _step.value;
                  Global.shakeNode(reel.node, offset, time);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
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
        var _iterator2 = _createForOfIteratorHelper(this._reels), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var reel = _step2.value;
            reel.showBonusAni(false);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      updateAllSymbol: function updateAllSymbol() {
        SlotsFacade.dm.updateRandomSymbols();
        var _iterator3 = _createForOfIteratorHelper(this._reels), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var reel = _step3.value;
            var symbols = reel._symbols;
            var _iterator4 = _createForOfIteratorHelper(symbols), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                var s = _step4.value;
                s.StartMove();
                s.ShowRandomSymbol();
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
  NewKylin_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "144e5nXzQpHWLg4nj/xvOdc", "NewKylin_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/NewKylin/",
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
      playFreeBgm: function playFreeBgm() {
        this.playBgm("fgbgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  NewKylin_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4008CSIolBWpz9gbsGDwPn", "NewKylin_Wheel");
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
        _callBack: null,
        _resultIdx: 0,
        panel: cc.Node,
        bg: cc.Node,
        board: cc.Node,
        btn_spin: cc.Node,
        arrow: cc.Node,
        collect_container: cc.Node,
        particle_start_pos: cc.Node,
        spine_super: sp.Skeleton,
        spine_8to10: sp.Skeleton,
        spine_win: sp.Skeleton
      },
      _getRotation: function _getRotation() {
        var ret = 360 * -this.roundCount;
        var indexsAngle = [ -22.5, -112.5, -67.5, -157.5 ];
        ret += indexsAngle[this._resultIdx - 1];
        return ret;
      },
      onLoad: function onLoad() {
        var _this = this;
        this.btn_spin.on(cc.Node.EventType.TOUCH_END, function() {
          if (_this._canSpin) {
            _this._canSpin = false;
            SlotsFacade.soundMgr.playEffect("wheelspin");
            SlotsFacade.dm.reqSubGame({
              rtype: 2
            });
            var btnSpine = _this.btn_spin.getChildByName("spine").getComponent(sp.Skeleton);
            btnSpine.setAnimation(0, "Wheel_button_click", false);
          }
        }, this);
      },
      onWheelMsg: function onWheelMsg(msg) {
        SlotsFacade.dm.collectInfo = msg.data.collectInfo;
        var freeInfo = msg.data.collectInfo.freeGameInfo;
        SlotsFacade.dm.SetFreeTime(freeInfo.totalCnt);
        SlotsFacade.dm.SetTotalFree(freeInfo.totalCnt);
        this._resultIdx = freeInfo.type;
        this._startWheel();
      },
      _reset: function _reset() {
        this.board.angle = 0;
        for (var i = 1; i <= 4; i++) this.board.getChildByName("wheelNum".concat(i, "1")).active = true;
        this.bg.active = true;
        this.spine_super.node.active = false;
        this.spine_8to10.node.active = false;
        this.spine_win.node.active = true;
        this.spine_win.setAnimation(0, "Wheel_idle", true);
        var btnSpine = this.btn_spin.getChildByName("spine").getComponent(sp.Skeleton);
        btnSpine.setAnimation(0, "Wheel_button_idle", true);
      },
      _startWheel: function _startWheel() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2.spine_win.node.active = false;
              SlotsFacade.soundMgr.playEffect("wheel");
              _context.next = 4;
              return new Promise(function(res) {
                cc.tween(_this2.board).to(8, {
                  angle: _this2._getRotation()
                }, {
                  easing: "quartInOut"
                }).call(function() {
                  _this2.spine_win.node.active = true;
                  _this2.spine_win.setAnimation(0, "Wheel_win", true);
                  SlotsFacade.soundMgr.playEffect("wheelstop");
                  res();
                }).start();
              });

             case 4:
              _context.next = 6;
              return SlotsFacade.delayTime(2);

             case 6:
              _context.next = 8;
              return SlotsFacade.collectProgress.collectEnergy(_this2.particle_start_pos.convertToWorldSpaceAR(cc.v2(0, 0)));

             case 8:
              _context.next = 10;
              return _this2._processSuperMode();

             case 10:
              _this2._completeWheel();

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      _processSuperMode: function _processSuperMode() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var collectInfo, freeInfo, skinName;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              collectInfo = SlotsFacade.dm.collectInfo;
              if (!(3 != collectInfo.state)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");

             case 3:
              SlotsFacade.soundMgr.playEffect("supermode");
              _this3.spine_super.node.active = true;
              _this3.spine_super.setAnimation(0, "Supermode_intro", false);
              _this3.spine_super.addAnimation(0, "Supermode_idle", true);
              _context2.next = 9;
              return SlotsFacade.delayTime(3);

             case 9:
              cc.tween(_this3.spine_super.node).parallel(cc.tween().to(.5, {
                scale: .2
              }, {
                easing: "backIn"
              }), cc.tween().to(.5, {
                position: _this3.spine_8to10.node.position
              }, {
                easing: "cubicIn"
              })).call(function() {
                _this3.spine_super.node.active = false;
              }).start();
              _context2.next = 12;
              return SlotsFacade.delayTime(.5);

             case 12:
              freeInfo = collectInfo.freeGameInfo;
              _this3.board.getChildByName("wheelNum".concat(freeInfo.type, "1")).active = false;
              SlotsFacade.soundMgr.playEffect("collectIn");
              skinName = [ "Wins_8To10", "Spins_8To10", "Prizes_8To10", "Wilds_8To10" ][freeInfo.type - 1];
              _this3.spine_8to10.node.active = true;
              _this3.spine_8to10.setSkin(skinName);
              _this3.spine_8to10.setAnimation(0, "Wheel_8to10", false);
              _this3.spine_8to10.setCompleteListener(function() {
                _this3.spine_8to10.setCompleteListener(null);
              });
              _context2.next = 22;
              return SlotsFacade.delayTime(3);

             case 22:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _completeWheel: function _completeWheel() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _context3.next = 2;
              return _this4.close();

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      open: function open(cb) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this5._callBack = cb;
              _context4.next = 3;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 3:
              SlotsFacade.soundMgr.playBgm("bgbgm");
              _this5.bg.active = true;
              _this5.panel.active = true;
              _this5._reset();
              SlotsFacade.collectProgress.changeParent(_this5.collect_container);
              _this5._canSpin = true;

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      close: function close() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var collectInfo, i;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _context5.next = 2;
              return SlotsFacade.mainPanel.showSceneTransition(1);

             case 2:
              collectInfo = SlotsFacade.dm.collectInfo;
              if (3 == collectInfo.state) {
                for (i = 0; i < collectInfo.counts.length; i++) 4 == collectInfo.counts[i] && (collectInfo.counts[i] = 0);
                SlotsFacade.collectProgress.updateProgress();
              }
              SlotsFacade.collectProgress.changeParent();
              _this6.panel.active = false;
              _this6.bg.active = false;
              _this6._callBack && _this6._callBack();

             case 8:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  NewKylin_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3907bGX4ctIPbcnXbHmBn9j", "NewKylin_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
      },
      playWildAppear: function playWildAppear() {
        var cfg = cc.vv.gameData.getGameCfg();
        if (this._id != cfg.wildId) return;
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
        this._showNode.active = true;
        var nodeSp = this._showNode.getComponent(sp.Skeleton);
        nodeSp && nodeSp.setAnimation(0, "Wild_03", false);
      },
      StopMoveDeep: function StopMoveDeep() {
        var cfg = SlotsFacade.dm.getGameCfg();
        this._id == cfg.bonusId && this.playStopAnimation();
      },
      openBox: function openBox(coin) {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        this._showNode && (this._showNode.active = false);
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
        topShowNode.active = true;
        aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
        var nodeSp = topShowNode.getComponent(sp.Skeleton);
        nodeSp.setAnimation(0, "Repeat_open", false);
        nodeSp.addAnimation(0, "Repeat_idle", true);
        var label = aniNode.getChildByName("label");
        label.active = true;
        label.opacity = 0;
        label.getComponent(cc.Label).string = Global.convertNumToShort(coin);
        cc.tween(label).delay(1).to(.3, {
          opacity: 255
        }).start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "NewKylin_Cfg", "NewKylin_Character", "NewKylin_CollectProgress", "NewKylin_FlowCtrl", "NewKylin_FreeGame", "NewKylin_GameData", "NewKylin_Logic", "NewKylin_MainPanel", "NewKylin_PickGame", "NewKylin_PickItem", "NewKylin_Popup", "NewKylin_Reel", "NewKylin_Slots", "NewKylin_Sound", "NewKylin_Wheel", "NewKylin_symbol" ]);