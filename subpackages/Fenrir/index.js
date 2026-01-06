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
  Fenrir_BonusGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19978kmDMVIDIkU8t9BB248", "Fenrir_BonusGameMgr");
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
        _bonusId: 3
      },
      Init: function Init() {
        this._bonusId = 3;
        this.node.active = true;
        this._mainNode = cc.find("mainnode", this.node);
        this._mainNode.active = false;
        this._transition2Node = cc.find("transition2", this.node);
        this._topSlotsScript = cc.find("slots_top", this._mainNode).addComponent("Fenrir_BonusSlots");
        this._bottomSlotsScript = cc.find("slots", this._mainNode).addComponent("Fenrir_BonusSlots");
        this._topType = 1;
        this._bottomType = 2;
        this._topSlotsScript.Init(this._topType);
        this._bottomSlotsScript.Init(this._bottomType);
        this._slots_top = cc.find("slots_top", this._mainNode);
        this._slots_bottom = cc.find("slots", this._mainNode);
        this._spine_wolf = cc.find("slots_top/spine_wolf", this._mainNode);
        this._settleNode = cc.find("slots_top/settleNode", this._mainNode);
        this._node_top = cc.find("node_top", this._mainNode);
        this._flyNode = cc.find("flyNode", this._mainNode);
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName("bonus_Symbol");
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
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
                      Global.SlotsSoundMgr.playBgm("respin_bgm");
                      cc.vv.gameData.setIsBonusGame(true);
                      _this._subGameData = bonusdata;
                      if (!(1 === _this._subGameData.state)) {
                        _context.next = 17;
                        break;
                      }
                      _context.next = 6;
                      return cc.vv.gameData.getUIMgr().showBonusGamePickOneUI();

                     case 6:
                      _this._subGameData = cc.vv.gameData.getBonusGame();
                      _context.next = 9;
                      return cc.vv.gameData.getUIMgr().showBonusStartUI(_this._subGameData.totalSpinCnt, 2);

                     case 9:
                      cc.vv.gameData.getUIMgr().playBonusQPAnim();
                      _context.next = 12;
                      return cc.vv.gameData.awaitTime(.5);

                     case 12:
                      cc.vv.gameData.GetBottomScript().SetWin(0);
                      _context.next = 15;
                      return _this.showBonusGameUI(true);

                     case 15:
                      _context.next = 30;
                      break;

                     case 17:
                      if (!(2 === _this._subGameData.state)) {
                        _context.next = 27;
                        break;
                      }
                      _context.next = 20;
                      return _this.showBonusGameUI(false);

                     case 20:
                      _context.next = 22;
                      return cc.vv.gameData.getUIMgr().showBonusAddSpinsUI();

                     case 22:
                      _this._subGameData = cc.vv.gameData.getBonusGame();
                      _this._curCnt = _this._subGameData.totalSpinCnt - _this._subGameData.spinCnt;
                      _this._totalCnt = _this._subGameData.totalSpinCnt;
                      _context.next = 30;
                      break;

                     case 27:
                      if (!(0 === _this._subGameData.state)) {
                        _context.next = 30;
                        break;
                      }
                      _context.next = 30;
                      return _this.showBonusGameUI(false);

                     case 30:
                      _this.reqSpine();
                      _this._callBack = success;

                     case 32:
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
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              AppLog.log("###bonus\u6e38\u620f\u7ed3\u675f");
              _context3.next = 3;
              return _this2.showBonusSettlement();

             case 3:
              _context3.next = 5;
              return cc.vv.gameData.getUIMgr().showBonusEndUI(_this2._subGameData);

             case 5:
              cc.vv.gameData.getUIMgr().playBonusQPAnim();
              _context3.next = 8;
              return cc.vv.gameData.awaitTime(.5);

             case 8:
              cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
              _this2._mainNode.active = false;
              _context3.next = 12;
              return cc.vv.gameData.awaitTime(2);

             case 12:
              _context3.next = 14;
              return new Promise(function(sucess, failed) {
                var nWin = _this2._subGameData.winCoin;
                var nTotal = _this2._subGameData.winCoin;
                if (cc.vv.gameData.isFreeGame()) {
                  nTotal = cc.vv.gameData.getFreeWinCoin() + _this2._subGameData.winCoin;
                  cc.vv.gameData.setFreeWinCoin(nTotal);
                  cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nTotal, false, function() {
                    sucess();
                  });
                } else {
                  cc.vv.gameData.AddCoin(_this2._subGameData.winCoin);
                  cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nTotal, true, function() {
                    sucess();
                  });
                }
              });

             case 14:
              if (_this2._callBack) {
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.gameData.setIsBonusGame(false);
                _this2._callBack();
                _this2._callBack = null;
                _this2._subGameData = null;
              }
              if (cc.vv.gameData.isBoxGame() && !cc.vv.gameData.isFreeGame()) {
                cc.vv.gameData.getBoxGameMgr().openBoxUI();
                cc.vv.gameData.setIsBoxGame(false);
              }

             case 16:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showBonusGameUI: function showBonusGameUI(isShop) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      _this3._mainNode.active = true;
                      _this3.lockJackpot(_this3._subGameData.jackpotValues);
                      _this3._totalCnt = _this3._subGameData.totalSpinCnt;
                      _this3._curCnt = _this3._subGameData.totalSpinCnt - _this3._subGameData.spinCnt;
                      cc.vv.gameData.GetBottomScript().ShowFreeModel(true, _this3._curCnt, _this3._totalCnt);
                      _this3._bonusType = _this3._subGameData.type;
                      _this3.topShow();
                      if (!isShop) {
                        _context4.next = 12;
                        break;
                      }
                      _context4.next = 10;
                      return _this3.showTriAnimFromShop();

                     case 10:
                      _context4.next = 14;
                      break;

                     case 12:
                      _context4.next = 14;
                      return _this3.showBonusSlotsUI();

                     case 14:
                      success();

                     case 15:
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
      showTriAnimFromShop: function showTriAnimFromShop() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
                  var spine_xue;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _context6.next = 2;
                      return cc.vv.gameData.awaitTime(0);

                     case 2:
                      _this4._slots_top.position = _this4._slots_bottom.position;
                      _this4._bottomSlotsScript.initAllSymbol();
                      _this4._topSlotsScript.initAllSymbol();
                      _this4._spine_wolf.active = false;
                      _this4._settleNode.active = false;
                      _context6.next = 9;
                      return cc.vv.gameData.awaitTime(1);

                     case 9:
                      _context6.next = 11;
                      return _this4.playStartSymbolAnim(_this4._subGameData.slots[1].bonusItems, false);

                     case 11:
                      Global.SlotsSoundMgr.playEffect("nudge");
                      cc.tween(_this4._slots_top).to(.5, {
                        position: cc.find("pos_top", _this4._mainNode).position
                      }).start();
                      spine_xue = cc.find("spine_xue", _this4._slots_top);
                      cc.vv.gameData.playSpine(spine_xue, "animation", false, function() {
                        spine_xue.active = false;
                      });
                      _context6.next = 17;
                      return cc.vv.gameData.awaitTime(.7);

                     case 17:
                      _context6.next = 19;
                      return _this4.playStartSymbolAnim(_this4._subGameData.slots[0].bonusItems, true);

                     case 19:
                      cc.vv.gameData.playSpine(_this4._spine_wolf, "animation", true);
                      _this4.initSettleState();
                      _context6.next = 23;
                      return cc.vv.gameData.getUIMgr().showBonusDoubleStartUI();

                     case 23:
                      success();

                     case 24:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x5, _x6) {
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
      showBonusSlotsUI: function showBonusSlotsUI() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _this5._bottomSlotsScript.initAllSymbol();
                      _this5._topSlotsScript.initAllSymbol();
                      _this5.scheduleOnce(function() {
                        _this5._slots_top.position = cc.find("pos_top", _this5._mainNode).position;
                        _this5.initSettleState();
                        var self = _this5;
                        _this5._subGameData.slots[1].bonusItems.forEach(function(item) {
                          self.showSymbolNormalAnim(item, false);
                        });
                        _this5._subGameData.slots[0].bonusItems.forEach(function(item) {
                          self.showSymbolNormalAnim(item, true);
                        });
                      }, 0);
                      _context8.next = 5;
                      return cc.vv.gameData.awaitTime(2);

                     case 5:
                      success();

                     case 6:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x7, _x8) {
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
      showSymbolNormalAnim: function showSymbolNormalAnim(data, isTop) {
        var col = data.idx - 1;
        var slots = isTop ? this._topSlotsScript : this._bottomSlotsScript;
        var symbol = slots.GetSymbolByIdx(data.idx);
        symbol.ShowById(this._bonusId, {
          bonus: data
        });
        symbol.playBonusFireAnim(true);
      },
      playStartSymbolAnim: function playStartSymbolAnim(bonusItems, isTop) {
        var _this6 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
            var _loop, i;
            return regeneratorRuntime.wrap(function _callee10$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                bonusItems.sort(function(a, b) {
                  return a.idx / 5 - b.idx / 5;
                }).sort(function(a, b) {
                  return (a.idx - 1) % 5 - (b.idx - 1) % 5;
                });
                _loop = regeneratorRuntime.mark(function _loop(i) {
                  var col, coin, jp, symbol, flyNode, moon, burst, startNode, endPos, _symbol;
                  return regeneratorRuntime.wrap(function _loop$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      col = bonusItems[i].idx - 1;
                      coin = bonusItems[i].coin;
                      jp = bonusItems[i].jackpot;
                      if (isTop) {
                        symbol = _this6._topSlotsScript.GetSymbolByIdx(bonusItems[i].idx);
                        flyNode = cc.instantiate(_this6._flyNode);
                        flyNode.parent = _this6._node_top;
                        moon = cc.find("moon", flyNode);
                        burst = cc.find("burst", flyNode);
                        moon.active = false;
                        burst.active = false;
                        startNode = _this6._bottomSlotsScript.GetSymbolByIdx(bonusItems[i].idx).node;
                        flyNode.position = _this6._node_top.convertToNodeSpaceAR(startNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                        endPos = _this6._node_top.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                        moon.active = true;
                        moon.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                        cc.tween(flyNode).to(.5, {
                          position: endPos
                        }).call(function() {
                          moon.active = false;
                          symbol.ShowById(_this6._bonusId, {
                            bonus: bonusItems[i]
                          });
                          symbol.playBonusFireAnim(true);
                          burst.active = true;
                          burst.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                          burst.getComponent(sp.Skeleton).setCompleteListener(function() {
                            flyNode.destroy();
                          });
                        }).start();
                      } else {
                        _symbol = _this6._bottomSlotsScript.GetSymbolByIdx(bonusItems[i].idx);
                        _symbol.ShowById(_this6._bonusId, {
                          bonus: bonusItems[i]
                        });
                        _symbol.playBonusQuanAnim(true);
                        _symbol.playBonusZoomAnim(true);
                      }
                      _context10.next = 6;
                      return cc.vv.gameData.awaitTime(.2);

                     case 6:
                     case "end":
                      return _context10.stop();
                    }
                  }, _loop);
                });
                i = 0;

               case 3:
                if (!(i < bonusItems.length)) {
                  _context11.next = 8;
                  break;
                }
                return _context11.delegateYield(_loop(i), "t0", 5);

               case 5:
                i++;
                _context11.next = 3;
                break;

               case 8:
                _context11.next = 10;
                return cc.vv.gameData.awaitTime(.5);

               case 10:
                success();

               case 11:
               case "end":
                return _context11.stop();
              }
            }, _callee10);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      initSettleState: function initSettleState() {
        this._settleNode.active = true;
        cc.find("jiesuo", this._settleNode).active = 1 == this._bonusType;
        cc.find("jiesuo2", this._settleNode).active = 2 == this._bonusType;
        cc.vv.gameData.playSpine(cc.find(1 == this._bonusType ? "jiesuo" : "jiesuo2", this._settleNode), "animation2", false);
        cc.find("settlement", this._settleNode).active = false;
        cc.find("settlement/winner", this._settleNode).active = true;
        for (var i = 1; i <= 5; i++) cc.find("settlement/jp_" + i, this._settleNode).active = false;
      },
      topShow: function topShow() {
        var topnode = cc.find("top_lock", this._mainNode);
        topnode.active = 2 != this._bonusType;
      },
      showBonusSettlement: function showBonusSettlement() {
        var _this7 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success, failed) {
            var jiesuo, settlement, shownode, coinnode, slots, curtotal, lblsettlement;
            return regeneratorRuntime.wrap(function _callee11$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("logo_transition");
                jiesuo = cc.find(1 == _this7._bonusType ? "jiesuo" : "jiesuo2", _this7._settleNode);
                settlement = cc.find("settlement", _this7._settleNode);
                shownode = cc.find("uishowani", settlement);
                coinnode = cc.find("collectcoin", settlement);
                coinnode.getComponent(cc.Label).string = "";
                cc.vv.gameData.playSpine(jiesuo, "animation1", false);
                _context12.next = 9;
                return cc.vv.gameData.awaitTime(1);

               case 9:
                settlement.active = true;
                cc.vv.gameData.playSpine(shownode, "animation1", false);
                _context12.next = 13;
                return cc.vv.gameData.awaitTime(1);

               case 13:
                slots = _this7._subGameData.slots;
                curtotal = 0;
                lblsettlement = cc.find("slots_top/settleNode/settlement/collectcoin", _this7._mainNode);
                lblsettlement.getComponent(cc.Label).string = "";
                if (!(2 == _this7._subGameData.type)) {
                  _context12.next = 21;
                  break;
                }
                _context12.next = 20;
                return _this7.collectSlotsCoin(_this7._topType, _this7._topSlotsScript, curtotal, slots[0].bonusItems);

               case 20:
                curtotal = Global.FormatCommaNumToNum(lblsettlement.getComponent(cc.Label).string);

               case 21:
                _context12.next = 23;
                return _this7.collectSlotsCoin(_this7._bottomType, _this7._bottomSlotsScript, curtotal, slots[1].bonusItems);

               case 23:
                _context12.next = 25;
                return cc.vv.gameData.awaitTime(1);

               case 25:
                success();

               case 26:
               case "end":
                return _context12.stop();
              }
            }, _callee11);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      collectSlotsCoin: function collectSlotsCoin(slotsType, slotscript, curtotal, bonusitems) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success) {
                  var self, spine_sj, spine_sj_2, settlement, lblsettlement, collectparticle, isDouble, index, idx, symbol, startpos, scale, newangle;
                  return regeneratorRuntime.wrap(function _callee12$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      self = _this8;
                      spine_sj = cc.find("spine_sj", _this8._mainNode);
                      spine_sj_2 = cc.find("spine_sj_2", _this8._mainNode);
                      settlement = cc.find("slots_top/settleNode/settlement", _this8._mainNode);
                      lblsettlement = cc.find("collectcoin", settlement).getComponent(cc.Label);
                      collectparticle = cc.find("shoujijieshu", settlement).getComponent(cc.ParticleSystem);
                      spine_sj_2.active = false;
                      isDouble = 15 === bonusitems.length;
                      if (!isDouble) {
                        _context13.next = 11;
                        break;
                      }
                      _context13.next = 11;
                      return cc.vv.gameData.getUIMgr().showBonusDoubleWin(slotsType == _this8._bottomType ? 1 : 2);

                     case 11:
                      bonusitems.sort(function(a, b) {
                        return a.idx - b.idx;
                      });
                      index = 0;

                     case 13:
                      if (!(index < bonusitems.length)) {
                        _context13.next = 54;
                        break;
                      }
                      idx = bonusitems[index].idx;
                      symbol = slotscript.GetSymbolByIdx(idx);
                      if (bonusitems[index].jackpot) {
                        cc.find("winner", settlement).active = false;
                        cc.find("jp_" + bonusitems[index].jackpot.id, settlement).active = true;
                      }
                      startpos = self._mainNode.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      spine_sj.position = startpos;
                      scale = self.getScaleMul(idx, slotsType);
                      newangle = self.getRotationAngle(idx, slotsType);
                      spine_sj.angle = newangle;
                      spine_sj.scaleY = scale;
                      Global.SlotsSoundMgr.playEffect("respin_calculate1");
                      cc.vv.gameData.playSpine(spine_sj, "animation" + slotsType, false, function() {
                        collectparticle.resetSystem();
                      });
                      if (!isDouble) {
                        _context13.next = 33;
                        break;
                      }
                      _context13.next = 28;
                      return cc.vv.gameData.awaitTime(.2);

                     case 28:
                      spine_sj_2.position = startpos;
                      spine_sj_2.angle = newangle;
                      spine_sj_2.scaleY = scale;
                      Global.SlotsSoundMgr.playEffect("respin_calculate1");
                      cc.vv.gameData.playSpine(spine_sj_2, "animation" + slotsType, false);

                     case 33:
                      symbol.playBonusFireAnim(false);
                      bonusitems[index].coin ? curtotal += bonusitems[index].coin : bonusitems[index].jackpot && (curtotal += bonusitems[index].jackpot.value);
                      if (!isDouble) {
                        _context13.next = 44;
                        break;
                      }
                      _context13.next = 38;
                      return cc.vv.gameData.awaitTime(.3);

                     case 38:
                      lblsettlement.string = Global.FormatNumToComma(curtotal);
                      bonusitems[index].coin ? curtotal += bonusitems[index].coin : bonusitems[index].jackpot && (curtotal += bonusitems[index].jackpot.value);
                      _context13.next = 42;
                      return cc.vv.gameData.awaitTime(.2);

                     case 42:
                      _context13.next = 46;
                      break;

                     case 44:
                      _context13.next = 46;
                      return cc.vv.gameData.awaitTime(.5);

                     case 46:
                      Global.SlotsSoundMgr.playEffect("respin_calculate2");
                      lblsettlement.string = Global.FormatNumToComma(curtotal);
                      _context13.next = 50;
                      return cc.vv.gameData.awaitTime(.5);

                     case 50:
                      if (bonusitems[index].jackpot) {
                        cc.find("winner", settlement).active = true;
                        cc.find("jp_" + bonusitems[index].jackpot.id, settlement).active = false;
                      }

                     case 51:
                      index++;
                      _context13.next = 13;
                      break;

                     case 54:
                      success();

                     case 55:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee12);
                }));
                return function(_x13) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context14.stop();
            }
          }, _callee13);
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
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          var reqdata, result;
          return regeneratorRuntime.wrap(function _callee14$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              cc.log(cc.js.formatStr("startMove:%s, %s", _this9._curCnt, _this9._totalCnt));
              _this9._curCnt += 1;
              cc.vv.gameData.GetBottomScript().ShowFreeModel(true, _this9._curCnt, _this9._totalCnt);
              _this9._topSlotsScript.StartMove(_this9._subGameData.slots[0].bonusIdxs);
              _this9._bottomSlotsScript.StartMove(_this9._subGameData.slots[1].bonusIdxs);
              _context15.next = 7;
              return cc.vv.gameData.awaitTime(1);

             case 7:
              reqdata = {
                rtype: 3
              };
              _context15.next = 10;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 10:
              result = _context15.sent;
              if (200 === result.code && !result.spcode) {
                _this9._subGameData = result.data.bonusGame;
                cc.vv.gameData.setBonusGame(_this9._subGameData);
                _this9._bottomSlotsScript.setSpinResult(_this9._subGameData.slots[1].bonusIdxs, _this9._subGameData.slots[1].bonusItems);
                _this9._topSlotsScript.setSpinResult(_this9._subGameData.slots[0].bonusIdxs, _this9._subGameData.slots[0].bonusItems);
              }

             case 12:
             case "end":
              return _context15.stop();
            }
          }, _callee14);
        }))();
      },
      StopMove: function StopMove() {
        this._topSlotsScript.StopMove();
        this._bottomSlotsScript.StopMove();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
             case 0:
              cc.log("OnSpinEnd");
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              _context16.next = 4;
              return cc.vv.gameData.awaitTime(1);

             case 4:
              if (!(2 == _this10._subGameData.state)) {
                _context16.next = 13;
                break;
              }
              _context16.next = 7;
              return cc.vv.gameData.getUIMgr().showBonusAddSpinsUI();

             case 7:
              _this10._subGameData = cc.vv.gameData.getBonusGame();
              _this10._curCnt = _this10._subGameData.totalSpinCnt - _this10._subGameData.spinCnt;
              _this10._totalCnt = _this10._subGameData.totalSpinCnt;
              _this10.reqSpine();
              _context16.next = 14;
              break;

             case 13:
              if (_this10._subGameData.spinCnt > 0) {
                cc.vv.gameData.awaitTime(1);
                _this10.reqSpine();
              } else _this10.endBonusGame();

             case 14:
             case "end":
              return _context16.stop();
            }
          }, _callee15);
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
        var reelList = type == this._topType ? this._topSlotsScript.getLastStopReel() : this._bottomSlotsScript.getLastStopReel();
        return reelList[col];
      },
      getRotationAngle: function getRotationAngle(col, type) {
        var list = [];
        list = type == this._topType ? [ -60, -40, 0, 40, 60, -45, -25, 0, 25, 45, -35, -20, 0, 20, 35 ] : [ -28, -15, 0, 15, 28, -23, -12, 0, 12, 23, -20, -10, 0, 10, 20 ];
        return list[col - 1];
      },
      getScaleMul: function getScaleMul(col, type) {
        var list = [];
        list = type == this._topType ? [ 1.2, .9, .7, .9, 1.2, 1.4, 1.2, 1.1, 1.2, 1.4, 1.8, 1.6, 1.5, 1.6, 1.8 ] : [ .95, .9, .85, .9, .95, 1.1, 1.05, 1, 1.05, 1.1, 1.25, 1.2, 1.2, 1.2, 1.25 ];
        return list[col - 1];
      }
    });
    cc._RF.pop();
  }, {} ],
  Fenrir_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "354a1DeixtC+p0iJxlyIeDE", "Fenrir_BonusReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
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
        if (this._type === slotsType && this._reelIdx == lastIdx) {
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
        if (3 === symbol.GetShowId()) {
          var data = symbol.GetData();
          data.bonus && (data.bonus.coin ? Global.SlotsSoundMgr.playEffect("respin_appear") : data.bonus.jackpot && Global.SlotsSoundMgr.playEffect("respin_jackpot"));
          symbol.playBonusQuanAnim(true);
        }
        var maxReelIdx = cc.vv.gameData.getBonusGameMgr().getMaxReelIdx(this._type, this._reelIdx % 5);
        this._reelIdx == maxReelIdx && Global.SlotsSoundMgr.playEffect("reel_stop");
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
        this.playScaleAnim();
      },
      playScaleAnim: function playScaleAnim() {
        var symbol = this._symbols[0];
        3 === symbol.GetShowId() && symbol.playBonusZoomAnim(true);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Fenrir_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "789d0Dl1StGpa6jzSiK+g23", "Fenrir_BonusSlots");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _canStop: false,
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
          var scp = node.addComponent("Fenrir_BonusReel");
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
      clearGuangyun: function clearGuangyun(reelidx) {
        var gynode = cc.find(cc.js.formatStr("coin_top_%s/guangyun", reelidx), this._topAniNode);
        gynode && (gynode.active = false);
      },
      StartMove: function StartMove(bonusIdxs) {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._canStop = false;
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
        var max = reelIdxs[0];
        var reelMax = [];
        reelIdxs.forEach(function(idx) {
          (idx % 5 > max % 5 || idx % 5 == max % 5 && idx / 3 > max / 3) && (max = idx);
          reelMax[idx % 5] = reelMax[idx % 5] ? Math.max(reelMax[idx % 5], idx) : idx;
        });
        this.moveReelLastIdx = max;
        cc.log("StartMove\uff1athis.moveReelLastIdx:", this.moveReelLastIdx);
        this._reelMax = reelMax;
      },
      getLastStopReel: function getLastStopReel() {
        return this._reelMax;
      },
      setSpinResult: function setSpinResult(bonusIdxs, bonusItems) {
        this._canStop = true;
        var cfg = cc.vv.gameData.getGameCfg();
        var cards = [];
        for (var i = 1; i <= 15; i++) {
          var randIdx = Global.random(1, cfg.randomSymbols.length);
          var randVal = cfg.randomSymbols[randIdx - 1];
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
              res.data.bonus = bonusItems[bonusIdxs.indexOf(i + 1)];
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
        return this._canStop;
      },
      getSlotsIndex: function getSlotsIndex() {
        return this._slotsIndex;
      },
      setReelsState: function setReelsState(bShow) {
        cc.find("reels", this.node).active = bShow;
      },
      getReel: function getReel(col) {
        return this._reels[col];
      },
      initAllSymbol: function initAllSymbol() {
        for (var col = 0; col < this._col; col++) {
          this._reels[col].GetSymbolByRow(0).ClearState();
          this._reels[col].GetSymbolByRow(0).ShowById(14);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Fenrir_BoxUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a7e8YciG1Ge5DSWiBKcdEf", "Fenrir_BoxUI");
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
      Init: function Init() {
        this.node.active = true;
        this._mainNode = cc.find("mainnode", this.node);
        this._mainNode.active = false;
        this._btn_close = cc.find("mainnode/uinode/btn_close", this.node);
        this._btn_close.off("click");
        Global.btnClickEvent(this._btn_close, this.onCloseUI, this);
        this._box_tip = cc.find("mainnode/uinode/box_tip", this.node);
        this._box_tip.active = false;
        this._spr_tip = cc.find("mainnode/uinode/node_paw/spr_tip", this.node);
        this._spr_tip.active = false;
        var btn_help = cc.find("mainnode/uinode/node_paw/btn_help", this.node);
        Global.btnClickEvent(btn_help, this.onOpenHelp, this);
        var btn_left = cc.find("mainnode/uinode/btn_leftmove", this.node);
        Global.btnClickEvent(btn_left, this.onBoxLastLevel, this);
        var btn_right = cc.find("mainnode/uinode/btn_rightmove", this.node);
        Global.btnClickEvent(btn_right, this.onBoxNextLevel, this);
        this._topSpineNode = cc.find("uinode/topspine", this._mainNode);
      },
      openBoxUI: function openBoxUI() {
        Global.SlotsSoundMgr.playEffect("shop_open");
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        this._pawStore = cc.vv.gameData.getPawStore();
        this._curPage = this._pawStore.unlockPage;
        var masknode = cc.find("mask", this._mainNode);
        var uinode = cc.find("uinode", this._mainNode);
        masknode.opacity = 0;
        uinode.scale = 0;
        this._mainNode.active = true;
        cc.tween(masknode).to(.3, {
          opacity: 255
        }).start();
        cc.tween(uinode).to(.3, {
          scale: 1
        }, {
          easing: "backOut"
        }).start();
        cc.vv.gameData.setCanClickBox(true);
        this.loadBoxData();
      },
      closeBoxUI: function closeBoxUI() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
                  var masknode, uinode;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("shop_close");
                      masknode = cc.find("mask", _this._mainNode);
                      uinode = cc.find("uinode", _this._mainNode);
                      masknode.opacity = 0;
                      uinode.scale = 0;
                      cc.tween(masknode).to(.3, {
                        opacity: 0
                      }).start();
                      cc.tween(uinode).to(.3, {
                        scale: 0
                      }).start();
                      _context.next = 9;
                      return cc.vv.gameData.awaitTime(.3);

                     case 9:
                      _this._mainNode.active = false;
                      success();

                     case 11:
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
      topPlaySpine: function topPlaySpine() {
        var type = this._pawStore.unlockPage >= this._curPage ? 2 : 1;
        cc.vv.gameData.playSpine(this._topSpineNode, cc.js.formatStr("animation%s_%s", this._curPage, type), false);
      },
      pagePointShow: function pagePointShow(bBlink) {
        var _this2 = this;
        var pointsnode = cc.find("mainnode/uinode/bottompoints", this.node);
        var _loop = function _loop(i) {
          var pointnode = cc.find(cc.js.formatStr("point%s/choice", i), pointsnode);
          if (i == _this2._curPage) {
            pointnode.active = true;
            bBlink ? cc.vv.gameData.playSpine(pointnode, "animation", false, function() {
              cc.vv.gameData.playSpine(pointnode, "animation2", true);
            }) : cc.vv.gameData.playSpine(pointnode, "animation2", true);
          } else pointnode.active = false;
        };
        for (var i = 1; i < 5; i++) _loop(i);
      },
      updatePawNum: function updatePawNum() {
        this._pawStore = cc.vv.gameData.getPawStore();
        var pawcntnode = cc.find("mainnode/uinode/node_paw/desctext", this.node);
        pawcntnode.getComponent(cc.Label).string = Global.FormatNumToComma(this._pawStore.pawCnt);
        cc.vv.gameData.GetSlotsScript().showPawNum(false);
      },
      updataOtherBox: function updataOtherBox() {
        if (this._pawStore.unlockPage != this._curPage) return;
        var pagedetail = this.getPageDetail();
        if (this._pawStore.pawCnt < pagedetail.price) {
          var contentnode = cc.find("mainnode/uinode/bottombg/baoxiangview/view/content", this.node);
          for (var i = 1; i < 10; i++) {
            var itemnode = cc.find(cc.js.formatStr("item%s", i), contentnode);
            var unlockdetail = this.getUnlockItems(i);
            unlockdetail ? this.setBoxState(itemnode, 4) : this._pawStore.pawCnt < pagedetail.price ? this.setBoxState(itemnode, 3) : this.setBoxState(itemnode, 2);
          }
        }
      },
      loadBoxData: function loadBoxData() {
        this.refreshDataWithAction(0);
        this.showBoxState();
        this.updatePawNum();
        this.topPlaySpine();
        this.pagePointShow();
      },
      showBoxState: function showBoxState() {
        var isreset = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var pagedetail = this.getPageDetail();
        var contentnode = cc.find("mainnode/uinode/bottombg/baoxiangview/view/content", this.node);
        for (var i = 1; i < 10; i++) {
          var itemnode = cc.find(cc.js.formatStr("item%s", i), contentnode);
          cc.find("bg_show/costnum", itemnode).getComponent(cc.Label).string = Global.FormatNumToComma(pagedetail.price);
          if (this._pawStore.unlockPage >= this._curPage) {
            var unlockdetail = this.getUnlockItems(i);
            if (unlockdetail) {
              this.setBoxState(itemnode, 4);
              itemnode.getComponent("Fenrir_Boxitem").showBoxState(unlockdetail, true);
            } else this._pawStore.pawCnt < pagedetail.price ? this.setBoxState(itemnode, 3) : this.setBoxState(itemnode, 2);
          } else this.setBoxState(itemnode, 1);
        }
      },
      refreshDataWithAction: function refreshDataWithAction(deltaX) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var contentnode, i, itemnode;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              contentnode = cc.find("mainnode/uinode/bottombg/baoxiangview/view/content", _this3.node);
              if (!(0 != deltaX)) {
                _context3.next = 8;
                break;
              }
              Global.SlotsSoundMgr.playEffect("page_next");
              contentnode.stopAllActions();
              contentnode.x = 0;
              contentnode.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, deltaX, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -deltaX, 0))));
              _context3.next = 8;
              return cc.vv.gameData.awaitTime(.15);

             case 8:
              for (i = 1; i <= 9; i++) {
                itemnode = cc.find(cc.js.formatStr("item%s", i), contentnode);
                itemnode.setScale(.1);
                itemnode.stopAllActions();
                itemnode.runAction(cc.scaleTo(.1 * i, 1, 1).easing(cc.easeBackOut()));
              }

             case 9:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      setBoxState: function setBoxState(itemnode, state) {
        cc.find("baoxiang", itemnode).active = 2 == state;
        cc.find("baoxiang_lock", itemnode).active = 3 == state;
        cc.find("baoxiang_ice", itemnode).active = 1 == state;
        cc.find("baoxiangspine", itemnode).active = 4 == state;
        4 != state && (cc.find("getcoin", itemnode).active = false);
        cc.find("bg_show", itemnode).active = 4 != state;
        itemnode.getComponent("Fenrir_Boxitem").changeBoxState(this._curPage, state);
      },
      getPageDetail: function getPageDetail() {
        var pagedetails = this._pawStore.pageDetails;
        return pagedetails[this._curPage - 1];
      },
      getUnlockItems: function getUnlockItems(idx) {
        var unlockitems = this._pawStore.unlockItems[this._curPage - 1];
        if (unlockitems) for (var i = 0; i < unlockitems.length; i++) if (unlockitems[i].idx == idx) return unlockitems[i];
      },
      onCloseUI: function onCloseUI() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("click");
              _this4._btn_close.getComponent(cc.Button).interactable = false;
              _context4.next = 4;
              return _this4.closeBoxUI();

             case 4:
              cc.vv.gameData.GetBottomScript().CanDoNextRound();
              _this4._btn_close.getComponent(cc.Button).interactable = true;

             case 6:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onOpenHelp: function onOpenHelp() {
        var _this5 = this;
        this._spr_tip.stopAllActions();
        if (this._spr_tip.active) this._spr_tip.runAction(cc.sequence(cc.scaleTo(this._spr_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this5._spr_tip.active = false;
        }))); else {
          Global.SlotsSoundMgr.playEffect("tips_popup");
          this._spr_tip.active = true;
          this._spr_tip.setScale(0);
          this._spr_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this5._spr_tip.active = false;
          })));
        }
      },
      showBoxTip: function showBoxTip(node) {
        var _this6 = this;
        this._box_tip.stopAllActions();
        if (this._box_tip.active) this._box_tip.runAction(cc.sequence(cc.scaleTo(this._box_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this6._box_tip.active = false;
        }))); else {
          this._box_tip.position = this._box_tip.parent.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
          this._box_tip.active = true;
          this._box_tip.setScale(0);
          this._box_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this6._box_tip.active = false;
          })));
        }
      },
      onBoxLastLevel: function onBoxLastLevel() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              if (cc.vv.gameData.canClickBox()) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");

             case 2:
              cc.vv.gameData.setCanClickBox(false);
              _this7._curPage <= 1 ? _this7._curPage = 4 : _this7._curPage--;
              _this7.topPlaySpine();
              _this7.pagePointShow(true);
              _this7.refreshDataWithAction(20);
              _this7.showBoxState(true);
              _context5.next = 10;
              return cc.vv.gameData.awaitTime(1.1);

             case 10:
              cc.vv.gameData.setCanClickBox(true);

             case 11:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      onBoxNextLevel: function onBoxNextLevel() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              if (cc.vv.gameData.canClickBox()) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");

             case 2:
              cc.vv.gameData.setCanClickBox(false);
              _this8._curPage >= 4 ? _this8._curPage = 1 : _this8._curPage++;
              _this8.topPlaySpine();
              _this8.pagePointShow(true);
              _this8.refreshDataWithAction(-20);
              _this8.showBoxState(true);
              _context6.next = 10;
              return cc.vv.gameData.awaitTime(1.1);

             case 10:
              cc.vv.gameData.setCanClickBox(true);

             case 11:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      gainSpecial: function gainSpecial(selectRes) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              cc.vv.gameData.setIsBoxGame(true);
              _context7.next = 3;
              return cc.vv.gameData.awaitTime(.5);

             case 3:
              _this9.closeBoxUI();
              if (!selectRes.bonusGame) {
                _context7.next = 9;
                break;
              }
              cc.vv.gameData.getBonusGameMgr().showBonusGame(selectRes.bonusGame);
              cc.vv.gameData.GetBottomScript().SetWin(0);
              _context7.next = 45;
              break;

             case 9:
              if (!(selectRes.freeInfo && selectRes.freeInfo.freeCnt > 0)) {
                _context7.next = 27;
                break;
              }
              cc.vv.gameData.SetTotalFree(selectRes.freeInfo.freeCnt);
              cc.vv.gameData.SetFreeTime(selectRes.freeInfo.freeCnt);
              _context7.next = 14;
              return cc.vv.gameData.awaitTime(.5);

             case 14:
              _context7.next = 16;
              return cc.vv.gameData.getUIMgr().showFreeGameStartUI(selectRes.freeInfo.freeCnt, "first");

             case 16:
              cc.vv.gameData.getUIMgr().playFreeQPAnim();
              _context7.next = 19;
              return cc.vv.gameData.awaitTime(.6);

             case 19:
              cc.vv.gameData.GetBottomScript().SetWin(0);
              cc.vv.gameData.GetSlotsScript().ShowGameview(true);
              cc.vv.gameData.GetSlotsScript().setPawState(false);
              _context7.next = 24;
              return cc.vv.gameData.awaitTime(2);

             case 24:
              cc.vv.gameData.GetBottomScript().CanDoNextRound();
              _context7.next = 45;
              break;

             case 27:
              if (!selectRes.pageReward) {
                _context7.next = 45;
                break;
              }
              cc.vv.gameData.setPageReward(selectRes.pageReward);
              cc.vv.gameData.setIsSuperFree(true);
              cc.vv.gameData.SetTotalFree(selectRes.pageReward.freeCnt);
              cc.vv.gameData.SetFreeTime(selectRes.pageReward.freeCnt);
              _context7.next = 34;
              return cc.vv.gameData.awaitTime(.5);

             case 34:
              _context7.next = 36;
              return cc.vv.gameData.getUIMgr().showSuperFreeStartFreeUI(_this9._curPage);

             case 36:
              cc.vv.gameData.getUIMgr().playFreeQPAnim();
              _context7.next = 39;
              return cc.vv.gameData.awaitTime(.6);

             case 39:
              cc.vv.gameData.GetBottomScript().SetWin(0);
              cc.vv.gameData.GetBottomScript().ShowFreeModel(true, 0, selectRes.pageReward.freeCnt);
              cc.vv.gameData.getSuperFreeMgr().initShowSlotsDate();
              _context7.next = 44;
              return cc.vv.gameData.awaitTime(2);

             case 44:
              cc.vv.gameData.GetBottomScript().CanDoNextRound();

             case 45:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Fenrir_Boxitem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dbfcbO5+LxHlqfYbqN8Nda5", "Fenrir_Boxitem");
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
        pos: 0
      },
      onLoad: function onLoad() {
        this._baoxiangSpNode = cc.find("baoxiangspine", this.node);
        this._costShowNode = cc.find("bg_show", this.node);
        Global.btnClickEvent(this.node, this.onBoxEvent, this);
      },
      showBoxState: function showBoxState(itemdetail, isInit) {
        this._costShowNode.active = false;
        cc.find("baoxiang", this.node).active = false;
        var aniname = this.getSpineName(itemdetail.type);
        if (isInit) cc.vv.gameData.playSpine(this._baoxiangSpNode, aniname + "_1", true); else {
          var self = this;
          cc.vv.gameData.playSpine(this._baoxiangSpNode, aniname, false, function() {
            cc.vv.gameData.playSpine(self._baoxiangSpNode, aniname + "_1", true);
          });
        }
        var getcoin = cc.find("getcoin", this.node);
        if (2 == itemdetail.type) {
          getcoin.active = true;
          getcoin.getComponent(cc.Label).string = Global.convertNumToShort(itemdetail.coin, 1e3, 0);
          if (!isInit) {
            getcoin.setScale(0);
            cc.tween(getcoin).to(.5, {
              scale: 1
            }, {
              easing: "backOut"
            }).start();
          }
        } else getcoin.active = false;
      },
      changeBoxState: function changeBoxState(pageid, state) {
        this._pageId = pageid;
        this._boxState = state;
      },
      onBoxEvent: function onBoxEvent() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var reqdata, result, selectRes;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              3 == _this._boxState && _this.showTip();
              if (!(2 != _this._boxState)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");

             case 3:
              if (cc.vv.gameData.canClickBox()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");

             case 5:
              cc.vv.gameData.setCanClickBox(false);
              Global.SlotsSoundMgr.playEffect("chest_open");
              reqdata = {
                rtype: 4,
                pageId: _this._pageId,
                choiceId: _this.pos
              };
              _context.next = 10;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 10:
              result = _context.sent;
              if (!(200 == result.code && !result.spcode)) {
                _context.next = 19;
                break;
              }
              cc.vv.gameData.updatePawStore(result.data.pawStore);
              selectRes = result.data.result;
              _this.updateBox(selectRes);
              _context.next = 17;
              return cc.vv.gameData.awaitTime(.5);

             case 17:
              selectRes.coin && selectRes.coin > 0 && _this.updateCoin(selectRes.coin);
              selectRes.bonusGame || selectRes.freeInfo || selectRes.pageReward ? cc.vv.gameData.getBoxGameMgr().gainSpecial(selectRes) : cc.vv.gameData.setCanClickBox(true);

             case 19:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      getSpineName: function getSpineName(type) {
        switch (type) {
         case 1:
          return "animation3";

         case 2:
          return "animation1";

         case 3:
          return "animation2";

         default:
          return "animation1";
        }
      },
      updateBox: function updateBox(result) {
        this.changeBoxState(this._pageId, 4);
        this.showBoxState(result, false);
        cc.vv.gameData.getBoxGameMgr().updatePawNum();
        cc.vv.gameData.getBoxGameMgr().updataOtherBox();
      },
      updateCoin: function updateCoin(coin) {
        if (coin && coin > 0) {
          cc.vv.gameData.AddCoin(coin);
          cc.vv.gameData.GetBottomScript().SetWin(coin);
          cc.vv.gameData.GetTopScript().ShowCoin();
        }
      },
      showTip: function showTip() {
        cc.vv.gameData.getBoxGameMgr().showBoxTip(this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  Fenrir_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f17a5gJGepGm5+R9dlbxz9I", "Fenrir_Cfg");
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
        node: "s12",
        win_node: "w12",
        stop_ani: {
          name: "animation1",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s13",
        win_node: "w13",
        stop_ani: {
          name: "",
          zIndex: 200
        },
        trigger_ani: {
          name: "animation2",
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
        node: "s7",
        win_node: ""
      }), _defineProperty(_symbol, 10, {
        node: "s8",
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s9",
        win_node: ""
      }), _defineProperty(_symbol, 12, {
        node: "s10",
        win_node: ""
      }), _defineProperty(_symbol, 13, {
        node: "s11",
        win_node: ""
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        win_node: ""
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Fenrir_Slots",
        Reels: "Fenrir_Reel",
        Symbols: "Fenrir_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 117,
        height: 99
      },
      randomSymbols: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      autoModelDelay: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      normalBgm: "base_bgm",
      AddAntiTime: 3,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Fenrir/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_landing",
        antSound: "anticipation2",
        antSpeed: 2500,
        type: "free"
      }, {
        id: [ 3 ],
        mini: 6,
        counts: [ 3, 3, 3, 3, 3 ],
        path: "games/Fenrir/",
        reelStopSound: "reel_stop",
        symbolStopSound: "respin_landing",
        type: "bonus"
      } ],
      commEffect: {
        path: "games/Fenrir/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      helpItems: [ "games/Fenrir/prefab/help_node/LMSlots_Help_item1", "games/Fenrir/prefab/help_node/LMSlots_Help_item2", "games/Fenrir/prefab/help_node/LMSlots_Help_item3", "games/Fenrir/prefab/help_node/LMSlots_Help_item4", "games/Fenrir/prefab/help_node/LMSlots_Help_item5", "games/Fenrir/prefab/help_node/LMSlots_Help_item6", "games/Fenrir/prefab/help_node/LMSlots_Help_item7" ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Fenrir_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c400dC889CP7oJ78q+3U5h", "Fenrir_GameData");
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
      init: function init(deskInfo, gameId, gameJackpot) {
        this._pawStore = deskInfo.pawStore;
        this._pawInfo = deskInfo.pawInfo;
        this._bonusGame = deskInfo.bonusGame;
        this._pageReward = deskInfo.pageReward;
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._pawStore = msg.pawStore;
          this._pawInfo = msg.pawInfo;
          this._bonusGame = msg.bonusGame;
          this._freeWinCoin = msg.freeWinCoin;
          this._super(msg);
        }
      },
      isNormalFreeOver: function isNormalFreeOver() {
        if (this._gameInfo.allFreeCnt > 0 && 0 == this._gameInfo.freeCnt) return true;
        return false;
      },
      isTriggerFree: function isTriggerFree() {
        var freeResult = this._gameInfo.freeResult;
        return freeResult.freeInfo && freeResult.freeInfo.freeCnt > 0;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      },
      setFreeWinCoin: function setFreeWinCoin(wincoin) {
        this._freeWinCoin = wincoin;
      },
      getBonusGame: function getBonusGame() {
        return this._bonusGame;
      },
      setBonusGame: function setBonusGame(data) {
        this._bonusGame = data;
      },
      getPawStore: function getPawStore() {
        return this._pawStore;
      },
      updatePawStore: function updatePawStore(pawstore) {
        this._pawStore = pawstore;
      },
      getPawInfo: function getPawInfo() {
        return this._pawInfo;
      },
      setUIMgrScript: function setUIMgrScript(uimgr) {
        this._uiMgr = uimgr;
      },
      getUIMgr: function getUIMgr() {
        return this._uiMgr;
      },
      setBonusGameMgr: function setBonusGameMgr(bonusmgr) {
        this._bonusMgr = bonusmgr;
      },
      getBonusGameMgr: function getBonusGameMgr() {
        return this._bonusMgr;
      },
      setSuperFreeMgr: function setSuperFreeMgr(scp) {
        this._superFreeMgr = scp;
      },
      getSuperFreeMgr: function getSuperFreeMgr() {
        return this._superFreeMgr;
      },
      setBoxGameMgr: function setBoxGameMgr(scp) {
        this._boxMgr = scp;
      },
      getBoxGameMgr: function getBoxGameMgr() {
        return this._boxMgr;
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
      },
      reqSubGame: function reqSubGame(dt) {
        var _this = this;
        return new Promise(function(res) {
          _this._subCallBack = res;
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: dt
          };
          cc.vv.NetManager.send(req, true);
        });
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (this._subCallBack) {
          this._subCallBack(msg);
          this._subCallBack = null;
        }
      },
      isSuperFree: function isSuperFree() {
        return this._isSuperFree;
      },
      setIsSuperFree: function setIsSuperFree(bSFree) {
        this._isSuperFree = bSFree;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      setIsFree: function setIsFree(bFree) {
        this._isFreeGame = bFree;
      },
      setIsBonusGame: function setIsBonusGame(val) {
        this._isBonusGame = val;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
      },
      canClickBox: function canClickBox() {
        return this._canClickBox;
      },
      setCanClickBox: function setCanClickBox(val) {
        this._canClickBox = val;
      },
      setIsBoxGame: function setIsBoxGame(val) {
        this._isBoxGame = val;
      },
      isBoxGame: function isBoxGame() {
        return this._isBoxGame;
      },
      getPageReward: function getPageReward() {
        return this._pageReward;
      },
      setPageReward: function setPageReward(val) {
        this._pageReward = val;
      },
      getState: function getState() {
        return this._deskInfo.state;
      },
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needBet;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Fenrir_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecfc8jAFhFEJqfxxM5YiG83", "Fenrir_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var uinode = cc.find("safe_node/gameUI", this.node);
        var scp_ui = uinode.addComponent("Fenrir_UIMgr");
        cc.vv.gameData.setUIMgrScript(scp_ui);
        scp_ui.Init();
        var bonusuinode = cc.find("safe_node/bonusgame", this.node);
        var scp_bonus = bonusuinode.addComponent("Fenrir_BonusGameMgr");
        cc.vv.gameData.setBonusGameMgr(scp_bonus);
        scp_bonus.Init();
        var node_superFree = cc.find("safe_node/super_free", this.node);
        var scp_superFree = node_superFree.addComponent("Fenrir_SFreeMgr");
        cc.vv.gameData.setSuperFreeMgr(scp_superFree);
        scp_superFree.Init();
        var node_box = cc.find("safe_node/boxGame", this.node);
        var scp_box = node_box.addComponent("Fenrir_BoxUI");
        cc.vv.gameData.setBoxGameMgr(scp_box);
        scp_box.Init();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Fenrir_PawInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71af3nxR5hOHIDXtD8p1QdP", "Fenrir_PawInfo");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this._pawCntLbl = cc.find("desctext", this.node).getComponent(cc.Label);
        var btn_openstore = cc.find("descbg", this.node);
        btn_openstore.off("click");
        Global.btnClickEvent(btn_openstore, this.onOpenStore, this);
      },
      start: function start() {
        this.updatePawNum();
        var spr_tip = cc.find("tip", this.node);
        spr_tip.stopAllActions();
        spr_tip.active = true;
        spr_tip.setScale(0);
        spr_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
          spr_tip.active = false;
        })));
      },
      updatePawNum: function updatePawNum() {
        var pawstore = cc.vv.gameData.getPawStore();
        this._pawCntLbl.string = Global.FormatNumToComma(pawstore.pawCnt);
      },
      onOpenStore: function onOpenStore() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        cc.vv.gameData.getBoxGameMgr().openBoxUI();
      },
      setPawNodeState: function setPawNodeState(bShow) {
        this.node.active = bShow;
      }
    });
    cc._RF.pop();
  }, {} ],
  Fenrir_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4173fw9oY9Cbb0khCQUPrKV", "Fenrir_Reel");
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
        this._super();
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              if ("free" == info.type) {
                info.isStop && this.ShowAntiEffect(true, info.antiNode);
                info.hasRemain || cc.vv.gameData.GetSlotsScript().hideAllAnit();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Fenrir_SFreeMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd639g/9PtO/7OBkDVFlPIM", "Fenrir_SFreeMgr");
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
      Init: function Init() {
        this._mainNode = cc.find("mainnode", this.node);
        this._slots = cc.find("slots", this._mainNode);
        for (var i = 1; i <= 4; i++) {
          var slot = cc.find("slots_" + i, this._slots);
          var scp = slot.addComponent("Fenrir_SFreeSlots");
          scp.Init(i);
          this._slotsNodeList.push(slot);
          this._slotsScpList.push(scp);
        }
        this._mainNode.active = false;
      },
      start: function start() {},
      StartMove: function StartMove() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotCnt && this._slotsScpList[i].StartMove();
      },
      StopMove: function StopMove() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotCnt && this._slotsScpList[i].StopMove();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var freeGameSlots = msg.freeGameSlots;
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotCnt && this._slotsScpList[i].onMsgSpine(freeGameSlots[i]);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var i, self, nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              for (i = 0; i < _this._slotsNodeList.length; i++) i < _this._slotCnt && _this._slotsScpList[i].OnSpinEnd();
              self = _this;
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context.next = 7;
              return new Promise(function(sucess, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nTotal, true, function() {
                  sucess();
                });
              });

             case 7:
              if (!cc.vv.gameData.isNormalFreeOver()) {
                _context.next = 10;
                break;
              }
              _this.endSuperFree();
              return _context.abrupt("return");

             case 10:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      GetLastStopReelIdx: function GetLastStopReelIdx() {
        return this._slotsScpList[0].GetLastStopReelIdx();
      },
      initShowSlotsDate: function initShowSlotsDate() {
        Global.SlotsSoundMgr.playBgm("free_bgm");
        this.node.active = true;
        this._mainNode.active = true;
        var pageReward = cc.vv.gameData.getPageReward();
        this._slotCnt = pageReward.slotCnt;
        var wildCols = pageReward.wildCols;
        for (var i = 0; i < this._slotsNodeList.length; i++) if (i < this._slotCnt) {
          this._slotsNodeList[i].active = true;
          this._slotsScpList[i].iniAllSymbol();
          this._slotsScpList[i].setWildCols(wildCols);
        } else this._slotsNodeList[i].active = false;
        this.initWolfState();
        this.initStoreState();
        this.setSlotsScale();
      },
      endSuperFree: function endSuperFree() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var i;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return cc.vv.gameData.awaitTime(1);

             case 2:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              _context2.next = 5;
              return cc.vv.gameData.getUIMgr().showFreeGameEndUI();

             case 5:
              cc.vv.gameData.getUIMgr().playFreeQPAnim();
              _context2.next = 8;
              return cc.vv.gameData.awaitTime(.6);

             case 8:
              cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
              Global.SlotsSoundMgr.stopBgm();
              _this2._mainNode.active = false;
              for (i = 0; i < _this2._slotsNodeList.length; i++) _this2._slotsScpList[i].iniAllSymbol();
              _context2.next = 14;
              return cc.vv.gameData.awaitTime(2);

             case 14:
              cc.vv.gameData.setIsSuperFree(false);
              _context2.next = 17;
              return new Promise(function(success) {
                var nWin = cc.vv.gameData.GetGameWin();
                var nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nTotal, true, function() {
                  success();
                });
              });

             case 17:
              cc.vv.gameData.GetBottomScript().CanDoNextRound();
              if (cc.vv.gameData.isBoxGame()) {
                cc.vv.gameData.getBoxGameMgr().openBoxUI();
                cc.vv.gameData.setIsBoxGame(false);
              }

             case 19:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      initWolfState: function initWolfState() {
        cc.find("spine_wolf_1", this._mainNode).active = 1 == this._slotCnt;
        cc.find("spine_wolf_2", this._mainNode).active = 2 == this._slotCnt;
      },
      initStoreState: function initStoreState() {},
      setSlotsScale: function setSlotsScale() {
        var scaleList = [ 1.1, 1, .9, .75 ];
        this._slots.setScale(scaleList[this._slotCnt - 1]);
        this._slots.getComponent(cc.Widget).updateAlignment();
      }
    });
    cc._RF.pop();
  }, {} ],
  Fenrir_SFreeReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae98aFdAz5O96Pb7ivXioFn", "Fenrir_SFreeReel");
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
        var lastReelStopIdx = cc.vv.gameData.getSuperFreeMgr().GetLastStopReelIdx();
        1 == this._slotsType && this._reelIdx == lastReelStopIdx && cc.vv.gameData.getSuperFreeMgr().OnSpinEnd();
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
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Fenrir_SFreeSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cbebzlbWJN9J7hIgEl8vXU", "Fenrir_SFreeSlots");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _wildCols: []
      },
      start: function start() {},
      Init: function Init(type) {
        this._slotsType = type;
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this._topAniNode = cc.find("top_ani", this.node);
        this.createReels(this._col, this._row, type);
      },
      createReels: function createReels(col, row, type) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent("Fenrir_SFreeReel");
          scp.Init(i, row, this._topAniNode);
          scp.setSlotType(type);
          this._reels.push(scp);
        }
      },
      setWildCols: function setWildCols(cols) {
        this._wildCols = cols;
        for (var i = 0; i < cols.length; i++) for (var row = 0; row < this._row; row++) this._reels[cols[i] - 1].GetSymbolByRow(row).ShowById(1);
      },
      iniAllSymbol: function iniAllSymbol() {
        for (var col = 0; col < this._reels.length; col++) for (var row = 0; row < this._row; row++) this._reels[col].GetSymbolByRow(row).ClearState();
      },
      StartMove: function StartMove() {
        var _this = this;
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        var reels = [];
        var self = this;
        this._reels.forEach(function(reel) {
          if (_this._wildCols.includes(reel.GetReelIdx() + 1)) for (var row = 0; row < self._row; row++) reel.GetSymbolByRow(row).ClearState(); else reels.push(reel);
        });
        this.MoveReels(reels);
        this._stopTime = this.GetStopTime();
      },
      onMsgSpine: function onMsgSpine(data) {
        this._gameInfo = data;
        var cards = data.cards;
        this.SetSlotsResult(cards);
      },
      OnSpinEnd: function OnSpinEnd() {
        this.ShowWinTrace();
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        var pageReward = cc.vv.gameData.getPageReward();
        var col = this._col * (pageReward.slotCnt - this._slotsType);
        return (reelIdx + col) * nIter;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Fenrir_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2eca6hr5pdMEYAHauoQJTs8", "Fenrir_Slots");
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
        this._spine_stoneLogo = cc.find("spine_stoneLogo", this.node);
        this._spine_stoneLogo.off("click");
        Global.btnClickEvent(this._spine_stoneLogo, this.onClickStone, this);
        this._collectPaw = cc.find("collectpaw", this.node);
        this._collectPaw.off("click");
        Global.btnClickEvent(this._collectPaw, this.onClickPaw, this);
        this._super();
        this.showPawNum(false);
        this.showPawTip();
        this.setRespinState();
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bonusdata;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.ShowGameview(false);
              if (cc.vv.gameData.getPageReward()) {
                cc.vv.gameData.setIsSuperFree(true);
                cc.vv.gameData.GetBottomScript().ShowFreeModel(true, cc.vv.gameData.GetFreeTime(), cc.vv.gameData.GetTotalFree());
                cc.vv.gameData.getSuperFreeMgr().initShowSlotsDate();
              } else if (cc.vv.gameData.GetTotalFree() > 0) {
                _this.ShowGameview(true);
                1 == cc.vv.gameData.getState() && _this.setPawState(false);
              }
              bonusdata = cc.vv.gameData.getBonusGame();
              if (!bonusdata) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return cc.vv.gameData.getBonusGameMgr().showBonusGame(bonusdata);

             case 6:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return _this.exitFreeGame();

             case 9:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        if (cc.vv.gameData.isSuperFree()) {
          cc.vv.gameData.getSuperFreeMgr().onMsgSpine(msg);
          return;
        }
        this._super(msg);
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        var pawInfo = this._gameInfo.pawInfo;
        var pawIdxs;
        pawInfo && pawInfo.idxs && (pawIdxs = pawInfo.idxs);
        var bonusIdxs = this._gameInfo.bonusIdxs;
        var bonusItems = this._gameInfo.bonusItems;
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = {};
            pawIdxs && pawIdxs.includes(i + 1) && (res.data.paw = 1);
            bonusIdxs && bonusIdxs.includes(i + 1) && (res.data.bonus = bonusItems[bonusIdxs.indexOf(i + 1)]);
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
        var _this2 = this;
        if (!this._cfg.reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._col;
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
              var item = _this2._reels[_i2];
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
              stateInfo.hasRemain = remainingCount >= triggerCount;
              stateInfo.continuous && stateInfo.counts[_i2] > 0 && 0 == reelCountOfID && (isContinuous = false);
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
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var bonusdata;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (!(_this3._gameInfo.pawInfo && _this3._gameInfo.pawInfo.idxs && _this3._gameInfo.pawInfo.idxs.length > 0)) {
                _context2.next = 3;
                break;
              }
              _context2.next = 3;
              return _this3.playPawFlyAnim();

             case 3:
              _this3.ShowWinTrace();
              _context2.next = 6;
              return _this3.playBottomWin();

             case 6:
              bonusdata = cc.vv.gameData.getBonusGame();
              if (!bonusdata) {
                _context2.next = 10;
                break;
              }
              _context2.next = 10;
              return _this3.gainBonusGame(bonusdata);

             case 10:
              if (!cc.vv.gameData.isTriggerFree()) {
                _context2.next = 13;
                break;
              }
              _context2.next = 13;
              return _this3.gainFreeGame();

             case 13:
              if (!cc.vv.gameData.isNormalFreeOver()) {
                _context2.next = 16;
                break;
              }
              _context2.next = 16;
              return _this3.exitFreeGame();

             case 16:
              _this3.CanDoNextRound();

             case 17:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      StartMove: function StartMove() {
        if (cc.vv.gameData.isSuperFree()) {
          cc.vv.gameData.getSuperFreeMgr().StartMove();
          return;
        }
        if (cc.vv.gameData.isBonusGame()) return;
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
      },
      StopMove: function StopMove() {
        if (cc.vv.gameData.isSuperFree()) {
          cc.vv.gameData.getSuperFreeMgr().StopMove();
          return;
        }
        if (cc.vv.gameData.isBonusGame()) {
          cc.vv.gameData.getBonusGameMgr().StopMove();
          return;
        }
        this._super();
      },
      gainBonusGame: function gainBonusGame(bonusdata) {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var bonusIdxs, _iterator2, _step2, idx, symbol;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                bonusIdxs = _this4._gameInfo.bonusIdxs;
                _iterator2 = _createForOfIteratorHelper(bonusIdxs);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    idx = _step2.value;
                    symbol = _this4.GetSymbolByIdx(idx);
                    symbol && symbol.playTriggerAnimation();
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                Global.SlotsSoundMgr.playEffect("bell");
                _context3.next = 6;
                return cc.vv.gameData.awaitTime(2);

               case 6:
                _context3.next = 8;
                return cc.vv.gameData.getUIMgr().showBonusStartUI(bonusdata.spinCnt);

               case 8:
                cc.vv.gameData.getUIMgr().playBonusQPAnim();
                _context3.next = 11;
                return cc.vv.gameData.awaitTime(.5);

               case 11:
                _context3.next = 13;
                return cc.vv.gameData.getBonusGameMgr().showBonusGame(bonusdata);

               case 13:
                success();

               case 14:
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
      gainFreeGame: function gainFreeGame() {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var result, idxs, _iterator3, _step3, idx, symbol;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                _this5.hideAllAnit();
                result = _this5._gameInfo.freeResult;
                if (result && result.freeInfo && result.freeInfo.scatterIdx) {
                  idxs = result.freeInfo.scatterIdx;
                  _iterator3 = _createForOfIteratorHelper(idxs);
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                      idx = _step3.value;
                      symbol = _this5.GetSymbolByIdx(idx);
                      symbol && symbol.playTriggerAnimation();
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                  Global.SlotsSoundMgr.playEffect("bell");
                }
                _context4.next = 5;
                return cc.vv.gameData.awaitTime(2);

               case 5:
                if (!(_this5._gameInfo.freeCnt != _this5._gameInfo.allFreeCnt)) {
                  _context4.next = 10;
                  break;
                }
                _context4.next = 8;
                return cc.vv.gameData.getUIMgr().showFreeGameStartUI(result.freeInfo.freeCnt, "again");

               case 8:
                _context4.next = 19;
                break;

               case 10:
                _context4.next = 12;
                return cc.vv.gameData.getUIMgr().showFreeGameStartUI(result.freeInfo.freeCnt, "first");

               case 12:
                cc.vv.gameData.getUIMgr().playFreeQPAnim();
                _context4.next = 15;
                return cc.vv.gameData.awaitTime(.6);

               case 15:
                _this5.ShowGameview(true);
                _this5.Backup();
                _context4.next = 19;
                return cc.vv.gameData.awaitTime(2);

               case 19:
                success();

               case 20:
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
      exitFreeGame: function exitFreeGame() {
        var _this6 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var col, row, symbol, nWin, nTotal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                _context5.next = 2;
                return cc.vv.gameData.awaitTime(1);

               case 2:
                _this6._bottomScript.ShowBtnsByState("moveing_1");
                _context5.next = 5;
                return cc.vv.gameData.getUIMgr().showFreeGameEndUI();

               case 5:
                cc.vv.gameData.getUIMgr().playFreeQPAnim();
                _context5.next = 8;
                return cc.vv.gameData.awaitTime(.6);

               case 8:
                _this6.ShowGameview(false);
                _this6.setPawState(true);
                if (cc.vv.gameData.isBoxGame()) for (col = 0; col < _this6._col; col++) for (row = 0; row < _this6._row; row++) {
                  symbol = _this6._reels[col].GetSymbolByRow(row);
                  symbol && symbol.ClearState();
                } else _this6.Resume();
                Global.SlotsSoundMgr.stopBgm();
                _context5.next = 14;
                return cc.vv.gameData.awaitTime(2);

               case 14:
                nWin = cc.vv.gameData.getFreeWinCoin();
                nTotal = nWin;
                _context5.next = 18;
                return new Promise(function(sucess, failed) {
                  _this6.ShowBottomWin(nWin, nTotal, true, sucess);
                });

               case 18:
                if (cc.vv.gameData.isBoxGame()) {
                  cc.vv.gameData.getBoxGameMgr().openBoxUI();
                  cc.vv.gameData.setIsBoxGame(false);
                } else success();

               case 19:
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
      playPawFlyAnim: function playPawFlyAnim() {
        var _this7 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
            var idxs, icon;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                idxs = _this7._gameInfo.pawInfo.idxs;
                Global.SlotsSoundMgr.playEffect("symbol_fly");
                idxs.forEach(function(idx) {
                  var symbol = _this7.GetSymbolByIdx(idx);
                  if (symbol) {
                    _this7.showPawFly(idx, symbol.getPawWPos());
                    symbol.setPaw(false);
                  }
                });
                _context6.next = 5;
                return cc.vv.gameData.awaitTime(.3);

               case 5:
                sucess();
                _this7.showPawNum(true);
                _context6.next = 9;
                return cc.vv.gameData.awaitTime(.5);

               case 9:
                icon = cc.find("collectpaw/pawspine", _this7.node);
                cc.vv.gameData.playSpine(icon, "animation1", false);

               case 11:
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
      showPawFly: function showPawFly(idx, fromWp) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var icon, pawFly, pos, spine;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _this8._pawNode || (_this8._pawNode = cc.instantiate(_this8.node.getChildByName("shoujifly")));
              if (!_this8._pawEndPos) {
                icon = cc.find("collectpaw/pawspine", _this8.node);
                _this8._pawEndPos = _this8.node.convertToNodeSpaceAR(icon.convertToWorldSpaceAR(cc.v2(0, 0)));
              }
              pawFly = cc.instantiate(_this8._pawNode);
              pawFly.active = true;
              pos = _this8.node.convertToNodeSpaceAR(fromWp);
              pawFly.position = pos;
              pawFly.parent = _this8.node;
              spine = cc.find("spine", pawFly);
              cc.vv.gameData.playSpine(spine, "animation1", false);
              _context7.next = 11;
              return cc.vv.gameData.awaitTime(.3);

             case 11:
              cc.vv.gameData.playSpine(spine, "animation2", false);
              pawFly.runAction(cc.sequence(cc.moveTo(.5, _this8._pawEndPos), cc.destroySelf()));

             case 13:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      onClickPaw: function onClickPaw() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        Global.SlotsSoundMgr.playEffect("click");
        cc.vv.gameData.getBoxGameMgr().openBoxUI();
      },
      showPawTip: function showPawTip() {
        var spr_tip = cc.find("tip", this._collectPaw);
        spr_tip.stopAllActions();
        spr_tip.active = true;
        spr_tip.setScale(0);
        spr_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
          spr_tip.active = false;
        })));
      },
      showPawNum: function showPawNum(isRoll) {
        var pawstore = cc.vv.gameData.getPawStore();
        var lbl = cc.find("desctext", this._collectPaw);
        if (isRoll) {
          var startN = Global.FormatCommaNumToNum(lbl.getComponent(cc.Label).string);
          Global.doRoallNumEff(lbl, startN, pawstore.pawCnt, .5, null, null, 0, true);
        } else lbl.getComponent(cc.Label).string = Global.FormatNumToComma(pawstore.pawCnt);
      },
      setPawState: function setPawState(bShow) {
        this._collectPaw.active = bShow;
      },
      onClickStone: function onClickStone() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (this._bonusLock) {
          var needBet = cc.vv.gameData.getNeedBet();
          var allMults = cc.vv.gameData.GetBetMults();
          needBet > allMults.length || cc.vv.gameData.GetBottomScript().SetBetIdx(needBet);
        }
      },
      setRespinState: function setRespinState() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        if (curBet >= needBet) {
          this._spine_stoneLogo.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          this._bonusLock = false;
        } else {
          this._spine_stoneLogo.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
          this._bonusLock = true;
        }
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var _this9 = this;
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        var self = this;
        if (curBet >= needBet && this._bonusLock) {
          Global.SlotsSoundMgr.playEffect("unlock");
          var entry = this._spine_stoneLogo.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          this._spine_stoneLogo.getComponent(sp.Skeleton).setTrackCompleteListener(entry, function() {
            _this9._spine_stoneLogo.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
          });
          this._bonusLock = false;
        } else if (curBet < needBet && !this._bonusLock) {
          Global.SlotsSoundMgr.playEffect("lock");
          this._spine_stoneLogo.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
          this._bonusLock = true;
        }
      },
      playBottomWin: function playBottomWin() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function(success) {
                var nWin = cc.vv.gameData.GetGameWin();
                var nTotal = nWin;
                var updateAllCoin = true;
                if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                  nTotal = cc.vv.gameData.GetGameTotalFreeWin();
                  updateAllCoin = 0 == cc.vv.gameData.GetFreeTime();
                }
                _this10.ShowBottomWin(nWin, nTotal, updateAllCoin, function() {
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
      hideAllAnit: function hideAllAnit() {
        for (var col = 0; col < this._col; col++) this._reels[col].ShowAntiEffect(false);
      },
      ShowGameview: function ShowGameview(bFree) {
        cc.vv.gameData.setIsFree(bFree);
        bFree && Global.SlotsSoundMgr.playBgm("free_bgm");
        this._super(bFree);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Fenrir_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f75efap2pVKaL7aKZkw/g+v", "Fenrir_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      initSymbolType: function initSymbolType(type) {
        this._bonusType = type;
      },
      StartMove: function StartMove() {
        this._super();
        this.playBonusFireAnim(false);
        this.playBonusQuanAnim(false);
      },
      ClearState: function ClearState() {
        this.hideAllIcon();
        this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.stopWinTweenAction();
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
        this.playBonusFireAnim(false);
        this.playBonusQuanAnim(false);
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this._bonusType && this.setDim();
        this.hideAllIcon();
        if (data) {
          data.paw && this.setPaw(true);
          data.bonus && (data.bonus.coin ? this.setNum(data.bonus.coin) : data.bonus.jackpot && this.setJp(data.bonus.jackpot.id));
          if (this._isResume) {
            this._isResume = false;
            this.setPaw(false);
          }
        }
      },
      Resume: function Resume(backup) {
        this._isResume = true;
        this._super(backup);
      },
      hideAllIcon: function hideAllIcon() {
        this.setPaw(false);
        this.setNum();
        this.setJp();
      },
      setPaw: function setPaw(bShow) {
        cc.find("paw", this.node).active = bShow;
      },
      getPawWPos: function getPawWPos() {
        return cc.find("paw", this.node).convertToWorldSpaceAR(cc.v2(0, 0));
      },
      setNum: function setNum(coin) {
        var lbl = cc.find("num", this.node);
        if (coin) {
          lbl.active = true;
          lbl.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 0);
        } else lbl.active = false;
      },
      setJp: function setJp(jp) {
        cc.find("jackpot1", this.node).active = 1 === jp;
        cc.find("jackpot2", this.node).active = 2 === jp;
        cc.find("jackpot3", this.node).active = 3 === jp;
        cc.find("jackpot4", this.node).active = 4 === jp;
        cc.find("jackpot5", this.node).active = 5 === jp;
      },
      setDim: function setDim() {
        if (this._bonusType) {
          var cfg = cc.vv.gameData.getGameCfg();
          if (cfg.symbol[this._id] && cfg.symbol[this._id].node) {
            var showNode = cc.find(cfg.symbol[this._id].node, this.node);
            3 == this._id ? showNode.color = cc.Color.WHITE : showNode.color = new cc.Color(100, 100, 100);
          }
        }
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
          var quan = cc.find("quan", this.node);
          quan.active = true;
          quan.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        } else this._super();
      },
      playBonusQuanAnim: function playBonusQuanAnim(bPlay) {
        var quan = cc.find("quan", this.node);
        if (bPlay) {
          quan.active = true;
          quan.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        } else quan.active = false;
      },
      playBonusFireAnim: function playBonusFireAnim(bPlay) {
        var fire = cc.find("fire", this.node);
        if (bPlay) {
          fire.active = true;
          fire.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
        } else fire.active = false;
      },
      playBonusZoomAnim: function playBonusZoomAnim(bPlay) {
        var _this = this;
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        aniNode.stopAllActions();
        bPlay && cc.tween(aniNode).to(.3, {
          scale: 1.2
        }).to(.2, {
          scale: 1
        }).call(function() {
          _this.setAnimationToTop(false);
          _this.playBonusFireAnim(true);
        }).start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  Fenrir_UIMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3e9cV5i35FMZAOLuPH834V", "Fenrir_UIMgr");
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
        _bonusAddSpinList: [],
        _bonusPickItemList: [],
        _canAddSpins: false
      },
      Init: function Init() {
        this._bonusGameStartUI = cc.find("bonusGameStartUI", this.node);
        this._bonusGameEndUI = cc.find("bonusGameEndUI", this.node);
        this._bonusDoubleStartUI = cc.find("bonusDoubleStartUI", this.node);
        this._freeGameStartUI = cc.find("freeGameStartUI", this.node);
        this._freeGameEndUI = cc.find("freeGameEndUI", this.node);
        this._bonusGameAddSpinsUI = cc.find("bonusGameAddSpins", this.node);
        this._bonusGamePickOneUI = cc.find("bonusGamePickOneUI", this.node);
        this._superFreeStartUI = cc.find("superFreeStartUI", this.node);
        this._bonusDoubleWinUI = cc.find("bonusDoubleWinUI", this.node);
        this._bonusGameStartUI.active = false;
        this._bonusGameEndUI.active = false;
        this._bonusDoubleStartUI.active = false;
        this._freeGameStartUI.active = false;
        this._freeGameEndUI.active = false;
        this._bonusGamePickOneUI.active = false;
        this._superFreeStartUI.active = false;
        this._bonusDoubleWinUI.active = false;
        for (var i = 1; i <= 3; i++) {
          var item = cc.find("mainnode/number" + i, this._bonusGameAddSpinsUI);
          this._bonusAddSpinList.push(item);
        }
        for (var _i = 1; _i <= 5; _i++) {
          var _item = cc.find("mainnode/item" + _i, this._bonusGamePickOneUI);
          this._bonusPickItemList.push(_item);
        }
        this._transition1 = cc.find("transition1", this.node);
        this._transition2 = cc.find("transition2", this.node);
        this._transition1.active = false;
        this._transition2.active = false;
      },
      showBonusStartUI: function showBonusStartUI(freetimes, type) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
                  var mainnode, timesnode, btn_start, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("bonus_start_show");
                      _this._bonusGameStartUI.active = true;
                      mainnode = cc.find("mainnode", _this._bonusGameStartUI);
                      mainnode.setScale(0);
                      cc.tween(mainnode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      timesnode = cc.find("mainnode/freetimes", _this._bonusGameStartUI);
                      timesnode.getComponent(cc.Label).string = freetimes;
                      btn_start = cc.find("mainnode/btn_start", _this._bonusGameStartUI);
                      if (!(type && 2 === type)) {
                        _context2.next = 19;
                        break;
                      }
                      btn_start.active = false;
                      _context2.next = 12;
                      return cc.vv.gameData.awaitTime(1.5);

                     case 12:
                      cc.tween(mainnode).to(.5, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();
                      _context2.next = 15;
                      return cc.vv.gameData.awaitTime(.5);

                     case 15:
                      _this._bonusGameStartUI.active = false;
                      success();
                      _context2.next = 28;
                      break;

                     case 19:
                      btn_start.active = true;
                      _context2.next = 22;
                      return cc.vv.gameData.awaitTime(.5);

                     case 22:
                      self = _this;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect("pop_click");
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(mainnode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._bonusGameStartUI.active = false;
                          success();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                      btn_start.off("click");
                      btn_start.getComponent(cc.Button).interactable = true;
                      btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                           case 0:
                            btn_start.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context.stop();
                          }
                        }, _callee);
                      })));

                     case 28:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showBonusEndUI: function showBonusEndUI(subgamedata) {
        var _this2 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var mainnode, coinnode, bottom, pos, btn_collect, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("bonus_end_show");
                _this2._bonusGameEndUI.active = true;
                mainnode = cc.find("mainnode", _this2._bonusGameEndUI);
                mainnode.setScale(0);
                cc.tween(mainnode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                coinnode = cc.find("bgcoin/getcoin", mainnode);
                Global.doRoallNumEff(coinnode, 0, subgamedata.winCoin, 1, null, null, 0, true);
                bottom = cc.find("bottombg", mainnode);
                pos = bottom.position;
                bottom.position = cc.v2(0, 0);
                bottom.active = false;
                _context5.next = 13;
                return cc.vv.gameData.awaitTime(.3);

               case 13:
                bottom.active = true;
                cc.tween(bottom).to(.5, {
                  position: pos
                }).start();
                _context5.next = 17;
                return cc.vv.gameData.awaitTime(.5);

               case 17:
                btn_collect = cc.find("btn_collect", bottom);
                self = _this2;
                clickFunc = function clickFunc() {
                  Global.SlotsSoundMgr.playEffect("pop_click");
                  btn_collect.getComponent(cc.Button).interactable = false;
                  cc.tween(bottom).to(.5, {
                    position: cc.v2(0, 0)
                  }).start();
                  cc.tween(mainnode).to(.5, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    self._bonusGameEndUI.active = false;
                    bottom.position = pos;
                    success();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      btn_collect.stopAllActions();
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
          return function(_x3, _x4) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      showBonusAddSpinsUI: function showBonusAddSpinsUI() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
                  var mainnode;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _this3._bonusGameAddSpinsUI.active = true;
                      mainnode = cc.find("mainnode", _this3._bonusGameAddSpinsUI);
                      mainnode.setScale(0);
                      cc.tween(mainnode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _this3._bonusAddSpinList.forEach(function(item) {
                        cc.vv.gameData.playSpine(cc.find("aninode", item), "animation1", true);
                        var atlas = cc.vv.gameData.GetAtlasByName("dialog");
                        cc.find("addnum", item).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme158_dialog_text19");
                        item.off("click");
                        item.getComponent(cc.Button).interactable = false;
                        item.on("click", function() {
                          _this3.onClickBonusAddSpins(item, success);
                        });
                      });
                      _context6.next = 7;
                      return cc.vv.gameData.awaitTime(.5);

                     case 7:
                      _this3._canAddSpins = true;
                      _this3._bonusAddSpinList.forEach(function(item) {
                        item.getComponent(cc.Button).interactable = true;
                      });
                      cc.vv.gameData.checkAutoPlay(_this3._bonusAddSpinList[0], function() {
                        _this3.onClickBonusAddSpins(_this3._bonusAddSpinList[0], success);
                      });

                     case 10:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x5, _x6) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      onClickBonusAddSpins: function onClickBonusAddSpins(item, success) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var idx, reqdata, result, extraspins, bonusgame, i, choiceid, numbernode, atlas, _numbernode, _mainnode;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (_this4._canAddSpins) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");

             case 2:
              _this4._canAddSpins = false;
              _this4._bonusAddSpinList[0].stopAllActions();
              Global.SlotsSoundMgr.playEffect("extra_respin");
              _this4._bonusAddSpinList.forEach(function(item) {
                item.getComponent(cc.Button).interactable = false;
              });
              idx = parseInt(item.name.substr(-1, 1));
              reqdata = {
                rtype: 2,
                choiceId: idx
              };
              _context8.next = 10;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 10:
              result = _context8.sent;
              if (!(200 == result.code)) {
                _context8.next = 24;
                break;
              }
              extraspins = result.data.extraSpins;
              bonusgame = result.data.bonusGame;
              cc.vv.gameData.setBonusGame(bonusgame);
              for (i = 0; i < extraspins.length; i++) {
                choiceid = i + 1;
                numbernode = cc.find(cc.js.formatStr("mainnode/number%s/addnum", choiceid), _this4._bonusGameAddSpinsUI);
                atlas = cc.vv.gameData.GetAtlasByName("dialog");
                numbernode.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme158_dialog_num" + extraspins[i]);
                if (choiceid == result.data.choiceId) {
                  _numbernode = cc.find(cc.js.formatStr("mainnode/number%s/aninode", choiceid), _this4._bonusGameAddSpinsUI);
                  cc.vv.gameData.playSpine(_numbernode, "animation2", false, null);
                }
              }
              _context8.next = 18;
              return cc.vv.gameData.awaitTime(3);

             case 18:
              _mainnode = cc.find("mainnode", _this4._bonusGameAddSpinsUI);
              cc.tween(_mainnode).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();
              _context8.next = 22;
              return cc.vv.gameData.awaitTime(.5);

             case 22:
              _this4._bonusGameAddSpinsUI.active = false;
              success();

             case 24:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      showFreeGameStartUI: function showFreeGameStartUI(cnt, type) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
                  var mainnode, spcoin, atlas, btn_start, _self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("free_dialog_start_show");
                      _this5._freeGameStartUI.active = true;
                      mainnode = cc.find("mainnode", _this5._freeGameStartUI);
                      spcoin = cc.find("mainnode/bg_coin/getcoin", _this5._freeGameStartUI);
                      atlas = cc.vv.gameData.GetAtlasByName("dialog");
                      spcoin.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme158_dialog_num" + cnt);
                      mainnode.scale = 0;
                      cc.tween(mainnode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      btn_start = cc.find("mainnode/btn_start", _this5._freeGameStartUI);
                      btn_start.active = !("again" == type);
                      _context10.next = 12;
                      return cc.vv.gameData.awaitTime(.5);

                     case 12:
                      if (!("again" == type)) {
                        _context10.next = 22;
                        break;
                      }
                      _context10.next = 15;
                      return cc.vv.gameData.awaitTime(1);

                     case 15:
                      cc.tween(mainnode).to(.5, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();
                      _context10.next = 18;
                      return cc.vv.gameData.awaitTime(.5);

                     case 18:
                      _this5._freeGameStartUI.active = false;
                      success();
                      _context10.next = 28;
                      break;

                     case 22:
                      _self = _this5;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect("pop_click");
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(mainnode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          _self._freeGameStartUI.active = false;
                          success();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                      btn_start.off("click");
                      btn_start.getComponent(cc.Button).interactable = true;
                      btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) switch (_context9.prev = _context9.next) {
                           case 0:
                            btn_start.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context9.stop();
                          }
                        }, _callee9);
                      })));

                     case 28:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x7, _x8) {
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
      showFreeGameEndUI: function showFreeGameEndUI() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success, failed) {
                  var mainnode, lblcoin, nWin, btn_collect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      cc.vv.gameData.isSuperFree() ? Global.SlotsSoundMgr.playEffect("collect_popclose") : Global.SlotsSoundMgr.playEffect("free_dialog_collect_show");
                      _this6._freeGameEndUI.active = true;
                      mainnode = cc.find("mainnode", _this6._freeGameEndUI);
                      lblcoin = cc.find("mainnode/bg_coin/getcoin", _this6._freeGameEndUI);
                      nWin = cc.vv.gameData.getFreeWinCoin();
                      Global.doRoallNumEff(lblcoin, 0, nWin, 1, null, null, 0, true);
                      mainnode.scale = 0;
                      cc.tween(mainnode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context13.next = 10;
                      return cc.vv.gameData.awaitTime(.5);

                     case 10:
                      btn_collect = cc.find("mainnode/btn_collect", _this6._freeGameEndUI);
                      self = _this6;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect("pop_click");
                        btn_collect.getComponent(cc.Button).interactable = false;
                        cc.tween(mainnode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._freeGameEndUI.active = false;
                          success();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                      btn_collect.off("click");
                      btn_collect.getComponent(cc.Button).interactable = true;
                      btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                        return regeneratorRuntime.wrap(function _callee12$(_context12) {
                          while (1) switch (_context12.prev = _context12.next) {
                           case 0:
                            btn_collect.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context12.stop();
                          }
                        }, _callee12);
                      })));

                     case 17:
                     case "end":
                      return _context13.stop();
                    }
                  }, _callee13);
                }));
                return function(_x9, _x10) {
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
      showBonusDoubleStartUI: function showBonusDoubleStartUI() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              return _context17.abrupt("return", new Promise(function() {
                var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success, failed) {
                  var mainnode, btn_collect, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      _this7._bonusDoubleStartUI.active = true;
                      mainnode = cc.find("mainnode", _this7._bonusDoubleStartUI);
                      mainnode.setScale(0);
                      cc.tween(mainnode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context16.next = 6;
                      return cc.vv.gameData.awaitTime(.5);

                     case 6:
                      btn_collect = cc.find("bottombg/btn_collect", mainnode);
                      self = _this7;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect("pop_click");
                        btn_collect.getComponent(cc.Button).interactable = false;
                        cc.tween(mainnode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._bonusDoubleStartUI.active = false;
                          success();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                      btn_collect.off("click");
                      btn_collect.getComponent(cc.Button).interactable = true;
                      btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                          while (1) switch (_context15.prev = _context15.next) {
                           case 0:
                            btn_collect.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context15.stop();
                          }
                        }, _callee15);
                      })));

                     case 13:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function(_x11, _x12) {
                  return _ref10.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context17.stop();
            }
          }, _callee17);
        }))();
      },
      showBonusGamePickOneUI: function showBonusGamePickOneUI() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
             case 0:
              return _context19.abrupt("return", new Promise(function() {
                var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(success, failed) {
                  var mainnode;
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      _this8._bonusGamePickOneUI.active = true;
                      mainnode = cc.find("mainnode", _this8._bonusGamePickOneUI);
                      mainnode.setScale(0);
                      cc.tween(mainnode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.find("mainnode/kuangsp", _this8._bonusGamePickOneUI).active = false;
                      _this8._bonusPickItemList.forEach(function(item) {
                        cc.find("di_def", item).active = true;
                        cc.find("wenhao", item).active = true;
                        cc.find("result", item).active = false;
                        cc.find("dongzhu", item).active = false;
                        item.off("click");
                        item.getComponent(cc.Button).interactable = false;
                        item.on("click", function() {
                          _this8.onClickBonusPickItem(item, success);
                        });
                      });
                      _context18.next = 8;
                      return cc.vv.gameData.awaitTime(.5);

                     case 8:
                      _this8._bonusPickItemList.forEach(function(item) {
                        item.getComponent(cc.Button).interactable = true;
                      });

                     case 9:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                }));
                return function(_x13, _x14) {
                  return _ref12.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context19.stop();
            }
          }, _callee19);
        }))();
      },
      onClickBonusPickItem: function onClickBonusPickItem(item, success) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
          var idx, reqdata, msg, bonusGame, bonusType, result, atlas, pic1, kuangsp, i, restItem, pic2;
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) switch (_context20.prev = _context20.next) {
             case 0:
              _this9._bonusPickItemList.forEach(function(item) {
                item.getComponent(cc.Button).interactable = false;
              });
              idx = parseInt(item.name.substring("item".length));
              reqdata = {
                rtype: 1,
                choiceId: idx
              };
              _context20.next = 5;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 5:
              msg = _context20.sent;
              if (!(200 == msg.code)) {
                _context20.next = 33;
                break;
              }
              Global.SlotsSoundMgr.playEffect("respin_pick");
              bonusGame = msg.data.bonusGame;
              bonusType = msg.data.bonusTypes;
              result = msg.data.result;
              cc.vv.gameData.setBonusGame(bonusGame);
              cc.find("di_def", item).active = false;
              cc.find("wenhao", item).active = false;
              cc.find("result", item).active = true;
              cc.find("dongzhu", item).active = false;
              atlas = cc.vv.gameData.GetAtlasByName("dialog");
              pic1 = "theme158_dialog_6_text" + result.spinCnt;
              cc.find("result", item).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(pic1);
              kuangsp = cc.find("mainnode/kuangsp", _this9._bonusGamePickOneUI);
              kuangsp.active = true;
              kuangsp.getComponent(sp.Skeleton).setAnimation(0, "animation" + idx, true);
              _context20.next = 24;
              return cc.vv.gameData.awaitTime(.5);

             case 24:
              Global.SlotsSoundMgr.playEffect("respin_reveal");
              for (i = 0; i < _this9._bonusPickItemList.length; i++) if (i + 1 != idx) {
                restItem = _this9._bonusPickItemList[i];
                cc.find("di_def", restItem).active = false;
                cc.find("wenhao", restItem).active = false;
                cc.find("result", restItem).active = true;
                cc.find("dongzhu", restItem).active = true;
                pic2 = "theme158_dialog_6_text" + bonusType[i].spinCnt;
                cc.find("result", restItem).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(pic2);
                cc.vv.gameData.playSpine(cc.find("dongzhu", restItem), "animation", false);
              }
              _context20.next = 28;
              return cc.vv.gameData.awaitTime(2);

             case 28:
              cc.tween(cc.find("mainnode", _this9._bonusGamePickOneUI)).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();
              _context20.next = 31;
              return cc.vv.gameData.awaitTime(.5);

             case 31:
              _this9._bonusGamePickOneUI.active = false;
              success();

             case 33:
             case "end":
              return _context20.stop();
            }
          }, _callee20);
        }))();
      },
      showSuperFreeStartFreeUI: function showSuperFreeStartFreeUI(page) {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
             case 0:
              return _context23.abrupt("return", new Promise(function() {
                var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(success, failed) {
                  var mainnode, atlas, btn_start, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee22$(_context22) {
                    while (1) switch (_context22.prev = _context22.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("collect_popup");
                      _this10._superFreeStartUI.active = true;
                      mainnode = cc.find("mainnode", _this10._superFreeStartUI);
                      mainnode.setScale(0);
                      cc.tween(mainnode).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      atlas = cc.vv.gameData.GetAtlasByName("dialog");
                      cc.find("bg_cnt/spr_cnt", mainnode).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme158_dialog_num" + cc.vv.gameData.GetTotalFree());
                      cc.find("spr_page", mainnode).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme158_dialog_win" + page);
                      _context22.next = 10;
                      return cc.vv.gameData.awaitTime(.5);

                     case 10:
                      btn_start = cc.find("btn_start", mainnode);
                      self = _this10;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect("pop_click");
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(mainnode).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._superFreeStartUI.active = false;
                          success();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                      btn_start.off("click");
                      btn_start.getComponent(cc.Button).interactable = true;
                      btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
                        return regeneratorRuntime.wrap(function _callee21$(_context21) {
                          while (1) switch (_context21.prev = _context21.next) {
                           case 0:
                            btn_start.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context21.stop();
                          }
                        }, _callee21);
                      })));

                     case 17:
                     case "end":
                      return _context22.stop();
                    }
                  }, _callee22);
                }));
                return function(_x15, _x16) {
                  return _ref13.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context23.stop();
            }
          }, _callee23);
        }))();
      },
      showBonusDoubleWin: function showBonusDoubleWin(type) {
        var _this11 = this;
        return new Promise(function() {
          var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(success, failed) {
            var showNode, bg, spine;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) switch (_context24.prev = _context24.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("double_popup");
                _this11._bonusDoubleWinUI.active = true;
                cc.find("mainnode1", _this11._bonusDoubleWinUI).active = 1 === type;
                cc.find("mainnode2", _this11._bonusDoubleWinUI).active = 2 === type;
                showNode = cc.find(1 === type ? "mainnode1" : "mainnode2", _this11._bonusDoubleWinUI);
                cc.find("bg_1", showNode).active = 1 === type;
                cc.find("bg_2", showNode).active = 2 === type;
                bg = cc.find("bg_" + type, showNode);
                spine = cc.find("spine", showNode);
                bg.setScale(0);
                cc.tween(bg).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.vv.gameData.playSpine(spine, cc.js.formatStr("animation%s_1", type), false, function() {
                  cc.vv.gameData.playSpine(spine, cc.js.formatStr("animation%s_2", type), true);
                });
                _context24.next = 14;
                return cc.vv.gameData.awaitTime(1.5);

               case 14:
                cc.tween(bg).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                cc.vv.gameData.playSpine(spine, cc.js.formatStr("animation%s_3", type), false);
                _context24.next = 18;
                return cc.vv.gameData.awaitTime(.5);

               case 18:
                _this11._bonusDoubleWinUI.active = false;
                success();

               case 20:
               case "end":
                return _context24.stop();
              }
            }, _callee24);
          }));
          return function(_x17, _x18) {
            return _ref15.apply(this, arguments);
          };
        }());
      },
      playBonusQPAnim: function playBonusQPAnim() {
        Global.SlotsSoundMgr.playEffect("transition2");
        var self = this;
        cc.vv.gameData.playSpine(this._transition2, "animation", false, function() {
          self._transition2.active = false;
        });
      },
      playFreeQPAnim: function playFreeQPAnim() {
        Global.SlotsSoundMgr.playEffect("transition1");
        var self = this;
        cc.vv.gameData.playSpine(this._transition1, "animation", false, function() {
          self._transition1.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Fenrir_BonusGameMgr", "Fenrir_BonusReel", "Fenrir_BonusSlots", "Fenrir_BoxUI", "Fenrir_Boxitem", "Fenrir_Cfg", "Fenrir_GameData", "Fenrir_Logic", "Fenrir_PawInfo", "Fenrir_Reel", "Fenrir_SFreeMgr", "Fenrir_SFreeReel", "Fenrir_SFreeSlots", "Fenrir_Slots", "Fenrir_Symbol", "Fenrir_UIMgr" ]);