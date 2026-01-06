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
  Poseidon_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6bb5GQilhKu7MMVRpNfkP+", "Poseidon_Cfg");
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
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        win_ani: {
          name: "animation",
          zIndex: 400
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3",
        win_node: "animation_3",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
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
        node: "symbol_8",
        win_node: "animation_8",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
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
        Slots: "Poseidon_Slots",
        Reels: "Poseidon_Reel",
        Symbols: "Poseidon_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 126,
        height: 105
      },
      randomSymbols: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      kuang: "kuang",
      autoModelDelay: .5,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      AddAntiTime: 2,
      bounce: true,
      helpItems: [ "games/Poseidon/prefab/help_item_1", "games/Poseidon/prefab/help_item_2", "games/Poseidon/prefab/help_item_3", "games/Poseidon/prefab/help_item_4", "games/Poseidon/prefab/help_item_5", "games/Poseidon/prefab/help_item_6" ],
      commEffect: {
        path: "games/Poseidon/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      bounceInfo: {
        distance: 30,
        time: .1
      },
      normalBgm: "music_Poseidon_respin_bg",
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Poseidon/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Poseidon_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d88095dkY1OPZDc/L3H7b/K", "Poseidon_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        var wheel_script = cc.find("safe_node/wheel", this.node).getComponent("Poseidon_Wheel");
        cc.vv.gameData.GetSlotsScript().setWheelScripts(wheel_script);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Poseidon_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1725fUUa1tAZrr16mPx7DpW", "Poseidon_Reel");
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
      StartMove: function StartMove() {
        this.StartRecycleSymbol();
        this._super();
      },
      playReelStop: function playReelStop() {
        this._super();
        var cfg = cc.vv.gameData.getGameCfg();
        for (var i = 0; i < cfg.row; i++) {
          var symbol = this._symbols[i];
          symbol.GetShowId() === cfg.wildId && (0 === this._reelIdx || 1 === this._reelIdx && cc.vv.gameData.GetSlotsScript().haveWildInReel(0)) && symbol.playStopAnimation();
        }
        for (var _i = 0; _i < cfg.row; _i++) {
          var _symbol = this._symbols[_i];
          if (_symbol.GetShowId() === cfg.bonusId && cc.vv.gameData.GetSlotsScript().haveWildInReel(0) && cc.vv.gameData.GetSlotsScript().haveWildInReel(1)) {
            cc.vv.AudioManager.playEff("games/Poseidon/", "symbol_bonus", true);
            break;
          }
        }
      },
      StartRecycleSymbol: function StartRecycleSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        this._symbols.length > cfg.row + 1 && this.AddCount(-(this._symbols.length - (cfg.row + 1)), .5, .5);
      },
      GetSymbolPosByRow: function GetSymbolPosByRow(row) {
        var cfg = cc.vv.gameData.getGameCfg();
        return this._symbols[row].GetShowId() === cfg.bonusId ? cc.v2(0, (row + .5) * cfg.symbolSize.height + 12) : cc.v2(0, (row + .5) * cfg.symbolSize.height);
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var mask = cc.find("mask", this.node);
        mask && objs.push(mask);
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && objs.push(bg);
        if (2 === this._reelIdx) for (var i = 1; i <= 4; i++) {
          var line = cc.find("reels_frame/line_" + i, this.node.parent.parent);
          line && objs.push(line);
        }
        return objs;
      },
      GetResizeMoveingObjs: function GetResizeMoveingObjs() {
        var objs = [];
        if (2 === this._reelIdx) {
          var frameTop = cc.find("reels_frame/top_bg", this.node.parent.parent);
          frameTop && objs.push(frameTop);
        }
        return objs;
      },
      isHaveScatter: function isHaveScatter() {
        var cfg = cc.vv.gameData.getGameCfg();
        var _iterator = _createForOfIteratorHelper(this._symbols), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var symbol = _step.value;
            if (symbol.GetShowId() === cfg.scatterId) return true;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return false;
      },
      setScatterBgVisible: function setScatterBgVisible(isOrNot) {
        var anti_bg = cc.find("mask/anti_bg", this.node);
        anti_bg && (anti_bg.active = isOrNot);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Poseidon_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55218KfvsZDpJw+MJFjGCdZ", "Poseidon_Slots");
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
        wheel_script: null,
        _haveCheckWheel: false,
        _bgm: false,
        _playRoleAnimation: true,
        _roleAnimationTimer: 10
      },
      Init: function Init() {
        var _this = this;
        this._super();
        cc.winSize.height / cc.winSize.width > 2.1 ? cc.find("logo", this.node.parent).active = true : cc.find("logo", this.node.parent).active = false;
        this.node.parent.parent.getComponent("LMSlots_Puzzle").setCallback(function(freeInfo, chipGame) {
          cc.vv.gameData.SetTotalFree(freeInfo.freeCnt);
          cc.vv.gameData.SetFreeTime(freeInfo.freeCnt);
          var free_dialog = cc.find("free_dialog", _this.node.parent);
          free_dialog.active = true;
          Global.SlotsSoundMgr.stopBgm();
          cc.vv.AudioManager.playEff("games/Poseidon/", "free_dialog_start_show", true);
          var spine = free_dialog.getChildByName("tcjingzi");
          spine.getComponent(sp.Skeleton).clearTracks();
          spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          spine.getComponent(sp.Skeleton).setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            if ("animation" === name) {
              var enter_node = free_dialog.getChildByName("enter_node");
              enter_node.active = true;
              enter_node.scale = 0;
              enter_node.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1)));
              var btn_start = enter_node.getChildByName("btn_start");
              btn_start.off("click");
              var func = function func() {
                free_dialog.active = false;
                enter_node.active = false;
                cc.vv.AudioManager.playEff("games/Poseidon/", "popup_out", true);
                _this.scheduleOnce(function() {
                  _this._showGameBg(true);
                  cc.find("role/jmnanren", _this.node.parent).active = false;
                  _this.wheel_script.enterWheelGame();
                }, 2);
                _this.playQiepingAnim(function() {
                  Global.SlotsSoundMgr.playBgm("music_Poseidon_freespin_bg");
                  _this.CanDoNextRound();
                });
              };
              cc.vv.gameData.checkAutoPlay(btn_start, func);
              btn_start.on("click", function() {
                btn_start.stopAllActions();
                func();
              });
              spine.getComponent(sp.Skeleton).clearTracks();
              spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
            }
          });
        });
      },
      StartMove: function StartMove() {
        this._super();
        var kuanghuo = cc.find("kuanghuo", this.node);
        kuanghuo.active = false;
        this.hideScatterBg();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
        this._getWildNum() >= 2 && this._bottomScript.ShowBtnsByState("moveing_1");
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this2 = this;
        var free_dialog = cc.find("free_dialog", this.node.parent);
        if (this._gameInfo.allFreeCnt > 0 && this._gameInfo.freeCnt === this._gameInfo.allFreeCnt) {
          cc.vv.AudioManager.playEff("games/Poseidon/", "bell", true);
          for (var i = 0; i < this._gameInfo.resultCards.length; i++) {
            var card = this._gameInfo.resultCards[i];
            if (card === this._cfg.scatterId) {
              var symbol = this.GetSymbolByIdx(i + 1);
              symbol && symbol.playWinAnimation();
            }
          }
          this.Backup();
          Global.SlotsSoundMgr.stopBgm();
          var self = this;
          this.scheduleOnce(function() {
            free_dialog.active = true;
            cc.vv.AudioManager.playEff("games/Poseidon/", "free_dialog_start_show", true);
            var spine = free_dialog.getChildByName("tcjingzi");
            spine.getComponent(sp.Skeleton).clearTracks();
            spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            spine.getComponent(sp.Skeleton).setCompleteListener(function(track) {
              var name = track.animation ? track.animation.name : "";
              if ("animation" === name) {
                var enter_node = free_dialog.getChildByName("enter_node");
                enter_node.active = true;
                enter_node.scale = 0;
                enter_node.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1)));
                var btn_start = enter_node.getChildByName("btn_start");
                btn_start.off("click");
                var func = function func() {
                  free_dialog.active = false;
                  enter_node.active = false;
                  cc.vv.AudioManager.playEff("games/Poseidon/", "popup_out", true);
                  _this2.scheduleOnce(function() {
                    _this2._showGameBg(true);
                    cc.find("role/jmnanren", _this2.node.parent).active = false;
                    _this2.wheel_script.enterWheelGame();
                  }, 2);
                  _this2.playQiepingAnim(function() {
                    Global.SlotsSoundMgr.playBgm("music_Poseidon_freespin_bg");
                    self.CanDoNextRound();
                  });
                };
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.on("click", function() {
                  btn_start.stopAllActions();
                  func();
                });
                spine.getComponent(sp.Skeleton).clearTracks();
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
              }
            });
          }, 1);
          return true;
        }
        if (this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0) {
          cc.vv.AudioManager.playEff("games/Poseidon/", "bell", true);
          for (var _i = 0; _i < this._gameInfo.resultCards.length; _i++) {
            var _card = this._gameInfo.resultCards[_i];
            if (_card === this._cfg.scatterId) {
              var _symbol = this.GetSymbolByIdx(_i + 1);
              _symbol && _symbol.playWinAnimation();
            }
          }
          this.scheduleOnce(function() {
            free_dialog.active = true;
            cc.vv.AudioManager.playEff("games/Poseidon/", "free_dialog_more_show", true);
            var spine = free_dialog.getChildByName("tcjingzi");
            spine.getComponent(sp.Skeleton).clearTracks();
            spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            spine.getComponent(sp.Skeleton).setCompleteListener(function(track) {
              var name = track.animation ? track.animation.name : "";
              if ("animation" === name) {
                var extra_node = free_dialog.getChildByName("extra_node");
                extra_node.active = true;
                extra_node.scale = 0;
                extra_node.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1), cc.delayTime(1.5), cc.callFunc(function() {
                  cc.vv.AudioManager.playEff("games/Poseidon/", "popup_out", true);
                  free_dialog.active = false;
                  extra_node.active = false;
                  _this2.CanDoNextRound();
                })));
                spine.getComponent(sp.Skeleton).clearTracks();
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
              }
            });
          }, 1);
          return true;
        }
        return false;
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this3 = this;
        var total = this._gameInfo.freeWinCoin;
        var rest = cc.vv.gameData.GetFreeTime();
        if (total >= 0 && 0 === rest && cc.vv.gameData.GetTotalFree() > 0) {
          var free_dialog = cc.find("free_dialog", this.node.parent);
          free_dialog.active = true;
          Global.SlotsSoundMgr.stopBgm();
          cc.vv.AudioManager.playEff("games/Poseidon/", "free_dialog_collect_show", true);
          var result_node = free_dialog.getChildByName("result_node");
          var winNum = result_node.getChildByName("coin_bg").getChildByName("num");
          winNum.getComponent(cc.Label).string = "";
          var spine = free_dialog.getChildByName("tcjingzi");
          spine.getComponent(sp.Skeleton).clearTracks();
          spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          spine.getComponent(sp.Skeleton).setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            if ("animation" === name) {
              result_node.active = true;
              result_node.scale = 0;
              result_node.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1), cc.callFunc(function() {
                winNum.active = true;
                Global.doRoallNumEff(winNum, 0, total, 3, null, null, 0, true);
              })));
              var btn_collect = result_node.getChildByName("btn_collect");
              btn_collect.off("click");
              var func = function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      btn_collect.off("click");
                      winNum.stopAllActions();
                      if (!(Global.FormatCommaNumToNum(winNum.getComponent(cc.Label).string) < total)) {
                        _context.next = 6;
                        break;
                      }
                      winNum.getComponent(cc.Label).string = Global.FormatNumToComma(total);
                      _context.next = 6;
                      return cc.vv.gameData.awaitTime(.4);

                     case 6:
                      cc.vv.AudioManager.playEff("games/Poseidon/", "popup_out", true);
                      free_dialog.active = false;
                      result_node.active = false;
                      _this3.playQiepingAnim(function() {
                        Global.SlotsSoundMgr.stopBgm();
                        Global.SlotsSoundMgr.playNormalBgm();
                        _this3.ShowBottomWin(total, total, true, function() {
                          _this3.CanDoNextRound();
                        });
                      });
                      _this3.scheduleOnce(function() {
                        cc.find("role/jmnanren", _this3.node.parent).active = true;
                        _this3.wheel_script.exitWheelGame();
                        _this3._bottomScript.ShowFreeModel(false);
                        _this3._showGameBg(false);
                        _this3.Resume();
                      }, 2.2);

                     case 11:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function func() {
                  return _ref.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func);
              btn_collect.on("click", function() {
                btn_collect.stopAllActions();
                func();
              });
              spine.getComponent(sp.Skeleton).clearTracks();
              spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
            }
          });
          return true;
        }
        return false;
      },
      playQiepingAnim: function playQiepingAnim(callback) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var role, qieping;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              role = cc.find("Canvas/safe_node/role");
              role.active = false;
              qieping = cc.find("Canvas/safe_node/qieping");
              cc.vv.AudioManager.playEff("games/Poseidon/", "music_Poseidon_GC_ShuiWoXuan", true);
              qieping.active = true;
              qieping.getComponent(sp.Skeleton).clearTracks();
              qieping.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
              _context2.next = 9;
              return cc.vv.gameData.awaitTime(2.5);

             case 9:
              callback && callback();
              _context2.next = 12;
              return cc.vv.gameData.awaitTime(.4);

             case 12:
              qieping.active = false;
              role.active = true;

             case 14:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        var wildNum = this._getWildNum();
        if (wildNum >= 2 && reelIdx >= 2) {
          var addCount = this._getAddCount();
          if (1 === addCount) return nIter + 1.5 + 2 * (reelIdx - 1);
          if (2 === addCount) return nIter + 3.5 + 2 * (reelIdx - 1);
        }
        return reelIdx * nIter;
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var nWin;
          return regeneratorRuntime.wrap(function _callee4$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this4._bottomScript.ShowBtnsByState("moveing_1");
              nWin = cc.vv.gameData.GetGameWin();
              if (!(nWin > 0)) {
                _context5.next = 10;
                break;
              }
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                _context5.next = 7;
                break;
              }
              _this4.wheel_script.startWheel(_this4._gameInfo.coinExtraMult.id);
              _context5.next = 8;
              break;

             case 7:
              return _context5.delegateYield(regeneratorRuntime.mark(function _callee3() {
                var kuanghuo, curWinNum, _iterator, _step, _loop;
                return regeneratorRuntime.wrap(function _callee3$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                   case 0:
                    kuanghuo = cc.find("kuanghuo", _this4.node);
                    kuanghuo.active = false;
                    curWinNum = 0;
                    if (!(_this4._getWildNum() >= 2)) {
                      _context4.next = 20;
                      break;
                    }
                    _iterator = _createForOfIteratorHelper(_this4._gameInfo.winIdxs);
                    _context4.prev = 5;
                    _loop = regeneratorRuntime.mark(function _loop() {
                      var index, symbol;
                      return regeneratorRuntime.wrap(function _loop$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                         case 0:
                          index = _step.value;
                          symbol = _this4.GetSymbolByIdx(index);
                          if (!(symbol.GetShowId() === _this4._cfg.bonusId && symbol.GetData())) {
                            _context3.next = 7;
                            break;
                          }
                          symbol.playGetCoinAnimation(function() {
                            _this4._playBonusSpine();
                            curWinNum += symbol.GetData().coin;
                            _this4._bottomScript.SetWin(curWinNum);
                          });
                          cc.vv.AudioManager.playEff("games/Poseidon/", "bonus_result", true);
                          _context3.next = 7;
                          return _this4.awaitTime(2);

                         case 7:
                         case "end":
                          return _context3.stop();
                        }
                      }, _loop);
                    });
                    _iterator.s();

                   case 8:
                    if ((_step = _iterator.n()).done) {
                      _context4.next = 12;
                      break;
                    }
                    return _context4.delegateYield(_loop(), "t0", 10);

                   case 10:
                    _context4.next = 8;
                    break;

                   case 12:
                    _context4.next = 17;
                    break;

                   case 14:
                    _context4.prev = 14;
                    _context4.t1 = _context4["catch"](5);
                    _iterator.e(_context4.t1);

                   case 17:
                    _context4.prev = 17;
                    _iterator.f();
                    return _context4.finish(17);

                   case 20:
                    _this4.ShowWinTrace();
                    _this4.ShowBottomWin(nWin - curWinNum, nWin, true, function() {
                      _this4.CheckExitFreeGame() || _this4.CheckSpecialReward() || _this4.CanDoNextRound();
                    });

                   case 22:
                   case "end":
                    return _context4.stop();
                  }
                }, _callee3, null, [ [ 5, 14, 17, 20 ] ]);
              })(), "t0", 8);

             case 8:
              _context5.next = 11;
              break;

             case 10:
              _this4.CheckExitFreeGame() || _this4.CheckSpecialReward() || _this4.CanDoNextRound();

             case 11:
             case "end":
              return _context5.stop();
            }
          }, _callee4);
        }))();
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var kuanghuo, addCount, delay, _loop2, i, reel, scatterNum, _i2, _reel, _reel2, _scatterNum, _i3, _reel3, _reel4;
          return regeneratorRuntime.wrap(function _callee5$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this5._super(colIdx);
              if (!(1 === colIdx && _this5._getWildNum() >= 2)) {
                _context6.next = 15;
                break;
              }
              kuanghuo = cc.find("kuanghuo", _this5.node);
              kuanghuo.active = true;
              kuanghuo.getComponent(sp.Skeleton).clearTracks();
              kuanghuo.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              cc.vv.AudioManager.playEff("games/Poseidon/", "reel_up", true);
              cc.vv.AudioManager.playEff("games/Poseidon/", "bonus_notify", true);
              _context6.next = 10;
              return _this5.awaitTime(.7);

             case 10:
              addCount = _this5._getAddCount();
              delay = 1 === addCount ? .5 : 1.5;
              kuanghuo.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(function() {
                if (1 === addCount) {
                  kuanghuo.getComponent(sp.Skeleton).clearTracks();
                  kuanghuo.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
                } else {
                  kuanghuo.getComponent(sp.Skeleton).clearTracks();
                  kuanghuo.getComponent(sp.Skeleton).setAnimation(0, "animation0", true);
                }
              })));
              _loop2 = function _loop2(i) {
                var reel = _this5._reels[i];
                1 === addCount ? reel.AddCount(1, .5, .5) : reel.node.runAction(cc.sequence(cc.callFunc(function() {
                  reel.AddCount(1, .5, .5);
                }), cc.delayTime(1), cc.callFunc(function() {
                  reel.AddCount(1);
                })));
              };
              for (i = 2; i < 5; i++) _loop2(i);

             case 15:
              (2 === colIdx || 3 === colIdx) && _this5._getWildNum() >= 2 && cc.vv.AudioManager.playEff("games/Poseidon/", "bonus_notify", true);
              reel = _this5._reels[colIdx];
              reel.isHaveScatter() && reel.setScatterBgVisible(true);
              if (3 === colIdx) {
                scatterNum = 0;
                for (_i2 = 0; _i2 < 3; _i2++) {
                  _reel = _this5._reels[_i2];
                  _reel.isHaveScatter() && scatterNum++;
                }
                if (1 === scatterNum) {
                  _reel2 = _this5._reels[colIdx];
                  _reel2.isHaveScatter() || _this5.hideScatterBg();
                }
                0 === scatterNum && reel.setScatterBgVisible(false);
              } else if (4 === colIdx) {
                _scatterNum = 0;
                for (_i3 = 0; _i3 < 4; _i3++) {
                  _reel3 = _this5._reels[_i3];
                  _reel3.isHaveScatter() && _scatterNum++;
                }
                cc.log(_scatterNum);
                if (_scatterNum <= 1) _this5.hideScatterBg(); else if (2 === _scatterNum) {
                  _reel4 = _this5._reels[colIdx];
                  _reel4.isHaveScatter() || _this5.hideScatterBg();
                }
              }

             case 19:
             case "end":
              return _context6.stop();
            }
          }, _callee5);
        }))();
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
            cards[i] === this._cfg.bonusId && (res.data = this.getBonusCoinNum(i + 1));
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i4 = 0; _i4 < this._reels.length; _i4++) {
          var item = this._reels[_i4];
          var reelRes = reelResults[_i4];
          item.SetResult(reelRes);
        }
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = 5 - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          this._bottomScript.SetWin(nTotal);
          cc.find("role/jmnanren", this.node.parent).active = false;
          cc.find("wheel", this.node.parent).getComponent("Poseidon_Wheel").enterWheelGame();
          Global.SlotsSoundMgr.playBgm("music_Poseidon_freespin_bg");
          this.CanDoNextRound();
        } else this._bottomScript.ShowFreeModel(false);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
        cc.find("LMSlots_Collect_Puzzle", this.node.parent).active = !bFree;
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            this._getWildNum() < 2 && this._bottomScript.ShowBtnsByState("moveing_2");
            for (var i = 0; i < this._reels.length; i++) {
              var item = this._reels[i];
              var reelStopInterv = this.GetReelStopInter(i);
              item.StopMove(reelStopInterv);
            }
          } else this._stopTime = dt;
        }
        if (this._playRoleAnimation) {
          this._roleAnimationTimer -= dt;
          if (this._roleAnimationTimer <= 0) {
            this._playRoleAnimation = false;
            this._roleAnimationTimer = 10;
            var jmnanren = cc.find("role/jmnanren", this.node.parent);
            var animationName = "";
            animationName = (Math.random() < .5, "Idle");
            jmnanren.getComponent(sp.Skeleton).clearTracks();
            jmnanren.getComponent(sp.Skeleton).setAnimation(0, animationName, true);
          }
        }
      },
      setWheelScripts: function setWheelScripts(script) {
        this.wheel_script = script;
      },
      getBonusCoinNum: function getBonusCoinNum(index) {
        var idx = this._gameInfo.coinIdxs.indexOf(index);
        if (-1 !== idx && idx < this._gameInfo.coinList.length) return this._gameInfo.coinList[idx];
      },
      changeCoin: function changeCoin() {
        var _iterator2 = _createForOfIteratorHelper(this._gameInfo.winIdxs), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var index = _step2.value;
            var symbol = this.GetSymbolByIdx(index);
            symbol.GetShowId() === this._cfg.bonusId && symbol.GetData() && symbol.changeCoinNum(symbol.GetData(), this._gameInfo.coinExtraMult.mult);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      playGetCoinInFree: function playGetCoinInFree(callback) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var kuanghuo, curWinNum, _iterator3, _step3, _loop3, nWin;
          return regeneratorRuntime.wrap(function _callee6$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              kuanghuo = cc.find("kuanghuo", _this6.node);
              kuanghuo.active = false;
              curWinNum = 0;
              if (!(_this6._getWildNum() >= 2)) {
                _context8.next = 20;
                break;
              }
              _iterator3 = _createForOfIteratorHelper(_this6._gameInfo.winIdxs);
              _context8.prev = 5;
              _loop3 = regeneratorRuntime.mark(function _loop3() {
                var index, symbol;
                return regeneratorRuntime.wrap(function _loop3$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                   case 0:
                    index = _step3.value;
                    symbol = _this6.GetSymbolByIdx(index);
                    if (!(symbol.GetShowId() === _this6._cfg.bonusId && symbol.GetData())) {
                      _context7.next = 6;
                      break;
                    }
                    symbol.playGetCoinAnimation(function() {
                      _this6._playBonusSpine();
                      curWinNum += symbol.GetData().coin;
                      _this6._bottomScript.ShowWin(symbol.GetData().coin, 1, null, null);
                    });
                    _context7.next = 6;
                    return _this6.awaitTime(2);

                   case 6:
                   case "end":
                    return _context7.stop();
                  }
                }, _loop3);
              });
              _iterator3.s();

             case 8:
              if ((_step3 = _iterator3.n()).done) {
                _context8.next = 12;
                break;
              }
              return _context8.delegateYield(_loop3(), "t0", 10);

             case 10:
              _context8.next = 8;
              break;

             case 12:
              _context8.next = 17;
              break;

             case 14:
              _context8.prev = 14;
              _context8.t1 = _context8["catch"](5);
              _iterator3.e(_context8.t1);

             case 17:
              _context8.prev = 17;
              _iterator3.f();
              return _context8.finish(17);

             case 20:
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() !== cc.vv.gameData.GetTotalFree() > 0 && _this6.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              _this6.ShowBottomWin(nWin - curWinNum, cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                _this6.CheckExitFreeGame() ? _this6._bottomScript.ShowFreeModel(false) : _this6.CheckSpecialReward() || _this6.CanDoNextRound();
              });

             case 23:
             case "end":
              return _context8.stop();
            }
          }, _callee6, null, [ [ 5, 14, 17, 20 ] ]);
        }))();
      },
      hideScatterBg: function hideScatterBg() {
        var _iterator4 = _createForOfIteratorHelper(this._reels), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var reel = _step4.value;
            reel.setScatterBgVisible(false);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      },
      haveWildInReel: function haveWildInReel(reelIdx) {
        var reel = this._reels[reelIdx];
        if (reel) for (var i = 0; i < this._cfg.row; i++) {
          var symbol = reel.GetSymbolByRow(i);
          if (symbol && symbol.GetShowId() === this._cfg.wildId) return true;
        }
        return false;
      },
      _getWildNum: function _getWildNum() {
        var wildNum = 0;
        var one = 0;
        var two = 0;
        if (this._gameInfo) for (var i = 0; i < this._gameInfo.resultCards.length; i++) {
          var id = this._gameInfo.resultCards[i];
          if (i % 5 === 0 && id === this._cfg.wildId && 0 === one) {
            one = 1;
            wildNum++;
          }
          if (i % 5 === 1 && id === this._cfg.wildId && 0 === two) {
            two = 1;
            wildNum++;
          }
        }
        return wildNum;
      },
      _playBonusSpine: function _playBonusSpine() {
        var spine = cc.find("bonus_node/bouns_sj_01", this.node.parent);
        if (spine) {
          spine.active = true;
          spine.position = spine.parent.convertToNodeSpaceAR(this._bottomScript.getWinLabelNor().convertToWorldSpaceAR(cc.v2(0, 0)));
          spine.getComponent(sp.Skeleton).clearTracks();
          spine.getComponent(sp.Skeleton).setToSetupPose();
          spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          spine.getComponent(sp.Skeleton).setCompleteListener(function() {
            spine.active = false;
          });
        }
      },
      _getAddCount: function _getAddCount() {
        var addCount = 0;
        if (this._gameInfo) for (var i = 0; i < this._gameInfo.resultCards.length; i++) {
          if (i >= 10) break;
          var id = this._gameInfo.resultCards[i];
          if (20 !== id) {
            addCount = i <= 4 ? 2 : 1;
            break;
          }
        }
        return addCount;
      },
      _showGameBg: function _showGameBg(bFree) {
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        normalBg.active = !bFree;
        normalFree.active = bFree;
      },
      awaitTime: function awaitTime(time) {
        var _this7 = this;
        return new Promise(function(success, failed) {
          _this7.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Poseidon_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b997cNEzwlNoqsR3qH1aZG6", "Poseidon_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      StartMove: function StartMove() {
        this._super();
        this.setCoinText({
          coin: 0,
          jackpotId: null
        });
      },
      setCoinText: function setCoinText(data, rate) {
        var coin_node = cc.find("coin_bg", this.node);
        var text = coin_node.getChildByName("coin");
        var minor = coin_node.getChildByName("minor");
        var major = coin_node.getChildByName("major");
        if (data.jackpotId) {
          switch (data.jackpotId) {
           case 2:
            minor.active = true;
            major.active = false;
            break;

           case 3:
            minor.active = false;
            major.active = true;
            break;

           default:
            minor.active = false;
            major.active = false;
          }
          coin_node.active = true;
          text.active = false;
        } else if (data.coin && 0 !== data.coin) {
          minor.active = false;
          major.active = false;
          data.coin = rate ? data.coin * rate : data.coin;
          text.getComponent(cc.Label).string = Global.formatNumShort(data.coin);
          coin_node.active = true;
          text.active = true;
        } else coin_node.active = false;
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        data && this.setCoinText(data);
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" !== cfg.symbol[id].stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              if (id === cfg.wildId) {
                var slots = cc.vv.gameData.GetSlotsScript();
                (0 === this._reelIdx && this._symbolIdx < cfg.row || 1 === this._reelIdx && slots.haveWildInReel(0)) && cc.vv.AudioManager.playEff("games/Poseidon/", "symbol_wild", true);
              }
            }
          }
        }
      },
      playGetCoinAnimation: function playGetCoinAnimation(callback) {
        var _this = this;
        this._showNode.runAction(cc.sequence(cc.scaleTo(.2, 1.4), cc.callFunc(function() {
          var fangdahuo = cc.find("symbol_3/fangdahuo", _this.node);
          fangdahuo.getComponent(sp.Skeleton).clearTracks();
          fangdahuo.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        }), cc.delayTime(.5), cc.scaleTo(.2, 1), cc.callFunc(function() {
          callback && callback();
        })));
        var coin_node = cc.find("coin_bg", this.node);
        coin_node.runAction(cc.sequence(cc.scaleTo(.2, 1.4), cc.delayTime(.5), cc.scaleTo(.2, 1)));
      },
      changeCoinNum: function changeCoinNum(data, rate) {
        var _this2 = this;
        var shuzibao = cc.find("symbol_3/shuzibao", this.node);
        shuzibao.active = true;
        shuzibao.getComponent(sp.Skeleton).setToSetupPose();
        shuzibao.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        shuzibao.getComponent(sp.Skeleton).setCompleteListener(function() {
          shuzibao.active = false;
        });
        this.scheduleOnce(function() {
          _this2.setCoinText(data, rate);
        }, .1);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  Poseidon_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "403eeo7k7hMopWqWq6xxOCu", "Poseidon_Wheel");
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
        move_node_1: cc.Node,
        move_node_2: cc.Node,
        waikuang: cc.Node,
        xuanzhong: cc.Node,
        beishu: cc.Node,
        _commonMove: false,
        _speed: 50,
        _round: 2,
        _needStop: false,
        _minSpeed: 800,
        _speedChangeInterval: 20,
        _targetIndex: 1,
        _endPosY: 0,
        _startPosY: 0,
        _successCallback: null,
        _beginStop: false,
        _wheelCfg: []
      },
      onLoad: function onLoad() {
        this._bottom_posY = this.move_node_1.y - this.move_node_1.height;
        this._reset_posY = this.move_node_2.y;
        this._startPosY = this.move_node_1.y;
        this._wheelCfg = [ 2, 3, 10, 5, 2, 3, 10, 5, 2, 3, 1e3, 5 ];
      },
      update: function update(dt) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var xuanzhongAnimation;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!_this._commonMove) {
                _context.next = 29;
                break;
              }
              _this._beginStop && (_this._speed = 1500);
              _this.move_node_1.y -= dt * _this._speed;
              _this.move_node_2.y -= dt * _this._speed;
              if (_this.move_node_1.y <= _this._bottom_posY) {
                _this.move_node_1.y = _this._reset_posY;
                if (_this._beginStop) {
                  _this._round--;
                  if (_this._round <= 0) {
                    _this._round = 0;
                    _this._needStop = true;
                  }
                }
              }
              _this.move_node_2.y <= _this._bottom_posY && (_this.move_node_2.y = _this._reset_posY);
              if (!_this._needStop) {
                _context.next = 29;
                break;
              }
              if (_this.move_node_1.y - _this._endPosY <= 305) {
                _this._speed -= _this._speedChangeInterval;
                _this._speed <= _this._minSpeed && (_this._speed = _this._minSpeed);
              }
              if (!(_this.move_node_1.y <= _this._endPosY)) {
                _context.next = 29;
                break;
              }
              _this.move_node_1.y = _this._endPosY;
              _this._targetIndex >= 6 ? _this.move_node_2.y = _this.move_node_1.y + _this.move_node_1.height : _this.move_node_2.y = _this.move_node_1.y - _this.move_node_1.height;
              _this._commonMove = false;
              cc.vv.AudioManager.playEff("games/Poseidon/", "wheel_stop", true);
              _this.beishu.getComponent(sp.Skeleton).clearTracks();
              _this.beishu.getComponent(sp.Skeleton).setAnimation(0, "animation" + _this._wheelCfg[_this._targetIndex - 1], false);
              xuanzhongAnimation = "animation3";
              1e3 === _this._wheelCfg[_this._targetIndex - 1] ? xuanzhongAnimation = "animation1" : 10 === _this._wheelCfg[_this._targetIndex - 1] && (xuanzhongAnimation = "animation2");
              _this.xuanzhong.active = true;
              _this.xuanzhong.getComponent(sp.Skeleton).clearTracks();
              _this.xuanzhong.getComponent(sp.Skeleton).setAnimation(0, xuanzhongAnimation, true);
              _this.xuanzhong.getComponent(sp.Skeleton).setCompleteListener(function() {
                _this.xuanzhong.active = false;
              });
              _context.next = 23;
              return _this.awaitTime(1.5);

             case 23:
              cc.vv.AudioManager.playEff("games/Poseidon/", "bonus_num", true);
              cc.vv.gameData.GetSlotsScript().changeCoin();
              _context.next = 27;
              return _this.awaitTime(1);

             case 27:
              _this.reset();
              cc.vv.gameData.GetSlotsScript().playGetCoinInFree();

             case 29:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      enterWheelGame: function enterWheelGame() {
        this.node.active = true;
        this.reset();
        this._commonMove = true;
      },
      exitWheelGame: function exitWheelGame() {
        this._commonMove = false;
        this.node.active = false;
      },
      startWheel: function startWheel(winIndex, successCallback) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._targetIndex = winIndex;
              _this2._successCallback = successCallback;
              _this2._caculateEndPosY();
              _this2.waikuang.active = true;
              _context2.next = 6;
              return _this2.awaitTime(1);

             case 6:
              _this2._beginStop = true;
              cc.vv.AudioManager.playEff("games/Poseidon/", "wheel", true);

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      reset: function reset() {
        this._commonMove = true;
        this._speed = 50;
        this._needStop = false;
        this._beginStop = false;
        this._round = 2;
        this.waikuang.active = false;
      },
      _caculateEndPosY: function _caculateEndPosY() {
        this._endPosY = this._startPosY - 61 * (this._targetIndex - 6);
      },
      awaitTime: function awaitTime(dt) {
        var _this3 = this;
        return new Promise(function(success, failed) {
          _this3.scheduleOnce(function() {
            success();
          }, dt);
        });
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Poseidon_Cfg", "Poseidon_Logic", "Poseidon_Reel", "Poseidon_Slots", "Poseidon_Symbol", "Poseidon_Wheel" ]);