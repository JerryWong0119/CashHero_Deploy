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
  Alexander_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df79c5CGxpGWK+A+VZVYGHE", "Alexander_BonusGame");
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
        _rtype: 3
      },
      start: function start() {},
      Init: function Init() {
        this._rtype = 3;
        this._spine_character = cc.find("safe_node/spine_character", this.node);
        this._bonus_spins = cc.find("safe_node/slots/node_spins", this.node);
        this._node_winner = cc.find("safe_node/slots/node_winner", this.node);
        this._bonus_spins.active = false;
        this._node_winner.active = false;
        this._spine_bonus_again = cc.find("safe_node/slots/spine_bonus_again", this.node);
        this._spine_bonus_again.active = false;
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      enterBonusGame: function enterBonusGame() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm("bonus_bgm");
                _this.initBonusGame();
                _context.next = 4;
                return cc.vv.gameData.awaitTime(2);

               case 4:
                _this.bonusStartMove();
                _this._bonusSuccess = success;

               case 6:
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
      endBonusGame: function endBonusGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("bonus_end");
              cc.tween(_this2._bonus_spins).to(.5, {
                opacity: 0
              }).start();
              _context2.next = 4;
              return cc.vv.gameData.awaitTime(.5);

             case 4:
              _this2._bonus_spins.active = false;
              _this2._bonus_spins.opacity = 255;
              cc.tween(_this2._spine_character).to(.5, {
                opacity: 0
              }).start();
              _this2._node_winner.active = true;
              _this2._node_winner.opacity = 0;
              cc.find("lbl", _this2._node_winner).getComponent(cc.Label).string = "";
              cc.find("spine_light", _this2._node_winner).active = false;
              cc.find("spine_win", _this2._node_winner).active = false;
              cc.tween(_this2._node_winner).to(.5, {
                opacity: 255
              }).start();
              _context2.next = 15;
              return cc.vv.gameData.awaitTime(.5);

             case 15:
              _context2.next = 17;
              return _this2.playCompleteAnim();

             case 17:
              if (!_this2._retriggered) {
                _context2.next = 34;
                break;
              }
              Global.SlotsSoundMgr.playEffect("playitagain");
              _this2._spine_bonus_again.active = true;
              _this2._spine_bonus_again.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
              _context2.next = 23;
              return cc.vv.gameData.awaitTime(.5);

             case 23:
              _context2.next = 25;
              return cc.vv.gameData.getPopupScript().playBonusAgainAnim();

             case 25:
              cc.vv.gameData.setEpicInfo(_this2._newEpicInfo);
              cc.vv.gameData.setBonusIdxs(_this2._newEpicInfo.bonusIdxs);
              cc.vv.gameData.setBonusItems(_this2._newEpicInfo.bonusItems);
              _this2._node_winner.active = false;
              _this2._spine_character.opacity = 255;
              cc.vv.gameData.GetSlotsScript().initBonusSymbol();
              _this2.initBonusGame();
              _this2.bonusStartMove();
              return _context2.abrupt("return");

             case 34:
              nWin = _this2._winCoin;
              nTotal = _this2._winCoin;
              cc.vv.gameData.AddCoin(_this2._winCoin);
              _context2.next = 39;
              return new Promise(function(success, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nTotal, true, success);
              });

             case 39:
              cc.find("spine_win", _this2._node_winner).active = false;
              _this2._node_winner.active = false;
              if (_this2._bonusSuccess) {
                _this2._bonusSuccess();
                _this2._bonusSuccess = null;
                Global.SlotsSoundMgr.stopBgm();
              }

             case 42:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      bonusStartMove: function bonusStartMove() {
        this._restCnt -= 1;
        this.showBonusSpins(this._restCnt, false);
        cc.vv.gameData.GetSlotsScript().setBonusCanStop(false);
        cc.vv.gameData.GetSlotsScript().StartMove(this._bonusIdxs);
        this.onSendSeq();
      },
      onSendSeq: function onSendSeq() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {
          rtype: this._rtype
        };
        cc.vv.NetManager.send(req, true);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        var data = msg.data;
        if (200 === msg.code && data && data.rtype == this._rtype) {
          cc.vv.gameData.GetSlotsScript().setBonusCanStop(true);
          if (data) {
            this._isBonusEnd = data.isEnd;
            this._bonusIdxs = data.epicInfo.bonusIdxs;
            this._bonusItems = data.epicInfo.bonusItems;
            this._retriggered = data.epicInfo.retriggered;
            this._winCoin = data.epicInfo.winCoin;
            this._restCnt = data.epicInfo.restCnt;
            this._newEpicInfo = data.newEpicInfo;
            cc.vv.gameData.setBonusIdxs(this._bonusIdxs);
            cc.vv.gameData.setBonusItems(this._bonusItems);
            var cards = this.getResultCard();
            cc.vv.gameData.GetSlotsScript().SetSlotsResult(cards);
          }
        }
      },
      getResultCard: function getResultCard() {
        var cfg = cc.vv.gameData.getGameCfg();
        var cards = [];
        for (var i = 1; i <= 20; i++) if (this._bonusIdxs.includes(i)) cards.push(3); else {
          var randIdx = Global.random(1, cfg.randomSymbols.length);
          var randVal = cfg.randomSymbols[randIdx - 1];
          cards.push(randVal);
        }
        return cards;
      },
      onBonusSpinEnd: function onBonusSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!_this3._isBonusEnd) {
                _context3.next = 4;
                break;
              }
              _this3.endBonusGame();
              _context3.next = 8;
              break;

             case 4:
              _this3.showBonusSpins(_this3._restCnt, false);
              _context3.next = 7;
              return cc.vv.gameData.awaitTime(2);

             case 7:
              _this3.bonusStartMove();

             case 8:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showBonusSpins: function showBonusSpins(rest, bInit) {
        if (false === rest) this._bonus_spins.active = false; else {
          this._bonus_spins.active = true;
          this._bonus_spins.opacity = 255;
          var lblList = [ "LAST SPIN", "1 SPIN REMAINING", "2 SPINS REMAINING", "3 SPINS REMAINING" ];
          cc.find("lbl", this._bonus_spins).getComponent(cc.Label).string = lblList[rest];
          var sp_bomb = cc.find("spine_bomb", this._bonus_spins);
          if (bInit) sp_bomb.active = false; else if (3 == rest) {
            Global.SlotsSoundMgr.playEffect("num");
            sp_bomb.active = true;
            sp_bomb.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          }
        }
      },
      playCompleteAnim: function playCompleteAnim() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
                  var idxs, sp_win, allCoin, lbl, spine_light, i, idx, data, symbol, sPos, addCoin;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      idxs = Global.copy(_this4._bonusIdxs);
                      idxs.sort(function(a, b) {
                        return a / 5 - b / 5;
                      }).sort(function(a, b) {
                        return (a - 1) % 5 - (b - 1) % 5;
                      });
                      sp_win = cc.find("spine_win", _this4._node_winner);
                      sp_win.active = true;
                      allCoin = _this4._curCoin;
                      lbl = cc.find("lbl", _this4._node_winner);
                      spine_light = cc.find("spine_light", _this4._node_winner);
                      i = 0;

                     case 8:
                      if (!(i < idxs.length)) {
                        _context4.next = 37;
                        break;
                      }
                      idx = idxs[i];
                      data = _this4._bonusItems[_this4._bonusIdxs.indexOf(idx)];
                      if (!data.again) {
                        _context4.next = 14;
                        break;
                      }
                      _context4.next = 34;
                      break;

                     case 14:
                      Global.SlotsSoundMgr.playEffect("collect");
                      symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(idx);
                      sPos = _this4._node_winner.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      sp_win.position = sPos;
                      sp_win.angle = _this4.getRotationAngle(idx);
                      sp_win.scale = _this4.getScaleMul(idx);
                      sp_win.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      symbol.playBonusCollAnim();
                      _context4.next = 24;
                      return cc.vv.gameData.awaitTime(.5);

                     case 24:
                      addCoin = void 0;
                      data.coin ? addCoin = data.coin : data.jackpot && (addCoin = data.jackpot.value);
                      if (!(addCoin > 0)) {
                        _context4.next = 34;
                        break;
                      }
                      allCoin += addCoin;
                      lbl.getComponent(cc.Label).string = Global.FormatNumToComma(allCoin);
                      spine_light.active = true;
                      spine_light.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      cc.vv.gameData.GetBottomScript().SetWin(allCoin);
                      _context4.next = 34;
                      return cc.vv.gameData.awaitTime(.3);

                     case 34:
                      i++;
                      _context4.next = 8;
                      break;

                     case 37:
                      success();

                     case 38:
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
      initBonusGame: function initBonusGame() {
        var epicInfo = cc.vv.gameData.getEpicInfo();
        this._bonusIdxs = epicInfo.bonusIdxs;
        this._bonusItems = epicInfo.bonusItems;
        this._currStep = epicInfo.currStep;
        this._restCnt = epicInfo.restCnt;
        this._retriggered = epicInfo.retriggered;
        this._curCoin = epicInfo.winCoin;
        this.showBonusSpins(this._restCnt, true);
        cc.vv.gameData.GetBottomScript().SetWin(this._curCoin);
      },
      getRotationAngle: function getRotationAngle(col) {
        var list = [ -45, -27, 0, 27, 45, -35, -20, 0, 20, 35, -29, -15, 0, 15, 29, -24, -13, 0, 13, 24 ];
        return list[col - 1];
      },
      getScaleMul: function getScaleMul(col) {
        var list = [ .7, .6, .5, .6, .7, .9, .8, .7, .8, .9, 1.1, 1, .9, 1, 1.1, 1.2, 1.1, 1, 1.1, 1.2 ];
        return list[col - 1];
      }
    });
    cc._RF.pop();
  }, {} ],
  Alexander_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15598SPy6hAu6LXWQULOQoq", "Alexander_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      ShowBtnsByState: function ShowBtnsByState(strState) {
        this._super(strState);
        "moveing_2" == strState ? cc.vv.gameData.GetSlotsScript().setStopNodeState(true) : cc.vv.gameData.GetSlotsScript().setStopNodeState(false);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  Alexander_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d41cq/BLpA9qoQOfCu0dRB", "Alexander_Cfg");
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
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        mini_node: "s301",
        minor_node: "s302",
        major_node: "s303",
        again_node: "s304",
        win_node: "w3",
        isMask: false,
        idle_ani: {
          name: "animationj_1",
          mini_name: "animation27_1",
          minor_name: "animation32_1",
          major_name: "animation36_1",
          again_name: "animation37_1",
          zIndex: 300
        },
        coll_ani: {
          name: "animationj_2",
          mini_name: "animation27_2",
          minor_name: "animation32_2",
          major_name: "animation36_2",
          again_name: "animation37_2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 14, {
        node: "s0",
        win_node: ""
      }), _symbol),
      bonusId: [ 3 ],
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "Alexander_Bottom",
        Slots: "Alexander_Slots",
        Reels: "Alexander_Reel",
        Symbols: "Alexander_Symbol"
      },
      col: 20,
      row: 1,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 106
      },
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      speed: 3e3,
      autoModelDelay: .5,
      reelStopInter: .1,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      normalBgm: "base_bgm",
      helpItems: [ "games/Alexander/prefab/help_node/LMSlots_Help_item1", "games/Alexander/prefab/help_node/LMSlots_Help_item2", "games/Alexander/prefab/help_node/LMSlots_Help_item3", "games/Alexander/prefab/help_node/LMSlots_Help_item4" ],
      commEffect: {
        path: "games/Alexander/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      AddAntiTime: 1.8,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Alexander/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2200,
        type: "free"
      }, {
        id: [ 3 ],
        mini: 6,
        counts: [ 4, 4, 4, 4, 4 ],
        path: "games/Alexander/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_coin",
        antSpeed: 2e3,
        type: "bonus"
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Alexander_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7682wpLEpGUoMWLKf09TN2", "Alexander_FreeGame");
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
        _slotsNodeList: [],
        _slotsScpList: []
      },
      start: function start() {},
      Init: function Init() {
        this._node_free = cc.find("safe_node/node_free", this.node);
        this._node_free.active = false;
        this._node_slots = cc.find("slots", this._node_free);
        for (var i = 1; i <= 4; i++) {
          var slot = cc.find("slots" + i, this._node_slots);
          var scp = slot.addComponent("Alexander_FreeSlots");
          scp.Init(i);
          this._slotsNodeList.push(slot);
          this._slotsScpList.push(scp);
        }
      },
      initShowSlotsData: function initShowSlotsData(isTri) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm("free_bgm");
                cc.vv.gameData.setIsFreeGame(true);
                _this._node_free.active = true;
                _this.showNormalSlots(false);
                _this._slotsCnt = cc.vv.gameData.getFreeSlotsCnt();
                _this._addRow = cc.vv.gameData.getFreeAddRow();
                _this._wildCols = cc.vv.gameData.getFreeWildCols();
                _this.setSlotsScale();
                _this.showWildSpine();
                for (i = 0; i < _this._slotsNodeList.length; i++) if (i < _this._slotsCnt) {
                  _this._slotsNodeList[i].active = true;
                  _this._slotsScpList[i].initSlotsData();
                } else _this._slotsNodeList[i].active = false;
                if (!isTri) {
                  _context.next = 14;
                  break;
                }
                _context.next = 13;
                return cc.vv.gameData.awaitTime(.5);

               case 13:
                cc.vv.gameData.getMapScript().hideMapNode();

               case 14:
                cc.vv.gameData.GetSlotsScript().CanDoNextRound();
                _this._freeSuccess = success;

               case 16:
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
      endFreeGame: function endFreeGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return cc.vv.gameData.awaitTime(1);

             case 2:
              _context2.next = 4;
              return cc.vv.gameData.getPopupScript().playEndFreeAnim();

             case 4:
              cc.vv.gameData.getPopupScript().playQPAnim3();
              _context2.next = 7;
              return cc.vv.gameData.awaitTime(.7);

             case 7:
              _this2._node_free.active = false;
              _this2.showNormalSlots(true);
              cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
              _this2.hideWildSpine();
              _context2.next = 13;
              return cc.vv.gameData.awaitTime(2);

             case 13:
              _context2.next = 15;
              return new Promise(function(success) {
                var nTotal = cc.vv.gameData.getFreeWinCoin();
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nTotal, nTotal, true, function() {
                  success();
                });
              });

             case 15:
              cc.vv.gameData.setIsFreeGame(false);
              Global.SlotsSoundMgr.stopBgm();
              if (_this2._freeSuccess) {
                _this2._freeSuccess();
                _this2._freeSuccess = null;
              }

             case 18:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      setSlotsScale: function setSlotsScale() {
        var scaleList = [ 1, .9, .53, .53 ];
        this._node_slots.setScale(scaleList[this._slotsCnt - 1]);
        this._node_slots.getComponent(cc.Widget).updateAlignment();
        var cfg = cc.vv.gameData.getGameCfg();
        var row = this._addRow ? 4 : 3;
        var c_X = 0;
        var r_X = this._slotsNodeList[0].width / 2 + 16;
        var b_Y = cfg.symbolSize.height * row / 2;
        var t_Y = 3 * b_Y + 30;
        if (1 == this._slotsCnt && !this._addRow || this._slotsCnt > 2) {
          t_Y += cfg.symbolSize.height;
          b_Y += cfg.symbolSize.height;
        }
        if (1 == this._slotsCnt) this._slotsNodeList[0].position = cc.v2(c_X, b_Y); else if (2 == this._slotsCnt) {
          this._slotsNodeList[0].position = cc.v2(c_X, t_Y);
          this._slotsNodeList[1].position = cc.v2(c_X, b_Y);
        } else if (3 == this._slotsCnt) {
          this._slotsNodeList[0].position = cc.v2(c_X, t_Y);
          this._slotsNodeList[1].position = cc.v2(-r_X, b_Y);
          this._slotsNodeList[2].position = cc.v2(r_X, b_Y);
        } else if (4 == this._slotsCnt) {
          this._slotsNodeList[0].position = cc.v2(-r_X, t_Y);
          this._slotsNodeList[1].position = cc.v2(r_X, t_Y);
          this._slotsNodeList[2].position = cc.v2(-r_X, b_Y);
          this._slotsNodeList[3].position = cc.v2(r_X, b_Y);
        }
      },
      showWildSpine: function showWildSpine() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].showWildSpine();
      },
      hideWildSpine: function hideWildSpine() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].hideWildSpine();
      },
      StartMove: function StartMove() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].StartMove();
      },
      StopMove: function StopMove() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].StopMove();
      },
      onMsgSpine: function onMsgSpine(msg) {
        cc.log(msg);
        this._gameInfo = msg;
        var freeGameSlots = msg.freeGameSlots;
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotsCnt && this._slotsScpList[i].onMsgSpine(freeGameSlots[i]);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var i, win, nTotal;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              for (i = 0; i < _this3._slotsNodeList.length; i++) i < _this3._slotsCnt && _this3._slotsScpList[i].OnSpinEnd();
              win = _this3._gameInfo.wincoin;
              nTotal = cc.vv.gameData.getFreeWinCoin();
              _context3.next = 5;
              return new Promise(function(success, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(win, nTotal, true, function() {
                  success();
                });
              });

             case 5:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context3.next = 8;
                break;
              }
              _this3.endFreeGame();
              return _context3.abrupt("return");

             case 8:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 9:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      GetLastStopReelIdx: function GetLastStopReelIdx() {
        return this._slotsScpList[this._slotsCnt - 1].GetLastStopReelIdx();
      },
      showNormalSlots: function showNormalSlots(bShow) {
        cc.find("safe_node/slots", this.node).active = bShow;
      }
    });
    cc._RF.pop();
  }, {} ],
  Alexander_FreeReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad728vbaxVL7oA+/+tiBkgS", "Alexander_FreeReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      start: function start() {},
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
      },
      setSlotType: function setSlotType(type) {
        this._slotsType = type;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var lastReelStopIdx = cc.vv.gameData.getFreeScript().GetLastStopReelIdx();
        var type = cc.vv.gameData.getFreeSlotsCnt();
        this._slotsType == type && this._reelIdx == lastReelStopIdx && cc.vv.gameData.getFreeScript().OnSpinEnd();
      },
      ReadyToStop: function ReadyToStop() {
        this._bNotifyReadyStop || (this._bNotifyReadyStop = true);
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.playReelStop();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      playReelStop: function playReelStop() {
        var soundPath = this._cfg.reelStateInfo[0].path;
        var reelStopEffect = this._cfg.reelStateInfo[0].reelStopSound;
        cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      },
      StartRecycleSymbol: function StartRecycleSymbol(nTime, row) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (this._symbols.length > row + 1) {
          var nCount = -(this._symbols.length - (row + 1));
          this.AddCount(nCount, nTime);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Alexander_FreeSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9485/TarlE15Gl38sFmbbS", "Alexander_FreeSlots");
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
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _wildList: []
      },
      start: function start() {},
      Init: function Init(type) {
        this._slotsType = type;
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 5;
        this._row = 3;
        this._topAniNode = cc.find("top_ani", this.node);
        this.createReels(this._col, this._row, type);
        this.initWildSpine();
      },
      createReels: function createReels(col, row, type) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent("Alexander_FreeReel");
          scp.Init(i, row, this._topAniNode);
          scp.setSlotType(type);
          this._reels.push(scp);
        }
      },
      initSlotsData: function initSlotsData() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var hisRow;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._addRow = cc.vv.gameData.getFreeAddRow();
              _this._wildCols = cc.vv.gameData.getFreeWildCols();
              hisRow = _this._row;
              _this._row = _this._addRow ? 4 : 3;
              _this._addRow && 3 == hisRow ? _this._reels.forEach(function(reel) {
                reel.AddCount(1, .01);
              }) : _this._addRow || 4 != hisRow || _this._reels.forEach(function(reel) {
                reel.StartRecycleSymbol(.01, _this._row);
              });
              _this.addSlotsSize(_this._addRow);
              _this.initAllSymbol();
              _this.hideWildSpine();
              _this.showWildSpine();

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      addSlotsSize: function addSlotsSize(bAdd) {
        this.node.height = this._row * this._cfg.symbolSize.height;
      },
      initAllSymbol: function initAllSymbol() {
        for (var col = 0; col < this._reels.length; col++) for (var row = 0; row < this._row + 1; row++) if (this._reels[col].GetSymbolByRow(row)) {
          this._reels[col].GetSymbolByRow(row).ClearState();
          this._reels[col].GetSymbolByRow(row).ShowRandomSymbol();
        }
      },
      initWildSpine: function initWildSpine() {
        for (var i = 1; i <= 5; i++) {
          var wild = cc.find(cc.js.formatStr("reels/reel%s/wild", i), this.node);
          wild.active = false;
          this._wildList.push(wild);
        }
      },
      showWildSpine: function showWildSpine() {
        var wildCols = cc.vv.gameData.getFreeWildCols();
        var addRow = cc.vv.gameData.getFreeAddRow();
        for (var i = 0; i < wildCols.length; i++) {
          var idx = wildCols[i];
          this._wildList[idx - 1].active = true;
          var animName = addRow ? "animation4_1" : "animation3_1";
          this._wildList[idx - 1].getComponent(sp.Skeleton).setAnimation(0, animName, true);
        }
      },
      hideWildSpine: function hideWildSpine() {
        for (var i = 0; i < this._wildList.length; i++) this._wildList[i].active = false;
      },
      StartMove: function StartMove() {
        this._super();
        this.showWildSpine();
      },
      onMsgSpine: function onMsgSpine(data) {
        this._gameInfo = data;
        var cards = data.cards;
        this.SetSlotsResult(cards);
      },
      OnSpinEnd: function OnSpinEnd() {
        this.ShowWinTrace();
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
        var wildCols = cc.vv.gameData.getFreeWildCols();
        var addRow = cc.vv.gameData.getFreeAddRow();
        var playWild = [];
        for (var key in allWinIdx) {
          var _idx = Number(key);
          if (wildCols.includes((_idx - 1) % 5 + 1)) playWild.push((_idx - 1) % 5); else {
            var symbol = this.GetSymbolByIdx(Number(key));
            if (symbol) {
              symbol.playWinAnimation();
              symbol.ShowKuang();
            }
          }
        }
        for (var _i2 = 0; _i2 < playWild.length; _i2++) {
          var animName = addRow ? "animation4" : "animation3";
          this._wildList[playWild[_i2]].getComponent(sp.Skeleton).setAnimation(0, animName, true);
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        var col = this._col * this._slotsType;
        return (reelIdx + col) * nIter;
      },
      CanStopSlot: function CanStopSlot() {
        return null != this._gameInfo;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Alexander_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5eda8cwbhI6ajr93I1nb0I", "Alexander_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      start: function start() {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._epicInfo = deskInfo.epicInfo;
        if (deskInfo.epicInfo) {
          this._bonusIdxs = deskInfo.epicInfo.bonusIdxs;
          this._bonusItems = deskInfo.epicInfo.bonusItems;
        }
        this._mapGame = deskInfo.mapGame;
        if (deskInfo.mapGame) {
          this._freeSlotsCnt = deskInfo.mapGame.slotCnt;
          this._freeAddRow = deskInfo.mapGame.extraRow;
          this._freeWildCols = deskInfo.mapGame.wildCols;
        }
        if (deskInfo.pageReward) {
          this._freeSlotsCnt = deskInfo.pageReward.slotCnt;
          this._freeAddRow = 1;
          this._freeWildCols = deskInfo.pageReward.wildCols;
        }
        this._pawStore = deskInfo.pawStore;
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._epicInfo = msg.epicInfo;
          this._bonusIdxs = msg.bonusIdxs;
          this._bonusItems = msg.bonusItems;
          this._mapGame = msg.mapGame;
          this._pawStore = msg.pawStore;
          this._freeWinCoin = msg.freeWinCoin;
        }
        this._super(msg);
      },
      setPopupScript: function setPopupScript(scp) {
        this._popScp = scp;
      },
      getPopupScript: function getPopupScript() {
        return this._popScp;
      },
      setBonusScript: function setBonusScript(scp) {
        this._bonusScp = scp;
      },
      getBonusScript: function getBonusScript() {
        return this._bonusScp;
      },
      setMapScript: function setMapScript(scp) {
        this._mapScp = scp;
      },
      getMapScript: function getMapScript() {
        return this._mapScp;
      },
      setFreeScript: function setFreeScript(scp) {
        this._freeScp = scp;
      },
      getFreeScript: function getFreeScript() {
        return this._freeScp;
      },
      setStoreScript: function setStoreScript(scp) {
        this._storeScp = scp;
      },
      getStoreScript: function getStoreScript() {
        return this._storeScp;
      },
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needBet;
      },
      setIsBonusGame: function setIsBonusGame(val) {
        this._isBonusGame = val;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
      },
      setEpicInfo: function setEpicInfo(val) {
        this._epicInfo = val;
      },
      getEpicInfo: function getEpicInfo() {
        return this._epicInfo;
      },
      setBonusIdxs: function setBonusIdxs(val) {
        this._bonusIdxs = val;
      },
      getBonusIdxs: function getBonusIdxs() {
        return this._bonusIdxs;
      },
      setBonusItems: function setBonusItems(val) {
        this._bonusItems = val;
      },
      getBonusItems: function getBonusItems() {
        return this._bonusItems;
      },
      setMapGame: function setMapGame(val) {
        this._mapGame = val;
      },
      getMapGame: function getMapGame() {
        return this._mapGame;
      },
      setIsFreeGame: function setIsFreeGame(val) {
        this._isFreeGame = val;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      setFreeAddRow: function setFreeAddRow(row) {
        this._freeAddRow = row;
      },
      getFreeAddRow: function getFreeAddRow() {
        return this._freeAddRow;
      },
      setFreeSlotsCnt: function setFreeSlotsCnt(val) {
        this._freeSlotsCnt = val;
      },
      getFreeSlotsCnt: function getFreeSlotsCnt() {
        return this._freeSlotsCnt;
      },
      setFreeWildCols: function setFreeWildCols(val) {
        this._freeWildCols = val;
      },
      getFreeWildCols: function getFreeWildCols() {
        return this._freeWildCols;
      },
      getFreeGameSlots: function getFreeGameSlots() {
        return this._gameInfo.freeGameSlots;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      },
      setPawStore: function setPawStore(val) {
        this._pawStore = val;
      },
      getPawStore: function getPawStore() {
        return this._pawStore;
      },
      _doPauseAction: function _doPauseAction(bPause) {
        this._super(bPause);
        var pauseActionNode = [];
        var FreeSlotCmp = this.getFreeScript();
        if (FreeSlotCmp) {
          FreeSlotCmp.enabled = bPause;
          for (var slot_i = 0; slot_i < FreeSlotCmp._slotsScpList.length; slot_i++) {
            var slotCmp = FreeSlotCmp._slotsScpList[slot_i];
            var reels = slotCmp._reels;
            for (var i = 0; i < reels.length; i++) {
              var item = reels[i];
              item.enabled = bPause;
              var symbols = item._symbols;
              for (var j = 0; j < symbols.length; j++) {
                var sysItem = symbols[j];
                sysItem.enabled = bPause;
                pauseActionNode.push(sysItem.node);
              }
            }
          }
        }
        for (var it = 0; it < pauseActionNode.length; it++) {
          pauseActionNode[it].active && (bPause ? pauseActionNode[it].resumeAllActions() : pauseActionNode[it].pauseAllActions());
          var symChild = pauseActionNode[it].children;
          for (var k = 0; k < symChild.length; k++) symChild[k].active && (bPause ? symChild[k].resumeAllActions() : symChild[k].pauseAllActions());
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Alexander_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5750yPdglH74LPhgRfDwOy", "Alexander_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("Alexander_Popup");
        script_popup.Init();
        cc.vv.gameData.setPopupScript(script_popup);
        var script_bonus = this.node.addComponent("Alexander_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.setBonusScript(script_bonus);
        var script_map = this.node.addComponent("Alexander_Map");
        script_map.Init();
        cc.vv.gameData.setMapScript(script_map);
        var script_free = this.node.addComponent("Alexander_FreeGame");
        script_free.Init();
        cc.vv.gameData.setFreeScript(script_free);
        var script_store = this.node.addComponent("Alexander_StoreGame");
        script_store.Init();
        cc.vv.gameData.setStoreScript(script_store);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Alexander_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "778e3CuJhdIDJ43J+Ua1KId", "Alexander_Map");
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
        _rtype: 2,
        _itemList: [],
        _canClick: false
      },
      start: function start() {},
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      Init: function Init() {
        this._node_map = cc.find("safe_node/node_map", this.node);
        this._node_map.active = false;
        this._spr_road1 = cc.find("node_road/spr_road1", this._node_map);
        this._spr_road2 = cc.find("node_road/spr_road2", this._node_map);
        this._node_road1 = cc.find("node_road/spine_road1", this._node_map);
        this._node_road2 = cc.find("node_road/spine_road2", this._node_map);
        this._node_road1.active = false;
        this._node_road2.active = false;
        for (var i = 1; i <= 38; i++) {
          var item = cc.find("node_items/item" + i, this._node_map);
          this._itemList.push(item);
        }
        this._lbl_free_cnt = cc.find("node_freeCnt/lbl", this._node_map);
        this._par_freeCnt = cc.find("node_freeCnt/par", this._node_map);
        this._par_freeCnt.active = false;
        this._node_freeType = cc.find("node_freeType", this._node_map);
        this._par_freeType = cc.find("node_freeType/par", this._node_map);
        this._par_freeType.active = false;
        this._spine_dog = cc.find("node_items/spine_dog", this._node_map);
        this._btn_sz = cc.find("btn_sz", this._node_map);
        this._btn_sz.off("click");
        Global.btnClickEvent(this._btn_sz, this.clickSzBtn, this);
        this._spine_sz = cc.find("spine_sz", this._btn_sz);
        this._sz_tip = cc.find("spine_tip", this._btn_sz);
        this._par_win = cc.find("safe_node/map_par_win", this.node);
        this._par_win.active = false;
        this._btn_entrance = cc.find("btn_entrance", this._node_map);
        this._spine_fei = cc.find("spine_fei_zz", this._node_map);
        this._spine_fei.active = false;
      },
      showMapGame: function showMapGame() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playBgm("map_bgm");
                _this._node_map.active = true;
                _this._mapGame = cc.vv.gameData.getMapGame();
                _this._curStep = _this._mapGame.currStep;
                _this.initMapItem();
                _this.initRoads();
                _this.initDog();
                _this.setFreeCnt();
                _this.initFreeType();
                _this.initWinCoin();
                _this.initSzBtn();
                _this.updatePawNum();
                cc.vv.gameData.GetBottomScript().SetWin(_this._mapGame.winCoin);
                _context.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                _this.setCanClick(true);
                _this._mapSuccess = success;

               case 17:
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
      endMapGame: function endMapGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("map_end");
              _context2.next = 3;
              return cc.vv.gameData.awaitTime(.8);

             case 3:
              cc.vv.gameData.SetTotalFree(_this2._mapGame.freeCnt);
              cc.vv.gameData.SetFreeTime(_this2._mapGame.freeCnt);
              cc.vv.gameData.setFreeAddRow(_this2._mapGame.extraRow);
              cc.vv.gameData.setFreeSlotsCnt(_this2._mapGame.slotCnt);
              cc.vv.gameData.setFreeWildCols(_this2._mapGame.wildCols);
              _context2.next = 10;
              return cc.vv.gameData.getPopupScript().playTriFreeAnim();

             case 10:
              cc.vv.gameData.getPopupScript().playQPAnim1();
              _context2.next = 13;
              return cc.vv.gameData.awaitTime(.5);

             case 13:
              cc.vv.gameData.GetBottomScript().ShowFreeModel(true, 0, _this2._mapGame.freeCnt);
              _context2.next = 16;
              return cc.vv.gameData.getFreeScript().initShowSlotsData(true);

             case 16:
              if (_this2._mapSuccess) {
                _this2._node_map.active = false;
                _this2._mapSuccess();
                _this2._mapSuccess = null;
              }

             case 17:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      hideMapNode: function hideMapNode() {
        this._node_map.active = false;
      },
      setCanClick: function setCanClick(val) {
        this._canClick = val;
      },
      initMapItem: function initMapItem() {
        var hisStep = this._mapGame.hisSteps;
        for (var i = 0; i < this._itemList.length; i++) {
          this._itemList[i].opacity = 255;
          this._itemList[i].active = !hisStep.includes(i + 1);
          cc.find("spr", this._itemList[i]) && (cc.find("spr", this._itemList[i]).active = true);
        }
      },
      initRoads: function initRoads() {
        var steps = this._mapGame.jumpSteps;
        if (steps.includes(29)) {
          this._node_road1.active = true;
          this._node_road1.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
          this._spr_road1.active = false;
        } else {
          this._node_road1.active = false;
          this._spr_road1.active = true;
        }
        if (steps.includes(21)) {
          this._node_road2.active = true;
          this._node_road2.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          this._spr_road2.active = false;
        } else {
          this._node_road2.active = false;
          this._spr_road2.active = true;
        }
      },
      initDog: function initDog() {
        this._spine_dog.position = this._itemList[this._curStep - 1].position;
        this._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
      },
      setFreeCnt: function setFreeCnt() {
        this._lbl_free_cnt.getComponent(cc.Label).string = this._mapGame.freeCnt;
      },
      initFreeType: function initFreeType() {
        this._slotCnt = this._mapGame.slotCnt;
        this._extraRow = this._mapGame.extraRow;
        this._wildCols = this._mapGame.wildCols;
        var scaleList = [ 1, .8, .6, .6 ];
        var pic_row4 = "theme128_map_3";
        var pic_wild4 = "theme128_map_2";
        var pic_row3 = "theme128_map_6";
        var pic_wild3 = "theme128_map_4";
        var map_altas = cc.vv.gameData.GetAtlasByName("map");
        this._node_freeType.setScale(scaleList[this._slotCnt - 1]);
        var slotsList = [];
        for (var i = 1; i <= 4; i++) {
          var slots = cc.find("slots_" + i, this._node_freeType);
          if (i > this._slotCnt) slots.active = false; else {
            slots.active = true;
            var spr_row = cc.find("row", slots);
            spr_row.getComponent(cc.Sprite).spriteFrame = map_altas.getSpriteFrame(this._extraRow ? pic_row4 : pic_row3);
            for (var j = 1; j <= 5; j++) {
              cc.find("wild_" + j, slots).active = this._wildCols.includes(j);
              cc.find("wild_" + j, slots).getComponent(cc.Sprite).spriteFrame = map_altas.getSpriteFrame(this._extraRow ? pic_wild4 : pic_wild3);
            }
            slotsList.push(slots);
          }
        }
        var width = cc.find("row", slotsList[0]).width / 2;
        var height = cc.find("row", slotsList[0]).height / 2;
        if (1 == slotsList.length) slotsList[0].position = cc.v2(0, 0); else if (2 == slotsList.length) {
          slotsList[0].position = cc.v2(0, height);
          slotsList[1].position = cc.v2(0, -height);
        } else if (3 == slotsList.length) {
          slotsList[0].position = cc.v2(0, height);
          slotsList[1].position = cc.v2(-width, -height);
          slotsList[2].position = cc.v2(width, -height);
        } else if (4 == slotsList.length) {
          slotsList[0].position = cc.v2(-width, height);
          slotsList[1].position = cc.v2(width, height);
          slotsList[2].position = cc.v2(-width, -height);
          slotsList[3].position = cc.v2(width, -height);
        }
      },
      initWinCoin: function initWinCoin() {
        this._mapGame.winCoin > 0 && cc.vv.gameData.GetBottomScript().SetWin(this._mapGame.winCoin);
      },
      initSzBtn: function initSzBtn() {
        this._diceId = 6;
        this._spine_sz.getComponent(sp.Skeleton).setSkin("default");
        this._spine_sz.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._sz_tip.active = false;
        this.playSzIdleAnim(true);
      },
      updatePawNum: function updatePawNum(addPaw) {
        var pawStore = cc.vv.gameData.getPawStore();
        if (addPaw) {
          pawStore.pawCnt += addPaw;
          cc.vv.gameData.setPawStore(pawStore);
          cc.vv.gameData.getStoreScript().updateCurMoney();
          var spine_fz = cc.find("spine_fz", this._btn_entrance);
          spine_fz.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
          spine_fz.getComponent(sp.Skeleton).addAnimation(0, "animation4", true);
        }
        var lbl_money = cc.find("lbl_money", this._btn_entrance);
        lbl_money.getComponent(cc.Label).string = Global.FormatNumToComma(pawStore.pawCnt);
      },
      playSzIdleAnim: function playSzIdleAnim(bPlay) {
        var self = this;
        if (bPlay) cc.tween(this._sz_tip).delay(3).call(function() {
          self._sz_tip.active = true;
          self._sz_tip.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          self._sz_tip.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
        }).start(); else {
          this._sz_tip.stopAllActions();
          if (this._sz_tip.active) {
            var entry = this._sz_tip.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
            this._sz_tip.getComponent(sp.Skeleton).setTrackCompleteListener(entry, function() {
              self._sz_tip.active = false;
            });
          }
        }
      },
      clickSzBtn: function clickSzBtn() {
        if (!this._canClick) return;
        this.setCanClick(false);
        this.onSendSeq();
      },
      onSendSeq: function onSendSeq() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {
          rtype: this._rtype
        };
        cc.vv.NetManager.send(req, true);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        cc.log(msg);
        if (200 === msg.code && msg.data && msg.data.rtype == this._rtype) {
          this._mapGame = msg.data.mapGame;
          this._diceInfo = msg.data.diceInfo;
          this.showClickResult();
        }
      },
      showClickResult: function showClickResult() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var curStep;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3._diceId = _this3._diceInfo.diceId;
              _this3._step = _this3._diceInfo.step;
              _this3._addCoin = _this3._diceInfo.addCoin;
              _this3._addFreeCnt = _this3._diceInfo.addFreeCnt;
              _this3._addReel = _this3._diceInfo.addReel;
              _this3._addRow = _this3._diceInfo.addRow;
              _this3._addWildCol = _this3._diceInfo.addWildCol;
              _this3._pawCnt = _this3._diceInfo.pawCnt;
              _this3._isEnd = _this3._diceInfo.isEnd;
              curStep = _this3._mapGame.currStep;
              _this3.playSzIdleAnim(false);
              _context3.next = 13;
              return _this3.playSzAnim();

             case 13:
              _context3.next = 15;
              return cc.vv.gameData.awaitTime(.5);

             case 15:
              if (!(_this3._step && _this3._step > 0)) {
                _context3.next = 34;
                break;
              }
              _context3.next = 18;
              return _this3.playDogMove1();

             case 18:
              if (curStep != _this3._curStep) if (_this3._addReel > 0 || _this3._addWildCol > 0) ; else {
                _this3._addCoin = _this3._addCoin / 2;
                _this3._mapGame.winCoin -= _this3._addCoin;
              }
              if (!(_this3._addCoin && _this3._addCoin > 0)) {
                _context3.next = 24;
                break;
              }
              _context3.next = 22;
              return _this3.playWinCoin();

             case 22:
              _context3.next = 32;
              break;

             case 24:
              if (!(_this3._addFreeCnt > 0)) {
                _context3.next = 29;
                break;
              }
              _context3.next = 27;
              return _this3.playWinFreeCnt();

             case 27:
              _context3.next = 32;
              break;

             case 29:
              if (!(_this3._addReel > 0 || _this3._addRow > 0 || _this3._addWildCol > 0)) {
                _context3.next = 32;
                break;
              }
              _context3.next = 32;
              return _this3.playWinSlots();

             case 32:
              _context3.next = 41;
              break;

             case 34:
              if (!(_this3._pawCnt && _this3._pawCnt > 0)) {
                _context3.next = 41;
                break;
              }
              Global.SlotsSoundMgr.playEffect("fly2");
              _this3._spine_fei.active = true;
              _this3._spine_fei.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _context3.next = 40;
              return cc.vv.gameData.awaitTime(.5);

             case 40:
              _this3.updatePawNum(_this3._pawCnt);

             case 41:
              if (!(curStep != _this3._curStep)) {
                _context3.next = 52;
                break;
              }
              _context3.next = 44;
              return _this3.playDogMove2(curStep);

             case 44:
              if (!(_this3._addReel > 0 || _this3._addWildCol > 0)) {
                _context3.next = 49;
                break;
              }
              _context3.next = 47;
              return _this3.playWinSlots();

             case 47:
              _context3.next = 52;
              break;

             case 49:
              _this3._mapGame.winCoin += _this3._addCoin;
              _context3.next = 52;
              return _this3.playWinCoin();

             case 52:
              if (_this3._isEnd) _this3.endMapGame(); else {
                _this3.setCanClick(true);
                _this3.playSzIdleAnim(true);
              }

             case 53:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playSzAnim: function playSzAnim() {
        var _this4 = this;
        return new Promise(function(success, failed) {
          Global.SlotsSoundMgr.playEffect("dice_spin");
          var self = _this4;
          var skin = _this4._diceId > 6 ? 100 * (_this4._diceId - 6) : _this4._diceId;
          _this4._spine_sz.getComponent(sp.Skeleton).setSkin("sz" + skin);
          _this4._spine_sz.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          _this4._spine_sz.getComponent(sp.Skeleton).setCompleteListener(function() {
            Global.SlotsSoundMgr.playEffect("dice_stop");
            success();
          });
        });
      },
      playDogMove1: function playDogMove1() {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var i, endPos;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                i = 0;

               case 1:
                if (!(i < _this5._step)) {
                  _context4.next = 15;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("dog1");
                _this5._curStep += 1;
                cc.log("this._curStep", _this5._curStep);
                _this5._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                endPos = cc.v2(_this5._itemList[_this5._curStep - 1].x, _this5._itemList[_this5._curStep - 1].y - 20);
                cc.tween(_this5._spine_dog).to(.5, {
                  position: endPos
                }).start();
                _context4.next = 10;
                return cc.vv.gameData.awaitTime(.7);

               case 10:
                if (!(_this5._curStep >= _this5._itemList.length)) {
                  _context4.next = 12;
                  break;
                }
                return _context4.abrupt("break", 15);

               case 12:
                i++;
                _context4.next = 1;
                break;

               case 15:
                _this5._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
                success();

               case 17:
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
      playDogMove2: function playDogMove2(curStep) {
        var _this6 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var startPos, endPos, cetPos;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("dog2");
                _this6._curStep = curStep;
                _this6._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                startPos = _this6._spine_dog.position;
                endPos = cc.v2(_this6._itemList[curStep - 1].position.x, _this6._itemList[curStep - 1].position.y - 20);
                if (!(6 == curStep)) {
                  _context5.next = 15;
                  break;
                }
                cetPos = cc.v2(startPos.x - 100, startPos.y - 100);
                cc.tween(_this6._spine_dog).bezierTo(.8, startPos, cetPos, endPos).start();
                _context5.next = 10;
                return cc.vv.gameData.awaitTime(.8);

               case 10:
                _this6._node_road1.active = true;
                _this6._node_road1.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                _this6._spr_road1.active = false;
                _context5.next = 21;
                break;

               case 15:
                cc.tween(_this6._spine_dog).to(.8, {
                  position: endPos
                }).start();
                _context5.next = 18;
                return cc.vv.gameData.awaitTime(.8);

               case 18:
                _this6._node_road2.active = true;
                _this6._node_road2.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                _this6._spr_road2.active = false;

               case 21:
                _this6._spine_dog.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
                success();

               case 23:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      playWinCoin: function playWinCoin() {
        var _this7 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var lbl, endNode, endPos;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("coin");
                _this7._par_win.active = true;
                _this7._par_win.getComponent(cc.ParticleSystem).resetSystem();
                _this7._par_win.position = _this7._par_win.parent.convertToNodeSpaceAR(_this7._itemList[_this7._curStep - 1].convertToWorldSpaceAR(cc.v2(0, 0)));
                lbl = cc.find("lbl", _this7._par_win);
                lbl.active = true;
                lbl.setScale(1);
                lbl.getComponent(cc.Label).string = Global.formatNumShort(_this7._addCoin, 1);
                _context6.next = 10;
                return cc.vv.gameData.awaitTime(1);

               case 10:
                endNode = cc.find("safe_node/LMSlots_Bottom/winBg/lbl_winNum_nor", _this7.node);
                endPos = _this7._par_win.parent.convertToNodeSpaceAR(endNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                cc.tween(lbl).to(.5, {
                  scale: .2
                }).start();
                cc.tween(_this7._par_win).to(.5, {
                  position: endPos
                }).start();
                _context6.next = 16;
                return cc.vv.gameData.awaitTime(.5);

               case 16:
                _this7._par_win.active = false;
                cc.vv.gameData.GetBottomScript().SetWin(_this7._mapGame.winCoin);
                success();

               case 19:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      playWinFreeCnt: function playWinFreeCnt() {
        var _this8 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
            var item, spr, cpr_copy, endPos;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fly4");
                _this8._par_win.active = true;
                _this8._par_win.getComponent(cc.ParticleSystem).resetSystem();
                cc.find("lbl", _this8._par_win).active = false;
                item = _this8._itemList[_this8._curStep - 1];
                spr = cc.find("spr", item);
                spr.active = false;
                cpr_copy = cc.instantiate(spr);
                cpr_copy.parent = _this8._par_win;
                cpr_copy.active = true;
                _this8._par_win.position = _this8._par_win.parent.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.v2(0, 0)));
                endPos = _this8._par_win.parent.convertToNodeSpaceAR(_this8._lbl_free_cnt.convertToWorldSpaceAR(cc.v2(0, 0)));
                cc.tween(_this8._par_win).to(.5, {
                  position: endPos
                }).start();
                cc.tween(item).to(.5, {
                  opacity: 0
                }).start();
                _context7.next = 16;
                return cc.vv.gameData.awaitTime(.5);

               case 16:
                cpr_copy.destroy();
                _this8._par_win.active = false;
                _this8._par_freeCnt.active = true;
                _this8._par_freeCnt.getComponent(cc.ParticleSystem).resetSystem();
                _this8.setFreeCnt();
                success();

               case 22:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      playWinSlots: function playWinSlots() {
        var _this9 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            var item, spr, cpr_copy, endPos;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fly3");
                _this9._par_win.active = true;
                _this9._par_win.getComponent(cc.ParticleSystem).resetSystem();
                cc.find("lbl", _this9._par_win).active = false;
                item = _this9._itemList[_this9._curStep - 1];
                spr = cc.find("spr", item);
                spr.active = false;
                cpr_copy = cc.instantiate(spr);
                cpr_copy.parent = _this9._par_win;
                cpr_copy.active = true;
                _this9._par_win.position = _this9._par_win.parent.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.v2(0, 0)));
                endPos = _this9._par_win.parent.convertToNodeSpaceAR(_this9._node_freeType.convertToWorldSpaceAR(cc.v2(0, 0)));
                cc.tween(_this9._par_win).to(.5, {
                  position: endPos
                }).start();
                cc.tween(item).to(.5, {
                  opacity: 0
                }).start();
                _context8.next = 16;
                return cc.vv.gameData.awaitTime(.5);

               case 16:
                cpr_copy.destroy();
                _this9._par_win.active = false;
                _this9._par_freeType.active = true;
                _this9._par_freeType.getComponent(cc.ParticleSystem).resetSystem();
                _this9.initFreeType();
                success();

               case 22:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  Alexander_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a16dXNbYlCcJS4pOjcRfrX", "Alexander_Popup");
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
      start: function start() {},
      Init: function Init() {
        this._node_popup = cc.find("safe_node/node_popup", this.node);
        this._node_popup.active = false;
        this._node_tri_bonus = cc.find("node_tri_bonus", this._node_popup);
        this._node_tri_map = cc.find("node_tri_map", this._node_popup);
        this._node_tri_free = cc.find("node_tri_free", this._node_popup);
        this._node_end_free = cc.find("node_end_free", this._node_popup);
        this._node_tri_superFree = cc.find("node_tri_superFree", this._node_popup);
        this._node_unlock_page = cc.find("node_unlock_page", this._node_popup);
        this._node_tri_bonus_again = cc.find("node_tri_bonus_again", this._node_popup);
        this._node_tri_bonus.active = false;
        this._node_tri_map.active = false;
        this._node_tri_free.active = false;
        this._node_end_free.active = false;
        this._node_tri_superFree.active = false;
        this._node_unlock_page.active = false;
        this._node_tri_bonus_again.active = false;
        this._node_qp = cc.find("safe_node/node_qp", this.node);
        this._node_qp.active = false;
        this._qieping_1 = cc.find("qieping_01", this._node_qp);
        this._qieping_2 = cc.find("qieping_02", this._node_qp);
        this._qieping_3 = cc.find("qieping_03", this._node_qp);
        this._qieping_1.active = false;
        this._qieping_2.active = false;
        this._qieping_3.active = false;
      },
      playTriBonusAnim: function playTriBonusAnim() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("normal_dialog_show4");
                _this._node_popup.active = true;
                _this._node_tri_bonus.active = true;
                _this._node_tri_bonus.setScale(0);
                cc.tween(_this._node_tri_bonus).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context.next = 7;
                return cc.vv.gameData.awaitTime(2);

               case 7:
                cc.tween(_this._node_tri_bonus).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context.next = 10;
                return cc.vv.gameData.awaitTime(.5);

               case 10:
                _this._node_tri_bonus.active = false;
                _this._node_popup.active = false;
                success();

               case 13:
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
      playTriMapAnim: function playTriMapAnim() {
        var _this2 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("map_dialog");
                _this2._node_popup.active = true;
                _this2._node_tri_map.active = true;
                _this2._node_tri_map.setScale(0);
                cc.tween(_this2._node_tri_map).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context2.next = 7;
                return cc.vv.gameData.awaitTime(2);

               case 7:
                cc.tween(_this2._node_tri_map).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context2.next = 10;
                return cc.vv.gameData.awaitTime(.5);

               case 10:
                _this2._node_tri_map.active = false;
                _this2._node_popup.active = false;
                success();

               case 13:
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
      playTriFreeAnim: function playTriFreeAnim() {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var freeCnt, addRow, slotsCnt, wildCols, map_altas, dialog_altas, j, btn_start, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fg_dialog");
                _this3._node_popup.active = true;
                _this3._node_tri_free.active = true;
                _this3._node_tri_free.setScale(0);
                cc.tween(_this3._node_tri_free).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                freeCnt = cc.vv.gameData.GetTotalFree();
                addRow = cc.vv.gameData.getFreeAddRow();
                slotsCnt = cc.vv.gameData.getFreeSlotsCnt();
                wildCols = cc.vv.gameData.getFreeWildCols();
                map_altas = cc.vv.gameData.GetAtlasByName("map");
                dialog_altas = cc.vv.gameData.GetAtlasByName("dialog");
                cc.find("lbl_cnt", _this3._node_tri_free).getComponent(cc.Label).string = freeCnt;
                cc.find("spr_map", _this3._node_tri_free).getComponent(cc.Sprite).spriteFrame = map_altas.getSpriteFrame(addRow ? "theme128_map_3" : "theme128_map_6");
                for (j = 1; j <= 5; j++) {
                  cc.find("spr_map/wild_" + j, _this3._node_tri_free).active = wildCols.includes(j);
                  cc.find("spr_map/wild_" + j, _this3._node_tri_free).getComponent(cc.Sprite).spriteFrame = map_altas.getSpriteFrame(addRow ? "theme128_map_2" : "theme128_map_4");
                }
                cc.find("spr_cnt", _this3._node_tri_free).getComponent(cc.Sprite).spriteFrame = dialog_altas.getSpriteFrame("theme128_popup_free_cnt" + slotsCnt);
                _context5.next = 17;
                return cc.vv.gameData.awaitTime(.5);

               case 17:
                btn_start = cc.find("bg_btn/btn_start", _this3._node_tri_free);
                btn_start.off("click");
                btn_start.getComponent(cc.Button).interactable = true;
                self = _this3;
                clickFunc = function() {
                  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click1");
                        Global.SlotsSoundMgr.playEffect("normal_dialog_close");
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(self._node_tri_free).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context3.next = 6;
                        return cc.vv.gameData.awaitTime(.5);

                       case 6:
                        self._node_popup.active = false;
                        self._node_tri_free.active = false;
                        success();

                       case 9:
                       case "end":
                        return _context3.stop();
                      }
                    }, _callee3);
                  }));
                  return function clickFunc() {
                    return _ref4.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      btn_start.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                })));

               case 24:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      playEndFreeAnim: function playEndFreeAnim() {
        var _this4 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            var wincoin, lbl, btn_collect, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("normal_dialog_show2");
                _this4._node_popup.active = true;
                _this4._node_end_free.active = true;
                _this4._node_end_free.setScale(0);
                cc.tween(_this4._node_end_free).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                wincoin = cc.vv.gameData.getFreeWinCoin();
                lbl = cc.find("spr_tiao/lbl_cnt", _this4._node_end_free);
                Global.doRoallNumEff(lbl, 0, wincoin, 1.5, null, null, 0, true);
                _context8.next = 10;
                return cc.vv.gameData.awaitTime(.5);

               case 10:
                btn_collect = cc.find("bg_btn/btn_collect", _this4._node_end_free);
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
                self = _this4;
                clickFunc = function() {
                  var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click1");
                        btn_collect.getComponent(cc.Button).interactable = false;
                        if (!(Global.FormatCommaNumToNum(lbl.getComponent(cc.Label).string) != wincoin)) {
                          _context6.next = 7;
                          break;
                        }
                        lbl.stopAllActions();
                        lbl.getComponent(cc.Label).string = Global.FormatNumToComma(wincoin);
                        _context6.next = 7;
                        return cc.vv.gameData.awaitTime(.3);

                       case 7:
                        cc.tween(self._node_end_free).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context6.next = 10;
                        return cc.vv.gameData.awaitTime(.5);

                       case 10:
                        self._node_popup.active = false;
                        self._node_end_free.active = false;
                        success();

                       case 13:
                       case "end":
                        return _context6.stop();
                      }
                    }, _callee6);
                  }));
                  return function clickFunc() {
                    return _ref7.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                })));

               case 17:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x7, _x8) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      playTriSuperFreeAnim: function playTriSuperFreeAnim(freeCnt, curPage) {
        var _this5 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success, failed) {
            var claw_atlas, btn_start, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("normal_dialog_show1");
                _this5._node_popup.active = true;
                _this5._node_tri_superFree.active = true;
                _this5._node_tri_superFree.setScale(0);
                cc.tween(_this5._node_tri_superFree).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                claw_atlas = cc.vv.gameData.GetAtlasByName("claw_store");
                cc.find("lbl_cnt", _this5._node_tri_superFree).getComponent(cc.Label).string = freeCnt;
                cc.find("spr_type", _this5._node_tri_superFree).getComponent(cc.Sprite).spriteFrame = claw_atlas.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s", curPage));
                cc.find("spr_type/spr", _this5._node_tri_superFree).getComponent(cc.Sprite).spriteFrame = claw_atlas.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s_0", curPage));
                _context11.next = 11;
                return cc.vv.gameData.awaitTime(.5);

               case 11:
                btn_start = cc.find("bg_btn/btn_start", _this5._node_tri_superFree);
                btn_start.off("click");
                btn_start.getComponent(cc.Button).interactable = true;
                self = _this5;
                clickFunc = function() {
                  var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click1");
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(self._node_tri_superFree).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context9.next = 5;
                        return cc.vv.gameData.awaitTime(.5);

                       case 5:
                        self._node_popup.active = false;
                        self._node_tri_superFree.active = false;
                        success();

                       case 8:
                       case "end":
                        return _context9.stop();
                      }
                    }, _callee9);
                  }));
                  return function clickFunc() {
                    return _ref10.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      btn_start.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                })));

               case 18:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x9, _x10) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      playUnlockPageAnim: function playUnlockPageAnim(freeCnt, curPage) {
        var _this6 = this;
        return new Promise(function() {
          var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success, failed) {
            var node_normal, node_all, btn_start, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("normal_dialog_show3");
                _this6._node_popup.active = true;
                _this6._node_unlock_page.active = true;
                _this6._node_unlock_page.setScale(0);
                cc.tween(_this6._node_unlock_page).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                node_normal = cc.find("node_normal", _this6._node_unlock_page);
                node_all = cc.find("node_all", _this6._node_unlock_page);
                node_normal.active = curPage < 4;
                node_all.active = 4 == curPage;
                _context14.next = 11;
                return cc.vv.gameData.awaitTime(.5);

               case 11:
                btn_start = cc.find("bg_btn/btn_start", _this6._node_unlock_page);
                btn_start.off("click");
                btn_start.getComponent(cc.Button).interactable = true;
                self = _this6;
                clickFunc = function() {
                  var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) switch (_context12.prev = _context12.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click1");
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(self._node_unlock_page).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context12.next = 5;
                        return cc.vv.gameData.awaitTime(.5);

                       case 5:
                        self._node_popup.active = false;
                        self._node_unlock_page.active = false;
                        success();

                       case 8:
                       case "end":
                        return _context12.stop();
                      }
                    }, _callee12);
                  }));
                  return function clickFunc() {
                    return _ref13.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      btn_start.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                })));

               case 18:
               case "end":
                return _context14.stop();
              }
            }, _callee14);
          }));
          return function(_x11, _x12) {
            return _ref12.apply(this, arguments);
          };
        }());
      },
      playBonusAgainAnim: function playBonusAgainAnim() {
        var _this7 = this;
        return new Promise(function() {
          var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(success, failed) {
            var btn_start, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("normal_dialog_show5");
                _this7._node_popup.active = true;
                _this7._node_tri_bonus_again.active = true;
                _this7._node_tri_bonus_again.setScale(0);
                cc.tween(_this7._node_tri_bonus_again).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context17.next = 7;
                return cc.vv.gameData.awaitTime(.5);

               case 7:
                btn_start = cc.find("btn_start", _this7._node_tri_bonus_again);
                btn_start.off("click");
                btn_start.getComponent(cc.Button).interactable = true;
                self = _this7;
                clickFunc = function() {
                  var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                    return regeneratorRuntime.wrap(function _callee15$(_context15) {
                      while (1) switch (_context15.prev = _context15.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("click1");
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(self._node_tri_bonus_again).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context15.next = 5;
                        return cc.vv.gameData.awaitTime(.5);

                       case 5:
                        self._node_popup.active = false;
                        self._node_tri_bonus_again.active = false;
                        success();

                       case 8:
                       case "end":
                        return _context15.stop();
                      }
                    }, _callee15);
                  }));
                  return function clickFunc() {
                    return _ref16.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      btn_start.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                })));

               case 14:
               case "end":
                return _context17.stop();
              }
            }, _callee17);
          }));
          return function(_x13, _x14) {
            return _ref15.apply(this, arguments);
          };
        }());
      },
      playQPAnim1: function playQPAnim1() {
        Global.SlotsSoundMgr.playEffect("transition1");
        var self = this;
        this._node_qp.active = true;
        this._qieping_1.active = true;
        this._qieping_1.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._qieping_1.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._node_qp.active = false;
          self._qieping_1.active = false;
        });
      },
      playQPAnim2: function playQPAnim2() {
        Global.SlotsSoundMgr.playEffect("transition2");
        var self = this;
        this._node_qp.active = true;
        this._qieping_2.active = true;
        this._qieping_2.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._qieping_2.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._node_qp.active = false;
          self._qieping_2.active = false;
        });
      },
      playQPAnim3: function playQPAnim3() {
        Global.SlotsSoundMgr.playEffect("transition2");
        var self = this;
        this._node_qp.active = true;
        this._qieping_3.active = true;
        this._qieping_3.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
        this._qieping_3.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._node_qp.active = false;
          self._qieping_3.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Alexander_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b8e5E78qdA+7IdMuf9IAHZ", "Alexander_Reel");
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
      start: function start() {},
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) && item.playStopAnimation();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
          var reelStopEffect = "";
          var symbolEffect = "";
          var hasSymbol = false;
          var _iterator2 = _createForOfIteratorHelper(this._reelState), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _info = _step2.value;
              if (_info.noEff) {
                symbolEffect = "";
                hasSymbol = true;
              } else if (_info.isStop) {
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound : "";
                hasSymbol = true;
              } else reelStopEffect = _info.reelStopSound ? _info.reelStopSound : "";
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          hasSymbol && (reelStopEffect = symbolEffect);
          var soundPath = this._cfg.reelStateInfo[0].path;
          soundPath || (soundPath = cc.vv.gameData.getGameDir());
          "" != reelStopEffect && cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        var anti = cc.find("Canvas/safe_node/slots/anti");
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator3 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var info = _step3.value;
                var node = cc.find(cc.js.formatStr("%s_%s", info.antiNode, this._reelIdx + 1), anti);
                if (node && node.active) {
                  node.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } else {
          var _node = cc.find(cc.js.formatStr("%s_%s", name, this._reelIdx + 1), anti);
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Alexander_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "920a6epRZpHipAmXmIVpDUm", "Alexander_Slots");
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
      start: function start() {},
      Init: function Init() {
        this._btn_entrance = cc.find("btn_entrance", this.node);
        this._spr_bonusType = cc.find("spr_bonusCnt", this.node);
        Global.btnClickEvent(this._spr_bonusType, this.onclickBonusType, this);
        this._normalSpine = cc.find("reels/spine", this.node);
        this._normalSpine.on("click", this.slotsSpine, this);
        this._normalSpine.getComponent(cc.Button).interactable = false;
        this._stopNode = cc.find("reels/stop", this.node);
        this._stopNode.active = false;
        this._stopNode.on("click", this.onStop, this);
        this._super();
        this.showBonusType();
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var epicInfo, allFreeCnt, mapGame;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._topScript.SetBackLobby(false);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              epicInfo = cc.vv.gameData.getEpicInfo();
              if (!epicInfo) {
                _context.next = 21;
                break;
              }
              _this.showBonusGameView(true);
              _this.Backup();
              _this.setAllSymbolMask(true);
              _this.initBonusSymbol();
              _this._bottomScript.SetWin(0);
              _context.next = 11;
              return cc.vv.gameData.getBonusScript().enterBonusGame();

             case 11:
              cc.vv.gameData.getPopupScript().playQPAnim2();
              _context.next = 14;
              return cc.vv.gameData.awaitTime(.7);

             case 14:
              _this.showBonusGameView(false);
              _this.Resume();
              _this.setAllSymbolMask(false);
              _context.next = 19;
              return cc.vv.gameData.awaitTime(1);

             case 19:
              _context.next = 22;
              break;

             case 21:
              _this.showBonusGameView(false);

             case 22:
              allFreeCnt = cc.vv.gameData.GetTotalFree();
              if (!(allFreeCnt > 0)) {
                _context.next = 26;
                break;
              }
              _context.next = 26;
              return cc.vv.gameData.getFreeScript().initShowSlotsData(false);

             case 26:
              mapGame = cc.vv.gameData.getMapGame();
              if (!(mapGame && 1 == mapGame.state)) {
                _context.next = 30;
                break;
              }
              _context.next = 30;
              return cc.vv.gameData.getMapScript().showMapGame();

             case 30:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 32:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      initBonusSymbol: function initBonusSymbol() {
        var _this2 = this;
        var bonusIdxs = cc.vv.gameData.getBonusIdxs();
        var bonusItems = cc.vv.gameData.getBonusItems();
        bonusIdxs.forEach(function(idx) {
          _this2._reels[idx - 1].GetSymbolByRow(0).ShowById(3, bonusItems[bonusIdxs.indexOf(idx)]);
          _this2._reels[idx - 1].GetSymbolByRow(0).playBonusIdleAnim();
        });
      },
      slotsSpine: function slotsSpine() {
        this._bottomScript.OnClickSpin();
      },
      onStop: function onStop() {
        this._stopNode.active = false;
        this._bottomScript.OnClickStop();
      },
      setStopNodeState: function setStopNodeState(bShow) {
        this._stopNode.active = bShow;
      },
      CanDoNextRound: function CanDoNextRound() {
        this._super();
        this._normalSpine.getComponent(cc.Button).interactable = this._bottomScript.GetSpinBtnState();
      },
      StartMove: function StartMove() {
        this._normalSpine.getComponent(cc.Button).interactable = false;
        if (cc.vv.gameData.isBonusGame()) this.bonusStartMove(); else if (cc.vv.gameData.isFreeGame()) cc.vv.gameData.getFreeScript().StartMove(); else {
          this._super();
          Global.SlotsSoundMgr.playNormalBgm();
          this._isSpinEnd = false;
        }
      },
      StopMove: function StopMove() {
        cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().StopMove() : this._super();
      },
      bonusStartMove: function bonusStartMove() {
        this._bStopRightnow = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this._reelMax = [];
        var reels = [];
        var reelIdxs = [];
        var bonusIdxs = cc.vv.gameData.getBonusIdxs();
        this._reels.forEach(function(reel) {
          if (!bonusIdxs.includes(reel.GetReelIdx() + 1)) {
            reels.push(reel);
            reelIdxs.push(reel.GetReelIdx());
          }
        });
        this.MoveReels(reels);
        this.setMoveLastIdx(reelIdxs);
        this._stopTime = this.GetStopTime();
      },
      setMoveLastIdx: function setMoveLastIdx(reelIdxs) {
        var max = reelIdxs[0];
        var reelMax = [];
        reelIdxs.forEach(function(idx) {
          (idx % 5 > max % 5 || idx % 5 == max % 5 && idx / 3 > max / 3) && (max = idx);
          reelMax[idx % 5] = reelMax[idx % 5] ? Math.max(reelMax[idx % 5], idx) : idx;
        });
        this.moveReelLastIdx = max;
        cc.log("StartMove\uff1athis.moveReelLastIdx:", this.moveReelLastIdx);
        this._reelMax = reelMax;
        cc.log(this._reelMax);
      },
      getLastStopReel: function getLastStopReel() {
        return this._reelMax;
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        var bonusIdxs = cc.vv.gameData.getBonusIdxs();
        var bonusItems = cc.vv.gameData.getBonusItems();
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = {};
            bonusIdxs && bonusIdxs.includes(i + 1) && (res.data = bonusItems[bonusIdxs.indexOf(i + 1)]);
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
            for (var _i2 = 0; _i2 < reelResults.length; _i2++) {
              var item = _this3._reels[_i2];
              var reelRes = reelResults[_i2];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i2] > 0 && isContinuous && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous && (stateInfo.isStop = true);
              stateInfo.continuous && stateInfo.counts[_i2] > 0 && 0 == reelCountOfID && (isContinuous = false);
              item.AddReelStateInfo(Global.copy(stateInfo));
              for (var j = 1; j < 4; j++) {
                var item_1 = _this3._reels[5 * j + _i2];
                var info_1 = Global.copy(stateInfo);
                info_1.isAnt = false;
                info_1.noEff = true;
                item_1.AddReelStateInfo(info_1);
              }
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop();
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        if (!this._bStopRightnow) {
          var isPlayAnit = false;
          for (var i = 0; i < this._reels.length; i++) {
            var idx = this._reels[i].GetReelIdx();
            idx == colIdx + 1 && (isPlayAnit = this._reels[i].playAntiAnimation());
            if (idx % 5 > colIdx % 5 && isPlayAnit) {
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              this._reels[i].AddDelayTime(nAddSpeedTime);
            }
          }
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().onMsgSpine(msg) : this._super(msg);
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        if (cc.vv.gameData.isBonusGame()) {
          if (3 == this._reels[colIdx].GetSymbolByRow(0).GetShowId()) {
            this._reels[colIdx].GetSymbolByRow(0).playBonusIdleAnim();
            Global.SlotsSoundMgr.playEffect("symbol_coin");
          }
          colIdx == this._reelMax[colIdx % 5] && Global.SlotsSoundMgr.playEffect("reel_stop");
        } else {
          var pawInfo = this._gameInfo.pawInfo;
          if (pawInfo && pawInfo.totalCnt > 0) {
            var cnts = pawInfo.cnts;
            var idxs = pawInfo.idxs;
            for (var i = 0; i < idxs.length; i++) if (idxs[i] == colIdx + 1) {
              this._isSpinEnd || this.GetSymbolByIdx(idxs[i]).showPaw(this.getPawAnimType(cnts[i]));
              break;
            }
          }
          this._super(colIdx);
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        cc.vv.gameData.isBonusGame() ? cc.vv.gameData.getBonusScript().onBonusSpinEnd() : cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().OnSpinEnd() : this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var pawInfo, nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this4._isSpinEnd = true;
              pawInfo = _this4._gameInfo.pawInfo;
              pawInfo && pawInfo.totalCnt > 0 && _this4.flyPaw();
              _this4.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.getFreeWinCoin());
              _context2.next = 9;
              return new Promise(function(success, failed) {
                _this4.ShowBottomWin(nWin, nTotal, true, success);
              });

             case 9:
              if (!_this4._gameInfo.epicInfo) {
                _context2.next = 12;
                break;
              }
              _context2.next = 12;
              return _this4.triBonusGame();

             case 12:
              if (!_this4._gameInfo.mapGame) {
                _context2.next = 15;
                break;
              }
              _context2.next = 15;
              return _this4.triMapGame();

             case 15:
              _this4.CanDoNextRound();

             case 16:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      initAllSymbol: function initAllSymbol() {
        for (var col = 0; col < this._reels.length; col++) for (var row = 0; row < this._row; row++) this._reels[col].GetSymbolByRow(row).ClearState();
      },
      triBonusGame: function triBonusGame() {
        var _this5 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var i;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("trigger_respin");
                _context3.next = 3;
                return cc.vv.gameData.awaitTime(.5);

               case 3:
                _context3.next = 5;
                return cc.vv.gameData.getPopupScript().playTriBonusAnim();

               case 5:
                cc.vv.gameData.getPopupScript().playQPAnim2();
                _context3.next = 8;
                return cc.vv.gameData.awaitTime(.7);

               case 8:
                _this5.showBonusGameView(true);
                _this5.Backup();
                _this5.initAllSymbol();
                _this5.setAllSymbolMask(true);
                _this5._bottomScript.SetWin(0);
                for (i = 0; i < _this5._gameInfo.bonusIdxs.length; i++) _this5.GetSymbolByIdx(_this5._gameInfo.bonusIdxs[i]).playBonusIdleAnim();
                _context3.next = 16;
                return cc.vv.gameData.getBonusScript().enterBonusGame();

               case 16:
                cc.vv.gameData.getPopupScript().playQPAnim2();
                _context3.next = 19;
                return cc.vv.gameData.awaitTime(.7);

               case 19:
                _this5.showBonusGameView(false);
                _this5.Resume();
                _this5.setAllSymbolMask(false);
                _context3.next = 24;
                return cc.vv.gameData.awaitTime(1);

               case 24:
                success();

               case 25:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      triMapGame: function triMapGame() {
        var _this6 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var idxs, i, symbol;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                idxs = _this6._gameInfo.scatterIdxs;
                for (i = 0; i < idxs.length; i++) {
                  symbol = _this6.GetSymbolByIdx(idxs[i]);
                  symbol && symbol.playTriggerAnimation();
                }
                Global.SlotsSoundMgr.playEffect("bell");
                Global.SlotsSoundMgr.playEffect("trigger_fg");
                _context4.next = 6;
                return cc.vv.gameData.awaitTime(2);

               case 6:
                _context4.next = 8;
                return cc.vv.gameData.getPopupScript().playTriMapAnim();

               case 8:
                cc.vv.gameData.getPopupScript().playQPAnim3();
                _context4.next = 11;
                return cc.vv.gameData.awaitTime(.7);

               case 11:
                _context4.next = 13;
                return cc.vv.gameData.getMapScript().showMapGame();

               case 13:
                success();

               case 14:
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
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx % 5 * nIter;
      },
      showBonusType: function showBonusType() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        var spr_5 = cc.find("spr_5", this._spr_bonusType);
        var spr_6 = cc.find("spr_6", this._spr_bonusType);
        if (curBet >= needBet) {
          spr_5.active = true;
          spr_6.active = false;
        } else {
          spr_5.active = false;
          spr_6.active = true;
        }
      },
      onclickBonusType: function onclickBonusType() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.isBonusGame()) return;
        var spr_6 = cc.find("spr_6", this._spr_bonusType);
        if (spr_6.active) {
          var needBet = cc.vv.gameData.getNeedBet();
          var allMults = cc.vv.gameData.GetBetMults();
          needBet > allMults.length || cc.vv.gameData.GetBottomScript().SetBetIdx(needBet);
        }
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        var spr_5 = cc.find("spr_5", this._spr_bonusType);
        var spr_6 = cc.find("spr_6", this._spr_bonusType);
        if (curBet >= needBet && spr_6.active) {
          Global.SlotsSoundMgr.playEffect("change_dialog");
          spr_5.active = true;
          spr_6.active = false;
          cc.tween(spr_5).to(.3, {
            scale: 1.1
          }).to(.2, {
            scale: 1
          }).start();
        } else if (curBet < needBet && spr_5.active) {
          Global.SlotsSoundMgr.playEffect("change_dialog");
          spr_5.active = false;
          spr_6.active = true;
          cc.tween(spr_6).to(.3, {
            scale: 1.1
          }).to(.2, {
            scale: 1
          }).start();
        }
      },
      flyPaw: function flyPaw() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var pawInfo, cnts, idxs, paw_fly, _loop2, i;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              pawInfo = _this7._gameInfo.pawInfo;
              cnts = pawInfo.cnts;
              idxs = pawInfo.idxs;
              paw_fly = cc.find("btn_entrance/node_fly", _this7.node);
              _loop2 = function _loop2(i) {
                var flyNode = cc.instantiate(paw_fly);
                flyNode.active = true;
                flyNode.parent = paw_fly.parent;
                var paw = _this7.GetSymbolByIdx(idxs[i]).getPaw();
                var startPos = flyNode.convertToNodeSpaceAR(paw.convertToWorldSpaceAR(cc.v2(0, 0)));
                var fly_paw = cc.instantiate(paw);
                fly_paw.active = true;
                fly_paw.parent = flyNode;
                fly_paw.position = startPos;
                var animName = cc.js.formatStr("animation%s", _this7.getPawAnimType(cnts[i]));
                fly_paw.getComponent(sp.Skeleton).setAnimation(0, animName, false);
                cc.tween(fly_paw).to(.5, {
                  position: cc.v2(-38, 35)
                }).start();
                var fly_par = cc.find("par_tw", flyNode);
                fly_par.position = cc.v2(startPos.x + 38, startPos.y - 35);
                cc.tween(fly_par).to(.5, {
                  position: cc.v2(0, 0)
                }).start();
                cc.tween(flyNode).delay(.5).call(function() {
                  flyNode.destroy();
                }).start();
                _this7.GetSymbolByIdx(idxs[i]).showPaw();
              };
              for (i = 0; i < idxs.length; i++) _loop2(i);
              Global.SlotsSoundMgr.playEffect("fly1");
              _context5.next = 9;
              return cc.vv.gameData.awaitTime(.5);

             case 9:
              cc.vv.gameData.getStoreScript().playWinPawAnim();

             case 10:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      getPawAnimType: function getPawAnimType(cnt) {
        var name = "";
        5 === cnt ? name += 1 : 10 === cnt ? name += 2 : 15 === cnt ? name += 3 : 20 === cnt ? name += 4 : 25 === cnt ? name += 5 : 30 === cnt ? name += 6 : 35 === cnt ? name += 7 : 40 === cnt ? name += 8 : 50 === cnt && (name += 9);
        return name;
      },
      setBonusCanStop: function setBonusCanStop(val) {
        this._bonusCanStop = val;
      },
      CanStopSlot: function CanStopSlot() {
        var canStop = null != this._gameInfo;
        cc.vv.gameData.isBonusGame() && (canStop = this._bonusCanStop);
        return canStop;
      },
      showBonusGameView: function showBonusGameView(isBonus) {
        cc.vv.gameData.setIsBonusGame(isBonus);
        cc.vv.gameData.getStoreScript().showEntranceBtn(!isBonus);
        this._spr_bonusType.active = !isBonus;
        if (isBonus) {
          var epicInfo = cc.vv.gameData.getEpicInfo();
          this.lockJackpot(epicInfo.jackpotValues);
        } else {
          this.unlockJackpot();
          cc.vv.gameData.getBonusScript().showBonusSpins(false);
        }
        cc.find("Canvas/safe_node/spr_bg_normal").active = !isBonus;
        cc.find("Canvas/safe_node/spr_bg_bonus").active = isBonus;
        cc.find("Canvas/safe_node/spine_character").opacity = 255;
      },
      lockJackpot: function lockJackpot(jackpotvalus) {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        prizepool.PausePool([ {
          prizeType: 0,
          pauseNum: jackpotvalus[0]
        }, {
          prizeType: 1,
          pauseNum: jackpotvalus[1]
        }, {
          prizeType: 2,
          pauseNum: jackpotvalus[2]
        }, {
          prizeType: 3,
          pauseNum: jackpotvalus[3]
        } ]);
      },
      unlockJackpot: function unlockJackpot() {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        prizepool.ResumePausePool();
      },
      setAllSymbolMask: function setAllSymbolMask(isMask) {
        this._reels.forEach(function(reel) {
          reel.GetSymbolByRow(0).setMaskVisible(isMask);
          reel.GetSymbolByRow(1).setMaskVisible(isMask);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Alexander_StoreGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c500bBVMctLEbKMuz0Vno0e", "Alexander_StoreGame");
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
    var itemType = {
      lock: 1,
      canClick: 2,
      unClick: 3,
      coin: 4,
      bonus: 5,
      map: 6
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _rtype: 1,
        _itemList: []
      },
      start: function start() {},
      Init: function Init() {
        this._btn_entrance = cc.find("safe_node/slots/btn_entrance", this.node);
        this._btn_entrance.off("click");
        Global.btnClickEvent(this._btn_entrance, this.onClickEntranceBtn, this);
        this._node_store = cc.find("safe_node/node_store", this.node);
        this._node_store.active = false;
        this._btn_close = cc.find("layout/btn_close", this._node_store);
        Global.btnClickEvent(this._btn_close, this.onClickCloseBtn, this);
        this._node_items = cc.find("layout/node_items", this._node_store);
        for (var i = 1; i <= 9; i++) {
          var item = cc.find("item" + i, this._node_items);
          item.off("click");
          Global.btnClickEvent(item, this.onClickItem, this);
          this._itemList[i] = {
            node: item,
            type: 1,
            data: null
          };
        }
        this._spine_dianliang = cc.find("layout/spine_dianliang", this._node_store);
        this._spine_dianliang.active = false;
        this._box_tip = cc.find("layout/box_tip", this._node_store);
        this._box_tip.active = false;
        this._spr_tip = cc.find("layout/spr_tip", this._node_store);
        this._spr_tip.active = false;
        var btn_tip = cc.find("layout/btn_tip", this._node_store);
        Global.btnClickEvent(btn_tip, this.clickHelpBtn, this);
        var btn_left = cc.find("layout/btn_left", this._node_store);
        Global.btnClickEvent(btn_left, this.clickLeftBtn, this);
        var btn_right = cc.find("layout/btn_right", this._node_store);
        Global.btnClickEvent(btn_right, this.clickRightBtn, this);
        this._pawStore = cc.vv.gameData.getPawStore();
        this.initEntranceBtn();
        this.updateCurMoney();
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      onClickEntranceBtn: function onClickEntranceBtn() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.isBonusGame()) return;
        Global.SlotsSoundMgr.playEffect("click");
        this._btn_entrance.getComponent(cc.Button).interactable = false;
        this.openStorePage();
      },
      initEntranceBtn: function initEntranceBtn() {
        var spine_fz = cc.find("spine_fz", this._btn_entrance);
        spine_fz.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
        cc.find("node_fly", this._btn_entrance).active = false;
      },
      showEntranceBtn: function showEntranceBtn(bShow) {
        this._btn_entrance.active = bShow;
      },
      playWinPawAnim: function playWinPawAnim() {
        var spine_fz = cc.find("spine_fz", this._btn_entrance);
        spine_fz.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
        spine_fz.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
        this.updateCurMoney();
      },
      updateCurMoney: function updateCurMoney() {
        this._pawStore = cc.vv.gameData.getPawStore();
        var lbl_money = cc.find("lbl_money", this._btn_entrance);
        lbl_money.getComponent(cc.Label).string = Global.FormatNumToComma(this._pawStore.pawCnt);
        var lbl = cc.find("layout/money_bg/lbl", this._node_store);
        lbl.getComponent(cc.Label).string = Global.FormatNumToComma(this._pawStore.pawCnt);
      },
      openStorePage: function openStorePage() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var layout;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                _this._node_store.active = true;
                _this._node_store.opacity = 0;
                layout = cc.find("layout", _this._node_store);
                layout.setScale(0);
                cc.tween(_this._node_store).to(.5, {
                  opacity: 255
                }).start();
                cc.tween(layout).to(.5, {
                  scale: 1
                }).start();
                _this._pawStore = cc.vv.gameData.getPawStore();
                _this._curPage = _this._pawStore.unlockPage;
                _this.showTitleSpr();
                _this.showAllItems();
                _this.showPageFooter();
                _this.updateCurMoney();
                _context.next = 15;
                return cc.vv.gameData.awaitTime(.5);

               case 15:
                _this._canClickItem = true;
                success();

               case 17:
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
      closeStorePage: function closeStorePage() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
                  var layout;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      layout = cc.find("layout", _this2._node_store);
                      cc.tween(_this2._node_store).to(.5, {
                        opacity: 0
                      }).start();
                      cc.tween(layout).to(.5, {
                        scale: 0
                      }).start();
                      _context2.next = 5;
                      return cc.vv.gameData.awaitTime(.5);

                     case 5:
                      _this2._node_store.active = false;
                      success();

                     case 7:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showTitleSpr: function showTitleSpr() {
        var tit_unlock = cc.find("layout/node_tit/tit_unlock", this._node_store);
        var tit_lock = cc.find("layout/node_tit/tit_lock", this._node_store);
        tit_unlock.active = this._curPage <= this._pawStore.unlockPage;
        tit_lock.active = this._curPage > this._pawStore.unlockPage;
        var paw_atlas = cc.vv.gameData.GetAtlasByName("claw_store");
        if (this._curPage <= this._pawStore.unlockPage) {
          cc.find("spr_tit", tit_unlock).getComponent(cc.Sprite).spriteFrame = paw_atlas.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s", this._curPage));
          cc.find("spr_tit/spr", tit_unlock).getComponent(cc.Sprite).spriteFrame = paw_atlas.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s_0", this._curPage));
          cc.find("spr_rewards", tit_unlock).getComponent(cc.Sprite).spriteFrame = paw_atlas.getSpriteFrame(cc.js.formatStr("theme128_gouwu_qipan_%s", this._curPage));
        } else cc.find("spr2", tit_lock).getComponent(cc.Sprite).spriteFrame = paw_atlas.getSpriteFrame(cc.js.formatStr("theme128_gouwu_mingzi_%s", this._curPage + 3));
      },
      showAllItems: function showAllItems() {
        var pageData = this._pawStore.unlockItems[this._curPage - 1];
        var pagePrice = this._pawStore.pageDetails[this._curPage - 1].price;
        for (var i = 1; i <= 9; i++) {
          var item = this._itemList[i].node;
          var type = this._itemList[i].type;
          var data = this._itemList[i].type;
          if (this._curPage <= this._pawStore.unlockPage) {
            var itemData = this.getItemData(i, pageData);
            if (itemData) {
              if (itemData.coin > 0) {
                type = itemType.coin;
                data = itemData.coin;
                this.setItemState(item, itemType.coin, itemData.coin);
              } else if (itemData.epicInfo) {
                type = itemType.bonus;
                this.setItemState(item, itemType.bonus);
              } else if (itemData.mapGame) {
                type = itemType.map;
                this.setItemState(item, itemType.map);
              }
            } else if (pagePrice <= this._pawStore.pawCnt) {
              type = itemType.canClick;
              data = pagePrice;
              this.setItemState(item, itemType.canClick, pagePrice);
            } else {
              type = itemType.unClick;
              data = pagePrice;
              this.setItemState(item, itemType.unClick, pagePrice);
            }
          } else {
            type = itemType.lock;
            data = pagePrice;
            this.setItemState(item, itemType.lock, pagePrice);
          }
          this._itemList[i].type = type;
          this._itemList[i].data = data;
        }
      },
      getItemData: function getItemData(idx, pageData) {
        for (var i = 0; i < pageData.length; i++) if (idx == pageData[i].idx) return pageData[i];
        return null;
      },
      setItemState: function setItemState(item, type, data) {
        var spine_gw = cc.find("gw", item);
        var money_bg = cc.find("money_bg", item);
        var money_lbl = cc.find("money_bg/lbl", item);
        var spine_gt = cc.find("gt", item);
        var gt_lbl = cc.find("gt/lbl", item);
        var gt_bonus = cc.find("gt/spr_bonus", item);
        var gt_map = cc.find("gt/spr_map", item);
        var spine_change = cc.find("spine_change", item);
        var suo = cc.find("suo", item);
        spine_gw.active = type === itemType.canClick || type === itemType.unClick || type === itemType.lock;
        type === itemType.canClick ? spine_gw.getComponent(sp.Skeleton).setAnimation(0, "animation1", true) : type !== itemType.unClick && type !== itemType.lock || spine_gw.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
        money_bg.active = type === itemType.canClick || type === itemType.unClick || type === itemType.lock;
        money_bg.active && (money_lbl.getComponent(cc.Label).string = Global.FormatNumToComma(data));
        spine_gt.active = type === itemType.coin || type === itemType.bonus || type === itemType.map;
        spine_gt.active && spine_gt.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
        gt_lbl.active = type === itemType.coin;
        type === itemType.coin && data && (gt_lbl.getComponent(cc.Label).string = Global.formatNumShort(data, 1));
        gt_bonus.active = type === itemType.bonus;
        gt_map.active = type === itemType.map;
        spine_change.active = false;
        suo.active = type === itemType.lock;
      },
      setItemResult: function setItemResult(idx, data) {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var item, spine_gw, money_bg, money_lbl, spine_gt, gt_lbl, gt_bonus, gt_map, spine_change, suo, showNode;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                item = _this3._itemList[idx].node;
                spine_gw = cc.find("gw", item);
                money_bg = cc.find("money_bg", item);
                money_lbl = cc.find("money_bg/lbl", item);
                spine_gt = cc.find("gt", item);
                gt_lbl = cc.find("gt/lbl", item);
                gt_bonus = cc.find("gt/spr_bonus", item);
                gt_map = cc.find("gt/spr_map", item);
                spine_change = cc.find("spine_change", item);
                suo = cc.find("suo", item);
                spine_change.active = true;
                spine_change.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                spine_gw.active = false;
                spine_gt.active = true;
                money_bg.active = false;
                spine_gt.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                _context4.next = 18;
                return cc.vv.gameData.awaitTime(.5);

               case 18:
                if (data.coin > 0) {
                  _this3._itemList[idx].type = itemType.coin;
                  gt_lbl.getComponent(cc.Label).string = Global.formatNumShort(data.coin, 1);
                  showNode = gt_lbl;
                } else if (data.epicInfo) {
                  _this3._itemList[idx].type = itemType.bonus;
                  showNode = gt_bonus;
                } else if (data.mapGame) {
                  _this3._itemList[idx].type = itemType.map;
                  showNode = gt_map;
                }
                showNode.active = true;
                showNode.setScale(0);
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context4.next = 24;
                return cc.vv.gameData.awaitTime(.5);

               case 24:
                success();

               case 25:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      onClickItem: function onClickItem(event) {
        if (!this._canClickItem) return;
        var idx = Number(event.node.name.substring("item".length));
        var curType = this._itemList[idx].type;
        if (curType === itemType.lock || curType === itemType.unClick) this.playBoxTipAnim(event.node); else if (this._itemList[idx].type === itemType.canClick) {
          Global.SlotsSoundMgr.playEffect("show");
          this._canClickItem = false;
          this.onSendSeq(idx);
        }
      },
      onSendSeq: function onSendSeq(idx) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {
          rtype: this._rtype,
          pageId: this._curPage,
          choiceId: idx
        };
        cc.vv.NetManager.send(req, true);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        var data = msg.data;
        200 === msg.code && data && data.rtype == this._rtype && this.showClickResult(data);
      },
      showClickResult: function showClickResult(data) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var result, idx, i, freeCnt, slotCnt, wildCols, extraRow;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this4._pawStore = data.pawStore;
              cc.vv.gameData.setPawStore(_this4._pawStore);
              _this4.updateCurMoney();
              result = data.result;
              idx = data.choiceId;
              _context5.next = 7;
              return _this4.setItemResult(idx, result);

             case 7:
              if (_this4._pawStore.pageDetails[_this4._curPage - 1].price > _this4._pawStore.pawCnt) for (i = 1; i <= 9; i++) if (_this4._itemList[i].type === itemType.canClick) {
                _this4._itemList[i].type = itemType.unClick;
                _this4.setItemState(_this4._itemList[i].node, itemType.unClick, _this4._itemList[i].data);
              }
              if (result.coin > 0) {
                cc.vv.gameData.AddCoin(result.coin);
                cc.vv.gameData.GetBottomScript().SetWin(result.coin);
                cc.vv.gameData.GetTopScript().ShowCoin();
              }
              if (!(result.mapGame || result.epicInfo || result.pageReward)) {
                _context5.next = 77;
                break;
              }
              _context5.next = 12;
              return _this4.closeStorePage();

             case 12:
              if (!result.mapGame) {
                _context5.next = 23;
                break;
              }
              cc.vv.gameData.setMapGame(result.mapGame);
              _context5.next = 16;
              return cc.vv.gameData.getPopupScript().playTriMapAnim();

             case 16:
              cc.vv.gameData.getPopupScript().playQPAnim3();
              _context5.next = 19;
              return cc.vv.gameData.awaitTime(.7);

             case 19:
              _context5.next = 21;
              return cc.vv.gameData.getMapScript().showMapGame();

             case 21:
              _context5.next = 48;
              break;

             case 23:
              if (!result.epicInfo) {
                _context5.next = 48;
                break;
              }
              cc.vv.gameData.setEpicInfo(result.epicInfo);
              cc.vv.gameData.setBonusIdxs(result.epicInfo.bonusIdxs);
              cc.vv.gameData.setBonusItems(result.epicInfo.bonusItems);
              _context5.next = 29;
              return cc.vv.gameData.getPopupScript().playTriBonusAnim();

             case 29:
              cc.vv.gameData.getPopupScript().playQPAnim2();
              _context5.next = 32;
              return cc.vv.gameData.awaitTime(.7);

             case 32:
              cc.vv.gameData.GetSlotsScript().showBonusGameView(true);
              cc.vv.gameData.GetSlotsScript().Backup();
              cc.vv.gameData.GetSlotsScript().initAllSymbol();
              cc.vv.gameData.GetSlotsScript().setAllSymbolMask(true);
              cc.vv.gameData.GetBottomScript().SetWin(0);
              _context5.next = 39;
              return cc.vv.gameData.getBonusScript().enterBonusGame();

             case 39:
              cc.vv.gameData.getPopupScript().playQPAnim2();
              _context5.next = 42;
              return cc.vv.gameData.awaitTime(.7);

             case 42:
              cc.vv.gameData.GetSlotsScript().showBonusGameView(false);
              cc.vv.gameData.GetSlotsScript().Resume();
              cc.vv.gameData.GetSlotsScript().setAllSymbolMask(false);
              _context5.next = 47;
              return cc.vv.gameData.awaitTime(1);

             case 47:
              cc.vv.gameData.GetTopScript().StopMove();

             case 48:
              if (!result.pageReward) {
                _context5.next = 73;
                break;
              }
              freeCnt = result.pageReward.freeCnt;
              slotCnt = result.pageReward.slotCnt;
              wildCols = result.pageReward.wildCols;
              extraRow = 1;
              cc.vv.gameData.SetTotalFree(freeCnt);
              cc.vv.gameData.SetFreeTime(freeCnt);
              cc.vv.gameData.setFreeAddRow(extraRow);
              cc.vv.gameData.setFreeSlotsCnt(slotCnt);
              cc.vv.gameData.setFreeWildCols(wildCols);
              Global.SlotsSoundMgr.playEffect("collect_finish");
              _this4._spine_dianliang.active = true;
              _this4._spine_dianliang.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
              _context5.next = 63;
              return _this4.closeStorePage();

             case 63:
              _context5.next = 65;
              return cc.vv.gameData.getPopupScript().playTriSuperFreeAnim(freeCnt, _this4._curPage);

             case 65:
              cc.vv.gameData.getPopupScript().playQPAnim3();
              _context5.next = 68;
              return cc.vv.gameData.awaitTime(.7);

             case 68:
              cc.vv.gameData.GetBottomScript().ShowFreeModel(true, 0, freeCnt);
              _context5.next = 71;
              return cc.vv.gameData.getFreeScript().initShowSlotsData(true, true);

             case 71:
              _context5.next = 73;
              return cc.vv.gameData.getPopupScript().playUnlockPageAnim(freeCnt, _this4._curPage);

             case 73:
              _context5.next = 75;
              return _this4.openStorePage();

             case 75:
              _context5.next = 78;
              break;

             case 77:
              _this4._canClickItem = true;

             case 78:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      onClickCloseBtn: function onClickCloseBtn() {
        Global.SlotsSoundMgr.playEffect("click1");
        this.closeStorePage();
        this._btn_entrance.getComponent(cc.Button).interactable = true;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
      },
      playBoxTipAnim: function playBoxTipAnim(node) {
        var _this5 = this;
        this._box_tip.stopAllActions();
        if (this._box_tip.active) this._box_tip.runAction(cc.sequence(cc.scaleTo(this._box_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this5._box_tip.active = false;
        }))); else {
          this._box_tip.position = this._box_tip.parent.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
          this._box_tip.active = true;
          this._box_tip.setScale(0);
          this._box_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this5._box_tip.active = false;
          })));
        }
      },
      clickHelpBtn: function clickHelpBtn() {
        var _this6 = this;
        Global.SlotsSoundMgr.playEffect("click1");
        this._spr_tip.stopAllActions();
        if (this._spr_tip.active) this._spr_tip.runAction(cc.sequence(cc.scaleTo(this._spr_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this6._spr_tip.active = false;
        }))); else {
          this._spr_tip.active = true;
          this._spr_tip.setScale(0);
          this._spr_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this6._spr_tip.active = false;
          })));
        }
      },
      clickLeftBtn: function clickLeftBtn() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              if (_this7._canClickItem) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");

             case 2:
              _this7._canClickItem = false;
              Global.SlotsSoundMgr.playEffect("click1");
              _this7._curPage <= 1 ? _this7._curPage = 4 : _this7._curPage--;
              _this7.refreshDataWithAction(20);
              _this7.showPageFooter();
              _context6.next = 9;
              return cc.vv.gameData.awaitTime(1);

             case 9:
              _this7._canClickItem = true;

             case 10:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      clickRightBtn: function clickRightBtn() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (_this8._canClickItem) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              _this8._canClickItem = false;
              Global.SlotsSoundMgr.playEffect("click1");
              _this8._curPage >= 4 ? _this8._curPage = 1 : _this8._curPage++;
              _this8.refreshDataWithAction(20);
              _this8.showPageFooter();
              _context7.next = 9;
              return cc.vv.gameData.awaitTime(1);

             case 9:
              _this8._canClickItem = true;

             case 10:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      refreshDataWithAction: function refreshDataWithAction(deltaX) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var node_tit, i, item;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (!(0 != deltaX)) {
                _context8.next = 11;
                break;
              }
              _this9._node_items.stopAllActions();
              _this9._node_items.x = 0;
              _this9._node_items.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, deltaX, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -deltaX, 0))));
              node_tit = cc.find("layout/node_tit", _this9._node_store);
              node_tit.stopAllActions();
              node_tit.x = 0;
              node_tit.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, deltaX, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -deltaX, 0))));
              _context8.next = 10;
              return cc.vv.gameData.awaitTime(.15);

             case 10:
              _this9.showTitleSpr();

             case 11:
              _this9.showAllItems();
              for (i = 1; i <= 9; i++) {
                item = _this9._itemList[i].node;
                item.setScale(.1);
                item.stopAllActions();
                item.runAction(cc.scaleTo(.1 * i, 1, 1).easing(cc.easeBackOut()));
              }

             case 13:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showPageFooter: function showPageFooter() {
        for (var i = 1; i <= 4; i++) {
          var choosed = cc.find(cc.js.formatStr("layout/choose_bg/choose%s/choosed", i), this._node_store);
          choosed.active = i === this._curPage;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Alexander_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33acerrv9tN94vecwVsNjyZ", "Alexander_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      start: function start() {},
      ClearState: function ClearState() {
        this.showPaw();
        this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.stopWinTweenAction();
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.hideAllIcon();
        3 === id && data && (data.coin ? this.setCoin(data.coin) : data.jackpot ? this.showJackPotNode(data.jackpot.id) : data.again && this.showBonusAgain());
        cc.vv.gameData.isBonusGame() ? this.setMaskVisible(true) : this.setMaskVisible(false);
      },
      showJackPotNode: function showJackPotNode(jpId) {
        this._showNode && (this._showNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        var id = this._id;
        1 === jpId && cfg.symbol[id].mini_node ? this._showNode = cc.find(cfg.symbol[id].mini_node, this.node) : 2 === jpId && cfg.symbol[id].minor_node ? this._showNode = cc.find(cfg.symbol[id].minor_node, this.node) : 3 === jpId && cfg.symbol[id].major_node && (this._showNode = cc.find(cfg.symbol[id].major_node, this.node));
        this._showNode.active = true;
      },
      showBonusAgain: function showBonusAgain() {
        this._showNode && (this._showNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        var id = this._id;
        cfg.symbol[id].again_node && (this._showNode = cc.find(cfg.symbol[id].again_node, this.node));
        this._showNode.active = true;
      },
      hideAllIcon: function hideAllIcon() {
        this.setCoin();
        this.showPaw();
      },
      setCoin: function setCoin(num) {
        var lbl_coin = cc.find("lbl_coin", this.node);
        if (num) {
          var font = null;
          var nVal = cc.vv.gameData.GetTotalBet();
          font = num < 5 * nVal ? cc.vv.gameData.GetFontByName("theme128_font_b_2") : cc.vv.gameData.GetFontByName("theme128_font_b_1");
          lbl_coin.active = true;
          lbl_coin.getComponent(cc.Label).font = font;
          lbl_coin.getComponent(cc.Label).string = Global.formatNumShort(num, 0);
        } else {
          lbl_coin.active = false;
          lbl_coin.getComponent(cc.Label).string = "";
        }
      },
      showPaw: function showPaw(animType) {
        var paw = cc.find("paw", this.node);
        if (animType) {
          paw.active = true;
          paw.getComponent(sp.Skeleton).setAnimation(0, "animation" + animType, false);
        } else paw.active = false;
      },
      getPaw: function getPaw() {
        return cc.find("paw", this.node);
      },
      getPawAnimName: function getPawAnimName(cnt) {
        var name;
        5 === cnt ? name = "animation1" : 10 === cnt ? name = "animation2" : 15 === cnt ? name = "animation3" : 20 === cnt ? name = "animation4" : 25 === cnt ? name = "animation5" : 30 === cnt ? name = "animation6" : 35 === cnt ? name = "animation7" : 40 === cnt ? name = "animation8" : 50 === cnt && (name = "animation9");
        return name;
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
          if ("" != cfg.symbol[id].trigger_ani.name) {
            aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, true);
          }
        }
        return isPlay;
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        if (3 == id) {
          this._showNode.stopAllActions();
          var nScale = this._showNode.scale;
          this._showNodeOrgScale = nScale;
          cc.tween(this._showNode).to(.35, {
            scale: nScale + .2
          }).to(.35, {
            scale: nScale
          }).start();
        } else this._super();
      },
      playBonusIdleAnim: function playBonusIdleAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (3 == id && cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          var ani = cfg.symbol[id].idle_ani;
          var animName = ani.name;
          this._data.coin || (this._data.jackpot ? 1 == this._data.jackpot.id ? animName = ani.mini_name : 2 == this._data.jackpot.id ? animName = ani.minor_name : 3 == this._data.jackpot.id && (animName = ani.major_name) : this._data.again && (animName = ani.again_name));
          if ("" != animName) {
            this.node.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, animName, true);
          }
        }
      },
      playBonusCollAnim: function playBonusCollAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (3 == id && cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].coll_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          var ani = cfg.symbol[id].coll_ani;
          var animName = ani.name;
          this._data.coin || (this._data.jackpot ? 1 == this._data.jackpot.id ? animName = ani.mini_name : 2 == this._data.jackpot.id ? animName = ani.minor_name : 3 == this._data.jackpot.id && (animName = ani.major_name) : this._data.again && (animName = ani.again_name));
          if ("" != animName) {
            this.node.zIndex = cfg.symbol[id].coll_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, animName, false);
          }
        }
      },
      StartMove: function StartMove() {
        this._super();
        cc.vv.gameData.isBonusGame() ? this.setMaskVisible(true) : this.setMaskVisible(false);
      },
      setMaskVisible: function setMaskVisible(isMask) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node) {
          var showNode = cc.find(cfg.symbol[this._id].node, this.node);
          isMask && cfg.symbol[this._id].isMask ? showNode.color = new cc.Color(100, 100, 100) : showNode.color = cc.Color.WHITE;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Alexander_BonusGame", "Alexander_Bottom", "Alexander_Cfg", "Alexander_FreeGame", "Alexander_FreeReel", "Alexander_FreeSlots", "Alexander_GameData", "Alexander_Logic", "Alexander_Map", "Alexander_Popup", "Alexander_Reel", "Alexander_Slots", "Alexander_StoreGame", "Alexander_Symbol" ]);