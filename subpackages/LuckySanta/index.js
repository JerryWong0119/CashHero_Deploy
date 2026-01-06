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
  LuckySanta_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de341YgPbpIIZzJqcWGF63V", "LuckySanta_Cfg");
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
        node: "s_1",
        dark: true,
        win_node: "w_1",
        win_ani: {
          name: "animation2",
          zIndex: 100
        },
        stop_ani: {
          name: "animation1",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 2, {
        node: "s_14",
        dark: false,
        win_node: "w_14",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s_2",
        dark: true,
        win_node: "w_2",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 4, {
        node: "s_3",
        dark: true,
        win_node: "w_3",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 5, {
        node: "s_4",
        dark: true,
        win_node: "w_4",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 6, {
        node: "s_5",
        dark: true,
        win_node: "w_5",
        win_ani: {
          name: "animation",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 7, {
        node: "s_6",
        dark: true
      }), _defineProperty(_symbol, 8, {
        node: "s_7",
        dark: true
      }), _defineProperty(_symbol, 9, {
        node: "s_8",
        dark: true
      }), _defineProperty(_symbol, 10, {
        node: "s_9",
        dark: true
      }), _defineProperty(_symbol, 11, {
        node: "s_10",
        dark: true
      }), _defineProperty(_symbol, 12, {
        node: "s_11",
        dark: true
      }), _defineProperty(_symbol, 13, {
        node: "s_12",
        dark: true
      }), _defineProperty(_symbol, 14, {
        node: "s_15",
        dark: false,
        stop_ext_ani: {
          node: "w_151",
          name: "animation",
          zIndex: 200
        },
        appear_ani: {
          node: "w_152",
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 15, {
        node: "s_16",
        dark: false,
        stop_ext_ani: {
          node: "w_151",
          name: "animation",
          zIndex: 200
        },
        appear_ani: {
          node: "w_152",
          name: "animation",
          zIndex: 200
        }
      }), _defineProperty(_symbol, 16, {
        node: "s_17",
        dark: false,
        win_node: "w17",
        win_ani: {
          name: "animation",
          zIndex: 100
        },
        stop_ani: {
          name: "animation",
          zIndex: 200
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "LuckySanta_Slots",
        Reels: "LMSlots_Reel_Base",
        Symbols: "LuckySanta_Symbol",
        Sound: "LMSlots_Sound"
      },
      helpItems: [ "games/LuckySanta/prefab/LMSlots_Help_item1", "games/LuckySanta/prefab/LMSlots_Help_item2", "games/LuckySanta/prefab/LMSlots_Help_item3" ],
      col: 5,
      row: 3,
      scatterId: 3,
      wildId: 1,
      collectId: 2,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 128
      },
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      respinRandomSymbols: [ 1, 3, 4, 5, 6, 7, 14, 15, 16 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      AddAntiTime: 2,
      bounce: true,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 6,
        counts: [ 3, 3, 3, 3, 3 ],
        antiNode: "node_anti",
        path: "games/LuckySanta/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_star",
        antSound: "anticipation",
        antSpeed: 2500
      }, {
        id: [ 14, 15 ],
        mini: 0,
        counts: [ 3, 3, 3, 3, 3 ],
        path: "games/LuckySanta/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_star"
      } ],
      normalBgm: "base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  LuckySanta_Character: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b516bWydRtA4ZHxq6bUAlP4", "LuckySanta_Character");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        role: sp.Skeleton,
        posGift: cc.Node,
        _curRoleState: ""
      },
      onLoad: function onLoad() {
        this.setRoleAnimation();
      },
      start: function start() {},
      getGiftPos: function getGiftPos() {
        return this.posGift.convertToWorldSpaceAR(cc.v2(0, 0));
      },
      playCollectGiftEffect: function playCollectGiftEffect() {
        var effect = this.posGift.getChildByName("effect").getComponent(sp.Skeleton);
        effect.node.active = true;
        effect.setAnimation(0, "animation", false);
        effect.setCompleteListener(function() {
          effect.setCompleteListener(null);
          effect.node.active = false;
        });
        this.setRoleAnimation();
      },
      triBonusAnim: function triBonusAnim() {
        var tri = this.posGift.getChildByName("tri").getComponent(sp.Skeleton);
        tri.node.active = true;
        tri.setAnimation(0, "animation", false);
        tri.setCompleteListener(function() {
          tri.setCompleteListener(null);
          tri.node.active = false;
        });
      },
      setRoleAnimation: function setRoleAnimation() {
        var totalWildCnt = cc.vv.gameData.totalWildCnt ? cc.vv.gameData.totalWildCnt : 0;
        if (totalWildCnt < 15) {
          "idle" !== this._curRoleState && this.role.setAnimation(0, "idle", true);
          this._curRoleState = "idle";
        } else if (totalWildCnt < 40) {
          "idle1" !== this._curRoleState && this.role.setAnimation(0, "idle1", true);
          this._curRoleState = "idle1";
        } else if (totalWildCnt < 75) {
          "idle2" !== this._curRoleState && this.role.setAnimation(0, "idle2", true);
          this._curRoleState = "idle2";
        } else {
          "idle3" !== this._curRoleState && this.role.setAnimation(0, "idle3", true);
          this._curRoleState = "idle3";
        }
      },
      show: function show() {
        this.role.node.active = true;
      },
      hide: function hide() {
        this.role.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckySanta_CollectProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dcbf0uc4udCGai/u7Lsblyw", "LuckySanta_CollectProgress");
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
        collectSpr: cc.Node,
        spine_collectSymbol: cc.Node,
        spine_collectReceiveEff: sp.Skeleton,
        spine_lock: sp.Skeleton,
        spine_progress_complete: sp.Skeleton,
        spine_progress_add: sp.Skeleton
      },
      onLoad: function onLoad() {
        var energyData = cc.vv.gameData.energyData;
        this.setProgress(energyData.needCoins > 0 ? energyData.totalCoin / energyData.needCoins : 0);
        this._initListener();
      },
      start: function start() {
        this.showCollect(cc.vv.gameData.isOpenCollectProgress());
      },
      _initListener: function _initListener() {
        Global.btnClickEvent(cc.find("btnUnlock", this.node), this.onBtnUnlockClicked, this);
        Global.btnClickEvent(cc.find("btn_collect_info", this.node), this.onBtnShowInfoClicked, this);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      onBtnUnlockClicked: function onBtnUnlockClicked() {
        if (cc.vv.gameData.GetFreeTime() > 0) return;
        if (this.spine_lock.node.active && cc.vv.gameData.GetMaxBetIdx() >= cc.vv.gameData.needBet) {
          cc.vv.gameData.SetBetIdx(cc.vv.gameData.needBet);
          cc.vv.gameData._serverRawMult = cc.vv.gameData.needBet;
          cc.vv.UserManager.setEnterSelectBet(null);
          cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBetCoin();
          Global.dispatchEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, cc.vv.gameData.GetTotalBet());
        }
      },
      setBtnsClickEnable: function setBtnsClickEnable(enable) {
        cc.find("btn_collect_info", this.node).getComponent(cc.Button).interactable = enable;
        cc.find("btnUnlock", this.node).getComponent(cc.Button).interactable = enable;
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated(event) {
        this.showCollect(cc.vv.gameData.isOpenCollectProgress());
      },
      collectEnergy: function collectEnergy(globalPosArr, percent) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
                  var endPos, promiseArr;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      if (!(globalPosArr.length <= 0)) {
                        _context.next = 2;
                        break;
                      }
                      return _context.abrupt("return");

                     case 2:
                      percent = Math.max(0, Math.min(1, percent));
                      Global.SlotsSoundMgr.playEffect("star_fly");
                      endPos = _this.spine_collectReceiveEff.node.position;
                      promiseArr = [];
                      globalPosArr.forEach(function(v) {
                        var pos = _this.node.convertToNodeSpaceAR(v);
                        var spine_symbol = cc.instantiate(_this.spine_collectSymbol);
                        spine_symbol.parent = _this.node;
                        spine_symbol.position = pos;
                        spine_symbol.active = true;
                        promiseArr.push(new Promise(function(res) {
                          cc.tween(spine_symbol).call(function() {
                            spine_symbol.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                            spine_symbol.getComponent(sp.Skeleton).addAnimation(0, "animation2", false);
                          }).delay(.4).to(.5, {
                            position: endPos
                          }).delay(.5).call(function() {
                            spine_symbol.removeFromParent();
                            res();
                          }).start();
                        }));
                      });
                      _context.next = 9;
                      return Promise.all(promiseArr);

                     case 9:
                      _this.setProgress(percent);
                      Global.SlotsSoundMgr.playEffect("star_collect");
                      _this.spine_collectReceiveEff.active = true;
                      _this.spine_collectReceiveEff.setAnimation(0, "animation", false);
                      _this.spine_collectReceiveEff.setCompleteListener(function() {
                        _this.spine_collectReceiveEff.active = false;
                        _this.spine_collectReceiveEff.setCompleteListener(null);
                      });
                      if (!(1 == percent)) {
                        _context.next = 17;
                        break;
                      }
                      _context.next = 17;
                      return _this.awaitTime(1);

                     case 17:
                      success();

                     case 18:
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
      showCollect: function showCollect(boo) {
        var _this2 = this;
        if (this._isCollectState != boo) if (boo) {
          Global.SlotsSoundMgr.playEffect("unlock");
          this.spine_lock.node.active = true;
          this.spine_lock.setAnimation(0, "animation1", false);
          this.spine_lock.setCompleteListener(function() {
            _this2.spine_lock.node.active = false;
            _this2.spine_lock.setCompleteListener(null);
          });
        } else {
          Global.SlotsSoundMgr.playEffect("lock");
          this.spine_lock.node.active = true;
          this.spine_lock.setAnimation(0, "animation2", false);
          this.spine_lock.setCompleteListener(function() {
            _this2.spine_lock.setAnimation(0, "animation3", false);
            _this2.spine_lock.setCompleteListener(null);
          });
        }
        this._isCollectState = boo;
      },
      setProgress: function setProgress(percent) {
        var _this3 = this;
        percent = Math.max(0, Math.min(1, percent));
        if (percent > 0) {
          this.spine_progress_add.node.active = true;
          this.spine_progress_add.setAnimation(0, "animation", false);
          this.spine_progress_add.setCompleteListener(function() {
            _this3.spine_progress_add.node.active = false;
            _this3.spine_progress_add.setCompleteListener(null);
            _this3.collectSpr.x = _this3.collectSpr.width * percent - _this3.collectSpr.width;
            if (1 == percent) {
              Global.SlotsSoundMgr.playEffect("full");
              _this3.spine_progress_complete.node.active = true;
              _this3.spine_progress_complete.setAnimation(0, "animation", false);
              _this3.spine_progress_complete.setCompleteListener(function() {
                _this3.spine_progress_complete.node.active = false;
                _this3.spine_progress_complete.setCompleteListener(null);
              });
              var infoSpine = cc.find("btn_collect_info/spine", _this3.node).getComponent(sp.Skeleton);
              infoSpine.setAnimation(0, "animation2", false);
              infoSpine.setCompleteListener(function() {
                infoSpine.setAnimation(0, "animation1", false);
                infoSpine.setCompleteListener(null);
              });
            }
          });
        } else this.collectSpr.x = -this.collectSpr.width;
      },
      onBtnShowInfoClicked: function onBtnShowInfoClicked() {
        Global.SlotsSoundMgr.playEffect("click");
        SlotsFacade.pickGift.enterGame(true);
      },
      awaitTime: function awaitTime(time) {
        var _this4 = this;
        return new Promise(function(success) {
          _this4.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckySanta_CollectWild: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c676YPKFlPFJID8slv0fV2", "LuckySanta_CollectWild");
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
        _spine_wildFly: null
      },
      onLoad: function onLoad() {
        this._spine_wildFly = cc.find("spine_wildFly", this.node);
      },
      collectWild: function collectWild(globalPosArr, isTrigger) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var endPos;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(globalPosArr.length <= 0)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");

             case 2:
              Global.SlotsSoundMgr.playEffect("wild_fly");
              endPos = _this.node.convertToNodeSpaceAR(SlotsFacade.character.getGiftPos());
              globalPosArr.forEach(function(v) {
                var pos = _this.node.convertToNodeSpaceAR(v);
                var spine_wild = cc.instantiate(_this._spine_wildFly);
                spine_wild.parent = _this.node;
                spine_wild.position = pos;
                spine_wild.active = true;
                cc.tween(spine_wild).call(function() {
                  spine_wild.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                }).delay(.2).call(function() {
                  spine_wild.getComponent(sp.Skeleton).setAnimation(0, "animation1_1", false);
                }).to(.5, {
                  position: endPos
                }).call(function() {
                  spine_wild.removeFromParent();
                }).start();
              });
              _context.next = 7;
              return SlotsFacade.delayTime(.7);

             case 7:
              SlotsFacade.character.playCollectGiftEffect();
              _context.next = 10;
              return SlotsFacade.delayTime(.4);

             case 10:
              isTrigger && Global.SlotsSoundMgr.playEffect("tree");
              _context.next = 13;
              return _this.awaitTime(isTrigger ? 1.3 : .5);

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      awaitTime: function awaitTime(time) {
        var _this2 = this;
        return new Promise(function(success) {
          _this2.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckySanta_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0637bKyaVJC44j4hJ5r3bMv", "LuckySanta_GameData");
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
        energyData: null,
        totalWildCnt: 0,
        needBet: 0
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this.energyData = this._deskInfo.energyData;
        this.needBet = this.energyData.minBetIdx;
        this.totalWildCnt = this._deskInfo.totalWildCnt;
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
      isTriggerFreeGames: function isTriggerFreeGames() {
        return this._deskInfo.restFreeCount > 0 && this._deskInfo.restFreeCount == this._deskInfo.allFreeCount;
      },
      isFinishFreeGames: function isFinishFreeGames() {
        return 0 == this._deskInfo.restFreeCount && this._deskInfo.allFreeCount > 0;
      },
      isFreeGamesTime: function isFreeGamesTime() {
        return this._deskInfo.restFreeCount > 0 && this._deskInfo.restFreeCount < this._deskInfo.allFreeCount;
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
          for (var i in msg.resultCards) if (msg.resultCards[i]) {
            if (msg.coinBonus && msg.coinBonus.info) {
              var cardsInfo = msg.coinBonus.info["idx_" + (parseInt(i) + 1)];
              cardsInfo && (msg.resultCards[i] = Global.StarBonusRespin.getIdByType(cardsInfo.type));
            }
          } else msg.resultCards[i] = Global.random(3, 13);
          this._super(msg);
          if (msg.energyData) {
            this.energyData = msg.energyData;
            this.needBet = this.energyData.needBetIdx;
          }
          this.totalWildCnt = msg.totalWildCnt;
        }
      },
      reqSubGame: function reqSubGame(data) {
        var _this = this;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: data
          };
          var resp = function resp(msg) {
            cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, resp, false, _this);
            console.log("reqSubGame-resp:", msg);
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
  LuckySanta_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b9b52C0mhGTJJz3Dwn65hN", "LuckySanta_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        window.SlotsFacade = this;
        this.dm = cc.vv.gameData;
        this.InitCommComponent();
        this.popup = cc.find("Canvas/safe_node/node_ui_pop").addComponent("LuckySanta_Pop");
        this.character = cc.find("Canvas/safe_node/slots/charactor").getComponent("LuckySanta_Character");
        this.collectProgress = cc.find("Canvas/safe_node/slots/node_energyCollect").getComponent("LuckySanta_CollectProgress");
        this.wildCollect = cc.find("Canvas/safe_node/gamePickBonus").getComponent("LuckySanta_CollectWild");
        this.pickBonus = cc.find("Canvas/safe_node/gamePickBonus").getComponent("LuckySanta_PickBonus");
        this.pickGift = cc.find("Canvas/safe_node/gamePickGift").getComponent("LuckySanta_PickGift");
        this.bonusFreeGame = cc.find("Canvas/safe_node/starBonusFreegame").getComponent("LuckySanta_StarBonusFreegame");
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  LuckySanta_PickBonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d26b1DNb0dCraxlpwRU4621", "LuckySanta_PickBonus");
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
    var BombItem = function BombItem(node, owner) {
      var _this = this;
      this.node = node;
      this.owner = owner;
      this.jackpotIdx = 0;
      this.spine = cc.find("spine", this.node);
      this.resetInit = function() {
        _this.setJackpotIdx(0);
        _this.setClickEnable(true);
      };
      this.setJackpotIdx = function(jackpotIdx) {
        _this.jackpotIdx = jackpotIdx;
        0 == jackpotIdx && _this.showInit();
      };
      this.setClickCallback = function(callback) {
        _this.node.off("click");
        Global.btnClickEvent(_this.node, function() {
          _this.setClickEnable(false);
          callback();
        }, _this);
      };
      this.setClickEnable = function(enabled) {
        _this.node.getComponent(cc.Button).interactable = enabled;
      };
      this.isClickEnable = function() {
        return _this.node.getComponent(cc.Button).interactable;
      };
      this.showInit = function() {
        _this.node.zIndex = 0;
        _this.showChooseTips();
      };
      this.getResId = function(jackpotId) {
        return 5 - jackpotId;
      };
      this.showChooseTips = function() {
        _this.owner.playSpine(_this.spine, "animation05", true);
      };
      this.showBombing = function() {
        _this.owner.playSpine(_this.spine, "animation0" + _this.getResId(_this.jackpotIdx), false, function() {
          _this.showResult();
        });
      };
      this.showResult = function() {
        _this.owner.playSpine(_this.spine, "animation0" + _this.getResId(_this.jackpotIdx) + "_1");
      };
      this.showWin = function() {
        _this.node.zIndex = 2;
        _this.owner.playSpine(_this.spine, "animation0" + _this.getResId(_this.jackpotIdx) + "_2", true);
      };
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _uiMain: null,
        _uiResult: null,
        _itemsList: null,
        _subgameInfo: null
      },
      onLoad: function onLoad() {
        this._soundCfg = cc.vv.gameData.getGameCfg().soundCfg;
        this._uiResult = cc.find("uiResult", this.node);
        this._uiResult.active = false;
        this._uiMain = cc.find("uiMain", this.node);
        this._uiMain.active = false;
        cc.find("LMSlots_PrizePool_1", this._uiMain).addComponent("LMSlots_PrizePool_Base");
        this._grayLayer = cc.find("itemListBg/List/grayLayer", this._uiMain);
        this._itemsList = [];
        var listNode = cc.find("itemListBg/List", this._uiMain);
        var itemTemplate = cc.find("ItemTemplate", listNode);
        itemTemplate.active = false;
        for (var i = 0; i < 12; i++) {
          var item = cc.instantiate(itemTemplate);
          item.active = true;
          item.name = i.toString();
          item.parent = listNode;
          this._itemsList.push(new BombItem(item, this));
        }
        this._resetInit();
      },
      enterGame: function enterGame(subgameInfo) {
        var _arguments = arguments, _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var isReconnected;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              isReconnected = _arguments.length > 1 && void 0 !== _arguments[1] && _arguments[1];
              _this2._subgameInfo = subgameInfo;
              cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playBgm("pick_bgm");
              _this2._resetInit();
              _this2._lockJackpot(_this2._subgameInfo.jackpot || [ 0, 0, 0, 0 ]);
              _context.next = 8;
              return _this2._showMain(isReconnected);

             case 8:
              _context.next = 10;
              return _this2._showResultDialouge(_this2._subgameInfo.wincoin, _this2._subgameInfo.jackpotId);

             case 10:
              _context.next = 12;
              return _this2.exitGame();

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitGame: function exitGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this3._playTransition();

             case 2:
              _this3.scheduleOnce(function() {
                _this3._resetInit(false);
              }, .5);
              cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("idle");
              Global.SlotsSoundMgr.stopBgm();

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      start: function start() {
        var _this4 = this;
        var deskInfo = cc.vv.gameData.getDeskInfo();
        if (deskInfo.christmas && deskInfo.christmas.state) {
          this.scheduleOnce(function() {
            _this4.enterGame(deskInfo.christmas, true);
          }, .2);
          cc.vv.gameData.GetSlotsScript()._topScript.SetBackLobby(false);
        }
      },
      _resetInit: function _resetInit() {
        var hideTranstion = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var _iterator = _createForOfIteratorHelper(this.node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var subNode = _step.value;
            if (!("spine_transition" != subNode.name && "spine_transition2" != subNode.name || hideTranstion)) continue;
            subNode.active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var _iterator2 = _createForOfIteratorHelper(this._itemsList), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var item = _step2.value;
            item.resetInit();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this._setGrayLayerVisible(false);
        this._setUnSelectItemsClickEnable(true);
      },
      _restoreByServerData: function _restoreByServerData() {
        var choice = this._subgameInfo.choice || [];
        for (var i = 0; i < this._itemsList.length; i++) {
          var jackpotid = choice[i];
          var bombItem = this._itemsList[i];
          bombItem.setJackpotIdx(choice[i]);
          jackpotid > 0 && bombItem.showResult();
        }
        this._setUnSelectItemsClickEnable(true);
      },
      _showMain: function _showMain(isReconnected) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this5.scheduleOnce(function() {
                _this5._uiMain.active = true;
                isReconnected && _this5._restoreByServerData();
              }, .5);
              _context6.next = 3;
              return _this5._playTransition();

             case 3:
              return _context6.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
                  var self, func, autoClick, _iterator4, _step4, _loop;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      self = _this5;
                      func = function() {
                        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(bombItem) {
                          var _iterator3, _step3, _bombItem, idx, resp, info, _topScript;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) switch (_context3.prev = _context3.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("pick");
                              _iterator3 = _createForOfIteratorHelper(_this5._itemsList);
                              try {
                                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                                  _bombItem = _step3.value;
                                  _bombItem.node.stopAllActions();
                                }
                              } catch (err) {
                                _iterator3.e(err);
                              } finally {
                                _iterator3.f();
                              }
                              self._setUnSelectItemsClickEnable(false);
                              idx = parseInt(bombItem.node.name);
                              _context3.next = 7;
                              return cc.vv.gameData.reqSubGame({
                                rtype: 1,
                                idx: idx + 1
                              });

                             case 7:
                              resp = _context3.sent;
                              if (!(200 === resp.code)) {
                                _context3.next = 32;
                                break;
                              }
                              info = resp.data;
                              bombItem.setJackpotIdx(info.choice[idx]);
                              bombItem.showBombing();
                              _context3.next = 14;
                              return self.awaitTime(1);

                             case 14:
                              if (!(info.wincoin > 0)) {
                                _context3.next = 28;
                                break;
                              }
                              self._subgameInfo.wincoin = info.wincoin;
                              self._subgameInfo.choice = info.choice;
                              self._subgameInfo.jackpotId = info.jackpotId;
                              self._playWinEffect(info.jackpotId, info.choice);
                              _context3.next = 21;
                              return self.awaitTime(3);

                             case 21:
                              Global.SlotsSoundMgr.playEffect("pick_end");
                              cc.vv.gameData.AddCoin(info.wincoin);
                              _topScript = cc.vv.gameData.GetSlotsScript()._topScript;
                              _topScript.ShowCoin();
                              success();
                              _context3.next = 30;
                              break;

                             case 28:
                              self._setUnSelectItemsClickEnable(true);
                              autoClick();

                             case 30:
                              _context3.next = 34;
                              break;

                             case 32:
                              AppLog.warn("\u8fd4\u56de\u6570\u636e\u9519\u8bef!");
                              failed();

                             case 34:
                             case "end":
                              return _context3.stop();
                            }
                          }, _callee3);
                        }));
                        return function func(_x3) {
                          return _ref2.apply(this, arguments);
                        };
                      }();
                      autoClick = function autoClick() {
                        var list = [];
                        self._itemsList.forEach(function(item) {
                          0 == item.jackpotIdx && list.push(item);
                        });
                        var bombItem = list[Global.random(0, list.length - 1)];
                        cc.vv.gameData.checkAutoPlay(bombItem.node, function() {
                          func(bombItem);
                        });
                      };
                      autoClick();
                      _iterator4 = _createForOfIteratorHelper(_this5._itemsList);
                      try {
                        _loop = function _loop() {
                          var bombItem = _step4.value;
                          bombItem.setClickCallback(_asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) switch (_context4.prev = _context4.next) {
                               case 0:
                                func(bombItem);

                               case 1:
                               case "end":
                                return _context4.stop();
                              }
                            }, _callee4);
                          })));
                        };
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) _loop();
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }

                     case 6:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 4:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      _setUnSelectItemsClickEnable: function _setUnSelectItemsClickEnable(enable) {
        var _iterator5 = _createForOfIteratorHelper(this._itemsList), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var bombItem = _step5.value;
            if (0 == bombItem.jackpotIdx) {
              bombItem.setClickEnable(enable);
              bombItem.showChooseTips();
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      },
      _showUnchooseResult: function _showUnchooseResult(winJackpotId, choice) {
        var _iterator6 = _createForOfIteratorHelper(this._itemsList), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var bombItem = _step6.value;
            if (0 == bombItem.jackpotIdx) {
              var idx = parseInt(bombItem.node.name);
              bombItem.setJackpotIdx(choice[idx]);
              bombItem.showBombing();
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      },
      _setGrayLayerVisible: function _setGrayLayerVisible(isVisible) {
        this._grayLayer.active = isVisible;
        if (isVisible) {
          var listNode = cc.find("itemListBg/List", this._uiMain);
          listNode.getComponent(cc.Layout).enabled = false;
          this._grayLayer.width = cc.find("Canvas").width;
          this._grayLayer.height = cc.find("Canvas").height;
          this._grayLayer.position = this._grayLayer.parent.convertToNodeSpaceAR(cc.find("Canvas").convertToWorldSpaceAR(cc.v2(0, 0)));
          this._grayLayer.zIndex = 1;
        }
      },
      _playWinEffect: function _playWinEffect(winJackpotId, choice) {
        var _this6 = this;
        var listNode = cc.find("itemListBg/List", this._uiMain);
        listNode.getComponent(cc.Layout).enabled = false;
        this._setGrayLayerVisible(true);
        this._playJackpotWinEffect(winJackpotId);
        this.scheduleOnce(function() {
          _this6._showUnchooseResult(winJackpotId, choice);
        }, .8);
      },
      _playJackpotWinEffect: function _playJackpotWinEffect(winPropIdx) {
        Global.SlotsSoundMgr.playEffect("bell");
        Global.SlotsSoundMgr.playEffect("pick_hit");
        var _iterator7 = _createForOfIteratorHelper(this._itemsList), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            var bombItem = _step7.value;
            bombItem.jackpotIdx == winPropIdx && bombItem.showWin();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      },
      _convertNodePosToLocalPos: function _convertNodePosToLocalPos(node, localNode) {
        return localNode.convertToNodeSpaceAR(node.parent.convertToWorldSpaceAR(node.position));
      },
      _playTransition: function _playTransition() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var spine_transition;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("transition1");
              spine_transition = cc.find("spine_transition", _this7.node);
              _context7.next = 4;
              return _this7.playSpine(spine_transition);

             case 4:
              spine_transition.active = false;

             case 5:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      _showResultDialouge: function _showResultDialouge(winCoin, winJackpotId) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var frameName, jackpot_txt, twinCoin, winCoinStr, num, unit, lblWinCoin;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              frameName = [ "theme129_popup_text11", "theme129_popup_text12", "theme129_popup_text10", "theme129_popup_text9" ];
              jackpot_txt = cc.find("jackpot_txt", _this8._uiResult).getComponent(cc.Sprite);
              jackpot_txt.spriteFrame = cc.vv.gameData.GetAtlasByName("dialog").getSpriteFrame(frameName[winJackpotId - 1]);
              twinCoin = winCoin;
              winCoinStr = Global.formatMoney(twinCoin);
              num = 0;
              while (winCoinStr.length > 10) {
                twinCoin = Math.floor(twinCoin / 1e3);
                winCoinStr = Global.formatMoney(twinCoin);
                num++;
              }
              unit = [ "", "K", "M", "B", "T", "Q" ];
              winCoinStr += unit[num];
              lblWinCoin = cc.find("lblWinCoin", _this8._uiResult).getComponent(cc.Label);
              lblWinCoin.string = winCoinStr;
              _this8._uiResult.active = true;
              _this8._uiResult.opacity = 0;
              _context8.next = 15;
              return _this8.playActions(_this8._uiResult, [ cc.fadeIn(.5) ]);

             case 15:
              _context8.next = 17;
              return _this8.awaitTime(1);

             case 17:
              _context8.next = 19;
              return _this8.showBottomWin(winCoin);

             case 19:
              _context8.next = 21;
              return _this8.awaitTime(.5);

             case 21:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showBottomWin: function showBottomWin(winCoin) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function(success) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(winCoin, winCoin, true, function() {
                  success();
                });
              }));

             case 1:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      _lockJackpot: function _lockJackpot(jackpotList) {
        var prizepool = cc.find("LMSlots_PrizePool_1", this._uiMain).getComponent("LMSlots_PrizePool_Base");
        prizepool.PausePool([ {
          prizeType: 0,
          pauseNum: jackpotList[0]
        }, {
          prizeType: 1,
          pauseNum: jackpotList[1]
        }, {
          prizeType: 2,
          pauseNum: jackpotList[2]
        }, {
          prizeType: 3,
          pauseNum: jackpotList[3]
        } ]);
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
        var _this9 = this;
        return new Promise(function(success) {
          _this9.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckySanta_PickGift: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e28e1NmdwpA8rhIeIA5blWd", "LuckySanta_PickGift");
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
    var BOX_NUM = 26;
    var MULT_ARR = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 30, 50, 60, 70, 80, 90, 100, 150, 200, 300, 500, 750, 1e3, 1500 ];
    var TitleType = {
      GOOD_LUCK: 1,
      CHOOSE_GIFT: 2,
      SELECT_TIMES: 3
    };
    var GameState = {
      COLLECTING: 0,
      FIRST_CHOOSE: 1,
      CHOOSEING: 2,
      ROUND_END: 3,
      LAST_CHOOSE: 4
    };
    var MULT_COLOR = {
      GREEN: "green",
      RED: "red",
      GRAY: "gray"
    };
    var MultItem = function MultItem(node, owner) {
      this.node = node;
      this._owner = owner;
      this._color = MULT_COLOR.GREEN;
      this.init = function() {
        cc.find("spine", this.node).active = false;
        var id = parseInt(this.node.name);
        this.setColor(id < 13 ? MULT_COLOR.GREEN : MULT_COLOR.RED);
      };
      this.setMult = function(mult) {
        var lblMult = cc.find("lblMult", this.node);
        lblMult.active = true;
        this._owner._setLabel(lblMult, mult);
      };
      this.playToGray = function() {
        var _this = this;
        var spineNode = cc.find("spine", this.node);
        this._owner._playSpine(spineNode, "animation", false, function() {
          _this.setColor(MULT_COLOR.GRAY);
          spineNode.active = false;
        });
      };
      this.setColor = function(color) {
        this._color = color;
        this._refreshColor();
      };
      this._refreshColor = function() {
        for (var key in MULT_COLOR) cc.find(MULT_COLOR[key], this.node).active = false;
        cc.find(this._color, this.node).active = true;
      };
    };
    var BoxItem = function BoxItem(node, owner) {
      this.node = node;
      this._owner = owner;
      this._idNum = 0;
      this._spine_light = cc.find("spine_light", this.node);
      this.init = function() {
        var _iterator = _createForOfIteratorHelper(this.node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var sbd = _step.value;
            sbd.active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        cc.find("box", this.node).active = true;
        this._idNum = parseInt(this.node.name) + 1;
        this._owner._setLabel(cc.find("box/lblIdxNum", this.node), this._idNum);
      };
      this.setClickCallback = function(callback) {
        var _this2 = this;
        this.node.off("click");
        Global.btnClickEvent(this.node, function() {
          _this2.setClickEnable(false);
          callback();
        }, this);
      };
      this.setClickEnable = function(enabled) {
        this.node.getComponent(cc.Button).interactable = enabled;
      };
      this.isClickEnable = function() {
        return this.node.getComponent(cc.Button).interactable;
      };
      this.getId = function() {
        return this._idNum;
      };
      this.playAppearEff = function() {
        this.node.active = true;
        var box = cc.find("box", this.node);
        box.scale = 0;
        var spine_comming_node = cc.find("spine_coming", this.node);
        this._owner._playSpine(spine_comming_node, "animation", false, function() {
          spine_comming_node.active = false;
        });
        cc.tween(box).to(.3, {
          scale: .35
        }).to(.1, {
          scale: .19
        }).start();
      };
      this.playDisappear = function() {
        this.init();
        this.node.active = false;
      };
      this.playPinkStroke = function() {
        var _this3 = this;
        this._owner._playSpine(this._spine_light, "animation1", false, function() {
          _this3._owner._playSpine(_this3._spine_light, "animation2");
        });
      };
      this.hasStrokeEff = function() {
        return this._spine_light.active;
      };
      this.removeStrokeEff = function() {
        this._spine_light.active = false;
      };
      this.flyToYourGift = function(startPos, targetPos) {
        var _this4 = this;
        Global.SlotsSoundMgr.playEffect("gift_fly");
        this._playParticleEff(true);
        this._playWhiteStroke(function() {
          Global.SlotsSoundMgr.playEffect("gift_out1");
          cc.tween(_this4.node).to(.5, {
            position: targetPos,
            scale: 1.68
          }).call(function() {
            _this4._playParticleEff(false);
            _this4.removeStrokeEff();
          }).start();
        });
      };
      this._playWhiteStroke = function(callback) {
        var _this5 = this;
        this._owner._playSpine(this._spine_light, "animation3", false, function() {
          _this5._owner._playSpine(_this5._spine_light, "animation4");
          callback && callback();
        });
      };
      this._playParticleEff = function(bAnim) {
        var tuoweiPtcl = cc.find("tuoweiPtcl", this.node);
        tuoweiPtcl.active = bAnim;
        if (bAnim) {
          var ptcl = tuoweiPtcl.getComponent(cc.ParticleSystem);
          ptcl.resetSystem();
        }
      };
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _isLook: false,
        _uiMain: null,
        _uiBg1: null,
        _uiBg2: null,
        _yourGiftBoxItem: null,
        _multItemsList: null,
        _boxItemsList: null,
        _giveMultLblList: null,
        _freeBags: null,
        _multConf: null,
        _totalRound: 0,
        _currRound: null,
        _currCount: 0,
        _historyMult: null,
        _gainMult: null,
        _prize: null,
        _hasChoices: null,
        _unpickedMult: null,
        _state: null,
        _nextRound: null,
        _nextChooseCount: null,
        _options: null,
        _lastChoice: null,
        _curRoundPickBoxList: null
      },
      onLoad: function onLoad() {
        this._initData();
        this._uiMain = cc.find("uiMain", this.node);
        this._uiBg1 = cc.find("uiBg1", this._uiMain);
        this._uiBg2 = cc.find("uiBg2", this._uiMain);
        cc.find("box_pos", this._uiBg2).active = false;
        var multListNode = cc.find("multList", this._uiMain);
        var _iterator2 = _createForOfIteratorHelper(multListNode.children), _step2;
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
        this._multItemsList = [];
        for (var i = 0; i < BOX_NUM; i++) {
          var item = cc.instantiate(cc.find("ItemTemplate", multListNode));
          item.name = i.toString();
          item.active = true;
          item.position = cc.find("Item" + (i + 1), multListNode).position;
          item.parent = multListNode;
          var multItem = new MultItem(item, this);
          multItem.init();
          multItem.setMult(this._multConf[i]);
          multItem.setColor(MULT_COLOR.GREEN);
          this._multItemsList.push(multItem);
        }
        var boxListNode = cc.find("boxList", this._uiMain);
        var _iterator3 = _createForOfIteratorHelper(boxListNode.children), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _subNode = _step3.value;
            _subNode.active = false;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this._boxItemsList = [];
        for (var _i = 0; _i < BOX_NUM; _i++) {
          var _item = cc.instantiate(cc.find("ItemTemplate", boxListNode));
          _item.name = _i.toString();
          _item.active = true;
          _item.position = cc.find("Item" + (_i + 1), boxListNode).position;
          _item.parent = boxListNode;
          var boxItem = new BoxItem(_item, this);
          boxItem.init();
          this._boxItemsList.push(boxItem);
        }
        this._giveMultLblList = [];
        for (var _i2 = 1; _i2 <= 5; _i2++) this._giveMultLblList.push(cc.find("giveupMultList/lblMult" + _i2, this._uiBg2));
        var _iterator4 = _createForOfIteratorHelper(this.node.children), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var subnode = _step4.value;
            subnode.active = false;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      },
      start: function start() {},
      enterGame: function enterGame() {
        var _arguments = arguments, _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var isLook;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              isLook = _arguments.length > 0 && void 0 !== _arguments[0] && _arguments[0];
              _this6._isLook = isLook;
              isLook || Global.SlotsSoundMgr.playBgm("deal_bgm");
              cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 6;
              return _this6._showMain();

             case 6:
              _context.next = 8;
              return _this6.exitGame();

             case 8:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitGame: function exitGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return _this7._disappearFadeOut();

             case 2:
              _this7._freeBags = null;
              cc.vv.gameData.GetSlotsScript()._bottomScript.ShowBtnsByState("idle");
              Global.SlotsSoundMgr.stopBgm();

             case 5:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _onInit: function _onInit() {
        this._uiBg1.active = true;
        this._uiBg2.active = false;
        var _iterator5 = _createForOfIteratorHelper(this._multItemsList), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var multItem = _step5.value;
            multItem.init();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        var _iterator6 = _createForOfIteratorHelper(this._boxItemsList), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var boxItem = _step6.value;
            boxItem.init();
            boxItem.node.active = false;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        var _iterator7 = _createForOfIteratorHelper(this._giveMultLblList), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            var lbl = _step7.value;
            this._setLabel(lbl, "");
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        cc.find("clickMaskTouch", this._uiMain).active = false;
        this._setTitleType(TitleType.GOOD_LUCK);
        this._setAllBoxItemsClickEnable(false);
        cc.find("xiangshangParticle", this._uiBg2).active = false;
      },
      _initData: function _initData() {
        this._freeBags || (this._freeBags = cc.vv.gameData.getGameInfo() ? cc.vv.gameData.getGameInfo().freeBags : cc.vv.gameData.getDeskInfo().freeBags);
        this._multConf = this._freeBags.conf || MULT_ARR;
        this._currCount = this._freeBags.currCnt;
        this._totalRound = 5;
        this._currRound = this._freeBags.picked;
        this._unpickedMult = this._freeBags.unpickedMult;
        this._historyMult = this._freeBags.historyMult;
        this._gainMult = this._freeBags.mult;
        this._prize = this._freeBags.prize;
        this._hasChoices = this._freeBags.choices;
        var curState = this._freeBags.currState;
        this._state = curState.state || 0;
        this._nextRound = curState.nextRound;
        this._nextChooseCount = curState.nextCount;
        this._options = curState.options;
        this._lastChoice = this._freeBags.lastChoice;
      },
      _restoreByServerData: function _restoreByServerData() {
        this._showModule(this._state == GameState.COLLECTING);
        var count = this._currCount;
        this._isLook || this._state != GameState.COLLECTING && this._state != GameState.FIRST_CHOOSE || (count = this._currCount - 1);
        for (var i = 0; i < this._currCount; i++) this._boxItemsList[i].node.active = true;
        var _iterator8 = _createForOfIteratorHelper(this._hasChoices), _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            var idx = _step8.value;
            this._boxItemsList[idx - 1].node.active = false;
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        for (var _i3 in this._historyMult) this._setLabel(this._giveMultLblList[_i3], this._historyMult[_i3] + "X");
        var _iterator9 = _createForOfIteratorHelper(this._multItemsList), _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
            var multItem = _step9.value;
            multItem.setColor(MULT_COLOR.GRAY);
            multItem.node.opacity = this._state == GameState.COLLECTING ? 150 : 255;
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        var _iterator10 = _createForOfIteratorHelper(this._unpickedMult), _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
            var unpickmult = _step10.value;
            this._multItemsList[this._getIdxByMult(unpickmult)].init();
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      },
      _showMain: function _showMain() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this8._uiMain.active = true;
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, error) {
                  var clickMask, _iterator11, _step11, multItem, bFinish;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      _this8._onInit();
                      _this8._freeBags = null;
                      _this8._initData();
                      _this8._restoreByServerData();
                      _context3.next = 6;
                      return _this8._appearFadeIn();

                     case 6:
                      if (!_this8._isLook) {
                        _context3.next = 12;
                        break;
                      }
                      clickMask = cc.find("clickMaskTouch", _this8._uiMain);
                      clickMask.active = true;
                      Global.btnClickEvent(clickMask, function() {
                        clickMask.active = false;
                        Global.SlotsSoundMgr.playEffect("click");
                        success();
                      });
                      _context3.next = 66;
                      break;

                     case 12:
                      if (!(!_this8._isLook && _this8._state == GameState.COLLECTING)) {
                        _context3.next = 22;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect("deal_scene_open");
                      _context3.next = 16;
                      return _this8._playCollecGiftBoxEff();

                     case 16:
                      _context3.next = 18;
                      return _this8._awaitTime(1);

                     case 18:
                      SlotsFacade.collectProgress.setProgress(0);
                      success();
                      _context3.next = 66;
                      break;

                     case 22:
                      if (!(!_this8._isLook && _this8._state == GameState.FIRST_CHOOSE)) {
                        _context3.next = 26;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect("full");
                      _context3.next = 26;
                      return _this8._playCollecGiftBoxEff();

                     case 26:
                      if (!(_this8._state == GameState.FIRST_CHOOSE)) {
                        _context3.next = 36;
                        break;
                      }
                      _iterator11 = _createForOfIteratorHelper(_this8._multItemsList);
                      try {
                        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                          multItem = _step11.value;
                          multItem.node.opacity = 255;
                        }
                      } catch (err) {
                        _iterator11.e(err);
                      } finally {
                        _iterator11.f();
                      }
                      AppLog.warn("\u7b2c\u4e00\u6b21\u9009\u62e9", _this8._currRound, _this8._totalRound);
                      _this8._showModule(false);
                      _context3.next = 33;
                      return _this8.popUIStartTips();

                     case 33:
                      _context3.next = 35;
                      return _this8._chooseYourBox();

                     case 35:
                      AppLog.warn("\u7b2c\u4e00\u6b21\u9009\u62e9---\u7ed3\u675f", _this8._currRound, _this8._totalRound);

                     case 36:
                      if (!(_this8._currRound < _this8._totalRound)) {
                        _context3.next = 56;
                        break;
                      }
                      if (!(_this8._state == GameState.CHOOSEING)) {
                        _context3.next = 47;
                        break;
                      }
                      AppLog.warn("\u9009\u62e9\u4e00\u8f6e\u5f00\u59cb", _this8._currRound, _this8._totalRound);
                      _this8._yourGiftBoxItem || _this8._showYourBox(_this8._boxItemsList[_this8._lastChoice[0] - 1], false);
                      _this8._setTitleType(TitleType.GOOD_LUCK);
                      _context3.next = 43;
                      return _this8.popUIRoundTips(_this8._nextRound, _this8._nextChooseCount);

                     case 43:
                      _this8._setTitleType(TitleType.SELECT_TIMES, _this8._nextChooseCount);
                      _context3.next = 46;
                      return _this8._chooseCurRoundBox(_this8._nextChooseCount);

                     case 46:
                      AppLog.warn("\u9009\u62e9\u4e00\u8f6e\u7ed3\u675f", _this8._currRound, _this8._totalRound);

                     case 47:
                      if (!(_this8._state == GameState.ROUND_END)) {
                        _context3.next = 54;
                        break;
                      }
                      AppLog.warn("\u4e00\u8f6e\u7ed3\u7b97", _this8._currRound, _this8._totalRound);
                      _context3.next = 51;
                      return _this8.popUIRoundResultTips();

                     case 51:
                      bFinish = _context3.sent;
                      if (!bFinish) {
                        _context3.next = 54;
                        break;
                      }
                      return _context3.abrupt("break", 56);

                     case 54:
                      _context3.next = 36;
                      break;

                     case 56:
                      if (!(_this8._state == GameState.LAST_CHOOSE)) {
                        _context3.next = 59;
                        break;
                      }
                      _context3.next = 59;
                      return _this8.popUILastRoundSelectTip(_this8._lastChoice[0], _this8._lastChoice[1]);

                     case 59:
                      AppLog.warn("\u5927\u7ed3\u7b97", _this8._currRound, _this8._totalRound);
                      _context3.next = 62;
                      return _this8.popUIEndResultTips();

                     case 62:
                      _context3.next = 64;
                      return _this8._awaitTime(1);

                     case 64:
                      SlotsFacade.collectProgress.setProgress(0);
                      success();

                     case 66:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 2:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _getIdxByMult: function _getIdxByMult(fMult) {
        for (var i in this._multConf) {
          var mult = this._multConf[i];
          if (mult == fMult) return i;
        }
      },
      _chooseYourBox: function _chooseYourBox() {
        var _this9 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
            var _iterator12, _step12, _loop;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                _this9._setAllBoxItemsClickEnable(true);
                _iterator12 = _createForOfIteratorHelper(_this9._boxItemsList);
                try {
                  _loop = function _loop() {
                    var boxItem = _step12.value;
                    boxItem.setClickCallback(_asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                      var resp, data;
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) switch (_context5.prev = _context5.next) {
                         case 0:
                          _this9._setAllBoxItemsClickEnable(false);
                          _context5.next = 3;
                          return cc.vv.gameData.reqSubGame({
                            rtype: 3,
                            act: 1,
                            choices: [ boxItem.getId() ]
                          });

                         case 3:
                          resp = _context5.sent;
                          if (!(200 === resp.code)) {
                            _context5.next = 13;
                            break;
                          }
                          data = resp.data;
                          _this9._setSubGameData(data.freeBags);
                          _this9._setTitleType(TitleType.GOOD_LUCK);
                          _context5.next = 10;
                          return _this9._showYourBox(boxItem, true);

                         case 10:
                          success();
                          _context5.next = 15;
                          break;

                         case 13:
                          AppLog.err("\u8fd4\u56de\u62a5\u9519\u4e86");
                          success();

                         case 15:
                         case "end":
                          return _context5.stop();
                        }
                      }, _callee5);
                    })));
                  };
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) _loop();
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }

               case 3:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x3) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      _showYourBox: function _showYourBox(boxItem, bFly) {
        var _this10 = this;
        if (this._yourGiftBoxItem) {
          this._yourGiftBoxItem.node.removeFromParent();
          this._yourGiftBoxItem = null;
        }
        this._yourGiftBoxItem = new BoxItem(cc.instantiate(boxItem.node), this);
        this._yourGiftBoxItem.node.parent = this._uiBg2;
        this._yourGiftBoxItem.node.active = true;
        var startPos = this._cvtToLocalPos(boxItem.node, this._uiBg2);
        var targetPos = cc.find("box_pos", this._uiBg2).position;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success) {
            var particle;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                if (!bFly) {
                  _context7.next = 8;
                  break;
                }
                boxItem.playDisappear();
                _this10._yourGiftBoxItem.node.position = startPos;
                _this10._yourGiftBoxItem.flyToYourGift(startPos, targetPos);
                _context7.next = 6;
                return _this10._awaitTime(2);

               case 6:
                _context7.next = 10;
                break;

               case 8:
                _this10._yourGiftBoxItem.node.position = targetPos;
                _this10._yourGiftBoxItem.node.scale = 1.68;

               case 10:
                particle = cc.find("xiangshangParticle", _this10._uiBg2);
                particle.active = true;
                particle.getComponent(cc.ParticleSystem).resetSystem();
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
        }());
      },
      _chooseCurRoundBox: function _chooseCurRoundBox(chooseBoxNum) {
        var _this11 = this;
        var count = 0;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success) {
            var _iterator13, _step13, _loop2;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                _this11._setAllBoxItemsClickEnable(true);
                _iterator13 = _createForOfIteratorHelper(_this11._boxItemsList);
                try {
                  _loop2 = function _loop2() {
                    var boxItem = _step13.value;
                    boxItem.setClickCallback(_asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                      var idArr, _iterator14, _step14, tItem, resp, data;
                      return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) switch (_context8.prev = _context8.next) {
                         case 0:
                          Global.SlotsSoundMgr.playEffect("click_deal");
                          _this11._setAllBoxItemsClickEnable(false);
                          if (!boxItem.hasStrokeEff()) {
                            _context8.next = 9;
                            break;
                          }
                          boxItem.removeStrokeEff();
                          count--;
                          _context8.next = 7;
                          return _this11._awaitTime(.21);

                         case 7:
                          _context8.next = 13;
                          break;

                         case 9:
                          boxItem.playPinkStroke();
                          count++;
                          _context8.next = 13;
                          return _this11._awaitTime(.15);

                         case 13:
                          _this11._setTitleType(TitleType.SELECT_TIMES, count);
                          if (!(count == chooseBoxNum)) {
                            _context8.next = 41;
                            break;
                          }
                          _this11._setTitleType(TitleType.GOOD_LUCK);
                          idArr = [];
                          _iterator14 = _createForOfIteratorHelper(_this11._boxItemsList);
                          try {
                            for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                              tItem = _step14.value;
                              tItem.node.active && tItem.hasStrokeEff() && idArr.push(tItem.getId());
                            }
                          } catch (err) {
                            _iterator14.e(err);
                          } finally {
                            _iterator14.f();
                          }
                          _this11._curRoundPickBoxList = idArr;
                          _context8.next = 22;
                          return cc.vv.gameData.reqSubGame({
                            rtype: 3,
                            act: 2,
                            choices: idArr
                          });

                         case 22:
                          resp = _context8.sent;
                          if (!(200 === resp.code)) {
                            _context8.next = 37;
                            break;
                          }
                          data = resp.data;
                          if (!(data.spcode && 967 == data.spcode)) {
                            _context8.next = 29;
                            break;
                          }
                          cc.vv.FloatTip.show("\u6d41\u7a0b\u9519\u8bef\uff01\uff01\uff01");
                          success();
                          return _context8.abrupt("return");

                         case 29:
                          _this11._setSubGameData(data.freeBags);
                          _context8.next = 32;
                          return _this11._awaitTime(.8);

                         case 32:
                          _context8.next = 34;
                          return _this11._playOpenRewardEff(idArr, data.items);

                         case 34:
                          success();
                          _context8.next = 39;
                          break;

                         case 37:
                          AppLog.err("\u8fd4\u56de\u62a5\u9519\u4e86");
                          success();

                         case 39:
                          _context8.next = 42;
                          break;

                         case 41:
                          _this11._setAllBoxItemsClickEnable(true);

                         case 42:
                         case "end":
                          return _context8.stop();
                        }
                      }, _callee8);
                    })));
                  };
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) _loop2();
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }

               case 3:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x5) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      _setTitleType: function _setTitleType(type, count) {
        for (var i = 1; i <= 3; i++) cc.find("listBg/sprTitle" + i, this._uiMain).active = false;
        cc.find("listBg/sprTitle" + type, this._uiMain).active = true;
        type == TitleType.SELECT_TIMES ? this._setLabel(cc.find("listBg/lblCount", this._uiMain), this._nextChooseCount - count) : this._setLabel(cc.find("listBg/lblCount", this._uiMain), "");
      },
      _setAllBoxItemsClickEnable: function _setAllBoxItemsClickEnable(clickEnable) {
        var _iterator15 = _createForOfIteratorHelper(this._boxItemsList), _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
            var boxItem = _step15.value;
            boxItem.node.active ? boxItem.setClickEnable(clickEnable) : boxItem.setClickEnable(false);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      },
      _playCollecGiftBoxEff: function _playCollecGiftBoxEff() {
        var _this12 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                _this12._boxItemsList[_this12._currCount - 1].playAppearEff();
                _context10.next = 3;
                return _this12._awaitTime(1);

               case 3:
                success();

               case 4:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x6) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      _playOpenRewardEff: function _playOpenRewardEff(idNumArr, multNumArr) {
        var _this13 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
            var ui, box, lblIdNum, particle, openBox, spine_light, spine_box, lblMult, spineBreak, _loop3, i;
            return regeneratorRuntime.wrap(function _callee11$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                _this13._setTitleType(TitleType.GOOD_LUCK);
                ui = cc.find("uiRewardEff", _this13.node);
                ui.active = true;
                box = cc.find("box", ui);
                box.scale = 0;
                lblIdNum = cc.find("lblIdxNum", box);
                particle = cc.find("particle", ui);
                particle.active = false;
                openBox = cc.find("openBox", ui);
                openBox.opacity = 255;
                spine_light = cc.find("spine_light", openBox);
                spine_light.scale = 0;
                spine_box = cc.find("spine_box", openBox);
                spine_box.active = false;
                lblMult = cc.find("lblMult", openBox);
                lblMult.scale = 0;
                spineBreak = cc.find("spine_break", openBox);
                spineBreak.active = false;
                _this13.scheduleOnce(function() {
                  particle.getComponent(cc.ParticleSystem).resetSystem();
                }, .5);
                Global.SlotsSoundMgr.playEffect("bonus_dialog2");
                _loop3 = regeneratorRuntime.mark(function _loop3(i) {
                  var mult1, mult2, boxItem, idx;
                  return regeneratorRuntime.wrap(function _loop3$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      mult1 = multNumArr[i][0];
                      mult2 = mult1;
                      multNumArr[i].length > 1 && (mult2 = multNumArr[i][1]);
                      _this13._setLabel(lblIdNum, idNumArr[i]);
                      _this13._setLabel(lblMult, mult2 + "X");
                      box.scale = 0;
                      lblMult.scale = 0;
                      spine_light.scale = 0;
                      openBox.opacity = 255;
                      spine_box.active = false;
                      boxItem = _this13._boxItemsList[idNumArr[i] - 1];
                      boxItem.node.active && boxItem.playDisappear();
                      mult2 >= 1e3 && Global.SlotsSoundMgr.playEffect("1000_ohno");
                      _this13._playActions(spine_light, [ cc.scaleTo(.5, 1) ]);
                      _context11.next = 16;
                      return _this13._playActions(box, [ cc.scaleTo(.4, .9), cc.scaleTo(.2, .6) ]);

                     case 16:
                      _context11.next = 18;
                      return _this13._awaitTime(.6);

                     case 18:
                      box.scale = 0;
                      i == idNumArr.length - 1 ? Global.SlotsSoundMgr.playEffect("gift_final") : Global.SlotsSoundMgr.playEffect("gift_open");
                      _context11.next = 22;
                      return _this13._playSpine(spine_box, "animation1");

                     case 22:
                      _context11.next = 24;
                      return _this13._awaitTime(.4);

                     case 24:
                      _context11.next = 26;
                      return _this13._playActions(lblMult, [ cc.scaleTo(.3, 1.4), cc.scaleTo(.1, 1) ]);

                     case 26:
                      if (!(mult1 != mult2)) {
                        _context11.next = 30;
                        break;
                      }
                      _this13.scheduleOnce(function() {
                        _this13._setLabel(lblMult, mult1 + "X");
                        Global.SlotsSoundMgr.playEffect("1000X");
                      }, 2);
                      _context11.next = 30;
                      return _this13._playSpine(spineBreak, "animation", false, function() {
                        spineBreak = false;
                      });

                     case 30:
                      idx = _this13._getIdxByMult(mult1);
                      idx && _this13._multItemsList[idx].playToGray();
                      _context11.next = 34;
                      return _this13._awaitTime(.8);

                     case 34:
                      _context11.next = 36;
                      return _this13._playActions(openBox, [ cc.fadeTo(.5, 0) ]);

                     case 36:
                      _context11.next = 38;
                      return _this13._awaitTime(.8);

                     case 38:
                     case "end":
                      return _context11.stop();
                    }
                  }, _loop3);
                });
                _context12.t0 = regeneratorRuntime.keys(idNumArr);

               case 22:
                if ((_context12.t1 = _context12.t0()).done) {
                  _context12.next = 27;
                  break;
                }
                i = _context12.t1.value;
                return _context12.delegateYield(_loop3(i), "t2", 25);

               case 25:
                _context12.next = 22;
                break;

               case 27:
                _context12.next = 29;
                return _this13._awaitTime(.2);

               case 29:
                ui.active = false;
                success();

               case 31:
               case "end":
                return _context12.stop();
              }
            }, _callee11);
          }));
          return function(_x7) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      _showModule: function _showModule(isCollecting) {
        var _this14 = this;
        var hasChange = this._uiBg1.active != isCollecting;
        if (isCollecting) {
          this._uiBg1.active = true;
          if (hasChange) {
            this._uiBg2.opacity = 255;
            cc.tween(this._uiBg2).to(.4, {
              opacity: 0
            }).call(function() {
              _this14._uiBg2.active = false;
            }).start();
          } else this._uiBg2.active = false;
        } else {
          this._uiBg1.active = false;
          this._uiBg2.active = true;
          if (hasChange) {
            this._uiBg2.opacity = 0;
            cc.tween(this._uiBg2).to(.4, {
              opacity: 255
            }).start();
          }
        }
      },
      popUIStartTips: function popUIStartTips() {
        var _this15 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
             case 0:
              return _context16.abrupt("return", new Promise(function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
                  var tips, ui, btn, func;
                  return regeneratorRuntime.wrap(function _callee14$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      tips = cc.find("uiStartTips", _this15.node);
                      tips.active = true;
                      ui = cc.find("ui", tips);
                      ui.scale = 0;
                      btn = ui.getChildByName("btnStart");
                      btn.getComponent(cc.Button).enabled = false;
                      Global.SlotsSoundMgr.playEffect("bonus_dialog1");
                      _context15.next = 9;
                      return _this15._playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 9:
                      _this15._setTitleType(TitleType.CHOOSE_GIFT);
                      btn.getComponent(cc.Button).enabled = true;
                      btn.off("click");
                      func = function() {
                        var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                          return regeneratorRuntime.wrap(function _callee12$(_context13) {
                            while (1) switch (_context13.prev = _context13.next) {
                             case 0:
                              btn.getComponent(cc.Button).enabled = false;
                              _context13.next = 3;
                              return _this15._playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);

                             case 3:
                              tips.active = false;
                              success();

                             case 5:
                             case "end":
                              return _context13.stop();
                            }
                          }, _callee12);
                        }));
                        return function func() {
                          return _ref10.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn, func);
                      Global.btnClickEvent(btn, _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                        return regeneratorRuntime.wrap(function _callee13$(_context14) {
                          while (1) switch (_context14.prev = _context14.next) {
                           case 0:
                            btn.stopAllActions();
                            _context14.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context14.stop();
                          }
                        }, _callee13);
                      })), _this15);

                     case 15:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee14);
                }));
                return function(_x8) {
                  return _ref9.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context16.stop();
            }
          }, _callee15);
        }))();
      },
      popUIRoundTips: function popUIRoundTips(roundNum, pickNum) {
        var _this16 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
             case 0:
              return _context18.abrupt("return", new Promise(function() {
                var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success) {
                  var tips, ui, normal, lastChance;
                  return regeneratorRuntime.wrap(function _callee16$(_context17) {
                    while (1) switch (_context17.prev = _context17.next) {
                     case 0:
                      tips = cc.find("uiRoundTips", _this16.node);
                      tips.active = true;
                      ui = tips.getChildByName("ui");
                      ui.scale = 0;
                      normal = cc.find("noraml", ui);
                      lastChance = cc.find("lastChance", ui);
                      if (roundNum == _this16._totalRound) {
                        normal.active = false;
                        lastChance.active = true;
                      } else {
                        normal.active = true;
                        lastChance.active = false;
                        _this16._setLabel(cc.find("noraml/lblRound", ui), roundNum);
                        _this16._setLabel(cc.find("noraml/lblPickNum", ui), pickNum);
                      }
                      _context17.next = 9;
                      return _this16._playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 9:
                      _context17.next = 11;
                      return _this16._awaitTime(1);

                     case 11:
                      Global.SlotsSoundMgr.playEffect("change");
                      _context17.next = 14;
                      return _this16._playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);

                     case 14:
                      tips.active = false;
                      success();

                     case 16:
                     case "end":
                      return _context17.stop();
                    }
                  }, _callee16);
                }));
                return function(_x9) {
                  return _ref12.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context18.stop();
            }
          }, _callee17);
        }))();
      },
      popUIRoundResultTips: function popUIRoundResultTips() {
        var _this17 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          return regeneratorRuntime.wrap(function _callee23$(_context24) {
            while (1) switch (_context24.prev = _context24.next) {
             case 0:
              return _context24.abrupt("return", new Promise(function() {
                var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(success) {
                  var tips, btn, ui, desc, func;
                  return regeneratorRuntime.wrap(function _callee22$(_context23) {
                    while (1) switch (_context23.prev = _context23.next) {
                     case 0:
                      tips = cc.find("uiRoundResultTips", _this17.node);
                      tips.active = true;
                      btn = tips.getChildByName("btnLetter");
                      btn.zIndex = 2;
                      btn.getComponent(cc.Button).enabled = false;
                      ui = tips.getChildByName("ui");
                      ui.zIndex = 1;
                      ui.active = false;
                      ui.y = -185;
                      _this17._setLabel(ui.getChildByName("lblMult"), _this17._gainMult + "X");
                      desc = Global.convertNumToShort(_this17._prize) + " X " + _this17._gainMult + " = " + Global.convertNumToShort(_this17._prize * _this17._gainMult);
                      _this17._setLabel(ui.getChildByName("lblContent"), desc);
                      tips.getChildByName("spine_btm").active = false;
                      tips.getChildByName("spine").zIndex = 2;
                      Global.SlotsSoundMgr.playEffect("envelope");
                      _context23.next = 17;
                      return _this17._playSpine(tips.getChildByName("spine"), "animation1");

                     case 17:
                      Global.SlotsSoundMgr.playEffect("envelope_intro");
                      _this17._playSpine(tips.getChildByName("spine"), "animation2", true);
                      btn.getComponent(cc.Button).enabled = true;
                      btn.off("click");
                      func = function() {
                        var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
                          var btnTake, btnLeave;
                          return regeneratorRuntime.wrap(function _callee20$(_context21) {
                            while (1) switch (_context21.prev = _context21.next) {
                             case 0:
                              btn.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect("envelope_open");
                              _context21.next = 4;
                              return _this17._playSpine(tips.getChildByName("spine"), "animation3");

                             case 4:
                              ui.active = true;
                              ui.scale = 1;
                              ui.angle = -18;
                              _this17._playSpine(tips.getChildByName("spine"), "animation4");
                              _this17._playSpine(tips.getChildByName("spine_btm"), "animation5");
                              _context21.next = 11;
                              return _this17._awaitTime(1.5);

                             case 11:
                              _context21.next = 13;
                              return _this17._playActions(ui, [ cc.moveTo(.3, cc.v2(ui.x, 200)), cc.callFunc(function() {
                                ui.zIndex = 3;
                              }), cc.spawn(cc.moveTo(.3, cc.v2(ui.x, -185)), cc.scaleTo(.3, 1.5), cc.rotateTo(.3, 0)) ]);

                             case 13:
                              Global.SlotsSoundMgr.playEffect("envelope_out");
                              btnTake = ui.getChildByName("btnTakeIt");
                              btnTake.off("click");
                              btnTake.getComponent(cc.Button).enabled = true;
                              Global.btnClickEvent(btnTake, _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                                var resp, data;
                                return regeneratorRuntime.wrap(function _callee18$(_context19) {
                                  while (1) switch (_context19.prev = _context19.next) {
                                   case 0:
                                    btnTake.getComponent(cc.Button).enabled = false;
                                    _context19.next = 3;
                                    return cc.vv.gameData.reqSubGame({
                                      rtype: 3,
                                      act: 3,
                                      takeIt: true
                                    });

                                   case 3:
                                    resp = _context19.sent;
                                    if (200 === resp.code) {
                                      data = resp.data;
                                      data.freeBags.winCoin = data.winCoin;
                                      data.freeBags.mult = data.mult;
                                      data.freeBags.prize = data.prize;
                                      _this17._setSubGameData(data.freeBags);
                                      success(true);
                                    } else {
                                      AppLog.err("\u8fd4\u56de\u62a5\u9519\u4e86");
                                      success();
                                    }
                                    tips.active = false;
                                    success();

                                   case 7:
                                   case "end":
                                    return _context19.stop();
                                  }
                                }, _callee18);
                              })), _this17);
                              btnLeave = ui.getChildByName("btnLeaveIt");
                              btnLeave.off("click");
                              btnLeave.getComponent(cc.Button).enabled = true;
                              Global.btnClickEvent(btnLeave, _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
                                var resp, data, i;
                                return regeneratorRuntime.wrap(function _callee19$(_context20) {
                                  while (1) switch (_context20.prev = _context20.next) {
                                   case 0:
                                    btnLeave.getComponent(cc.Button).enabled = false;
                                    _context20.next = 3;
                                    return cc.vv.gameData.reqSubGame({
                                      rtype: 3,
                                      act: 3,
                                      takeIt: false
                                    });

                                   case 3:
                                    resp = _context20.sent;
                                    if (200 === resp.code) {
                                      data = resp.data;
                                      _this17._setSubGameData(data.freeBags);
                                      for (i in _this17._historyMult) _this17._setLabel(_this17._giveMultLblList[i], _this17._historyMult[i] + "X");
                                      success(false);
                                    } else {
                                      AppLog.err("\u8fd4\u56de\u62a5\u9519\u4e86");
                                      success();
                                    }
                                    tips.active = false;
                                    success();

                                   case 7:
                                   case "end":
                                    return _context20.stop();
                                  }
                                }, _callee19);
                              })), _this17);

                             case 22:
                             case "end":
                              return _context21.stop();
                            }
                          }, _callee20);
                        }));
                        return function func() {
                          return _ref14.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn, func);
                      Global.btnClickEvent(btn, _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
                        return regeneratorRuntime.wrap(function _callee21$(_context22) {
                          while (1) switch (_context22.prev = _context22.next) {
                           case 0:
                            btn.stopAllActions();
                            _context22.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context22.stop();
                          }
                        }, _callee21);
                      })), _this17);

                     case 24:
                     case "end":
                      return _context23.stop();
                    }
                  }, _callee22);
                }));
                return function(_x10) {
                  return _ref13.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context24.stop();
            }
          }, _callee23);
        }))();
      },
      popUILastRoundSelectTip: function popUILastRoundSelectTip(keepId, tradeId) {
        var _this18 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee28() {
          return regeneratorRuntime.wrap(function _callee28$(_context29) {
            while (1) switch (_context29.prev = _context29.next) {
             case 0:
              return _context29.abrupt("return", new Promise(function() {
                var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee27(success) {
                  var tips, ui, btnKeep, btnTrade, endCall1, endCall2;
                  return regeneratorRuntime.wrap(function _callee27$(_context28) {
                    while (1) switch (_context28.prev = _context28.next) {
                     case 0:
                      tips = cc.find("uiLastRoundSelectTips", _this18.node);
                      tips.active = true;
                      ui = tips.getChildByName("ui");
                      ui.scale = 0;
                      cc.find("Item1", ui).active = true;
                      _this18._setLabel(cc.find("Item1/lblIdxNum", ui), keepId);
                      cc.find("Item2", ui).active = true;
                      _this18._setLabel(cc.find("Item2/lblIdxNum", ui), tradeId);
                      btnKeep = ui.getChildByName("btnKeep");
                      btnKeep.getComponent(cc.Button).enabled = false;
                      btnTrade = ui.getChildByName("btnTrade");
                      btnTrade.getComponent(cc.Button).enabled = false;
                      Global.SlotsSoundMgr.playEffect("deal_scene_open");
                      _context28.next = 15;
                      return _this18._playActions(ui, [ cc.scaleTo(.3, 1.8), cc.scaleTo(.1, 1.5) ]);

                     case 15:
                      endCall1 = function endCall1() {
                        btnKeep.getComponent(cc.Button).enabled = false;
                        btnTrade.getComponent(cc.Button).enabled = false;
                      };
                      endCall2 = function() {
                        var _ref19 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24() {
                          return regeneratorRuntime.wrap(function _callee24$(_context25) {
                            while (1) switch (_context25.prev = _context25.next) {
                             case 0:
                              _context25.next = 2;
                              return _this18._playActions(ui, [ cc.scaleTo(.1, 1.8), cc.scaleTo(.3, 0) ]);

                             case 2:
                              tips.active = false;
                              success();

                             case 4:
                             case "end":
                              return _context25.stop();
                            }
                          }, _callee24);
                        }));
                        return function endCall2() {
                          return _ref19.apply(this, arguments);
                        };
                      }();
                      btnKeep.getComponent(cc.Button).enabled = true;
                      btnKeep.off("click");
                      Global.btnClickEvent(btnKeep, _asyncToGenerator(regeneratorRuntime.mark(function _callee25() {
                        var resp, data;
                        return regeneratorRuntime.wrap(function _callee25$(_context26) {
                          while (1) switch (_context26.prev = _context26.next) {
                           case 0:
                            endCall1();
                            _context26.next = 3;
                            return cc.vv.gameData.reqSubGame({
                              rtype: 3,
                              act: 4,
                              keep: true
                            });

                           case 3:
                            resp = _context26.sent;
                            if (!(200 === resp.code)) {
                              _context26.next = 16;
                              break;
                            }
                            data = resp.data;
                            data.freeBags.winCoin = data.winCoin;
                            data.freeBags.mult = data.mult;
                            data.freeBags.prize = data.prize;
                            _this18._setSubGameData(data.freeBags);
                            cc.find("Item1", ui).active = false;
                            _context26.next = 13;
                            return _this18._playOpenRewardEff([ keepId ], [ [ data.mult ] ]);

                           case 13:
                            success(false);
                            _context26.next = 18;
                            break;

                           case 16:
                            AppLog.err("\u8fd4\u56de\u62a5\u9519\u4e86");
                            success();

                           case 18:
                            endCall2();

                           case 19:
                           case "end":
                            return _context26.stop();
                          }
                        }, _callee25);
                      })));
                      btnTrade.getComponent(cc.Button).enabled = true;
                      btnTrade.off("click");
                      Global.btnClickEvent(btnTrade, _asyncToGenerator(regeneratorRuntime.mark(function _callee26() {
                        var resp, data;
                        return regeneratorRuntime.wrap(function _callee26$(_context27) {
                          while (1) switch (_context27.prev = _context27.next) {
                           case 0:
                            endCall1();
                            _context27.next = 3;
                            return cc.vv.gameData.reqSubGame({
                              rtype: 3,
                              act: 4,
                              keep: false
                            });

                           case 3:
                            resp = _context27.sent;
                            if (!(200 === resp.code)) {
                              _context27.next = 16;
                              break;
                            }
                            data = resp.data;
                            data.freeBags.winCoin = data.winCoin;
                            data.freeBags.mult = data.mult;
                            data.freeBags.prize = data.prize;
                            _this18._setSubGameData(data.freeBags);
                            cc.find("Item2", ui).active = false;
                            _context27.next = 13;
                            return _this18._playOpenRewardEff([ tradeId ], [ [ data.mult ] ]);

                           case 13:
                            success(false);
                            _context27.next = 18;
                            break;

                           case 16:
                            AppLog.err("\u8fd4\u56de\u62a5\u9519\u4e86");
                            success();

                           case 18:
                            endCall2();

                           case 19:
                           case "end":
                            return _context27.stop();
                          }
                        }, _callee26);
                      })));

                     case 23:
                     case "end":
                      return _context28.stop();
                    }
                  }, _callee27);
                }));
                return function(_x11) {
                  return _ref18.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context29.stop();
            }
          }, _callee28);
        }))();
      },
      popUIEndResultTips: function popUIEndResultTips() {
        var _this19 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee32() {
          return regeneratorRuntime.wrap(function _callee32$(_context33) {
            while (1) switch (_context33.prev = _context33.next) {
             case 0:
              return _context33.abrupt("return", new Promise(function() {
                var _ref22 = _asyncToGenerator(regeneratorRuntime.mark(function _callee31(success) {
                  var tips, ui, desc, btn, func;
                  return regeneratorRuntime.wrap(function _callee31$(_context32) {
                    while (1) switch (_context32.prev = _context32.next) {
                     case 0:
                      tips = cc.find("uiResultDialuage", _this19.node);
                      tips.active = true;
                      ui = tips.getChildByName("ui");
                      ui.scale = 0;
                      _this19._setLabel(ui.getChildByName("lblCoinNum"), Global.FormatNumToComma(_this19._freeBags.winCoin));
                      desc = _this19._gainMult + " X " + Global.convertNumToShort(_this19._prize) + " = " + Global.convertNumToShort(_this19._freeBags.winCoin);
                      _this19._setLabel(ui.getChildByName("lblContent"), desc);
                      btn = ui.getChildByName("btnCollect");
                      btn.getComponent(cc.Button).enabled = false;
                      Global.SlotsSoundMgr.playEffect("multipler");
                      _context32.next = 12;
                      return _this19._playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 12:
                      btn.getComponent(cc.Button).enabled = true;
                      btn.off("click");
                      func = function() {
                        var _ref23 = _asyncToGenerator(regeneratorRuntime.mark(function _callee29() {
                          return regeneratorRuntime.wrap(function _callee29$(_context30) {
                            while (1) switch (_context30.prev = _context30.next) {
                             case 0:
                              btn.getComponent(cc.Button).enabled = false;
                              _context30.next = 3;
                              return _this19._playActions(ui, [ cc.scaleTo(.1, 1.2), cc.scaleTo(.3, 0) ]);

                             case 3:
                              tips.active = false;
                              success();

                             case 5:
                             case "end":
                              return _context30.stop();
                            }
                          }, _callee29);
                        }));
                        return function func() {
                          return _ref23.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn, func);
                      Global.btnClickEvent(btn, _asyncToGenerator(regeneratorRuntime.mark(function _callee30() {
                        return regeneratorRuntime.wrap(function _callee30$(_context31) {
                          while (1) switch (_context31.prev = _context31.next) {
                           case 0:
                            btn.stopAllActions();
                            _context31.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context31.stop();
                          }
                        }, _callee30);
                      })));

                     case 17:
                     case "end":
                      return _context32.stop();
                    }
                  }, _callee31);
                }));
                return function(_x12) {
                  return _ref22.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context33.stop();
            }
          }, _callee32);
        }))();
      },
      _setSubGameData: function _setSubGameData(freeBags) {
        if (freeBags) {
          this._freeBags = freeBags;
          this._initData();
        }
      },
      _appearFadeIn: function _appearFadeIn() {
        var _this20 = this;
        return new Promise(function(success) {
          _this20.node.active = true;
          _this20.node.opacity = 0;
          cc.tween(_this20.node).to(.3, {
            opacity: 255
          }).call(function() {
            success();
          }).start();
        });
      },
      _disappearFadeOut: function _disappearFadeOut() {
        var _this21 = this;
        return new Promise(function(success) {
          _this21.node.active = true;
          _this21.node.opacity = 255;
          cc.tween(_this21.node).to(.3, {
            opacity: 0
          }).call(function() {
            _this21.node.active = false;
            success();
          }).start();
        });
      },
      _playSpine: function _playSpine(node) {
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
      _playActions: function _playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      _awaitTime: function _awaitTime(time) {
        var _this22 = this;
        return new Promise(function(success) {
          _this22.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      _setLabel: function _setLabel(lblNode, str) {
        lblNode && (lblNode.getComponent(cc.Label).string = str);
      },
      _cvtToLocalPos: function _cvtToLocalPos(node, localNode) {
        return localNode.convertToNodeSpaceAR(node.parent.convertToWorldSpaceAR(node.position));
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckySanta_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6dd97K6R2NLLpQhCeiGoAko", "LuckySanta_Pop");
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
      showFreegameResultDialog: function showFreegameResultDialog(bFree, winCoin) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  var free_game_win, ui, btnCollect, func;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      free_game_win = bFree ? cc.find("uiWinCoinDialouge_o", _this.node) : cc.find("uiWinCoinDialouge_h", _this.node);
                      free_game_win.active = true;
                      ui = free_game_win.getChildByName("uiResult");
                      ui.scale = 0;
                      ui.getChildByName("lblWinCoin").getComponent(cc.Label).string = "";
                      btnCollect = ui.getChildByName("btn_collect");
                      btnCollect.getComponent(cc.Button).enabled = false;
                      Global.SlotsSoundMgr.playEffect("normal_dialog_show2");
                      _context3.next = 10;
                      return _this.playActions(ui, [ cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1) ]);

                     case 10:
                      Global.SlotsSoundMgr.playEffect("rollNum");
                      Global.doRoallNumEff(ui.getChildByName("lblWinCoin"), 0, winCoin, 3, null, null, 0, true);
                      _context3.next = 14;
                      return _this.delayTime(2);

                     case 14:
                      btnCollect.getComponent(cc.Button).enabled = true;
                      btnCollect.off("click");
                      func = function() {
                        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                             case 0:
                              btnCollect.getComponent(cc.Button).enabled = false;
                              Global.SlotsSoundMgr.playEffect("click");
                              Global.SlotsSoundMgr.playEffect("normal_dialog_close");
                              _context.next = 5;
                              return _this.playActions(ui, [ cc.scaleTo(.3, 1.8), cc.scaleTo(.1, 0) ]);

                             case 5:
                              free_game_win.active = false;
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
                      cc.vv.gameData.checkAutoPlay(btnCollect, func);
                      Global.btnClickEvent(btnCollect, _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                           case 0:
                            btnCollect.stopAllActions();
                            _context2.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context2.stop();
                          }
                        }, _callee2);
                      })), _this);

                     case 19:
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
      showStarBonusSelect: function showStarBonusSelect(eachWinsCoin) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
                  var uiSelect, ui, btm_info, item1, item2, bg, select_tips, func;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      uiSelect = cc.find("uiStarBonusSelect", _this2.node);
                      uiSelect.active = true;
                      ui = uiSelect.getChildByName("ui");
                      btm_info = cc.find("btm_info", ui);
                      cc.find("lblWinCoin", btm_info).getComponent(cc.Label).string = Global.convertNumToShort(eachWinsCoin);
                      item1 = cc.find("item1", ui);
                      item2 = cc.find("item2", ui);
                      cc.find("spine", item1).active = false;
                      cc.find("spine", item2).active = false;
                      Global.showSpriteGray(cc.find("Background", item1), false);
                      Global.showSpriteGray(cc.find("text", item1), false);
                      Global.showSpriteGray(cc.find("Background", item2), false);
                      Global.showSpriteGray(cc.find("text", item2), false);
                      Global.SlotsSoundMgr.playEffect("show_dialog");
                      item1.getComponent(cc.Button).enabled = false;
                      item2.getComponent(cc.Button).enabled = false;
                      cc.tween(item1).call(function() {
                        item1.scale = 2;
                        item1.opacity = 0;
                      }).to(.2, {
                        scale: 1,
                        opacity: 255
                      }).start();
                      cc.tween(item2).call(function() {
                        item2.scale = 2;
                        item2.opacity = 0;
                      }).delay(.2).to(.2, {
                        scale: 1,
                        opacity: 255
                      }).start();
                      cc.tween(btm_info).call(function() {
                        btm_info.scale = 2;
                        btm_info.opacity = 0;
                      }).delay(.4).to(.2, {
                        scale: 1,
                        opacity: 255
                      }).start();
                      bg = cc.find("bg", ui);
                      bg.opacity = 0;
                      _context8.next = 23;
                      return _this2.playActions(bg, [ cc.fadeIn(.5) ]);

                     case 23:
                      item1.getComponent(cc.Button).enabled = true;
                      item2.getComponent(cc.Button).enabled = true;
                      _this2.playSpine(cc.find("spine", item1), null, "animation1", true);
                      _this2.playSpine(cc.find("spine", item2), null, "animation3", true);
                      select_tips = cc.find("select_tips", btm_info);
                      select_tips.stopAllActions();
                      select_tips.scale = 1;
                      select_tips.runAction(cc.repeatForever(cc.sequence(cc.delayTime(1), cc.scaleTo(.2, 1.3), cc.scaleTo(.2, 1.1), cc.scaleTo(.2, 1.3), cc.scaleTo(.2, 1))));
                      item1.off("click");
                      Global.btnClickEvent(item1, _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) switch (_context5.prev = _context5.next) {
                           case 0:
                            item2.stopAllActions();
                            Global.SlotsSoundMgr.playEffect("choose");
                            select_tips.stopAllActions();
                            item1.getComponent(cc.Button).enabled = false;
                            item2.getComponent(cc.Button).enabled = false;
                            _this2.playSpine(cc.find("spine", item1), null, "animation2", false);
                            cc.find("spine", item2).active = false;
                            Global.showSpriteGray(cc.find("Background", item2), true);
                            Global.showSpriteGray(cc.find("text", item2), true);
                            _context5.next = 11;
                            return _this2.delayTime(2.3);

                           case 11:
                            if (!Global.StarBonusRespin) {
                              _context5.next = 14;
                              break;
                            }
                            _context5.next = 14;
                            return Global.StarBonusRespin.onSelected();

                           case 14:
                            uiSelect.active = false;
                            success();

                           case 16:
                           case "end":
                            return _context5.stop();
                          }
                        }, _callee5);
                      })), _this2);
                      item2.off("click");
                      func = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) switch (_context6.prev = _context6.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("choose");
                              select_tips.stopAllActions();
                              item1.getComponent(cc.Button).enabled = false;
                              item2.getComponent(cc.Button).enabled = false;
                              cc.find("spine", item1).active = false;
                              _this2.playSpine(cc.find("spine", item2), null, "animation4", true);
                              _context6.next = 8;
                              return _this2.delayTime(2.3);

                             case 8:
                              if (!SlotsFacade.bonusFreeGame) {
                                _context6.next = 11;
                                break;
                              }
                              _context6.next = 11;
                              return SlotsFacade.bonusFreeGame.onSelected();

                             case 11:
                              uiSelect.active = false;
                              success();

                             case 13:
                             case "end":
                              return _context6.stop();
                            }
                          }, _callee6);
                        }));
                        return function func() {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      if (cc.vv.gameData.isNeedAutoPlay()) {
                        item2.stopAllActions();
                        cc.tween(item2).delay(cc.vv.gameData.getManualAutoPlayTime()).call(function() {
                          func();
                        }).start();
                      }
                      Global.btnClickEvent(item2, _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) switch (_context7.prev = _context7.next) {
                           case 0:
                            item2.stopAllActions();
                            _context7.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context7.stop();
                          }
                        }, _callee7);
                      })), _this2);

                     case 37:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x2) {
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
      showTransition: function showTransition() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var spine;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("nudge");
              spine = cc.find("spine_transition", _this3.node).getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, "skill", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context10.next = 7;
              return SlotsFacade.delayTime(1.2);

             case 7:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      showTransition2: function showTransition2() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var spine;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("nudge");
              spine = cc.find("spine_transition2", _this4.node).getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, "animation", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _context11.next = 7;
              return SlotsFacade.delayTime(1.8);

             case 7:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
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
      stopSpine: function stopSpine(node) {
        var track = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        node && node.getComponent(sp.Skeleton) && node.getComponent(sp.Skeleton).clearTrack(track);
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
  LuckySanta_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0d9b1LMZm1DwK1DXBMDWHjJ", "LuckySanta_Slots");
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
        _respinSlot: null,
        _isInitEntry: true
      },
      Init: function Init() {
        this._isInitEntry = true;
        Global.registerEvent(EventId.END_QUEUE_POP, this.onEventEndQueuePop, this);
        this._super();
      },
      RegisterEvent: function RegisterEvent() {},
      start: function start() {
        this._super();
        this._respinSlot = cc.find("slots_respin", this.node.parent).addComponent("LuckySanta_StarBonusRespin");
        this._respinSlot.node.active = true;
        this._respinSlot.Init();
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._bottomScript.ShowBtnsByState("moveing_1");
              if (!cc.vv.gameData.getDeskInfo().select) {
                _context.next = 12;
                break;
              }
              if (!(2 == cc.vv.gameData.getDeskInfo().select.state)) {
                _context.next = 9;
                break;
              }
              _context.next = 5;
              return cc.vv.gameData.awaitTime(.5);

             case 5:
              _context.next = 7;
              return SlotsFacade.popup.showStarBonusSelect(cc.vv.gameData.getDeskInfo().coinBonus.silvery || 0);

             case 7:
              _context.next = 12;
              break;

             case 9:
              if (!(3 == cc.vv.gameData.getDeskInfo().select.state)) {
                _context.next = 12;
                break;
              }
              _context.next = 12;
              return SlotsFacade.pickGift.enterGame();

             case 12:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!(deskInfo.christmas && deskInfo.christmas.state)) {
                _context.next = 16;
                break;
              }
              _context.next = 16;
              return SlotsFacade.pickBonus.enterGame(deskInfo.christmas, true);

             case 16:
              deskInfo.coinBonus && deskInfo.coinBonus.state || _this._bottomScript.CanDoNextRound();

             case 17:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onEventEndQueuePop: function onEventEndQueuePop() {
        if (this._isInitEntry) {
          this._isInitEntry = false;
          var isFree = cc.vv.gameData.GetTotalFree() > 0;
          isFree || this.playEnterGameEff();
        }
      },
      playEnterGameEff: function playEnterGameEff() {
        Global.SlotsSoundMgr.playEffect("enter");
      },
      StartMove: function StartMove() {
        Global.SlotsSoundMgr.playNormalBgm();
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        SlotsFacade.collectProgress && SlotsFacade.collectProgress.setBtnsClickEnable(false);
        this._stopTime = this.GetStopTime();
        SlotsFacade.bonusFreeGame.bEnable() && SlotsFacade.bonusFreeGame.setRestSpinTimes(cc.vv.gameData.GetFreeTime() || 0);
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
        for (var _i = 0; _i < this._reels.length; _i++) {
          var item = this._reels[_i];
          var reelRes = reelResults[_i];
          item.SetResult(reelRes);
        }
      },
      getCoinData: function getCoinData(idx) {
        if (this._gameInfo.coinBonus) for (var key in this._gameInfo.coinBonus.info) {
          var pos = parseInt(key.split("_")[1]);
          if (pos == idx) {
            var item = this._gameInfo.coinBonus.info[key];
            return {
              t: "coin",
              type: item.type,
              num: item.num
            };
          }
        }
        return null;
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        var cards = msg.resultCards;
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
      },
      showCollectEnegy: function showCollectEnegy() {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
            var energyData, posArr;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                energyData = cc.vv.gameData.energyData;
                if (!energyData) {
                  _context2.next = 13;
                  break;
                }
                posArr = [];
                _this2._reels.forEach(function(reel) {
                  if (reel.node.active) for (var i = 0; i < _this2._row; i++) {
                    var symbol = reel.GetSymbolByRow(i);
                    symbol.GetShowId() == cc.vv.gameData.getGameCfg().collectId && posArr.push(symbol.node.parent.convertToWorldSpaceAR(symbol.node.position));
                  }
                });
                if (!(posArr.length > 0 && SlotsFacade.collectProgress)) {
                  _context2.next = 13;
                  break;
                }
                if (!(energyData.totalCoin / energyData.needCoins >= 1)) {
                  _context2.next = 12;
                  break;
                }
                _context2.next = 8;
                return SlotsFacade.collectProgress.collectEnergy(posArr, energyData.totalCoin / energyData.needCoins);

               case 8:
                _context2.next = 10;
                return SlotsFacade.pickGift.enterGame();

               case 10:
                _context2.next = 13;
                break;

               case 12:
                SlotsFacade.collectProgress.collectEnergy(posArr, energyData.totalCoin / energyData.needCoins);

               case 13:
                success();

               case 14:
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
      showCollectWild: function showCollectWild() {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
            var posArr, isTriggerSubGame;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                posArr = [];
                _this3._reels.forEach(function(reel) {
                  if (reel.node.active) for (var i = 0; i < _this3._row; i++) {
                    var symbol = reel.GetSymbolByRow(i);
                    symbol.GetShowId() == cc.vv.gameData.getGameCfg().wildId && posArr.push(symbol.node.parent.convertToWorldSpaceAR(cc.v2(symbol.node.position.x + 40, symbol.node.position.y - 40)));
                  }
                });
                if (!(posArr.length > 0 && SlotsFacade.wildCollect)) {
                  _context3.next = 10;
                  break;
                }
                isTriggerSubGame = cc.vv.gameData.getGameInfo().select && 1 == cc.vv.gameData.getGameInfo().select.state;
                if (!isTriggerSubGame) {
                  _context3.next = 9;
                  break;
                }
                _context3.next = 7;
                return SlotsFacade.wildCollect.collectWild(posArr, isTriggerSubGame);

               case 7:
                _context3.next = 10;
                break;

               case 9:
                SlotsFacade.wildCollect.collectWild(posArr, isTriggerSubGame);

               case 10:
                success();

               case 11:
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
      triggerStarBonus: function triggerStarBonus() {
        var _this4 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
            var symbolArr, btm_bonus_remaining, tipsBg, lblCoin, coinNum, pl_collect_fly, lblPostion, _loop, _i2, _symbolArr;
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                symbolArr = [];
                _this4._reels.forEach(function(reel) {
                  if (reel.node.active) for (var i = 2; i >= 0; i--) {
                    var symbol = reel.GetSymbolByRow(i);
                    if (symbol.GetShowId() == cc.vv.gameData.getGameCfg().collectId) {
                      symbol.playStarAnimation();
                      symbolArr.push(symbol);
                    }
                  }
                });
                _context5.next = 4;
                return _this4.awaitTime(2);

               case 4:
                btm_bonus_remaining = cc.find("btm_bonus_remaining", _this4.node);
                tipsBg = cc.find("btm_win_tips/tips_bg", btm_bonus_remaining);
                tipsBg.active = true;
                tipsBg.y = -tipsBg.height;
                lblCoin = cc.find("lblWinCoin", tipsBg);
                lblCoin.getComponent(cc.Label).string = "";
                cc.tween(tipsBg).to(.3, {
                  y: 0
                }).start();
                _context5.next = 13;
                return _this4.awaitTime(.5);

               case 13:
                coinNum = 0;
                pl_collect_fly = cc.find("pl_collect_fly", btm_bonus_remaining);
                lblPostion = btm_bonus_remaining.convertToNodeSpaceAR(lblCoin.parent.convertToWorldSpaceAR(lblCoin.position));
                _loop = regeneratorRuntime.mark(function _loop() {
                  var symbol;
                  return regeneratorRuntime.wrap(function _loop$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      symbol = _symbolArr[_i2];
                      pl_collect_fly.active = true;
                      pl_collect_fly.position = btm_bonus_remaining.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      pl_collect_fly.getComponent(cc.ParticleSystem).resetSystem();
                      Global.SlotsSoundMgr.playEffect("add");
                      cc.tween(pl_collect_fly).to(.8, {
                        position: lblPostion
                      }).call(function() {
                        pl_collect_fly.active = false;
                        coinNum += symbol.GetCoinNum();
                        lblCoin.getComponent(cc.Label).string = Global.convertNumToShort(coinNum);
                      }).start();
                      _context4.next = 8;
                      return _this4.awaitTime(.8);

                     case 8:
                     case "end":
                      return _context4.stop();
                    }
                  }, _loop);
                });
                _i2 = 0, _symbolArr = symbolArr;

               case 18:
                if (!(_i2 < _symbolArr.length)) {
                  _context5.next = 23;
                  break;
                }
                return _context5.delegateYield(_loop(), "t0", 20);

               case 20:
                _i2++;
                _context5.next = 18;
                break;

               case 23:
                _context5.next = 25;
                return _this4.awaitTime(.3);

               case 25:
                cc.tween(tipsBg).to(.3, {
                  y: -tipsBg.height
                }).start();
                _context5.next = 28;
                return _this4.awaitTime(.5);

               case 28:
                success();

               case 29:
               case "end":
                return _context5.stop();
              }
            }, _callee4);
          }));
          return function(_x3) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var _iterator, _step, reel, state, bNextRound;
          return regeneratorRuntime.wrap(function _callee5$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _iterator = _createForOfIteratorHelper(_this5._reels);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  reel = _step.value;
                  reel.ShowAntiEffect(false);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _this5.ShowWinTrace();
              state = cc.vv.gameData.getGameInfo().select.state;
              if (!(cc.vv.gameData.isOpenCollectProgress() && 2 != state && !SlotsFacade.bonusFreeGame.bEnable())) {
                _context6.next = 7;
                break;
              }
              _context6.next = 7;
              return _this5.showCollectEnegy();

             case 7:
              if (!(2 != state && !SlotsFacade.bonusFreeGame.bEnable())) {
                _context6.next = 10;
                break;
              }
              _context6.next = 10;
              return _this5.showCollectWild();

             case 10:
              if (!SlotsFacade.bonusFreeGame.bEnable()) {
                _context6.next = 14;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              _context6.next = 14;
              return SlotsFacade.bonusFreeGame.playCollectSilverStar(_this5._reels);

             case 14:
              _context6.next = 16;
              return _this5.playBottomWin();

             case 16:
              bNextRound = true;
              if (!(2 == cc.vv.gameData.getGameInfo().select.state)) {
                _context6.next = 23;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("bell");
              Global.SlotsSoundMgr.playEffect("trigger_star_bonus");
              _context6.next = 23;
              return _this5.triggerStarBonus();

             case 23:
              if (!(1 == cc.vv.gameData.getGameInfo().select.state)) {
                _context6.next = 32;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              SlotsFacade.character.triBonusAnim();
              _context6.next = 28;
              return cc.vv.gameData.awaitTime(.5);

             case 28:
              _context6.next = 30;
              return SlotsFacade.pickBonus.enterGame(cc.vv.gameData.getGameInfo().christmas);

             case 30:
              _context6.next = 38;
              break;

             case 32:
              if (!(2 == cc.vv.gameData.getGameInfo().select.state)) {
                _context6.next = 38;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.stopBgm();
              _context6.next = 37;
              return SlotsFacade.popup.showStarBonusSelect(cc.vv.gameData.getGameInfo().coinBonus.silvery);

             case 37:
              bNextRound = false;

             case 38:
              if (!_this5.CheckFreeGameFinish()) {
                _context6.next = 54;
                break;
              }
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              SlotsFacade.bonusFreeGame.setRestSpinTimes(-1);
              _context6.next = 43;
              return _this5.awaitTime(.2);

             case 43:
              Global.SlotsSoundMgr.stopBgm();
              _context6.next = 46;
              return SlotsFacade.popup.showFreegameResultDialog(true, cc.vv.gameData._gameInfo.freeWinCoin);

             case 46:
              _context6.next = 48;
              return SlotsFacade.popup.showTransition();

             case 48:
              SlotsFacade.bonusFreeGame.ShowFreeGame(false);
              SlotsFacade.character.show();
              _context6.next = 52;
              return cc.vv.gameData.awaitTime(.4);

             case 52:
              _context6.next = 54;
              return _this5.playBottomWin(true);

             case 54:
              _context6.next = 56;
              return _this5.awaitTime(.2);

             case 56:
              SlotsFacade.collectProgress && SlotsFacade.collectProgress.setBtnsClickEnable(true);
              bNextRound && _this5.CanDoNextRound();

             case 58:
             case "end":
              return _context6.stop();
            }
          }, _callee5);
        }))();
      },
      playBottomWin: function playBottomWin(isShowFreeBigWin) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var nWin, nTotal, updateAllCoin;
                  return regeneratorRuntime.wrap(function _callee6$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      nWin = cc.vv.gameData.GetGameWin();
                      nTotal = nWin;
                      updateAllCoin = true;
                      if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                        nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                        updateAllCoin = 0 == cc.vv.gameData.GetFreeTime();
                      }
                      if (isShowFreeBigWin) {
                        nWin = cc.vv.gameData.GetGameTotalFreeWin();
                        nTotal = nWin;
                        updateAllCoin = true;
                      }
                      if (!(nWin > 0)) {
                        _context7.next = 10;
                        break;
                      }
                      _context7.next = 8;
                      return _this6.ShowBottomWin(nWin, nTotal, updateAllCoin, function() {
                        success();
                      });

                     case 8:
                      _context7.next = 11;
                      break;

                     case 10:
                      success();

                     case 11:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee6);
                }));
                return function(_x4) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee7);
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
        return this.CheckEnterFreeGame() || this.CheckFreeGameFinish();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return cc.vv.gameData.isTriggerFreeGames();
      },
      CheckFreeGameFinish: function CheckFreeGameFinish() {
        return cc.vv.gameData.isFinishFreeGames();
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
        this._super(bFree);
        cc.find("reels_bg_base", this.node).active = !bFree;
        cc.find("reels_bg_free", this.node).active = bFree;
        if (bFree) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm("free_bgm");
        } else Global.SlotsSoundMgr.stopBgm();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  LuckySanta_StarBonusFreegame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "505b2qcwyJM+4hGHr6SxOme", "LuckySanta_StarBonusFreegame");
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
        _enable: false
      },
      onLoad: function onLoad() {
        var _iterator = _createForOfIteratorHelper(this.node.children), _step;
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
      start: function start() {
        (cc.vv.gameData.isFreeGamesTime() || cc.vv.gameData.isTriggerFreeGames()) && (cc.vv.gameData.getDeskInfo().select && 2 == cc.vv.gameData.getDeskInfo().select.state || this.ShowFreeGame(true, true));
      },
      onSelected: function onSelected() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var resp, data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _context.next = 2;
              return cc.vv.gameData.reqSubGame({
                rtype: 2,
                idx: 2
              });

             case 2:
              resp = _context.sent;
              if (!(200 === resp.code)) {
                _context.next = 13;
                break;
              }
              data = resp.data;
              cc.vv.gameData.SetFreeTime(data.freeCnt);
              cc.vv.gameData.SetTotalFree(data.allFreeCnt);
              _context.next = 9;
              return SlotsFacade.popup.showTransition();

             case 9:
              _this.ShowFreeGame(true, false);
              SlotsFacade.character.hide();
              _context.next = 14;
              break;

             case 13:
              AppLog.err("\u8fd4\u56de\u62a5\u9519\u4e86");

             case 14:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playCollectSilverStar: function playCollectSilverStar(reels) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
            var _iterator2, _step2, reel, i, symbol;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                if (!reels) {
                  _context2.next = 33;
                  break;
                }
                _iterator2 = _createForOfIteratorHelper(reels);
                _context2.prev = 2;
                _iterator2.s();

               case 4:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 22;
                  break;
                }
                reel = _step2.value;
                i = 0;

               case 7:
                if (!(i < 3)) {
                  _context2.next = 20;
                  break;
                }
                symbol = reel.GetSymbolByRow(i);
                if (!(14 == symbol.GetShowId() || 15 == symbol.GetShowId())) {
                  _context2.next = 17;
                  break;
                }
                symbol.playCoinAppear();
                _context2.next = 13;
                return _this2._awaitTime(1.5);

               case 13:
                _this2._starBonus += symbol.GetCoinNum();
                _this2.setStarBonus(_this2._starBonus);
                _context2.next = 17;
                return _this2._awaitTime(.5);

               case 17:
                i++;
                _context2.next = 7;
                break;

               case 20:
                _context2.next = 4;
                break;

               case 22:
                _context2.next = 27;
                break;

               case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](2);
                _iterator2.e(_context2.t0);

               case 27:
                _context2.prev = 27;
                _iterator2.f();
                return _context2.finish(27);

               case 30:
                success();
                _context2.next = 34;
                break;

               case 33:
                success();

               case 34:
               case "end":
                return _context2.stop();
              }
            }, _callee2, null, [ [ 2, 24, 27, 30 ] ]);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      bEnable: function bEnable() {
        return this._enable;
      },
      ShowFreeGame: function ShowFreeGame(bFree, bReconnect) {
        var _this3 = this;
        this._enable = bFree;
        var _iterator3 = _createForOfIteratorHelper(this.node.children), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var node = _step3.value;
            node.active = bFree;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var collectEnergy = cc.find("Canvas/safe_node/slots/node_energyCollect");
        collectEnergy.active = !bFree;
        this.ShowGameview(bFree);
        cc.vv.gameData.GetSlotsScript()._bottomScript.ShowFreeModel(bFree, cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime(), cc.vv.gameData.GetTotalFree());
        if (bFree) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm("free_bgm");
          SlotsFacade.character.hide();
          this.refreshSpinTimes();
          var gameData = cc.vv.gameData;
          var silvery = gameData.getGameInfo() ? gameData.getGameInfo().coinBonus.silvery : gameData.getDeskInfo().coinBonus.silvery;
          this.setEachSilveryStarWinsCoin(silvery || 0);
          this.setEachGoldStarWinsCoin();
          this._starBonus = bReconnect ? cc.vv.gameData.getDeskInfo().starBonus : 0;
          this.setStarBonus(this._starBonus, false);
          this.scheduleOnce(function() {
            Global.SlotsSoundMgr.playEffect("star_added");
            _this3.ShowGameBottom(bFree);
          }, 1);
          this.scheduleOnce(function() {
            cc.vv.gameData.GetSlotsScript().CanDoNextRound();
          }, 2);
        }
      },
      ShowGameview: function ShowGameview(bFree) {
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
      },
      ShowGameBottom: function ShowGameBottom(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          cc.vv.gameData.GetSlotsScript()._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          cc.vv.gameData.GetSlotsScript()._bottomScript.SetWin(nTotal);
        } else cc.vv.gameData.GetSlotsScript()._bottomScript.ShowFreeModel(false);
      },
      refreshSpinTimes: function refreshSpinTimes() {
        this.setRestSpinTimes(cc.vv.gameData.GetFreeTime() || 0);
      },
      setRestSpinTimes: function setRestSpinTimes(timesNum) {
        var tips = cc.find("bg/freeTipsBg/tips", this.node);
        var atlas = cc.vv.gameData.GetAtlasByName("bonus");
        timesNum > 0 ? tips.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme129_remaining_text4") : 0 == timesNum ? tips.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme129_remaining_text1") : timesNum < 0 && (tips.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme129_remaining_text2"));
        var lblTimes = cc.find("bg/freeTipsBg/lbTimes", this.node);
        this._setLabel(lblTimes, timesNum > 0 ? timesNum : "");
      },
      setStarBonus: function setStarBonus(bonusCoin) {
        var bAnim = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        var lblBonusCoin = cc.find("starBonus/lblWinCoin", this.node);
        this._setLabel(lblBonusCoin, bonusCoin > 0 ? Global.convertNumToShort(bonusCoin) : "");
        if (bonusCoin > 0 && bAnim) {
          Global.SlotsSoundMgr.playEffect("star_value");
          lblBonusCoin.scale = 1;
          cc.tween(lblBonusCoin).to(.3, {
            scale: 1.3
          }).to(.2, {
            scale: 1
          }).start();
        }
      },
      setEachSilveryStarWinsCoin: function setEachSilveryStarWinsCoin(coinNum) {
        var lblWinCoin = cc.find("bg/item1/lblWinCoin", this.node);
        this._setLabel(lblWinCoin, Global.convertNumToShort(coinNum, null, 2));
      },
      setEachGoldStarWinsCoin: function setEachGoldStarWinsCoin(coinNum) {
        var lblWinCoin = cc.find("bg/item2/lblWinCoin", this.node);
        var grand = cc.find("bg/item2/grand", this.node);
        if (coinNum) {
          lblWinCoin.active = true;
          this._setLabel(lblWinCoin, Global.convertNumToShort(coinNum, null, 2));
          grand.active = false;
        } else {
          lblWinCoin.active = false;
          grand.active = true;
        }
      },
      _playSpine: function _playSpine(node) {
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
      _playActions: function _playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      _awaitTime: function _awaitTime(time) {
        var _this4 = this;
        return new Promise(function(success) {
          _this4.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      _setLabel: function _setLabel(lblNode, str) {
        lblNode && (lblNode.getComponent(cc.Label).string = str);
      },
      _cvtToLocalPos: function _cvtToLocalPos(node, localNode) {
        return localNode.convertToNodeSpaceAR(node.parent.convertToWorldSpaceAR(node.position));
      }
    });
    cc._RF.pop();
  }, {} ],
  LuckySanta_StarBonusRespin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25410z+l9VGj6xG2JQ2VWyt", "LuckySanta_StarBonusRespin");
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
        _enable: false,
        _restSpinTimes: 0,
        _goldenNum: 0,
        _top_star_symbols: null,
        _star_top_anim: null
      },
      onLoad: function onLoad() {
        this._super();
        this._top_star_symbols = [];
        this._star_top_anim = cc.find("star_top_ani", this.node);
        this._spine_addCoin = cc.find("spine_addCoin", this._star_top_anim);
        this._spine_addCoin.active = false;
        this._spine_addCoin.zIndex = 800;
        Global.StarBonusRespin = this;
      },
      onDestroy: function onDestroy() {
        Global.StarBonusRespin = null;
      },
      ReconnectShow: function ReconnectShow() {
        if (cc.vv.gameData.getDeskInfo().coinBonus && cc.vv.gameData.getDeskInfo().coinBonus.state) {
          this._bottomScript.ShowBtnsByState("moveing_1");
          this.showRespin(true, true);
          this._restSpinTimes = cc.vv.gameData.getDeskInfo().coinBonus.num || 5;
          this.setRestSpinTimes(this._restSpinTimes);
        } else this.showRespin(false, true);
      },
      StartMove: function StartMove() {
        Global.SlotsSoundMgr.playEffect("remaining");
        this.setRestSpinTimes(this._restSpinTimes - 1);
        this._super();
        var _iterator = _createForOfIteratorHelper(this._reels), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var reel = _step.value;
            reel.SetSpeed(2500);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 15;
        this._row = 1;
        this.createReels(this._col, this._row);
        this.RegisterEvent();
        this.ReconnectShow();
      },
      bEnable: function bEnable() {
        return this._enable;
      },
      onSelected: function onSelected() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var resp, data, gameInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _context.next = 2;
              return cc.vv.gameData.reqSubGame({
                rtype: 2,
                idx: 1
              });

             case 2:
              resp = _context.sent;
              if (!(200 === resp.code)) {
                _context.next = 16;
                break;
              }
              data = resp.data;
              gameInfo = cc.vv.gameData.getGameInfo() || cc.vv.gameData.getDeskInfo();
              gameInfo.coinBonus = data;
              cc.vv.gameData.SetFreeTime(0);
              cc.vv.gameData.SetTotalFree(0);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 12;
              return SlotsFacade.popup.showTransition2();

             case 12:
              _this.showRespin(true);
              SlotsFacade.character.hide();
              _context.next = 17;
              break;

             case 16:
              AppLog.err("\u8fd4\u56de\u62a5\u9519\u4e86");

             case 17:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      setRestSpinTimes: function setRestSpinTimes(timesNum) {
        cc.vv.gameData.SetRespinTime(timesNum);
        var tips = cc.find("respin_bg/respinTipsBg/tips", this.node);
        var atlas = cc.vv.gameData.GetAtlasByName("bonus");
        tips.getComponent(cc.Sprite).spriteFrame = timesNum > 1 ? atlas.getSpriteFrame("theme129_remaining_text6") : 1 == timesNum ? atlas.getSpriteFrame("theme129_remaining_text5") : 0 == timesNum ? atlas.getSpriteFrame("theme129_remaining_text1") : atlas.getSpriteFrame("theme129_remaining_text2");
        var lblTimes = cc.find("respin_bg/respinTipsBg/lbTimes", this.node);
        this._setLabel(lblTimes, timesNum > 0 ? timesNum : "");
      },
      setStarsNum: function setStarsNum(timesNum) {
        var lblTimes = cc.find("respin_bg/nodeCenter/lblRespinTimes", this.node);
        this._setLabel(lblTimes, timesNum > 0 ? timesNum : "");
      },
      setEachSilveryStarWinsCoin: function setEachSilveryStarWinsCoin(coinNum) {
        var lblWinCoin = cc.find("respin_bg/item1/lblWinCoin", this.node);
        this._setLabel(lblWinCoin, Global.convertNumToShort(coinNum, null, 2));
      },
      setEachGoldStarWinsCoin: function setEachGoldStarWinsCoin(coinNum) {
        var lblWinCoin = cc.find("respin_bg/item2/lblWinCoin", this.node);
        var grand = cc.find("respin_bg/item2/grand", this.node);
        if (coinNum) {
          this._goldenNum = coinNum;
          lblWinCoin.active = true;
          this._setLabel(lblWinCoin, Global.convertNumToShort(coinNum, null, 2));
          grand.active = false;
        } else {
          lblWinCoin.active = false;
          grand.active = true;
        }
      },
      getIdByType: function getIdByType(type) {
        switch (type) {
         case 1:
          return 2;

         case 2:
          return 14;

         case 3:
          return 15;

         case 4:
          return 16;
        }
      },
      showRespin: function showRespin(bShow) {
        var _this2 = this;
        var bReconnect = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._enable = bShow;
        var refreshShow = function refreshShow() {
          _this2.node.active = bShow;
          var _iterator2 = _createForOfIteratorHelper(_this2.node.children), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var node = _step2.value;
              node.active = bShow;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        };
        if (bShow) {
          Global.SlotsSoundMgr.playBgm("respin_bgm");
          refreshShow();
          cc.find("respin_bg/nodeCenter", this.node).active = true;
          cc.find("respin_bg/winnerBg", this.node).active = false;
          this._setLabel(cc.find("respin_bg/winnerBg/lblWinCoin", this.node), "");
          cc.find("uiPopGrand", this.node).active = false;
          var coinBonus = cc.vv.gameData.getGameInfo() ? cc.vv.gameData.getGameInfo().coinBonus : cc.vv.gameData.getDeskInfo().coinBonus;
          var slotScript = cc.vv.gameData.GetSlotsScript();
          for (var i = 1; i <= 15; i++) if (coinBonus) {
            var newSymbol = this.GetSymbolByIdx(i);
            if (coinBonus.info && coinBonus.info["idx_" + i]) {
              var id = this.getIdByType(coinBonus.info["idx_" + i].type);
              var data = {
                t: "coin",
                type: coinBonus.info["idx_" + i].type,
                num: coinBonus.info["idx_" + i].num
              };
              newSymbol.ShowById(id, data, false);
              newSymbol.SetCoinNum(Global.convertNumToShort(data.num));
              this.setSymbolToTop(newSymbol, i - 1, false, data);
            } else {
              var _id = slotScript.GetSymbolByIdx(i).GetShowId();
              var _data = Global.copy(slotScript.GetSymbolByIdx(i).GetData());
              newSymbol.ShowById(_id, _data);
            }
          }
          var starNum = 0;
          for (var _i in coinBonus.info) starNum++;
          this.setStarsNum(starNum);
          cc.vv.gameData.SetSlotsScript(this);
          this._restSpinTimes = coinBonus.num || 5;
          this.setRestSpinTimes(this._restSpinTimes);
          this.setEachSilveryStarWinsCoin(coinBonus.silvery);
          this.setEachGoldStarWinsCoin(coinBonus.golden);
          this.scheduleOnce(function() {
            _this2.CanDoNextRound();
          }, 1);
        } else {
          this.removeAllSymbolOfTop();
          var cfg = cc.vv.gameData.getGameCfg();
          var node_slots = cc.find("slots", this.node.parent);
          var script_slots = node_slots.getComponent(cfg.scripts.Slots);
          cc.vv.gameData.SetSlotsScript(script_slots);
          refreshShow();
          bReconnect || this._bottomScript.ShowBtnsByState("idle");
        }
      },
      showGrand: function showGrand(winCoin) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var uiPopGrand, twinCoin, winCoinStr, num, unit, lblWinCoin;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              uiPopGrand = cc.find("uiPopGrand", _this3.node);
              twinCoin = winCoin;
              winCoinStr = Global.formatMoney(twinCoin);
              num = 0;
              while (winCoinStr.length > 10) {
                twinCoin = Math.floor(twinCoin / 1e3);
                winCoinStr = Global.formatMoney(twinCoin);
                num++;
              }
              unit = [ "", "K", "M", "B", "T", "Q" ];
              winCoinStr += unit[num];
              lblWinCoin = cc.find("lblWinCoin", uiPopGrand).getComponent(cc.Label);
              lblWinCoin.string = winCoinStr;
              Global.SlotsSoundMgr.playEffect("grand");
              uiPopGrand.active = true;
              uiPopGrand.opacity = 0;
              _context2.next = 14;
              return _this3._playActions(uiPopGrand, [ cc.fadeIn(.5) ]);

             case 14:
              _context2.next = 16;
              return _this3._awaitTime(2);

             case 16:
              _context2.next = 18;
              return _this3._playActions(uiPopGrand, [ cc.fadeOut(.2) ]);

             case 18:
              uiPopGrand.active = false;

             case 19:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        return reelIdx % 5 * .2;
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        this._super();
        var reel = this._reels[colIdx];
        var symbol = reel.GetSymbolByRow(0);
        14 != symbol.GetShowId() && 15 != symbol.GetShowId() || this.setSymbolToTop(symbol, colIdx, true);
      },
      MoveReels: function MoveReels(arry) {
        this.moveReelLastIdx = -1;
        var virtualCol = -1;
        for (var i = 0; i < arry.length; i++) {
          var item = arry[i];
          if (item.node.active) {
            item.StartMove();
            var idx = item.GetReelIdx();
            var col = idx % 5;
            if (idx > this.moveReelLastIdx && col > virtualCol) {
              this.moveReelLastIdx = idx;
              virtualCol = col;
            }
          }
        }
      },
      setSymbolToTop: function setSymbolToTop(symbol, idx) {
        var isNew = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        var data = arguments.length > 3 ? arguments[3] : void 0;
        if (this._top_star_symbols[idx]) return;
        var symbolNode = cc.instantiate(symbol.node);
        var wordPos = symbol.node.convertToWorldSpaceAR(cc.v2(0));
        symbolNode.parent = this._star_top_anim;
        symbolNode.position = this._star_top_anim.convertToNodeSpaceAR(wordPos);
        symbolNode.zIndex = 100 + idx;
        this._top_star_symbols[idx] = symbolNode;
        var cfg = cc.vv.gameData.getGameCfg();
        var symbolNodeScript = symbolNode.getComponent(cfg.scripts.Symbols);
        symbolNodeScript.ShowById(symbol.GetShowId(), symbol.GetData(), false);
        data && symbolNodeScript.SetCoinNum(Global.convertNumToShort(data.num));
        symbolNodeScript._isNew = isNew;
        this._reels[idx].node.active = false;
      },
      removeAllSymbolOfTop: function removeAllSymbolOfTop() {
        for (var i in this._top_star_symbols) if (this._top_star_symbols[i]) {
          this._top_star_symbols[i].removeFromParent();
          this._top_star_symbols[i] = null;
        }
        this._top_star_symbols = [];
        var _iterator3 = _createForOfIteratorHelper(this._reels), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var reel = _step3.value;
            reel.node.active = true;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      },
      playStarAddCoin: function playStarAddCoin(newStarSymbol) {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
            var cfg, totalCoin, col, i, oldSymbol, targetPos;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                cfg = cc.vv.gameData.getGameCfg();
                totalCoin = 0;
                col = 0;

               case 3:
                if (!(col < 5)) {
                  _context3.next = 30;
                  break;
                }
                _context3.t0 = regeneratorRuntime.keys(_this4._top_star_symbols);

               case 5:
                if ((_context3.t1 = _context3.t0()).done) {
                  _context3.next = 27;
                  break;
                }
                i = _context3.t1.value;
                if (!(parseInt(i) % 5 != col)) {
                  _context3.next = 9;
                  break;
                }
                return _context3.abrupt("continue", 5);

               case 9:
                oldSymbol = _this4._top_star_symbols[i].getComponent(cfg.scripts.Symbols);
                if (!oldSymbol._isNew) {
                  _context3.next = 12;
                  break;
                }
                return _context3.abrupt("continue", 5);

               case 12:
                if (!(oldSymbol.GetShowId() > newStarSymbol.GetShowId())) {
                  _context3.next = 14;
                  break;
                }
                return _context3.abrupt("continue", 5);

               case 14:
                if (!(oldSymbol.GetShowId() == newStarSymbol.GetShowId() && 14 == oldSymbol.GetShowId())) {
                  _context3.next = 16;
                  break;
                }
                return _context3.abrupt("continue", 5);

               case 16:
                totalCoin += oldSymbol.GetCoinNum() || 0;
                _this4._spine_addCoin.position = oldSymbol.node.position;
                _this4._spine_addCoin.active = true;
                targetPos = newStarSymbol.node.position;
                _this4._playSpine(_this4._spine_addCoin, "animation1");
                Global.SlotsSoundMgr.playEffect("light_circle1");
                _this4._spine_addCoin.stopAllActions();
                _context3.next = 25;
                return _this4._playActions(_this4._spine_addCoin, [ cc.delayTime(.1), cc.moveTo(.5, targetPos), cc.callFunc(function() {
                  newStarSymbol.playAppearAnimation(false);
                  newStarSymbol.SetCoinNum(Global.convertNumToShort(totalCoin));
                  Global.SlotsSoundMgr.playEffect("add");
                }) ]);

               case 25:
                _context3.next = 5;
                break;

               case 27:
                col++;
                _context3.next = 3;
                break;

               case 30:
                Global.SlotsSoundMgr.playEffect("light_circle2");
                _this4.setEachGoldStarWinsCoin(_this4._goldenNum + totalCoin);
                newStarSymbol._data = {
                  t: "coin",
                  num: totalCoin
                };
                newStarSymbol._isNew = false;
                success();

               case 35:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      showResult: function showResult() {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
            var winnerBg, i, symbolNode, totalCoin, cfg, col, _loop, _i2, _ret;
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                cc.find("respin_bg/nodeCenter", _this5.node).active = false;
                winnerBg = cc.find("respin_bg/winnerBg", _this5.node);
                winnerBg.active = true;
                for (i in _this5._top_star_symbols) {
                  symbolNode = _this5._top_star_symbols[i];
                  _this5._playSpine(cc.find("w_guang", symbolNode), "animation2", true);
                }
                _context5.next = 6;
                return _this5._awaitTime(1);

               case 6:
                totalCoin = 15 == _this5._top_star_symbols.length ? cc.vv.gameData.getGameInfo().jackpot : 0;
                cfg = cc.vv.gameData.getGameCfg();
                col = 0;

               case 9:
                if (!(col < 5)) {
                  _context5.next = 23;
                  break;
                }
                _loop = regeneratorRuntime.mark(function _loop(_i2) {
                  var symbolNode, spineNode;
                  return regeneratorRuntime.wrap(function _loop$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      if (!(parseInt(_i2) % 5 != col)) {
                        _context4.next = 2;
                        break;
                      }
                      return _context4.abrupt("return", "continue");

                     case 2:
                      symbolNode = _this5._top_star_symbols[_i2];
                      spineNode = cc.find("w_guang", symbolNode);
                      _this5._playSpine(spineNode, "animation3");
                      spineNode.stopAllActions();
                      _context4.next = 8;
                      return _this5._playActions(spineNode, [ cc.delayTime(.1), cc.moveTo(.6, spineNode.convertToNodeSpaceAR(winnerBg.convertToWorldSpaceAR(cc.v2(0, 0)))), cc.callFunc(function() {
                        totalCoin += symbolNode.getComponent(cfg.scripts.Symbols).GetCoinNum();
                        _this5._setLabel(cc.find("lblWinCoin", winnerBg), Global.formatMoney(totalCoin));
                        _this5._playSpine(cc.find("spine_frame", winnerBg));
                        _this5._bottomScript.SetWin(totalCoin);
                        Global.SlotsSoundMgr.playEffect("collect");
                      }), cc.delayTime(.1) ]);

                     case 8:
                     case "end":
                      return _context4.stop();
                    }
                  }, _loop);
                });
                _context5.t0 = regeneratorRuntime.keys(_this5._top_star_symbols);

               case 12:
                if ((_context5.t1 = _context5.t0()).done) {
                  _context5.next = 20;
                  break;
                }
                _i2 = _context5.t1.value;
                return _context5.delegateYield(_loop(_i2), "t2", 15);

               case 15:
                _ret = _context5.t2;
                if (!("continue" === _ret)) {
                  _context5.next = 18;
                  break;
                }
                return _context5.abrupt("continue", 12);

               case 18:
                _context5.next = 12;
                break;

               case 20:
                col++;
                _context5.next = 9;
                break;

               case 23:
                success();

               case 24:
               case "end":
                return _context5.stop();
              }
            }, _callee4);
          }));
          return function(_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      update: function update(dt) {
        this._super(dt);
        this.CanStopSlot() && this._bottomScript.ShowBtnsByState("moveing_1");
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
        var _iterator4 = _createForOfIteratorHelper(this._reels), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var reel = _step4.value;
            var _iterator5 = _createForOfIteratorHelper(reel._reelState), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                var info = _step5.value;
                info.reelStopSound = "";
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var cfg, coinBonus, starNum, i, _iterator6, _step6, idx, info, winCoin;
          return regeneratorRuntime.wrap(function _callee5$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              cfg = cc.vv.gameData.getGameCfg();
              coinBonus = cc.vv.gameData.getGameInfo().coinBonus;
              _this6._restSpinTimes = coinBonus.num;
              starNum = 0;
              for (i in coinBonus.info) coinBonus.info[i] && coinBonus.info[i].type && starNum++;
              _this6.setStarsNum(starNum);
              if (!(coinBonus.addItems && coinBonus.addItems.length > 0)) {
                _context6.next = 32;
                break;
              }
              _iterator6 = _createForOfIteratorHelper(coinBonus.addItems);
              _context6.prev = 8;
              _iterator6.s();

             case 10:
              if ((_step6 = _iterator6.n()).done) {
                _context6.next = 23;
                break;
              }
              idx = _step6.value;
              info = coinBonus.info["idx_" + idx];
              if (!info) {
                _context6.next = 21;
                break;
              }
              if (!(4 == info.type)) {
                _context6.next = 18;
                break;
              }
              _this6.setRestSpinTimes(_this6._restSpinTimes);
              _context6.next = 21;
              break;

             case 18:
              if (!_this6._top_star_symbols[idx - 1]) {
                _context6.next = 21;
                break;
              }
              _context6.next = 21;
              return _this6.playStarAddCoin(_this6._top_star_symbols[idx - 1].getComponent(cfg.scripts.Symbols));

             case 21:
              _context6.next = 10;
              break;

             case 23:
              _context6.next = 28;
              break;

             case 25:
              _context6.prev = 25;
              _context6.t0 = _context6["catch"](8);
              _iterator6.e(_context6.t0);

             case 28:
              _context6.prev = 28;
              _iterator6.f();
              return _context6.finish(28);

             case 31:
              _this6.setEachGoldStarWinsCoin(coinBonus.golden);

             case 32:
              _context6.next = 34;
              return _this6._awaitTime(1);

             case 34:
              if (!(_this6._restSpinTimes <= 0 || cc.vv.gameData.getGameInfo().jackpot && cc.vv.gameData.getGameInfo().jackpot > 0)) {
                _context6.next = 54;
                break;
              }
              _this6.setRestSpinTimes(-1);
              Global.SlotsSoundMgr.playEffect("spin_end");
              if (!(cc.vv.gameData.getGameInfo().jackpot && cc.vv.gameData.getGameInfo().jackpot > 0)) {
                _context6.next = 40;
                break;
              }
              _context6.next = 40;
              return _this6.showGrand(cc.vv.gameData.getGameInfo().jackpot);

             case 40:
              _context6.next = 42;
              return _this6.showResult();

             case 42:
              winCoin = Global.FormatCommaNumToNum(cc.find("respin_bg/winnerBg/lblWinCoin", _this6.node).getComponent(cc.Label).string);
              _context6.next = 45;
              return SlotsFacade.popup.showFreegameResultDialog(false, winCoin);

             case 45:
              _context6.next = 47;
              return _this6.playBottomWin(winCoin);

             case 47:
              _context6.next = 49;
              return SlotsFacade.popup.showTransition2();

             case 49:
              _this6.showRespin(false);
              Global.SlotsSoundMgr.stopBgm();
              SlotsFacade.character.show();
              _context6.next = 54;
              return cc.vv.gameData.awaitTime(.3);

             case 54:
              _this6.CanDoNextRound();

             case 55:
             case "end":
              return _context6.stop();
            }
          }, _callee5, null, [ [ 8, 25, 28, 31 ] ]);
        }))();
      },
      playBottomWin: function playBottomWin(winCoin) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var nWin, nTotal, updateAllCoin;
                  return regeneratorRuntime.wrap(function _callee6$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      nWin = winCoin;
                      nTotal = winCoin;
                      updateAllCoin = true;
                      if (!(nWin > 0)) {
                        _context7.next = 8;
                        break;
                      }
                      _context7.next = 6;
                      return _this7.ShowBottomWin(nWin, nTotal, updateAllCoin, function() {
                        success();
                      });

                     case 6:
                      _context7.next = 9;
                      break;

                     case 8:
                      success();

                     case 9:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee6);
                }));
                return function(_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee7);
        }))();
      },
      _playSpine: function _playSpine(node) {
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
      _playActions: function _playActions(node, actionsArr) {
        return new Promise(function(success) {
          actionsArr.push(cc.callFunc(function() {
            success();
          }));
          node.active = true;
          node.runAction(cc.sequence(actionsArr));
        });
      },
      _awaitTime: function _awaitTime(time) {
        var _this8 = this;
        return new Promise(function(success) {
          _this8.scheduleOnce(function() {
            success();
          }, time);
        });
      },
      _setLabel: function _setLabel(lblNode, str) {
        lblNode && (lblNode.getComponent(cc.Label).string = str);
      },
      _cvtToLocalPos: function _cvtToLocalPos(node, localNode) {
        return localNode.convertToNodeSpaceAR(node.parent.convertToWorldSpaceAR(node.position));
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  LuckySanta_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90066kM25RA3bHkgaHftYsa", "LuckySanta_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      ShowById: function ShowById(id, data) {
        var bRolling = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._super(id, data);
        var cfg = cc.vv.gameData.getGameCfg();
        cc.find("mask", this.node).active = false;
        Global.StarBonusRespin && Global.StarBonusRespin.bEnable() && bRolling && cfg.symbol[id] && cfg.symbol[id].dark && (cc.find("mask", this.node).active = true);
        if (2 == this._id) {
          var num = 0;
          num = this._data && "coin" == this._data.t ? this._data.num : Math.floor(cc.vv.gameData.GetTotalBet() * (Global.random(1, 10) / 2));
          this.SetCoinNum(Global.convertNumToShort(num, null, 2));
        } else this.SetCoinNum(null);
      },
      ShowNormal: function ShowNormal() {
        this.ShowById(this._id, this._data);
        this.setAnimationToTop(false);
      },
      StartMove: function StartMove() {
        this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.stopWinTweenAction();
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        var randVal = cfg.randomSymbols[randIdx - 1];
        if (Global.StarBonusRespin && Global.StarBonusRespin.bEnable()) {
          randIdx = Global.random(1, cfg.respinRandomSymbols.length);
          randVal = cfg.respinRandomSymbols[randIdx - 1];
        }
        this.ShowById(randVal);
      },
      GetCoinNum: function GetCoinNum() {
        return this._data ? this._data.num : 0;
      },
      SetCoinNum: function SetCoinNum(num) {
        var txt = cc.find("coin_num", this.node);
        if (num) {
          txt.scale = 1;
          txt.active = true;
          txt.getComponent(cc.Label).string = Global.formatMoney(num);
        } else txt.active = false;
      },
      playCoinAppear: function playCoinAppear() {
        var _this = this;
        var bScale = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.SetCoinNum(Global.convertNumToShort(this._data ? this._data.num : 0, null, 2));
        var txt = cc.find("coin_num", this.node);
        if (bScale) {
          txt.scale = 0;
          cc.tween(txt).call(function() {
            _this.playAppearAnimation();
          }).delay(.8).to(.3, {
            scale: 1.2
          }).to(.3, {
            scale: 1
          }).start();
        } else {
          txt.scale = 1;
          this.playAppearAnimation();
        }
      },
      playAppearAnimation: function playAppearAnimation() {
        var bCzIndex = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var id = this._id;
        if (14 == id || 15 == id) {
          var cfg = cc.vv.gameData.getGameCfg();
          if (cfg.symbol[id] && cfg.symbol[id].appear_ani) {
            var showNode = cc.find(cfg.symbol[id].appear_ani.node, this.node);
            showNode.active = true;
            if ("" != cfg.symbol[id].appear_ani.name) {
              bCzIndex && (this.node.zIndex = cfg.symbol[id].appear_ani.zIndex - this._symbolIdx + 10 * this._reelIdx);
              var nodeSp = showNode.getComponent(sp.Skeleton);
              if (nodeSp) {
                nodeSp.setAnimation(0, cfg.symbol[id].appear_ani.name, false);
                nodeSp.setCompleteListener(function() {
                  showNode.active = false;
                  nodeSp.setCompleteListener(null);
                });
              }
            }
          }
        }
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        if (14 == id || 15 == id) {
          var cfg = cc.vv.gameData.getGameCfg();
          if (cfg.symbol[id] && cfg.symbol[id].stop_ext_ani) {
            this._state = "stop";
            var showNode = cc.find(cfg.symbol[id].stop_ext_ani.node, this.node);
            showNode.active = true;
            if ("" != cfg.symbol[id].stop_ext_ani.name) {
              this.node.zIndex = cfg.symbol[id].stop_ext_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
              var nodeSp = showNode.getComponent(sp.Skeleton);
              if (nodeSp) {
                nodeSp.setAnimation(0, cfg.symbol[id].stop_ext_ani.name, false);
                nodeSp.setCompleteListener(function() {
                  showNode.active = false;
                  nodeSp.setCompleteListener(null);
                });
              }
            }
          }
        } else Global.StarBonusRespin && Global.StarBonusRespin.bEnable() || this._super();
      },
      playStarAnimation: function playStarAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (id == cfg.collectId && cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if (cfg.symbol[id].win_ani && "" != cfg.symbol[id].win_ani.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, false);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "LuckySanta_Cfg", "LuckySanta_Character", "LuckySanta_CollectProgress", "LuckySanta_CollectWild", "LuckySanta_GameData", "LuckySanta_Logic", "LuckySanta_PickBonus", "LuckySanta_PickGift", "LuckySanta_Pop", "LuckySanta_Slots", "LuckySanta_StarBonusFreegame", "LuckySanta_StarBonusRespin", "LuckySanta_Symbol" ]);