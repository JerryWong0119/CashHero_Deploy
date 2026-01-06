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
  TheFrogPrince_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57210/ogNxCIa7BlekcVi4C", "TheFrogPrince_Cfg");
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
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3",
        win_node: "animation_3",
        trigger_ani: {
          name: "animation",
          zIndex: 300
        },
        win_ani: {
          name: "animation2",
          zIndex: 200
        },
        stop_ani: {
          name: "animation1",
          zIndex: 400
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
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9",
        win_node: "animation_9",
        win_ani: {
          name: "animation4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10",
        win_node: "animation_10",
        win_ani: {
          name: "animation1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11",
        win_node: "animation_11",
        win_ani: {
          name: "animation3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12",
        win_node: "animation_12",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        idle_ani: {
          name: "animation4",
          zIndex: 200
        },
        stop_ani: {
          name: "animation5",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 13, {
        node: "symbol_13",
        win_node: "animation_13",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        idle_ani: {
          name: "animation4",
          zIndex: 200
        },
        stop_ani: {
          name: "animation5",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 14, {
        node: "symbol_14",
        win_node: "animation_14",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        idle_ani: {
          name: "animation4",
          zIndex: 200
        },
        stop_ani: {
          name: "animation5",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 15, {
        node: "symbol_15",
        win_node: "animation_15",
        win_ani: {
          name: "animation2",
          zIndex: 300
        },
        idle_ani: {
          name: "animation4",
          zIndex: 200
        },
        stop_ani: {
          name: "animation5",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 16, {
        node: "symbol_empty"
      }), _symbol),
      puzzleCfg: {
        atlas: "puzzle_6",
        bg: "theme_store_puzzle6_bg",
        full: "theme_store_puzzle6_full",
        pieces: [ "theme_store_puzzle_6_1", "theme_store_puzzle_6_2", "theme_store_puzzle_6_3", "theme_store_puzzle_6_4", "theme_store_puzzle_6_5", "theme_store_puzzle_6_6", "theme_store_puzzle_6_7", "theme_store_puzzle_6_8", "theme_store_puzzle_6_9", "theme_store_puzzle_6_10", "theme_store_puzzle_6_11", "theme_store_puzzle_6_12" ]
      },
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TheFrogPrince_Slots",
        Reels: "TheFrogPrince_Reel",
        Symbols: "TheFrogPrince_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 100,
        height: 101
      },
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11 ],
      normalBgm: "base_bgm",
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      frogIds: [ 14, 15, 13, 12 ],
      emptyId: 16,
      kuang: "kuang",
      autoModelDelay: .5,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      AddAntiTime: 1.5,
      bounce: true,
      helpItems: [ "games/TheFrogPrince/prefab/help_item_1", "games/TheFrogPrince/prefab/help_item_2", "games/TheFrogPrince/prefab/help_item_3", "games/TheFrogPrince/prefab/help_item_4", "games/TheFrogPrince/prefab/help_item_5" ],
      commEffect: {
        path: "games/TheFrogPrince/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ],
        win3: [ "win3", "win3end" ],
        win4: [ "win4", "win4end" ]
      },
      bounceInfo: {
        distance: 20,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/TheFrogPrince/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_notify",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheFrogPrince_FrogReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c524oWQDxD8oiasaZksCSJ", "TheFrogPrince_FrogReel");
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
        _frogSymbols: []
      },
      createFrogSymbol: function createFrogSymbol(id, data, posY) {
        var cfg = cc.vv.gameData.getGameCfg();
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = cc.find("frog_parent", this.node);
        var scp = node.addComponent(cfg.scripts.Symbols);
        node.zIndex = 1e3;
        cc.log("create frog id " + id);
        scp.ShowById(id, data);
        node.y = posY;
        this._frogSymbols.push(scp);
        return node;
      },
      getFrogSymbols: function getFrogSymbols() {
        return this._frogSymbols;
      },
      StartMove: function StartMove() {
        this._result = null;
        var cfg = cc.vv.gameData.getGameCfg();
        this._curY = 0;
        this._bMoving = true;
        this._bStoping = false;
        this._offsetY = 0;
        for (var i = 0; i < this._symbols.length; i++) {
          var symbol = this._symbols[i];
          symbol.StartMove();
        }
        this._speed = cfg.speed;
        this._offset = cfg.symbolSize.height;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {},
      removeFrogSymbols: function removeFrogSymbols() {
        var _iterator = _createForOfIteratorHelper(this._frogSymbols), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var frogSymbol = _step.value;
            frogSymbol.setAnimationToTop(false);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        cc.find("frog_parent", this.node).removeAllChildren();
        cc.find("mask/holder", this.node).removeAllChildren();
        this._symbols = [];
        this._frogSymbols = [];
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheFrogPrince_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82443gKTCZLyIfwr4fI9hyX", "TheFrogPrince_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheFrogPrince_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0d171jwy8VK7bYs+K2K88tl", "TheFrogPrince_Reel");
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
        var allFrog = true;
        for (var i = 0; i < 4; i++) if (-1 === cc.vv.gameData.getGameCfg().frogIds.indexOf(this._symbols[i].GetShowId())) {
          allFrog = false;
          break;
        }
        if (allFrog) {
          var _iterator = _createForOfIteratorHelper(this._symbols), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var symbol = _step.value;
              symbol.playStopAnimation();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          cc.vv.AudioManager.playEff("games/TheFrogPrince/", "bonus_notify", true);
        }
        if (4 === this._reelIdx && !cc.vv.gameData.GetSlotsScript().isFullFrogOneColumn()) {
          var _iterator2 = _createForOfIteratorHelper(this._symbols), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _symbol = _step2.value;
              if (_symbol.GetShowId() === cc.vv.gameData.getGameCfg().bonusId) {
                _symbol.playWinAnimation();
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        this._super();
        if (4 === this._reelIdx) {
          var _iterator3 = _createForOfIteratorHelper(this._symbols), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var symbol = _step3.value;
              if (symbol.GetShowId() === cc.vv.gameData.getGameCfg().bonusId) {
                symbol.playStopAnimation();
                break;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      },
      AddCount: function AddCount(count) {
        var deltaTime = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        var offsetY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._bResizing) return;
        this._bResizing = true;
        this._nCount += count;
        this._offsetY = offsetY;
        var nOffCount = this._offsetY;
        count < 0 && (nOffCount = -1 * this._offsetY);
        var cfg = cc.vv.gameData.getGameCfg();
        this.totalAddHeight = (count - nOffCount) * cfg.symbolSize.height;
        this.deltaHeight = this.totalAddHeight / deltaTime;
        this.curAddHeight = 0;
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && objs.push(bg);
        objs.push(cc.find("reels_frame_bottom/line_" + this._reelIdx, this.node.parent.parent));
        objs.push(cc.find("reels_frame_bottom/line_" + (this._reelIdx + 1), this.node.parent.parent));
        return objs;
      },
      GetResizeMoveingObjs: function GetResizeMoveingObjs() {
        var objs = [];
        var frameTop = cc.find(cc.js.formatStr("reels_frame/top_%s", this._reelIdx + 1), this.node.parent.parent);
        frameTop && objs.push(frameTop);
        return objs;
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        this._super(bShow, name);
        false === bShow && this._stopRightNow && cc.vv.AudioManager.stopEffectByName("reel_notify");
        var node = cc.find("mask/" + name, this.node);
        node ? node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
      },
      getSymbols: function getSymbols() {
        return this._symbols;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheFrogPrince_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "046fdsOcXNK9ZFJVjYOSjdf", "TheFrogPrince_Slots");
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
        _frogReels: [],
        _inEpicLink: false,
        _playCommonAnimation: true,
        _animationTimer: 10
      },
      Init: function Init() {
        this._super();
        var self = this;
        this.node.parent.parent.getComponent("LMSlots_Puzzle").setCallback(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(freeInfo) {
            var free_dialog, enter_node, btn_start, clickFunc;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                self._bottomScript.ShowBtnsByState("moveing_1");
                free_dialog = cc.find("free_dialog", self.node.parent);
                free_dialog.active = true;
                cc.vv.AudioManager.playEff("games/TheFrogPrince/", "free_popup_in", true);
                enter_node = free_dialog.getChildByName("enter_node");
                enter_node.scale = .1;
                enter_node.active = true;
                enter_node.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1)));
                _context.next = 10;
                return cc.vv.gameData.awaitTime(.5);

               case 10:
                btn_start = enter_node.getChildByName("btn_start");
                clickFunc = function clickFunc() {
                  enter_node.getChildByName("btn_start").off("click");
                  cc.vv.gameData.SetTotalFree(freeInfo.freeCnt);
                  cc.vv.gameData.SetFreeTime(freeInfo.freeCnt);
                  cc.vv.AudioManager.playEff("games/TheFrogPrince/", "fgcollect", true);
                  cc.vv.AudioManager.playEff("games/TheFrogPrince/", "transition", true);
                  var qieping = cc.find("qieping", self.node.parent);
                  qieping.active = true;
                  qieping.getComponent(sp.Skeleton).clearTracks();
                  qieping.getComponent(sp.Skeleton).setToSetupPose();
                  qieping.getComponent(sp.Skeleton).setAnimation(0, "skill03", false);
                  qieping.getComponent(sp.Skeleton).setCompleteListener(function() {
                    Global.SlotsSoundMgr.playBgm("free_bgm");
                    self.ShowGameview(true);
                    self.scheduleOnce(function() {
                      self.CanDoNextRound();
                    }, 1);
                  });
                  enter_node.active = false;
                  free_dialog.active = false;
                };
                cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                enter_node.getChildByName("btn_start").off("click");
                enter_node.getChildByName("btn_start").on("click", function() {
                  btn_start.stopAllActions();
                  clickFunc();
                });

               case 15:
               case "end":
                return _context.stop();
              }
            }, _callee);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      createReels: function createReels(col, row) {
        this._super(col, row);
        for (var i = 2; i < 5; i++) {
          var node = cc.find("reels/frog_reel" + i, this.node);
          var scp = node.addComponent("TheFrogPrince_FrogReel");
          this._frogReels.push(scp);
        }
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var rest = cc.vv.gameData.GetFreeTime();
        if (rest) {
          this.ShowGameview(true);
          this.CanDoNextRound();
        } else this.ShowGameview(false);
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this = this;
        var free_dialog = cc.find("free_dialog", this.node.parent);
        if (this._gameInfo.allFreeCnt > 0 && this._gameInfo.freeCnt === this._gameInfo.allFreeCnt) {
          cc.vv.AudioManager.playEff("games/TheFrogPrince/", "fg_bell", true);
          for (var i = 0; i < this._reels.length; i++) {
            var reel = this._reels[i];
            for (var j = 0; j < this._cfg.row; j++) {
              var symbol = reel.GetSymbolByRow(j);
              symbol && symbol.GetShowId() === this._cfg.scatterId && symbol.playWinAnimation();
            }
          }
          this.Backup();
          var self = this;
          this.scheduleOnce(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var enter_node, btn_start, clickFunc;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                free_dialog.active = true;
                cc.vv.AudioManager.playEff("games/TheFrogPrince/", "free_popup_in", true);
                enter_node = free_dialog.getChildByName("enter_node");
                enter_node.scale = .1;
                enter_node.active = true;
                enter_node.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1)));
                _context2.next = 8;
                return cc.vv.gameData.awaitTime(.5);

               case 8:
                btn_start = enter_node.getChildByName("btn_start");
                clickFunc = function clickFunc() {
                  enter_node.getChildByName("btn_start").off("click");
                  cc.vv.AudioManager.playEff("games/TheFrogPrince/", "fgcollect", true);
                  cc.vv.AudioManager.playEff("games/TheFrogPrince/", "transition", true);
                  var qieping = cc.find("qieping", self.node.parent);
                  qieping.active = true;
                  qieping.getComponent(sp.Skeleton).clearTracks();
                  qieping.getComponent(sp.Skeleton).setToSetupPose();
                  qieping.getComponent(sp.Skeleton).setAnimation(0, "skill03", false);
                  qieping.getComponent(sp.Skeleton).setCompleteListener(function() {
                    Global.SlotsSoundMgr.playBgm("free_bgm");
                    self.ShowGameview(true);
                    self.scheduleOnce(function() {
                      self.CanDoNextRound();
                    }, 1);
                  });
                  enter_node.active = false;
                  free_dialog.active = false;
                };
                cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                enter_node.getChildByName("btn_start").off("click");
                enter_node.getChildByName("btn_start").on("click", function() {
                  btn_start.stopAllActions();
                  clickFunc();
                });

               case 13:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          })), 2);
          return true;
        }
        if (this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0) {
          cc.vv.AudioManager.playEff("games/TheFrogPrince/", "fg_bell", true);
          for (var _i = 0; _i < this._reels.length; _i++) {
            var _reel = this._reels[_i];
            for (var _j = 0; _j < this._cfg.row; _j++) {
              var _symbol = _reel.GetSymbolByRow(_j);
              _symbol && _symbol.GetShowId() === this._cfg.scatterId && _symbol.playWinAnimation();
            }
          }
          this.scheduleOnce(function() {
            free_dialog.active = true;
            var extra_node = free_dialog.getChildByName("extra_node");
            cc.vv.AudioManager.playEff("games/TheFrogPrince/", "free_popup_in", true);
            extra_node.scale = .1;
            extra_node.active = true;
            extra_node.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1), cc.delayTime(2), cc.callFunc(_asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                 case 0:
                  free_dialog.active = false;
                  extra_node.active = false;
                  _context3.next = 4;
                  return _this.awaitTime(.2);

                 case 4:
                  _this.CanDoNextRound();

                 case 5:
                 case "end":
                  return _context3.stop();
                }
              }, _callee3);
            })))));
          }, 2);
          return true;
        }
        return false;
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var total = cc.vv.gameData.GetTotalFree();
        var rest = cc.vv.gameData.GetFreeTime();
        var free_dialog = cc.find("free_dialog", this.node.parent);
        if (total > 0 && 0 === rest) {
          free_dialog.active = true;
          cc.vv.AudioManager.playEff("games/TheFrogPrince/", "free_collect_popup_in", true);
          var result_node = free_dialog.getChildByName("result_node");
          result_node.scale = .1;
          result_node.active = true;
          result_node.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1)));
          var winNum = result_node.getChildByName("coin");
          winNum.active = true;
          Global.doRoallNumEff(winNum, 0, cc.vv.gameData.GetGameTotalFreeWin(), 1.5, null, null, 0, true);
          var self = this;
          var btn_collect = result_node.getChildByName("btn_collect");
          var clickFunc = function clickFunc() {
            result_node.getChildByName("btn_collect").off("click");
            cc.vv.AudioManager.playEff("games/TheFrogPrince/", "fgcollect", true);
            self.scheduleOnce(function() {
              self.Resume();
              self.ShowGameview(false);
            }, .5);
            cc.vv.AudioManager.playEff("games/TheFrogPrince/", "transition", true);
            var qieping = cc.find("qieping", self.node.parent);
            qieping.active = true;
            qieping.getComponent(sp.Skeleton).clearTracks();
            qieping.getComponent(sp.Skeleton).setToSetupPose();
            qieping.getComponent(sp.Skeleton).setAnimation(0, "skill03", false);
            qieping.getComponent(sp.Skeleton).setCompleteListener(function() {
              self.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                self.CanDoNextRound();
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
              });
            });
            result_node.active = false;
            free_dialog.active = false;
          };
          cc.vv.gameData.checkAutoPlay(btn_collect, _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                _context4.next = 2;
                return cc.vv.gameData.awaitTime(.5);

               case 2:
                clickFunc();

               case 3:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          })));
          result_node.getChildByName("btn_collect").off("click");
          result_node.getChildByName("btn_collect").on("click", function() {
            btn_collect.stopAllActions();
            clickFunc();
          });
          return true;
        }
        return false;
      },
      CheckTriggerSubGame: function CheckTriggerSubGame() {
        return !!this._gameInfo.epicInfo;
      },
      triggerEpicLink: function triggerEpicLink() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var frogIndexs, i, card, symbol, _iterator, _step, frogIndex, _symbol2, epiclink_node, enter_node, wangzi;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _context5.next = 2;
              return _this2.awaitTime(.5);

             case 2:
              cc.vv.AudioManager.playEff("games/TheFrogPrince/", "fg_bell", true);
              frogIndexs = _this2._findFullColumnFrogIndex();
              i = 0;

             case 5:
              if (!(i < 4)) {
                _context5.next = 14;
                break;
              }
              card = _this2._gameInfo.resultCards[4 + 5 * i];
              if (!(card === _this2._cfg.bonusId)) {
                _context5.next = 11;
                break;
              }
              symbol = _this2.GetSymbolByIdx(5 + 5 * i);
              symbol.playTriggerAnimation();
              return _context5.abrupt("break", 14);

             case 11:
              i++;
              _context5.next = 5;
              break;

             case 14:
              _iterator = _createForOfIteratorHelper(frogIndexs);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  frogIndex = _step.value;
                  _symbol2 = _this2.GetSymbolByIdx(frogIndex + 1);
                  _symbol2 && _symbol2.playWinAnimation();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _context5.next = 18;
              return _this2.awaitTime(1);

             case 18:
              epiclink_node = cc.find("epiclink_dialog", _this2.node.parent);
              epiclink_node.active = true;
              enter_node = epiclink_node.getChildByName("enter_node");
              enter_node.active = true;
              enter_node.scale = 0;
              cc.vv.AudioManager.playEff("games/TheFrogPrince/", "respins_popup_in", true);
              wangzi = cc.find("wangzi", _this2.node.parent);
              enter_node.runAction(cc.sequence(cc.scaleTo(.5, 1), cc.delayTime(1), cc.callFunc(function() {
                _this2._playCommonAnimation = false;
                wangzi.getComponent(sp.Skeleton).setAnimation(0, "skill01", false);
              }), cc.scaleTo(.5, 0), cc.callFunc(function() {
                epiclink_node.active = false;
                cc.find("LMSlots_PrizePool_1", _this2.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
                  prizeType: 0,
                  pauseNum: _this2._gameInfo.epicInfo.jackpotValues[0]
                }, {
                  prizeType: 1,
                  pauseNum: _this2._gameInfo.epicInfo.jackpotValues[1]
                }, {
                  prizeType: 2,
                  pauseNum: _this2._gameInfo.epicInfo.jackpotValues[2]
                }, {
                  prizeType: 3,
                  pauseNum: _this2._gameInfo.epicInfo.jackpotValues[3]
                } ]);
                Global.SlotsSoundMgr.playNormalBgm();
                _this2.startEpicLink();
              })));
              _this2._inEpicLink = true;

             case 27:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      startEpicLink: function startEpicLink() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var column, princeIndex;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              column = _this3._getFrogColumnIndex();
              if (!(-1 !== column)) {
                _context7.next = 5;
                break;
              }
              princeIndex = _this3._gameInfo.resultCards.indexOf(_this3._cfg.bonusId);
              if (!(-1 !== princeIndex)) {
                _context7.next = 5;
                break;
              }
              return _context7.delegateYield(regeneratorRuntime.mark(function _callee6() {
                var row, feilizi, color, frogs, _iterator2, _step2, frog, symbol, wangziSymbol, lunzhou, frogReel, remainTimes, epiclink_times, curFrogNum, i, coin, result, length, j, randomIndex, frogSymbol, newFrog, jpzhongjiang, animation, epiclink_node, result_node, _i2, btn_collect, clickFunc;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                   case 0:
                    _this3._changeRemainTimes(3);
                    row = Math.floor(princeIndex / 5);
                    feilizi = cc.find("reels_frame/feilizi_" + (row + 1), _this3.node);
                    color = _this3._getFrogColor();
                    if (feilizi) {
                      feilizi.getComponent(sp.Skeleton).clearTracks();
                      feilizi.getComponent(sp.Skeleton).setAnimation(0, "animation" + color, false);
                    }
                    _context6.next = 7;
                    return _this3.awaitTime(.5);

                   case 7:
                    frogs = _this3._findFullColumnFrogIndex();
                    cc.log(frogs);
                    _iterator2 = _createForOfIteratorHelper(frogs);
                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        frog = _step2.value;
                        symbol = _this3.GetSymbolByIdx(frog + 1);
                        symbol && symbol.playidleAnimation();
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                    wangziSymbol = _this3.GetSymbolByIdx(princeIndex + 1);
                    wangziSymbol && wangziSymbol.playWinAnimation();
                    lunzhou = cc.find("reels_frame/boneslunzhou_" + color, _this3.node);
                    lunzhou.active = true;
                    lunzhou.getComponent(sp.Skeleton).clearTracks();
                    lunzhou.getComponent(sp.Skeleton).setToSetupPose();
                    lunzhou.getComponent(sp.Skeleton).setAnimation(0, "animation" + color + "_1", false);
                    lunzhou.getComponent(sp.Skeleton).setCompleteListener(function(track) {
                      var name = track.animation ? track.animation.name : "";
                      if (name === "animation" + color + "_1") {
                        lunzhou.getComponent(sp.Skeleton).clearTracks();
                        lunzhou.getComponent(sp.Skeleton).setAnimation(0, "animation" + color + "_2", true);
                      }
                    });
                    _context6.next = 21;
                    return _this3.awaitTime(.5);

                   case 21:
                    cc.vv.AudioManager.playEff("games/TheFrogPrince/", "reel_raise", true);
                    2 === column ? _this3._reels[column].AddCount(5, 1) : _this3._reels[column].AddCount(4, 1);
                    _context6.next = 25;
                    return _this3.awaitTime(1);

                   case 25:
                    frogReel = _this3._frogReels[column - 1];
                    if (frogReel) {
                      frogReel.active = true;
                      2 === column ? frogReel.Init(column, 9) : frogReel.Init(column, 8);
                    }
                    remainTimes = 3;
                    epiclink_times = cc.find("epiclink_times", _this3.node.parent);
                    if (epiclink_times) {
                      epiclink_times.active = true;
                      epiclink_times.scale = 0;
                      epiclink_times.position = cc.find("epiclink_pos_" + color, _this3.node.parent).position;
                      epiclink_times.runAction(cc.sequence(cc.scaleTo(.5, 1), cc.delayTime(1), cc.callFunc(function() {
                        _this3._changeRemainTimes(remainTimes);
                      }), cc.delayTime(.5), cc.callFunc(function() {
                        remainTimes--;
                        _this3._changeRemainTimes(remainTimes);
                      })));
                    }
                    _context6.next = 32;
                    return _this3.awaitTime(2);

                   case 32:
                    _this3._topScript.StartMove();
                    curFrogNum = 4;
                    i = 0;

                   case 35:
                    if (!(i < _this3._gameInfo.epicInfo.steps.length)) {
                      _context6.next = 72;
                      break;
                    }
                    coin = _this3._gameInfo.epicInfo.steps[i];
                    result = [];
                    length = 2 === column ? 9 : 8;
                    for (j = 0; j < length; j++) result.push({
                      sid: _this3._cfg.emptyId
                    });
                    frogReel.StartMove();
                    _context6.next = 43;
                    return _this3.awaitTime(2);

                   case 43:
                    randomIndex = parseInt(Math.random() * (length - curFrogNum)) + curFrogNum;
                    if (0 !== coin) {
                      result[randomIndex] = {
                        sid: _this3._gameInfo.resultCards[frogs[0]],
                        data: coin
                      };
                      curFrogNum++;
                    }
                    frogReel.SetResult(result);
                    frogReel.StopMove(1);
                    _context6.next = 49;
                    return _this3.awaitTime(1);

                   case 49:
                    0 !== coin ? cc.vv.AudioManager.playEff("games/TheFrogPrince/", "sbonus_notify", true) : cc.vv.AudioManager.playEff("games/TheFrogPrince/", "reel_stop", true);
                    _context6.next = 52;
                    return _this3.awaitTime(1);

                   case 52:
                    0 !== coin ? remainTimes = 3 : remainTimes--;
                    _this3._changeRemainTimes(remainTimes);
                    if (!(0 !== coin)) {
                      _context6.next = 67;
                      break;
                    }
                    frogSymbol = frogReel.GetSymbolByRow(randomIndex);
                    newFrog = frogReel.createFrogSymbol(_this3._gameInfo.resultCards[frogs[0]], coin, frogSymbol.node.y);
                    frogReel.GetSymbolByRow(randomIndex).ShowById(_this3._cfg.emptyId);
                    newFrog.getComponent("TheFrogPrince_Symbol").SetSymbolIdx(curFrogNum);
                    newFrog.getComponent("TheFrogPrince_Symbol").setTopAniNode(cc.find("top_ani", _this3.node));
                    cc.vv.AudioManager.playEff("games/TheFrogPrince/", "respins_act", true);
                    newFrog.runAction(cc.sequence(cc.moveTo(1, 0, (curFrogNum - .5) * _this3._cfg.symbolSize.height), cc.callFunc(function() {
                      var _iterator3 = _createForOfIteratorHelper(frogReel.getFrogSymbols()), _step3;
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                          var frog = _step3.value;
                          frog.playidleAnimation();
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                      var _iterator4 = _createForOfIteratorHelper(_this3._reels[column].getSymbols()), _step4;
                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                          var _frog = _step4.value;
                          _frog.playidleAnimation();
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                    })));
                    _context6.next = 64;
                    return _this3.awaitTime(3);

                   case 64:
                    if (3 === remainTimes) {
                      remainTimes--;
                      _this3._changeRemainTimes(remainTimes);
                    }
                    _context6.next = 69;
                    break;

                   case 67:
                    _context6.next = 69;
                    return _this3.awaitTime(2);

                   case 69:
                    i++;
                    _context6.next = 35;
                    break;

                   case 72:
                    cc.vv.AudioManager.playEff("games/TheFrogPrince/", "bonusreel", true);
                    epiclink_times.runAction(cc.sequence(cc.scaleTo(.5, 0), cc.callFunc(function() {
                      epiclink_times.active = false;
                    })));
                    _context6.next = 76;
                    return _this3.awaitTime(.5);

                   case 76:
                    if (!_this3._gameInfo.epicInfo.jackpotId) {
                      _context6.next = 103;
                      break;
                    }
                    cc.vv.AudioManager.playEff("games/TheFrogPrince/", "jackpot_win", true);
                    jpzhongjiang = cc.find("LMSlots_PrizePool_1/jpzhongjiang", _this3.node.parent);
                    animation = "animation" + _this3._gameInfo.epicInfo.jackpotId;
                    1 === _this3._gameInfo.epicInfo.jackpotId ? animation = "animation2" : 2 === _this3._gameInfo.epicInfo.jackpotId && (animation = "animation1");
                    jpzhongjiang.getComponent(sp.Skeleton).clearTracks();
                    jpzhongjiang.getComponent(sp.Skeleton).setAnimation(0, animation, false);
                    _context6.next = 85;
                    return _this3.awaitTime(1);

                   case 85:
                    epiclink_node = cc.find("epiclink_dialog", _this3.node.parent);
                    result_node = epiclink_node.getChildByName("result_node");
                    epiclink_node.active = true;
                    result_node.active = true;
                    result_node.scale = 0;
                    cc.vv.AudioManager.playEff("games/TheFrogPrince/", "jp_collect_popup_in", true);
                    for (_i2 = 0; _i2 < 4; _i2++) result_node.getChildByName("jackpot_" + _i2).active = false;
                    result_node.getChildByName("jackpot_" + _this3._gameInfo.epicInfo.jackpotId).active = true;
                    result_node.runAction(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.1, 1), cc.callFunc(function() {
                      Global.doRoallNumEff(result_node.getChildByName("coin"), 0, _this3._gameInfo.epicInfo.jackpotValue, 3, null, null, 0, true);
                    })));
                    _context6.next = 96;
                    return cc.vv.gameData.awaitTime(.6);

                   case 96:
                    btn_collect = result_node.getChildByName("btn_collect");
                    clickFunc = function clickFunc() {
                      var _this4 = this;
                      result_node.runAction(cc.sequence(cc.scaleTo(.5, 0), cc.callFunc(function() {
                        result_node.active = false;
                        epiclink_node.active = false;
                        _this4.getFrogReward(frogReel.getFrogSymbols(), _this4._reels[column].getSymbols(), column, lunzhou, color, _this4._gameInfo.epicInfo.jackpotValue, frogReel);
                      })));
                    };
                    cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                    btn_collect.off(cc.Node.EventType.TOUCH_END);
                    btn_collect.on(cc.Node.EventType.TOUCH_END, function() {
                      btn_collect.stopAllActions();
                      clickFunc();
                    });
                    _context6.next = 104;
                    break;

                   case 103:
                    _this3.getFrogReward(frogReel.getFrogSymbols(), _this3._reels[column].getSymbols(), column, lunzhou, color, 0, frogReel);

                   case 104:
                   case "end":
                    return _context6.stop();
                  }
                }, _callee6);
              })(), "t0", 5);

             case 5:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      getFrogReward: function getFrogReward(frogReelSymbols, commonReelSymbols, frogColumn, lunzhou, color, beginWinCoin, frogReel) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var win, endPos, _loop, i, _loop2, _i3, wangziSpine, _i4, frog;
          return regeneratorRuntime.wrap(function _callee8$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              win = beginWinCoin;
              endPos = cc.find("LMSlots_Bottom/winBg/lbl_winNum_nor", _this5.node.parent).convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this5.node.parent.convertToNodeSpaceAR(endPos);
              _loop = regeneratorRuntime.mark(function _loop(i) {
                var frog, startPos;
                return regeneratorRuntime.wrap(function _loop$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                   case 0:
                    frog = frogReelSymbols[i];
                    frog.ShowById(frog.GetShowId(), frog.GetData());
                    frog.setAnimationToTop(false);
                    startPos = frog.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this5.node.parent.convertToNodeSpaceAR(startPos);
                    cc.vv.AudioManager.playEff("games/TheFrogPrince/", "bonus_counter", true);
                    _this5._generateParticle(startPos, endPos, function() {
                      win += frog.GetData();
                      _this5._bottomScript.SetWin(win);
                    });
                    _context8.next = 9;
                    return _this5.awaitTime(1.5);

                   case 9:
                   case "end":
                    return _context8.stop();
                  }
                }, _loop);
              });
              i = frogReelSymbols.length - 1;

             case 5:
              if (!(i >= 0)) {
                _context10.next = 10;
                break;
              }
              return _context10.delegateYield(_loop(i), "t0", 7);

             case 7:
              i--;
              _context10.next = 5;
              break;

             case 10:
              _loop2 = regeneratorRuntime.mark(function _loop2(_i3) {
                var frog, startPos;
                return regeneratorRuntime.wrap(function _loop2$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                   case 0:
                    frog = commonReelSymbols[_i3];
                    frog.ShowById(frog.GetShowId(), frog.GetData());
                    frog.setAnimationToTop(false);
                    startPos = frog.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this5.node.parent.convertToNodeSpaceAR(startPos);
                    cc.vv.AudioManager.playEff("games/TheFrogPrince/", "bonus_counter", true);
                    _this5._generateParticle(startPos, endPos, function() {
                      win += frog.GetData();
                      _this5._bottomScript.SetWin(win);
                    });
                    _context9.next = 9;
                    return _this5.awaitTime(1.5);

                   case 9:
                   case "end":
                    return _context9.stop();
                  }
                }, _loop2);
              });
              _i3 = commonReelSymbols.length - 2;

             case 12:
              if (!(_i3 >= 0)) {
                _context10.next = 17;
                break;
              }
              return _context10.delegateYield(_loop2(_i3), "t1", 14);

             case 14:
              _i3--;
              _context10.next = 12;
              break;

             case 17:
              frogReel.removeFrogSymbols();
              cc.vv.AudioManager.playEff("games/TheFrogPrince/", "reel_fall", true);
              2 === frogColumn ? _this5._reels[frogColumn].AddCount(-5, 1) : _this5._reels[frogColumn].AddCount(-4, 1);
              lunzhou.getComponent(sp.Skeleton).clearTracks();
              lunzhou.getComponent(sp.Skeleton).setAnimation(0, "animation" + color + "_3", false);
              lunzhou.getComponent(sp.Skeleton).setCompleteListener(function(track) {
                var name = track.animation ? track.animation.name : "";
                name === "animation" + color + "_3" && (lunzhou.active = false);
              });
              _context10.next = 25;
              return _this5.awaitTime(.5);

             case 25:
              wangziSpine = cc.find("wangzi", _this5.node.parent).getComponent(sp.Skeleton);
              wangziSpine.setAnimation(0, "skill02", false);
              wangziSpine.addAnimation(0, "dile01", true);
              wangziSpine.setCompleteListener(function(track) {
                wangziSpine.getComponent(sp.Skeleton).setCompleteListener(null);
                var name = track.animation ? track.animation.name : "";
                "skill02" === name && (_this5._playCommonAnimation = true);
              });
              _context10.next = 31;
              return _this5.awaitTime(1.5);

             case 31:
              for (_i4 = commonReelSymbols.length - 2; _i4 >= 0; _i4--) {
                frog = commonReelSymbols[_i4];
                frog.playWinAnimation();
              }
              _this5.ShowBottomWin(_this5._gameInfo.epicInfo.winCoin, _this5._gameInfo.epicInfo.winCoin, true, function() {
                cc.find("LMSlots_PrizePool_1", _this5.node.parent).getComponent("LMSlots_PrizePool_Base").ResumePausePool();
                _this5._inEpicLink = false;
                _this5.CanDoNextRound();
                Global.SlotsSoundMgr.playNormalBgm();
              });

             case 33:
             case "end":
              return _context10.stop();
            }
          }, _callee8);
        }))();
      },
      _generateParticle: function _generateParticle(startPos, endPos, callback) {
        var particle = cc.instantiate(cc.find("shouji_1", this.node.parent));
        particle.active = true;
        particle.parent = this.node.parent;
        particle.position = startPos;
        particle.runAction(cc.sequence(cc.moveTo(1, endPos), cc.callFunc(function() {
          callback && callback();
        }), cc.removeSelf()));
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var nWin;
          return regeneratorRuntime.wrap(function _callee9$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              _this6.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nWin > 0 ? cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() ? _this6.ShowBottomWin(nWin, cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                _this6.CheckTriggerSubGame() ? _this6.triggerEpicLink() : _this6.CheckEnterFreeGame() || _this6.CheckExitFreeGame() || _this6.node.parent.parent.getComponent("LMSlots_Puzzle").puzzleFinish() || _this6.CanDoNextRound();
              }) : _this6.ShowBottomWin(nWin, nWin, true, function() {
                _this6.CheckTriggerSubGame() ? _this6.triggerEpicLink() : _this6.CheckEnterFreeGame() || _this6.CheckExitFreeGame() || _this6.node.parent.parent.getComponent("LMSlots_Puzzle").puzzleFinish() || _this6.CanDoNextRound();
              }) : _this6.CheckTriggerSubGame() ? _this6.triggerEpicLink() : _this6.CheckEnterFreeGame() || _this6.CheckExitFreeGame() || _this6.node.parent.parent.getComponent("LMSlots_Puzzle").puzzleFinish() || _this6.CanDoNextRound();

             case 4:
             case "end":
              return _context11.stop();
            }
          }, _callee9);
        }))();
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        this._super(colIdx);
        if (3 === colIdx && this.isFullFrogOneColumn()) {
          cc.vv.AudioManager.playEff("games/TheFrogPrince/", "reel_notify", true);
          this._reels[4].ShowAntiEffect(true, "node_anti");
          this._reels[4].AddDelayTime(this._cfg.AddAntiTime ? this._cfg.AddAntiTime : 1);
          this._reels[4].SetSpeed(2e3);
        }
        4 === colIdx && this._reels[4].ShowAntiEffect(false, "node_anti");
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
            -1 !== this._cfg.frogIds.indexOf(cards[i]) && (res.data = this.getBonusCoinNum(i + 1));
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i5 = 0; _i5 < this._reels.length; _i5++) {
          var item = this._reels[_i5];
          var reelRes = reelResults[_i5];
          item.SetResult(reelRes);
        }
      },
      getBonusCoinNum: function getBonusCoinNum(index) {
        var idx = this._gameInfo.frogIdxs.indexOf(index);
        if (-1 !== idx && idx < this._gameInfo.frogCoins.length) return this._gameInfo.frogCoins[idx];
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
      },
      isInEpicLink: function isInEpicLink() {
        return this._inEpicLink;
      },
      update: function update(dt) {
        var _this7 = this;
        this._super(dt);
        if (this._playCommonAnimation) {
          this._animationTimer -= dt;
          if (this._animationTimer <= 0) {
            this._playCommonAnimation = false;
            this._animationTimer = 10;
            var wangzi = cc.find("wangzi", this.node.parent).getComponent(sp.Skeleton);
            wangzi.setTrackCompleteListener(wangzi.getCurrent(0), function(track) {
              wangzi.setTrackCompleteListener(track, null);
              var name = track.animation ? track.animation.name : "";
              if ("dile01" === name) {
                _this7._playCommonAnimation = true;
                wangzi.setAnimation(0, "dile02", false);
                wangzi.addAnimation(0, "dile01", true);
              }
            });
          }
        }
      },
      isFullFrogOneColumn: function isFullFrogOneColumn() {
        var finalResult = false;
        for (var i = 1; i < 4; i++) {
          var result = true;
          for (var j = 0; j < 4; j++) {
            var card = this._gameInfo.resultCards[i + 5 * j];
            if (-1 === this._cfg.frogIds.indexOf(card)) {
              result = false;
              break;
            }
          }
          if (result) {
            finalResult = true;
            break;
          }
        }
        return finalResult;
      },
      _findFullColumnFrogIndex: function _findFullColumnFrogIndex() {
        var finalResult = [];
        for (var i = 1; i < 4; i++) {
          var result = [];
          for (var j = 0; j < 4; j++) {
            var card = this._gameInfo.resultCards[i + 5 * j];
            -1 !== this._cfg.frogIds.indexOf(card) && result.push(i + 5 * j);
          }
          if (4 === result.length) {
            finalResult = result;
            break;
          }
        }
        return finalResult;
      },
      _getFrogColumnIndex: function _getFrogColumnIndex() {
        var finalResult = -1;
        for (var i = 1; i < 4; i++) {
          var result = i;
          for (var j = 0; j < 4; j++) {
            var card = this._gameInfo.resultCards[i + 5 * j];
            if (-1 === this._cfg.frogIds.indexOf(card)) {
              result = -1;
              break;
            }
          }
          if (-1 !== result) {
            finalResult = result;
            break;
          }
        }
        return finalResult;
      },
      _getFrogColor: function _getFrogColor() {
        var array = this._findFullColumnFrogIndex();
        var index = this._cfg.frogIds.indexOf(this._gameInfo.resultCards[array[0]]);
        return index + 1;
      },
      _changeRemainTimes: function _changeRemainTimes(times) {
        if (times < 0 || times > 3) return;
        var epiclink_times = cc.find("epiclink_times", this.node.parent);
        if (epiclink_times) {
          var shuziqiehuan = epiclink_times.getChildByName("shuziqiehuan");
          shuziqiehuan.getComponent(sp.Skeleton).setToSetupPose();
          shuziqiehuan.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          for (var i = 0; i < 4; i++) {
            var _times = epiclink_times.getChildByName("times_" + i);
            _times.active = false;
          }
          epiclink_times.getChildByName("times_" + times).active = true;
        }
      },
      awaitTime: function awaitTime(time) {
        var _this8 = this;
        return new Promise(function(success, failed) {
          _this8.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheFrogPrince_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "355c85Fys9B+LsT7FUaQ9qk", "TheFrogPrince_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      StartMove: function StartMove() {
        this._super();
        this.setCoinText(0);
      },
      setCoinText: function setCoinText(coin) {
        var text = cc.find("coin", this.node);
        if (0 !== coin) {
          text.getComponent(cc.Label).string = Global.formatNumShort(coin, 0);
          text.active = true;
        } else text.active = false;
      },
      ShowById: function ShowById(id, data) {
        var cfg = cc.vv.gameData.getGameCfg();
        cc.vv.gameData.GetSlotsScript().isInEpicLink() && -1 === cfg.frogIds.indexOf(id) && (id = cfg.emptyId);
        this._super(id, data);
        data && this.setCoinText(data);
        this._id === cfg.emptyId && this.setCoinText(0);
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
          if ("" !== cfg.symbol[id].trigger_ani.name) {
            aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, true);
          }
        }
        return isPlay;
      },
      playidleAnimation: function playidleAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._state = "idle";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if ("" !== cfg.symbol[id].idle_ani.name) {
            aniNode.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        }
        return isPlay;
      },
      setTopAniNode: function setTopAniNode(node) {
        this._topAniNode = node;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "TheFrogPrince_Cfg", "TheFrogPrince_FrogReel", "TheFrogPrince_Logic", "TheFrogPrince_Reel", "TheFrogPrince_Slots", "TheFrogPrince_Symbol" ]);