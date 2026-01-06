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
  BladeMasterTokugawa_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9925xi4/9FWL0YODifaxw0", "BladeMasterTokugawa_Cfg");
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
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation3",
          zIndex: 300
        },
        stop_ani: {
          name: "animation",
          zIndex: 100
        },
        idle_ani: {
          name: "animation2",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w3",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        unlockAni: "animation1"
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
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: "w14",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 101, {
        node: "s1",
        win_node: "w1",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 102, {
        node: "s1",
        win_node: "w1",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2001, {
        node: "s2001",
        win_node: "w2001",
        win_ani: {
          name: "animation3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2101, {
        node: "s2001",
        win_node: "w2001",
        win_ani: {
          name: "animation3",
          zIndex: 300
        },
        labelAni: ""
      }), _defineProperty(_symbol, 2102, {
        node: "s2001",
        win_node: "w2001",
        win_ani: {
          name: "animation3",
          zIndex: 300
        },
        labelAni: ""
      }), _defineProperty(_symbol, 2201, {
        node: "s2201",
        win_node: ""
      }), _defineProperty(_symbol, 2301, {
        node: "s2301",
        win_node: ""
      }), _defineProperty(_symbol, 2401, {
        node: "s2401",
        win_node: ""
      }), _symbol),
      scatterId: 2,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "BladeMasterTokugawa_Slots",
        Reels: "BladeMasterTokugawa_Reel",
        Symbols: "BladeMasterTokugawa_symbol"
      },
      col: 5,
      row: 8,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 92.5
      },
      helpItems: [ "games/BladeMasterTokugawa/prefab/LMSlots_Help_item1", "games/BladeMasterTokugawa/prefab/LMSlots_Help_item2", "games/BladeMasterTokugawa/prefab/LMSlots_Help_item3", "games/BladeMasterTokugawa/prefab/LMSlots_Help_item4" ],
      randomSymbols: [ 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      autoModelDelay: 1,
      AddAntiTime: 1.5,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      normalBgm: "base_bgm",
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/BladeMasterTokugawa/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_notify",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ]
    };
    Cfg.isWild = function(id) {
      return 1 == id || 101 == id || 102 == id || 2001 == id || 2101 == id || 2102 == id;
    };
    Cfg.isMultipleWild = function(id) {
      return 101 == id || 2101 == id || 102 == id || 2102 == id;
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  BladeMasterTokugawa_FlowCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1e98nJ5mdHqoVnXOoo0yei", "BladeMasterTokugawa_FlowCtrl");
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
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var total, rest, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              total = SlotsFacade.dm.GetTotalFree();
              rest = SlotsFacade.dm.GetFreeTime();
              if (rest > 0) {
                SlotsFacade.bottomCmp.ShowFreeModel(true, total - rest, total);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                SlotsFacade.bottomCmp.SetWin(nTotal);
                SlotsFacade.topCmp.SetBackLobby(false);
                SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
                SlotsFacade.mainPanel.showBg(true);
                SlotsFacade.slots.setBorderVisible(false);
                SlotsFacade.slots.showSlotsState(true);
                SlotsFacade.freeGame.reconnect();
                SlotsFacade.slots.CanDoNextRound();
              }

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      spinEnd: function spinEnd() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, nTotal, freeWinCoin;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.dm.isFistTriggerFree() || SlotsFacade.slots.resetReelBg();
              _context2.next = 3;
              return SlotsFacade.freeGame.processUnlock();

             case 3:
              _context2.next = 5;
              return SlotsFacade.slots.changeWildMultiple();

             case 5:
              _context2.next = 7;
              return _this.jpGame();

             case 7:
              SlotsFacade.slots.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context2.next = 13;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(nWin, nTotal, 0 == SlotsFacade.dm.GetTotalFree(), res);
              });

             case 13:
              if (!SlotsFacade.dm.isTriggerFree()) {
                _context2.next = 30;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context2.next = 17;
              return SlotsFacade.slots.playScatter(SlotsFacade.dm.getScatterIndexs());

             case 17:
              SlotsFacade.dm.isFistTriggerFree() && SlotsFacade.slots.Backup();
              _context2.next = 20;
              return SlotsFacade.popup.showWinFreeCnt(SlotsFacade.dm.triggerFreeCnt(), SlotsFacade.dm.isFistTriggerFree());

             case 20:
              if (!SlotsFacade.dm.isFistTriggerFree()) {
                _context2.next = 26;
                break;
              }
              SlotsFacade.mainPanel.showSceneTransition();
              _context2.next = 24;
              return SlotsFacade.delayTime(2);

             case 24:
              _context2.next = 26;
              return _this.enterFreeGame();

             case 26:
              _context2.next = 28;
              return SlotsFacade.delayTime(1);

             case 28:
              _context2.next = 47;
              break;

             case 30:
              if (!cc.vv.gameData.hasFree()) {
                _context2.next = 33;
                break;
              }
              _context2.next = 47;
              break;

             case 33:
              if (!cc.vv.gameData.isLastEndFree()) {
                _context2.next = 47;
                break;
              }
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              freeWinCoin = SlotsFacade.dm.getFreeWinCoin();
              _context2.next = 38;
              return SlotsFacade.popup.showWinGold(freeWinCoin);

             case 38:
              SlotsFacade.mainPanel.showSceneTransition();
              _context2.next = 41;
              return SlotsFacade.delayTime(1);

             case 41:
              SlotsFacade.slots.Resume();
              _this.enterNormalGame();
              _context2.next = 45;
              return SlotsFacade.delayTime(2.8);

             case 45:
              _context2.next = 47;
              return new Promise(function(res) {
                SlotsFacade.slots.ShowBottomWin(freeWinCoin, freeWinCoin, true, res);
              });

             case 47:
              SlotsFacade.slots.CanDoNextRound();

             case 48:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      enterFreeGame: function enterFreeGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              SlotsFacade.slots.resetReelBg();
              SlotsFacade.mainPanel.showBg(true);
              SlotsFacade.soundMgr.playFreeBgm();
              SlotsFacade.freeGame.show();
              SlotsFacade.slots.showSlotsState(true, true, 1.5, .5);
              SlotsFacade.slots.setBorderVisible(false);
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              _context3.next = 10;
              return SlotsFacade.delayTime(2.5);

             case 10:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      enterNormalGame: function enterNormalGame() {
        SlotsFacade.bottomCmp.ShowFreeModel(false);
        SlotsFacade.slots.setBorderVisible(true);
        SlotsFacade.mainPanel.showBg(false);
        SlotsFacade.freeGame.hide();
        SlotsFacade.slots.showSlotsState(false);
        SlotsFacade.slots.setBorderVisible(true);
        SlotsFacade.slots.clearFreeSymbols();
        Global.SlotsSoundMgr.stopBgm();
        SlotsFacade.soundMgr.playBgm();
      },
      jpGame: function jpGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var jackpotInfo, sum, i, jpType, winCoin, jpIdxs, isBig, idx, symbol, resultCards, _i, _jpIdxs, cards, _idx, j, _symbol;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              jackpotInfo = SlotsFacade.dm.getSpinData().jackpotInfo;
              if (jackpotInfo) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return");

             case 3:
              SlotsFacade.topCmp.SetBackLobby(false);
              SlotsFacade.bottomCmp.ShowBtnsByState("moveing_1");
              sum = 0;
              i = 0;

             case 7:
              if (!(i < jackpotInfo.jackpotIds.length)) {
                _context4.next = 24;
                break;
              }
              jpType = jackpotInfo.jackpotIds[i];
              winCoin = jackpotInfo.coins[i];
              jpIdxs = jackpotInfo.idxs[i];
              isBig = false;
              idx = jpIdxs[0];
              if (2 == jpIdxs.length) {
                isBig = true;
                idx = jpIdxs[1];
              }
              symbol = SlotsFacade.slots.GetSymbolByIdx(idx);
              _context4.next = 17;
              return symbol.playJp(jpType, isBig);

             case 17:
              _context4.next = 19;
              return SlotsFacade.popup.showJpWinGold(jpType, winCoin);

             case 19:
              sum += winCoin;
              SlotsFacade.bottomCmp.SetWin(sum);

             case 21:
              i++;
              _context4.next = 7;
              break;

             case 24:
              resultCards = SlotsFacade.dm.getSpinData().resultCards;
              _i = 0;

             case 26:
              if (!(_i < jackpotInfo.jackpotIds.length)) {
                _context4.next = 43;
                break;
              }
              _jpIdxs = jackpotInfo.idxs[_i];
              cards = [];
              if (2 == _jpIdxs.length) {
                cards.push(resultCards[_jpIdxs[0] - 1]);
                cards.push(resultCards[_jpIdxs[0] - 1] + 2e3);
              } else {
                _idx = _jpIdxs[0];
                _idx + 5 > 40 ? cards.push(resultCards[_idx - 1]) : cards.push(resultCards[_idx - 1] + 2e3);
              }
              j = 0;

             case 31:
              if (!(j < _jpIdxs.length)) {
                _context4.next = 40;
                break;
              }
              _symbol = SlotsFacade.slots.GetSymbolByIdx(_jpIdxs[j]);
              _symbol.ShowById(cards[j]);
              if (!(j == _jpIdxs.length - 1)) {
                _context4.next = 37;
                break;
              }
              _context4.next = 37;
              return _symbol.jpToWild(2 == _jpIdxs.length);

             case 37:
              j++;
              _context4.next = 31;
              break;

             case 40:
              _i++;
              _context4.next = 26;
              break;

             case 43:
              _context4.next = 45;
              return SlotsFacade.delayTime(.5);

             case 45:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  BladeMasterTokugawa_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b567cZIZO1Cv6NHTSqxq3VQ", "BladeMasterTokugawa_FreeGame");
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
        _lockItems: null,
        up: cc.Node,
        down: cc.Node,
        border: cc.Node
      },
      onLoad: function onLoad() {
        this._lockItems = [];
        for (var i = 0; i < 4; i++) {
          var item = this.border.getChildByName("row" + (i + 1)).getComponent("BladeMasterTokugawa_LockItem");
          this._lockItems.push(item);
        }
        this.border.y = -370;
      },
      reset: function reset() {
        this._lockItems.forEach(function(element) {
          element.reset();
        });
      },
      show: function show() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var jk, i, item;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.up.active = true;
              _this.down.active = true;
              SlotsFacade.soundMgr.playEffect("reel_raise");
              _this.border.y = -370;
              cc.tween(_this.border).delay(.5).to(1.5, {
                y: 0
              }).start();
              jk = SlotsFacade.dm.getJungleKing();
              i = 0;

             case 7:
              if (!(i < _this._lockItems.length)) {
                _context.next = 15;
                break;
              }
              item = _this._lockItems[i];
              item.show(jk.tierCfg[i] - jk.total);
              _context.next = 12;
              return SlotsFacade.delayTime(.1 * i);

             case 12:
              i++;
              _context.next = 7;
              break;

             case 15:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      hide: function hide() {
        this.reset();
        this.up.active = false;
        this.down.active = false;
      },
      reconnect: function reconnect() {
        var _this2 = this;
        this.scheduleOnce(function() {
          SlotsFacade.soundMgr.playFreeBgm();
          _this2.up.active = true;
          _this2.down.active = true;
          _this2.border.y = 0;
          var jk = SlotsFacade.dm.getJungleKing();
          for (var i = 0; i < _this2._lockItems.length; i++) {
            var item = _this2._lockItems[i];
            item.setNeedCnt(jk.tierCfg[i] - jk.total);
          }
        });
      },
      processUnlock: function processUnlock() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var jk, currCnt, unlocAllNeedCnt, hasUnlock, i, symbol, promiseArr, _i, item;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (SlotsFacade.dm.inFree()) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              jk = SlotsFacade.dm.getJungleKing();
              currCnt = jk.idxs.length;
              if (!(currCnt < 1)) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return");

             case 6:
              unlocAllNeedCnt = jk.tierCfg[jk.tierCfg.length - 1];
              hasUnlock = jk.total - currCnt;
              if (!(unlocAllNeedCnt <= hasUnlock)) {
                _context2.next = 10;
                break;
              }
              return _context2.abrupt("return");

             case 10:
              i = 0;

             case 11:
              if (!(i < currCnt)) {
                _context2.next = 26;
                break;
              }
              symbol = SlotsFacade.slots.GetSymbolByIdx(jk.idxs[i]);
              _context2.next = 15;
              return symbol.showJKAni();

             case 15:
              promiseArr = [];
              for (_i = 0; _i < _this3._lockItems.length; _i++) {
                item = _this3._lockItems[_i];
                promiseArr.push(item.minusCnt());
              }
              SlotsFacade.soundMgr.playEffect("number_add");
              _context2.next = 20;
              return Promise.all(promiseArr);

             case 20:
              hasUnlock++;
              if (!(unlocAllNeedCnt <= hasUnlock)) {
                _context2.next = 23;
                break;
              }
              return _context2.abrupt("break", 26);

             case 23:
              i++;
              _context2.next = 11;
              break;

             case 26:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  BladeMasterTokugawa_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07fc4IoGVtFNauGzErIlmrF", "BladeMasterTokugawa_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        afterProcessingCards: null
      },
      SetSubGameData: function SetSubGameData(data) {
        this._subGame = data;
      },
      GetSubGameData: function GetSubGameData() {
        return this._subGame;
      },
      processResultCards: function processResultCards(cards) {
        var result = cards.concat();
        var row = 8;
        var col = 5;
        var Cfg = this.getGameCfg();
        var wildIdMap = {
          1: 2001,
          101: 2101,
          102: 2102
        };
        for (var i = 0; i < result.length; i++) {
          var c = result[i];
          if (!Cfg.isWild(c)) continue;
          var crrRow = Math.floor(i / col);
          var upperIsScatter = false;
          var downIsScatter = false;
          upperIsScatter = 0 != crrRow && (Cfg.isWild(result[i - col]) && wildIdMap[result[i - col]]);
          downIsScatter = crrRow != row - 1 && Cfg.isWild(result[i + col]);
          0 == crrRow ? downIsScatter || (result[i] = wildIdMap[c]) : (4 == crrRow, upperIsScatter && (result[i] = wildIdMap[c]));
        }
        var jackpotInfo = this._gameInfo.jackpotInfo;
        if (jackpotInfo) for (var _i = 0; _i < jackpotInfo.jackpotIds.length; _i++) {
          var jpIdxs = jackpotInfo.idxs[_i];
          if (1 == jpIdxs.length) result[jpIdxs[0] - 1] = 2201; else if (2 == jpIdxs.length) {
            result[jpIdxs[0] - 1] = 2301;
            result[jpIdxs[1] - 1] = 2401;
          }
        }
        return result;
      },
      getMultipleWildIdxPairs: function getMultipleWildIdxPairs() {
        var ret = [];
        var cards = this.afterProcessingCards.concat();
        for (var i = 0; i < cards.length; i++) {
          var idx = i + 1;
          if (!this.isUnlockIdx(idx, true)) continue;
          var info = [];
          var element = cards[i];
          if (this.getGameCfg().isMultipleWild(element)) {
            if (element < 2e3) {
              info.push(idx);
              if (idx + 5 <= 40 && cards[i + 5] == element + 2e3) {
                info.push(idx + 5);
                cards[i + 5] = 0;
              }
            } else info.push(idx);
            ret.push(info);
          }
        }
        return ret;
      },
      getSpinData: function getSpinData() {
        return this._gameInfo;
      },
      getJungleKing: function getJungleKing() {
        if (this._gameInfo) return this._gameInfo.jungleKing;
        return this._deskInfo.jungleKing;
      },
      hasFree: function hasFree() {
        return this.GetTotalFree() > 0 && this.GetFreeTime() !== this.GetTotalFree() && this.GetFreeTime() > 0;
      },
      inFree: function inFree() {
        return this.GetTotalFree() > 0 && this.GetFreeTime() !== this.GetTotalFree();
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
        return this.GetTotalFree() > 0 && this.GetFreeTime() == this.GetTotalFree();
      },
      isLastEndFree: function isLastEndFree() {
        return 0 === this.GetFreeTime() && this.GetTotalFree() > 0;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._gameInfo.freeWinCoin;
      },
      getScatterIndexs: function getScatterIndexs() {
        if (this.triggerFreeCnt() > 0) return this._gameInfo.freeResult.freeInfo.scatterIdx.concat();
        return [];
      },
      isUnlockIdx: function isUnlockIdx(idx, isAfterUnlock) {
        if (idx > 20) return true;
        if (!this.hasFree()) return false;
        if (this.isFistTriggerFree()) return false;
        isAfterUnlock = isAfterUnlock || false;
        var unlockIdx = [];
        var jungleKing = this.getJungleKing();
        var unlockCnt = jungleKing.total;
        isAfterUnlock || (unlockCnt -= jungleKing.idxs.length);
        unlockCnt >= 3 && unlockIdx.push(17, 18, 19);
        unlockCnt >= 7 && unlockIdx.push(12, 13, 14);
        unlockCnt >= 11 && unlockIdx.push(7, 8, 9);
        unlockCnt >= 15 && unlockIdx.push(2, 3, 4);
        if (unlockIdx.includes(idx)) return true;
        return false;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  BladeMasterTokugawa_LockItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3783VEG/NOQ4fvvBMPDI51", "BladeMasterTokugawa_LockItem");
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
        tenmanType: 0,
        tenman: sp.Skeleton,
        mask: cc.Node,
        label: cc.Label,
        labelEffect: sp.Skeleton,
        wenzi: sp.Skeleton,
        taishaniconguang: sp.Skeleton,
        cnt: 0
      },
      onLoad: function onLoad() {
        this.reset();
      },
      reset: function reset() {
        this.tenman.node.active = false;
        this.mask.active = true;
        this.label.node.active = false;
        this.labelEffect.node.active = false;
        this.wenzi.node.active = false;
        this.taishaniconguang.node.active = false;
        this.cnt = 0;
      },
      show: function show(cnt) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.mask.opacity = 255;
              _this.reset();
              _this.cnt = cnt;
              _this.lock(cnt);

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      hide: function hide() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this2.unlock();

             case 2:
              _context2.next = 4;
              return new Promise(function(res) {
                cc.tween(_this2.mask).to(.5, {
                  opacity: 0
                }).call(function() {
                  res();
                }).start();
              });

             case 4:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      lock: function lock(cnt) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3.label.string = cnt.toString();
              _context3.next = 3;
              return new Promise(function(res) {
                cc.tween(_this3.node).call(function() {
                  SlotsFacade.soundMgr.playEffect("vine1");
                  _this3.tenman.node.active = true;
                  _this3.tenman.setAnimation(0, [ "animation1", "animation2" ][_this3.tenmanType], false);
                  _this3.tenman.setCompleteListener(function() {
                    _this3.tenman.setCompleteListener(null);
                    _this3.tenman.setAnimation(0, [ "animation3", "animation4" ][_this3.tenmanType], true);
                  });
                }).delay(.7).call(function() {
                  SlotsFacade.soundMgr.playEffect("number_appear");
                  _this3.labelEffect.node.active = true;
                  _this3.labelEffect.setAnimation(0, "animation", false);
                  _this3.labelEffect.setCompleteListener(function() {
                    _this3.labelEffect.setCompleteListener(null);
                    _this3.labelEffect.node.active = false;
                  });
                }).delay(.5).call(function() {
                  _this3.label.node.active = true;
                  _this3.wenzi.node.active = true;
                  _this3.wenzi.setAnimation(0, "animation1", false);
                  _this3.wenzi.setCompleteListener(function() {
                    _this3.wenzi.setCompleteListener(null);
                    _this3.wenzi.setAnimation(0, "animation3", true);
                  });
                }).delay(.5).call(function() {
                  res();
                }).start();
              });

             case 3:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      unlock: function unlock() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return SlotsFacade.delayTime(.5);

             case 2:
              _this4.labelEffect.node.active = true;
              _this4.labelEffect.setAnimation(0, "animation", false);
              _this4.labelEffect.setCompleteListener(function() {
                _this4.labelEffect.node.active = false;
              });
              _this4.label.node.active = false;
              _this4.wenzi.node.active = false;
              SlotsFacade.soundMgr.playEffect("vine2");
              _context4.next = 10;
              return new Promise(function(res) {
                _this4.tenman.node.active = true;
                _this4.tenman.setAnimation(0, [ "animation1_1", "animation2_1" ][_this4.tenmanType], false);
                _this4.tenman.setCompleteListener(function() {
                  _this4.tenman.node.active = false;
                  res();
                });
              });

             case 10:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      setNeedCnt: function setNeedCnt(cnt, ani) {
        if (cnt > 0) {
          this.cnt = cnt;
          this.label.node.active = true;
          this.label.string = cnt.toString();
          this.wenzi.node.active = true;
          this.wenzi.setAnimation(0, "animation3", true);
          this.tenman.node.active = true;
          this.tenman.setAnimation(0, [ "animation3", "animation4" ][this.tenmanType], true);
        } else this.node.active = false;
      },
      minusCnt: function minusCnt() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              if (!(_this5.cnt < 1)) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");

             case 2:
              if (!(1 == _this5.cnt)) {
                _context5.next = 8;
                break;
              }
              _this5.cnt--;
              _context5.next = 6;
              return _this5.hide();

             case 6:
              _context5.next = 17;
              break;

             case 8:
              _this5.cnt--;
              _this5.label.string = _this5.cnt.toString();
              _this5.labelEffect.node.active = true;
              _this5.labelEffect.setAnimation(0, "animation", false);
              _this5.labelEffect.setCompleteListener(function() {
                _this5.labelEffect.setCompleteListener(null);
                _this5.labelEffect.node.active = false;
              });
              _this5.taishaniconguang.node.active = true;
              _this5.taishaniconguang.setAnimation(0, "animation", false);
              _this5.taishaniconguang.setCompleteListener(function() {
                _this5.taishaniconguang.setCompleteListener(null);
                _this5.taishaniconguang.node.active = false;
              });
              SlotsFacade.delayTime(.5);

             case 17:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  BladeMasterTokugawa_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a812d9pRvlMF7LqaNUegLhl", "BladeMasterTokugawa_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this.InitCommComponent();
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node).addComponent("BladeMasterTokugawa_MainPanel");
        this.flowCtrl = this.addComponent("BladeMasterTokugawa_FlowCtrl");
        this.soundMgr = this.addComponent("BladeMasterTokugawa_Sound");
        this.popup = this.mainPanel.popup_node.addComponent("BladeMasterTokugawa_Popup");
        this.freeGame = this.mainPanel.slots_free.getComponent("BladeMasterTokugawa_FreeGame");
        this.topCmp = cc.vv.gameData.GetTopScript();
        this.bottomCmp = cc.vv.gameData.GetBottomScript();
        this.slots = cc.vv.gameData.GetSlotsScript();
      },
      delayTime: function delayTime(time) {
        var _this = this;
        return new Promise(function(res, rej) {
          _this.scheduleOnce(function() {
            res();
          }, time);
        });
      },
      onDestroy: function onDestroy() {
        window.SlotsFacade = null;
        this.dm = null;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  BladeMasterTokugawa_MainPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4efebwt4l9OPaFZq7dTWqhW", "BladeMasterTokugawa_MainPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
        this.bg_free = this.node.getChildByName("bg_free");
        this.slots = this.node.getChildByName("slots");
        this.slots_free = this.slots.getChildByName("free_frame");
        this.character = this.slots.getChildByName("character");
        this.extra_wild_game_node = this.slots.getChildByName("extra_wild_game_node");
        this.popup_node = this.node.getChildByName("popup_node");
        this.transition_node = this.node.getChildByName("transition_node");
        this.spineSceneTransition = this.transition_node.getChildByName("spine").getComponent(sp.Skeleton);
      },
      showBg: function showBg(isFree) {
        this.bg_free.active = isFree;
        this.character.active = !isFree;
      },
      showSceneTransition: function showSceneTransition(cmpHandler) {
        var _this = this;
        SlotsFacade.soundMgr.playEffect("wow");
        this.spineSceneTransition.node.active = true;
        this.spineSceneTransition.setAnimation(0, "skill", false);
        this.spineSceneTransition.setCompleteListener(function() {
          _this.spineSceneTransition.setCompleteListener(null);
          _this.spineSceneTransition.node.active = false;
          cmpHandler && cmpHandler();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  BladeMasterTokugawa_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47a6fRsND5P/5LhRjLXy++4", "BladeMasterTokugawa_Popup");
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
      onLoad: function onLoad() {
        this.bg = this.node.getChildByName("bg");
      },
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
              SlotsFacade.soundMgr.playEffect("free_dialog_collect_show");
              _this.showBg(true);
              panel = _this.node.getChildByName("panel_win_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              okBtn = panel.getChildByName("btn_ok");
              okBtn.getComponent(cc.Button).interactable = true;
              _context.next = 10;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                var title = cc.find("theme171_free_more_you_win", panel);
                title.scale = 0;
                cc.tween(title).delay(.2).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                var label = cc.find("label", panel);
                label.scale = 0;
                cc.tween(label).delay(.2).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                var handler = function handler() {
                  okBtn.off(cc.Node.EventType.TOUCH_END);
                  okBtn.getComponent(cc.Button).interactable = false;
                  SlotsFacade.soundMgr.playEffect("common_click");
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
                cc.vv.gameData.checkAutoPlay(okBtn, handler);
                okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                  okBtn.stopAllActions();
                  handler();
                });
              });

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showJpWinGold: function showJpWinGold(jpType, goldNumb) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var panel, titleSpine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              SlotsFacade.soundMgr.playEffect("jp_popup_in");
              _this2.showBg(true);
              panel = _this2.node.getChildByName("panel_win_jp_coin");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent("LabelRollCmp").startRoll(0, goldNumb);
              panel.getChildByName("bg").getComponent("ImgSwitchCmp").setIndex(jpType - 1);
              titleSpine = panel.getChildByName("spine_title").getComponent(sp.Skeleton);
              titleSpine.setAnimation(0, "animation" + [ 0, 5, 4, 3, 1, 2 ][jpType], true);
              _context2.next = 11;
              return new Promise(function(res) {
                cc.tween(panel).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(panel).delay(4).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this2.showBg(false);
                  panel.active = false;
                  SlotsFacade.soundMgr.playEffect("popup_out");
                  res();
                }).start();
              });

             case 11:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWinFreeCnt: function showWinFreeCnt(cnt, isFirstTrigger) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var panel, okBtn;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3.showBg(true);
              panel = _this3.node.getChildByName("panel_win_free_cnt");
              panel.active = true;
              panel.scale = 0;
              panel.getChildByName("label").getComponent(cc.Label).string = cnt.toString();
              okBtn = panel.getChildByName("btn_ok");
              okBtn.getComponent(cc.Button).interactable = true;
              okBtn.active = isFirstTrigger;
              _context3.next = 10;
              return new Promise(function(res) {
                var tw = cc.tween(panel);
                tw = tw.to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                });
                if (isFirstTrigger) {
                  SlotsFacade.soundMgr.playEffect("free_dialog_start_show");
                  var handler = function handler() {
                    SlotsFacade.soundMgr.playEffect("common_click");
                    okBtn.off(cc.Node.EventType.TOUCH_END);
                    okBtn.getComponent(cc.Button).interactable = false;
                    cc.tween(panel).to(.5, {
                      scale: 0
                    }, {
                      easing: "backIn"
                    }).call(function() {
                      _this3.showBg(false);
                      panel.active = false;
                      SlotsFacade.soundMgr.playEffect("popup_out");
                      res();
                    }).start();
                  };
                  cc.vv.gameData.checkAutoPlay(okBtn, handler);
                  okBtn.on(cc.Node.EventType.TOUCH_END, function() {
                    okBtn.stopAllActions();
                    handler();
                  });
                } else {
                  SlotsFacade.soundMgr.playEffect("free_dialog_more_show");
                  tw = tw.delay(1).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this3.showBg(false);
                    panel.active = false;
                    res();
                  });
                  cc.find("label", panel).scale = 0;
                  cc.tween(cc.find("label", panel)).delay(.2).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).start();
                }
                tw.start();
              });

             case 10:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  BladeMasterTokugawa_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf1e1frK2pJF4jXt+9Ivfy+", "BladeMasterTokugawa_Reel");
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
        bg: cc.Node
      },
      Init: function Init(idx, nCount, node) {
        this._super(idx, nCount, node);
        this.bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        this._super(bShow, name);
        if (bShow) {
          var node = cc.find("mask/" + name, this.node);
          if (node) {
            node.active = bShow;
            var spine = node.getComponent(sp.Skeleton);
            spine.setAnimation(0, "animation1", false);
          }
        }
      },
      changeReelBg: function changeReelBg(isSpecial) {
        var cmp = this.bg.getComponent("ImgSwitchCmp");
        if (!cmp) return;
        isSpecial ? cmp.setIndex(1) : cmp.setIndex(0);
      },
      playReelStop: function playReelStop() {
        this._super();
        for (var i = 0; i < this._symbols.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              if (info.isStop && info.id.includes(item.GetShowId())) {
                this.changeReelBg(true);
                return;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  BladeMasterTokugawa_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8413b5DEmVLzZOc+3yshOTx", "BladeMasterTokugawa_Slots");
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
      properties: {},
      Init: function Init() {
        this._super();
      },
      StartMove: function StartMove() {
        this._super();
        0 == SlotsFacade.dm.GetTotalFree() && SlotsFacade.soundMgr.playBgm();
        this.resetReelBg();
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this = this;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          if (!SlotsFacade.dm.isUnlockIdx(i + 1, false)) continue;
          var id = cards[i];
          var col = i % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var needCheekAddSpeed = !SlotsFacade.dm.hasFree() || SlotsFacade.dm.isFistTriggerFree();
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
            for (var _i = 0; _i < reelResults.length; _i++) {
              var item = _this._reels[_i];
              var reelRes = reelResults[_i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              needCheekAddSpeed && haveCount >= triggerCount - 1 && stateInfo.counts[_i] > 0 && (stateInfo.isAnt = true);
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
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        var cards = SlotsFacade.dm.processResultCards(msg.resultCards);
        SlotsFacade.dm.afterProcessingCards = cards.concat();
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
      },
      OnSpinEnd: function OnSpinEnd() {
        SlotsFacade.flowCtrl.spinEnd();
      },
      hasScatter: function hasScatter(colIdx) {
        var scatterId = cc.vv.gameData.getGameCfg().scatterId;
        var sysResult = this._reels[colIdx]._symbols;
        for (var j = 0; j < 4; j++) if (sysResult[j].GetShowId() == scatterId) return true;
        return false;
      },
      ReconnectShow: function ReconnectShow() {
        this.scheduleOnce(function() {
          SlotsFacade.flowCtrl.enterRoom();
        });
      },
      showSlotsState: function showSlotsState(isFree, ani, time, delayTime) {
        for (var i = 1; i < 4; i++) {
          var reel = this._reels[i];
          if (isFree) if (ani) {
            cc.tween(reel.GetResizeHeightObjs()[0]).delay(delayTime).to(time, {
              height: 760
            }).start();
            cc.tween(reel.GetResizeHeightObjs()[1]).delay(delayTime).to(time, {
              height: 760
            }).start();
          } else {
            reel.GetResizeHeightObjs()[0].height = 760;
            reel.GetResizeHeightObjs()[1].height = 760;
          } else {
            reel.GetResizeHeightObjs()[0].height = 380;
            reel.GetResizeHeightObjs()[1].height = 380;
          }
        }
      },
      setBorderVisible: function setBorderVisible(boo) {
        var frame = this.node.getChildByName("reels_frame");
        frame.active = boo;
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
                item.playWinAnimation();
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
      changeWildMultiple: function changeWildMultiple() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var wildPair;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              wildPair = SlotsFacade.dm.getMultipleWildIdxPairs();
              wildPair.forEach(function(element) {
                var symbol = _this3.GetSymbolByIdx(element[element.length - 1]);
                symbol.canPlayWinMultiple = true;
                symbol.showMultiple(true, 1, 1 == element.length);
              });
              if (!(wildPair && wildPair.length)) {
                _context2.next = 6;
                break;
              }
              SlotsFacade.soundMgr.playEffect("wild");
              _context2.next = 6;
              return SlotsFacade.delayTime(.5);

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      getSymbolsByServerIds: function getSymbolsByServerIds(ids) {
        var _this4 = this;
        var ret = [];
        ids.forEach(function(element) {
          ret.push(_this4.GetSymbolByIdx(element));
        });
        return ret;
      },
      resetReelBg: function resetReelBg() {
        this._reels.forEach(function(element) {
          element.changeReelBg(false);
        });
      },
      clearFreeSymbols: function clearFreeSymbols() {
        for (var i = 0; i < this._reels.length; i++) {
          var symbols = this._reels[i]._symbols;
          for (var j = 0; j < symbols.length; j++) j > 3 && symbols[j].StartMove();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  BladeMasterTokugawa_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1379X2K21AvoWTmFmPReZl", "BladeMasterTokugawa_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/BladeMasterTokugawa/",
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
      playFreeBgm: function playFreeBgm() {
        this.playBgm("freegame_bgm");
      }
    });
    cc._RF.pop();
  }, {} ],
  BladeMasterTokugawa_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec01fUktKJNcI5tUjRca9w2", "BladeMasterTokugawa_symbol");
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
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        canPlayWinMultiple: false,
        isSingle: false
      },
      StartMove: function StartMove() {
        this._super();
        this.showMultiple();
      },
      showJKAni: function showJKAni() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var id, cfg, nodeSp;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(4 != _this._id)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              _this._showNode && (_this._showNode.active = false);
              id = _this._id;
              cfg = cc.vv.gameData.getGameCfg();
              if (!(cfg.symbol[id] && cfg.symbol[id].win_node)) {
                _context.next = 13;
                break;
              }
              _this._showNode = cc.find(cfg.symbol[id].win_node, _this.node);
              _this._showNode.active = true;
              if (!cfg.symbol[id].win_ani) {
                _context.next = 13;
                break;
              }
              nodeSp = _this._showNode.getComponent(sp.Skeleton);
              if (!nodeSp) {
                _context.next = 13;
                break;
              }
              _context.next = 13;
              return new Promise(function(res) {
                SlotsFacade.soundMgr.playEffect("sbonus_notify");
                nodeSp.setAnimation(0, cfg.symbol[id].unlockAni, false);
                nodeSp.setCompleteListener(function() {
                  nodeSp.setCompleteListener(null);
                  res();
                });
              });

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playWinAnimation: function playWinAnimation() {
        this._super();
        this.canPlayWinMultiple && this.showMultiple(true, 2, this.isSingle);
      },
      showMultiple: function showMultiple(visible, type, isSingle) {
        if (visible) {
          var id = this.GetShowId();
          if (![ 101, 102, 2101, 2102 ].includes(id)) return;
          this.isSingle = isSingle;
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var spine = null;
          spine = 101 == id || 2101 == id ? aniNode.getChildByName("multiple2").getComponent(sp.Skeleton) : aniNode.getChildByName("multiple3").getComponent(sp.Skeleton);
          spine.node.active = true;
          isSingle ? spine.setAnimation(0, "animation2_".concat(type), 2 == type) : spine.setAnimation(0, "animation1_".concat(type), 2 == type);
        } else {
          this.node.getChildByName("multiple2").active = false;
          this.node.getChildByName("multiple3").active = false;
          this.canPlayWinMultiple = false;
        }
      },
      playJp: function playJp(jpType, isBig) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var aniNode, topShowNode, bgName, bgSpine, flashName, flashSpine, labelName, labelSpine;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._showNode && (_this2._showNode.active = false);
              aniNode = _this2.setAnimationToTop(true);
              aniNode.active = true;
              topShowNode = cc.find("w_jp", aniNode);
              topShowNode.active = true;
              bgName = "bg".concat(isBig ? "2" : "", "_").concat(jpType);
              bgSpine = topShowNode.getChildByName(bgName).getComponent(sp.Skeleton);
              bgSpine.node.active = true;
              bgSpine.setAnimation(0, "animation", true);
              flashName = "flash".concat(isBig ? "2" : "1");
              flashSpine = topShowNode.getChildByName(flashName).getComponent(sp.Skeleton);
              flashSpine.node.active = true;
              _context2.next = 14;
              return new Promise(function(res) {
                flashSpine.setAnimation(0, "animation", false);
                flashSpine.setCompleteListener(function() {
                  flashSpine.setCompleteListener(null);
                  flashSpine.node.active = false;
                  res();
                });
              });

             case 14:
              labelName = "label".concat(isBig ? "2" : "", "_").concat(jpType);
              labelSpine = topShowNode.getChildByName(labelName).getComponent(sp.Skeleton);
              labelSpine.node.active = true;
              labelSpine.setAnimation(0, "animation", true);
              _context2.next = 20;
              return SlotsFacade.delayTime(1.5);

             case 20:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      jpToWild: function jpToWild(isBig) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var aniNode, topShowNode, flashName, flashSpine;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3.canPlayWinMultiple = true;
              _this3.setAnimationToTop(false);
              aniNode = _this3.setAnimationToTop(true);
              aniNode.active = true;
              topShowNode = cc.find("w_jp", aniNode);
              topShowNode.active = true;
              flashName = "flash".concat(isBig ? "2" : "1");
              flashSpine = topShowNode.getChildByName(flashName).getComponent(sp.Skeleton);
              flashSpine.node.active = true;
              _context3.next = 11;
              return new Promise(function(res) {
                flashSpine.setAnimation(0, "animation", false);
                flashSpine.setCompleteListener(function() {
                  flashSpine.setCompleteListener(null);
                  flashSpine.node.active = false;
                  res();
                });
              });

             case 11:
              _this3.showMultiple(true, 1, !isBig);

             case 12:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "BladeMasterTokugawa_Cfg", "BladeMasterTokugawa_FlowCtrl", "BladeMasterTokugawa_FreeGame", "BladeMasterTokugawa_GameData", "BladeMasterTokugawa_LockItem", "BladeMasterTokugawa_Logic", "BladeMasterTokugawa_MainPanel", "BladeMasterTokugawa_Popup", "BladeMasterTokugawa_Reel", "BladeMasterTokugawa_Slots", "BladeMasterTokugawa_Sound", "BladeMasterTokugawa_symbol" ]);