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
  Zues_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78013eY6W5I6Z2d24FjZXZE", "Zues_BonusGame");
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
    var subGameType = {
      fitstchoice: 1,
      chooseGrail: 2,
      roundEnd: 3,
      lastChoice: 4
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _grailItemList: [],
        _giveUpItemList: [],
        _roundTimes: 0,
        _totalRoundTimes: 5,
        _currCnt: 0
      },
      Init: function Init() {
        this._gameUI = cc.find("safe_node/bonus_game", this.node);
        this._gameUI.active = false;
        this._left_multi = cc.find("node_left", this._gameUI);
        this._right_multi = cc.find("node_right", this._gameUI);
        this._node_centre = cc.find("node_centre", this._gameUI);
        this._node_nowGrail = cc.find("select/node_nowGrail", this._node_centre);
        this._node_offers = cc.find("select/node_offers", this._node_centre);
        var node_lbl = cc.find("node_lbl", this._node_offers);
        for (var i = 0; i < node_lbl.childrenCount; i++) {
          var item = cc.find("lbl_" + (i + 1), node_lbl);
          item.active = false;
          this._giveUpItemList.push(item);
        }
        this._node_items = cc.find("node_items", this._gameUI);
        for (var _i = 0; _i < this._node_items.childrenCount; _i++) {
          var _item = cc.find("item_" + (_i + 1), this._node_items);
          Global.btnClickEvent(_item, this.onChooseGrail, this);
          this._grailItemList.push(_item);
        }
        this._item_mask = cc.find("item_mask", this._gameUI);
        this._item_mask.active = true;
        this._tit_goodLuck = cc.find("tit_goodLuck", this._gameUI);
        this._tit_choose = cc.find("tit_choose", this._gameUI);
        this._tit_selectTimes = cc.find("tit_selectTimes", this._gameUI);
        this._bg_mask = cc.find("mask", this._gameUI);
        this._item_big = cc.find("item_big", this._gameUI);
        this._node_popup = cc.find("node_popup", this._gameUI);
        this._pop_start_end = cc.find("pop_start_end", this._node_popup);
        this._pop_round = cc.find("pop_round", this._node_popup);
        this._pop_spine_offer = cc.find("pop_spine_offer", this._node_popup);
        this._pop_select = cc.find("pop_select", this._node_popup);
        this._pop_select_offer = cc.find("pop_select/node_1", this._node_popup);
        this._pop_select_grail = cc.find("pop_select/node_2", this._node_popup);
        var panel_click = cc.find("panel_click", this._gameUI);
        panel_click.active = false;
        this._bonusNode_mask = cc.find("mask", this._gameUI);
        this._bonusNode_mask.active = false;
      },
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      backToGame: function backToGame() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
            var showCnt, currState, state, list, i, mult;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this._gameEndCall = sucess;
                _this.setBonusGameState(true);
                showCnt = cc.vv.gameData.GetCurrCnt();
                _this.initGrailItems(showCnt);
                currState = cc.vv.gameData.GetCurrState();
                state = currState.state;
                _this._gainMulti = cc.vv.gameData.GetGainMult();
                _this._prize = cc.vv.gameData.GetPrize();
                _this.initCentreNode("full");
                _this.initCentreGrail();
                _this.setTitleState("goodLuck");
                _this.initMultiMaskNode(true);
                list = cc.vv.gameData.GetUnpickedMult();
                for (i = 0; i < list.length; i++) _this.setMultMaskState(list[i], false);
                _this.initGrailItemsState();
                _this.showHistoryMulti();
                if (1 === state) {
                  _this.popStartPanel();
                  _this._item_mask.active = false;
                } else if (2 === state) {
                  _this._nextRound = currState.nextRound;
                  _this._nextCount = currState.nextCount;
                  _this.startNewRound();
                } else if (3 === state) {
                  mult = cc.vv.gameData.GetHistoryMult();
                  _this._roundTimes = mult.length + 1;
                  _this.popShowSelectOffer();
                } else if (4 === state) {
                  _this._options = cc.vv.gameData.GetLastChoice();
                  _this.popShowSelectGrail();
                }

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
      enterBonusGame: function enterBonusGame(type) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
                  var getIdx, self, btn, func;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      _this2.setBonusGameState(true);
                      _this2._item_mask.active = true;
                      getIdx = cc.vv.gameData.GetCurrCnt();
                      self = _this2;
                      if (!(1 === type)) {
                        _context4.next = 19;
                        break;
                      }
                      cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                      _this2.initGrailItems(getIdx);
                      _this2.initCentreNode("normal");
                      _this2.setTitleState("goodLuck");
                      _context4.next = 11;
                      return _this2.awaitTime(.5);

                     case 11:
                      btn = cc.find("panel_click", _this2._gameUI);
                      btn.active = true;
                      btn.off("click");
                      func = function() {
                        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) switch (_context2.prev = _context2.next) {
                             case 0:
                              btn.active = false;
                              self.setBonusGameState(false);
                              _context2.next = 4;
                              return self.awaitTime(.5);

                             case 4:
                              cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
                              sucess();

                             case 6:
                             case "end":
                              return _context2.stop();
                            }
                          }, _callee2);
                        }));
                        return function func() {
                          return _ref3.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn, func, true);
                      btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) switch (_context3.prev = _context3.next) {
                           case 0:
                            btn.stopAllActions();
                            _context3.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context3.stop();
                          }
                        }, _callee3);
                      })));
                      _context4.next = 45;
                      break;

                     case 19:
                      if (!(2 === type)) {
                        _context4.next = 45;
                        break;
                      }
                      _this2.initGrailItems(getIdx - 1);
                      _this2.initCentreNode(26 === getIdx ? "full" : "normal");
                      _this2.setTitleState("goodLuck");
                      if (!(getIdx < 26)) {
                        _context4.next = 36;
                        break;
                      }
                      _this2.initMultiMaskNode(true);
                      _context4.next = 27;
                      return _this2.showGrailItem(getIdx);

                     case 27:
                      _context4.next = 29;
                      return _this2.awaitTime(2);

                     case 29:
                      self.setBonusGameState(false);
                      _context4.next = 32;
                      return self.awaitTime(.5);

                     case 32:
                      Global.SlotsSoundMgr.stopBgm();
                      sucess();
                      _context4.next = 45;
                      break;

                     case 36:
                      _this2.initMultiMaskNode(false);
                      _context4.next = 39;
                      return _this2.showGrailItem(getIdx);

                     case 39:
                      _context4.next = 41;
                      return _this2.awaitTime(1);

                     case 41:
                      _context4.next = 43;
                      return _this2.popStartPanel();

                     case 43:
                      _this2._item_mask.active = false;
                      _this2._gameEndCall = sucess;

                     case 45:
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
      initData: function initData() {
        this._roundTimes = 0;
        this._chooseIdxList = [];
        this._node_nowGrail.active = false;
        cc.find("item", this._node_nowGrail).active = false;
        cc.find("spine", this._node_nowGrail).active = false;
        cc.find("item/lbl", this._node_nowGrail).getComponent(cc.Label).string = "";
        cc.vv.gameData.SetHistoryMult([]);
        this.showHistoryMulti();
        this.initMultiMaskNode(true);
        cc.vv.gameData.SetCurrCnt(0);
      },
      onSendSeq: function onSendSeq(data) {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = data;
        cc.vv.NetManager.send(req, true);
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        AppLog.log("\u63a5\u6536\u6e38\u620f\u52a8\u4f5c\u6570\u636e");
        if (200 == msg.code) {
          var data = msg.data;
          var rtype = data.rtype;
          if (rtype === subGameType.fitstchoice) {
            this._freeBags = data.freeBage;
            this._nextRound = data.nextRound;
            this._nextCount = data.nextCount;
            this.startNewRound();
          } else if (rtype === subGameType.chooseGrail) {
            this._grailMultiList = data.items;
            this._gainMulti = data.mult;
            this._prize = data.prize;
            this.showRoundResult();
          } else if (rtype === subGameType.roundEnd) {
            var takeit = true;
            if (data.takeIt) {
              this._winCoin = data.winCoin;
              this._gainMulti = data.mult;
              this._prize = data.prize;
              this.popEndPanel();
            } else {
              this._nextRound = data.nextRound;
              this._nextCount = data.nextCount;
              this._giveUpMult = data.mult;
              this._options = data.options;
              this.selectLeaveOffer();
            }
          } else if (rtype === subGameType.lastChoice) {
            this._winCoin = data.winCoin;
            this._gainMulti = data.mult;
            this._prize = data.prize;
            this.showResultSelectGrail();
          }
        }
      },
      setBonusGameState: function setBonusGameState(bShow) {
        var _this3 = this;
        if (bShow && !this._gameUI.active) {
          this._gameUI.active = true;
          this._gameUI.opacity = 0;
          cc.tween(this._gameUI).to(.5, {
            opacity: 255
          }).start();
        } else !bShow && this._gameUI.active && cc.tween(this._gameUI).to(.5, {
          opacity: 0
        }).call(function() {
          _this3._gameUI.active = false;
        }).start();
      },
      initMultiMaskNode: function initMultiMaskNode(bShow) {
        for (var i = 0; i < this._left_multi.childrenCount; i++) this._left_multi.children[i].getChildByName("mask").active = bShow;
        for (var _i2 = 0; _i2 < this._right_multi.childrenCount; _i2++) this._right_multi.children[_i2].getChildByName("mask").active = bShow;
      },
      setMultMaskState: function setMultMaskState(mult, bShow) {
        var p_node;
        p_node = mult < 50 ? this._left_multi : this._right_multi;
        cc.find("item_" + mult + "/mask", p_node).active = bShow;
      },
      initCentreNode: function initCentreNode(type) {
        this._node_centre.getChildByName("img_normal").active = "normal" === type;
        this._node_centre.getChildByName("select").active = "full" === type;
      },
      initCentreGrail: function initCentreGrail() {
        var list = cc.vv.gameData.GetLastChoice();
        var item = cc.find("item", this._node_nowGrail);
        if (list && list.length > 0) {
          this._node_nowGrail.active = true;
          item.active = true;
          item.getChildByName("lbl").getComponent(cc.Label).string = list[0];
          cc.find("spine", this._node_nowGrail).active = true;
        } else {
          this._node_nowGrail.active = false;
          item.active = false;
          cc.find("spine", this._node_nowGrail).active = false;
        }
      },
      initGrailItems: function initGrailItems(showCnt) {
        for (var i = 0; i < showCnt; i++) this._grailItemList[i].active = true;
        for (var _i3 = showCnt; _i3 < this._node_items.childrenCount; _i3++) this._grailItemList[_i3].active = false;
      },
      initGrailItemsState: function initGrailItemsState() {
        this.initGrailItems(26);
        var choices = cc.vv.gameData.GetChoices();
        for (var i = 0; i < choices.length; i++) this._grailItemList[choices[i] - 1].active = false;
        var lastChoices = cc.vv.gameData.GetLastChoice();
        lastChoices && lastChoices.length > 0 && (this._grailItemList[lastChoices[0] - 1].active = false);
      },
      showGrailItem: function showGrailItem(idx) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  var item;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _context6.next = 2;
                      return _this4.awaitTime(.5);

                     case 2:
                      item = _this4._node_items.getChildByName("item_" + idx);
                      item.active = true;
                      item.setScale(0);
                      cc.tween(item).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      sucess();

                     case 7:
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
      setTitleState: function setTitleState(showType) {
        this._tit_goodLuck.active = "goodLuck" === showType;
        this._tit_choose.active = "choose" === showType;
        this._tit_selectTimes.active = "selectTimes" === showType;
        this._tit_choose.stopAllActions();
        "goodLuck" === showType || ("choose" === showType ? this._tit_choose.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.8, 1.12, 1.12), cc.scaleTo(.8, 1, 1)))) : "selectTimes" === showType);
      },
      updateTitSelectTimes: function updateTitSelectTimes(nowT) {
        cc.log("times _nextCount:", this._nextCount, "  nowT:", nowT);
        this._tit_selectTimes.getChildByName("lbl").getComponent(cc.Label).string = cc.js.formatStr("%s/%s", nowT, this._nextCount);
      },
      showHistoryMulti: function showHistoryMulti() {
        var mult = cc.vv.gameData.GetHistoryMult();
        for (var i = 0; i < this._giveUpItemList.length; i++) {
          this._giveUpItemList[i].getComponent(cc.Label).string = mult[i] ? cc.js.formatStr("%sX", mult[i]) : "";
          this._giveUpItemList[i].active = true;
        }
      },
      popStartPanel: function popStartPanel() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
                  var spine_bg, node_start, btn_start, self, func;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      _this5._pop_start_end.active = true;
                      _this5._pop_start_end.setScale(1);
                      spine_bg = cc.find("spine_bg", _this5._pop_start_end);
                      node_start = cc.find("node_start", _this5._pop_start_end);
                      cc.find("node_end", _this5._pop_start_end).active = false;
                      spine_bg.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                      spine_bg.getComponent(sp.Skeleton).addAnimation(0, "animation2_1", true);
                      node_start.active = true;
                      btn_start = node_start.getChildByName("btn_start");
                      btn_start.setScale(0);
                      _context10.next = 13;
                      return _this5.awaitTime(.5);

                     case 13:
                      cc.tween(btn_start).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context10.next = 16;
                      return _this5.awaitTime(.5);

                     case 16:
                      self = _this5;
                      btn_start.getComponent(cc.Button).interactable = true;
                      btn_start.off("click");
                      func = function() {
                        var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) switch (_context8.prev = _context8.next) {
                             case 0:
                              Global.SlotsSoundMgr.playBgm("bonus_bgm");
                              btn_start.getComponent(cc.Button).interactable = false;
                              cc.tween(self._pop_start_end).to(.7, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).start();
                              _context8.next = 5;
                              return self.awaitTime(.7);

                             case 5:
                              self._pop_start_end.active = false;
                              self.setTitleState("choose");
                              sucess();

                             case 8:
                             case "end":
                              return _context8.stop();
                            }
                          }, _callee8);
                        }));
                        return function func() {
                          return _ref7.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_start, func, true);
                      btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) switch (_context9.prev = _context9.next) {
                           case 0:
                            btn_start.stopAllActions();
                            _context9.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context9.stop();
                          }
                        }, _callee9);
                      })));

                     case 22:
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
      popEndPanel: function popEndPanel() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          var spine_bg, node_end, prize, total, lbl_coin, btn_collect, self, func;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playEffect("bonus_end_show");
              _this6._pop_select_offer.active = false;
              _this6._pop_select.active = false;
              _this6._pop_start_end.active = true;
              _this6._pop_start_end.setScale(1);
              cc.find("node_start", _this6._pop_start_end).active = false;
              spine_bg = cc.find("spine_bg", _this6._pop_start_end);
              node_end = cc.find("node_end", _this6._pop_start_end);
              spine_bg.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
              spine_bg.getComponent(sp.Skeleton).addAnimation(0, "animation1_1", false);
              _context14.next = 13;
              return _this6.awaitTime(.5);

             case 13:
              node_end.active = true;
              prize = Global.convertNumToShort(_this6._prize);
              total = Global.convertNumToShort(_this6._gainMulti * _this6._prize);
              lbl_coin = node_end.getChildByName("lbl_coin");
              lbl_coin.getComponent(cc.Label).string = "";
              node_end.getChildByName("lbl_detail").getComponent(cc.Label).string = cc.js.formatStr("%sx%s=%s", _this6._gainMulti, prize, total);
              Global.doRoallNumEff(lbl_coin, 0, _this6._winCoin, 2, null, null, 0, true);
              btn_collect = node_end.getChildByName("btn_collect");
              btn_collect.setScale(0);
              cc.tween(btn_collect).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context14.next = 25;
              return _this6.awaitTime(.5);

             case 25:
              self = _this6;
              btn_collect.getComponent(cc.Button).interactable = true;
              btn_collect.off("click");
              func = function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      btn_collect.getComponent(cc.Button).interactable = false;
                      self._currCnt = 0;
                      cc.tween(self._pop_start_end).to(.7, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).start();
                      _context12.next = 5;
                      return self.awaitTime(.7);

                     case 5:
                      cc.vv.gameData.GetPopupScript().playBonusQpAnim();
                      _context12.next = 8;
                      return self.awaitTime(1);

                     case 8:
                      self._pop_start_end.active = false;
                      self.setBonusGameState(false);
                      self.initData();
                      _context12.next = 13;
                      return self.awaitTime(.5);

                     case 13:
                      if (self._gameEndCall) {
                        self._gameEndCall();
                        self._gameEndCall = null;
                        cc.vv.gameData.SetCurrCnt(0);
                        _this6.initMultiMaskNode(true);
                      }

                     case 14:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function func() {
                  return _ref9.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func, true);
              btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                   case 0:
                    btn_collect.stopAllActions();
                    _context13.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context13.stop();
                  }
                }, _callee13);
              })));

             case 31:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      popRound: function popRound() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
             case 0:
              return _context16.abrupt("return", new Promise(function() {
                var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(sucess, failed) {
                  var allRoundTimes, self;
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      _this7._pop_round.active = true;
                      _this7.setTitleState("goodLuck");
                      allRoundTimes = _this7._totalRoundTimes;
                      cc.find("normal", _this7._pop_round).active = _this7._roundTimes < allRoundTimes;
                      cc.find("last", _this7._pop_round).active = _this7._roundTimes === allRoundTimes;
                      cc.find("normal/lbl_round", _this7._pop_round).getComponent(cc.Label).string = _this7._nextRound;
                      cc.find("normal/lbl_pick", _this7._pop_round).getComponent(cc.Label).string = _this7._nextCount;
                      _this7._pop_round.setScale(0);
                      cc.tween(_this7._pop_round).to(.7, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context15.next = 11;
                      return _this7.awaitTime(1);

                     case 11:
                      self = _this7;
                      cc.tween(_this7._pop_round).to(.7, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).call(function() {
                        self._pop_round.active = false;
                      }).start();
                      _context15.next = 15;
                      return _this7.awaitTime(1);

                     case 15:
                      sucess();

                     case 16:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee15);
                }));
                return function(_x9, _x10) {
                  return _ref11.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context16.stop();
            }
          }, _callee16);
        }))();
      },
      popShowSpineOffer: function popShowSpineOffer() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
          var spine, self, panel_click, func;
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
             case 0:
              _this8._pop_spine_offer.active = true;
              Global.SlotsSoundMgr.playEffect("change1");
              spine = cc.find("spine_tuitukuang", _this8._pop_spine_offer);
              spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
              spine.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
              self = _this8;
              panel_click = cc.find("panel_click", _this8._pop_spine_offer);
              panel_click.getComponent(cc.Button).interactable = true;
              panel_click.off("click");
              func = function func() {
                panel_click.getComponent(cc.Button).interactable = false;
                Global.SlotsSoundMgr.playEffect("change2");
                var entry = spine.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
                spine.getComponent(sp.Skeleton).setTrackCompleteListener(entry, function() {
                  self._pop_spine_offer.active = false;
                  self.popShowSelectOffer();
                });
              };
              cc.vv.gameData.checkAutoPlay(panel_click, func, true);
              panel_click.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) switch (_context17.prev = _context17.next) {
                   case 0:
                    panel_click.stopAllActions();
                    func();

                   case 2:
                   case "end":
                    return _context17.stop();
                  }
                }, _callee17);
              })));

             case 12:
             case "end":
              return _context18.stop();
            }
          }, _callee18);
        }))();
      },
      popShowSelectOffer: function popShowSelectOffer() {
        this._pop_select.active = true;
        this._pop_select_offer.active = true;
        this._pop_select_grail.active = false;
        this._pop_select_offer.opacity = 255;
        var lbl_get = cc.find("bg_myOffer/lbl_get", this._pop_select_offer);
        var lbl_all = cc.find("bg_myOffer/lbl_all", this._pop_select_offer);
        var prize = Global.convertNumToShort(this._prize);
        var total = Global.convertNumToShort(this._gainMulti * this._prize);
        lbl_get.getComponent(cc.Label).string = cc.js.formatStr("%sX", this._gainMulti);
        lbl_all.getComponent(cc.Label).string = cc.js.formatStr("%sX%s=%s", this._gainMulti, prize, total);
        var btn_take = cc.find("btn_take", this._pop_select_offer);
        var btn_leave = cc.find("btn_leave", this._pop_select_offer);
        var self = this;
        btn_take.getComponent(cc.Button).interactable = true;
        btn_take.off("click");
        btn_leave.getComponent(cc.Button).interactable = true;
        btn_leave.off("click");
        var clickFunc = function clickFunc(isTake) {
          btn_take.getComponent(cc.Button).interactable = false;
          btn_leave.getComponent(cc.Button).interactable = false;
          Global.SlotsSoundMgr.playEffect("click");
          var data = {
            rtype: 3,
            takeIt: isTake
          };
          self.onSendSeq(data);
          self.setTitleState("goodLuck");
        };
        btn_take.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
             case 0:
              clickFunc(true);

             case 1:
             case "end":
              return _context19.stop();
            }
          }, _callee19);
        })));
        btn_leave.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) switch (_context20.prev = _context20.next) {
             case 0:
              clickFunc(false);

             case 1:
             case "end":
              return _context20.stop();
            }
          }, _callee20);
        })));
      },
      popShowSelectGrail: function popShowSelectGrail() {
        this._pop_select.active = true;
        this._pop_select_grail.active = true;
        this._pop_select_offer.active = false;
        cc.find("item_keep/lbl", this._pop_select_grail).getComponent(cc.Label).string = this._options[0];
        cc.find("item_trade/lbl", this._pop_select_grail).getComponent(cc.Label).string = this._options[1];
        var btn_keep = cc.find("btn_keep", this._pop_select_grail);
        var btn_trade = cc.find("btn_trade", this._pop_select_grail);
        btn_keep.getComponent(cc.Button).interactable = true;
        btn_keep.off("click");
        btn_trade.getComponent(cc.Button).interactable = true;
        btn_trade.off("click");
        var self = this;
        var clickFunc = function clickFunc(keep) {
          btn_keep.getComponent(cc.Button).interactable = false;
          btn_trade.getComponent(cc.Button).interactable = false;
          Global.SlotsSoundMgr.playEffect("click");
          self._selectGrailType = "keep";
          var data = {
            rtype: 4,
            keep: keep
          };
          self.onSendSeq(data);
          self.setTitleState("goodLuck");
        };
        btn_keep.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
             case 0:
              clickFunc(true);

             case 1:
             case "end":
              return _context21.stop();
            }
          }, _callee21);
        })));
        btn_trade.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
             case 0:
              clickFunc(false);

             case 1:
             case "end":
              return _context22.stop();
            }
          }, _callee22);
        })));
      },
      showRoundResult: function showRoundResult() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee26() {
          return regeneratorRuntime.wrap(function _callee26$(_context27) {
            while (1) switch (_context27.prev = _context27.next) {
             case 0:
              return _context27.abrupt("return", new Promise(function() {
                var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee25(sucess1, failed) {
                  var idxList, spine_coin, lbl_multi, _loop, i;
                  return regeneratorRuntime.wrap(function _callee25$(_context26) {
                    while (1) switch (_context26.prev = _context26.next) {
                     case 0:
                      idxList = _this9._chooseIdxList;
                      idxList.sort(function(a, b) {
                        return a - b;
                      });
                      spine_coin = _this9._item_big.getChildByName("spine_coin");
                      lbl_multi = _this9._item_big.getChildByName("lbl_multi");
                      _loop = regeneratorRuntime.mark(function _loop(i) {
                        return regeneratorRuntime.wrap(function _loop$(_context25) {
                          while (1) switch (_context25.prev = _context25.next) {
                           case 0:
                            _context25.next = 2;
                            return new Promise(function() {
                              var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(sucess2, failed) {
                                var idx, needChange, multi;
                                return regeneratorRuntime.wrap(function _callee24$(_context24) {
                                  while (1) switch (_context24.prev = _context24.next) {
                                   case 0:
                                    _this9._bonusNode_mask.active = true;
                                    _context24.next = 3;
                                    return _this9.awaitTime(1);

                                   case 3:
                                    Global.SlotsSoundMgr.playEffect("grail_open");
                                    idx = idxList[i];
                                    _this9._grailItemList[idx - 1].active = false;
                                    _this9._grailItemList[idx - 1].getChildByName("spine_select").active = false;
                                    _this9._item_big.active = true;
                                    _this9._item_big.setScale(0);
                                    _this9._item_big.opacity = 255;
                                    cc.tween(_this9._item_big).to(.7, {
                                      scale: 1
                                    }, {
                                      easing: "backOut"
                                    }).start();
                                    _this9._item_big.getChildByName("lbl").getComponent(cc.Label).string = idx;
                                    _context24.next = 14;
                                    return _this9.awaitTime(.7);

                                   case 14:
                                    needChange = _this9._grailMultiList[i].length > 1;
                                    needChange && _this9._grailMultiList[i].sort(function(a, b) {
                                      return b - a;
                                    });
                                    multi = _this9._grailMultiList[i][1] ? _this9._grailMultiList[i][1] : _this9._grailMultiList[i][0];
                                    spine_coin.active = true;
                                    spine_coin.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                    lbl_multi.active = true;
                                    lbl_multi.getComponent(cc.Label).string = cc.js.formatStr("%sX", _this9._grailMultiList[i][0]);
                                    _context24.next = 23;
                                    return _this9.awaitTime(.8);

                                   case 23:
                                    if (!needChange) {
                                      _context24.next = 26;
                                      break;
                                    }
                                    _context24.next = 26;
                                    return new Promise(function() {
                                      var _ref19 = _asyncToGenerator(regeneratorRuntime.mark(function _callee23(sucess3, failed) {
                                        var spine_tihuang;
                                        return regeneratorRuntime.wrap(function _callee23$(_context23) {
                                          while (1) switch (_context23.prev = _context23.next) {
                                           case 0:
                                            Global.SlotsSoundMgr.playEffect("1000x");
                                            spine_tihuang = _this9._item_big.getChildByName("spine_tihuang");
                                            spine_tihuang.active = true;
                                            spine_tihuang.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                            spine_tihuang.getComponent(sp.Skeleton).setCompleteListener(function() {
                                              spine_tihuang.active = false;
                                              lbl_multi.getComponent(cc.Label).string = cc.js.formatStr("%sX", _this9._grailMultiList[i][1]);
                                              sucess3();
                                            });

                                           case 5:
                                           case "end":
                                            return _context23.stop();
                                          }
                                        }, _callee23);
                                      }));
                                      return function(_x15, _x16) {
                                        return _ref19.apply(this, arguments);
                                      };
                                    }());

                                   case 26:
                                    _this9.setMultMaskState(multi, true);
                                    _context24.next = 29;
                                    return _this9.awaitTime(1);

                                   case 29:
                                    cc.tween(_this9._item_big).to(.5, {
                                      opacity: 0
                                    }).start();
                                    _context24.next = 32;
                                    return _this9.awaitTime(.5);

                                   case 32:
                                    spine_coin.active = false;
                                    lbl_multi.active = false;
                                    _this9._bonusNode_mask.active = false;
                                    sucess2();

                                   case 36:
                                   case "end":
                                    return _context24.stop();
                                  }
                                }, _callee24);
                              }));
                              return function(_x13, _x14) {
                                return _ref18.apply(this, arguments);
                              };
                            }());

                           case 2:
                           case "end":
                            return _context25.stop();
                          }
                        }, _loop);
                      });
                      i = 0;

                     case 6:
                      if (!(i < idxList.length)) {
                        _context26.next = 11;
                        break;
                      }
                      return _context26.delegateYield(_loop(i), "t0", 8);

                     case 8:
                      i++;
                      _context26.next = 6;
                      break;

                     case 11:
                      _this9.popShowSpineOffer();
                      sucess1();

                     case 13:
                     case "end":
                      return _context26.stop();
                    }
                  }, _callee25);
                }));
                return function(_x11, _x12) {
                  return _ref17.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context27.stop();
            }
          }, _callee26);
        }))();
      },
      onChooseGrail: function onChooseGrail(event) {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee27() {
          var node, idx, spine_select, data, startPos, item, _data;
          return regeneratorRuntime.wrap(function _callee27$(_context28) {
            while (1) switch (_context28.prev = _context28.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("choose");
              _this10._item_mask.active = true;
              node = event.target;
              idx = parseInt(node.name.slice(5));
              cc.log("select grail idx = ", idx);
              spine_select = node.getChildByName("spine_select");
              spine_select.active = true;
              spine_select.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              if (!(_this10._roundTimes > 0)) {
                _context28.next = 12;
                break;
              }
              if (_this10._chooseIdxList.includes(idx)) _this10._item_mask.active = false; else {
                _this10._chooseIdxList.push(idx);
                cc.log(_this10._chooseIdxList);
                if (_this10._chooseIdxList.length < _this10._nextCount) {
                  _this10.updateTitSelectTimes(_this10._chooseIdxList.length);
                  _this10._item_mask.active = false;
                } else {
                  _this10.setTitleState("goodLuck");
                  data = {
                    rtype: 2,
                    choices: _this10._chooseIdxList
                  };
                  _this10.onSendSeq(data);
                }
              }
              _context28.next = 30;
              break;

             case 12:
              _this10.setTitleState("goodLuck");
              _this10._node_nowGrail.active = true;
              startPos = _this10._node_nowGrail.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
              item = cc.find("item", _this10._node_nowGrail);
              item.active = true;
              item.getChildByName("lbl").getComponent(cc.Label).string = idx;
              item.position = startPos;
              _context28.next = 21;
              return _this10.awaitTime(1);

             case 21:
              node.active = false;
              spine_select.active = false;
              Global.SlotsSoundMgr.playEffect("grail_fly");
              cc.tween(item).to(1, {
                position: cc.v2(0, 0)
              }).start();
              _context28.next = 27;
              return _this10.awaitTime(1);

             case 27:
              cc.find("spine", _this10._node_nowGrail).active = true;
              _data = {
                rtype: 1,
                choices: [ idx ]
              };
              _this10.onSendSeq(_data);

             case 30:
             case "end":
              return _context28.stop();
            }
          }, _callee27);
        }))();
      },
      startNewRound: function startNewRound() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee29() {
          return regeneratorRuntime.wrap(function _callee29$(_context30) {
            while (1) switch (_context30.prev = _context30.next) {
             case 0:
              return _context30.abrupt("return", new Promise(function() {
                var _ref20 = _asyncToGenerator(regeneratorRuntime.mark(function _callee28(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee28$(_context29) {
                    while (1) switch (_context29.prev = _context29.next) {
                     case 0:
                      _this11._chooseIdxList = [];
                      _context29.next = 3;
                      return _this11.awaitTime(1);

                     case 3:
                      _context29.next = 5;
                      return _this11.popRound();

                     case 5:
                      _this11.setTitleState("selectTimes");
                      _this11.updateTitSelectTimes(0);
                      _this11._item_mask.active = false;
                      ++_this11._roundTimes;
                      sucess();

                     case 10:
                     case "end":
                      return _context29.stop();
                    }
                  }, _callee28);
                }));
                return function(_x17, _x18) {
                  return _ref20.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context30.stop();
            }
          }, _callee29);
        }))();
      },
      selectLeaveOffer: function selectLeaveOffer() {
        this._giveUpItemList[this._roundTimes - 1].getComponent(cc.Label).string = cc.js.formatStr("%sX", this._giveUpMult);
        this._giveUpItemList[this._roundTimes - 1].active = true;
        var allRoundTimes = this._totalRoundTimes;
        if (this._roundTimes < allRoundTimes) {
          this._pop_select.active = false;
          this.startNewRound();
        } else {
          var _self = this;
          var spine_bs = cc.find("spine_bianshen", this._pop_select);
          spine_bs.active = true;
          spine_bs.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          spine_bs.getComponent(sp.Skeleton).setCompleteListener(function() {
            spine_bs.active = false;
            cc.tween(_self._pop_select_offer).to(.5, {
              opacity: 0
            }).call(function() {
              _self._pop_select_offer.active = false;
              _self._pop_select_offer.opacity = 255;
            }).start();
            _self.popShowSelectGrail();
          });
        }
        this.setTitleState("goodLuck");
      },
      showResultSelectGrail: function showResultSelectGrail() {
        var _this12 = this;
        var spine_coin = this._item_big.getChildByName("spine_coin");
        var lbl_multi = this._item_big.getChildByName("lbl_multi");
        this._item_big.active = true;
        this._item_big.getChildByName("lbl").getComponent(cc.Label).string = "";
        var node;
        node = "keep" == this._selectGrailType ? cc.find("item_keep", this._pop_select_grail) : cc.find("item_trade", this._pop_select_grail);
        var startPos = this._gameUI.convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
        var endPos = this._item_big.position;
        cc.tween(this._item_big).to(1, {
          scale: cc.v2(1, 1),
          position: endPos
        }).call(function() {
          spine_coin.active = true;
          spine_coin.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          lbl_multi.active = true;
          lbl_multi.getComponent(cc.Label).string = "X";
        }).delay(1).call(function() {
          _this12.popEndPanel();
        }).start();
      },
      awaitTime: function awaitTime(time) {
        var _this13 = this;
        return new Promise(function(sucess, failed) {
          _this13.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Zues_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04c08GW3C9KeqNTCH3zMT88", "Zues_Cfg");
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
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        trigger_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        win_ani: {
          name: "animation1_1",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Zues_Slots",
        Reels: "Zues_Reels",
        Symbols: "Zues_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 97
      },
      randomSymbols: [ 3, 4, 5, 6, 7, 8, 9 ],
      kuang: "kuang",
      autoModelDelay: 1,
      speed: 2500,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      helpItems: [ "games/Zues/prefab/help_node/page_1", "games/Zues/prefab/help_node/page_2", "games/Zues/prefab/help_node/page_3", "games/Zues/prefab/help_node/page_4", "games/Zues/prefab/help_node/page_5" ],
      commEffect: {
        path: "games/Zues/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      AddAntiTime: 1.6,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Zues/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify",
        antSpeed: 2400
      } ],
      normalBgm: "Zeus_Sound_NorBg"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Zues_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "297b2odniRJwKiIrl2XWI7F", "Zues_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      start: function start() {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._allCustomData = deskInfo.customDatas;
        this._freeCustomData = deskInfo.freeCustomData;
        this._customData = deskInfo.customData;
        this._energyData = deskInfo.collection;
        this._needBet = deskInfo.collection.needBet;
        this._freeBags = deskInfo.freeBags;
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._customData = msg.customData;
          this._energyData = msg.energyData;
          this._freeBags = msg.freeBags;
          var curBet = cc.vv.gameData.GetBetIdx();
          if (msg.allFreeCnt > 0 && msg.allFreeCnt === msg.freeCnt) {
            this.SetAllCustomDataByBet(curBet, this._customData);
            var data = {
              lightningFrames: [],
              lightningIdx: [],
              convertList: [],
              remainIndexes: []
            };
            this.SetFreeCustomDataByBet(data);
          } else msg.allFreeCnt > 0 && msg.allFreeCnt != msg.freeCnt ? this.SetFreeCustomDataByBet(this._customData) : this.SetAllCustomDataByBet(curBet, this._customData);
          this._freeWinCoin = msg.freeWinCoin;
        }
        this._super(msg);
      },
      SetPopupScript: function SetPopupScript(scp) {
        this._popupScp = scp;
      },
      GetPopupScript: function GetPopupScript() {
        return this._popupScp;
      },
      SetBonusScript: function SetBonusScript(scp) {
        this._bonusScp = scp;
      },
      GetBonusScript: function GetBonusScript() {
        return this._bonusScp;
      },
      GetAllCustomData: function GetAllCustomData() {
        return this._allCustomData;
      },
      SetAllCustomDataByBet: function SetAllCustomDataByBet(idx, data) {
        this._allCustomData[idx - 1] = data;
      },
      GetFreeCustomData: function GetFreeCustomData() {
        return this._freeCustomData;
      },
      SetFreeCustomDataByBet: function SetFreeCustomDataByBet(data) {
        this._freeCustomData = data;
      },
      GetLightningFrames: function GetLightningFrames() {
        return this._customData && this._customData.lightningFrames ? this._customData.lightningFrames : [];
      },
      GetLightningIdx: function GetLightningIdx() {
        return this._customData && this._customData.lightningIdx ? this._customData.lightningIdx : [];
      },
      GetRemainIndexs: function GetRemainIndexs() {
        return this._customData && this._customData.remainIndexs ? this._customData.remainIndexs : [];
      },
      GetConvertList: function GetConvertList() {
        return this._customData && this._customData.convertList ? this._customData.convertList : [];
      },
      GetNeedBet: function GetNeedBet() {
        return this._needBet;
      },
      GetCurRoundValue: function GetCurRoundValue() {
        return this._energyData.currRoundValue;
      },
      GetCurValue: function GetCurValue() {
        return this._energyData.currValue;
      },
      SetCurValue: function SetCurValue(val) {
        this._energyData.currValue = val;
      },
      GetFullValue: function GetFullValue() {
        return this._energyData.fullValue;
      },
      IsTriBonus: function IsTriBonus() {
        var cmpInfo = this._energyData.cmpInfo;
        return cmpInfo && cmpInfo.next_game;
      },
      GetFreeBags: function GetFreeBags() {
        return this._freeBags;
      },
      GetUnpickedMult: function GetUnpickedMult() {
        return this._freeBags.unpickedMult;
      },
      GetGainMult: function GetGainMult() {
        return this._freeBags.mult;
      },
      GetPrize: function GetPrize() {
        return this._freeBags.prize;
      },
      GetChoices: function GetChoices() {
        return this._freeBags.choices;
      },
      GetHistoryMult: function GetHistoryMult() {
        return this._freeBags.historyMult;
      },
      SetHistoryMult: function SetHistoryMult(mults) {
        this._freeBags.historyMult = mults;
      },
      GetCurrCnt: function GetCurrCnt() {
        return this._freeBags.currCnt;
      },
      SetCurrCnt: function SetCurrCnt(cnt) {
        this._freeBags.currCnt = cnt;
      },
      GetLastChoice: function GetLastChoice() {
        return this._freeBags.lastChoice;
      },
      GetCurrState: function GetCurrState() {
        return this._freeBags.currState;
      },
      GetFreeWinCoin: function GetFreeWinCoin() {
        return this._freeWinCoin;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Zues_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a5e6RivaNIaLf/p/a6i078", "Zues_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        var script_popup = this.node.addComponent("Zues_Popup");
        script_popup.Init();
        cc.vv.gameData.SetPopupScript(script_popup);
        var script_bonus = this.node.addComponent("Zues_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.SetBonusScript(script_bonus);
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Zues_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3f57zloglNmqM7Gmbibx+G", "Zues_Popup");
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
        this._node_free_start = cc.find("node_free_start", this._node_popup);
        this._node_free_end = cc.find("node_free_end", this._node_popup);
        this._node_win_jp = cc.find("node_win_jp", this._node_popup);
        this._node_free_start.active = false;
        this._node_free_end.active = false;
        this._node_win_jp.active = false;
        this._spine_free_qp = cc.find("safe_node/spine_baseZS", this.node);
        this._spine_win_jp = cc.find("safe_node/spine_win_jp", this.node);
        this._spine_Bonus_qp = cc.find("safe_node/spine_super_grail", this.node);
        this._spine_free_qp.active = false;
        this._spine_win_jp.active = false;
        this._spine_Bonus_qp.active = false;
      },
      showFreeStart: function showFreeStart(times) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var spine, lbl, btn_start, self, func;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                Global.SlotsSoundMgr.playEffect("free_dialog_start_show");
                _this._node_popup.active = true;
                _this._node_free_start.active = true;
                _this._node_free_start.setScale(1);
                spine = cc.find("spine", _this._node_free_start);
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                spine.getComponent(sp.Skeleton).addAnimation(0, "animation2_1", true);
                lbl = cc.find("lbl_times", _this._node_free_start);
                lbl.getComponent(cc.Label).string = times;
                btn_start = _this._node_free_start.getChildByName("btn_start");
                lbl.setScale(0);
                btn_start.setScale(0);
                _context3.next = 16;
                return _this.awaitTime(.5);

               case 16:
                cc.tween(lbl).delay(.1).to(.4, {
                  scale: 1
                }).start();
                cc.tween(btn_start).to(.5, {
                  scale: 1
                }).start();
                _context3.next = 20;
                return _this.awaitTime(.5);

               case 20:
                self = _this;
                btn_start.getComponent(cc.Button).interactable = true;
                btn_start.off("click");
                func = function() {
                  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(_this._node_free_start).to(.7, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context.next = 4;
                        return _this.awaitTime(.7);

                       case 4:
                        self._node_popup.active = false;
                        self._node_free_start.active = false;
                        sucess();

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
                cc.vv.gameData.checkAutoPlay(btn_start, func, true);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      btn_start.stopAllActions();
                      _context2.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));

               case 26:
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
      showFreeEnd: function showFreeEnd(winCoin) {
        var _this2 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
            var spine, lbl, btn_collect, self, func;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                Global.SlotsSoundMgr.playEffect("free_dialog_collect_show");
                _this2._node_popup.active = true;
                _this2._node_free_end.active = true;
                _this2._node_free_end.setScale(1);
                spine = cc.find("spine", _this2._node_free_end);
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                spine.getComponent(sp.Skeleton).addAnimation(0, "animation1_1", false);
                lbl = cc.find("lbl_win", _this2._node_free_end);
                btn_collect = _this2._node_free_end.getChildByName("btn_collect");
                lbl.setScale(0);
                btn_collect.setScale(0);
                _context6.next = 15;
                return _this2.awaitTime(.5);

               case 15:
                self = _this2;
                Global.doRoallNumEff(lbl, 0, winCoin, 2, null, null, 0, true);
                cc.tween(lbl).delay(.1).to(.4, {
                  scale: 1
                }).start();
                cc.tween(btn_collect).to(.5, {
                  scale: 1
                }).start();
                _context6.next = 21;
                return _this2.awaitTime(.5);

               case 21:
                btn_collect.getComponent(cc.Button).interactable = true;
                btn_collect.off("click");
                func = function() {
                  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                       case 0:
                        btn_collect.getComponent(cc.Button).interactable = false;
                        cc.tween(_this2._node_free_end).to(.7, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context4.next = 4;
                        return _this2.awaitTime(.7);

                       case 4:
                        self._node_popup.active = false;
                        self._node_free_end.active = false;
                        sucess();

                       case 7:
                       case "end":
                        return _context4.stop();
                      }
                    }, _callee4);
                  }));
                  return function func() {
                    return _ref5.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func, true);
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

               case 26:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x3, _x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      playFreeQpAnim: function playFreeQpAnim() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var spine_zs, normalAct, self;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              spine_zs = cc.find("Canvas/safe_node/spine_zs");
              normalAct = spine_zs.active;
              self = _this3;
              Global.SlotsSoundMgr.playEffect("transition_free");
              spine_zs.active = false;
              _this3._spine_free_qp.active = true;
              _this3._spine_free_qp.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
              _this3._spine_free_qp.getComponent(sp.Skeleton).setCompleteListener(function() {
                self._spine_free_qp.active = false;
              });
              _context7.next = 10;
              return cc.vv.gameData.awaitTime(.8);

             case 10:
              spine_zs.active = normalAct;

             case 11:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      playJackPotQpAnim: function playJackPotQpAnim() {
        var self = this;
        Global.SlotsSoundMgr.playEffect("");
        this._spine_win_jp.active = true;
        this._spine_win_jp.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
        this._spine_win_jp.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._spine_win_jp.active = false;
        });
      },
      showJackPotWin: function showJackPotWin(id, winCoin) {
        var _this4 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
            var nameType, spine, lbl, btn_collect, self, func;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                _this4._node_popup.active = true;
                _this4._node_win_jp.active = true;
                _this4._node_win_jp.setScale(1);
                nameType = "";
                2 === id ? nameType = 3 : 3 === id ? nameType = 2 : 4 === id && (nameType = 1);
                spine = cc.find("spine", _this4._node_win_jp);
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation" + nameType, false);
                spine.getComponent(sp.Skeleton).addAnimation(0, "animation" + nameType + "_1", true);
                lbl = cc.find("lbl_win", _this4._node_win_jp);
                btn_collect = cc.find("btn_collect", _this4._node_win_jp);
                lbl.setScale(0);
                btn_collect.setScale(0);
                _context10.next = 14;
                return _this4.awaitTime(.5);

               case 14:
                Global.doRoallNumEff(lbl, 0, winCoin, 2, null, null, 0, true);
                cc.tween(lbl).delay(.1).to(.4, {
                  scale: 1
                }).start();
                cc.tween(btn_collect).to(.5, {
                  scale: 1
                }).start();
                _context10.next = 19;
                return _this4.awaitTime(.5);

               case 19:
                self = _this4;
                btn_collect.getComponent(cc.Button).interactable = true;
                btn_collect.off("click");
                func = function() {
                  var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) switch (_context8.prev = _context8.next) {
                       case 0:
                        btn_collect.getComponent(cc.Button).interactable = false;
                        cc.tween(_this4._node_win_jp).to(.7, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context8.next = 4;
                        return _this4.awaitTime(.7);

                       case 4:
                        self._node_popup.active = false;
                        self._node_win_jp.active = false;
                        sucess();

                       case 7:
                       case "end":
                        return _context8.stop();
                      }
                    }, _callee8);
                  }));
                  return function func() {
                    return _ref8.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func, true);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context9.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                })));

               case 25:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x5, _x6) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      playBonusQpAnim: function playBonusQpAnim() {
        var self = this;
        Global.SlotsSoundMgr.playEffect("transition_bonus");
        this._spine_Bonus_qp.active = true;
        this._spine_Bonus_qp.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._spine_Bonus_qp.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._spine_Bonus_qp.active = false;
        });
      },
      awaitTime: function awaitTime(time) {
        var _this5 = this;
        return new Promise(function(sucess, failed) {
          _this5.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Zues_Reels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5767V+WQxNbYabCzT8zuvG", "Zues_Reels");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Zues_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb53dV4vglBVIQRjERPfuSE", "Zues_Slots");
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
        _remainFramesList: [],
        _wildList: [],
        _spinEnd: false
      },
      start: function start() {},
      Init: function Init(top, bottom) {
        this._spine_zs = cc.find("spine_zs", this.node.parent);
        this._mask_jdt = cc.find("node_energy/bg/mask_jdt", this.node);
        this._mask_jdt.on("click", this.onClickJdtBtn.bind(this));
        this._spine_jdt = cc.find("spine_jdt", this._mask_jdt);
        this._spine_jdt_sz = cc.find("node_energy/bg/spine_jdt_sz", this.node);
        this._spine_jdt_sz.active = false;
        this._spine_jdt_jm = cc.find("node_energy/bg/spine_jdt_jm", this.node);
        this._spine_jdt_jm.active = false;
        this._spine_lock = cc.find("node_energy/bg/spine_lock", this.node);
        this._node_sd = cc.find("node_energy/bg/img_sd", this.node);
        this._btn_grail = cc.find("node_energy/bg/btn_grail", this.node);
        this._btn_grail.on("click", this.onClickGrailBtn.bind(this));
        this._spine_wild = cc.find("node_wild/spine_wild", this.node);
        this._spine_wild.active = false;
        this._spine_sd_fly = cc.find("spine_sd_fly", this.node);
        this._spine_sd_fly.active = false;
        this._spine_sd_hit = cc.find("spine_sd_hit", this.node);
        this._spine_sd_hit.active = false;
        this._remain_frames = cc.find("remain_kuang", this.node);
        for (var i = 0; i < this._remain_frames.childrenCount; i++) {
          var item = this._remain_frames.children[i];
          item.active = false;
          this._remainFramesList.push(item);
        }
        this._spinEnd = false;
        this._super(top, bottom);
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var curBet, currState;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.initEnergyBar();
              curBet = cc.vv.gameData.GetBetIdx();
              if (cc.vv.gameData.GetTotalFree() > 0) {
                _this.ShowGameview(true);
                _this.setRemainFramesByBet(curBet, true);
              } else {
                _this.ShowGameview(false);
                _this.setRemainFramesByBet(curBet, false);
              }
              currState = cc.vv.gameData.GetCurrState();
              if (!(currState && currState.state > 0)) {
                _context.next = 10;
                break;
              }
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              _context.next = 8;
              return cc.vv.gameData.GetBonusScript().backToGame();

             case 8:
              _context.next = 10;
              return _this.awaitTime(.5);

             case 10:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context.next = 13;
                break;
              }
              _context.next = 13;
              return _this.CheckExitFreeGame();

             case 13:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 15:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        this.hideAllWild();
        if (this._jp_kuang) {
          this._jp_kuang.active = false;
          this._jp_kuang = null;
        }
        if (this._jp_sd) {
          this._jp_sd.active = false;
          this._jp_sd = null;
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
        var hitIdxs = cc.vv.gameData.GetLightningIdx();
        this._hitSdList = Global.copy(hitIdxs);
      },
      StopMove: function StopMove() {
        this._super();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {
        this._super(colIdx);
        var playSdEff = false;
        for (var row = 0; row < this._row; row++) {
          var sym = this._reels[colIdx].GetSymbolByRow(row);
          if (9 === sym.GetShowId()) {
            sym.playStopAnimation();
            playSdEff = true;
          }
        }
        playSdEff && Global.SlotsSoundMgr.playEffect("symbol_bonus");
        var hitIdxs = cc.vv.gameData.GetLightningIdx();
        for (var _row = 0; _row < this._row; _row++) {
          var _sym = this._reels[colIdx].GetSymbolByRow(_row);
          var idx = this.GetIdxByRowCol(_row, colIdx);
          var frame = this._remainFramesList[idx - 1];
          9 !== _sym.GetShowId() || frame.active || this.setRemainFrameState(idx, "popup");
          hitIdxs.includes(idx) && this.playHitAnim(_row, colIdx, frame.active);
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this._spinEnd = true;
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var jpWin, nWin, nTotal, freeInfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              if (_this2._isLockJdtState) {
                _context2.next = 3;
                break;
              }
              _context2.next = 3;
              return _this2.playSdFlyAnim();

             case 3:
              _context2.next = 5;
              return _this2.showWildExtend();

             case 5:
              jpWin = 0;
              if (!(_this2._gameInfo.jackpot && _this2._gameInfo.jackpot.jackpotId > 1)) {
                _context2.next = 10;
                break;
              }
              jpWin = _this2._gameInfo.jackpot.winCoin;
              _context2.next = 10;
              return _this2.triJackPotGame();

             case 10:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin() + jpWin;
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context2.next = 16;
              return new Promise(function(sucess, failed) {
                _this2.ShowBottomWin(nWin, nTotal, true, sucess);
              });

             case 16:
              if (!cc.vv.gameData.IsTriBonus()) {
                _context2.next = 19;
                break;
              }
              _context2.next = 19;
              return _this2.triBonusGame();

             case 19:
              freeInfo = _this2._gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0)) {
                _context2.next = 23;
                break;
              }
              _context2.next = 23;
              return _this2.CheckEnterFreeGame();

             case 23:
              if (!(_this2._gameInfo.allFreeCnt > 0 && 0 == _this2._gameInfo.freeCnt)) {
                _context2.next = 26;
                break;
              }
              _context2.next = 26;
              return _this2.CheckExitFreeGame();

             case 26:
              _this2.CanDoNextRound();

             case 27:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      triJackPotGame: function triJackPotGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
                  var jpData;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      _this3._spine_zs.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                      _this3._spine_zs.getComponent(sp.Skeleton).addAnimation(0, "animation1", true);
                      _context3.next = 4;
                      return _this3.awaitTime(1.2);

                     case 4:
                      cc.vv.gameData.GetPopupScript().playJackPotQpAnim();
                      _context3.next = 7;
                      return _this3.awaitTime(.8);

                     case 7:
                      jpData = _this3._gameInfo.jackpot;
                      if (2 === jpData.jackpotId) {
                        _this3._jp_kuang = cc.find("LMSlots_PrizePool_1/prizePool_Minor/spine_kuang", _this3.node.parent);
                        _this3._jp_sd = cc.find("LMSlots_PrizePool_1/prizePool_Minor/spine_sd", _this3.node.parent);
                      } else if (3 === jpData.jackpotId) {
                        _this3._jp_kuang = cc.find("LMSlots_PrizePool_1/prizePool_Major/spine_kuang", _this3.node.parent);
                        _this3._jp_sd = cc.find("LMSlots_PrizePool_1/prizePool_Major/spine_sd", _this3.node.parent);
                      } else if (4 === jpData.jackpotId) {
                        _this3._jp_kuang = cc.find("LMSlots_PrizePool_1/prizePool_Grand/spine_kuang", _this3.node.parent);
                        _this3._jp_sd = cc.find("LMSlots_PrizePool_1/prizePool_Grand/spine_sd", _this3.node.parent);
                      }
                      if (_this3._jp_sd) {
                        _this3._jp_sd.active = true;
                        _this3._jp_sd.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      }
                      _this3._jp_kuang && (_this3._jp_kuang.active = true);
                      _context3.next = 13;
                      return _this3.awaitTime(.8);

                     case 13:
                      _context3.next = 15;
                      return cc.vv.gameData.GetPopupScript().showJackPotWin(jpData.jackpotId, jpData.winCoin);

                     case 15:
                      sucess();

                     case 16:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x, _x2) {
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
      triBonusGame: function triBonusGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("collect_full");
                      _context5.next = 3;
                      return _this4.awaitTime(.5);

                     case 3:
                      _this4._spine_jdt_jm.active = true;
                      _this4._spine_jdt_jm.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
                      _context5.next = 7;
                      return _this4.awaitTime(2);

                     case 7:
                      _this4._spine_jdt_jm.getComponent(sp.Skeleton).setCompleteListener(null);
                      _this4._spine_jdt_jm.active = false;
                      _context5.next = 11;
                      return cc.vv.gameData.GetBonusScript().enterBonusGame(2);

                     case 11:
                      cc.vv.gameData.SetCurValue(0);
                      _this4.initEnergyBar();
                      _context5.next = 15;
                      return _this4.awaitTime(1);

                     case 15:
                      sucess();

                     case 16:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x3, _x4) {
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
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  var result, i, idx, symbol, curBet;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      result = _this5._gameInfo.freeResult;
                      if (result && result.freeInfo && result.freeInfo.scatterIdx) {
                        for (i = 0; i < result.freeInfo.scatterIdx.length; i++) {
                          idx = result.freeInfo.scatterIdx[i];
                          symbol = _this5.GetSymbolByIdx(idx);
                          symbol && symbol.playTriggerAnimation();
                        }
                        Global.SlotsSoundMgr.playEffect("bell");
                      }
                      _context7.next = 4;
                      return _this5.awaitTime(1.5);

                     case 4:
                      _this5.Backup();
                      _context7.next = 7;
                      return cc.vv.gameData.GetPopupScript().showFreeStart(_this5._gameInfo.freeCnt);

                     case 7:
                      cc.vv.gameData.GetPopupScript().playFreeQpAnim();
                      _context7.next = 10;
                      return _this5.awaitTime(1.2);

                     case 10:
                      _this5.ShowGameview(true);
                      curBet = cc.vv.gameData.GetBetIdx();
                      _this5.setRemainFramesByBet(curBet, true);
                      sucess();

                     case 14:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
                  var curBet, nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      _context9.next = 2;
                      return cc.vv.gameData.GetPopupScript().showFreeEnd(cc.vv.gameData.GetGameTotalFreeWin());

                     case 2:
                      cc.vv.gameData.GetPopupScript().playFreeQpAnim();
                      _context9.next = 5;
                      return _this6.awaitTime(1.2);

                     case 5:
                      _this6.Resume();
                      _this6.hideAllWild();
                      _this6.ShowGameview(false);
                      curBet = cc.vv.gameData.GetBetIdx();
                      _this6.setRemainFramesByBet(curBet, false);
                      _context9.next = 12;
                      return _this6.awaitTime(.5);

                     case 12:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      _context9.next = 16;
                      return new Promise(function(sucess, failed) {
                        _this6.ShowBottomWin(nWin, nTotal, true, sucess);
                      });

                     case 16:
                      sucess();

                     case 17:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      setRemainFramesByBet: function setRemainFramesByBet(bet, isFree) {
        var list = [];
        if (isFree) {
          var data = cc.vv.gameData.GetFreeCustomData();
          data && data.lightningFrames && (list = data.lightningFrames);
        } else {
          var _data = cc.vv.gameData.GetAllCustomData();
          _data[bet - 1] && _data[bet - 1].lightningFrames && (list = _data[bet - 1].lightningFrames);
        }
        for (var i = 0; i < this._remainFramesList.length; i++) list.includes(i + 1) ? this.setRemainFrameState(i + 1, "idle") : this.setRemainFrameState(i + 1, "hide");
      },
      setRemainFrameState: function setRemainFrameState(idx, state) {
        var item = this._remainFramesList[idx - 1];
        if ("popup" === state) {
          item.active = true;
          item.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          item.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
        } else if ("idle" === state) {
          item.active = true;
          item.getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
        } else "hide" === state && (item.active = false);
        return item;
      },
      playHitAnim: function playHitAnim(row, col, playShake) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var entry, spine_hit, sym, self;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("lightning1");
              _this7._spine_zs.getComponent(sp.Skeleton).setCompleteListener(null);
              entry = _this7._spine_zs.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
              _this7._spine_zs.getComponent(sp.Skeleton).setTrackCompleteListener(entry, function() {
                _this7._spine_zs.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
              });
              _context11.next = 6;
              return _this7.awaitTime(.5);

             case 6:
              spine_hit = cc.instantiate(_this7._spine_sd_hit);
              spine_hit.parent = _this7.node;
              spine_hit.active = true;
              sym = _this7._reels[col].GetSymbolByRow(row);
              spine_hit.position = _this7.node.convertToNodeSpaceAR(sym.node.convertToWorldSpaceAR(cc.v2(0, 0)));
              col < 2 && (spine_hit.scaleX = -1);
              self = _this7;
              spine_hit.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              spine_hit.getComponent(sp.Skeleton).setCompleteListener(function() {
                var wild = _this7.getWildNode(row, col);
                if (wild && wild.active) ; else {
                  wild || (wild = _this7.setWildNode(row, col));
                  wild.active = true;
                  wild.getComponent(sp.Skeleton).setCompleteListener(null);
                  wild.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                }
                var idx = _this7.GetIdxByRowCol(row, col);
                _this7._hitSdList.splice(_this7._hitSdList.indexOf(idx), 1);
                spine_hit.destroy();
              });
              playShake && _this7.playWindowShake();

             case 16:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      playSdFlyAnim: function playSdFlyAnim() {
        var _this8 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(sucess, failed) {
            var hasSd, endPos, col, row, sym;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                hasSd = false;
                endPos = _this8.node.convertToNodeSpaceAR(_this8._node_sd.convertToWorldSpaceAR(cc.v2(0, 0)));
                for (col = 0; col < _this8._col; col++) for (row = 0; row < _this8._row; row++) {
                  sym = _this8._reels[col].GetSymbolByRow(row);
                  9 === sym.GetShowId() && function() {
                    hasSd = true;
                    var sd = cc.instantiate(_this8._spine_sd_fly);
                    sd.parent = _this8.node;
                    sd.active = true;
                    sd.position = _this8.node.convertToNodeSpaceAR(sym.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                    var self = _this8;
                    sd.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
                    sd.getComponent(sp.Skeleton).setCompleteListener(function() {
                      sd.destroy();
                    });
                    Global.SlotsSoundMgr.playEffect("collect_fly");
                    cc.tween(sd).delay(.4).to(.6, {
                      position: endPos
                    }).start();
                  }();
                }
                if (!hasSd) {
                  _context12.next = 7;
                  break;
                }
                _context12.next = 6;
                return _this8.awaitTime(1.2);

               case 6:
                _this8.moveEnergyBar();

               case 7:
                sucess();

               case 8:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var curBet = cc.vv.gameData.GetBetIdx();
        this.setRemainFramesByBet(curBet, false);
        var minBet = cc.vv.gameData.GetNeedBet();
        if (curBet < minBet && !this._isLockJdtState) {
          Global.SlotsSoundMgr.playEffect("collect_lock");
          this._isLockJdtState = true;
          this._spine_lock.active = true;
          this._spine_lock.getComponent(sp.Skeleton).setAnimation(0, "lock", false);
          this._spine_lock.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
          this._node_sd.getChildByName("spine").active = false;
        } else if (curBet >= minBet && this._isLockJdtState) {
          Global.SlotsSoundMgr.playEffect("collect_unlock");
          this._isLockJdtState = false;
          this._spine_lock.active = true;
          this._spine_lock.getComponent(sp.Skeleton).setAnimation(0, "unlock", false);
          this._node_sd.getChildByName("spine").active = true;
        }
      },
      initEnergyBar: function initEnergyBar() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var minBet = cc.vv.gameData.GetNeedBet();
        cc.log(curBet, minBet);
        if (curBet < minBet) {
          this._isLockJdtState = true;
          this._spine_lock.active = true;
          this._spine_lock.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        } else {
          this._isLockJdtState = false;
          this._spine_lock.active = false;
        }
        var curValue = cc.vv.gameData.GetCurValue();
        var fullValue = cc.vv.gameData.GetFullValue();
        var per = curValue / fullValue;
        var posX = this._mask_jdt.width * per;
        this._spine_jdt.x = posX - .6;
        var pos_sz = this._spine_jdt_sz.parent.convertToNodeSpaceAR(this._mask_jdt.convertToWorldSpaceAR(cc.v2(posX, 0)));
        this._spine_jdt_sz.position = pos_sz;
      },
      moveEnergyBar: function moveEnergyBar() {
        var _this9 = this;
        var curValue = cc.vv.gameData.GetCurValue();
        var fullValue = cc.vv.gameData.GetFullValue();
        var per = curValue / fullValue;
        per = Math.min(per, 1);
        var pos_newX = this._mask_jdt.width * per;
        this._spine_jdt_sz.active = true;
        this._spine_jdt_sz.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
        var pos_sz = this._spine_jdt_sz.parent.convertToNodeSpaceAR(this._mask_jdt.convertToWorldSpaceAR(cc.v2(pos_newX, 0)));
        cc.tween(this._spine_jdt).to(.5, {
          position: cc.v2(pos_newX, 0)
        }).start();
        cc.tween(this._spine_jdt_sz).to(.5, {
          position: pos_sz
        }).call(function() {
          _this9._spine_jdt_sz.active = false;
        }).start();
      },
      showWildExtend: function showWildExtend() {
        var _this10 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(sucess, failed) {
            var lightningIdx, playExtend, moveTime, i, hitIdx, spine, curBet, isFree;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                lightningIdx = cc.vv.gameData.GetLightningIdx();
                if (!(lightningIdx.length > 0)) {
                  _context13.next = 18;
                  break;
                }
                playExtend = false;
                moveTime = .5;
                for (i = 0; i < lightningIdx.length; i++) {
                  hitIdx = lightningIdx[i];
                  if (_this10._remainFramesList[hitIdx - 1].active) {
                    playExtend = true;
                    _this10.playExtendWild(hitIdx, moveTime);
                  }
                }
                if (!playExtend) {
                  _context13.next = 18;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("expand");
                spine = cc.find("spine_sd_quanping", _this10.node);
                spine.active = true;
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                _context13.next = 12;
                return _this10.awaitTime(moveTime + .2);

               case 12:
                _this10.frameIntoWild();
                curBet = cc.vv.gameData.GetBetIdx();
                isFree = cc.vv.gameData.GetTotalFree() > 0;
                _this10.setRemainFramesByBet(curBet, isFree);
                _context13.next = 18;
                return _this10.awaitTime(.3);

               case 18:
                sucess();

               case 19:
               case "end":
                return _context13.stop();
              }
            }, _callee13);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      playExtendWild: function playExtendWild(hitIdx, moveTime) {
        var col = this.GetColByIdx(hitIdx);
        var row = this.GetRowByIdx(hitIdx);
        var startPos = this.getWildNode(row, col).position;
        for (var n_col = Math.max(col - 1, 0); n_col <= Math.min(this._col - 1, col + 1); n_col++) for (var n_row = Math.max(row - 1, 0); n_row <= Math.min(this._row - 1, row + 1); n_row++) {
          var wild = this.getWildNode(n_row, n_col);
          if (wild && wild.active) ; else {
            wild || (wild = this.setWildNode(n_row, n_col));
            wild.active = true;
            wild.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
            var endPos = wild.position;
            wild.position = startPos;
            cc.tween(wild).to(moveTime, {
              position: endPos
            }).start();
          }
        }
      },
      frameIntoWild: function frameIntoWild() {
        cc.log("left");
        for (var i = 0; i < this._remainFramesList.length; i++) if (this._remainFramesList[i].active) {
          var col = this.GetColByIdx(i + 1);
          var row = this.GetRowByIdx(i + 1);
          cc.log(i + 1, col, row);
          var wild = this.getWildNode(row, col);
          if (wild && wild.active) ; else {
            wild || (wild = this.setWildNode(row, col));
            wild.active = true;
            wild.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          }
        }
      },
      setWildNode: function setWildNode(row, col) {
        var wild = cc.instantiate(this._spine_wild);
        wild.parent = this._spine_wild.parent;
        wild.name = cc.js.formatStr("wild_%s_%s", row, col);
        this._wildList.push(wild);
        var sym = this._reels[col].GetSymbolByRow(row);
        wild.position = this.node.convertToNodeSpaceAR(sym.node.convertToWorldSpaceAR(cc.v2(0, 0)));
        Global.SlotsSoundMgr.playEffect("change_wild");
        return wild;
      },
      getWildNode: function getWildNode(row, col) {
        for (var i = 0; i < this._wildList.length; i++) if (this._wildList[i].name === cc.js.formatStr("wild_%s_%s", row, col)) return this._wildList[i];
        return null;
      },
      hideAllWild: function hideAllWild() {
        for (var i = 0; i < this._wildList.length; i++) {
          this._wildList[i].getComponent(sp.Skeleton).setCompleteListener(null);
          this._wildList[i].active = false;
        }
      },
      GetIdxByRowCol: function GetIdxByRowCol(row, col) {
        var idx = (this._row - row - 1) * this._col + col + 1;
        return idx;
      },
      GetColByIdx: function GetColByIdx(idx) {
        return (idx - 1) % this._col;
      },
      GetRowByIdx: function GetRowByIdx(idx) {
        return this._row - Math.floor((idx - 1) / this._col) - 1;
      },
      onClickJdtBtn: function onClickJdtBtn() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (this._isFreeGame) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (this._isLockJdtState) {
          var minBet = cc.vv.gameData.GetNeedBet();
          this._bottomScript.SetBetIdx(minBet);
        }
      },
      onClickGrailBtn: function onClickGrailBtn() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              if (cc.vv.gameData.GetBottomScript().GetSpinBtnState()) {
                _context14.next = 2;
                break;
              }
              return _context14.abrupt("return");

             case 2:
              if (!_this11._isFreeGame) {
                _context14.next = 4;
                break;
              }
              return _context14.abrupt("return");

             case 4:
              if (!(cc.vv.gameData.GetAutoModelTime() > 0)) {
                _context14.next = 6;
                break;
              }
              return _context14.abrupt("return");

             case 6:
              if (!_this11._isLockJdtState) {
                _context14.next = 8;
                break;
              }
              return _context14.abrupt("return");

             case 8:
              Global.SlotsSoundMgr.playEffect("popup_out");
              _this11._btn_grail.getComponent(cc.Button).interactable = false;
              cc.vv.gameData.GetBonusScript().enterBonusGame(1);
              _context14.next = 13;
              return _this11.awaitTime(.5);

             case 13:
              _this11._btn_grail.getComponent(cc.Button).interactable = true;

             case 14:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          Global.SlotsSoundMgr.playBgm("Zeus_Sound_FSBg");
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetFreeWinCoin();
          this._bottomScript.SetWin(nTotal);
        } else this._bottomScript.ShowFreeModel(false);
        this._isFreeGame = bFree;
        var normalBg = cc.find("Canvas/safe_node/bg");
        var normalFree = cc.find("Canvas/safe_node/spine_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
      },
      playWindowShake: function playWindowShake() {
        var safe_node = cc.find("Canvas/safe_node");
        var top = cc.find("LMSlots_Top", safe_node);
        var bottom = cc.find("LMSlots_Bottom", safe_node);
        cc.tween(safe_node).by(.1, {
          position: cc.v2(-9, -7)
        }).by(.1, {
          position: cc.v2(14, 0)
        }).by(.1, {
          position: cc.v2(-9, 14)
        }).by(.1, {
          position: cc.v2(8, -6)
        }).by(.1, {
          position: cc.v2(-16, -7)
        }).by(.1, {
          position: cc.v2(16, 0)
        }).by(.1, {
          position: cc.v2(-8, 14)
        }).by(.1, {
          position: cc.v2(4, -7)
        }).by(.1, {
          position: cc.v2(-7, 8)
        }).to(.1, {
          position: cc.v2(0, 0)
        }).start();
      },
      awaitTime: function awaitTime(time) {
        var _this12 = this;
        return new Promise(function(sucess, failed) {
          _this12.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      update: function update(dt) {
        this._super(dt);
        if (this._spinEnd && this._hitSdList.length <= 0) {
          this._spinEnd = false;
          this.onSpinEndAction();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Zues_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b5b8YDWkJI57k2AvZlSqH2", "Zues_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      GetKuangShowParent: function GetKuangShowParent() {
        return cc.find("Canvas/safe_node/slots/top_kuang");
      },
      playWinAnimation: function playWinAnimation() {
        var wild_node = cc.vv.gameData.GetSlotsScript().getWildNode(this._symbolIdx, this._reelIdx);
        wild_node && wild_node.active ? wild_node.getComponent(sp.Skeleton).setAnimation(0, "animation2", true) : this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Zues_BonusGame", "Zues_Cfg", "Zues_GameData", "Zues_Logic", "Zues_Popup", "Zues_Reels", "Zues_Slots", "Zues_Symbol" ]);