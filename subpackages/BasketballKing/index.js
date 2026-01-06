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
  BasketballKing_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70059jpiX5LNYRpH92Cb8cc", "BasketballKing_Cfg");
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
        node: "symbol_1"
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2"
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3"
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4"
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5"
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6"
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7"
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8"
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9"
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10",
        win_node: "animation_10",
        stop_ani: {
          name: "Scatter_01",
          zIndex: 100
        },
        win_ani: {
          name: "Scatter_02",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11",
        win_node: "animation_11",
        win_ani: {
          name: "wenhao",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12",
        win_node: "animation_12",
        win_ani: {
          name: "JP_collect",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "symbol_13"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "BasketballKing_Slots",
        Reels: "BasketballKing_Reel",
        Symbols: "BasketballKing_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 130,
        height: 120
      },
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
      questionMarkId: 11,
      scatterId: 10,
      dollarId: 12,
      kuang: "kuang",
      speed: 1500,
      reelStopInter: .3,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .4
      },
      autoModelDelay: 1,
      AddAntiTime: 1.5,
      reelStateInfo: [ {
        id: [ 10 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/BasketballKing/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelsctr",
        antSound: "reelfast",
        antSpeed: 2e3
      } ],
      helpItems: [ "games/BasketballKing/prefab/help_item_1", "games/BasketballKing/prefab/help_item_2" ],
      commEffect: {
        path: "games/BasketballKing/",
        win1: [ "win_a", "win_end" ],
        win2: [ "win_b", "win_end" ],
        win3: [ "win_c", "win_end" ],
        win4: [ "win_d", "win_end" ]
      },
      normalBgm: "ngbgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  BasketballKing_ExtraReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfdd4I7iOdPvK0UmXpA7Dw9", "BasketballKing_ExtraReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
      },
      playReelStop: function playReelStop() {
        this._super();
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.getExtraSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var idx = cc.vv.gameData.getExtraSlotsScript().GetLastStopReelIdx();
        if (this._reelIdx === idx) {
          cc.log(cc.js.formatStr("OnReelSpinEnd, %s", idx));
          cc.vv.gameData.getExtraSlotsScript().OnSpinEnd();
        }
      },
      ReadyToStop: function ReadyToStop() {
        this._bNotifyReadyStop || (this._bNotifyReadyStop = true);
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  BasketballKing_ExtraSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "364c18ktWBIq7Ld21b8vqTu", "BasketballKing_ExtraSlots");
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
        _endCallback: null
      },
      Init: function Init(row) {
        cc.find("reels", this.node).active = true;
        cc.find("reels_bg", this.node).active = true;
        this._gold_reel = cc.find("gold_reel", this.node.parent);
        cc.find("caise_kuang", this.node).active = true;
        cc.find("caise_kuang", this.node).getComponent(sp.Skeleton).setAnimation(0, row + "X" + row, true);
        cc.find("luoxia_lizi", this.node).active = false;
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = row;
        this._topAniNode = cc.find("top_ani", this.node);
        this.createReels(this._col, this._row);
        var _iterator = _createForOfIteratorHelper(this._reels), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var reel = _step.value;
            for (var i = 0; i < this._row; i++) {
              var symbol = reel.GetSymbolByRow(i);
              symbol.setAnimationToTop(false);
              symbol.ShowById(13);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var _this = this;
        var reel = this._reels[colIdx];
        for (var i = 0; i < this._row; i++) {
          var symbol = reel.GetSymbolByRow(i);
          if (symbol.GetShowId() === this._cfg.questionMarkId) {
            Global.SlotsSoundMgr.playEffect("flyUP");
            symbol.playWinAnimation();
            var oriSymbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx((this._row - i - 1) * this._cfg.col + colIdx + 1);
            if (oriSymbol) {
              oriSymbol.ShowById(this._cfg.questionMarkId);
              oriSymbol.playWinAnimation();
            }
            var fly_wenhao = cc.instantiate(cc.find("fly_wenhao", this.node.parent));
            fly_wenhao.active = true;
            fly_wenhao.parent = this.node.parent;
            var startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
            startPos = this.node.parent.convertToNodeSpaceAR(startPos);
            fly_wenhao.position = startPos;
            var endPos = cc.find("lundai/wheel/wheel_mask/index_1", this._gold_reel).convertToWorldSpaceAR(cc.v2(0, 0));
            endPos = this.node.parent.convertToNodeSpaceAR(endPos);
            cc.tween(fly_wenhao).to(.5, {
              position: endPos,
              scale: 1.1
            }).to(.2, {
              scale: 1
            }).call(function() {
              cc.find("lundai/wheel/wheel_mask/index_1", _this._gold_reel).getComponent("ImgSwitchCmp").setIndex(11);
            }).removeSelf().start();
          }
          if (symbol.GetShowId() === this._cfg.dollarId) {
            symbol.playWinAnimation();
            Global.SlotsSoundMgr.playEffect("jpfly");
            var fly_dollar = cc.instantiate(cc.find("fly_dollar", this.node.parent));
            fly_dollar.active = true;
            fly_dollar.parent = this.node.parent;
            var _startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
            _startPos = this.node.parent.convertToNodeSpaceAR(_startPos);
            fly_dollar.position = _startPos;
            var collect_node = cc.find("slots/collect_node", this.node.parent);
            var _endPos = collect_node.convertToWorldSpaceAR(cc.v2(0, 0));
            _endPos = this.node.parent.convertToNodeSpaceAR(_endPos);
            cc.tween(fly_dollar).to(.5, {
              position: _endPos
            }).call(function() {
              cc.vv.gameData.GetSlotsScript().addDollar();
            }).removeSelf().start();
          }
        }
      },
      createReels: function createReels(col, row) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          if (!node.getComponent("BasketballKing_ExtraReel")) {
            var scp = node.addComponent("BasketballKing_ExtraReel");
            scp.Init(i, row, this._topAniNode);
            this._reels.push(scp);
          }
        }
      },
      startSlot: function startSlot() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("addreel");
                      _this2._endCallback = success;
                      _this2.node.scale = .5;
                      cc.tween(_this2.node).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context.next = 6;
                      return cc.vv.gameData.awaitTime(1);

                     case 6:
                      _this2.StartMove();
                      Global.SlotsSoundMgr.playEffect("addreelrun");
                      _this2.SetSlotsResult(cc.vv.gameData.getGameInfo().secretInfo.extraCards);
                      cc.vv.gameData.GetSlotsScript().addCount(_this2._row);

                     case 10:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      CanStopSlot: function CanStopSlot() {
        return cc.vv.gameData.getGameInfo().secretInfo.extraCards.length > 0;
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _context3.next = 2;
              return cc.vv.gameData.awaitTime(1);

             case 2:
              Global.SlotsSoundMgr.playEffect("reeldown");
              cc.tween(_this3.node).to(.5, {
                scale: .85
              }, {
                easing: "backIn"
              }).call(function() {
                cc.find("caise_kuang", _this3.node).active = false;
                cc.find("luoxia_lizi", _this3.node).active = true;
                cc.find("luoxia_lizi", _this3.node).getComponent(sp.Skeleton).setAnimation(0, _this3._row + "X" + _this3._row + "_lizi", true);
                cc.find("reels", _this3.node).active = false;
                cc.find("reels_bg", _this3.node).active = false;
              }).start();
              _context3.next = 6;
              return cc.vv.gameData.awaitTime(1);

             case 6:
              _this3.node.active = false;
              _this3._endCallback && _this3._endCallback();

             case 8:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  BasketballKing_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b036cjPaX1PkbhhrphvKjYS", "BasketballKing_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _isExtraSlots: false
      },
      isFreeOver: function isFreeOver() {
        return !!this._gameInfo && (this._gameInfo.allFreeCnt > 0 && 0 === this._gameInfo.freeCnt);
      },
      isInFreeGame: function isInFreeGame() {
        return this._deskInfo.restFreeCount >= 0 && this._deskInfo.allFreeCount > 0;
      },
      setIsExtraSlots: function setIsExtraSlots(isOrNot) {
        this._isExtraSlots = isOrNot;
      },
      getIsExtraSlots: function getIsExtraSlots() {
        return this._isExtraSlots;
      },
      setExtraSlotsScript: function setExtraSlotsScript(scp) {
        this._extraSlotsScript = scp;
      },
      getExtraSlotsScript: function getExtraSlotsScript() {
        return this._extraSlotsScript;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  BasketballKing_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8839ciAbdBF3ZszTDq5MRkH", "BasketballKing_Logic");
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
  BasketballKing_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "acb8bN2ZUxB2IzzpffveuFO", "BasketballKing_Reel");
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
        this._super();
      },
      getSymbols: function getSymbols() {
        return this._symbols;
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false === bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                var node = cc.find(info.antiNode, this.node);
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
          var _node = cc.find(name, this.node);
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      GetResizeMoveingObjs: function GetResizeMoveingObjs() {
        var objs = [];
        return objs;
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var mask = cc.find("mask", this.node);
        mask && objs.push(mask);
        0 === this._reelIdx && objs.push(cc.find("reels_bg/black", this.node.parent.parent));
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && objs.push(bg);
        return objs;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  BasketballKing_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a290hi4/hMv7WSh49sb0xx", "BasketballKing_Slots");
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
        _dollarNum: 0
      },
      Init: function Init() {
        this._super();
        this._gold_reel = cc.find("gold_reel", this.node.parent);
        var deskInfo = cc.vv.gameData.getDeskInfo();
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        cc.find("reels_frame/frame", this.node).active = true;
        cc.find("reels_frame/frame_2", this.node).active = false;
        cc.find("reels_frame/frame_4", this.node).active = false;
        var _iterator = _createForOfIteratorHelper(this._reels), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var reel = _step.value;
            reel.StartRecycleSymbol(.1);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.ClearAllTopShow();
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, rest, i, jp;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              rest = cc.vv.gameData.GetFreeTime();
              if (!rest) {
                _context.next = 15;
                break;
              }
              _context.next = 5;
              return cc.vv.gameData.awaitTime(.2);

             case 5:
              _this.ShowGameview(true);
              for (i = 0; i < 10; i++) {
                jp = cc.find("collect_node/jp_" + (i + 1), _this.node);
                cc.find("gold", jp).active = i < deskInfo.freeGameInfo.bonusCnt;
              }
              _this._dollarNum = deskInfo.freeGameInfo.bonusCnt;
              _context.next = 10;
              return cc.vv.gameData.awaitTime(.5);

             case 10:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");
              _this.CanDoNextRound();
              _context.next = 18;
              break;

             case 15:
              _this.ShowGameview(false);
              _this.CanDoNextRound();
              deskInfo.needbet > deskInfo.currmult && _this.popBetupDialog();

             case 18:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._super(msg);
              if (_this2.CheckEnterFreeGame() && Math.random() < .1) {
                _this2.SetStopTime(4);
                _this2.showBigAward();
              }
              if (cc.vv.gameData.GetGameWin() / cc.vv.gameData.GetTotalBet() > 10 && Math.random() < .5) {
                _this2.SetStopTime(4);
                _this2.showBigAward();
              }

             case 3:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() === cc.vv.gameData.GetTotalFree();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var deskInfo, node, script, i, _i, winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (!_this3._gameInfo.secretInfo) {
                _context4.next = 39;
                break;
              }
              _context4.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              deskInfo = cc.vv.gameData.getDeskInfo();
              _context4.next = 6;
              return _this3._gold_reel.getComponent("BasketballKing_Wheel").startWheel(_this3._gameInfo.secretInfo, deskInfo.needbet > deskInfo.currmult, false);

             case 6:
              if (!(_this3._gameInfo.secretInfo.upLevel > 0)) {
                _context4.next = 33;
                break;
              }
              _context4.next = 9;
              return cc.vv.gameData.awaitTime(2);

             case 9:
              _context4.next = 11;
              return _this3._gold_reel.getComponent("BasketballKing_Wheel").resetToNormal();

             case 11:
              node = 1 === _this3._gameInfo.secretInfo.upLevel ? cc.find("slots_2", _this3.node.parent) : cc.find("slots_4", _this3.node.parent);
              script = node.getComponent("BasketballKing_ExtraSlots");
              script || (script = node.addComponent("BasketballKing_ExtraSlots"));
              cc.vv.gameData.setExtraSlotsScript(script);
              cc.vv.gameData.setIsExtraSlots(true);
              node.active = true;
              script.Init(1 === _this3._gameInfo.secretInfo.upLevel ? 2 : 4);
              _context4.next = 20;
              return script.startSlot();

             case 20:
              _context4.next = 22;
              return cc.vv.gameData.awaitTime(1);

             case 22:
              _context4.next = 24;
              return _this3._gold_reel.getComponent("BasketballKing_Wheel").startWheel(_this3._gameInfo.secretInfo, deskInfo.needbet > deskInfo.currmult, true);

             case 24:
              Global.SlotsSoundMgr.playEffect("flyDown");
              for (i = 0; i < _this3._gameInfo.secretInfo.cards.length; i++) _this3._gameInfo.secretInfo.cards[i] === _this3._cfg.questionMarkId && function() {
                var idx = i + 1;
                var fly_icon = cc.instantiate(cc.find("fly_icon", _this3.node.parent));
                fly_icon.active = true;
                fly_icon.parent = _this3.node.parent;
                fly_icon.getComponent("ImgSwitchCmp").setIndex(_this3._gameInfo.secretInfo.convertCard - 1);
                var startPos = cc.find("lundai/wheel/wheel_mask/index_1", _this3._gold_reel).convertToWorldSpaceAR(cc.v2(0, 0));
                startPos = _this3.node.parent.convertToNodeSpaceAR(startPos);
                fly_icon.position = startPos;
                var symbol = _this3.GetSymbolByIdx(idx);
                var endPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = _this3.node.parent.convertToNodeSpaceAR(endPos);
                cc.tween(fly_icon).to(.5, {
                  position: endPos
                }).call(function() {
                  symbol.setAnimationToTop(false);
                  symbol.ShowById(_this3._gameInfo.secretInfo.convertCard);
                }).removeSelf().start();
              }();
              _context4.next = 28;
              return cc.vv.gameData.awaitTime(.5);

             case 28:
              _context4.next = 30;
              return _this3._gold_reel.getComponent("BasketballKing_Wheel").resetToNormal();

             case 30:
              cc.vv.gameData.setIsExtraSlots(false);
              _context4.next = 39;
              break;

             case 33:
              Global.SlotsSoundMgr.playEffect("flyDown");
              for (_i = 0; _i < _this3._gameInfo.resultCards.length; _i++) _this3._gameInfo.resultCards[_i] === _this3._cfg.questionMarkId && function() {
                var idx = _i + 1;
                var fly_icon = cc.instantiate(cc.find("fly_icon", _this3.node.parent));
                fly_icon.active = true;
                fly_icon.parent = _this3.node.parent;
                fly_icon.getComponent("ImgSwitchCmp").setIndex(_this3._gameInfo.secretInfo.convertCard - 1);
                var startPos = cc.find("lundai/wheel/wheel_mask/index_1", _this3._gold_reel).convertToWorldSpaceAR(cc.v2(0, 0));
                startPos = _this3.node.parent.convertToNodeSpaceAR(startPos);
                fly_icon.position = startPos;
                var symbol = _this3.GetSymbolByIdx(idx);
                var endPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = _this3.node.parent.convertToNodeSpaceAR(endPos);
                cc.tween(fly_icon).to(.5, {
                  position: endPos
                }).call(function() {
                  symbol.setAnimationToTop(false);
                  symbol.ShowById(_this3._gameInfo.secretInfo.convertCard);
                }).removeSelf().start();
              }();
              _context4.next = 37;
              return cc.vv.gameData.awaitTime(.5);

             case 37:
              _context4.next = 39;
              return _this3._gold_reel.getComponent("BasketballKing_Wheel").resetToNormal();

             case 39:
              _this3.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this3.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    _this3.CheckEnterFreeGame() ? _this3.triggerFreeGame() : _this3.CheckExitFreeGame() ? _this3.triggerExitFreeGame() : _this3.CanDoNextRound();

                   case 1:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })));

             case 44:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      addCount: function addCount(row) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var _iterator2, _step2, reel, cards, acRow, reelResults, i, _row, col, res, _i2, item, reelRes, j, symbol;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              cc.find("reels_frame/frame", _this4.node).active = false;
              cc.find("reels_frame/frame_2", _this4.node).active = 2 === row;
              cc.find("reels_frame/frame_4", _this4.node).active = 4 === row;
              _iterator2 = _createForOfIteratorHelper(_this4._reels);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  reel = _step2.value;
                  reel.AddCount(row, .1);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              _context5.next = 7;
              return cc.vv.gameData.awaitTime(.2);

             case 7:
              cards = _this4._gameInfo.secretInfo.cards;
              acRow = cards.length / _this4._col;
              reelResults = [];
              for (i = 0; i < cards.length; i++) {
                _row = Math.floor(i / acRow);
                col = i % _this4._col;
                if (_this4._cfg.symbol[cards[i]]) {
                  res = {};
                  res.sid = cards[i];
                  reelResults[col] || (reelResults[col] = []);
                  reelResults[col].unshift(res);
                }
              }
              for (_i2 = 0; _i2 < _this4._reels.length; _i2++) {
                item = _this4._reels[_i2];
                reelRes = reelResults[_i2];
                for (j = 0; j < acRow; j++) {
                  symbol = item.GetSymbolByRow(j);
                  reelRes[j] !== _this4._cfg.questionMarkId && symbol.ShowById(reelRes[j].sid);
                }
              }

             case 12:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.find("collect_node", this.node).active = bFree;
        cc.find("collect_node/kuang", this.node).active = false;
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row;
        row = this._gameInfo.secretInfo && this._gameInfo.secretInfo.upLevel > 0 ? this._gameInfo.secretInfo.cards.length / this._col - Math.floor((idx - 1) / this._col) - 1 : this._gameInfo.resultCards.length / this._col - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var _this5 = this;
        var reel = this._reels[colIdx];
        var hasQuestionMark = false;
        for (var i = 0; i < this._cfg.row; i++) {
          var symbol = reel.GetSymbolByRow(i);
          if (symbol.GetShowId() === this._cfg.questionMarkId) {
            hasQuestionMark = true;
            Global.SlotsSoundMgr.playEffect("reelquset");
            symbol.playWinAnimation();
            var fly_wenhao = cc.instantiate(cc.find("fly_wenhao", this.node.parent));
            fly_wenhao.active = true;
            fly_wenhao.parent = this.node.parent;
            var startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
            startPos = this.node.parent.convertToNodeSpaceAR(startPos);
            fly_wenhao.position = startPos;
            var endPos = cc.find("lundai/wheel/wheel_mask/index_1", this._gold_reel).convertToWorldSpaceAR(cc.v2(0, 0));
            endPos = this.node.parent.convertToNodeSpaceAR(endPos);
            cc.tween(fly_wenhao).to(.5, {
              position: endPos,
              scale: 1.1
            }).to(.2, {
              scale: 1
            }).call(function() {
              cc.find("lundai/wheel/wheel_mask/index_1", _this5._gold_reel).getComponent("ImgSwitchCmp").setIndex(11);
            }).removeSelf().start();
          }
          if (symbol.GetShowId() === this._cfg.dollarId) {
            symbol.playWinAnimation();
            Global.SlotsSoundMgr.playEffect("jpfly");
            var fly_dollar = cc.instantiate(cc.find("fly_dollar", this.node.parent));
            fly_dollar.active = true;
            fly_dollar.parent = this.node.parent;
            var _startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
            _startPos = this.node.parent.convertToNodeSpaceAR(_startPos);
            fly_dollar.position = _startPos;
            var _endPos = cc.find("collect_node", this.node).convertToWorldSpaceAR(cc.v2(0, 0));
            _endPos = this.node.parent.convertToNodeSpaceAR(_endPos);
            cc.tween(fly_dollar).to(.5, {
              position: _endPos
            }).call(function() {
              _this5.addDollar();
            }).removeSelf().start();
          }
        }
        hasQuestionMark && Global.SlotsSoundMgr.playEffect("flyUP");
      },
      addDollar: function addDollar() {
        this._dollarNum++;
        var jackpot = this.getTargetJackpot();
        var collect_node = cc.find("collect_node", this.node);
        cc.find("collect", collect_node).getComponent(sp.Skeleton).setAnimation(0, "dian_collect", false);
        cc.find("target", collect_node).getComponent(cc.Label).string = jackpot.targetNum;
        cc.find("num", collect_node).getComponent(cc.Label).string = this._dollarNum;
        for (var j = 0; j < 10; j++) cc.find("jp_" + (j + 1) + "/gold", collect_node).active = j < this._dollarNum;
        cc.find("prize", collect_node).getComponent("ImgSwitchCmp").setIndex(jackpot.targetIndex);
      },
      getTargetJackpot: function getTargetJackpot() {
        var jackpotNeedNum = [ 7, 8, 9, 10 ];
        for (var i = 0; i < jackpotNeedNum.length; i++) if (this._dollarNum < jackpotNeedNum[i]) return {
          targetNum: jackpotNeedNum[i],
          targetIndex: i
        };
        return {
          targetNum: 10,
          targetIndex: 3
        };
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var i, card, symbol, _i3, jp;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              for (i = 0; i < _this6._gameInfo.resultCards.length; i++) {
                card = _this6._gameInfo.resultCards[i];
                if (card === _this6._cfg.scatterId) {
                  symbol = _this6.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              _context6.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context6.next = 7;
              return _this6.popFreeDialog();

             case 7:
              _this6.ShowGameview(true);
              _this6._dollarNum = 0;
              for (_i3 = 0; _i3 < 10; _i3++) {
                jp = cc.find("collect_node/jp_" + (_i3 + 1), _this6.node);
                cc.find("gold", jp).active = false;
              }
              cc.find("collect_node/target", _this6.node).getComponent(cc.Label).string = 7;
              cc.find("collect_node/num", _this6.node).getComponent(cc.Label).string = 0;
              _context6.next = 14;
              return cc.vv.gameData.awaitTime(.5);

             case 14:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbm");
              _this6.CanDoNextRound();

             case 17:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      StopMove: function StopMove() {
        cc.vv.gameData.getIsExtraSlots() ? cc.vv.gameData.getExtraSlotsScript().StopMove() : this._super();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              _context7.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              if (!_this7._gameInfo.jackpot) {
                _context7.next = 6;
                break;
              }
              _context7.next = 6;
              return _this7.popJackpotDialog();

             case 6:
              _context7.next = 8;
              return _this7.popFreeResultDialog();

             case 8:
              _this7.ShowGameview(false);
              _context7.next = 11;
              return cc.vv.gameData.awaitTime(1);

             case 11:
              _this7.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this7.CanDoNextRound();
              });

             case 12:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      popFreeDialog: function popFreeDialog() {
        var _this8 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
            var free_dialog, dialog, freetanchuang, times;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgbegin");
                free_dialog = cc.find("dialog_node", _this8.node.parent);
                free_dialog.active = true;
                dialog = cc.find("common_enter_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                times = cc.find("times", freetanchuang);
                times.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                _context8.next = 13;
                return cc.vv.gameData.awaitTime(2);

               case 13:
                cc.tween(dialog).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  free_dialog.active = false;
                  dialog.active = false;
                  success();
                }).start();

               case 14:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this9 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success) {
            var free_dialog, dialog, freetanchuang, yifenkuang;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgend");
                free_dialog = cc.find("dialog_node", _this9.node.parent);
                free_dialog.active = true;
                dialog = cc.find("result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                yifenkuang = cc.find("yifenkuang", freetanchuang);
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.GetGameTotalFreeWin());
                _context9.next = 13;
                return cc.vv.gameData.awaitTime(2);

               case 13:
                cc.tween(dialog).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  free_dialog.active = false;
                  dialog.active = false;
                  success();
                }).start();

               case 14:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      popJackpotDialog: function popJackpotDialog() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
                  var free_dialog, dialog, freetanchuang, yifenkuang, btn_collect;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("jpwin");
                      cc.find("collect_node/kuang", _this10.node).active = true;
                      free_dialog = cc.find("dialog_node", _this10.node.parent);
                      free_dialog.active = true;
                      dialog = cc.find("jackpot_node", free_dialog);
                      dialog.active = true;
                      dialog.scale = 1;
                      freetanchuang = cc.find("freetanchuang", dialog);
                      freetanchuang.scale = 0;
                      cc.tween(freetanchuang).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      yifenkuang = cc.find("yifenkuang", freetanchuang);
                      cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(_this10._gameInfo.jackpot.value);
                      cc.find("title", freetanchuang).getComponent("ImgSwitchCmp").setIndex(_this10._gameInfo.jackpot.id - 1);
                      btn_collect = cc.find("btn_collect", freetanchuang);
                      btn_collect.active = false;
                      cc.find("chaopiao", dialog).active = false;
                      _context10.next = 18;
                      return cc.vv.gameData.awaitTime(1);

                     case 18:
                      Global.SlotsSoundMgr.playEffect("jp_celebration");
                      cc.find("chaopiao", dialog).active = true;
                      btn_collect.active = true;
                      btn_collect.off("click");
                      btn_collect.on("click", function() {
                        btn_collect.off("click");
                        Global.SlotsSoundMgr.stopEffectByName("jp_celebration");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();
                      });

                     case 23:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x3) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      popBetupDialog: function popBetupDialog() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          var free_dialog, dialog, board, btn_power_mode, btn_regular_play;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              _this11._bottomScript.ShowBtnsByState("moveing_1");
              free_dialog = cc.find("dialog_node", _this11.node.parent);
              free_dialog.active = true;
              dialog = cc.find("betup_node", free_dialog);
              dialog.active = true;
              dialog.scale = 1;
              board = cc.find("betup_board", dialog);
              board.scale = 0;
              cc.tween(board).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              btn_power_mode = cc.find("btn_power_mode", board);
              btn_regular_play = cc.find("btn_regular_play", board);
              _context14.next = 13;
              return cc.vv.gameData.awaitTime(1);

             case 13:
              btn_power_mode.off("click");
              btn_power_mode.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                   case 0:
                    btn_power_mode.off("click");
                    _this11._bottomScript.SetBetIdx(cc.vv.gameData.getDeskInfo().needbet);
                    cc.tween(dialog).to(.5, {
                      scale: 0
                    }, {
                      easing: "backIn"
                    }).call(function() {
                      free_dialog.active = false;
                      dialog.active = false;
                      _this11.CanDoNextRound();
                    }).start();

                   case 3:
                   case "end":
                    return _context12.stop();
                  }
                }, _callee12);
              })));
              btn_regular_play.off("click");
              btn_regular_play.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                   case 0:
                    btn_regular_play.off("click");
                    cc.tween(dialog).to(.5, {
                      scale: 0
                    }, {
                      easing: "backIn"
                    }).call(function() {
                      free_dialog.active = false;
                      dialog.active = false;
                      _this11.CanDoNextRound();
                    }).start();

                   case 2:
                   case "end":
                    return _context13.stop();
                  }
                }, _callee13);
              })));

             case 17:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      showBigAward: function showBigAward() {
        Global.SlotsSoundMgr.playEffect("bigAward");
        var big_award = cc.find("big_award", this.node.parent);
        big_award.active = true;
        var dajiangyugao = cc.find("dajiangyugao", big_award);
        dajiangyugao.getComponent(sp.Skeleton).setAnimation(0, "dajiangyugao", false);
        dajiangyugao.getComponent(sp.Skeleton).setCompleteListener(function() {
          dajiangyugao.getComponent(sp.Skeleton).setCompleteListener(null);
          big_award.active = false;
        });
        var chaopiao = cc.find("chaopiao", big_award);
        chaopiao.getComponent(sp.Skeleton).setAnimation(0, "chaopiao", true);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  BasketballKing_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97059m1eFtD8IYQKmkWLOes", "BasketballKing_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  BasketballKing_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "231c9YzQgZMlor36wPgXDvs", "BasketballKing_Wheel");
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
      extends: cc.Component,
      properties: {
        items: [ cc.Node ],
        lundai: cc.Node,
        lundai_zhezhao: cc.Node,
        lundai_di: cc.Node,
        lundai_kuang: cc.Node,
        lundai_win: cc.Node,
        result: cc.Node,
        jiantou: cc.Node,
        _speed: 17,
        _count: 5,
        _startMove: false,
        _needStop: false,
        _backMove: false,
        _resultItem: null,
        _bottomPosX: 510,
        _successCallback: null,
        _secretInfo: null,
        _isCard: false,
        _isRegular: false
      },
      startWheel: function startWheel(secretInfo, isRegular, isCard) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this.reset();
                _this._successCallback = success;
                _this._isRegular = isRegular;
                _this._secretInfo = secretInfo;
                _this._startMove = true;
                _this._resultItem = _this.items[0];
                _this._isCard = isCard;
                _this.schedule(_this.updateWheel, .005);
                Global.SlotsSoundMgr.playEffect("GoldReel");
                _this.lundai.getComponent(sp.Skeleton).setAnimation(0, "B_lundai_intro", false);
                _this.lundai.getComponent(sp.Skeleton).addAnimation(0, "B_lundai_idle", true);
                _this.lundai_zhezhao.getComponent(sp.Skeleton).setAnimation(0, "B_lundai_intro", false);
                _this.lundai_zhezhao.getComponent(sp.Skeleton).addAnimation(0, "B_lundai_idle", true);
                _this.lundai_kuang.getComponent(sp.Skeleton).setAnimation(0, "B_lundai_intro", false);
                _this.lundai_kuang.getComponent(sp.Skeleton).addAnimation(0, "B_lundai_idle", true);
                _this.lundai_win.active = false;
                _context.next = 18;
                return cc.vv.gameData.awaitTime(.5);

               case 18:
                _this.lundai_win.active = true;
                _this.lundai_win.getComponent(sp.Skeleton).setAnimation(0, "lundai_bo_b", true);

               case 20:
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
      updateWheel: function updateWheel() {
        if (this._startMove) {
          if (0 === this._count && 0 === this._resultItem.x) {
            this._startMove = false;
            this.exitWheelGame();
            return;
          }
          var _iterator = _createForOfIteratorHelper(this.items), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              if (item.x >= this._bottomPosX + 170) {
                item.getComponent("ImgSwitchCmp").setIndex(this._isRegular ? Math.floor(9 * Math.random()) : Math.floor(11 * Math.random()));
                item.x = -this._bottomPosX;
                if (item === this._resultItem) {
                  this._count--;
                  if (this._count <= 0) {
                    this._count = 0;
                    item.getComponent("ImgSwitchCmp").setIndex(this.getResultIndex());
                  }
                }
              }
              item.x += this._speed;
              item.x >= -85 && item.x <= 85 ? item.scale = 1.5 : item.x >= -170 && item.x <= 170 ? item.scale = 1.3 : item.scale = 1;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      },
      getResultIndex: function getResultIndex() {
        var index = 0;
        index = this._isCard ? this._secretInfo.convertCard - 1 : this._secretInfo.upLevel > 0 ? 8 + this._secretInfo.upLevel : this._secretInfo.convertCard - 1;
        return index;
      },
      exitWheelGame: function exitWheelGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("GRstop");
              _this2.lundai_win.getComponent(sp.Skeleton).setAnimation(0, "lundai_win", false);
              _this2.lundai_di.active = true;
              _this2.result.active = true;
              _this2.result.getComponent("ImgSwitchCmp").setIndex(_this2.getResultIndex());
              _context2.next = 7;
              return cc.vv.gameData.awaitTime(1);

             case 7:
              if (!(_this2._secretInfo.upLevel > 0 && !_this2._isCard)) {
                _context2.next = 14;
                break;
              }
              Global.SlotsSoundMgr.playEffect("arrow");
              _this2.result.active = false;
              _this2.jiantou.active = true;
              _this2.jiantou.getComponent(sp.Skeleton).setAnimation(0, 1 === _this2._secretInfo.upLevel ? "lan_jiantou" : "huang_jiantou", false);
              _context2.next = 14;
              return cc.vv.gameData.awaitTime(.5);

             case 14:
              _this2._successCallback && _this2._successCallback();

             case 15:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      resetToNormal: function resetToNormal() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var _iterator2, _step2, item;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3.result.active = true;
              _this3.jiantou.active = false;
              _this3.lundai_di.active = false;
              _this3.lundai.getComponent(sp.Skeleton).setAnimation(0, "S_lundai_intro", false);
              _this3.lundai.getComponent(sp.Skeleton).addAnimation(0, "S_lundai_idle", true);
              _this3.lundai_zhezhao.getComponent(sp.Skeleton).setAnimation(0, "S_lundai_intro", false);
              _this3.lundai_zhezhao.getComponent(sp.Skeleton).addAnimation(0, "S_lundai_idle", true);
              _this3.lundai_kuang.getComponent(sp.Skeleton).setAnimation(0, "S_lundai_intro", false);
              _this3.lundai_kuang.getComponent(sp.Skeleton).addAnimation(0, "S_lundai_idle", true);
              _iterator2 = _createForOfIteratorHelper(_this3.items);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  item = _step2.value;
                  cc.tween(item).to(.5, {
                    scale: 1
                  }).start();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              _this3.lundai_win.active = false;
              _context3.next = 14;
              return cc.vv.gameData.awaitTime(.5);

             case 14:
              _this3.lundai_win.active = true;
              _this3.lundai_win.getComponent(sp.Skeleton).setAnimation(0, "lundai_bo_s", true);
              _context3.next = 18;
              return cc.vv.gameData.awaitTime(.5);

             case 18:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      reset: function reset() {
        this._startMove = false;
        this._speed = 17;
        this._count = 5;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "BasketballKing_Cfg", "BasketballKing_ExtraReel", "BasketballKing_ExtraSlots", "BasketballKing_GameData", "BasketballKing_Logic", "BasketballKing_Reel", "BasketballKing_Slots", "BasketballKing_Symbol", "BasketballKing_Wheel" ]);