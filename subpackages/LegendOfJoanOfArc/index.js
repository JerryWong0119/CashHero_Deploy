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
  LegendOfJoanOfArc_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27c4bCaQiZB3oK25KeYmv0D", "LegendOfJoanOfArc_BonusGame");
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
      extends: require("LMSlots_PauseUI_Base"),
      properties: {
        _exitCallBack: null,
        _curTimes: 3,
        _curUnlockNum: 0,
        _reels: [],
        _shelterList: [],
        _bonusPoolList: []
      },
      start: function start() {},
      Init: function Init() {
        this.initBonusNode();
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.bonus_col;
        this._row = this._cfg.bonus_row;
        this.createReels(this._col, this._row);
        this.initBonusUI();
      },
      createReels: function createReels(col, row) {
        var reelCmp = this._cfg.scripts.Reels;
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this._bonus_slots);
          var scp = node.addComponent("LegendOfJoanOfArc_BonusReel");
          scp.Init(i, 1, row, this._topAniNode);
          this._reels.push(scp);
        }
      },
      initBonusNode: function initBonusNode() {
        this._normal_slots = cc.find("safe_node/slots", this.node);
        this._bonus_slots = cc.find("safe_node/bonus_slots", this.node);
        this._prizePool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1");
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
        this._bonus_bg = cc.find("bonus_bg", this._mask_frame);
        this._spr_left = cc.find("spr_left", this._frame_top);
        this._spr_right = cc.find("spr_right", this._frame_top);
        this._spr_up = cc.find("spr_up", this._frame_top);
        this._spr_up_0 = cc.find("spr_up_0", this._frame_top);
        this._par_left = cc.find("par_left", this._frame_top);
        this._par_right = cc.find("par_right", this._frame_top);
        this._node_tit = cc.find("node_tit", this._frame_top);
        this._shelterList.push(cc.find("shelter_1", this._frame_top));
        this._shelterList.push(cc.find("shelter_2", this._frame_top));
        this._shelterList.push(cc.find("shelter_3", this._frame_top));
        this._shelterList.push(cc.find("shelter_4", this._frame_top));
      },
      initBonusUI: function initBonusUI() {
        this._normal_slots.active = true;
        this._bonus_slots.active = false;
        this._frame_bg.getChildByName("spr").active = false;
        this.setLineState(this._node_col, false);
        this.setLineState(this._node_row_left, false);
        this.setLineState(this._node_row_right, false);
        this._spr_up.active = false;
        this._spr_up_0.active = false;
        this._bonus_bg.active = false;
        this._par_left.active = false;
        this._par_right.active = false;
        this._node_tit.active = false;
        this._node_reels.active = false;
        this._node_bonus_win.active = false;
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
              Global.SlotsSoundMgr.playBgm("bonus_bgm");
              _context.next = 4;
              return _this.playTriAnim();

             case 4:
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
            var awaitT1, awaitT2, awaitT3, spr_bg, awaitT4, _loop, i, awaitT5, _loop2, _i, _loop3, _i2, awaitT6, awaitT7, bonusUnlockList, _i3, awaitT9, info, key, idx, col, row, symscp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this2._normal_slots.active = false;
                _this2._bonus_slots.active = true;
                _this2._frame_bg.y = -383;
                _this2._spr_left.y = -383;
                _this2._spr_right.y = -383;
                _this2._spr_up_0.active = true;
                _this2._spr_up_0.opacity = 255;
                _this2.lockJackpot(_this2._bonusPoolList);
                _context2.next = 10;
                return _this2.awaitTime(.5);

               case 10:
                Global.SlotsSoundMgr.playEffect("reel_change");
                awaitT1 = .5;
                cc.tween(_this2._spr_up_0).to(awaitT1, {
                  opacity: 0
                }).start();
                _context2.next = 15;
                return _this2.awaitTime(awaitT1);

               case 15:
                awaitT2 = .8;
                cc.tween(_this2._frame_bg).to(awaitT2, {
                  position: cc.v2(0, 0)
                }).start();
                cc.tween(_this2._spr_left).to(awaitT2, {
                  position: cc.v2(_this2._spr_left.x, 0)
                }).start();
                cc.tween(_this2._spr_right).to(awaitT2, {
                  position: cc.v2(_this2._spr_right.x, 0)
                }).start();
                _context2.next = 21;
                return _this2.awaitTime(awaitT2);

               case 21:
                awaitT3 = .4;
                _this2._spr_up.active = true;
                _this2._spr_up.opacity = 0;
                cc.tween(_this2._spr_up).to(awaitT3, {
                  opacity: 255
                }).start();
                spr_bg = _this2._frame_bg.getChildByName("spr");
                spr_bg.active = true;
                spr_bg.opacity = 0;
                cc.tween(spr_bg).to(awaitT3, {
                  opacity: 155
                }).start();
                _context2.next = 31;
                return _this2.awaitTime(awaitT3);

               case 31:
                awaitT4 = 1.4;
                _loop = function _loop(i) {
                  var node = _this2._node_col.children[i];
                  node.active = true;
                  node.y = -456;
                  "par" === node.name && node.getComponent(cc.ParticleSystem).resetSystem();
                  cc.tween(node).to(awaitT4, {
                    position: cc.v2(node.x, 456)
                  }).call(function() {
                    "par" === node.name && (node.active = false);
                  }).start();
                };
                for (i = 0; i < _this2._node_col.childrenCount; i++) _loop(i);
                _this2._par_left.active = true;
                _this2._par_left.position = cc.v2(0, -460);
                _this2._par_left.getComponent(cc.ParticleSystem).resetSystem();
                _this2._par_right.active = true;
                _this2._par_right.position = cc.v2(0, -460);
                _this2._par_right.getComponent(cc.ParticleSystem).resetSystem();
                cc.tween(_this2._par_left).to(awaitT4, {
                  position: cc.v2(-340, -460)
                }).start();
                cc.tween(_this2._par_right).to(awaitT4, {
                  position: cc.v2(340, -460)
                }).start();
                _context2.next = 44;
                return _this2.awaitTime(awaitT4);

               case 44:
                awaitT5 = 1.4;
                _loop2 = function _loop2(_i) {
                  var node = _this2._node_row_left.children[_i];
                  node.active = true;
                  node.x = -335;
                  "par" === node.name && node.getComponent(cc.ParticleSystem).resetSystem();
                  cc.tween(node).to(awaitT5, {
                    position: cc.v2(335, node.y)
                  }).call(function() {
                    "par" === node.name && (node.active = false);
                  }).start();
                };
                for (_i = 0; _i < _this2._node_row_left.childrenCount; _i++) _loop2(_i);
                _loop3 = function _loop3(_i2) {
                  var node = _this2._node_row_right.children[_i2];
                  node.active = true;
                  node.x = 335;
                  "par" === node.name && node.getComponent(cc.ParticleSystem).resetSystem();
                  cc.tween(node).to(awaitT5, {
                    position: cc.v2(-335, node.y)
                  }).call(function() {
                    "par" === node.name && (node.active = false);
                  }).start();
                };
                for (_i2 = 0; _i2 < _this2._node_row_right.childrenCount; _i2++) _loop3(_i2);
                cc.tween(_this2._par_left).to(awaitT5, {
                  position: cc.v2(-335, 460)
                }).start();
                cc.tween(_this2._par_right).to(awaitT5, {
                  position: cc.v2(335, 460)
                }).start();
                _context2.next = 53;
                return _this2.awaitTime(awaitT5);

               case 53:
                awaitT6 = .7;
                cc.tween(_this2._par_left).to(awaitT6, {
                  position: cc.v2(0, 460)
                }).call(function() {
                  _this2._par_left.active = false;
                }).start();
                cc.tween(_this2._par_right).to(awaitT6, {
                  position: cc.v2(0, 460)
                }).call(function() {
                  _this2._par_right.active = false;
                }).start();
                _context2.next = 58;
                return _this2.awaitTime(awaitT6);

               case 58:
                awaitT7 = .5;
                _this2._node_tit.active = true;
                _this2._node_tit.setScale(0);
                Global.SlotsSoundMgr.playEffect("bonus_respin_board");
                cc.tween(_this2._node_tit).to(awaitT7, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this2._curTimes = 3;
                _this2.setTitleNum(_this2._curTimes);
                _this2._bonus_bg.active = true;
                _this2._node_reels.active = true;
                _this2.initAllSymbol(true);
                _context2.next = 70;
                return _this2.awaitTime(.5);

               case 70:
                bonusUnlockList = cc.vv.gameData.getGameCfg().bonusUnlockList;
                _i3 = 0;

               case 72:
                if (!(_i3 < _this2._shelterList.length)) {
                  _context2.next = 82;
                  break;
                }
                if (!(_this2._curUnlockNum < bonusUnlockList[_i3])) {
                  _context2.next = 79;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("reel_lock");
                _this2._shelterList[_i3].active = true;
                cc.find("spr_lock/lbl_num", _this2._shelterList[_i3]).getComponent(cc.Label).string = bonusUnlockList[_i3] - _this2._curUnlockNum;
                _context2.next = 79;
                return _this2.awaitTime(.3);

               case 79:
                _i3++;
                _context2.next = 72;
                break;

               case 82:
                awaitT9 = 1;
                info = cc.vv.gameData.GetBonusInfo();
                Global.SlotsSoundMgr.playEffect("bonus_coin_land");
                for (key in info) {
                  idx = Number(key.substring("idx_".length));
                  idx += 20;
                  col = _this2.getColByIdx(idx);
                  row = _this2.getRowByIdx(idx);
                  symscp = _this2.cloneSymToTop(row, col);
                  symscp.node.active = true;
                  symscp.playBonusWin(true);
                  symscp.playBonusAnim();
                }
                _context2.next = 88;
                return _this2.awaitTime(awaitT9);

               case 88:
                _context2.next = 90;
                return cc.vv.gameData.GetPopupScript().showBonusPress();

               case 90:
                cc.vv.gameData.SetIsBonusGame(true);
                _this2.sendNextRound();
                sucess();

               case 93:
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
              Global.SlotsSoundMgr.playBgm("bonus_bgm");
              _this3.showEnterState();
              _context3.next = 5;
              return _this3.awaitTime(2);

             case 5:
              cc.vv.gameData.SetIsBonusGame(true);
              _this3.sendNextRound();

             case 7:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showEnterState: function showEnterState() {
        this._normal_slots.active = false;
        this._bonus_slots.active = true;
        this._spr_left.position = cc.v2(this._spr_left.x, 0);
        this._spr_right.position = cc.v2(this._spr_right.x, 0);
        this._spr_up.active = true;
        this._spr_up.opacity = 255;
        this.lockJackpot(this._bonusPoolList);
        for (var i = 0; i < this._node_col.childrenCount; i++) if ("par" === this._node_col.children[i].name) this._node_col.children[i].active = false; else {
          this._node_col.children[i].active = true;
          this._node_col.children[i].position = cc.v2(this._node_col.children[i].x, 375);
        }
        for (var _i4 = 0; _i4 < this._node_row_left.childrenCount; _i4++) if ("par" === this._node_row_left.children[_i4].name) this._node_row_left.children[_i4].active = false; else {
          this._node_row_left.children[_i4].active = true;
          this._node_row_left.children[_i4].position = cc.v2(329, this._node_row_left.children[_i4].y);
        }
        for (var _i5 = 0; _i5 < this._node_row_right.childrenCount; _i5++) if ("par" === this._node_row_right.children[_i5].name) this._node_row_right.children[_i5].active = false; else {
          this._node_row_right.children[_i5].active = true;
          this._node_row_right.children[_i5].position = cc.v2(-329, this._node_row_right.children[_i5].y);
        }
        this._node_tit.active = true;
        this._node_tit.setScale(1);
        this._curTimes = cc.vv.gameData.GetBonusRestNum();
        this.setTitleNum(this._curTimes);
        this._bonus_bg.active = true;
        this._node_reels.active = true;
        this.initAllSymbol(false);
        var bonusUnlockList = cc.vv.gameData.getGameCfg().bonusUnlockList;
        for (var _i6 = 0; _i6 < this._shelterList.length; _i6++) if (this._curUnlockNum < bonusUnlockList[_i6]) {
          this._shelterList[_i6].active = true;
          cc.find("spr_lock/lbl_num", this._shelterList[_i6]).getComponent(cc.Label).string = bonusUnlockList[_i6] - this._curUnlockNum;
        } else this._shelterList[_i6].active = false;
        var info = cc.vv.gameData.GetBonusInfo();
        for (var key in info) {
          var idx = Number(key.substring("idx_".length));
          var col = this.getColByIdx(idx);
          var row = this.getRowByIdx(idx);
          var symscp = this.cloneSymToTop(row, col);
          symscp.node.active = true;
          symscp.playBonusWin(true);
          symscp.playBonusAnim();
        }
      },
      exitBonusGame: function exitBonusGame() {
        this.initBonusUI();
        cc.vv.gameData.SetIsBonusGame(false);
        this._gemTopNode.destroyAllChildren();
      },
      initPoolList: function initPoolList() {
        for (var i = 0; i < this._bonusPoolList.length; i++) {
          var pool = cc.vv.gameData.GetBonusPool();
          cc.find("lbl_num", this._bonusPoolList[i]).getComponent(cc.Label).string = Global.FormatNumToComma(pool[i]);
        }
      },
      setTitleNum: function setTitleNum(num) {
        var lbl_remain = cc.find("lbl_remain", this._node_tit);
        if (num > 0) {
          lbl_remain.active = true;
          lbl_remain.getComponent(cc.Label).string = num;
        } else lbl_remain.active = false;
        cc.find("spr_spins", this._node_tit).active = num > 1;
        cc.find("spr_spin", this._node_tit).active = 1 === num;
        cc.find("spr_last", this._node_tit).active = 0 === num;
        cc.find("spr_complete", this._node_tit).active = num < 0;
        var spine = cc.find("spine", this._node_tit);
        if (this._curTimes < num) {
          spine.active = true;
          spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        } else spine.active = false;
        this._curTimes = num;
      },
      initAllSymbol: function initAllSymbol(isChange) {
        var info = cc.vv.gameData.GetBonusInfo();
        var reelsData = this.creatReelData(info, isChange);
        this._curUnlockNum = 0;
        for (var i = 0; i < this._col * this._row; i++) {
          var symbol = this.GetSymbolByIdx(i + 1);
          if (14 === reelsData[i].sid) {
            var cfg = cc.vv.gameData.getGameCfg();
            var randIdx = Global.random(1, cfg.randomSymbolsFirst.length);
            reelsData[i].sid = cfg.randomSymbolsFirst[randIdx - 1];
          } else reelsData[i].data && reelsData[i].data.unlock && (this._curUnlockNum += 1);
          symbol.ShowById(reelsData[i].sid, reelsData[i].data);
        }
      },
      cloneSymToTop: function cloneSymToTop(nRow, nCol) {
        var cfg = cc.vv.gameData.getGameCfg();
        var symScp = cfg.scripts.Symbols;
        var showNode = cc.find(cc.js.formatStr("top_Gem_%s_%s", nRow, nCol), this._gemTopNode);
        if (showNode) {
          showNode.active = true;
          return showNode.getComponent(symScp);
        }
        var reel = this._reels[nCol];
        var symbol = reel.GetSymbolByRow(nRow);
        if (symbol) {
          var wordPos = symbol.node.convertToWorldSpaceAR(cc.v2(0));
          var newNode = cc.instantiate(symbol.node);
          newNode.parent = this._gemTopNode;
          newNode.name = cc.js.formatStr("top_Gem_%s_%s", nRow, nCol);
          newNode.position = this._topAniNode.convertToNodeSpaceAR(wordPos);
          return newNode.getComponent(symScp);
        }
      },
      getSymbolTopAni: function getSymbolTopAni(nRow, nCol) {
        var cfg = cc.vv.gameData.getGameCfg();
        var symScp = cfg.scripts.Symbols;
        var showNode = cc.find(cc.js.formatStr("top_Gem_%s_%s", nRow, nCol), this._gemTopNode);
        if (showNode) {
          showNode.active = true;
          return showNode.getComponent(symScp);
        }
        return null;
      },
      creatReelData: function creatReelData(info, isChange) {
        var reelData = [];
        for (var i = 0; i < this._col * this._row; i++) {
          var _info = {};
          _info.sid = 14;
          _info.data = {};
          reelData.push(_info);
        }
        for (var key in info) {
          var idx = Number(key.substring("idx_".length));
          isChange && (idx += 20);
          reelData[idx - 1].sid = 4;
          reelData[idx - 1].data = info[key];
        }
        return reelData;
      },
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._topScript.StartMove();
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._curTimes -= 1;
        this.setTitleNum(this._curTimes);
        Global.SlotsSoundMgr.playEffect("bonus_remaining");
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
            if (14 === res.sid) {
              var cfg = cc.vv.gameData.getGameCfg();
              var randIdx = Global.random(1, cfg.randomSymbolsFirst.length);
              res.sid = cfg.randomSymbolsFirst[randIdx - 1];
            }
            var infoData = cc.vv.gameData.GetBonusInfo();
            for (var key in infoData) {
              var idx = Number(key.substring("idx_".length));
              idx === i + 1 && (res.data = infoData[key]);
            }
            reelResults[col] || (reelResults[col] = []);
            reelResults[col].unshift(res);
          }
        }
        for (var _i7 = 0; _i7 < this._reels.length; _i7++) {
          var item = this._reels[_i7];
          var reelRes = reelResults[_i7];
          item.SetResult(reelRes);
        }
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd(colIdx) {
        for (var row = 0; row < this._row; row++) {
          var syc = this.getSymbolTopAni(row, colIdx);
          if (syc) ; else {
            var symScp = this._reels[colIdx].GetSymbolByRow(row);
            if (this._cfg.gemIdList.includes(symScp.GetShowId())) {
              4 === symScp.GetShowId() ? Global.SlotsSoundMgr.playEffect("bonus_coin_land") : Global.SlotsSoundMgr.playEffect("bonus_coin_effect");
              var symscp = this.cloneSymToTop(row, colIdx);
              symscp.node.active = true;
              symscp.playBonusWin(true);
              symscp.playBonusAnim();
              symscp.GetData() && symscp.GetData().unlock && (this._curUnlockNum += 1);
            }
          }
        }
        this._bStopRightnow || this.hideShelter(colIdx);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var restNum;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              restNum = cc.vv.gameData.GetBonusRestNum();
              _this4.setTitleNum(restNum);
              3 === restNum && Global.SlotsSoundMgr.playEffect("bonus_remainingReset");
              _context4.next = 5;
              return _this4.hideShelter();

             case 5:
              if (!(0 === restNum)) {
                _context4.next = 19;
                break;
              }
              _context4.next = 8;
              return _this4.playCompleteAnim();

             case 8:
              cc.vv.gameData.GetPopupScript().playBonusQpAnim();
              _context4.next = 11;
              return _this4.awaitTime(1);

             case 11:
              _this4.exitBonusGame();
              _this4._prizePool.active = true;
              _context4.next = 15;
              return _this4.awaitTime(1);

             case 15:
              _this4._exitCallBack && _this4._exitCallBack();
              cc.vv.gameData.GetSlotsScript().playGameBgm();
              _context4.next = 22;
              break;

             case 19:
              _context4.next = 21;
              return _this4.awaitTime(1);

             case 21:
              _this4.sendNextRound();

             case 22:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      hideShelter: function hideShelter(colIdx) {
        var _this5 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var bonusUnlockList, i;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                bonusUnlockList = cc.vv.gameData.getGameCfg().bonusUnlockList;
                for (i = _this5._shelterList.length - 1; i >= 0; i--) _this5._curUnlockNum >= bonusUnlockList[i] ? _this5._shelterList[i].active && function() {
                  Global.SlotsSoundMgr.playEffect("breakup");
                  var self = _this5;
                  _this5._shelterList[i].active = false;
                  var spine = cc.find("unlock_" + i, _this5._frame_top);
                  spine.active = true;
                  spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                  spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                    spine.active = false;
                  });
                  for (var col = 0; col < _this5._col; col++) {
                    var syc = _this5.getSymbolTopAni(7 - i, col);
                    if (syc && syc.GetData() && !syc.GetData().unlock) {
                      syc.GetData().unlock = true;
                      _this5._curUnlockNum += 1;
                    }
                  }
                }() : cc.find("spr_lock/lbl_num", _this5._shelterList[i]).getComponent(cc.Label).string = bonusUnlockList[i] - _this5._curUnlockNum;
                sucess();

               case 3:
               case "end":
                return _context5.stop();
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
            var lbl, spine_kuang, spine_flyFire, spine_fire, spr_jp, allCoin, startWin, col, row, syc, data, startPos, pool, nWin;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                _this6.setTitleNum(-1);
                Global.SlotsSoundMgr.playEffect("normal_respin_end");
                _context6.next = 4;
                return _this6.awaitTime(2);

               case 4:
                _this6._node_tit.active = false;
                _this6._node_bonus_win.active = true;
                lbl = _this6._node_bonus_win.getChildByName("lbl_win");
                spine_kuang = _this6._node_bonus_win.getChildByName("spine_kuang");
                spine_flyFire = _this6._node_bonus_win.getChildByName("spine_flyFire");
                spine_fire = _this6._node_bonus_win.getChildByName("spine_fire");
                spr_jp = _this6._node_bonus_win.getChildByName("spr_jp");
                lbl.getComponent(cc.Label).string = "";
                spine_flyFire.active = false;
                spine_fire.active = false;
                spr_jp.active = false;
                _this6._prizePool.active = false;
                _this6.resetJackpot();
                allCoin = 0;
                startWin = cc.vv.gameData.GetBottomScript().getCurrentWin();
                col = 0;

               case 20:
                if (!(col < _this6._col)) {
                  _context6.next = 67;
                  break;
                }
                row = _this6._row - 1;

               case 22:
                if (!(row >= 0)) {
                  _context6.next = 64;
                  break;
                }
                syc = _this6.getSymbolTopAni(row, col);
                if (!syc) {
                  _context6.next = 61;
                  break;
                }
                data = syc.GetData();
                if (!(data && data.unlock)) {
                  _context6.next = 61;
                  break;
                }
                startPos = _this6._node_bonus_win.convertToNodeSpaceAR(syc.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                spine_flyFire.active = true;
                spine_flyFire.position = startPos;
                spine_flyFire.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                syc.node.destroy();
                cc.tween(spine_flyFire).to(.3, {
                  position: cc.v2(0, -20)
                }).start();
                _context6.next = 35;
                return _this6.awaitTime(.3);

               case 35:
                spine_fire.active = true;
                spine_fire.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                if (!("coin" === data.type)) {
                  _context6.next = 45;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("coin_respin_fly");
                allCoin += data.num;
                lbl.getComponent(cc.Label).string = Global.formatNumShort(allCoin);
                spine_kuang.active = true;
                spine_kuang.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                _context6.next = 57;
                break;

               case 45:
                if (!("pool" === data.type)) {
                  _context6.next = 57;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("coin_respin_fly_jp");
                Global.SlotsSoundMgr.playEffect("bell");
                pool = cc.vv.gameData.GetBonusPool();
                Global.doRoallNumEff(lbl, allCoin, allCoin + pool[data.num - 1], .8, null, null, 0, true);
                spr_jp.active = true;
                spr_jp.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("baseImg").getSpriteFrame("jp" + (5 - data.num) + "_1");
                allCoin += pool[data.num - 1];
                spine_kuang.active = true;
                spine_kuang.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                _context6.next = 57;
                return _this6.awaitTime(.2);

               case 57:
                cc.vv.gameData.GetBottomScript().SetWin(allCoin + startWin);
                _context6.next = 60;
                return _this6.awaitTime(.7);

               case 60:
                spr_jp.active = false;

               case 61:
                row--;
                _context6.next = 22;
                break;

               case 64:
                col++;
                _context6.next = 20;
                break;

               case 67:
                nWin = cc.vv.gameData.GetBonusWinCoin();
                _context6.next = 70;
                return new Promise(function(sucess, failed) {
                  cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nWin, true, sucess);
                });

               case 70:
                sucess();

               case 71:
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
      sendNextRound: function sendNextRound() {
        cc.vv.gameData.GetBottomScript().SendSpinReq();
      },
      GetStopTime: function GetStopTime() {
        return this._cfg.auto_stop_time || 1;
      },
      SetStopTime: function SetStopTime(nVal) {
        this._stopTime = nVal;
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx * nIter;
      },
      getColByIdx: function getColByIdx(idx) {
        return (idx - 1) % this._col;
      },
      getRowByIdx: function getRowByIdx(idx) {
        return this._row - Math.floor((idx - 1) / this._col) - 1;
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = this._row - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      GetLastStopReelIdx: function GetLastStopReelIdx() {
        return this.moveReelLastIdx;
      },
      update: function update(dt) {
        if (this._stopTime > 0) {
          this._stopTime = this._stopTime - dt;
          if (this._stopTime <= 0) {
            this._bottomScript.ShowBtnsByState("moveing_2");
            for (var i = 0; i < this._reels.length; i++) {
              var item = this._reels[i];
              var reelStopInterv = this.GetReelStopInter(i);
              item.StopMove(reelStopInterv);
            }
          }
        }
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
        } ]);
      },
      resetJackpot: function resetJackpot() {
        var prizepool = cc.find("Canvas/safe_node/LMSlots_PrizePool_1").getComponent("LMSlots_PrizePool_Base");
        prizepool.ResumePausePool();
      },
      awaitTime: function awaitTime(time) {
        var _this7 = this;
        return new Promise(function(sucess, failed) {
          _this7.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PauseUI_Base: void 0
  } ],
  LegendOfJoanOfArc_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af712CU8EVNf7gEwWfo8ta0", "LegendOfJoanOfArc_BonusReel");
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
      extends: require("LMSlots_PauseUI_Base"),
      properties: {
        _maskList: [],
        _holderData: []
      },
      start: function start() {},
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
          this._maskList.push(mask);
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
            scp.SetSymbolReelIdx(this._reelIdx);
            scp.setBonusIndex(index);
            scp.setSymType("bonus");
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
                symbol.node.active = true;
                symbol.StartMove();
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
        if (!this._bMoving) return;
        this._bStoping = true;
        this._stopTime = delayTime;
      },
      StopMoveRightNow: function StopMoveRightNow() {
        this._stopRightNow = true;
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        var slots = cc.vv.gameData.GetBonusScript();
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      SetResult: function SetResult(val) {
        this._result = val;
      },
      UpdatePosition: function UpdatePosition(dt) {
        this._stopTime = this._stopTime - dt;
        if (this._stopTime <= 0 && this._bStoping && this._result && this._stopRightNow) {
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
              var data = null;
              if (this._stopTime <= 0 && this._bStoping && this._result) if (this._fillCount < this._holderCount) {
                var item = this._result.shift();
                sid = item.sid;
                data = item.data;
                this._fillCount++;
              } else this._bMoving = false;
              var symbol = info.symbols.shift();
              sid > 0 ? symbol.ShowById(sid, data) : symbol.ShowRandomSymbol();
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
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {},
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.GetBonusScript();
        slots.OnReelBounsActionEnd(this._reelIdx);
        this.OnReelSpinEnd();
      },
      OnReelBounsAction: function OnReelBounsAction() {
        var cfg = cc.vv.gameData.getGameCfg();
        var distance = cfg.bounceInfo ? cfg.bounceInfo.distance : 30;
        var time = cfg.bounceInfo ? cfg.bounceInfo.time : .3;
        var _iterator5 = _createForOfIteratorHelper(this._holderData), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var info = _step5.value;
            cc.tween(info.node).to(distance / this._speed, {
              position: cc.v2(info.node.x, info.OrigPosY - distance)
            }).to(time, {
              position: cc.v2(info.node.x, info.OrigPosY)
            }).start();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        cc.tween(this.node).delay(distance / this._speed).call(this.OnReelBounsActionDeep.bind(this)).delay(time).call(this.OnReelBounsActionEnd.bind(this)).start();
      },
      update: function update(dt) {
        this._bMoving && this.UpdatePosition(dt);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PauseUI_Base: void 0
  } ],
  LegendOfJoanOfArc_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b641WQYMhDzrkifp45VFf1", "LegendOfJoanOfArc_Cfg");
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
        zIndex: 100,
        bonus_node: "s1_0",
        win_node: "w1",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "s2",
        zIndex: 300,
        bonus_node: "s2_0",
        win_node: "w2",
        trigger_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        zIndex: 300,
        bonus_node: "s3_0",
        win_node: "w3",
        trigger_ani: {
          name: "animation2",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        }
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        zIndex: 200,
        bonus_node: "s4",
        win_node: "w4",
        bonus_ani: {
          name: "animation3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 401, {
        node: "s401",
        zIndex: 200,
        bonus_node: "s401",
        win_node: "w4",
        bonus_ani: {
          name: "animation50",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 402, {
        node: "s402",
        zIndex: 200,
        bonus_node: "s402",
        win_node: "w4",
        bonus_ani: {
          name: "animation60",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 403, {
        node: "s403",
        zIndex: 200,
        bonus_node: "s403",
        win_node: "w4",
        bonus_ani: {
          name: "animation72",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 404, {
        node: "s404",
        zIndex: 200,
        bonus_node: "s404",
        win_node: "w4",
        bonus_ani: {
          name: "animation74",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        zIndex: 100,
        bonus_node: "s5_0",
        win_node: "w5",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        zIndex: 100,
        bonus_node: "s6_0",
        win_node: "w6",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        zIndex: 100,
        bonus_node: "s7_0",
        win_node: "w7",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        zIndex: 100,
        bonus_node: "s8_0",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        zIndex: 100,
        bonus_node: "s9_0",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        zIndex: 100,
        bonus_node: "s10_0",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        zIndex: 100,
        bonus_node: "s11_0",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        zIndex: 100,
        bonus_node: "s12_0",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        zIndex: 100,
        bonus_node: "s13_0",
        win_node: "w13",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 14, {
        node: "s0",
        win_node: "",
        win_ani: ""
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "LegendOfJoanOfArc_Slots",
        Reels: "LegendOfJoanOfArc_Reels",
        Symbols: "LegendOfJoanOfArc_Symbol"
      },
      col: 5,
      row: 4,
      bonus_col: 5,
      bonus_row: 8,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 114
      },
      randomSymbolsFirst: [ 1, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      randomSymbols: [ 1, 4, 401, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      kuang: "kuang",
      autoModelDelay: 1,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      gemIdList: [ 4, 401, 402, 403, 404 ],
      bonusUnlockList: [ 20, 16, 12, 8 ],
      helpItems: [ "games/LegendOfJoanOfArc/prefab/help_node/page_1", "games/LegendOfJoanOfArc/prefab/help_node/page_2", "games/LegendOfJoanOfArc/prefab/help_node/page_3" ],
      commEffect: {
        path: "games/LegendOfJoanOfArc/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      AddAntiTime: 1.7,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "node_anti",
        path: "games/LegendOfJoanOfArc/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatterSmart_stop_1",
        antSound: "anticipation",
        antSpeed: 2200
      } ],
      normalBgm: "base_bgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  LegendOfJoanOfArc_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24b99ZzivZOeqKC4cZ8PEEo", "LegendOfJoanOfArc_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      start: function start() {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._bonusInfo = deskInfo.bonusGame.info;
        this._bonusRestNum = deskInfo.bonusGame.num;
        this._bonusPoolList = deskInfo.bonusGame.poolList;
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._bonusInfo = msg.bonusGame.info;
          this._bonusRestNum = msg.bonusGame.num;
          this._bonusPoolList = msg.bonusGame.poolList;
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
        return this._bonusInfo;
      },
      GetBonusState: function GetBonusState() {
        return this._deskInfo.bonusGame.state;
      },
      GetBonusWinCoin: function GetBonusWinCoin() {
        return this._gameInfo.bonusGame.coin;
      },
      GetBonusRestNum: function GetBonusRestNum() {
        return this._bonusRestNum;
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
  LegendOfJoanOfArc_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "feb2ensrUtPoITRwZFjPvA6", "LegendOfJoanOfArc_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_popup = this.node.addComponent("LegendOfJoanOfArc_Popup");
        script_popup.Init();
        cc.vv.gameData.SetPopupScript(script_popup);
        var script_bonus = this.node.addComponent("LegendOfJoanOfArc_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.SetBonusScript(script_bonus);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  LegendOfJoanOfArc_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1987D74WhEY5q0Bs410hlA", "LegendOfJoanOfArc_Popup");
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
        this._node_free_again = cc.find("pop_free_again", this._node_popup);
        this._node_free_end = cc.find("pop_free_end", this._node_popup);
        this._spine_triBonus = cc.find("spine_triBonus", this._node_popup);
        this._node_bonus_press = cc.find("node_bonus_press", this._node_popup);
        this._node_free_start.active = false;
        this._node_free_again.active = false;
        this._node_free_end.active = false;
        this._spine_triBonus.active = false;
        this._node_qp = cc.find("safe_node/node_qpAnim", this.node);
        this._node_qp.active = false;
        this._spine_free_qp = cc.find("shengnvzhende", this._node_qp);
        this._spine_bonus_qp = cc.find("spine_bonus_qp", this._node_qp);
        this._spine_free_qp.active = false;
        this._spine_bonus_qp.active = false;
        this._spine_character = cc.find("safe_node/spine_character", this.node);
      },
      showFirstGainFree: function showFirstGainFree() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
                  var btn_start, self, clickFunc;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      _this._node_popup.active = true;
                      _this._node_free_start.active = true;
                      Global.SlotsSoundMgr.playEffect("free_intro");
                      _this._node_free_start.setScale(0);
                      cc.tween(_this._node_free_start).to(.7, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      btn_start = _this._node_free_start.getChildByName("btn_start");
                      _context.next = 9;
                      return _this.awaitTime(.5);

                     case 9:
                      btn_start.getComponent(cc.Button).interactable = true;
                      btn_start.off("click");
                      self = _this;
                      clickFunc = function clickFunc() {
                        Global.SlotsSoundMgr.playEffect("free_dialog_collect_click");
                        btn_start.getComponent(cc.Button).interactable = false;
                        cc.tween(self._node_free_start).to(.7, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._node_popup.active = false;
                          self._node_free_start.active = false;
                          sucess();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(btn_start, clickFunc);
                      btn_start.on("click", function() {
                        btn_start.stopAllActions();
                        clickFunc();
                      });

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
      showAgainGainFree: function showAgainGainFree(times) {
        var _this2 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var lbl_num;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _this2._node_popup.active = true;
                _this2._node_free_again.active = true;
                lbl_num = _this2._node_free_again.getChildByName("lbl_num");
                lbl_num.getComponent(cc.Label).string = times;
                Global.SlotsSoundMgr.playEffect("retrigger_intro");
                _this2._node_free_again.setScale(0);
                cc.tween(_this2._node_free_again).to(.7, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context3.next = 9;
                return _this2.awaitTime(1.5);

               case 9:
                cc.tween(_this2._node_free_again).to(.7, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context3.next = 12;
                return _this2.awaitTime(.7);

               case 12:
                _this2._node_popup.active = false;
                _this2._node_free_again.active = false;
                sucess();

               case 15:
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
      showEndFree: function showEndFree(winCoin) {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
            var lbl_winCoin, btn_collect, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                _this3._node_popup.active = true;
                _this3._node_free_end.active = true;
                lbl_winCoin = cc.find("win_bg/lbl_winCoin", _this3._node_free_end);
                Global.doRoallNumEff(lbl_winCoin, 0, winCoin, 2, null, null, 0, true);
                Global.SlotsSoundMgr.playEffect("free_dialog_collect_show");
                _this3._node_free_end.setScale(0);
                cc.tween(_this3._node_free_end).to(.7, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                btn_collect = _this3._node_free_end.getChildByName("btn_collect");
                _context4.next = 12;
                return _this3.awaitTime(.5);

               case 12:
                btn_collect.getComponent(cc.Button).interactable = true;
                btn_collect.off("click");
                self = _this3;
                clickFunc = function clickFunc() {
                  Global.SlotsSoundMgr.playEffect("free_dialog_collect_click");
                  btn_collect.getComponent(cc.Button).interactable = false;
                  var delayT = 0;
                  lbl_winCoin.stopAllActions();
                  if (Global.FormatCommaNumToNum(lbl_winCoin.getComponent(cc.Label).string) < winCoin) {
                    lbl_winCoin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                    delayT = .2;
                  }
                  cc.tween(self._node_free_end).delay(delayT).to(.7, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    self._node_popup.active = false;
                    self._node_free_end.active = false;
                    sucess();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.on("click", function() {
                  btn_collect.stopAllActions();
                  clickFunc();
                });

               case 18:
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
      playFreeQpAnim: function playFreeQpAnim() {
        this._spine_character.active = false;
        var self = this;
        Global.SlotsSoundMgr.playEffect("transition1");
        this._node_qp.active = true;
        this._spine_free_qp.active = true;
        this._spine_free_qp.getComponent(sp.Skeleton).setAnimation(0, "jineng", false);
        this._spine_free_qp.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._spine_free_qp.active = false;
          self._spine_character.active = true;
          self._node_qp.active = false;
        });
      },
      playTriBonusAnim1: function playTriBonusAnim1() {
        var _this4 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var self;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playEffect("bonus_trigger");
                _this4._node_popup.active = true;
                _this4._spine_triBonus.active = true;
                self = _this4;
                _this4._spine_triBonus.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                _context5.next = 8;
                return _this4.awaitTime(2.2);

               case 8:
                Global.SlotsSoundMgr.playEffect("popup_out");
                _this4._spine_triBonus.getComponent(sp.Skeleton).setCompleteListener(function() {
                  self._node_popup.active = false;
                  self._spine_triBonus.active = false;
                  sucess();
                });

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
      playBonusQpAnim: function playBonusQpAnim() {
        var self = this;
        Global.SlotsSoundMgr.playEffect("transition2");
        this._node_qp.active = true;
        this._spine_bonus_qp.active = true;
        this._spine_bonus_qp.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this._spine_bonus_qp.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._spine_bonus_qp.active = false;
          self._node_qp.active = false;
        });
      },
      showBonusPress: function showBonusPress() {
        var _this5 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
            var spr, btn_press, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                _this5._node_popup.active = true;
                _this5._node_bonus_press.active = true;
                spr = cc.find("spr", _this5._node_bonus_press);
                btn_press = cc.find("btn_press", _this5._node_bonus_press);
                spr.setScale(0);
                Global.SlotsSoundMgr.playEffect("bonus_pressToStart");
                cc.tween(spr).to(.7, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context8.next = 9;
                return _this5.awaitTime(.5);

               case 9:
                btn_press.getComponent(cc.Button).interactable = true;
                btn_press.off("click");
                self = _this5;
                clickFunc = function() {
                  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("popup_out");
                        btn_press.getComponent(cc.Button).interactable = false;
                        cc.tween(spr).to(.7, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context6.next = 5;
                        return self.awaitTime(.7);

                       case 5:
                        self._node_bonus_press.active = false;
                        self._node_popup.active = false;
                        sucess();

                       case 8:
                       case "end":
                        return _context6.stop();
                      }
                    }, _callee6);
                  }));
                  return function clickFunc() {
                    return _ref6.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_press, clickFunc);
                btn_press.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                     case 0:
                      btn_press.stopAllActions();
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
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      awaitTime: function awaitTime(time) {
        var _this6 = this;
        return new Promise(function(sucess, failed) {
          _this6.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  LegendOfJoanOfArc_Reels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8ecbJkL3ZKv4b7wcWA04pn", "LegendOfJoanOfArc_Reels");
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
  LegendOfJoanOfArc_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4bc48Z6+69Llr4RLQ0/DZnc", "LegendOfJoanOfArc_Slots");
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
      },
      RegisterEvent: function RegisterEvent() {
        this._super();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this.onEventTotalbetUpdated();
              if (!cc.vv.gameData.GetBonusState()) {
                _context2.next = 4;
                break;
              }
              _context2.next = 4;
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

             case 4:
              if (!(cc.vv.gameData.GetTotalFree() > 0)) {
                _context2.next = 11;
                break;
              }
              _this.ShowGameview(true);
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context2.next = 9;
                break;
              }
              _context2.next = 9;
              return _this.CheckExitFreeGame();

             case 9:
              _context2.next = 12;
              break;

             case 11:
              _this.ShowGameview(false);

             case 12:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 14:
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
            var infoData = cc.vv.gameData.GetBonusInfo();
            for (var key in infoData) {
              var idx = Number(key.substring("idx_".length));
              idx === i + 1 && (res.data = infoData[key]);
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
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this2 = this;
        if (cc.vv.gameData.IsBonusGame()) return;
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
            for (var _i2 = 0; _i2 < reelResults.length; _i2++) {
              var item = _this2._reels[_i2];
              var reelRes = reelResults[_i2];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i2] > 0 && (stateInfo.isAnt = true);
              stateInfo.symbolStopSound = 2 === _i2 ? "scatterSmart_stop_2" : 3 === _i2 ? "scatterSmart_stop_3" : info.symbolStopSound;
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += reelCountOfID;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              reelCountOfID > 0 && remainingCount >= triggerCount && (stateInfo.isStop = true);
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
      StartMove: function StartMove() {
        if (cc.vv.gameData.IsBonusGame()) cc.vv.gameData.GetBonusScript().StartMove(); else {
          this._super();
          Global.SlotsSoundMgr.playNormalBgm();
        }
      },
      StopMove: function StopMove() {
        cc.vv.gameData.IsBonusGame() ? cc.vv.gameData.GetBonusScript().StopMove() : this._super();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {
        this._super(colIdx);
        for (var row = 0; row < this._row; row++) {
          var syc = this._reels[colIdx].GetSymbolByRow(row);
          if (this._cfg.gemIdList.includes(syc.GetShowId())) {
            Global.SlotsSoundMgr.playEffect("symbol_coin_land");
            cc.tween(syc.node).to(.2, {
              scale: 1.2
            }, {
              easing: "backOut"
            }).to(.05, {
              scale: 1
            }).start();
          }
          3 === syc.GetShowId() && Global.SlotsSoundMgr.playEffect("retrigger_land");
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var nWin, nTotal, freeInfo;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetFreeWinCoin());
              _context3.next = 6;
              return new Promise(function(sucess, failed) {
                _this3.ShowBottomWin(nWin, nTotal, true, sucess);
              });

             case 6:
              freeInfo = _this3._gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0)) {
                _context3.next = 10;
                break;
              }
              _context3.next = 10;
              return _this3.CheckEnterFreeGame();

             case 10:
              if (!(_this3._gameInfo.bonusGame && _this3._gameInfo.bonusGame.start)) {
                _context3.next = 13;
                break;
              }
              _context3.next = 13;
              return _this3.CheckTriggerBonusGame();

             case 13:
              if (!(_this3._gameInfo.allFreeCnt > 0 && 0 == _this3._gameInfo.freeCnt)) {
                _context3.next = 16;
                break;
              }
              _context3.next = 16;
              return _this3.CheckExitFreeGame();

             case 16:
              _this3.CanDoNextRound();

             case 17:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
                  var _iterator2, _step2, id, symbol, times;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("bell");
                      _iterator2 = _createForOfIteratorHelper(_this4._gameInfo.freeResult.freeInfo.idxs);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          id = _step2.value;
                          symbol = _this4.GetSymbolByIdx(id);
                          symbol && symbol.playTriggerAnimation();
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context4.next = 5;
                      return _this4.awaitTime(1.5);

                     case 5:
                      if (!(_this4._gameInfo.freeCnt === _this4._gameInfo.allFreeCnt)) {
                        _context4.next = 15;
                        break;
                      }
                      _this4.Backup();
                      _context4.next = 9;
                      return cc.vv.gameData.GetPopupScript().showFirstGainFree();

                     case 9:
                      cc.vv.gameData.GetPopupScript().playFreeQpAnim();
                      _context4.next = 12;
                      return _this4.awaitTime(1.3);

                     case 12:
                      _this4.ShowGameview(true);
                      _context4.next = 20;
                      break;

                     case 15:
                      times = _this4._gameInfo.freeResult.freeInfo.freeCnt;
                      _context4.next = 18;
                      return cc.vv.gameData.GetPopupScript().showAgainGainFree(times);

                     case 18:
                      _context4.next = 20;
                      return _this4.awaitTime(.8);

                     case 20:
                      sucess();

                     case 21:
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
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  var nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      _context6.next = 2;
                      return cc.vv.gameData.GetPopupScript().showEndFree(cc.vv.gameData.GetFreeWinCoin());

                     case 2:
                      cc.vv.gameData.GetPopupScript().playFreeQpAnim();
                      _context6.next = 5;
                      return _this5.awaitTime(1.3);

                     case 5:
                      _this5.Resume();
                      _this5.ShowGameview(false);
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playNormalBgm();
                      _context6.next = 11;
                      return _this5.awaitTime(.5);

                     case 11:
                      nWin = cc.vv.gameData.GetFreeWinCoin();
                      nTotal = nWin;
                      _context6.next = 15;
                      return new Promise(function(sucess, failed) {
                        _this5.ShowBottomWin(nWin, nTotal, true, sucess);
                      });

                     case 15:
                      sucess();

                     case 16:
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
      CheckTriggerBonusGame: function CheckTriggerBonusGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("bell");
                      _context8.next = 3;
                      return _this6.awaitTime(1);

                     case 3:
                      _context8.next = 5;
                      return cc.vv.gameData.GetPopupScript().playTriBonusAnim1();

                     case 5:
                      cc.vv.gameData.GetPopupScript().playBonusQpAnim();
                      _context8.next = 8;
                      return _this6.awaitTime(.5);

                     case 8:
                      cc.vv.gameData.GetBonusScript().triBonusGame(sucess);

                     case 9:
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
      playGameBgm: function playGameBgm() {
        if (this._isFreeGame) Global.SlotsSoundMgr.playBgm("free_bgm"); else {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playNormalBgm();
        }
      },
      ShowGameview: function ShowGameview(bFree) {
        this._isFreeGame = bFree;
        if (bFree) {
          Global.SlotsSoundMgr.playBgm("free_bgm");
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetFreeWinCoin();
          this._bottomScript.SetWin(nTotal);
        } else this._bottomScript.ShowFreeModel(false);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var node_4 = cc.find("node_4", this._node_banner);
        var node_5 = cc.find("node_5", this._node_banner);
        var spine_change = cc.find("spine_change", this._node_banner);
        var curBet = cc.vv.gameData.GetBetIdx();
        var minBet = cc.vv.gameData.GetChangeNumBet();
        if (!this._isFiveGem && curBet < minBet) {
          Global.SlotsSoundMgr.playEffect("bet_change");
          this._isFiveGem = true;
          spine_change.active = true;
          spine_change.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          node_4.active = false;
          node_5.active = true;
        } else if (this._isFiveGem && curBet >= minBet) {
          Global.SlotsSoundMgr.playEffect("bet_change");
          this._isFiveGem = false;
          spine_change.active = true;
          spine_change.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
          node_4.active = true;
          node_5.active = false;
        }
      },
      awaitTime: function awaitTime(time) {
        var _this7 = this;
        return new Promise(function(sucess, failed) {
          _this7.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  LegendOfJoanOfArc_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4852GQwJtEH4tqA8htm1W0", "LegendOfJoanOfArc_Symbol");
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
        if (4 === this._id) {
          var num = Global.random(1, 5) * cc.vv.gameData.GetTotalBet();
          this.setNum(num);
        }
      },
      ShowById: function ShowById(id, data) {
        if (4 === id && data) {
          if ("coin" === data.type) this.setNum(data.num); else if ("pool" === data.type) {
            1 === data.num ? id = 401 : 2 === data.num ? id = 402 : 3 === data.num ? id = 403 : 4 === data.num && (id = 404);
            this.setNum();
          }
        } else this.setNum();
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
      },
      StartMove: function StartMove() {
        this._super();
      },
      setNum: function setNum(num) {
        var lbl = cc.find("lbl_num", this.node);
        if (num) {
          var font = null;
          var nVal = cc.vv.gameData.GetTotalBet();
          font = num < 5 * nVal ? cc.vv.gameData.GetFontByName("theme125_zzb") : cc.vv.gameData.GetFontByName("theme125_zz");
          lbl.active = true;
          lbl.getComponent(cc.Label).font = font;
          lbl.getComponent(cc.Label).string = Global.formatNumShort(num);
        } else {
          lbl.active = false;
          lbl.getComponent(cc.Label).string = "";
        }
      },
      setBonusIndex: function setBonusIndex(index) {
        this._bonusIndex = index;
      },
      playBonusWin: function playBonusWin(bShow) {
        var node = cc.find("w4_win", this.node);
        var list = cc.vv.gameData.getGameCfg().gemIdList;
        if (bShow && list.includes(this._id)) {
          node.active = true;
          node.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        } else node.active = false;
      },
      playBonusAnim: function playBonusAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].bonus_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].bonus_ani.name) {
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].bonus_ani.name, true);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "LegendOfJoanOfArc_BonusGame", "LegendOfJoanOfArc_BonusReel", "LegendOfJoanOfArc_Cfg", "LegendOfJoanOfArc_GameData", "LegendOfJoanOfArc_Logic", "LegendOfJoanOfArc_Popup", "LegendOfJoanOfArc_Reels", "LegendOfJoanOfArc_Slots", "LegendOfJoanOfArc_Symbol" ]);