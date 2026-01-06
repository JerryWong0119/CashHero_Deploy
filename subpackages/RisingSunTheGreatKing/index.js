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
  RisingSunTheGreatKing_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4eb880wOF1Fhbpvo/A2VFMa", "RisingSunTheGreatKing_Cfg");
    "use strict";
    var _symbol, _cardmap;
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
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "buling",
          zIndex: 100
        },
        trigger_ani: {
          name: "actionframe",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        win_node: "animation_4",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5",
        win_node: "animation_5",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6",
        win_node: "animation_6",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7",
        win_node: "animation_7",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8",
        win_node: "animation_8",
        win_ani: {
          name: "actionframe",
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
      }), _defineProperty(_symbol, 14, {
        node: "symbol_14"
      }), _defineProperty(_symbol, 104, {
        node: "symbol_104",
        win_node: "animation_104",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 105, {
        node: "symbol_105",
        win_node: "animation_105",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 106, {
        node: "symbol_106",
        win_node: "animation_106",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 107, {
        node: "symbol_107",
        win_node: "animation_107",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "RisingSunTheGreatKing_Slots",
        Reels: "RisingSunTheGreatKing_Reel",
        Symbols: "RisingSunTheGreatKing_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      kuang: "kuang",
      symbolSize: {
        width: 130,
        height: 110
      },
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 7, 6, 8, 8, 8, 13, 13, 6, 6, 6, 5, 7, 11, 4, 4, 6, 9, 9, 2, 8, 6, 6, 5, 9, 5, 5, 7, 7, 9, 14, 11, 8, 8, 6, 2, 9, 7, 4, 4, 8, 14, 5, 5, 5, 12, 12, 10, 7, 7, 12, 6, 2, 11, 7, 7, 7, 5, 4, 10, 6, 7, 7, 5, 5, 10, 6, 6, 12, 2, 14, 4, 6, 6, 8, 14, 14, 4, 10, 14, 5, 5, 9, 9, 14, 6, 4, 4, 13, 13, 6, 6, 6, 8, 11, 11, 9, 9, 7, 7, 7, 5, 5, 10, 10, 4, 4, 10, 14, 8, 12, 12, 4, 4, 7, 8, 12, 8, 12, 4, 4, 4, 13 ]), 
      _defineProperty(_cardmap, 2, [ 8, 12, 4, 6, 6, 5, 6, 7, 7, 7, 12, 12, 6, 5, 10, 10, 2, 11, 6, 9, 9, 1, 7, 11, 13, 8, 6, 6, 6, 8, 8, 8, 4, 2, 12, 5, 12, 5, 5, 13, 13, 6, 8, 6, 6, 14, 5, 7, 2, 4, 4, 4, 5, 5, 7, 7, 7, 14, 4, 4, 14, 14, 7, 7, 7, 12, 12, 7, 5, 5, 4, 1, 4, 14, 8, 4, 4, 5, 5, 5, 6, 10, 9, 9, 8, 8, 11, 11, 1, 6, 7, 7, 9, 14, 14, 6, 8, 10, 7, 1, 10, 6, 1, 9, 6, 6, 4, 9, 7, 1, 10, 1, 11, 5, 8, 4, 12, 6, 4, 14, 10, 9, 13, 9, 4, 1, 4, 8, 13 ]), 
      _defineProperty(_cardmap, 3, [ 1, 4, 4, 4, 12, 14, 14, 4, 4, 4, 6, 8, 10, 6, 10, 7, 2, 14, 14, 10, 10, 8, 1, 8, 8, 8, 14, 14, 7, 1, 9, 4, 5, 2, 4, 6, 6, 6, 9, 6, 5, 13, 6, 6, 9, 11, 11, 9, 9, 10, 2, 4, 4, 11, 11, 4, 8, 7, 12, 7, 5, 5, 4, 6, 6, 8, 2, 14, 14, 9, 6, 7, 8, 13, 5, 9, 9, 12, 7, 7, 7, 5, 1, 7, 4, 7, 6, 7, 8, 10, 5, 5, 8, 6, 1, 6, 12, 7, 5, 5, 6, 10, 12, 12, 7, 7, 13, 6, 6, 6, 13, 12, 7, 7, 5, 5, 13, 8, 8, 5, 5, 12, 9, 1, 4, 4, 11, 1, 4, 1 ]), 
      _defineProperty(_cardmap, 4, [ 7, 7, 12, 12, 14, 10, 5, 6, 12, 1, 6, 6, 6, 8, 7, 7, 2, 12, 5, 7, 7, 9, 1, 13, 13, 1, 5, 5, 5, 13, 13, 1, 9, 9, 2, 6, 6, 8, 5, 5, 5, 14, 5, 10, 4, 4, 4, 12, 12, 11, 9, 14, 2, 10, 1, 4, 14, 13, 6, 6, 4, 11, 1, 6, 1, 9, 9, 6, 6, 7, 7, 8, 11, 11, 4, 11, 6, 6, 7, 8, 5, 9, 9, 4, 4, 10, 8, 8, 8, 4, 10, 6, 6, 12, 14, 7, 7, 7, 10, 7, 7, 7, 4, 4, 14, 6, 4, 12, 6, 4, 7, 5, 8, 8, 5, 14, 1, 4, 9, 14, 4, 5, 10, 8, 8, 4, 8, 6, 5 ]), 
      _defineProperty(_cardmap, 5, [ 7, 10, 8, 11, 7, 4, 4, 4, 14, 10, 14, 12, 1, 2, 4, 4, 5, 5, 8, 10, 10, 14, 14, 11, 6, 10, 11, 11, 6, 5, 5, 2, 13, 11, 6, 6, 12, 12, 9, 8, 8, 8, 12, 12, 7, 1, 10, 12, 2, 11, 11, 9, 8, 8, 14, 5, 9, 7, 9, 6, 7, 1, 2, 4, 9, 14, 5, 14, 14, 1, 6, 6, 13, 12, 7, 5, 7, 5, 5, 1, 13, 6, 11, 9, 9, 4, 5, 9, 9, 4, 7, 12, 6, 6, 5, 8, 8, 8, 10, 10, 13, 10, 10, 13, 9, 4, 14, 13, 8, 11, 13, 5, 13, 13, 1, 12, 12, 9, 8, 13, 14, 5, 9, 6, 4, 4, 7, 6, 11, 4, 7, 5, 1, 7, 7 ]), 
      _cardmap),
      wildId: 1,
      scatterId: 2,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      helpItems: [ "games/RisingSunTheGreatKing/prefab/help_item_1", "games/RisingSunTheGreatKing/prefab/help_item_2", "games/RisingSunTheGreatKing/prefab/help_item_3", "games/RisingSunTheGreatKing/prefab/help_item_4", "games/RisingSunTheGreatKing/prefab/help_item_5" ],
      commEffect: {
        path: "games/RisingSunTheGreatKing/",
        win1: [ "sound_AZTEC_last_win_1", "" ],
        win2: [ "sound_AZTEC_last_win_2", "" ],
        win3: [ "sound_AZTEC_last_win_3", "" ]
      },
      bounceInfo: {
        distance: 30,
        time: .1
      },
      AddAntiTime: 2,
      normalBgm: "music_AZTEC_normal_bgm",
      reelStateInfo: [ {
        id: [ 1, 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/RisingSunTheGreatKing/",
        reelStopSound: "sound_AZTEC_reel_stop",
        symbolStopSound: "",
        antSound: "sound_AZTEC_quick_run",
        antSpeed: 2e3,
        continuous: true
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  RisingSunTheGreatKing_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80114PqnNlDY71NMKUp87yX", "RisingSunTheGreatKing_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      UnregisterMsg: function UnregisterMsg() {
        this._super();
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      isNormalFreeOver: function isNormalFreeOver() {
        return this._gameInfo.allFreeCnt > 0 && 0 === this._gameInfo.freeCnt;
      },
      isInFreeGame: function isInFreeGame() {
        return this._gameInfo.freeCnt > 0 && this._gameInfo.allFreeCnt !== this._gameInfo.freeCnt;
      },
      reqSubGame: function reqSubGame(dt) {
        var _this = this;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: dt
          };
          cc.vv.NetManager.send(req, true);
          _this._subCallBack = res;
        });
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (this._subCallBack) {
          this._subCallBack(msg);
          this._subCallBack = null;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  RisingSunTheGreatKing_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32f904biRNP5ZyGdiuOCf9l", "RisingSunTheGreatKing_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        var jackpotGameScript = cc.find("safe_node/select_jackpot_game", this.node).getComponent("RisingSunTheGreatKing_SelectJackpotGame");
        cc.vv.gameData.GetSlotsScript().setJackpotGameScript(jackpotGameScript);
        var selectFreeTimesScript = cc.find("safe_node/free_dialog/enter_node", this.node).getComponent("RisingSunTheGreatKing_SelectFreeTimes");
        cc.vv.gameData.GetSlotsScript().setSelectFreeTimesScript(selectFreeTimesScript);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
      },
      StartSlot: function StartSlot() {
        this._super();
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var selectSymbolScript = cc.find("safe_node/select_symbol", this.node).getComponent("RisingSunTheGreatKing_SelectStartSymbol");
        deskInfo.extraFreeInfo || deskInfo.jackpotGame || deskInfo.mults.length >= deskInfo.betLevelConfig[deskInfo.betLevelConfig.length - 1] && selectSymbolScript.init();
      },
      onUpdateBet: function onUpdateBet() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        cc.vv.gameData.GetSlotsScript().updateActiveGoldSymbol(deskInfo.currmult);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  RisingSunTheGreatKing_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "867a18JUjhEhI3IQdH2OB+a", "RisingSunTheGreatKing_Reel");
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
        this._super();
        cc.vv.gameData.GetSlotsScript().isPlaySymbolScatterAudio(this._reelIdx) && Global.SlotsSoundMgr.playEffect(this._reelIdx >= 2 ? "sound_AZTEC_wild_scatter_down3" : "sound_AZTEC_wild_scatter_down" + (this._reelIdx + 1));
      },
      playAntiAnimation: function playAntiAnimation() {
        var isPlayAniti = false;
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              if (info.isAnt && info.antiNode) {
                this.ShowAntiEffect(true, info.antiNode);
                var soundPath = info.path;
                soundPath || (soundPath = cc.vv.gameData.getGameDir());
                cc.vv.AudioManager.playEff(soundPath, info.antSound, true);
                var cfgAntSpeed = info.antSpeed;
                cfgAntSpeed && (cfgAntSpeed *= this.GetTimeScale());
                this._speed = cfgAntSpeed || this._speed;
                isPlayAniti = true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return isPlayAniti;
      },
      clearLastSymbol: function clearLastSymbol() {
        var symbol = this._symbols[this._symbols.length - 1];
        if (symbol) {
          symbol.setAnimationToTop(false);
          symbol.ShowKuang(false);
        }
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator2 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var info = _step2.value;
                var node = cc.find(info.antiNode, this.node);
                if (node && node.active) {
                  node.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          cc.find("reels_bg/reel_bg" + (this._reelIdx + 1) + "/free", this.node.parent.parent).active = false;
        } else {
          var _node = cc.find(name, this.node);
          if (_node) {
            cc.find("reels_bg/reel_bg" + (this._reelIdx + 1) + "/free", this.node.parent.parent).active = bShow;
            _node.active = bShow;
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1anode_anti");
        }
      },
      hasScatter: function hasScatter() {
        for (var i = 0; i < cc.vv.gameData.getGameCfg().row; i++) {
          var symbol = this._symbols[i];
          if (symbol.GetShowId() === cc.vv.gameData.getGameCfg().scatterId) return true;
        }
        return false;
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var mask = cc.find("mask", this.node);
        mask && objs.push(mask);
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && objs.push(bg);
        if (0 === this._reelIdx) {
          var _bg = cc.find("reels_frame/bg", this.node.parent.parent);
          _bg && objs.push(_bg);
          for (var i = 1; i < 5; i++) {
            var line = cc.find("reels_frame/line_" + i, this.node.parent.parent);
            line && objs.push(line);
          }
        }
        return objs;
      },
      GetResizeMoveingObjs: function GetResizeMoveingObjs() {
        var objs = [];
        if (0 === this._reelIdx) {
          var bowl = cc.find("bowl", this.node.parent.parent);
          bowl && objs.push(bowl);
        }
        return objs;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  RisingSunTheGreatKing_SelectFreeTimes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c36927DkkxI+LfHq4OWRTmf", "RisingSunTheGreatKing_SelectFreeTimes");
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
    var freeTimes = [ 3, 5, 10, 15 ];
    var reels = [ 3, 4, 5, 6 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _successCallback: null,
        _canSelect: false,
        _extraFreeInfo: null,
        _updateFreeTimes: false,
        _updateReels: false,
        _timesTimer: 0,
        _reelsTimer: 0,
        _timesCount: 0,
        _reelsCount: 0,
        _timesInterval: .1,
        _reelsInterval: .1
      },
      onLoad: function onLoad() {
        var _this = this;
        var _loop = function _loop(i) {
          var node = cc.find("node_" + i, _this.node);
          node.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var req, result, j, _node, _node2;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                if (_this._canSelect) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");

               case 2:
                cc.find("node_5", _this.node).stopAllActions();
                _this._canSelect = false;
                req = {
                  rtype: 1,
                  choiceId: i
                };
                _context.next = 7;
                return cc.vv.gameData.reqSubGame(req);

               case 7:
                result = _context.sent;
                if (200 === result.code) {
                  _this._extraFreeInfo = result.data.extraFreeInfo;
                  cc.vv.gameData.SetFreeTime(_this._extraFreeInfo.options[result.data.choiceId - 1].freeCnt);
                  cc.vv.gameData.SetTotalFree(_this._extraFreeInfo.options[result.data.choiceId - 1].freeCnt);
                  for (j = 1; j < 6; j++) result.data.choiceId !== j && (cc.find("node_" + j + "/black", _this.node).active = true);
                  if (5 === result.data.choiceId) {
                    Global.SlotsSoundMgr.playEffect("sound_AZTEC_click_random");
                    _node = cc.find("node_" + result.data.choiceId, _this.node);
                    cc.tween(_node).to(.2, {
                      scale: .8
                    }).call(function() {
                      var baozha = cc.find("baozha", _node);
                      _this.playAnimationOnce(baozha);
                      var light = cc.find("light", _node);
                      light.active = true;
                    }).to(.5, {
                      scale: 1
                    }, {
                      easing: "backOut"
                    }).call(function() {
                      Global.SlotsSoundMgr.playEffect("sound_AZTEC_click_run");
                      _this._timesTimer = 0;
                      _this._reelsTimer = 0;
                      _this._updateFreeTimes = true;
                      _this._updateReels = true;
                      cc.find("node_5/unselect", _this.node).active = false;
                      cc.find("node_5/select", _this.node).active = true;
                      cc.find("node_5/select/times_guang", _this.node).active = false;
                      cc.find("node_5/select/reels_guang", _this.node).active = false;
                    }).start();
                  } else {
                    Global.SlotsSoundMgr.playEffect("sound_AZTEC_click");
                    _node2 = cc.find("node_" + result.data.choiceId, _this.node);
                    cc.tween(_node2).to(.2, {
                      scale: .8
                    }).call(function() {
                      var baozha = cc.find("baozha", _node2);
                      _this.playAnimationOnce(baozha);
                      var light = cc.find("light", _node2);
                      light.active = true;
                    }).to(.5, {
                      scale: 1
                    }, {
                      easing: "backOut"
                    }).start();
                    _this.exitGame();
                  }
                }

               case 9:
               case "end":
                return _context.stop();
              }
            }, _callee);
          })));
        };
        for (var i = 1; i < 6; i++) _loop(i);
      },
      getExtraFreeInfo: function getExtraFreeInfo() {
        return this._extraFreeInfo;
      },
      playAnimationOnce: function playAnimationOnce(node, animationName, callback) {
        node.active = true;
        animationName ? node.getComponent(cc.Animation).play(animationName) : node.getComponent(cc.Animation).play();
        node.getComponent(cc.Animation).on("stop", function() {
          node.getComponent(cc.Animation).off("stop");
          node.active = false;
          callback && callback();
        });
      },
      startGame: function startGame(success) {
        var _this2 = this;
        Global.SlotsSoundMgr.playEffect("sound_AZTEC_fs_choose_window");
        var free_dialog = this.node.parent;
        free_dialog.active = true;
        var free_bg = free_dialog.getChildByName("free_bg");
        free_bg.opacity = 200;
        this.node.active = true;
        this.node.opacity = 255;
        this.reset();
        this._successCallback = success;
        this._canSelect = true;
        if (cc.vv.gameData.isNeedAutoPlay()) {
          var node = cc.find("node_5", this.node);
          node.stopAllActions();
          cc.tween(node).delay(cc.vv.gameData.getManualAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var req, result, j, _node3, _node4;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                if (_this2._canSelect) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");

               case 2:
                _this2._canSelect = false;
                req = {
                  rtype: 1,
                  choiceId: 5
                };
                _context2.next = 6;
                return cc.vv.gameData.reqSubGame(req);

               case 6:
                result = _context2.sent;
                if (200 === result.code) {
                  _this2._extraFreeInfo = result.data.extraFreeInfo;
                  cc.vv.gameData.SetFreeTime(_this2._extraFreeInfo.options[result.data.choiceId - 1].freeCnt);
                  cc.vv.gameData.SetTotalFree(_this2._extraFreeInfo.options[result.data.choiceId - 1].freeCnt);
                  for (j = 1; j < 6; j++) result.data.choiceId !== j && (cc.find("node_" + j + "/black", _this2.node).active = true);
                  if (5 === result.data.choiceId) {
                    Global.SlotsSoundMgr.playEffect("sound_AZTEC_click_random");
                    _node3 = cc.find("node_" + result.data.choiceId, _this2.node);
                    cc.tween(_node3).to(.2, {
                      scale: .8
                    }).call(function() {
                      var baozha = cc.find("baozha", _node3);
                      _this2.playAnimationOnce(baozha);
                      var light = cc.find("light", _node3);
                      light.active = true;
                    }).to(.5, {
                      scale: 1
                    }, {
                      easing: "backOut"
                    }).call(function() {
                      Global.SlotsSoundMgr.playEffect("sound_AZTEC_click_run");
                      _this2._timesTimer = 0;
                      _this2._reelsTimer = 0;
                      _this2._updateFreeTimes = true;
                      _this2._updateReels = true;
                      cc.find("node_5/unselect", _this2.node).active = false;
                      cc.find("node_5/select", _this2.node).active = true;
                      cc.find("node_5/select/times_guang", _this2.node).active = false;
                      cc.find("node_5/select/reels_guang", _this2.node).active = false;
                    }).start();
                  } else {
                    Global.SlotsSoundMgr.playEffect("sound_AZTEC_click");
                    _node4 = cc.find("node_" + result.data.choiceId, _this2.node);
                    cc.tween(_node4).to(.2, {
                      scale: .8
                    }).call(function() {
                      var baozha = cc.find("baozha", _node4);
                      _this2.playAnimationOnce(baozha);
                      var light = cc.find("light", _node4);
                      light.active = true;
                    }).to(.5, {
                      scale: 1
                    }, {
                      easing: "backOut"
                    }).start();
                    _this2.exitGame();
                  }
                }

               case 8:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }))).start();
        }
      },
      exitGame: function exitGame() {
        var _this3 = this;
        cc.tween(this.node).delay(1.7).call(function() {
          if (_this3._successCallback) {
            _this3._successCallback();
            _this3._successCallback = null;
          }
          var free_dialog = _this3.node.parent;
          free_dialog.active = true;
          var free_bg = free_dialog.getChildByName("free_bg");
          cc.tween(free_bg).to(.3, {
            opacity: 0
          }).start();
        }).to(.3, {
          opacity: 0
        }).call(function() {
          _this3.node.active = false;
        }).start();
      },
      reset: function reset() {
        for (var i = 1; i < 6; i++) {
          var _node5 = cc.find("node_" + i, this.node);
          _node5.getChildByName("baozha").active = false;
          _node5.getChildByName("light").active = false;
          _node5.getChildByName("black").active = false;
        }
        var node = cc.find("node_5", this.node);
        node.getChildByName("unselect").active = true;
        node.getChildByName("select").active = false;
        this._successCallback = null;
        this._canSelect = false;
        this._extraFreeInfo = null;
        this._updateFreeTimes = false;
        this._updateReels = false;
        this._timesTimer = 0;
        this._reelsTimer = 0;
        this._timesCount = 0;
        this._reelsCount = 0;
        this._timesInterval = .1;
        this._reelsInterval = .1;
      },
      update: function update(dt) {
        var _this4 = this;
        if (this._updateFreeTimes) {
          this._timesTimer += dt;
          if (this._timesTimer >= this._timesInterval) {
            this._timesTimer = 0;
            this._timesCount++;
            if (this._timesInterval >= .5) {
              cc.find("node_5/select/times", this.node).getComponent(cc.Label).string = this._extraFreeInfo.options[4].freeCnt;
              this._timesCount = 0;
              this._updateFreeTimes = false;
              this._timesInterval = .1;
              var guang = cc.find("node_5/select/times_guang", this.node);
              guang.active = true;
              guang.scale = 0;
              cc.tween(guang).to(.5, {
                scale: 2
              }).delay(.5).call(function() {
                guang.active = false;
              }).start();
            } else cc.find("node_5/select/times", this.node).getComponent(cc.Label).string = freeTimes[Math.floor(4 * Math.random())];
          }
          if (this._timesCount >= 10) {
            this._timesInterval += .1;
            this._timesInterval >= .5 && (this._timesInterval = .5);
          }
        }
        if (this._updateReels) {
          this._reelsTimer += dt;
          if (this._reelsTimer >= this._reelsInterval) {
            this._reelsTimer = 0;
            this._reelsCount++;
            if (this._reelsInterval >= .5) {
              cc.find("node_5/select/reels", this.node).getComponent(cc.Label).string = this._extraFreeInfo.options[4].rowCnt + "X5";
              this._reelsCount = 0;
              this._updateReels = false;
              this._reelsInterval = .1;
              var _guang = cc.find("node_5/select/reels_guang", this.node);
              _guang.active = true;
              _guang.scale = 0;
              cc.tween(_guang).to(.5, {
                scale: 2
              }).delay(.5).call(function() {
                _guang.active = false;
              }).start();
              cc.tween(this.node).delay(.5).call(function() {
                _this4.exitGame();
              }).start();
              Global.SlotsSoundMgr.playEffect("sound_AZTEC_click_over");
            } else cc.find("node_5/select/reels", this.node).getComponent(cc.Label).string = reels[Math.floor(4 * Math.random())] + "X5";
          }
          if (this._reelsCount >= 55) {
            this._reelsInterval += .1;
            this._reelsInterval >= .5 && (this._reelsInterval = .5);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  RisingSunTheGreatKing_SelectJackpotGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7556b7kuh5AgLS1PwFare90", "RisingSunTheGreatKing_SelectJackpotGame");
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
    var JackpotGameSymbol = {
      None: 0,
      Mini: 1,
      Minor: 2,
      Major: 3,
      Mega: 4,
      Grand: 5,
      Gold: 6
    };
    var prizePoolName = [ "Mini", "Minor", "Major", "Mega", "Grand" ];
    var liziColor = [ [ 0, 85, 185 ], [ 120, 0, 235 ], [ 0, 210, 0 ], [ 249, 3, 211 ], [ 252, 0, 0 ] ];
    cc.Class({
      extends: cc.Component,
      properties: {
        prizePool: cc.Node,
        result_bg: cc.Node,
        result_jackpot: cc.Node,
        winCoins: cc.Node,
        btn_collect: cc.Node,
        _successCallback: null,
        _canSelect: false,
        _haveOpenReward: null,
        _winCoin: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this._haveOpenReward = [];
        var _loop = function _loop(i) {
          var coin_node = cc.find("node_" + i, _this.node);
          coin_node.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var req, result, pickInfo, jackpotGame, node, jinbi, _result, shine, _node, _jinbi, _result2, dianjilizi, color;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                if (_this._canSelect) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");

               case 2:
                if (!(-1 !== _this._haveOpenReward.indexOf(i))) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return");

               case 4:
                _this._canSelect = false;
                Global.SlotsSoundMgr.playEffect("sound_AZTEC_click_coin");
                req = {
                  rtype: 2,
                  choiceId: i
                };
                _context.next = 9;
                return cc.vv.gameData.reqSubGame(req);

               case 9:
                result = _context.sent;
                if (!(200 === result.code)) {
                  _context.next = 55;
                  break;
                }
                pickInfo = result.data.pickInfo;
                jackpotGame = result.data.jackpotGame;
                _this._haveOpenReward.push(pickInfo.choiceId);
                if (!(pickInfo.symbol === JackpotGameSymbol.Gold)) {
                  _context.next = 35;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("sound_AZTEC_super_appear");
                node = cc.find("node_" + pickInfo.choiceId, _this.node);
                jinbi = cc.find("jinbi", node);
                cc.tween(jinbi).to(.3, {
                  scaleX: 0
                }).start();
                _this.playAnimationOnce(cc.find("dianji", node));
                _context.next = 22;
                return cc.vv.gameData.awaitTime(.3);

               case 22:
                _result = cc.find("gold_man", node);
                _result.active = true;
                _result.scaleX = 0;
                cc.tween(_result).to(.3, {
                  scaleX: 1
                }).start();
                shine = cc.find("jinrenshine", node);
                shine.active = true;
                shine.scale = 0;
                cc.tween(shine).to(.3, {
                  scale: 4
                }).start();
                _context.next = 32;
                return cc.vv.gameData.awaitTime(1);

               case 32:
                _this.removeSymbol(jackpotGame, pickInfo);
                _context.next = 54;
                break;

               case 35:
                _node = cc.find("node_" + pickInfo.choiceId, _this.node);
                _jinbi = cc.find("jinbi", _node);
                cc.tween(_jinbi).to(.3, {
                  scaleX: 0
                }).start();
                _this.playAnimationOnce(cc.find("dianji", _node));
                _context.next = 41;
                return cc.vv.gameData.awaitTime(.3);

               case 41:
                _result2 = cc.find("result", _node);
                _result2.active = true;
                _result2.scaleX = 0;
                _result2.getComponent("ImgSwitchCmp").setIndex(pickInfo.symbol - 1);
                cc.tween(_result2).to(.3, {
                  scaleX: 1
                }).call(function() {
                  cc.find("prizePool_" + prizePoolName[pickInfo.symbol - 1] + "/point_" + jackpotGame.jackpotCnt[pickInfo.symbol - 1] + "/reward", _this.prizePool).active = true;
                }).start();
                dianjilizi = cc.find("dianjilizi", _node);
                dianjilizi.active = true;
                color = liziColor[pickInfo.symbol - 1];
                dianjilizi.color = cc.color(color[0], color[1], color[2]);
                _this.playAnimationOnce(dianjilizi);
                _context.next = 53;
                return cc.vv.gameData.awaitTime(1);

               case 53:
                _this._canSelect = true;

               case 54:
                if (jackpotGame.isEnd) {
                  _this._canSelect = false;
                  Global.SlotsSoundMgr.playEffect("sound_AZTEC_bonus_reward");
                  _this.endGame(jackpotGame);
                }

               case 55:
               case "end":
                return _context.stop();
              }
            }, _callee);
          })));
        };
        for (var i = 1; i < 19; i++) _loop(i);
      },
      removeSymbol: function removeSymbol(jackpotGame, pickInfo) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _iterator, _step, index, node, result, jinbi, startPos, particle, removeJackpot, endPos;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _iterator = _createForOfIteratorHelper(pickInfo.currRemoveIdxs);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  index = _step.value;
                  node = cc.find("node_" + index, _this2.node);
                  result = cc.find("result", node);
                  if (-1 === _this2._haveOpenReward.indexOf(index)) {
                    _this2._haveOpenReward.push(index);
                    jinbi = cc.find("jinbi", node);
                    jinbi.color = cc.Color.GRAY;
                    cc.tween(jinbi).to(.3, {
                      scaleX: 0
                    }).start();
                    result.active = true;
                    result.color = cc.Color.GRAY;
                    result.scaleX = 0;
                    result.getComponent("ImgSwitchCmp").setIndex(jackpotGame.goldSymbolCnt - 1);
                    cc.tween(result).delay(.3).to(.3, {
                      scaleX: 1
                    }).start();
                  } else result.color = cc.Color.GRAY;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _context2.next = 4;
              return cc.vv.gameData.awaitTime(1);

             case 4:
              startPos = cc.find("node_" + pickInfo.choiceId, _this2.node).convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this2.node.parent.convertToNodeSpaceAR(startPos);
              Global.SlotsSoundMgr.playEffect("sound_AZTEC_super_line");
              particle = cc.instantiate(cc.find("particle_fly", _this2.node.parent));
              particle.active = true;
              particle.parent = _this2.node.parent;
              particle.position = startPos;
              removeJackpot = cc.find("prizePool_" + prizePoolName[jackpotGame.goldSymbolCnt - 1], _this2.prizePool);
              endPos = removeJackpot.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this2.node.parent.convertToNodeSpaceAR(endPos);
              cc.tween(particle).to(.5, {
                position: endPos
              }).call(function() {
                var jackpotBaodian = cc.find("jackpotbaodian", _this2.prizePool);
                jackpotBaodian.position = removeJackpot.position;
                _this2.playAnimationOnce(jackpotBaodian, null, function() {
                  var _iterator2 = _createForOfIteratorHelper(removeJackpot.children), _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                      var child = _step2.value;
                      child.color = cc.Color.GRAY;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  for (var i = 1; i < 4; i++) {
                    cc.find("point_" + i + "/reward", removeJackpot).active = true;
                    cc.find("point_" + i + "/reward", removeJackpot).color = cc.Color.GRAY;
                  }
                  _this2._canSelect = true;
                });
              }).removeSelf().start();

             case 15:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      endGame: function endGame(jackpotGame) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var j, node, result, free_dialog, dialog, coin, jackpot, btn_collect, func;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              for (j = 1; j < 19; j++) {
                node = cc.find("node_" + j, _this3.node);
                result = cc.find("result", node);
                jackpotGame.symbolInfos[j - 1] === JackpotGameSymbol.Gold && (result = cc.find("gold_man", node));
                if (-1 === _this3._haveOpenReward.indexOf(j)) {
                  cc.tween(cc.find("jinbi", node)).to(.3, {
                    scaleX: 0
                  }).start();
                  result.active = true;
                  result.scaleX = 0;
                  jackpotGame.symbolInfos[j - 1] === JackpotGameSymbol.Gold || result.getComponent("ImgSwitchCmp").setIndex(jackpotGame.symbolInfos[j - 1] - 1);
                  cc.tween(result).delay(.3).to(.3, {
                    scaleX: 1
                  }).start();
                }
                jackpotGame.symbolInfos[j - 1] !== jackpotGame.jackpot.id && (result.color = cc.Color.GRAY);
              }
              _context5.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              Global.SlotsSoundMgr.playEffect("sound_AZTEC_show_jackpot");
              free_dialog = cc.find("result_bg", _this3.node);
              free_dialog.active = true;
              dialog = cc.find("bg", free_dialog);
              dialog.active = true;
              cc.tween(dialog).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              coin = cc.find("coins", dialog);
              coin.getComponent(cc.Label).string = "";
              jackpot = cc.find("jackpot", dialog);
              jackpot.getComponent("ImgSwitchCmp").setIndex(jackpotGame.jackpot.id - 1);
              btn_collect = cc.find("btn_collect", dialog);
              Global.SlotsSoundMgr.playEffect("sound_AZTEC_jackpot_up");
              Global.doRoallNumEff(coin, 0, jackpotGame.jackpot.value, 6, function() {
                Global.SlotsSoundMgr.playEffect("sound_AZTEC_jackpot_end");
              }, null, 0, true);
              _this3._winCoin = jackpotGame.jackpot.value;
              _context5.next = 19;
              return cc.vv.gameData.awaitTime(.5);

             case 19:
              btn_collect.off("click");
              func = function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      btn_collect.off("click");
                      coin.stopAllActions();
                      Global.SlotsSoundMgr.stopEffectByName("sound_AZTEC_jackpot_up");
                      coin.getComponent(cc.Label).string = Global.FormatNumToComma(jackpotGame.jackpot.value);
                      Global.SlotsSoundMgr.playEffect("sound_AZTEC_jackpot_end");
                      cc.tween(dialog).to(.5, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).call(function() {
                        dialog.active = false;
                        free_dialog.active = false;
                        if (_this3._successCallback) {
                          _this3._successCallback();
                          _this3._successCallback = null;
                        }
                      }).start();

                     case 6:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function func() {
                  return _ref2.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func);
              btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                   case 0:
                    btn_collect.stopAllActions();
                    _context4.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context4.stop();
                  }
                }, _callee4);
              })));

             case 23:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      playAnimationOnce: function playAnimationOnce(node, animationName, callback) {
        node.active = true;
        animationName ? node.getComponent(cc.Animation).play(animationName) : node.getComponent(cc.Animation).play();
        node.getComponent(cc.Animation).on("stop", function() {
          node.getComponent(cc.Animation).off("stop");
          node.active = false;
          callback && callback();
        });
      },
      reconnect: function reconnect(jackpotGame, success) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var gameCfg, i, coin_node, result, shine, _i, j, point, _i2, count, _j, _point, _iterator3, _step3, index, node, _result3, jinbi, removeJackpot, _iterator4, _step4, child, _i3;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              cc.vv.AudioManager.playBgm("games/BrilliantTreasures/", "bonus_bgm", true);
              _this4.reset();
              _this4._successCallback = success;
              _this4.node.active = true;
              gameCfg = cc.vv.gameData.getGameCfg();
              _this4.prizePool.getComponent("LMSlots_PrizePool_Base").PausePool([ {
                prizeType: 0,
                pauseNum: jackpotGame.jackpotValues[0]
              }, {
                prizeType: 1,
                pauseNum: jackpotGame.jackpotValues[1]
              }, {
                prizeType: 2,
                pauseNum: jackpotGame.jackpotValues[2]
              }, {
                prizeType: 3,
                pauseNum: jackpotGame.jackpotValues[3]
              }, {
                prizeType: 4,
                pauseNum: jackpotGame.jackpotValues[4]
              } ]);
              for (i = 0; i < jackpotGame.symbolInfos.length; i++) {
                coin_node = cc.find("node_" + (i + 1), _this4.node);
                if (coin_node && 0 !== jackpotGame.symbolInfos[i]) {
                  coin_node.getChildByName("jinbi").active = false;
                  result = cc.find("result", coin_node);
                  if (jackpotGame.symbolInfos[i] === JackpotGameSymbol.Gold) {
                    result = cc.find("gold_man", coin_node);
                    shine = cc.find("jinrenshine", coin_node);
                    shine.active = true;
                    shine.scale = 4;
                  } else result.getComponent("ImgSwitchCmp").setIndex(jackpotGame.symbolInfos[i] - 1);
                  result.active = true;
                  result.scaleX = 1;
                  _this4._haveOpenReward.push(i + 1);
                }
              }
              for (_i = 0; _i < jackpotGame.jackpotCnt.length; _i++) for (j = 0; j < 3; j++) {
                point = cc.find("prizePool_" + prizePoolName[_i] + "/point_" + (j + 1) + "/reward", _this4.prizePool);
                point && (point.active = false);
              }
              for (_i2 = 0; _i2 < jackpotGame.jackpotCnt.length; _i2++) {
                count = jackpotGame.jackpotCnt[_i2];
                for (_j = 0; _j < count; _j++) {
                  _point = cc.find("prizePool_" + prizePoolName[_i2] + "/point_" + (_j + 1) + "/reward", _this4.prizePool);
                  _point && (_point.active = true);
                }
              }
              _iterator3 = _createForOfIteratorHelper(jackpotGame.removeIdxs);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  index = _step3.value;
                  node = cc.find("node_" + index, _this4.node);
                  _result3 = cc.find("result", node);
                  jinbi = cc.find("jinbi", node);
                  jinbi.active = false;
                  _result3.active = true;
                  _result3.color = cc.Color.GRAY;
                  _result3.scaleX = 1;
                  _result3.getComponent("ImgSwitchCmp").setIndex(jackpotGame.goldSymbolCnt - 1);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              if (jackpotGame.goldSymbolCnt > 0) {
                removeJackpot = cc.find("prizePool_" + prizePoolName[jackpotGame.goldSymbolCnt - 1], _this4.prizePool);
                _iterator4 = _createForOfIteratorHelper(removeJackpot.children);
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                    child = _step4.value;
                    child.color = cc.Color.GRAY;
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                for (_i3 = 1; _i3 < 4; _i3++) {
                  cc.find("point_" + _i3 + "/reward", removeJackpot).active = true;
                  cc.find("point_" + _i3 + "/reward", removeJackpot).color = cc.Color.GRAY;
                }
              }
              _this4._canSelect = true;

             case 13:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      startGame: function startGame(success, jackpotGame) {
        this.node.active = true;
        this.reset();
        this._successCallback = success;
        this.prizePool.getComponent("LMSlots_PrizePool_Base").PausePool([ {
          prizeType: 0,
          pauseNum: jackpotGame.jackpotValues[0]
        }, {
          prizeType: 1,
          pauseNum: jackpotGame.jackpotValues[1]
        }, {
          prizeType: 2,
          pauseNum: jackpotGame.jackpotValues[2]
        }, {
          prizeType: 3,
          pauseNum: jackpotGame.jackpotValues[3]
        }, {
          prizeType: 4,
          pauseNum: jackpotGame.jackpotValues[4]
        } ]);
        this._canSelect = true;
      },
      exitGame: function exitGame() {
        this.node.active = false;
      },
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      },
      reset: function reset() {
        for (var i = 1; i < 19; i++) {
          var coin_node = cc.find("node_" + i, this.node);
          coin_node.getChildByName("jinbi").active = true;
          coin_node.getChildByName("jinbi").scaleX = 1;
          coin_node.getChildByName("jinbi").color = cc.Color.WHITE;
          coin_node.getChildByName("gold_man").active = false;
          coin_node.getChildByName("result").active = false;
          coin_node.getChildByName("gold_man").color = cc.Color.WHITE;
          coin_node.getChildByName("result").color = cc.Color.WHITE;
          coin_node.getChildByName("dianji").active = false;
          coin_node.getChildByName("dianjilizi").active = false;
          coin_node.getChildByName("jinrenshine").active = false;
        }
        var _iterator5 = _createForOfIteratorHelper(this.prizePool.children), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var child = _step5.value;
            for (var _i4 = 1; _i4 < 4; _i4++) {
              var point = cc.find("point_" + _i4, child);
              if (point) {
                cc.find("reward", point).active = false;
                cc.find("reward", point).color = cc.Color.WHITE;
              }
            }
            var _iterator6 = _createForOfIteratorHelper(child.children), _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                var childElement = _step6.value;
                childElement.color = cc.Color.WHITE;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        this.result_bg.active = false;
        this._successCallback = null;
        this._canSelect = false;
        this._haveOpenReward = [];
        this._winCoin = 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  RisingSunTheGreatKing_SelectStartSymbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3ac4dFHn1NBoU/AWOl9221", "RisingSunTheGreatKing_SelectStartSymbol");
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
    var regularSymbols = [ 2, 8, 9, 11, 13 ];
    var selectSymbols = [ [ 4, 5, 6, 7 ], [ 4, 5, 6, 107 ], [ 4, 5, 106, 107 ], [ 4, 105, 106, 107 ], [ 104, 105, 106, 107 ] ];
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Node,
        tips: cc.Node,
        top_bg: cc.Node,
        select_node: cc.Node,
        select_animation: cc.Node,
        tips_bg: cc.Node,
        _curBetIndex: 0,
        _timer: 0,
        _polling: false,
        _canSelect: false
      },
      init: function init() {
        var _this = this;
        this.node.active = true;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        this.setSymbolInfo(4);
        this.open();
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var _loop = function _loop(i) {
          var select = cc.find("select_" + i, _this.select_node);
          if (select) {
            cc.find("bet", select).getComponent(cc.Label).string = "BET $" + Global.formatNumShort(deskInfo.mults[deskInfo.betLevelConfig[i - 1] - 1], 0);
            select.off(cc.Node.EventType.TOUCH_END);
            select.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
              var j, black;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                 case 0:
                  if (_this._canSelect) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");

                 case 2:
                  _this._polling = false;
                  Global.SlotsSoundMgr.playEffect("sound_AZTEC_click_bet");
                  _this._canSelect = false;
                  _this.setSymbolInfo(i - 1);
                  cc.vv.gameData.GetBottomScript().SetBetIdx(cc.vv.gameData.getDeskInfo().betLevelConfig[i - 1]);
                  for (j = 1; j < 6; j++) {
                    black = cc.find("select_" + j + "/black", _this.select_node);
                    black.active = j !== i;
                  }
                  cc.tween(_this.bg).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    _this.node.active = false;
                    cc.vv.gameData.GetSlotsScript().updateActiveGoldSymbol(cc.vv.gameData.getDeskInfo().betLevelConfig[i - 1]);
                    cc.vv.gameData.GetSlotsScript().CanDoNextRound();
                  }).start();

                 case 9:
                 case "end":
                  return _context.stop();
                }
              }, _callee);
            })));
          }
        };
        for (var i = 1; i < 6; i++) _loop(i);
      },
      open: function open() {
        var _this2 = this;
        this.node.active = true;
        this.reset();
        this.bg.scale = 0;
        Global.SlotsSoundMgr.playEffect("sound_AZTEC_choose_bet_window");
        cc.tween(this.bg).to(.5, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
        this.tips.active = true;
        this.tips_bg.scale = 0;
        cc.tween(this.tips_bg).to(.5, {
          scale: 1
        }, {
          easing: "backOut"
        }).delay(1).to(.5, {
          scale: 0
        }, {
          easing: "backIn"
        }).call(function() {
          _this2.tips.active = false;
          _this2._polling = true;
          _this2._canSelect = true;
        }).start();
      },
      reset: function reset() {
        for (var j = 1; j < 6; j++) {
          var black = cc.find("select_" + j + "/black", this.select_node);
          black.active = false;
        }
      },
      update: function update(dt) {
        if (this._polling) {
          this._timer += dt;
          if (this._timer >= 2) {
            this._timer = 0;
            this._curBetIndex--;
            this._curBetIndex < 0 && (this._curBetIndex = 4);
            this.setSymbolInfo(this._curBetIndex);
          }
        }
      },
      setSymbolInfo: function setSymbolInfo(betIndex) {
        this._curBetIndex = betIndex;
        this.select_animation.y = cc.find("select_" + (betIndex + 1), this.select_node).y;
        var deskInfo = cc.vv.gameData.getDeskInfo();
        for (var i = 0; i < regularSymbols.length; i++) {
          var node = cc.find("node_" + regularSymbols[i], this.top_bg);
          if (node) for (var j = 1; j < 4; j++) {
            var coin = cc.find("coin_" + j, node);
            coin && (coin.getComponent(cc.Label).string = Global.formatNumShort(deskInfo.cardConfig[regularSymbols[i]].mult[j + 1] * deskInfo.betLevelConfig[this._curBetIndex], 0));
          }
        }
        for (var _i = 4; _i < 8; _i++) {
          var _node = cc.find("node_" + _i, this.top_bg);
          _node && (_node.active = false);
          _node = cc.find("node_10" + _i, this.top_bg);
          _node && (_node.active = false);
        }
        for (var _i2 = 0; _i2 < selectSymbols[this._curBetIndex].length; _i2++) {
          var card = selectSymbols[this._curBetIndex][_i2];
          var _node2 = cc.find("node_" + card, this.top_bg);
          if (_node2) {
            _node2.active = true;
            for (var _j = 1; _j < 4; _j++) {
              var _coin = cc.find("coin_" + _j, _node2);
              _coin && (_coin.getComponent(cc.Label).string = Global.formatNumShort(deskInfo.cardConfig[card].mult[_j + 1] * deskInfo.betLevelConfig[this._curBetIndex], 0));
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  RisingSunTheGreatKing_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7ef8IB249Mx6OWQ3RDCVXn", "RisingSunTheGreatKing_Slots");
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
        _bowlLightTimer: 10
      },
      Init: function Init() {
        var _this = this;
        this._super();
        Global.SlotsSoundMgr.playEffect("sound_AZTEC_enter_game");
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var btn_tips = cc.find("reels_frame/symbol_info/btn_tips", this.node);
        btn_tips.on("click", function() {
          if ("idle" !== cc.vv.gameData.GetSlotState()) return;
          if (cc.vv.gameData.GetTotalFree() > 0) return;
          if (deskInfo.mults.length < deskInfo.betLevelConfig[deskInfo.betLevelConfig.length - 1]) return;
          _this._bottomScript.ShowBtnsByState("moveing_1");
          cc.find("select_symbol", _this.node.parent).getComponent("RisingSunTheGreatKing_SelectStartSymbol").init();
        });
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, extraFreeInfo, _iterator, _step, reel, _iterator2, _step2, _reel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (deskInfo.jackpotGame) {
                _this2._bottomScript.ShowBtnsByState("unstoped");
                _this2.reconnectSelectJackpotGame();
              }
              if (!deskInfo.extraFreeInfo) {
                _context.next = 36;
                break;
              }
              if (!(0 === deskInfo.extraFreeInfo.state)) {
                _context.next = 26;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 7;
              return _this2.enterSelectFreeTimes();

             case 7:
              _this2.ShowGameview(true);
              extraFreeInfo = _this2._selectFreeTimesScript.getExtraFreeInfo();
              if (!(extraFreeInfo.rowCnt > _this2._cfg.row)) {
                _context.next = 15;
                break;
              }
              _iterator = _createForOfIteratorHelper(_this2._reels);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  reel = _step.value;
                  reel.AddCount(extraFreeInfo.rowCnt - _this2._cfg.row, .01);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _context.next = 14;
              return cc.vv.gameData.awaitTime(.1);

             case 14:
              cc.find("dechuanjiakang", _this2.node.parent).active = false;

             case 15:
              _context.next = 17;
              return cc.vv.gameData.awaitTime(.5);

             case 17:
              _context.next = 19;
              return _this2.popFreeDialog(false);

             case 19:
              _context.next = 21;
              return cc.vv.gameData.awaitTime(.5);

             case 21:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("music_AZTEC_fs_bgm");
              _this2.CanDoNextRound();
              _context.next = 36;
              break;

             case 26:
              if (!(1 === deskInfo.extraFreeInfo.state)) {
                _context.next = 36;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              if (!(deskInfo.extraFreeInfo.rowCnt > _this2._cfg.row)) {
                _context.next = 34;
                break;
              }
              _iterator2 = _createForOfIteratorHelper(_this2._reels);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  _reel = _step2.value;
                  _reel.AddCount(deskInfo.extraFreeInfo.rowCnt - _this2._cfg.row, .01);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              _context.next = 33;
              return cc.vv.gameData.awaitTime(.5);

             case 33:
              cc.find("dechuanjiakang", _this2.node.parent).active = false;

             case 34:
              _this2.ShowGameview(true);
              _this2.CanDoNextRound();

             case 36:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i = 0; _i < this._gameInfo.scatterZJLuXian.indexs.length; _i++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._gameInfo.resultCards.length / this._cfg.col - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3.ShowWinTrace();
              _this3.playCoinFlyAnimation();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this3.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                var haveWild, i, resultCard;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    if (!(_this3._gameInfo && _this3._gameInfo.jackpotGame)) {
                      _context2.next = 3;
                      break;
                    }
                    _context2.next = 3;
                    return _this3.triggerJackpotGame();

                   case 3:
                    if (!_this3.CheckEnterFreeGame()) {
                      _context2.next = 7;
                      break;
                    }
                    _this3.triggerFreeGame();
                    _context2.next = 27;
                    break;

                   case 7:
                    if (!_this3.CheckExitFreeGame()) {
                      _context2.next = 11;
                      break;
                    }
                    _this3.triggerExitFreeGame();
                    _context2.next = 27;
                    break;

                   case 11:
                    haveWild = false;
                    i = 0;

                   case 13:
                    if (!(i < _this3._gameInfo.resultCards.length)) {
                      _context2.next = 21;
                      break;
                    }
                    resultCard = _this3._gameInfo.resultCards[i];
                    if (!(resultCard === _this3._cfg.wildId)) {
                      _context2.next = 18;
                      break;
                    }
                    haveWild = true;
                    return _context2.abrupt("break", 21);

                   case 18:
                    i++;
                    _context2.next = 13;
                    break;

                   case 21:
                    if (!haveWild) {
                      _context2.next = 26;
                      break;
                    }
                    _context2.next = 24;
                    return cc.vv.gameData.awaitTime(1);

                   case 24:
                    _context2.next = 26;
                    break;

                   case 26:
                    _this3.CanDoNextRound();

                   case 27:
                   case "end":
                    return _context2.stop();
                  }
                }, _callee2);
              })));

             case 6:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return !!(this._gameInfo.extraFreeInfo && 0 === this._gameInfo.extraFreeInfo.state);
      },
      CheckExtraFreeGame: function CheckExtraFreeGame() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var extraFreeInfo, _iterator3, _step3, reel;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this4._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("sound_AZTEC_wild_scatter_trigger");
              _context4.next = 4;
              return cc.vv.gameData.awaitTime(1);

             case 4:
              _this4.cutScenes();
              _context4.next = 7;
              return cc.vv.gameData.awaitTime(1);

             case 7:
              _context4.next = 9;
              return _this4.enterSelectFreeTimes();

             case 9:
              _this4.ShowGameview(true);
              extraFreeInfo = _this4._selectFreeTimesScript.getExtraFreeInfo();
              if (!(extraFreeInfo.rowCnt > _this4._cfg.row)) {
                _context4.next = 17;
                break;
              }
              _iterator3 = _createForOfIteratorHelper(_this4._reels);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  reel = _step3.value;
                  reel.AddCount(extraFreeInfo.rowCnt - _this4._cfg.row, .01);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              _context4.next = 16;
              return cc.vv.gameData.awaitTime(.1);

             case 16:
              cc.find("dechuanjiakang", _this4.node.parent).active = false;

             case 17:
              _context4.next = 19;
              return cc.vv.gameData.awaitTime(.5);

             case 19:
              _context4.next = 21;
              return _this4.popFreeDialog(false);

             case 21:
              _context4.next = 23;
              return cc.vv.gameData.awaitTime(.5);

             case 23:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("music_AZTEC_fs_bgm");
              _this4.CanDoNextRound();

             case 26:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var _iterator4, _step4, reel, _iterator5, _step5, _reel2;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              _context5.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context5.next = 5;
              return _this5.popFreeResultDialog();

             case 5:
              _this5.cutScenes();
              _context5.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              cc.find("dechuanjiakang", _this5.node.parent).active = true;
              _iterator4 = _createForOfIteratorHelper(_this5._reels);
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  reel = _step4.value;
                  reel.StartRecycleSymbol(.01);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              _context5.next = 13;
              return cc.vv.gameData.awaitTime(.02);

             case 13:
              _iterator5 = _createForOfIteratorHelper(_this5._reels);
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  _reel2 = _step5.value;
                  _reel2.clearLastSymbol();
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              _this5.ShowGameview(false);
              _context5.next = 18;
              return cc.vv.gameData.awaitTime(1);

             case 18:
              _this5.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this5.CanDoNextRound();
              });

             case 19:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this6 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
            var free_dialog, free_bg, dialog, coin, times, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_AZTEC_over_fs");
                free_dialog = cc.find("free_dialog", _this6.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("result_node", free_dialog);
                dialog.active = true;
                cc.tween(dialog).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                coin = cc.find("bg/coins", dialog);
                coin.getComponent(cc.Label).string = "";
                times = cc.find("bg/times", dialog);
                times.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                btn_collect = cc.find("bg/btn_collect", dialog);
                Global.doRoallNumEff(coin, 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
                _context8.next = 17;
                return cc.vv.gameData.awaitTime(.5);

               case 17:
                btn_collect.off("click");
                func = function() {
                  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                       case 0:
                        btn_collect.off("click");
                        cc.tween(free_bg).to(.5, {
                          opacity: 0
                        }).start();
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          dialog.active = false;
                          free_dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context6.stop();
                      }
                    }, _callee6);
                  }));
                  return function func() {
                    return _ref3.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context7.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                })));

               case 21:
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
      popFreeDialog: function popFreeDialog() {
        var _this7 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success) {
            var free_dialog, free_bg, dialog, ways, extraFreeInfo, btn_start, func;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_AZTEC_enter_fs");
                free_dialog = cc.find("free_dialog", _this7.node.parent);
                free_dialog.active = true;
                free_bg = cc.find("free_bg", free_dialog);
                free_bg.opacity = 0;
                free_bg.runAction(cc.fadeTo(.2, 200));
                dialog = cc.find("free_node", free_dialog);
                dialog.active = true;
                dialog.opacity = 255;
                dialog.scale = 0;
                cc.tween(dialog).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("bg/times", dialog).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                ways = {
                  3: 243,
                  4: 1024,
                  5: 3125,
                  6: 7776
                };
                extraFreeInfo = _this7._selectFreeTimesScript.getExtraFreeInfo();
                cc.find("bg/ways", dialog).getComponent(cc.Label).string = ways[extraFreeInfo.rowCnt];
                btn_start = cc.find("bg/btn_start", dialog);
                func = function func() {
                  btn_start.off("click");
                  cc.tween(dialog).to(.5, {
                    opacity: 0
                  }).call(function() {
                    dialog.active = false;
                    free_dialog.active = false;
                    success();
                  }).start();
                  cc.tween(free_bg).to(.5, {
                    opacity: 0
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.on("click", function() {
                  btn_start.stopAllActions();
                  func();
                });

               case 19:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x2) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      cutScenes: function cutScenes() {
        var transition = cc.find("transition", this.node.parent);
        Global.SlotsSoundMgr.playEffect("sound_AZTEC_bg_guochang");
        if (transition) {
          transition.active = true;
          transition.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
          transition.getComponent(sp.Skeleton).setCompleteListener(function() {
            transition.getComponent(sp.Skeleton).setCompleteListener(null);
            transition.active = false;
          });
        }
      },
      playAnimationOnce: function playAnimationOnce(node, animationName, callback) {
        node.active = true;
        animationName ? node.getComponent(cc.Animation).play(animationName) : node.getComponent(cc.Animation).play();
        node.getComponent(cc.Animation).on("stop", function() {
          node.getComponent(cc.Animation).off("stop");
          node.active = false;
          callback && callback();
        });
      },
      shake: function shake() {
        var safe_node = this.node.parent;
        var _iterator6 = _createForOfIteratorHelper(safe_node.children), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var child = _step6.value;
            if ("LMSlots_Top" !== child.name && "LMSlots_Bottom" !== child.name && child.active) {
              var action = cc.shake(3, 15, 15);
              child.runAction(action);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      },
      triggerJackpotGame: function triggerJackpotGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(suc) {
                  var spine, winCoin, totalWinCoin;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      _this8._bottomScript.ShowBtnsByState("moveing_1");
                      Global.SlotsSoundMgr.playEffect("sound_AZTEC_bg_doudong");
                      _this8.shake();
                      _context11.next = 5;
                      return cc.vv.gameData.awaitTime(3);

                     case 5:
                      spine = cc.find("dechuanjiakang", _this8.node.parent).getComponent(sp.Skeleton);
                      spine.setAnimation(0, "skill", false);
                      spine.addAnimation(0, "idle", true);
                      _context11.next = 10;
                      return cc.vv.gameData.awaitTime(1);

                     case 10:
                      _this8.cutScenes();
                      _context11.next = 13;
                      return cc.vv.gameData.awaitTime(1);

                     case 13:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playBgm("music_AZTEC_bonus_game_bgm");
                      _context11.next = 17;
                      return _this8.enterSelectJackpotGame();

                     case 17:
                      _this8.cutScenes();
                      _context11.next = 20;
                      return cc.vv.gameData.awaitTime(1);

                     case 20:
                      _this8._jackpotGameScript.node.active = false;
                      winCoin = _this8._jackpotGameScript.getWinCoin();
                      totalWinCoin = cc.vv.gameData.GetGameWin() + winCoin;
                      cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin() + winCoin);
                      _this8.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) switch (_context10.prev = _context10.next) {
                           case 0:
                            Global.SlotsSoundMgr.stopBgm();
                            Global.SlotsSoundMgr.playNormalBgm();
                            suc && suc();

                           case 3:
                           case "end":
                            return _context10.stop();
                          }
                        }, _callee10);
                      })));

                     case 25:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x3) {
                  return _ref6.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      reconnectSelectJackpotGame: function reconnectSelectJackpotGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          var deskInfo, winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!deskInfo.jackpotGame) {
                _context14.next = 4;
                break;
              }
              _context14.next = 4;
              return new Promise(function(success) {
                _this9._jackpotGameScript.reconnect(deskInfo.jackpotGame, success);
              });

             case 4:
              winCoin = _this9._jackpotGameScript.getWinCoin();
              totalWinCoin = deskInfo.winCoin ? deskInfo.winCoin : 0 + winCoin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetTotalFreeWin() + winCoin);
              _this9.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                   case 0:
                    _context13.next = 2;
                    return cc.vv.gameData.awaitTime(3);

                   case 2:
                    _this9.cutScenes();
                    _context13.next = 5;
                    return cc.vv.gameData.awaitTime(.5);

                   case 5:
                    _this9._jackpotGameScript.exitGame();
                    _context13.next = 8;
                    return cc.vv.gameData.awaitTime(1);

                   case 8:
                    Global.SlotsSoundMgr.playNormalBgm();
                    _this9.CanDoNextRound();

                   case 10:
                   case "end":
                    return _context13.stop();
                  }
                }, _callee13);
              })));

             case 8:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      enterSelectJackpotGame: function enterSelectJackpotGame() {
        var _this10 = this;
        return new Promise(function(success) {
          _this10._jackpotGameScript.startGame(success, _this10._gameInfo.jackpotGame);
        });
      },
      enterSelectFreeTimes: function enterSelectFreeTimes() {
        var _this11 = this;
        return new Promise(function(success) {
          cc.find("free_dialog/enter_node", _this11.node.parent).getComponent("RisingSunTheGreatKing_SelectFreeTimes").startGame(success);
        });
      },
      setJackpotGameScript: function setJackpotGameScript(script) {
        this._jackpotGameScript = script;
      },
      setSelectFreeTimesScript: function setSelectFreeTimesScript(script) {
        this._selectFreeTimesScript = script;
      },
      playCoinFlyAnimation: function playCoinFlyAnimation() {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var haveWild, i, resultCard, collectbd, script;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              haveWild = false;
              for (i = 0; i < _this12._gameInfo.resultCards.length; i++) {
                resultCard = _this12._gameInfo.resultCards[i];
                resultCard === _this12._cfg.wildId && function() {
                  haveWild = true;
                  var symbol = _this12.GetSymbolByIdx(i + 1);
                  if (symbol) {
                    symbol.playBonusSgAnimation();
                    cc.tween(symbol).delay(.5).call(function() {
                      var endPos = cc.find("bowl", _this12.node).convertToWorldSpaceAR(cc.v2(0, 0));
                      endPos = _this12.node.parent.convertToNodeSpaceAR(endPos);
                      var startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                      startPos = _this12.node.parent.convertToNodeSpaceAR(startPos);
                      var particle = cc.instantiate(cc.find("particle_fly", _this12.node.parent));
                      particle.active = true;
                      particle.parent = _this12.node.parent;
                      particle.position = startPos;
                      Global.SlotsSoundMgr.playEffect("sound_AZTEC_fire_fly");
                      cc.tween(particle).to(.5, {
                        position: endPos
                      }).removeSelf().start();
                    }).start();
                  }
                }();
              }
              if (!haveWild) {
                _context15.next = 7;
                break;
              }
              _context15.next = 5;
              return cc.vv.gameData.awaitTime(1);

             case 5:
              collectbd = cc.find("bowl/collectbd", _this12.node);
              if (collectbd) {
                collectbd.active = true;
                Global.SlotsSoundMgr.playEffect("sound_AZTEC_fire_boom");
                script = collectbd.getComponent(cc.Animation);
                script.play();
                script.on("stop", function() {
                  script.off("stop");
                  collectbd.active = false;
                });
              }

             case 7:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      isPlaySymbolScatterAudio: function isPlaySymbolScatterAudio(colIdx) {
        var result = true;
        for (var i = 0; i <= colIdx; i++) {
          var reel = this._reels[i];
          if (!reel.hasScatter()) {
            result = false;
            break;
          }
        }
        return result;
      },
      updateActiveGoldSymbol: function updateActiveGoldSymbol(betIndex) {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        for (var i = deskInfo.betLevelConfig.length - 1; i > 0; i--) {
          var node = cc.find("reels_frame/symbol_info/symbol_" + i, this.node);
          node && (betIndex >= deskInfo.betLevelConfig[i] ? node.getComponent("ImgSwitchCmp").setIndex(0) : node.getComponent("ImgSwitchCmp").setIndex(1));
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  RisingSunTheGreatKing_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "193a1WdB+ZAM7vDIou0eOoZ", "RisingSunTheGreatKing_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      playBonusSgAnimation: function playBonusSgAnimation() {
        var aniNode = cc.find("bonus_sg", this._showNode);
        if (aniNode) {
          Global.SlotsSoundMgr.playEffect("sound_AZTEC_wild_fire");
          aniNode.active = true;
          var script = aniNode.getComponent(cc.Animation);
          script.play();
          script.on("stop", function() {
            script.off("stop");
            aniNode.active = false;
          });
        }
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
}, {}, [ "RisingSunTheGreatKing_Cfg", "RisingSunTheGreatKing_GameData", "RisingSunTheGreatKing_Logic", "RisingSunTheGreatKing_Reel", "RisingSunTheGreatKing_SelectFreeTimes", "RisingSunTheGreatKing_SelectJackpotGame", "RisingSunTheGreatKing_SelectStartSymbol", "RisingSunTheGreatKing_Slots", "RisingSunTheGreatKing_Symbol" ]);