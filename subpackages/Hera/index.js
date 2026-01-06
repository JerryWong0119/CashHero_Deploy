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
  Hera_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9880enHkVREKJeNPiv0kaMq", "Hera_Cfg");
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
        zIndex: 100,
        win_node: "animation_1",
        win_ani: {
          name: "Wild",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        zIndex: 300,
        win_node: "animation_2",
        stop_ani: {
          name: "Scatter_01",
          zIndex: 200
        },
        win_ani: {
          name: "Scatter_02",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        zIndex: 100,
        win_node: "animation_4",
        win_ani: {
          name: "H1",
          zIndex: 300
        },
        trigger_ani: {
          name: "H1_liang",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5",
        zIndex: 100,
        win_node: "animation_5",
        win_ani: {
          name: "H2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6",
        zIndex: 100,
        win_node: "animation_6",
        win_ani: {
          name: "H3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7",
        zIndex: 100,
        win_node: "animation_7",
        win_ani: {
          name: "H4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8",
        zIndex: 100,
        win_node: "animation_8",
        win_ani: {
          name: "H5",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9",
        zIndex: 100,
        win_node: "animation_9",
        win_ani: {
          name: "Lsymbol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10",
        zIndex: 100,
        win_node: "animation_10",
        win_ani: {
          name: "Lsymbol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11",
        zIndex: 100,
        win_node: "animation_11",
        win_ani: {
          name: "Lsymbol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12",
        zIndex: 100,
        win_node: "animation_12",
        win_ani: {
          name: "Lsymbol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "symbol_13",
        zIndex: 100,
        win_node: "animation_13",
        win_ani: {
          name: "Lsymbol",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 201, {
        node: "symbol_201",
        zIndex: 300,
        win_node: "animation_3",
        win_ani: {
          name: "JP_Qiu_D_Bai",
          zIndex: 300
        },
        ball_ani: {
          name: "JP_Qiu_D_Mini",
          zIndex: 300
        },
        effect_ani: {
          name: "Qiu_D_Mini"
        }
      }), _defineProperty(_symbol, 202, {
        node: "symbol_202",
        zIndex: 300,
        win_node: "animation_3",
        win_ani: {
          name: "JP_Qiu_D_Bai",
          zIndex: 300
        },
        ball_ani: {
          name: "JP_Qiu_D_Minor",
          zIndex: 300
        },
        effect_ani: {
          name: "Qiu_D_Minor"
        }
      }), _defineProperty(_symbol, 203, {
        node: "symbol_203",
        zIndex: 300,
        win_node: "animation_3",
        win_ani: {
          name: "JP_Qiu_D_Bai",
          zIndex: 300
        },
        ball_ani: {
          name: "JP_Qiu_D_Major",
          zIndex: 300
        },
        effect_ani: {
          name: "Qiu_D_Major"
        }
      }), _defineProperty(_symbol, 204, {
        node: "symbol_204",
        zIndex: 300,
        win_node: "animation_3",
        win_ani: {
          name: "JP_Qiu_D_Bai",
          zIndex: 300
        },
        ball_ani: {
          name: "JP_Qiu_D_Grand",
          zIndex: 300
        },
        effect_ani: {
          name: "Qiu_D_Grand"
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Hera_Slots",
        Reels: "Hera_Reel",
        Symbols: "Hera_Symbol"
      },
      col: 5,
      row: 5,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 122,
        height: 92
      },
      randomSymbols: [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      wildId: 1,
      scatterId: 2,
      bonusIds: [ 201, 202, 203, 204 ],
      kuang: "kuang",
      speed: 2500,
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
        mini: 5,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Hera/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelsctr",
        antSound: "reelfast",
        antSpeed: 2400
      } ],
      helpItems: [ "games/Hera/prefab/help_item_1", "games/Hera/prefab/help_item_2", "games/Hera/prefab/help_item_3", "games/Hera/prefab/help_item_4" ],
      commEffect: {
        path: "games/Hera/",
        win1: [ "win_a", "win_end" ],
        win2: [ "win_b", "win_end" ]
      },
      normalBgm: "ngbgm",
      sysFloatOffsetPos: cc.v2(0, 40)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Hera_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c36e6S5yZ9I/rK4y8EdYD/v", "Hera_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _lockBonus: false
      },
      onLoad: function onLoad() {
        this._super();
        var deskInfo = cc.vv.gameData.getDeskInfo();
        this._lockBonus = deskInfo.needBet > deskInfo.currmult;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
      },
      onUpdateBet: function onUpdateBet() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var script = cc.find("safe_node/slots/collect_node/bonus_node/lock", this.node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("unlock");
          script.setAnimation(0, "BetUp_Intro", false);
          this._lockBonus = false;
        } else if (deskInfo.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("lock");
          this._lockBonus = true;
          script.setAnimation(0, "BetUp_End", false);
          script.addAnimation(0, "BetUp_Loop", true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Hera_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "239f74CwgBBCZtnAEOsLPQG", "Hera_Reel");
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
      },
      AppendSymbol: function AppendSymbol(symbolArray, dir) {
        for (var i = 0; i < symbolArray.length; i++) {
          var node = cc.instantiate(this._symbolTemplete);
          node.parent = this._holderNode;
          var scp = node.addComponent(this._cfg.scripts.Symbols);
          scp.SetSymbolReelIdx(this._reelIdx);
          if (1 === dir) {
            var idx = -1 - i;
            node.position = this.GetSymbolPosByRow(idx);
            scp.Init(idx, this._topAniNode);
            this._symbols.unshift(scp);
          } else if (2 === dir) {
            var _idx = this._symbols.length - 1;
            scp.Init(_idx, this._topAniNode);
            this._symbols.splice(_idx, 0, scp);
          }
          scp.ShowById(symbolArray[i].id, symbolArray[i].data);
        }
        2 === dir && this.ReLayOut();
      },
      deleteSymbol: function deleteSymbol(index) {
        var symbol = this._symbols[index];
        this._symbols.splice(index, 1);
        symbol.setAnimationToTop(false);
        symbol.ShowKuang(false);
        symbol.node.destroy();
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
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                var node = cc.find(info.antiNode + "_" + (this._reelIdx + 1), this.node.parent);
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
          var _node = cc.find(name + "_" + (this._reelIdx + 1), this.node.parent);
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Hera_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df7fcj2iQVFU5fH8MlHxhc+", "Hera_Slots");
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
        _jackpotNums: []
      },
      Init: function Init() {
        var _this = this;
        this._jackpotNums = [ 0, 0, 0, 0 ];
        this._super();
        var bonus_node = cc.find("collect_node/bonus_node", this.node);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        bonus_node.on(cc.Node.EventType.TOUCH_END, function() {
          deskInfo.needBet > deskInfo.currmult && "idle" === cc.vv.gameData.GetSlotState() && _this._bottomScript.SetBetIdx(deskInfo.needBet);
        });
        var script = cc.find("lock", bonus_node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= deskInfo.currmult) {
          Global.SlotsSoundMgr.playEffect("unlock");
          script.setAnimation(0, "BetUp_Intro", false);
        } else {
          Global.SlotsSoundMgr.playEffect("lock");
          script.setAnimation(0, "BetUp_End", false);
          script.addAnimation(0, "BetUp_Loop", true);
        }
        this.updateCollectProgress(deskInfo.bonusTrail);
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, rest, prizePool, i, pool, j, node, _i, item;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this2.ShowGameview(true);
                _this2._jackpotNums = deskInfo.freeGameInfo.bonusCnt;
                prizePool = cc.find("spr_bg_free/prize_pool", _this2.node.parent);
                for (i = 0; i < 4; i++) {
                  pool = cc.find("prizePool_" + (i + 1), prizePool);
                  for (j = 0; j < 6; j++) {
                    node = cc.find("collect/node_" + (j + 1), pool);
                    if (node) {
                      cc.find("ball", node).active = j < _this2._jackpotNums[i];
                      cc.find("light", node).active = true;
                    }
                  }
                }
                prizePool.getComponent("LMSlots_PrizePool_Base").PausePool([ {
                  prizeType: 0,
                  pauseNum: deskInfo.freeGameInfo.jackpotValues[0]
                }, {
                  prizeType: 1,
                  pauseNum: deskInfo.freeGameInfo.jackpotValues[1]
                }, {
                  prizeType: 2,
                  pauseNum: deskInfo.freeGameInfo.jackpotValues[2]
                }, {
                  prizeType: 3,
                  pauseNum: deskInfo.freeGameInfo.jackpotValues[3]
                } ]);
                if (2 === deskInfo.bonusTrail.state) {
                  cc.find("super_node", _this2.node).active = true;
                  for (_i = 0; _i < 6; _i++) {
                    item = cc.find("super_node/item_" + (_i + 1), _this2.node);
                    cc.find("blue", item).active = false;
                    cc.find("spine", item).active = false;
                    cc.find("light", item).active = false;
                  }
                  _this2.clearCollectProgress();
                }
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("fgbgm");
                _this2.CanDoNextRound();
              } else {
                _this2.ShowGameview(false);
                _this2.CanDoNextRound();
              }

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._super(msg);

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        this._super(cards);
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var reel = this._reels[colIdx];
        for (var i = 0; i < this._cfg.row; i++) {
          var symbol = reel.GetSymbolByRow(i);
          symbol && this._cfg.bonusIds.includes(symbol.GetShowId()) && symbol.playWinAnimation();
        }
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() === cc.vv.gameData.GetTotalFree();
      },
      CheckExtraFreeGame: function CheckExtraFreeGame() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      ShowWinTrace: function ShowWinTrace() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var winCoin, winTimes, _loop, i;
          return regeneratorRuntime.wrap(function _callee5$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              winCoin = 0;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (winCoin = cc.vv.gameData.GetGameTotalFreeWin() - cc.vv.gameData.GetGameWin());
              winTimes = 0;
              _loop = regeneratorRuntime.mark(function _loop(i) {
                var result, needAddSymbolArray, _iterator, _step, idx, symbol, reelIndex;
                return regeneratorRuntime.wrap(function _loop$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                   case 0:
                    result = _this4._gameInfo.winResults[i];
                    needAddSymbolArray = [ 0, 0, 0, 0, 0 ];
                    winCoin += result.winCoin;
                    _context6.next = 5;
                    return new Promise(function() {
                      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                        var _loop2, j;
                        return regeneratorRuntime.wrap(function _callee3$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                           case 0:
                            _loop2 = regeneratorRuntime.mark(function _loop2(j) {
                              var card, symbol, particle, startPos, collect_node, endPos;
                              return regeneratorRuntime.wrap(function _loop2$(_context3) {
                                while (1) switch (_context3.prev = _context3.next) {
                                 case 0:
                                  card = result.cards[j];
                                  symbol = _this4.GetSymbolByIdx(j + 1);
                                  if (!(_this4._cfg.bonusIds.includes(card) && !symbol.getHasChangeBall())) {
                                    _context3.next = 22;
                                    break;
                                  }
                                  symbol.playBallAnimation();
                                  _this4._jackpotNums[card - 201]++;
                                  _context3.next = 7;
                                  return cc.vv.gameData.awaitTime(.5);

                                 case 7:
                                  particle = cc.instantiate(cc.find("particle_" + card, _this4.node.parent));
                                  particle.active = true;
                                  particle.parent = _this4.node.parent;
                                  startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                                  startPos = _this4.node.parent.convertToNodeSpaceAR(startPos);
                                  particle.position = startPos;
                                  collect_node = cc.find("spr_bg_free/prize_pool/prizePool_" + (card - 200) + "/collect/node_" + _this4._jackpotNums[card - 201], _this4.node.parent);
                                  endPos = collect_node.convertToWorldSpaceAR(cc.v2(0, 0));
                                  endPos = _this4.node.parent.convertToNodeSpaceAR(endPos);
                                  cc.tween(particle).to(.5, {
                                    position: endPos
                                  }).call(function() {
                                    var ball = cc.find("ball", collect_node);
                                    ball.active = true;
                                    var light = cc.find("light", collect_node);
                                    var animations = [ "Mini", "Minor", "Major", "Grand" ];
                                    light.getComponent(sp.Skeleton).setAnimation(0, "Qiu_X_" + animations[card - 201], false);
                                    symbol.playBallClearAnimation();
                                  }).removeSelf().start();
                                  _context3.next = 19;
                                  return cc.vv.gameData.awaitTime(.7);

                                 case 19:
                                  if (!(_this4._gameInfo.jackpot && _this4.collectFullJackpot())) {
                                    _context3.next = 22;
                                    break;
                                  }
                                  _context3.next = 22;
                                  return _this4.popJackpotDialog();

                                 case 22:
                                 case "end":
                                  return _context3.stop();
                                }
                              }, _loop2);
                            });
                            j = 0;

                           case 2:
                            if (!(j < result.cards.length)) {
                              _context4.next = 7;
                              break;
                            }
                            return _context4.delegateYield(_loop2(j), "t0", 4);

                           case 4:
                            j++;
                            _context4.next = 2;
                            break;

                           case 7:
                            success();

                           case 8:
                           case "end":
                            return _context4.stop();
                          }
                        }, _callee3);
                      }));
                      return function(_x) {
                        return _ref.apply(this, arguments);
                      };
                    }());

                   case 5:
                    _iterator = _createForOfIteratorHelper(result.idxs);
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        idx = _step.value;
                        symbol = _this4.GetSymbolByIdx(idx);
                        if (symbol) {
                          reelIndex = (idx - 1) % 5;
                          needAddSymbolArray[reelIndex]++;
                          symbol.playWinAnimation();
                          symbol.ShowKuang();
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                    _context6.next = 9;
                    return new Promise(function(success) {
                      _this4.ShowBottomWin(result.winCoin, winCoin, i === _this4._gameInfo.winResults.length - 2, _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                        var j, _item, item, light, _iterator2, _step2, idx, symbol, _loop3, _j;
                        return regeneratorRuntime.wrap(function _callee4$(_context5) {
                          while (1) switch (_context5.prev = _context5.next) {
                           case 0:
                            winTimes++;
                            if (2 === _this4._gameInfo.bonusTrail.state && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime()) {
                              for (j = 0; j < winTimes - 1; j++) {
                                _item = cc.find("super_node/item_" + (j + 1), _this4.node);
                                cc.find("blue", _item).active = true;
                                cc.find("spine", _item).active = false;
                                cc.find("light", _item).active = false;
                              }
                              Global.SlotsSoundMgr.playEffect("multiplier");
                              item = cc.find("super_node/item_" + winTimes, _this4.node);
                              cc.find("spine", item).active = true;
                              light = cc.find("light", item);
                              light.active = true;
                              light.getComponent(sp.Skeleton).setAnimation(0, "FG_ChengBei_Intro", false);
                            }
                            Global.SlotsSoundMgr.playEffect("magicbreak");
                            _iterator2 = _createForOfIteratorHelper(result.idxs);
                            try {
                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                                idx = _step2.value;
                                symbol = _this4.GetSymbolByIdx(idx);
                                symbol && function() {
                                  symbol.playClearAnimation();
                                  symbol.ShowKuang(false);
                                  var clear = cc.instantiate(cc.find("symbol_clean", _this4.node.parent));
                                  clear.active = true;
                                  clear.parent = _this4.node.parent;
                                  var position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                                  position = _this4.node.parent.convertToNodeSpaceAR(position);
                                  clear.position = position;
                                  clear.getComponent(sp.Skeleton).setAnimation(0, "symbol_clean", false);
                                  clear.getComponent(sp.Skeleton).setCompleteListener(function() {
                                    clear.removeFromParent();
                                  });
                                }();
                              }
                            } catch (err) {
                              _iterator2.e(err);
                            } finally {
                              _iterator2.f();
                            }
                            _context5.next = 7;
                            return cc.vv.gameData.awaitTime(.8);

                           case 7:
                            Global.SlotsSoundMgr.playEffect("symboldown");
                            _loop3 = function _loop3(_j) {
                              var addNum = needAddSymbolArray[_j];
                              var symbolArray = [];
                              var reel = _this4._reels[_j];
                              var nextCards = _this4._gameInfo.winResults[i + 1].cards;
                              if (addNum > 0) {
                                for (var k = 0; k < addNum; k++) {
                                  var card = nextCards[_this4._cfg.col * k + _j];
                                  var data = null;
                                  symbolArray.push({
                                    id: card,
                                    data: data
                                  });
                                }
                                result.idxs.sort(function(a, b) {
                                  return a - b;
                                });
                                symbolArray.reverse();
                                reel.AppendSymbol(symbolArray, 2);
                                var _iterator3 = _createForOfIteratorHelper(result.idxs), _step3;
                                try {
                                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                                    var _idx = _step3.value;
                                    var reelIndex = (_idx - 1) % 5;
                                    if (reelIndex === _j) {
                                      var _symbol3 = _this4.GetSymbolByIdx(_idx);
                                      if (_symbol3) {
                                        var s = Math.floor(result.cards.length / _this4._cfg.col) - (Math.floor((_idx - 1) / 5) + 1);
                                        reel.deleteSymbol(s);
                                      }
                                    }
                                  }
                                } catch (err) {
                                  _iterator3.e(err);
                                } finally {
                                  _iterator3.f();
                                }
                                for (var _k = 0; _k < nextCards.length / _this4._cfg.col; _k++) {
                                  var _symbol = reel.GetSymbolByRow(_k);
                                  cc.tween(_symbol.node).to(.3, {
                                    y: (_k + .5) * _this4._cfg.symbolSize.height
                                  }).start();
                                }
                                cc.tween(reel.node).delay(.3).call(function() {
                                  reel.ReLayOut();
                                  for (var _i2 = 0; _i2 < _this4._cfg.row; _i2++) {
                                    var _symbol2 = reel.GetSymbolByRow(_i2);
                                    _symbol2 && _this4._cfg.bonusIds.includes(_symbol2.GetShowId()) && !_symbol2.getHasChangeBall() && _symbol2.playWinAnimation();
                                  }
                                }).start();
                              }
                            };
                            for (_j = 0; _j < needAddSymbolArray.length; _j++) _loop3(_j);
                            _context5.next = 12;
                            return cc.vv.gameData.awaitTime(.8);

                           case 12:
                            success();

                           case 13:
                           case "end":
                            return _context5.stop();
                          }
                        }, _callee4);
                      })));
                    });

                   case 9:
                   case "end":
                    return _context6.stop();
                  }
                }, _loop);
              });
              i = 0;

             case 5:
              if (!(i < _this4._gameInfo.winResults.length - 1)) {
                _context7.next = 10;
                break;
              }
              return _context7.delegateYield(_loop(i), "t0", 7);

             case 7:
              i++;
              _context7.next = 5;
              break;

             case 10:
             case "end":
              return _context7.stop();
            }
          }, _callee5);
        }))();
      },
      collectFullJackpot: function collectFullJackpot() {
        for (var i = 0; i < this._jackpotNums.length; i++) if (this._jackpotNums[i] >= 3 + i) return true;
        return false;
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var i, item;
          return regeneratorRuntime.wrap(function _callee7$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _context10.next = 2;
              return _this5.ShowWinTrace();

             case 2:
              _context10.next = 4;
              return new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var cards, _loop4, j;
                  return regeneratorRuntime.wrap(function _callee6$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      cards = _this5._gameInfo.winResults.length > 0 ? _this5._gameInfo.winResults[_this5._gameInfo.winResults.length - 1].cards : _this5._gameInfo.resultCards;
                      _loop4 = regeneratorRuntime.mark(function _loop4(j) {
                        var card, symbol, particle, startPos, collect_node, endPos, reward, animations;
                        return regeneratorRuntime.wrap(function _loop4$(_context8) {
                          while (1) switch (_context8.prev = _context8.next) {
                           case 0:
                            card = cards[j];
                            symbol = _this5.GetSymbolByIdx(j + 1);
                            if (!(_this5._cfg.bonusIds.includes(card) && !symbol.getHasChangeBall())) {
                              _context8.next = 31;
                              break;
                            }
                            symbol.playBallAnimation();
                            _this5._jackpotNums[card - 201]++;
                            _context8.next = 7;
                            return cc.vv.gameData.awaitTime(.5);

                           case 7:
                            particle = cc.instantiate(cc.find("particle_" + card, _this5.node.parent));
                            particle.active = true;
                            particle.parent = _this5.node.parent;
                            startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                            startPos = _this5.node.parent.convertToNodeSpaceAR(startPos);
                            particle.position = startPos;
                            collect_node = cc.find("spr_bg_free/prize_pool/prizePool_" + (card - 200) + "/collect/node_" + _this5._jackpotNums[card - 201], _this5.node.parent);
                            endPos = collect_node.convertToWorldSpaceAR(cc.v2(0, 0));
                            endPos = _this5.node.parent.convertToNodeSpaceAR(endPos);
                            Global.SlotsSoundMgr.playEffect("JPfly");
                            cc.tween(particle).to(.5, {
                              position: endPos
                            }).call(function() {
                              var ball = cc.find("ball", collect_node);
                              ball.active = true;
                              var light = cc.find("light", collect_node);
                              var animations = [ "Mini", "Minor", "Major", "Grand" ];
                              light.getComponent(sp.Skeleton).setAnimation(0, "Qiu_X_" + animations[card - 201], false);
                              symbol.playBallClearAnimation();
                            }).removeSelf().start();
                            _context8.next = 20;
                            return cc.vv.gameData.awaitTime(.5);

                           case 20:
                            if (!(_this5._gameInfo.jackpot && _this5.collectFullJackpot())) {
                              _context8.next = 31;
                              break;
                            }
                            reward = cc.find("spr_bg_free/prize_pool/prizePool_" + _this5._gameInfo.jackpot.id + "/reward", _this5.node.parent);
                            reward.active = true;
                            animations = [ "JPTiShi_V", "JPTiShi_L", "JPTiShi_Z", "JPTiShi_H" ];
                            reward.getComponent(sp.Skeleton).setAnimation(0, animations[_this5._gameInfo.jackpot.id - 1], false);
                            reward.getComponent(sp.Skeleton).setCompleteListener(function() {
                              reward.getComponent(sp.Skeleton).setCompleteListener(null);
                              reward.active = false;
                            });
                            Global.SlotsSoundMgr.playEffect("JPcollect");
                            _context8.next = 29;
                            return cc.vv.gameData.awaitTime(.5);

                           case 29:
                            _context8.next = 31;
                            return _this5.popJackpotDialog();

                           case 31:
                           case "end":
                            return _context8.stop();
                          }
                        }, _loop4);
                      });
                      j = 0;

                     case 3:
                      if (!(j < cards.length)) {
                        _context9.next = 8;
                        break;
                      }
                      return _context9.delegateYield(_loop4(j), "t0", 5);

                     case 5:
                      j++;
                      _context9.next = 3;
                      break;

                     case 8:
                      success();

                     case 9:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee6);
                }));
                return function(_x2) {
                  return _ref3.apply(this, arguments);
                };
              }());

             case 4:
              for (i = 0; i < 6; i++) {
                item = cc.find("super_node/item_" + (i + 1), _this5.node);
                cc.find("blue", item).active = false;
                cc.find("spine", item).active = false;
                cc.find("light", item).active = false;
              }
              _this5.CheckEnterFreeGame() ? _this5.triggerFreeGame() : _this5.CheckExtraFreeGame() ? _this5.triggerExtraFreeGame() : _this5.CheckExitFreeGame() ? _this5.triggerExitFreeGame() : _this5.CanDoNextRound();

             case 6:
             case "end":
              return _context10.stop();
            }
          }, _callee7);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.find("LMSlots_PrizePool_1", this.node.parent).active = !bFree;
        cc.find("collect_node", this.node).active = !bFree;
        cc.find("hela", this.node.parent).active = !bFree;
        cc.find("super_node", this.node).active = this._gameInfo && 2 === this._gameInfo.bonusTrail.state && bFree;
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var cards, i, card, symbol, item, finish, spine, prizePool, _i3, pool, j, node, _i4, _item2;
          return regeneratorRuntime.wrap(function _callee8$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              cards = _this6._gameInfo.winResults[_this6._gameInfo.winResults.length - 1];
              for (i = 0; i < cards.length; i++) {
                card = cards[i];
                if (card === _this6._cfg.scatterId) {
                  symbol = _this6.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              if (cc.vv.gameData.getDeskInfo().currmult >= cc.vv.gameData.getDeskInfo().needBet) {
                item = cc.find("collect_node/item_" + _this6._gameInfo.bonusTrail.count, _this6.node);
                finish = cc.find("finish", item);
                spine = cc.find("spine", item);
                Global.SlotsSoundMgr.playEffect("collect");
                finish.active = true;
                spine.active = true;
                if (2 === _this6._gameInfo.bonusTrail.state) {
                  spine.getComponent(sp.Skeleton).setAnimation(0, "JinDuTiao_ChengBao_Intro", false);
                  spine.getComponent(sp.Skeleton).addAnimation(0, "JinDuTiao_ChengBao_End", true);
                } else spine.getComponent(sp.Skeleton).setAnimation(0, "JinDuTiao_Hua", false);
              }
              _context11.next = 7;
              return cc.vv.gameData.awaitTime(2);

             case 7:
              if (!(2 === _this6._gameInfo.bonusTrail.state)) {
                _context11.next = 12;
                break;
              }
              _context11.next = 10;
              return _this6.popFreeDialog(true);

             case 10:
              _context11.next = 14;
              break;

             case 12:
              _context11.next = 14;
              return _this6.popFreeDialog(false);

             case 14:
              _this6.cutScene();
              _context11.next = 17;
              return cc.vv.gameData.awaitTime(1.5);

             case 17:
              _this6._jackpotNums = [ 0, 0, 0, 0 ];
              _this6.ShowGameview(true);
              prizePool = cc.find("spr_bg_free/prize_pool", _this6.node.parent);
              for (_i3 = 0; _i3 < 4; _i3++) {
                pool = cc.find("prizePool_" + (_i3 + 1), prizePool);
                for (j = 0; j < 6; j++) {
                  node = cc.find("collect/node_" + (j + 1), pool);
                  if (node) {
                    cc.find("ball", node).active = false;
                    cc.find("light", node).active = false;
                  }
                }
              }
              prizePool.getComponent("LMSlots_PrizePool_Base").PausePool([ {
                prizeType: 0,
                pauseNum: _this6._gameInfo.freeGameInfo.jackpotValues[0]
              }, {
                prizeType: 1,
                pauseNum: _this6._gameInfo.freeGameInfo.jackpotValues[1]
              }, {
                prizeType: 2,
                pauseNum: _this6._gameInfo.freeGameInfo.jackpotValues[2]
              }, {
                prizeType: 3,
                pauseNum: _this6._gameInfo.freeGameInfo.jackpotValues[3]
              } ]);
              if (2 === _this6._gameInfo.bonusTrail.state) {
                for (_i4 = 0; _i4 < 6; _i4++) {
                  _item2 = cc.find("super_node/item_" + (_i4 + 1), _this6.node);
                  cc.find("blue", _item2).active = false;
                  cc.find("spine", _item2).active = false;
                  cc.find("light", _item2).active = false;
                }
                _this6.clearCollectProgress();
              }
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");
              _context11.next = 27;
              return cc.vv.gameData.awaitTime(1.5);

             case 27:
              _this6.CanDoNextRound();

             case 28:
             case "end":
              return _context11.stop();
            }
          }, _callee8);
        }))();
      },
      cutScene: function cutScene() {
        Global.SlotsSoundMgr.playEffect("fgtransition");
        var transition = cc.find("transition", this.node.parent);
        transition.active = true;
        var spine = transition.getChildByName("transition").getComponent(sp.Skeleton);
        spine.setAnimation(0, "FG_GuoChang", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          transition.active = false;
        });
      },
      triggerExtraFreeGame: function triggerExtraFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var cards, i, card, symbol;
          return regeneratorRuntime.wrap(function _callee9$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              cards = _this7._gameInfo.winResults[_this7._gameInfo.winResults.length - 1];
              for (i = 0; i < cards.length; i++) {
                card = cards[i];
                if (card === _this7._cfg.scatterId) {
                  symbol = _this7.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              Global.SlotsSoundMgr.playEffect("bell");
              _context12.next = 6;
              return cc.vv.gameData.awaitTime(2);

             case 6:
              _context12.next = 8;
              return _this7.popExtraFreeDialog();

             case 8:
              _this7.CanDoNextRound();

             case 9:
             case "end":
              return _context12.stop();
            }
          }, _callee9);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              _this8._bottomScript.ShowBtnsByState("moveing_1");
              _context13.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context13.next = 5;
              return _this8.popFreeResultDialog();

             case 5:
              _this8.cutScene();
              _context13.next = 8;
              return cc.vv.gameData.awaitTime(1.5);

             case 8:
              _this8.ShowGameview(false);
              _context13.next = 11;
              return cc.vv.gameData.awaitTime(.5);

             case 11:
              _this8.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this8.CanDoNextRound();
              });

             case 12:
             case "end":
              return _context13.stop();
            }
          }, _callee10);
        }))();
      },
      popFreeDialog: function popFreeDialog(isSuper) {
        var _this9 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success) {
            var free_dialog, dialog, freetanchuang, congratulation, you_won_EN, times, free_games_EN, btn_start, func;
            return regeneratorRuntime.wrap(function _callee12$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect("fgbegin");
                free_dialog = cc.find("dialog_node", _this9.node.parent);
                free_dialog.active = true;
                dialog = cc.find("common_enter_node", free_dialog);
                isSuper && (dialog = cc.find("super_enter_node", free_dialog));
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
                _context15.next = 29;
                return cc.vv.gameData.awaitTime(1);

               case 29:
                func = function() {
                  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                    return regeneratorRuntime.wrap(function _callee11$(_context14) {
                      while (1) switch (_context14.prev = _context14.next) {
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
                        return _context14.stop();
                      }
                    }, _callee11);
                  }));
                  return function func() {
                    return _ref5.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.off("click");
                btn_start.on("click", function() {
                  btn_start.stopAllActions();
                  func();
                });

               case 33:
               case "end":
                return _context15.stop();
              }
            }, _callee12);
          }));
          return function(_x3) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      popExtraFreeDialog: function popExtraFreeDialog() {
        var _this10 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success) {
            var free_dialog, dialog, freetanchuang, congratulation, you_won_EN, times, free_games_EN;
            return regeneratorRuntime.wrap(function _callee13$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgretrigger");
                free_dialog = cc.find("dialog_node", _this10.node.parent);
                free_dialog.active = true;
                dialog = cc.find("extra_node", free_dialog);
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
                times.getComponent(cc.Label).string = _this10._gameInfo.freeResult.freeInfo.freeCnt;
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
                _context16.next = 24;
                return cc.vv.gameData.awaitTime(2);

               case 24:
                cc.tween(dialog).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  free_dialog.active = false;
                  dialog.active = false;
                  success();
                }).start();

               case 25:
               case "end":
                return _context16.stop();
              }
            }, _callee13);
          }));
          return function(_x4) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this11 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success) {
            var free_dialog, dialog, freetanchuang, congratulation, total_won_EN, yifenkuang, in_free_games_EN, times, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee15$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect("fgend");
                free_dialog = cc.find("dialog_node", _this11.node.parent);
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
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                total_won_EN = cc.find("you_won_EN", dialog);
                total_won_EN.scale = 0;
                cc.tween(total_won_EN).delay(.2).to(.5, {
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
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.GetGameTotalFreeWin());
                in_free_games_EN = cc.find("free_games_EN", dialog);
                in_free_games_EN.scale = 0;
                cc.tween(in_free_games_EN).delay(.4).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                times = cc.find("times", in_free_games_EN);
                times.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                btn_collect = cc.find("btn_collect", dialog);
                btn_collect.scale = 0;
                cc.tween(btn_collect).delay(.5).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context18.next = 30;
                return cc.vv.gameData.awaitTime(1);

               case 30:
                func = function() {
                  var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                    return regeneratorRuntime.wrap(function _callee14$(_context17) {
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
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context17.stop();
                      }
                    }, _callee14);
                  }));
                  return function func() {
                    return _ref8.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.off("click");
                btn_collect.on("click", function() {
                  btn_collect.stopAllActions();
                  func();
                });

               case 34:
               case "end":
                return _context18.stop();
              }
            }, _callee15);
          }));
          return function(_x5) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      popJackpotDialog: function popJackpotDialog() {
        var _this12 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(success) {
            var animations, free_dialog, dialog, fireworks, freetanchuang, title, jackpot, yifenkuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee17$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("jpPop");
                animations = [ "Mini", "Minor", "Major", "Grand" ];
                free_dialog = cc.find("dialog_node", _this12.node.parent);
                free_dialog.active = true;
                dialog = cc.find("jackpot_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                fireworks = cc.find("fireworks", dialog);
                fireworks.active = false;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                freetanchuang.getComponent("ImgSwitchCmp").setIndex(_this12._gameInfo.jackpot.id - 1);
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).call(function() {
                  fireworks.active = true;
                }).start();
                title = cc.find("title", dialog);
                title.scale = 0;
                title.getComponent(sp.Skeleton).setAnimation(0, "JPTC_" + animations[_this12._gameInfo.jackpot.id - 1], true);
                cc.tween(title).delay(.1).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                jackpot = cc.find("jackpot", dialog);
                jackpot.scale = 0;
                cc.tween(jackpot).delay(.2).to(.5, {
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
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(_this12._gameInfo.jackpot.value);
                btn_collect = cc.find("btn_collect", dialog);
                btn_collect.scale = 0;
                cc.tween(btn_collect).delay(.4).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context20.next = 29;
                return cc.vv.gameData.awaitTime(1);

               case 29:
                func = function() {
                  var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                    return regeneratorRuntime.wrap(function _callee16$(_context19) {
                      while (1) switch (_context19.prev = _context19.next) {
                       case 0:
                        btn_collect.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          _this12._jackpotNums[_this12._gameInfo.jackpot.id - 1] = 0;
                          var pool = cc.find("spr_bg_free/prize_pool/prizePool_" + _this12._gameInfo.jackpot.id, _this12.node.parent);
                          for (var j = 0; j < 6; j++) {
                            var node = cc.find("collect/node_" + (j + 1), pool);
                            node && (cc.find("ball", node).active = false);
                          }
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context19.stop();
                      }
                    }, _callee16);
                  }));
                  return function func() {
                    return _ref10.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.off("click");
                btn_collect.on("click", function() {
                  btn_collect.stopAllActions();
                  func();
                });

               case 33:
               case "end":
                return _context20.stop();
              }
            }, _callee17);
          }));
          return function(_x6) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      updateCollectProgress: function updateCollectProgress(bonusTrail) {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
          var i, item, finish, spine;
          return regeneratorRuntime.wrap(function _callee18$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
             case 0:
              for (i = 0; i < 10; i++) {
                item = cc.find("collect_node/item_" + (i + 1), _this13.node);
                finish = cc.find("finish", item);
                spine = cc.find("spine", item);
                finish.active = i < bonusTrail.count;
                if (9 !== i) spine.active = false; else {
                  spine.active = true;
                  spine.getComponent(sp.Skeleton).setAnimation(0, "JinDuTiao_ChengBao_Loop", true);
                }
              }

             case 1:
             case "end":
              return _context21.stop();
            }
          }, _callee18);
        }))();
      },
      clearCollectProgress: function clearCollectProgress() {
        for (var i = 0; i < 10; i++) {
          var item = cc.find("collect_node/item_" + (i + 1), this.node);
          var finish = cc.find("finish", item);
          var spine = cc.find("spine", item);
          finish.active = false;
          if (9 !== i) spine.active = false; else {
            spine.active = true;
            spine.getComponent(sp.Skeleton).setAnimation(0, "JinDuTiao_ChengBao_Loop", true);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Hera_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18d0fzUv0NEQbQl4wggrRGF", "Hera_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _hasChange: false
      },
      StartMove: function StartMove() {
        this._hasChange = false;
        this._super();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        var icon = cc.find("icon", this._showNode);
        icon && (icon.active = false);
      },
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._super(idx);
      },
      GetSymbolIdx: function GetSymbolIdx() {
        return this._symbolIdx;
      },
      playBallAnimation: function playBallAnimation() {
        this._hasChange = true;
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if (cfg.symbol[id].ball_ani && "" !== cfg.symbol[id].ball_ani.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              Global.SlotsSoundMgr.playEffect("JPtrans");
              cc.tween(topShowNode).to(.1, {
                scale: 1.1
              }).to(.1, {
                scale: 1
              }).start();
              nodeSp.setAnimation(0, cfg.symbol[id].ball_ani.name, true);
              var effect = cc.find("effect", topShowNode);
              effect.getComponent(sp.Skeleton).setAnimation(0, cfg.symbol[id].effect_ani.name, false);
            }
          }
        }
      },
      playBallClearAnimation: function playBallClearAnimation() {
        this.ShowNormal();
        var icon = cc.find("icon", this._showNode);
        icon && (icon.active = true);
      },
      getHasChangeBall: function getHasChangeBall() {
        return this._hasChange;
      },
      playClearAnimation: function playClearAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, "clean", false);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Hera_Cfg", "Hera_Logic", "Hera_Reel", "Hera_Slots", "Hera_Symbol" ]);