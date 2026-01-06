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
  PoliticalStrategist_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d520B0aO5LmqLs5qk+WXUN", "PoliticalStrategist_BonusReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.find("bonus_slots", this.node.parent.parent.parent).getComponent("PoliticalStrategist_BonusSlots");
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      playReelStop: function playReelStop() {
        this._super();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          if (item.GetShowId() === this._cfg.bonusId) {
            Global.SlotsSoundMgr.playEffect("reelFW");
            item.playStopAnimation();
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  PoliticalStrategist_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89450Gc1C1Lxaot29mWQSTI", "PoliticalStrategist_BonusSlots");
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
        _endCallback: null,
        _wheels: [],
        _remainTimes: 0,
        _bonusGame: null,
        _winCoin: 0,
        _curWheel: null
      },
      Init: function Init() {
        this._super();
      },
      createReels: function createReels(col, row) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent("PoliticalStrategist_BonusReel");
          scp.Init(i, row, this._topAniNode);
          this._reels.push(scp);
        }
      },
      startBonusGame: function startBonusGame(bonusGame) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
                  var firewheel_node, _loop, i;
                  return regeneratorRuntime.wrap(function _callee$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playBgm("bgbgm");
                      _this._bonusGame = bonusGame;
                      _this._endCallback = success;
                      _this.node.active = true;
                      firewheel_node = cc.find("firewheel_node", _this.node);
                      _this.initAllSymbols();
                      _loop = regeneratorRuntime.mark(function _loop(i) {
                        var item, symbol, chengbeitishi, node, startPos, endPos;
                        return regeneratorRuntime.wrap(function _loop$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                           case 0:
                            item = bonusGame.items[i];
                            symbol = _this.GetSymbolByIdx(item.idx);
                            chengbeitishi = cc.instantiate(cc.find("ChengBeiTiShi", _this.node));
                            chengbeitishi.parent = symbol.node;
                            chengbeitishi.active = true;
                            Global.SlotsSoundMgr.playEffect("bgFWcollect");
                            chengbeitishi.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_FGDA_TiShi", false);
                            chengbeitishi.getComponent(sp.Skeleton).setCompleteListener(function() {
                              chengbeitishi.getComponent(sp.Skeleton).setCompleteListener(null);
                              chengbeitishi.removeFromParent();
                              symbol.showNormalBonus();
                            });
                            node = cc.instantiate(cc.vv.gameData.GetPrefabByName("symbol"));
                            node.addComponent("PoliticalStrategist_Symbol");
                            node.parent = cc.find("firewheel_layout", firewheel_node);
                            startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                            startPos = node.parent.convertToNodeSpaceAR(startPos);
                            node.position = startPos;
                            node.getComponent("PoliticalStrategist_Symbol").ShowById(_this._cfg.bonusId, item);
                            node.getComponent("PoliticalStrategist_Symbol").playidleAnimation();
                            endPos = cc.v2(60 * (.5 + i), 0);
                            _this._wheels.push(node);
                            cc.tween(node).to(.5, {
                              position: endPos,
                              scale: .5
                            }).call(function() {
                              var cbts = cc.instantiate(cc.find("ChengBeiTiShi", _this.node));
                              cbts.parent = node;
                              cbts.active = true;
                              cbts.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_FGDA_TiShi", false);
                              cbts.getComponent(sp.Skeleton).setCompleteListener(function() {
                                cbts.getComponent(sp.Skeleton).setCompleteListener(null);
                                cbts.removeFromParent();
                              });
                              var times_cbts = cc.find("times/ChengBeiTiShi", firewheel_node);
                              times_cbts.active = true;
                              times_cbts.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_FGNG _TiShi", false);
                              times_cbts.getComponent(sp.Skeleton).setCompleteListener(function() {
                                times_cbts.getComponent(sp.Skeleton).setCompleteListener(null);
                                times_cbts.active = false;
                              });
                              _this._remainTimes++;
                              cc.find("times", firewheel_node).getComponent(cc.Label).string = _this._remainTimes;
                            }).start();
                            _context.next = 21;
                            return cc.vv.gameData.awaitTime(.5);

                           case 21:
                           case "end":
                            return _context.stop();
                          }
                        }, _loop);
                      });
                      i = 0;

                     case 9:
                      if (!(i < bonusGame.items.length)) {
                        _context2.next = 14;
                        break;
                      }
                      return _context2.delegateYield(_loop(i), "t0", 11);

                     case 11:
                      i++;
                      _context2.next = 9;
                      break;

                     case 14:
                      _context2.next = 16;
                      return cc.vv.gameData.awaitTime(1);

                     case 16:
                      _this.reqSpin();

                     case 17:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee);
                }));
                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee2);
        }))();
      },
      initAllSymbols: function initAllSymbols() {
        var gameInfo = cc.vv.gameData.getGameInfo();
        if (gameInfo) {
          for (var i = 0; i < gameInfo.resultCards.length; i++) {
            var card = gameInfo.resultCards[i];
            var symbol = this.GetSymbolByIdx(i + 1);
            symbol.ShowById(card);
          }
          var _iterator = _createForOfIteratorHelper(this._bonusGame.items), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              var _symbol = this.GetSymbolByIdx(item.idx);
              _symbol.ShowById(this._cfg.bonusId, item);
              _symbol.playidleAnimation();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else for (var _i = 0; _i < 15; _i++) {
          var _symbol2 = this.GetSymbolByIdx(_i + 1);
          _symbol2.ShowRandomSymbol();
        }
      },
      StartMove: function StartMove() {
        this._super();
        this._remainTimes--;
        cc.find("firewheel_node/times", this.node).getComponent(cc.Label).string = this._remainTimes;
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var deskInfo, firewheel_node, i, item, node, endPos;
          return regeneratorRuntime.wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!deskInfo.bonusGame) {
                _context4.next = 14;
                break;
              }
              _this2.node.active = true;
              cc.vv.gameData.setInBonusGame(true);
              firewheel_node = cc.find("firewheel_node", _this2.node);
              for (i = 0; i < deskInfo.bonusGame.items.length; i++) {
                item = deskInfo.bonusGame.items[i];
                node = cc.instantiate(cc.vv.gameData.GetPrefabByName("symbol"));
                node.parent = cc.find("firewheel_layout", firewheel_node);
                node.addComponent("PoliticalStrategist_Symbol");
                node.getComponent("PoliticalStrategist_Symbol").ShowById(_this2._cfg.bonusId, item);
                node.getComponent("PoliticalStrategist_Symbol").playidleAnimation();
                node.scale = .5;
                endPos = cc.v2(60 * (.5 + i), 0);
                node.position = endPos;
                _this2._wheels.push(node);
              }
              _this2._remainTimes = deskInfo.bonusGame.items.length;
              cc.find("times", firewheel_node).getComponent(cc.Label).string = _this2._remainTimes;
              _context4.next = 10;
              return cc.vv.gameData.awaitTime(.5);

             case 10:
              cc.find("slots", _this2.node.parent).active = false;
              _this2.reqSpin();
              _context4.next = 15;
              break;

             case 14:
              _this2.node.active = false;

             case 15:
             case "end":
              return _context4.stop();
            }
          }, _callee3);
        }))();
      },
      reqSpin: function reqSpin() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var node, newWheel, startPos, endPos, i, wheel, reqdata, result;
          return regeneratorRuntime.wrap(function _callee4$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this3.StartMove();
              node = _this3._wheels[0];
              newWheel = cc.instantiate(cc.vv.gameData.GetPrefabByName("symbol"));
              newWheel.parent = _this3.node;
              newWheel.addComponent("PoliticalStrategist_Symbol");
              newWheel.getComponent("PoliticalStrategist_Symbol").ShowById(_this3._cfg.bonusId, node.getComponent("PoliticalStrategist_Symbol").GetData());
              newWheel.getComponent("PoliticalStrategist_Symbol").playidleAnimation();
              startPos = node.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this3.node.convertToNodeSpaceAR(startPos);
              newWheel.position = startPos;
              _this3._curWheel = newWheel;
              node.active = false;
              endPos = cc.find("firewheel_node/middle_node", _this3.node).convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this3.node.convertToNodeSpaceAR(endPos);
              cc.log(endPos);
              Global.SlotsSoundMgr.playEffect("bgFWfly");
              cc.tween(newWheel).to(.5, {
                position: endPos,
                scale: 2
              }).start();
              for (i = 1; i < _this3._wheels.length; i++) {
                wheel = _this3._wheels[i];
                cc.tween(wheel).by(.5, {
                  x: -60
                }).start();
              }
              _context5.next = 20;
              return cc.vv.gameData.awaitTime(1);

             case 20:
              reqdata = {
                rtype: 1
              };
              _context5.next = 23;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 23:
              result = _context5.sent;
              200 !== result.code || result.spcode || _this3.onMsgSpine(result.data);

             case 25:
             case "end":
              return _context5.stop();
            }
          }, _callee4);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var cards;
          return regeneratorRuntime.wrap(function _callee5$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this4._gameInfo = msg.result;
              _this4._bonusGame = msg.bonusGame;
              cards = msg.result.resultCards;
              _this4.SetSlotsResult(cards);

             case 4:
             case "end":
              return _context6.stop();
            }
          }, _callee5);
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
              var _iterator2 = _createForOfIteratorHelper(this._gameInfo.newItems), _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var item = _step2.value;
                  if (item.idx === i + 1) {
                    res.data = item;
                    break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) {
          var _item = this._reels[_i2];
          var reelRes = reelResults[_i2];
          _item.SetResult(reelRes);
        }
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee7$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (!(_this5._gameInfo.winCoin > 0 && _this5._gameInfo.item.mult > 1)) {
                _context8.next = 3;
                break;
              }
              _context8.next = 3;
              return new Promise(function(success) {
                Global.SlotsSoundMgr.playEffect("bgFWmult");
                var node = _this5._wheels[0];
                cc.tween(node).to(.2, {
                  scale: 2.1
                }).to(.2, {
                  scale: 2
                }).delay(.5).call(function() {
                  success();
                }).start();
                var chengbeitishi = cc.instantiate(cc.find("ChengBeiTiShi", _this5.node));
                chengbeitishi.parent = node;
                chengbeitishi.active = true;
                chengbeitishi.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_FGDA_TiShi", false);
                chengbeitishi.getComponent(sp.Skeleton).setCompleteListener(function() {
                  chengbeitishi.removeFromParent();
                });
              });

             case 3:
              _this5.ShowWinTrace();
              winCoin = _this5._gameInfo.lineWinCoin * _this5._gameInfo.item.mult;
              totalWinCoin = _this5._bonusGame.winCoin - _this5._gameInfo.winCoin + winCoin;
              _this5.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                var slots;
                return regeneratorRuntime.wrap(function _callee6$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                   case 0:
                    _context7.next = 2;
                    return _this5.triggerFireWheel();

                   case 2:
                    if (!_this5._bonusGame.isEnd) {
                      _context7.next = 18;
                      break;
                    }
                    _context7.next = 5;
                    return _this5.popBonusResultDialog();

                   case 5:
                    if (!_this5._endCallback) {
                      _context7.next = 10;
                      break;
                    }
                    _this5._endCallback();
                    _this5._endCallback = null;
                    _context7.next = 18;
                    break;

                   case 10:
                    slots = cc.vv.gameData.GetSlotsScript();
                    slots.cutSceneFire();
                    _context7.next = 14;
                    return cc.vv.gameData.awaitTime(1);

                   case 14:
                    cc.vv.gameData.setInBonusGame(false);
                    slots.node.active = true;
                    _this5.node.active = false;
                    slots.ShowBottomWin(_this5._bonusGame.winCoin, _this5._bonusGame.winCoin, true, function() {
                      slots.CanDoNextRound();
                    });

                   case 18:
                   case "end":
                    return _context7.stop();
                  }
                }, _callee6);
              })));

             case 7:
             case "end":
              return _context8.stop();
            }
          }, _callee7);
        }))();
      },
      triggerFireWheel: function triggerFireWheel() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var _iterator3, _step3, _loop2, wheel, position, spine, animations, prizePool, endPos, count, _endPos;
          return regeneratorRuntime.wrap(function _callee8$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              if (!(_this6._gameInfo.newItems.length > 0)) {
                _context10.next = 19;
                break;
              }
              _iterator3 = _createForOfIteratorHelper(_this6._gameInfo.newItems);
              _context10.prev = 2;
              _loop2 = regeneratorRuntime.mark(function _loop2() {
                var item;
                return regeneratorRuntime.wrap(function _loop2$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                   case 0:
                    item = _step3.value;
                    _context9.next = 3;
                    return new Promise(function(success) {
                      var symbol = _this6.GetSymbolByIdx(item.idx);
                      Global.SlotsSoundMgr.playEffect("bgFWcollect");
                      cc.tween(symbol.node).to(.2, {
                        scale: 1.1
                      }).to(.2, {
                        scale: 1
                      }).call(function() {
                        symbol.showNormalBonus();
                        var node = cc.instantiate(cc.vv.gameData.GetPrefabByName("symbol"));
                        node.addComponent("PoliticalStrategist_Symbol");
                        node.parent = cc.find("firewheel_node/firewheel_layout", _this6.node);
                        node.position = cc.v2(60 * (.5 + _this6._wheels.length - 1), 0);
                        node.scale = 0;
                        node.getComponent("PoliticalStrategist_Symbol").ShowById(_this6._cfg.bonusId, item);
                        node.getComponent("PoliticalStrategist_Symbol").playidleAnimation();
                        cc.tween(node).to(.2, {
                          scale: .5
                        }).start();
                        _this6._wheels.push(node);
                        var times_cbts = cc.find("firewheel_node/times/ChengBeiTiShi", _this6.node);
                        times_cbts.active = true;
                        times_cbts.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_FGNG_TiShi", false);
                        times_cbts.getComponent(sp.Skeleton).setCompleteListener(function() {
                          times_cbts.getComponent(sp.Skeleton).setCompleteListener(null);
                          times_cbts.active = false;
                        });
                        _this6._remainTimes++;
                        cc.find("firewheel_node/times", _this6.node).getComponent(cc.Label).string = _this6._remainTimes;
                        var chengbeitishi = cc.instantiate(cc.find("ChengBeiTiShi", _this6.node));
                        chengbeitishi.parent = node;
                        chengbeitishi.active = true;
                        chengbeitishi.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_FGDA_TiShi", false);
                        chengbeitishi.getComponent(sp.Skeleton).setCompleteListener(function() {
                          chengbeitishi.removeFromParent();
                          success();
                        });
                      }).start();
                      var chengbeitishi = cc.instantiate(cc.find("ChengBeiTiShi", _this6.node));
                      chengbeitishi.parent = symbol.node;
                      chengbeitishi.active = true;
                      chengbeitishi.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_FGDA_TiShi", false);
                      chengbeitishi.getComponent(sp.Skeleton).setCompleteListener(function() {
                        chengbeitishi.removeFromParent();
                      });
                    });

                   case 3:
                   case "end":
                    return _context9.stop();
                  }
                }, _loop2);
              });
              _iterator3.s();

             case 5:
              if ((_step3 = _iterator3.n()).done) {
                _context10.next = 9;
                break;
              }
              return _context10.delegateYield(_loop2(), "t0", 7);

             case 7:
              _context10.next = 5;
              break;

             case 9:
              _context10.next = 14;
              break;

             case 11:
              _context10.prev = 11;
              _context10.t1 = _context10["catch"](2);
              _iterator3.e(_context10.t1);

             case 14:
              _context10.prev = 14;
              _iterator3.f();
              return _context10.finish(14);

             case 17:
              _context10.next = 19;
              return cc.vv.gameData.awaitTime(.5);

             case 19:
              if (!_this6._gameInfo.item.isJackpot) {
                _context10.next = 81;
                break;
              }
              cc.find("black_bg", _this6.node).active = true;
              wheel = _this6._wheels[0];
              Global.SlotsSoundMgr.playEffect("bgJPdown");
              position = cc.find("black_bg", _this6.node).convertToWorldSpaceAR(cc.v2(0, 0));
              position = _this6.node.convertToNodeSpaceAR(position);
              cc.tween(_this6._curWheel).to(.5, {
                scale: 2,
                position: position
              }).start();
              _context10.next = 28;
              return cc.vv.gameData.awaitTime(1);

             case 28:
              spine = _this6._curWheel.getComponent("PoliticalStrategist_Symbol").getBonusSpine();
              animations = [ "Mini", "Minor", "Major", "Grand" ];
              if (!_this6._gameInfo.item.jackpot) {
                _context10.next = 69;
                break;
              }
              prizePool = cc.find("LMSlots_PrizePool_1/prizePool_" + animations[_this6._gameInfo.item.jackpot.id - 1], _this6.node.parent);
              if (!_this6._gameInfo.item.jackpot.value) {
                _context10.next = 53;
                break;
              }
              Global.SlotsSoundMgr.playEffect("JPchangeFast");
              spine.setAnimation(0, "HuoLun_" + animations[_this6._gameInfo.item.jackpot.id - 1] + "_Intro2", false);
              spine.addAnimation(0, "HuoLun_" + animations[_this6._gameInfo.item.jackpot.id - 1] + "_Loop1", true);
              _context10.next = 38;
              return cc.vv.gameData.awaitTime(3);

             case 38:
              spine.setAnimation(0, "HuoLun_" + animations[_this6._gameInfo.item.jackpot.id - 1] + "_Loop2", true);
              endPos = null;
              endPos = _this6._gameInfo.item.jackpot.id > 2 ? cc.find("reward_3", prizePool).convertToWorldSpaceAR(cc.v2(0, 0)) : cc.find("reward_1", prizePool).convertToWorldSpaceAR(cc.v2(0, 0));
              cc.find("black_bg", _this6.node).active = false;
              endPos = _this6.node.convertToNodeSpaceAR(endPos);
              Global.SlotsSoundMgr.playEffect("JPcollect");
              cc.tween(_this6._curWheel).to(.5, {
                position: endPos,
                scale: .5
              }).call(function() {
                _this6._wheels.shift();
              }).removeSelf().start();
              cc.find("reward_1/HuoLun", prizePool).active = true;
              cc.find("jp_kuang", prizePool).active = true;
              _context10.next = 49;
              return cc.vv.gameData.awaitTime(1.5);

             case 49:
              _context10.next = 51;
              return _this6.popJackpotDialog();

             case 51:
              _context10.next = 67;
              break;

             case 53:
              Global.SlotsSoundMgr.playEffect("JPchange");
              spine.setAnimation(0, "HuoLun_" + animations[_this6._gameInfo.item.jackpot.id - 1] + "_Intro1", false);
              spine.addAnimation(0, "HuoLun_" + animations[_this6._gameInfo.item.jackpot.id - 1] + "_Loop1", true);
              _context10.next = 58;
              return cc.vv.gameData.awaitTime(3);

             case 58:
              cc.find("black_bg", _this6.node).active = false;
              spine.setAnimation(0, "HuoLun_" + animations[_this6._gameInfo.item.jackpot.id - 1] + "_Loop2", true);
              count = 3 === _this6._gameInfo.item.jackpot.id ? _this6._bonusGame.majorCnt : _this6._bonusGame.grandCnt;
              _endPos = cc.find("reward_" + count, prizePool).convertToWorldSpaceAR(cc.v2(0, 0));
              _endPos = _this6.node.convertToNodeSpaceAR(_endPos);
              Global.SlotsSoundMgr.playEffect("JPcollect");
              cc.tween(_this6._curWheel).to(.5, {
                position: _endPos,
                scale: .5
              }).call(function() {
                cc.find("reward_" + count + "/HuoLun", prizePool).active = true;
                _this6._wheels.shift();
              }).removeSelf().start();
              _context10.next = 67;
              return cc.vv.gameData.awaitTime(1.5);

             case 67:
              _context10.next = 79;
              break;

             case 69:
              _this6._curWheel.getComponent("PoliticalStrategist_Symbol").showWheelCoin(_this6._gameInfo.item.coin);
              _context10.next = 72;
              return cc.vv.gameData.awaitTime(3);

             case 72:
              cc.find("black_bg", _this6.node).active = false;
              _this6._wheels.shift();
              cc.tween(_this6._curWheel).to(.3, {
                opacity: 0
              }).removeSelf().start();
              _context10.next = 77;
              return cc.vv.gameData.awaitTime(.5);

             case 77:
              _context10.next = 79;
              return new Promise(function(success) {
                _this6.ShowBottomWin(_this6._gameInfo.winCoin - _this6._gameInfo.lineWinCoin, _this6._bonusGame.winCoin, false, function() {
                  success();
                });
              });

             case 79:
              _context10.next = 85;
              break;

             case 81:
              _this6._wheels.shift();
              cc.tween(_this6._curWheel).to(.3, {
                opacity: 0
              }).removeSelf().start();
              _context10.next = 85;
              return cc.vv.gameData.awaitTime(.5);

             case 85:
              _context10.next = 87;
              return cc.vv.gameData.awaitTime(.5);

             case 87:
              _this6._bonusGame.isEnd || _this6.reqSpin();

             case 88:
             case "end":
              return _context10.stop();
            }
          }, _callee8, null, [ [ 2, 11, 14, 17 ] ]);
        }))();
      },
      popJackpotDialog: function popJackpotDialog() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var free_dialog, dialog, animations, jackpot, sounds, yifenkuang, btn_collect, prizePool, func;
                  return regeneratorRuntime.wrap(function _callee11$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("JPwin");
                      free_dialog = cc.find("free_dialog", _this7.node.parent);
                      free_dialog.active = true;
                      dialog = cc.find("jackpot_node", free_dialog);
                      dialog.active = true;
                      dialog.scale = 1;
                      animations = [ "Mini", "Minor", "Major", "Grand" ];
                      jackpot = cc.find(animations[_this7._gameInfo.item.jackpot.id - 1], dialog);
                      jackpot.active = true;
                      jackpot.scale = 0;
                      cc.tween(jackpot).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      sounds = [ "mini", "minor", "major", "grand" ];
                      Global.SlotsSoundMgr.playEffect("VO_" + sounds[_this7._gameInfo.item.jackpot.id - 1] + "_jackpot_EN");
                      yifenkuang = cc.find("yifenkuang", dialog);
                      yifenkuang.scale = 0;
                      cc.tween(yifenkuang).delay(.1).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(_this7._gameInfo.jackpotValues[_this7._gameInfo.item.jackpot.id - 1]);
                      btn_collect = cc.find("btn_collect", dialog);
                      btn_collect.scale = 0;
                      cc.tween(btn_collect).delay(.2).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context13.next = 22;
                      return cc.vv.gameData.awaitTime(1);

                     case 22:
                      prizePool = cc.find("LMSlots_PrizePool_1/prizePool_" + animations[_this7._gameInfo.item.jackpot.id - 1], _this7.node.parent);
                      btn_collect.off("click");
                      func = function() {
                        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          return regeneratorRuntime.wrap(function _callee9$(_context11) {
                            while (1) switch (_context11.prev = _context11.next) {
                             case 0:
                              btn_collect.off("click");
                              Global.SlotsSoundMgr.playEffect("button");
                              cc.tween(dialog).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                for (var i = 1; i < 4; i++) {
                                  var reward = cc.find("reward_" + i, prizePool);
                                  reward && (cc.find("HuoLun", reward).active = false);
                                }
                                cc.find("jp_kuang", prizePool).active = false;
                                free_dialog.active = false;
                                dialog.active = false;
                                jackpot.active = false;
                                var winCoin = _this7._gameInfo.jackpotValues[_this7._gameInfo.item.jackpot.id - 1];
                                var totalWinCoin = _this7._bonusGame.winCoin;
                                _this7.ShowBottomWin(winCoin, totalWinCoin, false, function() {
                                  success();
                                });
                              }).start();

                             case 3:
                             case "end":
                              return _context11.stop();
                            }
                          }, _callee9);
                        }));
                        return function func() {
                          return _ref4.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_collect, func);
                      btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context12) {
                          while (1) switch (_context12.prev = _context12.next) {
                           case 0:
                            btn_collect.stopAllActions();
                            _context12.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context12.stop();
                          }
                        }, _callee10);
                      })));

                     case 27:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee11);
                }));
                return function(_x2) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context14.stop();
            }
          }, _callee12);
        }))();
      },
      popBonusResultDialog: function popBonusResultDialog() {
        var _this8 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success) {
            var free_dialog, dialog, freetanchuang, total_won_EN, yifenkuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee15$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("bgend");
                free_dialog = cc.find("free_dialog", _this8.node.parent);
                free_dialog.active = true;
                dialog = cc.find("bonus_result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                total_won_EN = cc.find("total_won_EN", dialog);
                total_won_EN.scale = 0;
                cc.tween(total_won_EN).delay(.1).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                yifenkuang = cc.find("yifenkuang", dialog);
                yifenkuang.scale = 0;
                cc.tween(yifenkuang).delay(.2).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this8._winCoin = _this8._bonusGame.winCoin;
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(_this8._bonusGame.winCoin);
                btn_collect = cc.find("btn_collect", dialog);
                btn_collect.scale = 0;
                cc.tween(btn_collect).delay(.3).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context17.next = 22;
                return cc.vv.gameData.awaitTime(1);

               case 22:
                btn_collect.off("click");
                func = function() {
                  var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                    return regeneratorRuntime.wrap(function _callee13$(_context15) {
                      while (1) switch (_context15.prev = _context15.next) {
                       case 0:
                        btn_collect.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          var animations = [ "Mini", "Minor", "Major", "Grand" ];
                          for (var i = 0; i < animations.length; i++) {
                            var prizePool = cc.find("LMSlots_PrizePool_1/prizePool_" + animations[i], _this8.node.parent);
                            for (var j = 1; j < 4; j++) {
                              var reward = cc.find("reward_" + j, prizePool);
                              reward && (cc.find("HuoLun", reward).active = false);
                            }
                          }
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context15.stop();
                      }
                    }, _callee13);
                  }));
                  return function func() {
                    return _ref7.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                  return regeneratorRuntime.wrap(function _callee14$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context16.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee14);
                })));

               case 26:
               case "end":
                return _context17.stop();
              }
            }, _callee15);
          }));
          return function(_x3) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  PoliticalStrategist_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36c503KP+lPHp8sScsW7wh8", "PoliticalStrategist_Cfg");
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
          name: "Fall",
          zIndex: 100
        },
        win_ani: {
          name: "zhongjiang",
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
        },
        trigger_ani: {
          name: "H1_liang",
          zIndex: 400
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
          name: "animation",
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
          name: "L1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9",
        win_node: "animation_9",
        win_ani: {
          name: "L2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10",
        win_node: "animation_10",
        win_ani: {
          name: "L3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11",
        win_node: "animation_11",
        win_ani: {
          name: "L4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12",
        win_node: "animation_12",
        win_ani: {
          name: "L5",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "PoliticalStrategist_Slots",
        Reels: "PoliticalStrategist_Reel",
        Symbols: "PoliticalStrategist_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 120,
        height: 110
      },
      randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9, 10 ],
      wildId: 1,
      scatterId: 2,
      bonusId: 3,
      collectSymbolId: 4,
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
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/PoliticalStrategist/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelsctr",
        antSound: "reelfast",
        antSpeed: 2e3
      } ],
      helpItems: [ "games/PoliticalStrategist/prefab/help_item_1", "games/PoliticalStrategist/prefab/help_item_2", "games/PoliticalStrategist/prefab/help_item_3", "games/PoliticalStrategist/prefab/help_item_4" ],
      commEffect: {
        path: "games/PoliticalStrategist/",
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
  PoliticalStrategist_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba484LMx/BL3qoQijfFgJyx", "PoliticalStrategist_GameData");
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
  PoliticalStrategist_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "872fbvcamJEPZ/QRIvoy1y2", "PoliticalStrategist_Logic");
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
        Global.SlotsSoundMgr.playEffect("VO_lets_start_the_quest_of_nezha_EN");
      },
      InitCommComponent: function InitCommComponent() {
        this._super();
        var bonusuinode = cc.find("safe_node/bonus_slots", this.node);
        bonusuinode.active = true;
        var scp_bonus = bonusuinode.addComponent("PoliticalStrategist_BonusSlots");
        scp_bonus.Init();
      },
      onUpdateBet: function onUpdateBet() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var script = cc.find("safe_node/slots/collect_node/bonus_node/lock", this.node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("unlock");
          script.setAnimation(0, "jiesuo", false);
          this._lockBonus = false;
        } else if (deskInfo.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("lock");
          this._lockBonus = true;
          script.setAnimation(0, "shangsuo", false);
          script.addAnimation(0, "idle", true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  PoliticalStrategist_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2adecvLoMpC8JT2z0iXwoLN", "PoliticalStrategist_Map");
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
    var CollectGameItemType = {
      Coin: 0,
      Mystery: 1,
      Pearl: 2,
      GoldenKoi: 3,
      DragonBlade: 4,
      PrizeBooster: 5,
      DragonKing: 6
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        mapLevel: cc.Sprite,
        levelPrize: cc.Label,
        mapStar: cc.Node,
        starPercent: cc.Label,
        btnClose: cc.Node,
        basePrize: cc.Label,
        totalWin: cc.Label,
        boxMulti: cc.Label,
        pearlMulti: cc.Label,
        fishMulti: cc.Label,
        sanchajiMulti: cc.Label,
        prizeBoosterMulti: cc.Label,
        jianglibian: sp.Skeleton,
        detail: cc.Node,
        points: [ cc.Node ],
        role: cc.Node,
        role_spine: sp.Skeleton,
        arrow_up: cc.Node,
        touch_up: cc.Node,
        arrow_down: cc.Node,
        touch_down: cc.Node,
        arrow_left: cc.Node,
        touch_left: cc.Node,
        arrow_right: cc.Node,
        touch_right: cc.Node,
        role_prizeBooster: sp.Skeleton,
        role_pearl: sp.Skeleton,
        role_pearlMulti: cc.Node,
        role_box: sp.Skeleton,
        role_sanchaji: sp.Skeleton,
        role_fish: sp.Skeleton,
        role_coin: cc.Label,
        wheel: cc.Node,
        pickGame: cc.Node,
        boxSelect: cc.Node,
        boxSelectBlackBg: cc.Node,
        boxLevelPrize: cc.Node,
        boxLevelPrizeCoin: cc.Label,
        boxMysteryPrize: cc.Node,
        boxMysteryPrizeMinCoin: cc.Label,
        boxMysteryPrizeMaxCoin: cc.Label,
        boxMysteryPrizeCoin: cc.Label,
        boxSelectChooseBoard: cc.Node,
        resultNode: cc.Node,
        resultBoxEnd: cc.Node,
        resultPearlEnd: cc.Node,
        resultSanchajiEnd: cc.Node,
        resultWinCoin: cc.Label,
        btnCollect: cc.Node,
        dialogNode: cc.Node,
        _endCallback: null,
        _curIndex: 0,
        _collectGame: null,
        _finalWinCoin: 0,
        _canGo: true
      },
      openMap: function openMap(collectGame) {
        var _this = this;
        this.node.active = true;
        this._collectGame = collectGame;
        this.mapLevel.node.getComponent("ImgSwitchCmp").setIndex(collectGame.level - 1);
        this.levelPrize.string = Global.FormatNumToComma(collectGame.levelPrizeMult * (1 + collectGame.boosterPercent / 100) * collectGame.startPrize);
        this.boxMulti.string = "X" + collectGame.itemCnt[0];
        this.pearlMulti.string = "X" + collectGame.itemCnt[1];
        this.fishMulti.string = "X" + collectGame.itemCnt[2];
        this.sanchajiMulti.string = "X" + collectGame.itemCnt[3];
        this.prizeBoosterMulti.string = "X" + collectGame.itemCnt[4];
        this.basePrize.string = Global.FormatNumToComma(collectGame.startPrize);
        this.totalWin.string = Global.FormatNumToComma(0);
        this._curIndex = collectGame.currIdx;
        var curPos = cc.find("point_" + collectGame.currIdx, this.detail).convertToWorldSpaceAR(cc.v2(0, 0));
        curPos = this.detail.parent.convertToNodeSpaceAR(curPos);
        this.role.position = curPos;
        this.resetRole();
        this.hideArrow();
        for (var i = 0; i < collectGame.boardInfo.length; i++) {
          var info = collectGame.boardInfo[i];
          this.showInfo(i + 1, info);
        }
        this.btnClose.active = true;
        this.btnClose.off("click");
        this.btnClose.on("click", function() {
          _this.btnClose.off("click");
          Global.SlotsSoundMgr.playEffect("mapInOut");
          _this.node.active = false;
        });
      },
      startMapGame: function startMapGame(collectGame) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
            var curPos, i, info, curInfo, pickgameScript, wheelScript;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this2.btnClose.active = false;
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("mapbgm");
                _this2.node.active = true;
                _this2._endCallback = success;
                _this2._collectGame = collectGame;
                _this2.mapLevel.node.getComponent("ImgSwitchCmp").setIndex(collectGame.level - 1);
                _this2.levelPrize.string = Global.FormatNumToComma(collectGame.levelPrizeMult * (1 + collectGame.boosterPercent / 100) * collectGame.startPrize);
                _this2.boxMulti.string = "X" + collectGame.itemCnt[0];
                _this2.pearlMulti.string = "X" + collectGame.itemCnt[1];
                _this2.fishMulti.string = "X" + collectGame.itemCnt[2];
                _this2.sanchajiMulti.string = "X" + collectGame.itemCnt[3];
                _this2.prizeBoosterMulti.string = "X" + collectGame.itemCnt[4];
                _this2.basePrize.string = Global.FormatNumToComma(collectGame.startPrize);
                _this2.totalWin.string = Global.FormatNumToComma(collectGame.roundInfo.winCoin);
                _this2._curIndex = collectGame.currIdx;
                curPos = cc.find("point_" + collectGame.currIdx, _this2.detail).convertToWorldSpaceAR(cc.v2(0, 0));
                curPos = _this2.detail.parent.convertToNodeSpaceAR(curPos);
                _this2.role.position = curPos;
                _this2.resetRole();
                1 === collectGame.state ? _this2.showArrow(collectGame.currIdx) : _this2.hideArrow();
                for (i = 0; i < collectGame.boardInfo.length; i++) {
                  info = collectGame.boardInfo[i];
                  _this2.showInfo(i + 1, info);
                }
                _this2.touch_up.off(cc.Node.EventType.TOUCH_END);
                _this2.touch_up.on(cc.Node.EventType.TOUCH_END, function() {
                  if (!_this2._canGo) return;
                  if (!_this2.arrow_up.active) return;
                  _this2.go(1);
                });
                _this2.touch_down.off(cc.Node.EventType.TOUCH_END);
                _this2.touch_down.on(cc.Node.EventType.TOUCH_END, function() {
                  if (!_this2._canGo) return;
                  if (!_this2.arrow_down.active) return;
                  _this2.go(2);
                });
                _this2.touch_left.off(cc.Node.EventType.TOUCH_END);
                _this2.touch_left.on(cc.Node.EventType.TOUCH_END, function() {
                  if (!_this2._canGo) return;
                  if (!_this2.arrow_left.active) return;
                  _this2.go(3);
                });
                _this2.touch_right.off(cc.Node.EventType.TOUCH_END);
                _this2.touch_right.on(cc.Node.EventType.TOUCH_END, function() {
                  if (!_this2._canGo) return;
                  if (!_this2.arrow_right.active) return;
                  _this2.go(4);
                });
                if (!(2 === collectGame.state)) {
                  _context.next = 66;
                  break;
                }
                curInfo = collectGame.boardInfo[collectGame.currIdx - 1];
                if (!(curInfo.type === CollectGameItemType.GoldenKoi)) {
                  _context.next = 49;
                  break;
                }
                pickgameScript = _this2.pickGame.getComponent("PoliticalStrategist_PickGame");
                _this2.pickGame.active = true;
                _context.next = 37;
                return pickgameScript.startPick(_this2._collectGame);

               case 37:
                _this2._collectGame = pickgameScript.getCollectGame();
                _context.next = 40;
                return cc.vv.gameData.awaitTime(.5);

               case 40:
                _this2.cutSceneFish(false);
                _context.next = 43;
                return cc.vv.gameData.awaitTime(1.5);

               case 43:
                _this2.pickGame.active = false;
                _context.next = 46;
                return cc.vv.gameData.awaitTime(1);

               case 46:
                _this2.popResult(3);
                _context.next = 64;
                break;

               case 49:
                if (!(curInfo.type === CollectGameItemType.DragonBlade)) {
                  _context.next = 64;
                  break;
                }
                wheelScript = _this2.wheel.getComponent("PoliticalStrategist_Wheel");
                _this2.wheel.active = true;
                _context.next = 54;
                return wheelScript.startWheel(_this2._collectGame);

               case 54:
                _this2._collectGame = wheelScript.getCollectGame();
                _context.next = 57;
                return cc.vv.gameData.awaitTime(.5);

               case 57:
                _this2.cutSceneSanchaji(false);
                _context.next = 60;
                return cc.vv.gameData.awaitTime(1.5);

               case 60:
                _this2.wheel.active = false;
                _context.next = 63;
                return cc.vv.gameData.awaitTime(1);

               case 63:
                _this2.popResult(3);

               case 64:
                _context.next = 67;
                break;

               case 66:
                3 === collectGame.state && _this2.chooseBox();

               case 67:
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
      go: function go(direction) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var nextIndex, nextInfo, point, pos, reqdata, result, collectGame, _point, shuikuai, _pos, info, index, wheelScript, pickgameScript;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("mapPointer");
              _this3.hideArrow();
              nextIndex = _this3._curIndex;
              _context6.t0 = direction;
              _context6.next = 1 === _context6.t0 ? 6 : 2 === _context6.t0 ? 9 : 3 === _context6.t0 ? 12 : 4 === _context6.t0 ? 15 : 18;
              break;

             case 6:
              nextIndex = _this3._curIndex - 6;
              _this3.role_spine.node.scaleX = 1;
              return _context6.abrupt("break", 18);

             case 9:
              nextIndex = _this3._curIndex + 6;
              _this3.role_spine.node.scaleX = 1;
              return _context6.abrupt("break", 18);

             case 12:
              nextIndex = _this3._curIndex - 1;
              _this3.role_spine.node.scaleX = 1;
              return _context6.abrupt("break", 18);

             case 15:
              nextIndex = _this3._curIndex + 1;
              _this3.role_spine.node.scaleX = -1;
              return _context6.abrupt("break", 18);

             case 18:
              nextInfo = _this3._collectGame.boardInfo[nextIndex - 1];
              if (!nextInfo.isOpen) {
                _context6.next = 32;
                break;
              }
              _this3.showInfo(_this3._curIndex, _this3._collectGame.boardInfo[_this3._curIndex - 1]);
              _this3.resetRole();
              _this3._curIndex = nextIndex;
              point = cc.find("point_" + _this3._curIndex, _this3.detail);
              pos = point.convertToWorldSpaceAR(cc.v2(0, 0));
              pos = _this3.detail.parent.convertToNodeSpaceAR(pos);
              Global.SlotsSoundMgr.playEffect("NezhaMove");
              cc.tween(_this3.role).to(.5, {
                position: pos
              }).start();
              _context6.next = 30;
              return cc.vv.gameData.awaitTime(1);

             case 30:
              _this3.showArrow(_this3._curIndex);
              return _context6.abrupt("return");

             case 32:
              reqdata = {
                rtype: 2,
                choiceId: nextIndex
              };
              _context6.next = 35;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 35:
              result = _context6.sent;
              if (!(200 === result.code)) {
                _context6.next = 162;
                break;
              }
              _this3.showInfo(_this3._curIndex, _this3._collectGame.boardInfo[_this3._curIndex - 1]);
              collectGame = result.data.collectGame;
              cc.vv.gameData.getDeskInfo().collectGame = result.data.collectGame;
              _this3._collectGame = collectGame;
              _this3._curIndex = collectGame.currIdx;
              _point = cc.find("point_" + _this3._curIndex, _this3.detail);
              cc.find("bg", _point).active = false;
              Global.SlotsSoundMgr.playEffect("mapCrack");
              shuikuai = cc.find("map_shuikuai", _point).getComponent(sp.Skeleton);
              shuikuai.node.active = true;
              shuikuai.setAnimation(0, "shui4", false);
              shuikuai.setCompleteListener(function() {
                shuikuai.setCompleteListener(null);
                shuikuai.node.active = false;
              });
              _this3.resetRole();
              _pos = _point.convertToWorldSpaceAR(cc.v2(0, 0));
              _pos = _this3.detail.parent.convertToNodeSpaceAR(_pos);
              Global.SlotsSoundMgr.playEffect("NezhaMove");
              cc.tween(_this3.role).to(.5, {
                position: _pos
              }).start();
              _context6.next = 56;
              return cc.vv.gameData.awaitTime(1);

             case 56:
              info = collectGame.boardInfo[_this3._curIndex - 1];
              if (!(info.type === CollectGameItemType.Coin)) {
                _context6.next = 68;
                break;
              }
              Global.SlotsSoundMgr.playEffect("mapCredit");
              _this3.role_coin.node.active = true;
              _this3.role_coin.string = Global.formatNumShort(info.coin, 0);
              _this3.role_coin.node.scale = 0;
              cc.tween(_this3.role_coin.node).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).call(function() {
                Global.doRoallNumEff(_this3.totalWin.node, collectGame.roundInfo.baseCoin - info.coin, collectGame.roundInfo.baseCoin, 1.5, null, null, 0, true);
              }).start();
              _context6.next = 65;
              return cc.vv.gameData.awaitTime(2);

             case 65:
              _this3.showArrow(_this3._curIndex);
              _context6.next = 162;
              break;

             case 68:
              if (!(info.type === CollectGameItemType.Mystery)) {
                _context6.next = 75;
                break;
              }
              Global.SlotsSoundMgr.playEffect("mapCredit");
              _this3.role_box.node.active = true;
              _this3.role_box.setAnimation(0, "box_intro", false);
              _this3.role_box.setCompleteListener(function() {
                _this3.role_box.setCompleteListener(null);
                Global.SlotsSoundMgr.playEffect("mapChestShake");
                _this3.role_box.setAnimation(0, "box_open", false);
                var endPosition = _this3.node.convertToWorldSpaceAR(cc.v2(0, 0));
                endPosition = _this3.role.convertToNodeSpaceAR(endPosition);
                cc.tween(_this3.role_box.node).to(.5, {
                  position: endPosition
                }).start();
                _this3.role_box.setCompleteListener(function() {
                  _this3.role_box.setCompleteListener(null);
                  _this3.role_box.node.position = cc.v2(0, 0);
                  _this3.role_box.node.active = false;
                  _this3.chooseBox();
                });
              });
              _context6.next = 162;
              break;

             case 75:
              if (!(info.type === CollectGameItemType.PrizeBooster)) {
                _context6.next = 82;
                break;
              }
              Global.SlotsSoundMgr.playEffect("mapCredit");
              _this3.role_prizeBooster.node.active = true;
              _this3.role_prizeBooster.setAnimation(0, "Prizebooster", false);
              _this3.role_prizeBooster.setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                var pos, particle, startPos, endPos;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    _this3.role_prizeBooster.setCompleteListener(null);
                    _this3.jianglibian.node.active = true;
                    pos = _this3.prizeBoosterMulti.node.parent.convertToWorldSpaceAR(cc.v2(0, 0));
                    pos = _this3.node.convertToNodeSpaceAR(pos);
                    _this3.jianglibian.node.position = pos;
                    _this3.jianglibian.setAnimation(0, "Map_jiangliban", false);
                    _this3.jianglibian.setCompleteListener(function() {
                      _this3.jianglibian.setCompleteListener(null);
                      _this3.jianglibian.node.active = false;
                      _this3.prizeBoosterMulti.string = "X" + _this3._collectGame.itemCnt[4];
                    });
                    Global.SlotsSoundMgr.playEffect("mapAdded");
                    particle = cc.instantiate(cc.find("particle_fly", _this3.node.parent));
                    particle.active = true;
                    startPos = _this3.role_prizeBooster.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this3.node.parent.convertToNodeSpaceAR(startPos);
                    endPos = _this3.mapStar.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = _this3.node.parent.convertToNodeSpaceAR(endPos);
                    particle.parent = _this3.node.parent;
                    particle.position = startPos;
                    cc.tween(particle).to(.5, {
                      position: endPos
                    }).call(function() {
                      _this3.starPercent.string = _this3._collectGame.boosterPercent + "%";
                    }).removeSelf().start();
                    _context2.next = 19;
                    return cc.vv.gameData.awaitTime(1);

                   case 19:
                    _this3.showArrow(_this3._curIndex);

                   case 20:
                   case "end":
                    return _context2.stop();
                  }
                }, _callee2);
              })));
              _context6.next = 162;
              break;

             case 82:
              if (!(info.type === CollectGameItemType.Pearl)) {
                _context6.next = 108;
                break;
              }
              Global.SlotsSoundMgr.playEffect("mapCredit");
              _this3.role_pearl.node.active = true;
              _this3.role_pearlMulti.active = false;
              _this3.role_pearl.setAnimation(0, "map_beike_inro", false);
              _context6.next = 89;
              return cc.vv.gameData.awaitTime(1);

             case 89:
              _this3.role_pearl.setAnimation(0, "map_beike_open", false);
              index = 0;
              _context6.t1 = _this3._collectGame.roundInfo.mult;
              _context6.next = 2 === _context6.t1 ? 94 : 3 === _context6.t1 ? 96 : 5 === _context6.t1 ? 98 : 10 === _context6.t1 ? 100 : 25 === _context6.t1 ? 102 : 104;
              break;

             case 94:
              index = 0;
              return _context6.abrupt("break", 104);

             case 96:
              index = 1;
              return _context6.abrupt("break", 104);

             case 98:
              index = 2;
              return _context6.abrupt("break", 104);

             case 100:
              index = 3;
              return _context6.abrupt("break", 104);

             case 102:
              index = 4;
              return _context6.abrupt("break", 104);

             case 104:
              _this3.role_pearlMulti.getComponent("ImgSwitchCmp").setIndex(index);
              _this3.role_pearl.setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var pos, particle, startPos, endPos;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    _this3.role_pearl.setCompleteListener(null);
                    _this3.jianglibian.node.active = true;
                    pos = _this3.pearlMulti.node.parent.convertToWorldSpaceAR(cc.v2(0, 0));
                    pos = _this3.node.convertToNodeSpaceAR(pos);
                    _this3.jianglibian.node.position = pos;
                    _this3.jianglibian.setAnimation(0, "Map_jiangliban", false);
                    _this3.jianglibian.setCompleteListener(function() {
                      _this3.jianglibian.setCompleteListener(null);
                      _this3.jianglibian.node.active = false;
                      _this3.pearlMulti.string = "X" + _this3._collectGame.itemCnt[1];
                    });
                    Global.SlotsSoundMgr.playEffect("mapAdded");
                    particle = cc.instantiate(cc.find("particle_fly", _this3.node.parent));
                    particle.active = true;
                    startPos = _this3.role_pearl.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this3.node.parent.convertToNodeSpaceAR(startPos);
                    endPos = _this3.totalWin.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = _this3.node.parent.convertToNodeSpaceAR(endPos);
                    particle.parent = _this3.node.parent;
                    particle.position = startPos;
                    cc.tween(particle).to(.5, {
                      position: endPos
                    }).call(function() {
                      _this3.totalWin.string = Global.FormatNumToComma(_this3._collectGame.roundInfo.winCoin);
                    }).removeSelf().start();
                    _context3.next = 19;
                    return cc.vv.gameData.awaitTime(1);

                   case 19:
                    _this3.popResult(2);

                   case 20:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })));
              _context6.next = 162;
              break;

             case 108:
              if (!(info.type === CollectGameItemType.DragonBlade)) {
                _context6.next = 136;
                break;
              }
              Global.SlotsSoundMgr.playEffect("mapCredit");
              _this3.role_sanchaji.node.active = true;
              _this3.role_sanchaji.setAnimation(0, "sanchaji_intro", false);
              _this3.role_sanchaji.setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                var pos;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                   case 0:
                    _this3.role_sanchaji.setCompleteListener(null);
                    _this3.jianglibian.node.active = true;
                    pos = _this3.sanchajiMulti.node.parent.convertToWorldSpaceAR(cc.v2(0, 0));
                    pos = _this3.node.convertToNodeSpaceAR(pos);
                    _this3.jianglibian.node.position = pos;
                    _this3.jianglibian.setAnimation(0, "Map_jiangliban", false);
                    _this3.jianglibian.setCompleteListener(function() {
                      _this3.jianglibian.setCompleteListener(null);
                      _this3.jianglibian.node.active = false;
                      _this3.sanchajiMulti.string = "X" + _this3._collectGame.itemCnt[3];
                    });

                   case 7:
                   case "end":
                    return _context4.stop();
                  }
                }, _callee4);
              })));
              _context6.next = 115;
              return cc.vv.gameData.awaitTime(2);

             case 115:
              _context6.next = 117;
              return _this3.popDialog(1);

             case 117:
              _this3.cutSceneSanchaji(true);
              _context6.next = 120;
              return cc.vv.gameData.awaitTime(1.5);

             case 120:
              wheelScript = _this3.wheel.getComponent("PoliticalStrategist_Wheel");
              _this3.wheel.active = true;
              _context6.next = 124;
              return wheelScript.startWheel(_this3._collectGame);

             case 124:
              _this3._collectGame = wheelScript.getCollectGame();
              _context6.next = 127;
              return cc.vv.gameData.awaitTime(.5);

             case 127:
              _this3.cutSceneSanchaji(false);
              _context6.next = 130;
              return cc.vv.gameData.awaitTime(1.5);

             case 130:
              _this3.wheel.active = false;
              _context6.next = 133;
              return cc.vv.gameData.awaitTime(1);

             case 133:
              _this3.popResult(3);
              _context6.next = 162;
              break;

             case 136:
              if (!(info.type === CollectGameItemType.GoldenKoi)) {
                _context6.next = 162;
                break;
              }
              Global.SlotsSoundMgr.playEffect("mapCredit");
              _this3.role_fish.node.active = true;
              _this3.role_fish.setAnimation(0, "liyu_intro", false);
              _this3.role_fish.setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                var pos;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                   case 0:
                    _this3.role_fish.setCompleteListener(null);
                    _this3.jianglibian.node.active = true;
                    pos = _this3.fishMulti.node.parent.convertToWorldSpaceAR(cc.v2(0, 0));
                    pos = _this3.node.convertToNodeSpaceAR(pos);
                    _this3.jianglibian.node.position = pos;
                    _this3.jianglibian.setAnimation(0, "Map_jiangliban", false);
                    _this3.jianglibian.setCompleteListener(function() {
                      _this3.jianglibian.setCompleteListener(null);
                      _this3.jianglibian.node.active = false;
                      _this3.fishMulti.string = "X" + _this3._collectGame.itemCnt[2];
                    });

                   case 7:
                   case "end":
                    return _context5.stop();
                  }
                }, _callee5);
              })));
              _context6.next = 143;
              return cc.vv.gameData.awaitTime(2);

             case 143:
              _context6.next = 145;
              return _this3.popDialog(2);

             case 145:
              _this3.cutSceneFish(true);
              _context6.next = 148;
              return cc.vv.gameData.awaitTime(1.5);

             case 148:
              pickgameScript = _this3.pickGame.getComponent("PoliticalStrategist_PickGame");
              _this3.pickGame.active = true;
              _context6.next = 152;
              return pickgameScript.startPick(_this3._collectGame);

             case 152:
              _this3._collectGame = pickgameScript.getCollectGame();
              _context6.next = 155;
              return cc.vv.gameData.awaitTime(.5);

             case 155:
              _this3.cutSceneFish(false);
              _context6.next = 158;
              return cc.vv.gameData.awaitTime(1.5);

             case 158:
              _this3.pickGame.active = false;
              _context6.next = 161;
              return cc.vv.gameData.awaitTime(1);

             case 161:
              _this3.popResult(3);

             case 162:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      getWinCoin: function getWinCoin() {
        return this._finalWinCoin;
      },
      cutSceneSanchaji: function cutSceneSanchaji(needMove) {
        Global.SlotsSoundMgr.playEffect("wheelTransition");
        var sanchaji = cc.find("sanchaji", this.node.parent);
        sanchaji.active = true;
        if (needMove) {
          var position = this.role.convertToWorldSpaceAR(cc.v2(0, 0));
          position = this.node.parent.convertToNodeSpaceAR(position);
          sanchaji.position = position;
          cc.tween(sanchaji).to(.3, {
            position: cc.v2(0, 0)
          }).start();
        }
        sanchaji.getComponent(sp.Skeleton).setAnimation(0, "sanchaji_guochang", false);
        sanchaji.getComponent(sp.Skeleton).setCompleteListener(function() {
          sanchaji.getComponent(sp.Skeleton).setCompleteListener(null);
          sanchaji.active = false;
        });
      },
      cutSceneFish: function cutSceneFish(needMove) {
        Global.SlotsSoundMgr.playEffect("koiTransition");
        var fish = cc.find("fish", this.node.parent);
        fish.active = true;
        if (needMove) {
          var position = this.role.convertToWorldSpaceAR(cc.v2(0, 0));
          position = this.node.parent.convertToNodeSpaceAR(position);
          fish.position = position;
          cc.tween(fish).to(.3, {
            position: cc.v2(0, 0)
          }).start();
        }
        fish.getComponent(sp.Skeleton).setAnimation(0, "liyu_guochang", false);
        fish.getComponent(sp.Skeleton).setCompleteListener(function() {
          fish.getComponent(sp.Skeleton).setCompleteListener(null);
          fish.active = false;
        });
      },
      chooseBox: function chooseBox() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var _iterator, _step, child, _iterator3, _step3, child1, _iterator2, _step2, _child, _iterator4, _step4, _child2;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("VO_choose_your_final_prize_EN");
              _this4.boxSelect.active = true;
              _this4.boxSelectBlackBg.opacity = 0;
              cc.tween(_this4.boxSelectBlackBg).to(.5, {
                opacity: 200
              }).start();
              _this4.boxSelectChooseBoard.opacity = 0;
              cc.tween(_this4.boxSelectChooseBoard).to(.5, {
                opacity: 255
              }).start();
              _this4.boxLevelPrize.y = 0;
              _iterator = _createForOfIteratorHelper(_this4.boxLevelPrize.children);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  child = _step.value;
                  child.color = cc.Color.WHITE;
                  _iterator3 = _createForOfIteratorHelper(child.children);
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                      child1 = _step3.value;
                      child1.color = cc.Color.WHITE;
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
              cc.find("parent", _this4.boxLevelPrize).opacity = 0;
              _this4.boxLevelPrizeCoin.string = Global.FormatNumToComma(_this4._collectGame.roundInfo.options.levelPrize);
              cc.tween(_this4.boxLevelPrize).by(.5, {
                y: 250
              }).start();
              cc.tween(cc.find("parent", _this4.boxLevelPrize)).to(.5, {
                opacity: 255
              }).start();
              _this4.boxMysteryPrize.y = 0;
              _iterator2 = _createForOfIteratorHelper(_this4.boxMysteryPrize.children);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  _child = _step2.value;
                  _child.color = cc.Color.WHITE;
                  _iterator4 = _createForOfIteratorHelper(_child.children);
                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                      _child2 = _step4.value;
                      _child2.color = cc.Color.WHITE;
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              cc.find("parent", _this4.boxMysteryPrize).opacity = 0;
              cc.find("parent/between_node", _this4.boxMysteryPrize).active = true;
              cc.find("parent/finish_node", _this4.boxMysteryPrize).active = false;
              _this4.boxMysteryPrizeMinCoin.string = Global.FormatNumToComma(_this4._collectGame.roundInfo.options.min);
              _this4.boxMysteryPrizeCoin.string = Global.FormatNumToComma(_this4._collectGame.roundInfo.options.min);
              _this4.boxMysteryPrizeMaxCoin.string = Global.FormatNumToComma(_this4._collectGame.roundInfo.options.max);
              cc.tween(_this4.boxMysteryPrize).by(.5, {
                y: -250
              }).start();
              cc.tween(cc.find("parent", _this4.boxMysteryPrize)).to(.5, {
                opacity: 255
              }).start();
              _context7.next = 26;
              return cc.vv.gameData.awaitTime(.5);

             case 26:
              _this4.boxLevelPrize.on(cc.Node.EventType.TOUCH_END, function() {
                _this4.boxLevelPrize.off(cc.Node.EventType.TOUCH_END);
                _this4.boxMysteryPrize.off(cc.Node.EventType.TOUCH_END);
                _this4.reqChooseBox(1);
              });
              _this4.boxMysteryPrize.on(cc.Node.EventType.TOUCH_END, function() {
                _this4.boxLevelPrize.off(cc.Node.EventType.TOUCH_END);
                _this4.boxMysteryPrize.off(cc.Node.EventType.TOUCH_END);
                _this4.reqChooseBox(2);
              });

             case 28:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      reqChooseBox: function reqChooseBox(index) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var reqdata, result, spine, _iterator5, _step5, child, _iterator6, _step6, child1, _iterator7, _step7, _child3, _iterator8, _step8, _child4, _spine;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("chestClick");
              reqdata = {
                rtype: 5,
                choiceId: index
              };
              _context8.next = 4;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 4:
              result = _context8.sent;
              if (!(200 === result.code)) {
                _context8.next = 40;
                break;
              }
              _this5._collectGame = result.data.collectGame;
              cc.vv.gameData.getDeskInfo().collectGame = result.data.newCollectGame;
              if (!(1 === result.data.choiceId)) {
                _context8.next = 19;
                break;
              }
              spine = cc.find("spine", _this5.boxLevelPrize).getComponent(sp.Skeleton);
              spine.node.active = true;
              spine.setAnimation(0, "bx_click", false);
              spine.setCompleteListener(function() {
                spine.setCompleteListener(null);
                spine.node.active = false;
              });
              _iterator5 = _createForOfIteratorHelper(_this5.boxMysteryPrize.children);
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  child = _step5.value;
                  child.color = cc.Color.GRAY;
                  _iterator6 = _createForOfIteratorHelper(child.children);
                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                      child1 = _step6.value;
                      child1.color = cc.Color.GRAY;
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              _context8.next = 17;
              return cc.vv.gameData.awaitTime(1);

             case 17:
              _context8.next = 38;
              break;

             case 19:
              _iterator7 = _createForOfIteratorHelper(_this5.boxLevelPrize.children);
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                  _child3 = _step7.value;
                  _child3.color = cc.Color.GRAY;
                  _iterator8 = _createForOfIteratorHelper(_child3.children);
                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                      _child4 = _step8.value;
                      _child4.color = cc.Color.GRAY;
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
              _spine = cc.find("spine", _this5.boxMysteryPrize).getComponent(sp.Skeleton);
              _spine.node.active = true;
              _spine.setAnimation(0, "bx_click", false);
              _spine.setCompleteListener(function() {
                _spine.setCompleteListener(null);
                _spine.node.active = false;
              });
              cc.find("parent/between_node", _this5.boxMysteryPrize).active = false;
              cc.find("parent/finish_node", _this5.boxMysteryPrize).active = true;
              _context8.next = 29;
              return cc.vv.gameData.awaitTime(.5);

             case 29:
              Global.SlotsSoundMgr.playEffect("chestNumbr");
              Global.doRoallNumEff(_this5.boxMysteryPrizeCoin.node, _this5._collectGame.roundInfo.options.min, _this5._collectGame.roundInfo.options["final"], 3, function() {
                Global.SlotsSoundMgr.playEffect("chestPrz");
              }, null, 0, true);
              _context8.next = 33;
              return cc.vv.gameData.awaitTime(3);

             case 33:
              _spine.node.active = true;
              _spine.setAnimation(0, "Num_end", false);
              _spine.setCompleteListener(function() {
                _spine.setCompleteListener(null);
                _spine.node.active = false;
              });
              _context8.next = 38;
              return cc.vv.gameData.awaitTime(1);

             case 38:
              _this5.boxSelect.active = false;
              _this5.popResult(1);

             case 40:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      popDialog: function popDialog(type) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              return _context12.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
                  var parent, btn_start, func;
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("mapbegain");
                      _this6.dialogNode.active = true;
                      parent = cc.find("enter_sanchaji", _this6.dialogNode);
                      1 === type ? parent = cc.find("enter_sanchaji", _this6.dialogNode) : 2 === type && (parent = cc.find("enter_fish", _this6.dialogNode));
                      parent.active = true;
                      parent.scale = 0;
                      cc.tween(parent).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context11.next = 9;
                      return cc.vv.gameData.awaitTime(.5);

                     case 9:
                      btn_start = cc.find("btn_start", parent);
                      btn_start.off("click");
                      func = function() {
                        var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                             case 0:
                              btn_start.off("click");
                              Global.SlotsSoundMgr.playEffect("button");
                              cc.tween(parent).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                _this6.dialogNode.active = false;
                                parent.active = false;
                                success();
                              }).start();

                             case 3:
                             case "end":
                              return _context9.stop();
                            }
                          }, _callee9);
                        }));
                        return function func() {
                          return _ref7.apply(this, arguments);
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

                     case 14:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function(_x2) {
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
      popResult: function popResult(type) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var dialog, func;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              _this7.resultNode.active = true;
              _this7.resultBoxEnd.active = false;
              _this7.resultPearlEnd.active = false;
              _this7.resultSanchajiEnd.active = false;
              Global.SlotsSoundMgr.playEffect("mapend");
              dialog = cc.find("parent", _this7.resultNode);
              dialog.scale = 0;
              cc.tween(dialog).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              cc.find("yifenkuang/coin", dialog).getComponent(cc.Label).string = Global.FormatNumToComma(_this7._collectGame.roundInfo.winCoin);
              if (1 === type) {
                _this7.resultBoxEnd.active = true;
                cc.find("level", _this7.resultBoxEnd).getComponent(cc.Label).string = _this7._collectGame.level;
                cc.find("base_award", _this7.resultBoxEnd).getComponent(cc.Label).string = Global.formatNumShort(_this7._collectGame.roundInfo.baseCoin);
                cc.find("level_prize", _this7.resultBoxEnd).getComponent(cc.Label).string = Global.formatNumShort(_this7._collectGame.roundInfo.winCoin - _this7._collectGame.roundInfo.baseCoin);
              } else if (2 === type) {
                _this7.resultPearlEnd.active = true;
                cc.find("base_award", _this7.resultPearlEnd).getComponent(cc.Label).string = Global.formatNumShort(_this7._collectGame.roundInfo.baseCoin);
                cc.find("multiplier", _this7.resultPearlEnd).getComponent(cc.Label).string = _this7._collectGame.roundInfo.mult;
              } else if (3 === type) {
                _this7.resultSanchajiEnd.active = true;
                cc.find("base_award", _this7.resultSanchajiEnd).getComponent(cc.Label).string = Global.formatNumShort(_this7._collectGame.roundInfo.baseCoin);
                cc.find("mini_game_bonus", _this7.resultSanchajiEnd).getComponent(cc.Label).string = _this7._collectGame.roundInfo.miniGame.winCoin;
              }
              _this7._finalWinCoin = _this7._collectGame.roundInfo.winCoin;
              _context15.next = 13;
              return cc.vv.gameData.awaitTime(.5);

             case 13:
              _this7.btnCollect.off("click");
              func = function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      _this7.btnCollect.off("click");
                      cc.tween(dialog).to(.5, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).call(function() {
                        _this7.resultNode.active = false;
                        _this7._endCallback();
                        _this7._endCallback = null;
                      }).start();

                     case 2:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function func() {
                  return _ref9.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(_this7.btnCollect, func);
              _this7.btnCollect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                   case 0:
                    _this7.btnCollect.stopAllActions();
                    _context14.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context14.stop();
                  }
                }, _callee14);
              })));

             case 17:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      resetRole: function resetRole() {
        this.role_prizeBooster.node.active = false;
        this.role_pearl.node.active = false;
        this.role_box.node.active = false;
        this.role_sanchaji.node.active = false;
        this.role_fish.node.active = false;
        this.role_coin.node.active = false;
      },
      showArrow: function showArrow(index) {
        this._canGo = true;
        this.arrow_up.active = index > 6;
        this.arrow_down.active = index < 55;
        this.arrow_left.active = index % 6 !== 1;
        this.arrow_right.active = index % 6 !== 0;
      },
      hideArrow: function hideArrow() {
        this._canGo = false;
        this.arrow_up.active = false;
        this.arrow_down.active = false;
        this.arrow_left.active = false;
        this.arrow_right.active = false;
      },
      showInfo: function showInfo(index, info) {
        var point = cc.find("point_" + index, this.detail);
        cc.find("bg", point).active = !info.isOpen;
        cc.find("pearl", point).active = info.type === CollectGameItemType.Pearl;
        cc.find("box", point).active = info.type === CollectGameItemType.Mystery;
        cc.find("trident", point).active = info.type === CollectGameItemType.DragonBlade;
        cc.find("prize_booster", point).active = info.type === CollectGameItemType.PrizeBooster;
        cc.find("coin", point).active = info.type === CollectGameItemType.Coin;
        info.type === CollectGameItemType.Coin && (cc.find("coin", point).getComponent(cc.Label).string = Global.formatNumShort(info.coin, 0));
        cc.find("fish", point).active = info.type === CollectGameItemType.GoldenKoi;
      }
    });
    cc._RF.pop();
  }, {} ],
  PoliticalStrategist_PickGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ff73NZUcRJj4Ya77eEdgw/", "PoliticalStrategist_PickGame");
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
    var JackpotGameSymbol = {
      None: 0,
      Mini: 1,
      Minor: 2,
      Major: 3,
      Mega: 4,
      Grand: 5,
      Gold: 6
    };
    var animationName = [ "Mini", "Minor", "Major", "Grand" ];
    cc.Class({
      extends: cc.Component,
      properties: {
        rubyCoin: cc.Label,
        amethystCoin: cc.Label,
        sapphireCoin: cc.Label,
        emeraldCoin: cc.Label,
        layout: cc.Node,
        result_node: cc.Node,
        _successCallback: null,
        _canSelect: false,
        _haveOpenReward: null,
        _winCoin: 0,
        _collectGame: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this._haveOpenReward = [];
        var _loop = function _loop(i) {
          var node = cc.find("item_" + i, _this.layout);
          node.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var req, result, collectGame, miniGame, choiceId, selectItem, spine, animation;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                if (_this._canSelect) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");

               case 2:
                if (!(-1 !== _this._haveOpenReward.indexOf(i))) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return");

               case 4:
                Global.SlotsSoundMgr.playEffect("koiPick");
                req = {
                  rtype: 3,
                  choiceId: i
                };
                _context.next = 8;
                return cc.vv.gameData.reqSubGame(req);

               case 8:
                result = _context.sent;
                if (!(200 === result.code)) {
                  _context.next = 29;
                  break;
                }
                _this._canSelect = false;
                collectGame = result.data.collectGame;
                miniGame = collectGame.roundInfo.miniGame;
                choiceId = result.data.choiceId;
                _this._haveOpenReward.push(choiceId);
                _this._collectGame = collectGame;
                selectItem = cc.find("item_" + choiceId, _this.layout);
                spine = cc.find("spine", selectItem).getComponent(sp.Skeleton);
                animation = animationName[miniGame.items[choiceId - 1].jackpotId - 1];
                spine.setAnimation(0, "Coin_Intro_" + animation + "1_EN", false);
                spine.addAnimation(0, animation + "_Loop_EN", true);
                if (!miniGame.isEnd) {
                  _context.next = 26;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("koiSure");
                _this.endGame(miniGame, choiceId);
                _context.next = 29;
                break;

               case 26:
                _context.next = 28;
                return cc.vv.gameData.awaitTime(1);

               case 28:
                _this._canSelect = true;

               case 29:
               case "end":
                return _context.stop();
              }
            }, _callee);
          })));
        };
        for (var i = 1; i < 13; i++) _loop(i);
      },
      endGame: function endGame(miniGame, lastChoiceId) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var j, info, node, spine, animation;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              for (j = 1; j < 13; j++) {
                info = miniGame.items[j - 1];
                node = cc.find("item_" + j, _this2.layout);
                spine = cc.find("spine", node).getComponent(sp.Skeleton);
                animation = animationName[info.jackpotId - 1];
                info.jackpotId === miniGame.items[lastChoiceId - 1].jackpotId ? spine.setAnimation(0, animation + "_End_EN", true) : info.isOpen || spine.setAnimation(0, "Coin_Intro_" + animation + "2_EN", false);
              }
              _context2.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _this2.popResult(miniGame, lastChoiceId);

             case 4:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      popResult: function popResult(miniGame, lastChoiceId) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var animations, parent, diban, jackpotId, i, title, btn_collect, func;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("fgend");
              animations = [ "lv", "honglan", "zi", "hong" ];
              _this3.result_node.active = true;
              parent = cc.find("parent", _this3.result_node);
              diban = cc.find("DT_diban2", parent).getComponent(sp.Skeleton);
              jackpotId = miniGame.items[lastChoiceId - 1].jackpotId;
              for (i = 1; i < 5; i++) {
                title = cc.find("jackpot_title_" + i, parent);
                title.active = i === jackpotId;
              }
              diban.setAnimation(0, "liyu_" + animations[jackpotId - 1], true);
              parent.scale = 0;
              cc.tween(parent).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              cc.find("yifenkuang/coin", parent).getComponent(cc.Label).string = Global.FormatNumToComma(miniGame.winCoin);
              _context5.next = 13;
              return cc.vv.gameData.awaitTime(.5);

             case 13:
              btn_collect = cc.find("btn_collect", parent);
              btn_collect.off("click");
              func = function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      btn_collect.off("click");
                      Global.SlotsSoundMgr.playEffect("button");
                      cc.tween(parent).to(.5, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).call(function() {
                        _this3.result_node.active = false;
                        parent.active = false;
                        _this3._successCallback();
                        _this3._successCallback = null;
                      }).start();

                     case 3:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function func() {
                  return _ref2.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func);
              btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                   case 0:
                    btn_collect.stopAllActions();
                    _context4.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context4.stop();
                  }
                }, _callee4);
              })));

             case 18:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      startPick: function startPick(collectGame) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("fgbgm");
                _this4.node.active = true;
                _this4.reset();
                _this4._successCallback = success;
                var miniGame = collectGame.roundInfo.miniGame;
                _this4.rubyCoin.string = Global.FormatNumToComma(miniGame.jackpotValues[3]);
                _this4.amethystCoin.string = Global.FormatNumToComma(miniGame.jackpotValues[2]);
                _this4.sapphireCoin.string = Global.FormatNumToComma(miniGame.jackpotValues[1]);
                _this4.emeraldCoin.string = Global.FormatNumToComma(miniGame.jackpotValues[0]);
                _this4._canSelect = true;
                for (var i = 1; i < 13; i++) {
                  var item = cc.find("item_" + i, _this4.layout);
                  var info = miniGame.items[i - 1];
                  var spine = cc.find("spine", item).getComponent(sp.Skeleton);
                  if (info.isOpen) {
                    _this4._haveOpenReward.push(i);
                    var animation = animationName[info.jackpotId - 1];
                    spine.setAnimation(0, animation + "_Loop_EN", true);
                  } else spine.setAnimation(0, "Coin_Loop", true);
                }
              }));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      getCollectGame: function getCollectGame() {
        return this._collectGame;
      },
      reset: function reset() {
        for (var i = 1; i < 13; i++) {
          var item = cc.find("item_" + i, this.layout);
          var spine = cc.find("spine", item).getComponent(sp.Skeleton);
          spine.setAnimation(0, "Coin_Loop", true);
        }
        this.result_node.active = false;
        this._successCallback = null;
        this._canSelect = false;
        this._haveOpenReward = [];
        this._winCoin = 0;
      }
    });
    cc._RF.pop();
  }, {} ],
  PoliticalStrategist_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18df2ajP+5PlpR8O9aCGGKh", "PoliticalStrategist_Reel");
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
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          if (item.GetShowId() === this._cfg.bonusId) {
            Global.SlotsSoundMgr.playEffect("reelFW");
            item.playStopAnimation();
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  PoliticalStrategist_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c0bd+An+9CcaYAuLPI63Vd", "PoliticalStrategist_Slots");
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
        var _this = this;
        this._super();
        var bonus_node = cc.find("collect_node/bonus_node", this.node);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        bonus_node.on(cc.Node.EventType.TOUCH_END, function() {
          deskInfo.needBet > deskInfo.currmult && "idle" === cc.vv.gameData.GetSlotState() && _this._bottomScript.SetBetIdx(deskInfo.needBet);
        });
        var script = cc.find("lock", bonus_node).getComponent(sp.Skeleton);
        script.setCompleteListener(function(track) {
          var name = track.animation ? track.animation.name : "";
          "shangsuo" === name && script.setAnimation(0, "idle", true);
        });
        if (deskInfo.needBet <= deskInfo.currmult) {
          Global.SlotsSoundMgr.playEffect("unlock");
          script.setAnimation(0, "jiesuo", false);
        } else {
          Global.SlotsSoundMgr.playEffect("lock");
          script.setAnimation(0, "shangsuo", false);
        }
        this.updateCollectProgress(deskInfo.collectGame, false);
        var touch_map = cc.find("collect_node/palace", this.node);
        touch_map.off(cc.Node.EventType.TOUCH_END);
        touch_map.on(cc.Node.EventType.TOUCH_END, function() {
          if ("idle" !== cc.vv.gameData.GetSlotState()) return;
          Global.SlotsSoundMgr.playEffect("mapInOut");
          cc.find("map_game", _this.node.parent).getComponent("PoliticalStrategist_Map").openMap(deskInfo.collectGame);
        });
      },
      StartMove: function StartMove() {
        this._super();
        var total = cc.vv.gameData.GetTotalFree();
        var rest = cc.vv.gameData.GetFreeTime();
        cc.find("select_fenghuolun/fg_count_board/times", this.node).getComponent(cc.Label).string = total - rest + "/" + total;
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, rest, script, winCoin;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!deskInfo.bonusGame) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");

             case 3:
              rest = cc.vv.gameData.GetFreeTime();
              if (!rest) {
                _context.next = 13;
                break;
              }
              _context.next = 7;
              return cc.vv.gameData.awaitTime(.2);

             case 7:
              _this2.ShowGameview(true);
              cc.find("select_fenghuolun/bg", _this2.node).active = false;
              cc.find("select_fenghuolun/fg_count_board/times", _this2.node).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree() - rest + "/" + cc.vv.gameData.GetTotalFree();
              _this2.CanDoNextRound();
              _context.next = 25;
              break;

             case 13:
              _this2.ShowGameview(false);
              if (!(0 !== deskInfo.collectGame.state)) {
                _context.next = 25;
                break;
              }
              script = cc.find("map_game", _this2.node.parent).getComponent("PoliticalStrategist_Map");
              _context.next = 18;
              return script.startMapGame(deskInfo.collectGame);

             case 18:
              _this2.clearCollectProgress();
              _this2.cutSceneWave();
              _context.next = 22;
              return cc.vv.gameData.awaitTime(1);

             case 22:
              script.node.active = false;
              winCoin = script.getWinCoin();
              _this2.ShowBottomWin(winCoin, winCoin, true, function() {
                _this2.CanDoNextRound();
              });

             case 25:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var cards, xialuo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._gameInfo = msg;
              cards = msg.resultCards;
              _this3.SetSlotsResult(cards);
              _this3.SetReelStateInfo(cards);
              cc.vv.gameData.getDeskInfo().collectGame = msg.collectGame;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime() === 1) {
                _this3.SetStopTime(5);
                Global.SlotsSoundMgr.playEffect("FWdropDown2");
                xialuo = cc.find("FG_XiaLuo", _this3.node);
                xialuo.active = true;
                xialuo.getComponent(sp.Skeleton).setAnimation(0, "FG_XiaLuo", false);
                xialuo.getComponent(sp.Skeleton).setCompleteListener(function() {
                  Global.SlotsSoundMgr.playEffect("extraAdd");
                  xialuo.getComponent(sp.Skeleton).setCompleteListener(null);
                  xialuo.active = false;
                });
              }

             case 6:
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
              var _iterator = _createForOfIteratorHelper(this._gameInfo.bonusInfo.items), _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  var item = _step.value;
                  if (item.idx === i + 1) {
                    res.data = item;
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i = 0; _i < this._reels.length; _i++) {
          var _item = this._reels[_i];
          var reelRes = reelResults[_i];
          _item.SetResult(reelRes);
        }
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
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this4.collectSymbol();

             case 2:
              _this4.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this4.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var spine, script, spine_finish, _script, _winCoin;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    _context3.next = 2;
                    return _this4.checkBonusSuper();

                   case 2:
                    if (!_this4._gameInfo.bonusInfo.triggerGame) {
                      _context3.next = 30;
                      break;
                    }
                    Global.SlotsSoundMgr.playEffect("triggering");
                    spine = cc.find("fengchenxiuji", _this4.node.parent);
                    spine.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
                    spine.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
                    _context3.next = 9;
                    return cc.vv.gameData.awaitTime(2);

                   case 9:
                    _context3.next = 11;
                    return _this4.popBonusDialog();

                   case 11:
                    _this4.cutSceneFire();
                    _context3.next = 14;
                    return cc.vv.gameData.awaitTime(1);

                   case 14:
                    spine.active = false;
                    script = cc.find("bonus_slots", _this4.node.parent).getComponent("PoliticalStrategist_BonusSlots");
                    cc.vv.gameData.setInBonusGame(true);
                    _context3.next = 19;
                    return script.startBonusGame(_this4._gameInfo.bonusGame);

                   case 19:
                    cc.vv.gameData.setInBonusGame(false);
                    _this4.cutSceneFire();
                    _context3.next = 23;
                    return cc.vv.gameData.awaitTime(1);

                   case 23:
                    _this4.node.active = true;
                    spine.active = true;
                    cc.find("bonus_slots", _this4.node.parent).active = false;
                    Global.SlotsSoundMgr.stopBgm();
                    Global.SlotsSoundMgr.playNormalBgm();
                    _context3.next = 30;
                    return _this4.ShowBottomWin(script.getWinCoin(), script.getWinCoin(), true, null);

                   case 30:
                    if (!(0 !== _this4._gameInfo.collectGame.state && _this4._gameInfo.collectGame.progressData.currCnt > 0)) {
                      _context3.next = 60;
                      break;
                    }
                    _this4._bottomScript.ShowBtnsByState("moveing_1");
                    _context3.next = 34;
                    return cc.vv.gameData.awaitTime(.5);

                   case 34:
                    Global.SlotsSoundMgr.playEffect("nezhaCollectDone");
                    spine_finish = cc.find("collect_node/mask/node/jindutiao/full", _this4.node).getComponent(sp.Skeleton);
                    spine_finish.node.active = true;
                    spine_finish.setToSetupPose();
                    spine_finish.setAnimation(0, "shouji_man", false);
                    spine_finish.setCompleteListener(function() {
                      spine_finish.setCompleteListener(null);
                      spine_finish.node.active = false;
                    });
                    _context3.next = 42;
                    return cc.vv.gameData.awaitTime(1);

                   case 42:
                    _this4.cutSceneWave();
                    _context3.next = 45;
                    return cc.vv.gameData.awaitTime(1);

                   case 45:
                    _this4.clearCollectProgress();
                    _script = cc.find("map_game", _this4.node.parent).getComponent("PoliticalStrategist_Map");
                    Global.SlotsSoundMgr.playEffect("VO_prince_quest_bonus_EN");
                    _context3.next = 50;
                    return _script.startMapGame(_this4._gameInfo.collectGame);

                   case 50:
                    _this4.cutSceneWave();
                    _context3.next = 53;
                    return cc.vv.gameData.awaitTime(1);

                   case 53:
                    _script.node.active = false;
                    Global.SlotsSoundMgr.stopBgm();
                    Global.SlotsSoundMgr.playNormalBgm();
                    _winCoin = _script.getWinCoin();
                    _this4.ShowBottomWin(_winCoin, _winCoin, true, function() {
                      _this4.CanDoNextRound();
                    });
                    _context3.next = 61;
                    break;

                   case 60:
                    _this4.CheckEnterFreeGame() ? _this4.triggerFreeGame() : _this4.CheckExitFreeGame() ? _this4.triggerExitFreeGame() : _this4.CanDoNextRound();

                   case 61:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })));

             case 7:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      checkBonusSuper: function checkBonusSuper() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var haveSuper, _iterator2, _step2, item, _iterator3, _step3, subItem, symbol, _iterator4, _step4, _subItem, _symbol;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      haveSuper = false;
                      _iterator2 = _createForOfIteratorHelper(_this5._gameInfo.bonusInfo.items);
                      _context5.prev = 2;
                      _iterator2.s();

                     case 4:
                      if ((_step2 = _iterator2.n()).done) {
                        _context5.next = 18;
                        break;
                      }
                      item = _step2.value;
                      if (!item.isSuper) {
                        _context5.next = 16;
                        break;
                      }
                      haveSuper = true;
                      Global.SlotsSoundMgr.playEffect("FWspecial");
                      _iterator3 = _createForOfIteratorHelper(item.subItems);
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                          subItem = _step3.value;
                          symbol = _this5.GetSymbolByIdx(subItem.idx);
                          symbol && function() {
                            var pos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                            pos = _this5.node.parent.convertToNodeSpaceAR(pos);
                            var BiankuangRaoGuantg = cc.instantiate(cc.find("BiankuangRaoGuantg", _this5.node.parent));
                            BiankuangRaoGuantg.active = true;
                            BiankuangRaoGuantg.position = pos;
                            BiankuangRaoGuantg.parent = _this5.node.parent;
                            BiankuangRaoGuantg.getComponent(sp.Skeleton).setAnimation(0, "BiankuangRaoGuantg", false);
                            BiankuangRaoGuantg.getComponent(sp.Skeleton).setCompleteListener(function() {
                              BiankuangRaoGuantg.getComponent(sp.Skeleton).setCompleteListener(null);
                              BiankuangRaoGuantg.removeFromParent();
                            });
                          }();
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                      _context5.next = 13;
                      return cc.vv.gameData.awaitTime(1);

                     case 13:
                      _iterator4 = _createForOfIteratorHelper(item.subItems);
                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                          _subItem = _step4.value;
                          _symbol = _this5.GetSymbolByIdx(_subItem.idx);
                          if (_symbol) {
                            _symbol.ShowById(_this5._cfg.bonusId, _subItem);
                            _symbol.playStopAnimation();
                          }
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                      return _context5.abrupt("break", 18);

                     case 16:
                      _context5.next = 4;
                      break;

                     case 18:
                      _context5.next = 23;
                      break;

                     case 20:
                      _context5.prev = 20;
                      _context5.t0 = _context5["catch"](2);
                      _iterator2.e(_context5.t0);

                     case 23:
                      _context5.prev = 23;
                      _iterator2.f();
                      return _context5.finish(23);

                     case 26:
                      if (!haveSuper) {
                        _context5.next = 32;
                        break;
                      }
                      _context5.next = 29;
                      return cc.vv.gameData.awaitTime(2);

                     case 29:
                      success();
                      _context5.next = 33;
                      break;

                     case 32:
                      success();

                     case 33:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5, null, [ [ 2, 20, 23, 26 ] ]);
                }));
                return function(_x) {
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
      cutSceneWave: function cutSceneWave() {
        Global.SlotsSoundMgr.playEffect("mapTransition");
        var wave = cc.find("wave", this.node.parent);
        wave.active = true;
        var spine = wave.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "map_guochang", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          wave.active = false;
        });
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.find("collect_node", this.node).active = !bFree;
        cc.find("select_fenghuolun", this.node).active = bFree;
      },
      collectSymbol: function collectSymbol() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var nezha, haveCollect, i, card, symbol, img, startPos, endPos;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime())) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");

             case 2:
              if (!(0 === _this6._gameInfo.collectGame.progressData.currCnt)) {
                _context7.next = 4;
                break;
              }
              return _context7.abrupt("return");

             case 4:
              nezha = cc.find("collect_node/nezha", _this6.node);
              haveCollect = false;
              for (i = 0; i < _this6._gameInfo.resultCards.length; i++) {
                card = _this6._gameInfo.resultCards[i];
                if (card === _this6._cfg.collectSymbolId) {
                  symbol = _this6.GetSymbolByIdx(i + 1);
                  if (symbol) {
                    haveCollect = true;
                    img = cc.instantiate(cc.find("img_nezha", _this6.node.parent));
                    img.active = true;
                    img.parent = _this6.node.parent;
                    startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this6.node.parent.convertToNodeSpaceAR(startPos);
                    img.position = startPos;
                    endPos = nezha.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = _this6.node.parent.convertToNodeSpaceAR(endPos);
                    cc.tween(img).parallel(cc.tween().to(.5, {
                      position: endPos
                    }), cc.tween().to(.2, {
                      scale: 1.2
                    }).to(.3, {
                      scale: .6
                    })).removeSelf().start();
                  }
                }
              }
              if (!haveCollect) {
                _context7.next = 13;
                break;
              }
              cc.tween(nezha).delay(.5).call(function() {
                Global.SlotsSoundMgr.playEffect("nezhaCollect");
                var spine = nezha.getComponent(sp.Skeleton);
                spine.setAnimation(0, "nezha_zhongjiang", false);
                spine.addAnimation(0, "nezha_idle", true);
              }).start();
              _context7.next = 11;
              return cc.vv.gameData.awaitTime(.5);

             case 11:
              _context7.next = 13;
              return _this6.updateCollectProgress(_this6._gameInfo.collectGame, true);

             case 13:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      cutSceneLotus: function cutSceneLotus() {
        Global.SlotsSoundMgr.playEffect("fgTransition");
        var lotus = cc.find("lotus", this.node.parent);
        lotus.active = true;
        var spine = lotus.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "skill", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          lotus.active = false;
        });
      },
      cutSceneFire: function cutSceneFire() {
        Global.SlotsSoundMgr.playEffect("bgTransition");
        var fire = cc.find("fire", this.node.parent);
        fire.active = true;
        var spine = fire.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "HuoYanGuoChang", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          fire.active = false;
        });
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              for (i = 0; i < _this7._gameInfo.resultCards.length; i++) {
                card = _this7._gameInfo.resultCards[i];
                if (card === _this7._cfg.scatterId) {
                  symbol = _this7.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              _context8.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context8.next = 7;
              return _this7.popFreeDialog();

             case 7:
              _this7.cutSceneLotus();
              _context8.next = 10;
              return cc.vv.gameData.awaitTime(2);

             case 10:
              _this7.Backup();
              _this7.ShowGameview(true);
              _context8.next = 14;
              return _this7.selectFireWheel();

             case 14:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");
              _this7.CanDoNextRound();

             case 17:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      StopMove: function StopMove() {
        if (cc.vv.gameData.getInBonusGame()) {
          cc.find("bonus_slots", this.node.parent).getComponent("PoliticalStrategist_BonusSlots").StopMove();
          return;
        }
        this._super();
      },
      selectFireWheel: function selectFireWheel() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
                  var select_fenghuolun, bg, black_bg, array, _loop, i;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      select_fenghuolun = cc.find("select_fenghuolun", _this8.node);
                      select_fenghuolun.active = true;
                      bg = cc.find("bg", select_fenghuolun);
                      bg.active = true;
                      black_bg = cc.find("black_bg", bg);
                      black_bg.active = false;
                      array = [ 20, 30, 40, 50, 60 ];
                      array.sort(function() {
                        return Math.random() - .5;
                      });
                      _loop = function _loop(i) {
                        var fireWheel = cc.find("firewheel_" + i, bg);
                        fireWheel.active = true;
                        cc.find("gray", fireWheel).active = false;
                        var spine = cc.find("spine", fireWheel);
                        spine.scale = .5;
                        spine.active = true;
                        cc.find("tips", spine).active = false;
                        cc.find("num", spine).active = false;
                        spine.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_Loop1", true);
                        fireWheel.off(cc.Node.EventType.TOUCH_END);
                        fireWheel.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          var j, wheel, _loop2, _j;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("FWpick");
                              for (j = 1; j < 6; j++) {
                                wheel = cc.find("firewheel_" + j, bg);
                                wheel.off(cc.Node.EventType.TOUCH_END);
                              }
                              _loop2 = function _loop2(_j) {
                                var wheel = cc.find("firewheel_" + _j, bg);
                                if (_j !== i) {
                                  cc.find("gray", wheel).active = true;
                                  cc.find("spine", wheel).active = false;
                                  cc.find("gray/num", wheel).getComponent(cc.Label).string = array[_j - 1];
                                } else {
                                  cc.find("gray", wheel).active = false;
                                  cc.find("spine", wheel).active = true;
                                  cc.find("spine/num", wheel).getComponent(cc.Label).string = array[_j - 1];
                                  var chengbeitishi = cc.find("ChengBeiTiShi", bg);
                                  chengbeitishi.active = true;
                                  chengbeitishi.position = wheel.position;
                                  chengbeitishi.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_FGNG_TiShi", false);
                                  chengbeitishi.getComponent(sp.Skeleton).setCompleteListener(function() {
                                    chengbeitishi.getComponent(sp.Skeleton).setCompleteListener(null);
                                    chengbeitishi.active = false;
                                    var copyWheel = cc.instantiate(cc.vv.gameData.GetPrefabByName("firewheel"));
                                    copyWheel.parent = wheel.parent;
                                    copyWheel.position = wheel.position;
                                    wheel.active = false;
                                    var black_bg = cc.find("black_bg", bg);
                                    black_bg.active = true;
                                    black_bg.opacity = 0;
                                    cc.tween(black_bg).to(.5, {
                                      opacity: 200
                                    }).start();
                                    cc.find("spine", copyWheel).getComponent(sp.Skeleton).setAnimation(0, "HuoLun_Loop2", true);
                                    cc.find("gray", copyWheel).active = false;
                                    cc.find("spine", copyWheel).active = true;
                                    cc.find("spine/num", copyWheel).getComponent(cc.Label).string = array[_j - 1];
                                    cc.tween(copyWheel).to(.5, {
                                      position: cc.v2(0, 0),
                                      scale: 1.5
                                    }).call(function() {
                                      Global.SlotsSoundMgr.playEffect("FWzoomin");
                                      var chengbeitishi = cc.find("ChengBeiTiShi", bg);
                                      chengbeitishi.active = true;
                                      chengbeitishi.position = copyWheel.position;
                                      chengbeitishi.getComponent(sp.Skeleton).setAnimation(0, "HuoLun_FGDA_TiShi", false);
                                      chengbeitishi.getComponent(sp.Skeleton).setCompleteListener(function() {
                                        chengbeitishi.getComponent(sp.Skeleton).setCompleteListener(null);
                                        chengbeitishi.active = false;
                                      });
                                    }).delay(2.9).removeSelf().start();
                                  });
                                }
                              };
                              for (_j = 1; _j < 6; _j++) _loop2(_j);
                              _context9.next = 6;
                              return cc.vv.gameData.awaitTime(3);

                             case 6:
                              bg.active = false;
                              success();

                             case 8:
                             case "end":
                              return _context9.stop();
                            }
                          }, _callee9);
                        })));
                      };
                      for (i = 1; i < 6; i++) _loop(i);

                     case 10:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x2) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      triggerExtraFreeGame: function triggerExtraFreeGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              _this9._bottomScript.ShowBtnsByState("moveing_1");
              for (i = 0; i < _this9._gameInfo.resultCards.length; i++) {
                card = _this9._gameInfo.resultCards[i];
                if (card === _this9._cfg.extraSpinId) {
                  symbol = _this9.GetSymbolByIdx(i + 1);
                  symbol.playTriggerAnimation();
                }
              }
              cc.vv.AudioManager.playEff("games/SpookyHalloween/", "bell", true);
              _context12.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _context12.next = 7;
              return _this9.popFreeDialog(true);

             case 7:
              _this9.CanDoNextRound();

             case 8:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              _this10._bottomScript.ShowBtnsByState("moveing_1");
              _context13.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context13.next = 5;
              return _this10.popFreeResultDialog();

             case 5:
              _this10.cutSceneLotus();
              _context13.next = 8;
              return cc.vv.gameData.awaitTime(2);

             case 8:
              _this10.Resume();
              _this10.ShowGameview(false);
              _context13.next = 12;
              return cc.vv.gameData.awaitTime(1);

             case 12:
              _this10.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this10.CanDoNextRound();
              });

             case 13:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      popBonusDialog: function popBonusDialog() {
        var _this11 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success) {
            var free_dialog, dialog, freetanchuang, congratulation, fireWheelsBonus_EN, each_EN, btn_start, func;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("bgbegain");
                Global.SlotsSoundMgr.playEffect("VO_fire_wheel_bonus_EN");
                free_dialog = cc.find("free_dialog", _this11.node.parent);
                free_dialog.active = true;
                dialog = cc.find("bonus_enter_node", free_dialog);
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
                fireWheelsBonus_EN = cc.find("fireWheelsBonus_EN", dialog);
                fireWheelsBonus_EN.scale = 0;
                cc.tween(fireWheelsBonus_EN).delay(.2).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                each_EN = cc.find("each_EN", dialog);
                each_EN.scale = 0;
                cc.tween(each_EN).delay(.3).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                btn_start = cc.find("btn_start", dialog);
                btn_start.scale = 0;
                cc.tween(btn_start).delay(.4).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context16.next = 24;
                return cc.vv.gameData.awaitTime(1);

               case 24:
                btn_start.off("click");
                func = function() {
                  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                      while (1) switch (_context14.prev = _context14.next) {
                       case 0:
                        btn_start.off("click");
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
                        return _context14.stop();
                      }
                    }, _callee14);
                  }));
                  return function func() {
                    return _ref6.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      btn_start.stopAllActions();
                      _context15.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee15);
                })));

               case 28:
               case "end":
                return _context16.stop();
              }
            }, _callee16);
          }));
          return function(_x3) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      popFreeDialog: function popFreeDialog() {
        var _this12 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(success) {
            var free_dialog, dialog, freetanchuang, congratulation, you_won_EN, times, free_games_EN, btn_start, func;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgbegain");
                Global.SlotsSoundMgr.playEffect("VO_free_games_EN");
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
                _context19.next = 28;
                return cc.vv.gameData.awaitTime(1);

               case 28:
                btn_start.off("click");
                func = function() {
                  var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                      while (1) switch (_context17.prev = _context17.next) {
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
                        return _context17.stop();
                      }
                    }, _callee17);
                  }));
                  return function func() {
                    return _ref9.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      btn_start.stopAllActions();
                      _context18.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                })));

               case 32:
               case "end":
                return _context19.stop();
              }
            }, _callee19);
          }));
          return function(_x4) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this13 = this;
        return new Promise(function() {
          var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(success) {
            var free_dialog, dialog, freetanchuang, congratulation, total_won_EN, yifenkuang, in_free_games_EN, times, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) switch (_context22.prev = _context22.next) {
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
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                total_won_EN = cc.find("total_won_EN", dialog);
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
                in_free_games_EN = cc.find("in_free_games_EN", dialog);
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
                _context22.next = 29;
                return cc.vv.gameData.awaitTime(1);

               case 29:
                btn_collect.off("click");
                func = function() {
                  var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
                    return regeneratorRuntime.wrap(function _callee20$(_context20) {
                      while (1) switch (_context20.prev = _context20.next) {
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
                        return _context20.stop();
                      }
                    }, _callee20);
                  }));
                  return function func() {
                    return _ref12.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
                  return regeneratorRuntime.wrap(function _callee21$(_context21) {
                    while (1) switch (_context21.prev = _context21.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context21.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context21.stop();
                    }
                  }, _callee21);
                })));

               case 33:
               case "end":
                return _context22.stop();
              }
            }, _callee22);
          }));
          return function(_x5) {
            return _ref11.apply(this, arguments);
          };
        }());
      },
      updateCollectProgress: function updateCollectProgress(collectGame, isAdd) {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          var progress, lizi;
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
             case 0:
              progress = cc.find("collect_node/mask/node", _this14.node);
              if (isAdd) {
                lizi = cc.find("jindutiao/lizi", progress);
                lizi.active = true;
                cc.tween(lizi).delay(.3).call(function() {
                  lizi.active = false;
                }).start();
                cc.tween(progress).to(.3, {
                  x: 537 * (collectGame.progressData.totalCnt / collectGame.progressData.needCnt > 1 ? 1 : collectGame.progressData.totalCnt / collectGame.progressData.needCnt)
                }).start();
              } else progress.x = 537 * (collectGame.progressData.totalCnt / collectGame.progressData.needCnt > 1 ? 1 : collectGame.progressData.totalCnt / collectGame.progressData.needCnt);

             case 2:
             case "end":
              return _context23.stop();
            }
          }, _callee23);
        }))();
      },
      clearCollectProgress: function clearCollectProgress() {
        var progress = cc.find("collect_node/mask/node", this.node);
        progress.x = 0;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  PoliticalStrategist_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e67b7hVlNhJg6Dar4aRIks+", "PoliticalStrategist_Symbol");
    "use strict";
    var BonusType = {
      Coin: 1,
      Double: 2,
      JackpotWheel: 3
    };
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.showBonus();
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (id !== cfg.bonusId) this._super(); else {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          this.node.zIndex = 200 - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = this._showNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            nodeSp.clearTracks();
            nodeSp.setToSetupPose();
            if (this._data.isJackpot) {
              nodeSp.setAnimation(0, "HuoLun_Jackpot_Intro", false);
              nodeSp.addAnimation(0, "HuoLun_Jackpot_Loop", true);
            } else if (this._data.isSuper) {
              nodeSp.setAnimation(0, "HuoLun_Super_Intro", false);
              nodeSp.addAnimation(0, "HuoLun_Super_Loop", true);
            } else {
              nodeSp.setAnimation(0, "HuoLun_X" + this._data.mult + "_Intro", false);
              nodeSp.addAnimation(0, "HuoLun_X" + this._data.mult + "_Loop", true);
            }
          }
        }
      },
      showWheelCoin: function showWheelCoin(num) {
        var _this = this;
        var nodeSp = this._showNode.getComponent(sp.Skeleton);
        if (nodeSp) {
          nodeSp.setAnimation(0, "HuoLun_yingfen_Intro2", false);
          nodeSp.setCompleteListener(function() {
            nodeSp.setCompleteListener(null);
            cc.find("coin", _this._showNode).active = true;
            cc.find("coin", _this._showNode).getComponent(cc.Label).string = Global.formatNumShort(num, 0);
            nodeSp.setAnimation(0, "HuoLun_Loop1", true);
          });
        }
      },
      playidleAnimation: function playidleAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (id !== cfg.bonusId) this._super(); else {
          this._state = "idle";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          this.node.zIndex = 200 - this._symbolIdx + 10 * this._reelIdx;
          isPlay = true;
          var nodeSp = this._showNode.getComponent(sp.Skeleton);
          nodeSp && (this._data.isJackpot ? nodeSp.setAnimation(0, "HuoLun_Jackpot_Loop", true) : this._data.isSuper ? nodeSp.setAnimation(0, "HuoLun_Super_Loop", true) : nodeSp.setAnimation(0, "HuoLun_X" + this._data.mult + "_Loop", true));
        }
        return isPlay;
      },
      showBonus: function showBonus() {
        if (this._id === cc.vv.gameData.getGameCfg().bonusId) {
          var icon = cc.find("icon", this._showNode);
          var indexs = [ 2, 3, 5, 8, 10, 15, 30 ];
          this._data && icon ? this._data.isJackpot ? icon.getComponent("ImgSwitchCmp").setIndex(8) : this._data.isSuper ? icon.getComponent("ImgSwitchCmp").setIndex(7) : icon.getComponent("ImgSwitchCmp").setIndex(indexs.indexOf(this._data.mult)) : icon && icon.getComponent("ImgSwitchCmp").setIndex(Math.floor(9 * Math.random()));
        }
      },
      getBonusSpine: function getBonusSpine() {
        return this._showNode.getComponent(sp.Skeleton);
      },
      showNormalBonus: function showNormalBonus() {
        this._state = "normal";
        this._showNode && (this._showNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node) {
          this._showNode = cc.find(cfg.symbol[this._id].node, this.node);
          this._showNode.active = true;
          cc.find("icon", this._showNode).active = false;
        } else console.log("\u672a\u627e\u5230\u914d\u7f6eid:" + id);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  PoliticalStrategist_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75eadl23hdAMZf3A0B/bL1m", "PoliticalStrategist_Wheel");
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
        black_bg: cc.Node,
        wheel_node: cc.Node,
        wheel: cc.Node,
        spine_win: sp.Skeleton,
        btn_spin: cc.Node,
        result_node: cc.Node,
        _successCallback: null,
        _collectGame: null
      },
      startWheel: function startWheel(collectGame) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("fgbgm");
                _this._successCallback = success;
                _this.node.active = true;
                var cfg = collectGame.roundInfo.miniGame.items;
                for (var i = 1; i < cfg.length; i++) {
                  var item = cfg[i];
                  var node = cc.find("index_" + (i + 1), _this.wheel);
                  node && (node.getComponent(cc.Label).string = Global.formatNumShort(item.coin, 0));
                }
                _this.wheel_node.active = true;
                _this.wheel.rotation = 0;
                _this.spine_win.node.active = false;
                _this.btn_spin.off("click");
                var func = function() {
                  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var reqdata, result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("WheelClick");
                        _this.btn_spin.off("click");
                        reqdata = {
                          rtype: 4
                        };
                        _context.next = 5;
                        return cc.vv.gameData.reqSubGame(reqdata);

                       case 5:
                        result = _context.sent;
                        if (!(200 === result.code)) {
                          _context.next = 16;
                          break;
                        }
                        _this._collectGame = result.data.collectGame;
                        Global.SlotsSoundMgr.playEffect("WheelSpin");
                        _context.next = 11;
                        return _this._rotateWheel(result.data.collectGame.roundInfo.miniGame.resultId - 1);

                       case 11:
                        Global.SlotsSoundMgr.playEffect("WheelStop");
                        _this.spine_win.node.active = true;
                        _context.next = 15;
                        return cc.vv.gameData.awaitTime(2);

                       case 15:
                        _this.popResult(result.data.collectGame);

                       case 16:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function func() {
                    return _ref.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(_this.btn_spin, func);
                _this.btn_spin.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      _this.btn_spin.stopAllActions();
                      _context2.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      getCollectGame: function getCollectGame() {
        return this._collectGame;
      },
      popResult: function popResult(collectGame) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var parent, btn_collect, func;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("fgend");
              _this2.result_node.active = true;
              parent = cc.find("parent", _this2.result_node);
              parent.active = true;
              parent.scale = 0;
              cc.tween(parent).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              cc.find("yifenkuang/coin", parent).getComponent(cc.Label).string = Global.FormatNumToComma(collectGame.roundInfo.miniGame.winCoin);
              _context6.next = 9;
              return cc.vv.gameData.awaitTime(.5);

             case 9:
              btn_collect = cc.find("btn_collect", parent);
              btn_collect.off("click");
              func = function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      btn_collect.off("click");
                      Global.SlotsSoundMgr.playEffect("button");
                      cc.tween(parent).to(.5, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).call(function() {
                        _this2.result_node.active = false;
                        parent.active = false;
                        _this2._successCallback();
                        _this2._successCallback = null;
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

             case 14:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      _rotateWheel: function _rotateWheel(endIndex) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function(success) {
                var angle = 45 * endIndex - 2160;
                cc.log(angle);
                var action = cc.rotateBy(6, angle).easing(cc.easeSineInOut());
                _this3.wheel.runAction(cc.sequence(action, cc.callFunc(function() {
                  success();
                })));
              }));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "PoliticalStrategist_BonusReel", "PoliticalStrategist_BonusSlots", "PoliticalStrategist_Cfg", "PoliticalStrategist_GameData", "PoliticalStrategist_Logic", "PoliticalStrategist_Map", "PoliticalStrategist_PickGame", "PoliticalStrategist_Reel", "PoliticalStrategist_Slots", "PoliticalStrategist_Symbol", "PoliticalStrategist_Wheel" ]);