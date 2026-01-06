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
  NewMulan_BonusGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2df14QIBxZAyrVlZwypmiE9", "NewMulan_BonusGameMgr");
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
        _bonusId: 3,
        _greenId: 301
      },
      Init: function Init() {
        this._bonusId = 3;
        this._greenId = 301;
        this._node_bonus = cc.find("safe_node/node_bonus", this.node);
        this._node_bonus.active = false;
        this._topSlotsScript = cc.find("slots_top", this._node_bonus).addComponent("NewMulan_BonusSlots");
        this._bottomSlotsScript = cc.find("slots", this._node_bonus).addComponent("NewMulan_BonusSlots");
        this._topType = 1;
        this._bottomType = 2;
        this._topSlotsScript.Init(this._topType);
        this._bottomSlotsScript.Init(this._bottomType);
        this._slots_top = cc.find("slots_top", this._node_bonus);
        this._slots_bottom = cc.find("slots", this._node_bonus);
        this._node_winKuang = cc.find("node_winKuang", this._node_bonus);
        this._node_top = cc.find("node_top", this._node_bonus);
        this._flyNode = cc.find("flyNode", this._node_bonus);
        this._flyNode.active = false;
        this._poolList = [];
        this._poolList.push(cc.find("LMSlots_PrizePool_1/prizePool_Major", this._node_bonus));
        this._poolList.push(cc.find("LMSlots_PrizePool_1/prizePool_Minor", this._node_bonus));
        this._poolList.push(cc.find("LMSlots_PrizePool_1/prizePool_Mini", this._node_bonus));
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName("bonus_Symbol");
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
      },
      showBonusGame: function showBonusGame(bonusdata, bTri) {
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
                      Global.SlotsSoundMgr.playBgm("bgbgm");
                      cc.vv.gameData.setIsBonusGame(true);
                      cc.find("spr_bg_bonus/BG_BeiJIngLan", _this._node_bonus).active = false;
                      _this.setCurCnt();
                      _this._subGameData = bonusdata;
                      if (!(1 === _this._subGameData.state)) {
                        _context.next = 18;
                        break;
                      }
                      _context.next = 8;
                      return cc.vv.gameData.getPopupScript().showBonusGamePickOneUI();

                     case 8:
                      _this._subGameData = cc.vv.gameData.getBonusGame();
                      _context.next = 11;
                      return cc.vv.gameData.getPopupScript().showBonusStartUI(_this._subGameData.type);

                     case 11:
                      _context.next = 13;
                      return cc.vv.gameData.awaitTime(.5);

                     case 13:
                      cc.vv.gameData.GetBottomScript().SetWin(0);
                      _context.next = 16;
                      return _this.showBonusGameUI(bTri);

                     case 16:
                      _context.next = 31;
                      break;

                     case 18:
                      if (!(2 === _this._subGameData.state)) {
                        _context.next = 28;
                        break;
                      }
                      _context.next = 21;
                      return _this.showBonusGameUI(bTri);

                     case 21:
                      _context.next = 23;
                      return cc.vv.gameData.getPopupScript().showBonusAddSpinsUI();

                     case 23:
                      _this._subGameData = cc.vv.gameData.getBonusGame();
                      _this._curCnt = _this._subGameData.totalSpinCnt - _this._subGameData.spinCnt;
                      _this._totalCnt = _this._subGameData.totalSpinCnt;
                      _context.next = 31;
                      break;

                     case 28:
                      if (!(0 === _this._subGameData.state)) {
                        _context.next = 31;
                        break;
                      }
                      _context.next = 31;
                      return _this.showBonusGameUI(bTri);

                     case 31:
                      _this.reqSpine();
                      _this._callBack = success;

                     case 33:
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
              Global.SlotsSoundMgr.playEffect("bgend");
              _context3.next = 3;
              return cc.vv.gameData.awaitTime(.5);

             case 3:
              AppLog.log("###bonus\u6e38\u620f\u7ed3\u675f");
              cc.find("spr_bg_bonus/BG_BeiJIngLan", _this2._node_bonus).active = true;
              _this2.setCurCnt();
              _this2.setSettleNum();
              _context3.next = 9;
              return cc.vv.gameData.awaitTime(1);

             case 9:
              _context3.next = 11;
              return _this2.showBonusSettlement();

             case 11:
              _context3.next = 13;
              return cc.vv.gameData.getPopupScript().showGameWinUI(_this2._subGameData.winCoin, true);

             case 13:
              _this2._node_bonus.active = false;
              _this2.playJackpotAnim(false);
              _context3.next = 17;
              return cc.vv.gameData.awaitTime(1);

             case 17:
              _context3.next = 19;
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

             case 19:
              if (_this2._callBack) {
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.gameData.setIsBonusGame(false);
                _this2._callBack();
                _this2._callBack = null;
                _this2._subGameData = null;
              }
              if (cc.vv.gameData.isBoxGame() && !cc.vv.gameData.isFreeGame()) {
                cc.vv.gameData.getBoxScript().openStorePage();
                cc.vv.gameData.setIsBoxGame(false);
              }

             case 21:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showBonusGameUI: function showBonusGameUI(bTri) {
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
                      _this3._node_bonus.active = true;
                      _this3.lockJackpot(_this3._subGameData.jackpotValues);
                      _this3.playJackpotAnim(true);
                      _this3._totalCnt = _this3._subGameData.totalSpinCnt;
                      _this3._curCnt = _this3._subGameData.totalSpinCnt - _this3._subGameData.spinCnt;
                      _context4.next = 7;
                      return cc.vv.gameData.awaitTime(0);

                     case 7:
                      _this3._bonusType = _this3._subGameData.type;
                      if (!bTri) {
                        _context4.next = 24;
                        break;
                      }
                      _this3.setCurCnt();
                      _this3.setTriggerNum();
                      _this3.setSlotsLockSpr(false);
                      if (!(2 == _this3._bonusType)) {
                        _context4.next = 17;
                        break;
                      }
                      _context4.next = 15;
                      return _this3.playDoubleTriAnim();

                     case 15:
                      _context4.next = 19;
                      break;

                     case 17:
                      _context4.next = 19;
                      return _this3.playOneTriAnim();

                     case 19:
                      _this3.setCurCnt(_this3._curCnt, _this3._totalCnt);
                      _context4.next = 22;
                      return cc.vv.gameData.awaitTime(1);

                     case 22:
                      _context4.next = 29;
                      break;

                     case 24:
                      _this3.setCurCnt(_this3._curCnt, _this3._totalCnt);
                      _this3.setTriggerNum(_this3._subGameData.baseCoin);
                      _this3.setSlotsLockSpr(1 == _this3._bonusType);
                      _context4.next = 29;
                      return _this3.showBonusSlotsUI();

                     case 29:
                      success();

                     case 30:
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
      playDoubleTriAnim: function playDoubleTriAnim() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
                  var kuang1, reelback, kuang2;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _this4._bottomSlotsScript.setAllSymbolNull();
                      _this4._topSlotsScript.setAllSymbolNull();
                      _this4._node_winKuang.position = _this4._slots_top.position;
                      _this4._node_winKuang.active = true;
                      kuang1 = cc.find("NG_BG_panmian", _this4._slots_top).getComponent(sp.Skeleton);
                      reelback = cc.find("node_reelback", _this4._slots_top);
                      kuang2 = cc.find("NG_BG_panmian", _this4._slots_bottom).getComponent(sp.Skeleton);
                      kuang1.node.active = false;
                      reelback.active = false;
                      kuang2.setAnimation(0, "NG_panmian", false);
                      Global.SlotsSoundMgr.playEffect("bgaddselect");
                      _context6.next = 13;
                      return cc.vv.gameData.awaitTime(1);

                     case 13:
                      _context6.next = 15;
                      return _this4.playStartSymbolAnim(_this4._subGameData.slots[1].bonusItems, false);

                     case 15:
                      _context6.next = 17;
                      return _this4.collectSlotsCoin(false, _this4._bottomType, 0);

                     case 17:
                      kuang1.node.active = true;
                      kuang2.setAnimation(0, "NG_panmian2", false);
                      kuang1.setAnimation(0, "BG_panmian_intro", false);
                      cc.tween(_this4._node_winKuang).to(1, {
                        position: cc.find("pos_settle", _this4._node_bonus).position
                      }).start();
                      _context6.next = 23;
                      return cc.vv.gameData.awaitTime(1);

                     case 23:
                      reelback.active = true;
                      _context6.next = 26;
                      return _this4.playStartSymbolAnim(_this4._subGameData.slots[0].bonusItems, true);

                     case 26:
                      success();

                     case 27:
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
      playOneTriAnim: function playOneTriAnim() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
                  var kuang1, reelback, kuang2;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _this5.setSlotsLockSpr(false);
                      _this5._bottomSlotsScript.setAllSymbolNull();
                      _this5._topSlotsScript.setAllSymbolNull();
                      _this5._subGameData.slots[1].bonusItems.forEach(function(item) {
                        _this5.showSymbolNormalAnim(item, false);
                      });
                      _this5._node_winKuang.position = _this5._slots_top.position;
                      _this5._node_winKuang.active = true;
                      kuang1 = cc.find("NG_BG_panmian", _this5._slots_top).getComponent(sp.Skeleton);
                      reelback = cc.find("node_reelback", _this5._slots_top);
                      kuang2 = cc.find("NG_BG_panmian", _this5._slots_bottom).getComponent(sp.Skeleton);
                      kuang1.node.active = false;
                      reelback.active = false;
                      kuang2.setAnimation(0, "NG_panmian", false);
                      _context8.next = 14;
                      return cc.vv.gameData.awaitTime(.5);

                     case 14:
                      kuang1.node.active = true;
                      kuang2.setAnimation(0, "NG_panmian2", false);
                      kuang1.setAnimation(0, "BG_panmian_intro", false);
                      cc.tween(_this5._node_winKuang).to(1, {
                        position: cc.find("pos_settle", _this5._node_bonus).position
                      }).start();
                      Global.SlotsSoundMgr.playEffect("bgaddselect");
                      _context8.next = 21;
                      return cc.vv.gameData.awaitTime(1);

                     case 21:
                      _this5.setSlotsLockSpr(true);
                      _context8.next = 24;
                      return _this5.collectSlotsCoin(false, _this5._bottomType, 0);

                     case 24:
                      _context8.next = 26;
                      return cc.vv.gameData.awaitTime(.5);

                     case 26:
                      reelback.active = true;
                      success();

                     case 28:
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
      showBonusSlotsUI: function showBonusSlotsUI() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      _this6._bottomSlotsScript.setAllSymbolNull();
                      _this6._topSlotsScript.setAllSymbolNull();
                      _this6._node_winKuang.position = cc.find("pos_settle", _this6._node_bonus).position;
                      _this6._subGameData.slots[1].bonusItems.forEach(function(item) {
                        _this6.showSymbolNormalAnim(item, false);
                      });
                      2 == _this6._bonusType && _this6._subGameData.slots[0].bonusItems.forEach(function(item) {
                        _this6.showSymbolNormalAnim(item, true);
                      });
                      _context10.next = 7;
                      return cc.vv.gameData.awaitTime(2);

                     case 7:
                      success();

                     case 8:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x9, _x10) {
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
      showSymbolNormalAnim: function showSymbolNormalAnim(data, isTop) {
        var slots = isTop ? this._topSlotsScript : this._bottomSlotsScript;
        var symbol = slots.GetSymbolByIdx(data.idx);
        symbol.ShowById(data["super"] ? this._greenId : this._bonusId, {
          bonus: data
        });
        symbol.playBonusIdleAnim(true);
      },
      playStartSymbolAnim: function playStartSymbolAnim(bonusItems, isTop) {
        var _this7 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
            var _loop, i;
            return regeneratorRuntime.wrap(function _callee12$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                bonusItems = _this7.sortItems(bonusItems);
                _loop = regeneratorRuntime.mark(function _loop(i) {
                  var col, coin, jp, symbol, flyNode, startNode, _symbol;
                  return regeneratorRuntime.wrap(function _loop$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      col = bonusItems[i].idx - 1;
                      coin = bonusItems[i].coin;
                      jp = bonusItems[i].jackpot;
                      if (isTop) {
                        symbol = _this7._topSlotsScript.GetSymbolByIdx(bonusItems[i].idx);
                        flyNode = cc.instantiate(_this7._flyNode);
                        flyNode.parent = _this7._node_top;
                        flyNode.active = true;
                        startNode = _this7._bottomSlotsScript.GetSymbolByIdx(bonusItems[i].idx).node;
                        flyNode.position = _this7._node_top.convertToNodeSpaceAR(startNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                        Global.SlotsSoundMgr.playEffect("chipadd");
                        flyNode.getComponent(sp.Skeleton).setAnimation(0, "Coin_fly", false);
                        flyNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                          flyNode.destroy();
                        });
                        cc.tween(flyNode).delay(1.6).call(function() {
                          symbol.ShowById(bonusItems[i]["super"] ? _this7._greenId : _this7._bonusId, {
                            bonus: bonusItems[i]
                          });
                          symbol.playBonusStopAnim();
                        }).start();
                      } else {
                        _symbol = _this7._bottomSlotsScript.GetSymbolByIdx(bonusItems[i].idx);
                        _symbol.ShowById(bonusItems[i]["super"] ? _this7._greenId : _this7._bonusId, {
                          bonus: bonusItems[i]
                        });
                        _symbol.playBonusStopAnim();
                      }
                      _context12.next = 6;
                      return cc.vv.gameData.awaitTime(.2);

                     case 6:
                     case "end":
                      return _context12.stop();
                    }
                  }, _loop);
                });
                i = 0;

               case 3:
                if (!(i < bonusItems.length)) {
                  _context13.next = 8;
                  break;
                }
                return _context13.delegateYield(_loop(i), "t0", 5);

               case 5:
                i++;
                _context13.next = 3;
                break;

               case 8:
                _context13.next = 10;
                return cc.vv.gameData.awaitTime(isTop ? 2 : .5);

               case 10:
                success();

               case 11:
               case "end":
                return _context13.stop();
              }
            }, _callee12);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      gainNewGreenGem: function gainNewGreenGem() {
        var _this8 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success, failed) {
            var spine_fire, i, items, slots, j, symbol, sPos, ePos;
            return regeneratorRuntime.wrap(function _callee13$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
               case 0:
                spine_fire = cc.find("path_fire", _this8._node_bonus);
                i = 0;

               case 2:
                if (!(i <= 1)) {
                  _context14.next = 22;
                  break;
                }
                items = _this8._subGameData.slots[i].bonusItems;
                slots = 0 === i ? _this8._topSlotsScript : _this8._bottomSlotsScript;
                j = 0;

               case 6:
                if (!(j < items.length)) {
                  _context14.next = 19;
                  break;
                }
                symbol = slots.GetSymbolByIdx(items[j].idx);
                if (!(items[j]["super"] && !symbol.GetData().bonus)) {
                  _context14.next = 16;
                  break;
                }
                sPos = _this8._node_bonus.convertToNodeSpaceAR(_this8._node_winKuang.convertToWorldSpaceAR(cc.v2(0, 0)));
                ePos = _this8._node_bonus.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                _this8.playFireSpine(spine_fire, sPos, ePos);
                _context14.next = 14;
                return cc.vv.gameData.awaitTime(.5);

               case 14:
                symbol.ShowById(_this8._greenId, {
                  bonus: items[j]
                });
                symbol.playBonusIdleAnim(true);

               case 16:
                j++;
                _context14.next = 6;
                break;

               case 19:
                i++;
                _context14.next = 2;
                break;

               case 22:
                success();

               case 23:
               case "end":
                return _context14.stop();
              }
            }, _callee13);
          }));
          return function(_x13, _x14) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      setTriggerNum: function setTriggerNum(num) {
        cc.find("settle", this._node_winKuang).active = false;
        cc.find("trigger", this._node_winKuang).active = true;
        cc.find("trigger/lbl_win", this._node_winKuang).getComponent(cc.Label).string = num ? Global.FormatNumToComma(num) : "";
      },
      setSettleNum: function setSettleNum(num) {
        cc.find("trigger", this._node_winKuang).active = false;
        cc.find("settle", this._node_winKuang).active = true;
        cc.find("settle/lbl_win", this._node_winKuang).getComponent(cc.Label).string = num ? Global.FormatNumToComma(num) : "";
      },
      getCurSettleNum: function getCurSettleNum() {
        var str = cc.find("settle/lbl_win", this._node_winKuang).getComponent(cc.Label).string;
        return Global.FormatCommaNumToNum(str);
      },
      playWinEff: function playWinEff(bPlay) {
        var node = cc.find("BG_JinBiTiShi", this._node_winKuang);
        if (bPlay) {
          node.active = true;
          node.getComponent(sp.Skeleton).setAnimation(0, "BG_JinBiTiShi", false);
          node.getComponent(sp.Skeleton).setCompleteListener(function() {
            node.active = false;
          });
        } else node.active = false;
      },
      setCurCnt: function setCurCnt(cur, total) {
        var node = cc.find("InfoBackground1", this._node_winKuang);
        if (total) {
          node.active = true;
          cc.find("cur", node).getComponent(cc.Label).string = cur;
          cc.find("total", node).getComponent(cc.Label).string = total;
        } else node.active = false;
      },
      setSlotsLockSpr: function setSlotsLockSpr(bShow) {
        cc.find("DiJieSuo", this._node_bonus).active = bShow;
      },
      playFireSpine: function playFireSpine(node, sPos, ePos) {
        Global.SlotsSoundMgr.playEffect("collectprize");
        var temp = cc.v2(sPos.x, sPos.y).sub(cc.v2(ePos.x, ePos.y));
        var length = temp.mag();
        var angle = temp.signAngle(cc.v2(1, 0));
        node.position = sPos;
        node.scale = length > 400 ? length / 610 : length / 280;
        node.angle = -angle * cc.macro.DEG + 90;
        node.getComponent(sp.Skeleton).setAnimation(0, length > 400 ? "b_fire" : "s_fire", false);
      },
      showBonusSettlement: function showBonusSettlement() {
        var _this9 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success, failed) {
            var slots, curtotal;
            return regeneratorRuntime.wrap(function _callee14$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
               case 0:
                slots = _this9._subGameData.slots;
                curtotal = 0;
                if (!(2 == _this9._subGameData.type)) {
                  _context15.next = 6;
                  break;
                }
                _context15.next = 5;
                return _this9.collectSlotsCoin(true, _this9._topType, curtotal);

               case 5:
                curtotal = _this9.getCurSettleNum();

               case 6:
                _context15.next = 8;
                return _this9.collectSlotsCoin(true, _this9._bottomType, curtotal);

               case 8:
                _context15.next = 10;
                return cc.vv.gameData.awaitTime(1);

               case 10:
                success();

               case 11:
               case "end":
                return _context15.stop();
              }
            }, _callee14);
          }));
          return function(_x15, _x16) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      collectSlotsCoin: function collectSlotsCoin(bSettle, s_type, curtotal) {
        var _this10 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success) {
            var slots, items, isDouble, spine_fire, spine_fire_2, i, idx, symbol, sPos, ePos;
            return regeneratorRuntime.wrap(function _callee15$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                slots = 1 === s_type ? _this10._topSlotsScript : _this10._bottomSlotsScript;
                items = _this10.sortItems(_this10._subGameData.slots[s_type - 1].bonusItems);
                isDouble = 15 === items.length;
                spine_fire = cc.find("path_fire", _this10._node_bonus);
                spine_fire_2 = cc.find("path_fire_2", _this10._node_bonus);
                spine_fire_2.active = false;
                i = 0;

               case 7:
                if (!(i < items.length)) {
                  _context16.next = 51;
                  break;
                }
                idx = items[i].idx;
                symbol = slots.GetSymbolByIdx(idx);
                sPos = _this10._node_bonus.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                ePos = _this10._node_bonus.convertToNodeSpaceAR(_this10._node_winKuang.convertToWorldSpaceAR(cc.v2(0, 0)));
                _this10.playFireSpine(spine_fire, sPos, ePos);
                if (!isDouble) {
                  _context16.next = 18;
                  break;
                }
                _context16.next = 16;
                return cc.vv.gameData.awaitTime(.2);

               case 16:
                spine_fire_2.active = true;
                _this10.playFireSpine(spine_fire_2, sPos, ePos);

               case 18:
                if (!bSettle) {
                  _context16.next = 41;
                  break;
                }
                symbol.playBonusEndAnim();
                if (items[i].coin) curtotal += items[i].coin; else if (items[i].jackpot) {
                  curtotal += items[i].jackpot.value;
                  Global.SlotsSoundMgr.playEffect("JPcount");
                }
                if (!isDouble) {
                  _context16.next = 30;
                  break;
                }
                _context16.next = 24;
                return cc.vv.gameData.awaitTime(.3);

               case 24:
                _this10.setSettleNum(curtotal);
                items[i].coin ? curtotal += items[i].coin : items[i].jackpot && (curtotal += items[i].jackpot.value);
                _context16.next = 28;
                return cc.vv.gameData.awaitTime(.2);

               case 28:
                _context16.next = 32;
                break;

               case 30:
                _context16.next = 32;
                return cc.vv.gameData.awaitTime(.5);

               case 32:
                _this10.setSettleNum(curtotal);
                _this10.playWinEff(true);
                _context16.next = 36;
                return cc.vv.gameData.awaitTime(.5);

               case 36:
                if (!items[i].jackpot) {
                  _context16.next = 39;
                  break;
                }
                _context16.next = 39;
                return cc.vv.gameData.getPopupScript().showWinJpUI(items[i].jackpot.id, items[i].jackpot.value);

               case 39:
                _context16.next = 48;
                break;

               case 41:
                items[i].coin ? curtotal += items[i].coin : items[i].jackpot && (curtotal += items[i].jackpot.value);
                _context16.next = 44;
                return cc.vv.gameData.awaitTime(.5);

               case 44:
                _this10.setTriggerNum(curtotal);
                _this10.playWinEff(true);
                _context16.next = 48;
                return cc.vv.gameData.awaitTime(.5);

               case 48:
                i++;
                _context16.next = 7;
                break;

               case 51:
                success();

               case 52:
               case "end":
                return _context16.stop();
              }
            }, _callee15);
          }));
          return function(_x17) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      lockJackpot: function lockJackpot(jackpotvalus) {
        var prizepool = cc.find("LMSlots_PrizePool_1", this._node_bonus).getComponent("LMSlots_PrizePool_Base");
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
      playJackpotAnim: function playJackpotAnim(bPlay) {
        var moveT = .8;
        var delayT = 2.5;
        for (var i = 0; i < this._poolList.length; i++) if (bPlay) {
          this._poolList[i].opacity = 0;
          cc.tween(this._poolList[i]).delay(i * (2 * moveT + delayT)).repeatForever(cc.tween().to(moveT, {
            opacity: 255
          }).delay(delayT).to(moveT, {
            opacity: 0
          }).delay(2 * (2 * moveT + delayT))).start();
        } else {
          this._poolList[i].stopAllActions();
          this._poolList[i].opacity = 0;
        }
      },
      startSpin: function startSpin() {},
      showSpinResult: function showSpinResult() {},
      spinEnd: function spinEnd() {},
      reqSpine: function reqSpine() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
          var reqdata, msg;
          return regeneratorRuntime.wrap(function _callee16$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              cc.log(cc.js.formatStr("startMove:%s, %s", _this11._curCnt, _this11._totalCnt));
              _this11._curCnt += 1;
              _this11.setCurCnt(_this11._curCnt, _this11._totalCnt);
              2 == _this11._bonusType && _this11._topSlotsScript.StartMove(_this11._subGameData.slots[0].bonusIdxs);
              _this11._bottomSlotsScript.StartMove(_this11._subGameData.slots[1].bonusIdxs);
              _context17.next = 7;
              return cc.vv.gameData.awaitTime(1);

             case 7:
              reqdata = {
                rtype: 3
              };
              _context17.next = 10;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 10:
              msg = _context17.sent;
              if (200 === msg.code && !msg.spcode) {
                _this11._subGameData = msg.data.bonusGame;
                cc.vv.gameData.setBonusGame(_this11._subGameData);
                _this11._bottomSlotsScript.setSpinResult(_this11._subGameData.slots[1].bonusIdxs, _this11._subGameData.slots[1].bonusItems);
                2 == _this11._bonusType && _this11._topSlotsScript.setSpinResult(_this11._subGameData.slots[0].bonusIdxs, _this11._subGameData.slots[0].bonusItems);
              }

             case 12:
             case "end":
              return _context17.stop();
            }
          }, _callee16);
        }))();
      },
      StopMove: function StopMove() {
        2 == this._bonusType && this._topSlotsScript.StopMove();
        this._bottomSlotsScript.StopMove();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
             case 0:
              cc.log("OnSpinEnd");
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              _context18.next = 4;
              return _this12.gainNewGreenGem();

             case 4:
              _context18.next = 6;
              return cc.vv.gameData.awaitTime(1);

             case 6:
              if (!(2 == _this12._subGameData.state)) {
                _context18.next = 15;
                break;
              }
              _context18.next = 9;
              return cc.vv.gameData.getPopupScript().showBonusAddSpinsUI();

             case 9:
              _this12._subGameData = cc.vv.gameData.getBonusGame();
              _this12._curCnt = _this12._subGameData.totalSpinCnt - _this12._subGameData.spinCnt;
              _this12._totalCnt = _this12._subGameData.totalSpinCnt;
              _this12.reqSpine();
              _context18.next = 16;
              break;

             case 15:
              if (_this12._subGameData.spinCnt > 0) {
                cc.vv.gameData.awaitTime(1);
                _this12.reqSpine();
              } else _this12.endBonusGame();

             case 16:
             case "end":
              return _context18.stop();
            }
          }, _callee17);
        }))();
      },
      GetLastStopSlotReel: function GetLastStopSlotReel() {
        var topEndIdx = this._topSlotsScript.GetLastStopReelIdx();
        var bottomEndIdx = this._bottomSlotsScript.GetLastStopReelIdx();
        var lastIdx = bottomEndIdx;
        var stopType = this._bottomType;
        if (2 == this._bonusType) {
          lastIdx = bottomEndIdx || topEndIdx;
          stopType = bottomEndIdx ? this._bottomType : this._topType;
        }
        return {
          slotType: stopType,
          reelIdx: lastIdx
        };
      },
      getMaxReelIdx: function getMaxReelIdx(type, col) {
        var reelList = type == this._topType ? this._topSlotsScript.getLastStopReel() : this._bottomSlotsScript.getLastStopReel();
        return reelList[col];
      },
      sortItems: function sortItems(items) {
        items.sort(function(a, b) {
          return a.idx / 5 - b.idx / 5;
        }).sort(function(a, b) {
          return (a.idx - 1) % 5 - (b.idx - 1) % 5;
        });
        return items;
      },
      getBonusType: function getBonusType() {
        return this._bonusType;
      }
    });
    cc._RF.pop();
  }, {} ],
  NewMulan_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9fc8OGBwdEuafoWzFP6+7X", "NewMulan_BonusReel");
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
        if (3 === symbol.GetShowId() || 301 === symbol.GetShowId()) {
          var data = symbol.GetData();
          if (data.bonus) {
            Global.SlotsSoundMgr.playEffect("nggold");
            symbol.playBonusStopAnim();
          }
        }
        var maxReelIdx = cc.vv.gameData.getBonusGameMgr().getMaxReelIdx(this._type, this._reelIdx % 5);
        this._reelIdx == maxReelIdx && Global.SlotsSoundMgr.playEffect("reelstop");
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
        this.playScaleAnim();
      },
      playScaleAnim: function playScaleAnim() {
        var symbol = this._symbols[0];
        3 !== symbol.GetShowId() && 301 !== symbol.GetShowId() || symbol.playBonusStopAnim();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  NewMulan_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24775kzX5dJWrbLzzuKv5gW", "NewMulan_BonusSlots");
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
          var scp = node.addComponent("NewMulan_BonusReel");
          scp.Init(i, row, this._topAniNode);
          scp.initReelType(this._slotsIndex);
          this._reels.push(scp);
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        var stopT = (reelIdx % 5 + 5 * (this._slotsIndex - 1)) * nIter;
        1 == cc.vv.gameData.getBonusGameMgr().getBonusType() && 2 == this._slotsIndex && (stopT = reelIdx % 5 * nIter);
        return stopT;
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
          var randIdx = Global.random(1, cfg.randomBonusSymbols.length);
          var randVal = cfg.randomBonusSymbols[randIdx - 1];
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
              var item = bonusItems[bonusIdxs.indexOf(i + 1)];
              if (item["super"]) res.sid = 301; else {
                res.sid = 3;
                res.data.bonus = item;
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
      setAllSymbolNull: function setAllSymbolNull() {
        for (var col = 0; col < this._col; col++) {
          this._reels[col].GetSymbolByRow(0).ClearState();
          this._reels[col].GetSymbolByRow(0).ShowById(14);
          this._reels[col].GetSymbolByRow(1).ShowById(14);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  NewMulan_BoxGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dc25nHHcVIcrNv4+v3b/dN", "NewMulan_BoxGame");
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
      notClick: 3,
      coin: 4,
      bonus: 5,
      free: 6
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _itemList: []
      },
      start: function start() {},
      Init: function Init() {
        this._node_box = cc.find("safe_node/node_box", this.node);
        this._node_box.active = false;
        this._btn_close = cc.find("layout/btn_close", this._node_box);
        Global.btnClickEvent(this._btn_close, this.onClickCloseBtn, this);
        this._node_items = cc.find("layout/boxKuang/node_items", this._node_box);
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
        this._box_tip = cc.find("layout/box_tip", this._node_box);
        this._box_tip.active = false;
        this._spr_tip = cc.find("layout/spr_tip", this._node_box);
        this._spr_tip.active = false;
        var btn_tip = cc.find("layout/node_flag/btn_tip", this._node_box);
        Global.btnClickEvent(btn_tip, this.clickHelpBtn, this);
        var btn_left = cc.find("layout/btn_left", this._node_box);
        Global.btnClickEvent(btn_left, this.clickLeftBtn, this);
        var btn_right = cc.find("layout/btn_right", this._node_box);
        Global.btnClickEvent(btn_right, this.clickRightBtn, this);
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
                Global.SlotsSoundMgr.playEffect("mapin");
                _this._node_box.active = true;
                _this._node_box.opacity = 0;
                layout = cc.find("layout", _this._node_box);
                layout.setScale(0);
                cc.tween(_this._node_box).to(.5, {
                  opacity: 255
                }).start();
                cc.tween(layout).to(.5, {
                  scale: 1
                }).start();
                _this._flagStore = cc.vv.gameData.getFlagStore();
                _this._curPage = _this._flagStore.unlockPage;
                _this.showCurMoney(_this._flagStore.flagCnt);
                _this.showAllItems();
                _this.showPageFooter();
                _this.showPageWinDetail();
                _context.next = 16;
                return cc.vv.gameData.awaitTime(.5);

               case 16:
                _this._canClickItem = true;
                success();

               case 18:
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
                      Global.SlotsSoundMgr.playEffect("mapout");
                      layout = cc.find("layout", _this2._node_box);
                      cc.tween(_this2._node_box).to(.5, {
                        opacity: 0
                      }).start();
                      cc.tween(layout).to(.5, {
                        scale: 0
                      }).start();
                      _context2.next = 6;
                      return cc.vv.gameData.awaitTime(.5);

                     case 6:
                      _this2._node_box.active = false;
                      success();

                     case 8:
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
      showCurMoney: function showCurMoney(cnt) {
        cc.find("layout/node_flag/desctext", this._node_box).getComponent(cc.Label).string = Global.FormatNumToComma(cnt);
      },
      showAllItems: function showAllItems() {
        var pageData = this._flagStore.unlockItems[this._curPage - 1];
        var pagePrice = this._flagStore.pageDetails[this._curPage - 1].price;
        for (var i = 1; i <= 9; i++) {
          var item = this._itemList[i].node;
          var type = this._itemList[i].type;
          var data = void 0;
          if (this._curPage <= this._flagStore.unlockPage) {
            var itemData = this.getItemData(i, pageData);
            if (itemData) {
              if (itemData.coin > 0) {
                type = itemType.coin;
                data = itemData.coin;
                this.setItemState(item, itemType.coin, itemData.coin);
              } else if (itemData.bonusGame) {
                type = itemType.bonus;
                this.setItemState(item, itemType.bonus);
              } else if (itemData.freeInfo) {
                type = itemType.free;
                this.setItemState(item, itemType.free);
              }
            } else if (pagePrice <= this._flagStore.flagCnt) {
              type = itemType.canClick;
              data = pagePrice;
              this.setItemState(item, itemType.canClick, pagePrice);
            } else {
              type = itemType.notClick;
              data = pagePrice;
              this.setItemState(item, itemType.notClick, pagePrice);
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
        var spine_box = cc.find("Map_XiangZi", item);
        var spr_disabled = cc.find("map_item_disabled", item);
        var map_pay_board = cc.find("map_pay_board", item);
        var win_lbl = cc.find("boxOpenNum", item);
        var win_fg = cc.find("Map_fg_EN", item);
        var win_bonus = cc.find("map_bonus_EN", item);
        spine_box.active = type !== itemType.notClick;
        type === itemType.lock ? spine_box.getComponent(sp.Skeleton).setAnimation(0, "Map_XiangZi_Suo_Loop", true) : type === itemType.canClick ? spine_box.getComponent(sp.Skeleton).setAnimation(0, "Map_XiangZi_Xiang_Loop1", true) : type !== itemType.coin && type !== itemType.bonus && type !== itemType.free || spine_box.getComponent(sp.Skeleton).setAnimation(0, "Map_XiangZi_Xiang_Loop2", true);
        spr_disabled.active = type === itemType.notClick;
        map_pay_board.active = type === itemType.lock || type === itemType.canClick || type === itemType.notClick;
        map_pay_board.active && (cc.find("collectFlag", map_pay_board).getComponent(cc.Label).string = Global.FormatNumToComma(data));
        win_lbl.active = type === itemType.coin;
        win_lbl.active && (win_lbl.getComponent(cc.Label).string = Global.formatNumShort(data, 1));
        win_fg.active = type === itemType.free;
        win_bonus.active = type === itemType.bonus;
      },
      setItemResult: function setItemResult(idx, data) {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var item, spine_box, map_pay_board, win_lbl, win_fg, win_bonus, showNode;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                item = _this3._itemList[idx].node;
                spine_box = cc.find("Map_XiangZi", item);
                map_pay_board = cc.find("map_pay_board", item);
                win_lbl = cc.find("boxOpenNum", item);
                win_fg = cc.find("Map_fg_EN", item);
                win_bonus = cc.find("map_bonus_EN", item);
                spine_box.getComponent(sp.Skeleton).setAnimation(0, "Map_XiangZi_Xiang_DaKai", false);
                spine_box.getComponent(sp.Skeleton).addAnimation(0, "Map_XiangZi_Xiang_Loop2", true);
                map_pay_board.active = false;
                if (data.coin > 0) {
                  _this3._itemList[idx].type = itemType.coin;
                  win_lbl.getComponent(cc.Label).string = Global.formatNumShort(data.coin, 1);
                  showNode = win_lbl;
                } else if (data.bonusGame) {
                  _this3._itemList[idx].type = itemType.bonus;
                  showNode = win_bonus;
                } else if (data.freeInfo) {
                  _this3._itemList[idx].type = itemType.free;
                  showNode = win_fg;
                }
                showNode.active = true;
                showNode.setScale(0);
                cc.tween(showNode).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context4.next = 15;
                return cc.vv.gameData.awaitTime(.5);

               case 15:
                success();

               case 16:
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
        if (curType === itemType.lock || curType === itemType.notClick) this.playBoxTipAnim(event.node); else if (this._itemList[idx].type === itemType.canClick) {
          Global.SlotsSoundMgr.playEffect("caseopen");
          this._canClickItem = false;
          this.onSendSeq(idx);
        }
      },
      onSendSeq: function onSendSeq(idx) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var data, msg;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              data = {
                rtype: 4,
                pageId: _this4._curPage,
                choiceId: idx
              };
              _context5.next = 3;
              return cc.vv.gameData.reqSubGame(data);

             case 3:
              msg = _context5.sent;
              cc.log(msg);
              200 === msg.code && msg.data && 4 == msg.data.rtype && _this4.showClickResult(msg.data);

             case 6:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showClickResult: function showClickResult(data) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var result, idx, i;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this5._flagStore = data.flagStore;
              cc.vv.gameData.setFlagStore(_this5._flagStore);
              _this5.showCurMoney(_this5._flagStore.flagCnt);
              cc.vv.gameData.GetSlotsScript().setFlagCnt(_this5._flagStore.flagCnt);
              result = data.result;
              idx = data.choiceId;
              _context6.next = 8;
              return _this5.setItemResult(idx, result);

             case 8:
              if (_this5._flagStore.pageDetails[_this5._curPage - 1].price > _this5._flagStore.flagCnt) {
                for (i = 1; i <= 9; i++) if (_this5._itemList[i].type === itemType.canClick) {
                  _this5._itemList[i].type = itemType.notClick;
                  _this5.setItemState(_this5._itemList[i].node, itemType.notClick, _this5._itemList[i].data);
                }
                Global.SlotsSoundMgr.playEffect("caseunlock");
              }
              if (result.coin > 0) {
                cc.vv.gameData.AddCoin(result.coin);
                cc.vv.gameData.GetBottomScript().SetWin(result.coin);
                cc.vv.gameData.GetTopScript().ShowCoin();
              }
              if (!(result.freeInfo || result.bonusGame || result.pageReward)) {
                _context6.next = 57;
                break;
              }
              _context6.next = 13;
              return cc.vv.gameData.awaitTime(.5);

             case 13:
              cc.vv.gameData.setIsBoxGame(true);
              _context6.next = 16;
              return _this5.closeStorePage();

             case 16:
              if (!result.freeInfo) {
                _context6.next = 33;
                break;
              }
              cc.vv.gameData.SetTotalFree(result.freeInfo.freeCnt);
              cc.vv.gameData.SetFreeTime(result.freeInfo.freeCnt);
              _context6.next = 21;
              return cc.vv.gameData.awaitTime(.5);

             case 21:
              _context6.next = 23;
              return cc.vv.gameData.getPopupScript().showFreeGameStartUI(result.freeInfo.freeCnt, true);

             case 23:
              cc.vv.gameData.getPopupScript().playFreeQPAnim();
              _context6.next = 26;
              return cc.vv.gameData.awaitTime(2);

             case 26:
              cc.vv.gameData.GetBottomScript().SetWin(0);
              cc.vv.gameData.GetSlotsScript().ShowGameview(true);
              _context6.next = 30;
              return cc.vv.gameData.awaitTime(1);

             case 30:
              cc.vv.gameData.GetBottomScript().CanDoNextRound();
              _context6.next = 37;
              break;

             case 33:
              if (!result.bonusGame) {
                _context6.next = 37;
                break;
              }
              cc.vv.gameData.setBonusGame(result.bonusGame);
              _context6.next = 37;
              return cc.vv.gameData.getBonusGameMgr().showBonusGame(result.bonusGame, true);

             case 37:
              if (!result.pageReward) {
                _context6.next = 55;
                break;
              }
              cc.vv.gameData.setPageReward(result.pageReward);
              cc.vv.gameData.setIsSuperFree(true);
              cc.vv.gameData.SetTotalFree(result.pageReward.freeCnt);
              cc.vv.gameData.SetFreeTime(result.pageReward.freeCnt);
              _context6.next = 44;
              return cc.vv.gameData.awaitTime(.5);

             case 44:
              _context6.next = 46;
              return cc.vv.gameData.getPopupScript().showSuperFreeStartFreeUI(result.pageReward);

             case 46:
              cc.vv.gameData.getPopupScript().playFreeQPAnim();
              _context6.next = 49;
              return cc.vv.gameData.awaitTime(2);

             case 49:
              cc.vv.gameData.GetBottomScript().SetWin(0);
              cc.vv.gameData.GetBottomScript().ShowFreeModel(true, 0, result.pageReward.freeCnt);
              cc.vv.gameData.getSuperFreeMgr().initShowSlotsDate();
              _context6.next = 54;
              return cc.vv.gameData.awaitTime(2);

             case 54:
              cc.vv.gameData.GetBottomScript().CanDoNextRound();

             case 55:
              _context6.next = 58;
              break;

             case 57:
              _this5._canClickItem = true;

             case 58:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      onClickCloseBtn: function onClickCloseBtn() {
        this.closeStorePage();
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
      },
      playBoxTipAnim: function playBoxTipAnim(node) {
        var _this6 = this;
        if (this._popBoxTix) return;
        this._box_tip.stopAllActions();
        if (this._box_tip.active) this._box_tip.runAction(cc.sequence(cc.scaleTo(this._box_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this6._box_tip.active = false;
        }))); else {
          Global.SlotsSoundMgr.playEffect("tips");
          this._box_tip.position = this._box_tip.parent.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
          this._box_tip.active = true;
          this._box_tip.setScale(0);
          this._box_tip.runAction(cc.sequence(cc.callFunc(function() {
            _this6._popBoxTix = true;
          }), cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this6._box_tip.active = false;
            _this6._popBoxTix = false;
          })));
        }
      },
      clickHelpBtn: function clickHelpBtn() {
        var _this7 = this;
        Global.SlotsSoundMgr.playEffect("tips");
        this._spr_tip.stopAllActions();
        if (this._spr_tip.active) this._spr_tip.runAction(cc.sequence(cc.scaleTo(this._spr_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this7._spr_tip.active = false;
        }))); else {
          this._spr_tip.active = true;
          this._spr_tip.setScale(0);
          this._spr_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this7._spr_tip.active = false;
          })));
        }
      },
      clickLeftBtn: function clickLeftBtn() {
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
              Global.SlotsSoundMgr.playEffect("changebutton");
              _this8._curPage <= 1 ? _this8._curPage = 4 : _this8._curPage--;
              _this8.refreshDataWithAction(20);
              _this8.showPageFooter();
              _this8.showPageWinDetail();
              _context7.next = 10;
              return cc.vv.gameData.awaitTime(1);

             case 10:
              _this8._canClickItem = true;

             case 11:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      clickRightBtn: function clickRightBtn() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              if (_this9._canClickItem) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");

             case 2:
              _this9._canClickItem = false;
              Global.SlotsSoundMgr.playEffect("changebutton");
              _this9._curPage >= 4 ? _this9._curPage = 1 : _this9._curPage++;
              _this9.refreshDataWithAction(20);
              _this9.showPageFooter();
              _this9.showPageWinDetail();
              _context8.next = 10;
              return cc.vv.gameData.awaitTime(1);

             case 10:
              _this9._canClickItem = true;

             case 11:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      refreshDataWithAction: function refreshDataWithAction(deltaX) {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var i, item;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              if (0 != deltaX) {
                _this10._node_items.stopAllActions();
                _this10._node_items.x = 0;
                _this10._node_items.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, deltaX, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -deltaX, 0))));
              }
              _this10.showAllItems();
              for (i = 1; i <= 9; i++) {
                item = _this10._itemList[i].node;
                item.setScale(.1);
                item.stopAllActions();
                item.runAction(cc.scaleTo(.1 * i, 1, 1).easing(cc.easeBackOut()));
              }

             case 3:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      showPageFooter: function showPageFooter() {
        for (var i = 1; i <= 4; i++) {
          var choosed = cc.find(cc.js.formatStr("layout/choose_bg/point%s/choice", i), this._node_box);
          choosed.active = i === this._curPage;
        }
      },
      showPageWinDetail: function showPageWinDetail() {
        var node_lock = cc.find("layout/node_lock", this._node_box);
        var node_unlock = cc.find("layout/node_unlock", this._node_box);
        if (this._curPage <= this._flagStore.unlockPage) {
          node_lock.active = false;
          node_unlock.active = true;
          cc.find("page", node_unlock).getComponent("ImgSwitchCmp").setIndex(this._curPage - 1);
          cc.find("pan", node_unlock).getComponent("ImgSwitchCmp").setIndex(this._curPage - 1);
        } else {
          node_lock.active = true;
          node_unlock.active = false;
          cc.find("page", node_lock).getComponent("ImgSwitchCmp").setIndex(this._curPage - 2);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  NewMulan_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8489erpeaVLs5p9tMcEeC71", "NewMulan_Cfg");
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
          intro_name: "Wild_Intro",
          name: "Wild_Loop2",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "Scatter_Loop",
          zIndex: 300
        },
        trigger_ani: {
          name: "Scatter_Loop",
          zIndex: 300
        },
        stop_ani: {
          name: "Scatter_Intro",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        trigger_ani: {
          name: "Chip_JinBi_Loop2",
          zIndex: 300
        },
        stop_ani: {
          name: "Chip_JinBi_Intro",
          zIndex: 300
        },
        b_stop_ani: {
          name: "Chip_JinBi_Intro2",
          zIndex: 300
        },
        b_idle_ani: {
          name: "Chip_JinBi_Loop1",
          zIndex: 300
        },
        b_end_ani: {
          name: "Chip_JinBi_End2",
          zIndex: 300
        },
        isMask: false
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w301",
        b_stop_ani: {
          name: "Chip_Green_Intro",
          zIndex: 300
        },
        b_idle_ani: {
          name: "Chip_Green_Loop",
          zIndex: 300
        },
        b_end_ani: {
          name: "Chip_Green_End",
          zIndex: 300
        },
        isMask: false
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "H1",
        win_ani: {
          name: "H1",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "H2",
        win_ani: {
          name: "H2",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "H3",
        win_ani: {
          name: "H3",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "H4",
        win_ani: {
          name: "H4",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "H5",
        win_ani: {
          name: "H5",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "L1",
        win_ani: {
          name: "clean",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "L2",
        win_ani: {
          name: "clean",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "L3",
        win_ani: {
          name: "clean",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "L4",
        win_ani: {
          name: "clean",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "L5",
        win_ani: {
          name: "clean",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 14, {
        node: "s0"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "NewMulan_Slots",
        Reels: "NewMulan_Reels",
        Symbols: "NewMulan_Symbol"
      },
      col: 5,
      row: 3,
      bonusCol: 15,
      bonusRow: 1,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 123
      },
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      randomBonusSymbols: [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      autoModelDelay: 1,
      speed: 3e3,
      reelStopInter: .2,
      bonusReelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      helpItems: [ "games/NewMulan/prefab/help_node/LMSlots_Help_item1", "games/NewMulan/prefab/help_node/LMSlots_Help_item2" ],
      commEffect: {
        path: "games/NewMulan/",
        win1: [ "win_a", "win_end" ],
        win2: [ "win_b", "win_end" ],
        win3: [ "win_c", "win_end" ],
        win4: [ "win_d", "win_end" ]
      },
      AddAntiTime: 1.8,
      normalBgm: "ngbgm",
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/NewMulan/",
        reelStopSound: "reelstop",
        symbolStopSound: "scatter",
        antSound: "reelfast",
        antSpeed: 2e3
      }, {
        id: [ 3 ],
        mini: 1,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "",
        path: "games/NewMulan/",
        reelStopSound: "reelstop",
        symbolStopSound: "nggold",
        antSound: "",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  NewMulan_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b17e3UWsDtF14XXaKMOhSNA", "NewMulan_GameData");
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
        cc.log(deskInfo);
        this._bonusGame = deskInfo.bonusGame;
        this._flagStore = deskInfo.flagStore;
        this._pageReward = deskInfo.pageReward;
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        cc.log(msg);
        if (200 == msg.code) {
          this._bonusGame = msg.bonusGame;
          this._flagStore = msg.flagStore;
          this._pageReward = msg.pageReward;
          this._freeWinCoin = msg.freeWinCoin;
        }
        this._super(msg);
      },
      setPopupScript: function setPopupScript(val) {
        this._popouScp = val;
      },
      getPopupScript: function getPopupScript() {
        return this._popouScp;
      },
      setBoxScript: function setBoxScript(val) {
        this._boxScp = val;
      },
      getBoxScript: function getBoxScript() {
        return this._boxScp;
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
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      },
      setFreeWinCoin: function setFreeWinCoin(val) {
        this._freeWinCoin = val;
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
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needbet;
      },
      getState: function getState() {
        return this._deskInfo.state;
      },
      getFlagStore: function getFlagStore() {
        return this._flagStore;
      },
      setFlagStore: function setFlagStore(val) {
        this._flagStore = val;
      },
      getBonusGame: function getBonusGame() {
        return this._bonusGame;
      },
      setBonusGame: function setBonusGame(val) {
        this._bonusGame = val;
      },
      isSuperFree: function isSuperFree() {
        return this._isSuperFree;
      },
      setIsSuperFree: function setIsSuperFree(bSFree) {
        this._isSuperFree = bSFree;
      },
      setIsFreeGame: function setIsFreeGame(val) {
        this._isFreeGame = val;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  NewMulan_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5babdPcnT9IerlruAjojaex", "NewMulan_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("NewMulan_Popup");
        cc.vv.gameData.setPopupScript(script_popup);
        script_popup.Init();
        var script_box = this.node.addComponent("NewMulan_BoxGame");
        cc.vv.gameData.setBoxScript(script_box);
        script_box.Init();
        var script_bonus = this.node.addComponent("NewMulan_BonusGameMgr");
        cc.vv.gameData.setBonusGameMgr(script_bonus);
        script_bonus.Init();
        var scp_superFree = this.node.addComponent("NewMulan_SFreeMgr");
        cc.vv.gameData.setSuperFreeMgr(scp_superFree);
        scp_superFree.Init();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  NewMulan_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbb27gEgXdMaoPtJaD8JHWH", "NewMulan_Popup");
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
        this._node_popup = cc.find("safe_node/node_popup", this.node);
        this._node_popup.active = false;
        this._bg_guochang = cc.find("BG_GuoChang", this._node_popup);
        this._fg_guochang = cc.find("FG_GuoChang", this._node_popup);
        this._bg_guochang.active = false;
        this._fg_guochang.active = false;
        this._bonusGameStartUI = cc.find("bonusGameStartUI", this._node_popup);
        this._gameWinUI = cc.find("gameWinUI", this._node_popup);
        this._freeGameStartUI = cc.find("freeGameStartUI", this._node_popup);
        this._bonusGameAddSpinsUI = cc.find("bonusGameAddSpins", this._node_popup);
        this._bonusGamePickOneUI = cc.find("bonusGamePickOneUI", this._node_popup);
        this._superFreeStartUI = cc.find("superFreeStartUI", this._node_popup);
        this._winJpUI = cc.find("winJpUI", this._node_popup);
        this._bonusGameStartUI.active = false;
        this._gameWinUI.active = false;
        this._freeGameStartUI.active = false;
        this._bonusGameAddSpinsUI.active = false;
        this._bonusGamePickOneUI.active = false;
        this._superFreeStartUI.active = false;
        this._winJpUI.active = false;
      },
      showGameWinUI: function showGameWinUI(winCoin, bBonus) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _this._node_popup.active = true;
                cc.find("mask", _this._node_popup).active = true;
                if (bBonus) {
                  _this._bg_guochang.active = true;
                  _this._bg_guochang.getComponent(sp.Skeleton).setAnimation(0, "BG_GuoChang_Intro", false);
                  _this._bg_guochang.getComponent(sp.Skeleton).addAnimation(0, "BG_GuoChang_Loop", true);
                } else Global.SlotsSoundMgr.playEffect("fg_bg_end");
                _this._gameWinUI.active = true;
                _this._gameWinUI.setScale(0);
                cc.tween(_this._gameWinUI).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("total_grand/lbl", _this._gameWinUI).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                btn = cc.find("FG_btn", _this._gameWinUI);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this;
                clickFunc = function() {
                  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        btn.getComponent(cc.Button).interactable = false;
                        cc.tween(self._gameWinUI).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context.next = 4;
                        return cc.vv.gameData.awaitTime(.3);

                       case 4:
                        if (!bBonus) {
                          _context.next = 10;
                          break;
                        }
                        self._bg_guochang.getComponent(sp.Skeleton).setAnimation(0, "BG_GuoChang_End", false);
                        _context.next = 8;
                        return cc.vv.gameData.awaitTime(.8);

                       case 8:
                        _context.next = 12;
                        break;

                       case 10:
                        _context.next = 12;
                        return cc.vv.gameData.awaitTime(.2);

                       case 12:
                        self._node_popup.active = false;
                        self._bg_guochang.active = false;
                        self._gameWinUI.active = false;
                        success();

                       case 16:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function clickFunc() {
                    return _ref2.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));

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
      showBonusStartUI: function showBonusStartUI(type) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("bgTransition");
                      _this2._node_popup.active = true;
                      cc.find("mask", _this2._node_popup).active = true;
                      _this2._bg_guochang.active = true;
                      _this2._bg_guochang.getComponent(sp.Skeleton).setAnimation(0, "BG_GuoChang_Intro", false);
                      _this2._bg_guochang.getComponent(sp.Skeleton).addAnimation(0, "BG_GuoChang_Loop", true);
                      _this2._bonusGameStartUI.active = true;
                      _this2._bonusGameStartUI.setScale(0);
                      cc.tween(_this2._bonusGameStartUI).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.find("BGOne/ACTIVATED_EN", _this2._bonusGameStartUI).getComponent("ImgSwitchCmp").setIndex(type - 1);
                      _context4.next = 12;
                      return cc.vv.gameData.awaitTime(2);

                     case 12:
                      cc.tween(_this2._bonusGameStartUI).to(.5, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();
                      _context4.next = 15;
                      return cc.vv.gameData.awaitTime(.3);

                     case 15:
                      _this2._bg_guochang.getComponent(sp.Skeleton).setAnimation(0, "BG_GuoChang_End", false);
                      _this2._node_popup.active = false;
                      _this2._bg_guochang.active = false;
                      _this2._bonusGameStartUI.active = false;
                      success();

                     case 20:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function(_x3, _x4) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      showBonusAddSpinsUI: function showBonusAddSpinsUI() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
                  var tit1, tit2, canClick, itemList, i, item, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("wandshow");
                      _this3._node_popup.active = true;
                      cc.find("mask", _this3._node_popup).active = true;
                      _this3._bonusGameAddSpinsUI.active = true;
                      _this3._bonusGameAddSpinsUI.setScale(0);
                      cc.tween(_this3._bonusGameAddSpinsUI).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      tit1 = cc.find("select_additional_EN", _this3._bonusGameAddSpinsUI);
                      tit2 = cc.find("youve_won_EN", _this3._bonusGameAddSpinsUI);
                      tit1.active = true;
                      tit2.active = false;
                      canClick = true;
                      itemList = [];
                      for (i = 1; i <= 3; i++) {
                        item = cc.find("number" + i, _this3._bonusGameAddSpinsUI);
                        itemList.push(item);
                      }
                      self = _this3;
                      clickFunc = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(item, idx) {
                          var lingpai, reqdata, msg, extraspins, bonusgame, _i, restItem, _lingpai;
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) switch (_context6.prev = _context6.next) {
                             case 0:
                              if (canClick) {
                                _context6.next = 2;
                                break;
                              }
                              return _context6.abrupt("return");

                             case 2:
                              canClick = false;
                              itemList[0].stopAllActions();
                              item.getComponent(cc.Button).interactable = false;
                              lingpai = cc.find("lingpai", item).getComponent(sp.Skeleton);
                              Global.SlotsSoundMgr.playEffect("wandclick");
                              reqdata = {
                                rtype: 2,
                                choiceId: idx + 1
                              };
                              _context6.next = 10;
                              return cc.vv.gameData.reqSubGame(reqdata);

                             case 10:
                              msg = _context6.sent;
                              if (!(msg && 200 == msg.code && 2 == msg.data.rtype)) {
                                _context6.next = 31;
                                break;
                              }
                              extraspins = msg.data.extraSpins;
                              bonusgame = msg.data.bonusGame;
                              cc.vv.gameData.setBonusGame(bonusgame);
                              tit1.active = false;
                              tit2.active = true;
                              lingpai.setSkin(cc.js.formatStr("result_bg_%s_EN", extraspins[idx]));
                              lingpai.setAnimation(0, "lingpai_bg_click", false);
                              Global.SlotsSoundMgr.playEffect("wandreverse");
                              _context6.next = 22;
                              return cc.vv.gameData.awaitTime(1.3);

                             case 22:
                              for (_i = 0; _i < itemList.length; _i++) if (_i != idx) {
                                restItem = itemList[_i];
                                _lingpai = cc.find("lingpai", restItem).getComponent(sp.Skeleton);
                                _lingpai.setSkin(cc.js.formatStr("result_bg_%s_EN", extraspins[_i]));
                                _lingpai.setAnimation(0, "lingpai_bg_grey", false);
                              }
                              _context6.next = 25;
                              return cc.vv.gameData.awaitTime(2);

                             case 25:
                              cc.tween(self._bonusGameAddSpinsUI).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context6.next = 28;
                              return cc.vv.gameData.awaitTime(.5);

                             case 28:
                              self._bonusGameAddSpinsUI.active = false;
                              self._node_popup.active = false;
                              success();

                             case 31:
                             case "end":
                              return _context6.stop();
                            }
                          }, _callee6);
                        }));
                        return function clickFunc(_x7, _x8) {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(itemList[0], function() {
                        clickFunc(itemList[0], 0);
                      });
                      itemList.forEach(function(item, idx) {
                        var lingpai = cc.find("lingpai", item).getComponent(sp.Skeleton);
                        lingpai.setSkin("default");
                        lingpai.setAnimation(0, "lingpai_bg_idle", true);
                        item.off("click");
                        item.getComponent(cc.Button).interactable = true;
                        item.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) switch (_context7.prev = _context7.next) {
                             case 0:
                              clickFunc(item, idx);

                             case 1:
                             case "end":
                              return _context7.stop();
                            }
                          }, _callee7);
                        })));
                      });

                     case 17:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x5, _x6) {
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
      showFreeGameStartUI: function showFreeGameStartUI(cnt, bFirst) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
                  var btn, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(bFirst ? "fgbegin" : "fgretrigger");
                      _this4._node_popup.active = true;
                      cc.find("mask", _this4._node_popup).active = true;
                      _this4._freeGameStartUI.active = true;
                      _this4._freeGameStartUI.setScale(0);
                      cc.tween(_this4._freeGameStartUI).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.find("lbl", _this4._freeGameStartUI).getComponent(cc.Label).string = cnt;
                      cc.find("freeGame", _this4._freeGameStartUI).active = bFirst;
                      cc.find("extraFreeGame", _this4._freeGameStartUI).active = !bFirst;
                      btn = cc.find("FG_btn", _this4._freeGameStartUI);
                      btn.active = bFirst;
                      _context12.next = 13;
                      return cc.vv.gameData.awaitTime(.5);

                     case 13:
                      if (!bFirst) {
                        _context12.next = 22;
                        break;
                      }
                      self = _this4;
                      clickFunc = function() {
                        var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) switch (_context10.prev = _context10.next) {
                             case 0:
                              btn.getComponent(cc.Button).interactable = false;
                              cc.tween(self._freeGameStartUI).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context10.next = 4;
                              return cc.vv.gameData.awaitTime(.5);

                             case 4:
                              self._freeGameStartUI.active = false;
                              self._node_popup.active = false;
                              success();

                             case 7:
                             case "end":
                              return _context10.stop();
                            }
                          }, _callee10);
                        }));
                        return function clickFunc() {
                          return _ref9.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                      btn.off("click");
                      btn.getComponent(cc.Button).interactable = true;
                      btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) switch (_context11.prev = _context11.next) {
                           case 0:
                            btn.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context11.stop();
                          }
                        }, _callee11);
                      })));
                      _context12.next = 30;
                      break;

                     case 22:
                      _context12.next = 24;
                      return cc.vv.gameData.awaitTime(2);

                     case 24:
                      cc.tween(_this4._freeGameStartUI).to(.5, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();
                      _context12.next = 27;
                      return cc.vv.gameData.awaitTime(.5);

                     case 27:
                      _this4._freeGameStartUI.active = false;
                      _this4._node_popup.active = false;
                      success();

                     case 30:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function(_x9, _x10) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      showBonusGamePickOneUI: function showBonusGamePickOneUI() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              return _context17.abrupt("return", new Promise(function() {
                var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success, failed) {
                  var canClick, itemList, i, item, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("wandshow");
                      _this5._node_popup.active = true;
                      cc.find("mask", _this5._node_popup).active = true;
                      _this5._bonusGamePickOneUI.active = true;
                      _this5._bonusGamePickOneUI.setScale(0);
                      cc.tween(_this5._bonusGamePickOneUI).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      canClick = true;
                      itemList = [];
                      for (i = 1; i <= 5; i++) {
                        item = cc.find("item" + i, _this5._bonusGamePickOneUI);
                        itemList.push(item);
                      }
                      self = _this5;
                      clickFunc = function() {
                        var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(item, idx) {
                          var lingpai, reqdata, msg, result, bonusType, bonusGame, _i2, restItem, _lingpai2;
                          return regeneratorRuntime.wrap(function _callee14$(_context14) {
                            while (1) switch (_context14.prev = _context14.next) {
                             case 0:
                              if (canClick) {
                                _context14.next = 2;
                                break;
                              }
                              return _context14.abrupt("return");

                             case 2:
                              canClick = false;
                              item.getComponent(cc.Button).interactable = false;
                              lingpai = cc.find("lingpai", item).getComponent(sp.Skeleton);
                              Global.SlotsSoundMgr.playEffect("wandclick");
                              reqdata = {
                                rtype: 1,
                                choiceId: idx + 1
                              };
                              _context14.next = 9;
                              return cc.vv.gameData.reqSubGame(reqdata);

                             case 9:
                              msg = _context14.sent;
                              if (!(msg && 200 == msg.code && 1 == msg.data.rtype)) {
                                _context14.next = 29;
                                break;
                              }
                              result = msg.data.result;
                              bonusType = msg.data.bonusTypes;
                              bonusGame = msg.data.bonusGame;
                              cc.vv.gameData.setBonusGame(bonusGame);
                              lingpai.setSkin(cc.js.formatStr("result_fg_%s_EN", result.spinCnt));
                              lingpai.setAnimation(0, "lingpai_fg_click", false);
                              Global.SlotsSoundMgr.playEffect("wandreverse");
                              _context14.next = 20;
                              return cc.vv.gameData.awaitTime(1.3);

                             case 20:
                              for (_i2 = 0; _i2 < itemList.length; _i2++) if (_i2 != idx) {
                                restItem = itemList[_i2];
                                _lingpai2 = cc.find("lingpai", restItem).getComponent(sp.Skeleton);
                                _lingpai2.setSkin(cc.js.formatStr("result_fg_%s_EN", bonusType[_i2].spinCnt));
                                _lingpai2.setAnimation(0, "lingpai_fg_grey", false);
                              }
                              _context14.next = 23;
                              return cc.vv.gameData.awaitTime(2);

                             case 23:
                              cc.tween(self._bonusGamePickOneUI).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context14.next = 26;
                              return cc.vv.gameData.awaitTime(.5);

                             case 26:
                              self._bonusGamePickOneUI.active = false;
                              self._node_popup.active = false;
                              success();

                             case 29:
                             case "end":
                              return _context14.stop();
                            }
                          }, _callee14);
                        }));
                        return function clickFunc(_x13, _x14) {
                          return _ref12.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(itemList[0], function() {
                        clickFunc(itemList[0], 0);
                      });
                      itemList.forEach(function(item, idx) {
                        var lingpai = cc.find("lingpai", item).getComponent(sp.Skeleton);
                        lingpai.setSkin("default");
                        lingpai.setAnimation(0, "lingpai_fg_idle", true);
                        item.off("click");
                        item.getComponent(cc.Button).interactable = true;
                        item.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                          return regeneratorRuntime.wrap(function _callee15$(_context15) {
                            while (1) switch (_context15.prev = _context15.next) {
                             case 0:
                              clickFunc(item, idx);

                             case 1:
                             case "end":
                              return _context15.stop();
                            }
                          }, _callee15);
                        })));
                      });

                     case 13:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function(_x11, _x12) {
                  return _ref11.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context17.stop();
            }
          }, _callee17);
        }))();
      },
      showSuperFreeStartFreeUI: function showSuperFreeStartFreeUI(pageReward) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
             case 0:
              return _context21.abrupt("return", new Promise(function() {
                var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20(success, failed) {
                  var btn, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee20$(_context20) {
                    while (1) switch (_context20.prev = _context20.next) {
                     case 0:
                      _this6._node_popup.active = true;
                      cc.find("mask", _this6._node_popup).active = true;
                      _this6._superFreeStartUI.active = true;
                      _this6._superFreeStartUI.setScale(0);
                      cc.tween(_this6._superFreeStartUI).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.find("lbl", _this6._superFreeStartUI).getComponent(cc.Label).string = pageReward.freeCnt;
                      cc.find("slots_cnt", _this6._superFreeStartUI).getComponent("ImgSwitchCmp").setIndex(pageReward.slotCnt - 1);
                      cc.find("OneTable", _this6._superFreeStartUI).getComponent("ImgSwitchCmp").setIndex(4 == pageReward.slotCnt ? 1 : 0);
                      btn = cc.find("FG_btn", _this6._superFreeStartUI);
                      btn.off("click");
                      btn.getComponent(cc.Button).interactable = true;
                      _context20.next = 13;
                      return cc.vv.gameData.awaitTime(.5);

                     case 13:
                      self = _this6;
                      clickFunc = function() {
                        var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                          return regeneratorRuntime.wrap(function _callee18$(_context18) {
                            while (1) switch (_context18.prev = _context18.next) {
                             case 0:
                              btn.getComponent(cc.Button).interactable = false;
                              cc.tween(self._superFreeStartUI).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context18.next = 4;
                              return cc.vv.gameData.awaitTime(.5);

                             case 4:
                              self._superFreeStartUI.active = false;
                              self._node_popup.active = false;
                              success();

                             case 7:
                             case "end":
                              return _context18.stop();
                            }
                          }, _callee18);
                        }));
                        return function clickFunc() {
                          return _ref15.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                      btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
                        return regeneratorRuntime.wrap(function _callee19$(_context19) {
                          while (1) switch (_context19.prev = _context19.next) {
                           case 0:
                            btn.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context19.stop();
                          }
                        }, _callee19);
                      })));

                     case 17:
                     case "end":
                      return _context20.stop();
                    }
                  }, _callee20);
                }));
                return function(_x15, _x16) {
                  return _ref14.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context21.stop();
            }
          }, _callee21);
        }))();
      },
      showWinJpUI: function showWinJpUI(jpIdx, winCoin) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee25() {
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) switch (_context25.prev = _context25.next) {
             case 0:
              return _context25.abrupt("return", new Promise(function() {
                var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(success, failed) {
                  var btn, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee24$(_context24) {
                    while (1) switch (_context24.prev = _context24.next) {
                     case 0:
                      _this7._node_popup.active = true;
                      cc.find("mask", _this7._node_popup).active = true;
                      _this7._winJpUI.active = true;
                      _this7._winJpUI.setScale(0);
                      cc.tween(_this7._winJpUI).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.find("jpmini_EN", _this7._winJpUI).getComponent("ImgSwitchCmp").setIndex(jpIdx - 1);
                      cc.find("lbl", _this7._winJpUI).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                      btn = cc.find("FG_btn", _this7._winJpUI);
                      btn.off("click");
                      btn.getComponent(cc.Button).interactable = true;
                      _context24.next = 12;
                      return cc.vv.gameData.awaitTime(.5);

                     case 12:
                      self = _this7;
                      clickFunc = function() {
                        var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
                          return regeneratorRuntime.wrap(function _callee22$(_context22) {
                            while (1) switch (_context22.prev = _context22.next) {
                             case 0:
                              btn.getComponent(cc.Button).interactable = false;
                              cc.tween(self._winJpUI).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context22.next = 4;
                              return cc.vv.gameData.awaitTime(.5);

                             case 4:
                              self._winJpUI.active = false;
                              self._node_popup.active = false;
                              success();

                             case 7:
                             case "end":
                              return _context22.stop();
                            }
                          }, _callee22);
                        }));
                        return function clickFunc() {
                          return _ref18.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                      btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
                        return regeneratorRuntime.wrap(function _callee23$(_context23) {
                          while (1) switch (_context23.prev = _context23.next) {
                           case 0:
                            btn.stopAllActions();
                            clickFunc();

                           case 2:
                           case "end":
                            return _context23.stop();
                          }
                        }, _callee23);
                      })));

                     case 16:
                     case "end":
                      return _context24.stop();
                    }
                  }, _callee24);
                }));
                return function(_x17, _x18) {
                  return _ref17.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context25.stop();
            }
          }, _callee25);
        }))();
      },
      playFreeQPAnim: function playFreeQPAnim() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee26() {
          var character;
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) switch (_context26.prev = _context26.next) {
             case 0:
              character = cc.find("Canvas/safe_node/character");
              Global.SlotsSoundMgr.playEffect("fgTransition");
              _this8._node_popup.active = true;
              character.active = false;
              cc.find("mask", _this8._node_popup).active = false;
              _this8._fg_guochang.active = true;
              _this8._fg_guochang.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
              _this8._fg_guochang.getComponent(sp.Skeleton).setCompleteListener(function() {
                _this8._fg_guochang.getComponent(sp.Skeleton).setCompleteListener();
                _this8._node_popup.active = false;
                _this8._fg_guochang.active = false;
              });
              _context26.next = 10;
              return cc.vv.gameData.awaitTime(2);

             case 10:
              character.active = true;

             case 11:
             case "end":
              return _context26.stop();
            }
          }, _callee26);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  NewMulan_Reels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d6e8wCTnlCSozY6fBrIArP", "NewMulan_Reels");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  NewMulan_SFreeMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21199hQwmNFBroAtxv3gNPI", "NewMulan_SFreeMgr");
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
        this._node_superFree = cc.find("safe_node/super_free", this.node);
        this._slots = cc.find("slots", this._node_superFree);
        for (var i = 1; i <= 4; i++) {
          var slot = cc.find("slots_" + i, this._slots);
          var scp = slot.addComponent("NewMulan_SFreeSlots");
          scp.Init(i);
          this._slotsNodeList.push(slot);
          this._slotsScpList.push(scp);
        }
        this._node_superFree.active = false;
      },
      start: function start() {},
      StartMove: function StartMove() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotCnt && this._slotsScpList[i].StartMove();
      },
      StopMove: function StopMove() {
        for (var i = 0; i < this._slotsNodeList.length; i++) i < this._slotCnt && this._slotsScpList[i].StopMove();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
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
              if (!(_this._gameInfo.allFreeCnt > 0 && 0 == _this._gameInfo.freeCnt)) {
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
        this._node_superFree.active = true;
        cc.vv.gameData.GetSlotsScript().setFlagState(false);
        var pageReward = cc.vv.gameData.getPageReward();
        this._slotCnt = pageReward.slotCnt;
        var wildCols = pageReward.wildCols;
        for (var i = 0; i < this._slotsNodeList.length; i++) if (i < this._slotCnt) {
          this._slotsNodeList[i].active = true;
          this._slotsScpList[i].iniAllSymbol();
          this._slotsScpList[i].setWildCols(wildCols);
        } else this._slotsNodeList[i].active = false;
        cc.find("node_frame/character", this._node_superFree).active = 1 === this._slotCnt;
        this.setSlotsScale();
      },
      endSuperFree: function endSuperFree() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nTotal, i;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _context2.next = 2;
              return cc.vv.gameData.awaitTime(1);

             case 2:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              nTotal = cc.vv.gameData.GetGameTotalFreeWin();
              _context2.next = 6;
              return cc.vv.gameData.getPopupScript().showGameWinUI(nTotal);

             case 6:
              cc.vv.gameData.getPopupScript().playFreeQPAnim();
              _context2.next = 9;
              return cc.vv.gameData.awaitTime(2);

             case 9:
              cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
              Global.SlotsSoundMgr.stopBgm();
              _this2._node_superFree.active = false;
              cc.vv.gameData.GetSlotsScript().setFlagState(true);
              for (i = 0; i < _this2._slotsNodeList.length; i++) _this2._slotsScpList[i].iniAllSymbol();
              _context2.next = 16;
              return cc.vv.gameData.awaitTime(2);

             case 16:
              cc.vv.gameData.setIsSuperFree(false);
              _context2.next = 19;
              return new Promise(function(success) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nTotal, nTotal, true, function() {
                  success();
                });
              });

             case 19:
              cc.vv.gameData.GetBottomScript().CanDoNextRound();
              if (cc.vv.gameData.isBoxGame()) {
                cc.vv.gameData.getBoxScript().openStorePage();
                cc.vv.gameData.setIsBoxGame(false);
              }

             case 21:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      setSlotsScale: function setSlotsScale() {
        var scaleList = [ 1, 1, .7, .7 ];
        this._slots.setScale(scaleList[this._slotCnt - 1]);
        this._slots.getComponent(cc.Widget).updateAlignment();
        for (var i = 1; i <= 4; i++) cc.find("node_frame/frame" + i, this._node_superFree).active = this._slotCnt == i;
      }
    });
    cc._RF.pop();
  }, {} ],
  NewMulan_SFreeReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca474YRJ35NzakH20Txdxwq", "NewMulan_SFreeReel");
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
        Global.SlotsSoundMgr.playEffect("reelstop");
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
  NewMulan_SFreeSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73d0awCTHNN5ZP4MaoV0XFW", "NewMulan_SFreeSlots");
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
          var scp = node.addComponent("NewMulan_SFreeReel");
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
        var col = this._col * (pageReward.slotCnt - this._slotsType) * .1;
        return (reelIdx + col) * nIter;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  NewMulan_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96510S1xHlMnIhvaqG644EX", "NewMulan_Slots");
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
        var _wenhao = cc.find("btn_entrance/wenhao", this.node);
        var spr_tip = cc.find("btn_entrance/spr_tip", this.node);
        spr_tip.active = false;
        this._node_bonusType = cc.find("BetUp", this.node);
        Global.btnClickEvent(this._btn_entrance, this.onClickBoxBtn, this);
        Global.btnClickEvent(_wenhao, this.onClickBoxWenhaoBtn, this);
        Global.btnClickEvent(this._node_bonusType, this.onclickBonusType, this);
        this._super();
        this.initLockState();
        this.setFlagCnt(cc.vv.gameData.getFlagStore().flagCnt);
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
              _this._topScript.SetBackLobby(false);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              _this.ShowGameview(false);
              if (cc.vv.gameData.getPageReward()) {
                cc.vv.gameData.setIsSuperFree(true);
                cc.vv.gameData.GetBottomScript().ShowFreeModel(true, cc.vv.gameData.GetFreeTime(), cc.vv.gameData.GetTotalFree());
                cc.vv.gameData.getSuperFreeMgr().initShowSlotsDate();
              } else cc.vv.gameData.GetTotalFree() > 0 && _this.ShowGameview(true);
              bonusdata = cc.vv.gameData.getBonusGame();
              if (!bonusdata) {
                _context.next = 8;
                break;
              }
              _context.next = 8;
              return cc.vv.gameData.getBonusGameMgr().showBonusGame(bonusdata);

             case 8:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context.next = 11;
                break;
              }
              _context.next = 11;
              return _this.endFreeGame();

             case 11:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
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
      SetSlotsResult: function SetSlotsResult(cards) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        var flagInfo = this._gameInfo.flagInfo;
        var flagIdxs;
        flagInfo && flagInfo.idxs && (flagIdxs = flagInfo.idxs);
        var bonusIdxs = this._gameInfo.bonusIdxs;
        var bonusItems = this._gameInfo.bonusItems;
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = {};
            flagIdxs && flagIdxs.includes(i + 1) && (res.data.flag = 1);
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
      onMsgSpine: function onMsgSpine(msg) {
        if (cc.vv.gameData.isSuperFree()) {
          cc.vv.gameData.getSuperFreeMgr().onMsgSpine(msg);
          return;
        }
        this._super(msg);
        var isTriFree = this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0;
        var isTriBonus = this._gameInfo.bonusGame;
        var isBigWin = this._gameInfo.winCoin / cc.vv.gameData.GetTotalBet() >= 40;
        if (Math.random() < .25 && (isTriFree || isTriBonus || isBigWin)) {
          this.SetStopTime(3);
          this.triggerRandomGame();
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var flagInfo, nWin, nTotal, freeInfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              flagInfo = _this2._gameInfo.flagInfo;
              flagInfo && flagInfo.totalCnt > 0 && _this2.flyFlag(_this2._gameInfo.flagStore.flagCnt);
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.getFreeWinCoin());
              _context2.next = 8;
              return new Promise(function(success, failed) {
                _this2.ShowBottomWin(nWin, nTotal, true, success);
              });

             case 8:
              if (!_this2._gameInfo.bonusGame) {
                _context2.next = 11;
                break;
              }
              _context2.next = 11;
              return _this2.triBonusGame();

             case 11:
              freeInfo = _this2._gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0)) {
                _context2.next = 15;
                break;
              }
              _context2.next = 15;
              return _this2.triFreeGame();

             case 15:
              if (!(_this2._gameInfo.allFreeCnt > 0 && 0 == _this2._gameInfo.freeCnt)) {
                _context2.next = 18;
                break;
              }
              _context2.next = 18;
              return _this2.endFreeGame();

             case 18:
              _this2.CanDoNextRound();

             case 19:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      triBonusGame: function triBonusGame() {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var bonusIdxs, _iterator, _step, idx, symbol;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                bonusIdxs = _this3._gameInfo.bonusIdxs;
                _iterator = _createForOfIteratorHelper(bonusIdxs);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    idx = _step.value;
                    symbol = _this3.GetSymbolByIdx(idx);
                    symbol && symbol.playTriggerAnimation();
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                Global.SlotsSoundMgr.playEffect("triggering");
                _context3.next = 6;
                return cc.vv.gameData.awaitTime(1.5);

               case 6:
                _context3.next = 8;
                return cc.vv.gameData.getPopupScript().showBonusStartUI(_this3._gameInfo.bonusGame.type);

               case 8:
                _context3.next = 10;
                return cc.vv.gameData.getBonusGameMgr().showBonusGame(_this3._gameInfo.bonusGame, true);

               case 10:
                success();

               case 11:
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
      triFreeGame: function triFreeGame() {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var isFirst, freeInfo, idxs, i, symbol;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                isFirst = _this4._gameInfo.freeCnt === _this4._gameInfo.allFreeCnt;
                freeInfo = _this4._gameInfo.freeResult.freeInfo;
                if (!isFirst) {
                  _context4.next = 19;
                  break;
                }
                idxs = freeInfo.scatterIdx;
                for (i = 0; i < idxs.length; i++) {
                  symbol = _this4.GetSymbolByIdx(idxs[i]);
                  symbol && symbol.playTriggerAnimation();
                }
                Global.SlotsSoundMgr.playEffect("triggering");
                _context4.next = 8;
                return cc.vv.gameData.awaitTime(1.5);

               case 8:
                _context4.next = 10;
                return cc.vv.gameData.getPopupScript().showFreeGameStartUI(freeInfo.freeCnt, isFirst);

               case 10:
                cc.vv.gameData.getPopupScript().playFreeQPAnim();
                _context4.next = 13;
                return cc.vv.gameData.awaitTime(2);

               case 13:
                _this4.Backup();
                _this4.ShowGameview(true);
                _context4.next = 17;
                return cc.vv.gameData.awaitTime(1);

               case 17:
                _context4.next = 21;
                break;

               case 19:
                _context4.next = 21;
                return cc.vv.gameData.getPopupScript().showFreeGameStartUI(freeInfo.freeCnt, isFirst);

               case 21:
                success();

               case 22:
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
      endFreeGame: function endFreeGame() {
        var _this5 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var nWin;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                nWin = cc.vv.gameData.getFreeWinCoin();
                Global.SlotsSoundMgr.playEffect("fgend");
                _context5.next = 4;
                return cc.vv.gameData.getPopupScript().showGameWinUI(nWin);

               case 4:
                cc.vv.gameData.getPopupScript().playFreeQPAnim();
                _context5.next = 7;
                return cc.vv.gameData.awaitTime(2);

               case 7:
                _this5.Resume();
                _this5.ShowGameview(false);
                Global.SlotsSoundMgr.stopBgm();
                _context5.next = 12;
                return cc.vv.gameData.awaitTime(1);

               case 12:
                _context5.next = 14;
                return new Promise(function(sucess, failed) {
                  _this5.ShowBottomWin(nWin, nWin, true, sucess);
                });

               case 14:
                if (cc.vv.gameData.isBoxGame()) {
                  cc.vv.gameData.getBoxScript().openStorePage();
                  cc.vv.gameData.setIsBoxGame(false);
                } else success();

               case 15:
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
      setFlagState: function setFlagState(bShow) {
        this._btn_entrance.active = bShow;
      },
      setFlagCnt: function setFlagCnt(cnt) {
        cc.find("lbl", this._btn_entrance).getComponent(cc.Label).string = Global.FormatNumToComma(cnt);
      },
      initLockState: function initLockState() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        cc.find("bg", this._node_bonusType).getComponent("ImgSwitchCmp").setIndex(curBet >= needBet ? 1 : 0);
        var spr_bonus = cc.find("betup_EN", this._node_bonusType);
        var spine_bonus = cc.find("BetUp", this._node_bonusType);
        var spr_qz = cc.find("loading_box", this._btn_entrance);
        var spine_qz = cc.find("QiZi", this._btn_entrance);
        var spine_suo = cc.find("Puzzle_collect_logo", this._btn_entrance);
        if (curBet >= needBet) {
          this._isLock = false;
          spr_bonus.active = true;
          spine_bonus.active = false;
          spr_qz.active = false;
          spine_qz.active = true;
          spine_qz.getComponent(sp.Skeleton).setAnimation(0, "QiZi_loop", true);
          spine_suo.active = false;
        } else {
          this._isLock = true;
          spr_bonus.active = false;
          spine_bonus.active = true;
          spine_bonus.getComponent(sp.Skeleton).setAnimation(0, "BetUp_Loop_EN", false);
          spr_qz.active = true;
          spine_qz.active = false;
          spine_suo.active = true;
          spine_suo.getComponent(sp.Skeleton).setAnimation(0, "lock_idle_EN", true);
        }
      },
      onClickBoxWenhaoBtn: function onClickBoxWenhaoBtn() {
        var spr_tip = cc.find("btn_entrance/spr_tip", this.node);
        spr_tip.stopAllActions();
        if (spr_tip.active) spr_tip.runAction(cc.sequence(cc.scaleTo(spr_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          spr_tip.active = false;
        }))); else {
          Global.SlotsSoundMgr.playEffect("tips");
          spr_tip.active = true;
          spr_tip.setScale(0);
          spr_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            spr_tip.active = false;
          })));
        }
      },
      onClickBoxBtn: function onClickBoxBtn() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.isBonusGame()) return;
        if (this._isLock) {
          var allMults = cc.vv.gameData.GetBetMults();
          var needBet = cc.vv.gameData.getNeedBet();
          needBet > allMults.length || cc.vv.gameData.GetBottomScript().SetBetIdx(needBet);
        } else cc.vv.gameData.getBoxScript().openStorePage();
      },
      onclickBonusType: function onclickBonusType() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.isBonusGame()) return;
        if (this._isLock) {
          var needBet = cc.vv.gameData.getNeedBet();
          var allMults = cc.vv.gameData.GetBetMults();
          needBet > allMults.length || cc.vv.gameData.GetBottomScript().SetBetIdx(needBet);
        }
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        var bg_bonus = cc.find("bg", this._node_bonusType);
        var spr_bonus = cc.find("betup_EN", this._node_bonusType);
        var spine_bonus = cc.find("BetUp", this._node_bonusType);
        var spr_qz = cc.find("loading_box", this._btn_entrance);
        var spine_qz = cc.find("QiZi", this._btn_entrance);
        var spine_suo = cc.find("Puzzle_collect_logo", this._btn_entrance);
        if (curBet >= needBet && this._isLock) {
          Global.SlotsSoundMgr.playEffect("unlock");
          this._isLock = false;
          bg_bonus.getComponent("ImgSwitchCmp").setIndex(1);
          spr_bonus.active = true;
          var entry1 = spine_bonus.getComponent(sp.Skeleton).setAnimation(0, "BetUp_Intro", false);
          spine_bonus.getComponent(sp.Skeleton).setTrackCompleteListener(entry1, function() {
            spine_bonus.getComponent(sp.Skeleton).setTrackCompleteListener(entry1, null);
            spine_bonus.active = false;
          });
          spr_qz.active = false;
          spine_qz.active = true;
          spine_qz.getComponent(sp.Skeleton).setAnimation(0, "QiZi_loop", true);
          var entry2 = spine_suo.getComponent(sp.Skeleton).setAnimation(0, "unlock_EN", false);
          spine_suo.getComponent(sp.Skeleton).setTrackCompleteListener(entry2, function() {
            spine_suo.getComponent(sp.Skeleton).setTrackCompleteListener(entry2, null);
            spine_suo.active = false;
          });
        } else if (curBet < needBet && !this._isLock) {
          Global.SlotsSoundMgr.playEffect("lock");
          this._isLock = true;
          bg_bonus.getComponent("ImgSwitchCmp").setIndex(0);
          spr_bonus.active = false;
          spine_bonus.active = true;
          spine_bonus.getComponent(sp.Skeleton).setAnimation(0, "BetUp_Loop_EN", false);
          spr_qz.active = true;
          spine_qz.active = false;
          spine_suo.active = true;
          spine_suo.getComponent(sp.Skeleton).setAnimation(0, "lock_EN", false);
          spine_suo.getComponent(sp.Skeleton).addAnimation(0, "lock_idle_EN", true);
        }
      },
      flyFlag: function flyFlag(flagCnt) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
                  var idxs, shoujifly, qizi;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      idxs = _this6._gameInfo.flagInfo.idxs;
                      shoujifly = _this6.node.getChildByName("shoujifly");
                      qizi = _this6._btn_entrance.getChildByName("QiZi");
                      Global.SlotsSoundMgr.playEffect("collect");
                      idxs.forEach(function(idx) {
                        var symbol = _this6.GetSymbolByIdx(idx);
                        symbol.setFlag(false);
                        var flyNode = cc.instantiate(shoujifly);
                        flyNode.active = true;
                        flyNode.position = _this6.node.convertToNodeSpaceAR(symbol.getPawWPos());
                        flyNode.parent = _this6.node;
                        var par = cc.find("LiZiFei", flyNode);
                        par.getComponent(cc.ParticleSystem).resetSystem();
                        var flag = cc.find("flag", flyNode);
                        var endPos = flyNode.convertToNodeSpaceAR(qizi.convertToWorldSpaceAR(cc.v2(0, 0)));
                        cc.tween(par).delay(.5).to(.5, {
                          position: endPos
                        }).start();
                        cc.tween(flag).to(.3, {
                          scale: .8
                        }).to(.2, {
                          scale: .5
                        }).to(.5, {
                          position: endPos
                        }).call(function() {
                          flyNode.destroy();
                        }).start();
                      });
                      _context6.next = 7;
                      return cc.vv.gameData.awaitTime(1);

                     case 7:
                      Global.SlotsSoundMgr.playEffect("collectdown");
                      cc.tween(qizi).to(.3, {
                        scale: 1.2
                      }).to(.2, {
                        scale: 1
                      }).start();
                      _this6.setFlagCnt(flagCnt);
                      success();

                     case 11:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        cc.vv.gameData.setIsFreeGame(bFree);
        bFree && Global.SlotsSoundMgr.playBgm("fgbgm");
        this._super(bFree);
        this.setFlagState(!bFree);
      },
      triggerRandomGame: function triggerRandomGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var character, dj;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("BigAward");
              character = cc.find("Canvas/safe_node/character");
              dj = cc.find("Canvas/safe_node/slots/DaJiangYuGao");
              dj.active = true;
              dj.getComponent(sp.Skeleton).setAnimation(0, "DaJiangYuGao", false);

             case 5:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  NewMulan_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f392eNmO9ZOwr58iYYFRWx4", "NewMulan_Symbol");
    "use strict";
    var coinMult = [ 1, 1, 1, 1, 1, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2.5, 2.5, 2.5, 3, 3, 3, 3.5, 3.5, 3.5, 4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 5.5, 5.5, 5.5, 6, 6, 6, 7, 8, 9, 10 ];
    var jpMult = [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4 ];
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _wildMult: 1
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        this._super();
        if (3 == this._id) if (Math.random() > .8) {
          var jp = jpMult[Global.random(0, jpMult.length - 1)];
          this.setJp(jp);
        } else {
          var betCoin = cc.vv.gameData.GetTotalBet();
          var coin = coinMult[Global.random(0, coinMult.length - 1)];
          this.setNum(coin * betCoin);
        }
      },
      ClearState: function ClearState() {
        this.hideAllIcon();
        this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.stopWinTweenAction();
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
      },
      StartMove: function StartMove() {
        this._super();
        cc.vv.gameData.isBonusGame() ? this.setMaskVisible(true) : this.setMaskVisible(false);
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.hideAllIcon();
        if (data) {
          data.flag && this.setFlag(true);
          data.bonus && (data.bonus.coin ? this.setNum(data.bonus.coin) : data.bonus.jackpot && this.setJp(data.bonus.jackpot.id));
          if (this._isResume) {
            this._isResume = false;
            this.setFlag(false);
          }
        }
        cc.vv.gameData.isBonusGame() ? this.setMaskVisible(true) : this.setMaskVisible(false);
      },
      setMaskVisible: function setMaskVisible(isMask) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node) {
          var showNode = cc.find(cfg.symbol[this._id].node, this.node);
          isMask && cfg.symbol[this._id].isMask ? showNode.color = new cc.Color(100, 100, 100) : showNode.color = cc.Color.WHITE;
        }
      },
      Resume: function Resume(backup) {
        this._isResume = true;
        this._super(backup);
      },
      hideAllIcon: function hideAllIcon() {
        this.setFlag(false);
        this.setNum();
        this.setJp();
      },
      setFlag: function setFlag(bShow) {
        cc.find("flag", this.node).active = bShow;
      },
      getPawWPos: function getPawWPos() {
        return cc.find("flag", this.node).convertToWorldSpaceAR(cc.v2(0, 0));
      },
      setNum: function setNum(coin) {
        var lbl = cc.find("lbl", this.node);
        if (coin) {
          lbl.active = true;
          lbl.getComponent(cc.Label).string = Global.convertNumToShort(coin, 1e3, 0);
        } else lbl.active = false;
      },
      setJp: function setJp(idx) {
        var jp = cc.find("jp", this.node);
        if (jp) {
          jp.active = true;
          jp.getComponent("ImgSwitchCmp").setIndex(idx - 1);
        } else jp.active = false;
      },
      playWinAnimation: function playWinAnimation() {
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
          if (cfg.symbol[id].win_ani && "" != cfg.symbol[id].win_ani.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) if (cfg.symbol[id].win_ani.intro_name) {
              nodeSp.setAnimation(0, cfg.symbol[id].win_ani.intro_name, false);
              nodeSp.addAnimation(0, cfg.symbol[id].win_ani.name, false);
            } else nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
          }
        } else {
          this._showNode.active = true;
          this.playWinTweenAction();
        }
      },
      playBonusStopAnim: function playBonusStopAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].b_stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].b_stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].b_stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].b_stop_ani.name, false);
              cfg.symbol[id].b_idle_ani && "" != cfg.symbol[id].b_idle_ani.name && nodeSp.addAnimation(0, cfg.symbol[id].b_idle_ani.name, true);
            }
          }
        }
      },
      playBonusIdleAnim: function playBonusIdleAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].b_idle_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].b_idle_ani.name) {
            this.node.zIndex = cfg.symbol[id].b_idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].b_idle_ani.name, true);
          }
        }
      },
      playBonusEndAnim: function playBonusEndAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].b_end_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].b_end_ani.name) {
            this.node.zIndex = cfg.symbol[id].b_end_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].b_end_ani.name, false);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "NewMulan_BonusGameMgr", "NewMulan_BonusReel", "NewMulan_BonusSlots", "NewMulan_BoxGame", "NewMulan_Cfg", "NewMulan_GameData", "NewMulan_Logic", "NewMulan_Popup", "NewMulan_Reels", "NewMulan_SFreeMgr", "NewMulan_SFreeReel", "NewMulan_SFreeSlots", "NewMulan_Slots", "NewMulan_Symbol" ]);