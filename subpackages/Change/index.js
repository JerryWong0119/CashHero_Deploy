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
  Change_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52df7zCtbdIKIs6Wic9pHOR", "Change_BonusGame");
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
        _curUnlockNum: 0,
        _shelterList: [],
        _bonusPoolList: [],
        _subGameData: null
      },
      start: function start() {},
      Init: function Init() {
        this.initBonusNode();
        this._slotsScript = this._bonus_slots.addComponent("Change_BonusSlots");
        this.initBonusUI();
      },
      initBonusNode: function initBonusNode() {
        this._bg_bonus = cc.find("safe_node/spr_bg_bonus", this.node);
        this._normal_slots = cc.find("safe_node/slots", this.node);
        this._bonus_slots = cc.find("safe_node/bonus_slots", this.node);
        this._node_bonus_pool = cc.find("safe_node/bonus_pool", this.node);
        this._topAniNode = cc.find("top_ani", this._bonus_slots);
        this._gemTopNode = cc.find("top_gem", this._bonus_slots);
        this._mask_frame = cc.find("mask_frame", this._bonus_slots);
        this._frame_top = cc.find("frame_top", this._bonus_slots);
        this._node_reels = cc.find("reels", this._bonus_slots);
        this._node_bonus_win = cc.find("node_bonus_win", this._bonus_slots);
        this._frame_bg = cc.find("bg", this._mask_frame);
        this._node_col = cc.find("node_col", this._mask_frame);
        this._node_row_left = cc.find("node_row_left", this._mask_frame);
        this._node_row_right = cc.find("node_row_right", this._mask_frame);
        this._spr_left = cc.find("spr_left", this._mask_frame);
        this._spr_right = cc.find("spr_right", this._mask_frame);
        this._spr_up = cc.find("spr_up", this._frame_top);
        this._node_tit = cc.find("node_tit", this._frame_top);
        this._shelterList.push(cc.find("shelter_1", this._frame_top));
        this._shelterList.push(cc.find("shelter_2", this._frame_top));
        this._shelterList.push(cc.find("shelter_3", this._frame_top));
        this._shelterList.push(cc.find("shelter_4", this._frame_top));
        this._bonusPoolList.push(cc.find("prizePool_MINI", this._node_bonus_pool));
        this._bonusPoolList.push(cc.find("prizePool_MINOR", this._node_bonus_pool));
        this._bonusPoolList.push(cc.find("prizePool_MAJOR", this._node_bonus_pool));
        this._bonusPoolList.push(cc.find("prizePool_GRAND", this._node_bonus_pool));
      },
      initBonusUI: function initBonusUI() {
        this._bg_bonus.active = false;
        this._normal_slots.active = true;
        this._bonus_slots.active = false;
        this._frame_bg.getChildByName("spr").active = false;
        this.setLineState(this._node_col, false);
        this.setLineState(this._node_row_left, false);
        this.setLineState(this._node_row_right, false);
        this._spr_up.active = false;
        this._node_tit.active = false;
        this._node_reels.active = false;
        this._node_bonus_win.active = false;
        this._node_bonus_pool.active = false;
        cc.find("safe_node/LMSlots_PrizePool_1", this.node).active = true;
        for (var i = 0; i < this._shelterList.length; i++) this._shelterList[i].active = false;
      },
      setLineState: function setLineState(parentNode, bShow) {
        for (var i = 0; i < parentNode.childrenCount; i++) parentNode.children[i].active = bShow;
      },
      triBonusGame: function triBonusGame(success) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._exitCallBack = success;
              _context.next = 3;
              return _this.playTriAnim();

             case 3:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playTriAnim: function playTriAnim() {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
            var awaitT2, awaitT4, _loop, i, awaitT5, _loop2, _i, _loop3, _i2, awaitT7, bonusUnlockList, _i3;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                cc.find("safe_node/change", _this2.node).active = false;
                _this2._bg_bonus.active = true;
                _this2._normal_slots.active = false;
                _this2._bonus_slots.active = true;
                _this2._frame_bg.y = -414;
                _this2._spr_left.y = -414;
                _this2._spr_right.y = -414;
                _this2._spr_up.active = true;
                _this2._spr_up.y = 0;
                cc.find("safe_node/LMSlots_PrizePool_1", _this2.node).active = false;
                _this2._node_bonus_pool.active = true;
                _this2.initPoolList();
                _context2.next = 14;
                return cc.vv.gameData.awaitTime(.5);

               case 14:
                Global.SlotsSoundMgr.playEffect("sound_HowlingMoon_reels_change");
                awaitT2 = 1.5;
                cc.tween(_this2._frame_bg).to(awaitT2, {
                  position: cc.v2(0, 0)
                }).start();
                cc.tween(_this2._spr_left).to(awaitT2, {
                  position: cc.v2(_this2._spr_left.x, 0)
                }).call(function() {
                  cc.find("effect", _this2._spr_left).active = false;
                }).start();
                cc.find("effect", _this2._spr_left).getComponent(cc.Animation).play();
                cc.tween(_this2._spr_right).to(awaitT2, {
                  position: cc.v2(_this2._spr_right.x, 0)
                }).call(function() {
                  cc.find("effect", _this2._spr_right).active = false;
                }).start();
                cc.find("effect", _this2._spr_right).getComponent(cc.Animation).play();
                cc.tween(_this2._spr_up).to(awaitT2, {
                  y: 414
                }).start();
                _context2.next = 24;
                return cc.vv.gameData.awaitTime(awaitT2);

               case 24:
                awaitT4 = 1.5;
                _loop = function _loop(i) {
                  var node = _this2._node_col.children[i];
                  node.active = true;
                  node.y = -414;
                  node.getChildByName("effect").active = true;
                  node.getChildByName("effect").getComponent(cc.Animation).play();
                  cc.tween(node).to(awaitT4, {
                    position: cc.v2(node.x, 414)
                  }).call(function() {
                    node.getChildByName("effect").active = false;
                  }).start();
                };
                for (i = 0; i < _this2._node_col.childrenCount; i++) _loop(i);
                awaitT5 = 1.5;
                _loop2 = function _loop2(_i) {
                  var node = _this2._node_row_left.children[_i];
                  node.active = true;
                  node.x = -333;
                  node.getChildByName("effect").active = true;
                  node.getChildByName("effect").getComponent(cc.Animation).play();
                  cc.tween(node).to(awaitT5, {
                    position: cc.v2(333, node.y)
                  }).call(function() {
                    node.getChildByName("effect").active = false;
                  }).start();
                };
                for (_i = 0; _i < _this2._node_row_left.childrenCount; _i++) _loop2(_i);
                _loop3 = function _loop3(_i2) {
                  var node = _this2._node_row_right.children[_i2];
                  node.active = true;
                  node.x = 333;
                  node.getChildByName("effect").active = true;
                  node.getChildByName("effect").getComponent(cc.Animation).play();
                  cc.tween(node).to(awaitT5, {
                    position: cc.v2(-333, node.y)
                  }).call(function() {
                    node.getChildByName("effect").active = false;
                  }).start();
                };
                for (_i2 = 0; _i2 < _this2._node_row_right.childrenCount; _i2++) _loop3(_i2);
                _context2.next = 34;
                return cc.vv.gameData.awaitTime(awaitT5);

               case 34:
                awaitT7 = .5;
                _this2._node_tit.active = true;
                _this2._node_tit.setScale(0);
                cc.tween(_this2._node_tit).to(awaitT7, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this2._curTimes = 3;
                _this2.setTitleNum(_this2._curTimes);
                _this2._node_reels.active = true;
                _this2._slotsScript.Init();
                _this2._slotsScript.reconnectInitSymbol();
                _context2.next = 45;
                return cc.vv.gameData.awaitTime(.5);

               case 45:
                bonusUnlockList = cc.vv.gameData.GetBonusGame().unlockInfo;
                _i3 = 0;

               case 47:
                if (!(_i3 < _this2._shelterList.length)) {
                  _context2.next = 57;
                  break;
                }
                if (!(_this2._curUnlockNum < bonusUnlockList[_i3])) {
                  _context2.next = 54;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("sound_HowlingMoon_showlock");
                _this2._shelterList[_i3].active = true;
                cc.find("lbl_num", _this2._shelterList[_i3]).getComponent(cc.Label).string = bonusUnlockList[_i3] - _this2._curUnlockNum;
                _context2.next = 54;
                return cc.vv.gameData.awaitTime(.3);

               case 54:
                _i3++;
                _context2.next = 47;
                break;

               case 57:
                cc.vv.gameData.SetIsBonusGame(true);
                _this2.reqSpin();
                sucess();

               case 60:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      enterBonusGame: function enterBonusGame(success) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3._exitCallBack = success;
              _this3.showEnterState();
              _context3.next = 4;
              return cc.vv.gameData.awaitTime(2);

             case 4:
              cc.vv.gameData.SetIsBonusGame(true);
              _this3.reqSpin();

             case 6:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showEnterState: function showEnterState() {
        this._bg_bonus.active = true;
        this._normal_slots.active = false;
        this._bonus_slots.active = true;
        this._spr_left.position = cc.v2(this._spr_left.x, 0);
        this._spr_right.position = cc.v2(this._spr_right.x, 0);
        this._spr_up.active = true;
        this._spr_up.opacity = 255;
        this._node_bonus_pool.active = true;
        cc.find("safe_node/LMSlots_PrizePool_1", this.node).active = false;
        this.initPoolList();
        for (var i = 0; i < this._node_col.childrenCount; i++) {
          var node = this._node_col.children[i];
          node.active = true;
          node.y = 414;
          node.getChildByName("effect").active = false;
        }
        for (var _i4 = 0; _i4 < this._node_row_left.childrenCount; _i4++) {
          var _node = this._node_row_left.children[_i4];
          _node.active = true;
          _node.x = 333;
          _node.getChildByName("effect").active = false;
        }
        for (var _i5 = 0; _i5 < this._node_row_right.childrenCount; _i5++) {
          var _node2 = this._node_row_right.children[_i5];
          _node2.active = true;
          _node2.x = -333;
          _node2.getChildByName("effect").active = false;
        }
        this._node_tit.active = true;
        this._curTimes = cc.vv.gameData.GetBonusGame().restCnt;
        this.setTitleNum(this._curTimes);
        this._node_reels.active = true;
        this._slotsScript.Init();
        this._slotsScript.reconnectInitSymbol();
        var bonusUnlockList = cc.vv.gameData.GetBonusGame().unlockInfo;
        for (var _i6 = 0; _i6 < this._shelterList.length; _i6++) if (this._curUnlockNum < bonusUnlockList[_i6]) {
          this._shelterList[_i6].active = true;
          cc.find("lbl_num", this._shelterList[_i6]).getComponent(cc.Label).string = bonusUnlockList[_i6] - this._curUnlockNum;
        } else this._shelterList[_i6].active = false;
      },
      exitBonusGame: function exitBonusGame() {
        this.initBonusUI();
        cc.find("safe_node/change", this.node).active = true;
        cc.vv.gameData.SetIsBonusGame(false);
      },
      initPoolList: function initPoolList() {
        var bonusGame = cc.vv.gameData.GetBonusGame();
        for (var i = 0; i < this._bonusPoolList.length; i++) cc.find("lbl_num", this._bonusPoolList[i]).getComponent(cc.Label).string = Global.FormatNumToComma(bonusGame.jackpotValues[i]);
      },
      setTitleNum: function setTitleNum(num) {
        for (var i = 0; i < 3; i++) {
          var show = cc.find("spin_" + (i + 1) + "/show", this._node_tit);
          show.active = num === i + 1;
        }
        this._curTimes = num;
        3 === num && Global.SlotsSoundMgr.playEffect("music_HowlingMoon_spin_respin_to3");
      },
      StopMove: function StopMove() {
        this._slotsScript.StopMove();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var restNum;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              restNum = _this4._subGameData.restCnt;
              _this4.setTitleNum(restNum);
              _context4.next = 4;
              return _this4.updateShelter();

             case 4:
              if (!(0 === restNum)) {
                _context4.next = 20;
                break;
              }
              Global.SlotsSoundMgr.playEffect("music_HowlingMoon_spin_respin_Over");
              _context4.next = 8;
              return _this4.playCompleteAnim();

             case 8:
              _context4.next = 10;
              return cc.vv.gameData.GetPopupScript().showBonusEnd(cc.vv.gameData.getDeskInfo().bonusGame.winCoin);

             case 10:
              cc.vv.gameData.GetSlotsScript().cutScene();
              _context4.next = 13;
              return cc.vv.gameData.awaitTime(1.5);

             case 13:
              _this4.exitBonusGame();
              _this4._normal_slots.active = true;
              _this4._bonus_slots.active = false;
              cc.vv.gameData.AddCoin(cc.vv.gameData.getDeskInfo().bonusGame.winCoin);
              cc.vv.gameData.GetSlotsScript().ShowBottomWin(cc.vv.gameData.getDeskInfo().bonusGame.winCoin, cc.vv.gameData.getDeskInfo().bonusGame.winCoin, true, function() {
                _this4._exitCallBack && _this4._exitCallBack();
                cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              });
              _context4.next = 23;
              break;

             case 20:
              _context4.next = 22;
              return cc.vv.gameData.awaitTime(1);

             case 22:
              _this4.reqSpin();

             case 23:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      updateShelter: function updateShelter() {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var bonusGame, preUnlockInfo, unlockInfo, _loop4, i;
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                bonusGame = cc.vv.gameData.getDeskInfo().bonusGame;
                preUnlockInfo = bonusGame.preUnlockInfo;
                unlockInfo = bonusGame.unlockInfo;
                _loop4 = regeneratorRuntime.mark(function _loop4(i) {
                  var unlock, j, shelter;
                  return regeneratorRuntime.wrap(function _loop4$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      if (!(preUnlockInfo[i] !== unlockInfo[i])) {
                        _context5.next = 12;
                        break;
                      }
                      if (!(0 === unlockInfo[i])) {
                        _context5.next = 11;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect("sound_HowlingMoon_unlock");
                      unlock = cc.find("unlock_" + (i + 1), _this5._frame_top);
                      unlock.active = true;
                      unlock.getComponent(cc.Animation).play();
                      unlock.getComponent(cc.Animation).on("stop", function() {
                        unlock.active = false;
                        _this5._shelterList[i].active = false;
                      });
                      _context5.next = 9;
                      return cc.vv.gameData.awaitTime(1);

                     case 9:
                      _context5.next = 12;
                      break;

                     case 11:
                      for (j = 0; j < 4; j++) {
                        shelter = _this5._shelterList[j];
                        cc.find("lbl_num", shelter).getComponent(cc.Label).string = preUnlockInfo[j] - (preUnlockInfo[j] - unlockInfo[j]);
                      }

                     case 12:
                     case "end":
                      return _context5.stop();
                    }
                  }, _loop4);
                });
                i = 3;

               case 5:
                if (!(i >= 0)) {
                  _context6.next = 10;
                  break;
                }
                return _context6.delegateYield(_loop4(i), "t0", 7);

               case 7:
                i--;
                _context6.next = 5;
                break;

               case 10:
                sucess();

               case 11:
               case "end":
                return _context6.stop();
              }
            }, _callee5);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      playCompleteAnim: function playCompleteAnim() {
        var _this6 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
            var bonusGame, _iterator, _step, item, reel, node, position, bonus_bao, winCoin, _loop5, i, _ret, j, animation;
            return regeneratorRuntime.wrap(function _callee6$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_HowlingMoon_spin_respin_RunOver");
                bonusGame = cc.vv.gameData.getDeskInfo().bonusGame;
                _iterator = _createForOfIteratorHelper(bonusGame.items);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    item = _step.value;
                    reel = _this6._slotsScript.getReel(item.idx - 1);
                    node = cc.instantiate(cc.vv.gameData.GetPrefabByName("symbol"));
                    node.parent = cc.find("top_ani", _this6._bonus_slots);
                    node.addComponent("Change_Symbol");
                    position = reel.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    position = cc.find("top_ani", _this6._bonus_slots).convertToNodeSpaceAR(position);
                    node.position = position;
                    node.getComponent("Change_Symbol").ShowById(cc.vv.gameData.getGameCfg().bonusId, item);
                    cc.tween(node).to(.5, {
                      scale: 1.1
                    }).to(.5, {
                      scale: 1
                    }).removeSelf().start();
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                _context8.next = 6;
                return cc.vv.gameData.awaitTime(1);

               case 6:
                _this6._node_bonus_win.active = true;
                cc.find("lbl_win", _this6._node_bonus_win).getComponent(cc.Label).string = "";
                bonusGame.items.sort(function(a, b) {
                  return a.idx - b.idx;
                });
                bonus_bao = cc.find("safe_node/bonus_bao", _this6.node);
                winCoin = 0;
                _loop5 = regeneratorRuntime.mark(function _loop5(i) {
                  var unlockInfo, item, bao, position, _j, _animation;
                  return regeneratorRuntime.wrap(function _loop5$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      unlockInfo = bonusGame.unlockInfo;
                      item = bonusGame.items[i];
                      if (!(item.idx <= 20)) {
                        _context7.next = 5;
                        break;
                      }
                      if (!(0 !== unlockInfo[Math.floor((item.idx - 1) / 5)])) {
                        _context7.next = 5;
                        break;
                      }
                      return _context7.abrupt("return", "continue");

                     case 5:
                      Global.SlotsSoundMgr.playEffect("music_HowlingMoon_spin_respin_RunOver");
                      bao = cc.instantiate(bonus_bao);
                      bao.active = true;
                      bao.parent = _this6.node.parent;
                      position = _this6._slotsScript.getReel(item.idx - 1).node.convertToWorldSpaceAR(cc.v2(0, 0));
                      position = _this6.node.parent.convertToNodeSpaceAR(position);
                      bao.position = position;
                      bao.getComponent(cc.Animation).play();
                      bao.getComponent(cc.Animation).on("stop", function() {
                        bao.removeFromParent();
                      });
                      winCoin += item.jackpot ? item.jackpot.value : item.coin;
                      cc.find("lbl_win", _this6._node_bonus_win).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                      for (_j = 0; _j < 3; _j++) {
                        _animation = cc.find("animation_" + (_j + 1), _this6._node_bonus_win);
                        _animation.active = true;
                        _animation.getComponent(cc.Animation).play();
                      }
                      if (!item.jackpot) {
                        _context7.next = 20;
                        break;
                      }
                      _context7.next = 20;
                      return cc.vv.gameData.GetPopupScript().showJackpot(item.jackpot);

                     case 20:
                      _context7.next = 22;
                      return cc.vv.gameData.awaitTime(.5);

                     case 22:
                     case "end":
                      return _context7.stop();
                    }
                  }, _loop5);
                });
                i = 0;

               case 13:
                if (!(i < bonusGame.items.length)) {
                  _context8.next = 21;
                  break;
                }
                return _context8.delegateYield(_loop5(i), "t0", 15);

               case 15:
                _ret = _context8.t0;
                if (!("continue" === _ret)) {
                  _context8.next = 18;
                  break;
                }
                return _context8.abrupt("continue", 18);

               case 18:
                i++;
                _context8.next = 13;
                break;

               case 21:
                for (j = 0; j < 3; j++) {
                  animation = cc.find("animation_" + (j + 1), _this6._node_bonus_win);
                  animation.active = false;
                }
                sucess();

               case 23:
               case "end":
                return _context8.stop();
              }
            }, _callee6);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
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
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var reqdata, result;
          return regeneratorRuntime.wrap(function _callee7$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              _this7._subGameData = null;
              _this7._curTimes--;
              _this7.setTitleNum(_this7._curTimes);
              _this7._slotsScript.StartMove(cc.vv.gameData.getDeskInfo().bonusGame.items);
              reqdata = {
                rtype: 1
              };
              _context9.next = 7;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 7:
              result = _context9.sent;
              if (200 === result.code && !result.spcode) {
                _this7._subGameData = result.data.bonusGame;
                cc.vv.gameData.getDeskInfo().bonusGame = result.data.bonusGame;
                _this7._slotsScript.setSpinResult(result.data.bonusGame);
              }

             case 9:
             case "end":
              return _context9.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Change_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a559+UvHRL0bFoNu5miUWp", "Change_BonusReel");
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
        var symbol = this._symbols[0];
        if (symbol.GetShowId() === cc.vv.gameData.getGameCfg().bonusId) {
          var data = symbol.GetData();
          symbol.playBonusStop();
        }
        var maxReelIdx = cc.vv.gameData.GetBonusScript().getMaxReelIdx(this._type, this._reelIdx % 5);
        this._reelIdx === maxReelIdx && Global.SlotsSoundMgr.playEffect("music_HowlingMoon_reel_stop");
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
  Change_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77fe39JhVlOA5SOXWwX1QZe", "Change_BonusSlots");
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
        this._col = 40;
        this._row = 1;
        this._topAniNode = cc.find("top_ani", this.node);
        this.createReels(this._col, this._row);
      },
      createReels: function createReels(col, row) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          if (!node.getComponent("Change_BonusReel")) {
            var scp = node.addComponent("Change_BonusReel");
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
          var _iterator = _createForOfIteratorHelper(items), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              if (item.idx === reel.GetReelIdx() + 1) {
                include = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
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
      setSpinResult: function setSpinResult(bonusGame) {
        var cfg = cc.vv.gameData.getGameCfg();
        var cards = [];
        for (var i = 1; i <= 40; i++) {
          var randIdx = Global.random(1, cfg.bonusRandomSymbols.length);
          var randVal = cfg.bonusRandomSymbols[randIdx - 1];
          cards.push(randVal);
        }
        this.SetSlotsResult(cards, bonusGame);
      },
      SetSlotsResult: function SetSlotsResult(cards, bonusGame) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = {};
            var _iterator2 = _createForOfIteratorHelper(bonusGame.items), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var item = _step2.value;
                if (item.idx === i + 1) {
                  res.sid = this._cfg.bonusId;
                  res.data = item;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
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
        var bonusGame = cc.vv.gameData.GetBonusGame();
        for (var col = 0; col < this._col; col++) {
          var isBonus = false;
          var _iterator3 = _createForOfIteratorHelper(bonusGame.items), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var item = _step3.value;
              if (item.idx === col + 1) {
                this._reels[col].GetSymbolByRow(0).ShowById(this._cfg.bonusId, item);
                isBonus = true;
                break;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          isBonus || this._reels[col].GetSymbolByRow(0).ShowRandomSymbol();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Change_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d3c1T17iZKEIanwKizmCIP", "Change_Cfg");
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
        win_ani: {
          name: "actionframe",
          zIndex: 300
        },
        stop_ani: {
          name: "buling",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3"
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
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11"
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12"
      }), _defineProperty(_symbol, 201, {
        node: "symbol_201",
        win_node: "animation_201",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        },
        stop_ani: {
          name: "buling",
          zIndex: 100
        }
      }), _symbol),
      bonusId: 3,
      extraFreeId: 201,
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Change_Slots",
        Reels: "Change_Reels",
        Symbols: "Change_Symbol"
      },
      col: 5,
      row: 4,
      bonus_col: 5,
      bonus_row: 8,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 130,
        height: 100
      },
      randomSymbolsFirst: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      bonusRandomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 6, 7, 8, 9, 10, 11, 12, 5, 6, 7, 8, 9, 10, 11, 12 ],
      kuang: "kuang",
      autoModelDelay: 1,
      speed: 2200,
      reelStopInter: .4,
      auto_stop_time: 1.2,
      bounceInfo: {
        distance: 45,
        time: .4
      },
      gemIdList: [ 4 ],
      bonusUnlockList: [ 20, 16, 12, 8 ],
      helpItems: [ "games/Change/prefab/help_item_1", "games/Change/prefab/help_item_2", "games/Change/prefab/help_item_3", "games/Change/prefab/help_item_4" ],
      commEffect: {
        path: "games/Change/",
        win1: [ "HowlingMoonSounds_win1", "" ],
        win2: [ "HowlingMoonSounds_win2", "" ],
        win3: [ "HowlingMoonSounds_win3", "" ]
      },
      AddAntiTime: 1.7,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/Change/",
        reelStopSound: "music_HowlingMoon_reel_stop",
        symbolStopSound: "",
        antSound: "anticipation",
        antSpeed: 2200
      } ],
      normalBgm: "music_HowlingMoon_bg"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Change_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a184W86zhGHrtBQUkYxUAq", "Change_GameData");
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
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        this._super(msg);
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
      SetIsBonusGame: function SetIsBonusGame(isBonus) {
        this._isBonusGame = isBonus;
      },
      IsBonusGame: function IsBonusGame() {
        return this._isBonusGame;
      },
      GetChangeNumBet: function GetChangeNumBet() {
        return this._deskInfo.bonusGame.tri.bet;
      },
      GetBonusInfo: function GetBonusInfo() {
        return this._gameInfo.bonusInfo;
      },
      GetBonusGame: function GetBonusGame() {
        return this._gameInfo && this._gameInfo.bonusGame ? this._gameInfo.bonusGame : this._deskInfo.bonusGame;
      },
      GetBonusState: function GetBonusState() {
        return this._deskInfo.bonusGame.state;
      },
      GetBonusWinCoin: function GetBonusWinCoin() {
        return this._gameInfo.bonusGame.coin;
      },
      GetBonusRestNum: function GetBonusRestNum() {
        return this._deskInfo.bonusGame.restCnt;
      },
      GetBonusPool: function GetBonusPool() {
        return this._bonusPoolList;
      },
      GetFreeWinCoin: function GetFreeWinCoin() {
        return this._freeWinCoin;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Change_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10c62DX1MhLkqp8um0cWRbR", "Change_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("Change_Popup");
        script_popup.Init();
        cc.vv.gameData.SetPopupScript(script_popup);
        var script_bonus = this.node.addComponent("Change_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.SetBonusScript(script_bonus);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Change_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a753jDtEJJ/7+3j9kn3siS", "Change_Popup");
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
        this._node_free_start = cc.find("pop_free_start", this._node_popup);
        this._node_free_end = cc.find("pop_free_end", this._node_popup);
        this._node_bonus_end = cc.find("pop_bonus_end", this._node_popup);
        this._node_jackpot = cc.find("pop_jackpot", this._node_popup);
        this._node_free_start.active = false;
        this._node_free_end.active = false;
        this._node_bonus_end.active = false;
        this._node_jackpot.active = false;
      },
      showFirstGainFree: function showFirstGainFree() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
                  var btn_start, self;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      _this._node_popup.active = true;
                      _this._node_free_start.active = true;
                      Global.SlotsSoundMgr.playEffect("music_HowlingMoon_show_view");
                      _this._node_free_start.setScale(0);
                      cc.tween(_this._node_free_start).to(.7, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.find("times", _this._node_free_start).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                      btn_start = _this._node_free_start.getChildByName("btn_start");
                      _context.next = 9;
                      return cc.vv.gameData.awaitTime(.5);

                     case 9:
                      btn_start.getComponent(cc.Button).interactable = true;
                      btn_start.off("click");
                      self = _this;
                      btn_start.on("click", function() {
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(_this._node_free_start).to(.7, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._node_popup.active = false;
                          self._node_free_start.active = false;
                          sucess();
                        }).start();
                      });

                     case 13:
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
      showEndFree: function showEndFree(winCoin) {
        var _this2 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var lbl_winCoin, btn_collect, self;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                _this2._node_popup.active = true;
                _this2._node_free_end.active = true;
                Global.SlotsSoundMgr.playEffect("music_HowlingMoon_show_view");
                lbl_winCoin = cc.find("win_bg/lbl_winCoin", _this2._node_free_end);
                Global.doRoallNumEff(lbl_winCoin, 0, winCoin, 2, null, null, 0, true);
                cc.find("times", _this2._node_free_end).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                _this2._node_free_end.setScale(0);
                cc.tween(_this2._node_free_end).to(.7, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                btn_collect = _this2._node_free_end.getChildByName("btn_collect");
                _context3.next = 12;
                return cc.vv.gameData.awaitTime(.5);

               case 12:
                btn_collect.getComponent(cc.Button).interactable = true;
                btn_collect.off("click");
                self = _this2;
                btn_collect.on("click", function() {
                  Global.SlotsSoundMgr.playEffect("music_HowlingMoon_touch_view_btn");
                  btn_collect.getComponent(cc.Button).interactable = false;
                  cc.tween(_this2._node_free_end).to(.7, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    self._node_popup.active = false;
                    self._node_free_end.active = false;
                    sucess();
                  }).start();
                });

               case 16:
               case "end":
                return _context3.stop();
              }
            }, _callee3);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      showBonusEnd: function showBonusEnd(winCoin) {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var lbl_winCoin, btn_collect, self;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                _this3._node_popup.active = true;
                _this3._node_bonus_end.active = true;
                lbl_winCoin = cc.find("win_bg/lbl_winCoin", _this3._node_bonus_end);
                Global.doRoallNumEff(lbl_winCoin, 0, winCoin, 2, null, null, 0, true);
                Global.SlotsSoundMgr.playEffect("music_HowlingMoon_show_JackPOt_view");
                _this3._node_bonus_end.setScale(0);
                cc.tween(_this3._node_bonus_end).to(.7, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                btn_collect = _this3._node_bonus_end.getChildByName("btn_collect");
                _context4.next = 11;
                return cc.vv.gameData.awaitTime(.5);

               case 11:
                btn_collect.getComponent(cc.Button).interactable = true;
                btn_collect.off("click");
                self = _this3;
                btn_collect.on("click", function() {
                  Global.SlotsSoundMgr.playEffect("music_HowlingMoon_touch_view_btn");
                  btn_collect.getComponent(cc.Button).interactable = false;
                  cc.tween(_this3._node_bonus_end).to(.7, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    self._node_popup.active = false;
                    self._node_bonus_end.active = false;
                    sucess();
                  }).start();
                });

               case 15:
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
      showJackpot: function showJackpot(jackpot) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  var lbl_winCoin, jackpotImg, btn_collect, self;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                      _this4._node_popup.active = true;
                      _this4._node_jackpot.active = true;
                      lbl_winCoin = cc.find("win_bg/lbl_winCoin", _this4._node_jackpot);
                      lbl_winCoin.getComponent(cc.Label).string = Global.FormatNumToComma(jackpot.value);
                      jackpotImg = cc.find("jackpot", _this4._node_jackpot);
                      jackpotImg.getComponent("ImgSwitchCmp").setIndex(jackpot.id - 1);
                      Global.SlotsSoundMgr.playEffect("music_HowlingMoon_show_view");
                      _this4._node_jackpot.setScale(0);
                      cc.tween(_this4._node_jackpot).to(.7, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      btn_collect = _this4._node_jackpot.getChildByName("btn_collect");
                      _context5.next = 13;
                      return cc.vv.gameData.awaitTime(.5);

                     case 13:
                      btn_collect.getComponent(cc.Button).interactable = true;
                      btn_collect.off("click");
                      self = _this4;
                      btn_collect.on("click", function() {
                        Global.SlotsSoundMgr.playEffect("music_HowlingMoon_touch_view_btn");
                        btn_collect.getComponent(cc.Button).interactable = false;
                        cc.tween(_this4._node_jackpot).to(.7, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._node_popup.active = false;
                          self._node_jackpot.active = false;
                          sucess();
                        }).start();
                      });

                     case 17:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Change_Reels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f678FQl/VLGIYaHaXNy6g2", "Change_Reels");
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
          item.GetShowId() === cc.vv.gameData.getGameCfg().bonusId && item.playBonusStop();
          if (item.GetShowId() === cc.vv.gameData.getGameCfg().extraFreeId) {
            item.playStopAnimation();
            Global.SlotsSoundMgr.playEffect("HowlingMoon_freespin_Scatter_down");
          }
        }
        if (this._originResult) for (var _i = 0; _i < this._originResult.length; _i++) {
          var _item = this._symbols[_i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(_item.GetShowId()) && _item.playStopAnimation();
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
              if (_info.isStop) {
                symbolEffect = "music_Pomi_Scatter_Down_" + this._reelIdx;
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
          cc.vv.AudioManager.playEff(soundPath, reelStopEffect, true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Change_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "803e9CRqlhM1INB6QxX17jH", "Change_Slots");
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
        _isFiveGem: false,
        _isFreeGame: false
      },
      start: function start() {},
      Init: function Init(top, bottom) {
        this._node_banner = cc.find("node_banner", this.node);
        this._super(top, bottom);
        this.onEventTotalbetUpdated();
        cc.find("node_free/total", this.node).getComponent(cc.Label).string = 10;
        cc.find("node_free/times", this.node).getComponent(cc.Label).string = 10;
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var deskInfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              _this.onEventTotalbetUpdated();
              if (!deskInfo.bonusGame) {
                _context2.next = 5;
                break;
              }
              _context2.next = 5;
              return new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      cc.vv.gameData.GetBonusScript().enterBonusGame(sucess);

                     case 1:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }());

             case 5:
              cc.vv.gameData.GetTotalFree() > 0 ? _this.ShowGameview(true) : _this.ShowGameview(false);
              _this.CanDoNextRound();

             case 7:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        cc.vv.gameData.IsBonusGame() ? cc.vv.gameData.GetBonusScript().onMsgSpine(msg) : this._super(msg);
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
      StartMove: function StartMove() {
        if (cc.vv.gameData.IsBonusGame()) return;
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        if (this._isFreeGame) {
          cc.find("node_free/total", this.node).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
          cc.find("node_free/times", this.node).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree() - cc.vv.gameData.GetFreeTime();
        }
      },
      StopMove: function StopMove() {
        cc.vv.gameData.IsBonusGame() ? cc.vv.gameData.GetBonusScript().StopMove() : this._super();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this2.checkExtraFreeGame();

             case 2:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _this2.ShowBottomWin(nWin, nTotal, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    _this2._gameInfo.bonusGame ? _this2.CheckTriggerBonusGame() : _this2.CheckEnterFreeGame() ? _this2.triggerFreeGame() : _this2.CheckExitFreeGame() ? _this2.triggerExitFreeGame() : _this2.CanDoNextRound();

                   case 1:
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
      checkExtraFreeGame: function checkExtraFreeGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var spin, i, card, symbol, trigger_extra_free, moon, title, times;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              spin = 0;
              for (i = 0; i < _this3._gameInfo.resultCards.length; i++) {
                card = _this3._gameInfo.resultCards[i];
                symbol = _this3.GetSymbolByIdx(i + 1);
                if (card === _this3._cfg.extraFreeId) {
                  spin++;
                  symbol.playWinAnimation();
                }
              }
              if (!(spin > 0)) {
                _context5.next = 26;
                break;
              }
              _context5.next = 5;
              return cc.vv.gameData.awaitTime(1);

             case 5:
              Global.SlotsSoundMgr.playEffect("music_HowlingMoon_show_view");
              trigger_extra_free = cc.find("trigger_extra_free", _this3.node);
              moon = cc.find("moon", trigger_extra_free);
              title = cc.find("title", trigger_extra_free);
              title.getComponent("ImgSwitchCmp").setIndex(spin > 1 ? 1 : 0);
              times = cc.find("times", trigger_extra_free);
              times.getComponent(cc.Label).string = "+" + spin;
              trigger_extra_free.active = true;
              moon.opacity = 0;
              moon.scale = 0;
              cc.tween(moon).to(.5, {
                scale: 1.5,
                opacity: 255
              }, {
                easing: "backOut"
              }).start();
              title.opacity = 0;
              title.scale = 0;
              cc.tween(title).to(.5, {
                scale: 1,
                opacity: 255
              }, {
                easing: "backOut"
              }).start();
              times.scale = 0;
              cc.tween(times).delay(.3).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _context5.next = 23;
              return cc.vv.gameData.awaitTime(1.5);

             case 23:
              cc.tween(moon).to(.5, {
                scale: 0,
                opacity: 0
              }, {
                easing: "backIn"
              }).call(function() {
                trigger_extra_free.active = false;
              }).start();
              cc.tween(title).to(.5, {
                scale: 0,
                opacity: 0
              }, {
                easing: "backIn"
              }).start();
              cc.tween(times).to(.5, {
                scale: 0
              }, {
                easing: "backIn"
              }).start();

             case 26:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetFreeTime() === cc.vv.gameData.GetTotalFree();
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var i, card, symbol;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("HowlingMoon_trigger_fs");
              for (i = 0; i < _this4._gameInfo.resultCards.length; i++) {
                card = _this4._gameInfo.resultCards[i];
                if (card === _this4._cfg.scatterId) {
                  symbol = _this4.GetSymbolByIdx(i + 1);
                  symbol && symbol.playWinAnimation();
                }
              }
              _context6.next = 4;
              return cc.vv.gameData.awaitTime(1.5);

             case 4:
              _this4.Backup();
              _context6.next = 7;
              return cc.vv.gameData.GetPopupScript().showFirstGainFree();

             case 7:
              _context6.next = 9;
              return cc.vv.gameData.awaitTime(.8);

             case 9:
              _this4.ShowGameview(true);
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("sound_HowlingMoon_freespin_bg");
              _this4.CanDoNextRound();

             case 13:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _context7.next = 2;
              return cc.vv.gameData.GetPopupScript().showEndFree(cc.vv.gameData.GetGameTotalFreeWin());

             case 2:
              _context7.next = 4;
              return cc.vv.gameData.awaitTime(.8);

             case 4:
              _this5.Resume();
              _this5.ShowGameview(false);
              _context7.next = 8;
              return cc.vv.gameData.awaitTime(.5);

             case 8:
              nWin = cc.vv.gameData.GetGameTotalFreeWin();
              nTotal = nWin;
              _this5.ShowBottomWin(nWin, nTotal, true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this5.CanDoNextRound();
              });

             case 11:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      CheckTriggerBonusGame: function CheckTriggerBonusGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
                  var _iterator2, _step2, item, symbol, trigger_bonus, moon, title;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("music_HowlingMoon_enter_bonus");
                      cc.vv.gameData.getDeskInfo().bonusGame = _this6._gameInfo.bonusGame;
                      _iterator2 = _createForOfIteratorHelper(_this6._gameInfo.bonusGame.items);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          item = _step2.value;
                          symbol = _this6.GetSymbolByIdx(item.idx);
                          symbol && symbol.playTriggerBonusGame();
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context8.next = 6;
                      return cc.vv.gameData.awaitTime(2);

                     case 6:
                      Global.SlotsSoundMgr.playEffect("music_HowlingMoon_show_view");
                      trigger_bonus = cc.find("trigger_bonus", _this6.node);
                      moon = cc.find("moon", trigger_bonus);
                      title = cc.find("title", trigger_bonus);
                      trigger_bonus.active = true;
                      moon.opacity = 0;
                      moon.scale = 0;
                      cc.tween(moon).to(.5, {
                        scale: 1.5,
                        opacity: 255
                      }, {
                        easing: "backOut"
                      }).start();
                      title.opacity = 0;
                      title.scale = 0;
                      cc.tween(title).delay(.1).to(.5, {
                        scale: 1,
                        opacity: 255
                      }, {
                        easing: "backOut"
                      }).start();
                      _context8.next = 19;
                      return cc.vv.gameData.awaitTime(1.5);

                     case 19:
                      cc.tween(moon).to(.5, {
                        scale: 0,
                        opacity: 0
                      }, {
                        easing: "backIn"
                      }).call(function() {
                        trigger_bonus.active = false;
                      }).start();
                      cc.tween(title).to(.5, {
                        scale: 0,
                        opacity: 0
                      }, {
                        easing: "backIn"
                      }).start();
                      _context8.next = 23;
                      return cc.vv.gameData.awaitTime(.5);

                     case 23:
                      _this6.cutScene();
                      _context8.next = 26;
                      return cc.vv.gameData.awaitTime(1.5);

                     case 26:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playBgm("music_HowlingMoon_linghtning_frame");
                      cc.vv.gameData.GetBonusScript().triBonusGame(sucess);

                     case 29:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x3, _x4) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      cutScene: function cutScene() {
        Global.SlotsSoundMgr.playEffect("music_HowlingMoon_spin_transition");
        var transition = cc.find("transition", this.node.parent);
        transition.active = true;
        transition.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
        transition.getComponent(sp.Skeleton).setCompleteListener(function() {
          transition.getComponent(sp.Skeleton).setCompleteListener(null);
          transition.active = false;
        });
      },
      ShowGameview: function ShowGameview(bFree) {
        this._isFreeGame = bFree;
        var node_free = cc.find("node_free", this.node);
        node_free.active = bFree;
        this._node_banner.active = !bFree;
        if (bFree) {
          Global.SlotsSoundMgr.playBgm("free_bgm");
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetFreeWinCoin();
          this._bottomScript.SetWin(nTotal);
          cc.find("total", node_free).getComponent(cc.Label).string = total;
          cc.find("times", node_free).getComponent(cc.Label).string = total - rest;
        } else this._bottomScript.ShowFreeModel(false);
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var node_4 = cc.find("node_4", this._node_banner);
        var node_5 = cc.find("node_5", this._node_banner);
        var curBet = cc.vv.gameData.GetBetIdx();
        var minBet = cc.vv.gameData.getDeskInfo().needBet;
        if (!this._isFiveGem && curBet < minBet) {
          Global.SlotsSoundMgr.playEffect("sound_HowlingMoon_unlock_highbet");
          this._isFiveGem = true;
          node_4.active = false;
          node_5.active = true;
        } else if (this._isFiveGem && curBet >= minBet) {
          Global.SlotsSoundMgr.playEffect("sound_HowlingMoon_unlock_highbet");
          this._isFiveGem = false;
          node_4.active = true;
          node_5.active = false;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Change_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcb4ek3MMhBU7GTDK9Pfrpk", "Change_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _type: "normal"
      },
      Init: function Init(idx, node) {
        this._super(idx, node);
      },
      setSymType: function setSymType(type) {
        this._type = type;
      },
      ShowRandomSymbolFirst: function ShowRandomSymbolFirst() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbolsFirst.length);
        var randVal = cfg.randomSymbolsFirst[randIdx - 1];
        this.ShowById(randVal);
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        this._super();
        this.showCoin();
      },
      ShowById: function ShowById(id, data) {
        if ("bonus" === this._type) {
          this._id = id;
          this._data = data;
          this._state = "normal";
          this._showNode && (this._showNode.active = false);
          var cfg = cc.vv.gameData.getGameCfg();
          if (cfg.symbol[id] && cfg.symbol[id].bonus_node) {
            this._showNode = cc.find(cfg.symbol[id].bonus_node, this.node);
            this._showNode.active = true;
          }
        } else this._super(id, data);
        this.showCoin();
      },
      StartMove: function StartMove() {
        this._super();
      },
      showCoin: function showCoin() {
        var coin = cc.find("coin", this.node);
        var jackpot = cc.find("jackpot", this.node);
        if (coin && jackpot && this._id === cc.vv.gameData.getGameCfg().bonusId) if (this._data) {
          if (this._data.coin > 0) {
            coin.active = true;
            coin.getComponent(cc.Label).string = Global.formatNumShort(this._data.coin, 0);
            jackpot.active = false;
          } else if (this._data.jackpot) {
            jackpot.active = true;
            coin.active = false;
            jackpot.getComponent("ImgSwitchCmp").setIndex(this._data.jackpot.id - 1);
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
      setBonusIndex: function setBonusIndex(index) {
        this._bonusIndex = index;
      },
      playTriggerBonusGame: function playTriggerBonusGame() {
        this._showNode.stopAllActions();
        this._showNodeOrgScale = this._showNode.scale;
        cc.tween(this._showNode).to(.3, {
          scale: .4
        }).to(.6, {
          scale: .7
        }).to(.3, {
          scale: .5
        }).start();
      },
      playBonusStop: function playBonusStop() {
        this._showNode.stopAllActions();
        this._showNodeOrgScale = this._showNode.scale;
        Global.SlotsSoundMgr.playEffect("music_HowlingMoon_spin_light_down");
        cc.tween(this._showNode).to(.3, {
          scale: .6
        }).to(.3, {
          scale: .5
        }).start();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Change_BonusGame", "Change_BonusReel", "Change_BonusSlots", "Change_Cfg", "Change_GameData", "Change_Logic", "Change_Popup", "Change_Reels", "Change_Slots", "Change_Symbol" ]);