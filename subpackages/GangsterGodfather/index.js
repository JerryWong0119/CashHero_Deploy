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
  GangsterGodfather_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43590bvhh5NDKQBJ0tOcA8D", "GangsterGodfather_Cfg");
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
        win_ani: {
          name: "wild",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "scatter1",
          zIndex: 100
        },
        win_ani: {
          name: "scatter2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3",
        win_node: "animation_3"
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        win_node: "animation_4",
        win_ani: {
          name: "H1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5",
        win_node: "animation_5",
        win_ani: {
          name: "H2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6",
        win_node: "animation_6",
        win_ani: {
          name: "H3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7",
        win_node: "animation_7",
        win_ani: {
          name: "H4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8",
        win_node: "animation_8",
        win_ani: {
          name: "H5",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9",
        win_node: "animation_9",
        win_ani: {
          name: "H6",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10",
        win_node: "animation_10",
        win_ani: {
          name: "Lsmybol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11",
        win_node: "animation_11",
        win_ani: {
          name: "Lsmybol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12",
        win_node: "animation_12",
        win_ani: {
          name: "Lsmybol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "symbol_12",
        win_node: "animation_12",
        win_ani: {
          name: "Lsmybol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 301, {
        node: "symbol_301",
        win_node: "animation_301"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "GangsterGodfather_Slots",
        Reels: "GangsterGodfather_Reel",
        Symbols: "GangsterGodfather_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 110,
        height: 96
      },
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      bonusGameId: 301,
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      autoModelDelay: 1,
      AddAntiTime: 1.5,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/GangsterGodfather/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelsctr",
        antSound: "reelfast",
        antSpeed: 2e3
      } ],
      helpItems: [ "games/GangsterGodfather/prefab/help_item_1", "games/GangsterGodfather/prefab/help_item_2" ],
      commEffect: {
        path: "games/GangsterGodfather/",
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
  GangsterGodfather_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5588bzqxmhE3Yl0nkcuLxV2", "GangsterGodfather_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _inBonusGame: false
      },
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      setInBonusGame: function setInBonusGame(isOrNot) {
        this._inBonusGame = isOrNot;
      },
      getInBonusGame: function getInBonusGame() {
        return this._inBonusGame;
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
  GangsterGodfather_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ae3dqynPVOWLOfmZN4liuV", "GangsterGodfather_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _lockBonus: false
      },
      onLoad: function onLoad() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
        Global.SlotsSoundMgr.playEffect("steal");
      },
      onUpdateBet: function onUpdateBet() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        cc.vv.gameData.GetSlotsScript().setCollectInfo(deskInfo.collectInfos[deskInfo.currmult - 1]);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  GangsterGodfather_PickGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc649wctcJEPJRd9jv4k2cz", "GangsterGodfather_PickGame");
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
        prizePool: cc.Node,
        pig: cc.Node,
        coins: [ cc.Node ],
        pigs: [ cc.Node ],
        coin_end: cc.Node,
        count_node: cc.Node,
        count_title: cc.Node,
        count_times: cc.Node,
        count_spine: sp.Skeleton,
        _endCallback: null,
        _coinPositions: [],
        _pigPositions: [],
        _bonusGame: null,
        _canSelect: false,
        _haveOpenReward: []
      },
      onLoad: function onLoad() {
        var _this = this;
        for (var i = 0; i < this.coins.length; i++) this._coinPositions.push(this.coins[i].position);
        for (var _i = 0; _i < this.pigs.length; _i++) this._pigPositions.push(this.pigs[_i].position);
        var _loop = function _loop(_i2) {
          var pig_node = _this.pigs[_i2];
          pig_node.off(cc.Node.EventType.TOUCH_END);
          pig_node.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var req, result, bonusGame, choiceId, select_pig, spine, item, jackpot, coin;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                if (_this._canSelect) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");

               case 2:
                if (!(-1 !== _this._haveOpenReward.indexOf(_i2 + 1))) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return");

               case 4:
                Global.SlotsSoundMgr.playEffect("pickGpig");
                _this._canSelect = false;
                req = {
                  rtype: 1,
                  choiceId: _i2 + 1
                };
                _context.next = 9;
                return cc.vv.gameData.reqSubGame(req);

               case 9:
                result = _context.sent;
                if (!(200 === result.code)) {
                  _context.next = 48;
                  break;
                }
                bonusGame = result.data.bonusGame;
                _this._bonusGame = bonusGame;
                choiceId = result.data.choiceId;
                _this._haveOpenReward.push(choiceId);
                _this.count_times.getComponent("ImgSwitchCmp").setIndex(bonusGame.restCnt);
                _this.count_title.getComponent("ImgSwitchCmp").setIndex(bonusGame.restCnt >= 2 ? 1 : 0);
                select_pig = _this.pigs[choiceId - 1];
                spine = cc.find("spine", select_pig).getComponent(sp.Skeleton);
                spine.setAnimation(0, "Pig_boom", false);
                _context.next = 22;
                return cc.vv.gameData.awaitTime(.5);

               case 22:
                item = bonusGame.items[choiceId - 1];
                if (!item.jackpot) {
                  _context.next = 35;
                  break;
                }
                jackpot = cc.find("jackpot", select_pig);
                jackpot.active = true;
                jackpot.scale = 0;
                jackpot.getComponent("ImgSwitchCmp").setIndex(item.jackpot.id - 1);
                cc.tween(jackpot).to(.5, {
                  scale: 1
                }).start();
                _context.next = 31;
                return cc.vv.gameData.awaitTime(1);

               case 31:
                _context.next = 33;
                return cc.vv.gameData.GetSlotsScript().popJackpotDialog(item.jackpot);

               case 33:
                _context.next = 40;
                break;

               case 35:
                coin = cc.find("coin", select_pig);
                coin.active = true;
                coin.scale = 0;
                coin.getComponent(cc.Label).string = Global.formatNumShort(item.coin, 0);
                cc.tween(coin).to(.5, {
                  scale: 1
                }).start();

               case 40:
                if (!bonusGame.isEnd) {
                  _context.next = 45;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("koiSure");
                _this.endGame(bonusGame);
                _context.next = 48;
                break;

               case 45:
                _context.next = 47;
                return cc.vv.gameData.awaitTime(1);

               case 47:
                _this._canSelect = true;

               case 48:
               case "end":
                return _context.stop();
              }
            }, _callee);
          })));
        };
        for (var _i2 = 0; _i2 < this.pigs.length; _i2++) _loop(_i2);
      },
      reconnectPickGame: function reconnectPickGame(bonusGame) {
        var _this2 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
            var i, pig_node, info, spine, jackpot, coin;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this2.node.active = true;
                _this2._endCallback = success;
                _this2.reset();
                _this2._bonusGame = bonusGame;
                cc.find("LMSlots_PrizePool_1", _this2.node.parent).active = false;
                _this2.prizePool.active = true;
                _this2.prizePool.getComponent("LMSlots_PrizePool_Base").PausePool([ {
                  prizeType: 0,
                  pauseNum: bonusGame.jackpotValues[0]
                }, {
                  prizeType: 1,
                  pauseNum: bonusGame.jackpotValues[1]
                }, {
                  prizeType: 2,
                  pauseNum: bonusGame.jackpotValues[2]
                }, {
                  prizeType: 3,
                  pauseNum: bonusGame.jackpotValues[3]
                }, {
                  prizeType: 4,
                  pauseNum: bonusGame.jackpotValues[4]
                } ]);
                _this2.pig.active = false;
                _this2.count_node.active = true;
                for (i = 0; i < _this2.pigs.length; i++) {
                  pig_node = _this2.pigs[i];
                  info = bonusGame.items[i];
                  pig_node.active = true;
                  if (info.isOpen) {
                    spine = cc.find("spine", pig_node).getComponent(sp.Skeleton);
                    spine.setAnimation(0, "Pig_boom", false);
                    if (info.jackpot) {
                      jackpot = cc.find("jackpot", pig_node);
                      jackpot.active = true;
                      jackpot.getComponent("ImgSwitchCmp").setIndex(info.jackpot.id - 1);
                    } else {
                      coin = cc.find("coin", pig_node);
                      coin.active = true;
                      coin.getComponent(cc.Label).string = Global.formatNumShort(info.coin, 0);
                    }
                  } else pig_node.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "Pig_loop", true);
                }
                _this2.count_times.getComponent("ImgSwitchCmp").setIndex(bonusGame.restCnt);
                _this2._canSelect = true;

               case 12:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      startPickGame: function startPickGame(bonusGame) {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
            var spine, i, pig_node, _loop3, _i3;
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("bgbgm");
                _this3.node.active = true;
                _this3._endCallback = success;
                _this3.reset();
                _this3._bonusGame = bonusGame;
                cc.find("LMSlots_PrizePool_1", _this3.node.parent).active = false;
                _this3.prizePool.active = true;
                _this3.prizePool.getComponent("LMSlots_PrizePool_Base").PausePool([ {
                  prizeType: 0,
                  pauseNum: bonusGame.jackpotValues[0]
                }, {
                  prizeType: 1,
                  pauseNum: bonusGame.jackpotValues[1]
                }, {
                  prizeType: 2,
                  pauseNum: bonusGame.jackpotValues[2]
                }, {
                  prizeType: 3,
                  pauseNum: bonusGame.jackpotValues[3]
                }, {
                  prizeType: 4,
                  pauseNum: bonusGame.jackpotValues[4]
                } ]);
                _this3.pig.scale = 0;
                spine = _this3.pig.getComponent(sp.Skeleton);
                cc.tween(_this3.pig).to(.5, {
                  scale: 1
                }).call(function() {
                  spine.setAnimation(0, "Tpig_luoxia_tiao", false);
                  Global.SlotsSoundMgr.playEffect("GpigJump");
                  spine.setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                    var _loop2, i;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                       case 0:
                        spine.setCompleteListener(null);
                        Global.SlotsSoundMgr.playEffect("GpigJumpOne");
                        spine.setAnimation(0, "Tpig_luoxia_tiao2", false);
                        spine.addAnimation(0, "Tpig_loop", true);
                        Global.SlotsSoundMgr.playEffect("5coinUp");
                        cc.tween(_this3.node).delay(2.5).call(function() {
                          Global.SlotsSoundMgr.playEffect("5coinMerge");
                        }).start();
                        _loop2 = function _loop2(i) {
                          var coin_node = _this3.coins[i];
                          var item = bonusGame.items[i];
                          coin_node.active = true;
                          coin_node.position = _this3.pig.position;
                          var coin = cc.find("coin", coin_node);
                          var jackpot = cc.find("jackpot", coin_node);
                          var bg = cc.find("blackCoin", coin_node);
                          coin.active = !item.jackpot;
                          jackpot.active = item.jackpot;
                          bg.getComponent("ImgSwitchCmp").setIndex(item.jackpot ? 1 : 0);
                          item.jackpot ? jackpot.getComponent("ImgSwitchCmp").setIndex(item.jackpot.id - 1) : coin.getComponent(cc.Label).string = Global.formatNumShort(item.coin, 0);
                          cc.tween(coin_node).to(.5, {
                            position: _this3._coinPositions[i]
                          }, {
                            easing: "backOut"
                          }).delay(2).to(.5, {
                            position: _this3.coin_end.position
                          }).call(function() {
                            coin_node.active = false;
                          }).start();
                        };
                        for (i = 0; i < _this3.coins.length; i++) _loop2(i);

                       case 8:
                       case "end":
                        return _context3.stop();
                      }
                    }, _callee3);
                  })));
                }).start();
                _context5.next = 14;
                return cc.vv.gameData.awaitTime(6);

               case 14:
                spine.setAnimation(0, "JinBiZaZhu", false);
                spine.setCompleteListener(function() {
                  spine.setCompleteListener(null);
                  _this3.pig.active = false;
                });
                _context5.next = 18;
                return cc.vv.gameData.awaitTime(2);

               case 18:
                Global.SlotsSoundMgr.playEffect("5pigUp");
                for (i = 0; i < _this3.pigs.length; i++) {
                  pig_node = _this3.pigs[i];
                  pig_node.active = true;
                  pig_node.position = _this3.pig.position;
                  pig_node.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "Pig_loop", true);
                  cc.tween(pig_node).to(.5, {
                    position: _this3._pigPositions[i]
                  }).start();
                }
                _this3.count_node.active = true;
                _this3.count_node.scale = 0;
                cc.tween(_this3.count_node).to(.5, {
                  scale: 1
                }).start();
                _this3.count_times.getComponent("ImgSwitchCmp").setIndex(0);
                _context5.next = 26;
                return cc.vv.gameData.awaitTime(.5);

               case 26:
                _loop3 = regeneratorRuntime.mark(function _loop3(_i3) {
                  return regeneratorRuntime.wrap(function _loop3$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      cc.tween(_this3.count_times).to(.2, {
                        scale: 0
                      }).call(function() {
                        Global.SlotsSoundMgr.playEffect("pickLeft");
                        _this3.count_times.getComponent("ImgSwitchCmp").setIndex(_i3 + 1);
                        _this3.count_title.getComponent("ImgSwitchCmp").setIndex(_i3 + 1 >= 2 ? 1 : 0);
                        _this3.count_spine.node.active = true;
                        _this3.count_spine.setAnimation(0, "BG_PicksLeft", false);
                        _this3.count_spine.setCompleteListener(function() {
                          _this3.count_spine.setCompleteListener(null);
                          _this3.count_spine.node.active = false;
                        });
                      }).to(.2, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context4.next = 3;
                      return cc.vv.gameData.awaitTime(.4);

                     case 3:
                     case "end":
                      return _context4.stop();
                    }
                  }, _loop3);
                });
                _i3 = 0;

               case 28:
                if (!(_i3 < bonusGame.restCnt)) {
                  _context5.next = 33;
                  break;
                }
                return _context5.delegateYield(_loop3(_i3), "t0", 30);

               case 30:
                _i3++;
                _context5.next = 28;
                break;

               case 33:
                _this3._canSelect = true;

               case 34:
               case "end":
                return _context5.stop();
              }
            }, _callee4);
          }));
          return function(_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      endGame: function endGame(bonusGame) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var i, pig_node, item, jackpot, coin;
          return regeneratorRuntime.wrap(function _callee5$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              for (i = 0; i < _this4.pigs.length; i++) {
                pig_node = _this4.pigs[i];
                item = bonusGame.items[i];
                if (-1 === _this4._haveOpenReward.indexOf(i + 1)) {
                  cc.find("spine", pig_node).active = false;
                  cc.find("grey", pig_node).active = true;
                  if (item.jackpot) {
                    jackpot = cc.find("jackpot", pig_node);
                    jackpot.active = true;
                    jackpot.getComponent("ImgSwitchCmp").setIndex(item.jackpot.id - 1);
                    jackpot.color = cc.Color.GRAY;
                  } else {
                    coin = cc.find("coin", pig_node);
                    coin.active = true;
                    coin.getComponent(cc.Label).string = Global.formatNumShort(item.coin, 0);
                    coin.color = cc.Color.GRAY;
                  }
                }
              }
              _context6.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _this4.node.active = false;
              cc.find("LMSlots_PrizePool_1", _this4.node.parent).active = true;
              if (_this4._endCallback) {
                _this4._endCallback();
                _this4._endCallback = null;
              }

             case 6:
             case "end":
              return _context6.stop();
            }
          }, _callee5);
        }))();
      },
      getBonusGame: function getBonusGame() {
        return this._bonusGame;
      },
      reset: function reset() {
        this.pig.active = true;
        var _iterator = _createForOfIteratorHelper(this.coins), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var coin = _step.value;
            coin.active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var _iterator2 = _createForOfIteratorHelper(this.pigs), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var pig = _step2.value;
            pig.active = false;
            cc.find("spine", pig).active = true;
            cc.find("grey", pig).active = false;
            cc.find("jackpot", pig).active = false;
            cc.find("jackpot", pig).color = cc.Color.WHITE;
            cc.find("coin", pig).active = false;
            cc.find("coin", pig).color = cc.Color.WHITE;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.count_node.active = false;
        this._canSelect = false;
        this._haveOpenReward = [];
      }
    });
    cc._RF.pop();
  }, {} ],
  GangsterGodfather_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3293Kj0btEU5qfUWmIkSqS", "GangsterGodfather_Reel");
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
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._super();
      },
      playReelStop: function playReelStop() {
        this._super();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          item.GetShowId() !== this._cfg.bonusId && item.GetShowId() !== this._cfg.bonusGameId || Global.SlotsSoundMgr.playEffect("reelpig");
        }
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  GangsterGodfather_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f67b14X93lNIK1PZSK2IHrp", "GangsterGodfather_Slots");
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
      Init: function Init() {
        this._super();
        var deskInfo = cc.vv.gameData.getDeskInfo();
        this.setCollectInfo(deskInfo.collectInfos[deskInfo.currmult - 1]);
      },
      setCollectInfo: function setCollectInfo(collectInfo) {
        for (var i = 0; i < 7; i++) {
          var pig = cc.find("collect_node/pig_" + (i + 1), this.node);
          if (pig) {
            var idle = cc.find("idle", pig);
            idle.active = i >= collectInfo.count;
            var spine = cc.find("spine", pig).getComponent(sp.Skeleton);
            if (i < collectInfo.count) {
              spine.node.active = true;
              spine.setAnimation(0, "jin_idle", true);
            } else spine.node.active = false;
          }
        }
        cc.find("spr_bg_normal", this.node.parent).active ? 1 === collectInfo.state && this.changeBg(false) : 0 === collectInfo.state && this.changeBg(true);
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var deskInfo, script, rest;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!deskInfo.bonusGame) {
                _context2.next = 11;
                break;
              }
              _this._bottomScript.ShowBtnsByState("moveing_1");
              script = cc.find("pick_game", _this.node.parent).getComponent("GangsterGodfather_PickGame");
              _context2.next = 6;
              return script.reconnectPickGame(deskInfo.bonusGame);

             case 6:
              _context2.next = 8;
              return _this.popBonusResultDialog();

             case 8:
              _this.ShowBottomWin(script.getBonusGame().winCoin, script.getBonusGame().winCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                   case 0:
                    _this.CanDoNextRound();

                   case 1:
                   case "end":
                    return _context.stop();
                  }
                }, _callee);
              })));
              _context2.next = 20;
              break;

             case 11:
              rest = cc.vv.gameData.GetFreeTime();
              if (!rest) {
                _context2.next = 19;
                break;
              }
              _context2.next = 15;
              return cc.vv.gameData.awaitTime(.2);

             case 15:
              _this.ShowGameview(true);
              _this.CanDoNextRound();
              _context2.next = 20;
              break;

             case 19:
              _this.ShowGameview(false);

             case 20:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var deskInfo, spine, startIndex, start_pig, _spine, i, index, node;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this2._super(msg);
              deskInfo = cc.vv.gameData.getDeskInfo();
              deskInfo.collectInfos[deskInfo.currmult - 1] = msg.collectInfo;
              if (msg.randWilds && 0 === msg.collectInfo.state) {
                _this2.SetStopTime(.5 * msg.randWilds.length + 2);
                cc.find("black_bg", _this2.node).active = true;
                Global.SlotsSoundMgr.playEffect("bigAward");
                spine = cc.find("pig", _this2.node).getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, "dajiangyugao", false);
                spine.setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                  var i, card, node;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      spine.setCompleteListener(null);
                      spine.node.active = false;
                      i = 0;

                     case 3:
                      if (!(i < _this2._gameInfo.resultCards.length)) {
                        _context3.next = 17;
                        break;
                      }
                      card = _this2._gameInfo.resultCards[i];
                      if (!(card === _this2._cfg.wildId)) {
                        _context3.next = 14;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect("wildappear");
                      node = cc.instantiate(cc.find("wild_shuaguang", _this2.node.parent));
                      node.active = true;
                      node.parent = cc.find("wild_parent", _this2.node);
                      node.position = cc.v2(i % 5 * _this2._cfg.symbolSize.width + .5 * _this2._cfg.symbolSize.width + i % 5 * 6, (_this2._gameInfo.resultCards.length / _this2._cfg.col - 1 - Math.floor(i / 5)) * _this2._cfg.symbolSize.height + .5 * _this2._cfg.symbolSize.height);
                      node.getComponent(sp.Skeleton).setAnimation(0, "wild_shuaguang", false);
                      _context3.next = 14;
                      return cc.vv.gameData.awaitTime(.5);

                     case 14:
                      i++;
                      _context3.next = 3;
                      break;

                     case 17:
                      cc.find("black_bg", _this2.node).active = false;

                     case 18:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                })));
              }
              if (!(1 === msg.collectInfo.state)) {
                _context4.next = 28;
                break;
              }
              if (cc.find("spr_bg_normal", _this2.node.parent).active) {
                Global.SlotsSoundMgr.playEffect("goldenmode");
                _this2.changeBg(false);
              }
              _this2.SetStopTime(.7 * msg.randWilds.length + 1);
              cc.find("black_bg", _this2.node).active = true;
              startIndex = -1 === msg.resultCards.indexOf(_this2._cfg.bonusId) && -1 === msg.resultCards.indexOf(_this2._cfg.bonusGameId) ? msg.collectInfo.count + 1 : msg.collectInfo.count;
              start_pig = cc.find("collect_node/pig_" + startIndex, _this2.node);
              _spine = start_pig.getChildByName("spine").getComponent(sp.Skeleton);
              _spine.setAnimation(0, "jinTofen", false);
              _spine.setCompleteListener(function() {
                _spine.setCompleteListener(null);
                cc.find("spine", start_pig).active = false;
                cc.find("idle", start_pig).active = true;
              });
              i = 0;

             case 14:
              if (!(i < msg.randWilds.length)) {
                _context4.next = 27;
                break;
              }
              index = msg.randWilds[i];
              node = cc.instantiate(cc.find("wild_shuaguang", _this2.node.parent));
              node.parent = cc.find("wild_parent", _this2.node);
              node.position = cc.v2((index - 1) % 5 * _this2._cfg.symbolSize.width + .5 * _this2._cfg.symbolSize.width + (index - 1) % 5 * 6, (_this2._gameInfo.resultCards.length / _this2._cfg.col - 1 - Math.floor((index - 1) / 5)) * _this2._cfg.symbolSize.height + .5 * _this2._cfg.symbolSize.height);
              node.active = true;
              node.getComponent(sp.Skeleton).setAnimation(0, "wild_shuaguang", false);
              Global.SlotsSoundMgr.playEffect("wildappear");
              _context4.next = 24;
              return cc.vv.gameData.awaitTime(.7);

             case 24:
              i++;
              _context4.next = 14;
              break;

             case 27:
              cc.find("black_bg", _this2.node).active = false;

             case 28:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      changeBg: function changeBg(isNormal) {
        Global.SlotsSoundMgr.playEffect("goldenswitch");
        var role = cc.find("role", this.node.parent).getComponent(sp.Skeleton);
        role.setAnimation(0, "skill", false);
        role.addAnimation(0, "idle", true);
        if (isNormal) {
          cc.find("spr_bg_normal", this.node.parent).active = true;
          cc.find("spr_bg_bonus", this.node.parent).active = false;
        } else {
          cc.find("spr_bg_normal", this.node.parent).active = false;
          cc.find("spr_bg_bonus", this.node.parent).active = true;
        }
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        this._super(cards);
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
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this3._gameInfo.randWilds && cc.find("wild_parent", _this3.node).removeAllChildren();
              if (_this3._gameInfo.bonusGame) {
                _context6.next = 4;
                break;
              }
              _context6.next = 4;
              return _this3.collectSymbol();

             case 4:
              _this3.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this3.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                   case 0:
                    if (_this3._gameInfo.bonusGame) _this3.triggerBonusGame(); else if (_this3.CheckEnterFreeGame()) _this3.triggerFreeGame(); else if (_this3.CheckExitFreeGame()) _this3.triggerExitFreeGame(); else {
                      cc.find("spr_bg_normal", _this3.node.parent).active ? 1 === _this3._gameInfo.collectInfo.state && _this3.changeBg(false) : 1 === _this3._gameInfo.collectInfo.state && 0 === _this3._gameInfo.collectInfo.count && _this3.changeBg(true);
                      _this3.CanDoNextRound();
                    }

                   case 1:
                   case "end":
                    return _context5.stop();
                  }
                }, _callee5);
              })));

             case 9:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      triggerBonusGame: function triggerBonusGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var i, card, symbol, script;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _this4._bottomScript.ShowBtnsByState("moveing_1");
              for (i = 0; i < _this4._gameInfo.resultCards.length; i++) {
                card = _this4._gameInfo.resultCards[i];
                if (card === _this4._cfg.bonusGameId) {
                  symbol = _this4.GetSymbolByIdx(i + 1);
                  symbol.playCollectAnimation();
                }
              }
              Global.SlotsSoundMgr.playEffect("triggering");
              _context8.next = 5;
              return cc.vv.gameData.awaitTime(1);

             case 5:
              _context8.next = 7;
              return _this4.popStartBonusDialog();

             case 7:
              script = cc.find("pick_game", _this4.node.parent).getComponent("GangsterGodfather_PickGame");
              _context8.next = 10;
              return script.startPickGame(_this4._gameInfo.bonusGame);

             case 10:
              _context8.next = 12;
              return _this4.popBonusResultDialog();

             case 12:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playNormalBgm();
              _this4.ShowBottomWin(script.getBonusGame().winCoin, script.getBonusGame().winCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                   case 0:
                    _context7.next = 2;
                    return _this4.collectSymbol();

                   case 2:
                    _this4.CanDoNextRound();

                   case 3:
                   case "end":
                    return _context7.stop();
                  }
                }, _callee7);
              })));

             case 15:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      popStartBonusDialog: function popStartBonusDialog() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var free_dialog, dialog, freetanchuang, btn_start, func;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("bgbegin");
                      Global.SlotsSoundMgr.playEffect("goldenpiggypickbonus");
                      free_dialog = cc.find("free_dialog", _this5.node.parent);
                      free_dialog.active = true;
                      dialog = cc.find("pickgame_enter_node", free_dialog);
                      dialog.active = true;
                      dialog.scale = 1;
                      freetanchuang = cc.find("freetanchuang", dialog);
                      freetanchuang.scale = 0;
                      cc.tween(freetanchuang).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      btn_start = cc.find("btn_start", dialog);
                      btn_start.scale = 0;
                      cc.tween(btn_start).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context11.next = 15;
                      return cc.vv.gameData.awaitTime(.5);

                     case 15:
                      btn_start.off("click");
                      func = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("button");
                              btn_start.off("click");
                              cc.tween(dialog).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                free_dialog.active = false;
                                dialog.active = false;
                                success();
                              }).start();

                             case 3:
                             case "end":
                              return _context9.stop();
                            }
                          }, _callee9);
                        }));
                        return function func() {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_start, func);
                      btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) switch (_context10.prev = _context10.next) {
                           case 0:
                            btn_start.stopAllActions();
                            _context10.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context10.stop();
                          }
                        }, _callee10);
                      })));

                     case 19:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x) {
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
      popJackpotDialog: function popJackpotDialog(jackpot) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
             case 0:
              return _context16.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success) {
                  var skins, free_dialog, dialog, freetanchuang, title, animations, jackpotimg, yifenkuang, btn_collect, func;
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("jpWin");
                      skins = [ "mini", "minor", "major", "maxi", "grand" ];
                      Global.SlotsSoundMgr.playEffect(skins[jackpot.id - 1]);
                      free_dialog = cc.find("free_dialog", _this6.node.parent);
                      free_dialog.active = true;
                      dialog = cc.find("jackpot_node", free_dialog);
                      dialog.active = true;
                      dialog.scale = 1;
                      freetanchuang = cc.find("freetanchuang", dialog);
                      freetanchuang.getComponent(sp.Skeleton).setSkin(skins[jackpot.id - 1]);
                      freetanchuang.scale = 0;
                      cc.tween(freetanchuang).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      title = cc.find("title", dialog);
                      title.scale = 0;
                      animations = [ "Mini", "Minor", "Major", "Maxi", "Grand" ];
                      title.getComponent(sp.Skeleton).setAnimation(0, animations[jackpot.id - 1], true);
                      cc.tween(title).delay(.1).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      jackpotimg = cc.find("jackpot", dialog);
                      jackpotimg.scale = 0;
                      cc.tween(jackpotimg).delay(.2).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      yifenkuang = cc.find("yifenkuang", dialog);
                      yifenkuang.scale = 0;
                      cc.tween(yifenkuang).delay(.3).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(jackpot.value);
                      btn_collect = cc.find("btn_collect", dialog);
                      btn_collect.scale = 0;
                      cc.tween(btn_collect).delay(.4).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context15.next = 29;
                      return cc.vv.gameData.awaitTime(1);

                     case 29:
                      btn_collect.off("click");
                      func = function() {
                        var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) switch (_context13.prev = _context13.next) {
                             case 0:
                              btn_collect.off("click");
                              Global.SlotsSoundMgr.playEffect("button");
                              cc.tween(dialog).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                free_dialog.active = false;
                                dialog.active = false;
                                success();
                              }).start();

                             case 3:
                             case "end":
                              return _context13.stop();
                            }
                          }, _callee13);
                        }));
                        return function func() {
                          return _ref9.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_collect, func);
                      btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                        return regeneratorRuntime.wrap(function _callee14$(_context14) {
                          while (1) switch (_context14.prev = _context14.next) {
                           case 0:
                            btn_collect.stopAllActions();
                            _context14.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context14.stop();
                          }
                        }, _callee14);
                      })));

                     case 33:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee15);
                }));
                return function(_x2) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context16.stop();
            }
          }, _callee16);
        }))();
      },
      popBonusResultDialog: function popBonusResultDialog() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) switch (_context20.prev = _context20.next) {
             case 0:
              return _context20.abrupt("return", new Promise(function() {
                var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(success) {
                  var bonusGame, free_dialog, dialog, freetanchuang, congratulation, yifenkuang, bg_bonus_prize_plus_jackpot, bonusPrize, jackpot, _iterator, _step, item, btn_collect, func;
                  return regeneratorRuntime.wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("bgend");
                      bonusGame = cc.find("pick_game", _this7.node.parent).getComponent("GangsterGodfather_PickGame").getBonusGame();
                      free_dialog = cc.find("free_dialog", _this7.node.parent);
                      free_dialog.active = true;
                      dialog = cc.find("pickgame_result_node", free_dialog);
                      dialog.active = true;
                      dialog.scale = 1;
                      freetanchuang = cc.find("freetanchuang", dialog);
                      freetanchuang.scale = 0;
                      cc.tween(freetanchuang).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      congratulation = cc.find("congratulations", dialog);
                      congratulation.scale = 0;
                      cc.tween(congratulation).delay(.1).to(.5, {
                        scale: 2
                      }, {
                        easing: "backOut"
                      }).start();
                      yifenkuang = cc.find("yifenkuang", dialog);
                      yifenkuang.scale = 0;
                      cc.tween(yifenkuang).delay(.2).to(.5, {
                        scale: 2
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(bonusGame.winCoin);
                      bg_bonus_prize_plus_jackpot = cc.find("bg_bonus_prize_plus_jackpot", dialog);
                      bg_bonus_prize_plus_jackpot.scale = 0;
                      cc.tween(bg_bonus_prize_plus_jackpot).delay(.3).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      bonusPrize = 0;
                      jackpot = 0;
                      _iterator = _createForOfIteratorHelper(bonusGame.items);
                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                          item = _step.value;
                          item.isOpen && (item.jackpot ? jackpot += item.jackpot.value : bonusPrize += item.coin);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                      cc.find("bonus_prize", bg_bonus_prize_plus_jackpot).getComponent(cc.Label).string = Global.formatNumShort(bonusPrize);
                      cc.find("jackpot", bg_bonus_prize_plus_jackpot).getComponent(cc.Label).string = Global.formatNumShort(jackpot);
                      btn_collect = cc.find("btn_collect", dialog);
                      btn_collect.scale = 0;
                      cc.tween(btn_collect).delay(.4).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context19.next = 31;
                      return cc.vv.gameData.awaitTime(1);

                     case 31:
                      btn_collect.off("click");
                      func = function() {
                        var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                          return regeneratorRuntime.wrap(function _callee17$(_context17) {
                            while (1) switch (_context17.prev = _context17.next) {
                             case 0:
                              btn_collect.off("click");
                              Global.SlotsSoundMgr.playEffect("button");
                              cc.tween(dialog).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                free_dialog.active = false;
                                dialog.active = false;
                                cc.vv.gameData.AddCoin(bonusGame.winCoin);
                                success();
                              }).start();

                             case 3:
                             case "end":
                              return _context17.stop();
                            }
                          }, _callee17);
                        }));
                        return function func() {
                          return _ref12.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_collect, func);
                      btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                        return regeneratorRuntime.wrap(function _callee18$(_context18) {
                          while (1) switch (_context18.prev = _context18.next) {
                           case 0:
                            btn_collect.stopAllActions();
                            _context18.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context18.stop();
                          }
                        }, _callee18);
                      })));

                     case 35:
                     case "end":
                      return _context19.stop();
                    }
                  }, _callee19);
                }));
                return function(_x3) {
                  return _ref11.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context20.stop();
            }
          }, _callee20);
        }))();
      },
      cutScenePig: function cutScenePig() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
          var pig_bg, pig, spine;
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("fgTransition");
              pig_bg = cc.find("pig_bg", _this8.node.parent);
              pig = cc.find("pig", pig_bg);
              pig_bg.active = true;
              spine = pig.getComponent(sp.Skeleton);
              spine.setAnimation(0, "skill", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                pig_bg.active = false;
              });
              _context21.next = 9;
              return cc.vv.gameData.awaitTime(.5);

             case 9:
             case "end":
              return _context21.stop();
            }
          }, _callee21);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
      },
      collectSymbol: function collectSymbol() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
          var targetPig, haveCollect, i, card, symbol, coin, startPos, endPos;
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
             case 0:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                _context22.next = 2;
                break;
              }
              return _context22.abrupt("return");

             case 2:
              if (!(-1 === _this9._gameInfo.resultCards.indexOf(_this9._cfg.bonusId) && -1 === _this9._gameInfo.resultCards.indexOf(_this9._cfg.bonusGameId))) {
                _context22.next = 4;
                break;
              }
              return _context22.abrupt("return");

             case 4:
              targetPig = cc.find("collect_node/pig_" + _this9._gameInfo.collectInfo.count, _this9.node);
              haveCollect = false;
              i = 0;

             case 7:
              if (!(i < _this9._gameInfo.resultCards.length)) {
                _context22.next = 28;
                break;
              }
              card = _this9._gameInfo.resultCards[i];
              if (!(card === _this9._cfg.bonusId || card === _this9._cfg.bonusGameId)) {
                _context22.next = 25;
                break;
              }
              symbol = _this9.GetSymbolByIdx(i + 1);
              if (!symbol) {
                _context22.next = 25;
                break;
              }
              haveCollect = true;
              symbol.playCollectAnimation();
              coin = cc.instantiate(cc.find("collect_coin", _this9.node.parent));
              coin.active = true;
              coin.scale = 0;
              coin.parent = _this9.node.parent;
              startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this9.node.parent.convertToNodeSpaceAR(startPos);
              coin.position = startPos;
              endPos = targetPig.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this9.node.parent.convertToNodeSpaceAR(endPos);
              cc.tween(coin).parallel(cc.tween().to(.5, {
                position: endPos
              }), cc.tween().to(.3, {
                scale: 1.1
              }).to(.2, {
                scale: .5
              })).removeSelf().start();
              return _context22.abrupt("break", 28);

             case 25:
              i++;
              _context22.next = 7;
              break;

             case 28:
              if (!haveCollect) {
                _context22.next = 32;
                break;
              }
              cc.tween(targetPig).delay(.5).call(function() {
                Global.SlotsSoundMgr.playEffect("collect");
                cc.find("idle", targetPig).active = false;
                var spine = targetPig.getChildByName("spine").getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, "fenTojin", false);
                spine.addAnimation(0, "jin_idle", true);
              }).start();
              _context22.next = 32;
              return cc.vv.gameData.awaitTime(.5);

             case 32:
             case "end":
              return _context22.stop();
            }
          }, _callee22);
        }))();
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
             case 0:
              _this10._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              for (i = 0; i < _this10._gameInfo.resultCards.length; i++) {
                card = _this10._gameInfo.resultCards[i];
                if (card === _this10._cfg.scatterId) {
                  symbol = _this10.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              _context23.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context23.next = 7;
              return _this10.popFreeDialog();

             case 7:
              _this10.cutScenePig();
              _context23.next = 10;
              return cc.vv.gameData.awaitTime(2);

             case 10:
              _this10.Backup();
              _this10.ShowGameview(true);
              _context23.next = 14;
              return cc.vv.gameData.awaitTime(1);

             case 14:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");
              _this10.CanDoNextRound();

             case 17:
             case "end":
              return _context23.stop();
            }
          }, _callee23);
        }))();
      },
      StopMove: function StopMove() {
        this._super();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee24() {
          return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) switch (_context24.prev = _context24.next) {
             case 0:
              _this11._bottomScript.ShowBtnsByState("moveing_1");
              _context24.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context24.next = 5;
              return _this11.popFreeResultDialog();

             case 5:
              _this11.cutScenePig();
              _context24.next = 8;
              return cc.vv.gameData.awaitTime(2);

             case 8:
              _this11.Resume();
              _this11.ShowGameview(false);
              _context24.next = 12;
              return cc.vv.gameData.awaitTime(1);

             case 12:
              _this11.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this11.CanDoNextRound();
              });

             case 13:
             case "end":
              return _context24.stop();
            }
          }, _callee24);
        }))();
      },
      popFreeDialog: function popFreeDialog() {
        var _this12 = this;
        return new Promise(function() {
          var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee27(success) {
            var free_dialog, dialog, freetanchuang, congratulation, you_won_EN, times, free_games_EN, btn_start, func;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) switch (_context27.prev = _context27.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgbegin");
                Global.SlotsSoundMgr.playEffect("freegames");
                free_dialog = cc.find("free_dialog", _this12.node.parent);
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
                congratulation = cc.find("congratulations", dialog);
                congratulation.scale = 0;
                cc.tween(congratulation).delay(.1).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                you_won_EN = cc.find("you_won_EN", dialog);
                you_won_EN.scale = 0;
                cc.tween(you_won_EN).delay(.2).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                times = cc.find("times", dialog);
                times.scale = 0;
                times.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                cc.tween(times).delay(.3).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                free_games_EN = cc.find("free_games_EN", dialog);
                free_games_EN.scale = 0;
                cc.tween(free_games_EN).delay(.4).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                btn_start = cc.find("btn_start", dialog);
                btn_start.scale = 0;
                cc.tween(btn_start).delay(.5).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context27.next = 28;
                return cc.vv.gameData.awaitTime(1);

               case 28:
                btn_start.off("click");
                func = function() {
                  var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee25() {
                    return regeneratorRuntime.wrap(function _callee25$(_context25) {
                      while (1) switch (_context25.prev = _context25.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("button");
                        btn_start.off("click");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context25.stop();
                      }
                    }, _callee25);
                  }));
                  return function func() {
                    return _ref15.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee26() {
                  return regeneratorRuntime.wrap(function _callee26$(_context26) {
                    while (1) switch (_context26.prev = _context26.next) {
                     case 0:
                      btn_start.stopAllActions();
                      _context26.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context26.stop();
                    }
                  }, _callee26);
                })));

               case 32:
               case "end":
                return _context27.stop();
              }
            }, _callee27);
          }));
          return function(_x4) {
            return _ref14.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this13 = this;
        return new Promise(function() {
          var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee30(success) {
            var free_dialog, dialog, freetanchuang, congratulation, yifenkuang, in_free_games_EN, times, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) switch (_context30.prev = _context30.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgend");
                free_dialog = cc.find("free_dialog", _this13.node.parent);
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
                congratulation = cc.find("congratulations", dialog);
                congratulation.scale = 0;
                cc.tween(congratulation).delay(.1).to(.5, {
                  scale: 2
                }, {
                  easing: "backOut"
                }).start();
                yifenkuang = cc.find("yifenkuang", dialog);
                yifenkuang.scale = 0;
                cc.tween(yifenkuang).delay(.2).to(.5, {
                  scale: 2
                }, {
                  easing: "backOut"
                }).start();
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.GetGameTotalFreeWin());
                in_free_games_EN = cc.find("in_free_games_EN", dialog);
                in_free_games_EN.scale = 0;
                cc.tween(in_free_games_EN).delay(.3).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                times = cc.find("times", in_free_games_EN);
                times.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                btn_collect = cc.find("btn_collect", dialog);
                btn_collect.scale = 0;
                cc.tween(btn_collect).delay(.4).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context30.next = 26;
                return cc.vv.gameData.awaitTime(1);

               case 26:
                btn_collect.off("click");
                func = function() {
                  var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee28() {
                    return regeneratorRuntime.wrap(function _callee28$(_context28) {
                      while (1) switch (_context28.prev = _context28.next) {
                       case 0:
                        btn_collect.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context28.stop();
                      }
                    }, _callee28);
                  }));
                  return function func() {
                    return _ref18.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee29() {
                  return regeneratorRuntime.wrap(function _callee29$(_context29) {
                    while (1) switch (_context29.prev = _context29.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context29.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context29.stop();
                    }
                  }, _callee29);
                })));

               case 30:
               case "end":
                return _context30.stop();
              }
            }, _callee30);
          }));
          return function(_x5) {
            return _ref17.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  GangsterGodfather_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ee340lt7xDXK8eqLPC0fqE", "GangsterGodfather_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
      },
      playCollectAnimation: function playCollectAnimation() {
        var isPlay = false;
        var id = this._id;
        this._showNode && (this._showNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          this._showNode.zIndex = 400 - this._symbolIdx + 10 * this._reelIdx;
          isPlay = true;
          var nodeSp = this._showNode.getChildByName("spine").getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, "collect", false);
        }
        return isPlay;
      },
      playBonusGameAnimation: function playBonusGameAnimation() {
        var isPlay = false;
        var id = this._id;
        this._showNode && (this._showNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          this._showNode.zIndex = 400 - this._symbolIdx + 10 * this._reelIdx;
          isPlay = true;
          var nodeSp = this._showNode.getChildByName("spine").getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, "collect", false);
        }
        return isPlay;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "GangsterGodfather_Cfg", "GangsterGodfather_GameData", "GangsterGodfather_Logic", "GangsterGodfather_PickGame", "GangsterGodfather_Reel", "GangsterGodfather_Slots", "GangsterGodfather_Symbol" ]);