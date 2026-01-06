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
  TheMammoth_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21bd31rVotO07cHLuAHvkrn", "TheMammoth_Cfg");
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
        node: "symbol_1",
        win_node: "animation_1",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3",
        win_node: "animation_3",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        win_node: "animation_4",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5",
        win_node: "animation_5",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6",
        win_node: "animation_6",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7",
        win_node: "animation_7",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8"
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9"
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10"
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11"
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12"
      }), _defineProperty(_symbol, 13, {
        node: "symbol_13"
      }), _defineProperty(_symbol, 14, {
        node: "symbol_14",
        win_node: "animation_14",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _symbol),
      puzzleCfg: {
        atlas: "puzzle_10",
        bg: "theme_store_puzzle10_bg",
        full: "theme_store_puzzle10_full",
        pieces: [ "theme_store_puzzle_10_1", "theme_store_puzzle_10_2", "theme_store_puzzle_10_3", "theme_store_puzzle_10_4", "theme_store_puzzle_10_5", "theme_store_puzzle_10_6", "theme_store_puzzle_10_7", "theme_store_puzzle_10_8", "theme_store_puzzle_10_9", "theme_store_puzzle_10_10", "theme_store_puzzle_10_11", "theme_store_puzzle_10_12" ]
      },
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TheMammoth_Slots",
        Reels: "TheMammoth_Reel",
        Symbols: "TheMammoth_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 124,
        height: 94
      },
      randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      wildId: 1,
      scatterIds: [ 2, 14 ],
      kuang: "kuang",
      autoModelDelay: .8,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      helpItems: [ "games/TheMammoth/prefab/help_item_1", "games/TheMammoth/prefab/help_item_2", "games/TheMammoth/prefab/help_item_3" ],
      commEffect: {
        path: "games/TheMammoth/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ],
        win3: [ "win3", "win3end" ],
        win4: [ "win4", "win4end" ]
      },
      bounceInfo: {
        distance: 30,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 2, 14 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "",
        path: "games/TheMammoth/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter",
        antSound: "reel_notify",
        antSpeed: 1500
      } ],
      normalBgm: "base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheMammoth_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cea0bLPFPVAFa9N8OVwiSEz", "TheMammoth_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.InitCommComponent();
        var wheel_script = cc.find("safe_node/wheel", this.node).getComponent("TheMammoth_Wheel");
        cc.vv.gameData.GetSlotsScript().setWheelScripts(wheel_script);
        this.wheel = wheel_script;
        this.topCmp = cc.vv.gameData.GetTopScript();
        this.bottomCmp = cc.vv.gameData.GetBottomScript();
        this.slots = cc.vv.gameData.GetSlotsScript();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
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
      onUpdateBet: function onUpdateBet() {
        cc.vv.gameData.GetSlotsScript().updateFreePanel(cc.vv.gameData.GetBetIdx() - 1);
      },
      playPrizePoolAnimation: function playPrizePoolAnimation() {
        var grand = cc.find("safe_node/LMSlots_PrizePool_1/prizePool_Grand", this.node);
        grand.opacity = 255;
        var major = cc.find("safe_node/LMSlots_PrizePool_1/prizePool_Major", this.node);
        major.opacity = 0;
        var minor = cc.find("safe_node/LMSlots_PrizePool_1/prizePool_Minor", this.node);
        minor.opacity = 0;
        grand.runAction(cc.repeatForever(cc.sequence(cc.delayTime(4), cc.fadeOut(.5), cc.delayTime(8.5), cc.fadeIn(.5))));
        major.runAction(cc.repeatForever(cc.sequence(cc.delayTime(4), cc.fadeIn(.5), cc.delayTime(4), cc.fadeOut(.5), cc.delayTime(4.5))));
        minor.runAction(cc.repeatForever(cc.sequence(cc.delayTime(8.5), cc.fadeIn(.5), cc.delayTime(4), cc.fadeOut(.5))));
      },
      start: function start() {
        this._super();
        this.playPrizePoolAnimation();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheMammoth_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93daafj7r1GtI9wsXHePOZ0", "TheMammoth_Reel");
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
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._super();
      },
      playReelStop: function playReelStop() {
        for (var i = 0; i < this._originResult.length; i++) {
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
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound + (this._reelIdx + 1) : "";
                hasSymbol = true;
              } else reelStopEffect = _info.reelStopSound ? _info.reelStopSound : "";
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          hasSymbol && (reelStopEffect = symbolEffect);
          cc.vv.AudioManager.playEff(this._cfg.reelStateInfo[0].path, reelStopEffect, true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheMammoth_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad542MnbZhAPoKJHJ1pLs4c", "TheMammoth_Slots");
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
    var WheelItemType = {
      FreeGame: 1,
      Jackpot: 2,
      FreeGameMult: 3
    };
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _wheel_script: null,
        _wheel_result: null,
        _curFreeTimesPanel: null
      },
      Init: function Init() {
        var _this = this;
        this._super();
        this.updateFreePanel(cc.vv.gameData.GetBetIdx() - 1);
        cc.winSize.height / cc.winSize.width > 2.1 ? cc.find("logo", this.node.parent).active = true : cc.find("logo", this.node.parent).active = false;
        this.node.parent.parent.getComponent("LMSlots_Puzzle").setCallback(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(freeInfo, chipGame) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                cc.vv.gameData.SetTotalFree(freeInfo.freeCnt);
                cc.vv.gameData.SetFreeTime(freeInfo.freeCnt);
                _this.cutScenesElephant();
                _context.next = 5;
                return cc.vv.gameData.awaitTime(1.5);

               case 5:
                _this.ShowGameview(true);
                _this.changeFreeBg(true);
                _context.next = 9;
                return cc.vv.gameData.awaitTime(1.5);

               case 9:
                _context.next = 11;
                return _this.popFreeDialog(true);

               case 11:
                cc.vv.AudioManager.playBgm("games/TheMammoth/", "free_bgm", true);
                _this.CanDoNextRound();

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
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        if (this._curFreeTimesPanel) {
          cc.find("allTimes", this._curFreeTimesPanel).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
          cc.find("curTimes", this._curFreeTimesPanel).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime();
        }
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var deskInfo, wheelGame, cfg;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              wheelGame = deskInfo.history.wheelGames[cc.vv.gameData.GetBetIdx() - 1];
              if (!(1 === wheelGame.state)) {
                _context2.next = 42;
                break;
              }
              _context2.next = 5;
              return new Promise(function(success) {
                _this2._wheel_script.enterWheelGame(success, wheelGame.items);
              });

             case 5:
              cfg = wheelGame.items[_this2._wheel_result.itemId - 1];
              if (!(cfg.type === WheelItemType.Jackpot)) {
                _context2.next = 16;
                break;
              }
              _this2.cutScenesIce();
              _context2.next = 10;
              return cc.vv.gameData.awaitTime(1.5);

             case 10:
              _this2._wheel_script.reset();
              _this2._wheel_script.node.active = false;
              cc.vv.gameData.AddCoin(_this2._wheel_result.jackpot.value);
              _this2.ShowBottomWin(_this2._wheel_result.jackpot.value, _this2._wheel_result.jackpot.value, true, function() {
                _this2.CanDoNextRound();
              });
              _context2.next = 40;
              break;

             case 16:
              if (!(cfg.type === WheelItemType.FreeGame)) {
                _context2.next = 29;
                break;
              }
              _this2.cutScenesElephant();
              _this2.ShowGameview(true);
              _this2.changeFreeBg(true);
              _context2.next = 22;
              return cc.vv.gameData.awaitTime(1.5);

             case 22:
              _this2._wheel_script.reset();
              _this2._wheel_script.node.active = false;
              _context2.next = 26;
              return _this2.popFreeDialog(true);

             case 26:
              _this2.CanDoNextRound();
              _context2.next = 40;
              break;

             case 29:
              if (!(cfg.type === WheelItemType.FreeGameMult)) {
                _context2.next = 40;
                break;
              }
              _this2.cutScenesElephant();
              _this2.ShowGameview(true);
              _this2.changeFreeBg(false, cfg.mult);
              _context2.next = 35;
              return cc.vv.gameData.awaitTime(1.5);

             case 35:
              _this2._wheel_script.reset();
              _this2._wheel_script.node.active = false;
              _context2.next = 39;
              return _this2.popFreeDialog(false, false, cfg.mult);

             case 39:
              _this2.CanDoNextRound();

             case 40:
              _context2.next = 43;
              break;

             case 42:
              if (cc.vv.gameData.GetFreeTime() > 0) {
                1 === deskInfo.addMult ? _this2.changeFreeBg(true) : _this2.changeFreeBg(false, deskInfo.addMult);
                _this2.ShowGameview(true);
                _this2.CanDoNextRound();
              } else _this2.ShowGameview(false);

             case 43:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3._super(msg);
              if (_this3._gameInfo.mammothGame) {
                _this3.SetStopTime(3);
                _this3.triggerRandomGame();
              }
              cc.vv.gameData.getDeskInfo().history.wheelGames[cc.vv.gameData.GetBetIdx() - 1] = _this3._gameInfo.wheelGame;

             case 3:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return 1 === this._gameInfo.wheelGame.state;
      },
      CheckExtraFreeGame: function CheckExtraFreeGame() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      ShowWinTrace: function ShowWinTrace() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
                  var allWinIdx, i, item, idx, _i, val, hasWild, key, symbol, _key, _symbol;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      allWinIdx = [];
                      for (i = 0; i < _this4._gameInfo.zjLuXian.length; i++) {
                        item = _this4._gameInfo.zjLuXian[i];
                        for (idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
                      }
                      if (_this4._gameInfo.scatterZJLuXian && _this4._gameInfo.scatterZJLuXian.indexs) for (_i = 0; _i < _this4._gameInfo.scatterZJLuXian.indexs.length; _i++) {
                        val = _this4._gameInfo.scatterZJLuXian.indexs[_i];
                        allWinIdx[val] = 1;
                      }
                      if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                        _context4.next = 10;
                        break;
                      }
                      hasWild = false;
                      for (key in allWinIdx) {
                        symbol = _this4.GetSymbolByIdx(Number(key));
                        if (symbol && symbol.GetShowId() === _this4._cfg.wildId) {
                          hasWild = true;
                          symbol.playWildAnimation(_this4._gameInfo.wildMult);
                        }
                      }
                      if (!hasWild) {
                        _context4.next = 10;
                        break;
                      }
                      cc.vv.AudioManager.playEff("games/TheMammoth/", "wild_land_2", true);
                      _context4.next = 10;
                      return cc.vv.gameData.awaitTime(1.5);

                     case 10:
                      for (_key in allWinIdx) {
                        _symbol = _this4.GetSymbolByIdx(Number(_key));
                        if (_symbol) {
                          cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && _symbol.GetShowId() === _this4._cfg.wildId || _symbol.playWinAnimation();
                          _symbol.ShowKuang();
                        }
                      }
                      success();

                     case 12:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x3) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _context7.next = 2;
              return _this5.ShowWinTrace();

             case 2:
              _this5.playAddFreeTimesAnimation();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this5.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                   case 0:
                    if (!_this5.CheckEnterFreeGame()) {
                      _context6.next = 4;
                      break;
                    }
                    _this5.triggerFreeGame();
                    _context6.next = 15;
                    break;

                   case 4:
                    if (!_this5.CheckExtraFreeGame()) {
                      _context6.next = 8;
                      break;
                    }
                    _this5.triggerExtraFreeGame();
                    _context6.next = 15;
                    break;

                   case 8:
                    if (!_this5.CheckExitFreeGame()) {
                      _context6.next = 12;
                      break;
                    }
                    _this5.triggerExitFreeGame();
                    _context6.next = 15;
                    break;

                   case 12:
                    _context6.next = 14;
                    return cc.vv.gameData.awaitTime(.1);

                   case 14:
                    _this5.CanDoNextRound();

                   case 15:
                   case "end":
                    return _context6.stop();
                  }
                }, _callee6);
              })));

             case 7:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      playAddFreeTimesAnimation: function playAddFreeTimesAnimation() {
        var _this6 = this;
        if (this._gameInfo.updateWheel) {
          var animationIndex = 1;
          3 === this._gameInfo.updateWheel.mult ? animationIndex = 2 : 5 === this._gameInfo.updateWheel.mult && (animationIndex = 3);
          var endPos = cc.find("free_panel/free_" + animationIndex + "/times", this.node.parent).convertToWorldSpaceAR(cc.v2(0, 0));
          endPos = this.node.parent.convertToNodeSpaceAR(endPos);
          cc.vv.AudioManager.playEff("games/TheMammoth/", "gem", true);
          var spine = cc.instantiate(cc.find("zhuanshi_01", this.node.parent));
          spine.active = true;
          var position = null;
          var reel = this._reels[4];
          for (var i = 0; i < this._cfg.row; i++) {
            var symbol = reel.GetSymbolByRow(i);
            if (14 === symbol.GetShowId()) {
              position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
              position = this.node.parent.convertToNodeSpaceAR(position);
              break;
            }
          }
          spine.position = position;
          spine.parent = this.node.parent;
          spine.getComponent(sp.Skeleton).setAnimation(0, "animation" + animationIndex, false);
          spine.getComponent(sp.Skeleton).setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            if (name === "animation" + animationIndex) {
              spine.getComponent(sp.Skeleton).clearTracks();
              spine.getComponent(sp.Skeleton).setAnimation(0, "animation" + animationIndex + "_1", false);
              spine.runAction(cc.sequence(cc.moveTo(.5, endPos), cc.callFunc(function() {
                var shuzizengjia = cc.instantiate(cc.find("shuzizengjia_01", _this6.node.parent));
                shuzizengjia.active = true;
                shuzizengjia.parent = _this6.node.parent;
                shuzizengjia.position = endPos;
                shuzizengjia.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                shuzizengjia.getComponent(sp.Skeleton).setCompleteListener(function() {
                  shuzizengjia.removeFromParent();
                });
                _this6.updateFreePanel(cc.vv.gameData.GetBetIdx() - 1);
                spine.removeFromParent();
              })));
            }
          });
        }
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var i, card, symbol, cfg;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              for (i = 0; i < _this7._gameInfo.resultCards.length; i++) {
                card = _this7._gameInfo.resultCards[i];
                if (2 === card || 14 === card) {
                  symbol = _this7.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              cc.vv.AudioManager.playEff("games/TheMammoth/", "bell", true);
              _context8.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _this7.cutScenesIce();
              _context8.next = 8;
              return cc.vv.gameData.awaitTime(.5);

             case 8:
              _context8.next = 10;
              return new Promise(function(success) {
                _this7._wheel_script.enterWheelGame(success, _this7._gameInfo.wheelGame.items);
              });

             case 10:
              cfg = _this7._gameInfo.wheelGame.items[_this7._wheel_result.itemId - 1];
              if (!(cfg.type === WheelItemType.Jackpot)) {
                _context8.next = 21;
                break;
              }
              _this7.cutScenesIce();
              _context8.next = 15;
              return cc.vv.gameData.awaitTime(1.5);

             case 15:
              cc.vv.gameData.AddCoin(_this7._wheel_result.jackpot.value);
              _this7._wheel_script.reset();
              _this7._wheel_script.node.active = false;
              _this7.ShowBottomWin(_this7._wheel_result.jackpot.value, _this7._wheel_result.jackpot.value, true, function() {
                _this7.CanDoNextRound();
              });
              _context8.next = 49;
              break;

             case 21:
              if (!(cfg.type === WheelItemType.FreeGame)) {
                _context8.next = 36;
                break;
              }
              _this7.cutScenesElephant();
              _this7.Backup();
              _this7.ShowGameview(true);
              _this7.changeFreeBg(true);
              _context8.next = 28;
              return cc.vv.gameData.awaitTime(1.5);

             case 28:
              _this7._wheel_script.reset();
              _this7._wheel_script.node.active = false;
              _context8.next = 32;
              return _this7.popFreeDialog(true);

             case 32:
              cc.vv.AudioManager.playBgm("games/TheMammoth/", "free_bgm", true);
              _this7.CanDoNextRound();
              _context8.next = 49;
              break;

             case 36:
              if (!(cfg.type === WheelItemType.FreeGameMult)) {
                _context8.next = 49;
                break;
              }
              _this7.cutScenesElephant();
              _this7.Backup();
              _this7.ShowGameview(true);
              _this7.changeFreeBg(false, cfg.mult);
              _context8.next = 43;
              return cc.vv.gameData.awaitTime(1.5);

             case 43:
              _this7._wheel_script.reset();
              _this7._wheel_script.node.active = false;
              _context8.next = 47;
              return _this7.popFreeDialog(false, false, cfg.mult);

             case 47:
              cc.vv.AudioManager.playBgm("games/TheMammoth/", "free_bgm", true);
              _this7.CanDoNextRound();

             case 49:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      triggerExtraFreeGame: function triggerExtraFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this8._bottomScript.ShowBtnsByState("stopped");
              for (i = 0; i < _this8._gameInfo.resultCards.length; i++) {
                card = _this8._gameInfo.resultCards[i];
                if (2 === card || 14 === card) {
                  symbol = _this8.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              cc.vv.AudioManager.playEff("games/TheMammoth/", "bell", true);
              _context9.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context9.next = 7;
              return _this8.popFreeDialog(false, true);

             case 7:
              _this8.CanDoNextRound();

             case 8:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _this9._bottomScript.ShowBtnsByState("moveing_1");
              _context10.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context10.next = 5;
              return _this9.popFreeResultDialog();

             case 5:
              _this9.cutScenesElephant();
              _this9._curFreeTimesPanel = null;
              _context10.next = 9;
              return cc.vv.gameData.awaitTime(1.5);

             case 9:
              _this9.updateFreePanel(cc.vv.gameData.GetBetIdx() - 1);
              _this9.ShowGameview(false);
              _this9.Resume();
              _this9.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this9.CanDoNextRound();
              });

             case 13:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      setWheelScripts: function setWheelScripts(script) {
        this._wheel_script = script;
      },
      setWheelResult: function setWheelResult(result) {
        this._wheel_result = result;
      },
      cutScenesIce: function cutScenesIce() {
        cc.vv.AudioManager.playEff("games/TheMammoth/", "bonus_transiton", true);
        var qp_02 = cc.find("qp_02", this.node.parent);
        qp_02.active = true;
        qp_02.getComponent(sp.Skeleton).setToSetupPose();
        qp_02.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
      },
      cutScenesElephant: function cutScenesElephant() {
        cc.vv.AudioManager.playEff("games/TheMammoth/", "fg_transiton", true);
        var QP_01 = cc.find("QP_01", this.node.parent);
        QP_01.active = true;
        QP_01.getComponent(sp.Skeleton).setToSetupPose();
        QP_01.getComponent(sp.Skeleton).setAnimation(0, "idle3", false);
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        this._super(colIdx);
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        this._super(cards);
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.find("free_panel", this.node.parent).active = !bFree;
        cc.find("LMSlots_PrizePool_1", this.node.parent).active = !bFree;
        var free_times = cc.find("free_times", this.node.parent);
        free_times.active = bFree;
        cc.find("LMSlots_Collect_Puzzle", this.node.parent).active = !bFree;
      },
      update: function update(dt) {
        this._super(dt);
      },
      shake: function shake() {
        var safe_node = this.node.parent;
        var _iterator = _createForOfIteratorHelper(safe_node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;
            if ("LMSlots_Top" !== child.name && "LMSlots_Bottom" !== child.name && child.active) {
              var action = cc.shake(3, 15, 15);
              child.runAction(action);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      triggerRandomGame: function triggerRandomGame() {
        cc.vv.AudioManager.playEff("games/TheMammoth/", "big_win_transiton", true);
        var spine = cc.find("spine_randomgame", this.node);
        spine.active = true;
        spine.getComponent(sp.Skeleton).setToSetupPose();
        spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this.shake();
      },
      updateFreePanel: function updateFreePanel(curMult) {
        var history = cc.vv.gameData.getDeskInfo().history;
        if (history && history.wheelGames && curMult < history.wheelGames.length) {
          var wheel = history.wheelGames[curMult];
          var greenTimes = cc.find("free_panel/free_1/times", this.node.parent);
          var purpleTimes = cc.find("free_panel/free_2/times", this.node.parent);
          var redTimes = cc.find("free_panel/free_3/times", this.node.parent);
          greenTimes.getComponent(cc.Label).string = wheel.greenItem.freeCnt;
          purpleTimes.getComponent(cc.Label).string = wheel.purpleItem.freeCnt;
          redTimes.getComponent(cc.Label).string = wheel.redItem.freeCnt;
        }
        var tip_1 = cc.find("free_panel/tip/tip_1", this.node.parent);
        var tip_2 = cc.find("free_panel/tip/tip_2", this.node.parent);
        var qiehuan = cc.find("free_panel/tip/qiehuan_01", this.node.parent);
        var spine = qiehuan.getComponent(sp.Skeleton);
        if (curMult >= cc.vv.gameData.getDeskInfo().needBet) {
          if (!tip_2.active) {
            qiehuan.active = true;
            spine.setToSetupPose();
            spine.setAnimation(0, "animation", false);
            spine.setCompleteListener(function() {
              qiehuan.active = false;
            });
          }
          tip_1.active = false;
          tip_2.active = true;
        } else {
          if (!tip_1.active) {
            qiehuan.active = true;
            spine.setToSetupPose();
            spine.setAnimation(0, "animation", false);
            spine.setCompleteListener(function() {
              qiehuan.active = false;
            });
          }
          tip_1.active = true;
          tip_2.active = false;
        }
      },
      changeFreeBg: function changeFreeBg(isCommon, mult) {
        cc.find("LMSlots_PrizePool_1", this.node.parent).active = false;
        var free_times = cc.find("free_times", this.node.parent);
        free_times.active = true;
        cc.find("common", free_times).active = false;
        cc.find("mult_2", free_times).active = false;
        cc.find("mult_3", free_times).active = false;
        cc.find("mult_5", free_times).active = false;
        if (isCommon) {
          this._curFreeTimesPanel = cc.find("common", free_times);
          cc.find("common", free_times).active = true;
          cc.find("common/allTimes", free_times).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
          cc.find("common/curTimes", free_times).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime();
        } else {
          this._curFreeTimesPanel = cc.find("mult_" + mult, free_times);
          cc.find("mult_" + mult, free_times).active = true;
          cc.find("mult_" + mult + "/allTimes", free_times).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
          cc.find("mult_" + mult + "/curTimes", free_times).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime();
        }
      },
      popFreeDialog: function popFreeDialog(isCommon, isExtra, mult) {
        var _this10 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
            var free_dialog, free_bg, dialog;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                free_dialog = cc.find("free_dialog", _this10.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = null;
                if (isCommon) {
                  dialog = cc.find("common_enter_node", free_dialog);
                  cc.vv.AudioManager.playEff("games/TheMammoth/", "fg_start", true);
                } else if (isExtra) {
                  dialog = cc.find("extra_node", free_dialog);
                  cc.vv.AudioManager.playEff("games/TheMammoth/", "retrigger_board_land", true);
                } else {
                  cc.vv.AudioManager.playEff("games/TheMammoth/", "fg_start", true);
                  dialog = cc.find("mult_enter_node_" + mult, free_dialog);
                }
                dialog.active = true;
                dialog.scale = 0;
                cc.find("times", dialog).getComponent(cc.Label).string = isExtra ? _this10._gameInfo.freeResult.freeInfo.freeCnt : cc.vv.gameData.GetTotalFree();
                cc.tween(dialog).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                  var func;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      if (!cc.find("btn_start", dialog)) {
                        _context13.next = 6;
                        break;
                      }
                      func = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                            while (1) switch (_context11.prev = _context11.next) {
                             case 0:
                              cc.find("btn_start", dialog).off("click");
                              cc.vv.AudioManager.playEff("games/TheMammoth/", "fg_select", true);
                              cc.tween(dialog).to(.5, {
                                scale: 0
                              }).start();
                              free_bg.runAction(cc.fadeOut(.2));
                              _context11.next = 6;
                              return cc.vv.gameData.awaitTime(.5);

                             case 6:
                              success();
                              dialog.active = false;
                              free_dialog.active = false;

                             case 9:
                             case "end":
                              return _context11.stop();
                            }
                          }, _callee11);
                        }));
                        return function func() {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(cc.find("btn_start", dialog), func);
                      cc.find("btn_start", dialog).on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                        return regeneratorRuntime.wrap(function _callee12$(_context12) {
                          while (1) switch (_context12.prev = _context12.next) {
                           case 0:
                            cc.find("btn_start", dialog).stopAllActions();
                            _context12.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context12.stop();
                          }
                        }, _callee12);
                      })));
                      _context13.next = 15;
                      break;

                     case 6:
                      _context13.next = 8;
                      return cc.vv.gameData.awaitTime(2);

                     case 8:
                      cc.tween(dialog).to(.5, {
                        scale: 0
                      }).start();
                      free_bg.runAction(cc.fadeOut(.2));
                      _context13.next = 12;
                      return cc.vv.gameData.awaitTime(.5);

                     case 12:
                      success();
                      dialog.active = false;
                      free_dialog.active = false;

                     case 15:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                }))).start();

               case 11:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this11 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(success) {
            var free_dialog, free_bg, dialog, func;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
               case 0:
                cc.vv.AudioManager.playEff("games/TheMammoth/", "fg_end", true);
                free_dialog = cc.find("free_dialog", _this11.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 0;
                cc.find("coin", dialog).getComponent(cc.Label).string = "";
                cc.tween(dialog).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context17.next = 13;
                return cc.vv.gameData.awaitTime(.5);

               case 13:
                Global.doRoallNumEff(cc.find("coin", dialog), 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
                func = function() {
                  var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                    return regeneratorRuntime.wrap(function _callee15$(_context15) {
                      while (1) switch (_context15.prev = _context15.next) {
                       case 0:
                        cc.find("btn_collect", dialog).off("click");
                        cc.vv.AudioManager.playEff("games/TheMammoth/", "board_collect", true);
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }).start();
                        free_bg.runAction(cc.fadeOut(.2));
                        _context15.next = 6;
                        return cc.vv.gameData.awaitTime(.5);

                       case 6:
                        success();
                        dialog.active = false;
                        free_dialog.active = false;

                       case 9:
                       case "end":
                        return _context15.stop();
                      }
                    }, _callee15);
                  }));
                  return function func() {
                    return _ref9.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(cc.find("btn_collect", dialog), func);
                cc.find("btn_collect", dialog).on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      cc.find("btn_collect", dialog).stopAllActions();
                      _context16.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                })));

               case 17:
               case "end":
                return _context17.stop();
              }
            }, _callee17);
          }));
          return function(_x5) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      awaitTime: function awaitTime(time) {
        var _this12 = this;
        return new Promise(function(success, failed) {
          _this12.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheMammoth_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e94bP7EwNALIDB2XjjpZib", "TheMammoth_Symbol");
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
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
          }
        } else {
          this._showNode.active = true;
          this.playWinTweenAction();
        }
      },
      playWildAnimation: function playWildAnimation(rate) {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        this._state = "win";
        this._showNode && (this._showNode.active = false);
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && id === cfg.wildId) {
          var topShowNode = cc.find("animation_1_" + rate, aniNode);
          topShowNode.active = true;
          aniNode.zIndex = 300 - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            nodeSp.setAnimation(0, "animation1", false);
            nodeSp.setCompleteListener(function(track) {
              var name = track.animation ? track.animation.name : "";
              if ("animation1" === name) {
                nodeSp.clearTracks();
                nodeSp.setAnimation(0, "animation", true);
              }
            });
          }
        }
      },
      playWinTweenAction: function playWinTweenAction() {
        this._showNode.cleanup();
        this._showNodeOrgScale = this._showNode.scale;
        cc.tween(this._showNode).repeatForever(cc.tween().to(.35, {
          opacity: 0
        }).to(.35, {
          opacity: 255
        }).delay(1)).start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  TheMammoth_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59aaff3GE5IaJoPT4yjU0jK", "TheMammoth_Wheel");
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
    var WheelItemType = {
      FreeGame: 1,
      Jackpot: 2,
      FreeGameMult: 3
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        type_1: cc.Node,
        type_2: cc.Node,
        btn_play: cc.Node,
        sanjiao: cc.Node,
        shuihua: cc.Node,
        jinse: cc.Node,
        zise: cc.Node,
        jackpot_result: cc.Node,
        jackpot_result_bg: cc.Node,
        minor: cc.Node,
        major: cc.Node,
        grand: cc.Node,
        items_1: [ cc.Node ],
        items_2: [ cc.Node ],
        speed: {
          default: 1,
          tooltip: "\u65cb\u8f6c\u901f\u5ea6"
        },
        maxSpeed: {
          default: 20,
          tooltip: "\u6700\u5927\u901f\u5ea6"
        },
        count: {
          default: 2,
          tooltip: "\u9700\u8981\u8f6c\u51e0\u8f6e"
        },
        minSpeed: {
          default: 1,
          tooltip: "\u6700\u5c0f\u901f\u5ea6"
        },
        speedOffset: {
          default: .25,
          tooltip: "\u901f\u5ea6\u53d8\u5316\u503c"
        },
        _startMove: false,
        _needStop: false,
        _backMove: false,
        _resultItem: null,
        _bottomPosY: 0,
        _successCallback: null,
        _hasPressed: false,
        _result: null,
        _wheelConfig: null,
        _type: 1,
        _items: null,
        _itemsHeight: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this.btn_play.on("click", function() {
          if (_this._hasPressed) return;
          _this.btn_play.stopAllActions();
          cc.vv.AudioManager.playEff("games/TheMammoth/", "fg_select", true);
          _this._hasPressed = true;
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA
          };
          req.gameid = cc.vv.gameData.getGameId();
          req.data = {};
          req.data.rtype = 1;
          cc.vv.NetManager.send(req, true);
          _this.btn_play.runAction(cc.fadeOut(.2));
        });
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubgameData, this);
      },
      update: function update(dt) {
        if (this._startMove) {
          if (this._needStop) {
            this.speed -= this.speedOffset;
            this.speed <= this.minSpeed && (this.speed = this.minSpeed);
          } else {
            this.speed += this.speedOffset;
            this.speed >= this.maxSpeed && (this.speed = this.maxSpeed);
          }
          0 === this.count && this._resultItem.y <= 3 * this._resultItem.height && (this._needStop = true);
          if (this._needStop && this._resultItem.y < -180) {
            this._startMove = false;
            this._backMove = true;
          }
          var _iterator = _createForOfIteratorHelper(this._items), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              if (item.y <= this._bottomPosY) {
                item.y += this._itemsHeight;
                if (item === this._resultItem) {
                  this.count--;
                  this.count <= 0 && (this.count = 0);
                }
              }
              item.y -= this.speed;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._backMove) {
          var _iterator2 = _createForOfIteratorHelper(this._items), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _item = _step2.value;
              _item.y += this.minSpeed;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (this._resultItem.y > -181 && this._resultItem.y < -179) {
            this._backMove = false;
            this.exitWheelGame();
          }
        }
      },
      onRcvSubgameData: function onRcvSubgameData(msg) {
        var _this2 = this;
        if (200 === msg.code && 1 === msg.data.rtype) {
          this._resultItem = this._items[msg.data.itemId - 1];
          this._result = msg.data;
          cc.vv.gameData.GetSlotsScript().setWheelResult(this._result);
          this._startMove = true;
          cc.vv.AudioManager.playEff("games/TheMammoth/", "bonus_wheel_spin", true);
          var cfg = this._wheelConfig[msg.data.itemId - 1];
          if (cfg.type === WheelItemType.FreeGame || cfg.type === WheelItemType.FreeGameMult) {
            cc.vv.gameData.SetTotalFree(cfg.freeCnt);
            cc.vv.gameData.SetFreeTime(cfg.freeCnt);
          }
          this.shuihua.active = true;
          this.shuihua.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          this.shuihua.getComponent(sp.Skeleton).setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            "animation1" === name && _this2.shuihua.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          });
        }
      },
      enterWheelGame: function enterWheelGame(successCallback, wheelConfig) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, parentType, _iterator3, _step3, item, i, cfg, node;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3.node.active = true;
              _this3.reset();
              _this3._successCallback = successCallback;
              _this3._wheelConfig = wheelConfig;
              cc.vv.AudioManager.playBgm("games/TheMammoth/", "bonus_bgm", true);
              deskInfo = cc.vv.gameData.getDeskInfo();
              parentType = null;
              if (deskInfo.needBet > cc.vv.gameData.GetBetIdx()) {
                _this3._type = 1;
                parentType = cc.find("bg/wheel_mask/type_1", _this3.node);
                parentType.active = true;
                cc.find("bg/wheel_mask/type_2", _this3.node).active = false;
              } else {
                _this3._type = 2;
                parentType = cc.find("bg/wheel_mask/type_2", _this3.node);
                parentType.active = true;
                cc.find("bg/wheel_mask/type_1", _this3.node).active = false;
              }
              _this3._items = 1 === _this3._type ? _this3.items_1 : _this3.items_2;
              _this3._itemsHeight = 0;
              _iterator3 = _createForOfIteratorHelper(_this3._items);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  item = _step3.value;
                  _this3._itemsHeight += item.height;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              _this3._bottomPosY = -708;
              for (i = 0; i < wheelConfig.length; i++) {
                cfg = wheelConfig[i];
                node = cc.find("index_" + (i + 1), parentType);
                cfg.type === WheelItemType.FreeGame ? cc.find("num", node).getComponent(cc.Label).string = cfg.freeCnt : cfg.type === WheelItemType.Jackpot ? cc.find("num", node).getComponent(cc.Label).string = Global.convertNumToShort(cfg.jackpotValue, null, 0) : cc.find("num", node).getComponent(cc.Label).string = cfg.freeCnt;
              }
              cc.vv.gameData.checkAutoPlay(_this3.btn_play, function() {
                if (_this3._hasPressed) return;
                cc.vv.AudioManager.playEff("games/TheMammoth/", "fg_select", true);
                _this3._hasPressed = true;
                var req = {
                  c: MsgId.SLOT_SUBGAME_DATA
                };
                req.gameid = cc.vv.gameData.getGameId();
                req.data = {};
                req.data.rtype = 1;
                cc.vv.NetManager.send(req, true);
                _this3.btn_play.runAction(cc.fadeOut(.2));
              });

             case 15:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitWheelGame: function exitWheelGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cfg, result_node;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              cc.vv.AudioManager.playEff("games/TheMammoth/", "bonus_active", true);
              _this4.sanjiao.active = true;
              _this4.sanjiao.getComponent(sp.Skeleton).setToSetupPose();
              _this4.sanjiao.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _this4.shuihua.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
              _this4.shuihua.getComponent(sp.Skeleton).setCompleteListener(function(track) {
                var name = track.animation ? track.animation.name : "";
                "animation3" === name && (_this4.shuihua.active = false);
              });
              _context2.next = 8;
              return _this4.awaitTime(1);

             case 8:
              cfg = _this4._wheelConfig[_this4._result.itemId - 1];
              if (cfg.type === WheelItemType.FreeGame) {
                _this4.zise.active = true;
                _this4.zise.getComponent(sp.Skeleton).setToSetupPose();
                _this4.zise.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
              } else if (cfg.type === WheelItemType.Jackpot) {
                _this4.jinse.active = true;
                _this4.jinse.getComponent(sp.Skeleton).setToSetupPose();
                _this4.jinse.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
              } else {
                _this4.jinse.active = true;
                _this4.jinse.getComponent(sp.Skeleton).setToSetupPose();
                _this4.jinse.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
              }
              _context2.next = 12;
              return _this4.awaitTime(2);

             case 12:
              if (cfg.type === WheelItemType.Jackpot) {
                cc.vv.AudioManager.playEff("games/TheMammoth/", "jp_board", true);
                _this4.jackpot_result.active = true;
                _this4.jackpot_result_bg.opacity = 0;
                _this4.jackpot_result_bg.runAction(cc.fadeTo(.2, 200));
                _this4.minor.active = false;
                _this4.major.active = false;
                _this4.grand.active = false;
                result_node = null;
                result_node = 2 === _this4._result.jackpot.id ? _this4.minor : 3 === _this4._result.jackpot.id ? _this4.major : _this4.grand;
                result_node.active = true;
                result_node.scale = 0;
                result_node.runAction(cc.scaleTo(.4, 1).easing(cc.easeBackOut()));
                Global.doRoallNumEff(result_node.getChildByName("num"), 0, _this4._result.jackpot.value, 3, null, null, 0, true);
                result_node.getChildByName("btn_collect").on("click", function() {
                  _this4.jackpot_result_bg.runAction(cc.fadeOut(.2));
                  result_node.runAction(cc.sequence(cc.scaleTo(.4, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    _this4._successCallback && _this4._successCallback();
                  })));
                });
              } else _this4._successCallback && _this4._successCallback();

             case 13:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      reset: function reset() {
        this._startMove = false;
        this.speed = 1;
        this._needStop = false;
        this.count = 2;
        this._hasPressed = false;
        this._backMove = false;
        this.zise.active = false;
        this.jinse.active = false;
        this.btn_play.opacity = 255;
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubgameData, false, this);
      },
      awaitTime: function awaitTime(dt) {
        var _this5 = this;
        return new Promise(function(success, failed) {
          _this5.scheduleOnce(function() {
            success();
          }, dt);
        });
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "TheMammoth_Cfg", "TheMammoth_Logic", "TheMammoth_Reel", "TheMammoth_Slots", "TheMammoth_Symbol", "TheMammoth_Wheel" ]);