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
  Athena_Cfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27c8azNJZBMp6qs78LkAhyr", "Athena_Cfg");
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
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 2, {
        node: "symbol_2",
        win_node: "animation_2",
        stop_ani: {
          name: "animation",
          zIndex: 100
        },
        win_ani: {
          name: "animation1",
          zIndex: 500
        }
      }), _defineProperty(_symbol, 3, {
        node: "symbol_3",
        win_node: "animation_3",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 4, {
        node: "symbol_4",
        win_node: "animation_4",
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 5, {
        node: "symbol_5",
        win_node: "animation_5",
        win_ani: {
          name: "animation",
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
      }), _defineProperty(_symbol, 13, {
        node: "symbol_13",
        win_node: "animation_13",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 14, {
        node: "symbol_14",
        win_node: "animation_14",
        stop_ani: {
          name: "animation1",
          zIndex: 100
        },
        win_ani: {
          name: "animation",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 101, {
        node: "symbol_101",
        win_node: "animation_101",
        stop_ani: {
          name: "animation3_1",
          zIndex: 100
        },
        win_ani: {
          name: "animation3",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 102, {
        node: "symbol_102",
        win_node: "animation_102",
        stop_ani: {
          name: "animation4_1",
          zIndex: 100
        },
        win_ani: {
          name: "animation4",
          zIndex: 300
        }
      }), _defineProperty(_symbol, 103, {
        node: "symbol_103",
        win_node: "animation_103",
        win_ani: {
          name: "animation2",
          zIndex: 300
        }
      }), _symbol),
      scripts: {
        Top: "LMSlots_Top_Base",
        Bottom: "LMSlots_Bottom_Base",
        Slots: "Athena_Slots",
        Reels: "Athena_Reel",
        Symbols: "Athena_Symbol"
      },
      col: 5,
      row: 3,
      symbolPrefab: "symbol",
      symbolSize: {
        width: 130,
        height: 120
      },
      randomSymbols: [ 1, 3, 4, 5, 6, 8, 9, 10, 11, 7, 12, 13, 14 ],
      wildId: 1,
      scatterId: 2,
      redDiamondId: 13,
      blueDiamondId: 14,
      extraOneSpinId: 101,
      extraTwoSpinId: 102,
      kuang: "kuang",
      speed: 3e3,
      reelStopInter: .2,
      auto_stop_time: 1,
      bounceInfo: {
        distance: 30,
        time: .1
      },
      AddAntiTime: 1.5,
      reelStateInfo: [ {
        id: [ 2 ],
        mini: 3,
        counts: [ 1, 0, 1, 0, 1 ],
        antiNode: "node_anti",
        path: "games/GodAthena/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_scatter",
        antSound: "reel_notify1",
        antSpeed: 2e3
      }, {
        id: [ 13 ],
        mini: 5,
        counts: [ 2, 2, 2, 2, 2 ],
        antiNode: "pink_anti",
        path: "games/GodAthena/",
        reelStopSound: "reel_stop",
        symbolStopSound: "symbol_bonus1",
        antSound: "reel_notify1",
        antSpeed: 2e3,
        continuous: true
      } ],
      helpItems: [ "games/GodAthena/prefab/help_item_1", "games/GodAthena/prefab/help_item_2", "games/GodAthena/prefab/help_item_3", "games/GodAthena/prefab/help_item_4", "games/GodAthena/prefab/help_item_5", "games/GodAthena/prefab/help_item_6", "games/GodAthena/prefab/help_item_7", "games/GodAthena/prefab/help_item_8" ],
      commEffect: {
        path: "games/GodAthena/",
        win1: [ "win1", "win1end" ],
        win2: [ "win2", "win2end" ]
      },
      normalBgm: "ngbgm"
    };
    module.exports = Cfg;
    cc._RF.pop();
  }, {} ],
  Athena_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bef8kf275FBrhOcCoWcIrH", "Athena_Logic");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Logic_Base"),
      properties: {
        _pickBonusData: null,
        _lockBonus: false
      },
      onLoad: function onLoad() {
        this._super();
        var pickbonus_script = cc.find("safe_node/freegame_pickBonus", this.node).getComponent("Athena_PickBonusGame");
        cc.vv.gameData.GetSlotsScript().setPickBonusGameScript(pickbonus_script);
        var shield_script = cc.find("safe_node/freegame_selectShield", this.node).getComponent("Athena_ShieldGame");
        cc.vv.gameData.GetSlotsScript().setShieldGameScript(shield_script);
        Global.registerEvent(cc.vv.gameData._EventId.SLOT_TOTALBET_UPDATED, this.onUpdateBet, this);
        var deskInfo = cc.vv.gameData.getDeskInfo();
        this._lockBonus = deskInfo.needBet > deskInfo.currmult;
      },
      onUpdateBet: function onUpdateBet() {
        var _this = this;
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var script = cc.find("safe_node/slots/reels_frame/common_node/bonus_node/jiesuo", this.node).getComponent(sp.Skeleton);
        if (deskInfo.needBet <= cc.vv.gameData.GetBetIdx() && this._lockBonus) {
          this._lockBonus = false;
          cc.vv.AudioManager.playEff("games/GodAthena/", "unlock", true);
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation2", false);
          script.setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            "animation2" === name && (cc.find("safe_node/slots/reels_frame/common_node/bonus_node/jiesuo", _this.node).active = false);
          });
        } else if (deskInfo.needBet > cc.vv.gameData.GetBetIdx() && !this._lockBonus) {
          this._lockBonus = true;
          cc.vv.AudioManager.playEff("games/GodAthena/", "lock", true);
          cc.find("safe_node/slots/reels_frame/common_node/bonus_node/jiesuo", this.node).active = true;
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation", false);
        }
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Logic_Base: void 0
  } ],
  Athena_PickBonusGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0eb4bER99FwrQhIf9FnbnZ", "Athena_PickBonusGame");
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
    var KnifeType = {
      Coin: 1,
      ExtraPick: 2,
      MultAndExtraPick: 3,
      GodAthena: 4
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        remainTimes: cc.Node,
        _winCoin: 0,
        _canSelect: true,
        _betCoin: 0,
        _successCallback: null,
        _curRateItemIndex: 0,
        _restCnt: 0,
        _haveOpenReward: []
      },
      enterGame: function enterGame(data, success) {
        cc.vv.AudioManager.playBgm("games/GodAthena/", "jp_celebration", true);
        this.node.active = true;
        this._haveOpenReward = [];
        this._restCnt = data.restCnt;
        this._successCallback = success;
        this.regiserClickEvent();
        this.reset();
        for (var i = 0; i < data.choiceIdxs.length; i++) {
          var idx = data.choiceIdxs[i];
          var knife = cc.find("knife_" + idx, this.node);
          knife && this._showRewardByType(knife, data.choiceItems[i]);
        }
        this._updateRemainTimes();
      },
      exitGame: function exitGame() {
        this.node.active = false;
      },
      _updateRemainTimes: function _updateRemainTimes() {
        this.remainTimes.getComponent(cc.Label).string = this._restCnt;
      },
      onChooseKnife: function onChooseKnife(data) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var curChoice, knife, bishoudianji, spine_bishoudianji, pick1_fazhen, pick1_fazhen_spine, rateKnife, startPos, endPos, _pick1_fazhen, _pick1_fazhen_spine, _startPos, _endPos, _pick1_fazhen2, _pick1_fazhen_spine2, preKnife, _startPos2, _endPos2, renwutouxiang, renwutouxiang_spine, wheel_script, i, index, otherKnife, _iterator, _step, child, node_win, bg, btn_collect, func;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              curChoice = data.choiceId;
              _this._haveOpenReward.push(curChoice);
              _this._restCnt = data.knifeGame.restCnt;
              knife = _this.node.getChildByName("knife_" + curChoice);
              knife.getChildByName("bishouxunhuan").active = false;
              bishoudianji = knife.getChildByName("bishoudianji");
              spine_bishoudianji = bishoudianji.getComponent(sp.Skeleton);
              bishoudianji.active = true;
              spine_bishoudianji.clearTracks();
              spine_bishoudianji.setToSetupPose();
              spine_bishoudianji.setAnimation(0, "animation", false);
              spine_bishoudianji.setCompleteListener(function() {
                bishoudianji.active = false;
              });
              _context3.t0 = data.item.type;
              _context3.next = _context3.t0 === KnifeType.Coin ? 15 : _context3.t0 === KnifeType.ExtraPick ? 54 : _context3.t0 === KnifeType.MultAndExtraPick ? 75 : _context3.t0 === KnifeType.GodAthena ? 98 : 125;
              break;

             case 15:
              pick1_fazhen = knife.getChildByName("pick1_fazhen");
              pick1_fazhen_spine = pick1_fazhen.getComponent(sp.Skeleton);
              pick1_fazhen.active = true;
              pick1_fazhen_spine.clearTracks();
              pick1_fazhen_spine.setToSetupPose();
              pick1_fazhen_spine.setAnimation(0, "animation", true);
              _this._showRewardByType(knife, data.item);
              _context3.next = 24;
              return _this.awaitTime(1);

             case 24:
              if (!(0 !== _this._curRateItemIndex)) {
                _context3.next = 40;
                break;
              }
              rateKnife = cc.find("knife_" + _this._curRateItemIndex, _this.node);
              startPos = rateKnife.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this.node.parent.convertToNodeSpaceAR(startPos);
              endPos = knife.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this.node.parent.convertToNodeSpaceAR(endPos);
              _this._generateParticle(startPos, endPos);
              cc.vv.AudioManager.playEff("games/GodAthena/", "fly2", true);
              _context3.next = 34;
              return _this.awaitTime(.5);

             case 34:
              cc.find("txt_rewardGold", knife).getComponent(cc.Label).string = Global.formatNumShort(data.item.coin * data.knifeGame.mult);
              pick1_fazhen_spine.clearTracks();
              pick1_fazhen_spine.setToSetupPose();
              pick1_fazhen_spine.setAnimation(0, "animation2", true);
              _context3.next = 40;
              return _this.awaitTime(.5);

             case 40:
              pick1_fazhen_spine.clearTracks();
              pick1_fazhen_spine.setToSetupPose();
              pick1_fazhen_spine.setAnimation(0, "animation3", true);
              knife.getChildByName("txt_rewardGold").color = cc.Color.GRAY;
              cc.vv.AudioManager.playEff("games/GodAthena/", "fly1", true);
              _this.playWinLine(knife, curChoice);
              _context3.next = 48;
              return _this.awaitTime(.2);

             case 48:
              cc.vv.gameData.GetBottomScript().SetWin(data.knifeGame.winCoin);
              _context3.next = 51;
              return _this.awaitTime(.8);

             case 51:
              _this._canSelect = true;
              _this.setAutoPlay();
              return _context3.abrupt("break", 125);

             case 54:
              _pick1_fazhen = knife.getChildByName("pick1_fazhen");
              _pick1_fazhen_spine = _pick1_fazhen.getComponent(sp.Skeleton);
              _pick1_fazhen.active = true;
              _pick1_fazhen_spine.clearTracks();
              _pick1_fazhen_spine.setToSetupPose();
              _pick1_fazhen_spine.setAnimation(0, "animation", true);
              _this._showRewardByType(knife, data.item);
              _context3.next = 63;
              return _this.awaitTime(1);

             case 63:
              _startPos = knife.convertToWorldSpaceAR(cc.v2(0, 0));
              _startPos = _this.node.parent.convertToNodeSpaceAR(_startPos);
              _endPos = _this.remainTimes.convertToWorldSpaceAR(cc.v2(0, 0));
              _endPos = _this.node.parent.convertToNodeSpaceAR(_endPos);
              _this._generateParticle(_startPos, _endPos);
              cc.vv.AudioManager.playEff("games/GodAthena/", "fly3", true);
              _context3.next = 71;
              return _this.awaitTime(.5);

             case 71:
              _this._updateRemainTimes();
              _this._canSelect = true;
              _this.setAutoPlay();
              return _context3.abrupt("break", 125);

             case 75:
              _pick1_fazhen2 = knife.getChildByName("pick1_fazhen");
              _pick1_fazhen_spine2 = _pick1_fazhen2.getComponent(sp.Skeleton);
              _pick1_fazhen2.active = true;
              _pick1_fazhen_spine2.clearTracks();
              _pick1_fazhen_spine2.setToSetupPose();
              _pick1_fazhen_spine2.setAnimation(0, "animation", true);
              _this._showRewardByType(knife, data.item);
              _context3.next = 84;
              return _this.awaitTime(1);

             case 84:
              if (data.knifeGame.mult !== data.item.cnt && 0 !== _this._curRateItemIndex) {
                preKnife = cc.find("knife_" + _this._curRateItemIndex, _this.node);
                cc.find("icon_ratePick", preKnife).color = cc.Color.GRAY;
                cc.find("icon_ratePick/New Sprite", preKnife).color = cc.Color.GRAY;
              }
              _this._curRateItemIndex = data.choiceId;
              _startPos2 = knife.convertToWorldSpaceAR(cc.v2(0, 0));
              _startPos2 = _this.node.parent.convertToNodeSpaceAR(_startPos2);
              _endPos2 = _this.remainTimes.convertToWorldSpaceAR(cc.v2(0, 0));
              _endPos2 = _this.node.parent.convertToNodeSpaceAR(_endPos2);
              _this._generateParticle(_startPos2, _endPos2);
              cc.vv.AudioManager.playEff("games/GodAthena/", "fly3", true);
              _context3.next = 94;
              return _this.awaitTime(.5);

             case 94:
              _this._updateRemainTimes();
              _this._canSelect = true;
              _this.setAutoPlay();
              return _context3.abrupt("break", 125);

             case 98:
              renwutouxiang = cc.find("renwutouxiang", knife);
              renwutouxiang.active = true;
              renwutouxiang_spine = renwutouxiang.getComponent(sp.Skeleton);
              renwutouxiang_spine.clearTracks();
              renwutouxiang_spine.setToSetupPose();
              renwutouxiang_spine.setAnimation(0, "animation", false);
              renwutouxiang_spine.setCompleteListener(function(track) {
                var name = track.animation ? track.animation.name : "";
                if ("animation" === name) {
                  renwutouxiang_spine.clearTracks();
                  renwutouxiang_spine.setToSetupPose();
                  renwutouxiang_spine.setAnimation(0, "animation2", true);
                }
              });
              _context3.next = 107;
              return _this.awaitTime(2);

             case 107:
              wheel_script = cc.find("node_wheel", _this.node).getComponent("Athena_Wheel");
              _context3.next = 110;
              return wheel_script.enterWheel(data);

             case 110:
              cc.find("coin", renwutouxiang).active = true;
              cc.find("coin", renwutouxiang).getComponent(cc.Label).string = Global.formatNumShort(wheel_script.getWinCoin());
              _context3.next = 114;
              return _this.awaitTime(.5);

             case 114:
              cc.find("coin", renwutouxiang).color = cc.Color.GRAY;
              cc.vv.AudioManager.playEff("games/GodAthena/", "fly3", true);
              _this.playWinLine(knife, curChoice);
              _context3.next = 119;
              return _this.awaitTime(.2);

             case 119:
              cc.vv.gameData.GetBottomScript().SetWin(data.knifeGame.winCoin);
              _context3.next = 122;
              return _this.awaitTime(.8);

             case 122:
              _this._canSelect = true;
              _this.setAutoPlay();
              return _context3.abrupt("break", 125);

             case 125:
              if (!data.knifeGame.otherIdxs) {
                _context3.next = 144;
                break;
              }
              _this._canSelect = false;
              for (i = 0; i < data.knifeGame.otherIdxs.length; i++) {
                index = data.knifeGame.otherIdxs[i];
                otherKnife = cc.find("knife_" + index, _this.node);
                otherKnife.color = cc.Color.GRAY;
                _iterator = _createForOfIteratorHelper(otherKnife.children);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    child = _step.value;
                    child.color = cc.Color.GRAY;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                _this._showRewardByType(otherKnife, data.knifeGame.otherItems[i]);
              }
              _context3.next = 130;
              return _this.awaitTime(1);

             case 130:
              Global.SlotsSoundMgr.stopBgm();
              cc.vv.AudioManager.playEff("games/GodAthena/", "pick1_end", true);
              node_win = cc.find("node_win", _this.node);
              node_win.active = true;
              bg = cc.find("bg", node_win);
              bg.scale = 0;
              bg.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
              _this._winCoin = data.knifeGame.winCoin;
              Global.doRoallNumEff(cc.find("total_win", bg), 0, data.knifeGame.winCoin, 3, null, null, 0, true);
              btn_collect = cc.find("btn_collect", bg);
              btn_collect.off("click");
              func = function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      btn_collect.off("click");
                      cc.vv.gameData.AddCoin(data.knifeGame.winCoin);
                      bg.runAction(cc.scaleTo(.7, 0).easing(cc.easeBackIn()));
                      _context.next = 5;
                      return _this.awaitTime(.7);

                     case 5:
                      node_win.active = false;
                      _this._successCallback();

                     case 7:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function func() {
                  return _ref.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func);
              btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    btn_collect.stopAllActions();
                    _context2.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context2.stop();
                  }
                }, _callee2);
              })));

             case 144:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      playWinLine: function playWinLine(fromNode, curChoice) {
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var spNode, footerjieshou, winNode, spAnimLength, fromPos, endPos, v, length, angle;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              spNode = cc.find("Canvas/safe_node/footerlianxian");
              footerjieshou = cc.find("Canvas/safe_node/footerjieshou");
              winNode = cc.vv.gameData.GetBottomScript().getWinLabelNor();
              spAnimLength = [ 765, 605, 448, 240 ];
              fromPos = spNode.parent.convertToNodeSpaceAR(fromNode.convertToWorldSpaceAR(cc.v2(0, 0)));
              endPos = spNode.parent.convertToNodeSpaceAR(winNode.convertToWorldSpaceAR(cc.v2(0, 0)));
              v = cc.v2(endPos.x, endPos.y).sub(cc.v2(fromPos.x, fromPos.y));
              length = v.mag();
              angle = v.signAngle(cc.v2(-1, 0));
              spNode.active = true;
              spNode.position = fromPos;
              spNode.angle = -angle * cc.macro.DEG + 90;
              spNode.scale = length / spAnimLength[Math.ceil(curChoice / 4) - 1];
              spNode.getComponent(sp.Skeleton).setAnimation(0, "animation" + Math.ceil(curChoice / 4), false);
              spNode.getComponent(sp.Skeleton).setCompleteListener(function() {
                spNode.getComponent(sp.Skeleton).setCompleteListener();
                spNode.active = false;
              });
              footerjieshou.active = true;
              footerjieshou.position = endPos;
              footerjieshou.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
              footerjieshou.getComponent(sp.Skeleton).setCompleteListener(function() {
                footerjieshou.getComponent(sp.Skeleton).setCompleteListener();
                footerjieshou.active = false;
              });

             case 19:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      },
      _generateParticle: function _generateParticle(startPos, endPos) {
        var particle = cc.instantiate(cc.find("beishulizi", this.node.parent));
        particle.parent = this.node.parent;
        particle.position = startPos;
        particle.active = true;
        particle.runAction(cc.sequence(cc.moveTo(.5, endPos), cc.removeSelf()));
      },
      _showRewardByType: function _showRewardByType(node, item) {
        var atlas = cc.vv.gameData.GetAtlasByName("pick1");
        switch (item.type) {
         case KnifeType.Coin:
          node.getChildByName("txt_rewardGold").active = true;
          node.getChildByName("txt_rewardGold").getComponent(cc.Label).string = Global.formatNumShort(item.coin);
          break;

         case KnifeType.ExtraPick:
          node.getChildByName("icon_reward").active = true;
          node.getChildByName("icon_reward").getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme173_pick1_pick" + item.cnt);
          break;

         case KnifeType.MultAndExtraPick:
          node.getChildByName("icon_ratePick").active = true;
          node.getChildByName("icon_ratePick").getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme173_pick1_multi" + item.cnt);
          break;

         case KnifeType.GodAthena:
          node.getChildByName("icon_reward").active = true;
          cc.find("icon_reward/head", node).active = true;
        }
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var i = 1; i < 16; i++) -1 == this._haveOpenReward.indexOf(i) && list.push(i);
        var randomIdx = Global.random(0, list.length - 1);
        var self = this;
        cc.vv.gameData.checkAutoPlay(this.node.getChildByName("knife_" + list[randomIdx]), function() {
          self.onClickItem(list[randomIdx]);
        });
      },
      onClickItem: function onClickItem(i) {
        for (var _i = 1; _i < 16; _i++) {
          var knife = this.node.getChildByName("knife_" + _i);
          knife.stopAllActions();
        }
        if (!this._canSelect) return;
        if (-1 !== this._haveOpenReward.indexOf(i)) return;
        cc.vv.AudioManager.playEff("games/GodAthena/", "pickone", true);
        this._canSelect = false;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 2;
        req.data.choiceId = i;
        cc.vv.NetManager.send(req);
        this._restCnt--;
        this._updateRemainTimes();
      },
      regiserClickEvent: function regiserClickEvent() {
        var _this2 = this;
        var _loop = function _loop(i) {
          var knife = _this2.node.getChildByName("knife_" + i);
          knife.off(cc.Node.EventType.TOUCH_END);
          knife.on(cc.Node.EventType.TOUCH_END, function() {
            _this2.onClickItem(i);
          });
        };
        for (var i = 1; i < 16; i++) _loop(i);
      },
      reset: function reset() {
        var _this3 = this;
        var _loop2 = function _loop2(i) {
          var knife = _this3.node.getChildByName("knife_" + i);
          knife.color = cc.Color.WHITE;
          var _iterator2 = _createForOfIteratorHelper(knife.children), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var child = _step2.value;
              child.color = cc.Color.WHITE;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          knife.getChildByName("bishouxunhuan").active = true;
          var bishouxunhuan = knife.getChildByName("bishouxunhuan").getComponent(sp.Skeleton);
          bishouxunhuan.clearTracks();
          bishouxunhuan.setToSetupPose();
          bishouxunhuan.setAnimation(0, "animation", false);
          bishouxunhuan.setCompleteListener(function() {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(track) {
              var name;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                 case 0:
                  name = track.animation ? track.animation.name : "";
                  if (!("animation" === name)) {
                    _context5.next = 7;
                    break;
                  }
                  _context5.next = 4;
                  return cc.vv.gameData.awaitTime(10 * Math.random());

                 case 4:
                  bishouxunhuan.clearTracks();
                  bishouxunhuan.setToSetupPose();
                  bishouxunhuan.setAnimation(0, "animation", false);

                 case 7:
                 case "end":
                  return _context5.stop();
                }
              }, _callee5);
            }));
            return function(_x) {
              return _ref3.apply(this, arguments);
            };
          }());
          knife.getChildByName("bishoudianji").active = false;
          knife.getChildByName("pick_zhuanpanlizi").active = false;
          knife.getChildByName("pick1_fazhen").active = false;
          knife.getChildByName("txt_rewardGold").active = false;
          knife.getChildByName("icon_reward").active = false;
          cc.find("icon_reward/head", knife) && (cc.find("icon_reward/head", knife).active = false);
          knife.getChildByName("icon_ratePick").active = false;
          knife.getChildByName("renwutouxiang").active = false;
          cc.find("renwutouxiang/coin", knife).active = false;
        };
        for (var i = 1; i < 16; i++) _loop2(i);
        var winNode = this.node.getChildByName("node_win");
        winNode.active = false;
        this._canSelect = true;
        this.setAutoPlay();
        this._curRateItemIndex = 0;
      },
      awaitTime: function awaitTime(time) {
        var _this4 = this;
        return new Promise(function(sucess, failed) {
          _this4.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Athena_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1b1fSdV4lOl6hp3C2kNNtX", "Athena_Reel");
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
    var FreeGameType = {
      Common: 1,
      Expanding: 2,
      GodAthena: 3,
      AthenaRespin: 4
    };
    cc.Class({
      extends: require("LMSlots_Reel_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
        this.StartRecycleSymbol();
        this._symbols.length > this._cfg.row + 1 && cc.vv.AudioManager.playEff("games/GodAthena/", "reel_down", true);
      },
      resetReel: function resetReel() {
        var cfg = cc.vv.gameData.getGameCfg();
        if (this._symbols.length > cfg.row + 1) {
          var nCount = -(this._symbols.length - (cfg.row + 1));
          this.AddCount(nCount, .1);
        }
      },
      clearLastSymbol: function clearLastSymbol() {
        var symbol = this._symbols[this._symbols.length - 1];
        if (symbol) {
          symbol.setAnimationToTop(false);
          symbol.ShowKuang(false);
        }
      },
      playAddCountEffect: function playAddCountEffect() {
        var shengqipantuowei = cc.find("shengqipantuowei", this.node);
        shengqipantuowei.active = true;
        var spine = shengqipantuowei.getComponent(sp.Skeleton);
        spine.clearTracks();
        spine.setToSetupPose();
        spine.setAnimation(0, "animation1_1", false);
        spine.setCompleteListener(function() {
          shengqipantuowei.active = false;
        });
      },
      ShowAntiEffect: function ShowAntiEffect(bShow, name) {
        if (false === bShow) {
          if (this._cfg.reelStateInfo) {
            var _iterator = _createForOfIteratorHelper(this._cfg.reelStateInfo), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var info = _step.value;
                var node = cc.find("mask/" + info.antiNode, this.node);
                if ("pink_anti" === info.antiNode) {
                  node = cc.find(info.antiNode, this.node);
                  for (var i = 3; i < 7; i++) {
                    node = cc.find("pink_" + i, this.node);
                    node && node.active && (node.active = false);
                  }
                  this._stopRightNow && cc.vv.AudioManager.stopEffectByName(info.antSound);
                } else if (node && node.active) {
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
        } else if ("pink_anti" === name) {
          var _node = cc.find("pink_" + this._nCount, this.node);
          _node.active = bShow;
        } else {
          var _node2 = cc.find("mask/" + name, this.node);
          _node2 ? _node2.active = bShow : cc.log("\u672a\u627e\u5230\u52a0\u901f\u8282\u70b9\uff1amask/node_anti");
        }
      },
      GetResizeHeightObjs: function GetResizeHeightObjs() {
        var objs = [];
        var mask = cc.find("mask", this.node);
        mask && objs.push(mask);
        var bg = cc.find("reels_bg/reel_bg" + (this._reelIdx + 1), this.node.parent.parent);
        bg && objs.push(bg);
        if (cc.find("reels_frame/common_node", this.node.parent.parent).active) {
          if (2 === this._reelIdx) for (var i = 1; i < 7; i++) {
            var line = cc.find("reels_frame/common_node/line_" + i, this.node.parent.parent);
            line && objs.push(line);
          }
        } else if (cc.find("reels_frame/expand_free_node", this.node.parent.parent).active) {
          var left_line = cc.find("reels_frame/expand_free_node/line_" + (2 * this._reelIdx + 1), this.node.parent.parent);
          left_line && objs.push(left_line);
          var right_line = cc.find("reels_frame/expand_free_node/line_" + (2 * this._reelIdx + 2), this.node.parent.parent);
          right_line && objs.push(right_line);
        }
        return objs;
      },
      GetResizeMoveingObjs: function GetResizeMoveingObjs() {
        var objs = [];
        if (cc.find("reels_frame/common_node", this.node.parent.parent).active) {
          if (2 === this._reelIdx) {
            var bonus_node = cc.find("reels_frame/common_node/bonus_node", this.node.parent.parent);
            bonus_node && objs.push(bonus_node);
            var reel_frame = cc.find("reels_frame/common_node/reel_frame", this.node.parent.parent);
            reel_frame && objs.push(reel_frame);
            var shengqipantuowei = cc.find("shengqipantuowei", this.node.parent.parent);
            shengqipantuowei && objs.push(shengqipantuowei);
            var left_top = cc.find("reels_frame/common_node/left_top", this.node.parent.parent);
            left_top && objs.push(left_top);
            var right_top = cc.find("reels_frame/common_node/right_top", this.node.parent.parent);
            right_top && objs.push(right_top);
          }
        } else if (cc.find("reels_frame/expand_free_node", this.node.parent.parent).active) {
          var reel_top = cc.find("reels_frame/expand_free_node/reel_top_" + (this._reelIdx + 1), this.node.parent.parent);
          reel_top && objs.push(reel_top);
          if (0 === this._reelIdx) {
            var _left_top = cc.find("reels_frame/expand_free_node/left_top", this.node.parent.parent);
            _left_top && objs.push(_left_top);
          }
          if (4 === this._reelIdx) {
            var _right_top = cc.find("reels_frame/expand_free_node/right_top", this.node.parent.parent);
            _right_top && objs.push(_right_top);
          }
          var _shengqipantuowei = cc.find("shengqipantuowei", this.node);
          _shengqipantuowei && objs.push(_shengqipantuowei);
        }
        var anti_bg = cc.find("mask/anti_bg", this.node);
        anti_bg && objs.push(anti_bg);
        var node_anti = cc.find("mask/node_anti", this.node);
        node_anti && objs.push(node_anti);
        return objs;
      },
      setReelByResult: function setReelByResult() {
        if (this._result) for (var i = 0; i < this._result.length; i++) {
          var symbol = this._symbols[i];
          symbol.ShowById(this._result[i].sid, this._result[i].data);
        }
      },
      getSymbols: function getSymbols() {
        return this._symbols;
      },
      setScatterBgVisible: function setScatterBgVisible(isOrNot) {
        var anti_bg = cc.find("mask/anti_bg", this.node);
        anti_bg && (anti_bg.active = isOrNot);
      },
      isHaveScatter: function isHaveScatter() {
        for (var i = 0; i < this._cfg.row; i++) {
          var symbol = this._symbols[i];
          if (symbol && symbol.GetShowId() === this._cfg.scatterId) return true;
        }
        return false;
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Reel_Base: void 0
  } ],
  Athena_ShieldGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0f552N8gpLs4vGeClNzfaU", "Athena_ShieldGame");
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
    var ShieldType = {
      ExpandingFreeGame: 1,
      PickBonus: 2,
      AthenaProgressive: 3,
      CoinMult: 4,
      AthenaFreeGame: 5
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _winCoin: 0,
        _canSelect: true,
        _successCallback: null,
        _resultData: null
      },
      enterGame: function enterGame() {
        var _this = this;
        return new Promise(function(success) {
          _this.node.active = true;
          _this._successCallback = success;
          _this._resultData = null;
          cc.vv.AudioManager.playBgm("games/GodAthena/", "free_game_music_advanced", true);
          _this.reset();
          _this.regiserClickEvent();
        });
      },
      exitGame: function exitGame() {
        this.node.active = false;
        this._successCallback = null;
      },
      onChooseShield: function onChooseShield(data) {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var shield, j, node, fandunpai, fandunpai_spine, fanhutou, fanhutou_spine, i, _node, node_win, bg, btn_collect, func;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this2._resultData = data;
              shield = cc.find("shield_" + data.choiceId, _this2.node);
              for (j = 1; j < 6; j++) {
                node = _this2.node.getChildByName("shield_" + j);
                node.stopAllActions();
                node.getChildByName("dunxunhuan").getComponent(sp.Skeleton).setToSetupPose();
                node.getChildByName("dunxunhuan").getComponent(sp.Skeleton).clearTracks();
                node.getChildByName("dunxunhuan").getComponent(sp.Skeleton).setAnimation(0, "animation2", true);
              }
              shield.getChildByName("dunxunhuan").active = false;
              cc.vv.AudioManager.playEff("games/GodAthena/", "show3", true);
              fandunpai = cc.find("fandunpai", shield);
              fandunpai.active = true;
              fandunpai_spine = fandunpai.getComponent(sp.Skeleton);
              fandunpai_spine.clearTracks();
              fandunpai_spine.setToSetupPose();
              fandunpai_spine.setAnimation(0, "animation", false);
              fandunpai_spine.setCompleteListener(function() {
                fandunpai.active = false;
              });
              fanhutou = cc.find("fanhutou", shield);
              fanhutou.active = true;
              fanhutou_spine = fanhutou.getComponent(sp.Skeleton);
              fanhutou_spine.clearTracks();
              fanhutou_spine.setToSetupPose();
              fanhutou_spine.setAnimation(0, "animation", false);
              fanhutou_spine.setCompleteListener(function(track) {
                var name = track.animation ? track.animation.name : "";
                if ("animation" === name) {
                  fanhutou_spine.clearTracks();
                  fanhutou_spine.setToSetupPose();
                  fanhutou_spine.setAnimation(0, "animation2", true);
                }
              });
              _context3.next = 21;
              return _this2.awaitTime(1);

             case 21:
              _this2._showRewardByType(shield, data.items[data.choiceId - 1]);
              _context3.next = 24;
              return _this2.awaitTime(2);

             case 24:
              cc.vv.AudioManager.playEff("games/GodAthena/", "pick2_end", true);
              for (i = 1; i < 6; i++) if (i !== data.choiceId) {
                _node = _this2.node.getChildByName("shield_" + i);
                _node.getChildByName("dunxunhuan").color = cc.Color.GRAY;
                _this2._showRewardByType(_node, data.items[i - 1]);
              }
              _context3.next = 28;
              return _this2.awaitTime(2);

             case 28:
              Global.SlotsSoundMgr.stopBgm();
              _context3.t0 = data.items[data.choiceId - 1].type;
              _context3.next = _context3.t0 === ShieldType.ExpandingFreeGame ? 32 : _context3.t0 === ShieldType.PickBonus ? 32 : _context3.t0 === ShieldType.AthenaFreeGame ? 32 : _context3.t0 === ShieldType.CoinMult ? 34 : _context3.t0 === ShieldType.AthenaProgressive ? 48 : 50;
              break;

             case 32:
              _this2._successCallback();
              return _context3.abrupt("break", 50);

             case 34:
              cc.vv.AudioManager.playEff("games/GodAthena/", "free2_dialog_collect_show", true);
              node_win = cc.find("node_win", _this2.node);
              node_win.active = true;
              bg = cc.find("bg", node_win);
              bg.scale = 0;
              bg.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
              Global.doRoallNumEff(cc.find("total_win", bg), 0, data.winCoin, 3, null, null, 0, true);
              cc.vv.gameData.AddCoin(data.winCoin);
              btn_collect = cc.find("btn_collect", bg);
              btn_collect.off("click");
              func = function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      btn_collect.off("click");
                      bg.runAction(cc.scaleTo(.7, 0).easing(cc.easeBackIn()));
                      _context.next = 4;
                      return _this2.awaitTime(.7);

                     case 4:
                      node_win.active = false;
                      _this2._successCallback();
                      _this2.exitGame();

                     case 7:
                     case "end":
                      return _context.stop();
                    }
                  }, _callee);
                }));
                return function func() {
                  return _ref.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func);
              btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                    btn_collect.stopAllActions();
                    _context2.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context2.stop();
                  }
                }, _callee2);
              })));
              return _context3.abrupt("break", 50);

             case 48:
              _this2._successCallback();
              return _context3.abrupt("break", 50);

             case 50:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      getResultData: function getResultData() {
        return this._resultData;
      },
      _showRewardByType: function _showRewardByType(node, shieldResult) {
        var tujiatlas = cc.vv.gameData.GetAtlasByName("tuji");
        switch (shieldResult.type) {
         case ShieldType.ExpandingFreeGame:
          node.getChildByName("result").active = true;
          node.getChildByName("num").active = false;
          node.getChildByName("result").getComponent(cc.Sprite).spriteFrame = tujiatlas.getSpriteFrame("theme173_pick2_r3");
          break;

         case ShieldType.PickBonus:
          node.getChildByName("result").active = true;
          node.getChildByName("num").active = false;
          node.getChildByName("result").getComponent(cc.Sprite).spriteFrame = tujiatlas.getSpriteFrame("theme173_pick2_r5");
          break;

         case ShieldType.AthenaProgressive:
          node.getChildByName("result").active = true;
          node.getChildByName("num").active = false;
          node.getChildByName("result").getComponent(cc.Sprite).spriteFrame = tujiatlas.getSpriteFrame("theme173_pick2_r2n");
          break;

         case ShieldType.CoinMult:
          node.getChildByName("result").active = false;
          node.getChildByName("num").active = true;
          node.getChildByName("num").getComponent(cc.Label).string = Global.formatNumShort(shieldResult.mult * cc.vv.gameData.GetTotalBet(), 0);
          break;

         case ShieldType.AthenaFreeGame:
          node.getChildByName("result").active = true;
          node.getChildByName("num").active = false;
          node.getChildByName("result").getComponent(cc.Sprite).spriteFrame = tujiatlas.getSpriteFrame("theme173_pick2_r4n");
        }
        var action = cc.scaleTo(.5, 1);
        switch (shieldResult.type) {
         case ShieldType.ExpandingFreeGame:
         case ShieldType.PickBonus:
         case ShieldType.AthenaProgressive:
         case ShieldType.AthenaFreeGame:
          node.getChildByName("result").scale = 0;
          node.getChildByName("result").runAction(action);
          break;

         case ShieldType.CoinMult:
          node.getChildByName("num").scale = 0;
          node.getChildByName("num").runAction(action);
        }
      },
      setAutoPlay: function setAutoPlay() {
        var list = [];
        for (var i = 1; i < 6; i++) list.push(i);
        var randomIdx = Global.random(0, list.length - 1);
        var self = this;
        cc.vv.gameData.checkAutoPlay(this.node.getChildByName("shield_" + list[randomIdx]), function() {
          self.onClickItem(list[randomIdx]);
        });
      },
      onClickItem: function onClickItem(i) {
        for (var _i = 1; _i < 6; _i++) {
          var shield = this.node.getChildByName("shield_" + _i);
          shield.stopAllActions();
        }
        if (!this._canSelect) return;
        cc.vv.AudioManager.playEff("games/GodAthena/", "choose", true);
        this._canSelect = false;
        var req = {
          c: MsgId.SLOT_SUBGAME_DATA
        };
        req.uid = Global.playerData.uid;
        req.gameid = cc.vv.gameData._gameId;
        req.data = {};
        req.data.rtype = 3;
        req.data.choiceId = i;
        cc.vv.NetManager.send(req);
      },
      regiserClickEvent: function regiserClickEvent() {
        var _this3 = this;
        var _loop = function _loop(i) {
          var shield = _this3.node.getChildByName("shield_" + i);
          shield.off(cc.Node.EventType.TOUCH_END);
          shield.on(cc.Node.EventType.TOUCH_END, function() {
            _this3.onClickItem(i);
          });
        };
        for (var i = 1; i < 6; i++) _loop(i);
      },
      reset: function reset() {
        var _this4 = this;
        var _loop2 = function _loop2(i) {
          var shield = _this4.node.getChildByName("shield_" + i);
          shield.getChildByName("fandunpai").active = false;
          shield.getChildByName("fanhutou").active = false;
          shield.getChildByName("result").active = false;
          shield.getChildByName("num").active = false;
          var dunxunhuan = shield.getChildByName("dunxunhuan");
          var dunxunhuan_spine = dunxunhuan.getComponent(sp.Skeleton);
          dunxunhuan.active = true;
          dunxunhuan.color = cc.Color.WHITE;
          dunxunhuan_spine.clearTracks();
          dunxunhuan_spine.setToSetupPose();
          dunxunhuan_spine.setAnimation(0, "animation", false);
          dunxunhuan_spine.setCompleteListener(function() {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(track) {
              var name;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                 case 0:
                  name = track.animation ? track.animation.name : "";
                  if (!("animation" === name)) {
                    _context4.next = 7;
                    break;
                  }
                  _context4.next = 4;
                  return cc.vv.gameData.awaitTime(10 * Math.random());

                 case 4:
                  dunxunhuan_spine.clearTracks();
                  dunxunhuan_spine.setToSetupPose();
                  dunxunhuan_spine.setAnimation(0, "animation", false);

                 case 7:
                 case "end":
                  return _context4.stop();
                }
              }, _callee4);
            }));
            return function(_x) {
              return _ref3.apply(this, arguments);
            };
          }());
        };
        for (var i = 1; i < 6; i++) _loop2(i);
        this._canSelect = true;
        this.setAutoPlay();
      },
      awaitTime: function awaitTime(time) {
        var _this5 = this;
        return new Promise(function(sucess, failed) {
          _this5.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  Athena_Slots: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01f2ew9aDdLHq1cXfQ1gFN7", "Athena_Slots");
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
    var RandomGameType = {
      ExpandingReels: 1,
      RandomWild: 2,
      WheelBonus: 3,
      AthenaRespin: 4,
      ShieldBonus: 5
    };
    var FreeGameType = {
      Common: 1,
      Expanding: 2,
      GodAthena: 3,
      AthenaRespin: 4
    };
    var ScatterChoiceType = {
      ExpandingFreeGames: 1,
      AthenaFreeGames: 2,
      PickBonus: 3
    };
    var ShieldType = {
      ExpandingFreeGame: 1,
      PickBonus: 2,
      AthenaProgressive: 3,
      CoinMult: 4,
      AthenaFreeGame: 5
    };
    cc.Class({
      extends: require("LMSlots_Slots_Base"),
      properties: {
        _curBonusCount: 0,
        _prizePoolNameByJackpotId: [],
        _redDiamondNumByJackpotId: [],
        _wheelCurIndex: 0,
        _wheelResultRate: 0,
        _freeGameType: 0,
        _haveChooseScatter: false,
        _pickBonusGameScript: null,
        _shieldGameScript: null
      },
      onLoad: function onLoad() {
        this._super();
        cc.vv.NetManager.registerMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, this);
      },
      Init: function Init() {
        var _this = this;
        this._super();
        this._prizePoolNameByJackpotId = [ "prizePool_Mini", "prizePool_Minor", "prizePool_Major", "prizePool_Grand", "prizePool_Mega" ];
        this._redDiamondNumByJackpotId = [ 5, 6, 7, 10, 8 ];
        var deskInfo = cc.vv.gameData.getDeskInfo();
        var bonus_node = cc.find("reels_frame/common_node/bonus_node", this.node);
        bonus_node.on(cc.Node.EventType.TOUCH_END, function() {
          deskInfo.needBet > deskInfo.currmult && "idle" === cc.vv.gameData.GetSlotState() && _this._bottomScript.SetBetIdx(deskInfo.needBet);
        });
        var spine_node = cc.find("reels_frame/common_node/bonus_node/jiesuo", this.node);
        var script = spine_node.getComponent(sp.Skeleton);
        cc.find("reels_frame/common_node/bonus_node/jiesuo", this.node).active = true;
        if (deskInfo.needBet <= deskInfo.currmult) {
          cc.vv.AudioManager.playEff("games/GodAthena/", "unlock", true);
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation2", false);
          script.setCompleteListener(function(track) {
            var name = track.animation ? track.animation.name : "";
            "animation2" === name && (spine_node.active = false);
          });
        } else {
          cc.vv.AudioManager.playEff("games/GodAthena/", "lock", true);
          script.clearTracks();
          script.setToSetupPose();
          script.setAnimation(0, "animation", false);
        }
        this._curBonusCount = deskInfo.bonusTrail.count;
        for (var i = 0; i < deskInfo.bonusTrail.count; i++) {
          var icon = cc.find("reels_frame/common_node/bonus_node/icon_" + (i + 1), this.node);
          icon && (icon.active = true);
        }
        var nvshen = cc.find("nvshen", this.node.parent);
        var nvshen_spine = nvshen.getComponent(sp.Skeleton);
        nvshen_spine.setAnimation(0, "idle", true);
      },
      StartMove: function StartMove() {
        this._super();
        var putongjpkuang = cc.find("LMSlots_PrizePool_1/putongjpkuang", this.node.parent);
        putongjpkuang.active = false;
        for (var i = 3; i < 7; i++) {
          var node = cc.find("pink_" + i, this.node);
          node.active = false;
        }
        if (this._freeGameType === FreeGameType.AthenaRespin) {
          this._bottomScript.ShowFreeModel(false);
          cc.find("pink_3", this.node).active = true;
        }
        Global.SlotsSoundMgr.playNormalBgm();
      },
      ReconnectShow: function ReconnectShow() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var deskInfo, _iterator, _step, reel, result, freeCnt;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
             case 0:
              deskInfo = cc.vv.gameData.getDeskInfo();
              if (!deskInfo.scatterChoice) {
                _context.next = 9;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _this2.SetSlotsResult(deskInfo.scatterChoice.cards);
              _iterator = _createForOfIteratorHelper(_this2._reels);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  reel = _step.value;
                  reel.setReelByResult();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _this2._triggerSelectScatter(deskInfo.scatterChoice.scatterIdxs);
              _context.next = 33;
              break;

             case 9:
              if (!deskInfo.knifeGame) {
                _context.next = 23;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 13;
              return _this2._triggerPickBonusGame(deskInfo.knifeGame);

             case 13:
              _this2.cutSceneQuanZhang();
              _context.next = 16;
              return _this2.awaitTime(1);

             case 16:
              _this2._pickBonusGameScript.exitGame();
              _this2._haveChooseScatter = false;
              _context.next = 20;
              return _this2.awaitTime(.5);

             case 20:
              _this2.ShowBottomWin(_this2._pickBonusGameScript.getWinCoin(), _this2._pickBonusGameScript.getWinCoin(), true, function() {
                Global.SlotsSoundMgr.stopBgm();
                Global.SlotsSoundMgr.playNormalBgm();
                _this2.CanDoNextRound();
              });
              _context.next = 33;
              break;

             case 23:
              if (!deskInfo.shieldBonus) {
                _context.next = 31;
                break;
              }
              _this2._bottomScript.ShowBtnsByState("moveing_1");
              _context.next = 27;
              return _this2._shieldGameScript.enterGame();

             case 27:
              result = _this2._shieldGameScript.getResultData();
              result.items[result.choiceId - 1].type === ShieldType.ExpandingFreeGame || result.items[result.choiceId - 1].type === ShieldType.AthenaFreeGame || result.items[result.choiceId - 1].type === ShieldType.PickBonus ? _this2._popupScatterChoiceDialog(result) : result.items[result.choiceId - 1].type !== ShieldType.CoinMult && result.items[result.choiceId - 1].type !== ShieldType.AthenaProgressive || _this2.ShowBottomWin(result.winCoin, result.winCoin, true, function() {
                _this2.CanDoNextRound();
              });
              _context.next = 33;
              break;

             case 31:
              freeCnt = cc.vv.gameData.GetFreeTime();
              if (freeCnt > 0) {
                _this2._freeGameType = deskInfo.freeGameType;
                cc.find("reels_frame/common_node", _this2.node).active = false;
                cc.find("reels_frame/expand_free_node", _this2.node).active = true;
                _this2.CanDoNextRound();
                _this2.ShowGameview(true, true);
              } else _this2.ShowGameview(false, true);

             case 33:
             case "end":
              return _context.stop();
            }
          }, _callee);
        }))();
      },
      onMsgSpine: function onMsgSpine(msg) {
        var _this3 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              _this3._super(msg);
              if (!_this3._gameInfo.randGame) {
                _context2.next = 17;
                break;
              }
              _context2.t0 = _this3._gameInfo.randGame.type;
              _context2.next = _context2.t0 === RandomGameType.ExpandingReels ? 5 : _context2.t0 === RandomGameType.RandomWild ? 7 : _context2.t0 === RandomGameType.WheelBonus ? 9 : _context2.t0 === RandomGameType.AthenaRespin ? 15 : 17;
              break;

             case 5:
              _this3._triggerExpandingReels();
              return _context2.abrupt("break", 17);

             case 7:
              _this3._triggerRandomWild();
              return _context2.abrupt("break", 17);

             case 9:
              _this3.SetStopTime(3.5);
              _this3._playQuanzhangzhongjiang();
              _context2.next = 13;
              return _this3.awaitTime(1);

             case 13:
              _this3._playRandomGameAnimation(RandomGameType.WheelBonus);
              return _context2.abrupt("break", 17);

             case 15:
              _this3._triggerAthenaRespin();
              return _context2.abrupt("break", 17);

             case 17:
              _this3._freeGameType === FreeGameType.Expanding && _this3._triggerExpandFreeGames();

             case 18:
             case "end":
              return _context2.stop();
            }
          }, _callee2);
        }))();
      },
      _triggerExpandFreeGames: function _triggerExpandFreeGames() {
        var _this4 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var i, needAddCount, j, card, reel;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this4.SetStopTime(5);
              _context3.next = 3;
              return _this4.awaitTime(1);

             case 3:
              i = 0;

             case 4:
              if (!(i < 3)) {
                _context3.next = 15;
                break;
              }
              needAddCount = false;
              for (j = 0; j < 5; j++) {
                card = _this4._gameInfo.resultCards[5 * i + j];
                if (_this4._cfg.symbol[card]) {
                  needAddCount = true;
                  reel = _this4._reels[j];
                  reel.AddCount(1, .5);
                  reel.playAddCountEffect();
                }
              }
              if (!needAddCount) {
                _context3.next = 12;
                break;
              }
              cc.vv.AudioManager.playEff("games/GodAthena/", "reel_up", true);
              _this4._playShengqipanhuoAnimation();
              _context3.next = 12;
              return _this4.awaitTime(1);

             case 12:
              i++;
              _context3.next = 4;
              break;

             case 15:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      getFreeGameType: function getFreeGameType() {
        return this._freeGameType;
      },
      ShowWinTrace: function ShowWinTrace() {
        this._super();
      },
      CheckExitFreeGame: function CheckExitFreeGame() {
        return cc.vv.gameData.GetTotalFree() > 0 && 0 === cc.vv.gameData.GetFreeTime();
      },
      _triggerExpandingReels: function _triggerExpandingReels() {
        var _this5 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
          var addCount, i, _iterator2, _step2, reel;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
             case 0:
              addCount = _this5._gameInfo.randGame.info.row;
              _this5.SetStopTime(3 + addCount + .5);
              _this5._playQuanzhangzhongjiang();
              _context4.next = 5;
              return _this5.awaitTime(1);

             case 5:
              _this5._playRandomGameAnimation(RandomGameType.ExpandingReels);
              _context4.next = 8;
              return _this5.awaitTime(2);

             case 8:
              i = 0;

             case 9:
              if (!(i < addCount)) {
                _context4.next = 20;
                break;
              }
              _iterator2 = _createForOfIteratorHelper(_this5._reels);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  reel = _step2.value;
                  reel.AddCount(1);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              cc.vv.AudioManager.playEff("games/GodAthena/", "reel_up", true);
              _this5._playShengqipanhuoAnimation();
              _this5._playShengqipantuoweiAnimation();
              _context4.next = 17;
              return _this5.awaitTime(1);

             case 17:
              i++;
              _context4.next = 9;
              break;

             case 20:
             case "end":
              return _context4.stop();
            }
          }, _callee4);
        }))();
      },
      _triggerRandomWild: function _triggerRandomWild() {
        var _this6 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
          var gezi, gezi_spine, random_wild_node, black_bg, wildIdxs, i, index, node, posX, script, col, row, endPos;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
             case 0:
              _this6.SetStopTime(7.5);
              _this6._playQuanzhangzhongjiang();
              _context5.next = 4;
              return _this6.awaitTime(1);

             case 4:
              _this6._playRandomGameAnimation(RandomGameType.RandomWild);
              _context5.next = 7;
              return _this6.awaitTime(3);

             case 7:
              gezi = cc.find("gezi", _this6.node.parent);
              gezi_spine = gezi.getComponent(sp.Skeleton);
              gezi_spine.clearTracks();
              gezi_spine.setToSetupPose();
              gezi_spine.setAnimation(0, "animation2", false);
              cc.vv.AudioManager.playEff("games/GodAthena/", "dove_fly2", true);
              random_wild_node = cc.find("random_wild_node", _this6.node);
              random_wild_node.active = true;
              black_bg = cc.find("black_bg", random_wild_node);
              black_bg.active = true;
              _context5.next = 19;
              return _this6.awaitTime(1.5);

             case 19:
              cc.vv.AudioManager.playEff("games/GodAthena/", "wild_show", true);
              wildIdxs = _this6._gameInfo.randGame.info.wildIdxs;
              for (i = 0; i < wildIdxs.length; i++) {
                index = wildIdxs[i];
                node = cc.instantiate(cc.find("wild_spine", _this6.node.parent));
                node.parent = cc.find("random_wild_node/wild_parent", _this6.node);
                node.active = true;
                node.y = 350;
                posX = 0;
                posX = index % 5 === 1 ? -240 : 115 * (index % 6 - 1) - 230 + 10;
                node.x = posX;
                script = node.getComponent(sp.Skeleton);
                script.setAnimation(0, "animation2", false);
                col = (index - 1) % _this6._col;
                row = 6 - Math.floor((index - 1) / _this6._col) - 1;
                endPos = cc.v2((col - 2) * _this6._cfg.symbolSize.width, (row - 1) * _this6._cfg.symbolSize.height);
                node.runAction(cc.sequence(cc.delayTime(.1 * i), cc.moveTo(1.5, endPos)));
              }
              _context5.next = 24;
              return _this6.awaitTime(2.5);

             case 24:
              black_bg.active = false;

             case 25:
             case "end":
              return _context5.stop();
            }
          }, _callee5);
        }))();
      },
      _triggerWheelBonusGame: function _triggerWheelBonusGame() {
        var _this7 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
             case 0:
              return _context7.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(success) {
                  var nvshen, wheel, gezi, wheel_result, beishulizi, zhuanpanzhongjiang, i, item, _particle, _endPos, particle, endPos, winCoin;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                     case 0:
                      nvshen = cc.find("Canvas/safe_node/nvshen");
                      wheel = cc.find("wheel_node", _this7.node);
                      wheel.active = true;
                      _this7._wheelResultRate = 0;
                      gezi = cc.find("gezi", _this7.node.parent);
                      cc.vv.AudioManager.playEff("games/GodAthena/", "dove_fly1", true);
                      gezi.getComponent(sp.Skeleton).setToSetupPose();
                      gezi.getComponent(sp.Skeleton).clearTracks();
                      gezi.getComponent(sp.Skeleton).setAnimation(0, "animation4", false);
                      nvshen.runAction(cc.moveBy(1, 0, -310), cc.callFunc(function() {
                        nvshen.active = false;
                      }));
                      wheel.runAction(cc.moveBy(1, 0, 310));
                      cc.vv.AudioManager.playEff("games/GodAthena/", "wheel2_up", true);
                      wheel_result = cc.find("wheel_result", _this7.node);
                      beishulizi = wheel_result.getChildByName("beishulizi").getComponent(sp.Skeleton);
                      zhuanpanzhongjiang = cc.find("wheel_node/zhuanpanzhongjiang", _this7.node);
                      i = 0;

                     case 16:
                      if (!(i < _this7._gameInfo.randGame.info.items.length)) {
                        _context6.next = 57;
                        break;
                      }
                      item = _this7._gameInfo.randGame.info.items[i];
                      _context6.next = 20;
                      return _this7.awaitTime(2);

                     case 20:
                      _context6.next = 22;
                      return _this7._rotateWheel(item.id - 1);

                     case 22:
                      cc.vv.AudioManager.playEff("games/GodAthena/", "word_show", true);
                      zhuanpanzhongjiang.getComponent(sp.Skeleton).setCompleteListener(function() {
                        zhuanpanzhongjiang.active = false;
                      });
                      zhuanpanzhongjiang.active = true;
                      zhuanpanzhongjiang.getComponent(sp.Skeleton).setToSetupPose();
                      zhuanpanzhongjiang.getComponent(sp.Skeleton).clearTracks();
                      zhuanpanzhongjiang.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      _context6.next = 30;
                      return _this7.awaitTime(2);

                     case 30:
                      _particle = cc.instantiate(cc.find("beishulizi", _this7.node.parent));
                      _particle.parent = _this7.node.parent;
                      _particle.active = true;
                      _particle.position = _this7.node.parent.convertToNodeSpaceAR(zhuanpanzhongjiang.convertToWorldSpaceAR(cc.v2(0, 0)));
                      _endPos = _this7.node.parent.convertToNodeSpaceAR(cc.find("wheel_result/num", _this7.node).convertToWorldSpaceAR(cc.v2(0, 0)));
                      _particle.runAction(cc.sequence(cc.moveTo(.5, _endPos), cc.removeSelf()));
                      if (wheel_result.active) {
                        _context6.next = 50;
                        break;
                      }
                      wheel_result.active = true;
                      wheel_result.opacity = 0;
                      cc.tween(wheel_result).to(.5, {
                        opacity: 255
                      }).start();
                      wheel_result.getChildByName("icon").opacity = 0;
                      _context6.next = 43;
                      return cc.vv.gameData.awaitTime(.5);

                     case 43:
                      beishulizi.setToSetupPose();
                      beishulizi.setAnimation(0, "animation", true);
                      _this7._wheelResultRate += item.mult;
                      wheel_result.getChildByName("num").getComponent(cc.Label).string = _this7._wheelResultRate + "X";
                      wheel_result.getChildByName("icon").runAction(cc.fadeIn(.5));
                      _context6.next = 54;
                      break;

                     case 50:
                      _context6.next = 52;
                      return cc.vv.gameData.awaitTime(.5);

                     case 52:
                      _this7._wheelResultRate += item.mult;
                      wheel_result.getChildByName("num").getComponent(cc.Label).string = _this7._wheelResultRate + "X";

                     case 54:
                      i++;
                      _context6.next = 16;
                      break;

                     case 57:
                      _context6.next = 59;
                      return _this7.awaitTime(.5);

                     case 59:
                      particle = cc.instantiate(cc.find("beishulizi", _this7.node.parent));
                      particle.parent = _this7.node.parent;
                      particle.active = true;
                      particle.position = _this7.node.parent.convertToNodeSpaceAR(cc.find("wheel_result/num", _this7.node).convertToWorldSpaceAR(cc.v2(0, 0)));
                      endPos = _this7.node.parent.convertToNodeSpaceAR(cc.find("LMSlots_Bottom/winBg", _this7.node.parent).convertToWorldSpaceAR(cc.v2(0, 0)));
                      particle.runAction(cc.sequence(cc.moveTo(.5, endPos), cc.removeSelf()));
                      cc.vv.AudioManager.playEff("games/GodAthena/", "fly3", true);
                      _context6.next = 68;
                      return _this7.awaitTime(.5);

                     case 68:
                      nvshen.active = true;
                      nvshen.runAction(cc.moveBy(1, 0, 310));
                      wheel.runAction(cc.sequence(cc.moveBy(.5, 0, -275), cc.callFunc(function() {
                        wheel.active = false;
                      })));
                      wheel_result.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                        wheel_result.active = false;
                      })));
                      _context6.next = 74;
                      return _this7.awaitTime(1);

                     case 74:
                      winCoin = cc.vv.gameData.GetGameWin();
                      _this7.ShowBottomWin(winCoin * _this7._wheelResultRate, winCoin * _this7._wheelResultRate, true, function() {
                        success();
                      });

                     case 76:
                     case "end":
                      return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function(_x) {
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
      _rotateWheel: function _rotateWheel(endIndex) {
        var _this8 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
             case 0:
              return _context9.abrupt("return", new Promise(function() {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(success) {
                  var angle, zhuanpanlizi, action;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                     case 0:
                      angle = 24 * (endIndex - _this8._wheelCurIndex) - 2160;
                      _this8._wheelCurIndex = endIndex;
                      cc.log(_this8._wheelCurIndex);
                      cc.log(angle);
                      cc.vv.AudioManager.playEff("games/GodAthena/", "wheel2_spin", true);
                      zhuanpanlizi = cc.find("wheel_node/zhuanpanlizi", _this8.node);
                      zhuanpanlizi.active = true;
                      zhuanpanlizi.getComponent(sp.Skeleton).setToSetupPose();
                      zhuanpanlizi.getComponent(sp.Skeleton).clearTracks();
                      zhuanpanlizi.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                      zhuanpanlizi.getComponent(sp.Skeleton).setCompleteListener(function() {
                        zhuanpanlizi.active = false;
                      });
                      action = cc.rotateBy(6, angle).easing(cc.easeSineInOut());
                      cc.find("wheel_node/rotate_node", _this8.node).runAction(cc.sequence(action, cc.callFunc(function() {
                        cc.vv.AudioManager.playEff("games/GodAthena/", "wheel2_win", true);
                        success();
                      })));

                     case 13:
                     case "end":
                      return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function(_x2) {
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
      _triggerAthenaRespin: function _triggerAthenaRespin() {
        var _this9 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
             case 0:
              _this9.SetStopTime(3.5);
              _this9._playQuanzhangzhongjiang();
              _context10.next = 4;
              return _this9.awaitTime(1);

             case 4:
              _this9._playRandomGameAnimation(RandomGameType.AthenaRespin);
              _context10.next = 7;
              return _this9.awaitTime(2);

             case 7:
              cc.find("pink_3", _this9.node).active = true;
              _this9._freeGameType = FreeGameType.AthenaRespin;

             case 9:
             case "end":
              return _context10.stop();
            }
          }, _callee10);
        }))();
      },
      _playRandomGameAnimation: function _playRandomGameAnimation(type) {
        cc.vv.AudioManager.playEff("games/GodAthena/", "bonus_dialog_start_show", true);
        var atlas = cc.vv.gameData.GetAtlasByName("dialog_featrue_tip");
        var sprite_name = "theme173_popup7_" + type;
        var random_trigger_game = cc.find("random_trigger_game", this.node);
        random_trigger_game.active = true;
        var icon = cc.find("icon", random_trigger_game);
        atlas.getSpriteFrame(sprite_name) && (icon.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(sprite_name));
        icon.scale = 0;
        icon.runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.delayTime(1), cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
          random_trigger_game.active = false;
        })));
      },
      _playShengqipanhuoAnimation: function _playShengqipanhuoAnimation() {
        var shengqipanhuo = cc.find("shengqipanhuo", this.node);
        shengqipanhuo.active = true;
        var spine = shengqipanhuo.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          shengqipanhuo.active = false;
        });
      },
      _playShengqipantuoweiAnimation: function _playShengqipantuoweiAnimation() {
        var shengqipantuowei = cc.find("shengqipantuowei", this.node);
        shengqipantuowei.active = true;
        var spine = shengqipantuowei.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "animation2_1", false);
        spine.setCompleteListener(function() {
          shengqipantuowei.active = false;
        });
      },
      _triggerDiamondReward: function _triggerDiamondReward() {
        var _this10 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
          var i, card, symbol, putongjpkuang, ptjpk_spine, names, rowNum, _i, _card, pink_kuang, bg_animation_node, spine_script, animationName, dialog_node, red_diamond_node, btn_collect, func;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
             case 0:
              for (i = 0; i < _this10._gameInfo.resultCards.length; i++) {
                card = _this10._gameInfo.resultCards[i];
                if (card === _this10._cfg.redDiamondId || card === _this10._cfg.blueDiamondId) {
                  symbol = _this10.GetSymbolByIdx(i + 1);
                  symbol && symbol.playWinAnimation();
                }
              }
              putongjpkuang = cc.find("LMSlots_PrizePool_1/putongjpkuang", _this10.node.parent);
              putongjpkuang.active = true;
              ptjpk_spine = putongjpkuang.getComponent(sp.Skeleton);
              names = [ "animation5", "animation4", "animation3", "animation0", "animation2" ];
              ptjpk_spine.clearTracks();
              ptjpk_spine.setToSetupPose();
              ptjpk_spine.setAnimation(0, names[_this10._gameInfo.jackpot.id - 1], true);
              cc.find("LMSlots_PrizePool_1", _this10.node.parent).getComponent("LMSlots_PrizePool_Base").PausePool([ {
                prizeType: 0,
                pauseNum: _this10._gameInfo.jackpot.values[0]
              }, {
                prizeType: 1,
                pauseNum: _this10._gameInfo.jackpot.values[1]
              }, {
                prizeType: 2,
                pauseNum: _this10._gameInfo.jackpot.values[2]
              }, {
                prizeType: 3,
                pauseNum: _this10._gameInfo.jackpot.values[3]
              }, {
                prizeType: 4,
                pauseNum: _this10._gameInfo.jackpot.values[4]
              }, {
                prizeType: 5,
                pauseNum: _this10._gameInfo.jackpot.values[5]
              } ]);
              rowNum = 0;
              _i = 0;

             case 11:
              if (!(_i < _this10._gameInfo.resultCards.length / _this10._cfg.col)) {
                _context13.next = 19;
                break;
              }
              _card = _this10._gameInfo.resultCards[_i * _this10._cfg.col];
              if (!_this10._cfg.symbol[_card]) {
                _context13.next = 16;
                break;
              }
              rowNum = 6 - _i;
              return _context13.abrupt("break", 19);

             case 16:
              _i++;
              _context13.next = 11;
              break;

             case 19:
              pink_kuang = cc.find("pink_" + rowNum, _this10.node);
              pink_kuang && (pink_kuang.active = true);
              bg_animation_node = cc.find("reels_bg/jili_bouns_01", _this10.node);
              spine_script = bg_animation_node.getComponent(sp.Skeleton);
              bg_animation_node.active = true;
              animationName = "animation2_" + (6 - rowNum);
              spine_script.clearTracks();
              spine_script.setToSetupPose();
              spine_script.setAnimation(0, animationName, false);
              _context13.next = 30;
              return _this10.awaitTime(1);

             case 30:
              bg_animation_node.active = false;
              cc.vv.AudioManager.playEff("games/GodAthena/", "bonus_slot_end_superman", true);
              dialog_node = cc.find("dialog_node", _this10.node.parent);
              dialog_node.active = true;
              red_diamond_node = cc.find("red_diamond_node", dialog_node);
              red_diamond_node.active = true;
              red_diamond_node.scale = 0;
              red_diamond_node.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
              cc.find("num", red_diamond_node).getComponent(cc.Sprite).spriteFrame = cc.vv.gameData.GetAtlasByName("dialog_jp").getSpriteFrame("theme173_popup9_1_" + _this10._redDiamondNumByJackpotId[_this10._gameInfo.jackpot.id - 1]);
              Global.doRoallNumEff(cc.find("coin", red_diamond_node), 0, _this10._gameInfo.jackpot.value, 2, null, null, 0, true);
              btn_collect = cc.find("btn_collect", red_diamond_node);
              btn_collect.off("click");
              func = function() {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                     case 0:
                      btn_collect.off("click");
                      red_diamond_node.runAction(cc.scaleTo(.5, 0).easing(cc.easeBackIn()));
                      cc.find("LMSlots_PrizePool_1", _this10.node.parent).getComponent("LMSlots_PrizePool_Base").ResumePausePool();
                      _context11.next = 5;
                      return _this10.awaitTime(.5);

                     case 5:
                      red_diamond_node.active = false;
                      dialog_node.active = false;
                      _this10.ShowBottomWin(_this10._gameInfo.jackpot.value, _this10._gameInfo.jackpot.value, true, function() {
                        _this10.CanDoNextRound();
                      });

                     case 8:
                     case "end":
                      return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function func() {
                  return _ref3.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func);
              btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                   case 0:
                    btn_collect.stopAllActions();
                    _context12.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context12.stop();
                  }
                }, _callee12);
              })));

             case 45:
             case "end":
              return _context13.stop();
            }
          }, _callee13);
        }))();
      },
      OnSpinEnd: function OnSpinEnd() {
        var _this11 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
          var winCoin, random_wild_node, wild_parent, _winCoin, _winCoin2, result, _winCoin3, _winCoin4, totalWinCoin;
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
             case 0:
              if (!_this11._gameInfo.jackpot) {
                _context18.next = 4;
                break;
              }
              _this11._gameInfo.jackpot.symbol === _this11._cfg.redDiamondId && _this11._triggerDiamondReward();
              _context18.next = 46;
              break;

             case 4:
              _this11.ShowWinTrace();
              if (!_this11._gameInfo.randGame) {
                _context18.next = 42;
                break;
              }
              if (!(_this11._gameInfo.randGame.type === RandomGameType.WheelBonus)) {
                _context18.next = 11;
                break;
              }
              winCoin = cc.vv.gameData.GetGameWin();
              _this11.ShowBottomWin(winCoin, winCoin, false, _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                   case 0:
                    _this11._bottomScript.ShowBtnsByState("moveing_1");
                    _context14.next = 3;
                    return _this11._triggerWheelBonusGame();

                   case 3:
                    _this11.CanDoNextRound();

                   case 4:
                   case "end":
                    return _context14.stop();
                  }
                }, _callee14);
              })));
              _context18.next = 40;
              break;

             case 11:
              if (!(_this11._gameInfo.randGame.type === RandomGameType.RandomWild)) {
                _context18.next = 20;
                break;
              }
              random_wild_node = cc.find("random_wild_node", _this11.node);
              wild_parent = cc.find("wild_parent", random_wild_node);
              wild_parent.removeAllChildren();
              random_wild_node.active = false;
              _winCoin = cc.vv.gameData.GetGameWin();
              _this11.ShowBottomWin(_winCoin, _winCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                   case 0:
                    _this11.CanDoNextRound();

                   case 1:
                   case "end":
                    return _context15.stop();
                  }
                }, _callee15);
              })));
              _context18.next = 40;
              break;

             case 20:
              if (!(_this11._gameInfo.randGame.type === RandomGameType.AthenaRespin)) {
                _context18.next = 25;
                break;
              }
              _winCoin2 = cc.vv.gameData.GetGameWin();
              _this11.ShowBottomWin(_winCoin2, _winCoin2, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) switch (_context16.prev = _context16.next) {
                   case 0:
                    _this11.CanDoNextRound();

                   case 1:
                   case "end":
                    return _context16.stop();
                  }
                }, _callee16);
              })));
              _context18.next = 40;
              break;

             case 25:
              if (!(_this11._gameInfo.randGame.type === RandomGameType.ShieldBonus)) {
                _context18.next = 38;
                break;
              }
              _this11._playRandomGameAnimation(_this11._gameInfo.randGame.type);
              _context18.next = 29;
              return _this11.awaitTime(2.5);

             case 29:
              _this11.cutSceneAthena();
              _context18.next = 32;
              return _this11.awaitTime(1.3);

             case 32:
              _context18.next = 34;
              return _this11._shieldGameScript.enterGame();

             case 34:
              result = _this11._shieldGameScript.getResultData();
              result.items[result.choiceId - 1].type === ShieldType.ExpandingFreeGame || result.items[result.choiceId - 1].type === ShieldType.AthenaFreeGame || result.items[result.choiceId - 1].type === ShieldType.PickBonus ? _this11._popupScatterChoiceDialog(result) : result.items[result.choiceId - 1].type !== ShieldType.CoinMult && result.items[result.choiceId - 1].type !== ShieldType.AthenaProgressive || _this11.ShowBottomWin(result.winCoin, result.winCoin, true, function() {
                _this11.CanDoNextRound();
              });
              _context18.next = 40;
              break;

             case 38:
              _winCoin3 = cc.vv.gameData.GetGameWin();
              _this11.ShowBottomWin(_winCoin3, _winCoin3, true, function() {
                _this11.CanDoNextRound();
              });

             case 40:
              _context18.next = 46;
              break;

             case 42:
              _winCoin4 = cc.vv.gameData.GetGameWin();
              totalWinCoin = _winCoin4;
              cc.vv.gameData.GetTotalFree() > 0 && cc.vv.gameData.GetTotalFree() !== cc.vv.gameData.GetFreeTime() && (totalWinCoin = cc.vv.gameData.GetGameTotalFreeWin());
              _this11.ShowBottomWin(_winCoin4, totalWinCoin, true, _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) switch (_context17.prev = _context17.next) {
                   case 0:
                    if (!_this11._gameInfo.scatterChoice) {
                      _context17.next = 4;
                      break;
                    }
                    _this11._triggerSelectScatter();
                    _context17.next = 20;
                    break;

                   case 4:
                    if (!_this11.CheckExitFreeGame()) {
                      _context17.next = 9;
                      break;
                    }
                    if (_this11._freeGameType === FreeGameType.AthenaRespin) {
                      cc.find("pink_3", _this11.node).active = false;
                      _this11._freeGameType = 0;
                      _this11.CanDoNextRound();
                    } else _this11._freeGameType === FreeGameType.Expanding ? _this11._triggerExitExpandingFreeGames() : _this11._freeGameType === FreeGameType.GodAthena && _this11._triggerExitAthenaFreeGames();
                    Global.SlotsSoundMgr.playNormalBgm();
                    _context17.next = 20;
                    break;

                   case 9:
                    if (!_this11._checkExtraSpinInAthenaFreeGames()) {
                      _context17.next = 13;
                      break;
                    }
                    _this11._triggerExtraSpinInAthenaFreeGames();
                    _context17.next = 20;
                    break;

                   case 13:
                    if (!_this11._checkExtraFreeInExpandingFreeGames()) {
                      _context17.next = 17;
                      break;
                    }
                    _this11._triggerExtraFreeInExpandingFreeGames();
                    _context17.next = 20;
                    break;

                   case 17:
                    _context17.next = 19;
                    return _this11.awaitTime(.2);

                   case 19:
                    _this11.CanDoNextRound();

                   case 20:
                   case "end":
                    return _context17.stop();
                  }
                }, _callee17);
              })));

             case 46:
             case "end":
              return _context18.stop();
            }
          }, _callee18);
        }))();
      },
      _checkExtraFreeInExpandingFreeGames: function _checkExtraFreeInExpandingFreeGames() {
        return !!(this._gameInfo.freeResult && this._gameInfo.freeResult.freeInfo && this._gameInfo.freeResult.freeInfo.freeCnt > 0);
      },
      _triggerExtraFreeInExpandingFreeGames: function _triggerExtraFreeInExpandingFreeGames() {
        var _this12 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
          var i, card, symbol, dialog_node, action, node;
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
             case 0:
              for (i = 0; i < _this12._gameInfo.resultCards.length; i++) {
                card = _this12._gameInfo.resultCards[i];
                if (card === _this12._cfg.scatterId) {
                  symbol = _this12.GetSymbolByIdx(i + 1);
                  symbol && symbol.playWinAnimation();
                }
              }
              _context19.next = 3;
              return _this12.awaitTime(1);

             case 3:
              dialog_node = cc.find("dialog_node", _this12.node.parent);
              dialog_node.active = true;
              action = cc.scaleTo(.7, 1).easing(cc.easeBackOut());
              node = dialog_node.getChildByName("expand_extra_bg");
              1 === _this12._gameInfo.bonusTrail.state ? node = dialog_node.getChildByName("expand_extra_bg_megabonus") : 2 === _this12._gameInfo.bonusTrail.state && (node = dialog_node.getChildByName("expand_extra_bg_superbonus"));
              node.scale = 0;
              node.active = true;
              node.runAction(action);
              _context19.next = 13;
              return _this12.awaitTime(1.5);

             case 13:
              node.runAction(cc.scaleTo(.7, 0).easing(cc.easeBackIn()));
              _context19.next = 16;
              return _this12.awaitTime(.7);

             case 16:
              dialog_node.active = false;
              _this12.CanDoNextRound();

             case 18:
             case "end":
              return _context19.stop();
            }
          }, _callee19);
        }))();
      },
      _checkExtraSpinInAthenaFreeGames: function _checkExtraSpinInAthenaFreeGames() {
        if (this._freeGameType === FreeGameType.GodAthena) {
          var _iterator3 = _createForOfIteratorHelper(this._gameInfo.resultCards), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var resultCard = _step3.value;
              if (resultCard === this._cfg.extraOneSpinId || resultCard === this._cfg.extraTwoSpinId) return true;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        return false;
      },
      _triggerExtraSpinInAthenaFreeGames: function _triggerExtraSpinInAthenaFreeGames() {
        var _this13 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
          var freeCnt, i, card, symbol, dialog_node, action, node, extra_num;
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) switch (_context20.prev = _context20.next) {
             case 0:
              freeCnt = 0;
              for (i = 0; i < _this13._gameInfo.resultCards.length; i++) {
                card = _this13._gameInfo.resultCards[i];
                if (card === _this13._cfg.extraOneSpinId || card === _this13._cfg.extraTwoSpinId) {
                  symbol = _this13.GetSymbolByIdx(i + 1);
                  if (symbol) {
                    symbol.playWinAnimation();
                    freeCnt += card - _this13._cfg.extraOneSpinId + 1;
                  }
                }
              }
              cc.vv.AudioManager.playEff("games/GodAthena/", "bell", true);
              _context20.next = 5;
              return _this13.awaitTime(1);

             case 5:
              dialog_node = cc.find("dialog_node", _this13.node.parent);
              dialog_node.active = true;
              action = cc.scaleTo(.7, 1).easing(cc.easeBackOut());
              node = dialog_node.getChildByName("Athena_extra_bg");
              1 === _this13._gameInfo.bonusTrail.state ? node = dialog_node.getChildByName("Athena_extra_bg_megabonus") : 2 === _this13._gameInfo.bonusTrail.state && (node = dialog_node.getChildByName("Athena_extra_bg_superbonus"));
              cc.vv.AudioManager.playEff("games/GodAthena/", "free2_dialog_start_show", true);
              node.scale = 0;
              node.active = true;
              node.runAction(action);
              extra_num = cc.find("extra_num", node);
              extra_num.getComponent(cc.Label).string = freeCnt;
              _context20.next = 18;
              return _this13.awaitTime(1.5);

             case 18:
              cc.vv.AudioManager.playEff("games/GodAthena/", "popup_out", true);
              node.runAction(cc.scaleTo(.7, 0).easing(cc.easeBackIn()));
              _context20.next = 22;
              return _this13.awaitTime(.7);

             case 22:
              dialog_node.active = false;
              _this13.CanDoNextRound();

             case 24:
             case "end":
              return _context20.stop();
            }
          }, _callee20);
        }))();
      },
      _triggerExitExpandingFreeGames: function _triggerExitExpandingFreeGames() {
        var _this14 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
          var dialog_node, expand_free_result, btn_collect, func;
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
             case 0:
              _context23.next = 2;
              return _this14.awaitTime(1);

             case 2:
              dialog_node = cc.find("dialog_node", _this14.node.parent);
              dialog_node.active = true;
              Global.SlotsSoundMgr.stopBgm();
              cc.vv.AudioManager.playEff("games/GodAthena/", "free1_dialog_collect_show", true);
              expand_free_result = cc.find("expand_free_result", dialog_node);
              0 !== _this14._gameInfo.bonusTrail.state && (expand_free_result = dialog_node.getChildByName("bonus_free_result"));
              expand_free_result.scale = 0;
              expand_free_result.active = true;
              expand_free_result.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
              Global.doRoallNumEff(cc.find("total_win", expand_free_result), 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
              btn_collect = cc.find("btn_collect", expand_free_result);
              btn_collect.off("click");
              func = function() {
                var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
                  var _iterator4, _step4, reel, _iterator5, _step5, _reel, i;
                  return regeneratorRuntime.wrap(function _callee21$(_context21) {
                    while (1) switch (_context21.prev = _context21.next) {
                     case 0:
                      btn_collect.off("click");
                      cc.vv.AudioManager.playEff("games/GodAthena/", "popup_out", true);
                      expand_free_result.runAction(cc.scaleTo(.7, 0).easing(cc.easeBackIn()));
                      _this14.cutSceneFire();
                      _context21.next = 6;
                      return _this14.awaitTime(.5);

                     case 6:
                      _iterator4 = _createForOfIteratorHelper(_this14._reels);
                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                          reel = _step4.value;
                          reel.resetReel();
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                      dialog_node.active = false;
                      _context21.next = 11;
                      return _this14.awaitTime(1);

                     case 11:
                      _this14._haveChooseScatter = false;
                      _this14._playNvshen("idle");
                      _iterator5 = _createForOfIteratorHelper(_this14._reels);
                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                          _reel = _step5.value;
                          _reel.clearLastSymbol();
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }
                      _this14.Resume();
                      cc.find("reels_frame/common_node", _this14.node).active = true;
                      cc.find("reels_frame/expand_free_node", _this14.node).active = false;
                      if (16 === _this14._gameInfo.bonusTrail.count) {
                        _this14._curBonusCount = 0;
                        for (i = 1; i < 17; i++) cc.find("reels_frame/common_node/bonus_node/icon_" + i, _this14.node).active = false;
                      }
                      _this14._freeGameType = 0;
                      _this14.ShowGameview(false);
                      _this14._playNvshen("idle", true);
                      _this14.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                        Global.SlotsSoundMgr.stopBgm();
                        Global.SlotsSoundMgr.playNormalBgm();
                        _this14.CanDoNextRound();
                      });

                     case 23:
                     case "end":
                      return _context21.stop();
                    }
                  }, _callee21);
                }));
                return function func() {
                  return _ref9.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func);
              btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
                return regeneratorRuntime.wrap(function _callee22$(_context22) {
                  while (1) switch (_context22.prev = _context22.next) {
                   case 0:
                    btn_collect.stopAllActions();
                    _context22.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context22.stop();
                  }
                }, _callee22);
              })));

             case 17:
             case "end":
              return _context23.stop();
            }
          }, _callee23);
        }))();
      },
      _triggerExitAthenaFreeGames: function _triggerExitAthenaFreeGames() {
        var _this15 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee26() {
          var dialog_node, Athena_free_result, btn_collect, func;
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) switch (_context26.prev = _context26.next) {
             case 0:
              _context26.next = 2;
              return _this15.awaitTime(1);

             case 2:
              dialog_node = cc.find("dialog_node", _this15.node.parent);
              dialog_node.active = true;
              Athena_free_result = cc.find("Athena_free_result", dialog_node);
              Global.SlotsSoundMgr.stopBgm();
              if (0 !== _this15._gameInfo.bonusTrail.state) {
                Athena_free_result = dialog_node.getChildByName("bonus_free_result");
                cc.vv.AudioManager.playEff("games/GodAthena/", "free2_dialog_collect_show", true);
              } else cc.vv.AudioManager.playEff("games/GodAthena/", "free1_dialog_collect_show", true);
              Athena_free_result.scale = 0;
              Athena_free_result.active = true;
              Athena_free_result.runAction(cc.scaleTo(.7, 1).easing(cc.easeBackOut()));
              Global.doRoallNumEff(cc.find("total_win", Athena_free_result), 0, cc.vv.gameData.GetGameTotalFreeWin(), 3, null, null, 0, true);
              btn_collect = cc.find("btn_collect", Athena_free_result);
              btn_collect.off("click");
              func = function() {
                var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24() {
                  var i;
                  return regeneratorRuntime.wrap(function _callee24$(_context24) {
                    while (1) switch (_context24.prev = _context24.next) {
                     case 0:
                      btn_collect.off("click");
                      cc.vv.AudioManager.playEff("games/GodAthena/", "popup_out", true);
                      Athena_free_result.runAction(cc.scaleTo(.7, 0).easing(cc.easeBackIn()));
                      _this15.cutSceneAthena();
                      _context24.next = 6;
                      return _this15.awaitTime(1.3);

                     case 6:
                      _this15.Resume();
                      _this15._haveChooseScatter = false;
                      dialog_node.active = false;
                      cc.find("reels_frame/common_node", _this15.node).active = true;
                      if (16 === _this15._gameInfo.bonusTrail.count) {
                        _this15._curBonusCount = 0;
                        for (i = 1; i < 17; i++) cc.find("reels_frame/common_node/bonus_node/icon_" + i, _this15.node).active = false;
                      }
                      cc.find("reels_frame/expand_free_node", _this15.node).active = false;
                      _this15._freeGameType = 0;
                      _this15.ShowGameview(false);
                      _this15._playNvshen("idle", true);
                      _context24.next = 17;
                      return _this15.awaitTime(.2);

                     case 17:
                      _this15.ShowBottomWin(cc.vv.gameData.GetGameTotalFreeWin(), cc.vv.gameData.GetGameTotalFreeWin(), true, function() {
                        Global.SlotsSoundMgr.stopBgm();
                        Global.SlotsSoundMgr.playNormalBgm();
                        _this15.CanDoNextRound();
                      });

                     case 18:
                     case "end":
                      return _context24.stop();
                    }
                  }, _callee24);
                }));
                return function func() {
                  return _ref11.apply(this, arguments);
                };
              }();
              cc.vv.gameData.checkAutoPlay(btn_collect, func);
              btn_collect.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee25() {
                return regeneratorRuntime.wrap(function _callee25$(_context25) {
                  while (1) switch (_context25.prev = _context25.next) {
                   case 0:
                    btn_collect.stopAllActions();
                    _context25.next = 3;
                    return func();

                   case 3:
                   case "end":
                    return _context25.stop();
                  }
                }, _callee25);
              })));

             case 16:
             case "end":
              return _context26.stop();
            }
          }, _callee26);
        }))();
      },
      cutSceneFire: function cutSceneFire() {
        cc.vv.AudioManager.playEff("games/GodAthena/", "transitionfire", true);
        var qiepinghuo = cc.find("qiepinghuo01", this.node.parent);
        qiepinghuo.active = true;
        var spine = qiepinghuo.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          qiepinghuo.active = false;
        });
      },
      cutSceneAthena: function cutSceneAthena() {
        var _this16 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee27() {
          var nvshen, spine;
          return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) switch (_context27.prev = _context27.next) {
             case 0:
              cc.vv.AudioManager.playEff("games/GodAthena/", "transitiongoddess", true);
              _this16.setNvshenActive(false);
              nvshen = cc.find("nvshen_01", _this16.node.parent);
              nvshen.active = true;
              spine = nvshen.getComponent(sp.Skeleton);
              spine.setToSetupPose();
              spine.setAnimation(0, "animation", false);
              spine.setCompleteListener(function() {
                nvshen.active = false;
              });
              _context27.next = 10;
              return cc.vv.gameData.awaitTime(1.3);

             case 10:
              _this16.setNvshenActive(true);

             case 11:
             case "end":
              return _context27.stop();
            }
          }, _callee27);
        }))();
      },
      cutSceneQuanZhang: function cutSceneQuanZhang() {
        cc.vv.AudioManager.playEff("games/GodAthena/", "transitionwand", true);
        var quanzhang = cc.find("quanzhang_01", this.node.parent);
        quanzhang.active = true;
        var spine = quanzhang.getComponent(sp.Skeleton);
        spine.setToSetupPose();
        spine.setAnimation(0, "animation", false);
        spine.setCompleteListener(function() {
          quanzhang.active = false;
        });
      },
      _triggerSelectScatter: function _triggerSelectScatter(idxs) {
        var _this17 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee28() {
          var scatterIdxs, _iterator6, _step6, scatterIdx, symbol, icon, spine, scatter_node, scatter_parent, self, func, _iterator7, _step7, _loop;
          return regeneratorRuntime.wrap(function _callee28$(_context28) {
            while (1) switch (_context28.prev = _context28.next) {
             case 0:
              scatterIdxs = idxs || _this17._gameInfo.scatterChoice.scatterIdxs;
              _iterator6 = _createForOfIteratorHelper(scatterIdxs);
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                  scatterIdx = _step6.value;
                  symbol = _this17.GetSymbolByIdx(scatterIdx);
                  symbol.playWinAnimation();
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
              cc.vv.AudioManager.playEff("games/GodAthena/", "bell", true);
              if (_this17._gameInfo && _this17._gameInfo.bonusTrail.count > _this17._curBonusCount) {
                _this17._curBonusCount = _this17._gameInfo.bonusTrail.count;
                icon = cc.find("reels_frame/common_node/bonus_node/icon_" + _this17._curBonusCount, _this17.node);
                icon.active = true;
                spine = icon.getChildByName("spine");
                spine.getComponent(sp.Skeleton).setToSetupPose();
                spine.active = true;
              }
              _this17.Backup();
              _context28.next = 8;
              return _this17.awaitTime(2);

             case 8:
              _this17.hideScatterBg();
              scatter_node = cc.find("scatter_node", _this17.node);
              scatter_node.active = true;
              scatter_parent = cc.find("scatter_parent", scatter_node);
              cc.vv.AudioManager.playEff("games/GodAthena/", "pickone", true);
              self = _this17;
              func = function func(scatterIdx) {
                if (self._haveChooseScatter) return;
                cc.vv.AudioManager.playEff("games/GodAthena/", "choose", true);
                var req = {
                  c: MsgId.SLOT_SUBGAME_DATA
                };
                req.uid = Global.playerData.uid;
                req.gameid = cc.vv.gameData._gameId;
                req.data = {};
                req.data.rtype = 1;
                req.data.choiceId = scatterIdx;
                cc.vv.NetManager.send(req);
                self._haveChooseScatter = true;
              };
              _iterator7 = _createForOfIteratorHelper(scatterIdxs);
              try {
                _loop = function _loop() {
                  var scatterIdx = _step7.value;
                  var symbol = _this17.GetSymbolByIdx(scatterIdx);
                  symbol.setAnimationToTop(false);
                  var pos = _this17.GetSymbolByIdx(scatterIdx).node.convertToWorldSpaceAR(cc.v2(0, 0));
                  pos = scatter_parent.convertToNodeSpaceAR(pos);
                  var node = cc.instantiate(cc.find("scatter_xunhuan_spine", _this17.node.parent));
                  node.parent = scatter_parent;
                  node.name = scatterIdx.toString();
                  node.active = true;
                  node.position = pos;
                  var spine = node.getComponent(sp.Skeleton);
                  spine.clearTracks();
                  spine.setToSetupPose();
                  spine.setAnimation(0, "animation", true);
                  var pick_one = cc.find("pick_one", node);
                  pick_one.active = true;
                  pick_one.scale = 0;
                  pick_one.runAction(cc.sequence(cc.scaleTo(.5, 1.1), cc.callFunc(function() {
                    pick_one.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .9), cc.scaleTo(.5, 1.1))));
                  })));
                  node.getChildByName("touch_node").on(cc.Node.EventType.TOUCH_END, function() {
                    func(scatterIdx);
                  });
                };
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) _loop();
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
              cc.vv.gameData.checkAutoPlay(scatter_parent.children[0], function() {
                func(Number(scatter_parent.children[0].name));
              });

             case 18:
             case "end":
              return _context28.stop();
            }
          }, _callee28);
        }))();
      },
      onRcvSubGameData: function onRcvSubGameData(msg) {
        var _this18 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee29() {
          var data, atlas, tujiatlas, _scatter_parent, choiceItem, i, scatterIdx, node, spine, _icon, pick_one, icon, _iterator8, _step8, _scatterIdx;
          return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) switch (_context29.prev = _context29.next) {
             case 0:
              data = msg.data;
              if (!(200 !== msg.code)) {
                _context29.next = 3;
                break;
              }
              return _context29.abrupt("return");

             case 3:
              if (!(1 === data.rtype)) {
                _context29.next = 30;
                break;
              }
              atlas = cc.vv.gameData.GetAtlasByName("symbols");
              tujiatlas = cc.vv.gameData.GetAtlasByName("tuji");
              _scatter_parent = cc.find("scatter_node/scatter_parent", _this18.node);
              choiceItem = _scatter_parent.getChildByName("" + data.choiceId);
              for (i = 0; i < data.scatterIdxs.length; i++) {
                scatterIdx = data.scatterIdxs[i];
                if (scatterIdx !== data.choiceId) {
                  node = _scatter_parent.getChildByName("" + scatterIdx);
                  node.color = cc.Color.GRAY;
                  spine = node.getComponent(sp.Skeleton);
                  spine.clearTracks();
                  spine.setToSetupPose();
                  spine.setAnimation(0, "animation2", true);
                  _icon = cc.find("icon", node);
                  if (tujiatlas.getSpriteFrame("theme173_s_fpr" + data.allOptions[i] + "n")) {
                    console.log("---1theme173_s_fpr0011111");
                    _icon.getComponent(cc.Sprite).spriteFrame = tujiatlas.getSpriteFrame("theme173_s_fpr" + data.allOptions[i] + "n");
                  } else {
                    console.log("---1theme173_s_fpr0012222");
                    _icon.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme173_s_fpr" + data.allOptions[i]);
                  }
                  _icon.active = true;
                  _icon.scale = 0;
                }
              }
              pick_one = cc.find("pick_one", choiceItem);
              icon = cc.find("icon", choiceItem);
              console.log("---1theme173_s_fpr", tujiatlas.getSpriteFrame("theme173_s_fpr" + data.choiceType + "n"), atlas.getSpriteFrame("theme173_s_fpr" + data.choiceType));
              if (tujiatlas.getSpriteFrame("theme173_s_fpr" + data.choiceType + "n")) {
                console.log("---1theme173_s_fpr11111");
                icon.getComponent(cc.Sprite).spriteFrame = tujiatlas.getSpriteFrame("theme173_s_fpr" + data.choiceType + "n");
              } else {
                console.log("---1theme173_s_fpr12222");
                icon.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("theme173_s_fpr" + data.choiceType);
              }
              icon.active = true;
              icon.scale = 0;
              pick_one.stopAllActions();
              pick_one.runAction(cc.scaleTo(.8, 0));
              _context29.next = 19;
              return _this18.awaitTime(.8);

             case 19:
              icon.runAction(cc.scaleTo(.8, 1));
              _context29.next = 22;
              return _this18.awaitTime(.8);

             case 22:
              cc.vv.AudioManager.playEff("games/GodAthena/", "othershow", true);
              _iterator8 = _createForOfIteratorHelper(data.scatterIdxs);
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                  _scatterIdx = _step8.value;
                  _scatterIdx !== data.choiceId && function() {
                    var node = _scatter_parent.getChildByName("" + _scatterIdx);
                    node.getChildByName("pick_one").stopAllActions();
                    node.getChildByName("pick_one").runAction(cc.sequence(cc.scaleTo(.8, 0), cc.callFunc(function() {
                      node.getChildByName("icon").runAction(cc.scaleTo(.8, 1));
                    })));
                  }();
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              _context29.next = 27;
              return _this18.awaitTime(2);

             case 27:
              _this18._popupScatterChoiceDialog(data);
              _context29.next = 31;
              break;

             case 30:
              2 === data.rtype ? _this18._pickBonusGameScript.onChooseKnife(data) : 3 === data.rtype && _this18._shieldGameScript.onChooseShield(data);

             case 31:
             case "end":
              return _context29.stop();
            }
          }, _callee29);
        }))();
      },
      _popupScatterChoiceDialog: function _popupScatterChoiceDialog(data) {
        var _this19 = this;
        Global.SlotsSoundMgr.stopBgm();
        var dialog_node = cc.find("dialog_node", this.node.parent);
        dialog_node.active = true;
        var bonusTrail = this._gameInfo ? this._gameInfo.bonusTrail : cc.vv.gameData.getDeskInfo().bonusTrail;
        var action = cc.scaleTo(.7, 1).easing(cc.easeBackOut());
        var node = dialog_node.getChildByName("expand_bg");
        switch (data.choiceType) {
         case ScatterChoiceType.ExpandingFreeGames:
          node = dialog_node.getChildByName("expand_bg");
          if (1 === bonusTrail.state) {
            node = dialog_node.getChildByName("expand_bg_megabonus");
            cc.vv.AudioManager.playEff("games/GodAthena/", "free2_dialog_start_show", true);
          } else if (2 === bonusTrail.state) {
            node = dialog_node.getChildByName("expand_bg_superbonus");
            cc.vv.AudioManager.playEff("games/GodAthena/", "free2_dialog_start_show", true);
          } else cc.vv.AudioManager.playEff("games/GodAthena/", "free1_dialog_start_show", true);
          break;

         case ScatterChoiceType.PickBonus:
          node = dialog_node.getChildByName("pickbonus_bg");
          cc.vv.AudioManager.playEff("games/GodAthena/", "dialog_pick1_start", true);
          break;

         case ScatterChoiceType.AthenaFreeGames:
          node = dialog_node.getChildByName("Athena_bg");
          if (1 === bonusTrail.state) {
            node = dialog_node.getChildByName("Athena_bg_megabonus");
            cc.vv.AudioManager.playEff("games/GodAthena/", "free2_dialog_start_show", true);
          } else if (2 === bonusTrail.state) {
            node = dialog_node.getChildByName("Athena_bg_superbonus");
            cc.vv.AudioManager.playEff("games/GodAthena/", "free2_dialog_start_show", true);
          } else cc.vv.AudioManager.playEff("games/GodAthena/", "free1_dialog_start_show", true);
        }
        node.scale = 0;
        node.active = true;
        node.runAction(action);
        var btn_start = cc.find("btn_start", node);
        btn_start.off("click");
        var func = function() {
          var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee31() {
            var reverseAction, scatter_node, _scatter_parent2, _scatter_node, _scatter_parent3, gezi, gezi_spine, _scatter_node2, _scatter_parent4, i;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) switch (_context31.prev = _context31.next) {
               case 0:
                btn_start.off("click");
                cc.vv.AudioManager.playEff("games/GodAthena/", "btn_click", true);
                reverseAction = cc.scaleTo(.7, 0).easing(cc.easeBackIn());
                cc.vv.AudioManager.playEff("games/GodAthena/", "popup_out", true);
                _context31.t0 = data.choiceType;
                _context31.next = _context31.t0 === ScatterChoiceType.ExpandingFreeGames ? 7 : _context31.t0 === ScatterChoiceType.AthenaFreeGames ? 29 : _context31.t0 === ScatterChoiceType.PickBonus ? 60 : 82;
                break;

               case 7:
                node.runAction(reverseAction);
                _this19.cutSceneFire();
                _context31.next = 11;
                return _this19.awaitTime(1.5);

               case 11:
                cc.vv.gameData.SetTotalFree(data.freeInfo.freeCnt);
                cc.vv.gameData.SetFreeTime(data.freeInfo.freeCnt);
                _this19._freeGameType = FreeGameType.Expanding;
                _this19.ShowGameview(true);
                _this19._playNvshen("shifa");
                dialog_node.active = false;
                cc.find("reels_frame/common_node", _this19.node).active = false;
                cc.find("reels_frame/expand_free_node", _this19.node).active = true;
                scatter_node = cc.find("scatter_node", _this19.node);
                scatter_node.active = false;
                _scatter_parent2 = cc.find("scatter_parent", scatter_node);
                _scatter_parent2.removeAllChildren();
                _this19._shieldGameScript.exitGame();
                _context31.next = 26;
                return _this19.awaitTime(1.5);

               case 26:
                cc.vv.AudioManager.playBgm("games/GodAthena/", "fgbgm", true);
                _this19.CanDoNextRound();
                return _context31.abrupt("break", 82);

               case 29:
                node.runAction(reverseAction);
                _this19.cutSceneAthena();
                _context31.next = 33;
                return _this19.awaitTime(1.3);

               case 33:
                cc.vv.gameData.SetTotalFree(data.freeInfo.freeCnt);
                cc.vv.gameData.SetFreeTime(data.freeInfo.freeCnt);
                _this19._freeGameType = FreeGameType.GodAthena;
                _this19.ShowGameview(true);
                dialog_node.active = false;
                cc.find("reels_frame/common_node", _this19.node).active = false;
                cc.find("reels_frame/expand_free_node", _this19.node).active = true;
                _scatter_node = cc.find("scatter_node", _this19.node);
                _scatter_node.active = false;
                _scatter_parent3 = cc.find("scatter_parent", _scatter_node);
                _scatter_parent3.removeAllChildren();
                _this19._shieldGameScript.exitGame();
                _context31.next = 47;
                return _this19.awaitTime(.3);

               case 47:
                _this19._playNvshen("shifa");
                _context31.next = 50;
                return _this19.awaitTime(1.5);

               case 50:
                gezi = cc.find("gezi", _this19.node.parent);
                cc.vv.AudioManager.playEff("games/GodAthena/", "dove_fly1", true);
                gezi_spine = gezi.getComponent(sp.Skeleton);
                gezi_spine.clearTracks();
                gezi_spine.setToSetupPose();
                gezi_spine.setAnimation(0, "animation2", false);
                gezi_spine.setCompleteListener(function() {
                  var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee30(track) {
                    var name;
                    return regeneratorRuntime.wrap(function _callee30$(_context30) {
                      while (1) switch (_context30.prev = _context30.next) {
                       case 0:
                        name = track.animation ? track.animation.name : "";
                        if (!(_this19._freeGameType === FreeGameType.GodAthena)) {
                          _context30.next = 7;
                          break;
                        }
                        if (!("animation2" === name)) {
                          _context30.next = 7;
                          break;
                        }
                        _context30.next = 5;
                        return cc.vv.gameData.awaitTime(10 * Math.random());

                       case 5:
                        gezi_spine.setToSetupPose();
                        gezi_spine.setAnimation(0, "animation2", false);

                       case 7:
                       case "end":
                        return _context30.stop();
                      }
                    }, _callee30);
                  }));
                  return function(_x3) {
                    return _ref14.apply(this, arguments);
                  };
                }());
                cc.vv.AudioManager.playBgm("games/GodAthena/", "free_game_music_advanced", true);
                _this19.CanDoNextRound();
                return _context31.abrupt("break", 82);

               case 60:
                node.runAction(reverseAction);
                _this19.cutSceneQuanZhang();
                _context31.next = 64;
                return _this19.awaitTime(1.5);

               case 64:
                dialog_node.active = false;
                _this19._shieldGameScript.exitGame();
                _scatter_node2 = cc.find("scatter_node", _this19.node);
                _scatter_node2.active = false;
                _scatter_parent4 = cc.find("scatter_parent", _scatter_node2);
                _scatter_parent4.removeAllChildren();
                _context31.next = 72;
                return _this19._triggerPickBonusGame(data.knifeGame);

               case 72:
                _this19.cutSceneQuanZhang();
                _context31.next = 75;
                return _this19.awaitTime(1);

               case 75:
                _this19._pickBonusGameScript.exitGame();
                if (16 === bonusTrail.count) {
                  _this19._curBonusCount = 0;
                  for (i = 1; i < 17; i++) cc.find("reels_frame/common_node/bonus_node/icon_" + i, _this19.node).active = false;
                }
                _this19._haveChooseScatter = false;
                _context31.next = 80;
                return _this19.awaitTime(.5);

               case 80:
                _this19.ShowBottomWin(_this19._pickBonusGameScript.getWinCoin(), _this19._pickBonusGameScript.getWinCoin(), true, function() {
                  Global.SlotsSoundMgr.stopBgm();
                  Global.SlotsSoundMgr.playNormalBgm();
                  _this19.CanDoNextRound();
                });
                return _context31.abrupt("break", 82);

               case 82:
               case "end":
                return _context31.stop();
              }
            }, _callee31);
          }));
          return function func() {
            return _ref13.apply(this, arguments);
          };
        }();
        cc.vv.gameData.checkAutoPlay(btn_start, func);
        btn_start.on("click", _asyncToGenerator(regeneratorRuntime.mark(function _callee32() {
          return regeneratorRuntime.wrap(function _callee32$(_context32) {
            while (1) switch (_context32.prev = _context32.next) {
             case 0:
              btn_start.stopAllActions();
              _context32.next = 3;
              return func();

             case 3:
             case "end":
              return _context32.stop();
            }
          }, _callee32);
        })));
      },
      _triggerPickBonusGame: function _triggerPickBonusGame(knifeGame) {
        var _this20 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee33() {
          return regeneratorRuntime.wrap(function _callee33$(_context33) {
            while (1) switch (_context33.prev = _context33.next) {
             case 0:
              return _context33.abrupt("return", new Promise(function(success) {
                _this20._pickBonusGameScript.enterGame(knifeGame, success);
              }));

             case 1:
             case "end":
              return _context33.stop();
            }
          }, _callee33);
        }))();
      },
      setPickBonusGameScript: function setPickBonusGameScript(script) {
        this._pickBonusGameScript = script;
      },
      setShieldGameScript: function setShieldGameScript(script) {
        this._shieldGameScript = script;
      },
      GetSymbolByIdx: function GetSymbolByIdx(idx) {
        var col = (idx - 1) % this._col;
        var row = 6 - Math.floor((idx - 1) / this._col) - 1;
        return this._reels[col].GetSymbolByRow(row);
      },
      OnReelSpinEnd: function OnReelSpinEnd(colIdx) {
        var reel = this._reels[colIdx];
        reel.isHaveScatter() && reel.setScatterBgVisible(true);
        if (2 === colIdx) {
          var reel_1 = this._reels[0];
          reel_1.isHaveScatter() && this._reels[colIdx].isHaveScatter() || this.hideScatterBg();
        } else 4 === colIdx && (this._reels[0].isHaveScatter() && this._reels[2].isHaveScatter() && this._reels[colIdx].isHaveScatter() || this.hideScatterBg());
      },
      hideScatterBg: function hideScatterBg() {
        var _iterator9 = _createForOfIteratorHelper(this._reels), _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
            var reel = _step9.value;
            reel.setScatterBgVisible(false);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      },
      _playQuanzhangzhongjiang: function _playQuanzhangzhongjiang() {
        var quanzhangzhongjiang = cc.find("nvshen/quanzhangzhongjiang", this.node.parent);
        var quanzhangzhongjiang_spine = quanzhangzhongjiang.getComponent(sp.Skeleton);
        quanzhangzhongjiang.active = true;
        quanzhangzhongjiang_spine.setToSetupPose();
        quanzhangzhongjiang_spine.setAnimation(0, "animation", false);
        quanzhangzhongjiang_spine.setCompleteListener(function() {
          quanzhangzhongjiang.active = false;
        });
      },
      setNvshenActive: function setNvshenActive(bActive) {
        var nvshen = cc.find("nvshen", this.node.parent);
        nvshen.active = bActive;
      },
      _playNvshen: function _playNvshen(name) {
        var bRecover = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var nvshen = cc.find("nvshen", this.node.parent);
        var nvshen_spine = nvshen.getComponent(sp.Skeleton);
        nvshen_spine.clearTracks();
        nvshen_spine.setToSetupPose();
        if ("idle" === name) {
          nvshen_spine.setAnimation(0, name, true);
          bRecover && cc.tween(nvshen).by(.2, {
            y: -cc.winSize.height / 1560 * 400,
            scale: .2
          }).start();
        } else {
          cc.tween(nvshen).by(.5, {
            y: cc.winSize.height / 1560 * 400,
            scale: -.2
          }).start();
          nvshen_spine.setAnimation(0, name, false);
          nvshen_spine.addAnimation(0, "idle", true);
        }
      },
      ShowGameview: function ShowGameview(bFree, bReconnect) {
        this._super(bFree);
        cc.find("LMSlots_PrizePool_1/prizePool_Progressive", this.node.parent).active = !bFree;
        var baseAtlas = cc.vv.gameData.GetAtlasByName("base");
        for (var i = 1; i <= 5; i++) cc.find("reels_bg/reel_bg".concat(i), this.node).getComponent(cc.Sprite).spriteFrame = bFree ? baseAtlas.getSpriteFrame("kuangDi2") : baseAtlas.getSpriteFrame("kuangDi");
        bReconnect && bFree && this._playNvshen("shifa");
      },
      onDestroy: function onDestroy() {
        cc.vv.NetManager.unregisterMsg(MsgId.SLOT_SUBGAME_DATA, this.onRcvSubGameData, false, this);
      },
      awaitTime: function awaitTime(time) {
        var _this21 = this;
        return new Promise(function(success, failed) {
          _this21.scheduleOnce(function() {
            success();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Slots_Base: void 0
  } ],
  Athena_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d18fdrJizNGM49kMEGP6W96", "Athena_Symbol");
    "use strict";
    cc.Class({
      extends: require("LMSlots_Symbol_Base"),
      properties: {},
      StartMove: function StartMove() {
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    LMSlots_Symbol_Base: void 0
  } ],
  Athena_Wheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a67c13YS31EGLXsFhyXLeHG", "Athena_Wheel");
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
        items: [ cc.Node ],
        rate_2: cc.Node,
        rate_3: cc.Node,
        zhuanpanlizi: cc.Node,
        zhuanpanzhongjiang: cc.Node,
        _successCallback: null,
        _resultItem: null,
        _startMove: false,
        _speed: 5,
        _maxSpeed: 10,
        _minSpeed: .5,
        _speedOffset: .02,
        _count: 12,
        _needStop: false,
        _bottomPosY: 0,
        _backMove: false,
        _resultData: null,
        _wheelConfig: null,
        _winCoin: 0
      },
      onLoad: function onLoad() {
        this._bottomPosY = this.items[0].y - this.items[0].height;
      },
      enterWheel: function enterWheel(data) {
        var _this = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
             case 0:
              return _context2.abrupt("return", new Promise(function() {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(success) {
                  var i, config, node, parent_node;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                     case 0:
                      _this._successCallback = success;
                      _this._resultData = data;
                      _this._wheelConfig = data.item.items;
                      _this.node.active = true;
                      for (i = 0; i < 10; i++) {
                        config = _this._wheelConfig[i];
                        node = _this.items[i];
                        cc.find("coin", node).getComponent(cc.Label).string = Global.formatNumShort(config.mult * cc.vv.gameData.GetTotalBet());
                      }
                      parent_node = cc.find("parent", _this.node);
                      parent_node.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
                      _this.rate_2.active = 2 === data.knifeGame.mult;
                      _this.rate_3.active = 3 === data.knifeGame.mult;
                      _this._resultItem = _this.items[data.item.resultId - 1];
                      _this._winCoin = _this._wheelConfig[_this._resultData.item.resultId - 1].mult * _this._resultData.knifeGame.mult * cc.vv.gameData.GetTotalBet();
                      _context.next = 13;
                      return _this.awaitTime(2);

                     case 13:
                      _this._startMove = true;
                      cc.vv.AudioManager.playEff("games/GodAthena/", "wheel_spin", true);
                      _this.zhuanpanlizi.active = true;

                     case 16:
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
      getWinCoin: function getWinCoin() {
        return this._winCoin;
      },
      _moveEnd: function _moveEnd() {
        var _this2 = this;
        return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
          var startPos, endPos, particle, parent_node;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
             case 0:
              _this2.zhuanpanzhongjiang.active = true;
              cc.vv.AudioManager.playEff("games/GodAthena/", "wheel_win", true);
              _context3.next = 4;
              return _this2.awaitTime(1);

             case 4:
              if (!(1 !== _this2._resultData.knifeGame.mult)) {
                _context3.next = 19;
                break;
              }
              startPos = _this2.rate_2.convertToWorldSpaceAR(cc.v2(0, 0));
              startPos = _this2.node.convertToNodeSpaceAR(startPos);
              endPos = _this2._resultItem.convertToWorldSpaceAR(cc.v2(0, 0));
              endPos = _this2.node.convertToNodeSpaceAR(endPos);
              particle = cc.instantiate(cc.find("beishulizi", _this2.node.parent.parent));
              particle.parent = _this2.node;
              particle.position = startPos;
              particle.active = true;
              particle.runAction(cc.sequence(cc.moveTo(.5, endPos), cc.removeSelf()));
              _context3.next = 16;
              return _this2.awaitTime(.5);

             case 16:
              cc.find("coin", _this2._resultItem).getComponent(cc.Label).string = Global.formatNumShort(_this2._winCoin);
              _context3.next = 19;
              return _this2.awaitTime(1);

             case 19:
              parent_node = cc.find("parent", _this2.node);
              parent_node.runAction(cc.scaleTo(.5, 0).easing(cc.easeBackIn()));
              _context3.next = 23;
              return _this2.awaitTime(.5);

             case 23:
              _this2._successCallback();
              _this2._speed = 5;
              _this2._successCallback = null;
              _this2._resultItem = null;
              _this2._count = 12;
              _this2._needStop = false;
              _this2._resultData = null;
              _this2.zhuanpanzhongjiang.active = false;
              _this2.node.active = false;

             case 32:
             case "end":
              return _context3.stop();
            }
          }, _callee3);
        }))();
      },
      update: function update(dt) {
        if (this._startMove) {
          if (this._needStop) {
            this._speed -= this._speedOffset;
            this._speed <= this._minSpeed && (this._speed = this._minSpeed);
          } else {
            this._speed += this._speedOffset;
            this._speed >= this._maxSpeed && (this._speed = this._maxSpeed);
          }
          if (0 === this._count && this._resultItem.y <= 5 * this._resultItem.height) {
            this._needStop = true;
            this.zhuanpanlizi.active = false;
          }
          if (this._needStop && this._resultItem.y < 0) {
            this._startMove = false;
            this._backMove = true;
          }
          var _iterator = _createForOfIteratorHelper(this.items), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              if (item.y <= this._bottomPosY) {
                item.y += this.items.length * item.height;
                if (item === this._resultItem) {
                  this._count--;
                  this._count <= 0 && (this._count = 0);
                }
              }
              item.y -= this._speed;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._backMove) {
          var _iterator2 = _createForOfIteratorHelper(this.items), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _item = _step2.value;
              _item.y += this._minSpeed;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (this._resultItem.y > -1 && this._resultItem.y < 1) {
            this._backMove = false;
            this._moveEnd();
          }
        }
      },
      awaitTime: function awaitTime(time) {
        var _this3 = this;
        return new Promise(function(sucess, failed) {
          _this3.scheduleOnce(function() {
            sucess();
          }, time);
        });
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Athena_Cfg", "Athena_Logic", "Athena_PickBonusGame", "Athena_Reel", "Athena_ShieldGame", "Athena_Slots", "Athena_Symbol", "Athena_Wheel" ]);