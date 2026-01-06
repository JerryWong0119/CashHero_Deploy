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
  Hephaestus_BonusReels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71bcfqwa5tDN68Jo1IOCm2c", "Hephaestus_BonusReels");
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
        var url = this._cfg.bonusSymbolPrefab;
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName(url);
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
        for (var i = 0; i < this._nCount + 1; i++) this.CreateOneSymbol();
        this.ReLayOut();
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.getBonusSlots();
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        cc.log(lastReelStopIdx);
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      ReadyToStop: function ReadyToStop() {
        if (!this._bNotifyReadyStop) {
          this._bNotifyReadyStop = true;
          var slots = cc.vv.gameData.getBonusSlots();
          slots.OnReelReadyToStop(this._reelIdx);
        }
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        var slots = cc.vv.gameData.getBonusSlots();
        slots.OnReelBounsActionBefore(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        this.playReelStop();
        var slots = cc.vv.gameData.getBonusSlots();
        slots.OnReelBounsActionDeep(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.getBonusSlots();
        slots.OnReelBounsActionEnd(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Hephaestus_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27b830RKj1Dx7DUVY/HKK8s", "Hephaestus_BonusSlots");
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
      properties: {},
      Init: function Init() {
        this._node_bonus = cc.find("safe_node/node_bonus", this.node);
        this._node_bonus.active = false;
        this.showBonusBg(false);
        this._topAniNode = cc.find("top_ani", this._node_bonus), this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.bonusCol;
        this._row = this._cfg.bonusRow;
        this.createReels(this._col, this._row);
        cc.find("huo_kuang", this._node_bonus).active = false;
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, false, this);
      },
      createReels: function createReels(col, row) {
        var reelCmp = "Hephaestus_BonusReels";
        for (var i = 0; i < col; i++) {
          var node = cc.find("slots/reels/reel" + (i + 1), this._node_bonus);
          var scp = node.addComponent(reelCmp);
          scp.Init(i, row, this._topAniNode);
          this._reels.push(scp);
        }
      },
      initSymbols: function initSymbols() {
        var items = this._bonusGame.items;
        var bonusList = [];
        for (var i = 0; i < items.length; i++) {
          var symbol = this.GetSymbolByIdx(items[i].idx);
          symbol.ShowById(3, items[i]);
          symbol.playBonusIdleAnim();
          bonusList[items[i].idx] = true;
        }
        for (var _i = 0; _i < this._col * this._row; _i++) if (!bonusList[_i + 1]) {
          var _symbol = this.GetSymbolByIdx(_i + 1);
          _symbol.ShowById(this.getBonusRandVal());
        }
      },
      setSlotRow: function setSlotRow(bAdd) {
        var slots = cc.find("slots", this._node_bonus);
        var node_cnt = cc.find("node_cnt", this._node_bonus);
        var reels_frame = cc.find("reels_frame", this._node_bonus);
        var singleH = 118;
        var initH = 357;
        if (bAdd) {
          var newHeight = initH + (this._curRow - 3) * singleH;
          cc.tween(slots).to(.5, {
            height: newHeight
          }).start();
          cc.tween(node_cnt).to(.5, {
            y: slots.position.y + newHeight + 50
          }).start();
          cc.tween(reels_frame).to(.5, {
            height: newHeight
          }).start();
        } else {
          var row = this._bonusGame.row;
          var slotsH = initH + (row - 3) * singleH;
          slots.height = slotsH;
          node_cnt.y = slots.position.y + slotsH + 50;
          reels_frame.height = slotsH;
          this._curRow = row;
        }
      },
      setRestCnt: function setRestCnt(curT, bInit) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var node_cnt, ani_add, nodeList, i, curNode, newNode, _i2, _i3;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              node_cnt = cc.find("node_cnt", _this._node_bonus);
              ani_add = cc.find("item3/ani_add", node_cnt);
              ani_add.active = false;
              nodeList = [];
              for (i = 1; i <= 3; i++) nodeList[i] = cc.find(cc.js.formatStr("item%s/light", i), node_cnt);
              if (bInit) {
                _context.next = 17;
                break;
              }
              curNode = null;
              newNode = null;
              for (_i2 = 1; _i2 <= 3; _i2++) {
                curNode = nodeList[_i2].active ? nodeList[_i2] : curNode;
                newNode = _i2 === curT ? nodeList[_i2] : newNode;
              }
              if (!curNode) {
                _context.next = 14;
                break;
              }
              cc.tween(curNode).to(.3, {
                scale: 0
              }).start();
              _context.next = 13;
              return cc.vv.gameData.awaitTime(.2);

             case 13:
              curNode.active = false;

             case 14:
              if (3 === curT) {
                Global.SlotsSoundMgr.playEffect("Pomi_respinTime_rest");
                newNode.setScale(0);
                newNode.active = true;
                cc.tween(newNode).to(.3, {
                  scale: 1
                }).start();
                ani_add.active = true;
                ani_add.getComponent(cc.Animation).play("bonus_add");
              } else if (newNode) {
                newNode.active = true;
                newNode.setScale(0);
                cc.tween(newNode).to(.3, {
                  scale: 1
                }).start();
              }
              _context.next = 18;
              break;

             case 17:
              for (_i3 = 1; _i3 <= 3; _i3++) {
                nodeList[_i3].active = _i3 === curT;
                nodeList[_i3].setScale(1);
              }

             case 18:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      initAllNode: function initAllNode() {
        this._bonusGame = cc.vv.gameData.getBonusGame();
        this.setSlotRow(false);
        this.setRestCnt(this._bonusGame.spinCnt, true);
        this.initSymbols();
      },
      showBonusBg: function showBonusBg(bShow) {
        cc.find("Canvas/safe_node/spr_bg_bonus").active = bShow;
      },
      enterBonusGame: function enterBonusGame(isTri) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      Global.SlotsSoundMgr.playBgm("music_Pomi_Respin_Bg");
                      cc.vv.gameData.setIsBonusGame(true);
                      _this2._bottomScript.SetWin(0);
                      _this2._node_bonus.active = true;
                      _this2.showBonusBg(true);
                      _this2._bonusGame = cc.vv.gameData.getBonusGame();
                      if (!isTri) {
                        _this2.initAllNode();
                        cc.find("Canvas/safe_node/slots").active = false;
                        cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_MINI").active = false;
                        cc.find("Canvas/safe_node/LMSlots_PrizePool_1/prizePool_MINOR").active = false;
                      }
                      _context2.next = 9;
                      return cc.vv.gameData.awaitTime(1);

                     case 9:
                      _this2.reqSpin();
                      _this2._bonusSuccess = success;

                     case 11:
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
      reqSpin: function reqSpin() {
        this.StartMove(this._bonusGame);
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.data = {
          rtype: 1
        };
        req.gameid = cc.vv.gameData.getGameId();
        cc.vv.NetManager.send(req, true);
      },
      onRecvMsgSubAction: function onRecvMsgSubAction(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (200 === msg.code) {
                _this3._bonusGame = msg.data.bonusGame;
                _this3._gameInfo = _this3._bonusGame;
                _this3._currResult = msg.data.currResult;
                cc.vv.gameData.setBonusGame(_this3._bonusGame);
                _this3.SetSlotsResult(_this3._bonusGame.items, _this3._currResult);
              }

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      StartMove: function StartMove(data) {
        this.setRestCnt(data.spinCnt - 1, false);
        this._gameInfo = null;
        var reels = [];
        var list = [];
        for (var i = 0; i < data.items.length; i++) list[data.items[i].idx] = true;
        for (var _i4 = 5 * (6 - data.row); _i4 < this._reels.length; _i4++) list[_i4 + 1] || reels.push(this._reels[_i4]);
        this.MoveReels(reels);
        this.setMoveLastIdx(list);
        this._stopTime = this.GetStopTime();
      },
      setMoveLastIdx: function setMoveLastIdx(list) {
        var max = 0;
        for (var i = 5 * (6 - this._bonusGame.row); i < this._col; i++) list[i + 1] || (i % 5 > max % 5 || i % 5 == max % 5 && i / 6 > max / 6) && (max = i);
        this.moveReelLastIdx = max;
      },
      SetSlotsResult: function SetSlotsResult(items, result) {
        var list = [];
        for (var i = 0; i < items.length; i++) {
          list[items[i].idx] = {};
          list[items[i].idx].data = items[i];
          list[items[i].idx].sid = 3;
        }
        for (var _i5 = 0; _i5 < result.length; _i5++) 2 == result[_i5].type ? list[result[_i5].idx].sid = 301 : 3 == result[_i5].type && (list[result[_i5].idx].sid = 302);
        var reelResults = [];
        for (var col = 0; col < this._col; col++) {
          var res = {};
          list[col + 1] ? res = Global.copy(list[col + 1]) : res.sid = this.getBonusRandVal();
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].unshift(res);
        }
        for (var _i6 = 0; _i6 < this._reels.length; _i6++) {
          var item = this._reels[_i6];
          var reelRes = reelResults[_i6];
          item.SetResult(reelRes);
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx % 5 * nIter;
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {
        var symbol = this._reels[colIdx].GetSymbolByRow(0);
        var symId = symbol.GetShowId();
        3 === symId ? Global.SlotsSoundMgr.playEffect("music_Pomi_Bonus_down_base") : 301 !== symId && 302 !== symId || Global.SlotsSoundMgr.playEffect("music_Pomi_Bonus_down_Special");
        symbol.playBonusStopAnim();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var i;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this4._gameInfo.isEnd ? _this4.setRestCnt(0) : 3 == _this4._bonusGame.spinCnt && _this4.setRestCnt(_this4._bonusGame.spinCnt, false);
              if (!_this4._currResult) {
                _context5.next = 15;
                break;
              }
              i = 0;

             case 3:
              if (!(i < _this4._currResult.length)) {
                _context5.next = 15;
                break;
              }
              if (!(_this4._currResult[i].type && 2 == _this4._currResult[i].type)) {
                _context5.next = 9;
                break;
              }
              _context5.next = 7;
              return _this4.playUpAnim(_this4._currResult[i]);

             case 7:
              _context5.next = 12;
              break;

             case 9:
              if (!(_this4._currResult[i].type && 3 == _this4._currResult[i].type)) {
                _context5.next = 12;
                break;
              }
              _context5.next = 12;
              return _this4.playExtraAnim(_this4._currResult[i]);

             case 12:
              i++;
              _context5.next = 3;
              break;

             case 15:
              _context5.next = 17;
              return cc.vv.gameData.awaitTime(1);

             case 17:
              _this4._gameInfo.isEnd ? _this4.playGameResult() : _this4.reqSpin();

             case 18:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      playGameResult: function playGameResult() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var totalWin, items, i, symbol, nTotal;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("music_Pomi_respin_end");
              _context6.next = 3;
              return cc.vv.gameData.awaitTime(.5);

             case 3:
              totalWin = _this5._bottomScript.getCurrentWin();
              items = Global.copy(_this5._bonusGame.items);
              items.sort(function(a, b) {
                return a.idx / 5 - b.idx / 5;
              }).sort(function(a, b) {
                return (a.idx - 1) % 5 - (b.idx - 1) % 5;
              });
              i = 0;

             case 7:
              if (!(i < items.length)) {
                _context6.next = 26;
                break;
              }
              symbol = _this5.GetSymbolByIdx(items[i].idx);
              if (!symbol) {
                _context6.next = 23;
                break;
              }
              Global.SlotsSoundMgr.playEffect("music_Pomi_Bonus_collect_coins");
              symbol.playBonusJiesuan();
              if (!items[i].coin) {
                _context6.next = 16;
                break;
              }
              totalWin += items[i].coin;
              _context6.next = 20;
              break;

             case 16:
              if (!items[i].jackpot) {
                _context6.next = 20;
                break;
              }
              totalWin += items[i].jackpot.value;
              _context6.next = 20;
              return cc.vv.gameData.getPopupScript().playWinJp(items[i].jackpot.value, items[i].jackpot.id);

             case 20:
              _this5._bottomScript.SetWin(totalWin);
              _context6.next = 23;
              return cc.vv.gameData.awaitTime(.5);

             case 23:
              i++;
              _context6.next = 7;
              break;

             case 26:
              _context6.next = 28;
              return cc.vv.gameData.getPopupScript().endBonusGame(totalWin);

             case 28:
              _context6.next = 30;
              return cc.vv.gameData.GetSlotsScript().playBonusQp(false);

             case 30:
              cc.vv.gameData.setIsBonusGame(false);
              _this5._node_bonus.active = false;
              _this5.showBonusBg(false);
              if (!cc.vv.gameData.isFreeGame()) {
                _context6.next = 40;
                break;
              }
              nTotal = cc.vv.gameData.getFreeWinCoin() + totalWin;
              cc.vv.gameData.setFreeWinCoin(nTotal);
              _context6.next = 38;
              return new Promise(function(success, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(totalWin, nTotal, false, success);
              });

             case 38:
              _context6.next = 42;
              break;

             case 40:
              _context6.next = 42;
              return new Promise(function(sucess, failed) {
                cc.vv.gameData.AddCoin(totalWin);
                _this5.ShowBottomWin(totalWin, totalWin, true, sucess);
              });

             case 42:
              if (_this5._bonusSuccess) {
                _this5._bonusSuccess();
                _this5._bonusSuccess = null;
              }

             case 43:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      getBonusRandVal: function getBonusRandVal() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomBonusSymbols.length);
        return cfg.randomBonusSymbols[randIdx - 1];
      },
      playUpAnim: function playUpAnim(info) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
                  var idx, symbol, curRow, huo_kuang;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      idx = info.idx;
                      symbol = _this6.GetSymbolByIdx(idx);
                      symbol.playBonusTriAnim(false, function() {
                        symbol.playBonusIdleAnim();
                      });
                      Global.SlotsSoundMgr.playEffect("music_Pomi_reelsUP_Trigger");
                      _context7.next = 6;
                      return cc.vv.gameData.awaitTime(.5);

                     case 6:
                      Global.SlotsSoundMgr.playEffect("music_Pomi_ReelsUp_action");
                      _this6._curRow += 1;
                      _this6.setSlotRow(true);
                      curRow = _this6._curRow;
                      huo_kuang = cc.find("huo_kuang", _this6._node_bonus);
                      huo_kuang.active = true;
                      huo_kuang.scaleY = curRow;
                      huo_kuang.getComponent(cc.Animation).play("bonus_huo_up");
                      huo_kuang.getComponent(cc.Animation).off("stop");
                      huo_kuang.getComponent(cc.Animation).on("stop", function() {
                        huo_kuang.getComponent(cc.Animation).off("stop");
                        huo_kuang.getComponent(cc.Animation).play("bonus_huo_up_loop");
                      });
                      _context7.next = 18;
                      return cc.vv.gameData.awaitTime(1);

                     case 18:
                      cc.vv.gameData.getPopupScript().showShake(1, 5, 5);
                      huo_kuang.active = false;
                      huo_kuang.getComponent(cc.Animation).stop();
                      symbol.playBonusChangeAnim(info);
                      Global.SlotsSoundMgr.playEffect("music_Pomi_DoubleBet_Trigger");
                      _context7.next = 25;
                      return cc.vv.gameData.awaitTime(1);

                     case 25:
                      success();

                     case 26:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      playExtraAnim: function playExtraAnim(info) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success, failed) {
                  var idx, symbol, idxs, fly_node, _loop, i, fly_big, _loop2, _i7;
                  return regeneratorRuntime.wrap(function _callee9$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      idx = info.idx;
                      symbol = _this7.GetSymbolByIdx(idx);
                      symbol.playBonusTriAnim(false, function() {
                        symbol.playBonusIdleAnim();
                      });
                      _context10.next = 5;
                      return cc.vv.gameData.awaitTime(.5);

                     case 5:
                      idxs = info.effectIdxs;
                      if (idxs.length > 0) {
                        Global.SlotsSoundMgr.playEffect("music_Pomi_DoubleBet_Trigger");
                        fly_node = cc.find("fly_huoqiu", _this7._node_bonus);
                        _loop = function _loop(i) {
                          var endSymbol = _this7.GetSymbolByIdx(idxs[i]);
                          if (endSymbol) {
                            var flyNode = cc.instantiate(fly_node);
                            flyNode.active = true;
                            flyNode.parent = _this7._node_bonus;
                            var startPos = _this7._node_bonus.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                            var endPos = _this7._node_bonus.convertToNodeSpaceAR(endSymbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                            var v = cc.v2(endPos.x, endPos.y).sub(cc.v2(startPos.x, startPos.y));
                            var angle = v.signAngle(cc.v2(1, 0));
                            flyNode.angle = -angle * cc.macro.DEG - 90;
                            flyNode.position = startPos;
                            flyNode.scaleY = 0;
                            cc.tween(flyNode).parallel(cc.tween().to(.5, {
                              position: cc.v2(endPos.x, endPos.y)
                            }), cc.tween().to(.3, {
                              scaleY: 1
                            }).to(.2, {
                              scaleY: 0
                            })).call(function() {
                              flyNode.destroy();
                              endSymbol.playBonusExtraBoom();
                              endSymbol.playBonusKuangAnim(true);
                            }).start();
                          }
                        };
                        for (i = 0; i < idxs.length; i++) _loop(i);
                      }
                      _context10.next = 9;
                      return cc.vv.gameData.awaitTime(.5);

                     case 9:
                      cc.vv.gameData.getPopupScript().showShake(1, 5, 5);
                      cc.vv.gameData.getPopupScript().playHuoqiuEffect(true);
                      _context10.next = 13;
                      return cc.vv.gameData.awaitTime(1);

                     case 13:
                      fly_big = cc.find("fly_huoqiu_big", _this7._node_bonus);
                      _loop2 = regeneratorRuntime.mark(function _loop2(_i7) {
                        var endSymbol, flyNode, endPos;
                        return regeneratorRuntime.wrap(function _loop2$(_context9) {
                          while (1) switch (_context9.prev = _context9.next) {
                           case 0:
                            endSymbol = _this7.GetSymbolByIdx(idxs[_i7]);
                            if (!endSymbol) {
                              _context9.next = 10;
                              break;
                            }
                            flyNode = cc.instantiate(fly_big);
                            flyNode.active = true;
                            flyNode.parent = _this7._node_bonus;
                            endPos = _this7._node_bonus.convertToNodeSpaceAR(endSymbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                            flyNode.position = cc.v2(endPos.x, _this7._node_bonus.y + _this7._node_bonus.height / 2 + 100);
                            cc.tween(flyNode).to(1, {
                              position: endPos
                            }).call(function() {
                              Global.SlotsSoundMgr.playEffect("music_Pomi_DoubleBet_action");
                              flyNode.destroy();
                              endSymbol.playBonusBoom();
                              endSymbol.setNum(2 * endSymbol.getNum());
                              endSymbol.playBonusKuangAnim(false);
                            }).start();
                            _context9.next = 10;
                            return cc.vv.gameData.awaitTime(.3);

                           case 10:
                           case "end":
                            return _context9.stop();
                          }
                        }, _loop2);
                      });
                      _i7 = 0;

                     case 16:
                      if (!(_i7 < idxs.length)) {
                        _context10.next = 21;
                        break;
                      }
                      return _context10.delegateYield(_loop2(_i7), "t0", 18);

                     case 18:
                      _i7++;
                      _context10.next = 16;
                      break;

                     case 21:
                      _context10.next = 23;
                      return cc.vv.gameData.awaitTime(2);

                     case 23:
                      symbol.playBonusChangeAnim(info);
                      Global.SlotsSoundMgr.playEffect("music_Pomi_DoubleBet_Trigger");
                      _context10.next = 27;
                      return cc.vv.gameData.awaitTime(1);

                     case 27:
                      success();

                     case 28:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee9);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee10);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Hephaestus_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8fb7B8vA9NfowXmCfrHaZh", "Hephaestus_Cfg");
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
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        },
        trigger_ani: {
          name: "actionframe",
          zIndex: 300
        },
        stop_ani: {
          name: "buling",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        stop_ani: {
          name: "animation",
          zIndex: 100
        },
        idle_ani: {
          name: "animation2",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 300
        },
        kuang_node: "kuangFire"
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "actionframe",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: ""
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: ""
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: ""
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: ""
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: ""
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: ""
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: ""
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: ""
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w301",
        stop_ani: {
          name: "animation",
          zIndex: 100
        },
        idle_ani: {
          name: "animation2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 100
        },
        boom_ani: {
          name: "animation4",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 302, {
        node: "s302",
        win_node: "w302",
        stop_ani: {
          name: "animation",
          zIndex: 100
        },
        idle_ani: {
          name: "animation2",
          zIndex: 100
        },
        trigger_ani: {
          name: "animation3",
          zIndex: 100
        },
        boom_ani: {
          name: "animation4",
          zIndex: 100
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Hephaestus_Slots",
        Reels: "Hephaestus_Reels",
        Symbols: "Hephaestus_Symbol"
      },
      col: 5,
      row: 3,
      bonusCol: 30,
      bonusRow: 1,
      symbolPrefab: "LMSlots_Symbol",
      bonusSymbolPrefab: "Bonus_Symbol",
      symbolSize: {
        height: 116
      },
      randomSymbols: [ 3, 4, 5, 6, 7, 8, 9 ],
      randomBonusSymbols: [ 4, 5, 6, 7, 8, 9 ],
      bonusCoinMultList: [ .5, 1, 2, 2.5, 3, 4, 6, 8, 10 ],
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
      helpItems: [ "games/Hephaestus/prefab/help_node/LMSlots_Help_item1", "games/Hephaestus/prefab/help_node/LMSlots_Help_item2", "games/Hephaestus/prefab/help_node/LMSlots_Help_item3", "games/Hephaestus/prefab/help_node/LMSlots_Help_item4", "games/Hephaestus/prefab/help_node/LMSlots_Help_item5" ],
      commEffect: {
        path: "games/Hephaestus/",
        win1: [ "music_Pomi_last_win_1", "" ],
        win2: [ "music_Pomi_last_win_2", "" ],
        win3: [ "music_Pomi_last_win_3", "" ]
      },
      AddAntiTime: 1.8,
      normalBgm: "music_Pomi_normal_Bg",
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Hephaestus/",
        reelStopSound: "music_Pomi_Reel_Stop",
        symbolStopSound: "music_Pomi_Scatter_Down_1",
        antSound: "anticipation",
        antSpeed: 2e3
      }, {
        id: [ 3 ],
        mini: 1,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "",
        path: "games/Hephaestus/",
        reelStopSound: "music_Pomi_Reel_Stop",
        symbolStopSound: "music_Pomi_Bonus_down_base",
        antSound: "",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Hephaestus_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3061a6MXj5JlK4qPMh1JDML", "Hephaestus_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._bonusGame = deskInfo.bonusGame;
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._bonusGame = msg.bonusGame;
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
      setBonusSlots: function setBonusSlots(val) {
        this._bonusSlotsScp = val;
      },
      getBonusSlots: function getBonusSlots() {
        return this._bonusSlotsScp;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      },
      setFreeWinCoin: function setFreeWinCoin(val) {
        this._freeWinCoin = val;
      },
      getBonusGame: function getBonusGame() {
        return this._bonusGame;
      },
      setBonusGame: function setBonusGame(val) {
        this._bonusGame = val;
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Hephaestus_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8dea3mmzldLEociK51pqZuM", "Hephaestus_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("Hephaestus_Popup");
        cc.vv.gameData.setPopupScript(script_popup);
        script_popup.Init();
        var script_bonus = this.node.addComponent("Hephaestus_BonusSlots");
        cc.vv.gameData.setBonusSlots(script_bonus);
        script_bonus.Init();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Hephaestus_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85f04me63NJtItZv9ZR8hyi", "Hephaestus_Popup");
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
        this._node_tri_free = cc.find("node_tri_free", this._node_popup);
        this._node_end_free = cc.find("node_end_free", this._node_popup);
        this._node_tri_bonus = cc.find("node_tri_bonus", this._node_popup);
        this._node_end_bonus = cc.find("node_end_bonus", this._node_popup);
        this._node_win_jp = cc.find("node_win_jp", this._node_popup);
        this._node_tri_free.active = false;
        this._node_end_free.active = false;
        this._node_tri_bonus.active = false;
        this._node_end_bonus.active = false;
        this._node_win_jp.active = false;
        this._huoqiu = cc.find("safe_node/Effect_Pomi_huoqiu4", this.node);
        this._huoqiu_bg = cc.find("safe_node/Effect_Pomi_huoqiu4_bg", this.node);
        this._huoqiu.active = false;
        this._huoqiu_bg.active = false;
        this._node_qp = cc.find("safe_node/node_qp", this.node);
        this._node_qp.active = false;
      },
      playPanelAnim: function playPanelAnim(bShow, p_node) {
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var c_cnt, _loop, i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                c_cnt = p_node.childrenCount;
                _loop = function _loop(i) {
                  var node = p_node.children[i];
                  var s_scaleX = node.scaleX;
                  var s_scaleY = node.scaleY;
                  if (bShow) {
                    node.active = true;
                    node.setScale(0);
                    cc.tween(node).delay(.1 * i).to(.5, {
                      scaleX: s_scaleX,
                      scaleY: s_scaleY
                    }, {
                      easing: "backOut"
                    }).start();
                  } else cc.tween(node).delay(.1 * (c_cnt - i)).to(.5, {
                    scaleX: 0,
                    scaleY: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    node.active = false;
                    node.scale = cc.v2(s_scaleX, s_scaleY);
                  }).start();
                };
                for (i = 0; i < c_cnt; i++) _loop(i);
                _context.next = 5;
                return cc.vv.gameData.awaitTime(.1 * c_cnt + .5);

               case 5:
                success();

               case 6:
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
      triFreeGame: function triFreeGame(bFirst, freeCnt) {
        var _this = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_Pomi_common_viewOpen");
                _this._node_popup.active = true;
                _this._node_tri_free.active = true;
                cc.find("kuang/lbl", _this._node_tri_free).getComponent(cc.Label).string = freeCnt;
                cc.find("text_first", _this._node_tri_free).opacity = bFirst ? 255 : 0;
                cc.find("text_extra", _this._node_tri_free).opacity = bFirst ? 0 : 255;
                cc.find("btn", _this._node_tri_free).opacity = bFirst ? 255 : 0;
                _context4.next = 9;
                return _this.playPanelAnim(true, _this._node_tri_free);

               case 9:
                if (!bFirst) {
                  _context4.next = 19;
                  break;
                }
                btn = cc.find("btn", _this._node_tri_free);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this;
                clickFunc = function() {
                  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("music_Pomi_common_Click");
                        btn.getComponent(cc.Button).interactable = false;
                        _context2.next = 4;
                        return self.playPanelAnim(false, self._node_tri_free);

                       case 4:
                        self._node_popup.active = false;
                        self._node_tri_free.active = false;
                        success();

                       case 7:
                       case "end":
                        return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function clickFunc() {
                    return _ref3.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                })));
                _context4.next = 26;
                break;

               case 19:
                _context4.next = 21;
                return cc.vv.gameData.awaitTime(2);

               case 21:
                _context4.next = 23;
                return _this.playPanelAnim(false, _this._node_tri_free);

               case 23:
                _this._node_popup.active = false;
                _this._node_tri_free.active = false;
                success();

               case 26:
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
      endFreeGame: function endFreeGame(winCoin, freeCnt) {
        var _this2 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_Pomi_common_viewOpen");
                _this2._node_popup.active = true;
                _this2._node_end_free.active = true;
                cc.find("kuang/lbl", _this2._node_end_free).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                cc.find("freeCnt", _this2._node_end_free).getComponent(cc.Label).string = freeCnt;
                btn = cc.find("btn", _this2._node_end_free);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                _context7.next = 10;
                return _this2.playPanelAnim(true, _this2._node_end_free);

               case 10:
                self = _this2;
                clickFunc = function() {
                  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("music_Pomi_common_Click");
                        btn.getComponent(cc.Button).interactable = false;
                        _context5.next = 4;
                        return self.playPanelAnim(false, self._node_end_free);

                       case 4:
                        self._node_popup.active = false;
                        self._node_end_free.active = false;
                        success();

                       case 7:
                       case "end":
                        return _context5.stop();
                      }
                    }, _callee5);
                  }));
                  return function clickFunc() {
                    return _ref6.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                })));

               case 14:
               case "end":
                return _context7.stop();
              }
            }, _callee7);
          }));
          return function(_x5, _x6) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      triBonusGame: function triBonusGame() {
        var _this3 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_Pomi_common_viewOpen");
                _this3._node_popup.active = true;
                _this3._node_tri_bonus.active = true;
                _context10.next = 5;
                return _this3.playPanelAnim(true, _this3._node_tri_bonus);

               case 5:
                btn = cc.find("btn", _this3._node_tri_bonus);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this3;
                clickFunc = function() {
                  var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) switch (_context8.prev = _context8.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("music_Pomi_common_Click");
                        btn.getComponent(cc.Button).interactable = false;
                        _context8.next = 4;
                        return self.playPanelAnim(false, self._node_tri_bonus);

                       case 4:
                        self._node_popup.active = false;
                        self._node_tri_bonus.active = false;
                        success();

                       case 7:
                       case "end":
                        return _context8.stop();
                      }
                    }, _callee8);
                  }));
                  return function clickFunc() {
                    return _ref9.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context9.stop();
                    }
                  }, _callee9);
                })));

               case 12:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x7, _x8) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      endBonusGame: function endBonusGame(winCoin) {
        var _this4 = this;
        return new Promise(function() {
          var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_Pomi_common_viewOpen");
                _this4._node_popup.active = true;
                _this4._node_end_bonus.active = true;
                cc.find("kuang/lbl", _this4._node_end_bonus).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                _context13.next = 6;
                return _this4.playPanelAnim(true, _this4._node_end_bonus);

               case 6:
                btn = cc.find("btn", _this4._node_end_bonus);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this4;
                clickFunc = function() {
                  var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) switch (_context11.prev = _context11.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("music_Pomi_common_Click");
                        btn.getComponent(cc.Button).interactable = false;
                        _context11.next = 4;
                        return self.playPanelAnim(false, self._node_end_bonus);

                       case 4:
                        self._node_popup.active = false;
                        self._node_end_bonus.active = false;
                        success();

                       case 7:
                       case "end":
                        return _context11.stop();
                      }
                    }, _callee11);
                  }));
                  return function clickFunc() {
                    return _ref12.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                })));

               case 13:
               case "end":
                return _context13.stop();
              }
            }, _callee13);
          }));
          return function(_x9, _x10) {
            return _ref11.apply(this, arguments);
          };
        }());
      },
      playWinJp: function playWinJp(winCoin, jpIdx) {
        var _this5 = this;
        return new Promise(function() {
          var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(success, failed) {
            var btn, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_Pomi_common_viewOpen");
                _this5._node_popup.active = true;
                _this5._node_win_jp.active = true;
                cc.find("spr_jp", _this5._node_win_jp).getComponent("ImgSwitchCmp").setIndex(jpIdx - 1);
                cc.find("kuang/lbl", _this5._node_win_jp).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                _context16.next = 7;
                return _this5.playPanelAnim(true, _this5._node_win_jp);

               case 7:
                btn = cc.find("btn", _this5._node_win_jp);
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this5;
                clickFunc = function() {
                  var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                      while (1) switch (_context14.prev = _context14.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("music_Pomi_common_Click");
                        btn.getComponent(cc.Button).interactable = false;
                        _context14.next = 4;
                        return self.playPanelAnim(false, self._node_win_jp);

                       case 4:
                        self._node_popup.active = false;
                        self._node_win_jp.active = false;
                        success();

                       case 7:
                       case "end":
                        return _context14.stop();
                      }
                    }, _callee14);
                  }));
                  return function clickFunc() {
                    return _ref15.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context15.stop();
                    }
                  }, _callee15);
                })));

               case 14:
               case "end":
                return _context16.stop();
              }
            }, _callee16);
          }));
          return function(_x11, _x12) {
            return _ref14.apply(this, arguments);
          };
        }());
      },
      playHuoshanAnim: function playHuoshanAnim(bBG) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          var character;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("music_Pomi_GuoChang");
              character = cc.find("safe_node/character", _this6.node);
              character.active = false;
              _this6._node_qp.active = true;
              _this6._node_qp.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
              _this6._node_qp.getComponent(sp.Skeleton).setCompleteListener(function() {
                _this6._node_qp.getComponent(sp.Skeleton).setCompleteListener();
                _this6._node_qp.active = false;
                character.active = true;
              });

             case 6:
             case "end":
              return _context17.stop();
            }
          }, _callee17);
        }))();
      },
      playHuoqiuEffect: function playHuoqiuEffect(bBG) {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
             case 0:
              if (bBG) {
                _this7._huoqiu_bg.active = true;
                _this7._huoqiu_bg.getComponent(cc.ParticleSystem).resetSystem();
              } else {
                _this7._huoqiu.active = true;
                _this7._huoqiu.getComponent(cc.ParticleSystem).resetSystem();
              }
              _context18.next = 3;
              return cc.vv.gameData.awaitTime(4);

             case 3:
              _this7._huoqiu.active = false;
              _this7._huoqiu_bg.active = false;

             case 5:
             case "end":
              return _context18.stop();
            }
          }, _callee18);
        }))();
      },
      showShake: function showShake(time, x, y) {
        return new Promise(function() {
          var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(sucess, failed) {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect(Global.SlotsSoundMgr.bell);
                cc.find("Canvas/safe_node/slots").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/node_bonus").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/LMSlots_PrizePool_1").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/spr_bg_normal").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/spr_bg_free").runAction(cc.shake(time, x, y));
                cc.find("Canvas/safe_node/pomi_bg_3").runAction(cc.shake(time, x, y));
                _context19.next = 9;
                return cc.vv.gameData.awaitTime(time);

               case 9:
                sucess();

               case 10:
               case "end":
                return _context19.stop();
              }
            }, _callee19);
          }));
          return function(_x13, _x14) {
            return _ref17.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  Hephaestus_Reels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14af7In6YhN8KfPp1gsICZU", "Hephaestus_Reels");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Hephaestus_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e5bb73MuZJapLiYH77MmNl", "Hephaestus_Slots");
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
      properties: {},
      start: function start() {},
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bonusGame;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._topScript.SetBackLobby(false);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("music_Pomi_enter");
              cc.vv.gameData.GetTotalFree() > 0 ? _this.ShowGameview(true) : _this.ShowGameview(false);
              bonusGame = cc.vv.gameData.getBonusGame();
              if (!bonusGame) {
                _context.next = 8;
                break;
              }
              _context.next = 8;
              return cc.vv.gameData.getBonusSlots().enterBonusGame(false);

             case 8:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context.next = 11;
                break;
              }
              _context.next = 11;
              return _this.CheckExitFreeGame();

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
        if (cc.vv.gameData.isBonusGame()) cc.vv.gameData.getBonusSlots().StartMove(); else {
          this._super();
          Global.SlotsSoundMgr.playNormalBgm();
        }
      },
      StopMove: function StopMove() {
        cc.vv.gameData.isBonusGame() ? cc.vv.gameData.getBonusSlots().StopMove() : this._super();
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var dataList = [];
        if (this._gameInfo.bonusInfo && this._gameInfo.bonusInfo.length > 0) for (var i = 0; i < this._gameInfo.bonusInfo.length; i++) {
          var info = this._gameInfo.bonusInfo[i];
          dataList[info.idx - 1] = info;
        }
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var _i = 0; _i < cards.length; _i++) {
          var row = Math.floor(_i / acRow);
          var col = _i % this._col;
          if (this._cfg.symbol[cards[_i]]) {
            var res = {};
            res.sid = cards[_i];
            res.data = dataList[_i];
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
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, nTotal, updateBalance, freeInfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              updateBalance = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.getFreeWinCoin();
                updateBalance = false;
              }
              _context2.next = 7;
              return new Promise(function(sucess, failed) {
                _this2.ShowBottomWin(nWin, nTotal, updateBalance, sucess);
              });

             case 7:
              if (!_this2._gameInfo.bonusGame) {
                _context2.next = 10;
                break;
              }
              _context2.next = 10;
              return _this2.triBonusGame();

             case 10:
              freeInfo = _this2._gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0)) {
                _context2.next = 14;
                break;
              }
              _context2.next = 14;
              return _this2.triFreeGame();

             case 14:
              if (!(_this2._gameInfo.allFreeCnt > 0 && 0 == _this2._gameInfo.freeCnt)) {
                _context2.next = 17;
                break;
              }
              _context2.next = 17;
              return _this2.endFreeGame();

             case 17:
              _this2.CanDoNextRound();

             case 18:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      triFreeGame: function triFreeGame() {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var freeInfo, idxs, i, symbol, isFirst;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                freeInfo = _this3._gameInfo.freeResult.freeInfo;
                idxs = freeInfo.scatterIdx;
                for (i = 0; i < idxs.length; i++) {
                  symbol = _this3.GetSymbolByIdx(idxs[i]);
                  symbol && symbol.playTriggerAnimation();
                }
                Global.SlotsSoundMgr.playEffect("music_Pomi_Trigger_Freespin");
                _context3.next = 6;
                return cc.vv.gameData.awaitTime(1.5);

               case 6:
                isFirst = _this3._gameInfo.freeCnt === _this3._gameInfo.allFreeCnt;
                _context3.next = 9;
                return cc.vv.gameData.getPopupScript().triFreeGame(isFirst, freeInfo.freeCnt);

               case 9:
                if (!isFirst) {
                  _context3.next = 12;
                  break;
                }
                _context3.next = 12;
                return _this3.playFreeQp(true);

               case 12:
                success();

               case 13:
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
      endFreeGame: function endFreeGame() {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var nWin;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_Pomi_freespin_end");
                _context4.next = 3;
                return cc.vv.gameData.awaitTime(.5);

               case 3:
                nWin = cc.vv.gameData.getFreeWinCoin();
                _context4.next = 6;
                return cc.vv.gameData.getPopupScript().endFreeGame(nWin, _this4._gameInfo.allFreeCnt);

               case 6:
                _context4.next = 8;
                return _this4.playFreeQp(false);

               case 8:
                _context4.next = 10;
                return new Promise(function(success2, failed) {
                  _this4.ShowBottomWin(nWin, nWin, true, success2);
                });

               case 10:
                success();

               case 11:
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
      triBonusGame: function triBonusGame() {
        var _this5 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var items, i, symbol;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                items = _this5._gameInfo.bonusInfo;
                for (i = 0; i < items.length; i++) {
                  symbol = _this5.GetSymbolByIdx(items[i].idx);
                  symbol && symbol.playBonusTriAnim(true);
                }
                Global.SlotsSoundMgr.playEffect("music_Pomi_Trigger_Freespin");
                _context5.next = 5;
                return cc.vv.gameData.awaitTime(1.5);

               case 5:
                _context5.next = 7;
                return cc.vv.gameData.getPopupScript().triBonusGame();

               case 7:
                _context5.next = 9;
                return _this5.playBonusQp(true);

               case 9:
                _context5.next = 11;
                return cc.vv.gameData.getBonusSlots().enterBonusGame(true);

               case 11:
                success();

               case 12:
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
      playFreeQp: function playFreeQp(bFree) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      cc.vv.gameData.getPopupScript().showShake(3.5, 5, 5);
                      _context6.next = 3;
                      return cc.vv.gameData.awaitTime(.5);

                     case 3:
                      cc.vv.gameData.getPopupScript().playHuoshanAnim();
                      cc.vv.gameData.getPopupScript().playHuoqiuEffect();
                      _context6.next = 7;
                      return cc.vv.gameData.awaitTime(3);

                     case 7:
                      if (bFree) {
                        _this6.Backup();
                        _this6.ShowGameview(true);
                      } else {
                        _this6.Resume();
                        _this6.ShowGameview(false);
                      }
                      _context6.next = 10;
                      return cc.vv.gameData.awaitTime(1);

                     case 10:
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
      playBonusQp: function playBonusQp(bBonus) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
                  var LMSlots_PrizePool_1, slots, node_bonus;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      LMSlots_PrizePool_1 = cc.find("Canvas/safe_node/LMSlots_PrizePool_1");
                      slots = cc.find("Canvas/safe_node/slots");
                      node_bonus = cc.find("Canvas/safe_node/node_bonus");
                      cc.vv.gameData.getPopupScript().showShake(3.5, 5, 5);
                      cc.tween(LMSlots_PrizePool_1).to(.5, {
                        opacity: 0
                      }).start();
                      bBonus;
                      _context8.next = 8;
                      return cc.vv.gameData.awaitTime(.5);

                     case 8:
                      cc.vv.gameData.getPopupScript().playHuoshanAnim();
                      cc.vv.gameData.getPopupScript().playHuoqiuEffect();
                      _context8.next = 12;
                      return cc.vv.gameData.awaitTime(3);

                     case 12:
                      slots.active = !bBonus;
                      node_bonus.active = bBonus;
                      cc.vv.gameData.getBonusSlots().initAllNode();
                      cc.tween(LMSlots_PrizePool_1).to(.5, {
                        opacity: 255
                      }).start();
                      cc.find("prizePool_MINI", LMSlots_PrizePool_1).active = !bBonus;
                      cc.find("prizePool_MINOR", LMSlots_PrizePool_1).active = !bBonus;
                      _context8.next = 20;
                      return cc.vv.gameData.awaitTime(1);

                     case 20:
                      success();

                     case 21:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x9, _x10) {
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
      ShowGameview: function ShowGameview(bFree) {
        cc.vv.gameData.setIsFreeGame(bFree);
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.getFreeWinCoin();
          this._bottomScript.SetWin(nTotal);
        } else this._bottomScript.ShowFreeModel(false);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
        bFree ? Global.SlotsSoundMgr.playBgm("music_Pomi_Freespin_Bg") : Global.SlotsSoundMgr.stopBgm();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Hephaestus_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9557Au+BRGjL5cfEzG8dtM", "Hephaestus_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      ShowRandomSymbol: function ShowRandomSymbol() {
        this._super();
        var cfg = cc.vv.gameData.getGameCfg();
        var id = this._id;
        if (3 == id) {
          var data = {};
          if (Math.random() > .3) {
            var randIdx = Global.random(1, cfg.bonusCoinMultList.length);
            data.coin = cfg.bonusCoinMultList[randIdx - 1] * cc.vv.gameData.GetTotalBet();
          } else {
            var _randIdx = Math.random();
            var randList = [ .1, .3, .5 ];
            var jpId = 1;
            _randIdx < randList[0] ? jpId = 4 : _randIdx < randList[1] ? jpId = 3 : _randIdx < randList[2] && (jpId = 2);
            data.jackpot = {
              id: jpId
            };
          }
          this.ShowById(id, data);
        }
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.setNum();
        this.setJp();
        data && 3 == id && (data.coin ? this.setNum(data.coin) : data.jackpot && this.setJp(data.jackpot.id));
      },
      setNum: function setNum(val) {
        var lbl = cc.find("lbl", this.node);
        if (lbl) if (val) {
          lbl.active = true;
          lbl.getComponent(cc.Label).string = Global.formatNumShort(val, 0);
        } else lbl.active = false;
        this._bonusNum = val;
      },
      getNum: function getNum() {
        return this._bonusNum;
      },
      setJp: function setJp(val) {
        var jp = cc.find("jp", this.node);
        if (jp) if (val) {
          jp.active = true;
          jp.getComponent("ImgSwitchCmp").setIndex(val - 1);
        } else jp.active = false;
      },
      playBonusStopAnim: function playBonusStopAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].stop_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              cfg.symbol[id].idle_ani && nodeSp.addAnimation(0, cfg.symbol[id].idle_ani.name, true);
            }
          }
        }
      },
      playBonusIdleAnim: function playBonusIdleAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._state = "stop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].idle_ani.name) {
            this.node.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        }
      },
      playBonusTriAnim: function playBonusTriAnim(bDouble, callback) {
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
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, false);
              bDouble ? nodeSp.addAnimation(0, cfg.symbol[id].trigger_ani.name, false) : callback && nodeSp.setCompleteListener(function() {
                callback();
              });
            }
          }
        }
        return isPlay;
      },
      playBonusChangeAnim: function playBonusChangeAnim(data) {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        var cloneNode = cc.instantiate(this.node);
        cloneNode.parent = this._topAniNode;
        cloneNode.position = this._topAniNode.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
        cloneNode.active = true;
        var topShowNode = cc.find(cfg.symbol[id].win_node, cloneNode);
        topShowNode.active = true;
        if ("" != cfg.symbol[id].boom_ani.name) {
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            nodeSp.setAnimation(0, cfg.symbol[id].boom_ani.name, false);
            nodeSp.setCompleteListener(function() {
              cloneNode.destroy();
            });
          }
        }
        this.setAnimationToTop(false);
        this.ShowById(3, data);
        this.playBonusBoom();
        this.playBonusIdleAnim();
      },
      playBonusBoom: function playBonusBoom() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          var nodeAni = this._showNode.getComponent(cc.Animation);
          nodeAni && nodeAni.play("b_boom_1");
        }
      },
      playBonusExtraBoom: function playBonusExtraBoom() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          var nodeAni = this._showNode.getComponent(cc.Animation);
          nodeAni && nodeAni.play("b_extra_boom");
        }
      },
      playBonusJiesuan: function playBonusJiesuan() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id]) {
          var nodeAni = this._showNode.getComponent(cc.Animation);
          nodeAni && nodeAni.play("b_jiesuan");
          this._showNode.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
        }
      },
      playBonusKuangAnim: function playBonusKuangAnim(bPlay) {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        cfg.symbol[id] && cfg.symbol[id].kuang_node && (cc.find(cfg.symbol[id].kuang_node, this._showNode).active = bPlay);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Hephaestus_BonusReels", "Hephaestus_BonusSlots", "Hephaestus_Cfg", "Hephaestus_GameData", "Hephaestus_Logic", "Hephaestus_Popup", "Hephaestus_Reels", "Hephaestus_Slots", "Hephaestus_Symbol" ]);