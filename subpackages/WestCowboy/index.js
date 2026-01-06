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
  WestCowboy_BonusGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34606SzNSZGLoJJMJA2e6pl", "WestCowboy_BonusGameMgr");
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
        _bonusId: 3,
        _canTouchAddSpin: false
      },
      Init: function Init() {
        this._bonusId = 3;
        this._mainNode = cc.find("mainnode", this.node);
        this._mainNode.active = false;
        this._topSlotsScript = cc.find("slots_top", this._mainNode).addComponent("WestCowboy_BonusSlots");
        this._bottomSlotsScript = cc.find("slots", this._mainNode).addComponent("WestCowboy_BonusSlots");
        this._topType = 1;
        this._bottomType = 2;
        this._topSlotsScript.Init(this._topType);
        this._bottomSlotsScript.Init(this._bottomType);
        this._slots_top = cc.find("slots_top", this._mainNode);
        this._slots_bottom = cc.find("slots", this._mainNode);
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName("symbol");
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
      },
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      },
      showBonusGame: function showBonusGame(bonusdata) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playBgm("music_ChilliFiesta_respinBgSound");
                      cc.vv.gameData.setIsBonusGame(true);
                      _this._subGameData = bonusdata;
                      if (!(1 === _this._subGameData.state)) {
                        _context.next = 13;
                        break;
                      }
                      _context.next = 7;
                      return _this.showBonusGameUI();

                     case 7:
                      _context.next = 9;
                      return _this.addSpins();

                     case 9:
                      _this._curCnt = _this._subGameData.totalSpinCnt - _this._subGameData.spinCnt;
                      _this._totalCnt = _this._subGameData.totalSpinCnt;
                      _context.next = 16;
                      break;

                     case 13:
                      if (!(0 === _this._subGameData.state)) {
                        _context.next = 16;
                        break;
                      }
                      _context.next = 16;
                      return _this.showBonusGameUI();

                     case 16:
                      _this.reqSpine();
                      _this._callBack = success;

                     case 18:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function(_x, _x2) {
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
      endBonusGame: function endBonusGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var result_node, winCoin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              AppLog.log("###bonus\u6e38\u620f\u7ed3\u675f");
              result_node = cc.find("result_node", _this2._mainNode);
              result_node.active = true;
              cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinOver", true);
              winCoin = cc.find("winCoin", result_node);
              winCoin.getComponent(cc.Label).string = "0";
              _context3.next = 8;
              return _this2.collectSlotsCoin();

             case 8:
              _context3.next = 10;
              return cc.vv.gameData.awaitTime(2);

             case 10:
              _context3.next = 12;
              return _this2.popResultDialog();

             case 12:
              if (_this2._callBack) {
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.gameData.setIsBonusGame(false);
                _this2._winCoin = _this2._subGameData.winCoin;
                _this2._callBack();
                _this2._callBack = null;
                _this2._subGameData = null;
              }

             case 13:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      popResultDialog: function popResultDialog() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var free_dialog, dialog, bg, coin, btn_collect, func;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_freespinOver", true);
                      free_dialog = cc.find("free_dialog", _this3.node.parent);
                      free_dialog.active = true;
                      dialog = cc.find("bonus_result_node", free_dialog);
                      dialog.active = true;
                      bg = cc.find("bg", dialog);
                      bg.scale = 0;
                      cc.tween(bg).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      coin = cc.find("coin", bg);
                      coin.getComponent(cc.Label).string = Global.formatMoney(_this3._subGameData.winCoin);
                      btn_collect = cc.find("btn_collect", bg);
                      btn_collect.off("click");
                      func = function() {
                        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) switch (_context4.prev = _context4.next) {
                             case 0:
                              btn_collect.off("click");
                              cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_collect", true);
                              cc.tween(bg).to(.5, {
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
                              return _context4.stop();
                            }
                          }, _callee4);
                        }));
                        return function func() {
                          return _ref3.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_collect, func);
                      btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) switch (_context5.prev = _context5.next) {
                           case 0:
                            btn_collect.stopAllActions();
                            _context5.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context5.stop();
                          }
                        }, _callee5);
                      })));

                     case 15:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x3) {
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
      showBonusGameUI: function showBonusGameUI() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
                  var result_node;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _this4._mainNode.active = true;
                      result_node = cc.find("result_node", _this4._mainNode);
                      result_node.active = false;
                      _this4._totalCnt = _this4._subGameData.totalSpinCnt;
                      _this4._curCnt = _this4._subGameData.totalSpinCnt - _this4._subGameData.spinCnt;
                      cc.find("spin/curTimes", _this4._mainNode).getComponent(cc.Label).string = _this4._curCnt;
                      cc.find("spin/allTimes", _this4._mainNode).getComponent(cc.Label).string = _this4._totalCnt;
                      _context8.next = 9;
                      return _this4.showBonusSlotsUI();

                     case 9:
                      success();

                     case 10:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x4, _x5) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      showBonusSlotsUI: function showBonusSlotsUI() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success, failed) {
                  var bonusIdxs, bonusItems, i, symbol, data, _i3, _symbol, _data;
                  return regeneratorRuntime.wrap(function _callee11$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      _this5._bottomSlotsScript.initAllSymbol();
                      _this5._topSlotsScript.initAllSymbol();
                      if (!(0 === _this5._curCnt)) {
                        _context13.next = 6;
                        break;
                      }
                      return _context13.delegateYield(regeneratorRuntime.mark(function _callee10() {
                        var bonusIdxs, bonusItems, i, symbol, data, coin, _loop, _i, _loop2, _i2;
                        return regeneratorRuntime.wrap(function _callee10$(_context12) {
                          while (1) switch (_context12.prev = _context12.next) {
                           case 0:
                            cc.find("repeater_feature_prize/coin", _this5._mainNode).getComponent(cc.Label).string = "";
                            bonusIdxs = _this5._subGameData.slots[0].bonusIdxs;
                            bonusItems = _this5._subGameData.slots[0].bonusItems;
                            for (i = 0; i < bonusIdxs.length; i++) {
                              symbol = _this5._bottomSlotsScript.GetSymbolByIdx(bonusIdxs[i]);
                              data = bonusItems[i];
                              symbol.ShowById(cc.vv.gameData.getGameCfg().bonusId, data);
                              symbol.playBonusStopAnimation();
                            }
                            _context12.next = 6;
                            return cc.vv.gameData.awaitTime(2);

                           case 6:
                            coin = 0;
                            _loop = regeneratorRuntime.mark(function _loop(_i) {
                              var symbol, data, startPos, endPos, particle;
                              return regeneratorRuntime.wrap(function _loop$(_context10) {
                                while (1) switch (_context10.prev = _context10.next) {
                                 case 0:
                                  symbol = _this5._bottomSlotsScript.GetSymbolByIdx(bonusIdxs[_i]);
                                  data = bonusItems[_i];
                                  data.coin ? coin += data.coin : data.jackpot && (coin += data.jackpot.value);
                                  startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                                  startPos = _this5.node.parent.convertToNodeSpaceAR(startPos);
                                  endPos = cc.find("repeater_feature_prize/coin", _this5._mainNode).convertToWorldSpaceAR(cc.v2(0, 0));
                                  endPos = _this5.node.parent.convertToNodeSpaceAR(endPos);
                                  cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinBonusCollect", true);
                                  particle = cc.instantiate(cc.find("fly_particle", _this5.node.parent));
                                  particle.parent = _this5.node.parent;
                                  particle.position = startPos;
                                  particle.active = true;
                                  cc.tween(particle).to(.5, {
                                    position: endPos
                                  }).call(function() {
                                    cc.find("repeater_feature_prize/coin", _this5._mainNode).getComponent(cc.Label).string = Global.formatMoney(coin);
                                    cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_bonusCollectBuling", true);
                                    var effect = cc.instantiate(cc.find("repeater_feature_prize_particle", _this5.node.parent));
                                    effect.parent = _this5.node.parent;
                                    effect.position = endPos;
                                    effect.active = true;
                                    cc.tween(effect).delay(.5).removeSelf().start();
                                    particle.removeFromParent();
                                  }).start();
                                  _context10.next = 15;
                                  return cc.vv.gameData.awaitTime(.5);

                                 case 15:
                                 case "end":
                                  return _context10.stop();
                                }
                              }, _loop);
                            });
                            _i = 0;

                           case 9:
                            if (!(_i < bonusIdxs.length)) {
                              _context12.next = 14;
                              break;
                            }
                            return _context12.delegateYield(_loop(_i), "t0", 11);

                           case 11:
                            _i++;
                            _context12.next = 9;
                            break;

                           case 14:
                            _loop2 = regeneratorRuntime.mark(function _loop2(_i2) {
                              var symbol, data, startPos, endSymbol, endPos, sprite;
                              return regeneratorRuntime.wrap(function _loop2$(_context11) {
                                while (1) switch (_context11.prev = _context11.next) {
                                 case 0:
                                  symbol = _this5._bottomSlotsScript.GetSymbolByIdx(bonusIdxs[_i2]);
                                  data = bonusItems[_i2];
                                  startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                                  startPos = _this5.node.parent.convertToNodeSpaceAR(startPos);
                                  endSymbol = _this5._topSlotsScript.GetSymbolByIdx(bonusIdxs[_i2]);
                                  endPos = endSymbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                                  endPos = _this5.node.parent.convertToNodeSpaceAR(endPos);
                                  cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinBonusUpFly", true);
                                  sprite = cc.instantiate(cc.find("lajiao_sprite", _this5.node.parent));
                                  sprite.parent = _this5.node.parent;
                                  sprite.position = startPos;
                                  sprite.active = true;
                                  cc.tween(sprite).parallel(cc.tween().to(.25, {
                                    scale: 2
                                  }).to(.25, {
                                    scale: 1
                                  }), cc.tween().to(.5, {
                                    position: endPos
                                  })).call(function() {
                                    cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinBonusUpBuling", true);
                                    var effect = cc.instantiate(cc.find("effect_ljlr_baopo", _this5.node.parent));
                                    effect.parent = _this5.node.parent;
                                    effect.position = endPos;
                                    effect.active = true;
                                    cc.tween(effect).delay(.5).removeSelf().start();
                                    endSymbol.ShowById(cc.vv.gameData.getGameCfg().bonusId, data);
                                    endSymbol.playBonusGenerateAnimation();
                                  }).removeSelf().start();
                                  _context11.next = 15;
                                  return cc.vv.gameData.awaitTime(.5);

                                 case 15:
                                 case "end":
                                  return _context11.stop();
                                }
                              }, _loop2);
                            });
                            _i2 = 0;

                           case 16:
                            if (!(_i2 < bonusIdxs.length)) {
                              _context12.next = 21;
                              break;
                            }
                            return _context12.delegateYield(_loop2(_i2), "t1", 18);

                           case 18:
                            _i2++;
                            _context12.next = 16;
                            break;

                           case 21:
                            success();

                           case 22:
                           case "end":
                            return _context12.stop();
                          }
                        }, _callee10);
                      })(), "t0", 4);

                     case 4:
                      _context13.next = 14;
                      break;

                     case 6:
                      bonusIdxs = _this5._subGameData.slots[0].bonusIdxs;
                      bonusItems = _this5._subGameData.slots[0].bonusItems;
                      for (i = 0; i < 15; i++) {
                        symbol = _this5._bottomSlotsScript.GetSymbolByIdx(i + 1);
                        if (-1 !== bonusIdxs.indexOf(i + 1)) {
                          data = bonusItems[bonusIdxs.indexOf(i + 1)];
                          symbol.ShowById(cc.vv.gameData.getGameCfg().bonusId, data);
                          symbol.playBonusStopAnimation();
                        } else symbol.ShowRandomSymbol();
                      }
                      bonusIdxs = _this5._subGameData.slots[1].bonusIdxs;
                      bonusItems = _this5._subGameData.slots[1].bonusItems;
                      for (_i3 = 0; _i3 < 15; _i3++) {
                        _symbol = _this5._topSlotsScript.GetSymbolByIdx(_i3 + 1);
                        if (-1 !== bonusIdxs.indexOf(_i3 + 1)) {
                          _data = bonusItems[bonusIdxs.indexOf(_i3 + 1)];
                          _symbol.ShowById(cc.vv.gameData.getGameCfg().bonusId, _data);
                          _symbol.playBonusStopAnimation();
                        } else _symbol.ShowRandomSymbol();
                      }
                      cc.find("repeater_feature_prize/coin", _this5._mainNode).getComponent(cc.Label).string = Global.formatMoney(_this5._subGameData.baseCoin);
                      success();

                     case 14:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee11);
                }));
                return function(_x6, _x7) {
                  return _ref6.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context14.stop();
            }
          }, _callee12);
        }))();
      },
      collectSlotsCoin: function collectSlotsCoin() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
             case 0:
              return _context18.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success) {
                  var coin, _loop3, i;
                  return regeneratorRuntime.wrap(function _callee13$(_context17) {
                    while (1) switch (_context17.prev = _context17.next) {
                     case 0:
                      coin = 0;
                      _loop3 = regeneratorRuntime.mark(function _loop3(i) {
                        var slot, script, endPos, _loop4, j, _ret;
                        return regeneratorRuntime.wrap(function _loop3$(_context16) {
                          while (1) switch (_context16.prev = _context16.next) {
                           case 0:
                            slot = _this6._subGameData.slots[i];
                            script = 0 === i ? _this6._topSlotsScript : _this6._bottomSlotsScript;
                            endPos = cc.find("result_node/winCoin", _this6._mainNode).convertToWorldSpaceAR(cc.v2(0, 0));
                            endPos = _this6.node.parent.convertToNodeSpaceAR(endPos);
                            _loop4 = regeneratorRuntime.mark(function _loop4(j) {
                              var symbol, startPos, particle;
                              return regeneratorRuntime.wrap(function _loop4$(_context15) {
                                while (1) switch (_context15.prev = _context15.next) {
                                 case 0:
                                  symbol = script.GetSymbolByIdx(j + 1);
                                  if (!(symbol.GetShowId() !== cc.vv.gameData.getGameCfg().bonusId)) {
                                    _context15.next = 3;
                                    break;
                                  }
                                  return _context15.abrupt("return", "continue");

                                 case 3:
                                  startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                                  startPos = _this6.node.parent.convertToNodeSpaceAR(startPos);
                                  cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinBonusCollect", true);
                                  particle = cc.instantiate(cc.find("fly_particle", _this6.node.parent));
                                  particle.parent = _this6.node.parent;
                                  particle.position = startPos;
                                  particle.active = true;
                                  cc.tween(particle).to(.5, {
                                    position: endPos
                                  }).call(function() {
                                    symbol.GetData().baseCoin ? coin += symbol.GetData().baseCoin : symbol.GetData().jackpot ? coin += symbol.GetData().jackpot.value : coin += symbol.GetData().coin;
                                    cc.find("result_node/winCoin", _this6._mainNode).getComponent(cc.Label).string = Global.formatMoney(coin);
                                    cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_bonusCollectBuling", true);
                                    var effect = cc.instantiate(cc.find("repeater_feature_prize_particle", _this6.node.parent));
                                    effect.parent = _this6.node.parent;
                                    effect.position = endPos;
                                    effect.active = true;
                                    cc.tween(effect).delay(.5).removeSelf().start();
                                    particle.removeFromParent();
                                  }).start();
                                  _context15.next = 13;
                                  return cc.vv.gameData.awaitTime(.5);

                                 case 13:
                                 case "end":
                                  return _context15.stop();
                                }
                              }, _loop4);
                            });
                            j = 0;

                           case 6:
                            if (!(j < 15)) {
                              _context16.next = 14;
                              break;
                            }
                            return _context16.delegateYield(_loop4(j), "t0", 8);

                           case 8:
                            _ret = _context16.t0;
                            if (!("continue" === _ret)) {
                              _context16.next = 11;
                              break;
                            }
                            return _context16.abrupt("continue", 11);

                           case 11:
                            j++;
                            _context16.next = 6;
                            break;

                           case 14:
                           case "end":
                            return _context16.stop();
                          }
                        }, _loop3);
                      });
                      i = 0;

                     case 3:
                      if (!(i < _this6._subGameData.slots.length)) {
                        _context17.next = 8;
                        break;
                      }
                      return _context17.delegateYield(_loop3(i), "t0", 5);

                     case 5:
                      i++;
                      _context17.next = 3;
                      break;

                     case 8:
                      success();

                     case 9:
                     case "end":
                      return _context17.stop();
                    }
                  }, _callee13);
                }));
                return function(_x8) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context18.stop();
            }
          }, _callee14);
        }))();
      },
      lockJackpot: function lockJackpot(jackpotvalus) {
        var prizepool = cc.find("LMSlots_PrizePool2", this._mainNode).getComponent("LMSlots_PrizePool_Base");
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
        }, {
          prizeType: 4,
          pauseNum: jackpotvalus[4]
        } ]);
      },
      startSpin: function startSpin() {},
      showSpinResult: function showSpinResult() {},
      getSubGameData: function getSubGameData() {
        return this._subGameData;
      },
      spinEnd: function spinEnd() {},
      reqSpine: function reqSpine() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var reqdata, result;
          return regeneratorRuntime.wrap(function _callee15$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
             case 0:
              cc.log(cc.js.formatStr("startMove:%s, %s", _this7._curCnt, _this7._totalCnt));
              _this7._curCnt += 1;
              cc.find("spin/curTimes", _this7._mainNode).getComponent(cc.Label).string = _this7._curCnt;
              cc.find("spin/allTimes", _this7._mainNode).getComponent(cc.Label).string = _this7._totalCnt;
              _this7._topSlotsScript.StartMove(_this7._subGameData.slots[0].bonusIdxs);
              _this7._bottomSlotsScript.StartMove(_this7._subGameData.slots[1].bonusIdxs);
              _context19.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              reqdata = {
                rtype: 3
              };
              _context19.next = 11;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 11:
              result = _context19.sent;
              if (200 === result.code && !result.spcode) {
                _this7._subGameData = result.data.bonusGame;
                _this7._bottomSlotsScript.setSpinResult(_this7._subGameData.slots[1].bonusIdxs, _this7._subGameData.slots[1].bonusItems);
                _this7._topSlotsScript.setSpinResult(_this7._subGameData.slots[0].bonusIdxs, _this7._subGameData.slots[0].bonusItems);
              }

             case 13:
             case "end":
              return _context19.stop();
            }
          }, _callee15);
        }))();
      },
      StopMove: function StopMove() {
        this._topSlotsScript.StopMove();
        this._bottomSlotsScript.StopMove();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
          return regeneratorRuntime.wrap(function _callee16$(_context20) {
            while (1) switch (_context20.prev = _context20.next) {
             case 0:
              cc.log("OnSpinEnd");
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              _context20.next = 4;
              return _this8.triggerGetGoldLajiao();

             case 4:
              if (!(1 === _this8._subGameData.state)) {
                _context20.next = 12;
                break;
              }
              _context20.next = 7;
              return _this8.addSpins();

             case 7:
              _this8._curCnt = _this8._subGameData.totalSpinCnt - _this8._subGameData.spinCnt;
              _this8._totalCnt = _this8._subGameData.totalSpinCnt;
              _this8.reqSpine();
              _context20.next = 19;
              break;

             case 12:
              if (!(_this8._subGameData.spinCnt > 0)) {
                _context20.next = 18;
                break;
              }
              _context20.next = 15;
              return cc.vv.gameData.awaitTime(1);

             case 15:
              _this8.reqSpine();
              _context20.next = 19;
              break;

             case 18:
              _this8.endBonusGame();

             case 19:
             case "end":
              return _context20.stop();
            }
          }, _callee16);
        }))();
      },
      addSpins: function addSpins() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
          return regeneratorRuntime.wrap(function _callee20$(_context24) {
            while (1) switch (_context24.prev = _context24.next) {
             case 0:
              return _context24.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(success) {
                  var add_spin_node, mainnode, _loop5, i;
                  return regeneratorRuntime.wrap(function _callee19$(_context23) {
                    while (1) switch (_context23.prev = _context23.next) {
                     case 0:
                      cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinChoose", true);
                      add_spin_node = cc.find("add_spin_node", _this9._mainNode);
                      add_spin_node.active = true;
                      mainnode = cc.find("mainnode", add_spin_node);
                      mainnode.scale = 0;
                      mainnode.active = true;
                      cc.tween(mainnode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).call(function() {
                        _this9._canTouchAddSpin = true;
                        _this9.playAnimationOnce(cc.find("kuang_animation", mainnode), "saoguang5");
                        _this9.playAnimationOnce(cc.find("headtext2/idle", mainnode), "saoguang6");
                        for (var i = 1; i < 4; i++) _this9.playAnimationOnce(cc.find("number" + i + "/idle", mainnode), "saoguang3");
                      }).start();
                      _loop5 = function _loop5(i) {
                        var number = cc.find("number" + i, mainnode);
                        cc.find("num", number).active = false;
                        cc.find("wenhao", number).active = true;
                        cc.find("spin", number).active = false;
                        cc.find("disable", number).active = false;
                        number.off(cc.Node.EventType.TOUCH_END);
                        number.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                          var reqdata, result, selectNumber, atlas, j, unselectNumber, _atlas2;
                          return regeneratorRuntime.wrap(function _callee18$(_context22) {
                            while (1) switch (_context22.prev = _context22.next) {
                             case 0:
                              if (_this9._canTouchAddSpin) {
                                _context22.next = 2;
                                break;
                              }
                              return _context22.abrupt("return");

                             case 2:
                              mainnode.stopAllActions();
                              _this9._canTouchAddSpin = false;
                              cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinChooseClick", true);
                              reqdata = {
                                rtype: 2,
                                choiceId: i
                              };
                              _context22.next = 8;
                              return cc.vv.gameData.reqSubGame(reqdata);

                             case 8:
                              result = _context22.sent;
                              if (!(200 === result.code && 2 === result.data.rtype)) {
                                _context22.next = 25;
                                break;
                              }
                              _this9._subGameData = result.data.bonusGame;
                              selectNumber = cc.find("number" + result.data.choiceId, mainnode);
                              atlas = cc.vv.gameData.GetAtlasByName("ChilliFiesta2");
                              cc.find("num", selectNumber).active = true;
                              cc.find("num", selectNumber).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("ChilliFiesta-Common-ChiliFiesta_respin_" + result.data.extraSpins[result.data.choiceId - 1]);
                              cc.find("spin", selectNumber).active = true;
                              cc.find("spin", selectNumber).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(result.data.extraSpins[result.data.choiceId - 1] > 1 ? "ChilliFiesta-Common-ChiliFiesta_respin_spins" : "ChilliFiesta-Common-ChiliFiesta_respin_spin");
                              cc.find("wenhao", selectNumber).active = false;
                              _this9.playAnimationOnce(cc.find("select", selectNumber), "saoguang7");
                              _context22.next = 21;
                              return cc.vv.gameData.awaitTime(.5);

                             case 21:
                              for (j = 1; j < 4; j++) if (j !== result.data.choiceId) {
                                unselectNumber = cc.find("number" + j, mainnode);
                                cc.find("disable", unselectNumber).active = false;
                                _atlas2 = cc.vv.gameData.GetAtlasByName("ChilliFiesta2");
                                cc.find("num", unselectNumber).active = true;
                                cc.find("num", unselectNumber).getComponent(cc.Sprite).spriteFrame = _atlas2.getSpriteFrame("ChilliFiesta-Common-ChiliFiesta_respin_" + result.data.extraSpins[j - 1] + result.data.extraSpins[j - 1]);
                                cc.find("spin", unselectNumber).active = true;
                                cc.find("spin", unselectNumber).getComponent(cc.Sprite).spriteFrame = _atlas2.getSpriteFrame(result.data.extraSpins[j - 1] > 1 ? "ChilliFiesta-Common-ChiliFiesta_respin_spinsUn2" : "ChilliFiesta-Common-ChiliFiesta_respin_spinUn2");
                                cc.find("wenhao", unselectNumber).active = false;
                                _this9.playAnimationOnce(cc.find("select", unselectNumber), "saoguang7");
                              }
                              _context22.next = 24;
                              return cc.vv.gameData.awaitTime(1);

                             case 24:
                              cc.tween(mainnode).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                add_spin_node.active = false;
                                success();
                              }).start();

                             case 25:
                             case "end":
                              return _context22.stop();
                            }
                          }, _callee18);
                        })));
                      };
                      for (i = 1; i < 4; i++) _loop5(i);
                      _context23.next = 11;
                      return cc.vv.gameData.awaitTime(.5);

                     case 11:
                      cc.vv.gameData.isNeedAutoPlay() && cc.tween(mainnode).delay(cc.vv.gameData.getManualAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                        var reqdata, result, selectNumber, atlas, j, unselectNumber, _atlas;
                        return regeneratorRuntime.wrap(function _callee17$(_context21) {
                          while (1) switch (_context21.prev = _context21.next) {
                           case 0:
                            if (_this9._canTouchAddSpin) {
                              _context21.next = 2;
                              break;
                            }
                            return _context21.abrupt("return");

                           case 2:
                            _this9._canTouchAddSpin = false;
                            cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinChooseClick", true);
                            reqdata = {
                              rtype: 2,
                              choiceId: 1
                            };
                            _context21.next = 7;
                            return cc.vv.gameData.reqSubGame(reqdata);

                           case 7:
                            result = _context21.sent;
                            if (!(200 === result.code && 2 === result.data.rtype)) {
                              _context21.next = 24;
                              break;
                            }
                            _this9._subGameData = result.data.bonusGame;
                            selectNumber = cc.find("number" + result.data.choiceId, mainnode);
                            atlas = cc.vv.gameData.GetAtlasByName("ChilliFiesta2");
                            cc.find("num", selectNumber).active = true;
                            cc.find("num", selectNumber).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("ChilliFiesta-Common-ChiliFiesta_respin_" + result.data.extraSpins[result.data.choiceId - 1]);
                            cc.find("spin", selectNumber).active = true;
                            cc.find("spin", selectNumber).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(result.data.extraSpins[result.data.choiceId - 1] > 1 ? "ChilliFiesta-Common-ChiliFiesta_respin_spins" : "ChilliFiesta-Common-ChiliFiesta_respin_spin");
                            cc.find("wenhao", selectNumber).active = false;
                            _this9.playAnimationOnce(cc.find("select", selectNumber), "saoguang7");
                            _context21.next = 20;
                            return cc.vv.gameData.awaitTime(.5);

                           case 20:
                            for (j = 1; j < 4; j++) if (j !== result.data.choiceId) {
                              unselectNumber = cc.find("number" + j, mainnode);
                              cc.find("disable", unselectNumber).active = false;
                              _atlas = cc.vv.gameData.GetAtlasByName("ChilliFiesta2");
                              cc.find("num", unselectNumber).active = true;
                              cc.find("num", unselectNumber).getComponent(cc.Sprite).spriteFrame = _atlas.getSpriteFrame("ChilliFiesta-Common-ChiliFiesta_respin_" + result.data.extraSpins[j - 1] + result.data.extraSpins[j - 1]);
                              cc.find("spin", unselectNumber).active = true;
                              cc.find("spin", unselectNumber).getComponent(cc.Sprite).spriteFrame = _atlas.getSpriteFrame(result.data.extraSpins[j - 1] > 1 ? "ChilliFiesta-Common-ChiliFiesta_respin_spinsUn2" : "ChilliFiesta-Common-ChiliFiesta_respin_spinUn2");
                              cc.find("wenhao", unselectNumber).active = false;
                              _this9.playAnimationOnce(cc.find("select", unselectNumber), "saoguang7");
                            }
                            _context21.next = 23;
                            return cc.vv.gameData.awaitTime(1);

                           case 23:
                            cc.tween(mainnode).to(.5, {
                              scale: 0
                            }, {
                              easing: "backIn"
                            }).call(function() {
                              add_spin_node.active = false;
                              success();
                            }).start();

                           case 24:
                           case "end":
                            return _context21.stop();
                          }
                        }, _callee17);
                      }))).start();

                     case 12:
                     case "end":
                      return _context23.stop();
                    }
                  }, _callee19);
                }));
                return function(_x9) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context24.stop();
            }
          }, _callee20);
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
      triggerGetGoldLajiao: function triggerGetGoldLajiao() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee24() {
          return regeneratorRuntime.wrap(function _callee24$(_context28) {
            while (1) switch (_context28.prev = _context28.next) {
             case 0:
              return _context28.abrupt("return", new Promise(function() {
                var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee23(success) {
                  var topSlot, _iterator, _step, bonusItem, bottomSlot, _iterator2, _step2, _bonusItem;
                  return regeneratorRuntime.wrap(function _callee23$(_context27) {
                    while (1) switch (_context27.prev = _context27.next) {
                     case 0:
                      topSlot = _this10._subGameData.slots[0];
                      _iterator = _createForOfIteratorHelper(topSlot.bonusItems);
                      _context27.prev = 2;
                      _iterator.s();

                     case 4:
                      if ((_step = _iterator.n()).done) {
                        _context27.next = 10;
                        break;
                      }
                      bonusItem = _step.value;
                      if (!bonusItem.baseCoin) {
                        _context27.next = 8;
                        break;
                      }
                      return _context27.delegateYield(regeneratorRuntime.mark(function _callee21() {
                        var idx, symbol, trigger, startPos, endPos, particle;
                        return regeneratorRuntime.wrap(function _callee21$(_context25) {
                          while (1) switch (_context25.prev = _context25.next) {
                           case 0:
                            idx = topSlot.bonusIdxs[topSlot.bonusItems.indexOf(bonusItem)];
                            symbol = _this10._topSlotsScript.GetSymbolByIdx(idx);
                            trigger = cc.find("repeater_feature_prize/trigger", _this10._mainNode);
                            trigger.active = true;
                            trigger.getComponent(cc.Animation).play("freespinsj");
                            trigger.getComponent(cc.Animation).on("stop", function() {
                              trigger.getComponent(cc.Animation).off("stop");
                              trigger.active = false;
                            });
                            startPos = cc.find("repeater_feature_prize/coin", _this10._mainNode).convertToWorldSpaceAR(cc.v2(0, 0));
                            startPos = _this10.node.parent.convertToNodeSpaceAR(startPos);
                            endPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                            endPos = _this10.node.parent.convertToNodeSpaceAR(endPos);
                            cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinBonusCollect", true);
                            particle = cc.instantiate(cc.find("fly_particle", _this10.node.parent));
                            particle.parent = _this10.node.parent;
                            particle.position = startPos;
                            particle.active = true;
                            cc.tween(particle).to(.5, {
                              position: endPos
                            }).call(function() {
                              symbol.playBonusCoinAnimation();
                              particle.removeFromParent();
                            }).start();
                            _context25.next = 18;
                            return cc.vv.gameData.awaitTime(.5);

                           case 18:
                           case "end":
                            return _context25.stop();
                          }
                        }, _callee21);
                      })(), "t0", 8);

                     case 8:
                      _context27.next = 4;
                      break;

                     case 10:
                      _context27.next = 15;
                      break;

                     case 12:
                      _context27.prev = 12;
                      _context27.t1 = _context27["catch"](2);
                      _iterator.e(_context27.t1);

                     case 15:
                      _context27.prev = 15;
                      _iterator.f();
                      return _context27.finish(15);

                     case 18:
                      bottomSlot = _this10._subGameData.slots[0];
                      _iterator2 = _createForOfIteratorHelper(bottomSlot.bonusItems);
                      _context27.prev = 20;
                      _iterator2.s();

                     case 22:
                      if ((_step2 = _iterator2.n()).done) {
                        _context27.next = 28;
                        break;
                      }
                      _bonusItem = _step2.value;
                      if (!_bonusItem.baseCoin) {
                        _context27.next = 26;
                        break;
                      }
                      return _context27.delegateYield(regeneratorRuntime.mark(function _callee22() {
                        var idx, symbol, trigger, startPos, endPos, particle;
                        return regeneratorRuntime.wrap(function _callee22$(_context26) {
                          while (1) switch (_context26.prev = _context26.next) {
                           case 0:
                            idx = bottomSlot.bonusIdxs[bottomSlot.bonusItems.indexOf(_bonusItem)];
                            symbol = _this10._bottomSlotsScript.GetSymbolByIdx(idx);
                            trigger = cc.find("repeater_feature_prize/trigger", _this10._mainNode);
                            trigger.active = true;
                            trigger.getComponent(cc.Animation).play("freespinsj");
                            trigger.getComponent(cc.Animation).on("stop", function() {
                              trigger.getComponent(cc.Animation).off("stop");
                              trigger.active = false;
                            });
                            startPos = cc.find("repeater_feature_prize/coin", _this10._mainNode).convertToWorldSpaceAR(cc.v2(0, 0));
                            startPos = _this10.node.parent.convertToNodeSpaceAR(startPos);
                            endPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                            endPos = _this10.node.parent.convertToNodeSpaceAR(endPos);
                            cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinBonusCollect", true);
                            particle = cc.instantiate(cc.find("fly_particle", _this10.node.parent));
                            particle.parent = _this10.node.parent;
                            particle.position = startPos;
                            particle.active = true;
                            cc.tween(particle).to(.5, {
                              position: endPos
                            }).call(function() {
                              cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_bonus_buling", true);
                              symbol.playBonusCoinAnimation();
                              particle.removeFromParent();
                            }).start();
                            _context26.next = 18;
                            return cc.vv.gameData.awaitTime(.5);

                           case 18:
                           case "end":
                            return _context26.stop();
                          }
                        }, _callee22);
                      })(), "t2", 26);

                     case 26:
                      _context27.next = 22;
                      break;

                     case 28:
                      _context27.next = 33;
                      break;

                     case 30:
                      _context27.prev = 30;
                      _context27.t3 = _context27["catch"](20);
                      _iterator2.e(_context27.t3);

                     case 33:
                      _context27.prev = 33;
                      _iterator2.f();
                      return _context27.finish(33);

                     case 36:
                      success();

                     case 37:
                     case "end":
                      return _context27.stop();
                    }
                  }, _callee23, null, [ [ 2, 12, 15, 18 ], [ 20, 30, 33, 36 ] ]);
                }));
                return function(_x10) {
                  return _ref11.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context28.stop();
            }
          }, _callee24);
        }))();
      },
      GetLastStopSlotReel: function GetLastStopSlotReel() {
        var topEndIdx = this._topSlotsScript.GetLastStopReelIdx();
        var bottomEndIdx = this._bottomSlotsScript.GetLastStopReelIdx();
        var lastIdx = bottomEndIdx || topEndIdx;
        var stopType = bottomEndIdx ? this._bottomType : this._topType;
        return {
          slotType: stopType,
          reelIdx: lastIdx
        };
      },
      getMaxReelIdx: function getMaxReelIdx(type, col) {
        var reelList = type === this._topType ? this._topSlotsScript.getLastStopReel() : this._bottomSlotsScript.getLastStopReel();
        return reelList[col];
      }
    });
    cc._RF.pop();
  }, {} ],
  WestCowboy_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61185Xdr9dAVbIZl1os1Kgd", "WestCowboy_BonusReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
      },
      LoadSymbols: function LoadSymbols() {
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName("bonus_symbol");
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
        for (var i = 0; i < this._nCount + 1; i++) this.CreateOneSymbol();
        this.ReLayOut();
      },
      initReelType: function initReelType(type) {
        this._type = type;
        this._symbols.forEach(function(sym) {
          sym.initSymbolType(type);
        });
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var data = cc.vv.gameData.getBonusGameMgr().GetLastStopSlotReel();
        var lastIdx = data.reelIdx;
        var slotsType = data.slotType;
        if (this._type === slotsType && this._reelIdx === lastIdx) {
          cc.log(cc.js.formatStr("OnReelSpinEnd, %s, %s", slotsType, lastIdx));
          cc.vv.gameData.getBonusGameMgr().OnSpinEnd();
        }
      },
      ReadyToStop: function ReadyToStop() {
        this._bNotifyReadyStop || (this._bNotifyReadyStop = true);
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
        this.playStopAnim();
      },
      playStopAnim: function playStopAnim() {
        var symbol = this._symbols[0];
        if (symbol.GetShowId() === cc.vv.gameData.getGameCfg().bonusId) {
          var data = symbol.GetData();
          data.baseCoin ? cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_GoldBonusBuling", true) : cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_baseBonusBuling", true);
          symbol.playBonusStopAnimation();
        }
        var maxReelIdx = cc.vv.gameData.getBonusGameMgr().getMaxReelIdx(this._type, this._reelIdx % 5);
        this._reelIdx === maxReelIdx && Global.SlotsSoundMgr.playEffect("music_ChilliFiesta_reelStop");
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  WestCowboy_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d46e07dklP0L9XirqTfXL3", "WestCowboy_BonusSlots");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _slotsIndex: 1
      },
      onLoad: function onLoad() {
        this._super();
      },
      start: function start() {},
      Init: function Init(type) {
        this._slotsIndex = type;
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 15;
        this._row = 1;
        this._topAniNode = cc.find("top_ani", this.node);
        this.createReels(this._col, this._row);
      },
      createReels: function createReels(col, row) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent("WestCowboy_BonusReel");
          scp.Init(i, row, this._topAniNode);
          scp.initReelType(this._slotsIndex);
          this._reels.push(scp);
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return (reelIdx % 5 + 5 * (this._slotsIndex - 1)) * nIter;
      },
      OnSpinEnd: function OnSpinEnd() {},
      getReelNode: function getReelNode(reelidx) {
        if (reelidx >= this._reels.length) return null;
        return this._reels[reelidx].node;
      },
      StartMove: function StartMove(bonusIdxs) {
        this._bStopRightnow = null;
        this._gameInfo = null;
        var reels = [];
        var reelIdxs = [];
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
      MoveReels: function MoveReels(arry) {
        for (var i = 0; i < arry.length; i++) {
          var item = arry[i];
          item.StartMove();
        }
      },
      setMoveLastIdx: function setMoveLastIdx(reelIdxs) {
        cc.log(reelIdxs);
        var max = null;
        var reelMax = [];
        reelIdxs.forEach(function(idx) {
          (idx % 5 > max % 5 || idx % 5 === max % 5 && idx / 3 > max / 3) && (max = idx);
          reelMax[idx % 5] = reelMax[idx % 5] ? Math.max(reelMax[idx % 5], idx) : idx;
        });
        cc.log(reelMax);
        this.moveReelLastIdx = max;
        cc.log("StartMove\uff1athis.moveReelLastIdx:", this.moveReelLastIdx);
        this._reelMax = reelMax;
      },
      getLastStopReel: function getLastStopReel() {
        return this._reelMax;
      },
      setSpinResult: function setSpinResult(bonusIdxs, bonusItems) {
        var cfg = cc.vv.gameData.getGameCfg();
        var cards = [];
        for (var i = 1; i <= 15; i++) {
          var randIdx = Global.random(1, cfg.bonusRandomSymbols.length);
          var randVal = cfg.bonusRandomSymbols[randIdx - 1];
          cards.push(randVal);
        }
        this.SetSlotsResult(cards, bonusIdxs, bonusItems);
      },
      SetSlotsResult: function SetSlotsResult(cards, bonusIdxs, bonusItems) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = {};
            if (bonusIdxs && bonusIdxs.includes(i + 1)) {
              res.sid = 3;
              res.data = bonusItems[bonusIdxs.indexOf(i + 1)];
            }
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
      CanStopSlot: function CanStopSlot() {
        return null != cc.vv.gameData.getBonusGameMgr().getSubGameData();
      },
      getSlotsIndex: function getSlotsIndex() {
        return this._slotsIndex;
      },
      getReel: function getReel(col) {
        return this._reels[col];
      },
      initAllSymbol: function initAllSymbol() {
        for (var col = 0; col < this._col; col++) this._reels[col].GetSymbolByRow(0).ShowById(14);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  WestCowboy_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "edcf1/8eTJH2KZGSAtvhtj3", "WestCowboy_Cfg");
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
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "buling",
          zIndex: 100
        },
        win_ani: {
          name: "actionframe",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3"
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
      }), _symbol),
      autoModelDelay: 1,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "WestCowboy_Slots",
        Reels: "WestCowboy_Reel",
        Symbols: "WestCowboy_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 132,
        height: 117
      },
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      bonusRandomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
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
        path: "games/WestCowboy/",
        reelStopSound: "music_ChilliFiesta_reelStop",
        symbolStopSound: "music_ChilliFiesta_scatterBuling",
        antSound: "MrCashSounds_longRun",
        antSpeed: 2e3
      } ],
      helpItems: [ "games/WestCowboy/prefab/help_item_1", "games/WestCowboy/prefab/help_item_2", "games/WestCowboy/prefab/help_item_3", "games/WestCowboy/prefab/help_item_4", "games/WestCowboy/prefab/help_item_5", "games/WestCowboy/prefab/help_item_6", "games/WestCowboy/prefab/help_item_7" ],
      commEffect: {
        path: "games/WestCowboy/",
        win1: [ "music_ChilliFiesta_last_win_1", "" ],
        win2: [ "music_ChilliFiesta_last_win_2", "" ],
        win3: [ "music_ChilliFiesta_last_win_3", "" ],
        win4: [ "music_ChilliFiesta_last_win_4", "" ]
      },
      normalBgm: "music_ChilliFiesta_baseBgSound"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  WestCowboy_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "199cc/VY3JPPqByB8RCXxV1", "WestCowboy_GameData");
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
      setIsBonusGame: function setIsBonusGame(val) {
        this._isBonusGame = val;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
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
      },
      setBonusGameMgr: function setBonusGameMgr(bonusmgr) {
        this._bonusMgr = bonusmgr;
      },
      getBonusGameMgr: function getBonusGameMgr() {
        return this._bonusMgr;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  WestCowboy_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0deacHMsKdKNqGv2ID0zjS4", "WestCowboy_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
      },
      InitCommComponent: function InitCommComponent() {
        this._super();
        var bonusuinode = cc.find("safe_node/bonusgame", this.node);
        var scp_bonus = bonusuinode.addComponent("WestCowboy_BonusGameMgr");
        cc.vv.gameData.setBonusGameMgr(scp_bonus);
        scp_bonus.Init();
        cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_enter", true);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  WestCowboy_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c416cw5wRtApq2Z/v01hglY", "WestCowboy_Reel");
    "use strict";
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
        var haveBonus = false;
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          if (item.GetShowId() === this._cfg.bonusId) {
            haveBonus = true;
            item.playBonusStopAnimation();
          }
        }
        haveBonus && cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_baseBonusBuling", true);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  WestCowboy_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fa5fh5451Be7H88MNVuTUx", "WestCowboy_Slots");
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
        _enterFreeCallback: null
      },
      Init: function Init() {
        this._super();
      },
      StartMove: function StartMove() {
        if (cc.vv.gameData.isBonusGame()) return;
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        cc.find("rate_tips/rate", this.node).getComponent(cc.Label).string = "";
        cc.find("free_tips/allTimes", this.node).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
        cc.find("free_tips/curTimes", this.node).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime();
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!deskInfo.extraFreeInfo) {
                _context.next = 21;
                break;
              }
              _this._bottomScript.ShowBtnsByState("moveing_1");
              if (!(0 === deskInfo.extraFreeInfo.state)) {
                _context.next = 9;
                break;
              }
              _context.next = 6;
              return _this.popFreeDialog(deskInfo.extraFreeInfo);

             case 6:
              _this.cutSceneChili();
              _context.next = 9;
              return cc.vv.gameData.awaitTime(1);

             case 9:
              if (1 === deskInfo.extraFreeInfo.state) {
                cc.find("free_tips/allTimes", _this.node).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                cc.find("free_tips/curTimes", _this.node).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime();
              }
              cc.find("rate_tips/rate", _this.node).getComponent(cc.Label).string = "";
              cc.find("free_dialog/common_enter_node", _this.node.parent).active = false;
              cc.find("free_dialog", _this.node.parent).active = false;
              _this.ShowGameview(true);
              _context.next = 16;
              return cc.vv.gameData.awaitTime(2);

             case 16:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("music_ChilliFiesta_freeSpinBgSound");
              _this.CanDoNextRound();
              _context.next = 35;
              break;

             case 21:
              if (!deskInfo.bonusGame) {
                _context.next = 34;
                break;
              }
              _this._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 25;
              return cc.vv.gameData.getBonusGameMgr().showBonusGame(deskInfo.bonusGame);

             case 25:
              _this.cutSceneChili();
              _context.next = 28;
              return cc.vv.gameData.awaitTime(1);

             case 28:
              cc.vv.gameData.getBonusGameMgr()._mainNode.active = false;
              _context.next = 31;
              return cc.vv.gameData.awaitTime(1);

             case 31:
              _this.ShowBottomWin(cc.vv.gameData.getBonusGameMgr().getWinCoin(), cc.vv.gameData.getBonusGameMgr().getWinCoin(), true, function() {
                _this.CanDoNextRound();
              });
              _context.next = 35;
              break;

             case 34:
              _this.CanDoNextRound();

             case 35:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      StopMove: function StopMove() {
        if (cc.vv.gameData.isBonusGame()) {
          cc.vv.gameData.getBonusGameMgr().StopMove();
          return;
        }
        this._super();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2._super(msg);

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
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
            if (cards[i] === this._cfg.bonusId) {
              var index = this._gameInfo.bonusIdxs.indexOf(i + 1);
              -1 !== index && index < this._gameInfo.bonusItems.length && (res.data = this._gameInfo.bonusItems[index]);
            }
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
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return this._gameInfo.extraFreeInfo && 0 === this._gameInfo.extraFreeInfo.state;
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      cutSceneChili: function cutSceneChili() {
        cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinChangeScene", true);
        var transition = cc.find("ChilliFiesta_guochang", this.node.parent);
        transition.active = true;
        var spine = transition.getComponent(sp.Skeleton);
        spine.setAnimation(0, "skill", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          transition.active = false;
        });
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                _context4.next = 3;
                break;
              }
              _context4.next = 3;
              return _this3.showFreeRate();

             case 3:
              _this3.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this3.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    _this3._gameInfo.bonusGame ? _this3.triggerBonusGame() : _this3.CheckEnterFreeGame() ? _this3.triggerFreeGame() : _this3.CheckExtraFreeGame() ? _this3.triggerExtraFreeGame() : _this3.CheckExitFreeGame() ? _this3.triggerExitFreeGame() : _this3.CanDoNextRound();

                   case 1:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })));

             case 8:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      CheckExtraFreeGame: function CheckExtraFreeGame() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      triggerBonusGame: function triggerBonusGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var logo, i, symbol;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_respinTrigger", true);
              logo = cc.find("ChilliFiesta_logo", _this4.node.parent);
              logo.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
              logo.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
              for (i = 0; i < _this4._gameInfo.bonusIdxs.length; i++) {
                symbol = _this4.GetSymbolByIdx(_this4._gameInfo.bonusIdxs[i]);
                symbol && symbol.playBonusTriggerAnimation();
              }
              _context5.next = 7;
              return cc.vv.gameData.awaitTime(4);

             case 7:
              _this4.cutSceneChili();
              _context5.next = 10;
              return cc.vv.gameData.awaitTime(1);

             case 10:
              _context5.next = 12;
              return cc.vv.gameData.getBonusGameMgr().showBonusGame(_this4._gameInfo.bonusGame);

             case 12:
              _this4.cutSceneChili();
              _context5.next = 15;
              return cc.vv.gameData.awaitTime(1);

             case 15:
              cc.vv.gameData.getBonusGameMgr()._mainNode.active = false;
              _context5.next = 18;
              return cc.vv.gameData.awaitTime(1);

             case 18:
              _this4.ShowBottomWin(cc.vv.gameData.getBonusGameMgr().getWinCoin(), cc.vv.gameData.getBonusGameMgr().getWinCoin(), true, function() {
                _this4.CanDoNextRound();
              });

             case 19:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      triggerExtraFreeGame: function triggerExtraFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this5._bottomScript.ShowBtnsByState("moveing_1");
              cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_scatterTrigger", true);
              for (i = 0; i < _this5._gameInfo.resultCards.length; i++) {
                card = _this5._gameInfo.resultCards[i];
                if (card === _this5._cfg.scatterId) {
                  symbol = _this5.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              _context6.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context6.next = 7;
              return _this5.popExtraFreeDialog();

             case 7:
              _context6.next = 9;
              return cc.vv.gameData.awaitTime(1);

             case 9:
              _this5.CanDoNextRound();

             case 10:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      popExtraFreeDialog: function popExtraFreeDialog() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var free_dialog, dialog;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_freespinmore", true);
              free_dialog = cc.find("free_dialog", _this6.node.parent);
              free_dialog.active = true;
              dialog = cc.find("extra_node", free_dialog);
              dialog.active = true;
              cc.find("bg/times", dialog).getComponent(cc.Label).string = _this6._gameInfo.freeResult.freeInfo.freeCnt;
              _context7.next = 8;
              return cc.vv.gameData.awaitTime(2);

             case 8:
              dialog.active = false;
              free_dialog.active = false;

             case 10:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      showFreeRate: function showFreeRate() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function(success) {
                if (_this7._gameInfo.extraFreeInfo && _this7._gameInfo.extraFreeInfo.currMult) {
                  cc.find("rate_tips/rate", _this7.node).getComponent(cc.Label).string = "X" + _this7._gameInfo.extraFreeInfo.currMult;
                  cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_wildFire", true);
                  var baodian = cc.find("rate_tips/baodian", _this7.node);
                  baodian.active = true;
                  baodian.getComponent(cc.Animation).play("firebaodian");
                  baodian.getComponent(cc.Animation).on("stop", function() {
                    success();
                    baodian.active = false;
                  });
                } else success();
              }));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        for (var i = 0; i < 5; i++) {
          var freebg = cc.find("reels_bg/reel_bg" + (i + 1) + "/free", this.node);
          freebg.active = bFree;
        }
        cc.find("free_tips", this.node).active = bFree;
        cc.find("rate_tips", this.node).active = bFree;
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var logo, i, card, symbol;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this8._bottomScript.ShowBtnsByState("moveing_1");
              cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_scatterTrigger", true);
              logo = cc.find("ChilliFiesta_logo", _this8.node.parent);
              logo.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
              logo.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
              for (i = 0; i < _this8._gameInfo.resultCards.length; i++) {
                card = _this8._gameInfo.resultCards[i];
                if (card === _this8._cfg.scatterId) {
                  symbol = _this8.GetSymbolByIdx(i + 1);
                  symbol && symbol.playWinAnimation();
                }
              }
              _context9.next = 8;
              return cc.vv.gameData.awaitTime(2);

             case 8:
              _context9.next = 10;
              return _this8.popFreeDialog(_this8._gameInfo.extraFreeInfo);

             case 10:
              _this8.cutSceneChili();
              _context9.next = 13;
              return cc.vv.gameData.awaitTime(1);

             case 13:
              cc.find("free_dialog/common_enter_node", _this8.node.parent).active = false;
              cc.find("free_dialog", _this8.node.parent).active = false;
              _this8.ShowGameview(true);
              _context9.next = 18;
              return cc.vv.gameData.awaitTime(2);

             case 18:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("music_ChilliFiesta_freeSpinBgSound");
              _this8.CanDoNextRound();

             case 21:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _this9._bottomScript.ShowBtnsByState("moveing_1");
              _context10.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context10.next = 5;
              return _this9.popFreeResultDialog();

             case 5:
              _this9.cutSceneChili();
              _context10.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              _this9.ShowGameview(false);
              _context10.next = 11;
              return cc.vv.gameData.awaitTime(1);

             case 11:
              _this9.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this9.CanDoNextRound();
              });

             case 12:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      popFreeDialog: function popFreeDialog(extraFreeInfo) {
        var _this10 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success) {
            var free_dialog, dialog, logo, _loop, i;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                _this10._enterFreeCallback = success;
                cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_freespin_choose", true);
                free_dialog = cc.find("free_dialog", _this10.node.parent);
                free_dialog.active = true;
                dialog = cc.find("common_enter_node", free_dialog);
                dialog.active = true;
                logo = cc.find("logo", dialog);
                logo.scale = 0;
                cc.tween(logo).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _loop = function _loop(i) {
                  var node = cc.find("node_" + (i + 1), dialog);
                  node.scale = 0;
                  node.color = cc.Color.WHITE;
                  var _iterator2 = _createForOfIteratorHelper(node.children), _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                      var child = _step2.value;
                      child.color = cc.Color.WHITE;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  cc.find("times", node).getComponent(cc.Label).string = extraFreeInfo.options[i].freeCnt;
                  for (var j = 0; j < 3; j++) cc.find("rate_" + (j + 1), node).getComponent(cc.Label).string = "X" + extraFreeInfo.options[i].mults[j];
                  cc.tween(node).delay(.5 + .5 * i).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).delay(1 - .5 * i).repeatForever(cc.tween().to(1, {
                    scale: 1.1
                  }).to(1, {
                    scale: 1
                  })).start();
                  node.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                    var req, result, _i3, _node, _iterator3, _step3, child;
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) switch (_context12.prev = _context12.next) {
                       case 0:
                        node.off(cc.Node.EventType.TOUCH_END);
                        dialog.stopAllActions();
                        cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_freespin_chooseTimes", true);
                        req = {
                          rtype: 1,
                          choiceId: i + 1
                        };
                        _context12.next = 6;
                        return cc.vv.gameData.reqSubGame(req);

                       case 6:
                        result = _context12.sent;
                        if (!(200 === result.code && 1 === result.data.rtype)) {
                          _context12.next = 19;
                          break;
                        }
                        for (_i3 = 0; _i3 < 3; _i3++) {
                          _node = cc.find("free_dialog/common_enter_node/node_" + (_i3 + 1), _this10.node.parent);
                          _node.scale = 1;
                          _node.stopAllActions();
                          if (_i3 === result.data.choiceId - 1) _node.scale = 1.2; else {
                            _node.color = cc.Color.GRAY;
                            _iterator3 = _createForOfIteratorHelper(_node.children);
                            try {
                              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                                child = _step3.value;
                                child.color = cc.Color.GRAY;
                              }
                            } catch (err) {
                              _iterator3.e(err);
                            } finally {
                              _iterator3.f();
                            }
                          }
                        }
                        cc.vv.gameData.SetTotalFree(result.data.extraFreeInfo.choiceInfo.freeCnt);
                        cc.vv.gameData.SetFreeTime(result.data.extraFreeInfo.choiceInfo.freeCnt);
                        cc.find("free_tips", _this10.node).active = true;
                        cc.find("free_tips/curTimes", _this10.node).getComponent(cc.Label).string = "0";
                        cc.find("free_tips/allTimes", _this10.node).getComponent(cc.Label).string = result.data.extraFreeInfo.choiceInfo.freeCnt;
                        cc.find("rate_tips", _this10.node).active = true;
                        cc.find("rate_tips/rate", _this10.node).getComponent(cc.Label).string = "";
                        _context12.next = 18;
                        return cc.vv.gameData.awaitTime(1);

                       case 18:
                        if (_this10._enterFreeCallback) {
                          _this10._enterFreeCallback();
                          _this10._enterFreeCallback = null;
                        }

                       case 19:
                       case "end":
                        return _context12.stop();
                      }
                    }, _callee12);
                  })));
                };
                for (i = 0; i < 3; i++) _loop(i);
                _context13.next = 13;
                return cc.vv.gameData.awaitTime(2);

               case 13:
                cc.vv.gameData.isNeedAutoPlay() && cc.tween(dialog).delay(cc.vv.gameData.getManualAutoPlayTime()).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                  var req, result, _i2, node, _iterator, _step, child;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_freespin_chooseTimes", true);
                      req = {
                        rtype: 1,
                        choiceId: 1
                      };
                      _context11.next = 4;
                      return cc.vv.gameData.reqSubGame(req);

                     case 4:
                      result = _context11.sent;
                      if (!(200 === result.code && 1 === result.data.rtype)) {
                        _context11.next = 17;
                        break;
                      }
                      for (_i2 = 0; _i2 < 3; _i2++) {
                        node = cc.find("free_dialog/common_enter_node/node_" + (_i2 + 1), _this10.node.parent);
                        node.scale = 1;
                        node.stopAllActions();
                        if (_i2 === result.data.choiceId - 1) node.scale = 1.2; else {
                          node.color = cc.Color.GRAY;
                          _iterator = _createForOfIteratorHelper(node.children);
                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                              child = _step.value;
                              child.color = cc.Color.GRAY;
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }
                        }
                      }
                      cc.vv.gameData.SetTotalFree(result.data.extraFreeInfo.choiceInfo.freeCnt);
                      cc.vv.gameData.SetFreeTime(result.data.extraFreeInfo.choiceInfo.freeCnt);
                      cc.find("free_tips", _this10.node).active = true;
                      cc.find("free_tips/curTimes", _this10.node).getComponent(cc.Label).string = "0";
                      cc.find("free_tips/allTimes", _this10.node).getComponent(cc.Label).string = result.data.extraFreeInfo.choiceInfo.freeCnt;
                      cc.find("rate_tips", _this10.node).active = true;
                      cc.find("rate_tips/rate", _this10.node).getComponent(cc.Label).string = "";
                      _context11.next = 16;
                      return cc.vv.gameData.awaitTime(1);

                     case 16:
                      if (_this10._enterFreeCallback) {
                        _this10._enterFreeCallback();
                        _this10._enterFreeCallback = null;
                      }

                     case 17:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }))).start();

               case 14:
               case "end":
                return _context13.stop();
              }
            }, _callee13);
          }));
          return function(_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this11 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success) {
            var free_dialog, dialog, bg, coin, times, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_freespinOver", true);
                free_dialog = cc.find("free_dialog", _this11.node.parent);
                free_dialog.active = true;
                dialog = cc.find("result_node", free_dialog);
                dialog.active = true;
                bg = cc.find("bg", dialog);
                bg.scale = 0;
                cc.tween(bg).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                coin = cc.find("coin", bg);
                coin.getComponent(cc.Label).string = Global.formatMoney(cc.vv.gameData.GetGameTotalFreeWin());
                times = cc.find("times", bg);
                times.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                btn_collect = cc.find("btn_collect", bg);
                cc.vv.AudioManager.playEff("games/WestCowboy/", "music_ChilliFiesta_collect", true);
                btn_collect.off("click");
                func = function() {
                  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                      while (1) switch (_context14.prev = _context14.next) {
                       case 0:
                        btn_collect.off("click");
                        cc.tween(bg).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          dialog.active = false;
                          free_dialog.active = false;
                          success();
                        }).start();

                       case 2:
                       case "end":
                        return _context14.stop();
                      }
                    }, _callee14);
                  }));
                  return function func() {
                    return _ref6.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context15.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee15);
                })));

               case 18:
               case "end":
                return _context16.stop();
              }
            }, _callee16);
          }));
          return function(_x2) {
            return _ref5.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  WestCowboy_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20931h4UOFAm6B7xz47Wubb", "WestCowboy_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      Init: function Init(idx, node) {
        this._super(idx, node);
      },
      initSymbolType: function initSymbolType(type) {
        this._bonusType = type;
      },
      StartMove: function StartMove() {
        this._super();
        var lajiao = cc.find("symbol_3/lajiao", this.node);
        if (lajiao) {
          lajiao.angle = 0;
          lajiao.stopAllActions();
        }
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        this._super();
        this.showCoin();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.showCoin();
      },
      playBonusStopAnimation: function playBonusStopAnimation() {
        this._id === cc.vv.gameData.getGameCfg().bonusId && this._showNode && cc.tween(this._showNode).repeatForever(cc.tween().to(.5, {
          scale: 1.1
        }).to(.5, {
          scale: 1
        })).start();
      },
      playBonusTriggerAnimation: function playBonusTriggerAnimation() {
        if (this._id === cc.vv.gameData.getGameCfg().bonusId && this._showNode) {
          this._showNode.scale = 1;
          this._showNode.stopAllActions();
          this._showNode.getComponent(cc.Animation).play("bonus_red_chufa");
          var lajiao = cc.find("lajiao", this._showNode);
          lajiao && cc.tween(lajiao).repeatForever(cc.tween().by(3, {
            angle: -720
          }, {
            easing: "backInOut"
          })).start();
        }
      },
      playBonusGenerateAnimation: function playBonusGenerateAnimation() {
        if (this._id === cc.vv.gameData.getGameCfg().bonusId && this._showNode) {
          var coin = cc.find("coin", this.node);
          var jackpot = cc.find("jackpot", this.node);
          var node = coin;
          coin && jackpot && this._data && (this._data.coin > 0 ? node = coin : this._data.jackpot && (node = jackpot));
          node.scale = 0;
          cc.tween(node).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          cc.tween(this._showNode).delay(.5).repeatForever(cc.tween().to(.5, {
            scale: 1.1
          }).to(.5, {
            scale: 1
          })).start();
        }
      },
      showCoin: function showCoin() {
        var coin = cc.find("coin", this.node);
        var jackpot = cc.find("jackpot", this.node);
        if (coin && jackpot && this._id === cc.vv.gameData.getGameCfg().bonusId) if (this._data) {
          if (this._data.coin > 0) {
            coin.active = true;
            coin.getComponent(cc.Label).string = Global.formatNumShort(this._data.coin, 0);
          } else if (this._data.jackpot) {
            jackpot.active = true;
            var atlas = cc.vv.gameData.GetAtlasByName("ChilliFiesta2");
            var names = [ "mini", "minor", "major", "grand" ];
            jackpot.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("ChilliFiesta-Common-ChiliFiesta_tanban_" + names[this._data.jackpot.id - 1]);
          } else if (this._data.baseCoin) {
            coin.active = false;
            jackpot.active = false;
            var _atlas = cc.vv.gameData.GetAtlasByName("ChilliFiesta3");
            cc.find("lajiao", this._showNode).getComponent(cc.Sprite).spriteFrame = _atlas.getSpriteFrame("Symbol-ChilliFiesta_lajiao_gold");
          }
        } else {
          coin.active = true;
          var randomRate = [ .25, .5, .75, 1, 2, 5, 10 ];
          var randomCoin = cc.vv.gameData.GetTotalBet() * randomRate[Math.floor(Math.random() * randomRate.length)];
          coin.getComponent(cc.Label).string = Global.formatNumShort(randomCoin, 0);
        } else {
          coin.active = false;
          jackpot.active = false;
        }
      },
      playBonusCoinAnimation: function playBonusCoinAnimation(baseCoin) {
        if (this._id === cc.vv.gameData.getGameCfg().bonusId && this._showNode) {
          var coin = cc.find("coin", this.node);
          coin.active = true;
          coin.getComponent(cc.Label).string = Global.formatNumShort(baseCoin, 0);
          coin.scale = 0;
          cc.tween(coin).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "WestCowboy_BonusGameMgr", "WestCowboy_BonusReel", "WestCowboy_BonusSlots", "WestCowboy_Cfg", "WestCowboy_GameData", "WestCowboy_Logic", "WestCowboy_Reel", "WestCowboy_Slots", "WestCowboy_Symbol" ]);