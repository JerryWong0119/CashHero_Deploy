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
  GodnessOfLove_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de7fb9XHIxOG5I+HczDuJLd", "GodnessOfLove_BonusGame");
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
        _exitCallBack: null,
        _curTimes: 3,
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
          var scp = node.addComponent("GodnessOfLove_BonusReel");
          scp.Init(i, 1, row, this._topAniNode);
          this._reels.push(scp);
        }
      },
      initBonusNode: function initBonusNode() {
        this._normal_slots = cc.find("safe_node/slots", this.node);
        this._bg_bonus = cc.find("safe_node/spr_bg_bonus", this.node);
        this._bonus_slots = cc.find("safe_node/bonus_slots", this.node);
        this._topAniNode = cc.find("top_ani", this._bonus_slots);
        this._node_reels = cc.find("reels", this._bonus_slots);
        this._reels_bg_1 = cc.find("reels_bg_1", this._bonus_slots);
        this._reels_bg_2 = cc.find("reels_bg_2", this._bonus_slots);
        this._spine_hengtiao = cc.find("spine_hengtiao", this._bonus_slots);
        this._reels_bg = cc.find("reels_bg", this._bonus_slots);
        this._node_col = cc.find("mask/node_col", this._reels_bg);
        this._node_row_left = cc.find("mask/node_row_left", this._reels_bg);
        this._node_row_right = cc.find("mask/node_row_right", this._reels_bg);
        this._frame_top = cc.find("frame_top", this._bonus_slots);
        this._node_tit = cc.find("node_tit", this._frame_top);
        this._par_left = cc.find("par_left", this._frame_top);
        this._par_right = cc.find("par_right", this._frame_top);
        this._shelterList.push(cc.find("shelter_1", this._frame_top));
        this._shelterList.push(cc.find("shelter_2", this._frame_top));
        this._shelterList.push(cc.find("shelter_3", this._frame_top));
        this._shelterList.push(cc.find("shelter_4", this._frame_top));
        this._spine_jsKuang = cc.find("spine_jsKuang", this._bonus_slots);
        this._spine_shouji = cc.find("spine_bonus_shouji", this._bonus_slots.parent);
        this._spine_js = cc.find("spine_bonus_js", this._bonus_slots.parent);
      },
      initBonusUI: function initBonusUI() {
        this._normal_slots.active = true;
        this._bg_bonus.active = false;
        this._bonus_slots.active = false;
        this._reels_bg_1.active = false;
        this._reels_bg_2.active = false;
        this._spine_hengtiao.active = false;
        this._reels_bg.active = false;
        this.setLineState(this._node_col, false);
        this.setLineState(this._node_row_left, false);
        this.setLineState(this._node_row_right, false);
        this._node_tit.active = false;
        for (var i = 0; i < this._shelterList.length; i++) this._shelterList[i].active = false;
        this._par_left.active = false;
        this._par_right.active = false;
        this._node_reels.active = false;
        this._spine_jsKuang.active = false;
        this._spine_shouji.active = false;
        this._spine_js.active = false;
      },
      setLineState: function setLineState(parentNode, bShow) {
        for (var i = 0; i < parentNode.childrenCount; i++) parentNode.children[i].active = bShow;
      },
      playBonusBgm: function playBonusBgm() {
        var isSuper = cc.vv.gameData.GetCollectSuper();
        isSuper ? Global.SlotsSoundMgr.playBgm("LoveShotSounds_Rsbg") : Global.SlotsSoundMgr.playBgm("music_LoveShot_mapGameBG");
      },
      triBonusGame: function triBonusGame(success) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var col, row;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._exitCallBack = success;
              _this.playBonusBgm();
              _this._bottomScript.SetWin();
              for (col = 0; col < _this._col; col++) for (row = 0; row < _this._row; row++) _this._reels[col].setHolderPlay(row, true);
              _context.next = 6;
              return _this.playTriAnim();

             case 6:
              cc.vv.gameData.SetIsBonusGame(true);
              _this.sendNextRound();

             case 8:
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
            var awaitT3, _loop, i, awaitT4, _loop2, _i, _loop3, _i2, awaitT5, awaitT6, total, bonusUnlockList, _i3, isSuper, unlockNum;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this2._normal_slots.active = false;
                _this2._bg_bonus.active = true;
                _this2._bonus_slots.active = true;
                _this2._reels_bg_1.active = true;
                _context2.next = 6;
                return _this2.awaitTime(1);

               case 6:
                Global.SlotsSoundMgr.playEffect("reel_raise");
                _this2._reels_bg_2.active = true;
                _this2._reels_bg_2.position = cc.v2(750, 120);
                cc.tween(_this2._reels_bg_2).to(.8, {
                  position: cc.v2(0, 120)
                }).to(.8, {
                  position: cc.v2(0, _this2._reels_bg_1.y + _this2._reels_bg_1.height)
                }, {
                  easing: "backInOut"
                }).start();
                _context2.next = 12;
                return _this2.awaitTime(1.3);

               case 12:
                cc.tween(cc.find("spr_up", _this2._reels_bg_1)).to(.3, {
                  opacity: 0
                }).start();
                cc.tween(cc.find("spr_down", _this2._reels_bg_2)).to(.3, {
                  opacity: 0
                }).start();
                _this2._spine_hengtiao.active = true;
                _this2._spine_hengtiao.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                _context2.next = 18;
                return _this2.awaitTime(.5);

               case 18:
                _this2._reels_bg.active = true;
                cc.find("spr_up", _this2._reels_bg_1).opacity = 255;
                cc.find("spr_down", _this2._reels_bg_2).opacity = 255;
                _this2._reels_bg_1.active = false;
                _this2._reels_bg_2.active = false;
                awaitT3 = 1.4;
                _loop = function _loop(i) {
                  var node = _this2._node_col.children[i];
                  node.active = true;
                  node.y = -400;
                  "par" === node.name && node.getComponent(cc.ParticleSystem).resetSystem();
                  cc.tween(node).to(awaitT3, {
                    position: cc.v2(node.x, 400)
                  }).call(function() {
                    "par" === node.name && (node.active = false);
                  }).start();
                };
                for (i = 0; i < _this2._node_col.childrenCount; i++) _loop(i);
                _this2._par_left.active = true;
                _this2._par_left.position = cc.v2(0, -400);
                _this2._par_left.getComponent(cc.ParticleSystem).resetSystem();
                _this2._par_right.active = true;
                _this2._par_right.position = cc.v2(0, -400);
                _this2._par_right.getComponent(cc.ParticleSystem).resetSystem();
                cc.tween(_this2._par_left).to(awaitT3, {
                  position: cc.v2(-333, -400)
                }).start();
                cc.tween(_this2._par_right).to(awaitT3, {
                  position: cc.v2(333, -400)
                }).start();
                _context2.next = 36;
                return _this2.awaitTime(awaitT3);

               case 36:
                awaitT4 = 1.4;
                _loop2 = function _loop2(_i) {
                  var node = _this2._node_row_left.children[_i];
                  node.active = true;
                  node.x = -333;
                  "par" === node.name && node.getComponent(cc.ParticleSystem).resetSystem();
                  cc.tween(node).to(awaitT4, {
                    position: cc.v2(333, node.y)
                  }).call(function() {
                    "par" === node.name && (node.active = false);
                  }).start();
                };
                for (_i = 0; _i < _this2._node_row_left.childrenCount; _i++) _loop2(_i);
                _loop3 = function _loop3(_i2) {
                  var node = _this2._node_row_right.children[_i2];
                  node.active = true;
                  node.x = 333;
                  "par" === node.name && node.getComponent(cc.ParticleSystem).resetSystem();
                  cc.tween(node).to(awaitT4, {
                    position: cc.v2(-333, node.y)
                  }).call(function() {
                    "par" === node.name && (node.active = false);
                  }).start();
                };
                for (_i2 = 0; _i2 < _this2._node_row_right.childrenCount; _i2++) _loop3(_i2);
                cc.tween(_this2._par_left).to(awaitT4, {
                  position: cc.v2(-333, 400)
                }).start();
                cc.tween(_this2._par_right).to(awaitT4, {
                  position: cc.v2(333, 400)
                }).start();
                _context2.next = 45;
                return _this2.awaitTime(awaitT4);

               case 45:
                awaitT5 = .7;
                cc.tween(_this2._par_left).to(awaitT5, {
                  position: cc.v2(0, 400)
                }).call(function() {
                  _this2._par_left.active = false;
                }).start();
                cc.tween(_this2._par_right).to(awaitT5, {
                  position: cc.v2(0, 400)
                }).call(function() {
                  _this2._par_right.active = false;
                }).start();
                _context2.next = 50;
                return _this2.awaitTime(awaitT5);

               case 50:
                awaitT6 = .5;
                _this2._node_tit.active = true;
                _this2._node_tit.setScale(0);
                Global.SlotsSoundMgr.playEffect("bonus_land");
                cc.tween(_this2._node_tit).to(awaitT6, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _this2._curTimes = 3;
                _this2.setTitleNum(_this2._curTimes);
                _this2._node_reels.active = true;
                _this2.initAllSymbol(true);
                _context2.next = 61;
                return _this2.awaitTime(awaitT6);

               case 61:
                total = _this2.getCurUnlockNum();
                bonusUnlockList = cc.vv.gameData.GetBonusCfg();
                _i3 = 0;

               case 64:
                if (!(_i3 < _this2._shelterList.length)) {
                  _context2.next = 74;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("lock_show");
                _this2._shelterList[_i3].active = true;
                cc.find("lbl_num", _this2._shelterList[_i3]).getComponent(cc.Label).string = bonusUnlockList[_i3];
                cc.find("spine_bao", _this2._shelterList[_i3]).active = false;
                _context2.next = 71;
                return _this2.awaitTime(.3);

               case 71:
                _i3++;
                _context2.next = 64;
                break;

               case 74:
                _context2.next = 76;
                return _this2.hideShelter();

               case 76:
                _context2.next = 78;
                return _this2.awaitTime(.3);

               case 78:
                _context2.next = 80;
                return _this2.playBounceAnim();

               case 80:
                _context2.next = 82;
                return _this2.awaitTime(1);

               case 82:
                isSuper = cc.vv.gameData.GetCollectSuper();
                unlockNum = cc.vv.gameData.GetBonusRow().after;
                _context2.next = 86;
                return cc.vv.gameData.GetPopupScript().showBonusPress(isSuper, unlockNum);

               case 86:
                sucess();

               case 87:
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
              _this3.playBonusBgm();
              _this3.lockJackpot();
              _this3.showEnterState();
              _context3.next = 6;
              return _this3.awaitTime(2);

             case 6:
              cc.vv.gameData.SetIsBonusGame(true);
              _this3.sendNextRound();

             case 8:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      showEnterState: function showEnterState() {
        this._normal_slots.active = false;
        this._bg_bonus.active = true;
        this._bonus_slots.active = true;
        for (var i = 0; i < this._node_col.childrenCount; i++) if ("par" === this._node_col.children[i].name) this._node_col.children[i].active = false; else {
          this._node_col.children[i].active = true;
          this._node_col.children[i].position = cc.v2(this._node_col.children[i].x, 400);
        }
        for (var _i4 = 0; _i4 < this._node_row_left.childrenCount; _i4++) if ("par" === this._node_row_left.children[_i4].name) this._node_row_left.children[_i4].active = false; else {
          this._node_row_left.children[_i4].active = true;
          this._node_row_left.children[_i4].position = cc.v2(333, this._node_row_left.children[_i4].y);
        }
        for (var _i5 = 0; _i5 < this._node_row_right.childrenCount; _i5++) if ("par" === this._node_row_right.children[_i5].name) this._node_row_right.children[_i5].active = false; else {
          this._node_row_right.children[_i5].active = true;
          this._node_row_right.children[_i5].position = cc.v2(-333, this._node_row_right.children[_i5].y);
        }
        this._node_tit.active = true;
        this._node_tit.setScale(1);
        this._curTimes = cc.vv.gameData.GetBonusRestNum();
        this.setTitleNum(this._curTimes);
        this._reels_bg.active = true;
        this._node_reels.active = true;
        this.initAllSymbol(false);
        var total = this.getCurUnlockNum();
        var bonusUnlockList = cc.vv.gameData.GetBonusCfg();
        for (var _i6 = 0; _i6 < this._shelterList.length; _i6++) if (total < bonusUnlockList[_i6]) {
          this._shelterList[_i6].active = true;
          cc.find("lbl_num", this._shelterList[_i6]).getComponent(cc.Label).string = bonusUnlockList[_i6] - total;
        } else this._shelterList[_i6].active = false;
      },
      exitBonusGame: function exitBonusGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var nWin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              if (cc.vv.gameData.GetCollectSuper()) {
                cc.vv.gameData.SetCollectCurNum(0);
                cc.vv.gameData.GetCollectScript().initItems();
              }
              cc.vv.gameData.GetPopupScript().playBonusQpAnim();
              _context4.next = 4;
              return _this4.awaitTime(1.5);

             case 4:
              _this4.resetJackpot();
              _this4.initBonusUI();
              cc.vv.gameData.SetIsBonusGame(false);
              _context4.next = 9;
              return _this4.awaitTime(1.5);

             case 9:
              nWin = cc.vv.gameData.GetBonusWinCoin();
              _context4.next = 12;
              return new Promise(function(sucess, failed) {
                cc.vv.gameData.GetSlotsScript().ShowBottomWin(nWin, nWin, true, sucess);
              });

             case 12:
              if (_this4._exitCallBack) {
                _this4._exitCallBack();
                _this4._exitCallBack = null;
              }
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playNormalBgm();

             case 15:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      setTitleNum: function setTitleNum(num) {
        cc.find("node_3", this._node_tit).active = 3 === num;
        cc.find("node_2", this._node_tit).active = 2 === num;
        cc.find("node_1", this._node_tit).active = 1 === num;
        cc.find("node_0", this._node_tit).active = 0 === num;
        cc.find("node_complete", this._node_tit).active = num < 0;
        var spine = cc.find("spine", this._node_tit);
        if (this._curTimes < num && 3 === num) {
          spine.active = true;
          spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        } else spine.active = false;
        num < 0 && Global.SlotsSoundMgr.playEffect("respin_end");
        this._curTimes = num;
      },
      initAllSymbol: function initAllSymbol(isTri) {
        var result = cc.vv.gameData.GetBonusResult();
        var reelData = [];
        for (var i = 0; i < this._col * this._row; i++) {
          var info = {};
          info.sid = 16;
          info.data = {};
          reelData.push(info);
        }
        if (isTri) {
          var redData = result[0].red;
          var boostData = result[0].boost;
          for (var key in redData.data) {
            var idx_k = Number(key.substring("idx_".length));
            reelData[idx_k - 1].sid = 5;
            reelData[idx_k - 1].data = redData.data[key];
          }
          for (var _i7 = 0; _i7 < boostData.idxs.length; _i7++) {
            var idx = boostData.idxs[_i7];
            reelData[idx - 1].sid = 6;
          }
        } else {
          var _redData = result[result.length - 1].red;
          var _boostData = result[result.length - 1].boost;
          for (var _key in _redData.data) {
            var _idx_k = Number(_key.substring("idx_".length));
            1 === _redData.data[_key].color ? reelData[_idx_k - 1].sid = 5 : reelData[_idx_k - 1].sid = 601;
            reelData[_idx_k - 1].data = _redData.data[_key];
          }
        }
        for (var _i8 = 0; _i8 < this._col * this._row; _i8++) {
          var symbol = this.GetSymbolByIdx(_i8 + 1);
          if (16 === reelData[_i8].sid) {
            var cfg = cc.vv.gameData.getGameCfg();
            var randIdx = Global.random(1, cfg.randomSymbolsBonus.length);
            reelData[_i8].sid = cfg.randomSymbolsBonus[randIdx - 1];
            symbol.ShowById(reelData[_i8].sid);
          } else {
            symbol.ShowById(reelData[_i8].sid, reelData[_i8].data);
            symbol.playBonusIdleAnim();
            this._reels[this.getColByIdx(_i8 + 1)].setHolderPlay(this.getRowByIdx(_i8 + 1), false);
          }
        }
      },
      playBounceAnim: function playBounceAnim() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
                  var result, spine_move, par_move, spine_move_end, i, data, traceIdxs, showIdx, startPos, j, idx, endSym, endPos, moveT, key, idx_k;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      result = cc.vv.gameData.GetBonusResult();
                      spine_move = cc.find("spine_move", _this5._bonus_slots);
                      par_move = cc.find("par_move", _this5._bonus_slots);
                      spine_move_end = cc.find("spine_move_end", _this5._bonus_slots);
                      if (!(result && result.length > 1)) {
                        _context5.next = 43;
                        break;
                      }
                      i = 1;

                     case 6:
                      if (!(i < result.length)) {
                        _context5.next = 43;
                        break;
                      }
                      _context5.next = 9;
                      return _this5.awaitTime(.4);

                     case 9:
                      data = result[i];
                      traceIdxs = data.boost.traceIdxs;
                      showIdx = data.boost.showIdx;
                      startPos = _this5._bonus_slots.convertToNodeSpaceAR(_this5.GetSymbolByIdx(showIdx).node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      spine_move.position = startPos;
                      par_move.position = startPos;
                      traceIdxs.push(showIdx);
                      j = 0;

                     case 17:
                      if (!(j < traceIdxs.length)) {
                        _context5.next = 40;
                        break;
                      }
                      idx = traceIdxs[j];
                      endSym = _this5.GetSymbolByIdx(idx);
                      endPos = _this5._bonus_slots.convertToNodeSpaceAR(endSym.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      spine_move.active = true;
                      par_move.active = true;
                      par_move.getComponent(cc.ParticleSystem).resetSystem();
                      Global.SlotsSoundMgr.playEffect("bonus_fly");
                      moveT = .3;
                      cc.tween(spine_move).to(moveT, {
                        position: endPos
                      }).call(function() {
                        spine_move.active = false;
                      }).start();
                      cc.tween(par_move).to(moveT, {
                        position: endPos
                      }).call(function() {
                        par_move.active = false;
                      }).start();
                      _context5.next = 30;
                      return _this5.awaitTime(moveT);

                     case 30:
                      spine_move_end.active = true;
                      spine_move_end.position = endPos;
                      spine_move_end.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      for (key in data.red.data) {
                        idx_k = Number(key.substring("idx_".length));
                        if (idx === idx_k) {
                          endSym.ShowById(601, data.red.data[key]);
                          endSym.playBonusIdleAnim();
                        }
                      }
                      _context5.next = 36;
                      return _this5.awaitTime(.1);

                     case 36:
                      Global.SlotsSoundMgr.stopEffectByName("bonus_fly");

                     case 37:
                      j++;
                      _context5.next = 17;
                      break;

                     case 40:
                      i++;
                      _context5.next = 6;
                      break;

                     case 43:
                      sucess();

                     case 44:
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
      StartMove: function StartMove() {
        this._bStopRightnow = null;
        this._gameInfo = null;
        this.MoveReels(this._reels);
        this._stopTime = this.GetStopTime();
        this._curTimes -= 1;
        this.setTitleNum(this._curTimes);
        Global.SlotsSoundMgr.playEffect("");
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
      SetSlotsResult: function SetSlotsResult() {
        var reelResults = [];
        var result = cc.vv.gameData.GetBonusResult();
        var reelData = [];
        for (var i = 0; i < this._col * this._row; i++) {
          var info = {};
          var cfg = cc.vv.gameData.getGameCfg();
          var randIdx = Global.random(1, cfg.randomSymbolsBonus.length);
          info.sid = cfg.randomSymbolsBonus[randIdx - 1];
          info.data = {};
          reelData.push(info);
        }
        var redData = result[0].red;
        var boostData = result[0].boost;
        for (var key in redData.data) {
          var idx_k = Number(key.substring("idx_".length));
          reelData[idx_k - 1].sid = 5;
          reelData[idx_k - 1].data = redData.data[key];
        }
        for (var _i9 = 0; _i9 < boostData.idxs.length; _i9++) {
          var idx = boostData.idxs[_i9];
          reelData[idx - 1].sid = 6;
        }
        for (var _i10 = 0; _i10 < reelData.length; _i10++) {
          var col = _i10 % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].unshift(reelData[_i10]);
        }
        for (var _i11 = 0; _i11 < this._reels.length; _i11++) {
          var item = this._reels[_i11];
          var reelRes = reelResults[_i11];
          item.SetResult(reelRes);
        }
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {
        Global.SlotsSoundMgr.playEffect("reel_stop");
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd(colIdx) {
        for (var row = 0; row < this._row; row++) {
          var isPlay = this._reels[colIdx].getHolderPlay(row);
          if (isPlay) {
            var symScp = this._reels[colIdx].GetSymbolByRow(row);
            var id = symScp.GetShowId();
            if (5 === id || 6 === id) {
              Global.SlotsSoundMgr.playEffect("bonus_land");
              symScp.playBonusStopAnim();
              this._reels[colIdx].setHolderPlay(row, false);
            }
          }
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var restNum;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              restNum = cc.vv.gameData.GetBonusRestNum();
              console.log("--1\u67e5\u770b\u51fabonus\u6e38\u620f\u5361\u4f4f11111", restNum);
              _this6.setTitleNum(restNum);
              if (!(3 === restNum)) {
                _context7.next = 6;
                break;
              }
              _context7.next = 6;
              return _this6.hideShelter();

             case 6:
              _context7.next = 8;
              return _this6.playBounceAnim();

             case 8:
              _context7.next = 10;
              return _this6.awaitTime(1);

             case 10:
              console.log("--1\u67e5\u770b\u51fabonus\u6e38\u620f\u5361\u4f4f11111", restNum);
              if (!(0 === restNum)) {
                _context7.next = 18;
                break;
              }
              console.log("--1\u67e5\u770b\u51fabonus\u6e38\u620f\u5361\u4f4f11111");
              _context7.next = 15;
              return _this6.playCompleteAnim();

             case 15:
              _this6.exitBonusGame();
              _context7.next = 19;
              break;

             case 18:
              _this6.sendNextRound();

             case 19:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      getCurUnlockNum: function getCurUnlockNum() {
        var unlockRow = cc.vv.gameData.GetBonusRow().after;
        var total = 0;
        for (var col = 0; col < this._col; col++) for (var row = 0; row < unlockRow; row++) {
          var sym = this._reels[col].GetSymbolByRow(row);
          var id = sym.GetShowId();
          5 !== id && 6 !== id && 601 !== id || (total += 1);
        }
        return total;
      },
      hideShelter: function hideShelter() {
        var _this7 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
            var bonusUnlockList, total, i, rest, _i12;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                bonusUnlockList = cc.vv.gameData.GetBonusCfg();
                total = _this7.getCurUnlockNum();
                for (i = _this7._shelterList.length - 1; i >= 0; i--) if (_this7._shelterList[i].active) {
                  rest = bonusUnlockList[i] - total;
                  cc.find("lbl_num", _this7._shelterList[i]).getComponent(cc.Label).string = Math.max(0, rest);
                  cc.find("spine_bao", _this7._shelterList[i]).active = true;
                  cc.find("spine_bao", _this7._shelterList[i]).getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                }
                _context9.next = 5;
                return _this7.awaitTime(.5);

               case 5:
                _i12 = _this7._shelterList.length - 1;

               case 6:
                if (!(_i12 >= 0)) {
                  _context9.next = 13;
                  break;
                }
                if (!(total >= bonusUnlockList[_i12])) {
                  _context9.next = 10;
                  break;
                }
                if (!_this7._shelterList[_i12].active) {
                  _context9.next = 10;
                  break;
                }
                return _context9.delegateYield(regeneratorRuntime.mark(function _callee8() {
                  var self, spine;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("reel_unlock");
                      self = _this7;
                      _this7._shelterList[_i12].active = false;
                      spine = cc.find("unlock_" + (_i12 + 1), _this7._frame_top);
                      spine.active = true;
                      spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      spine.getComponent(sp.Skeleton).setCompleteListener(function() {
                        spine.active = false;
                      });
                      _context8.next = 9;
                      return _this7.awaitTime(.5);

                     case 9:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                })(), "t0", 10);

               case 10:
                _i12--;
                _context9.next = 6;
                break;

               case 13:
                sucess();

               case 14:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x5, _x6) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      playBonusBombAnim: function playBonusBombAnim(sym) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              if (!sym) {
                _context10.next = 6;
                break;
              }
              sym.playBonusBombAnim(true);
              sym.playBonusEndAnim();
              _context10.next = 5;
              return _this8.awaitTime(.5);

             case 5:
              sym.playBonusShoujiAnim(true);

             case 6:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      playCompleteAnim: function playCompleteAnim() {
        var _this9 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(sucess, failed) {
            var allSymList, unlockRow, row, col, isPlay, sym, i, _sym, symData, winCoin, poolList, isLock, _row, _col, endNode, startPos, endPos, dPos, angle, nTotal, nWin;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
               case 0:
                console.log("--1\u67e5\u770b\u51fabonus\u6e38\u620f\u5361\u4f4f222222");
                _this9.setTitleNum(-1);
                Global.SlotsSoundMgr.playEffect("");
                _context11.next = 5;
                return _this9.awaitTime(1);

               case 5:
                _this9._node_tit.active = false;
                _this9._spine_jsKuang.active = true;
                _this9._spine_jsKuang.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
                console.log("--1\u67e5\u770b\u51fabonus\u6e38\u620f\u5361\u4f4f33333");
                Global.SlotsSoundMgr.playEffect("respin_light");
                allSymList = [];
                unlockRow = cc.vv.gameData.GetBonusRow().after;
                for (row = unlockRow - 1; row >= 0; row--) for (col = 0; col < _this9._col; col++) {
                  isPlay = _this9._reels[col].getHolderPlay(row);
                  if (!isPlay) {
                    sym = _this9._reels[col].GetSymbolByRow(row);
                    _this9.playBonusBombAnim(sym);
                    allSymList.push(sym);
                  }
                }
                _context11.next = 15;
                return _this9.awaitTime(1.3);

               case 15:
                i = 0;

               case 16:
                if (!(i < allSymList.length)) {
                  _context11.next = 57;
                  break;
                }
                _sym = allSymList[i];
                _sym.playBonusShoujiAnim(false);
                symData = _sym.GetData();
                winCoin = symData.coin;
                if (symData.pool > 0) {
                  poolList = cc.vv.gameData.GetBonusPool();
                  winCoin += poolList[symData.pool - 1];
                }
                isLock = true;
                if (!(symData.pool > 0)) {
                  _context11.next = 30;
                  break;
                }
                cc.vv.gameData.GetPoolScript().showWinJp(symData.pool, true);
                isLock = cc.vv.gameData.GetPoolScript().poolIsLock(symData.pool);
                if (isLock) {
                  _context11.next = 30;
                  break;
                }
                _context11.next = 29;
                return cc.vv.gameData.GetPopupScript().showWinJp(winCoin, symData.pool);

               case 29:
                cc.vv.gameData.GetPoolScript().showWinJp(symData.pool, false);

               case 30:
                if (!(symData.pool <= 0 || isLock)) {
                  _context11.next = 50;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("win_fly");
                _row = _sym.getSymbolIdx();
                _col = _sym.getReelIdx();
                _this9._spine_shouji.active = true;
                endNode = cc.vv.gameData.GetBottomScript().getWinLabelNor();
                startPos = _this9._spine_shouji.parent.convertToNodeSpaceAR(_sym.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                endPos = _this9._spine_shouji.parent.convertToNodeSpaceAR(endNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                dPos = cc.v2(endPos.x - startPos.x, endPos.y - startPos.y);
                angle = dPos.signAngle(cc.v2(1, 0));
                _this9._spine_shouji.position = _this9._spine_shouji.parent.convertToNodeSpaceAR(_sym.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                _this9._spine_shouji.angle = -angle * cc.macro.DEG + 90;
                _this9._spine_shouji.scaleY = Math.abs(dPos.mag()) / 750;
                _this9._spine_shouji.getComponent(sp.Skeleton).setAnimation(0, "animation1_3", false);
                _context11.next = 46;
                return _this9.awaitTime(.6);

               case 46:
                _this9._spine_js.active = true;
                _this9._spine_js.position = endPos;
                _this9._spine_js.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                symData.pool > 0 && cc.vv.gameData.GetPoolScript().showWinJp(symData.pool, false);

               case 50:
                nTotal = winCoin + _this9._bottomScript.getCurrentWin();
                _this9._bottomScript.SetWin(nTotal);
                _context11.next = 54;
                return _this9.awaitTime(.3);

               case 54:
                i++;
                _context11.next = 16;
                break;

               case 57:
                _this9._spine_jsKuang.active = false;
                nWin = cc.vv.gameData.GetBonusWinCoin();
                _context11.next = 61;
                return cc.vv.gameData.GetPopupScript().showBonusWin(nWin);

               case 61:
                console.log("--1\u67e5\u770b\u51fabonus\u6e38\u620f\u5361\u4f4f4444");
                sucess();

               case 63:
               case "end":
                return _context11.stop();
              }
            }, _callee11);
          }));
          return function(_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      },
      sendNextRound: function sendNextRound() {
        this._bottomScript.SendSpinReq();
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
      lockJackpot: function lockJackpot() {
        var poolList = cc.vv.gameData.GetBonusPool();
        cc.vv.gameData.GetPoolScript().PausePool([ {
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
        cc.vv.gameData.GetPoolScript().ResumePausePool();
      },
      awaitTime: function awaitTime(time) {
        var _this10 = this;
        return new Promise(function(sucess, failed) {
          _this10.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  GodnessOfLove_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c451+T4O5LcqT1Es60rD/D", "GodnessOfLove_BonusReel");
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
          holdInfo.isPlay = true;
          this._maskList.push(mask);
          this._holderData.push(holdInfo);
        }
        this.LoadSymbols();
      },
      setHolderPlay: function setHolderPlay(row, bPlay) {
        this._holderData[row].isPlay = bPlay;
      },
      getHolderPlay: function getHolderPlay(row) {
        return this._holderData[row].isPlay;
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
            if (info.isPlay) {
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
              if (info.isPlay) {
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
              } else if (this._stopTime <= 0 && this._bStoping && this._result) if (this._fillCount < this._holderCount) {
                this._result.shift();
                this._fillCount++;
              } else this._bMoving = false;
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
              _info.isPlay && (_info.node.y = _info.OrigPosY - this._curY);
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
        var slots = cc.vv.gameData.GetBonusScript();
        slots.OnReelBounsActionDeep(this._reelIdx);
      },
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
            info.isPlay && cc.tween(info.node).to(distance / this._speed, {
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
  }, {} ],
  GodnessOfLove_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d77a7qthPhEroB8wp7YSmPF", "GodnessOfLove_Cfg");
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
        },
        isMask: true
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
        },
        isMask: false
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        zIndex: 300,
        bonus_node: "s3_0",
        win_node: "w3",
        trigger_ani: {
          name: "animation3",
          zIndex: 300
        },
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        isMask: false
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        zIndex: 100,
        bonus_node: "",
        win_node: "w_Gem",
        stop_ani: {
          name: "animation3_1",
          zIndex: 300
        },
        await_ani: {
          name: "animation3_2",
          zIndex: 300
        },
        idle_ani: {
          name: "animation3_3",
          zIndex: 300
        },
        isMask: false
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        zIndex: 100,
        bonus_node: "s5_0",
        win_node: "w_Gem",
        stop_ani: {
          name: "animation2_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation2_2",
          zIndex: 300
        },
        idle_ani: {
          name: "animation2_5",
          zIndex: 300
        },
        end_ani: {
          name: "animation2_4",
          zIndex: 300
        },
        isMask: false
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        zIndex: 100,
        bonus_node: "s6_0",
        win_node: "w_Gem",
        stop_ani: {
          name: "animation1_1",
          zIndex: 300
        },
        trigger_ani: {
          name: "animation1_2",
          zIndex: 300
        },
        idle_ani: {
          name: "animation1_9",
          zIndex: 300
        },
        isMask: false
      }), _defineProperty(_symbol, 601, {
        node: "s6_1",
        zIndex: 100,
        bonus_node: "s6_1",
        win_node: "w_Gem",
        idle_ani: {
          name: "animation1_8",
          zIndex: 300
        },
        end_ani: {
          name: "animation1_6",
          zIndex: 300
        },
        isMask: false
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        zIndex: 100,
        bonus_node: "s7_0",
        win_node: "w7",
        win_ani: {
          name: "idle4",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        zIndex: 100,
        bonus_node: "s8_0",
        win_node: "w8",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 9, {
        node: "s9",
        zIndex: 100,
        bonus_node: "s9_0",
        win_node: "w9",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 10, {
        node: "s10",
        zIndex: 100,
        bonus_node: "s10_0",
        win_node: "w10",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 11, {
        node: "s11",
        zIndex: 100,
        bonus_node: "s11_0",
        win_node: "w11",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 12, {
        node: "s12",
        zIndex: 100,
        bonus_node: "s12_0",
        win_node: "w12",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 13, {
        node: "s13",
        zIndex: 100,
        bonus_node: "s13_0",
        win_node: "w13",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 14, {
        node: "s14",
        zIndex: 100,
        bonus_node: "s14_0",
        win_node: "w14",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 15, {
        node: "s15",
        zIndex: 100,
        bonus_node: "s15_0",
        win_node: "w15",
        win_ani: {
          name: "animation",
          zIndex: 300
        },
        isMask: true
      }), _defineProperty(_symbol, 16, {
        node: "s0",
        win_node: "",
        win_ani: ""
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "GodnessOfLove_Slots",
        Reels: "GodnessOfLove_Reels",
        Symbols: "GodnessOfLove_Symbol"
      },
      col: 5,
      row: 4,
      bonus_col: 5,
      bonus_row: 8,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 100
      },
      randomSymbols: [ 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
      randomSymbolsBonus: [ 1, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
      kuang: "kuang",
      autoModelDelay: 1,
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      helpItems: [ "games/GodnessOfLove/prefab/help_node/page_1", "games/GodnessOfLove/prefab/help_node/page_2", "games/GodnessOfLove/prefab/help_node/page_3", "games/GodnessOfLove/prefab/help_node/page_4", "games/GodnessOfLove/prefab/help_node/page_5", "games/GodnessOfLove/prefab/help_node/page_6" ],
      commEffect: {
        path: "games/GodnessOfLove/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      AddAntiTime: 2.8,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 0, 1, 1, 1, 0 ],
        antiNode: "free_anti",
        path: "games/GodnessOfLove/",
        reelStopSound: "reel_stop",
        symbolStopSound: "scatter_land",
        antSound: "free_anticipation",
        antSpeed: 2200
      }, {
        id: [ 5, 6 ],
        mini: 4,
        counts: [ 1, 1, 1, 1, 1 ],
        antiNode: "bonus_anti",
        path: "games/GodnessOfLove/",
        reelStopSound: "reel_stop",
        symbolStopSound: "bonus_land",
        antSound: "reel_anticipation",
        antSpeed: 2200
      } ],
      normalBgm: "LoveShotSounds_basebg",
      soundCfg: {
        bell: "",
        music_LoveShot_rush_CollectGame_Trigger: "",
        bonus_land: "",
        bonus_lock: "",
        bonus_trigger: "",
        bonus_unlock: "",
        jp_lock: "",
        jp_unlock: "",
        reel_stop: "",
        scatter_land: "",
        stop: "",
        win1: "",
        win1end: "",
        win2: "",
        win2end: "",
        win3: "",
        win3end: "",
        win4: "",
        win4end: "",
        bonus_fly: "",
        lock_show: "",
        reel_raise: "",
        reel_unlock: "",
        music_LoveShot_mapGameBG: "",
        respin_end: "",
        respin_light: "",
        LoveShotSounds_Rsbg: "",
        win_fly: "",
        LoveShotSounds_fsbg: "",
        spin_add: "",
        music_LoveShot_over_fs: "",
        sound_LuckyDollar_bonus_over: "",
        dialog_fg_retrigger: "",
        sound_LuckyDollar_freespin_over: "",
        sound_LuckyDollar_freespin_start: "",
        dialog_trigger_JP: "",
        popup_out: ""
      }
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  GodnessOfLove_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5ad0jXUZZIWrTkdhvmcJza", "GodnessOfLove_Collect");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _isLockState: true,
        _itemList: []
      },
      start: function start() {},
      Init: function Init() {
        this._node_collect = cc.find("safe_node/slots/node_collect", this.node);
        this._node_collect.on("click", this.onClickCollectBtn.bind(this));
        this._spine_lock = cc.find("spine_lock", this._node_collect);
        this._spine_unLock = cc.find("spine_unLock", this._node_collect);
        this._spine_full = cc.find("spine_full", this._node_collect);
        this._spine_full.active = false;
        this._spine_bomb = cc.find("layout/spine_bomb", this._node_collect);
        this._spine_bomb.active = false;
        this.initCollectState();
        this.initItems();
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onEventTotalbetUpdated, this);
      },
      initCollectState: function initCollectState() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var minBet = cc.vv.gameData.GetCollectMinBet();
        if (curBet < minBet) {
          this._isLockState = true;
          this._spine_unLock.active = false;
          this._spine_lock.active = true;
          this._spine_lock.getComponent(sp.Skeleton).setAnimation(0, "animation5", true);
        } else {
          this._isLockState = false;
          this._spine_lock.active = false;
          this._spine_unLock.active = true;
          this._spine_unLock.getComponent(sp.Skeleton).setAnimation(0, "animation6_1", true);
        }
      },
      initItems: function initItems() {
        var curItem = cc.vv.gameData.GetCollectCurNum();
        for (var i = 1; i <= 10; i++) {
          var item = cc.find("layout/item" + i, this._node_collect);
          item.active = i <= curItem;
          this._itemList.push(item);
        }
        0 === curItem && (this._spine_bomb.active = false);
      },
      addOneItem: function addOneItem() {
        var curItem = cc.vv.gameData.GetCollectCurNum();
        var max = cc.vv.gameData.GetCollectMaxNum();
        var item = cc.find("layout/item" + curItem, this._node_collect);
        if (item && !item.active) {
          item.active = true;
          this._spine_bomb.active = true;
          this._spine_bomb.position = item.position;
          var animT = 1;
          curItem === max && (animT = 2);
          this._spine_bomb.getComponent(sp.Skeleton).setAnimation(0, "animation" + animT, false);
          this._spine_bomb.getComponent(sp.Skeleton).addAnimation(0, "animation" + animT + "_1", false);
        }
      },
      onEventTotalbetUpdated: function onEventTotalbetUpdated() {
        var curBet = cc.vv.gameData.GetBetIdx();
        var minBet = cc.vv.gameData.GetCollectMinBet();
        if (!this._isLockState && curBet < minBet) {
          Global.SlotsSoundMgr.playEffect("bonus_lock");
          this._isLockState = true;
          this._spine_lock.active = true;
          this._spine_lock.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
          this._spine_lock.getComponent(sp.Skeleton).addAnimation(0, "animation5", true);
          this._spine_unLock.getComponent(sp.Skeleton).setAnimation(0, "animation6_3", false);
        } else if (this._isLockState && curBet >= minBet) {
          Global.SlotsSoundMgr.playEffect("bonus_unlock");
          this._isLockState = false;
          this._spine_lock.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
          this._spine_unLock.active = true;
          this._spine_unLock.getComponent(sp.Skeleton).setAnimation(0, "animation6_2", false);
          this._spine_unLock.getComponent(sp.Skeleton).addAnimation(0, "animation6_1", true);
        }
      },
      onClickCollectBtn: function onClickCollectBtn() {
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.isFreeGame()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (this._isLockState) {
          var minBet = cc.vv.gameData.GetCollectMinBet();
          var allMults = cc.vv.gameData.GetBetMults();
          minBet > allMults.length || cc.vv.gameData.GetBottomScript().SetBetIdx(minBet);
        }
      },
      playFullAnim: function playFullAnim(bPlay) {
        if (bPlay) {
          this._spine_full.active = true;
          this._spine_full.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
        } else this._spine_full.active = false;
      },
      setCollectState: function setCollectState(bShow) {
        this._node_collect.active = bShow;
      }
    });
    cc._RF.pop();
  }, {} ],
  GodnessOfLove_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0cdd1AJBKBPSoSQBv1br33x", "GodnessOfLove_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {},
      start: function start() {},
      init: function init(deskInfo, gameId, gameJackpot) {
        this._bonusCfg = deskInfo.bonusGame.cfg;
        this._bonusInfo = deskInfo.bonusGame.info;
        this._bonusRestNum = deskInfo.bonusGame.num;
        this._bonusPoolList = deskInfo.bonusGame.poolList;
        this._bonusResult = deskInfo.bonusGame.result;
        this._bonusRow = deskInfo.bonusGame.row;
        this._bonusWinCoin = deskInfo.bonusGame.winCoin;
        this._collectData = deskInfo.collect;
        deskInfo.collect && (this._collectCurNum = deskInfo.collect.num);
        this._freeWinCoin = deskInfo.freeWinCoin;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._bonusInfo = msg.bonusGame.info;
          this._bonusRestNum = msg.bonusGame.num;
          this._bonusPoolList = msg.bonusGame.poolList;
          this._bonusResult = msg.bonusGame.result;
          this._bonusRow = msg.bonusGame.row;
          this._bonusWinCoin = msg.bonusGame.winCoin;
          this._collectData = msg.collect;
          msg.collect && (this._collectCurNum = msg.collect.num);
          this._freeWinCoin = msg.freeWinCoin;
        }
        this._super(msg);
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
      SetBonusScript: function SetBonusScript(scp) {
        this._bonusScp = scp;
      },
      GetBonusScript: function GetBonusScript() {
        return this._bonusScp;
      },
      SetPoolScript: function SetPoolScript(scp) {
        this._poolScp = scp;
      },
      GetPoolScript: function GetPoolScript() {
        return this._poolScp;
      },
      SetIsBonusGame: function SetIsBonusGame(isBonus) {
        this._isBonusGame = isBonus;
      },
      IsBonusGame: function IsBonusGame() {
        return this._isBonusGame;
      },
      GetBonusCfg: function GetBonusCfg() {
        this._bonusCfg.sort(function(a, b) {
          return b.row - a.row;
        });
        var list = [];
        for (var i = 0; i < this._bonusCfg.length; i++) list.push(this._bonusCfg[i].num);
        return list;
      },
      GetBonusInfo: function GetBonusInfo() {
        return this._bonusInfo;
      },
      GetBonusState: function GetBonusState() {
        return this._deskInfo.bonusGame.state;
      },
      GetBonusWinCoin: function GetBonusWinCoin() {
        return this._bonusWinCoin;
      },
      GetBonusRestNum: function GetBonusRestNum() {
        return this._bonusRestNum;
      },
      GetBonusPool: function GetBonusPool() {
        return this._bonusPoolList;
      },
      GetBonusRow: function GetBonusRow() {
        return this._bonusRow;
      },
      GetBonusResult: function GetBonusResult() {
        return this._bonusResult;
      },
      GetCollectMinBet: function GetCollectMinBet() {
        return this._collectData.bet;
      },
      SetCollectCurNum: function SetCollectCurNum(num) {
        this._collectCurNum = num;
      },
      GetCollectCurNum: function GetCollectCurNum() {
        return this._collectCurNum;
      },
      GetCollectMaxNum: function GetCollectMaxNum() {
        return this._collectData.max;
      },
      GetCollectSuper: function GetCollectSuper() {
        return this._collectData["super"];
      },
      GetFreeWinCoin: function GetFreeWinCoin() {
        return this._freeWinCoin;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      SetIsFreeGame: function SetIsFreeGame(bFree) {
        this._isFreeGame = bFree;
      },
      setSymbolDark: function setSymbolDark(bDark) {
        this._symDark = bDark;
      },
      getSymbolDark: function getSymbolDark() {
        return this._symDark;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_GameData_Base: void 0
  } ],
  GodnessOfLove_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7373TA5sVB0LoOdNLkIzcC", "GodnessOfLove_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_collect = this.node.addComponent("GodnessOfLove_Collect");
        script_collect.Init();
        cc.vv.gameData.SetCollectScript(script_collect);
        var script_popup = this.node.addComponent("GodnessOfLove_Popup");
        script_popup.Init();
        cc.vv.gameData.SetPopupScript(script_popup);
        var script_bonus = this.node.addComponent("GodnessOfLove_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.SetBonusScript(script_bonus);
        var script_pool = cc.find("safe_node/bonus_slots/LMSlots_PrizePool_1", this.node).getComponent("GodnessOfLove_PrizePool");
        cc.vv.gameData.SetPoolScript(script_pool);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  GodnessOfLove_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3681lyga1OMp2JmNKtAAmP", "GodnessOfLove_Popup");
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
        var node_slots = cc.find("safe_node/slots", this.node);
        this._node_free_again = cc.find("pop_free_again", node_slots);
        this._node_free_again.active = false;
        var node_bonus = cc.find("safe_node/bonus_slots", this.node);
        this._node_bonus_press = cc.find("node_bonus_press", node_bonus);
        this._node_bonus_press.active = false;
        this._node_popup = cc.find("safe_node/node_popup", this.node);
        this._node_popup.active = false;
        this._node_free_start = cc.find("pop_free_start", this._node_popup);
        this._node_free_end = cc.find("pop_free_end", this._node_popup);
        this._node_jp_win = cc.find("pop_jp_win", this._node_popup);
        this._node_tri_bonus = cc.find("pop_tri_bonus", this._node_popup);
        this._node_bonus_end = cc.find("node_bonus_end", this._node_popup);
        this._node_free_start.active = false;
        this._node_free_end.active = false;
        this._node_jp_win.active = false;
        this._node_tri_bonus.active = false;
        this._node_bonus_end.active = false;
        this._node_qp = cc.find("safe_node/node_qpAnim", this.node);
        this._spine_bonus_qp = cc.find("spine_bonus_qp", this._node_qp);
        this._spine_bonus_qp.active = false;
      },
      showFirstGainFree: function showFirstGainFree() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sucess, failed) {
                  var spr, btn, spine, self, func;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                      Global.SlotsSoundMgr.playEffect("mapPopup");
                      _this._node_popup.active = true;
                      _this._node_free_start.active = true;
                      _this._node_free_start.setScale(1);
                      spr = cc.find("spr", _this._node_free_start);
                      btn = cc.find("btn_start", _this._node_free_start);
                      spr.setScale(0);
                      btn.setScale(0);
                      spine = cc.find("spine", _this._node_free_start);
                      spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                      spine.getComponent(sp.Skeleton).addAnimation(0, "animation1_1", true);
                      _context.next = 15;
                      return _this.awaitTime(.3);

                     case 15:
                      cc.tween(spr).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      cc.tween(btn).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context.next = 19;
                      return _this.awaitTime(.3);

                     case 19:
                      btn.getComponent(cc.Button).interactable = true;
                      btn.off("click");
                      self = _this;
                      func = function func() {
                        btn.getComponent(cc.Button).interactable = false;
                        Global.SlotsSoundMgr.playEffect("mapend");
                        cc.tween(_this._node_free_start).to(.7, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self._node_popup.active = false;
                          self._node_free_start.active = false;
                          sucess();
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(btn, func);
                      btn.on("click", function() {
                        btn.stopAllActions();
                        func();
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
      showAgainGainFree: function showAgainGainFree(times) {
        var _this2 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(sucess, failed) {
            var node_pop, lbl_num, spine;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("dialog_fg_retrigger");
                _this2._node_free_again.active = true;
                node_pop = cc.find("node_pop", _this2._node_free_again);
                node_pop.setScale(1);
                lbl_num = cc.find("lbl_num", node_pop);
                lbl_num.getComponent(cc.Label).string = times;
                lbl_num.setScale(0);
                spine = cc.find("spine", node_pop);
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                spine.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
                _context3.next = 12;
                return _this2.awaitTime(.5);

               case 12:
                cc.tween(lbl_num).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context3.next = 15;
                return _this2.awaitTime(1.5);

               case 15:
                Global.SlotsSoundMgr.playEffect("mapPopup");
                cc.tween(node_pop).to(.7, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context3.next = 19;
                return _this2.awaitTime(.7);

               case 19:
                _this2._node_free_again.active = false;
                sucess();

               case 21:
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
            var lbl_winCoin, btn, spine, self, func;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                Global.SlotsSoundMgr.playEffect("sound_LuckyDollar_bonus_over");
                _this3._node_popup.active = true;
                _this3._node_free_end.active = true;
                _this3._node_free_end.setScale(1);
                lbl_winCoin = cc.find("lbl_winCoin", _this3._node_free_end);
                Global.doRoallNumEff(lbl_winCoin, 0, winCoin, 1.5, null, null, 0, true);
                btn = cc.find("btn_collect", _this3._node_free_end);
                btn.setScale(0);
                spine = cc.find("spine", _this3._node_free_end);
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", false);
                spine.getComponent(sp.Skeleton).addAnimation(0, "animation2_1", true);
                _context4.next = 15;
                return _this3.awaitTime(.3);

               case 15:
                cc.tween(btn).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context4.next = 18;
                return _this3.awaitTime(.3);

               case 18:
                btn.getComponent(cc.Button).interactable = true;
                btn.off("click");
                self = _this3;
                func = function func() {
                  btn.getComponent(cc.Button).interactable = false;
                  lbl_winCoin.stopAllActions();
                  var delayT = 0;
                  if (Global.FormatCommaNumToNum(lbl_winCoin.getComponent(cc.Label).string) < winCoin) {
                    lbl_winCoin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                    delayT += .3;
                  }
                  Global.SlotsSoundMgr.playEffect("mapend");
                  cc.tween(_this3._node_free_end).delay(delayT).to(.7, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    self._node_popup.active = false;
                    self._node_free_end.active = false;
                    sucess();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn, func);
                btn.on("click", function() {
                  btn.stopAllActions();
                  func();
                });

               case 24:
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
      showWinJp: function showWinJp(winCoin, jp) {
        var _this4 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(sucess, failed) {
            var lbl_winCoin, btn, spine, animType, self, func;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("dialog_trigger_JP");
                _this4._node_popup.active = true;
                _this4._node_jp_win.active = true;
                _this4._node_jp_win.setScale(1);
                lbl_winCoin = cc.find("lbl_winCoin", _this4._node_jp_win);
                Global.doRoallNumEff(lbl_winCoin, 0, winCoin, 1.5, null, null, 0, true);
                btn = cc.find("btn_collect", _this4._node_jp_win);
                btn.setScale(0);
                spine = cc.find("spine", _this4._node_jp_win);
                animType = 5 - jp;
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation" + animType + "_1", false);
                spine.getComponent(sp.Skeleton).addAnimation(0, "animation" + animType + "_2", true);
                _context5.next = 14;
                return _this4.awaitTime(.3);

               case 14:
                cc.tween(btn).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(_this4._node_jp_win).delay(5).call(function() {
                  btn.off("click");
                  Global.SlotsSoundMgr.playEffect("popup_out");
                }).to(.7, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  self._node_popup.active = false;
                  self._node_jp_win.active = false;
                  sucess();
                }).start();
                _context5.next = 18;
                return _this4.awaitTime(.3);

               case 18:
                btn.getComponent(cc.Button).interactable = true;
                btn.off("click");
                self = _this4;
                func = function func() {
                  Global.SlotsSoundMgr.playEffect("popup_out");
                  btn.getComponent(cc.Button).interactable = false;
                  _this4._node_jp_win.cleanup();
                  cc.tween(_this4._node_jp_win).to(.7, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    self._node_popup.active = false;
                    self._node_jp_win.active = false;
                    sucess();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn, func);
                btn.on("click", function() {
                  btn.stopAllActions();
                  func();
                });

               case 24:
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
      playTriBonusAnim: function playTriBonusAnim(isSuper) {
        var _this5 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
            var spine_super, spine_normal, self, entry;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                _this5._node_popup.active = true;
                _this5._node_tri_bonus.active = true;
                spine_super = cc.find("spine_super", _this5._node_tri_bonus);
                spine_normal = cc.find("spine_normal", _this5._node_tri_bonus);
                spine_super.active = isSuper;
                spine_normal.active = !isSuper;
                self = _this5;
                if (!isSuper) {
                  _context6.next = 17;
                  break;
                }
                Global.SlotsSoundMgr.playEffect("sound_LuckyDollar_freespin_start");
                spine_super.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                _context6.next = 13;
                return _this5.awaitTime(3);

               case 13:
                Global.SlotsSoundMgr.playEffect("bgbgmend");
                spine_super.getComponent(sp.Skeleton).setCompleteListener(function() {
                  self._node_popup.active = false;
                  self._node_tri_bonus.active = false;
                  sucess();
                });
                _context6.next = 23;
                break;

               case 17:
                Global.SlotsSoundMgr.playEffect("music_LoveShot_over_fs");
                spine_normal.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                spine_normal.getComponent(sp.Skeleton).addAnimation(0, "animation2", false);
                entry = spine_normal.getComponent(sp.Skeleton).addAnimation(0, "animation3", false);
                spine_normal.getComponent(sp.Skeleton).setTrackStartListener(entry, function() {
                  Global.SlotsSoundMgr.playEffect("bgbgmend");
                });
                spine_normal.getComponent(sp.Skeleton).setTrackCompleteListener(entry, function() {
                  self._node_popup.active = false;
                  self._node_tri_bonus.active = false;
                  sucess();
                });

               case 23:
               case "end":
                return _context6.stop();
              }
            }, _callee6);
          }));
          return function(_x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      },
      showBonusPress: function showBonusPress(isSuper, unlockNum) {
        var _this6 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(sucess, failed) {
            var node_pop, mask, cfg, spine, btn_press, self, func;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
               case 0:
                _this6._node_bonus_press.active = true;
                node_pop = cc.find("node_pop", _this6._node_bonus_press);
                mask = cc.find("mask", _this6._node_bonus_press);
                node_pop.setScale(1);
                cfg = cc.vv.gameData.getGameCfg();
                node_pop.height = unlockNum * cfg.symbolSize.height;
                mask.height = unlockNum * cfg.symbolSize.height;
                spine = cc.find("spine", node_pop);
                if (isSuper) {
                  spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                  spine.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
                } else {
                  spine.getComponent(sp.Skeleton).setAnimation(0, "animation3", false);
                  spine.getComponent(sp.Skeleton).addAnimation(0, "animation4", true);
                }
                _context9.next = 11;
                return _this6.awaitTime(.5);

               case 11:
                btn_press = cc.find("btn_press", node_pop);
                btn_press.getComponent(cc.Button).interactable = true;
                btn_press.off("click");
                self = _this6;
                func = function() {
                  var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                       case 0:
                        btn_press.getComponent(cc.Button).interactable = false;
                        cc.tween(node_pop).to(.7, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context7.next = 4;
                        return self.awaitTime(.7);

                       case 4:
                        self._node_bonus_press.active = false;
                        sucess();

                       case 6:
                       case "end":
                        return _context7.stop();
                      }
                    }, _callee7);
                  }));
                  return function func() {
                    return _ref7.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_press, func);
                btn_press.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      btn_press.stopAllActions();
                      _context8.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                })));

               case 18:
               case "end":
                return _context9.stop();
              }
            }, _callee9);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      },
      showBonusWin: function showBonusWin(winCoin) {
        var _this7 = this;
        return new Promise(function() {
          var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
            var lbl_winCoin, btn, spine, self, func;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                Global.SlotsSoundMgr.playEffect("sound_LuckyDollar_freespin_over");
                _this7._node_popup.active = true;
                _this7._node_bonus_end.active = true;
                _this7._node_bonus_end.setScale(1);
                lbl_winCoin = cc.find("lbl_winCoin", _this7._node_bonus_end);
                Global.doRoallNumEff(lbl_winCoin, 0, winCoin, 1.5, null, null, 0, true);
                btn = cc.find("btn_collect", _this7._node_bonus_end);
                btn.setScale(0);
                spine = cc.find("spine", _this7._node_bonus_end);
                spine.getComponent(sp.Skeleton).setAnimation(0, "animation1", false);
                spine.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
                _context10.next = 15;
                return _this7.awaitTime(.3);

               case 15:
                cc.tween(btn).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context10.next = 18;
                return _this7.awaitTime(.3);

               case 18:
                btn.getComponent(cc.Button).interactable = true;
                btn.off("click");
                self = _this7;
                func = function func() {
                  Global.SlotsSoundMgr.playEffect("bgend");
                  btn.getComponent(cc.Button).interactable = false;
                  lbl_winCoin.stopAllActions();
                  var delayT = 0;
                  if (Global.FormatCommaNumToNum(lbl_winCoin.getComponent(cc.Label).string) < winCoin) {
                    lbl_winCoin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                    delayT += .3;
                  }
                  cc.tween(_this7._node_bonus_end).delay(delayT).to(.7, {
                    scale: 0
                  }, {
                    easing: "backIn"
                  }).call(function() {
                    self._node_popup.active = false;
                    self._node_bonus_end.active = false;
                    sucess();
                  }).start();
                };
                cc.vv.gameData.checkAutoPlay(btn, func);
                btn.on("click", function() {
                  btn.stopAllActions();
                  func();
                });

               case 24:
               case "end":
                return _context10.stop();
              }
            }, _callee10);
          }));
          return function(_x13, _x14) {
            return _ref9.apply(this, arguments);
          };
        }());
      },
      playBonusQpAnim: function playBonusQpAnim() {
        var self = this;
        Global.SlotsSoundMgr.playEffect("music_LoveShot_rush_CollectGame_Trigger");
        this._spine_bonus_qp.active = true;
        this._spine_bonus_qp.getComponent(sp.Skeleton).setAnimation(0, "idle2", false);
        this._spine_bonus_qp.getComponent(sp.Skeleton).setCompleteListener(function() {
          self._spine_bonus_qp.active = false;
        });
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
  }, {} ],
  GodnessOfLove_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0254cFfWuhEb5LJD3g3ijDe", "GodnessOfLove_PrizePool");
    "use strict";
    var jackpotNames = [ "MINI", "MINOR", "MAJOR", "GRAND" ];
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {},
      ShowNodeLockByNode: function ShowNodeLockByNode(node, bLock, unLockBet, poolType, bInit) {
        var targetJpNode = node;
        var spine_lock = cc.find("jpshangsuo", targetJpNode);
        if (targetJpNode) {
          this.showTipNode(bLock, poolType, bInit);
          var aniType = [ 4, 3, 2, 1 ];
          if (bLock) {
            spine_lock.active = true;
            if (bInit) spine_lock.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 2), true); else {
              Global.SlotsSoundMgr.playEffect("jp_lock");
              spine_lock.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s", aniType[poolType]), false);
              spine_lock.getComponent(sp.Skeleton).addAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 2), true);
            }
          } else if (bInit) spine_lock.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 1), false); else {
            Global.SlotsSoundMgr.playEffect("jp_unlock");
            spine_lock.getComponent(sp.Skeleton).setAnimation(0, cc.js.formatStr("animation%s_%s", aniType[poolType], 1), false);
          }
        }
      },
      showTipNode: function showTipNode(bLock, poolType, bInit) {
        for (var i = 0; i < jackpotNames.length; i++) {
          var tips = cc.find(cc.js.formatStr("prizePool_%s/tip", jackpotNames[i]), this.node);
          if (bInit || poolType !== i) {
            cc.find("spr_lock", tips).active = false;
            cc.find("spr_unlock", tips).active = false;
            tips.stopAllActions();
            tips.scale = 0;
          } else if (bLock) {
            cc.find("spr_lock", tips).active = true;
            cc.find("spr_unlock", tips).active = false;
            tips.scale = 0;
            cc.tween(tips).to(.5, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(.5).to(.5, {
              scale: 0
            }, {
              easing: "backIn"
            }).start();
          } else {
            cc.find("spr_lock", tips).active = false;
            cc.find("spr_unlock", tips).active = true;
            tips.scale = 0;
            cc.tween(tips).to(.5, {
              scale: 1
            }, {
              easing: "backOut"
            }).delay(.5).to(.5, {
              scale: 0
            }, {
              easing: "backIn"
            }).start();
          }
        }
      },
      showWinJp: function showWinJp(idx, bShow) {
        var spNode = cc.find(cc.js.formatStr("prizePool_%s/spine_win", jackpotNames[idx - 1]), this.node);
        spNode.active = bShow;
      },
      poolIsLock: function poolIsLock(idx) {
        var poolNode = cc.find(cc.js.formatStr("prizePool_%s", jackpotNames[idx - 1]), this.node);
        var isLock = poolNode.getComponent("LMSlotMachine_PrizePool").isLocked();
        return isLock;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  GodnessOfLove_Reels: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b1f5MZMlpJYIZ++gm2KRhK", "GodnessOfLove_Reels");
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
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false == bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                var node = cc.find(info.antiNode + "_" + (this._reelIdx + 1), this.node.parent);
                if (node && node.active) {
                  node.active = false;
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        } else {
          var _node = cc.find(name + "_" + (this._reelIdx + 1), this.node.parent);
          if (_node) {
            _node.active = bShow;
            _node.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  GodnessOfLove_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b4b0sRMMpIhoa107jbxL9r", "GodnessOfLove_Slots");
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
      Init: function Init(top, bottom) {
        this._node_banner = cc.find("node_banner", this.node);
        this._spine_free_shouji = cc.find("spine_free_shouji", this.node.parent);
        this._spine_js = cc.find("spine_bonus_js", this.node.parent);
        this._spine_free_shouji.active = false;
        this._spine_js.active = false;
        this._super(top, bottom);
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this._bottomScript.ShowBtnsByState("moveing_1");
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
            if (this._gameInfo.freeBonusInfo && this._gameInfo.freeBonusInfo.info) {
              var info = this._gameInfo.freeBonusInfo.info;
              for (var m = 0; m < info.length; m++) if (info[m].idx === i + 1) {
                var data = {};
                data.coin = info[m].num;
                res.data = data;
                break;
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
      StartMove: function StartMove() {
        if (cc.vv.gameData.IsBonusGame()) cc.vv.gameData.GetBonusScript().StartMove(); else {
          this._super();
          Global.SlotsSoundMgr.playNormalBgm();
          cc.vv.gameData.isFreeGame() || cc.vv.gameData.IsBonusGame() || cc.vv.gameData.setSymbolDark(true);
        }
      },
      StopMove: function StopMove() {
        cc.vv.gameData.IsBonusGame() ? cc.vv.gameData.GetBonusScript().StopMove() : this._super();
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore(colIdx) {
        this._super(colIdx);
        cc.vv.gameData.setSymbolDark(false);
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {
        this._super(colIdx);
        for (var row = 0; row < this._row; row++) {
          var syc = this._reels[colIdx].GetSymbolByRow(row);
          var id = syc.GetShowId();
          if (3 === id) {
            Global.SlotsSoundMgr.playEffect("spin_add");
            syc.playStopAnimation();
          }
          if (4 === id) {
            Global.SlotsSoundMgr.playEffect("bonus_land");
            syc.playPurpleGemStopAnim();
          }
        }
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        if (cc.vv.gameData.IsBonusGame()) return;
        this._super(colIdx);
      },
      OnSpinEnd: function OnSpinEnd() {
        this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var subCoin, freeBonusInfo, nWin, nTotal, freeInfo;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this2.ShowWinTrace();
              subCoin = 0;
              freeBonusInfo = _this2._gameInfo.freeBonusInfo;
              freeBonusInfo && freeBonusInfo.winCoin > 0 && (subCoin = freeBonusInfo.winCoin);
              nWin = cc.vv.gameData.GetGameWin() - subCoin;
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin() - subCoin);
              _context3.next = 9;
              return new Promise(function(sucess, failed) {
                _this2.ShowBottomWin(nWin, nTotal, true, sucess);
              });

             case 9:
              if (!(freeBonusInfo && freeBonusInfo.winCoin > 0)) {
                _context3.next = 12;
                break;
              }
              _context3.next = 12;
              return _this2.playPurpleWinCoin();

             case 12:
              if (!(_this2._gameInfo.bonusGame && _this2._gameInfo.bonusGame.start)) {
                _context3.next = 16;
                break;
              }
              cc.vv.gameData.GetCollectScript().addOneItem();
              _context3.next = 16;
              return _this2.CheckTriggerBonusGame();

             case 16:
              freeInfo = _this2._gameInfo.freeResult.freeInfo;
              if (!(freeInfo && freeInfo.freeCnt > 0)) {
                _context3.next = 20;
                break;
              }
              _context3.next = 20;
              return _this2.CheckEnterFreeGame();

             case 20:
              if (!(_this2._gameInfo.allFreeCnt > 0 && 0 == _this2._gameInfo.freeCnt)) {
                _context3.next = 23;
                break;
              }
              _context3.next = 23;
              return _this2.CheckExitFreeGame();

             case 23:
              _this2.CanDoNextRound();

             case 24:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playPurpleWinCoin: function playPurpleWinCoin() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              return _context5.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(sucess, failed) {
                  var info, restInfo, col, row, syc, idx, winCoin, i, symbol, endNode, startPos, endPos, dPos, angle, begin, nTotal;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      info = _this3._gameInfo.freeBonusInfo.info;
                      restInfo = Global.copy(info);
                      col = 0;

                     case 3:
                      if (!(col < _this3._col)) {
                        _context4.next = 45;
                        break;
                      }
                      row = _this3._row - 1;

                     case 5:
                      if (!(row >= 0)) {
                        _context4.next = 42;
                        break;
                      }
                      syc = _this3._reels[col].GetSymbolByRow(row);
                      idx = _this3.getIdxByRowCol(row, col);
                      winCoin = 0;
                      i = 0;

                     case 10:
                      if (!(i < restInfo.length)) {
                        _context4.next = 39;
                        break;
                      }
                      if (!(idx === restInfo[i].idx)) {
                        _context4.next = 36;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect("win_fly");
                      winCoin = restInfo[i].num;
                      syc.playPurpleGemIdleAnim();
                      _this3._spine_free_shouji.active = true;
                      symbol = _this3.GetSymbolByIdx(idx);
                      endNode = cc.vv.gameData.GetBottomScript().getWinLabelNor();
                      startPos = _this3._spine_free_shouji.parent.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      endPos = _this3._spine_free_shouji.parent.convertToNodeSpaceAR(endNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                      dPos = cc.v2(endPos.x - startPos.x, endPos.y - startPos.y);
                      angle = dPos.signAngle(cc.v2(1, 0));
                      _this3._spine_free_shouji.position = _this3._spine_free_shouji.parent.convertToNodeSpaceAR(symbol.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                      _this3._spine_free_shouji.angle = -angle * cc.macro.DEG + 90;
                      _this3._spine_free_shouji.scaleY = Math.abs(dPos.mag()) / 500;
                      _this3._spine_free_shouji.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      _context4.next = 28;
                      return _this3.awaitTime(.6);

                     case 28:
                      _this3._spine_js.active = true;
                      _this3._spine_js.position = endPos;
                      _this3._spine_js.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      begin = _this3._bottomScript.getCurrentWin();
                      nTotal = winCoin + begin;
                      _context4.next = 35;
                      return _this3._bottomScript.ShowWin(nTotal, null, begin, null, .5);

                     case 35:
                      return _context4.abrupt("break", 39);

                     case 36:
                      i++;
                      _context4.next = 10;
                      break;

                     case 39:
                      row--;
                      _context4.next = 5;
                      break;

                     case 42:
                      col++;
                      _context4.next = 3;
                      break;

                     case 45:
                      sucess();

                     case 46:
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
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(sucess, failed) {
                  var isFirst, _iterator, _step, id, symbol, times;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("bell");
                      isFirst = _this4._gameInfo.freeCnt === _this4._gameInfo.allFreeCnt;
                      _iterator = _createForOfIteratorHelper(_this4._gameInfo.freeResult.freeInfo.idxs);
                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                          id = _step.value;
                          symbol = _this4.GetSymbolByIdx(id);
                          symbol && symbol.playTriggerAnimation(isFirst);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                      _context6.next = 6;
                      return _this4.awaitTime(1.5);

                     case 6:
                      if (!isFirst) {
                        _context6.next = 18;
                        break;
                      }
                      _this4.Backup();
                      _context6.next = 10;
                      return cc.vv.gameData.GetPopupScript().showFirstGainFree();

                     case 10:
                      cc.vv.gameData.GetPopupScript().playBonusQpAnim();
                      _context6.next = 13;
                      return _this4.awaitTime(1.5);

                     case 13:
                      _this4.ShowGameview(true);
                      _context6.next = 16;
                      return _this4.awaitTime(2);

                     case 16:
                      _context6.next = 23;
                      break;

                     case 18:
                      times = _this4._gameInfo.freeResult.freeInfo.freeCnt;
                      _context6.next = 21;
                      return cc.vv.gameData.GetPopupScript().showAgainGainFree(times);

                     case 21:
                      _context6.next = 23;
                      return _this4.awaitTime(1);

                     case 23:
                      sucess();

                     case 24:
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
      CheckExitFreeGame: function CheckExitFreeGame() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(sucess, failed) {
                  var nWin, nTotal;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      _context8.next = 2;
                      return cc.vv.gameData.GetPopupScript().showEndFree(cc.vv.gameData.GetGameTotalFreeWin());

                     case 2:
                      cc.vv.gameData.GetPopupScript().playBonusQpAnim();
                      _context8.next = 5;
                      return _this5.awaitTime(1.5);

                     case 5:
                      _this5.Resume();
                      _this5.ShowGameview(false);
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playNormalBgm();
                      _context8.next = 11;
                      return _this5.awaitTime(2);

                     case 11:
                      nWin = cc.vv.gameData.GetGameTotalFreeWin();
                      nTotal = nWin;
                      _context8.next = 15;
                      return new Promise(function(sucess, failed) {
                        _this5.ShowBottomWin(nWin, nTotal, true, sucess);
                      });

                     case 15:
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
      CheckTriggerBonusGame: function CheckTriggerBonusGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(sucess, failed) {
                  var isSuper, bonusInfo, key, idx, symbol, _key, _idx, _symbol;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      isSuper = cc.vv.gameData.GetCollectSuper();
                      if (!isSuper) {
                        _context10.next = 8;
                        break;
                      }
                      _context10.next = 4;
                      return _this6.awaitTime(.5);

                     case 4:
                      cc.vv.gameData.GetCollectScript().playFullAnim(true);
                      Global.SlotsSoundMgr.playEffect("bonus_trigger");
                      _context10.next = 9;
                      break;

                     case 8:
                      Global.SlotsSoundMgr.playEffect("bell");

                     case 9:
                      bonusInfo = cc.vv.gameData.GetBonusInfo();
                      for (key in bonusInfo) {
                        idx = bonusInfo[key].idx;
                        symbol = _this6.GetSymbolByIdx(idx);
                        symbol && symbol.playTriggerAnimation(true);
                      }
                      _context10.next = 13;
                      return _this6.awaitTime(1.5);

                     case 13:
                      cc.vv.gameData.GetBonusScript().lockJackpot();
                      _context10.next = 16;
                      return cc.vv.gameData.GetPopupScript().playTriBonusAnim(isSuper);

                     case 16:
                      cc.vv.gameData.GetPopupScript().playBonusQpAnim();
                      _context10.next = 19;
                      return _this6.awaitTime(1.5);

                     case 19:
                      _context10.next = 21;
                      return cc.vv.gameData.GetBonusScript().triBonusGame(sucess);

                     case 21:
                      for (_key in bonusInfo) {
                        _idx = bonusInfo[_key].idx;
                        _symbol = _this6.GetSymbolByIdx(_idx);
                        _symbol && _symbol.ShowNormal(true);
                      }

                     case 22:
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
      getIdxByRowCol: function getIdxByRowCol(row, col) {
        var idx = (this._row - row - 1) * this._col + col + 1;
        return idx;
      },
      ShowGameview: function ShowGameview(bFree) {
        if (bFree) {
          Global.SlotsSoundMgr.playBgm("LoveShotSounds_fsbg");
          var total = cc.vv.gameData.GetTotalFree();
          var rest = cc.vv.gameData.GetFreeTime();
          this._bottomScript.ShowFreeModel(true, total - rest, total);
          var nTotal = cc.vv.gameData.GetFreeWinCoin();
          this._bottomScript.SetWin(nTotal);
          cc.vv.gameData.GetCollectScript().setCollectState(false);
        } else {
          this._bottomScript.ShowFreeModel(false);
          cc.vv.gameData.GetCollectScript().setCollectState(true);
        }
        cc.vv.gameData.SetIsFreeGame(bFree);
        this.playCharacterAnim(bFree);
        var normalBg = cc.find("Canvas/safe_node/spr_bg_normal");
        var normalFree = cc.find("Canvas/safe_node/spr_bg_free");
        if (normalFree) {
          normalBg && (normalBg.active = !bFree);
          normalFree.active = bFree;
        }
      },
      playCharacterAnim: function playCharacterAnim(isFree) {
        var node = cc.find("Canvas/safe_node/role/renwu");
        var rwSp = node.getComponent(sp.Skeleton);
        node.stopAllActions();
        rwSp.setAnimation(0, "skill", false);
        rwSp.addAnimation(0, "idle", true);
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
  GodnessOfLove_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad08aTq+eVBoYpZYEXC2xWX", "GodnessOfLove_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _type: "normal"
      },
      Init: function Init(idx, node) {
        this._super(idx, node);
        this.setMaskVisible(false);
      },
      setSymType: function setSymType(type) {
        this._type = type;
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        this._super();
        if (5 === this._id) {
          var num = Global.random(1, 5) * cc.vv.gameData.GetTotalBet();
          this.setNum(num);
        }
        cc.vv.gameData.isFreeGame() || cc.vv.gameData.IsBonusGame() || this.setMaskVisible(true);
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
        this.setNum();
        this.setPool();
        this.setNumAndJpPosition();
        if (data) {
          data.pool > 0 && this.setPool(data.pool);
          data.coin > 0 && this.setNum(data.coin);
          3 === data.type && this.setNumAndJpPosition();
        }
        this.setMaskVisible(false);
      },
      setMaskVisible: function setMaskVisible(isMask) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node && cfg.symbol[this._id].isMask) {
          var showNode = cc.find(cfg.symbol[this._id].node, this.node);
          isMask ? cc.vv.gameData.getSymbolDark() ? showNode.color = new cc.Color(80, 80, 80) : showNode.color = new cc.Color(200, 200, 200) : showNode.color = cc.Color.WHITE;
        }
      },
      getSymbolIdx: function getSymbolIdx() {
        return "bonus" === this._type ? this._bonusIndex : this._symbolIdx;
      },
      getReelIdx: function getReelIdx() {
        return this._reelIdx;
      },
      setNum: function setNum(num) {
        var lbl = cc.find("lbl", this.node);
        if (num) {
          var font = null;
          font = 5 === this._id ? cc.vv.gameData.GetFontByName("theme197_baoshizi1_0") : cc.vv.gameData.GetFontByName("theme197_baoshizi2_0");
          lbl.active = true;
          lbl.getComponent(cc.Label).font = font;
          lbl.getComponent(cc.Label).string = Global.formatNumShort(num, 0);
        } else {
          lbl.active = false;
          lbl.getComponent(cc.Label).string = "";
        }
        lbl.y = 5.5;
      },
      setPool: function setPool(jp) {
        var spr_jp = cc.find("spr_jp", this.node);
        if (jp) {
          spr_jp.active = true;
          var pic = cc.js.formatStr("theme197_s_jp%s", 5 - jp);
          var atlas = cc.vv.gameData.GetAtlasByName("symbols");
          spr_jp.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("symbols").getSpriteFrame(pic);
        } else spr_jp.active = false;
        spr_jp.position = cc.v2(0, 0);
      },
      setNumAndJpPosition: function setNumAndJpPosition() {
        var lbl = cc.find("lbl", this.node);
        var spr_jp = cc.find("spr_jp", this.node);
        if (lbl.active && spr_jp.active) {
          cc.find("spr_add", this.node).active = true;
          lbl.y = -24;
          spr_jp.position = cc.v2(0, 28);
        } else cc.find("spr_add", this.node).active = false;
      },
      setBonusIndex: function setBonusIndex(index) {
        this._bonusIndex = index;
      },
      playPurpleGemStopAnim: function playPurpleGemStopAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].stop_ani.name) {
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              "" != cfg.symbol[id].await_ani.name && nodeSp.addAnimation(0, cfg.symbol[id].await_ani.name, true);
            }
          }
        }
      },
      playPurpleGemIdleAnim: function playPurpleGemIdleAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].idle_ani.name) {
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        }
      },
      playBonusStopAnim: function playBonusStopAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].stop_ani.name) {
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].stop_ani.name, false);
              "" != cfg.symbol[id].idle_ani.name && nodeSp.addAnimation(0, cfg.symbol[id].idle_ani.name, true);
            }
          }
        }
      },
      playBonusIdleAnim: function playBonusIdleAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].idle_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].idle_ani.name) {
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].idle_ani.name, true);
          }
        }
      },
      playBonusEndAnim: function playBonusEndAnim() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].end_ani) {
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" != cfg.symbol[id].end_ani.name) {
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].end_ani.name, true);
          }
        }
      },
      playBonusBombAnim: function playBonusBombAnim(bPlay) {
        var node = cc.find("bouns_bomb", this.node);
        if (bPlay) {
          node.active = true;
          node.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        } else node.active = false;
      },
      playBonusShoujiAnim: function playBonusShoujiAnim(bPlay) {
        var node = cc.find("bouns_shouji", this.node);
        if (bPlay) {
          node.active = true;
          node.getComponent(sp.Skeleton).setAnimation(0, "animation", true);
        } else node.active = false;
      },
      playTriggerAnimation: function playTriggerAnimation(bLoop) {
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
            aniNode.zIndex = cfg.symbol[id].trigger_ani.zIndex - this._symbolIdx + 10 * this._reelIdx + 100;
            isPlay = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              bLoop = false !== bLoop || bLoop;
              nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, bLoop);
            }
          }
        }
        return isPlay;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "GodnessOfLove_BonusGame", "GodnessOfLove_BonusReel", "GodnessOfLove_Cfg", "GodnessOfLove_Collect", "GodnessOfLove_GameData", "GodnessOfLove_Logic", "GodnessOfLove_Popup", "GodnessOfLove_PrizePool", "GodnessOfLove_Reels", "GodnessOfLove_Slots", "GodnessOfLove_Symbol" ]);