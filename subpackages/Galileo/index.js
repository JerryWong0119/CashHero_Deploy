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
  Galileo_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33a54Rvib1Dq5bsMBn4XXnd", "Galileo_BonusReel");
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
      extends: require("LMSlots_Reel_Base"),
      properties: {
        _maxScale: .7,
        _type: 1
      },
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
      },
      setType: function setType(slotIdx) {
        this._type = slotIdx;
      },
      CreateOneSymbol: function CreateOneSymbol() {
        var node = cc.instantiate(this._symbolTemplete);
        node.parent = this._holderNode;
        node.setScale(this._maxScale);
        var scp = node.addComponent(this._cfg.scripts.Symbols);
        var idx = this._symbols.length;
        scp.SetSymbolReelIdx(this._reelIdx);
        scp.Init(idx, this._topAniNode, this._maxScale);
        scp.setType("bonus_" + this._type);
        this._symbols.push(scp);
      },
      GetSymbolPosByRow: function GetSymbolPosByRow(row) {
        return cc.v2(0, (row + .5) * this._cfg.symbolSize.height * this._maxScale);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.getBonusScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var lastSlotStopIdx = slots.GetLastStopReelIdx().slots_idx;
        var lastReelStopIdx = slots.GetLastStopReelIdx().reel_idx;
        this._type == lastSlotStopIdx && this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
        this.playBonusStopAnim();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      playBonusStopAnim: function playBonusStopAnim() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bonusIds, item, id, topNode;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              bonusIds = cc.vv.gameData.getGameCfg().bonusIds;
              item = _this._symbols[0];
              id = item.GetShowId();
              if (!bonusIds.includes(id)) {
                _context.next = 9;
                break;
              }
              cc.vv.gameData.getBonusScript().setKuangAnim(false, _this._type - 1, _this._reelIdx);
              topNode = item.setAnimationToTop(true);
              _context.next = 8;
              return topNode.getComponent("Galileo_Symbol").playBonusStopAnim();

             case 8:
              topNode.getComponent("Galileo_Symbol").playBonusIdleAnim();

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Galileo_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7c25C/pehNWImnK5wUOGO5", "Galileo_BonusSlots");
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
        _slotCnt: 3,
        _slotsList: [],
        _reelsList: [],
        _moveReels: [],
        _slotsCntList: [],
        _fullWinList: [],
        _spinCnt: 0,
        _stopEffInfo: [],
        _playBgm1: false,
        _playBgm2: false
      },
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 15;
        this._row = 1;
        this._node_bonus = cc.find("safe_node/node_bonus", this.node);
        this._node_bonus.active = false;
        this._node_slots = cc.find("slots", this._node_bonus);
        for (var i = 1; i <= 3; i++) {
          var node = cc.find("slots" + i, this._node_slots);
          this.createReels(this._col, this._row, node, i);
          this._slotsList.push(node);
          var spr_cnt = cc.find("spr_cnt", node);
          this._slotsCntList.push(spr_cnt);
          var bonus_prize = cc.find("bonus_prize", node);
          bonus_prize.active = false;
          this._fullWinList.push(bonus_prize);
        }
        this._flyNode = cc.find("flyNode", this._node_slots);
        this._kuangNode = cc.find("kuangNode", this._node_slots);
        this._tit_nor = cc.find("node_tit/node_nor", this._node_bonus);
        this._tit_win = cc.find("node_tit/node_win", this._node_bonus);
        this._tit_nor.active = false;
        this._tit_win.active = false;
      },
      createReels: function createReels(col, row, slotNode, slotIdx) {
        this._reelsList[slotIdx - 1] = [];
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), slotNode);
          var scp = node.addComponent("Galileo_BonusReel");
          scp.Init(i, row, cc.find("top_ani", slotNode));
          scp.setType(slotIdx);
          this._reelsList[slotIdx - 1].push(scp);
        }
      },
      StartMove: function StartMove() {
        var slots = this._bonusGame.slots;
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this._moveReels = [];
        for (var s_i = 0; s_i < slots.length; s_i++) {
          this._moveReels[s_i] = [];
          for (var r_i = 0; r_i < this._col; r_i++) if (!slots[s_i].bonusIdxs.includes(r_i + 1)) {
            var reel = this._reelsList[s_i][r_i];
            this._moveReels[s_i].push(reel);
          }
        }
        this.moveReelLastIdx = -1;
        this.MoveReels(this._moveReels[0], 1);
        this.MoveReels(this._moveReels[1], 2);
        this.MoveReels(this._moveReels[2], 3);
        this._stopTime = this.GetStopTime();
      },
      MoveReels: function MoveReels(arry, slot_idx) {
        for (var i = 0; i < arry.length; i++) {
          var item = arry[i];
          item.StartMove();
          var idx = item.GetReelIdx();
          if (idx % 5 > this.moveReelLastIdx) {
            this.moveReelLastIdx = idx;
            this.moveSlotLastIdx = slot_idx;
          }
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx % 5 * nIter;
      },
      GetLastStopReelIdx: function GetLastStopReelIdx() {
        return {
          slots_idx: this.moveSlotLastIdx,
          reel_idx: this.moveReelLastIdx
        };
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        this._bottomScript.ShowBtnsByState("moveing_1");
        this._stopTime = -1;
        for (var idx = 0; idx < this._moveReels.length; idx++) {
          var reels = this._moveReels[idx];
          for (var i = 0; i < reels.length; i++) {
            var item = reels[i];
            var reelStopInterv = 0;
            item.StopMove(reelStopInterv);
            item.StopMoveRightNow();
          }
        }
      },
      onMsgSpine: function onMsgSpine() {
        this._gameInfo = Global.copy(this._bonusGame);
        this.SetSlotsResult();
      },
      SetSlotsResult: function SetSlotsResult() {
        var bonusCards = cc.vv.gameData.getGameCfg().bonusIds;
        var slots = this._bonusGame.slots;
        for (var s_i = 0; s_i < this._slotCnt; s_i++) {
          var reels = this._moveReels[s_i];
          var bonusIdxs = slots[s_i].bonusIdxs;
          var bonusItems = slots[s_i].bonusItems;
          for (var i = 0; i < reels.length; i++) {
            var item = reels[i];
            var reelIdx = item.GetReelIdx();
            var res = {};
            if (bonusIdxs.includes(reelIdx + 1)) {
              res.sid = bonusCards[s_i];
              res.data = bonusItems[bonusIdxs.indexOf(reelIdx + 1)];
              this._stopEffInfo[reelIdx % 5].bSpecial = true;
            } else res.sid = this.getRandomVal();
            item.SetResult([ res ]);
          }
        }
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var info = this._stopEffInfo[colIdx % 5];
        if (!info.bPlay) {
          info.bPlay = true;
          info.bSpecial ? Global.SlotsSoundMgr.playEffect("music_MagicLady_lightingBuling") : Global.SlotsSoundMgr.playEffect("music_MagicLady_reelstop");
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var state, addT1, addT2;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _context.next = 2;
              return cc.vv.gameData.awaitTime(1);

             case 2:
              state = _this._bonusGame.state;
              1 == state && Global.SlotsSoundMgr.playEffect("music_MagicLady_chooseLayerReady");
              _this.showKuangNode();
              addT1 = _this.updateFullWin(false);
              addT2 = _this.updateTotalCnt(false);
              _context.next = 9;
              return cc.vv.gameData.awaitTime(Math.max(addT1, addT2));

             case 9:
              if (!_this._bonusGame.isEnd) {
                _context.next = 13;
                break;
              }
              _this.exitBonusGame();
              _context.next = 17;
              break;

             case 13:
              if (!(1 == state)) {
                _context.next = 16;
                break;
              }
              _context.next = 16;
              return _this.winExtraSpins();

             case 16:
              _this.reqSpin();

             case 17:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) if (this.CanStopSlot()) {
            this._roundSpineTime = 0;
            this._bottomScript.ShowBtnsByState("moveing_2");
            for (var idx = 0; idx < this._slotCnt; idx++) {
              var reels = this._reelsList[idx];
              for (var i = 0; i < reels.length; i++) {
                var item = reels[i];
                var reelStopInterv = this.GetReelStopInter(i);
                item.StopMove(reelStopInterv);
              }
            }
          } else {
            this._stopTime = dt;
            this._roundSpineTime = this._roundSpineTime || 0;
            this._roundSpineTime += dt;
            this._roundSpineTime > 30 && this._topScript.SetBackLobby(true);
          }
        }
      },
      enterBonusGame: function enterBonusGame(isTri) {
        var _this2 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
            var state;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this2.changeBgm(true);
                cc.vv.gameData.setIsBonusGame(true);
                _this2._node_bonus.active = true;
                cc.vv.gameData.getManageScript().showBonusView(true);
                cc.vv.gameData.GetBottomScript().SetWin(0);
                _this2._bonusGame = cc.vv.gameData.getBonusGame();
                cc.vv.gameData.getManageScript().lockJackpot(_this2._bonusGame.jackpotValues);
                _this2._spinCnt = _this2._bonusGame.spinCnt;
                _this2.showRestCnt(_this2._spinCnt);
                _this2.updateTotalCnt(true);
                _this2.showKuangNode();
                _this2.updateFullWin(true);
                _this2.initStopInfo();
                _this2.initAllSymBol(isTri);
                if (!isTri) {
                  _context2.next = 21;
                  break;
                }
                _context2.next = 17;
                return cc.vv.gameData.awaitTime(1.5);

               case 17:
                _context2.next = 19;
                return _this2.playTriAnim();

               case 19:
                _context2.next = 21;
                return cc.vv.gameData.getPopupScript().playTriBonus(_this2._bonusGame.totalSpinCnt);

               case 21:
                state = _this2._bonusGame.state;
                if (!(1 == state)) {
                  _context2.next = 25;
                  break;
                }
                _context2.next = 25;
                return _this2.winExtraSpins();

               case 25:
                _this2.reqSpin();
                _this2._bonusSuccess = success;

               case 27:
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
      exitBonusGame: function exitBonusGame() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var s_i, i, winCoin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              for (s_i = 0; s_i < _this3._slotCnt; s_i++) for (i = 0; i < _this3._reelsList[s_i].length; i++) _this3.setKuangAnim(false, s_i, i);
              _this3.changeBgm(true);
              _context3.next = 4;
              return _this3.playEndAnim();

             case 4:
              winCoin = _this3._bonusGame.winCoin;
              _context3.next = 7;
              return cc.vv.gameData.getPopupScript().playWinBonus(winCoin);

             case 7:
              cc.vv.gameData.getPopupScript().playQpAnim();
              _context3.next = 10;
              return cc.vv.gameData.awaitTime(1);

             case 10:
              cc.vv.gameData.setIsBonusGame(false);
              _this3._node_bonus.active = false;
              cc.vv.gameData.getManageScript().showBonusView(false);
              cc.vv.gameData.getManageScript().unlockJackpot();
              _context3.next = 16;
              return cc.vv.gameData.awaitTime(1);

             case 16:
              _context3.next = 18;
              return new Promise(function(success, failed) {
                cc.vv.gameData.AddCoin(winCoin);
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(winCoin, winCoin, true, success);
              });

             case 18:
              if (_this3._bonusSuccess) {
                _this3._bonusSuccess();
                _this3._bonusSuccess = null;
              }

             case 19:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      winExtraSpins: function winExtraSpins() {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var toPos;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                toPos = cc.find("lbl", _this4._tit_nor).convertToWorldSpaceAR(cc.v2(0, 0));
                _context4.next = 3;
                return cc.vv.gameData.getPopupScript().bonusExtraSpins(toPos);

               case 3:
                _this4._bonusGame = cc.vv.gameData.getBonusGame();
                _this4._spinCnt = _this4._bonusGame.spinCnt;
                _this4.showRestCnt(_this4._spinCnt, true);
                _context4.next = 8;
                return cc.vv.gameData.awaitTime(.8);

               case 8:
                _this4.changeBgm(false);
                success();

               case 10:
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
      playEndAnim: function playEndAnim() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var slots, total, s_i, extraCoin, win, lbl, startPos, endPos, bonusIdxs, bonusItems, winEff, i, idx, symbol, topNode;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              slots = _this5._bonusGame.slots;
              total = 0;
              s_i = 2;

             case 3:
              if (!(s_i >= 0)) {
                _context5.next = 43;
                break;
              }
              extraCoin = slots[s_i].extraCoin;
              if (!(extraCoin > 0)) {
                _context5.next = 24;
                break;
              }
              win = cc.find("win", _this5._fullWinList[s_i]);
              win.active = true;
              _context5.next = 10;
              return cc.vv.gameData.awaitTime(.5);

             case 10:
              win.active = false;
              lbl = cc.find("lbl", _this5._fullWinList[s_i]);
              startPos = lbl.position;
              endPos = _this5._fullWinList[s_i].convertToNodeSpaceAR(_this5._tit_win.convertToWorldSpaceAR(cc.v2(0, 0)));
              cc.tween(lbl).to(.5, {
                position: endPos
              }).start();
              _context5.next = 17;
              return cc.vv.gameData.awaitTime(.5);

             case 17:
              _this5._fullWinList[s_i].active = false;
              lbl.position = startPos;
              total += extraCoin;
              _this5.showTitWin(total, 3);
              Global.SlotsSoundMgr.playEffect("music_MagicLady_lightingCollect4");
              _context5.next = 24;
              return cc.vv.gameData.awaitTime(1);

             case 24:
              bonusIdxs = slots[s_i].bonusIdxs;
              bonusItems = slots[s_i].bonusItems;
              bonusItems.sort(function(a, b) {
                return (a.idx - 1) / 5 - (b.idx - 1) / 5;
              }).sort(function(a, b) {
                return (a.idx - 1) % 5 - (b.idx - 1) % 5;
              });
              winEff = [ "music_MagicLady_lightingCollect1", "music_MagicLady_lightingCollect2", "music_MagicLady_lightingCollect3" ];
              i = 0;

             case 29:
              if (!(i < bonusItems.length)) {
                _context5.next = 40;
                break;
              }
              idx = bonusItems[i].idx;
              symbol = _this5._reelsList[s_i][idx - 1].GetSymbolByRow(0);
              topNode = symbol.getAnimationTop();
              topNode && topNode.getComponent("Galileo_Symbol").playBonusWinAnim();
              if (bonusItems[i].coin) {
                total += bonusItems[i].coin;
                _this5.showTitWin(total, s_i);
                Global.SlotsSoundMgr.playEffect(winEff[s_i]);
              } else if (bonusItems[i].jackpot) {
                total += bonusItems[i].jackpot.value;
                _this5.showTitWin(total, s_i);
                Global.SlotsSoundMgr.playEffect("music_MagicLady_lightingCollectMini");
              }
              _context5.next = 37;
              return cc.vv.gameData.awaitTime(.7);

             case 37:
              i++;
              _context5.next = 29;
              break;

             case 40:
              s_i--;
              _context5.next = 3;
              break;

             case 43:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      reqSpin: function reqSpin() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          var reqdata, msg, result;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              reqdata = {
                rtype: 2
              };
              _context6.next = 3;
              return cc.vv.gameData.getManageScript().reqSubGame(reqdata);

             case 3:
              msg = _context6.sent;
              if (msg && 200 === msg.code) {
                _this6.changeBgm(false);
                cc.log(msg);
                _this6._spinCnt -= 1;
                _this6.showRestCnt(_this6._spinCnt);
                _this6.initStopInfo();
                _this6.StartMove();
                result = msg.data.result;
                _this6._bonusGame = msg.data.bonusGame;
                _this6.onMsgSpine();
              }

             case 5:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      initAllSymBol: function initAllSymBol(isTri) {
        var _this7 = this;
        var bonusCards = cc.vv.gameData.getGameCfg().bonusIds;
        var slots = this._bonusGame.slots;
        var _loop = function _loop(s_i) {
          var cards = [];
          var data = [];
          slots[s_i].bonusItems.forEach(function(item) {
            cards[item.idx - 1] = bonusCards[s_i];
            data[item.idx - 1] = item;
          });
          for (var i = 0; i < _this7._reelsList[s_i].length; i++) {
            var symbol = _this7._reelsList[s_i][i].GetSymbolByRow(0);
            symbol.setAnimationToTop(false);
            symbol.ShowById(14);
            if (cards[i] && (!isTri || isTri && 0 == s_i)) {
              cc.log(symbol);
              symbol.ShowById(cards[i], data[i]);
              var aniNode = symbol.setAnimationToTop(true);
              aniNode.getComponent("Galileo_Symbol").playBonusIdleAnim();
            }
          }
        };
        for (var s_i = 0; s_i < this._slotCnt; s_i++) _loop(s_i);
      },
      playTriAnim: function playTriAnim() {
        var _this8 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            var cfg, bonusCards, slots, bonusItems, i, idx, s_symbol, fly_node, _loop2, s_i;
            return regeneratorRuntime.wrap(function _callee8$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                cfg = cc.vv.gameData.getGameCfg();
                bonusCards = cfg.bonusIds;
                slots = _this8._bonusGame.slots;
                bonusItems = slots[0].bonusItems;
                bonusItems.sort(function(a, b) {
                  return (a.idx - 1) / 5 - (b.idx - 1) / 5;
                }).sort(function(a, b) {
                  return (a.idx - 1) % 5 - (b.idx - 1) % 5;
                });
                i = 0;

               case 6:
                if (!(i < bonusItems.length)) {
                  _context9.next = 22;
                  break;
                }
                idx = bonusItems[i].idx;
                s_symbol = _this8._reelsList[0][idx - 1].GetSymbolByRow(0);
                fly_node = cc.find("fly", _this8._flyNode);
                if (!fly_node) {
                  fly_node = cc.instantiate(cc.find(cfg.symbol[bonusCards[0]].node, s_symbol.node));
                  fly_node.name = "fly";
                  fly_node.parent = _this8._flyNode;
                }
                fly_node.position = _this8._flyNode.convertToNodeSpaceAR(s_symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                _loop2 = regeneratorRuntime.mark(function _loop2(s_i) {
                  var e_symbol, endPos, showEff, aniNode, callBack;
                  return regeneratorRuntime.wrap(function _loop2$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      e_symbol = _this8._reelsList[s_i][idx - 1].GetSymbolByRow(0);
                      endPos = _this8._flyNode.convertToNodeSpaceAR(e_symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      fly_node.active = true;
                      fly_node.scale = .7;
                      cc.tween(fly_node).to(.3, {
                        position: endPos,
                        scale: .9
                      }).to(.2, {
                        scale: .4
                      }).to(.1, {
                        scale: .7
                      }).start();
                      _context8.next = 7;
                      return cc.vv.gameData.awaitTime(.6);

                     case 7:
                      showEff = 1 == s_i ? "music_MagicLady_lighttingShow2" : "music_MagicLady_lighttingShow3";
                      Global.SlotsSoundMgr.playEffect(showEff);
                      fly_node.active = false;
                      e_symbol.ShowById(bonusCards[s_i], bonusItems[i]);
                      aniNode = e_symbol.setAnimationToTop(true);
                      callBack = function() {
                        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) switch (_context7.prev = _context7.next) {
                             case 0:
                              _context7.next = 2;
                              return aniNode.getComponent("Galileo_Symbol").playBonusShowAnim();

                             case 2:
                              aniNode.getComponent("Galileo_Symbol").playBonusIdleAnim();

                             case 3:
                             case "end":
                              return _context7.stop();
                            }
                          }, _callee7);
                        }));
                        return function callBack() {
                          return _ref4.apply(this, arguments);
                        };
                      }();
                      callBack();

                     case 14:
                     case "end":
                      return _context8.stop();
                    }
                  }, _loop2);
                });
                s_i = 1;

               case 14:
                if (!(s_i < _this8._slotCnt)) {
                  _context9.next = 19;
                  break;
                }
                return _context9.delegateYield(_loop2(s_i), "t0", 16);

               case 16:
                s_i++;
                _context9.next = 14;
                break;

               case 19:
                i++;
                _context9.next = 6;
                break;

               case 22:
                success();

               case 23:
               case "end":
                return _context9.stop();
              }
            }, _callee8);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      showRestCnt: function showRestCnt(cnt, bAdd) {
        this._tit_nor.active = true;
        this._tit_win.active = false;
        cc.find("lbl", this._tit_nor).getComponent(cc.Label).string = cnt;
        var par = cc.find("par", this._tit_nor);
        if (bAdd) {
          Global.SlotsSoundMgr.playEffect("music_MagicLady_addrespinnum");
          par.active = true;
          par.getComponent(cc.ParticleSystem).resetSystem();
        } else par.active = false;
      },
      showTitWin: function showTitWin(winCoin, winType) {
        this._tit_nor.active = false;
        this._tit_win.active = true;
        cc.find("lbl", this._tit_win).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
        var kuang = cc.find("kuang", this._tit_win);
        kuang.active = true;
        kuang.getComponent("ImgSwitchCmp").setIndex(winType);
        kuang.opacity = 0;
        cc.tween(kuang).to(.1, {
          opacity: 255
        }).delay(.3).to(.1, {
          opacity: 0
        }).start();
      },
      updateTotalCnt: function updateTotalCnt(init) {
        var slots = this._bonusGame.slots;
        var addT = 0;
        for (var i = 0; i < this._slotsCntList.length; i++) {
          var total = slots[i].bonusIdxs.length;
          var lbl = cc.find("lbl", this._slotsCntList[i]);
          var light = cc.find("light", this._slotsCntList[i]);
          if (init) {
            lbl.getComponent(cc.Label).string = total;
            light.active = false;
          } else {
            var curCnt = Number(lbl.getComponent(cc.Label).string);
            lbl.getComponent(cc.Label).string = total;
            if (curCnt < total) {
              cc.tween(lbl).to(.5, {
                scale: 1.2
              }).to(.5, {
                scale: 1
              }).start();
              light.active = true;
              light.opacity = 0;
              cc.tween(light).to(.3, {
                opacity: 255
              }).delay(.4).to(.3, {
                opacity: 0
              }).start();
              addT = 1;
            }
          }
        }
        addT > 0 && Global.SlotsSoundMgr.playEffect("music_MagicLady_addrespinnum");
        return addT;
      },
      showKuangNode: function showKuangNode() {
        var slots = this._bonusGame.slots;
        for (var s_i = 0; s_i < this._slotCnt; s_i++) {
          var bonusIdxs = slots[s_i].bonusIdxs;
          var total = bonusIdxs.length;
          for (var i = 0; i < 15; i++) total >= 12 && !bonusIdxs.includes(i + 1) ? this.setKuangAnim(true, s_i, i) : this.setKuangAnim(false, s_i, i);
        }
      },
      updateFullWin: function updateFullWin(init) {
        var slots = this._bonusGame.slots;
        for (var s_i = 0; s_i < this._slotCnt; s_i++) {
          var total = slots[s_i].bonusIdxs.length;
          var extraCoin = slots[s_i].extraCoin;
          if (init) if (15 == total && extraCoin > 0) {
            this._fullWinList[s_i].active = true;
            var lbl = cc.find("lbl", this._fullWinList[s_i]);
            cc.find("win", this._fullWinList[s_i]).active = false;
          } else this._fullWinList[s_i].active = false; else if (15 == total && !this._fullWinList[s_i].active) {
            this._fullWinList[s_i].active = true;
            var _lbl = cc.find("lbl", this._fullWinList[s_i]);
            cc.find("win", this._fullWinList[s_i]).active = false;
            Global.SlotsSoundMgr.playEffect("sound_MagicLady_jackpot_jump");
            Global.doRoallNumEff(_lbl, 0, extraCoin, 1.5, function() {
              Global.SlotsSoundMgr.stopEffectByName("sound_MagicLady_jackpot_jump");
              Global.SlotsSoundMgr.playEffect("sound_MagicLady_jackpot_over");
            }, null, 0, true);
            return 1.5;
          }
        }
        return 0;
      },
      getRandomVal: function getRandomVal() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        return cfg.randomSymbols[randIdx - 1];
      },
      setKuangAnim: function setKuangAnim(bShow, s_i, r_i) {
        if (bShow) {
          var cloneNode = cc.find(cc.js.formatStr("kuang_ani_%s_%s", s_i, r_i), this._kuangNode);
          cloneNode || (cloneNode = cc.instantiate(cc.vv.gameData.GetPrefabByName("kuang_bonus")));
          cloneNode.active = true;
          cloneNode.parent = this._kuangNode;
          cloneNode.name = cc.js.formatStr("kuang_ani_%s_%s", s_i, r_i);
          var pos = this._reelsList[s_i][r_i].node.convertToWorldSpaceAR(cc.v2(0, 0));
          cloneNode.position = this._kuangNode.convertToNodeSpaceAR(pos);
          return cloneNode;
        }
        var showNode = cc.find(cc.js.formatStr("kuang_ani_%s_%s", s_i, r_i), this._kuangNode);
        showNode && (showNode.active = false);
      },
      initStopInfo: function initStopInfo() {
        for (var i = 0; i < 5; i++) this._stopEffInfo[i] = {
          bPlay: false,
          bSpecial: false
        };
      },
      changeBgm: function changeBgm(bStop) {
        if (bStop) {
          Global.SlotsSoundMgr.stopBgm();
          this._playBgm1 = false;
          this._playBgm2 = false;
        } else if (this._spinCnt > 2 && !this._playBgm1) {
          Global.SlotsSoundMgr.playBgm("music_MagicLady_RespinBG");
          this._playBgm1 = true;
          this._playBgm2 = false;
        } else if (this._spinCnt <= 2 && !this._playBgm2) {
          Global.SlotsSoundMgr.playBgm("music_MagicLady_RespinBG2");
          this._playBgm1 = false;
          this._playBgm2 = true;
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Galileo_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed678C8fyhDtoYx+eF9eTlg", "Galileo_Cfg");
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
        },
        isMask: true
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        stop_ani: {
          name: "buling",
          zIndex: 300
        },
        trigger_ani: {
          name: "actionframe",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        isMask: false,
        idle_ani: {
          name: "idle_yellow",
          zIndex: 300
        },
        stop_ani: {
          name: "stop_yellow",
          zIndex: 300
        },
        trigger_ani: {
          name: "trigger_yellow",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 301, {
        node: "s301",
        win_node: "w301",
        isMask: false,
        win_ani: {
          name: "win_red",
          zIndex: 300
        },
        idle_ani: {
          name: "idle_red",
          zIndex: 300
        },
        stop_ani: {
          name: "stop_red",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 302, {
        node: "s302",
        win_node: "w301",
        isMask: false,
        win_ani: {
          name: "win_blue",
          zIndex: 300
        },
        idle_ani: {
          name: "idle_blue",
          zIndex: 300
        },
        stop_ani: {
          name: "stop_blue",
          zIndex: 300
        },
        show_ani: {
          name: "show_blue",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 303, {
        node: "s303",
        win_node: "w301",
        isMask: false,
        win_ani: {
          name: "win_green",
          zIndex: 300
        },
        idle_ani: {
          name: "idle_green",
          zIndex: 300
        },
        stop_ani: {
          name: "stop_green",
          zIndex: 300
        },
        show_ani: {
          name: "show_green",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "",
        isMask: true
      }), _defineProperty(_symbol, 14, {
        node: "s0",
        win_node: ""
      }), _symbol),
      bonusIds: [ 301, 302, 303 ],
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Galileo_Slots",
        Reels: "Galileo_Reel",
        Symbols: "Galileo_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "LMSlots_Symbol",
      bigSymbolPrefab: "LMSlots_bigSymbol",
      symbolSize: {
        width: 130,
        height: 110
      },
      randomSymbols: [ 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      speed: 3e3,
      autoModelDelay: .5,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      normalBgm: "music_MagicLady_NormalBG",
      helpItems: [ "games/Galileo/prefab/help_node/LMSlots_Help_item1", "games/Galileo/prefab/help_node/LMSlots_Help_item2", "games/Galileo/prefab/help_node/LMSlots_Help_item3", "games/Galileo/prefab/help_node/LMSlots_Help_item4", "games/Galileo/prefab/help_node/LMSlots_Help_item5", "games/Galileo/prefab/help_node/LMSlots_Help_item6" ],
      commEffect: {
        path: "games/Galileo/",
        win1: [ "music_MagicLady_last_win_1", "" ],
        win2: [ "music_MagicLady_last_win_2", "" ],
        win3: [ "music_MagicLady_last_win_3", "" ]
      },
      AddAntiTime: 1.8,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/Galileo/",
        reelStopSound: "music_MagicLady_reelstop",
        symbolStopSound: "music_MagicLady_buling",
        antSound: "music_MagicLady_quick_run",
        antSpeed: 2200,
        type: "free"
      }, {
        id: [ 3 ],
        mini: 1,
        counts: [ 3, 3, 3, 3, 3 ],
        path: "games/Galileo/",
        reelStopSound: "music_MagicLady_reelstop",
        symbolStopSound: "music_MagicLady_lightingBuling",
        antSpeed: 2e3,
        type: "bonus"
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Galileo_FreeReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "982beE25FdO9Jn1ZrCB24y0", "Galileo_FreeReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {
        _isBig: false
      },
      start: function start() {},
      Init: function Init(idx, nCount, node, isBig) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._isBig = isBig;
        this._super(idx, nCount, node);
      },
      LoadSymbols: function LoadSymbols() {
        var url = this._isBig ? this._cfg.bigSymbolPrefab : this._cfg.symbolPrefab;
        if (!this._symbolTemplete) {
          this._symbolTemplete = cc.vv.gameData.GetPrefabByName(url);
          this._symbolTemplete && (this._symbolTemplete.optimizationPolicy = cc.Prefab.OptimizationPolicy.MULTI_INSTANCE);
        }
        for (var i = 0; i < this._nCount + 1; i++) this.CreateOneSymbol();
        this.ReLayOut();
      },
      GetSymbolPosByRow: function GetSymbolPosByRow(row) {
        return cc.v2(0, (row + .5) * this._cfg.symbolSize.height * (this._isBig ? 3 : 1));
      },
      StartMove: function StartMove() {
        this._super();
        this._offset = this._cfg.symbolSize.height * (this._isBig ? 3 : 1);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && cc.vv.gameData.getManageScript().OnSpinEnd();
      },
      playReelStop: function playReelStop() {
        var stopEff = "music_MagicLady_reelstop";
        for (var i = 0; i < this._symbols.length; i++) {
          var item = this._symbols[i];
          if (2 == item.GetShowId()) {
            item.playStopAnimation();
            stopEff = "music_MagicLady_buling";
          }
        }
        Global.SlotsSoundMgr.playEffect(stopEff);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Galileo_FreeSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30977+4KM5KJoICBdZBoKKQ", "Galileo_FreeSlots");
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
        _kuangList: []
      },
      start: function start() {},
      Init: function Init() {
        this._node_free = this.node;
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 5;
        this._row = 9;
        this._topAniNode = cc.find("top_ani", this._node_free);
        this._topKuangNode = cc.find("top_kuang_ani", this._node_free);
        this.createReels(this._col, this._row);
      },
      createReels: function createReels(col, row) {
        var reeel1 = cc.find("reels/reel1", this._node_free);
        var reel1Scp = reeel1.addComponent("Galileo_FreeReel");
        reel1Scp.Init(1, row, this._topAniNode, false);
        this._reels.push(reel1Scp);
        var reel6 = cc.find("reels/reel6", this._node_free);
        var reel6Scp = reel6.addComponent("Galileo_FreeReel");
        reel6Scp.Init(2, 3, this._topAniNode, true);
        this._reels.push(reel6Scp);
        var reeel5 = cc.find("reels/reel5", this._node_free);
        var reel5Scp = reeel5.addComponent("Galileo_FreeReel");
        reel5Scp.Init(3, row, this._topAniNode, false);
        this._reels.push(reel5Scp);
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this.hideKuang();
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        this._bottomScript.ShowBtnsByState("moveing_1");
        this._stopTime = -1;
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          var reelStopInterv = 0;
          item.StopMove(reelStopInterv);
          item.StopMoveRightNow();
        }
      },
      onMsgSpine: function onMsgSpine(msg) {
        cc.log(msg);
        this._gameInfo = msg;
        var cards = msg.resultCards;
        this.SetSlotsResult(cards);
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
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        this._reels[0].SetResult(reelResults[0]);
        this._reels[1].SetResult([ reelResults[1][0], reelResults[1][3], reelResults[1][6] ]);
        this._reels[2].SetResult(reelResults[4]);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var nWin, nTotal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = cc.vv.gameData.getFreeWinCoin();
              _context.next = 5;
              return new Promise(function(sucess, failed) {
                _this.ShowBottomWin(nWin, nTotal, false, sucess);
              });

             case 5:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
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
            this.showKuangByIdx(Number(key));
          }
        }
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._row - Math.floor((idx - 1) / this._col) - 1;
        return 0 == col ? this._reels[col].GetSymbolByRow(row) : col > 0 && col < 4 ? this._reels[1].GetSymbolByRow(Math.floor(row / 3)) : this._reels[2].GetSymbolByRow(row);
      },
      hideKuang: function hideKuang() {
        this._kuangList.forEach(function(kuang) {
          kuang.active = false;
        });
      },
      showKuangByIdx: function showKuangByIdx(idx) {
        var kuangWorldPos = this.getKuangPosByIdx(idx);
        if (this._cfg.kuang) {
          if (!this._kuangList[idx]) {
            var kuangPrefab = cc.vv.gameData.GetPrefabByName(this._cfg.kuang);
            var kuang = cc.instantiate(kuangPrefab);
            kuang.zIndex = idx + 100;
            kuang.parent = this._topKuangNode;
            kuang.position = this._topKuangNode.convertToNodeSpaceAR(kuangWorldPos);
            this._kuangList[idx] = kuang;
          }
          this._kuangList[idx].active = true;
        }
      },
      getKuangPosByIdx: function getKuangPosByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._row - Math.floor((idx - 1) / this._col) - 1;
        var s_pos = cc.find("reels/s_pos", this._node_free);
        var offsetX = (col + .5) * this._cfg.symbolSize.width;
        var offsetY = (row + .5) * this._cfg.symbolSize.height;
        return s_pos.convertToWorldSpaceAR(cc.v2(offsetX, offsetY));
      },
      enterFreeGame: function enterFreeGame() {
        Global.SlotsSoundMgr.playBgm("music_MagicLady_FreespinBG");
        this.hideKuang();
        for (var i = 0; i < this._col * this._row; i++) {
          var symbol = this.GetSymbolByIdx(i + 1);
          symbol.ClearState();
        }
      },
      exitFreeGame: function exitFreeGame() {
        Global.SlotsSoundMgr.stopBgm();
        this.hideKuang();
        for (var i = 0; i < this._col * this._row; i++) {
          var symbol = this.GetSymbolByIdx(i + 1);
          symbol.ClearState();
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Galileo_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "602eeu8hFtG7rhdAMzeG4yq", "Galileo_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _slotsIndex: 0,
        _slotsArray: []
      },
      start: function start() {},
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
      setPopupScript: function setPopupScript(scp) {
        this._popScp = scp;
      },
      getPopupScript: function getPopupScript() {
        return this._popScp;
      },
      setBonusScript: function setBonusScript(scp) {
        this._bonusScp = scp;
      },
      getBonusScript: function getBonusScript() {
        return this._bonusScp;
      },
      setFreeScript: function setFreeScript(scp) {
        this._freeScp = scp;
      },
      getFreeScript: function getFreeScript() {
        return this._freeScp;
      },
      setManageScript: function setManageScript(scp) {
        this._manageScp = scp;
      },
      getManageScript: function getManageScript() {
        return this._manageScp;
      },
      addSlotsScript: function addSlotsScript(script) {
        this._slotsArray.push(script);
      },
      GetSlotsScript: function GetSlotsScript() {
        (this._slotsIndex > 1 || this._slotsIndex < 0) && (this._slotsIndex = 0);
        return this._slotsArray[this._slotsIndex];
      },
      changeSlotsFree: function changeSlotsFree() {
        this._slotsIndex = 1;
      },
      changeSlotsNormal: function changeSlotsNormal() {
        this._slotsIndex = 0;
      },
      setBonusGame: function setBonusGame(val) {
        this._bonusGame = val;
      },
      getBonusGame: function getBonusGame() {
        return this._bonusGame;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
      },
      setIsBonusGame: function setIsBonusGame(val) {
        this._isBonusGame = val;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  Galileo_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66374gOcGBJzoQwM0t5CHXT", "Galileo_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("Galileo_Popup");
        script_popup.Init();
        cc.vv.gameData.setPopupScript(script_popup);
        var script_bonus = this.node.addComponent("Galileo_BonusSlots");
        script_bonus.Init();
        cc.vv.gameData.setBonusScript(script_bonus);
        var node_slots = cc.find("Canvas/safe_node/slots");
        var script_slots = node_slots.getComponent("Galileo_Slots");
        cc.vv.gameData.addSlotsScript(script_slots);
        var script_free = cc.find("Canvas/safe_node/slots_free").addComponent("Galileo_FreeSlots");
        script_free.Init();
        cc.vv.gameData.setFreeScript(script_free);
        cc.vv.gameData.addSlotsScript(script_free);
        var script_manage = this.node.addComponent("Galileo_Manage");
        cc.vv.gameData.setManageScript(script_manage);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Galileo_Manage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5aacctHW5G0IayetgpHC2A", "Galileo_Manage");
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
        _isInFree: false,
        _isInBonus: false
      },
      onLoad: function onLoad() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      start: function start() {
        this.ReconnectShow();
      },
      reqSubGame: function reqSubGame(data) {
        var _this = this;
        return new Promise(function(res) {
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA,
            gameid: _this._gameId,
            data: data
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
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var rest;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              rest = cc.vv.gameData.GetFreeTime();
              if (rest) {
                _this2.ShowGameview(true);
                cc.vv.gameData.getFreeScript().enterFreeGame();
              } else _this2.ShowGameview(false);
              if (!cc.vv.gameData.getBonusGame()) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return cc.vv.gameData.getBonusScript().enterBonusGame();

             case 6:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 7:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _gameInfo, nWin, nTotal, isNormalGame, freeInfo, bonusGame;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _gameInfo = cc.vv.gameData.GetSlotsScript()._gameInfo;
              if (_gameInfo) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");

             case 3:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              cc.vv.gameData.GetSlotsScript().ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              isNormalGame = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.getFreeWinCoin();
                isNormalGame = false;
              }
              _context2.next = 11;
              return new Promise(function(success, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nTotal, isNormalGame, success);
              });

             case 11:
              freeInfo = _gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0)) {
                _context2.next = 15;
                break;
              }
              _context2.next = 15;
              return _this3.CheckEnterFreeGame();

             case 15:
              if (!(_gameInfo.allFreeCnt > 0 && 0 == _gameInfo.freeCnt)) {
                _context2.next = 18;
                break;
              }
              _context2.next = 18;
              return _this3.CheckExitFreeGame();

             case 18:
              bonusGame = _gameInfo.bonusGame;
              if (!bonusGame) {
                _context2.next = 22;
                break;
              }
              _context2.next = 22;
              return _this3.CheckEnterBonusGame();

             case 22:
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 23:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
                  var _gameInfo, scatterIdx, _iterator, _step, id, symbol, isFirst;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      _gameInfo = cc.vv.gameData.GetSlotsScript()._gameInfo;
                      scatterIdx = _gameInfo.freeResult.freeInfo.scatterIdx;
                      if (scatterIdx && scatterIdx.length > 0) {
                        _iterator = _createForOfIteratorHelper(scatterIdx);
                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                            id = _step.value;
                            symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(id);
                            symbol && symbol.playTriggerAnimation();
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }
                      }
                      isFirst = _gameInfo.freeCnt == _gameInfo.allFreeCnt;
                      Global.SlotsSoundMgr.playEffect("music_MagicLady_scatter_TriggerFreespin");
                      if (!isFirst) {
                        _context3.next = 17;
                        break;
                      }
                      _context3.next = 8;
                      return cc.vv.gameData.awaitTime(1.5);

                     case 8:
                      cc.vv.gameData.getPopupScript().playQpAnim();
                      _context3.next = 11;
                      return cc.vv.gameData.awaitTime(1);

                     case 11:
                      _this4.ShowGameview(true);
                      cc.vv.gameData.getFreeScript().enterFreeGame();
                      _context3.next = 15;
                      return cc.vv.gameData.awaitTime(1);

                     case 15:
                      _context3.next = 19;
                      break;

                     case 17:
                      _context3.next = 19;
                      return cc.vv.gameData.awaitTime(2);

                     case 19:
                      sucess();

                     case 20:
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
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  var winCoin;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      winCoin = cc.vv.gameData.getFreeWinCoin();
                      _context5.next = 3;
                      return cc.vv.gameData.getPopupScript().playWinFreeAnim(winCoin, cc.vv.gameData.GetTotalFree());

                     case 3:
                      cc.vv.gameData.getPopupScript().playQpAnim();
                      _context5.next = 6;
                      return cc.vv.gameData.awaitTime(1);

                     case 6:
                      _this5.ShowGameview(false);
                      cc.vv.gameData.getFreeScript().exitFreeGame();
                      _context5.next = 10;
                      return cc.vv.gameData.awaitTime(1);

                     case 10:
                      _context5.next = 12;
                      return new Promise(function(success, failed) {
                        cc.vv.gameData.GetSlotsScript().ShowBottomWin(winCoin, winCoin, true, success);
                      });

                     case 12:
                      sucess();

                     case 13:
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
      CheckEnterBonusGame: function CheckEnterBonusGame() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  var _gameInfo, bonusIdxs, _iterator2, _step2, id, symbol;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      _context7.next = 2;
                      return cc.vv.gameData.awaitTime(.5);

                     case 2:
                      _gameInfo = cc.vv.gameData.GetSlotsScript()._gameInfo;
                      bonusIdxs = _gameInfo.bonusIdxs;
                      if (bonusIdxs && bonusIdxs.length > 0) {
                        _iterator2 = _createForOfIteratorHelper(bonusIdxs);
                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                            id = _step2.value;
                            symbol = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(id);
                            symbol && symbol.playTriggerAnimation();
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      }
                      Global.SlotsSoundMgr.playEffect("music_MagicLady_scatter_TriggerRespin");
                      _context7.next = 8;
                      return cc.vv.gameData.awaitTime(1.5);

                     case 8:
                      cc.vv.gameData.getPopupScript().playQpAnim();
                      _context7.next = 11;
                      return cc.vv.gameData.awaitTime(1);

                     case 11:
                      _context7.next = 13;
                      return cc.vv.gameData.getBonusScript().enterBonusGame(true);

                     case 13:
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
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          cc.vv.gameData.GetBottomScript().ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.getFreeWinCoin();
          cc.vv.gameData.GetBottomScript().SetWin(nTotal);
          cc.vv.gameData.changeSlotsFree();
        } else {
          cc.vv.gameData.GetBottomScript().ShowFreeModel(false);
          cc.vv.gameData.changeSlotsNormal();
        }
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
        cc.find("Canvas/safe_node/slots").active = !bFree;
        cc.find("Canvas/safe_node/slots_free").active = bFree;
        cc.find("Canvas/safe_node/LMSlots_PrizePool_1").active = !bFree;
        cc.find("Canvas/safe_node/character_ren").active = !bFree;
        bFree;
      },
      showBonusView: function showBonusView(isBonus) {
        cc.find("Canvas/safe_node/slots").active = !isBonus;
        cc.find("Canvas/safe_node/spr_bg_normal").active = !isBonus;
        cc.find("Canvas/safe_node/spr_bg_bonus").active = isBonus;
        cc.find("Canvas/safe_node/character_ren").active = !isBonus;
        isBonus;
      },
      lockJackpot: function lockJackpot(jackpotvalus) {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
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
      unlockJackpot: function unlockJackpot() {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        prizepool.ResumePausePool();
      },
      playEndQpAnim: function playEndQpAnim() {
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success, failed) {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_MagicLady_changeToNormalEffect");
                success();

               case 2:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  Galileo_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7421TEKChC0opfFNID2XTR", "Galileo_Popup");
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
        this._node_extra_bonus = cc.find("node_extra_bonus", this._node_popup);
        this._node_add = cc.find("node_add", this._node_popup);
        this._node_tri_bonus = cc.find("node_tri_bonus", this._node_popup);
        this._node_end_bonus = cc.find("node_end_bonus", this._node_popup);
        this._node_end_free = cc.find("node_end_free", this._node_popup);
        this._node_extra_bonus.active = false;
        this._node_add.active = false;
        this._node_tri_bonus.active = false;
        this._node_end_bonus.active = false;
        this._node_end_free.active = false;
        this._node_qp = cc.find("safe_node/node_qp", this.node);
        this._node_qp.active = false;
      },
      playTriBonus: function playTriBonus(cnt) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var mask, bg, par, tit, par_lbl, btn, s_pos, spr1, kuang1, spr2, kuang2, spr3, kuang3, line1, line2, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_MagicLady_respinStartLayer");
                _this._node_popup.active = true;
                _this._node_tri_bonus.active = true;
                mask = cc.find("mask", _this._node_tri_bonus);
                mask.getComponent(cc.Mask).enabled = true;
                bg = cc.find("mask/bg", _this._node_tri_bonus);
                par = cc.find("mask/par", _this._node_tri_bonus);
                tit = cc.find("mask/tit", _this._node_tri_bonus);
                cc.find("lbl", tit).getComponent(cc.Label).string = cnt;
                par_lbl = cc.find("par_lbl", tit);
                btn = cc.find("mask/btn", _this._node_tri_bonus);
                tit.active = false;
                btn.active = false;
                s_pos = cc.find("mask/s_pos", _this._node_tri_bonus);
                spr1 = cc.find("mask/spr1", _this._node_tri_bonus);
                kuang1 = cc.find("kuang", spr1);
                spr2 = cc.find("mask/spr2", _this._node_tri_bonus);
                kuang2 = cc.find("kuang", spr2);
                spr3 = cc.find("mask/spr3", _this._node_tri_bonus);
                kuang3 = cc.find("kuang", spr3);
                line1 = cc.find("mask/line1", _this._node_tri_bonus);
                line2 = cc.find("mask/line2", _this._node_tri_bonus);
                par.getComponent(cc.ParticleSystem).resetSystem();
                bg.opacity = 0;
                cc.tween(bg).to(.5, {
                  opacity: 255
                }).start();
                spr1.y = s_pos.y;
                spr2.y = s_pos.y;
                spr3.y = s_pos.y;
                line1.y = s_pos.y;
                line2.y = s_pos.y;
                _context3.next = 32;
                return cc.vv.gameData.awaitTime(.5);

               case 32:
                cc.tween(spr1).to(.5, {
                  position: cc.v2(spr1.x, 0)
                }).call(function() {
                  kuang1.opacity = 0;
                  cc.tween(kuang1).to(.2, {
                    opacity: 255
                  }).delay(.5).to(.2, {
                    opacity: 0
                  }).start();
                }).start();
                cc.tween(line1).delay(.2).to(.5, {
                  position: cc.v2(line1.x, 0)
                }).start();
                cc.tween(spr2).delay(.4).to(.5, {
                  position: cc.v2(spr2.x, 0)
                }).call(function() {
                  kuang2.opacity = 0;
                  cc.tween(kuang2).to(.2, {
                    opacity: 255
                  }).delay(.5).to(.2, {
                    opacity: 0
                  }).start();
                }).start();
                cc.tween(line2).delay(.6).to(.5, {
                  position: cc.v2(line2.x, 0)
                }).start();
                cc.tween(spr3).delay(.8).to(.5, {
                  position: cc.v2(spr3.x, 0)
                }).call(function() {
                  kuang3.opacity = 0;
                  cc.tween(kuang3).to(.2, {
                    opacity: 255
                  }).delay(.5).to(.2, {
                    opacity: 0
                  }).start();
                }).start();
                _context3.next = 39;
                return cc.vv.gameData.awaitTime(1.2);

               case 39:
                tit.active = true;
                tit.opacity = 0;
                cc.tween(tit).to(.5, {
                  opacity: 255
                }).start();
                par_lbl.getComponent(cc.ParticleSystem).resetSystem();
                _context3.next = 45;
                return cc.vv.gameData.awaitTime(.2);

               case 45:
                btn.active = true;
                btn.getComponent(cc.Button).interactable = true;
                btn.off("click");
                btn.opacity = 0;
                cc.tween(btn).to(.5, {
                  opacity: 255
                }).start();
                _context3.next = 52;
                return cc.vv.gameData.awaitTime(.2);

               case 52:
                bg.getComponent(cc.Animation).play("tc_saoguang");
                self = _this;
                clickFunc = function() {
                  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        btn.getComponent(cc.Button).interactable = false;
                        mask.getComponent(cc.Mask).enabled = false;
                        mask.children.forEach(function(node) {
                          var s_scale = node.scale;
                          cc.tween(node).to(.7, {
                            scale: s_scale - .2
                          }, {
                            easing: "backIn"
                          }).call(function() {
                            node.setScale(s_scale);
                          }).start();
                        });
                        _context.next = 5;
                        return cc.vv.gameData.awaitTime(.7);

                       case 5:
                        self._node_popup.active = false;
                        self._node_tri_bonus.active = false;
                        success();

                       case 8:
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

               case 57:
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
      bonusExtraSpins: function bonusExtraSpins(toPos) {
        var _this2 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var par, tit1, tit2, tit3, canClick, itemList, _loop, i, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_MagicLady_chooseLayer_start");
                _this2._node_popup.active = true;
                cc.find("mask", _this2._node_popup).active = false;
                _this2._node_extra_bonus.active = true;
                par = cc.find("par", _this2._node_extra_bonus);
                tit1 = cc.find("tit/tit1", _this2._node_extra_bonus);
                tit2 = cc.find("tit/tit2", _this2._node_extra_bonus);
                tit3 = cc.find("tit/tit3", _this2._node_extra_bonus);
                par.active = false;
                tit1.active = true;
                tit2.active = true;
                tit3.active = false;
                _this2._node_extra_bonus.setScale(0);
                tit1.setScale(0);
                tit2.setScale(0);
                cc.tween(_this2._node_extra_bonus).to(.3, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(tit1).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(tit2).to(.7, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                canClick = true;
                itemList = [];
                _loop = function _loop(i) {
                  var item = cc.find("item" + i, _this2._node_extra_bonus);
                  itemList.push(item);
                  cc.find("gray", item).active = false;
                  cc.find("light", item).active = false;
                  item.getComponent(cc.Button).interactable = true;
                  item.off("click");
                  var self = _this2;
                  item.on("click", function() {
                    clickFunc(i);
                  });
                };
                for (i = 1; i <= 3; i++) _loop(i);
                cc.vv.gameData.checkAutoPlay(cc.find("item1", _this2._node_extra_bonus), function() {
                  clickFunc(1);
                });
                self = _this2;
                clickFunc = function() {
                  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(idx) {
                    var reqdata, msg, extraSpins, bonusGame, _i, showNode, from, to, v, length, angle;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                       case 0:
                        if (canClick) {
                          _context4.next = 2;
                          break;
                        }
                        return _context4.abrupt("return");

                       case 2:
                        canClick = false;
                        cc.find("item1", self._node_extra_bonus).stopAllActions();
                        reqdata = {
                          rtype: 1,
                          choiceId: idx
                        };
                        _context4.next = 7;
                        return cc.vv.gameData.getManageScript().reqSubGame(reqdata);

                       case 7:
                        msg = _context4.sent;
                        if (!(msg && 200 === msg.code)) {
                          _context4.next = 43;
                          break;
                        }
                        Global.SlotsSoundMgr.playEffect("music_MagicLady_chooseLayer_click");
                        extraSpins = msg.data.extraSpins;
                        bonusGame = msg.data.bonusGame;
                        cc.vv.gameData.setBonusGame(bonusGame);
                        par.active = true;
                        par.getComponent(cc.ParticleSystem).resetSystem();
                        tit3.active = true;
                        tit3.setScale(0);
                        cc.tween(tit1).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(tit2).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(tit3).to(.5, {
                          scale: 1
                        }, {
                          easing: "backOut"
                        }).start();
                        for (_i = 0; _i < itemList.length; _i++) {
                          showNode = cc.find(_i + 1 == idx ? "light" : "gray", itemList[_i]);
                          cc.find("cnt", showNode).getComponent("ImgSwitchCmp").setIndex(extraSpins[_i] - 1);
                          cc.find("text", showNode).getComponent("ImgSwitchCmp").setIndex(extraSpins[_i] > 1 ? 1 : 0);
                          showNode.active = true;
                          if (_i + 1 == idx) {
                            showNode.setScale(0);
                            cc.tween(showNode).to(.3, {
                              scale: 1
                            }).start();
                          } else {
                            showNode.opacity = 0;
                            cc.tween(showNode).delay(.3).to(.3, {
                              opacity: 255
                            }).start();
                          }
                        }
                        _context4.next = 23;
                        return cc.vv.gameData.awaitTime(.7);

                       case 23:
                        self._node_add.active = true;
                        from = self._node_add.parent.convertToNodeSpaceAR(itemList[idx - 1].convertToWorldSpaceAR(cc.v2(0, 0)));
                        to = self._node_add.parent.convertToNodeSpaceAR(toPos);
                        v = cc.v2(to.x, to.y).sub(cc.v2(from.x, from.y));
                        length = v.mag();
                        angle = v.signAngle(cc.v2(1, 0));
                        self._node_add.position = from;
                        self._node_add.angle = -angle * cc.macro.DEG + 90;
                        self._node_add.scale = length / self._node_add.height;
                        self._node_add.getComponent(cc.Animation).play("addSpin");
                        _context4.next = 35;
                        return cc.vv.gameData.awaitTime(.5);

                       case 35:
                        success();
                        Global.SlotsSoundMgr.playEffect("music_MagicLady_chooseLayer_over");
                        cc.tween(self._node_extra_bonus).to(1, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context4.next = 40;
                        return cc.vv.gameData.awaitTime(1);

                       case 40:
                        self._node_popup.active = false;
                        cc.find("mask", self._node_popup).active = true;
                        self._node_extra_bonus.active = false;

                       case 43:
                       case "end":
                        return _context4.stop();
                      }
                    }, _callee4);
                  }));
                  return function clickFunc(_x5) {
                    return _ref5.apply(this, arguments);
                  };
                }();

               case 25:
               case "end":
                return _context5.stop();
              }
            }, _callee5);
          }));
          return function(_x3, _x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      playWinBonus: function playWinBonus(wincoin) {
        var _this3 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            var btn, nodeCnt, i, node, s_scale, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_MagicLady_respinOverLayer");
                _this3._node_popup.active = true;
                _this3._node_end_bonus.active = true;
                cc.find("kuang/lbl", _this3._node_end_bonus).getComponent(cc.Label).string = Global.FormatNumToComma(wincoin);
                btn = cc.find("btn", _this3._node_end_bonus);
                btn.getComponent(cc.Button).interactable = true;
                btn.off("click");
                nodeCnt = _this3._node_end_bonus.childrenCount;
                for (i = 0; i < nodeCnt; i++) {
                  node = _this3._node_end_bonus.children[i];
                  s_scale = node.scale;
                  node.opacity = 0;
                  node.setScale(0);
                  cc.tween(node).to(.5 + .1 * i, {
                    scale: s_scale,
                    opacity: 255
                  }, {
                    easing: "backOut"
                  }).start();
                }
                _context8.next = 11;
                return cc.vv.gameData.awaitTime(.5 + .1 * nodeCnt);

               case 11:
                self = _this3;
                clickFunc = function() {
                  var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                    var _loop2, _i2;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                       case 0:
                        btn.getComponent(cc.Button).interactable = false;
                        _loop2 = function _loop2(_i2) {
                          var node = _this3._node_end_bonus.children[_i2];
                          var s_scale = node.scale;
                          cc.tween(node).to(.5 + .1 * (nodeCnt - _i2 - 1), {
                            scale: 0,
                            opacity: 0
                          }, {
                            easing: "backIn"
                          }).call(function() {
                            node.setScale(s_scale);
                          }).start();
                        };
                        for (_i2 = 0; _i2 < nodeCnt; _i2++) _loop2(_i2);
                        _context6.next = 5;
                        return cc.vv.gameData.awaitTime(.5 + .1 * nodeCnt);

                       case 5:
                        self._node_popup.active = false;
                        self._node_end_bonus.active = false;
                        success();

                       case 8:
                       case "end":
                        return _context6.stop();
                      }
                    }, _callee6);
                  }));
                  return function clickFunc() {
                    return _ref7.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context7.stop();
                    }
                  }, _callee7);
                })));

               case 15:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x6, _x7) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      playWinFreeAnim: function playWinFreeAnim(wincoin, freeCnt) {
        var _this4 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(success, failed) {
            var btn, nodeCnt, i, node, s_scale, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("music_MagicLady_FreespinOverView");
                _this4._node_popup.active = true;
                _this4._node_end_free.active = true;
                cc.find("kuang/lbl", _this4._node_end_free).getComponent(cc.Label).string = Global.FormatNumToComma(wincoin);
                cc.find("spr2/cnt", _this4._node_end_free).getComponent(cc.Label).string = freeCnt;
                btn = cc.find("btn", _this4._node_end_free);
                btn.getComponent(cc.Button).interactable = true;
                btn.off("click");
                nodeCnt = _this4._node_end_free.childrenCount;
                for (i = 0; i < nodeCnt; i++) {
                  node = _this4._node_end_free.children[i];
                  s_scale = node.scale;
                  node.opacity = 0;
                  node.setScale(0);
                  cc.tween(node).to(.5 + .1 * i, {
                    scale: s_scale,
                    opacity: 255
                  }, {
                    easing: "backOut"
                  }).start();
                }
                _context11.next = 12;
                return cc.vv.gameData.awaitTime(.5 + .1 * nodeCnt);

               case 12:
                self = _this4;
                clickFunc = function() {
                  var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                    var _loop3, _i3;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                       case 0:
                        btn.getComponent(cc.Button).interactable = false;
                        _loop3 = function _loop3(_i3) {
                          var node = _this4._node_end_free.children[_i3];
                          var s_scale = node.scale;
                          cc.tween(node).to(.5 + .1 * (nodeCnt - _i3 - 1), {
                            scale: 0,
                            opacity: 0
                          }, {
                            easing: "backIn"
                          }).call(function() {
                            node.setScale(s_scale);
                          }).start();
                        };
                        for (_i3 = 0; _i3 < nodeCnt; _i3++) _loop3(_i3);
                        _context9.next = 5;
                        return cc.vv.gameData.awaitTime(.5 + .1 * nodeCnt);

                       case 5:
                        self._node_popup.active = false;
                        self._node_end_free.active = false;
                        success();

                       case 8:
                       case "end":
                        return _context9.stop();
                      }
                    }, _callee9);
                  }));
                  return function clickFunc() {
                    return _ref10.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                })));

               case 16:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x8, _x9) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      playQpAnim: function playQpAnim() {
        var _this5 = this;
        Global.SlotsSoundMgr.playEffect("music_MagicLady_changeToNormalEffect");
        this._node_qp.active = true;
        var nodeSp = cc.find("spine", this._node_qp).getComponent(sp.Skeleton);
        nodeSp.setAnimation(0, "idle2", false);
        nodeSp.setCompleteListener(function() {
          _this5._node_qp.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Galileo_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fde28n7ktJFtbjcH4KF1yu/", "Galileo_Reel");
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
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && cc.vv.gameData.getManageScript().OnSpinEnd();
      },
      playReelStop: function playReelStop() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) {
          var item = this._symbols[i];
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              info.isStop && info.id.includes(item.GetShowId()) && ("bonus" == info.type ? item.playBonusStopAnim() : item.playStopAnimation());
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
                symbolEffect = _info.symbolStopSound ? _info.symbolStopSound : "";
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
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator3 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var info = _step3.value;
                var node = cc.find("mask/" + info.antiNode, this.node);
                if (node && node.active) {
                  node.active = false;
                  (this._stopRightNow || this._reelIdx == this._cfg.col - 1) && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
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
  Galileo_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a4beM7eKBN7oK5jknCBy0A", "Galileo_Slots");
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
      Init: function Init() {
        this._super();
        this._node_random = cc.find("node_random", this.node);
        this._node_random.active = false;
      },
      ReconnectShow: function ReconnectShow() {},
      StartMove: function StartMove() {
        if (cc.vv.gameData.isBonusGame()) cc.vv.gameData.getBonusScript().StartMove(); else {
          this._super();
          Global.SlotsSoundMgr.playNormalBgm();
        }
      },
      StopMove: function StopMove() {
        cc.vv.gameData.isBonusGame() ? cc.vv.gameData.getBonusScript().StopMove() : this._super();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
        var isTriFree = this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0;
        var isTriBonus = this._gameInfo.bonusGame;
        if (Math.random() < .25 && (isTriFree || isTriBonus)) {
          this.SetStopTime(3);
          this.triggerRandomGame(isTriFree);
        }
      },
      OnSpinEnd: function OnSpinEnd() {},
      SetSlotsResult: function SetSlotsResult(cards) {
        var bonusItems = this._gameInfo.bonusItems;
        var data = [];
        bonusItems.forEach(function(item) {
          data[item.idx - 1] = Global.copy(item);
        });
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = data[i];
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
      triggerRandomGame: function triggerRandomGame(isTriFree) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              isTriFree ? Global.SlotsSoundMgr.playEffect("music_MagicLady_showTriggerEffect1") : Global.SlotsSoundMgr.playEffect("music_MagicLady_showTriggerEffect0");
              _this._node_random.active = true;
              _context.next = 4;
              return cc.vv.gameData.awaitTime(3);

             case 4:
              _this._node_random.active = false;

             case 5:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Galileo_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fa5bIERl1PFoUTAWczADt6", "Galileo_Symbol");
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
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _type: "normal"
      },
      ClearState: function ClearState() {
        this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.stopWinTweenAction();
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
      },
      setType: function setType(type) {
        this._type = type;
      },
      ShowById: function ShowById(id, data) {
        3 == id && ("bonus_1" == this._type ? id = 301 : "bonus_2" == this._type ? id = 302 : "bonus_3" == this._type && (id = 303));
        this._super(id, data);
        this.hideAllIcon();
        data && (data.coin ? this.setCoin(data.coin) : data.jackpot && this.setJackpot(data.jackpot.id));
        this.setSymbolMask(true);
      },
      setSymbolMask: function setSymbolMask(bMask) {
        if ("bonus_1" == this._type || "bonus_2" == this._type || "bonus_3" == this._type) {
          var cfg = cc.vv.gameData.getGameCfg();
          if (cfg.symbol[this._id] && cfg.symbol[this._id].node) {
            var showNode = cc.find(cfg.symbol[this._id].node, this.node);
            bMask && cfg.symbol[this._id].isMask ? showNode.color = new cc.Color(100, 100, 100) : showNode.color = cc.Color.WHITE;
          }
        }
      },
      StartMove: function StartMove() {
        "bonus_1" == this._type || "bonus_2" == this._type || "bonus_3" == this._type || this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.stopWinTweenAction();
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
      },
      hideAllIcon: function hideAllIcon() {
        this.setCoin();
        this.setJackpot();
      },
      setCoin: function setCoin(coin) {
        var lbl = cc.find("lbl", this.node);
        if (lbl) if (coin) {
          lbl.active = true;
          lbl.getComponent(cc.Label).string = Global.formatNumShort(coin, 0);
        } else {
          lbl.active = false;
          lbl.getComponent(cc.Label).string = "";
        }
      },
      setJackpot: function setJackpot(id) {
        var jp = cc.find("jp", this.node);
        if (jp) if (id) {
          jp.active = true;
          jp.getComponent("ImgSwitchCmp").setIndex(id - 1);
        } else jp.active = false;
      },
      playWinTweenAction: function playWinTweenAction() {
        this._showNode.stopAllActions();
        var nScale = this._showNode.scale;
        this._showNodeOrgScale = nScale;
        cc.tween(this._showNode).repeatForever(cc.tween().to(.35, {
          scale: nScale + .2 * nScale
        }).to(.35, {
          scale: nScale
        }).delay(1)).start();
      },
      playBonusWinAnim: function playBonusWinAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if ((301 == id || 302 == id || 303 == id) && cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].win_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          this.node.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = this._showNode.getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, false);
        }
      },
      playBonusIdleAnim: function playBonusIdleAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if ((301 == id || 302 == id || 303 == id) && cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          this.node.zIndex = cfg.symbol[id].idle_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = this._showNode.getComponent(sp.Skeleton);
          nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
        }
      },
      playBonusStopAnim: function playBonusStopAnim() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var id, cfg, bonusIds, nodeSp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                id = _this._id;
                cfg = cc.vv.gameData.getGameCfg();
                bonusIds = cfg.bonusIds;
                if ((3 == id || bonusIds.includes(id)) && cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
                  _this._showNode && (_this._showNode.active = false);
                  _this._showNode = cc.find(cfg.symbol[id].win_node, _this.node);
                  _this._showNode.active = true;
                  _this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - _this._symbolIdx + 10 * _this._reelIdx;
                  nodeSp = _this._showNode.getComponent(sp.Skeleton);
                  if (nodeSp) {
                    nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
                    nodeSp.getComponent(sp.Skeleton).setCompleteListener(function() {
                      nodeSp.getComponent(sp.Skeleton).setCompleteListener();
                      success();
                    });
                  }
                }

               case 4:
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
      playBonusShowAnim: function playBonusShowAnim() {
        var _this2 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
            var id, cfg, bonusIds, nodeSp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                id = _this2._id;
                cfg = cc.vv.gameData.getGameCfg();
                bonusIds = cfg.bonusIds;
                if (bonusIds.includes(id) && cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].show_ani) {
                  _this2._showNode && (_this2._showNode.active = false);
                  _this2._showNode = cc.find(cfg.symbol[id].win_node, _this2.node);
                  _this2._showNode.active = true;
                  _this2.node.zIndex = cfg.symbol[id].show_ani.zIndex - _this2._symbolIdx + 10 * _this2._reelIdx;
                  nodeSp = _this2._showNode.getComponent(sp.Skeleton);
                  if (nodeSp) {
                    nodeSp.setAnimation(0, cfg.symbol[id].show_ani.name, false);
                    nodeSp.getComponent(sp.Skeleton).setCompleteListener(function() {
                      nodeSp.getComponent(sp.Skeleton).setCompleteListener();
                      success();
                    });
                  }
                }

               case 4:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      getAnimationTop: function getAnimationTop() {
        if (this._topAniNode) {
          var cloneNode = cc.find(cc.js.formatStr("symbol_ani_%s_%s", this._symbolIdx, this._reelIdx), this._topAniNode);
          if (cloneNode) return cloneNode;
        }
        return null;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Galileo_BonusReel", "Galileo_BonusSlots", "Galileo_Cfg", "Galileo_FreeReel", "Galileo_FreeSlots", "Galileo_GameData", "Galileo_Logic", "Galileo_Manage", "Galileo_Popup", "Galileo_Reel", "Galileo_Slots", "Galileo_Symbol" ]);