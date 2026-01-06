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
  OdinsAnger_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb6838hafdJF4yZ4VIk46gE", "OdinsAnger_Cfg");
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
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3",
        win_node: "animation_3",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        win_node: "animation_4",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5"
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6",
        win_node: "animation_6",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7"
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
        node: "symbol_14"
      }), _defineProperty(_symbol, 15, {
        node: "symbol_15"
      }), _defineProperty(_symbol, 16, {
        node: "symbol_16"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "OdinsAnger_Slots",
        Reels: "OdinsAnger_Reel",
        Symbols: "OdinsAnger_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 125,
        height: 102
      },
      randomSymbols: [ 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
      wildIds: [ 2, 3 ],
      scatterId: 4,
      kuang: "",
      speed: 2e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      helpItems: [ "games/OdinsAnger/prefab/help_item_1", "games/OdinsAnger/prefab/help_item_2", "games/OdinsAnger/prefab/help_item_3", "games/OdinsAnger/prefab/help_item_4" ],
      commEffect: {
        path: "games/OdinsAnger/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      bounceInfo: {
        distance: 20,
        time: .1
      },
      AddAntiTime: 1.9,
      reelStateInfo: [ {
        id: [ 4 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/OdinsAnger/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatterSmart_stop_",
        antSound: "anticipation",
        antSpeed: 2e3
      } ],
      normalBgm: "base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  OdinsAnger_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e937dceyqdE2oi7ydi8tcBV", "OdinsAnger_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _lockBonus: false
      },
      onLoad: function onLoad() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        this._lockBonus = deskInfo.needBet > deskInfo.currmult;
        cc.vv.gameData.GetSlotsScript().setWheelScript(cc.find("safe_node/wheel", this.node).getComponent("OdinsAnger_Wheel"));
      },
      onUpdateBet: function onUpdateBet() {
        var _this = this;
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var script = cc.find("safe_node/slots/collect_node/bonus_node/lock", this.node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
          this._playLockTipsAnimation(false);
          cc.vv.AudioManager.playEff("games/OdinsAnger/", "unlock", true);
          this._lockBonus = false;
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation1", false);
          script.setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            "animation1" === name && (cc.find("safe_node/slots/collect_node/bonus_node/lock", _this.node).active = false);
          });
        } else if (deskInfo.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          this._playLockTipsAnimation(true);
          cc.vv.AudioManager.playEff("games/OdinsAnger/", "lock", true);
          this._lockBonus = true;
          cc.find("safe_node/slots/collect_node/bonus_node/lock", this.node).active = true;
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation2", false);
        }
      },
      _playLockTipsAnimation: function _playLockTipsAnimation(isLock) {
        var lock_tips = cc.find("safe_node/slots/img_lock", this.node);
        var unlock_tips = cc.find("safe_node/slots/img_unlock", this.node);
        lock_tips.cleanup();
        unlock_tips.cleanup();
        lock_tips.active = isLock;
        unlock_tips.active = !isLock;
        lock_tips.y = -261;
        unlock_tips.y = -261;
        var node = isLock ? lock_tips : unlock_tips;
        cc.tween(node).call(function() {
          cc.vv.AudioManager.playEff("games/OdinsAnger/", "text_in", true);
        }).by(.3, {
          y: 91
        }).delay(1).call(function() {
          cc.vv.AudioManager.playEff("games/OdinsAnger/", "text_out", true);
        }).by(.3, {
          y: -91
        }).start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  OdinsAnger_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8f32LYsB9Ph7/pjbcnfmZG", "OdinsAnger_Reel");
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
  OdinsAnger_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "953be8xrIxMsL/rji9s0Ue0", "OdinsAnger_Slots");
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
        _wheel_script: null,
        _curFreeLevel: 0,
        _isFreeGame: false,
        _wheelWin: 0
      },
      Init: function Init() {
        var _this = this;
        this._super();
        var bonus_node = cc.find("collect_node/bonus_node", this.node);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        bonus_node.on(cc.Node.EventType.TOUCH_END, function() {
          deskInfo.needBet > deskInfo.currmult && "idle" === cc.vv.gameData.GetSlotState() && _this._bottomScript.SetBetIdx(deskInfo.needBet);
        });
        var script = cc.find("lock", bonus_node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= deskInfo.currmult) {
          cc.find("lock", bonus_node).active = false;
          cc.vv.AudioManager.playEff("games/OdinsAnger/", "unlock", true);
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation1", false);
          script.setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            "animation1" === name && (cc.find("lock", bonus_node).active = false);
          });
        } else {
          cc.find("lock", bonus_node).active = true;
          cc.vv.AudioManager.playEff("games/OdinsAnger/", "lock", true);
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation2", false);
        }
        var small_wheel = cc.find("collect_node/small_wheel/mask/wheel", this.node);
        cc.tween(small_wheel).repeatForever(cc.tween().by(4, {
          angle: -360
        })).start();
        this.ReconnectShowWheel(deskInfo.collectGame);
      },
      StartMove: function StartMove() {
        this._gameInfo && this._gameInfo.nextCollectGame && this.updateCollectProgress(this._gameInfo.nextCollectGame, false);
        this._super();
        this.setWheelWin(0);
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._super();

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ReconnectShowWheel: function ReconnectShowWheel(collectGame) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              collectGame && 3 === collectGame.state && cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              _context2.next = 3;
              return _this3.updateCollectProgress(collectGame, false);

             case 3:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");

             case 4:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this4._super(msg);
              if (_this4._gameInfo.mammothGame && !_this4._isFreeGame) {
                _this4.SetStopTime(3);
                _this4.triggerRandomGame();
              }

             case 2:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() === cc.vv.gameData.GetTotalFree();
      },
      CheckExtraFreeGame: function CheckExtraFreeGame() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      ShowWinTrace: function ShowWinTrace() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
                  var allWinIdx, i, item, idx, hasWild, key, symbol, _key, _symbol;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      allWinIdx = [];
                      for (i = 0; i < _this5._gameInfo.zjLuXian.length; i++) {
                        item = _this5._gameInfo.zjLuXian[i];
                        for (idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
                      }
                      if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                        _context4.next = 9;
                        break;
                      }
                      hasWild = false;
                      for (key in allWinIdx) {
                        symbol = _this5.GetSymbolByIdx(Number(key));
                        if (symbol && -1 !== _this5._cfg.wildIds.indexOf(symbol.GetShowId())) {
                          hasWild = true;
                          symbol.playWinAnimation();
                        }
                      }
                      if (!hasWild) {
                        _context4.next = 9;
                        break;
                      }
                      cc.vv.AudioManager.playEff("games/OdinsAnger/", "wild_multiplier", true);
                      _context4.next = 9;
                      return _this5.awaitTime(1.5);

                     case 9:
                      for (_key in allWinIdx) {
                        _symbol = _this5.GetSymbolByIdx(Number(_key));
                        if (_symbol) {
                          cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && -1 !== _this5._cfg.wildIds.indexOf(_symbol.GetShowId()) || _symbol.playWinAnimation();
                          _symbol.ShowKuang();
                        }
                      }
                      success();

                     case 11:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
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
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (!_this6._gameInfo.freeCollect) {
                _context7.next = 7;
                break;
              }
              _context7.next = 3;
              return _this6.triggerCollectInFree();

             case 3:
              _context7.next = 5;
              return _this6.ShowWinTrace();

             case 5:
              _context7.next = 14;
              break;

             case 7:
              _this6.ShowWinTrace();
              if (!_this6._gameInfo.wheelGame) {
                _context7.next = 13;
                break;
              }
              _context7.next = 11;
              return _this6.triggerCollect();

             case 11:
              _context7.next = 14;
              break;

             case 13:
              _this6.triggerCollect();

             case 14:
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              if (_this6._gameInfo.wheelGame) {
                winCoin += _this6._wheelWin;
                totalWinCoin += _this6._wheelWin;
              }
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this6.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                var freeCollect, cfg, i, num, node;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                   case 0:
                    if (_this6.CheckEnterFreeGame()) _this6.triggerFreeGame(); else if (_this6.CheckExtraFreeGame()) _this6.triggerExtraFreeGame(); else if (_this6.CheckExitFreeGame()) _this6.triggerExitFreeGame(); else {
                      if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime()) {
                        freeCollect = _this6._gameInfo.freeCollect;
                        cfg = freeCollect.cfg;
                        for (i = 0; i < cfg.length; i++) {
                          num = cfg[i].total - freeCollect.num;
                          if (num <= 0) {
                            num = 0;
                            node = cc.find("free_collect_node/node_" + (i + 1), _this6.node);
                            cc.find("collect", node).active && function() {
                              var sz_qh_02 = cc.find("sz_qh_02", node);
                              sz_qh_02.active = true;
                              sz_qh_02.getComponent(sp.Skeleton).setToSetupPose();
                              sz_qh_02.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                              sz_qh_02.getComponent(sp.Skeleton).setCompleteListener(function() {
                                sz_qh_02.active = false;
                              });
                              cc.vv.AudioManager.playEff("games/OdinsAnger/", "golden_change", true);
                              cc.find("collect", node).active = false;
                              cc.find("full", node).active = true;
                            }();
                          }
                        }
                      }
                      _this6.CanDoNextRound();
                    }

                   case 1:
                   case "end":
                    return _context6.stop();
                  }
                }, _callee6);
              })));

             case 19:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      triggerCollect: function triggerCollect() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var collectGame, moveTime, haveCollect, endPos, i, card, node, symbol, startPos, animation, spine, particle, _particle, icon, _animation, spine_collect;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              collectGame = _this7._gameInfo.collectGame;
              3 === collectGame.state && _this7._bottomScript.ShowBtnsByState("unstoped");
              moveTime = .8;
              if (!(0 !== collectGame.state)) {
                _context8.next = 35;
                break;
              }
              haveCollect = false;
              endPos = cc.find("collect_node/icon_bg/spine_7", _this7.node).convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this7.node.parent.convertToNodeSpaceAR(endPos);
              for (i = 0; i < _this7._gameInfo.resultCards.length; i++) {
                card = _this7._gameInfo.resultCards[i];
                if (card === collectGame.card) {
                  haveCollect = true;
                  node = cc.instantiate(cc.find("spine_collect_symbol_fly", _this7.node.parent));
                  node.active = true;
                  node.parent = _this7.node.parent;
                  symbol = _this7.GetSymbolByIdx(i + 1);
                  startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  startPos = _this7.node.parent.convertToNodeSpaceAR(startPos);
                  node.position = startPos;
                  animation = "animation" + (card - 4);
                  spine = node.getComponent(sp.Skeleton);
                  spine.setToSetupPose();
                  spine.setAnimation(0, animation, false);
                  particle = cc.instantiate(cc.find("particle_tuowei", _this7.node.parent));
                  particle.parent = node;
                  particle.active = true;
                  cc.tween(node).delay(.4).to(moveTime - .4, {
                    position: endPos
                  }).removeSelf().start();
                }
              }
              if (!haveCollect) {
                _context8.next = 33;
                break;
              }
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "symbol_fly", true);
              _context8.next = 12;
              return _this7.awaitTime(moveTime);

             case 12:
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "symbol_receive", true);
              _particle = cc.instantiate(cc.find("particle_tuowei", _this7.node.parent));
              _particle.parent = _this7.node.parent;
              _particle.active = true;
              _particle.position = endPos;
              cc.tween(_particle).delay(.5).removeSelf().start();
              icon = cc.find("collect_node/icon_bg/spine_" + collectGame.card, _this7.node);
              _animation = "animation";
              6 === collectGame.card && (_animation = "animation1");
              icon.getComponent(sp.Skeleton).setToSetupPose();
              icon.getComponent(sp.Skeleton).setAnimation(0, _animation, false);
              spine_collect = cc.find("collect_node/progress/node/spine_collect", _this7.node).getComponent(sp.Skeleton);
              spine_collect.node.active = true;
              spine_collect.node.parent.scaleX = collectGame.cnum / collectGame.total;
              spine_collect.setToSetupPose();
              spine_collect.setAnimation(0, "animation", false);
              spine_collect.setCompleteListener(function() {
                spine_collect.node.active = false;
              });
              _context8.next = 31;
              return _this7.updateCollectProgress(collectGame, true);

             case 31:
              _context8.next = 35;
              break;

             case 33:
              _context8.next = 35;
              return _this7.updateCollectProgress(collectGame, false);

             case 35:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      triggerCollectInFree: function triggerCollectInFree() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var freeCollect, haveCollect, endPos, sz_qh_01, _loop, i, cfg, _i, num;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              freeCollect = _this8._gameInfo.freeCollect;
              if (!(4 === freeCollect.level)) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return");

             case 3:
              if (freeCollect.idxs) {
                _context9.next = 5;
                break;
              }
              return _context9.abrupt("return");

             case 5:
              haveCollect = false;
              endPos = cc.find("free_collect_node/node_" + (freeCollect.level + 1) + "/collect/num", _this8.node).convertToWorldSpaceAR(cc.v2(0, 0));
              sz_qh_01 = cc.find("free_collect_node/node_" + (freeCollect.level + 1) + "/collect/sz_qh_01", _this8.node);
              if (_this8._curFreeLevel !== freeCollect.level) {
                endPos = cc.find("free_collect_node/node_" + freeCollect.level + "/collect/num", _this8.node).convertToWorldSpaceAR(cc.v2(0, 0));
                sz_qh_01 = cc.find("free_collect_node/node_" + freeCollect.level + "/collect/sz_qh_01", _this8.node);
              }
              _this8._curFreeLevel = freeCollect.level;
              endPos = _this8.node.parent.convertToNodeSpaceAR(endPos);
              _loop = function _loop(i) {
                var index = freeCollect.idxs[i];
                haveCollect = true;
                var node = cc.instantiate(cc.find("spine_collect_symbol_fly", _this8.node.parent));
                node.active = true;
                node.parent = _this8.node.parent;
                var symbol = _this8.GetSymbolByIdx(index);
                var startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                startPos = _this8.node.parent.convertToNodeSpaceAR(startPos);
                node.position = startPos;
                var animation = "animation1";
                var spine = node.getComponent(sp.Skeleton);
                spine.setToSetupPose();
                spine.setAnimation(0, animation, false);
                cc.tween(node).delay(.4).to(.4, {
                  position: endPos
                }).removeSelf().start();
                var newNode = cc.instantiate(cc.find("spine_collect_symbol_fly", _this8.node.parent));
                newNode.active = true;
                newNode.parent = _this8.node.parent;
                newNode.position = startPos;
                var newSpine = newNode.getComponent(sp.Skeleton);
                newSpine.setToSetupPose();
                newSpine.setAnimation(0, "animation2_1", false);
                newSpine.setCompleteListener(function() {
                  symbol.ShowById(6);
                  newNode.removeFromParent();
                });
              };
              for (i = 0; i < freeCollect.idxs.length; i++) _loop(i);
              if (!haveCollect) {
                _context9.next = 23;
                break;
              }
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "golden_on_reel", true);
              _context9.next = 17;
              return _this8.awaitTime(.8);

             case 17:
              sz_qh_01.active = true;
              sz_qh_01.getComponent(sp.Skeleton).setToSetupPose();
              sz_qh_01.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              sz_qh_01.getComponent(sp.Skeleton).setCompleteListener(function() {
                sz_qh_01.active = false;
              });
              cfg = freeCollect.cfg;
              for (_i = 0; _i < cfg.length; _i++) {
                num = cfg[_i].total - freeCollect.num;
                num < 0 && (num = 0);
                cc.find("free_collect_node/node_" + (_i + 1) + "/collect/num", _this8.node).getComponent(cc.Label).string = num;
              }

             case 23:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _this9._bottomScript.ShowBtnsByState("moveing_1");
              _this9._curFreeLevel = 0;
              for (i = 0; i < _this9._gameInfo.resultCards.length; i++) {
                card = _this9._gameInfo.resultCards[i];
                if (card === _this9._cfg.scatterId) {
                  symbol = _this9.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "fg_bell", true);
              _context10.next = 6;
              return _this9.awaitTime(2);

             case 6:
              _context10.next = 8;
              return _this9.popFreeDialog(false);

             case 8:
              _this9.cutScenesElephant();
              _context10.next = 11;
              return _this9.awaitTime(1.7);

             case 11:
              _this9.Backup();
              _this9.ShowGameview(true);
              _context10.next = 15;
              return _this9.awaitTime(2);

             case 15:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("free_bgm");
              _this9.CanDoNextRound();

             case 18:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      triggerExtraFreeGame: function triggerExtraFreeGame() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              _this10._bottomScript.ShowBtnsByState("moveing_1");
              for (i = 0; i < _this10._gameInfo.resultCards.length; i++) {
                card = _this10._gameInfo.resultCards[i];
                if (card === _this10._cfg.scatterId) {
                  symbol = _this10.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "fg_bell", true);
              _context11.next = 5;
              return _this10.awaitTime(2);

             case 5:
              _context11.next = 7;
              return _this10.popFreeDialog(true);

             case 7:
              _this10.CanDoNextRound();

             case 8:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              _this11._bottomScript.ShowBtnsByState("moveing_1");
              _context12.next = 3;
              return _this11.awaitTime(1);

             case 3:
              _context12.next = 5;
              return _this11.popFreeResultDialog();

             case 5:
              _this11.cutScenesElephant();
              _context12.next = 8;
              return _this11.awaitTime(1.7);

             case 8:
              _this11.Resume();
              _this11.ShowGameview(false);
              _this11.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this11.CanDoNextRound();
              });

             case 11:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      cutScenesElephant: function cutScenesElephant() {
        var character = cc.find("character", this.node.parent);
        character.active && (character.active = false);
        cc.vv.AudioManager.playEff("games/OdinsAnger/", "transition", true);
        var QP_01 = cc.find("QP_01", this.node.parent);
        QP_01.active = true;
        QP_01.getComponent(sp.Skeleton).setToSetupPose();
        QP_01.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
        QP_01.getComponent(sp.Skeleton).setCompleteListener(function() {
          QP_01.active = false;
        });
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        this._isFreeGame = bFree;
        cc.find("collect_node", this.node).active = !bFree;
        cc.find("free_collect_node", this.node).active = bFree;
        cc.find("character", this.node.parent).active = !bFree;
        if (bFree) {
          var _freeCollect = this._gameInfo && this._gameInfo.freeCollect ? this._gameInfo.freeCollect : cc.vv.gameData.getDeskInfo().freeGameData.collect;
          var cfg = _freeCollect.cfg;
          for (var i = 0; i < cfg.length; i++) cc.find("free_collect_node/node_" + (i + 1) + "/collect/num", this.node).getComponent(cc.Label).string = cfg[i].total - _freeCollect.num;
          for (var _i2 = 1; _i2 < 5; _i2++) {
            cc.find("free_collect_node/node_" + _i2 + "/collect", this.node).active = _i2 > _freeCollect.level;
            cc.find("free_collect_node/node_" + _i2 + "/full", this.node).active = _i2 <= _freeCollect.level;
          }
        }
      },
      shake: function shake() {
        var safe_node = this.node.parent;
        var _iterator = _createForOfIteratorHelper(safe_node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;
            if ("LMSlots_Top" !== child.name && "LMSlots_Bottom" !== child.name && "character" !== child.name && child.active) {
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
        cc.vv.AudioManager.playEff("games/OdinsAnger/", "stimulate", true);
        var character = cc.find("character", this.node.parent);
        character.getComponent(sp.Skeleton).setAnimation(0, "skill2", false);
        character.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
        this.shake();
      },
      popFreeDialog: function popFreeDialog(isExtra) {
        var _this12 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success) {
            var free_dialog, free_bg, dialog, btn, closeFunc;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                free_dialog = cc.find("free_dialog", _this12.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("common_enter_node", free_dialog);
                isExtra && (dialog = cc.find("extra_node", free_dialog));
                dialog.active = true;
                dialog.scale = 0;
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.AudioManager.playEff("games/OdinsAnger/", "popup_trigger", true);
                dialog.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
                if (!isExtra) {
                  _context13.next = 21;
                  break;
                }
                cc.find("times", dialog).getComponent(cc.Label).string = _this12._gameInfo.freeResult.freeInfo.freeCnt;
                _context13.next = 16;
                return _this12.awaitTime(2);

               case 16:
                cc.vv.AudioManager.playEff("games/OdinsAnger/", "popup_out", true);
                dialog.runAction(cc.sequence(cc.scaleTo(.5, 0), cc.callFunc(function() {
                  dialog.active = false;
                  free_dialog.active = false;
                  success();
                })));
                free_bg.runAction(cc.fadeOut(.2));
                _context13.next = 29;
                break;

               case 21:
                btn = cc.find("btn", dialog);
                cc.find("times", dialog).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                _context13.next = 25;
                return _this12.awaitTime(.5);

               case 25:
                closeFunc = function closeFunc() {
                  btn.off(cc.Node.EventType.TOUCH_END);
                  cc.vv.AudioManager.playEff("games/OdinsAnger/", "popup_out", true);
                  dialog.runAction(cc.sequence(cc.scaleTo(.5, 0), cc.callFunc(function() {
                    dialog.active = false;
                    free_dialog.active = false;
                    success();
                  })));
                  free_bg.runAction(cc.fadeOut(.2));
                };
                cc.vv.gameData.checkAutoPlay(dialog, closeFunc);
                btn.off(cc.Node.EventType.TOUCH_END);
                btn.on(cc.Node.EventType.TOUCH_END, function() {
                  btn.stopAllActions();
                  cc.vv.AudioManager.playEff("games/OdinsAnger/", "free_dialog_collect_click", true);
                  closeFunc();
                });

               case 29:
               case "end":
                return _context13.stop();
              }
            }, _callee13);
          }));
          return function(_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this13 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
            var free_dialog, free_bg, dialog, closeFunc;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.AudioManager.playEff("games/OdinsAnger/", "free_dialog_collect_show", true);
                free_dialog = cc.find("free_dialog", _this13.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_dialog_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 0;
                dialog.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
                Global.doRoallNumEff(cc.find("coin", dialog), 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
                _context14.next = 14;
                return _this13.awaitTime(.5);

               case 14:
                closeFunc = function closeFunc() {
                  cc.find("btn_collect", dialog).off("click");
                  var delayT = 0;
                  if (Global.FormatCommaNumToNum(cc.find("coin", dialog).getComponent(cc.Label).string) != cc.vv.gameData.GetGameTotalFreeWin()) {
                    cc.find("coin", dialog).stopAllActions();
                    cc.find("coin", dialog).getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.GetGameTotalFreeWin());
                    delayT = .3;
                  }
                  cc.vv.AudioManager.playEff("games/OdinsAnger/", "popup_out", true);
                  dialog.runAction(cc.sequence(cc.delayTime(delayT), cc.scaleTo(.5, 0), cc.callFunc(function() {
                    dialog.active = false;
                    free_dialog.active = false;
                    success();
                  })));
                  free_bg.runAction(cc.fadeOut(.2));
                };
                cc.vv.gameData.checkAutoPlay(dialog, closeFunc);
                cc.find("btn_collect", dialog).off("click");
                cc.find("btn_collect", dialog).on("click", function() {
                  dialog.stopAllActions();
                  cc.vv.AudioManager.playEff("games/OdinsAnger/", "free_dialog_collect_click", true);
                  closeFunc();
                });

               case 18:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x3) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      updateCollectProgress: function updateCollectProgress(collectGame, isAdd) {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var bar, counterCmp, spinCounterCmp, i, _counterCmp, _spinCounterCmp;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              cc.find("collect_node/counter", _this14.node).active = 2 !== collectGame.state;
              cc.find("collect_node/spin_counter", _this14.node).active = 2 !== collectGame.state;
              cc.find("collect_node/tips_failed", _this14.node).active = 2 === collectGame.state;
              cc.find("collect_node/progress/spine_full", _this14.node).active = 3 === collectGame.state;
              cc.find("collect_node/small_wheel/spine_full", _this14.node).active = 3 === collectGame.state;
              bar = cc.find("collect_node/progress/mask/bar", _this14.node);
              if (!(2 === collectGame.state)) {
                _context15.next = 11;
                break;
              }
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "voice_mammoth", true);
              bar.position = cc.v2(0, 0);
              _context15.next = 34;
              break;

             case 11:
              if (!(3 === collectGame.state)) {
                _context15.next = 27;
                break;
              }
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "collect_full", true);
              counterCmp = cc.find("collect_node/counter/num", _this14.node).getComponent(cc.Label);
              counterCmp.string = "COLLECT  0";
              isAdd ? cc.tween(bar).to(.5, {
                position: cc.v2(bar.width * (collectGame.cnum / collectGame.total), 0)
              }).start() : bar.position = cc.v2(bar.width * (collectGame.cnum / collectGame.total), 0);
              spinCounterCmp = cc.find("collect_node/spin_counter/num", _this14.node).getComponent(cc.Label);
              spinCounterCmp.string = "IN  " + (collectGame.spin - collectGame.snum) + "  SPIN";
              _context15.next = 20;
              return _this14.awaitTime(2);

             case 20:
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "fg_bell", true);
              _context15.next = 23;
              return _this14.awaitTime(1);

             case 23:
              _context15.next = 25;
              return _this14._wheel_script.startWheel(_this14._gameInfo ? _this14._gameInfo.wheelGame : cc.vv.gameData.getDeskInfo().wheelGame);

             case 25:
              _context15.next = 34;
              break;

             case 27:
              for (i = 6; i < 11; i++) cc.find("collect_node/icon_bg/spine_" + i, _this14.node).active = false;
              cc.find("collect_node/icon_bg/spine_" + collectGame.card, _this14.node).active = true;
              _counterCmp = cc.find("collect_node/counter/num", _this14.node).getComponent(cc.Label);
              _counterCmp.string = "COLLECT  " + (collectGame.total - collectGame.cnum);
              isAdd ? cc.tween(bar).to(.5, {
                position: cc.v2(bar.width * (collectGame.cnum / collectGame.total), 0)
              }).start() : bar.position = cc.v2(bar.width * (collectGame.cnum / collectGame.total), 0);
              _spinCounterCmp = cc.find("collect_node/spin_counter/num", _this14.node).getComponent(cc.Label);
              _spinCounterCmp.string = "IN  " + (collectGame.spin - collectGame.snum) + "  SPIN";

             case 34:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      setWheelScript: function setWheelScript(script) {
        this._wheel_script = script;
      },
      setWheelWin: function setWheelWin(winCoin) {
        this._wheelWin = winCoin;
      },
      awaitTime: function awaitTime(time) {
        var _this15 = this;
        return new Promise(function(success, failed) {
          _this15.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      GetTimeScale: function GetTimeScale() {
        return this._timeScaleVal || 1.5;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  OdinsAnger_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9644cDL6qNOvbEcd8srfFvH", "OdinsAnger_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
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
            if (nodeSp) if (2 === id || 3 === id) {
              nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, false);
              nodeSp.setCompleteListener(function(track) {
                var name = track.animation ? track.animation.name : "";
                if (name === cfg.symbol[id].win_ani.name) {
                  nodeSp.clearTracks();
                  nodeSp.setAnimation(0, "animation", true);
                }
              });
            } else nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
          }
        } else {
          this._showNode.active = true;
          this.playWinTweenAction();
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
  OdinsAnger_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a257pDjcJMXIkdy6DMx/rT", "OdinsAnger_Wheel");
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
        black_bg: cc.Node,
        wheel_node: cc.Node,
        wheel: cc.Node,
        spine_win: sp.Skeleton,
        spine_idle: sp.Skeleton,
        spine_click: sp.Skeleton,
        result_node: cc.Node,
        winCoin: cc.Label,
        btn_collect: cc.Button,
        _successCallback: null
      },
      onLoad: function onLoad() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubgameData, this);
      },
      startWheel: function startWheel(wheelGame) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(success) {
                cc.find("LMSlots_PrizePool_1", _this.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
                  prizeType: 1,
                  pauseNum: wheelGame.poolList[1]
                }, {
                  prizeType: 2,
                  pauseNum: wheelGame.poolList[2]
                }, {
                  prizeType: 3,
                  pauseNum: wheelGame.poolList[3]
                } ]);
                _this._successCallback = success;
                _this.node.active = true;
                _this.black_bg.opacity = 0;
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("bonus_bgm");
                cc.tween(_this.black_bg).to(.5, {
                  opacity: 200
                }).start();
                var cfg = wheelGame.cfg;
                for (var i = 0; i < cfg.length; i++) {
                  var item = cfg[i];
                  if ("MULT" === item.rtype) {
                    var node = cc.find("index_" + (i + 1), _this.wheel);
                    node && (node.getComponent(cc.Label).string = Global.formatNumShort(item.num, 0));
                  }
                }
                _this.wheel_node.active = true;
                _this.wheel_node.y = -cc.winSize.height;
                _this.wheel.rotation = 0;
                _this.spine_win.node.active = false;
                _this.spine_idle.clearTracks();
                _this.spine_idle.setToSetupPose();
                _this.spine_idle.setAnimation(0, "animation1", true);
                _this.spine_click.node.active = false;
                var self = _this;
                cc.tween(_this.wheel_node).delay(.2).call(function() {
                  cc.vv.AudioManager.playEff("games/OdinsAnger/", "wheel_out", true);
                }).by(.3, {
                  y: cc.winSize.height
                }).call(function() {
                  var spinFunc = function spinFunc() {
                    self.spine_idle.node.off(cc.Node.EventType.TOUCH_END);
                    var req = {
                      c: MsgId.SLOT_SUBGAME_DATA
                    };
                    req.gameid = cc.vv.gameData.getGameId();
                    req.data = {};
                    req.data.rtype = 1;
                    cc.vv.NetManager.send(req, true);
                  };
                  cc.vv.gameData.checkAutoPlay(self.spine_idle.node, spinFunc);
                  _this.spine_idle.node.off(cc.Node.EventType.TOUCH_END);
                  _this.spine_idle.node.on(cc.Node.EventType.TOUCH_END, function() {
                    self.spine_idle.node.stopAllActions();
                    cc.vv.AudioManager.playEff("games/OdinsAnger/", "wheel_click_spinbtn", true);
                    spinFunc();
                  });
                }).start();
                _this.result_node.active = false;
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onRcvSubgameData: function onRcvSubgameData(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var self, collectFunc;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this2.spine_click.node.active = true;
              _this2.spine_click.setToSetupPose();
              _this2.spine_click.setAnimation(0, "animation", false);
              _this2.spine_click.setCompleteListener(function() {
                _this2.spine_click.node.active = false;
              });
              cc.tween(_this2.spine_idle).delay(.5).call(function() {
                _this2.spine_idle.clearTracks();
                _this2.spine_idle.setToSetupPose();
                _this2.spine_idle.setAnimation(0, "animation2", true);
              }).start();
              _context4.next = 7;
              return _this2._rotateWheel(msg.data.idx - 1);

             case 7:
              _this2.spine_win.node.active = true;
              _this2.spine_win.setToSetupPose();
              _this2.spine_win.setAnimation(0, "animation", true);
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "wheel_celebration", true);
              _context4.next = 13;
              return _this2.awaitTime(3);

             case 13:
              _this2.spine_win.active = false;
              Global.SlotsSoundMgr.stopBgm();
              cc.vv.AudioManager.playEff("games/OdinsAnger/", "free_dialog_collect_show", true);
              _this2.result_node.active = true;
              _this2.result_node.scale = 0;
              cc.tween(_this2.result_node).to(.4, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              Global.doRoallNumEff(_this2.winCoin.node, 0, msg.data.winCoin, 3, null, null, 0, true);
              self = _this2;
              collectFunc = function collectFunc() {
                return new Promise(function() {
                  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(succes) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                       case 0:
                        self.btn_collect.node.off("click");
                        cc.vv.AudioManager.playEff("games/OdinsAnger/", "popup_out", true);
                        self.winCoin.node.stopAllActions();
                        if (!(Global.FormatCommaNumToNum(self.winCoin.string) < msg.data.winCoin)) {
                          _context2.next = 7;
                          break;
                        }
                        self.winCoin.string = Global.FormatNumToComma(msg.data.winCoin);
                        _context2.next = 7;
                        return self.awaitTime(.2);

                       case 7:
                        cc.tween(self.result_node).to(.4, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(self.wheel_node).delay(.2).by(.4, {
                          y: -cc.winSize.height
                        }).start();
                        cc.tween(self.black_bg).delay(.2).to(.4, {
                          opacity: 0
                        }).start();
                        cc.tween(self.node).delay(.3).call(function() {
                          cc.vv.gameData.GetSlotsScript().updateCollectProgress(msg.data.nextCollectGame, false);
                        }).delay(.3).call(function() {
                          cc.vv.gameData.AddCoin(msg.data.winCoin);
                          cc.vv.gameData.GetSlotsScript().setWheelWin(msg.data.winCoin);
                          if (self._successCallback) {
                            self._successCallback();
                            self._successCallback = null;
                            Global.SlotsSoundMgr.stopBgm();
                            Global.SlotsSoundMgr.playNormalBgm();
                            self.node.active = false;
                            cc.find("LMSlots_PrizePool_1", self.node.parent).getComponent("LMSlots_PrizePool_Base").ResumePausePool();
                          }
                        }).start();

                       case 11:
                       case "end":
                        return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function(_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
              };
              _context4.next = 24;
              return cc.vv.gameData.checkAutoPlay(_this2.btn_collect.node, collectFunc);

             case 24:
              _this2.btn_collect.node.off("click");
              _this2.btn_collect.node.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    _this2.btn_collect.node.stopAllActions();
                    _context3.next = 3;
                    return collectFunc();

                   case 3:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })));

             case 26:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _rotateWheel: function _rotateWheel(endIndex) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function(success) {
                var angle = 40 * endIndex - 2160;
                cc.log(angle);
                cc.vv.AudioManager.playEff("games/OdinsAnger/", "wheel_spin", true);
                var action = cc.rotateBy(6, angle).easing(cc.easeSineInOut());
                _this3.wheel.runAction(cc.sequence(action, cc.callFunc(function() {
                  cc.vv.AudioManager.playEff("games/OdinsAnger/", "wheel_end", true);
                  success();
                })));
              }));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubgameData, false, this);
      },
      awaitTime: function awaitTime(dt) {
        var _this4 = this;
        return new Promise(function(success, failed) {
          _this4.scheduleOnce(function() {
            success();
          }, dt);
        });
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "OdinsAnger_Cfg", "OdinsAnger_Logic", "OdinsAnger_Reel", "OdinsAnger_Slots", "OdinsAnger_Symbol", "OdinsAnger_Wheel" ]);