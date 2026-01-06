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
  Clown_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6f74G7YUBJtaiQKrnCzN0z", "Clown_Cfg");
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
        bg: "",
        win_ani: {
          name: "animation2",
          zIndex: 1e3
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        bg: "",
        win_ani: {
          name: "animation1",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 3, {
        node: "s8",
        win_node: "w2",
        bg: "",
        win_ani: {
          name: "animation2",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 4, {
        node: "s9",
        win_node: "w2",
        bg: "",
        win_ani: {
          name: "animation3",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 5, {
        node: "s3",
        win_node: "w3",
        bg: "d3",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 6, {
        node: "s4",
        win_node: "w4",
        bg: "d4",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 7, {
        node: "s5",
        win_node: "w5",
        bg: "d5",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 8, {
        node: "s6",
        win_node: "w6",
        bg: "d6",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _defineProperty(_symbol, 9, {
        node: "s7",
        win_node: "w7",
        bg: "d7",
        win_ani: {
          name: "animation",
          zIndex: 800
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Clown_Slots",
        Reels: "Clown_reel",
        Symbols: "Clown_symbol",
        Sound: "Clown_sound"
      },
      col: 5,
      row: 4,
      col_free: 5,
      row_free: 8,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 126,
        height: 85
      },
      symbolBgPrefab: "LMSlots_Symbol_bg",
      helpItems: [ "games/Clown/prefab/LMSlots_Help_item1", "games/Clown/prefab/LMSlots_Help_item2", "games/Clown/prefab/LMSlots_Help_item3", "games/Clown/prefab/LMSlots_Help_item4", "games/Clown/prefab/LMSlots_Help_item5", "games/Clown/prefab/LMSlots_Help_item6", "games/Clown/prefab/LMSlots_Help_item7", "games/Clown/prefab/LMSlots_Help_item8" ],
      scatterId: 2,
      autoModelDelay: 1,
      randomSymbols: [ 5, 6, 7, 8, 9 ],
      kuang: "zjlx_01",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 2,
      bounce: true,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      commEffect: {
        path: "games/Clown/",
        win1: [ "base/win1", "base/win1end" ],
        win2: [ "base/win2", "base/win2end" ]
      },
      reelStateInfo: [ {
        id: [ 1 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/Clown/",
        reelStopSound: "base/reel_stop",
        symbolStopSound: "base/scatter_notify",
        antSound: "base/anticipation1",
        antSpeed: 2e3
      } ],
      grayColor: cc.color(60, 60, 60),
      normalColor: cc.color(255, 255, 255),
      normalBgm: "base/base_bgm",
      jackpotType: {
        1: 1,
        2: 2,
        3: 3,
        4: 5,
        5: 4
      },
      AddAntiTime: 2
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Clown_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfa63ruvhVCg4xPIvvrL9fF", "Clown_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _gameManage: null,
        _JackpotReelGame: null,
        _StackedWildsGame: null,
        _RandomWildsGame: null,
        _JackInTheBox: null
      },
      getBonusGame: function getBonusGame() {
        return this._deskInfo.bonusGame;
      },
      setBonusGame: function setBonusGame(bonusGame) {
        this._deskInfo.bonusGame = bonusGame;
      },
      getBalloonGame: function getBalloonGame() {
        return this._deskInfo.balloonGame;
      },
      getPopWinManage: function getPopWinManage() {
        return cc.find("Canvas/safe_node").getComponentInChildren("Clown_Pop");
      },
      getManage: function getManage() {
        return this._gameManage;
      },
      setManage: function setManage(script) {
        this._gameManage = script;
      },
      setJackpotReelGame: function setJackpotReelGame(script) {
        this._JackpotReelGame = script;
      },
      getJackpotReelGame: function getJackpotReelGame() {
        return this._JackpotReelGame;
      },
      setStackedWildsGame: function setStackedWildsGame(script) {
        this._StackedWildsGame = script;
      },
      getStackedWildsGame: function getStackedWildsGame() {
        return this._StackedWildsGame;
      },
      setRandomWildsGame: function setRandomWildsGame(script) {
        this._RandomWildsGame = script;
      },
      getRandomWildsGame: function getRandomWildsGame() {
        return this._RandomWildsGame;
      },
      setJackInTheBox: function setJackInTheBox(script) {
        this._JackInTheBox = script;
      },
      getJackInTheBox: function getJackInTheBox() {
        return this._JackInTheBox;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Clown_JackpotReelGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "179b0jLEPJCzZ/77WBuARMg", "Clown_JackpotReelGame");
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
        jinkuang: {
          default: [],
          type: [ cc.Node ]
        },
        _jinKuangStartY: 0
      },
      onLoad: function onLoad() {
        this._jinKuangStartY = this.jinkuang[0].y;
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showGame: function showGame(finalPositon, jackpotType, result) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, falied) {
            var _iterator, _step, iterator, i, zhongjiang, effect, node, jackpot_zjlx_01, luodi, time;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this2.node.active = true;
                _iterator = _createForOfIteratorHelper(_this2.jinkuang);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    iterator = _step.value;
                    iterator.active = false;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                i = 0;

               case 4:
                if (!(i < finalPositon.length)) {
                  _context.next = 31;
                  break;
                }
                _this2.jinkuang[i].y = _this2._jinKuangStartY;
                zhongjiang = cc.find("jpzhongjiang", _this2.jinkuang[i]);
                zhongjiang.active = false;
                effect = cc.find("effect", _this2.jinkuang[i]);
                effect.active = false;
                node = cc.find("node", _this2.jinkuang[i]);
                node.active = true;
                jackpot_zjlx_01 = cc.find("jackpot_zjlx_01", _this2.jinkuang[i]);
                jackpot_zjlx_01.active = false;
                luodi = cc.find("jinkuangluodi", _this2.jinkuang[i]);
                luodi.active = true;
                _this2.jinkuang[i].active = true;
                time = (_this2.jinkuang[i].y + Math.abs(finalPositon[i].y)) / (_this2.jinkuang[i].y + 1208) * 2;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_full);
                cc.tween(_this2.jinkuang[i]).to(time, {
                  position: cc.v3(_this2.jinkuang[i].x, finalPositon[i].y, 0)
                }).start();
                _context.next = 22;
                return _this2.awaitTime(time);

               case 22:
                if (!(time < 2)) {
                  _context.next = 28;
                  break;
                }
                Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.jp_full);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jackpot_notify);
                _this2.showEndAni(i, result[finalPositon.length - 1 - i]);
                _context.next = 28;
                return _this2.awaitTime(2 - time);

               case 28:
                i++;
                _context.next = 4;
                break;

               case 31:
                _this2.showJacakpotType(jackpotType);
                _context.next = 34;
                return _this2.awaitTime(2);

               case 34:
                sucess();

               case 35:
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
      showJackPotResult: function showJackPotResult(finalPositon, jackpotType) {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, falied) {
            var type, _iterator2, _step2, iterator, i, zhongjiang, effect, node, jackpot_zjlx_01;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                type = cc.vv.gameData.getGameCfg().jackpotType[jackpotType];
                _this3.node.active = true;
                _iterator2 = _createForOfIteratorHelper(_this3.jinkuang);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    iterator = _step2.value;
                    iterator.active = false;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                for (i = 0; i < finalPositon.length; i++) if (finalPositon[i].y > -1208) {
                  zhongjiang = cc.find("jpzhongjiang", _this3.jinkuang[i]);
                  zhongjiang.active = false;
                  effect = cc.find("effect", _this3.jinkuang[i]);
                  effect.active = false;
                  node = cc.find("node", _this3.jinkuang[i]);
                  node.active = false;
                  jackpot_zjlx_01 = cc.find("jackpot_zjlx_01", _this3.jinkuang[i]);
                  jackpot_zjlx_01.active = false;
                  _this3.jinkuang[i].active = true;
                  _this3.jinkuang[i].y = finalPositon[i].y;
                } else _this3.jinkuang[i].active = false;
                _this3.showJacakpotType(type);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                cc.vv.gameData.getManage().showCaiDan();
                _context2.next = 10;
                return _this3.awaitTime(2);

               case 10:
                sucess();

               case 11:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      showEndAni: function showEndAni(i, backgrounds) {
        var node = cc.find("node", this.jinkuang[i]);
        node.active = false;
        var luodi = cc.find("jinkuangluodi", this.jinkuang[i]);
        var luodiSp = luodi.getComponent(sp.Skeleton);
        luodiSp.setAnimation(0, "animation1", false);
        luodiSp.setCompleteListener(function() {
          if (backgrounds) for (var _i = 0; _i < backgrounds.length; _i++) {
            var idx = backgrounds[_i];
            var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
            symbol && symbol.SetBackground("yellow" + (4 - _i));
          }
          luodi.active = false;
          luodiSp.setCompleteListener(null);
        });
        var effect = cc.find("effect", this.jinkuang[i]);
        effect.active = true;
        var effectSp = effect.getComponent(sp.Skeleton);
        effectSp.setAnimation(0, "animation1_1", false);
      },
      showJacakpotType: function showJacakpotType(type) {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.win_jackpot);
        cc.vv.gameData.getManage().showWinJackPoolAnimation(type - 1);
        for (var i = 0; i < this.jinkuang.length; i++) {
          var element = this.jinkuang[i];
          var zhongjiang = cc.find("jpzhongjiang", element);
          zhongjiang.active = true;
          var zhongjiangSp = zhongjiang.getComponent(sp.Skeleton);
          zhongjiangSp.setAnimation(0, "animation" + (6 - type), true);
          var jackpot_zjlx_01 = cc.find("jackpot_zjlx_01", this.jinkuang[i]);
          jackpot_zjlx_01.active = true;
          zhongjiang.scale = .2;
          cc.tween(zhongjiang).to(.4, {
            scale: 1.1
          }).to(.1, {
            scale: 1
          }).start();
          var luodi = cc.find("jinkuangluodi", this.jinkuang[i]);
          luodi.active = true;
          var luodiSp = luodi.getComponent(sp.Skeleton);
          luodiSp.setAnimation(0, "animation2", true);
        }
      },
      hideGame: function hideGame() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  Clown_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ac3826r2RLA7/lpIwqAl/x", "Clown_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script = this.node.addComponent("Clown_Manage");
        cc.vv.gameData.setManage(script);
        var safeNode = cc.find("Canvas/safe_node");
        var jackpotReelGame = safeNode.getComponentInChildren("Clown_JackpotReelGame");
        jackpotReelGame && cc.vv.gameData.setJackpotReelGame(jackpotReelGame);
        var stackedWildsGame = safeNode.getComponentInChildren("Clown_stackedWildsGame");
        stackedWildsGame && cc.vv.gameData.setStackedWildsGame(stackedWildsGame);
        var randomWildsGame = safeNode.getComponentInChildren("Clown_RandomWildsGame");
        randomWildsGame && cc.vv.gameData.setRandomWildsGame(randomWildsGame);
        var jackInTheBox = safeNode.getComponentInChildren("Clown_jackInTheBox");
        jackInTheBox && cc.vv.gameData.setJackInTheBox(jackInTheBox);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Clown_Manage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8902dS3qqNHIKfHszwrQuEd", "Clown_Manage");
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
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand", "MAXI" ];
    var collectEffectInteval = -212.5;
    cc.Class({
      extends: cc.Component,
      properties: {
        _joker: {
          default: null,
          type: cc.Node
        },
        _qiQiuGouRoot: null,
        _joker_yan: null,
        _qiQiuGouList: [],
        _showQiQiuGouSuccess: null,
        _slotsMask: null,
        _turntableTriggerBar: null,
        _PrizePoolRoot: null,
        _qiePin: [],
        _turntableTriggerBarLock: false,
        _collectNode: null,
        _initTurntableTriggerBar: true,
        _turntableTriggerBarInitY: 0,
        _caidan: null,
        _exitFree: null,
        _dingguang: null,
        _dengguang: null,
        _PrizePoolRootInitY: 0
      },
      onLoad: function onLoad() {
        this._joker = cc.find("safe_node/joker", this.node);
        var jokerSp = this._joker.getComponent(sp.Skeleton);
        jokerSp.setMix("idle", "skill", .2);
        jokerSp.setMix("skill", "skill-idle", .2);
        jokerSp.setMix("skill-idle", "idle", .4);
        this._qiQiuGouRoot = cc.find("safe_node/qiqiugouRoot", this.node);
        this._joker_yan = cc.find("safe_node/joker_yan", this.node);
        this._slots = cc.find("safe_node/slots", this.node);
        this._slotsMask = cc.find("safe_node/slotsMask", this.node);
        this._turntableTriggerBar = cc.find("safe_node/turntableTriggerBar", this.node);
        this._PrizePoolRoot = cc.find("safe_node/LMSlots_PrizePool_1", this.node);
        this._qiePin[0] = cc.find("safe_node/qiepingNode", this.node);
        this._qiePin[1] = cc.find("safe_node/qiepingNode2", this.node);
        this._caidan = cc.find("safe_node/caidai", this.node);
        this._exitFree = cc.find("safe_node/exitFree", this.node);
        this._collectNode = cc.find("safe_node/collectNode", this.node);
        var collectButton = cc.find("iconRight/button", this._turntableTriggerBar);
        Global.btnClickEvent(collectButton, this.showJackInTheBoxWin, this);
        var turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
        Global.btnClickEvent(turntableBarButton, this.unlockTurntable, this);
        this._dingguang = cc.find("safe_node/dingguang", this.node);
        this._dengguang = cc.find("safe_node/spr_bg_normal/dengguang", this.node);
        for (var i = 1; i < 5; i++) {
          var qiqiugouNode = this._qiQiuGouRoot.getChildByName("qiqiugouNode" + i);
          Global.btnClickEvent(qiqiugouNode, this.clickQiQiuGou.bind(this, i - 1), this);
          this._qiQiuGouList[this._qiQiuGouList.length] = qiqiugouNode;
        }
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
        this.initTurntableTriggerBar();
      },
      start: function start() {
        var _this = this;
        this.scheduleOnce(function() {
          _this._PrizePoolRootInitY = _this._PrizePoolRoot.y;
        }, 0);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvClickQiQiu, false, this);
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      ShowGameview: function ShowGameview(bFree) {
        this._turntableTriggerBarInitY = this._turntableTriggerBar.y;
        if (bFree) {
          this._joker.active = false;
          this._turntableTriggerBar.y += 336;
        } else this._joker.active = true;
      },
      showTurntableTriggerBar: function showTurntableTriggerBar(bFree) {
        if (bFree) {
          this._turntableTriggerBar.y = this._turntableTriggerBarInitY;
          cc.tween(this._turntableTriggerBar).to(.65, {
            y: this._turntableTriggerBarInitY + 336
          }).start();
          this._PrizePoolRoot.scale = 1;
        } else {
          this._turntableTriggerBar.y = this._turntableTriggerBarInitY + 336;
          cc.tween(this._turntableTriggerBar).to(.65, {
            y: this._turntableTriggerBarInitY
          }).start();
        }
      },
      initTurntableTriggerBar: function initTurntableTriggerBar() {
        var bonusGame = cc.vv.gameData.getBonusGame();
        if (bonusGame) {
          var curmult = cc.vv.gameData.GetBetIdx();
          var lockNode = cc.find("lock", this._turntableTriggerBar);
          if (curmult >= bonusGame.needBet) {
            lockNode.active = false;
            this._turntableTriggerBarLock = false;
          } else {
            lockNode.active = true;
            this._turntableTriggerBarLock = true;
          }
          var bar = cc.find("Bar", this._turntableTriggerBar);
          var barEffect = cc.find("effect", bar);
          var barPrograss = cc.find("barMask/bar", bar);
          var addPrograss = cc.find("addPrograss", bar);
          var addPrograssNode = cc.find("node", addPrograss);
          var progress = bonusGame.progressData.totalCnt / bonusGame.progressData.needCnt;
          progress >= 1 && (progress = 0);
          var dstWidth = bar.width * progress;
          barEffect.width = dstWidth;
          barPrograss.x = dstWidth - bar.width;
          addPrograssNode.x = dstWidth + collectEffectInteval;
        }
      },
      changeTurntableTriggerBar: function changeTurntableTriggerBar() {
        var curmult = cc.vv.gameData.GetBetIdx();
        var lockNode = cc.find("lock", this._turntableTriggerBar);
        var bonusGame = cc.vv.gameData.getBonusGame();
        if (bonusGame) if (curmult >= bonusGame.needBet) {
          if (this._turntableTriggerBarLock) {
            this._turntableTriggerBarLock = false;
            var spine = cc.find("spine", lockNode);
            var spineSp = spine.getComponent(sp.Skeleton);
            spineSp.setAnimation(0, "animation3", false);
            spineSp.setCompleteListener(function() {
              lockNode.active = false;
              spineSp.setCompleteListener(null);
            });
            this._initTurntableTriggerBar || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_unlock);
          }
        } else if (!this._turntableTriggerBarLock) {
          this._turntableTriggerBarLock = true;
          lockNode.active = true;
          var _spine = cc.find("spine", lockNode);
          var _spineSp = _spine.getComponent(sp.Skeleton);
          _spineSp.setAnimation(0, "animation1", false);
          _spineSp.addAnimation(0, "animation2", true);
          _spineSp.setCompleteListener(null);
          this._initTurntableTriggerBar || Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_lock);
          var turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
          turntableBarButton.getComponent(cc.Button).instantiate = true;
        }
        this._initTurntableTriggerBar = false;
      },
      TrunTableTriggerBarVal: function TrunTableTriggerBarVal(bonusGame) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var curmult, deskInfo_bonusGame, bar, barPrograss, barEffect, progress, jinHeZi, addPrograss, addPrograssNode, lihe, lihePos, endPos, i, symbol, position, finalPosition, tempSymbolNode, spine, liheSpine, addPrograssNodeSp, dstWidth, rightSpineSp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                curmult = cc.vv.gameData.GetBetIdx();
                deskInfo_bonusGame = cc.vv.gameData.getBonusGame();
                if (!deskInfo_bonusGame) {
                  _context.next = 6;
                  break;
                }
                if (!(curmult < deskInfo_bonusGame.needBet)) {
                  _context.next = 6;
                  break;
                }
                sucess();
                return _context.abrupt("return");

               case 6:
                bar = cc.find("Bar", _this3._turntableTriggerBar);
                barPrograss = cc.find("barMask/bar", bar);
                barEffect = cc.find("effect", bar);
                progress = bonusGame.progressData.totalCnt / bonusGame.progressData.needCnt;
                jinHeZi = cc.vv.gameData.GetSlotsScript().findAllJinHeZi();
                addPrograss = cc.find("addPrograss", bar);
                addPrograssNode = cc.find("node", addPrograss);
                if (!(jinHeZi.length > 0)) {
                  _context.next = 48;
                  break;
                }
                lihe = cc.find("giftBoxes", _this3._turntableTriggerBar);
                lihePos = lihe.convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = _this3._collectNode.convertToNodeSpaceAR(lihePos);
                for (i = 0; i < jinHeZi.length; i++) {
                  symbol = jinHeZi[i];
                  position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                  finalPosition = _this3._collectNode.convertToNodeSpaceAR(position);
                  tempSymbolNode = cc.instantiate(symbol.node);
                  tempSymbolNode.parent = _this3._collectNode;
                  tempSymbolNode.position = finalPosition;
                  cc.tween(tempSymbolNode).to(.5, {
                    position: endPos
                  }, {
                    easing: "quadIn"
                  }).start();
                }
                _context.next = 20;
                return _this3.awaitTime(.5);

               case 20:
                _this3._collectNode.removeAllChildren();
                spine = cc.find("spine", lihe);
                spine.active = true;
                liheSpine = spine.getComponent(sp.Skeleton);
                liheSpine.setAnimation(0, "animation", false);
                liheSpine.setCompleteListener(function() {
                  spine.active = false;
                  liheSpine.setCompleteListener(null);
                });
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_fly);
                addPrograss.active = true;
                addPrograssNodeSp = addPrograssNode.getComponent(sp.Skeleton);
                addPrograssNodeSp.setAnimation(0, "animation", false);
                addPrograssNodeSp.setCompleteListener(function() {
                  addPrograss.active = false;
                  addPrograssNodeSp.setCompleteListener(null);
                });
                progress > 1 && (progress = 1);
                dstWidth = bar.width * progress;
                cc.tween(barPrograss).to(.2, {
                  x: dstWidth - bar.width
                }).start();
                cc.tween(barEffect).to(.2, {
                  width: dstWidth
                }).start();
                cc.tween(addPrograssNode).to(.2, {
                  x: dstWidth + collectEffectInteval
                }).start();
                _context.next = 38;
                return _this3.awaitTime(.2);

               case 38:
                if (!(progress >= 1)) {
                  _context.next = 48;
                  break;
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                rightSpineSp = cc.find("iconRight/spine", _this3._turntableTriggerBar).getComponent(sp.Skeleton);
                rightSpineSp.setAnimation(0, "animation2", false);
                rightSpineSp.addAnimation(0, "animation1", true);
                _context.next = 45;
                return _this3.awaitTime(1.6);

               case 45:
                barEffect.width = 0;
                barPrograss.x = -bar.width;
                addPrograssNode.x = collectEffectInteval;

               case 48:
                sucess();

               case 49:
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
      setNodeColor: function setNodeColor(node, color) {
        if (node) {
          node.color = color;
          for (var i = 0; i < node.children.length; i++) {
            var element = node.children[i];
            element.color = color;
          }
        }
      },
      showHenDuoQQ: function showHenDuoQQ() {
        var henduo_QQ = cc.find("safe_node/henduoQQ", this.node).getComponent(sp.Skeleton);
        henduo_QQ.setAnimation(0, "animation", false);
      },
      showQiQiuGou: function showQiQiuGou(isFreeGame) {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var base_QQ, jokerSp, yanSp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this4._showQiQiuGouSuccess = sucess;
                _this4._joker.active = !isFreeGame;
                _this4._joker_yan.active = false;
                if (isFreeGame) {
                  _context2.next = 19;
                  break;
                }
                base_QQ = cc.find("safe_node/base_QQ", _this4.node).getComponent(sp.Skeleton);
                base_QQ.setAnimation(0, "animation", false);
                jokerSp = _this4._joker.getComponent(sp.Skeleton);
                jokerSp.setAnimation(0, "skill", false);
                jokerSp.addAnimation(0, "skill-idle", true);
                _context2.next = 11;
                return _this4.awaitTime(1);

               case 11:
                _this4._joker_yan.active = true;
                yanSp = _this4._joker_yan.getComponent(sp.Skeleton);
                yanSp.setCompleteListener(function() {
                  _this4._joker_yan.active = false;
                  yanSp.setCompleteListener(null);
                });
                _this4._dengguang.active = true;
                _this4._slotsMask.active = true;
                _this4._slotsMask.height = 340;
                _context2.next = 21;
                break;

               case 19:
                _this4._slotsMask.active = true;
                _this4._slotsMask.height = 680;

               case 21:
                _context2.next = 23;
                return _this4.qiQiuGouShow(isFreeGame);

               case 23:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      recaveryQiQiuAnimation: function recaveryQiQiuAnimation(triggerIdxs) {
        var _this5 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var index, symbol, position, reel, mask, finalPosition, qiqiu, qiqiuSp, i, element, _symbol;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                if (4 === triggerIdxs.length) {
                  _this5._showQiQiuGouSuccess = sucess;
                  index = triggerIdxs[2];
                  symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(index);
                  position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0 + cc.vv.gameData.GetSlotsScript()._cfg.symbolSize.height / 2));
                  reel = cc.vv.gameData.GetSlotsScript()._reels[4];
                  cc.vv.gameData.GetSlotsScript()._isInFree && (reel = cc.vv.gameData.GetSlotsScript()._reelsFree[4]);
                  mask = cc.find("mask", reel.node);
                  finalPosition = mask.convertToNodeSpaceAR(position);
                  qiqiu = cc.find("qiqiu", mask);
                  qiqiu.active = true;
                  qiqiuSp = qiqiu.getComponent(sp.Skeleton);
                  qiqiuSp.setAnimation(0, "animation2", true);
                  qiqiu.y = finalPosition.y;
                  for (i = 0; i < triggerIdxs.length; i++) {
                    element = triggerIdxs[i];
                    _symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(element);
                    _symbol.setSymbolBgShow(false);
                  }
                } else sucess();

               case 1:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      recaveryQiQiuGou: function recaveryQiQiuGou(isFreeGame) {
        this._joker.active = !isFreeGame;
        var jokerSp = this._joker.getComponent(sp.Skeleton);
        jokerSp.setAnimation(0, "skill-idle", true);
        this._qiQiuGouRoot.active = true;
        var animationCompoent = this._qiQiuGouRoot.getComponent(cc.Animation);
        animationCompoent.play("qiqiugouNormal");
        for (var i = 0; i < this._qiQiuGouList.length; i++) {
          var qiqiugouNode = this._qiQiuGouList[i];
          qiqiugouNode.getComponent(cc.Button).interactable = true;
          this.setNodeColor(qiqiugouNode, cc.vv.gameData.getGameCfg().normalColor);
          for (var key in qiqiugouNode.children) if (qiqiugouNode.children.hasOwnProperty(key)) {
            var element = qiqiugouNode.children[key];
            element.active = false;
          }
          var gouNode = cc.find("qiqiugou2", qiqiugouNode);
          gouNode.active = true;
          var gouNodeSp = gouNode.getComponent(sp.Skeleton);
          gouNodeSp.setAnimation(0, "animation2", true);
        }
        if (isFreeGame) {
          this._slotsMask.active = true;
          this._slotsMask.height = 680;
        } else {
          this._dengguang.active = true;
          this._slotsMask.active = true;
          this._slotsMask.height = 340;
        }
        this.setAutoPlay();
      },
      setAutoPlay: function setAutoPlay() {
        var randomIdx = Global.random(0, this._qiQiuGouList.length - 1);
        var self = this;
        cc.vv.gameData.checkAutoPlay(this._qiQiuGouList[randomIdx], function() {
          self.clickQiQiuGou(randomIdx);
        });
      },
      hideQiQiuGou: function hideQiQiuGou(isFreeGame) {
        var _this6 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var jokerSp, animationCompoent, i, qiqiugouNode, _animationCompoent, _i, _qiqiugouNode;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fly_ball);
                if (isFreeGame) {
                  _context4.next = 20;
                  break;
                }
                jokerSp = _this6._joker.getComponent(sp.Skeleton);
                jokerSp.setAnimation(0, "skill-sh", false);
                jokerSp.addAnimation(0, "idle", true);
                _context4.next = 7;
                return _this6.awaitTime(.1);

               case 7:
                _this6._qiQiuGouRoot.active = true;
                animationCompoent = _this6._qiQiuGouRoot.getComponent(cc.Animation);
                animationCompoent.play("qiqiugouHide");
                for (i = 0; i < _this6._qiQiuGouList.length; i++) {
                  qiqiugouNode = _this6._qiQiuGouList[i];
                  cc.tween(qiqiugouNode).to(.3, {
                    scale: .3
                  }).start();
                }
                _context4.next = 13;
                return _this6.awaitTime(.33);

               case 13:
                _this6._qiQiuGouRoot.active = false;
                _this6._slotsMask.active = false;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.back_ball);
                _this6._dengguang.active = false;
                sucess();
                _context4.next = 30;
                break;

               case 20:
                _this6._qiQiuGouRoot.active = true;
                _animationCompoent = _this6._qiQiuGouRoot.getComponent(cc.Animation);
                _animationCompoent.play("qiqiugouHide");
                for (_i = 0; _i < _this6._qiQiuGouList.length; _i++) {
                  _qiqiugouNode = _this6._qiQiuGouList[_i];
                  cc.tween(_qiqiugouNode).to(.3, {
                    scale: .3
                  }).start();
                }
                _context4.next = 26;
                return _this6.awaitTime(.33);

               case 26:
                _this6._qiQiuGouRoot.active = false;
                _this6._slotsMask.active = false;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.back_ball);
                sucess();

               case 30:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      qiQiuGouShow: function qiQiuGouShow(isFreeGame) {
        var _this7 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var animationCompoent, i, qiqiugouNode, key, element, gouNode, gouNodeSp;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                _this7._qiQiuGouRoot.active = true;
                animationCompoent = _this7._qiQiuGouRoot.getComponent(cc.Animation);
                animationCompoent.play("qiqiugouShow");
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fly_ball);
                for (i = 0; i < _this7._qiQiuGouList.length; i++) {
                  qiqiugouNode = _this7._qiQiuGouList[i];
                  qiqiugouNode.getComponent(cc.Button).interactable = true;
                  _this7.setNodeColor(qiqiugouNode, cc.vv.gameData.getGameCfg().normalColor);
                  for (key in qiqiugouNode.children) if (qiqiugouNode.children.hasOwnProperty(key)) {
                    element = qiqiugouNode.children[key];
                    element.active = false;
                  }
                  gouNode = cc.find("qiqiugou2", qiqiugouNode);
                  gouNode.active = true;
                  gouNodeSp = gouNode.getComponent(sp.Skeleton);
                  gouNodeSp.setAnimation(0, "animation1", false);
                  gouNodeSp.addAnimation(0, "animation2", true);
                }
                _context5.next = 7;
                return _this7.awaitTime(.33);

               case 7:
                animationCompoent.play("qiqiugouNormal");
                _this7.setAutoPlay();
                sucess();

               case 10:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      clickQiQiuGou: function clickQiQiuGou(index) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 3;
        req.data.choiceId = index;
        cc.vv.NetManager.send(req);
        var animationCompoent = this._qiQiuGouRoot.getComponent(cc.Animation);
        animationCompoent.pause();
        for (var i = 0; i < this._qiQiuGouList.length; i++) {
          var element = this._qiQiuGouList[i];
          element.stopAllActions();
          i !== index && this.setNodeColor(element, cc.vv.gameData.getGameCfg().grayColor);
          element.getComponent(cc.Button).interactable = false;
        }
      },
      showQiQiuGouResult: function showQiQiuGouResult(index, result, jinbiString, otherTypes) {
        var _this8 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
            var clickNode, gouNode, gouNodeSp, qiqiugou2;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                clickNode = _this8._qiQiuGouList[index];
                gouNode = cc.find("qiqiugou", clickNode);
                gouNode.active = true;
                gouNodeSp = gouNode.getComponent(sp.Skeleton);
                gouNodeSp.setAnimation(0, "animation", false);
                gouNodeSp.setCompleteListener(function() {
                  gouNode.active = false;
                });
                qiqiugou2 = cc.find("qiqiugou2", clickNode);
                cc.tween(qiqiugou2).to(.3, {
                  scale: .1
                }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                  var resultNode, startIndex, i, element, retNode;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      qiqiugou2.active = false;
                      qiqiugou2.scale = 1;
                      resultNode = cc.find("choose_" + result, clickNode);
                      1 === result && (resultNode.getComponent(cc.Label).string = jinbiString);
                      resultNode.active = true;
                      resultNode.scale = .1;
                      cc.tween(resultNode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context6.next = 9;
                      return _this8.awaitTime(.8);

                     case 9:
                      startIndex = 0;
                      for (i = 0; i < _this8._qiQiuGouList.length; i++) {
                        element = _this8._qiQiuGouList[i];
                        if (i !== index) {
                          retNode = cc.find("choose_" + otherTypes[startIndex], element);
                          if (retNode) {
                            1 === otherTypes[startIndex] && (retNode.getComponent(cc.Label).string = jinbiString);
                            retNode.active = true;
                            retNode.scale = 1;
                          }
                          startIndex++;
                        }
                      }
                      _context6.next = 13;
                      return _this8.awaitTime(2);

                     case 13:
                      sucess();

                     case 14:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }))).start();

               case 8:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      onRecvClickQiQiu: function onRecvClickQiQiu(msg) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var coin;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (!(200 == msg.code)) {
                _context8.next = 29;
                break;
              }
              if (!(3 == msg.data.rtype)) {
                _context8.next = 28;
                break;
              }
              coin = msg.data.balloonGame.startPrize * msg.data.balloonGame.subGameresult.mult;
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.pick_end);
              _context8.next = 6;
              return _this9.showQiQiuGouResult(msg.data.choiceId, msg.data.balloonGame.finalType, Global.convertNumToShort(coin), msg.data.balloonGame.otherTypes);

             case 6:
              _context8.next = 8;
              return _this9.hideQiQiuGou(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime());

             case 8:
              if (!(1 === msg.data.balloonGame.finalType)) {
                _context8.next = 11;
                break;
              }
              _context8.next = 23;
              break;

             case 11:
              if (!(2 === msg.data.balloonGame.finalType)) {
                _context8.next = 16;
                break;
              }
              _context8.next = 14;
              return _this9.showRandomWildsGame(msg.data.balloonGame.subGameresult);

             case 14:
              _context8.next = 23;
              break;

             case 16:
              if (!(3 === msg.data.balloonGame.finalType)) {
                _context8.next = 21;
                break;
              }
              _context8.next = 19;
              return _this9.showStackedWildsGame(msg.data.balloonGame.subGameresult);

             case 19:
              _context8.next = 23;
              break;

             case 21:
              _context8.next = 23;
              return _this9.showJackpotReelGame(msg.data.balloonGame.subGameresult);

             case 23:
              _this9.showGameWinTrace(msg.data.balloonGame.lineResult);
              cc.vv.gameData.GetSlotsScript()._balloonGameWinCoin = msg.data.balloonGame.winCoin;
              if (_this9._showQiQiuGouSuccess) {
                _this9._showQiQiuGouSuccess();
                _this9._showQiQiuGouSuccess = null;
              }
              _context8.next = 29;
              break;

             case 28:
              1 == msg.data.rtype ? cc.vv.gameData.getPopWinManage().onSpinTrunTable(msg) : 2 === msg.data.rtype && cc.vv.gameData.getPopWinManage().onSelectWanFa(msg);

             case 29:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showGameWinTrace: function showGameWinTrace(lineResult) {
        var allWinIdx = [];
        for (var i = 0; i < lineResult.zjLuXian.length; i++) {
          var item = lineResult.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (lineResult.scatterResult && lineResult.scatterResult.indexs) for (var _i2 = 0; _i2 < lineResult.scatterResult.indexs.length; _i2++) {
          var val = lineResult.scatterResult.indexs[_i2];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      showJackpotReelGame: function showJackpotReelGame(subGameresult) {
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
            var result, finalPositionList, cfg, key, element, idx, symbol, position, finalPosition;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                result = cc.vv.gameData.GetSlotsScript().changeCardsValArr(subGameresult.jackpotIdxs);
                finalPositionList = [ cc.v2(260, -1208), cc.v2(130, -1208), cc.v2(0, -1208), cc.v2(-130, -1208), cc.v2(-260, -1208) ];
                cfg = cc.vv.gameData.getGameCfg();
                for (key in result) if (result.hasOwnProperty(key)) {
                  element = result[key];
                  if (4 === element.length) {
                    idx = element[2];
                    symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                    position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0 + cfg.symbolSize.height / 2));
                    finalPosition = cc.vv.gameData.getJackpotReelGame().node.convertToNodeSpaceAR(position);
                    finalPositionList[finalPositionList.length - Number(key) - 1].y = finalPosition.y;
                  }
                }
                _context9.next = 6;
                return cc.vv.gameData.getJackpotReelGame().showGame(finalPositionList, subGameresult.jackpotId, result);

               case 6:
                _context9.next = 8;
                return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(subGameresult.jackpotValue, subGameresult.jackpotId);

               case 8:
                sucess();

               case 9:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x13, _x14) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      setJackpot: function setJackpot(jackpot) {
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
            var result, finalPositionList, cfg, key, element, idx, symbol, position, finalPosition;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                result = cc.vv.gameData.GetSlotsScript().changeCardsValArr(jackpot.idxs);
                finalPositionList = [ cc.v2(260, -1208), cc.v2(130, -1208), cc.v2(0, -1208), cc.v2(-130, -1208), cc.v2(-260, -1208) ];
                cfg = cc.vv.gameData.getGameCfg();
                for (key in result) if (result.hasOwnProperty(key)) {
                  element = result[key];
                  if (4 === element.length) {
                    idx = element[2];
                    symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                    position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0 + cfg.symbolSize.height / 2));
                    finalPosition = cc.vv.gameData.getJackpotReelGame().node.convertToNodeSpaceAR(position);
                    finalPositionList[finalPositionList.length - Number(key) - 1].y = finalPosition.y;
                  }
                }
                _context10.next = 6;
                return cc.vv.gameData.getJackpotReelGame().showJackPotResult(finalPositionList, jackpot.id);

               case 6:
                _context10.next = 8;
                return cc.vv.gameData.getPopWinManage().showJackpotWinCoin(jackpot.value, jackpot.id);

               case 8:
                sucess();

               case 9:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x15, _x16) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      showStackedWildsGame: function showStackedWildsGame(subGameresult) {
        var _this10 = this;
        return new Promise(function() {
          var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                _this10._dingguang.active = true;
                _context11.next = 3;
                return cc.vv.gameData.getStackedWildsGame().showGame(subGameresult.wildCols, subGameresult.realCards, cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime());

               case 3:
                cc.vv.gameData.getStackedWildsGame().hideGame();
                _this10._dingguang.active = false;
                sucess();

               case 6:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x17, _x18) {
            return _ref10.apply(this, arguments);
          };
        }());
      },
      showRandomWildsGame: function showRandomWildsGame(subGameresult) {
        var _this11 = this;
        return new Promise(function() {
          var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                _this11._slotsMask.active = true;
                cc.vv.gameData.GetSlotsScript()._isInFree ? _this11._slotsMask.height = 680 : _this11._slotsMask.height = 340;
                _context12.next = 4;
                return cc.vv.gameData.getRandomWildsGame().showGame(subGameresult.randIdxs, subGameresult.randCards);

               case 4:
                _this11._slotsMask.active = false;
                cc.vv.gameData.getRandomWildsGame().hideGame();
                sucess();

               case 7:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x19, _x20) {
            return _ref11.apply(this, arguments);
          };
        }());
      },
      showJackPoolNorMalAction: function showJackPoolNorMalAction() {
        if (cc.vv.gameData) {
          var PrizePoolRoot = this._PrizePoolRoot;
          var cfg = cc.vv.gameData.getGameCfg();
          if (PrizePoolRoot) for (var i = 1; i < 6; i++) {
            var element = jackpotNames[cfg.jackpotType[i] - 1];
            var targetJpNode = cc.find("prizePool_" + element, PrizePoolRoot);
            var winEffect = cc.find("winEffect", targetJpNode);
            winEffect.active = false;
            var iconNode = cc.find("icon_" + element, PrizePoolRoot);
            var jackpotAwards = cc.find("jackpot_awards_01", iconNode);
            jackpotAwards.scale = 1;
            var jackpotAwardsSp = jackpotAwards.getComponent(sp.Skeleton);
            jackpotAwardsSp.setAnimation(0, "animation" + (6 - i) + "_4", true);
            cc.tween(jackpotAwards).delay(.5 * i).to(.5, {
              scale: 0
            }, {
              easing: "backIn"
            }).delay(1 * (5 - i) + 3).to(.5, {
              scale: 1
            }, {
              easing: "backOut"
            }).start();
          }
        }
      },
      showWinJackPoolAnimation: function showWinJackPoolAnimation(index) {
        var PrizePoolRoot = this._PrizePoolRoot;
        if (PrizePoolRoot) {
          var element = jackpotNames[index];
          var iconNode = cc.find("icon_" + element, PrizePoolRoot);
          var jackpotAwards = cc.find("jackpot_awards_01", iconNode);
          jackpotAwards.scale = 1;
          jackpotAwards.stopAllActions();
          var jackpotAwardsSp = jackpotAwards.getComponent(sp.Skeleton);
          jackpotAwardsSp.setAnimation(0, "animation" + (5 - index) + "_1", false);
          jackpotAwardsSp.addAnimation(0, "animation" + (5 - index) + "_2", false);
          jackpotAwardsSp.addAnimation(0, "animation" + (5 - index) + "_3", false);
          var targetJpNode = cc.find("prizePool_" + element, PrizePoolRoot);
          var winEffect = cc.find("winEffect", targetJpNode);
          winEffect.active = true;
        }
      },
      setFreeGame: function setFreeGame(bFree) {
        var _this12 = this;
        return new Promise(function() {
          var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(sucess, failed) {
            var qiePinSp;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                if (!bFree) {
                  _context13.next = 12;
                  break;
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition2);
                qiePinSp = _this12._qiePin[0].getComponent(sp.Skeleton);
                _this12._qiePin[0].active = true;
                qiePinSp.setAnimation(0, "animation", false);
                qiePinSp.setCompleteListener(function() {
                  _this12._qiePin[0].active = false;
                  qiePinSp.setCompleteListener(null);
                });
                _context13.next = 8;
                return _this12.awaitTime(2.5);

               case 8:
                _context13.next = 10;
                return cc.vv.gameData.GetSlotsScript().showFreeGameSlots();

               case 10:
                _context13.next = 16;
                break;

               case 12:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition1);
                _this12.showExitFree();
                _context13.next = 16;
                return cc.vv.gameData.GetSlotsScript().hideFreeGameSlots();

               case 16:
                sucess();

               case 17:
               case "end":
                return _context13.stop();
              }
            }, _callee13);
          }));
          return function(_x21, _x22) {
            return _ref12.apply(this, arguments);
          };
        }());
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(data) {
        this.changeTurntableTriggerBar();
      },
      showJackInTheBoxWin: function showJackInTheBoxWin() {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          var collectButton;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              if (!cc.vv.gameData.GetSlotsScript()._isInFree) {
                _context14.next = 2;
                break;
              }
              return _context14.abrupt("return");

             case 2:
              if (!("idle" != cc.vv.gameData.GetSlotState())) {
                _context14.next = 4;
                break;
              }
              return _context14.abrupt("return");

             case 4:
              if (!(cc.vv.gameData.GetAutoModelTime() > 0)) {
                _context14.next = 6;
                break;
              }
              return _context14.abrupt("return");

             case 6:
              collectButton = cc.find("iconRight/button", _this13._turntableTriggerBar);
              collectButton.getComponent(cc.Button).interactable = false;
              _context14.next = 10;
              return cc.vv.gameData.getJackInTheBox().showPopWin(cc.vv.gameData.getBonusGame());

             case 10:
              collectButton.getComponent(cc.Button).interactable = true;

             case 11:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      unlockTurntable: function unlockTurntable() {
        if (cc.vv.gameData.GetSlotsScript()._isInFree) return;
        if ("idle" != cc.vv.gameData.GetSlotState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        var turntableBarButton = cc.find("lock/button", this._turntableTriggerBar);
        var bonusGame = cc.vv.gameData.getBonusGame();
        if (bonusGame && bonusGame.needBet <= cc.vv.gameData._deskInfo.mults.length) {
          turntableBarButton.getComponent(cc.Button).instantiate = false;
          var bottom = cc.vv.gameData.GetBottomScript();
          bottom.SetBetIdx(bonusGame.needBet);
        }
      },
      showCaiDan: function showCaiDan() {
        var _this14 = this;
        this._caidan.active = true;
        var caidanSp = this._caidan.getComponent(sp.Skeleton);
        caidanSp.setAnimation(0, "animation", false);
        caidanSp.setCompleteListener(function() {
          _this14._caidan.active = false;
          caidanSp.setCompleteListener(null);
        });
      },
      showExitFree: function showExitFree() {
        var _this15 = this;
        this._exitFree.active = true;
        var exitFreeSp = this._exitFree.getComponent(sp.Skeleton);
        exitFreeSp.setAnimation(0, "animation", false);
        exitFreeSp.setCompleteListener(function() {
          _this15._exitFree.active = false;
          exitFreeSp.setCompleteListener(null);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Clown_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92a2altlEVGI5XliUOaFRFt", "Clown_Pop");
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
    var winName = {
      turnTableGame: 0,
      jackpotWinCoin: 1,
      freeGame: 2,
      wanfaxuanze: 3,
      showRound: 4,
      jackInBoxWinCoin: 5
    };
    var spinRuslt = [ -120, -300, -240, -60, 0, -180 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        showWinList: {
          default: [],
          type: [ cc.Node ]
        },
        jackpotWinCoin_button: {
          default: null,
          type: cc.Node
        },
        jackpotWinCoin_label: {
          default: null,
          type: cc.Node
        },
        freeGame_Collectbutton: {
          default: null,
          type: cc.Node
        },
        freeGame_label: {
          default: null,
          type: cc.Node
        },
        freeGame_startbutton: {
          default: null,
          type: cc.Node
        },
        turnTableGame_spinButton: {
          default: null,
          type: cc.Node
        },
        turnTableGame_clossButton: {
          default: null,
          type: cc.Node
        },
        turnTableGame_label: {
          default: null,
          type: cc.Node
        },
        wanFaXuanZe_startButton: {
          default: null,
          type: cc.Node
        },
        wanFaXuanZe_selectButton1: {
          default: null,
          type: cc.Node
        },
        wanFaXuanZe_selectButton2: {
          default: null,
          type: cc.Node
        },
        wanFaXuanZe_selectButton3: {
          default: null,
          type: cc.Node
        },
        jackInBoxWinCoin_collect: {
          default: null,
          type: cc.Node
        },
        jackInBoxWinCoin_label: {
          default: null,
          type: cc.Node
        },
        _jackpotWinCoin: 0,
        _freeGameWinCoin: 0,
        _trunTableWinCoin: 0,
        _freeGameTimesSucces: null,
        _spinWheelSucces: null,
        _jackInBoxWinCoin: 0,
        _trunTableSucces: null
      },
      onLoad: function onLoad() {},
      onDestroy: function onDestroy() {},
      start: function start() {
        Global.btnClickEvent(this.jackpotWinCoin_button, this.clossJackpotWinCoin, this);
        Global.btnClickEvent(this.freeGame_Collectbutton, this.clossFreeGame, this);
        Global.btnClickEvent(this.freeGame_startbutton, this.clossFreeGame, this);
        Global.btnClickEvent(this.turnTableGame_spinButton, this.spinTurnTable, this);
        Global.btnClickEvent(this.turnTableGame_clossButton, this.closeTrunTableGame, this);
        Global.btnClickEvent(this.wanFaXuanZe_startButton, this.selectWanFa, this);
        Global.btnClickEvent(this.wanFaXuanZe_selectButton1, this.selectResult1, this);
        Global.btnClickEvent(this.wanFaXuanZe_selectButton2, this.selectResult2, this);
        Global.btnClickEvent(this.wanFaXuanZe_selectButton3, this.selectResult3, this);
        Global.btnClickEvent(this.jackInBoxWinCoin_collect, this.closeJackInBoxWinCoin, this);
      },
      showWin: function showWin() {
        this.node.active = true;
        var popBg = cc.find("popup", this.node);
        popBg.opacity = 0;
        cc.tween(popBg).to(.3, {
          opacity: 255
        }).start();
      },
      hideWin: function hideWin(callBack) {
        var _this = this;
        var popBg = cc.find("popup", this.node);
        cc.tween(popBg).to(.3, {
          opacity: 0
        }).call(function() {
          callBack && callBack();
          _this.node.active = false;
          for (var i = 0; i < _this.showWinList.length; i++) {
            var element = _this.showWinList[i];
            element.active = false;
          }
        }).start();
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      initJackpotWinCoin: function initJackpotWinCoin(coinNum) {
        this.jackpotWinCoin_button.getComponent(cc.Button).interactable = true;
        this._jackpotWinCoin = coinNum;
        this.jackpotWinCoin_label.getComponent(cc.Label).string = Global.FormatNumToComma(Math.floor(.1 * coinNum));
        this.jackpotWinCoin_label.scale = .2;
        cc.vv.gameData.checkAutoPlay(this.jackpotWinCoin_button, this.clossJackpotWinCoin.bind(this));
      },
      showJackpotWinCoin: function showJackpotWinCoin(coinNum, jackpotNum) {
        var _this3 = this;
        return new Promise(function(sucess, failed) {
          var type = cc.vv.gameData.getGameCfg().jackpotType[jackpotNum];
          _this3._freeGameTimesSucces = sucess;
          _this3.showWin();
          _this3.initJackpotWinCoin(coinNum);
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_dialog_start_show);
          for (var i = 0; i < _this3.showWinList.length; i++) {
            var element = _this3.showWinList[i];
            element.active = false;
          }
          _this3.showWinList[winName.jackpotWinCoin].active = true;
          var jackpotWinNode = cc.find("jackpot_tc_01", _this3.showWinList[winName.jackpotWinCoin]);
          jackpotWinNode.y = -170;
          var jackpotWinNodeSp = jackpotWinNode.getComponent(sp.Skeleton);
          var index = 6 - type;
          if (jackpotWinNodeSp) {
            jackpotWinNodeSp.setAnimation(0, "animation" + index + "_1", false);
            jackpotWinNodeSp.addAnimation(0, "animation" + index + "_2", true);
          }
          cc.tween(_this3.jackpotWinCoin_label).to(.2, {
            scale: 1
          }).call(function() {
            _this3._startAddFreeWinCoin = true;
            Global.doRoallNumEff(_this3.jackpotWinCoin_label, Math.floor(.1 * coinNum), coinNum, 2.5, function() {
              _this3._startAddFreeWinCoin = false;
            }, null, 0, true);
          }).start();
        });
      },
      clossJackpotWinCoin: function clossJackpotWinCoin() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var winCoinLabel, jackpotWinNode;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
              _this4.jackpotWinCoin_button.stopAllActions();
              _this4.jackpotWinCoin_button.getComponent(cc.Button).interactable = false;
              if (!_this4._startAddFreeWinCoin) {
                _context.next = 10;
                break;
              }
              _this4._startAddFreeWinCoin = false;
              _this4.jackpotWinCoin_label.stopAllActions();
              winCoinLabel = _this4.jackpotWinCoin_label.getComponent(cc.Label);
              winCoinLabel.string = Global.FormatNumToComma(_this4._jackpotWinCoin);
              _context.next = 10;
              return _this4.awaitTime(.2);

             case 10:
              _context.next = 12;
              return _this4.awaitTime(.2);

             case 12:
              jackpotWinNode = cc.find("jackpot_tc_01", _this4.showWinList[winName.jackpotWinCoin]);
              cc.tween(jackpotWinNode).to(.3, {
                position: cc.v3(jackpotWinNode.x, -1208, 0)
              }).start();
              _this4.hideWin(function() {
                cc.vv.gameData.getManage().showJackPoolNorMalAction();
                if (_this4._freeGameTimesSucces) {
                  _this4._freeGameTimesSucces();
                  _this4._freeGameTimesSucces = null;
                }
              });

             case 15:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      initFreeGameWinCoin: function initFreeGameWinCoin(coinNum) {
        this.freeGame_Collectbutton.getComponent(cc.Button).interactable = true;
        this._freeGameWinCoin = coinNum;
        this.freeGame_label.getComponent(cc.Label).string = Global.FormatNumToComma(Math.floor(.1 * coinNum));
        this.freeGame_label.active = false;
        this.freeGame_Collectbutton.active = false;
        this.freeGame_startbutton.active = false;
      },
      showFreeGameWinCoin: function showFreeGameWinCoin(coinNum) {
        var _this5 = this;
        return new Promise(function(sucess, failed) {
          _this5._freeGameTimesSucces = sucess;
          _this5.showWin();
          _this5.initFreeGameWinCoin(coinNum);
          for (var i = 0; i < _this5.showWinList.length; i++) {
            var element = _this5.showWinList[i];
            element.active = false;
          }
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
          _this5.showWinList[winName.freeGame].active = true;
          var freeGameNode = cc.find("fg_tc_01", _this5.showWinList[winName.freeGame]);
          freeGameNode.opacity = 255;
          var freeGameNodeSp = freeGameNode.getComponent(sp.Skeleton);
          if (freeGameNodeSp) {
            freeGameNodeSp.setAnimation(0, "animation3", false);
            freeGameNodeSp.addAnimation(0, "animation4", true);
          }
          cc.tween(_this5.freeGame_label).delay(.2).call(function() {
            _this5.freeGame_label.active = true;
            _this5.freeGame_Collectbutton.active = true;
            _this5._startAddFreeWinCoin = true;
            Global.doRoallNumEff(_this5.freeGame_label, Math.floor(.1 * coinNum), coinNum, 2.5, function() {
              _this5._startAddFreeWinCoin = false;
            }, null, 0, true);
            cc.vv.gameData.checkAutoPlay(_this5.freeGame_Collectbutton, _this5.clossFreeGame.bind(_this5));
          }).start();
        });
      },
      initFreeGame: function initFreeGame() {
        this.freeGame_startbutton.getComponent(cc.Button).interactable = true;
        this.freeGame_label.active = false;
        this.freeGame_Collectbutton.active = false;
        this.freeGame_startbutton.active = false;
        cc.vv.gameData.checkAutoPlay(this.freeGame_startbutton, this.clossFreeGame.bind(this));
      },
      showFreeGame: function showFreeGame() {
        var _this6 = this;
        return new Promise(function(sucess, failed) {
          _this6._freeGameTimesSucces = sucess;
          _this6.showWin();
          _this6.initFreeGame();
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
          for (var i = 0; i < _this6.showWinList.length; i++) {
            var element = _this6.showWinList[i];
            element.active = false;
          }
          _this6.showWinList[winName.freeGame].active = true;
          var freeGameNode = cc.find("fg_tc_01", _this6.showWinList[winName.freeGame]);
          freeGameNode.opacity = 255;
          var freeGameNodeSp = freeGameNode.getComponent(sp.Skeleton);
          if (freeGameNodeSp) {
            freeGameNodeSp.setAnimation(0, "animation1", false);
            freeGameNodeSp.addAnimation(0, "animation2", true);
          }
          cc.tween(_this6.freeGame_label).delay(.2).call(function() {
            _this6.freeGame_startbutton.active = true;
          }).start();
        });
      },
      showFreeWinFree: function showFreeWinFree() {
        var _this7 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var i, element, freeGameNode, freeGameNodeSp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this7.showWin();
                _this7.freeGame_label.active = false;
                _this7.freeGame_Collectbutton.active = false;
                _this7.freeGame_startbutton.active = false;
                for (i = 0; i < _this7.showWinList.length; i++) {
                  element = _this7.showWinList[i];
                  element.active = false;
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_more_show);
                _this7.showWinList[winName.freeGame].active = true;
                freeGameNode = cc.find("fg_tc_01", _this7.showWinList[winName.freeGame]);
                freeGameNode.opacity = 255;
                freeGameNodeSp = freeGameNode.getComponent(sp.Skeleton);
                if (freeGameNodeSp) {
                  freeGameNodeSp.setAnimation(0, "animation5", false);
                  freeGameNodeSp.setCompleteListener(function() {
                    _this7.node.active = false;
                    sucess();
                    freeGameNodeSp.setCompleteListener(null);
                  });
                } else sucess();

               case 11:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      clossFreeGame: function clossFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var winCoinLabel, freeGameNode;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
              _this8.freeGame_Collectbutton.stopAllActions();
              _this8.freeGame_Collectbutton.getComponent(cc.Button).interactable = false;
              _this8.freeGame_startbutton.stopAllActions();
              _this8.freeGame_startbutton.getComponent(cc.Button).interactable = false;
              if (!_this8._startAddFreeWinCoin) {
                _context3.next = 12;
                break;
              }
              _this8._startAddFreeWinCoin = false;
              _this8.freeGame_label.stopAllActions();
              winCoinLabel = _this8.freeGame_label.getComponent(cc.Label);
              winCoinLabel.string = Global.FormatNumToComma(_this8._freeGameWinCoin);
              _context3.next = 12;
              return _this8.awaitTime(.2);

             case 12:
              freeGameNode = cc.find("fg_tc_01", _this8.showWinList[winName.freeGame]);
              cc.tween(freeGameNode).to(.3, {
                opacity: 0
              }).start();
              _this8.hideWin(function() {
                if (_this8._freeGameTimesSucces) {
                  _this8._freeGameTimesSucces();
                  _this8._freeGameTimesSucces = null;
                }
              });

             case 15:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      initTurnTableGame: function initTurnTableGame(bonusGame) {
        this.turnTableGame_spinButton.getComponent(cc.Button).interactable = true;
        for (var i = 0; i < bonusGame.progressData.wheelItems.length; i++) {
          var element = bonusGame.progressData.wheelItems[i];
          var item = cc.find("bg/theme198_wheel_img/result" + (i + 1), this.showWinList[winName.turnTableGame]);
          item.getComponent(cc.Label).string = Global.convertNumToShort(element.coin);
        }
        cc.vv.gameData.checkAutoPlay(this.turnTableGame_spinButton, this.spinTurnTable.bind(this));
      },
      showTurnTableGame: function showTurnTableGame(bonusGame) {
        var _this9 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var i, element, rootNode, bg, text, spin, yepian, jiantou, jiantouSp, deng, dengSp, tuichu;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                _this9._trunTableSucces = sucess;
                _this9.showWin();
                _this9.initTurnTableGame(bonusGame);
                for (i = 0; i < _this9.showWinList.length; i++) {
                  element = _this9.showWinList[i];
                  element.active = false;
                }
                rootNode = _this9.showWinList[winName.turnTableGame];
                bg = cc.find("bg", rootNode);
                bg.y = -1286;
                _context4.next = 9;
                return _this9.awaitTime(0);

               case 9:
                rootNode.active = true;
                text = cc.find("text", _this9.turnTableGame_spinButton);
                text.color = cc.color(255, 255, 255);
                spin = cc.find("spin", _this9.turnTableGame_spinButton);
                spin.active = true;
                yepian = cc.find("bg/yepian", rootNode);
                yepian.active = false;
                jiantou = cc.find("bg/jiantou", rootNode);
                jiantouSp = jiantou.getComponent(sp.Skeleton);
                jiantouSp.setAnimation(0, "animation1", true);
                deng = cc.find("bg/deng", rootNode);
                dengSp = deng.getComponent(sp.Skeleton);
                dengSp.setAnimation(0, "animation1", true);
                tuichu = cc.find("tuichu", rootNode);
                tuichu.active = false;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_in);
                cc.tween(bg).to(.2, {
                  y: -316
                }).call(function() {
                  var textAnimation = text.getComponent(cc.Animation);
                  textAnimation.play("loopScaled");
                }).start();

               case 26:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      closeTrunTableGame: function closeTrunTableGame() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var winCoinLabel, rootNode, bg;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
              _this10.turnTableGame_clossButton.stopAllActions();
              _this10.turnTableGame_clossButton.getComponent(cc.Button).interactable = false;
              if (!_this10._startAddFreeWinCoin) {
                _context5.next = 10;
                break;
              }
              _this10._startAddFreeWinCoin = false;
              _this10.turnTableGame_label.stopAllActions();
              winCoinLabel = _this10.turnTableGame_label.getComponent(cc.Label);
              winCoinLabel.string = Global.FormatNumToComma(_this10._trunTableWinCoin);
              _context5.next = 10;
              return _this10.awaitTime(.2);

             case 10:
              rootNode = _this10.showWinList[winName.turnTableGame];
              bg = cc.find("bg", rootNode);
              cc.tween(bg).to(.2, {
                y: -1286
              }).call(function() {
                var tuichu = cc.find("tuichu", rootNode);
                cc.tween(tuichu).to(.3, {
                  opacity: 0
                }).start();
                _this10.hideWin(function() {
                  if (_this10._spinWheelSucces) {
                    _this10._spinWheelSucces();
                    _this10._spinWheelSucces = null;
                  }
                });
              }).start();

             case 13:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      spinTurnTable: function spinTurnTable() {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_spin);
        this.turnTableGame_spinButton.stopAllActions();
        this.turnTableGame_spinButton.getComponent(cc.Button).interactable = false;
        var text = cc.find("text", this.turnTableGame_spinButton);
        var textAnimation = text.getComponent(cc.Animation);
        textAnimation.pause();
        text.color = cc.color(60, 60, 60);
        var spin = cc.find("spin", this.turnTableGame_spinButton);
        spin.active = false;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 1;
        cc.vv.NetManager.send(req);
      },
      onSpinTrunTable: function onSpinTrunTable(msg) {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              cc.vv.gameData.GetSlotsScript()._wheelWinCoin = msg.data.coin;
              cc.vv.gameData.setBonusGame(msg.data.bonusGame);
              _context6.next = 4;
              return _this11.spinWheel(msg.data.id, msg.data.coin);

             case 4:
              _context6.next = 6;
              return cc.vv.gameData.getJackInTheBox().showWin(msg.data.bonusGame, msg.data.idx);

             case 6:
              if (_this11._trunTableSucces) {
                _this11._trunTableSucces();
                _this11._trunTableSucces = null;
              }

             case 7:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      spinWheel: function spinWheel(result, winCoin) {
        var _this12 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            var wheel, rusltAngle;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                _this12._spinWheelSucces = sucess;
                wheel = cc.find("bg/theme198_wheel_img", _this12.showWinList[winName.turnTableGame]);
                rusltAngle = spinRuslt[result - 1] - 20;
                rusltAngle -= 1800;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_roll);
                cc.tween(wheel).to(6, {
                  angle: rusltAngle
                }, {
                  easing: "quadInOut"
                }).to(.7, {
                  angle: rusltAngle + 20
                }, {
                  easing: "quadIn"
                }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                  var yepian, yepianSp, jiantou, jiantouSp, deng, dengSp, tuichu, tuichuSpine, tuichuSpineSp;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_end);
                      wheel.angle += 1800;
                      yepian = cc.find("bg/yepian", _this12.showWinList[winName.turnTableGame]);
                      yepian.active = true;
                      yepianSp = yepian.getComponent(sp.Skeleton);
                      yepianSp.setAnimation(0, "animation", true);
                      jiantou = cc.find("bg/jiantou", _this12.showWinList[winName.turnTableGame]);
                      jiantouSp = jiantou.getComponent(sp.Skeleton);
                      jiantouSp.setAnimation(0, "animation2", true);
                      deng = cc.find("bg/deng", _this12.showWinList[winName.turnTableGame]);
                      dengSp = deng.getComponent(sp.Skeleton);
                      dengSp.setAnimation(0, "animation2", true);
                      _context7.next = 14;
                      return _this12.awaitTime(1);

                     case 14:
                      tuichu = cc.find("tuichu", _this12.showWinList[winName.turnTableGame]);
                      tuichu.active = true;
                      tuichu.opacity = 255;
                      tuichuSpine = cc.find("spine", tuichu);
                      tuichuSpineSp = tuichuSpine.getComponent(sp.Skeleton);
                      _this12.turnTableGame_clossButton.getComponent(cc.Button).interactable = true;
                      cc.vv.gameData.checkAutoPlay(_this12.turnTableGame_clossButton, _this12.closeTrunTableGame.bind(_this12));
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wheel_dialog_collect_show);
                      tuichuSpineSp.setAnimation(0, "animation3", false);
                      tuichuSpineSp.addAnimation(0, "animation4", true);
                      _this12._startAddFreeWinCoin = true;
                      _this12._trunTableWinCoin = winCoin;
                      Global.doRoallNumEff(_this12.turnTableGame_label, Math.floor(.1 * winCoin), winCoin, 2.5, function() {
                        _this12._startAddFreeWinCoin = false;
                      }, null, 0, true);

                     case 27:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }))).start();

               case 6:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      initWanFaXuanZe: function initWanFaXuanZe() {
        this.wanFaXuanZe_startButton.getComponent(cc.Button).interactable = true;
        cc.vv.gameData.checkAutoPlay(this.wanFaXuanZe_startButton, this.selectWanFa.bind(this));
      },
      showWanFaXuanZe: function showWanFaXuanZe() {
        var _this13 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
            var i, element, rootNode, wanfaxuanze_01, wanfaxuanze_01Sp, wanfaxuanze_02, wanfaxuanze_03;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                _this13._freeGameTimesSucces = sucess;
                _this13.showWin();
                _this13.initWanFaXuanZe();
                for (i = 0; i < _this13.showWinList.length; i++) {
                  element = _this13.showWinList[i];
                  element.active = false;
                }
                rootNode = _this13.showWinList[winName.wanfaxuanze];
                rootNode.active = true;
                rootNode.scale = 1;
                wanfaxuanze_01 = cc.find("wanfaxuanze_01", rootNode);
                wanfaxuanze_01.active = true;
                wanfaxuanze_01.opacity = 255;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_dialog_start_show);
                wanfaxuanze_01Sp = wanfaxuanze_01.getComponent(sp.Skeleton);
                wanfaxuanze_01Sp.setAnimation(0, "animation1", false);
                wanfaxuanze_01Sp.addAnimation(0, "animation2", true);
                wanfaxuanze_02 = cc.find("wanfaxuanze_02", rootNode);
                wanfaxuanze_02.active = false;
                wanfaxuanze_03 = cc.find("wanfaxuanze_03", rootNode);
                wanfaxuanze_03.active = false;

               case 18:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x7, _x8) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      showWanFaSelect: function showWanFaSelect() {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var rootNode, wanfaxuanze_01, wanfaxuanze_02, wanfaxuanze_02Sp, wanfaxuanze_03, wanfaxuanze_03Sp;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              rootNode = _this14.showWinList[winName.wanfaxuanze];
              wanfaxuanze_01 = cc.find("wanfaxuanze_01", rootNode);
              cc.tween(wanfaxuanze_01).to(.2, {
                opacity: 0
              }).start();
              _context10.next = 5;
              return _this14.awaitTime(.2);

             case 5:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.choose_dialog_start_show);
              wanfaxuanze_01.active = false;
              wanfaxuanze_02 = cc.find("wanfaxuanze_02", rootNode);
              wanfaxuanze_02.active = true;
              wanfaxuanze_02Sp = wanfaxuanze_02.getComponent(sp.Skeleton);
              wanfaxuanze_02Sp.setAnimation(0, "animation1", false);
              wanfaxuanze_02Sp.addAnimation(0, "animation2", true);
              wanfaxuanze_03 = cc.find("wanfaxuanze_03", rootNode);
              wanfaxuanze_03.active = true;
              wanfaxuanze_03Sp = wanfaxuanze_03.getComponent(sp.Skeleton);
              wanfaxuanze_03Sp.setAnimation(0, "animation1", false);
              wanfaxuanze_03Sp.addAnimation(0, "animation2", true);
              _this14.wanFaXuanZe_selectButton1.getComponent(cc.Button).interactable = true;
              _this14.wanFaXuanZe_selectButton2.getComponent(cc.Button).interactable = true;
              _this14.wanFaXuanZe_selectButton3.getComponent(cc.Button).interactable = true;
              cc.vv.gameData.checkAutoPlay(_this14.wanFaXuanZe_selectButton1, _this14.selectResult1.bind(_this14));

             case 21:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      selectWanFa: function selectWanFa() {
        this.wanFaXuanZe_startButton.stopAllActions();
        this.wanFaXuanZe_startButton.getComponent(cc.Button).interactable = false;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
        this.showWanFaSelect();
      },
      selectResult1: function selectResult1() {
        this.wanFaXuanZe_selectButton1.stopAllActions();
        this.wanFaXuanZe_selectButton1.getComponent(cc.Button).interactable = false;
        this.wanFaXuanZe_selectButton2.getComponent(cc.Button).interactable = false;
        this.wanFaXuanZe_selectButton3.getComponent(cc.Button).interactable = false;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.elf_choose);
        var rootNode = this.showWinList[winName.wanfaxuanze];
        var wanfaxuanze_03 = cc.find("wanfaxuanze_03", rootNode);
        var wanfaxuanze_03Sp = wanfaxuanze_03.getComponent(sp.Skeleton);
        wanfaxuanze_03Sp.setAnimation(0, "animation1_1", false);
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 2;
        req.data.choiceId = 1;
        cc.vv.NetManager.send(req);
      },
      selectResult2: function selectResult2() {
        this.wanFaXuanZe_selectButton1.stopAllActions();
        this.wanFaXuanZe_selectButton1.getComponent(cc.Button).interactable = false;
        this.wanFaXuanZe_selectButton2.getComponent(cc.Button).interactable = false;
        this.wanFaXuanZe_selectButton3.getComponent(cc.Button).interactable = false;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.elf_choose);
        var rootNode = this.showWinList[winName.wanfaxuanze];
        var wanfaxuanze_03 = cc.find("wanfaxuanze_03", rootNode);
        var wanfaxuanze_03Sp = wanfaxuanze_03.getComponent(sp.Skeleton);
        wanfaxuanze_03Sp.setAnimation(0, "animation2_1", false);
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 2;
        req.data.choiceId = 2;
        cc.vv.NetManager.send(req);
      },
      selectResult3: function selectResult3() {
        this.wanFaXuanZe_selectButton1.stopAllActions();
        this.wanFaXuanZe_selectButton1.getComponent(cc.Button).interactable = false;
        this.wanFaXuanZe_selectButton2.getComponent(cc.Button).interactable = false;
        this.wanFaXuanZe_selectButton3.getComponent(cc.Button).interactable = false;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.elf_choose);
        var rootNode = this.showWinList[winName.wanfaxuanze];
        var wanfaxuanze_03 = cc.find("wanfaxuanze_03", rootNode);
        var wanfaxuanze_03Sp = wanfaxuanze_03.getComponent(sp.Skeleton);
        wanfaxuanze_03Sp.setAnimation(0, "animation3_1", false);
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 2;
        req.data.choiceId = 3;
        cc.vv.NetManager.send(req);
      },
      onSelectWanFa: function onSelectWanFa(msg) {
        var _this15 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              cc.vv.gameData.getJackInTheBox().setGameData(msg.data);
              _context11.next = 3;
              return _this15.awaitTime(1);

             case 3:
              _this15.closeWanFaXuanZe();

             case 4:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      closeWanFaXuanZe: function closeWanFaXuanZe() {
        var _this16 = this;
        var rootNode = this.showWinList[winName.wanfaxuanze];
        cc.tween(rootNode).to(.3, {
          scale: .1
        }).start();
        this.hideWin(function() {
          if (_this16._freeGameTimesSucces) {
            _this16._freeGameTimesSucces();
            _this16._freeGameTimesSucces = null;
          }
        });
      },
      showRound: function showRound(num) {
        var _this17 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(sucess, failed) {
            var i, element, rootNode, spine, spineSp;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.round_dialog_start_show);
                _this17.showWin();
                for (i = 0; i < _this17.showWinList.length; i++) {
                  element = _this17.showWinList[i];
                  element.active = false;
                }
                rootNode = _this17.showWinList[winName.showRound];
                rootNode.active = true;
                spine = cc.find("spine", rootNode);
                spineSp = spine.getComponent(sp.Skeleton);
                spineSp.setAnimation(0, "animation_" + num, false);
                spineSp.setCompleteListener(function() {
                  _this17.hideWin();
                  spineSp.setCompleteListener(null);
                  sucess();
                });

               case 9:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x9, _x10) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      initJackInBoxWinCoin: function initJackInBoxWinCoin(coinNum) {
        this.jackInBoxWinCoin_collect.getComponent(cc.Button).interactable = true;
        this._jackInBoxWinCoin = coinNum;
        this.jackInBoxWinCoin_label.getComponent(cc.Label).string = Global.FormatNumToComma(Math.floor(.1 * coinNum));
        cc.vv.gameData.checkAutoPlay(this.jackInBoxWinCoin_collect, this.closeJackInBoxWinCoin.bind(this));
      },
      showJackInBoxWinCoin: function showJackInBoxWinCoin(coinNum) {
        var _this18 = this;
        return new Promise(function(sucess, failed) {
          _this18._freeGameTimesSucces = sucess;
          _this18.showWin();
          _this18.initJackInBoxWinCoin(coinNum);
          for (var i = 0; i < _this18.showWinList.length; i++) {
            var element = _this18.showWinList[i];
            element.active = false;
          }
          _this18.showWinList[winName.jackInBoxWinCoin].active = true;
          _this18.showWinList[winName.jackInBoxWinCoin].scale = 1;
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_dialog_collect_show);
          var spine = cc.find("spine", _this18.showWinList[winName.jackInBoxWinCoin]);
          var spineSp = spine.getComponent(sp.Skeleton);
          if (spineSp) {
            spineSp.setAnimation(0, "animation1", false);
            spineSp.addAnimation(0, "animation2", true);
          }
          _this18._startAddFreeWinCoin = true;
          Global.doRoallNumEff(_this18.jackInBoxWinCoin_label, Math.floor(.1 * coinNum), coinNum, 2.5, function() {
            _this18._startAddFreeWinCoin = false;
          }, null, 0, true);
        });
      },
      closeJackInBoxWinCoin: function closeJackInBoxWinCoin() {
        var _this19 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          var winCoinLabel;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.btn_click);
              _this19.jackInBoxWinCoin_collect.stopAllActions();
              _this19.jackInBoxWinCoin_collect.getComponent(cc.Button).interactable = false;
              if (!_this19._startAddFreeWinCoin) {
                _context13.next = 10;
                break;
              }
              _this19._startAddFreeWinCoin = false;
              _this19.jackInBoxWinCoin_label.stopAllActions();
              winCoinLabel = _this19.jackInBoxWinCoin_label.getComponent(cc.Label);
              winCoinLabel.string = Global.FormatNumToComma(_this19._jackInBoxWinCoin);
              _context13.next = 10;
              return _this19.awaitTime(.2);

             case 10:
              cc.tween(_this19.showWinList[winName.jackInBoxWinCoin]).to(.3, {
                scale: .1
              }).start();
              _this19.hideWin(function() {
                if (_this19._freeGameTimesSucces) {
                  _this19._freeGameTimesSucces();
                  _this19._freeGameTimesSucces = null;
                }
              });

             case 12:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Clown_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd466/cbrxDOafD1Q+ty/5x", "Clown_PrizePool");
    "use strict";
    var jackpotNames = [ "Mini", "Minor", "Major", "Grand", "MAXI" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {
        _nowUpdatePool: 0
      },
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        var jpNodeName = jackpotNames[poolType];
        this.updataJackPoolLock(poolType, bLock);
        var type = cc.vv.gameData.getGameCfg().jackpotType[poolType + 1] - 1;
        if (jpNodeName) {
          var safeNode = cc.find("Canvas/safe_node");
          var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
          if (jpNode) {
            var targetJpNode = cc.find("prizePool_" + jpNodeName, jpNode.node.parent);
            var iconNode = cc.find("icon_" + jpNodeName, jpNode.node.parent);
            if (targetJpNode && iconNode) {
              var lock_node = iconNode.getChildByName("lockbg");
              var lockEffect = cc.find("lockEffect", targetJpNode);
              var lockEffectSp = lockEffect.getComponent(sp.Skeleton);
              if (lock_node) if (bLock) {
                lock_node.active = true;
                if (bInit) lockEffectSp.setAnimation(0, "animation" + (5 - type) + "_2", true); else {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_lock);
                  lockEffectSp.setAnimation(0, "animation" + (5 - type) + "_1", false);
                  lockEffectSp.addAnimation(0, "animation" + (5 - type) + "_2", true);
                }
              } else {
                lock_node.active = false;
                if (bInit) {
                  lockEffectSp.setAnimation(0, "animation" + (5 - type) + "_1", false);
                  lockEffectSp.clearTracks();
                } else {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_unlock);
                  lockEffectSp.setAnimation(0, "animation" + (5 - type) + "_3", false);
                }
              }
            }
          }
        }
      },
      updataJackPoolLock: function updataJackPoolLock(index, isLock) {
        var tempIndex = cc.vv.gameData.getGameCfg().jackpotType[index + 1] - 1;
        if (isLock) {
          if (this._nowUpdatePool < tempIndex) return;
          this._nowUpdatePool = tempIndex;
        } else {
          if (this._nowUpdatePool > tempIndex) return;
          this._nowUpdatePool = tempIndex;
        }
        var safeNode = cc.find("Canvas/safe_node");
        var jpNode = safeNode.getComponentInChildren("LMSlotMachine_PrizePool");
        if (jpNode) for (var i = 0; i < jackpotNames.length; i++) {
          var jpNodeName = jackpotNames[i];
          var iconNode = cc.find("icon_" + jpNodeName, jpNode.node.parent);
          if (iconNode) {
            var lock_node = iconNode.getChildByName("lockbg");
            var tips = cc.find("tips", iconNode);
            if (lock_node) if (index === i) if (isLock) {
              lock_node.active = true;
              cc.find("lock", tips).active = true;
              cc.find("unlock", tips).active = false;
              tips.scale = 0;
              cc.tween(tips).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).delay(.5).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();
            } else {
              lock_node.active = false;
              cc.find("lock", tips).active = false;
              cc.find("unlock", tips).active = true;
              tips.scale = 0;
              cc.tween(tips).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).delay(.5).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();
            } else {
              tips.stopAllActions();
              tips.scale = 0;
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  Clown_RandomWildsGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc829flpRNLM5kkqBjyUNb/", "Clown_RandomWildsGame");
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
        wild: {
          default: null,
          type: cc.Node
        },
        _wildStartY: 0,
        _result: null,
        _wildList: []
      },
      onLoad: function onLoad() {
        this._wildStartY = this.wild.y;
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showGame: function showGame(randIdxs, randCards) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, falied) {
            var i, element, cfg, slotsScript, _i, _element, symbol, position, finalPosition, tempWild;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this2.node.active = true;
                for (i = 0; i < _this2._wildList.length; i++) {
                  element = _this2._wildList[i];
                  element.parent = null;
                }
                cfg = cc.vv.gameData.getGameCfg();
                slotsScript = cc.vv.gameData.GetSlotsScript();
                _i = 0;

               case 5:
                if (!(_i < randIdxs.length)) {
                  _context.next = 25;
                  break;
                }
                _element = randIdxs[_i];
                symbol = slotsScript.GetSymbolByIdx(_element);
                position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                finalPosition = cc.vv.gameData.getRandomWildsGame().node.convertToNodeSpaceAR(position);
                tempWild = cc.instantiate(_this2.wild);
                _this2._wildList.push(tempWild);
                tempWild.active = true;
                tempWild.x = finalPosition.x;
                tempWild.y = _this2._wildStartY;
                tempWild.parent = _this2.node;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild_appear);
                cc.tween(tempWild).to(1, {
                  position: finalPosition
                }).start();
                _context.next = 20;
                return _this2.awaitTime(1);

               case 20:
                _this2.showEndAni(tempWild, randCards[_i]);
                symbol.ShowById(randCards[_i]);

               case 22:
                _i++;
                _context.next = 5;
                break;

               case 25:
                _context.next = 27;
                return _this2.awaitTime(1);

               case 27:
                sucess();

               case 28:
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
      showEndAni: function showEndAni(wild, destIdx) {
        var wildtuoweiNode = cc.find("wildtuowei", wild);
        wildtuoweiNode.active = false;
        var wildNode = cc.find("wild", wild);
        wildNode.active = true;
        switch (destIdx) {
         case 2:
          var wildShow = cc.find("wild", wildNode);
          wildShow && (wildShow.active = true);
          break;

         case 3:
          var _wildShow = cc.find("wild2", wildNode);
          _wildShow && (_wildShow.active = true);
          break;

         case 4:
          var _wildShow2 = cc.find("wild3", wildNode);
          _wildShow2 && (_wildShow2.active = true);
        }
        var node = cc.find("bouns", wild);
        node.active = true;
        var nodeSp = node.getComponent(sp.Skeleton);
        nodeSp.setAnimation(0, "animation", false);
        nodeSp.setCompleteListener(function() {
          nodeSp.setCompleteListener(null);
          node.active = false;
        });
      },
      hideGame: function hideGame() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  Clown_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22bb8fB3MJMCY4OVQQ/YRFg", "Clown_Slots");
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
        _node_freeGame: null,
        _freeGameFinalWays: [],
        _isInFree: false,
        _colFree: 0,
        _rowFree: 0,
        _reelsFree: [],
        _freeSlotsNode: null,
        _reelsFrame: null,
        _showQiQiuJiLi: false,
        _jackInTheBoxWinCoin: 0,
        _balloonGameWinCoin: 0,
        _wheelWinCoin: 0
      },
      Init: function Init() {
        var _this = this;
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this._colFree = this._cfg.col_free;
        this._rowFree = this._cfg.row_free;
        this.createReels(this._col, this._row);
        this.createFreeReels(this._colFree, this._rowFree);
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        this.scheduleOnce(function() {
          _this.ReconnectShow();
        }, 0);
      },
      onLoad: function onLoad() {
        this._topAniNode = cc.find("reels/top_ani", this.node);
        this._freeSlotsNode = cc.find("slotsfree", this.node.parent);
        this._reelsFrame = cc.find("reels_frame", this.node.parent);
        this._freeSlotsNode.active = false;
      },
      RegisterEvent: function RegisterEvent() {},
      createFreeReels: function createFreeReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        this._freeSlotsNode.active = true;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this._freeSlotsNode);
          var scp = node.addComponent(reelCmp);
          scp.Init(i, row, cc.find("reels/top_ani", this._freeSlotsNode));
          this._reelsFree.push(scp);
        }
        this._freeSlotsNode.active = false;
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(sucess, failed) {
          _this2.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
        this.SetBackgroundResult(msg.backgrouds, msg.balloonGame);
        this.SetJackpotJl(msg.backgrouds);
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        this._bottomScript.ShowBtnsByState("moveing_1");
        this._showQiQiuJiLi = false;
        this._stopTime = -1;
        var reels = this._reels;
        this._isInFree && (reels = this._reelsFree);
        for (var i = 0; i < reels.length; i++) {
          var item = reels[i];
          var reelStopInterv = 0;
          item.StopMove(reelStopInterv);
          item.StopMoveRightNow();
        }
      },
      SetBackgroundResult: function SetBackgroundResult(cards, balloonGame) {
        if (!cards) return;
        if (this._isInFree) {
          var acRow = cards.length / this._colFree;
          var reelResults = [];
          for (var i = 0; i < cards.length; i++) {
            var row = Math.floor(i / acRow);
            var col = i % this._colFree;
            if (this._cfg.symbol[cards[i]]) {
              var res = {};
              res.type = cards[i];
              reelResults[col] || (reelResults[col] = []);
              reelResults[col].unshift(res);
            }
          }
          for (var _i = 0; _i < this._reelsFree.length; _i++) {
            var item = this._reelsFree[_i];
            var reelRes = reelResults[_i];
            item.SetBackResult(reelRes);
          }
        } else {
          var _acRow = cards.length / this._col;
          var _reelResults = [];
          for (var _i2 = 0; _i2 < cards.length; _i2++) {
            var _row = Math.floor(_i2 / _acRow);
            var _col = _i2 % this._col;
            if (this._cfg.symbol[cards[_i2]]) {
              var _res = {};
              _res.type = cards[_i2];
              _reelResults[_col] || (_reelResults[_col] = []);
              _reelResults[_col].unshift(_res);
            }
          }
          for (var _i3 = 0; _i3 < this._reels.length; _i3++) {
            var _item = this._reels[_i3];
            var _reelRes = _reelResults[_i3];
            _item.SetBackResult(_reelRes);
          }
        }
        balloonGame && (this._showQiQiuJiLi = true);
      },
      findJackPotBack: function findJackPotBack(arr) {
        var jinSeBeiJinNum = 0;
        for (var i = 0; i < arr.length; i++) {
          var element = arr[i];
          0 == jinSeBeiJinNum ? 1 === element && jinSeBeiJinNum++ : 1 === element && element === arr[i - 1] ? jinSeBeiJinNum++ : jinSeBeiJinNum = 0;
        }
        return jinSeBeiJinNum >= 4;
      },
      SetJackpotJl: function SetJackpotJl(cards) {
        if (!cards) return;
        var reelResults = [];
        var tempcol = this._col;
        var reels = this._reels;
        if (this._isInFree) {
          reels = this._reelsFree;
          tempcol = this._colFree;
        }
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % tempcol;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        for (var _i4 = 1; _i4 < reelResults.length; _i4++) {
          var item = reels[_i4];
          item._showJackpotJl = false;
          var tempSHowJack = true;
          for (var j = 0; j < _i4; j++) {
            var reelRes = reelResults[j];
            if (!this.findJackPotBack(reelRes)) {
              tempSHowJack = false;
              break;
            }
          }
          item._showJackpotJl = tempSHowJack;
        }
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        if (this._isInFree) {
          var acRow = cards.length / this._colFree;
          var reelResults = [];
          for (var i = 0; i < cards.length; i++) {
            var row = Math.floor(i / acRow);
            var col = i % this._colFree;
            if (this._cfg.symbol[cards[i]]) {
              var res = {};
              res.sid = cards[i];
              reelResults[col] || (reelResults[col] = []);
              reelResults[col].unshift(res);
            }
          }
          for (var _i5 = 0; _i5 < this._reelsFree.length; _i5++) {
            var item = this._reelsFree[_i5];
            var reelRes = reelResults[_i5];
            item.SetResult(reelRes);
          }
        } else {
          var _acRow2 = cards.length / this._col;
          var _reelResults2 = [];
          for (var _i6 = 0; _i6 < cards.length; _i6++) {
            var _row2 = Math.floor(_i6 / _acRow2);
            var _col2 = _i6 % this._col;
            if (this._cfg.symbol[cards[_i6]]) {
              var _res2 = {};
              _res2.sid = cards[_i6];
              _reelResults2[_col2] || (_reelResults2[_col2] = []);
              _reelResults2[_col2].unshift(_res2);
            }
          }
          for (var _i7 = 0; _i7 < this._reels.length; _i7++) {
            var _item2 = this._reels[_i7];
            var _reelRes2 = _reelResults2[_i7];
            _item2.SetResult(_reelRes2);
          }
        }
      },
      changeCardsValArr: function changeCardsValArr(cards) {
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var element = cards[i] - 1;
          var row = Math.floor(element / this._col);
          var col = element % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(element + 1);
        }
        return reelResults;
      },
      changeCardsArr: function changeCardsArr(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(cards[i]);
          }
        }
        return reelResults;
      },
      ShowWinCoin: function ShowWinCoin(nAddWin, nTotalWin, bUpdateBalance) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this3.ShowBottomWin(nAddWin, nTotalWin, bUpdateBalance, sucess);

               case 1:
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
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var bonusGame, jiliNode, nWin, nTotal, i, key, symbol, _i8, _key, _symbol;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this4._bottomScript.ShowBtnsByState("moveing_1");
              bonusGame = _this4._gameInfo.bonusGame;
              if (!bonusGame) {
                _context2.next = 9;
                break;
              }
              cc.vv.gameData.setBonusGame(bonusGame);
              _context2.next = 6;
              return cc.vv.gameData.getManage().TrunTableTriggerBarVal(bonusGame);

             case 6:
              if (!(1 === bonusGame.state)) {
                _context2.next = 9;
                break;
              }
              _context2.next = 9;
              return cc.vv.gameData.getPopWinManage().showTurnTableGame(bonusGame);

             case 9:
              if (!_this4._gameInfo.balloonGame) {
                _context2.next = 20;
                break;
              }
              jiliNode = cc.find("reels/bousn_jl", _this4.node);
              _this4._isInFree && (jiliNode = cc.find("reels/bousn_jl", _this4._freeSlotsNode));
              jiliNode.active = false;
              Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.anticipation3);
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
              cc.vv.gameData.getManage().showHenDuoQQ();
              _context2.next = 18;
              return _this4.showQiQiuAnimation(_this4._gameInfo.balloonGame.triggerIdxs);

             case 18:
              _context2.next = 20;
              return cc.vv.gameData.getManage().showQiQiuGou(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime());

             case 20:
              if (!_this4._gameInfo.jackpot) {
                _context2.next = 23;
                break;
              }
              _context2.next = 23;
              return cc.vv.gameData.getManage().setJackpot(_this4._gameInfo.jackpot);

             case 23:
              _this4.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin() + _this4._jackInTheBoxWinCoin + _this4._balloonGameWinCoin + _this4._wheelWinCoin;
              nTotal = nWin;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) nTotal = cc.vv.gameData.GetGameTotalFreeWin(); else if (_this4._gameInfo.freeGameBonus && !_this4._gameInfo.freeGameBonus.isEnd) {
                nWin = _this4._gameInfo.freeGameBonus.winCoin;
                nTotal = nWin;
              }
              cc.vv.gameData.AddCoin(_this4._jackInTheBoxWinCoin + _this4._balloonGameWinCoin + _this4._wheelWinCoin);
              _this4._jackInTheBoxWinCoin = 0;
              _this4._balloonGameWinCoin = 0;
              _this4._wheelWinCoin = 0;
              _context2.next = 33;
              return _this4.ShowWinCoin(nWin, nTotal, true);

             case 33:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context2.next = 45;
                break;
              }
              if (!_this4._gameInfo.freeResult) {
                _context2.next = 43;
                break;
              }
              if (!(_this4._gameInfo.freeResult.freeInfo && _this4._gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context2.next = 43;
                break;
              }
              for (i = 0; i < _this4._gameInfo.freeResult.freeInfo.scatterIdx.length; i++) {
                key = _this4._gameInfo.freeResult.freeInfo.scatterIdx[i];
                symbol = _this4.GetSymbolByIdx(key);
                symbol.playWinAnimation();
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
              if (!(_this4._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context2.next = 43;
                break;
              }
              _context2.next = 41;
              return _this4.awaitTime(2);

             case 41:
              _context2.next = 43;
              return _this4.CheckFreeEnterFreeGame();

             case 43:
              _context2.next = 54;
              break;

             case 45:
              if (!_this4._gameInfo.freeResult) {
                _context2.next = 54;
                break;
              }
              if (!(_this4._gameInfo.freeResult.freeInfo && _this4._gameInfo.freeResult.freeInfo.scatterIdx)) {
                _context2.next = 54;
                break;
              }
              for (_i8 = 0; _i8 < _this4._gameInfo.freeResult.freeInfo.scatterIdx.length; _i8++) {
                _key = _this4._gameInfo.freeResult.freeInfo.scatterIdx[_i8];
                _symbol = _this4.GetSymbolByIdx(_key);
                _symbol.playWinAnimation();
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
              if (!(_this4._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                _context2.next = 54;
                break;
              }
              _context2.next = 52;
              return _this4.awaitTime(2);

             case 52:
              _context2.next = 54;
              return _this4.CheckEnterFreeGame();

             case 54:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context2.next = 57;
                break;
              }
              _context2.next = 57;
              return _this4.CheckExitFreeGame();

             case 57:
              _this4.CanDoNextRound();

             case 58:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      ReconnectShow: function ReconnectShow() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var rest, nTotal, balloonGame, bonusGame, nWin, _nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this5.ShowGameview(true);
                nTotal = cc.vv.gameData.GetTotalFreeWin();
                _this5._bottomScript.SetWin(nTotal);
              } else _this5.ShowGameview(false);
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              balloonGame = cc.vv.gameData.getBalloonGame();
              balloonGame && _this5.recaverySlotsData(balloonGame.cards, balloonGame.backgrouds, rest);
              bonusGame = cc.vv.gameData.getBonusGame();
              if (!bonusGame) {
                _context3.next = 15;
                break;
              }
              if (!(1 === bonusGame.state)) {
                _context3.next = 12;
                break;
              }
              _context3.next = 10;
              return cc.vv.gameData.getPopWinManage().showTurnTableGame(bonusGame);

             case 10:
              _context3.next = 15;
              break;

             case 12:
              if (!(2 === bonusGame.state)) {
                _context3.next = 15;
                break;
              }
              _context3.next = 15;
              return cc.vv.gameData.getJackInTheBox().showWin(bonusGame);

             case 15:
              if (!balloonGame) {
                _context3.next = 18;
                break;
              }
              _context3.next = 18;
              return cc.vv.gameData.getManage().recaveryQiQiuAnimation(balloonGame.triggerIdxs);

             case 18:
              nWin = _this5._jackInTheBoxWinCoin + _this5._balloonGameWinCoin + _this5._wheelWinCoin;
              if (!(nWin > 0)) {
                _context3.next = 28;
                break;
              }
              _nTotal = nWin;
              rest && (_nTotal += cc.vv.gameData.GetTotalFreeWin());
              _this5._jackInTheBoxWinCoin = 0;
              _this5._balloonGameWinCoin = 0;
              _this5._wheelWinCoin = 0;
              cc.vv.gameData.AddCoin(nWin);
              _context3.next = 28;
              return _this5.ShowWinCoin(nWin, _nTotal, true);

             case 28:
              _this5._bottomScript.ShowBtnsByState("idle");
              rest && _this5.CanDoNextRound();

             case 30:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
                  var nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      _context4.next = 4;
                      return cc.vv.gameData.getPopWinManage().showFreeGameWinCoin(nWin);

                     case 4:
                      _context4.next = 6;
                      return cc.vv.gameData.getManage().setFreeGame(false);

                     case 6:
                      _context4.next = 8;
                      return _this6.ShowWinCoin(nWin, nTotal, true);

                     case 8:
                      sucess();

                     case 9:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x3, _x4) {
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
      CheckFreeEnterFreeGame: function CheckFreeEnterFreeGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _context6.next = 2;
                      return cc.vv.gameData.getPopWinManage().showFreeWinFree();

                     case 2:
                      sucess();

                     case 3:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _context8.next = 2;
                      return cc.vv.gameData.getPopWinManage().showFreeGame();

                     case 2:
                      _context8.next = 4;
                      return cc.vv.gameData.getManage().setFreeGame(true);

                     case 4:
                      sucess();

                     case 5:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x7, _x8) {
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
      ShowGameview: function ShowGameview(bFree) {
        this._isInFree = bFree;
        cc.vv.gameData.getManage().ShowGameview(bFree);
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          this._freeSlotsNode.active = true;
          cc.find("reels", this.node).active = false;
          var reelsFrameSp = this._reelsFrame.getComponent(sp.Skeleton);
          reelsFrameSp.setAnimation(0, "animation3", true);
          Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
        } else {
          this._bottomScript.ShowFreeModel(false);
          this._freeSlotsNode.active = false;
          cc.find("reels", this.node).active = true;
          var _reelsFrameSp = this._reelsFrame.getComponent(sp.Skeleton);
          _reelsFrameSp.setAnimation(0, "animation1", true);
          Global.SlotsSoundMgr.stopBgm();
        }
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
      },
      recaverySlotsData: function recaverySlotsData(cards, backGroud, isFreeGame) {
        this.SetSlotsResult(cards);
        this.SetBackgroundResult(backGroud);
        if (this._isInFree) for (var i = 0; i < this._reelsFree.length; i++) {
          var element = this._reelsFree[i];
          element.recaveryReel();
        } else for (var _i9 = 0; _i9 < this._reels.length; _i9++) {
          var _element = this._reels[_i9];
          _element.recaveryReel();
        }
        cc.vv.gameData.getManage().recaveryQiQiuGou(isFreeGame);
      },
      StartMove: function StartMove() {
        Global.SlotsSoundMgr.playNormalBgm();
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this._isInFree ? this.MoveReels(this._reelsFree) : this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this.hideBonusNode();
      },
      hideBonusNode: function hideBonusNode() {
        cc.vv.gameData.getJackpotReelGame().hideGame();
        cc.vv.gameData.getStackedWildsGame().hideGame();
        cc.vv.gameData.getRandomWildsGame().hideGame();
        this._showQiQiuJiLi = false;
        this.clearQiQiuAnimation();
      },
      showFreeGameSlots: function showFreeGameSlots() {
        var _this7 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
            var reelsFrameSp;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                _this7.ShowGameview(true);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fg_up);
                reelsFrameSp = _this7._reelsFrame.getComponent(sp.Skeleton);
                reelsFrameSp.setAnimation(0, "animation2", false);
                reelsFrameSp.addAnimation(0, "animation3", true);
                _this7._freeSlotsNode.active = true;
                _this7._freeSlotsNode.height = 350;
                cc.tween(_this7._freeSlotsNode).to(.65, {
                  height: 700
                }).start();
                cc.vv.gameData.getManage().showTurntableTriggerBar(true);
                _context10.next = 11;
                return _this7.awaitTime(.7);

               case 11:
                sucess();

               case 12:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      hideFreeGameSlots: function hideFreeGameSlots() {
        var _this8 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            var reelsFrameSp;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fg_up);
                reelsFrameSp = _this8._reelsFrame.getComponent(sp.Skeleton);
                reelsFrameSp.setAnimation(0, "animation4", false);
                reelsFrameSp.addAnimation(0, "animation1", true);
                _this8._freeSlotsNode.active = true;
                _this8._freeSlotsNode.height = 700;
                cc.tween(_this8._freeSlotsNode).to(.65, {
                  height: 350
                }).start();
                cc.vv.gameData.getManage().showTurntableTriggerBar(false);
                _context11.next = 10;
                return _this8.awaitTime(.65);

               case 10:
                _this8._freeSlotsNode.active = false;
                _this8.ShowGameview(false);
                _this8.hideBonusNode();
                sucess();

               case 14:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        var reels = this._reels;
        this._isInFree && (reels = this._reelsFree);
        if (!this._bStopRightnow) {
          var isPlayAnit = false;
          var showJackpotJl = false;
          for (var i = 0; i < reels.length; i++) {
            var idx = reels[i].GetReelIdx();
            if (idx == colIdx + 1) {
              isPlayAnit = reels[i].playAntiAnimation();
              showJackpotJl = reels[i]._showJackpotJl;
              reels[i].ShowJackpotJlEffect(showJackpotJl);
            }
            if (idx > colIdx && (isPlayAnit || showJackpotJl)) {
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              reels[i].AddDelayTime(nAddSpeedTime);
            }
          }
        }
        if (3 === colIdx && this._showQiQiuJiLi) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.anticipation3);
          var jiliNode = cc.find("reels/bousn_jl", this.node);
          this._isInFree && (jiliNode = cc.find("reels/bousn_jl", this._freeSlotsNode));
          jiliNode.active = true;
          var _nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
          reels[colIdx + 1].AddDelayTime(_nAddSpeedTime);
        }
      },
      showQiQiuAnimation: function showQiQiuAnimation(triggerIdxs) {
        var _this9 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(sucess, failed) {
            var index, symbol, position, reel, mask, finalPosition, qiqiu, qiqiuSp, i, element, _symbol2, _i10, _element2, _symbol3;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                if (!(4 === triggerIdxs.length)) {
                  _context12.next = 19;
                  break;
                }
                index = triggerIdxs[2];
                symbol = _this9.GetSymbolByIdx(index);
                position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0 + _this9._cfg.symbolSize.height / 2));
                reel = _this9._reels[4];
                _this9._isInFree && (reel = _this9._reelsFree[4]);
                mask = cc.find("mask", reel.node);
                finalPosition = mask.convertToNodeSpaceAR(position);
                qiqiu = cc.find("qiqiu", mask);
                qiqiu.active = true;
                qiqiuSp = qiqiu.getComponent(sp.Skeleton);
                qiqiuSp.setAnimation(0, "animation3", false);
                qiqiuSp.addAnimation(0, "animation2", true);
                qiqiu.y = finalPosition.y;
                for (i = 0; i < triggerIdxs.length; i++) {
                  element = triggerIdxs[i];
                  _symbol2 = _this9.GetSymbolByIdx(element);
                  _symbol2.setSymbolShow(false);
                  _symbol2.setSymbolBgShow(false);
                }
                _context12.next = 17;
                return _this9.awaitTime(2);

               case 17:
                for (_i10 = 0; _i10 < triggerIdxs.length; _i10++) {
                  _element2 = triggerIdxs[_i10];
                  _symbol3 = _this9.GetSymbolByIdx(_element2);
                  _symbol3.setSymbolShow(true);
                }
                sucess();

               case 19:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x13, _x14) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      clearQiQiuAnimation: function clearQiQiuAnimation() {
        var reel = this._reels[4];
        this._isInFree && (reel = this._reelsFree[4]);
        var mask = cc.find("mask", reel.node);
        var qiqiu = cc.find("qiqiu", mask);
        qiqiu.active = false;
        for (var i = 0; i < reel._symbols.length; i++) {
          var symbol = reel._symbols[i];
          symbol.setSymbolShow(true);
          symbol.setSymbolBgShow(true);
        }
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this._gameInfo) {
            this._bottomScript.ShowBtnsByState("moveing_2");
            var reels = this._reels;
            this._isInFree && (reels = this._reelsFree);
            for (var i = 0; i < reels.length; i++) {
              var item = reels[i];
              var reelStopInterv = this.GetReelStopInter(i);
              item.StopMove(reelStopInterv);
            }
          } else this._stopTime = dt;
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        if (!this._cfg.reelStateInfo) return;
        var reels = this._reels;
        var tempcol = this._col;
        if (this._isInFree) {
          reels = this._reelsFree;
          tempcol = this._colFree;
        }
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % tempcol;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
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
            for (var _i11 = 0; _i11 < reelResults.length; _i11++) {
              var item = reels[_i11];
              var reelRes = reelResults[_i11];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i11] > 0 && (stateInfo.isAnt = true);
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
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        if (this._isInFree) {
          var col = (idx - 1) % this._colFree;
          var row = this._rowFree - Math.floor((idx - 1) / this._colFree) - 1;
          return this._reelsFree[col].GetSymbolByRow(row);
        }
        var _col3 = (idx - 1) % this._col;
        var _row3 = this._row - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[_col3].GetSymbolByRow(_row3);
      },
      ShowSymbolTopAni: function ShowSymbolTopAni(nRow, nCol) {
        var reels = this._reels;
        this._isInFree && (reels = this._reelsFree);
        if (this._topAniNode) {
          var cfg = cc.vv.gameData.getGameCfg();
          var symScp = cfg.scripts.Symbols;
          var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", nRow, nCol), this._topAniNode);
          if (showNode) {
            showNode.active = true;
            return showNode.getComponent(symScp);
          }
          var reel = reels[nCol];
          var symbol = reel.GetSymbolByRow(nRow);
          if (symbol) {
            var wordPos = symbol.node.convertToWorldSpaceAR(cc.v2(0));
            var newNode = cc.instantiate(symbol.node);
            newNode.parent = this._topAniNode;
            newNode.name = cc.js.formatStr("top_symbol_%s_%s", nRow, nCol);
            newNode.position = this._topAniNode.convertToNodeSpaceAR(wordPos);
            return newNode.getComponent(symScp);
          }
        }
      },
      ChangeRowColToIdx: function ChangeRowColToIdx(cards, nRow, nCol) {
        var col = this._col;
        this._isInFree && (col = this._colFree);
        var acRow = cards.length / col;
        var idx = col * (acRow - nRow - 1) + nCol;
        return idx;
      },
      findAllJinHeZi: function findAllJinHeZi() {
        var ret = [];
        if (this._isInFree) for (var i = 0; i < this._reelsFree.length; i++) {
          var reel = this._reelsFree[i];
          for (var j = 0; j < reel._symbols.length - 1; j++) {
            var symbol = reel._symbols[j];
            5 === symbol._id && ret.push(symbol);
          }
        } else for (var _i12 = 0; _i12 < this._reels.length; _i12++) {
          var _reel = this._reels[_i12];
          for (var _j = 0; _j < _reel._symbols.length - 1; _j++) {
            var _symbol4 = _reel._symbols[_j];
            5 === _symbol4._id && ret.push(_symbol4);
          }
        }
        return ret;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Clown_jackInTheBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3dbacyvgzxCuYyax2EeAOjH", "Clown_jackInTheBox");
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
    var multList = [ 1, 2, 3, 4, 10, 25 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        texiaoRoot: {
          default: null,
          type: cc.Node
        },
        jackInTheBox: {
          default: null,
          type: cc.Node
        },
        boxRoot: {
          default: null,
          type: cc.Node
        },
        spotsFilled: {
          default: null,
          type: cc.Node
        },
        multRoot: {
          default: null,
          type: cc.Node
        },
        totalWinBg: {
          default: null,
          type: cc.Node
        },
        backToGame: {
          default: null,
          type: cc.Node
        },
        _texiaoIndexList: [],
        _jieDianIndexList: [],
        _rowNode: null,
        _colNode: null,
        _rowQiangNode: null,
        _colQiangNode: null,
        _boxList: [],
        _jackInTheBoxInitY: 0,
        _spotsFilledLabel: null,
        _gameData: null,
        _title: null,
        _titleSelectBox: null,
        _multNodeList: [],
        _winCoin: 0,
        _bonusGame: null,
        _showPopWinSuccess: null
      },
      onLoad: function onLoad() {
        this.Init();
      },
      start: function start() {
        this.multRoot.active = false;
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      Init: function Init() {
        this._rowNode = cc.find("row", this.texiaoRoot);
        this._colNode = cc.find("col", this.texiaoRoot);
        this._rowQiangNode = cc.find("rowQiang", this.texiaoRoot);
        this._colQiangNode = cc.find("colQiang", this.texiaoRoot);
        for (var i = 1; i <= 21; i++) {
          var boxNode = cc.find("xiaochou" + i, this.boxRoot);
          this._boxList[this._boxList.length] = boxNode;
        }
        this._jackInTheBoxInitY = this.jackInTheBox.y;
        this._spotsFilledLabel = cc.find("label", this.spotsFilled);
        this._title = cc.find("headBg/title", this.jackInTheBox);
        this._titleSelectBox = cc.find("headBg/xiaochou", this.jackInTheBox);
        for (var _i = 1; _i <= 6; _i++) {
          var node = cc.find("mult" + _i, this.multRoot);
          this._multNodeList[this._multNodeList.length] = node;
        }
        Global.btnClickEvent(this.backToGame, this.onClickBackToGame, this);
      },
      initTeXiaoJieDianXinxi: function initTeXiaoJieDianXinxi() {
        this._texiaoIndexList = [ {
          type: "row",
          index: 1,
          dir: "down",
          position: {
            x: 0,
            y: 348
          }
        }, {
          type: "row",
          index: 2,
          dir: "down",
          position: {
            x: 0,
            y: 240
          }
        }, {
          type: "row",
          index: 3,
          dir: "down",
          position: {
            x: 0,
            y: 130
          }
        }, {
          type: "row",
          index: 4,
          dir: "down",
          position: {
            x: 0,
            y: 20
          }
        }, {
          type: "row",
          index: 5,
          dir: "down",
          position: {
            x: 0,
            y: -87
          }
        }, {
          type: "row",
          index: 6,
          dir: "down",
          position: {
            x: 0,
            y: -197
          }
        }, {
          type: "row",
          index: 7,
          dir: "down",
          position: {
            x: 0,
            y: -308
          }
        }, {
          type: "col",
          index: 1,
          dir: "right",
          position: {
            x: -171,
            y: 20
          }
        }, {
          type: "col",
          index: 2,
          dir: "right",
          position: {
            x: 0,
            y: 20
          }
        }, {
          type: "col",
          index: 3,
          dir: "right",
          position: {
            x: 175,
            y: 20
          }
        }, {
          type: "row",
          index: 7,
          dir: "up",
          position: {
            x: 0,
            y: -308
          }
        }, {
          type: "row",
          index: 6,
          dir: "up",
          position: {
            x: 0,
            y: -197
          }
        }, {
          type: "row",
          index: 5,
          dir: "up",
          position: {
            x: 0,
            y: -87
          }
        }, {
          type: "row",
          index: 4,
          dir: "up",
          position: {
            x: 0,
            y: 20
          }
        }, {
          type: "row",
          index: 3,
          dir: "up",
          position: {
            x: 0,
            y: 130
          }
        }, {
          type: "row",
          index: 2,
          dir: "up",
          position: {
            x: 0,
            y: 240
          }
        }, {
          type: "row",
          index: 1,
          dir: "up",
          position: {
            x: 0,
            y: 348
          }
        }, {
          type: "col",
          index: 3,
          dir: "left",
          position: {
            x: 175,
            y: 20
          }
        }, {
          type: "col",
          index: 2,
          dir: "left",
          position: {
            x: 0,
            y: 20
          }
        }, {
          type: "col",
          index: 1,
          dir: "left",
          position: {
            x: -171,
            y: 20
          }
        } ];
        this._jieDianIndexList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ];
      },
      showWinAnimation: function showWinAnimation() {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this2.jackInTheBox.y = _this2._jackInTheBoxInitY;
                cc.tween(_this2.jackInTheBox).to(.7, {
                  y: 780 - cc.winSize.height / 2
                }).call(function() {
                  sucess();
                }).start();

               case 2:
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
      showWin: function showWin(bonusGame, idx) {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var i, boxNode, boxNodeSp, coin, nowIdx, nowBox, nowItem, _i2, element, item, _boxNode, _boxNodeSp, _coin, _boxNodeSp2, _coin2;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this3._bonusGame = bonusGame;
                _context2.next = 3;
                return _this3.awaitTime(0);

               case 3:
                _this3.node.active = true;
                _this3.totalWinBg.active = false;
                _this3.spotsFilled.active = true;
                _this3.multRoot.active = false;
                for (i = 0; i < _this3._boxList.length; i++) {
                  boxNode = _this3._boxList[i];
                  boxNode.color = cc.color(255, 255, 255);
                  boxNodeSp = boxNode.getComponent(sp.Skeleton);
                  boxNodeSp.setAnimation(0, "animation", true);
                  coin = boxNode.getChildByName("coin");
                  coin.active = false;
                }
                nowIdx = idx || bonusGame.collectionIdxs[bonusGame.collectionIdxs.length - 1];
                nowBox = null;
                nowItem = null;
                for (_i2 = 0; _i2 < bonusGame.collectionIdxs.length; _i2++) {
                  element = bonusGame.collectionIdxs[_i2];
                  item = bonusGame.collectionItems[_i2];
                  _boxNode = _this3._boxList[element - 1];
                  if (_boxNode) if (nowIdx === element) {
                    nowBox = _boxNode;
                    nowItem = item;
                  } else {
                    _boxNodeSp = _boxNode.getComponent(sp.Skeleton);
                    _boxNodeSp.setAnimation(0, "animation" + item.type + "_2", true);
                    _coin = _boxNode.getChildByName("coin");
                    _coin.active = true;
                    _coin.getComponent(cc.Label).string = Global.convertNumToShort(item.coin);
                  }
                }
                _this3._title.active = true;
                _this3._titleSelectBox.active = false;
                _this3._spotsFilledLabel.getComponent(cc.Label).string = bonusGame.collectionIdxs.length - 1 + "/21";
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.row_col);
                _context2.next = 18;
                return _this3.showWinAnimation();

               case 18:
                if (!(nowBox && nowItem)) {
                  _context2.next = 29;
                  break;
                }
                _boxNodeSp2 = nowBox.getComponent(sp.Skeleton);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.elf_appear);
                _boxNodeSp2.setAnimation(0, "animation" + nowItem.type + "_1", false);
                _boxNodeSp2.addAnimation(0, "animation" + nowItem.type + "_2", true);
                _context2.next = 25;
                return _this3.awaitTime(1);

               case 25:
                _coin2 = nowBox.getChildByName("coin");
                _coin2.active = true;
                _coin2.getComponent(cc.Label).string = Global.convertNumToShort(nowItem.coin);
                _this3._spotsFilledLabel.getComponent(cc.Label).string = bonusGame.collectionIdxs.length + "/21";

               case 29:
                _context2.next = 31;
                return _this3.awaitTime(1);

               case 31:
                if (!(bonusGame.collectionIdxs.length >= 21)) {
                  _context2.next = 41;
                  break;
                }
                _context2.next = 34;
                return cc.vv.gameData.getPopWinManage().showWanFaXuanZe();

               case 34:
                _context2.next = 36;
                return _this3.showChoiceGame();

               case 36:
                _context2.next = 38;
                return _this3.hideWin();

               case 38:
                sucess();
                _context2.next = 44;
                break;

               case 41:
                _context2.next = 43;
                return _this3.hideWin();

               case 43:
                sucess();

               case 44:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      showPopWin: function showPopWin(bonusGame) {
        var _this4 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var i, boxNode, boxNodeSp, coin, _i3, element, item, _boxNode2, _boxNodeSp3, _coin3;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _this4._bonusGame = bonusGame;
                _this4._showPopWinSuccess = sucess;
                cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("moveing_1");
                _context3.next = 5;
                return _this4.awaitTime(0);

               case 5:
                _this4.node.active = true;
                _this4.totalWinBg.active = false;
                _this4.spotsFilled.active = true;
                _this4.multRoot.active = false;
                for (i = 0; i < _this4._boxList.length; i++) {
                  boxNode = _this4._boxList[i];
                  boxNode.color = cc.color(255, 255, 255);
                  boxNodeSp = boxNode.getComponent(sp.Skeleton);
                  boxNodeSp.setAnimation(0, "animation", true);
                  coin = boxNode.getChildByName("coin");
                  coin.active = false;
                }
                for (_i3 = 0; _i3 < bonusGame.collectionIdxs.length; _i3++) {
                  element = bonusGame.collectionIdxs[_i3];
                  item = bonusGame.collectionItems[_i3];
                  _boxNode2 = _this4._boxList[element - 1];
                  if (_boxNode2) {
                    _boxNodeSp3 = _boxNode2.getComponent(sp.Skeleton);
                    _boxNodeSp3.setAnimation(0, "animation" + item.type + "_2", true);
                    _coin3 = _boxNode2.getChildByName("coin");
                    _coin3.active = true;
                    _coin3.getComponent(cc.Label).string = Global.convertNumToShort(item.coin);
                  }
                }
                _this4._title.active = true;
                _this4._titleSelectBox.active = false;
                _this4._spotsFilledLabel.getComponent(cc.Label).string = bonusGame.collectionIdxs.length + "/21";
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_start);
                _context3.next = 17;
                return _this4.showWinAnimation();

               case 17:
                _this4.backToGame.active = true;
                _this4.backToGame.scale = 0;
                cc.tween(_this4.backToGame).to(.2, {
                  scale: 1
                }).start();
                _this4.backToGame.getComponent(cc.Button).instantiate = true;

               case 21:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      onClickBackToGame: function onClickBackToGame() {
        var _this5 = this;
        this.backToGame.getComponent(cc.Button).instantiate = false;
        cc.tween(this.backToGame).to(.2, {
          scale: 0
        }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this5.backToGame.active = true;
              _context4.next = 3;
              return _this5.hideWin();

             case 3:
              cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("idle");
              if (_this5._showPopWinSuccess) {
                _this5._showPopWinSuccess();
                _this5._showPopWinSuccess = null;
              }

             case 5:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))).start();
      },
      setGameData: function setGameData(data) {
        this._gameData = data;
        this.initTeXiaoJieDianXinxi();
        cc.vv.gameData.GetSlotsScript()._jackInTheBoxWinCoin = this._gameData.winCoin;
      },
      showChoiceGame: function showChoiceGame() {
        var _this6 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var boxSp, type, totalWinCoin, i, element, item, lastItemIndex, j, _element;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                _this6._title.active = false;
                _this6._titleSelectBox.active = true;
                boxSp = _this6._titleSelectBox.getComponent(sp.Skeleton);
                type = _this6._gameData.choiceId;
                boxSp.setAnimation(0, "animation" + type + "_5", false);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jack_appear);
                _this6.totalWinBg.active = true;
                _this6.spotsFilled.active = false;
                totalWinCoin = cc.find("coin", _this6.totalWinBg);
                totalWinCoin.getComponent(cc.Label).string = "";
                _this6._winCoin = 0;
                _context5.next = 13;
                return _this6.awaitTime(1);

               case 13:
                _context5.next = 15;
                return _this6.showMultAnimation();

               case 15:
                _context5.next = 17;
                return _this6.awaitTime(1);

               case 17:
                i = 0;

               case 18:
                if (!(i < _this6._gameData.result.length)) {
                  _context5.next = 51;
                  break;
                }
                element = _this6._gameData.result[i];
                if (!(i < 5)) {
                  _context5.next = 24;
                  break;
                }
                _context5.next = 23;
                return cc.vv.gameData.getPopWinManage().showRound(i + 1);

               case 23:
                _this6.laftBoxTurnOver(i, 1);

               case 24:
                _this6.setRound(i);
                if (!(5 === i)) {
                  _context5.next = 41;
                  break;
                }
                if (!(1 == _this6._jieDianIndexList.length)) {
                  _context5.next = 39;
                  break;
                }
                item = null;
                lastItemIndex = _this6._jieDianIndexList[0];
                j = 0;

               case 30:
                if (!(j < _this6._bonusGame.collectionIdxs.length)) {
                  _context5.next = 38;
                  break;
                }
                _element = _this6._bonusGame.collectionIdxs[j];
                if (!(_element === lastItemIndex)) {
                  _context5.next = 35;
                  break;
                }
                item = _this6._bonusGame.collectionItems[j];
                return _context5.abrupt("break", 38);

               case 35:
                j++;
                _context5.next = 30;
                break;

               case 38:
                if (item.type === _this6._gameData.choiceId) {
                  _this6.laftBoxTurnOver(i, 2);
                  _this6.setLastMultDouble();
                } else _this6.laftBoxTurnOver(i, 1);

               case 39:
                _context5.next = 41;
                return _this6.awaitTime(1);

               case 41:
                if (!(i < 5)) {
                  _context5.next = 44;
                  break;
                }
                _context5.next = 44;
                return _this6.showkuangAnimation(element.rows, element.cols, i);

               case 44:
                _context5.next = 46;
                return _this6.setBoxEnable(element.rows, element.cols, element.coin);

               case 46:
                _context5.next = 48;
                return _this6.awaitTime(1);

               case 48:
                i++;
                _context5.next = 18;
                break;

               case 51:
                _context5.next = 53;
                return cc.vv.gameData.getPopWinManage().showJackInBoxWinCoin(_this6._gameData.winCoin);

               case 53:
                cc.vv.gameData.getBonusGame().collectionIdxs = [];
                sucess();

               case 55:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x7, _x8) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      laftBoxTurnOver: function laftBoxTurnOver(round, _double) {
        var _this7 = this;
        var mult = multList[round];
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.multi_top);
        for (var i = 0; i < this._jieDianIndexList.length; i++) {
          var element = this._jieDianIndexList[i];
          var item = this._bonusGame.collectionItems[element - 1];
          var coin = cc.find("coin", this._boxList[element - 1]);
          coin.getComponent(cc.Label).string = Global.convertNumToShort(item.coin * mult * _double);
          mult > 1 && function() {
            var jinglingshuzi = cc.find("jinglingshuzi", _this7._boxList[element - 1]);
            jinglingshuzi.active = true;
            var jinglingshuziSp = jinglingshuzi.getComponent(sp.Skeleton);
            jinglingshuziSp.setAnimation(0, "animation", false);
            jinglingshuziSp.setCompleteListener(function() {
              jinglingshuzi.active = false;
              jinglingshuziSp.setCompleteListener(null);
            });
          }();
          2 === _double && cc.tween(this._boxList[element - 1]).to(.2, {
            scale: 1.1
          }).to(.2, {
            scale: 1
          }).start();
        }
      },
      showMultAnimation: function showMultAnimation() {
        var _this8 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
            var _loop, i;
            return regeneratorRuntime.wrap(function _callee6$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                _this8.multRoot.active = true;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.multi_appear);
                _loop = regeneratorRuntime.mark(function _loop(i) {
                  var element, leftNode, Lbeicheng_cx, Lbeicheng_cxSp, rightNode, Rbeicheng_cx, Rbeicheng_cxSp;
                  return regeneratorRuntime.wrap(function _loop$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      element = _this8._multNodeList[i];
                      element.active = true;
                      leftNode = cc.find("left", element);
                      Lbeicheng_cx = cc.find("beicheng_cx", leftNode);
                      Lbeicheng_cx.active = true;
                      Lbeicheng_cxSp = Lbeicheng_cx.getComponent(sp.Skeleton);
                      Lbeicheng_cxSp.setAnimation(0, "animation", false);
                      Lbeicheng_cxSp.setCompleteListener(function() {
                        Lbeicheng_cx.active = false;
                        Lbeicheng_cxSp.setCompleteListener(null);
                      });
                      rightNode = cc.find("right", element);
                      Rbeicheng_cx = cc.find("beicheng_cx", rightNode);
                      Rbeicheng_cx.active = true;
                      Rbeicheng_cxSp = Rbeicheng_cx.getComponent(sp.Skeleton);
                      Rbeicheng_cxSp.setAnimation(0, "animation", false);
                      Rbeicheng_cxSp.setCompleteListener(function() {
                        Rbeicheng_cx.active = false;
                        Rbeicheng_cxSp.setCompleteListener(null);
                      });
                      _context6.next = 16;
                      return _this8.awaitTime(0);

                     case 16:
                     case "end":
                      return _context6.stop();
                    }
                  }, _loop);
                });
                i = 0;

               case 4:
                if (!(i < _this8._multNodeList.length)) {
                  _context7.next = 9;
                  break;
                }
                return _context7.delegateYield(_loop(i), "t0", 6);

               case 6:
                i++;
                _context7.next = 4;
                break;

               case 9:
                sucess();

               case 10:
               case "end":
                return _context7.stop();
              }
            }, _callee6);
          }));
          return function(_x9, _x10) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      setRound: function setRound(number) {
        for (var i = 0; i < this._multNodeList.length; i++) {
          var element = this._multNodeList[i];
          this.setMultSelect(element, number === i, number);
        }
      },
      setMultSelect: function setMultSelect(mult, select, index) {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mul_mul);
        var leftNode = cc.find("left", mult);
        var Lbeicheng_xh = cc.find("beicheng_xh", leftNode);
        Lbeicheng_xh.active = select;
        var rightNode = cc.find("right", mult);
        var Rbeicheng_xh = cc.find("beicheng_xh", rightNode);
        Rbeicheng_xh.active = select;
        if (select) {
          var LAnimation = leftNode.getComponent(cc.Animation);
          LAnimation.play("loopScaledMap");
          var RAnimation = rightNode.getComponent(cc.Animation);
          RAnimation.play("loopScaledMap");
        } else {
          var _LAnimation = leftNode.getComponent(cc.Animation);
          _LAnimation.stop("loopScaledMap");
          var _RAnimation = rightNode.getComponent(cc.Animation);
          _RAnimation.stop("loopScaledMap");
        }
        if (5 === index) {
          var jinglingshuzi = cc.find("jinglingshuzi", mult);
          if (jinglingshuzi) {
            var jinglingshuziSp = jinglingshuzi.getComponent(sp.Skeleton);
            jinglingshuziSp.setAnimation(0, "animation", false);
          }
        }
      },
      setLastMultDouble: function setLastMultDouble() {
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.coins_fly);
        var element = this._multNodeList[this._multNodeList.length - 1];
        var leftNode = cc.find("left", element);
        cc.find("text25", leftNode).active = false;
        cc.find("text50", leftNode).active = true;
        var l20_50 = cc.find("20_50", leftNode);
        l20_50.active = true;
        var lSp = l20_50.getComponent(sp.Skeleton);
        lSp.setAnimation(0, "animation", false);
        lSp.setCompleteListener(function() {
          l20_50.active = false;
          lSp.setCompleteListener(null);
        });
        var rightNode = cc.find("right", element);
        cc.find("text25", rightNode).active = false;
        cc.find("text50", rightNode).active = true;
        var R20_50 = cc.find("20_50", rightNode);
        R20_50.active = true;
        var rSp = R20_50.getComponent(sp.Skeleton);
        rSp.setAnimation(0, "animation", false);
        rSp.setCompleteListener(function() {
          R20_50.active = false;
          rSp.setCompleteListener(null);
        });
      },
      showkuangAnimation: function showkuangAnimation(row, col, turnNum) {
        var _this9 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
            var moveItemList, i, element, index, startInfo, node, _i4, _element2, _index, _startInfo, _node, _i5, key, _element3, _startInfo2, _node2, _key, _element4, qiangSp, info, _key2, _element5, _i6, _element6, _i7, _element7;
            return regeneratorRuntime.wrap(function _callee7$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                _this9.texiaoRoot.active = true;
                moveItemList = [];
                if (row) for (i = 0; i < row.length; i++) {
                  element = row[i];
                  index = _this9.findRowPosition(element);
                  startInfo = _this9._texiaoIndexList[index];
                  node = _this9.getMoveItem(startInfo);
                  node.index = index;
                  moveItemList.push(node);
                }
                if (col) for (_i4 = 0; _i4 < col.length; _i4++) {
                  _element2 = col[_i4];
                  _index = _this9.findColPosition(_element2);
                  _startInfo = _this9._texiaoIndexList[_index];
                  _node = _this9.getMoveItem(_startInfo);
                  _node.index = _index;
                  moveItemList.push(_node);
                }
                _context8.next = 6;
                return _this9.awaitTime(1);

               case 6:
                _i5 = 0;

               case 7:
                if (!(_i5 < 11)) {
                  _context8.next = 15;
                  break;
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.row_col);
                for (key in moveItemList) if (moveItemList.hasOwnProperty(key)) {
                  _element3 = moveItemList[key];
                  _element3.index++;
                  _element3.index >= _this9._texiaoIndexList.length && (_element3.index = 0);
                  _element3.item.parent = null;
                  _element3.qiangRoot.parent = null;
                  _startInfo2 = _this9._texiaoIndexList[_element3.index];
                  _node2 = _this9.getMoveItem(_startInfo2);
                  _element3.item = _node2.item;
                  _element3.qiang = _node2.qiang;
                  _element3.qiangRoot = _node2.qiangRoot;
                }
                _context8.next = 12;
                return _this9.awaitTime(1);

               case 12:
                _i5++;
                _context8.next = 7;
                break;

               case 15:
                for (_key in moveItemList) if (moveItemList.hasOwnProperty(_key)) {
                  _element4 = moveItemList[_key];
                  qiangSp = _element4.qiang.getComponent(sp.Skeleton);
                  info = _this9._texiaoIndexList[_element4.index];
                  if ("row" === info.type) {
                    qiangSp.setAnimation(0, "animation2", false);
                    qiangSp.addAnimation(0, "animation2_1", true);
                  } else {
                    qiangSp.setAnimation(0, "animation1", false);
                    qiangSp.addAnimation(0, "animation1_1", true);
                  }
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.selected);
                _context8.next = 19;
                return _this9.awaitTime(1);

               case 19:
                for (_key2 in moveItemList) if (moveItemList.hasOwnProperty(_key2)) {
                  _element5 = moveItemList[_key2];
                  _element5.item.parent = null;
                  _element5.qiangRoot.parent = null;
                }
                for (_i6 = _this9._texiaoIndexList.length - 1; _i6 >= 0; _i6--) {
                  _element6 = _this9._texiaoIndexList[_i6];
                  "row" === _element6.type ? row && -1 != row.indexOf(_element6.index) && _this9._texiaoIndexList.splice(_i6, 1) : col && -1 != col.indexOf(_element6.index) && _this9._texiaoIndexList.splice(_i6, 1);
                }
                if (1 === turnNum) for (_i7 = _this9._texiaoIndexList.length - 1; _i7 >= 0; _i7--) {
                  _element7 = _this9._texiaoIndexList[_i7];
                  "col" === _element7.type && _this9._texiaoIndexList.splice(_i7, 1);
                }
                sucess();

               case 23:
               case "end":
                return _context8.stop();
              }
            }, _callee7);
          }));
          return function(_x11, _x12) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      findRowPosition: function findRowPosition(row) {
        var index = 0;
        for (var i = 0; i < this._texiaoIndexList.length; i++) {
          var element = this._texiaoIndexList[i];
          if ("row" === element.type && element.index === row) {
            index = i;
            break;
          }
        }
        var ret = index - 11 + this._texiaoIndexList.length;
        while (ret < 0) ret += this._texiaoIndexList.length;
        return ret;
      },
      findColPosition: function findColPosition(col) {
        var index = 0;
        for (var i = 0; i < this._texiaoIndexList.length; i++) {
          var element = this._texiaoIndexList[i];
          if ("col" === element.type && element.index === col) {
            index = i;
            break;
          }
        }
        var ret = index - 11 + this._texiaoIndexList.length;
        while (ret < 0) ret += this._texiaoIndexList.length;
        return ret;
      },
      getMoveItem: function getMoveItem(info) {
        var node = null;
        var qiang = null;
        var qiangRoot = null;
        if ("row" === info.type) {
          node = cc.instantiate(this._rowNode);
          qiangRoot = cc.instantiate(this._rowQiangNode);
          if ("down" === info.dir) {
            qiang = cc.find("qiangLeft", qiangRoot);
            qiang.active = true;
            cc.find("down", node).active = true;
          } else {
            qiang = cc.find("qiangRight", qiangRoot);
            qiang.active = true;
            cc.find("up", node).active = true;
          }
        } else {
          node = cc.instantiate(this._colNode);
          qiangRoot = cc.instantiate(this._colQiangNode);
          if ("right" === info.dir) {
            qiang = cc.find("qiangDown", qiangRoot);
            qiang.active = true;
            cc.find("right", node).active = true;
          } else {
            qiang = cc.find("qiangUp", qiangRoot);
            qiang.active = true;
            cc.find("left", node).active = true;
          }
        }
        node.parent = this.texiaoRoot;
        node.position = info.position;
        node.active = true;
        qiangRoot.parent = this.texiaoRoot;
        qiangRoot.position = info.position;
        qiangRoot.active = true;
        qiangRoot.zIndex = 2;
        return {
          item: node,
          qiang: qiang,
          qiangRoot: qiangRoot
        };
      },
      setBoxEnable: function setBoxEnable(row, col, coin) {
        var _this10 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            var hitBoxIndex, i, element, tempcol, temprow, totalWinCoin, _loop2, _i8;
            return regeneratorRuntime.wrap(function _callee8$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                hitBoxIndex = [];
                for (i = _this10._jieDianIndexList.length - 1; i >= 0; i--) {
                  element = _this10._jieDianIndexList[i];
                  tempcol = (element - 1) % 3 + 1;
                  temprow = Math.floor((element - 1) / 3) + 1;
                  if (row && -1 != row.indexOf(temprow) || col && -1 != col.indexOf(tempcol)) {
                    hitBoxIndex.push(element);
                    _this10._jieDianIndexList.splice(i, 1);
                  }
                }
                totalWinCoin = cc.find("coin", _this10.totalWinBg);
                _loop2 = function _loop2(_i8) {
                  var element = hitBoxIndex[_i8];
                  _this10._boxList[element - 1].color = cc.color(60, 60, 60);
                  var coin = cc.find("coin", _this10._boxList[element - 1]);
                  var tempCoin = cc.instantiate(coin);
                  tempCoin.parent = _this10.totalWinBg;
                  var position = coin.convertToWorldSpaceAR(cc.v2(0, 0));
                  var finalPosition = _this10.totalWinBg.convertToNodeSpaceAR(position);
                  tempCoin.position = finalPosition;
                  cc.tween(tempCoin).to(.2, {
                    position: totalWinCoin.position
                  }, {
                    easing: "cubicIn"
                  }).call(function() {
                    tempCoin.parent = null;
                  }).start();
                  coin.active = false;
                };
                for (_i8 = 0; _i8 < hitBoxIndex.length; _i8++) _loop2(_i8);
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.coins_fly);
                _context9.next = 8;
                return _this10.awaitTime(.2);

               case 8:
                _this10._winCoin += coin;
                totalWinCoin.getComponent(cc.Label).string = Global.convertNumToShort(_this10._winCoin);
                sucess();

               case 11:
               case "end":
                return _context9.stop();
              }
            }, _callee8);
          }));
          return function(_x13, _x14) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      hideWin: function hideWin() {
        var _this11 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee9$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bonus_down);
                cc.tween(_this11.jackInTheBox).to(.7, {
                  y: _this11._jackInTheBoxInitY
                }).call(function() {
                  _this11.node.active = false;
                  sucess();
                }).start();

               case 2:
               case "end":
                return _context10.stop();
              }
            }, _callee9);
          }));
          return function(_x15, _x16) {
            return _ref9.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  Clown_reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb74bX80aRBtYP2VyR1ykWk", "Clown_reel");
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
        _backResult: [],
        _tempBackResult: [],
        _backType: null,
        _backNum: 0,
        _bgholderNode: null,
        _symbolsBg: [],
        _symbolBgTemplete: null,
        _curBgType: 3,
        _curBgNum: 0,
        _curSymbolId: 0,
        _curSymbolNum: 0,
        _showJackpotJl: false
      },
      onLoad: function onLoad() {
        this._super();
        this._bgholderNode = cc.find("mask/holderBg", this.node);
        if (!this._symbolBgTemplete) {
          var cfg = cc.vv.gameData.getGameCfg();
          this._symbolBgTemplete = cc.vv.gameData.GetPrefabByName(cfg.symbolBgPrefab);
        }
      },
      start: function start() {},
      randomBg: function randomBg() {
        if (3 === this._curBgType) {
          if (4 === this._reelIdx) {
            var ret = Global.random(1, 100);
            this._curBgType = ret > 50 ? 3 : Global.random(1, 3);
          } else {
            var _ret = Global.random(1, 100);
            this._curBgType = _ret > 80 ? 1 : 3;
          }
          3 !== this._curBgType && (this._curBgNum = 1);
        }
      },
      createBg: function createBg(symbol) {
        if (3 !== this._curBgType && this._curBgNum <= 4) {
          1 === this._curBgType ? symbol.SetBackground("yellow" + (5 - this._curBgNum)) : 2 === this._curBgType && symbol.SetBackground("qiqiu" + (5 - this._curBgNum));
          this._curBgNum++;
          this._curBgNum > 4 && (this._curBgType = 3);
        } else symbol.SetBackground("");
      },
      randomSymbol: function randomSymbol() {
        if (this._curSymbolNum <= 0) {
          var cfg = cc.vv.gameData.getGameCfg();
          var randIdx = Global.random(1, cfg.randomSymbols.length);
          this._curSymbolId = cfg.randomSymbols[randIdx - 1];
          this._curSymbolNum = 4;
        }
      },
      setSymbol: function setSymbol(symbol) {
        symbol.ShowById(this._curSymbolId);
        this._curSymbolNum--;
      },
      LoadSymbols: function LoadSymbols() {
        var cfg = cc.vv.gameData.getGameCfg();
        var url = cfg.symbolPrefab;
        this._symbolTemplete || (this._symbolTemplete = cc.vv.gameData.GetPrefabByName(url));
        for (var i = 0; i < this._nCount + 1; i++) this.CreateOneSymbol();
        this.ReLayOut();
      },
      CreateOneSymbol: function CreateOneSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = this._holderNode;
        var bgNode = cc.instantiate(this._symbolBgTemplete);
        bgNode.parent = this._bgholderNode;
        var scp = node.addComponent(cfg.scripts.Symbols);
        var idx = this._symbols.length;
        scp.Init(idx, this._topAniNode, bgNode);
        scp.SetSymbolReelIdx(this._reelIdx);
        this._symbols.push(scp);
        this._symbolsBg.push(bgNode);
        this.randomBg();
        this.randomSymbol();
        this.setSymbol(scp);
        this.createBg(scp);
      },
      ReLayOut: function ReLayOut() {
        for (var i = 0; i < this._symbols.length; i++) {
          var element = this._symbols[i];
          element.node.position = this.GetSymbolPosByRow(i);
          element._bindBg.position = element.node.position;
          element.SetSymbolIdx(i);
        }
      },
      recaveryReel: function recaveryReel() {
        for (var i = 0; i < this._symbols.length; i++) {
          var symbol = this._symbols[i];
          var ret = this._result.shift();
          if (ret) {
            var sid = ret.sid;
            var data = null;
            var bgName = this._tempBackResult.shift();
            if (sid) {
              symbol.ShowById(sid, data);
              symbol.SetBackground(bgName);
            }
          }
        }
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          var cfg = cc.vv.gameData.getGameCfg();
          if (cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(cfg.reelStateInfo), _step;
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
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1anode_anti");
        }
      },
      ShowJackpotJlEffect: function ShowJackpotJlEffect(bShow) {
        bShow ? Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.anticipation2) : Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.anticipation2);
        var node = cc.find("jackpot_jl", this.node);
        node ? node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1ajackpot_jl");
      },
      checkArrVal: function checkArrVal(arr, start, num) {
        var val = arr[start].type;
        for (var i = start; i < num; i++) {
          var element = arr[i].type;
          if (element !== val) return false;
        }
        return true;
      },
      SetBackResult: function SetBackResult(backResult) {
        var tempResull = [];
        var index = 0;
        while (index < backResult.length) {
          var _element = backResult[index].type;
          if (1 === _element) if (this.checkArrVal(backResult, index, 4)) {
            tempResull[tempResull.length] = "yellow4";
            tempResull[tempResull.length] = "yellow3";
            tempResull[tempResull.length] = "yellow2";
            tempResull[tempResull.length] = "yellow1";
            index += 4;
          } else if (this.checkArrVal(backResult, index, 3)) {
            if (backResult[index - 1]) {
              tempResull[tempResull.length] = "yellow4";
              tempResull[tempResull.length] = "yellow3";
              tempResull[tempResull.length] = "yellow2";
            } else {
              tempResull[tempResull.length] = "yellow3";
              tempResull[tempResull.length] = "yellow2";
              tempResull[tempResull.length] = "yellow1";
            }
            index += 3;
          } else if (this.checkArrVal(backResult, index, 2)) {
            if (backResult[index - 1]) {
              tempResull[tempResull.length] = "yellow4";
              tempResull[tempResull.length] = "yellow3";
            } else {
              tempResull[tempResull.length] = "yellow2";
              tempResull[tempResull.length] = "yellow1";
            }
            index += 2;
          } else {
            backResult[index - 1] ? tempResull[tempResull.length] = "yellow4" : tempResull[tempResull.length] = "yellow1";
            index++;
          } else if (2 === _element) if (this.checkArrVal(backResult, index, 4)) {
            tempResull[tempResull.length] = "qiqiu4";
            tempResull[tempResull.length] = "qiqiu3";
            tempResull[tempResull.length] = "qiqiu2";
            tempResull[tempResull.length] = "qiqiu1";
            index += 4;
          } else if (this.checkArrVal(backResult, index, 3)) {
            if (backResult[index - 1]) {
              tempResull[tempResull.length] = "qiqiu4";
              tempResull[tempResull.length] = "qiqiu3";
              tempResull[tempResull.length] = "qiqiu2";
            } else {
              tempResull[tempResull.length] = "qiqiu3";
              tempResull[tempResull.length] = "qiqiu2";
              tempResull[tempResull.length] = "qiqiu1";
            }
            index += 3;
          } else if (this.checkArrVal(backResult, index, 2)) {
            if (backResult[index - 1]) {
              tempResull[tempResull.length] = "qiqiu4";
              tempResull[tempResull.length] = "qiqiu3";
            } else {
              tempResull[tempResull.length] = "qiqiu2";
              tempResull[tempResull.length] = "qiqiu1";
            }
            index += 2;
          } else {
            backResult[index - 1] ? tempResull[tempResull.length] = "qiqiu4" : tempResull[tempResull.length] = "qiqiu1";
            index++;
          } else {
            tempResull[tempResull.length] = "null";
            index++;
          }
        }
        this._backResult = tempResull;
        this._tempBackResult = Global.copy(this._backResult);
        var element = backResult[backResult.length - 1].type;
        if (3 === element) this._curBgType = 3; else if (backResult[backResult.length - 4] && backResult[backResult.length - 4].type === element) this._curBgType = 3; else if (backResult[backResult.length - 3] && backResult[backResult.length - 3].type === element) {
          this._curBgType = element;
          this._curBgNum = 3;
        } else if (backResult[backResult.length - 2] && backResult[backResult.length - 2].type === element) {
          this._curBgType = element;
          this._curBgNum = 2;
        } else {
          this._curBgType = element;
          this._curBgNum = 1;
        }
      },
      UpdatePosition: function UpdatePosition(dt) {
        this._stopTime = this._stopTime - dt;
        this._curY += dt * this._speed;
        if (this._curY > this._offset) this.updataSymbol(); else {
          this._holderNode.y = this._holderOrigPosY - this._curY;
          this._bgholderNode.y = this._holderNode.y;
        }
      },
      updataSymbol: function updataSymbol() {
        var symbol = this._symbols.shift();
        var symbolData = null;
        var bgName = null;
        if (this._stopTime <= 0 && this._bStoping && this._result && !this._bResizing) {
          this.ReadyToStop();
          this._result.shift && (symbolData = this._result.shift());
          this._tempBackResult.shift && (bgName = this._tempBackResult.shift());
          symbol.SetBackground(bgName);
          symbolData || (this._bMoving = false);
        }
        if (symbolData) symbol.ShowById(symbolData.sid, symbolData.data); else {
          this.randomBg();
          this.randomSymbol();
          this.setSymbol(symbol);
          this.createBg(symbol);
        }
        this._symbols.push(symbol);
        this.ReLayOut();
        this._curY = 0;
        this._holderNode.y = this._holderOrigPosY;
        this._bgholderNode.y = this._holderNode.y;
        if (!this._bMoving) {
          this.OnReelBounsAction();
          this.OnReelBounsBgAction();
        }
      },
      OnReelBounsBgAction: function OnReelBounsBgAction() {
        var cfg = cc.vv.gameData.getGameCfg();
        var distance = cfg.bounceInfo ? cfg.bounceInfo.distance : 30;
        var time = cfg.bounceInfo ? cfg.bounceInfo.time : .3;
        cc.tween(this._bgholderNode).to(distance / this._speed, {
          position: cc.v2(this._bgholderNode.x, this._holderOrigPosY - distance)
        }).to(time, {
          position: cc.v2(this._bgholderNode.x, this._holderOrigPosY)
        }).start();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        this.ShowJackpotJlEffect(false);
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelBounsActionDeep(this._reelIdx);
        for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        this.playReelStop();
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelBounsActionEnd(this._reelIdx);
        var playStopAni = false;
        var _iterator2 = _createForOfIteratorHelper(this._reelState), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var info = _step2.value;
            info.isStop && (playStopAni = true);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        for (var i = 0; i < this._originResult.length; i++) playStopAni || this._symbols[i].StopMoveEnd();
        this.OnReelSpinEnd();
      },
      StartRecycleSymbol: function StartRecycleSymbol() {},
      StopMoveRightNow: function StopMoveRightNow() {
        this._stopRightNow = true;
        if (this._bMoving && this._originResult && this._backResult) {
          this._result = Global.copy(this._originResult);
          this._tempBackResult = Global.copy(this._backResult);
          for (var i = 0; i < this._symbols.length; i++) this.updataSymbol();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Clown_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11eb6nd2iBAsqY4tYkteLRo", "Clown_sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: {
          default: "games/Clown/",
          override: true
        },
        bonus_stop: {
          default: "",
          override: true
        },
        scatter_ant: {
          default: "",
          override: true
        },
        bonus_ant: {
          default: "",
          override: true
        },
        base_bgm: {
          default: "base/base_bgm",
          override: true
        },
        reel_stop: {
          default: "base/reel_stop",
          override: true
        },
        scatter_stop: {
          default: "base/scatter_notify",
          override: true
        },
        anticipation1: "base/anticipation1",
        anticipation2: "base/anticipation2",
        anticipation3: "base/anticipation3",
        bell: "base/bell",
        btn_click: "base/btn_click",
        collect_fly: "base/collect_fly",
        collect_lock: "base/collect_lock",
        collect_unlock: "base/collect_unlock",
        jackpot_notify: "base/jackpot_notify",
        transition1: "base/transition1",
        transition2: "base/transition2",
        win_jackpot: "base/win_jackpot",
        free_bgm: "free/free_bgm",
        free_dialog_start_show: "free/free_dialog_start_show",
        free_dialog_collect_show: "free/free_dialog_collect_show",
        fg_up: "free/fg_up",
        free_dialog_more_show: "free/free_dialog_more_show",
        back_ball: "bonus/back_ball",
        fly_ball: "bonus/fly_ball",
        jp_full: "bonus/jp_full",
        pick_end: "bonus/pick_end",
        wild_appear: "bonus/wild_appear",
        wild_full: "bonus/wild_full",
        wild_notify: "bonus/wild_notify",
        jp_dialog_start_show: "jackpot/jp_dialog_start_show",
        jp_lock: "jackpot/jp_lock",
        jp_unlock: "jackpot/jp_unlock",
        wheel_dialog_collect_show: "wheel/wheel_dialog_collect_show",
        wheel_end: "wheel/wheel_end",
        wheel_in: "wheel/wheel_in",
        wheel_roll: "wheel/wheel_roll",
        wheel_spin: "wheel/wheel_spin",
        bonus_dialog_collect_show: "map/bonus_dialog_collect_show",
        bonus_dialog_start_show: "map/bonus_dialog_start_show",
        bonus_down: "map/bonus_down",
        bonus_start: "map/bonus_start",
        choose_dialog_start_show: "map/choose_dialog_start_show",
        coins_fly: "map/coins_fly",
        elf_appear: "map/elf_appear",
        elf_choose: "map/elf_choose",
        jack_appear: "map/jack_appear",
        mul_mul: "map/mul_mul",
        multi_appear: "map/multi_appear",
        multi_top: "map/multi_top",
        round_dialog_start_show: "map/round_dialog_start_show",
        row_col: "map/row_col",
        selected: "map/selected"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  Clown_stackedWildsGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6ab2m9CN1FB4GEMnTwqVc5", "Clown_stackedWildsGame");
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
        wildList: {
          default: [],
          type: [ cc.Node ]
        },
        _wildListStartY: 0,
        _result: null,
        _isFreeGame: false
      },
      onLoad: function onLoad() {
        this._wildListStartY = this.wildList[0].y;
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showGame: function showGame(wildCols, realCards, isFreeGame) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, falied) {
            var _iterator, _step, iterator, cfg, reels, reel, symbol, position, finalPosition, i, wild, node, nodeSp, time, finalY;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this2.node.active = true;
                _this2._result = cc.vv.gameData.GetSlotsScript().changeCardsArr(realCards);
                _this2._isFreeGame = isFreeGame;
                _iterator = _createForOfIteratorHelper(_this2.wildList);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    iterator = _step.value;
                    iterator.active = false;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                cfg = cc.vv.gameData.getGameCfg();
                reels = cc.vv.gameData.GetSlotsScript()._reels;
                reel = reels[0];
                symbol = reel._symbols[0];
                position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0 - cfg.symbolSize.height / 2));
                finalPosition = cc.vv.gameData.getStackedWildsGame().node.convertToNodeSpaceAR(position);
                i = 0;

               case 12:
                if (!(i < _this2.wildList.length)) {
                  _context.next = 36;
                  break;
                }
                wild = _this2.wildList[i];
                wild.active = true;
                wild.y = _this2._wildListStartY;
                node = cc.find("wildluodi", wild);
                node.active = true;
                nodeSp = node.getComponent(sp.Skeleton);
                _this2._isFreeGame ? nodeSp.setAnimation(0, "animation2_1", true) : nodeSp.setAnimation(0, "animation1_1", true);
                time = 2;
                finalY = 0;
                if (_this2.findIsWild(wildCols, i)) {
                  time = (wild.y + Math.abs(finalPosition.y)) / (wild.y + 1428) * 2;
                  finalY = finalPosition.y;
                } else finalY = -1428;
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild_full);
                cc.tween(wild).to(time, {
                  position: cc.v3(wild.x, finalY, 0)
                }).start();
                _context.next = 27;
                return _this2.awaitTime(time);

               case 27:
                if (!(time < 2)) {
                  _context.next = 33;
                  break;
                }
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.wild_notify);
                _this2.showEndAni(i);
                _this2.changeSymbol(_this2._result[4 - i], 4 - i);
                _context.next = 33;
                return _this2.awaitTime(2 - time);

               case 33:
                i++;
                _context.next = 12;
                break;

               case 36:
                _context.next = 38;
                return _this2.awaitTime(1);

               case 38:
                sucess();

               case 39:
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
      findIsWild: function findIsWild(wildCols, col) {
        var relCol = 5 - col;
        for (var i = 0; i < wildCols.length; i++) {
          var element = wildCols[i];
          if (relCol === element) return true;
        }
        return false;
      },
      showEndAni: function showEndAni(i) {
        var node = cc.find("wildluodi", this.wildList[i]);
        var nodeSp = node.getComponent(sp.Skeleton);
        this._isFreeGame ? nodeSp.setAnimation(0, "animation2", false) : nodeSp.setAnimation(0, "animation1", false);
        nodeSp.setCompleteListener(function() {
          node.active = false;
          nodeSp.setCompleteListener(null);
        });
      },
      changeSymbol: function changeSymbol(wildList, col) {
        var reels = cc.vv.gameData.GetSlotsScript()._reels;
        var reel = reels[col];
        for (var i = 0; i < reel._symbols.length; i++) {
          var symbol = reel._symbols[i];
          symbol.ShowById(wildList[i]);
        }
      },
      hideGame: function hideGame() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  Clown_symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57753QxeDRMmqT9DSYh/3YG", "Clown_symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _bindBg: null,
        _bgNode: null,
        _bgResultNode: null
      },
      start: function start() {},
      Init: function Init(idx, node, bgNode) {
        this._topAniNode = node;
        this._bindBg = bgNode;
        this.SetSymbolIdx(idx);
      },
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._symbolIdx = idx;
        1 === this._id ? this.node.zIndex = 150 - idx : this.node.zIndex = 100 - idx;
      },
      ShowById: function ShowById(id, data) {
        this._id = id;
        this._data = data;
        this.setAnimationToTop(false);
        this._showNode && (this._showNode.active = false);
        this._bgNode && (this._bgNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].node) {
          this._showNode = cc.find(cfg.symbol[id].node, this.node);
          this._showNode.active = true;
          if (cfg.symbol[id].bg) {
            this._bgNode = cc.find(cfg.symbol[id].bg, this._bindBg);
            this._bgNode.active = true;
          }
        } else console.log("\u672a\u627e\u5230\u914d\u7f6eid:" + id);
      },
      SetBackground: function SetBackground(name) {
        this._bgResultNode && (this._bgResultNode.active = false);
        if (name && this._bindBg) {
          this._bgResultNode = cc.find(name, this._bindBg);
          this._bgResultNode && (this._bgResultNode.active = true);
        }
      },
      setSymbolShow: function setSymbolShow(isVisible) {
        this.node.active = isVisible;
      },
      setSymbolBgShow: function setSymbolBgShow(isVisible) {
        this._bindBg.active = isVisible;
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if ("" != cfg.symbol[id].stop_ani.name) {
            aniNode.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
          }
        }
      },
      StopMoveEnd: function StopMoveEnd() {
        var id = this._id;
        if (1 === id) {
          var cfg = cc.vv.gameData.getGameCfg();
          if (cfg.symbol[id] && cfg.symbol[id].node) {
            this._state = "stop";
            this._showNode && (this._showNode.active = false);
            var aniNode = this.setAnimationToTop(true);
            aniNode.active = true;
            for (var i = 0; i < aniNode.children.length; i++) {
              var element = aniNode.children[i];
              element.active = false;
            }
            var topShowNode = cc.find(cfg.symbol[id].node, aniNode);
            topShowNode.active = true;
            aniNode.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Clown_Cfg", "Clown_GameData", "Clown_JackpotReelGame", "Clown_Logic", "Clown_Manage", "Clown_Pop", "Clown_PrizePool", "Clown_RandomWildsGame", "Clown_Slots", "Clown_jackInTheBox", "Clown_reel", "Clown_sound", "Clown_stackedWildsGame", "Clown_symbol" ]);