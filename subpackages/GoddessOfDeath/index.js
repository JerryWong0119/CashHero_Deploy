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
  GoddessOfDeath_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b7acdGMXBIQ6XuygwVvZ2H", "GoddessOfDeath_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  GoddessOfDeath_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c741XiojhE04TDQo/C61pC", "GoddessOfDeath_Cfg");
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
          name: "animation12",
          zIndex: 100
        },
        win_ani_free: {
          name: "animation14",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation13",
          zIndex: 100
        },
        win_ani_free: {
          name: "animation15",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation0",
          zIndex: 100
        },
        stop_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9"
      }), _defineProperty(_symbol, 10, {
        node: "s10"
      }), _defineProperty(_symbol, 11, {
        node: "s11"
      }), _defineProperty(_symbol, 12, {
        node: "s12"
      }), _defineProperty(_symbol, 13, {
        node: "s13"
      }), _defineProperty(_symbol, 14, {
        node: "s14"
      }), _defineProperty(_symbol, 100, {
        node: "s100",
        win_node: "w100",
        fly_anim: "animation2",
        stop_ani: "animation1"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "GoddessOfDeath_Bottom",
        Slots: "GoddessOfDeath_Slots",
        Reels: "LMSlots_Reel_Base",
        Symbols: "GoddessOfDeath_Symbol",
        Sound: "GoddessOfDeath_Sound"
      },
      helpItems: [ "games/GoddessOfDeath/prefab/LMSlots_Help_item1", "games/GoddessOfDeath/prefab/LMSlots_Help_item2", "games/GoddessOfDeath/prefab/LMSlots_Help_item3", "games/GoddessOfDeath/prefab/LMSlots_Help_item4", "games/GoddessOfDeath/prefab/LMSlots_Help_item5", "games/GoddessOfDeath/prefab/LMSlots_Help_item6" ],
      col: 5,
      row: 3,
      scatterId: 3,
      wildId1: 1,
      wildId2: 2,
      collectId: 4,
      symbolPrefab: "GoddessOfDeath_Symbol",
      symbolSize: {
        height: 85
      },
      randomSymbols: [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
      kuang: "GoddessOfDeath_kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      AddAntiTime: 2,
      autoModelDelay: .5,
      bounce: true,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      commEffect: {
        path: "games/GoddessOfDeath/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ],
        clickSpin: "btn_click"
      },
      reelStateInfo: [ {
        id: [ 3 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/GoddessOfDeath/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2e3
      }, {
        id: [ 1, 2 ],
        mini: 10,
        counts: [ 0, 0, 1, 1, 1, 10 ],
        antiNode: "",
        path: "games/GoddessOfDeath/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_wild",
        antSound: "reel_notify",
        antSpeed: 1500
      } ],
      normalBgm: "base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  GoddessOfDeath_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d67eSeKa1FCY2HX9yX/QU+", "GoddessOfDeath_GameData");
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
      extends: require("LMSlots_GameData_Base"),
      properties: {
        mapInfo: null,
        progressData: null,
        _subGameWinCoin: 0,
        needBet: 0
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.mapInfo = this._deskInfo.mapInfo;
        this.progressData = this.mapInfo.progressData;
        this.needBet = this.mapInfo.needBet;
      },
      GetGameWin: function GetGameWin() {
        var winCoin = this._gameInfo.wincoin;
        if (this._gameInfo.mapFreeGameData && this._gameInfo.mapFreeGameData.length > 0) {
          winCoin = 0;
          var _iterator = _createForOfIteratorHelper(this._gameInfo.mapFreeGameData), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var d = _step.value;
              winCoin += d.winCoin;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return winCoin;
      },
      GetMaxBetIdx: function GetMaxBetIdx() {
        return this._deskInfo.mults.length;
      },
      SetSubGameData: function SetSubGameData(data) {
        this._subGame = data;
      },
      GetSubGameData: function GetSubGameData() {
        return this._subGame;
      },
      getSubGameWinCoin: function getSubGameWinCoin() {
        return this._subGameWinCoin;
      },
      setSubGameWinCoin: function setSubGameWinCoin(val) {
        this._subGameWinCoin = val;
      },
      isEnterMapGames: function isEnterMapGames() {
        return cc.vv.gameData.mapInfo.state != Global.GOLD_TREASURE_MAP_STATE.COLLECT_ENERGY;
      },
      isTriggerFreeGames: function isTriggerFreeGames() {
        return this._deskInfo.restFreeCount > 0 && this._deskInfo.restFreeCount == this._deskInfo.allFreeCount;
      },
      isFinishFreeGames: function isFinishFreeGames() {
        return 0 == this._deskInfo.restFreeCount && this._deskInfo.allFreeCount > 0;
      },
      isFreeGamesTime: function isFreeGamesTime() {
        return this._deskInfo.restFreeCount > 0 && this._deskInfo.restFreeCount < this._deskInfo.allFreeCount;
      },
      isMultipleSlots: function isMultipleSlots() {
        return this._gameInfo && this._gameInfo.bonusGame;
      },
      isOpenCollectProgress: function isOpenCollectProgress() {
        return this.GetBetIdx() >= this.needBet;
      },
      ReqSpin: function ReqSpin(curBetIdx) {
        var req = {
          c: MsgId.SLOT_START
        };
        req.betIndex = curBetIdx;
        req.gameid = this._gameId;
        cc.vv.NetManager.send(req, true);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          if (msg.spcode && 967 == msg.spcode) {
            cc.vv.FloatTip.show("\u6d41\u7a0b\u9519\u8bef\uff01\uff01\uff01");
            return;
          }
          if (msg.bonusGame) {
            msg.bonusGame.currResultCards || (msg.bonusGame.currResultCards = msg.resultCards);
            msg.freeResult || (msg.bonusGame.freeResult = msg.freeResult);
          }
          this._deskInfo.user.coin = msg.coin;
          this._gameInfo = msg;
          (msg.freeCnt || 0 == msg.freeCnt) && (this._deskInfo.restFreeCount = msg.freeCnt);
          (msg.allFreeCnt || 0 == msg.allFreeCnt) && (this._deskInfo.allFreeCount = msg.allFreeCnt);
          this.GetSlotsScript().onMsgSpine(msg);
          if (msg.mapInfo) {
            this.mapInfo = msg.mapInfo;
            this.progressData = msg.mapInfo.progressData;
          }
        }
      },
      reqSubGame: function reqSubGame(rType, choiceId) {
        var _this = this;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: {
              rtype: rType
            }
          };
          1 == rType && (req.data.choiceGameId = choiceId);
          3 == rType && (req.data.choiceId = choiceId);
          var resp = function resp(msg) {
            cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, resp, false, _this);
            console.log("reqSubGame-resp:", msg);
            200 === msg.code && msg.data.mapInfo && (_this.mapInfo = msg.data.mapInfo);
            res(msg);
          };
          cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, resp, _this);
          cc.vv.NetManager.send(req, true);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  GoddessOfDeath_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55de5dRTFFJ0ZMm2A3rUrZe", "GoddessOfDeath_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        var safe_node = cc.find("safe_node", this.node);
        var node_slotsMgr = cc.find("SlotsMgr", safe_node);
        var script_slotsMgr = node_slotsMgr.addComponent("GoddessOfDeath_SlotsMgr");
        script_slotsMgr.init(cc.find("slots", safe_node));
      },
      start: function start() {
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  GoddessOfDeath_MapCollectProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe0ebOz9e1EYqDBUafRZPGU", "GoddessOfDeath_MapCollectProgress");
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
        percent: 0,
        _isCollectState: false,
        lblCollectNum: cc.Label,
        progressBar: cc.ProgressBar,
        spine_renyu: sp.Skeleton,
        spine_tips: sp.Skeleton,
        collect_track_particle: cc.Node,
        spine_progress_complete: sp.Skeleton,
        spine_progress_add: sp.Skeleton
      },
      onLoad: function onLoad() {
        var progressData = cc.vv.gameData.progressData;
        this.setProgress(progressData.needCnt > 0 ? progressData.totalCnt / progressData.needCnt : 0);
        this.setCollectNum(progressData.needCnt - progressData.totalCnt);
        this._initListener();
        Global.GoddessOfDeathCollectProgress = this;
      },
      start: function start() {
        this.showCollect(cc.vv.gameData.isOpenCollectProgress());
      },
      _initListener: function _initListener() {
        Global.btnClickEvent(cc.find("btnUnlock", this.node), this.onBtnUnlockClicked, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      onBtnUnlockClicked: function onBtnUnlockClicked() {
        if (cc.vv.gameData.GetFreeTime() > 0) return;
        if (this.spine_tips.node.active && cc.vv.gameData.GetMaxBetIdx() >= cc.vv.gameData.needBet) {
          cc.vv.gameData.SetBetIdx(cc.vv.gameData.needBet);
          cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBetCoin();
          Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, cc.vv.gameData.GetTotalBet());
        }
      },
      setCollectNum: function setCollectNum(num) {
        this.lblCollectNum.string = num.toString();
      },
      setBtnsClickEnable: function setBtnsClickEnable(enable) {
        cc.find("btnMapInfo", this.node).getComponent(cc.Button).interactable = enable;
        cc.find("btnUnlock", this.node).getComponent(cc.Button).interactable = enable;
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(event) {
        this.showCollect(cc.vv.gameData.isOpenCollectProgress());
      },
      collectEnergy: function collectEnergy(globalPosArr, percent) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var endPos, promiseArr, progressData, count;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              percent = Math.max(0, Math.min(1, percent));
              if (!(globalPosArr.length <= 0)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");

             case 3:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.m1_fly);
              endPos = _this.spine_renyu.node.getPosition();
              promiseArr = [];
              globalPosArr.forEach(function(v) {
                var pos = _this.node.convertToNodeSpaceAR(v);
                var lz = cc.instantiate(_this.collect_track_particle);
                lz.parent = _this.node;
                lz.x = pos.x;
                lz.y = pos.y;
                lz.active = true;
                var p = lz.getComponent(cc.ParticleSystem);
                p.resetSystem();
                promiseArr.push(new Promise(function(res) {
                  cc.tween(lz).to(.5, {
                    x: endPos.x,
                    y: endPos.y
                  }, {
                    easing: "easeInOut"
                  }).call(function() {
                    lz.removeFromParent();
                    res();
                  }).start();
                }));
              });
              _context.next = 9;
              return Promise.all(promiseArr);

             case 9:
              _this.setProgress(percent);
              _this.spine_renyu.node.active = true;
              _this.spine_renyu.setAnimation(0, "animation", false);
              progressData = cc.vv.gameData.progressData;
              count = Math.max(0, progressData.needCnt - progressData.totalCnt);
              _this.setCollectNum(count);

             case 15:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showCollect: function showCollect(boo) {
        var _this2 = this;
        if (this._isCollectState != boo) if (boo) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.unlock);
          this.spine_tips.node.active = true;
          this.spine_tips.setAnimation(0, "animation1", false);
          this.spine_tips.setCompleteListener(function() {
            _this2.spine_tips.node.active = false;
            _this2.spine_tips.setCompleteListener(null);
          });
        } else {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.lock);
          this.spine_tips.node.active = true;
          this.spine_tips.setAnimation(0, "animation2", false);
          this.spine_tips.setCompleteListener(function() {
            _this2.spine_tips.setAnimation(0, "animation3", true);
            _this2.spine_tips.setCompleteListener(null);
          });
        }
        this._isCollectState = boo;
      },
      setProgress: function setProgress(percent) {
        var _this3 = this;
        if (percent > 0) {
          this.spine_progress_add.node.x = this.progressBar.node.width * percent;
          this.spine_progress_add.node.active = true;
          this.spine_progress_add.setAnimation(0, "animation", false);
          this.spine_progress_add.setCompleteListener(function() {
            _this3.spine_progress_add.node.active = false;
            _this3.spine_progress_add.setCompleteListener(null);
            if (percent >= 1) {
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect_full);
              _this3.spine_progress_complete.node.active = true;
              _this3.spine_progress_complete.setAnimation(0, "animation4", false);
              _this3.spine_progress_complete.setCompleteListener(function() {
                _this3.spine_progress_complete.node.active = false;
                _this3.spine_progress_complete.setCompleteListener(null);
              });
            }
          });
          this.scheduleOnce(function() {
            _this3.progressBar.progress = percent;
          }, .4);
        } else this.progressBar.progress = 0;
      },
      onBtnShowInfoClicked: function onBtnShowInfoClicked() {
        Global.GoddessOfDeathMap.enterMap(true, true);
      }
    });
    cc._RF.pop();
  }, {} ],
  GoddessOfDeath_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d0e9W2lvdBrrwcmjGPRaIR", "GoddessOfDeath_Map");
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
    var eventId = require("EventDef");
    eventId.GOLD_TREASURE_ENTER_MAP = "GOLD_TREASURE_ENTER_MAP";
    eventId.GOLD_TREASURE_EXIT_MAP = "GOLD_TREASURE_EXIT_MAP";
    var MapPathCfg = {
      1: {
        2: [ 2, [ 5, 6, 7, 8, 9, 10, 11 ] ],
        5: [ 6, [ 39, 38, 37, 36, 35, 34, 33 ] ],
        6: [ 1, [ 4, 3, 2, 1 ] ]
      },
      2: {
        3: [ 3, [ 12, 13, 14, 15, 16, 17, 18 ] ],
        1: [ 2, [ 11, 10, 9, 8, 7, 6, 5 ] ],
        6: [ 7, [ 43, 42, 41, 40 ] ]
      },
      3: {
        4: [ 4, [ 19, 20, 21, 22, 23, 24, 25 ] ],
        2: [ 3, [ 18, 17, 16, 15, 14, 13, 12 ] ],
        6: [ 8, [ 47, 46, 45, 44 ] ]
      },
      4: {
        5: [ 5, [ 26, 27, 28, 29, 30, 31, 32 ] ],
        3: [ 4, [ 25, 24, 23, 22, 21, 20, 19 ] ],
        6: [ 9, [ 51, 50, 49, 48 ] ]
      },
      5: {
        1: [ 6, [ 33, 34, 35, 36, 37, 38, 39 ] ],
        4: [ 5, [ 32, 31, 30, 29, 28, 27, 26 ] ],
        6: [ 10, [ 55, 54, 53, 52 ] ]
      },
      6: {
        1: [ 1, [ 1, 2, 3, 4 ] ],
        2: [ 7, [ 40, 41, 42, 43 ] ],
        3: [ 8, [ 44, 45, 46, 47 ] ],
        4: [ 9, [ 48, 49, 50, 51 ] ],
        5: [ 10, [ 52, 53, 54, 55 ] ]
      }
    };
    var MapRoadCfg = [ {
      idx: 1,
      pointNum: 4,
      lightAnim: "animation2"
    }, {
      idx: 2,
      pointNum: 7,
      lightAnim: "animation3"
    }, {
      idx: 3,
      pointNum: 7,
      lightAnim: "animation9"
    }, {
      idx: 4,
      pointNum: 7,
      lightAnim: "animation10"
    }, {
      idx: 5,
      pointNum: 7,
      lightAnim: "animation6"
    }, {
      idx: 6,
      pointNum: 7,
      lightAnim: "animation1"
    }, {
      idx: 7,
      pointNum: 4,
      lightAnim: "animation5"
    }, {
      idx: 8,
      pointNum: 4,
      lightAnim: "animation8"
    }, {
      idx: 9,
      pointNum: 4,
      lightAnim: "animation7"
    }, {
      idx: 10,
      pointNum: 4,
      lightAnim: "animation4"
    } ];
    var COMPLETE_SP = [ 0, 1, 5, 4, 3, 2 ];
    var g = require("GlobalVar");
    g.GOLD_TREASURE_SUBGAME = {
      BEKE: 1,
      YELLOW_FISH: 2,
      DICE: 3,
      WHEEL: 4,
      RENYU: 5,
      GOLDSHIP: 6
    };
    g.GOLD_TREASURE_MAP_RTYPE = {
      CHOOSE_SUBGAME: 1,
      COLLECT_WHEEL: 2,
      OPERATE_SUBGAME: 3
    };
    g.GOLD_TREASURE_MAP_STATE = {
      COLLECT_ENERGY: 0,
      CHOOSE_SUBGAME: 1,
      COLLECT_WHEEL: 2,
      ENTER_SUBGAME: 3
    };
    var CIsland = function CIsland(node, id) {
      var _this2 = this;
      this.node = node;
      this.id = id;
      this.spine = cc.find("spine", node);
      this.spine_light = cc.find("spine_light", node);
      this.spine_stroke = cc.find("spine_stroke", node);
      this.treasurebox_normal = cc.find("treasurebox", node);
      this.spine_treasurebox = cc.find("spine_treasurebox", node);
      this.spine_treasurebox.scale = .6;
      this.spine_treasurebox.active = false;
      this.treasurebox_open = cc.find("treasurebox_open", node);
      this.treasurebox_open.active = false;
      this.isEnabled = false;
      this.setClickCallback = function(callback) {
        var _this = this;
        Global.btnClickEvent(this.node, function() {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
          callback(_this);
        }, this);
      };
      this.setEnabled = function(isEnable) {
        this.isEnabled = isEnable;
        this.setLightActive(isEnable);
        if (isEnable) {
          this.setGray(false);
          this.setStrokeActive(false);
        }
      };
      this.setGray = function(isGray) {
        var color = isGray ? cc.Color.GRAY : cc.Color.WHITE;
        var _iterator = _createForOfIteratorHelper(this.node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _node = _step.value;
            _node.color = color;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.node.color = color;
        if (isGray) {
          this.setLightActive(false);
          this.setStrokeActive(false);
        }
      };
      this.setLightActive = function(isActive) {
        this.spine_light.active = isActive;
      };
      this.setStrokeActive = function(isActive) {
        this.spine_stroke.active = isActive;
      };
      this.setBoxNormal = function(isNormal) {
        this.treasurebox_normal.active = isNormal;
        this.treasurebox_open.active = !isNormal;
      };
      this.playOpenBox = function() {
        _this2.spine_treasurebox.active = true;
        _this2.spine_treasurebox.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
        _this2.spine_treasurebox.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this2.spine_treasurebox.active = false;
        });
        setTimeout(function() {
          _this2.setBoxNormal(false);
        }, 300);
      };
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _mapNode: null,
        _mapPathNode: null,
        _moveUser: null,
        _islandArr: null,
        _mapPointArr: null,
        _curIslandId: 0,
        _mIsLandCallback: null,
        _isLook: false
      },
      onLoad: function onLoad() {
        var _this3 = this;
        var _iterator2 = _createForOfIteratorHelper(this.node.children), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var subNode = _step2.value;
            subNode.active = false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this._mapNode = cc.find("mapMain", this.node);
        this._mapPathNode = cc.find("nodeMapPath", this._mapNode);
        this._moveUser = cc.find("theme163_map_user", this._mapPathNode);
        this._islandArr = [];
        for (var i = 1; i <= 6; i++) {
          var isLandObj = new CIsland(cc.find("theme163_map_dao" + i, this._mapPathNode), i);
          this._islandArr.push(isLandObj);
          isLandObj.setClickCallback(this.onIslandClicked.bind(this));
        }
        this._mapPointArr = [];
        for (var _i = 1; _i <= 10; _i++) {
          var road = cc.find("theme163_map_road" + _i, this._mapPathNode);
          road.getComponent(cc.Sprite).enabled = false;
          road.getChildByName("spine").active = false;
          var _iterator3 = _createForOfIteratorHelper(road.children), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var point = _step3.value;
              "spine" != point.name && (this._mapPointArr[parseInt(point.name.substr(-2, 2))] = point);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        Global.btnClickEvent(cc.find("uiChooseIslandSureTips/ui/btnYES", this._mapNode), this.onChooseYES.bind(this), this);
        Global.btnClickEvent(cc.find("uiChooseIslandSureTips/ui/btnNO", this._mapNode), this.onChooseNO.bind(this), this);
        Global.btnClickEvent(cc.find("btnHelp", this._mapNode), function() {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
          var uiHelp = cc.find("uiHelp", _this3._mapNode);
          uiHelp.active = !uiHelp.active;
          uiHelp.stopAllActions();
          uiHelp.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
            uiHelp.active = false;
          })));
          Global.btnClickEvent(uiHelp, function() {
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
            uiHelp.stopAllActions();
            uiHelp.active = false;
          }, _this3);
        }, this);
        Global.btnClickEvent(cc.find("backToGame", this._mapNode), function() {
          _this3.moveupMap();
          Global.SlotsSoundMgr.stopBgm();
        }, this);
        Global.GoddessOfDeathMap = this;
        this._bekeGameCmp = this.addComponent("GoddessOfDeath_subGameBeke");
        this._yellowFishGameCmp = this.addComponent("GoddessOfDeath_subGameYellowFish");
        this._diceGameCmp = this.addComponent("GoddessOfDeath_subGameDice");
        this._multWheelGameCmp = this.addComponent("GoddessOfDeath_subGameMultWheel");
        this._renyuGameCmp = this.addComponent("GoddessOfDeath_subGameRenyu");
        this._goldShipGameCmp = this.addComponent("GoddessOfDeath_subGameGoldShip");
        this._collectWheelCmp = this.addComponent("GoddessOfDeath_subGameCollectWheel");
        this.autoAdaptSize();
      },
      autoAdaptSize: function autoAdaptSize() {
        var canvasNode = cc.find("Canvas");
        var canvasWidth = canvasNode.width;
        var canvasHeight = canvasNode.height;
        if (canvasNode) {
          var designWidth = 720;
          var designHeight = 1560;
          var xScale = canvasWidth / designWidth;
          var yScale = canvasHeight / designHeight;
          this.node.scale = Math.min(xScale, yScale);
        }
      },
      reconnect: function reconnect() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this4.restoreMapByData();
              if (!(cc.vv.gameData.mapInfo.state != Global.GOLD_TREASURE_MAP_STATE.COLLECT_ENERGY)) {
                _context.next = 4;
                break;
              }
              _context.next = 4;
              return _this4.enterMap(false, false);

             case 4:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      restoreMapByData: function restoreMapByData() {
        var mapInfo = cc.vv.gameData.mapInfo;
        cc.find("backToGame", this._mapNode).active = this._isLook;
        for (var i = 0; i < 6; i++) {
          var complete_island = cc.find("nodePrizePool/complete_island_" + (i + 1), this._mapNode);
          complete_island && (complete_island.active = false);
          this.setIslandTipsActive(i + 1, false);
          this._islandArr[i].setEnabled(false);
          this._islandArr[i].setStrokeActive(false);
          this._islandArr[i].setGray(true);
        }
        for (var _i2 in mapInfo.completeGame) {
          var isLandId = mapInfo.completeGame[_i2];
          this._islandArr[isLandId - 1].setGray(false);
          this._islandArr[isLandId - 1].setBoxNormal(false);
          var spIsland = cc.find("nodePrizePool/complete_island_" + (parseInt(_i2) + 1), this._mapNode);
          spIsland.active = true;
          spIsland.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("map").getSpriteFrame("theme141_map_over_sp" + COMPLETE_SP[isLandId]);
        }
        if (mapInfo.nextGame > 0) {
          this._islandArr[mapInfo.nextGame - 1].setGray(false);
          this._islandArr[mapInfo.nextGame - 1].setStrokeActive(true);
        }
        for (var _i3 = 1; _i3 <= 10; _i3++) cc.find("theme163_map_road" + _i3, this._mapPathNode).getComponent(cc.Sprite).enabled = false;
        var roadNode = this.getCurRoadNode();
        roadNode && (roadNode.getComponent(cc.Sprite).enabled = true);
        var nextStepNode = this.getNextStepNode();
        nextStepNode && (this._moveUser.position = this.convertNodePosToLocalPos(nextStepNode, this._moveUser.parent));
      },
      enterMap: function enterMap(isLook, isMoveDown) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(0);
              _this5._isLook = isLook;
              Global.dispatchEvent(EventId.GOLD_TREASURE_ENTER_MAP);
              _this5.restoreMapByData(_this5._isLook);
              cc.find("grayMask", _this5.node).active = true;
              cc.find("chooseIslandTips", _this5._mapPathNode).active = !isLook;
              _this5._bTriggerSubGame = false;
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      if (!isMoveDown) {
                        _context2.next = 5;
                        break;
                      }
                      _context2.next = 3;
                      return _this5.movedownMap();

                     case 3:
                      _context2.next = 7;
                      break;

                     case 5:
                      _this5._mapNode.active = true;
                      _this5._mapNode.y = 0;

                     case 7:
                      if (isLook) {
                        _context2.next = 15;
                        break;
                      }
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.map_bgm);
                      _context2.next = 11;
                      return _this5.nextStep();

                     case 11:
                      _context2.next = 13;
                      return _this5.showCollectWheel();

                     case 13:
                      _context2.next = 15;
                      return _this5.exitMap();

                     case 15:
                      success();

                     case 16:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 8:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      exitMap: function exitMap() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this6.moveupMap();

             case 2:
              Global.SlotsSoundMgr.stopBgm();

             case 3:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      nextStep: function nextStep() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      _context5.next = 2;
                      return _this7.moveNextStep();

                     case 2:
                      _context5.next = 4;
                      return _this7.chooseNextSubGame();

                     case 4:
                      _context5.next = 6;
                      return _this7.triggerSubGame();

                     case 6:
                      success();

                     case 7:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      getCurRoadData: function getCurRoadData() {
        var mapInfo = cc.vv.gameData.mapInfo;
        var prevGame = mapInfo.prevGame || 6;
        var nextGame = mapInfo.nextGame;
        var curRoadData = MapPathCfg[prevGame][nextGame];
        return curRoadData;
      },
      getCurRoadNode: function getCurRoadNode() {
        var curRoadData = this.getCurRoadData();
        var road = null;
        curRoadData && (road = cc.find("theme163_map_road" + curRoadData[0], this._mapPathNode));
        return road;
      },
      getNextStepNode: function getNextStepNode() {
        var mapInfo = cc.vv.gameData.mapInfo;
        var curRoadData = this.getCurRoadData();
        if (0 == mapInfo.restStep) {
          if (0 == mapInfo.prevGame && 0 == mapInfo.nextGame) return this._islandArr[Global.GOLD_TREASURE_SUBGAME.GOLDSHIP - 1].node;
          return this._islandArr[mapInfo.nextGame - 1].node;
        }
        var pointArr = curRoadData[1];
        return this._mapPointArr[pointArr[pointArr.length - mapInfo.restStep]];
      },
      moveNextStep: function moveNextStep() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
                  var nextStepNode, mapInfo;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      nextStepNode = _this8.getNextStepNode();
                      if (!nextStepNode) {
                        _context7.next = 9;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.ship_move1);
                      _context7.next = 5;
                      return _this8.playActions(_this8._moveUser, [ cc.moveTo(1, _this8.convertNodePosToLocalPos(nextStepNode, _this8._moveUser.parent)) ]);

                     case 5:
                      mapInfo = cc.vv.gameData.mapInfo;
                      0 == mapInfo.restStep ? Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.reach) : Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.road);
                      _context7.next = 9;
                      return _this8.awaitTime(1);

                     case 9:
                      success();

                     case 10:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      convertNodePosToLocalPos: function convertNodePosToLocalPos(node, localNode) {
        return localNode.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
      },
      popUIChooseIslandTips: function popUIChooseIslandTips() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var uiTips, btnGo, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      uiTips = cc.find("uiChooseIslandTips", _this9._mapNode);
                      uiTips.active = true;
                      _context11.next = 4;
                      return _this9.setUIVisible(cc.find("ui", uiTips), true);

                     case 4:
                      btnGo = cc.find("ui/btnLetsGo", uiTips);
                      btnGo.getComponent(cc.Button).interactable = true;
                      btnGo.off("click");
                      self = _this9;
                      clickFunc = function() {
                        var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          var tips;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                             case 0:
                              btnGo.getComponent(cc.Button).interactable = false;
                              _context9.next = 3;
                              return self.setUIVisible(cc.find("ui", uiTips), false);

                             case 3:
                              uiTips.active = false;
                              tips = cc.find("chooseIslandTips", self._mapPathNode);
                              tips.active = true;
                              tips.stopAllActions();
                              tips.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .9), cc.scaleTo(.2, 1), cc.delayTime(2))));
                              success();

                             case 9:
                             case "end":
                              return _context9.stop();
                            }
                          }, _callee9);
                        }));
                        return function clickFunc() {
                          return _ref5.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btnGo, clickFunc);
                      Global.btnClickEvent(btnGo, _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) switch (_context10.prev = _context10.next) {
                           case 0:
                            btnGo.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context10.stop();
                          }
                        }, _callee10);
                      })), _this9);

                     case 11:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x4) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      findIslandToEnable: function findIslandToEnable() {
        var mapInfo = cc.vv.gameData.mapInfo;
        var nextGame = mapInfo.nextGame || 6;
        var nextGameList = MapPathCfg[nextGame];
        for (var i in nextGameList) {
          if (6 === parseInt(i) && mapInfo.completeGame.length < 5) continue;
          var island = this._islandArr[parseInt(i) - 1];
          island.setEnabled(true);
        }
      },
      chooseNextSubGame: function chooseNextSubGame() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              return _context15.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
                  var state, i, _i4;
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                     case 0:
                      state = cc.vv.gameData.mapInfo.state;
                      if (state == Global.GOLD_TREASURE_MAP_STATE.CHOOSE_SUBGAME) {
                        _this10.popUIChooseIslandTips();
                        for (i = 1; i <= 10; i++) cc.find("theme163_map_road" + i, _this10._mapPathNode).getComponent(cc.Sprite).enabled = false;
                        for (_i4 = 0; _i4 < 6; _i4++) {
                          _this10._islandArr[_i4].setEnabled(false);
                          _this10._islandArr[_i4].setStrokeActive(false);
                          _this10._islandArr[_i4].setGray(true);
                        }
                        _this10.findIslandToEnable();
                        _this10._mIsLandCallback = _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                          var resp, road;
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) switch (_context13.prev = _context13.next) {
                             case 0:
                              _context13.next = 2;
                              return cc.vv.gameData.reqSubGame(Global.GOLD_TREASURE_MAP_RTYPE.CHOOSE_SUBGAME, _this10._curIslandId);

                             case 2:
                              resp = _context13.sent;
                              if (200 === resp.code) {
                                road = _this10.getCurRoadNode();
                                road.getComponent(cc.Sprite).enabled = true;
                                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.path);
                                _this10.playSpine(road.getChildByName("spine"), null, MapRoadCfg[_this10.getCurRoadData()[0] - 1].lightAnim, false);
                                success();
                              } else AppLog.err("\u8bf7\u6c42\u6570\u636e\u9519\u8bef");

                             case 4:
                             case "end":
                              return _context13.stop();
                            }
                          }, _callee13);
                        }));
                      } else success();

                     case 2:
                     case "end":
                      return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function(_x5) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      triggerSubGame: function triggerSubGame() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              return _context17.abrupt("return", new Promise(function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success) {
                  var state, gameId, isEnterSubGame, completeGames, spIsland, oldPos;
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      state = cc.vv.gameData.mapInfo.state;
                      if (!(state == Global.GOLD_TREASURE_MAP_STATE.ENTER_SUBGAME)) {
                        _context16.next = 53;
                        break;
                      }
                      gameId = cc.vv.gameData.mapInfo.nextGame;
                      isEnterSubGame = true;
                      _context16.t0 = gameId;
                      _context16.next = _context16.t0 === Global.GOLD_TREASURE_SUBGAME.BEKE ? 7 : _context16.t0 === Global.GOLD_TREASURE_SUBGAME.YELLOW_FISH ? 10 : _context16.t0 === Global.GOLD_TREASURE_SUBGAME.DICE ? 13 : _context16.t0 === Global.GOLD_TREASURE_SUBGAME.WHEEL ? 16 : _context16.t0 === Global.GOLD_TREASURE_SUBGAME.RENYU ? 19 : _context16.t0 === Global.GOLD_TREASURE_SUBGAME.GOLDSHIP ? 22 : 28;
                      break;

                     case 7:
                      _context16.next = 9;
                      return _this11.getBekeCmp().enterGame();

                     case 9:
                      return _context16.abrupt("break", 30);

                     case 10:
                      _context16.next = 12;
                      return _this11.getYellowFishCmp().enterGame();

                     case 12:
                      return _context16.abrupt("break", 30);

                     case 13:
                      _context16.next = 15;
                      return _this11.getDiceCmp().enterGame();

                     case 15:
                      return _context16.abrupt("break", 30);

                     case 16:
                      _context16.next = 18;
                      return _this11.getMultWheelCmp().enterGame();

                     case 18:
                      return _context16.abrupt("break", 30);

                     case 19:
                      _context16.next = 21;
                      return _this11.getRenyuCmp().enterGame();

                     case 21:
                      return _context16.abrupt("break", 30);

                     case 22:
                      _context16.next = 24;
                      return _this11.getGoldShipCmp().enterGame();

                     case 24:
                      cc.vv.gameData.mapInfo.completeGame = [];
                      _this11.restoreMapByData();
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_full);
                      return _context16.abrupt("break", 30);

                     case 28:
                      isEnterSubGame = false;
                      return _context16.abrupt("break", 30);

                     case 30:
                      if (!isEnterSubGame) {
                        _context16.next = 53;
                        break;
                      }
                      _this11._bTriggerSubGame = true;
                      completeGames = cc.vv.gameData.mapInfo.completeGame;
                      if (!(gameId == completeGames[completeGames.length - 1])) {
                        _context16.next = 51;
                        break;
                      }
                      spIsland = cc.find("nodePrizePool/complete_island_" + completeGames.length, _this11._mapNode);
                      spIsland.active = true;
                      spIsland.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("map").getSpriteFrame("theme141_map_over_sp" + COMPLETE_SP[gameId]);
                      oldPos = spIsland.position;
                      spIsland.position = spIsland.parent.convertToNodeSpaceAR(_this11._mapPathNode.convertToWorldSpaceAR(_this11._islandArr[gameId - 1].node.position));
                      _context16.next = 41;
                      return _this11.awaitTime(.5);

                     case 41:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.box_open);
                      _this11._islandArr[gameId - 1].playOpenBox();
                      _context16.next = 45;
                      return _this11.awaitTime(.4);

                     case 45:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.island_collect);
                      _context16.next = 48;
                      return _this11.playActions(spIsland, [ cc.moveTo(.5, oldPos) ]);

                     case 48:
                      _this11.playSpine(spIsland.getChildByName("spine"), null, "animation", false);
                      _context16.next = 51;
                      return _this11.awaitTime(.5);

                     case 51:
                      _context16.next = 53;
                      return _this11.chooseNextSubGame();

                     case 53:
                      success();

                     case 54:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function(_x6) {
                  return _ref9.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context17.stop();
            }
          }, _callee17);
        }))();
      },
      isTriggerSubGame: function isTriggerSubGame() {
        return this._bTriggerSubGame;
      },
      showCollectWheel: function showCollectWheel() {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
             case 0:
              return _context19.abrupt("return", new Promise(function() {
                var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success) {
                  var state;
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      state = cc.vv.gameData.mapInfo.state;
                      if (!(state == Global.GOLD_TREASURE_MAP_STATE.COLLECT_WHEEL)) {
                        _context18.next = 5;
                        break;
                      }
                      _context18.next = 4;
                      return _this12.getCollectWheelCmp().enterGame();

                     case 4:
                      Global.GoddessOfDeathCollectProgress.setProgress(0);

                     case 5:
                      success();

                     case 6:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                }));
                return function(_x7) {
                  return _ref10.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context19.stop();
            }
          }, _callee19);
        }))();
      },
      setUIVisible: function setUIVisible(ui, isVisible) {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
             case 0:
              return _context21.abrupt("return", new Promise(function() {
                var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20(success) {
                  return regeneratorRuntime.wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                     case 0:
                      ui.active == isVisible && success();
                      if (!isVisible) {
                        _context20.next = 8;
                        break;
                      }
                      ui.scale = 0;
                      ui.active = isVisible;
                      _context20.next = 6;
                      return _this13.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 6:
                      _context20.next = 11;
                      break;

                     case 8:
                      ui.scale = 1;
                      _context20.next = 11;
                      return _this13.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0), cc.callFunc(function() {
                        ui.active = isVisible;
                      }) ]);

                     case 11:
                      success();

                     case 12:
                     case "end":
                      return _context20.stop();
                    }
                  }, _callee20);
                }));
                return function(_x8) {
                  return _ref11.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context21.stop();
            }
          }, _callee21);
        }))();
      },
      movedownMap: function movedownMap() {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_open);
              _context22.next = 3;
              return _this14.playActions(_this14._mapNode, [ cc.callFunc(function() {
                _this14._mapNode.y = 1500;
              }), cc.delayTime(.05), cc.moveTo(.5, cc.v2(0, 0)) ]);

             case 3:
             case "end":
              return _context22.stop();
            }
          }, _callee22);
        }))();
      },
      moveupMap: function moveupMap() {
        var _this15 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_close);
              _context23.next = 3;
              return _this15.playActions(_this15._mapNode, [ cc.callFunc(function() {
                _this15._mapNode.y = 0;
              }), cc.moveTo(.5, cc.v2(0, 1500)), cc.callFunc(function() {
                cc.find("grayMask", _this15.node).active = false;
                Global.dispatchEvent(EventId.GOLD_TREASURE_EXIT_MAP);
                Global.SlotsSoundMgr.stopBgm();
              }) ]);

             case 3:
             case "end":
              return _context23.stop();
            }
          }, _callee23);
        }))();
      },
      onIslandClicked: function onIslandClicked(islandObj) {
        Global.SlotsSoundMgr.playEffect("btn_click");
        if (islandObj.isEnabled) {
          this._curIslandId = islandObj.id;
          for (var i = 0; i < 6; i++) this._islandArr[i].setEnabled(false);
          this._islandArr[this._curIslandId - 1].setStrokeActive(true);
          cc.find("chooseIslandTips", this._mapPathNode).active = false;
          this.setUIChooseIslandSureTipsVisible(true);
        } else this.setIslandTipsActive(islandObj.id, true);
      },
      setUIChooseIslandSureTipsVisible: function setUIChooseIslandSureTipsVisible(isVisible) {
        var uiChooseIslandSureTips = cc.find("uiChooseIslandSureTips", this._mapNode);
        for (var i = 1; i <= 6; i++) cc.find("ui/theme141_d_choose_type" + i, uiChooseIslandSureTips).active = i == this._curIslandId;
        if (isVisible) {
          cc.find("uiChooseIslandSureTips/ui/btnYES", this._mapNode).getComponent(cc.Button).enabled = true;
          cc.find("uiChooseIslandSureTips/ui/btnNO", this._mapNode).getComponent(cc.Button).enabled = true;
          uiChooseIslandSureTips.active = isVisible;
          this.setUIVisible(uiChooseIslandSureTips.getChildByName("ui"), true);
          Global.SlotsSoundMgr.playEffect("popup_out");
        } else {
          this.setUIVisible(uiChooseIslandSureTips.getChildByName("ui"), false);
          uiChooseIslandSureTips.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
            uiChooseIslandSureTips.active = isVisible;
          })));
        }
      },
      onChooseYES: function onChooseYES() {
        cc.find("uiChooseIslandSureTips/ui/btnYES", this._mapNode).getComponent(cc.Button).enabled = false;
        cc.find("uiChooseIslandSureTips/ui/btnNO", this._mapNode).getComponent(cc.Button).enabled = false;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
        this.setUIChooseIslandSureTipsVisible(false);
        this._mIsLandCallback();
      },
      onChooseNO: function onChooseNO() {
        cc.find("uiChooseIslandSureTips/ui/btnYES", this._mapNode).getComponent(cc.Button).enabled = false;
        cc.find("uiChooseIslandSureTips/ui/btnNO", this._mapNode).getComponent(cc.Button).enabled = false;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
        this.setUIChooseIslandSureTipsVisible(false);
        this.findIslandToEnable();
        cc.find("chooseIslandTips", this._mapPathNode).active = true;
      },
      setIslandTipsActive: function setIslandTipsActive(id, active) {
        var islandTips = cc.find("islandTips" + id, this._mapPathNode);
        islandTips.active = active;
        islandTips.stopAllActions();
        islandTips.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
          islandTips.active = false;
        })));
      },
      playSpine: function playSpine(node, endCall) {
        var animationName = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "animation";
        var isLoop = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (node) {
          node.active = true;
          node.getComponent(sp.Skeleton).setAnimation(0, animationName, isLoop);
          isLoop || node.getComponent(sp.Skeleton).setCompleteListener(function() {
            endCall && endCall();
          });
        } else endCall && endCall();
      },
      playActions: function playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      awaitTime: function awaitTime(time) {
        var _this16 = this;
        return new Promise(function(success) {
          _this16.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      getBekeCmp: function getBekeCmp() {
        return this._bekeGameCmp;
      },
      getYellowFishCmp: function getYellowFishCmp() {
        return this._yellowFishGameCmp;
      },
      getDiceCmp: function getDiceCmp() {
        return this._diceGameCmp;
      },
      getMultWheelCmp: function getMultWheelCmp() {
        return this._multWheelGameCmp;
      },
      getGoldShipCmp: function getGoldShipCmp() {
        return this._goldShipGameCmp;
      },
      getRenyuCmp: function getRenyuCmp() {
        return this._renyuGameCmp;
      },
      getCollectWheelCmp: function getCollectWheelCmp() {
        return this._collectWheelCmp;
      }
    });
    cc._RF.pop();
  }, {
    EventDef: void 0,
    GlobalVar: void 0
  } ],
  GoddessOfDeath_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73017CDm2BNn5bdMXTqTzjN", "GoddessOfDeath_Pop");
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
        _showNode: null
      },
      onLoad: function onLoad() {},
      showFreeCount: function showFreeCount(freeCount) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  var free_game_start, ui, btnStart, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                      free_game_start = cc.find("free_game_start", _this.node);
                      free_game_start.active = true;
                      ui = free_game_start.getChildByName("ui");
                      ui.scale = 0;
                      ui.runAction(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.2, 1)));
                      cc.find("lblFreeCount", ui).getComponent(cc.Label).string = (freeCount || 10).toString();
                      btnStart = ui.getChildByName("btnStart");
                      btnStart.getComponent(cc.Button).enabled = false;
                      _context3.next = 11;
                      return _this.delayTime(1);

                     case 11:
                      btnStart.getComponent(cc.Button).enabled = true;
                      btnStart.off("click");
                      self = _this;
                      clickFunc = function() {
                        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                             case 0:
                              btnStart.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                              ui.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.5, 0)));
                              self.showTransitionFreePage();
                              _context.next = 6;
                              return self.delayTime(1);

                             case 6:
                              free_game_start.active = false;
                              Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
                              success();

                             case 9:
                             case "end":
                              return _context.stop();
                            }
                          }, _callee);
                        }));
                        return function clickFunc() {
                          return _ref2.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btnStart, clickFunc);
                      Global.btnClickEvent(btnStart, _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                           case 0:
                            btnStart.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context2.stop();
                          }
                        }, _callee2);
                      })), _this);

                     case 17:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showFreeAgain: function showFreeAgain(freeCount) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var free_game_again, ui;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                      free_game_again = cc.find("free_game_again", _this2.node);
                      free_game_again.active = true;
                      ui = free_game_again.getChildByName("ui");
                      ui.scale = 0;
                      ui.runAction(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.2, 1)));
                      cc.find("lblFreeCount", ui).getComponent(cc.Label).string = (freeCount || 10).toString();
                      _context5.next = 9;
                      return _this2.delayTime(2);

                     case 9:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                      ui.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.5, 0)));
                      _context5.next = 13;
                      return _this2.delayTime(1);

                     case 13:
                      free_game_again.active = false;
                      success();

                     case 15:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x2) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      showTransitionFreePage: function showTransitionFreePage() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var freeGameLoading;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_free);
              freeGameLoading = cc.find("freeGameLoading", _this3.node);
              _this3.playSpine(freeGameLoading, function() {
                freeGameLoading.active = false;
              });

             case 3:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      showLoadingPage: function showLoadingPage() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_bonus);
                var subGameLoading = cc.find("subGameLoading", _this4.node);
                subGameLoading.active = true;
                var spineNode = cc.find("spineNode", subGameLoading);
                _this4.playSpine(spineNode, function() {
                  subGameLoading.active = false;
                  success();
                });
              }));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showSttlDialog: function showSttlDialog() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var free_game_win, ui, btnCollect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      free_game_win = cc.find("free_game_win", _this5.node);
                      free_game_win.active = true;
                      ui = free_game_win.getChildByName("ui");
                      ui.scale = 0;
                      ui.getChildByName("lblWinCoin").getComponent(cc.Label).string = "";
                      btnCollect = ui.getChildByName("btnCollect");
                      btnCollect.getComponent(cc.Button).enabled = false;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
                      _context11.next = 10;
                      return _this5.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 10:
                      Global.doRoallNumEff(ui.getChildByName("lblWinCoin"), 0, cc.vv.gameData._gameInfo.freeWinCoin || 0, 3, null, null, 0, true);
                      btnCollect.getComponent(cc.Button).enabled = true;
                      btnCollect.off("click");
                      self = _this5;
                      clickFunc = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                             case 0:
                              btnCollect.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                              ui.getChildByName("lblWinCoin").getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData._gameInfo.freeWinCoin || 0);
                              _context9.next = 5;
                              return self.delayTime(.1);

                             case 5:
                              free_game_win.active = false;
                              self.showTransitionFreePage();
                              _context9.next = 9;
                              return self.delayTime(1);

                             case 9:
                              Global.SlotsSoundMgr.stopBgm();
                              success();

                             case 11:
                             case "end":
                              return _context9.stop();
                            }
                          }, _callee9);
                        }));
                        return function clickFunc() {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btnCollect, clickFunc);
                      Global.btnClickEvent(btnCollect, _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) switch (_context10.prev = _context10.next) {
                           case 0:
                            btnCollect.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context10.stop();
                          }
                        }, _callee10);
                      })), _this5);

                     case 17:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x3) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      showCollectCoinJackpotWin: function showCollectCoinJackpotWin(winNum, jackpotId) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success) {
                  var winNode, ui, logo;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      winNode = cc.find("collect_coin_jackpot_win", _this6.node);
                      winNode.active = true;
                      ui = winNode.getChildByName("ui");
                      ui.scale = 0;
                      logo = cc.find("jackpot_logo", ui);
                      logo.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("dialog_jackpot").getSpriteFrame("theme141_p_j_type" + (5 - jackpotId));
                      ui.getChildByName("lblWinCoin").getComponent(cc.Label).string = "";
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.win_jp_show);
                      _context13.next = 10;
                      return _this6.playActions(ui, [ cc.scaleTo(.2, 1.3), cc.scaleTo(.08, 1) ]);

                     case 10:
                      Global.doRoallNumEff(ui.getChildByName("lblWinCoin"), 0, winNum, 3, null, null, 0, true);
                      _context13.next = 13;
                      return _this6.delayTime(5);

                     case 13:
                      ui.scale = 1;
                      Global.SlotsSoundMgr.playEffect("popup_out");
                      _context13.next = 17;
                      return _this6.playActions(ui, [ cc.scaleTo(.08, 1.3), cc.scaleTo(.2, 0) ]);

                     case 17:
                      winNode.active = false;
                      success();

                     case 19:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function(_x4) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      delayTime: function delayTime(time) {
        var _this7 = this;
        return new Promise(function(res, rej) {
          _this7.scheduleOnce(function() {
            res();
          }, time);
        });
      },
      playSpine: function playSpine(node, endCall) {
        var animationName = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "animation";
        var isLoop = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (node) {
          node.active = true;
          node.getComponent(sp.Skeleton).setAnimation(0, animationName, isLoop);
          isLoop || node.getComponent(sp.Skeleton).setCompleteListener(function() {
            endCall && endCall();
          });
        } else endCall && endCall();
      },
      playActions: function playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  GoddessOfDeath_SlotsMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7aa4QycHZMVZxTeKzA2qUF", "GoddessOfDeath_SlotsMgr");
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
        _slotsTemplate: null,
        _slotsCacheList: null,
        _slotsActiveList: null,
        _curSlotId: 0,
        _collect_jackpot: 0,
        _spine_role: 0,
        _gameInfo: null
      },
      onLoad: function onLoad() {
        this._slotsCacheList = [];
        this._slotsActiveList = [];
        this._collect_jackpot = cc.find("collect_jackpot", this.node.parent);
        this._bonusBottom = cc.find("bonusBottom", this.node);
        this._bonusBottom.zIndex = 200;
        this._bonusBottom.active = false;
        Global.SlotsMgr = this;
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvNetMsgBonusGame, false, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvNetMsgBonusGame, false, this);
      },
      init: function init(slotsTemplate) {
        this._slotsTemplate = slotsTemplate;
        this._slotsTemplate.getComponent(cc.Widget).updateAlignment();
      },
      start: function start() {
        var _this = this;
        this._slotsTemplate.active = false;
        this.add1Slot();
        this.setCurActiveSlot(0);
        this.scheduleOnce(function() {
          _this._collect_jackpot.position = _this.getCollectJackpotPos();
        }, .03);
        this.showBottomInfo(false);
        this.restoreByServerData();
      },
      onRcvNetMsgBonusGame: function onRcvNetMsgBonusGame(msg) {
        if (200 === msg.code) {
          var data = msg.data;
          if (4 == data.rtype) {
            cc.vv.gameData.OnRcvNetSpine(msg.data);
            this._gameInfo && this._gameInfo.bonusGame && this._gameInfo.bonusGame.scatterCnt > 0 && this.showBottomInfo(true);
          }
        }
      },
      restoreByServerData: function restoreByServerData() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        if (deskInfo.bonusGame) {
          var bonusGame = deskInfo.bonusGame;
          for (var i = 1; i < bonusGame.currSlotIdx; i++) {
            var slotScript = this.add1Slot();
            slotScript.node.getComponent(cc.Widget).enabled = false;
            slotScript.node.y = this._slotsActiveList[0].node.y + slotScript.node.height * slotScript.node.scaleY * i;
          }
          this.setCurActiveSlot(bonusGame.currSlotIdx - 1);
          this._collect_jackpot.y = this.getCollectJackpotPos().y;
          if (!cc.vv.gameData.isEnterMapGames()) {
            this.startMoveSlots();
            deskInfo.bonusGame = null;
          }
          this._gameInfo && this._gameInfo.bonusGame && this._gameInfo.bonusGame.scatterCnt > 0 && this.showBottomInfo(true);
        }
      },
      setGameInfo: function setGameInfo(gameInfo) {
        this._gameInfo = gameInfo;
      },
      OnStartMove: function OnStartMove() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var bonusGame = this._gameInfo ? this._gameInfo.bonusGame : deskInfo.bonusGame;
        if (bonusGame) if (bonusGame.currSlotIdx + 1 === bonusGame.nextSlotIdx) {
          cc.vv.gameData.GetSlotsScript().SetStopTime(2);
          this.moveSlotUp();
        } else if (bonusGame.currSlotIdx === bonusGame.nextSlotIdx + 1) {
          cc.vv.gameData.GetSlotsScript().SetStopTime(2);
          this.moveSlotDown();
        } else cc.vv.gameData.GetSlotsScript().SetStopTime(1);
      },
      OnStopMove: function OnStopMove() {
        if (this._gameInfo && this._gameInfo.bonusGame) {
          this.startMoveSlots();
          var deskInfo = cc.vv.gameData.getDeskInfo();
          deskInfo.bonusGame = null;
        }
      },
      startMoveSlots: function startMoveSlots() {
        var _this2 = this;
        var bonusGame = this._gameInfo ? this._gameInfo.bonusGame : cc.vv.gameData.getDeskInfo().bonusGame;
        bonusGame.currSlotIdx + 1 === bonusGame.nextSlotIdx && this.add1Slot();
        cc.vv.gameData.GetSlotsScript().stopSymboleWinEff();
        this.setCurActiveSlot(bonusGame.nextSlotIdx - 1);
        cc.vv.gameData.GetSlotsScript().StartMove();
        this.scheduleOnce(function() {
          _this2.reqBonusGame();
        }, 1);
      },
      reqBonusGame: function reqBonusGame() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA,
          gameid: cc.vv.gameData.getGameId(),
          data: {
            rtype: 4
          }
        };
        cc.vv.NetManager.send(req, true);
      },
      moveSlotUp: function moveSlotUp() {
        if (this._curSlotId <= 0) return;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.reel_up);
        var slotScript = this._slotsActiveList[this._curSlotId];
        var spineSlotUp = slotScript.node.getChildByName("spineSlotUp");
        this.playSpine(spineSlotUp);
        slotScript.node.getComponent(cc.Widget).enabled = false;
        var startPos = this._slotsActiveList[this._curSlotId - 1].node.position;
        slotScript.node.position = startPos;
        var interval = .8;
        var targetPosY = startPos.y + slotScript.node.height * slotScript.node.scaleY;
        cc.tween(slotScript.node).to(interval, {
          y: targetPosY
        }).call(function() {
          spineSlotUp.active = false;
        }).start();
        cc.tween(this._collect_jackpot).to(interval, {
          y: targetPosY + 180
        }).start();
        var targetScale = [ .86, .7, 0 ];
        var posY = [ 282, 182, 250 ];
      },
      moveSlotDown: function moveSlotDown() {
        var _this3 = this;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.reel_down);
        var slotScript = this._slotsActiveList[this._slotsActiveList.length - 1];
        if (!slotScript) return;
        var downSlotScript = this._slotsActiveList[this._slotsActiveList.length - 2];
        if (!downSlotScript) return;
        var spineSlotDown = downSlotScript.node.getChildByName("spineSlotDown");
        this.playSpine(spineSlotDown);
        var interval = .8;
        cc.tween(slotScript.node).to(interval, {
          y: downSlotScript.node.y
        }).call(function() {
          spineSlotDown.active = false;
          _this3.delete1Slot();
        }).start();
        cc.tween(this._collect_jackpot).to(interval, {
          y: downSlotScript.node.y + 180
        }).start();
        var targetScale = [ .86, .7, 0 ];
        var posY = [ 282, 182 ];
      },
      add1Slot: function add1Slot() {
        var slotScript = null;
        slotScript = this._slotsCacheList.length > 0 ? this._slotsCacheList.pop() : this.createSlot();
        slotScript.node.zIndex = 100 - this._slotsActiveList.length;
        slotScript.node.name = "slots" + this._slotsActiveList.length;
        slotScript.node.active = true;
        this._slotsActiveList.push(slotScript);
        return slotScript;
      },
      createSlot: function createSlot() {
        var slotNode = cc.instantiate(this._slotsTemplate);
        slotNode.active = true;
        slotNode.parent = this.node;
        var cfg = cc.vv.gameData.getGameCfg();
        var slotScript = slotNode.getComponent(cfg.scripts.Slots);
        return slotScript;
      },
      delete1Slot: function delete1Slot() {
        var slotScript = this._slotsActiveList.pop();
        slotScript.node.active = false;
        this._slotsCacheList.push(slotScript);
      },
      setCurActiveSlot: function setCurActiveSlot(slotId) {
        if (slotId >= this._slotsActiveList.length) return;
        this._curSlotId = slotId;
        var _iterator = _createForOfIteratorHelper(this._slotsActiveList), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var slotScpt = _step.value;
            slotScpt.enabled = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var slotScript = this._slotsActiveList[this._curSlotId];
        slotScript.enabled = true;
        cc.vv.gameData.SetSlotsScript(slotScript);
      },
      getCurActiveSlotScript: function getCurActiveSlotScript() {
        return this._slotsActiveList[this._curSlotId];
      },
      getCollectJackpotPos: function getCollectJackpotPos() {
        var lastSlot = this._slotsActiveList[this._slotsActiveList.length - 1].node;
        return cc.v2(this._collect_jackpot.position.x, lastSlot.position.y + 180);
      },
      showBottomInfo: function showBottomInfo(bShow) {
        if (bShow == this._bonusBottom.active) return;
        var resetCnt = 0;
        !this._bonusBottom.active && bShow && (resetCnt = 3);
        this._bonusBottom.active = bShow;
        this._bonusBottom.y = this._slotsActiveList[0].node.y - 120;
        var spr_txt_scatter = cc.find("spr_txt_scatter", this._bonusBottom);
        spr_txt_scatter.active = true;
        var spr_txt_freetimes = cc.find("spr_txt_freetimes", this._bonusBottom);
        spr_txt_freetimes.active = false;
        if (this._gameInfo && this._gameInfo.bonusGame) {
          0 == resetCnt && (resetCnt = 3 - (this._gameInfo.bonusGame.scatterCnt || 0));
          cc.find("spr_txt_scatter/lblScatterNum", this._bonusBottom).getComponent(cc.Label).string = resetCnt.toString();
          if (resetCnt <= 0) {
            spr_txt_scatter.active = false;
            spr_txt_freetimes.active = true;
          }
        }
      },
      setBottomInfoScatterCnt: function setBottomInfoScatterCnt(scatterNum) {
        var resetCnt = 3 - scatterNum;
        var spr_txt_scatter = cc.find("spr_txt_scatter", this._bonusBottom);
        var lblScatterNum = cc.find("lblScatterNum", spr_txt_scatter);
        var spr_txt_freetimes = cc.find("spr_txt_freetimes", this._bonusBottom);
        var lblFreeTimes = cc.find("lblFreeTimes", spr_txt_freetimes);
        if (resetCnt > 0) {
          spr_txt_scatter.active = true;
          spr_txt_freetimes.active = false;
          this.scheduleOnce(function() {
            lblScatterNum.getComponent(cc.Label).string = resetCnt.toString();
          }, .5);
          var spineBomb = cc.find("spineBomb", spr_txt_scatter);
          this.playSpine(spineBomb, "animation", false, function() {
            spineBomb.active = false;
          });
        } else if (0 == resetCnt) {
          spr_txt_scatter.active = true;
          spr_txt_freetimes.active = false;
          var spine_switch = cc.find("spine_switch", this._bonusBottom);
          this.playSpine(spine_switch, "animation", false, function() {
            spine_switch.active = false;
          });
          this.scheduleOnce(function() {
            spr_txt_scatter.active = false;
            spr_txt_freetimes.active = true;
            lblFreeTimes.getComponent(cc.Label).string = "10";
          }, .5);
        } else if (resetCnt < 0) {
          spr_txt_scatter.active = false;
          spr_txt_freetimes.active = true;
          this.scheduleOnce(function() {
            lblFreeTimes.getComponent(cc.Label).string = (10 + 2 * -resetCnt).toString();
          }, .5);
          var _spineBomb = cc.find("spineBomb", spr_txt_freetimes);
          this.playSpine(_spineBomb, "animation", false, function() {
            _spineBomb.active = false;
          });
        }
      },
      getBottomRestScatterCnt: function getBottomRestScatterCnt() {
        var restCnt = parseInt(cc.find("spr_txt_scatter/lblScatterNum", this._bonusBottom).getComponent(cc.Label).string || 0);
        if (this._gameInfo.bonusGame.scatterCnt <= 3) {
          restCnt = 3 - this._gameInfo.bonusGame.scatterCnt;
          restCnt = Math.max(restCnt, 0);
        }
        return restCnt;
      },
      collectScatter: function collectScatter(globalPosArr) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var scattterSymbol, endPos, promiseArr;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(globalPosArr.length <= 0)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              if (!(_this4.getBottomRestScatterCnt() <= 0)) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return");

             case 4:
              _this4.showBottomInfo(true);
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_collect);
              scattterSymbol = cc.find("spr_scatter", _this4._bonusBottom);
              endPos = cc.find("scatter_pos", _this4._bonusBottom).getPosition();
              promiseArr = [];
              globalPosArr.forEach(function(v) {
                var pos = _this4._bonusBottom.convertToNodeSpaceAR(v);
                var lz = cc.instantiate(scattterSymbol);
                lz.parent = _this4._bonusBottom;
                lz.x = pos.x;
                lz.y = pos.y;
                lz.active = true;
                promiseArr.push(new Promise(function(res) {
                  lz.runAction(cc.sequence(cc.spawn(cc.moveTo(.5, endPos).easing(cc.easeSineInOut()), cc.scaleTo(.5, .3)), cc.callFunc(function() {
                    res();
                  }), cc.removeSelf()));
                }));
              });
              _context.next = 12;
              return Promise.all(promiseArr);

             case 12:
              _this4.setBottomInfoScatterCnt(_this4._gameInfo.bonusGame.scatterCnt);

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playSpine: function playSpine(node) {
        var animationName = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animation";
        var isLoop = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        var endCall = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return new Promise(function(success) {
          if (node) {
            node.active = true;
            AppLog.log("\u64ad\u653e\u8282\u70b9[" + node.parent.name + "/" + node.name + "]\u7684spine\u52a8\u4f5c: " + animationName);
            node.getComponent(sp.Skeleton).setAnimation(0, animationName, isLoop);
            isLoop ? success() : node.getComponent(sp.Skeleton).setCompleteListener(function() {
              endCall && endCall();
              success();
            });
          } else {
            endCall && endCall();
            success();
          }
        });
      },
      playActions: function playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      awaitTime: function awaitTime(time) {
        var _this5 = this;
        return new Promise(function(success) {
          _this5.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  GoddessOfDeath_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44df09QUJNIyrP5AODQMFQW", "GoddessOfDeath_Slots");
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
        _popUIScript: null,
        _isCanStopSlot: false,
        _isSpinEndEnterMap: false
      },
      RegisterEvent: function RegisterEvent() {
        Global.registerEvent(EventId.GOLD_TREASURE_ENTER_MAP, this.onRcvEvtEnterMap, this);
        Global.registerEvent(EventId.GOLD_TREASURE_EXIT_MAP, this.onRcvEvtExitMap, this);
      },
      onLoad: function onLoad() {
        this._super();
        var collect_jackpot = cc.find("Canvas/safe_node/collect_jackpot");
        var pointListNode = cc.find("pointList", collect_jackpot);
        for (var i = 1; i <= 12; i++) cc.find("Point" + i, pointListNode).active = false;
        var PointTemplate = cc.find("PointTemplate", pointListNode);
        PointTemplate.active = false;
        if (!pointListNode.getChildByName("JackpotPoint1")) for (var _i = 1; _i <= 12; _i++) {
          var point = cc.instantiate(PointTemplate);
          point.active = true;
          point.parent = pointListNode;
          point.name = "JackpotPoint" + _i;
          point.position = cc.find("Point" + _i, pointListNode).position;
        }
      },
      Init: function Init() {
        var bReconnect = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this.createReels(this._col, this._row);
        this._bottomScript.ShowBtnsByState("idle");
        this.RegisterEvent();
        bReconnect && this.ReconnectShow();
        this._popUIScript = cc.find("Canvas/safe_node/node_pop_ui").addComponent("GoddessOfDeath_Pop");
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rest;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              rest = cc.vv.gameData.GetFreeTime();
              rest ? _this.ShowGameview(true, false) : _this.ShowGameview(false);
              if (!(cc.vv.gameData.mapInfo.state != Global.GOLD_TREASURE_MAP_STATE.COLLECT_ENERGY)) {
                _context.next = 9;
                break;
              }
              _this._bottomScript.ShowBtnsByState("moveing_1");
              _this._isSpinEndEnterMap = false;
              _context.next = 7;
              return Global.GoddessOfDeathMap.enterMap();

             case 7:
              _context.next = 10;
              break;

             case 9:
              if (cc.vv.gameData.getDeskInfo().bonusGame) ; else if (rest) {
                Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
                _this.CanDoNextRound();
              }

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      StartMove: function StartMove() {
        this._isCanStopSlot = false;
        this._bStopRightnow = null;
        this._gameInfo = null;
        Global.SlotsSoundMgr.playNormalBgm();
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        Global.GoddessOfDeathCollectProgress && Global.GoddessOfDeathCollectProgress.setBtnsClickEnable(false);
        this._stopTime = this.GetStopTime();
        this.removeAllCollectCoinsEff();
        Global.SlotsMgr && Global.SlotsMgr.OnStartMove();
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
            res.data = this.getCoinData(i + 1);
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) {
          var item = this._reels[_i2];
          var reelRes = reelResults[_i2];
          item.SetResult(reelRes);
        }
      },
      getCoinData: function getCoinData(idx) {
        if (this._gameInfo.jackpot) {
          this._gameInfo.jackpot.coinIdxs = this._gameInfo.jackpot.coinIdxs || [];
          var _iterator = _createForOfIteratorHelper(this._gameInfo.jackpot.coinIdxs), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var pos = _step.value;
              if (pos == idx) return {
                t: "coin",
                num: 1
              };
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return null;
      },
      CanStopSlot: function CanStopSlot() {
        return this._isCanStopSlot;
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        if (this._gameInfo.jackpot && this._gameInfo.jackpot.jackpotId && Global.random0To1() > .5) {
          this._isCanStopSlot = false;
          this.playMoveShipBonusEff();
        } else {
          this._isCanStopSlot = true;
          var cards = msg.resultCards;
          this.SetSlotsResult(cards);
          this.SetReelStateInfo(cards);
        }
        Global.SlotsMgr && Global.SlotsMgr.setGameInfo(this._gameInfo);
      },
      playMoveShipBonusEff: function playMoveShipBonusEff() {
        var _this2 = this;
        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.transition_bonus);
        var haila = cc.find("Canvas/safe_node/sishenhaila");
        haila.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
        haila.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this2._isCanStopSlot = true;
          _this2.SetSlotsResult(_this2._gameInfo.resultCards);
          _this2.SetReelStateInfo(_this2._gameInfo.resultCards);
          haila.getComponent(sp.Skeleton).setCompleteListener(null);
          haila.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        });
      },
      stopSymboleWinEff: function stopSymboleWinEff() {
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 3; j++) {
            var symbolScript = sys[j];
            symbolScript.ShowKuang(false);
            symbolScript.stopWinTweenAction();
            symbolScript.setAnimationToTop(false);
          }
        }
      },
      showScatter: function showScatter() {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
            var posArr;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                if (!(_this3._gameInfo && _this3._gameInfo.bonusGame)) {
                  _context2.next = 6;
                  break;
                }
                posArr = [];
                _this3._reels.forEach(function(reel) {
                  if (reel.node.active) for (var i = 0; i < _this3._row; i++) {
                    var symbol = reel.GetSymbolByRow(i);
                    symbol.GetShowId() == cc.vv.gameData.getGameCfg().scatterId && posArr.push(symbol.node.parent.convertToWorldSpaceAR(symbol.node.position));
                  }
                });
                if (!(posArr.length > 0 && Global.GoddessOfDeathCollectProgress)) {
                  _context2.next = 6;
                  break;
                }
                _context2.next = 6;
                return Global.SlotsMgr.collectScatter(posArr);

               case 6:
                success();

               case 7:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      showCollectEnegy: function showCollectEnegy() {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
            var progressData, posArr;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                progressData = cc.vv.gameData.progressData;
                if (!progressData) {
                  _context3.next = 11;
                  break;
                }
                posArr = [];
                _this4._reels.forEach(function(reel) {
                  if (reel.node.active) for (var i = 0; i < _this4._row; i++) {
                    var symbol = reel.GetSymbolByRow(i);
                    symbol.GetShowId() == cc.vv.gameData.getGameCfg().collectId && posArr.push(symbol.node.parent.convertToWorldSpaceAR(symbol.node.position));
                  }
                });
                if (!(posArr.length > 0 && Global.GoddessOfDeathCollectProgress)) {
                  _context3.next = 11;
                  break;
                }
                if (!(progressData.totalCnt / progressData.needCnt >= 1)) {
                  _context3.next = 10;
                  break;
                }
                _context3.next = 8;
                return Global.GoddessOfDeathCollectProgress.collectEnergy(posArr, progressData.totalCnt / progressData.needCnt);

               case 8:
                _context3.next = 11;
                break;

               case 10:
                Global.GoddessOfDeathCollectProgress.collectEnergy(posArr, progressData.totalCnt / progressData.needCnt);

               case 11:
                success();

               case 12:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      removeAllCollectCoinsEff: function removeAllCollectCoinsEff() {
        var collect_jackpot = cc.find("Canvas/safe_node/collect_jackpot");
        var pointListNode = cc.find("pointList", collect_jackpot);
        for (var i = 1; i <= 12; i++) {
          var subnode = cc.find("JackpotPoint" + i, pointListNode);
          subnode.getChildByName("theme141_collect_2_4").active = false;
          subnode.getChildByName("jp_jinbi_chuxian_01").active = false;
          var jinbi_xuanhua2 = subnode.getChildByName("jp_jinbi_xuanhuan_02");
          jinbi_xuanhua2.getComponent(sp.Skeleton).clearTrack(0);
          jinbi_xuanhua2.active = false;
          var jinbi_xuanhua3 = subnode.getChildByName("jp_jinbi_xuanhuan_03");
          jinbi_xuanhua3.getComponent(sp.Skeleton).clearTrack(0);
          jinbi_xuanhua3.active = false;
        }
        for (var _i3 = 1; _i3 <= 4; _i3++) cc.find("jackpot" + _i3 + "/jp_zi_xuanhuan", collect_jackpot).active = false;
      },
      showCollectCoin: function showCollectCoin() {
        var collect_jackpot = cc.find("Canvas/safe_node/collect_jackpot");
        var bWin = this._gameInfo.jackpot && this._gameInfo.jackpot.jackpotId;
        var coinNum = 0;
        for (var i = 0; i < 5; i++) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 3; j++) {
            var symbolScript = sys[j];
            symbolScript.isNeedCollectCoin() && function() {
              coinNum++;
              var targetNode = cc.find("pointList/JackpotPoint" + coinNum, collect_jackpot);
              sys[j].PlayCollectCoinAction(targetNode, function() {
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.coin_show);
                targetNode.getChildByName("theme141_collect_2_4").active = true;
                var waterpoint = targetNode.getChildByName("jp_jinbi_chuxian_01");
                waterpoint.active = true;
                waterpoint.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                if (bWin) {
                  var jinbi_xuanhua2 = targetNode.getChildByName("jp_jinbi_xuanhuan_02");
                  jinbi_xuanhua2.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
                  jinbi_xuanhua2.active = true;
                  var jinbi_xuanhua3 = targetNode.getChildByName("jp_jinbi_xuanhuan_03");
                  jinbi_xuanhua3.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
                  jinbi_xuanhua3.active = true;
                }
              });
            }();
          }
        }
        if (bWin) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_win);
          var effNode = cc.find("jackpot" + this._gameInfo.jackpot.jackpotId + "/jp_zi_xuanhuan", collect_jackpot);
          effNode.active = true;
        }
        if (coinNum > 0) return true;
      },
      ShowScatterWinFree: function ShowScatterWinFree() {
        if (!this._gameInfo) return;
        var allWinIdx = [];
        if (this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo) {
          var scatterIdx = this._gameInfo.freeResult.freeInfo.scatterIdx || [];
          for (var i = 0; i < scatterIdx.length; i++) {
            var val = scatterIdx[i];
            allWinIdx[val] = 1;
          }
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          symbol && symbol.playWinAnimation();
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var _iterator2, _step2, reel, bCollectCoin, gameData, rest, autoTime;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _iterator2 = _createForOfIteratorHelper(_this5._reels);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  reel = _step2.value;
                  reel.ShowAntiEffect(false);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              bCollectCoin = _this5.showCollectCoin();
              if (!cc.vv.gameData.isOpenCollectProgress()) {
                _context4.next = 6;
                break;
              }
              _context4.next = 6;
              return _this5.showCollectEnegy();

             case 6:
              if (!bCollectCoin) {
                _context4.next = 9;
                break;
              }
              _context4.next = 9;
              return _this5.awaitTime(.5);

             case 9:
              _this5.ShowWinTrace();
              _this5.showScatter();
              if (!(_this5._gameInfo.jackpot && _this5._gameInfo.jackpot.jackpotId)) {
                _context4.next = 17;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              _context4.next = 15;
              return _this5.awaitTime(3);

             case 15:
              _context4.next = 17;
              return _this5._popUIScript.showCollectCoinJackpotWin(_this5._gameInfo.jackpot.jackpotValue, _this5._gameInfo.jackpot.jackpotId);

             case 17:
              if (_this5.CheckFreeGameFinish()) {
                _context4.next = 20;
                break;
              }
              _context4.next = 20;
              return _this5.playBottomWin();

             case 20:
              if (!_this5.CheckTriggerMapSubGame()) {
                _context4.next = 32;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              _context4.next = 24;
              return _this5.awaitTime(.5);

             case 24:
              _this5._isSpinEndEnterMap = true;
              _context4.next = 27;
              return Global.GoddessOfDeathMap.enterMap(false, true);

             case 27:
              cc.vv.gameData.isFreeGamesTime() && Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
              if (!Global.GoddessOfDeathMap.isTriggerSubGame()) {
                _context4.next = 31;
                break;
              }
              _context4.next = 31;
              return _this5.playBottomWin(_this5._bottomScript.getCurrentWin());

             case 31:
              cc.vv.gameData.isFreeGamesTime() && _this5._bottomScript.SetWin(cc.vv.gameData.GetGameTotalFreeWin());

             case 32:
              if (!_this5.CheckEnterFreeGame()) {
                _context4.next = 52;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
              _this5.ShowScatterWinFree();
              _context4.next = 38;
              return _this5.awaitTime(1);

             case 38:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
              if (!(_this5._gameInfo.freeCnt == _this5._gameInfo.allFreeCnt)) {
                _context4.next = 48;
                break;
              }
              _context4.next = 42;
              return _this5._popUIScript.showFreeCount(_this5._gameInfo.freeResult.freeInfo.freeCnt);

             case 42:
              _context4.next = 44;
              return _this5.awaitTime(.5);

             case 44:
              _this5.ShowGameview(true, false);
              _this5.Backup();
              _context4.next = 50;
              break;

             case 48:
              _context4.next = 50;
              return _this5._popUIScript.showFreeAgain(_this5._gameInfo.freeResult.freeInfo.freeCnt);

             case 50:
              _context4.next = 62;
              break;

             case 52:
              if (!_this5.CheckFreeGameFinish()) {
                _context4.next = 62;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              _this5._bottomScript.SetWin(cc.vv.gameData.GetGameTotalFreeWin());
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
              _context4.next = 58;
              return _this5._popUIScript.showSttlDialog();

             case 58:
              _this5.scheduleOnce(function() {
                _this5.ShowGameview(false, false);
                _this5._bottomScript.ShowFreeModel(false);
                _this5.Resume();
              }, .5);
              Global.GoddessOfDeathCollectProgress.setBtnsClickEnable(true);
              _context4.next = 62;
              return _this5.playBottomWin(true);

             case 62:
              gameData = cc.vv.gameData;
              rest = cc.vv.gameData.GetFreeTime();
              autoTime = cc.vv.gameData.GetAutoModelTime();
              Global.GoddessOfDeathCollectProgress && 0 == rest && autoTime <= 0 && Global.GoddessOfDeathCollectProgress.setBtnsClickEnable(true);
              if (!(_this5._gameInfo && _this5._gameInfo.bonusGame)) {
                _context4.next = 86;
                break;
              }
              if (!_this5._gameInfo.isEnd) {
                _context4.next = 82;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("stoped");
              if (!(_this5._gameInfo.bonusGame.freeResult && _this5._gameInfo.bonusGame.freeResult.freeInfo && _this5._gameInfo.bonusGame.freeResult.freeInfo.freeCnt > 0)) {
                _context4.next = 77;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              cc.vv.gameData.SetFreeTime(_this5._gameInfo.bonusGame.freeResult.freeInfo.freeCnt);
              cc.vv.gameData.SetTotalFree(_this5._gameInfo.bonusGame.freeResult.freeInfo.freeCnt);
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
              _context4.next = 76;
              return _this5._popUIScript.showFreeCount(cc.vv.gameData.GetTotalFree());

             case 76:
              _this5.scheduleOnce(function() {
                _this5.ShowGameview(true, false);
              }, .5);

             case 77:
              Global.SlotsMgr.showBottomInfo(false);
              _this5._gameInfo.bonusGame = null;
              _this5.CanDoNextRound();
              _context4.next = 84;
              break;

             case 82:
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsMgr.OnStopMove();

             case 84:
              _context4.next = 88;
              break;

             case 86:
              _this5._bottomScript.ShowBtnsByState("stoped");
              _this5.CanDoNextRound();

             case 88:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      playBottomWin: function playBottomWin(isShowFreeBigWin) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var nWin, nTotal, updateAllCoin;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      nWin = cc.vv.gameData.GetGameWin();
                      nTotal = nWin;
                      updateAllCoin = true;
                      if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                        nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                        updateAllCoin = 0 == cc.vv.gameData.GetFreeTime();
                      }
                      if (cc.vv.gameData.isMultipleSlots()) {
                        nTotal = cc.vv.gameData.getGameInfo().bonusGame.totalWinCoin;
                        updateAllCoin = _this6._gameInfo.isEnd;
                      }
                      if (isShowFreeBigWin) {
                        nWin = cc.vv.gameData.GetGameTotalFreeWin();
                        nTotal = nWin;
                        updateAllCoin = true;
                      }
                      if (!(nWin > 0)) {
                        _context5.next = 11;
                        break;
                      }
                      _context5.next = 9;
                      return _this6.ShowBottomWin(nWin, nTotal, updateAllCoin, function() {
                        success();
                      });

                     case 9:
                      _context5.next = 12;
                      break;

                     case 11:
                      success();

                     case 12:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      awaitTime: function awaitTime(time) {
        var _this7 = this;
        return new Promise(function(success) {
          _this7.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      CheckSpecialReward: function CheckSpecialReward() {
        return this.CheckEnterFreeGame() || this.CheckFreeGameFinish() || this.CheckTriggerMapSubGame();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var freeInfo = this._gameInfo.freeResult.freeInfo;
        return freeInfo && freeInfo.freeCnt > 0;
      },
      CheckFreeGameFinish: function CheckFreeGameFinish() {
        return cc.vv.gameData.isFinishFreeGames();
      },
      CheckTriggerMapSubGame: function CheckTriggerMapSubGame() {
        return cc.vv.gameData.isEnterMapGames();
      },
      ShowTranstion: function ShowTranstion(pEndCall) {
        var tranNode = cc.find("Canvas/safe_node/translate_node");
        tranNode.active = true;
        var ani = tranNode.getComponent(sp.Skeleton);
        ani.setAnimation(0, "animation", false);
        var delayCall = function delayCall() {
          pEndCall && pEndCall();
        };
        this.scheduleOnce(delayCall, .5);
      },
      ShowGameview: function ShowGameview(bFree) {
        var bReq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._super(bFree);
        bFree && bReq && this.CanDoNextRound();
        cc.find("reels_bg", this.node).active = !bFree;
        cc.find("reels_bg_free", this.node).active = bFree;
      },
      onRcvEvtEnterMap: function onRcvEvtEnterMap() {
        this._bottomScript.ShowBtnsByState("moveing_1");
        this._topScript.SetBackLobby(false);
      },
      onRcvEvtExitMap: function onRcvEvtExitMap() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var winCoin, deskInfo;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              winCoin = cc.vv.gameData.getSubGameWinCoin();
              if (!(winCoin > 0)) {
                _context7.next = 4;
                break;
              }
              _context7.next = 4;
              return new Promise(function(success, failed) {
                cc.vv.gameData.AddCoin(winCoin);
                cc.vv.gameData.setSubGameWinCoin(0);
                _this8.ShowBottomWin(winCoin, winCoin, true, success);
              });

             case 4:
              if (!_this8._isSpinEndEnterMap) {
                _this8.ShowGameview(cc.vv.gameData.isFreeGamesTime());
                deskInfo = cc.vv.gameData.getDeskInfo();
                deskInfo.bonusGame ? Global.SlotsMgr.startMoveSlots() : _this8.CanDoNextRound();
              }
              _this8._isSpinEndEnterMap = true;
              _this8._bottomScript.ShowBtnsByState("idle");
              _this8._topScript.SetBackLobby(true);

             case 8:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  GoddessOfDeath_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60d0avQnW9CaY+sgNtNT3hw", "GoddessOfDeath_Sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: "games/GoddessOfDeath/",
        scatter_ant: "reel_notify",
        bell: "bell",
        btn_click: "btn_click",
        coin_fly: "coin_fly",
        coin_show: "coin_show",
        collect_full: "collect_full",
        lock: "lock",
        unlock: "unlock",
        fg_trigger: "fg_trigger",
        indicate: "indicate",
        jp_win: "jp_win",
        win_jp_show: "win_jp_show",
        m1_fly: "m1_fly",
        nudge: "nudge",
        reel_down: "reel_down",
        reel_notify: "reel_notify",
        reel_stop: "reel_stop",
        reel_up: "reel_up",
        scatter_stop: "symbol_scatter",
        wild_stop: "symbol_wild",
        common_click: "btn_click",
        transition_bonus: "transition_bonus",
        transition_free: "transition_free",
        free_bgm: "free_bgm",
        free_dialog_collect_show: "free_dialog_collect_show",
        free_dialog_start_show: "free_dialog_start_show",
        popup_out: "popup_out",
        free_collect: "collect",
        free_change: "change",
        box_open: "box_open",
        island_click: "box_open",
        map_bgm: "map_bgm",
        map_full: "map_full",
        map_wheel_click: "map_wheel_click",
        map_wheel_show: "map_wheel_show",
        map_wheel_spin: "map_wheel_spin",
        popup_in: "popup_in",
        reach: "reach",
        road: "road",
        ship_move1: "ship_move1",
        map_open: "map_in",
        map_close: "map_out",
        island_collect: "island_collect",
        extrapick: "extrapick",
        popup_map1: "popup_map1",
        popup_map2: "popup_map2",
        land1_break: "land1_break",
        land1_full: "land1_full",
        land1_show: "land1_show",
        land2_open: "land2_open",
        land3_dice: "land3_dice",
        land3_fly: "land3_fly",
        land3_out: "land3_out",
        land4_full: "land4_full",
        land4_spin: "land4_spin",
        land5_click: "land5_click",
        land6_end: "land6_end",
        land6_open: "land6_open"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  GoddessOfDeath_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0eb2bjcG5JPR52df/ecRsa0", "GoddessOfDeath_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
        if (this._showCoinNode) {
          this._showCoinNode.active = false;
          this._showCoinNode = null;
        }
      },
      StopMoveEnd: function StopMoveEnd() {
        this._super();
        this.playCoinStopEff();
      },
      playCoinStopEff: function playCoinStopEff() {
        var cfg = cc.vv.gameData.getGameCfg();
        if (this._data && "coin" == this._data.t) {
          var coinData = cfg.symbol[100];
          if (coinData && coinData.win_node) {
            this._showCoinNode = cc.find(coinData.win_node, this.node);
            this._showCoinNode.active = true;
            var stop_anim = coinData.stop_ani;
            if (stop_anim) {
              var nodeSp = this._showCoinNode.getComponent(sp.Skeleton);
              if (nodeSp) {
                nodeSp.setAnimation(0, stop_anim, false);
                nodeSp.setCompleteListener(function() {
                  nodeSp.setCompleteListener(null);
                });
              }
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.coin_show);
            }
          }
        }
      },
      isNeedCollectCoin: function isNeedCollectCoin() {
        return this._data && "coin" == this._data.t;
      },
      PlayCollectCoinAction: function PlayCollectCoinAction(targetNode, callback) {
        var _this = this;
        AppLog.warn(this._id, "PlayCollectCoinAction0");
        if (this._showCoinNode && this._showCoinNode.active) {
          var cfg = cc.vv.gameData.getGameCfg();
          var parentNode = cc.find("Canvas/safe_node");
          var flyNode = cc.instantiate(this._showCoinNode);
          flyNode.active = false;
          flyNode.parent = parentNode;
          var beiginPos = parentNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
          flyNode.position = beiginPos;
          this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
            if (_this._showCoinNode) {
              _this._showCoinNode.active = false;
              _this._showCoinNode = null;
            }
            flyNode.active = true;
            var coinData = cfg.symbol[100];
            var fly_anim = coinData.fly_anim;
            if (fly_anim) {
              var nodeSp = flyNode.getComponent(sp.Skeleton);
              nodeSp && nodeSp.setAnimation(0, fly_anim, false);
            }
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.coin_fly);
            var tarPos = parentNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(-37, 22)));
            cc.tween(flyNode).bezierTo(.5, cc.v2(beiginPos.x, beiginPos.y), cc.v2(tarPos.x, beiginPos.y), cc.v2(tarPos.x, tarPos.y), {
              scale: .3
            }).call(function() {
              callback();
              flyNode.destroy();
            }).start();
          })));
        }
      },
      playWinAnimation: function playWinAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          var win_anim = cfg.symbol[id].win_ani;
          (cc.vv.gameData.isFreeGamesTime() || cc.vv.gameData.isMultipleSlots()) && cfg.symbol[id].win_ani_free && (win_anim = cfg.symbol[id].win_ani_free);
          if (win_anim && "" != win_anim.name) {
            aniNode.zIndex = win_anim.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, win_anim.name, true);
          }
        } else {
          this._showNode.active = true;
          this.playWinTweenAction();
        }
      },
      playWinTweenAction: function playWinTweenAction() {
        this._showNode.cleanup();
        var nOpacity = this._showNode.opacity;
        this._showNodeOrgOpacity = nOpacity;
        cc.tween(this._showNode).repeatForever(cc.tween().to(.35, {
          opacity: 0
        }).to(.3, {
          opacity: nOpacity
        }).delay(.6)).start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  GoddessOfDeath_subGameBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0f63ZKoqpAtaIXIXcc+cml", "GoddessOfDeath_subGameBase");
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
        _soundPath: "games/GoddessOfDeath/",
        _subGameNodeName: "subGame____",
        _subGameNode: null,
        _spineNodeLoading: null,
        _node_start: null,
        _node_main: null,
        _node_win: null,
        machine: {
          default: null,
          visible: false
        }
      },
      onLoad: function onLoad() {
        this._subGameNode = cc.find(this._subGameNodeName, this.node);
        this._spineNodeLoading = cc.find("spineNodeLoading", this._subGameNode);
        this._node_start = cc.find("node_start", this._subGameNode);
        this._node_main = cc.find("node_main", this._subGameNode);
        this._node_win = cc.find("node_win", this._subGameNode);
        this._subGameNode.active = false;
        this._spineNodeLoading.active = false;
        this._node_start.active = false;
        this._node_main.active = false;
        this._node_win.active = false;
      },
      enterGame: function enterGame(data) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitGame: function exitGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showStart: function showStart() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var ui, btnStart, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      _this._subGameNode.active = true;
                      _this._node_start.active = true;
                      ui = cc.find("ui", _this._node_start);
                      ui.scale = 0;
                      btnStart = ui.getChildByName("btnStart");
                      btnStart.getComponent(cc.Button).enabled = false;
                      _context5.next = 8;
                      return _this.playActions(ui, [ cc.scaleTo(.35, 1.4), cc.scaleTo(.15, 1.2) ]);

                     case 8:
                      btnStart.getComponent(cc.Button).enabled = true;
                      self = _this;
                      clickFunc = function() {
                        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) switch (_context3.prev = _context3.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                              btnStart.getComponent(cc.Button).enabled = false;
                              _context3.next = 4;
                              return self.playActions(ui, [ cc.scaleTo(.15, 1.4), cc.scaleTo(.35, 0) ]);

                             case 4:
                              self._node_start.active = false;
                              success();

                             case 6:
                             case "end":
                              return _context3.stop();
                            }
                          }, _callee3);
                        }));
                        return function clickFunc() {
                          return _ref2.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btnStart, clickFunc);
                      Global.btnClickEvent(btnStart, _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                           case 0:
                            btnStart.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context4.stop();
                          }
                        }, _callee4);
                      })), _this);

                     case 13:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      showMain: function showMain() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      showResult: function showResult() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      playFullScreen: function playFullScreen(awaitTime) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.indicate);
              _this2.setFullScreenVisible(true);
              _this2.playSpine(_this2._spineNodeLoading, null, "skill");
              _context9.next = 5;
              return _this2.awaitTime(awaitTime || 1);

             case 5:
              _this2.setFullScreenVisible(false);

             case 6:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      setFullScreenVisible: function setFullScreenVisible(visible) {
        this._spineNodeLoading.active = visible;
      },
      setSubGameNodeVisible: function setSubGameNodeVisible(visible) {
        this._subGameNode.active = visible;
        if (!visible) {
          this._node_start.active = false;
          this._node_main.active = false;
          this._node_win.active = false;
        }
      },
      convertNumToShortStr: function convertNumToShortStr(num) {
        return Global.convertNumToShort(num, 1e3, 1, [ "", "K", "M", "B", "T", "Q" ]);
      },
      rollToNumOfLabel: function rollToNumOfLabel(label, num) {
        Global.doRoallNumEff(label, 0, num, 2, null, null, 0, true);
      },
      setLabel: function setLabel(node, str) {
        node && (node.getComponent(cc.Label).string = str);
      },
      playSpine: function playSpine(node, endCall) {
        var animationName = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "animation";
        var isLoop = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (node) {
          node.active = true;
          node.getComponent(sp.Skeleton).setAnimation(0, animationName, isLoop);
          isLoop || node.getComponent(sp.Skeleton).setCompleteListener(function() {
            endCall && endCall();
          });
        } else endCall && endCall();
      },
      playActions: function playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      awaitTime: function awaitTime(time) {
        var _this3 = this;
        return new Promise(function(success) {
          _this3.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  GoddessOfDeath_subGameBeke: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "923f2EZlZRCMJhDXhIkayrm", "GoddessOfDeath_subGameBeke");
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
    var MULT_ARR = [ "death", 16, 36, 60, 180, 600, "win_all", "death" ];
    var MULT_TO_ID = {
      0: 7,
      16: 1,
      36: 2,
      60: 3,
      180: 4,
      600: 5,
      "-1": 6
    };
    var MULT_TO_ANIM_ID = {
      0: 7,
      16: "",
      36: 2,
      60: 3,
      180: 4,
      600: 5,
      "-1": 6
    };
    cc.Class({
      extends: require("GoddessOfDeath_subGameBase"),
      properties: {
        _subGameNodeName: "subGameBeke",
        _lblStartPrize: null,
        _lblPickMult: null,
        _sprPickTips: null,
        _bekeLayerListNode: null,
        _pickLeftNum: 5,
        _pickMultNum: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._super();
              _this._lblStartPrize = cc.find("nodePrizePool/theme163_game_c_2/lblStartPrize", _this._node_main);
              _this._lblPickMult = cc.find("nodePrizePool/theme163_game_c_3/lblPickMult", _this._node_main);
              _this._sprPickTips = cc.find("nodeList/theme163_game4_5", _this._node_main);
              _this._bekeLayerListNode = cc.find("nodeList/list", _this._node_main);
              _this.init();

             case 6:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      init: function init() {
        this.setLabel(this._lblPickMult, this._pickMultNum ? this._pickMultNum + "X" : "");
        this.resetAllLayer();
      },
      restoreByData: function restoreByData() {
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        this._subGameNode.active = true;
        this.setLabel(this._lblPickMult, gameInfo.mult + "X");
        this._pickLeftNum = 5 - gameInfo.layerChoiceId.length;
        for (var i in gameInfo.layerItemList) {
          var layer = this.getLayer(parseInt(i) + 1);
          this.showLayerRestItems(layer, gameInfo.layerChoiceId[i], gameInfo.layerItemList[i]);
          this.setItemGray(layer.getChildByName("item" + gameInfo.layerChoiceId[i]), false);
        }
      },
      enterGame: function enterGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var gameInfo;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              gameInfo = cc.vv.gameData.mapInfo.gameInfo;
              _this2._pickLeftNum = gameInfo.times || 5;
              _this2._pickMultNum = gameInfo.mult;
              _this2.setLabel(_this2._lblStartPrize, Global.FormatNumToComma(gameInfo.startPrize));
              _this2.init();
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      if (!(gameInfo.mult <= 0)) {
                        _context2.next = 3;
                        break;
                      }
                      _context2.next = 3;
                      return _this2.showStart();

                     case 3:
                      _context2.next = 5;
                      return _this2.showMain();

                     case 5:
                      _context2.next = 7;
                      return _this2.showResult();

                     case 7:
                      _context2.next = 9;
                      return _this2.exitGame();

                     case 9:
                      success();

                     case 10:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 6:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      exitGame: function exitGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      _context4.next = 2;
                      return _this3.playFullScreen(2);

                     case 2:
                      _this3.setSubGameNodeVisible(false);
                      success();

                     case 4:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x2) {
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
      showMain: function showMain() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var gameInfo;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      gameInfo = cc.vv.gameData.mapInfo.gameInfo;
                      if (!(gameInfo.mult <= 0)) {
                        _context6.next = 4;
                        break;
                      }
                      _context6.next = 4;
                      return _this4.playFullScreen(1.5);

                     case 4:
                      _this4._node_start.active = false;
                      _this4._node_main.active = true;
                      gameInfo.mult > 0 && _this4.restoreByData();
                      _context6.next = 9;
                      return _this4.awaitTime(.2);

                     case 9:
                      _context6.next = 11;
                      return _this4.awaitOrOperate();

                     case 11:
                      _this4.setPlayPickTipsAction(false);
                      _context6.next = 14;
                      return _this4.awaitTime(1);

                     case 14:
                      success();

                     case 15:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x3) {
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
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        isPlay ? this.playSpine(cc.find("spine", this._sprPickTips), null, "animation", true) : this.playSpine(cc.find("spine", this._sprPickTips), null, "animation2", false);
      },
      resetLayer: function resetLayer(layer) {
        var layerId = parseInt(layer.name.substr(5, 1));
        layer.getChildByName("spine_select").active = false;
        for (var j = 1; j <= 5; j++) {
          var _item = layer.getChildByName("item" + j);
          _item.getComponent(cc.Button).enabled = false;
          _item.getComponent(cc.Sprite).enabled = false;
          _item.getChildByName("spine_highlight").active = false;
          _item.getChildByName("spine_mult").active = false;
          _item.getChildByName("spine_kaiping").active = true;
          this.playSpine(_item.getChildByName("spine_kaiping"), null, "animation" + layerId + "_3", false);
          this.setItemGray(_item, true);
        }
      },
      resetAllLayer: function resetAllLayer() {
        for (var i = 1; i <= 5; i++) this.resetLayer(this.getLayer(i));
      },
      setLayerEnable: function setLayerEnable(layer, enable) {
        var layerId = parseInt(layer.name.substr(5, 1));
        layer.getChildByName("spine_select").active = enable;
        enable && this.setLayerGray(layer, false);
        for (var j = 1; j <= 5; j++) {
          var _item2 = layer.getChildByName("item" + j);
          _item2.getComponent(cc.Button).enabled = enable;
          if (enable) {
            this.playSpine(_item2.getChildByName("spine_highlight"), null, "animation", true);
            this.playSpine(_item2.getChildByName("spine_kaiping"), null, "animation" + layerId + "_2", false);
          }
        }
      },
      setLayerResult: function setLayerResult(layer, selectId) {
        var layerId = parseInt(layer.name.substr(5, 1));
        for (var j = 1; j <= 5; j++) {
          if (j == selectId) continue;
          item.getChildByName("spine_highlight").active = false;
          this.playSpine(item.getChildByName("spine_kaiping"), null, "animation" + layerId + "_3", false);
        }
      },
      setLayerGray: function setLayerGray(layer, isGray, selectIdx) {
        for (var j = 1; j <= 5; j++) {
          var _item3 = layer.getChildByName("item" + j);
          j === selectIdx ? this.setItemGray(_item3, !isGray) : this.setItemGray(_item3, isGray);
        }
      },
      getLayer: function getLayer(layerIdx) {
        return this._bekeLayerListNode.getChildByName("cell_" + layerIdx);
      },
      getLayerIdxEnable: function getLayerIdxEnable() {
        return 5 - this._pickLeftNum + 1;
      },
      getLayerItemList: function getLayerItemList(data) {
        return data.layerItemList[data.layerId - 1];
      },
      getMultIdByData: function getMultIdByData(data) {
        var curChoiceId = data.layerChoiceId[data.layerId - 1];
        return this.getLayerItemList(data)[curChoiceId - 1];
      },
      showLayerRestItems: function showLayerRestItems(layer, selectIdx, layerItemListData) {
        var layerId = parseInt(layer.name.substr(5, 1));
        for (var i in layerItemListData) {
          var _item4 = layer.getChildByName("item" + (parseInt(i) + 1));
          var animId = MULT_TO_ANIM_ID[layerItemListData[i]];
          if (parseInt(i) + 1 === selectIdx) {
            _item4.getChildByName("spine_kaiping").active = false;
            this.playSpine(_item4.getChildByName("spine_mult"), null, "animation" + animId, false);
          } else {
            this.playSpine(_item4.getChildByName("spine_kaiping"), null, "animation" + layerId + "_2", false);
            this.playSpine(_item4.getChildByName("spine_mult"), null, "animation" + animId, false);
          }
        }
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success, failed) {
                  var i, layer, _loop, j;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      _this5.setPlayPickTipsAction(true);
                      _this5.setLayerEnable(_this5.getLayer(_this5.getLayerIdxEnable()), true);
                      for (i = 1; i <= 5; i++) {
                        layer = _this5.getLayer(i);
                        _loop = function _loop(j) {
                          var item = layer.getChildByName("item" + j);
                          item.off("click");
                          Global.btnClickEvent(item, _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                            var resp, gameInfo, curLayer, animId, mult, k;
                            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                              while (1) switch (_context8.prev = _context8.next) {
                               case 0:
                                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.extrapick);
                                _context8.next = 3;
                                return cc.vv.gameData.reqSubGame(Global.GOLD_TREASURE_MAP_RTYPE.OPERATE_SUBGAME, j);

                               case 3:
                                resp = _context8.sent;
                                if (!(200 === resp.code)) {
                                  _context8.next = 30;
                                  break;
                                }
                                _this5._pickLeftNum--;
                                gameInfo = resp.data.mapInfo.gameInfo;
                                gameInfo.multId = _this5.getMultIdByData(gameInfo);
                                curLayer = _this5.getLayer(_this5.getLayerIdxEnable() - 1);
                                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr["select" + gameInfo.layerId]);
                                _this5.setLayerEnable(curLayer, false, gameInfo.layerChoiceId[gameInfo.layerId - 1]);
                                _this5.playSpine(item.getChildByName("spine_kaiping"), function() {
                                  item.getChildByName("spine_kaiping").active = false;
                                }, "animation" + gameInfo.layerId + "_1", false);
                                _context8.next = 14;
                                return _this5.awaitTime(1.4);

                               case 14:
                                animId = MULT_TO_ANIM_ID[gameInfo.multId];
                                _this5.playSpine(item.getChildByName("spine_mult"), null, "animation" + animId, false);
                                if (!(gameInfo.multId > 0)) {
                                  _context8.next = 23;
                                  break;
                                }
                                mult = 0;
                                if (6 == gameInfo.multId) for (k = 1; k <= 5; k++) mult += MULT_ARR[k]; else mult = MULT_ARR[MULT_TO_ID[gameInfo.multId]];
                                _context8.next = 21;
                                return _this5.playMultFlyEff(item, mult);

                               case 21:
                                _context8.next = 23;
                                return _this5.awaitTime(1);

                               case 23:
                                _this5.setLayerGray(curLayer, true, j);
                                _this5.showLayerRestItems(curLayer, j, _this5.getLayerItemList(gameInfo));
                                _context8.next = 27;
                                return _this5.awaitTime(1);

                               case 27:
                                _this5._pickLeftNum > 0 && gameInfo.multId > 0 ? _this5.setLayerEnable(_this5.getLayer(_this5.getLayerIdxEnable()), true) : success();
                                _context8.next = 32;
                                break;

                               case 30:
                                AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                                failed();

                               case 32:
                               case "end":
                                return _context8.stop();
                              }
                            }, _callee8);
                          })));
                        };
                        for (j = 1; j <= 5; j++) _loop(j);
                      }

                     case 3:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x4, _x5) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      playMultFlyEff: function playMultFlyEff(itemNode, mult) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var beginPos, targetNode, targetPos, nodeFly, spineNodeMult;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      beginPos = _this6._node_main.convertToNodeSpaceAR(itemNode.parent.convertToWorldSpaceAR(itemNode.position));
                      targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this6._node_main);
                      targetPos = _this6._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this6._node_main);
                      nodeFly.position = beginPos;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      _context11.next = 8;
                      return _this6.playActions(nodeFly, [ cc.moveTo(.3, targetPos) ]);

                     case 8:
                      spineNodeMult = cc.find("nodePrizePool/spineNodeMult", _this6._node_main);
                      _this6.playSpine(spineNodeMult);
                      _context11.next = 12;
                      return _this6.awaitTime(.2);

                     case 12:
                      _this6._pickMultNum += mult;
                      _this6.setLabel(_this6._lblPickMult, _this6._pickMultNum ? _this6._pickMultNum + "X" : "");
                      success();

                     case 15:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x6) {
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
      setItemGray: function setItemGray(itemNode, isGray) {
        var color = isGray ? cc.Color.GRAY : cc.Color.WHITE;
        var _iterator = _createForOfIteratorHelper(itemNode.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var subNode = _step.value;
            subNode.color = color;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      showResult: function showResult() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success) {
                  var ui, baseCoin, btnCollect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      _this7._node_win.active = true;
                      ui = _this7._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this7._lblStartPrize.getComponent(cc.Label).string);
                      btnCollect = ui.getChildByName("btnCollect");
                      btnCollect.getComponent(cc.Button).enabled = false;
                      _this7.setLabel(ui.getChildByName("lblWinCoinShow"), _this7._pickMultNum + " X " + _this7.convertNumToShortStr(baseCoin) + " = " + _this7.convertNumToShortStr(_this7._pickMultNum * baseCoin));
                      _this7.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), _this7._pickMultNum * baseCoin);
                      cc.vv.gameData.setSubGameWinCoin(_this7._pickMultNum * baseCoin);
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_map2);
                      _context13.next = 12;
                      return _this7.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 12:
                      btnCollect.getComponent(cc.Button).enabled = true;
                      self = _this7;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                        btnCollect.getComponent(cc.Button).enabled = false;
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        self.setLabel(ui.getChildByName("lblWinCoin"), self.convertNumToShortStr(self._pickMultNum * baseCoin));
                        self.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(btnCollect, clickFunc);
                      Global.btnClickEvent(btnCollect, function() {
                        btnCollect.stopAllActions();
                        clickFunc();
                      }, _this7);

                     case 17:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function(_x7) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    GoddessOfDeath_subGameBase: "GoddessOfDeath_subGameBase"
  } ],
  GoddessOfDeath_subGameCollectWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78fd4JNwD5K8IebkgixWIm7", "GoddessOfDeath_subGameCollectWheel");
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
        _soundPath: "games/GoddessOfDeath/",
        _subGameNode: null,
        _node_main: null,
        _spineNodeLoading: null,
        _targetIdx: 7
      },
      onLoad: function onLoad() {
        this._subGameNode = cc.find("/subGameCollectWheel", this.node);
        this._node_main = cc.find("node_main", this._subGameNode);
        this._spineNodeLoading = cc.find("spineNodeLoading", this._subGameNode);
        this.init();
      },
      init: function init() {
        this._spineNodeLoading.active = false;
        this._subGameNode.active = false;
        this._node_main.active = false;
        cc.find("wheel/spineEff1", this._node_main).active = false;
        cc.find("wheel/spineEff2", this._node_main).active = false;
        cc.find("wheel/spineEffWin", this._node_main).active = false;
        var bottom = cc.find("bottom", this._node_main);
        bottom.y = -700;
        var wheel = cc.find("wheel", this._node_main);
        wheel.scale = 0;
      },
      enterGame: function enterGame() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._targetIdx = 0;
              _this.init();
              _context.next = 4;
              return _this.showMain();

             case 4:
              _context.next = 6;
              return _this.showResult();

             case 6:
              _context.next = 8;
              return _this.exitGame();

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitGame: function exitGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this2.awaitTime(1);

             case 2:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
              _context2.next = 5;
              return _this2.hide();

             case 5:
              _this2._subGameNode.active = false;

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showMain: function showMain() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  var btn_spin;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      _this3._subGameNode.active = true;
                      _context3.next = 3;
                      return _this3.awaitTime(.5);

                     case 3:
                      _this3._node_main.active = true;
                      cc.find("wheel/spineEff1", _this3._node_main).active = true;
                      cc.find("wheel/spineEff2", _this3._node_main).active = true;
                      btn_spin = cc.find("wheel/btn_spin", _this3._node_main);
                      btn_spin.getComponent(cc.Button).enabled = false;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_out);
                      _context3.next = 11;
                      return _this3.show();

                     case 11:
                      _context3.next = 13;
                      return _this3.awaitOrOperate();

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      show: function show() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var bottom, wheel;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              bottom = cc.find("bottom", _this4._node_main);
              bottom.y = -700;
              cc.tween(bottom).to(.3, {
                y: 0
              }).start();
              wheel = cc.find("wheel", _this4._node_main);
              wheel.scale = 0;
              cc.tween(wheel).to(.3, {
                scale: 1.4
              }).to(.3, {
                scale: 1
              }).start();
              _context5.next = 8;
              return _this4.awaitTime(.6);

             case 8:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      hide: function hide() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var bottom, wheel;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              bottom = cc.find("bottom", _this5._node_main);
              bottom.y = 0;
              cc.tween(bottom).delay(.2).to(.3, {
                y: -700
              }).start();
              wheel = cc.find("wheel", _this5._node_main);
              wheel.scale = 1;
              cc.tween(wheel).to(.3, {
                scale: 1.4
              }).to(.3, {
                scale: 0
              }).start();
              _context6.next = 8;
              return _this5.awaitTime(.6);

             case 8:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
                  var btn_spin, clickFunc;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      btn_spin = cc.find("wheel/btn_spin", _this6._node_main);
                      btn_spin.getComponent(cc.Button).enabled = true;
                      btn_spin.getComponent(cc.Button).interactable = true;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_wheel_click);
                        btn_spin.getComponent(cc.Button).interactable = false;
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(btn_spin, clickFunc);
                      Global.btnClickEvent(btn_spin, function() {
                        btn_spin.stopAllActions();
                        clickFunc();
                      });

                     case 6:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showResult: function showResult() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success) {
                  var resp, rorationWheel, targetAngle, diffAngle, mRound;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      cc.find("wheel/spineEff1", _this7._node_main).active = false;
                      cc.find("wheel/spineEff2", _this7._node_main).active = false;
                      _context9.next = 4;
                      return cc.vv.gameData.reqSubGame(Global.GOLD_TREASURE_MAP_RTYPE.COLLECT_WHEEL);

                     case 4:
                      resp = _context9.sent;
                      if (!(200 === resp.code)) {
                        _context9.next = 21;
                        break;
                      }
                      Global.GoddessOfDeathCollectProgress.setCollectNum(resp.data.needCoins);
                      _this7._targetIdx = resp.data.idx - 1;
                      rorationWheel = cc.find("wheel/rorationWheel", _this7._node_main);
                      targetAngle = 45 * _this7._targetIdx;
                      diffAngle = targetAngle - rorationWheel.angle;
                      mRound = 10;
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_wheel_spin);
                      _context9.next = 15;
                      return _this7.playActions(rorationWheel, [ cc.rotateTo(.5 * mRound, rorationWheel.angle + 360 * mRound + diffAngle).easing(cc.easeSineInOut()) ]);

                     case 15:
                      Global.SlotsSoundMgr.stopEffectByName(Global.SlotsSoundMgr.map_wheel_spin);
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.map_wheel_show);
                      cc.find("wheel/spineEffWin", _this7._node_main).active = true;
                      success();
                      _context9.next = 22;
                      break;

                     case 21:
                      AppLog.err("\u8bf7\u6c42\u6570\u636e\u9519\u8bef");

                     case 22:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      playSpine: function playSpine(node, endCall) {
        var animationName = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "animation";
        var isLoop = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (node) {
          node.active = true;
          node.getComponent(sp.Skeleton).setAnimation(0, animationName, isLoop);
          isLoop || node.getComponent(sp.Skeleton).setCompleteListener(function() {
            endCall && endCall();
          });
        } else endCall && endCall();
      },
      playActions: function playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      awaitTime: function awaitTime(time) {
        var _this8 = this;
        return new Promise(function(success) {
          _this8.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  GoddessOfDeath_subGameDice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45a1c+Ki9dDDburtJfIABIY", "GoddessOfDeath_subGameDice");
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
      extends: require("GoddessOfDeath_subGameBase"),
      properties: {
        _subGameNodeName: "subGameDice",
        _lblStartPrize: null,
        _lblPickMult: null,
        _sprPickTips: null,
        _winMultList: null,
        _restDiceList: null,
        _btnSpin: null,
        _spinDice: null,
        _spinFire: null,
        _spineBubble: null,
        _sprDice: null,
        _pickLeftNum: 5
      },
      onLoad: function onLoad() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var nodeDetail, i, j, winMultNode, _i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._super();
              _this._lblStartPrize = cc.find("nodePrizePool/theme163_game_c_2/lblStartPrize", _this._node_main);
              _this._lblPickMult = cc.find("nodePrizePool/theme163_game_c_3/lblPickMult", _this._node_main);
              _this._sprPickTips = cc.find("nodeDetail/spinTips", _this._node_main);
              nodeDetail = cc.find("nodeDetail", _this._node_main);
              _this._btnSpin = cc.find("btnSpin", nodeDetail);
              _this._spinDice = cc.find("btnSpin/spineDice", nodeDetail);
              _this._spinFire = cc.find("btnSpin/spineFire", nodeDetail);
              _this._spinFire.active = false;
              _this._spineBubble = cc.find("btnSpin/spineBubble", nodeDetail);
              _this._spineBubble.active = false;
              _this._winMultList = [];
              for (i = 1; i <= 6; i++) {
                _this._winMultList[i] = [];
                for (j = 1; j <= 4; j++) {
                  winMultNode = cc.find("cell_" + i + "/winSpine" + j, nodeDetail);
                  winMultNode && (_this._winMultList[i][j] = winMultNode);
                }
              }
              _this._restDiceList = [];
              for (_i = 1; _i <= 5; _i++) _this._restDiceList[_i] = cc.find("diceList/dice" + _i, nodeDetail);
              _this.init();

             case 16:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      init: function init() {
        this.setLabel(this._lblPickMult, "");
        var _iterator = _createForOfIteratorHelper(this._restDiceList), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var dice = _step.value;
            dice && (dice.active = true);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.resetWinResultPanel();
        this._btnSpin.getComponent(cc.Button).enabled = true;
      },
      restoreByData: function restoreByData() {
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        this._subGameNode.active = true;
        this.setLabel(this._lblPickMult, gameInfo.mult + "X");
        this._pickLeftNum = gameInfo.restCnt;
        this.refreshRestDice();
        var curPoint = gameInfo.currDices[gameInfo.currDices.length - 1];
        this.playSpine(this._spinDice, null, "animation1_1", false);
        this.refreshCurWinResultPanel();
        this.setPlayPickTipsAction(true);
      },
      enterGame: function enterGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var gameInfo;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              gameInfo = cc.vv.gameData.mapInfo.gameInfo;
              _this2._pickLeftNum = gameInfo.restCnt;
              _this2.setLabel(_this2._lblStartPrize, Global.FormatNumToComma(gameInfo.startPrize));
              _this2.init();
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      if (!(gameInfo.mult > 0)) {
                        _context2.next = 4;
                        break;
                      }
                      _this2.restoreByData();
                      _context2.next = 6;
                      break;

                     case 4:
                      _context2.next = 6;
                      return _this2.showStart();

                     case 6:
                      _context2.next = 8;
                      return _this2.showMain();

                     case 8:
                      _context2.next = 10;
                      return _this2.showResult();

                     case 10:
                      _context2.next = 12;
                      return _this2.exitGame();

                     case 12:
                      success();

                     case 13:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 5:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      exitGame: function exitGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      _context4.next = 2;
                      return _this3.playFullScreen(2);

                     case 2:
                      _this3.setSubGameNodeVisible(false);
                      success();

                     case 4:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x2) {
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
      showMain: function showMain() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var gameInfo;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      gameInfo = cc.vv.gameData.mapInfo.gameInfo;
                      if (!(gameInfo.mult <= 0)) {
                        _context6.next = 4;
                        break;
                      }
                      _context6.next = 4;
                      return _this4.playFullScreen(1.5);

                     case 4:
                      _this4._node_start.active = false;
                      _this4._node_main.active = true;
                      _context6.next = 8;
                      return _this4.awaitTime(.2);

                     case 8:
                      _context6.next = 10;
                      return _this4.awaitOrOperate();

                     case 10:
                      _this4.setPlayPickTipsAction(false);
                      _context6.next = 13;
                      return _this4.awaitTime(1);

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x3) {
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
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        if (isPlay) {
          this.playSpine(this._sprPickTips, null, "animation", true);
          this.playSpine(this._spineBubble, null, "animation", true);
        } else {
          this.playSpine(this._sprPickTips, null, "animation2", false);
          this._spineBubble.active = false;
        }
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success, failed) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      _this5.setPlayPickTipsAction(true);
                      _this5._btnSpin.getComponent(cc.Button).enabled = true;
                      _this5._btnSpin.off("click");
                      Global.btnClickEvent(_this5._btnSpin, _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                        var resp, gameInfo, lastPoint, curPoint;
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) switch (_context8.prev = _context8.next) {
                           case 0:
                            _this5.setPlayPickTipsAction(false);
                            _this5._btnSpin.getComponent(cc.Button).enabled = false;
                            _context8.next = 4;
                            return cc.vv.gameData.reqSubGame(Global.GOLD_TREASURE_MAP_RTYPE.OPERATE_SUBGAME);

                           case 4:
                            resp = _context8.sent;
                            if (!(200 === resp.code)) {
                              _context8.next = 31;
                              break;
                            }
                            gameInfo = resp.data.mapInfo.gameInfo;
                            lastPoint = Global.random(1, 6);
                            gameInfo.currDices.length >= 2 && (lastPoint = gameInfo.currDices[gameInfo.currDices.length - 2]);
                            curPoint = gameInfo.currDices[gameInfo.currDices.length - 1];
                            _this5._pickLeftNum = gameInfo.restCnt;
                            _this5.refreshRestDice();
                            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.land3_dice);
                            _this5.playSpine(_this5._spinDice, function() {
                              _this5.playSpine(_this5._spinDice, null, "animation1_1", false);
                            }, "animation" + curPoint, false);
                            _context8.next = 16;
                            return _this5.awaitTime(1);

                           case 16:
                            _this5.playSpine(_this5._spinFire, null, "animation", false);
                            _context8.next = 19;
                            return _this5.awaitTime(1);

                           case 19:
                            _context8.next = 21;
                            return _this5.flyDicePointToResultPanel(curPoint);

                           case 21:
                            if (!(_this5._pickLeftNum > 0)) {
                              _context8.next = 28;
                              break;
                            }
                            _context8.next = 24;
                            return _this5.awaitTime(1);

                           case 24:
                            _this5.setPlayPickTipsAction(true);
                            _this5._btnSpin.getComponent(cc.Button).enabled = true;
                            _context8.next = 29;
                            break;

                           case 28:
                            success();

                           case 29:
                            _context8.next = 33;
                            break;

                           case 31:
                            AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                            failed();

                           case 33:
                           case "end":
                            return _context8.stop();
                          }
                        }, _callee8);
                      })));

                     case 4:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x4, _x5) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      refreshRestDice: function refreshRestDice() {
        var _iterator2 = _createForOfIteratorHelper(this._restDiceList), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var dice = _step2.value;
            dice && (dice.active = false);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        for (var i = 1; i <= this._pickLeftNum; i++) this._restDiceList[i].active = true;
      },
      resetWinResultPanel: function resetWinResultPanel() {
        for (var i = 1; i <= 6; i++) {
          var list = this._winMultList[i];
          var _iterator3 = _createForOfIteratorHelper(list), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var winSpine = _step3.value;
              winSpine && (winSpine.active = false);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      },
      refreshCurWinResultPanel: function refreshCurWinResultPanel(curPoint) {
        var _this6 = this;
        this.resetWinResultPanel();
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        var isAddSpinTimes = false;
        var winEffNode = null;
        for (var i in gameInfo.currDices) {
          var point = gameInfo.currDices[i];
          for (var idx in this._winMultList[point]) {
            var winEff = this._winMultList[point][idx];
            if (!winEff.active) {
              winEff.active = true;
              parseInt(i) == this._winMultList.length - 1 && parseInt(idx) == this._winMultList[point].length - 1 && (isAddSpinTimes = true);
              this.playSpine(winEff, null, isAddSpinTimes ? "animation1" : "animation2", false);
              winEffNode = winEff;
              curPoint == point && parseInt(i) == gameInfo.currDices.length - 1 && function() {
                var spine = cc.find("spine", winEff);
                _this6.playSpine(spine, function() {
                  spine.active = false;
                });
              }();
              break;
            }
          }
        }
        return {
          isAddTimes: isAddSpinTimes,
          node: winEffNode
        };
      },
      flyDicePointToResultPanel: function flyDicePointToResultPanel(curPoint) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var data, targetNode, spineNodeMult, mult;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.land3_fly);
                      _context11.next = 3;
                      return _this7.playFlyDiceToPointEff(curPoint);

                     case 3:
                      _context11.next = 5;
                      return _this7.awaitTime(.2);

                     case 5:
                      data = _this7.refreshCurWinResultPanel(curPoint);
                      _context11.next = 8;
                      return _this7.awaitTime(.5);

                     case 8:
                      if (data.isAddTimes) {
                        _context11.next = 20;
                        break;
                      }
                      targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this7._node_main);
                      _context11.next = 12;
                      return _this7.playFlyEffect(data.node, targetNode);

                     case 12:
                      spineNodeMult = cc.find("nodePrizePool/spineNodeMult", _this7._node_main);
                      _this7.playSpine(spineNodeMult);
                      _context11.next = 16;
                      return _this7.awaitTime(.2);

                     case 16:
                      mult = cc.vv.gameData.mapInfo.gameInfo.mult;
                      _this7.setLabel(_this7._lblPickMult, mult ? mult + "X" : "");
                      _context11.next = 23;
                      break;

                     case 20:
                      _context11.next = 22;
                      return _this7.playFlyEffect(data.node, cc.find("nodeDetail/diceList", _this7._node_main));

                     case 22:
                      _this7.refreshRestDice();

                     case 23:
                      _context11.next = 25;
                      return _this7.awaitTime(.2);

                     case 25:
                      success();

                     case 26:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x6) {
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
      playFlyDiceToPointEff: function playFlyDiceToPointEff(curPoint) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function(success) {
                var spine = cc.find("nodeDetail/spineFlyToResult", _this8._node_main);
                _this8.playSpine(spine, function() {
                  spine.active = false;
                  success();
                }, "animation" + curPoint, false);
              }));

             case 1:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      playFlyEffect: function playFlyEffect(startNode, targetNode) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              return _context15.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
                  var startPos, targetPos, nodeFly;
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                     case 0:
                      startPos = _this9._node_main.convertToNodeSpaceAR(startNode.parent.convertToWorldSpaceAR(startNode.position));
                      targetPos = _this9._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this9._node_main);
                      nodeFly.position = startPos;
                      nodeFly.scale = 1;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      _context14.next = 8;
                      return _this9.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);

                     case 8:
                      success();

                     case 9:
                     case "end":
                      return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function(_x7) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      showResult: function showResult() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              return _context17.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success) {
                  var ui, baseCoin, mult, btnCollect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      _this10._node_win.active = true;
                      ui = _this10._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this10._lblStartPrize.getComponent(cc.Label).string);
                      mult = cc.vv.gameData.mapInfo.gameInfo.mult;
                      btnCollect = ui.getChildByName("btnCollect");
                      btnCollect.getComponent(cc.Button).enabled = false;
                      _this10.setLabel(ui.getChildByName("lblWinCoinShow"), mult + " X " + _this10.convertNumToShortStr(baseCoin) + " = " + _this10.convertNumToShortStr(mult * baseCoin));
                      _this10.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), mult * baseCoin);
                      cc.vv.gameData.setSubGameWinCoin(mult * baseCoin);
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_map2);
                      _context16.next = 13;
                      return _this10.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 13:
                      btnCollect.getComponent(cc.Button).enabled = true;
                      self = _this10;
                      clickFunc = function clickFunc() {
                        btnCollect.getComponent(cc.Button).enabled = false;
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        self.setLabel(ui.getChildByName("lblWinCoin"), self.convertNumToShortStr(mult * baseCoin));
                        self.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(btnCollect, clickFunc);
                      Global.btnClickEvent(btnCollect, function() {
                        btnCollect.stopAllActions();
                        clickFunc();
                      }, _this10);

                     case 18:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function(_x8) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context17.stop();
            }
          }, _callee17);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    GoddessOfDeath_subGameBase: "GoddessOfDeath_subGameBase"
  } ],
  GoddessOfDeath_subGameGoldShip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "acdcd/sAwxIDKcTlk9HzFtH", "GoddessOfDeath_subGameGoldShip");
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
    var MULT_ARR = [ 30, 60, 90 ];
    cc.Class({
      extends: require("GoddessOfDeath_subGameBase"),
      properties: {
        _subGameNodeName: "subGameGoldShip",
        _lblStartPrize: null,
        _lblPickMult: null,
        _boxItems: null,
        _sprPickTips: null,
        _pickLeftNum: 3,
        _pickMultNum: 0
      },
      onLoad: function onLoad() {
        this._super();
        this._lblStartPrize = cc.find("nodePrizePool/theme163_game_c_2/lblStartPrize", this._node_main);
        this._lblPickMult = cc.find("nodePrizePool/theme163_game_c_3/lblPickMult", this._node_main);
        this._sprPickTips = cc.find("theme163_game9_2/spineNode", this._node_main);
        this._boxItems = [];
        var template = cc.find("nodeBoxList", this._node_main).getChildByName("ItemNode");
        template.active = false;
        for (var i = 1; i <= 16; i++) {
          var box = cc.instantiate(template);
          box.active = true;
          box.parent = template.parent;
          box.name = "ItemNode" + i;
          this._boxItems.push(box);
        }
        this.init();
      },
      init: function init() {
        this.setLabel(this._lblStartPrize, "");
        this.setLabel(this._lblPickMult, this._pickMultNum ? this._pickMultNum + "X" : "");
        var _iterator = _createForOfIteratorHelper(this._boxItems), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            item.getChildByName("treasurebox").active = true;
            item.getChildByName("spine_treasurebox").active = false;
            item.getChildByName("treasurebox_open").active = false;
            item.getChildByName("sprPickMult").active = false;
            item.getChildByName("sprPickMultDie").active = false;
            this.setBoxGray(item, false);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      restoreByData: function restoreByData() {
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        this._subGameNode.active = true;
        this.setLabel(this._lblPickMult, gameInfo.mult + "X");
        for (var i in gameInfo.choiceIds) {
          var id = gameInfo.choiceIds[i];
          var result = gameInfo.choiceItems[i];
          var item = this._boxItems[id - 1];
          item.getChildByName("treasurebox").active = false;
          item.getChildByName("treasurebox_open").active = true;
          var sprMult = item.getChildByName("sprPickMult");
          sprMult.active = true;
          sprMult.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game_treasure").getSpriteFrame("theme141_game9_num_" + result.mult);
        }
      },
      enterGame: function enterGame() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var gameInfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this.init();
              gameInfo = cc.vv.gameData.mapInfo.gameInfo;
              _this._pickMultNum = gameInfo.mult;
              _this.setLabel(_this._lblStartPrize, Global.FormatNumToComma(gameInfo.startPrize));
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      if (!(_this._pickMultNum > 0)) {
                        _context.next = 4;
                        break;
                      }
                      _this.restoreByData();
                      _context.next = 6;
                      break;

                     case 4:
                      _context.next = 6;
                      return _this.showStart();

                     case 6:
                      _context.next = 8;
                      return _this.showMain();

                     case 8:
                      _context.next = 10;
                      return _this.showResult();

                     case 10:
                      _context.next = 12;
                      return _this.exitGame();

                     case 12:
                      success();

                     case 13:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      exitGame: function exitGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      _context3.next = 2;
                      return _this2.playFullScreen(2);

                     case 2:
                      _this2.setSubGameNodeVisible(false);
                      success();

                     case 4:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showMain: function showMain() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var _iterator2, _step2, item;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      _context5.next = 2;
                      return _this3.playFullScreen(1.5);

                     case 2:
                      _this3._node_start.active = false;
                      _this3._node_main.active = true;
                      _context5.next = 6;
                      return _this3.awaitTime(1);

                     case 6:
                      _context5.next = 8;
                      return _this3.awaitOrOperate();

                     case 8:
                      _this3.setPlayPickTipsAction(false);
                      _iterator2 = _createForOfIteratorHelper(_this3._boxItems);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          item = _step2.value;
                          _this3.setBoxGray(item, !item.getChildByName("treasurebox_open").active);
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context5.next = 13;
                      return _this3.awaitTime(2);

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        var _this4 = this;
        var playStarEff = function playStarEff(item) {
          _this4.playSpine(item.getChildByName("spine_treasurebox"), function() {
            playStarEff(item);
          }, Global.random0To1() > .6 ? "animation1" : "animation3", false);
        };
        if (isPlay) {
          this.playSpine(this._sprPickTips, null, "animation", true);
          var _iterator3 = _createForOfIteratorHelper(this._boxItems), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var item = _step3.value;
              if (!item.getChildByName("treasurebox_open").active) {
                item.getComponent(cc.Button).enabled = true;
                playStarEff(item);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          this.playSpine(this._sprPickTips, null, "animation2", false);
          var _iterator4 = _createForOfIteratorHelper(this._boxItems), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var _item = _step4.value;
              _item.getComponent(cc.Button).enabled = false;
              this.playSpine(_item.getChildByName("spine_treasurebox"), null, "animation4", false);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
                  var _iterator5, _step5, _loop;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _this5.setPlayPickTipsAction(true);
                      _iterator5 = _createForOfIteratorHelper(_this5._boxItems);
                      try {
                        _loop = function _loop() {
                          var item = _step5.value;
                          item.off("click");
                          Global.btnClickEvent(item, _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                            var resp, gameInfo, resultList, curChoiceData, name;
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) switch (_context7.prev = _context7.next) {
                               case 0:
                                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                                _this5.setPlayPickTipsAction(false);
                                _context7.next = 4;
                                return cc.vv.gameData.reqSubGame(Global.GOLD_TREASURE_MAP_RTYPE.OPERATE_SUBGAME, parseInt(item.name.substring(8, item.name.length)));

                               case 4:
                                resp = _context7.sent;
                                if (!(200 === resp.code)) {
                                  _context7.next = 34;
                                  break;
                                }
                                gameInfo = resp.data.mapInfo.gameInfo;
                                resultList = gameInfo.choiceItems;
                                curChoiceData = resultList[resultList.length - 1];
                                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.land6_open);
                                item.getChildByName("treasurebox").active = false;
                                _this5.playSpine(item.getChildByName("spine_treasurebox"), function() {
                                  item.getChildByName("spine_treasurebox").active = false;
                                  item.getChildByName("treasurebox_open").active = true;
                                }, "animation2", false);
                                if (!(1 == curChoiceData.type)) {
                                  _context7.next = 20;
                                  break;
                                }
                                item.getChildByName("sprPickMult").active = true;
                                item.getChildByName("sprPickMult").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game_treasure").getSpriteFrame("theme141_game9_num_" + curChoiceData.mult);
                                item.getChildByName("sprPickMult").scale = 0;
                                _context7.next = 18;
                                return _this5.playActions(item.getChildByName("sprPickMult"), [ cc.scaleTo(.8, 1) ]);

                               case 18:
                                _context7.next = 27;
                                break;

                               case 20:
                                name = "d" + curChoiceData.mult;
                                2 == curChoiceData.type && (name = "jackpot");
                                item.getChildByName("sprPickMultDie").active = true;
                                item.getChildByName("sprPickMultDie").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game_treasure").getSpriteFrame("theme141_game9_num_" + name);
                                item.getChildByName("sprPickMultDie").scale = 0;
                                _context7.next = 27;
                                return _this5.playActions(item.getChildByName("sprPickMultDie"), [ cc.scaleTo(.8, 1) ]);

                               case 27:
                                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.touzi_fly);
                                _context7.next = 30;
                                return _this5.playMultFlyEff(item, curChoiceData.mult);

                               case 30:
                                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.touzi_extra);
                                if (0 != curChoiceData.type) _this5.setPlayPickTipsAction(true); else {
                                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.land6_end);
                                  success();
                                }
                                _context7.next = 36;
                                break;

                               case 34:
                                AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                                failed();

                               case 36:
                               case "end":
                                return _context7.stop();
                              }
                            }, _callee7);
                          })), _this5);
                        };
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) _loop();
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                     case 3:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x4, _x5) {
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
      playMultFlyEff: function playMultFlyEff(itemNode, mult) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
                  var beginPos, targetNode, targetPos, nodeFly, spineNodeMult;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fly_mul);
                      beginPos = _this6._node_main.convertToNodeSpaceAR(itemNode.parent.convertToWorldSpaceAR(itemNode.position));
                      targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this6._node_main);
                      targetPos = _this6._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this6._node_main);
                      nodeFly.position = beginPos;
                      nodeFly.scale = 1;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      _context10.next = 10;
                      return _this6.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);

                     case 10:
                      spineNodeMult = cc.find("nodePrizePool/spineNodeMult", _this6._node_main);
                      _this6.playSpine(spineNodeMult);
                      _context10.next = 14;
                      return _this6.awaitTime(.2);

                     case 14:
                      _this6._pickMultNum += mult;
                      _this6.setLabel(_this6._lblPickMult, _this6._pickMultNum ? _this6._pickMultNum + "X" : "");
                      success();

                     case 17:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x6) {
                  return _ref6.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      setBoxGray: function setBoxGray(itemNode, isGray) {
        if (isGray) {
          if (Global.random0To1() > .6) {
            itemNode.getChildByName("sprPickMultDie").active = true;
            itemNode.getChildByName("sprPickMultDie").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game_treasure").getSpriteFrame("theme141_game9_num_d" + MULT_ARR[Math.floor(100 * Global.random0To1()) % MULT_ARR.length]);
          } else {
            itemNode.getChildByName("sprPickMult").active = true;
            itemNode.getChildByName("sprPickMult").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game_treasure").getSpriteFrame("theme141_game9_num_" + MULT_ARR[Math.floor(100 * Global.random0To1()) % MULT_ARR.length]);
          }
          this.playSpine(itemNode.getChildByName("spine_treasurebox"), null, "animation4", false);
        }
        var color = isGray ? cc.Color.GRAY : cc.Color.WHITE;
        var _iterator6 = _createForOfIteratorHelper(itemNode.children), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var subNode = _step6.value;
            subNode.color = color;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      },
      showResult: function showResult() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success) {
                  var ui, baseCoin, btnCollect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      _this7._node_win.active = true;
                      ui = _this7._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this7._lblStartPrize.getComponent(cc.Label).string);
                      btnCollect = ui.getChildByName("btnCollect");
                      btnCollect.getComponent(cc.Button).enabled = false;
                      _this7.setLabel(ui.getChildByName("lblWinCoinShow"), _this7._pickMultNum + " X " + _this7.convertNumToShortStr(baseCoin) + " = " + _this7.convertNumToShortStr(_this7._pickMultNum * baseCoin));
                      _this7.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), _this7._pickMultNum * baseCoin);
                      cc.vv.gameData.setSubGameWinCoin(_this7._pickMultNum * baseCoin);
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_map2);
                      _context12.next = 12;
                      return _this7.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 12:
                      btnCollect.getComponent(cc.Button).enabled = true;
                      self = _this7;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                        btnCollect.getComponent(cc.Button).enabled = false;
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        self.setLabel(ui.getChildByName("lblWinCoin"), self.convertNumToShortStr(self._pickMultNum * baseCoin));
                        self.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(btnCollect, clickFunc);
                      Global.btnClickEvent(btnCollect, function() {
                        btnCollect.stopAllActions();
                        clickFunc();
                      }, _this7);

                     case 17:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function(_x7) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    GoddessOfDeath_subGameBase: "GoddessOfDeath_subGameBase"
  } ],
  GoddessOfDeath_subGameMultWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79b9dLvW61NZbWBn5lQLnXj", "GoddessOfDeath_subGameMultWheel");
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
    var WHEEL_COLOR_CFG = [ [ 1, 2, 3, 6, 5, 1, 2, 4, 6, 5 ], [ 4, 3, 1, 5, 6, 4, 3, 2, 5, 6 ], [ 2, 3, 4, 6, 1, 2, 3, 4, 5, 1 ] ];
    cc.Class({
      extends: require("GoddessOfDeath_subGameBase"),
      properties: {
        _subGameNodeName: "subGameMultWheel",
        _lblStartPrize: null,
        _lblPickMult: null,
        _sprPickTips: null,
        _wheelList: null,
        _grayMaskList: null,
        _spineWheelWin: null,
        _winMultList: null,
        _spineMultWinList: null,
        _btnSpin: null
      },
      onLoad: function onLoad() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var nodeWheel, i, _i, j, winMultNode, _i2, spineWin;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._super();
              _this._lblStartPrize = cc.find("nodePrizePool/theme163_game_c_2/lblStartPrize", _this._node_main);
              _this._lblPickMult = cc.find("nodePrizePool/theme163_game_c_3/lblPickMult", _this._node_main);
              _this._sprPickTips = cc.find("spinTips", _this._node_main);
              nodeWheel = cc.find("wheelNode", _this._node_main);
              _this._btnSpin = cc.find("btnSpin", nodeWheel);
              _this._wheelList = [];
              _this._grayMaskList = [];
              for (i = 1; i <= 3; i++) {
                _this._wheelList[i] = cc.find("rorationWheel" + i, nodeWheel);
                _this._grayMaskList[i] = cc.find("grayMask" + i, nodeWheel);
              }
              _this._spineWheelWin = cc.find("spineWheelWin", nodeWheel);
              _this._winMultList = [];
              for (_i = 1; _i <= 6; _i++) {
                _this._winMultList[_i] = [];
                for (j = 1; j <= 3; j++) {
                  winMultNode = cc.find("nodePrizePool/theme163_game6_2/win_" + _i + "_" + j, _this._node_main);
                  winMultNode && (_this._winMultList[_i][j] = winMultNode);
                }
              }
              _this._spineMultWinList = [];
              for (_i2 = 1; _i2 <= 6; _i2++) {
                spineWin = cc.find("nodePrizePool/theme163_game6_2/spineWin" + _i2, _this._node_main);
                spineWin.active = false;
                _this._spineMultWinList[_i2] = spineWin;
              }
              _this.init();

             case 15:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      init: function init() {
        this.setLabel(this._lblPickMult, "");
        this.setLabel(this._lblStartPrize, "");
        var _iterator = _createForOfIteratorHelper(this._wheelList), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var wheel = _step.value;
            wheel && (wheel.rotation = 0);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var _iterator2 = _createForOfIteratorHelper(this._grayMaskList), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var mask = _step2.value;
            mask && (mask.active = false);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this._spineWheelWin.active = false;
        this._btnSpin.getComponent(cc.Button).interactable = true;
        this.resetWinResultPanel();
        for (var i = 1; i <= 6; i++) cc.find("nodePrizePool/theme163_game6_2/spineWin" + i, this._node_main).active = false;
      },
      restoreByData: function restoreByData() {
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        this._subGameNode.active = true;
        var curComb = gameInfo.finalColorComb[gameInfo.currStep - 1];
        for (var i = 1; i <= curComb.length; i++) this._wheelList[i].rotation = -36 * this.getWheelColorPos(i, curComb[i - 1]);
        this.refreshCurWinResultPanel();
        this.setPlayPickTipsAction(true);
      },
      enterGame: function enterGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var gameInfo;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this2.init();
              gameInfo = cc.vv.gameData.mapInfo.gameInfo;
              _this2.setLabel(_this2._lblStartPrize, Global.FormatNumToComma(gameInfo.startPrize));
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      if (!(gameInfo.currStep > 0)) {
                        _context2.next = 4;
                        break;
                      }
                      _this2.restoreByData();
                      _context2.next = 6;
                      break;

                     case 4:
                      _context2.next = 6;
                      return _this2.showStart();

                     case 6:
                      _context2.next = 8;
                      return _this2.showMain();

                     case 8:
                      _context2.next = 10;
                      return _this2.showResult();

                     case 10:
                      _context2.next = 12;
                      return _this2.exitGame();

                     case 12:
                      success();

                     case 13:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 4:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      exitGame: function exitGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      _context4.next = 2;
                      return _this3.playFullScreen(2);

                     case 2:
                      _this3.setSubGameNodeVisible(false);
                      success();

                     case 4:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x2) {
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
      showMain: function showMain() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var gameInfo;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      gameInfo = cc.vv.gameData.mapInfo.gameInfo;
                      if (!(gameInfo.currStep <= 0)) {
                        _context6.next = 4;
                        break;
                      }
                      _context6.next = 4;
                      return _this4.playFullScreen(1.5);

                     case 4:
                      _this4._node_start.active = false;
                      _this4._node_main.active = true;
                      _context6.next = 8;
                      return _this4.awaitTime(.2);

                     case 8:
                      _context6.next = 10;
                      return _this4.awaitOrOperate();

                     case 10:
                      _this4.setPlayPickTipsAction(false);
                      _context6.next = 13;
                      return _this4.awaitTime(1);

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x3) {
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
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        this._sprPickTips.stopAllActions();
        this._sprPickTips.scale = 1;
        if (isPlay) {
          this._sprPickTips.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .8), cc.scaleTo(.2, 1), cc.delayTime(1))));
          var _iterator3 = _createForOfIteratorHelper(this._grayMaskList), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var mask = _step3.value;
              mask && (mask.active = false);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success, failed) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      _this5.setPlayPickTipsAction(true);
                      _this5._btnSpin.getComponent(cc.Button).interactable = true;
                      _this5._btnSpin.off("click");
                      Global.btnClickEvent(_this5._btnSpin, _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                        var resp, gameInfo, curComb, animationList;
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) switch (_context8.prev = _context8.next) {
                           case 0:
                            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                            _this5.setPlayPickTipsAction(false);
                            _this5._btnSpin.getComponent(cc.Button).interactable = false;
                            _context8.next = 5;
                            return cc.vv.gameData.reqSubGame(Global.GOLD_TREASURE_MAP_RTYPE.OPERATE_SUBGAME);

                           case 5:
                            resp = _context8.sent;
                            if (!(200 === resp.code)) {
                              _context8.next = 18;
                              break;
                            }
                            gameInfo = resp.data.mapInfo.gameInfo;
                            curComb = gameInfo.finalColorComb[gameInfo.currStep - 1];
                            _context8.next = 11;
                            return _this5.rotateWheelToTarget(curComb);

                           case 11:
                            _context8.next = 13;
                            return _this5.awaitTime(7.5);

                           case 13:
                            _context8.next = 15;
                            return _this5.flyWinColorToResultPanel(curComb);

                           case 15:
                            if (gameInfo.mult <= 0) {
                              _this5.setPlayPickTipsAction(true);
                              _this5._btnSpin.getComponent(cc.Button).interactable = true;
                            } else {
                              _this5.flyWinColorToMultPos(gameInfo.finalColorId);
                              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.land4_full);
                              animationList = [ "animation", "animation2", "animation2", "animation3", "animation3", "animation3" ];
                              _this5.playSpine(_this5._spineMultWinList[gameInfo.finalColorId], null, animationList[gameInfo.finalColorId - 1], true);
                              success();
                            }
                            _context8.next = 20;
                            break;

                           case 18:
                            AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                            failed();

                           case 20:
                           case "end":
                            return _context8.stop();
                          }
                        }, _callee8);
                      })));

                     case 4:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x4, _x5) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      rotateWheelToTarget: function rotateWheelToTarget(curComb) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var i, rorationWheel, targetAngle, diffAngle, mRound;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.land4_spin);
                      i = 1;

                     case 2:
                      if (!(i <= 3)) {
                        _context11.next = 18;
                        break;
                      }
                      rorationWheel = _this6._wheelList[i];
                      rorationWheel.angle = 0;
                      targetAngle = -36 * _this6.getWheelColorPos(i, curComb[i - 1]);
                      diffAngle = targetAngle - rorationWheel.angle;
                      mRound = 6;
                      _context11.next = 10;
                      return _this6.playActions(rorationWheel, [ cc.rotateTo(.5 * mRound, 360 * mRound - diffAngle).easing(cc.easeSineInOut()) ]);

                     case 10:
                      _this6._grayMaskList[i].active = true;
                      _this6.playSpine(_this6._spineWheelWin, null, "animation" + i, false);
                      _context11.next = 14;
                      return _this6.awaitTime(.5);

                     case 14:
                      success();

                     case 15:
                      i++;
                      _context11.next = 2;
                      break;

                     case 18:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x6) {
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
      resetWinResultPanel: function resetWinResultPanel() {
        for (var i = 1; i <= 6; i++) for (var j = 1; j <= 3; j++) this._winMultList[i][j].color = cc.Color.GRAY;
      },
      refreshCurWinResultPanel: function refreshCurWinResultPanel() {
        this.resetWinResultPanel();
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        for (var i = 0; i < gameInfo.currStep; i++) {
          var colorComb = gameInfo.finalColorComb[i];
          var _iterator4 = _createForOfIteratorHelper(colorComb), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var colorIdx = _step4.value;
              for (var j = 1; j <= 3; j++) if (this._winMultList[colorIdx][j].color.equals(cc.Color.GRAY)) {
                this._winMultList[colorIdx][j].color = cc.Color.WHITE;
                break;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      },
      getWheelColorPos: function getWheelColorPos(wheelIdx, colorId) {
        var colorCfg = WHEEL_COLOR_CFG[wheelIdx - 1];
        for (var i = 0; i < colorCfg.length; i++) if (colorCfg[i] == colorId) return i;
      },
      getColorWinNode: function getColorWinNode(colorId) {
        for (var i = 1; i <= 3; i++) {
          var colorNode = this._winMultList[colorId][i];
          if (colorNode.color.equals(cc.Color.GRAY)) return colorNode;
        }
      },
      getColorCenterNode: function getColorCenterNode(colorId) {
        return this._winMultList[colorId][2];
      },
      flyWinColorToResultPanel: function flyWinColorToResultPanel(curComb) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success) {
                  var i, startNode, targetNode;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      i = 1;

                     case 1:
                      if (!(i <= 3)) {
                        _context13.next = 10;
                        break;
                      }
                      startNode = cc.find("wheelNode/wheelWinFrame/node" + i, _this7._node_main);
                      targetNode = _this7.getColorWinNode(curComb[i - 1]);
                      _context13.next = 6;
                      return _this7.playFlyEffect(startNode, targetNode, curComb[i - 1]);

                     case 6:
                      targetNode && (targetNode.color = cc.Color.WHITE);

                     case 7:
                      i++;
                      _context13.next = 1;
                      break;

                     case 10:
                      success();

                     case 11:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function(_x7) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      flyWinColorToMultPos: function flyWinColorToMultPos(winColor) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var startNode, targetNode, nodeFly, mult;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              startNode = _this8.getColorCenterNode(winColor);
              targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this8._node_main);
              _context15.next = 4;
              return _this8.playFlyEffect(startNode, targetNode);

             case 4:
              nodeFly = cc.find("nodePrizePool/spineNodeMult", _this8._node_main);
              _this8.playSpine(nodeFly);
              _context15.next = 8;
              return _this8.awaitTime(.2);

             case 8:
              mult = cc.vv.gameData.mapInfo.gameInfo.mult;
              _this8.setLabel(_this8._lblPickMult, mult ? mult + "X" : "");

             case 10:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      playFlyEffect: function playFlyEffect(startNode, targetNode, winColorId) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              return _context17.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success) {
                  var startPos, targetPos, nodeFly, animationList, dianliang;
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      if (!(startNode && targetNode)) {
                        _context16.next = 10;
                        break;
                      }
                      startPos = _this9._node_main.convertToNodeSpaceAR(startNode.parent.convertToWorldSpaceAR(startNode.position));
                      targetPos = _this9._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this9._node_main);
                      nodeFly.position = startPos;
                      nodeFly.scale = 1;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      if (winColorId) {
                        animationList = [ "animation", "animation2", "animation2", "animation3", "animation3", "animation3" ];
                        dianliang = nodeFly.getChildByName("shoujidianliang");
                        _this9.playSpine(dianliang, function() {
                          dianliang.active = false;
                        }, animationList[1], false);
                      }
                      _context16.next = 10;
                      return _this9.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);

                     case 10:
                      success();

                     case 11:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function(_x8) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context17.stop();
            }
          }, _callee17);
        }))();
      },
      showResult: function showResult() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
             case 0:
              return _context19.abrupt("return", new Promise(function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success) {
                  var ui, baseCoin, mult, btnCollect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      _this10._node_win.active = true;
                      ui = _this10._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this10._lblStartPrize.getComponent(cc.Label).string);
                      mult = cc.vv.gameData.mapInfo.gameInfo.mult;
                      btnCollect = ui.getChildByName("btnCollect");
                      btnCollect.getComponent(cc.Button).enabled = false;
                      _this10.setLabel(ui.getChildByName("lblWinCoinShow"), mult + " X " + _this10.convertNumToShortStr(baseCoin) + " = " + _this10.convertNumToShortStr(mult * baseCoin));
                      _this10.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), mult * baseCoin);
                      cc.vv.gameData.setSubGameWinCoin(mult * baseCoin);
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_map2);
                      _context18.next = 13;
                      return _this10.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 13:
                      btnCollect.getComponent(cc.Button).enabled = true;
                      self = _this10;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                        btnCollect.getComponent(cc.Button).enabled = false;
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        self.setLabel(ui.getChildByName("lblWinCoin"), self.convertNumToShortStr(mult * baseCoin));
                        self.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(btnCollect, clickFunc);
                      Global.btnClickEvent(btnCollect, function() {
                        btnCollect.stopAllActions();
                        clickFunc();
                      }, _this10);

                     case 18:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                }));
                return function(_x9) {
                  return _ref9.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context19.stop();
            }
          }, _callee19);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    GoddessOfDeath_subGameBase: "GoddessOfDeath_subGameBase"
  } ],
  GoddessOfDeath_subGameRenyu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fdd93HfYS9Ebo6CB8Haqp10", "GoddessOfDeath_subGameRenyu");
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
    var MULT_ARR = [ 16, 36, 60, 180, 600 ];
    cc.Class({
      extends: require("GoddessOfDeath_subGameBase"),
      properties: {
        _subGameNodeName: "subGameRenyu",
        _lblStartPrize: null,
        _lblPickMult: null,
        _lblPickLeft: null,
        _goldCoinItems: null,
        _sprPickTips: null,
        _pickLeftNum: 3,
        _pickMultNum: 0
      },
      onLoad: function onLoad() {
        this._super();
        this._lblStartPrize = cc.find("nodePrizePool/theme163_game_c_2/lblStartPrize", this._node_main);
        this._lblPickMult = cc.find("nodePrizePool/theme163_game_c_3/lblPickMult", this._node_main);
        this._lblPickLeft = cc.find("theme163_game5_5/lblPickLeft", this._node_main);
        this._sprPickTips = cc.find("theme163_game5_1", this._node_main);
        this._goldCoinItems = [];
        var listNode = cc.find("nodeRenyuGoldcoinList", this._node_main);
        var template = listNode.getChildByName("ItemNode");
        template.active = false;
        for (var i = 1; i <= 12; i++) {
          var itemNode = cc.instantiate(template);
          itemNode.parent = listNode;
          itemNode.name = "ItemNode" + i;
          itemNode.active = true;
          this._goldCoinItems.push(itemNode);
        }
        this.init();
      },
      init: function init() {
        this.setLabel(this._lblStartPrize, "");
        this.setLabel(this._lblPickMult, this._pickMultNum ? this._pickMultNum + "X" : "");
        var _iterator = _createForOfIteratorHelper(this._goldCoinItems), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            item.getChildByName("spineRenyuGoldcoin").active = true;
            item.getChildByName("sprPickMult").active = false;
            item.getChildByName("sprAdd1Pick").active = false;
            this.setGoldCoinGray(item, false);
            this.playSpine(item.getChildByName("spineRenyuGoldcoin"), null, "animation3", false);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      restoreByData: function restoreByData() {
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        this._subGameNode.active = true;
        this.setLabel(this._lblPickMult, gameInfo.mult + "X");
        for (var i in gameInfo.choiceIds) {
          var id = gameInfo.choiceIds[i];
          var result = gameInfo.choiceItems[i];
          var item = this._goldCoinItems[id - 1];
          var sprMult = item.getChildByName("sprPickMult");
          sprMult.active = true;
          sprMult.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game_gun").getSpriteFrame("theme141_game5_cnt" + result.mult);
          var add1Pick = result.cnt;
          if (add1Pick) {
            sprMult.scale = .75;
            var sprAddPick = item.getChildByName("sprAdd1Pick");
            sprAddPick.active = true;
          }
          this.playSpine(item.getChildByName("spineRenyuGoldcoin"), null, "animation4", false);
        }
      },
      enterGame: function enterGame() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var gameInfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this.init();
              gameInfo = cc.vv.gameData.mapInfo.gameInfo;
              _this._pickLeftNum = gameInfo.restCnt;
              _this._pickMultNum = gameInfo.mult;
              _this.setLabel(_this._lblStartPrize, Global.FormatNumToComma(gameInfo.startPrize));
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      if (!(_this._pickMultNum <= 0)) {
                        _context.next = 3;
                        break;
                      }
                      _context.next = 3;
                      return _this.showStart();

                     case 3:
                      _context.next = 5;
                      return _this.showMain();

                     case 5:
                      _context.next = 7;
                      return _this.showResult();

                     case 7:
                      _context.next = 9;
                      return _this.exitGame();

                     case 9:
                      success();

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

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      exitGame: function exitGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      _context3.next = 2;
                      return _this2.playFullScreen(2);

                     case 2:
                      _this2.setSubGameNodeVisible(false);
                      success();

                     case 4:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showMain: function showMain() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var _iterator2, _step2, item;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      if (!(_this3._pickMultNum <= 0)) {
                        _context5.next = 3;
                        break;
                      }
                      _context5.next = 3;
                      return _this3.playFullScreen(1.5);

                     case 3:
                      _this3._node_start.active = false;
                      _this3._node_main.active = true;
                      _this3.setLabel(_this3._lblPickLeft, _this3._pickLeftNum);
                      _this3._pickMultNum > 0 && _this3.restoreByData();
                      _context5.next = 9;
                      return _this3.awaitTime(1);

                     case 9:
                      _context5.next = 11;
                      return _this3.awaitOrOperate();

                     case 11:
                      _this3.setPlayPickTipsAction(false);
                      _iterator2 = _createForOfIteratorHelper(_this3._goldCoinItems);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          item = _step2.value;
                          _this3.setGoldCoinGray(item, !item.getChildByName("sprPickMult").active);
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context5.next = 16;
                      return _this3.awaitTime(2);

                     case 16:
                      success();

                     case 17:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        var _this4 = this;
        if (isPlay) {
          this._sprPickTips.scale = 1;
          this._sprPickTips.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .9), cc.scaleTo(.2, 1), cc.delayTime(2))));
          var _iterator3 = _createForOfIteratorHelper(this._goldCoinItems), _step3;
          try {
            var _loop = function _loop() {
              var item = _step3.value;
              if (!item.getChildByName("sprPickMult").active) {
                setTimeout(function() {
                  item.getChildByName("sprPickMult").active || _this4.playSpine(item.getChildByName("spineRenyuGoldcoin"), null, "animation1", true);
                }, Global.random0To1() >= .5 ? 500 : 1500);
                item.getComponent(cc.Button).enabled = true;
              }
            };
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) _loop();
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          this._sprPickTips.stopAllActions();
          this._sprPickTips.scale = 1;
          var _iterator4 = _createForOfIteratorHelper(this._goldCoinItems), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var item = _step4.value;
              item.getChildByName("sprPickMult").active || this.playSpine(item.getChildByName("spineRenyuGoldcoin"), null, "animation3", false);
              item.getComponent(cc.Button).enabled = false;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
                  var _iterator5, _step5, _loop2;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _this5.setPlayPickTipsAction(true);
                      _iterator5 = _createForOfIteratorHelper(_this5._goldCoinItems);
                      try {
                        _loop2 = function _loop2() {
                          var item = _step5.value;
                          item.off("click");
                          Global.btnClickEvent(item, _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                            var resp, gameData, resultList, curChoiceData, add1Pick;
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) switch (_context7.prev = _context7.next) {
                               case 0:
                                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                                _this5.setPlayPickTipsAction(false);
                                _context7.next = 4;
                                return cc.vv.gameData.reqSubGame(Global.GOLD_TREASURE_MAP_RTYPE.OPERATE_SUBGAME, parseInt(item.name.substring(8, item.name.length)));

                               case 4:
                                resp = _context7.sent;
                                if (!(200 === resp.code)) {
                                  _context7.next = 27;
                                  break;
                                }
                                gameData = resp.data.mapInfo.gameInfo;
                                resultList = gameData.choiceItems;
                                curChoiceData = resultList[resultList.length - 1];
                                _this5._pickLeftNum--;
                                _this5.playSpine(item.getChildByName("spineRenyuGoldcoin"), function() {
                                  _this5.playSpine(item.getChildByName("spineRenyuGoldcoin"), null, "animation4", false);
                                }, "animation2", false);
                                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.land5_click);
                                _this5.setLabel(_this5._lblPickLeft, _this5._pickLeftNum);
                                item.getChildByName("sprPickMult").active = true;
                                item.getChildByName("sprPickMult").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game_gun").getSpriteFrame("theme141_game5_cnt" + curChoiceData.mult);
                                add1Pick = curChoiceData.cnt;
                                _this5._pickLeftNum = gameData.restCnt;
                                if (add1Pick) {
                                  item.getChildByName("sprAdd1Pick").active = true;
                                  _this5.playActions(item.getChildByName("sprAdd1Pick"), [ cc.scaleTo(.5, 1) ]);
                                }
                                _context7.next = 20;
                                return _this5.playActions(item.getChildByName("sprPickMult"), [ cc.scaleTo(.5, add1Pick ? .75 : 1) ]);

                               case 20:
                                add1Pick && _this5.playAddPickFlyEff(item);
                                _context7.next = 23;
                                return _this5.playMultFlyEff(item, curChoiceData.mult);

                               case 23:
                                _this5.setLabel(_this5._lblPickLeft, _this5._pickLeftNum);
                                _this5._pickLeftNum > 0 ? _this5.setPlayPickTipsAction(true) : success();
                                _context7.next = 29;
                                break;

                               case 27:
                                AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                                failed();

                               case 29:
                               case "end":
                                return _context7.stop();
                              }
                            }, _callee7);
                          })), _this5);
                        };
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) _loop2();
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                     case 3:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x4, _x5) {
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
      playMultFlyEff: function playMultFlyEff(itemNode, mult) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
                  var beginPos, targetNode, targetPos, nodeFly, spineNodeMult;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      beginPos = _this6._node_main.convertToNodeSpaceAR(itemNode.parent.convertToWorldSpaceAR(itemNode.position));
                      targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this6._node_main);
                      targetPos = _this6._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this6._node_main);
                      nodeFly.position = beginPos;
                      nodeFly.scale = 1;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      _context10.next = 9;
                      return _this6.playActions(nodeFly, [ cc.moveTo(.3, targetPos), cc.scaleTo(.1, 0) ]);

                     case 9:
                      spineNodeMult = cc.find("nodePrizePool/spineNodeMult", _this6._node_main);
                      _this6.playSpine(spineNodeMult);
                      _context10.next = 13;
                      return _this6.awaitTime(.2);

                     case 13:
                      _this6._pickMultNum += mult;
                      _this6.setLabel(_this6._lblPickMult, _this6._pickMultNum ? _this6._pickMultNum + "X" : "");
                      success();

                     case 16:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x6) {
                  return _ref6.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      playAddPickFlyEff: function playAddPickFlyEff(itemNode) {
        var beginPos = this._node_main.convertToNodeSpaceAR(itemNode.parent.convertToWorldSpaceAR(itemNode.position));
        var targetPos = this._node_main.convertToNodeSpaceAR(this._lblPickLeft.parent.convertToWorldSpaceAR(this._lblPickLeft.position));
        var nodeFly = cc.find("nodeFlyPickNum", this._node_main);
        nodeFly.position = beginPos;
        nodeFly.scale = 1;
        var p = nodeFly.getComponent(cc.ParticleSystem);
        p.resetSystem();
        this.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);
      },
      setGoldCoinGray: function setGoldCoinGray(itemNode, isGray) {
        if (isGray) {
          this.playSpine(itemNode.getChildByName("spineRenyuGoldcoin"), null, "animation3", false);
          var isAddPick = Global.random0To1() > .7;
          itemNode.getChildByName("sprPickMult").active = true;
          itemNode.getChildByName("sprPickMult").scale = isAddPick ? .75 : 1;
          itemNode.getChildByName("sprPickMult").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game_gun").getSpriteFrame("theme141_game5_cnt" + MULT_ARR[Math.floor(100 * Global.random0To1()) % MULT_ARR.length]);
          itemNode.getChildByName("sprAdd1Pick").active = isAddPick;
        }
        var color = isGray ? cc.Color.GRAY : cc.Color.WHITE;
        var _iterator6 = _createForOfIteratorHelper(itemNode.children), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var subNode = _step6.value;
            subNode.color = color;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      },
      showResult: function showResult() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success) {
                  var ui, baseCoin, btnCollect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      _this7._node_win.active = true;
                      ui = _this7._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this7._lblStartPrize.getComponent(cc.Label).string);
                      btnCollect = ui.getChildByName("btnCollect");
                      btnCollect.getComponent(cc.Button).enabled = false;
                      _this7.setLabel(ui.getChildByName("lblWinCoinShow"), _this7._pickMultNum + " X " + _this7.convertNumToShortStr(baseCoin) + " = " + _this7.convertNumToShortStr(_this7._pickMultNum * baseCoin));
                      _this7.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), _this7._pickMultNum * baseCoin);
                      cc.vv.gameData.setSubGameWinCoin(_this7._pickMultNum * baseCoin);
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_map2);
                      _context12.next = 12;
                      return _this7.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 12:
                      btnCollect.getComponent(cc.Button).enabled = true;
                      self = _this7;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                        btnCollect.getComponent(cc.Button).enabled = false;
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        self.setLabel(ui.getChildByName("lblWinCoin"), self.convertNumToShortStr(self._pickMultNum * baseCoin));
                        self.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(btnCollect, clickFunc);
                      Global.btnClickEvent(btnCollect, function() {
                        btnCollect.stopAllActions();
                        clickFunc();
                      }, _this7);

                     case 17:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function(_x7) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    GoddessOfDeath_subGameBase: "GoddessOfDeath_subGameBase"
  } ],
  GoddessOfDeath_subGameYellowFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fdd1b20Xs1EwJbu+MMFpWcW", "GoddessOfDeath_subGameYellowFish");
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
    var BUBBLE_ANIMATION = [ "3", "1", "4", "2", "5" ];
    cc.Class({
      extends: require("GoddessOfDeath_subGameBase"),
      properties: {
        _subGameNodeName: "subGameYellowFish",
        _lblStartPrize: null,
        _sprPickTips: null,
        _stonesList: null,
        _winList: null,
        _chooseCount: 0
      },
      onLoad: function onLoad() {
        this._super();
        this._lblStartPrize = cc.find("nodePrizePool/theme163_game_c_2/lblStartPrize", this._node_main);
        this._sprPickTips = cc.find("nodeDetail/pickTips", this._node_main);
        this._stonesList = [];
        this._winList = [];
        for (var i = 1; i <= 5; i++) {
          this._stonesList[i] = cc.find("nodeDetail/stone/stone" + i, this._node_main);
          this._winList[i] = cc.find("nodeDetail/win/win" + i, this._node_main);
        }
        this.init();
      },
      init: function init() {
        for (var i = 1; i <= 5; i++) {
          this._winList[i].active = false;
          var roralhNode = this._stonesList[i];
          roralhNode.getComponent(cc.Button).enabled = true;
          roralhNode.getChildByName("sprStone").active = true;
          var parrot = roralhNode.getChildByName("spineBreakStone");
          parrot.active = false;
          var bubble = roralhNode.getChildByName("spineGem");
          bubble.color = cc.Color.WHITE;
          bubble.active = false;
        }
        var _iterator = _createForOfIteratorHelper(cc.find("nodeDetail/mult", this._node_main).children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var node = _step.value;
            node.active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      restoreByData: function restoreByData() {
        var _this = this;
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        this._subGameNode.active = true;
        this._chooseCount = gameInfo.useCnt;
        var _loop = function _loop(i) {
          var roralIdx = parseInt(i) + 1;
          var winIdx = gameInfo.gems[i];
          var roralhNode = _this._stonesList[roralIdx];
          roralhNode.getComponent(cc.Button).enabled = 0 == winIdx;
          roralhNode.getChildByName("sprStone").active = 0 == winIdx;
          var gemNode = roralhNode.getChildByName("spineGem");
          0 != winIdx && _this.scheduleOnce(function() {
            _this.playSpine(gemNode, null, "animation" + BUBBLE_ANIMATION[winIdx - 1], true);
          }, 1);
          winIdx > 0 && (_this._winList[winIdx].active = true);
        };
        for (var i in gameInfo.gems) _loop(i);
      },
      enterGame: function enterGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var gameInfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.init();
              gameInfo = cc.vv.gameData.mapInfo.gameInfo;
              _this2._chooseCount = gameInfo.useCnt || 0;
              _this2.setLabel(_this2._lblStartPrize, Global.FormatNumToComma(gameInfo.startPrize));
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      if (!(0 == _this2._chooseCount)) {
                        _context.next = 5;
                        break;
                      }
                      _context.next = 3;
                      return _this2.showStart();

                     case 3:
                      _context.next = 6;
                      break;

                     case 5:
                      _this2.restoreByData();

                     case 6:
                      _context.next = 8;
                      return _this2.showMain();

                     case 8:
                      _context.next = 10;
                      return _this2.showResult();

                     case 10:
                      _context.next = 12;
                      return _this2.exitGame();

                     case 12:
                      success();

                     case 13:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      exitGame: function exitGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      _context3.next = 2;
                      return _this3.playFullScreen(2);

                     case 2:
                      _this3.setSubGameNodeVisible(false);
                      success();

                     case 4:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showMain: function showMain() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var gameInfo;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      gameInfo = cc.vv.gameData.mapInfo.gameInfo;
                      if (!(gameInfo.mult <= 0)) {
                        _context5.next = 4;
                        break;
                      }
                      _context5.next = 4;
                      return _this4.playFullScreen(1.5);

                     case 4:
                      _this4._node_start.active = false;
                      _this4._node_main.active = true;
                      _context5.next = 8;
                      return _this4.awaitTime(.2);

                     case 8:
                      _context5.next = 10;
                      return _this4.awaitOrOperate();

                     case 10:
                      _this4.setPlayPickTipsAction(false);
                      _context5.next = 13;
                      return _this4.awaitTime(1);

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        isPlay ? this.playSpine(this._sprPickTips, null, "animation", true) : this.playSpine(this._sprPickTips, null, "animation2", true);
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        for (var i in gameInfo.gems) {
          var roralIdx = parseInt(i) + 1;
          var winIdx = gameInfo.gems[i];
          var roralhNode = this._stonesList[roralIdx];
          roralhNode.getComponent(cc.Button).enabled = isPlay && 0 == winIdx;
        }
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
                  var _loop2, i;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _this5.setPlayPickTipsAction(true);
                      _loop2 = function _loop2(i) {
                        var item = _this5._stonesList[i];
                        item.off("click");
                        Global.btnClickEvent(item, _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                          var resp, gameInfo, winIdx, stone, breakStone, gemNode, j, titem, tgemNode;
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) switch (_context7.prev = _context7.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                              _this5.setPlayPickTipsAction(false);
                              _context7.next = 4;
                              return cc.vv.gameData.reqSubGame(Global.GOLD_TREASURE_MAP_RTYPE.OPERATE_SUBGAME, i);

                             case 4:
                              resp = _context7.sent;
                              if (!(200 === resp.code)) {
                                _context7.next = 35;
                                break;
                              }
                              gameInfo = resp.data.mapInfo.gameInfo;
                              winIdx = gameInfo.gems[i - 1];
                              item.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.land1_break);
                              stone = item.getChildByName("sprStone");
                              stone.active = false;
                              breakStone = item.getChildByName("spineBreakStone");
                              _this5.playSpine(breakStone, function() {
                                breakStone.active = false;
                              }, "animation", false);
                              gemNode = item.getChildByName("spineGem");
                              _this5.playSpine(gemNode, null, "animation" + BUBBLE_ANIMATION[winIdx - 1], true);
                              _context7.next = 18;
                              return _this5.awaitTime(.5);

                             case 18:
                              _this5.playWin(winIdx);
                              _context7.next = 21;
                              return _this5.awaitTime(.5);

                             case 21:
                              if (!(gameInfo.winCoin > 0)) {
                                _context7.next = 32;
                                break;
                              }
                              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.land1_full);
                              cc.find("nodeDetail/mult/spineMult_" + gameInfo.mult, _this5._node_main).active = true;
                              _context7.next = 26;
                              return _this5.awaitTime(.8);

                             case 26:
                              for (j = 1; j <= 5; j++) {
                                titem = _this5._stonesList[j];
                                tgemNode = titem.getChildByName("spineGem");
                                if (!tgemNode.active) {
                                  titem.getChildByName("sprStone").active = false;
                                  titem.getChildByName("spineBreakStone").active = false;
                                  tgemNode.color = cc.Color.GRAY;
                                  _this5.playSpine(tgemNode, null, "animation" + BUBBLE_ANIMATION[gameInfo.gems[j - 1] - 1], true);
                                }
                              }
                              _context7.next = 29;
                              return _this5.awaitTime(1.5);

                             case 29:
                              success();
                              _context7.next = 33;
                              break;

                             case 32:
                              _this5.setPlayPickTipsAction(true);

                             case 33:
                              _context7.next = 37;
                              break;

                             case 35:
                              AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                              failed();

                             case 37:
                             case "end":
                              return _context7.stop();
                            }
                          }, _callee7);
                        })));
                      };
                      for (i = 1; i <= 5; i++) _loop2(i);

                     case 3:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x4, _x5) {
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
      playWin: function playWin(winIdx) {
        this._winList[winIdx].active = true;
        var _iterator2 = _createForOfIteratorHelper(this._winList[winIdx].children), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var winnode = _step2.value;
            this.playSpine(winnode.getChildByName("spine_lizi"), null, "animation", false);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      showResult: function showResult() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
                  var ui, baseCoin, mult, btnCollect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      _this6._node_win.active = true;
                      ui = _this6._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this6._lblStartPrize.getComponent(cc.Label).string);
                      mult = cc.vv.gameData.mapInfo.gameInfo.mult;
                      btnCollect = ui.getChildByName("btnCollect");
                      btnCollect.getComponent(cc.Button).enabled = false;
                      _this6.setLabel(ui.getChildByName("lblWinCoinShow"), mult + " X " + _this6.convertNumToShortStr(baseCoin) + " = " + _this6.convertNumToShortStr(mult * baseCoin));
                      _this6.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), mult * baseCoin);
                      cc.vv.gameData.setSubGameWinCoin(mult * baseCoin);
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.popup_map2);
                      _context10.next = 13;
                      return _this6.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 13:
                      btnCollect.getComponent(cc.Button).enabled = true;
                      self = _this6;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
                        btnCollect.getComponent(cc.Button).enabled = false;
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        self.setLabel(ui.getChildByName("lblWinCoin"), self.convertNumToShortStr(mult * baseCoin));
                        self.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(btnCollect, clickFunc);
                      Global.btnClickEvent(btnCollect, function() {
                        btnCollect.stopAllActions();
                        clickFunc();
                      }, _this6);

                     case 18:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x6) {
                  return _ref6.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    GoddessOfDeath_subGameBase: "GoddessOfDeath_subGameBase"
  } ]
}, {}, [ "GoddessOfDeath_Bottom", "GoddessOfDeath_Cfg", "GoddessOfDeath_GameData", "GoddessOfDeath_Logic", "GoddessOfDeath_Map", "GoddessOfDeath_MapCollectProgress", "GoddessOfDeath_Pop", "GoddessOfDeath_Slots", "GoddessOfDeath_SlotsMgr", "GoddessOfDeath_Sound", "GoddessOfDeath_Symbol", "GoddessOfDeath_subGameBase", "GoddessOfDeath_subGameBeke", "GoddessOfDeath_subGameCollectWheel", "GoddessOfDeath_subGameDice", "GoddessOfDeath_subGameGoldShip", "GoddessOfDeath_subGameMultWheel", "GoddessOfDeath_subGameRenyu", "GoddessOfDeath_subGameYellowFish" ]);