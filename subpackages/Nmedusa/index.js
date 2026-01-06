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
  Nmedusa_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a303fUU8sFCrYuqUpj6WlSz", "Nmedusa_BonusGame");
    "use strict";
    var _RowSpineConfig, _MultSpineConfig;
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
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var HolderCount = [ 3, 7, 7, 7, 3 ];
    var TypeID = [ 21, 28, 27, 26, 24, 25, 23, 22 ];
    var UpSpinPosY = [ 226, 333, 440, 547 ];
    var UpSpinBgPosY = [ 0, 107, 214, 321 ];
    var RowSpineConfig = (_RowSpineConfig = {}, _defineProperty(_RowSpineConfig, 25, [ 0, 20, 15, 10 ]), 
    _defineProperty(_RowSpineConfig, 30, [ 0, 15, 12, 9 ]), _defineProperty(_RowSpineConfig, 35, [ 0, 10, 8, 6 ]), 
    _RowSpineConfig);
    var MultSpineConfig = (_MultSpineConfig = {}, _defineProperty(_MultSpineConfig, 21, "animation1"), 
    _defineProperty(_MultSpineConfig, 26, "animation2"), _defineProperty(_MultSpineConfig, 31, "animation3"), 
    _MultSpineConfig);
    cc.Class({
      extends: cc.Component,
      properties: {
        effectNode: {
          default: null,
          type: cc.Node
        },
        effectNodeInside: {
          default: null,
          type: cc.Node
        },
        _gameUI: null,
        _slotsUI: null,
        _topScript: null,
        _bottomScript: null,
        _col: 0,
        _row: 0,
        _reels: [],
        _cfg: null,
        _stopTime: null,
        _bonusData: null,
        _finishBonusData: [],
        _exitCallBack: null,
        _bonusWinCoin: 0
      },
      Init: function Init() {
        this._gameUI = cc.find("game_ui", this.node);
        this._gameUI.active = false;
        this._slotsUI = cc.find("game_ui/slots", this.node);
        this._topAnimationNode = cc.find("top_ani", this._slotsUI);
        this._spinNumLable = cc.find("reels_frame/spine_node/spin/spin", this._slotsUI);
        this._lastSpinNumLable = cc.find("reels_frame/spine_node/spin/last_spin", this._slotsUI);
        this._respinMultActive = cc.find("reels_frame/respin_ban_1/wins_node", this._slotsUI);
        this._respinRespinNode = cc.find("reels_frame/respin_ban_1/wins_node/respin_node", this._slotsUI);
        this._respinRespinX = cc.find("reels_frame/respin_ban_1/wins_node/respin_x", this._slotsUI);
        this._respinRowActive = cc.find("reels_frame/respin_ban_2/activet_node", this._slotsUI);
        this._respinRowNode = cc.find("reels_frame/respin_ban_2/activet_node/respin_node", this._slotsUI);
        this._respinRowspnX = cc.find("reels_frame/respin_ban_2/activet_node/respin_r", this._slotsUI);
        this._spinUpNode = cc.find("reels_frame/spine_node", this._slotsUI);
        this._spinUpBg = cc.find("reels_frame/spine_bg/bg", this._slotsUI);
        this._respin_ban_1 = cc.find("reels_frame/respin_ban_1", this._slotsUI);
        this._respin_ban_2 = cc.find("reels_frame/respin_ban_2", this._slotsUI);
        this._bonusBg = cc.find("Canvas/safe_node/spr_bg_bonus");
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 5;
        this._row = 7;
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvGameAction, this);
        this.createReels(this._col);
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvGameAction, false, this);
      },
      enterGame: function enterGame(data, exitCallBack, isFrist) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._exitCallBack = exitCallBack;
              cc.vv.gameData.GetSlotsScript().node.active = false;
              Global.NmedusaGameControl.collectBonusControl.setGameUIVisible(false);
              _this2._bonusBg.active = true;
              _this2._gameUI.active = true;
              _this2.initData(data);
              Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.respin_bgm);
              _context.next = 9;
              return _this2.updateActive();

             case 9:
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _this2.sendSpinMsg();

             case 11:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      exitGame: function exitGame() {
        cc.vv.gameData.isFreeGame() ? Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm) : Global.SlotsSoundMgr.playNormalBgm(true);
        cc.vv.gameData.GetSlotsScript().node.active = true;
        cc.vv.gameData.isFreeGame() ? Global.NmedusaGameControl.collectBonusControl.setGameUIVisible(false) : Global.NmedusaGameControl.collectBonusControl.setGameUIVisible(true);
        this._bonusBg.active = false;
        this._gameUI.active = false;
        this._topAnimationNode.removeAllChildren();
        cc.vv.gameData.setIsBonusGame(false);
        cc.vv.gameData.GetSlotsScript().RestPrizePool();
      },
      getBonusWinCoin: function getBonusWinCoin() {
        return this._bonusWinCoin;
      },
      initData: function initData(data) {
        this._bonusWinCoin = 0;
        this._finishBonusData = data;
        this._spinUpNode.setPosition(cc.v2(0, UpSpinPosY[0]));
        this._spinUpBg.setPosition(cc.v2(0, UpSpinBgPosY[0]));
        this._respinRespinNode.active = true;
        this._respinRespinX.active = false;
        this._respinRowNode.active = true;
        this._respinRowspnX.active = false;
        this._respin_ban_1.active = true;
        this._respin_ban_2.active = true;
        var _iterator = _createForOfIteratorHelper(this._finishBonusData), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var bonusData = _step.value;
            var _iterator2 = _createForOfIteratorHelper(bonusData.reelData), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var reelData = _step2.value;
                var row = this._row - Math.floor((reelData.index - 1) / this._col) - 1;
                var col = (reelData.index - 1) % this._col;
                var reel = this._reels[col];
                var symbol = reel.GetSymbolByRow(row);
                if (symbol) {
                  symbol.ShowById(TypeID[reelData.type], reelData.coin);
                  symbol.playBonusIdleAnimation();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            this._bonusData = bonusData;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.updateSpinsNum(this._bonusData.resSpin);
      },
      updateActive: function updateActive() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
                  var multIndexs, rowIndexs, multNum, rowNum, isHave, bonusData, i, multIndex, _i, rowIndex, _iterator3, _step3, _bonusData;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      multIndexs = [];
                      rowIndexs = [];
                      multNum = 0;
                      rowNum = 0;
                      isHave = false;
                      if (!(1 === _this3._finishBonusData.length)) {
                        _context2.next = 29;
                        break;
                      }
                      bonusData = _this3._finishBonusData[0];
                      if (bonusData.mult.length > 0) {
                        multIndexs = bonusData.mult;
                        isHave = true;
                      }
                      if (bonusData.row.length > 0) {
                        rowIndexs = bonusData.row;
                        isHave = true;
                      }
                      multNum = bonusData.addMult;
                      rowNum = bonusData.addRow;
                      i = multIndexs.length - 1;

                     case 12:
                      if (!(i >= 0)) {
                        _context2.next = 19;
                        break;
                      }
                      multIndex = multIndexs[i];
                      _context2.next = 16;
                      return _this3.updateMult(multNum - i, [ multIndex ]);

                     case 16:
                      i--;
                      _context2.next = 12;
                      break;

                     case 19:
                      _i = rowIndexs.length - 1;

                     case 20:
                      if (!(_i >= 0)) {
                        _context2.next = 27;
                        break;
                      }
                      rowIndex = rowIndexs[_i];
                      _context2.next = 24;
                      return _this3.updateRows(rowNum - _i, [ rowIndex ]);

                     case 24:
                      _i--;
                      _context2.next = 20;
                      break;

                     case 27:
                      _context2.next = 33;
                      break;

                     case 29:
                      _iterator3 = _createForOfIteratorHelper(_this3._finishBonusData);
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                          _bonusData = _step3.value;
                          if (_bonusData.mult.length > 0) {
                            multIndexs = _bonusData.mult;
                            isHave = true;
                          }
                          if (_bonusData.row.length > 0) {
                            rowIndexs = _bonusData.row;
                            isHave = true;
                          }
                          multNum = _bonusData.addMult;
                          rowNum = _bonusData.addRow;
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                      _this3.initMult(multNum);
                      _this3.initRows(rowNum);

                     case 33:
                      if (!isHave) {
                        _context2.next = 36;
                        break;
                      }
                      _context2.next = 36;
                      return _this3.awaitTime(2);

                     case 36:
                      sucess();

                     case 37:
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
      createReels: function createReels(col) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this._slotsUI);
          var scp = node.addComponent("Nmedusa_BonusReel");
          scp.Init(i, 1, HolderCount[i], this._topAnimationNode);
          this._reels.push(scp);
        }
      },
      updateSpinsNum: function updateSpinsNum(num) {
        if (num > 0) {
          this._lastSpinNumLable.active = false;
          this._spinNumLable.active = true;
          var atlas = cc.vv.gameData.GetAtlasByName("base");
          cc.find("num", this._spinNumLable).getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme191_r_" + num);
          if (3 == num) {
            var liziSpine = cc.find("cssx", this._spinUpNode);
            liziSpine.active = true;
            var animation = liziSpine.getComponent(sp.Skeleton);
            animation.setAnimation(0, "animation", false);
            animation.setCompleteListener(function() {
              liziSpine.active = false;
            });
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.add_spin);
          }
        } else if (0 == num) {
          this._lastSpinNumLable.active = true;
          this._spinNumLable.active = false;
        } else {
          this._lastSpinNumLable.active = false;
          this._spinNumLable.active = false;
        }
      },
      updateMult: function updateMult(num, indexs) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
                  var atlas, _iterator4, _step4, _loop;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      atlas = cc.vv.gameData.GetAtlasByName("base");
                      _iterator4 = _createForOfIteratorHelper(indexs);
                      try {
                        _loop = function _loop() {
                          var idx = _step4.value;
                          var liziSpine = cc.find("lizi_mult_spine_" + idx, _this4.effectNodeInside);
                          liziSpine.active = true;
                          var animation = liziSpine.getComponent(sp.Skeleton);
                          animation.setAnimation(0, MultSpineConfig[idx], false);
                          animation.setCompleteListener(function() {
                            liziSpine.active = false;
                          });
                        };
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) _loop();
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                      if (!(indexs.length > 0)) {
                        _context4.next = 11;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fly_mul);
                      _context4.next = 7;
                      return _this4.awaitTime(1);

                     case 7:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.number);
                      _this4._respinMultActive.runAction(cc.sequence(cc.scaleTo(.3, .1), cc.callFunc(function() {
                        _this4._respinRespinNode.active = false;
                        _this4._respinRespinX.active = true;
                        _this4._respinRespinX.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme191_respin_" + num + "x");
                      }), cc.scaleTo(.3, 1)));
                      _context4.next = 11;
                      return _this4.awaitTime(.6);

                     case 11:
                      sucess();

                     case 12:
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
      initMult: function initMult(num) {
        if (num <= 0) return;
        var atlas = cc.vv.gameData.GetAtlasByName("base");
        this._respinRespinNode.active = false;
        this._respinRespinX.active = true;
        this._respinRespinX.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme191_respin_" + num + "x");
      },
      updateRows: function updateRows(num, indexs) {
        var _this5 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
            var atlas, idx, activeSpine, animation;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                atlas = cc.vv.gameData.GetAtlasByName("base");
                idx = indexs[0];
                _context6.next = 4;
                return new Promise(function(suc, fail) {
                  var liziSpine = cc.find("lizi_row_spine_" + idx + "_" + num, _this5.effectNodeInside);
                  liziSpine.active = true;
                  var animation = liziSpine.getComponent(sp.Skeleton);
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.fly_row);
                  animation.setAnimation(0, "animation1", false);
                  animation.setCompleteListener(function() {
                    liziSpine.active = false;
                    animation.setCompleteListener(null);
                    suc();
                  });
                });

               case 4:
                if (!(indexs.length > 0)) {
                  _context6.next = 19;
                  break;
                }
                activeSpine = cc.find("reels_frame/spine_node/active", _this5._slotsUI);
                activeSpine.active = true;
                animation = activeSpine.getComponent(sp.Skeleton);
                animation.setAnimation(0, "animation", false);
                animation.setCompleteListener(function() {
                  activeSpine.active = false;
                });
                _context6.next = 12;
                return _this5.awaitTime(.5);

               case 12:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.add_row);
                _this5._spinUpNode.runAction(cc.moveTo(.5, cc.v2(0, UpSpinPosY[num])));
                _this5._spinUpBg.runAction(cc.moveTo(.5, cc.v2(0, UpSpinBgPosY[num])));
                _context6.next = 17;
                return _this5.awaitTime(.8);

               case 17:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.number);
                _this5._respinRowActive.runAction(cc.sequence(cc.scaleTo(.3, .1), cc.callFunc(function() {
                  _this5._respinRowNode.active = false;
                  _this5._respinRowspnX.active = true;
                  _this5._respinRowspnX.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme191_respin_r" + num);
                }), cc.scaleTo(.3, 1)));

               case 19:
                sucess();

               case 20:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      initRows: function initRows(num) {
        if (num <= 0) return;
        var atlas = cc.vv.gameData.GetAtlasByName("base");
        this._respinRowNode.active = false;
        this._respinRowspnX.active = true;
        this._respinRowspnX.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme191_respin_r" + num);
        this._spinUpNode.y = UpSpinPosY[num];
        this._spinUpBg.y = UpSpinBgPosY[num];
      },
      showEndAnimation: function showEndAnimation() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  var bonusInfo, spineNode, animation, _iterator5, _step5, bonusData, _iterator6, _step6, reelData, row, col, symbol;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      bonusInfo = _this6._finishBonusData[_this6._finishBonusData.length - 1];
                      _this6._respin_ban_1.active = false;
                      _this6._respin_ban_2.active = false;
                      _this6.updateSpinsNum(-1);
                      if (!(bonusInfo.addMult > 1)) {
                        _context7.next = 18;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bigmul);
                      spineNode = cc.find("mult_and_spine", _this6.effectNodeInside);
                      spineNode.active = true;
                      animation = spineNode.getComponent(sp.Skeleton);
                      animation.setAnimation(0, "animation" + bonusInfo.addMult, false);
                      animation.setCompleteListener(function() {
                        spineNode.active = false;
                      });
                      _context7.next = 13;
                      return _this6.awaitTime(3);

                     case 13:
                      _iterator5 = _createForOfIteratorHelper(_this6._finishBonusData);
                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                          bonusData = _step5.value;
                          _iterator6 = _createForOfIteratorHelper(bonusData.reelData);
                          try {
                            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                              reelData = _step6.value;
                              row = _this6._row - Math.floor((reelData.index - 1) / _this6._col) - 1;
                              col = (reelData.index - 1) % _this6._col;
                              symbol = _this6.getSymbolTopAni(row, col);
                              symbol && (col > 0 && col < 4 ? function() {
                                reelData.coin = reelData.coin * bonusInfo.addMult;
                                var showNode = cc.find(cc.js.formatStr("fb_%s_%s", row, col), _this6.effectNodeInside);
                                if (showNode) {
                                  showNode.active = true;
                                  var showNodeAnimation = showNode.getComponent(sp.Skeleton);
                                  showNodeAnimation.setAnimation(0, "animation", false);
                                  showNodeAnimation.setCompleteListener(function() {
                                    showNodeAnimation.setCompleteListener(null);
                                    showNode.active = false;
                                  });
                                }
                                symbol.SetCoin(reelData.coin);
                                symbol.setMult(bonusInfo.addMult);
                              }() : symbol.ShowById(TypeID[reelData.type], reelData.coin));
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
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.mul_symbol);
                      _context7.next = 18;
                      return _this6.awaitTime(1);

                     case 18:
                      sucess();

                     case 19:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x7, _x8) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      settlement: function settlement() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              return _context10.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
                  var tempBonusData, _iterator7, _step7, bonusData, _iterator8, _step8, _reelData, _col, bonusInfo, _i2, _tempBonusData, reelData, row, col, symbol, currentCoin;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      tempBonusData = [];
                      _iterator7 = _createForOfIteratorHelper(_this7._finishBonusData);
                      try {
                        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                          bonusData = _step7.value;
                          _iterator8 = _createForOfIteratorHelper(bonusData.reelData);
                          try {
                            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                              _reelData = _step8.value;
                              _col = (_reelData.index - 1) % _this7._col;
                              _col > 0 && _col < 4 && tempBonusData.push(_reelData);
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
                      tempBonusData.sort(function(a, b) {
                        var row_a = _this7._row - Math.floor((a.index - 1) / _this7._col) - 1;
                        var col_a = (a.index - 1) % _this7._col;
                        var row_b = _this7._row - Math.floor((b.index - 1) / _this7._col) - 1;
                        var col_b = (b.index - 1) % _this7._col;
                        return col_a == col_b ? row_b - row_a : col_a - col_b;
                      });
                      bonusInfo = _this7._finishBonusData[_this7._finishBonusData.length - 1];
                      _i2 = 0, _tempBonusData = tempBonusData;

                     case 6:
                      if (!(_i2 < _tempBonusData.length)) {
                        _context9.next = 28;
                        break;
                      }
                      reelData = _tempBonusData[_i2];
                      row = _this7._row - Math.floor((reelData.index - 1) / _this7._col) - 1;
                      col = (reelData.index - 1) % _this7._col;
                      symbol = _this7.getSymbolTopAni(row, col);
                      if (symbol) {
                        symbol.ShowById(TypeID[reelData.type], reelData.coin);
                        symbol.setMult(bonusInfo.addMult);
                        symbol.setBonusMaskVisible(true);
                      }
                      _this7.playBaoAnimation(row, col);
                      if (!(reelData.type >= 1 && reelData.type <= 5)) {
                        _context9.next = 18;
                        break;
                      }
                      _context9.next = 16;
                      return cc.vv.gameData.getPopControl().showJackpotWinCoin(reelData.type, bonusInfo.addMult, reelData.coin);

                     case 16:
                      _context9.next = 20;
                      break;

                     case 18:
                      _context9.next = 20;
                      return _this7.playCollectAnimation(row, col);

                     case 20:
                      currentCoin = _this7._bottomScript.getCurrentWin();
                      _this7._bottomScript.ShowWin(currentCoin + reelData.coin, .8, null, null);
                      _this7.playBoomAnimation();
                      _context9.next = 25;
                      return _this7.awaitTime(1.8);

                     case 25:
                      _i2++;
                      _context9.next = 6;
                      break;

                     case 28:
                      sucess();

                     case 29:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x9, _x10) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      playCollectAnimation: function playCollectAnimation(nRow, nCol) {
        var _this8 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            var showNode, endPos, offX, animation;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                showNode = cc.find(cc.js.formatStr("sj_%s_%s", nRow, nCol), _this8.effectNode);
                if (showNode) {
                  Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.collect);
                  showNode.active = true;
                  endPos = _this8.effectNode.convertToNodeSpaceAR(cc.vv.gameData.GetBottomScript().getWinLabelNor().convertToWorldSpaceAR(cc.v2(0, 0)));
                  offX = endPos.x;
                  cc.tween(showNode).by(.5, {
                    x: offX
                  }).start();
                  animation = showNode.getComponent(sp.Skeleton);
                  animation.setCompleteListener(function() {
                    animation.setCompleteListener(null);
                    showNode.x -= offX;
                    showNode.active = false;
                    sucess();
                  });
                } else sucess();

               case 2:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      playBoomAnimation: function playBoomAnimation() {
        var showNode = cc.find("boom", this.effectNode);
        if (showNode) {
          showNode.active = true;
          var endPos = this.effectNode.convertToNodeSpaceAR(cc.vv.gameData.GetBottomScript().getWinLabelNor().convertToWorldSpaceAR(cc.v2(0, 0)));
          showNode.position = endPos;
          var animation = showNode.getComponent(sp.Skeleton);
          animation.setCompleteListener(function() {
            animation.setCompleteListener(null);
            showNode.active = false;
          });
        }
      },
      playBaoAnimation: function playBaoAnimation(nRow, nCol) {
        var showNode = cc.find("bonus_bao", this.effectNodeInside);
        if (showNode) {
          showNode.active = true;
          var reel = this._reels[nCol];
          var symbol = reel.GetSymbolByRow(nRow);
          if (symbol) {
            var wordPos = symbol.node.convertToWorldSpaceAR(cc.v2(0));
            showNode.position = this.effectNodeInside.convertToNodeSpaceAR(wordPos);
          }
          var animation = showNode.getComponent(sp.Skeleton);
          animation.setCompleteListener(function() {
            animation.setCompleteListener(null);
            showNode.active = false;
          });
        }
      },
      StartMove: function StartMove() {
        this._bonusData = null;
        this.MoveReels(this._reels);
        this._stopTime = this._cfg.auto_stop_time;
      },
      sendSpinMsg: function sendSpinMsg() {
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 1;
        cc.vv.NetManager.send(req);
        this.updateSpinsNum(this._bonusData.resSpin - 1);
        this.StartMove();
      },
      onRecvGameAction: function onRecvGameAction(msg) {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
          var reelData;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
             case 0:
              if (200 == msg.code && 1 == msg.data.rtype) {
                _this9._bonusWinCoin = msg.data.winCoin;
                _this9._bonusData = msg.data.bonusData;
                _this9._finishBonusData.push(_this9._bonusData);
                _this9._bottomScript.ShowBtnsByState("moveing_2");
                reelData = _this9.creatReelData(_this9._bonusData.reelData);
                _this9.SetSlotsResult(reelData);
                cc.vv.gameData.isFreeGame() || cc.vv.gameData.AddCoin(_this9._bonusWinCoin);
              }

             case 1:
             case "end":
              return _context12.stop();
            }
          }, _callee12);
        }))();
      },
      MoveReels: function MoveReels(arry) {
        this.moveReelLastIdx = -1;
        for (var i = 0; i < arry.length; i++) {
          var item = arry[i];
          item.StartMove();
          var idx = item.GetReelIdx();
          idx > this.moveReelLastIdx && (this.moveReelLastIdx = idx);
        }
      },
      StopMove: function StopMove() {
        this._stopTime = -1;
        this._bottomScript.ShowBtnsByState("moveing_1");
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          item.stopRightNow();
        }
      },
      creatReelData: function creatReelData(resultData) {
        var reelData = [];
        for (var index = 0; index < 35; index++) {
          var info = {};
          info.sid = 0;
          info.coin = 0;
          reelData.push(info);
        }
        var _iterator9 = _createForOfIteratorHelper(resultData), _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
            var _info = _step9.value;
            reelData[_info.index - 1].sid = TypeID[_info.type];
            reelData[_info.index - 1].coin = _info.coin;
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        return reelData;
      },
      SetSlotsResult: function SetSlotsResult(reelData) {
        var acRow = reelData.length / this._col;
        var reelResults = [];
        for (var i = 0; i < reelData.length; i++) {
          var col = i % this._col;
          var res = {};
          res.sid = reelData[i].sid;
          res.coin = reelData[i].coin;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].unshift(res);
        }
        for (var _i3 = 0; _i3 < this._reels.length; _i3++) {
          var item = this._reels[_i3];
          var reelRes = reelResults[_i3];
          item.SetResult(reelRes);
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          var multIndexs, rowIndexs, i, multIndex, _i4, rowIndex;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              _this10._bottomScript.ShowBtnsByState("moveing_1");
              multIndexs = [];
              rowIndexs = [];
              _this10._bonusData.mult.length > 0 && (multIndexs = _this10._bonusData.mult);
              _this10._bonusData.row.length > 0 && (rowIndexs = _this10._bonusData.row);
              _this10.updateSpinsNum(_this10._bonusData.resSpin);
              i = multIndexs.length - 1;

             case 7:
              if (!(i >= 0)) {
                _context13.next = 14;
                break;
              }
              multIndex = multIndexs[i];
              _context13.next = 11;
              return _this10.updateMult(_this10._bonusData.addMult - i, [ multIndex ]);

             case 11:
              i--;
              _context13.next = 7;
              break;

             case 14:
              _i4 = rowIndexs.length - 1;

             case 15:
              if (!(_i4 >= 0)) {
                _context13.next = 22;
                break;
              }
              rowIndex = rowIndexs[_i4];
              _context13.next = 19;
              return _this10.updateRows(_this10._bonusData.addRow - _i4, [ rowIndex ]);

             case 19:
              _i4--;
              _context13.next = 15;
              break;

             case 22:
              if (!_this10._bonusData.isEnd) {
                _context13.next = 36;
                break;
              }
              _context13.next = 25;
              return _this10.showEndAnimation();

             case 25:
              _context13.next = 27;
              return _this10.settlement();

             case 27:
              cc.vv.gameData.getPopControl().playSnakeAnimation();
              _context13.next = 30;
              return _this10.awaitTime(1);

             case 30:
              _this10.exitGame();
              _context13.next = 33;
              return _this10.awaitTime(2);

             case 33:
              _this10._exitCallBack && _this10._exitCallBack();
              _context13.next = 37;
              break;

             case 36:
              _this10.scheduleOnce(function() {
                _this10.sendSpinMsg();
              }, 1);

             case 37:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      getSymbolTopAni: function getSymbolTopAni(nRow, nCol) {
        var cfg = cc.vv.gameData.getGameCfg();
        var symScp = cfg.scripts.Symbols;
        var showNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", nRow, nCol), this._topAnimationNode);
        if (showNode) {
          showNode.active = true;
          return showNode.getComponent(symScp);
        }
        return null;
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx * nIter;
      },
      GetLastStopReelIdx: function GetLastStopReelIdx() {
        return this.moveReelLastIdx;
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) for (var i = 0; i < this._reels.length; i++) {
            var item = this._reels[i];
            var reelStopInterv = this.GetReelStopInter(i);
            item.StopMove(reelStopInterv);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Nmedusa_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b5841dGUgBIV7eppmCODaav", "Nmedusa_BonusReel");
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
      extends: cc.Component,
      properties: {
        _reelIdx: null,
        _holderCount: 0,
        _nCount: 0,
        _symbols: [],
        _symbolTemplete: null,
        _holderData: [],
        _bMoving: false,
        _bStoping: false,
        _holderOrigPosY: [],
        _curY: 0,
        _stopTime: 0,
        _result: null,
        totalAddHeight: 0,
        deltaHeight: 0,
        curAddHeight: 0,
        _fillCount: 0,
        _cloneResult: [],
        _topAniNode: null
      },
      Init: function Init(idx, nCount, holdCount, aniNode) {
        this._reelIdx = idx;
        this._holderCount = holdCount;
        this._nCount = nCount;
        this._symbols = [];
        this._topAniNode = aniNode;
        for (var index = 0; index < this._holderCount; index++) {
          var holdInfo = {};
          var mask = cc.find("mask_" + (index + 1), this.node);
          holdInfo.node = cc.find("holder", mask);
          holdInfo.OrigPosY = holdInfo.node.position.y;
          holdInfo.symbols = [];
          this._holderData.push(holdInfo);
        }
        this.LoadSymbols();
      },
      GetReelIdx: function GetReelIdx() {
        return this._reelIdx;
      },
      LoadSymbols: function LoadSymbols() {
        var cfg = cc.vv.gameData.getGameCfg();
        var url = cfg.symbolPrefab;
        this._symbolTemplete || (this._symbolTemplete = cc.vv.gameData.GetPrefabByName(url));
        for (var index = 0; index < this._holderData.length; index++) {
          var info = this._holderData[index];
          for (var i = 0; i < 2; i++) {
            var _cfg = cc.vv.gameData.getGameCfg();
            var node = cc.instantiate(this._symbolTemplete);
            node.parent = info.node;
            var scp = node.addComponent(_cfg.scripts.Symbols);
            var idx = i + 1;
            scp.Init(idx, this._topAniNode);
            scp.setBonusIndex(index);
            scp.SetSymbolReelIdx(this._reelIdx);
            scp.ShowRandomBonusSymbol(this._reelIdx, true);
            info.symbols.push(scp);
          }
          this.ReLayOut(info.symbols);
        }
      },
      ReLayOut: function ReLayOut(symbols) {
        for (var i = 0; i < symbols.length; i++) {
          var element = symbols[i];
          element.node.position = this.GetSymbolPosByRow(i);
          element.SetSymbolIdx(i);
        }
      },
      GetSymbolByRow: function GetSymbolByRow(row) {
        return this._holderData[row].symbols[0];
      },
      GetSymbolPosByRow: function GetSymbolPosByRow(row) {
        var cfg = cc.vv.gameData.getGameCfg();
        return cc.v2(0, (row + .5) * cfg.symbolSize.height);
      },
      StartMove: function StartMove() {
        this._result = null;
        var cfg = cc.vv.gameData.getGameCfg();
        this._curY = 0;
        this._bMoving = true;
        this._bStoping = false;
        this._fillCount = 0;
        var _iterator = _createForOfIteratorHelper(this._holderData), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var info = _step.value;
            var _iterator2 = _createForOfIteratorHelper(info.symbols), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var symbol = _step2.value;
                symbol.bonusStartMove();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._speed = cfg.speed;
        this._offset = cfg.symbolSize.height;
      },
      StopMove: function StopMove(delayTime) {
        if (this._bStoping) return;
        if (!this._bMoving) return;
        this._bStoping = true;
        this._stopTime = delayTime;
      },
      stopRightNow: function stopRightNow() {
        this._bStoping = true;
        this._stopTime = 0;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        var slots = cc.vv.gameData.getBonusControl();
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      SetResult: function SetResult(val) {
        this._result = val;
        this._cloneResult = Global.copy(this._result);
      },
      UpdatePosition: function UpdatePosition(dt) {
        this._stopTime = this._stopTime - dt;
        if (this._stopTime <= 0 && this._bStoping && this._result) {
          var cfg = cc.vv.gameData.getGameCfg();
          this._speed = Math.max(cfg.speed / 2, this._speed - cfg.speed * dt);
        }
        this._curY += dt * this._speed;
        if (this._curY > this._offset) {
          this._curY = 0;
          var _iterator3 = _createForOfIteratorHelper(this._holderData), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var info = _step3.value;
              info.node.y = info.OrigPosY;
              var sid = 0;
              var coin = null;
              if (this._stopTime <= 0 && this._bStoping && this._result) if (this._fillCount < this._holderCount) {
                var item = this._result.shift();
                sid = item.sid;
                coin = item.coin;
                this._fillCount++;
              } else this._bMoving = false;
              var symbol = info.symbols.shift();
              sid > 0 ? symbol.ShowById(sid, coin) : symbol.ShowRandomBonusSymbol(this._reelIdx, this._bStoping);
              info.symbols.push(symbol);
              this.ReLayOut(info.symbols);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          var _iterator4 = _createForOfIteratorHelper(this._holderData), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var _info = _step4.value;
              _info.node.y = _info.OrigPosY - this._curY;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        this._bMoving || this.OnReelBounsAction();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        var cfg = cc.vv.gameData.getGameCfg();
        var reelStopEffect = Global.SlotsSoundMgr.reel_stop;
        var _iterator5 = _createForOfIteratorHelper(this._cloneResult), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var info = _step5.value;
            var id = info.sid;
            cfg.symbol[id] && cfg.symbol[id].playBonusAudio && (reelStopEffect = Global.SlotsSoundMgr.bonus_stop);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        Global.SlotsSoundMgr.playEffect(reelStopEffect);
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        this.OnReelSpinEnd();
        for (var index = 0; index < this._holderData.length; index++) {
          var info = this._holderData[index];
          info.symbols[0].BonusStopMove();
        }
      },
      OnReelBounsAction: function OnReelBounsAction() {
        var cfg = cc.vv.gameData.getGameCfg();
        var distance = cfg.bounceInfo ? cfg.bounceInfo.distance : 30;
        var time = cfg.bounceInfo ? cfg.bounceInfo.time : .3;
        var _iterator6 = _createForOfIteratorHelper(this._holderData), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var info = _step6.value;
            cc.tween(info.node).to(distance / this._speed, {
              position: cc.v2(info.node.x, info.OrigPosY - distance)
            }).to(time, {
              position: cc.v2(info.node.x, info.OrigPosY)
            }).start();
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        cc.tween(this.node).delay(distance / this._speed).call(this.OnReelBounsActionDeep.bind(this)).delay(time).call(this.OnReelBounsActionEnd.bind(this)).start();
      },
      update: function update(dt) {
        this._bMoving && this.UpdatePosition(dt);
      }
    });
    cc._RF.pop();
  }, {} ],
  Nmedusa_Bottom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26522Hbc/xDWbyG4ewwI0la", "Nmedusa_Bottom");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Bottom_Base"),
      properties: {},
      OnClickStop: function OnClickStop() {
        if (cc.vv.gameData.isBonusGame()) {
          var slots = cc.vv.gameData.getBonusControl();
          slots.StopMove();
        } else {
          var _slots = cc.vv.gameData.GetSlotsScript();
          _slots.StopMove();
        }
      },
      OnClickAddBet: function OnClickAddBet() {
        this._super();
        Global.NmedusaGameControl.collectBonusControl.updataCollectState();
      },
      OnClickMinusBet: function OnClickMinusBet() {
        this._super();
        Global.NmedusaGameControl.collectBonusControl.updataCollectState();
      },
      OnClickMaxBet: function OnClickMaxBet() {
        this._super();
        Global.NmedusaGameControl.collectBonusControl.updataCollectState();
      },
      showTotalBet: function showTotalBet(isShow) {
        cc.find("totalBetBg", this.node).active = isShow;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Bottom_Base: void 0
  } ],
  Nmedusa_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4491Ys1g5KMq+0VEwvnFd5", "Nmedusa_Cfg");
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
        trigger_ani: {
          name: "animation1",
          zIndex: 400
        },
        isMask: true
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 3, {
        node: "s21",
        win_node: "w3",
        stop_ani: {
          name: "animation1_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation1_2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 400
        },
        playBonusAudio: true,
        coin: "coin"
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
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 21, {
        node: "s21",
        win_node: "w3",
        stop_ani: {
          name: "animation1_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation1_2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 400
        },
        playBonusAudio: true,
        coin: "coin"
      }), _defineProperty(_symbol, 22, {
        node: "s22",
        win_node: "w3",
        stop_ani: {
          name: "animation3_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation3_2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation3_3",
          zIndex: 400
        },
        playBonusAudio: true
      }), _defineProperty(_symbol, 23, {
        node: "s23",
        win_node: "w3",
        stop_ani: {
          name: "animation2_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation2_2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation2_3",
          zIndex: 400
        },
        playBonusAudio: true
      }), _defineProperty(_symbol, 24, {
        node: "s21",
        win_node: "w3",
        stop_ani: {
          name: "animation1_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation1_2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 400
        },
        playBonusAudio: true,
        mult: true,
        dataNode: "s24"
      }), _defineProperty(_symbol, 25, {
        node: "s21",
        win_node: "w3",
        stop_ani: {
          name: "animation1_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation1_2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 400
        },
        playBonusAudio: true,
        mult: true,
        dataNode: "s25"
      }), _defineProperty(_symbol, 26, {
        node: "s21",
        win_node: "w3",
        stop_ani: {
          name: "animation1_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation1_2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 400
        },
        playBonusAudio: true,
        mult: true,
        dataNode: "s26"
      }), _defineProperty(_symbol, 27, {
        node: "s21",
        win_node: "w3",
        stop_ani: {
          name: "animation1_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation1_2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 400
        },
        playBonusAudio: true,
        mult: true,
        dataNode: "s27"
      }), _defineProperty(_symbol, 28, {
        node: "s21",
        win_node: "w3",
        stop_ani: {
          name: "animation1_1",
          zIndex: 100
        },
        idle_ani: {
          name: "animation1_2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation1_3",
          zIndex: 400
        },
        playBonusAudio: true,
        mult: true,
        dataNode: "s28"
      }), _defineProperty(_symbol, 31, {
        node: "s31"
      }), _defineProperty(_symbol, 32, {
        node: "s32"
      }), _defineProperty(_symbol, 33, {
        node: "s33"
      }), _defineProperty(_symbol, 34, {
        node: "s34"
      }), _defineProperty(_symbol, 35, {
        node: "s35"
      }), _defineProperty(_symbol, 36, {
        node: "s36"
      }), _defineProperty(_symbol, 37, {
        node: "s37"
      }), _defineProperty(_symbol, 38, {
        node: "s38"
      }), _defineProperty(_symbol, 39, {
        node: "s39"
      }), _defineProperty(_symbol, 40, {
        node: "s40"
      }), _defineProperty(_symbol, 41, {
        node: "s41"
      }), _defineProperty(_symbol, 42, {
        node: "s42"
      }), _defineProperty(_symbol, 100, {
        node: "",
        random: true
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "Nmedusa_Bottom",
        Slots: "Nmedusa_Slots",
        Reels: "Nmedusa_Reel",
        Symbols: "Nmedusa_Symbol",
        Sound: "Nmedusa_Sound"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        width: 128,
        height: 107
      },
      scatterId: 2,
      AddAntiTime: 2,
      randomSymbols: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      randomBonusSymbols: [ [ 23, 31, 32, 33, 34 ], [ 21, 24, 25, 26, 27, 28, 35, 36, 37, 38, 35, 36, 37, 38, 35, 36, 37, 38 ], [ 21, 24, 25, 26, 27, 28, 35, 36, 37, 38, 35, 36, 37, 38, 35, 36, 37, 38 ], [ 21, 24, 25, 26, 27, 28, 35, 36, 37, 38, 35, 36, 37, 38, 35, 36, 37, 38 ], [ 22, 39, 40, 41, 42 ] ],
      randomNoBonusSymbols: [ [ 31, 32, 33, 34 ], [ 35, 36, 37, 38 ], [ 35, 36, 37, 38 ], [ 35, 36, 37, 38 ], [ 39, 40, 41, 42 ] ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounce: true,
      autoModelDelay: 1,
      normalBgm: "ngbgm",
      helpItems: [ "games/Nmedusa/prefab/LMSlots_Help_item1", "games/Nmedusa/prefab/LMSlots_Help_item2", "games/Nmedusa/prefab/LMSlots_Help_item3", "games/Nmedusa/prefab/LMSlots_Help_item4" ],
      commEffect: {
        path: "games/Nmedusa/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      bounceInfo: {
        distance: 30,
        time: .1
      },
      reelStateInfo: [ {
        id: [ 3, 21, 22, 23, 24, 25, 26, 27, 28 ],
        mini: 6,
        counts: [ 5, 5, 5, 5, 5 ],
        antiNode: "node_anti_bonus",
        path: "games/Nmedusa/",
        reelStopSound: "reel_stop",
        symbolStopSound: "bonus_notify",
        antSound: "anticipation",
        antSpeed: 2e3
      }, {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        freeNode: "node_free",
        path: "games/Nmedusa/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_notify",
        antSound: "anticipation",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Nmedusa_CollectBonusControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e59e91zH5N97rsDi+0SuJk", "Nmedusa_CollectBonusControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _gameUI: null,
        _collectAni: null,
        _itemNode: null,
        _itemList: [],
        _clickButton: null,
        _tips: null,
        _tipsClickButton: null,
        _num: 0,
        _needBet: 0
      },
      onLoad: function onLoad() {
        var _this = this;
        this._gameUI = cc.find("Game_UI", this.node);
        this._collectAni = cc.find("Game_UI/collect_ani", this.node);
        this._itemNode = cc.find("Game_UI/item_node", this.node);
        this._clickButton = cc.find("Game_UI/button", this.node);
        this._tipsClickButton = cc.find("Game_UI/buttonTips", this.node);
        for (var index = 1; index < 17; index++) {
          var item = cc.find("item_" + index, this._itemNode);
          this._itemList.push(item);
        }
        this._tips = cc.find("Game_UI/tips", this.node);
        this._clickButton.on("click", function() {
          if ("idle" != cc.vv.gameData.GetSlotState()) return;
          if (cc.vv.gameData.GetAutoModelTime() > 0) return;
          if (_this._needBet <= cc.vv.gameData._deskInfo.mults.length) {
            cc.vv.gameData.GetBottomScript().SetBetIdx(_this._needBet);
            _this.updataCollectState();
          }
          return true;
        });
        this._tipsClickButton.on("click", function() {
          var curmult = cc.vv.gameData.GetBetIdx();
          curmult >= _this._needBet && _this.showTips();
        });
      },
      setGameUIVisible: function setGameUIVisible(isVisible) {
        this._gameUI.active = isVisible;
      },
      initData: function initData() {
        this._num = cc.vv.gameData.bonusTrail.count;
        this._needBet = cc.vv.gameData._deskInfo.needBet;
        for (var index = 0; index < this._num; index++) 3 == index || 7 == index || 15 == index ? this._itemList[index].getComponent(sp.Skeleton).setAnimation(0, "animation3", true) : this._itemList[index].getChildByName("icon").active = true;
        var currBetIndex = cc.vv.gameData.GetBetIdx();
        if (currBetIndex >= this._needBet) {
          this._isLock = false;
          this.playMaskAnimation(1);
        } else {
          this._isLock = true;
          this.playMaskAnimation(3);
        }
      },
      showFreeGameCollect: function showFreeGameCollect(isShow) {
        if (isShow) {
          this.playMaskAnimation(4);
          if (4 === this._num || 8 === this._num) {
            cc.find("mage", this._collectAni).active = true;
            cc.find("super", this._collectAni).active = false;
          } else if (16 === this._num) {
            cc.find("mage", this._collectAni).active = false;
            cc.find("super", this._collectAni).active = true;
          }
        } else {
          16 == this._num && this.reSetCollect();
          if (this._isLock) this.playMaskAnimation(3); else {
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.shouji_unlock);
            this.playMaskAnimation(1);
          }
          cc.find("mage", this._collectAni).active = false;
          cc.find("super", this._collectAni).active = false;
        }
      },
      reSetCollect: function reSetCollect() {
        for (var index = 0; index < 16; index++) 3 == index || 7 == index || 15 == index ? this._itemList[index].getComponent(sp.Skeleton).setAnimation(0, "animation1", true) : this._itemList[index].getChildByName("icon").active = false;
        this._num = 0;
      },
      activeBonus: function activeBonus() {
        var currBetIndex = cc.vv.gameData.GetBetIdx();
        if (currBetIndex >= this._needBet) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.shouji_one);
          this._num++;
          if (4 == this._num || 8 == this._num || 16 == this._num) {
            this._itemList[this._num - 1].getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
            this._itemList[this._num - 1].getComponent(sp.Skeleton).addAnimation(0, "animation3", true);
          } else this._itemList[this._num - 1].getChildByName("icon").active = true;
        }
      },
      updataCollectState: function updataCollectState() {
        var currBetIndex = cc.vv.gameData.GetBetIdx();
        if (currBetIndex >= this._needBet) {
          if (this._isLock) {
            Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.shouji_unlock);
            this.playMaskAnimation(1);
          }
        } else if (!this._isLock) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.shouji_lock);
          this.playMaskAnimation(2);
        }
      },
      playMaskAnimation: function playMaskAnimation(type) {
        var _this2 = this;
        var spCollect = this._collectAni.getComponent(sp.Skeleton);
        this._collectAni.active = true;
        if (1 == type) {
          spCollect.setAnimation(0, "animation1", false);
          spCollect.setCompleteListener(null);
          this._isLock = false;
          this._clickButton.getComponent(cc.Button).interactable = false;
          this._itemNode.active = true;
        } else if (2 == type) {
          spCollect.setAnimation(0, "animation2", false);
          spCollect.addAnimation(0, "animation3", true);
          spCollect.setCompleteListener(function() {
            _this2._itemNode.active = false;
            spCollect.setCompleteListener(null);
          });
          this._isLock = true;
          this._clickButton.getComponent(cc.Button).interactable = true;
        } else if (3 == type) {
          spCollect.setAnimation(0, "animation3", true);
          spCollect.setCompleteListener(null);
          this._isLock = true;
          this._clickButton.getComponent(cc.Button).interactable = true;
          this._itemNode.active = false;
        } else if (4 == type) {
          spCollect.setAnimation(0, "animation4", true);
          spCollect.setCompleteListener(null);
          this._clickButton.getComponent(cc.Button).interactable = false;
          this._itemNode.active = false;
        }
      },
      showTips: function showTips() {
        var _this3 = this;
        if (!this._tips.active) {
          this._tips.active = true;
          this._tips.opacity = 0;
          cc.tween(this._tips).to(.5, {
            opacity: 255
          }).delay(2).to(.5, {
            opacity: 0
          }).delay(1).call(function() {
            _this3._tips.active = false;
          }).start();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Nmedusa_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3293/TyTxEaIJdPTA2llrl", "Nmedusa_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _bonusControl: null,
        _popControl: null,
        _isBonusGame: false,
        _isFreeGame: false,
        _isPlayingBgm: false,
        bonusTrail: null
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this._isFreeGame = this._deskInfo.restFreeCount > 0;
        this.bonusTrail = this._deskInfo.bonusTrail;
      },
      SetBonusControl: function SetBonusControl(cmp) {
        this._bonusControl = cmp;
      },
      getBonusControl: function getBonusControl() {
        return this._bonusControl;
      },
      SetPopControl: function SetPopControl(cmp) {
        this._popControl = cmp;
      },
      getPopControl: function getPopControl() {
        return this._popControl;
      },
      setIsBonusGame: function setIsBonusGame(isBonus) {
        this._isBonusGame = isBonus;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
      },
      setIsFreeGame: function setIsFreeGame(isFreeGame) {
        this._isFreeGame = isFreeGame;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      setPlayingBgm: function setPlayingBgm(isPlay) {
        this._isPlayingBgm = isPlay;
      },
      isPlayingBgm: function isPlayingBgm() {
        return this._isPlayingBgm;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Nmedusa_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d8c3XGjVxDHaWs1m60TjTH", "Nmedusa_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        collectBonusControl: {
          default: null,
          visible: false
        },
        superFreeGameWild: {
          default: null,
          visible: false
        }
      },
      InitCommComponent: function InitCommComponent() {
        this._super();
        var bonus_game = cc.find("safe_node/bonus_game", this.node);
        var script_respin_slots = bonus_game.getComponent("Nmedusa_BonusGame");
        cc.vv.gameData.SetBonusControl(script_respin_slots);
        var popup = cc.find("safe_node/node_pop_ui", this.node);
        var popupControl = popup.getComponent("Nmedusa_Pop");
        cc.vv.gameData.SetPopControl(popupControl);
        script_respin_slots.Init();
        popupControl.Init();
        this.collectBonusControl = cc.find("Canvas/safe_node/Collect_Bonus_UI").getComponent("Nmedusa_CollectBonusControl");
        this.superFreeGameWild = cc.find("Canvas/safe_node/superFreeGameWildRoot").getComponent("Nmedusa_SuperFreeGameWild");
        Global.NmedusaGameControl = this;
      },
      onDestroy: function onDestroy() {
        Global.NmedusaGameControl = null;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Nmedusa_Pop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "675454jy5dHcIxTBAbZndDK", "Nmedusa_Pop");
    "use strict";
    var _, _2, _3, _freeGameCountAnimati;
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
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var freeGameCountAnimation = (_freeGameCountAnimati = {}, _defineProperty(_freeGameCountAnimati, 10, (_ = {}, 
    _defineProperty(_, 1, {
      pop: "animation1",
      show: "animation1_1"
    }), _defineProperty(_, 2, {
      pop: "animation4",
      show: "animation4_4"
    }), _defineProperty(_, 3, {
      pop: "animation7",
      show: "animation7_7"
    }), _)), _defineProperty(_freeGameCountAnimati, 20, (_2 = {}, _defineProperty(_2, 1, {
      pop: "animation2",
      show: "animation2_2"
    }), _defineProperty(_2, 2, {
      pop: "animation5",
      show: "animation5_5"
    }), _defineProperty(_2, 3, {
      pop: "animation8",
      show: "animation8_8"
    }), _2)), _defineProperty(_freeGameCountAnimati, 30, (_3 = {}, _defineProperty(_3, 1, {
      pop: "animation3",
      show: "animation3_3"
    }), _defineProperty(_3, 2, {
      pop: "animation6",
      show: "animation6_6"
    }), _defineProperty(_3, 3, {
      pop: "animation9",
      show: "animation9_9"
    }), _3)), _freeGameCountAnimati);
    cc.Class({
      extends: cc.Component,
      properties: {
        logoMeidusha: {
          default: null,
          type: cc.Node
        },
        _popup: null,
        _snakeSpine: null,
        _meidushaSpine: null,
        _popBonus: null,
        _cfg: null,
        collectButton: {
          default: null,
          type: cc.Node
        },
        jpCoinLable: {
          default: null,
          type: cc.Node
        },
        _startAddFreeWinCoin: false,
        jpLabelBg: {
          default: [],
          type: cc.Node
        }
      },
      onLoad: function onLoad() {},
      Init: function Init() {
        this._cfg = cc.vv.gameData.getGameCfg();
        this._popup = cc.find("popup", this.node);
        this._popup.active = false;
        this._snakeSpine = cc.find("snake", this.node);
        this._snakeSpine.active = false;
        this._meidushaSpine = cc.find("meidusha", this.node);
        this._meidushaSpine.active = false;
        this._popBonus = cc.find("popup/popbonus", this.node);
        this._popBonus.active = false;
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showFreeGameTimes: function showFreeGameTimes(num, type) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
                  var show_popup, spine, startBtn, func;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      2 != type && Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_start_show);
                      _this2._popup.active = true;
                      show_popup = _this2._popup.getChildByName("show_free_games_time");
                      show_popup.active = true;
                      show_popup.setScale(.9);
                      spine = show_popup.getChildByName("spine");
                      spine.getComponent(sp.Skeleton).setAnimation(0, freeGameCountAnimation[num][type].pop, false);
                      spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                        spine.getComponent(sp.Skeleton).setCompleteListener(null);
                        spine.getComponent(sp.Skeleton).setAnimation(0, freeGameCountAnimation[num][type].show, true);
                      });
                      startBtn = show_popup.getChildByName("start");
                      func = function func() {
                        startBtn.getComponent(cc.Button).interactable = false;
                        show_popup.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
                          _this2._popup.active = false;
                          show_popup.active = false;
                          sucess();
                        })));
                      };
                      if (!(2 == type)) {
                        _context.next = 18;
                        break;
                      }
                      startBtn.active = false;
                      _context.next = 15;
                      return _this2.awaitTime(2);

                     case 15:
                      func();
                      _context.next = 27;
                      break;

                     case 18:
                      startBtn.active = true;
                      startBtn.setScale(0);
                      startBtn.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                      _context.next = 23;
                      return _this2.awaitTime(.5);

                     case 23:
                      startBtn.getComponent(cc.Button).interactable = true;
                      startBtn.off("click");
                      cc.vv.gameData.checkAutoPlay(startBtn, func);
                      startBtn.on("click", function() {
                        startBtn.stopAllActions();
                        func();
                      });

                     case 27:
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
      showFreeGameWinner: function showFreeGameWinner(num) {
        var _this3 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var show_popup, spine, startBtn, showLable, coinLable, func;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.free_dialog_collect_show);
                _this3._popup.active = true;
                show_popup = _this3._popup.getChildByName("show_free_games_win");
                show_popup.active = true;
                show_popup.setScale(.9);
                spine = show_popup.getChildByName("spine");
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation10", false);
                spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                  spine.getComponent(sp.Skeleton).setCompleteListener(null);
                  spine.getComponent(sp.Skeleton).setAnimation(0, "animation10_10", true);
                });
                startBtn = show_popup.getChildByName("start");
                startBtn.setScale(0);
                startBtn.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                showLable = cc.find("lable", show_popup);
                showLable.setScale(0);
                showLable.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                coinLable = cc.find("lable/coin", show_popup);
                coinLable.getComponent(cc.Label).string = "";
                _context3.next = 19;
                return _this3.awaitTime(.2);

               case 19:
                startBtn.runAction(cc.scaleTo(.6, 1).easing(cc.easeBackOut()));
                _this3._startAddFreeWinCoin = true;
                Global.doRoallNumEff(coinLable, 0, num, 2, function() {
                  _this3._startAddFreeWinCoin = false;
                }, null, 0, true);
                startBtn.getComponent(cc.Button).interactable = true;
                startBtn.off("click");
                func = function func() {
                  if (_this3._startAddFreeWinCoin) {
                    _this3._startAddFreeWinCoin = false;
                    coinLable.stopAllActions();
                    var winCoinLabel = coinLable.getComponent(cc.Label);
                    winCoinLabel.string = Global.FormatNumToComma(num);
                    return;
                  }
                  startBtn.getComponent(cc.Button).interactable = false;
                  show_popup.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
                    _this3._popup.active = false;
                    show_popup.active = false;
                    sucess();
                  })));
                };
                cc.vv.gameData.checkAutoPlay(startBtn, func);
                startBtn.on("click", function() {
                  startBtn.stopAllActions();
                  func();
                });

               case 27:
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
      showJackpotWinCoin: function showJackpotWinCoin(type, mult, coin) {
        var _this4 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var show_popup, spine, multRoot, i, element, multNode, _i, _element, name, func;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.jp_dialog_start_show);
                _this4._popup.active = true;
                show_popup = _this4._popup.getChildByName("show_jackpot_winCoin");
                show_popup.active = true;
                show_popup.setScale(.9);
                spine = show_popup.getChildByName("jp_tc_01");
                multRoot = show_popup.getChildByName("multRoot");
                for (i = 0; i < multRoot.children.length; i++) {
                  element = multRoot.children[i];
                  element.active = false;
                }
                if (mult > 1) {
                  multNode = cc.find("x" + mult, multRoot);
                  multNode && (multNode.active = true);
                }
                for (_i = 0; _i < _this4.jpLabelBg.length; _i++) {
                  _element = _this4.jpLabelBg[_i];
                  _element.active = type - 1 === _i;
                }
                name = "";
                _context4.t0 = type;
                _context4.next = 1 === _context4.t0 ? 14 : 2 === _context4.t0 ? 16 : 3 === _context4.t0 ? 18 : 4 === _context4.t0 ? 20 : 5 === _context4.t0 ? 22 : 24;
                break;

               case 14:
                name = "animation_mini_";
                return _context4.abrupt("break", 24);

               case 16:
                name = "animation_mlnor_";
                return _context4.abrupt("break", 24);

               case 18:
                name = "animation_major_";
                return _context4.abrupt("break", 24);

               case 20:
                name = "animation_grand_";
                return _context4.abrupt("break", 24);

               case 22:
                name = "animation_maxl_";
                return _context4.abrupt("break", 24);

               case 24:
                spine.getComponent(sp.Skeleton).setAnimation(0, name + 1, false);
                spine.getComponent(sp.Skeleton).addAnimation(0, name + 2, true);
                _this4._startAddFreeWinCoin = true;
                Global.doRoallNumEff(_this4.jpCoinLable, Math.floor(.1 * coin), coin, 2.5, function() {
                  _this4._startAddFreeWinCoin = false;
                }, null, 0, true);
                _context4.next = 30;
                return cc.vv.gameData.awaitTime(2.6);

               case 30:
                _this4.collectButton.getComponent(cc.Button).interactable = true;
                _this4.collectButton.off("click");
                func = function func() {
                  if (_this4._startAddFreeWinCoin) {
                    _this4._startAddFreeWinCoin = false;
                    _this4.jpCoinLable.stopAllActions();
                    var winCoinLabel = _this4.jpCoinLable.getComponent(cc.Label);
                    winCoinLabel.string = Global.FormatNumToComma(coin);
                    return;
                  }
                  _this4.collectButton.getComponent(cc.Button).interactable = false;
                  cc.tween(show_popup).to(.3, {
                    scale: 0
                  }).call(function() {
                    _this4._popup.active = false;
                    show_popup.active = false;
                    sucess();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(_this4.collectButton, func);
                _this4.collectButton.on("click", function() {
                  _this4.collectButton.stopAllActions();
                  func();
                });

               case 35:
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
      playMedusaAnimation: function playMedusaAnimation(callBack) {
        var _this5 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var animation;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.act1);
                _this5._meidushaSpine.active = true;
                _this5.logoMeidusha.active = false;
                animation = _this5._meidushaSpine.getComponent(sp.Skeleton);
                animation.setAnimation(0, "idle3", false);
                animation.setCompleteListener(function() {
                  _this5._meidushaSpine.active = false;
                  sucess();
                });
                _context5.next = 8;
                return _this5.awaitTime(1.5);

               case 8:
                _this5.logoMeidusha.active = true;
                callBack && callBack();

               case 10:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      playSnakeAnimation: function playSnakeAnimation() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var animation;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.act2);
              _this6._snakeSpine.active = true;
              animation = _this6._snakeSpine.getComponent(sp.Skeleton);
              animation.setAnimation(0, "animation", false);
              animation.setCompleteListener(function() {
                _this6._snakeSpine.active = false;
              });

             case 6:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      playPopBonus: function playPopBonus() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var animation;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.respin_dialog_start_show);
              _this7._popup.active = true;
              _this7._popBonus.active = true;
              animation = _this7._popBonus.getComponent(sp.Skeleton);
              animation.setAnimation(0, "animation", false);
              animation.setCompleteListener(function() {
                _this7._popBonus.active = false;
                _this7._popup.active = false;
              });

             case 6:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Nmedusa_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fde0JNwMxM3rBKKu+vsMdw", "Nmedusa_Reel");
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
      SetResult: function SetResult(val) {
        this._super(val);
        if (0 == this._reelIdx || 4 == this._reelIdx) {
          this._originResult.pop();
          this._result.pop();
        }
      },
      playAntiAnimation: function playAntiAnimation() {
        var isPlayAniti = false;
        var cfg = cc.vv.gameData.getGameCfg();
        var isFree = cc.vv.gameData.isFreeGame();
        if (cfg.reelStateInfo && cfg.reelStateInfo[0]) {
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              if (info.isAnt && info.antiNode) {
                isFree && info.freeNode ? this.ShowAntiEffect(true, info.freeNode) : this.ShowAntiEffect(true, info.antiNode);
                cc.vv.AudioManager.playEff(info.path, info.antSound, true);
                var cfgAntSpeed = info.antSpeed;
                cfgAntSpeed && (cfgAntSpeed *= this.GetTimeScale());
                this._speed = cfgAntSpeed || this._speed;
                isPlayAniti = true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return isPlayAniti;
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          var cfg = cc.vv.gameData.getGameCfg();
          if (cfg.reelStateInfo) {
            var _iterator2 = _createForOfIteratorHelper(cfg.reelStateInfo), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var info = _step2.value;
                var node = cc.find("mask/" + info.antiNode, this.node);
                if (node && node.active) {
                  node.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
                var nodeFree = cc.find("mask/" + info.freeNode, this.node);
                if (nodeFree && nodeFree.active) {
                  nodeFree.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } else {
          var _node = cc.find("mask/" + name, this.node);
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Nmedusa_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2cebifJF5ESKu5URYVcVU5", "Nmedusa_Slots");
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
    var TypeID = [ 21, 28, 27, 26, 24, 25, 23, 22 ];
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _isSuperBonus: false,
        _canStopSlots: false,
        _prizePool: []
      },
      Init: function Init() {
        var prizePool = cc.find("LMSlots_PrizePool_1", this.node.parent);
        for (var i = 0; i < prizePool.children.length; i++) {
          var element = prizePool.children[i];
          var script = element.getComponent("LMSlotMachine_PrizePool");
          this._prizePool[script.dataType] = script;
        }
        this._super();
        this.playMedusaAnimation(1);
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      createReels: function createReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent(reelCmp);
          0 == i || 4 == i ? scp.Init(i, row - 1, this._topAniNode) : scp.Init(i, row, this._topAniNode);
          this._reels.push(scp);
        }
      },
      StartMove: function StartMove() {
        this._super();
        Global.SlotsSoundMgr.playNormalBgm();
        Global.NmedusaGameControl.superFreeGameWild.show();
        this._isSuperBonus || Global.NmedusaGameControl.superFreeGameWild.clearWild();
        this._canStopSlots = false;
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._super(msg);
              _this2._gameInfo.freeResult && _this2._gameInfo.freeResult.freeInfo && _this2._gameInfo.freeResult.freeInfo.idxs && _this2.playActive(true);
              _this2._gameInfo.allBonusData && _this2._gameInfo.allBonusData.length > 0 && _this2.playActive(true);
              if (!cc.vv.gameData.isFreeGame()) {
                _context.next = 9;
                break;
              }
              if (!(_this2._gameInfo.bonusTrail.count === _this2._gameInfo.bonusTrail.megaIdx[0] || _this2._gameInfo.bonusTrail.count === _this2._gameInfo.bonusTrail.megaIdx[1] || _this2._gameInfo.bonusTrail.count === _this2._gameInfo.bonusTrail.superBonus[0])) {
                _context.next = 9;
                break;
              }
              _context.next = 7;
              return _this2.playSuperBonusStartAnimation();

             case 7:
              _context.next = 9;
              return Global.NmedusaGameControl.superFreeGameWild.showSuperBonus(_this2._gameInfo.bonusTrail.info.currWildIdxs);

             case 9:
              _this2._canStopSlots = true;

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        this._gameInfo.roundBonus;
        var cardsInfo = [];
        for (var i = 0; i < cards.length; i++) {
          var info = {};
          info.id = cards[i];
          info.data = 0;
          cardsInfo.push(info);
        }
        var _iterator = _createForOfIteratorHelper(this._gameInfo.roundBonus), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var bonusInfo = _step.value;
            cardsInfo[bonusInfo.index - 1].data = bonusInfo.coin;
            cardsInfo[bonusInfo.index - 1].id = TypeID[bonusInfo.type];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var _i = 0; _i < cardsInfo.length; _i++) {
          var id = cardsInfo[_i].id;
          var row = Math.floor(_i / acRow);
          var col = _i % this._col;
          if (this._cfg.symbol[id]) {
            var res = {};
            res.sid = id;
            res.data = cardsInfo[_i].data;
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) {
          var item = this._reels[_i2];
          var reelRes = reelResults[_i2];
          item.SetResult(reelRes);
        }
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, currentCoin, bonusWinCoin;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._bottomScript.ShowBtnsByState("moveing_1");
              Global.NmedusaGameControl.superFreeGameWild.hide();
              _this3.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              if (!(cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime())) {
                _context2.next = 9;
                break;
              }
              _context2.next = 7;
              return _this3.ShowWinCoin(nWin, cc.vv.gameData.GetGameTotalFreeWin(), false);

             case 7:
              _context2.next = 11;
              break;

             case 9:
              _context2.next = 11;
              return _this3.ShowWinCoin(nWin, nWin, true);

             case 11:
              if (!(_this3._gameInfo.freeResult && _this3._gameInfo.freeResult.freeInfo && _this3._gameInfo.freeResult.freeInfo.idxs)) {
                _context2.next = 20;
                break;
              }
              _this3.playActive(false);
              if (!_this3._gameInfo.freeResult.isFreeState) {
                _context2.next = 18;
                break;
              }
              _context2.next = 16;
              return _this3.CheckFreeEnterFreeGame();

             case 16:
              _context2.next = 20;
              break;

             case 18:
              _context2.next = 20;
              return _this3.CheckEnterFreeGame();

             case 20:
              if (!(_this3._gameInfo.allBonusData && _this3._gameInfo.allBonusData.length > 0)) {
                _context2.next = 29;
                break;
              }
              _this3.playActive(false);
              _this3.PausePrizePool(_this3._gameInfo.jackpotValues);
              _context2.next = 25;
              return _this3.CheckTriggerSubGame();

             case 25:
              currentCoin = _this3._bottomScript.getCurrentWin();
              bonusWinCoin = cc.vv.gameData.getBonusControl().getBonusWinCoin();
              _context2.next = 29;
              return _this3.ShowWinCoin(bonusWinCoin, currentCoin, true);

             case 29:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context2.next = 34;
                break;
              }
              _context2.next = 32;
              return _this3.CheckExitFreeGame();

             case 32:
              _context2.next = 34;
              return _this3.ShowWinCoin(_this3._bottomScript.getCurrentWin(), _this3._bottomScript.getCurrentWin(), true);

             case 34:
              _this3.CanDoNextRound();

             case 35:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      ShowWinCoin: function ShowWinCoin(nAddWin, nTotalWin, bUpdateBalance) {
        var _this4 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _this4.ShowBottomWin(nAddWin, nTotalWin, bUpdateBalance, sucess);

               case 1:
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
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      cc.vv.gameData.setIsFreeGame(false);
                      _context4.next = 3;
                      return cc.vv.gameData.getPopControl().showFreeGameWinner(cc.vv.gameData.GetGameTotalFreeWin());

                     case 3:
                      _context4.next = 5;
                      return cc.vv.gameData.getPopControl().playMedusaAnimation(function() {
                        _this5.playMedusaAnimation(1);
                        _this5.ShowGameview(false);
                        Global.NmedusaGameControl.collectBonusControl.showFreeGameCollect(false);
                        Global.NmedusaGameControl.superFreeGameWild.clearWild();
                        _this5.Resume();
                      });

                     case 5:
                      Global.SlotsSoundMgr.playNormalBgm(true);
                      sucess();

                     case 7:
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
      CheckFreeEnterFreeGame: function CheckFreeEnterFreeGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  var _iterator2, _step2, id, symbol;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                      _iterator2 = _createForOfIteratorHelper(_this6._gameInfo.freeResult.freeInfo.idxs);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          id = _step2.value;
                          symbol = _this6.GetSymbolByIdx(id);
                          symbol && symbol.playWinAnimation();
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context6.next = 5;
                      return _this6.awaitTime(2.5);

                     case 5:
                      _context6.next = 7;
                      return cc.vv.gameData.getPopControl().showFreeGameTimes(_this6._gameInfo.freeResult.freeInfo.freeCnt, 2);

                     case 7:
                      sucess();

                     case 8:
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
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
                  var _iterator3, _step3, id, symbol, winType;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                      _iterator3 = _createForOfIteratorHelper(_this7._gameInfo.freeResult.freeInfo.idxs);
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                          id = _step3.value;
                          symbol = _this7.GetSymbolByIdx(id);
                          symbol && symbol.playWinAnimation();
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                      Global.NmedusaGameControl.collectBonusControl.activeBonus();
                      _this7.Backup();
                      _context8.next = 7;
                      return _this7.awaitTime(1.5);

                     case 7:
                      cc.vv.gameData.setIsFreeGame(true);
                      winType = 1;
                      _this7._gameInfo.bonusTrail.count !== _this7._gameInfo.bonusTrail.megaIdx[0] && _this7._gameInfo.bonusTrail.count !== _this7._gameInfo.bonusTrail.megaIdx[1] && _this7._gameInfo.bonusTrail.count !== _this7._gameInfo.bonusTrail.superBonus[0] || (winType = 3);
                      _context8.next = 12;
                      return cc.vv.gameData.getPopControl().showFreeGameTimes(_this7._gameInfo.freeResult.freeInfo.freeCnt, winType);

                     case 12:
                      _context8.next = 14;
                      return cc.vv.gameData.getPopControl().playMedusaAnimation(function() {
                        _this7.playMedusaAnimation(3);
                        Global.NmedusaGameControl.collectBonusControl.showFreeGameCollect(true);
                        _this7.ShowGameview(true);
                      });

                     case 14:
                      Global.SlotsSoundMgr.playBgm(Global.SlotsSoundMgr.free_bgm);
                      sucess();

                     case 16:
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
      CheckTriggerSubGame: function CheckTriggerSubGame() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
                  var _iterator4, _step4, info, symbol;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                      _iterator4 = _createForOfIteratorHelper(_this8._gameInfo.roundBonus);
                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                          info = _step4.value;
                          symbol = _this8.GetSymbolByIdx(info.index);
                          symbol && symbol.playTriggerAnimation();
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                      cc.vv.gameData.isFreeGame() || _this8._bottomScript.DoHideWinAction();
                      _context10.next = 6;
                      return _this8.awaitTime(1.5);

                     case 6:
                      cc.vv.gameData.setIsBonusGame(true);
                      cc.vv.gameData.getPopControl().playPopBonus();
                      _context10.next = 10;
                      return _this8.awaitTime(4);

                     case 10:
                      cc.vv.gameData.getPopControl().playSnakeAnimation();
                      _context10.next = 13;
                      return _this8.awaitTime(1);

                     case 13:
                      cc.vv.gameData.getBonusControl().enterGame(_this8._gameInfo.allBonusData, sucess, true);

                     case 14:
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
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          this._bottomScript.SetWin(nTotal);
        } else this._bottomScript.ShowFreeModel(false);
        var bonusTrail = cc.vv.gameData.getDeskInfo().bonusTrail;
        this._gameInfo && (bonusTrail = this._gameInfo.bonusTrail);
        Global.NmedusaGameControl.collectBonusControl.setGameUIVisible(!bFree);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        var normalBonus = cc.find("Canvas/safe_node/spr_bg_bonus");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          if (bonusTrail.count === bonusTrail.superBonus[0]) {
            normalFree.active = false;
            normalBonus.active = bFree;
          } else {
            normalFree.active = bFree;
            normalBonus.active = false;
          }
        }
        if (bFree) {
          if (bonusTrail.count === bonusTrail.superBonus[0]) {
            this._isSuperBonus = true;
            if (bFree) {
              Global.NmedusaGameControl.superFreeGameWild.show();
              Global.NmedusaGameControl.superFreeGameWild.recaveryWild(bonusTrail.info.wildIdxs);
            }
          } else this._isSuperBonus = false;
          bonusTrail.count !== bonusTrail.megaIdx[0] && bonusTrail.count !== bonusTrail.megaIdx[1] && bonusTrail.count !== bonusTrail.superBonus[0] || this._bottomScript.showTotalBet(false);
        } else this._bottomScript.showTotalBet(true);
      },
      ReconnectShow: function ReconnectShow() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          var currentCoin, bonusWinCoin;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              _this9.ShowGameview(cc.vv.gameData.isFreeGame());
              Global.NmedusaGameControl.collectBonusControl.initData();
              Global.NmedusaGameControl.collectBonusControl.showFreeGameCollect(cc.vv.gameData.isFreeGame());
              cc.vv.gameData.isFreeGame() ? _this9.playMedusaAnimation(3) : _this9.playMedusaAnimation(1);
              if (!(cc.vv.gameData.getDeskInfo().allBonusData && cc.vv.gameData.getDeskInfo().allBonusData.length > 0)) {
                _context13.next = 12;
                break;
              }
              _this9.PausePrizePool(cc.vv.gameData.getDeskInfo().jackpotValues);
              _context13.next = 8;
              return new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      _this9._bottomScript.ShowBtnsByState("moveing_1");
                      cc.vv.gameData.setIsBonusGame(true);
                      cc.vv.gameData.getBonusControl().enterGame(cc.vv.gameData.getDeskInfo().allBonusData, sucess, false);

                     case 3:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function(_x11, _x12) {
                  return _ref6.apply(this, arguments);
                };
              }());

             case 8:
              currentCoin = _this9._bottomScript.getCurrentWin();
              bonusWinCoin = cc.vv.gameData.getBonusControl().getBonusWinCoin();
              _context13.next = 12;
              return _this9.ShowWinCoin(bonusWinCoin, currentCoin, true);

             case 12:
              _this9.CanDoNextRound();

             case 13:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      playMedusaAnimation: function playMedusaAnimation(type) {
        var _this10 = this;
        var medusaRole = cc.find("Canvas/safe_node/slots/role/spine_role");
        if (1 == type) {
          var animation = medusaRole.getComponent(sp.Skeleton);
          animation.setAnimation(0, "idle", true);
        } else if (2 == type) ; else if (3 == type) {
          var _animation = medusaRole.getComponent(sp.Skeleton);
          _animation.setAnimation(0, "idle", true);
          this.scheduleOnce(function() {
            _this10.playMedusaAnimation(4);
          }, 6.6);
        } else if (4 == type) {
          Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.flash);
          var _animation2 = medusaRole.getComponent(sp.Skeleton);
          _animation2.setAnimation(0, "skill", false);
          _animation2.setCompleteListener(function() {
            _this10.playMedusaAnimation(1);
            _animation2.setCompleteListener(null);
          });
        }
      },
      playActive: function playActive(isActive) {
        var bg_mask = cc.find("Canvas/safe_node/spr_bg_mask");
        var active_spine_2 = cc.find("Canvas/safe_node/active_spine_2");
        if (isActive) {
          active_spine_2.active = true;
          bg_mask.active = true;
          bg_mask.runAction(cc.fadeTo(1, 180));
          var animation_2 = active_spine_2.getComponent(sp.Skeleton);
          animation_2.setAnimation(0, "animation", true);
        } else {
          active_spine_2.active = false;
          bg_mask.runAction(cc.fadeOut(.5));
        }
      },
      playSuperBonusStartAnimation: function playSuperBonusStartAnimation() {
        var _this11 = this;
        return new Promise(function(sucess, failed) {
          _this11.unscheduleAllCallbacks();
          var medusaRole = cc.find("Canvas/safe_node/slots/role/spine_role");
          var animation = medusaRole.getComponent(sp.Skeleton);
          animation.setAnimation(0, "jineng", false);
          animation.setCompleteListener(function() {
            _this11.playMedusaAnimation(1);
            animation.setCompleteListener(null);
            sucess();
          });
        });
      },
      CanStopSlot: function CanStopSlot() {
        return this._canStopSlots;
      },
      PausePrizePool: function PausePrizePool(jackpotValues) {
        for (var i = 0; i < jackpotValues.length; i++) {
          var element = jackpotValues[i];
          this._prizePool[i].PausePrizePool(element);
        }
      },
      RestPrizePool: function RestPrizePool() {
        for (var i = 0; i < this._prizePool.length; i++) this._prizePool[i].RestPrizePool();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Nmedusa_Sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e756goKHVC6bCDE6mFaCvl", "Nmedusa_Sound");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Sound"),
      properties: {
        soundPath: {
          default: "games/Nmedusa/",
          override: true
        },
        base_bgm: "ngbgm",
        reel_stop: "reel_stop",
        scatter_stop: "scatter_notify",
        bonus_stop: "bonus_notify",
        scatter_ant: "anticipation",
        bonus_ant: "anticipation",
        act1: "act1",
        act2: "act2",
        bell: "bell",
        flash: "flash",
        shouji_lock: "shouji_lock",
        shouji_one: "shouji_one",
        shouji_unlock: "shouji_unlock",
        wild: "wild",
        win1: "win1",
        win2: "win2",
        free_bgm: "fg_bgm",
        free_dialog_collect_show: "free_dialog_collect_show",
        free_dialog_start_show: "free_dialog_start_show",
        add_row: "add_row",
        add_spin: "add_spin",
        bigmul: "bigmul",
        collect: "collect",
        fly_mul: "fly_mul",
        fly_row: "fly_row",
        jp_dialog_start_show: "jp_dialog_start_show",
        mul_symbol: "mul_symbol",
        number: "number",
        respin_bgm: "GG_bgm_free",
        respin_dialog_start_show: "respin_dialog_start_show"
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Sound: void 0
  } ],
  Nmedusa_SuperFreeGameWild: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c50d+d0O5Fg6eWo7sFWsfl", "Nmedusa_SuperFreeGameWild");
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
    var distance = 420;
    cc.Class({
      extends: cc.Component,
      properties: {
        wildLianXian: {
          default: null,
          type: cc.Node
        },
        _wildList: []
      },
      onLoad: function onLoad() {
        this.hide();
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      show: function show() {
        this.node.active = true;
      },
      hide: function hide() {
        this.node.active = false;
      },
      showWild: function showWild(index) {
        var _this2 = this;
        return new Promise(function(sucess, falied) {
          _this2.wildLianXian.active = true;
          var startPos = _this2.wildLianXian.position;
          var col = (index - 1) % cc.vv.gameData._cfg.col;
          var row = cc.vv.gameData._cfg.row - Math.floor((index - 1) / cc.vv.gameData._cfg.col) - 1;
          var wildRoot = _this2.node.getChildByName("node" + col + "_" + row);
          var finalPosition = wildRoot.position;
          var dirVec = finalPosition.sub(startPos);
          var comVec = new cc.Vec2(0, -1);
          var radian = cc.v2(dirVec.x, dirVec.y).signAngle(comVec);
          var degree = cc.misc.radiansToDegrees(radian);
          var length = dirVec.mag();
          _this2.wildLianXian.angle = -degree;
          _this2.wildLianXian.scaleY = length / distance;
          var lianxianSp = _this2.wildLianXian.getComponent(sp.Skeleton);
          lianxianSp.setAnimation(0, "animation", false);
          lianxianSp.setCompleteListener(function() {
            _this2.wildLianXian.active = false;
            lianxianSp.setCompleteListener(null);
            if (_this2._wildList[index]) {
              _this2._wildList[index].playTriggerAnimation();
              sucess();
            } else {
              var wildNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(cc.vv.gameData._cfg.symbolPrefab));
              _this2._wildList[index] = wildNode.addComponent(cc.vv.gameData._cfg.scripts.Symbols);
              wildNode.parent = wildRoot;
              wildNode.position = cc.v2(0, 0);
              _this2._wildList[index].ShowById(1);
              _this2._wildList[index].playTriggerAnimation();
              sucess();
            }
          });
        });
      },
      clearWild: function clearWild() {
        for (var key in this._wildList) if (this._wildList.hasOwnProperty(key)) {
          var element = this._wildList[key];
          element.node.parent = null;
        }
        this._wildList = [];
      },
      showSuperBonus: function showSuperBonus(indexs) {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, falied) {
            var i, element;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                i = 0;

               case 1:
                if (!(i < indexs.length)) {
                  _context.next = 10;
                  break;
                }
                element = indexs[i];
                _context.next = 5;
                return _this3.showWild(element);

               case 5:
                _context.next = 7;
                return _this3.awaitTime(.2);

               case 7:
                i++;
                _context.next = 1;
                break;

               case 10:
                sucess();

               case 11:
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
      recaveryWild: function recaveryWild(indexs) {
        this.clearWild();
        for (var i = 0; i < indexs.length; i++) {
          var element = indexs[i];
          var col = (element - 1) % cc.vv.gameData._cfg.col;
          var row = cc.vv.gameData._cfg.row - Math.floor((element - 1) / cc.vv.gameData._cfg.col) - 1;
          var wildRoot = this.node.getChildByName("node" + col + "_" + row);
          if (!this._wildList[element]) {
            var wildNode = cc.instantiate(cc.vv.gameData.GetPrefabByName(cc.vv.gameData._cfg.symbolPrefab));
            this._wildList[element] = wildNode.addComponent(cc.vv.gameData._cfg.scripts.Symbols);
            wildNode.parent = wildRoot;
            wildNode.position = cc.v2(0, 0);
            this._wildList[element].ShowById(1);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Nmedusa_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99bdbvr7vtOxJcYrc1qKagK", "Nmedusa_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _bonusIndex: 0
      },
      Init: function Init(idx, node) {
        this._topAniNode = node;
        this.SetSymbolIdx(idx);
        this.ShowFristRandomSymbol();
      },
      setBonusIndex: function setBonusIndex(index) {
        this._bonusIndex = index;
      },
      ShowFristRandomSymbol: function ShowFristRandomSymbol() {
        var randMult = [ .5, 1, 2, 3, 4, 10, 20 ];
        var randomSymbols = [ 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
        var multIndex = Global.random(1, randMult.length);
        var mult = randMult[multIndex - 1];
        var coin = cc.vv.gameData.GetTotalBet() * mult;
        var randIdx = Global.random(1, randomSymbols.length);
        var randVal = randomSymbols[randIdx - 1];
        this.ShowById(randVal, coin);
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var randMult = [ .5, 1, 2, 3, 4, 10, 20 ];
        var randomSymbols = [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 23, 24, 25, 26, 27, 28 ];
        var multIndex = Global.random(1, randMult.length);
        var mult = randMult[multIndex - 1];
        var coin = cc.vv.gameData.GetTotalBet() * mult;
        var randIdx = Global.random(1, randomSymbols.length);
        var randVal = randomSymbols[randIdx - 1];
        this.ShowById(randVal, coin);
        this.setMaskVisible(true);
      },
      ShowRandomBonusSymbol: function ShowRandomBonusSymbol(reelIndex, isNoBonus) {
        var randMult = [ .5, 1, 2, 3, 4, 10, 20 ];
        var multIndex = Global.random(1, randMult.length);
        var mult = randMult[multIndex - 1];
        var coin = cc.vv.gameData.GetTotalBet() * mult;
        var cfg = cc.vv.gameData.getGameCfg();
        var randomBonus = isNoBonus ? cfg.randomNoBonusSymbols : cfg.randomBonusSymbols;
        var randIdx = Global.random(1, randomBonus[reelIndex].length);
        var randVal = randomBonus[reelIndex][randIdx - 1];
        this.ShowById(randVal, coin);
      },
      ShowById: function ShowById(id, data) {
        this._id = id;
        this._data = data;
        this._state = "normal";
        this._showNode && (this._showNode.active = false);
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].node) {
          this._showNode = cc.find(cfg.symbol[id].node, this.node);
          this._showNode.color = cc.Color.WHITE;
          this._showNode.active = true;
          if (cfg.symbol[this._id].mult) {
            cc.find("s24", this.node).active = false;
            cc.find("s25", this.node).active = false;
            cc.find("s26", this.node).active = false;
            cc.find("s27", this.node).active = false;
            cc.find("s28", this.node).active = false;
            var node = cc.find(cfg.symbol[this._id].dataNode, this.node);
            node.active = true;
            var jp = cc.find("jp", node);
            jp && (jp.active = true);
            var multNode = cc.find("mult", node);
            if (multNode) {
              multNode.active = false;
              cc.find("s_2x", multNode).active = false;
              cc.find("s_3x", multNode).active = false;
              cc.find("s_4x", multNode).active = false;
            }
          } else {
            cc.find("s24", this.node).active = false;
            cc.find("s25", this.node).active = false;
            cc.find("s26", this.node).active = false;
            cc.find("s27", this.node).active = false;
            cc.find("s28", this.node).active = false;
          }
        } else console.log("\u672a\u627e\u5230\u914d\u7f6eid:" + id);
        var coinLable = cc.find("coin", this.node);
        if (cfg.symbol[id].coin) {
          coinLable.active = true;
          coinLable.getComponent(cc.Label).string = Global.convertNumToShort(this._data, 1e3, 0, null, 1e3);
        } else coinLable.active = false;
      },
      SetCoin: function SetCoin(coin) {
        this._data = coin;
        var cfg = cc.vv.gameData.getGameCfg();
        var coinLable = cc.find("coin", this.node);
        if (cfg.symbol[this._id].coin) {
          coinLable.active = true;
          coinLable.getComponent(cc.Label).string = Global.convertNumToShort(this._data, 1e3, 0, null, 1e3);
        } else coinLable.active = false;
      },
      setMult: function setMult(mult) {
        if (2 === mult || 3 === mult || 4 === mult) {
          var cfg = cc.vv.gameData.getGameCfg();
          if (cfg.symbol[this._id].mult) {
            cc.find("s24", this.node).active = false;
            cc.find("s25", this.node).active = false;
            cc.find("s26", this.node).active = false;
            cc.find("s27", this.node).active = false;
            cc.find("s28", this.node).active = false;
            var node = cc.find(cfg.symbol[this._id].dataNode, this.node);
            if (node) {
              node.active = true;
              var jp = cc.find("jp", node);
              jp && (jp.active = false);
              var multNode = cc.find("mult", node);
              if (multNode) {
                multNode.active = true;
                cc.find("s_" + mult + "x", multNode).active = true;
              }
            }
          }
        }
      },
      setMaskVisible: function setMaskVisible(isMask) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node && cfg.symbol[this._id].isMask) {
          var showNode = cc.find(cfg.symbol[this._id].node, this.node);
          showNode.color = isMask ? new cc.Color(120, 120, 120) : cc.Color.WHITE;
        }
      },
      setBonusMaskVisible: function setBonusMaskVisible(isMask) {
        this.node.children.forEach(function(node) {
          if (isMask) {
            node.color = new cc.Color(120, 120, 120);
            if (node.active && ("s24" == node.name || "s25" == node.name || "s26" == node.name || "s27" == node.name || "s28" == node.name)) {
              cc.find("jp", node).color = new cc.Color(120, 120, 120);
              cc.find("mult", node).color = new cc.Color(120, 120, 120);
              cc.find("mult", node).children.forEach(function(node2) {
                node2.color = new cc.Color(120, 120, 120);
              });
            }
          } else node.color = cc.Color.WHITE;
        });
      },
      StopMoveEnd: function StopMoveEnd() {
        this._super();
        this.playidleAnimation();
      },
      BonusStopMove: function BonusStopMove() {
        var _this = this;
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = false;
          var aniNode = this.setBonusAnimationToTop(true);
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if (cfg.symbol[id].stop_ani && "" != cfg.symbol[id].stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._bonusIndex + 10 * this._reelIdx;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              cfg.symbol[id].idle_ani && nodeSp.setCompleteListener(function() {
                nodeSp.setCompleteListener(null);
                _this.playBonusIdleAnimation();
              });
            }
          }
        }
        return isPlay;
      },
      bonusStartMove: function bonusStartMove() {
        this.node.zIndex = 50 - this._bonusIndex + 10 * this._reelIdx;
        this.node.active = true;
        this._showNode && (this._showNode.active = true);
      },
      playBonusIdleAnimation: function playBonusIdleAnimation() {
        var isPlay = false;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          var aniNode = this.setBonusAnimationToTop(true);
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if (cfg.symbol[id].idle_ani && "" != cfg.symbol[id].idle_ani.name) {
            aniNode.zIndex = cfg.symbol[id].idle_ani.zIndex - this._bonusIndex + 10 * this._reelIdx;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        }
        return isPlay;
      },
      setBonusAnimationToTop: function setBonusAnimationToTop(isTop) {
        if (this._topAniNode) {
          if (isTop) {
            var cloneNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._bonusIndex, this._reelIdx), this._topAniNode);
            cloneNode || (cloneNode = cc.instantiate(this.node));
            var wordPos = this.node.convertToWorldSpaceAR(cc.v2(0));
            cloneNode.parent = this._topAniNode;
            cloneNode.name = cc.js.formatStr("symbol_ani_%s_%s", this._bonusIndex, this._reelIdx);
            cloneNode.position = this._topAniNode.convertToNodeSpaceAR(wordPos);
            this.node.active = false;
            return cloneNode;
          }
          var showNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._bonusIndex, this._reelIdx), this._topAniNode);
          if (showNode) {
            showNode.removeFromParent();
            showNode.destroy();
          }
          this.node.active = true;
          this._showNode && (this._showNode.active = true);
        }
        return this.node;
      },
      SetSymbolIdx: function SetSymbolIdx(idx) {
        this._symbolIdx = idx;
        2 === this._id ? this.node.zIndex = 150 - idx : this.node.zIndex = 100 - idx;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  Nmedusa_ThroughInput: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23402B5HYBAj6/G/72PuRH8", "Nmedusa_ThroughInput");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      start: function start() {},
      onEnable: function onEnable() {
        this.node._touchListener && this.node._touchListener.setSwallowTouches(false);
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Nmedusa_BonusGame", "Nmedusa_BonusReel", "Nmedusa_Bottom", "Nmedusa_Cfg", "Nmedusa_CollectBonusControl", "Nmedusa_GameData", "Nmedusa_Logic", "Nmedusa_Pop", "Nmedusa_Reel", "Nmedusa_Slots", "Nmedusa_Sound", "Nmedusa_SuperFreeGameWild", "Nmedusa_Symbol", "Nmedusa_ThroughInput" ]);