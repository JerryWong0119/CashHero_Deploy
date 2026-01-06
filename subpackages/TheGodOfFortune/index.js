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
  TheGodOfFortune_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2cd00omnZtLVpaiZAY9SpIQ", "TheGodOfFortune_BonusGame");
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
        _slotsUI: null,
        _col: 20,
        _row: 1,
        _reels: [],
        _cfg: null,
        _stopTime: null,
        _exitLast: null,
        _exitCallBack: null,
        _bStopRightnow: null,
        _restNum: 0,
        _curNum: 0,
        _emptyId: 18,
        _greenId: 4,
        _wildId: 2
      },
      Init: function Init() {
        this._slotsUI = cc.find("safe_node/slots/respin_slots", this.node);
        this._topAnimationNode = cc.find("top_ani", this._slotsUI);
        this._top_ani = cc.find("top_ani", this._slotsUI);
        this._particle_sj = cc.find("particle_sj", this._slotsUI);
        this._particle_sj.active = false;
        this._node_spine = cc.find("safe_node/slots/node_respin", this.node);
        this._node_spine.active = false;
        this._spine_jsk = cc.find("spine_jishukuang", this._node_spine);
        this._node_allNum = cc.find("node_allNum", this._spine_jsk);
        this._spine_winner = cc.find("spine_winner", this._spine_jsk);
        this._node_allNum.active = false;
        this._spine_winner.active = false;
        this._node_times = cc.find("node_times", this._node_spine);
        this._bonusBg = cc.find("safe_node/spr_bg_respin", this.node);
        this.createReels(this._col);
        this.initAllHolderState(false);
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      createReels: function createReels(col) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this._slotsUI);
          var scp = node.addComponent("TheGodOfFortune_BonusReel");
          scp.Init(i, 1, this._top_ani);
          this._reels.push(scp);
        }
      },
      initAllBg: function initAllBg(bShow) {
        for (var col = 0; col < this._col; col++) this._reels[col].showBonusBg(bShow);
      },
      initAllWildKuang: function initAllWildKuang(bShow) {
        for (var col = 0; col < this._col; col++) this._reels[col].showBonusWildKuang(bShow);
      },
      setWildKuangByIdx: function setWildKuangByIdx(idx, bShow) {
        this._reels[this.getColByIdx(idx)].showBonusWildKuang(bShow);
      },
      initAllHolderState: function initAllHolderState(bShow) {
        for (var col = 0; col < this._col; col++) this._reels[col].showBonusHolder(bShow);
      },
      setHolderStateByIdx: function setHolderStateByIdx(idx, bShow) {
        this._reels[this.getColByIdx(idx)].showBonusHolder(bShow);
      },
      getHolderByIdx: function getHolderByIdx(idx) {
        return this._reels[this.getColByIdx(idx)].getBonusHolder();
      },
      initAllBonusSymbol: function initAllBonusSymbol() {
        for (var col = 0; col < this._col; col++) {
          this._reels[col].showBonusHolder(false);
          this._reels[col].GetSymbolByRow(0).ShowById(this._emptyId);
        }
      },
      playLastGame: function playLastGame(exitCallBack) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var idxs, i, sym, lastList, reelsData;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              cc.vv.gameData.setIsEndOfRound(true);
              idxs = cc.vv.gameData.getNormalWildIdxs();
              for (i = 0; i < idxs.length; i++) {
                _this2._reels[_this2.getColByIdx(idxs[i])].showBonusBg(true);
                sym = _this2.GetSymbolByIdx(idxs[i]);
                sym.playBonusRedKuangAnim(true);
              }
              _context.next = 5;
              return _this2.awaitTime(2);

             case 5:
              _this2.StartMove();
              _context.next = 8;
              return _this2.awaitTime(.5);

             case 8:
              lastList = cc.vv.gameData.getLastGame();
              reelsData = _this2.creatReelData(lastList.info);
              _this2.SetSlotsResult(reelsData);
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_2");
              _this2._exitLast = exitCallBack;

             case 13:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      enterBonusGame: function enterBonusGame(data, exitCallBack, isFrist) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("ngbgm");
              cc.vv.gameData.setIsBonusGame(true);
              cc.vv.gameData.GetCollectScript().setBtnCollectState(false);
              _this3._exitCallBack = exitCallBack;
              _this3._bonusBg.active = true;
              _this3._slotsUI.active = true;
              _this3.initData(data);
              _this3.initPool(true);
              if (!isFrist) {
                _context2.next = 17;
                break;
              }
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
              _context2.next = 13;
              return _this3.awaitTime(1);

             case 13:
              _context2.next = 15;
              return cc.vv.gameData.GetPopupScript().showStartBonus();

             case 15:
              _context2.next = 18;
              break;

             case 17:
              cc.vv.gameData.setIsEndOfRound(false);

             case 18:
              _context2.next = 20;
              return _this3.awaitTime(2);

             case 20:
              _this3.sendNextRound();

             case 21:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      exitBonusGame: function exitBonusGame() {
        cc.vv.gameData.setIsEndOfRound(false);
        cc.vv.gameData.setIsBonusGame(false);
        cc.vv.gameData.GetCollectScript().setBtnCollectState(true);
        this._bonusBg.active = false;
        this._node_spine.active = false;
        this._spine_winner.active = false;
        this.initAllWildKuang(false);
        this.initAllBg(false);
        this.initAllHolderState(false);
        this.initAllBonusSymbol();
        this.initPool(false);
      },
      initData: function initData(data) {
        this._node_spine.active = true;
        var list = data.info;
        var newList = {};
        for (var key in list) "coin" === list[key].type || "pool" === list[key].type ? newList[key] = list[key] : "wild" === list[key].type;
        this.initAllWildKuang(false);
        var reelsData = this.creatReelData(newList);
        this.SetSlotsResult(reelsData);
        var count = 0;
        for (var i = 0; i < 20; i++) {
          var symbol = this.GetSymbolByIdx(i + 1);
          symbol.ShowById(reelsData[i].sid, reelsData[i].data);
          symbol.node.parent.active = true;
          this._reels[this.getColByIdx(i + 1)].showBonusBg(true);
          if (18 !== reelsData[i].sid) {
            var symScp = this.ShowSymbolTopAni(0, this.getColByIdx(i + 1));
            symScp.showBonusWildKuang(true);
            count += 1;
          }
        }
        this._restNum = data.num ? data.num : 3;
        this._curNum = this._restNum;
        this.updateSpinsNum(false);
        this.updateAllPrizeNum(count);
      },
      initPool: function initPool(bShow) {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        if (bShow) {
          var poolList = cc.vv.gameData.getBonusPoolList();
          prizepool.PausePool([ {
            prizeType: 0,
            pauseNum: poolList[0]
          }, {
            prizeType: 1,
            pauseNum: poolList[1]
          }, {
            prizeType: 2,
            pauseNum: poolList[2]
          }, {
            prizeType: 3,
            pauseNum: poolList[3]
          } ]);
        } else prizepool.ResumePausePool();
      },
      playGreenTriAnim: function playGreenTriAnim() {
        var list = cc.vv.gameData.getLastGame().info;
        var colList = [];
        for (var key in list) if ("coin" === list[key].type || "pool" === list[key].type) {
          var idx = Number(key.substring("idx_".length));
          colList.push(this.getColByIdx(idx));
        }
        for (var i = 0; i < colList.length; i++) this._reels[colList[i]].ShowAntiEffect(true);
      },
      hideAllGreenAnim: function hideAllGreenAnim() {
        for (var col = 0; col < this._col; col++) this._reels[col].ShowAntiEffect(false);
      },
      updateSpinsNum: function updateSpinsNum(isLast) {
        if (this._restNum > this._curNum) {
          Global.SlotsSoundMgr.playEffect("num2");
          var spine_bomb = this._node_times.getChildByName("spine_bomb");
          spine_bomb.active = true;
          spine_bomb.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          spine_bomb.getComponent(sp.Skeleton).setCompleteListener(function() {
            spine_bomb.active = false;
          });
        }
        this._curNum = this._restNum;
        var pic = "theme185_respin_wenben1";
        pic = isLast ? "theme185_respin_wenben5" : "theme185_respin_wenben" + (4 - this._restNum);
        this._node_times.active = true;
        this._node_times.getChildByName("spr").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("base").getSpriteFrame(pic);
      },
      updateAllPrizeNum: function updateAllPrizeNum(num) {
        if (num > 0) {
          var lbl = this._node_allNum.getChildByName("lbl_nums").getComponent(cc.Label);
          if (num > Number(lbl.string)) {
            Global.SlotsSoundMgr.playEffect("num1");
            var spine_bomb = this._node_allNum.getChildByName("spine_bomb");
            spine_bomb.active = true;
            spine_bomb.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            spine_bomb.getComponent(sp.Skeleton).setCompleteListener(function() {
              spine_bomb.active = false;
            });
          }
          this._node_allNum.active = true;
          lbl.string = num;
        } else this._node_allNum.active = false;
      },
      StartMove: function StartMove() {
        this._bStopRightnow = false;
        if (cc.vv.gameData.isEndOfRound()) {
          var idxs = cc.vv.gameData.getNormalWildIdxs();
          for (var i = 0; i < idxs.length; i++) this.setHolderStateByIdx(idxs[i], true);
        } else {
          this._restNum -= 1;
          this.updateSpinsNum(false);
        }
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._coinBonusInfo = msg.coinBonus;
        this._totalTime = this._coinBonusInfo.total;
        var info = this._coinBonusInfo.info;
        var reelsData = this.creatReelData(info);
        this.SetSlotsResult(reelsData);
        this._restNum = this._coinBonusInfo.num;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_2");
      },
      MoveReels: function MoveReels(arry) {
        this.moveReelLastIdx = -1;
        for (var i = 0; i < arry.length; i++) {
          var item = arry[i];
          item.StartMove();
          var idx = item.GetReelIdx();
          if (cc.vv.gameData.isEndOfRound()) {
            var idxs = cc.vv.gameData.getNormalWildIdxs();
            idxs.includes(this.getIdxByCol(idx)) && idx > this.moveReelLastIdx && (this.moveReelLastIdx = idx);
          } else idx > this.moveReelLastIdx && (this.moveReelLastIdx = idx);
        }
      },
      StopMove: function StopMove() {
        this._bStopRightnow = true;
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        this._stopTime = -1;
        for (var i = 0; i < this._reels.length; i++) {
          var item = this._reels[i];
          var reelStopInterv = 0;
          item.StopMove(reelStopInterv);
          item.StopMoveRightNow();
        }
      },
      creatReelData: function creatReelData(list) {
        var reelData = [];
        for (var index = 0; index < 20; index++) {
          var info = {};
          info.sid = this._emptyId;
          info.data = {};
          reelData.push(info);
        }
        for (var key in list) {
          var idx = Number(key.substring("idx_".length));
          reelData[idx - 1].sid = this.convertTypeToId(list[key].type);
          reelData[idx - 1].data = list[key];
        }
        return reelData;
      },
      convertTypeToId: function convertTypeToId(type) {
        var id = this._emptyId;
        "coin" === type || "pool" === type ? id = this._greenId : "wild" === type && (id = this._wildId);
        return id;
      },
      SetSlotsResult: function SetSlotsResult(reelsData) {
        var acRow = reelsData.length / this._col;
        var reelResults = [];
        for (var i = 0; i < reelsData.length; i++) {
          var col = this.getColByIdx(i + 1);
          var res = {};
          res.sid = reelsData[i].sid;
          res.data = reelsData[i].data;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].unshift(res);
        }
        for (var _i = 0; _i < this._reels.length; _i++) {
          var item = this._reels[_i];
          var reelRes = reelResults[_i];
          item.SetResult(reelRes);
        }
      },
      sendNextRound: function sendNextRound() {
        cc.vv.gameData.GetBottomScript().SendSpinReq();
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore(colIdx) {
        if (cc.vv.gameData.isEndOfRound()) {
          var idxs = cc.vv.gameData.getNormalWildIdxs();
          if (!idxs.includes(this.getIdxByCol(colIdx))) return;
          var count = 0;
          var bLast = true;
          for (var i = 0; i <= colIdx; i++) if (idxs.includes(this.getIdxByCol(i)) && this._reels[i].GetSymbolByRow(0).GetShowId() === this._greenId) {
            count += 1;
            for (var s = colIdx + 1; s < this._col; s++) if (idxs.indexOf(this.getIdxByCol(s))) {
              bLast = false;
              break;
            }
          }
          if (count >= 5 && !bLast) {
            var includeNum = 0;
            for (var _i2 = colIdx + 1; _i2 < this._col; _i2++) if (idxs.includes(this.getIdxByCol(_i2))) {
              0 === includeNum && this._reels[_i2].playAntiAnimation();
              includeNum += 1;
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              this._reels[_i2].AddDelayTime(nAddSpeedTime);
            }
          }
        }
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {},
      OnReelBounsActionEnd: function OnReelBounsActionEnd(colIdx) {
        for (var row = 0; row < this._row; row++) {
          var syc = this.getSymbolTopAni(row, colIdx);
          if (syc) ; else {
            var symScp = this._reels[colIdx].GetSymbolByRow(row);
            if (symScp.GetShowId() === this._wildId && cc.vv.gameData.isEndOfRound()) {
              Global.SlotsSoundMgr.playEffect("symbol_wild");
              symScp.playStopAnimation();
              this.showKuangLast(colIdx);
            }
            if (4 === symScp.GetShowId()) if (cc.vv.gameData.isEndOfRound()) {
              Global.SlotsSoundMgr.playEffect("symbol_bonus2");
              symScp.playStopAnimation();
              this.showKuangLast(colIdx);
            } else {
              this.showStopAni(row, colIdx);
              if (!this._bStopRightnow) {
                var lbl = this._node_allNum.getChildByName("lbl_nums").getComponent(cc.Label);
                var num = Number(lbl.string) + 1;
                this.updateAllPrizeNum(num);
              }
            }
          }
        }
      },
      showKuangLast: function showKuangLast(col) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this4._reels[col].showBonusWildKuang(false);
              _context3.next = 3;
              return _this4.awaitTime(.5);

             case 3:
              _this4._reels[col].showBonusWildKuang(true);

             case 4:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showStopAni: function showStopAni(row, col) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var symScpTop;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              symScpTop = _this5.ShowSymbolTopAni(row, col);
              symScpTop.playStopAnimation();
              _context4.next = 4;
              return _this5.awaitTime(.5);

             case 4:
              symScpTop.showBonusWildKuang(true);

             case 5:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var nWin, total;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              if (!cc.vv.gameData.isEndOfRound()) {
                _context5.next = 7;
                break;
              }
              _context5.next = 3;
              return _this6.awaitTime(1);

             case 3:
              cc.vv.gameData.setIsBonusGame(false);
              _this6._exitLast && _this6._exitLast();
              _context5.next = 38;
              break;

             case 7:
              _this6.updateAllPrizeNum(_this6._coinBonusInfo.total);
              if (!(_this6._restNum > 0)) {
                _context5.next = 15;
                break;
              }
              _this6.updateSpinsNum(false);
              _context5.next = 12;
              return _this6.awaitTime(1);

             case 12:
              _this6.sendNextRound();
              _context5.next = 38;
              break;

             case 15:
              _this6.updateSpinsNum(true);
              Global.SlotsSoundMgr.playEffect("respin_end");
              _context5.next = 19;
              return _this6.awaitTime(1);

             case 19:
              _context5.next = 21;
              return _this6.playSJAnim();

             case 21:
              nWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
              total = nWin;
              _context5.next = 25;
              return cc.vv.gameData.GetPopupScript().showEndBonus(total);

             case 25:
              _context5.next = 27;
              return new Promise(function(sucess, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, total, true, sucess);
              });

             case 27:
              cc.vv.gameData.GetPopupScript().playQP1Anim();
              _context5.next = 30;
              return _this6.awaitTime(1.5);

             case 30:
              cc.vv.gameData.GetTotalFree() <= 0 && cc.vv.gameData.GetSlotsScript().setRandomCards();
              _this6.exitBonusGame();
              _this6.hideAllTopAni();
              _context5.next = 35;
              return _this6.awaitTime(2);

             case 35:
              Global.SlotsSoundMgr.stopBgm();
              cc.vv.gameData.GetSlotsScript().playGameBgm();
              _this6._exitCallBack && _this6._exitCallBack();

             case 38:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      hideAllTopAni: function hideAllTopAni() {
        for (var col = 0; col < this._col; col++) for (var row = 0; row < this._row; row++) {
          var symScp = this.getSymbolTopAni(row, col);
          symScp && symScp.node.destroy();
        }
      },
      playSJAnim: function playSJAnim() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  var lbl_num, num, lbl_bottom, col, row, symScp, startPos, endPos, moveT, prize;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _this7._node_allNum.active = false;
                      _this7._node_times.active = false;
                      _this7._spine_winner.active = true;
                      _this7._spine_winner.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      Global.SlotsSoundMgr.playEffect("frame_change");
                      lbl_num = _this7._spine_winner.getChildByName("lbl_result");
                      lbl_num.getComponent(cc.Label).string = "";
                      _context6.next = 9;
                      return _this7.awaitTime(1);

                     case 9:
                      num = 0;
                      lbl_bottom = cc.vv.gameData.GetBottomScript().getCurrentWin();
                      col = 0;

                     case 12:
                      if (!(col < _this7._col)) {
                        _context6.next = 39;
                        break;
                      }
                      row = _this7._row - 1;

                     case 14:
                      if (!(row >= 0)) {
                        _context6.next = 36;
                        break;
                      }
                      symScp = _this7._reels[col].GetSymbolByRow(row);
                      if (!(symScp.getPrize() > 0)) {
                        _context6.next = 33;
                        break;
                      }
                      symScp.playCollectAnim();
                      startPos = _this7._slotsUI.convertToNodeSpaceAR(symScp.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      endPos = _this7._slotsUI.convertToNodeSpaceAR(lbl_num.convertToWorldSpaceAR(cc.v2(0, 0)));
                      moveT = .3;
                      _this7.flyParticle(startPos, endPos, moveT);
                      _context6.next = 24;
                      return _this7.awaitTime(moveT);

                     case 24:
                      prize = symScp.getPrize();
                      Global.doRoallNumEff(lbl_num, num, num + prize, .3, null, null, 0, true);
                      num += prize;
                      cc.vv.gameData.GetBottomScript().SetWin(lbl_bottom + prize);
                      lbl_bottom += prize;
                      _this7._spine_winner.getChildByName("spine_win_zi").active = true;
                      _this7._spine_winner.getChildByName("spine_win_zi").getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      _context6.next = 33;
                      return _this7.awaitTime(.2);

                     case 33:
                      row--;
                      _context6.next = 14;
                      break;

                     case 36:
                      col++;
                      _context6.next = 12;
                      break;

                     case 39:
                      sucess();

                     case 40:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      flyParticle: function flyParticle(startPos, endPos, moveT) {
        Global.SlotsSoundMgr.playEffect("fly1");
        var par = cc.instantiate(this._particle_sj);
        par.active = true;
        par.getComponent(cc.ParticleSystem).resetSystem();
        par.parent = this._slotsUI;
        par.position = startPos;
        par.runAction(cc.sequence(cc.moveTo(moveT, endPos), cc.destroySelf()));
      },
      ShowSymbolTopAni: function ShowSymbolTopAni(nRow, nCol) {
        var cfg = cc.vv.gameData.getGameCfg();
        var symScp = cfg.scripts.Symbols;
        var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", nRow, nCol), this._topAnimationNode);
        if (showNode) {
          showNode.active = true;
          return showNode.getComponent(symScp);
        }
        var reel = this._reels[nCol];
        var symbol = reel.GetSymbolByRow(nRow);
        if (symbol) {
          var wordPos = symbol.node.convertToWorldSpaceAR(cc.v2(0));
          var newNode = cc.instantiate(symbol.node);
          newNode.parent = this._topAnimationNode;
          newNode.name = cc.js.formatStr("top_symbol_%s_%s", nRow, nCol);
          newNode.position = this._topAnimationNode.convertToNodeSpaceAR(wordPos);
          return newNode.getComponent(symScp);
        }
      },
      getSymbolTopAni: function getSymbolTopAni(nRow, nCol) {
        var cfg = cc.vv.gameData.getGameCfg();
        var symScp = cfg.scripts.Symbols;
        var showNode = cc.find(cc.js.formatStr("top_symbol_%s_%s", nRow, nCol), this._topAnimationNode);
        if (showNode) {
          showNode.active = true;
          return showNode.getComponent(symScp);
        }
        return null;
      },
      GetStopTime: function GetStopTime() {
        return cc.vv.gameData.getGameCfg().auto_stop_time || 3;
      },
      SetStopTime: function SetStopTime(nVal) {
        this._stopTime = nVal;
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = cc.vv.gameData.getGameCfg().bonusReelStopInter || .1;
        var time = 0;
        if (cc.vv.gameData.isEndOfRound()) {
          var idxs = cc.vv.gameData.getNormalWildIdxs();
          if (idxs.includes(this.getIdxByCol(reelIdx))) {
            var count = 0;
            for (var i = 0; i <= reelIdx; i++) idxs.includes(this.getIdxByCol(i)) && (count += 1);
            time = count * nIter;
          } else time = 0;
        } else time = Math.floor(reelIdx / 4) * nIter;
        return time;
      },
      getColByIdx: function getColByIdx(idx) {
        var colList = [ 1, 5, 9, 13, 17, 2, 6, 10, 14, 18, 3, 7, 11, 15, 19, 4, 8, 12, 16, 20 ];
        return colList[idx - 1] - 1;
      },
      getIdxByCol: function getIdxByCol(col) {
        var idxList = [ 1, 6, 11, 16, 2, 7, 12, 17, 3, 8, 13, 18, 4, 9, 14, 19, 5, 10, 15, 20 ];
        return idxList[col];
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = this.getColByIdx(idx);
        return this._reels[col].GetSymbolByRow(0);
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
  TheGodOfFortune_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b108aPOVKNI36P8GcJYg+DM", "TheGodOfFortune_BonusReel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _reelIdx: null,
        _nCount: 0,
        _symbols: [],
        _symbolTemplete: null,
        _holderNode: null,
        _bMoving: false,
        _bStoping: false,
        _holderOrigPosY: null,
        _curY: 0,
        _stopTime: 0,
        _result: null,
        _originResult: null,
        totalAddHeight: 0,
        deltaHeight: 0,
        curAddHeight: 0,
        _reelState: [],
        _topAniNode: null,
        _backup: false,
        _cfg: null
      },
      showBonusHolder: function showBonusHolder(bShow) {
        var holder = cc.find("mask/holder", this.node);
        holder && (holder.active = bShow);
      },
      getBonusHolder: function getBonusHolder() {
        var holder = cc.find("mask/holder", this.node);
        return holder;
      },
      showBonusBg: function showBonusBg(bShow) {
        var bg = cc.find("mask/bg", this.node);
        bg && (bg.active = bShow);
      },
      showBonusWildKuang: function showBonusWildKuang(bShow) {
        var kuang_wild = cc.find("mask/kuang_wild", this.node);
        if (kuang_wild) {
          kuang_wild.active = bShow;
          bShow && kuang_wild.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
        }
      },
      start: function start() {},
      Init: function Init(idx, nCount, node) {
        this._reelIdx = idx;
        this._nCount = nCount;
        this._symbols = [];
        this._topAniNode = node;
        this._cfg = cc.vv.gameData.getGameCfg();
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this.LoadSymbols();
        this.ShowAntiEffect(false);
      },
      GetReelIdx: function GetReelIdx() {
        return this._reelIdx;
      },
      LoadSymbols: function LoadSymbols() {
        this._symbolTemplete || (this._symbolTemplete = cc.vv.gameData.GetPrefabByName("bonus_Symbol"));
        for (var i = 0; i < this._nCount + 1; i++) {
          var cfg = cc.vv.gameData.getGameCfg();
          var node = cc.instantiate(this._symbolTemplete);
          node.parent = this._holderNode;
          var scp = node.addComponent(cfg.scripts.Symbols);
          var idx = this._symbols.length;
          scp.setType("bonus_2");
          scp.Init(idx, this._topAniNode);
          scp.SetSymbolReelIdx(this._reelIdx);
          scp.ShowById(cfg.emptyId[0]);
          this._symbols.push(scp);
        }
        this.ReLayOut();
      },
      ReLayOut: function ReLayOut() {
        for (var i = 0; i < this._symbols.length; i++) {
          var element = this._symbols[i];
          element.node.position = this.GetSymbolPosByRow(i);
          element.SetSymbolIdx(i);
        }
      },
      GetSymbolByRow: function GetSymbolByRow(row) {
        return this._symbols[row];
      },
      GetSymbolPosByRow: function GetSymbolPosByRow(row) {
        return cc.v2(0, (row + .5) * this._cfg.symbolSize.height);
      },
      StartMove: function StartMove() {
        this._result = null;
        this._stopRightNow = null;
        this._bNotifyReadyStop = null;
        this._originResult = null;
        this._addSpeed = 0;
        this._curY = 0;
        this._bMoving = true;
        this._bStoping = false;
        this._offsetY = 0;
        for (var i = 0; i < this._symbols.length; i++) {
          var symbol = this._symbols[i];
          symbol.StartMove();
        }
        this._speed = this._cfg.speed;
        this._offset = this._cfg.symbolSize.height;
      },
      StopMove: function StopMove(delayTime) {
        if (!this._bMoving) return;
        this._bStoping = true;
        this._stopTime = delayTime;
      },
      updataSymbol: function updataSymbol() {
        var symbol = this._symbols.shift();
        var symbolData = null;
        if (this._stopTime <= 0 && this._bStoping && this._result) {
          this.ReadyToStop();
          symbolData = this._result.shift();
          symbolData || (this._bMoving = false);
        }
        symbolData ? symbol.ShowById(symbolData.sid, symbolData.data) : symbol.ShowRandomSymbol();
        this._symbols.push(symbol);
        this.ReLayOut();
        this._curY = 0;
        this._holderNode.y = this._holderOrigPosY;
        this._bMoving || this.OnReelBounsAction();
      },
      StopMoveRightNow: function StopMoveRightNow() {
        this._stopRightNow = true;
        if (this._bMoving && this._originResult) {
          this._result = Global.copy(this._originResult);
          for (var i = 0; i < this._symbols.length; i++) this.updataSymbol();
        }
      },
      AddDelayTime: function AddDelayTime(nVal) {
        if (this._bMoving) {
          this._stopTime += nVal;
          this._result = Global.copy(this._originResult);
        } else cc.log(this._reelIdx + "\u5217\u5df2\u7ecf\u505c\u6b62\u4e86\u8fd8\u52a0\u901f\uff01\uff01\uff01");
      },
      SetSpeed: function SetSpeed(speed) {
        this._speed = speed;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.GetBonusScript();
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      ReadyToStop: function ReadyToStop() {},
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        var slots = cc.vv.gameData.GetBonusScript();
        slots.OnReelBounsActionBefore(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        var slots = cc.vv.gameData.GetBonusScript();
        slots.OnReelBounsActionDeep(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.GetBonusScript();
        slots.OnReelBounsActionEnd(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      },
      OnReelBounsAction: function OnReelBounsAction() {
        var isStop = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var distance = this._cfg.bounceInfo ? this._cfg.bounceInfo.distance : 30;
        var time = this._cfg.bounceInfo ? this._cfg.bounceInfo.time : .3;
        var deepTime = isStop ? 0 : distance / this._speed;
        cc.tween(this._holderNode).call(this.OnReelBounsActionBefore.bind(this)).to(deepTime, {
          position: cc.v2(this._holderNode.x, this._holderOrigPosY - distance)
        }).call(this.OnReelBounsActionDeep.bind(this)).to(time, {
          position: cc.v2(this._holderNode.x, this._holderOrigPosY)
        }).call(this.OnReelBounsActionEnd.bind(this)).start();
      },
      SetResult: function SetResult(val) {
        this._originResult = Global.copy(val);
        this._result = val;
      },
      AddReelStateInfo: function AddReelStateInfo(info) {
        this._reelState.push(info);
      },
      playAntiAnimation: function playAntiAnimation() {
        this.ShowAntiEffect(true);
        Global.SlotsSoundMgr.playEffect("anticipation2");
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          var node = cc.find("node_anti", this.node);
          if (node && node.active) {
            node.active = false;
            this._stopRightNow && Global.SlotsSoundMgr.stopEffectByName("anticipation2");
          }
        } else {
          var _node = cc.find("node_anti", this.node);
          _node ? _node.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      UpdatePosition: function UpdatePosition(dt) {
        this._stopTime = this._stopTime - dt;
        this._curY += dt * this._speed;
        this._curY > this._offset ? this.updataSymbol() : this._holderNode.y = this._holderOrigPosY - this._curY;
      },
      update: function update(dt) {
        this._bMoving && this.UpdatePosition(dt);
      }
    });
    cc._RF.pop();
  }, {} ],
  TheGodOfFortune_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca4a1kmeTBBY7WrDXZKQzOB", "TheGodOfFortune_Cfg");
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
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w201",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 202, {
        node: "s202",
        win_node: "w202",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        trigger_ani: {
          name: "animation",
          zIndex: 400
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 401, {
        node: "s401",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        collect_ani: {
          name: "animation2",
          zIndex: 100
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 402, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        collect_ani: {
          name: "animation2",
          zIndex: 100
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 601, {
        node: "s601",
        win_node: "w601",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 602, {
        node: "s602",
        win_node: "w602",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 603, {
        node: "s603",
        win_node: "w603",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 604, {
        node: "s604",
        win_node: "w604",
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
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13"
      }), _defineProperty(_symbol, 14, {
        node: "s14"
      }), _defineProperty(_symbol, 15, {
        node: "s15"
      }), _defineProperty(_symbol, 16, {
        node: "s16"
      }), _defineProperty(_symbol, 17, {
        node: "s17"
      }), _defineProperty(_symbol, 18, {
        node: "s18",
        win_node: "",
        win_ani: {
          name: "",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "TheGodOfFortune_Slots",
        Reels: "TheGodOfFortune_Reel",
        Symbols: "TheGodOfFortune_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      bonusSymPre: "bonus_Symbol",
      symbolSize: {
        height: 80
      },
      randomSymbols: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ],
      bonusRandom1: [ 2, 4, 18 ],
      bonusRandom2: [ 4, 18 ],
      emptyId: [ 18 ],
      wildId: [ 2 ],
      greenId: [ 4 ],
      bonusCoinMultList: [ .5, 1, 2, 2.5, 3, 4, 6, 8, 10 ],
      triFreeWildKuang: [ 3, 8, 13, 18 ],
      superFreeWildKuang: [ [ 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0 ], [ 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0 ], [ 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1 ], [ 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ], [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ], [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ], [ 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1 ] ],
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      bonusReelStopInter: .2,
      auto_stop_time: 1,
      autoModelDelay: .5,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      helpItems: [ "games/TheGodOfFortune/prefab/help_node/page1", "games/TheGodOfFortune/prefab/help_node/page2", "games/TheGodOfFortune/prefab/help_node/page3", "games/TheGodOfFortune/prefab/help_node/page4", "games/TheGodOfFortune/prefab/help_node/page5" ],
      reelStateInfo: [ {
        id: [ 3 ],
        mini: 3,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "node_anti",
        path: "games/TheGodOfFortune/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "anticipation1",
        antSpeed: 2300
      } ],
      normalBgm: "ngbgm1",
      commEffect: {
        path: "games/TheGodOfFortune/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      }
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  TheGodOfFortune_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a887LYHNhJQpQog05ECted", "TheGodOfFortune_Collect");
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
        _boxes: [],
        _listofIngots: [],
        _curMapId: 0,
        _islock: false,
        _isMultLast: 1,
        _multIdx: 0,
        _nextIngot: 0,
        _isLeftOrRight: 0
      },
      start: function start() {},
      Init: function Init() {
        this._btn_collect = cc.find("safe_node/slots/btn_collect", this.node);
        this._btn_collect.on("click", this.onClickCollectBtn.bind(this));
        this.totalbetUpdated();
        this._node_store = cc.find("safe_node/node_store", this.node);
        this._node_store.active = false;
        this._store_bg = cc.find("store_bg", this._node_store);
        this._store_layout = cc.find("layout", this._node_store);
        var btn_close = cc.find("btn_close", this._store_layout);
        btn_close.on("click", this.onClickCloseBtn.bind(this));
        var btn_left = cc.find("btn_left", this._store_layout);
        btn_left.on("click", this.onClickLeftBtn.bind(this));
        var btn_right = cc.find("btn_right", this._store_layout);
        btn_right.on("click", this.onClickRightBtn.bind(this));
        for (var i = 1; i <= 9; i++) {
          var box = cc.find("node_box/item" + i, this._store_layout);
          box.on("click", this.onClickBoxBtn.bind(this));
          this._boxes[i] = {
            node: box,
            state: "locking",
            spine_red: box.getChildByName("spine_red"),
            spine_blue: box.getChildByName("spine_blue"),
            moneybg: box.getChildByName("money_bg"),
            lblcoin: cc.find("lbl_wincoin", box).getComponent(cc.Label),
            sprWin: cc.find("spr_win", box).getComponent(cc.Sprite),
            lblprice: cc.find("money_bg/lbl_money", box).getComponent(cc.Label),
            spine_suo: box.getChildByName("spine_suo")
          };
        }
        this._boxMask = cc.find("node_box/mask", this._store_layout);
        this._boxMask.active = false;
        this._spr_suo = cc.find("node_box/spr_suo", this._store_layout);
        this._spr_suo.active = false;
        this._particle_mult = cc.find("particle_mult", this._store_layout);
        this._particle_mult.active = false;
        this._listofIngots = cc.vv.gameData.getListofIngots();
        this.refreshIngotNum();
        this._btn_tip = cc.find("btn_tip", this._store_layout);
        this._btn_tip.on("click", this.onClickTipBtn.bind(this));
        this._spr_tip = cc.find("spr_tip", this._store_layout);
        this._spr_tip.active = false;
        this._spine_qz = cc.find("store_qz", this._store_layout);
        this._spine_qz.active = false;
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, false, this);
      },
      onRecvMsgSubAction: function onRecvMsgSubAction(msg) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              if (!(200 === msg.code)) {
                _context.next = 18;
                break;
              }
              if (!(2 === msg.data.rtype)) {
                _context.next = 6;
                break;
              }
              _this._nextIngot = msg.data.ingot;
              _this.showBuyBox(msg.data);
              _context.next = 18;
              break;

             case 6:
              if (!(3 === msg.data.rtype)) {
                _context.next = 18;
                break;
              }
              _this._pageInfo = msg.data;
              _this._boxInfo = msg.data.info ? msg.data.info : [];
              _this._nextIngot = msg.data.ingot;
              if (!(0 === _this._isLeftOrRight)) {
                _context.next = 14;
                break;
              }
              _this.showStore();
              _context.next = 17;
              break;

             case 14:
              _this.refreshDataWithAction(20 * _this._isLeftOrRight);
              _context.next = 17;
              return _this.awaitTime(.15);

             case 17:
              _this.refreshData();

             case 18:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      setBtnCollectState: function setBtnCollectState(bShow) {
        this._btn_collect.active = bShow;
      },
      totalbetUpdated: function totalbetUpdated() {
        var islock = cc.vv.gameData.GetBetIdx() < cc.vv.gameData.getUnlockIdx();
        if (islock != this._islock) {
          this._islock = islock;
          if (islock) {
            this._btn_collect.getChildByName("spine_lock").getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
            Global.SlotsSoundMgr.playEffect("store_lock");
          } else {
            this._btn_collect.getChildByName("spine_lock").getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
            Global.SlotsSoundMgr.playEffect("store_unlock");
          }
        }
      },
      showStore: function showStore() {
        cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
        Global.SlotsSoundMgr.playEffect("dialog_store_show");
        this._node_store.active = true;
        this._store_layout.setScale(.1);
        cc.tween(this._store_layout).to(.7, {
          scale: 1
        }).start();
        this._store_bg.opacity = 0;
        cc.tween(this._store_bg).to(.7, {
          opacity: 255
        }).start();
      },
      hideStore: function hideStore() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              cc.vv.gameData.GetBottomScript().ShowBtnsByState("idle");
              cc.tween(_this2._store_layout).to(.7, {
                scale: .1
              }).start();
              cc.tween(_this2._store_bg).to(.7, {
                opacity: 0
              }).start();
              _context2.next = 5;
              return _this2.awaitTime(.7);

             case 5:
              _this2._node_store.active = false;

             case 6:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      refreshData: function refreshData() {
        var data = cc.vv.gameData;
        var atlas_shop = cc.vv.gameData.GetAtlasByName("shop");
        var atlas_base = cc.vv.gameData.GetAtlasByName("base");
        var mapId = cc.vv.gameData.getMapId();
        cc.find("jz_bg/spr_bg", this._store_layout).getComponent(cc.Sprite).spriteFrame = atlas_shop.getSpriteFrame("theme185_store_juan_0" + this._curMapId);
        cc.find("jz_bg/node_lock", this._store_layout).active = this._curMapId > mapId;
        cc.find("jz_bg/node_unlock", this._store_layout).active = this._curMapId <= mapId;
        cc.find("character_bg/spr_reel", this._store_layout).getComponent(cc.Sprite).spriteFrame = atlas_base.getSpriteFrame("theme185_store_reel_" + this._curMapId);
        cc.find("box_bg", this._store_layout).getComponent(cc.Sprite).spriteFrame = atlas_shop.getSpriteFrame("theme185_store_yuan_0" + this._curMapId);
        for (var i = 1; i <= 9; i++) cc.find("choose_bg/choose" + i + "/choosed", this._store_layout).active = i == this._curMapId;
        for (var _i = 1; _i <= 9; _i++) {
          var box = this._boxes[_i];
          var nowPrice = this._listofIngots[this._curMapId - 1];
          if (this._boxInfo.length <= 0) {
            box.lblcoin.node.active = "";
            box.sprWin.node.active = false;
            box.moneybg.active = true;
            box.lblprice.string = nowPrice;
            this.setBoxAnim(box, "blue", "locking");
            this.setBoxLockAnim(box, "locking");
          } else {
            var box_data = this._boxInfo[_i - 1];
            if (box_data.lock) {
              box.lblcoin.node.active = false;
              box.sprWin.node.active = false;
              box.lblprice.string = nowPrice;
              if (this._pageInfo.ingot > 0) {
                box.moneybg.active = true;
                if (cc.vv.gameData.getIngot() < nowPrice) {
                  this.setBoxAnim(box, "blue", "locking");
                  this.setBoxLockAnim(box, "playlock");
                } else {
                  this.setBoxAnim(box, "blue", "waiting");
                  this.setBoxLockAnim(box, "null");
                }
              } else {
                box.moneybg.active = false;
                this.setBoxAnim(box, "red", "waiting");
                this.setBoxLockAnim(box, "null");
              }
            } else {
              box.lblcoin.node.active = "coin" === box_data.type;
              box.sprWin.node.active = "coin" !== box_data.type;
              box.moneybg.active = false;
              "coin" === box_data.type ? box.lblcoin.string = Global.convertNumToShort(box_data.num, 1e3, 0, null, 1e3) : "free" === box_data.type ? box.sprWin.spriteFrame = atlas_shop.getSpriteFrame("theme185_store_bao_free") : "mult" === box_data.type && (box.sprWin.spriteFrame = atlas_shop.getSpriteFrame("theme185_store_bao_" + box_data.num + "x"));
              var boxType = box_data.red ? "red" : "blue";
              this.setBoxAnim(box, boxType, "hasopen");
              this.setBoxLockAnim(box, "null");
            }
          }
        }
        this.refreshIngotNum();
      },
      refreshDataWithAction: function refreshDataWithAction(deltaX) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var node_box, i, box;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              node_box = cc.find("node_box", _this3._store_layout);
              node_box.stopAllActions();
              node_box.x = 0;
              node_box.runAction(cc.sequence(cc.spawn(cc.fadeTo(.15, 63), cc.moveBy(.15, deltaX, 0)), cc.spawn(cc.fadeTo(.15, 255), cc.moveBy(.15, -deltaX, 0))));
              _context3.next = 6;
              return _this3.awaitTime(.15);

             case 6:
              for (i = 1; i <= 9; i++) {
                box = _this3._boxes[i].node;
                box.setScale(.1);
                box.stopAllActions();
                box.runAction(cc.scaleTo(.1 * i, 1, 1).easing(cc.easeBackOut()));
              }

             case 7:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showBuyBox: function showBuyBox(data) {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var idx, type, nextIngot, num, superFree, box, atlas_shop, popT, i, box_i, _i2, _box_i;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              idx = data.idx;
              type = data.type;
              nextIngot = data.ingot;
              num = data.num;
              superFree = data.superFree;
              box = _this4._boxes[idx];
              box.moneybg.active = false;
              atlas_shop = cc.vv.gameData.GetAtlasByName("shop");
              Global.SlotsSoundMgr.playEffect(_this4._isMultLast > 1 ? "chest2" : "chest1");
              _this4.setBoxAnim(box, _this4._isMultLast > 1 ? "red" : "blue", "opening");
              _context4.next = 12;
              return _this4.awaitTime(.8);

             case 12:
              box.state = "hasopen";
              popT = .6;
              if (!("coin" === type)) {
                _context4.next = 31;
                break;
              }
              box.lblcoin.node.active = true;
              box.lblcoin.string = Global.convertNumToShort(num / _this4._isMultLast, 1e3, 0, null, 1e3);
              _context4.next = 19;
              return _this4.playShowPrizeAnim(box.lblcoin.node, popT);

             case 19:
              if (!(_this4._isMultLast > 1)) {
                _context4.next = 26;
                break;
              }
              _context4.next = 22;
              return _this4.awaitTime(.2);

             case 22:
              _context4.next = 24;
              return _this4.playMultParAni(idx);

             case 24:
              box.lblcoin.string = Global.convertNumToShort(num, 1e3, 0, null, 1e3);
              _this4.recoverBlue(idx);

             case 26:
              cc.vv.gameData.AddCoin(num);
              _this4.showBottomWin(num, 0);
              _this4._isMultLast = 1;
              _context4.next = 59;
              break;

             case 31:
              if (!("free" === type)) {
                _context4.next = 51;
                break;
              }
              box.sprWin.node.active = true;
              box.sprWin.spriteFrame = atlas_shop.getSpriteFrame("theme185_store_bao_free");
              _context4.next = 36;
              return _this4.playShowPrizeAnim(box.sprWin.node, popT);

             case 36:
              if (!(_this4._isMultLast > 1)) {
                _context4.next = 42;
                break;
              }
              _context4.next = 39;
              return _this4.awaitTime(.2);

             case 39:
              _context4.next = 41;
              return _this4.playMultParAni(idx);

             case 41:
              _this4.recoverBlue(idx);

             case 42:
              cc.vv.gameData.setFreeType(cc.vv.gameData.getFreeTypeList().click);
              cc.vv.gameData.setFreeMult(_this4._isMultLast);
              _this4.hideStore();
              _context4.next = 47;
              return _this4.awaitTime(.8);

             case 47:
              cc.vv.gameData.GetSlotsScript().CheckEnterFreeGame();
              _this4._isMultLast = 1;
              _context4.next = 59;
              break;

             case 51:
              if (!("mult" === type)) {
                _context4.next = 59;
                break;
              }
              box.sprWin.node.active = true;
              box.sprWin.spriteFrame = atlas_shop.getSpriteFrame("theme185_store_bao_" + num + "x");
              _context4.next = 56;
              return _this4.playShowPrizeAnim(box.sprWin.node, popT);

             case 56:
              _this4._isMultLast = num;
              _this4._multIdx = idx;
              for (i = 1; i <= 9; i++) {
                box_i = _this4._boxes[i];
                "locking" !== box_i.state && "waiting" !== box_i.state || _this4.setBoxAnim(box_i, "red", "waiting");
              }

             case 59:
              if (cc.vv.gameData.getIngot() < _this4._nextIngot) for (_i2 = 1; _i2 <= 9; _i2++) {
                _box_i = _this4._boxes[_i2];
                if ("locking" === _box_i.state || "waiting" === _box_i.state) {
                  _this4.setBoxAnim(_box_i, "blue", "locking");
                  _this4.setBoxLockAnim(_box_i, "playlock");
                }
              }
              _this4._boxMask.active = false;
              if (!superFree) {
                _context4.next = 74;
                break;
              }
              _context4.next = 64;
              return _this4.awaitTime(1);

             case 64:
              Global.SlotsSoundMgr.playEffect("super_trigger");
              _this4._spine_qz.active = true;
              _this4._spine_qz.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              _this4._spine_qz.getComponent(sp.Skeleton).setCompleteListener(function() {
                _this4._spine_qz.active = false;
              });
              _context4.next = 70;
              return _this4.awaitTime(1);

             case 70:
              cc.vv.gameData.setFreeType(cc.vv.gameData.getFreeTypeList()["super"]);
              cc.vv.gameData.setFreeMult();
              cc.vv.gameData.GetSlotsScript().CheckEnterFreeGame();
              _this4.hideStore();

             case 74:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      playShowPrizeAnim: function playShowPrizeAnim(node, moveT) {
        return new Promise(function(sucess, failed) {
          if (node) {
            node.setScale(0);
            node.runAction(cc.sequence(cc.scaleTo(moveT, 1).easing(cc.easeBackOut()), cc.callFunc(function() {
              sucess();
            })));
          } else sucess();
        });
      },
      playMultParAni: function playMultParAni(endIdx) {
        var _this5 = this;
        return new Promise(function(sucess, failed) {
          var startPos = _this5._store_layout.convertToNodeSpaceAR(_this5._boxes[_this5._multIdx].node.convertToWorldSpaceAR(cc.v2(0, 0)));
          var endPos = _this5._store_layout.convertToNodeSpaceAR(_this5._boxes[endIdx].node.convertToWorldSpaceAR(cc.v2(0, 0)));
          _this5._particle_mult.active = true;
          _this5._particle_mult.getComponent(cc.ParticleSystem).resetSystem();
          _this5._particle_mult.position = startPos;
          Global.SlotsSoundMgr.playEffect("fly3");
          cc.tween(_this5._particle_mult).to(.3, {
            position: endPos
          }).call(function() {
            _this5._particle_mult.active = false;
            sucess();
          }).start();
        });
      },
      recoverBlue: function recoverBlue(idx) {
        for (var i = 1; i <= 9; i++) {
          var box_i = this._boxes[i];
          i !== idx && this.setBoxAnim(box_i, "blue", box_i.state);
        }
      },
      showBottomWin: function showBottomWin(end, begin, rollTime) {
        return new Promise(function(sucess, failed) {
          cc.vv.gameData.GetTopScript().ShowCoin();
          cc.vv.gameData.GetBottomScript().ShowWin(end, null, begin, function() {
            sucess();
          }, rollTime);
        });
      },
      refreshIngotNum: function refreshIngotNum() {
        var str = Global.FormatNumToComma(cc.vv.gameData.getIngot());
        cc.find("lbl_money", this._btn_collect).getComponent(cc.Label).string = str;
        cc.find("layout/money_bg/lbl_money", this._node_store).getComponent(cc.Label).string = str;
      },
      onClickCollectBtn: function onClickCollectBtn() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (this._islock) {
          var minIdx = cc.vv.gameData.getUnlockIdx();
          var allMults = cc.vv.gameData.GetBetMults();
          minIdx > allMults.length || cc.vv.gameData.GetBottomScript().SetBetIdx(minIdx);
        } else {
          this._curMapId = cc.vv.gameData.getMapId();
          var req = {
            c: MsgId.SLOT_SUBGAME_DATA
          };
          req.gameid = cc.vv.gameData.getGameId();
          req.data = {
            rtype: 3,
            mapId: this._curMapId
          };
          cc.vv.NetManager.send(req, true);
          this._isLeftOrRight = 0;
        }
      },
      onClickCloseBtn: function onClickCloseBtn() {
        Global.SlotsSoundMgr.playEffect("btn_click");
        this.hideStore();
      },
      onClickLeftBtn: function onClickLeftBtn() {
        Global.SlotsSoundMgr.playEffect("page");
        this._curMapId = this._curMapId > 1 ? this._curMapId - 1 : 9;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {
          rtype: 3,
          mapId: this._curMapId
        };
        cc.vv.NetManager.send(req, true);
        this._isLeftOrRight = 1;
      },
      onClickRightBtn: function onClickRightBtn() {
        Global.SlotsSoundMgr.playEffect("page");
        this._curMapId = this._curMapId < 9 ? this._curMapId + 1 : 1;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.gameid = cc.vv.gameData.getGameId();
        req.data = {
          rtype: 3,
          mapId: this._curMapId
        };
        cc.vv.NetManager.send(req, true);
        this._isLeftOrRight = -1;
      },
      onClickBoxBtn: function onClickBoxBtn(event) {
        for (var i = 1; i <= 9; i++) if (event.node == this._boxes[i].node) {
          var restIngot = cc.vv.gameData.getIngot() - this._nextIngot;
          if (restIngot < 0) {
            this.playSprSuoAnim(event.node);
            this._boxes[i].spine_suo.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
            return;
          }
          if ("waiting" === this._boxes[i].state) {
            this._boxMask.active = true;
            var req = {
              c: MsgId.SLOT_SUBGAME_DATA
            };
            req.gameid = cc.vv.gameData.getGameId();
            req.data = {
              rtype: 2,
              mapId: cc.vv.gameData.getMapId(),
              idx: i
            };
            cc.vv.NetManager.send(req, true);
            cc.vv.gameData.setIngot(restIngot);
            this.refreshIngotNum();
          }
        }
      },
      setBoxAnim: function setBoxAnim(box, type, state) {
        box.spine_red.active = "red" === type;
        box.spine_blue.active = "blue" === type;
        var ske = "red" === type ? box.spine_red.getComponent(sp.Skeleton) : box.spine_blue.getComponent(sp.Skeleton);
        if ("locking" === state) {
          ske.setAnimation(0, "animation1", true);
          this.setBoxMask(ske.node, true);
        } else if ("waiting" === state) {
          ske.setAnimation(0, "animation2", true);
          this.setBoxMask(ske.node, false);
        } else if ("opening" === state) {
          ske.setAnimation(0, "animation3", false);
          ske.addAnimation(0, "animation4", true);
          this.setBoxMask(ske.node, false);
        } else if ("hasopen" === state) {
          ske.setAnimation(0, "animation4", true);
          this.setBoxMask(ske.node, false);
        }
        box.state = state;
      },
      setBoxMask: function setBoxMask(node, isMask) {
        node.color = isMask ? new cc.Color(100, 100, 100) : cc.Color.WHITE;
      },
      setBoxLockAnim: function setBoxLockAnim(box, state) {
        if ("null" === state) box.spine_suo.active = false; else {
          box.spine_suo.active = true;
          var ske = box.spine_suo.getComponent(sp.Skeleton);
          if ("locking" === state) ske.setAnimation(0, "animation1", true); else if ("playlock" === state) {
            ske.setAnimation(0, "animation3", false);
            ske.addAnimation(0, "animation1", true);
          }
        }
      },
      exitClickFree: function exitClickFree() {
        this.showStore();
      },
      exitSuperFree: function exitSuperFree() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this6.showStore();
              _context5.next = 3;
              return _this6.awaitTime(1.7);

             case 3:
              if (10 === _this6._curMapId) {
                cc.vv.gameData.GetPopupScript().showUnlockAllMap();
                cc.vv.gameData.setMapId(1);
              } else {
                cc.vv.gameData.GetPopupScript().showUnlockMap();
                cc.vv.gameData.setMapId(_this6._curMapId + 1);
              }

             case 4:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      onClickTipBtn: function onClickTipBtn() {
        var _this7 = this;
        Global.SlotsSoundMgr.playEffect("btn_click");
        this._spr_tip.stopAllActions();
        if (this._spr_tip.active) this._spr_tip.runAction(cc.sequence(cc.scaleTo(this._spr_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this7._spr_tip.active = false;
        }))); else {
          this._spr_tip.active = true;
          this._spr_tip.setScale(0);
          this._spr_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.callFunc(function() {
            _this7._spr_tip.active = true;
          }), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this7._spr_tip.active = false;
          })));
        }
      },
      playSprSuoAnim: function playSprSuoAnim(box) {
        var _this8 = this;
        Global.SlotsSoundMgr.playEffect("tip");
        this._spr_suo.stopAllActions();
        if (this._spr_suo.active) this._spr_suo.runAction(cc.sequence(cc.scaleTo(this._spr_suo.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this8._spr_suo.active = false;
        }))); else {
          this._spr_suo.position = box.position;
          this._spr_suo.active = true;
          this._spr_suo.setScale(0);
          this._spr_suo.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.callFunc(function() {
            _this8._spr_suo.active = true;
          }), cc.delayTime(1), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this8._spr_suo.active = false;
          })));
        }
      },
      awaitTime: function awaitTime(time) {
        var _this9 = this;
        return new Promise(function(sucess, failed) {
          _this9.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  TheGodOfFortune_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f18aa3o47lMPL4LdFIslGYk", "TheGodOfFortune_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _poolList: [],
        _freeType: 0
      },
      init: function init(deskInfo, gameId, gameJackpot) {
        this._super(deskInfo, gameId, gameJackpot);
        this._collect = this._deskInfo.collect;
        this._deskInfo.coinBonus && (this._poolList = this._deskInfo.coinBonus.poolList);
        this._deskInfo.freeGameData && (this._freeType = this._deskInfo.freeGameData.freeType);
        this._allWealthGod = this._deskInfo.history.wealthGod;
        this._freeTypeList = {
          none: 0,
          normal: 1,
          click: 2,
          super: 3
        };
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._deskInfo.user.coin = msg.coin;
          this._gameInfo = msg;
          this._deskInfo.restFreeCount = msg.freeCnt;
          this._deskInfo.allFreeCount = msg.allFreeCnt;
          this._deskInfo.coinBonus = msg.coinBonus;
          this._deskInfo.coinBonus ? this.GetBonusScript().onMsgSpine(msg) : this.GetSlotsScript().onMsgSpine(msg);
        }
      },
      SetCollectScript: function SetCollectScript(scp) {
        this._collectScp = scp;
      },
      GetCollectScript: function GetCollectScript() {
        return this._collectScp;
      },
      SetPopupScript: function SetPopupScript(scp) {
        this._popupScp = scp;
      },
      GetPopupScript: function GetPopupScript() {
        return this._popupScp;
      },
      SetReSpinScript: function SetReSpinScript(scp) {
        this._reSpinScp = scp;
      },
      GetReSpinScript: function GetReSpinScript() {
        return this._reSpinScp;
      },
      SetBonusScript: function SetBonusScript(scp) {
        this._bonusScp = scp;
      },
      GetBonusScript: function GetBonusScript() {
        return this._bonusScp;
      },
      getFreeTypeList: function getFreeTypeList() {
        return this._freeTypeList;
      },
      setFreeType: function setFreeType(type) {
        this._freeType = type;
      },
      getFreeType: function getFreeType() {
        return this._freeType;
      },
      setFreeMult: function setFreeMult(mult) {
        this._freeMult = mult;
      },
      getFreeMult: function getFreeMult() {
        return this._freeMult;
      },
      getFreeGameData: function getFreeGameData() {
        return this._deskInfo.freeGameData;
      },
      getAllwealthGod: function getAllwealthGod() {
        return this._allWealthGod;
      },
      setWealthGodByIdx: function setWealthGodByIdx(idx, data) {
        this._allWealthGod[idx] = data;
      },
      getListofIngots: function getListofIngots() {
        return this._collect.listofIngots;
      },
      getIngot: function getIngot() {
        return this._collect.num;
      },
      setIngot: function setIngot(num) {
        this._collect.num = num;
      },
      getUnlockIdx: function getUnlockIdx() {
        return this._collect.min;
      },
      getMapId: function getMapId() {
        return this._collect.mapId;
      },
      setMapId: function setMapId(mapId) {
        this._collect.mapId = mapId;
      },
      getSelectInfo: function getSelectInfo() {
        return this._deskInfo.select;
      },
      getNormalNum: function getNormalNum() {
        return this._gameInfo.wealthGod.num;
      },
      getFreeNum: function getFreeNum() {
        return this._gameInfo.freeCnt;
      },
      getNormalWildIdxs: function getNormalWildIdxs() {
        return this._gameInfo.wealthGod.idxs;
      },
      getLastGame: function getLastGame() {
        return this._gameInfo.wealthGod.last;
      },
      setIsEndOfRound: function setIsEndOfRound(isEnd) {
        this._isEndOfRound = isEnd;
      },
      isEndOfRound: function isEndOfRound() {
        return this._isEndOfRound;
      },
      setIsBonusGame: function setIsBonusGame(isBonus) {
        this._isBonusGame = isBonus;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
      },
      getCoinBonus: function getCoinBonus() {
        return this._deskInfo.coinBonus;
      },
      getBonusPool: function getBonusPool() {
        return this._bonusPool;
      },
      setBonusPool: function setBonusPool(pool) {
        this._bonusPool = pool;
      },
      setBonusPoolList: function setBonusPoolList(pool) {
        this._poolList = pool;
      },
      getBonusPoolList: function getBonusPoolList() {
        return this._poolList;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      setIsFreeGame: function setIsFreeGame(bFree) {
        this._isFreeGame = bFree;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  TheGodOfFortune_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b81b6mOKrlD0bcpIgcSzqUP", "TheGodOfFortune_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_collect = this.node.addComponent("TheGodOfFortune_Collect");
        script_collect.Init();
        cc.vv.gameData.SetCollectScript(script_collect);
        var script_popup = this.node.addComponent("TheGodOfFortune_Popup");
        script_popup.Init();
        cc.vv.gameData.SetPopupScript(script_popup);
        var script_bonus = this.node.addComponent("TheGodOfFortune_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.SetBonusScript(script_bonus);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  TheGodOfFortune_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a776n8p3FGdrM/X0eVN3pj", "TheGodOfFortune_Popup");
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
      onEnable: function onEnable() {
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      onDisable: function onDisable() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      Init: function Init() {
        this._node_popup = cc.find("safe_node/node_popup", this.node);
        this._node_popup.active = false;
        this._node_free_start = cc.find("node_free_start", this._node_popup);
        this._node_free_start.active = false;
        this._node_free_end = cc.find("node_free_end", this._node_popup);
        this._node_free_end.active = false;
        this._node_bonus_start = cc.find("Canvas/safe_node/slots/node_bonus_start");
        this._node_bonus_start.active = false;
        this._node_respin_end = cc.find("node_respin_end", this._node_popup);
        this._node_respin_end.active = false;
        this._node_store_unclock = cc.find("node_store_unclock", this._node_popup);
        this._node_store_unclock.active = false;
        this._node_store_unclockAll = cc.find("node_store_unclockAll", this._node_popup);
        this._node_store_unclockAll.active = false;
        this._node_qp = cc.find("safe_node/node_qp", this.node);
        this._node_qp.active = false;
        this._spine_qp1 = cc.find("qieping1", this._node_qp);
        this._spine_qp1.active = false;
      },
      awaitTime: function awaitTime(time) {
        var _this = this;
        return new Promise(function(sucess, failed) {
          _this.scheduleOnce(function() {
            sucess();
          }, time);
        });
      },
      showStartFree: function showStartFree() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
                  var type, mult, effName, node_normal, node_super, showNode, ske, startBtn, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      type = cc.vv.gameData.getFreeType();
                      mult = cc.vv.gameData.getFreeMult();
                      effName = type === cc.vv.gameData.getFreeTypeList()["super"] ? "dialog_sfg_start" : "dialog_fg_start";
                      Global.SlotsSoundMgr.playEffect(effName);
                      _this2._node_popup.active = true;
                      _this2._node_free_start.active = true;
                      node_normal = _this2._node_free_start.getChildByName("node_normal");
                      node_super = _this2._node_free_start.getChildByName("node_super");
                      node_normal.active = type !== cc.vv.gameData.getFreeTypeList()["super"];
                      node_super.active = type === cc.vv.gameData.getFreeTypeList()["super"];
                      showNode = node_normal.active ? node_normal : node_super;
                      ske = showNode.getChildByName("spine").getComponent(sp.Skeleton);
                      if (type === cc.vv.gameData.getFreeTypeList().normal) {
                        ske.setAnimation(0, "animation1", false);
                        ske.addAnimation(0, "animation1_1", true);
                      } else if (type === cc.vv.gameData.getFreeTypeList().click) {
                        ske.setAnimation(0, "animation" + mult, false);
                        ske.addAnimation(0, "animation" + mult + "_1", true);
                      } else if (type === cc.vv.gameData.getFreeTypeList()["super"]) {
                        ske.setAnimation(0, "animation1", false);
                        ske.addAnimation(0, "animation1_1", true);
                        showNode.getChildByName("spr_reel").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("base").getSpriteFrame("theme185_store_reel_" + cc.vv.gameData.getMapId());
                      }
                      startBtn = showNode.getChildByName("btn_start");
                      startBtn.setScale(0);
                      startBtn.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                      _context.next = 19;
                      return _this2.awaitTime(.7);

                     case 19:
                      self = _this2;
                      clickFunc = function clickFunc() {
                        startBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect("btn_click");
                        Global.SlotsSoundMgr.playEffect("popup_out");
                        self._node_free_start.runAction(cc.sequence(cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
                          self._node_popup.active = false;
                          self._node_free_start.active = false;
                          self._node_free_start.setScale(1);
                          sucess();
                        })));
                      };
                      cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                      startBtn.getComponent(cc.Button).interactable = true;
                      startBtn.off("click");
                      startBtn.on("click", function() {
                        startBtn.stopAllActions();
                        clickFunc();
                      });

                     case 25:
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
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
                  var type, effName, spine_normal, spine_super, collecttBtn, lbl_wincoin, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      type = cc.vv.gameData.getFreeType();
                      effName = type === cc.vv.gameData.getFreeTypeList()["super"] ? "dialog_sfg_collect" : "dialog_fg_collect";
                      Global.SlotsSoundMgr.playEffect(effName);
                      _this3._node_popup.active = true;
                      _this3._node_free_end.active = true;
                      spine_normal = _this3._node_free_end.getChildByName("spine_normal");
                      spine_super = _this3._node_free_end.getChildByName("spine_super");
                      spine_normal.active = type !== cc.vv.gameData.getFreeTypeList()["super"];
                      spine_super.active = type === cc.vv.gameData.getFreeTypeList()["super"];
                      if (type !== cc.vv.gameData.getFreeTypeList()["super"]) {
                        spine_normal.getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
                        spine_normal.getComponent(sp.Skeleton).addAnimation(0, "animation4_1", true);
                      } else {
                        spine_super.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                        spine_normal.getComponent(sp.Skeleton).addAnimation(0, "animation2_1", true);
                      }
                      collecttBtn = _this3._node_free_end.getChildByName("btn_collect");
                      collecttBtn.setScale(0);
                      collecttBtn.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
                      lbl_wincoin = _this3._node_free_end.getChildByName("lbl_wincoin");
                      Global.doRoallNumEff(lbl_wincoin, 0, winCoin, 2, null, null, 0, true);
                      _context3.next = 18;
                      return _this3.awaitTime(.7);

                     case 18:
                      self = _this3;
                      clickFunc = function clickFunc() {
                        collecttBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect("btn_click");
                        lbl_wincoin.stopAllActions();
                        var delayT = 0;
                        if (Global.FormatCommaNumToNum(lbl_wincoin.getComponent(cc.Label).string) < winCoin) {
                          lbl_wincoin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                          delayT = .2;
                        }
                        self._node_free_end.runAction(cc.sequence(cc.delayTime(delayT), cc.scaleTo(.4, .3).easing(cc.easeBackIn()), cc.callFunc(function() {
                          self._node_popup.active = false;
                          self._node_free_end.active = false;
                          self._node_free_end.setScale(1);
                          sucess();
                        })));
                      };
                      cc.vv.gameData.checkAutoPlay(collecttBtn, clickFunc);
                      collecttBtn.getComponent(cc.Button).interactable = true;
                      collecttBtn.off("click");
                      collecttBtn.on("click", function() {
                        collecttBtn.stopAllActions();
                        clickFunc();
                      });

                     case 24:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      playBonusTransition: function playBonusTransition() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  var spine_gd, self;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playEffect("dialog_respin_start");
                      _this4._node_popup.active = true;
                      spine_gd = cc.find("spine_respin_ks", _this4._node_popup);
                      spine_gd.active = true;
                      self = _this4;
                      spine_gd.getComponent(sp.Skeleton).setAnimation(0, "skill03", false);
                      spine_gd.getComponent(sp.Skeleton).setCompleteListener(function() {
                        self._node_popup.active = false;
                        spine_gd.active = false;
                        sucess();
                      });

                     case 8:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      showStartBonus: function showStartBonus() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              return _context8.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(sucess, failed) {
                  var spine, startBtn, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      _this5._node_bonus_start.active = true;
                      spine = _this5._node_bonus_start.getChildByName("spine");
                      spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                      spine.getComponent(sp.Skeleton).addAnimation(0, "animation1", true);
                      startBtn = _this5._node_bonus_start.getChildByName("btn_start");
                      _context7.next = 7;
                      return _this5.awaitTime(.5);

                     case 7:
                      self = _this5;
                      _this5._bonusStartCallBack = sucess;
                      clickFunc = function clickFunc() {
                        startBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect("press");
                        var req = {
                          c: MsgId.SLOT_SUBGAME_DATA
                        };
                        req.gameid = cc.vv.gameData.getGameId();
                        req.data = {
                          rtype: 1
                        };
                        cc.vv.NetManager.send(req, true);
                        var entry = spine.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
                        spine.getComponent(sp.Skeleton).setTrackCompleteListener(entry, function() {
                          self._node_bonus_start.active = false;
                        });
                      };
                      cc.vv.gameData.checkAutoPlay(startBtn, clickFunc);
                      startBtn.getComponent(cc.Button).interactable = true;
                      startBtn.off("click");
                      startBtn.on("click", function() {
                        startBtn.stopAllActions();
                        clickFunc();
                      });

                     case 14:
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
      showEndBonus: function showEndBonus(winCoin) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
                  var type, collecttBtn, lbl_wincoin, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      type = cc.vv.gameData.getFreeType();
                      Global.SlotsSoundMgr.playEffect("dialog_fg_collect");
                      _this6._node_popup.active = true;
                      _this6._node_respin_end.active = true;
                      _this6._node_respin_end.children.forEach(function(node, idx) {
                        node.scale = 0;
                        cc.tween(node).delay(.1 * idx).to(.5, {
                          scale: 1
                        }, {
                          easing: "backOut"
                        }).start();
                      });
                      collecttBtn = cc.find("btn_collect", _this6._node_respin_end);
                      lbl_wincoin = cc.find("dialog_k/lbl_wincoin", _this6._node_respin_end);
                      Global.doRoallNumEff(lbl_wincoin, 0, winCoin, 2, null, null, 0, true);
                      _context10.next = 11;
                      return _this6.awaitTime(.7);

                     case 11:
                      self = _this6;
                      clickFunc = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
                          var delayT;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                             case 0:
                              collecttBtn.getComponent(cc.Button).interactable = false;
                              Global.SlotsSoundMgr.playEffect("btn_click");
                              lbl_wincoin.stopAllActions();
                              delayT = 0;
                              if (Global.FormatCommaNumToNum(lbl_wincoin.getComponent(cc.Label).string) < winCoin) {
                                lbl_wincoin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                                delayT = .2;
                              }
                              self._node_respin_end.children.forEach(function(node, idx) {
                                cc.tween(node).delay(.1 * idx).to(.5, {
                                  scale: 0
                                }, {
                                  easing: "backIn"
                                }).start();
                              });
                              _context9.next = 8;
                              return self.awaitTime(.1 * self._node_respin_end.childrenCount + .5);

                             case 8:
                              self._node_popup.active = false;
                              self._node_respin_end.active = false;
                              sucess();

                             case 11:
                             case "end":
                              return _context9.stop();
                            }
                          }, _callee9);
                        }));
                        return function clickFunc() {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(collecttBtn, clickFunc);
                      collecttBtn.getComponent(cc.Button).interactable = true;
                      collecttBtn.off("click");
                      collecttBtn.on("click", function() {
                        collecttBtn.stopAllActions();
                        clickFunc();
                      });

                     case 17:
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
      showUnlockAllMap: function showUnlockAllMap() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
             case 0:
              return _context14.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(sucess, failed) {
                  var spine, collectBtn, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("dialog_store_unlock");
                      _this7._node_popup.active = true;
                      _this7._node_store_unclockAll.active = true;
                      _this7._node_store_unclockAll.setScale(1);
                      spine = _this7._node_store_unclockAll.getChildByName("spine");
                      spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                      spine.getComponent(sp.Skeleton).addAnimation(0, "animation1_1", true);
                      collectBtn = _this7._node_store_unclockAll.getChildByName("btn_collect");
                      _context13.next = 10;
                      return _this7.awaitTime(.5);

                     case 10:
                      self = _this7;
                      _this7._bonusStartCallBack = sucess;
                      clickFunc = function clickFunc() {
                        collectBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect("btn_click");
                        Global.SlotsSoundMgr.playEffect("popup_out");
                        cc.tween(self._node_store_unclockAll).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._node_store_unclockAll.active = false;
                          self._node_popup.active = false;
                          cc.vv.gameData.GetCollectScript().onClickRightBtn();
                          sucess();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(collectBtn, clickFunc);
                      collectBtn.getComponent(cc.Button).interactable = true;
                      collectBtn.off("click");
                      collectBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                        return regeneratorRuntime.wrap(function _callee12$(_context12) {
                          while (1) switch (_context12.prev = _context12.next) {
                           case 0:
                            collectBtn.stopAllActions();
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
                return function(_x11, _x12) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context14.stop();
            }
          }, _callee14);
        }))();
      },
      showUnlockMap: function showUnlockMap() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
             case 0:
              return _context17.abrupt("return", new Promise(function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(sucess, failed) {
                  var spine, okBtn, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("dialog_store_unlock");
                      _this8._node_popup.active = true;
                      _this8._node_store_unclock.active = true;
                      _this8._node_store_unclock.setScale(1);
                      spine = _this8._node_store_unclock.getChildByName("spine");
                      spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                      spine.getComponent(sp.Skeleton).addAnimation(0, "animation2_1", true);
                      okBtn = _this8._node_store_unclock.getChildByName("btn_ok");
                      _context16.next = 10;
                      return _this8.awaitTime(.5);

                     case 10:
                      self = _this8;
                      _this8._bonusStartCallBack = sucess;
                      clickFunc = function clickFunc() {
                        okBtn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect("popup_out");
                        cc.tween(self._node_store_unclock).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._node_store_unclock.active = false;
                          self._node_popup.active = false;
                          cc.vv.gameData.GetCollectScript().onClickRightBtn();
                          sucess();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(okBtn, clickFunc);
                      okBtn.getComponent(cc.Button).interactable = true;
                      okBtn.off("click");
                      okBtn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                          while (1) switch (_context15.prev = _context15.next) {
                           case 0:
                            Global.SlotsSoundMgr.playEffect("btn_click");
                            okBtn.stopAllActions();
                            clickFunc();

                           case 3:
                           case "end":
                            return _context15.stop();
                          }
                        }, _callee15);
                      })));

                     case 17:
                     case "end":
                      return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function(_x13, _x14) {
                  return _ref9.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context17.stop();
            }
          }, _callee17);
        }))();
      },
      playQP1Anim: function playQP1Anim() {
        var _this9 = this;
        Global.SlotsSoundMgr.playEffect("transition2");
        this._node_qp.active = true;
        this._spine_qp1.active = true;
        this._spine_qp1.getComponent(sp.Skeleton).setAnimation(0, "skill02", false);
        this._spine_qp1.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this9._spine_qp1.active = false;
          _this9._node_qp.active = false;
        });
      },
      playQP2Anim: function playQP2Anim() {
        var _this10 = this;
        Global.SlotsSoundMgr.playEffect("fgtransition");
        this._node_qp.active = true;
        this._spine_qp1.active = true;
        this._spine_qp1.getComponent(sp.Skeleton).setAnimation(0, "skill01", false);
        this._spine_qp1.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this10._spine_qp1.active = false;
          _this10._node_qp.active = false;
        });
      },
      onRcvSubGameAction: function onRcvSubGameAction(msg) {
        if (200 === msg.code) {
          var data = msg.data;
          1 === data.rtype && this._bonusStartCallBack && this._bonusStartCallBack();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  TheGodOfFortune_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af3962YxgxB+YQcEjgkQ3UH", "TheGodOfFortune_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  TheGodOfFortune_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97da2bNl/ZEhYGR3FD1m/f6", "TheGodOfFortune_Slots");
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
        _curTimes: 0,
        _superWildList: []
      },
      Init: function Init(top, bottom) {
        this._game_times = cc.find("node_game_times", this.node);
        this._node_mult = cc.find("node_mult", this.node);
        this._node_mult.active = false;
        this._node_super_wild = cc.find("node_super_wild", this.node);
        this._node_super_wild.active = false;
        for (var i = 0; i < this._node_super_wild.childrenCount; i++) {
          var item = this._node_super_wild.getChildByName("item" + (i + 1));
          item.active = false;
          this._superWildList.push(item);
        }
        this._super(top, bottom);
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var idxs, freeType, select;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              idxs = [];
              if (cc.vv.gameData.GetTotalFree() > 0) {
                _this.ShowGameview(true);
                _this._free_times = 10 - cc.vv.gameData.GetFreeTime();
                _this._curTimes = _this._free_times;
                _this.updateTimes(_this._curTimes);
                if (cc.vv.gameData.GetFreeTime() > 0) {
                  freeType = cc.vv.gameData.getFreeType();
                  if (freeType === cc.vv.gameData.getFreeTypeList()["super"]) {
                    _this.showSuperWildNode(true);
                    cc.vv.gameData.GetCollectScript().setBtnCollectState(false);
                  }
                  idxs = cc.vv.gameData.getFreeGameData().wealthGod.idxs;
                  _this.showBonusWildKuang(idxs);
                }
              } else {
                _this.ShowGameview(false);
                _this.showCurBetState();
              }
              select = cc.vv.gameData.getSelectInfo();
              if (!(select && select.state && select.rtype)) {
                _context3.next = 7;
                break;
              }
              if (!(1 === select.rtype)) {
                _context3.next = 7;
                break;
              }
              _context3.next = 7;
              return new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      _this._curTimes = 0;
                      _this.updateTimes();
                      cc.vv.gameData.GetBonusScript().enterBonusGame(cc.vv.gameData.getCoinBonus(), sucess, true);

                     case 3:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function(_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }());

             case 7:
              if (!(cc.vv.gameData.getCoinBonus() && cc.vv.gameData.getCoinBonus().num > 0)) {
                _context3.next = 10;
                break;
              }
              _context3.next = 10;
              return new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      _this._curTimes = 0;
                      _this.updateTimes();
                      cc.vv.gameData.GetBonusScript().enterBonusGame(cc.vv.gameData.getCoinBonus(), sucess, false);

                     case 3:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }());

             case 10:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context3.next = 13;
                break;
              }
              _context3.next = 13;
              return _this.CheckExitFreeGame();

             case 13:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 15:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        cc.vv.gameData.GetCollectScript().totalbetUpdated();
        this.showCurBetState();
      },
      StartMove: function StartMove() {
        if (cc.vv.gameData.isBonusGame()) {
          var slots = cc.vv.gameData.GetBonusScript();
          slots.StartMove();
          return;
        }
        cc.vv.gameData.isEndOfRound() && cc.vv.gameData.GetBonusScript().exitBonusGame();
        this._super();
        this._curTimes += 1;
        this.updateTimes(this._curTimes);
        var freeType = cc.vv.gameData.getFreeType();
        freeType === cc.vv.gameData.getFreeTypeList()["super"] ? this.showSuperWildNode(true) : this.showSuperWildNode(false);
        Global.SlotsSoundMgr.playNormalBgm();
      },
      StopMove: function StopMove() {
        if (cc.vv.gameData.isEndOfRound() || cc.vv.gameData.isBonusGame()) {
          var slots = cc.vv.gameData.GetBonusScript();
          slots.StopMove();
        } else this._super();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._gameInfo = msg;
        var cards = msg.resultCards;
        cards = this.changeLionId(cards);
        cards = this.changeWildSuper(cards);
        this.SetSlotsResult(cards);
        this.SetReelStateInfo(cards);
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
            var num = this.getIngotNum(i + 1);
            num > 0 && (res.data = {
              type: "ingot",
              num: num
            });
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
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {
        for (var row = 0; row < this._row; row++) if (1 === this._reels[colIdx].GetSymbolByRow(row).GetShowId()) {
          this._reels[colIdx].GetSymbolByRow(row).playStopAnimation();
          Global.SlotsSoundMgr.playEffect("symbol_bonus1");
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this.showSuperWildNode(false);
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var betIdx, idxs, nWin, nTotal, freeInfo, triBonus, lastData;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (0 === _this2._gameInfo.allFreeCnt || _this2._gameInfo.allFreeCnt === _this2._gameInfo.freeCnt) {
                betIdx = cc.vv.gameData.GetBetIdx();
                cc.vv.gameData.setWealthGodByIdx(betIdx - 1, _this2._gameInfo.wealthGod);
              }
              _this2._gameInfo.collect && _this2._gameInfo.collect.info && _this2.playIngotFlyAnim(_this2._gameInfo.collect);
              idxs = cc.vv.gameData.getNormalWildIdxs();
              _this2.showBonusWildKuang(idxs);
              if (!(0 === cc.vv.gameData.getNormalNum())) {
                _context4.next = 7;
                break;
              }
              _context4.next = 7;
              return _this2.playLastGame();

             case 7:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context4.next = 13;
              return new Promise(function(sucess, failed) {
                _this2.ShowBottomWin(nWin, nTotal, true, sucess);
              });

             case 13:
              freeInfo = _this2._gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0)) {
                _context4.next = 19;
                break;
              }
              cc.vv.gameData.setFreeType(cc.vv.gameData.getFreeTypeList().normal);
              cc.vv.gameData.setFreeMult();
              _context4.next = 19;
              return _this2.CheckEnterFreeGame();

             case 19:
              triBonus = false;
              lastData = cc.vv.gameData.getLastGame();
              if (!(lastData && lastData.info && lastData.isTriBonus)) {
                _context4.next = 26;
                break;
              }
              triBonus = true;
              lastData.poolList && cc.vv.gameData.setBonusPoolList(lastData.poolList);
              _context4.next = 26;
              return _this2.CheckEnterBonusGame();

             case 26:
              if (!(_this2._gameInfo.allFreeCnt > 0 && 0 == _this2._gameInfo.freeCnt)) {
                _context4.next = 32;
                break;
              }
              if (!triBonus) {
                _context4.next = 30;
                break;
              }
              _context4.next = 30;
              return _this2.awaitTime(2.5);

             case 30:
              _context4.next = 32;
              return _this2.CheckExitFreeGame();

             case 32:
              _this2.CanDoNextRound();

             case 33:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      setRandomCards: function setRandomCards() {
        for (var col = 0; col < this._col; col++) for (var row = 0; row < this._row; row++) {
          var sym = this._reels[col].GetSymbolByRow(row);
          sym.setAnimationToTop(false);
          sym.ShowKuang(false);
          sym.stopWinTweenAction();
          sym.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
          sym.ShowRandomSymbol();
        }
      },
      changeLionId: function changeLionId(cards) {
        for (var col = 0; col < this._col; col++) {
          var isLionList = [ 0, 0, 0, 0 ];
          var lionCnt = 0;
          for (var row = 0; row < this._row; row++) {
            var id = this.GetResutByRowCol(cards, row, col);
            if (6 === id) {
              isLionList[row] = 1;
              lionCnt += 1;
            }
          }
          if (lionCnt > 0) {
            if (isLionList[0] > 0) for (var i = 0; i < lionCnt; i++) isLionList[i] = lionCnt - i; else for (var _i2 = 3; _i2 >= 4 - lionCnt; _i2--) isLionList[_i2] = 5 - lionCnt + (3 - _i2);
            for (var _row = 0; _row < this._row; _row++) {
              var col1 = this.ChangeRowColToIdx(cards, _row, col);
              1 === isLionList[_row] ? cards[col1] = 601 : 2 === isLionList[_row] ? cards[col1] = 602 : 3 === isLionList[_row] ? cards[col1] = 603 : 4 === isLionList[_row] && (cards[col1] = 604);
            }
          }
        }
        return cards;
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i3 = 0; _i3 < this._gameInfo.scatterZJLuXian.indexs.length; _i3++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i3];
          allWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            var id = symbol.GetShowId();
            var holder = cc.vv.gameData.GetBonusScript().getHolderByIdx(Number(key));
            if (holder.active) {
              var playSym = cc.vv.gameData.GetBonusScript().GetSymbolByIdx(Number(key));
              playSym.playBonusWinAnim();
            } else if (601 === id || 602 === id || 603 === id) {
              var col = (Number(key) - 1) % this._col;
              var row = this._row - Math.floor((Number(key) - 1) / this._col) - 1;
              var playRow = id + row > 604 ? id + row - 604 : 0;
              var _playSym = this._reels[col].GetSymbolByRow(playRow);
              _playSym.playWinAnimation();
            } else symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      changeWildSuper: function changeWildSuper(cards) {
        var freeType = cc.vv.gameData.getFreeType();
        if (freeType === cc.vv.gameData.getFreeTypeList()["super"]) for (var i = 0; i < cards.length; i++) 2 === cards[i] && (cards[i] = 202);
        return cards;
      },
      getIngotNum: function getIngotNum(idx) {
        var num = 0;
        if (this._gameInfo.collect && this._gameInfo.collect.info) {
          var info = this._gameInfo.collect.info;
          for (var key in info) {
            var key_idx = Number(key.substring("idx_".length));
            if (idx === key_idx) {
              num = info[key];
              break;
            }
          }
        }
        return num;
      },
      playIngotFlyAnim: function playIngotFlyAnim(collect) {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var info, key, idx, symbol;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                info = collect.info;
                for (key in info) {
                  idx = Number(key.substring("idx_".length));
                  symbol = _this3.GetSymbolByIdx(idx);
                  if (symbol) {
                    _this3.showIngotFly(info[key], symbol.getIngotWPos());
                    symbol.showIngot(0);
                  }
                }
                _context5.next = 4;
                return _this3.awaitTime(.7);

               case 4:
                cc.vv.gameData.setIngot(collect.num);
                cc.vv.gameData.GetCollectScript().refreshIngotNum();
                sucess();

               case 7:
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
      showIngotFly: function showIngotFly(num, fromWp) {
        this._ingot || (this._ingot = cc.instantiate(this.node.getChildByName("ingot")));
        if (!this._ingotEndPos) {
          var icon = cc.find("btn_collect/spr_bg2", this.node);
          this._ingotEndPos = this.node.convertToNodeSpaceAR(icon.convertToWorldSpaceAR(cc.v2(0, 0)));
        }
        var ingot = cc.instantiate(this._ingot);
        ingot.active = true;
        var animName = "animation" + num + "_1";
        ingot.getComponent(sp.Skeleton).setAnimation(0, animName, false);
        var pos = this.node.convertToNodeSpaceAR(fromWp);
        ingot.position = pos;
        ingot.parent = this.node;
        ingot.runAction(cc.sequence(cc.moveTo(.7, this._ingotEndPos), cc.destroySelf()));
        Global.SlotsSoundMgr.playEffect("store_collect");
      },
      updateTimes: function updateTimes(times) {
        if (times >= 0) {
          this._game_times.active = true;
          var str = Number(this._game_times.getChildByName("lbl_new").getComponent(cc.Label).string);
          if (str < times) {
            Global.SlotsSoundMgr.playEffect("num_change");
            this._game_times.getChildByName("baolizi").active = true;
            this._game_times.getChildByName("baolizi").getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          }
          this._game_times.getChildByName("lbl_new").getComponent(cc.Label).string = times;
        } else this._game_times.active = false;
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  var _iterator, _step, id, symbol;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      if (!(cc.vv.gameData.getFreeType() === cc.vv.gameData.getFreeTypeList().normal)) {
                        _context6.next = 8;
                        break;
                      }
                      if (!(_this4._gameInfo.freeResult && _this4._gameInfo.freeResult.freeInfo && _this4._gameInfo.freeResult.freeInfo.freeCnt > 0)) {
                        _context6.next = 8;
                        break;
                      }
                      _iterator = _createForOfIteratorHelper(_this4._gameInfo.freeResult.freeInfo.idxs);
                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                          id = _step.value;
                          symbol = _this4.GetSymbolByIdx(id);
                          symbol && symbol.playTriggerAnimation();
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                      Global.SlotsSoundMgr.playEffect("bell");
                      _context6.next = 7;
                      return _this4.awaitTime(1.5);

                     case 7:
                      _this4.Backup();

                     case 8:
                      _context6.next = 10;
                      return cc.vv.gameData.GetPopupScript().showStartFree();

                     case 10:
                      cc.vv.gameData.GetPopupScript().playQP2Anim();
                      _context6.next = 13;
                      return _this4.awaitTime(1.8);

                     case 13:
                      cc.vv.gameData.GetBonusScript().initAllWildKuang(false);
                      if (cc.vv.gameData.getFreeType() === cc.vv.gameData.getFreeTypeList()["super"]) {
                        _this4.showSuperWildNode(true);
                        cc.vv.gameData.GetCollectScript().setBtnCollectState(false);
                      } else _this4.refreshWildKuang(true);
                      _this4.ShowGameview(true);
                      _this4._curTimes = 0;
                      _this4.updateTimes(_this4._curTimes);
                      _context6.next = 20;
                      return _this4.awaitTime(2);

                     case 20:
                      cc.vv.gameData.getFreeType() !== cc.vv.gameData.getFreeTypeList().normal && _this4.CanDoNextRound();
                      _this4.playGameBgm();
                      _context6.next = 24;
                      return _this4.awaitTime(1);

                     case 24:
                      sucess();

                     case 25:
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
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _context8.next = 2;
                      return cc.vv.gameData.GetPopupScript().showEndFree(cc.vv.gameData.GetGameTotalFreeWin());

                     case 2:
                      cc.vv.gameData.GetPopupScript().playQP2Anim();
                      _context8.next = 5;
                      return _this5.awaitTime(1.8);

                     case 5:
                      cc.vv.gameData.GetBonusScript().exitBonusGame();
                      cc.vv.gameData.getFreeType() === cc.vv.gameData.getFreeTypeList().normal ? _this5.Resume() : _this5.setRandomCards();
                      _this5.ShowGameview(false);
                      cc.vv.gameData.GetCollectScript().setBtnCollectState(true);
                      _this5.refreshWildKuang(false);
                      _context8.next = 12;
                      return _this5.awaitTime(2);

                     case 12:
                      Global.SlotsSoundMgr.stopBgm();
                      _this5.playGameBgm();
                      sucess();
                      cc.vv.gameData.getFreeType() === cc.vv.gameData.getFreeTypeList().click ? cc.vv.gameData.GetCollectScript().exitClickFree() : cc.vv.gameData.getFreeType() === cc.vv.gameData.getFreeTypeList()["super"] && cc.vv.gameData.GetCollectScript().exitSuperFree();
                      cc.vv.gameData.setFreeType(cc.vv.gameData.getFreeTypeList().none);

                     case 17:
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
      CheckEnterBonusGame: function CheckEnterBonusGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
                  var data;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("respin_trigger");
                      cc.vv.gameData.GetBonusScript().playGreenTriAnim();
                      _context10.next = 4;
                      return _this6.awaitTime(1);

                     case 4:
                      _context10.next = 6;
                      return cc.vv.gameData.GetPopupScript().playBonusTransition();

                     case 6:
                      cc.vv.gameData.GetPopupScript().playQP1Anim();
                      _context10.next = 9;
                      return _this6.awaitTime(1.5);

                     case 9:
                      _this6.initAllSymbol();
                      cc.vv.gameData.GetBonusScript().exitBonusGame();
                      data = cc.vv.gameData.getLastGame();
                      cc.vv.gameData.GetBonusScript().hideAllGreenAnim(false);
                      _context10.next = 15;
                      return cc.vv.gameData.GetBonusScript().enterBonusGame(data, sucess, true);

                     case 15:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x11, _x12) {
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
      initAllSymbol: function initAllSymbol() {
        for (var col = 0; col < this._col; col++) for (var row = 0; row < this._row; row++) {
          var sym = this._reels[col].GetSymbolByRow(row);
          sym.setAnimationToTop(false);
          sym.ShowKuang(false);
        }
      },
      showBonusWildKuang: function showBonusWildKuang(idxs) {
        cc.vv.gameData.GetBonusScript().initAllWildKuang(false);
        for (var i = 0; i < idxs.length; i++) cc.vv.gameData.GetBonusScript().setWildKuangByIdx(idxs[i], true);
      },
      refreshWildKuang: function refreshWildKuang(isToFree) {
        if (isToFree) {
          this._curTimes = 0;
          var idxs = this._cfg.triFreeWildKuang;
          this.updateTimes(this._curTimes);
          this.showBonusWildKuang(idxs);
        } else this.showCurBetState();
      },
      showCurBetState: function showCurBetState() {
        if (cc.vv.gameData.isFreeGame()) return;
        var idxs = [];
        var curIdx = cc.vv.gameData.GetBetIdx();
        var allWealthGod = cc.vv.gameData.getAllwealthGod();
        if (allWealthGod[curIdx - 1]) {
          this._curTimes = 10 - allWealthGod[curIdx - 1].num;
          this._curTimes = 10 === this._curTimes ? 0 : this._curTimes;
          idxs = allWealthGod[curIdx - 1].idxs;
        } else {
          this._curTimes = 0;
          idxs = [];
        }
        this.updateTimes(this._curTimes);
        this.showBonusWildKuang(idxs);
      },
      playLastGame: function playLastGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              return _context13.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                     case 0:
                      _this7._curTimes = 0;
                      _this7.updateTimes();
                      Global.SlotsSoundMgr.playEffect("kuanglizi");
                      cc.vv.gameData.GetBonusScript().playLastGame(sucess);

                     case 4:
                     case "end":
                      return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function(_x13, _x14) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      setFreeMultTitle: function setFreeMultTitle() {
        var freeMult = cc.vv.gameData.getFreeMult();
        this._node_mult.active = 2 === freeMult || 3 === freeMult;
        if (this._node_mult.active) {
          this._node_mult.getChildByName("spr_mult2").active = 2 === freeMult;
          this._node_mult.getChildByName("spr_mult3").active = 3 === freeMult;
        }
      },
      showSuperWildNode: function showSuperWildNode(bShow) {
        this._node_super_wild.active = bShow;
        if (bShow) {
          var mapId = cc.vv.gameData.getMapId();
          var list = this._cfg.superFreeWildKuang[mapId - 1];
          for (var i = 0; i < list.length; i++) this._superWildList[i].active = list[i];
        } else for (var _i4 = 0; _i4 < this._superWildList.length; _i4++) this._superWildList[_i4].active = false;
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          if (!total) {
            total = 10;
            cc.vv.gameData.SetTotalFree(total);
          }
          if (!rest) {
            rest = 10;
            cc.vv.gameData.SetFreeTime(rest);
          }
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetTotalFreeWin();
          this._bottomScript.SetWin(nTotal);
          this.setFreeMultTitle();
        } else {
          this._bottomScript.ShowFreeModel(false);
          this._node_mult.active = false;
        }
        cc.vv.gameData.setIsFreeGame(bFree);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
      },
      playGameBgm: function playGameBgm() {
        if (cc.vv.gameData.isFreeGame()) {
          var freeType = cc.vv.gameData.getFreeType();
          freeType === cc.vv.gameData.getFreeTypeList()["super"] ? Global.SlotsSoundMgr.playBgm("fgbgm") : Global.SlotsSoundMgr.playBgm("fgbm");
        } else Global.SlotsSoundMgr.playNormalBgm();
      },
      awaitTime: function awaitTime(time) {
        var _this8 = this;
        return new Promise(function(sucess, failed) {
          _this8.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  TheGodOfFortune_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1a18cPzExAd7RMJTaUM4Va", "TheGodOfFortune_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _ingot: null,
        _bonusIndex: 0,
        _type: ""
      },
      ingot: function ingot() {
        this._ingot || (this._ingot = this.node.getChildByName("ingot"));
        return this._ingot;
      },
      start: function start() {},
      StartMove: function StartMove() {
        this._super();
        this.hideOther();
      },
      hideOther: function hideOther() {
        this.showIngot();
        this.setNum();
        this.setPool();
        this.setPrize();
        this.showBonusWildKuang(false);
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.hideOther();
        data && ("ingot" === data.type && data.num ? this.showIngot(data.num) : "coin" === data.type && data.num ? this.setNum(data.num) : "pool" === data.type && data.num ? this.setPool(data.num) : "wild" === data.type);
      },
      showIngot: function showIngot(num) {
        if (this.ingot()) if (num > 0) {
          this.ingot().active = true;
          this.ingot().getChildByName("spr").getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("symbol").getSpriteFrame("theme185_s_jiao" + num);
        } else this.ingot().active = false;
      },
      getIngotWPos: function getIngotWPos() {
        return this.ingot().convertToWorldSpaceAR(cc.v2(0, 0));
      },
      setType: function setType(type) {
        this._type = type;
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var ramSym = [];
        var data = null;
        ramSym = "bonus_1" === this._type ? Global.copy(cfg.bonusRandom1) : "bonus_2" === this._type ? Global.copy(cfg.bonusRandom2) : Global.copy(cfg.randomSymbols);
        var randIdx = Global.random(1, ramSym.length);
        var randVal = ramSym[randIdx - 1];
        if (4 === randVal && ("bonus_1" === this._type || "bonus_2" === this._type)) {
          var randIdx2 = Global.random(1, cfg.bonusCoinMultList.length);
          var randData = cfg.bonusCoinMultList[randIdx2 - 1] * cc.vv.gameData.GetTotalBet();
          data = {
            type: "coin",
            num: randData
          };
        }
        this.ShowById(randVal, data);
      },
      setBonusIndex: function setBonusIndex(index) {
        this._bonusIndex = index;
      },
      getBonusIndex: function getBonusIndex() {
        return this._bonusIndex;
      },
      playBonusRedKuangAnim: function playBonusRedKuangAnim(bShow) {
        var _this = this;
        if (bShow) {
          var aniNode = this.setBonusAnimationToTop(true);
          var topShowNode = cc.find("kuang_red", aniNode);
          topShowNode.active = true;
          aniNode.zIndex = 1e3;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            nodeSp.setAnimation(0, "animation", false);
            nodeSp.setCompleteListener(function() {
              _this.setBonusAnimationToTop(false);
            });
          }
        } else cc.find("kuang_red", this.node).active = false;
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
          showNode && showNode.removeFromParent();
          this.node.active = true;
          this._showNode && (this._showNode.active = true);
        }
        return this.node;
      },
      setPrize: function setPrize(val) {
        this._prize = val;
      },
      getPrize: function getPrize() {
        return this._prize;
      },
      setNum: function setNum(num) {
        var lbl = cc.find("lbl_coin", this.node);
        if (lbl) if (num) {
          lbl.active = true;
          lbl.getComponent(cc.Label).string = Global.formatNumShort(num);
          this.setPrize(num);
        } else lbl.active = false;
      },
      setPool: function setPool(num) {
        var spr = cc.find("spr_pool", this.node);
        if (spr) if (num) {
          spr.active = true;
          spr.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("symbol").getSpriteFrame("theme185_s_j" + (4 - num));
          var pool = cc.vv.gameData.getBonusPoolList();
          this.setPrize(pool[num]);
        } else spr.active = false;
      },
      showBonusWildKuang: function showBonusWildKuang(bShow) {
        var spine_kuang = cc.find("kuang_wild", this.node);
        if (spine_kuang) if (bShow) {
          spine_kuang.active = true;
          spine_kuang.getComponent(sp.Skeleton).setAnimation(0, "animation1", true);
        } else spine_kuang.active = false;
      },
      playCollectAnim: function playCollectAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].collect_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].collect_ani.name) {
            this.node.zIndex = cfg.symbol[id].collect_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].collect_ani.name, false);
          }
        }
      },
      playWinAnimation: function playWinAnimation() {
        var id = this._id;
        601 === id || 602 === id || 603 === id || 604 === id ? this.playLionWinAnim() : this._super();
      },
      playLionWinAnim: function playLionWinAnim() {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].win_node && cfg.symbol[this._id].win_ani) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[this._id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[this._id].win_ani.name) {
            this._showNode.zIndex = cfg.symbol[this._id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[this._id].win_ani.name, true);
          }
        }
      },
      playBonusWinAnim: function playBonusWinAnim() {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].win_node && cfg.symbol[this._id].win_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[this._id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[this._id].win_ani.name) {
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[this._id].win_ani.name, true);
          }
        }
      },
      GetKuangShowParent: function GetKuangShowParent() {
        return cc.find("Canvas/safe_node/slots/top_kuang");
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
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "TheGodOfFortune_BonusGame", "TheGodOfFortune_BonusReel", "TheGodOfFortune_Cfg", "TheGodOfFortune_Collect", "TheGodOfFortune_GameData", "TheGodOfFortune_Logic", "TheGodOfFortune_Popup", "TheGodOfFortune_Reel", "TheGodOfFortune_Slots", "TheGodOfFortune_Symbol" ]);