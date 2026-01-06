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
  Sumo_BallGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "924d8eVq7JE2oVSpps1AnJ5", "Sumo_BallGame");
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
        title: cc.Node,
        spine: cc.Node,
        base_prize: cc.Node,
        result: cc.Node,
        btn_start: cc.Node,
        rate: cc.Node,
        _endCallback: null
      },
      startBallGame: function startBallGame(gameInfo) {
        var _this = this;
        return new Promise(function(success) {
          Global.SlotsSoundMgr.stopBgm();
          Global.SlotsSoundMgr.playBgm("ballbgm");
          _this.node.active = true;
          _this.reset();
          _this._endCallback = success;
          _this.base_prize.getComponent(cc.Label).string = Global.formatNumShort(gameInfo.startPrize, 0);
          _this.title.active = true;
          _this.btn_start.off(cc.Node.EventType.TOUCH_END);
          var func = function() {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
              var req, result, skin, particle, startPos, endPos;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                 case 0:
                  _this.btn_start.off(cc.Node.EventType.TOUCH_END);
                  _this.title.active = false;
                  Global.SlotsSoundMgr.playEffect("Bonus_Bangup_LOOP");
                  req = {
                    rtype: 3
                  };
                  _context.next = 6;
                  return cc.vv.gameData.reqSubGame(req);

                 case 6:
                  result = _context.sent;
                  if (!(200 === result.code)) {
                    _context.next = 42;
                    break;
                  }
                  skin = "DJ";
                  result.data.mapInfo.gameInfo.mult <= 20 ? skin = "MJ" : result.data.mapInfo.gameInfo.mult <= 40 ? skin = "XJ" : result.data.mapInfo.gameInfo.mult <= 60 ? skin = "ZJ" : result.data.mapInfo.gameInfo.mult <= 80 && (skin = "J");
                  _this.spine.getComponent(sp.Skeleton).setSkin(skin);
                  cc.vv.gameData.setMapInfo(result.data.mapInfo);
                  _this.spine.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                  _this.spine.getComponent(sp.Skeleton).addAnimation(0, "animation1", false);
                  _this.spine.getComponent(sp.Skeleton).addAnimation(0, "animation2", true);
                  _context.next = 17;
                  return cc.vv.gameData.awaitTime(4);

                 case 17:
                  _this.result.active = true;
                  _this.result.getComponent(cc.Label).string = result.data.mapInfo.gameInfo.mult + "X";
                  _this.result.scale = 0;
                  cc.tween(_this.result).to(.5, {
                    scale: 1
                  }, {
                    easing: "backOut"
                  }).start();
                  _context.next = 23;
                  return cc.vv.gameData.awaitTime(.5);

                 case 23:
                  particle = cc.instantiate(cc.find("fly_star", _this.node.parent));
                  particle.active = true;
                  particle.parent = _this.node;
                  startPos = _this.result.convertToWorldSpaceAR(cc.v2(0, 0));
                  startPos = _this.node.convertToNodeSpaceAR(startPos);
                  particle.position = startPos;
                  endPos = _this.rate.convertToWorldSpaceAR(cc.v2(0, 0));
                  endPos = _this.node.convertToNodeSpaceAR(endPos);
                  cc.tween(particle).to(.5, {
                    position: endPos
                  }).removeSelf().start();
                  _context.next = 34;
                  return cc.vv.gameData.awaitTime(.5);

                 case 34:
                  _this.rate.getComponent(cc.Label).string = result.data.mapInfo.gameInfo.mult + "X";
                  _context.next = 37;
                  return cc.vv.gameData.awaitTime(1);

                 case 37:
                  _context.next = 39;
                  return cc.vv.gameData.GetSlotsScript().popMiniGameResult(result.data.mapInfo.gameInfo.winCoin, 4);

                 case 39:
                  Global.SlotsSoundMgr.stopBgm();
                  Global.SlotsSoundMgr.playNormalBgm();
                  _this._endCallback && _this._endCallback();

                 case 42:
                 case "end":
                  return _context.stop();
                }
              }, _callee);
            }));
            return function func() {
              return _ref.apply(this, arguments);
            };
          }();
          cc.vv.gameData.checkAutoPlay(_this.btn_start, func);
          _this.btn_start.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                _this.btn_start.stopAllActions();
                _context2.next = 3;
                return func();

               case 3:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          })));
        });
      },
      reset: function reset() {
        this._endCallback = null;
        this.rate.getComponent(cc.Label).string = "";
        this.title.active = true;
        this.result.active = false;
        this.spine.getComponent(sp.Skeleton).clearTracks();
        this.spine.getComponent(sp.Skeleton).setToSetupPose();
      }
    });
    cc._RF.pop();
  }, {} ],
  Sumo_BallonGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01b86cLRqlKPK4ZkW0lhRbz", "Sumo_BallonGame");
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
        base_prize: cc.Node,
        rate: cc.Node,
        free_times: cc.Node,
        _endCallback: null,
        _restCnt: 0
      },
      startBallonGame: function startBallonGame(gameInfo) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this.node.active = true;
                _this.reset();
                _this._slotsScript = cc.find("slots", _this.node).addComponent("Sumo_BallonSlots");
                _this._endCallback = success;
                _this._restCnt = gameInfo.restCnt;
                _this.base_prize.getComponent(cc.Label).string = Global.formatNumShort(gameInfo.startPrize, 0);
                _this.rate.getComponent(cc.Label).string = "";
                _this._slotsScript.Init();
                _context.next = 10;
                return cc.vv.gameData.awaitTime(1);

               case 10:
                cc.vv.gameData.setIsBallonGame(true);
                _this.reqSpin();

               case 12:
               case "end":
                return _context.stop();
              }
            }, _callee);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      reset: function reset() {
        this._restCnt = 0;
        this._endCallback = null;
      },
      generateBallon: function generateBallon(resultRate) {
        var _this2 = this;
        var rates = [ 10, 20, 25, 30, 100 ];
        var skins = [ "hong", "huang", "lan", "zi" ];
        var resultBallonIndex = Math.floor(5 * Math.random() + 5);
        var _loop = function _loop(i) {
          var ballon = cc.instantiate(cc.find("ballon", _this2.node));
          ballon.active = true;
          if (i === resultBallonIndex) {
            cc.find("rate_down", ballon).getComponent(cc.Label).string = resultRate + "X";
            cc.find("rate_up", ballon).getComponent(cc.Label).string = resultRate + "X";
          } else {
            var rate = rates[Math.floor(5 * Math.random())];
            cc.find("rate_down", ballon).getComponent(cc.Label).string = rate + "X";
            cc.find("rate_up", ballon).getComponent(cc.Label).string = rate + "X";
          }
          ballon.parent = _this2.node;
          ballon.y = -cc.winSize.height / 2 - 200;
          ballon.x = Math.random() > .5 ? 200 * Math.random() - 300 : 200 * Math.random() + 100;
          ballon.getComponent(sp.Skeleton).setSkin(skins[Math.floor(4 * Math.random())]);
          ballon.getComponent(sp.Skeleton).setAnimation(0, "qiqiu_idle", true);
          i === resultBallonIndex ? cc.tween(ballon).delay(.5 * i).to(2, {
            y: 250
          }).call(function() {
            ballon.getComponent(sp.Skeleton).setAnimation(0, "qiqiu_win", true);
          }).delay(6 - .5 * i).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var particle, endPos, fly_star_end;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sgCollect");
                particle = cc.instantiate(cc.find("fly_star", _this2.node.parent));
                particle.active = true;
                particle.parent = _this2.node;
                particle.position = ballon.position;
                endPos = _this2.rate.convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = _this2.node.convertToNodeSpaceAR(endPos);
                cc.tween(particle).to(.5, {
                  position: endPos
                }).removeSelf().start();
                _context2.next = 10;
                return cc.vv.gameData.awaitTime(.5);

               case 10:
                fly_star_end = cc.find("fly_star_end", _this2.rate.parent);
                fly_star_end.active = true;
                fly_star_end.getComponent(sp.Skeleton).setAnimation(0, "multi_end3", false);
                _context2.next = 15;
                return cc.vv.gameData.awaitTime(.5);

               case 15:
                fly_star_end.active = false;
                _this2.rate.scale = 1;
                _this2.rate.getComponent(cc.Label).string = resultRate + "X";
                cc.tween(_this2.rate).to(.1, {
                  scale: 1.1
                }).to(.1, {
                  scale: 1
                }).start();
                _context2.next = 21;
                return cc.vv.gameData.awaitTime(.2);

               case 21:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }))).to(.5, {
            opacity: 0
          }).removeSelf().start() : cc.tween(ballon).delay(.5 * i).to(3, {
            y: cc.winSize.height / 2 + 200
          }).removeSelf().start();
        };
        for (var i = 0; i < 10; i++) _loop(i);
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var winCoin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this3.ShowWinTrace();
              winCoin = _this3._subGameData.gameInfo.slot.winCoin * _this3._subGameData.gameInfo.slot.mult;
              cc.vv.gameData.GetSlotsScript().ShowBottomWin(winCoin, winCoin, false, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    _context3.next = 2;
                    return cc.vv.gameData.awaitTime(.5);

                   case 2:
                    if (!_this3._subGameData.gameInfo.isEnd) {
                      _context3.next = 9;
                      break;
                    }
                    _context3.next = 5;
                    return cc.vv.gameData.GetSlotsScript().popMiniGameResult(_this3._subGameData.gameInfo.winCoin, 5);

                   case 5:
                    cc.vv.gameData.setIsBallonGame(false);
                    _this3._endCallback && _this3._endCallback();
                    _context3.next = 10;
                    break;

                   case 9:
                    _this3.reqSpin();

                   case 10:
                   case "end":
                    return _context3.stop();
                  }
                }, _callee3);
              })));

             case 3:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._subGameData.gameInfo.slot.zjLuXian.length; i++) {
          var item = this._subGameData.gameInfo.slot.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this._slotsScript.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      getSubGameData: function getSubGameData() {
        return this._subGameData;
      },
      GetLastStopSlotReel: function GetLastStopSlotReel() {
        return this._slotsScript.GetLastStopReelIdx();
      },
      StopMove: function StopMove() {
        this._slotsScript.StopMove();
      },
      reqSpin: function reqSpin() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var reqdata, result;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this4._subGameData = null;
              _this4._restCnt--;
              _this4.free_times.getComponent(cc.Label).string = 3 - _this4._restCnt + "/3";
              _this4.rate.getComponent(cc.Label).string = "";
              _this4._slotsScript.StartMove();
              reqdata = {
                rtype: 3
              };
              _context5.next = 8;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 8:
              result = _context5.sent;
              if (200 === result.code && !result.spcode) {
                _this4._subGameData = result.data.mapInfo;
                cc.vv.gameData.setMapInfo(result.data.mapInfo);
                _this4.generateBallon(_this4._subGameData.gameInfo.mults[2 - _this4._restCnt]);
                _this4._slotsScript.SetStopTime(6);
                _this4._slotsScript.SetSlotsResult(result.data.mapInfo.gameInfo.slot.cards);
              }

             case 10:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Sumo_BallonReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64c77uvWrpJ64QVV5Jfkclx", "Sumo_BallonReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
      },
      playReelStop: function playReelStop() {
        this._super();
        this._reelIdx / 5 !== 0 && this._reelIdx % 5 !== 4 || Global.SlotsSoundMgr.playEffect("reelstop");
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var idx = cc.vv.gameData.getBallonScript().GetLastStopSlotReel();
        if (this._reelIdx === idx) {
          cc.log(cc.js.formatStr("OnReelSpinEnd, %s", idx));
          cc.vv.gameData.getBallonScript().OnSpinEnd();
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
  Sumo_BallonSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5296td4dtMlJYp8KtPXN5k", "Sumo_BallonSlots");
    "use strict";
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
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this._topAniNode = cc.find("top_ani", this.node);
        this.createReels(this._col, this._row);
      },
      createReels: function createReels(col, row) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          if (!node.getComponent("Sumo_BallonReel")) {
            var scp = node.addComponent("Sumo_BallonReel");
            scp.Init(i, row, this._topAniNode);
            this._reels.push(scp);
          }
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return (reelIdx % 5 + Math.floor(reelIdx / 5)) * nIter;
      },
      OnSpinEnd: function OnSpinEnd() {},
      CanStopSlot: function CanStopSlot() {
        return null != cc.vv.gameData.getBallonScript().getSubGameData();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Sumo_BonusGameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4787dP0qlBDbaQpMqzitb2b", "Sumo_BonusGameManager");
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
        bonus_bg: cc.Node,
        mult_root: cc.Node,
        top_level: cc.Node,
        choice_tips: cc.Node,
        choice_icon: cc.Node,
        level_layout: cc.Node,
        level_child: cc.Node,
        arrow_root: cc.Node,
        arrow: cc.Node,
        mult_glow: cc.Node,
        tips_glow: cc.Node,
        bg_quanpan: cc.Node,
        _exitCallBack: null,
        _curCollectNum: 0,
        _subGameData: null
      },
      Init: function Init(bonusGame) {
        cc.vv.gameData.getDeskInfo().bonusGame = bonusGame;
        this.bonus_bg.active = true;
        this.node.active = true;
        this.bg_quanpan.active = false;
        this.node.getComponent("Sumo_BonusSlots") || (this._slotsScript = this.node.addComponent("Sumo_BonusSlots"));
        cc.find("right", this.top_level).getComponent(cc.Label).string = bonusGame.prizeMap[24];
        cc.vv.gameData.GetSlotsScript().node.active = false;
        for (var i = 3; i < bonusGame.prizeMap.length - 1; i++) {
          var rate = bonusGame.prizeMap[i];
          var node = cc.instantiate(this.level_child);
          node.parent = this.level_layout;
          node.active = true;
          cc.find("left", node).getComponent(cc.Label).string = i + 1;
          cc.find("right", node).getComponent(cc.Label).string = rate;
        }
        this.choice_icon.getComponent("ImgSwitchCmp").setIndex(bonusGame.card - 4);
        this.calculateLayoutAndTipsPos(bonusGame.idxs.length);
        this._curCollectNum = bonusGame.idxs.length;
        for (var _i = 1; _i < 5; _i++) cc.find("mult_" + _i, this.arrow_root).getComponent(cc.Label).string = bonusGame.prizeMap[24] * bonusGame.mults[_i] + "X";
      },
      calculateLayoutAndTipsPos: function calculateLayoutAndTipsPos(num) {
        if (num >= 21) {
          this.choice_tips.y = 40 * (num - 21);
          this.level_layout.y = -680;
        } else if (num >= 8) {
          this.choice_tips.y = 0;
          this.level_layout.y = 40 * (8 - num) - 160;
        } else {
          this.choice_tips.y = 40 * (num - 8);
          this.level_layout.y = -160;
        }
      },
      reset: function reset() {
        this.level_layout.removeAllChildren();
        this.level_layout.y = 0;
        this._exitCallBack = null;
        this._curCollectNum = 0;
      },
      startBonusGame: function startBonusGame(bonusGame) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      Global.SlotsSoundMgr.stopBgm();
                      Global.SlotsSoundMgr.playBgm("bgbgm");
                      _this.reset();
                      _this.Init(bonusGame);
                      _this._exitCallBack = success;
                      cc.vv.gameData.setIsBonusGame(true);
                      _this._slotsScript.Init();
                      _this._slotsScript.reconnectInitSymbol();
                      _context.next = 10;
                      return cc.vv.gameData.awaitTime(1);

                     case 10:
                      _this.reqSpin();

                     case 11:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function(_x) {
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
      exitBonusGame: function exitBonusGame() {
        cc.vv.gameData.setIsBonusGame(false);
      },
      StopMove: function StopMove() {
        this._slotsScript.StopMove();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var symbol, skins, _loop, i, _iterator, _step, idx, _symbol;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              if (!_this2._subGameData.spIdx) {
                _context3.next = 14;
                break;
              }
              symbol = _this2._slotsScript.GetSymbolByIdx(_this2._subGameData.spIdx);
              symbol.playTriggerMultAnimation();
              Global.SlotsSoundMgr.playEffect("arrowUp");
              _this2.arrow.active = true;
              skins = [ "lv", "lan", "zi", "hong" ];
              _this2.arrow.getComponent(sp.Skeleton).setSkin(skins[_this2._subGameData.currMult - 2]);
              _this2.arrow.getComponent(sp.Skeleton).setAnimation(0, "jiantou_02", false);
              _this2.arrow.y = -160;
              cc.tween(_this2.arrow).to(.5, {
                y: 160
              }).call(function() {
                _this2.arrow.active = false;
              }).start();
              _loop = function _loop(i) {
                var child = _this2.level_layout.children[i];
                cc.tween(child).delay(.1 * i + .2).call(function() {
                  var color = [ cc.color(52, 206, 13), cc.color(12, 152, 236), cc.color(245, 60, 238), cc.color(239, 41, 37) ];
                  cc.find("left", child).color = color[_this2._subGameData.currMult - 2];
                  cc.find("equal", child).color = color[_this2._subGameData.currMult - 2];
                  cc.find("right", child).color = color[_this2._subGameData.currMult - 2];
                }).to(.1, {
                  scale: 1.1
                }).to(.1, {
                  scale: 1
                }).start();
              };
              for (i = 0; i < _this2.level_layout.childrenCount; i++) _loop(i);
              _context3.next = 14;
              return cc.vv.gameData.awaitTime(1.5);

             case 14:
              _context3.next = 16;
              return _this2.moveTips(_this2._subGameData.idxs.length);

             case 16:
              _iterator = _createForOfIteratorHelper(_this2._subGameData.idxs);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  idx = _step.value;
                  _symbol = _this2._slotsScript.GetSymbolByIdx(idx);
                  _symbol.showBonusKuang();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              if (!_this2._subGameData.isEnd) {
                _context3.next = 42;
                break;
              }
              Global.SlotsSoundMgr.stopBgm();
              if (!(25 === _this2._subGameData.idxs.length)) {
                _context3.next = 27;
                break;
              }
              Global.SlotsSoundMgr.playEffect("bgAll");
              _this2.bg_quanpan.active = true;
              _this2.bg_quanpan.getComponent(sp.Skeleton).setAnimation(0, "BG_quanpan_intro", false);
              _this2.bg_quanpan.getComponent(sp.Skeleton).addAnimation(0, "BG_quanpan_idle", true);
              _context3.next = 27;
              return cc.vv.gameData.awaitTime(1);

             case 27:
              _context3.next = 29;
              return cc.vv.gameData.awaitTime(1);

             case 29:
              _context3.next = 31;
              return cc.vv.gameData.GetSlotsScript().popBonusResult(_this2._subGameData.winCoin);

             case 31:
              cc.vv.gameData.GetSlotsScript().cutSceneBonus();
              _context3.next = 34;
              return cc.vv.gameData.awaitTime(1.5);

             case 34:
              _this2.exitBonusGame();
              cc.find("slots", _this2.node.parent).active = true;
              _this2.bonus_bg.active = false;
              _this2.node.active = false;
              cc.vv.gameData.AddCoin(_this2._subGameData.winCoin);
              cc.vv.gameData.GetSlotsScript().ShowBottomWin(_this2._subGameData.winCoin, _this2._subGameData.winCoin, true, function() {
                _this2._exitCallBack && _this2._exitCallBack();
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                cc.vv.gameData.GetSlotsScript().CanDoNextRound();
              });
              _context3.next = 45;
              break;

             case 42:
              _context3.next = 44;
              return cc.vv.gameData.awaitTime(1);

             case 44:
              _this2.reqSpin();

             case 45:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      moveTips: function moveTips(targetNum) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var i;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _this3.mult_glow.active = true;
              i = 0;

             case 2:
              if (!(i < targetNum - _this3._curCollectNum)) {
                _context4.next = 10;
                break;
              }
              Global.SlotsSoundMgr.playEffect("stripUp");
              _this3.choice_tips.y < 0 ? cc.tween(_this3.choice_tips).call(function() {
                _this3.tips_glow.active = true;
                _this3.tips_glow.getComponent(sp.Skeleton).setAnimation(0, "glow", false);
              }).by(.3, {
                y: 40
              }).start() : -680 === _this3.level_layout.y ? cc.tween(_this3.choice_tips).call(function() {
                _this3.tips_glow.active = true;
                _this3.tips_glow.getComponent(sp.Skeleton).setAnimation(0, "glow", false);
              }).by(.3, {
                y: 40
              }).start() : cc.tween(_this3.level_layout).call(function() {
                _this3.tips_glow.active = true;
                _this3.tips_glow.getComponent(sp.Skeleton).setAnimation(0, "glow", false);
              }).by(.3, {
                y: -40
              }).start();
              _context4.next = 7;
              return cc.vv.gameData.awaitTime(.4);

             case 7:
              i++;
              _context4.next = 2;
              break;

             case 10:
              _this3._curCollectNum = targetNum;
              _this3.mult_glow.active = false;

             case 12:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      getSubGameData: function getSubGameData() {
        return this._subGameData;
      },
      GetLastStopSlotReel: function GetLastStopSlotReel() {
        return this._slotsScript.GetLastStopReelIdx();
      },
      reqSpin: function reqSpin() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var reqdata, result;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this4._subGameData = null;
              _this4._curTimes--;
              _this4._slotsScript.StartMove(cc.vv.gameData.getDeskInfo().bonusGame.idxs);
              reqdata = {
                rtype: 5
              };
              _context5.next = 6;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 6:
              result = _context5.sent;
              if (200 === result.code && !result.spcode) {
                _this4._subGameData = result.data.bonusGame;
                cc.vv.gameData.getDeskInfo().bonusGame = result.data.bonusGame;
                _this4._slotsScript.setSpinResult(result.data.bonusGame);
              }

             case 8:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    });
    cc._RF.pop();
  }, {} ],
  Sumo_BonusReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fdf77UtYolOBrB0eb+ArPS3", "Sumo_BonusReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
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
      playReelStop: function playReelStop() {
        this._super();
        this._reelIdx / 5 !== 0 && this._reelIdx % 5 !== 4 || Global.SlotsSoundMgr.playEffect("reelstop");
      },
      playStopAnim: function playStopAnim() {
        var symbol = this._symbols[0];
        if (symbol.GetShowId() === cc.vv.gameData.GetBonusGame().spIdx) {
          Global.SlotsSoundMgr.playEffect("reelarrow");
          symbol.playStopAnimation();
        }
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
  Sumo_BonusSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "929d67hUkJFPYmIkYpFCcdG", "Sumo_BonusSlots");
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
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this._topAniNode = cc.find("top_ani", this.node);
        this.createReels(this._col, this._row);
      },
      createReels: function createReels(col, row) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          if (!node.getComponent("Sumo_BonusReel")) {
            var scp = node.addComponent("Sumo_BonusReel");
            scp.Init(i, row, this._topAniNode);
            this._reels.push(scp);
          }
        }
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return (reelIdx % 5 + Math.floor(reelIdx / 5)) * nIter;
      },
      OnSpinEnd: function OnSpinEnd() {},
      StartMove: function StartMove(idxs) {
        this._bStopRightnow = null;
        this._gameInfo = null;
        var reels = [];
        var reelIdxs = [];
        this._reels.forEach(function(reel) {
          var include = false;
          var _iterator = _createForOfIteratorHelper(idxs), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var index = _step.value;
              if (index === reel.GetReelIdx() + 1) {
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
        var randomSymbols = [ 14, 14, 14, 14, 14 ];
        for (var i = 1; i <= this._cfg.col; i++) {
          var randIdx = Global.random(1, randomSymbols.length);
          var randVal = randomSymbols[randIdx - 1];
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
            var _iterator2 = _createForOfIteratorHelper(bonusGame.idxs), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var index = _step2.value;
                if (index === i + 1) {
                  res.sid = bonusGame.card;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            bonusGame.spIdx && bonusGame.spIdx === i + 1 && (res.sid = 20 + bonusGame.currMult);
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
          var _iterator3 = _createForOfIteratorHelper(bonusGame.idxs), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var index = _step3.value;
              if (index === col + 1) {
                this._reels[col].GetSymbolByRow(0).ShowById(bonusGame.card);
                isBonus = true;
                break;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          isBonus || this._reels[col].GetSymbolByRow(0).ShowById(14);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Sumo_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "881beWok5VJBr5s8Sl89BDk", "Sumo_Cfg");
    "use strict";
    var _symbol, _outerRoad, _outerRoad2, _outerRoad3, _outerRoad4, _outerRoad5, _innerRoad;
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
          name: "Wild",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "Scatter_01",
          zIndex: 100
        },
        win_ani: {
          name: "Scatter_02",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        win_node: "animation_4",
        stop_ani: {
          name: "H1_01",
          zIndex: 100
        },
        win_ani: {
          name: "H1_02",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5",
        win_node: "animation_5",
        win_ani: {
          name: "H2",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 6, {
        node: "symbol_6",
        win_node: "animation_6",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 7, {
        node: "symbol_7",
        win_node: "animation_7",
        win_ani: {
          name: "H4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 8, {
        node: "symbol_8",
        win_node: "animation_8",
        win_ani: {
          name: "H5",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 9, {
        node: "symbol_9"
      }), _defineProperty(_symbol, 10, {
        node: "symbol_10"
      }), _defineProperty(_symbol, 11, {
        node: "symbol_11"
      }), _defineProperty(_symbol, 12, {
        node: "symbol_12"
      }), _defineProperty(_symbol, 13, {
        node: "symbol_13"
      }), _defineProperty(_symbol, 14, {
        node: "symbol_14"
      }), _defineProperty(_symbol, 22, {
        node: "symbol_22",
        win_node: "animation_22",
        stop_ani: {
          name: "jiantou_01",
          zIndex: 100
        },
        trigger_ani: {
          name: "jiantou_02",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 23, {
        node: "symbol_23",
        win_node: "animation_23",
        stop_ani: {
          name: "jiantou_01",
          zIndex: 100
        },
        trigger_ani: {
          name: "jiantou_02",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 24, {
        node: "symbol_24",
        win_node: "animation_24",
        stop_ani: {
          name: "jiantou_01",
          zIndex: 100
        },
        trigger_ani: {
          name: "jiantou_02",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 25, {
        node: "symbol_25",
        win_node: "animation_25",
        stop_ani: {
          name: "jiantou_01",
          zIndex: 100
        },
        trigger_ani: {
          name: "jiantou_02",
          zIndex: 400
        }
      }), _defineProperty(_symbol, 101, {
        node: "symbol_101",
        win_node: "animation_101",
        win_ani: {
          name: "Double_Wild",
          zIndex: 300
        }
      }), _symbol),
      buildingCfg: [ {
        innerRoad: "road_nei_1",
        outerRoad: (_outerRoad = {}, _defineProperty(_outerRoad, 2, "road_wai_1"), _defineProperty(_outerRoad, 5, "road_wai_5"), 
        _outerRoad),
        prevBuilding: [ 0, 2, 5 ]
      }, {
        innerRoad: "road_nei_2",
        outerRoad: (_outerRoad2 = {}, _defineProperty(_outerRoad2, 1, "road_wai_1"), _defineProperty(_outerRoad2, 3, "road_wai_2"), 
        _outerRoad2),
        prevBuilding: [ 0, 1, 3 ]
      }, {
        innerRoad: "road_nei_3",
        outerRoad: (_outerRoad3 = {}, _defineProperty(_outerRoad3, 2, "road_wai_2"), _defineProperty(_outerRoad3, 4, "road_wai_3"), 
        _outerRoad3),
        prevBuilding: [ 0, 2, 4 ]
      }, {
        innerRoad: "road_nei_4",
        outerRoad: (_outerRoad4 = {}, _defineProperty(_outerRoad4, 3, "road_wai_3"), _defineProperty(_outerRoad4, 5, "road_wai_4"), 
        _outerRoad4),
        prevBuilding: [ 0, 3, 5 ]
      }, {
        innerRoad: "road_nei_5",
        outerRoad: (_outerRoad5 = {}, _defineProperty(_outerRoad5, 1, "road_wai_5"), _defineProperty(_outerRoad5, 4, "road_wai_4"), 
        _outerRoad5),
        prevBuilding: [ 0, 1, 4 ]
      }, {
        innerRoad: (_innerRoad = {}, _defineProperty(_innerRoad, 1, "road_nei_1"), _defineProperty(_innerRoad, 2, "road_nei_2"), 
        _defineProperty(_innerRoad, 3, "road_nei_3"), _defineProperty(_innerRoad, 4, "road_nei_4"), 
        _defineProperty(_innerRoad, 5, "road_nei_5"), _innerRoad)
      } ],
      wheelCfg: [ [ 1, 6, 4, 3, 2, 1, 5, 4, 3, 2 ], [ 6, 4, 3, 2, 1, 5, 4, 3, 2, 1 ], [ 2, 1, 5, 4, 3, 2, 1, 6, 4, 3 ] ],
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Sumo_Slots",
        Reels: "Sumo_Reel",
        Symbols: "Sumo_Symbol"
      },
      col: 25,
      row: 1,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 120,
        height: 100
      },
      randomSymbols: [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      wildId: 1,
      scatterId: 2,
      collectSymbolId: 4,
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      autoModelDelay: 1,
      AddAntiTime: 1.5,
      cornerIdxs: [ 0, 4, 20, 24 ],
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 4,
        counts: [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1 ],
        antiNode: "tingpai",
        path: "games/Sumo/",
        reelStopSound: "",
        symbolStopSound: "reelsctr",
        antSound: "reelfast",
        antSpeed: 2e3
      }, {
        id: [ 4 ],
        mini: 4,
        counts: [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1 ],
        antiNode: "tingpai",
        path: "games/Sumo/",
        reelStopSound: "",
        symbolStopSound: "",
        antSound: "reelfast",
        antSpeed: 2e3
      }, {
        id: [ 5 ],
        mini: 4,
        counts: [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1 ],
        antiNode: "tingpai",
        path: "games/Sumo/",
        reelStopSound: "",
        symbolStopSound: "",
        antSound: "reelfast",
        antSpeed: 2e3
      }, {
        id: [ 6 ],
        mini: 4,
        counts: [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1 ],
        antiNode: "tingpai",
        path: "games/Sumo/",
        reelStopSound: "",
        symbolStopSound: "",
        antSound: "reelfast",
        antSpeed: 2e3
      }, {
        id: [ 7 ],
        mini: 4,
        counts: [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1 ],
        antiNode: "tingpai",
        path: "games/Sumo/",
        reelStopSound: "",
        symbolStopSound: "",
        antSound: "reelfast",
        antSpeed: 2e3
      }, {
        id: [ 8 ],
        mini: 4,
        counts: [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1 ],
        antiNode: "tingpai",
        path: "games/Sumo/",
        reelStopSound: "",
        symbolStopSound: "",
        antSound: "reelfast",
        antSpeed: 2e3
      } ],
      helpItems: [ "games/Sumo/prefab/help_item_1", "games/Sumo/prefab/help_item_2" ],
      commEffect: {
        path: "games/Sumo/",
        win1: [ "win_a", "win_end" ],
        win2: [ "win_b", "win_end" ]
      },
      normalBgm: "ngbgm",
      sysFloatOffsetPos: cc.v2(0, 140)
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Sumo_GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0eda0LMTzZFFLBUguYEsqIc", "Sumo_GameData");
    "use strict";
    cc.Class({
      extends: require("LMSlots_GameData_Base"),
      properties: {
        _mapInfo: null
      },
      RegisterMsg: function RegisterMsg() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, this);
      },
      UnregisterMsg: function UnregisterMsg() {
        this._super();
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameAction, false, this);
      },
      setMapInfo: function setMapInfo(info) {
        this._deskInfo.mapInfo = info;
      },
      getMapInfo: function getMapInfo() {
        return this._deskInfo.mapInfo;
      },
      isFreeOver: function isFreeOver() {
        return !!this._gameInfo && (this._gameInfo.allFreeCnt > 0 && 0 === this._gameInfo.freeCnt);
      },
      isInFreeGame: function isInFreeGame() {
        return this._deskInfo.restFreeCount >= 0 && this._deskInfo.allFreeCount > 0;
      },
      GetBonusGame: function GetBonusGame() {
        return this._gameInfo && this._gameInfo.bonusGame ? this._gameInfo.bonusGame : this._deskInfo.bonusGame;
      },
      setIsBonusGame: function setIsBonusGame(val) {
        this._isBonusGame = val;
      },
      isBonusGame: function isBonusGame() {
        return this._isBonusGame;
      },
      SetBonusScript: function SetBonusScript(scp) {
        this._bonusScp = scp;
      },
      GetBonusScript: function GetBonusScript() {
        return this._bonusScp;
      },
      setIsBallonGame: function setIsBallonGame(val) {
        this._isBallonGame = val;
      },
      isBallonGame: function isBallonGame() {
        return this._isBallonGame;
      },
      setBallonScript: function setBallonScript(scp) {
        this._ballonScript = scp;
      },
      getBallonScript: function getBallonScript() {
        return this._ballonScript;
      },
      setIsZooGame: function setIsZooGame(val) {
        this._isZooGame = val;
      },
      isZooGame: function isZooGame() {
        return this._isZooGame;
      },
      setZooScript: function setZooScript(scp) {
        this._zooScript = scp;
      },
      getZooScript: function getZooScript() {
        return this._zooScript;
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
  Sumo_IceGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f0115nHqPdDqoOxd3xfbf3n", "Sumo_IceGame");
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
    var cakeCfg = [ 4, 4, 4, 4, 3, 3 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        base_prize: cc.Node,
        rate: cc.Node,
        bowl: cc.Node,
        bowl_left: cc.Node,
        items: [ cc.Node ],
        tips: cc.Node,
        _endCallback: null,
        _canTouch: false
      },
      startIceGame: function startIceGame(gameInfo) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function(success) {
                _this.node.active = true;
                _this.reset();
                _this._endCallback = success;
                _this.base_prize.getComponent(cc.Label).string = Global.formatNumShort(gameInfo.startPrize, 0);
                _this.rate.getComponent(cc.Label).string = gameInfo.mult > 0 ? gameInfo.mult + "X" : "";
                for (var i = 0; i < 5; i++) {
                  var bowl = cc.find("bowl_" + (i + 1), _this.bowl_left);
                  bowl.active = i < gameInfo.restCnt;
                }
                var _loop = function _loop(_i) {
                  var item = _this.items[_i];
                  var boxLength = cakeCfg[_i];
                  var collectNum = gameInfo.currIceCreams.filter(function(value) {
                    return value === _i + 1;
                  }).length;
                  for (var j = 0; j < boxLength; j++) {
                    var box = cc.find("multi_box_" + (j + 1), item);
                    cc.find("select", box).active = j < collectNum;
                    cc.find("select", box).getComponent(sp.Skeleton).setAnimation(0, "kuang_jingzhen", true);
                  }
                };
                for (var _i = 0; _i < _this.items.length; _i++) _loop(_i);
                _this._canTouch = true;
                var touch = cc.find("touch", _this.bowl);
                touch.off(cc.Node.EventType.TOUCH_END);
                var func = function() {
                  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var req, result, info, leftBowl, cake, particle, endPos, fly_star_end, box, select, position, newBowl, _i2, _bowl;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        if (_this._canTouch) {
                          _context.next = 2;
                          break;
                        }
                        return _context.abrupt("return");

                       case 2:
                        Global.SlotsSoundMgr.playEffect("sgIceMake");
                        _this._canTouch = false;
                        req = {
                          rtype: 3
                        };
                        _context.next = 7;
                        return cc.vv.gameData.reqSubGame(req);

                       case 7:
                        result = _context.sent;
                        if (!(200 === result.code)) {
                          _context.next = 93;
                          break;
                        }
                        info = result.data.mapInfo.gameInfo;
                        cc.vv.gameData.setMapInfo(result.data.mapInfo);
                        _this.tips.active = false;
                        leftBowl = cc.find("bowl_" + (info.restCnt + 1), _this.bowl_left);
                        leftBowl.getComponent(sp.Skeleton).setAnimation(0, "bowl_end", false);
                        leftBowl.getComponent(sp.Skeleton).setCompleteListener(function() {
                          leftBowl.getComponent(sp.Skeleton).setCompleteListener(null);
                          leftBowl.active = false;
                        });
                        _this.bowl.getComponent(sp.Skeleton).setSkin("dianxin0" + info.currIceCream);
                        _this.bowl.getComponent(sp.Skeleton).setAnimation(0, "bowl_click", false);
                        _this.bowl.getComponent(sp.Skeleton).addAnimation(0, "result_idle", true);
                        _context.next = 20;
                        return cc.vv.gameData.awaitTime(2);

                       case 20:
                        Global.SlotsSoundMgr.playEffect("sgIceCollect");
                        cake = cc.find("cake", _this.items[info.currIceCream - 1]);
                        particle = cc.instantiate(cc.find("fly_star", _this.node.parent));
                        particle.active = true;
                        particle.parent = _this.node;
                        particle.position = _this.bowl.position;
                        endPos = cake.convertToWorldSpaceAR(cc.v2(0, 0));
                        endPos = _this.node.convertToNodeSpaceAR(endPos);
                        cc.tween(particle).to(.5, {
                          position: endPos
                        }).removeSelf().start();
                        _context.next = 31;
                        return cc.vv.gameData.awaitTime(.5);

                       case 31:
                        fly_star_end = cc.find("fly_star_end", cake);
                        fly_star_end.active = true;
                        fly_star_end.getComponent(sp.Skeleton).setAnimation(0, "fly_star_end", false);
                        _context.next = 36;
                        return cc.vv.gameData.awaitTime(.5);

                       case 36:
                        fly_star_end.active = false;
                        cc.log(info.currIceCreams.filter(function(value) {
                          return value === info.currIceCream;
                        }).length);
                        box = cc.find("multi_box_" + info.currIceCreams.filter(function(value) {
                          return value === info.currIceCream;
                        }).length, _this.items[info.currIceCream - 1]);
                        select = cc.find("select", box);
                        select.active = true;
                        select.getComponent(sp.Skeleton).setAnimation(0, "kuang", false);
                        select.getComponent(sp.Skeleton).addAnimation(0, "kuang_jingzhen", true);
                        Global.SlotsSoundMgr.playEffect("sgCollect");
                        particle = cc.instantiate(cc.find("fly_star", _this.node.parent));
                        particle.active = true;
                        particle.parent = _this.node;
                        position = box.convertToWorldSpaceAR(cc.v2(0, 0));
                        position = _this.node.convertToNodeSpaceAR(position);
                        particle.position = position;
                        if (!(info.currIceCreams.filter(function(value) {
                          return value === info.currIceCream;
                        }).length === cakeCfg[info.currIceCream - 1])) {
                          _context.next = 62;
                          break;
                        }
                        newBowl = cc.find("bowl_" + info.restCnt, _this.bowl_left);
                        endPos = newBowl.convertToWorldSpaceAR(cc.v2(0, 0));
                        endPos = _this.node.convertToNodeSpaceAR(endPos);
                        cc.tween(particle).to(.5, {
                          position: endPos
                        }).removeSelf().start();
                        _context.next = 57;
                        return cc.vv.gameData.awaitTime(.5);

                       case 57:
                        for (_i2 = 0; _i2 < 5; _i2++) {
                          _bowl = cc.find("bowl_" + (_i2 + 1), _this.bowl_left);
                          if (!_bowl.active && _i2 < info.restCnt) {
                            _bowl.active = true;
                            _bowl.getComponent(sp.Skeleton).setAnimation(0, "bowl_jingzhen", true);
                          }
                        }
                        _context.next = 60;
                        return cc.vv.gameData.awaitTime(.2);

                       case 60:
                        _context.next = 78;
                        break;

                       case 62:
                        endPos = _this.rate.convertToWorldSpaceAR(cc.v2(0, 0));
                        endPos = _this.node.convertToNodeSpaceAR(endPos);
                        cc.tween(particle).to(.5, {
                          position: endPos
                        }).removeSelf().start();
                        _context.next = 67;
                        return cc.vv.gameData.awaitTime(.5);

                       case 67:
                        fly_star_end = cc.find("fly_star_end", _this.rate.parent);
                        fly_star_end.active = true;
                        fly_star_end.getComponent(sp.Skeleton).setAnimation(0, "multi_end3", false);
                        _context.next = 72;
                        return cc.vv.gameData.awaitTime(.5);

                       case 72:
                        fly_star_end.active = false;
                        _this.rate.scale = 1;
                        _this.rate.getComponent(cc.Label).string = info.mult + "X";
                        cc.tween(_this.rate).to(.1, {
                          scale: 1.1
                        }).to(.1, {
                          scale: 1
                        }).start();
                        _context.next = 78;
                        return cc.vv.gameData.awaitTime(.2);

                       case 78:
                        if (!info.isEnd) {
                          _context.next = 86;
                          break;
                        }
                        _context.next = 81;
                        return cc.vv.gameData.awaitTime(1);

                       case 81:
                        _context.next = 83;
                        return cc.vv.gameData.GetSlotsScript().popMiniGameResult(info.winCoin, 3);

                       case 83:
                        _this._endCallback && _this._endCallback();
                        _context.next = 93;
                        break;

                       case 86:
                        _this.tips.active = true;
                        _this.bowl.getComponent(sp.Skeleton).setAnimation(0, "resultTobowl", false);
                        _this.bowl.getComponent(sp.Skeleton).addAnimation(0, "bowl_idle", true);
                        _context.next = 91;
                        return cc.vv.gameData.awaitTime(.5);

                       case 91:
                        _this._canTouch = true;
                        cc.vv.gameData.checkAutoPlay(touch, func);

                       case 93:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function func() {
                    return _ref.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(touch, func);
                touch.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      touch.stopAllActions();
                      _context2.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                })));
              }));

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      reset: function reset() {
        this._endCallback = null;
        this._canTouch = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  Sumo_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf484nQwIxGwZjs5epT2JIj", "Sumo_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _lockBonus: false
      },
      onLoad: function onLoad() {
        this._super();
        var deskInfo = cc.vv.gameData.getDeskInfo();
        this._lockBonus = deskInfo.needbet > deskInfo.currmult;
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
      },
      InitCommComponent: function InitCommComponent() {
        this._super();
        var script_bonus = cc.find("safe_node/bonus_slots", this.node).getComponent("Sumo_BonusGameManager");
        cc.vv.gameData.SetBonusScript(script_bonus);
        var script_ballon = cc.find("safe_node/ballon_game", this.node).getComponent("Sumo_BallonGame");
        cc.vv.gameData.setBallonScript(script_ballon);
        var script_zoo = cc.find("safe_node/zoo_game", this.node).getComponent("Sumo_ZooGame");
        cc.vv.gameData.setZooScript(script_zoo);
      },
      onUpdateBet: function onUpdateBet() {
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var script = cc.find("safe_node/slots/collect_node/bonus_node/lock", this.node).getComponent(sp.Skeleton);
        if (deskInfo.needbet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("unlock");
          script.setAnimation(0, "unlock", false);
          this._lockBonus = false;
        } else if (deskInfo.needbet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          Global.SlotsSoundMgr.playEffect("lock");
          this._lockBonus = true;
          script.setAnimation(0, "lock", false);
          script.addAnimation(0, "idle", true);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Sumo_Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "835eeJII6FL0YvcxxkZUGCL", "Sumo_Map");
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
    var InnerRoadPoint = 5;
    var OuterRoadPoint = 8;
    var buildingSkins = [ "ylc", "dwy", "bjl", "yxt", "mxt", "gc" ];
    cc.Class({
      extends: cc.Component,
      properties: {
        buildings: [ cc.Node ],
        roads: [ cc.Node ],
        chocolate_jackpot: cc.Node,
        base_prize: cc.Node,
        collect_buildings: [ cc.Node ],
        zhizhen: cc.Node,
        dialog_node: cc.Node,
        choose_area: cc.Node,
        next_area: cc.Node,
        next_area_icon: cc.Node,
        detail_game: cc.Node,
        detail_title: cc.Node,
        wheel_node: cc.Node,
        wheel: cc.Node,
        wheel_win: cc.Node,
        btn_back: cc.Node,
        _endCallback: null,
        _canSelect: false,
        _isInit: false,
        _curSelectBuilding: -1,
        _selectBuildingCallback: null
      },
      openMap: function openMap(mapInfo, showBtn) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
            var endPos, road, endPoint, _endPos;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
               case 0:
                _this.node.active = true;
                _this.node.y = cc.winSize.height;
                if (!_this._isInit) {
                  _this._isInit = true;
                  _this.reset();
                  _this.initMap(mapInfo, showBtn);
                }
                _this._endCallback = success;
                if (showBtn) {
                  _this.btn_back.active = true;
                  _this.btn_back.off("click");
                  _this.btn_back.on("click", function() {
                    Global.SlotsSoundMgr.playEffect("button");
                    Global.SlotsSoundMgr.playEffect("mapOut");
                    cc.tween(_this.node).by(.5, {
                      y: cc.winSize.height
                    }).call(function() {
                      _this.node.active = false;
                      cc.vv.gameData.GetSlotsScript().CanDoNextRound();
                      _this._endCallback && _this._endCallback();
                    }).start();
                  });
                } else _this.btn_back.active = false;
                Global.SlotsSoundMgr.playEffect("mapIn");
                cc.tween(_this.node).to(.5, {
                  y: 0
                }).start();
                if (showBtn) {
                  _context.next = 48;
                  break;
                }
                _context.next = 10;
                return cc.vv.gameData.awaitTime(.5);

               case 10:
                if (!(1 === mapInfo.state)) {
                  _context.next = 15;
                  break;
                }
                _context.next = 13;
                return _this.popChooseArea();

               case 13:
                _context.next = 48;
                break;

               case 15:
                if (!(3 === mapInfo.state)) {
                  _context.next = 26;
                  break;
                }
                endPos = _this.buildings[mapInfo.nextGame - 1].convertToWorldSpaceAR(cc.v2(0, 0));
                endPos = _this.zhizhen.parent.convertToNodeSpaceAR(endPos);
                cc.tween(_this.zhizhen).then(cc.jumpTo(.5, endPos, 50, 1)).call(function() {
                  cc.find("building", _this.buildings[mapInfo.nextGame - 1]).color = cc.Color.WHITE;
                }).start();
                _context.next = 21;
                return cc.vv.gameData.awaitTime(1);

               case 21:
                _context.next = 23;
                return _this.popDetail(mapInfo.nextGame);

               case 23:
                _this._endCallback && _this._endCallback();
                _context.next = 48;
                break;

               case 26:
                if (!(2 === mapInfo.state)) {
                  _context.next = 48;
                  break;
                }
                if (!(mapInfo.progressData.totalCnt >= mapInfo.progressData.needCnt && 0 !== mapInfo.progressData.totalCnt)) {
                  _context.next = 43;
                  break;
                }
                road = _this.getRoad(mapInfo.prevGame, mapInfo.nextGame);
                if (0 === mapInfo.prevGame) endPoint = cc.find("point_" + (5 - mapInfo.restStep), road); else if (6 === mapInfo.nextGame) endPoint = cc.find("point_" + mapInfo.restStep, road); else if (1 === mapInfo.prevGame) endPoint = 5 === mapInfo.nextGame ? cc.find("point_" + mapInfo.restStep, road) : cc.find("point_" + (8 - mapInfo.restStep), road); else if (5 === mapInfo.prevGame) endPoint = 1 === mapInfo.nextGame ? cc.find("point_" + (8 - mapInfo.restStep), road) : cc.find("point_" + mapInfo.restStep, road); else {
                  endPoint = mapInfo.nextGame - mapInfo.prevGame > 0 ? cc.find("point_" + (8 - mapInfo.restStep), road) : cc.find("point_" + mapInfo.restStep, road);
                  0 === mapInfo.restStep ? endPoint = _this.buildings[mapInfo.nextGame - 1] : mapInfo.restStep === OuterRoadPoint && (endPoint = _this.buildings[mapInfo.prevGame - 1]);
                }
                _endPos = endPoint.convertToWorldSpaceAR(cc.v2(0, 0));
                _endPos = _this.zhizhen.parent.convertToNodeSpaceAR(_endPos);
                Global.SlotsSoundMgr.playEffect("mapJump");
                cc.tween(_this.zhizhen).then(cc.jumpTo(.5, _endPos, 50, 1)).call(function() {
                  cc.find("finish", endPoint) ? cc.find("finish", endPoint).active = true : cc.find("building", endPoint).color = cc.Color.WHITE;
                }).start();
                _context.next = 36;
                return cc.vv.gameData.awaitTime(1);

               case 36:
                _context.next = 38;
                return _this.startWheel();

               case 38:
                _context.next = 40;
                return cc.vv.gameData.awaitTime(1);

               case 40:
                cc.tween(_this.node).by(.5, {
                  y: cc.winSize.height
                }).call(function() {
                  _this._endCallback && _this._endCallback();
                }).start();
                _context.next = 48;
                break;

               case 43:
                _context.next = 45;
                return _this.startWheel();

               case 45:
                _context.next = 47;
                return cc.vv.gameData.awaitTime(1);

               case 47:
                cc.tween(_this.node).by(.5, {
                  y: cc.winSize.height
                }).call(function() {
                  _this._endCallback && _this._endCallback();
                }).start();

               case 48:
               case "end":
                return _context.stop();
              }
            }, _callee);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      initMap: function initMap(mapInfo) {
        var _this2 = this;
        this.chocolate_jackpot.getComponent(cc.Label).string = mapInfo.superJackpot > 0 ? Global.FormatNumToComma(mapInfo.superJackpot) : "";
        mapInfo.totalCnt > 0 ? this.base_prize.getComponent(cc.Label).string = Global.formatNumShort(Number(Global.S2P(mapInfo.totalCoin / mapInfo.totalCnt, 0)), 0) : this.base_prize.getComponent(cc.Label).string = "";
        var _iterator = _createForOfIteratorHelper(this.collect_buildings), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var collectBuilding = _step.value;
            collectBuilding.active = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        for (var i = 0; i < mapInfo.completeGame.length; i++) {
          var building = this.collect_buildings[i];
          var buildingId = mapInfo.completeGame[i];
          building.active = true;
          building.getComponent("ImgSwitchCmp").setIndex(buildingId - 1);
        }
        var _loop = function _loop(_i) {
          (mapInfo.completeGame.includes(_i + 1) || mapInfo.nextGame === _i + 1) && (cc.find("building", _this2.buildings[_i]).color = cc.Color.WHITE);
          var building = _this2.buildings[_i];
          building.off(cc.Node.EventType.TOUCH_END);
          building.on(cc.Node.EventType.TOUCH_END, function() {
            if (!_this2._canSelect) return;
            var newInfo = cc.vv.gameData.getMapInfo();
            Global.SlotsSoundMgr.playEffect("mapLevelLight");
            if (_this2.canSelectBuilding(_i + 1)) {
              for (var j = 0; j < _this2.buildings.length; j++) newInfo.completeGame.includes(j + 1) || (cc.find("building", _this2.buildings[j]).color = cc.Color.GRAY);
              _this2._curSelectBuilding = _i + 1;
              cc.find("building", building).color = cc.Color.WHITE;
              var glow = cc.find("glow", building);
              glow.active = true;
              glow.getComponent(sp.Skeleton).setAnimation(0, "glow2", false);
              glow.getComponent(sp.Skeleton).setCompleteListener(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    glow.getComponent(sp.Skeleton).setCompleteListener(null);
                    glow.active = false;
                    _this2.popNextArea(_i + 1);

                   case 3:
                   case "end":
                    return _context2.stop();
                  }
                }, _callee2);
              })));
            }
          });
        };
        for (var _i = 0; _i < this.buildings.length; _i++) _loop(_i);
        var buildingCfg = cc.vv.gameData.getGameCfg().buildingCfg;
        if (0 === mapInfo.prevGame) if (0 !== mapInfo.nextGame) {
          var road = this.getRoadByName(buildingCfg[mapInfo.nextGame - 1].innerRoad);
          cc.find("lujing", road).active = true;
          cc.find("lujing", road).getComponent(sp.Skeleton).setAnimation(0, "lujing_idle", true);
          for (var _i2 = 1; _i2 < InnerRoadPoint; _i2++) {
            var point = cc.find("point_" + _i2, road);
            cc.find("finish", point).active = _i2 <= InnerRoadPoint - mapInfo.restStep;
          }
          if (mapInfo.restStep === InnerRoadPoint) {
            var pos = this.buildings[5].convertToWorldSpaceAR(cc.v2(0, 0));
            pos = this.zhizhen.parent.convertToNodeSpaceAR(pos);
            this.zhizhen.position = pos;
          } else if (0 === mapInfo.restStep) {
            var _pos = this.buildings[mapInfo.nextGame - 1].convertToWorldSpaceAR(cc.v2(0, 0));
            _pos = this.zhizhen.parent.convertToNodeSpaceAR(_pos);
            this.zhizhen.position = _pos;
          } else {
            var _pos2 = cc.find("point_" + (InnerRoadPoint - mapInfo.restStep), road).convertToWorldSpaceAR(cc.v2(0, 0));
            _pos2 = this.zhizhen.parent.convertToNodeSpaceAR(_pos2);
            this.zhizhen.position = _pos2;
          }
        } else {
          var _pos3 = this.buildings[5].convertToWorldSpaceAR(cc.v2(0, 0));
          _pos3 = this.zhizhen.parent.convertToNodeSpaceAR(_pos3);
          this.zhizhen.position = _pos3;
        } else if (6 === mapInfo.nextGame) {
          var _road = this.getRoadByName(buildingCfg[mapInfo.nextGame - 1].innerRoad[mapInfo.prevGame]);
          cc.find("lujing", _road).active = true;
          cc.find("lujing", _road).getComponent(sp.Skeleton).setAnimation(0, "lujing_idle", true);
          for (var _i3 = 1; _i3 < InnerRoadPoint; _i3++) {
            var _point = cc.find("point_" + _i3, _road);
            cc.find("finish", _point).active = _i3 <= InnerRoadPoint - mapInfo.restStep;
          }
          if (mapInfo.restStep === InnerRoadPoint) {
            var _pos4 = this.buildings[mapInfo.prevGame - 1].convertToWorldSpaceAR(cc.v2(0, 0));
            _pos4 = this.zhizhen.parent.convertToNodeSpaceAR(_pos4);
            this.zhizhen.position = _pos4;
          } else if (0 === mapInfo.restStep) {
            var _pos5 = this.buildings[mapInfo.nextGame - 1].convertToWorldSpaceAR(cc.v2(0, 0));
            _pos5 = this.zhizhen.parent.convertToNodeSpaceAR(_pos5);
            this.zhizhen.position = _pos5;
          } else {
            var _pos6 = cc.find("point_" + mapInfo.restStep, _road).convertToWorldSpaceAR(cc.v2(0, 0));
            _pos6 = this.zhizhen.parent.convertToNodeSpaceAR(_pos6);
            this.zhizhen.position = _pos6;
          }
        } else if (0 === mapInfo.nextGame) {
          var zhizhenPoint;
          zhizhenPoint = this.buildings[mapInfo.prevGame - 1];
          var _pos7 = zhizhenPoint.convertToWorldSpaceAR(cc.v2(0, 0));
          _pos7 = this.zhizhen.parent.convertToNodeSpaceAR(_pos7);
          this.zhizhen.position = _pos7;
        } else {
          var _road2 = this.getRoadByName(buildingCfg[mapInfo.prevGame - 1].outerRoad[mapInfo.nextGame]);
          cc.find("lujing", _road2).active = true;
          cc.find("lujing", _road2).getComponent(sp.Skeleton).setAnimation(0, "lujing_idle", true);
          var _zhizhenPoint;
          if (1 === mapInfo.prevGame) if (5 === mapInfo.nextGame) {
            _zhizhenPoint = cc.find("point_" + mapInfo.restStep, _road2);
            for (var _i4 = 1; _i4 < OuterRoadPoint; _i4++) {
              var _point2 = cc.find("point_" + _i4, _road2);
              cc.find("finish", _point2).active = _i4 >= mapInfo.restStep;
            }
          } else {
            _zhizhenPoint = cc.find("point_" + (OuterRoadPoint - mapInfo.restStep), _road2);
            for (var _i5 = 1; _i5 < OuterRoadPoint; _i5++) {
              var _point3 = cc.find("point_" + _i5, _road2);
              cc.find("finish", _point3).active = _i5 <= OuterRoadPoint - mapInfo.restStep;
            }
          } else if (5 === mapInfo.prevGame) if (1 === mapInfo.nextGame) {
            _zhizhenPoint = cc.find("point_" + (OuterRoadPoint - mapInfo.restStep), _road2);
            for (var _i6 = 1; _i6 < OuterRoadPoint; _i6++) {
              var _point4 = cc.find("point_" + _i6, _road2);
              cc.find("finish", _point4).active = _i6 <= OuterRoadPoint - mapInfo.restStep;
            }
          } else {
            _zhizhenPoint = cc.find("point_" + mapInfo.restStep, _road2);
            for (var _i7 = 1; _i7 < OuterRoadPoint; _i7++) {
              var _point5 = cc.find("point_" + _i7, _road2);
              cc.find("finish", _point5).active = _i7 >= mapInfo.restStep;
            }
          } else if (mapInfo.nextGame - mapInfo.prevGame > 0) {
            _zhizhenPoint = cc.find("point_" + (OuterRoadPoint - mapInfo.restStep), _road2);
            for (var _i8 = 1; _i8 < OuterRoadPoint; _i8++) {
              var _point6 = cc.find("point_" + _i8, _road2);
              cc.find("finish", _point6).active = _i8 <= OuterRoadPoint - mapInfo.restStep;
            }
          } else {
            _zhizhenPoint = cc.find("point_" + mapInfo.restStep, _road2);
            for (var _i9 = 1; _i9 < OuterRoadPoint; _i9++) {
              var _point7 = cc.find("point_" + _i9, _road2);
              cc.find("finish", _point7).active = _i9 >= mapInfo.restStep;
            }
          }
          0 === mapInfo.restStep ? _zhizhenPoint = this.buildings[mapInfo.nextGame - 1] : mapInfo.restStep === OuterRoadPoint && (_zhizhenPoint = this.buildings[mapInfo.prevGame - 1]);
          var _pos8 = _zhizhenPoint.convertToWorldSpaceAR(cc.v2(0, 0));
          _pos8 = this.zhizhen.parent.convertToNodeSpaceAR(_pos8);
          this.zhizhen.position = _pos8;
        }
      },
      finishMiniGame: function finishMiniGame(gameId, mapInfo) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              return _context4.abrupt("return", new Promise(function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(success) {
                  var building, _iterator2, _step2, collectBuilding, i, _building, icon, glow, flyIcon, startPos, collectIcon, endPos;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                     case 0:
                      building = _this3.buildings[gameId - 1];
                      if (!(6 === gameId)) {
                        _context3.next = 14;
                        break;
                      }
                      cc.vv.gameData.getMapInfo().prevGame = 0;
                      cc.vv.gameData.getMapInfo().nextGame = 0;
                      _this3.chocolate_jackpot.getComponent(cc.Label).string = "";
                      _this3.base_prize.getComponent(cc.Label).string = "";
                      _iterator2 = _createForOfIteratorHelper(_this3.collect_buildings);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                          collectBuilding = _step2.value;
                          collectBuilding.active = false;
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      for (i = 0; i < _this3.buildings.length; i++) {
                        _building = _this3.buildings[i];
                        cc.find("building", _building).color = 5 === i ? cc.Color.WHITE : cc.Color.GRAY;
                      }
                      _context3.next = 11;
                      return cc.vv.gameData.awaitTime(1);

                     case 11:
                      success();
                      _context3.next = 43;
                      break;

                     case 14:
                      icon = cc.find("icon", building);
                      if (!icon) {
                        _context3.next = 43;
                        break;
                      }
                      Global.SlotsSoundMgr.playEffect("mapLevelLight");
                      glow = cc.find("glow", icon);
                      glow.active = true;
                      glow.getComponent(sp.Skeleton).setAnimation(0, "Map_building_wancheng", false);
                      _context3.next = 22;
                      return cc.vv.gameData.awaitTime(.5);

                     case 22:
                      glow.active = false;
                      flyIcon = cc.instantiate(icon);
                      flyIcon.parent = _this3.node;
                      startPos = icon.convertToWorldSpaceAR(cc.v2(0, 0));
                      startPos = _this3.node.convertToNodeSpaceAR(startPos);
                      flyIcon.position = startPos;
                      collectIcon = _this3.collect_buildings[mapInfo.completeGame.length - 1];
                      endPos = collectIcon.convertToWorldSpaceAR(cc.v2(0, 0));
                      endPos = _this3.node.convertToNodeSpaceAR(endPos);
                      cc.tween(flyIcon).to(.5, {
                        position: endPos
                      }).removeSelf().start();
                      _context3.next = 34;
                      return cc.vv.gameData.awaitTime(.5);

                     case 34:
                      collectIcon.active = true;
                      collectIcon.getComponent("ImgSwitchCmp").setIndex(gameId - 1);
                      Global.SlotsSoundMgr.playEffect("mapSpotLight");
                      cc.find("glow", collectIcon).active = true;
                      cc.find("glow", collectIcon).getComponent(sp.Skeleton).setAnimation(0, "Map_building_wancheng", false);
                      _context3.next = 41;
                      return cc.vv.gameData.awaitTime(.5);

                     case 41:
                      cc.find("glow", collectIcon).active = false;
                      success();

                     case 43:
                     case "end":
                      return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function(_x2) {
                  return _ref3.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      canSelectBuilding: function canSelectBuilding(target) {
        var mapInfo = cc.vv.gameData.getMapInfo();
        var buildingCfg = cc.vv.gameData.getGameCfg().buildingCfg[target - 1];
        return 6 === target ? 5 === mapInfo.completeGame.length : 0 === mapInfo.completeGame.length || buildingCfg.prevBuilding.includes(mapInfo.prevGame);
      },
      getRoadByName: function getRoadByName(name) {
        var _iterator3 = _createForOfIteratorHelper(this.roads), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var road = _step3.value;
            if (road.name === name) return road;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return null;
      },
      getRoad: function getRoad(prev, target) {
        var buildingCfg = cc.vv.gameData.getGameCfg().buildingCfg;
        if (0 !== prev) return 6 === target ? this.getRoadByName(buildingCfg[target - 1].innerRoad[prev]) : this.getRoadByName(buildingCfg[prev - 1].outerRoad[target]);
        if (0 !== target) return this.getRoadByName(buildingCfg[target - 1].innerRoad);
      },
      popChooseArea: function popChooseArea() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
             case 0:
              return _context6.abrupt("return", new Promise(function() {
                var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var btn_start, func;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                     case 0:
                      _this4._selectBuildingCallback = success;
                      Global.SlotsSoundMgr.playEffect("popup");
                      _this4.dialog_node.active = true;
                      _this4.choose_area.active = true;
                      _this4.choose_area.scale = 0;
                      cc.tween(_this4.choose_area).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _context5.next = 8;
                      return cc.vv.gameData.awaitTime(.5);

                     case 8:
                      btn_start = cc.find("btn_start", _this4.choose_area);
                      func = function func() {
                        btn_start.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(_this4.choose_area).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          _this4.choose_area.active = false;
                          _this4.dialog_node.active = false;
                          _this4._canSelect = true;
                          var mapInfo = cc.vv.gameData.getMapInfo();
                          if (5 === mapInfo.completeGame.length) {
                            var building = _this4.buildings[5];
                            var glow = cc.find("glow", building);
                            glow.active = true;
                            glow.getComponent(sp.Skeleton).setSkin(buildingSkins[5]);
                            glow.getComponent(sp.Skeleton).setAnimation(0, "glow1", true);
                          } else for (var i = 0; i < 5; i++) {
                            var _building2 = _this4.buildings[i];
                            if (_this4.canSelectBuilding(i + 1)) {
                              var _glow = cc.find("glow", _building2);
                              _glow.active = true;
                              _glow.getComponent(sp.Skeleton).setSkin(buildingSkins[i]);
                              _glow.getComponent(sp.Skeleton).setAnimation(0, "glow1", true);
                            }
                          }
                        }).start();
                      };
                      cc.vv.gameData.checkAutoPlay(btn_start, func);
                      btn_start.on("click", function() {
                        btn_start.stopAllActions();
                        func();
                      });

                     case 12:
                     case "end":
                      return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function(_x3) {
                  return _ref4.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context6.stop();
            }
          }, _callee6);
        }))();
      },
      popNextArea: function popNextArea(target) {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          var btn_no, btn_yes;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              Global.SlotsSoundMgr.playEffect("popup");
              _this5.dialog_node.active = true;
              _this5.next_area.active = true;
              _this5.next_area.scale = 0;
              cc.tween(_this5.next_area).to(.5, {
                scale: 1
              }, {
                easing: "backOut"
              }).start();
              _this5.next_area_icon.getComponent("ImgSwitchCmp").setIndex(target - 1);
              _context9.next = 8;
              return cc.vv.gameData.awaitTime(.5);

             case 8:
              btn_no = cc.find("mapBgPopBoard/btn_no", _this5.next_area);
              btn_no.on("click", function() {
                btn_no.off("click");
                Global.SlotsSoundMgr.playEffect("button");
                _this5._canSelect = true;
                _this5._curSelectBuilding = -1;
                cc.tween(_this5.next_area).to(.5, {
                  scale: 0
                }, {
                  easing: "backIn"
                }).call(function() {
                  _this5.next_area.active = false;
                  _this5.dialog_node.active = false;
                  if (5 === cc.vv.gameData.getMapInfo().completeGame.length) {
                    var building = _this5.buildings[5];
                    var glow = cc.find("glow", building);
                    glow.active = true;
                    glow.getComponent(sp.Skeleton).setSkin(buildingSkins[5]);
                    glow.getComponent(sp.Skeleton).setAnimation(0, "glow1", true);
                  } else for (var i = 0; i < 5; i++) {
                    var _building3 = _this5.buildings[i];
                    if (_this5.canSelectBuilding(i + 1)) {
                      var _glow2 = cc.find("glow", _building3);
                      _glow2.active = true;
                      _glow2.getComponent(sp.Skeleton).setSkin(buildingSkins[i]);
                      _glow2.getComponent(sp.Skeleton).setAnimation(0, "glow1", true);
                    }
                  }
                }).start();
              });
              btn_yes = cc.find("mapBgPopBoard/btn_yes", _this5.next_area);
              btn_yes.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
                var req, result;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                   case 0:
                    btn_yes.off("click");
                    Global.SlotsSoundMgr.playEffect("button");
                    _this5._canSelect = false;
                    req = {
                      rtype: 1,
                      choiceGameId: _this5._curSelectBuilding
                    };
                    _context8.next = 6;
                    return cc.vv.gameData.reqSubGame(req);

                   case 6:
                    result = _context8.sent;
                    if (200 === result.code) {
                      cc.vv.gameData.setMapInfo(result.data.mapInfo);
                      cc.vv.gameData.GetSlotsScript().updateTargetSkin(result.data.mapInfo.nextGame);
                      cc.tween(_this5.next_area).to(.5, {
                        scale: 0
                      }, {
                        easing: "backIn"
                      }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                        var building, glow, i, bu, road, _i10, point, lujing;
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) switch (_context7.prev = _context7.next) {
                           case 0:
                            _this5.next_area.active = false;
                            _this5.dialog_node.active = false;
                            building = _this5.buildings[result.data.choiceGameId - 1];
                            cc.find("building", building).color = cc.Color.WHITE;
                            glow = cc.find("glow", building);
                            glow.active = true;
                            glow.getComponent(sp.Skeleton).setAnimation(0, "glow1", true);
                            for (i = 0; i < _this5.buildings.length; i++) {
                              bu = _this5.buildings[i];
                              if (i !== result.data.choiceGameId - 1) {
                                cc.find("glow", bu).active = false;
                                cc.find("building", building).color = cc.Color.GRAY;
                              }
                            }
                            road = _this5.getRoad(result.data.mapInfo.prevGame, result.data.mapInfo.nextGame);
                            for (_i10 = 1; _i10 < OuterRoadPoint; _i10++) {
                              point = cc.find("point_" + _i10, road);
                              point && (cc.find("finish", point).active = false);
                            }
                            lujing = cc.find("lujing", road);
                            lujing.active = true;
                            lujing.getComponent(sp.Skeleton).setAnimation(0, "lujing_intro", false);
                            lujing.getComponent(sp.Skeleton).addAnimation(0, "lujing_idle", true);
                            _context7.next = 16;
                            return cc.vv.gameData.awaitTime(1);

                           case 16:
                            _context7.next = 18;
                            return _this5.startWheel();

                           case 18:
                            _context7.next = 20;
                            return cc.vv.gameData.awaitTime(1);

                           case 20:
                            cc.tween(_this5.node).by(.5, {
                              y: cc.winSize.height
                            }).call(function() {
                              _this5._endCallback && _this5._endCallback();
                              if (_this5._selectBuildingCallback) {
                                _this5._selectBuildingCallback();
                                _this5._selectBuildingCallback = null;
                              }
                            }).start();

                           case 21:
                           case "end":
                            return _context7.stop();
                          }
                        }, _callee7);
                      }))).start();
                    }

                   case 8:
                   case "end":
                    return _context8.stop();
                  }
                }, _callee8);
              })));

             case 12:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      popDetail: function popDetail(target) {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              return _context11.abrupt("return", new Promise(function() {
                var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(success) {
                  var self, func, btn_start;
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("popup");
                      _this6.dialog_node.active = true;
                      _this6.detail_game.active = true;
                      _this6.detail_game.scale = 0;
                      cc.tween(_this6.detail_game).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _this6.detail_title.getComponent("ImgSwitchCmp").setIndex(target - 1);
                      _context10.next = 8;
                      return cc.vv.gameData.awaitTime(.5);

                     case 8:
                      self = _this6;
                      func = function func() {
                        btn_start.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(self.detail_game).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          self.detail_game.active = false;
                          self.dialog_node.active = false;
                          success();
                        }).start();
                      };
                      btn_start = cc.find("btn_start", _this6.detail_game);
                      cc.vv.gameData.checkAutoPlay(btn_start, func);
                      btn_start.on("click", function() {
                        btn_start.stopAllActions();
                        func();
                      });

                     case 13:
                     case "end":
                      return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x4) {
                  return _ref7.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      startWheel: function startWheel() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              return _context15.abrupt("return", new Promise(function() {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
                  var root, spin_spine, btn_spin, func;
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                     case 0:
                      _this7.wheel_node.active = true;
                      Global.SlotsSoundMgr.playEffect("wheelshow");
                      _this7.wheel_win.active = false;
                      cc.find("wheel_node/btn_spin/grey", _this7.wheel_node).active = false;
                      root = cc.find("wheel_node", _this7.wheel_node);
                      root.scale = 0;
                      cc.tween(root).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      _this7.wheel.angle = 0;
                      spin_spine = cc.find("wheel_node/btn_spin/spine", _this7.wheel_node).getComponent(sp.Skeleton);
                      spin_spine.node.color = cc.Color.WHITE;
                      spin_spine.setAnimation(0, "spin_idle", true);
                      btn_spin = cc.find("wheel_node/btn_spin", _this7.wheel_node);
                      func = function() {
                        var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                          var req, result;
                          return regeneratorRuntime.wrap(function _callee12$(_context12) {
                            while (1) switch (_context12.prev = _context12.next) {
                             case 0:
                              btn_spin.off("click");
                              Global.SlotsSoundMgr.playEffect("wheelclick");
                              cc.find("grey", btn_spin).active = true;
                              spin_spine.setAnimation(0, "spin_click", false);
                              spin_spine.setCompleteListener(function() {
                                spin_spine.setCompleteListener(null);
                                spin_spine.node.color = cc.Color.GRAY;
                              });
                              req = {
                                rtype: 2
                              };
                              _context12.next = 8;
                              return cc.vv.gameData.reqSubGame(req);

                             case 8:
                              result = _context12.sent;
                              if (!(200 === result.code)) {
                                _context12.next = 19;
                                break;
                              }
                              cc.vv.gameData.setMapInfo(result.data.mapInfo);
                              cc.vv.gameData.GetSlotsScript().updateCollectProgress(result.data.mapInfo, false);
                              _context12.next = 14;
                              return new Promise(function(suc) {
                                Global.SlotsSoundMgr.playEffect("wheelspin");
                                var angle = 45 * result.data.idx - 2160;
                                cc.log(angle);
                                var action = cc.rotateBy(6, angle).easing(cc.easeSineInOut());
                                _this7.wheel.runAction(cc.sequence(action, cc.callFunc(function() {
                                  Global.SlotsSoundMgr.playEffect("wheelstop");
                                  suc();
                                })));
                              });

                             case 14:
                              _this7.wheel_win.active = true;
                              _context12.next = 17;
                              return cc.vv.gameData.awaitTime(2);

                             case 17:
                              Global.SlotsSoundMgr.playEffect("wheelshow");
                              cc.tween(root).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                _this7.wheel_node.active = false;
                                success();
                              }).start();

                             case 19:
                             case "end":
                              return _context12.stop();
                            }
                          }, _callee12);
                        }));
                        return function func() {
                          return _ref9.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_spin, func);
                      btn_spin.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                        return regeneratorRuntime.wrap(function _callee13$(_context13) {
                          while (1) switch (_context13.prev = _context13.next) {
                           case 0:
                            btn_spin.stopAllActions();
                            _context13.next = 3;
                            return func();

                           case 3:
                           case "end":
                            return _context13.stop();
                          }
                        }, _callee13);
                      })));

                     case 15:
                     case "end":
                      return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function(_x5) {
                  return _ref8.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      reset: function reset() {
        for (var i = 0; i < this.buildings.length; i++) {
          cc.find("building", this.buildings[i]).color = cc.Color.GRAY;
          cc.find("glow", this.buildings[i]).active = false;
        }
        var _iterator4 = _createForOfIteratorHelper(this.roads), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var road = _step4.value;
            cc.find("lujing", road).active = false;
            for (var _i11 = 0; _i11 < 7; _i11++) {
              var point = cc.find("point_" + (_i11 + 1), road);
              point && (cc.find("finish", point).active = false);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        this._endCallback = null;
        this._canSelect = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  Sumo_PickGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90769Po/OpKZ7eyYRvxjIpr", "Sumo_PickGame");
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
        jackpot: cc.Node,
        jackpot_effect: cc.Node,
        base_prize: cc.Node,
        rate: cc.Node,
        layout: cc.Node,
        _successCallback: null,
        _canSelect: false,
        _haveOpenReward: null
      },
      startPickGame: function startPickGame(mapInfo) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function(success) {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("sgbgm");
                _this.reset();
                _this._successCallback = success;
                var gameInfo = mapInfo.gameInfo;
                _this.jackpot.getComponent(cc.Label).string = Global.FormatNumToComma(mapInfo.superJackpot);
                _this.base_prize.getComponent(cc.Label).string = Global.formatNumShort(gameInfo.startPrize, 0);
                _this.rate.getComponent(cc.Label).string = gameInfo.mult > 0 ? gameInfo.mult + "X" : "";
                _this._canSelect = true;
                var _loop = function _loop(i) {
                  var item = cc.find("box_" + (i + 1), _this.layout);
                  var info = gameInfo.items[i];
                  var spine = cc.find("GC_box_choice", item).getComponent(sp.Skeleton);
                  if (info.isOpen) {
                    _this._haveOpenReward.push(i);
                    var skin = 3 === info.type ? "jackpot" : info.mult + "X" + (2 === info.type ? "2" : "");
                    spine.setSkin(skin);
                    spine.setAnimation(0, "box_click", false);
                  } else spine.setAnimation(0, "box_idle", true);
                  item.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var req, result, choiceId, newInfo, selectItem, selectSpine, _skin, particle, startPos, endPos, fly_star_end;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                       case 0:
                        if (_this._canSelect) {
                          _context.next = 2;
                          break;
                        }
                        return _context.abrupt("return");

                       case 2:
                        if (!(-1 !== _this._haveOpenReward.indexOf(i))) {
                          _context.next = 4;
                          break;
                        }
                        return _context.abrupt("return");

                       case 4:
                        _this._canSelect = false;
                        Global.SlotsSoundMgr.playEffect("sgFactory");
                        req = {
                          rtype: 3,
                          choiceId: i + 1
                        };
                        _context.next = 9;
                        return cc.vv.gameData.reqSubGame(req);

                       case 9:
                        result = _context.sent;
                        if (!(200 === result.code)) {
                          _context.next = 67;
                          break;
                        }
                        choiceId = result.data.choiceId;
                        cc.vv.gameData.setMapInfo(result.data.mapInfo);
                        newInfo = result.data.mapInfo.gameInfo.items[choiceId - 1];
                        _this._haveOpenReward.push(choiceId - 1);
                        selectItem = cc.find("box_" + choiceId, _this.layout);
                        selectSpine = cc.find("GC_box_choice", selectItem).getComponent(sp.Skeleton);
                        _skin = 3 === newInfo.type ? "jackpot" : newInfo.mult + "X" + (2 === newInfo.type ? "2" : "");
                        selectSpine.setSkin(_skin);
                        selectSpine.setAnimation(0, "box_click", false);
                        _context.next = 22;
                        return cc.vv.gameData.awaitTime(.5);

                       case 22:
                        Global.SlotsSoundMgr.playEffect("sgCollect");
                        particle = cc.instantiate(cc.find("fly_star", _this.node.parent));
                        particle.active = true;
                        particle.parent = _this.node;
                        startPos = selectItem.convertToWorldSpaceAR(cc.v2(0, 0));
                        startPos = _this.node.convertToNodeSpaceAR(startPos);
                        particle.position = startPos;
                        if (3 === newInfo.type) {
                          _this.endGame(result.data.mapInfo.gameInfo);
                          endPos = _this.jackpot.convertToWorldSpaceAR(cc.v2(0, 0));
                          endPos = _this.node.convertToNodeSpaceAR(endPos);
                        } else {
                          endPos = _this.rate.convertToWorldSpaceAR(cc.v2(0, 0));
                          endPos = _this.node.convertToNodeSpaceAR(endPos);
                        }
                        cc.tween(particle).to(.5, {
                          position: endPos
                        }).removeSelf().start();
                        _context.next = 33;
                        return cc.vv.gameData.awaitTime(.5);

                       case 33:
                        if (!(3 === newInfo.type)) {
                          _context.next = 46;
                          break;
                        }
                        _this.jackpot_effect.active = true;
                        _this.jackpot_effect.getComponent(sp.Skeleton).setAnimation(0, "K_glow", false);
                        _this.jackpot_effect.getComponent(sp.Skeleton).addAnimation(0, "K_glow2", true);
                        _context.next = 39;
                        return cc.vv.gameData.awaitTime(1);

                       case 39:
                        _context.next = 41;
                        return cc.vv.gameData.GetSlotsScript().popSuperJackpotDialog(mapInfo.superJackpot);

                       case 41:
                        _context.next = 43;
                        return cc.vv.gameData.GetSlotsScript().popMiniGameResult(result.data.mapInfo.gameInfo.winCoin, 6);

                       case 43:
                        _this._successCallback && _this._successCallback();
                        _context.next = 67;
                        break;

                       case 46:
                        fly_star_end = cc.find("fly_star_end", _this.rate.parent);
                        fly_star_end.active = true;
                        fly_star_end.getComponent(sp.Skeleton).setAnimation(0, "multi_end3", false);
                        _context.next = 51;
                        return cc.vv.gameData.awaitTime(.5);

                       case 51:
                        fly_star_end.active = false;
                        _this.rate.scale = 1;
                        _this.rate.getComponent(cc.Label).string = result.data.mapInfo.gameInfo.mult + "X";
                        cc.tween(_this.rate).to(.1, {
                          scale: 1.1
                        }).to(.1, {
                          scale: 1
                        }).start();
                        if (!result.data.mapInfo.gameInfo.isEnd) {
                          _context.next = 66;
                          break;
                        }
                        _this.endGame(result.data.mapInfo.gameInfo);
                        _context.next = 59;
                        return cc.vv.gameData.awaitTime(1);

                       case 59:
                        _context.next = 61;
                        return cc.vv.gameData.GetSlotsScript().popMiniGameResult(result.data.mapInfo.gameInfo.winCoin, 6);

                       case 61:
                        _this._successCallback && _this._successCallback();
                        Global.SlotsSoundMgr.stopBgm();
                        Global.SlotsSoundMgr.playNormalBgm();
                        _context.next = 67;
                        break;

                       case 66:
                        _this._canSelect = true;

                       case 67:
                       case "end":
                        return _context.stop();
                      }
                    }, _callee);
                  })));
                };
                for (var i = 0; i < 16; i++) _loop(i);
              }));

             case 1:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      endGame: function endGame(gameInfo) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var j, info, item, spine, skin;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              for (j = 1; j < 17; j++) {
                info = gameInfo.items[j - 1];
                item = cc.find("box_" + j, _this2.layout);
                spine = cc.find("GC_box_choice", item).getComponent(sp.Skeleton);
                skin = 3 === info.type ? "jackpot" : info.mult + "X" + (2 === info.type ? "2" : "");
                if (!info.isOpen) {
                  spine.setSkin(skin);
                  spine.setAnimation(0, "box_grey", false);
                }
              }

             case 1:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      reset: function reset() {
        for (var i = 1; i < 17; i++) {
          var item = cc.find("box_" + i, this.layout);
          var spine = cc.find("GC_box_choice", item).getComponent(sp.Skeleton);
          spine.setAnimation(0, "box_idle", true);
        }
        this._successCallback = null;
        this._canSelect = false;
        this._haveOpenReward = [];
      }
    });
    cc._RF.pop();
  }, {} ],
  Sumo_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29fa9Ndl3VLkoVsWPTBKNcG", "Sumo_Reel");
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
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false === bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                var node = cc.find(info.antiNode, this.node);
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
          var _node = cc.find(name, this.node);
          if (_node) {
            _node.active = bShow;
            var symbol_1 = cc.vv.gameData.GetSlotsScript().getReel(0).GetSymbolByRow(0);
            var symbol_5 = cc.vv.gameData.GetSlotsScript().getReel(4).GetSymbolByRow(0);
            var symbol_21 = cc.vv.gameData.GetSlotsScript().getReel(20).GetSymbolByRow(0);
            symbol_1.GetShowId() === this._cfg.scatterId && symbol_1.playScatterAnimation();
            symbol_5.GetShowId() === this._cfg.scatterId && symbol_5.playScatterAnimation();
            symbol_21.GetShowId() === this._cfg.scatterId && symbol_21.playScatterAnimation();
          } else cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      playReelStop: function playReelStop() {
        this._super();
        this._reelIdx / 5 !== 0 && this._reelIdx % 5 !== 4 || Global.SlotsSoundMgr.playEffect("reelstop");
      },
      getSymbols: function getSymbols() {
        return this._symbols;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Sumo_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62a63mTa4NEzYSdoXmr3KuX", "Sumo_Slots");
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
    var targetSkins = [ "ylc", "dwy", "bql", "yxy", "mxt", "gc" ];
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _freeNode: cc.Node,
        _generateCandy: false,
        _candyTimer: 0,
        _candyInterval: 0,
        _candyResult: [],
        _freeReels: [],
        _mysteryReels: [],
        _inFreeGame: false,
        _freeGameInfo: null,
        _addCandyCnt: 0
      },
      Init: function Init() {
        var _this = this;
        this._super();
        this._freeNode = cc.find("free_node", this.node.parent);
        var bonus_node = cc.find("collect_node/bonus_node", this.node);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        bonus_node.on(cc.Node.EventType.TOUCH_END, function() {
          deskInfo.needbet > deskInfo.currmult && "idle" === cc.vv.gameData.GetSlotState() && _this._bottomScript.SetBetIdx(deskInfo.needbet);
        });
        var script = cc.find("lock", bonus_node).getComponent(sp.Skeleton);
        script.setCompleteListener(function(track) {
          var name = track.animation ? track.animation.name : "";
          "lock" === name && script.setAnimation(0, "idle", true);
        });
        if (deskInfo.needbet <= deskInfo.currmult) {
          Global.SlotsSoundMgr.playEffect("unlock");
          script.setAnimation(0, "unlock", false);
        } else script.setAnimation(0, "lock", false);
        this.updateCollectProgress(deskInfo.mapInfo, false);
        0 !== deskInfo.mapInfo.nextGame && this.updateTargetSkin(deskInfo.mapInfo.nextGame);
        var touch_map = cc.find("collect_node/target/touch", this.node);
        touch_map.off(cc.Node.EventType.TOUCH_END);
        touch_map.on(cc.Node.EventType.TOUCH_END, function() {
          if ("idle" !== cc.vv.gameData.GetSlotState()) return;
          if (cc.vv.gameData.isAutoGame()) return;
          _this._bottomScript.ShowBtnsByState("moveing_1");
          Global.SlotsSoundMgr.playEffect("mapInOut");
          cc.find("map", _this.node.parent).getComponent("Sumo_Map").openMap(deskInfo.mapInfo, true);
        });
      },
      updateTargetSkin: function updateTargetSkin(nextGame) {
        if (0 !== nextGame) {
          var target = cc.find("collect_node/target", this.node).getComponent(sp.Skeleton);
          target.setSkin(targetSkins[nextGame - 1]);
          target.setAnimation(0, "R_bar_idle", true);
        }
      },
      StartMove: function StartMove() {
        if (cc.vv.gameData.isBonusGame()) return;
        if (cc.vv.gameData.isBallonGame()) return;
        if (cc.vv.gameData.isZooGame()) return;
        this._bStopRightnow = null;
        this._gameInfo = null;
        var _iterator = _createForOfIteratorHelper(this._mysteryReels), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var mysteryReel = _step.value;
            var symbol = mysteryReel.GetSymbolByRow(0);
            symbol.setAnimationToTop(false);
            symbol.ShowKuang(false);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._topScript.StartMove();
        cc.vv.gameData.ClearOneRoundData();
        if (this._inFreeGame) {
          this.MoveReels(this._freeReels);
          cc.find("hong/num", this._freeNode).getComponent(cc.Label).string = cc.vv.gameData.GetFreeTime();
        } else {
          Global.SlotsSoundMgr.playNormalBgm();
          this.MoveReels(this._reels);
        }
        this._stopTime = this.GetStopTime();
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, _iterator2, _step2, reel, _iterator3, _step3, symbol, _iterator4, _step4, _reel, _iterator5, _step5, _symbol, target, mapScript, script, _script;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this2._freeNode = cc.find("free_node", _this2.node.parent);
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!deskInfo.freeGameInfo) {
                _context.next = 15;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              if (!(0 === deskInfo.freeGameInfo.state)) {
                _context.next = 12;
                break;
              }
              _this2.ShowGameview(true);
              _iterator2 = _createForOfIteratorHelper(_this2._reels);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  reel = _step2.value;
                  _iterator3 = _createForOfIteratorHelper(reel.getSymbols());
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                      symbol = _step3.value;
                      symbol.setAnimationToTop(false);
                      symbol.ShowById(14);
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              _context.next = 10;
              return _this2.popCandyBonus();

             case 10:
              _context.next = 13;
              break;

             case 12:
              if (1 === deskInfo.freeGameInfo.state) {
                _this2.ShowGameview(true);
                _iterator4 = _createForOfIteratorHelper(_this2._reels);
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                    _reel = _step4.value;
                    _iterator5 = _createForOfIteratorHelper(_reel.getSymbols());
                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                        _symbol = _step5.value;
                        _symbol.setAnimationToTop(false);
                        _symbol.ShowById(14);
                      }
                    } catch (err) {
                      _iterator5.e(err);
                    } finally {
                      _iterator5.f();
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                Global.SlotsSoundMgr.playBgm("fgbgm");
                _this2.startFree(deskInfo.freeGameInfo);
              }

             case 13:
              _context.next = 86;
              break;

             case 15:
              if (!(1 === deskInfo.mapInfo.state || 2 === deskInfo.mapInfo.state)) {
                _context.next = 26;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 19;
              return cc.find("map", _this2.node.parent).getComponent("Sumo_Map").openMap(deskInfo.mapInfo, false);

             case 19:
              _this2.updateCollectProgress(deskInfo.mapInfo, false);
              target = cc.find("collect_node/target", _this2.node).getComponent(sp.Skeleton);
              target.setSkin(targetSkins[deskInfo.mapInfo.nextGame - 1]);
              target.setAnimation(0, "R_bar_idle", true);
              _this2.CanDoNextRound();
              _context.next = 78;
              break;

             case 26:
              if (!(3 === deskInfo.mapInfo.state)) {
                _context.next = 78;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              mapScript = cc.find("map", _this2.node.parent).getComponent("Sumo_Map");
              _context.next = 31;
              return mapScript.openMap(deskInfo.mapInfo, false);

             case 31:
              _context.next = 33;
              return cc.vv.gameData.awaitTime(1);

             case 33:
              _this2.cutSceneMiniGame();
              _context.next = 36;
              return cc.vv.gameData.awaitTime(2);

             case 36:
              _context.t0 = deskInfo.mapInfo.gameInfo.gameId;
              _context.next = 1 === _context.t0 ? 39 : 2 === _context.t0 ? 44 : 3 === _context.t0 ? 49 : 4 === _context.t0 ? 54 : 5 === _context.t0 ? 59 : 6 === _context.t0 ? 64 : 69;
              break;

             case 39:
              script = cc.find("wheel_game", _this2.node.parent).getComponent("Sumo_WheelGame");
              script.node.active = true;
              _context.next = 43;
              return script.startWheelGame(deskInfo.mapInfo.gameInfo);

             case 43:
              return _context.abrupt("break", 69);

             case 44:
              script = cc.find("zoo_game", _this2.node.parent).getComponent("Sumo_ZooGame");
              script.node.active = true;
              _context.next = 48;
              return script.startZooGame(deskInfo.mapInfo.gameInfo);

             case 48:
              return _context.abrupt("break", 69);

             case 49:
              script = cc.find("ice_game", _this2.node.parent).getComponent("Sumo_IceGame");
              script.node.active = true;
              _context.next = 53;
              return script.startIceGame(deskInfo.mapInfo.gameInfo);

             case 53:
              return _context.abrupt("break", 69);

             case 54:
              script = cc.find("ball_game", _this2.node.parent).getComponent("Sumo_BallGame");
              script.node.active = true;
              _context.next = 58;
              return script.startBallGame(deskInfo.mapInfo.gameInfo);

             case 58:
              return _context.abrupt("break", 69);

             case 59:
              script = cc.find("ballon_game", _this2.node.parent).getComponent("Sumo_BallonGame");
              script.node.active = true;
              _context.next = 63;
              return script.startBallonGame(deskInfo.mapInfo.gameInfo);

             case 63:
              return _context.abrupt("break", 69);

             case 64:
              script = cc.find("pick_game", _this2.node.parent).getComponent("Sumo_PickGame");
              script.node.active = true;
              _context.next = 68;
              return script.startPickGame(deskInfo.mapInfo);

             case 68:
              return _context.abrupt("break", 69);

             case 69:
              _this2.cutSceneMiniGame();
              _context.next = 72;
              return cc.vv.gameData.awaitTime(2);

             case 72:
              script.node.active = false;
              _context.next = 75;
              return mapScript.finishMiniGame(deskInfo.mapInfo.gameInfo.gameId, deskInfo.mapInfo);

             case 75:
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 78;
              return mapScript.popChooseArea();

             case 78:
              if (!deskInfo.bonusGame) {
                _context.next = 85;
                break;
              }
              cc.find("bonus_slots", _this2.node.parent).active = true;
              _script = cc.find("bonus_slots", _this2.node.parent).getComponent("Sumo_BonusGameManager");
              _context.next = 83;
              return _script.startBonusGame(deskInfo.bonusGame);

             case 83:
              _context.next = 86;
              break;

             case 85:
              _this2.CanDoNextRound();

             case 86:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _iterator6, _step6, mysteryReel, symbol;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._super(msg);
              msg.mapInfo && cc.vv.gameData.setMapInfo(msg.mapInfo);
              if (_this3._inFreeGame) {
                _this3.SetStopTime(1.5);
                Global.SlotsSoundMgr.playEffect("mysteryShow");
                _iterator6 = _createForOfIteratorHelper(_this3._mysteryReels);
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                    mysteryReel = _step6.value;
                    symbol = mysteryReel.GetSymbolByRow(0);
                    symbol.setAnimationToTop(false);
                    symbol.playMysteryAnimation(_this3._gameInfo.resultCards[mysteryReel.GetReelIdx()]);
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }

             case 3:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return (reelIdx % 5 + Math.floor(reelIdx / 5)) * nIter;
      },
      CheckEnterFreeGame: function CheckEnterFreeGame() {
        return this._gameInfo.freeGameInfo && 0 === this._gameInfo.freeGameInfo.state;
      },
      CheckExtraFreeGame: function CheckExtraFreeGame() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      SetReelStateInfo: function SetReelStateInfo(cards) {
        var _this4 = this;
        if (!this._cfg.reelStateInfo) return;
        var reelResults = [];
        for (var i = 0; i < cards.length; i++) {
          var id = cards[i];
          var col = i % this._col;
          reelResults[col] || (reelResults[col] = []);
          reelResults[col].push(id);
        }
        var _iterator7 = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step7;
        try {
          var _loop = function _loop() {
            var info = _step7.value;
            var stateInfo = Global.copy(info);
            stateInfo.isStop = false;
            stateInfo.isAnt = false;
            var triggerCount = stateInfo.mini;
            var countsConfig = Global.copy(stateInfo.counts);
            var haveCount = 0;
            var isContinuous = true;
            for (var _i = 0; _i < reelResults.length; _i++) {
              var item = _this4._reels[_i];
              var reelRes = reelResults[_i];
              stateInfo.isStop = false;
              stateInfo.isAnt = false;
              haveCount >= triggerCount - 1 && stateInfo.counts[_i] > 0 && isContinuous && (stateInfo.isAnt = true);
              var reelCountOfID = reelRes.reduce(function(a, v) {
                return stateInfo.id.includes(v) ? a + 1 : a + 0;
              }, 0);
              haveCount += stateInfo.counts[_i] > 0 ? reelCountOfID : 0;
              countsConfig.shift();
              var remainingCount = (countsConfig.length > 0 ? countsConfig.reduce(function(x, y) {
                return x + y;
              }) : 0) + haveCount;
              reelCountOfID > 0 && remainingCount >= triggerCount && isContinuous && stateInfo.counts[_i] > 0 && (stateInfo.isStop = true);
              stateInfo.continuous && stateInfo.counts[_i] > 0 && 0 == reelCountOfID && (isContinuous = false);
              item.AddReelStateInfo(Global.copy(stateInfo));
            }
          };
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) _loop();
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      },
      getReel: function getReel(idx) {
        return this._reels[idx];
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var winCoin, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              _context4.next = 2;
              return _this5.collectSymbol();

             case 2:
              _this5.ShowWinTrace();
              winCoin = cc.vv.gameData.GetGameWin();
              totalWinCoin = cc.vv.gameData.GetGameWin();
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this5.ShowBottomWin(winCoin, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var spine_finish, target, mapScript, script;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                   case 0:
                    if (!_this5._gameInfo.bonusGame) {
                      _context3.next = 3;
                      break;
                    }
                    _context3.next = 3;
                    return _this5.triggerBonusGame();

                   case 3:
                    if (!(!_this5._inFreeGame && _this5._gameInfo.mapInfo.progressData.currCnt > 0 && _this5._gameInfo.mapInfo.progressData.totalCnt >= _this5._gameInfo.mapInfo.progressData.needCnt)) {
                      _context3.next = 70;
                      break;
                    }
                    _this5._bottomScript.ShowBtnsByState("moveing_1");
                    _context3.next = 7;
                    return cc.vv.gameData.awaitTime(.5);

                   case 7:
                    Global.SlotsSoundMgr.playEffect("CollectDone");
                    spine_finish = cc.find("collect_node/progress/full", _this5.node).getComponent(sp.Skeleton);
                    spine_finish.node.active = true;
                    spine_finish.setToSetupPose();
                    spine_finish.setAnimation(0, "bar_collect_full", false);
                    spine_finish.setCompleteListener(function() {
                      spine_finish.setCompleteListener(null);
                      spine_finish.node.active = false;
                    });
                    target = cc.find("collect_node/target", _this5.node).getComponent(sp.Skeleton);
                    target.setAnimation(0, "R_bar_full", false);
                    target.addAnimation(0, "R_bar_idle", true);
                    _context3.next = 18;
                    return cc.vv.gameData.awaitTime(2);

                   case 18:
                    _this5.clearCollectProgress();
                    mapScript = cc.find("map", _this5.node.parent).getComponent("Sumo_Map");
                    _context3.next = 22;
                    return mapScript.openMap(_this5._gameInfo.mapInfo, false);

                   case 22:
                    _context3.next = 24;
                    return cc.vv.gameData.awaitTime(1);

                   case 24:
                    if (!(3 === _this5._gameInfo.mapInfo.state)) {
                      _context3.next = 70;
                      break;
                    }
                    _this5.cutSceneMiniGame();
                    _context3.next = 28;
                    return cc.vv.gameData.awaitTime(2);

                   case 28:
                    _context3.t0 = _this5._gameInfo.mapInfo.gameInfo.gameId;
                    _context3.next = 1 === _context3.t0 ? 31 : 2 === _context3.t0 ? 36 : 3 === _context3.t0 ? 41 : 4 === _context3.t0 ? 46 : 5 === _context3.t0 ? 51 : 6 === _context3.t0 ? 56 : 61;
                    break;

                   case 31:
                    script = cc.find("wheel_game", _this5.node.parent).getComponent("Sumo_WheelGame");
                    script.node.active = true;
                    _context3.next = 35;
                    return script.startWheelGame(_this5._gameInfo.mapInfo.gameInfo);

                   case 35:
                    return _context3.abrupt("break", 61);

                   case 36:
                    script = cc.find("zoo_game", _this5.node.parent).getComponent("Sumo_ZooGame");
                    script.node.active = true;
                    _context3.next = 40;
                    return script.startZooGame(_this5._gameInfo.mapInfo.gameInfo);

                   case 40:
                    return _context3.abrupt("break", 61);

                   case 41:
                    script = cc.find("ice_game", _this5.node.parent).getComponent("Sumo_IceGame");
                    script.node.active = true;
                    _context3.next = 45;
                    return script.startIceGame(_this5._gameInfo.mapInfo.gameInfo);

                   case 45:
                    return _context3.abrupt("break", 61);

                   case 46:
                    script = cc.find("ball_game", _this5.node.parent).getComponent("Sumo_BallGame");
                    script.node.active = true;
                    _context3.next = 50;
                    return script.startBallGame(_this5._gameInfo.mapInfo.gameInfo);

                   case 50:
                    return _context3.abrupt("break", 61);

                   case 51:
                    script = cc.find("ballon_game", _this5.node.parent).getComponent("Sumo_BallonGame");
                    script.node.active = true;
                    _context3.next = 55;
                    return script.startBallonGame(_this5._gameInfo.mapInfo.gameInfo);

                   case 55:
                    return _context3.abrupt("break", 61);

                   case 56:
                    script = cc.find("pick_game", _this5.node.parent).getComponent("Sumo_PickGame");
                    script.node.active = true;
                    _context3.next = 60;
                    return script.startPickGame(_this5._gameInfo.mapInfo);

                   case 60:
                    return _context3.abrupt("break", 61);

                   case 61:
                    _this5.cutSceneMiniGame();
                    _context3.next = 64;
                    return cc.vv.gameData.awaitTime(2);

                   case 64:
                    script.node.active = false;
                    _context3.next = 67;
                    return mapScript.finishMiniGame(_this5._gameInfo.mapInfo.gameInfo.gameId, cc.vv.gameData.getMapInfo());

                   case 67:
                    _this5._bottomScript.ShowBtnsByState("moveing_1");
                    _context3.next = 70;
                    return mapScript.popChooseArea();

                   case 70:
                    _this5.CheckEnterFreeGame() ? _this5.triggerFreeGame() : _this5.CheckExitFreeGame() ? _this5.triggerExitFreeGame() : _this5.CanDoNextRound();

                   case 71:
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
      triggerBonusGame: function triggerBonusGame() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var _iterator8, _step8, cornerIdx, symbol, script;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this6._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              _iterator8 = _createForOfIteratorHelper(_this6._cfg.cornerIdxs);
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                  cornerIdx = _step8.value;
                  symbol = _this6.GetSymbolByIdx(cornerIdx + 1);
                  symbol.playTriggerBonusAnimation();
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              _context5.next = 6;
              return cc.vv.gameData.awaitTime(2);

             case 6:
              Global.SlotsSoundMgr.stopBgm();
              _context5.next = 9;
              return _this6.popRespinBonusDialog();

             case 9:
              _this6.cutSceneBonus();
              _context5.next = 12;
              return cc.vv.gameData.awaitTime(1.5);

             case 12:
              cc.find("bonus_slots", _this6.node.parent).active = true;
              script = cc.find("bonus_slots", _this6.node.parent).getComponent("Sumo_BonusGameManager");
              _context5.next = 16;
              return script.startBonusGame(_this6._gameInfo.bonusGame);

             case 16:
              Global.SlotsSoundMgr.playNormalBgm();

             case 17:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      StopMove: function StopMove() {
        cc.vv.gameData.isBonusGame() ? cc.vv.gameData.GetBonusScript().StopMove() : cc.vv.gameData.isBallonGame() ? cc.vv.gameData.getBallonScript().StopMove() : cc.vv.gameData.isZooGame() ? cc.vv.gameData.getZooScript().StopMove() : this._super();
      },
      popRespinBonusDialog: function popRespinBonusDialog() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
                  var free_dialog, dialog, btn_start, func;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("popup");
                      Global.SlotsSoundMgr.playEffect("bgbegin");
                      free_dialog = cc.find("free_dialog", _this7.node.parent);
                      free_dialog.active = true;
                      dialog = cc.find("respin_bonus", free_dialog);
                      dialog.active = true;
                      dialog.scale = 0;
                      cc.tween(dialog).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      btn_start = cc.find("freetanchuang/btn_start", dialog);
                      _context8.next = 11;
                      return cc.vv.gameData.awaitTime(1);

                     case 11:
                      btn_start.off("click");
                      func = function() {
                        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) switch (_context6.prev = _context6.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("button");
                              btn_start.off("click");
                              cc.tween(dialog).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                free_dialog.active = false;
                                dialog.active = false;
                                success();
                              }).start();

                             case 3:
                             case "end":
                              return _context6.stop();
                            }
                          }, _callee6);
                        }));
                        return function func() {
                          return _ref3.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_start, func);
                      btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) switch (_context7.prev = _context7.next) {
                           case 0:
                            btn_start.stopAllActions();
                            _context7.next = 3;
                            return func();

                           case 3:
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
                return function(_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context9.stop();
            }
          }, _callee9);
        }))();
      },
      cutSceneFreeTime: function cutSceneFreeTime() {
        Global.SlotsSoundMgr.playEffect("fgTransition");
        var node = cc.find("FG_guochang", this.node.parent);
        node.active = true;
        var spine = node.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "FG_guochang", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          node.active = false;
        });
      },
      cutSceneBonus: function cutSceneBonus() {
        Global.SlotsSoundMgr.playEffect("bgTransition");
        var node = cc.find("BG_guochang", this.node.parent);
        node.active = true;
        var spine = node.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "BG_guochang", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          node.active = false;
        });
      },
      cutSceneMiniGame: function cutSceneMiniGame() {
        Global.SlotsSoundMgr.playEffect("miniTransition");
        var node = cc.find("MiniGame_guochang", this.node.parent);
        node.active = true;
        var spine = node.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "idle2", false);
        spine.setCompleteListener(function() {
          spine.setCompleteListener(null);
          node.active = false;
        });
      },
      ShowGameview: function ShowGameview(bFree) {
        this._super(bFree);
        this._freeNode.active = bFree;
        cc.find("BG_ren", this.node.parent).active = !bFree;
        cc.find("collect_node", this.node).active = !bFree;
      },
      collectSymbol: function collectSymbol() {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          var man, endPos, haveCollect, i, card, symbol, particle, startPos, fly_sprite;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              if (!_this8._inFreeGame) {
                _context10.next = 2;
                break;
              }
              return _context10.abrupt("return");

             case 2:
              if (!(0 === _this8._gameInfo.mapInfo.progressData.currCnt)) {
                _context10.next = 4;
                break;
              }
              return _context10.abrupt("return");

             case 4:
              Global.SlotsSoundMgr.playEffect("collect");
              man = cc.find("collect_node/collect", _this8.node);
              endPos = man.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this8.node.parent.convertToNodeSpaceAR(endPos);
              haveCollect = false;
              for (i = 0; i < _this8._gameInfo.resultCards.length; i++) {
                card = _this8._gameInfo.resultCards[i];
                if (_this8._cfg.collectSymbolId === card) {
                  symbol = _this8.GetSymbolByIdx(i + 1);
                  if (symbol) {
                    haveCollect = true;
                    particle = cc.instantiate(cc.find("fly_star", _this8.node.parent));
                    particle.active = true;
                    particle.parent = _this8.node.parent;
                    startPos = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    startPos = _this8.node.parent.convertToNodeSpaceAR(startPos);
                    particle.position = startPos;
                    fly_sprite = cc.instantiate(cc.find("fly_sprite", _this8.node.parent));
                    fly_sprite.parent = particle;
                    fly_sprite.active = true;
                    cc.tween(particle).to(.5, {
                      position: endPos
                    }).removeSelf().start();
                  }
                }
              }
              if (!haveCollect) {
                _context10.next = 16;
                break;
              }
              cc.tween(man).delay(.5).call(function() {
                var spine = man.getComponent(sp.Skeleton);
                spine.node.active = true;
                spine.setAnimation(0, "bar_collect_icon_collect", false);
                spine.addAnimation(0, "bar_collect_icon_idle", true);
              }).start();
              _context10.next = 14;
              return cc.vv.gameData.awaitTime(.5);

             case 14:
              _context10.next = 16;
              return _this8.updateCollectProgress(_this8._gameInfo.mapInfo, true);

             case 16:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      triggerFreeGame: function triggerFreeGame() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
          var i, card, symbol, _iterator9, _step9, reel, _iterator10, _step10, _symbol2;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
             case 0:
              _this9._bottomScript.ShowBtnsByState("moveing_1");
              Global.SlotsSoundMgr.playEffect("triggering");
              for (i = 0; i < _this9._gameInfo.resultCards.length; i++) {
                card = _this9._gameInfo.resultCards[i];
                if (card === _this9._cfg.scatterId) {
                  symbol = _this9.GetSymbolByIdx(i + 1);
                  symbol.playTriggerFreeAnimation();
                }
              }
              _context11.next = 5;
              return cc.vv.gameData.awaitTime(2);

             case 5:
              _this9.cutSceneFreeTime();
              _context11.next = 8;
              return cc.vv.gameData.awaitTime(2);

             case 8:
              _iterator9 = _createForOfIteratorHelper(_this9._reels);
              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                  reel = _step9.value;
                  _iterator10 = _createForOfIteratorHelper(reel.getSymbols());
                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                      _symbol2 = _step10.value;
                      _symbol2.setAnimationToTop(false);
                      _symbol2.ShowById(14);
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
              _this9.ClearAllTopShow();
              _this9.ShowGameview(true);
              cc.find("zi/num", _this9._freeNode).getComponent(cc.Label).string = "";
              cc.find("hong/num", _this9._freeNode).getComponent(cc.Label).string = "";
              cc.find("lan/num", _this9._freeNode).getComponent(cc.Label).string = "";
              cc.find("lv/num", _this9._freeNode).getComponent(cc.Label).string = "";
              Global.SlotsSoundMgr.stopBgm();
              _context11.next = 19;
              return _this9.popCandyBonus();

             case 19:
             case "end":
              return _context11.stop();
            }
          }, _callee11);
        }))();
      },
      popCandyBonus: function popCandyBonus() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
             case 0:
              return _context15.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(success) {
                  var free_dialog, dialog, btn_start, self, func;
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("fgbegin");
                      Global.SlotsSoundMgr.playEffect("popup");
                      free_dialog = cc.find("dialog_node", _this10._freeNode);
                      free_dialog.active = true;
                      dialog = cc.find("candy_bonus", free_dialog);
                      dialog.active = true;
                      dialog.scale = 0;
                      cc.tween(dialog).to(.5, {
                        scale: 1
                      }, {
                        easing: "backOut"
                      }).start();
                      btn_start = cc.find("btn_start", dialog);
                      _context14.next = 11;
                      return cc.vv.gameData.awaitTime(1);

                     case 11:
                      self = _this10;
                      func = function() {
                        var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                          var req, result, freeGameInfo, i, _i2, _i3, _i4;
                          return regeneratorRuntime.wrap(function _callee12$(_context12) {
                            while (1) switch (_context12.prev = _context12.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("button");
                              btn_start.off("click");
                              req = {
                                rtype: 4
                              };
                              _context12.next = 5;
                              return cc.vv.gameData.reqSubGame(req);

                             case 5:
                              result = _context12.sent;
                              if (200 === result.code) {
                                freeGameInfo = result.data.freeGameInfo;
                                self._freeGameInfo = freeGameInfo;
                                self._candyResult = [];
                                for (i = 0; i < freeGameInfo.freeCnt; i++) self._candyResult.push("hong");
                                for (_i2 = 0; _i2 < freeGameInfo.wildIdxs.length; _i2++) self._candyResult.push("zi");
                                for (_i3 = 0; _i3 < freeGameInfo.multiple - 1; _i3++) self._candyResult.push("lan");
                                for (_i4 = 0; _i4 < freeGameInfo.mysteryIdxs.length; _i4++) self._candyResult.push("lv");
                                self._candyResult.sort(function() {
                                  return Math.random() - .5;
                                });
                              }
                              cc.tween(dialog).to(.5, {
                                scale: 0
                              }, {
                                easing: "backIn"
                              }).call(function() {
                                Global.SlotsSoundMgr.playBgm("fgbgm");
                                free_dialog.active = false;
                                dialog.active = false;
                                self._generateCandy = true;
                                self._addCandyCnt = 0;
                                success();
                              }).start();

                             case 8:
                             case "end":
                              return _context12.stop();
                            }
                          }, _callee12);
                        }));
                        return function func() {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      cc.vv.gameData.checkAutoPlay(btn_start, func);
                      btn_start.off("click");
                      btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
                        return regeneratorRuntime.wrap(function _callee13$(_context13) {
                          while (1) switch (_context13.prev = _context13.next) {
                           case 0:
                            btn_start.stopAllActions();
                            func();

                           case 2:
                           case "end":
                            return _context13.stop();
                          }
                        }, _callee13);
                      })));

                     case 16:
                     case "end":
                      return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function(_x2) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context15.stop();
            }
          }, _callee15);
        }))();
      },
      triggerExitFreeGame: function triggerExitFreeGame() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
          var _iterator11, _step11, reel, _iterator12, _step12, symbol;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
             case 0:
              _this11._bottomScript.ShowBtnsByState("moveing_1");
              _context16.next = 3;
              return cc.vv.gameData.awaitTime(1);

             case 3:
              Global.SlotsSoundMgr.stopBgm();
              _context16.next = 6;
              return _this11.popFreeResultDialog();

             case 6:
              _this11.cutSceneFreeTime();
              _context16.next = 9;
              return cc.vv.gameData.awaitTime(1.5);

             case 9:
              _this11.ShowGameview(false);
              cc.find("wild_root", _this11.node).removeAllChildren();
              cc.find("question_mark_root", _this11.node).removeAllChildren();
              _this11._freeReels = [];
              _this11._mysteryReels = [];
              _this11._inFreeGame = false;
              cc.find("slots/red", _this11._freeNode).active = false;
              cc.find("slots/pink", _this11._freeNode).active = false;
              cc.find("slots/blue", _this11._freeNode).active = false;
              cc.find("slots/green", _this11._freeNode).active = false;
              _iterator11 = _createForOfIteratorHelper(_this11._reels);
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                  reel = _step11.value;
                  _iterator12 = _createForOfIteratorHelper(reel.getSymbols());
                  try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                      symbol = _step12.value;
                      symbol.ShowNormal();
                    }
                  } catch (err) {
                    _iterator12.e(err);
                  } finally {
                    _iterator12.f();
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
              _context16.next = 23;
              return cc.vv.gameData.awaitTime(1);

             case 23:
              _this11.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                Global.SlotsSoundMgr.playNormalBgm();
                _this11.CanDoNextRound();
              });

             case 24:
             case "end":
              return _context16.stop();
            }
          }, _callee16);
        }))();
      },
      popFreeDialog: function popFreeDialog(freeTime) {
        var _this12 = this;
        return new Promise(function() {
          var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(success) {
            var free_dialog, dialog, freetanchuang, times, btn_start, func;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgin");
                Global.SlotsSoundMgr.playEffect("popup");
                free_dialog = cc.find("free_dialog", _this12.node.parent);
                free_dialog.active = true;
                dialog = cc.find("common_enter_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                times = cc.find("times", freetanchuang);
                times.getComponent(cc.Label).string = freeTime;
                btn_start = cc.find("btn_start", freetanchuang);
                _context19.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                btn_start.off("click");
                func = function() {
                  var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                      while (1) switch (_context17.prev = _context17.next) {
                       case 0:
                        Global.SlotsSoundMgr.playEffect("button");
                        btn_start.off("click");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context17.stop();
                      }
                    }, _callee17);
                  }));
                  return function func() {
                    return _ref9.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_start, func);
                btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) switch (_context18.prev = _context18.next) {
                     case 0:
                      btn_start.stopAllActions();
                      _context18.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context18.stop();
                    }
                  }, _callee18);
                })));

               case 19:
               case "end":
                return _context19.stop();
              }
            }, _callee19);
          }));
          return function(_x3) {
            return _ref8.apply(this, arguments);
          };
        }());
      },
      popFreeResultDialog: function popFreeResultDialog() {
        var _this13 = this;
        return new Promise(function() {
          var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(success) {
            var free_dialog, dialog, freetanchuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) switch (_context22.prev = _context22.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgend");
                Global.SlotsSoundMgr.playEffect("popup");
                free_dialog = cc.find("free_dialog", _this13.node.parent);
                free_dialog.active = true;
                dialog = cc.find("result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("coin_down", freetanchuang).getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.GetGameTotalFreeWin());
                cc.find("coin_up", freetanchuang).getComponent(cc.Label).string = Global.FormatNumToComma(cc.vv.gameData.GetGameTotalFreeWin());
                btn_collect = cc.find("btn_collect", freetanchuang);
                _context22.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                btn_collect.off("click");
                func = function() {
                  var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
                    return regeneratorRuntime.wrap(function _callee20$(_context20) {
                      while (1) switch (_context20.prev = _context20.next) {
                       case 0:
                        btn_collect.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context20.stop();
                      }
                    }, _callee20);
                  }));
                  return function func() {
                    return _ref12.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
                  return regeneratorRuntime.wrap(function _callee21$(_context21) {
                    while (1) switch (_context21.prev = _context21.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context21.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context21.stop();
                    }
                  }, _callee21);
                })));

               case 19:
               case "end":
                return _context22.stop();
              }
            }, _callee22);
          }));
          return function(_x4) {
            return _ref11.apply(this, arguments);
          };
        }());
      },
      popBonusResult: function popBonusResult(winCoin) {
        var _this14 = this;
        return new Promise(function() {
          var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee25(success) {
            var free_dialog, dialog, freetanchuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) switch (_context25.prev = _context25.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("bgend");
                Global.SlotsSoundMgr.playEffect("popup");
                free_dialog = cc.find("free_dialog", _this14.node.parent);
                free_dialog.active = true;
                dialog = cc.find("bonus_result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("coin_down", freetanchuang).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                cc.find("coin_up", freetanchuang).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                btn_collect = cc.find("btn_collect", freetanchuang);
                _context25.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                btn_collect.off("click");
                func = function() {
                  var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
                    return regeneratorRuntime.wrap(function _callee23$(_context23) {
                      while (1) switch (_context23.prev = _context23.next) {
                       case 0:
                        btn_collect.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context23.stop();
                      }
                    }, _callee23);
                  }));
                  return function func() {
                    return _ref15.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee24() {
                  return regeneratorRuntime.wrap(function _callee24$(_context24) {
                    while (1) switch (_context24.prev = _context24.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context24.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context24.stop();
                    }
                  }, _callee24);
                })));

               case 19:
               case "end":
                return _context25.stop();
              }
            }, _callee25);
          }));
          return function(_x5) {
            return _ref14.apply(this, arguments);
          };
        }());
      },
      popMiniGameResult: function popMiniGameResult(winCoin, gameId) {
        var _this15 = this;
        return new Promise(function() {
          var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee28(success) {
            var free_dialog, dialog, freetanchuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) switch (_context28.prev = _context28.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("sgend");
                Global.SlotsSoundMgr.playEffect("popup");
                free_dialog = cc.find("free_dialog", _this15.node.parent);
                free_dialog.active = true;
                dialog = cc.find("minigame_result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("prize_k/coin", freetanchuang).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                cc.find("icon", freetanchuang).getComponent("ImgSwitchCmp").setIndex(gameId - 1);
                btn_collect = cc.find("btn_collect", freetanchuang);
                _context28.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                btn_collect.off("click");
                func = function() {
                  var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee26() {
                    return regeneratorRuntime.wrap(function _callee26$(_context26) {
                      while (1) switch (_context26.prev = _context26.next) {
                       case 0:
                        btn_collect.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context26.stop();
                      }
                    }, _callee26);
                  }));
                  return function func() {
                    return _ref18.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee27() {
                  return regeneratorRuntime.wrap(function _callee27$(_context27) {
                    while (1) switch (_context27.prev = _context27.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context27.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context27.stop();
                    }
                  }, _callee27);
                })));

               case 19:
               case "end":
                return _context28.stop();
              }
            }, _callee28);
          }));
          return function(_x6) {
            return _ref17.apply(this, arguments);
          };
        }());
      },
      popSuperJackpotDialog: function popSuperJackpotDialog(winCoin) {
        var _this16 = this;
        return new Promise(function() {
          var _ref20 = _asyncToGenerator(regeneratorRuntime.mark(function _callee31(success) {
            var free_dialog, dialog, freetanchuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) switch (_context31.prev = _context31.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("jpwin");
                Global.SlotsSoundMgr.playEffect("popup");
                free_dialog = cc.find("free_dialog", _this16.node.parent);
                free_dialog.active = true;
                dialog = cc.find("superjackpot_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                cc.find("prize_k/coin", freetanchuang).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                btn_collect = cc.find("btn_collect", freetanchuang);
                _context31.next = 14;
                return cc.vv.gameData.awaitTime(1);

               case 14:
                btn_collect.off("click");
                func = function() {
                  var _ref21 = _asyncToGenerator(regeneratorRuntime.mark(function _callee29() {
                    return regeneratorRuntime.wrap(function _callee29$(_context29) {
                      while (1) switch (_context29.prev = _context29.next) {
                       case 0:
                        btn_collect.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context29.stop();
                      }
                    }, _callee29);
                  }));
                  return function func() {
                    return _ref21.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee30() {
                  return regeneratorRuntime.wrap(function _callee30$(_context30) {
                    while (1) switch (_context30.prev = _context30.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context30.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context30.stop();
                    }
                  }, _callee30);
                })));

               case 18:
               case "end":
                return _context31.stop();
              }
            }, _callee31);
          }));
          return function(_x7) {
            return _ref20.apply(this, arguments);
          };
        }());
      },
      popWheelResult: function popWheelResult(winCoin) {
        var _this17 = this;
        return new Promise(function() {
          var _ref23 = _asyncToGenerator(regeneratorRuntime.mark(function _callee34(success) {
            var free_dialog, dialog, freetanchuang, yifenkuang, btn_collect, func;
            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) switch (_context34.prev = _context34.next) {
               case 0:
                Global.SlotsSoundMgr.playEffect("fgend");
                Global.SlotsSoundMgr.playEffect("popup");
                free_dialog = cc.find("free_dialog", _this17.node.parent);
                free_dialog.active = true;
                dialog = cc.find("wheel_result_node", free_dialog);
                dialog.active = true;
                dialog.scale = 1;
                freetanchuang = cc.find("freetanchuang", dialog);
                freetanchuang.scale = 0;
                cc.tween(freetanchuang).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
                yifenkuang = cc.find("yifenkuang", freetanchuang);
                cc.find("coin", yifenkuang).getComponent(cc.Label).string = Global.FormatNumToComma(winCoin);
                btn_collect = cc.find("btn_collect", freetanchuang);
                _context34.next = 15;
                return cc.vv.gameData.awaitTime(1);

               case 15:
                btn_collect.off("click");
                func = function() {
                  var _ref24 = _asyncToGenerator(regeneratorRuntime.mark(function _callee32() {
                    return regeneratorRuntime.wrap(function _callee32$(_context32) {
                      while (1) switch (_context32.prev = _context32.next) {
                       case 0:
                        btn_collect.off("click");
                        Global.SlotsSoundMgr.playEffect("button");
                        cc.tween(dialog).to(.5, {
                          scale: 0
                        }, {
                          easing: "backIn"
                        }).call(function() {
                          free_dialog.active = false;
                          dialog.active = false;
                          success();
                        }).start();

                       case 3:
                       case "end":
                        return _context32.stop();
                      }
                    }, _callee32);
                  }));
                  return function func() {
                    return _ref24.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(btn_collect, func);
                btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee33() {
                  return regeneratorRuntime.wrap(function _callee33$(_context33) {
                    while (1) switch (_context33.prev = _context33.next) {
                     case 0:
                      btn_collect.stopAllActions();
                      _context33.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context33.stop();
                    }
                  }, _callee33);
                })));

               case 19:
               case "end":
                return _context34.stop();
              }
            }, _callee34);
          }));
          return function(_x8) {
            return _ref23.apply(this, arguments);
          };
        }());
      },
      updateCollectProgress: function updateCollectProgress(mapInfo, isAdd) {
        var _this18 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee35() {
          var progress, percent, lizi;
          return regeneratorRuntime.wrap(function _callee35$(_context35) {
            while (1) switch (_context35.prev = _context35.next) {
             case 0:
              progress = cc.find("collect_node/progress", _this18.node);
              cc.find("collect_node/collect_tips/num", _this18.node).getComponent(cc.Label).string = mapInfo.progressData.needCnt - mapInfo.progressData.totalCnt < 0 ? 0 : mapInfo.progressData.needCnt - mapInfo.progressData.totalCnt;
              percent = mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt > 1 ? 1 : mapInfo.progressData.totalCnt / mapInfo.progressData.needCnt;
              if (isAdd) {
                lizi = cc.find("collect", progress);
                lizi.active = true;
                lizi.getComponent(sp.Skeleton).setAnimation(0, "bar_move_lizi", false);
                lizi.getComponent(sp.Skeleton).setCompleteListener(function() {
                  lizi.getComponent(sp.Skeleton).setCompleteListener(null);
                  lizi.active = false;
                });
                cc.tween(progress.getComponent(cc.ProgressBar)).to(.5, {
                  progress: percent
                }).start();
                cc.tween(lizi).to(.5, {
                  x: percent * progress.width
                }).start();
              } else progress.getComponent(cc.ProgressBar).progress = percent;

             case 4:
             case "end":
              return _context35.stop();
            }
          }, _callee35);
        }))();
      },
      clearCollectProgress: function clearCollectProgress() {
        var progress = cc.find("collect_node/progress", this.node);
        progress.getComponent(cc.ProgressBar).progress = 0;
        var lizi = cc.find("collect", progress);
        lizi.x = 0;
      },
      setAutoPlay: function setAutoPlay() {
        var candy_root = cc.find("candy_root", this._freeNode);
        var candy = candy_root.children[Global.random(0, candy_root.childrenCount - 1)];
        this.clickItemFunc(candy);
      },
      clickItemFunc: function clickItemFunc(candy1) {
        var _this19 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee36() {
          var candy, click, result, randomIndex, name, icon, endPos;
          return regeneratorRuntime.wrap(function _callee36$(_context36) {
            while (1) switch (_context36.prev = _context36.next) {
             case 0:
              _this19._addCandyCnt = 0;
              candy1.off(cc.Node.EventType.TOUCH_END);
              if (!(false === _this19._generateCandy)) {
                _context36.next = 4;
                break;
              }
              return _context36.abrupt("return");

             case 4:
              Global.SlotsSoundMgr.playEffect("clickcandy");
              candy1.stopAllActions();
              candy = cc.instantiate(candy1);
              candy.parent = cc.find("candy_click", _this19._freeNode);
              candy1.removeFromParent();
              cc.find("candy_colour", candy).active = false;
              click = cc.find("click", candy);
              click.active = true;
              click.getComponent(sp.Skeleton).setAnimation(0, "click", false);
              click.getComponent(sp.Skeleton).setCompleteListener(function() {
                click.getComponent(sp.Skeleton).setCompleteListener(null);
                click.active = false;
              });
              result = cc.find("result", candy);
              result.active = true;
              if (!(0 === _this19._candyResult.length)) {
                _context36.next = 29;
                break;
              }
              _this19._generateCandy = false;
              _this19._candyTimer = 0;
              _this19._candyInterval = 0;
              _context36.next = 22;
              return cc.vv.gameData.awaitTime(.5);

             case 22:
              Global.SlotsSoundMgr.playEffect("candyBomb");
              result.getComponent(sp.Skeleton).setAnimation(0, "zhadan01", false);
              result.getComponent(sp.Skeleton).addAnimation(0, "zhadan02", false);
              result.getComponent(sp.Skeleton).setCompleteListener(function(track) {
                var name = track.animation ? track.animation.name : "";
                if ("zhadan02" === name) {
                  candy.removeFromParent();
                  _this19.startFree(_this19._freeGameInfo);
                }
              });
              cc.tween(candy).to(.2, {
                position: cc.v2(0, 0)
              }).start();
              _context36.next = 45;
              break;

             case 29:
              randomIndex = Math.floor(Math.random() * _this19._candyResult.length);
              name = _this19._candyResult[randomIndex];
              _this19._candyResult.splice(randomIndex, 1);
              _context36.next = 34;
              return cc.vv.gameData.awaitTime(.5);

             case 34:
              Global.SlotsSoundMgr.playEffect("candyCollect");
              result.getComponent(sp.Skeleton).setAnimation(0, name + "_intro1", false);
              result.getComponent(sp.Skeleton).addAnimation(0, name + "_move", true);
              _context36.next = 39;
              return cc.vv.gameData.awaitTime(.5);

             case 39:
              icon = cc.instantiate(cc.find("icon", _this19._freeNode));
              icon.parent = cc.find(name + "/layout", _this19._freeNode);
              icon.scale = .5;
              endPos = cc.find(name + "/layout", _this19._freeNode).convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = candy.parent.convertToNodeSpaceAR(endPos);
              cc.tween(candy).to(.5, {
                position: endPos
              }).call(function() {
                icon.active = true;
                cc.find("spine", icon).getComponent(sp.Skeleton).setAnimation(0, name + "_intro2", false);
              }).removeSelf().start();

             case 45:
             case "end":
              return _context36.stop();
            }
          }, _callee36);
        }))();
      },
      generateCandy: function generateCandy() {
        var _this20 = this;
        var candy = cc.instantiate(cc.find("candy", this._freeNode));
        candy.active = true;
        candy.parent = cc.find("candy_root", this._freeNode);
        candy.position = cc.v2(500 * Math.random() - 250, cc.winSize.height / 2 + 200);
        cc.tween(candy).to(5, {
          y: -cc.winSize.height / 2 - 200
        }).delay(5).removeSelf().start();
        this._addCandyCnt += 1;
        25 == this._addCandyCnt && cc.vv.gameData.isNeedAutoPlay() && this.setAutoPlay();
        candy.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee37() {
          return regeneratorRuntime.wrap(function _callee37$(_context37) {
            while (1) switch (_context37.prev = _context37.next) {
             case 0:
              _this20.clickItemFunc(candy);

             case 1:
             case "end":
              return _context37.stop();
            }
          }, _callee37);
        })));
      },
      startFree: function startFree(freeGameInfo) {
        var _this21 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee38() {
          var FG_beishu_intro, i, index, symbol, wild, position, _i5, _index, _symbol3, question_mark, _position, spine, _iterator13, _step13, reel;
          return regeneratorRuntime.wrap(function _callee38$(_context38) {
            while (1) switch (_context38.prev = _context38.next) {
             case 0:
              FG_beishu_intro = cc.find("FG_beishu_intro", _this21.node);
              FG_beishu_intro.active = true;
              FG_beishu_intro.getComponent(sp.Skeleton).setAnimation(0, "beishu_intro", false);
              _this21.showFreeInfo(cc.find("slots/red", _this21._freeNode), cc.find("hong", _this21._freeNode), freeGameInfo.freeCnt);
              _context38.next = 6;
              return cc.vv.gameData.awaitTime(2);

             case 6:
              if (!(freeGameInfo.wildIdxs.length > 0)) {
                _context38.next = 14;
                break;
              }
              FG_beishu_intro.getComponent(sp.Skeleton).setAnimation(0, "beishu_intro", false);
              _this21.showFreeInfo(cc.find("slots/pink", _this21._freeNode), cc.find("zi", _this21._freeNode), freeGameInfo.wildIdxs.length);
              _context38.next = 11;
              return cc.vv.gameData.awaitTime(2);

             case 11:
              for (i = 0; i < freeGameInfo.wildIdxs.length; i++) {
                index = freeGameInfo.wildIdxs[i];
                symbol = _this21.GetSymbolByIdx(index);
                wild = cc.instantiate(cc.find("wild", _this21.node));
                wild.active = true;
                wild.parent = cc.find("wild_root", _this21.node);
                position = symbol.node.convertToWorldSpaceAR(cc.v2(0, 0));
                position = wild.parent.convertToNodeSpaceAR(position);
                wild.position = position;
                wild.scale = 0;
                cc.tween(wild).delay(.5 * i).call(function() {
                  Global.SlotsSoundMgr.playEffect("stickW_mystery");
                }).to(.5, {
                  scale: 1
                }, {
                  easing: "backOut"
                }).start();
              }
              _context38.next = 14;
              return cc.vv.gameData.awaitTime(.5 * freeGameInfo.wildIdxs.length);

             case 14:
              FG_beishu_intro.getComponent(sp.Skeleton).setAnimation(0, "beishu_intro", false);
              _this21.showFreeInfo(cc.find("slots/blue", _this21._freeNode), cc.find("lan", _this21._freeNode), freeGameInfo.multiple + "X");
              _context38.next = 18;
              return cc.vv.gameData.awaitTime(2);

             case 18:
              if (!(freeGameInfo.mysteryIdxs.length > 0)) {
                _context38.next = 46;
                break;
              }
              FG_beishu_intro.getComponent(sp.Skeleton).setAnimation(0, "beishu_intro", false);
              _this21.showFreeInfo(cc.find("slots/green", _this21._freeNode), cc.find("lv", _this21._freeNode), freeGameInfo.mysteryIdxs.length);
              _context38.next = 23;
              return cc.vv.gameData.awaitTime(2);

             case 23:
              Global.SlotsSoundMgr.playEffect("mysteryShow");
              _i5 = 0;

             case 25:
              if (!(_i5 < freeGameInfo.mysteryIdxs.length)) {
                _context38.next = 44;
                break;
              }
              _index = freeGameInfo.mysteryIdxs[_i5];
              _symbol3 = _this21.GetSymbolByIdx(_index);
              question_mark = cc.instantiate(cc.find("question_mark", _this21.node));
              question_mark.active = true;
              question_mark.parent = cc.find("question_mark_root", _this21.node);
              _position = _symbol3.node.convertToWorldSpaceAR(cc.v2(0, 0));
              _position = question_mark.parent.convertToNodeSpaceAR(_position);
              question_mark.position = _position;
              spine = question_mark.getComponent(sp.Skeleton);
              Global.SlotsSoundMgr.playEffect("candyNumberCollect");
              spine.setAnimation(0, "intro", false);
              spine.addAnimation(0, "move1", false);
              spine.addAnimation(0, "idle2", true);
              _context38.next = 41;
              return cc.vv.gameData.awaitTime(.5);

             case 41:
              _i5++;
              _context38.next = 25;
              break;

             case 44:
              _context38.next = 46;
              return cc.vv.gameData.awaitTime(1);

             case 46:
              _this21._freeReels = [];
              _this21._mysteryReels = [];
              _iterator13 = _createForOfIteratorHelper(_this21._reels);
              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                  reel = _step13.value;
                  freeGameInfo.mysteryIdxs.includes(reel.GetReelIdx() + 1) ? _this21._mysteryReels.push(reel) : _this21._freeReels.push(reel);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
              cc.vv.gameData.SetTotalFree(freeGameInfo.freeCnt);
              cc.vv.gameData.SetFreeTime(freeGameInfo.freeCnt);
              _this21._inFreeGame = true;
              Global.SlotsSoundMgr.stopBgm();
              Global.SlotsSoundMgr.playBgm("fgbgm");
              FG_beishu_intro.active = false;
              _this21.CanDoNextRound();

             case 57:
             case "end":
              return _context38.stop();
            }
          }, _callee38);
        }))();
      },
      showFreeInfo: function showFreeInfo(centerNode, freeNode, value) {
        Global.SlotsSoundMgr.playEffect("candyNumber");
        centerNode.active = true;
        centerNode.scale = 0;
        centerNode.position = cc.v2(0, 0);
        var endPos = freeNode.convertToWorldSpaceAR(cc.v2(0, 0));
        endPos = this.node.convertToNodeSpaceAR(endPos);
        cc.find("num", centerNode).getComponent(cc.Label).string = value;
        cc.tween(centerNode).to(.5, {
          scale: 1
        }).delay(.5).call(function() {
          var layout = cc.find("layout", freeNode);
          var _iterator14 = _createForOfIteratorHelper(layout.children), _step14;
          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
              var child = _step14.value;
              cc.tween(child).to(.5, {
                scale: 0
              }).removeSelf().start();
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
          Global.SlotsSoundMgr.playEffect("candyNumberCollect");
        }).to(.5, {
          position: endPos,
          scale: 0
        }).call(function() {
          centerNode.active = false;
          var num = cc.find("num", freeNode);
          num.active = true;
          num.scale = 0;
          num.getComponent(cc.Label).string = value;
          cc.tween(num).to(.5, {
            scale: 1
          }).start();
        }).start();
      },
      update: function update(dt) {
        this._super(dt);
        if (this._generateCandy) {
          this._candyTimer += dt;
          if (this._candyTimer >= this._candyInterval) {
            this.generateCandy();
            this._candyInterval = .5 * Math.random();
            this._candyTimer = 0;
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Sumo_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b49344k/TZG5LjRMxPpY1Dh", "Sumo_Symbol");
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
      properties: {},
      playScatterAnimation: function playScatterAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            nodeSp.setAnimation(0, "Scatter_100to140", false);
            nodeSp.addAnimation(0, "Scatter_140", true);
          }
        }
      },
      playTriggerFreeAnimation: function playTriggerFreeAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
          var nodeSp = topShowNode.getComponent(sp.Skeleton);
          if (nodeSp) {
            nodeSp.setAnimation(0, "Scatter_02_140", false);
            nodeSp.addAnimation(0, "Scatter_140to100", false);
            nodeSp.addAnimation(0, "Scatter_02", true);
          }
        }
      },
      ShowRandomSymbol: function ShowRandomSymbol() {
        if (cc.vv.gameData.isBonusGame()) {
          var randVal;
          var card = cc.vv.gameData.GetBonusGame().card;
          var randomSymbols = [ card, 14, 14, 14, 14 ];
          var randIdx = Global.random(1, randomSymbols.length);
          randVal = randomSymbols[randIdx - 1];
          this.ShowById(randVal);
        } else this._super();
      },
      ShowNormal: function ShowNormal() {
        this._super();
        this._showNode.scale = 1;
      },
      playMysteryAnimation: function playMysteryAnimation(mysteryId) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              _this._showNode.stopAllActions();
              _this._showNode.scale = 1;
              cc.tween(_this._showNode).to(.5, {
                scale: 0
              }).start();
              _context.next = 5;
              return cc.vv.gameData.awaitTime(.5);

             case 5:
              _this._showNode.scale = 1;
              _this.ShowById(mysteryId);
              _this._showNode.scale = 0;
              cc.tween(_this._showNode).to(.5, {
                scale: 1
              }).start();

             case 9:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      playTriggerBonusAnimation: function playTriggerBonusAnimation() {
        this._showNode && (this._showNode.active = false);
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node) {
          this._state = "win";
          this._showNode && (this._showNode.active = false);
          var aniNode = this.setAnimationToTop(true);
          aniNode.active = true;
          var topShowNode = cc.find(cfg.symbol[id].win_node, aniNode);
          topShowNode.active = true;
          if (cfg.symbol[id].win_ani && "" != cfg.symbol[id].win_ani.name) {
            aniNode.zIndex = cfg.symbol[id].win_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            aniNode.scale = 1.2;
            cc.find("BG_yingfen", topShowNode).active = true;
            var nodeSp = topShowNode.getComponent(sp.Skeleton);
            nodeSp && nodeSp.setAnimation(0, cfg.symbol[id].win_ani.name, true);
          }
        }
      },
      playTriggerMultAnimation: function playTriggerMultAnimation() {
        var _this2 = this;
        var id = this._id;
        var cfg = cc.vv.gameData.getGameCfg();
        if (cfg.symbol[id] && cfg.symbol[id].win_node && cfg.symbol[id].trigger_ani) {
          this._state = "trigger";
          this._showNode && (this._showNode.active = false);
          this._showNode = cc.find(cfg.symbol[id].win_node, this.node);
          this._showNode.active = true;
          if ("" !== cfg.symbol[id].trigger_ani.name) {
            this.node.zIndex = cfg.symbol[id].stop_ani.zIndex - this._symbolIdx + 10 * this._reelIdx;
            var nodeSp = this._showNode.getComponent(sp.Skeleton);
            if (nodeSp) {
              nodeSp.setAnimation(0, cfg.symbol[id].trigger_ani.name, false);
              nodeSp.setCompleteListener(function() {
                nodeSp.setCompleteListener(null);
                cc.tween(_this2._showNode).to(.5, {
                  scale: 0
                }).call(function() {
                  Global.SlotsSoundMgr.playEffect("reelbg");
                  _this2.ShowById(cc.vv.gameData.GetBonusGame().card);
                }).to(.5, {
                  scale: 1
                }).start();
              });
            }
          }
        }
      },
      changeWild: function changeWild() {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              return _context3.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                     case 0:
                      Global.SlotsSoundMgr.playEffect("sgZooDW");
                      if (!_this3._showNode) {
                        _context2.next = 10;
                        break;
                      }
                      cc.tween(_this3._showNode).to(.4, {
                        scale: 0
                      }).start();
                      _context2.next = 5;
                      return cc.vv.gameData.awaitTime(.4);

                     case 5:
                      _this3.ShowById(101);
                      cc.tween(_this3._showNode).to(.4, {
                        scale: 1
                      }).start();
                      _context2.next = 9;
                      return cc.vv.gameData.awaitTime(.4);

                     case 9:
                      success();

                     case 10:
                     case "end":
                      return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function(_x) {
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
      showBonusKuang: function showBonusKuang() {
        this._showNode && (cc.find("BG_yingfen", this._showNode).active = true);
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  Sumo_WheelGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da5efOF8epKEIpG1LfCpAv8", "Sumo_WheelGame");
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
        base_prize: cc.Node,
        rate: cc.Node,
        wheels: [ cc.Node ],
        wheel_win: cc.Node,
        boxes: [ cc.Node ],
        wheel_spin: cc.Node,
        btn_spin: cc.Node,
        _endCallback: null,
        _canSpin: false
      },
      startWheelGame: function startWheelGame(gameInfo) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
            var i, result, _iterator, _step, resultElement, _i, num, box, j, func;
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
               case 0:
                _this.reset();
                _this._endCallback = success;
                _this._result = [ 0, 0, 0, 0, 0, 0 ];
                _this._angles = [ 0, 0, 0 ];
                _this._canSpin = true;
                _this.base_prize.getComponent(cc.Label).string = Global.formatNumShort(gameInfo.startPrize, 0);
                for (i = 0; i < gameInfo.currStep; i++) {
                  result = gameInfo.finalColorComb[i];
                  _iterator = _createForOfIteratorHelper(result);
                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                      resultElement = _step.value;
                      _this._result[resultElement - 1]++;
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }
                for (_i = 0; _i < _this._result.length; _i++) {
                  num = _this._result[_i];
                  box = _this.boxes[_i];
                  for (j = 0; j < num; j++) cc.find("reward_" + (j + 1), box).active = true;
                }
                _this.btn_spin.off(cc.Node.EventType.TOUCH_END);
                func = function() {
                  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                    var req, result, animations, colors, suffix, info, comb, _i2, index, _loop, _i3, _iterator2, _step2, _box, _i4, startNode, particle, startPos, endPos, fly_star_end, _iterator3, _step3, wheel;
                    return regeneratorRuntime.wrap(function _callee2$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                       case 0:
                        if (_this._canSpin) {
                          _context3.next = 2;
                          break;
                        }
                        return _context3.abrupt("return");

                       case 2:
                        Global.SlotsSoundMgr.playEffect("sgSkyWheelClick");
                        _this._canSpin = false;
                        _this.wheel_spin.getComponent(sp.Skeleton).setAnimation(0, "spin_jingzhen", true);
                        _this.wheel_spin.color = cc.Color.GRAY;
                        req = {
                          rtype: 3
                        };
                        _context3.next = 9;
                        return cc.vv.gameData.reqSubGame(req);

                       case 9:
                        result = _context3.sent;
                        if (!(200 === result.code)) {
                          _context3.next = 78;
                          break;
                        }
                        cc.vv.gameData.setMapInfo(result.data.mapInfo);
                        Global.SlotsSoundMgr.playEffect("sgSkyWheelspin");
                        animations = [ "win_B", "win_M", "win_S" ];
                        colors = [ "huang", "hong", "zi", "lan", "lv", "qing" ];
                        suffix = [ "_b", "_m", "_s" ];
                        info = result.data.mapInfo.gameInfo;
                        comb = info.finalColorComb[info.currStep - 1];
                        _i2 = 0;

                       case 19:
                        if (!(_i2 < comb.length)) {
                          _context3.next = 33;
                          break;
                        }
                        index = _this.getResultIndex(_i2, comb[_i2]);
                        _context3.next = 23;
                        return _this._rotateWheel(index, _i2);

                       case 23:
                        cc.find("gray", _this.wheels[_i2]).active = true;
                        _this.wheel_win.active = true;
                        _this.wheel_win.getComponent(sp.Skeleton).setSkin("win_" + colors[comb[_i2] - 1] + suffix[_i2]);
                        _this.wheel_win.getComponent(sp.Skeleton).setAnimation(0, animations[_i2], false);
                        _context3.next = 29;
                        return cc.vv.gameData.awaitTime(1);

                       case 29:
                        _this.wheel_win.active = false;

                       case 30:
                        _i2++;
                        _context3.next = 19;
                        break;

                       case 33:
                        _loop = regeneratorRuntime.mark(function _loop(_i3) {
                          var startNode, particle, startPos, endNode, endPos;
                          return regeneratorRuntime.wrap(function _loop$(_context2) {
                            while (1) switch (_context2.prev = _context2.next) {
                             case 0:
                              Global.SlotsSoundMgr.playEffect("sgCollect");
                              startNode = cc.find("start", _this.wheels[_i3]);
                              particle = cc.instantiate(cc.find("fly_star", _this.node.parent));
                              particle.active = true;
                              particle.parent = _this.node;
                              startPos = startNode.convertToWorldSpaceAR(cc.v2(0, 0));
                              startPos = _this.node.convertToNodeSpaceAR(startPos);
                              particle.position = startPos;
                              _this._result[comb[_i3] - 1]++;
                              endNode = cc.find("reward_" + _this._result[comb[_i3] - 1], _this.boxes[comb[_i3] - 1]);
                              endPos = endNode.convertToWorldSpaceAR(cc.v2(0, 0));
                              endPos = _this.node.convertToNodeSpaceAR(endPos);
                              cc.tween(particle).to(.5, {
                                position: endPos
                              }).call(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                  while (1) switch (_context.prev = _context.next) {
                                   case 0:
                                    endNode.active = true;

                                   case 1:
                                   case "end":
                                    return _context.stop();
                                  }
                                }, _callee);
                              }))).removeSelf().start();
                              _context2.next = 15;
                              return cc.vv.gameData.awaitTime(1);

                             case 15:
                             case "end":
                              return _context2.stop();
                            }
                          }, _loop);
                        });
                        _i3 = 0;

                       case 35:
                        if (!(_i3 < 3)) {
                          _context3.next = 40;
                          break;
                        }
                        return _context3.delegateYield(_loop(_i3), "t0", 37);

                       case 37:
                        _i3++;
                        _context3.next = 35;
                        break;

                       case 40:
                        if (!info.isEnd) {
                          _context3.next = 72;
                          break;
                        }
                        _iterator2 = _createForOfIteratorHelper(_this.boxes);
                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                            _box = _step2.value;
                            for (_i4 = 0; _i4 < 3; _i4++) cc.find("reward_" + (_i4 + 1), _box).active = false;
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                        startNode = _this.boxes[info.finalColorId - 1];
                        particle = cc.instantiate(cc.find("fly_star", _this.node.parent));
                        particle.active = true;
                        particle.parent = _this.node;
                        startPos = startNode.convertToWorldSpaceAR(cc.v2(0, 0));
                        startPos = _this.node.convertToNodeSpaceAR(startPos);
                        particle.position = startPos;
                        endPos = _this.rate.convertToWorldSpaceAR(cc.v2(0, 0));
                        endPos = _this.node.convertToNodeSpaceAR(endPos);
                        cc.tween(particle).to(.5, {
                          position: endPos
                        }).removeSelf().start();
                        _context3.next = 55;
                        return cc.vv.gameData.awaitTime(.5);

                       case 55:
                        fly_star_end = cc.find("fly_star_end", _this.rate.parent);
                        fly_star_end.active = true;
                        fly_star_end.getComponent(sp.Skeleton).setAnimation(0, "multi_end3", false);
                        _context3.next = 60;
                        return cc.vv.gameData.awaitTime(.5);

                       case 60:
                        fly_star_end.active = false;
                        _this.rate.scale = 1;
                        _this.rate.getComponent(cc.Label).string = info.mult + "X";
                        cc.tween(_this.rate).to(.1, {
                          scale: 1.1
                        }).to(.1, {
                          scale: 1
                        }).start();
                        _context3.next = 66;
                        return cc.vv.gameData.awaitTime(.2);

                       case 66:
                        _context3.next = 68;
                        return cc.vv.gameData.GetSlotsScript().popMiniGameResult(info.winCoin, 1);

                       case 68:
                        cc.vv.gameData.AddCoin(info.winCoin, true);
                        _this._endCallback && _this._endCallback();
                        _context3.next = 78;
                        break;

                       case 72:
                        _this.wheel_spin.getComponent(sp.Skeleton).setAnimation(0, "spin_idle", true);
                        _this.wheel_spin.color = cc.Color.WHITE;
                        _iterator3 = _createForOfIteratorHelper(_this.wheels);
                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                            wheel = _step3.value;
                            cc.find("gray", wheel).active = false;
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                        _this._canSpin = true;
                        cc.vv.gameData.checkAutoPlay(_this.btn_spin, func);

                       case 78:
                       case "end":
                        return _context3.stop();
                      }
                    }, _callee2);
                  }));
                  return function func() {
                    return _ref2.apply(this, arguments);
                  };
                }();
                cc.vv.gameData.checkAutoPlay(_this.btn_spin, func);
                _this.btn_spin.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                     case 0:
                      _this.btn_spin.stopAllActions();
                      _context4.next = 3;
                      return func();

                     case 3:
                     case "end":
                      return _context4.stop();
                    }
                  }, _callee3);
                })));

               case 12:
               case "end":
                return _context5.stop();
              }
            }, _callee4);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      getResultIndex: function getResultIndex(wheelIndex, color) {
        var cfg = cc.vv.gameData.getGameCfg().wheelCfg[wheelIndex];
        return cfg.indexOf(color);
      },
      _rotateWheel: function _rotateWheel(endIndex, wheelIndex) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(success) {
                  var angle, action;
                  return regeneratorRuntime.wrap(function _callee5$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      angle = 36 * (endIndex - _this2._angles[wheelIndex]) - 2160;
                      _this2._angles[wheelIndex] = endIndex;
                      action = cc.rotateBy(4, angle).easing(cc.easeSineInOut());
                      cc.find("wheel", _this2.wheels[wheelIndex]).runAction(cc.sequence(action, cc.callFunc(function() {
                        success();
                      })));

                     case 4:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee5);
                }));
                return function(_x2) {
                  return _ref5.apply(this, arguments);
                };
              }()));

             case 1:
             case "end":
              return _context7.stop();
            }
          }, _callee6);
        }))();
      },
      reset: function reset() {
        var _iterator4 = _createForOfIteratorHelper(this.wheels), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var wheel = _step4.value;
            cc.find("wheel", wheel).angle = 0;
            cc.find("gray", wheel).active = false;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var _iterator5 = _createForOfIteratorHelper(this.boxes), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var box = _step5.value;
            for (var i = 0; i < 3; i++) cc.find("reward_" + (i + 1), box).active = false;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        this.wheel_win.active = false;
        this.wheel_spin.getComponent(sp.Skeleton).setAnimation(0, "spin_idle", true);
        this.wheel_spin.color = cc.Color.WHITE;
        this._endCallback = null;
        this._canSpin = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  Sumo_ZooGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2bafVA7ihMcLstRN0XQM5k", "Sumo_ZooGame");
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
    var animalsName = [ "xiang", "hu", "ma" ];
    cc.Class({
      extends: cc.Component,
      properties: {
        title: cc.Node,
        select_root: cc.Node,
        select_animals: [ cc.Node ],
        scratch_root: cc.Node,
        scratch_animal: cc.Node,
        scratch_items: [ cc.Node ],
        slots_root: cc.Node,
        symbols: [ cc.Node ],
        free_times: cc.Node,
        _canScratch: false,
        _endCallback: null
      },
      startZooGame: function startZooGame(gameInfo) {
        var _this = this;
        return new Promise(function() {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(success) {
            var _loop, i;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
               case 0:
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playBgm("zoobgm");
                _this.reset();
                _this._endCallback = success;
                if (0 === gameInfo.state) {
                  _this.select_root.active = true;
                  _this.scratch_root.active = false;
                  _this.slots_root.active = false;
                  _this.title.getComponent(sp.Skeleton).setAnimation(0, "title02_EN", true);
                  _loop = function _loop(i) {
                    var animal = _this.select_animals[i];
                    animal.active = true;
                    animal.getComponent(sp.Skeleton).setAnimation(0, "card_" + animalsName[i] + "_idle", true);
                    var touch = cc.find("touch", animal);
                    touch.off(cc.Node.EventType.TOUCH_END);
                    touch.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                      var _iterator, _step, _selectAnimal, req, result, choiceId, selectAnimal, _iterator2, _step2, selectAnimal1;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                         case 0:
                          Global.SlotsSoundMgr.playEffect("sgZooClick");
                          _iterator = _createForOfIteratorHelper(_this.select_animals);
                          try {
                            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                              _selectAnimal = _step.value;
                              cc.find("touch", _selectAnimal).off(cc.Node.EventType.TOUCH_END);
                            }
                          } catch (err) {
                            _iterator.e(err);
                          } finally {
                            _iterator.f();
                          }
                          req = {
                            rtype: 3,
                            choiceId: i + 1
                          };
                          _context.next = 6;
                          return cc.vv.gameData.reqSubGame(req);

                         case 6:
                          result = _context.sent;
                          if (!(200 === result.code)) {
                            _context.next = 21;
                            break;
                          }
                          choiceId = result.data.choiceId;
                          selectAnimal = cc.instantiate(_this.select_animals[choiceId - 1]);
                          selectAnimal.parent = _this.node;
                          selectAnimal.position = cc.v2(0, 0);
                          selectAnimal.angle = 0;
                          _iterator2 = _createForOfIteratorHelper(_this.select_animals);
                          try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                              selectAnimal1 = _step2.value;
                              selectAnimal1.active = false;
                            }
                          } catch (err) {
                            _iterator2.e(err);
                          } finally {
                            _iterator2.f();
                          }
                          selectAnimal.getComponent(sp.Skeleton).setAnimation(0, "card_click_" + animalsName[choiceId - 1], false);
                          selectAnimal.getComponent(sp.Skeleton).setCompleteListener(function() {
                            selectAnimal.getComponent(sp.Skeleton).setCompleteListener(null);
                            selectAnimal.removeFromParent();
                          });
                          _this.title.active = false;
                          _context.next = 20;
                          return cc.vv.gameData.awaitTime(2);

                         case 20:
                          _this.scratchSymbol(result.data.mapInfo.gameInfo);

                         case 21:
                         case "end":
                          return _context.stop();
                        }
                      }, _callee);
                    })));
                  };
                  for (i = 0; i < _this.select_animals.length; i++) _loop(i);
                } else 1 === gameInfo.state ? _this.scratchSymbol(gameInfo) : _this.startSlot(gameInfo);

               case 5:
               case "end":
                return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      scratchSymbol: function scratchSymbol(gameInfo) {
        var _this2 = this;
        return new Promise(function() {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(success) {
            var _loop2, i;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
               case 0:
                _this2.select_root.active = false;
                _this2.scratch_root.active = true;
                _this2.title.active = true;
                _this2.title.getComponent(sp.Skeleton).setAnimation(0, "title01_EN", true);
                _this2.scratch_animal.getComponent("ImgSwitchCmp").setIndex(gameInfo.scratchCard - 1);
                _this2._canScratch = true;
                _loop2 = function _loop2(i) {
                  var item = gameInfo.items[i];
                  var node = _this2.scratch_items[i];
                  if (item.isOpen) {
                    cc.find("spine", node).active = false;
                    cc.find("glow", node).active = false;
                    cc.find("icon", node).getComponent("ImgSwitchCmp").setIndex(item.card - 4);
                  } else {
                    cc.find("spine", node).active = true;
                    cc.find("spine", node).getComponent(sp.Skeleton).setAnimation(0, "card_idle", true);
                    cc.find("glow", node).active = false;
                    cc.find("icon", node).getComponent("ImgSwitchCmp").setIndex(item.card - 4);
                  }
                  node.off(cc.Node.EventType.TOUCH_END);
                  node.on(cc.Node.EventType.TOUCH_END, _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                    var req, result, info, choiceId, selectNode, selectInfo, spine, array, _iterator3, _step3, arrayElement, glow;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                       case 0:
                        node.off(cc.Node.EventType.TOUCH_END);
                        if (_this2._canScratch) {
                          _context3.next = 3;
                          break;
                        }
                        return _context3.abrupt("return");

                       case 3:
                        Global.SlotsSoundMgr.playEffect("sgZooScatch");
                        req = {
                          rtype: 3,
                          choiceId: i + 1
                        };
                        _context3.next = 7;
                        return cc.vv.gameData.reqSubGame(req);

                       case 7:
                        result = _context3.sent;
                        if (!(200 === result.code)) {
                          _context3.next = 37;
                          break;
                        }
                        info = result.data.mapInfo.gameInfo;
                        choiceId = result.data.choiceId;
                        selectNode = _this2.scratch_items[choiceId - 1];
                        selectInfo = info.items[choiceId - 1];
                        cc.find("icon", selectNode).getComponent("ImgSwitchCmp").setIndex(selectInfo.card - 4);
                        spine = cc.find("spine", selectNode).getComponent(sp.Skeleton);
                        spine.setAnimation(0, "card_gua", false);
                        array = _this2.getCards(selectInfo.card, info.items);
                        if (!(array.length >= 2)) {
                          _context3.next = 23;
                          break;
                        }
                        _context3.next = 20;
                        return cc.vv.gameData.awaitTime(1);

                       case 20:
                        Global.SlotsSoundMgr.playEffect("sgZooMatch");
                        _iterator3 = _createForOfIteratorHelper(array);
                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                            arrayElement = _step3.value;
                            glow = cc.find("glow", _this2.scratch_items[arrayElement]);
                            glow.active = true;
                            glow.getComponent(sp.Skeleton).setAnimation(0, "win_glow", false);
                            glow.getComponent(sp.Skeleton).addAnimation(0, "win_glow", false);
                            glow.getComponent(sp.Skeleton).addAnimation(0, "win_glow", false);
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }

                       case 23:
                        if (!(2 === info.state)) {
                          _context3.next = 29;
                          break;
                        }
                        _context3.next = 26;
                        return cc.vv.gameData.awaitTime(1);

                       case 26:
                        _this2.startSlot(info);
                        _context3.next = 37;
                        break;

                       case 29:
                        if (!(array.length >= 2)) {
                          _context3.next = 34;
                          break;
                        }
                        _context3.next = 32;
                        return cc.vv.gameData.awaitTime(1);

                       case 32:
                        _context3.next = 36;
                        break;

                       case 34:
                        _context3.next = 36;
                        return cc.vv.gameData.awaitTime(.5);

                       case 36:
                        _this2._canScratch = true;

                       case 37:
                       case "end":
                        return _context3.stop();
                      }
                    }, _callee3);
                  })));
                };
                for (i = 0; i < gameInfo.items.length; i++) _loop2(i);

               case 8:
               case "end":
                return _context4.stop();
              }
            }, _callee4);
          }));
          return function(_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
      },
      startSlot: function startSlot(gameInfo) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var i;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this3.select_root.active = false;
              cc.tween(_this3.title).to(.5, {
                opacity: 0
              }).start();
              cc.tween(_this3.scratch_root).to(.5, {
                opacity: 0
              }).start();
              _this3.slots_root.active = true;
              _this3.slots_root.opacity = 0;
              cc.tween(_this3.slots_root).to(.5, {
                opacity: 255
              }).start();
              _this3.free_times.getComponent(cc.Label).string = 3 - gameInfo.restCnt + "/3";
              for (i = 0; i < _this3.symbols.length; i++) _this3.symbols[i].getComponent("ImgSwitchCmp").setIndex(gameInfo.fixCards[i] - 4);
              _context5.next = 10;
              return cc.vv.gameData.awaitTime(.5);

             case 10:
              _this3._slotsScript = cc.find("slots", _this3.slots_root).addComponent("Sumo_ZooSlots");
              _this3._restCnt = gameInfo.restCnt;
              _this3._slotsScript.Init();
              _context5.next = 15;
              return cc.vv.gameData.awaitTime(1);

             case 15:
              cc.vv.gameData.setIsZooGame(true);
              _this3.reqSpin();

             case 17:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          var winCoin;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              _context7.next = 2;
              return _this4._slotsScript.changeWild(_this4._subGameData.gameInfo.slot.convertIdxs);

             case 2:
              _this4.ShowWinTrace();
              winCoin = _this4._subGameData.gameInfo.slot.winCoin;
              cc.vv.gameData.GetSlotsScript().ShowBottomWin(winCoin, winCoin, false, _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                   case 0:
                    _context6.next = 2;
                    return cc.vv.gameData.awaitTime(.5);

                   case 2:
                    if (!_this4._subGameData.gameInfo.isEnd) {
                      _context6.next = 11;
                      break;
                    }
                    _context6.next = 5;
                    return cc.vv.gameData.GetSlotsScript().popMiniGameResult(_this4._subGameData.gameInfo.winCoin, 2);

                   case 5:
                    cc.vv.gameData.setIsZooGame(false);
                    _this4._endCallback && _this4._endCallback();
                    Global.SlotsSoundMgr.stopBgm();
                    Global.SlotsSoundMgr.playNormalBgm();
                    _context6.next = 12;
                    break;

                   case 11:
                    _this4.reqSpin();

                   case 12:
                   case "end":
                    return _context6.stop();
                  }
                }, _callee6);
              })));

             case 5:
             case "end":
              return _context7.stop();
            }
          }, _callee7);
        }))();
      },
      ShowWinTrace: function ShowWinTrace() {
        var allWinIdx = [];
        for (var i = 0; i < this._subGameData.gameInfo.slot.zjLuXian.length; i++) {
          var item = this._subGameData.gameInfo.slot.zjLuXian[i];
          for (var idx = 0; idx < item.indexs.length; idx++) allWinIdx[item.indexs[idx]] = 1;
        }
        for (var key in allWinIdx) {
          var symbol = this._slotsScript.GetSymbolByIdx(Number(key));
          if (symbol) {
            symbol.playWinAnimation();
            symbol.ShowKuang();
          }
        }
      },
      getSubGameData: function getSubGameData() {
        return this._subGameData;
      },
      GetLastStopSlotReel: function GetLastStopSlotReel() {
        return this._slotsScript.GetLastStopReelIdx();
      },
      StopMove: function StopMove() {
        this._slotsScript.StopMove();
      },
      reqSpin: function reqSpin() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
          var reqdata, result;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
             case 0:
              _this5._subGameData = null;
              _this5._restCnt--;
              _this5.free_times.getComponent(cc.Label).string = 3 - _this5._restCnt + "/3";
              _this5._slotsScript.StartMove();
              reqdata = {
                rtype: 3
              };
              _context8.next = 7;
              return cc.vv.gameData.reqSubGame(reqdata);

             case 7:
              result = _context8.sent;
              if (200 === result.code && !result.spcode) {
                _this5._subGameData = result.data.mapInfo;
                cc.vv.gameData.setMapInfo(result.data.mapInfo);
                _this5._slotsScript.SetSlotsResult(result.data.mapInfo.gameInfo.slot.cards);
              }

             case 9:
             case "end":
              return _context8.stop();
            }
          }, _callee8);
        }))();
      },
      getCards: function getCards(card, items) {
        var array = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          item.card === card && item.isOpen && array.push(i);
        }
        return array;
      },
      reset: function reset() {
        this._restCnt = 0;
        this._endCallback = null;
      }
    });
    cc._RF.pop();
  }, {} ],
  Sumo_ZooReel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d4fcBT2/FB+oBp4j3G/xdU", "Sumo_ZooReel");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      Init: function Init(idx, nCount, node) {
        this._holderNode = cc.find("mask/holder", this.node);
        this._holderOrigPosY = this._holderNode.position.y;
        this._super(idx, nCount, node);
      },
      OnReelSpinEnd: function OnReelSpinEnd() {
        this._reelState = [];
        var idx = cc.vv.gameData.getZooScript().GetLastStopSlotReel();
        if (this._reelIdx === idx) {
          cc.log(cc.js.formatStr("OnReelSpinEnd, %s", idx));
          cc.vv.gameData.getZooScript().OnSpinEnd();
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
      },
      OnReelBounsActionEnd: function OnReelBounsActionEnd() {
        if (this._originResult) for (var i = 0; i < this._originResult.length; i++) this._symbols[i].StopMoveEnd(); else cc.log("\u56de\u5f39\u7ed3\u675f\uff0c\u6570\u636e\u5df2\u7ecf\u88ab\u6e05\u7a7a\u4e86");
        this.OnReelSpinEnd();
      },
      playReelStop: function playReelStop() {
        this._super();
        this._reelIdx / 5 !== 0 && this._reelIdx % 5 !== 4 || Global.SlotsSoundMgr.playEffect("reelstop");
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Sumo_ZooSlots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec1edQUrdlK75zUC7XlvNND", "Sumo_ZooSlots");
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
      onLoad: function onLoad() {
        this._super();
      },
      start: function start() {},
      Init: function Init() {
        this._topScript = cc.vv.gameData.GetTopScript();
        this._bottomScript = cc.vv.gameData.GetBottomScript();
        this._cfg = cc.vv.gameData.getGameCfg();
        this._col = this._cfg.col;
        this._row = this._cfg.row;
        this._topAniNode = cc.find("top_ani", this.node);
        this.createReels(this._col, this._row);
      },
      createReels: function createReels(col, row) {
        for (var i = 0; i < col; i++) {
          var node = cc.find("reels/reel" + (i + 1), this.node);
          if (!node.getComponent("Sumo_ZooReel")) {
            var scp = node.addComponent("Sumo_ZooReel");
            scp.Init(i, row, this._topAniNode);
            this._reels.push(scp);
          }
        }
      },
      changeWild: function changeWild(idxs) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var i, idx, symbol;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              i = 0;

             case 1:
              if (!(i < idxs.length)) {
                _context.next = 10;
                break;
              }
              idx = idxs[i];
              symbol = _this.GetSymbolByIdx(idx);
              if (!symbol) {
                _context.next = 7;
                break;
              }
              _context.next = 7;
              return symbol.changeWild();

             case 7:
              i++;
              _context.next = 1;
              break;

             case 10:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      GetReelStopInter: function GetReelStopInter(reelIdx) {
        var nIter = this._cfg.reelStopInter || .6;
        return (reelIdx % 5 + Math.floor(reelIdx / 5)) * nIter;
      },
      OnSpinEnd: function OnSpinEnd() {},
      CanStopSlot: function CanStopSlot() {
        return null != cc.vv.gameData.getZooScript().getSubGameData();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ]
}, {}, [ "Sumo_BallGame", "Sumo_BallonGame", "Sumo_BallonReel", "Sumo_BallonSlots", "Sumo_BonusGameManager", "Sumo_BonusReel", "Sumo_BonusSlots", "Sumo_Cfg", "Sumo_GameData", "Sumo_IceGame", "Sumo_Logic", "Sumo_Map", "Sumo_PickGame", "Sumo_Reel", "Sumo_Slots", "Sumo_Symbol", "Sumo_WheelGame", "Sumo_ZooGame", "Sumo_ZooReel", "Sumo_ZooSlots" ]);