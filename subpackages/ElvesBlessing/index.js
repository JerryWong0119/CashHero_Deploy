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
  ElvesBlessing_ButtonSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec825UYhEFNbZa/NA3tpx1m", "ElvesBlessing_ButtonSafe");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        safeTime: {
          default: .5,
          tooltip: "\u6309\u94ae\u4fdd\u62a4\u65f6\u95f4\uff0c\u6307\u5b9a\u95f4\u9694\u5185\u53ea\u80fd\u70b9\u51fb\u4e00\u6b21."
        }
      },
      onLoad: function onLoad() {
        var button = this.getComponent(cc.Button);
        if (!button) return;
        this.clickEvents = button.clickEvents;
        Global.btnClickEvent(this.node, function(buttton) {
          buttton.interactable = false;
          var slotsSrc = cc.vv.gameData.GetSlotsScript();
          slotsSrc && slotsSrc.scheduleOnce(function() {
            buttton.interactable = true;
          }, this.safeTime);
        }, this);
      }
    });
    cc._RF.pop();
  }, {} ],
  ElvesBlessing_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b76dR8kFVHmJx56rFH/TKL", "ElvesBlessing_Cfg");
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
        node: "s61",
        win_node: "",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 101, {
        node: "s62",
        win_node: "",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s3",
        win_node: "locakwild",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 3, {
        node: "s41",
        win_node: "",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 4, {
        node: "s3",
        win_node: ""
      }), _defineProperty(_symbol, 5, {
        node: "s31",
        win_node: ""
      }), _defineProperty(_symbol, 501, {
        node: "s32",
        win_node: ""
      }), _defineProperty(_symbol, 6, {
        node: "s41",
        win_node: ""
      }), _defineProperty(_symbol, 601, {
        node: "s42",
        win_node: ""
      }), _defineProperty(_symbol, 7, {
        node: "s51",
        win_node: ""
      }), _defineProperty(_symbol, 701, {
        node: "s52",
        win_node: ""
      }), _defineProperty(_symbol, 8, {
        node: "s21",
        win_node: ""
      }), _defineProperty(_symbol, 801, {
        node: "s22",
        win_node: ""
      }), _defineProperty(_symbol, 9, {
        node: "s3",
        win_node: ""
      }), _defineProperty(_symbol, 10, {
        node: "s4",
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s5",
        win_node: ""
      }), _defineProperty(_symbol, 12, {
        node: "s6",
        win_node: ""
      }), _defineProperty(_symbol, 13, {
        node: "s7",
        win_node: ""
      }), _defineProperty(_symbol, 14, {
        node: "s8",
        win_node: ""
      }), _defineProperty(_symbol, 15, {
        node: "s9",
        win_node: ""
      }), _defineProperty(_symbol, 16, {
        node: "s10",
        win_node: ""
      }), _defineProperty(_symbol, 17, {
        node: "s11",
        win_node: ""
      }), _defineProperty(_symbol, 18, {
        node: "s12",
        win_node: ""
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "ElvesBlessing_Slots",
        Reels: "ElvesBlessing_Reel",
        Symbols: "ElvesBlessing_Symbol"
      },
      col: 6,
      row: 6,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 102,
        height: 95
      },
      randomSymbols: [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      autoModelDelay: 1,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      normalBgm: "base_bgm",
      AddAntiTime: 3,
      reelStateInfo: [ {
        id: [ 5, 501, 6, 601, 7, 701 ],
        mini: 5,
        counts: [ 3, 3, 3, 3, 3 ],
        antiNode: "node_anti",
        path: "games/ElvesBlessing/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2500
      } ],
      commEffect: {
        path: "games/ElvesBlessing/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      helpItems: [ "games/ElvesBlessing/prefab/ElvesBlessing_Help_item1", "games/ElvesBlessing/prefab/ElvesBlessing_Help_item2", "games/ElvesBlessing/prefab/ElvesBlessing_Help_item3", "games/ElvesBlessing/prefab/ElvesBlessing_Help_item4" ],
      sysFloatOffsetPos: cc.v2(0, 120)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  ElvesBlessing_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "135c0ktxuREfZqy/1DrSfR/", "ElvesBlessing_FreeGame");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {}
    });
    cc._RF.pop();
  }, {} ],
  ElvesBlessing_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f49c6AICQVOkY5HDSycqgGP", "ElvesBlessing_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._selectData = deskInfo.select;
        this._randomGame = deskInfo.randomGame;
        this._freeGameData = deskInfo.freeGameData;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._selectData = msg.select;
          this._randomGame = msg.randomGame;
          this._freeGameData = msg.freeGameData;
          this._super(msg);
        }
      },
      isOpenWheelExtraSpins: function isOpenWheelExtraSpins() {
        if (this._randomGame) return this.GetBetIdx() >= this._randomGame.min;
        return false;
      },
      getSelectData: function getSelectData() {
        return this._selectData;
      },
      getRandomData: function getRandomData() {
        return this._randomGame;
      },
      getFreeGameData: function getFreeGameData() {
        return this._freeGameData;
      },
      setUIMgrScript: function setUIMgrScript(uimgr) {
        this._uiMgr = uimgr;
      },
      getUIMgr: function getUIMgr() {
        return this._uiMgr;
      },
      setFreeGameScript: function setFreeGameScript(freescript) {
        this._freeGameScript = freescript;
      },
      getFreeGame: function getFreeGame() {
        return this._freeGameScript;
      },
      SetWheelData: function SetWheelData(wheeldata) {
        this._wheelData = wheeldata;
      },
      getWheelData: function getWheelData() {
        return this._wheelData;
      },
      clearWheelData: function clearWheelData() {
        this._wheelData = null;
      },
      isTriggerNormalFree: function isTriggerNormalFree() {
        return this._gameInfo.allFreeCnt > 0 && this._gameInfo.allFreeCnt == this._gameInfo.freeCnt;
      },
      isNormalFreeOver: function isNormalFreeOver() {
        if (this._gameInfo.allFreeCnt > 0 && 0 == this._gameInfo.freeCnt) return true;
        return false;
      },
      setIsFreeGame: function setIsFreeGame(val) {
        this._isFreeGame = val;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      playSpine: function playSpine(node, aniName, loop, endCall) {
        if (node) {
          node.active = true;
          var ske = node.getComponent(sp.Skeleton);
          if (ske) {
            ske.setAnimation(0, aniName, loop);
            ske.setCompleteListener(function() {
              endCall && endCall();
            });
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  ElvesBlessing_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9794c3b8h1EPIxVW7yFjQ1c", "ElvesBlessing_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        var script_freegame = this.node.addComponent("ElvesBlessing_FreeGame");
        cc.vv.gameData.setFreeGameScript(script_freegame);
        var uinode = cc.find("safe_node/gameUI", this.node);
        var script_uimgr = uinode.getComponent("ElvesBlessing_UIMgr");
        cc.vv.gameData.setUIMgrScript(script_uimgr);
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  ElvesBlessing_Moneybag: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "813daXPwjhM94fPyqs2uyF9", "ElvesBlessing_Moneybag");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _playUnlockState: 0
      },
      onLoad: function onLoad() {
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onChangeBetValue, this);
        var randomdata = cc.vv.gameData.getRandomData();
        this.UNLOCKVAL = randomdata.min;
        this.updateMoneyBag();
        Global.btnClickEvent(cc.find("btn", this.node), this.clickLockBtn, this);
      },
      start: function start() {},
      setSymbolSpframe: function setSymbolSpframe() {},
      updateMoneyBag: function updateMoneyBag() {
        var betIdx = cc.vv.gameData.GetBetIdx();
        if (betIdx >= this.UNLOCKVAL) {
          if (1 != this._playUnlockState) {
            this._playUnlockState = 1;
            Global.SlotsSoundMgr.playEffect("unlock");
            this.playUnlockAni("animation2", function() {});
          }
        } else if (2 != this._playUnlockState) {
          this._playUnlockState = 2;
          Global.SlotsSoundMgr.playEffect("lock");
          this.playUnlockAni("animation1", function() {});
        }
      },
      setMoneybagLock: function setMoneybagLock(lock) {
        if (lock) {
          this._playUnlockState = 2;
          this.playUnlockAni("animation1", function() {});
        } else {
          this._playUnlockState = 1;
          this.playUnlockAni("animation2", function() {});
        }
      },
      playUnlockAni: function playUnlockAni(aniname, callback) {
        for (var i = 1; i < 7; i++) {
          var suonode = cc.find(cc.js.formatStr("bag%s/suo", i), this.node);
          cc.vv.gameData.playSpine(suonode, aniname, false, callback);
        }
      },
      onChangeBetValue: function onChangeBetValue(data) {
        this.updateMoneyBag();
      },
      clickLockBtn: function clickLockBtn() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.isFreeGame()) return;
        var betIdx = cc.vv.gameData.GetBetIdx();
        var betList = cc.vv.gameData.GetBetMults();
        if (this.UNLOCKVAL > betList.length) return;
        betIdx < this.UNLOCKVAL && cc.vv.gameData.GetBottomScript().SetBetIdx(this.UNLOCKVAL);
      }
    });
    cc._RF.pop();
  }, {} ],
  ElvesBlessing_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4cafclNXBRI9JFoB9vvF4ND", "ElvesBlessing_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
        this._isAntiReel = false;
      },
      resetReelPos: function resetReelPos() {
        this._bStoping = true;
        this._curY = 0;
        this._holderNode.y = this._holderOrigPosY;
      },
      loadLockWild: function loadLockWild() {
        node.parent = this._holderNode;
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        this._super(bShow, name);
        if (!this._isAntiReel && !bShow) return;
        if (this._reelIdx < 4 && !bShow) return;
        this._isAntiReel = bShow;
        cc.vv.gameData.GetSlotsScript().showSpeedUpMask(bShow);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  ElvesBlessing_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7ed26QoARIXbXF3+/Pps4x", "ElvesBlessing_Slots");
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
      properties: {},
      StartMove: function StartMove() {
        this._super();
        this.resetBag(4);
        this.clearRandomWild();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        if (this.CheckTriggerSubGame()) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          cc.find("Canvas/safe_node/subgamewheel").getComponent("ElvesBlessing_Wheel").enterWheelGame();
          return;
        }
        this.reconnectFreeGame();
      },
      reconnectFreeGame: function reconnectFreeGame() {
        var _this = this;
        var rest = cc.vv.gameData.GetFreeTime();
        if (rest) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          var freegamedata = cc.vv.gameData.getFreeGameData();
          freegamedata.unLockRandomGame && this.lockMoneyBag(false);
          this.loadLockWild();
          this.ShowGameview(true);
          cc.vv.gameData.getUIMgr().changeGameBackimage(true);
          this.scheduleOnce(function() {
            _this.CanDoNextRound();
          }, .5);
        } else this.ShowGameview(false);
      },
      StopMove: function StopMove() {
        this._super();
        this.showSpeedUpMask(false);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bHit;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              bHit = _this2.CheckSpecialReward();
              bHit && _this2._bottomScript.ShowBtnsByState("moveing_1");
              _this2.ShowWinTrace();
              _this2.playScatterAnimation(true);
              _context.next = 6;
              return _this2.playBottomWin();

             case 6:
              if (!_this2.CheckTriggerSubGame()) {
                _context.next = 11;
                break;
              }
              _context.next = 9;
              return _this2.awaitTime(2);

             case 9:
              _context.next = 11;
              return _this2.triggerWheelGame();

             case 11:
              if (!cc.vv.gameData.isNormalFreeOver()) {
                _context.next = 18;
                break;
              }
              _context.next = 14;
              return _this2.awaitTime(.5);

             case 14:
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 17;
              return cc.vv.gameData.getUIMgr().showFreeOverUI();

             case 17:
              _this2.clearRandomWild();

             case 18:
              if (!cc.vv.gameData.isTriggerNormalFree()) {
                _context.next = 25;
                break;
              }
              _this2.backupCardsState();
              _context.next = 22;
              return cc.vv.gameData.getUIMgr().showFreeStartUI();

             case 22:
              _context.next = 24;
              return _this2.loadLockWild();

             case 24:
              return _context.abrupt("return");

             case 25:
              _this2.CanDoNextRound();

             case 26:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      showSpeedUpMask: function showSpeedUpMask(isshow) {
        for (var i = 0; i < 6; i++) if (this._reels[i]) {
          var sys = this._reels[i]._symbols;
          for (var j = 0; j < 7; j++) sys[j].setSymbolMask(isshow);
        }
      },
      CheckTriggerSubGame: function CheckTriggerSubGame() {
        var selectdata = cc.vv.gameData.getSelectData();
        if (selectdata) return selectdata.state;
        return false;
      },
      backupCardsState: function backupCardsState() {
        this.Backup();
        var gameinfo = cc.vv.gameData.getGameInfo();
        this._triggerFreeIdxs = gameinfo.freeResult.freeInfo.idxs;
      },
      resumeCardsState: function resumeCardsState() {
        this.Resume();
        this.resetBag(3);
        this.clearLockWild();
        this.clearRandomWild();
        if (this._triggerFreeIdxs) for (var idx = 1; idx < 37; idx++) if (this._triggerFreeIdxs.includes(idx)) {
          var sys = this.GetSymbolByIdx(idx);
          sys.playScatterAnimation(true);
        }
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this3 = this;
        if (!this._cfg.reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var randomdata = cc.vv.gameData.getRandomData();
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
            var isContinuous = true;
            var needAnt = true;
            for (var _i = 0; _i < reelResults.length; _i++) {
              var item = _this3._reels[_i];
              var reelRes = reelResults[_i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i] > 0 && isContinuous && 0 == randomdata.cols.length && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              (0 == reelCountOfID && !stateInfo.isAnt || randomdata.cols.length > 0) && (needAnt = false);
              if (needAnt) {
                haveCount += Math.ceil(reelCountOfID / 2);
                countsConfig.shift();
                var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                  return x + y;
                }) : 0) + haveCount;
                reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous && (stateInfo.isStop = true);
                stateInfo.continuous && stateInfo.counts[_i] > 0 && 0 == reelCountOfID && (isContinuous = false);
              }
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
      onMsgSpine: function onMsgSpine(msg) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cards;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this4._gameInfo = msg;
              _this4.stopTimeHandle();
              _this4.resetBag(3);
              cc.vv.gameData.clearWheelData();
              _this4.wildsHandle();
              cards = msg.resultCards;
              _this4.setMulitSymbol(cards);
              _this4.SetSlotsResult(cards);
              _this4.SetReelStateInfo(cards);

             case 9:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      stopTimeHandle: function stopTimeHandle() {
        var stoptime = .6;
        var randomdata = cc.vv.gameData.getRandomData();
        var freegamedata = cc.vv.gameData.getFreeGameData();
        randomdata && randomdata.cols.length > 0 && (stoptime = 2.2 * randomdata.cols.length + 2);
        freegamedata && freegamedata.randomWildIdxs && freegamedata.randomWildIdxs.length > 0 && (stoptime += 8);
        this.SetStopTime(stoptime);
      },
      playScatterAnimation: function playScatterAnimation(isplay) {
        if (cc.vv.gameData.isTriggerNormalFree()) {
          Global.SlotsSoundMgr.playEffect("bell");
          var gameinfo = cc.vv.gameData.getGameInfo();
          var triggeridxs = gameinfo.freeResult.freeInfo.idxs;
          for (var idx = 1; idx < 37; idx++) if (triggeridxs.includes(idx)) {
            var sys = this.GetSymbolByIdx(idx);
            sys.playScatterAnimation(isplay);
          }
        }
      },
      wildsHandle: function wildsHandle() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _context3.next = 2;
              return _this5.playRandomWilds();

             case 2:
              _context3.next = 4;
              return _this5.randomWildDiffCol();

             case 4:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      triggerWheelGame: function triggerWheelGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this6.awaitTime(.5);

             case 2:
              _context4.next = 4;
              return _this6.startShowWheel();

             case 4:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      startShowWheel: function startShowWheel() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function(success) {
                var wheelnode = cc.find("Canvas/safe_node/subgamewheel");
                wheelnode.getComponent("ElvesBlessing_Wheel").enterWheelGame(success);
              }));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      playRandomWilds: function playRandomWilds() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function(success) {
                var randomdata = cc.vv.gameData.getRandomData();
                if (randomdata.cols.length > 0) {
                  var index = 0;
                  var self = _this7;
                  self._bagWildPos = [];
                  var loadreelwild = function loadreelwild() {
                    if (index >= randomdata.cols.length) {
                      cc.log("###\u64ad\u653e\u540c\u5217\u968f\u673awild\u7ed3\u675f");
                      success();
                    } else {
                      var col = randomdata.cols[index];
                      var character = cc.find("Canvas/safe_node/character");
                      var bagnode = cc.find("moneybag/bag" + col, self.node);
                      self._bagWildPos.push(col);
                      cc.vv.gameData.playSpine(character, "skill", false, function() {
                        cc.vv.gameData.playSpine(character, "idle", true);
                      });
                      Global.SlotsSoundMgr.playEffect("fly");
                      Global.SlotsSoundMgr.playEffect("wildreel");
                      self.scheduleOnce(function() {
                        cc.vv.gameData.playSpine(bagnode, "animation1", false, function() {
                          index++;
                          loadreelwild();
                        });
                      }, 1);
                    }
                  };
                  loadreelwild();
                } else success();
              }));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      resetBag: function resetBag(index) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (_this8._bagWildPos) {
                _this8._bagWildPos.forEach(function(col) {
                  var bagnode = cc.find("moneybag/bag" + col, _this8.node);
                  cc.vv.gameData.playSpine(bagnode, "animation" + index, false, function() {});
                });
                _this8._bagWildPos = [];
              }

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      randomWildDiffCol: function randomWildDiffCol() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var freegamedata, character, moneybagnode, randomwild, promiseArr;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _this9._randomColWild = [];
              freegamedata = cc.vv.gameData.getFreeGameData();
              if (!(freegamedata && freegamedata.randomWildIdxs)) {
                _context8.next = 17;
                break;
              }
              if (!(freegamedata.randomWildIdxs.length > 0)) {
                _context8.next = 17;
                break;
              }
              AppLog.log("####\u663e\u793a\u968f\u673awilds");
              character = cc.find("Canvas/safe_node/character");
              moneybagnode = cc.find("randowwildmoneybag", _this9.node);
              cc.vv.gameData.playSpine(moneybagnode, "animation8_1", false);
              _context8.next = 10;
              return cc.vv.gameData.awaitTime(2);

             case 10:
              randomwild = cc.find("randomwild", _this9.node);
              Global.SlotsSoundMgr.playEffect("wildreel");
              cc.vv.gameData.playSpine(character, "skill", false, function() {
                cc.vv.gameData.playSpine(character, "idle", true);
              });
              promiseArr = [];
              _this9.scheduleOnce(function() {
                var randomwildnode = cc.find("randomwildnode", _this9.node);
                var wordPos = randomwildnode.convertToWorldSpaceAR(cc.v2(0));
                var initpos = _this9._topAniNode.convertToNodeSpaceAR(wordPos);
                freegamedata.randomWildIdxs.forEach(function(idx) {
                  var wildnode = cc.instantiate(randomwild);
                  wildnode.parent = _this9._topAniNode;
                  wildnode.position = initpos;
                  wildnode.active = true;
                  _this9._randomColWild.push(wildnode);
                  var col = (idx - 1) % 6;
                  var row = 6 - Math.floor((idx - 1) / 6) - 1;
                  var tarPos = _this9.getWildPos(col, row);
                  promiseArr.push(new Promise(function(res) {
                    cc.tween(wildnode).to(.5, {
                      position: tarPos
                    }).call(function() {
                      cc.vv.gameData.playSpine(wildnode, "animation2", false, null);
                      res();
                    }).start();
                  }));
                });
              }, 3);
              _context8.next = 17;
              return Promise.all(promiseArr);

             case 17:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      loadLockWild: function loadLockWild() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function(success) {
                var freegamedata = cc.vv.gameData.getFreeGameData();
                if (freegamedata && freegamedata.stickWild3Idxs) {
                  var lockwildnode = cc.find("lockwild", _this10.node);
                  var topainmask = cc.find("top_ani_mask/top_ani", _this10.node);
                  var stickwild3 = freegamedata.stickWild3Idxs;
                  _this10.setLockWild(stickwild3);
                  stickwild3.forEach(function(idx) {
                    if (idx > 0) {
                      var symbol = _this10.GetSymbolByIdx(idx);
                      var col = (idx - 1) % _this10._col;
                      var row = _this10._row - Math.floor((idx - 1) / _this10._col) - 1;
                      var showNode = cc.find(cc.js.formatStr("topmask_symbol_%s_%s", row, col), topainmask);
                      if (showNode) ; else {
                        var wordPos = symbol.node.convertToWorldSpaceAR(cc.v2(0));
                        showNode = cc.instantiate(lockwildnode);
                        showNode.parent = topainmask;
                        showNode.name = cc.js.formatStr("topmask_symbol_%s_%s", row, col);
                        showNode.position = topainmask.convertToNodeSpaceAR(wordPos);
                        showNode.active = true;
                        var spbottom = cc.find("spbottom", showNode);
                        cc.vv.gameData.playSpine(spbottom, "animation2", false, function() {
                          cc.vv.gameData.playSpine(spbottom, "animation", true);
                        });
                      }
                    }
                  });
                }
                success();
              }));

             case 1:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      clearLockWild: function clearLockWild() {
        var topainmask = cc.find("top_ani_mask/top_ani", this.node);
        topainmask.destroyAllChildren();
      },
      clearRandomWild: function clearRandomWild() {
        if (this._randomColWild && this._randomColWild.length > 0) {
          this._randomColWild.forEach(function(wildnode) {
            wildnode.destroy();
          });
          this._randomColWild = [];
        }
      },
      lockMoneyBag: function lockMoneyBag(lock) {
        var moneybagnode = cc.find("moneybag", this.node);
        moneybagnode.getComponent("ElvesBlessing_Moneybag").setMoneybagLock(lock);
      },
      playBottomWin: function playBottomWin() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function(success) {
                var nWin = cc.vv.gameData.GetGameWin();
                var nTotal = nWin;
                var updateAllCoin = true;
                var wheeldata = cc.vv.gameData.getWheelData();
                if (wheeldata) {
                  nWin = wheeldata.wincoin;
                  nTotal = wheeldata.wincoin;
                  cc.vv.gameData.AddCoin(nTotal);
                } else if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                  nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                  updateAllCoin = false;
                }
                _this11.ShowBottomWin(nWin, nTotal, updateAllCoin, function() {
                  success();
                });
              }));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      setLockWild: function setLockWild(poslist) {
        for (var i = 0; i < poslist.length; i++) poslist.includes(poslist[i] + 6) && (poslist.includes(poslist[i] + 12) || (poslist[i] = 0));
      },
      setMulitSymbol: function setMulitSymbol(cards) {
        var doubleList = [ 1, 5, 6, 7, 8 ];
        var hasChangeList = [];
        for (var i = cards.length - 1; i >= 0; i--) if (!hasChangeList[i] && doubleList.includes(cards[i])) if (i >= cards.length - this._col) {
          var allCnt = 1;
          for (var c = 1; c < this._row; c++) {
            if (!cards[i - this._col * c] || cards[i - this._col * c] != cards[i]) break;
            allCnt++;
          }
          if (allCnt % 2 == 0) {
            cards[i] = 100 * cards[i] + 1;
            hasChangeList[i - this._col] = 1;
          }
        } else {
          cards[i] = 100 * cards[i] + 1;
          i >= this._col && (hasChangeList[i - this._col] = 1);
        }
      },
      getWildPos: function getWildPos(col, row) {
        return cc.v2(this.getXpos(col), 40 + 95 * row);
      },
      getXpos: function getXpos(col) {
        switch (col) {
         case 0:
          return 50;

         case 1:
          return 160;

         case 2:
          return 275;

         case 3:
          return 390;

         case 4:
          return 500;

         case 5:
          return 610;
        }
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.vv.gameData.setIsFreeGame(bFree);
      },
      awaitTime: function awaitTime(time) {
        var _this12 = this;
        return new Promise(function(success) {
          _this12.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  ElvesBlessing_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87b25F2M4lHRK1fyAbDguan", "ElvesBlessing_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      playWinAnimation: function playWinAnimation() {},
      StartMove: function StartMove() {
        this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
      },
      playScatterAnimation: function playScatterAnimation(isplay) {
        var aninodename = "";
        5 != this._id && 6 != this._id && 7 != this._id || 0 != this._symbolIdx || (aninodename = "leprechaun1");
        501 != this._id && 601 != this._id && 701 != this._id || (aninodename = "leprechaun2");
        if ("" == aninodename) return;
        this._showNode && (this._showNode.active = false);
        this._showNode = cc.find(aninodename, this.node);
        if (isplay) {
          this._showNode.active = true;
          var aniname = this.getAnimationName();
          this._showNode.getComponent(sp.Skeleton).setAnimation(0, aniname, true);
        } else this._showNode.active = false;
      },
      getAnimationName: function getAnimationName() {
        switch (this._id) {
         case 5:
         case 501:
          return "animation3";

         case 6:
         case 601:
          return "animation2";

         case 7:
         case 701:
          return "animation1";
        }
        return "animation1";
      },
      setSymbolMask: function setSymbolMask(ismask) {
        var children = this.node.children;
        for (var i = 0; i < children.length; i++) {
          var name = children[i].name;
          "leprechaun1" != name && "leprechaun2" != name && "s31" != name && "s32" != name && "s41" != name && "s42" != name && "s51" != name && "s52" != name && "null" != name && (children[i].color = ismask ? cc.color(127, 127, 127) : cc.color(255, 255, 255));
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  ElvesBlessing_UIMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "355c6qyuw9L14HWRjGub6V4", "ElvesBlessing_UIMgr");
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
        bgs: [ cc.SpriteFrame ]
      },
      onLoad: function onLoad() {
        this._pipeUI = cc.find("wheel_pipeui", this.node);
        this._randomWildsUI = cc.find("wheel_randomwildsui", this.node);
        this._caitlynUI = cc.find("wheel_caitlynui", this.node);
        this._horseShoeUI = cc.find("wheel_horseshoeui", this.node);
        this._leprechaunUI = cc.find("wheel_leprechaunui", this.node);
        this._moreshpinsUI = cc.find("wheel_morespinsui", this.node);
        this._moneyactiveUI = cc.find("wheel_moneyactive", this.node);
        this._collectFreeUI = cc.find("free_collectui", this.node);
        this._startFreeUI = cc.find("free_startui", this.node);
        this._transitionNode = cc.find("Canvas/safe_node/screenspine/transition");
        this._btnstart = cc.find("mask", this._startFreeUI);
        Global.btnClickEvent(this._btnstart, this.onFreeGameStart, this);
        this._btncollect = cc.find("node/btn_collect", this._collectFreeUI);
        Global.btnClickEvent(this._btncollect, this.onFreeGameCollect, this);
      },
      showWheelResultUI: function showWheelResultUI(wheeldata) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var showextra;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(1 == wheeldata.idx)) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return _this.showWheelUI(_this._leprechaunUI, wheeldata.result);

             case 3:
              _context.next = 39;
              break;

             case 5:
              if (!(2 == wheeldata.idx || 5 == wheeldata.idx || 8 == wheeldata.idx || 11 == wheeldata.idx)) {
                _context.next = 10;
                break;
              }
              _context.next = 8;
              return _this.showWheelUI(_this._randomWildsUI, wheeldata.result);

             case 8:
              _context.next = 39;
              break;

             case 10:
              if (!(3 == wheeldata.idx || 9 == wheeldata.idx)) {
                _context.next = 21;
                break;
              }
              showextra = cc.vv.gameData.isOpenWheelExtraSpins();
              if (!showextra) {
                _context.next = 17;
                break;
              }
              _context.next = 15;
              return _this.addExtraSpins(wheeldata.result.extraSpins);

             case 15:
              _context.next = 19;
              break;

             case 17:
              _context.next = 19;
              return _this.showWheelUI(_this._moneyactiveUI, wheeldata.result);

             case 19:
              _context.next = 39;
              break;

             case 21:
              if (!(6 == wheeldata.idx || 12 == wheeldata.idx)) {
                _context.next = 26;
                break;
              }
              _context.next = 24;
              return _this.addExtraSpins(wheeldata.result.extraSpins);

             case 24:
              _context.next = 39;
              break;

             case 26:
              if (!(4 == wheeldata.idx)) {
                _context.next = 31;
                break;
              }
              _context.next = 29;
              return _this.showWheelUI(_this._horseShoeUI, wheeldata.result);

             case 29:
              _context.next = 39;
              break;

             case 31:
              if (!(7 == wheeldata.idx)) {
                _context.next = 36;
                break;
              }
              _context.next = 34;
              return _this.showWheelUI(_this._caitlynUI, wheeldata.result);

             case 34:
              _context.next = 39;
              break;

             case 36:
              if (!(10 == wheeldata.idx)) {
                _context.next = 39;
                break;
              }
              _context.next = 39;
              return _this.showWheelUI(_this._pipeUI, wheeldata.result);

             case 39:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      addExtraSpins: function addExtraSpins(extraspins) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var lbltimes;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              lbltimes = cc.find("node/spintimes", _this2._moreshpinsUI);
              lbltimes.getComponent(cc.Label).string = extraspins;
              _context2.next = 4;
              return _this2.showWheelUI(_this2._moreshpinsUI);

             case 4:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showWheelUI: function showWheelUI(uinode, wheelresult) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect("normal_dialog_show2");
                uinode.active = true;
                var mainnode = cc.find("node", uinode);
                mainnode.scale = 0;
                cc.tween(mainnode).to(.3, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).delay(2).call(function() {
                  Global.SlotsSoundMgr.playEffect("normal_dialog_close");
                  wheelresult && wheelresult.respin ? cc.vv.gameData.GetSlotsScript().ShowBottomWin(wheelresult.winCoin, wheelresult.winCoin, false, function() {
                    cc.tween(mainnode).to(.3, {
                      scale: 0
                    }, {
                      easing: "backIn"
                    }).call(function() {
                      uinode.active = false;
                      success();
                    }).start();
                  }) : cc.tween(mainnode).to(.3, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    uinode.active = false;
                    success();
                  }).start();
                }).start();
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showFreeStartUI: function showFreeStartUI() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
                  var mainnode, btnstart, repeattime, totalfree, wheeldata;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playEffect("normal_dialog_show1");
                      _this3._nextStep = success;
                      _this3._startFreeUI.active = true;
                      mainnode = cc.find("node", _this3._startFreeUI);
                      btnstart = cc.find("btn_start", mainnode);
                      mainnode.scale = 0;
                      cc.tween(mainnode).to(.3, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      repeattime = cc.sequence(cc.repeat(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1)), 2), cc.delayTime(1));
                      btnstart.runAction(cc.repeatForever(repeattime));
                      totalfree = cc.vv.gameData.GetTotalFree();
                      wheeldata = cc.vv.gameData.getWheelData();
                      wheeldata && (totalfree += wheeldata.result.extraSpins);
                      cc.find("node/lbl_awardtimes", _this3._startFreeUI).getComponent(cc.Label).string = totalfree;
                      _this3._btnstart.getComponent(cc.Button).interactable = true;
                      _context4.next = 17;
                      return cc.vv.gameData.awaitTime(.5);

                     case 17:
                      cc.vv.gameData.checkAutoPlay(_this3._startFreeUI, _this3.onFreeGameStart.bind(_this3));

                     case 18:
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
      showFreeOverUI: function showFreeOverUI() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var mainnode, lblreward, nWin;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playEffect("normal_dialog_show3");
                      _this4._nextStep = success;
                      _this4._collectFreeUI.active = true;
                      mainnode = cc.find("node", _this4._collectFreeUI);
                      mainnode.scale = 0;
                      cc.tween(mainnode).to(.3, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      lblreward = cc.find("node/rewardcoins", _this4._collectFreeUI);
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      Global.doRoallNumEff(lblreward, 0, nWin, 1, null, null, 0, true);
                      _this4._btncollect.getComponent(cc.Button).interactable = true;
                      _context6.next = 13;
                      return cc.vv.gameData.awaitTime(.5);

                     case 13:
                      cc.vv.gameData.checkAutoPlay(_this4._collectFreeUI, _this4.onFreeGameCollect.bind(_this4));

                     case 14:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      onFreeGameStart: function onFreeGameStart() {
        var _this5 = this;
        this._startFreeUI.stopAllActions();
        this._btnstart.getComponent(cc.Button).interactable = false;
        Global.SlotsSoundMgr.playEffect("normal_dialog_click");
        var mainnode = cc.find("node", this._startFreeUI);
        cc.tween(mainnode).to(.3, {
          scale: 0
        }, {
          easing: "backIn"
        }).call(function() {
          _this5._startFreeUI.active = false;
          _this5.playTransition(function() {
            _this5._nextStep && _this5._nextStep();
            Global.SlotsSoundMgr.playBgm("free_bgm");
            cc.vv.gameData.GetBottomScript().CanDoNextRound();
          });
          _this5.scheduleOnce(function() {
            _this5.changeGameBackimage(true);
            var total = cc.vv.gameData.GetTotalFree();
            var wheeldata = cc.vv.gameData.getWheelData();
            wheeldata && (total += wheeldata.result.extraSpins);
            cc.vv.gameData.SetTotalFree(total);
            cc.vv.gameData.SetFreeTime(total);
            cc.vv.gameData.GetBottomScript().ShowFreeModel(true, 0, total);
          }, 2);
        }).start();
      },
      onFreeGameCollect: function onFreeGameCollect() {
        var _this6 = this;
        this._collectFreeUI.stopAllActions();
        this._btncollect.getComponent(cc.Button).interactable = false;
        Global.SlotsSoundMgr.playEffect("normal_dialog_close");
        var lblreward = cc.find("node/rewardcoins", this._collectFreeUI);
        var nWin = cc.vv.gameData.GetGameTotalFreeWin();
        lblreward.stopAllActions();
        var delayT = 0;
        if (Global.FormatCommaNumToNum(lblreward.getComponent(cc.Label).string) < nWin) {
          lblreward.getComponent(cc.Label).string = Global.FormatNumToComma(nWin);
          delayT = .2;
        }
        var mainnode = cc.find("node", this._collectFreeUI);
        cc.tween(mainnode).delay(delayT).to(.3, {
          scale: 0
        }, {
          easing: "backIn"
        }).call(function() {
          Global.SlotsSoundMgr.stopBgm();
          _this6._collectFreeUI.active = false;
          _this6.playTransition(function() {
            var freewin = cc.vv.gameData.GetGameTotalFreeWin();
            cc.vv.gameData.GetSlotsScript().ShowBottomWin(freewin, freewin, true, function() {
              _this6._nextStep && _this6._nextStep();
            });
          });
          _this6.scheduleOnce(function() {
            _this6.changeGameBackimage(false);
            cc.vv.gameData.isOpenWheelExtraSpins() || cc.vv.gameData.GetSlotsScript().lockMoneyBag(true);
            cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
            cc.vv.gameData.GetSlotsScript().resumeCardsState();
          }, 2);
        }).start();
      },
      playTransition: function playTransition(callback) {
        Global.SlotsSoundMgr.playEffect("transition");
        cc.vv.gameData.playSpine(this._transitionNode, "animation", false, callback);
      },
      changeGameBackimage: function changeGameBackimage(isfree) {
        cc.find("Canvas/safe_node/bg").active = !isfree;
        cc.find("Canvas/safe_node/free_bg").active = isfree;
      }
    });
    cc._RF.pop();
  }, {} ],
  ElvesBlessing_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4817dwP8SNDBpcbsBxIiD0X", "ElvesBlessing_Wheel");
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
      properties: {},
      onLoad: function onLoad() {
        this._mainNode = cc.find("mainnode", this.node);
        this._rorationWheel = cc.find("node_wheel/wheelNode/rotationWheel", this._mainNode);
        this._startBtnNode = cc.find("node_wheel/wheelNode/btn_spin", this._mainNode);
        Global.btnClickEvent(this._startBtnNode, this.onWheelStart, this);
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 == msg.code) {
          this._wheelData = msg.data;
          cc.vv.gameData.SetWheelData(msg.data);
          this.showResult(msg.data.idx);
        }
      },
      sendEnterFreeeGame: function sendEnterFreeeGame() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.data = {};
        req.data.rtype = 1;
        req.gameid = cc.vv.gameData.getGameId();
        cc.vv.NetManager.send(req, true);
      },
      onWheelStart: function onWheelStart(btn) {
        var _this = this;
        this._startBtnNode.stopAllActions();
        Global.SlotsSoundMgr.playEffect("wheel_click");
        this._startBtnNode.getComponent(cc.Button).interactable = false;
        cc.vv.gameData.playSpine(this._startBtnNode, "animation3", false, function() {
          _this.sendEnterFreeeGame();
        });
      },
      showResult: function showResult(resultidx) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var offsetangle, diffAngle, targetAngle, mRound;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              offsetangle = _this2._rorationWheel.angle;
              -1 != _this2._targetIdx && (offsetangle = _this2._rorationWheel.angle % 360 - 30 * _this2._targetIdx);
              _this2._targetIdx = resultidx - 1;
              diffAngle = 30 * _this2._targetIdx;
              targetAngle = -diffAngle + offsetangle;
              mRound = 13;
              Global.SlotsSoundMgr.playEffect("wheel_spin");
              _context.next = 9;
              return _this2.playActions(_this2._rorationWheel, [ cc.rotateTo(.5 * mRound, 360 * mRound + targetAngle).easing(cc.easeSineInOut()) ]);

             case 9:
              _this2._wheelData.result.respin ? Global.SlotsSoundMgr.playEffect("wheel_stop2") : Global.SlotsSoundMgr.playEffect("wheel_stop1");
              _this2.playWheelReward(true);
              _context.next = 13;
              return _this2.awaitTime(2);

             case 13:
              _context.next = 15;
              return _this2.showResultUI();

             case 15:
              _this2._wheelData.result.unLockRandomGame && cc.vv.gameData.GetSlotsScript().lockMoneyBag(false);

             case 16:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
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
      playWheelReward: function playWheelReward(isplay) {
        var getreward = cc.find("node_wheel/wheelNode/getreward", this._mainNode);
        isplay ? cc.vv.gameData.playSpine(getreward, "animation", true, null) : getreward.active = false;
      },
      showResultUI: function showResultUI() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return cc.vv.gameData.getUIMgr().showWheelResultUI(_this3._wheelData);

             case 2:
              _context2.next = 4;
              return _this3.awaitTime(1);

             case 4:
              _context2.next = 6;
              return _this3.exitWheelGame();

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      showExtraspins: function showExtraspins(showextraspins) {
        cc.find("randsymbol1", this._rorationWheel).active = showextraspins;
        cc.find("randsymbol2", this._rorationWheel).active = showextraspins;
        cc.find("randsymbol3", this._rorationWheel).active = !showextraspins;
        cc.find("randsymbol4", this._rorationWheel).active = !showextraspins;
      },
      enterWheelGame: function enterWheelGame(success) {
        var _this4 = this;
        Global.SlotsSoundMgr.playBgm("bonus_bgm");
        this._nextStep = success;
        this._targetIdx = -1;
        var showextra = cc.vv.gameData.isOpenWheelExtraSpins();
        this.showExtraspins(showextra);
        this._rorationWheel.angle = 0;
        this._mainNode.active = true;
        this._startBtnNode.getComponent(cc.Button).interactable = true;
        var wheelnode = cc.find("node_wheel", this._mainNode);
        Global.SlotsSoundMgr.playEffect("wheel_out");
        cc.tween(wheelnode).to(.3, {
          position: cc.v2(0, 25)
        }).call(function() {
          cc.vv.gameData.playSpine(_this4._startBtnNode, "animation1", false, function() {
            cc.vv.gameData.playSpine(_this4._startBtnNode, "animation2", true, null);
          });
          cc.vv.gameData.checkAutoPlay(_this4._startBtnNode, _this4.onWheelStart.bind(_this4));
        }).start();
      },
      exitWheelGame: function exitWheelGame() {
        var _this5 = this;
        this.playWheelReward(false);
        if (this._wheelData.result.respin) {
          Global.SlotsSoundMgr.playEffect("spin_out");
          this._startBtnNode.getComponent(cc.Button).interactable = true;
          cc.vv.gameData.playSpine(this._startBtnNode, "animation1", false, function() {
            cc.vv.gameData.playSpine(_this5._startBtnNode, "animation2", true, null);
          });
          cc.vv.gameData.checkAutoPlay(this._startBtnNode, this.onWheelStart.bind(this));
          return;
        }
        var wheelnode = cc.find("node_wheel", this._mainNode);
        cc.tween(wheelnode).to(.3, {
          position: cc.v2(0, -1e3)
        }).call(function() {
          _this5._mainNode.active = false;
          _this5.scheduleOnce(function() {
            _this5._nextStep ? _this5._nextStep() : cc.vv.gameData.GetSlotsScript().reconnectFreeGame();
          }, 1);
        }).start();
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
  }, {} ]
}, {}, [ "ElvesBlessing_ButtonSafe", "ElvesBlessing_Cfg", "ElvesBlessing_FreeGame", "ElvesBlessing_GameData", "ElvesBlessing_Logic", "ElvesBlessing_Moneybag", "ElvesBlessing_Reel", "ElvesBlessing_Slots", "ElvesBlessing_Symbol", "ElvesBlessing_UIMgr", "ElvesBlessing_Wheel" ]);