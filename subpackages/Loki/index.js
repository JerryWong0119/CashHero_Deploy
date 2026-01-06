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
  Loki_BonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a20244BXcZAJ5JE/mBnU0xz", "Loki_BonusGame");
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
        _moreAward: [],
        _curCnt: 0
      },
      Init: function Init() {
        this._bonus_bg = cc.find("safe_node/spr_bg_free", this.node);
        this._bonus_bg.active = false;
        this._normal_slots = cc.find("safe_node/slots/reels", this.node);
        this._bonus_slots = cc.find("safe_node/slots/bonusGame", this.node);
        this._bonus_slots.active = false;
        this._slotsScript = this._bonus_slots.addComponent("Loki_BonusSlots");
        this._slotsScript.Init();
        this._node_remainTimes = cc.find("safe_node/slots/bonus_remainTimes", this.node);
        this._node_remainTimes.active = false;
        this._anim_reset = cc.find("anim_reset", this._node_remainTimes);
        this._anim_reset.active = false;
        this._node_count = cc.find("safe_node/bonus_cnt", this.node);
        this._node_count.active = false;
        this._moreAward = [ 12, 13, 14, 15 ];
      },
      enterBonusGame: function enterBonusGame() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                cc.vv.gameData.getCollectScript().setCollectNodeState(false);
                cc.vv.gameData.setIsBonusGame(true);
                Global.SlotsSoundMgr.playBgm("music_Atlantis_respin");
                _this._bonus_bg.active = true;
                _this._bonus_slots.active = true;
                _this._normal_slots.active = false;
                _this._bonusGame = cc.vv.gameData.getBonusGame();
                _this.lockJackpot(_this._bonusGame.jackpotValues);
                _this.initBonusSlots();
                _this.showRemainTime(_this._bonusGame.spinCnt, true);
                _this._jackpot = _this._bonusGame.jackpot;
                _this.showBonusCnt(_this._jackpot);
                _context.next = 14;
                return cc.vv.gameData.awaitTime(2);

               case 14:
                _this.reqSpine();
                _this._bonusSuccess = success;

               case 16:
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
      exitBonusGame: function exitBonusGame() {
        this._node_remainTimes.active = false;
        cc.vv.gameData.setIsBonusGame(false);
        if (this._bonusSuccess) {
          this._bonusSuccess();
          this._bonusSuccess = null;
        }
      },
      showNormalSlots: function showNormalSlots() {
        this._bonus_slots.active = false;
        this._normal_slots.active = true;
        this.copyAllSymbol();
      },
      copyAllSymbol: function copyAllSymbol() {
        for (var i = 1; i <= 15; i++) {
          var symFrom = this._slotsScript.GetSymbolByIdx(i);
          var symTo = cc.vv.gameData.GetSlotsScript().GetSymbolByIdx(i);
          symTo.ShowById(symFrom.GetShowId(), symFrom.GetData());
        }
      },
      reqSpine: function reqSpine() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var reqdata, result;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.showRemainTime(_this2._bonusGame.spinCnt - 1, false);
              _this2._slotsScript.StartMove(_this2._bonusGame.bonusItems);
              _context2.next = 4;
              return cc.vv.gameData.awaitTime(1);

             case 4:
              reqdata = {
                rtype: 1
              };
              _context2.next = 7;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 7:
              result = _context2.sent;
              if (200 === result.code && !result.spcode) {
                _this2._bonusGame = result.data.bonusGame;
                cc.vv.gameData.setBonusGame(_this2._bonusGame);
                _this2._slotsScript.setSpinResult(_this2._bonusGame);
              }

             case 9:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      GetLastStopReelIdx: function GetLastStopReelIdx() {
        return this._slotsScript.GetLastStopReelIdx();
      },
      StartMove: function StartMove() {
        this._slotsScript.StartMove(this._bonusGame.bonusItems);
      },
      StopMove: function StopMove() {
        this._slotsScript.StopMove();
      },
      OnReelReadyToStop: function OnReelReadyToStop(colIdx) {
        this._slotsScript.OnReelReadyToStop(colIdx);
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore(colIdx) {
        this._slotsScript.OnReelBounsActionBefore(colIdx);
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {
        this._slotsScript.OnReelBounsActionDeep(colIdx);
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd(colIdx) {
        this._slotsScript.OnReelBounsActionEnd(colIdx);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this3.showRemainTime(_this3._bonusGame.spinCnt, false);
              _this3.showBonusCnt(_this3._bonusGame.jackpot);
              if (!(2 == _this3._bonusGame.state)) {
                _context3.next = 14;
                break;
              }
              if (!(_this3._bonusGame.winCoin > 0)) {
                _context3.next = 9;
                break;
              }
              _context3.next = 6;
              return cc.vv.gameData.getPopupScript().showWinJp(_this3._bonusGame.winCoin, _this3._bonusGame.jackpot.currJackpotId);

             case 6:
              cc.vv.gameData.AddCoin(_this3._bonusGame.winCoin);
              _context3.next = 9;
              return new Promise(function(success, failed) {
                _this3._slotsScript.ShowBottomWin(_this3._bonusGame.winCoin, _this3._bonusGame.winCoin, true, success);
              });

             case 9:
              cc.vv.gameData.SetFreeTime(_this3._bonusGame.jackpot.currCnt);
              cc.vv.gameData.SetTotalFree(_this3._bonusGame.jackpot.currCnt);
              _this3.exitBonusGame();
              _context3.next = 17;
              break;

             case 14:
              _context3.next = 16;
              return cc.vv.gameData.awaitTime(.5);

             case 16:
              _this3.reqSpine();

             case 17:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      initBonusSlots: function initBonusSlots() {
        this._gameInfo = cc.vv.gameData.getGameInfo();
        var cards = null;
        this._gameInfo && (cards = this._gameInfo.resultCards);
        this._slotsScript.initAllSymbol(this._bonusGame.bonusItems, cards);
      },
      showRemainTime: function showRemainTime(cnt, init) {
        this._node_remainTimes.active = true;
        cc.find("lbl", this._node_remainTimes).getComponent(cc.Label).string = cnt;
        if (3 === cnt && !init) {
          this._anim_reset.active = true;
          this._anim_reset.getComponent(cc.Animation).play("spins_reset");
          Global.SlotsSoundMgr.playEffect("sound_Atlantis_bonus_add");
        }
      },
      showBonusCnt: function showBonusCnt(jackpot) {
        this._node_count.active = true;
        cc.find("lbl_cnt", this._node_count).getComponent(cc.Label).string = jackpot.currCnt;
        cc.find("lbl_more", this._node_count).getComponent(cc.Label).string = jackpot.restCnt;
        var jpName = [ "mini", "minor", "major", "grand" ];
        cc.find("spr_jp", this._node_count).getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("baseImg").getSpriteFrame(cc.js.formatStr("jp_%s_1", jpName[jackpot.nextJackpotId - 1]));
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        return this._slotsScript.GetSymbolByIdx(idx);
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
      }
    });
    cc._RF.pop();
  }, {} ],
  Loki_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71e9eNIl+9C8btyqQr5H80a", "Loki_BonusReel");
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
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
        for (var i = 0; i < this._symbols.length; i++) this._symbols[i].setType(1);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var slots = cc.vv.gameData.getBonusScript();
        var lastReelStopIdx = slots.GetLastStopReelIdx();
        this._reelIdx == lastReelStopIdx && slots.OnSpinEnd();
      },
      ReadyToStop: function ReadyToStop() {
        if (!this._bNotifyReadyStop) {
          this._bNotifyReadyStop = true;
          var slots = cc.vv.gameData.getBonusScript();
          slots.OnReelReadyToStop(this._reelIdx);
        }
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore() {
        cc.vv.gameData.getBonusScript().OnReelBounsActionBefore(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveBefore();
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep() {
        this.ShowAntiEffect(false);
        cc.vv.gameData.getBonusScript().OnReelBounsActionDeep(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveDeep();
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        var slots = cc.vv.gameData.getBonusScript();
        slots.OnReelBounsActionEnd(this._reelIdx);
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      },
      playAntiAnimation: function playAntiAnimation() {
        var isPlayAniti = false;
        if (this._cfg.reelStateInfo && this._cfg.reelStateInfo[0]) {
          var _iterator = _createForOfIteratorHelper(this._reelState), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var info = _step.value;
              if (info.isAnt && info.bonusAntiNode) {
                this.ShowAntiEffect(true, info.bonusAntiNode);
                var soundPath = info.path;
                soundPath || (soundPath = cc.vv.gameData.getGameDir());
                cc.vv.AudioManager.playEff(soundPath, info.antSound, true);
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
          if (this._cfg.reelStateInfo) {
            var _iterator2 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var info = _step2.value;
                var node = cc.find(info.bonusAntiNode, this.node);
                if (node && node.active) {
                  node.active = false;
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
          var _node = cc.find(name, this.node);
          if (_node) {
            _node.active = bShow;
            _node.getComponent(cc.Animation).play("anti_bonus");
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Loki_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82e9fx3OeRER4n3zrQQW/9c", "Loki_BonusSlots");
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
      properties: {
        _needAnti: true
      },
      Init: function Init() {
        this._topAniNode = cc.find("top_ani", this.node);
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = 15;
        this._row = 1;
        this.createReels(this._col, this._row);
        this._bottomScript.ShowBtnsByState("idle");
      },
      createReels: function createReels(col, row) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          var scp = node.addComponent("Loki_BonusReel");
          scp.Init(i, row, this._topAniNode);
          this._reels.push(scp);
        }
      },
      StartMove: function StartMove(bonusItems) {
        var _this = this;
        this._bStopRightnow = null;
        this._gameInfo = null;
        this._bonusGame = null;
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        var reels = [];
        var idxs = [];
        this._moveIdxs = [];
        bonusItems.forEach(function(item) {
          idxs.push(item.idx - 1);
        });
        this._reels.forEach(function(reel) {
          if (!idxs.includes(reel.GetReelIdx())) {
            reels.push(reel);
            _this._moveIdxs.push(reel.GetReelIdx());
          }
        });
        this.MoveReels(reels);
        this.setMoveLastIdx(this._moveIdxs);
        this._moveIdxs.sort(function(a, b) {
          return a / 5 - b / 5;
        }).sort(function(a, b) {
          return a % 5 - b % 5;
        });
        cc.log(this._moveIdxs);
        this._stopTime = this.GetStopTime();
      },
      setMoveLastIdx: function setMoveLastIdx(reelIdxs) {
        var max = reelIdxs[0];
        var reelMax = [];
        reelIdxs.forEach(function(idx) {
          (idx % 5 > max % 5 || idx % 5 == max % 5 && idx / 3 > max / 3) && (max = idx);
          reelMax[idx % 5] = reelMax[idx % 5] ? Math.max(reelMax[idx % 5], idx) : idx;
        });
        this.moveReelLastIdx = max;
        cc.log("StartMove\uff1athis.moveReelLastIdx:", this.moveReelLastIdx);
        this._reelMax = reelMax;
        cc.log(this._reelMax);
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        if (this._needAnti) {
          var _nIter = .6;
          var idx = this._moveIdxs.indexOf(reelIdx);
          var addT = 0;
          this._needAnti && (addT = cc.vv.gameData.getGameCfg().AddAntiTime || 1);
          return idx * _nIter + addT;
        }
        var nIter = this._cfg.reelStopInter || .6;
        return reelIdx % 5 * nIter;
      },
      setSpinResult: function setSpinResult(msg) {
        this._bonusGame = msg;
        var cards = [];
        var dataList = [];
        this._bonusGame.bonusItems.forEach(function(item) {
          dataList[item.idx - 1] = item;
          cards[item.idx - 1] = 3;
        });
        for (var i = 0; i < 15; i++) cards[i] || (cards[i] = this.GetSymbolByIdx(1).getRandomSymbol());
        this.SetReelStateInfo();
        this.SetSlotsResult(cards, dataList);
      },
      SetSlotsResult: function SetSlotsResult(cards, dataList) {
        var acRow = cards.length / this._col;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var row = Math.floor(i / acRow);
          var col = i % this._col;
          if (this._cfg.symbol[cards[i]]) {
            var res = {};
            res.sid = cards[i];
            res.data = dataList[i];
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
      SetReelStateInfo: function SetReelStateInfo() {
        0 == this._bonusGame.spinCnt && 1 == this._bonusGame.jackpot.restCnt ? this._needAnti = true : this._needAnti = false;
        var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var info = _step.value;
            var stateInfo = Global.copy(info);
            stateInfo.isAnt = this._needAnti;
            for (var i = 0; i < this._moveIdxs.length; i++) {
              var item = this._reels[this._moveIdxs[i]];
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        !this._bStopRightnow && this._needAnti && this._reels[this._moveIdxs[0]].playAntiAnimation(true);
      },
      OnReelBounsActionBefore: function OnReelBounsActionBefore(colIdx) {
        this.DoCheckReelAnti(colIdx);
      },
      OnReelBounsActionDeep: function OnReelBounsActionDeep(colIdx) {
        if (3 === this._reels[colIdx].GetSymbolByRow(0).GetShowId()) {
          this._reels[colIdx].GetSymbolByRow(0).playStopAnimation();
          Global.SlotsSoundMgr.playEffect("sound_Atlantis_bonus_down");
        }
        colIdx == this._reelMax[colIdx % 5] && Global.SlotsSoundMgr.playEffect("sound_Atlantis_reel_down");
      },
      DoCheckReelAnti: function DoCheckReelAnti(colIdx) {
        if (!this._bStopRightnow && this._needAnti) {
          var isPlayAnit = false;
          for (var i = 0; i < this._moveIdxs.length; i++) {
            var idx = this._moveIdxs[i];
            i == this._moveIdxs.indexOf(colIdx) + 1 && (isPlayAnit = this._reels[idx].playAntiAnimation());
            if (i > this._moveIdxs.indexOf(colIdx) && isPlayAnit) {
              var nAddSpeedTime = cc.vv.gameData.getGameCfg().AddAntiTime || 1;
              this._reels[idx].AddDelayTime(nAddSpeedTime);
            }
          }
        }
      },
      OnSpinEnd: function OnSpinEnd() {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      initAllSymbol: function initAllSymbol(items, cards) {
        var dataList = [];
        for (var i = 0; i < items.length; i++) dataList[items[i].idx - 1] = items[i];
        for (var _i2 = 0; _i2 < 15; _i2++) {
          var symbol = this.GetSymbolByIdx(_i2 + 1);
          symbol.setSymbolMask(false);
          var data = dataList[_i2];
          cards ? symbol.ShowById(cards[_i2], data) : data ? symbol.ShowById(3, data) : symbol.ShowById(symbol.getRandomSymbol(), data);
        }
      },
      CanStopSlot: function CanStopSlot() {
        return null != this._bonusGame;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Loki_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a84a1TJg49EFbjS4K8t2apl", "Loki_Cfg");
    "use strict";
    var _symbol, _cardmap;
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
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 2, {
        node: "s2"
      }), _defineProperty(_symbol, 3, {
        node: "s3",
        win_node: "w3",
        stop_ani: {
          name: "w3_stop",
          zIndex: 100
        },
        isMask: false
      }), _defineProperty(_symbol, 4, {
        node: "s4",
        win_node: "w4",
        win_ani: {
          name: "actionframe",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 5, {
        node: "s5",
        win_node: "w5",
        win_ani: {
          name: "actionframe",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 6, {
        node: "s6",
        win_node: "w6",
        win_ani: {
          name: "actionframe",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 7, {
        node: "s7",
        win_node: "w7",
        win_ani: {
          name: "actionframe",
          zIndex: 100
        },
        isMask: true
      }), _defineProperty(_symbol, 8, {
        node: "s8",
        win_node: "w8",
        win_ani: {
          name: "actionframe",
          zIndex: 100
        },
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
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Loki_Slots",
        Reels: "Loki_Reel",
        Symbols: "Loki_Symbol",
        Sound: "LMSlots_Sound"
      },
      helpItems: [ "games/Loki/prefab/LMSlots_Help_item1", "games/Loki/prefab/LMSlots_Help_item2", "games/Loki/prefab/LMSlots_Help_item3", "games/Loki/prefab/LMSlots_Help_item4", "games/Loki/prefab/LMSlots_Help_item5", "games/Loki/prefab/LMSlots_Help_item6" ],
      col: 5,
      row: 3,
      scatterId: 2,
      symbolPrefab: "LMSlots_Symbol",
      symbolSize: {
        height: 130
      },
      randomSymbols: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      cardmap: (_cardmap = {}, _defineProperty(_cardmap, 1, [ 3, 3, 11, 1, 6, 3, 3, 11, 4, 4, 13, 13, 1, 10, 10, 10, 5, 12, 8, 4, 5, 5, 1, 3, 10, 10, 6, 6, 8, 8, 10, 11, 7, 7, 3, 3, 3, 5, 3, 3, 3, 4, 4, 1, 6, 6, 11, 8, 8, 4, 3, 7, 4, 12, 12, 4, 12, 5, 4, 10, 10, 4, 9, 5, 3, 3, 3, 6, 6, 4, 4, 5, 4, 4, 3, 5, 5, 13, 4, 4, 5, 5, 6, 1, 6, 7, 4, 9, 9, 8, 1, 4, 12, 1, 5, 5, 9, 5, 4, 7, 6, 1, 8, 8, 9, 5, 5, 1, 7, 7, 10, 10, 12, 12, 9, 1, 8, 11, 13, 5, 12, 7, 1, 13, 11, 11, 7, 1, 5, 13, 13, 4, 13, 13, 4, 8, 6, 6, 7, 11, 11, 9, 4, 9, 7 ]), 
      _defineProperty(_cardmap, 2, [ 13, 13, 10, 10, 10, 4, 4, 8, 8, 8, 6, 8, 8, 8, 3, 5, 3, 3, 12, 6, 3, 3, 9, 10, 13, 13, 10, 10, 4, 11, 11, 11, 4, 1, 5, 11, 11, 7, 11, 11, 11, 9, 3, 3, 6, 3, 7, 7, 3, 4, 1, 10, 4, 7, 12, 9, 4, 4, 1, 11, 8, 6, 3, 3, 5, 5, 6, 1, 12, 12, 1, 4, 9, 9, 5, 5, 1, 13, 13, 13, 3, 4, 6, 5, 3, 3, 10, 10, 4, 4, 3, 3, 5, 9, 6, 6, 7, 4, 12, 5, 1, 4, 6, 6, 8, 5, 5, 1, 3, 3, 3, 1, 5, 5, 1, 9, 4, 4, 7, 4, 8, 8, 6, 4, 4, 3, 4, 4, 5, 5, 12, 12, 10, 13, 13, 7, 9, 7, 12, 5, 7, 5, 5, 7, 6, 4, 7 ]), 
      _defineProperty(_cardmap, 3, [ 1, 5, 5, 4, 5, 12, 12, 8, 8, 10, 10, 4, 3, 3, 9, 9, 9, 7, 4, 8, 4, 3, 3, 10, 10, 10, 3, 3, 7, 8, 4, 4, 13, 13, 13, 1, 6, 6, 9, 11, 11, 12, 3, 9, 3, 6, 6, 4, 6, 1, 4, 9, 12, 4, 5, 12, 6, 6, 7, 10, 10, 10, 4, 6, 8, 8, 8, 3, 3, 3, 6, 5, 3, 7, 4, 8, 1, 4, 3, 3, 4, 10, 10, 5, 5, 3, 3, 3, 4, 4, 5, 5, 1, 7, 11, 11, 5, 8, 13, 13, 5, 11, 11, 11, 7, 5, 3, 3, 3, 7, 8, 6, 7, 7, 4, 4, 13, 13, 13, 12, 12, 12, 1, 4, 5, 4, 4, 11, 11, 5, 13, 1, 6, 1, 6, 9, 9, 1, 5, 7, 5, 7, 4, 5, 1, 5, 4 ]), 
      _defineProperty(_cardmap, 4, [ 4, 4, 1, 10, 7, 4, 6, 3, 3, 3, 1, 6, 6, 11, 11, 11, 4, 5, 5, 7, 10, 7, 7, 9, 8, 8, 8, 6, 6, 8, 7, 11, 11, 9, 13, 12, 9, 11, 11, 8, 5, 5, 3, 3, 3, 6, 6, 13, 13, 13, 5, 4, 4, 3, 4, 3, 3, 3, 8, 7, 6, 5, 6, 5, 5, 3, 10, 10, 4, 4, 10, 1, 9, 3, 3, 3, 10, 11, 11, 9, 9, 12, 12, 1, 7, 7, 4, 13, 3, 3, 3, 5, 1, 3, 3, 12, 12, 5, 10, 7, 7, 1, 4, 13, 10, 10, 10, 3, 5, 5, 4, 7, 13, 13, 4, 8, 8, 6, 1, 8, 1, 5, 5, 12, 12, 4, 4, 9, 6, 4, 9, 4, 1, 5, 5, 4, 4, 13, 8, 4, 4, 6, 4, 12, 5, 5 ]), 
      _defineProperty(_cardmap, 5, [ 3, 5, 10, 6, 3, 3, 3, 11, 11, 12, 12, 12, 4, 5, 9, 4, 9, 12, 5, 9, 5, 3, 13, 8, 3, 8, 4, 5, 11, 11, 7, 13, 13, 13, 4, 9, 9, 4, 5, 1, 9, 10, 5, 4, 6, 12, 13, 13, 13, 1, 6, 13, 7, 11, 11, 3, 3, 3, 1, 9, 9, 4, 6, 11, 11, 8, 1, 5, 3, 7, 8, 3, 3, 4, 6, 1, 13, 11, 1, 7, 6, 3, 5, 8, 10, 3, 12, 10, 10, 12, 12, 4, 10, 3, 8, 10, 10, 3, 1, 6, 13, 4, 11, 11, 8, 6, 9, 9, 7, 12, 7, 10, 7, 5, 8, 9, 9, 12, 12, 13, 13, 4, 3, 10, 11, 11, 6, 10, 3, 13, 10, 4, 3, 10, 8, 4, 3, 12, 5, 7, 5, 10, 5, 4, 4, 6, 4, 7, 5, 8, 7 ]), 
      _cardmap),
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      AddAntiTime: 2,
      autoModelDelay: .5,
      bounce: true,
      bounceInfo: {
        distance: 20,
        time: .1
      },
      commEffect: _defineProperty({
        path: "games/Loki/",
        win1: [ "sound_Atlantis_win_1", "" ],
        win2: [ "sound_Atlantis_win_2", "" ]
      }, "win2", [ "sound_Atlantis_win_3", "" ]),
      reelStateInfo: [ {
        id: [ 3 ],
        mini: 1,
        counts: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        antiNode: "",
        bonusAntiNode: "anti_node",
        path: "games/Loki/",
        reelStopSound: "sound_Atlantis_reel_down",
        symbolStopSound: "sound_Atlantis_bonus_down",
        antSound: "sound_Atlantis_respin_quick_run",
        antSpeed: 1500
      } ],
      normalBgm: "music_Atlantis_baseGame"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Loki_Collect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54910Mzq/1H3qnbkeuEhuNo", "Loki_Collect");
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
        _itemList: []
      },
      Init: function Init() {
        this._collect_node = cc.find("safe_node/slots/node_collect", this.node);
        for (var i = 1; i <= 10; i++) {
          var item = cc.find("list/item" + i, this._collect_node);
          cc.find("spr", item).active = false;
          cc.find("anim_show", item).active = false;
          this._itemList[i] = item;
        }
        this._spr_light = cc.find("spr_light", this._collect_node);
        this._spr_light.active = false;
        this._spr_super = cc.find("spr_super", this._collect_node);
        this._super_sg = cc.find("anim", this._spr_super);
        this._super_sg.active = false;
        this._jdt_sg = cc.find("anim_sg", this._collect_node);
        this._jdt_sg.active = false;
        this._btn_tip = cc.find("btn_tip", this._collect_node);
        Global.btnClickEvent(this._btn_tip, this.onClickTipBtn, this);
        this._spr_tip = cc.find("spr_tip", this._collect_node);
        this._spr_tip.active = false;
        this._bonusTrail = cc.vv.gameData.getBonusTrail();
        this.initItems();
      },
      setCollectNodeState: function setCollectNodeState(bShow) {
        this._collect_node.active = bShow;
      },
      initItems: function initItems() {
        var curCnt = cc.vv.gameData.getBonusTrail().count;
        for (var i = 1; i < this._itemList.length; i++) cc.find("spr", this._itemList[i]).active = curCnt >= i;
      },
      addItem: function addItem() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var curCnt, spr, animNode, anim;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Atlantis_colloct");
                _this._bonusTrail = cc.vv.gameData.getBonusTrail();
                curCnt = _this._bonusTrail.count;
                spr = cc.find("spr", _this._itemList[curCnt]);
                spr.active = true;
                spr.setScale(0);
                cc.tween(spr).to(.5, {
                  scale: 1
                }).start();
                _context.next = 9;
                return cc.vv.gameData.awaitTime(.4);

               case 9:
                animNode = cc.find("anim_show", _this._itemList[curCnt]);
                animNode.active = true;
                anim = animNode.getComponent(cc.Animation);
                anim.play("jdt_itemShow");
                anim.on("stop", function() {
                  animNode.active = false;
                  success();
                });

               case 14:
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
        var _this2 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Atlantis_superFs_trigger");
                _this2._jdt_sg.active = true;
                _this2._jdt_sg.getComponent(cc.Animation).play("jdt_saoguang");
                _context2.next = 5;
                return cc.vv.gameData.awaitTime(.5);

               case 5:
                _this2._super_sg.active = true;
                _this2._super_sg.getComponent(cc.Animation).play("jdt_super");
                _context2.next = 9;
                return cc.vv.gameData.awaitTime(.5);

               case 9:
                _this2._spr_light.active = true;
                _this2._spr_light.stopAllActions();
                cc.tween(_this2._spr_light).repeatForever(cc.tween().by(2, {
                  angle: -360
                })).start();
                cc.tween(_this2._spr_super).to(.5, {
                  scale: 1.3
                }).to(.8, {
                  scale: .8
                }).to(.3, {
                  scale: 1
                }).call(function() {
                  _this2._spr_light.stopAllActions();
                  _this2._spr_light.active = false;
                  success();
                }).start();

               case 13:
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
      onClickTipBtn: function onClickTipBtn() {
        var _this3 = this;
        if (!cc.vv.gameData.GetBottomScript().GetSpinBtnState()) return;
        if (cc.vv.gameData.GetAutoModelTime() > 0) return;
        if (cc.vv.gameData.isFreeGame()) return;
        this._spr_tip.stopAllActions();
        if (this._spr_tip.active) this._spr_tip.runAction(cc.sequence(cc.scaleTo(this._spr_tip.scaleX / 2, 0, 0), cc.callFunc(function() {
          _this3._spr_tip.active = false;
        }))); else {
          this._spr_tip.active = true;
          this._spr_tip.setScale(0);
          this._spr_tip.runAction(cc.sequence(cc.scaleTo(.5, 1, 1), cc.delayTime(3), cc.scaleTo(.5, 0, 0), cc.callFunc(function() {
            _this3._spr_tip.active = false;
          })));
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Loki_FreeGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbab4oPGoVEGLbm0+NMI+nu", "Loki_FreeGame");
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
        _itemList: [],
        _curIdx: 0
      },
      Init: function Init() {
        this._node_items = cc.find("safe_node/slots/free_items", this.node);
        this._node_items.active = false;
        for (var i = 1; i <= 15; i++) {
          var item = cc.find("list/item" + i, this._node_items);
          this._itemList[i] = item;
        }
        this._free_win = cc.find("safe_node/slots/free_win", this.node);
        this._free_win.active = false;
        this._free_tuowei = cc.find("safe_node/free_tuowei", this.node);
        this._free_tuowei.active = false;
        this._lbl_mult = cc.find("safe_node/slots/lbl_mult", this.node);
        this._lbl_mult.active = false;
      },
      sortItems: function sortItems() {
        var items = Global.copy(cc.vv.gameData.getBonusGame().bonusItems);
        items.sort(function(a, b) {
          return a.mult - b.mult;
        });
        cc.log(items);
        return items;
      },
      initAllItems: function initAllItems() {
        for (var i = 1; i < this._itemList.length; i++) {
          var spr = cc.find("spr", this._itemList[i]);
          spr.active = false;
          this.setItemSprOpacity(i, true);
          for (var idx = 0; idx < spr.childrenCount; idx++) spr.children[idx].active = false;
        }
      },
      showAllItems: function showAllItems() {
        var restFreeCnt = cc.vv.gameData.GetFreeTime();
        var allFreeCnt = cc.vv.gameData.GetTotalFree();
        var items = this.sortItems();
        this._curIdx = items.length - restFreeCnt + 1;
        for (var i = 1; i < this._itemList.length; i++) {
          cc.find("spr", this._itemList[i]).active = i <= items.length;
          i <= items.length ? i < this._curIdx ? this.initItem(i, items[i - 1], true) : this.initItem(i, items[i - 1], false) : this.initItem(i, false);
        }
      },
      initItem: function initItem(idx, data, hasOpen) {
        var item = this._itemList[idx];
        var spr = cc.find("spr", item);
        spr.active = data;
        if (data) {
          var spr_di = cc.find("spr_di", spr);
          var lbl_win = cc.find("lbl_win", spr);
          var lbl_mult = cc.find("lbl_mult", spr);
          var anim_show = cc.find("anim_show", spr);
          var spr_xz1 = cc.find("spr_xz1", spr);
          var spr_xz2 = cc.find("spr_xz2", spr);
          if (hasOpen) if (data.coin > 0) {
            spr_di.active = true;
            lbl_win.active = true;
            lbl_win.getComponent(cc.Label).string = Global.convertNumToShort(data.coin, 1e3, 0);
          } else {
            this.setItemSprOpacity(idx, false);
            lbl_mult.active = true;
            lbl_mult.getComponent(cc.Label).string = data.mult + "X";
          } else {
            this.setItemSprOpacity(idx, true);
            lbl_mult.active = true;
            lbl_mult.getComponent(cc.Label).string = data.mult + "X";
          }
        }
      },
      setItemSprOpacity: function setItemSprOpacity(idx, bShow) {
        cc.find("spr", this._itemList[idx]).opacity = bShow ? 255 : 150;
      },
      showItem: function showItem(idx, bShow, data) {
        var item = this._itemList[idx];
        var spr = cc.find("spr", item);
        var anim_show = cc.find("anim_show", spr);
        var lbl_mult = cc.find("lbl_mult", spr);
        if (bShow) {
          spr.active = true;
          spr.setScale(0);
          cc.tween(spr).to(.5, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          anim_show.active = true;
          anim_show.getComponent(cc.Animation).play("free_itemShow");
          lbl_mult.active = true;
          lbl_mult.getComponent(cc.Label).string = data.mult + "X";
        } else spr.active = false;
      },
      playFreeWin: function playFreeWin(winCoin, roolTime) {
        this._free_win.active = true;
        var lbl = cc.find("lbl", this._free_win);
        0 === winCoin ? lbl.getComponent(cc.Label).string = winCoin : Global.doRoallNumEff(lbl, 0, winCoin, roolTime, null, null, 0, true);
      },
      enterFreeGame: function enterFreeGame() {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this._node_items.active = true;
                cc.vv.gameData.getCollectScript().setCollectNodeState(false);
                _this.showAllItems();
                _this.playFreeWin(0);
                success();

               case 5:
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
      exitFreeGame: function exitFreeGame() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success, failed) {
                  var winCoin;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      _context2.next = 2;
                      return _this2.playFreeEnd();

                     case 2:
                      winCoin = cc.vv.gameData.GetGameTotalFreeWin();
                      _context2.next = 5;
                      return cc.vv.gameData.getPopupScript().showEndFree(winCoin);

                     case 5:
                      cc.vv.gameData.getBonusScript().resetJackpot();
                      _this2._node_items.active = false;
                      cc.vv.gameData.getCollectScript().setCollectNodeState(true);
                      _this2._free_win.active = false;
                      if (cc.vv.gameData.isSuperBonus()) {
                        cc.vv.gameData.getBonusTrail().count = 0;
                        cc.vv.gameData.getCollectScript().initItems();
                        cc.vv.gameData.setIsSuperBonus(false);
                      }
                      cc.vv.gameData.GetSlotsScript().ShowGameview(false);
                      _context2.next = 13;
                      return new Promise(function(success, failed) {
                        cc.vv.gameData.GetSlotsScript().ShowBottomWin(winCoin, winCoin, true, success);
                      });

                     case 13:
                      success();

                     case 14:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      triFreeGame: function triFreeGame() {
        var _this3 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                cc.vv.gameData.GetSlotsScript().ShowGameview(true);
                _this3._curIdx = cc.vv.gameData.getBonusGame().bonusItems.length - cc.vv.gameData.GetFreeTime() + 1;
                _this3.playFreeWin(0);
                _this3.initAllItems();
                _context4.next = 6;
                return cc.vv.gameData.awaitTime(1.3);

               case 6:
                _context4.next = 8;
                return _this3.flyAllItems();

               case 8:
                cc.vv.gameData.getBonusScript().showNormalSlots();
                _context4.next = 11;
                return cc.vv.gameData.getPopupScript().showTriFree(cc.vv.gameData.GetTotalFree());

               case 11:
                success();

               case 12:
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
      flyAllItems: function flyAllItems() {
        var _this4 = this;
        return new Promise(function() {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success, failed) {
            var items, i, symbol, fromPos, toPos;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                items = _this4.sortItems();
                i = 0;

               case 2:
                if (!(i < items.length)) {
                  _context5.next = 16;
                  break;
                }
                symbol = cc.vv.gameData.getBonusScript().GetSymbolByIdx(items[i].idx);
                fromPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                toPos = _this4._itemList[i + 1].convertToWorldSpaceAR(cc.v2(0, 0));
                symbol.setSymbolMask(true);
                Global.SlotsSoundMgr.playEffect("sound_Atlantis_fly");
                _context5.next = 10;
                return _this4.flyItem(fromPos, toPos);

               case 10:
                _this4.showItem(i + 1, true, items[i]);
                _context5.next = 13;
                return cc.vv.gameData.awaitTime(.5);

               case 13:
                i++;
                _context5.next = 2;
                break;

               case 16:
                success();

               case 17:
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
      flyItem: function flyItem(fromPos, toPos) {
        var _this5 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success, failed) {
            var from, to, v, length, angle;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
               case 0:
                from = _this5._free_tuowei.parent.convertToNodeSpaceAR(fromPos);
                to = _this5._free_tuowei.parent.convertToNodeSpaceAR(toPos);
                v = cc.v2(to.x, to.y).sub(cc.v2(from.x, from.y));
                length = v.mag();
                angle = v.signAngle(cc.v2(1, 0));
                _this5._free_tuowei.active = true;
                _this5._free_tuowei.position = from;
                _this5._free_tuowei.angle = -angle * cc.macro.DEG + 180;
                _this5._free_tuowei.scale = length / 400;
                _this5._free_tuowei.getComponent(cc.Animation).play("free_tuowei");
                _context6.next = 12;
                return cc.vv.gameData.awaitTime(.6);

               case 12:
                _this5._free_tuowei.active = false;
                success();

               case 14:
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
      StartMove: function StartMove() {
        var item = this._itemList[this._curIdx];
        var spr_xz1 = cc.find("spr/spr_xz1", item);
        var spr_xz2 = cc.find("spr/spr_xz2", item);
        spr_xz1.active = true;
        spr_xz2.active = true;
        spr_xz1.getComponent(cc.Animation).play("free_xuanzhong");
        cc.tween(spr_xz2).repeatForever(cc.tween().by(.8, {
          angle: -360
        }).call(function() {
          spr_xz2.angle = spr_xz2.angle % 360;
        })).start();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var item, spr, spr_di, lbl_win, lbl_mult, spr_xz1, spr_xz2, win, endPos, items;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              item = _this6._itemList[_this6._curIdx];
              spr = cc.find("spr", item);
              spr_di = cc.find("spr_di", spr);
              lbl_win = cc.find("lbl_win", spr);
              lbl_mult = cc.find("lbl_mult", spr);
              spr_xz1 = cc.find("spr_xz1", spr);
              spr_xz2 = cc.find("spr_xz2", spr);
              win = cc.vv.gameData.GetGameWin();
              if (!(win > 0)) {
                _context7.next = 36;
                break;
              }
              cc.vv.gameData.GetSlotsScript().ShowWinTrace();
              Global.SlotsSoundMgr.playEffect("sound_Atlantis_jumpCoin1");
              _this6.playFreeWin(win, .6);
              _context7.next = 14;
              return cc.vv.gameData.awaitTime(.6);

             case 14:
              _this6._lbl_mult.getComponent(cc.Label).string = lbl_mult.getComponent(cc.Label).string;
              _this6._lbl_mult.position = _this6._lbl_mult.parent.convertToNodeSpaceAR(lbl_mult.convertToWorldSpaceAR(cc.v2(0, 0)));
              _this6._lbl_mult.active = true;
              lbl_mult.active = false;
              Global.SlotsSoundMgr.playEffect("sound_Atlantis_fly_down");
              endPos = _this6._lbl_mult.parent.convertToNodeSpaceAR(cc.find("lbl", _this6._free_win).convertToWorldSpaceAR(cc.v2(0, 0)));
              cc.tween(_this6._lbl_mult).to(.8, {
                position: endPos
              }).call(function() {
                _this6._lbl_mult.active = false;
              }).start();
              _context7.next = 23;
              return cc.vv.gameData.awaitTime(.8);

             case 23:
              Global.SlotsSoundMgr.playEffect("sound_Atlantis_jumpCoin2");
              items = _this6.sortItems();
              _this6.playFreeWin(items[_this6._curIdx - 1].coin, .6);
              _context7.next = 28;
              return cc.vv.gameData.awaitTime(.6);

             case 28:
              spr_xz1.active = false;
              spr_xz2.stopAllActions();
              spr_xz2.active = false;
              spr_di.active = true;
              lbl_win.active = true;
              lbl_win.getComponent(cc.Label).string = Global.convertNumToShort(items[_this6._curIdx - 1].coin, 1e3, 0);
              _context7.next = 37;
              break;

             case 36:
              if (!cc.vv.gameData.isSuperBonus()) {
                spr_xz1.active = false;
                spr_xz2.stopAllActions();
                spr_xz2.active = false;
                spr.opacity = 150;
              }

             case 37:
              _context7.next = 39;
              return cc.vv.gameData.awaitTime(.5);

             case 39:
              if (!(cc.vv.gameData.GetTotalFree() > 0 && 0 == cc.vv.gameData.GetFreeTime())) {
                _context7.next = 42;
                break;
              }
              _context7.next = 42;
              return _this6.exitFreeGame();

             case 42:
              cc.vv.gameData.isSuperBonus() ? win > 0 && (_this6._curIdx += 1) : _this6._curIdx += 1;
              cc.vv.gameData.GetSlotsScript().CanDoNextRound();

             case 44:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      playFreeEnd: function playFreeEnd() {
        var _this7 = this;
        return new Promise(function() {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success, failed) {
            var items, total, i, fromPos, toPos;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
               case 0:
                items = _this7.sortItems();
                total = 0;
                i = 0;

               case 3:
                if (!(i < items.length)) {
                  _context8.next = 16;
                  break;
                }
                if (!(items[i].coin > 0)) {
                  _context8.next = 13;
                  break;
                }
                fromPos = _this7._itemList[i + 1].convertToWorldSpaceAR(cc.v2(0, 0));
                toPos = cc.find("Canvas/safe_node/LMSlots_Bottom/winBg").convertToWorldSpaceAR(cc.v2(0, 0));
                _this7.setItemSprOpacity(i + 1, false);
                Global.SlotsSoundMgr.playEffect("sound_Atlantis_fly_over_down");
                _context8.next = 11;
                return _this7.flyItem(fromPos, toPos);

               case 11:
                total += items[i].coin;
                cc.vv.gameData.GetBottomScript().SetWin(total);

               case 13:
                i++;
                _context8.next = 3;
                break;

               case 16:
                success();

               case 17:
               case "end":
                return _context8.stop();
              }
            }, _callee8);
          }));
          return function(_x11, _x12) {
            return _ref6.apply(this, arguments);
          };
        }());
      }
    });
    cc._RF.pop();
  }, {} ],
  Loki_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8f7210BmpD+6D/Rj3Zy6+a", "Loki_GameData");
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
        this._bonusTrail = deskInfo.bonusTrail;
        this._bonusGame = deskInfo.bonusGame;
        this._isSuperBonus = this._bonusTrail.count == this._bonusTrail.totalCount;
        this._super(deskInfo, gameId, gameJackpot);
      },
      OnRcvNetSpine: function OnRcvNetSpine(msg) {
        if (200 == msg.code) {
          this._bonusTrail = msg.bonusTrail;
          this._bonusGame = msg.bonusGame;
        }
        this._super(msg);
      },
      setCollectScript: function setCollectScript(val) {
        this._collectScp = val;
      },
      getCollectScript: function getCollectScript() {
        return this._collectScp;
      },
      setPopupScript: function setPopupScript(val) {
        this._popouScp = val;
      },
      getPopupScript: function getPopupScript() {
        return this._popouScp;
      },
      setBonusScript: function setBonusScript(val) {
        this._bonusScp = val;
      },
      getBonusScript: function getBonusScript() {
        return this._bonusScp;
      },
      setFreeScript: function setFreeScript(val) {
        this._freeScp = val;
      },
      getFreeScript: function getFreeScript() {
        return this._freeScp;
      },
      setIsBonusGame: function setIsBonusGame(val) {
        this._isBonusGame = val;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
      },
      setIsFreeGame: function setIsFreeGame(val) {
        this._isFreeGame = val;
      },
      isFreeGame: function isFreeGame() {
        return this._isFreeGame;
      },
      setBonusTrail: function setBonusTrail(val) {
        this._bonusTrail = val;
      },
      getBonusTrail: function getBonusTrail() {
        return this._bonusTrail;
      },
      setIsSuperBonus: function setIsSuperBonus(val) {
        this._isSuperBonus = val;
      },
      isSuperBonus: function isSuperBonus() {
        return this._isSuperBonus;
      },
      setBonusGame: function setBonusGame(val) {
        this._bonusGame = val;
      },
      getBonusGame: function getBonusGame() {
        return this._bonusGame;
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
  Loki_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94c217OiqBEvZO/05TF2kuc", "Loki_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {},
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_collect = this.node.addComponent("Loki_Collect");
        script_collect.Init();
        cc.vv.gameData.setCollectScript(script_collect);
        var script_popup = this.node.addComponent("Loki_Popup");
        script_popup.Init();
        cc.vv.gameData.setPopupScript(script_popup);
        var script_bonus = this.node.addComponent("Loki_BonusGame");
        script_bonus.Init();
        cc.vv.gameData.setBonusScript(script_bonus);
        var script_free = this.node.addComponent("Loki_FreeGame");
        script_free.Init();
        cc.vv.gameData.setFreeScript(script_free);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Loki_Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9357188e+JLPYU6tQqxglbc", "Loki_Popup");
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
        this._node_free_tri = cc.find("node_free_tri", this._node_popup);
        this._node_free_end = cc.find("node_free_end", this._node_popup);
        this._node_jp_win = cc.find("node_jp_win", this._node_popup);
        this._node_free_tri.active = false;
        this._node_free_end.active = false;
        this._node_jp_win.active = false;
        this._node_qp1 = cc.find("safe_node/node_qp1", this.node);
        this._node_qp1.active = false;
      },
      showTriFree: function showTriFree(cnt) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success, failed) {
            var node_qiu, spr_free, spr_super;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Atlantis_show_freespin_start");
                _this._node_popup.active = true;
                _this._node_free_tri.active = true;
                node_qiu = cc.find("node_qiu", _this._node_free_tri);
                spr_free = cc.find("spr_free", _this._node_free_tri);
                spr_super = cc.find("spr_super", _this._node_free_tri);
                cc.find("lbl_cnt", node_qiu).getComponent(cc.Label).string = cnt;
                spr_free.active = !cc.vv.gameData.isSuperBonus();
                spr_super.active = cc.vv.gameData.isSuperBonus();
                node_qiu.setScale(0);
                spr_free.setScale(0);
                spr_super.setScale(0);
                cc.tween(node_qiu).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr_free).delay(.2).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr_super).delay(.2).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context.next = 17;
                return cc.vv.gameData.awaitTime(2.5);

               case 17:
                cc.tween(spr_free).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                cc.tween(spr_super).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                cc.tween(node_qiu).delay(.2).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).start();
                _context.next = 22;
                return cc.vv.gameData.awaitTime(.7);

               case 22:
                _this._node_popup.active = false;
                _this._node_free_tri.active = false;
                success();

               case 25:
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
      showEndFree: function showEndFree(winCoin) {
        var _this2 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var bg, light, par, spr1, spr2, spr_kuang, spr3, spr_cnt, spr_cnt_super, btn_collect, lbl_winCoin, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Atlantis_show_freespin_over");
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                _this2._node_popup.active = true;
                _this2._node_free_end.active = true;
                bg = cc.find("bg", _this2._node_free_end);
                light = cc.find("light", _this2._node_free_end);
                par = cc.find("par", _this2._node_free_end);
                spr1 = cc.find("spr1", _this2._node_free_end);
                spr2 = cc.find("spr2", _this2._node_free_end);
                spr_kuang = cc.find("spr_kuang", _this2._node_free_end);
                spr3 = cc.find("spr3", _this2._node_free_end);
                spr_cnt = cc.find("spr_cnt", _this2._node_free_end);
                spr_cnt_super = cc.find("spr_cnt_super", _this2._node_free_end);
                btn_collect = cc.find("btn_collect", _this2._node_free_end);
                btn_collect.getComponent(cc.Button).interactable = false;
                lbl_winCoin = cc.find("spr_kuang/lbl_wincoin", _this2._node_free_end);
                Global.doRoallNumEff(lbl_winCoin, 0, winCoin, 1.5, null, null, 0, true);
                cc.find("lbl_cnt", spr_cnt).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                cc.find("lbl_cnt", spr_cnt_super).getComponent(cc.Label).string = cc.vv.gameData.GetTotalFree();
                bg.opacity = 0;
                light.opacity = 0;
                spr1.opacity = 0;
                spr2.opacity = 0;
                spr_kuang.opacity = 0;
                spr3.opacity = 0;
                spr_cnt.opacity = 0;
                btn_collect.opacity = 0;
                bg.setScale(0);
                light.setScale(0);
                spr1.setScale(0);
                spr2.setScale(0);
                spr_kuang.setScale(0);
                spr3.setScale(0);
                spr_cnt.setScale(0);
                btn_collect.setScale(0);
                spr_cnt.active = !cc.vv.gameData.isSuperBonus();
                spr_cnt_super.active = cc.vv.gameData.isSuperBonus();
                scaleTime = .3;
                delayTime = .1;
                cc.tween(bg).to(scaleTime, {
                  scale: 1,
                  opacity: 255
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(light).delay(delayTime).to(scaleTime, {
                  scale: 1.5,
                  opacity: 255
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr1).delay(2 * delayTime).to(scaleTime, {
                  scale: 1,
                  opacity: 255
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr2).delay(3 * delayTime).to(scaleTime, {
                  scale: 1,
                  opacity: 255
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr_kuang).delay(4 * delayTime).to(scaleTime, {
                  scale: 1,
                  opacity: 255
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr3).delay(5 * delayTime).to(scaleTime, {
                  scale: 1,
                  opacity: 255
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr_cnt).delay(5 * delayTime).to(scaleTime, {
                  scale: 1,
                  opacity: 255
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr_cnt_super).delay(5 * delayTime).to(scaleTime, {
                  scale: 1,
                  opacity: 255
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn_collect).delay(7 * delayTime).to(scaleTime, {
                  scale: 1,
                  opacity: 255
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(light).repeatForever(cc.tween().by(3, {
                  angle: -360
                })).start();
                _context4.next = 51;
                return cc.vv.gameData.awaitTime(7 * delayTime + scaleTime);

               case 51:
                par.active = true;
                par.getComponent(cc.ParticleSystem).resetSystem();
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
                self = _this2;
                clickFunc = function() {
                  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                       case 0:
                        btn_collect.getComponent(cc.Button).interactable = false;
                        if (!(Global.FormatCommaNumToNum(lbl_winCoin.getComponent(cc.Label).string) != winCoin)) {
                          _context2.next = 6;
                          break;
                        }
                        lbl_winCoin.stopAllActions();
                        lbl_winCoin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                        _context2.next = 6;
                        return cc.vv.gameData.awaitTime(.1);

                       case 6:
                        par.active = false;
                        cc.tween(light).to(scaleTime, {
                          scale: 0,
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr1).to(scaleTime, {
                          scale: 0,
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr2).delay(delayTime).to(scaleTime, {
                          scale: 0,
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr_kuang).delay(2 * delayTime).to(scaleTime, {
                          scale: 0,
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr3).delay(3 * delayTime).to(scaleTime, {
                          scale: 0,
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr_cnt).delay(4 * delayTime).to(scaleTime, {
                          scale: 0,
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr_cnt_super).delay(4 * delayTime).to(scaleTime, {
                          scale: 0,
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn_collect).delay(4 * delayTime).to(scaleTime, {
                          scale: 0,
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(bg).delay(5 * delayTime).to(scaleTime, {
                          scale: 0,
                          opacity: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context2.next = 18;
                        return cc.vv.gameData.awaitTime(5 * delayTime + scaleTime);

                       case 18:
                        self._node_popup.active = false;
                        self._node_free_end.active = false;
                        success();

                       case 21:
                       case "end":
                        return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function clickFunc() {
                    return _ref3.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                })));

               case 59:
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
      showWinJp: function showWinJp(winCoin, jpType) {
        var _this3 = this;
        return new Promise(function() {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(success, failed) {
            var bg, spr_jp, spr_kuang, btn_collect, lbl_winCoin, jpName, scaleTime, delayTime, self, clickFunc;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
               case 0:
                cc.vv.gameData.GetBottomScript().ShowBtnsByState("moveing_1");
                _this3._node_popup.active = true;
                _this3._node_jp_win.active = true;
                bg = cc.find("bg", _this3._node_jp_win);
                spr_jp = cc.find("spr_jp", _this3._node_jp_win);
                spr_kuang = cc.find("spr_kuang", _this3._node_jp_win);
                btn_collect = cc.find("btn_collect", _this3._node_jp_win);
                btn_collect.getComponent(cc.Button).interactable = false;
                lbl_winCoin = cc.find("spr_kuang/lbl_wincoin", _this3._node_jp_win);
                Global.SlotsSoundMgr.playEffect("sound_Atlantis_JackPotWinCoins");
                Global.doRoallNumEff(lbl_winCoin, 0, winCoin, 10, function() {
                  Global.SlotsSoundMgr.playEffect("sound_Atlantis_JPCoinsJump_Over");
                }, null, 0, true);
                jpName = [ "mini", "minor", "major", "grand" ];
                spr_jp.getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("baseImg").getSpriteFrame(cc.js.formatStr("jp_%s_2", jpName[jpType - 1]));
                bg.setScale(0);
                spr_jp.setScale(0);
                spr_kuang.setScale(0);
                btn_collect.setScale(0);
                scaleTime = .5;
                delayTime = .1;
                cc.tween(bg).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr_jp).delay(delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(spr_kuang).delay(2 * delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.tween(btn_collect).delay(3 * delayTime).to(scaleTime, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                _context7.next = 25;
                return cc.vv.gameData.awaitTime(3 * delayTime + scaleTime);

               case 25:
                btn_collect.off("click");
                btn_collect.getComponent(cc.Button).interactable = true;
                self = _this3;
                clickFunc = function() {
                  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                       case 0:
                        btn_collect.getComponent(cc.Button).interactable = false;
                        if (!(Global.FormatCommaNumToNum(lbl_winCoin.getComponent(cc.Label).string) != winCoin)) {
                          _context5.next = 7;
                          break;
                        }
                        Global.SlotsSoundMgr.stopEffectByName("sound_Atlantis_JackPotWinCoins");
                        lbl_winCoin.stopAllActions();
                        lbl_winCoin.getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                        _context5.next = 7;
                        return cc.vv.gameData.awaitTime(.1);

                       case 7:
                        cc.tween(bg).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr_jp).delay(delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(spr_kuang).delay(2 * delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        cc.tween(btn_collect).delay(3 * delayTime).to(scaleTime, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).start();
                        _context5.next = 13;
                        return cc.vv.gameData.awaitTime(3 * delayTime + scaleTime);

                       case 13:
                        self._node_popup.active = false;
                        self._node_jp_win.active = false;
                        success();

                       case 16:
                       case "end":
                        return _context5.stop();
                      }
                    }, _callee5);
                  }));
                  return function clickFunc() {
                    return _ref6.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, clickFunc);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      clickFunc();

                     case 2:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                })));

               case 31:
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
      playQpAnim: function playQpAnim() {
        var _this4 = this;
        Global.SlotsSoundMgr.playEffect("sound_Atlantis_changeScene");
        this._node_qp1.active = true;
        var character = cc.find("character", this._node_qp1);
        character.active = true;
        character.getComponent(sp.Skeleton).setAnimation(0, "skill", false);
        character.getComponent(sp.Skeleton).setCompleteListener(function() {
          character.getComponent(sp.Skeleton).setCompleteListener(null);
          character.active = false;
          _this4._node_qp1.active = false;
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Loki_PrizePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f552dgG1BRDI7sfKvbF/JYl", "Loki_PrizePool");
    "use strict";
    cc.Class({
      extends: require("LMSlots_PrizePool_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_PrizePool_Base: void 0
  } ],
  Loki_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6358aPIUPBMpIAl4ibZ/aZU", "Loki_Reel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {}
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Loki_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b188btZ2GRNW5L3AQ/oCkRs", "Loki_Slots");
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
        this._spine_character = cc.find("Canvas/safe_node/character");
        this._super();
      },
      ReconnectShow: function ReconnectShow() {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var bonusGame;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._topScript.SetBackLobby(false);
              _this._bottomScript.ShowBtnsByState("moveing_1");
              bonusGame = cc.vv.gameData.getBonusGame();
              if (!bonusGame) {
                _context.next = 20;
                break;
              }
              if (!(1 == bonusGame.state)) {
                _context.next = 12;
                break;
              }
              _context.next = 7;
              return cc.vv.gameData.getBonusScript().enterBonusGame();

             case 7:
              if (!(cc.vv.gameData.GetTotalFree() > 0)) {
                _context.next = 10;
                break;
              }
              _context.next = 10;
              return _this.triFreeGame();

             case 10:
              _context.next = 18;
              break;

             case 12:
              if (!(2 == bonusGame.state)) {
                _context.next = 18;
                break;
              }
              cc.vv.gameData.getBonusScript().lockJackpot(bonusGame.jackpotValues);
              _this._spine_character.active = false;
              _context.next = 17;
              return cc.vv.gameData.getFreeScript().enterFreeGame();

             case 17:
              _this.ShowGameview(true);

             case 18:
              _context.next = 21;
              break;

             case 20:
              _this.ShowGameview(false);

             case 21:
              _this._topScript.StopMove();
              _this._bottomScript.CanDoNextRound();

             case 23:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      StartMove: function StartMove() {
        this._super();
        cc.vv.gameData.isBonusGame() ? cc.vv.gameData.getBonusScript().StopMove() : cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().StartMove() : Global.SlotsSoundMgr.playNormalBgm();
      },
      StopMove: function StopMove() {
        cc.vv.gameData.isBonusGame() ? cc.vv.gameData.getBonusScript().StopMove() : this._super();
      },
      onMsgSpine: function onMsgSpine(msg) {
        this._super(msg);
      },
      SetSlotsResult: function SetSlotsResult(cards) {
        var dataList = [];
        if (this._gameInfo.bonusItems && this._gameInfo.bonusItems.length > 0) for (var i = 0; i < this._gameInfo.bonusItems.length; i++) dataList[this._gameInfo.bonusItems[i].idx - 1] = this._gameInfo.bonusItems[i];
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
        cc.vv.gameData.isBonusGame() ? cc.vv.gameData.getBonusScript().OnSpinEnd() : cc.vv.gameData.isFreeGame() ? cc.vv.gameData.getFreeScript().OnSpinEnd() : this.onSpinEndAction();
      },
      onSpinEndAction: function onSpinEndAction() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var nWin, nTotal, isBonus, isFree, isEndFree, trail;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this2.ShowWinTrace();
              nWin = cc.vv.gameData.GetGameWin();
              nTotal = nWin;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() != cc.vv.gameData.GetFreeTime() && (nTotal = cc.vv.gameData.GetGameTotalFreeWin());
              _context2.next = 6;
              return new Promise(function(success, failed) {
                _this2.ShowBottomWin(nWin, nTotal, true, success);
              });

             case 6:
              if (!_this2._gameInfo.bonusGame) {
                _context2.next = 11;
                break;
              }
              trail = _this2._gameInfo.bonusTrail;
              trail.count == trail.totalCount && cc.vv.gameData.setIsSuperBonus(true);
              _context2.next = 11;
              return _this2.triBonusGame();

             case 11:
              if (!(cc.vv.gameData.GetTotalFree() > 0)) {
                _context2.next = 14;
                break;
              }
              _context2.next = 14;
              return _this2.triFreeGame();

             case 14:
              isEndFree;
              _this2.CanDoNextRound();

             case 16:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      triBonusGame: function triBonusGame() {
        var _this3 = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success, failed) {
            var i;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
               case 0:
                _context3.next = 2;
                return cc.vv.gameData.getCollectScript().addItem();

               case 2:
                if (!cc.vv.gameData.isSuperBonus()) {
                  _context3.next = 5;
                  break;
                }
                _context3.next = 5;
                return cc.vv.gameData.getCollectScript().fullAnim();

               case 5:
                _context3.next = 7;
                return cc.vv.gameData.awaitTime(1);

               case 7:
                cc.vv.gameData.getPopupScript().playQpAnim();
                _context3.next = 10;
                return cc.vv.gameData.awaitTime(1);

               case 10:
                for (i = 1; i <= 15; i++) _this3.GetSymbolByIdx(i).clearState();
                _context3.next = 13;
                return cc.vv.gameData.getBonusScript().enterBonusGame();

               case 13:
                success();

               case 14:
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
      triFreeGame: function triFreeGame() {
        var _this4 = this;
        return new Promise(function() {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success, failed) {
            var node_count, node_items, pos_reel, pos1, pos2;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sound_Atlantis_notice");
                cc.tween(_this4._spine_character).to(1, {
                  opacity: 0
                }).start();
                node_count = cc.find("bonus_cnt", _this4.node.parent);
                node_items = cc.find("free_items", _this4.node);
                pos_reel = cc.find("reels", _this4.node).position;
                pos1 = node_count.position;
                pos2 = node_items.position;
                node_items.position = pos_reel;
                cc.vv.gameData.getFreeScript().playFreeWin(0);
                _context4.next = 11;
                return cc.vv.gameData.awaitTime(1.5);

               case 11:
                cc.tween(node_count).to(.8, {
                  position: pos_reel
                }).call(function() {
                  node_count.active = false;
                  node_count.position = pos1;
                }).start();
                Global.SlotsSoundMgr.playEffect("sound_Atlantis_chessboard_up");
                node_items.active = true;
                cc.tween(node_items).to(.8, {
                  position: pos2
                }).start();
                _context4.next = 17;
                return cc.vv.gameData.getFreeScript().triFreeGame();

               case 17:
                success();

               case 18:
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
      initAllSymbol: function initAllSymbol(cards, data) {
        for (var i = 1; i <= 15; i++) this.GetSymbolByIdx(i).ShowById(cards[i], data);
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        cc.vv.gameData.setIsFreeGame(bFree);
        if (bFree) Global.SlotsSoundMgr.playBgm("music_Atlantis_freeGame"); else {
          this._spine_character.active = true;
          this._spine_character.opacity = 255;
        }
        bFree && cc.vv.gameData.isSuperBonus() ? this._bottomScript.SetBetNodeVisible(false) : this._bottomScript.SetBetNodeVisible(true);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Loki_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef150MqJxdJXLndPv+b9wjg", "Loki_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {
        _type: 0
      },
      setType: function setType(val) {
        this._type = val;
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        var randVal;
        var randomcfg = this.GetRandomCfg();
        if (randomcfg) {
          var reelrandomCfg = randomcfg[this._reelIdx % 5 + 1];
          if (reelrandomCfg) {
            var randIdx = cc.vv.gameData.GetReelRandomIdx(this._reelIdx % 5);
            cc.js.isNumber(randIdx) || (randIdx = Global.random(1, reelrandomCfg.length) - 1);
            randVal = reelrandomCfg[randIdx];
            if (!randVal) {
              randIdx = 0;
              randVal = reelrandomCfg[randIdx];
            }
            cc.vv.gameData.SetReelRandomIdx(this._reelIdx % 5, ++randIdx);
          }
        } else {
          var cfg = cc.vv.gameData.getGameCfg();
          var _randIdx = Global.random(1, cfg.randomSymbols.length);
          randVal = cfg.randomSymbols[_randIdx - 1];
        }
        this.ShowById(randVal);
        if (3 === this._id) {
          var num = Global.random(1, 10) > 9 ? 10 : Global.random(2, 5);
          this.showMult(num);
        }
      },
      getRandomSymbol: function getRandomSymbol() {
        var cfg = cc.vv.gameData.getGameCfg();
        var randIdx = Global.random(1, cfg.randomSymbols.length);
        return cfg.randomSymbols[randIdx - 1];
      },
      clearState: function clearState() {
        this.setAnimationToTop(false);
        this.ShowKuang(false);
        this.stopWinTweenAction();
        this.node.zIndex = 50 - this._symbolIdx + 10 * this._reelIdx;
      },
      StartMove: function StartMove() {
        this._super();
        this._type && this.setMaskVisible(true);
      },
      setMaskVisible: function setMaskVisible(bMask) {
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[this._id] && cfg.symbol[this._id].node) {
          var showNode = cc.find(cfg.symbol[this._id].node, this.node);
          bMask && cfg.symbol[this._id].isMask ? showNode.color = new cc.Color(100, 100, 100) : showNode.color = cc.Color.WHITE;
        }
      },
      setSymbolMask: function setSymbolMask(bMask) {
        for (var i = 0; i < this.node.childrenCount; i++) this.node.children[i].color = bMask ? new cc.Color(100, 100, 100) : cc.Color.WHITE;
      },
      ShowById: function ShowById(id, data) {
        this._super(id, data);
        data && data.mult ? this.showMult(data.mult) : this.showMult();
        this._type && this.setMaskVisible(true);
      },
      showMult: function showMult(mult) {
        var lbl_mult = cc.find("lbl_mult", this.node);
        var spr_freeSpin = cc.find("spr_freeSpin", this.node);
        if (mult) {
          lbl_mult.active = true;
          lbl_mult.getComponent(cc.Label).string = mult + "X";
          spr_freeSpin.active = true;
        } else {
          lbl_mult.active = false;
          spr_freeSpin.active = false;
        }
      },
      playStopAnimation: function playStopAnimation() {
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (3 === id) {
          var nScale = this._showNode.scale;
          this._showNodeOrgScale = nScale;
          cc.tween(this._showNode).to(.2, {
            scale: nScale + .2
          }).to(.1, {
            scale: nScale
          }).start();
          cc.tween(cc.find("lbl_mult", this.node)).to(.2, {
            scale: 1.2
          }).to(.1, {
            scale: 1
          }).start();
          cc.tween(cc.find("spr_freeSpin", this.node)).to(.2, {
            scale: 1.2
          }).to(.1, {
            scale: 1
          }).start();
          if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].stop_ani) {
            var winNode = cc.find(cfg.symbol[id].win_node, this.node);
            winNode.active = true;
            winNode.getComponent(cc.Animation).play(cfg.symbol[id].stop_ani.name);
            winNode.getComponent(cc.Animation).off("stop");
            winNode.getComponent(cc.Animation).on("stop", function() {
              winNode.active = false;
            });
          }
        } else this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ]
}, {}, [ "Loki_BonusGame", "Loki_BonusReel", "Loki_BonusSlots", "Loki_Cfg", "Loki_Collect", "Loki_FreeGame", "Loki_GameData", "Loki_Logic", "Loki_Popup", "Loki_PrizePool", "Loki_Reel", "Loki_Slots", "Loki_Symbol" ]);