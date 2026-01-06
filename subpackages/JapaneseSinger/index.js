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
  JapaneseSinger_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0239eUo2jhCQ6ABy/woFqrQ", "JapaneseSinger_BonusGame");
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
        _exitCallBack: null,
        _curTimes: 3,
        _subGameData: null,
        _canSelect: false,
        _coinNum: 0,
        _yellowCoin: 0,
        _greenCoin: 0,
        _remainTimes: 0
      },
      start: function start() {},
      Init: function Init() {
        this.initBonusNode();
        this._slotsScript = this._bonus_slots.addComponent("JapaneseSinger_BonusSlots");
        this.initBonusUI();
      },
      initBonusNode: function initBonusNode() {
        this._bg_bonus = cc.find("safe_node/spr_bg_bonus", this.node);
        this.bianpao = cc.find("safe_node/role", this.node);
        this._normal_slots = cc.find("safe_node/slots", this.node);
        this._bonus_slots = cc.find("safe_node/bonus_slots", this.node);
        this._topAniNode = cc.find("top_ani", this._bonus_slots);
        this._node_reels = cc.find("reels", this._bonus_slots);
        this.select_root = cc.find("select_root", this._bonus_slots);
        this.gold_coin = cc.find("bg_count_board_yellow/coin", this._bonus_slots);
        this.gold_spine = cc.find("bg_count_board_yellow/spine", this._bonus_slots);
        this.green_coin = cc.find("bg_count_board_green/coin", this._bonus_slots);
        this.green_spine = cc.find("bg_count_board_green/spine", this._bonus_slots);
        this.pick_title = cc.find("count_board/pick_title", this._bonus_slots);
        this.times_title = cc.find("count_board/times_title", this._bonus_slots);
        this.remain_times = cc.find("count_board/times", this._bonus_slots);
        this.coin_num = cc.find("B_Coin_Glow/coins", this._bg_bonus);
        this.bonus_win = cc.find("bonus_win", this._bonus_slots);
        this.bonus_win_coin = cc.find("coin", this.bonus_win);
        this.bonus_win_spine = cc.find("spine", this.bonus_win);
        this.add_spin_spine = cc.find("count_board/spine", this._bonus_slots);
        this.bj_glow = cc.find("bj_glow", this._bg_bonus);
      },
      initBonusUI: function initBonusUI() {
        this._bg_bonus.active = false;
        this._normal_slots.active = true;
        this._bonus_slots.active = false;
        this.bianpao.active = true;
        cc.find("safe_node/info_board", this.node).active = true;
      },
      startBonusGame: function startBonusGame(collectGame) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
                  var _loop, i, j, _iterator, _step, item;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      _this._exitCallBack = success;
                      _this.bj_glow.active = false;
                      cc.vv.gameData.SetIsBonusGame(true);
                      _this.bianpao.active = false;
                      cc.find("safe_node/info_board", _this.node).active = false;
                      _this._bg_bonus.active = true;
                      _this._normal_slots.active = false;
                      _this._bonus_slots.active = true;
                      _this.bonus_win.active = false;
                      _this.remain_times.parent.active = true;
                      _this.gold_coin.parent.active = true;
                      _this.green_coin.parent.active = true;
                      _this._coinNum = 0;
                      _this._yellowCoin = 0;
                      _this._greenCoin = 0;
                      _this._remainTimes = collectGame.gameInfo.restCnt;
                      _this.updateRemainTimes();
                      _this._slotsScript.Init();
                      _this._slotsScript.reconnectInitSymbol();
                      if (!(2 === collectGame.state)) {
                        _context2.next = 30;
                        break;
                      }
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playBgm("sgbgm");
                      _this._canSelect = true;
                      _this.select_root.active = true;
                      _loop = function _loop(i) {
                        var item = cc.find("item_" + (i + 1), _this.select_root);
                        item.off(cc.Node.EventType.TOUCH_END);
                        var info = collectGame.gameInfo.items[i];
                        if (info.empty) {
                          item.active = true;
                          cc.find("spine", item).getComponent(sp.Skeleton).setAnimation(0, "PickOne_idle", true);
                          item.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                            var req, result, choiceId, selectItem, selectInfo, spine, safe_node, particle, startPos, endPos, symbol, j;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) switch (_context.prev = _context.next) {
                               case 0:
                                if (_this._canSelect) {
                                  _context.next = 2;
                                  break;
                                }
                                return _context.abrupt("return");

                               case 2:
                                Global.SlotsSoundMgr.playEffect("pickone");
                                _this._canSelect = false;
                                item.off(cc.Node.EventType.TOUCH_END);
                                req = {
                                  rtype: 1,
                                  choiceId: i + 1
                                };
                                _context.next = 8;
                                return cc.vv.gameData.reqSubGame(req);

                               case 8:
                                result = _context.sent;
                                if (!(200 === result.code)) {
                                  _context.next = 47;
                                  break;
                                }
                                choiceId = result.data.choiceId;
                                cc.vv.gameData.setCollectGame(result.data.collectGame);
                                selectItem = cc.find("item_" + choiceId, _this.select_root);
                                selectInfo = result.data.collectGame.gameInfo.items[choiceId - 1];
                                spine = cc.find("spine", selectItem).getComponent(sp.Skeleton);
                                spine.setAnimation(0, "PickOne_click", false);
                                _this._coinNum++;
                                _this.coin_num.getComponent(cc.Label).string = _this._coinNum;
                                _this._remainTimes = result.data.collectGame.gameInfo.restCnt;
                                _this.updateRemainTimes();
                                safe_node = cc.find("safe_node", _this.node);
                                particle = cc.instantiate(cc.find("particle_dian", safe_node));
                                particle.active = true;
                                particle.parent = safe_node;
                                startPos = selectItem.convertToWorldSpaceAR(cc.v2(0, 0));
                                startPos = safe_node.convertToNodeSpaceAR(startPos);
                                particle.position = startPos;
                                endPos = _this.gold_coin.convertToWorldSpaceAR(cc.v2(0, 0));
                                endPos = safe_node.convertToNodeSpaceAR(endPos);
                                _this._yellowCoin += selectInfo.coin;
                                _this._greenCoin += selectInfo.coin;
                                Global.SlotsSoundMgr.playEffect("fg_triggerfly");
                                cc.tween(particle).to(.5, {
                                  position: endPos
                                }).call(function() {
                                  _this.gold_spine.active = true;
                                  _this.gold_spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                  _this.gold_spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                                    _this.gold_spine.getComponent(sp.Skeleton).setCompleteListener(null);
                                    _this.gold_spine.active = false;
                                  });
                                  _this.updateCoin();
                                }).removeSelf().start();
                                _context.next = 35;
                                return cc.vv.gameData.awaitTime(.3);

                               case 35:
                                symbol = _this._slotsScript.GetSymbolByIdx(choiceId);
                                if (symbol) {
                                  symbol.ShowById(cc.vv.gameData.getGameCfg().scatterId, selectInfo);
                                  symbol.playBonusAppearAnimation();
                                }
                                _context.next = 39;
                                return cc.vv.gameData.awaitTime(.5);

                               case 39:
                                if (!(3 === result.data.collectGame.state)) {
                                  _context.next = 46;
                                  break;
                                }
                                _context.next = 42;
                                return _this.popBonusEnterDialog();

                               case 42:
                                for (j = 0; j < 15; j++) cc.find("item_" + (j + 1), _this.select_root).active = false;
                                _this.reqSpin();
                                _context.next = 47;
                                break;

                               case 46:
                                _this._canSelect = true;

                               case 47:
                               case "end":
                                return _context.stop();
                              }
                            }, _callee);
                          })));
                        } else {
                          _this._coinNum++;
                          item.active = false;
                          var symbol = _this._slotsScript.GetSymbolByIdx(i + 1);
                          symbol && symbol.showBonus();
                          _this._yellowCoin += info.coin;
                          _this._greenCoin += info.coin;
                        }
                      };
                      for (i = 0; i < 15; i++) _loop(i);
                      _this.coin_num.getComponent(cc.Label).string = _this._coinNum;
                      _this.updateCoin();
                      _context2.next = 40;
                      break;

                     case 30:
                      if (!(3 === collectGame.state)) {
                        _context2.next = 40;
                        break;
                      }
                      for (j = 0; j < 15; j++) cc.find("item_" + (j + 1), _this.select_root).active = false;
                      _iterator = _createForOfIteratorHelper(collectGame.gameInfo.items);
                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                          item = _step.value;
                          item.empty || _this._coinNum++;
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                      _this._yellowCoin = collectGame.gameInfo.baseCoin;
                      _this._greenCoin = collectGame.gameInfo.fullCoin;
                      _this.updateCoin();
                      _context2.next = 39;
                      return cc.vv.gameData.awaitTime(.5);

                     case 39:
                      _this.reqSpin();

                     case 40:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x) {
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
      playBjGlow: function playBjGlow() {
        var _this2 = this;
        this.bj_glow.active = true;
        this.bj_glow.getComponent(sp.Skeleton).setAnimation(0, "bg_glow", false);
        this.bj_glow.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this2.bj_glow.getComponent(sp.Skeleton).setCompleteListener(null);
          _this2.bj_glow.active = false;
        });
      },
      popBonusEnterDialog: function popBonusEnterDialog() {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
            var free_dialog, dialog;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("bgbgm");
                Global.SlotsSoundMgr.playEffect("fgend");
                free_dialog = cc.find("safe_node/dialog_node", _this3.node);
                free_dialog.active = true;
                dialog = cc.find("bonus_enter_node", free_dialog);
                dialog.active = true;
                dialog.scale = 0;
                cc.tween(dialog).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("coin", dialog).getComponent(cc.Label).string = Global.formatNumShort(_this3._yellowCoin, 0);
                _context4.next = 12;
                return cc.vv.gameData.awaitTime(1.5);

               case 12:
                cc.tween(dialog).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  free_dialog.active = false;
                  dialog.active = false;
                  success();
                }).start();

               case 13:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      popBonusResultDialog: function popBonusResultDialog() {
        var _this4 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
            var free_dialog, dialog;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("bgend");
                free_dialog = cc.find("safe_node/dialog_node", _this4.node);
                free_dialog.active = true;
                dialog = cc.find("bonus_result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 0;
                cc.tween(dialog).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("coin", dialog).getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.getCollectGame().gameInfo.winCoin);
                _context5.next = 10;
                return cc.vv.gameData.awaitTime(1.5);

               case 10:
                cc.tween(dialog).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  free_dialog.active = false;
                  dialog.active = false;
                  success();
                }).start();

               case 11:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x3) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      updateCoin: function updateCoin() {
        this.gold_coin.getComponent(cc.Label).string = Global.formatNumShort(this._yellowCoin, 0);
        this.green_coin.getComponent(cc.Label).string = Global.formatNumShort(this._greenCoin, 0);
      },
      updateRemainTimes: function updateRemainTimes() {
        var collectGame = cc.vv.gameData.getCollectGame();
        this._remainTimes < 0 && (this._remainTimes = 0);
        if (2 === collectGame.state) {
          this.pick_title.active = true;
          this.times_title.active = false;
          this._remainTimes <= 1 ? this.pick_title.getComponent("ImgSwitchCmp").setIndex(0) : this.pick_title.getComponent("ImgSwitchCmp").setIndex(1);
        } else if (3 === collectGame.state) {
          this.pick_title.active = false;
          this.times_title.active = true;
          this._remainTimes <= 1 ? this.times_title.getComponent("ImgSwitchCmp").setIndex(0) : this.times_title.getComponent("ImgSwitchCmp").setIndex(1);
        }
        this.remain_times.getComponent(cc.Label).string = this._remainTimes;
      },
      exitBonusGame: function exitBonusGame() {
        this._slotsScript.ClearAllTopShow();
        cc.vv.gameData.GetSlotsScript().clearCollectProgress();
        this.initBonusUI();
        cc.vv.gameData.SetIsBonusGame(false);
      },
      StopMove: function StopMove() {
        this._slotsScript.StopMove();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var safe_node, collectGame, i, idx, item, symbol, _loop2, _i, _ret;
          return regeneratorRuntime.wrap(function _callee9$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              safe_node = cc.find("safe_node", _this5.node);
              collectGame = cc.vv.gameData.getCollectGame();
              i = 0;

             case 3:
              if (!(i < _this5._subGameData.idxs.length)) {
                _context10.next = 20;
                break;
              }
              idx = _this5._subGameData.idxs[i];
              item = collectGame.gameInfo.items[i];
              if (!(4 === item.type)) {
                _context10.next = 17;
                break;
              }
              symbol = _this5._slotsScript.GetSymbolByIdx(idx);
              if (!symbol) {
                _context10.next = 17;
                break;
              }
              symbol.playAddSpinAnimation();
              _this5._remainTimes++;
              _this5.updateRemainTimes();
              _this5.add_spin_spine.active = true;
              _this5.add_spin_spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _context10.next = 16;
              return cc.vv.gameData.awaitTime(.5);

             case 16:
              _this5.add_spin_spine.active = false;

             case 17:
              i++;
              _context10.next = 3;
              break;

             case 20:
              _loop2 = regeneratorRuntime.mark(function _loop2(_i) {
                var idx, symbol, newInfo, coin, num, j, _item2, startSymbol, _j, _item3, _startSymbol;
                return regeneratorRuntime.wrap(function _loop2$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                   case 0:
                    idx = _this5._subGameData.idxs[_i];
                    symbol = _this5._slotsScript.GetSymbolByIdx(idx);
                    newInfo = collectGame.gameInfo.items[idx - 1];
                    if (symbol) {
                      _context9.next = 5;
                      break;
                    }
                    return _context9.abrupt("return", "continue");

                   case 5:
                    coin = 0;
                    num = 0;
                    j = 0;

                   case 8:
                    if (!(j < collectGame.gameInfo.items.length)) {
                      _context9.next = 17;
                      break;
                    }
                    _item2 = collectGame.gameInfo.items[j];
                    if (!(!_item2.empty && j + 1 !== idx && 1 === _item2.type)) {
                      _context9.next = 14;
                      break;
                    }
                    startSymbol = _this5._slotsScript.GetSymbolByIdx(j + 1);
                    if (!startSymbol) {
                      _context9.next = 14;
                      break;
                    }
                    return _context9.delegateYield(regeneratorRuntime.mark(function _callee7() {
                      var fly_circle, startPos, endPos;
                      return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) switch (_context7.prev = _context7.next) {
                         case 0:
                          coin += _item2.coin;
                          num++;
                          num > 6 && (num = 6);
                          3 !== newInfo.type ? Global.SlotsSoundMgr.playEffect("scatr_red" + num) : 2 === _item2.type || 3 === _item2.type ? Global.SlotsSoundMgr.playEffect("scatr_yellowgreen") : Global.SlotsSoundMgr.playEffect("scatr_red" + num);
                          fly_circle = cc.instantiate(cc.find("safe_node/fly_circle", _this5.node));
                          fly_circle.active = true;
                          fly_circle.parent = safe_node;
                          startPos = startSymbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                          startPos = safe_node.convertToNodeSpaceAR(startPos);
                          fly_circle.position = startPos;
                          endPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                          endPos = safe_node.convertToNodeSpaceAR(endPos);
                          cc.tween(fly_circle).to(.5, {
                            position: endPos
                          }).call(function() {
                            symbol.showBonusCoin(coin);
                            var scatter_up = cc.instantiate(cc.find("scatter_up", safe_node));
                            scatter_up.active = true;
                            scatter_up.parent = safe_node;
                            scatter_up.position = endPos;
                            scatter_up.getComponent(sp.Skeleton).setAnimation(0, "Scatter_up", false);
                            scatter_up.getComponent(sp.Skeleton).setCompleteListener(function() {
                              scatter_up.removeFromParent();
                            });
                          }).removeSelf().start();
                          _context7.next = 15;
                          return cc.vv.gameData.awaitTime(.6);

                         case 15:
                         case "end":
                          return _context7.stop();
                        }
                      }, _callee7);
                    })(), "t0", 14);

                   case 14:
                    j++;
                    _context9.next = 8;
                    break;

                   case 17:
                    _j = 0;

                   case 18:
                    if (!(_j < collectGame.gameInfo.items.length)) {
                      _context9.next = 27;
                      break;
                    }
                    _item3 = collectGame.gameInfo.items[_j];
                    if (!(!_item3.empty && _j + 1 !== idx && 3 === newInfo.type && (2 === _item3.type || 3 === _item3.type))) {
                      _context9.next = 24;
                      break;
                    }
                    _startSymbol = _this5._slotsScript.GetSymbolByIdx(_j + 1);
                    if (!_startSymbol) {
                      _context9.next = 24;
                      break;
                    }
                    return _context9.delegateYield(regeneratorRuntime.mark(function _callee8() {
                      var fly_circle, startPos, endPos;
                      return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) switch (_context8.prev = _context8.next) {
                         case 0:
                          coin += _item3.coin;
                          num++;
                          num > 6 && (num = 6);
                          3 !== newInfo.type ? Global.SlotsSoundMgr.playEffect("scatr_red" + num) : 2 === _item3.type || 3 === _item3.type ? Global.SlotsSoundMgr.playEffect("scatr_yellowgreen") : Global.SlotsSoundMgr.playEffect("scatr_red" + num);
                          fly_circle = cc.instantiate(cc.find("safe_node/fly_circle", _this5.node));
                          fly_circle.active = true;
                          fly_circle.parent = safe_node;
                          startPos = _startSymbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                          startPos = safe_node.convertToNodeSpaceAR(startPos);
                          fly_circle.position = startPos;
                          endPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                          endPos = safe_node.convertToNodeSpaceAR(endPos);
                          cc.tween(fly_circle).to(.5, {
                            position: endPos
                          }).call(function() {
                            symbol.showBonusCoin(coin);
                            var scatter_up = cc.instantiate(cc.find("scatter_up", safe_node));
                            scatter_up.active = true;
                            scatter_up.parent = safe_node;
                            scatter_up.position = endPos;
                            scatter_up.getComponent(sp.Skeleton).setAnimation(0, "Scatter_up", false);
                            scatter_up.getComponent(sp.Skeleton).setCompleteListener(function() {
                              scatter_up.removeFromParent();
                            });
                          }).removeSelf().start();
                          _context8.next = 15;
                          return cc.vv.gameData.awaitTime(.6);

                         case 15:
                         case "end":
                          return _context8.stop();
                        }
                      }, _callee8);
                    })(), "t1", 24);

                   case 24:
                    _j++;
                    _context9.next = 18;
                    break;

                   case 27:
                   case "end":
                    return _context9.stop();
                  }
                }, _loop2);
              });
              _i = 0;

             case 22:
              if (!(_i < _this5._subGameData.idxs.length)) {
                _context10.next = 30;
                break;
              }
              return _context10.delegateYield(_loop2(_i), "t0", 24);

             case 24:
              _ret = _context10.t0;
              if (!("continue" === _ret)) {
                _context10.next = 27;
                break;
              }
              return _context10.abrupt("continue", 27);

             case 27:
              _i++;
              _context10.next = 22;
              break;

             case 30:
              _this5._greenCoin = collectGame.gameInfo.fullCoin;
              _this5.updateCoin();
              _context10.next = 34;
              return cc.vv.gameData.awaitTime(.5);

             case 34:
              if (!collectGame.gameInfo.isEnd) {
                _context10.next = 38;
                break;
              }
              return _context10.delegateYield(regeneratorRuntime.mark(function _callee6() {
                var coin, _i2, _item, _symbol, particle, startPos, endPos;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                   case 0:
                    Global.SlotsSoundMgr.playEffect("bgbgmend");
                    _this5.bonus_win.active = true;
                    _this5.remain_times.parent.active = false;
                    _this5.gold_coin.parent.active = false;
                    _this5.green_coin.parent.active = false;
                    _this5.bonus_win_coin.getComponent(cc.Label).string = "";
                    coin = 0;
                    _i2 = 0;

                   case 8:
                    if (!(_i2 < collectGame.gameInfo.items.length)) {
                      _context6.next = 30;
                      break;
                    }
                    _item = collectGame.gameInfo.items[_i2];
                    if (!(!_item.empty && 4 !== _item.type)) {
                      _context6.next = 27;
                      break;
                    }
                    Global.SlotsSoundMgr.playEffect("bgwin");
                    coin += _item.coin;
                    _symbol = _this5._slotsScript.GetSymbolByIdx(_i2 + 1);
                    if (!_symbol) {
                      _context6.next = 27;
                      break;
                    }
                    _symbol.playBonusWinAnimation();
                    particle = cc.instantiate(cc.find("particle_dian", safe_node));
                    particle.active = true;
                    particle.parent = safe_node;
                    startPos = _symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = safe_node.convertToNodeSpaceAR(startPos);
                    particle.position = startPos;
                    endPos = _this5.bonus_win_coin.convertToWorldSpaceAR(cc.v2(0, 0));
                    endPos = safe_node.convertToNodeSpaceAR(endPos);
                    cc.tween(particle).to(.5, {
                      position: endPos
                    }).call(function() {
                      _this5.bonus_win_coin.getComponent(cc.Label).string = Global.FormatNumToComma(coin);
                      _this5.bonus_win_spine.active = true;
                      _this5.bonus_win_spine.getComponent(sp.Skeleton).setAnimation(0, "jiesuan_glow", false);
                      _this5.bonus_win_spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                        _this5.bonus_win_spine.getComponent(sp.Skeleton).setCompleteListener(null);
                        _this5.bonus_win_spine.active = false;
                      });
                    }).removeSelf().start();
                    _context6.next = 27;
                    return cc.vv.gameData.awaitTime(.7);

                   case 27:
                    _i2++;
                    _context6.next = 8;
                    break;

                   case 30:
                    _context6.next = 32;
                    return _this5.popBonusResultDialog();

                   case 32:
                    _this5.exitBonusGame();
                    Global.SlotsSoundMgr.stopBgm();
                    Global.SlotsSoundMgr.playNormalBgm();
                    cc.vv.gameData.AddCoin(collectGame.gameInfo.winCoin);
                    cc.vv.gameData.GetSlotsScript().ShowBottomWin(collectGame.gameInfo.winCoin, collectGame.gameInfo.winCoin, true, function() {
                      _this5._exitCallBack && _this5._exitCallBack();
                      cc.vv.gameData.GetSlotsScript().CanDoNextRound();
                    });

                   case 37:
                   case "end":
                    return _context6.stop();
                  }
                }, _callee6);
              })(), "t1", 36);

             case 36:
              _context10.next = 39;
              break;

             case 38:
              _this5.reqSpin();

             case 39:
             case "end":
              return _context10.stop();
            }
          }, _callee9);
        }))();
      },
      addCoinNum: function addCoinNum() {
        this._coinNum++;
        this.coin_num.getComponent(cc.Label).string = this._coinNum;
      },
      getSubGameData: function getSubGameData() {
        return this._subGameData;
      },
      getMaxReelIdx: function getMaxReelIdx(type, col) {
        var reelList = this._slotsScript.getLastStopReel();
        return reelList[col];
      },
      GetLastStopSlotReel: function GetLastStopSlotReel() {
        return this._slotsScript.GetLastStopReelIdx();
      },
      reqSpin: function reqSpin() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var reqdata, result;
          return regeneratorRuntime.wrap(function _callee10$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              _this6._subGameData = null;
              _this6._remainTimes--;
              _this6.updateRemainTimes();
              cc.vv.gameData.setScatterNumInBonusGame(0);
              _this6._slotsScript.StartMove(cc.vv.gameData.getDeskInfo().collectGame.gameInfo.items);
              reqdata = {
                rtype: 2
              };
              _context11.next = 8;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 8:
              result = _context11.sent;
              if (200 === result.code && !result.spcode) {
                _this6._subGameData = result.data;
                cc.vv.gameData.setCollectGame(result.data.collectGame);
                _this6._slotsScript.setSpinResult(result.data.collectGame);
              }

             case 10:
             case "end":
              return _context11.stop();
            }
          }, _callee10);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  JapaneseSinger_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcddfqhkI9HFIFRA09QD51g", "JapaneseSinger_BonusReel");
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
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var symbol = this._symbols[0];
        if (symbol.GetShowId() === cc.vv.gameData.getGameCfg().scatterId) {
          var data = symbol.GetData();
          if (4 !== data.type) {
            cc.vv.gameData.GetBonusScript().playBjGlow();
            symbol.playBonusStopAnimation();
            cc.vv.gameData.setScatterNumInBonusGame(cc.vv.gameData.getScatterNumInBonusGame() + 1);
            Global.SlotsSoundMgr.playEffect("scatr_bg" + cc.vv.gameData.getScatterNumInBonusGame());
            cc.vv.gameData.GetBonusScript().addCoinNum();
          }
        }
        var idx = cc.vv.gameData.GetBonusScript().GetLastStopSlotReel();
        if (this._reelIdx === idx) {
          cc.log(cc.js.formatStr("OnReelSpinEnd, %s", idx));
          cc.vv.gameData.GetBonusScript().OnSpinEnd();
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
        var maxReelIdx = cc.vv.gameData.GetBonusScript().getMaxReelIdx(this._type, this._reelIdx % 5);
        this._reelIdx === maxReelIdx && Global.SlotsSoundMgr.playEffect("reelstop");
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
  JapaneseSinger_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "157aabwm9lDkYjI4oJmeaiO", "JapaneseSinger_BonusSlots");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {},
      onLoad: function onLoad() {
        this._super();
      },
      start: function start() {},
      Init: function Init() {
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
          if (!node.getComponent("JapaneseSinger_BonusReel")) {
            var scp = node.addComponent("JapaneseSinger_BonusReel");
            scp.Init(i, row, this._topAniNode);
            this._reels.push(scp);
          }
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx % 5 * nIter;
      },
      OnSpinEnd: function OnSpinEnd() {},
      StartMove: function StartMove(items) {
        this._bStopRightnow = null;
        this._gameInfo = null;
        var reels = [];
        var reelIdxs = [];
        this._reels.forEach(function(reel) {
          var include = false;
          var item = items[reel.GetReelIdx()];
          item.empty || 4 === item.type || (include = true);
          if (!include) {
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
      setSpinResult: function setSpinResult(collectGame) {
        var cfg = cc.vv.gameData.getGameCfg();
        var cards = [];
        for (var i = 1; i <= 15; i++) {
          var randIdx = Global.random(1, cfg.randomBonusSymbols.length);
          var randVal = cfg.randomBonusSymbols[randIdx - 1];
          cards.push(randVal);
        }
        this.SetSlotsResult(cards, collectGame);
      },
      SetSlotsResult: function SetSlotsResult(cards, collectGame) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = {};
            var item = collectGame.gameInfo.items[i];
            if (!item.empty) {
              res.sid = this._cfg.scatterId;
              res.data = item;
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
        return null != cc.vv.gameData.GetBonusScript().getSubGameData();
      },
      getSlotsIndex: function getSlotsIndex() {
        return this._slotsIndex;
      },
      getReel: function getReel(col) {
        return this._reels[col];
      },
      reconnectInitSymbol: function reconnectInitSymbol() {
        var collectGame = cc.vv.gameData.getCollectGame();
        for (var i = 0; i < collectGame.gameInfo.items.length; i++) {
          var item = collectGame.gameInfo.items[i];
          if (item.empty) this._reels[i].GetSymbolByRow(0).ShowRandomSymbol(); else {
            this._reels[i].GetSymbolByRow(0).ShowById(this._cfg.scatterId, item);
            this._reels[i].GetSymbolByRow(0).showBonus();
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  JapaneseSinger_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "045cbkwY1ZGMZWnBnHMvFex", "JapaneseSinger_Cfg");
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
        stop_ani: {
          name: "Wild_01",
          zIndex: 100
        },
        win_ani: {
          name: "Wild_02",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "Scatter_red_down",
          zIndex: 100
        },
        win_ani: {
          name: "Scatter_red_win",
          zIndex: 300
        },
        free_stop_ani: {
          name: ""
        }
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4"
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5"
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6"
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7"
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8"
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9"
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "JapaneseSinger_Slots",
        Reels: "JapaneseSinger_Reel",
        Symbols: "JapaneseSinger_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 124,
        height: 114
      },
      randomSymbols: [ 1, 2, 4, 5, 6, 7, 8, 9, 10 ],
      randomBonusSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10 ],
      wildId: 1,
      scatterId: 2,
      kuang: "kuang",
      speed: 1500,
      reelStopInter: .3,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .4
      },
      autoModelDelay: 1,
      AddAntiTime: 1.5,
      helpItems: [ "games/JapaneseSinger/prefab/help_item_1", "games/JapaneseSinger/prefab/help_item_2", "games/JapaneseSinger/prefab/help_item_3" ],
      commEffect: {
        path: "games/JapaneseSinger/",
        win1: [ "win_a", "win_end" ],
        win2: [ "win_b", "win_end" ],
        win3: [ "win_c", "win_end" ],
        win4: [ "win_d", "win_end" ]
      },
      normalBgm: "ngbgm",
      sysFloatOffsetPos: cc.v2(0, -120)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  JapaneseSinger_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5495AxD7tDpoWzMbjG97kZ", "JapaneseSinger_GameData");
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
      isFreeOver: function isFreeOver() {
        return !!this._gameInfo && (this._gameInfo.allFreeCnt > 0 && 0 === this._gameInfo.freeCnt);
      },
      isInFreeGame: function isInFreeGame() {
        return this._deskInfo.restFreeCount >= 0 && this._deskInfo.allFreeCount > 0 && this._deskInfo.restFreeCount !== this._deskInfo.allFreeCount;
      },
      SetBonusScript: function SetBonusScript(scp) {
        this._bonusScp = scp;
      },
      GetBonusScript: function GetBonusScript() {
        return this._bonusScp;
      },
      SetIsBonusGame: function SetIsBonusGame(isBonus) {
        this._isBonusGame = isBonus;
      },
      IsBonusGame: function IsBonusGame() {
        return this._isBonusGame;
      },
      getCollectGame: function getCollectGame() {
        return this._deskInfo.collectGame;
      },
      setCollectGame: function setCollectGame(collectGame) {
        this._deskInfo.collectGame = collectGame;
      },
      getScatterNumInBonusGame: function getScatterNumInBonusGame() {
        return this._scatterNumInBonusGame > 6 ? 6 : this._scatterNumInBonusGame;
      },
      setScatterNumInBonusGame: function setScatterNumInBonusGame(num) {
        this._scatterNumInBonusGame = num;
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
  JapaneseSinger_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c090clFssNPYpeODlw/Nlyp", "JapaneseSinger_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _lockBonus: false
      },
      onLoad: function onLoad() {
        this._super();
        var deskInfo = cc.vv.gameData.getDeskInfo();
        this._lockBonus = deskInfo.needbet > deskInfo.currmult;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
      },
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_bonus = this.node.addComponent("JapaneseSinger_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.SetBonusScript(script_bonus);
      },
      onUpdateBet: function onUpdateBet() {
        var spine = cc.find("safe_node/LMSlots_PrizePool_1/prizePool_Grand/spine", this.node).getComponent(sp.Skeleton);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        if (deskInfo.needbet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("unlock");
          spine.setAnimation(0, "Grand_unlock", false);
          this._lockBonus = false;
        } else if (deskInfo.needbet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("lock");
          this._lockBonus = true;
          spine.setAnimation(0, "Grand_lock", false);
          spine.addAnimation(0, "Grand_lock_idle", true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  JapaneseSinger_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c26bR6+phOHI85vmscf7j1", "JapaneseSinger_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        if (node) {
          var spine = cc.find("spine", node).getComponent(sp.Skeleton);
          if (bLock) if (bInit) spine.setAnimation(0, "Grand_lock_idle", true); else {
            spine.clearTracks();
            spine.setToSetupPose();
            spine.setAnimation(0, "Grand_lock", false);
            spine.addAnimation(0, "Grand_lock_idle", true);
          } else bInit ? spine.setAnimation(0, "Grand_unlock", true) : spine.setAnimation(0, "Grand_unlock", false);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  JapaneseSinger_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65590bA4xtNZ7oVBlOixbKK", "JapaneseSinger_Reel");
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
        var haveScatter = false;
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          if (item.GetShowId() === this._cfg.scatterId) {
            haveScatter = true;
            cc.vv.gameData.isInFreeGame() ? item.playFreeStopAnimation() : item.playStopAnimation();
          }
        }
        Global.SlotsSoundMgr.playEffect("reelstop");
        haveScatter && Global.SlotsSoundMgr.playEffect("reelscatr");
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  JapaneseSinger_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1695uBsblE9bG8D9j4ab3R", "JapaneseSinger_Slots");
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
        this.freeGlow = cc.find("B_Coin_Glow", this.node.parent);
        this.freeCoin = cc.find("coins", this.freeGlow);
        this.freeNode = cc.find("free_node", this.node);
        this.freeEachCoin = cc.find("fg_count_board/coins", this.freeNode);
        this.freeTimes = cc.find("count_board/times", this.freeNode);
        this._freeCoins = 0;
        this._super();
        var spine = cc.find("LMSlots_PrizePool_1/prizePool_Grand/spine", this.node.parent).getComponent(sp.Skeleton);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        deskInfo.needbet <= deskInfo.currmult ? spine.setAnimation(0, "Grand_unlock", false) : spine.setAnimation(0, "Grand_lock_idle", true);
        this.updateCollectProgress(deskInfo.collectGame);
      },
      StartMove: function StartMove() {
        if (cc.vv.gameData.IsBonusGame()) return;
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        cc.vv.gameData.isInFreeGame() && (this.freeTimes.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime() + "/" + cc.vv.gameData.GetTotalFree());
      },
      StopMove: function StopMove() {
        cc.vv.gameData.IsBonusGame() ? cc.vv.gameData.GetBonusScript().StopMove() : this._super();
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, rest;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              rest = cc.vv.gameData.GetFreeTime();
              if (1 !== deskInfo.collectGame.state) {
                _this._bottomScript.ShowBtnsByState("moveing_1");
                _this.clearCollectProgress();
                cc.vv.gameData.GetBonusScript().startBonusGame(deskInfo.collectGame);
              } else if (rest) {
                _this._bottomScript.ShowBtnsByState("moveing_1");
                _this.ShowGameview(true);
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("fgbgm");
                _this.freeEachCoin.getComponent(cc.Label).string = Global.formatNumShort(deskInfo.freeGameInfo.baseCoin);
                _this._freeCoins = deskInfo.freeGameInfo.totalCoin;
                _this.freeCoin.getComponent(cc.Label).string = Global.formatNumShort(_this._freeCoins, 0);
                _this.CanDoNextRound();
              } else {
                _this.ShowGameview(false);
                _this.CanDoNextRound();
              }

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (cc.vv.gameData.IsBonusGame()) cc.vv.gameData.GetBonusScript().onMsgSpine(msg); else {
                _this2._super(msg);
                msg.collectGame && cc.vv.gameData.setCollectGame(msg.collectGame);
              }

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
            if (cards[i] === this._cfg.scatterId) {
              var _iterator = _createForOfIteratorHelper(this._gameInfo.scatterInfo), _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  var info = _step.value;
                  if (info.idx === i + 1) {
                    res.data = info;
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
          var item = this._reels[_i];
          var reelRes = reelResults[_i];
          item.SetResult(reelRes);
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
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3._super();

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _context5.next = 2;
              return _this4.collectWilds();

             case 2:
              if (!cc.vv.gameData.isInFreeGame()) {
                _context5.next = 5;
                break;
              }
              _context5.next = 5;
              return _this4.collectFreeCoins();

             case 5:
              _this4.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this4.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                   case 0:
                    if (!(2 === _this4._gameInfo.collectGame.state)) {
                      _context4.next = 3;
                      break;
                    }
                    _context4.next = 3;
                    return _this4.triggerBonusGame();

                   case 3:
                    _this4.CheckEnterFreeGame() ? _this4.triggerFreeGame() : _this4.CheckExtraFreeGame() ? _this4.triggerExtraFreeGame() : _this4.CheckExitFreeGame() ? _this4.triggerExitFreeGame() : _this4.CanDoNextRound();

                   case 4:
                   case "end":
                    return _context4.stop();
                  }
                }, _callee4);
              })));

             case 10:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      triggerBonusGame: function triggerBonusGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              _this5.cutScene();
              _context6.next = 3;
              return cc.vv.gameData.awaitTime(2);

             case 3:
              _this5.clearCollectProgress();
              _context6.next = 6;
              return cc.vv.gameData.GetBonusScript().startBonusGame(_this5._gameInfo.collectGame);

             case 6:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      cutScene: function cutScene() {
        Global.SlotsSoundMgr.playEffect("transition");
        var transition = cc.find("transition", this.node.parent);
        transition.active = true;
        transition.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
        transition.getComponent(sp.Skeleton).setCompleteListener(function() {
          transition.getComponent(sp.Skeleton).setCompleteListener(null);
          transition.active = false;
        });
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        this.freeGlow.active = bFree;
        this.freeNode.active = bFree;
        cc.find("role", this.node.parent).active = !bFree;
        cc.find("info_board", this.node.parent).active = !bFree;
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              for (i = 0; i < _this6._gameInfo.resultCards.length; i++) {
                card = _this6._gameInfo.resultCards[i];
                if (card === _this6._cfg.scatterId) {
                  symbol = _this6.GetSymbolByIdx(i + 1);
                  symbol.playWinAnimation();
                }
              }
              _context7.next = 5;
              return cc.vv.gameData.awaitTime(1);

             case 5:
              _this6.ShowGameview(true);
              _this6._freeCoins = 0;
              _this6.freeEachCoin.getComponent(cc.Label).string = Global.formatNumShort(_this6._gameInfo.freeGameInfo.baseCoin, 0);
              _this6.freeTimes.getComponent(cc.Label).string = "1/5";
              _this6.freeCoin.getComponent(cc.Label).string = "";
              _context7.next = 12;
              return _this6.popFreeDialog();

             case 12:
              _context7.next = 14;
              return cc.vv.gameData.awaitTime(1);

             case 14:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");
              _this6.CanDoNextRound();

             case 17:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      triggerExtraFreeGame: function triggerExtraFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _this7._bottomScript.ShowBtnsByState("moveing_1");
              _context8.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context8.next = 5;
              return _this7.popExtraFreeDialog();

             case 5:
              _this7.CanDoNextRound();

             case 6:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this8._bottomScript.ShowBtnsByState("moveing_1");
              _context9.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _context9.next = 5;
              return _this8.popFreeResultDialog();

             case 5:
              _this8.ShowGameview(false);
              _this8.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this8.CanDoNextRound();
              });

             case 7:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      popFreeDialog: function popFreeDialog() {
        var _this9 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
            var free_dialog, dialog, coins;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fg_trigger");
                free_dialog = cc.find("dialog_node", _this9.node.parent);
                free_dialog.active = true;
                dialog = cc.find("common_enter_node", free_dialog);
                dialog.active = true;
                dialog.scale = 0;
                cc.tween(dialog).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                coins = cc.find("title/coins", dialog);
                coins.getComponent(cc.Label).string = Global.formatNumShort(_this9._gameInfo.freeGameInfo.baseCoin);
                _context10.next = 11;
                return cc.vv.gameData.awaitTime(1.5);

               case 11:
                cc.tween(dialog).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  free_dialog.active = false;
                  dialog.active = false;
                  success();
                }).start();

               case 12:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      popExtraFreeDialog: function popExtraFreeDialog() {
        var _this10 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success) {
            var free_dialog, dialog, title, times;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("add1spin");
                Global.SlotsSoundMgr.playEffect("fg_trigger");
                free_dialog = cc.find("dialog_node", _this10.node.parent);
                free_dialog.active = true;
                dialog = cc.find("extra_node", free_dialog);
                dialog.active = true;
                dialog.scale = 0;
                cc.tween(dialog).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                title = cc.find("title", dialog);
                _this10._gameInfo.freeResult.freeInfo.freeCnt > 1 ? title.getComponent("ImgSwitchCmp").setIndex(1) : title.getComponent("ImgSwitchCmp").setIndex(0);
                times = cc.find("title/times", dialog);
                times.getComponent(cc.Label).string = "+" + _this10._gameInfo.freeResult.freeInfo.freeCnt;
                _context11.next = 14;
                return cc.vv.gameData.awaitTime(1);

               case 14:
                cc.tween(dialog).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  free_dialog.active = false;
                  dialog.active = false;
                  success();
                }).start();

               case 15:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this11 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success) {
            var free_dialog, dialog;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgend");
                free_dialog = cc.find("dialog_node", _this11.node.parent);
                free_dialog.active = true;
                dialog = cc.find("result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 0;
                cc.tween(dialog).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("coin", dialog).getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.GetGameTotalFreeWin());
                _context12.next = 10;
                return cc.vv.gameData.awaitTime(1.5);

               case 10:
                cc.tween(dialog).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  free_dialog.active = false;
                  dialog.active = false;
                  success();
                }).start();

               case 11:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x3) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      updateCollectProgress: function updateCollectProgress(collectGame) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      clearCollectProgress: function clearCollectProgress() {},
      collectWilds: function collectWilds() {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          var i, symbol;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              if (!(_this12._gameInfo.wildIdxs && _this12._gameInfo.wildIdxs.length > 0)) {
                _context14.next = 12;
                break;
              }
              i = 0;

             case 2:
              if (!(i < _this12._gameInfo.wildIdxs.length)) {
                _context14.next = 12;
                break;
              }
              symbol = _this12.GetSymbolByIdx(_this12._gameInfo.wildIdxs[i]);
              if (!symbol) {
                _context14.next = 9;
                break;
              }
              symbol.playStopAnimation();
              _context14.next = 8;
              return cc.vv.gameData.awaitTime(1);

             case 8:
              symbol.ShowNormal();

             case 9:
              i++;
              _context14.next = 2;
              break;

             case 12:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      collectFreeCoins: function collectFreeCoins() {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          var i, info, symbol, particle, startPos, endPos, _i2, _info, _symbol;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              if (!(_this13._gameInfo.scatterInfo && _this13._gameInfo.scatterInfo.length > 0)) {
                _context15.next = 26;
                break;
              }
              i = 0;

             case 2:
              if (!(i < _this13._gameInfo.scatterInfo.length)) {
                _context15.next = 23;
                break;
              }
              info = _this13._gameInfo.scatterInfo[i];
              symbol = _this13.GetSymbolByIdx(info.idx);
              if (!symbol) {
                _context15.next = 20;
                break;
              }
              symbol.playFreeAppearAnimation();
              _this13._freeCoins += _this13._gameInfo.freeGameInfo.baseCoin;
              Global.SlotsSoundMgr.playEffect("scatr_fg");
              particle = cc.instantiate(cc.find("particle_star", _this13.node.parent));
              particle.active = true;
              particle.parent = _this13.node.parent;
              startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this13.node.parent.convertToNodeSpaceAR(startPos);
              particle.position = startPos;
              endPos = _this13.freeGlow.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this13.node.parent.convertToNodeSpaceAR(endPos);
              cc.tween(particle).to(.5, {
                position: endPos
              }).call(function() {
                _this13.freeCoin.getComponent(cc.Label).string = Global.formatNumShort(_this13._freeCoins);
              }).removeSelf().start();
              _context15.next = 20;
              return cc.vv.gameData.awaitTime(.7);

             case 20:
              i++;
              _context15.next = 2;
              break;

             case 23:
              for (_i2 = 0; _i2 < _this13._gameInfo.scatterInfo.length; _i2++) {
                _info = _this13._gameInfo.scatterInfo[_i2];
                _symbol = _this13.GetSymbolByIdx(_info.idx);
                _symbol && _symbol.playFreeWinAnimation();
              }
              _context15.next = 26;
              return cc.vv.gameData.awaitTime(.5);

             case 26:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  JapaneseSinger_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b669Wahv5OwoO8tzZtvHe0", "JapaneseSinger_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        this._super();
        if (!cc.vv.gameData.IsBonusGame()) {
          cc.find("free_coin", this.node).active = false;
          cc.find("times", this.node).active = false;
          this.showCoin();
        }
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        if (id === cc.vv.gameData.getGameCfg().scatterId) if (cc.vv.gameData.isInFreeGame()) {
          cc.find("coin", this.node).active = false;
          this._showNode.getComponent("ImgSwitchCmp").setIndex(1);
        } else 1 !== cc.vv.gameData.getCollectGame().state ? this._showNode.getComponent("ImgSwitchCmp").setIndex(data ? data.type - 1 : 1) : this._showNode.getComponent("ImgSwitchCmp").setIndex(0);
        this.showCoin();
      },
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._super(idx);
      },
      GetSymbolIdx: function GetSymbolIdx() {
        return this._symbolIdx;
      },
      showCoin: function showCoin() {
        var coin = cc.find("coin", this.node);
        if (cc.vv.gameData.isInFreeGame() || cc.vv.gameData.IsBonusGame()) {
          coin && (coin.active = false);
          return;
        }
        if (coin && this._id === cc.vv.gameData.getGameCfg().scatterId) if (this._data) {
          if (this._data.coin > 0) {
            coin.active = true;
            coin.getComponent(cc.Label).string = Global.formatNumShort(this._data.coin, 0);
          }
        } else {
          coin.active = true;
          var randomRate = [ .25, .5, .75, 1, 2, 5, 10 ];
          var randomCoin = cc.vv.gameData.GetTotalBet() * randomRate[Math.floor(Math.random() * randomRate.length)];
          coin.getComponent(cc.Label).string = Global.formatNumShort(randomCoin, 0);
        } else coin.active = false;
      },
      playFreeStopAnimation: function playFreeStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = this._showNode.getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, "Scatter_yellow_down", false);
        }
      },
      playBonusStopAnimation: function playBonusStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "stop";
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          var animationName = "Scatter_yellow_down";
          this._data && 3 === this._data.type && (animationName = "Scatter_green_down");
          aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, animationName, false);
        }
      },
      playBonusWinAnimation: function playBonusWinAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          var animationName = "Scatter_red_win";
          this._data && 2 === this._data.type ? animationName = "Scatter_yellow_win" : this._data && 3 === this._data.type && (animationName = "Scatter_green_win");
          aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, animationName, true);
        }
      },
      showBonusCoin: function showBonusCoin(coins) {
        var aniNode = this.setAnimationToTop(true);
        var coin = cc.find("free_coin", aniNode);
        coin.active = true;
        coin.getComponent(cc.Label).string = Global.formatNumShort(coins, 0);
      },
      playFreeAppearAnimation: function playFreeAppearAnimation() {
        var _this = this;
        var aniNode = this.setAnimationToTop(true);
        var cfg = cc.vv.gameData.getGameCfg();
        var topShowNode = cc.find(cfg.symbol[this._id].win_node, aniNode);
        var jiesuan = cc.find("jiesuan", topShowNode);
        if (jiesuan) {
          jiesuan.active = true;
          jiesuan.getComponent(sp.Skeleton).setAnimation(0, "Scatter_yellow_jiesuan", false);
        }
        var nodeSp = topShowNode.getComponent(sp.Skeleton);
        if (nodeSp) {
          nodeSp.setAnimation(0, "Scatter_yellow_appear", false);
          cc.tween(this.node).delay(.3).call(function() {
            jiesuan.active = false;
            var free_coin = cc.find("free_coin", aniNode);
            free_coin.active = true;
            free_coin.getComponent(cc.Label).string = Global.formatNumShort(_this._data.coin, 0);
            free_coin.scale = 0;
            cc.tween(free_coin).to(.2, {
              scale: 1
            }, {
              easing: "backOut"
            }).start();
            if (_this._data.freeCnt && _this._data.freeCnt > 0) {
              var times = cc.find("times", aniNode);
              times.active = true;
              times.scale = 0;
              cc.tween(times).to(.2, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
            }
          }).start();
        }
      },
      playFreeWinAnimation: function playFreeWinAnimation() {
        var aniNode = this.setAnimationToTop(true);
        var topShowNode = cc.find(cc.vv.gameData.getGameCfg().symbol[this._id].win_node, aniNode);
        var nodeSp = topShowNode.getComponent(sp.Skeleton);
        nodeSp && nodeSp.setAnimation(0, "Scatter_yellow_win", true);
      },
      playAddSpinAnimation: function playAddSpinAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        this._showNode && (this._showNode.active = false);
        var aniNode = this.setAnimationToTop(true);
        aniNode.active = true;
        var topShowNode = cc.find("Spin1", aniNode);
        topShowNode.active = true;
        aniNode.zIndex = 300 - this._symbolIdx + 10 * this._reelIdx;
        var nodeSp = topShowNode.getComponent(sp.Skeleton);
        nodeSp && nodeSp.setAnimation(0, "Spin1", false);
      },
      showBonus: function showBonus() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          var mask = cc.find("mask", aniNode);
          mask && (mask.active = false);
          var animationName = "Scatter_red_down";
          this._data && 2 === this._data.type ? animationName = "Scatter_yellow_down" : this._data && 3 === this._data.type && (animationName = "Scatter_green_down");
          aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            nodeSp.setAnimation(0, animationName, false);
            var coin = cc.find("free_coin", aniNode);
            this._data && 1 === this._data.type && (coin = cc.find("coin", aniNode));
            coin.active = true;
            coin.getComponent(cc.Label).string = Global.formatNumShort(this._data.coin, 0);
          }
        }
      },
      playBonusAppearAnimation: function playBonusAppearAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          aniNode.scale = 0;
          cc.tween(aniNode).to(.2, {
            scale: 1
          }).start();
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          var mask = cc.find("mask", aniNode);
          mask && (mask.active = false);
          aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, "Scatter_red_appear", false);
          var coin = cc.find("coin", aniNode);
          coin.active = true;
          coin.getComponent(cc.Label).string = Global.formatNumShort(this._data.coin, 0);
          cc.tween(coin).to(.2, {
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
}, {}, [ "JapaneseSinger_BonusGame", "JapaneseSinger_BonusReel", "JapaneseSinger_BonusSlots", "JapaneseSinger_Cfg", "JapaneseSinger_GameData", "JapaneseSinger_Logic", "JapaneseSinger_PrizePool", "JapaneseSinger_Reel", "JapaneseSinger_Slots", "JapaneseSinger_Symbol" ]);