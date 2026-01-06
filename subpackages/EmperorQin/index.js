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
  EmperorQin_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65523AChstOCK1U6ADgC8Gv", "EmperorQin_Cfg");
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
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
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
        node: "symbol_10"
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11"
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12"
      }), _defineProperty(_symbol, 13, {
        node: "symbol_13"
      }), _symbol),
      coinCfg: [ {
        rotation: -60,
        endPos: {
          x: -225,
          y: 80
        }
      }, {
        rotation: 60,
        endPos: {
          x: -75,
          y: 80
        }
      }, {
        rotation: -60,
        endPos: {
          x: 75,
          y: 80
        }
      }, {
        rotation: 60,
        endPos: {
          x: 225,
          y: 80
        }
      }, {
        rotation: -60,
        endPos: {
          x: -225,
          y: -100
        }
      }, {
        rotation: 60,
        endPos: {
          x: -75,
          y: -100
        }
      }, {
        rotation: -60,
        endPos: {
          x: 75,
          y: -100
        }
      }, {
        rotation: 60,
        endPos: {
          x: 225,
          y: -100
        }
      }, {
        rotation: -60,
        endPos: {
          x: -225,
          y: -280
        }
      }, {
        rotation: 60,
        endPos: {
          x: -75,
          y: -280
        }
      }, {
        rotation: -60,
        endPos: {
          x: 75,
          y: -280
        }
      }, {
        rotation: 60,
        endPos: {
          x: 225,
          y: -280
        }
      } ],
      freegameSymbolsCfg: [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ], [ 1, 2, 7, 8, 9, 10, 11, 12, 13 ], [ 1, 2, 6, 8, 9, 10, 11, 12, 13 ], [ 1, 2, 5, 8, 9, 10, 11, 12, 13 ], [ 1, 2, 4, 8, 9, 10, 11, 12, 13 ], [ 1, 2, 3, 8, 9, 10, 11, 12, 13 ] ],
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "EmperorQin_Slots",
        Reels: "EmperorQin_Reel",
        Symbols: "EmperorQin_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 128,
        height: 128
      },
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      wildId: 1,
      scatterId: 2,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      helpItems: [ "games/EmperorQin/prefab/help_item_1", "games/EmperorQin/prefab/help_item_2" ],
      commEffect: {
        path: "games/EmperorQin/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ],
        win3: [ "win3", "win3end" ],
        win4: [ "win4", "win4end" ]
      },
      bounceInfo: {
        distance: 20,
        time: .1
      },
      normalBgm: "base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  EmperorQin_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dbddaUrJqZO44DzXL2y5SB3", "EmperorQin_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      _checkTimeout: function _checkTimeout() {
        this._super();
        if (this._bmoveTimeout && this._bReconnect) ; else {
          var deskInfo = this._deskInfo;
          if (deskInfo.jackpotGame) {
            cc.vv.gameData.GetBottomScript().ShowBtnsByState("unstoped");
            cc.vv.gameData.GetSlotsScript().reconnectSelectJackpotGame();
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  EmperorQin_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "391b4jXOFxC/at36KS3JAUm", "EmperorQin_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        var jackpotGameScript = cc.find("safe_node/select_jackpot_game", this.node).getComponent("EmperorQin_SelectJackpotGame");
        cc.vv.gameData.GetSlotsScript().setJackpotGameScript(jackpotGameScript);
        var selectFreeTimesScript = cc.find("safe_node/free_dialog/enter_node", this.node).getComponent("EmperorQin_SelectFreeTimes");
        cc.vv.gameData.GetSlotsScript().setSelectFreeTimesScript(selectFreeTimesScript);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  EmperorQin_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "496d1bdR0lKJ7qpfVjAJBQF", "EmperorQin_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._super();
        var cfg = cc.vv.gameData.getGameCfg();
        for (var i = 0; i < cfg.row; i++) {
          var symbol = this._symbols[i];
          if (symbol.GetShowId() === cfg.wildId) {
            symbol.playStopAnimation();
            cc.vv.gameData.GetSlotsScript().playCoinFlyAnimation(symbol);
          }
        }
      },
      playReelStop: function playReelStop() {
        this._super();
        cc.vv.AudioManager.playEff("games/EmperorQin/", "reel_stop", true);
        for (var i = 0; i < cc.vv.gameData.getGameCfg().row; i++) {
          var symbol = this._symbols[i];
          if (symbol.GetShowId() === cc.vv.gameData.getGameCfg().scatterId && cc.vv.gameData.GetSlotsScript().isPlaySymbolScatterAudio(this._reelIdx)) {
            cc.vv.AudioManager.playEff("games/EmperorQin/", "symbol_scatter", true);
            break;
          }
        }
      },
      hasScatter: function hasScatter() {
        for (var i = 0; i < cc.vv.gameData.getGameCfg().row; i++) {
          var symbol = this._symbols[i];
          if (symbol.GetShowId() === cc.vv.gameData.getGameCfg().scatterId) return true;
        }
        return false;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  EmperorQin_SelectFreeTimes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2bd2pMWT1DTIOhVMm7YSom", "EmperorQin_SelectFreeTimes");
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
        _successCallback: null,
        _canSelect: false
      },
      onLoad: function onLoad() {
        var _this = this;
        var _loop = function _loop(i) {
          var node = cc.find("node_" + i, _this.node);
          node.on(cc.Node.EventType.TOUCH_END, function() {
            if (!_this._canSelect) return;
            var req = {
              c: MsgId.SLOT_SUBGAME_DATA
            };
            req.gameid = cc.vv.gameData.getGameId();
            req.data = {};
            req.data.rtype = 2;
            req.data.choiceId = i;
            if (6 === i) {
              cc.vv.AudioManager.playEff("games/EmperorQin/", "fanpai1", true);
              req.data.choiceItem = _this._symbols[Math.floor(5 * Math.random())];
            } else {
              cc.vv.AudioManager.playEff("games/EmperorQin/", "fanpai2", true);
              req.data.choiceItem = _this._symbols[i - 1];
            }
            cc.vv.NetManager.send(req, true);
            _this._canSelect = false;
          });
        };
        for (var i = 1; i < 7; i++) _loop(i);
        this._symbols = [ 7, 6, 5, 4, 3 ];
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubgameData, this);
      },
      startGame: function startGame(success) {
        var _this2 = this;
        this.reset();
        this._successCallback = success;
        var free_dialog = this.node.parent;
        free_dialog.active = true;
        var free_bg = free_dialog.getChildByName("free_bg");
        free_bg.opacity = 0;
        free_bg.runAction(cc.fadeTo(.3, 230));
        this.node.opacity = 0;
        this.node.active = true;
        this.node.runAction(cc.sequence(cc.fadeIn(.3), cc.callFunc(function() {
          cc.find("node_3/spine_light", _this2.node).active = true;
        }), cc.delayTime(.25), cc.callFunc(function() {
          cc.find("node_2/spine_light", _this2.node).active = true;
          cc.find("node_6/spine_light", _this2.node).active = true;
        }), cc.delayTime(.25), cc.callFunc(function() {
          cc.find("node_1/spine_light", _this2.node).active = true;
          cc.find("node_5/spine_light", _this2.node).active = true;
        }), cc.delayTime(.25), cc.callFunc(function() {
          cc.find("node_4/spine_light", _this2.node).active = true;
        })));
        this._canSelect = true;
        if (cc.vv.gameData.isNeedAutoPlay()) {
          var node = cc.find("node_6", this.node);
          cc.tween(node).delay(cc.vv.gameData.getManualAutoPlayTime()).call(function() {
            if (!_this2._canSelect) return;
            var req = {
              c: MsgId.SLOT_SUBGAME_DATA
            };
            req.gameid = cc.vv.gameData.getGameId();
            req.data = {};
            req.data.rtype = 2;
            req.data.choiceId = 6;
            cc.vv.AudioManager.playEff("games/EmperorQin/", "fanpai1", true);
            req.data.choiceItem = _this2._symbols[Math.floor(5 * Math.random())];
            cc.vv.NetManager.send(req, true);
            _this2._canSelect = false;
          }).start();
        }
      },
      exitGame: function exitGame() {
        var free_dialog = this.node.parent;
        free_dialog.active = false;
        this.node.active = false;
        var cfg = cc.vv.gameData.getGameCfg();
        cfg.randomSymbols = cfg.freegameSymbolsCfg[0];
      },
      onRcvSubgameData: function onRcvSubgameData(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var data, cfg, node, spine_choose, spine, spine_select;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              data = msg.data;
              cfg = cc.vv.gameData.getGameCfg();
              if (!(2 !== data.rtype)) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return");

             case 4:
              cc.vv.gameData.SetTotalFree(6);
              cc.vv.gameData.SetFreeTime(6);
              cfg.randomSymbols = cfg.freegameSymbolsCfg[data.choiceId];
              node = cc.find("node_" + data.choiceId, _this3.node);
              if (node) if (6 === data.choiceId) {
                node.getChildByName("bg").active = false;
                spine_choose = node.getChildByName("spine_choose");
                spine_choose.active = true;
                spine_choose.getComponent(sp.Skeleton).clearTracks();
                spine_choose.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                spine_choose.getComponent(sp.Skeleton).setCompleteListener(function(track) {
                  var name = track.animation ? track.animation.name : "";
                  if ("animation2" === name) {
                    var newNode = cc.instantiate(cc.find("node_" + (_this3._symbols.indexOf(data.choiceItem) + 1), _this3.node));
                    newNode.parent = node.getChildByName("result_parent");
                    var pick_light = node.getChildByName("pick_light");
                    newNode.position = cc.v2(0, 0);
                    var spine_select = newNode.getChildByName("spine_select");
                    spine_select.active = true;
                    spine_select.getComponent(sp.Skeleton).clearTracks();
                    spine_select.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                    spine_select.getComponent(sp.Skeleton).setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                         case 0:
                          spine_select.active = false;
                          pick_light.active = true;
                          _context.next = 4;
                          return _this3.awaitTime(2);

                         case 4:
                          pick_light.active = false;
                          _this3._successCallback && _this3._successCallback();

                         case 6:
                         case "end":
                          return _context.stop();
                        }
                      }, _callee);
                    })));
                    spine_choose.active = false;
                  }
                });
                spine = node.getChildByName("spine");
                spine.active = true;
                spine.getComponent(sp.Skeleton).clearTracks();
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
                spine.getComponent(sp.Skeleton).setCompleteListener(function(track) {
                  spine.active = false;
                });
              } else {
                spine_select = node.getChildByName("spine_select");
                spine_select.active = true;
                spine_select.getComponent(sp.Skeleton).clearTracks();
                spine_select.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                spine_select.getComponent(sp.Skeleton).setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      spine_select.active = false;
                      _context2.next = 3;
                      return _this3.awaitTime(2);

                     case 3:
                      _this3._successCallback && _this3._successCallback();

                     case 4:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));
              }

             case 9:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      reset: function reset() {
        for (var i = 1; i < 6; i++) {
          var _node = cc.find("node_" + i, this.node);
          _node.getChildByName("spine_light").active = false;
        }
        var node = cc.find("node_6", this.node);
        node.getChildByName("bg").active = true;
        node.getChildByName("spine_light").active = false;
        node.getChildByName("result_parent").removeAllChildren();
        this._successCallback = null;
        this._canSelect = false;
      },
      awaitTime: function awaitTime(time) {
        var _this4 = this;
        return new Promise(function(success, failed) {
          _this4.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubgameData, false, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  EmperorQin_SelectJackpotGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a28bbSrUplG7axGGqBmvzf/", "EmperorQin_SelectJackpotGame");
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
        prizepool_grand_num: cc.Node,
        prizepool_major_num: cc.Node,
        prizepool_minor_num: cc.Node,
        prizepool_mini_num: cc.Node,
        result_bg: cc.Node,
        result_grand: cc.Node,
        result_major: cc.Node,
        result_minor: cc.Node,
        result_mini: cc.Node,
        spine_winner: cc.Node,
        particle_celebration: cc.Node,
        coin_parent: cc.Node,
        _successCallback: null,
        _canSelect: false,
        _haveOpenReward: null,
        _winCoin: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this._haveOpenReward = [];
        var _loop = function _loop(i) {
          var coin_node = cc.find("coin_" + (i + 1), _this.node);
          coin_node.on(cc.Node.EventType.TOUCH_END, function() {
            if (!_this._canSelect) return;
            var _iterator = _createForOfIteratorHelper(_this._haveOpenReward), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var reward = _step.value;
                if (reward.choiceId === i + 1) return;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            _this._canSelect = false;
            var req = {
              c: MsgId.SLOT_SUBGAME_DATA
            };
            req.gameid = cc.vv.gameData.getGameId();
            req.data = {};
            req.data.rtype = 1;
            req.data.choiceId = i + 1;
            var success = cc.vv.NetManager.send(req, true);
            success && (_this._canSelect = false);
          });
        };
        for (var i = 0; i < 12; i++) _loop(i);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubgameData, this);
      },
      reconnect: function reconnect(jackpotGame, success) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var gameCfg, i, coin_node, cfg, spine, _i, index, _coin_node, fuwa, animationName;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              cc.vv.AudioManager.playBgm("games/EmperorQin/", "bonus_bgm", true);
              _this2.reset();
              _this2._successCallback = success;
              _this2.node.active = true;
              gameCfg = cc.vv.gameData.getGameCfg();
              if (jackpotGame.jackpotValues.length >= 4) {
                _this2.prizepool_mini_num.getComponent(cc.Label).string = Global.FormatNumToComma(jackpotGame.jackpotValues[0]);
                _this2.prizepool_minor_num.getComponent(cc.Label).string = Global.FormatNumToComma(jackpotGame.jackpotValues[1]);
                _this2.prizepool_major_num.getComponent(cc.Label).string = Global.FormatNumToComma(jackpotGame.jackpotValues[2]);
                _this2.prizepool_grand_num.getComponent(cc.Label).string = Global.FormatNumToComma(jackpotGame.jackpotValues[3]);
              }
              for (i = 0; i < 12; i++) {
                coin_node = cc.find("coin_" + (i + 1), _this2.node);
                cfg = gameCfg.coinCfg[i];
                spine = coin_node.getChildByName("coin");
                spine.active = true;
                spine.getComponent(sp.Skeleton).clearTracks();
                spine.getComponent(sp.Skeleton).setToSetupPose();
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation02", true);
                coin_node.position = cfg.endPos;
                coin_node.angle = 0;
              }
              for (_i = 0; _i < jackpotGame.choiceIdxs.length; _i++) {
                index = jackpotGame.choiceIdxs[_i];
                _coin_node = cc.find("coin_" + index, _this2.node);
                if (_coin_node) {
                  _coin_node.getChildByName("coin").active = false;
                  fuwa = _coin_node.getChildByName("fuwa");
                  fuwa.active = true;
                  animationName = "animation0" + _this2._getFuwaAnimationIndex(jackpotGame.choiceItems[_i]);
                  fuwa.getComponent(sp.Skeleton).clearTracks();
                  fuwa.getComponent(sp.Skeleton).setToSetupPose();
                  fuwa.getComponent(sp.Skeleton).setAnimation(0, animationName, false);
                  _this2._haveOpenReward.push({
                    choiceId: index,
                    choiceItem: jackpotGame.choiceItems[_i]
                  });
                }
              }
              _context.next = 10;
              return _this2.awaitTime(2);

             case 10:
              _this2._updateAllOpenRewardAnimation();
              _this2._canSelect = true;

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      startGame: function startGame(success, jackpotValues) {
        cc.vv.AudioManager.playBgm("games/EmperorQin/", "bonus_bgm", true);
        this.reset();
        this._successCallback = success;
        this.node.active = true;
        if (jackpotValues.length >= 4) {
          this.prizepool_mini_num.getComponent(cc.Label).string = Global.FormatNumToComma(jackpotValues[0]);
          this.prizepool_minor_num.getComponent(cc.Label).string = Global.FormatNumToComma(jackpotValues[1]);
          this.prizepool_major_num.getComponent(cc.Label).string = Global.FormatNumToComma(jackpotValues[2]);
          this.prizepool_grand_num.getComponent(cc.Label).string = Global.FormatNumToComma(jackpotValues[3]);
        }
        this.playCoinFly();
      },
      exitGame: function exitGame() {
        this.node.active = false;
      },
      onRcvSubgameData: function onRcvSubgameData(msg) {
        var _this3 = this;
        var data = msg.data;
        if (1 !== data.rtype) return;
        this._haveOpenReward.push({
          choiceId: data.choiceId,
          choiceItem: data.choiceItem
        });
        var coin_node = cc.find("coin_" + data.choiceId, this.node);
        if (coin_node) {
          coin_node.getChildByName("coin").active = false;
          var fuwa = coin_node.getChildByName("fuwa");
          0 === data.jackpotGame.winCoin ? cc.vv.AudioManager.playEff("games/EmperorQin/", "bonus_coin", true) : cc.vv.AudioManager.playEff("games/EmperorQin/", "bonus_hit", true);
          fuwa.active = true;
          var animationName = "animation0" + this._getFuwaAnimationIndex(data.choiceItem);
          fuwa.getComponent(sp.Skeleton).clearTracks();
          fuwa.getComponent(sp.Skeleton).setToSetupPose();
          fuwa.getComponent(sp.Skeleton).setAnimation(0, animationName, false);
          cc.log("animation name = " + animationName);
          fuwa.getComponent(sp.Skeleton).setCompleteListener(function() {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(track) {
              var name, array, _iterator2, _step2, arrayElement, _coin_node3, new_node, pos, _animationName2, _spine, i, _coin_node2, _animationName, spine, resultNode;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                 case 0:
                  fuwa.getComponent(sp.Skeleton).setCompleteListener();
                  name = track.animation ? track.animation.name : "";
                  if (!(name === animationName)) {
                    _context2.next = 30;
                    break;
                  }
                  if (!(0 === data.jackpotGame.winCoin)) {
                    _context2.next = 9;
                    break;
                  }
                  _this3._canSelect = true;
                  cc.log(_this3._canSelect);
                  _this3._updateAllOpenRewardAnimation();
                  _context2.next = 30;
                  break;

                 case 9:
                  cc.log(data);
                  _this3._winCoin = data.jackpotGame.winCoin;
                  cc.vv.gameData.AddCoin(data.jackpotGame.winCoin);
                  _context2.next = 14;
                  return _this3.awaitTime(2);

                 case 14:
                  _this3.result_bg.active = true;
                  array = _this3._findRewardJackpotItem(data.jackpotGame.jackpotId);
                  _iterator2 = _createForOfIteratorHelper(array);
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                      arrayElement = _step2.value;
                      _coin_node3 = cc.find("coin_" + arrayElement.choiceId, _this3.node);
                      new_node = cc.instantiate(_coin_node3);
                      pos = _coin_node3.convertToWorldSpaceAR(cc.v2(0, 0));
                      pos = _this3.coin_parent.convertToNodeSpaceAR(pos);
                      new_node.parent = _this3.coin_parent;
                      new_node.position = pos;
                      _animationName2 = "animation0" + _this3._getFuwaAnimationIndex(arrayElement.choiceItem) + "_2";
                      new_node.getChildByName("coin").active = false;
                      _spine = new_node.getChildByName("fuwa");
                      _spine.active = true;
                      _spine.getComponent(sp.Skeleton).clearTracks();
                      _spine.getComponent(sp.Skeleton).setToSetupPose();
                      _spine.getComponent(sp.Skeleton).setAnimation(0, _animationName2, true);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  for (i = 0; i < data.jackpotGame.restIdxs.length; i++) {
                    _coin_node2 = cc.find("coin_" + data.jackpotGame.restIdxs[i], _this3.node);
                    _coin_node2.getChildByName("coin").active = false;
                    _animationName = "animation0" + _this3._getFuwaAnimationIndex(data.jackpotGame.restItems[i]);
                    spine = _coin_node2.getChildByName("fuwa");
                    spine.active = true;
                    spine.getComponent(sp.Skeleton).clearTracks();
                    spine.getComponent(sp.Skeleton).setToSetupPose();
                    spine.getComponent(sp.Skeleton).setAnimation(0, _animationName, false);
                  }
                  _context2.next = 21;
                  return _this3.awaitTime(2);

                 case 21:
                  resultNode = _this3._getResultNode(data.jackpotGame.jackpotId);
                  resultNode.getChildByName("num").getComponent(cc.Label).string = Global.FormatNumToComma(data.jackpotGame.winCoin);
                  resultNode.runAction(cc.sequence(cc.fadeIn(2), cc.callFunc(function() {
                    _this3._successCallback && _this3._successCallback();
                  })));
                  _context2.next = 26;
                  return _this3.awaitTime(1);

                 case 26:
                  _this3.spine_winner.active = true;
                  _this3.spine_winner.getComponent(sp.Skeleton).setToSetupPose();
                  _this3.spine_winner.getComponent(sp.Skeleton).setAnimation(0, "animation01", false);
                  _this3.particle_celebration.active = true;

                 case 30:
                 case "end":
                  return _context2.stop();
                }
              }, _callee2);
            }));
            return function(_x) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      },
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      },
      reset: function reset() {
        var gameCfg = cc.vv.gameData.getGameCfg();
        for (var i = 0; i < 12; i++) {
          var coin_node = cc.find("coin_" + (i + 1), this.node);
          var cfg = gameCfg.coinCfg[i];
          coin_node.angle = cfg.rotation;
          coin_node.getChildByName("coin").active = true;
          coin_node.getChildByName("fuwa").active = false;
          coin_node.position = cc.v2(0, 900);
        }
        this.result_bg.active = false;
        this.result_grand.opacity = 0;
        this.result_major.opacity = 0;
        this.result_minor.opacity = 0;
        this.result_mini.opacity = 0;
        this.spine_winner.active = false;
        this.particle_celebration.active = false;
        this.coin_parent.removeAllChildren();
        this._successCallback = null;
        this._canSelect = false;
        this._haveOpenReward = [];
        this._winCoin = 0;
      },
      playCoinFly: function playCoinFly() {
        var _this4 = this;
        var gameCfg = cc.vv.gameData.getGameCfg();
        var _loop2 = function _loop2(i) {
          var coin_node = cc.find("coin_" + (i + 1), _this4.node);
          var cfg = gameCfg.coinCfg[i];
          var spine = coin_node.getChildByName("coin");
          spine.active = true;
          spine.getComponent(sp.Skeleton).clearTracks();
          spine.getComponent(sp.Skeleton).setToSetupPose();
          spine.getComponent(sp.Skeleton).setAnimation(0, "animation01", false);
          spine.getComponent(sp.Skeleton).setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            if ("animation01" === name) {
              spine.getComponent(sp.Skeleton).clearTracks();
              spine.getComponent(sp.Skeleton).setToSetupPose();
              spine.getComponent(sp.Skeleton).setAnimation(0, "animation02", true);
            }
          });
          coin_node.runAction(cc.sequence(cc.spawn(cc.rotateTo(1, 0), cc.moveTo(1, cfg.endPos)), cc.delayTime(2), cc.callFunc(function() {
            _this4._canSelect || (_this4._canSelect = true);
          })));
        };
        for (var i = 0; i < 12; i++) _loop2(i);
      },
      _getFuwaAnimationIndex: function _getFuwaAnimationIndex(choiceItem) {
        var result = 0;
        switch (choiceItem) {
         case 1:
          result = 4;
          break;

         case 2:
          result = 3;
          break;

         case 3:
          result = 2;
          break;

         case 4:
          result = 1;
        }
        return result;
      },
      _updateAllOpenRewardAnimation: function _updateAllOpenRewardAnimation() {
        var _this5 = this;
        var _loop3 = function _loop3(i) {
          var array = _this5._haveOpenReward.filter(function(item) {
            return item.choiceItem === i;
          });
          if (2 === array.length) {
            var _iterator3 = _createForOfIteratorHelper(array), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var t = _step3.value;
                var coin_node = cc.find("coin_" + t.choiceId, _this5.node);
                if (coin_node) {
                  var fuwa = coin_node.getChildByName("fuwa");
                  var animationName = "animation0" + _this5._getFuwaAnimationIndex(t.choiceItem) + "_1";
                  fuwa.getComponent(sp.Skeleton).clearTracks();
                  fuwa.getComponent(sp.Skeleton).setToSetupPose();
                  fuwa.getComponent(sp.Skeleton).setAnimation(0, animationName, true);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        };
        for (var i = 1; i < 5; i++) _loop3(i);
      },
      _findRewardJackpotItem: function _findRewardJackpotItem(jackpotId) {
        return this._haveOpenReward.filter(function(item) {
          return item.choiceItem === jackpotId;
        });
      },
      _getResultNode: function _getResultNode(jackpotId) {
        var node = null;
        switch (jackpotId) {
         case 1:
          node = this.result_mini;
          break;

         case 2:
          node = this.result_minor;
          break;

         case 3:
          node = this.result_major;
          break;

         case 4:
          node = this.result_grand;
        }
        return node;
      },
      awaitTime: function awaitTime(time) {
        var _this6 = this;
        return new Promise(function(success, failed) {
          _this6.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubgameData, false, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  EmperorQin_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1fe3jmr6BEIoivol3GuX7L", "EmperorQin_Slots");
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
        _curCoinInBowlIndex: 0,
        _jackpotGameScript: null,
        _selectFreeTimesScript: null,
        _playBowlLight: true,
        _bowlLightTimer: 10,
        _bg: null,
        _qinshihuangTransition: null
      },
      Init: function Init() {
        this._super();
        var deskInfo = cc.vv.gameData.getDeskInfo();
        deskInfo && deskInfo.coinPot && this.updateCoinInBowl(deskInfo.coinPot);
        this._bg = cc.find("reels_frame/bg", this.node);
        this._qinshihuangTransition = cc.find("transition/qinshihuang", this.node.parent);
        this._qinshihuangTransition.active = false;
        Global.SlotsSoundMgr.playEffect("gameStart");
        Global.SlotsSoundMgr.playEffect("KingEnter");
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, cfg, i, array;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (deskInfo.jackpotGame) {
                _this._bottomScript.ShowBtnsByState("unstoped");
                _this.reconnectSelectJackpotGame();
              }
              if (!deskInfo.freeGameOptions) {
                _context.next = 29;
                break;
              }
              if (!(1 === deskInfo.freeGameOptions.state)) {
                _context.next = 16;
                break;
              }
              _context.next = 6;
              return _this.enterSelectFreeTimes();

             case 6:
              _this.cutScenes();
              _context.next = 9;
              return _this.awaitTime(.5);

             case 9:
              _this._selectFreeTimesScript.exitGame();
              _context.next = 12;
              return _this.awaitTime(2);

             case 12:
              cc.vv.AudioManager.playBgm("games/EmperorQin/", "fgbgm", true);
              _this.CanDoNextRound();
              _context.next = 29;
              break;

             case 16:
              if (!(2 === deskInfo.freeGameOptions.state)) {
                _context.next = 29;
                break;
              }
              cfg = cc.vv.gameData.getGameCfg();
              i = 1;

             case 19:
              if (!(i < cfg.freegameSymbolsCfg.length)) {
                _context.next = 27;
                break;
              }
              array = cfg.freegameSymbolsCfg[i];
              if (!(-1 !== array.indexOf(deskInfo.freeGameOptions.choiceSymbol))) {
                _context.next = 24;
                break;
              }
              cfg.randomSymbols = array;
              return _context.abrupt("break", 27);

             case 24:
              i++;
              _context.next = 19;
              break;

             case 27:
              _this.ShowGameview(true);
              _this.CanDoNextRound();

             case 29:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this2.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this2.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                var free_dialog, extra_node, bg, _free_dialog, free_bg, result_node, _bg, title, coin_bg, coin, btn_collect, func;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                   case 0:
                    if (!(_this2._gameInfo && _this2._gameInfo.jackpotGame)) {
                      _context4.next = 3;
                      break;
                    }
                    _context4.next = 3;
                    return _this2.triggerJackpotGame();

                   case 3:
                    if (!_this2.CheckEnterFreeGame()) {
                      _context4.next = 22;
                      break;
                    }
                    _this2._bottomScript.ShowBtnsByState("stopped");
                    _this2.Backup();
                    cc.vv.AudioManager.playEff("games/EmperorQin/", "bell", true);
                    _context4.next = 9;
                    return _this2.awaitTime(1);

                   case 9:
                    _context4.next = 11;
                    return _this2.enterSelectFreeTimes();

                   case 11:
                    _this2.cutScenes();
                    _context4.next = 14;
                    return _this2.awaitTime(.5);

                   case 14:
                    _this2.ShowGameview(true);
                    _this2._selectFreeTimesScript.exitGame();
                    _context4.next = 18;
                    return _this2.awaitTime(2);

                   case 18:
                    cc.vv.AudioManager.playBgm("games/EmperorQin/", "fgbgm", true);
                    _this2.CanDoNextRound();
                    _context4.next = 83;
                    break;

                   case 22:
                    if (!_this2.CheckExtraFreeGame()) {
                      _context4.next = 43;
                      break;
                    }
                    _this2._bottomScript.ShowBtnsByState("stopped");
                    _context4.next = 26;
                    return _this2.awaitTime(1);

                   case 26:
                    free_dialog = cc.find("free_dialog", _this2.node.parent);
                    free_dialog.active = true;
                    extra_node = cc.find("extra_node", free_dialog);
                    extra_node.active = true;
                    cc.vv.AudioManager.playEff("games/EmperorQin/", "fgend", true);
                    bg = cc.find("bg", extra_node);
                    bg.scale = 0;
                    bg.runAction(cc.scaleTo(.1, 1));
                    _context4.next = 36;
                    return _this2.awaitTime(4);

                   case 36:
                    cc.vv.AudioManager.playEff("games/EmperorQin/", "popup_out", true);
                    bg.runAction(cc.sequence(cc.scaleTo(.1, 0), cc.callFunc(function() {
                      extra_node.active = false;
                      free_dialog.active = false;
                    })));
                    _context4.next = 40;
                    return _this2.awaitTime(2);

                   case 40:
                    _this2.CanDoNextRound();
                    _context4.next = 83;
                    break;

                   case 43:
                    if (!_this2.CheckExitFreeGame()) {
                      _context4.next = 80;
                      break;
                    }
                    _this2._bottomScript.ShowBtnsByState("moveing_1");
                    _context4.next = 47;
                    return _this2.awaitTime(1);

                   case 47:
                    _free_dialog = cc.find("free_dialog", _this2.node.parent);
                    _free_dialog.active = true;
                    cc.vv.AudioManager.playEff("games/EmperorQin/", "jpwin", true);
                    free_bg = cc.find("free_bg", _free_dialog);
                    free_bg.opacity = 0;
                    free_bg.runAction(cc.fadeTo(.1, 200));
                    result_node = cc.find("result_node", _free_dialog);
                    result_node.active = true;
                    _bg = cc.find("bg", result_node);
                    _bg.scale = 0;
                    _bg.opacity = 0;
                    _bg.runAction(cc.sequence(cc.spawn(cc.fadeIn(.1), cc.scaleTo(.1, 1.1)), cc.scaleTo(.1, 1)));
                    title = cc.find("title", _bg);
                    title.opacity = 0;
                    title.runAction(cc.fadeIn(.3));
                    coin_bg = cc.find("coin_bg", _bg);
                    coin_bg.opacity = 0;
                    coin_bg.runAction(cc.fadeIn(.3));
                    coin = cc.find("coin", _bg);
                    coin.getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.GetGameTotalFreeWin());
                    coin.runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.1, 1.2), cc.scaleTo(.4, 1)));
                    btn_collect = cc.find("btn_collect", _bg);
                    btn_collect.opacity = 0;
                    btn_collect.scale = 0;
                    btn_collect.runAction(cc.sequence(cc.delayTime(.3), cc.spawn(cc.scaleTo(.1, 1.1), cc.fadeIn(.1)), cc.scaleTo(.1, 1)));
                    _context4.next = 74;
                    return cc.vv.gameData.awaitTime(.5);

                   case 74:
                    btn_collect.off("click");
                    func = function() {
                      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                        var particle;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                           case 0:
                            cc.vv.AudioManager.playEff("games/EmperorQin/", "free_dialog_collect_click", true);
                            _bg.runAction(cc.sequence(cc.fadeTo(.2, 150), cc.spawn(cc.fadeOut(.2), cc.scaleTo(.2, 0))));
                            _context2.next = 4;
                            return _this2.awaitTime(.4);

                           case 4:
                            particle = cc.find("fg_jiesuan", result_node);
                            particle.active = true;
                            _context2.next = 8;
                            return _this2.awaitTime(.1);

                           case 8:
                            free_bg.runAction(cc.sequence(cc.delayTime(.4), cc.fadeOut(.2), cc.callFunc(function() {
                              particle.active = false;
                            })));
                            _context2.next = 11;
                            return _this2.awaitTime(.3);

                           case 11:
                            _this2.cutScenes();
                            _context2.next = 14;
                            return _this2.awaitTime(.5);

                           case 14:
                            _this2.resetAllSymbol();
                            _this2.Resume();
                            _this2.ShowGameview(false);
                            _context2.next = 19;
                            return _this2.awaitTime(2);

                           case 19:
                            totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin();
                            _this2.ShowBottomWin(totalWinCoin, totalWinCoin, true, function() {
                              Global.SlotsSoundMgr.stopBgm();
                              Global.SlotsSoundMgr.playNormalBgm();
                              _this2.CanDoNextRound();
                            });

                           case 21:
                           case "end":
                            return _context2.stop();
                          }
                        }, _callee2);
                      }));
                      return function func() {
                        return _ref2.apply(this, arguments);
                      };
                    }();
                    cc.vv.gameData.checkAutoPlay(btn_collect, func);
                    btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                         case 0:
                          btn_collect.stopAllActions();
                          _context3.next = 3;
                          return func();

                         case 3:
                         case "end":
                          return _context3.stop();
                        }
                      }, _callee3);
                    })));
                    _context4.next = 83;
                    break;

                   case 80:
                    _context4.next = 82;
                    return _this2.awaitTime(.1);

                   case 82:
                    _this2.CanDoNextRound();

                   case 83:
                   case "end":
                    return _context4.stop();
                  }
                }, _callee4);
              })));

             case 5:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return !!(this._gameInfo.freeGameOptions && 1 === this._gameInfo.freeGameOptions.state);
      },
      CheckExtraFreeGame: function CheckExtraFreeGame() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      triggerFreeGame: function triggerFreeGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      cutScenes: function cutScenes() {
        var _this3 = this;
        cc.vv.AudioManager.playEff("games/EmperorQin/", "ngtowheel", true);
        this._qinshihuangTransition.active = true;
        var qinsp = this._qinshihuangTransition.getComponent(sp.Skeleton);
        qinsp.setAnimation(0, "skill", false);
        qinsp.setCompleteListener(function() {
          _this3._qinshihuangTransition.active = false;
          qinsp.setCompleteListener(null);
        });
      },
      triggerJackpotGame: function triggerJackpotGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(suc) {
                  var winCoin, totalWinCoin;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _this4._bottomScript.ShowBtnsByState("unstoped");
                      _this4._playBowlLight = false;
                      if (!(0 === _this4._curCoinInBowlIndex)) {
                        _context8.next = 7;
                        break;
                      }
                      _context8.next = 5;
                      return _this4.awaitTime(1);

                     case 5:
                      _context8.next = 14;
                      break;

                     case 7:
                      if (!(1 === _this4._curCoinInBowlIndex)) {
                        _context8.next = 12;
                        break;
                      }
                      _context8.next = 10;
                      return _this4.awaitTime(.5);

                     case 10:
                      _context8.next = 14;
                      break;

                     case 12:
                      _context8.next = 14;
                      return _this4.awaitTime(.1);

                     case 14:
                      _context8.next = 16;
                      return new Promise(function(success) {
                        var bg_bowl = cc.find("reels_frame/bg", _this4.node);
                        var spine_bowl = cc.find("reels_frame/spine_bowl", _this4.node);
                        cc.vv.AudioManager.playEff("games/EmperorQin/", "bowl_open", true);
                        cc.vv.AudioManager.playEff("games/EmperorQin/", "wawa", true);
                        bg_bowl.active = false;
                        spine_bowl.active = true;
                        spine_bowl.getComponent(sp.Skeleton).clearTracks();
                        spine_bowl.getComponent(sp.Skeleton).setToSetupPose();
                        spine_bowl.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
                        spine_bowl.getComponent(sp.Skeleton).setCompleteListener(function(track) {
                          var name = track.animation ? track.animation.name : "";
                          if ("animation3" === name) {
                            spine_bowl.getComponent(sp.Skeleton).clearTracks();
                            spine_bowl.getComponent(sp.Skeleton).setToSetupPose();
                            spine_bowl.getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
                          } else if ("animation4" === name) {
                            spine_bowl.getComponent(sp.Skeleton).clearTracks();
                            spine_bowl.getComponent(sp.Skeleton).setToSetupPose();
                            spine_bowl.getComponent(sp.Skeleton).setAnimation(0, "animation5", false);
                          } else if ("animation5" === name) {
                            spine_bowl.active = false;
                            bg_bowl.active = true;
                            _this4._curCoinInBowlIndex = 0;
                            success();
                          }
                        });
                      });

                     case 16:
                      _context8.next = 18;
                      return _this4.enterSelectJackpotGame();

                     case 18:
                      winCoin = _this4._jackpotGameScript.getWinCoin();
                      totalWinCoin = cc.vv.gameData.GetGameWin() + winCoin;
                      cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin() + winCoin);
                      _this4.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) switch (_context7.prev = _context7.next) {
                           case 0:
                            cc.vv.AudioManager.playEff("games/EmperorQin/", "music_FairyDragon_enter", true);
                            _context7.next = 3;
                            return _this4.awaitTime(3);

                           case 3:
                            _this4.cutScenes();
                            _context7.next = 6;
                            return _this4.awaitTime(.5);

                           case 6:
                            _this4._jackpotGameScript.exitGame();
                            _this4.updateCoinInBowl();
                            _context7.next = 10;
                            return _this4.awaitTime(2);

                           case 10:
                            _this4._playBowlLight = true;
                            Global.SlotsSoundMgr.playNormalBgm();
                            suc && suc();

                           case 13:
                           case "end":
                            return _context7.stop();
                          }
                        }, _callee7);
                      })));

                     case 22:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      reconnectSelectJackpotGame: function reconnectSelectJackpotGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var deskInfo, winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!deskInfo.jackpotGame) {
                _context11.next = 4;
                break;
              }
              _context11.next = 4;
              return new Promise(function(success) {
                _this5._jackpotGameScript.reconnect(deskInfo.jackpotGame, success);
              });

             case 4:
              winCoin = _this5._jackpotGameScript.getWinCoin();
              totalWinCoin = deskInfo.winCoin ? deskInfo.winCoin : 0 + winCoin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetTotalFreeWin() + winCoin);
              _this5.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                   case 0:
                    _context10.next = 2;
                    return _this5.awaitTime(3);

                   case 2:
                    _this5.cutScenes();
                    _context10.next = 5;
                    return _this5.awaitTime(.5);

                   case 5:
                    _this5._jackpotGameScript.exitGame();
                    _context10.next = 8;
                    return _this5.awaitTime(2);

                   case 8:
                    Global.SlotsSoundMgr.playNormalBgm();
                    _this5.CanDoNextRound();

                   case 10:
                   case "end":
                    return _context10.stop();
                  }
                }, _callee10);
              })));

             case 8:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      enterSelectJackpotGame: function enterSelectJackpotGame() {
        var _this6 = this;
        return new Promise(function(success) {
          _this6._jackpotGameScript.startGame(success, _this6._gameInfo.jackpotGame.jackpotValues);
        });
      },
      enterSelectFreeTimes: function enterSelectFreeTimes() {
        var _this7 = this;
        return new Promise(function(success) {
          _this7._selectFreeTimesScript.startGame(success);
        });
      },
      setJackpotGameScript: function setJackpotGameScript(script) {
        this._jackpotGameScript = script;
      },
      setSelectFreeTimesScript: function setSelectFreeTimesScript(script) {
        this._selectFreeTimesScript = script;
      },
      playCoinFlyAnimation: function playCoinFlyAnimation(symbol) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var wordPos, startPos, bgPos, endPos, pianyiPos, _loop, index;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              symbol.playStopAnimation();
              wordPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
              _context12.next = 4;
              return _this8.awaitTime(.3);

             case 4:
              startPos = _this8.node.parent.convertToNodeSpaceAR(wordPos);
              bgPos = _this8._bg.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this8.node.parent.convertToNodeSpaceAR(bgPos);
              endPos.y += 150;
              cc.vv.AudioManager.playEff("games/EmperorQin/", "coin_fly", true);
              pianyiPos = [ cc.v2(101, 56), cc.v2(-95.6, 48.6), cc.v2(-47.7, 40.2), cc.v2(-44, -124), cc.v2(108.5, 28), cc.v2(121.6, -11.6), cc.v2(92.7, -10.7), cc.v2(-135, -49.5) ];
              _loop = function _loop(index) {
                var pos = cc.v2(startPos.x + pianyiPos[index].x, startPos.y + pianyiPos[index].y);
                var newNode = cc.instantiate(cc.find("spine_coin", _this8.node));
                newNode.active = true;
                newNode.parent = _this8.node.parent;
                newNode.position = startPos;
                newNode.scale = 1;
                newNode.angle = Global.random(1, 360);
                var coin = cc.find("coin", newNode);
                coin.active = true;
                var star = cc.find("star", newNode);
                star.active = false;
                cc.tween(newNode).parallel(cc.tween(newNode).delay(.2).to(.65, {
                  scale: .4
                }, {
                  easing: "quadIn"
                }).call(function() {
                  coin.active = false;
                  star.active = true;
                  star.scale = 2.5;
                  newNode.stopAllActions();
                  var starSp = star.getComponent(sp.Skeleton);
                  starSp.setAnimation(0, "animation2", false);
                  starSp.setCompleteListener(function() {
                    newNode.parent = null;
                    starSp.setCompleteListener(null);
                  });
                }), cc.tween(newNode).to(.2, {
                  position: pos
                }, {
                  easing: "quadIn"
                }).to(.7, {
                  position: endPos
                }, {
                  easing: "quadIn"
                })).start();
              };
              for (index = 1; index < pianyiPos.length; index++) _loop(index);
              _this8.scheduleOnce(function() {
                cc.vv.AudioManager.playEff("games/EmperorQin/", "coin_fall", true);
                _this8._gameInfo && _this8._gameInfo.coinPot && _this8.updateCoinInBowl(_this8._gameInfo.coinPot);
              }, .9);

             case 13:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      updateCoinInBowl: function updateCoinInBowl(coinPot) {
        var coin_1 = cc.find("reels_frame/bg/jubaopen/coin_1", this.node);
        var coin_2 = cc.find("reels_frame/bg/jubaopen/coin_2", this.node);
        var coin_3 = cc.find("reels_frame/bg/jubaopen/coin_3", this.node);
        if (coinPot) {
          var percent = coinPot.totalCnt / coinPot.needCnt;
          if (percent < .5) {
            this._curCoinInBowlIndex = 0;
            coin_1.opacity = 255;
            coin_2.opacity = 0;
            coin_3.opacity = 0;
          } else if (percent >= 1) {
            if (0 === this._curCoinInBowlIndex) {
              coin_2.runAction(cc.fadeIn(.3));
              coin_3.runAction(cc.sequence(cc.delayTime(.3), cc.fadeIn(.3)));
            } else 1 === this._curCoinInBowlIndex && coin_3.runAction(cc.fadeIn(.3));
            this._curCoinInBowlIndex = 2;
          } else {
            this._curCoinInBowlIndex = 1;
            coin_2.runAction(cc.fadeIn(.3));
          }
        } else {
          this._curCoinInBowlIndex = 0;
          coin_1.opacity = 255;
          coin_2.opacity = 0;
          coin_3.opacity = 0;
        }
      },
      isPlaySymbolScatterAudio: function isPlaySymbolScatterAudio(colIdx) {
        var result = true;
        for (var i = 0; i < colIdx; i++) {
          var reel = this._reels[i];
          if (!reel.hasScatter()) {
            result = false;
            break;
          }
        }
        return result;
      },
      update: function update(dt) {
        this._super(dt);
        if (this._playBowlLight) {
          this._bowlLightTimer -= dt;
          if (this._bowlLightTimer <= 0) {
            this._bowlLightTimer = 10;
            var spine = cc.find("reels_frame/bg/jubaopen/spine", this.node);
            spine.getComponent(sp.Skeleton).setToSetupPose();
            spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          }
        }
      },
      awaitTime: function awaitTime(time) {
        var _this9 = this;
        return new Promise(function(success, failed) {
          _this9.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      resetAllSymbol: function resetAllSymbol() {
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  EmperorQin_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cde9claRA9HwIFcxJM7z0bI", "EmperorQin_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      ShowRandomSymbol: function ShowRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        cfg.randomSymbols || (cfg.randomSymbols = cfg.freegameSymbolsCfg[0]);
        this._super();
      },
      playWinTweenAction: function playWinTweenAction() {
        this._showNode.stopAllActions();
        cc.tween(this._showNode).repeatForever(cc.tween().to(.35, {
          opacity: 0
        }).to(.35, {
          opacity: 255
        }).delay(1)).start();
      },
      stopWinTweenAction: function stopWinTweenAction() {
        if (this._showNode) {
          this._showNode.active = true;
          this._showNode.stopAllActions();
          this._showNode.opacity = 255;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "EmperorQin_Cfg", "EmperorQin_GameData", "EmperorQin_Logic", "EmperorQin_Reel", "EmperorQin_SelectFreeTimes", "EmperorQin_SelectJackpotGame", "EmperorQin_Slots", "EmperorQin_Symbol" ]);