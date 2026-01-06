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
  TheUnicorn_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8dc74tU6EtKHZNPFkSyFfNG", "TheUnicorn_Cfg");
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
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 200
        },
        stop_ani: {
          name: "animation1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 5, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 6, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 7, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 8, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 9, {
        node: "s7"
      }), _defineProperty(_symbol, 10, {
        node: "s8"
      }), _defineProperty(_symbol, 11, {
        node: "s9"
      }), _defineProperty(_symbol, 12, {
        node: "s10"
      }), _defineProperty(_symbol, 13, {
        node: "s0"
      }), _defineProperty(_symbol, 14, {
        node: "s13"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TheUnicorn_Slots",
        Reels: "TheUnicorn_Reel",
        Symbols: "TheUnicorn_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "TheUnicorn_Symbol",
      symbolSize: {
        width: 130,
        height: 112
      },
      randomSymbols: [ 1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12 ],
      kuang: "TheUnicorn_Kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      normalBgm: "base/base_bgm",
      helpItems: [ "games/TheUnicorn/prefab/help/HelpPage1", "games/TheUnicorn/prefab/help/HelpPage2", "games/TheUnicorn/prefab/help/HelpPage3", "games/TheUnicorn/prefab/help/HelpPage4", "games/TheUnicorn/prefab/help/HelpPage5" ],
      commEffect: {
        path: "games/TheUnicorn/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      autoModelDelay: .8,
      bounce: true,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      AddAntiTime: 1.5,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/TheUnicorn/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2e3
      }, {
        id: [ 3 ],
        mini: 5,
        counts: [ 3, 3, 3, 3, 3 ],
        antiNode: "node_anti",
        path: "games/TheUnicorn/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_bonus",
        antSound: "reel_notify",
        antSpeed: 2e3
      } ],
      sysFloatOffsetPos: cc.v2(0, 20)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheUnicorn_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1b586/wrRBxLWhBEpi922n", "TheUnicorn_Collect");
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
        _collect: null,
        _map: null,
        _bar: null,
        _pos: null,
        _tip: null,
        _islock: false,
        _processing: false,
        _show: false,
        _idx: 0
      },
      onLoad: function onLoad() {
        this._collect = cc.find("safe_node/slots/collect", this.node);
        this._collect.on("click", this.onClickCollect.bind(this));
        this._bar = cc.find("progress_bg/progress/bar", this._collect);
        this._pos = cc.find("progress_bg/progress/pos", this._collect);
        this._tip = cc.find("tip", this._collect);
        var btnMap = cc.find("ball/map", this._collect);
        btnMap.on("click", this.onClickMap.bind(this));
        this.onEventTotalbetUpdated();
        this._map = cc.find("safe_node/map", this.node);
        var btnBack = cc.find("layout/btn_back", this._map);
        btnBack.on("click", this.onClickBack.bind(this));
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      start: function start() {
        this.refreshProgress();
        this.refreshMap();
      },
      Sleep: function Sleep(time) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(resolve, reject) {
                _this.scheduleOnce(function() {
                  resolve();
                }, time);
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      setProgress: function setProgress(value, anim) {
        value = Math.min(Math.max(0, value), 1);
        var x = 500 * value;
        if (anim) {
          this._bar.runAction(cc.moveTo(.1, x, 0));
          this._pos.x = x;
          this._pos.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        } else this._bar.x = x;
      },
      refreshProgress: function refreshProgress() {
        var data = cc.vv.gameData.getCollectData();
        this.setProgress(data.num / data.total);
        var idx = data.idx;
        var frame = "theme140_collect_nextStep_5";
        3 == idx ? frame = "theme140_collect_nextStep_1" : 7 == idx ? frame = "theme140_collect_nextStep_2" : 12 == idx ? frame = "theme140_collect_nextStep_3" : 18 == idx && (frame = "theme140_collect_nextStep_4");
        var atlas = cc.vv.gameData.GetAtlasByName("base");
        cc.find("progress_bg/next_step", this._collect).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(frame);
      },
      refreshMap: function refreshMap() {
        var atlas = cc.vv.gameData.GetAtlasByName("map");
        var data = cc.vv.gameData.getCollectData();
        var idx = data.idx;
        this._idx = idx;
        idx < 1 && (idx = 1);
        var ends = [ 4, 8, 13, 19 ];
        var ends_booster = [ 2, 3, 4, 5 ];
        for (var i = 0; i < 4; i++) {
          var end = cc.find("layout/end" + ends[i], this._map);
          if (idx >= ends[i]) {
            end.getChildByName("completed").active = true;
            end.getChildByName("booster").active = false;
            end.getChildByName("frame").active = false;
          } else if (idx > 1 && idx < ends[i] && (0 == i || idx > ends[i - 1])) {
            end.getChildByName("completed").active = false;
            end.getChildByName("booster").active = true;
            end.getChildByName("frame").active = true;
            var cnt = 0;
            cnt = 0 == i ? idx - 1 : idx - ends[i - 1];
            for (var j = 1; j <= ends_booster[i]; j++) {
              var booster = cc.find("booster/booster" + j, end);
              if (j <= cnt) {
                booster.active = true;
                data.extra.indexOf(j) >= 0 ? booster.getChildByName("state").getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme140_map_right") : booster.getChildByName("state").getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme140_map_wrong");
              } else booster.active = false;
            }
          } else {
            end.getChildByName("completed").active = false;
            end.getChildByName("booster").active = false;
            end.getChildByName("frame").active = true;
          }
        }
        var pos = cc.find("layout/pos", this._map);
        pos.active = -1 == ends.indexOf(idx);
        for (var _i = 1; _i <= 19; _i++) {
          if (-1 != ends.indexOf(_i)) continue;
          var p = cc.find("layout/p" + _i, this._map);
          p.getComponent(cc.Sprite).spriteFrame = _i <= idx ? atlas.getSpriteFrame("theme140_map_end5") : atlas.getSpriteFrame("theme140_map_end5_1");
          if (_i == idx) {
            pos.position = cc.v2(p.x - 4, p.y + 4);
            pos.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          }
        }
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var islock = cc.vv.gameData.GetBetIdx() < cc.vv.gameData.getUnlockIdx();
        if (islock != this._islock) {
          this._islock = islock;
          if (islock) this._collect.getChildByName("lock").getComponent(sp.Skeleton).setAnimation(0, "animation3", false); else {
            this._collect.getChildByName("lock").getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
            Global.SlotsSoundMgr.playEffect("base/unlock");
          }
        }
      },
      onClickCollect: function onClickCollect() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.GetFreeTime() > 0) return;
        if (this._islock) {
          var unlockidx = cc.vv.gameData.getUnlockIdx();
          cc.vv.gameData.GetBottomScript().SetBetIdx(unlockidx);
        }
        this.showTips();
      },
      onClickMap: function onClickMap() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.GetFreeTime() > 0) return;
        if (!this._islock) {
          var data = cc.vv.gameData.getCollectData();
          this._idx != data.idx && this.refreshMap();
          this.showMap(true, false);
        }
      },
      onClickBack: function onClickBack() {
        this.showMap(false);
      },
      showTips: function showTips() {
        this._tip.stopAllActions();
        this._tip.opacity > 0 ? this._tip.runAction(cc.fadeOut(.2)) : this._tip.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(5), cc.fadeOut(.2)));
      },
      showMap: function showMap(bshow, upgrade) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var layout, idx, path, ske, ends;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(_this2._show == bshow)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              _this2._show = bshow;
              _this2._processing = false;
              cc.vv.gameData.GetBottomScript().ShowInputMask(bshow);
              layout = _this2._map.getChildByName("layout");
              layout.stopAllActions();
              if (!bshow) {
                _context2.next = 37;
                break;
              }
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("map/map_open");
              _this2._map.active = true;
              layout.y = 1600;
              layout.runAction(cc.moveTo(.4, 0, 0));
              idx = cc.vv.gameData.getCollectData().idx;
              path = cc.find("layout/path", _this2._map);
              ske = path.getComponent(sp.Skeleton);
              if (!upgrade) {
                _context2.next = 33;
                break;
              }
              cc.find("layout/btn_back", _this2._map).active = false;
              _context2.next = 20;
              return _this2.Sleep(.5);

             case 20:
              path.active = true;
              ske.setAnimation(0, "animation" + (idx - 1), false);
              ske.addAnimation(0, "animation" + (idx - 1) + "_1", false);
              ends = [ 4, 8, 13, 19 ];
              ends.indexOf(idx) >= 0 ? Global.SlotsSoundMgr.playEffect("map/map_move2") : Global.SlotsSoundMgr.playEffect("map/map_move1");
              _context2.next = 27;
              return _this2.Sleep(.5);

             case 27:
              _this2.refreshMap();
              _context2.next = 30;
              return _this2.Sleep(2.5);

             case 30:
              _this2.onClickBack();
              _context2.next = 35;
              break;

             case 33:
              if (idx > 1) {
                path.active = true;
                ske.setAnimation(0, "animation" + (idx - 1) + "_1", false);
              } else path.active = false;
              cc.find("layout/btn_back", _this2._map).active = true;

             case 35:
              _context2.next = 40;
              break;

             case 37:
              cc.vv.gameData.GetBottomScript().CanDoNextRound();
              Global.SlotsSoundMgr.playEffect("map/map_close");
              layout.runAction(cc.sequence(cc.moveTo(.3, 0, 1600), cc.callFunc(function() {
                _this2._map.active = false;
              })));

             case 40:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheUnicorn_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd369hU0+lN+qkAvlQpRc3f", "TheUnicorn_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _isRespin: false,
        _collect: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.setCollectData(deskInfo.collect);
      },
      getRandomSymbol: function getRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var symbols = cfg.randomSymbols;
        this._isRespin && (symbols = [ 3, 13, 13 ]);
        return symbols[Global.random(0, symbols.length - 1)];
      },
      setRespin: function setRespin(val) {
        this._isRespin = val;
      },
      isFirstTriggerFree: function isFirstTriggerFree() {
        return this.GetFreeTime() > 0 && this.GetFreeTime() == this.GetTotalFree();
      },
      isLastEndFree: function isLastEndFree() {
        return 0 == this.GetFreeTime() && this.GetTotalFree() > 0;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._gameInfo.freeWinCoin;
      },
      setCollectData: function setCollectData(collect) {
        collect && (this._collect = collect);
      },
      getCollectData: function getCollectData() {
        return this._collect;
      },
      getUnlockIdx: function getUnlockIdx() {
        return this.getCollectData().min;
      },
      isLocked: function isLocked() {
        return this.GetBetIdx() < this.getUnlockIdx();
      },
      addCollectBooster: function addCollectBooster(booster) {
        this._collect.extra || (this._collect.extra = []);
        this._collect.extra.push(booster);
      },
      sendGameData: function sendGameData(data_) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA,
          gameid: this._gameId,
          data: data_
        };
        cc.vv.NetManager.send(req, true);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  TheUnicorn_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cafdC/UDNAB6xrfDkPz0t0", "TheUnicorn_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        var TheUnicorn = {};
        Global.TheUnicorn = TheUnicorn;
        TheUnicorn.Logic = this;
        TheUnicorn.Collect = this.node.getComponent("TheUnicorn_Collect");
        TheUnicorn.Pop = this.node.getComponent("TheUnicorn_Pop");
        TheUnicorn.Wheel = this.node.getComponent("TheUnicorn_Wheel");
        TheUnicorn.Slots = cc.find("safe_node/slots", this.node).getComponent("TheUnicorn_Slots");
      },
      onDestroy: function onDestroy() {
        Global.TheUnicorn = null;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheUnicorn_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a44f1gthINLqJmj7Bzicy6g", "TheUnicorn_Pop");
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
        _pop: null,
        _frame: null,
        _respin_trigger: null,
        _respin_end: null,
        _respin_press_start: null,
        _free_start: null,
        _free_end: null,
        _wheel_start: null,
        _wheel_end: null,
        _super_free_start: null,
        _super_free_end: null,
        _freeWin: 0,
        _wheelData: null,
        _wheelResult: null,
        _freeStartClicked: false,
        _freeEndClicked: false,
        _wheelStartClicked: false,
        _wheelEndClicked: false,
        _superFreeStartClicked: false,
        _superFreeEndClicked: false
      },
      onLoad: function onLoad() {
        this._pop = cc.find("safe_node/pop_ui", this.node);
        this._respin_trigger = this._pop.getChildByName("respin_trigger");
        this._respin_end = this._pop.getChildByName("respin_end");
        this._respin_press_start = this._pop.getChildByName("respin_press_start");
        this._respin_press_start.on("click", this.onClickRespinStart.bind(this));
        this._frame = this._pop.getChildByName("frame");
        this._free_start = this._frame.getChildByName("free_start");
        var btnFreeStart = this._free_start.getChildByName("btn_start");
        btnFreeStart.on("click", this.onClickFreeStart.bind(this));
        this._free_end = this._frame.getChildByName("free_end");
        this._wheel_start = this._frame.getChildByName("wheel_start");
        var btnWheelStart = this._wheel_start.getChildByName("btn_start");
        btnWheelStart.on("click", this.onClickWheelStart.bind(this));
        this._wheel_end = this._frame.getChildByName("wheel_end");
        this._super_free_start = this._frame.getChildByName("super_free_start");
        var btnSuperFreeStart = this._super_free_start.getChildByName("btn_start");
        btnSuperFreeStart.on("click", this.onClickSuperFreeStart.bind(this));
        this._super_free_end = this._frame.getChildByName("super_free_end");
        var btnSuperFreeEnd = this._super_free_end.getChildByName("btn_collect");
        btnSuperFreeEnd.on("click", this.onClickSuperFreeEnd.bind(this));
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, false, this);
      },
      Sleep: function Sleep(time) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(resolve, reject) {
                _this.scheduleOnce(function() {
                  resolve();
                }, time);
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showTransition: function showTransition(name, callback) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var node, ske;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              node = cc.find("safe_node/" + name, _this2.node);
              node.active = true;
              ske = node.getComponent(sp.Skeleton);
              if (!("qieping1" == name)) {
                _context2.next = 11;
                break;
              }
              ske.setAnimation(0, "skill", false);
              _context2.next = 7;
              return cc.vv.gameData.awaitTime(1.5);

             case 7:
              callback && callback();
              node.active = false;
              _context2.next = 13;
              break;

             case 11:
              ske.setAnimation(0, "animation", false);
              ske.setCompleteListener(function() {
                callback && callback();
                node.active = false;
              });

             case 13:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      PlayRoleAnimation: function PlayRoleAnimation(anim, loop) {},
      showRespinStart: function showRespinStart() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var ske;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this3._pop.active = true;
              _this3._respin_trigger.active = true;
              Global.showAlertAction(_this3._respin_trigger, true, .1, 1, null);
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playEffect("bonus/bonus_respin_show");
              _context4.next = 7;
              return _this3.Sleep(2);

             case 7:
              Global.showAlertAction(_this3._respin_trigger, false, 1, .1, function() {
                _this3._respin_trigger.active = false;
              });
              _context4.next = 10;
              return _this3.Sleep(.4);

             case 10:
              _this3.showTransition("qieping2");
              Global.SlotsSoundMgr.playEffect("base/transition_bonus");
              _context4.next = 14;
              return _this3.Sleep(.8);

             case 14:
              Global.TheUnicorn.Slots.ShowRespinReels();
              Global.SlotsSoundMgr.playBgm("bonus/bonus_bgm");
              _context4.next = 18;
              return _this3.Sleep(.8);

             case 18:
              _this3._respin_press_start.active = true;
              ske = _this3._respin_press_start.getChildByName("press").getComponent(sp.Skeleton);
              ske.setAnimation(0, "animation1", false);
              ske.addAnimation(0, "animation", true);
              Global.SlotsSoundMgr.playEffect("bonus/bonus_start_show");
              cc.vv.gameData.checkAutoPlay(_this3._respin_press_start, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var ske;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    Global.SlotsSoundMgr.playEffect("bonus/bonus_start_click");
                    ske = _this3._respin_press_start.getChildByName("press").getComponent(sp.Skeleton);
                    ske.setAnimation(0, "animation2", false);
                    _context3.next = 5;
                    return _this3.Sleep(.5);

                   case 5:
                    _this3._respin_press_start.active = false;
                    _this3._pop.active = false;
                    _context3.next = 9;
                    return _this3.Sleep(.5);

                   case 9:
                    Global.TheUnicorn.Slots.CanDoNextRound();
                    cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");

                   case 11:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })));

             case 24:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onClickRespinStart: function onClickRespinStart() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var ske;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this4._respin_press_start.stopAllActions();
              Global.SlotsSoundMgr.playEffect("bonus/bonus_start_click");
              ske = _this4._respin_press_start.getChildByName("press").getComponent(sp.Skeleton);
              ske.setAnimation(0, "animation2", false);
              _context5.next = 6;
              return _this4.Sleep(.5);

             case 6:
              _this4._respin_press_start.active = false;
              _this4._pop.active = false;
              _context5.next = 10;
              return _this4.Sleep(.5);

             case 10:
              Global.TheUnicorn.Slots.CanDoNextRound();
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");

             case 12:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showRespinEnd: function showRespinEnd(winCoin) {
        var _this5 = this;
        return new Promise(function(success) {
          _this5._pop.active = true;
          _this5._respin_end.active = true;
          Global.showAlertAction(_this5._respin_end, true, .1, 1, null);
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playEffect("bonus/bonus_respin_show");
          var lbl_coin = cc.find("diban/lbl_coin", _this5._respin_end);
          lbl_coin.getComponent("LabelRollCmp").startRoll(0, winCoin, 2);
          var btnFreeEnd = cc.find("diban/btn_collect", _this5._respin_end);
          var func = function() {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                 case 0:
                  Global.SlotsSoundMgr.playEffect("bonus/bonus_start_click");
                  btnFreeEnd.off("click");
                  if (!(Global.FormatCommaNumToNum(lbl_coin.getComponent(cc.Label).string) < winCoin)) {
                    _context6.next = 7;
                    break;
                  }
                  lbl_coin.getComponent("LabelRollCmp").stopRoll();
                  lbl_coin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                  _context6.next = 7;
                  return cc.vv.gameData.awaitTime(.3);

                 case 7:
                  Global.showAlertAction(_this5._respin_end, false, 1, .1, function() {
                    _this5._respin_end.active = false;
                    _this5._pop.active = false;
                    success();
                  });

                 case 8:
                 case "end":
                  return _context6.stop();
                }
              }, _callee6);
            }));
            return function func() {
              return _ref2.apply(this, arguments);
            };
          }();
          cc.vv.gameData.checkAutoPlay(btnFreeEnd, func);
          btnFreeEnd.off("click");
          btnFreeEnd.on("click", function() {
            btnFreeEnd.stopAllActions();
            func();
          });
        });
      },
      showFreeStart: function showFreeStart(freeCnt) {
        var _this6 = this;
        Global.SlotsSoundMgr.stopBgm();
        this._pop.active = true;
        this._frame.active = true;
        this._free_start.active = true;
        var lblCount = this._free_start.getChildByName("lbl_count").getComponent(cc.Label);
        lblCount.string = "" + freeCnt;
        Global.showAlertAction(this._frame, true, .1, 1, null);
        Global.SlotsSoundMgr.playEffect("free/free_dialog_start_show");
        var btnFreeStart = this._free_start.getChildByName("btn_start");
        cc.vv.gameData.checkAutoPlay(btnFreeStart, _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (!_this6._freeStartClicked) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              _this6._freeStartClicked = true;
              Global.SlotsSoundMgr.playEffect("base/common_click");
              Global.showAlertAction(_this6._frame, false, 1, .1, function() {
                _this6._pop.active = false;
                _this6._frame.active = false;
                _this6._free_start.active = false;
                _this6.PlayRoleAnimation("animation2", false);
                Global.SlotsSoundMgr.playEffect("free/bison_down");
                _this6._freeStartClicked = false;
              });
              _context7.next = 7;
              return _this6.Sleep(.6);

             case 7:
              _this6.showTransition("qieping1");
              Global.SlotsSoundMgr.playEffect("base/transition_free");
              _context7.next = 11;
              return _this6.Sleep(1);

             case 11:
              Global.TheUnicorn.Slots.ShowGameview(true);

             case 12:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        })));
      },
      onClickFreeStart: function onClickFreeStart() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var btnFreeStart;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (!_this7._freeStartClicked) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");

             case 2:
              btnFreeStart = _this7._free_start.getChildByName("btn_start");
              btnFreeStart.stopAllActions();
              _this7._freeStartClicked = true;
              Global.SlotsSoundMgr.playEffect("base/common_click");
              Global.showAlertAction(_this7._frame, false, 1, .1, function() {
                _this7._pop.active = false;
                _this7._frame.active = false;
                _this7._free_start.active = false;
                _this7.PlayRoleAnimation("animation2", false);
                Global.SlotsSoundMgr.playEffect("free/bison_down");
                _this7._freeStartClicked = false;
              });
              _context8.next = 9;
              return _this7.Sleep(.6);

             case 9:
              _this7.showTransition("qieping1");
              Global.SlotsSoundMgr.playEffect("base/transition_free");
              _context8.next = 13;
              return _this7.Sleep(1);

             case 13:
              Global.TheUnicorn.Slots.ShowGameview(true);

             case 14:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showFreeEnd: function showFreeEnd(winCoin) {
        var _this8 = this;
        Global.SlotsSoundMgr.stopBgm();
        this._freeWin = winCoin;
        this._pop.active = true;
        this._frame.active = true;
        this._free_end.active = true;
        Global.showAlertAction(this._frame, true, .1, 1, null);
        var lbl_coin = cc.find("lbl_coin", this._free_end);
        lbl_coin.getComponent("LabelRollCmp").startRoll(0, winCoin, 2);
        Global.SlotsSoundMgr.playEffect("free/free_dialog_collect_show");
        var btnFreeEnd = this._free_end.getChildByName("btn_collect");
        var func = function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                if (!_this8._freeEndClicked) {
                  _context9.next = 2;
                  break;
                }
                return _context9.abrupt("return");

               case 2:
                _this8._freeEndClicked = true;
                Global.SlotsSoundMgr.playEffect("free/free_dialog_click");
                if (!(Global.FormatCommaNumToNum(lbl_coin.getComponent(cc.Label).string) < winCoin)) {
                  _context9.next = 9;
                  break;
                }
                lbl_coin.getComponent("LabelRollCmp").stopRoll();
                lbl_coin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                _context9.next = 9;
                return cc.vv.gameData.awaitTime(.3);

               case 9:
                Global.showAlertAction(_this8._frame, false, 1, .1, function() {
                  _this8._pop.active = false;
                  _this8._frame.active = false;
                  _this8._free_end.active = false;
                  _this8.showTransition("qieping1");
                  Global.SlotsSoundMgr.playEffect("base/transition_free");
                  _this8._freeEndClicked = false;
                });
                _context9.next = 12;
                return _this8.Sleep(1.2);

               case 12:
                Global.TheUnicorn.Slots.ShowGameview(false);
                Global.TheUnicorn.Slots.ResizeReels(5, 3);
                Global.TheUnicorn.Slots.Resume();
                _this8.PlayRoleAnimation("animation1", true);
                Global.SlotsSoundMgr.playNormalBgm(true);
                _context9.next = 19;
                return _this8.Sleep(.6);

               case 19:
                Global.TheUnicorn.Slots.ShowBottomWin(_this8._freeWin, _this8._freeWin, true, function() {
                  Global.TheUnicorn.Slots.CanDoNextRound();
                });

               case 20:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function func() {
            return _ref4.apply(this, arguments);
          };
        }();
        cc.vv.gameData.checkAutoPlay(btnFreeEnd, func);
        btnFreeEnd.off("click");
        btnFreeEnd.on("click", function() {
          btnFreeEnd.stopAllActions();
          func();
        });
      },
      showWheelStart: function showWheelStart(wheelData) {
        var _this9 = this;
        Global.SlotsSoundMgr.stopBgm();
        this._wheelData = wheelData;
        this._pop.active = true;
        this._frame.active = true;
        this._wheel_start.active = true;
        Global.showAlertAction(this._frame, true, .1, 1, null);
        Global.SlotsSoundMgr.playEffect("map/wheel_start_show");
        var btnWheelStart = this._wheel_start.getChildByName("btn_start");
        cc.vv.gameData.checkAutoPlay(btnWheelStart, function() {
          if (_this9._wheelStartClicked) return;
          var btnWheelStart = _this9._wheel_start.getChildByName("btn_start");
          _this9._wheelStartClicked = true;
          Global.SlotsSoundMgr.playEffect("base/common_click");
          Global.showAlertAction(_this9._frame, false, 1, .1, function() {
            _this9._pop.active = false;
            _this9._frame.active = false;
            _this9._wheel_start.active = false;
            Global.TheUnicorn.Wheel.showSpin(_this9._wheelData);
            _this9._wheelStartClicked = false;
          });
        });
      },
      onClickWheelStart: function onClickWheelStart() {
        var _this10 = this;
        if (this._wheelStartClicked) return;
        var btnWheelStart = this._wheel_start.getChildByName("btn_start");
        btnWheelStart.stopAllActions();
        this._wheelStartClicked = true;
        Global.SlotsSoundMgr.playEffect("base/common_click");
        Global.showAlertAction(this._frame, false, 1, .1, function() {
          _this10._pop.active = false;
          _this10._frame.active = false;
          _this10._wheel_start.active = false;
          Global.TheUnicorn.Wheel.showSpin(_this10._wheelData);
          _this10._wheelStartClicked = false;
        });
      },
      showWheelEnd: function showWheelEnd(result) {
        var _this11 = this;
        Global.SlotsSoundMgr.stopBgm();
        this._wheelResult = result;
        this._pop.active = true;
        this._frame.active = true;
        this._wheel_end.active = true;
        var coin = this._wheel_end.getChildByName("coin");
        var booster = this._wheel_end.getChildByName("booster");
        var lbl_coin = coin.getChildByName("lbl_coin");
        lbl_coin.getComponent("LabelRollCmp").startRoll(0, result.num, 2);
        var y1 = 100;
        var y2 = 250;
        var y3 = -244;
        if (result.extra) {
          booster.active = true;
          var atlas = cc.vv.gameData.GetAtlasByName("common_map");
          booster.getChildByName("booster").spriteFrame = atlas.getSpriteFrame("theme140_map_booster" + result.extra);
        } else {
          y1 = 0;
          y2 = 130;
          y3 = -144;
          booster.active = false;
        }
        coin.y = y1;
        this._wheel_end.getChildByName("title").y = y2;
        this._wheel_end.getChildByName("btn_collect").y = y3;
        Global.showAlertAction(this._frame, true, .1, 1, null);
        Global.SlotsSoundMgr.playEffect("map/wheel_end_show");
        var btnWheelEnd = this._wheel_end.getChildByName("btn_collect");
        var func = function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
            var data, wincoin;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                if (!_this11._wheelEndClicked) {
                  _context10.next = 2;
                  break;
                }
                return _context10.abrupt("return");

               case 2:
                _this11._wheelEndClicked = true;
                Global.SlotsSoundMgr.playEffect("base/common_click");
                if (!(Global.FormatCommaNumToNum(lbl_coin.getComponent(cc.Label).string) < result.num)) {
                  _context10.next = 9;
                  break;
                }
                lbl_coin.getComponent("LabelRollCmp").stopRoll();
                lbl_coin.getComponent(cc.Label).string = Global.FormatNumToComma(result.num);
                _context10.next = 9;
                return cc.vv.gameData.awaitTime(.3);

               case 9:
                Global.TheUnicorn.Wheel.hide();
                Global.showAlertAction(_this11._frame, false, 1, .1, function() {
                  _this11._pop.active = false;
                  _this11._frame.active = false;
                  _this11._wheel_end.active = false;
                  _this11._wheelEndClicked = false;
                });
                data = cc.vv.gameData.getCollectData();
                data.num = 0;
                Global.TheUnicorn.Collect.refreshProgress();
                _context10.next = 16;
                return _this11.Sleep(.5);

               case 16:
                Global.TheUnicorn.Collect.showMap(true, true);
                _context10.next = 19;
                return _this11.Sleep(4);

               case 19:
                wincoin = _this11._wheelResult.num;
                Global.TheUnicorn.Slots.ShowBottomWin(wincoin, wincoin, true, function() {
                  Global.TheUnicorn.Slots.CanDoNextRound();
                });

               case 21:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function func() {
            return _ref5.apply(this, arguments);
          };
        }();
        cc.vv.gameData.checkAutoPlay(btnWheelEnd, func);
        btnWheelEnd.off("click");
        btnWheelEnd.on("click", function() {
          btnWheelEnd.stopAllActions();
          func();
        });
      },
      showBoosters: function showBoosters(boosters) {
        var data = cc.vv.gameData.getCollectData();
        var idx = data.idx;
        var ends = [ 4, 8, 13, 19 ];
        var ends_booster = [ 2, 3, 4, 5 ];
        var cnt = 0;
        for (var i = 0; i < 4; i++) if (idx <= ends[i]) {
          cnt = ends_booster[i];
          break;
        }
        for (var _i = 1; _i <= 5; _i++) {
          var booster = boosters.getChildByName("booster" + _i);
          if (_i <= cnt) {
            booster.active = true;
            booster.getChildByName("mask").active = data.extra.indexOf(_i) < 0;
          } else booster.active = false;
        }
      },
      showSuperFreeStart: function showSuperFreeStart(freeCnt) {
        var _this12 = this;
        Global.SlotsSoundMgr.stopBgm();
        this._pop.active = true;
        this._frame.active = true;
        this._super_free_start.active = true;
        this.showBoosters(this._super_free_start.getChildByName("boosters"));
        var lblCount = this._super_free_start.getChildByName("lbl_count").getComponent(cc.Label);
        lblCount.string = "" + freeCnt;
        Global.showAlertAction(this._frame, true, .1, 1, null);
        Global.SlotsSoundMgr.playEffect("free/free_dialog_start_show");
        var btnSuperFreeStart = this._super_free_start.getChildByName("btn_start");
        cc.vv.gameData.checkAutoPlay(btnSuperFreeStart, function() {
          Global.SlotsSoundMgr.playEffect("base/common_click");
          var btnSuperFreeStart = _this12._super_free_start.getChildByName("btn_start");
          cc.vv.gameData.sendGameData({
            rtype: 2
          });
        });
      },
      onClickSuperFreeStart: function onClickSuperFreeStart() {
        Global.SlotsSoundMgr.playEffect("base/common_click");
        var btnSuperFreeStart = this._super_free_start.getChildByName("btn_start");
        btnSuperFreeStart.stopAllActions();
        cc.vv.gameData.sendGameData({
          rtype: 2
        });
      },
      OnMsgSuperFree: function OnMsgSuperFree(msg) {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              if (!_this13._superFreeStartClicked) {
                _context11.next = 2;
                break;
              }
              return _context11.abrupt("return");

             case 2:
              _this13._superFreeStartClicked = true;
              Global.showAlertAction(_this13._frame, false, 1, .1, function() {
                _this13._pop.active = false;
                _this13._frame.active = false;
                _this13._super_free_start.active = false;
                _this13.PlayRoleAnimation("animation2", false);
                Global.SlotsSoundMgr.playEffect("free/bison_down");
                _this13._superFreeStartClicked = false;
              });
              _context11.next = 6;
              return _this13.Sleep(.6);

             case 6:
              _this13.showTransition("qieping1");
              Global.SlotsSoundMgr.playEffect("base/transition_free");
              _context11.next = 10;
              return _this13.Sleep(1);

             case 10:
              Global.TheUnicorn.Slots.ResizeReels(msg.data.col, msg.data.row);
              Global.TheUnicorn.Slots.ShowGameview(true);

             case 12:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      OnRecvMsgSubAction: function OnRecvMsgSubAction(msg) {
        200 == msg.code && 2 == msg.data.rtype && this.OnMsgSuperFree(msg);
      },
      showSuperFreeEnd: function showSuperFreeEnd(winCoin) {
        var _this14 = this;
        Global.SlotsSoundMgr.stopBgm();
        this._freeWin = winCoin;
        this._pop.active = true;
        this._frame.active = true;
        this._super_free_end.active = true;
        this.showBoosters(this._super_free_end.getChildByName("boosters"));
        Global.showAlertAction(this._frame, true, .1, 1, null);
        cc.find("lbl_coin", this._super_free_end).getComponent("LabelRollCmp").startRoll(0, winCoin, 2);
        Global.SlotsSoundMgr.playEffect("free/free_dialog_collect_show");
        var btnSuperFreeEnd = this._super_free_end.getChildByName("btn_collect");
        cc.vv.gameData.checkAutoPlay(btnSuperFreeEnd, _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var btnSuperFreeEnd, data;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              if (!_this14._superFreeEndClicked) {
                _context12.next = 2;
                break;
              }
              return _context12.abrupt("return");

             case 2:
              _this14._superFreeEndClicked = true;
              btnSuperFreeEnd = _this14._super_free_end.getChildByName("btn_collect");
              Global.SlotsSoundMgr.playEffect("base/common_click");
              Global.showAlertAction(_this14._frame, false, 1, .1, function() {
                _this14._pop.active = false;
                _this14._frame.active = false;
                _this14._super_free_end.active = false;
                _this14.showTransition("qieping1");
                Global.SlotsSoundMgr.playEffect("base/transition_free");
                _this14._superFreeEndClicked = false;
              });
              data = cc.vv.gameData.getCollectData();
              data.num = 0;
              Global.TheUnicorn.Collect.refreshProgress();
              _context12.next = 11;
              return _this14.Sleep(1.2);

             case 11:
              Global.TheUnicorn.Slots.ShowGameview(false);
              Global.TheUnicorn.Slots.ResizeReels(5, 3);
              _this14.PlayRoleAnimation("animation1", true);
              Global.SlotsSoundMgr.playNormalBgm(true);
              _context12.next = 17;
              return _this14.Sleep(1.5);

             case 17:
              Global.TheUnicorn.Collect.showMap(true, true);
              _context12.next = 20;
              return _this14.Sleep(4);

             case 20:
              Global.TheUnicorn.Slots.ShowBottomWin(_this14._freeWin, _this14._freeWin, true, function() {
                Global.TheUnicorn.Slots.CanDoNextRound();
              });

             case 21:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        })));
      },
      onClickSuperFreeEnd: function onClickSuperFreeEnd() {
        var _this15 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          var btnSuperFreeEnd, data;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              if (!_this15._superFreeEndClicked) {
                _context13.next = 2;
                break;
              }
              return _context13.abrupt("return");

             case 2:
              _this15._superFreeEndClicked = true;
              btnSuperFreeEnd = _this15._super_free_end.getChildByName("btn_collect");
              btnSuperFreeEnd.stopAllActions();
              Global.SlotsSoundMgr.playEffect("base/common_click");
              Global.showAlertAction(_this15._frame, false, 1, .1, function() {
                _this15._pop.active = false;
                _this15._frame.active = false;
                _this15._super_free_end.active = false;
                _this15.showTransition("qieping1");
                Global.SlotsSoundMgr.playEffect("base/transition_free");
                _this15._superFreeEndClicked = false;
              });
              data = cc.vv.gameData.getCollectData();
              data.num = 0;
              Global.TheUnicorn.Collect.refreshProgress();
              _context13.next = 12;
              return _this15.Sleep(1.2);

             case 12:
              Global.TheUnicorn.Slots.ShowGameview(false);
              Global.TheUnicorn.Slots.ResizeReels(5, 3);
              _this15.PlayRoleAnimation("animation1", true);
              Global.SlotsSoundMgr.playNormalBgm(true);
              _context13.next = 18;
              return _this15.Sleep(1.5);

             case 18:
              Global.TheUnicorn.Collect.showMap(true, true);
              _context13.next = 21;
              return _this15.Sleep(4);

             case 21:
              Global.TheUnicorn.Slots.ShowBottomWin(_this15._freeWin, _this15._freeWin, true, function() {
                Global.TheUnicorn.Slots.CanDoNextRound();
              });

             case 22:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  TheUnicorn_PrizePool_jp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86bceSpI2xOMb7v7D2ReCCp", "TheUnicorn_PrizePool_jp");
    "use strict";
    cc.Class({
      extends: require("LMSlotMachine_PrizePool"),
      properties: {},
      updateJackPot: function updateJackPot() {
        if (this._jackpotLabel) if (this._PauseNum) {
          var str = Global.S2P(this._PauseNum * this._mult);
          this._jackpotLabel.string = this.convertNumToShort(str, 1e3, 4);
        } else {
          var _str = Global.S2P(this._jackpotNum * this._mult);
          this._jackpotLabel.string = this.convertNumToShort(_str, 1e3, 4);
        }
      },
      convertNumToShort: function convertNumToShort(num, radix, decimal, costomunitArr, criticalValue) {
        var unitArr = [ "", "K", "M", "B", "T", "Q" ];
        var sign = 0 != num ? num / Math.abs(num) : 1;
        num = Math.abs(num);
        costomunitArr && (unitArr = costomunitArr);
        radix = null == radix ? 1e3 : radix;
        decimal = null == decimal ? 1 : decimal;
        criticalValue = null == criticalValue ? radix : criticalValue;
        var sum = 0;
        while (num >= criticalValue) {
          sum++;
          num /= radix;
        }
        num = num.toPrecision(decimal);
        return num * sign + unitArr[sum];
      }
    });
    cc._RF.pop();
  }, {
    LMSlotMachine_PrizePool: void 0
  } ],
  TheUnicorn_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58228XaFHlGtZnWmcX5fy2p", "TheUnicorn_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  TheUnicorn_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0665iOY/hIMqEY6yzS6TuE", "TheUnicorn_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      SetCount: function SetCount(count) {
        if (this._nCount == count) return;
        this._nCount = count;
        if (this._symbols.length < this._nCount + 1) {
          var cnt = this._nCount + 1 - this._symbols.length;
          for (var i = 0; i < cnt; i++) this.CreateOneSymbol();
        } else if (this._symbols.length > this._nCount + 1) {
          var delCnt = this._symbols.length - (this._nCount + 1);
          for (var _i = 0; _i < delCnt; _i++) {
            var item = this._symbols.pop();
            item.node.destroy();
          }
        }
        this.ReLayOut();
      },
      StartRecycleSymbol: function StartRecycleSymbol(nTime) {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheUnicorn_Respin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4dccPWtH9A4bKnyDzlTdCn", "TheUnicorn_Respin");
    "use strict";
    var _properties;
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
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var BONUS_STATE = {
      NULL: 0,
      UNKNOW: 1,
      UNOPEN: 2,
      OPENED: 3
    };
    cc.Class({
      extends: cc.Component,
      properties: (_properties = {
        _jp_sandian_01: null,
        _jp_sandian_02: null,
        _pick_dj: null,
        _pick_award: null,
        _bonuses: [],
        _processing: false,
        _jp: 1,
        _spin_cnt: 0,
        _pick_cnt: 0
      }, _defineProperty(_properties, "_pick_dj", null), _defineProperty(_properties, "_pick_award", null), 
      _defineProperty(_properties, "_fly", null), _defineProperty(_properties, "_flash", null), 
      _defineProperty(_properties, "_effect_layer", null), _properties),
      onLoad: function onLoad() {
        var _this = this;
        this._jp_sandian_01 = cc.find("Canvas/safe_node/layout/jackpot/jp_sandian_01");
        this._jp_sandian_02 = cc.find("Canvas/safe_node/layout/jackpot/jp_sandian_02");
        var layout = this.node.getChildByName("layout");
        this._bonuses = [];
        var _loop = function _loop(i) {
          var bonus_node = layout.getChildByName("bonus" + i);
          bonus_node.on("click", function() {
            this.onClickBonus(bonus_node);
          }, _this);
          _this._bonuses[i] = {
            node: bonus_node,
            lbl_coin: bonus_node.getChildByName("lbl_coin").getComponent(cc.Label),
            bonus_bg: bonus_node.getChildByName("bonus_bg"),
            diamond: bonus_node.getChildByName("diamond"),
            pick: bonus_node.getChildByName("pick"),
            state: BONUS_STATE.UNKNOW
          };
          bonus_node.active = true;
        };
        for (var i = 1; i <= 15; i++) _loop(i);
        this._respin_dj = this.node.getChildByName("respin_dj");
        this._pick_dj = this.node.getChildByName("pick_dj");
        this._pick_award = this.node.getChildByName("pick_award");
        this._effect_layer = cc.find("Canvas/safe_node/effect_layer");
        this._fly = this._effect_layer.getChildByName("fly");
        this._flash = this._effect_layer.getChildByName("flash");
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, false, this);
      },
      ShowBonusState: function ShowBonusState(bonus, state, coin) {
        if (state == BONUS_STATE.NULL) {
          bonus.node.active = false;
          return;
        }
        bonus.node.active = true;
        bonus.lbl_coin.node.active = false;
        bonus.bonus_bg.active = false;
        bonus.pick.active = false;
        bonus.diamond.active = false;
        bonus.state = state;
        if (state == BONUS_STATE.UNKNOW) bonus.diamond.active = true; else if (state == BONUS_STATE.UNOPEN) {
          bonus.pick.active = true;
          var ske = bonus.pick.getComponent(sp.Skeleton);
          ske.setAnimation(0, "animation1", false);
          ske.addAnimation(0, "animation2", true);
        } else if (state == BONUS_STATE.OPENED) {
          bonus.lbl_coin.node.active = true;
          bonus.lbl_coin.node.color = cc.Color.WHITE;
          bonus.lbl_coin.string = coin ? Global.convertNumToShort(coin, 1e3, 0) : "";
          bonus.bonus_bg.active = true;
          bonus.bonus_bg.color = cc.Color.WHITE;
        }
      },
      ShowBounsCoin: function ShowBounsCoin(bonus, coin) {
        bonus.lbl_coin.node.active = true;
        bonus.lbl_coin.string = coin ? Global.convertNumToShort(coin, 1e3, 0) : "";
        bonus.lbl_coin.node.stopAllActions();
        bonus.lbl_coin.node.scale = .1;
        bonus.lbl_coin.node.runAction(cc.scaleTo(.2, 1));
      },
      ShowSpin: function ShowSpin(data) {
        Global.TheUnicorn.Slots.ShowReelsEmpty();
        this.node.active = true;
        for (var i = 1; i <= 15; i++) this.ShowBonusState(this._bonuses[i], BONUS_STATE.NULL);
        this.UpdateSpin(data, true);
      },
      UpdateSpin: function UpdateSpin(data, init) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._spin_cnt = data.spin;
              _this2.SetSpinCnt(_this2._spin_cnt);
              if (!init) {
                _context.next = 6;
                break;
              }
              _this2.SetJackpot(data.pool);
              _context.next = 8;
              break;

             case 6:
              _context.next = 8;
              return _this2.UpdateJackpot(data.pool);

             case 8:
              if (data.cards) for (i = 0; i < data.cards.length; i++) 3 == data.cards[i] ? _this2.ShowBonusState(_this2._bonuses[i + 1], BONUS_STATE.UNKNOW) : _this2.ShowBonusState(_this2._bonuses[i + 1], BONUS_STATE.NULL);
              cc.vv.gameData.SetRespinTime(data.spin);

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ShowPick: function ShowPick(data) {
        this._processing = false;
        Global.TheUnicorn.Slots.ShowReelsEmpty();
        this.node.active = true;
        this._pick_cnt = data.pick;
        this.SetPickCnt(this._pick_cnt);
        if (data.cards) for (var i = 0; i < data.cards.length; i++) 3 == data.cards[i] ? this.ShowBonusState(this._bonuses[i + 1], BONUS_STATE.UNOPEN) : this.ShowBonusState(this._bonuses[i + 1], BONUS_STATE.NULL);
        if (data.indexs && data.indexs.all) for (var _i = 0; _i < data.indexs.all.length; _i++) this.ShowBonusState(this._bonuses[data.indexs.all[_i]], BONUS_STATE.UNOPEN);
        if (data.result && data.result.pick) for (var _i2 = 0; _i2 < data.result.pick.length; _i2++) {
          var info = data.result.pick[_i2];
          this.ShowBonusState(this._bonuses[info.idx], BONUS_STATE.OPENED, info.coin);
        }
        Global.SlotsSoundMgr.playEffect("bonus/bonus_change");
        this.setAutoPlay();
      },
      Hide: function Hide() {
        this._jp_sandian_01.active = false;
        this._jp_sandian_02.active = false;
        this.node.active = false;
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var i = 1; i <= 15; i++) this._bonuses[i].state == BONUS_STATE.UNOPEN && list.push(this._bonuses[i].node);
        if (list.length > 0) {
          var randomIdx = Global.random(0, list.length - 1);
          var self = this;
          cc.vv.gameData.checkAutoPlay(list[randomIdx], function() {
            self.onClickBonus(list[randomIdx]);
          });
        }
      },
      onClickBonus: function onClickBonus(node) {
        if (this._processing) return;
        for (var i = 1; i <= 15; i++) {
          this._bonuses[i].node.stopAllActions();
          if (node == this._bonuses[i].node && this._bonuses[i].state == BONUS_STATE.UNOPEN) {
            this.SetPickCnt(this._pick_cnt - 1);
            cc.vv.gameData.sendGameData({
              rtype: 4,
              idx: i
            });
            this._processing = true;
            break;
          }
        }
      },
      SetCnt: function SetCnt(cnt, desc) {
        cnt = Math.max(0, cnt);
        cc.find("progress/lbl_cnt", this.node).getComponent(cc.Label).string = "" + cnt;
        var atlas = cc.vv.gameData.GetAtlasByName("base");
        var txt = desc + "_1";
        cnt > 1 && (txt = desc + "_2");
        cc.find("progress/txt_remaining", this.node).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(txt);
      },
      SetSpinCnt: function SetSpinCnt(cnt) {
        this.SetCnt(cnt, "theme140_respin_2");
      },
      OnStartSpin: function OnStartSpin() {
        this.SetSpinCnt(this._spin_cnt - 1);
      },
      SetPickCnt: function SetPickCnt(cnt) {
        this.SetCnt(cnt, "theme140_respin_3");
      },
      UpdateJackpot: function UpdateJackpot(jp) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var name;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(_this3._jp != jp)) {
                _context2.next = 9;
                break;
              }
              _this3._jp_sandian_02.active = true;
              _this3._jp_sandian_02.position = cc.find("prizePool_" + jp, _this3._jp_sandian_02.parent).position;
              name = jp > 8 ? "animation1" : "animation2";
              _this3._jp_sandian_02.getComponent(sp.Skeleton).setAnimation(0, name, false);
              _context2.next = 7;
              return _this3.Sleep(.5);

             case 7:
              _this3.SetJackpot(jp);
              Global.SlotsSoundMgr.playEffect("bonus/bonus_reset");

             case 9:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      SetJackpot: function SetJackpot(jp) {
        this._jp = jp;
        if (jp > 0) {
          this._jp_sandian_01.active = true;
          this._jp_sandian_01.position = cc.find("prizePool_" + jp, this._jp_sandian_01.parent).position;
          var name = jp > 8 ? "animation1" : "animation4";
          this._jp_sandian_01.getComponent(sp.Skeleton).setAnimation(0, name, true);
        } else this._jp_sandian_01.active = false;
      },
      Sleep: function Sleep(time) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(resolve, reject) {
                _this4.scheduleOnce(function() {
                  resolve();
                }, time);
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playClickAni: function playClickAni(pos) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this5._respin_dj.active = true;
              _this5._respin_dj.position = pos;
              _this5._respin_dj.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _context4.next = 5;
              return _this5.Sleep(.3);

             case 5:
              _this5._pick_dj.active = true;
              _this5._pick_dj.position = pos;
              _this5._pick_dj.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              Global.SlotsSoundMgr.playEffect("bonus/pick_click");

             case 9:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      playAwardAni: function playAwardAni(pos, ani) {
        this._pick_award.active = true;
        this._pick_award.position = pos;
        this._pick_award.getComponent(sp.Skeleton).setAnimation(0, ani, false);
      },
      playFlyAni: function playFlyAni(from_wp, to_wp) {
        var from = this._effect_layer.convertToNodeSpaceAR(from_wp);
        var to = this._effect_layer.convertToNodeSpaceAR(to_wp);
        var fly = cc.instantiate(this._fly);
        fly.parent = this._effect_layer;
        fly.position = from;
        fly.active = true;
        fly.runAction(cc.sequence(cc.moveTo(.5, to), cc.fadeOut(.1), cc.destroySelf()));
      },
      playFlashAni: function playFlashAni(from_wp, to_wp) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var from, to, v, length, angle, ske;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              from = _this6._effect_layer.convertToNodeSpaceAR(from_wp);
              to = _this6._effect_layer.convertToNodeSpaceAR(to_wp);
              _this6._flash.active = true;
              v = cc.v2(to.x, to.y).sub(cc.v2(from.x, from.y));
              length = v.mag();
              _this6._flash.scale = length / 220;
              angle = v.signAngle(cc.v2(1, 0));
              _this6._flash.angle = -angle * cc.macro.DEG - 90;
              _this6._flash.position = from;
              ske = _this6._flash.getComponent(sp.Skeleton);
              ske.setAnimation(0, "animation", false);

             case 11:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      OpenBonus: function OpenBonus(info, pick, pool, picks) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var bonus, pos, from_wp, i, idx, lbl_cnt, to_wp, zj, jpnode, _to_wp;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              bonus = _this7._bonuses[info.idx];
              pos = bonus.node.position;
              from_wp = bonus.node.convertToWorldSpaceAR(cc.v2(0, 0));
              _context6.next = 5;
              return _this7.playClickAni(pos);

             case 5:
              _context6.next = 7;
              return _this7.Sleep(.5);

             case 7:
              _this7.ShowBonusState(bonus, BONUS_STATE.OPENED);
              if (!(1 == info.prize)) {
                _context6.next = 12;
                break;
              }
              _this7.ShowBounsCoin(bonus, info.coin);
              _context6.next = 69;
              break;

             case 12:
              if (!(2 == info.prize)) {
                _context6.next = 36;
                break;
              }
              _this7.playAwardAni(pos, "animation2_1");
              _context6.next = 16;
              return _this7.Sleep(.5);

             case 16:
              i = 0;

             case 17:
              if (!(i < picks.length)) {
                _context6.next = 33;
                break;
              }
              idx = picks[i].idx;
              if (!(idx != info.idx)) {
                _context6.next = 30;
                break;
              }
              _this7.playAwardAni(pos, "animation2_2");
              Global.SlotsSoundMgr.playEffect("bonus/pick_upgrade");
              _context6.next = 24;
              return _this7.Sleep(.3);

             case 24:
              _this7.playFlashAni(from_wp, _this7._bonuses[idx].node.convertToWorldSpaceAR(cc.v2(0, 0)));
              _context6.next = 27;
              return _this7.Sleep(.3);

             case 27:
              _this7.ShowBounsCoin(_this7._bonuses[idx], picks[i].coin);
              _context6.next = 30;
              return _this7.Sleep(.2);

             case 30:
              i++;
              _context6.next = 17;
              break;

             case 33:
              _this7.playAwardAni(pos, "animation2_3");
              _context6.next = 69;
              break;

             case 36:
              if (!(3 == info.prize || 4 == info.prize)) {
                _context6.next = 53;
                break;
              }
              _this7.playAwardAni(pos, "animation" + info.prize);
              _context6.next = 40;
              return _this7.Sleep(.5);

             case 40:
              Global.SlotsSoundMgr.playEffect("bonus/pick_increase");
              lbl_cnt = cc.find("progress/lbl_cnt", _this7.node);
              to_wp = lbl_cnt.convertToWorldSpaceAR(cc.v2(0, 0));
              _this7.playFlyAni(from_wp, to_wp);
              _context6.next = 46;
              return _this7.Sleep(.5);

             case 46:
              zj = cc.find("progress/zj", _this7.node);
              zj.active = true;
              zj.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _context6.next = 51;
              return _this7.Sleep(.5);

             case 51:
              _context6.next = 69;
              break;

             case 53:
              if (!(5 == info.prize)) {
                _context6.next = 69;
                break;
              }
              _this7.playAwardAni(pos, "animation1");
              _context6.next = 57;
              return _this7.Sleep(.5);

             case 57:
              Global.SlotsSoundMgr.playEffect("bonus/pick_jp");
              jpnode = cc.find("Canvas/safe_node/layout/jackpot/prizePool_" + _this7._jp);
              if (!jpnode) {
                _context6.next = 68;
                break;
              }
              _to_wp = jpnode.convertToWorldSpaceAR(cc.v2(0, 0));
              _this7.playFlyAni(from_wp, _to_wp);
              _context6.next = 64;
              return _this7.Sleep(.5);

             case 64:
              _context6.next = 66;
              return _this7.UpdateJackpot(pool);

             case 66:
              _context6.next = 69;
              break;

             case 68:
              cc.warn("prizePool_" + _this7, _jp + " not exist");

             case 69:
              _this7._pick_cnt = pick;
              _this7.SetPickCnt(_this7._pick_cnt);
              _this7.ShowBounsCoin(bonus, info.coin);

             case 72:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      ShowResult: function ShowResult(data) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var i, info, bonus, wincoin, winBg, to_wp, _i3, _info, _bonus, from_wp, jpnode, _from_wp;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              for (i = 0; i < data.result.other.length; i++) {
                info = data.result.other[i];
                bonus = _this8._bonuses[info.idx];
                _this8.ShowBonusState(bonus, BONUS_STATE.OPENED, info.coin);
                bonus.bonus_bg.color = cc.Color.GRAY;
                bonus.lbl_coin.node.color = cc.Color.GRAY;
              }
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playEffect("bonus/bonus_end");
              _context7.next = 5;
              return _this8.Sleep(2);

             case 5:
              wincoin = 0;
              winBg = cc.find("Canvas/safe_node/LMSlots_Bottom/winBg");
              to_wp = winBg.convertToWorldSpaceAR(cc.v2(0, 0));
              _i3 = 0;

             case 9:
              if (!(_i3 < data.result.pick.length)) {
                _context7.next = 24;
                break;
              }
              _info = data.result.pick[_i3];
              _bonus = _this8._bonuses[_info.idx];
              from_wp = _bonus.node.convertToWorldSpaceAR(cc.v2(0, 0));
              _this8.playFlyAni(from_wp, to_wp);
              Global.SlotsSoundMgr.playEffect("bonus/pick_hit");
              _context7.next = 17;
              return _this8.Sleep(.5);

             case 17:
              wincoin += _info.coin;
              cc.vv.gameData.GetBottomScript().SetWin(wincoin);
              _context7.next = 21;
              return _this8.Sleep(.4);

             case 21:
              _i3++;
              _context7.next = 9;
              break;

             case 24:
              jpnode = cc.find("Canvas/safe_node/layout/jackpot/prizePool_" + _this8._jp);
              if (jpnode) {
                _from_wp = jpnode.convertToWorldSpaceAR(cc.v2(0, 0));
                _this8.playFlashAni(_from_wp, to_wp);
                Global.SlotsSoundMgr.playEffect("bonus/bonus_jp");
              }
              _context7.next = 28;
              return _this8.Sleep(.5);

             case 28:
              cc.vv.gameData.GetBottomScript().SetWin(data.coin);

             case 29:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      OnMsgPick: function OnMsgPick(msg) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var data;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              data = msg.data;
              _context8.next = 3;
              return _this9.OpenBonus(data.info, data.pick, data.pool, data.result.pick);

             case 3:
              if (!(data.pick <= 0)) {
                _context8.next = 18;
                break;
              }
              _context8.next = 6;
              return _this9.ShowResult(data);

             case 6:
              cc.vv.gameData.AddCoin(data.coin);
              _context8.next = 9;
              return Global.TheUnicorn.Pop.showRespinEnd(data.coin);

             case 9:
              Global.TheUnicorn.Pop.showTransition("qieping2");
              _context8.next = 12;
              return _this9.Sleep(1.2);

             case 12:
              Global.TheUnicorn.Slots.ShowNormalReels();
              _this9.Hide();
              Global.SlotsSoundMgr.playNormalBgm(true);
              _context8.next = 17;
              return new Promise(function(resolve) {
                Global.TheUnicorn.Slots.ShowBottomWin(data.coin, data.coin, true, resolve);
              });

             case 17:
              Global.TheUnicorn.Slots.CanDoNextRound();

             case 18:
              _this9._processing = false;
              _this9.setAutoPlay();

             case 20:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      OnRecvMsgSubAction: function OnRecvMsgSubAction(msg) {
        200 == msg.code && 4 == msg.data.rtype && this.OnMsgPick(msg);
      }
    });
    cc._RF.pop();
  }, {} ],
  TheUnicorn_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd7cfiV5t5J1LVoZYGf4KIg", "TheUnicorn_Slots");
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
    var SCATTER = 2;
    var BONUS = 3;
    var WILD_X1 = 1;
    var WILD_X2 = 14;
    var EMPTY = 13;
    var SCALE_6_COL = 5 / 6;
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _wilds: [],
        _lbl_free_cnt: null,
        _lbl_total_cnt: null,
        _wild_move: null,
        _respin: null,
        _jp_sandian: null,
        _is_respin: false,
        _is_super_free: false
      },
      Init: function Init() {
        this._sw = 130;
        this._sh = 112;
        this._wild_move = this.node.getChildByName("wild_move").getComponent("TheUnicorn_WildMove");
        this._respin = this.node.getChildByName("respin").getComponent("TheUnicorn_Respin");
        this._super();
      },
      OnReelResized: function OnReelResized(node) {
        var widget = cc.Node.isNode(node) && node.getComponent(cc.Widget);
        widget && widget.alignMode === cc.Widget.AlignMode.ON_WINDOW_RESIZE && (widget.enabled = true);
        var children = node._children;
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          this.OnReelResized(child);
        }
      },
      ResizeReels: function ResizeReels(col, row) {
        if (!(col >= 5 && col <= 6 && row >= 3 && row <= 4)) return;
        if (this._col == col && this._row == row) return;
        this._col = col;
        this._row = row;
        var origin_symbol_width = 130;
        var origin_symbol_height = 112;
        var scale = 5 / col;
        var symbol_width = origin_symbol_width * scale;
        var symbol_height = origin_symbol_height * scale;
        var width = symbol_width * col;
        var height = symbol_height * row;
        cc.find("reels_bg", this.node).height = height;
        cc.find("reels", this.node).height = height;
        cc.find("reels_frame", this.node).height = height;
        cc.find("wild_move", this.node).height = height;
        cc.find("reels_bg/reel_bg6", this.node).active = col >= 6;
        cc.find("reels/reel6", this.node).active = col >= 6;
        this._topAniNode.scale = scale;
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) reel._symbols[j].setAnimationToTop(false);
        }
        this._topAniNode.destroyAllChildren();
        if (this._reels.length < col) {
          var reelCmp = this._cfg.scripts.Reels;
          var node = cc.find("reels/reel6", this.node);
          var scp = node.getComponent(reelCmp);
          if (!scp) {
            scp = node.addComponent(reelCmp);
            scp.Init(5, row, this._topAniNode);
          }
          this._reels.push(scp);
        } else this._reels.length > col && this._reels.pop();
        for (var _i = 0; _i < this._reels.length; _i++) this._reels[_i].SetCount(row);
        for (var _i2 = 1; _i2 <= col; _i2++) cc.find("reels/reel" + _i2 + "/mask/holder", this.node).scale = scale;
        cc.find("wild_move/layout", this.node).scale = scale;
        this._wild_move.SetCol(col);
        this._wild_move.SetRow(row);
        this.OnReelResized(this.node);
        for (var _i3 = 1; _i3 <= 5; _i3++) cc.find("reels_bg/reel_bg" + _i3 + "/line", this.node).x = (symbol_width - 1) / 2;
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        this._wilds = [];
        for (var i = 0; i < cards.length; i++) {
          cards[i] != WILD_X1 && cards[i] != WILD_X2 || this._wilds.push(i + 1);
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = cards[i] == BONUS;
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var j = 0; j < this._reels.length; j++) {
          var item = this._reels[j];
          var reelRes = reelResults[j];
          item.SetResult(reelRes);
        }
      },
      Sleep: function Sleep(time) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              return _context.abrupt("return", new Promise(function(resolve, reject) {
                _this.scheduleOnce(function() {
                  resolve();
                }, time);
              }));

             case 1:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      ShowDiamondFly: function ShowDiamondFly(fromWp) {
        this._diamond || (this._diamond = cc.instantiate(this.node.getChildByName("diamond")));
        if (!this._diamondEndPos) {
          var icon = cc.find("collect/icon", this.node);
          this._diamondEndPos = this.node.convertToNodeSpaceAR(icon.convertToWorldSpaceAR(cc.v2(0, 0)));
        }
        var diamond = cc.instantiate(this._diamond);
        diamond.active = true;
        diamond.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
        var pos = this.node.convertToNodeSpaceAR(fromWp);
        diamond.position = pos;
        diamond.parent = this.node;
        diamond.runAction(cc.sequence(cc.moveTo(.5, this._diamondEndPos), cc.destroySelf()));
      },
      SetReelsBg: function SetReelsBg(name) {},
      ShowReelsEmpty: function ShowReelsEmpty() {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < reel._symbols.length; j++) reel._symbols[j].ShowById(EMPTY);
        }
      },
      ShowRespinReels: function ShowRespinReels(data) {
        this.Backup();
        cc.find("collect", this.node).active = false;
        cc.find("Canvas/safe_node/bg_respin").active = true;
        this.SetReelsBg("theme140_reel06");
        this._topAniNode.destroyAllChildren();
        data || (data = this._gameInfo.bonusData);
        this._respin.ShowSpin(data);
        this._is_respin = true;
        cc.vv.gameData.setRespin(true);
      },
      ShowNormalReels: function ShowNormalReels() {
        cc.find("collect", this.node).active = true;
        cc.find("Canvas/safe_node/bg_respin").active = false;
        this.SetReelsBg("theme140_reel6");
        this.Resume();
        this._is_respin = false;
        cc.vv.gameData.setRespin(false);
      },
      ShowCollectDiamond: function ShowCollectDiamond() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var diamond, i, reel, j, symbol, spine, c;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!_this2._is_respin) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");

             case 2:
              if (_this2._gameInfo.collect) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return");

             case 4:
              if (!cc.vv.gameData.isLocked()) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return");

             case 6:
              diamond = false;
              for (i = 0; i < _this2._reels.length; i++) {
                reel = _this2._reels[i];
                for (j = 0; j < reel._symbols.length; j++) {
                  symbol = reel._symbols[j];
                  if (symbol.GetData()) {
                    _this2.ShowDiamondFly(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                    diamond = true;
                  }
                }
              }
              if (!diamond) {
                _context2.next = 18;
                break;
              }
              Global.SlotsSoundMgr.playEffect("base/fly");
              _context2.next = 12;
              return _this2.Sleep(.5);

             case 12:
              spine = cc.find("collect/icon/spine", _this2.node);
              spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _context2.next = 16;
              return _this2.Sleep(.2);

             case 16:
              c = _this2._gameInfo.collect;
              Global.TheUnicorn.Collect.setProgress(c.num / c.total, true);

             case 18:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      StartSuperFree: function StartSuperFree() {
        var freeCnt = 10;
        cc.vv.gameData.getCollectData().extra.indexOf(1) >= 0 && (freeCnt = 15);
        cc.vv.gameData.SetFreeTime(freeCnt);
        cc.vv.gameData.SetTotalFree(freeCnt);
        Global.TheUnicorn.Pop.showSuperFreeStart(freeCnt);
        this._is_super_free = true;
      },
      AfterSpinEnd: function AfterSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var nWin, nTotal, bonusData, can_spin, sel;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3.UpdateCollectMap(true);
              _context3.next = 3;
              return _this3.ShowCollectDiamond();

             case 3:
              _this3._gameInfo.scatterZJLuXian = null;
              _this3.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context3.next = 10;
              return new Promise(function(resolve) {
                _this3.ShowBottomWin(nWin, nTotal, true, resolve);
              });

             case 10:
              bonusData = _this3._gameInfo.bonusData;
              if (!(_this3._is_respin && bonusData && null != bonusData.cards)) {
                _context3.next = 14;
                break;
              }
              _context3.next = 14;
              return _this3._respin.UpdateSpin(bonusData);

             case 14:
              can_spin = true;
              if (!cc.vv.gameData.isFirstTriggerFree()) {
                _context3.next = 24;
                break;
              }
              _this3.playSymbolAnimation(SCATTER, "win");
              _this3._wilds = [];
              can_spin = false;
              _this3._bottomScript.ShowBtnsByState("moveing_1");
              _context3.next = 22;
              return _this3.Sleep(.8);

             case 22:
              Global.TheUnicorn.Pop.showFreeStart(cc.vv.gameData.GetFreeTime());
              _this3.Backup();

             case 24:
              if (cc.vv.gameData.isLastEndFree()) {
                _this3._wilds = [];
                _this3._wild_move.Clear();
                can_spin = false;
                _this3._bottomScript.ShowBtnsByState("moveing_1");
                _this3._is_super_free ? Global.TheUnicorn.Pop.showSuperFreeEnd(cc.vv.gameData.GetGameTotalFreeWin()) : Global.TheUnicorn.Pop.showFreeEnd(cc.vv.gameData.GetGameTotalFreeWin());
                _this3._is_super_free = false;
              }
              if (!(_this3._gameInfo.select && true == _this3._gameInfo.select.state)) {
                _context3.next = 39;
                break;
              }
              can_spin = false;
              sel = _this3._gameInfo.select;
              _this3._bottomScript.ShowBtnsByState("moveing_1");
              if (!(3 == sel.rtype)) {
                _context3.next = 38;
                break;
              }
              _this3.playSymbolAnimation(BONUS, "trigger");
              cc.vv.gameData.sendGameData({
                rtype: 3
              });
              _context3.next = 34;
              return _this3.Sleep(.8);

             case 34:
              _context3.next = 36;
              return Global.TheUnicorn.Pop.showRespinStart();

             case 36:
              _context3.next = 39;
              break;

             case 38:
              if (4 == sel.rtype) {
                _this3._respin.ShowPick(bonusData);
                cc.vv.gameData.SetRespinTime(0);
              } else if (1 == sel.rtype) {
                Global.SlotsSoundMgr.playEffect("map/full");
                Global.TheUnicorn.Pop.showWheelStart(_this3._gameInfo.collect.turn);
              } else if (2 == sel.rtype) {
                Global.SlotsSoundMgr.playEffect("map/full");
                _this3.StartSuperFree();
              }

             case 39:
              if (can_spin) {
                _this3.CanDoNextRound();
                _this3._is_respin && _this3._bottomScript.ShowBtnsByState("moveing_1");
              }

             case 40:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      OnWildMoveEnd: function OnWildMoveEnd() {
        this.SetStopTime(1.5);
      },
      UpdateFreeCnt: function UpdateFreeCnt() {
        var total = cc.vv.gameData.GetTotalFree();
        if (total > 0) {
          var rest = cc.vv.gameData.GetFreeTime();
          this._lbl_free_cnt || (this._lbl_free_cnt = cc.find("Canvas/safe_node/free/lbl_free_cnt").getComponent(cc.Label));
          this._lbl_free_cnt.string = "" + (total - rest);
          this._lbl_total_cnt || (this._lbl_total_cnt = cc.find("Canvas/safe_node/free/lbl_total_cnt").getComponent(cc.Label));
          this._lbl_total_cnt.string = "" + total;
        }
      },
      UpdateCollectMap: function UpdateCollectMap(val) {
        cc.find("collect/ball/map", this.node).getComponent(cc.Button).interactable = val;
      },
      StartMove: function StartMove() {
        Global.SlotsSoundMgr.playNormalBgm();
        cc.vv.gameData.GetTotalFree() > 0 && this._wilds.length > 0 && this._wild_move.StartMove(this._wilds, this.OnWildMoveEnd.bind(this));
        this.UpdateFreeCnt();
        this.UpdateCollectMap(false);
        this._is_respin && this._respin.OnStartSpin();
        this._super();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
        this._gameInfo.collect && cc.vv.gameData.setCollectData(this._gameInfo.collect);
        if (this._gameInfo.freeWildIndexs && this._wild_move.IsMoving()) {
          this._wild_move.SetResult(this._gameInfo.freeWildIndexs.move);
          this.SetStopTime(20);
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this._wild_move.SetVisiable(false);
        this.AfterSpinEnd();
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          Global.SlotsSoundMgr.playBgm("free/free_bgm");
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          this.UpdateFreeCnt();
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          this._bottomScript.SetWin(nTotal);
          this.CanDoNextRound();
        } else this._bottomScript.ShowFreeModel(false);
        cc.find("Canvas/safe_node/bg_base").active = !bFree;
        cc.find("Canvas/safe_node/bg_free").active = bFree;
        cc.find("Canvas/safe_node/layout/jackpot").active = !bFree;
        cc.find("Canvas/safe_node/free").active = bFree;
        cc.find("role", this.node).active = !bFree;
        cc.find("collect", this.node).active = !bFree;
        cc.find("logo", this.node).active = !bFree;
      },
      playSymbolAnimation: function playSymbolAnimation(symbolId, ani) {
        for (var i = 0; i < this._reels.length; i++) {
          var reel = this._reels[i];
          for (var j = 0; j < this._row; j++) {
            var symbol = reel._symbols[j];
            symbol && symbol.GetShowId() == symbolId && ("win" == ani ? symbol.playWinAnimation() : "trigger" == ani && symbol.playTriggerAnimation());
          }
        }
        Global.SlotsSoundMgr.playEffect("base/bell");
      },
      ReconnectShow: function ReconnectShow() {
        var rest = cc.vv.gameData.GetFreeTime();
        rest ? this.ShowGameview(true) : this.ShowGameview(false);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var sel = deskInfo.select;
        if (sel && true == sel.state) if (3 == sel.rtype) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          cc.vv.gameData.sendGameData({
            rtype: 3
          });
        } else if (1 == sel.rtype) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          Global.TheUnicorn.Wheel.showSpin(deskInfo.collect.turn);
        } else 2 == sel.rtype && this.StartSuperFree();
        var bonusData = deskInfo.bonusData;
        if (bonusData && bonusData.spin && bonusData.spin > 0) {
          this.ShowRespinReels(bonusData);
          cc.vv.gameData.SetRespinTime(bonusData.spin);
          cc.vv.gameData.setRespin(true);
        }
        if (bonusData && bonusData.pick && bonusData.pick > 0) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          this.ShowRespinReels(bonusData);
          this._respin.ShowPick(bonusData);
          cc.vv.gameData.SetRespinTime(0);
        }
        var collect = cc.vv.gameData.getCollectData();
        collect.col && collect.row && this.ResizeReels(collect.col, collect.row);
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        if (this._is_respin) return;
        this._super(colIdx);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheUnicorn_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bfa06jVQJhEfrvKEFAvloSo", "TheUnicorn_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      ShowRandomSymbol: function ShowRandomSymbol() {
        var val = cc.vv.gameData.getRandomSymbol();
        this.ShowById(val);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  TheUnicorn_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72574zg4XxH/qmNT9nZiK95", "TheUnicorn_Wheel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _wheel_node: null,
        _wheel_wheel: null,
        _btn_spin: null,
        _data: null
      },
      onLoad: function onLoad() {
        this._wheel_node = cc.find("safe_node/wheel", this.node);
        this._wheel_wheel = cc.find("layout/wheel", this._wheel_node);
        this._btn_spin = cc.find("layout/btn_spin", this._wheel_node);
        this._btn_spin.on("click", this.onClickSpin.bind(this));
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, this);
      },
      start: function start() {},
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.OnRecvMsgSubAction, false, this);
      },
      formatNumber: function formatNumber(num) {
        return num < 1e7 ? Global.FormatNumToComma(Math.floor(num / 1e3)) + "K" : Global.FormatNumToComma(Math.floor(num / 1e6)) + "M";
      },
      showSpin: function showSpin(res) {
        var _this = this;
        this._btn_spin.getComponent(cc.Button).interactable = true;
        this._btn_spin.getChildByName("zp_01").active = true;
        this._wheel_wheel.angle = 0;
        this._wheel_node.active = true;
        var layout = this._wheel_node.getChildByName("layout");
        cc.find("result", layout).active = false;
        Global.showAlertAction(layout, true, .1, 1, null);
        Global.SlotsSoundMgr.playEffect("map/wheel_in");
        var atlas = cc.vv.gameData.GetAtlasByName("wheel");
        for (var i = 0; i < res.length; i++) {
          var info = res[i];
          this._wheel_wheel.getChildByName("lbl_coin" + (i + 1)).getComponent(cc.Label).string = this.formatNumber(info.num);
          0 == i && (this._wheel_wheel.getChildByName("booster").getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme140_wheel_booster" + info.extra));
        }
        Global.SlotsSoundMgr.playBgm("map/wheel_bgm");
        cc.vv.gameData.checkAutoPlay(this._btn_spin, function() {
          Global.SlotsSoundMgr.playEffect("base/common_click");
          _this._btn_spin.getComponent(cc.Button).interactable = false;
          _this._btn_spin.getChildByName("zp_01").active = false;
          cc.vv.gameData.sendGameData({
            rtype: 1
          });
        });
      },
      hide: function hide() {
        var _this2 = this;
        var layout = this._wheel_node.getChildByName("layout");
        Global.showAlertAction(layout, true, .1, 1, function() {
          _this2._wheel_node.active = false;
          Global.SlotsSoundMgr.playNormalBgm(true);
        });
        Global.SlotsSoundMgr.playEffect("map/wheel_out");
      },
      onClickSpin: function onClickSpin(event) {
        Global.SlotsSoundMgr.playEffect("base/common_click");
        this._btn_spin.getComponent(cc.Button).interactable = false;
        this._btn_spin.stopAllActions();
        this._btn_spin.getChildByName("zp_01").active = false;
        cc.vv.gameData.sendGameData({
          rtype: 1
        });
      },
      StartSpin: function StartSpin(data) {
        var self = this;
        var idx = data.idx;
        var count = 4;
        var rot = 2880 + 360 / count * (count - (idx - 1));
        var zp_03 = this._btn_spin.getChildByName("zp_03");
        zp_03.active = true;
        zp_03.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._wheel_wheel.runAction(cc.sequence(cc.delayTime(1.25), cc.callFunc(function() {
          Global.SlotsSoundMgr.playEffect("map/wheel_spin");
        }), cc.rotateTo(6, rot).easing(cc.easeQuadraticActionInOut()), cc.callFunc(function() {
          cc.find("layout/result", self._wheel_node).active = true;
          Global.SlotsSoundMgr.playEffect("map/wheel_end");
        }), cc.delayTime(2.5), cc.callFunc(function() {
          Global.TheUnicorn.Pop.showWheelEnd(data.result);
        })));
      },
      OnRecvMsgSubAction: function OnRecvMsgSubAction(msg) {
        if (200 == msg.code && 1 == msg.data.rtype) {
          var data = msg.data.data;
          this.StartSpin(data);
          data.result.extra && cc.vv.gameData.addCollectBooster(data.result.extra);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  TheUnicorn_WildMove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02c5ew2xiZGlKUQE0k54FLQ", "TheUnicorn_WildMove");
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
      extends: cc.Component,
      properties: {
        _layout: null,
        _wildx1: null,
        _wildx2: null,
        _wilds: [],
        _result: null,
        _callback: null
      },
      onLoad: function onLoad() {
        this._layout = this.node.getChildByName("layout");
        this._wildx1 = this.node.getChildByName("wildx1");
        this._wildx2 = this.node.getChildByName("wildx2");
        this._moving = false;
        this._sw = 130;
        this._sh = 112;
        this._col = 5;
        this._row = 3;
        this.SetVisiable(false);
      },
      SetSymbolSize: function SetSymbolSize(width, height) {
        this._sw = width;
        this._sh = height;
      },
      SetCol: function SetCol(col) {
        this._col = col;
      },
      SetRow: function SetRow(row) {
        this._row = row;
      },
      SetVisiable: function SetVisiable(val) {
        var opacity = 0;
        val && (opacity = 255);
        this.node.opacity = opacity;
      },
      IsMoving: function IsMoving() {
        return this._moving;
      },
      SetWilds: function SetWilds(posIndexes, x2) {
        for (var i = 0; i < posIndexes.length; i++) {
          if (!this._wilds[i]) {
            var wild = null;
            wild = x2 ? cc.instantiate(this._wildx2) : cc.instantiate(this._wildx1);
            wild.parent = this._layout;
            wild.active = true;
            this._wilds[i] = wild;
          }
          this._wilds[i].position = this.GetPos(posIndexes[i]);
          this._wilds[i].zIndex = posIndexes[i];
        }
      },
      GetPos: function GetPos(idx) {
        var row = Math.floor((idx - 1) / this._col);
        var col = Math.floor((idx - 1) % this._col);
        var spaceX = 4 * col;
        return cc.v2(col * this._sw + this._sw / 2 + spaceX, (this._row - 1 - row) * this._sh + this._sh / 2);
      },
      StartMove: function StartMove(indexes, callback, x2) {
        Global.SlotsSoundMgr.playEffect("free/free_wild_land");
        this._moving = true;
        this.SetVisiable(true);
        this._result = null;
        this._callback = callback;
        this.SetWilds(indexes, x2);
        this._movecnt = 0;
        var _iterator = _createForOfIteratorHelper(this._wilds), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var wild = _step.value;
            var ske = wild.getComponent(sp.Skeleton);
            ske.setAnimation(0, "animation2", false);
            ske.addAnimation(0, "animation3", true);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.MoveRandom();
      },
      MoveRandom: function MoveRandom() {
        var movetime = 1.5;
        var _iterator2 = _createForOfIteratorHelper(this._wilds), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var wild = _step2.value;
            wild.stopAllActions();
            var randpos = this.GetPos(Global.random(1, this._col * this._row));
            wild.runAction(cc.moveTo(movetime, randpos));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.node.runAction(cc.sequence(cc.delayTime(movetime + .05), cc.callFunc(this.OnMoveRoundEnd.bind(this))));
        Global.SlotsSoundMgr.playEffect("free/free_wild_run");
      },
      MoveToTarget: function MoveToTarget() {
        var movetime = 1.5;
        for (var i = 0; i < this._result.length; i++) {
          var wild = this._wilds[i];
          if (wild) {
            wild.stopAllActions();
            var pos = this.GetPos(this._result[i]);
            wild.runAction(cc.sequence(cc.moveTo(movetime, pos), cc.callFunc(function(sender) {
              sender.getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
              Global.SlotsSoundMgr.stopEffectByName("free_wild_run");
            })));
          }
        }
        this.node.runAction(cc.sequence(cc.delayTime(movetime + .05), cc.callFunc(this.OnMoveEnd.bind(this))));
        Global.SlotsSoundMgr.playEffect("free/free_wild_run");
      },
      SetResult: function SetResult(res) {
        this._result = res;
      },
      Clear: function Clear() {
        this._layout.destroyAllChildren();
        this._wilds.length = 0;
      },
      OnMoveRoundEnd: function OnMoveRoundEnd() {
        this._movecnt += 1;
        this._movecnt >= 2 && this._result ? this.MoveToTarget() : this.MoveRandom();
      },
      OnMoveEnd: function OnMoveEnd() {
        this._moving = false;
        this._callback && this._callback();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "TheUnicorn_Cfg", "TheUnicorn_Collect", "TheUnicorn_GameData", "TheUnicorn_Logic", "TheUnicorn_Pop", "TheUnicorn_PrizePool", "TheUnicorn_PrizePool_jp", "TheUnicorn_Reel", "TheUnicorn_Respin", "TheUnicorn_Slots", "TheUnicorn_Symbol", "TheUnicorn_Wheel", "TheUnicorn_WildMove" ]);