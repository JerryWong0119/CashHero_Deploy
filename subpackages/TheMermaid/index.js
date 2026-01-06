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
  TheMermaid_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1211uCyxhFn6zz2Xh10x01", "TheMermaid_Cfg");
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
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        stop_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation",
          zIndex: 100
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
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "animation2",
          zIndex: 100
        },
        stop_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 101, {
        node: "s101",
        win_node: "",
        win_ani: ""
      }), _defineProperty(_symbol, 102, {
        node: "s102",
        win_node: "",
        win_ani: ""
      }), _defineProperty(_symbol, 103, {
        node: "s103",
        win_node: "",
        win_ani: ""
      }), _defineProperty(_symbol, 111, {
        node: "d101",
        win_node: "",
        win_ani: ""
      }), _defineProperty(_symbol, 112, {
        node: "d102",
        win_node: "",
        win_ani: ""
      }), _defineProperty(_symbol, 113, {
        node: "d103",
        win_node: "",
        win_ani: ""
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TheMermaid_Slots",
        Reels: "LMSlots_Reel_Base",
        Symbols: "TheMermaid_Symbol"
      },
      helpItems: [ "games/TheMermaid/prefab/LMSlots_Help_item1", "games/TheMermaid/prefab/LMSlots_Help_item2", "games/TheMermaid/prefab/LMSlots_Help_item3", "games/TheMermaid/prefab/LMSlots_Help_item4", "games/TheMermaid/prefab/LMSlots_Help_item5", "games/TheMermaid/prefab/LMSlots_Help_item8", "games/TheMermaid/prefab/LMSlots_Help_item9" ],
      col: 15,
      row: 3,
      scatterId: 2,
      collectId: 1,
      bonusId: 13,
      symbolPrefab: "TheMermaid_Symbol",
      symbolSize: {
        height: 98
      },
      randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      kuang: "TheMermaid_kuang",
      autoModelDelay: .8,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      AddAntiTime: 2.3,
      bounce: true,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      normalBgm: "base_bgm",
      commEffect: {
        path: "games/TheMermaid/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ],
        clickSpin: "common_click"
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/TheMermaid/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2400
      }, {
        id: [ 13 ],
        mini: 10,
        counts: [ 0, 0, 1, 1, 1, 10 ],
        antiNode: "",
        path: "games/TheMermaid/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_bonus",
        antSound: "reel_notify",
        antSpeed: 1700
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheMermaid_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef48e3K1jJA4ZBJS7mLqSgQ", "TheMermaid_GameData");
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
        needBet: 0
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.mapInfo = this._deskInfo.mapInfo;
        this.progressData = this.mapInfo.progressData;
        this.needBet = this.mapInfo.needBet;
      },
      GetGameWin: function GetGameWin() {
        if (!this._gameInfo) return 0;
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
      GetGameTotalFreeWin: function GetGameTotalFreeWin() {
        if (!this._gameInfo) return 0;
        return this._gameInfo.freeWinCoin;
      },
      isEnterMapGames: function isEnterMapGames() {
        return cc.vv.gameData.mapInfo.state != Global.QUEENOFSEA_MAP_STATE.COLLECT_ENERGY;
      },
      isTriggerFreeGames: function isTriggerFreeGames() {
        return this._deskInfo.restFreeCount > 0 && this._deskInfo.restFreeCount == this._deskInfo.allFreeCount;
      },
      isFinishFreeGames: function isFinishFreeGames() {
        return 0 == this._deskInfo.restFreeCount && this._deskInfo.allFreeCount > 0;
      },
      isFreeGamesTime: function isFreeGamesTime() {
        return this._deskInfo.allFreeCount > 0 && this._deskInfo.restFreeCount < this._deskInfo.allFreeCount;
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
          this.mapInfo = msg.mapInfo;
          this.progressData = msg.mapInfo.progressData;
          this.wildCols = msg.wildCols;
          this._super(msg);
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
  TheMermaid_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf2deZS60hO0bM83gy4mLkX", "TheMermaid_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.mainPanel = cc.find("safe_node", this.node);
        this.soundMgr = this.addComponent("TheMermaid_Sound");
        this.InitCommComponent();
        this.QueenSeaMap = cc.find("node_pop_ui/map", this.mainPanel).getComponent("TheMermaid_Map");
        this.QueenSeaCollectProgress = cc.find("slots/collect_progress", this.mainPanel).getComponent("TheMermaid_MapCollectProgress");
        this.QueenSeaStar = cc.find("slots/collect_seaStar", this.mainPanel).getComponent("TheMermaid_StarFish");
        this.topCmp = cc.vv.gameData.GetTopScript();
        this.bottomCmp = cc.vv.gameData.GetBottomScript();
        this.slots = cc.vv.gameData.GetSlotsScript();
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
      start: function start() {
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheMermaid_MapCollectProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a29bfMm1A9GiKkCpNvaVV/z", "TheMermaid_MapCollectProgress");
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
        spine_progress_coming: sp.Skeleton,
        spine_progress_add: sp.Skeleton
      },
      onLoad: function onLoad() {
        var progressData = cc.vv.gameData.progressData;
        this.setProgress(progressData.needCnt > 0 ? progressData.totalCnt / progressData.needCnt : 0);
        this.setCollectNum(progressData.needCnt - progressData.totalCnt);
        this._initListener();
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
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (this.spine_tips.node.active && cc.vv.gameData.GetMaxBetIdx() >= cc.vv.gameData.needBet) {
          cc.vv.gameData.SetBetIdx(cc.vv.gameData.needBet);
          cc.vv.gameData._serverRawMult = cc.vv.gameData.needBet;
          cc.vv.UserManager.setEnterSelectBet(null);
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
          var endPos, promiseArr, progressData, cnt;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              percent = Math.max(Math.min(percent, 1), 0);
              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.collect);
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
                  }).call(function() {
                    lz.removeFromParent();
                    res();
                  }).start();
                }));
              });
              _context.next = 7;
              return Promise.all(promiseArr);

             case 7:
              _this.setProgress(percent);
              progressData = cc.vv.gameData.progressData;
              cnt = Math.max(progressData.needCnt - progressData.totalCnt, 0);
              _this.setCollectNum(cnt);

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showCollect: function showCollect(boo) {
        var _this2 = this;
        if (this._isCollectState != boo) if (boo) {
          Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.unlock);
          this.spine_tips.node.active = true;
          this.spine_tips.setAnimation(0, "animation3", false);
          this.spine_tips.setCompleteListener(function() {
            _this2.spine_tips.node.active = false;
            _this2.spine_tips.setCompleteListener(null);
          });
        } else {
          Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.lock);
          this.spine_tips.node.active = true;
          this.spine_tips.setAnimation(0, "animation2", true);
        }
        this._isCollectState = boo;
      },
      setProgress: function setProgress(percent) {
        var _this3 = this;
        this.progressBar.progress = percent;
        if (percent > 0) {
          this.spine_progress_coming.node.x = this.progressBar.node.width * percent;
          this.spine_progress_add.node.x = this.spine_progress_coming.node.x;
          this.spine_progress_add.node.active = true;
          this.spine_progress_add.setAnimation(0, "animation", false);
          this.spine_progress_add.setCompleteListener(function() {
            _this3.spine_progress_add.node.active = false;
            _this3.spine_progress_add.setCompleteListener(null);
            if (1 == percent) {
              _this3.spine_progress_complete.node.active = true;
              _this3.spine_progress_complete.setAnimation(0, "animation", false);
            }
          });
        } else this.spine_progress_coming.node.x = 0;
      },
      onBtnShowInfoClicked: function onBtnShowInfoClicked() {
        var _this4 = this;
        if (cc.vv.gameData.GetFreeTime() > 0) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
        cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(0);
        SlotsFacade.QueenSeaMap.enterMap(true, true);
        this.setBtnsClickEnable(false);
        this.scheduleOnce(function() {
          _this4.setBtnsClickEnable(true);
        }, 1);
      }
    });
    cc._RF.pop();
  }, {} ],
  TheMermaid_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86ed0aPn41J0IT3R48+AU9u", "TheMermaid_Map");
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
    eventId.QUEEN_ENTER_MAP = "QUEEN_ENTER_MAP";
    eventId.QUEEN_EXIT_MAP = "QUEEN_EXIT_MAP";
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
      lightAnim: "animation1"
    }, {
      idx: 2,
      pointNum: 7,
      lightAnim: "animation6"
    }, {
      idx: 3,
      pointNum: 7,
      lightAnim: "animation5"
    }, {
      idx: 4,
      pointNum: 7,
      lightAnim: "animation4"
    }, {
      idx: 5,
      pointNum: 7,
      lightAnim: "animation3"
    }, {
      idx: 6,
      pointNum: 7,
      lightAnim: "animation2"
    }, {
      idx: 7,
      pointNum: 4,
      lightAnim: "animation7"
    }, {
      idx: 8,
      pointNum: 4,
      lightAnim: "animation8"
    }, {
      idx: 9,
      pointNum: 4,
      lightAnim: "animation9"
    }, {
      idx: 10,
      pointNum: 4,
      lightAnim: "animation10"
    } ];
    var COMPLETE_SP = [ 0, 1, 5, 4, 3, 2 ];
    var g = require("GlobalVar");
    g.QUEENOFSEA_SUBGAME = {
      BEKE: 1,
      YELLOW_FISH: 2,
      DICE: 3,
      WHEEL: 4,
      RENYU: 5,
      GOLDSHIP: 6
    };
    g.QUEENOFSEA_MAP_RTYPE = {
      CHOOSE_SUBGAME: 1,
      COLLECT_WHEEL: 2,
      OPERATE_SUBGAME: 3
    };
    g.QUEENOFSEA_MAP_STATE = {
      COLLECT_ENERGY: 0,
      CHOOSE_SUBGAME: 1,
      COLLECT_WHEEL: 2,
      ENTER_SUBGAME: 3
    };
    var CIsland = function CIsland(node, id) {
      this.node = node;
      this.id = id;
      this.spine = cc.find("spine", node);
      this.spine_light = cc.find("spine_light", node);
      this.spine_stroke = cc.find("spine_stroke", node);
      this.treasurebox_normal = cc.find("treasurebox", node);
      this.spine_treasurebox = cc.find("spine_treasurebox", node);
      this.spine_treasurebox.active = false;
      this.treasurebox_open = cc.find("treasurebox_open", node);
      this.treasurebox_open.active = false;
      this.isEnabled = false;
      this.setClickCallback = function(callback) {
        var _this = this;
        Global.btnClickEvent(this.node, function() {
          Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
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
        var _this2 = this;
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
          Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
          var uiHelp = cc.find("uiHelp", _this2._mapNode);
          uiHelp.active = !uiHelp.active;
          uiHelp.stopAllActions();
          uiHelp.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
            uiHelp.active = false;
          })));
          Global.btnClickEvent(uiHelp, function() {
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.common_click);
            uiHelp.stopAllActions();
            uiHelp.active = false;
          }, _this2);
        }, this);
        Global.btnClickEvent(cc.find("backToGame", this._mapNode), function() {
          _this2.moveupMap();
        }, this);
        this._bekeGameCmp = this.addComponent("TheMermaid_subGameBeke");
        this._yellowFishGameCmp = this.addComponent("TheMermaid_subGameYellowFish");
        this._diceGameCmp = this.addComponent("TheMermaid_subGameDice");
        this._multWheelGameCmp = this.addComponent("TheMermaid_subGameMultWheel");
        this._renyuGameCmp = this.addComponent("TheMermaid_subGameRenyu");
        this._goldShipGameCmp = this.addComponent("TheMermaid_subGameGoldShip");
        this._collectWheelCmp = this.addComponent("TheMermaid_subGameCollectWheel");
        this.autoAdaptSize();
      },
      autoAdaptSize: function autoAdaptSize() {
        return;
        var canvasNode;
        var canvasWidth;
        var canvasHeight;
        var designWidth;
        var designHeight;
        var xScale;
        var yScale;
      },
      start: function start() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this3.restoreMapByData();
              cc.vv.gameData.mapInfo.state != Global.QUEENOFSEA_MAP_STATE.COLLECT_ENERGY && _this3.enterMap(false, false);

             case 2:
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
          spIsland.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("map").getSpriteFrame("theme163_map_over_sp" + COMPLETE_SP[isLandId]);
        }
        if (mapInfo.nextGame > 0) {
          this._islandArr[mapInfo.nextGame - 1].setGray(false);
          this._islandArr[mapInfo.nextGame - 1].setStrokeActive(true);
        }
        for (var _i3 = 1; _i3 <= 10; _i3++) cc.find("theme163_map_road" + _i3, this._mapPathNode).getComponent(cc.Sprite).enabled = false;
        var roadNode = this.getCurRoadNode();
        roadNode && (roadNode.getComponent(cc.Sprite).enabled = true);
        var nextStepNode = this.getNextStepNode();
        nextStepNode && !cc.vv.gameData._gameInfo && (this._moveUser.position = this.convertNodePosToLocalPos(nextStepNode, this._moveUser.parent));
      },
      enterMap: function enterMap(isLook, isMoveDown) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this4._isLook = isLook;
              _this4._bTriggerSubGame = false;
              Global.dispatchEvent(EventId.QUEEN_ENTER_MAP);
              _this4.restoreMapByData(_this4._isLook);
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
                      return _this4.movedownMap();

                     case 3:
                      _context2.next = 7;
                      break;

                     case 5:
                      _this4._mapNode.y = 0;
                      _this4._mapNode.active = true;

                     case 7:
                      if (isLook) {
                        _context2.next = 14;
                        break;
                      }
                      _context2.next = 10;
                      return _this4.nextStep();

                     case 10:
                      _context2.next = 12;
                      return _this4.showCollectWheel();

                     case 12:
                      _context2.next = 14;
                      return _this4.exitMap();

                     case 14:
                      success();

                     case 15:
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
      exitMap: function exitMap() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this5.moveupMap();

             case 2:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      isTriggerSubGame: function isTriggerSubGame() {
        return this._bTriggerSubGame;
      },
      nextStep: function nextStep() {
        var _this6 = this;
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
                      return _this6.moveNextStep();

                     case 2:
                      _context5.next = 4;
                      return _this6.chooseNextSubGame();

                     case 4:
                      _context5.next = 6;
                      return _this6.triggerSubGame();

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
          if (0 == mapInfo.prevGame && 0 == mapInfo.nextGame) return this._islandArr[Global.QUEENOFSEA_SUBGAME.GOLDSHIP - 1].node;
          return this._islandArr[mapInfo.nextGame - 1].node;
        }
        var pointArr = curRoadData[1];
        return this._mapPointArr[pointArr[pointArr.length - mapInfo.restStep]];
      },
      moveNextStep: function moveNextStep() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
                  var nextStepNode;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      nextStepNode = _this7.getNextStepNode();
                      if (!nextStepNode) {
                        _context7.next = 7;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.move);
                      _context7.next = 5;
                      return _this7.playActions(_this7._moveUser, [ cc.moveTo(.8, _this7.convertNodePosToLocalPos(nextStepNode, _this7._moveUser.parent)) ]);

                     case 5:
                      _context7.next = 7;
                      return _this7.awaitTime(1);

                     case 7:
                      success();

                     case 8:
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
        return localNode.convertToNodeSpaceAR(node.parent.convertToWorldSpaceAR(node.position));
      },
      popUIChooseIslandTips: function popUIChooseIslandTips() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var uiTips, btnGo, self, func;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      uiTips = cc.find("uiChooseIslandTips", _this8._mapNode);
                      uiTips.active = true;
                      _context11.next = 4;
                      return _this8.setUIVisible(cc.find("ui", uiTips), true);

                     case 4:
                      btnGo = cc.find("ui/btnLetsGo", uiTips);
                      btnGo.off("click");
                      self = _this8;
                      func = function() {
                        var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          var tips;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                              btnGo.stopAllActions();
                              _context9.next = 4;
                              return self.setUIVisible(cc.find("ui", uiTips), false);

                             case 4:
                              uiTips.active = false;
                              tips = cc.find("chooseIslandTips", self._mapPathNode);
                              tips.active = true;
                              tips.stopAllActions();
                              tips.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .9), cc.scaleTo(.2, 1), cc.delayTime(2))));
                              success();

                             case 10:
                             case "end":
                              return _context9.stop();
                            }
                          }, _callee9);
                        }));
                        return function func() {
                          return _ref5.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btnGo, func);
                      Global.btnClickEvent(btnGo, _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) switch (_context10.prev = _context10.next) {
                           case 0:
                            func();

                           case 1:
                           case "end":
                            return _context10.stop();
                          }
                        }, _callee10);
                      })), _this8);

                     case 10:
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
        var _this9 = this;
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
                      if (state == Global.QUEENOFSEA_MAP_STATE.CHOOSE_SUBGAME) {
                        _this9.popUIChooseIslandTips();
                        for (i = 1; i <= 10; i++) cc.find("theme163_map_road" + i, _this9._mapPathNode).getComponent(cc.Sprite).enabled = false;
                        for (_i4 = 0; _i4 < 6; _i4++) {
                          _this9._islandArr[_i4].setEnabled(false);
                          _this9._islandArr[_i4].setStrokeActive(false);
                          _this9._islandArr[_i4].setGray(true);
                        }
                        _this9.findIslandToEnable();
                        _this9._mIsLandCallback = _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                          var resp, road;
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) switch (_context13.prev = _context13.next) {
                             case 0:
                              _context13.next = 2;
                              return cc.vv.gameData.reqSubGame(Global.QUEENOFSEA_MAP_RTYPE.CHOOSE_SUBGAME, _this9._curIslandId);

                             case 2:
                              resp = _context13.sent;
                              if (200 === resp.code) {
                                road = _this9.getCurRoadNode();
                                road.getComponent(cc.Sprite).enabled = true;
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.path);
                                _this9.playSpine(road.getChildByName("spine"), null, MapRoadCfg[_this9.getCurRoadData()[0] - 1].lightAnim, false);
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
        var _this10 = this;
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
                      if (!(state == Global.QUEENOFSEA_MAP_STATE.ENTER_SUBGAME)) {
                        _context16.next = 46;
                        break;
                      }
                      gameId = cc.vv.gameData.mapInfo.nextGame;
                      isEnterSubGame = true;
                      _context16.t0 = gameId;
                      _context16.next = _context16.t0 === Global.QUEENOFSEA_SUBGAME.BEKE ? 7 : _context16.t0 === Global.QUEENOFSEA_SUBGAME.YELLOW_FISH ? 10 : _context16.t0 === Global.QUEENOFSEA_SUBGAME.DICE ? 13 : _context16.t0 === Global.QUEENOFSEA_SUBGAME.WHEEL ? 16 : _context16.t0 === Global.QUEENOFSEA_SUBGAME.RENYU ? 19 : _context16.t0 === Global.QUEENOFSEA_SUBGAME.GOLDSHIP ? 22 : 27;
                      break;

                     case 7:
                      _context16.next = 9;
                      return _this10.getBekeCmp().enterGame();

                     case 9:
                      return _context16.abrupt("break", 29);

                     case 10:
                      _context16.next = 12;
                      return _this10.getYellowFishCmp().enterGame();

                     case 12:
                      return _context16.abrupt("break", 29);

                     case 13:
                      _context16.next = 15;
                      return _this10.getDiceCmp().enterGame();

                     case 15:
                      return _context16.abrupt("break", 29);

                     case 16:
                      _context16.next = 18;
                      return _this10.getMultWheelCmp().enterGame();

                     case 18:
                      return _context16.abrupt("break", 29);

                     case 19:
                      _context16.next = 21;
                      return _this10.getRenyuCmp().enterGame();

                     case 21:
                      return _context16.abrupt("break", 29);

                     case 22:
                      _context16.next = 24;
                      return _this10.getGoldShipCmp().enterGame();

                     case 24:
                      cc.vv.gameData.mapInfo.completeGame = [];
                      _this10.restoreMapByData();
                      return _context16.abrupt("break", 29);

                     case 27:
                      isEnterSubGame = false;
                      return _context16.abrupt("break", 29);

                     case 29:
                      if (!isEnterSubGame) {
                        _context16.next = 46;
                        break;
                      }
                      _this10._bTriggerSubGame = true;
                      completeGames = cc.vv.gameData.mapInfo.completeGame;
                      if (!(gameId == completeGames[completeGames.length - 1])) {
                        _context16.next = 44;
                        break;
                      }
                      spIsland = cc.find("nodePrizePool/complete_island_" + completeGames.length, _this10._mapNode);
                      spIsland.active = true;
                      spIsland.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("map").getSpriteFrame("theme163_map_over_sp" + COMPLETE_SP[gameId]);
                      oldPos = spIsland.position;
                      spIsland.position = spIsland.parent.convertToNodeSpace(_this10._mapPathNode.convertToWorldSpace(_this10._islandArr[gameId - 1].node.position));
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.map_collect);
                      _context16.next = 41;
                      return _this10.playActions(spIsland, [ cc.moveTo(.5, oldPos) ]);

                     case 41:
                      _this10.playSpine(spIsland.getChildByName("spine"), null, "animation", false);
                      _context16.next = 44;
                      return _this10.awaitTime(.5);

                     case 44:
                      _context16.next = 46;
                      return _this10.chooseNextSubGame();

                     case 46:
                      success();

                     case 47:
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
      showCollectWheel: function showCollectWheel() {
        var _this11 = this;
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
                      if (!(state == Global.QUEENOFSEA_MAP_STATE.COLLECT_WHEEL)) {
                        _context18.next = 5;
                        break;
                      }
                      _context18.next = 4;
                      return _this11.getCollectWheelCmp().enterGame();

                     case 4:
                      SlotsFacade.QueenSeaCollectProgress.setProgress(0);

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
        var _this12 = this;
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
                      if (isVisible) {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.tips);
                        ui.scale = 0;
                        ui.active = isVisible;
                        _this12.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);
                      } else {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.tips_close);
                        ui.scale = 1;
                        _this12.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0), cc.callFunc(function() {
                          ui.active = isVisible;
                        }) ]);
                      }
                      success();

                     case 3:
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
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.map_open);
              _context22.next = 3;
              return _this13.playActions(_this13._mapNode, [ cc.callFunc(function() {
                _this13._mapNode.y = (_this13.node.height + _this13._mapNode.height) / 2;
              }), cc.delayTime(.05), cc.moveTo(.5, cc.v2(0, 0)) ]);

             case 3:
             case "end":
              return _context22.stop();
            }
          }, _callee22);
        }))();
      },
      moveupMap: function moveupMap() {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.map_close);
              _context23.next = 3;
              return _this14.playActions(_this14._mapNode, [ cc.callFunc(function() {
                _this14._mapNode.y = 0;
              }), cc.moveTo(.5, cc.v2(0, (_this14.node.height + _this14._mapNode.height) / 2)), cc.callFunc(function() {
                Global.dispatchEvent(EventId.QUEEN_EXIT_MAP);
              }) ]);

             case 3:
             case "end":
              return _context23.stop();
            }
          }, _callee23);
        }))();
      },
      onIslandClicked: function onIslandClicked(islandObj) {
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
        for (var i = 1; i <= 6; i++) cc.find("ui/theme163_d_choose_type" + i, uiChooseIslandSureTips).active = i == this._curIslandId;
        if (isVisible) {
          var btnYES = cc.find("uiChooseIslandSureTips/ui/btnYES", this._mapNode);
          btnYES.getComponent(cc.Button).enabled = true;
          var btnNO = cc.find("uiChooseIslandSureTips/ui/btnNO", this._mapNode);
          btnNO.getComponent(cc.Button).enabled = true;
          uiChooseIslandSureTips.active = isVisible;
          this.setUIVisible(uiChooseIslandSureTips.getChildByName("ui"), true);
          cc.vv.gameData.checkAutoPlay(btnYES, this.onChooseYES.bind(this));
        } else {
          this.setUIVisible(uiChooseIslandSureTips.getChildByName("ui"), false);
          uiChooseIslandSureTips.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
            uiChooseIslandSureTips.active = isVisible;
          })));
        }
      },
      onChooseYES: function onChooseYES() {
        var btnYES = cc.find("uiChooseIslandSureTips/ui/btnYES", this._mapNode);
        btnYES.getComponent(cc.Button).enabled = false;
        var btnNO = cc.find("uiChooseIslandSureTips/ui/btnNO", this._mapNode);
        btnNO.getComponent(cc.Button).enabled = false;
        btnYES.stopAllActions();
        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
        this.setUIChooseIslandSureTipsVisible(false);
        this._mIsLandCallback();
      },
      onChooseNO: function onChooseNO() {
        var btnYES = cc.find("uiChooseIslandSureTips/ui/btnYES", this._mapNode);
        btnYES.getComponent(cc.Button).enabled = false;
        var btnNO = cc.find("uiChooseIslandSureTips/ui/btnNO", this._mapNode);
        btnNO.getComponent(cc.Button).enabled = false;
        btnYES.stopAllActions();
        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
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
          node.stopAllActions();
          node.runAction(cc.sequence(actionsArr));
        });
      },
      awaitTime: function awaitTime(time) {
        var _this15 = this;
        return new Promise(function(success) {
          _this15.scheduleOnce(function() {
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
  TheMermaid_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78b66KjqNJG1ahuVOGDSS9B", "TheMermaid_Pop");
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
      showFreeCount: function showFreeCount() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  var free_game_start, ui, btnStart, func;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      free_game_start = cc.find("free_game_start", _this.node);
                      free_game_start.active = true;
                      ui = free_game_start.getChildByName("ui");
                      ui.scale = 0;
                      ui.runAction(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.2, 1)));
                      btnStart = ui.getChildByName("btnStart");
                      btnStart.getComponent(cc.Button).enabled = false;
                      _context3.next = 9;
                      return _this.delayTime(1);

                     case 9:
                      btnStart.getComponent(cc.Button).enabled = true;
                      btnStart.off("click");
                      func = function() {
                        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                             case 0:
                              btnStart.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                              ui.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.5, 0)));
                              _context.next = 5;
                              return _this.delayTime(1);

                             case 5:
                              free_game_start.active = false;
                              success();

                             case 7:
                             case "end":
                              return _context.stop();
                            }
                          }, _callee);
                        }));
                        return function func() {
                          return _ref2.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btnStart, func);
                      Global.btnClickEvent(btnStart, _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                           case 0:
                            btnStart.stopAllActions();
                            _context2.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context2.stop();
                          }
                        }, _callee2);
                      })), _this);

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
      showLoadingPage: function showLoadingPage() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.transition_free);
                var subGameLoading = cc.find("subGameLoading", _this2.node);
                subGameLoading.active = true;
                var spineNode = cc.find("spineNode", subGameLoading);
                _this2.playSpine(spineNode, function() {
                  subGameLoading.active = false;
                  success();
                }, "skill");
              }));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showExtraFreeGameTip: function showExtraFreeGameTip() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var extraFreeTips, i, activeSlotCnt, curTips;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              extraFreeTips = cc.find("extraFreeGamesTip", _this3.node);
              extraFreeTips.active = true;
              for (i = 1; i <= 3; i++) extraFreeTips.getChildByName("tips_" + i).active = false;
              activeSlotCnt = Math.min(3, cc.vv.gameData._gameInfo.mapFreeGameData.length);
              curTips = extraFreeTips.getChildByName("tips_" + activeSlotCnt);
              curTips.active = true;
              curTips.scale = 0;
              _context6.next = 9;
              return _this3.playActions(curTips, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

             case 9:
              _context6.next = 11;
              return _this3.delayTime(1);

             case 11:
              _context6.next = 13;
              return _this3.playActions(curTips, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);

             case 13:
              extraFreeTips.active = false;

             case 14:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      showSttlDialog: function showSttlDialog() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success) {
                  var free_game_win, ui, btnCollect, func;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      free_game_win = cc.find("free_game_win", _this4.node);
                      free_game_win.active = true;
                      ui = free_game_win.getChildByName("ui");
                      ui.scale = 0;
                      ui.getChildByName("lblWinCoin").getComponent(cc.Label).string = "";
                      btnCollect = ui.getChildByName("btnCollect");
                      btnCollect.getComponent(cc.Button).enabled = false;
                      _context9.next = 9;
                      return _this4.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 9:
                      btnCollect.getComponent(cc.Button).enabled = true;
                      Global.doRoallNumEff(ui.getChildByName("lblWinCoin"), 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
                      btnCollect.off("click");
                      func = function() {
                        var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                          var renyu_free_loading;
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) switch (_context7.prev = _context7.next) {
                             case 0:
                              btnCollect.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                              renyu_free_loading = cc.find("renyu_free_loading", _this4.node);
                              _this4.playSpine(renyu_free_loading);
                              _context7.next = 6;
                              return _this4.delayTime(.3);

                             case 6:
                              free_game_win.active = false;
                              success();

                             case 8:
                             case "end":
                              return _context7.stop();
                            }
                          }, _callee7);
                        }));
                        return function func() {
                          return _ref5.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btnCollect, func);
                      Global.btnClickEvent(btnCollect, _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) switch (_context8.prev = _context8.next) {
                           case 0:
                            btnCollect.stopAllActions();
                            _context8.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context8.stop();
                          }
                        }, _callee8);
                      })), _this4);

                     case 15:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x2) {
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
      delayTime: function delayTime(time) {
        var _this5 = this;
        return new Promise(function(res, rej) {
          _this5.scheduleOnce(function() {
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
  TheMermaid_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65c50A++PRN64SMUt4eANR3", "TheMermaid_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      start: function start() {
        var _this = this;
        this._super();
        this.scheduleOnce(function() {
          _this.node.y > cc.winSize.height / 2 && (_this.node.y = cc.winSize.height / 2);
        }, 0);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  TheMermaid_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f74cg7oHBD2pWRJEsqnAUo", "TheMermaid_Slots");
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
        _popUIScript: null,
        _slotsCnt: 1,
        _wildOpacity1_0List: null,
        _bWildAnimation: false
      },
      onLoad: function onLoad() {
        this._super();
        this._scatterTopAniNode = cc.find("scatter_top_ani", this.node);
      },
      start: function start() {},
      adaptDifferentScreen: function adaptDifferentScreen() {
        if (this._isAdapted) return;
        this._isAdapted = true;
        var topBg = cc.find("Canvas/safe_node/LMSlots_Top/topBg");
        var topBgBtmY = topBg.convertToWorldSpaceAR(cc.v2(0, .5 * -topBg.height)).y;
        var reels_bg1 = cc.find("Canvas/safe_node/slots/reels_bg1");
        var slotsMaxHeightTopY = reels_bg1.convertToWorldSpaceAR(cc.v2(0, 2.65 * reels_bg1.height)).y;
        var prizePool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1");
        prizePool.y = prizePool.parent.convertToNodeSpaceAR(cc.v3(0, slotsMaxHeightTopY + .5 * (topBgBtmY - slotsMaxHeightTopY), 0)).y;
        var prizePoolSizeNode = cc.find("Canvas/safe_node/LMSlots_PrizePool_1/nodesize");
        var prizePoolSizeNodeTopY = prizePoolSizeNode.convertToWorldSpaceAR(cc.v2(0, .5 * prizePoolSizeNode.height)).y;
        var logoSizeNode = cc.find("Canvas/safe_node/spine_logo/nodesize");
        var logoSizeNodeTopY = logoSizeNode.convertToWorldSpaceAR(cc.v2(0, .5 * logoSizeNode.height)).y;
        var logo = cc.find("Canvas/safe_node/spine_logo");
        logo.y = logo.parent.convertToNodeSpaceAR(cc.v3(0, prizePoolSizeNodeTopY + .7 * logoSizeNode.height, 0)).y;
        cc.find("Canvas/safe_node/spine_logo").active = false;
      },
      RegisterEvent: function RegisterEvent() {
        Global.registerEvent(EventId.QUEEN_ENTER_MAP, this.onRcvEvtEnterMap, this);
        Global.registerEvent(EventId.QUEEN_EXIT_MAP, this.onRcvEvtExitMap, this);
      },
      Init: function Init() {
        this._super();
        this._popUIScript = cc.find("Canvas/safe_node/node_pop_ui").addComponent("TheMermaid_Pop");
        this._slotsCnt = cc.vv.gameData._deskInfo.slotscnt || 1;
        this.showSlots();
      },
      getSlotsCount: function getSlotsCount() {
        return this._slotsCnt || 1;
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        this.ClearAllTopAni();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this.getCurReels());
        this._wildOpacity1_0List = null;
        SlotsFacade.QueenSeaCollectProgress.setBtnsClickEnable(false);
        this._stopTime = this.GetStopTime();
        SlotsFacade.QueenSeaStar.removeOldWild();
        cc.vv.gameData.isFreeGamesTime() || Global.SlotsSoundMgr.playNormalBgm();
      },
      ClearAllTopAni: function ClearAllTopAni() {
        var reels = this.getCurReels();
        var _iterator = _createForOfIteratorHelper(reels), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var reel = _step.value;
            for (var i = 0; i < this._row; i++) {
              var symbol = reel.GetSymbolByRow(i);
              if (symbol) {
                symbol.ShowNormal();
                symbol.ShowKuang(false);
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._topAniNode.destroyAllChildren();
        this._scatterTopAniNode.destroyAllChildren();
      },
      getCurReels: function getCurReels() {
        var curReels = [];
        for (var i = 1; i <= this._slotsCnt; i++) for (var j = 0; j < 5; j++) curReels.push(this._reels[5 * (i - 1) + j]);
        return curReels;
      },
      addSlots: function addSlots() {
        if (this._slotsCnt >= 3) return;
        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.bell);
        this._slotsCnt += 1;
        this.showSlots(true);
        SlotsFacade.QueenSeaStar.restoreByServerData();
      },
      showSlots: function showSlots(bPlaySpine) {
        for (var i = 1; i <= 3; i++) cc.find("reels_bg" + i, this.node).active = false;
        for (var _i = 1; _i <= this._slotsCnt; _i++) cc.find("reels_bg" + _i, this.node).active = true;
        var _iterator2 = _createForOfIteratorHelper(this._reels), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var reel = _step2.value;
            reel.node.active = false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _iterator3 = _createForOfIteratorHelper(this.getCurReels()), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _reel = _step3.value;
            _reel.node.active = true;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        cc.find("collect_progress", this.node).y = cc.find("reels_bg" + this._slotsCnt, this.node).y + 170;
        if (bPlaySpine) {
          var spineNode = cc.find("spineAddSlots", this.node);
          spineNode.active = true;
          spineNode.position = cc.find("reels_bg" + this._slotsCnt, this.node).position;
          var spine = spineNode.getComponent(sp.Skeleton);
          spine.setAnimation(0, "animation", false);
          spine.setCompleteListener(function() {
            spineNode.active = false;
          });
        }
      },
      ShowWinTrace: function ShowWinTrace() {
        if (!this._gameInfo) return;
        var allWinIdx = [];
        if (this._gameInfo.mapFreeGameData && this._gameInfo.mapFreeGameData.length > 0) for (var n in this._gameInfo.mapFreeGameData) {
          var zjLuxian = this._gameInfo.mapFreeGameData[n].traceResult;
          for (var i = 0; i < zjLuxian.length; i++) {
            var item = zjLuxian[i];
            for (var idx = 0; idx < item.indexs.length; idx++) {
              var posIdx = item.indexs[idx];
              var row = Math.floor((posIdx - 1) / 5);
              var col = (posIdx - 1) % 5;
              allWinIdx[5 * row * this._slotsCnt + 5 * n + col + 1] = 1;
            }
          }
        } else for (var _i2 = 0; _i2 < this._gameInfo.zjLuXian.length; _i2++) {
          var _item = this._gameInfo.zjLuXian[_i2];
          for (var _idx = 0; _idx < _item.indexs.length; _idx++) allWinIdx[_item.indexs[_idx]] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      ShowScatterWin: function ShowScatterWin() {
        if (!this._gameInfo) return;
        var allWinIdx = [];
        if (this._gameInfo.mapFreeGameData && this._gameInfo.mapFreeGameData.length > 0) for (var n in this._gameInfo.mapFreeGameData) {
          var scatterZJLuXian = this._gameInfo.mapFreeGameData[n].scatterResult;
          if (scatterZJLuXian && scatterZJLuXian.indexs) for (var i = 0; i < scatterZJLuXian.indexs.length; i++) {
            var posIdx = scatterZJLuXian.indexs[i];
            var row = Math.floor((posIdx - 1) / 5);
            var col = (posIdx - 1) % 5;
            allWinIdx[5 * row * this._slotsCnt + 5 * n + col + 1] = 1;
          }
        } else if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i3 = 0; _i3 < this._gameInfo.scatterZJLuXian.indexs.length; _i3++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i3];
          allWinIdx[val] = 1;
        }
        var cfg = cc.vv.gameData.getGameCfg();
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            var newSymbol = cc.instantiate(symbol.node).getComponent(cfg.scripts.Symbols);
            newSymbol.node.parent = this._scatterTopAniNode;
            newSymbol.node.active = true;
            newSymbol.node.position = this._scatterTopAniNode.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
            newSymbol.setTopAniNode(this._scatterTopAniNode);
            newSymbol.playWinAnimation();
            symbol._showNode.active = false;
          }
        }
      },
      SetSlotsResult: function SetSlotsResult(msg) {
        var cardsList = msg.resultCards;
        if (msg.mapFreeGameData && msg.mapFreeGameData.length > 0) {
          cardsList = [];
          for (var i = 0; i < this._row; i++) {
            var _iterator4 = _createForOfIteratorHelper(msg.mapFreeGameData), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                var slotResult = _step4.value;
                for (var j = 0; j < 5; j++) cardsList.push(slotResult.cards[5 * i + j]);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
        var reelResults = [];
        var aCol = 5 * this._slotsCnt;
        for (var _i4 = 0; _i4 < cardsList.length; _i4++) {
          var row = Math.floor(_i4 / aCol);
          var col = _i4 % aCol;
          if (this._cfg.symbol[cardsList[_i4]]) {
            var res = {};
            res.sid = cardsList[_i4];
            res.data = this.GetBonusData(res.sid, col);
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _j = 0; _j < 5 * this._slotsCnt; _j++) {
          var item = this._reels[_j];
          var reelRes = reelResults[_j];
          item.SetResult(reelRes);
        }
      },
      GetBonusData: function GetBonusData(sid, col) {
        if (13 == sid) return {
          bPlayEff: true
        };
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        this.SetSlotsResult(msg);
        var cards = msg.resultCards;
        msg.mapFreeGameData && msg.mapFreeGameData.length > 0 && (cards = msg.mapFreeGameData[0].cards);
        this.SetReelStateInfo(cards);
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var selfCol = 5 * this._slotsCnt;
        var col = (idx - 1) % selfCol;
        var row = this._row - Math.floor((idx - 1) / selfCol) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      showCollectEnegy: function showCollectEnegy() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
            var progressData, posArr;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                progressData = cc.vv.gameData.progressData;
                if (!progressData) {
                  _context.next = 7;
                  break;
                }
                posArr = [];
                _this._reels.forEach(function(reel) {
                  if (reel.node.active) for (var i = 0; i < _this._row; i++) {
                    var symbol = reel.GetSymbolByRow(i);
                    symbol.GetShowId() == cc.vv.gameData.getGameCfg().collectId && posArr.push(symbol.node.parent.convertToWorldSpaceAR(symbol.node.position));
                  }
                });
                if (!(posArr.length > 0)) {
                  _context.next = 7;
                  break;
                }
                _context.next = 7;
                return SlotsFacade.QueenSeaCollectProgress.collectEnergy(posArr, progressData.totalCnt / progressData.needCnt);

               case 7:
                success();

               case 8:
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
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nextColId, wildslotsIdx, wildcolIdx;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              nextColId = colIdx + 1;
              wildslotsIdx = Math.floor(nextColId / 5);
              wildcolIdx = nextColId % 5 - 2;
              if (!(wildcolIdx >= 0 && _this2.isExistBonusSymbolOfReel(nextColId))) {
                _context2.next = 8;
                break;
              }
              _this2._bWildAnimation = true;
              _context2.next = 7;
              return _this2.awaitTime(.75);

             case 7:
              SlotsFacade.QueenSeaStar.playWildReel(wildslotsIdx, wildcolIdx, Global.WILD_ANIMTION.OPACITY_0_1, false, function() {
                SlotsFacade.QueenSeaStar.playWildReel(wildslotsIdx, wildcolIdx, Global.WILD_ANIMTION.NOMARL_LOOP, true);
              });

             case 8:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      isExistBonusSymbolOfReel: function isExistBonusSymbolOfReel(colIdx) {
        var bExist = false;
        var reel = this._reels[colIdx];
        if (reel) {
          var _iterator5 = _createForOfIteratorHelper(reel._originResult), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var sdata = _step5.value;
              if (sdata && 13 == sdata.sid) {
                bExist = true;
                break;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        return bExist;
      },
      isExistSpecialSymbolOfReel: function isExistSpecialSymbolOfReel(colIdx) {
        var bExist = false;
        var reel = this._reels[colIdx];
        if (reel) {
          var _iterator6 = _createForOfIteratorHelper(reel._originResult), _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              var sdata = _step6.value;
              if (sdata && (2 == sdata.sid || 13 == sdata.sid)) {
                bExist = true;
                break;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
        return bExist;
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this3 = this;
        if (!this._cfg.reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % 5;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator7 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step7;
        try {
          var _loop = function _loop() {
            var info = _step7.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            for (var _i5 = 0; _i5 < reelResults.length; _i5++) {
              var item = _this3._reels[_i5];
              var reelRes = reelResults[_i5];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i5] > 0 && (stateInfo.isAnt = true);
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
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) _loop();
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        if (!this._bStopRightnow) {
          var isPlayAnit = false;
          for (var i = 0; i < 5 * this._slotsCnt; i++) {
            var idx = this._reels[i].GetReelIdx();
            if (idx == colIdx + 1) {
              isPlayAnit = this._reels[i].playAntiAnimation();
              var nextColId = colIdx + 1;
              var wildslotsIdx = Math.floor(nextColId / 5);
              var wildcolIdx = nextColId % 5 - 2;
              wildcolIdx >= 0 && nextColId < 5 && isPlayAnit;
            }
            if (idx > colIdx && isPlayAnit) {
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              this._reels[i].AddDelayTime(nAddSpeedTime);
            }
          }
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var _iterator8, _step8, reel;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _iterator8 = _createForOfIteratorHelper(_this4._reels);
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                  reel = _step8.value;
                  reel.ShowAntiEffect(false);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              if (!_this4._bWildAnimation) {
                _context3.next = 6;
                break;
              }
              _this4._bWildAnimation = false;
              _context3.next = 6;
              return _this4.awaitTime(.75);

             case 6:
              _this4._bottomScript.ShowBtnsByState("moveing_1");
              if (!cc.vv.gameData.isOpenCollectProgress()) {
                _context3.next = 10;
                break;
              }
              _context3.next = 10;
              return _this4.showCollectEnegy();

             case 10:
              _this4.ShowWinTrace();
              _context3.next = 13;
              return _this4.playBottomWin();

             case 13:
              if (!_this4.CheckTriggerMapSubGame()) {
                _context3.next = 24;
                break;
              }
              _context3.next = 16;
              return _this4.awaitTime(.5);

             case 16:
              _this4._isSpinEndEnterMap = true;
              _this4._bottomScript.SetWin(0);
              _context3.next = 20;
              return SlotsFacade.QueenSeaMap.enterMap(false, true);

             case 20:
              if (!SlotsFacade.QueenSeaMap.isTriggerSubGame()) {
                _context3.next = 23;
                break;
              }
              _context3.next = 23;
              return _this4.playBottomWin(_this4._bottomScript.getCurrentWin());

             case 23:
              cc.vv.gameData.isFreeGamesTime() && _this4._bottomScript.SetWin(cc.vv.gameData.GetGameTotalFreeWin());

             case 24:
              if (!_this4.CheckEnterFreeGame()) {
                _context3.next = 38;
                break;
              }
              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.bell);
              _this4.ShowScatterWin();
              _context3.next = 29;
              return _this4.awaitTime(2);

             case 29:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.free_dialog_start_show);
              _context3.next = 33;
              return _this4._popUIScript.showFreeCount();

             case 33:
              _this4.scheduleOnce(function() {
                SlotsFacade.QueenSeaStar.Init();
                _this4.showFreeGames();
                _this4.Backup();
              }, .5);
              _context3.next = 36;
              return _this4._popUIScript.showLoadingPage();

             case 36:
              _context3.next = 60;
              break;

             case 38:
              if (!_this4.CheckFreeGameFinish()) {
                _context3.next = 50;
                break;
              }
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.free_dialog_collect_show);
              _context3.next = 43;
              return _this4._popUIScript.showSttlDialog();

             case 43:
              _this4.scheduleOnce(function() {
                _this4.ClearAllTopAni();
                _this4._slotsCnt = 1;
                _this4.showSlots(false);
                _this4.showFreeGames();
                Global.SlotsSoundMgr.stopBgm();
                _this4.Resume();
                cc.vv.gameData._gameInfo.slotscnt = _this4._slotsCnt;
                SlotsFacade.QueenSeaStar.restoreByServerData();
              }, .5);
              _context3.next = 46;
              return _this4._popUIScript.showLoadingPage();

             case 46:
              _context3.next = 48;
              return _this4.playBottomWin(null, true);

             case 48:
              _context3.next = 60;
              break;

             case 50:
              if (!cc.vv.gameData._gameInfo.slotsadd) {
                _context3.next = 60;
                break;
              }
              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.free_dialog_more_show);
              _this4.ShowScatterWin();
              _context3.next = 55;
              return _this4.awaitTime(.5);

             case 55:
              _context3.next = 57;
              return _this4._popUIScript.showExtraFreeGameTip();

             case 57:
              _this4.addSlots();
              _context3.next = 60;
              return _this4.awaitTime(1.5);

             case 60:
              SlotsFacade.QueenSeaCollectProgress.setBtnsClickEnable(true);
              _this4.CanDoNextRound();

             case 62:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playBottomWin: function playBottomWin(win, isShowFreeBigWin) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function(success) {
                var nWin = win || cc.vv.gameData.GetGameWin();
                var nTotal = nWin;
                var updateAllCoin = true;
                if (!win && cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                  nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                  updateAllCoin = 0 == cc.vv.gameData.GetFreeTime();
                }
                if (isShowFreeBigWin) {
                  nWin = cc.vv.gameData.GetGameTotalFreeWin();
                  nTotal = nWin;
                  updateAllCoin = true;
                }
                nWin > 0 ? _this5.ShowBottomWin(nWin, nTotal, updateAllCoin, _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      success();

                     case 1:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }))) : success();
              }));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      awaitTime: function awaitTime(time) {
        var _this6 = this;
        return new Promise(function(success) {
          _this6.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      CheckSpecialReward: function CheckSpecialReward() {
        return this.CheckEnterFreeGame() || this.CheckFreeGameFinish() || this.CheckTriggerMapSubGame() || this.CheckSeaStarShow();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return cc.vv.gameData.isTriggerFreeGames();
      },
      CheckFreeGameFinish: function CheckFreeGameFinish() {
        return cc.vv.gameData.isFinishFreeGames();
      },
      CheckTriggerMapSubGame: function CheckTriggerMapSubGame() {
        return cc.vv.gameData.isEnterMapGames();
      },
      CheckSeaStarShow: function CheckSeaStarShow() {
        return SlotsFacade.QueenSeaStar.isPlayAnimtion();
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
      ReconnectShow: function ReconnectShow() {
        var _this7 = this;
        if (!this.CheckTriggerMapSubGame() && this.showFreeGames()) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          this.scheduleOnce(function() {
            _this7.CanDoNextRound();
          }, 1);
        }
      },
      showFreeGames: function showFreeGames() {
        var total = cc.vv.gameData.GetTotalFree();
        var rest = cc.vv.gameData.GetFreeTime();
        if (rest > 0) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm(SlotsFacade.soundMgr.freegame_bgm);
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          nTotal > 0 && this._bottomScript.SetWin(nTotal);
          this._ShowGameBg(true);
          return true;
        }
        cc.vv.gameData.SetTotalFree(0);
        this._bottomScript.ShowFreeModel(false);
        this._ShowGameBg(false);
        return false;
      },
      _ShowGameBg: function _ShowGameBg(bFree) {
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        normalBg.active = !bFree;
        normalFree.active = bFree;
      },
      onRcvEvtEnterMap: function onRcvEvtEnterMap() {
        this._bottomScript.ShowBtnsByState("moveing_1");
        this._topScript.SetBackLobby(false);
      },
      onRcvEvtExitMap: function onRcvEvtExitMap() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              if (_this8._isSpinEndEnterMap) {
                _context6.next = 6;
                break;
              }
              _this8.showFreeGames();
              if (!SlotsFacade.QueenSeaMap.isTriggerSubGame()) {
                _context6.next = 5;
                break;
              }
              _context6.next = 5;
              return _this8.playBottomWin(_this8._bottomScript.getCurrentWin());

             case 5:
              _this8.CanDoNextRound();

             case 6:
              _this8._isSpinEndEnterMap = false;
              _this8._bottomScript.ShowBtnsByState("idle");
              _this8._topScript.SetBackLobby(true);

             case 9:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheMermaid_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3565409ICFMQaTDLH8KXcva", "TheMermaid_Sound");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _soundPath: "games/TheMermaid/",
        base_bgm: "base_bgm",
        bell: "bell",
        bonus_collect: "bonus_collect",
        collect: "collect",
        common_click: "common_click",
        lock: "lock",
        unlock: "unlock",
        symbol_bonus: "symbol_bonus",
        symbol_scatter: "symbol_scatter",
        reel_notify: "reel_notify",
        reel_stop: "reel_stop",
        reel_up: "reel_up",
        scatter_notify: "symbol_scatter",
        win1: "win1",
        win1end: "win1end",
        win2: "win2",
        win2end: "win2end",
        transition_free: "transition_free",
        wild_weng: "wild_weng",
        freegame_bgm: "free_bgm",
        free_dialog_collect_show: "free_dialog_collect_show",
        free_dialog_more_show: "free_dialog_more_show",
        free_dialog_start_show: "free_dialog_start_show",
        map_close: "map_close",
        map_collect: "map_collect",
        map_open: "map_open",
        path: "path",
        tips: "tips",
        tips_close: "tips_close",
        move: "move",
        dead: "dead",
        select1: "select1",
        select2: "select2",
        select3: "select3",
        select4: "select4",
        select5: "select5",
        shanhu_result: "shanhu_result",
        shanhu_show: "shanhu_show",
        fly_mul: "fly_mul",
        zhuanpan_show: "zhuanpan_show",
        island_wheel: "island_wheel",
        touzi_extra: "touzi_extra",
        touzi_fly: "touzi_fly",
        touzi_select: "select4",
        wheel: "wheel",
        wheel_click: "wheel_click",
        wheel_in: "wheel_in",
        wheel_stop: "wheel_stop"
      },
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {} ],
  TheMermaid_StarFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9cfc9nIQ3NKEZTYO6/pATk2", "TheMermaid_StarFish");
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
    var WILD_ANIMTION = {
      APPEAR: 1,
      OPACITY_0_1: 2,
      NOMARL_LOOP: 3,
      OPACITY_1_0: 4,
      DISAPPEAR: 5
    };
    var gv = require("GlobalVar");
    gv.WILD_ANIMTION = WILD_ANIMTION;
    cc.Class({
      extends: cc.Component,
      properties: {
        _starList: null,
        _wildSlotsList: null,
        _spineFlyStar: null,
        _spineStarFire: null,
        _particleFly: null
      },
      onLoad: function onLoad() {
        this._starList = [];
        for (var i = 1; i <= 6; i++) {
          var col = Math.floor((i - 1) / 2);
          this._starList[col] = this._starList[col] || [];
          var star = cc.find("theme163_collect_2_3_" + i, this.node);
          star.active = false;
          this._starList[col].push(star);
          cc.find("spineFire", star).active = false;
        }
        this._wildSlotsList = [];
        for (var _i = 1; _i <= 3; _i++) {
          var slotsNode = cc.find("slots" + _i, this.node);
          slotsNode.active = true;
          var wildFrameList = [];
          for (var j = 1; j <= 3; j++) {
            var wildFrame = cc.find("spineReelWildFrame" + j, slotsNode);
            wildFrame.active = false;
            wildFrameList.push(wildFrame);
          }
          var wildList = [];
          for (var _j = 1; _j <= 3; _j++) {
            var wild = cc.find("spineReelWild" + _j, slotsNode);
            wild.active = false;
            wildList.push(wild);
          }
          this._wildSlotsList.push({
            node: slotsNode,
            wildFrameList: wildFrameList,
            wildList: wildList
          });
        }
        this._spineFlyStar = cc.find("spineFlySeaStar", this.node);
        this._spineFlyStar.active = false;
        this._spineStarFire = cc.find("spineSeaStarFire", this.node);
        this._spineStarFire.active = false;
        this._particleFly = cc.find("particleFly", this.node);
        this._particleFly.active = false;
      },
      start: function start() {
        this.restoreByServerData();
      },
      Init: function Init() {
        var _iterator = _createForOfIteratorHelper(this._starList), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var v = _step.value;
            var _iterator3 = _createForOfIteratorHelper(v), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var vv = _step3.value;
                vv.active = false;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var _iterator2 = _createForOfIteratorHelper(this._wildSlotsList), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var _v = _step2.value;
            var _iterator4 = _createForOfIteratorHelper(_v.wildFrameList), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                var _vv = _step4.value;
                _vv.active = false;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            var _iterator5 = _createForOfIteratorHelper(_v.wildList), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                var _vv2 = _step5.value;
                _vv2.active = false;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      restoreByServerData: function restoreByServerData() {
        this.Init();
      },
      isPlayAnimtion: function isPlayAnimtion() {
        var wildCols = cc.vv.gameData.wildCols;
        if (wildCols && wildCols.length > 0) return true;
        return false;
      },
      removeOldWild: function removeOldWild() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var isRemoving, _iterator6, _step6, obj, _loop, i;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              isRemoving = false;
              _iterator6 = _createForOfIteratorHelper(_this._wildSlotsList);
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                  obj = _step6.value;
                  _loop = function _loop(i) {
                    var wild = obj.wildList[i];
                    if (wild.active) {
                      isRemoving = true;
                      var wildFrame = obj.wildFrameList[i];
                      wildFrame.active = false;
                      _this.playSpine(wild, function() {
                        wild.active = false;
                      }, "animation" + WILD_ANIMTION.DISAPPEAR, false);
                    }
                  };
                  for (i = 0; i < obj.wildList.length; i++) _loop(i);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
              if (!isRemoving) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return _this.awaitTime(1);

             case 6:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showNewWild: function showNewWild() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var starFishInfo, currWildCols, slotCnt, dataArr, _iterator7, _step7, _loop2;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!cc.vv.gameData._gameInfo) {
                _context2.next = 11;
                break;
              }
              starFishInfo = cc.vv.gameData.starFishInfo;
              currWildCols = starFishInfo.currWildCols;
              if (!(currWildCols && currWildCols.length)) {
                _context2.next = 11;
                break;
              }
              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.reel_up);
              slotCnt = cc.vv.gameData.GetSlotsScript().getSlotsCount();
              dataArr = [];
              _iterator7 = _createForOfIteratorHelper(currWildCols);
              try {
                _loop2 = function _loop2() {
                  var serverColIdx = _step7.value;
                  var colIdx = serverColIdx - 3;
                  var _loop3 = function _loop3(j) {
                    _this2.playWildReel(j, colIdx, WILD_ANIMTION.APPEAR, false, function() {
                      var wildFrame = _this2._wildSlotsList[j].wildFrameList[colIdx];
                      wildFrame.active = false;
                      _this2.playWildReel(j, colIdx, WILD_ANIMTION.NOMARL_LOOP, true);
                    });
                  };
                  for (var j = 0; j < slotCnt; j++) _loop3(j);
                };
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) _loop2();
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
              _context2.next = 11;
              return _this2.playNewWildFrame(dataArr);

             case 11:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      playStarFish: function playStarFish(symboleArr) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var wildCols, appearColIdxArr, _iterator8, _step8, colIdx;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              wildCols = cc.vv.gameData.wildCols;
              if (!(wildCols && wildCols.length > 0)) {
                _context3.next = 7;
                break;
              }
              appearColIdxArr = [];
              _iterator8 = _createForOfIteratorHelper(wildCols);
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                  colIdx = _step8.value;
                  appearColIdxArr.push(colIdx - 3);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              _context3.next = 7;
              return _this3.flyParticleToRenyuHand(appearColIdxArr);

             case 7:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playNewWildFrame: function playNewWildFrame(dataArr) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var promiseArr, _iterator9, _step9, d;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              AppLog.warn("SlotsFacade.QueenSeaStar:  playNewWildFrame1");
              if (!(dataArr && dataArr.length > 0)) {
                _context4.next = 8;
                break;
              }
              AppLog.warn("SlotsFacade.QueenSeaStar:  playNewWildFrame2");
              promiseArr = [];
              _iterator9 = _createForOfIteratorHelper(dataArr);
              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                  d = _step9.value;
                  promiseArr.push(_this4._playWildFrame(d.slotIdx, d.colIdx));
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
              _context4.next = 8;
              return Promise.all(promiseArr);

             case 8:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _playWildFrame: function _playWildFrame(slotIdx, colIdx) {
        var _this5 = this;
        return new Promise(function(success) {
          _this5.playSpine(_this5._wildSlotsList[slotIdx].wildFrameList[colIdx], function() {
            success();
          });
        });
      },
      playWildReel: function playWildReel(slotIdx, colIdx, animationIdx, isLoop, callback) {
        if ((animationIdx == WILD_ANIMTION.DISAPPEAR || animationIdx == WILD_ANIMTION.OPACITY_1_0) && !this._wildSlotsList[slotIdx].wildList[colIdx].active) return;
        this.playSpine(this._wildSlotsList[slotIdx].wildList[colIdx], callback, "animation" + animationIdx, isLoop);
      },
      collectStar: function collectStar(startSymobleArr) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var promissArr, _iterator10, _step10, d;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              if (!(startSymobleArr && startSymobleArr.length > 0)) {
                _context5.next = 7;
                break;
              }
              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.bonus_collect);
              promissArr = [];
              _iterator10 = _createForOfIteratorHelper(startSymobleArr);
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                  d = _step10.value;
                  promissArr.push(_this6._flyStar(_this6.convertNodePosToLocalPos(d.node, _this6.node), d.colIdx));
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
              _context5.next = 7;
              return Promise.all(promissArr);

             case 7:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      flyParticleToRenyuHand: function flyParticleToRenyuHand(colIdxArr) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var promissArr, _iterator11, _step11, colIdx;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              if (!(!cc.vv.gameData.isFreeGamesTime() && colIdxArr && colIdxArr.length > 0)) {
                _context6.next = 9;
                break;
              }
              promissArr = [];
              _iterator11 = _createForOfIteratorHelper(colIdxArr);
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                  colIdx = _step11.value;
                  promissArr.push(_this7._flyParticleToRenyuStarFire(colIdx));
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
              _context6.next = 6;
              return Promise.all(promissArr);

             case 6:
              _this7.playSpine(_this7._spineStarFire, function() {
                _this7._spineStarFire.active = false;
              });
              _context6.next = 9;
              return _this7.awaitTime(1);

             case 9:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      _flyStar: function _flyStar(startPos, colIdx) {
        var _this8 = this;
        return new Promise(function(res) {
          var endNode = _this8._starList[colIdx][0];
          endNode.active && (endNode = _this8._starList[colIdx][1]);
          var endPos = _this8.convertNodePosToLocalPos(endNode, _this8.node);
          var spineFly = cc.instantiate(_this8._spineFlyStar);
          spineFly.parent = _this8.node;
          spineFly.position = startPos;
          spineFly.active = true;
          cc.tween(spineFly).to(1, {
            x: endPos.x,
            y: endPos.y
          }, {
            easing: "backInOut"
          }).call(function() {
            endNode.active = true;
            var spineFire = endNode.getChildByName("spineFire");
            _this8.playSpine(spineFire, function() {
              spineFire.active = false;
              res();
            });
          }).removeSelf().start();
        });
      },
      _flyParticleToRenyuStarFire: function _flyParticleToRenyuStarFire(colIdx) {
        var _this9 = this;
        return new Promise(function(res) {
          var wildFrame = _this9._wildSlotsList[0].wildFrameList[colIdx];
          var startPos = _this9.convertNodePosToLocalPos(wildFrame, _this9.node);
          startPos.y += 120;
          var handStar = cc.find("Canvas/safe_node/slots/spine_role/handStar");
          var endPos = _this9.convertNodePosToLocalPos(handStar, _this9.node);
          var lz = cc.instantiate(_this9._particleFly);
          lz.parent = _this9.node;
          lz.position = startPos;
          lz.active = true;
          var p = lz.getComponent(cc.ParticleSystem);
          p.resetSystem();
          cc.tween(lz).to(.5, {
            x: endPos.x,
            y: endPos.y
          }).call(function() {
            lz.removeFromParent();
            res();
          }).start();
        });
      },
      convertNodePosToLocalPos: function convertNodePosToLocalPos(node, localNode) {
        return localNode.convertToNodeSpaceAR(node.parent.convertToWorldSpaceAR(node.position));
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
      awaitTime: function awaitTime(time) {
        var _this10 = this;
        return new Promise(function(success) {
          _this10.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    GlobalVar: void 0
  } ],
  TheMermaid_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06c967OrxtIvYBUVeH6FYJF", "TheMermaid_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      GetKuangShowParent: function GetKuangShowParent() {
        return cc.find("Canvas/safe_node/slots/scatter_top_ani");
      },
      playStopAnimation: function playStopAnimation() {
        var _this = this;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              nodeSp.setCompleteListener(function() {
                13 == _this._id && _this._data && _this._data.bPlayEff && _this.playWinAnimation();
                nodeSp.setCompleteListener(null);
              });
            }
          }
        }
      },
      setTopAniNode: function setTopAniNode(node) {
        this._topAniNode = node;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  TheMermaid_subGameBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d933cfKT31PjrWstm/B1scz", "TheMermaid_subGameBase");
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
        _soundPath: "games/TheMermaid/",
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
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showMain: function showMain() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      showResult: function showResult() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      playFullScreen: function playFullScreen(awaitTime) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this.setFullScreenVisible(true);
              _this.playSpine(_this._spineNodeLoading);
              _context6.next = 4;
              return _this.awaitTime(awaitTime || 1);

             case 4:
              _this.setFullScreenVisible(false);

             case 5:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
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
        var _this2 = this;
        var recount = 100;
        var addNum = num / recount;
        if (addNum < 0) {
          addNum = 1;
          recount = Math.floor(num);
        }
        var numArr = [];
        for (var i = 0; i < recount; i++) numArr.push(addNum * i);
        numArr.push(num);
        var count = 0;
        label.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
          if (count < numArr.length) {
            label.getComponent(cc.Label).string = _this2.convertNumToShortStr(numArr[count]);
            count++;
          } else {
            label.stopAllActions();
            label.getComponent(cc.Label).string = _this2.convertNumToShortStr(num);
          }
        }), cc.delayTime(.03))));
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
  TheMermaid_subGameBeke: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea9e1bPlz5GwKsAuXbHmJ9P", "TheMermaid_subGameBeke");
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
    var MULT_ARR = [ "death", 16, 36, 60, 180, 600, "win_all" ];
    var MULT_TO_ID = {
      0: 0,
      16: 1,
      36: 2,
      60: 3,
      180: 4,
      600: 5,
      "-1": 6
    };
    cc.Class({
      extends: require("TheMermaid_subGameBase"),
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
              _this._sprPickTips = cc.find("nodeList/theme163_game4_5/theme163_game4_1", _this._node_main);
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
                      return _this3.playFullScreen(1);

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
      showStart: function showStart() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var func;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _this4._subGameNode.active = true;
                      _this4._node_start.active = true;
                      _this4._node_start.scale = 0;
                      _context6.next = 5;
                      return _this4.playActions(_this4._node_start, [ cc.scaleTo(.35, 1.5), cc.scaleTo(.15, 1.3) ]);

                     case 5:
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        _this4.playActions(_this4._node_start, [ cc.scaleTo(.15, 1.5), cc.scaleTo(.35, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(_this4._node_start.getChildByName("btnStart"), func);
                      Global.btnClickEvent(_this4._node_start.getChildByName("btnStart"), function() {
                        _this4._node_start.getChildByName("btnStart").stopAllActions();
                        func();
                      }, _this4);

                     case 8:
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
      showMain: function showMain() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
                  var gameInfo;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      gameInfo = cc.vv.gameData.mapInfo.gameInfo;
                      if (!(gameInfo.mult <= 0)) {
                        _context8.next = 4;
                        break;
                      }
                      _context8.next = 4;
                      return _this5.playFullScreen(.5);

                     case 4:
                      _this5._node_start.active = false;
                      _this5._node_main.active = true;
                      _context8.next = 8;
                      return _this5.awaitTime(.2);

                     case 8:
                      _context8.next = 10;
                      return _this5.awaitOrOperate();

                     case 10:
                      _this5.setPlayPickTipsAction(false);
                      _context8.next = 13;
                      return _this5.awaitTime(1);

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x4) {
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
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        if (isPlay) {
          this._sprPickTips.scale = 1;
          this._sprPickTips.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .9), cc.scaleTo(.2, 1), cc.delayTime(2))));
        } else {
          this._sprPickTips.stopAllActions();
          this._sprPickTips.scale = 1;
        }
      },
      resetLayer: function resetLayer(layer) {
        layer.getChildByName("select").active = false;
        for (var j = 1; j <= 5; j++) {
          var item = layer.getChildByName("item" + j);
          item.getComponent(cc.Button).enabled = false;
          this.playSpine(item, null, "animation1", false);
          item.getChildByName("mult").active = false;
          this.playSpine(item.getChildByName("spine"), null, "animation2", false);
          this.setItemGray(item, true);
        }
      },
      resetAllLayer: function resetAllLayer() {
        for (var i = 1; i <= 5; i++) this.resetLayer(this.getLayer(i));
      },
      setLayerEnable: function setLayerEnable(layer, enable, selectId) {
        layer.getChildByName("select").active = enable;
        enable && this.setLayerGray(layer, false);
        for (var j = 1; j <= 5; j++) {
          var item = layer.getChildByName("item" + j);
          item.getComponent(cc.Button).enabled = enable;
          if (j == selectId) continue;
          this.playSpine(item, null, enable ? "animation1" : "animation2", false);
          this.playSpine(item.getChildByName("spine"), null, "animation2", false);
        }
      },
      setLayerGray: function setLayerGray(layer, isGray, selectIdx) {
        for (var j = 1; j <= 5; j++) {
          var item = layer.getChildByName("item" + j);
          j === selectIdx ? this.setItemGray(item, !isGray) : this.setItemGray(item, isGray);
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
        for (var i in layerItemListData) {
          var item = layer.getChildByName("item" + (parseInt(i) + 1));
          var mult = item.getChildByName("mult");
          mult.active = true;
          mult.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game4_shell").getSpriteFrame("theme163_game4_result_" + MULT_ARR[MULT_TO_ID[layerItemListData[i]]]);
          parseInt(i) + 1 === selectIdx && this.playSpine(item.getChildByName("spine"), null, "animation4", false);
        }
      },
      playShowLayerRestItems: function playShowLayerRestItems(layer, selectIdx, layerItemListData) {
        for (var j = 1; j <= 5; j++) {
          var item = layer.getChildByName("item" + j);
          if (j === selectIdx) continue;
          var mult = item.getChildByName("mult");
          mult.active = true;
          mult.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game4_shell").getSpriteFrame("theme163_game4_result_" + MULT_ARR[MULT_TO_ID[layerItemListData[j - 1]]]);
          this.playActions(item, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);
        }
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success, failed) {
                  var i, layer, _loop, j;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      _this6.setPlayPickTipsAction(true);
                      _this6.setLayerEnable(_this6.getLayer(_this6.getLayerIdxEnable()), true);
                      for (i = 1; i <= 5; i++) {
                        layer = _this6.getLayer(i);
                        _loop = function _loop(j) {
                          var item = layer.getChildByName("item" + j);
                          item.off("click");
                          Global.btnClickEvent(item, _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                            var resp, gameInfo, curLayer, mult, _mult, k;
                            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                              while (1) switch (_context10.prev = _context10.next) {
                               case 0:
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                                _this6.setPlayPickTipsAction(false);
                                _context10.next = 4;
                                return cc.vv.gameData.reqSubGame(Global.QUEENOFSEA_MAP_RTYPE.OPERATE_SUBGAME, j);

                               case 4:
                                resp = _context10.sent;
                                if (!(200 === resp.code)) {
                                  _context10.next = 36;
                                  break;
                                }
                                _this6._pickLeftNum--;
                                gameInfo = resp.data.mapInfo.gameInfo;
                                gameInfo.multId = _this6.getMultIdByData(gameInfo);
                                curLayer = _this6.getLayer(_this6.getLayerIdxEnable() - 1);
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr["select" + gameInfo.layerId]);
                                _this6.setLayerEnable(curLayer, false, gameInfo.layerChoiceId[gameInfo.layerId - 1]);
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.select1);
                                _this6.playSpine(item.getChildByName("spine"), function() {
                                  _this6.playSpine(item.getChildByName("spine"), null, "animation4", false);
                                }, "animation3", false);
                                _context10.next = 16;
                                return _this6.awaitTime(.8);

                               case 16:
                                mult = item.getChildByName("mult");
                                mult.active = true;
                                mult.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game4_shell").getSpriteFrame("theme163_game4_result_" + MULT_ARR[MULT_TO_ID[gameInfo.multId]]);
                                mult.scale = 0;
                                _context10.next = 22;
                                return _this6.playActions(mult, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                               case 22:
                                if (!(gameInfo.multId > 0)) {
                                  _context10.next = 29;
                                  break;
                                }
                                _mult = 0;
                                if (6 == gameInfo.multId) for (k = 1; k <= 5; k++) _mult += MULT_ARR[k]; else _mult = MULT_ARR[MULT_TO_ID[gameInfo.multId]];
                                _context10.next = 27;
                                return _this6.playMultFlyEff(item, _mult);

                               case 27:
                                _context10.next = 29;
                                return _this6.awaitTime(.5);

                               case 29:
                                _this6.setLayerGray(curLayer, true, j);
                                _this6.playShowLayerRestItems(curLayer, j, _this6.getLayerItemList(gameInfo));
                                _context10.next = 33;
                                return _this6.awaitTime(.5);

                               case 33:
                                if (_this6._pickLeftNum > 0 && gameInfo.multId > 0) {
                                  Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.dead);
                                  _this6.setPlayPickTipsAction(true);
                                  _this6.setLayerEnable(_this6.getLayer(_this6.getLayerIdxEnable()), true);
                                } else success();
                                _context10.next = 38;
                                break;

                               case 36:
                                AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                                failed();

                               case 38:
                               case "end":
                                return _context10.stop();
                              }
                            }, _callee10);
                          })));
                        };
                        for (j = 1; j <= 5; j++) _loop(j);
                      }

                     case 3:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x5, _x6) {
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
      playMultFlyEff: function playMultFlyEff(itemNode, mult) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success) {
                  var beginPos, targetNode, targetPos, nodeFly, spineNodeMult;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      beginPos = _this7._node_main.convertToNodeSpaceAR(itemNode.parent.convertToWorldSpaceAR(itemNode.position));
                      targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this7._node_main);
                      targetPos = _this7._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this7._node_main);
                      nodeFly.position = beginPos;
                      nodeFly.scale = 1;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      _context13.next = 9;
                      return _this7.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);

                     case 9:
                      spineNodeMult = cc.find("nodePrizePool/spineNodeMult", _this7._node_main);
                      _this7.playSpine(spineNodeMult);
                      _context13.next = 13;
                      return _this7.awaitTime(.2);

                     case 13:
                      _this7._pickMultNum += mult;
                      _this7.setLabel(_this7._lblPickMult, _this7._pickMultNum ? _this7._pickMultNum + "X" : "");
                      success();

                     case 16:
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
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
             case 0:
              return _context16.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success) {
                  var ui, baseCoin, func;
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      _this8._node_win.active = true;
                      ui = _this8._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this8._lblStartPrize.getComponent(cc.Label).string);
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = false;
                      _this8.setLabel(ui.getChildByName("lblWinCoinShow"), _this8._pickMultNum + " X " + _this8.convertNumToShortStr(baseCoin) + " = " + _this8.convertNumToShortStr(_this8._pickMultNum * baseCoin));
                      _this8.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), _this8._pickMultNum * baseCoin);
                      _context15.next = 9;
                      return _this8.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 9:
                      cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(_this8._pickMultNum * baseCoin);
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = true;
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        _this8.setLabel(ui.getChildByName("lblWinCoin"), _this8.convertNumToShortStr(_this8._pickMultNum * baseCoin));
                        _this8.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(ui.getChildByName("btnCollect"), func);
                      Global.btnClickEvent(ui.getChildByName("btnCollect"), function() {
                        ui.getChildByName("btnCollect").stopAllActions();
                        func();
                      }, _this8);

                     case 14:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee15);
                }));
                return function(_x8) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context16.stop();
            }
          }, _callee16);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    TheMermaid_subGameBase: "TheMermaid_subGameBase"
  } ],
  TheMermaid_subGameCollectWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "283c9iR1EZOTrFZlbU72DyY", "TheMermaid_subGameCollectWheel");
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
        _soundPath: "games/TheMermaid/",
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
        cc.find("spineEff1", this._node_main).active = false;
        cc.find("spineEff2", this._node_main).active = false;
        cc.find("spineEffWin", this._node_main).active = false;
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
              _context2.next = 4;
              return _this2.playActions(_this2._node_main, [ cc.scaleTo(.2, 1.2), cc.scaleTo(.5, 0) ]);

             case 4:
              _this2._subGameNode.active = false;

             case 5:
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
                      _this3._node_main.scale = 0;
                      cc.find("spineEff1", _this3._node_main).active = true;
                      cc.find("spineEff2", _this3._node_main).active = true;
                      btn_spin = cc.find("btn_spin", _this3._node_main);
                      btn_spin.getComponent(cc.Button).enabled = false;
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.wheel_in);
                      _context3.next = 12;
                      return _this3.playActions(_this3._node_main, [ cc.scaleTo(.5, 1.2), cc.scaleTo(.2, 1) ]);

                     case 12:
                      _context3.next = 14;
                      return _this3.awaitOrOperate();

                     case 14:
                      success();

                     case 15:
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
      awaitOrOperate: function awaitOrOperate() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var btn_spin, func;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      btn_spin = cc.find("btn_spin", _this4._node_main);
                      btn_spin.getComponent(cc.Button).enabled = true;
                      btn_spin.getComponent(cc.Button).interactable = true;
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.wheel_click);
                        btn_spin.getComponent(cc.Button).interactable = false;
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(btn_spin, func);
                      Global.btnClickEvent(btn_spin, function() {
                        btn_spin.stopAllActions();
                        func();
                      });

                     case 6:
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
      showResult: function showResult() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
                  var resp, rorationWheel, targetAngle, diffAngle, mRound;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      cc.find("spineEff1", _this5._node_main).active = false;
                      cc.find("spineEff2", _this5._node_main).active = false;
                      _context7.next = 4;
                      return cc.vv.gameData.reqSubGame(Global.QUEENOFSEA_MAP_RTYPE.COLLECT_WHEEL);

                     case 4:
                      resp = _context7.sent;
                      if (!(200 === resp.code)) {
                        _context7.next = 22;
                        break;
                      }
                      SlotsFacade.QueenSeaCollectProgress.setCollectNum(resp.data.needCoins);
                      _this5._targetIdx = resp.data.idx - 1;
                      rorationWheel = cc.find("rorationWheel", _this5._node_main);
                      rorationWheel.angle = 0;
                      targetAngle = 45 * _this5._targetIdx;
                      diffAngle = targetAngle - rorationWheel.angle;
                      mRound = 10;
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.wheel);
                      _context7.next = 16;
                      return _this5.playActions(rorationWheel, [ cc.rotateTo(.5 * mRound, rorationWheel.angle + 360 * mRound + diffAngle).easing(cc.easeSineInOut()) ]);

                     case 16:
                      Global.SlotsSoundMgr.stopEffectByName(SlotsFacade.soundMgr.wheel);
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.wheel_stop);
                      cc.find("spineEffWin", _this5._node_main).active = true;
                      success();
                      _context7.next = 23;
                      break;

                     case 22:
                      AppLog.err("\u8bf7\u6c42\u6570\u636e\u9519\u8bef");

                     case 23:
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
        var _this6 = this;
        return new Promise(function(success) {
          _this6.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  TheMermaid_subGameDice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ff9dCWtXpJ6I75CFlrfIDt", "TheMermaid_subGameDice");
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
      extends: require("TheMermaid_subGameBase"),
      properties: {
        _subGameNodeName: "subGameDice",
        _lblStartPrize: null,
        _lblPickMult: null,
        _sprPickTips: null,
        _diceEffList: null,
        _winMultList: null,
        _restDiceList: null,
        _btnSpin: null,
        _spinDice: null,
        _spinBubble: null,
        _pickLeftNum: 5
      },
      onLoad: function onLoad() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var nodeDetail, i, _i, j, winMultNode, _i2;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._super();
              _this._lblStartPrize = cc.find("nodePrizePool/theme163_game_c_2/lblStartPrize", _this._node_main);
              _this._lblPickMult = cc.find("nodePrizePool/theme163_game_c_3/lblPickMult", _this._node_main);
              _this._sprPickTips = cc.find("nodeDetail/spinTips", _this._node_main);
              nodeDetail = cc.find("nodeDetail", _this._node_main);
              _this._btnSpin = cc.find("btnSpin", nodeDetail);
              _this._spinDice = cc.find("btnSpin/nodeDice", nodeDetail);
              _this._spinBubble = cc.find("btnSpin/nodeBubble", nodeDetail);
              _this._diceEffList = [];
              for (i = 1; i <= 6; i++) _this._diceEffList[i] = cc.find("cell_" + i + "/diceSpine", nodeDetail);
              _this._winMultList = [];
              for (_i = 1; _i <= 6; _i++) {
                _this._winMultList[_i] = [];
                for (j = 1; j <= 4; j++) {
                  winMultNode = cc.find("cell_" + _i + "/winSpine" + j, nodeDetail);
                  winMultNode && (_this._winMultList[_i][j] = winMultNode);
                }
              }
              _this._restDiceList = [];
              for (_i2 = 1; _i2 <= 5; _i2++) _this._restDiceList[_i2] = cc.find("diceList/dice" + _i2, nodeDetail);
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
        var _iterator = _createForOfIteratorHelper(this._diceEffList), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var diceEff = _step.value;
            diceEff && (diceEff.active = false);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var _iterator2 = _createForOfIteratorHelper(this._restDiceList), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var dice = _step2.value;
            dice && (dice.active = true);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
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
        this.playSpine(this._spinDice, null, "animation" + gameInfo.currDices[gameInfo.currDices.length - 1], false);
        this.playSpine(this._spinBubble, null, "animation1", true);
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
                      return _this3.playFullScreen(1);

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
      showStart: function showStart() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var func;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _this4._subGameNode.active = true;
                      _this4._node_start.active = true;
                      _this4._node_start.scale = 0;
                      _context6.next = 5;
                      return _this4.playActions(_this4._node_start, [ cc.scaleTo(.35, 1.5), cc.scaleTo(.15, 1.3) ]);

                     case 5:
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        _this4.playActions(_this4._node_start, [ cc.scaleTo(.15, 1.5), cc.scaleTo(.35, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(_this4._node_start.getChildByName("btnStart"), func);
                      Global.btnClickEvent(_this4._node_start.getChildByName("btnStart"), function() {
                        _this4._node_start.getChildByName("btnStart").stopAllActions();
                        func();
                      }, _this4);

                     case 8:
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
      showMain: function showMain() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
                  var gameInfo;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      gameInfo = cc.vv.gameData.mapInfo.gameInfo;
                      if (!(gameInfo.mult <= 0)) {
                        _context8.next = 4;
                        break;
                      }
                      _context8.next = 4;
                      return _this5.playFullScreen(.5);

                     case 4:
                      _this5._node_start.active = false;
                      _this5._node_main.active = true;
                      _context8.next = 8;
                      return _this5.awaitTime(.2);

                     case 8:
                      _context8.next = 10;
                      return _this5.awaitOrOperate();

                     case 10:
                      _this5.setPlayPickTipsAction(false);
                      _context8.next = 13;
                      return _this5.awaitTime(1);

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x4) {
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
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        var _this6 = this;
        if (isPlay) {
          this._sprPickTips.scale = 1;
          this._sprPickTips.opacity = 0;
          this._sprPickTips.stopAllActions();
          this._sprPickTips.runAction(cc.sequence(cc.fadeIn(.5), cc.callFunc(function() {
            _this6._sprPickTips.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .8), cc.scaleTo(.2, 1), cc.delayTime(1))));
          })));
          this.playSpine(this._spinBubble, null, "animation1", true);
        } else {
          this._sprPickTips.stopAllActions();
          this._sprPickTips.runAction(cc.fadeOut(.5));
        }
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
                  var func;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      _this7.setPlayPickTipsAction(true);
                      _this7._btnSpin.getComponent(cc.Button).enabled = true;
                      _this7._btnSpin.off("click");
                      func = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                          var resp, gameInfo, curPoint;
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) switch (_context10.prev = _context10.next) {
                             case 0:
                              _this7.setPlayPickTipsAction(false);
                              _this7._btnSpin.getComponent(cc.Button).enabled = false;
                              _this7.playSpine(_this7._spinBubble, null, "animation2", false);
                              _context10.next = 5;
                              return cc.vv.gameData.reqSubGame(Global.QUEENOFSEA_MAP_RTYPE.OPERATE_SUBGAME);

                             case 5:
                              resp = _context10.sent;
                              if (!(200 === resp.code)) {
                                _context10.next = 29;
                                break;
                              }
                              gameInfo = resp.data.mapInfo.gameInfo;
                              curPoint = gameInfo.currDices[gameInfo.currDices.length - 1];
                              _this7._pickLeftNum = gameInfo.restCnt;
                              _this7.refreshRestDice();
                              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.move);
                              _this7.playSpine(_this7._spinDice, function() {
                                _this7.playSpine(_this7._spinDice, null, "animation" + curPoint, false);
                              }, "animation" + curPoint + "_1", false);
                              _context10.next = 15;
                              return _this7.awaitTime(1.5);

                             case 15:
                              _context10.next = 17;
                              return _this7.flyDicePointToResultPanel(curPoint);

                             case 17:
                              if (!(_this7._pickLeftNum > 0)) {
                                _context10.next = 26;
                                break;
                              }
                              _this7.playSpine(_this7._spinBubble, null, "animation3", false);
                              _context10.next = 21;
                              return _this7.awaitTime(.5);

                             case 21:
                              _this7.setPlayPickTipsAction(true);
                              _this7._btnSpin.getComponent(cc.Button).enabled = true;
                              cc.vv.gameData.checkAutoPlay(_this7._btnSpin, func);
                              _context10.next = 27;
                              break;

                             case 26:
                              success();

                             case 27:
                              _context10.next = 31;
                              break;

                             case 29:
                              AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                              failed();

                             case 31:
                             case "end":
                              return _context10.stop();
                            }
                          }, _callee10);
                        }));
                        return function func() {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(_this7._btnSpin, func);
                      Global.btnClickEvent(_this7._btnSpin, _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) switch (_context11.prev = _context11.next) {
                           case 0:
                            _this7._btnSpin.stopAllActions();
                            _context11.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context11.stop();
                          }
                        }, _callee11);
                      })));

                     case 6:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function(_x5, _x6) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      refreshRestDice: function refreshRestDice() {
        var _iterator3 = _createForOfIteratorHelper(this._restDiceList), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var dice = _step3.value;
            dice && (dice.active = false);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        for (var i = 1; i <= this._pickLeftNum; i++) this._restDiceList[i].active = true;
      },
      resetWinResultPanel: function resetWinResultPanel() {
        for (var i = 1; i <= 6; i++) {
          var list = this._winMultList[i];
          var _iterator4 = _createForOfIteratorHelper(list), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var winSpine = _step4.value;
              winSpine && (winSpine.active = false);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      },
      refreshCurWinResultPanel: function refreshCurWinResultPanel() {
        this.resetWinResultPanel();
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        var isAddSpinTimes = false;
        var diceEffNode = null;
        for (var i in gameInfo.currDices) {
          var point = gameInfo.currDices[i];
          for (var idx in this._winMultList[point]) {
            var diceEff = this._winMultList[point][idx];
            if (!diceEff.active) {
              diceEff.active = true;
              parseInt(i) == this._winMultList.length - 1 && parseInt(idx) == this._winMultList[point].length - 1 && (isAddSpinTimes = true);
              diceEffNode = diceEff;
              break;
            }
          }
        }
        return {
          isAddTimes: isAddSpinTimes,
          node: diceEffNode
        };
      },
      flyDicePointToResultPanel: function flyDicePointToResultPanel(curPoint) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              return _context15.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
                  var data, targetNode, spineNodeMult, mult;
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.touzi_fly);
                      _context14.next = 3;
                      return _this8.playFlyEffect(_this8._btnSpin, _this8._diceEffList[curPoint]);

                     case 3:
                      _this8.playSpine(_this8._diceEffList[curPoint], null, "animation", false);
                      _context14.next = 6;
                      return _this8.awaitTime(.3);

                     case 6:
                      data = _this8.refreshCurWinResultPanel();
                      _context14.next = 9;
                      return _this8.awaitTime(.5);

                     case 9:
                      if (data.isAddTimes) {
                        _context14.next = 24;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.touzi_extra);
                      targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this8._node_main);
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.touzi_fly);
                      _context14.next = 15;
                      return _this8.playFlyEffect(data.node, targetNode);

                     case 15:
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.touzi_extra);
                      spineNodeMult = cc.find("nodePrizePool/spineNodeMult", _this8._node_main);
                      _this8.playSpine(spineNodeMult);
                      _context14.next = 20;
                      return _this8.awaitTime(.2);

                     case 20:
                      mult = cc.vv.gameData.mapInfo.gameInfo.mult;
                      _this8.setLabel(_this8._lblPickMult, mult ? mult + "X" : "");
                      _context14.next = 27;
                      break;

                     case 24:
                      _context14.next = 26;
                      return _this8.playFlyEffect(data.node, cc.find("nodeDetail/diceList", _this8._node_main));

                     case 26:
                      _this8.refreshRestDice();

                     case 27:
                      _context14.next = 29;
                      return _this8.awaitTime(.2);

                     case 29:
                      success();

                     case 30:
                     case "end":
                      return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function(_x7) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      playFlyEffect: function playFlyEffect(startNode, targetNode) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              return _context17.abrupt("return", new Promise(function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success) {
                  var startPos, targetPos, nodeFly;
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      startPos = _this9._node_main.convertToNodeSpaceAR(startNode.parent.convertToWorldSpaceAR(startNode.position));
                      targetPos = _this9._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this9._node_main);
                      nodeFly.position = startPos;
                      nodeFly.scale = 1;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      _context16.next = 8;
                      return _this9.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);

                     case 8:
                      success();

                     case 9:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function(_x8) {
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
      showResult: function showResult() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
             case 0:
              return _context19.abrupt("return", new Promise(function() {
                var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success) {
                  var ui, baseCoin, mult, func;
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      _this10._node_win.active = true;
                      ui = _this10._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this10._lblStartPrize.getComponent(cc.Label).string);
                      mult = cc.vv.gameData.mapInfo.gameInfo.mult;
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = false;
                      _this10.setLabel(ui.getChildByName("lblWinCoinShow"), mult + " X " + _this10.convertNumToShortStr(baseCoin) + " = " + _this10.convertNumToShortStr(mult * baseCoin));
                      _this10.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), mult * baseCoin);
                      _context18.next = 10;
                      return _this10.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 10:
                      cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(mult * baseCoin);
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = true;
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        _this10.setLabel(ui.getChildByName("lblWinCoin"), _this10.convertNumToShortStr(mult * baseCoin));
                        _this10.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(ui.getChildByName("btnCollect"), func);
                      Global.btnClickEvent(ui.getChildByName("btnCollect"), function() {
                        ui.getChildByName("btnCollect").stopAllActions();
                        func();
                      }, _this10);

                     case 15:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                }));
                return function(_x9) {
                  return _ref10.apply(this, arguments);
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
    TheMermaid_subGameBase: "TheMermaid_subGameBase"
  } ],
  TheMermaid_subGameGoldShip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4aaa8CreKFMxrt+jefDwYtE", "TheMermaid_subGameGoldShip");
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
      extends: require("TheMermaid_subGameBase"),
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
        this._sprPickTips = cc.find("theme163_game9_2/theme163_game9_1", this._node_main);
        this._boxItems = [];
        for (var i = 1; i <= 16; i++) this._boxItems.push(cc.find("nodeBoxList", this._node_main).getChildByName("ItemNode" + i));
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
            item.getChildByName("spine_star").active = false;
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
          sprMult.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game9_treasuer").getSpriteFrame("theme163_game9_num_" + result.mult);
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
                      return _this2.playFullScreen(1);

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
      showStart: function showStart() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var func;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      _this3._subGameNode.active = true;
                      _this3._node_start.active = true;
                      _this3._node_start.scale = 0;
                      _context5.next = 5;
                      return _this3.playActions(_this3._node_start, [ cc.scaleTo(.35, 1.2), cc.scaleTo(.15, 1) ]);

                     case 5:
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        _this3.playActions(_this3._node_start, [ cc.scaleTo(.15, 1.5), cc.scaleTo(.35, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(_this3._node_start.getChildByName("btnStart"), func);
                      Global.btnClickEvent(_this3._node_start.getChildByName("btnStart"), function() {
                        _this3._node_start.getChildByName("btnStart").stopAllActions();
                        func();
                      }, _this3);

                     case 8:
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
      showMain: function showMain() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
                  var _iterator2, _step2, item;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      _context7.next = 2;
                      return _this4.playFullScreen(.5);

                     case 2:
                      _this4._node_start.active = false;
                      _this4._node_main.active = true;
                      _context7.next = 6;
                      return _this4.awaitTime(1);

                     case 6:
                      _context7.next = 8;
                      return _this4.awaitOrOperate();

                     case 8:
                      _this4.setPlayPickTipsAction(false);
                      _iterator2 = _createForOfIteratorHelper(_this4._boxItems);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          item = _step2.value;
                          _this4.setBoxGray(item, !item.getChildByName("treasurebox_open").active);
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context7.next = 13;
                      return _this4.awaitTime(2);

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x4) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        var _this5 = this;
        if (isPlay) {
          this._sprPickTips.scale = 1;
          this._sprPickTips.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .9), cc.scaleTo(.2, 1), cc.delayTime(2))));
          var _iterator3 = _createForOfIteratorHelper(this._boxItems), _step3;
          try {
            var _loop = function _loop() {
              var item = _step3.value;
              if (!item.getChildByName("treasurebox_open").active) {
                setTimeout(function() {
                  item.getChildByName("treasurebox_open").active || _this5.playSpine(item.getChildByName("spine_star"), null, "animation", false);
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
          var _iterator4 = _createForOfIteratorHelper(this._boxItems), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var item = _step4.value;
              item.getChildByName("spine_star").active = false;
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
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
                  var _iterator5, _step5, _loop2;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      _this6.setPlayPickTipsAction(true);
                      _iterator5 = _createForOfIteratorHelper(_this6._boxItems);
                      try {
                        _loop2 = function _loop2() {
                          var item = _step5.value;
                          item.off("click");
                          Global.btnClickEvent(item, _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                            var resp, gameInfo, resultList, curChoiceData, name;
                            return regeneratorRuntime.wrap(function _callee9$(_context9) {
                              while (1) switch (_context9.prev = _context9.next) {
                               case 0:
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                                _this6.setPlayPickTipsAction(false);
                                _context9.next = 4;
                                return cc.vv.gameData.reqSubGame(Global.QUEENOFSEA_MAP_RTYPE.OPERATE_SUBGAME, parseInt(item.name.substring(8, item.name.length)));

                               case 4:
                                resp = _context9.sent;
                                if (!(200 === resp.code)) {
                                  _context9.next = 34;
                                  break;
                                }
                                gameInfo = resp.data.mapInfo.gameInfo;
                                resultList = gameInfo.choiceItems;
                                curChoiceData = resultList[resultList.length - 1];
                                item.getChildByName("treasurebox").active = false;
                                _this6.playSpine(item.getChildByName("spine_treasurebox"), function() {
                                  item.getChildByName("spine_treasurebox").active = false;
                                  item.getChildByName("treasurebox_open").active = true;
                                }, "animation2", false);
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.select5);
                                if (!(1 == curChoiceData.type)) {
                                  _context9.next = 20;
                                  break;
                                }
                                item.getChildByName("sprPickMult").active = true;
                                item.getChildByName("sprPickMult").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game9_treasuer").getSpriteFrame("theme163_game9_num_" + curChoiceData.mult);
                                item.getChildByName("sprPickMult").scale = 0;
                                _context9.next = 18;
                                return _this6.playActions(item.getChildByName("sprPickMult"), [ cc.scaleTo(.8, 1) ]);

                               case 18:
                                _context9.next = 27;
                                break;

                               case 20:
                                name = "d" + curChoiceData.mult;
                                2 == curChoiceData.type && (name = "jackpot");
                                item.getChildByName("sprPickMultDie").active = true;
                                item.getChildByName("sprPickMultDie").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game9_treasuer").getSpriteFrame("theme163_game9_num_" + name);
                                item.getChildByName("sprPickMultDie").scale = 0;
                                _context9.next = 27;
                                return _this6.playActions(item.getChildByName("sprPickMultDie"), [ cc.scaleTo(.8, 1) ]);

                               case 27:
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.touzi_fly);
                                _context9.next = 30;
                                return _this6.playMultFlyEff(item, curChoiceData.mult);

                               case 30:
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.touzi_extra);
                                0 != curChoiceData.type ? _this6.setPlayPickTipsAction(true) : success();
                                _context9.next = 36;
                                break;

                               case 34:
                                AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                                failed();

                               case 36:
                               case "end":
                                return _context9.stop();
                              }
                            }, _callee9);
                          })), _this6);
                        };
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) _loop2();
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                     case 3:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x5, _x6) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      playMultFlyEff: function playMultFlyEff(itemNode, mult) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success) {
                  var beginPos, targetNode, targetPos, nodeFly, spineNodeMult;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.fly_mul);
                      beginPos = _this7._node_main.convertToNodeSpaceAR(itemNode.parent.convertToWorldSpaceAR(itemNode.position));
                      targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this7._node_main);
                      targetPos = _this7._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this7._node_main);
                      nodeFly.position = beginPos;
                      nodeFly.scale = 1;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      _context12.next = 10;
                      return _this7.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);

                     case 10:
                      spineNodeMult = cc.find("nodePrizePool/spineNodeMult", _this7._node_main);
                      _this7.playSpine(spineNodeMult);
                      _context12.next = 14;
                      return _this7.awaitTime(.2);

                     case 14:
                      _this7._pickMultNum += mult;
                      _this7.setLabel(_this7._lblPickMult, _this7._pickMultNum ? _this7._pickMultNum + "X" : "");
                      success();

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
      },
      setBoxGray: function setBoxGray(itemNode, isGray) {
        if (isGray) if (Global.random0To1() > .6) {
          itemNode.getChildByName("sprPickMultDie").active = true;
          itemNode.getChildByName("sprPickMultDie").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game9_treasuer").getSpriteFrame("theme163_game9_num_d" + MULT_ARR[Math.floor(100 * Global.random0To1()) % MULT_ARR.length]);
        } else {
          itemNode.getChildByName("sprPickMult").active = true;
          itemNode.getChildByName("sprPickMult").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game9_treasuer").getSpriteFrame("theme163_game9_num_" + MULT_ARR[Math.floor(100 * Global.random0To1()) % MULT_ARR.length]);
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
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              return _context15.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
                  var ui, baseCoin, func;
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                     case 0:
                      _this8._node_win.active = true;
                      ui = _this8._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this8._lblStartPrize.getComponent(cc.Label).string);
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = false;
                      _this8.setLabel(ui.getChildByName("lblWinCoinShow"), _this8._pickMultNum + " X " + _this8.convertNumToShortStr(baseCoin) + " = " + _this8.convertNumToShortStr(_this8._pickMultNum * baseCoin));
                      _this8.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), _this8._pickMultNum * baseCoin);
                      _context14.next = 9;
                      return _this8.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 9:
                      cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(_this8._pickMultNum * baseCoin);
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = true;
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        _this8.setLabel(ui.getChildByName("lblWinCoin"), _this8.convertNumToShortStr(_this8._pickMultNum * baseCoin));
                        _this8.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(ui.getChildByName("btnCollect"), func);
                      Global.btnClickEvent(ui.getChildByName("btnCollect"), function() {
                        ui.getChildByName("btnCollect").stopAllActions();
                        func();
                      }, _this8);

                     case 14:
                     case "end":
                      return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function(_x8) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    TheMermaid_subGameBase: "TheMermaid_subGameBase"
  } ],
  TheMermaid_subGameMultWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03739m6HeNPo4E8UFzNAy+B", "TheMermaid_subGameMultWheel");
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
      extends: require("TheMermaid_subGameBase"),
      properties: {
        _subGameNodeName: "subGameMultWheel",
        _lblStartPrize: null,
        _lblPickMult: null,
        _sprPickTips: null,
        _wheelList: null,
        _grayMaskList: null,
        _spineWheelWin: null,
        _winMultList: null,
        _spineMultWin: null,
        _btnSpin: null
      },
      onLoad: function onLoad() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var nodeWheel, i, _i, j, winMultNode;
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
              _this._spineMultWin = cc.find("nodePrizePool/theme163_game6_2/spineWin", _this._node_main);
              _this.init();

             case 14:
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
        this._spineMultWin.active = false;
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
                      return _this3.playFullScreen(1);

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
      showStart: function showStart() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var func;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _this4._subGameNode.active = true;
                      _this4._node_start.active = true;
                      _this4._node_start.scale = 0;
                      _context6.next = 5;
                      return _this4.playActions(_this4._node_start, [ cc.scaleTo(.35, 1.5), cc.scaleTo(.15, 1.3) ]);

                     case 5:
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        _this4.playActions(_this4._node_start, [ cc.scaleTo(.15, 1.5), cc.scaleTo(.35, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(_this4._node_start.getChildByName("btnStart"), func);
                      Global.btnClickEvent(_this4._node_start.getChildByName("btnStart"), function() {
                        _this4._node_start.getChildByName("btnStart").stopAllActions();
                        func();
                      }, _this4);

                     case 8:
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
      showMain: function showMain() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
                  var gameInfo;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      gameInfo = cc.vv.gameData.mapInfo.gameInfo;
                      if (!(gameInfo.currStep <= 0)) {
                        _context8.next = 4;
                        break;
                      }
                      _context8.next = 4;
                      return _this5.playFullScreen(.5);

                     case 4:
                      _this5._node_start.active = false;
                      _this5._node_main.active = true;
                      _context8.next = 8;
                      return _this5.awaitTime(.2);

                     case 8:
                      _context8.next = 10;
                      return _this5.awaitOrOperate();

                     case 10:
                      _this5.setPlayPickTipsAction(false);
                      _context8.next = 13;
                      return _this5.awaitTime(1);

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x4) {
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
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
                  var func;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      _this6.setPlayPickTipsAction(true);
                      _this6._btnSpin.getComponent(cc.Button).interactable = true;
                      _this6._btnSpin.off("click");
                      func = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                          var resp, gameInfo, curComb, i;
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) switch (_context10.prev = _context10.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                              _this6.setPlayPickTipsAction(false);
                              _this6._btnSpin.getComponent(cc.Button).interactable = false;
                              _context10.next = 5;
                              return cc.vv.gameData.reqSubGame(Global.QUEENOFSEA_MAP_RTYPE.OPERATE_SUBGAME);

                             case 5:
                              resp = _context10.sent;
                              if (!(200 === resp.code)) {
                                _context10.next = 34;
                                break;
                              }
                              gameInfo = resp.data.mapInfo.gameInfo;
                              curComb = gameInfo.finalColorComb[gameInfo.currStep - 1];
                              _context10.next = 11;
                              return _this6.rotateWheelToTarget(curComb);

                             case 11:
                              _context10.next = 13;
                              return _this6.awaitTime(7.5);

                             case 13:
                              _context10.next = 15;
                              return _this6.flyWinColorToResultPanel(curComb);

                             case 15:
                              if (!(gameInfo.mult <= 0)) {
                                _context10.next = 21;
                                break;
                              }
                              _this6.setPlayPickTipsAction(true);
                              _this6._btnSpin.getComponent(cc.Button).interactable = true;
                              cc.vv.gameData.checkAutoPlay(_this6._btnSpin, func);
                              _context10.next = 32;
                              break;

                             case 21:
                              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.fly_mul);
                              _this6.flyWinColorToMultPos(gameInfo.finalColorId);
                              i = 1;

                             case 24:
                              if (!(i <= 3)) {
                                _context10.next = 31;
                                break;
                              }
                              _this6.playSpine(_this6._spineMultWin, null, "animation" + gameInfo.finalColorId, false);
                              _context10.next = 28;
                              return _this6.awaitTime(.4);

                             case 28:
                              i++;
                              _context10.next = 24;
                              break;

                             case 31:
                              success();

                             case 32:
                              _context10.next = 36;
                              break;

                             case 34:
                              AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                              failed();

                             case 36:
                             case "end":
                              return _context10.stop();
                            }
                          }, _callee10);
                        }));
                        return function func() {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(_this6._btnSpin, func);
                      Global.btnClickEvent(_this6._btnSpin, _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) switch (_context11.prev = _context11.next) {
                           case 0:
                            _this6._btnSpin.stopAllActions();
                            _context11.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context11.stop();
                          }
                        }, _callee11);
                      })));

                     case 6:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function(_x5, _x6) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      rotateWheelToTarget: function rotateWheelToTarget(curComb) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              return _context15.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
                  var i, rorationWheel, targetAngle, diffAngle, mRound;
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.island_wheel);
                      i = 1;

                     case 2:
                      if (!(i <= 3)) {
                        _context14.next = 18;
                        break;
                      }
                      rorationWheel = _this7._wheelList[i];
                      rorationWheel.angle = rorationWheel.angle % 360;
                      targetAngle = -36 * _this7.getWheelColorPos(i, curComb[i - 1]);
                      diffAngle = targetAngle - rorationWheel.angle;
                      mRound = 6;
                      _context14.next = 10;
                      return _this7.playActions(rorationWheel, [ cc.rotateTo(.5 * mRound, 360 * mRound - diffAngle).easing(cc.easeSineInOut()) ]);

                     case 10:
                      _this7._grayMaskList[i].active = true;
                      _this7.playSpine(_this7._spineWheelWin, null, "animation" + i, false);
                      _context14.next = 14;
                      return _this7.awaitTime(.5);

                     case 14:
                      success();

                     case 15:
                      i++;
                      _context14.next = 2;
                      break;

                     case 18:
                     case "end":
                      return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function(_x7) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      resetWinResultPanel: function resetWinResultPanel() {
        for (var i = 1; i <= 6; i++) for (var j = 1; j <= 3; j++) this._winMultList[i][j].active = false;
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
              for (var j = 1; j <= 3; j++) if (!this._winMultList[colorIdx][j].active) {
                this._winMultList[colorIdx][j].active = true;
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
          if (!colorNode.active) return colorNode;
        }
      },
      getColorCenterNode: function getColorCenterNode(colorId) {
        return this._winMultList[colorId][2];
      },
      flyWinColorToResultPanel: function flyWinColorToResultPanel(curComb) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              return _context17.abrupt("return", new Promise(function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success) {
                  var i, startNode, targetNode;
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.zhuanpan_show);
                      i = 1;

                     case 2:
                      if (!(i <= 3)) {
                        _context16.next = 11;
                        break;
                      }
                      startNode = cc.find("wheelNode/wheelWinFrame/node" + i, _this8._node_main);
                      targetNode = _this8.getColorWinNode(curComb[i - 1]);
                      _context16.next = 7;
                      return _this8.playFlyEffect(startNode, targetNode);

                     case 7:
                      targetNode && (targetNode.active = true);

                     case 8:
                      i++;
                      _context16.next = 2;
                      break;

                     case 11:
                      success();

                     case 12:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function(_x8) {
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
      flyWinColorToMultPos: function flyWinColorToMultPos(winColor) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
          var startNode, targetNode, spineNodeMult, mult;
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
             case 0:
              startNode = _this9.getColorCenterNode(winColor);
              targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this9._node_main);
              _context18.next = 4;
              return _this9.playFlyEffect(startNode, targetNode);

             case 4:
              spineNodeMult = cc.find("nodePrizePool/spineNodeMult", _this9._node_main);
              _this9.playSpine(spineNodeMult);
              _context18.next = 8;
              return _this9.awaitTime(.2);

             case 8:
              mult = cc.vv.gameData.mapInfo.gameInfo.mult;
              _this9.setLabel(_this9._lblPickMult, mult ? mult + "X" : "");

             case 10:
             case "end":
              return _context18.stop();
            }
          }, _callee18);
        }))();
      },
      playFlyEffect: function playFlyEffect(startNode, targetNode) {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) switch (_context20.prev = _context20.next) {
             case 0:
              return _context20.abrupt("return", new Promise(function() {
                var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(success) {
                  var startPos, targetPos, nodeFly;
                  return regeneratorRuntime.wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                     case 0:
                      if (!(startNode && targetNode)) {
                        _context19.next = 9;
                        break;
                      }
                      startPos = _this10._node_main.convertToNodeSpaceAR(startNode.parent.convertToWorldSpaceAR(startNode.position));
                      targetPos = _this10._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this10._node_main);
                      nodeFly.position = startPos;
                      nodeFly.scale = 1;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      _context19.next = 9;
                      return _this10.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);

                     case 9:
                      success();

                     case 10:
                     case "end":
                      return _context19.stop();
                    }
                  }, _callee19);
                }));
                return function(_x9) {
                  return _ref10.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context20.stop();
            }
          }, _callee20);
        }))();
      },
      showResult: function showResult() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
             case 0:
              return _context22.abrupt("return", new Promise(function() {
                var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee21(success) {
                  var ui, baseCoin, mult, func;
                  return regeneratorRuntime.wrap(function _callee21$(_context21) {
                    while (1) switch (_context21.prev = _context21.next) {
                     case 0:
                      _this11._node_win.active = true;
                      ui = _this11._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this11._lblStartPrize.getComponent(cc.Label).string);
                      mult = cc.vv.gameData.mapInfo.gameInfo.mult;
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = false;
                      _this11.setLabel(ui.getChildByName("lblWinCoinShow"), mult + " X " + _this11.convertNumToShortStr(baseCoin) + " = " + _this11.convertNumToShortStr(mult * baseCoin));
                      _this11.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), mult * baseCoin);
                      _context21.next = 10;
                      return _this11.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 10:
                      cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(mult * baseCoin);
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = true;
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        _this11.setLabel(ui.getChildByName("lblWinCoin"), _this11.convertNumToShortStr(mult * baseCoin));
                        _this11.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(ui.getChildByName("btnCollect"), func);
                      Global.btnClickEvent(ui.getChildByName("btnCollect"), function() {
                        ui.getChildByName("btnCollect").stopAllActions();
                        func();
                      }, _this11);

                     case 15:
                     case "end":
                      return _context21.stop();
                    }
                  }, _callee21);
                }));
                return function(_x10) {
                  return _ref11.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context22.stop();
            }
          }, _callee22);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    TheMermaid_subGameBase: "TheMermaid_subGameBase"
  } ],
  TheMermaid_subGameRenyu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e639cLP+vhCqIBbUFRh61kb", "TheMermaid_subGameRenyu");
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
      extends: require("TheMermaid_subGameBase"),
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
        for (var i = 1; i <= 12; i++) this._goldCoinItems.push(cc.find("nodeRenyuGoldcoinList", this._node_main).getChildByName("ItemNode" + i));
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
            item.getChildByName("spineRenyuFire").active = false;
            item.getChildByName("sprPickMult").active = false;
            item.getChildByName("sprPickMult").scale = 0;
            item.getChildByName("sprPickMult").y = 0;
            item.getChildByName("sprAdd1Pick").active = false;
            item.getChildByName("sprAdd1Pick").scale = 0;
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
          item.getChildByName("spineRenyuGoldcoin").active = false;
          var sprMult = item.getChildByName("sprPickMult");
          sprMult.active = true;
          sprMult.scale = 1;
          sprMult.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game5_mermaid").getSpriteFrame("theme163_game5_cnt" + result.mult);
          var add1Pick = result.cnt;
          if (add1Pick) {
            sprMult.y = 25;
            sprMult.scale = .75;
            var sprAddPick = item.getChildByName("sprAdd1Pick");
            sprAddPick.active = true;
            sprAddPick.scale = 1;
          }
          this.playSpine(item.getChildByName("spineRenyuFire"), null, "animation", true);
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
                      return _this2.playFullScreen(1);

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
      showStart: function showStart() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var func;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      _this3._subGameNode.active = true;
                      _this3._node_start.active = true;
                      _this3._node_start.scale = 0;
                      _context5.next = 5;
                      return _this3.playActions(_this3._node_start, [ cc.scaleTo(.35, 1.2), cc.scaleTo(.15, 1) ]);

                     case 5:
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        _this3.playActions(_this3._node_start, [ cc.scaleTo(.15, 1.5), cc.scaleTo(.35, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(_this3._node_start.getChildByName("btnStart"), func);
                      Global.btnClickEvent(_this3._node_start.getChildByName("btnStart"), function() {
                        _this3._node_start.getChildByName("btnStart").stopAllActions();
                        func();
                      }, _this3);

                     case 8:
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
      showMain: function showMain() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
                  var _iterator2, _step2, item;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      _context7.next = 2;
                      return _this4.playFullScreen(.5);

                     case 2:
                      _this4._node_start.active = false;
                      _this4._node_main.active = true;
                      _this4.setLabel(_this4._lblPickLeft, _this4._pickLeftNum);
                      _context7.next = 7;
                      return _this4.awaitTime(1);

                     case 7:
                      _context7.next = 9;
                      return _this4.awaitOrOperate();

                     case 9:
                      _this4.setPlayPickTipsAction(false);
                      _iterator2 = _createForOfIteratorHelper(_this4._goldCoinItems);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          item = _step2.value;
                          _this4.setGoldCoinGray(item, !item.getChildByName("sprPickMult").active);
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context7.next = 14;
                      return _this4.awaitTime(2);

                     case 14:
                      success();

                     case 15:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x4) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        var _this5 = this;
        if (isPlay) {
          this._sprPickTips.scale = 1;
          this._sprPickTips.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .9), cc.scaleTo(.2, 1), cc.delayTime(2))));
          var _iterator3 = _createForOfIteratorHelper(this._goldCoinItems), _step3;
          try {
            var _loop = function _loop() {
              var item = _step3.value;
              if (!item.getChildByName("sprPickMult").active) {
                setTimeout(function() {
                  item.getChildByName("sprPickMult").active || _this5.playSpine(item.getChildByName("spineRenyuGoldcoin"), null, "animation1", true);
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
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
                  var _iterator5, _step5, _loop2;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      _this6.setPlayPickTipsAction(true);
                      _iterator5 = _createForOfIteratorHelper(_this6._goldCoinItems);
                      try {
                        _loop2 = function _loop2() {
                          var item = _step5.value;
                          item.off("click");
                          Global.btnClickEvent(item, _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                            var resp, gameData, resultList, curChoiceData, add1Pick;
                            return regeneratorRuntime.wrap(function _callee9$(_context9) {
                              while (1) switch (_context9.prev = _context9.next) {
                               case 0:
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                                _this6.setPlayPickTipsAction(false);
                                _context9.next = 4;
                                return cc.vv.gameData.reqSubGame(Global.QUEENOFSEA_MAP_RTYPE.OPERATE_SUBGAME, parseInt(item.name.substring(8, item.name.length)));

                               case 4:
                                resp = _context9.sent;
                                if (!(200 === resp.code)) {
                                  _context9.next = 30;
                                  break;
                                }
                                gameData = resp.data.mapInfo.gameInfo;
                                resultList = gameData.choiceItems;
                                curChoiceData = resultList[resultList.length - 1];
                                _this6._pickLeftNum--;
                                _this6.playSpine(item.getChildByName("spineRenyuGoldcoin"), null, "animation2", false);
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.select4);
                                _this6.setLabel(_this6._lblPickLeft, _this6._pickLeftNum);
                                item.getChildByName("sprPickMult").active = true;
                                item.getChildByName("sprPickMult").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game5_mermaid").getSpriteFrame("theme163_game5_cnt" + curChoiceData.mult);
                                add1Pick = curChoiceData.cnt;
                                _this6._pickLeftNum = gameData.restCnt;
                                if (add1Pick) {
                                  item.getChildByName("sprAdd1Pick").active = true;
                                  item.getChildByName("sprPickMult").y = 25;
                                  _this6.playActions(item.getChildByName("sprAdd1Pick"), [ cc.scaleTo(.5, 1) ]);
                                }
                                _context9.next = 20;
                                return _this6.playActions(item.getChildByName("sprPickMult"), [ cc.scaleTo(.5, add1Pick ? .75 : 1) ]);

                               case 20:
                                _this6.playSpine(item.getChildByName("spineRenyuFire"), null, "animation", true);
                                add1Pick && _this6.playAddPickFlyEff(item);
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.touzi_fly);
                                _context9.next = 25;
                                return _this6.playMultFlyEff(item, curChoiceData.mult);

                               case 25:
                                Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.touzi_extra);
                                _this6.setLabel(_this6._lblPickLeft, _this6._pickLeftNum);
                                _this6._pickLeftNum > 0 ? _this6.setPlayPickTipsAction(true) : success();
                                _context9.next = 32;
                                break;

                               case 30:
                                AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                                failed();

                               case 32:
                               case "end":
                                return _context9.stop();
                              }
                            }, _callee9);
                          })), _this6);
                        };
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) _loop2();
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                     case 3:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x5, _x6) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      playMultFlyEff: function playMultFlyEff(itemNode, mult) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success) {
                  var beginPos, targetNode, targetPos, nodeFly, spineNodeMult;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.fly_mul);
                      beginPos = _this7._node_main.convertToNodeSpaceAR(itemNode.parent.convertToWorldSpaceAR(itemNode.position));
                      targetNode = cc.find("nodePrizePool/theme163_game_c_3", _this7._node_main);
                      targetPos = _this7._node_main.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
                      nodeFly = cc.find("nodeFlyMultNum", _this7._node_main);
                      nodeFly.position = beginPos;
                      nodeFly.scale = 1;
                      nodeFly.getComponent(cc.ParticleSystem).resetSystem();
                      _context12.next = 10;
                      return _this7.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);

                     case 10:
                      spineNodeMult = cc.find("nodePrizePool/spineNodeMult", _this7._node_main);
                      _this7.playSpine(spineNodeMult);
                      _context12.next = 14;
                      return _this7.awaitTime(.2);

                     case 14:
                      _this7._pickMultNum += mult;
                      _this7.setLabel(_this7._lblPickMult, _this7._pickMultNum ? _this7._pickMultNum + "X" : "");
                      success();

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
      },
      playAddPickFlyEff: function playAddPickFlyEff(itemNode) {
        var beginPos = this._node_main.convertToNodeSpaceAR(itemNode.parent.convertToWorldSpaceAR(itemNode.position));
        var targetPos = this._node_main.convertToNodeSpaceAR(this._lblPickLeft.parent.convertToWorldSpaceAR(this._lblPickLeft.position));
        var nodeFly = cc.find("nodeFlyPickNum", this._node_main);
        nodeFly.position = beginPos;
        nodeFly.scale = 1;
        this.playActions(nodeFly, [ cc.moveTo(.5, targetPos), cc.scaleTo(.1, 0) ]);
      },
      setGoldCoinGray: function setGoldCoinGray(itemNode, isGray) {
        if (isGray) {
          this.playSpine(itemNode.getChildByName("spineRenyuGoldcoin"), null, "animation3", false);
          var isAddPick = Global.random0To1() > .7;
          itemNode.getChildByName("sprPickMult").active = true;
          itemNode.getChildByName("sprPickMult").scale = isAddPick ? .75 : 1;
          itemNode.getChildByName("sprPickMult").y = isAddPick ? 25 : 0;
          itemNode.getChildByName("sprPickMult").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("game5_mermaid").getSpriteFrame("theme163_game5_cnt" + MULT_ARR[Math.floor(100 * Global.random0To1()) % MULT_ARR.length]);
          itemNode.getChildByName("sprAdd1Pick").active = isAddPick;
          itemNode.getChildByName("sprAdd1Pick").scale = 1;
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
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              return _context15.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
                  var ui, baseCoin, func;
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                     case 0:
                      _this8._node_win.active = true;
                      ui = _this8._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this8._lblStartPrize.getComponent(cc.Label).string);
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = false;
                      _this8.setLabel(ui.getChildByName("lblWinCoinShow"), _this8._pickMultNum + " X " + _this8.convertNumToShortStr(baseCoin) + " = " + _this8.convertNumToShortStr(_this8._pickMultNum * baseCoin));
                      _this8.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), _this8._pickMultNum * baseCoin);
                      _context14.next = 9;
                      return _this8.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 9:
                      cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(_this8._pickMultNum * baseCoin);
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = true;
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        _this8.setLabel(ui.getChildByName("lblWinCoin"), _this8.convertNumToShortStr(_this8._pickMultNum * baseCoin));
                        _this8.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(ui.getChildByName("btnCollect"), func);
                      Global.btnClickEvent(ui.getChildByName("btnCollect"), function() {
                        ui.getChildByName("btnCollect").stopAllActions();
                        func();
                      }, _this8);

                     case 14:
                     case "end":
                      return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function(_x8) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    TheMermaid_subGameBase: "TheMermaid_subGameBase"
  } ],
  TheMermaid_subGameYellowFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5eca24ZBnlOkp0EIVZj4Aev", "TheMermaid_subGameYellowFish");
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
      extends: require("TheMermaid_subGameBase"),
      properties: {
        _subGameNodeName: "subGameYellowFish",
        _lblStartPrize: null,
        _sprPickTips: null,
        _roralsFishList: null,
        _winList: null,
        _chooseCount: 0
      },
      onLoad: function onLoad() {
        this._super();
        this._lblStartPrize = cc.find("nodePrizePool/theme163_game_c_2/lblStartPrize", this._node_main);
        this._sprPickTips = cc.find("nodeDetail/pickTips", this._node_main);
        this._roralsFishList = [];
        this._winList = [];
        for (var i = 1; i <= 5; i++) {
          this._roralsFishList[i] = cc.find("nodeDetail/fish/fish" + i, this._node_main);
          this._winList[i] = cc.find("nodeDetail/win/win" + i, this._node_main);
        }
        this.init();
      },
      init: function init() {
        for (var i = 1; i <= 5; i++) {
          this._winList[i].active = false;
          var roralhNode = this._roralsFishList[i];
          roralhNode.getComponent(cc.Button).enabled = true;
          var parrot = roralhNode.getChildByName("spineParrot");
          parrot.active = true;
          this.playSpine(parrot, null, "animation1", true);
          var bubble = roralhNode.getChildByName("spineBubble");
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
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        this._subGameNode.active = true;
        this._chooseCount = gameInfo.useCnt;
        for (var i in gameInfo.coral) {
          var roralIdx = parseInt(i) + 1;
          var winIdx = gameInfo.coral[i];
          var roralhNode = this._roralsFishList[roralIdx];
          roralhNode.getComponent(cc.Button).enabled = 0 == winIdx;
          var parrot = roralhNode.getChildByName("spineParrot");
          parrot.active = 0 == winIdx;
          this.playSpine(parrot, null, "animation1", true);
          var bubble = roralhNode.getChildByName("spineBubble");
          bubble.active = 0 != winIdx;
          0 != winIdx && this.playSpine(bubble, null, "animation" + BUBBLE_ANIMATION[winIdx - 1] + "_1", true);
          winIdx > 0 && (this._winList[winIdx].active = true);
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
              _this._chooseCount = gameInfo.useCnt || 0;
              _this.setLabel(_this._lblStartPrize, Global.FormatNumToComma(gameInfo.startPrize));
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      _this.restoreByData();
                      if (!(0 == _this._chooseCount)) {
                        _context.next = 4;
                        break;
                      }
                      _context.next = 4;
                      return _this.showStart();

                     case 4:
                      _context.next = 6;
                      return _this.showMain();

                     case 6:
                      _context.next = 8;
                      return _this.showResult();

                     case 8:
                      _context.next = 10;
                      return _this.exitGame();

                     case 10:
                      success();

                     case 11:
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
                      return _this2.playFullScreen(1);

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
      showStart: function showStart() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var func;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      _this3._subGameNode.active = true;
                      _this3._node_start.active = true;
                      _this3._node_start.scale = 0;
                      _context5.next = 5;
                      return _this3.playActions(_this3._node_start, [ cc.scaleTo(.35, 1.5), cc.scaleTo(.15, 1.3) ]);

                     case 5:
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        _this3.playActions(_this3._node_start, [ cc.scaleTo(.15, 1.5), cc.scaleTo(.35, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(_this3._node_start.getChildByName("btnStart"), func);
                      Global.btnClickEvent(_this3._node_start.getChildByName("btnStart"), function() {
                        _this3._node_start.getChildByName("btnStart").stopAllActions();
                        func();
                      }, _this3);

                     case 8:
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
      showMain: function showMain() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
                  var gameInfo;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      gameInfo = cc.vv.gameData.mapInfo.gameInfo;
                      if (!(gameInfo.mult <= 0)) {
                        _context7.next = 4;
                        break;
                      }
                      _context7.next = 4;
                      return _this4.playFullScreen(.5);

                     case 4:
                      _this4._node_start.active = false;
                      _this4._node_main.active = true;
                      _context7.next = 8;
                      return _this4.awaitTime(.2);

                     case 8:
                      _context7.next = 10;
                      return _this4.awaitOrOperate();

                     case 10:
                      _this4.setPlayPickTipsAction(false);
                      _context7.next = 13;
                      return _this4.awaitTime(1);

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x4) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      setPlayPickTipsAction: function setPlayPickTipsAction(isPlay) {
        if (isPlay) {
          this._sprPickTips.scale = 1;
          this._sprPickTips.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .9), cc.scaleTo(.2, 1), cc.delayTime(2))));
        } else {
          this._sprPickTips.stopAllActions();
          this._sprPickTips.scale = 1;
        }
        var gameInfo = cc.vv.gameData.mapInfo.gameInfo;
        for (var i in gameInfo.coral) {
          var roralIdx = parseInt(i) + 1;
          var winIdx = gameInfo.coral[i];
          var roralhNode = this._roralsFishList[roralIdx];
          roralhNode.getComponent(cc.Button).enabled = isPlay && 0 == winIdx;
        }
      },
      awaitOrOperate: function awaitOrOperate() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
                  var _loop, i;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      _this5.setPlayPickTipsAction(true);
                      _loop = function _loop(i) {
                        var item = _this5._roralsFishList[i];
                        item.off("click");
                        Global.btnClickEvent(item, _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          var resp, gameInfo, winIdx, parrot, bubble;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                              _this5.setPlayPickTipsAction(false);
                              _context9.next = 4;
                              return cc.vv.gameData.reqSubGame(Global.QUEENOFSEA_MAP_RTYPE.OPERATE_SUBGAME, i);

                             case 4:
                              resp = _context9.sent;
                              if (!(200 === resp.code)) {
                                _context9.next = 34;
                                break;
                              }
                              gameInfo = resp.data.mapInfo.gameInfo;
                              winIdx = gameInfo.coral[i - 1];
                              item.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.select3);
                              parrot = item.getChildByName("spineParrot");
                              parrot.active = true;
                              _this5.playSpine(parrot, function() {
                                parrot.active = false;
                              }, "animation2", false);
                              _context9.next = 15;
                              return _this5.awaitTime(.3);

                             case 15:
                              bubble = item.getChildByName("spineBubble");
                              bubble.active = true;
                              _this5.playSpine(bubble, function() {
                                _this5.playSpine(bubble, null, "animation" + BUBBLE_ANIMATION[winIdx - 1] + "_1", true);
                              }, "animation" + BUBBLE_ANIMATION[winIdx - 1], false);
                              _context9.next = 20;
                              return _this5.awaitTime(.5);

                             case 20:
                              _this5._winList[winIdx].active = true;
                              _context9.next = 23;
                              return _this5.awaitTime(.5);

                             case 23:
                              if (!(gameInfo.winCoin > 0)) {
                                _context9.next = 31;
                                break;
                              }
                              Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.dead);
                              cc.find("nodeDetail/mult/spineMult_" + gameInfo.mult, _this5._node_main).active = true;
                              _context9.next = 28;
                              return _this5.awaitTime(2);

                             case 28:
                              success();
                              _context9.next = 32;
                              break;

                             case 31:
                              _this5.setPlayPickTipsAction(true);

                             case 32:
                              _context9.next = 36;
                              break;

                             case 34:
                              AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                              failed();

                             case 36:
                             case "end":
                              return _context9.stop();
                            }
                          }, _callee9);
                        })));
                      };
                      for (i = 1; i <= 5; i++) _loop(i);

                     case 3:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x5, _x6) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      showResult: function showResult() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success) {
                  var ui, baseCoin, mult, func;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      _this6._node_win.active = true;
                      ui = _this6._node_win.getChildByName("ui");
                      ui.scale = 0;
                      baseCoin = Global.FormatCommaNumToNum(_this6._lblStartPrize.getComponent(cc.Label).string);
                      mult = cc.vv.gameData.mapInfo.gameInfo.mult;
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = false;
                      _this6.setLabel(ui.getChildByName("lblWinCoinShow"), mult + " X " + _this6.convertNumToShortStr(baseCoin) + " = " + _this6.convertNumToShortStr(mult * baseCoin));
                      _this6.rollToNumOfLabel(ui.getChildByName("lblWinCoin"), mult * baseCoin);
                      _context12.next = 10;
                      return _this6.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 10:
                      cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(mult * baseCoin);
                      ui.getChildByName("btnCollect").getComponent(cc.Button).enabled = true;
                      func = function func() {
                        Global.SlotsSoundMgr.playEffect(SlotsFacade.soundMgr.common_click);
                        ui.getChildByName("lblWinCoin").stopAllActions();
                        _this6.setLabel(ui.getChildByName("lblWinCoin"), _this6.convertNumToShortStr(mult * baseCoin));
                        _this6.playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);
                        success();
                      };
                      cc.vv.gameData.checkAutoPlay(ui.getChildByName("btnCollect"), func);
                      Global.btnClickEvent(ui.getChildByName("btnCollect"), function() {
                        ui.getChildByName("btnCollect").stopAllActions();
                        func();
                      }, _this6);

                     case 15:
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
    TheMermaid_subGameBase: "TheMermaid_subGameBase"
  } ]
}, {}, [ "TheMermaid_Cfg", "TheMermaid_GameData", "TheMermaid_Logic", "TheMermaid_Map", "TheMermaid_MapCollectProgress", "TheMermaid_Pop", "TheMermaid_PrizePool", "TheMermaid_Slots", "TheMermaid_Sound", "TheMermaid_StarFish", "TheMermaid_Symbol", "TheMermaid_subGameBase", "TheMermaid_subGameBeke", "TheMermaid_subGameCollectWheel", "TheMermaid_subGameDice", "TheMermaid_subGameGoldShip", "TheMermaid_subGameMultWheel", "TheMermaid_subGameRenyu", "TheMermaid_subGameYellowFish" ]);