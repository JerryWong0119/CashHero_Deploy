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
  Shakyamuni_BonusReels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d87249h3r1EtZSoVi5lt1bv", "Shakyamuni_BonusReels");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {
        _jpIdx: 0,
        _isAnt: false
      },
      start: function start() {},
      Init: function Init(idx, nCount, node, jpIdx) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this.setJpIdx(jpIdx);
        this._super(idx, nCount, node);
        for (var i = 0; i < this._symbols.length; i++) this._symbols[i].setType(2);
      },
      setJpIdx: function setJpIdx(val) {
        this._jpIdx = val;
      },
      getJpIdx: function getJpIdx() {
        return this._jpIdx;
      },
      StartMove: function StartMove() {
        this._super();
        this.setIsAnt(false);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.getBonusSlotsScript();
        slots.OnReelSpinEnd(this._reelIdx);
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      ReadyToStop: function ReadyToStop() {
        if (!this._bNotifyReadyStop) {
          this._bNotifyReadyStop = true;
          var slots = cc.vv.gameData.getBonusSlotsScript();
          slots.OnReelReadyToStop(this._reelIdx);
        }
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        var slots = cc.vv.gameData.getBonusSlotsScript();
        slots.OnReelBounsActionBefore(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        this.playReelStop();
        var slots = cc.vv.gameData.getBonusSlotsScript();
        slots.OnReelBounsActionDeep(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.getBonusSlotsScript();
        slots.OnReelBounsActionEnd(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      },
      setIsAnt: function setIsAnt(val) {
        this._isAnt = val;
      },
      playReelStop: function playReelStop() {
        var stopEff = 3 == this._symbols[0].GetShowId() ? "bgreelbgsctr" : "reelstop";
        Global.SlotsSoundMgr.playEffect(stopEff);
      },
      playAntiAnimation: function playAntiAnimation() {
        this._isAnt && this.ShowAntiEffect(true);
        return this._isAnt;
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        var node = cc.find("node_anti", this.node);
        if (node) if (bShow) {
          node.active = true;
          cc.vv.gameData.getBonusSlotsScript().playAntiAnim(true, this._jpIdx);
          Global.SlotsSoundMgr.playEffect("jpchuxian");
        } else if (node.active) {
          node.active = false;
          this._stopRightNow && cc.vv.AudioManager.stopEffectByName("jpchuxian");
          cc.vv.gameData.getBonusSlotsScript().playAntiAnim(false, this._jpIdx);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Shakyamuni_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12a52fz7NFEMJ4TW7fzYv3v", "Shakyamuni_BonusSlots");
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
        _jpPanelList: []
      },
      start: function start() {},
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 29;
        this._row = 1;
        this._node_bonus = cc.find("safe_node/bonus_game", this.node);
        this._node_bonus.active = false;
        this._bonus_slots = cc.find("slots", this._node_bonus);
        this._jpPanelList.push(cc.find("mini", this._bonus_slots));
        this._jpPanelList.push(cc.find("minor", this._bonus_slots));
        this._jpPanelList.push(cc.find("major", this._bonus_slots));
        this._jpPanelList.push(cc.find("maxi", this._bonus_slots));
        this._jpPanelList.push(cc.find("grand", this._bonus_slots));
        this._node_left = cc.find("node_left", this._bonus_slots);
        this._spine_collect = cc.find("safe_node/bonus_collect", this.node);
        this._spine_collect.active = false;
        this._topAniNode = cc.find("top_ani", this._bonus_slots);
        this.createReels(this._col, this._row);
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, this);
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRecvMsgSubAction, false, this);
      },
      createReels: function createReels(col, row) {
        var _this = this;
        var node_reels = [];
        var _loop = function _loop(i) {
          var reels = cc.find("reels", _this._jpPanelList[i]);
          reels && reels.children.forEach(function(reel) {
            node_reels.push({
              node: reel,
              jpIdx: i + 1
            });
          });
        };
        for (var i = 0; i < this._jpPanelList.length; i++) _loop(i);
        for (var _i = 0; _i < node_reels.length; _i++) {
          var scp = node_reels[_i].node.addComponent("Shakyamuni_BonusReels");
          scp.Init(_i, row, this._topAniNode, node_reels[_i].jpIdx);
          this._reels.push(scp);
        }
      },
      initSymbols: function initSymbols() {
        var items = cc.vv.gameData.getEpicInfo().items;
        for (var i = 0; i < items.length; i++) {
          var symbol = this.GetSymbolByIdx(i + 1);
          if (-1 == items[i]) symbol.ShowById(this.getBonusRandVal()); else {
            symbol.ShowById(3);
            symbol.setNum(items[i]);
          }
        }
      },
      initKuangSpin: function initKuangSpin() {
        for (var i = 0; i < this._jpPanelList.length; i++) {
          var chuxian = cc.find("kuang/JP_ChuXian", this._jpPanelList[i]);
          var daiji = cc.find("kuang/JP_DaiJi", this._jpPanelList[i]);
          var shuaguang = cc.find("kuang/JP_ShuaGuang", this._jpPanelList[i]);
          var baoguang = cc.find("kuang/JP_BaoGuang", this._jpPanelList[i]);
          chuxian.active = false;
          daiji.active = this._epicInfo.jackpotList.includes(i + 1);
          shuaguang.active = false;
          baoguang.active = false;
        }
      },
      playAntiAnim: function playAntiAnim(bPlay, jpIdx) {
        var chuxian = cc.find("kuang/JP_ChuXian", this._jpPanelList[jpIdx - 1]);
        chuxian.active = bPlay;
        if (bPlay) {
          var animList = [ "Mini", "Minor", "Major", "Maxi", "Grand" ];
          chuxian.getComponent(sp.Skeleton).setAnimation(0, "JP_ChuXian_" + animList[jpIdx - 1] + "_Intro", false);
          chuxian.getComponent(sp.Skeleton).addAnimation(0, "JP_ChuXian_" + animList[jpIdx - 1] + "_Loop", false);
        }
      },
      enterBonusGame: function enterBonusGame(isTri) {
        var _this2 = this;
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
                      _this2._bottomScript.SetWin(0);
                      _this2._epicInfo = cc.vv.gameData.getEpicInfo();
                      _this2._node_bonus.active = true;
                      _this2.setRestCnt(_this2._epicInfo.restCnt);
                      _this2.initSymbols();
                      _this2.lockJackpot(_this2._epicInfo.jackpotValues);
                      _this2.initKuangSpin();
                      _context.next = 11;
                      return _this2.playTriAnim(isTri);

                     case 11:
                      _context.next = 13;
                      return cc.vv.gameData.awaitTime(1);

                     case 13:
                      _this2.reqSpin();
                      _this2._bonusSuccess = success;

                     case 15:
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
      reqSpin: function reqSpin() {
        this._hintList = this._epicInfo.hintList;
        this.StartMove(this._epicInfo);
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
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (200 === msg.code) {
                _this3._epicInfo = msg.data.epicInfo;
                _this3._gameInfo = _this3._epicInfo;
                cc.vv.gameData.setEpicInfo(_this3._epicInfo);
                _this3.SetSlotsResult(_this3._epicInfo.items);
              }

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      StartMove: function StartMove(data) {
        this.setRestCnt(this._epicInfo.restCnt - 1);
        this._bStopRightnow = null;
        this._gameInfo = null;
        var reels = [];
        this._moveIdxs = [];
        for (var i = 0; i < data.items.length; i++) if (-1 == data.items[i]) {
          reels.push(this._reels[i]);
          this._moveIdxs.push(this._reels[i].GetReelIdx());
        }
        this.MoveReels(reels);
        this._stopTime = this.GetStopTime();
        if (!this._bStopRightnow) {
          this.SetReelStateInfo(data);
          var addT = this._reels[this._moveIdxs[0]].playAntiAnimation();
          this._stopTime += addT ? 1 : 0;
        }
      },
      SetSlotsResult: function SetSlotsResult(items) {
        var acRow = items.length / this._col;
        var reelResults = [];
        for (var i = 0; i < items.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          var res = {};
          if (-1 == items[i]) res.sid = this.getBonusRandVal(); else {
            res.sid = 3;
            res.data = {
              coin: items[i]
            };
          }
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].unshift(res);
        }
        for (var _i2 = 0; _i2 < this._reels.length; _i2++) {
          var item = this._reels[_i2];
          var reelRes = reelResults[_i2];
          item.SetResult(reelRes);
        }
      },
      SetReelStateInfo: function SetReelStateInfo(data) {
        var hintResult = data.hintResult;
        var hintList = data.hintList;
        for (var i = 0; i < hintList.length; i++) {
          var reelIdx = hintList[i] - 1;
          this._reels[reelIdx].setIsAnt(true);
        }
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        if (!this._bStopRightnow) {
          var isPlayAnit = false;
          for (var i = 0; i < this._reels.length; i++) {
            var idx = this._reels[i].GetReelIdx();
            this._moveIdxs.indexOf(i) == this._moveIdxs.indexOf(colIdx) + 1 && (isPlayAnit = this._reels[idx].playAntiAnimation());
            if (idx > colIdx && isPlayAnit) {
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              this._reels[idx].AddDelayTime(nAddSpeedTime);
            }
          }
        }
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var jpIdx = this._reels[colIdx].getJpIdx();
        if (this._epicInfo.jackpotList.includes(jpIdx)) {
          Global.SlotsSoundMgr.playEffect("jpawards");
          var jpList = [ "Mini", "Minor", "Major", "Maxi", "Grand" ];
          var baoguang = cc.find("kuang/JP_BaoGuang", this._jpPanelList[jpIdx - 1]);
          baoguang.active = true;
          baoguang.getComponent(sp.Skeleton).setAnimation(0, "JP_BaoGuang_" + jpList[jpIdx - 1], false);
          var daiji = cc.find("kuang/JP_DaiJi", this._jpPanelList[jpIdx - 1]);
          daiji.active = true;
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this._gameInfo.isEnd ? this.playGameResult() : this.onSpinEndAction();
      },
      playGameResult: function playGameResult() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var totalWin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (!(_this4._epicInfo.jackpotList.length > 0)) {
                _context4.next = 3;
                break;
              }
              _context4.next = 3;
              return _this4.playWinJpAnim();

             case 3:
              _context4.next = 5;
              return _this4.flyAllItems();

             case 5:
              totalWin = _this4._epicInfo.winCoin;
              _context4.next = 8;
              return cc.vv.gameData.getPopupScript().endBonusGame(totalWin);

             case 8:
              cc.vv.gameData.getPopupScript().playXiongmaoQpAnim();
              _context4.next = 11;
              return cc.vv.gameData.awaitTime(3.2);

             case 11:
              _this4._node_bonus.active = false;
              _this4.resetJackpot();
              cc.vv.gameData.setIsBonusGame(false);
              Global.SlotsSoundMgr.stopBgm();
              cc.vv.gameData.AddCoin(totalWin);
              _context4.next = 18;
              return new Promise(function(sucess, failed) {
                _this4.ShowBottomWin(totalWin, totalWin, true, sucess);
              });

             case 18:
              if (_this4._bonusSuccess) {
                _this4._bonusSuccess();
                _this4._bonusSuccess = null;
              }

             case 19:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this5.setRestCnt(_this5._epicInfo.restCnt, 3 == _this5._epicInfo.restCnt);
              _context5.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              _this5.reqSpin();

             case 4:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      getBonusRandVal: function getBonusRandVal() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomBonusSymbols.length);
        return cfg.randomBonusSymbols[randIdx - 1];
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.bonusReelStopInter || .6;
        return reelIdx * nIter;
      },
      playTriAnim: function playTriAnim(isTri) {
        var _this6 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var _loop2, i, _i3;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                if (!isTri) {
                  _context6.next = 10;
                  break;
                }
                _loop2 = function _loop2(i) {
                  var pos_s = cc.find("pos_4", _this6._bonus_slots).position;
                  var pos_e = cc.find("pos_" + (i + 1), _this6._bonus_slots).position;
                  _this6.showJpTit(_this6._jpPanelList[i], false);
                  _this6._jpPanelList[i].position = i < 3 ? pos_s : pos_e;
                  cc.tween(_this6._jpPanelList[i]).delay(.2 * i).to(1 - .2 * i, {
                    position: pos_e
                  }).delay(.3 * i).parallel(cc.tween().to(.3, {
                    scale: 1.2
                  }).to(.2, {
                    scale: 1
                  }), cc.tween().call(function() {
                    _this6.showJpTit(_this6._jpPanelList[i], true, true);
                  })).start();
                };
                for (i = 0; i < _this6._jpPanelList.length; i++) _loop2(i);
                _context6.next = 5;
                return cc.vv.gameData.awaitTime(1);

               case 5:
                Global.SlotsSoundMgr.playEffect("bgreelup");
                _context6.next = 8;
                return cc.vv.gameData.awaitTime(2);

               case 8:
                _context6.next = 11;
                break;

               case 10:
                for (_i3 = 0; _i3 < _this6._jpPanelList.length; _i3++) {
                  _this6._jpPanelList[_i3].position = cc.find("pos_" + (_i3 + 1), _this6._bonus_slots).position;
                  _this6.showJpTit(_this6._jpPanelList[_i3], true);
                }

               case 11:
                success();

               case 12:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      },
      showJpTit: function showJpTit(node, bShow, bPlay, animName) {
        var jp_1 = cc.find("jp_1", node);
        var jp_2 = cc.find("jp_2", node);
        jp_1.active = bShow;
        jp_2.active = bShow;
        if (bPlay) {
          jp_1.setScale(0);
          jp_2.setScale(0);
          cc.tween(jp_1).to(.5, {
            scale: 1
          }).start();
          cc.tween(jp_2).to(.5, {
            scale: 1
          }).start();
        }
        if (animName) {
          var animList = [ "Mini", "Minor", "Major", "Maxi", "Grand" ];
          jp_1.getComponent(sp.Skeleton).setAnimation(0, "JP_ShuZiDaiJi_" + animName + "EN");
          jp_2.getComponent(sp.Skeleton).setAnimation(0, "JP_ShuZiDaiJi_" + animName + "EN");
        }
      },
      setRestCnt: function setRestCnt(curT, bAdd) {
        var spr_lbl = cc.find("spr_lbl", this._node_left);
        spr_lbl.getComponent("ImgSwitchCmp").setIndex(curT);
        var spine = cc.find("spine", this._node_left);
        if (bAdd) {
          spine.active = true;
          spine.getComponent(sp.Skeleton).setAnimation(0, "collect_glow", false);
          Global.SlotsSoundMgr.playEffect("bgcountback3");
        } else spine.active = false;
      },
      playWinJpAnim: function playWinJpAnim() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var winList, total, i, winCoin;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              winList = _this7._epicInfo.jackpotList;
              winList.sort(function(a, b) {
                return a - b;
              });
              total = _this7._bottomScript.getCurrentWin();
              i = 0;

             case 4:
              if (!(i < winList.length)) {
                _context7.next = 13;
                break;
              }
              winCoin = _this7._epicInfo.jackpotValues[winList[i] - 1];
              _context7.next = 8;
              return cc.vv.gameData.getPopupScript().winJpAnim(winCoin, winList[i]);

             case 8:
              total += winCoin;
              _this7._bottomScript.SetWin(total);

             case 10:
              i++;
              _context7.next = 4;
              break;

             case 13:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      flyAllItems: function flyAllItems() {
        var _this8 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            var items, total, i, symbol, fromPos, endNode, toPos;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                items = _this8._epicInfo.items;
                total = _this8._bottomScript.getCurrentWin();
                i = 0;

               case 3:
                if (!(i < items.length)) {
                  _context8.next = 19;
                  break;
                }
                if (!(items[i] > 0)) {
                  _context8.next = 16;
                  break;
                }
                symbol = _this8.GetSymbolByIdx(i + 1);
                fromPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                endNode = cc.find("safe_node/LMSlots_Bottom/winBg/lbl_winNum_nor", _this8.node);
                toPos = endNode.convertToWorldSpaceAR(cc.v2(0, 0));
                Global.SlotsSoundMgr.playEffect("");
                _context8.next = 12;
                return _this8.flyItem(fromPos, toPos);

               case 12:
                total += items[i];
                _this8._bottomScript.SetWin(total);
                _context8.next = 16;
                return cc.vv.gameData.awaitTime(.5);

               case 16:
                i++;
                _context8.next = 3;
                break;

               case 19:
                success();

               case 20:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      flyItem: function flyItem(fromPos, toPos) {
        var _this9 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success, failed) {
            var from, to, v, length, angle;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("bgcollect");
                from = _this9._spine_collect.parent.convertToNodeSpaceAR(fromPos);
                to = _this9._spine_collect.parent.convertToNodeSpaceAR(toPos);
                v = cc.v2(to.x, to.y).sub(cc.v2(from.x, from.y));
                length = v.mag();
                angle = v.signAngle(cc.v2(1, 0));
                _this9._spine_collect.active = true;
                _this9._spine_collect.position = from;
                _this9._spine_collect.angle = -angle * cc.macro.DEG + 90;
                _this9._spine_collect.scaleY = length / 500;
                _this9._spine_collect.scaleX = Math.min(1, length / 500);
                _this9._spine_collect.getComponent(sp.Skeleton).setAnimation(0, "path_lizi1", false);
                _context9.next = 14;
                return cc.vv.gameData.awaitTime(.5);

               case 14:
                success();

               case 15:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      lockJackpot: function lockJackpot(poolList) {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
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
        }, {
          prizeType: 4,
          pauseNum: poolList[4]
        } ]);
      },
      resetJackpot: function resetJackpot() {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        prizepool.ResumePausePool();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Shakyamuni_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7538e95AjBP5qBy9IocYuRW", "Shakyamuni_Cfg");
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
          name: "wild",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        win_node: "w2",
        win_ani: {
          name: "Scatter_02",
          zIndex: 300
        },
        stop_ani: {
          name: "Scatter_01",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        trigger_ani: {
          name: "Scatter_logo",
          zIndex: 300
        },
        stop_logoAni: {
          name: "Scatter_Flip_logo",
          zIndex: 100
        },
        stop_numAni: {
          name: "Scatter_Flip_Num",
          zIndex: 100
        },
        isMask: false
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "H1",
          zIndex: 300
        },
        isMask: true,
        big_ani: "h1"
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "H2",
          zIndex: 300
        },
        isMask: true,
        big_ani: "h2"
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "H3",
          zIndex: 300
        },
        isMask: true,
        big_ani: "h3"
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "H4",
          zIndex: 300
        },
        isMask: true,
        big_ani: "h4"
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "H5",
          zIndex: 300
        },
        isMask: true,
        big_ani: "h5"
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        win_node: "w9",
        win_ani: {
          name: "L1",
          zIndex: 300
        },
        isMask: true,
        big_skin: "L1",
        big_ani: "B_Lsymbol"
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        win_node: "w10",
        win_ani: {
          name: "L2",
          zIndex: 300
        },
        isMask: true,
        big_skin: "L2",
        big_ani: "B_Lsymbol"
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        win_node: "w11",
        win_ani: {
          name: "L3",
          zIndex: 300
        },
        isMask: true,
        big_skin: "L3",
        big_ani: "B_Lsymbol"
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        win_node: "w12",
        win_ani: {
          name: "L4",
          zIndex: 300
        },
        isMask: true,
        big_skin: "L4",
        big_ani: "B_Lsymbol"
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        win_node: "w13",
        win_ani: {
          name: "L5",
          zIndex: 300
        },
        isMask: true,
        big_skin: "L5",
        big_ani: "B_Lsymbol"
      }), _defineProperty(_symbol, 101, {
        node: "s101"
      }), _defineProperty(_symbol, 102, {
        node: "s102"
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Shakyamuni_Slots",
        Reels: "Shakyamuni_Reels",
        Symbols: "Shakyamuni_Symbol"
      },
      col: 5,
      row: 4,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 100
      },
      randomSymbols: [ 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      randomBonusSymbols: [ 4, 5, 6, 7, 8, 9, 10 ],
      kuang: "kuang",
      autoModelDelay: 1,
      speed: 3e3,
      reelStopInter: .2,
      bonusReelStopInter: .2,
      auto_stop_time: 11,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      helpItems: [ "games/Shakyamuni/prefab/LMSlots_Help_item1", "games/Shakyamuni/prefab/LMSlots_Help_item2", "games/Shakyamuni/prefab/LMSlots_Help_item3" ],
      commEffect: {
        path: "games/Shakyamuni/",
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
        path: "games/Shakyamuni/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelsctr",
        antSound: "reelfast",
        antSpeed: 2e3
      }, {
        id: [ 3 ],
        mini: 1,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "",
        path: "games/Shakyamuni/",
        reelStopSound: "reelstop",
        symbolStopSound: "reelbgsctr",
        antSound: "",
        antSpeed: 2e3
      } ]
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Shakyamuni_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5567cBeRNtBkZ5h1xiJYX2j", "Shakyamuni_Collect");
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
        _itemSpList: []
      },
      start: function start() {},
      Init: function Init() {
        this._node_collect = cc.find("safe_node/slots/node_collect", this.node);
        for (var i = 1; i <= 10; i++) this._itemSpList[i] = cc.find("list/item" + i, this._node_collect).getComponent(sp.Skeleton);
        this._spine_jiesuo = cc.find("spine_jiesuo", this._node_collect);
        this._spine_shangsuo = cc.find("spine_shangsuo", this._node_collect);
        this._btn_click = cc.find("btn_click", this._node_collect);
        Global.btnClickEvent(this._btn_click, this.onClickSjt, this);
        this.initItems();
        this.initSjtState();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      setCollectState: function setCollectState(bShow) {
        this._node_collect.active = bShow;
      },
      initItems: function initItems() {
        var curCnt = cc.vv.gameData.getBonusTrail().count;
        for (var i = 1; i < this._itemSpList.length; i++) {
          var aniName = curCnt >= i ? "liang" : "an";
          this._itemSpList[i].setAnimation(0, aniName, true);
        }
      },
      addItem: function addItem() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var curCnt, addEff, aniName, entry;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                if (!_this._isLock) {
                  _context.next = 3;
                  break;
                }
                success();
                return _context.abrupt("return");

               case 3:
                curCnt = cc.vv.gameData.getBonusTrail().count;
                addEff = 10 == curCnt ? "collectSuper" : "collect";
                Global.SlotsSoundMgr.playEffect(addEff);
                aniName = 10 == curCnt ? "taiji" : "jinbi";
                entry = _this._itemSpList[curCnt].setAnimation(0, aniName, false);
                _this._itemSpList[curCnt].addAnimation(0, "liang", true);
                _this._itemSpList[curCnt].setTrackCompleteListener(entry, function() {
                  _this._itemSpList[curCnt].setTrackCompleteListener(entry, null);
                  success();
                });

               case 10:
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
      fullAnim: function fullAnim() {
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect();

               case 1:
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
      initSjtState: function initSjtState() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        this._isLock = curBet < needBet;
        if (this._isLock) {
          this._spine_shangsuo.active = true;
          this._spine_shangsuo.getComponent(sp.Skeleton).setAnimation(0, "BetUp_ShangSuo_Loop", true);
        } else this._spine_shangsuo.active = false;
        this._spine_jiesuo.active = false;
      },
      onClickSjt: function onClickSjt() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        this._isLock && needBet >= curBet && cc.vv.gameData.GetBottomScript().SetBetIdx(needBet);
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var _this2 = this;
        var curBet = cc.vv.gameData.GetBetIdx();
        var needBet = cc.vv.gameData.getNeedBet();
        if (this._isLock && curBet >= needBet) {
          Global.SlotsSoundMgr.playEffect("unlock");
          this._isLock = false;
          this._spine_shangsuo.active = false;
          this._spine_jiesuo.active = true;
          this._spine_jiesuo.getComponent(sp.Skeleton).setAnimation(0, "JDT_JieSuo", false);
          this._spine_jiesuo.getComponent(sp.Skeleton).setCompleteListener(function() {
            _this2._spine_jiesuo.active = false;
          });
        } else if (!this._isLock && curBet < needBet) {
          Global.SlotsSoundMgr.playEffect("lock");
          this._isLock = true;
          this._spine_jiesuo.active = false;
          this._spine_shangsuo.active = true;
          this._spine_shangsuo.getComponent(sp.Skeleton).setAnimation(0, "BetUp_ShangSuo_Intro", false);
          this._spine_shangsuo.getComponent(sp.Skeleton).addAnimation(0, "BetUp_ShangSuo_Loop", true);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Shakyamuni_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06cccLFsBpLQZ+F7hyAiUsj", "Shakyamuni_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._bonusTrail = deskInfo.bonusTrail;
        this._epicInfo = deskInfo.epicInfo;
        this._spWildCard = deskInfo.spWildCard;
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._bonusTrail = msg.bonusTrail;
          this._epicInfo = msg.epicInfo;
          this._spWildCard = msg.spWildCard;
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
      setCollectScript: function setCollectScript(val) {
        this._collectScp = val;
      },
      getCollectScript: function getCollectScript() {
        return this._collectScp;
      },
      setBonusSlotsScript: function setBonusSlotsScript(val) {
        this._bonusSlotsScp = val;
      },
      getBonusSlotsScript: function getBonusSlotsScript() {
        return this._bonusSlotsScp;
      },
      getFreeWinCoin: function getFreeWinCoin() {
        return this._freeWinCoin;
      },
      setFreeWinCoin: function setFreeWinCoin(val) {
        this._freeWinCoin = val;
      },
      getNeedBet: function getNeedBet() {
        return this._deskInfo.needBet;
      },
      getBonusTrail: function getBonusTrail() {
        return this._bonusTrail;
      },
      getEpicInfo: function getEpicInfo() {
        return this._epicInfo;
      },
      setEpicInfo: function setEpicInfo(val) {
        this._epicInfo = val;
      },
      getSpWildCard: function getSpWildCard() {
        return this._spWildCard;
      },
      setSpWildCard: function setSpWildCard(val) {
        this._spWildCard = val;
      },
      setIsFreeGame: function setIsFreeGame(val) {
        this._isFreeGame = val;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      setIsSuperFreeGame: function setIsSuperFreeGame(val) {
        this._isSuperFreeGame = val;
      },
      isSuperFreeGame: function isSuperFreeGame() {
        return this._isSuperFreeGame;
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
  Shakyamuni_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10c28z6/stK0oxpxakvy4ci", "Shakyamuni_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("Shakyamuni_Popup");
        cc.vv.gameData.setPopupScript(script_popup);
        script_popup.Init();
        var script_collect = this.node.addComponent("Shakyamuni_Collect");
        cc.vv.gameData.setCollectScript(script_collect);
        script_collect.Init();
        var script_bonus = this.node.addComponent("Shakyamuni_BonusSlots");
        cc.vv.gameData.setBonusSlotsScript(script_bonus);
        script_bonus.Init();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Shakyamuni_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5cc9sutTZEo5C4PXNK1Gjq", "Shakyamuni_Popup");
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
        this._node_end_bonus = cc.find("node_tri_bonus", this._node_popup);
        this._node_end_bonus = cc.find("node_end_bonus", this._node_popup);
        this._node_win_jp = cc.find("node_win_jp", this._node_popup);
        this._node_tri_free.active = false;
        this._node_end_free.active = false;
        this._node_tri_bonus.active = false;
        this._node_end_bonus.active = false;
        this._node_win_jp.active = false;
        this._qp_taiji = cc.find("safe_node/qp_taiji", this.node);
        this._qp_xiongmao = cc.find("safe_node/qp_xiongmao", this.node);
        this._qp_taiji.active = false;
        this._qp_xiongmao.active = false;
      },
      triFreeGame: function triFreeGame(bFirst, isSuper) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var eff, bg, title, lbl_cnt, spr1, btn, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                eff = bFirst ? isSuper ? "superfgbegain" : "fgbegain" : "fgretrigger";
                Global.SlotsSoundMgr.playEffect(eff);
                _this._node_popup.active = true;
                _this._node_tri_free.active = true;
                bg = cc.find("bg", _this._node_tri_free);
                title = cc.find("title", _this._node_tri_free);
                lbl_cnt = cc.find("lbl_cnt", _this._node_tri_free);
                spr1 = cc.find("spr1", _this._node_tri_free);
                btn = cc.find("btn", _this._node_tri_free);
                btn.active = bFirst;
                btn.getComponent(cc.Button).interactable = false;
                lbl_cnt.getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                spr1.getComponent("ImgSwitchCmp").setIndex(isSuper ? 1 : 0);
                bg.setScale(0);
                title.setScale(0);
                lbl_cnt.setScale(0);
                spr1.setScale(0);
                btn.setScale(0);
                scaleTime = .5;
                delayTime = .2;
                cc.tween(bg).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(title).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(lbl_cnt).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr1).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn).delay(2 * delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context3.next = 27;
                return cc.vv.gameData.awaitTime(2 * delayTime + scaleTime);

               case 27:
                if (!bFirst) {
                  _context3.next = 36;
                  break;
                }
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this;
                clickFunc = function() {
                  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("button");
                        btn.getComponent(cc.Button).interactable = false;
                        cc.tween(title).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(lbl_cnt).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr1).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(bg).delay(delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context.next = 9;
                        return cc.vv.gameData.awaitTime(delayTime + scaleTime);

                       case 9:
                        self._node_popup.active = false;
                        self._node_tri_free.active = false;
                        success();

                       case 12:
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
                _context3.next = 47;
                break;

               case 36:
                _context3.next = 38;
                return cc.vv.gameData.awaitTime(2);

               case 38:
                cc.tween(title).to(scaleTime, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                cc.tween(lbl_cnt).to(scaleTime, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                cc.tween(spr1).to(scaleTime, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                cc.tween(bg).delay(delayTime).to(scaleTime, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context3.next = 44;
                return cc.vv.gameData.awaitTime(delayTime + scaleTime);

               case 44:
                _this._node_popup.active = false;
                _this._node_tri_free.active = false;
                success();

               case 47:
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
      endFreeGame: function endFreeGame(winCoin, isSuper) {
        var _this2 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var bg, title, kuang, spr1, spr2, btn, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgend");
                _this2._node_popup.active = true;
                _this2._node_end_free.active = true;
                bg = cc.find("bg", _this2._node_end_free);
                title = cc.find("title", _this2._node_end_free);
                kuang = cc.find("kuang", _this2._node_end_free);
                spr1 = cc.find("spr1", _this2._node_end_free);
                spr2 = cc.find("spr2", _this2._node_end_free);
                btn = cc.find("btn", _this2._node_end_free);
                btn.getComponent(cc.Button).interactable = false;
                spr1.active = !isSuper;
                spr2.active = isSuper;
                cc.find("kuang/lbl_win", _this2._node_end_free).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                cc.find("spr1/lbl_cnt", _this2._node_end_free).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                cc.find("spr2/lbl_cnt", _this2._node_end_free).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                bg.setScale(0);
                title.setScale(0);
                kuang.setScale(0);
                spr1.setScale(0);
                spr2.setScale(0);
                btn.setScale(0);
                scaleTime = .5;
                delayTime = .2;
                cc.tween(bg).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(title).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(kuang).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr1).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr2).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn).delay(2 * delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context6.next = 31;
                return cc.vv.gameData.awaitTime(2 * delayTime + scaleTime);

               case 31:
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this2;
                clickFunc = function() {
                  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("button");
                        btn.getComponent(cc.Button).interactable = false;
                        cc.tween(title).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(kuang).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr1).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr2).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(bg).delay(delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context4.next = 10;
                        return cc.vv.gameData.awaitTime(delayTime + scaleTime);

                       case 10:
                        self._node_popup.active = false;
                        self._node_end_free.active = false;
                        success();

                       case 13:
                       case "end":
                        return _context4.stop();
                      }
                    }, _callee4);
                  }));
                  return function clickFunc() {
                    return _ref5.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                })));

               case 37:
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
      triBonusGame: function triBonusGame() {
        var _this3 = this;
        return new Promise(function() {
          var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(success, failed) {
            var bg, title, spr1, spr2, btn, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                _this3._node_popup.active = true;
                _this3._node_tri_bonus.active = true;
                bg = cc.find("bg", _this3._node_tri_bonus);
                title = cc.find("title", _this3._node_tri_bonus);
                spr1 = cc.find("spr1", _this3._node_tri_bonus);
                spr2 = cc.find("spr2", _this3._node_tri_bonus);
                btn = cc.find("btn", _this3._node_tri_bonus);
                btn.getComponent(cc.Button).interactable = false;
                bg.setScale(0);
                title.setScale(0);
                spr1.setScale(0);
                spr2.setScale(0);
                btn.setScale(0);
                scaleTime = .5;
                delayTime = .2;
                cc.tween(bg).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(title).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr1).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr2).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn).delay(2 * delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context9.next = 22;
                return cc.vv.gameData.awaitTime(2 * delayTime + scaleTime);

               case 22:
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this3;
                clickFunc = function() {
                  var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("button");
                        btn.getComponent(cc.Button).interactable = false;
                        cc.tween(title).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr1).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr2).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(bg).delay(delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context7.next = 9;
                        return cc.vv.gameData.awaitTime(delayTime + scaleTime);

                       case 9:
                        self._node_popup.active = false;
                        self._node_tri_bonus.active = false;
                        success();

                       case 12:
                       case "end":
                        return _context7.stop();
                      }
                    }, _callee7);
                  }));
                  return function clickFunc() {
                    return _ref8.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                })));

               case 28:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x5, _x6) {
            return _ref7.apply(this, arguments);
          };
        }());
      },
      endBonusGame: function endBonusGame(winCoin) {
        var _this4 = this;
        return new Promise(function() {
          var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(success, failed) {
            var bg, title, kuang, btn, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("bgtotalwinbgm");
                _this4._node_popup.active = true;
                _this4._node_end_bonus.active = true;
                bg = cc.find("bg", _this4._node_end_bonus);
                title = cc.find("title", _this4._node_end_bonus);
                kuang = cc.find("kuang", _this4._node_end_bonus);
                btn = cc.find("btn", _this4._node_end_bonus);
                btn.getComponent(cc.Button).interactable = false;
                cc.find("kuang/lbl_win", _this4._node_end_bonus).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                bg.setScale(0);
                title.setScale(0);
                kuang.setScale(0);
                btn.setScale(0);
                scaleTime = .5;
                delayTime = .2;
                cc.tween(bg).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(title).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(kuang).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn).delay(2 * delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context12.next = 21;
                return cc.vv.gameData.awaitTime(2 * delayTime + scaleTime);

               case 21:
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this4;
                clickFunc = function() {
                  var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                      while (1) switch (_context10.prev = _context10.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("button");
                        btn.getComponent(cc.Button).interactable = false;
                        cc.tween(title).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(kuang).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(bg).delay(delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context10.next = 8;
                        return cc.vv.gameData.awaitTime(delayTime + scaleTime);

                       case 8:
                        self._node_popup.active = false;
                        self._node_end_bonus.active = false;
                        success();

                       case 11:
                       case "end":
                        return _context10.stop();
                      }
                    }, _callee10);
                  }));
                  return function clickFunc() {
                    return _ref11.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
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

               case 27:
               case "end":
                return _context12.stop();
              }
            }, _callee12);
          }));
          return function(_x7, _x8) {
            return _ref10.apply(this, arguments);
          };
        }());
      },
      winJpAnim: function winJpAnim(winCoin, jpIdx) {
        var _this5 = this;
        return new Promise(function() {
          var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(success, failed) {
            var bg, title, kuang, btn, jpNameList, changeTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("jpbgm");
                _this5._node_popup.active = true;
                _this5._node_win_jp.active = true;
                bg = cc.find("bg", _this5._node_win_jp);
                title = cc.find("title", _this5._node_win_jp);
                kuang = cc.find("kuang", _this5._node_win_jp);
                btn = cc.find("btn", _this5._node_win_jp);
                btn.getComponent(cc.Button).interactable = false;
                cc.find("kuang/lbl_win", _this5._node_win_jp).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                bg.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                bg.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
                jpNameList = [ "Mini_EN", "Minor_EN", "Major_EN", "Maxi_EN", "Grand_EN" ];
                title.getComponent(sp.Skeleton).setAnimation(0, jpNameList[jpIdx - 1], true);
                title.opacity = 0;
                kuang.opacity = 0;
                btn.opacity = 0;
                title.position = cc.v2(title.x, title.y - 40);
                kuang.position = cc.v2(kuang.x, kuang.y - 40);
                btn.position = cc.v2(btn.x, btn.y - 40);
                _context15.next = 21;
                return cc.vv.gameData.awaitTime(.5);

               case 21:
                changeTime = .4;
                delayTime = .2;
                cc.tween(title).to(changeTime, {
                  position: cc.v2(title.x, title.y + 40),
                  opacity: 255
                }).start();
                cc.tween(kuang).delay(2 * delayTime).to(changeTime, {
                  position: cc.v2(kuang.x, kuang.y + 40),
                  opacity: 255
                }).start();
                cc.tween(btn).delay(3 * delayTime).to(changeTime, {
                  position: cc.v2(btn.x, btn.y + 40),
                  opacity: 255
                }).start();
                _context15.next = 28;
                return cc.vv.gameData.awaitTime(3 * delayTime + changeTime);

               case 28:
                btn.off("click");
                btn.getComponent(cc.Button).interactable = true;
                self = _this5;
                clickFunc = function() {
                  var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                      while (1) switch (_context13.prev = _context13.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("button");
                        btn.getComponent(cc.Button).interactable = false;
                        bg.getComponent(sp.Skeleton).addAnimation(0, "end", false);
                        cc.tween(title).to(changeTime, {
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(kuang).delay(2 * delayTime).to(changeTime, {
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn).delay(3 * delayTime).to(changeTime, {
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context13.next = 8;
                        return cc.vv.gameData.awaitTime(3 * delayTime + changeTime);

                       case 8:
                        self._node_popup.active = false;
                        self._node_win_jp.active = false;
                        success();

                       case 11:
                       case "end":
                        return _context13.stop();
                      }
                    }, _callee13);
                  }));
                  return function clickFunc() {
                    return _ref14.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn, clickFunc);
                btn.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                     case 0:
                      btn.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context14.stop();
                    }
                  }, _callee14);
                })));

               case 34:
               case "end":
                return _context15.stop();
              }
            }, _callee15);
          }));
          return function(_x9, _x10) {
            return _ref13.apply(this, arguments);
          };
        }());
      },
      playTaijiQpAnim: function playTaijiQpAnim() {
        var _this6 = this;
        Global.SlotsSoundMgr.playEffect("fgtransition");
        this._qp_taiji.active = true;
        this._qp_taiji.getComponent(sp.Skeleton).setAnimation(0, "guochang", false);
        this._qp_taiji.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this6._qp_taiji.getComponent(sp.Skeleton).setCompleteListener(null);
          _this6._qp_taiji.active = false;
        });
      },
      playXiongmaoQpAnim: function playXiongmaoQpAnim() {
        var _this7 = this;
        Global.SlotsSoundMgr.playEffect("bgtransition");
        this._qp_xiongmao.active = true;
        this._qp_xiongmao.getComponent(sp.Skeleton).setAnimation(0, "idle2", false);
        this._qp_xiongmao.getComponent(sp.Skeleton).setCompleteListener(function() {
          _this7._qp_xiongmao.getComponent(sp.Skeleton).setCompleteListener(null);
          _this7._qp_xiongmao.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Shakyamuni_Reels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94e4cjPi3VPt4eHHCyUggTL", "Shakyamuni_Reels");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Shakyamuni_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b389Hq/UtPG46OLiSVMXeC", "Shakyamuni_Slots");
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
        this._super();
        this._top_men = cc.find("top_men", this.node);
        this._top_men.children.forEach(function(child) {
          child.active = false;
        });
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var epicInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._topScript.SetBackLobby(false);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              epicInfo = cc.vv.gameData.getEpicInfo();
              if (!epicInfo) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return cc.vv.gameData.getBonusSlotsScript().enterBonusGame();

             case 6:
              if (cc.vv.gameData.GetTotalFree() > 0) {
                _this.ShowGameview(true);
                cc.vv.gameData.getBonusTrail().count == cc.vv.gameData.getBonusTrail().totalCount && (_this._spWildCard = cc.vv.gameData.getSpWildCard());
              } else _this.ShowGameview(false);
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context.next = 10;
                break;
              }
              _context.next = 10;
              return _this.CheckExitFreeGame();

             case 10:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 12:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var dataList = [];
        if (this._gameInfo.bonusInfo && this._gameInfo.bonusInfo.items && this._gameInfo.bonusInfo.items.length > 0) {
          var items = this._gameInfo.bonusInfo.items;
          for (var i = 0; i < items.length; i++) dataList[items[i].idx - 1] = items[i];
        }
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var _i = 0; _i < cards.length; _i++) {
          var row = Math.floor(_i / acRow);
          var col = _i % this._col;
          if (this._cfg.symbol[cards[_i]]) {
            var res = {};
            cc.vv.gameData.isSuperFreeGame() && 101 == cards[_i] && (cards[_i] = 102);
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
      StartMove: function StartMove() {
        if (cc.vv.gameData.isBonusGame()) cc.vv.gameData.getBonusSlotsScript().StartMove(); else {
          this._bStopRightnow = null;
          this._gameInfo = null;
          this._topScript.StartMove();
          cc.vv.gameData.ClearOneRoundData();
          var addT = 0;
          if (cc.vv.gameData.isSuperFreeGame() && this._spWildCard && this._spWildCard.idxs && this._spWildCard.idxs.length > 0) {
            this.closeTheDoor();
            addT = 1;
          }
          this.MoveReels(this._reels);
          this._stopTime = this.GetStopTime() + addT;
          Global.SlotsSoundMgr.playNormalBgm();
        }
      },
      StopMove: function StopMove() {
        cc.vv.gameData.isBonusGame() ? cc.vv.gameData.getBonusSlotsScript().StopMove() : this._super();
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
              if (!cc.vv.gameData.isFreeGame()) {
                _context2.next = 5;
                break;
              }
              _this2._spWildCard = _this2._gameInfo.spWildCard;
              if (!(_this2._spWildCard && _this2._spWildCard.idxs && _this2._spWildCard.idxs.length > 0)) {
                _context2.next = 5;
                break;
              }
              _context2.next = 5;
              return _this2.openTheDoor();

             case 5:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              updateBalance = true;
              if (cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime()) {
                nTotal = cc.vv.gameData.getFreeWinCoin();
                updateBalance = false;
              }
              _context2.next = 12;
              return new Promise(function(sucess, failed) {
                _this2.ShowBottomWin(nWin, nTotal, updateBalance, sucess);
              });

             case 12:
              freeInfo = _this2._gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0)) {
                _context2.next = 16;
                break;
              }
              _context2.next = 16;
              return _this2.triFreeGame();

             case 16:
              if (!(_this2._gameInfo.bonusInfo && _this2._gameInfo.bonusInfo.isTrigger)) {
                _context2.next = 19;
                break;
              }
              _context2.next = 19;
              return _this2.triBonusGame();

             case 19:
              if (!(_this2._gameInfo.allFreeCnt > 0 && 0 == _this2._gameInfo.freeCnt)) {
                _context2.next = 22;
                break;
              }
              _context2.next = 22;
              return _this2.endFreeGame();

             case 22:
              _this2.CanDoNextRound();

             case 23:
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
            var isFirst, isSuper;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _context3.next = 2;
                return cc.vv.gameData.awaitTime(1);

               case 2:
                isFirst = _this3._gameInfo.freeCnt === _this3._gameInfo.allFreeCnt;
                isSuper = _this3._gameInfo.bonusTrail.count == _this3._gameInfo.bonusTrail.totalCount;
                if (!isFirst) {
                  _context3.next = 22;
                  break;
                }
                _this3._spWildCard = null;
                _context3.next = 8;
                return cc.vv.gameData.getCollectScript().addItem();

               case 8:
                Global.SlotsSoundMgr.playEffect("triggering");
                _context3.next = 11;
                return cc.vv.gameData.awaitTime(1);

               case 11:
                _context3.next = 13;
                return cc.vv.gameData.getPopupScript().triFreeGame(isFirst, isSuper);

               case 13:
                cc.vv.gameData.getPopupScript().playTaijiQpAnim();
                _context3.next = 16;
                return cc.vv.gameData.awaitTime(1.8);

               case 16:
                _this3.Backup();
                _this3.ShowGameview(true);
                _context3.next = 20;
                return cc.vv.gameData.awaitTime(1);

               case 20:
                _context3.next = 24;
                break;

               case 22:
                _context3.next = 24;
                return cc.vv.gameData.getPopupScript().triFreeGame(isFirst, isSuper);

               case 24:
                success();

               case 25:
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
                nWin = cc.vv.gameData.getFreeWinCoin();
                _context4.next = 3;
                return cc.vv.gameData.getPopupScript().endFreeGame(nWin, cc.vv.gameData.isSuperFreeGame());

               case 3:
                cc.vv.gameData.getPopupScript().playTaijiQpAnim();
                _context4.next = 6;
                return cc.vv.gameData.awaitTime(1.8);

               case 6:
                _this4.Resume();
                _this4.ShowGameview(false);
                _this4._spWildCard = null;
                _this4._top_men.children.forEach(function(child) {
                  child.active = false;
                });
                cc.vv.gameData.getCollectScript().initItems();
                Global.SlotsSoundMgr.stopBgm();
                _context4.next = 14;
                return cc.vv.gameData.awaitTime(1);

               case 14:
                _context4.next = 16;
                return new Promise(function(sucess, failed) {
                  _this4.ShowBottomWin(nWin, nWin, true, sucess);
                });

               case 16:
                success();

               case 17:
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
            var items, i;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                items = _this5._gameInfo.bonusInfo.items;
                for (i = 0; i < items.length; i++) items[i].spCard && _this5.GetSymbolByIdx(items[i].idx).playTriggerAnimation();
                _context5.next = 4;
                return cc.vv.gameData.awaitTime(1);

               case 4:
                _context5.next = 6;
                return cc.vv.gameData.getPopupScript().triBonusGame();

               case 6:
                cc.vv.gameData.getPopupScript().playXiongmaoQpAnim();
                _context5.next = 9;
                return cc.vv.gameData.awaitTime(3.2);

               case 9:
                _context5.next = 11;
                return cc.vv.gameData.getBonusSlotsScript().enterBonusGame(true);

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
        var scatterWinIdx = [];
        for (var i = 0; i < this._gameInfo.zjLuXian.length; i++) {
          var item = this._gameInfo.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        if (this._gameInfo.scatterZJLuXian && this._gameInfo.scatterZJLuXian.indexs) for (var _i3 = 0; _i3 < this._gameInfo.scatterZJLuXian.indexs.length; _i3++) {
          var val = this._gameInfo.scatterZJLuXian.indexs[_i3];
          scatterWinIdx[val] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
        for (var _key in scatterWinIdx) {
          var _symbol = this.GetSymbolByIdx(Number(_key));
          _symbol && _symbol.playWinAnimation();
        }
      },
      openTheDoor: function openTheDoor() {
        var _this6 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var idxs, card, damen, animName, i, node, _i4, quanpai, cardCfg, symNode;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                idxs = _this6._spWildCard.idxs;
                card = _this6._spWildCard.card;
                damen = cc.find("FG_damen", _this6._top_men);
                if (damen.active) {
                  Global.SlotsSoundMgr.playEffect("biglockdoorOpen");
                  damen.getComponent(sp.Skeleton).setAnimation(0, "damen_kai", false);
                } else {
                  Global.SlotsSoundMgr.playEffect("doorOpen");
                  animName = cc.vv.gameData.isSuperFreeGame() ? "xiaomen_kai" : "xiaomen_kai2";
                  for (i = 0; i < idxs.length; i++) {
                    node = _this6.getDoorNode(idxs[i]);
                    node.active = true;
                    node.getComponent(sp.Skeleton).setAnimation(0, animName, false);
                  }
                }
                _context6.next = 6;
                return cc.vv.gameData.awaitTime(.5);

               case 6:
                for (_i4 = 0; _i4 < idxs.length; _i4++) _this6.GetSymbolByIdx(idxs[_i4]).ShowById(card);
                if (!(idxs.length == _this6._col * _this6._row)) {
                  _context6.next = 15;
                  break;
                }
                quanpai = cc.find("FG_quanpai", _this6._top_men);
                if (!damen.active) {
                  quanpai.active = true;
                  Global.SlotsSoundMgr.playEffect("alldoor");
                }
                cardCfg = cc.vv.gameData.getGameCfg().symbol[card];
                if (card >= 9) {
                  symNode = cc.find("B_Lsymbol", _this6._top_men);
                  symNode.active = true;
                  cardCfg.big_skin && symNode.getComponent(sp.Skeleton).setSkin(cardCfg.big_skin);
                  symNode.getComponent(sp.Skeleton).setAnimation(0, cardCfg.big_ani, false);
                } else {
                  symNode = cc.find("big_symbol", _this6._top_men);
                  symNode.active = true;
                  symNode.getComponent(sp.Skeleton).setAnimation(0, cardCfg.big_ani, false);
                }
                symNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                  symNode.getComponent(sp.Skeleton).setCompleteListener(null);
                  quanpai.active = false;
                  symNode.active = false;
                  success();
                });
                _context6.next = 18;
                break;

               case 15:
                _context6.next = 17;
                return cc.vv.gameData.awaitTime(1);

               case 17:
                success();

               case 18:
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
      closeTheDoor: function closeTheDoor() {
        var idxs = this._spWildCard.idxs;
        if (idxs.length == this._col * this._row) {
          Global.SlotsSoundMgr.playEffect("biglockdoorClose");
          var damen = cc.find("FG_damen", this._top_men);
          damen.active = true;
          damen.getComponent(sp.Skeleton).setAnimation(0, "damen_guan", false);
          damen.getComponent(sp.Skeleton).addAnimation(0, "damen_idle", true);
        } else {
          Global.SlotsSoundMgr.playEffect("doorClose");
          var animName = cc.vv.gameData.isSuperFreeGame() ? "xiaomen_guan" : "xiaomen_guan2";
          for (var i = 0; i < idxs.length; i++) {
            var node = this.getDoorNode(idxs[i]);
            node.active = true;
            node.getComponent(sp.Skeleton).setAnimation(0, animName, false);
          }
        }
      },
      getDoorNode: function getDoorNode(idx) {
        var node = cc.find("xiaomen_" + idx, this._top_men);
        if (!node) {
          node = cc.instantiate(cc.vv.gameData.GetAssetScript().GetPrefabByName("xiaomen"));
          node.parent = this._top_men;
          node.name = "xiaomen_" + idx;
          node.position = this._top_men.convertToNodeSpaceAR(this.GetSymbolByIdx(idx).node.convertToWorldSpaceAR(cc.v2(0, 0)));
          node.zIndex = this._col * this._row - idx + 100;
        }
        return node;
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.vv.gameData.setIsFreeGame(bFree);
        if (bFree) {
          Global.SlotsSoundMgr.playBgm("fgbgm");
          var nTotal = cc.vv.gameData.getFreeWinCoin();
          this._bottomScript.SetWin(nTotal);
        }
        bFree && cc.vv.gameData.getBonusTrail().count == cc.vv.gameData.getBonusTrail().totalCount ? cc.vv.gameData.setIsSuperFreeGame(true) : cc.vv.gameData.setIsSuperFreeGame(false);
        cc.vv.gameData.getCollectScript().setCollectState(!bFree);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Shakyamuni_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf1d3dRHU5D2YYUKfQHTmJ/", "Shakyamuni_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _type: 1
      },
      setType: function setType(val) {
        this._type = val;
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        this.setNum();
        this._type && 2 == this._type && this.setMaskVisible(true);
      },
      setMaskVisible: function setMaskVisible(bMask) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node) {
          var showNode = cc.find(cfg.symbol[this._id].node, this.node);
          bMask && cfg.symbol[this._id].isMask ? showNode.color = new cc.Color(100, 100, 100) : showNode.color = cc.Color.WHITE;
        }
      },
      setNum: function setNum(val) {
        var lbl = cc.find("lbl", this.node);
        if (val) {
          lbl.active = true;
          lbl.getComponent(cc.Label).string = Global.formatNumShort(val, 1);
        } else {
          lbl.active = false;
          lbl.getComponent(cc.Label).string = "";
          lbl.stopAllActions();
          lbl.setScale(1);
        }
        return lbl;
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
      StopMoveDeep: function StopMoveDeep() {
        var id = this._id;
        3 == id && this._data && this.playBonusStopAnim();
      },
      playBonusStopAnim: function playBonusStopAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "bonusStop";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if (this._data.spCard) {
            if ("" != cfg.symbol[id].stop_logoAni.name) {
              this.node.zIndex = cfg.symbol[id].stop_logoAni.zIndex - this._symbolIdx + 10 * this._reelIdx;
              var nodeSp = this._showNode.getComponent(sp.Skeleton);
              nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].stop_logoAni.name, false);
            }
          } else {
            if ("" != cfg.symbol[id].stop_numAni.name) {
              this.node.zIndex = cfg.symbol[id].stop_numAni.zIndex - this._symbolIdx + 10 * this._reelIdx;
              var _nodeSp = this._showNode.getComponent(sp.Skeleton);
              _nodeSp && _nodeSp.setAnimation(0, cfg.symbol[id].stop_numAni.name, false);
            }
            if (this._data.coin > 0) {
              var lbl = this.setNum(this._data.coin);
              lbl.scaleX = 0;
              cc.tween(lbl).delay(.4).to(.3, {
                scaleX: 1
              }).to(.2, {
                scale: 1.3
              }).to(.2, {
                scale: 1
              }).start();
            }
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Shakyamuni_BonusReels", "Shakyamuni_BonusSlots", "Shakyamuni_Cfg", "Shakyamuni_Collect", "Shakyamuni_GameData", "Shakyamuni_Logic", "Shakyamuni_Popup", "Shakyamuni_Reels", "Shakyamuni_Slots", "Shakyamuni_Symbol" ]);